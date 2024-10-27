/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function tabEffectsInit() {
  // Evento de clique para sincronizar as abas
  $('.atuamos_top_item').on('click', function () {
    const currentIndex = $(this).index();
    $('.tab_hidde').eq(currentIndex).trigger('click');
  });

  // ScrollTrigger simples apenas para navegação
  $('.ts_trigger').each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: 'top center',
      end: '+=0',
      markers: false,
      onEnter: () => {
        $('.atuamos_top_item')
          .eq(index + 1)
          .trigger('click');
      },
      onEnterBack: () => {
        $('.atuamos_top_item').eq(index).trigger('click');
      },
    });
  });
}
