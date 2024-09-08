/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function tabEffects() {
  const tabMenu = document.querySelector('.w-tab-menu');
  const backgroundSlider = document.querySelector('.background_slider');

  // Remover qualquer tabIndex existente e garantir que o backgroundSlider não tenha a classe de aba
  backgroundSlider.removeAttribute('tabindex');
  backgroundSlider.classList.remove('w-tab-link');

  const updateSlider = () => {
    const activeTab = tabMenu.querySelector('.w--current');

    // Verifica se a aba ativa é o backgroundSlider
    if (!activeTab || activeTab === backgroundSlider) return;

    const {
      offsetWidth: width,
      offsetHeight: height,
      offsetLeft: left,
      offsetTop: top,
    } = activeTab;
    const isMobile = window.innerWidth <= 700;

    backgroundSlider.style.width = isMobile ? 'calc(100% - 10px)' : `${width}px`;
    backgroundSlider.style.height = `${height - 10}px`;
    backgroundSlider.style.transform = isMobile
      ? `translateY(${top}px)`
      : `translate(${left}px, ${top}px)`;
  };

  updateSlider();

  new MutationObserver(updateSlider).observe(tabMenu, { attributes: true, subtree: true });
  window.addEventListener('resize', updateSlider);
}
