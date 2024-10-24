/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';

export function tabCircle() {
  function centerActiveTab() {
    const tabsMenu = document.querySelector('.tab_menu_circle');
    const activeTab = document.querySelector('.cards_top_item.w--current');
    const parentContainer = document.querySelector('.tabs-2.w-tabs');
    const allTabs = document.querySelectorAll('.cards_top_item');

    if (!tabsMenu || !activeTab || !parentContainer || !allTabs) return;

    // Calcula o centro do contêiner e da aba ativa
    const containerCenter = parentContainer.offsetWidth / 2;
    const activeTabCenter = activeTab.offsetLeft + activeTab.offsetWidth / 2;
    const translateX = containerCenter - activeTabCenter;

    // Animação GSAP para mover o tabsMenu
    gsap.to(tabsMenu, {
      x: translateX, // Mover o container de tabs
      duration: 0.5, // Duração total para centralizar
      ease: 'power2.out',
    });

    // Animação individual de cada aba para dar o efeito de "batida"
    gsap.to(allTabs, {
      x: (i, tab) => {
        if (tab !== activeTab) {
          return Math.random() * 30 - 15; // Deslocamento lateral aleatório para simular "batida"
        }
        return 0;
      },
      duration: 0.2, // Duração rápida para o efeito de deslocamento
      ease: 'power1.inOut',
      stagger: 0.05, // Pequeno atraso entre as abas para o efeito em cadeia
      onComplete: () => {
        // Voltar as abas para o lugar
        gsap.to(allTabs, {
          x: 0,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)', // Efeito de elasticidade para simular o "impacto"
        });
      },
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tabsMenu = document.querySelector('.tab_menu_circle');
    if (!tabsMenu) return;

    tabsMenu.style.position = 'absolute';

    // Observador para detectar quando a classe w--current é adicionada
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('w--current')) {
          requestAnimationFrame(() => {
            centerActiveTab();
          });
        }
      });
    });

    // Observa todas as tabs
    document.querySelectorAll('.cards_top_item').forEach((tab) => {
      observer.observe(tab, {
        attributes: true,
        attributeFilter: ['class'],
      });

      // Listener de clique como backup
      tab.addEventListener('click', () => {
        requestAnimationFrame(() => {
          centerActiveTab();
        });
      });
    });

    // Centraliza a tab inicial
    centerActiveTab();

    // Centraliza novamente após a transição de qualquer aba
    tabsMenu.addEventListener('transitionend', centerActiveTab);
  });

  // Recalcula ao redimensionar
  window.addEventListener('resize', centerActiveTab);
}
