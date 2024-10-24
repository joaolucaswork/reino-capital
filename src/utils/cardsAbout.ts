/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const { Dragdealer } = require('dragdealer');

export function cardAbout() {
  // Calcula a largura disponível para scroll
  const scrollWidth = $('.content-body').outerWidth() - $('.content-mask').outerWidth();

  new Dragdealer('content-scroller', {
    horizontal: true,
    vertical: false,
    steps: 5,
    requestAnimationFrame: true,
    slide: true,
    animationCallback: function (x, y) {
      // Move o conteúdo baseado na posição da handle
      // x vai de 0 a 1, multiplicamos pela largura disponível para scroll
      $('.content-body').css('transform', `translateX(${-x * scrollWidth}px)`);
    },
  });
}
