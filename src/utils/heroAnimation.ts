/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function heroAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const interactionConfig = [
      {
        trigger: '.button-hero',
        targets: [
          { selector: '.tec_anim', class: 'big' },
          { selector: '.transp_anim.is-4', class: 'big' },
          { selector: '.transp_anim.is-2', class: 'big' },
          { selector: '.mini-animation-wrapper.is-2', class: 'active' },
        ],
      },
      // Adicione novas configurações de interação aqui
    ];

    // Codigo para animação do hero

    function handleInteraction(config, action) {
      config.targets.forEach((target) => {
        document.querySelectorAll(target.selector).forEach((element) => {
          element.classList[action](target.class);
        });
      });
    }

    interactionConfig.forEach((config) => {
      document.querySelectorAll(config.trigger).forEach((trigger) => {
        trigger.addEventListener('mouseover', () => handleInteraction(config, 'add'));
        trigger.addEventListener('mouseout', () => handleInteraction(config, 'remove'));
      });
    });
  });
}
