(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery;return n||o&&(void 0!==u&&u)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(u.AmpStateContext))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),i=n("lwAK"),a=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?u=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(var a=0,c=p.length;a<c;a++){var l=p[a];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?u=!1:n.add(l);else{var f=o.props[l],s=r[l]||new Set;s.has(f)?u=!1:(s.add(f),r[l]=s)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=u.default();function y(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:s,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}y.rewind=d.rewind,t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JlT8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=u.createContext();t.Provider=function(e){var t=e.count,n=void 0===t?1:t,r=e.children,a=i(o.useState((function(){for(var e=[];e.length<n;)e.push("use-flipper-"+e.length);return e})),2),l=a[0],f=a[1],p=o.useRef(0),s=o.useCallback((function(){return"use-flipper-"+p.current++}),[p]),d=o.useCallback((function(e){return f((function(t){return Array.from(new Set(t.concat([e])))}))}),[f]),y=o.useCallback((function(e){return f((function(t){var n=t.concat([]);return n.splice(n.indexOf(e),1),n}))}),[f]);return u.createElement(c.Provider,{value:{addId:d,removeId:y,nextId:s}},l.map((function(e){return u.createElement(u.Fragment,{key:e+"-fragment"},u.createElement("style",null,"\n#".concat(e," {display: none;}\n#").concat(e,":checked~div #").concat(e,"-on {display: block !important;}\n#").concat(e,":checked~div #").concat(e,"-off {display: none;}\n          ")),u.createElement("input",{type:"checkbox",id:e}))})),r)},t.useFlipper=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,t=o.useContext(c),n=t.addId,r=t.removeId,i=t.nextId,a=o.useMemo((function(){return e||i()}),[e,i]);return o.useEffect((function(){return n(a),function(){return r(a)}}),[a]),{Flipper:o.useCallback((function(e){var t=e.children;return u.createElement("label",{htmlFor:a},t)}),[a]),FlippedOn:o.useCallback((function(e){var t=e.children;return u.createElement("div",{id:a+"-on",style:{display:"none"}},t)}),[a]),FlippedOff:o.useCallback((function(e){var t=e.children;return u.createElement("div",{id:a+"-off"},t)}),[a])}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||u()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),u=n("8Kt/"),i=n.n(u),a=n("JlT8"),c=o.a.createElement;t.default=function(){var e=Object(a.useFlipper)(),t=e.Flipper,n=e.FlippedOn,r=e.FlippedOff,o=Object(a.useFlipper)(),u=o.Flipper,l=o.FlippedOn,f=o.FlippedOff,p=Object(a.useFlipper)(),s=p.Flipper,d=p.FlippedOn,y=p.FlippedOff;return c("div",null,c(i.a,null,c("title",null,"useFlipper Example"),c("link",{rel:"icon",href:"/favicon.ico"})),c("h3",null,"Simple Flipper"),c(t,null,"Button"),c(n,null,"On"),c(r,null,"Off"),c("h3",null,"Two flippers"),c(u,null,"Button 1"),"  ",c(u,null,"Button 2"),c(l,null,"On"),c(f,null,"Off"),c("h3",null,"Rendered content as a flipper"),c(s,null,c(d,null,"On"),c(y,null,"Off")))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),u=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),s=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(y,l);var p,d=(p=y,function(){var e,t=a(p);if(f()){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function y(e){var u;return r(this,y),u=d.call(this,e),s&&(t.add(o(u)),n(o(u))),u}return u(y,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(y,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),y}(p.Component)}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);