!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire4c75=n);var r,a,l,i=n("dCfNN"),u={form:document.querySelector(".feedback-form"),inpEmail:document.querySelector('[name="email"]'),inpMessage:document.querySelector('[name="message"]'),btnSubmit:document.querySelector('[type="submit"]')},c="feedback-form-state",f=function(e){localStorage.setItem(c,JSON.stringify(e))},d=function(e){localStorage.getItem(e)&&localStorage.removeItem(e)},s=null!==(r=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log("Error of parsing data from Local Storage")}}(c))&&void 0!==r?r:{};u.inpEmail.value=null!==(a=s.email)&&void 0!==a?a:"",u.inpMessage.value=null!==(l=s.message)&&void 0!==l?l:"",u.form.addEventListener("input",i((function(e){s[e.target.name]=e.target.value,f(s)}),500)),u.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(s),e.currentTarget.reset(),d(c)}))}();
//# sourceMappingURL=03-feedback.976ba0a9.js.map
