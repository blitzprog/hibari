webpackJsonp([1],[function(t,e){t.exports=function(t,e,n,r){var a,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:a,exports:i,options:s}}},,function(t,e,n){var r=n(0)(n(22),null,null,null);t.exports=r.exports},function(t,e,n){n(31);var r=n(0)(null,n(56),null,null);t.exports=r.exports},function(t,e,n){n(30);var r=n(0)(n(26),n(55),null,null);t.exports=r.exports},,,,,,,function(t,e,n){"use strict";var r=n(1),a=n.n(r),i=n(43),o=n.n(i),s=n(8),u=(n.n(s),n(42)),c=n.n(u),l=n(44),f=n.n(l),d=n(16),p=n(17),v=n(14),h=n(15);n.d(e,"a",function(){return _});var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};n.i(s.sync)(p.a,d.a);var m={en:v.a,ja:h.a};a.a.use(c.a),a.a.use(o.a),a.a.config.lang=a.a.cookie.get("lang")?a.a.cookie.get("lang"):"en",a.a.config.fallbackLang="en",Object.keys(m).forEach(function(t){a.a.locale(t,m[t])});var _=new a.a(g({router:d.a,store:p.a},f.a))},function(t,e,n){"use strict";var r=n(5),a=n.n(r);window.Promise=window.Promise||a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),a=n.n(r);a.a.install({onUpdateReady:function(){console.log("update ready"),a.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(t,e,n){"use strict";e.a={lang:"English",hibari:"Hibari",notice:{id:"1",content:"As of 8th February '17, Hibari has been rewritten from scratch to support the Kitsu API<br>This version is very early alpha and is prone to bugs and lack of content. Feel free to send me suggestions on <a href='//kitsu.io/users/wopian'>Kitsu</a>"},navigation:{home:"Home"},home:{user:{head:"User",body:"Something about searching {username}",placeholder:"enter a username...",action:"Lookup"},anime:{head:"Anime",body:"Something about searching an anime",action:"Lookup"},manga:{head:"Manga",body:"Something about searching a manga",action:"Lookup"}}}},function(t,e,n){"use strict";e.a={lang:"日本語？",hibari:"ヒバリ",navigation:{home:"ホーム？"},home:{user:{head:"ユーザー？",body:"Psst, help translate this project",action:"サーチ？"},anime:{head:"アニメ？"},manga:{head:"マンガ？"}}}},function(t,e,n){"use strict";var r=n(1),a=n.n(r),i=n(7),o=n.n(i),s=n(6),u=n.n(s),c=n(50),l=n.n(c),f=n(4),d=n.n(f),p=n(49),v=n.n(p),h=n(51),g=n.n(h);a.a.use(o.a),a.a.use(u.a),e.a=new o.a({mode:"history",routes:[{path:"/",component:l.a},{path:"/@:id",component:d.a,children:[{path:"library",component:function(t){return Promise.resolve().then(function(){var e=[n(4)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:":status",component:function(t){return Promise.resolve().then(function(){var e=[n(4)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},{path:"/anime/:query",component:v.a},{path:"/manga/:query",component:g.a},{path:"/:id",redirect:"/@:id"},{path:"/:id/library",redirect:"/@:id"},{path:"/:id/library/:status",redirect:"/@:id"},{path:"*",component:function(t){return n.e(0).then(function(){var e=[n(65)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},function(t,e,n){"use strict";var r=n(1),a=n.n(r),i=n(9),o=n.n(i);a.a.use(o.a);var s=!1,u={count:0},c={INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}},l={incrementAsync:function(t){var e=t.commit;setTimeout(function(){e("INCREMENT")},200)}},f=new o.a.Store({development:s,state:u,mutations:c,actions:l});e.a=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(46),a=n.n(r),i=n(48),o=n.n(i),s=n(45),u=n.n(s);e.default={data:function(){return{showNotice:!0}},components:{AppNavbar:a.a,Notice:o.a,AppFooter:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(47),a=n.n(r);e.default={components:{LanguageSwitcher:a.a},computed:{development:function(){return String(this.$store.development)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n.n(r);e.default={data:function(){var t=this;return{lang:this.$lang,languages:[{code:"EN"},{code:"JA"}],Select:function(e){console.info("[APP] Set language to "+e),a.a.config.lang=e.toLowerCase(),t.$cookie.set("lang",e.toLowerCase())}}},components:{language:{props:["code"]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){var t=this;return{show:!0,Hide:function(){t.show=!t.show,t.$cookie.set("notice",t.show),t.$cookie.set("noticeID",t.$t("notice.id"))}}},computed:{cookie:function(){return this.$cookie.get("notice")},matches:function(){return!!parseInt(this.$cookie.get("noticeID"))&&parseInt(this.$cookie.get("noticeID"))===parseInt(this.$t("notice.id"))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"set-title",props:["title"],created:function(){document.title=this.title},watch:{title:function(){document.title=this.title}},render:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n.n(r),i=n(2),o=n.n(i);e.default={components:{Spinner:a.a,SetTitle:o.a},data:function(){return{loading:!1,anime:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/anime?page[limit]=1&filter[text]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="Anime doesn't exist":(t.anime=e.body.data[0],t.anime.attr=t.anime.attributes,history.replaceState({},null,"/anime/"+t.anime.attr.slug),delete t.anime.attributes,delete t.anime.relationships,delete t.anime.links)}).catch(function(e){t.error=e.toString()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{userInput:"",animeInput:"",mangaInput:""}},methods:{slugify:function(t){return t.trim().replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-]/g,"").toLowerCase()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n.n(r),i=n(2),o=n.n(i);e.default={components:{Spinner:a.a,SetTitle:o.a},data:function(){return{loading:!1,manga:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/manga?page[limit]=1&filter[text]="+this.$route.params.query,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="Manga doesn't exist":(t.manga=e.body.data[0],t.manga.attr=t.manga.attributes,history.replaceState({},null,"/manga/"+t.manga.attr.slug),delete t.manga.attributes,delete t.manga.relationships,delete t.manga.links)}).catch(function(e){t.error=e.toString()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n.n(r),i=n(2),o=n.n(i);e.default={components:{Spinner:a.a,SetTitle:o.a},data:function(){return{loading:!1,user:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/users?filter[name]="+this.$route.params.id,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json","User-Agent":"hibari"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="No user exists":t.user=e.body.data[0]}).catch(function(e){t.error=e.toString()})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function r(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),r=function(t){function e(){switch(o.state){case"redundant":a("onUpdateFailed"),o.onstatechange=null;break;case"installing":r||a("onUpdating");break;case"installed":i||a("onUpdateReady");break;case"activated":a("onUpdated"),o.onstatechange=null}}function n(){switch(o.state){case"redundant":o.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":a("onInstalled"),o.onstatechange=null}}var r,i,o=t.installing||t.waiting;if(o&&!o.onstatechange){var s;t.active?(e(),s=e):(n(),s=n),r=!0,t.waiting&&(i=!0),o.onstatechange=s}},a=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(r(t),t.onupdatefound=function(){r(t)})}).catch(function(t){return a("onError"),Promise.reject(t)})}}function a(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){return n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),void(t&&t())):void(e&&e())})}function i(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=r,e.applyUpdate=a,e.update=i},,,,function(t,e,n){var r,a;!function(i,o){r=o,a="function"==typeof r?r.call(e,n,e,t):r,!(void 0!==a&&(t.exports=a))}(this,function(){"use strict";function t(e,n,r){return void 0===n?t.get(e):void(null===n?t.remove(e):t.set(e,n,r))}function e(t){return t.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")}function n(t){var e="";for(var n in t)if(t.hasOwnProperty(n)){if("expires"===n){var a=t[n];"object"!=typeof a&&(a+="number"==typeof a?"D":"",a=r(a)),t[n]=a.toUTCString()}if("secure"===n){t[n]&&(e+=";"+n);continue}e+=";"+n+"="+t[n]}return t.hasOwnProperty("path")||(e+=";path=/"),e}function r(t){var e=new Date,n=t.charAt(t.length-1),r=parseInt(t,10);switch(n){case"Y":e.setFullYear(e.getFullYear()+r);break;case"M":e.setMonth(e.getMonth()+r);break;case"D":e.setDate(e.getDate()+r);break;case"h":e.setHours(e.getHours()+r);break;case"m":e.setMinutes(e.getMinutes()+r);break;case"s":e.setSeconds(e.getSeconds()+r);break;default:e=new Date(t)}return e}return t.enabled=function(){var e,n="__test_key";return document.cookie=n+"=1",e=!!document.cookie,e&&t.remove(n),e},t.get=function(t,n){if("string"!=typeof t||!t)return null;t="(?:^|; )"+e(t)+"(?:=([^;]*?))?(?:;|$)";var r=new RegExp(t),a=r.exec(document.cookie);return null!==a?n?a[1]:decodeURIComponent(a[1]):null},t.getRaw=function(e){return t.get(e,!0)},t.set=function(t,e,r,a){r!==!0&&(a=r,r=!1),a=n(a?a:{});var i=t+"="+(r?e:encodeURIComponent(e))+a;document.cookie=i},t.setRaw=function(e,n,r){t.set(e,n,!0,r)},t.remove=function(e){t.set(e,"a",{expires:new Date})},t})},function(t,e,n){!function(){var e=n(41),r={install:function(t){t.prototype.$cookie=this,t.cookie=this},set:function(t,n,r){var a=r;return Number.isInteger(r)&&(a={expires:r}),e.set(t,n,a)},get:function(t){return e.get(t)},delete:function(t,e){var n={expires:-1};void 0!==e&&(n=Object.assign(e,n)),this.set(t,"",n)}};t.exports=r}()},function(t,e,n){"use strict";function r(t,e){window.console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function a(t,e){t.locale=function(t,n,a){return void 0===n?e.locales[t]:void(null===n?(e.locales[t]=void 0,delete e.locales[t]):i(t,n,function(n){n?e.locales[t]=n:r("failed set `"+t+"` locale"),a&&a()}))}}function i(t,e,n){var r=this;"object"===("undefined"==typeof e?"undefined":x.typeof(e))?n(e):!function(){var t=e.call(r);"function"==typeof t?t.resolved?n(t.resolved):t.requested?t.pendingCallbacks.push(n):!function(){t.requested=!0;var e=t.pendingCallbacks=[n];t(function(n){t.resolved=n;for(var r=0,a=e.length;r<a;r++)e[r](n)},function(){n()})}():o(t)&&t.then(function(t){n(t)},function(){n()}).catch(function(t){console.error(t),n()})}()}function o(t){return t&&"function"==typeof t.then}function s(t,e){var n=t.prototype._init;t.prototype._init=function(t){var r=this;n.call(this,t),this.$parent||(this._$lang=e,this._langUnwatch=this._$lang.$watch("$data",function(t,e){r.$forceUpdate()},{deep:!0}))};var r=t.prototype._destroy;t.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),r.apply(this,arguments)}}function u(t){if(!$){var e=t.$watch("__watcher__",function(t){});$=t._watchers[0].constructor,e()}return $}function c(t){return!C&&t&&t._data&&t._data.__ob__&&t._data.__ob__.dep&&(C=t._data.__ob__.dep.constructor),C}function l(t,e,n){function r(t,e){var n=new i(e,t,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),o&&o.target&&n.depend(),n.value}}var a=t.util.bind,i=u(e),o=c(e);Object.defineProperty(t.config,"lang",{enumerable:!0,configurable:!0,get:r(function(){return e.lang},e),set:a(function(t){e.lang=t},e)}),A=n,Object.defineProperty(t.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return A},set:function(t){A=t}}),Object.defineProperty(t.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return I},set:function(t){I=t}}),Object.defineProperty(t.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return j},set:function(t){j=t}})}function f(t){return null===t||void 0===t}function d(t){function e(t){for(var e=arguments.length,r=Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return r=1===r.length&&"object"===x.typeof(r[0])?r[0]:{},r&&r.hasOwnProperty||(r={}),t.replace(P,function(e,a,i,o){var s=void 0;return"{"===t[o-1]&&"}"===t[o+e.length]?i:(s=n(r,i)?r[i]:e,f(s)?"":s)})}var n=t.util.hasOwn;return e}function p(t){return z.test(t)}function v(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function h(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function g(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(p(e)?v(e):"*"+e)}function m(t){function e(){var e=t[r+1];if(a===L&&"'"===e||a===H&&'"'===e)return r++,s="\\"+e,p[S](),!0}var n=[],r=-1,a=F,i=0,o=void 0,s=void 0,u=void 0,c=void 0,l=void 0,f=void 0,d=void 0,p=[];for(p[R]=function(){void 0!==u&&(n.push(u),u=void 0)},p[S]=function(){void 0===u?u=s:u+=s},p[M]=function(){p[S](),i++},p[E]=function(){if(i>0)i--,a=T,p[S]();else{if(i=0,u=g(u),u===!1)return!1;p[R]()}};null!=a;)if(r++,o=t[r],"\\"!==o||!e()){if(c=h(o),d=V[a],l=d[c]||d.else||q,l===q)return;if(a=l[0],f=p[l[1]],f&&(s=l[2],s=void 0===s?o:s,f()===!1))return;if(a===W)return n.raw=t,n}}function _(t){var e=O[t];return e||(e=m(t),e&&(O[t]=e)),e}function b(t){function e(t){if(null===t||void 0===t)return!0;if(Array.isArray(t)){if(t.length>0)return!1;if(0===t.length)return!0}else if(i(t))for(var e in t)if(o(t,e))return!1;return!0}function n(t,n){if(!a(t))return null;var r=_(n);if(e(r))return null;for(var i=r.length,o=null,s=t,u=0;u<i;){var c=s[r[u]];if(void 0===c){s=null;break}s=c,u++}return o=s}var r=t.util,a=r.isObject,i=r.isPlainObject,o=r.hasOwn;return n}function y(t){function e(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=t.config.lang,i=t.config.fallbackLang;return 1===n.length?h(n[0])||Array.isArray(n[0])?n=n[0]:"string"==typeof n[0]&&(a=n[0]):2===n.length&&("string"==typeof n[0]&&(a=n[0]),(h(n[1])||Array.isArray(n[1]))&&(n=n[1])),{lang:a,fallback:i,params:n}}function n(t,e){return!(!t||!e)&&!f(_(t,e))}function a(e,n,i){if(!e)return null;var o=_(e,n);if(Array.isArray(o))return o;if(f(o)&&(o=e[n]),f(o))return null;if("string"!=typeof o)return r("Value of key '"+n+"' is not a string!"),null;if(o.indexOf("@:")>=0){var s=o.match(/(@:[\w|.]+)/g);for(var u in s){var c=s[u],l=c.substr(2),d=a(e,l,i);o=o.replace(c,d)}}return i?t.config.i18nFormatter?t.config.i18nFormatter.apply(null,[o].concat(i)):m(o,i):o}function i(t,e,n,r,i){var o=null;return o=a(t(e),r,i),f(o)?(o=a(t(n),r,i),f(o)?null:o):o}function o(e,n,r,a){return f(a)?(t.config.missingHandler&&t.config.missingHandler.apply(null,[e,n,r]),n):a}function s(e){return t.locale(e)}function u(t){return this.$options.locales[t]}function c(t){return t?t>1?1:0:1}function l(t,e){return t=Math.abs(t),2===e?c(t):t?Math.min(t,2):0}function p(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return e=l(e,n.length),n[e]?n[e].trim():t}var v=t.util,h=v.isObject,g=v.bind,m=d(t),_=b(t);return t.t=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];if(!t)return"";var u=e.apply(void 0,r),c=u.lang,l=u.fallback,f=u.params;return o(c,t,null,i(s,c,l,t,f))},t.tc=function(e,n){for(var r=arguments.length,a=Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];return p(t.t.apply(t,[e].concat(a)),n)},t.te=function(t){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o=e.apply(void 0,a),u=o.lang;return n(s(u),t)},t.prototype.$t=function(t){if(!t)return"";for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var c=e.apply(void 0,r),l=c.lang,f=c.fallback,d=c.params,p=null;return this.$options.locales&&(p=i(g(u,this),l,f,t,d))?p:o(l,t,this,i(s,l,f,t,d))},t.prototype.$tc=function(t,e){if("number"!=typeof e&&"undefined"!=typeof e)return t;for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return p(this.$t.apply(this,[t].concat(r)),e)},t.prototype.$te=function(t){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var o=e.apply(void 0,a),c=o.lang,l=!1;return this.$options.locales&&(l=n(g(u)(c),t)),l||(l=n(s(c),t)),l},t.mixin({computed:{$lang:function(){return t.config.lang}}}),t}function w(t){var e=(arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t.version&&Number(t.version.split(".")[0])||-1,"en");k(t,e),a(t,G),s(t,G),l(t,G,e),y(t)}function k(t,e){var n=t.config.silent;t.config.silent=!0,G||(G=new t({data:{lang:e,locales:{}}})),t.config.silent=n}var x={};x.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};var $=void 0,C=void 0,A=void 0,I=null,j=null,P=/(%|)\{([0-9a-zA-Z_]+)\}/g,O=Object.create(null),S=0,R=1,M=2,E=3,F=0,N=1,D=2,U=3,T=4,L=5,H=6,W=7,q=8,V=[];V[F]={ws:[F],ident:[U,S],"[":[T],eof:[W]},V[N]={ws:[N],".":[D],"[":[T],eof:[W]},V[D]={ws:[D],ident:[U,S],0:[U,S],number:[U,S]},V[U]={ident:[U,S],0:[U,S],number:[U,S],ws:[N,R],".":[D,R],"[":[T,R],eof:[W,R]},V[T]={"'":[L,S],'"':[H,S],"[":[T,M],"]":[N,E],eof:q,else:[T,S]},V[L]={"'":[T,S],eof:q,else:[L,S]},V[H]={'"':[T,S],eof:q,else:[H,S]};var z=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,G=void 0;w.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(w),t.exports=w},function(t,e,n){n(28);var r=n(0)(n(18),n(53),null,null);t.exports=r.exports},function(t,e,n){n(35);var r=n(0)(null,n(60),null,null);t.exports=r.exports},function(t,e,n){n(34);var r=n(0)(n(19),n(59),null,null);t.exports=r.exports},function(t,e,n){n(29);var r=n(0)(n(20),n(54),null,null);t.exports=r.exports},function(t,e,n){n(32);var r=n(0)(n(21),n(57),null,null);t.exports=r.exports},function(t,e,n){n(27);var r=n(0)(n(23),n(52),null,null);t.exports=r.exports},function(t,e,n){n(33);var r=n(0)(n(24),n(58),null,null);t.exports=r.exports},function(t,e,n){n(36);var r=n(0)(n(25),n(61),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"no-container anime"},[t.loading?n("spinner"):t._e(),t._v(" "),t.anime?n("section",{staticClass:"content"},[n("set-title",{attrs:{title:t.anime.attr.canonicalTitle+" - Hibari"}}),t._v(" "),n("h1",[t._v("Anime")]),t._v(" "),n("pre",[t._v(t._s(t.anime))])],1):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-navbar"),t._v(" "),t.showNotice?n("notice"):t._e(),t._v(" "),n("router-view"),t._v(" "),n("app-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{switcher:""}},t._l(t.languages,function(e){return n("button",{on:{click:function(n){t.Select(e.code)}}},[t._v(t._s(e.code))])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"user"},[n("h1",[t._v("User")]),t._v(" "),t.loading?n("spinner"):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.user?n("div",{staticClass:"content"},[n("set-title",{attrs:{title:t.user.attributes.name+" - Hibari"}}),t._v(" "),n("p",[t._v(t._s(t.$route.params.id))]),t._v(" "),n("pre",[t._v("\nID: "+t._s(t.user.id)+"\nName: "+t._s(t.user.attributes.name)+"\nPast Names: "+t._s(t.user.attributes.pastNames)+"\n"),t._v("\nLocation: "+t._s(t.user.attributes.location)+"\nWaifu? "+t._s(t.user.attributes.waifuOrHusbando)+"\nFollowers: "+t._s(t.user.attributes.followersCount)+"\nFollowing: "+t._s(t.user.attributes.followingCount)+"\nJoined: "+t._s(t.user.attributes.createdAt)+"\nFacebook: https://facebook.com/"+t._s(t.user.attributes.facebookId)+"\nLife Spent on Anime: "+t._s(t.user.attributes.lifeSpentOnAnime)+"\nBirthday: "+t._s(t.user.attributes.birthday)+"\nGender: "+t._s(t.user.attributes.gender)+"\nLast Updated: "+t._s(t.user.attributes.updatedAt)+"\nFavourites: "+t._s(t.user.attributes.favouritesCount)+"\nRatings: "+t._s(t.user.attributes.ratingsCount)+"\nPosts: "+t._s(t.user.attributes.postsCount)+"\nComments: "+t._s(t.user.attributes.commentsCount)+"\nLikes Given: "+t._s(t.user.attributes.likesGivenCount)+"\nLikes Received: "+t._s(t.user.attributes.likesReceivedCount)+"\nReviews: "+t._s(t.user.attributes.reviewsCount)+"\nPro: "+t._s(t.user.attributes.proExpiresAt)+"\n      ")]),t._v(" "),n("img",{attrs:{src:t.user.attributes.avatar.large}}),t._v(" "),n("img",{attrs:{src:t.user.attributes.coverImage.original}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[n("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show&&!t.matches||!t.cookie?n("section",{attrs:{notice:""}},[n("div",[n("button",{attrs:{type:"button"},on:{click:function(e){t.Hide()}}},[n("span",[t._v("×")])]),t._v(" "),n("div",[n("p",{domProps:{innerHTML:t._s(t.$t("notice.content"))}})])])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("section",{attrs:{user:""}},[n("div",[n("p",[t._v(t._s(t.$t("home.user.head")))]),t._v(" "),n("p",[t._v(t._s(t.$t("home.user.body",{username:t.slugify(t.userInput)||"a user"})))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",placeholder:t.$t("home.user.placeholder")},domProps:{value:t._s(t.userInput)},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),t._v(" "),n("router-link",{attrs:{to:"/@"+t.slugify(t.userInput)}},[t._v(t._s(t.$t("home.user.action")))])],1)]),t._v(" "),n("div",{staticClass:"card-deck container"},[n("div",{staticClass:"card card-outline-primary mb-3 text-center"},[n("div",{staticClass:"card-block"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("home.anime.head")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.animeInput,expression:"animeInput"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Cowboy Bebop"},domProps:{value:t._s(t.animeInput)},on:{input:function(e){e.target.composing||(t.animeInput=e.target.value)}}}),t._v(" "),n("router-link",{staticClass:"btn btn-block",attrs:{to:"/anime/"+t.slugify(t.animeInput)}},[t._v(t._s(t.$t("home.anime.action")))])],1)]),t._v(" "),n("div",{staticClass:"card card-outline-primary mb-3 text-center"},[n("div",{staticClass:"card-block"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("home.user.head")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"wopian"},domProps:{value:t._s(t.userInput)},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}}),t._v(" "),n("router-link",{staticClass:"btn btn-block",attrs:{to:"/@"+t.slugify(t.userInput)}},[t._v(t._s(t.$t("home.user.action")))])],1)]),t._v(" "),n("div",{staticClass:"card card-outline-primary mb-3 text-center"},[n("div",{staticClass:"card-block"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("home.manga.head")))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mangaInput,expression:"mangaInput"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Shikabane Cherry"},domProps:{value:t._s(t.mangaInput)},on:{input:function(e){e.target.composing||(t.mangaInput=e.target.value)}}}),t._v(" "),n("router-link",{staticClass:"btn btn-block",attrs:{to:"/manga/"+t.slugify(t.mangaInput)}},[t._v(t._s(t.$t("home.manga.action")))])],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("h1",[t._v("\n      "+t._s(t.$t("hibari"))+"\n      "),t.development?n("span",[t._v(" Dev")]):t._e()]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("navigation.home")))]),t._v(" "),n("language-switcher")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",[n("a",{attrs:{href:"https://github.com/wopian/hibari",target:"_blank"}},[t._v("Github")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"manga"},[n("h1",[t._v("Manga")]),t._v(" "),t.loading?n("spinner"):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.manga?n("div",{staticClass:"content"},[n("set-title",{attrs:{title:t.manga.attr.canonicalTitle+" - Hibari"}}),t._v(" "),n("pre",[t._v(t._s(t.manga))])],1):t._e()],1)},staticRenderFns:[]}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(12),n(11));n(13),r.a.$mount("#app")},,,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}}],[63]);