!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector("form button"),a=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]"),c=document.querySelector("input[name=amount]"),d=0;function f(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}u.addEventListener("click",(function(n){n.preventDefault();var o=+a.value;console.log(o);for(var t=1;t<=c.value;t+=1)1===t&&(d=o-Number(l.value)),d+=+l.value,f(t,d).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.97b0a701.js.map