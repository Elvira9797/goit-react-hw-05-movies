(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{1454:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r,i=e(1523),o=e(168),a=e(1109).Z.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(46, 47, 66, 0.2);\n  z-index: 1000;\n"]))),c=e(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.g4,{height:"100",width:"100",radius:"9",color:"#f87719",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},2881:function(n,t,e){"use strict";e.d(t,{Z:function(){return r.Z}});var r=e(1454)},3259:function(n,t,e){"use strict";e.d(t,{Ht:function(){return d},WM:function(){return x},aF:function(){return p},e9:function(){return l},iz:function(){return h}});var r,i,o,a,c,u=e(168),s=e(1109),f=e(1087),l=s.Z.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 40px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=s.Z.li(i||(i=(0,u.Z)(["\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),d=s.Z.img(o||(o=(0,u.Z)(["\n  display: block;\n  width: 100%;\n  height: 460px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),x=(0,s.Z)(f.rU)(a||(a=(0,u.Z)(["\n  text-decoration: none;\n  color: white;\n"]))),h=s.Z.h2(c||(c=(0,u.Z)(["\n  margin-top: 10px;\n  margin-bottom: 5px;\n  font-size: 22px;\n"])))},8300:function(n,t){"use strict";t.Z=function(n){n("Oops, some error occurred. Please, try again later.")}},8917:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return C}});var r,i,o=e(3433),a=e(5861),c=e(9439),u=e(4687),s=e.n(u),f=e(2881),l=e(2791),p=e(4390),d=e(7596),x=e(3259),h=e(184),g=function(n){var t=n.trendingFilms;return(0,h.jsx)(x.e9,{children:t.map((function(n){var t=n.id,e=n.poster_path,r=n.title,i=n.name;return(0,h.jsx)(x.aF,{children:(0,h.jsxs)(x.WM,{to:"movies/".concat(t),children:[(0,h.jsx)(x.Ht,{src:"https://image.tmdb.org/t/p/original/".concat(e),alt:null!==r&&void 0!==r?r:i}),(0,h.jsx)(x.iz,{children:null!==r&&void 0!==r?r:i})]})},t)}))})},v=e(8300),m=e(168),b=e(1109),y=b.Z.button(r||(r=(0,m.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  margin: 0 auto;\n  background-color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: ",";\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  margin-top: 20px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.disabled?"#ccc":"#f77719"}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?"#ccc":"#ff6c00"})),w=function(n){var t=n.loadMore,e=n.children,r=n.isLoading;return(0,h.jsx)(h.Fragment,{children:r?(0,h.jsx)(y,{type:"button",disabled:!0,children:"Loading..."}):(0,h.jsx)(y,{type:"button",onClick:function(){return t()},children:e})})},Z=e(3881),j=e.n(Z),k=["title","titleId"];function O(){return O=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},O.apply(this,arguments)}function S(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function E(n,t){var e=n.title,r=n.titleId,o=S(n,k);return l.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:33,height:33,viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:1.5,strokeLinecap:"butt",strokeLinejoin:"round",ref:t,"aria-labelledby":r},o),e?l.createElement("title",{id:r},e):null,i||(i=l.createElement("path",{d:"M18 15l-6-6-6 6"})))}var _,T,L=l.forwardRef(E),M=(e.p,b.Z.button(_||(_=(0,m.Z)(["\n  position: fixed;\n  right: 20px;\n  bottom: 25px;\n  width: 45px;\n  height: 45px;\n  background: linear-gradient(#f87719, #f8b686);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0;\n  border: none;\n  transition-duration: 0.3s;\n   &.visible {\n    opacity: 1;\n  }\n   &:hover {\n    .text {\n      opacity: 1;\n      transition-duration: 0.7s;\n    }\n   \n"])))),z=b.Z.p(T||(T=(0,m.Z)(["\n  font-size: 0.7em;\n  width: 100px;\n  position: absolute;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -25px;\n  opacity: 0;\n  transition-duration: 0.7s;\n"]))),N=function(){var n=(0,l.useState)(!1),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=function(){var n=window.scrollY;r(n>600)};(0,l.useEffect)((function(){return window.addEventListener("scroll",j()(i,300)),function(){window.removeEventListener("scroll",i)}}),[]);return(0,h.jsxs)(M,{className:e?"visible":"",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[(0,h.jsx)(L,{}),(0,h.jsx)(z,{className:"text",children:"Back to Top"})]})},C=function(){var n=(0,l.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,l.useState)(null),u=(0,c.Z)(i,2),x=u[0],m=u[1],b=(0,l.useState)(!1),y=(0,c.Z)(b,2),Z=y[0],j=y[1],k=(0,l.useState)(1),O=(0,c.Z)(k,2),S=O[0],E=O[1],_=(0,l.useState)(!1),T=(0,c.Z)(_,2),L=T[0],M=T[1];(0,l.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),M(!1),E(1),n.next=6,(0,p.JS)(1);case 6:t=n.sent,r(t.results),M(!0),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),(0,v.Z)(m);case 14:return n.prev=14,j(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var z=function(){var n=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,p.JS)(S+1);case 4:t=n.sent,C(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),(0,v.Z)(m);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),C=function(n){var t=Math.floor(n.total_pages/20);S>=t?(j(!1),M(!1),d.Am.info("You've reached the end of search results.")):(r((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n.results))})),E((function(n){return n+1})),M(!0),j(!1))};return(0,l.useEffect)((function(){if(1!==S){var n=document.documentElement,t=n.scrollHeight-n.clientHeight;window.scrollTo({top:t,behavior:"smooth"})}}),[S]),(0,h.jsxs)("section",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Z&&(0,h.jsx)(f.Z,{}),x&&(0,h.jsx)("p",{children:x}),e.length>0&&(0,h.jsx)(g,{trendingFilms:e}),L&&(0,h.jsx)(w,{loadMore:z,isLoading:Z,children:"Load More"}),(0,h.jsx)(N,{})]})}},4390:function(n,t,e){"use strict";e.d(t,{JS:function(){return s},Jh:function(){return p},Pt:function(){return d},mt:function(){return l},ts:function(){return f}});var r=e(5861),i=e(4687),o=e.n(i),a=e(1243),c="https://api.themoviedb.org/3",u="07c0e032482e785f96b6eca01e8f41dd",s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/trending/all/day?api_key=").concat(u,"&page=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/search/movie?query=").concat(t,"&include_adult=false&api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3881:function(n,t,e){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,f="object"==typeof self&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),p=Object.prototype.toString,d=Math.max,x=Math.min,h=function(){return l.Date.now()};function g(n,t,e){var i,o,a,c,u,s,f=0,l=!1,p=!1,g=!0;if("function"!=typeof n)throw new TypeError(r);function b(t){var e=i,r=o;return i=o=void 0,f=t,c=n.apply(r,e)}function y(n){return f=n,u=setTimeout(Z,t),l?b(n):c}function w(n){var e=n-s;return void 0===s||e>=t||e<0||p&&n-f>=a}function Z(){var n=h();if(w(n))return j(n);u=setTimeout(Z,function(n){var e=t-(n-s);return p?x(e,a-(n-f)):e}(n))}function j(n){return u=void 0,g&&i?b(n):(i=o=void 0,c)}function k(){var n=h(),e=w(n);if(i=arguments,o=this,s=n,e){if(void 0===u)return y(s);if(p)return u=setTimeout(Z,t),b(s)}return void 0===u&&(u=setTimeout(Z,t)),c}return t=m(t)||0,v(e)&&(l=!!e.leading,a=(p="maxWait"in e)?d(m(e.maxWait)||0,t):a,g="trailing"in e?!!e.trailing:g),k.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=s=o=u=void 0},k.flush=function(){return void 0===u?c:j(h())},k}function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var e=a.test(n);return e||c.test(n)?u(n.slice(2),e?2:8):o.test(n)?NaN:+n}n.exports=function(n,t,e){var i=!0,o=!0;if("function"!=typeof n)throw new TypeError(r);return v(e)&&(i="leading"in e?!!e.leading:i,o="trailing"in e?!!e.trailing:o),g(n,t,{leading:i,maxWait:t,trailing:o})}}}]);
//# sourceMappingURL=917.2be73afa.chunk.js.map