// ==UserScript==
// @name         auto-dark-mode-anti-white-flash
// @version      0.0.3
// @description  Prevent white flash under dark mode in Safari
// @author       erichsia7
// @inject-into  content
// @updateURL    https://erichsia7.github.io/auto-dark-mode-anti-white-flash/auto-dark-mode-anti-white-flash.user.js
// @downloadURL  https://erichsia7.github.io/auto-dark-mode-anti-white-flash/auto-dark-mode-anti-white-flash.user.js
// @match        *://*/*
// @run-at       document-start
// @exclude      *://accounts.google.*/*
// @exclude      *://myaccount.google.*/*
// @exclude      *://accounts.google.*.*/*
// @exclude      *://myaccount.google.*.*/*
// @exclude      *://*.youtube.com/*
// @exclude      *://github.*/*
// @exclude      *://*.github.dev/*
// @exclude      *://*.github.com/*
// @exclude      *://twitter.*/*
// @exclude      *://x.*/*
// @exclude      *://chatgpt.com/*
// ==/UserScript==
var autodarkmode;(()=>{"use strict";var e={d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>o});var a={initialize:function(){var e=document.createElement("style");e.textContent="@media (prefers-color-scheme: dark) {body:empty, html:empty {background-color:#161616;}} @media (prefers-color-scheme: light) {body:empty, html:empty {background-color:#ffffff;}} .auto_dark_mode_anti_white_flash_mask {position:fixed;top:0px;left:0px;width:100%;height:100%;user-select:none;-webkit-user-select:none;z-index:999999;opacity:1;transition:opacity 0.8s;display:flex;justify-content:center;align-items:center;background-color:transparent;color:#888888;font-size:12px;font-family:sans-serif;font-weight:300;backdrop-filter:brightness(50%);-webkit-backdrop-filter:brightness(50%);} .auto_dark_mode_anti_white_flash_mask_hide {opacity:0;}",document.head.prepend(e);var t=document.createElement("div");t.classList.add("auto_dark_mode_anti_white_flash_mask"),t.innerText="Auto Dark Mode",t.addEventListener("transitionend",function(e){e.target.remove()},{once:!0}),t.addEventListener("click",function(e){e.target.classList.add("auto_dark_mode_anti_white_flash_mask_hide")},{once:!0}),document.documentElement.appendChild(t),document.addEventListener("autodarkmodeinitialized",function(){setTimeout(function(){document.querySelector(".auto_dark_mode_anti_white_flash_mask").classList.add("auto_dark_mode_anti_white_flash_mask_hide")},300)})}};a.initialize();const o=a;autodarkmode=t.default})();