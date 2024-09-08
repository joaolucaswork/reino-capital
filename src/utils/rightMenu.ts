/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

export function rightMenu() {
  gsap.registerPlugin(Flip);

  $('.bio_content-element').on('mouseenter', function () {
    // record starting state
    const state = Flip.getState('.bio_content-element, .tab_name, .image_content', {
      props: 'fontSize,padding',
    });
    // make changes
    $(this).siblings().addClass('closed');
    $(this).removeClass('closed');
    $(this).siblings().addClass('hide-text');
    // animate
    Flip.from(state, {
      duration: 1.5,
      nested: true,
      absolute: true,
      ease: 'power1.inOut',
    });
  });
}
