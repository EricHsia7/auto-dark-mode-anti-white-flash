// ==UserScript==
// @name         auto-dark-mode-anti-white-flash
// @version      0.0.6
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
var autodarkmode;(()=>{"use strict";var a={d:(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e)},e={};a.d(e,{default:()=>o});var t={initialize:function(){var a=document.createElement("style");a.textContent="@media (prefers-color-scheme:dark){html{background-color:#000}body{opacity:0}}@media (prefers-color-scheme:light){html{background-color:#fff}body{opacity:0}}@keyframes auto-dark-mode-anti-white-flash-fade-in{0%{opacity:0}to{opacity:1}}.auto_dark_mode_anti_white_flash_fade_in{animation-direction:normal;animation-duration:.5s;animation-fill-mode:forwards;animation-name:auto-dark-mode-anti-white-flash-fade-in;animation-timing-function:ease;opacity:0}.auto_dark_mode_anti_white_flash_faded_in{opacity:1}",document.head.prepend(a),document.body.addEventListener("animationend",function(){document.body.classList.add("auto_dark_mode_anti_white_flash_faded_in"),document.body.classList.remove("auto_dark_mode_anti_white_flash_fade_in")},{once:!0}),document.addEventListener("autodarkmodeinitialized",function(){setTimeout(function(){document.body.classList.add("auto_dark_mode_anti_white_flash_fade_in")},300)})}};t.initialize();const o=t;autodarkmode=e.default})();