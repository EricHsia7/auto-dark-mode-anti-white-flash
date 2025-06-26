export function initialize(): void {
  const maskElement = document.createElement('div') as HTMLElement;
  maskElement.classList.add('auto_dark_mode_anti_white_flash_mask');

  maskElement.addEventListener(
    'transitionend',
    function (event: Event) {
      const target = event.target as HTMLElement;
      target.remove();
    },
    { once: true }
  );

  maskElement.addEventListener(
    'click',
    function (event: Event) {
      const target = event.target as HTMLElement;
      target.classList.add('auto_dark_mode_anti_white_flash_mask_hide');
    },
    { once: true }
  );

  document.documentElement.appendChild(maskElement);

  document.addEventListener('autodarkmodeinitialized', function () {
    setTimeout(function () {
      document.querySelector('.auto_dark_mode_anti_white_flash_mask').classList.add('auto_dark_mode_anti_white_flash_mask_hide');
    }, 300);
  });
}
