/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function processoAnimation() {
  gsap.registerPlugin(ScrollTrigger);
}
