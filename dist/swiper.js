!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null)[t]},o=function(e,t){if(e&&e.children.length){var n=void 0,o=void 0,a=void 0,i=void 0,s=0,u=0,f=0,p=!1,l="<span class='swiper-pagination-bullet'></span>",c="<span class='swiper-pagination-bullet swiper-pagination-bullet-active'></span>";t&&(p=t.pagination);var d=e.children,v=d[0].offsetWidth+parseInt(r(d[0],"marginRight"),10),h=v*d.length-e.offsetWidth,g=function(e){var t=e.targetTouches[0],r=t.pageX,a=t.pageY;n=r,o=a,s=0,u=0},b=function(t){if(!s){var r=t.targetTouches[0],p=r.pageX,l=r.pageY;if(a=p-n,i=l-o,!(u||Math.abs(i)<Math.abs(a)))return void(s=1);u=1,t.preventDefault(),t.stopPropagation(),e.style.cssText="transition-duration: 0ms; transform: translate3d("+(a+f)+"px, 0px, 0px);"}},m=function(t){if(!s&&u){t.stopPropagation();var n=void 0;if(f+=a,n=f/v,n=a>0?n+.4:n-.4,n=Math.round(n),f>0||1===d.length||h<=0?(f=0,n=0):Math.abs(f)>h||Math.abs(n)>=d.length-1?(f=-Math.abs(h),n=1-d.length):f=n*v,p){for(var r="",o=0;o<p.children.length;o+=1)r+=o!==Math.abs(n)&&l||c;p.innerHTML=r}e.style.cssText="transition-duration: 300ms; transform: translate3d("+f+"px, 0px, 0px);"}};if(p){for(var x="",y=0;y<d.length;y+=1)x+=y&&l||c;p.innerHTML=x}t&&t.unSwipe?(e.removeEventListener("touchstart",g),e.removeEventListener("touchmove",b),e.removeEventListener("touchend",m)):(e.addEventListener("touchstart",g),e.addEventListener("touchmove",b),e.addEventListener("touchend",m))}};t.default=o}])});