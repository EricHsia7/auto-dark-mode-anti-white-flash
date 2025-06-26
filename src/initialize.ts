export function initialize(): void {
  const styleTag = document.createElement('style');
  styleTag.textContent = '@media (prefers-color-scheme:dark){html{background-color:#000}body{opacity:0}}@media (prefers-color-scheme:light){html{background-color:#fff}body{opacity:0}}@keyframes auto-dark-mode-anti-white-flash-fade-in{0%{opacity:0}to{opacity:1}}.auto_dark_mode_anti_white_flash_fade_in{animation-direction:normal;animation-duration:.5s;animation-fill-mode:forwards;animation-name:auto-dark-mode-anti-white-flash-fade-in;animation-timing-function:ease;opacity:0}.auto_dark_mode_anti_white_flash_faded_in{opacity:1}';
  document.head.prepend(styleTag);

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
