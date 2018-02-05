/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
;/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#buttons
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#carousel
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#collapse
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#dropdowns
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#popovers
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#scrollspy
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tabs
 * ========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#affix
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);;/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);;/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);;/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);;/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);;/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
;/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
;/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
;/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);;/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);;/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);;/*! jlstudios 2017-12-12 */

window.Modernizr=function(t,e,n){function i(t){v.cssText=t}function o(t,e){return i(x.join(t+";")+(e||""))}function r(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var o=t[i];if(!s(o,"-")&&v[o]!==n)return"pfx"!=e||o}return!1}function l(t,e,i){for(var o in t){var s=e[t[o]];if(s!==n)return!1===i?t[o]:r(s,"function")?s.bind(i||e):s}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+C.join(i+" ")+i).split(" ");return r(e,"string")||r(e,"undefined")?a(o,e):(o=(t+" "+T.join(i+" ")+i).split(" "),l(o,e,n))}var u,d,f={},p=e.documentElement,h="modernizr",m=e.createElement(h),v=m.style,g=e.createElement("input"),y=":)",b={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",C=w.split(" "),T=w.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},$={},E={},S={},N=[],j=N.slice,D=function(t,n,i,o){var r,s,a,l,c=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=o?o[i]:h+(i+1),c.appendChild(a);return r=["&#173;",'<style id="s',h,'">',t,"</style>"].join(""),c.id=h,(u?c:d).innerHTML+=r,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),s=n(c,t),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),p.style.overflow=l),!!s},A=function(){var t={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(i,o){o=o||e.createElement(t[i]||"div");var s=(i="on"+i)in o;return s||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(i,""),s=r(o[i],"function"),r(o[i],"undefined")||(o[i]=n),o.removeAttribute(i))),o=null,s}}(),L={}.hasOwnProperty;d=r(L,"undefined")||r(L.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return L.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=j.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,n.concat(j.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(j.call(arguments)))};return i}),$.flexbox=function(){return c("flexWrap")},$.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},$.canvastext=function(){return!!f.canvas&&!!r(e.createElement("canvas").getContext("2d").fillText,"function")},$.webgl=function(){return!!t.WebGLRenderingContext},$.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:D(["@media (",x.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},$.geolocation=function(){return"geolocation"in navigator},$.postmessage=function(){return!!t.postMessage},$.websqldatabase=function(){return!!t.openDatabase},$.indexedDB=function(){return!!c("indexedDB",t)},$.hashchange=function(){return A("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},$.history=function(){return!!t.history&&!!history.pushState},$.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},$.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},$.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),s(v.backgroundColor,"rgba")},$.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),s(v.backgroundColor,"rgba")||s(v.backgroundColor,"hsla")},$.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},$.backgroundsize=function(){return c("backgroundSize")},$.borderimage=function(){return c("borderImage")},$.borderradius=function(){return c("borderRadius")},$.boxshadow=function(){return c("boxShadow")},$.textshadow=function(){return""===e.createElement("div").style.textShadow},$.opacity=function(){return o("opacity:.55"),/^0.55$/.test(v.opacity)},$.cssanimations=function(){return c("animationName")},$.csscolumns=function(){return c("columnCount")},$.cssgradients=function(){var t="background-image:";return i((t+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+t)+x.join("linear-gradient(left top,#9f9, white);"+t)).slice(0,-t.length)),s(v.backgroundImage,"gradient")},$.cssreflections=function(){return c("boxReflect")},$.csstransforms=function(){return!!c("transform")},$.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in p.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,n){t=9===e.offsetLeft&&3===e.offsetHeight}),t},$.csstransitions=function(){return c("transition")},$.fontface=function(){var t;return D('@font-face {font-family:"font";src:url("https://")}',function(n,i){var o=e.getElementById("smodernizr"),r=o.sheet||o.styleSheet,s=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";t=/src/i.test(s)&&0===s.indexOf(i.split(" ")[0])}),t},$.generatedcontent=function(){var t;return D(["#",h,"{font:0/0 a}#",h,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},$.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(t){}return n},$.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n},$.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(t){return!1}},$.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(t){return!1}},$.webworkers=function(){return!!t.Worker},$.applicationcache=function(){return!!t.applicationCache},$.svg=function(){return!!e.createElementNS&&!!e.createElementNS(k.svg,"svg").createSVGRect},$.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==k.svg},$.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(b.call(e.createElementNS(k.svg,"animate")))},$.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(b.call(e.createElementNS(k.svg,"clipPath")))};for(var H in $)d($,H)&&(u=H.toLowerCase(),f[u]=$[H](),N.push((f[u]?"":"no-")+u));return f.input||(f.input=function(n){for(var i=0,o=n.length;i<o;i++)S[n[i]]=n[i]in g;return S.list&&(S.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),S}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var i,o,r,s=0,a=t.length;s<a;s++)g.setAttribute("type",o=t[s]),(i="text"!==g.type)&&(g.value=y,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&g.style.WebkitAppearance!==n?(p.appendChild(g),r=e.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,p.removeChild(g)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?g.checkValidity&&!1===g.checkValidity():g.value!=y)),E[t[s]]=!!i;return E}("search tel url email datetime date month week time datetime-local number range color".split(" "))),f.addTest=function(t,e){if("object"==typeof t)for(var i in t)d(t,i)&&f.addTest(i,t[i]);else{if(t=t.toLowerCase(),f[t]!==n)return f;e="function"==typeof e?e():e,p.className+=" "+(e?"":"no-")+t,f[t]=e}return f},i(""),m=g=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=m[t[p]];return e||(e={},h++,t[p]=h,m[h]=e),e}function r(t,n,i){if(n||(n=e),c)return n.createElement(t);i||(i=o(n));var r;return!(r=i.cache[t]?i.cache[t].cloneNode():f.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t)).canHaveChildren||d.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function a(t){t||(t=e);var i=o(t);return v.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(t,i),t}var l,c,u=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",h=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){l=!0,c=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==u.shivCSS,supportsUnknownElements:c,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:a,createElement:r,createDocumentFragment:function(t,n){if(t||(t=e),c)return t.createDocumentFragment();for(var r=(n=n||o(t)).frag.cloneNode(),s=0,a=i(),l=a.length;s<l;s++)r.createElement(a[s]);return r}};t.html5=v,a(e)}(this,e),f._version="2.8.3",f._prefixes=x,f._domPrefixes=T,f._cssomPrefixes=C,f.mq=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return D("@media "+e+" { #"+h+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},f.hasEvent=A,f.testProp=function(t){return a([t])},f.testAllProps=c,f.testStyles=D,f.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+N.join(" "),f}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==v.call(t)}function o(t){return"string"==typeof t}function r(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=g.shift();y=1,t?t.t?h(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):y=0}function l(t,n,i,o,r,l,c){function u(e){if(!p&&s(d.readyState)&&(b.r=p=1,!y&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&h(function(){w.removeChild(d)},50);for(var i in E[n])E[n].hasOwnProperty(i)&&E[n][i].onload()}}var c=c||f.errorTimeout,d=e.createElement(t),p=0,v=0,b={t:i,s:n,e:r,a:l,x:c};1===E[n]&&(v=1,E[n]=[]),"object"==t?d.data=n:(d.src=n,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},g.splice(o,0,b),"img"!=t&&(v||2===E[n]?(w.insertBefore(d,x?null:m),h(u,c)):E[n].push(d))}function c(t,e,n,i,r){return y=0,e=e||"j",o(t)?l("c"==e?T:C,t,e,this.i++,n,i,r):(g.splice(this.i++,0,t),1==g.length&&a()),this}function u(){var t=f;return t.loader={load:c,i:0},t}var d,f,p=e.documentElement,h=t.setTimeout,m=e.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,x=b&&!!e.createRange().compareNode,w=x?p:m.parentNode,p=t.opera&&"[object Opera]"==v.call(t.opera),p=!!e.attachEvent&&!p,C=b?"object":p?"script":"img",T=p?"script":C,k=Array.isArray||function(t){return"[object Array]"==v.call(t)},$=[],E={},S={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};(f=function(t){function e(t){var e,n,i,t=t.split("!"),o=$.length,r=t.pop(),s=t.length,r={url:r,origUrl:r,prefixes:t};for(n=0;n<s;n++)i=t[n].split("="),(e=S[i.shift()])&&(r=e(r,i));for(n=0;n<o;n++)r=$[n](r);return r}function s(t,o,r,s,a){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=i(o)?o:o[t]||o[s]||o[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,o,r,s,a):(E[l.url]?l.noexec=!0:E[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(o)||i(c))&&r.load(function(){u(),o&&o(l.origUrl,a,s),c&&c(l.origUrl,a,s),E[l.url]=2})))}function a(t,e){function n(t,n){if(t){if(o(t))n||(d=function(){var t=[].slice.call(arguments);f.apply(this,t),p()}),s(t,d,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(l)&&(!n&&!--a&&(i(d)?d=function(){var t=[].slice.call(arguments);f.apply(this,t),p()}:d[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(f[l])),s(t[l],d,e,l,c))}else!n&&p()}var a,l,c=!!t.test,u=t.load||t.both,d=t.callback||r,f=d,p=t.complete||r;n(c?t.yep:t.nope,!!u),u&&n(u)}var l,c,d=this.yepnope.loader;if(o(t))s(t,0,d,0);else if(k(t))for(l=0;l<t.length;l++)c=t[l],o(c)?s(c,0,d,0):k(c)?f(c):Object(c)===c&&a(c,d);else Object(t)===t&&a(t,d)}).addPrefix=function(t,e){S[t]=e},f.addFilter=function(t){$.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,i,o,l,c){var u,d,p=e.createElement("script"),o=o||f.errorTimeout;p.src=t;for(d in i)p.setAttribute(d,i[d]);n=c?a:n||r,p.onreadystatechange=p.onload=function(){!u&&s(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,n,i,o,s,l){var c,o=e.createElement("link"),n=l?a:n||r;o.href=t,o.rel="stylesheet",o.type="text/css";for(c in i)o.setAttribute(c,i[c]);s||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=!!t&&"length"in t&&t.length,n=ft.type(t);return"function"!==n&&!ft.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function i(t,e,n){if(ft.isFunction(e))return ft.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return ft.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(Ct.test(e))return ft.filter(e,t,n);e=ft.filter(e,t)}return ft.grep(t,function(t){return ft.inArray(t,e)>-1!==n})}function o(t,e){do{t=t[e]}while(t&&1!==t.nodeType);return t}function r(t){var e={};return ft.each(t.match(St)||[],function(t,n){e[n]=!0}),e}function s(){nt.addEventListener?(nt.removeEventListener("DOMContentLoaded",a),t.removeEventListener("load",a)):(nt.detachEvent("onreadystatechange",a),t.detachEvent("onload",a))}function a(){(nt.addEventListener||"load"===t.event.type||"complete"===nt.readyState)&&(s(),ft.ready())}function l(t,e,n){if(void 0===n&&1===t.nodeType){var i="data-"+e.replace(Lt,"-$1").toLowerCase();if("string"==typeof(n=t.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:At.test(n)?ft.parseJSON(n):n)}catch(t){}ft.data(t,e,n)}else n=void 0}return n}function c(t){var e;for(e in t)if(("data"!==e||!ft.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function u(t,e,n,i){if(Dt(t)){var o,r,s=ft.expando,a=t.nodeType,l=a?ft.cache:t,c=a?t[s]:t[s]&&s;if(c&&l[c]&&(i||l[c].data)||void 0!==n||"string"!=typeof e)return c||(c=a?t[s]=et.pop()||ft.guid++:s),l[c]||(l[c]=a?{}:{toJSON:ft.noop}),("object"==typeof e||"function"==typeof e)&&(i?l[c]=ft.extend(l[c],e):l[c].data=ft.extend(l[c].data,e)),r=l[c],i||(r.data||(r.data={}),r=r.data),void 0!==n&&(r[ft.camelCase(e)]=n),"string"==typeof e?null==(o=r[e])&&(o=r[ft.camelCase(e)]):o=r,o}}function d(t,e,n){if(Dt(t)){var i,o,r=t.nodeType,s=r?ft.cache:t,a=r?t[ft.expando]:ft.expando;if(s[a]){if(e&&(i=n?s[a]:s[a].data)){ft.isArray(e)?e=e.concat(ft.map(e,ft.camelCase)):e in i?e=[e]:(e=ft.camelCase(e),e=e in i?[e]:e.split(" ")),o=e.length;for(;o--;)delete i[e[o]];if(n?!c(i):!ft.isEmptyObject(i))return}(n||(delete s[a].data,c(s[a])))&&(r?ft.cleanData([t],!0):ut.deleteExpando||s!=s.window?delete s[a]:s[a]=void 0)}}}function f(t,e,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return ft.css(t,e,"")},l=a(),c=n&&n[3]||(ft.cssNumber[e]?"":"px"),u=(ft.cssNumber[e]||"px"!==c&&+l)&&Pt.exec(ft.css(t,e));if(u&&u[3]!==c){c=c||u[3],n=n||[],u=+l||1;do{r=r||".5",u/=r,ft.style(t,e,u+c)}while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(u=+u||+l||0,o=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=o)),o}function p(t){var e=Bt.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function h(t,e){var n,i,o=0,r=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):void 0;if(!r)for(r=[],n=t.childNodes||t;null!=(i=n[o]);o++)!e||ft.nodeName(i,e)?r.push(i):ft.merge(r,h(i,e));return void 0===e||e&&ft.nodeName(t,e)?ft.merge([t],r):r}function m(t,e){for(var n,i=0;null!=(n=t[i]);i++)ft._data(n,"globalEval",!e||ft._data(e[i],"globalEval"))}function v(t){Ot.test(t.type)&&(t.defaultChecked=t.checked)}function g(t,e,n,i,o){for(var r,s,a,l,c,u,d,f=t.length,g=p(e),y=[],b=0;f>b;b++)if((s=t[b])||0===s)if("object"===ft.type(s))ft.merge(y,s.nodeType?[s]:s);else if(zt.test(s)){for(l=l||g.appendChild(e.createElement("div")),c=(_t.exec(s)||["",""])[1].toLowerCase(),d=It[c]||It._default,l.innerHTML=d[1]+ft.htmlPrefilter(s)+d[2],r=d[0];r--;)l=l.lastChild;if(!ut.leadingWhitespace&&Rt.test(s)&&y.push(e.createTextNode(Rt.exec(s)[0])),!ut.tbody)for(r=(s="table"!==c||Xt.test(s)?"<table>"!==d[1]||Xt.test(s)?0:l:l.firstChild)&&s.childNodes.length;r--;)ft.nodeName(u=s.childNodes[r],"tbody")&&!u.childNodes.length&&s.removeChild(u);for(ft.merge(y,l.childNodes),l.textContent="";l.firstChild;)l.removeChild(l.firstChild);l=g.lastChild}else y.push(e.createTextNode(s));for(l&&g.removeChild(l),ut.appendChecked||ft.grep(h(y,"input"),v),b=0;s=y[b++];)if(i&&ft.inArray(s,i)>-1)o&&o.push(s);else if(a=ft.contains(s.ownerDocument,s),l=h(g.appendChild(s),"script"),a&&m(l),n)for(r=0;s=l[r++];)Wt.test(s.type||"")&&n.push(s);return l=null,g}function y(){return!0}function b(){return!1}function x(){try{return nt.activeElement}catch(t){}}function w(t,e,n,i,o,r){var s,a;if("object"==typeof e){"string"!=typeof n&&(i=i||n,n=void 0);for(a in e)w(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=b;else if(!o)return t;return 1===r&&(s=o,o=function(t){return ft().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=ft.guid++)),t.each(function(){ft.event.add(this,e,o,i,n)})}function C(t,e){return ft.nodeName(t,"table")&&ft.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function T(t){return t.type=(null!==ft.find.attr(t,"type"))+"/"+t.type,t}function k(t){var e=ne.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function $(t,e){if(1===e.nodeType&&ft.hasData(t)){var n,i,o,r=ft._data(t),s=ft._data(e,r),a=r.events;if(a){delete s.handle,s.events={};for(n in a)for(i=0,o=a[n].length;o>i;i++)ft.event.add(e,n,a[n][i])}s.data&&(s.data=ft.extend({},s.data))}}function E(t,e){var n,i,o;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!ut.noCloneEvent&&e[ft.expando]){o=ft._data(e);for(i in o.events)ft.removeEvent(e,i,o.handle);e.removeAttribute(ft.expando)}"script"===n&&e.text!==t.text?(T(e).text=t.text,k(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),ut.html5Clone&&t.innerHTML&&!ft.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&Ot.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}}function S(t,e,n,i){e=ot.apply([],e);var o,r,s,a,l,c,u=0,d=t.length,f=d-1,p=e[0],m=ft.isFunction(p);if(m||d>1&&"string"==typeof p&&!ut.checkClone&&ee.test(p))return t.each(function(o){var r=t.eq(o);m&&(e[0]=p.call(this,o,r.html())),S(r,e,n,i)});if(d&&(c=g(e,t[0].ownerDocument,!1,t,i),o=c.firstChild,1===c.childNodes.length&&(c=o),o||i)){for(s=(a=ft.map(h(c,"script"),T)).length;d>u;u++)r=c,u!==f&&(r=ft.clone(r,!0,!0),s&&ft.merge(a,h(r,"script"))),n.call(t[u],r,u);if(s)for(l=a[a.length-1].ownerDocument,ft.map(a,k),u=0;s>u;u++)r=a[u],Wt.test(r.type||"")&&!ft._data(r,"globalEval")&&ft.contains(l,r)&&(r.src?ft._evalUrl&&ft._evalUrl(r.src):ft.globalEval((r.text||r.textContent||r.innerHTML||"").replace(ie,"")));c=o=null}return t}function N(t,e,n){for(var i,o=e?ft.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||ft.cleanData(h(i)),i.parentNode&&(n&&ft.contains(i.ownerDocument,i)&&m(h(i,"script")),i.parentNode.removeChild(i));return t}function j(t,e){var n=ft(e.createElement(t)).appendTo(e.body),i=ft.css(n[0],"display");return n.detach(),i}function D(t){var e=nt,n=se[t];return n||("none"!==(n=j(t,e))&&n||(re=(re||ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),(e=(re[0].contentWindow||re[0].contentDocument).document).write(),e.close(),n=j(t,e),re.detach()),se[t]=n),n}function A(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function L(t){if(t in we)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=xe.length;n--;)if((t=xe[n]+e)in we)return t}function H(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)(i=t[s]).style&&(r[s]=ft._data(i,"olddisplay"),n=i.style.display,e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Mt(i)&&(r[s]=ft._data(i,"olddisplay",D(i.nodeName)))):(o=Mt(i),(n&&"none"!==n||!o)&&ft._data(i,"olddisplay",o?n:ft.css(i,"display"))));for(s=0;a>s;s++)(i=t[s]).style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"));return t}function P(t,e,n){var i=ge.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function q(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=ft.css(t,n+qt[r],!0,o)),i?("content"===n&&(s-=ft.css(t,"padding"+qt[r],!0,o)),"margin"!==n&&(s-=ft.css(t,"border"+qt[r]+"Width",!0,o))):(s+=ft.css(t,"padding"+qt[r],!0,o),"padding"!==n&&(s+=ft.css(t,"border"+qt[r]+"Width",!0,o)));return s}function M(e,n,i){var o=!0,r="width"===n?e.offsetWidth:e.offsetHeight,s=de(e),a=ut.boxSizing&&"border-box"===ft.css(e,"boxSizing",!1,s);if(nt.msFullscreenElement&&t.top!==t&&e.getClientRects().length&&(r=Math.round(100*e.getBoundingClientRect()[n])),0>=r||null==r){if((0>(r=fe(e,n,s))||null==r)&&(r=e.style[n]),le.test(r))return r;o=a&&(ut.boxSizingReliable()||r===e.style[n]),r=parseFloat(r)||0}return r+q(e,n,i||(a?"border":"content"),o,s)+"px"}function F(t,e,n,i,o){return new F.prototype.init(t,e,n,i,o)}function O(){return t.setTimeout(function(){Ce=void 0}),Ce=ft.now()}function _(t,e){var n,i={height:t},o=0;for(e=e?1:0;4>o;o+=2-e)n=qt[o],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function W(t,e,n){for(var i,o=(B.tweeners[e]||[]).concat(B.tweeners["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,e,t))return i}function R(t,e){var n,i,o,r,s;for(n in t)if(i=ft.camelCase(n),o=e[i],r=t[n],ft.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=ft.cssHooks[i])&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function B(t,e,n){var i,o,r=0,s=B.prefilters.length,a=ft.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=Ce||O(),n=Math.max(0,c.startTime+c.duration-e),i=1-(n/c.duration||0),r=0,s=c.tweens.length;s>r;r++)c.tweens[r].run(i);return a.notifyWith(t,[c,i,n]),1>i&&s?n:(a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:ft.extend({},e),opts:ft.extend(!0,{specialEasing:{},easing:ft.easing._default},n),originalProperties:e,originalOptions:n,startTime:Ce||O(),duration:n.duration,tweens:[],createTween:function(e,n){var i=ft.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),u=c.props;for(R(u,c.opts.specialEasing);s>r;r++)if(i=B.prefilters[r].call(c,t,u,c.opts))return ft.isFunction(i.stop)&&(ft._queueHooks(c.elem,c.opts.queue).stop=ft.proxy(i.stop,i)),i;return ft.map(u,W,c),ft.isFunction(c.opts.start)&&c.opts.start.call(t,c),ft.fx.timer(ft.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function I(t){return ft.attr(t,"class")||""}function z(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(St)||[];if(ft.isFunction(n))for(;i=r[o++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function X(t,e,n,i){function o(a){var l;return r[a]=!0,ft.each(t[a]||[],function(t,a){var c=a(e,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=t===Ve;return o(e.dataTypes[0])||!r["*"]&&o("*")}function Q(t,e){var n,i,o=ft.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((o[i]?t:n||(n={}))[i]=e[i]);return n&&ft.extend(!0,t,n),t}function U(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"));if(o)for(s in a)if(a[s]&&a[s].test(o)){l.unshift(s);break}if(l[0]in n)r=l[0];else{for(s in n){if(!l[0]||t.converters[s+" "+l[0]]){r=s;break}i||(i=s)}r=r||i}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function V(t,e,n,i){var o,r,s,a,l,c={},u=t.dataTypes.slice();if(u[1])for(s in t.converters)c[s.toLowerCase()]=t.converters[s];for(r=u.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=u.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}function G(t){return t.style&&t.style.display||ft.css(t,"display")}function J(t){for(;t&&1===t.nodeType;){if("none"===G(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function Y(t,e,n,i){var o;if(ft.isArray(e))ft.each(e,function(e,o){n||Ze.test(t)?i(t,o):Y(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)});else if(n||"object"!==ft.type(e))i(t,e);else for(o in e)Y(t+"["+o+"]",e[o],n,i)}function K(){try{return new t.XMLHttpRequest}catch(t){}}function Z(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function tt(t){return ft.isWindow(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}var et=[],nt=t.document,it=et.slice,ot=et.concat,rt=et.push,st=et.indexOf,at={},lt=at.toString,ct=at.hasOwnProperty,ut={},dt="1.12.0",ft=function(t,e){return new ft.fn.init(t,e)},pt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ht=/^-ms-/,mt=/-([\da-z])/gi,vt=function(t,e){return e.toUpperCase()};ft.fn=ft.prototype={jquery:dt,constructor:ft,selector:"",length:0,toArray:function(){return it.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:it.call(this)},pushStack:function(t){var e=ft.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){return ft.each(this,t)},map:function(t){return this.pushStack(ft.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(it.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:rt,sort:et.sort,splice:et.splice},ft.extend=ft.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||ft.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(o=arguments[a]))for(i in o)t=s[i],n=o[i],s!==n&&(c&&n&&(ft.isPlainObject(n)||(e=ft.isArray(n)))?(e?(e=!1,r=t&&ft.isArray(t)?t:[]):r=t&&ft.isPlainObject(t)?t:{},s[i]=ft.extend(c,r,n)):void 0!==n&&(s[i]=n));return s},ft.extend({expando:"jQuery"+(dt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===ft.type(t)},isArray:Array.isArray||function(t){return"array"===ft.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){var e=t&&t.toString();return!ft.isArray(t)&&e-parseFloat(e)+1>=0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;if(!t||"object"!==ft.type(t)||t.nodeType||ft.isWindow(t))return!1;try{if(t.constructor&&!ct.call(t,"constructor")&&!ct.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}if(!ut.ownFirst)for(e in t)return ct.call(t,e);for(e in t);return void 0===e||ct.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?at[lt.call(t)]||"object":typeof t},globalEval:function(e){e&&ft.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(ht,"ms-").replace(mt,vt)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var i,o=0;if(n(t))for(i=t.length;i>o&&!1!==e.call(t[o],o,t[o]);o++);else for(o in t)if(!1===e.call(t[o],o,t[o]))break;return t},trim:function(t){return null==t?"":(t+"").replace(pt,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?ft.merge(i,"string"==typeof t?[t]:t):rt.call(i,t)),i},inArray:function(t,e,n){var i;if(e){if(st)return st.call(e,t,n);for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;)t[o++]=e[i++];if(n!==n)for(;void 0!==e[i];)t[o++]=e[i++];return t.length=o,t},grep:function(t,e,n){for(var i=[],o=0,r=t.length,s=!n;r>o;o++)!e(t[o],o)!==s&&i.push(t[o]);return i},map:function(t,e,i){var o,r,s=0,a=[];if(n(t))for(o=t.length;o>s;s++)null!=(r=e(t[s],s,i))&&a.push(r);else for(s in t)null!=(r=e(t[s],s,i))&&a.push(r);return ot.apply([],a)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(o=t[e],e=t,t=o),ft.isFunction(t)?(n=it.call(arguments,2),i=function(){return t.apply(e||this,n.concat(it.call(arguments)))},i.guid=t.guid=t.guid||ft.guid++,i):void 0},now:function(){return+new Date},support:ut}),"function"==typeof Symbol&&(ft.fn[Symbol.iterator]=et[Symbol.iterator]),ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){at["[object "+e+"]"]=e.toLowerCase()});var gt=function(t){function e(t,e,n,i){var o,r,s,a,c,d,f,p,h=e&&e.ownerDocument,m=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==m&&9!==m&&11!==m)return n;if(!i&&((e?e.ownerDocument||e:O)!==D&&j(e),e=e||D,L)){if(11!==m&&(d=mt.exec(t)))if(o=d[1]){if(9===m){if(!(s=e.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(h&&(s=h.getElementById(o))&&M(e,s)&&s.id===o)return n.push(s),n}else{if(d[2])return J.apply(n,e.getElementsByTagName(t)),n;if((o=d[3])&&b.getElementsByClassName&&e.getElementsByClassName)return J.apply(n,e.getElementsByClassName(o)),n}if(b.qsa&&!I[t+" "]&&(!H||!H.test(t))){if(1!==m)h=e,p=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(gt,"\\$&"):e.setAttribute("id",a=F),r=(f=T(t)).length,c=ut.test(a)?"#"+a:"[id='"+a+"']";r--;)f[r]=c+" "+u(f[r]);p=f.join(","),h=vt.test(t)&&l(e.parentNode)||e}if(p)try{return J.apply(n,h.querySelectorAll(p)),n}catch(t){}finally{a===F&&e.removeAttribute("id")}}}return $(t.replace(rt,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[F]=!0,t}function o(t){var e=D.createElement("div");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=n.length;i--;)x.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||X)-(~t.sourceIndex||X);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function l(t){return t&&void 0!==t.getElementsByTagName&&t}function c(){}function u(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function d(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=W++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r)}:function(e,n,s){var a,l,c,u=[_,r];if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(c=e[F]||(e[F]={}),l=c[e.uniqueID]||(c[e.uniqueID]={}),(a=l[i])&&a[0]===_&&a[1]===r)return u[2]=a[2];if(l[i]=u,u[2]=t(e,n,s))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function p(t,n,i){for(var o=0,r=n.length;r>o;o++)e(t,n[o],i);return i}function h(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,c=null!=e;l>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),c&&e.push(a));return s}function m(t,e,n,o,r,s){return o&&!o[F]&&(o=m(o)),r&&!r[F]&&(r=m(r,s)),i(function(i,s,a,l){var c,u,d,f=[],m=[],v=s.length,g=i||p(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?g:h(g,f,t,a,l),b=n?r||(i?t:v||o)?[]:s:y;if(n&&n(y,b,a,l),o)for(c=h(b,m),o(c,[],a,l),u=c.length;u--;)(d=c[u])&&(b[m[u]]=!(y[m[u]]=d));if(i){if(r||t){if(r){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d);r(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=r?K(i,d):f[u])>-1&&(i[c]=!(s[c]=d))}}else b=h(b===s?b.splice(v,b.length):b),r?r(null,s,b,l):J.apply(s,b)})}function v(t){for(var e,n,i,o=t.length,r=x.relative[t[0].type],s=r||x.relative[" "],a=r?1:0,l=d(function(t){return t===e},s,!0),c=d(function(t){return K(e,t)>-1},s,!0),p=[function(t,n,i){var o=!r&&(i||n!==E)||((e=n).nodeType?l(t,n,i):c(t,n,i));return e=null,o}];o>a;a++)if(n=x.relative[t[a].type])p=[d(f(p),n)];else{if((n=x.filter[t[a].type].apply(null,t[a].matches))[F]){for(i=++a;o>i&&!x.relative[t[i].type];i++);return m(a>1&&f(p),a>1&&u(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(rt,"$1"),n,i>a&&v(t.slice(a,i)),o>i&&v(t=t.slice(i)),o>i&&u(t))}p.push(n)}return f(p)}function g(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,l,c){var u,d,f,p=0,m="0",v=i&&[],g=[],y=E,b=i||r&&x.find.TAG("*",c),w=_+=null==y?1:Math.random()||.1,C=b.length;for(c&&(E=s===D||s||c);m!==C&&null!=(u=b[m]);m++){if(r&&u){for(d=0,s||u.ownerDocument===D||(j(u),a=!L);f=t[d++];)if(f(u,s||D,a)){l.push(u);break}c&&(_=w)}o&&((u=!f&&u)&&p--,i&&v.push(u))}if(p+=m,o&&m!==p){for(d=0;f=n[d++];)f(v,g,s,a);if(i){if(p>0)for(;m--;)v[m]||g[m]||(g[m]=V.call(l));g=h(g)}J.apply(l,g),c&&!i&&g.length>0&&p+n.length>1&&e.uniqueSort(l)}return c&&(_=w,E=y),v};return o?i(s):s}var y,b,x,w,C,T,k,$,E,S,N,j,D,A,L,H,P,q,M,F="sizzle"+1*new Date,O=t.document,_=0,W=0,R=n(),B=n(),I=n(),z=function(t,e){return t===e&&(N=!0),0},X=1<<31,Q={}.hasOwnProperty,U=[],V=U.pop,G=U.push,J=U.push,Y=U.slice,K=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",tt="[\\x20\\t\\r\\n\\f]",et="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt="\\["+tt+"*("+et+")(?:"+tt+"*([*^$|!~]?=)"+tt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+et+"))|)"+tt+"*\\]",it=":("+et+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+nt+")*)|.*)\\)|)",ot=new RegExp(tt+"+","g"),rt=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g"),st=new RegExp("^"+tt+"*,"+tt+"*"),at=new RegExp("^"+tt+"*([>+~]|"+tt+")"+tt+"*"),lt=new RegExp("="+tt+"*([^\\]'\"]*?)"+tt+"*\\]","g"),ct=new RegExp(it),ut=new RegExp("^"+et+"$"),dt={ID:new RegExp("^#("+et+")"),CLASS:new RegExp("^\\.("+et+")"),TAG:new RegExp("^("+et+"|[*])"),ATTR:new RegExp("^"+nt),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+tt+"*(even|odd|(([+-]|)(\\d*)n|)"+tt+"*(?:([+-]|)"+tt+"*(\\d+)|))"+tt+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+tt+"*((?:-\\d)?\\d*)"+tt+"*\\)|)(?=[^-]|$)","i")},ft=/^(?:input|select|textarea|button)$/i,pt=/^h\d$/i,ht=/^[^{]+\{\s*\[native \w/,mt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,vt=/[+~]/,gt=/'|\\/g,yt=new RegExp("\\\\([\\da-f]{1,6}"+tt+"?|("+tt+")|.)","ig"),bt=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xt=function(){j()};try{J.apply(U=Y.call(O.childNodes),O.childNodes),U[O.childNodes.length].nodeType}catch(t){J={apply:U.length?function(t,e){G.apply(t,Y.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}b=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},j=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:O;return i!==D&&9===i.nodeType&&i.documentElement?(D=i,A=D.documentElement,L=!C(D),(n=D.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xt,!1):n.attachEvent&&n.attachEvent("onunload",xt)),b.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),b.getElementsByTagName=o(function(t){return t.appendChild(D.createComment("")),!t.getElementsByTagName("*").length}),b.getElementsByClassName=ht.test(D.getElementsByClassName),b.getById=o(function(t){return A.appendChild(t).id=F,!D.getElementsByName||!D.getElementsByName(F).length}),b.getById?(x.find.ID=function(t,e){if(void 0!==e.getElementById&&L){var n=e.getElementById(t);return n?[n]:[]}},x.filter.ID=function(t){var e=t.replace(yt,bt);return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(yt,bt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),x.find.TAG=b.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):b.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},x.find.CLASS=b.getElementsByClassName&&function(t,e){return void 0!==e.getElementsByClassName&&L?e.getElementsByClassName(t):void 0},P=[],H=[],(b.qsa=ht.test(D.querySelectorAll))&&(o(function(t){A.appendChild(t).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+tt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||H.push("\\["+tt+"*(?:value|"+Z+")"),t.querySelectorAll("[id~="+F+"-]").length||H.push("~="),t.querySelectorAll(":checked").length||H.push(":checked"),t.querySelectorAll("a#"+F+"+*").length||H.push(".#.+[+~]")}),o(function(t){var e=D.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&H.push("name"+tt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),H.push(",.*:")})),(b.matchesSelector=ht.test(q=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&o(function(t){b.disconnectedMatch=q.call(t,"div"),q.call(t,"[s!='']:x"),P.push("!=",it)}),H=H.length&&new RegExp(H.join("|")),P=P.length&&new RegExp(P.join("|")),e=ht.test(A.compareDocumentPosition),M=e||ht.test(A.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},z=e?function(t,e){if(t===e)return N=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!b.sortDetached&&e.compareDocumentPosition(t)===n?t===D||t.ownerDocument===O&&M(O,t)?-1:e===D||e.ownerDocument===O&&M(O,e)?1:S?K(S,t)-K(S,e):0:4&n?-1:1)}:function(t,e){if(t===e)return N=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,a=[t],l=[e];if(!o||!r)return t===D?-1:e===D?1:o?-1:r?1:S?K(S,t)-K(S,e):0;if(o===r)return s(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===O?-1:l[i]===O?1:0},D):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&j(t),n=n.replace(lt,"='$1']"),b.matchesSelector&&L&&!I[n+" "]&&(!P||!P.test(n))&&(!H||!H.test(n)))try{var i=q.call(t,n);if(i||b.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return e(n,D,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==D&&j(t),M(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==D&&j(t);var n=x.attrHandle[e.toLowerCase()],i=n&&Q.call(x.attrHandle,e.toLowerCase())?n(t,e,!L):void 0;return void 0!==i?i:b.attributes||!L?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(N=!b.detectDuplicates,S=!b.sortStable&&t.slice(0),t.sort(z),N){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return S=null,t},w=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=w(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=w(e);return n},(x=e.selectors={cacheLength:50,createPseudo:i,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(yt,bt),t[3]=(t[3]||t[4]||t[5]||"").replace(yt,bt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return dt.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ct.test(n)&&(e=T(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(yt,bt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=R[t+" "];return e||(e=new RegExp("(^|"+tt+")"+t+"("+tt+"|$)"))&&R(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(ot," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var c,u,d,f,p,h,m=r!==s?"nextSibling":"previousSibling",v=e.parentNode,g=a&&e.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(v){if(r){for(;m;){for(f=e;f=f[m];)if(a?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;h=m="only"===t&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(b=(p=(c=(u=(d=(f=v)[F]||(f[F]={}))[f.uniqueID]||(d[f.uniqueID]={}))[t]||[])[0]===_&&c[1])&&c[2],f=p&&v.childNodes[p];f=++p&&f&&f[m]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===e){u[t]=[_,p,b];break}}else if(y&&(f=e,d=f[F]||(f[F]={}),u=d[f.uniqueID]||(d[f.uniqueID]={}),c=u[t]||[],p=c[0]===_&&c[1],b=p),!1===b)for(;(f=++p&&f&&f[m]||(b=p=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++b||(y&&(d=f[F]||(f[F]={}),u=d[f.uniqueID]||(d[f.uniqueID]={}),u[t]=[_,b]),f!==e)););return(b-=o)===i||b%i==0&&b/i>=0}}},PSEUDO:function(t,n){var o,r=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return r[F]?r(n):r.length>1?(o=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=K(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=k(t.replace(rt,"$1"));return o[F]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(yt,bt),function(e){return(e.textContent||e.innerText||w(e)).indexOf(t)>-1}}),lang:i(function(t){return ut.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(yt,bt).toLowerCase(),function(e){var n;do{if(n=L?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===A},focus:function(t){return t===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return!1===t.disabled},disabled:function(t){return!0===t.disabled},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return pt.test(t.nodeName)},input:function(t){return ft.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:a(function(){return[0]}),last:a(function(t,e){return[e-1]}),eq:a(function(t,e,n){return[0>n?n+e:n]}),even:a(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:a(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:a(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:a(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=x.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[y]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(y);for(y in{submit:!0,reset:!0})x.pseudos[y]=function(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}(y);return c.prototype=x.filters=x.pseudos,x.setFilters=new c,T=e.tokenize=function(t,n){var i,o,r,s,a,l,c,u=B[t+" "];if(u)return n?0:u.slice(0);for(a=t,l=[],c=x.preFilter;a;){(!i||(o=st.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=at.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(rt," ")}),a=a.slice(i.length));for(s in x.filter)!(o=dt[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):B(t,l).slice(0)},k=e.compile=function(t,e){var n,i=[],o=[],r=I[t+" "];if(!r){for(e||(e=T(t)),n=e.length;n--;)(r=v(e[n]))[F]?i.push(r):o.push(r);(r=I(t,g(o,i))).selector=t}return r},$=e.select=function(t,e,n,i){var o,r,s,a,c,d="function"==typeof t&&t,f=!i&&T(t=d.selector||t);if(n=n||[],1===f.length){if((r=f[0]=f[0].slice(0)).length>2&&"ID"===(s=r[0]).type&&b.getById&&9===e.nodeType&&L&&x.relative[r[1].type]){if(!(e=(x.find.ID(s.matches[0].replace(yt,bt),e)||[])[0]))return n;d&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=dt.needsContext.test(t)?0:r.length;o--&&(s=r[o],!x.relative[a=s.type]);)if((c=x.find[a])&&(i=c(s.matches[0].replace(yt,bt),vt.test(r[0].type)&&l(e.parentNode)||e))){if(r.splice(o,1),!(t=i.length&&u(r)))return J.apply(n,i),n;break}}return(d||k(t,f))(i,e,!L,n,!e||vt.test(t)&&l(e.parentNode)||e),n},b.sortStable=F.split("").sort(z).join("")===F,b.detectDuplicates=!!N,j(),b.sortDetached=o(function(t){return 1&t.compareDocumentPosition(D.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),b.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(Z,function(t,e,n){var i;return n?void 0:!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);ft.find=gt,ft.expr=gt.selectors,ft.expr[":"]=ft.expr.pseudos,ft.uniqueSort=ft.unique=gt.uniqueSort,ft.text=gt.getText,ft.isXMLDoc=gt.isXML,ft.contains=gt.contains;var yt=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&ft(t).is(n))break;i.push(t)}return i},bt=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},xt=ft.expr.match.needsContext,wt=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ct=/^.[^:#\[\.,]*$/;ft.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?ft.find.matchesSelector(i,t)?[i]:[]:ft.find.matches(t,ft.grep(e,function(t){return 1===t.nodeType}))},ft.fn.extend({find:function(t){var e,n=[],i=this,o=i.length;if("string"!=typeof t)return this.pushStack(ft(t).filter(function(){for(e=0;o>e;e++)if(ft.contains(i[e],this))return!0}));for(e=0;o>e;e++)ft.find(t,i[e],n);return n=this.pushStack(o>1?ft.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&xt.test(t)?ft(t):t||[],!1).length}});var Tt,kt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(ft.fn.init=function(t,e,n){var i,o;if(!t)return this;if(n=n||Tt,"string"==typeof t){if(!(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:kt.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof ft?e[0]:e,ft.merge(this,ft.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:nt,!0)),wt.test(i[1])&&ft.isPlainObject(e))for(i in e)ft.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}if((o=nt.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return Tt.find(t);this.length=1,this[0]=o}return this.context=nt,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ft.isFunction(t)?void 0!==n.ready?n.ready(t):t(ft):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),ft.makeArray(t,this))}).prototype=ft.fn,Tt=ft(nt);var $t=/^(?:parents|prev(?:Until|All))/,Et={children:!0,contents:!0,next:!0,prev:!0};ft.fn.extend({has:function(t){var e,n=ft(t,this),i=n.length;return this.filter(function(){for(e=0;i>e;e++)if(ft.contains(this,n[e]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=xt.test(t)||"string"!=typeof t?ft(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&ft.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?ft.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?ft.inArray(this[0],ft(t)):ft.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(ft.uniqueSort(ft.merge(this.get(),ft(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ft.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return yt(t,"parentNode")},parentsUntil:function(t,e,n){return yt(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return yt(t,"nextSibling")},prevAll:function(t){return yt(t,"previousSibling")},nextUntil:function(t,e,n){return yt(t,"nextSibling",n)},prevUntil:function(t,e,n){return yt(t,"previousSibling",n)},siblings:function(t){return bt((t.parentNode||{}).firstChild,t)},children:function(t){return bt(t.firstChild)},contents:function(t){return ft.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ft.merge([],t.childNodes)}},function(t,e){ft.fn[t]=function(n,i){var o=ft.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=ft.filter(i,o)),this.length>1&&(Et[t]||(o=ft.uniqueSort(o)),$t.test(t)&&(o=o.reverse())),this.pushStack(o)}});var St=/\S+/g;ft.Callbacks=function(t){t="string"==typeof t?r(t):ft.extend({},t);var e,n,i,o,s=[],a=[],l=-1,c=function(){for(o=t.once,i=e=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)!1===s[l].apply(n[0],n[1])&&t.stopOnFalse&&(l=s.length,n=!1);t.memory||(n=!1),e=!1,o&&(s=n?[]:"")},u={add:function(){return s&&(n&&!e&&(l=s.length-1,a.push(n)),function e(n){ft.each(n,function(n,i){ft.isFunction(i)?t.unique&&u.has(i)||s.push(i):i&&i.length&&"string"!==ft.type(i)&&e(i)})}(arguments),n&&!e&&c()),this},remove:function(){return ft.each(arguments,function(t,e){for(var n;(n=ft.inArray(e,s,n))>-1;)s.splice(n,1),l>=n&&l--}),this},has:function(t){return t?ft.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return o=!0,n||u.disable(),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=n||[],n=[t,n.slice?n.slice():n],a.push(n),e||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},ft.extend({Deferred:function(t){var e=[["resolve","done",ft.Callbacks("once memory"),"resolved"],["reject","fail",ft.Callbacks("once memory"),"rejected"],["notify","progress",ft.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return ft.Deferred(function(n){ft.each(e,function(e,r){var s=ft.isFunction(t[e])&&t[e];o[r[1]](function(){var t=s&&s.apply(this,arguments);t&&ft.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?ft.extend(t,i):i}},o={};return i.pipe=i.then,ft.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=it.call(arguments),s=r.length,a=1!==s||t&&ft.isFunction(t.promise)?s:0,l=1===a?t:ft.Deferred(),c=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?it.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&ft.isFunction(r[o].promise)?r[o].promise().progress(c(o,n,e)).done(c(o,i,r)).fail(l.reject):--a;return a||l.resolveWith(i,r),l.promise()}});var Nt;ft.fn.ready=function(t){return ft.ready.promise().done(t),this},ft.extend({isReady:!1,readyWait:1,holdReady:function(t){t?ft.readyWait++:ft.ready(!0)},ready:function(t){(!0===t?--ft.readyWait:ft.isReady)||(ft.isReady=!0,!0!==t&&--ft.readyWait>0||(Nt.resolveWith(nt,[ft]),ft.fn.triggerHandler&&(ft(nt).triggerHandler("ready"),ft(nt).off("ready"))))}}),ft.ready.promise=function(e){if(!Nt)if(Nt=ft.Deferred(),"complete"===nt.readyState)t.setTimeout(ft.ready);else if(nt.addEventListener)nt.addEventListener("DOMContentLoaded",a),t.addEventListener("load",a);else{nt.attachEvent("onreadystatechange",a),t.attachEvent("onload",a);var n=!1;try{n=null==t.frameElement&&nt.documentElement}catch(t){}n&&n.doScroll&&function e(){if(!ft.isReady){try{n.doScroll("left")}catch(n){return t.setTimeout(e,50)}s(),ft.ready()}}()}return Nt.promise(e)},ft.ready.promise();var jt;for(jt in ft(ut))break;ut.ownFirst="0"===jt,ut.inlineBlockNeedsLayout=!1,ft(function(){var t,e,n,i;(n=nt.getElementsByTagName("body")[0])&&n.style&&(e=nt.createElement("div"),i=nt.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ut.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(n.style.zoom=1)),n.removeChild(i))}),function(){var t=nt.createElement("div");ut.deleteExpando=!0;try{delete t.test}catch(t){ut.deleteExpando=!1}t=null}();var Dt=function(t){var e=ft.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1;return(1===n||9===n)&&(!e||!0!==e&&t.getAttribute("classid")===e)},At=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Lt=/([A-Z])/g;ft.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return!!(t=t.nodeType?ft.cache[t[ft.expando]]:t[ft.expando])&&!c(t)},data:function(t,e,n){return u(t,e,n)},removeData:function(t,e){return d(t,e)},_data:function(t,e,n){return u(t,e,n,!0)},_removeData:function(t,e){return d(t,e,!0)}}),ft.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=ft.data(r),1===r.nodeType&&!ft._data(r,"parsedAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=ft.camelCase(i.slice(5)),l(r,i,o[i]));ft._data(r,"parsedAttrs",!0)}return o}return"object"==typeof t?this.each(function(){ft.data(this,t)}):arguments.length>1?this.each(function(){ft.data(this,t,e)}):r?l(r,t,ft.data(r,t)):void 0},removeData:function(t){return this.each(function(){ft.removeData(this,t)})}}),ft.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=ft._data(t,e),n&&(!i||ft.isArray(n)?i=ft._data(t,e,ft.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=ft.queue(t,e),i=n.length,o=n.shift(),r=ft._queueHooks(t,e);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,function(){ft.dequeue(t,e)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return ft._data(t,n)||ft._data(t,n,{empty:ft.Callbacks("once memory").add(function(){ft._removeData(t,e+"queue"),ft._removeData(t,n)})})}}),ft.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?ft.queue(this[0],t):void 0===e?this:this.each(function(){var n=ft.queue(this,t,e);ft._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&ft.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ft.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=ft.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=ft._data(r[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}}),function(){var t;ut.shrinkWrapBlocks=function(){if(null!=t)return t;t=!1;var e,n,i;return(n=nt.getElementsByTagName("body")[0])&&n.style?(e=nt.createElement("div"),i=nt.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(nt.createElement("div")).style.width="5px",t=3!==e.offsetWidth),n.removeChild(i),t):void 0}}();var Ht=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pt=new RegExp("^(?:([+-])=|)("+Ht+")([a-z%]*)$","i"),qt=["Top","Right","Bottom","Left"],Mt=function(t,e){return t=e||t,"none"===ft.css(t,"display")||!ft.contains(t.ownerDocument,t)},Ft=function(t,e,n,i,o,r,s){var a=0,l=t.length,c=null==n;if("object"===ft.type(n)){o=!0;for(a in n)Ft(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,ft.isFunction(i)||(s=!0),c&&(s?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(ft(t),n)})),e))for(;l>a;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:c?e.call(t):l?e(t[0],n):r},Ot=/^(?:checkbox|radio)$/i,_t=/<([\w:-]+)/,Wt=/^$|\/(?:java|ecma)script/i,Rt=/^\s+/,Bt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var t=nt.createElement("div"),e=nt.createDocumentFragment(),n=nt.createElement("input");t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ut.leadingWhitespace=3===t.firstChild.nodeType,ut.tbody=!t.getElementsByTagName("tbody").length,ut.htmlSerialize=!!t.getElementsByTagName("link").length,ut.html5Clone="<:nav></:nav>"!==nt.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,e.appendChild(n),ut.appendChecked=n.checked,t.innerHTML="<textarea>x</textarea>",ut.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),(n=nt.createElement("input")).setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ut.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,ut.noCloneEvent=!!t.addEventListener,t[ft.expando]=1,ut.attributes=!t.getAttribute(ft.expando)}();var It={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ut.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};It.optgroup=It.option,It.tbody=It.tfoot=It.colgroup=It.caption=It.thead,It.th=It.td;var zt=/<|&#?\w+;/,Xt=/<tbody/i;!function(){var e,n,i=nt.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})n="on"+e,(ut[e]=n in t)||(i.setAttribute(n,"t"),ut[e]=!1===i.attributes[n].expando);i=null}();var Qt=/^(?:input|select|textarea)$/i,Ut=/^key/,Vt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Gt=/^(?:focusinfocus|focusoutblur)$/,Jt=/^([^.]*)(?:\.(.+)|)/;ft.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,c,u,d,f,p,h,m,v=ft._data(t);if(v){for(n.handler&&(l=n,n=l.handler,o=l.selector),n.guid||(n.guid=ft.guid++),(s=v.events)||(s=v.events={}),(u=v.handle)||(u=v.handle=function(t){return void 0===ft||t&&ft.event.triggered===t.type?void 0:ft.event.dispatch.apply(u.elem,arguments)},u.elem=t),a=(e=(e||"").match(St)||[""]).length;a--;)r=Jt.exec(e[a])||[],p=m=r[1],h=(r[2]||"").split(".").sort(),p&&(c=ft.event.special[p]||{},p=(o?c.delegateType:c.bindType)||p,c=ft.event.special[p]||{},d=ft.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&ft.expr.match.needsContext.test(o),namespace:h.join(".")},l),(f=s[p])||(f=s[p]=[],f.delegateCount=0,c.setup&&!1!==c.setup.call(t,i,h,u)||(t.addEventListener?t.addEventListener(p,u,!1):t.attachEvent&&t.attachEvent("on"+p,u))),c.add&&(c.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,d):f.push(d),ft.event.global[p]=!0);t=null}},remove:function(t,e,n,i,o){var r,s,a,l,c,u,d,f,p,h,m,v=ft.hasData(t)&&ft._data(t);if(v&&(u=v.events)){for(c=(e=(e||"").match(St)||[""]).length;c--;)if(a=Jt.exec(e[c])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p){for(d=ft.event.special[p]||{},f=u[p=(i?d.delegateType:d.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=f.length;r--;)s=f[r],!o&&m!==s.origType||n&&n.guid!==s.guid||a&&!a.test(s.namespace)||i&&i!==s.selector&&("**"!==i||!s.selector)||(f.splice(r,1),s.selector&&f.delegateCount--,d.remove&&d.remove.call(t,s));l&&!f.length&&(d.teardown&&!1!==d.teardown.call(t,h,v.handle)||ft.removeEvent(t,p,v.handle),delete u[p])}else for(p in u)ft.event.remove(t,p+e[c],n,i,!0);ft.isEmptyObject(u)&&(delete v.handle,ft._removeData(t,"events"))}},trigger:function(e,n,i,o){var r,s,a,l,c,u,d,f=[i||nt],p=ct.call(e,"type")?e.type:e,h=ct.call(e,"namespace")?e.namespace.split("."):[];if(a=u=i=i||nt,3!==i.nodeType&&8!==i.nodeType&&!Gt.test(p+ft.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),s=p.indexOf(":")<0&&"on"+p,e=e[ft.expando]?e:new ft.Event(p,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:ft.makeArray(n,[e]),c=ft.event.special[p]||{},o||!c.trigger||!1!==c.trigger.apply(i,n))){if(!o&&!c.noBubble&&!ft.isWindow(i)){for(l=c.delegateType||p,Gt.test(l+p)||(a=a.parentNode);a;a=a.parentNode)f.push(a),u=a;u===(i.ownerDocument||nt)&&f.push(u.defaultView||u.parentWindow||t)}for(d=0;(a=f[d++])&&!e.isPropagationStopped();)e.type=d>1?l:c.bindType||p,(r=(ft._data(a,"events")||{})[e.type]&&ft._data(a,"handle"))&&r.apply(a,n),(r=s&&a[s])&&r.apply&&Dt(a)&&(e.result=r.apply(a,n),!1===e.result&&e.preventDefault());if(e.type=p,!o&&!e.isDefaultPrevented()&&(!c._default||!1===c._default.apply(f.pop(),n))&&Dt(i)&&s&&i[p]&&!ft.isWindow(i)){(u=i[s])&&(i[s]=null),ft.event.triggered=p;try{i[p]()}catch(t){}ft.event.triggered=void 0,u&&(i[s]=u)}return e.result}},dispatch:function(t){t=ft.event.fix(t);var e,n,i,o,r,s=[],a=it.call(arguments),l=(ft._data(this,"events")||{})[t.type]||[],c=ft.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){for(s=ft.event.handlers.call(this,t,l),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.rnamespace||t.rnamespace.test(r.namespace))&&(t.handleObj=r,t.data=r.data,void 0!==(i=((ft.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,l=t.target;if(a&&l.nodeType&&("click"!==t.type||isNaN(t.button)||t.button<1))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==t.type)){for(i=[],n=0;a>n;n++)r=e[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?ft(o,this).index(l)>-1:ft.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},fix:function(t){if(t[ft.expando])return t;var e,n,i,o=t.type,r=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Vt.test(o)?this.mouseHooks:Ut.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,t=new ft.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n];return t.target||(t.target=r.srcElement||nt),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,s.filter?s.filter(t,r):t},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,r=e.button,s=e.fromElement;return null==t.pageX&&null!=e.clientX&&(i=t.target.ownerDocument||nt,o=i.documentElement,n=i.body,t.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!t.relatedTarget&&s&&(t.relatedTarget=s===t.target?e.toElement:s),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===x()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ft.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return ft.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n){var i=ft.extend(new ft.Event,n,{type:t,isSimulated:!0});ft.event.trigger(i,null,e),i.isDefaultPrevented()&&n.preventDefault()}},ft.removeEvent=nt.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)}:function(t,e,n){var i="on"+e;t.detachEvent&&(void 0===t[i]&&(t[i]=null),t.detachEvent(i,n))},ft.Event=function(t,e){return this instanceof ft.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?y:b):this.type=t,e&&ft.extend(this,e),this.timeStamp=t&&t.timeStamp||ft.now(),void(this[ft.expando]=!0)):new ft.Event(t,e)},ft.Event.prototype={constructor:ft.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=y,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=y,t&&!this.isSimulated&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=y,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},ft.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){ft.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return(!o||o!==i&&!ft.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),ut.submit||(ft.event.special.submit={setup:function(){return!ft.nodeName(this,"form")&&void ft.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,n=ft.nodeName(e,"input")||ft.nodeName(e,"button")?ft.prop(e,"form"):void 0;n&&!ft._data(n,"submit")&&(ft.event.add(n,"submit._submit",function(t){t._submitBubble=!0}),ft._data(n,"submit",!0))})},postDispatch:function(t){t._submitBubble&&(delete t._submitBubble,this.parentNode&&!t.isTrigger&&ft.event.simulate("submit",this.parentNode,t))},teardown:function(){return!ft.nodeName(this,"form")&&void ft.event.remove(this,"._submit")}}),ut.change||(ft.event.special.change={setup:function(){return Qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ft.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._justChanged=!0)}),ft.event.add(this,"click._change",function(t){this._justChanged&&!t.isTrigger&&(this._justChanged=!1),ft.event.simulate("change",this,t)})),!1):void ft.event.add(this,"beforeactivate._change",function(t){var e=t.target;Qt.test(e.nodeName)&&!ft._data(e,"change")&&(ft.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ft.event.simulate("change",this.parentNode,t)}),ft._data(e,"change",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ft.event.remove(this,"._change"),!Qt.test(this.nodeName)}}),ut.focusin||ft.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){ft.event.simulate(e,t.target,ft.event.fix(t))};ft.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=ft._data(i,e);o||i.addEventListener(t,n,!0),ft._data(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ft._data(i,e)-1;o?ft._data(i,e,o):(i.removeEventListener(t,n,!0),ft._removeData(i,e))}}}),ft.fn.extend({on:function(t,e,n,i){return w(this,t,e,n,i)},one:function(t,e,n,i){return w(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,ft(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(!1===e||"function"==typeof e)&&(n=e,e=void 0),!1===n&&(n=b),this.each(function(){ft.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){ft.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?ft.event.trigger(t,e,n,!0):void 0}});var Yt=/ jQuery\d+="(?:null|\d+)"/g,Kt=new RegExp("<(?:"+Bt+")[\\s/>]","i"),Zt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,te=/<script|<style|<link/i,ee=/checked\s*(?:[^=]|=\s*.checked.)/i,ne=/^true\/(.*)/,ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,oe=p(nt).appendChild(nt.createElement("div"));ft.extend({htmlPrefilter:function(t){return t.replace(Zt,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a,l=ft.contains(t.ownerDocument,t);if(ut.html5Clone||ft.isXMLDoc(t)||!Kt.test("<"+t.nodeName+">")?r=t.cloneNode(!0):(oe.innerHTML=t.outerHTML,oe.removeChild(r=oe.firstChild)),!(ut.noCloneEvent&&ut.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ft.isXMLDoc(t)))for(i=h(r),a=h(t),s=0;null!=(o=a[s]);++s)i[s]&&E(o,i[s]);if(e)if(n)for(a=a||h(t),i=i||h(r),s=0;null!=(o=a[s]);s++)$(o,i[s]);else $(t,r);return(i=h(r,"script")).length>0&&m(i,!l&&h(t,"script")),i=a=o=null,r},cleanData:function(t,e){for(var n,i,o,r,s=0,a=ft.expando,l=ft.cache,c=ut.attributes,u=ft.event.special;null!=(n=t[s]);s++)if((e||Dt(n))&&(o=n[a],r=o&&l[o])){if(r.events)for(i in r.events)u[i]?ft.event.remove(n,i):ft.removeEvent(n,i,r.handle);l[o]&&(delete l[o],c||void 0===n.removeAttribute?n[a]=void 0:n.removeAttribute(a),et.push(o))}}}),ft.fn.extend({domManip:S,detach:function(t){return N(this,t,!0)},remove:function(t){return N(this,t)},text:function(t){return Ft(this,function(t){return void 0===t?ft.text(this):this.empty().append((this[0]&&this[0].ownerDocument||nt).createTextNode(t))},null,t,arguments.length)},append:function(){return S(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||C(this,t).appendChild(t)})},prepend:function(){return S(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=C(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return S(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return S(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ft.cleanData(h(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&ft.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return ft.clone(this,t,e)})},html:function(t){return Ft(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(Yt,""):void 0;if("string"==typeof t&&!te.test(t)&&(ut.htmlSerialize||!Kt.test(t))&&(ut.leadingWhitespace||!Rt.test(t))&&!It[(_t.exec(t)||["",""])[1].toLowerCase()]){t=ft.htmlPrefilter(t);try{for(;i>n;n++)1===(e=this[n]||{}).nodeType&&(ft.cleanData(h(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return S(this,arguments,function(e){var n=this.parentNode;ft.inArray(this,t)<0&&(ft.cleanData(h(this)),n&&n.replaceChild(e,this))},t)}}),ft.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ft.fn[t]=function(t){for(var n,i=0,o=[],r=ft(t),s=r.length-1;s>=i;i++)n=i===s?this:this.clone(!0),ft(r[i])[e](n),rt.apply(o,n.get());return this.pushStack(o)}});var re,se={HTML:"block",BODY:"block"},ae=/^margin/,le=new RegExp("^("+Ht+")(?!px)[a-z%]+$","i"),ce=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o},ue=nt.documentElement;!function(){function e(){var e,u,d=nt.documentElement;d.appendChild(l),c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=o=a=!1,i=s=!0,t.getComputedStyle&&(u=t.getComputedStyle(c),n="1%"!==(u||{}).top,a="2px"===(u||{}).marginLeft,o="4px"===(u||{width:"4px"}).width,c.style.marginRight="50%",i="4px"===(u||{marginRight:"4px"}).marginRight,e=c.appendChild(nt.createElement("div")),e.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",c.style.width="1px",s=!parseFloat((t.getComputedStyle(e)||{}).marginRight),c.removeChild(e)),c.style.display="none",(r=0===c.getClientRects().length)&&(c.style.display="",c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",e=c.getElementsByTagName("td"),e[0].style.cssText="margin:0;border:0;padding:0;display:none",(r=0===e[0].offsetHeight)&&(e[0].style.display="",e[1].style.display="none",r=0===e[0].offsetHeight)),d.removeChild(l)}var n,i,o,r,s,a,l=nt.createElement("div"),c=nt.createElement("div");c.style&&(c.style.cssText="float:left;opacity:.5",ut.opacity="0.5"===c.style.opacity,ut.cssFloat=!!c.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",ut.clearCloneStyle="content-box"===c.style.backgroundClip,(l=nt.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",c.innerHTML="",l.appendChild(c),ut.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing,ft.extend(ut,{reliableHiddenOffsets:function(){return null==n&&e(),r},boxSizingReliable:function(){return null==n&&e(),o},pixelMarginRight:function(){return null==n&&e(),i},pixelPosition:function(){return null==n&&e(),n},reliableMarginRight:function(){return null==n&&e(),s},reliableMarginLeft:function(){return null==n&&e(),a}}))}();var de,fe,pe=/^(top|right|bottom|left)$/;t.getComputedStyle?(de=function(e){var n=e.ownerDocument.defaultView;return n.opener||(n=t),n.getComputedStyle(e)},fe=function(t,e,n){var i,o,r,s,a=t.style;return n=n||de(t),s=n?n.getPropertyValue(e)||n[e]:void 0,n&&(""!==s||ft.contains(t.ownerDocument,t)||(s=ft.style(t,e)),!ut.pixelMarginRight()&&le.test(s)&&ae.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0===s?s:s+""}):ue.currentStyle&&(de=function(t){return t.currentStyle},fe=function(t,e,n){var i,o,r,s,a=t.style;return n=n||de(t),null==(s=n?n[e]:void 0)&&a&&a[e]&&(s=a[e]),le.test(s)&&!pe.test(e)&&(i=a.left,o=t.runtimeStyle,(r=o&&o.left)&&(o.left=t.currentStyle.left),a.left="fontSize"===e?"1em":s,s=a.pixelLeft+"px",a.left=i,r&&(o.left=r)),void 0===s?s:s+""||"auto"});var he=/alpha\([^)]*\)/i,me=/opacity\s*=\s*([^)]*)/i,ve=/^(none|table(?!-c[ea]).+)/,ge=new RegExp("^("+Ht+")(.*)$","i"),ye={position:"absolute",visibility:"hidden",display:"block"},be={letterSpacing:"0",fontWeight:"400"},xe=["Webkit","O","Moz","ms"],we=nt.createElement("div").style;ft.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=fe(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:ut.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=ft.camelCase(e),l=t.style;if(e=ft.cssProps[a]||(ft.cssProps[a]=L(a)||a),s=ft.cssHooks[e]||ft.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:l[e];if("string"===(r=typeof n)&&(o=Pt.exec(n))&&o[1]&&(n=f(t,e,o),r="number"),null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(ft.cssNumber[a]?"":"px")),ut.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(s&&"set"in s&&void 0===(n=s.set(t,n,i)))))try{l[e]=n}catch(t){}}},css:function(t,e,n,i){var o,r,s,a=ft.camelCase(e);return e=ft.cssProps[a]||(ft.cssProps[a]=L(a)||a),(s=ft.cssHooks[e]||ft.cssHooks[a])&&"get"in s&&(r=s.get(t,!0,n)),void 0===r&&(r=fe(t,e,i)),"normal"===r&&e in be&&(r=be[e]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),ft.each(["height","width"],function(t,e){ft.cssHooks[e]={get:function(t,n,i){return n?ve.test(ft.css(t,"display"))&&0===t.offsetWidth?ce(t,ye,function(){return M(t,e,i)}):M(t,e,i):void 0},set:function(t,n,i){var o=i&&de(t);return P(0,n,i?q(t,e,i,ut.boxSizing&&"border-box"===ft.css(t,"boxSizing",!1,o),o):0)}}}),ut.opacity||(ft.cssHooks.opacity={get:function(t,e){return me.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,o=ft.isNumeric(e)?"alpha(opacity="+100*e+")":"",r=i&&i.filter||n.filter||"";n.zoom=1,(e>=1||""===e)&&""===ft.trim(r.replace(he,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||i&&!i.filter)||(n.filter=he.test(r)?r.replace(he,o):r+" "+o)}}),ft.cssHooks.marginRight=A(ut.reliableMarginRight,function(t,e){return e?ce(t,{display:"inline-block"},fe,[t,"marginRight"]):void 0}),ft.cssHooks.marginLeft=A(ut.reliableMarginLeft,function(t,e){return e?(parseFloat(fe(t,"marginLeft"))||(ft.contains(t.ownerDocument,t)?t.getBoundingClientRect().left-ce(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}):0))+"px":void 0}),ft.each({margin:"",padding:"",border:"Width"},function(t,e){ft.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+qt[i]+e]=r[i]||r[i-2]||r[0];return o}},ae.test(t)||(ft.cssHooks[t+e].set=P)}),ft.fn.extend({css:function(t,e){return Ft(this,function(t,e,n){var i,o,r={},s=0;if(ft.isArray(e)){for(i=de(t),o=e.length;o>s;s++)r[e[s]]=ft.css(t,e[s],!1,i);return r}return void 0!==n?ft.style(t,e,n):ft.css(t,e)},t,e,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Mt(this)?ft(this).show():ft(this).hide()})}}),ft.Tween=F,F.prototype={constructor:F,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||ft.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(ft.cssNumber[n]?"":"px")},cur:function(){var t=F.propHooks[this.prop];return t&&t.get?t.get(this):F.propHooks._default.get(this)},run:function(t){var e,n=F.propHooks[this.prop];return this.options.duration?this.pos=e=ft.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=ft.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){ft.fx.step[t.prop]?ft.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[ft.cssProps[t.prop]]&&!ft.cssHooks[t.prop]?t.elem[t.prop]=t.now:ft.style(t.elem,t.prop,t.now+t.unit)}}},F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ft.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},ft.fx=F.prototype.init,ft.fx.step={};var Ce,Te,ke=/^(?:toggle|show|hide)$/,$e=/queueHooks$/;ft.Animation=ft.extend(B,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return f(n.elem,t,Pt.exec(e),n),n}]},tweener:function(t,e){ft.isFunction(t)?(e=t,t=["*"]):t=t.match(St);for(var n,i=0,o=t.length;o>i;i++)n=t[i],B.tweeners[n]=B.tweeners[n]||[],B.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,o,r,s,a,l,c,u=this,d={},f=t.style,p=t.nodeType&&Mt(t),h=ft._data(t,"fxshow");n.queue||(null==(a=ft._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,ft.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===("none"===(c=ft.css(t,"display"))?ft._data(t,"olddisplay")||D(t.nodeName):c)&&"none"===ft.css(t,"float")&&(ut.inlineBlockNeedsLayout&&"inline"!==D(t.nodeName)?f.zoom=1:f.display="inline-block")),n.overflow&&(f.overflow="hidden",ut.shrinkWrapBlocks()||u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],ke.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(p?"hide":"show")){if("show"!==o||!h||void 0===h[i])continue;p=!0}d[i]=h&&h[i]||ft.style(t,i)}else c=void 0;if(ft.isEmptyObject(d))"inline"===("none"===c?D(t.nodeName):c)&&(f.display=c);else{h?"hidden"in h&&(p=h.hidden):h=ft._data(t,"fxshow",{}),r&&(h.hidden=!p),p?ft(t).show():u.done(function(){ft(t).hide()}),u.done(function(){var e;ft._removeData(t,"fxshow");for(e in d)ft.style(t,e,d[e])});for(i in d)s=W(p?h[i]:0,i,u),i in h||(h[i]=s.start,p&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}],prefilter:function(t,e){e?B.prefilters.unshift(t):B.prefilters.push(t)}}),ft.speed=function(t,e,n){var i=t&&"object"==typeof t?ft.extend({},t):{complete:n||!n&&e||ft.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ft.isFunction(e)&&e};return i.duration=ft.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ft.fx.speeds?ft.fx.speeds[i.duration]:ft.fx.speeds._default,(null==i.queue||!0===i.queue)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){ft.isFunction(i.old)&&i.old.call(this),i.queue&&ft.dequeue(this,i.queue)},i},ft.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Mt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=ft.isEmptyObject(t),r=ft.speed(e,n,i),s=function(){var e=B(this,ft.extend({},t),r);(o||ft._data(this,"finish"))&&e.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=ft.timers,s=ft._data(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&$e.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));(e||!n)&&ft.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=ft._data(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=ft.timers,s=i?i.length:0;for(n.finish=!0,ft.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;s>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),ft.each(["toggle","show","hide"],function(t,e){var n=ft.fn[e];ft.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(_(e,!0),t,i,o)}}),ft.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ft.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),ft.timers=[],ft.fx.tick=function(){var t,e=ft.timers,n=0;for(Ce=ft.now();n<e.length;n++)(t=e[n])()||e[n]!==t||e.splice(n--,1);e.length||ft.fx.stop(),Ce=void 0},ft.fx.timer=function(t){ft.timers.push(t),t()?ft.fx.start():ft.timers.pop()},ft.fx.interval=13,ft.fx.start=function(){Te||(Te=t.setInterval(ft.fx.tick,ft.fx.interval))},ft.fx.stop=function(){t.clearInterval(Te),Te=null},ft.fx.speeds={slow:600,fast:200,_default:400},ft.fn.delay=function(e,n){return e=ft.fx?ft.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(n,i){var o=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(o)}})},function(){var t,e=nt.createElement("input"),n=nt.createElement("div"),i=nt.createElement("select"),o=i.appendChild(nt.createElement("option"));(n=nt.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=n.getElementsByTagName("a")[0],e.setAttribute("type","checkbox"),n.appendChild(e),(t=n.getElementsByTagName("a")[0]).style.cssText="top:1px",ut.getSetAttribute="t"!==n.className,ut.style=/top/.test(t.getAttribute("style")),ut.hrefNormalized="/a"===t.getAttribute("href"),ut.checkOn=!!e.value,ut.optSelected=o.selected,ut.enctype=!!nt.createElement("form").enctype,i.disabled=!0,ut.optDisabled=!o.disabled,(e=nt.createElement("input")).setAttribute("value",""),ut.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),ut.radioValue="t"===e.value}();var Ee=/\r/g;ft.fn.extend({val:function(t){var e,n,i,o=this[0];return arguments.length?(i=ft.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?t.call(this,n,ft(this).val()):t)?o="":"number"==typeof o?o+="":ft.isArray(o)&&(o=ft.map(o,function(t){return null==t?"":t+""})),(e=ft.valHooks[this.type]||ft.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=ft.valHooks[o.type]||ft.valHooks[o.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(Ee,""):null==n?"":n:void 0}}),ft.extend({valHooks:{option:{get:function(t){var e=ft.find.attr(t,"value");return null!=e?e:ft.trim(ft.text(t))}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,r="select-one"===t.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(((n=i[l]).selected||l===o)&&(ut.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ft.nodeName(n.parentNode,"optgroup"))){if(e=ft(n).val(),r)return e;s.push(e)}return s},set:function(t,e){for(var n,i,o=t.options,r=ft.makeArray(e),s=o.length;s--;)if(i=o[s],ft.inArray(ft.valHooks.option.get(i),r)>=0)try{i.selected=n=!0}catch(t){i.scrollHeight}else i.selected=!1;return n||(t.selectedIndex=-1),o}}}}),ft.each(["radio","checkbox"],function(){ft.valHooks[this]={set:function(t,e){return ft.isArray(e)?t.checked=ft.inArray(ft(t).val(),e)>-1:void 0}},ut.checkOn||(ft.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var Se,Ne,je=ft.expr.attrHandle,De=/^(?:checked|selected)$/i,Ae=ut.getSetAttribute,Le=ut.input;ft.fn.extend({attr:function(t,e){return Ft(this,ft.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ft.removeAttr(this,t)})}}),ft.extend({attr:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?ft.prop(t,e,n):(1===r&&ft.isXMLDoc(t)||(e=e.toLowerCase(),o=ft.attrHooks[e]||(ft.expr.match.bool.test(e)?Ne:Se)),void 0!==n?null===n?void ft.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=ft.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!ut.radioValue&&"radio"===e&&ft.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i,o=0,r=e&&e.match(St);if(r&&1===t.nodeType)for(;n=r[o++];)i=ft.propFix[n]||n,ft.expr.match.bool.test(n)?Le&&Ae||!De.test(n)?t[i]=!1:t[ft.camelCase("default-"+n)]=t[i]=!1:ft.attr(t,n,""),t.removeAttribute(Ae?n:i)}}),Ne={set:function(t,e,n){return!1===e?ft.removeAttr(t,n):Le&&Ae||!De.test(n)?t.setAttribute(!Ae&&ft.propFix[n]||n,n):t[ft.camelCase("default-"+n)]=t[n]=!0,n}},ft.each(ft.expr.match.bool.source.match(/\w+/g),function(t,e){var n=je[e]||ft.find.attr;Le&&Ae||!De.test(e)?je[e]=function(t,e,i){var o,r;return i||(r=je[e],je[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,je[e]=r),o}:je[e]=function(t,e,n){return n?void 0:t[ft.camelCase("default-"+e)]?e.toLowerCase():null}}),Le&&Ae||(ft.attrHooks.value={set:function(t,e,n){return ft.nodeName(t,"input")?void(t.defaultValue=e):Se&&Se.set(t,e,n)}}),Ae||(Se={set:function(t,e,n){var i=t.getAttributeNode(n);return i||t.setAttributeNode(i=t.ownerDocument.createAttribute(n)),i.value=e+="","value"===n||e===t.getAttribute(n)?e:void 0}},je.id=je.name=je.coords=function(t,e,n){var i;return n?void 0:(i=t.getAttributeNode(e))&&""!==i.value?i.value:null},ft.valHooks.button={get:function(t,e){var n=t.getAttributeNode(e);return n&&n.specified?n.value:void 0},set:Se.set},ft.attrHooks.contenteditable={set:function(t,e,n){Se.set(t,""!==e&&e,n)}},ft.each(["width","height"],function(t,e){ft.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}}})),ut.style||(ft.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+""}});var He=/^(?:input|select|textarea|button|object)$/i,Pe=/^(?:a|area)$/i;ft.fn.extend({prop:function(t,e){return Ft(this,ft.prop,t,e,arguments.length>1)},removeProp:function(t){return t=ft.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(t){}})}}),ft.extend({prop:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&ft.isXMLDoc(t)||(e=ft.propFix[e]||e,o=ft.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=ft.find.attr(t,"tabindex");return e?parseInt(e,10):He.test(t.nodeName)||Pe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ut.hrefNormalized||ft.each(["href","src"],function(t,e){ft.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),ut.optSelected||(ft.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),ft.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ft.propFix[this.toLowerCase()]=this}),ut.enctype||(ft.propFix.enctype="encoding");var qe=/[\t\r\n\f]/g;ft.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(ft.isFunction(t))return this.each(function(e){ft(this).addClass(t.call(this,e,I(this)))});if("string"==typeof t&&t)for(e=t.match(St)||[];n=this[l++];)if(o=I(n),i=1===n.nodeType&&(" "+o+" ").replace(qe," ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=ft.trim(i))&&ft.attr(n,"class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(ft.isFunction(t))return this.each(function(e){ft(this).removeClass(t.call(this,e,I(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(St)||[];n=this[l++];)if(o=I(n),i=1===n.nodeType&&(" "+o+" ").replace(qe," ")){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");o!==(a=ft.trim(i))&&ft.attr(n,"class",a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):ft.isFunction(t)?this.each(function(n){ft(this).toggleClass(t.call(this,n,I(this),e),e)}):this.each(function(){var e,i,o,r;if("string"===n)for(i=0,o=ft(this),r=t.match(St)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(void 0===t||"boolean"===n)&&((e=I(this))&&ft._data(this,"__className__",e),ft.attr(this,"class",e||!1===t?"":ft._data(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+I(n)+" ").replace(qe," ").indexOf(e)>-1)return!0;return!1}}),ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ft.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ft.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}});var Me=t.location,Fe=ft.now(),Oe=/\?/,_e=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ft.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"");var n,i=null,o=ft.trim(e+"");return o&&!ft.trim(o.replace(_e,function(t,e,o,r){return n&&e&&(i=0),0===i?t:(n=o||e,i+=!r-!o,"")}))?Function("return "+o)():ft.error("Invalid JSON: "+e)},ft.parseXML=function(e){var n,i;if(!e||"string"!=typeof e)return null;try{t.DOMParser?(i=new t.DOMParser,n=i.parseFromString(e,"text/xml")):(n=new t.ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e))}catch(t){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ft.error("Invalid XML: "+e),n};var We=/#.*$/,Re=/([?&])_=[^&]*/,Be=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ie=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ze=/^(?:GET|HEAD)$/,Xe=/^\/\//,Qe=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ue={},Ve={},Ge="*/".concat("*"),Je=Me.href,Ye=Qe.exec(Je.toLowerCase())||[];ft.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Je,type:"GET",isLocal:Ie.test(Ye[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ge,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ft.parseJSON,"text xml":ft.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Q(Q(t,ft.ajaxSettings),e):Q(ft.ajaxSettings,t)},ajaxPrefilter:z(Ue),ajaxTransport:z(Ve),ajax:function(e,n){function i(e,n,i,o){var r,d,y,b,w,T=n;2!==x&&(x=2,l&&t.clearTimeout(l),u=void 0,a=o||"",C.readyState=e>0?4:0,r=e>=200&&300>e||304===e,i&&(b=U(f,C,i)),b=V(f,b,C,r),r?(f.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(ft.lastModified[s]=w),(w=C.getResponseHeader("etag"))&&(ft.etag[s]=w)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=b.state,d=b.data,y=b.error,r=!y)):(y=T,(e||!T)&&(T="error",0>e&&(e=0))),C.status=e,C.statusText=(n||T)+"",r?m.resolveWith(p,[d,T,C]):m.rejectWith(p,[C,T,y]),C.statusCode(g),g=void 0,c&&h.trigger(r?"ajaxSuccess":"ajaxError",[C,f,r?d:y]),v.fireWith(p,[C,T]),c&&(h.trigger("ajaxComplete",[C,f]),--ft.active||ft.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=void 0),n=n||{};var o,r,s,a,l,c,u,d,f=ft.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?ft(p):ft.event,m=ft.Deferred(),v=ft.Callbacks("once memory"),g=f.statusCode||{},y={},b={},x=0,w="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(2===x){if(!d)for(d={};e=Be.exec(a);)d[e[1].toLowerCase()]=e[2];e=d[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return x||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return x||(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>x)for(e in t)g[e]=[g[e],t[e]];else C.always(t[C.status]);return this},abort:function(t){var e=t||w;return u&&u.abort(e),i(0,e),this}};if(m.promise(C).complete=v.add,C.success=C.done,C.error=C.fail,f.url=((e||f.url||Je)+"").replace(We,"").replace(Xe,Ye[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=ft.trim(f.dataType||"*").toLowerCase().match(St)||[""],null==f.crossDomain&&(o=Qe.exec(f.url.toLowerCase()),f.crossDomain=!(!o||o[1]===Ye[1]&&o[2]===Ye[2]&&(o[3]||("http:"===o[1]?"80":"443"))===(Ye[3]||("http:"===Ye[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=ft.param(f.data,f.traditional)),X(Ue,f,n,C),2===x)return C;(c=ft.event&&f.global)&&0==ft.active++&&ft.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!ze.test(f.type),s=f.url,f.hasContent||(f.data&&(s=f.url+=(Oe.test(s)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Re.test(s)?s.replace(Re,"$1_="+Fe++):s+(Oe.test(s)?"&":"?")+"_="+Fe++)),f.ifModified&&(ft.lastModified[s]&&C.setRequestHeader("If-Modified-Since",ft.lastModified[s]),ft.etag[s]&&C.setRequestHeader("If-None-Match",ft.etag[s])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&C.setRequestHeader("Content-Type",f.contentType),C.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ge+"; q=0.01":""):f.accepts["*"]);for(r in f.headers)C.setRequestHeader(r,f.headers[r]);if(f.beforeSend&&(!1===f.beforeSend.call(p,C,f)||2===x))return C.abort();w="abort";for(r in{success:1,error:1,complete:1})C[r](f[r]);if(u=X(Ve,f,n,C)){if(C.readyState=1,c&&h.trigger("ajaxSend",[C,f]),2===x)return C;f.async&&f.timeout>0&&(l=t.setTimeout(function(){C.abort("timeout")},f.timeout));try{x=1,u.send(y,i)}catch(t){if(!(2>x))throw t;i(-1,t)}}else i(-1,"No Transport");return C},getJSON:function(t,e,n){return ft.get(t,e,n,"json")},getScript:function(t,e){return ft.get(t,void 0,e,"script")}}),ft.each(["get","post"],function(t,e){ft[e]=function(t,n,i,o){return ft.isFunction(n)&&(o=o||i,i=n,n=void 0),ft.ajax(ft.extend({url:t,type:e,dataType:o,data:n,success:i},ft.isPlainObject(t)&&t))}}),ft._evalUrl=function(t){return ft.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ft.fn.extend({wrapAll:function(t){if(ft.isFunction(t))return this.each(function(e){ft(this).wrapAll(t.call(this,e))});if(this[0]){var e=ft(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return ft.isFunction(t)?this.each(function(e){ft(this).wrapInner(t.call(this,e))}):this.each(function(){var e=ft(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ft.isFunction(t);return this.each(function(n){ft(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){ft.nodeName(this,"body")||ft(this).replaceWith(this.childNodes)}).end()}}),ft.expr.filters.hidden=function(t){return ut.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:J(t)},ft.expr.filters.visible=function(t){return!ft.expr.filters.hidden(t)};var Ke=/%20/g,Ze=/\[\]$/,tn=/\r?\n/g,en=/^(?:submit|button|image|reset|file)$/i,nn=/^(?:input|select|textarea|keygen)/i;ft.param=function(t,e){var n,i=[],o=function(t,e){e=ft.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=ft.ajaxSettings&&ft.ajaxSettings.traditional),ft.isArray(t)||t.jquery&&!ft.isPlainObject(t))ft.each(t,function(){o(this.name,this.value)});else for(n in t)Y(n,t[n],e,o);return i.join("&").replace(Ke,"+")},ft.fn.extend({serialize:function(){return ft.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ft.prop(this,"elements");return t?ft.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ft(this).is(":disabled")&&nn.test(this.nodeName)&&!en.test(t)&&(this.checked||!Ot.test(t))}).map(function(t,e){var n=ft(this).val();return null==n?null:ft.isArray(n)?ft.map(n,function(t){return{name:e.name,value:t.replace(tn,"\r\n")}}):{name:e.name,value:n.replace(tn,"\r\n")}}).get()}}),ft.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return this.isLocal?Z():nt.documentMode>8?K():/^(get|post|head|put|delete|options)$/i.test(this.type)&&K()||Z()}:K;var on=0,rn={},sn=ft.ajaxSettings.xhr();t.attachEvent&&t.attachEvent("onunload",function(){for(var t in rn)rn[t](void 0,!0)}),ut.cors=!!sn&&"withCredentials"in sn,(sn=ut.ajax=!!sn)&&ft.ajaxTransport(function(e){if(!e.crossDomain||ut.cors){var n;return{send:function(i,o){var r,s=e.xhr(),a=++on;if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)s[r]=e.xhrFields[r];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(r in i)void 0!==i[r]&&s.setRequestHeader(r,i[r]+"");s.send(e.hasContent&&e.data||null),n=function(t,i){var r,l,c;if(n&&(i||4===s.readyState))if(delete rn[a],n=void 0,s.onreadystatechange=ft.noop,i)4!==s.readyState&&s.abort();else{c={},r=s.status,"string"==typeof s.responseText&&(c.text=s.responseText);try{l=s.statusText}catch(t){l=""}r||!e.isLocal||e.crossDomain?1223===r&&(r=204):r=c.text?200:404}c&&o(r,l,c,s.getAllResponseHeaders())},e.async?4===s.readyState?t.setTimeout(n):s.onreadystatechange=rn[a]=n:n()},abort:function(){n&&n(void 0,!0)}}}}),ft.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),ft.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return ft.globalEval(t),t}}}),ft.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),ft.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=nt.head||ft("head")[0]||nt.documentElement;return{send:function(i,o){(e=nt.createElement("script")).async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n||o(200,"success"))},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var an=[],ln=/(=)\?(?=&|$)|\?\?/;ft.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=an.pop()||ft.expando+"_"+Fe++;return this[t]=!0,t}}),ft.ajaxPrefilter("json jsonp",function(e,n,i){var o,r,s,a=!1!==e.jsonp&&(ln.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&ln.test(e.data)&&"data");return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=ft.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(ln,"$1"+o):!1!==e.jsonp&&(e.url+=(Oe.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||ft.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=t[o],t[o]=function(){s=arguments},i.always(function(){void 0===r?ft(t).removeProp(o):t[o]=r,e[o]&&(e.jsonpCallback=n.jsonpCallback,an.push(o)),s&&ft.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),ut.createHTMLDocument=function(){if(!nt.implementation.createHTMLDocument)return!1;var t=nt.implementation.createHTMLDocument("");return t.body.innerHTML="<form></form><form></form>",2===t.body.childNodes.length}(),ft.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||(ut.createHTMLDocument?nt.implementation.createHTMLDocument(""):nt);var i=wt.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=g([t],e,o),o&&o.length&&ft(o).remove(),ft.merge([],i.childNodes))};var cn=ft.fn.load;ft.fn.load=function(t,e,n){if("string"!=typeof t&&cn)return cn.apply(this,arguments);var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=ft.trim(t.slice(a,t.length)),t=t.slice(0,a)),ft.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&ft.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done(function(t){r=arguments,s.html(i?ft("<div>").append(ft.parseHTML(t)).find(i):t)}).always(n&&function(t,e){s.each(function(){n.apply(s,r||[t.responseText,e,t])})}),this},ft.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ft.fn[e]=function(t){return this.on(e,t)}}),ft.expr.filters.animated=function(t){return ft.grep(ft.timers,function(e){return t===e.elem}).length},ft.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,c=ft.css(t,"position"),u=ft(t),d={};"static"===c&&(t.style.position="relative"),a=u.offset(),r=ft.css(t,"top"),l=ft.css(t,"left"),("absolute"===c||"fixed"===c)&&ft.inArray("auto",[r,l])>-1?(i=u.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),ft.isFunction(e)&&(e=e.call(t,n,ft.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):u.css(d)}},ft.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ft.offset.setOffset(this,t,e)});var e,n,i={top:0,left:0},o=this[0],r=o&&o.ownerDocument;return r?(e=r.documentElement,ft.contains(e,o)?(void 0!==o.getBoundingClientRect&&(i=o.getBoundingClientRect()),n=tt(r),{top:i.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:i.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):i):void 0},position:function(){if(this[0]){var t,e,n={top:0,left:0},i=this[0];return"fixed"===ft.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ft.nodeName(t[0],"html")||(n=t.offset()),n.top+=ft.css(t[0],"borderTopWidth",!0)-t.scrollTop(),n.left+=ft.css(t[0],"borderLeftWidth",!0)-t.scrollLeft()),{top:e.top-n.top-ft.css(i,"marginTop",!0),left:e.left-n.left-ft.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&!ft.nodeName(t,"html")&&"static"===ft.css(t,"position");)t=t.offsetParent;return t||ue})}}),ft.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e);ft.fn[t]=function(i){return Ft(this,function(t,i,o){var r=tt(t);return void 0===o?r?e in r?r[e]:r.document.documentElement[i]:t[i]:void(r?r.scrollTo(n?ft(r).scrollLeft():o,n?o:ft(r).scrollTop()):t[i]=o)},t,i,arguments.length,null)}}),ft.each(["top","left"],function(t,e){ft.cssHooks[e]=A(ut.pixelPosition,function(t,n){return n?(n=fe(t,e),le.test(n)?ft(t).position()[e]+"px":n):void 0})}),ft.each({Height:"height",Width:"width"},function(t,e){ft.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){ft.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Ft(this,function(e,n,i){var o;return ft.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?ft.css(e,n,s):ft.style(e,n,i,s)},e,r?i:void 0,r,null)}})}),ft.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),ft.fn.size=function(){return this.length},ft.fn.andSelf=ft.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ft});var un=t.jQuery,dn=t.$;return ft.noConflict=function(e){return t.$===ft&&(t.$=dn),e&&t.jQuery===ft&&(t.jQuery=un),ft},e||(t.jQuery=t.$=ft),ft}),function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),r=o.attr("data-target");r||(r=(r=o.attr("href"))&&r.replace(/.*(?=#[^\s]*$)/,"")),i=t(r),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),r="object"==typeof n&&n;o||i.data("button",o=new e(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),r=n||o[e](),s=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",c=this;if(this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:r[0],direction:a}),!r.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(c.$indicators.children()[c.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),this.$element.one(t.support.transition.end,function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),c.sliding=!1,setTimeout(function(){c.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("carousel",o=new e(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),r=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},r.data(),o.data());r.carousel(s),(i=o.attr("data-slide-to"))&&r.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),(i=this.$parent&&this.$parent.find("> .accordion-group > .in"))&&i.length){if((o=i.data("collapse"))&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,r=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,r):r())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),r=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(r)})}(window.jQuery),function(t){"use strict";function e(){t(".dropdown-backdrop").remove(),t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=(i=e.attr("href"))&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),(n=i&&t(i))&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(i){var o,r,s=t(this);if(!s.is(".disabled, :disabled"))return o=n(s),r=o.hasClass("open"),e(),r||("ontouchstart"in document.documentElement&&t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click",e),o.toggleClass("open")),s.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),!(a=s.hasClass("open"))||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();(r=t("[role=menu] li:not(.divider):visible a",s)).length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault();e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),r=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,r)),"string"==typeof n?o[n]():r.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(r).one("hide",function(){n.focus()})})}(window.jQuery),function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var o,r,s,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,l=(s=this.options.trigger.split(" ")).length;l--;)"click"==(a=s[l])?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(o="hover"==a?"mouseenter":"focus",r="hover"==a?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return(e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,o={};if(this._options&&t.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),!(n=t(e.currentTarget)[this.type](o).data(this.type)).options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)},show:function(){var e,n,i,o,r,s,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),r="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,o=e[0].offsetHeight,r){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":s={top:n.top-o,left:n.left+n.width/2-i/2};break;case"left":s={top:n.top+n.height/2-o/2,left:n.left-i};break;case"right":s={top:n.top+n.height/2-o/2,left:n.left+n.width}}this.applyPlacement(s,r),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,o,r,s=this.tip(),a=s[0].offsetWidth,l=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,i=s[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,r=!0),"bottom"==e||"top"==e?(o=0,t.left<0&&(o=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,i=s[0].offsetHeight),this.replaceArrow(o-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),r&&s.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip(),n=t.Event("hide");if(this.$element.trigger(n),!n.isDefaultPrevented())return e.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?function(){var n=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(n),e.detach()})}():e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),o=i.data("tooltip"),r="object"==typeof n&&n;o||i.data("tooltip",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return("function"==typeof e.content?e.content.call(t[0]):e.content)||t.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),r="object"==typeof n&&n;o||i.data("popover",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),r=t(t(e).is("body")?window:e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=r.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e=this;this.offsets=t([]),this.targets=t([]),this.$body.find(this.selector).map(function(){var n=t(this),i=n.data("target")||n.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(e.$scrollElement.get(0))&&e.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),i=this.offsets,o=this.targets,r=this.activeTarget;if(e>=n)return r!=(t=o.last()[0])&&this.activate(t);for(t=i.length;t--;)r!=o[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(o[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',(n=t(i).parent("li").addClass("active")).parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),r="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,r=o.closest("ul:not(.dropdown-menu)"),s=o.attr("data-target");s||(s=(s=o.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=r.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(s),this.activate(o.parent("li"),r),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one(t.support.transition.end,o):o(),r.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(e){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source)?this.process(n):this},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),(e=this.sorter(e)).length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?i.push(e):o.push(e):n.push(e);return n.concat(i,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return(e=t(e).map(function(e,i){return(e=t(n.options.item).attr("data-value",i)).find("a").html(n.highlighter(i)),e[0]})).first().addClass("active"),this.$menu.html(e),this},next:function(e){var n=this.$menu.find(".active").removeClass("active").next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(t){var e=this.$menu.find(".active").removeClass("active").prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(t){this.focused=!0},blur:function(t){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(t){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=t.fn.typeahead;t.fn.typeahead=function(n){return this.each(function(){var i=t(this),o=i.data("typeahead"),r="object"==typeof n&&n;o||i.data("typeahead",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var n=t(this);n.data("typeahead")||n.typeahead(n.data())})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.options=t.extend({},t.fn.affix.defaults,n),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,n=t(document).height(),i=this.$window.scrollTop(),o=this.$element.offset(),r=this.options.offset,s=r.bottom,a=r.top;"object"!=typeof r&&(s=a=r),"function"==typeof a&&(a=r.top()),"function"==typeof s&&(s=r.bottom()),e=!(null!=this.unpin&&i+this.unpin<=o.top)&&(null!=s&&o.top+this.$element.height()>=n-s?"bottom":null!=a&&i<=a&&"top"),this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-i:null,this.$element.removeClass("affix affix-top affix-bottom").addClass("affix"+(e?"-"+e:"")))}};var n=t.fn.affix;t.fn.affix=function(n){return this.each(function(){var i=t(this),o=i.data("affix"),r="object"==typeof n&&n;o||i.data("affix",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.affix(n)})})}(window.jQuery),function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,o=t(this),r=o.attr("data-target");r||(r=(r=o.attr("href"))&&r.replace(/.*(?=#[^\s]*$)/,"")),i=t(r),e&&e.preventDefault(),i.length||(i=o.hasClass("alert")?o:o.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),o=i.data("alert");o||i.data("alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),o=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[o]()),n[o](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),o=i.data("button"),r="object"==typeof n&&n;o||i.data("button",o=new e(this,r)),"toggle"==n?o.toggle():n&&o.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),r=n||o[e](),s=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",c=this;if(this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[l](),i=t.Event("slide",{relatedTarget:r[0],direction:a}),!r.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(c.$indicators.children()[c.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),this.$element.one(t.support.transition.end,function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),c.sliding=!1,setTimeout(function(){c.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),s="string"==typeof n?n:r.slide;o||i.data("carousel",o=new e(this,r)),"number"==typeof n?o.to(n):s?o[s]():r.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),r=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},r.data(),o.data());r.carousel(s),(i=o.attr("data-slide-to"))&&r.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery),function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,n),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var e,n,i,o;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),n=t.camelCase(["scroll",e].join("-")),(i=this.$parent&&this.$parent.find("> .accordion-group > .in"))&&i.length){if((o=i.data("collapse"))&&o.transitioning)return;i.collapse("hide"),o||i.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][n])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,n,i){var o=this,r=function(){"show"==n.type&&o.reset(),o.transitioning=0,o.$element.trigger(i)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,r):r())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),o=i.data("collapse"),r=t.extend({},t.fn.collapse.defaults,i.data(),"object"==typeof n&&n);o||i.data("collapse",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),o=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(o).data("collapse")?"toggle":i.data();i[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(r)})}(window.jQuery),function(t){"use strict";function e(){t(".dropdown-backdrop").remove(),t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=(i=e.attr("href"))&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),(n=i&&t(i))&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(i){var o,r,s=t(this);if(!s.is(".disabled, :disabled"))return o=n(s),r=o.hasClass("open"),e(),r||("ontouchstart"in document.documentElement&&t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click",e),o.toggleClass("open")),s.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),!(a=s.hasClass("open"))||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();(r=t("[role=menu] li:not(.divider):visible a",s)).length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery),function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault();e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),o=i.data("modal"),r=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);o||i.data("modal",o=new e(this,r)),"string"==typeof n?o[n]():r.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),o=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},o.data(),n.data());e.preventDefault(),o.modal(r).one("hide",function(){n.focus()})})}(window.jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return("function"==typeof e.content?e.content.call(t[0]):e.content)||t.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=t.fn.popover;t.fn.popover=function(n){return this.each(function(){var i=t(this),o=i.data("popover"),r="object"==typeof n&&n;o||i.data("popover",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(window.jQuery),function(t){"use strict";function e(e,n){var i,o=t.proxy(this.process,this),r=t(t(e).is("body")?window:e);this.options=t.extend({},t.fn.scrollspy.defaults,n),this.$scrollElement=r.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(i=t(e).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e=this;this.offsets=t([]),this.targets=t([]),this.$body.find(this.selector).map(function(){var n=t(this),i=n.data("target")||n.attr("href"),o=/^#\w/.test(i)&&t(i);return o&&o.length&&[[o.position().top+(!t.isWindow(e.$scrollElement.get(0))&&e.$scrollElement.scrollTop()),i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),i=this.offsets,o=this.targets,r=this.activeTarget;if(e>=n)return r!=(t=o.last()[0])&&this.activate(t);for(t=i.length;t--;)r!=o[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(o[t])},activate:function(e){var n,i;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',(n=t(i).parent("li").addClass("active")).parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=t.fn.scrollspy;t.fn.scrollspy=function(n){return this.each(function(){var i=t(this),o=i.data("scrollspy"),r="object"==typeof n&&n;o||i.data("scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,o=this.element,r=o.closest("ul:not(.dropdown-menu)"),s=o.attr("data-target");s||(s=(s=o.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=r.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),o.trigger(i),i.isDefaultPrevented()||(n=t(s),this.activate(o.parent("li"),r),this.activate(n,n.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function o(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var r=n.find("> .active"),s=i&&t.support.transition&&r.hasClass("fade");s?r.one(t.support.transition.end,o):o(),r.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),o=i.data("tab");o||i.data("tab",o=new e(this)),"string"==typeof n&&o[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),console.log("test"),function(){for(var t,e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],n=e.length,i=window.console=window.console||{};n--;)i[t=e[n]]||(i[t]=function(){})}();;console.log("test");;// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.