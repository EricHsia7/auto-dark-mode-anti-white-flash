// ==UserScript==
// @name         auto-dark-mode-anti-white-flash
// @version      0.0.7
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
var autodarkmode;(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function o(){var e=document.createElement("style");e.textContent="@media (prefers-color-scheme:dark){body:empty{background-color:#171717}}@media (prefers-color-scheme:light){body:empty{background-color:#fff}}",document.head.prepend(e)}e.d(t,{default:()=>a});var r={initialize:function(){o(),window.addEventListener("pageshow",function(e){e.persisted&&o()})}};r.initialize();const a=r;autodarkmode=t.default})();