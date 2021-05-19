!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,l)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function l(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,a=void 0,l=void 0,i=void 0,s=void 0;n&&(a=n.start.line,l=n.end.line,i=n.start.column,s=n.end.column,e+=" - "+a+":"+i);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,this.endLineNumber=l,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=i,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){e.exports=n(10).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=n(0),a=r(n(1)),l=n(4),i=n(18),s=r(n(6)),u=n(7);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=s.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),l.default(e),i.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(11)),a=r(n(12)),l=r(n(13)),i=r(n(14)),s=r(n(15)),u=r(n(16)),c=r(n(17))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return l("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var r=n(20),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6)),a=Object.create(null);function l(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){return'<div class="balloon">\n    <h2 class="balloon__header">$[properties.balloonContentPlace]</h2>\n    <a id="balloon-link" href="#" data-point="$[properties.balloonContentPoint]">$[properties.balloonContentAddress]</a>\n    <div class="balloon__body">$[properties.balloonContentComment]</div>\n    <div class="balloon__footer">$[properties.balloonContentDate]<span>$[properties.balloonContentName]</span></div>\n</div>'},useData:!0})},function(e,t,n){var r=n(2);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a,l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li>\n    <p>\n        <span class="name">'+s("function"==typeof(a=null!=(a=u(n,"name")||(null!=t?u(t,"name"):t))?a:i)?a.call(l,{name:"name",hash:{},data:o,loc:{start:{line:3,column:27},end:{line:3,column:35}}}):a)+'</span>\n        <span class="place">'+s("function"==typeof(a=null!=(a=u(n,"place")||(null!=t?u(t,"place"):t))?a:i)?a.call(l,{name:"place",hash:{},data:o,loc:{start:{line:4,column:28},end:{line:4,column:37}}}):a)+'</span>\n        <span class="time">'+s("function"==typeof(a=null!=(a=u(n,"time")||(null!=t?u(t,"time"):t))?a:i)?a.call(l,{name:"time",hash:{},data:o,loc:{start:{line:5,column:27},end:{line:5,column:35}}}):a)+'</span>\n    </p>\n    <p class="comment">\n        '+s("function"==typeof(a=null!=(a=u(n,"comment")||(null!=t?u(t,"comment"):t))?a:i)?a.call(l,{name:"comment",hash:{},data:o,loc:{start:{line:8,column:8},end:{line:8,column:19}}}):a)+"\n    </p>\n</li>"},useData:!0})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=o(n(3)),l=r(n(21)),i=r(n(1)),s=o(n(0)),u=o(n(22)),c=r(n(24));function d(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=l.default,e.Exception=i.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var l=r.createFrame(n.data);l.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:l}}return a(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var o,a=n(0),l=n(1),i=(o=l)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var n,o=t.fn,l=t.inverse,s=0,u="",c=void 0,d=void 0;function p(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,d&&(c.contextPath=d+t)),u+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var f=e.length;s<f;s++)s in e&&p(s,s,s===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var m=[],h=e[r.Symbol.iterator](),v=h.next();!v.done;v=h.next())m.push(v.value);for(f=(e=m).length;s<f;s++)p(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&p(n,s-1),n=e,s++})),void 0!==n&&p(n,s-1,!0);return 0===s&&(u=l(this)),u}))},e.exports=t.default}).call(this,n(5))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new l.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new l.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new l.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var r,o=n(19),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var l=n.partials;n.partials=r.extend({},l,t.partials);var i=e(o,a);return n.partials=l,i}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(0)},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=i.COMPILER_REVISION;if(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)return;if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var r=i.REVISION_CHANGES[n],o=i.REVISION_CHANGES[t];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new l.default("No environment passed to template");if(!e||!e.main)throw new l.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new l.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,a){a.hash&&(r=o.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,a);var i=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,i);if(null==s&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),s=a.partials[a.name](r,i)),null!=s){if(a.indent){for(var u=s.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=a.indent+u[c];s=u.join("\n")}return s}throw new l.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var a=this.programs[e],l=this.fn(e);return t||o||r||n?a=d(this,e,l,t,n,r,o):a||(a=this.programs[e]=d(this,e,l)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;a._setup(n),!n.partial&&e.useData&&(o=f(t,o));var l=void 0,i=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,o,i,l)}return e.useDepths&&(l=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=m(e.main,s,r,n.depths||[],o,i))(t,n)}return a.isTop=!0,a._setup=function(a){if(a.partial)r.protoAccessControl=a.protoAccessControl,r.helpers=a.helpers,r.partials=a.partials,r.decorators=a.decorators,r.hooks=a.hooks;else{var l=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:n},e)}))}(r,t)}))}(l,r),r.helpers=l,e.usePartial&&(r.partials=r.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=o.extend({},t.decorators,a.decorators)),r.hooks={},r.protoAccessControl=c.createProtoAccessControl(a);var i=a.allowCallsToHelperMissing||n;s.moveHelperToHooks(r,"helperMissing",i),s.moveHelperToHooks(r,"blockHelperMissing",i)}},a._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new l.default("must pass block params");if(e.useDepths&&!a)throw new l.default("must pass parent depths");return d(r,t,e[t],n,0,o,a)},a},t.wrapProgram=d,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;n.fn&&n.fn!==p&&function(){n.data=i.createFrame(n.data);var e=n.fn;a=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=i.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new l.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=p;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=n(1),l=(r=a)&&r.__esModule?r:{default:r},i=n(3),s=n(4),u=n(23),c=n(7);function d(e,t,n,r,o,a,l){function i(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=l;return!l||t==l[0]||t===e.nullContext&&null===l[0]||(i=[t].concat(l)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),i)}return(i=m(n,i,e,l,r,a)).program=t,i.depth=l?l.length:0,i.blockParams=o||0,i}function p(){return""}function f(e,t){return t&&"root"in t||((t=t?i.createFrame(t):{}).root=e),t}function m(e,t,n,r,a,l){if(e.decorator){var i={};t=e.decorator(t,i,n,r&&r[0],a,l,r),o.extend(t,i)}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(5))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r),a=n(9),l=n.n(a);const i=document.querySelector("#reviews"),s=document.querySelector(".reviews__form"),u=i.querySelector(".reviews__header"),c=document.querySelector(".reviews__content");function d(e,t,n){const r=new ymaps.Placemark(n.point,{balloonContentPlace:n.place,balloonContentComment:n.comment,balloonContentName:n.name,balloonContentDate:n.dateTime,balloonContentPoint:n.point.toString(),balloonContentAddress:n.address});e.geoObjects.add(r),t.add(r),r.events.add("click",e=>{e.preventDefault(),f(n.point)})}function p(){u.childNodes[0].textContent="-",c.innerText="",document.querySelector('.reviews__form input[name="name"]').value="",document.querySelector('.reviews__form input[name="place"]').value="",document.querySelector(".reviews__form textarea").value=""}function f(e){p();let t=v(),n="<ul>";t.forEach(t=>{JSON.stringify(t.point)===JSON.stringify(e)&&(n+=l()({name:t.name,time:t.dateTime,place:t.place,comment:t.comment}),u.childNodes[0].textContent=t.address)}),n+="</ul>",c.innerHTML=n,i.classList.remove("hidden"),s.point=e}function m(e){let t=new Date(e),n=t.getFullYear(),r=t.getUTCMonth()+1;return`${t.getUTCDate()}.${r}.${n} ${t.getHours()}:${t.getMinutes()}`}function h(e){e.preventDefault();let t={point:this.point,name:document.querySelector('.reviews__form input[name="name"]').value.trim(),place:document.querySelector('.reviews__form input[name="place"]').value.trim(),comment:document.querySelector('.reviews__form textarea[name="comment"]').value.trim(),address:document.querySelector(".reviews__header").childNodes[0].textContent.trim(),dateTime:m(Date.now())};t.name&&t.place&&t.comment?(d(this.map,this.clusterer,t),function(e){let t=[];localStorage.getItem("markers")&&(t=JSON.parse(localStorage.getItem("markers")));t.push(e),localStorage.setItem("markers",JSON.stringify(t))}(t),f(this.point)):alert("Нет данных")}function v(){if(localStorage.getItem("markers"))return JSON.parse(localStorage.getItem("markers"))}function g(){i.classList.add("hidden")}n(25);const _={center:[59.928305,30.320457],zoom:14,controls:["geolocationControl","zoomControl"]};ymaps.ready(()=>{const e=new ymaps.Map("ymaps",_),t=function(e){const t=ymaps.templateLayoutFactory.createClass(o()("$[(properties)]")),n=new ymaps.Clusterer({clusterDisableClickZoom:!0,clusterBalloonContentLayout:"cluster#balloonCarousel",clusterBalloonItemContentLayout:t,clusterBalloonContentLayoutWidth:353,clusterBalloonContentLayoutHeight:200});return e.geoObjects.add(n),n.events.add("balloonopen",g),document.addEventListener("click",t=>{if(t.target.id&&"balloon-link"===t.target.id){t.preventDefault(),e.balloon.close(),f(t.target.dataset.point.split(",").map(Number))}}),n}(e),n=document.querySelector(".reviews__form");n.map=e,n.clusterer=t,n.addEventListener("submit",h),e.events.add("click",(async function(e){const t=e.get("coords");var r=await async function(e){return(await ymaps.geocode(e)).geoObjects.get(0).getAddressLine()}(t);n.point=t,function(e,t=""){p(),u.childNodes[0].textContent=t,i.classList.remove("hidden"),s.point=e}(t,r)}));let r=v();r&&r.forEach(n=>{d(e,t,n)}),t.events.add(["mouseenter","mouseleave","mousedown"],(function(e){const t=e.get("target"),n=e.get("type");void 0!==t.getGeoObjects?("mouseenter"==n&&t.options.set("preset","islands#orangeClusterIcons"),"mousedown"!=n&&"mouseleave"!=n||t.options.set("preset","islands#blueClusterIcons")):"mouseenter"==n?t.options.set("preset","islands#orangeIcon"):t.options.set("preset","islands#blueIcon")})),document.querySelector(".reviews__close").addEventListener("click",g)})}]);