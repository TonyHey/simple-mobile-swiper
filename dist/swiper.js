!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){if(e&&e.children.length){var n=void 0,r=void 0,o=void 0,a=void 0,i=0,u=0,s=0,f=!1,l=e.parentNode,p="<span class='swiper-pagination-bullet'></span>",c="<span class='swiper-pagination-bullet swiper-pagination-bullet-active'></span>";t&&(f=t.pagination);var d=e.children,v=d[0].offsetWidth+parseInt(function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null)[t]}(d[0],"marginRight"),10),h=v*d.length-e.offsetWidth,g=function(e){var t=e.targetTouches[0],o=t.pageX,a=t.pageY;n=o,r=a,i=0,u=0},b=function(t){if(!i){var f=t.targetTouches[0],l=f.pageX,p=f.pageY;o=l-n,a=p-r,u||Math.abs(a)<Math.abs(o)?(u=1,t.preventDefault(),t.stopPropagation(),e.style.cssText="transition-duration: 0ms; transform: translate3d("+(o+s)+"px, 0px, 0px);"):i=1}},y=function(t){if(!i&&u){t.preventDefault(),t.stopPropagation();var n=void 0;if(n=(s+=o)/v,n=o>0?n+.4:n-.4,n=Math.round(n),s>0||1===d.length||h<=0?(s=0,n=0):Math.abs(s)>h||Math.abs(n)>=d.length-1?(s=-Math.abs(h),n=1-d.length):s=n*v,f){for(var r="",a=0;a<f.children.length;a+=1)r+=a!==Math.abs(n)?p:c;f.innerHTML=r}e.style.cssText="transition-duration: 300ms; transform: translate3d("+s+"px, 0px, 0px);"}};if(f){for(var m="",x=0;x<d.length;x+=1)m+=x?p:c;f.innerHTML=m}t&&t.unSwipe?(l.removeEventListener("touchstart",g),l.removeEventListener("touchmove",b,{passive:!1}),l.removeEventListener("touchend",y,{passive:!1})):(l.addEventListener("touchstart",g),l.addEventListener("touchmove",b),l.addEventListener("touchend",y))}}}])});