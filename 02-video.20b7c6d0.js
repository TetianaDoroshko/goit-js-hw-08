!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequire4c75;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequire4c75=t);var n=t("dCfNN"),i=document.querySelector("#vimeo-player"),l=new Vimeo.Player(i),a="videoplayer-current-time",c=function(e){localStorage.setItem(a,JSON.stringify(e))},f=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log("Error of parsing data from Local Storage")}};l.on("timeupdate",n((function(e){c(e.seconds)}),1e3)),localStorage.getItem(a)&&l.setCurrentTime(f(a))}();
//# sourceMappingURL=02-video.20b7c6d0.js.map