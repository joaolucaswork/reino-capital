/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function footerAnimation() {
  $(function () {
    // Inicializa o draggable nos elementos especificados e armazena a posição original
    $('.padding-animation, .main_r').draggable({
      start: function (event, ui) {
        // Armazena a posição original quando o arrasto começa, se ainda não estiver armazenada
        if (!$(this).data('originalPosition')) {
          $(this).data('originalPosition', ui.position);
        }
      },
    });

    // Ao clicar no elemento ".main_r", todos os elementos voltam à posição original
    $('.reino-logo-letter.last').on('click', function () {
      $('.padding-animation, .main_r').each(function () {
        const originalPosition = $(this).data('originalPosition');
        if (originalPosition) {
          $(this).animate(
            {
              top: originalPosition.top,
              left: originalPosition.left,
            },
            500
          ); // Adiciona uma animação suave ao retornar
        }
      });
    });
  });
}
