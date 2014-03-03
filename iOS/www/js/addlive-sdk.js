/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 */

/**
 * AddLive namespace. Wraps all methods, classes, functions and costs
 * provided by the AddLive SDK.
 *
 * @externs
 * @namespace
 * @summary AddLive namespace - wraps complete SDK functionality.
 */


if(window.ADL === undefined) {

  /*jshint unused:false*/
  var ADL = {};

}


/*! jQuery v1.9.1 -ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-effects,-deprecated | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,l=e.$,u={},c=[],f="1.9.1 -ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-effects,-deprecated",p=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=u.toString,y=u.hasOwnProperty,v=f.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,N=/\S+/g,w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,T=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,S=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},B=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(j(),b.ready())},j=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",B,!1),e.removeEventListener("load",B,!1)):(o.detachEvent("onreadystatechange",B),e.detachEvent("onload",B))};b.fn=b.prototype={jquery:f,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||b.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=l),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(A,"@").replace(S,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(w,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return p.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(l in r)b.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",B,!1),e.addEventListener("load",B,!1);else{o.attachEvent("onreadystatechange",B),e.attachEvent("onload",B);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}j(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var O={};function _(e){var t=O[e]={};return b.each(e.match(N)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?O[e]||_(e):b.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:f.disable())},f={add:function(){if(l){var t=l.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&f.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||f.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),b.support=function(){var t,n,r,a,s,l,u,c,f,p,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),u=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:u.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),l=o.createDocumentFragment(),l.appendChild(a),t.appendChecked=a.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(p in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+p,"t"),t[p+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=o.getElementsByTagName("body")[0];l&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",f=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=f&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==l.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=a=r=null)}),n=s=l=u=r=a=null,t}();var F=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function W(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,l="string"==typeof n,u=e.nodeType,f=u?b.cache:e,p=u?e[s]:e[s]&&s;if(p&&f[p]&&(i||f[p].data)||!l||r!==t)return p||(u?e[s]=p=c.pop()||b.guid++:p=s),f[p]||(f[p]={},u||(f[p].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?f[p]=b.extend(f[p],n):f[p].data=b.extend(f[p].data,n)),o=f[p],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),l?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function q(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,l=a?e[b.expando]:b.expando;if(s[l]){if(t&&(o=n?s[l]:s[l].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?R:b.isEmptyObject)(o))return}(n||(delete s[l].data,R(s[l])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[l]:s[l]=null)}}}b.extend({cache:{},expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!R(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return q(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return q(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),$(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?$(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:F.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function R(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,V=/\r/g,U=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Q=/^(?:checked|selected)$/i,K=b.support.getSetAttribute,G=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(N)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(N)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),l=t,u=e.match(N)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,l=e.nodeType;if(e&&3!==l&&8!==l&&2!==l)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==l||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(N);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!K&&Q.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(K?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):U.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?G&&K?null!=i:Q.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):G&&K||!Q.test(n)?e.setAttribute(!K&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},G&&K||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),K||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,f,p,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(l=v.events)||(l=v.events={}),(p=v.handle)||(p=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(p.elem,arguments)},p.elem=e),n=(n||"").match(N)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),f=b.event.special[g]||{},g=(a?f.delegateType:f.bindType)||g,f=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,f.setup&&f.setup.call(e,o,m,p)!==!1||(e.addEventListener?e.addEventListener(g,p,!1):e.attachEvent&&e.attachEvent("on"+g,p))),f.add&&(f.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(N)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=b.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;while(o--)a=p[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));l&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[u],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,l,u,c,f,p,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(u=p=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),f=b.event.special[g]||{},a||!f.trigger||f.trigger.apply(i,r)!==!1)){if(!a&&!f.noBubble&&!b.isWindow(i)){for(c=f.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),p=u;p===(i.ownerDocument||o)&&h.push(p.defaultView||p.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:f.bindType||g,s=(b._data(u,"events")||{})[n.type]&&b._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&b.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||f._default&&f._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!l||!i[g]||b.isWindow(i))){p=i[l],p&&(i[l]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,p&&(i[l]=p)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],l=h.call(arguments),u=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(u)>=0:b.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,l,u,c,f,p,d,h,g,m,y,v,x="sizzle"+-new Date,N=e.document,w={},T=0,C=0,k=it(),E=it(),A=it(),S=typeof t,D=1<<31,L=[],H=L.pop,B=L.push,j=L.slice,M=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},O="[\\x20\\t\\r\\n\\f]",_="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",F=_.replace("w","w#"),P="([*^$|!~]?=)",W="\\["+O+"*("+_+")"+O+"*(?:"+P+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+F+")|)|)"+O+"*\\]",q=":("+_+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+W.replace(3,8)+")*)|.*)\\)|)",$=RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),R=RegExp("^"+O+"*,"+O+"*"),I=RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),z=RegExp(q),X=RegExp("^"+F+"$"),V={ID:RegExp("^#("+_+")"),CLASS:RegExp("^\\.("+_+")"),NAME:RegExp("^\\[name=['\"]?("+_+")['\"]?\\]"),TAG:RegExp("^("+_.replace("w","w*")+")"),ATTR:RegExp("^"+W),PSEUDO:RegExp("^"+q),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},U=/[\x20\t\r\n\f]*[+~]/,Y=/\{\s*\[native code\]\s*\}/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Q=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,G=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{j.call(p.childNodes,0)[0].nodeType}catch(nt){j=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=f.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,l,u,p,g,m,v;if((t?t.ownerDocument||t:N)!==f&&c(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return B.apply(n,j.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&w.getByClassName&&t.getElementsByClassName)return B.apply(n,j.call(t.getElementsByClassName(a),0)),n}if(w.qsa&&!h.test(e)){if(p=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){u=pt(e),(p=t.getAttribute("id"))?g=p.replace(G,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",l=u.length;while(l--)u[l]=g+dt(u[l]);m=U.test(e)&&t.parentNode||t,v=u.join(",")}if(v)try{return B.apply(n,j.call(m.querySelectorAll(v),0)),n}catch(b){}finally{p||t.removeAttribute("id")}}}return Nt(e.replace($,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:N;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,p=n.documentElement,d=a(n),w.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),w.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),w.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),w.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",p.insertBefore(e,p.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return w.getIdNotName=!n.getElementById(x),p.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==S&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},w.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==S&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==S&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==S&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==S&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=w.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==S?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=w.getByName&&function(e,n){return typeof n.getElementsByName!==S?n.getElementsByName(name):t},i.find.CLASS=w.getByClassName&&function(e,n){return typeof n.getElementsByClassName===S||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(w.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+O+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(w.matchesSelector=rt(m=p.matchesSelector||p.mozMatchesSelector||p.webkitMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&at(function(e){w.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",q)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=p.compareDocumentPosition?function(e,t){var r;return e===t?(l=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(N,e)?-1:t===n||y(N,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],u=[t];if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||D)-(y(N,e)&&~e.sourceIndex||D);if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return lt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)u.unshift(r);while(s[i]===u[i])i++;return i?lt(s[i],u[i]):s[i]===N?-1:u[i]===N?1:0},l=!1,[0,0].sort(v),w.detectDuplicates=l,f):f},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(Z,"='$1']"),!(!w.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,f,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==f&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||w.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(l=!w.detectDuplicates,e.sort(v),l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function lt(e,t){var n=e&&t&&e.nextSibling;for(;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ut(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ft(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:V,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return V.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=pt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==S&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){f=t;while(f=f[g])if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),u=c[e]||[],d=u[0]===T&&u[1],p=u[0]===T&&u[2],f=d&&m.childNodes[d];while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[T,d,p];break}}else if(v&&(u=(t[x]||(t[x]={}))[e])&&u[0]===T)p=u[1];else while(f=++d&&f&&f[g]||(p=d=0)||h.pop())if((s?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(v&&((f[x]||(f[x]={}))[e]=[T,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace($,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ft(function(){return[0]}),last:ft(function(e,t){return[t-1]}),eq:ft(function(e,t,n){return[0>n?n+t:n]}),even:ft(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ft(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ft(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ft(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=ut(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function pt(e,t){var n,r,o,a,s,l,u,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=i.preFilter;while(s){(!n||(r=R.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace($," ")}),s=s.slice(n.length));for(a in i.filter)!(r=V[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,l).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===t.dir,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var l,u,c,f=T+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(u=c[i])&&u[0]===f){if((l=u[1])===!0||l===r)return l===!0}else if(u=c[i]=[f],u[1]=e(t,n,s)||r,u[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,l){var u,c,f,p=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,p,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=mt(y,d),r(u,[],s,l),c=u.length;while(c--)(f=u[c])&&(y[d[c]]=!(m[d[c]]=f))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(f=y[c])&&u.push(m[c]=f);i(null,y=[],u,l)}c=y.length;while(c--)(f=y[c])&&(u=i?M.call(o,f):p[c])>-1&&(o[u]=!(a[u]=f))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):B.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],l=a?1:0,c=ht(function(e){return e===t},s,!0),f=ht(function(e){return M.call(t,e)>-1},s,!0),p=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[ht(gt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[x]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return yt(l>1&&gt(p),l>1&&dt(e.slice(0,l-1)).replace($,"$1"),n,r>l&&vt(e.slice(l,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}p.push(n)}return gt(p)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],N=null!=d,w=u,C=s||a&&i.find.TAG("*",d&&l.parentNode||l),k=T+=null==w?1:Math.E;for(N&&(u=l!==f&&l,r=n);null!=(h=C[b]);b++){if(a&&h){for(g=0;m=e[g];g++)if(m(h,l,c)){p.push(h);break}N&&(T=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){for(g=0;m=t[g];g++)m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=H.call(p));y=mt(y)}B.apply(p,y),N&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(p)}return N&&(T=k,u=w),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=A[e+" "];if(!o){t||(t=pt(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=A(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function Nt(e,t,n,r){var o,a,l,u,c,f=pt(e);if(!r&&1===f.length){if(a=f[0]=f[0].slice(0),a.length>2&&"ID"===(l=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(l.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}for(o=V.needsContext.test(e)?-1:a.length-1;o>=0;o--){if(l=a[o],i.relative[u=l.type])break;if((c=i.find[u])&&(r=c(l.matches[0].replace(et,tt),U.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return B.apply(n,j.call(r,0)),n;break}}}return s(e,f)(r,t,d,n,U.test(e)),n}i.pseudos.nth=i.pseudos.eq;function wt(){}i.filters=wt.prototype=i.pseudos,i.setFilters=new wt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,lt=/^.[^:#\[\.,]*$/,ut=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(pt(this,e,!1))},filter:function(e){return this.pushStack(pt(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?ut.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function ft(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return ft(e,"nextSibling")},prev:function(e){return ft(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function pt(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(lt.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,Nt=/<|&#?\w+;/,wt=/<(?:script|style|link)/i,Tt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,St={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Dt=dt(o),Lt=Dt.appendChild(o.createElement("div"));St.optgroup=St.option,St.tbody=St.tfoot=St.colgroup=St.caption=St.thead,St.th=St.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ft(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ft(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||wt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||St[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=p.apply([],e);var i,o,a,s,l,u,c=0,f=this.length,d=this,h=f-1,g=e[0],m=b.isFunction(g);if(m||!(1>=f||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(u=b.buildFragment(e,this[0].ownerDocument,!1,this),i=u.firstChild,1===u.childNodes.length&&(u=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ft(u,"script"),Bt),a=s.length;f>c;c++)o=u,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ft(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Ht(this[c],"tbody"):this[c],o,c);if(a)for(l=s[s.length-1].ownerDocument,b.map(s,jt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(l,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(At,"")));u=i=null}return this}});function Ht(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Bt(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function jt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function Ot(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function _t(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Bt(t).text=e.text,jt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Tt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ft(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Pt(e){Tt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,l=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Lt.innerHTML=e.outerHTML,Lt.removeChild(o=Lt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&_t(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Ot(i,r[a]);else Ot(e,o);return r=Ft(o,"script"),r.length>0&&Mt(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,f=e.length,p=dt(t),d=[],h=0;for(;f>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(Nt.test(o)){s=s||p.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=St[l]||St._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=p.lastChild}else d.push(t.createTextNode(o));s&&p.removeChild(s),b.support.appendChecked||b.grep(Ft(d,"input"),Pt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ft(p.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,p},cleanData:function(e,t){var n,r,o,a,s=0,l=b.expando,u=b.cache,f=b.support.deleteExpando,p=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)p[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);u[o]&&(delete u[o],f?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,c.push(o))}}});var Wt,qt,$t,Rt=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Vt=/^margin/,Ut=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Qt={BODY:"block"},Kt={position:"absolute",visibility:"hidden",display:"block"},Gt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=qt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=$t(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=b.camelCase(n),u=e.style;if(n=b.cssProps[l]||(b.cssProps[l]=tn(u,l)),s=b.cssHooks[n]||b.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[l]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=b.camelCase(n);return n=b.cssProps[l]||(b.cssProps[l]=tn(e.style,l)),s=b.cssHooks[n]||b.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=$t(e,n,i)),"normal"===a&&n in Gt&&(a=Gt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(qt=function(t){return e.getComputedStyle(t,null)},$t=function(e,n,r){var i,o,a,s=r||qt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||b.contains(e.ownerDocument,e)||(l=b.style(e,n)),Yt.test(l)&&Vt.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):o.documentElement.currentStyle&&(qt=function(e){return e.currentStyle},$t=function(e,n,r){var i,o,a,s=r||qt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=$t(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=o,n=Qt[e];return n||(n=un(e,t),"none"!==n&&n||(Wt=(Wt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Wt[0].contentWindow||Wt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Wt.detach()),Qt[e]=n),n}function un(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Kt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&qt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace(Rt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Rt.test(o)?o.replace(Rt,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},$t,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=$t(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Vt.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,fn=/\[\]$/,pn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Tt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(pn,"\r\n")}}):{name:t.name,value:n.replace(pn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||fn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)},b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=mn(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),l=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,u={},c={},f,p;l?(c=i.position(),f=c.top,p=c.left):(f=parseFloat(a)||0,p=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+f),null!=t.left&&(u.left=t.left-o.left+p),"using"in t?t.using.call(e,u):i.css(u)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=mn(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function mn(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.ADL=e.ADL||{},e.ADL.jQuery=e.ADL.$=b;})(window);

/**
 * @license
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 28-05-2012 14:39
 */

(function () {
  'use strict';

  /**
   * @const
   * @private
   * @type {string}
   */
  ADL._UPDATE_DESCRIPTOR_NAME = 'update';


  /**
   *
   * @type {String}
   * @private
   */
  ADL._MIC_CONFIG_KEY = 'adl-mic';

  /**
   *
   * @type {String}
   * @private
   */
  ADL._SPK_CONFIG_KEY = 'adl-spk';

  /**
   *
   * @type {String}
   * @private
   */
  ADL._CAM_CONFIG_KEY = 'adl-cam';

  /**
   * @summary Audio media type tag.
   *
   * @since 1.0.0.0
   * @deprecated since 1.15.0.5 use CDO.MediaType.AUDIO
   * @see ADL.AddLiveService#getProperty
   * @see ADL.AddLiveService#setProperty
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   * @see ADL.MediaType
   * @const
   * @type {string}
   */
  ADL.MEDIA_TYPE_AUDIO = 'audio';


  /**
   * @summary Video media type tag.
   *
   * @since 1.0.0.0
   * @deprecated since 1.15.0.5 use CDO.MediaType.VIDEO
   * @see ADL.AddLiveService#getProperty
   * @see ADL.AddLiveService#setProperty
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   * @see ADL.MediaType
   * @const
   * @type {string}
   */
  ADL.MEDIA_TYPE_VIDEO = 'video';

  /**
   * @summary Screen media type tag.
   *
   * @since 1.0.0.0
   * @deprecated since 1.15.0.5 use CDO.MediaType.SCREEN
   * @see ADL.AddLiveService#getProperty
   * @see ADL.AddLiveService#setProperty
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   * @see ADL.MediaType
   * @const
   * @type {string}
   */
  ADL.MEDIA_TYPE_SCREEN = 'screen';

  /**
   * Enumeration for all possible media connection types. The AddLive SDK uses
   * several media protocols - from those offering best quality (UDP, P2P mode)
   * to the best effort one (HTTPS fallback, including proxies support).
   * The ConnectionType enumeration is used with
   * {@link ADL.AddLiveServiceListener#onMediaConnTypeChanged}
   * to report which protocol is used by particular media type and particular
   * connection. It is especially useful to handle case when connection uses
   * the TCP protocol, as user may experience issues with quality.
   *
   * @summary Enumerates all possible media connection types.
   * @since 1.15.0.5
   * @const
   * @enum {string}
   * @see ADL.AddLiveServiceListener#onMediaConnTypeChanged
   * @see ADL.MediaConnTypeChangedEvent
   */
  ADL.ConnectionType = {

    /**
     * Indicates that the media transport is not connected at all.
     *
     * @const
     */
    NOT_CONNECTED:'MEDIA_TRANSPORT_TYPE_NOT_CONNECTED',

    /**
     * Media stream is sent/received using RTP/UDP, with help of relay server.
     *
     * @const
     */
    UDP_RELAY:'MEDIA_TRANSPORT_TYPE_UDP_RELAY',

    /**
     *  Media stream is sent/received using RTP/UDP, directly to and from remote
     *  participant.
     *
     *  @const
     */
    UDP_P2P:'MEDIA_TRANSPORT_TYPE_UDP_P2P',

    /**
     * Media stream is sent/received using RTP/TCP, with help of relay server.
     *
     * @const
     */
    TCP_RELAY:'MEDIA_TRANSPORT_TYPE_TCP_RELAY'
  };

  /**
   * Enumeration for all possible media types. This enumeration is used whenever
   * there is a need to specify a media type context of an operation - when
   * publishing or stopping publishing media of particular type
   * ({@link ADL.AddLiveService#publish} or @{link ADL.AddLiveService#unpublish})
   * or when SDK reports events specific to a media type
   * ({@link ADL.MediaStatsEvent}).
   *
   * @summary Enumerates all possible media types.
   * @since 1.15.0.5
   * @const
   * @enum {string}
   * @see ADL.AddLiveService#getProperty
   * @see ADL.AddLiveService#setProperty
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   */
  ADL.MediaType = {

    /**
     * Audio media type tag.
     *
     * @const
     */
    AUDIO:'audio',


    /**
     * Video media type tag.
     *
     * @const
     */
    VIDEO:'video',

    /**
     * Screen media type tag.
     *
     * @const
     */
    SCREEN:'screen'
  };

  /**
   *
   * @private
   */
  ADL.MediaType._fromInt = function (intVal) {
    intVal = parseInt(intVal, 10);
    switch(intVal) {
      case 0:
        return ADL.MediaType.AUDIO;
      case 1:
        return ADL.MediaType.VIDEO;
      case 2:
        return ADL.MediaType.SCREEN;
      default:
        return '';
    }
  };


  /**
   * Enumeration containing all possible scaling filters that can be used with
   * {@link ADL.renderSink}.
   *
   * @summary Enumerates all possible video scaling filters.
   * @since 1.16.0.5
   * @see ADL.renderSink
   * @enum {string}
   */
  ADL.VideoScalingFilter = {

    /**
     * Fast, bilinear scaling algorithm. It is the default filter used by the
     * {@link ADL.renderSink} function that works well with casual video feed
     * rendering
     */
    FAST_BILINEAR:'fast_bilinear',

    /**
     * High quality bicubic scaling algorithm. It is especially useful when
     * rendering the screen sharing feed.
     */
    BICUBIC:'bicubic'

  };

//  TODO add some comments about scaling and cropping
//  TODO refactor it, so it uses only an object with configuration
  /**
   * Renders a video sink with given configuration.
   *
   * #### About sinks and renderers
   *
   * With AddLive SDK, the video sink represents a source of raw video frames -
   * e.g. local preview feed or feed constructed from decoding remote video
   * stream. Each video sink has a unique id, which then can be used to render
   * it, using the ADL.renderSink method. This method, using a video sink id
   * and a container id, creates a rendering widget that fills the container
   * completely (read: {width:100%;height:100%}). Also, please note that each
   * video sink may have multiple renderers. Internally, a renderer is actually
   * just an html <object> tag.
   *
   * #### Configuring a renderer
   *
   * In spite of the required and quite obvious parameters (sinkId and
   * containerId) the renderSink function takes a whole bunch of additional
   * properties, allowing one to fine tune the rendering.
   *
   * The fullSize boolean flag, defines whether the rendering widget should
   * use all the space offered by the container. It is true by default and it
   * should not be changed unless you plan to style the renderer using external
   * CSS (to add e.g. padding, border etc.).
   *
   * The document property allows one to specify different context document
   * in which the renderer should be created. This is especially useful when
   * your application would like to render particular feed using another
   * browser window, popped out by the base one.
   *
   * The mirror property is pretty self-explanatory. If true, the feed will be
   * mirrored before drawing. It is useful when rendering local preview video
   * feed as for casual user it is more pleasant to see self as in a mirror.
   *
   * The filterType property allows one to configure the scaling filter. You can
   * use {@link ADL.VideoScalingFilter} enumeration to select which filter
   * should be used. In most cases, the default value will suffice.
   *
   * Finally, the windowless property specifies how the <object> tag should
   * be embedded in the host site. In general, native browser plug-ins can
   * have 2 rendering mode - windowless or windowed. With windowless rendering,
   * renderer receives the handle for page window and a rectangle defining area
   * where it can render the content. With windowed rendering, browser creates
   * a separate window, embeds it on the page and allows renderer to use all
   * it's space for the draw. From application developer point of view, there
   * are just 2 important aspects. Windowed rendering is more efficient but
   * it is impossible to put any content on top of it (z-index CSS property does
   * not apply here, as drawing happens completely outside of the page context).
   * On the other side, windowless drawing has some performance hit (tens
   * percent of a CPU overhead) but allows to display additional content on top
   * of the renderer. Please note that the windowless property applies only to
   * Microsoft Windows operating system, as on OS X rendering works always
   * similar to the windowless mode (although without the performance hit).
   *
   * @example
   * function onLocalPreviewStarted(sinkId) {
   *   ADL.renderSink(
   *     {
   *       containerId: 'localPreviewRenderer',
   *       sinkId: sinkId,
   *       mirror:true
   *     });
   * }
   *
   * @example
   * function onRemoteUserJoined(sinkId) {
   *   ADL.renderSink(
   *     {
   *       containerId: 'remotePeerRenderer',
   *       sinkId: sinkId,
   *       windowless:false
   *     });
   * }
   *
   * @summary Renders a video sink.
   * @since 1.15.0.0
   * @see ADL.VideoScalingFilter
   * @see ADL.AddLiveService#startLocalVideo
   * @see ADL.AddLiveServiceListener#onUserEvent
   * @see ADL.AddLiveServiceListener#onMediaStreamEvent
   * @see ADL.UserStateChangedEvent
   * @param {string|Object} sinkIdOrDescription
   *          Id of sink to render or whole rendering configuration if given as
   *          an object. The object configuration must contain __sinkId__ and
   *          __containerId__ properties. Rest of the parameters expected by
   *          the renderSink method are optional (fullSize, document, mirror,
   *          filterType, windowless).
   * @param {string} [containerId]
   *          Id of DOM node in which the renderer should be placed. Required if
   *          sinkId is given explicitly
   * @param {boolean} [fullSize=true]
   *          Flag defining whether the renderer should take 100% of container
   *          dimensions
   * @param {Document} [document=window.document]
   *          Document in which the renderer should be added. Useful when
   *          injecting the renderer in e.g. popped out window.
   * @param {boolean} [mirror=false]
   *          Flag defining whether the rendered stream should be mirrored or
   *          not.
   * @param {string} [filterType='fast_bilinear']
   *          Filter to be used when scaling the video feed to match the
   *          renderer dimensions.
   * @param {boolean} [windowless=true]
   *          Boolean flag defining whether the renderer should work in windowed
   *          (windowless == false) or windowless mode (windowless == true).
   */
  ADL.renderSink = function (sinkIdOrDescription, containerId, fullSize, document, mirror, filterType, windowless) {
    var sinkId;
    if (arguments.length === 1) {
      //noinspection JSUnresolvedVariable
      sinkId = sinkIdOrDescription.sinkId;
      //noinspection JSUnresolvedVariable
      containerId = sinkIdOrDescription.containerId;
      //noinspection JSUnresolvedVariable
      fullSize = sinkIdOrDescription.fullSize;
      //noinspection JSUnresolvedVariable
      document = sinkIdOrDescription.document;
      //noinspection JSUnresolvedVariable
      mirror = sinkIdOrDescription.mirror;
      //noinspection JSUnresolvedVariable
      filterType = sinkIdOrDescription.filterType;
      //noinspection JSUnresolvedVariable
      windowless = sinkIdOrDescription.windowless;
    } else {
      sinkId = sinkIdOrDescription;
    }
    if (fullSize === undefined) {
      fullSize = true;
    }

    if (document === undefined) {
      document = window.document;
    }
    if (mirror === undefined) {
      mirror = false;
    }
    if (filterType === undefined) {
      filterType = 'fast_bilinear';
    }
    if (windowless === undefined) {
      windowless = true;
    }
    ADL.Log.d('Trying to render feed from sink: ' + sinkId + '. Will use ' +
        containerId + ' box as a container. Additional options: custom doc: ' +
        document + ', fullSize: ' + fullSize + ', windowless: ' + windowless +
        ', scaling filter: ' + filterType);
    var container = document.getElementById(containerId);
    if (!container) {
      ADL.Log.w('Can\'t render as the container with given ID was not found ' +
          'in DOM');
      throw new ADL.AddLiveException(
          'Invalid container ID, cannot find DOM node with given id.',
          ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT
      );
    }
    //noinspection InnerHTMLJS
    container.innerHTML = '';
    //noinspection InnerHTMLJS,StringLiteralBreaksHTMLJS
    container.innerHTML = '<object type="application/x-addliveplugin">' +
        '<param  name="vcamid" value="' + sinkId + '"/>' +
        '<param  name="serviceid" value="' + ADL._service.nativeService.serviceid + '"/>' +
        '<param  name="mirror" value="' + (mirror ? 'true' : 'false') + '"/>' +
        '<param  name="filtertype" value="' + filterType + '"/>' +
        '<param  name="windowless" value="' + (windowless ? 'true' : 'false') + '"/>' +
        '</object>';
    if (container && container.children && container.children[0]) {
      var objectNode = getObjectNode(container);
      if (!objectNode.nodeName) {
        objectNode.nodeName = 'object';
      }
      if (fullSize) {
        objectNode.style.width = '100%';
        objectNode.style.height = '100%';
      }
      objectNode.style.background = 'black';
    }
    ADL.Log.d('Renderer created');
  };

  function getObjectNode(container) {
    return container.children[0];
  }

  /**
   * Exception class thrown by the API.
   * @summary Exception class thrown by the API.
   * @since 1.15.0.0
   * @param {string} message
   *          Error message
   * @param {Number=} code
   *          Error code
   * @constructor
   */
  ADL.AddLiveException = function (message, code) {

    /**
     * Type of this exception.
     * @const
     * @type {String}
     */
    this.name = 'AddLiveException';

    /**
     * Human-readable error message.
     * @type {String}
     */
    this.message = message;

    /**
     * Error code identifying the problem.
     * @see ADL.ErrorCodes
     * @type {Number}
     */
    this.code = code;
  };

  /**
   * Base class for all AddLive events. Defines functionality common amongst all
   * event classes used by the AddLive SDK.
   *
   * @summary Base class for all AddLive events.
   * @since 2.0.0
   * @constructor
   */
  ADL.AddLiveEvent = function () {
  };

  ADL.AddLiveEvent.prototype = {

    /**
     * If this method is called, the default action of the event will not be
     * triggered. This is useful only in case of unhandled errors that does
     * have default error handlers provided by the AddLive SDK.
     *
     * @summary Prevents calling of a default handler for particular error event.
     * @since 2.0.0
     */
    preventDefault:function () {
      this._isDefaultPrevented = true;
    },

    /**
     * Returns whether event.preventDefault() was ever called on this event
     * object.
     * @summary Returns whether event.preventDefault() was ever called on this
     *          event object.
     * @since 2.0.0
     * @returns {boolean}
     */
    isDefaultPrevented:function () {
      return this._isDefaultPrevented;
    },

    /**
     * @private
     */
    _isDefaultPrevented:false
  };

  /*
   * =============================================================================
   * Private methods
   * =============================================================================
   */

  /**
   *
   * @param destination
   * @param source
   * @returns {*}
   * @private
   */
  ADL._extend = function (destination, source) {
    for (var k in source.prototype) {
      /*jshint forin:false*/
      //noinspection JSUnfilteredForInLoop
      destination.prototype[k] = source.prototype[k];
    }
    return destination;

  };

  /**
   *
   * @return {string}
   * @private
   */
  ADL._getUpdateDescriptorSuffix = function () {
    var suffix = ADL._getPlatformSuffix();
    if (suffix) {
      return '.' + suffix;
    } else {
      throw new ADL.AddLiveException(
          'Cannot update/install - platform unsupported',
          ADL.ErrorCodes.Logic.PLATFORM_UNSUPPORTED);
    }
  };

  ADL._getPlatformSuffix = function () {
    var ua = window.navigator.userAgent;
    //noinspection JSHint
    if (/MSIE.*Win64; x64/.test(ua)) {
      throw new ADL.AddLiveException(
          'Internet Explorer in \"64-bit\" or \"No Add-ons\" modes is not supported, please run the plain mode',
          ADL.ErrorCodes.Logic.PLATFORM_UNSUPPORTED);
    }
    if (/Intel Mac OS X 10[._]5/.test(ua)) {
      throw new ADL.AddLiveException(
          'OS X 10.5 is not supported, please update to 10.6',
          ADL.ErrorCodes.Logic.PLATFORM_UNSUPPORTED);
    }
    if (/Windows/.test(ua)) {
      return 'win';
    } else if (/Intel Mac OS X 10[._][7-8]/.test(ua)) {
      return 'mac';
    } else if (/Intel Mac OS X 10[._]6/.test(ua)) {
      return 'mac_10.6';
    }
    return false;
  };

  /**
   * Not-a-function.
   * @private
   */
  ADL._nop = function () {
  };

  /**
   * Utility function to validate whether the given instance has all methods
   * of desired interface implemented.
   *
   *
   * @param IfaceClass
   * @param instance
   * @param missingMethods
   * @return {Boolean}
   * @private
   */
  ADL._validateInterface = function (IfaceClass, instance, missingMethods) {
//    In case the missingMethods aren't defined, create an empty list
    if (!missingMethods) {
      missingMethods = [];
    }

//    Instantiate the interface to be validated
    var sampleInstance = new IfaceClass();

//    Iterate through it's method to check it's presence in instance to be
//    validated
    for (var method in sampleInstance) {
      //noinspection JSUnfilteredForInLoop

      if (typeof sampleInstance[method] === 'function' &&
          typeof instance[method] !== 'function') {
//          If it's not found, add the missing methods
        //noinspection JSUnfilteredForInLoop
        missingMethods.push(method);
      }
    }
//    True if there aren't any missing methods, false otherwise
    return !missingMethods.length;
  };

  /**
   *
   * @type {Boolean}
   * @private
   */
  ADL._isOwnProperty = function (obj, member) {
    return Object.prototype.hasOwnProperty.call(obj, member);
  };

  ADL._mergeObj = function (dest, src) {
    for (var k in src) {
      if (Object.prototype.hasOwnProperty.call(src, k)) {
        dest[k] = src[k];
      }
    }
  };

}());
/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 31.01.13 13:16
 */


(function (w) {
  'use strict';

  /**
   * Enumeration listing all possible levels of AddLive log entries, passed to
   * the log handler, registered using ADL.initLogging
   *
   * @summary Enumerates all possible log levels.
   * @since 1.16.0.0
   * @see ADL.initLogging
   * @enum {string}
   */
  ADL.LogLevel = {

    /**
     * Debug log level - additional log messages helping in debugging the
     * application. Messages of this level are filtered off if the enableDebug
     * argument given to the ADL.initLogging is false.
     */
    DEBUG:'DEBUG',

    /**
     * Info log level - used by pure informational log messages, including
     * every method call and events peering events.
     */
    INFO:'INFO',

    /**
     * Warning log level all non fatal problems are reported with this level.
     * Problem here is an event which doesn't affect the platform functionality
     * but may affect its performance.
     */
    WARN:'WARN',

    /**
     * Error log level. Used when reporting all errors encountered by the
     * platform.
     */
    ERROR:'ERROR'
  };


  /**
   * @private
   * @type {Object}
   */
  var Log = {

    /**
     *
     * @param {string} msg
     */
    d:function () {

    },

    /**
     *
     * @param {string} msg
     */
    i:function (msg) {
      Log._tail.push(_formatMsg(ADL.LogLevel.INFO, msg));
      Log._i(msg);
    },

    /**
     *
     * @param {string} msg
     */
    w:function (msg) {
      Log._tail.push(_formatMsg(ADL.LogLevel.WARN, msg));
      Log._w(msg);
    },

    /**
     *
     * @param {string} msg
     */
    e:function (msg) {
      Log._tail.push(_formatMsg(ADL.LogLevel.ERROR, msg));
      Log._e(msg);
    },

    _d:function () {
    },
    _i:function () {
    },
    _w:function () {
    },
    _e:function () {
    },
    _tail:[],

    /**
     * Returns JS logs tail.
     */
    getTail:function () {
      var tailStr = '';
      for (var i = 0; i < this._tail.length; i++) {
        tailStr += this._tail[i] + '\n';
      }
      tailStr = tailStr.replace(/\[log\]/, '[log ]');
      return tailStr;
    }
  };

  /**
   * Initializes default browser-specific logging for the AddLive API.
   *
   * It will try to do a feature detection, to check what are the browsers
   * capabilities, and then will use console object with log/debug, warning, error
   * methods to print ADL logs.
   *
   * @summary Initializes default browser-specific logging for the AddLive API.
   * @since 1.0.0
   * @see ADL.initLogging
   * @param {boolean} enableDebug
   *          Flag defining whether debugging should be enabled or not.
   */
  ADL.initStdLogging = function (enableDebug) {

    if (enableDebug) {
      _enableDebug();
      _setupStdLogLevel('d', 'log');
    }
    _setupStdLogLevel('i', 'log');
    _setupStdLogLevel('w', 'warn');
    _setupStdLogLevel('e', 'error');
    Log.d('Logging initialized');
  };

  /**
   * Initializes logging using user-provided log handler.
   *
   * @summary Initializes logging using user-provided log handler.
   * @since 1.0.0
   * @see ADL.initStdLogging
   * @see ADL.LogLevel
   * @example
   * function initLogging() {
   *   ADL.initLogging(function (lev, msg) {
   *     switch (lev) {
   *       case ADL.LogLevel.DEBUG:
   *         console.debug('[ADL] ' + msg);
   *         break;
   *       case ADL.LogLevel.INFO:
   *         console.debug('[ADL] ' + msg);
   *         break;
   *       case ADL.LogLevel.WARN:
   *         console.warn('[ADL] ' + msg);
   *         break;
   *       case ADL.LogLevel.ERROR:
   *         console.error('[ADL] ' + msg);
   *         break;
   *       default:
   *         console.warn('[ADL] Got unsupported log level: ' + lev + '. Message: ' +
   *                        msg);
   *     }
   *   }, false);
   * };
   *
   *
   * @param {Function} logHandler
   *           Function that will receive log entries. It should take two params,
   *           {string} level ('DEBUG', 'WARN', 'ERROR') and {string} message.
   * @param {boolean} [enableDebug=false]
   *          Flag defining whether debugging should be enabled or not.
   */
  ADL.initLogging = function (logHandler, enableDebug) {

    if (enableDebug) {
      _enableDebug();
      Log._d = _wrapLogHandler(logHandler, ADL.LogLevel.DEBUG);
    }
    Log._i = _wrapLogHandler(logHandler, ADL.LogLevel.INFO);
    Log._w = _wrapLogHandler(logHandler, ADL.LogLevel.WARN);
    Log._e = _wrapLogHandler(logHandler, ADL.LogLevel.ERROR);
    Log.i('Logging initialized');
  };

  function _enableDebug() {
    ADL.Log.d = function (msg) {
      Log._tail.push(_formatMsg(ADL.LogLevel.DEBUG, msg));
      Log._d(msg);
    };
  }


  /**
   * Wraps user-provided log handler to pass messages with given scope string.
   *
   * @param {Function} handler
   *           Handler to be wrapped.
   * @param {string} level
   *           Logging level to pass.
   * @return {Function}
   *           Resulting, wrapped log handler.
   * @private
   */
  function _wrapLogHandler(handler, level) {
    return function (msg) {
      try {
        handler(level, msg);
      } catch (e) {
        ADL.Log.e('Error in user defined log handler.');
      }
    };
  }

  function _getDateMemberStr(date, member) {
    var value = date[member]();
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }

  function _formatMsg(level, msg) {
    var date = new Date();
    return _getDateMemberStr(date, 'getHours') + ':' +
        _getDateMemberStr(date, 'getMinutes') + ':' +
        _getDateMemberStr(date, 'getSeconds') +
        ' [' + level + '] ' + msg;
  }

  /**
   * @private
   */
  function _setupStdLogLevel(handlerName, consoleName) {
//  Check whether there is the console object available.
    try {
      if (w.console) {
//  Check for particular method.
        if (w.console[consoleName]) {
          Log['_' + handlerName] = function (msg) {
            w.console[consoleName](msg);
          };
          return true;
        }
      }
    }
    catch (e) {
      //noinspection JSUnusedLocalSymbols
    }
    return false;
  }

  /**
   * @namespace
   * @type {Object}
   * @private
   */
  ADL.Log = Log;
}(window));/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * Contains implementation of the platform initialization functionality.
 *
 * @fileoverview
 * @author Tadeusz Kozak
 * @date 27-06-2012 13:45
 */
(function () {
  'use strict';

  // Imports
  //noinspection JSAccessibilityCheck
  var Log = ADL.Log;

  var _DEFAULT_PLATFORM_INIT_OPTIONS = {
        pluginPollFrequency:1000,
        pluginHeartBeatInterval:1000,
        reloadOnCrash:true,
        initDevices:true,
        skipUpdate:false,
        updateDescriptorRoot:'',
        installationDescriptorRoot:'',
        trackingEndpoint:'',
        configUrl:ADL._CONFIG_URL,
        bugReportingEnabled:true,
        streamerEndpointResolver:ADL._STREAMER_ENDPOINT_RESOLVER

      },

      /**
       *
       * @type {Number}
       * @private
       */
          _UPDATE_BEGIN_PROGRESS = 5,

      /**
       *
       * @type {Number}
       * @private
       */
          _UPDATE_END_PROGRESS = 70,

      /**
       * @private
       */
          _CREATE_SERVICE_BEGIN_PROGRESS = 71,

      /**
       * @private
       */
          _CREATE_SERVICE_END_PROGRESS = 80,

      /**
       * @private
       */
          _INIT_COMPLETE_PROGRESS = 100,

      /**
       * Timeout after which the update descriptor fetching will fail.
       *
       * @private
       */
          _UPDATE_DESCRIPTOR_FETCH_TIMEOUT = 10000,

      /**
       * @const
       * @private
       * @type {string}
       */
          UPDATE_DESCRIPTOR_CONTAINER_ID = 'updateDescrContainer',

      /**
       *
       * List of responders waiting for installer ULRs.
       * @private
       * @type {ADL.Responder}
       */
          installerURLResponder,

      /**
       * @private
       * @type {Boolean}
       */
          waitingForUpdateDescriptor = false,

      /**
       * Map of devices installed on user's OS.
       *
       * @private
       */
          devices = {};


  /**
   * Initializes the AddLive Platform. This function is the main entry point to
   * the AddLive Web SDK. The initialization process is completely asynchronous
   * with all the state changes notifications being dispatched via the the
   * listener provided as the first argument.
   * See {@link ADL.PlatformInitListener}.
   *
   * #### Initialization Steps
   *
   * The common flow for the platform initialization consists of following
   * steps:
   *
   * - creation of a &lt;div&gt; node that will be used as a plug-in container
   *   the div created will have a random id and will be located inside the
   *   &lt;body&gt; with absolute position , outside of the visible area
   *
   * - check whether the plug-in is installed
   *
   * - if the plug-in is not installed, SDK will download the update descriptor,
   *   parse it and get an appropriate installer URL (depending on the OS and
   *   application id for custom installers). Finally it will notify the host
   *   application that plug-in installation is required. After the notification
   *   SDK will poll for plug-in availability and will continue with the
   *   initialization automatically, when the plug-in become available. This
   *   state is being notified with the {@link ADL.InitStateChangedEvent#state}
   *   property set to {@link ADL.InitState.INSTALLATION_REQUIRED} and
   *   {@link ADL.InitStateChangedEvent#installerURL} property defined. Once the
   *   installation is complete and the SDK detects the plug-in, host
   *   application will be notified of state changed with state set to
   *   {@link ADL.InitState.INSTALLATION_COMPLETE}
   *
   * - attempt to update the plug-in (skipped if the plug-in was just
   *   installed). This step will be reported using the
   *   {@link ADL.InitState.UPDATE_BEGIN}. When creating your application, you
   *   should also be aware of the fact that the update may fail or may require
   *   manual update. This case will be reported using the
   *   {@link ADL.InitState.NEEDS_MANUAL_UPDATE}. Additionally it is possible
   *   that to complete the self-update process, browser restart is required.
   *   Such a situation will be reported using the
   *   {@link ADL.InitState.BROWSER_RESTART_REQUIRED} state
   *   Finally, please note that the self update process can be skipped by
   *   setting <strong>skipUpdate</strong> property of the init options to
   *   <strong>true</strong>.
   *
   * - creation of the AddLive service object. Please note that if this step
   *   fails for any reason, it will be reported using the state set to
   *   {@link ADL.InitState.ERROR} with {@link ADL.InitStateChangedEvent#errCode}
   *   and {@link ADL.InitStateChangedEvent#errMessage} members describing the
   *   cause of an error.
   *
   * - setting the application id to be used when connecting. See
   *   {@link ADL.AddLiveService.setApplicationId}.
   *
   * - initialization of the media devices. At this step, SDK will try to get
   *   previously used configuration from the localStorage and set those
   *   devices. If it's the first run or any of the previously used devices are
   *   unavailable, it will try to use the default devices. This step is
   *   reported using the InitStateChangedEvent with state set to
   *   {@link ADL.InitState.DEVICES_INIT_BEGIN}. The status of the devices
   *   initialization (whether it succeeded or not) will be dispatched along
   *   with platform initialization complete event, using 3 boolean properties:
   *   {@link ADL.InitStateChangedEvent#audioCaptureDevFunctional},
   *   {@link ADL.InitStateChangedEvent#audioOutputDevFunctional},
   *   {@link ADL.InitStateChangedEvent#videoCaptureDevFunctional}
   *
   * - initialization of the {@link ADL.CrashHandler}, {@link ADL.BugReporting}
   *   (private) and {@link ADL.StreamerResolver} (private) JavaScript modules.
   *
   * Once the initialization is complete, the SDK will dispatch the
   * {@link ADL.InitStateChangedEvent} event with state set to
   * {@link ADL.InitState.INITIALIZED}. At this point, the AddLive SDK is fully
   * functional and the application can freely use the
   * {@link ADL.AddLiveService} interface obtained using the
   * {@link ADL.getService} function.
   *
   * #### Bug reporting
   *
   * Starting from version <strong>2.0.0</strong> the AddLive SDK monitors own
   * health and sends AERs (Automatic Error Reports) in case of any issues.
   * Platform will send an AER in case of:
   *
   * - plug-in crash
   * - any JavaScript error within the SDK code
   * - update errors
   * - initialization
   * - any error result from API calls that wasn't caused by platform misuse nor
   *   indicates invalid state of environment (e.g. camera in use)
   *
   * If by any chance this functionality should be disabled, it can be achieved
   * by setting the <strong>bugReportingEnabled</strong> to
   * <strong>false</strong>.
   *
   * #### Customizing the initialization process
   *
   * The platform initialization process can be customized using the options
   * object passed as 2nd argument to the initPlatform function. The additional
   * customization is not required in most cases, as using the sane defaults
   * will suffice.
   *
   * Most of the options' properties are pretty self explanatory and the
   * description in the Properties section should suffice, there are few of
   * those that require some comments - <strong>updateDescriptorRoot</strong>,
   * <strong>installationDescriptorRoot</strong>,
   * <strong>streamerEndpointResolver</strong>,
   * <strong>bugReportingEndpoint</strong>. Those properties define the location
   * (complete or partial URLs) of external resources that are used to further
   * configure the SDK, depending on the release channel (beta, stable). In
   * certain situations (especially restrictive network configuration) it may
   * be required to overwrite those properties to set the custom management
   * environment for the SDK. In any case, if you think you may need to
   * overwrite those properties, please contact first our support.
   *
   * @summary Initializes the AddLive Platform.
   * @since 1.16.0.0
   * @see ADL.PlatformInitListener
   * @see ADL.InitStateChangedEvent
   * @see ADL.InitProgressChangedEvent
   * @see ADL.getService
   *
   * @param {ADL.PlatformInitListener} listener
   *          Listener that will receive the init state change notifications.
   * @param {Object} [options]
   *          Client id or fine fine configuration options (includes client id).
   * @param {Number} [options.applicationId]
   *          Id of AddLive application. Affects use of custom installation
   *          binaries and streamer URLs employed. Defines global application
   *          context. Although this property is optional, it won't be possible
   *          to establish any connections to the streaming server without
   *          defining it.
   * @param {Number} [options.pluginPollFrequency=1000]
   *          Defines how frequently the SDK should check the plug-in
   *          availability after dispatching the
   *          ADL.InitState.INSTALLATION_REQUIRED state changed notification.
   * @param {Boolean} [options.initDevices=true]
   *          Flag defining whether the devices initialization should be
   *          performed or not. Defaults to true.
   * @param {Boolean} [options.skipUpdate=false]
   *          Flag defining whether the self-update process should be skipped
   *          or not.
   * @param {Number} [options.pluginHeartBeatInterval=1000]
   *          Defines how frequently the SDK should check whether the plug-in
   *          is still alive. This property is used by the crash monitoring
   *          functionality. See {@link ADL.CrashHandler}.
   * @param {Boolean} [options.reloadOnCrash=true]
   *          Boolean flag defining whether the JavaScript SDK should reload
   *          the page upon plug-in failure.
   *          See {@link ADL.CrashHandler.registerCrashListener}
   * @param {string} [options.updateDescriptorRoot]
   *          Custom root for update descriptors used with self updating.
   *          Change only if you know what you're doing.
   * @param {string} [options.installationDescriptorRoot]
   *          Custom root for update descriptors used with installation.
   *          Change only if you know what you're doing.
   * @param {string} [options.streamerEndpointResolver]
   *          Custom URL for service that can resolve streamer IP using
   *          scope id and application Id. Change only if you know what you're
   *          doing. <strong>IMPORTANT!</strong> Please note that in the
   *          previous version of the SDK, this property was provided by
   *          external, configuration file specified via the
   *          <strong>configUrl</strong> property. Starting from this version,
   *          the <strong>configUrl</strong> is not used by the SDK.
   * @param {Boolean} [options.bugReportingEnabled=true]
   *          Boolean flag defining whether AER system should be enabled or not.
   * @param {string} [options.bugReportingEndpoint]
   *          Custom URL for service that process bug reports dispatched by the
   *          AddLive SDK. Change only if you know what you're doing.
   */
  ADL.initPlatform = function (listener, options) {
    //noinspection JSUnresolvedFunction
    Log.i('==================================================================');
    Log.i('Initializing the AddLive JS SDK v' + ADL.VERSION + ' ' +
        ADL.RELEASE_LEVEL);
    Log.i('==================================================================');

    _applyLazyInitDefaultConfiguration();
    _validatePlatformOptions(options);
    _initPlatformOptions(options);

    if (listener === undefined) {
      listener = new ADL.PlatformInitListener();
    }

    _embedPluginContainer();

    ADL.BugReporting.init(ADL._platformOptions);
    ADL.StreamerResolver.init(ADL._platformOptions);
    // This needs to be done after the container is embed as we use it's id.
    ADL.Tracker.init(ADL._platformOptions, ADL._pluginContainerId);

    var pluginInstalled = _embedPlugin();

//    Rest of the initialisation is done asynchronously.
    if (pluginInstalled) {
      if (ADL._platformOptions.skipUpdate) {
//        The update was skipped, so create the service directly.
        Log.w('AddLive Plug-in update was skipped. Do this only if you ' +
            'know what you\'re doing.');
        _createService(listener);
      } else {
//      Do the update, then create the service and perform quick devices
//      initialisation.
        _updatePlugin(listener);
      }
    } else {
//      Fetch the update descriptor and report that plug-in needs to be
//      installed.
      _getInstallURL(listener);
    }
  };

  /**
   * Returns the AddLiveService created and initialized by the ADL.initPlatform.
   * If the AddLivePlatform was not initialized prior to calling this function,
   * it will return undefined value.
   *
   * @summary Returns the AddLiveService instance created using initPlatform.
   * @since 1.16.0.0
   * @see ADL.initPlatform
   * @returns {ADL.AddLiveService}
   */
  ADL.getService = function () {
    return ADL._service;
  };

  /**
   * Disposes the previously initialized AddLive Platform. Internally it
   * deletes the AddLive Service instance and removes the object tag from DOM.
   *
   * @summary Disposes the previously initialized AddLive Platform.
   * @since 1.17.1
   * @see ADL.initPlatform
   */
  ADL.disposePlatform = function () {
    Log.d('Disposing platform');
    delete ADL._service;
    _unloadPlugin();
    delete ADL._pluginInstance;
  };

  /**
   * Listener interface for handling platform initialization events.
   *
   * @summary Listener interface for handling platform initialization events.
   * @since 1.16.0.0
   * @see ADL.initPlatform
   * @constructor
   */
  ADL.PlatformInitListener = function () {
  };

  ADL.PlatformInitListener.prototype = {

    /**
     * Called whenever the initialization state changes.
     *
     * @summary Notifies about the change in init state.
     * @since 1.16.0.0
     * @see ADL.InitStateChangedEvent
     * @param {ADL.InitStateChangedEvent} event
     */
    onInitStateChanged:function (event) {
      Log.d('Got init state changed event: ' + JSON.stringify(event));
    },
    /**
     * Called whenever the initialization progress value changes.
     *
     * @summary Notifies about the change in init progress.
     * @since 1.16.0.0
     * @see ADL.InitProgressChangedEvent
     * @param {ADL.InitProgressChangedEvent} event
     */
    onInitProgressChanged:function (event) {
      Log.d('Got init progress changed event: ' + JSON.stringify(event));
    }

  };


  /**
   * Event describing change in the platform initialization state.
   *
   * @summary Event describing change in the platform initialization state.
   * @since 1.16.0.0
   * @extends ADL.AddLiveEvent
   * @see ADL.initPlatform
   * @see ADL.PlatformInitListener
   * @see ADL.InitState
   * @param {string} state
   *          new state of the initialization process
   * @param {string} [installerUrl]
   *          Installation URL - use this URL to show the install button.
   * @param {Number} [errCode]
   *          Optional error code, in case of state being ADL.InitState.ERROR
   * @param {string} [errMessage]
   *          Optional error message, in case of state being ADL.InitState.ERROR
   * @constructor
   */
  ADL.InitStateChangedEvent = function (state, installerUrl, errCode, errMessage) {

    /**
     * New initialization state
     *
     * @summary New initialization state.
     * @see ADL.InitState
     * @type {string}
     */
    this.state = state;

    /**
     * Optional error code. Defined only if the
     * {@link ADL.InitStateChangedEvent#state} is set to
     * {@link ADL.InitState.ERROR}
     *
     * @summary Optional error code
     * @type {Number}
     */
    this.errCode = errCode;

    /**
     * Optional error message. Defined only if the
     * {@link ADL.InitStateChangedEvent#state} is set to
     * {@link ADL.InitState.ERROR}
     *
     * @summary Optional error message
     * @type {string}
     */
    this.errMessage = errMessage;

    /**
     * Optional installation URL. Defined only if the state is set to
     * {@link ADL.InitState.INSTALLATION_REQUIRED}, and should be used as a href
     * in installation link/button.
     *
     * @summary Optional installation URL, defined when installation is required
     * @type {string}
     */
    this.installerURL = installerUrl;

    /**
     * Flag defining whether video capture device was properly initialized.
     * Defined only when the state is set to {@link ADL.InitState.INITIALIZED}.
     * @summary Flag defining whether video capture device was properly
     *          initialized.
     * @since 1.17.4
     * @type {Boolean}
     */
    this.videoCaptureDevFunctional = false;

    /**
     * Flag defining whether audio capture device was properly initialized.
     * Defined only when the state is set to {@link ADL.InitState.INITIALIZED}.
     *
     * @summary Flag defining whether audio capture device was properly
     *          initialized.
     *
     * @since 1.17.4
     * @type {Boolean}
     */
    this.audioCaptureDevFunctional = false;

    /**
     * Flag defining whether audio output device was properly initialized.
     * Defined only when the state is set to {@link ADL.InitState.INITIALIZED}.
     *
     * @summary Flag defining whether audio output device was properly
     *          initialized.
     * @since 1.17.4
     * @type {Boolean}
     */
    this.audioOutputDevFunctional = false;

  };
  ADL._extend(ADL.InitStateChangedEvent, ADL.AddLiveEvent);


  /**
   * Event describing change in AddLive Platform initialization progress.
   *
   * @summary Event describing change in AddLive Platform initialization
   *          progress.
   * @since 1.16.0.0
   * @see ADL.initPlatform
   * @see ADL.PlatformInitListener#onInitProgressChanged
   * @param {Number} progress
   * @constructor
   */
  ADL.InitProgressChangedEvent = function (progress) {

    /**
     * New progress value, with values in range [0;100].
     * @summary New progress value, with values in range [0;100].
     * @type {Number}
     */
    this.progress = progress;
  };

  /**
   * Enumeration listing all possible platform initialization states.
   *
   * @summary Enumerates all possible initialization states.
   * @since 1.16.0.0
   * @see ADL.initPlatform
   * @see ADL.PlatformInitListener#onInitStateChanged
   * @see ADL.InitStateChangedEvent
   * @enum {string}
   */
  ADL.InitState = {

    /**
     * Indicates that there was an error with platform initialization.
     */
    ERROR:'ERROR',

    /**
     * Indicates that the platform was successfully initialized.
     */
    INITIALIZED:'INITIALIZED',

    /**
     * Indicates that due to an auto update, the browser needs to be restarted.
     */
    BROWSER_RESTART_REQUIRED:'BROWSER_RESTART_REQUIRED',

    /**
     * Indicates that the AddLive Plug-in needs to be installed. It does not
     * break the initialization process, the platform will internally start
     * polling for the plug-in availability and when detected, will continue
     * with the initialization.
     */
    INSTALLATION_REQUIRED:'INSTALLATION_REQUIRED',

    /**
     * Indicates that the user has finished with the AddLive Plug-in
     * installation, and the platform continues to initialize itself.
     */
    INSTALLATION_COMPLETE:'INSTALLATION_COMPLETE',

    /**
     * Indicates that the AddLive Service self-update process has just begun.
     */
    UPDATE_BEGIN:'UPDATE_STARTED',

    /**
     * Indicates that the media devices initialization process has just begun.
     */
    DEVICES_INIT_BEGIN:'DEVICES_INIT_STARTED',

    /**
     * Indicates that the service failed to automatically update itself and
     * it cannot proceed with current version installed due to incompatibility
     * with the most recent streaming server. In this case it is required for
     * the service to be updated manually, using installer URL provided.
     *
     * Please note that this event has an default action associated - by default
     * if your application does not notify the platform that the event was
     * handled using the {@link ADL.AddLiveEvent#preventDefault}, it will show
     * tiny notification window asking the user to manually update the plug-in
     * using provided installer and restart all browsers using the plug-in.
     */
    NEEDS_MANUAL_UPDATE:'NEEDS_MANUAL_UPDATE'

  };

  /**
   * ===========================================================================
   * Private helpers
   * ===========================================================================
   */

  /**
   *
   * @private
   */
  function _embedPluginContainer() {
    var pluginContainer = document.createElement('div');
    pluginContainer.style.position = 'fixed';
    pluginContainer.style.overflow = 'hidden';
    pluginContainer.style.width = 10;
    pluginContainer.style.height = 10;
    pluginContainer.style.top = 0;
    pluginContainer.style.left = -100;
    pluginContainer.id = 'addLivePluginContainer' + _generateRandomIdSuffix();
    document.body.appendChild(pluginContainer);
    ADL._pluginContainerId = pluginContainer.id;
  }

  /**
   *
   * @private
   */
  function _embedPlugin() {
    Log.d('Embedding the AddLive plugin inside a container with id: ' +
        ADL._pluginContainerId);
    ADL._pluginInstance = new ADL.AddLivePlugin(ADL._pluginContainerId);
    return ADL._pluginInstance.loadPlugin();
  }

  /**
   *
   * @param {ADL.PlatformInitListener} listener
   * @private
   */
  function _updatePlugin(listener) {

    var updateListener = new ADL.PluginUpdateListener();
    updateListener.updateProgress = function (progress) {
      var progressRange = _UPDATE_END_PROGRESS - _UPDATE_BEGIN_PROGRESS;
      var progressWeighted = _UPDATE_BEGIN_PROGRESS +
          (progressRange * progress / 100);
      this.initListener.onInitProgressChanged(
          new ADL.InitProgressChangedEvent(progressWeighted));


    };

    updateListener.updateStatus = function (status, errCode, errMsg) {
      var initListener = this.initListener;
      switch (status) {
        case 'UPDATING':
//          Update process started - ignore
          initListener.onInitStateChanged(
              new ADL.InitStateChangedEvent(ADL.InitState.UPDATE_BEGIN));
          break;
        //noinspection FallthroughInSwitchStatementJS
        case 'UPDATED':
          ADL.Tracker.trackAction(ADL.TrackableAction.UPDATE_COMPLETE);
          _unloadPlugin();
          _embedPluginContainer();
          _embedPlugin();
          _createService(initListener);
          break;
        case 'UP_TO_DATE':
//        Plugin up to date - nothing needs to be done
          _createService(initListener);
          break;
        case 'UPDATED_RESTART':
//            Report that the initialization is complete
          initListener.onInitProgressChanged(
              new ADL.InitProgressChangedEvent(_INIT_COMPLETE_PROGRESS));

//            Report that the browser needs to be restarted
          initListener.onInitStateChanged(
              new ADL.InitStateChangedEvent(
                  ADL.InitState.BROWSER_RESTART_REQUIRED));
//        Plugin updated successfully but browser needs to be restarted
          break;
        case 'NEEDS_MANUAL_UPDATE':
        case 'ERROR':
          ADL.Tracker.trackAction(ADL.TrackableAction.UPDATE_ERROR);
          Log.w('Failed to update the plug-in.');
          _handleUpdateError(initListener, errMsg, errCode);

//        Failed to update the plugin.
          break;
        default:
          break;
      }

    };
    try {
      updateListener.initListener = listener;
      listener.onInitProgressChanged(
          new ADL.InitProgressChangedEvent(_UPDATE_BEGIN_PROGRESS));
      ADL.Tracker.trackAction(ADL.TrackableAction.UPDATE_STARTED);
      ADL._pluginInstance.update(updateListener);
    } catch (/** ADL.AddLiveException*/e) {
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(
              ADL.InitState.ERROR, '', e.code, e.message));
    }
  }

  /**
   *
   * @param {ADL.PlatformInitListener} listener
   * @param errMsg
   * @param errCode
   * @private
   */
  function _handleUpdateError(listener, errMsg, errCode) {
    var service = null,
        minVersionSupported = null,
        installerUrl = null,
        installerDone = false;

    var _doHandleMaybe = function () {
      if (service && installerDone) {
        if (minVersionSupported === null) {
          Log.w('Failed to fetch the installer. Assuming service is fine.');
          minVersionSupported = '1.0.0.0';
        }
        var vInstalled = service.nativeService.version;
        if (_versionCmp(minVersionSupported, vInstalled) > 0) {
          // Minimal supported version is greater then currently installed one -
          // manual update required
          listener._updateFailed = true;
          var cause = ADL.Utils.errorToCause(errMsg, errCode);
          ADL.BugReporting.reportBug(ADL.r(), {
            type:'AER-UPDATE',
            cause:cause,
            /*jshint camelcase:false*/
            error_code:errCode});
          Log.e('Version installed is too old. Requesting user to auto update');
          if (installerUrl) {
            _handleManualUpdate(listener, installerUrl);
          } else {
            listener.onInitStateChanged(
                new ADL.InitStateChangedEvent(ADL.InitState.ERROR));
          }
        } else {
          // Current version is greater then minimal supported - no need to
          // perform manual update
          // Proceed with the initialization;
          _createService(listener, service);
        }
      }
    };

    var updateDescrFetched = function (data) {
      installerUrl = data.url;
      minVersionSupported = data.descriptor['version.minSupported'];
      installerDone = true;
      _doHandleMaybe();
    }, updateDescrFetchErr = function () {
      installerDone = true;
      _doHandleMaybe();
    };

    var onServiceCreated = function (s) {
      service = s;
      _doHandleMaybe();
    }, onServiceCreateErr = function () {
      Log.e('Failed to create service to get the version.');
      service = {nativeService:{version:'0.0.0.0'}};
      _doHandleMaybe();
    };
    ADL.getInstallerURL(ADL.r(updateDescrFetched, updateDescrFetchErr));
    ADL._pluginInstance.createService(
        ADL.r(onServiceCreated, onServiceCreateErr));
  }

  /**
   *
   * @param {ADL.PlatformInitListener}listener
   * @param installerUrl
   * @private
   */
  function _handleManualUpdate(listener, installerUrl) {
    var manualUpdateReqE = new ADL.InitStateChangedEvent(
        ADL.InitState.NEEDS_MANUAL_UPDATE,
        installerUrl);
    try {
      listener.onInitStateChanged(manualUpdateReqE);
    } catch (e) {
      Log.w('Got an error in user provided init state change listener');
    }
    if (!manualUpdateReqE.isDefaultPrevented()) {
      Log.d('Default action was not prevented - showing the update error ' +
          'dialog');
      _showManualUpdateNotification(installerUrl);
    }
  }

  function _showManualUpdateNotification(installerUrl) {
    ADL.Notifications.showUpdateError(installerUrl);
  }

  function _versionCmp(versionA, versionB) {
    var partsA = versionA.split('.'),
        partsB = versionB.split('.');
    for (var i = 0; i < 3; i++) {
      var a = parseInt(partsA[i], 10),
          b = parseInt(partsB[i], 10);
      if (a > b) {
        return 1;
      } else if (b < a) {
        return -1;
      }
    }
    return 0;
  }

  function _getInstallURL(listener) {
    var succHandler = function (descr) {
      ADL.Tracker.trackAction(ADL.TrackableAction.INSTALLATION_STARTED);
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(
              ADL.InitState.INSTALLATION_REQUIRED, descr.url));
      ADL._pluginInstance.startPolling(_getPollingHandler(listener),
          ADL._platformOptions.pluginPollFrequency);
    };
    var errHandler = function (errCode, errMessage) {
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(
              ADL.InitState.ERROR, undefined, errCode, errMessage));
    };
    ADL.getInstallerURL(ADL.createResponder(succHandler, errHandler));
  }


  function _createService(listener, serviceMaybe) {
    listener.onInitProgressChanged(
        new ADL.InitProgressChangedEvent(_CREATE_SERVICE_BEGIN_PROGRESS));


    var createServiceResultHandler = function (service) {
      listener.onInitProgressChanged(
          new ADL.InitProgressChangedEvent(_CREATE_SERVICE_END_PROGRESS));

      if (service.nativeService === undefined ||
          service.nativeService === null) {
        listener.onInitStateChanged(new ADL.InitStateChangedEvent(
            ADL.InitState.ERROR, undefined,
            ADL.ErrorCodes.Logic.PLATFORM_INIT_FAILED,
            'Internal error occurred that caused the plug-in to return an ' +
                'invalid AddLiveService'));
        return;
      }
      if (service.nativeService.getLogFileTag === undefined) {
        listener.onInitStateChanged(new ADL.InitStateChangedEvent(
            ADL.InitState.ERROR, undefined,
            ADL.ErrorCodes.Logic.PLATFORM_INIT_FAILED,
            'Internal error occurred that caused the plug-in to return an ' +
                'invalid AddLiveService'));
        return;
      }

      /**
       *
       * @type {ADL.AddLiveService}
       * @private
       */
      ADL._service = service;
      ADL.CrashHandler.init(ADL._platformOptions);
      _setAppIdMaybe();
      _initDevicesMaybe(listener);
      _storeDevices(service);
    };

    var createServiceErrorHandler = function (errCode, errMessage) {
      var cause = ADL.Utils.errorToCause(errMessage, errCode);
      Log.e('Failed to create service: ' + cause);
      ADL.BugReporting.reportBug(ADL.r(), {
        type:'AER-PLUGIN',
        cause:cause,
        /*jshint camelcase:false*/
        error_code:errCode});
      listener.onInitProgressChanged(
          new ADL.InitProgressChangedEvent(_INIT_COMPLETE_PROGRESS));
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(ADL.InitState.ERROR, undefined,
              errCode, errMessage)
      );
    };
    if (serviceMaybe) {
      createServiceResultHandler(serviceMaybe);
    } else {
      ADL._pluginInstance.createService(
          ADL.createResponder(
              createServiceResultHandler,
              createServiceErrorHandler
          )
      );
    }

  }


  /**
   * Fetches the update descriptor, parses it and returns an object containing
   * installer URL specific to user's particular platform, customized per
   * specified application and also an object containing the complete descriptor
   * (for advanced use only). The result is in form:
   * <pre><code>{
   *   url:'http://somehost.com/somepath/Somefile.exe',
   *   descriptor: {
   *     // Some other members
   *   }
   * }
   * </code></pre>
   *
   * @summary Returns URL of installer to be used when installing the plug-in.
   * @deprecated Since 2.0.0 Use the complete ADL.initPlatform functionality to
   *             perform the initialization, including plug-in installation.
   * @param {ADL.Responder} responder
   *          Responder that will receive the URL
   * @param {string} [updateDescriptorUrl]
   *          Custom URL for the update descriptor.
   *
   */
  ADL.getInstallerURL = function (responder, updateDescriptorUrl) {
    // This one is exposed only due to tests
    try {
      if (waitingForUpdateDescriptor) {
        responder.error(ADL.ErrorCodes.Logic.INVALID_STATE,
            'getInstallerURL already awaits for update descriptor');
        return;
      }
      installerURLResponder = responder;
      if (updateDescriptorUrl === undefined) {
        updateDescriptorUrl =
            ADL._platformOptions.installationDescriptorRoot + // http://complete/path
                ADL._UPDATE_DESCRIPTOR_NAME + // update
                ADL._getUpdateDescriptorSuffix() + '.js';   // .{mac,win}.js
      }
      _loadScript(updateDescriptorUrl, UPDATE_DESCRIPTOR_CONTAINER_ID, true);
      installerFetchTimeout = setTimeout(function () {
        responder.error(
            ADL.ErrorCodes.Communication.NETWORK_ERROR,
            'Timeout downloading installation descriptor');
      }, _UPDATE_DESCRIPTOR_FETCH_TIMEOUT);
    }
    catch (e) {
      responder.error(e.code, e.message);
    }
  };

  var installerFetchTimeout = null;

  /**
   * Called by the update descriptor JS file.
   * @param descriptor
   * @private
   */
  ADL._updateDescriptorReady = function (descriptor) {
    clearTimeout(installerFetchTimeout);
    waitingForUpdateDescriptor = false;
    setTimeout(function () {
      var scriptNode = document.getElementById(UPDATE_DESCRIPTOR_CONTAINER_ID);
      scriptNode.parentNode.removeChild(scriptNode);
    }, 500);
    var url;
    if (
//      Application ID was specified
        ADL._platformOptions.applicationId !== undefined &&
//      We've got new update descriptor custom installers-aware
        descriptor['url.installersRoot'] !== undefined &&
//      Given application id has custom installer assigned
        ADL._APP_2_INSTALLER !== undefined &&
        ADL._APP_2_INSTALLER[ADL._platformOptions.applicationId]) {
      var installerId =
          ADL._APP_2_INSTALLER[ADL._platformOptions.applicationId];
      var platformSuffix = ADL._getPlatformSuffix();
      // In this context, mac is mac
      //noinspection JSHint
      platformSuffix = platformSuffix.replace(/mac.*/, 'mac');
      url = descriptor['url.installersRoot'] +
          installerId + '/' +
          ADL._CUSTOM_INSTALLERS[installerId][platformSuffix];
    } else {
      url = descriptor['url.installer'];
    }
    installerURLResponder.result({url:url, descriptor:descriptor});
  };

  /**
   *
   * @param {string} src
   * @param {string} id
   * @param {boolean} async
   * @param {Function=} responder
   * @private
   */
  function _loadScript(src, id, async, responder) {
    if (!responder) {
      //noinspection JSAccessibilityCheck
      responder = ADL._nop;
    }
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = async;
    po.src = src;
    po.onload = responder;
    po.id = id;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
  }


  function _initDevicesMaybe(listener) {
    if (ADL._platformOptions.initDevices) {
      _initDevices(listener);
    } else {
      Log.w('Skipping devices initialization due to ' +
          'platformOptions.initDevices being false');
      listener.onInitProgressChanged(
          new ADL.InitProgressChangedEvent(_INIT_COMPLETE_PROGRESS));
      var initializedE =
          new ADL.InitStateChangedEvent(ADL.InitState.INITIALIZED);
      _applyUpdateErrorFlag(listener, initializedE);
      listener.onInitStateChanged(initializedE);
    }

  }

  function _applyUpdateErrorFlag(listener, event) {
    if (listener._updateFailed) {
      event.updateFailed = true;
    }
  }

  /**
   *
   * Sets application id if specified in platform initialization options.
   *
   * Please note that at the moment, it depends on assumption that the
   * asynchronous calls are processed in order.
   *
   * TODO remove the assumption
   * @private
   */
  function _setAppIdMaybe() {

    if (ADL._platformOptions.applicationId) {
      var succHandler = function () {
        Log.d('Successfully configured the application id');
      }, errHandler = function (errCode, errMsg) {
        Log.e('Error settings the application id.');
        Log.e('Cause: ' + errMsg + ' (errCode: ' + errCode + ')');
      };
      ADL._service.setApplicationId(
          ADL.r(succHandler, errHandler),
          ADL._platformOptions.applicationId);
    }
  }

  function _initDevices(listener) {
    listener.onInitStateChanged(
        new ADL.InitStateChangedEvent(ADL.InitState.DEVICES_INIT_BEGIN));
    var stepsToComplete = 3;
    listener._currentProgress = _CREATE_SERVICE_END_PROGRESS;
    var stateChangedEvent =
        new ADL.InitStateChangedEvent(ADL.InitState.INITIALIZED);
    var stepComplete = function (devType, succ) {
      stepsToComplete--;
      stateChangedEvent[devType + 'DevFunctional'] = succ;
      if (stepsToComplete === 0) {
        delete listener._currentProgress;
        listener.onInitProgressChanged(
            new ADL.InitProgressChangedEvent(_INIT_COMPLETE_PROGRESS));
        _applyUpdateErrorFlag(listener, stateChangedEvent);
        listener.onInitStateChanged(stateChangedEvent);
      } else {
        listener._currentProgress += 5;
        listener.onInitProgressChanged(
            new ADL.InitProgressChangedEvent(listener._currentProgress));

      }
    };
    //noinspection JSAccessibilityCheck
    _configDeviceOfType('VideoCapture',
        ADL._CAM_CONFIG_KEY, stepComplete);

    //noinspection JSAccessibilityCheck
    _configDeviceOfType('AudioCapture',
        ADL._MIC_CONFIG_KEY, stepComplete);

    //noinspection JSAccessibilityCheck
    _configDeviceOfType('AudioOutput',
        ADL._SPK_CONFIG_KEY, stepComplete);
  }

  function _configDeviceOfType(devType, storageProperty, stepComplete) {
    var getNamesMethod = 'get' + devType + 'DeviceNames';
    var setMethod = 'set' + devType + 'Device';
    var devFunctionalLabel = devType.substring(0, 1).toLowerCase() +
        devType.substring(1);
    ADL._service[getNamesMethod](
        ADL.createResponder(
            function (devs) {
              var configuredDev = ADL.Storage[storageProperty];
              if (!(configuredDev && devs[configuredDev] !== undefined)) {
                for (var k in devs) {
                  if (Object.prototype.hasOwnProperty.call(devs, k)) {
                    configuredDev = k;
                    ADL.Storage[storageProperty] = configuredDev;
                    //noinspection BreakStatementJS
                    break;
                  }
                }
              }
              ADL._service[setMethod](
                  ADL.createResponder(
                      function () {
                        stepComplete(devFunctionalLabel, true);
                      },
                      function () {
                        stepComplete(devFunctionalLabel, false);
                      }
                  ),
                  configuredDev);
            },
            function (errCode, errMessage) {
              Log.w('Failed to initialize device of type: ' + devType +
                  ' due to: ' + errMessage + '(' + errCode + ')');
              stepComplete();
            }

        )
    );
  }

  /**
   * @return {String}
   */
  function _generateRandomIdSuffix() {
    return Math.random().toString(36).substring(2, 5);
  }

  /**
   *
   * @param {ADL.PlatformInitListener} listener
   * @return {Function}
   * @private
   */
  function _getPollingHandler(listener) {
    return function () {
      ADL.Tracker.trackAction(ADL.TrackableAction.
          INSTALLATION_COMPLETE);
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(
              ADL.InitState.INSTALLATION_COMPLETE));
      _createService(listener);
    };
  }

  function _storeDevices(service) {
    service.getHostCpuDetails(ADL.r(function (details) {
      devices.CPU = details.brand_string;
    }));
    service.getVideoCaptureDeviceNames(ADL.r(function (devs) {
      devices.videoCapture = devs;
    }));
    service.getAudioCaptureDeviceNames(ADL.r(function (devs) {
      devices.audioCapture = devs;
    }));
    service.getAudioOutputDeviceNames(ADL.r(function (devs) {
      devices.audioOutput = devs;
    }));
  }

  /**
   *
   * @private
   */
  function _validatePlatformOptions(options) {
    if (options === undefined) {
      return;
    }
    var msg;
    if (options.pluginPollFrequency !== undefined) {
      var originalPollValue = options.pluginPollFrequency;
      options.pluginPollFrequency = parseInt(originalPollValue, 10);
      if (isNaN(options.pluginPollFrequency) ||
          options.pluginPollFrequency < 0) {
        msg = 'Invalid initialization options object - invalid ' +
            'pluginPollFrequency property value: ' + originalPollValue;
        throw new ADL.AddLiveException(
            msg,
            ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT);
      }
    }
    if (options.applicationId !== undefined) {
      var originalAppId = options.applicationId;

      options.applicationId = parseInt(originalAppId, 10);
      if (isNaN(options.applicationId)) {
        msg = 'Invalid initialization options object - invalid ' +
            'application id property value: ' + originalAppId;
        throw new ADL.AddLiveException(
            msg,
            ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT);
      }
    }
  }

  function _unloadPlugin() {
    ADL._pluginInstance.unload();
    var pContainer = document.getElementById(ADL._pluginContainerId);
    pContainer.parentNode.removeChild(pContainer);
  }

  function _applyLazyInitDefaultConfiguration() {
    _DEFAULT_PLATFORM_INIT_OPTIONS.configUrl = ADL._CONFIG_URL;
    _DEFAULT_PLATFORM_INIT_OPTIONS.bugReportingEndpoint =
        ADL._BUG_REPORTING_ENDPOINT;
    _DEFAULT_PLATFORM_INIT_OPTIONS.logsReportingEndpoint =
        ADL._LOGS_REPORTING_ENDPOINT;
    _DEFAULT_PLATFORM_INIT_OPTIONS.streamerEndpointResolver =
        ADL._STREAMER_ENDPOINT_RESOLVER;
    _DEFAULT_PLATFORM_INIT_OPTIONS.trackingEndpoint =
        ADL._TRACKING_ENDPOINT;
  }

  function _initPlatformOptions(options) {
    /**
     *
     * @type {Object}
     * @private
     */
    ADL._platformOptions = {};
    ADL._mergeObj(ADL._platformOptions, _DEFAULT_PLATFORM_INIT_OPTIONS);
    ADL._mergeObj(ADL._platformOptions, _DEFAULT_PLATFORM_INIT_OPTIONS);
    ADL._platformOptions.updateDescriptorRoot = ADL._PLUGIN_UPDATE_ROOT;
    ADL._platformOptions.installationDescriptorRoot = ADL._PLUGIN_INSTALL_ROOT;

//    Platform configuration setup
    if (options) {
      //    Overwrite only defined properties
      ADL._mergeObj(ADL._platformOptions, options);
    }

  }


  // Exports
  ADL._devices = devices;

}());/**
 * Copyright (C) SayMama Ltd 2011
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */

(function () {
  'use strict';

  /**
   * Base class for all native plugin wrappers. Based on given configuration
   * defines routines for checking presence and embedding.
   *
   * @summary Base class for all native plugin wrappers.
   * @private
   * @since 1.0.0.0
   * @constructor
   *
   * @param {Object} configuration
   *           Configuration object - describes the plugin to wrap
   * @param {string} configuration.mimeType
   *           mime type of plugin to load
   * @param {string} configuration.classId
   *           Id of ActiveX component class to load under IE
   * @param {string} configuration.testMethod
   *           Name of method to be used when checking if plug-in was loaded
   *           correctly
   * @param {Number} [configuration.pollInterval = 500]
   *           Name of method to be used when checking if plug-in was loaded
   *           correctly
   */
  ADL.PluginWrapper = function (configuration) {
//  Copy configuration
    this.mimeType = configuration.mimeType;
    this.classId = configuration.classId;
    this.testMethod = configuration.testMethod;

//  Initial rest of internal properties
    this.objectId = this.generateObjectTagId();
    this.params = {};
    this.attributes = {};
    this.polling = false;
    this.width = 0;
    this.height = 0;
  };


  /**
   *  Initializes process of polling for plug-in.
   *
   *  @param {Function} handler
   */
  ADL.PluginWrapper.prototype.startPolling = function (handler, pollInterval) {
    this.pollingHandler = handler;
    if (this.polling) {
      return;
    }
    this.polling = true;
    this._pollInterval = pollInterval || 1000;
    this._startPolling();
  };

  //noinspection JSUnusedGlobalSymbols
  /**
   *  Stops process of polling for plug-in.
   */
  ADL.PluginWrapper.prototype.stopPolling = function () {
    clearTimeout(this.pollingTimer);
  };

  /**
   *  Tries  to unload plug-in, by removing object tag.
   */
  ADL.PluginWrapper.prototype.unload = function () {
    ADL.Log.d('[PluginWrapper] Trying to unload plug-in');
    var pluginContainerId = this.pluginContainerId;
    if (!pluginContainerId) {
      ADL.Log.e('[PluginWrapper] Cannot unload plug-in: pluginContainerId ' +
          'was not specified');
    }
    ADL.Log.d('[PluginWrapper] Removing OBJECT tag');

    //noinspection InnerHTMLJS
    document.getElementById(this.pluginContainerId).innerHTML = '';
    ADL.Log.d('[PluginWrapper] OBJECT tag removed from DOM');
  };


  /**
   *  Tries to load plug-in, by embedding object tag.
   *
   *  @return {boolean}
   *             True if plugin was successfully loaded, false otherwise.
   */
  ADL.PluginWrapper.prototype.loadPlugin = function () {
    ADL.Log.d('[PluginWrapper] Trying to embed plug-in');
    try {
      navigator.plugins.refresh();
    } catch (e) {
      ADL.Log.d('Failed to refresh ' + e);
    }
    var installed = this._pluginInstalled();
    if (installed !== null && !installed) {
      ADL.Log.d('[PluginWrapper] Pre load tests shows that plug-in isn\'t ' +
          'installed. Skipping');
      return false;
    }
    ADL.Log.d('[PluginWrapper] Setting up OBJECT tag');
    return this._loadByMime(this.mimeType);
  };

  /*
   * =============================================================================
   * Private methods
   * =============================================================================
   */


  ADL.PluginWrapper.prototype.generateObjectTagId = function () {
    var text = 'plugin_';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  /**
   * Checks whether plug-in is installed or not.
   * @private
   * @return {boolean|null}
   */
  ADL.PluginWrapper.prototype._pluginInstalled = function () {
    try {
      if (window.navigator.plugins.length) {
        var self = this;
        for (var i = 0; i < window.navigator.plugins.length; i++) {
          var plugin = window.navigator.plugins[i];
          for (var j = 0; j < plugin.length; j++) {
            var mimeType = plugin[j];
            if (mimeType.type === self.mimeType) {
              return true;
            }
          }
        }
        return false;
      }
    } catch (e) {
      ADL.Log.w(
          'Failed to check whether the plug-in is installed or not: ' + e);
    }
    return null;
  };

  /**
   *  @private
   */
  ADL.PluginWrapper.prototype._startPolling = function () {
    var self = this;
    this.pollingTimer = setTimeout(function () {
      self._pollForPlugin();
    }, this._pollInterval);
  };

  /**
   * @private
   */
  ADL.PluginWrapper.prototype._pollForPlugin = function () {
    ADL.Log.d('[PluginWrapper] Polling for plug-in...');
    var loadStatus = this.loadPlugin();
    if (loadStatus) {
      ADL.Log.d('[PluginWrapper] Plugin loaded, notyfing listener');
      this.pollingHandler();
    } else {
      ADL.Log.d('[PluginWrapper] failed to load the plug-in, retrying');
      this._startPolling();
    }
  };


  /**
   *
   * @param mimeType
   * @return {boolean}
   * @private
   */
  ADL.PluginWrapper.prototype._loadByMime = function (mimeType) {
    if (!this.pluginContainerId) {
      ADL.Log.e('[PluginWrapper] Cannot embed plug-in: pluginContainerId ' +
          'was not specified');
      return false;
    }
    ADL.Log.d('[PluginWrapper] Resetting innerHTML of container');
    var container = document.getElementById(this.pluginContainerId);
    //noinspection InnerHTMLJS
    container.innerHTML = this._getObjectTag(mimeType);
    if (container && container.children && container.children[0]) {
      var objectNode = getPluginNode(container);
      if (!objectNode.nodeName) {
        objectNode.nodeName = 'object';
      }
    }
    ADL.Log.d('[PluginWrapper] OBJECT tag added to DOM. Testing for' +
        ' method: ' + this.testMethod);
    this.pluginInstance = document.getElementById(this.objectId);
    var result = (this.testMethod === null ||
        this.testMethod in this.pluginInstance);
    if (!result) {
      ADL.Log.d('[PluginWrapper] Plugin ' + this.mimeType +
          ' seems not to be installed');
    }
    return result;
  };

  function getPluginNode(container) {
    return container.children[0];
  }

  /**
   * Builds object tag which should be used to embed the plug-in.
   *
   * @param {string} mimeType
   *          Mime-Type of plug-in to be embed.
   * @return {string}
   *          Content of the object tag.
   * @private
   */
  ADL.PluginWrapper.prototype._getObjectTag = function (mimeType) {
    var attrString = '';
    var k;
    for (k in this.attributes) {
      if (this.attributes.hasOwnProperty(k)) {
        attrString += k + '="' + this.attributes[k] + '" ';
      }
    }
    var tagContent =
        '<object type="' + mimeType + '" id="' + this.objectId + '" ' +
            'width="1" height="1"' + attrString + '>';
    for (k in this.params) {
      if (this.params.hasOwnProperty(k)) {
        tagContent += '<param name="' + k + '" value="' + this.params[k] + '"/>';
      }
    }
    //noinspection StringLiteralBreaksHTMLJS
    tagContent += '  </object>';
    return tagContent;
  };


  /**
   * ============================================================================
   *                         AddLivePlugin
   * ============================================================================
   */


  /**
   * Wrapper for the AddLive Plug-in.
   *
   * @deprecated Since 1.16.0.0 use the new ADL.initPlatform facility.
   * @private
   * @since 1.0.0.0
   * @see ADL.initPlatform
   * @constructor
   * @augments ADL.PluginWrapper
   * @param {string} pluginContainerId
   *           id of the HTML element where plug-in OBJECT tag should be embedded.
   *           This element must be statically defined in the DOM (i.e. it cannot
   *           be appended dynamically with JavaScript).
   * @param {number} [clientId]
   *           AddLive client id. Affects use of custom installation binaries
   *           and streamer URLs resolving.
   */
  ADL.AddLivePlugin = function (pluginContainerId, clientId) {
    this.pluginContainerId = pluginContainerId;
    if (clientId) {
      /**
       *
       * @type {Number}
       * @private
       */
      ADL._clientId = clientId;
    }
  };

  /**
   * Configuration of the AddLive Plug-In.
   *
   * @const
   * @type {Object}
   */
  var ADDLIVE_PLUGIN_CONFIG = {
    mimeType:'application/x-addliveplugin',
    classId:'clsid: 051e3002-6ebb-5b93-9382-f13f091b2ab2',
    testMethod:'createService'
  };

  ADL.AddLivePlugin.prototype = new ADL.PluginWrapper(ADDLIVE_PLUGIN_CONFIG);
  ADL.AddLivePlugin.prototype.constructor = ADL.AddLivePlugin;


  /**
   * ============================================================================
   *                            Public API
   * ============================================================================
   */

  /**
   * Creates a AddLive Service.
   *
   * @see AddLiveService
   * @param {ADL.Responder} responder
   *           Responder object that will receive resulting responder or will
   *           handle an error
   */
  ADL.AddLivePlugin.prototype.createService = function (responder) {
    ADL.Log.d('[AddLivePlugin] Creating new plug-in service instance');
    responder._realResultHandler = responder.result;

    responder.result = function (service) {
      service = new ADL.AddLiveService(service);

      /**
       *
       * @type {ADL.AddLiveService}
       * @private
       */
      ADL._service = service;
      this._realResultHandler(service);
    };
    responder.setMethod('createService()');
    this.pluginInstance.createService(responder);
  };


  /**
   * Tries to self-update the AddLive Plug-in.
   *
   * @param {ADL.PluginUpdateListener} listener
   *           Listener for update events.
   * @param {string=} url
   *           URL pointing to the update descriptor which should be used with
   *           the update.
   */
  ADL.AddLivePlugin.prototype.update = function (listener, url) {
    ADL.Log.d('[AddLivePlugin] Updating plug-in');
    if (!url) {
      url =
          ADL._platformOptions.updateDescriptorRoot +
              ADL._UPDATE_DESCRIPTOR_NAME +
              ADL._getUpdateDescriptorSuffix();
    }
    _validateUpdateListenerMethod(listener, 'updateProgress');
    _validateUpdateListenerMethod(listener, 'updateStatus');
    if (this.pluginInstance.updateCS === undefined) {
//      Use older method if prototype-safe alias doesn't exist.
      this.pluginInstance.update(listener, url);
    } else {
//      Use new alias if exists
      this.pluginInstance.updateCS(listener, url);
    }
  };


  /**
   * Returns tag of log file currently used by the AddLive Plug-in API.
   *
   * @return {string|null}
   *            tag of log file currently used by the AddLive Plug-in API.
   *            Null, if it is impossible to obtain the logs tag.
   */
  ADL.AddLivePlugin.prototype.getLogFileTag = function () {
    ADL.Log.d('[AddLivePlugin] Retrieving container log file tag');
    if (this.pluginInstance.getLogFileTag === undefined) {
      return null;
    }
    return this.pluginInstance.getLogFileTag();
  };

  /**
   * Returns content of the AddLive Plug-In or service log file with given tag.
   * The content returned is a base64-encoded String.
   *
   * @param {string} tag
   *           Tag of logs to obtain.
   * @return {string|null}
   *           Content of the log file or null if it is impossible to obtain the
   *           log contents.
   */
  ADL.AddLivePlugin.prototype.getLogFileByTag = function (tag, offset) {
    ADL.Log.d('[AddLivePlugin] Retrieving log file by tag ' + tag);
    if (this.pluginInstance.getLogFileByTag === undefined) {
      return '';
    }
    return this.pluginInstance.getLogFileByTag(tag, offset);
  };

  /**
   * ============================================================================
   *                       PluginUpdateListener
   * ============================================================================
   */

  /**
   * Listener class for events related to plugin updating - progress and status
   * reporting.
   *
   * @since 1.0.0.0
   * @deprecated Since 1.16.0.0 use the new ADL.initPlatform facility.
   * @see ADL.initPlatform
   * @constructor
   * @private
   */
  ADL.PluginUpdateListener = function () {
  };

  /**
   * Called whenever update process increases the progress of self.
   *
   * @param {Number} progress
   *           New updating progress, in range 0-100.
   */
  ADL.PluginUpdateListener.prototype.updateProgress = function (progress) {
    ADL.Log.d('Got new update progress: ' + progress);
  };

  /**
   * Called whenever the status of the update process changes.
   *
   * @param {string} newStatus
   *           Type of the new state. Can be any of: 'UPDATING', 'UPDATED',
   *           'UP_TO_DATE', 'UPDATED_RESTART', 'NEEDS_MANUAL_UPDATE', 'ERROR'.
   * @param {Number=} errCode
   *           Optional error code, if the newStatus is 'ERROR'
   * @param {string=} errMessage
   *           Optional, human-friendly error message, if the newStatus is 'ERROR'
   */
  ADL.PluginUpdateListener.prototype.updateStatus =
      function (newStatus, errCode, errMessage) {
        ADL.Log.d('Got update state changed event: ' + newStatus + ' ' +
            errCode + ' ' + errMessage);
      };

  /**
   *
   * @param listener
   * @param method
   * @private
   */
  function _validateUpdateListenerMethod(listener, method) {
    if (listener[method] === undefined ||
        typeof listener[method] !== 'function') {
      throw new ADL.AddLiveException(
          'Invalid udpate listener - ' + method + ' method is missing or not a ' +
              'function',
          ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT);
    }
  }

}());/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */

/**
 * @fileoverview
 * Single class source - contains definition of the AddLiveService class.
 *
 * @author Tadeusz Kozak
 * @date 28-05-2012 16:06
 */


(function () {
  'use strict';

  // Imports
  //noinspection JSAccessibilityCheck
  var Log = ADL.Log;

  var SANE_DEFAULTS_CONN_DESCR = {

    /**
     * Description of the base line video stream - the low layer. It's QVGA, with
     * bitrate equal to 64kbps and 5 frames per second
     */
    lowVideoStream:{
      publish:true,
      receive:true,
      maxWidth:320,
      maxHeight:240,
      maxBitRate:64,
      maxFps:5
    },

    /**
     * Description of the adaptive video stream - the high layer. It's QVGA, with
     * 400kbps of bitrate and 15 frames per second
     */
    highVideoStream:{
      publish:true,
      receive:true,
      maxWidth:640,
      maxHeight:480,
      maxBitRate:800,
      maxFps:15
    },

    /**
     * Flags defining that both streams should be automatically published upon
     * connection.
     */
    autopublishVideo:true,
    autopublishAudio:true
  };

  /**
   * Class wrapping the native AddLive Service object. It's main use case is to
   * easily define available API and aid the developer with some debugging tools
   * (logging).
   *
   * @summary Wrapper for the native AddLive Service object. Offers the core
   *          functionality.
   * @since 1.0.0.0
   * @param {Object} nativeService
   *          Native service object, as returned by the AddLive Plug-in
   * @constructor
   */
  ADL.AddLiveService = function (nativeService) {
    this.nativeService = /** ADL.AddLiveService*/ nativeService;

    /**
     * @private
     * @type {number}
     */
    this.serviceid = nativeService.serviceid;

    /**
     * Version of the AddLive Service.
     *
     * @since 2.0.0
     * @summary Version of the AddLive Service
     * @type {String}
     */
    this.version = nativeService.version;

    /**
     * Map of active connections
     * @type {Object}
     * @private
     */
    this._activeConnections = {};

    this.connLostHandler = new ADL.AddLiveServiceListener();
    var self = this;

    /**
     *
     * @param {ADL.ConnectionLostEvent} e
     */
    this.connLostHandler.onConnectionLost = function (e) {
      var conn = self._activeConnections[e.scopeId];
      conn._dispose();
      delete self._activeConnections[e.scopeId];
    };
    this.addServiceListener(ADL.r(), this.connLostHandler);
  };

  /**
   * Returns a version of the plug-in currently used.
   * Example result: '1.15.0.2'.
   *
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Returns a version of the plug-in currently installed.
   * @since 1.0.0.0
   * @example
   * function showVersion() {
   *   var onVersion = function(version) {
   *     alert('AddLive plug-in version: ' + version);
   *   };
   *   ADL.getService().getVersion(ADL.r(onVersion));
   * }
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getVersion = function (responder) {
    var method = 'getVersion()';
    try {
      Log.d('Getting service version');
      ADL.Responder.validate(responder);
      responder.setMethod(method);
      responder.sendAERonError(true);
      this.nativeService.getVersion(responder);
    } catch (exception) {
      _reportJSError(method, exception, responder);
    }

  };

  /**
   * Sets an id of web application using the SDK. Required when making
   * authorized connection request.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Sets an id of web application using the SDK.
   * @since 1.0.0.0
   * @deprecated Use {@link ADL.initPlatform} and applicationId provided in init
   *             configuration instead.
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {Number} appId
   *          Application id to be set.
   **/
  ADL.AddLiveService.prototype.setApplicationId = function (responder, appId) {
    var mName = 'setApplicationId(' + appId + ')';
    try {
      Log.d('Setting application id');

      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      ADL.Utils.validate(responder, 'appId|defined,number', appId);
      this.nativeService.setApplicationId(responder, appId);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Requests the service to fetch the runtime configuration. Use it only if
   * you know what you're doing.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Requests the service to fetch the runtime configuration.
   * @since 1.19.0.5
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} configUrl
   *          URL pointing to the configuration file
   **/
  ADL.AddLiveService.prototype.fetchConfig = function (responder, configUrl) {
    var mName = 'fetchConfig(' + configUrl + ')';
    try {
      Log.d('Fetching configuration from URL: ' + configUrl);
      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      if (!ADL.Utils.validate(responder, 'configUrl|defined,string,nonEmpty',
          configUrl)) {
        return;
      }
      this.nativeService.fetchConfig(responder, configUrl);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Registers a AddLive Service listener. Listener provided here should subclass
   * the provided ADL.AddLiveServiceListener stub and implement required methods.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Registers a AddLive Service listener.
   * @since 1.0.0.0
   * @example
   * function initMicActivityListener() {
   *   var listener = new ADL.AddLiveServiceListener();
   *   listener.onMicActivity = function(e) {
   *     alert('Got new mic activity: ' + e.activity);
   *   };
   *   ADL.getService().addServiceListener(listener);
   * }
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {ADL.AddLiveServiceListener} listener
   *          Listener to be registered.
   **/
  ADL.AddLiveService.prototype.addServiceListener =
      function (responder, listener) {
        var mName = 'addServiceListener({...})';
        try {
          ADL.Responder.validate(responder);
          var adaptedListener = new ADL.ADLServiceListenerAdapter(listener);
          Log.d('Calling plugin method addServiceListener({...})');
          responder.setMethod(mName);
          responder.sendAERonError(true);
          this.nativeService.addAddLiveServiceListener(responder,
              adaptedListener);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };


  /**
   * Returns an object completely describing user's computer CPU details.
   * This method is useful when checking if user's hardware is strong enough
   * to meet criteria of the AddLive Plug-in.
   *
   * #### Example result:
   *
   * <pre>
   * {
   *   brand_string:'Intel(R) Core(TM) i5 CPU M 430 @ 2.27GHz',
   *   clock:2261,
   *   cores:4,
   *   extfamily:0,
   *   extmodel:2,
   *   family:6,
   *   model:5,
   *   stepping:2,
   *   vendor:'GenuineIntel'
   * }
   * </pre>
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns an object completely describing user's computer CPU
   *          details.
   * @since 1.0.0
   * @example
   * function showCpu() {
   *   var onCPU = function(cpuDetails) {
   *     alert('You have following CPU installed on your system: ' +
   *           cpuDetails.brand_string + '. Nice.');
   *     )
   *   };
   *   ADL.getService().getHostCpuDetails(ADL.r(onCPU));
   * }
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   */
  ADL.AddLiveService.prototype.getHostCpuDetails = function (responder) {
    var mName = 'getHostCpuDetails()';
    try {
      Log.d('Calling plugin method getHostCpuDetails');
      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.sendAERonError(true);

      var resultAdapter = function (cpuInfo) {
        return JSON.parse(cpuInfo);
      };
      responder.setResultAdapter(resultAdapter);
      this.nativeService.getHostCpuDetails(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Returns a list of video capture devices plugged in to the user's computer.
   * The ids of devices returned by this function should be used when
   * configuring the video capture device. Note that the device ids are
   * permanently associated with given device. It means, that it is possible to
   * store id of device selected by the user and reuse it across multiple
   * sessions.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_VIDEO_DEV}<br/>
   *   May happen if there were errors on listing the devices on the OS-level.
   *   This may happen on OSX if there aren't any video devices plugged in or
   *   all devices are in use by other application.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   if an unexpected, internal error occurs.
   *
   * #### Example result:
   *
   * <code>
   * {
   *   'a3d3184172d2eb9d38797d801348744ea22cb71b':'USB 2.0 Camera',
   *   'bda5ea04b3813b906540f967fed4fe17a566f2e1':'Logitech HD Webcam C510'
   * }
   * </code>
   *
   * @summary Returns a list of video capture devices plugged in to the user's
   *          computer.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setVideoCaptureDevice
   * @see ADL.AddLiveService#getVideoCaptureDevice
   * @example
   * function populateVideoCaptureDevices() {
   *   var onDevs = function (devs) {
   *   var $select = $('#camSelect');
   *   $select.empty();
   *   $.each(devs, function (devId, devLabel) {
   *     $('<option value="' + devId + '">' + devLabel + '</option>').
   *          appendTo($select);
   *   });
   *   ADL.getService().getVideoCaptureDeviceNames(ADL.r(onDevs));
   * }
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getVideoCaptureDeviceNames = function (responder) {
    var mName = 'getVideoCaptureDeviceNames()';
    try {
      Log.d('Calling plugin method getVideoCaptureDeviceNames()');
      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getVideoCaptureDeviceNames(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Sets the video capture device to be used. This method should be used
   * nevertheless the video capture device is used by application or not. It
   * configures the device in scope of the underlying AddLive Service.
   *
   *
   * Once set, the selected device will be used for local preview and publishing
   * video stream to all media scopes to which user is connected. It is also
   * possible to change the video device while in use (aka hot plug). The only
   * side effect that user may experience is short freeze of feed during the
   * change.
   *
   *
   * In case of error during device setup, the service will try to fall back
   * to previously functional device.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_VIDEO_DEV}<br/>
   *   This error code may indicate that the specified device id is either
   *   invalid (device with given id isn't plugged in at the moment of calling
   *   this method Plug-in failed to initialize the device. It may be either
   *   because the device is in use by different application or simply stopped
   *   working.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets the video capture device to be used by the SDK.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getVideoCaptureDeviceNames
   * @see ADL.AddLiveService#getVideoCaptureDevice
   * @see ADL.AddLiveService#startLocalVideo
   * @see ADL.AddLiveService#connect
   * @example
   * function initVideoCamSelect() {
   *   var $select = $('#camSelect');
   *   $select.change(
   *     function() {
   *       ADL.getService().setVideoCaptureDevice(
   *        ADL.r(), $(this).val());
   *     }
   *   );
   * }
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} deviceId
   *          Id of video device to set.
   **/
  ADL.AddLiveService.prototype.setVideoCaptureDevice =
      function (responder, deviceId) {
        var mName = 'setVideoCaptureDevice(' + deviceId + ')';
        try {
          Log.d('Calling plugin method ' + mName);

          ADL.Responder.validate(responder);
          responder.setMethod(mName);
          if (!ADL.Utils.validate(responder, 'deviceId|defined,string,nonEmpty',
              deviceId)) {
            return;
          }

//        Wrap the original result handler to persist the devices configuration
//        state
          //noinspection JSUndefinedPropertyAssignment
          responder._originalResultHandler = responder.result;
          responder.result = function () {
            //noinspection JSAccessibilityCheck
            ADL.Storage[ADL._CAM_CONFIG_KEY] = deviceId;
            this._originalResultHandler();
          };
          this.nativeService.setVideoCaptureDevice(responder, deviceId);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };


  /**
   * Returns the identifier of currently configured video capture device. The
   * device is returned as a String, corresponding to device id returned by
   * getVideoCaptureDeviceNames() or an empty string if no device was configured
   * previously. Example result: 'a3d3184172d2eb9d38797d801348744ea22cb71b'.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns the identifier of currently configured video capture
   *          device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getVideoCaptureDeviceNames
   * @see ADL.AddLiveService#setVideoCaptureDevice
   * @example
   * function showCurrentVideoDev() {
   *   var onDev = function(devId) {
   *     alert('You\'re currently using a webcam with following id: ' + devId);
   *   };
   *   ADL.getService().getVideoCaptureDevice(ADL.r(onDev));
   * }
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getVideoCaptureDevice = function (responder) {
    var mName = 'getVideoCaptureDevice()';
    try {
      Log.d('Calling plugin method ' + mName);
      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getVideoCaptureDevice(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Returns a list of audio capture devices (microphones) plugged in to the
   * user's computer at the moment of call. The result is a JavaScript array
   * object, with human friendly device labels as values. Indexes of the
   * resulting array are to be used when configuring audio capture device.
   *
   * It is not guaranteed that indexes of devices are permanent across multiple
   * service sessions.
   *
   * #### Example result:
   *
   * <code>
   * [
   *   'Microphone (HD Webcam C510)',
   *   'Microphone (Realtek High Definition Audio)'
   * ]
   * </code>
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_AUDIO_DEV}<br/>
   *   In case of an error with getting the amount of the devices.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns a list of all available microphones.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setAudioCaptureDevice
   * @see ADL.AddLiveService#getAudioCaptureDevice
   * @see ADL.AddLiveService#getAudioOutputDeviceNames
   * @see ADL.AddLiveService#getVideoCaptureDeviceNames
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getAudioCaptureDeviceNames = function (responder) {
    var mName = 'getAudioCaptureDeviceNames()';
    ADL.Responder.validate(responder);
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getAudioCaptureDeviceNames(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Sets the audio capture device (microphone) to be used by the AddLive Service.
   * The device is configured using index of the array obtained from call to the
   * ADL.AddLiveService.getAudioCaptureDeviceNames method.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_AUDIO_IN_DEV}<br/>
   *   In case of invalid device index specified specified (less then 0, greater
   *   then the amount of devices installed) or if there were problem with
   *   enabling the device (e.g. device in use on Windows XP)
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets the microphone to be used by the AddLive Service.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getAudioCaptureDeviceNames
   * @see ADL.AddLiveService#getAudioCaptureDevice
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {Number} deviceId
   *          index of device to set
   **/
  ADL.AddLiveService.prototype.setAudioCaptureDevice = function (responder, deviceId) {
    var mName = 'setAudioCaptureDevice(' + deviceId + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      ADL.Responder.validate(responder);
      responder.setMethod(mName);
      responder.setResultAdapter(function () {
        ADL.Storage[ADL._MIC_CONFIG_KEY] = deviceId;
      });
      responder.sendAERonError(true);
      if (!ADL.Utils.validate(responder, 'deviceId|defined,number', deviceId)) {
        return;
      }
      this.nativeService.setAudioCaptureDevice(responder, deviceId);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Returns the index of currently configured audio capture device (microphone).
   * The value returned by this method is a Number, corresponding to index from
   * an array obtained from call to the
   * ADL.AddLiveService.getAudioCaptureDeviceNames method.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns the index of currently configured microphone.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getAudioCaptureDeviceNames
   * @see ADL.AddLiveService#setAudioCaptureDevice
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getAudioCaptureDevice = function (responder) {
    var mName = 'getAudioCaptureDevice()';
    ADL.Responder.validate(responder);
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getAudioCaptureDevice(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Returns a list of audio output devices (speakers, headphones) plugged in to
   * the user's computer at the moment of call. The result is a JavaScript array
   * object, with human friendly device labels as values. Indexes of the
   * resulting array are to be used when configuring the audio output device.
   *
   * It is not guaranteed that indexes of devices are permanent across multiple
   * service sessions.
   *
   * #### Example result:
   *
   * <code>
   * [
   *   'Speaker/HP (Realtek High Definition Audio)'
   *   'Headset Earphone (Sennheiser DECT)'
   * ]
   * </code>
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_AUDIO_DEV}<br/>
   *   In case of an error with getting the amount of the devices.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns all available audio output devices (speakers, headphones).
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setAudioOutputDevice
   * @see ADL.AddLiveService#getAudioOutputDevice
   * @see ADL.AddLiveService#getAudioCaptureDeviceNames
   * @see ADL.AddLiveService#getVideoCaptureDeviceNames
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getAudioOutputDeviceNames = function (responder) {
    var mName = 'getAudioOutputDeviceNames()';
    ADL.Responder.validate(responder);
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getAudioOutputDeviceNames(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Sets the audio output device (speakers, microphone) to be used by
   * the service.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_AUDIO_IN_DEV}<br/>
   *   In case of invalid device index specified specified (less then 0, greater
   *   then the amount of devices installed) or if there were problem with
   *   enabling the device (e.g. device in use on Windows XP)!
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets the audio output device (speakers, microphone) to be used by
   *          the service.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getAudioOutputDeviceNames
   * @see ADL.AddLiveService#getAudioOutputDevice
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param deviceId index of device in array returned by the
   *         getAudioOutputDeviceNames() method
   *
   **/
  ADL.AddLiveService.prototype.setAudioOutputDevice = function (responder, deviceId) {
    var mName = 'setAudioOutputDevice(' + deviceId + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      //noinspection JSUndefinedPropertyAssignment
      responder.setResultAdapter(function () {
        ADL.Storage[ADL._SPK_CONFIG_KEY] = deviceId;
      });
      this.nativeService.setAudioOutputDevice(responder, deviceId);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Returns the index of currently configured audio output device.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Returns the index of currently configured audio output device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getAudioOutputDeviceNames
   * @see ADL.AddLiveService#setAudioOutputDevice
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getAudioOutputDevice = function (responder) {
    ADL.Responder.validate(responder);
    var mName = 'getAudioOutputDevice()';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod('getAudioOutputDevice()');
      responder.sendAERonError(true);
      this.nativeService.getAudioOutputDevice(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Returns list of sources available for screen sharing. Sources here refers to
   * user's desktops and opened windows. The resulting Array contains objects with
   * following attributes:
   *
   * - __id__    id of the screen sharing item. It should be used when publishing the
   *   stream
   *
   * - __image__ Object containing preview of screen shot image depicting
   *             the screen sharing source. It's contain following fields:
   *
   *   - _base64_ - String with picture data encoded using png and
   *   base64. One should use it with image tag as
   *   follows:
   *   <pre>
   *   var imgTag = '&lt;img src='data:img/png;base64,'+ image.base64 +''/&gt;';
   *   </pre>
   *
   *   - _width_ - native width of the screen shot taken
   *
   *   - _height_ native height of the screen shot taken
   *
   * - __title__ Human-readable title of the share source.
   *
   * Since passing the real-sized thumbnails with screen sharing source as
   * real-sized, base64 encoded PNG image is highly inefficient, this method takes
   * additional thumbWidth param, which should be set to the desired width of the
   * images, as required by the UI. The images will be scaled down.
   *
   * Additionally, if AddLive Service fails to obtain screen shot of given
   * screen sharing source, the image field will have the base64 property empty.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.

   * @example
   * // Simple example showing how to list all currently available screen
   * // sharing sources:
   *
   * function showScreenShareSources(sources) {
   *    var srcsList = document.getElementById('screenShareSources');
   *
   *    // Iterate through all the screen sharing sources given
   *    for(var i = 0;i&lt;sources.length;i++) {
   *
   *      // Create a &lt;li&gt; wrapper for each one
   *      var srcWrapper = document.createElement('li');
   *      srcWrapper.id = 'shareItm' + i;
   *
   *      // Get the current share item.
   *      var src = sources[i];
   *
   *      // Create image for showing the screen grab preview
   *      var image = document.createElement('img');
   *
   *      // Check whether the AddLive Service managed to obtain the scree shot
   *      if(src.image.base64) {
   *
   *        // Use the data URI scheme
   *        // http://en.wikipedia.org/wiki/Data_URI_scheme
   *        image.src = 'data:img/png;base64,' + src.image.base64;
   *        image.width = src.image.width;
   *        image.height = src.image.height;
   *      } else {
   *
   *        // Service failed to obtain the screen shot - fall back to place holder
   *        image.src = 'http://myapp.com/window_placeholder.png'
   *        image.width = 120;
   *        image.height = 80;
   *      }
   *
   *      // Add the preview
   *      srcWrapper.appendChild(image);
   *
   *      // Create the node with the window title
   *      var titleWrapper = document.createElement('p');
   *      titleWrapper.innerText = src.title;
   *      srcWrapper.appendChild(titleWrapper);
   *
   *      // Register click handler to publish the screen
   *      srcWrapper.shareItemId = src.id;
   *      srcWrapper.onclick = function(){
   *        publishShareItm(this.shareItemId);
   *      };
   *
   *      // Finally append the node
   *      srcsList.appendChild(srcWrapper);
   *    }
   * }
   *
   * // Define the error handler
   * function onGetScreenCaptureSourcesError(errCode, errMessage) {
   *    console.error('Failed to fetch screen sharing sources due to: ' +
   *    errMessage + ' (' + errCode + ')' );
   * }
   *
   * // Obtain the AddLive service (not covered by this example)
   * var AddLiveService = getAddLiveService();
   *
   * // Request the screen sharing sources
   * AddLiveService.getScreenCaptureSources(
   *    ADL.createResponder(showScreenShareSources,
   *                        onGetScreenCaptureSourcesError),
   *    320
   * );
   *
   * @summary Returns list of sources available for screen sharing.
   * @since 1.15.0.1
   * @see ADL.AddLiveService#publish
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {Number} thumbWidth
   *          Desired width of preview thumbnails.
   */
  ADL.AddLiveService.prototype.getScreenCaptureSources =
      function (responder, thumbWidth) {
        var mName = 'getScreenCaptureDeviceNames(' + thumbWidth + ')';
        try {
          Log.d('Calling plugin method ' + mName);
          responder.setMethod(mName);
          responder.sendAERonError(true);
          ADL.Responder.validate(responder);
          if (!ADL.Utils.validate(responder, 'thumbWidth|defined,number',
              thumbWidth)) {
            return;
          }
          //noinspection JSUndefinedPropertyAssignment
          responder._originalResultHandler = responder.result;
          responder.result = function (devs) {
//    Parse the devices list returned as a JSON-encoded string to JS object.
            devs = JSON.parse(devs);
            this._originalResultHandler(devs);
          };
          //noinspection JSCheckFunctionSignatures
          this.nativeService.getScreenCaptureDeviceNames(responder, thumbWidth);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };

  /**
   * Starts previewing video stream of current user. Internally this method:
   *
   * - checks whether selected video capture device is enabled and captures
   *   frames. If not - enables it.
   *
   * - checks whether local preview renderer is defined or not, if not -
   *   creates one and links it to the video capture device
   *
   * - returns a string that can be used to render the live feed
   *
   * The string returned by this method, should be used to create video renderer
   * provided by the AddLive plugin, refer to the rendering section of the AddLive
   * API docs for more details for more details.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_VIDEO_DEV}<br/>
   *   If the video capture device configured doesn't work.
   *
   * @summary Starts previewing video stream of current user.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#stopLocalVideo
   * @see ADL.AddLiveService#setVideoCaptureDevice
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.startLocalVideo = function (responder) {
    ADL.Responder.validate(responder);
    var mName = 'startLocalVideo()';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      this.nativeService.startLocalVideo(responder, 640, 480);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Stops previewing local video feed of the user. Internally it frees all
   * resources needed to render the local preview and also releases the video
   * capture device if it's not used by any established connection.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Stops previewing local video feed of the user.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#startLocalVideo
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.stopLocalVideo = function (responder) {
    var mName = 'stopLocalVideo()';
    try {
      Log.d('Calling plugin method ' + mName);
      if (!responder) {
        responder = ADL.createResponder();
      }
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.stopLocalVideo(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Establishes a connection to the streaming server using given description.
   * This is the most important method of all provided by the AddLive Service API.
   *
   *
   * #### Connection descriptor
   *
   * The only one input parameter, connectionDescriptor completely
   * describes client requirements on the connection to be established. It is a
   * JavaScript object with following attributes:
   *
   *
   * - __[url] (String)__ URL of streamer to connect to. In form:
   *
   *       IP_OR_DOMAIN_NAME:PORT/SCOPE_ID
   *
   *   SCOPE_ID, defines a media scope within the streamer. All users connected to
   *   a particular scope exchange media streams published within the scope.
   *   If given user publishes a stream (audio, video, screen or any combination
   *   of them) all users connected to this scope will be receiving this stream.
   *   Additionally, the SCOPE_ID param is used in connection management
   *   API - to specify the scope on which given action should be performed.
   *   The url attribute is optional, and needs to be specified only if
   *   __scopeId__ wasn't defined.
   *
   * - __[lowVideoStream] (Object)__
   *
   *   Defines the low quality video stream to be published (see the Video
   *   streams configuration section below). This property is optional, with
   *   sane defaults: resolution of 320x240 at 5 frames per second with 64 kbps
   *   bit rate cap.
   *
   * - __[highVideoStream] (Object)__
   *
   *   Defines the high quality video stream to be published (see the Video
   *   streams configuration section below). This property is optional, with
   *   sane defaults: resolution of 640x480 at 15 frames per second with 800 kbps
   *   bit rate cap.
   *
   * - __[autopublishVideo] (Boolean)__
   *
   *   Flag defining whether local user's video stream should be automatically
   *   published upon successful connection, __true__ by default.
   *
   * - __autopublishAudio (Boolean)__
   *
   *   Flag defining whether local user's audio stream should be automatically
   *   published upon successful connection, __true__ by default.
   *
   * - __authDetails (Object)__
   *
   *   Defines the connection authentication details, for more details please
   *   refer to:  http://www.addlive.com/authentication/
   *
   * ####  Video streams configuration
   *
   * The AddLive Service uses 2 quality layers for video streaming - the
   * 'low' and 'high' layer. The 'low' layer contains video stream with constant
   * bit rate, spatial resolution and temporal resolution (read: there aren't any
   * adaptation routines enabled for the low layer). It is the first layer to be
   * published and it requires user to have enough bandwidth to handle the
   * transmission. It implies that low configuration should be rather really low
   * (up to 100kbps, QVGA) unless it is certain that user can transmit data at higher
   * rates.
   *
   * On the other hand, the 'high' layer have all the adaptation routines enabled
   * and is intended to increase the quality of the video stream published as much
   * as user's setup (hardware devices, network connection) permits. It is being
   * published only if the network conditions allow and can be dropped down if
   * network condition changes. The high quality stream dynamically configure to
   * provide best UX user can have in given configuration. To achieve this,
   * network and CPU use is being constantly monitored and depending on the
   * current state, the service is adjusting quality, spatial resolution and
   * temporal resolution, until maximal values configured during the connection
   * setup is reached.
   *
   * When user publishes the 'high' layer stream, the 'low' one is still  send.
   * The streamer uses the 'low' quality stream to perform the  down-link
   * adaptation - the streamer transmits the high video layer only to the
   * participants that can actually receive it.
   *
   * Additionally it is possible to define whether the user should publish
   * or receive the 'high' layer. The main use case here is to allow sharing
   * scopes between different types of connections. E.g. some users might be
   * participants of given conversation and thus receiving and publishing high
   * quality video stream and others might be just previewing (e.g. to decide
   * whether to join it or not) thus, receiving only the low layer.
   *
   * To configure each video stream, JavaScript object with following
   * attributes:
   *
   * - __publish (boolean)__
   *
   *   Flag defining whether this layer should be published or not.
   *
   * - __receive (boolean)__
   *
   *   Flag defining whether this layer should be received by the user.
   *
   * - __maxWidth (Number)__
   *
   *   Defines maximal width of the video stream. The low layer will publish
   *   stream with exactly this width, the high layer will stop increasing the
   *   resolution, after reaching this value.
   *
   * - __maxHeight (Number)__
   *
   *   Defines maximal height of the video stream. Same rules as with width apply.
   *
   * - __maxBitRate (Number)__
   *
   *   Integer defining the video stream's bitrate. The low layer will publish
   *   stream with this constant bitrate; the high layer will stop increasing the
   *   quality and resolutions when reaching this cap
   *
   * - __maxFps (Number)__
   *
   *   Defines maximal amount of frames per second the video stream should use.
   *
   *
   * #### Authentication
   *
   * The authentication does not require any communication between your
   * application server side and our infrastructure. Instead, on the server
   * side, application should prepare all the required data, sign them using a
   * "shared secret" ("API Key") and pass it to the JavaScript which uses them
   * to prepare the connection descriptor.
   *
   * To authenticate given connection request, AddLive SDK expects following
   * data to be provided:
   *
   * - <strong>application id</strong> It explicitly identifies an application
   *   using the AddLive service. We use it to know who to charge for the
   *   traffic generated by the user and also to get the app-specific API key to
   *   verify the signature.
   *
   *   - <strong>user id</strong> Application unique identifier for the
   *   particular user. Having this property in set of authentication fields,
   *   allows the developer to explicitly control who can join media scope with
   *   given id. Also this property will be used with all the AddLive events
   *   dispatched to the {@link ADL.AddLiveServiceListener} and corresponding to
   *   remote user's actions (connect, disconnect, publish, unpublish,
   *   sendMessage). The user id property __must__ be a 64 bit integer. Read
   *   more: http://en.wikipedia.org/wiki/Integer_(computer_science).
   *
   *   - <strong>scope id</strong> Identifies id of a scope to which connection
   *   attempt is being  made. This property is a second component required to
   *   control who can join which scope.
   *
   *   - <strong>salt</strong> Random string used when calculating the
   *   authentication signature. It increases the signature randomness. expires
   *   timestamp UTC Timestamp, defining how long the authentication signature
   *   should be valid. It prevents malicious users from hijacking already
   *   calculated signature and reusing them outside application control.
   *
   *   - <strong>signature</strong> Authentication signature which guarantees
   *   that the connection request is being made on behalf of our client. It is
   *   a SHA-256 hash, calculated from a string generated by concatenation of
   *   all the above attributes and the API key. The signature must be
   *   represented as a hex-string, uppercased.
   *
   * #### Notifications
   *
   * Whenever AddLive Service detects that new user joined particular scope
   * by establishing a connection to it, the
   * {@link ADL.AddLiveServiceListener#onUserEvent} method is being called on
   * all registered service listeners. In this case, the
   * {@link ADL.UserStateChangedEvent},
   * will have flag isConnected set to true and all streaming details filled
   * according to the streaming configuration specified by the connection
   * descriptor.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_VIDEO_DEV}<br/>
   *   In case there was an error using currently selected video capture device
   *   (e.g. device in use by different application or just stopped working)
   *
   * - {@link ADL.ErrorCodes.Communication.INVALID_HOST}<br/>
   *   Indicates failure in DNS lookup of host specified in the url or streamer
   *   box being off-line
   *
   * - {@link ADL.ErrorCodes.Communication.INVALID_PORT}<br/>
   *   Indicates that service failed to connect to the streaming server. Either
   *   the traffic gets blocked by the firewall or streaming server is down
   *
   * - {@link ADL.ErrorCodes.Communication.BAD_AUTH}<br/>
   *   Indicates authentication error. There might be 4 reasons for rejected
   *   authentication signature: no authentication signature was provided,
   *   the application with given id is unknown, the signature calculated was
   *   invalid and finally, the authentication signature was expired. The actual
   *   cause of the authentication rejection will be provided using the
   *   <strong>errMessage</strong>.
   *
   * - {@link ADL.ErrorCodes.Communication.MEDIA_LINK_FAILURE}<br/>
   *   Indicates failure in establishing media connection. It means that the
   *   media streams are blocked somewhere on the path between the user and
   *   the streaming server. Most likely, it's due to a firewall blocking media
   *   traffic.
   *
   * - {@link ADL.ErrorCodes.Communication.ALREADY_JOINED}<br/>
   *   User with given id already joined given scope or the same user (from host
   *   application's perspective) joined the scope using different browser or
   *   different user agent. User id must be unique in scope boundaries.
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_ARGUMENT}<br/>
   *   Invalid connection descriptor given.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Establishes a connection to the streaming server.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#disconnect
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   * @see ADL.AddLiveServiceListener#onUserEvent
   * @see ADL.UserStateChangedEvent
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {Object} connectionDescription
   *          Details of the connection to establish.
   * @param {string} [connectionDescription.url]
   *          URL of scope to connect to
   * @param {string} [connectionDescription.scopeId]
   *          id of scope to connect to. Will be used to generate a URL if
   *          given. URL property takes precedence.
   * @param {Object} connectionDescription.authDetails
   *          User's authentication details.
   * @param {Object} connectionDescription.lowVideoStream
   *          Defines the low quality video stream to be published (see the Video
   *          streams configuration section below).
   * @param {Object} connectionDescription.highVideoStream
   *          Defines the high quality video stream to be published (see the Video
   *          streams configuration section below).
   * @param {boolean} connectionDescription.autopublishVideo
   *          Flag defining whether local user's video stream should be automatically
   *          published upon successful connection
   * @param {boolean} connectionDescription.autopublishAudio
   *          Flag defining whether local user's audio stream should be
   *          automatically published upon successful connection
   */
  ADL.AddLiveService.prototype.connect = function (responder, connectionDescription) {
    var mName = 'connect(' + JSON.stringify(connectionDescription) + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);

//    Create the final connection descriptor passed to the plug-in
      var connDescr = {};
      ADL.Utils.merge(connDescr, SANE_DEFAULTS_CONN_DESCR);
      ADL.Utils.merge(connDescr, connectionDescription);

//    Sanitize the connection descriptor
      if (!_sanitizeConnectionDescriptor(responder, connDescr)) {
        return;
      }
      var self = this;
      var onConnUrl = function (finalDescr) {
            var scopeId = finalDescr.url.split('/')[1];
            var params = JSON.stringify(finalDescr);
            var resultAdapter = function () {
              try {
                ADL.BugReporting.postDevices(
                    scopeId, finalDescr.authDetails.userId);
              } catch (e) {
                Log.w('Failed to post devices. ' + JSON.stringify(e));
              }
              var connection = new ADL.MediaConnection(scopeId, finalDescr);
              self._activeConnections[scopeId] = connection;
              return connection;
            };
            responder.setResultAdapter(resultAdapter);
            Log.i('Connecting to Streamer with URL endpoint: ' + connDescr.url);
            self.nativeService.connect(responder, params);
          },
          onConnUrlErr = function () {
            responder.error(
                ADL.ErrorCodes.Communication.NETWORK_ERROR,
                'Failed to connect to AddLive self most likely due to ' +
                    'Internet outage or firewall blocking HTTP communication');
          };
      if (!connDescr.url) {
        var connUrlResponder = ADL.r(onConnUrl, onConnUrlErr);
        ADL.StreamerResolver.doResolve(connUrlResponder, connDescr);
      } else {
        onConnUrl(connDescr);
      }
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Disconnects previously established connection to the streaming server.
   *
   * #### Notifications
   *
   * Whenever AddLive Service detects that new user leaves particular scope
   * by terminating a connection to it, the
   * ADL.AddLiveServiceListener.onUserEvent method is being called on all
   * registered service listeners. In this case, the ADL.UserStateChangedEvent,
   * will have flag isConnected set to false. Other properties are undefined.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_SCOPE}<br/>
   *   With instance of plugin service is not connected to media scope with
   *   given id.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Disconnects previously established connection to the streaming
   *          server.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#connect
   * @see ADL.AddLiveServiceListener#onUserEvent
   * @see ADL.UserStateChangedEvent
   * @param {ADL.Responder} [responder]
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          id of media scope to disconnect
   **/
  ADL.AddLiveService.prototype.disconnect = function (responder, scopeId) {
    var mName = 'disconnect(' + scopeId + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      if (typeof responder === 'string') {
        //noinspection JSValidateTypes
        scopeId = responder;
        responder = ADL.createResponder();
      }
      var self = this;
      responder.setMethod(mName);
      responder.sendAERonError(true);
      responder.setResultAdapter(function () {
        Log.d('Connection successfully terminated. ' +
            'Disposing MediaConnection on JS side');
        var conn = self._activeConnections[scopeId];
        delete self._activeConnections[scopeId];
        conn._dispose();
      });
      if (!ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
          scopeId)) {
        return;
      }
      this.nativeService.disconnect(responder, scopeId);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Generic publish method - allows to start broadcasting to given scope media
   * of particular type with specified configuration (if required by the media
   * type)
   *
   * #### Notifications
   *
   * Whenever AddLive Service detects that user publishes or stops publishing
   * stream of particular media type, the
   * {@link ADL.AddLiveServiceListener#onMediaStreamEvent} method is being
   * called on all registered service listeners. In this case, the
   * {@link ADL.UserStateChangedEvent}, will have the
   * {@link ADL.UserStateChangedEvent#mediaType} property filled
   * with type of media which state was changed and the streaming status defined
   * in one of:
   *
   * - {@link ADL.UserStateChangedEvent#audioPublished}
   * - {@link ADL.UserStateChangedEvent#videoPublished}
   * - {@link ADL.UserStateChangedEvent#screenPublished}
   *
   * #### Possible Errors:
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_SCOPE}<br/>
   *   With instance of plugin service is not connected to media scope with
   *   given id.
   *
   * - {@link ADL.ErrorCodes.Media.INVALID_VIDEO_DEV}<br/>
   *   In case there was an error using currently selected video capture device
   *   (e.g. device in use by different application or just stopped working)
   *
   *  - {@link ADL.ErrorCodes.Media.INVALID_AUDIO_DEV}<br/>
   *   In case of error with initializing microphone.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Starts publishing media using already established connection.
   * @since 1.15.0.2
   * @see ADL.AddLiveService#connect
   * @see ADL.AddLiveService#unpublish
   * @see ADL.AddLiveService#getScreenCaptureSources
   * @see ADL.MediaType.AUDIO
   * @see ADL.MediaType.VIDEO
   * @see ADL.MediaType.SCREEN
   * @see ADL.AddLiveServiceListener#onMediaStreamEvent
   * @see ADL.UserStateChangedEvent
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          id of scope to which media broadcasting should be started
   * @param {string} what
   *          type of media to be published, may be one of:
   *          ADL.MediaType.AUDIO, ADL.MediaType.VIDEO, ADL.MediaType.SCREEN
   * @param {Object} [details]
   *          additional details describing how exactly media should be
   *          published. In current version, the details object is used only
   *          when publishing the ADL.MediaType.SCREEN media type.
   * @param {string} [details.windowId]
   *          id of the screen sharing source to be shared when publishing the
   *          SCREEN media type
   * @param {number} [details.nativeWidth]
   *          width of the component that will render the screen sharing sink
   *          on the remote end. AddLiveService uses this value to define the
   *          maximal width that will be down scaled before encoding the frame.
   */
  ADL.AddLiveService.prototype.publish =
      function (responder, scopeId, what, details) {
        var mName = 'publish(' + scopeId + ', ' + what + ', ' +
            JSON.stringify(details) + ')';
        try {
          if (details === undefined) {
            //noinspection JSValidateTypes
            details = '';
          }
          Log.d('Calling plugin method ' + mName);
          responder.setMethod(mName);
          this.nativeService.publish(responder, scopeId, what, details);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };

  /**
   * Generic unpublish method - stops publishing media stream of desired type
   * to given media scope.
   *
   *
   * #### Notifications
   *
   * Whenever AddLive Service detects that user publishes or stops publishing
   * stream of particular media type, the
   * {@link ADL.AddLiveServiceListener#onMediaStreamEvent} method is being
   * called on all registered service listeners. In this case, the
   * {@link ADL.UserStateChangedEvent}, will have the
   * {@link ADL.UserStateChangedEvent#mediaType} property filled with type of
   * media which state was changed and the streaming status defined in one of:
   *
   * - {@link ADL.UserStateChangedEvent#audioPublished}
   * - {@link ADL.UserStateChangedEvent#videoPublished}
   * - {@link ADL.UserStateChangedEvent#screenPublished}
   *
   *
   *
   * #### Possible Errors:
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_SCOPE}<br/>
   *   With instance of plugin service is not connected to media scope with
   *   given id.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs
   *
   * @summary Stops publishing media using already established connection.
   * @since 1.15.0.2
   * @see ADL.AddLiveService#connect
   * @see ADL.AddLiveService#publish
   * @see ADL.MediaType
   * @see ADL.AddLiveServiceListener#onMediaStreamEvent
   * @see ADL.UserStateChangedEvent
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          Id of media scope to stop publishing to.
   * @param {string} what
   *          Type of media to stop publishing.
   */
  ADL.AddLiveService.prototype.unpublish = function (responder, scopeId, what) {
    var methodString = 'unpublish(' + scopeId + ', ' + what + ')';
    try {
      Log.d('Calling plugin method ' + methodString);
      responder.setMethod(methodString);
      responder.sendAERonError(true);
      this.nativeService.unpublish(responder, scopeId, what);
    } catch (exception) {
      _reportJSError(methodString, exception, responder);
    }
  };

  /**
   * Sends an opaque message between peers connected to the media scope. It is
   * possible to send a message to single recipient only, by providing the 4th
   * optional targetUserId param. The remote peer can receive the message using
   * the {@link ADL.AddLiveServiceListener#onMessage} callback.
   *
   * #### Possible Errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sends an opaque message between to peers connected to the scope.
   * @since 1.15.0.1
   * @see ADL.AddLiveService#connect
   * @see ADL.AddLiveServiceListener#onMessage
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          Id of media scope in which message should be broadcasted
   * @param {string} message
   *          Message to be broadcasted. Please note that the maximal length of
   *          the message is 4046 8-bit characters. It means that depending on
   *          the text encoding it may be 2023 (for unicode) or less characters.
   * @param {Number} [targetUserId]
   *          Id of user to optionally send a direct message. User must be
   *          connected to given scope, if not, message will be simply dropped.
   */
  ADL.AddLiveService.prototype.sendMessage =
      function (responder, scopeId, message, targetUserId) {
        var method = 'broadcast(' + scopeId + ', ' + message + ', ' +
            targetUserId + ')';
        try {
          Log.d('Calling plugin method ' + method);
          responder.setMethod(method);
          responder.sendAERonError(true);
          ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
              scopeId);
          ADL.Utils.validate(responder, 'message|defined,string', message);

          if (targetUserId) {
            //noinspection JSCheckFunctionSignatures
            this.nativeService.broadcast(responder, scopeId, message, targetUserId);
          } else {
            //noinspection JSCheckFunctionSignatures
            this.nativeService.broadcast(responder, scopeId, message);
          }
        } catch (exception) {
          _reportJSError(method, exception, responder);
        }
      };

  /**
   * Restricts the remote feeds received by current user, to only those sent
   * by users with ids given in the senders array. Please note that at this
   * version only the video reception can be constrained. If mediaType is set to
   * {@link ADL.MediaType.AUDIO}, the method will return an error with error
   * code {@link ADL.ErrorCodes.Logic.INVALID_ARGUMENT}.
   *
   * @summary Restricts the remote feeds received by current user.
   * @since 2.0.1
   * @see ADL.MediaType
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          Id of media scope in the reception should be constrained
   * @param {string} mediaType
   *          Type of media to be constrained
   * @param {Array} senders
   *          List of user ids from which current user should receive media
   *          feeds.
   */
  ADL.AddLiveService.prototype.setAllowedSenders =
      function (responder, scopeId, mediaType, senders) {
        var sendersString = JSON.stringify(senders);
        var method = 'setAllowedSenders(' + scopeId + ', ' +
            sendersString + ')';
        try {
          Log.d('Calling plugin method ' + method);
          responder.setMethod(method);
          if (mediaType === ADL.MediaType.AUDIO) {
            Log.w('Got request to set allowed senders for audio stream');
            responder.error(ADL.ErrorCodes.Logic.INVALID_ARGUMENT,
                'setAllowedSenders is not supported for audio stream');
            return;
          }
          responder.sendAERonError(true);
          ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
              scopeId);
          ADL.Utils.validate(responder, 'senders|defined', senders);
          this.nativeService.setAllowedSenders(responder, scopeId,
              sendersString);
        } catch (exception) {
          _reportJSError(method, exception, responder);
        }
      };

  /**
   * Gets current volume level of the audio output device. The result is an
   * integer with values in range 0-255.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Enables/Disables the speechActivity feature for the given session
   * @since 3.0.0.0
   * @see ADL.AddLiveServiceListener#onSpeechActivity
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.monitorSpeechActivity =
      function (responder, scopeId, enable) {
        var method = 'monitorSpeechActivity(' + scopeId + ', ' +
            enable + ')';
        try {
          Log.d('Calling plugin method ' + method);
          responder.setMethod(method);
          responder.sendAERonError(true);
          ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
              scopeId);
          ADL.Utils.validate(responder, 'enable|defined', enable);
          this.nativeService.monitorSpeechActivity(responder, scopeId,
              enable);
        } catch (exception) {
          _reportJSError(method, exception, responder);
        }
      };

//  TODO tell something about how it works on particular OS.
  /**
   * Gets current volume level of the audio output device. The result is an
   * integer with values in range 0-255.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Gets current volume level of the audio output device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setSpeakersVolume
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getSpeakersVolume = function (responder) {
    var mName = 'getSpeakersVolume()';
    try {
      Log.d('Calling plugin method getSpeakersVolume()');
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getSpeakersVolume(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Sets current volume level of the audio output device.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets current volume level of the audio output device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getSpeakersVolume
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {Number} volume
   *          integer containing new volume level (unsigned int in range 0-255)
   **/
  ADL.AddLiveService.prototype.setSpeakersVolume = function (responder, volume) {
    var mName = 'setSpeakersVolume(' + volume + ')';
    try {
      Log.d('Calling plugin method setSpeakersVolume(' + volume + ')');
      responder.setMethod(mName);
      responder.sendAERonError(true);
      ADL.Utils.validate(responder, 'volume|defined,number', volume);
      this.nativeService.setSpeakersVolume(responder, volume);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Gets current gain level of the audio input device. Note that this method
   * should be used only if the Automatic Gain Control is disabled. Using it
   * with AGC enabled doesn't cause ane bugs, but is pointless as the AGC
   * sub-module of audio engine will change the gain almost instantly. It may
   * only cause negative experience for the user (e.g. echo or noise). The value
   * returned by this method is an integer with values in range 0-255.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Gets current gain level of the audio input device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setMicrophoneVolume
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   **/
  ADL.AddLiveService.prototype.getMicrophoneVolume = function (responder) {
    var mName = 'getMicrophoneVolume()';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.getMicrophoneVolume(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Sets gain level of the audio input device. The value
   * returned by this method is an integer with values in range 0-255.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets gain level of the audio input device.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#getMicrophoneVolume
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {number} volume
   *          Volume to be set
   **/
  ADL.AddLiveService.prototype.setMicrophoneVolume = function (responder, volume) {
    var mName = 'setMicrophoneVolume(' + volume + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      ADL.Utils.validate(responder, 'volume|defined,number', volume);
      this.nativeService.setMicrophoneVolume(responder, volume);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Activates or deactivates monitoring of the audio input device activity -
   * speech level. The level will be reported using callback
   * {@link ADL.AddLiveServiceListener#onMicActivity}
   * method each 300ms. Monitoring mic activity is resource intensive process,
   * it is highly recommended to use it only when needed (e.g. when rendering
   * audio capture device selection form).
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Activates or deactivates monitoring of the audio mic activity.
   * @since 1.0.0.0
   * @see ADL.AddLiveServiceListener#micActivity
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {boolean} enabled
   *          Flag defining whether monitoring of audio capture device activity
   *          should be enabled or disabled.
   */
  ADL.AddLiveService.prototype.monitorMicActivity = function (responder, enabled) {
    var mName = 'monitorMicActivity(' + enabled + ')';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      ADL.Utils.validate(responder, 'enabled|defined,bool', enabled);
      this.nativeService.monitorMicActivity(responder, enabled);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };


  /**
   * Starts measuring media statistics for media connection to given scope.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_ARGUMENT}<br/>
   *   Invalid interval given - negative value.
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Starts measuring media statistics for media connection to given
   *          scope.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#stopMeasuringStatistics
   * @see ADL.AddLiveServiceListener#newVideoStats
   * @see ADL.AddLiveServiceListener#newAudioStats
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          id of media scope to measure media stats of
   * @param {Number} interval
   *          stats refresh interval, in seconds
   */
  ADL.AddLiveService.prototype.startMeasuringStatistics =
      function (responder, scopeId, interval) {
        var mName = 'startMeasuringStatistics(' + scopeId + ', ' + interval + ')';
        try {
          Log.d('Calling plugin method ' + mName);
          responder.setMethod(mName);
          responder.sendAERonError(true);
          ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
              scopeId);
          ADL.Utils.validate(responder, 'interval|defined,number', interval);
          this.nativeService.startMeasuringStatistics(responder, scopeId, interval);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };

  /**
   * Stops measuring media statistics for media connection to given scope.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Stops measuring media statistics for selected connection.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#stopMeasuringStatistics
   * @see ADL.AddLiveServiceListener#newVideoStats
   * @see ADL.AddLiveServiceListener#newAudioStats()
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} scopeId
   *          id of media scope to measure media stats of
   */
  ADL.AddLiveService.prototype.stopMeasuringStatistics =
      function (responder, scopeId) {
        var mName = 'stopMeasuringStatistics(' + scopeId + ')';
        try {
          Log.d('Calling plugin method ' + mName);
          responder.setMethod(mName);
          responder.sendAERonError(true);
          ADL.Utils.validate(responder, 'scopeId|defined,string,nonEmpty',
              scopeId);

          this.nativeService.stopMeasuringStatistics(responder, scopeId);
        } catch (exception) {
          _reportJSError(mName, exception, responder);
        }
      };

  /**
   * Starts playing a test sound. The playing will stop automatically after
   * reaching end of the test wave file or may be stopped by calling
   * stopPlayingTestSound method. The startPlayingTestSound method is mostly
   * useful when selecting audio output device and setting volume levels - user
   * can test the device and desired levels.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *   In case of this method, it may mean that the wave file used to playing
   *   the test sound is missing thus the plugin installation is somehow
   *   corrupted.
   *
   * @summary Starts playing a test sound.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#stopPlayingTestSound
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   */
  ADL.AddLiveService.prototype.startPlayingTestSound = function (responder) {
    var mName = 'startPlayingTestSound()';
    try {
      Log.d('Calling plugin method ' + mName);
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.startPlayingTestSound(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Stops playing test sound.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Stops playing test sound.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#startPlayingTestSound
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   */
  ADL.AddLiveService.prototype.stopPlayingTestSound = function (responder) {
    var mName = 'stopPlayingTestSound()';
    try {
      Log.d('Calling plugin method stopPlayingTestSound()');
      responder.setMethod(mName);
      responder.sendAERonError(true);
      this.nativeService.stopPlayingTestSound(responder);
    } catch (exception) {
      _reportJSError(mName, exception, responder);
    }
  };

  /**
   * Gets value of a service property. Advanced use only, check the
   * Service Properties section.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Logic.INVALID_JS_PARAMETER_KEY}<br/>
   *   Invalid property key was given (empty or unknown by the service).
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Gets value of a service property.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#setSmProperty
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} name
   *          name of the property to get value of
   */
  ADL.AddLiveService.prototype.getProperty = function (responder, name) {
    var method = 'getSmProperty(' + name + ')';
    try {
      Log.d('Calling plugin method ' + method);
      responder.setMethod(method);
      ADL.Utils.validate(responder, 'name|defined,string,nonEmpty', name);

      //noinspection JSCheckFunctionSignatures
      this.nativeService.getSmProperty(responder, name);
    } catch (exception) {
      _reportJSError(method, exception, responder);
    }
  };

  /**
   * Sets value of a service property. Advanced use only, check the
   * Service Properties section.
   *
   * #### Possible errors:
   *
   * - {@link ADL.ErrorCodes.Common.DEFAULT_ERROR}<br/>
   *   If an unexpected, internal error occurs.
   *
   * @summary Sets value of a service property.
   * @since 1.0.0
   * @see ADL.AddLiveService#getSmProperty()
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   * @param {string} name
   *          name of the property to set value of.
   * @param {string|Number|boolean} value
   *          value of the property to be set.
   */
  ADL.AddLiveService.prototype.setProperty = function (responder, name, value) {
    var method = 'setSmProperty(' + name + ', ' + value + ')';
    try {
      Log.d('Calling plugin method ' + method);
      responder.setMethod(method);
      ADL.Utils.validate(responder, 'name|defined,string,nonEmpty', name);
      ADL.Utils.validate(responder, 'value|defined', name);
      //noinspection JSCheckFunctionSignatures
      this.nativeService.setSmProperty(responder, name, value);
    } catch (exception) {
      _reportJSError(method, exception, responder);
    }
  };

  /**
   * Retrieves the tag of log file used by the service instance.
   * To obtain the content of the log file, use the
   * ADL.AddLivePlugin.getLogFileTag method.
   *
   * @summary Retrieves the tag of log file used by the service instance.
   * @since 1.15.0.0
   * @private
   *
   * @param {ADL.Responder} responder
   *          Responder object. See calling AddLive plug-in service methods.
   */
  ADL.AddLiveService.prototype.getLogFileTag = function (responder) {
    var method = 'getLogFileTag()';
    try {
      Log.d('Calling plugin method ' + method);
      responder.setMethod(method);
      this.nativeService.getLogFileTag(responder);
    } catch (exception) {
    }
  };

  /**
   * @private
   */
  ADL.AddLiveService.prototype.echo = function (responder, value) {
    //noinspection JSUnresolvedFunction
    this.nativeService.echo(responder, value);
  };

  /**
   * @private
   */
  ADL.AddLiveService.prototype.echoNotification = function (responder, value) {
    //noinspection JSUnresolvedFunction
    this.nativeService.echoNotification(responder, value);
  };

  function _sanitizeConnectionDescriptor(responder, connDescriptor) {
    for (var i = 0; i < _CONN_DESCR_SANITIZERS.length; i++) {
      if (!_CONN_DESCR_SANITIZERS[i](responder, connDescriptor)) {
        return false;
      }
    }
    return true;
  }


  /**
   * Makes sure that the connection descriptor URL is properly defined.
   *
   * @param responder
   * @param connectionDescription
   * @return {Boolean}
   * @private
   */
  function _sanitizeConnDescriptorURL(responder, connectionDescription) {
    if (!connectionDescription.url && !connectionDescription.scopeId) {
      responder.error(
          ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT,
          'Cannot connect as neither scopeId or url not given in the ' +
              'connection descriptor.');
      return false;
    } else {
      return true;
    }
  }

  var _CONN_DESCR_SANITIZERS = [
    _sanitizeConnDescriptorURL
  ];

  /**
   * Reports a JavaScript error to given responder
   *
   * @param {string} method
   *          Name of method that failed
   * @param {object} exception
   *          Exception object
   * @param {ADL.Responder} responder
   *          Responder to report error to
   * @private
   */
  function _reportJSError(method, exception, responder) {
    var exceptionFlat = 'Unknown exception';
    try {
      exceptionFlat = JSON.stringify(exception);
      if (exception.stack) {
        exceptionFlat += '\n' + exception.stack;
      }
    } catch (e) {
      Log.e('Failed to stringify exception');
    }
    try {
      var msg = 'Got a JavaScript error calling method ' + method + ': ' +
          exceptionFlat;
      Log.e(msg);
      var errCode = exception.code || -1;
      ADL.BugReporting.reportBug(ADL.r(), {
        type:'AER-JS',
        cause:msg,
        /*jshint camelcase:false*/
        error_code:errCode
      });
      responder.error(ADL.ErrorCodes.Logic.INTERNAL, msg);

    } catch (e) {
      Log.e('Error in report js error method');
    }
  }

}());
/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * AddLive Service notifications handling facility.
 *
 * @author Tadeusz Kozak
 * @date 28-05-2012 20:04
 */

(function () {
  'use strict';
  /**
   * Defines all methods expected by the AddLiveService to dispatch
   * notifications.
   *
   * @summary Defines all methods expected by the AddLiveService to dispatch
   *          notifications.
   * @since 1.0.0.0
   * @see ADL.AddLiveService#addServiceListener
   * @constructor
   */
  ADL.AddLiveServiceListener = function () {
  };

  ADL.AddLiveServiceListener.prototype = {

    /**
     * Called to notify about change of spatial resolution of video feed, produced
     * by video sink with given id.
     *
     * @summary Notifies about change of spatial resolution of video feed
     * @since 1.15.0.0
     * @see ADL.VideoFrameSizeChangedEvent
     * @param {ADL.VideoFrameSizeChangedEvent} e
     *          Event object describing the change event.
     */
    onVideoFrameSizeChanged:function (e) {
      ADL.Log.d('Got video frame size changed event: ' + JSON.stringify(e));
    },

    /**
     * Reports speech activity within given scope.
     *
     * @summary Notifies the speech activity of the users connected to the session
     * @since 3.0.0.0
     * @see ADL.SpeechActivityEvent
     * @param {ADL.SpeechActivityEvent} e
     *          Event object describing the change event.
     */
    onSpeechActivity:function (e) {
      ADL.Log.w('Got unhandled speech activity event event: ' + JSON.stringify(e));
    },


    /**
     * Called to notify about lost connection for scope with given id.
     *
     * @summary Notifies about lost connection for scope with given id.
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @param {ADL.ConnectionLostEvent} e
     *          Object describing the connection lost event.
     */
    onConnectionLost:function (e) {
      ADL.Log.w('Got unhandled connection lost event: ' + JSON.stringify(e));
    },


    /**
     * Called to notify about connectivity status change of a remote
     * participant. It is called whenever new remote participant joins media scope
     * or present one just left it.
     *
     * @summary Notifies about connectivity status change of a remote
     *          participant.
     * @since 1.15.0.0
     * @see ADL.AddLiveServiceListener#onVideoEvent
     * @see ADL.AddLiveServiceListener#onAudioEvent
     * @see ADL.UserStateChangedEvent
     * @param {ADL.UserStateChangedEvent} e
     *      Event describing the change in user connectivity status.
     */
    onUserEvent:function (e) {
      ADL.Log.w('Got unhandled user event: ' + JSON.stringify(e));
    },

    /**
     * Called to notify about media streaming status change for given remote user.
     * Streaming status change may mean either that user started or stopped
     * publishing the stream of given media (audio, video, screen).
     *
     * @summary Notifies about media streaming status change for given remote user.
     * @since 1.15.0.0
     * @see ADL.AddLiveService#publish
     * @see ADL.AddLiveService#unpublish
     * @see ADL.AddLiveServiceListener#onUserEvent
     * @see ADL.AddLiveServiceListener#onAudioEvent
     * @param {ADL.UserStateChangedEvent} e
     *          Event describing the change in remote peers video streaming status.
     */
    onMediaStreamEvent:function (e) {
      ADL.Log.w('Got unhandled media stream event event: ' + JSON.stringify(e));
    },


    /**
     * Reports audio capture device activity (a.k.a. speech level).
     *
     * @summary Reports audio capture device activity (a.k.a. speech level).
     * @since 1.0.0.0
     * @see ADL.AddLiveService#monitorMicActivity
     * @param {ADL.MicActivityEvent} e
     *          Event describing the activity change;
     */
    onMicActivity:function (e) {
      ADL.Log.d('Got unhandled mic activity event: ' + JSON.stringify(e));
    },


    /**
     * Reports changes in audio capture device gain, done by the
     * Automatic Gain Control subsystem.
     *
     * @summary Reports changes in audio capture device gain.
     * @since 1.0.0.0
     * @param {ADL.MicGainEvent} e
     *          Event describing the change in gain level.
     */
    onMicGain:function (e) {
      ADL.Log.d('Got unhandled mic gain event: ' + JSON.stringify(e));
    },


    /**
     * Callback reporting that there was a change in hardware devices
     * configuration - it indicates that device was plugged or unplugged from
     * user's computer.
     *
     * @summary Notifies a change in hardware devices configuration.
     * @since 1.0.0.0
     * @param {ADL.DeviceListChangedEvent} e
     *          Event describing the change.
     */
    onDeviceListChanged:function (e) {
      ADL.Log.d('Got unhandled device list changed event: ' + JSON.stringify(e));
    },


    /**
     * Reports availability of new video stream statistics for connection to media
     * scope with given id.
     *
     * @summary Reports availability of new video stream statistics.
     * @since 1.0.0.0
     * @see ADL.AddLiveService#startMeasuringStatistics
     * @param {ADL.MediaStatsEvent} e
     *          Event object
     */
    onMediaStats:function (e) {
      ADL.Log.d('Got unhandled media stats event: ' + JSON.stringify(e));
    },

    /**
     * Reports new message sent from a remote peer.
     *
     * @summary Reports new message sent from a remote peer.
     * @since 1.15.0.0
     * @see ADL.AddLiveService#sendMessage
     * @see ADL.MessageEvent
     * @param {ADL.MessageEvent} e
     *          Event describing the message received.
     */
    onMessage:function (e) {
      ADL.Log.w('Got unhandled message event: ' + JSON.stringify(e));
    },

    /**
     * Informs about change in media connection type for given scope and media
     * stream. It's purpose is solely informational.
     *
     * @summary Informs about change in media connection type.
     * @since 1.15.0.0
     * @see ADL.MediaConnTypeChangedEvent
     * @param {ADL.MediaConnTypeChangedEvent} e
     *          Event describing the change.
     */
    onMediaConnTypeChanged:function (e) {
      ADL.Log.d('Got unhandled media conn type changed event: ' +
          JSON.stringify(e));
    },

    /**
     * Informs about a change of media quality issue state. The media quality
     * issue may just became active (user starts experiencing it) or may just
     * became inactive (issue was resolved by user action or organically).
     * In the first case, the issue will be reported with the
     * {@link ADL.MediaIssueEvent.isActive} property set to <code>true</code>,
     * in the latter, the property will be set to <code>false</code>.
     *
     * @summary Informs about a change of media quality issue state.
     * @since 2.1.9
     * @see ADL.MediaIssueEvent
     * @param {ADL.MediaIssueEvent} e
     *          Event describing the change.
     */
    onMediaIssue:function (e) {
      ADL.Log.d('Got unhandled media issue event: ' + JSON.stringify(e));
    }
  };


  /**
   * Event corresponding to change of size of video sink.
   *
   * @summary Event corresponding to change of size of video sink.
   * @since 1.0.0.0
   * @param {string} sinkId
   *          Id of video sink which resolution has changed.
   * @param {Number} width
   *          New width of the feed.
   * @param {Number} height
   *          New width of the feed.
   * @constructor
   */
  ADL.VideoFrameSizeChangedEvent = function (sinkId, width, height) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'VideoFrameSizeChangedEvent';

    /**
     * Id of video sink which resolution has changed.
     *
     *
     * @type {string}
     */
    this.sinkId = sinkId;

    /**
     * New width of the video feed provided by the sink.
     *
     *
     * @type {Number}
     */
    this.width = width;

    /**
     * New height of the video feed provided by the sink.
     *
     *
     * @type {Number}
     */
    this.height = height;
  };


  /**
   * Reports speech activity within given scope.
   *
   * @summary Event corresponding to change of size of video sink.
   * @since 3.0.0.0
   * @param {array} activeSpeakers
   *          A list of active speakers. The list is represented as an array of
   *		  user identifiers.
   * @param {string} scopeId
   *          An id of scope to which this event refers.
   * @param {object} speechActivity
   *          A speech activity list. List contains dictionaries with two
   *		  properties: userId and activity. The speech level is an
   *		  normalised integer in range [0..255].
   * @constructor
   */
  ADL.SpeechActivityEvent = function (activeSpeakers, scopeId, speechActivity) {
    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'SpeechActivityEvent';

    /**
     * user id's of the current users talking.
     *
     *
     * @type {string}
     */
    this.activeSpeakers = activeSpeakers;

    /**
     * scopeId of the session.
     *
     *
     * @type {string}
     */
    this.scopeId = scopeId;

    // Array containing the object for each user.
	var speechActivityArray = [];

  	// Speech activity for each user connected to the session.
   	$.each(speechActivity.split("|"), function(e, item){
        var ev = jQuery.parseJSON(item);

        // Create the object for the user with it's values
	    var obj = {
	        userId: ev.userId,
	        activity: ev.activity
	    };

	    // Push it into the array of objects.
    	speechActivityArray.push(obj);
   	});

    /**
     * user id's and it's activity values.
     *
     *
     * @type {object}
     */
    this.speechActivity = speechActivityArray;
  };

  /**
   * Class describing connection lost event.
   *
   * @summary Class describing connection lost event.
   * @since 1.15.0.0
   * @param {string} scopeId
   *          id of scope which lost connection
   * @param {Number} errCode
   *          error code identifying the cause. Possible values are:
   *          - SMERR_COMM_REMOTE_END_DIED (2006)
   *            Indicates that the management connection failed to communicate
   *            with the streamer. This may be due to user's computer losing
   *            Internet connection or problems with the streaming server.
   * @param {string} errMessage
   *          additional human readable error message describing in a more detail
   *          cause of the problem.
   * @constructor
   */
  ADL.ConnectionLostEvent = function (scopeId, errCode, errMessage) {
    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'ConnectionLostEvent';

    /**
     * Id of scope to which this event refers.
     *
     *
     * @type {string}
     */
    this.scopeId = scopeId;

    /**
     * Error code identifying the cause of connection loss.
     *
     * @see ADL.ErrorCodes.Communication
     *
     * @type {Number}
     */
    this.errCode = errCode;

    /**
     * Additional, human-readable error message.
     *
     *
     * @type {string}
     */
    this.errMessage = errMessage;
  };


  /**
   * Event class describing change in media streaming status of a remote peer.
   * This includes: user joining media scope, user leaving media scope, user
   * publishing or stop publishing any of possible media streams.
   *
   * @summary Event class describing change in media streaming status of a
   *          remote peer.
   * @since 1.15.0.0
   * @see ADL.AddLiveServiceListener#onUserEvent
   * @see ADL.AddLiveServiceListener#onMediaStreamEvent
   * @param {string} scopeId
   *          Id of media scope to which this event corresponds.
   * @param {Object} userDetails
   *          Describes most recent state of the user state.
   * @param {string=} mediaType
   *          Type of media to which this event corresponds. Might be undefined if
   *          this event is related to the user connection status.
   * @constructor
   */
  ADL.UserStateChangedEvent = function (scopeId, userDetails, mediaType) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'UserStateChangedEvent';

    /**
     * Id of scope to which this event refers.
     *
     *
     * @type {string}
     */
    this.scopeId = scopeId;

    /**
     * Id of the user to which this events refer.
     *
     * @type {Number}
     */
    this.userId = userDetails.id || userDetails.userId;


    /**
     * Type of media to which this event refer. Undefined if it's used to notify
     * about remote user's connection state changed.
     *
     * @see ADL.MediaType
     *
     * @type {string|undefined}
     */
    this.mediaType = mediaType;

    /**
     * Flag defining whether the remote user joins or leaves the media scope.
     *
     *
     * @type {boolean}
     */
    this.isConnected = userDetails.isConnected;

    /**
     * Flag defining whether the remote user published audio stream or not.
     *
     *
     * @type {boolean}
     */
    this.audioPublished = userDetails.audioPublished;

    /**
     * Flag defining whether the remote user published video stream or not.
     *
     *
     * @type {boolean}
     */
    this.videoPublished = userDetails.videoPublished;

    /**
     * Flag defining whether the remote user published screen sharing stream or
     * not.
     *
     *
     * @type {boolean}
     */
    this.screenPublished = userDetails.screenPublished;

    /**
     * The id of the video sink which should be used to render remote user's
     * video feed. Set only if the __videoPublished__ is true.
     *
     *
     * @type {string}
     */
    this.videoSinkId = userDetails.videoSinkId;

    /**
     * The id of the video sink which should be used to render remote user's
     * screen sharing feed. Set only if the __videoPublished__ is true.
     *
     *
     * @type {string}
     */
    this.screenSinkId = userDetails.screenSinkId;
  };

  /**
   * Describes change in local audio capture device activity change.
   *
   * @summary Describes change in local audio capture device activity change.
   * @since 1.15.0.0
   * @see ADL.AddLiveServiceListener#onMicActivity
   * @param {Number} activity integer with value in range 0-255 indicating current speech
   *                 level (higher the value is, the louder input was received
   *                 by the microphone)
   * @constructor
   */
  ADL.MicActivityEvent = function (activity) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'MicActivityEvent';

    /**
     * New microphone activity. Value in range 0-255.
     *
     *
     * @type {Number}
     */
    this.activity = activity;
  };

  /**
   * Describes a change in audio capture device gain level.
   *
   * @summary Describes a change in audio capture device gain level.
   * @since 1.15.0.0
   * @see ADL.AddLiveServiceListener#onMicGain
   * @param {Number} gain
   *          Defines new gain level. It's values are in range 0-255.
   * @constructor
   */
  ADL.MicGainEvent = function (gain) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'MicGainEvent';

    /**
     * New microphone gain. Value in range 0-255.
     *
     *
     * @type {Number}
     */
    this.gain = gain;
  };

  /**
   * Event describing the change in hardware devices configuration.
   *
   * @summary Event describing the change in hardware devices configuration.
   * @since 1.15.0.0
   * @param {boolean} audioIn
   *          Flag defining whether there was a change in audio capture devices
   *          list.
   * @param {boolean} audioOut
   *          Flag defining whether there was a change in audio output devices
   *          list.
   * @param {boolean} videoIn
   *          Flag defining whether there was a change in video capture devices
   *          list.
   * @constructor
   */
  ADL.DeviceListChangedEvent = function (audioIn, audioOut, videoIn) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'DeviceListChangedEvent';

    /**
     * Flag defining whether there was a change in audio capture devices
     * list.
     *
     *
     * @type {boolean}
     */
    this.audioInChanged = audioIn;


    /**
     * Flag defining whether there was a change in audio output devices
     * list.
     *
     *
     * @type {boolean}
     */
    this.audioOutChanged = audioOut;

    /**
     * Flag defining whether there was a change in video capture devices
     * list.
     *
     *
     * @type {boolean}
     */
    this.videoInChanged = videoIn;
  };


  /**
   * Event describing new media stats related to media stream of a particular
   * type and (optionally) a remote user.
   *
   * @summary Event describing media stream statistics.
   * @since 1.15.0.0
   * @see ADL.AddLiveServiceListener#onMediaStats
   * @param {string} scopeId
   *          Id of scope in context of which stats were published
   * @param {string} mediaType
   *          Type of media described by the stats
   * @param {Object} stats
   *          object containing the detailed statistics.
   * @param {Number=} remoteUserId
   *          Optional identifier of remote user in context of which stats were
   *          published. Should be omitted if stats describe state of up-link.
   * @constructor
   */
  ADL.MediaStatsEvent = function (scopeId, mediaType, stats, remoteUserId) {
    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'MediaStatsEvent';

    /**
     * Id of scope to which this event refers.
     *
     *
     * @type {string}
     */
    this.scopeId = scopeId;

    /**
     * Type of media to which this event refer. Undefined if it's used to notify
     * about remote user's connection state changed.
     *
     * @see ADL.MediaType
     *
     * @type {string}
     */
    this.mediaType = mediaType;

    /**
     * The stats object.
     *
     *
     * @type {Object}
     */
    this.stats = stats;

    /**
     * Id of remote users to which stats refer to. Undefined if stats describes
     * the uplink channel.
     *
     *
     * @type {Number|undefined|null}
     */
    this.remoteUserId = remoteUserId;
  };

  /**
   * Describes a new message sent from a remote peer.
   *
   * @summary Describes a new message sent from a remote peer.
   * @since 1.15.0.0
   * @see ADL.AddLiveService#sendMessage
   * @see ADL.AddLiveServiceListener#onMessage
   * @param {Number} srcUserId
   *          Id of user who sent the message.
   * @param {string} data
   *          Message data.
   * @constructor
   */
  ADL.MessageEvent = function (srcUserId, data) {
    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'MessageEvent';

    /**
     * Id of user who send the message.
     *
     *
     * @type {Number}
     */
    this.srcUserId = srcUserId;

    /**
     * Message data.
     *
     *
     * @type {string}
     */
    this.data = data;
  };

  /**
   * Describes a change in a media connection type for a given media scope and
   * a media type.
   *
   * @summary Describes a change in a media connection type.
   * @since 1.15.0.0
   * @param {string} scopeId
   *          scope for which media connection type changed occurred.
   * @param {string} mediaType
   *          Media type for which connection type changed. It can be either
   *          'audio', 'video' or 'screen'
   * @param {string} connectionType
   *          Describes the new connection type. It can be one of:
   *
   *          - MEDIA_TRANSPORT_TYPE_NOT_CONNECTED
   *
   *            Media transport not connected at all
   *
   *          - MEDIA_TRANSPORT_TYPE_UDP_RELAY
   *
   *            Media stream is sent/received using RTP/UDP, with
   *            help of relay server
   *
   *          - MEDIA_TRANSPORT_TYPE_UDP_P2P
   *
   *            Media stream is sent/received using RTP/UDP,
   *            directly to and from remote participant
   *
   *          - MEDIA_TRANSPORT_TYPE_TCP_RELAY
   *
   *            Media stream is sent/received using RTP/TCP, with
   *            help of relay server
   *
   * @constructor
   */
  ADL.MediaConnTypeChangedEvent = function (scopeId, mediaType, connectionType) {

    /**
     * The type of this event.
     *
     *
     * @type {string}
     */
    this.type = 'MediaConnTypeChangedEvent';

    /**
     * Id of scope to which this event refers.
     *
     *
     * @type {string}
     */
    this.scopeId = scopeId;

    /**
     * Type of media to which this event refer. Undefined if it's used to notify
     * about remote user's connection state changed.
     *
     * @see ADL.MediaType
     *
     * @type {string}
     */
    this.mediaType = mediaType;

    /**
     * New type of media connection established.
     *
     *
     * @type {string}
     */
    this.connectionType = connectionType;
  };

  /**
   * Event dispatched whenever AddLive service detects issues with media
   * quality.
   *
   * @summary Describes media quality issue.
   * @since 2.1.9
   * @param e nativeEvent
   * @see ADL.AddLiveServiceListener#onMediaIssue
   * @constructor
   */
  ADL.MediaIssueEvent = function (e) {

    /**
     * Id of scope to which this event refers.
     *
     *
     * @type {String}
     */
    this.scopeId = e.scopeId;

    //noinspection JSAccessibilityCheck
    /**
     * Type of media to which this event refer. Undefined if it's used to notify
     * about remote user's connection state changed.
     *
     * @see ADL.MediaType
     *
     * @type {String}
     */
    this.mediaType = ADL.MediaType._fromInt(e.mediaType);

    /**
     * Boolean flag defining, whether the issue just became active (user
     * experiences it now) or inactive (user stopped experiencing it).
     *
     * @type {Boolean}
     */
    this.isActive = e.isActive;

    /**
     * Numeric identifier distinguishing exactly type of issue.
     * @type {String}
     * @see ADL.MediaIssueCodes
     */
    this.issueCode = ADL.MediaIssueCodes._fromInt(e.issueCode);

    /**
     * Additional, human-friendly message.
     *
     * @type {String}
     */
    this.message = e.message;

    /**
     * Id of a remote user affected by the issue. Used when reporting issues
     * specific to reception of feeds from a particular remote peer due to the
     * peer's problems.
     *
     * Defined only in case of notifications related to remote peers.
     *
     * @type {Number}
     */
    this.affectedUserId = e.userId;
  };
}());/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 */

/**
 * @fileoverview
 * Single class source - contains definition of the AddLiveService class.
 *
 * @author Tadeusz Kozak
 * @date 5/1/13 10:46 AM
 */

(function (w) {
  'use strict';

  // Imports
  var ADL = w.ADL,
      Log = null,
      Utils = null;

  var appId, containerId, trackingEndpoint;

  /**
   *
   * @private
   * @enum {String}
   */
  var TrackableAction = {

    INSTALLATION_STARTED:'install_request',

    INSTALLATION_COMPLETE:'install_complete',

    INSTALLATION_REJECTED:'install_rejected',

    UPDATE_STARTED:'update_started',

    UPDATE_COMPLETE:'update_complete',

    UPDATE_ERROR:'update_complete'


  };

  function init(options, cId) {
    // Lazy loading
    Log = ADL.Log;
    Utils = ADL.Utils;

    Log.d('Initializing the AddLiveTracker');
    appId = options.applicationId;
    trackingEndpoint = options.trackingEndpoint;
    containerId = cId;
  }

  function trackAction(action) {
    Log.d('Tracking action: ' + action);
    var trackingGif = document.createElement('img');
    trackingGif.src = trackingEndpoint +
        '?application_id=' + appId +
        '&action=' + action;
    var container = document.getElementById(containerId);
    container.appendChild(trackingGif);
  }


  // Exports
  ADL.Tracker = {
    init:init,
    trackAction:trackAction
  };
  ADL.TrackableAction = TrackableAction;

}(window));/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 12.02.13 11:57
 */


(function () {
  'use strict';

  /**
   * AddLive Service Listener Adapter interface. Defines the callback API
   * used by the AddLive service to notify the JavaScript application about
   * various global events.
   *
   * @summary AddLive Service Listener Adapter interface.
   * @param {ADL.AddLiveServiceListener} listener
   * @private
   * @constructor
   */
  function ADLServiceListenerAdapter(listener) {
    this.listener = listener;
  }

  ADLServiceListenerAdapter.prototype = {

    videoFrameSizeChanged:function (sinkId, width, height) {
      var l = this.listener;
      _wrapForException(function () {
        l.onVideoFrameSizeChanged(
            new ADL.VideoFrameSizeChangedEvent(sinkId, width, height));
      }, 'videoFrameSizeChanged');
    },
    onSpeechActivity:function (activeSpeakers, scopeId, speechActivity) {
      try {
        this.listener.onSpeechActivity(
        	new ADL.SpeechActivityEvent(
        		activeSpeakers,
        		scopeId,
        		speechActivity));
      } catch (e) {
        ADL.Log.w('Error in user defined onSpeechActivity event handler');
      }
    },
    connectionLost:function (scopeId, errCode, errMessage) {
      var l = this.listener;
      _wrapForException(function () {
        l.onConnectionLost(
            new ADL.ConnectionLostEvent(scopeId, errCode, errMessage));
      }, 'videoFrameSizeChanged');

    },
    onUserEvent:function (scopeId, userDetails) {
      var l = this.listener;
      _wrapForException(function () {
        l.onUserEvent(
            new ADL.UserStateChangedEvent(scopeId, userDetails));
      }, 'videoFrameSizeChanged');
    },
    onVideoEvent:function (scopeId, userDetails) {
      var l = this.listener;
      _wrapForException(function () {
        l.onMediaStreamEvent(
            new ADL.UserStateChangedEvent(
                scopeId,
                userDetails,
                ADL.MediaType.VIDEO)
        );
      }, 'videoFrameSizeChanged');
    },
    onAudioEvent:function (scopeId, userDetails) {
      var l = this.listener;
      _wrapForException(function () {
        l.onMediaStreamEvent(
            new ADL.UserStateChangedEvent(
                scopeId,
                userDetails,
                ADL.MediaType.AUDIO)
        );
      }, 'videoFrameSizeChanged');
    },
    onScreenEvent:function (scopeId, userDetails) {
      var l = this.listener;
      _wrapForException(function () {
        l.onMediaStreamEvent(
            new ADL.UserStateChangedEvent(
                scopeId,
                userDetails,
                ADL.MediaType.SCREEN)
        );
      }, 'videoFrameSizeChanged');
    },
    micActivity:function (activity) {
      try {
        this.listener.onMicActivity(new ADL.MicActivityEvent(activity));
      } catch (e) {
        ADL.Log.w('Error in user defined micActivity event handler');
      }
    },
    micGain:function (gain) {
      try {
        this.listener.onMicGain(new ADL.MicGainEvent(gain));
      } catch (e) {
        ADL.Log.w('Error in user defined micGain event handler');
      }
    },
    deviceListChanged:function (audioIn, audioOut, videoIn) {
      var l = this.listener;
      _wrapForException(function () {
        l.onDeviceListChanged(
            new ADL.DeviceListChangedEvent(audioIn, audioOut, videoIn));
      }, 'videoFrameSizeChanged');
    },
    newVideoStats:function (scopeId, userId, stats) {
      var l = this.listener;
      _wrapForException(function () {
        if (userId === -1) {
          userId = undefined;
        }
        l.onMediaStats(
            new ADL.MediaStatsEvent(scopeId, ADL.MediaType.VIDEO, stats, userId));
      }, 'videoFrameSizeChanged');
    },
    newAudioStats:function (scopeId, userId, stats) {
      var l = this.listener;
      _wrapForException(function () {
        if (userId === -1) {
          userId = undefined;
        }
        l.onMediaStats(
            new ADL.MediaStatsEvent(scopeId, ADL.MediaType.AUDIO, stats, userId));
      }, 'videoFrameSizeChanged');
    },
    newScreenStats:function (scopeId, userId, stats) {
      var l = this.listener;
      _wrapForException(function () {
        if (userId === -1) {
          userId = undefined;
        }
        l.onMediaStats(
            new ADL.MediaStatsEvent(scopeId, ADL.MediaType.SCREEN, stats, userId));
      }, 'videoFrameSizeChanged');
    },
    onBroadcast:function (srcUserId, data) {
      var l = this.listener;
      _wrapForException(function () {
        l.onMessage(new ADL.MessageEvent(srcUserId, data));
      }, 'videoFrameSizeChanged');
    },
    newMediaConnectionType:function (scopeId, mediaType, connectionType) {
      var l = this.listener;
      _wrapForException(function () {
        if (mediaType === 'AUDIO') {
          mediaType = ADL.MediaType.AUDIO;
        } else if (mediaType === 'VIDEO') {
          mediaType = ADL.MediaType.VIDEO;
        }
        l.onMediaConnTypeChanged(
            new ADL.MediaConnTypeChangedEvent(
                scopeId,
                mediaType,
                connectionType));
      }, 'videoFrameSizeChanged');
    },

    onEchoNotification:function (echoedValue) {
      //noinspection JSUnresolvedFunction
      this.listener.onEchoNotification(echoedValue);
    },
    onMediaQualityIssueChange:function (scopeId, mediaType, active, type, msg) {
      var l = this.listener;
      _wrapForException(function () {
        l.onMediaIssue(new ADL.MediaIssueEvent({
          scopeId:scopeId,
          mediaType:mediaType,
          isActive:active,
          issueCode:type,
          message:msg,
          userId:undefined
        }));

      }, 'videoFrameSizeChanged');
    }
  };
  var _IGNORED_EVENTS = ['connectionStatus', 'userStatus', 'videoPublished',
    'audioPublished', 'screenPublished', 'onMediaStreamFailure',
    'serviceInvalidated', 'serviceRevalidated', 'spkActivity'
  ];

  function _nop() {
  }

  function _wrapForException(func, eventName) {
    try {
      func();
    } catch (e) {
      ADL.Log.w('Error in user defined ' + eventName + ' event handler');
      if (e.stack) {
        ADL.Log.w('Error details: \n' + e.stack);
      }
    }
  }

  for (var i = 0; i < _IGNORED_EVENTS.length; i++) {
    ADLServiceListenerAdapter.prototype[_IGNORED_EVENTS[i]] = _nop;
  }

  /**
   * @private
   * @type {Function}
   */
  ADL.ADLServiceListenerAdapter = ADLServiceListenerAdapter;
}());/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 29.01.13 17:30
 */

(function (w) {
  'use strict';

  // Imports
  var ADL = w.ADL,
      Log = null,
      Utils = null;

  // Constants

  var REPORT_DEFAULTS = {
    _call:'report_bug',
    /*jshint camelcase:false */
    container_log:'Empty',
    service_log:'Empty',
    plugin_version:'Unknown',
    js_log:'Empty',
    type:'Empty',
    cause:'Unknown',
    participant_id:1,
    error_code:-1,
    app_id:0
  };


  /**
   * URL pointing to bug tracking server side endpoint
   *
   * @type {string}
   */
  var bugTrackerUrl = '',
      devsTrackingUrl = '',
      logsTrackingUrl = '',
      appId = -1,
      enabled = true,
      alreadyReported = {};

  /**
   * ===========================================================================
   * Public methods
   * ===========================================================================
   */

  /**
   * Initializes the bug reporting facility.
   *
   * @private
   * @param {object} config
   *          Global platform configuration
   */
  function init(config) {
    Log = ADL.Log;
    Utils = ADL.Utils;
    appId = config.applicationId;
    bugTrackerUrl = config.bugReportingEndpoint;
    devsTrackingUrl = config.devsTrackingUrl;
    logsTrackingUrl = config.logsReportingEndpoint;
    if (!devsTrackingUrl) {
      devsTrackingUrl = bugTrackerUrl.replace('reliability/',
          'user_device.create');
    }
    enabled = config.bugReportingEnabled;
  }

  /**
   * Sends bug report request.
   *
   * @param {object} [details]
   *          Report details
   * @param {string} [details.user_message]
   *          Message describing the problem, provided by the user
   * @param {string} [details.type]
   *          Type of the bug report, e.g. AER-CONN, AER-CRASH, AER
   * @param {string} [details.cause]
   *          Problem cause
   * @param {number} [details.error_code]
   *          Error code, in case of method call error
   * @param {ADL.Responder} [responder]
   *          Report result handler
   */
  function reportBug(responder, details) {
    if (!enabled) {
      Log.w('Bug reporting is disabled');
      return;
    }
    Log.w('Sending a bug report');
    var request = {},
        publisher;
    if (!responder) {
      responder = ADL.r();
      details = {};
    } else if (!details) {
      details = {};
    }
    if (details.cause) {
      if (alreadyReported[details.cause]) {
        Log.w('Skipping the report as issue was already reported');
        return;
      }
    }
    if (details.error_code && ADL.ErrorCodes._CLIENT_ERRORS[details.error_code]) {
      Log.w('Problem is due to user action. Skipping AER');
      return;
    }
    try {
      alreadyReported[details.cause] = true;
      Utils.merge(request, REPORT_DEFAULTS);
      /*jshint camelcase:false */
      request.app_id = appId;
      Utils.merge(request, details);
      request.devices = JSON.stringify(ADL._devices);
      publisher = new BugReportPublisher(responder, request);
      publisher.onJsLog(ADL.Log.getTail());
      if (ADL._pluginInstance) {
        if (ADL._pluginInstance.getLogFileTag) {
          publisher.onContainerLog(
              _getLogByTag(
                  ADL._pluginInstance.getLogFileTag()));
        } else {
          Log.w('Plug-in container does not provide getLogFileTag method');
          publisher.onContainerLog();
        }

        if (ADL._service && ADL._service.version) {
          request.plugin_version = ADL._service.version;
        }
        if (ADL.getService()) {

          ADL.getService().getLogFileTag(
              ADL.r(
                  function (tag) {  // succHandler
                    publisher.onServiceLogTag(tag);
                  },
                  function () {     // errHandler
                    Log.w('Failed to obtain service log tag');
                    publisher.onServiceLogTag();
                  })
          );
        } else {
          publisher.onServiceLogTag();
        }
      } else {
        publisher.onContainerLog();
        publisher.onServiceLogTag();
      }
    } catch (e) {
      Log.e('Error processing bug report. Report most likely was not sent');
    }
  }

  function reportCrash(responder, details) {
    Log.w('Reporting Crash Followup AER');
    var request = {};
    Utils.merge(request, REPORT_DEFAULTS);
    request.app_id = appId;
    Utils.merge(request, details);
    Utils.doPost(responder, bugTrackerUrl, request);
  }

  /**
   * @private
   * @param scopeId
   * @param userId
   */
  function postDevices(scopeId, userId) {
    Utils.doPost(ADL.r(), devsTrackingUrl,
        {appId:appId,
          scopeId:scopeId,
          userId:userId,
          deviceType:4,
          device:JSON.stringify(ADL._devices)
        });
  }

  function postLogs(responder, reqData) {
    reqData.appId = appId;
    Utils.doPost(responder, logsTrackingUrl, reqData);
  }

  /**
   * ===========================================================================
   * Private helpers
   * ===========================================================================
   */

  /**
   * Publishes bug report once all data are available.
   *
   * @private
   * @param request
   * @param responder
   * @constructor
   */
  function BugReportPublisher(responder, request) {
    this._request = request;
    this._stepsLeft = 3;
    this._responder = responder;
  }

  BugReportPublisher.prototype = {

    onJsLog:function (log) {
      this._request.js_log = log;
      this._doSendMaybe();
    },

    onServiceLogTag:function (tag) {
      if (tag) {
        this._request.service_log = _getLogByTag(tag);
      }
      this._doSendMaybe();
    },
    onContainerLog:function (log) {
      if (log) {
        this._request.container_log = log;
      }
      this._doSendMaybe();
    },

    _doSendMaybe:function () {
      this._stepsLeft -= 1;
      if (this._stepsLeft > 0) {
        return;
      }
      Log.d('All bug report data are fetched. Sending the report');
      Utils.doPost(this._responder, bugTrackerUrl, this._request);
    }


  };

  function _getLogByTag(tag) {
    var log = '';
    if (ADL._pluginInstance && ADL._pluginInstance.getLogFileByTag) {
      log = ADL._pluginInstance.getLogFileByTag(tag);
      if (log.content) {
        log = log.content;
      }
    }
    return log;
  }


// Exports

  /**
   * @private
   * @type {Object}
   */
  ADL.BugReporting = {
    reportBug:reportBug,
    reportCrash:reportCrash,
    init:init,
    postDevices:postDevices,
    postLogs:postLogs
  };


}(window));/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 06-11-2012 12:30
 */


(function (window) {
  'use strict';
  var CDO = window.ADL;
  CDO.CloudeoService = ADL.AddLiveService;
  CDO.CloudeoServiceListener = ADL.AddLiveServiceListener;
  CDO.CloudeoException = ADL.AddLiveException;
  CDO.CloudeoPlugin = ADL.AddLivePlugin;
  window.CDO = CDO;

})(window);/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 06.02.13 14:54
 */


(function () {
  'use strict';

  // Imports
  //noinspection JSAccessibilityCheck
  var Log = ADL.Log;

  // Consts
  var KEY_CRASHED_FLAG = 'adl.crashed',
      KEY_JS_LOGS = 'adl.jsLogs',
      KEY_CONTAINER_LOG_TAG = 'adl.containerLogsTag',
      KEY_SERVICE_LOG_TAG = 'adl.serviceLogsTag',
      KEY_PLUGIN_VERSION = 'adl.version';

  // Variables
  var pluginHeartBeatInterval = null,
      reloadOnCrash = null,
      serviceLogTag = null,
      containerLogTag = null,
      crashListeners = [];

  /**
   * Provides crash handling functionality. This module is mostly private to
   * the AddLive SDK, with one useful method - registerCrashListener.
   *
   * @summary
   * Provides crash handling functionality. This module is mostly private to
   * the AddLive SDK, with one useful method - registerCrashListener.
   * @see ADL.CrashHandler.registerCrashListener
   * @since 2.0.0
   * @namespace
   */
  ADL.CrashHandler = {};


  /**
   * Initializes the CrashHandler. To init it:
   * - start polling for plug-in availability
   * - checks whether there was a crash previously and sends a bug report
   *
   * @since 2.0.0
   * @param config
   * @private
   */
  ADL.CrashHandler.init = function (config) {
    Log.d('Initializing the CrashHandler');
    pluginHeartBeatInterval = config.pluginHeartBeatInterval;
    reloadOnCrash = config.reloadOnCrash;
    _sendFollowupAerMaybe();

    containerLogTag = ADL._pluginInstance.getLogFileTag();
    var onLogTag = function (logTag) {
      serviceLogTag = logTag;
      ADL.Storage.setItem(KEY_SERVICE_LOG_TAG, serviceLogTag);
    };
    ADL.Storage.setItem(KEY_CONTAINER_LOG_TAG, containerLogTag);
    ADL.Storage.setItem(KEY_PLUGIN_VERSION,
        ADL._service.version);
    ADL._service.getLogFileTag(ADL.r(onLogTag));
    _startHeartBeat();
  };


  /**
   * Registers listener function that will be notify upon plug-in crash.
   *
   * @summary Registers listener function that will be notify upon plug-in
   *          crash.
   * @since 2.0.0
   * @param {function} listener
   *          listener function to be registered.
   */
  ADL.CrashHandler.registerCrashListener = function (listener) {
    crashListeners.push(listener);
  };

  /**
   * ===========================================================================
   * Private helpers
   * ===========================================================================
   */


  /**
   * Checks whether plug-in crashed previously and sends a full followup
   * Automatic Error Report if it's the case.
   * @private
   */
  function _sendFollowupAerMaybe() {
    if (ADL.Storage.getItem(KEY_CRASHED_FLAG) !== 'true') {
      return;
    }
    var jsLog = ADL.Storage.getItem(KEY_JS_LOGS),
        containerLogTag = ADL.Storage.getItem(KEY_CONTAINER_LOG_TAG),
        serviceLogTag = ADL.Storage.getItem(KEY_SERVICE_LOG_TAG),
        containerLog = '',
        serviceLog = '';
    try {
      containerLog = ADL._pluginInstance.getLogFileByTag(containerLogTag),
          serviceLog = ADL._pluginInstance.getLogFileByTag(serviceLogTag);
      if (containerLog.content) {
        containerLog = containerLog.content;
      }
      if (serviceLog.content) {
        serviceLog = serviceLog.content;
      }
    } catch (e) {
      Log.e('Failed to get all the details for the AER');
    }
    /*jshint camelcase:false*/
    ADL.BugReporting.reportCrash(ADL.r(),
        {
          type:'AER-CRASH-FOLLOWUP',
          js_log:jsLog,
          container_log:containerLog,
          service_log:serviceLog
        });
    ADL.Storage.setItem(KEY_CRASHED_FLAG, null);
    ADL.Storage.setItem(KEY_CONTAINER_LOG_TAG, null);
    ADL.Storage.setItem(KEY_JS_LOGS, null);
    ADL.Storage.setItem(KEY_SERVICE_LOG_TAG, null);
  }

  /**
   *
   * @private
   */
  function _startHeartBeat() {
    setTimeout(function () {
      if (_heartbeatPlugin()) {
        _startHeartBeat();
      }
    }, 1000);
  }

  /**
   *
   * @return {Boolean}
   * @private
   */
  function _heartbeatPlugin() {
    Log.d('Plug-in heartbeat');
    var objectTag = document.getElementById(ADL._pluginContainerId);

    // Check if the plug-in wasn't unloaded.
    if (objectTag === null) {
      Log.e('Plugin\'s object node was deleted from the DOM tree.');
      return false;
    }

    // Check whether plug-in is functional, using echo method
    if (!_pluginAlive()) {
      _handleCrash();
      return false;
    }

    return true;
  }

  /**
   *
   * @private
   */
  function _handleCrash() {
    Log.e('Plug-in crashed! Marking it in local storage');
    var jsLogs = Log.getTail(),
        version = ADL.Storage.getItem(KEY_PLUGIN_VERSION);
    ADL.Storage.setItem(KEY_CRASHED_FLAG, 'true');
    ADL.Storage.setItem(KEY_JS_LOGS, jsLogs);
    // Send a bug report with what we know now.
    /*jshint camelcase:false*/
    ADL.BugReporting.reportCrash(ADL.r(), {type:'AER-CRASH', js_log:jsLogs,
      plugin_version:version});
    if (reloadOnCrash) {
      window.location.reload();
    } else {
      for (var i = 0; i < crashListeners.length; i++) {
        try {
          crashListeners[i]();
        } catch (e) {
          Log.w('Error in crash listener');
        }
      }
    }
  }

  /**
   *
   * @return {Boolean}
   * @private
   */
  function _pluginAlive() {
    if (!ADL._pluginInstance) {
      return false;
    }
    if (!ADL._pluginInstance.pluginInstance) {
      return false;
    }
    if (!('echo' in ADL._pluginInstance.pluginInstance)) {
      return false;
    }
    //noinspection JSUnresolvedFunction
    return ADL._pluginInstance.pluginInstance.echo('1') === '1';
  }


}());/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 28-05-2012 14:25
 */

(function () {
  'use strict';

  //noinspection JSValidateJSDoc
  /**
   * Defines all error codes returned by the AddLive Plug-In or AddLive
   * Service. The error codes are used with ADL.Responder#error method, as
   * a first parameter given.
   *
   * Error codes were split into 4 groups:
   *
   * - Logic
   * - Communication
   * - Media
   * - Common
   *
   * Each group defines error codes specific for given domain of the AddLive
   * Service.
   *
   * @summary
   * Defines all error codes returned by the AddLive Plug-In or AddLive
   * Service.
   *
   * @namespace
   * @see ADL.Responder.error
   */
  ADL.ErrorCodes = {};


  /**
   * Logic layer error codes
   *
   * @since 1.0.0
   * @summary Logic layer error codes.
   * @enum {Number}
   */
  ADL.ErrorCodes.Logic = {

    /**
     * Returned when application tries to perform operation on AddLive Service
     * in context of media scope to which service is not currently connected.
     *
     * @deprecated Since 2.0.0 Use ADL.ErrorCodes.Logic.INVALID_SCOPE instead.
     * @since 1.0.0.0
     * @see ADL.AddLiveService#disconnect
     * @see ADL.AddLiveService#publish
     * @see ADL.AddLiveService#unpublish
     */
    INVALID_ROOM:1001,

    /**
     * Returned when application tries to perform operation on AddLive Service
     * in context of media scope to which service is not currently connected.
     *
     * @since 2.0.0
     * @see ADL.AddLiveService#disconnect
     * @see ADL.AddLiveService#publish
     * @see ADL.AddLiveService#unpublish
     */
    INVALID_SCOPE:1001,


    /**
     * Returned when application passed somehow invalid argument to any of the
     * AddLiveService methods.
     *
     * @since 1.0.0.0
     */
    INVALID_ARGUMENT:1002,

    // TODO remove this in favor of INVALID_ARGUMENT
    /**
     * Returned when ADL.AddLiveService#getProperty or
     * ADL.AddLiveService#getProperty was called with invalid (unknown) key.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#getProperty
     * @see ADL.AddLiveService#setProperty
     */
    INVALID_JS_PARAMETER_KEY:1003,

    /**
     * Indicates that there was unknown, fatal error during platform
     * initialization. Such a platform initialization includes e.g.
     * initialization of the COM model on windows.
     *
     * @since 1.0.0.0
     */
    PLATFORM_INIT_FAILED:1004,


    /**
     * Indicates that client tried to create service while AddLive Plugin is
     * performing auto-update.
     *
     * @since 1.0.0.0
     */
    PLUGIN_UPDATING:1005,

    /**
     * Indicates that there was internal, logic failure. Most likely it's caused
     * by bug in the AddLive Plug-in code.
     *
     * @since 1.0.0.0
     */
    INTERNAL:1006,

    /**
     * Indicates that plugin container couldn't load logic library, most likely
     * because it is running in Windows Low Integrity mode (less privileged) and
     * the lib is already loaded by process that runs in medium integrity mode
     * (more privileged). Such a situation may occur if the AddLive SDK is used
     * by user in 2 browsers in same time. The first browser launched was
     * non-IE, the second (the one where error is reported) is IE.
     *
     * @since 1.0.0.0
     */
    LIB_IN_USE:1007,

    /**
     * Indicates that the user's platform is unsupported for given operation.
     *
     * @since 1.15.0.6
     */
    PLATFORM_UNSUPPORTED:1009,

    /**
     * Indicates that given operation is invalid in current state of
     * the platform.
     *
     * @since 1.15.0.6
     */
    INVALID_STATE:1010
  };

  /**
   * Communication layer error codes
   *
   * @summary Communication layer error codes.
   * @since 1.0.0
   * @enum {Number}
   */
  ADL.ErrorCodes.Communication = {
    /**
     * Indicates that AddLive Service was trying to connect to streaming server,
     * but cannot find given host (cannot resolve host with given IP/domain
     * address). This may happen if user lost the connection to the Internet.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     */
    INVALID_HOST:2001,

    /**
     * Indicate that plugin was unsuccessful with connect attempt. It managed
     * to resolve host address and connect to it, so streaming host is running,
     * but it couldn't connect to streamer application. This may happen if
     * there is a firewall device blocking communication with the streamer's
     * management endpoint.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     */
    INVALID_PORT:2002,

    /**
     * Plugin tried to connect to streamer server, established communication
     * channel, but credentials provided by JS-client were rejected by it.
     *
     * Can be caused by:
     * - invalid credentials used by JS-client (JS-client application bug)
     * - session timeout on core server
     *
     * JS-client could try to recover by:
     * - no recovery
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     */
    BAD_AUTH:2003,

    /**
     * Plugin tried to connect to streamer server, established management
     * communication link, but multimedia communication link failed, so there
     * is no way to transmit media data.
     * This error code can be used before OR after successful connection. When
     * triggered after successful connection, it indicates that media
     * connection was lost.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveServiceListener#onConnectionLost
     * @see ADL.ConnectionLostEvent
     */
    MEDIA_LINK_FAILURE:2005,

    /**
     * Indicates that plug-in lost connection to streaming server. Most likely
     * due to user losing Internet connection. In case of this error, it is
     * advised to notify the user about the issue and periodically try to
     * reestablish  connection to given media scope.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveServiceListener#onConnectionLost
     * @see ADL.ConnectionLostEvent
     */
    REMOTE_END_DIED:2006,

    /**
     * Indicates that plug-in couldn't connect to streaming server due to
     * internal, unknown and unexpected error. This error always indicates an
     * bug in AddLive Plug-In.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveServiceListener#onConnectionLost
     * @see ADL.ConnectionLostEvent
     */
    INTERNAL:2007,

    /**
     * Streamer rejected connection request because user with given id already
     * joined given media scope. User may join media scope only once.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     */
    ALREADY_JOINED:2009,

    /**
     * Indicates that the plug-in used by client is not supported by the
     * streamer to which connection attempt was made.
     *
     * Such a case will happen most likely when trying to connect using
     * a plug-in from the beta release channel to a streamer for stable channel.
     */
    PLUGIN_VERSION_NOT_SUPPORTED:2011,

    /**
     * Indicates that there was an error connecting to the AddLive servers
     * when the SDK tries to resolve which streamer to be used by the
     * for this particular connection. In most cases it means that the user
     * has no Internet connectivity. In an edge case it may also indicate that
     * firewall device on the network does not allow communication with one of
     * AddLive services.
     *
     * @since 2.1.3
     *
     */
    NETWORK_ERROR:2012
  };

  /**
   * Media layer error codes.
   *
   * @summary Media layer error codes.
   * @since 1.0.0
   * @enum {Number}
   */
  ADL.ErrorCodes.Media = {

    /**
     * Indicates that currently configured video capture
     * device (webcam) is invalid and cannot be used by AddLive Service.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#startLocalVideo
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveService#setVideoCaptureDevice
     * @see ADL.AddLiveService#publish
     */
    INVALID_VIDEO_DEV:4001,


    /**
     * Indicates that audio capture device (microphone) haven't been configured
     * using setAudioCaptureDevice, but there is attempt to make a call with
     * audio published.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveService#publish
     */
    NO_AUDIO_IN_DEV:4002,

    /**
     * Indicates that given audio capture device is invalid. May be thrown
     * with setAudioCaptureDevice or setAudioOutputDevice.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveService#publish
     */
    INVALID_AUDIO_IN_DEV:4003,


    /**
     * Indicates that given audio output device is invalid. May be thrown
     * with setAudioOutputDevice or setAudioCaptureDevice.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveService#publish
     */
    INVALID_AUDIO_OUT_DEV:4004,

    /**
     * Indicates that either audio output or capture device initialization
     * failed and plugin cannot differ or that given audio capture and output
     * devices are for some reason incompatible.
     *
     * @since 1.0.0.0
     * @see ADL.AddLiveService#connect
     * @see ADL.AddLiveService#publish
     */
    INVALID_AUDIO_DEV:4005
  };


  /**
   * Common error codes.
   *
   * @summary Common error codes.
   * @since 1.0.0
   * @enum {Number}
   */
  ADL.ErrorCodes.Common = {

    /**
     * Indicates, general unhandled error. In general it means a bug in AddLive
     * Service or AddLive Plugin.
     *
     * @since 1.0.0.0
     */
    DEFAULT_ERROR:-1

  };

  /**
   * Enumeration listing all the possible media issue codes dispatched by the
   * AddLive Service.
   *
   * @summary Lists all possible media issue codes.
   * @since 2.1.9
   * @see ADL.AddLiveServiceListener.onMediaIssue
   * @see ADL.MediaIssueEvent
   * @enum {String}
   */
  ADL.MediaIssueCodes = {

    /**
     * Indicates that the network connection was lost, possibly temporarily.
     * This is early stage notification, dispatched after not having any media
     * packet received for about 5 seconds.
     *
     * Please note that if the connection won't be restored within another 10
     * seconds, the issue will be elevated to connection lost and reported using
     * {@link ADL.AddLiveServiceListener.onConnectionLost}.
     *
     * @since 2.1.9
     */
    CONNECTION_FROZEN:'CONNECTION_FROZEN',

    /**
     * Indicates that the local user's CPU is over-utilized in a way that
     * directly affects the conversation quality.
     *
     * @since 2.1.9
     */
    CPU_LOAD_HIGH:'CPU_LOAD_HIGH',

    /**
     * Indicates that there is a process running on host PC that utilizes the
     * CPU in a way that affects the AddLive Service processing.
     *
     * If possible, user should check the system activity and terminate any
     * CPU-intensive tasks.
     *
     * @since 2.1.9
     */
    EXTERNAL_CPU_LOAD_HIGH:'EXTERNAL_CPU_LOAD_HIGH',

    /**
     * Indicates a generic network quality issue. It means that the flow of
     * media packets if affected by a quality of network connection in a way
     * that has impact on the call quality.
     *
     * The actual cause of the problem is difficult to determine but in most
     * cases it's one of following reasons:
     *
     * 1. poor WiFi connectivity (user's PC is far from the access point)
     * 1. weak 3G/4G connectivity
     * 1. connection congested due to other network activity
     *
     * @since 2.1.9
     */
    NETWORK_PROBLEM:'NETWORK_PROBLEM'
  };

  /**
   *
   * @param intValue
   * @private
   */
  ADL.MediaIssueCodes._fromInt = function (intValue) {
    intValue = parseInt(intValue, 10);
    switch (intValue) {
      case 1:
        return ADL.MediaIssueCodes.CONNECTION_FROZEN;
      case 2:
        return ADL.MediaIssueCodes.CPU_LOAD_HIGH;
      case 3:
        return ADL.MediaIssueCodes.EXTERNAL_CPU_LOAD_HIGH;
      case 4:
        return ADL.MediaIssueCodes.NETWORK_PROBLEM;
      default:
        return '';
    }
  };

  /**
   *
   * @type {{}}
   * @private
   */
  var _CLIENT_ERRORS = {};

  _CLIENT_ERRORS[ADL.ErrorCodes.Media.INVALID_VIDEO_DEV] = true;
  _CLIENT_ERRORS[ADL.ErrorCodes.Logic.INVALID_SCOPE] = true;
  _CLIENT_ERRORS[ADL.ErrorCodes.Logic.INVALID_ARGUMENT] = true;
  _CLIENT_ERRORS[ADL.ErrorCodes.Logic.ALREADY_JOINED] = true;
  _CLIENT_ERRORS[ADL.ErrorCodes.Communication.ALREADY_JOINED] = true;
  ADL.ErrorCodes._CLIENT_ERRORS = _CLIENT_ERRORS;
}());/*
 json2.js
 2011-10-19

 Public Domain.

 NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

 See http://www.JSON.org/js.html


 This code should be minified before deployment.
 See http://javascript.crockford.com/jsmin.html

 USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
 NOT CONTROL.


 This file creates a global JSON object containing two methods: stringify
 and parse.

 JSON.stringify(value, replacer, space)
 value       any JavaScript value, usually an object or array.

 replacer    an optional parameter that determines how object
 values are stringified for objects. It can be a
 function or an array of strings.

 space       an optional parameter that specifies the indentation
 of nested structures. If it is omitted, the text will
 be packed without extra whitespace. If it is a number,
 it will specify the number of spaces to indent at each
 level. If it is a string (such as '\t' or '&nbsp;'),
 it contains the characters used to indent at each level.

 This method produces a JSON text from a JavaScript value.

 When an object value is found, if the object contains a toJSON
 method, its toJSON method will be called and the result will be
 stringified. A toJSON method does not serialize: it returns the
 value represented by the name/value pair that should be serialized,
 or undefined if nothing should be serialized. The toJSON method
 will be passed the key associated with the value, and this will be
 bound to the value

 For example, this would serialize Dates as ISO strings.

 Date.prototype.toJSON = function (key) {
 function f(n) {
 // Format integers to have at least two digits.
 return n < 10 ? '0' + n : n;
 }

 return this.getUTCFullYear()   + '-' +
 f(this.getUTCMonth() + 1) + '-' +
 f(this.getUTCDate())      + 'T' +
 f(this.getUTCHours())     + ':' +
 f(this.getUTCMinutes())   + ':' +
 f(this.getUTCSeconds())   + 'Z';
 };

 You can provide an optional replacer method. It will be passed the
 key and value of each member, with this bound to the containing
 object. The value that is returned from your method will be
 serialized. If your method returns undefined, then the member will
 be excluded from the serialization.

 If the replacer parameter is an array of strings, then it will be
 used to select the members to be serialized. It filters the results
 such that only members with keys listed in the replacer array are
 stringified.

 Values that do not have JSON representations, such as undefined or
 functions, will not be serialized. Such values in objects will be
 dropped; in arrays they will be replaced with null. You can use
 a replacer function to replace those with JSON values.
 JSON.stringify(undefined) returns undefined.

 The optional space parameter produces a stringification of the
 value that is filled with line breaks and indentation to make it
 easier to read.

 If the space parameter is a non-empty string, then that string will
 be used for indentation. If the space parameter is a number, then
 the indentation will be that many spaces.

 Example:

 text = JSON.stringify(['e', {pluribus: 'unum'}]);
 // text is '["e",{"pluribus":"unum"}]'


 text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
 // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

 text = JSON.stringify([new Date()], function (key, value) {
 return this[key] instanceof Date ?
 'Date(' + this[key] + ')' : value;
 });
 // text is '["Date(---current time---)"]'


 JSON.parse(text, reviver)
 This method parses a JSON text to produce an object or array.
 It can throw a SyntaxError exception.

 The optional reviver parameter is a function that can filter and
 transform the results. It receives each of the keys and values,
 and its return value is used instead of the original value.
 If it returns what it received, then the structure is not modified.
 If it returns undefined then the member is deleted.

 Example:

 // Parse the text. Values that look like ISO date strings will
 // be converted to Date objects.

 myData = JSON.parse(text, function (key, value) {
 var a;
 if (typeof value === 'string') {
 a =
 /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
 if (a) {
 return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
 +a[5], +a[6]));
 }
 }
 return value;
 });

 myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
 var d;
 if (typeof value === 'string' &&
 value.slice(0, 5) === 'Date(' &&
 value.slice(-1) === ')') {
 d = new Date(value.slice(5, -1));
 if (d) {
 return d;
 }
 }
 return value;
 });


 This is a reference implementation. You are free to copy, modify, or
 redistribute.
 */

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
 call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
 getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
 lastIndex, length, parse, prototype, push, replace, slice, stringify,
 test, toJSON, toString, valueOf
 */


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
  JSON = {};
}

(function () {
  'use strict';

  function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
  }

  if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function (key) {

      return isFinite(this.valueOf())
          ? this.getUTCFullYear()     + '-' +
          f(this.getUTCMonth() + 1) + '-' +
          f(this.getUTCDate())      + 'T' +
          f(this.getUTCHours())     + ':' +
          f(this.getUTCMinutes())   + ':' +
          f(this.getUTCSeconds())   + 'Z'
          : null;
    };

    String.prototype.toJSON      =
        Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
              return this.valueOf();
            };
  }

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
      },
      rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string'
          ? c
          : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
        typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }

// What happens next depends on the value's type.

    switch (typeof value) {
      case 'string':
        return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

        return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

        if (!value) {
          return 'null';
        }

// Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

// Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

          v = partial.length === 0
              ? '[]'
              : gap
              ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
              : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }

// If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === 'string') {
              k = rep[i];
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {

// Otherwise, iterate through all of the keys in the object.

          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

        v = partial.length === 0
            ? '{}'
            : gap
            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
            : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

// If the JSON object does not yet have a stringify method, give it one.

  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
        indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
          (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
    };
  }


// If the JSON object does not yet have a parse method, give it one.

  if (typeof JSON.parse !== 'function') {
    JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            }
          }
        }
        return reviver.call(holder, key, value);
      }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function (a) {
          return '\\u' +
              ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
          .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                    .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

        j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

        return typeof reviver === 'function'
            ? walk({'': j}, '')
            : j;
      }

// If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
    };
  }
}());/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * Contains definition of  the ADL.MediaConnction class.
 *
 * @author Tadeusz Kozak
 * @date 11-07-2012 14:34
 */


(function (w) {
  'use strict';

  // Imports
  var Log;

  var LOGS_PUBLISHING_INTERVAL = 1000 * 15,
      SERVICE_LOGS_TYPE = 1;

  /**
   * Class representing an established media connection. Allows an easier
   * management of the connection by providing helper publish*, unpublish* and
   * disconnect methods.
   *
   * @summary Class representing an established media connection.
   * @see ADL.AddLiveService#connect
   * @see ADL.AddLiveService#disconnect
   * @see ADL.AddLiveService#publish
   * @see ADL.AddLiveService#unpublish
   * @see ADL.AddLiveService#sendMessage
   * @since 1.16.1.1
   * @param {string} scopeId
   *          Id of media scope represented by this instance of the
   *          MediaConnection.
   * @param {Object} connDescriptor
   *          Connection descriptor
   * @constructor
   */
  ADL.MediaConnection = function (scopeId, connDescriptor) {
    Log = ADL.Log;
    Log.d('Creating an instance of MediaConnection class');

    /**
     * Id of the scope managed by this MediaConnection
     *
     * @summary Id of the scope managed by this MediaConnection
     * @type {String}
     */
    this.scopeId = scopeId;
    this.connDescriptor = connDescriptor;
    this.userId = connDescriptor.authDetails.userId;
    this._logsPusher = ADL.Utils.bind(this._postLogsLooper, this);
    this._logsPublished = 0;
    var self = this;
    var onLogTag = function (tag) {
      self._logsTag = tag;
      self._postLogsLooper();
    };
    ADL.getService().getLogFileTag(ADL.r(onLogTag));
  };

  ADL.MediaConnection.prototype = {

    /**
     * Publishes a stream of given type in a specified way
     *
     * @summary Publishes a stream of given type in a specified way.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#publish
     * @see ADL.MediaType
     * @param {ADL.Responder} responder
     *          Result and error handler.
     * @param {string} what
     *          Type of media to publish, one of the ADL.MediaType values.
     * @param {Object} [how]
     *          Optional object defining additional publishing configuration.
     */
    publish:function (responder, what, how) {
      ADL.getService().publish(responder, this.scopeId, what, how);
    },

    /**
     * Stops publishing stream of given type
     *
     * @summary Stops publishing stream of given type
     * @see ADL.AddLiveService#unpublish
     * @see ADL.MediaType
     * @param {ADL.Responder} responder
     *          Result and error handler.
     * @param {string}what
     *          Type of media to publish, one of the ADL.MediaType values.
     */
    unpublish:function (responder, what) {
      ADL.getService().unpublish(responder, this.scopeId, what);
    },

    /**
     * Publishes the audio stream.
     *
     * @summary Publishes the audio stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#publish
     * @see ADL.MediaType.AUDIO
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    publishAudio:function (responder) {
      this.publish(responder, ADL.MediaType.AUDIO);
    },

    /**
     * Stops publishing the audio stream.
     *
     * @summary Stops publishing the audio stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#publish
     * @see ADL.MediaType.AUDIO
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    unpublishAudio:function (responder) {
      this.unpublish(responder, ADL.MediaType.AUDIO);
    },

    /**
     * Publishes the video stream.
     *
     * @summary Publishes the video stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#publish
     * @see ADL.MediaType.VIDEO
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    publishVideo:function (responder) {
      this.publish(responder, ADL.MediaType.VIDEO);
    },

    /**
     * Stops publishing the video stream.
     *
     * @summary Stops publishing the video stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#unpublish
     * @see ADL.MediaType.VIDEO
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    unpublishVideo:function (responder) {
      this.unpublish(responder, ADL.MediaType.VIDEO);
    },

    /**
     * Publishes the screen sharing stream.
     *
     * @summary Publishes the screen sharing stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#publish
     * @see ADL.MediaType.SCREEN
     * @see ADL.AddLiveService#getScreenCaptureSources
     * @param {ADL.Responder} responder
     *          Result and error handler.
     * @param {number} windowId
     *          Id of screen sharing source. To be obtained using the
     *          ADL.AddLiveService.getScreenCaptureSources and selected by the
     *          user.
     * @param {number} [nativeWidth]
     *          TODO
     */
    publishScreen:function (responder, windowId, nativeWidth) {
      if (nativeWidth === undefined) {
        nativeWidth = 640;
      }
      this.publish(responder,
          ADL.MediaType.SCREEN,
          {windowId:windowId, nativeWidth:nativeWidth});
    },

    /**
     * Stops publishing the screen sharing stream.
     *
     * @summary Stops publishing the screen sharing stream.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#unpublish
     * @see ADL.MediaType.SCREEN
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    unpublishScreen:function (responder) {
      this.unpublish(responder, ADL.MediaType.SCREEN);

    },

    /**
     * Terminates the connection maintained by this MediaConnection instance.
     *
     * @summary Terminates the connection maintained by this MediaConnection
     *          instance.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#disconnect
     * @param {ADL.Responder} responder
     *          Result and error handler.
     */
    disconnect:function (responder) {
      ADL.getService().disconnect(responder, this.scopeId);
    },

    /**
     * Sends an opaque message to all peers connected to the same media scope
     * or only to the selected one.
     *
     * @summary Sends an opaque message to all peers connected to the same media
     *          scope.
     * @since 1.16.1.1
     * @see ADL.AddLiveService#sendMessage
     * @param {ADL.Responder} responder
     *          Result and error handler.
     * @param {string} message
     *          Message to be send
     * @param {number} [targetUserId]
     *          Optional id of recipient. Don't specify if message is supposed to
     *          be broadcast to every user connected to the media scope.
     */
    sendMessage:function (responder, message, targetUserId) {
      ADL.getService().sendMessage(responder,
          this.scopeId,
          message,
          targetUserId);
    },

    /**
     *
     * @private
     */
    _dispose:function () {
      Log.d('Disposing media connection');
      w.clearTimeout(this._logsPublishingInterval);
      this._postLogs();
    },

    /**
     *
     * @private
     */
    _postLogsLooper:function () {
      this._postLogs();
      this._logsPublishingInterval = w.setTimeout(this._logsPusher,
          LOGS_PUBLISHING_INTERVAL);
    },

    _postLogs:function () {
      Log.d('Posting logs');
      var logs = ADL._pluginInstance.getLogFileByTag(
              this._logsTag, this._logsPublished),
          self = this;
      var onPublished = function () {
        self._logsPublished += parseInt(logs.rawLength, 10);
      };
      ADL.BugReporting.postLogs(ADL.r(onPublished),
          {
            userId:this.userId,
            logs:logs.content,
            scopeId:this.scopeId,
            logsType:SERVICE_LOGS_TYPE
          });

    }


  };


})(window);/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 04.03.13 16:18
 */


(function (w, $) {
  'use strict';

  var OVERLAY = '<div id="adlNotifOverlay" style="z-index: 10000;' +
          'position: fixed;left: 0;top: 0;background: #333;height: 100%;' +
          'width: 100%;' +
          '-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);' +
          'filter: alpha(opacity=50);opacity: 0.5;"></div>',
      NOTIFICATION_BOX = '<div id="adlNotifWrapper" ' +
          'style="height: auto; position: fixed; top: 10%;' +
          'position: fixed;overflow: hidden;background: #fbfbfb;' +
          'border: 1px solid #fff;z-index:10001;' +
          'box-shadow: 0 1px 10px #333;' +
          'padding:0 10px;' +
          '-moz-box-shadow: 0 1px 10px #333;' +
          '-webkit-box-shadow: 0 1px 10px #333;' +
          'box-shadow: 0 1px 10px rgba(32, 32, 32, 0.5);' +
          '-moz-box-shadow: 0 1px 10px rgba(32, 32, 32, 0.5);' +
          '-webkit-box-shadow: 0 1px 10px rgba(32, 32, 32, 0.5);' +
          'font-family: Helvetica, Ubuntu, Arial, sans-serif;' +
          'font-size: 13px;font-weight: normal;line-height: 19px;color: #555;' +
          'text-shadow: 1px 1px 1px #fff;vertical-align: baseline;' +
          '-webkit-font-smoothing: antialiased;' +
          'text-align:justify;">' +
          '<div id="adlNotif" style="height: auto;"></div></div>',
      UPDATE_ERROR =
          '<h3 style="font-size:18px">Plug-in Update Error</h3>' +
              '<p>There was a problem updaing the video conference plug-in. ' +
              'The plug-in is required to use this service. To proceed, please ' +
              'update it manually:' +
              '</p>' +
              '<ul style="margin: 0 0 10px 15px;">' +
              '<li>' +
              'Download the most recent installer from ' +
              '<a id="adlManualUpdateInstallBtn"href="#" target="_blank">here</a>' +
              '</li>' +
              '<li>Quit all running browsers</li>' +
              '<li>Install the plug-in using the installer downloaded</li>' +
              '<li>Launch the browser and use the service.</li>' +
              '</ul>';


  /**
   * @namespace
   * @private
   */
  ADL.Notifications = {};

  /**
   *
   * @since 2.0.0
   * @private
   * @param {string}installerUrl
   */
  ADL.Notifications.showUpdateError = function (installerUrl) {
    var $overlay = $(OVERLAY),
        $notifBox = $(NOTIFICATION_BOX),
        $notifContent = $(UPDATE_ERROR),
        $body = $(w.document.body),
        pageWidth = $(w.document).width(),
        boxWidth = 400;

    $notifContent.find('#adlManualUpdateInstallBtn').attr('href', installerUrl);
    $notifBox.find('#adlNotif').html($notifContent);
    $notifBox.css('width', boxWidth);
    $notifBox.css('left', (pageWidth - boxWidth) / 2);

    $overlay.appendTo($body);
    $notifBox.appendTo($body);
  };


}(window, ADL.jQuery));/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 28-05-2012 14:29
 */

(function () {
  'use strict';

  // Imports
  var Log = ADL.Log;

  /**
   * Class of objects receiving results of calls of AddLive Plug-In or
   * AddLive Service API methods.
   *
   * @summary Defines an interface allowing to receive results of all AddLive
   *          service method calls.
   * @constructor
   * @param {Function=} resultHandler
   *           Function that will be called upon successful result. It should take
   *           single, optional parameter - result of the method call.
   * @param {Function=} errHandler
   *           Function that receives error result of method call. It should take
   *           two params: error code and error message.
   * @param {Object=} context
   *           Additional context that can be used success and error handlers as
   *           this. It will be merged into new instance of the Responder class.
   */
  ADL.Responder = function (resultHandler, errHandler, context) {
    if (context === undefined) {
      context = {};
    }
    this._errHandler = errHandler || ADL.Utils.nop();
    this._resultHandler = resultHandler || ADL.Utils.nop();
    // Clone the context into self.
    ADL.Utils.merge(this, context);

    /**
     * Flag defining whether to send the AER upon error call.
     * @type {boolean}
     * @private
     */
    this._aerOnError = false;
    /**
     *
     * @type {null}
     * @private
     */
    this._resultAdapter = function (x) {
      return x;
    };
  };

  /**
   * Called upon an error.
   *
   * @summary Called upon an error.
   * @since 1.0.0
   * @param {number} errCode
   *          Code of an Error
   * @param {string} errMessage
   *          String with more human friendly error message
   */
  ADL.Responder.prototype.error = function (errCode, errMessage) {
    var cause = ADL.Utils.errorToCause(errMessage, errCode);
    Log.e('Got error result of method call: ' + cause);
    if (this._aerOnError) {
      ADL.BugReporting.reportBug(ADL.r(), {
        type: 'AER-PLUGIN',
        cause: cause,
        /*jshint camelcase:false*/
        error_code: errCode});
    }
    try {
      this._errHandler.call(this, errCode, errMessage);
    } catch (e) {
      Log.w('Error in user defined error handler');
    }
  };

  /**
   * Called upon successful result.
   * @summary Called upon successful result.
   * @since 1.0.0
   * @param {*} result
   *          The result.
   */
  ADL.Responder.prototype.result = function (result) {
    Log.d('Got successful result of method call ' + this.method + ': ' +
        result);
    try {
      result = this._resultAdapter(result);
      this._resultHandler.call(this, result);
    } catch (e) {
      Log.w('Error in user defined success handler for method: ' +
          this.methodName);
      if(e.stack) {
        Log.w(e.stack);
      }
    }
  };

  /**
   * Sets method corresponding to the Responder instance. Useful for debugging
   * purposes.
   *
   * @summary Sets method corresponding to the Responder instance.
   * @since 1.0.0
   * @param {string} method
   *           Method name to be set.
   */
  ADL.Responder.prototype.setMethod = function (method) {
    this.method = method;
  };

  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  /**
   * Successful result handler. Will be called with a value returned by
   * asynchronous invocation.
   *
   * @private
   * @since 1.0.0.0
   * @param {*} [result]
   *          Value of type specific to the call performed.
   */
  ADL.Responder.prototype.resultHandler = function (result) {
    Log.d('Got unhandled result: ' + JSON.stringify(result));
  };

  //noinspection JSUnusedGlobalSymbols
  /**
   * Invocation error handler - called whenever there was an error performing
   * given asynchronous operation.
   *
   * @private
   * @since 1.0.0.0
   * @see ADL.ErrorCodes
   * @param {Number} errCode
   *          Error code explicitly identifying source of the problem.
   * @param {string} errMessage
   *          Additional, human-readable error message.
   */
  ADL.Responder.prototype.errHandler = function (errCode, errMessage) {
    Log.w('Got unhandled error: ' + errCode + ': ' + errMessage);
  };

  /**
   * Enables AER report in case of method failure.
   *
   * @private
   */
  ADL.Responder.prototype.sendAERonError = function (send) {
    this._aerOnError = send;
  };

  /**
   * @private
   * @param {Function} adapter
   */
  ADL.Responder.prototype.setResultAdapter = function (adapter) {
    this._resultAdapter = adapter;
  };

  /**
   * Validates the responder instance.
   *
   * @private
   * @param responder
   */
  ADL.Responder.validate = function (responder) {
    var msg;
    if (responder === undefined) {
      msg = 'Responder not defined';
      ADL.Log.e(msg);
      throw new ADL.AddLiveException(
          msg,
          ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT);
    }
    if (!ADL._validateInterface(ADL.Responder, responder)) {
      msg = 'Invalid responder';
      ADL.Log.e(msg);
      throw new ADL.AddLiveException(
          msg,
          ADL.ErrorCodes.Logic.LOGIC_INVALID_ARGUMENT);
    }
  };


  /**
   * Creates new instance of Responder object.
   *
   * @summary Creates new instance of Responder object.
   * @since 1.0.0
   * @see ADL.Responder
   * @see ADL.r
   * @param {Function} [resultHandler]
   *           Function that will be called upon successful result. It should take
   *           single, optional parameter - result of the method call.
   * @param {Function} [errHandler]
   *           Function that receives error result of method call. It should take
   *           two params: error code and error message.
   * @param {Object} [context]
   *           Additional context that can be used success and error handlers as
   *           this. It will be merged into new instance of the Responder class.
   */
  ADL.createResponder = function (resultHandler, errHandler, context) {
    return new ADL.Responder(resultHandler, errHandler, context);
  };

  /**
   * Shortcut for ADL.createResponder
   *
   * @summary Creates new instance of Responder object. Shortcut for
   *          ADL.createResponder
   * @see ADL.Responder
   * @see ADL.createResponder
   * @param {Function} [resultHandler]
   *           Function that will be called upon successful result. It should take
   *           single, optional parameter - result of the method call.
   * @param {Function} [errHandler]
   *           Function that receives error result of method call. It should take
   *           two params: error code and error message.
   * @param {Object} [context]
   *           Additional context that can be used success and error handlers as
   *           this. It will be merged into new instance of the Responder class.
   * @return {ADL.Responder} newly created Responder object.
   */
  ADL.r = function (resultHandler, errHandler, context) {
    return ADL.createResponder(resultHandler, errHandler, context);
  };
}());/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 12.02.13 10:51
 */


(function (w) {
  'use strict';

  // Imports
  var ADL = w.ADL,
      Log = ADL.Log,
      Utils = null;

  // Consts
  /**
   * String that separates multiple streamer endpoint resolvers.
   *
   * @private
   * @type {String}
   */
  var RESOLVERS_SEPARATOR = ',',

      /**
       * The amount of attempts the resolver should try to resolve the streamer
       * endpoint before reporting an error.
       */
          MAX_ATTEMPTS = 5,

      /**
       * Delay when reiterating over the list of available streamer endpoint
       * resolvers.
       *
       */
          RETRY_DELAY = 1000;

  // Variables

  /**
   * An array of URLs that are streamer endpoint resolvers.
   *
   * @private
   * @type {Array}
   */
  var resolvers = [],

      /**
       * Id of the current application.
       *
       * @private
       */
          appId = NaN;

  /**
   * ===========================================================================
   * Public methods
   * ===========================================================================
   */

  /**
   * Initializes the StreamerResolvers using the configuration given.
   *
   * @private
   * @param {object}config
   */
  function init(config) {
    Log.d('Initializing the StreamerResolver');
    resolvers = config.streamerEndpointResolver.split(RESOLVERS_SEPARATOR);
    appId = config.applicationId;
    Utils = ADL.Utils;
  }

  /**
   * Tries to resolve streamer endpoint for particular connection request.
   *
   * @private
   * @param responder
   * @param connDescr
   */
  function doResolve(responder, connDescr) {
    _resolveInternal(responder, connDescr, 0);
  }

  /**
   * ===========================================================================
   * Private methods
   * ===========================================================================
   */

  function _resolveInternal(responder, connDescr, attempt, seed) {
    seed = _genSeedIfNeeded(seed);
    Log.d('Resolving streamer endpoint. Attempt ' + attempt + '/' +
        MAX_ATTEMPTS);
    var resolver = resolvers[(seed + attempt) % resolvers.length];
    var url = resolver + '?appId=' + appId + '&scopeId=' + connDescr.scopeId;
    if (attempt % resolvers.length === 0) {
      setTimeout(function () {
        Utils.doGet(_genResponder(responder, connDescr, attempt, seed), url);
      }, RETRY_DELAY);
    } else {
      Utils.doGet(_genResponder(responder, connDescr, attempt, seed), url);
    }
  }

  /**
   *
   * @param {ADL.Responder}responder
   * @param {object} connDescr
   * @param {Number} attempt
   * @param {Number} seed
   * @return {Function}
   * @private
   */
  function _genResponder(responder, connDescr, attempt, seed) {
    var onSucc = function (content) {
          connDescr.url = content + '/' + connDescr.scopeId;
          responder.result(connDescr);
        },
        onErr = function (errCode, errMsg) {
          if (attempt < MAX_ATTEMPTS) {
            Log.w('Failed to resolve the streamer endpoint. Falling back to ' +
                'other resolver');
            _resolveInternal(responder, connDescr, attempt + 1, seed);
          } else {
            responder.error(errCode, errMsg);
          }
        };
    return ADL.r(onSucc, onErr);
  }


  function _genSeedIfNeeded(seed) {
    if (seed === undefined) {
      seed = new Date().getTime();
    }
    return seed;
  }

  // Exports
  /**
   * @private
   * @type {{init: Function, doResolve: Function}}
   */
  ADL.StreamerResolver = {
    init:init,
    doResolve:doResolve
  };

}(window));/**
 * Copyright (C) LiveFoundry Inc. 2013
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 *
 * =============================================================================
 * @fileoverview
 *
 * TODO module description
 *
 * @author Tadeusz Kozak
 * @date 06.02.13 13:26
 */


(function () {
  'use strict';


  var Log = ADL.Log;
  /**
   * Module providing set of mostly internal utility functions.
   * @summary Module providing set of mostly internal utility functions.
   * @since 2.0.0
   * @namespace
   */
  ADL.Utils = {};

  /**
   * Validators dictionary maps string to function;
   * @private
   * @type {{}}
   */
  //noinspection JSUnusedGlobalSymbols
  var validators = {
    number:function (value) {
      return !isNaN(parseInt(value + '', 10));
    },
    string:function (value) {
      return typeof value === 'string' || value instanceof String;
    },
    defined:function (value) {
      return value !== null && value !== undefined;
    },
    bool:function (value) {
      return typeof value === 'boolean';
    },
    nonEmpty:function (value) {
      return value.length > 0;
    }
  };

  /**
   * ===========================================================================
   * Public methods
   * ===========================================================================
   */

  /**
   * Generates cause string from error info.
   *
   * @summary Generates cause string from error info.
   * @since 1.20.0
   * @param {string} errMsg
   *          Error message
   * @param {number} errCode
   *          Error code
   * @return {String}
   */
  ADL.Utils.errorToCause = function (errMsg, errCode) {
    return errMsg + ' (' + errCode + ')';
  };


  /**
   * Merges src object into target one, by copying all it's own properties.
   *
   * @param target
   * @param src
   * @private
   */
  ADL.Utils.merge = function (target, src) {
    for (var k in src) {
      if (Object.prototype.hasOwnProperty.call(src, k)) {
        target[k] = src[k];
      }
    }
  };

  ADL.Utils.bind = function (fun, ctx) {
    if (Function.prototype.bind !== undefined) {
      return fun.bind(ctx);
    } else {
      return function () {
        fun.call(ctx);
      };
    }
  };


  /**
   *
   * @param {string} url
   * @param {ADL.Responder} responder
   * @param {object} [params]
   * @private
   */
  ADL.Utils.doGet = function (responder, url, params) {
    var xhr = _getXHR();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          responder.result(xhr.responseText);
        } else {
          responder.error(xhr.status, 'Error performing AJAX request');
        }
      }
    };
    if (params) {
      url += '?';
      for (var k in params) {
        if (Object.prototype.hasOwnProperty.call(params, k)) {
          url += encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) + '&';
        }
      }
      url = url.substr(0, url.length - 1);
    }
    xhr.open('GET', url, true);
    xhr.send('');
  };

  /**
   * Makes CORS post request.
   *
   * @param {string} url
   *          Target URL
   * @param {ADL.Responder} responder
   *          Responder - will receive the request result or error
   * @param {string}data
   *          Data to be posted
   * @private
   */
  ADL.Utils.doPost = function (responder, url, data) {
    var dataStr = '';
    for (var k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        dataStr += k + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    dataStr = dataStr.substring(0, dataStr.length - 1);
    var xhr = _getXHR();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          responder.result(xhr.responseText);
        } else {
          responder.error(xhr.status, 'Error performing AJAX request');
        }
      }
    };
    xhr.open('POST', url, true);
    try {
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    } catch(e) {
      Log.w('Failed to set the content type');
    }
    xhr.send(dataStr);
  };

  /**
   *
   * @param url
   * @param {ADL.Responder} responder
   * @private
   */
  ADL.Utils.getScript = function (url, responder) {
    var head = document.getElementsByTagName('head')[0] ||
        document.documentElement;
    var script = document.createElement('script');
    script.src = url;

// Handle Script loading
    var done = false;

// Attach handlers for all browsers
    script.onload = script.onreadystatechange = function () {
      //noinspection JSValidateTypes
      if (!done && (!this.readyState ||
          this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;

        responder.result();

        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null;
        if (head && script.parentNode) {
          head.removeChild(script);
        }
      }
    };

// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
// This arises when a base node is used (#2709 and #4378).
    head.insertBefore(script, head.firstChild);
  };

  /**
   * Returns a nop, empty function.
   *
   * @returns {Function} empty function
   * @private
   */
  ADL.Utils.nop = function () {
    return _nop;
  };

  /**
   * Validates given parameter
   *
   * @summary Validates given parameter
   * @since 2.0.0
   * @see ADL.Responder
   *
   * @param {ADL.Responder} responder
   *          Responder that will be notified with an error if the validation
   *          fails.
   * @param {string} description
   *          Validation description - defines how to validate the parameter
   *          given
   * @param {*} param
   *          Parameter to be validated
   * @return {boolean} true if the param is valid, false otherwise
   */
  ADL.Utils.validate = function (responder, description, param) {
    Log.d('Validating ' + param + ' against description: ' + description);
    var descParts = description.split('|'),
        name = descParts[0],
        reqs = descParts[1].split(',');
    for (var i = 0; i < reqs.length; i++) {
      if (validators[reqs[i]] === undefined) {
        Log.e('Undefined validator: ' + reqs[i]);
      } else if (!validators[reqs[i]](param)) {
        var msg = 'Parameter ' + name + ' does not meet criteria: ' + reqs[i] +
            '. Input validation failed';
        Log.w(msg);
        responder.error(ADL.ErrorCodes.Logic.INVALID_ARGUMENT, msg);
        return false;
      }
    }
    return true;
  };


  ADL.Storage = window.localStorage || {};

  /**
   * ===========================================================================
   * Private helpers
   * ===========================================================================
   */


  /**
   *
   * @private
   */
  function _getXHR() {
    var xhr;
    if (window.XMLHttpRequest) {
      // code for IE10+, Firefox, Chrome, Opera, Safari
      xhr = new XMLHttpRequest();
      if (!('withCredentials' in xhr)) {
        // IE 8-9
        //noinspection JSUnresolvedFunction
        xhr = new window.XDomainRequest();
        xhr.onload = function () {
          this.readyState = 4;
          this.status = 200;
          this.onreadystatechange();
        };

        xhr.onerror = xhr.ontimeout =
            function () {
              this.status = 400;
              this.readyState = 4;
              this.onreadystatechange();
            }
        ;
        xhr.onprogress = ADL._nop;
        xhr.timeout = 10000;
      }
    }
    else {// It does it make sense, but let's try it
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
  }

  function _nop() {
  }


}());/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 09-07-2012 14:34
 */

(function () {
  'use strict';

  /**
   * Release level of this SDK. May be one of 'stable', 'beta', 'dev'
   *
   * @summary Release level of this SDK instance.
   * @since 1.16.1.0
   * @type {String}
   */
  ADL.RELEASE_LEVEL = 'stable';

  /**
   * Version of the JavaScript bindings.
   * @summary Version of the JavaScript bindings.
   * @since 1.17.0
   * @type {String}
   */
  ADL.VERSION = '2.1.11';

  /**
   *
   * @type {String}
   * @private
   */
  ADL._DEFAULT_STREAMER_ENDPOINT = '174.127.76.174:443';

  /**
   *
   * @type {String}
   * @private
   */
  ADL._PLUGIN_UPDATE_ROOT = 'https://s3.amazonaws.com/api.addlive.com/stable/update/';

  /**
   *
   * @type {String}
   * @private
   */
  ADL._PLUGIN_INSTALL_ROOT = 'https://s3.amazonaws.com/api.addlive.com/stable/update/';

  ADL._CONFIG_URL = 'http://api.addlive.com/stable/config.json';

  ADL._JS_CONFIG_URL = 'http://api.addlive.com/stable/config.js';

  ADL._BUG_REPORTING_ENDPOINT = 'https://cnc2.addlive.com/reliability/';

  ADL._LOGS_REPORTING_ENDPOINT = 'https://cnc3.addlive.com/user_logs.store';

  ADL._STREAMER_ENDPOINT_RESOLVER = 'https://cnc2.addlive.com/resolve_streamer.do,https://cnc3.addlive.com/resolve_streamer.do';

  ADL._TRACKING_ENDPOINT = 'https://cnc2.addlive.com/tracker.gif';

})();/**
 * Copyright (C) SayMama Ltd 2012
 *
 * All rights reserved. Any use, copying, modification, distribution and selling
 * of this software and it's documentation for any purposes without authors'
 * written permission is hereby prohibited.
 */
/**
 * @fileoverview
 * @TODO file description
 *
 * @author Tadeusz Kozak
 * @date 19-07-2012 12:06
 */


(function () {

  /**
   *
   * @type {Object}
   * @private
   */
  ADL._CLIENT_ENDPOINTS = {
    1:'174.127.76.174:443',
    2:'174.127.76.174:443',
    3:'174.127.76.174:443',
    4:'174.127.76.174:443',
    5:'174.127.76.174:443',
    6:'174.127.76.174:443',
    7:'174.127.76.174:443',
    8:'174.127.76.174:443'
  };
})();