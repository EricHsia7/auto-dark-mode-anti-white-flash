export function initialize(): void {
  const styleTagElement = document.createElement('style') as HTMLStyleElement;
  styleTagElement.textContent = `@media (prefers-color-scheme: dark) {body:empty, html:empty, .auto_dark_mode_anti_white_flash_mask {background-color:#161616;}} @media (prefers-color-scheme: light) {body:empty, html:empty, .auto_dark_mode_anti_white_flash_mask {background-color:#ffffff;}} .auto_dark_mode_anti_white_flash_mask {position:fixed;top:0px;left:0px;width:100%;height:100%;user-select:none;-webkit-user-select:none;z-index:999999;opacity:1;transition:opacity 0.8s;display:flex;justify-content:center;align-items:center;color:#888888;font-size:25px;font-family:sans-serif;font-weight:300;} .auto_dark_mode_anti_white_flash_mask_hide {opacity:0;}`;
  document.head.prepend(styleTagElement);

  const maskElement = document.createElement('div') as HTMLElement;
  maskElement.classList.add('auto_dark_mode_anti_white_flash_mask');
  maskElement.innerText = 'Auto Dark Mode'

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
