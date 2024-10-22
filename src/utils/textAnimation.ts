/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import materialize from 'materialize-css';

export function textAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const buttons = document.querySelectorAll('.nav-link');

  buttons.forEach((button) => {
    let buttonWidth;

    button.addEventListener('mouseenter', (e) => {
      buttonWidth = button.offsetWidth;
      updateDirection(e, button);
    });

    button.addEventListener('mousemove', (e) => updateDirection(e, button));

    function updateDirection(e, button) {
      const mouseX = e.clientX - button.getBoundingClientRect().left;
      if (mouseX > buttonWidth / 2) {
        // Mouse na direita, linha vai para a esquerda
        button.classList.add('left-to-right');
      } else {
        // Mouse na esquerda, linha vai para a direita
        button.classList.remove('left-to-right');
      }
    }
  });

  // Variables
  const scramble = document.querySelectorAll('.scramble');
  const scrambleTL = gsap.timeline({
    scrollTrigger: {
      trigger: scramble,
      start: 'top bottom',
      end: 'top 50%',
      toggleActions: 'play none none none',
    },
  });
  // GSAP Scramble Effect
  scrambleTL.to(scramble, {
    duration: 3,
    stagger: 0.2,
    scrambleText: { speed: 0.5, text: '{original}', chars: '+?84564XERSHKZN' },
  });
}
