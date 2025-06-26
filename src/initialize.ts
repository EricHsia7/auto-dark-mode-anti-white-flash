function addStyleTag(): void {
  const styleTag = document.createElement('style');
  styleTag.textContent = '@media (prefers-color-scheme:dark){body:empty{background-color:#171717}}@media (prefers-color-scheme:light){body:empty{background-color:#fff}}';
  document.head.prepend(styleTag);
}

export function initialize(): void {
  addStyleTag();

  window.addEventListener('pageshow', function (event: Event) {
    if (event.persisted) {
      addStyleTag();
    }
  });
}
