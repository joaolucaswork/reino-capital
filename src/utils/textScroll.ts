/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export function textScroll() {
  gsap.registerPlugin(ScrollTrigger);
  // Split text into spans
  const typeSplit = new SplitType('[text-split]', {
    types: 'words, chars',
    tagName: 'span',
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    });
  }

  $('[words-slide-up]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      ease: 'back.out(3)',
      stagger: { amount: 0.5 },
    });
    createScrollTrigger($(this), tl);
  });

  $('[words-rotate-in]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.set($(this).find('.word'), { transformPerspective: 1000 });
    tl.from($(this).find('.word'), {
      rotationX: -90,
      duration: 0.6,
      ease: 'power2.out',
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $('[words-slide-from-right]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      opacity: 0,
      x: '1em',
      duration: 0.6,
      ease: 'power2.out',
      stagger: { amount: 0.2 },
    });
    createScrollTrigger($(this), tl);
  });

  $('[letters-slide-up]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.char'), {
      yPercent: 100,
      duration: 0.3,
      ease: 'power3.out',
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  $('[letters-slide-down]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.char'), {
      yPercent: -120,
      duration: 0.6,
      ease: 'power3.out',
      stagger: { amount: 0.6 },
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 });
}
