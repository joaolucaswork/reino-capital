/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function changeTheme() {
  //Trocar tema
  function toggleTheme() {
    const currentTheme = document.body.getAttribute('element-theme');
    const newTheme = currentTheme === '1' ? '2' : '1';
    document.body.setAttribute('element-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('element-theme', savedTheme);
    } else {
      setThemeBasedOnSystem();
    }
  });

  const changeModeLink = document.querySelector('.change-mode');
  changeModeLink.addEventListener('click', function (event) {
    event.preventDefault();
    toggleTheme();
  });

  // Adicionar listener para mudanças no tema do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setThemeBasedOnSystem();
    }
  });
}
