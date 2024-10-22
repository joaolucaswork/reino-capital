/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import createGlobe from 'cobe';

export function globeEffect() {
  let phi = 0;
  const theta = 0.2; // Ajuste para centralizar o Brasil na posição correta
  const canvas = document.getElementById('cobe');

  const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1500,
    height: 1500,
    phi: phi, // Inicia a rotação a partir de phi 0
    theta: theta, // Corrige o alinhamento para não ficar de cabeça para baixo
    dark: 0,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [0.89, 0.67, 0.13], // Cor #e3ac21 no formato [r, g, b]
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
      { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo, Brasil
      { location: [-8.0476, -34.877], size: 0.1 }, // Pernambuco, Brasil
    ],
    onRender: (state) => {
      state.phi = phi;
      phi += 0.006; // Velocidade de rotação mais lenta
    },
  });
}
