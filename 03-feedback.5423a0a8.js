!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o);var n=o("dCfNN");refs={form:document.querySelector(".feedback-form"),inpEmail:document.querySelector('[name="email"]'),inpMessage:document.querySelector('[name="message"]'),btnSubmit:document.querySelector('[type="submit"]')};var a,l,i,u="feedback-form-state",f=function(e){localStorage.setItem(u,JSON.stringify(e))},s=function(e){localStorage.getItem(e)&&localStorage.removeItem(e)},c=null!==(a=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log("Error of parsing data from Local Storage")}}(u))&&void 0!==a?a:{};refs.inpEmail.value=null!==(l=c.email)&&void 0!==l?l:"",refs.inpMessage.value=null!==(i=c.message)&&void 0!==i?i:"",refs.form.addEventListener("input",n((function(e){c[e.target.name]=e.target.value,f(c)}),500)),refs.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(c),e.currentTarget.reset(),s(u)}))}();
//# sourceMappingURL=03-feedback.5423a0a8.js.map