/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { defineCustomElement, MediaPlayButtonElement } from 'vidstack/elements';
import { VidstackPlayer } from 'vidstack/global/player';

export function videoSettings() {
  defineCustomElement(MediaPlayButtonElement);
}
