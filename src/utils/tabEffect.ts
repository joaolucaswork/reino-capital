/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function tabEffectsInit() {
  let lastClickedTabIndex = 0;
  // Adicione este evento de clique para todas as abas
  $('.atuacao_top_item').on('click', function () {
    lastClickedTabIndex = $(this).index();
  });

  $('.ts_trigger').each(function (index) {
    const totalTabs = $('.atuacao_top_item').length;
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top center',
      end: '+=0',
      markers: false,
      onEnter: () => {
        if (index + 1 > lastClickedTabIndex) {
          $('.atuacao_top_item')
            .eq(index + 1)
            .click();
          lastClickedTabIndex = index + 1;
        }
      },
      onEnterBack: () => {
        if (index < lastClickedTabIndex) {
          $('.atuacao_top_item').eq(index).click();
          lastClickedTabIndex = index;
        }
      },
    });
  });
}
