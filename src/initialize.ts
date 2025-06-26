export function initialize(): void {
  document.body.addEventListener(
    'animationend',
    function () {
      document.body.classList.add('auto_dark_mode_anti_white_flash_faded_in');
      document.body.classList.remove('auto_dark_mode_anti_white_flash_fade_in');
    },
    { once: true }
  );

  document.addEventListener('autodarkmodeinitialized', function () {
    setTimeout(function () {
      document.body.classList.add('auto_dark_mode_anti_white_flash_fade_in');
    }, 300);
  });
}
