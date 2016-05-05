/*!
 * ====================================================
 * 中国象棋 - v1.0.0 - 2016-05-06
 * https://github.com/xsq871839012/chess-kity
 * Copyright (c) 2016 ; Licensed 
 * ====================================================
 */

(function(window) {

/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

/**
 * Implementation of ObjectId generator
 * http://docs.mongodb.org/manual/core/object-id/
 */

var increment = 0x1000000;
var localId1  = ((1+Math.random())*0x100000 | 0).toString(16).substring(1);
var localId2  = ((1+Math.random())*0x100000 | 0).toString(16).substring(1);

function objectId() {
  var dateNow = ((new Date()).getTime()/100 | 0).toString(16);
  return dateNow + localId1 + localId2 + (++increment).toString(16).substring(1);
}

!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.getElementById('content-wrapper').appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
(function() {
var define, requireModule, require, requirejs;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requirejs = require = requireModule = function(name) {
  requirejs._eak_seen = registry;

    if (seen[name]) { return seen[name]; }
    seen[name] = {};

    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }

    var mod = registry[name],
        deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;

    function resolve(child) {
      if (child.charAt(0) !== '.') { return child; }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, -1);

      for (var i=0, l=parts.length; i<l; i++) {
        var part = parts[i];

        if (part === '..') { parentBase.pop(); }
        else if (part === '.') { continue; }
        else { parentBase.push(part); }
      }

      return parentBase.join("/");
    }
  };
})();

define("promise/all", 
  ["./utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global toString */

    var isArray = __dependency1__.isArray;
    var isFunction = __dependency1__.isFunction;

    /**
      Returns a promise that is fulfilled when all the given promises have been
      fulfilled, or rejected if any of them become rejected. The return promise
      is fulfilled with an array that gives all the values in the order they were
      passed in the `promises` array argument.

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.resolve(2);
      var promise3 = RSVP.resolve(3);
      var promises = [ promise1, promise2, promise3 ];

      RSVP.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```

      If any of the `promises` given to `RSVP.all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.reject(new Error("2"));
      var promise3 = RSVP.reject(new Error("3"));
      var promises = [ promise1, promise2, promise3 ];

      RSVP.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```

      @method all
      @for RSVP
      @param {Array} promises
      @param {String} label
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
    */
    function all(promises) {
      /*jshint validthis:true */
      var Promise = this;

      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to all.');
      }

      return new Promise(function(resolve, reject) {
        var results = [], remaining = promises.length,
        promise;

        if (remaining === 0) {
          resolve([]);
        }

        function resolver(index) {
          return function(value) {
            resolveAll(index, value);
          };
        }

        function resolveAll(index, value) {
          results[index] = value;
          if (--remaining === 0) {
            resolve(results);
          }
        }

        for (var i = 0; i < promises.length; i++) {
          promise = promises[i];

          if (promise && isFunction(promise.then)) {
            promise.then(resolver(i), reject);
          } else {
            resolveAll(i, promise);
          }
        }
      });
    }

    __exports__.all = all;
  });
define("promise/asap", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var browserGlobal = (typeof window !== 'undefined') ? window : {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

    // node
    function useNextTick() {
      return function() {
        process.nextTick(flush);
      };
    }

    function useMutationObserver() {
      var iterations = 0;
      var observer = new BrowserMutationObserver(flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    function useSetTimeout() {
      return function() {
        local.setTimeout(flush, 1);
      };
    }

    var queue = [];
    function flush() {
      for (var i = 0; i < queue.length; i++) {
        var tuple = queue[i];
        var callback = tuple[0], arg = tuple[1];
        callback(arg);
      }
      queue = [];
    }

    var scheduleFlush;

    // Decide what async method to use to triggering processing of queued callbacks:
    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
      scheduleFlush = useMutationObserver();
    } else {
      scheduleFlush = useSetTimeout();
    }

    function asap(callback, arg) {
      var length = queue.push([callback, arg]);
      if (length === 1) {
        // If length is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        scheduleFlush();
      }
    }

    __exports__.asap = asap;
  });
define("promise/config", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var config = {
      instrument: false
    };

    function configure(name, value) {
      if (arguments.length === 2) {
        config[name] = value;
      } else {
        return config[name];
      }
    }

    __exports__.config = config;
    __exports__.configure = configure;
  });
define("promise/polyfill", 
  ["./promise","./utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /*global self*/
    var RSVPPromise = __dependency1__.Promise;
    var isFunction = __dependency2__.isFunction;

    function polyfill() {
      var local;

      if (typeof global !== 'undefined') {
        local = global;
      } else if (typeof window !== 'undefined' && window.document) {
        local = window;
      } else {
        local = self;
      }

      var es6PromiseSupport = 
        "Promise" in local &&
        // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        "resolve" in local.Promise &&
        "reject" in local.Promise &&
        "all" in local.Promise &&
        "race" in local.Promise &&
        // Older version of the spec had a resolver object
        // as the arg rather than a function
        (function() {
          var resolve;
          new local.Promise(function(r) { resolve = r; });
          return isFunction(resolve);
        }());

      // !es6PromiseSupport || ~window.location.href.indexOf('rsvpromise')
      if (true) {
        local.Promise = RSVPPromise;
      }
    }

    __exports__.polyfill = polyfill;
  });
define("promise/promise", 
  ["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    var config = __dependency1__.config;
    var configure = __dependency1__.configure;
    var objectOrFunction = __dependency2__.objectOrFunction;
    var isFunction = __dependency2__.isFunction;
    var now = __dependency2__.now;
    var all = __dependency3__.all;
    var race = __dependency4__.race;
    var staticResolve = __dependency5__.resolve;
    var staticReject = __dependency6__.reject;
    var asap = __dependency7__.asap;

    var counter = 0;

    config.async = asap; // default async is asap;

    function Promise(resolver) {
      if (!isFunction(resolver)) {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }

      if (!(this instanceof Promise)) {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }

      this._subscribers = [];

      invokeResolver(resolver, this);
    }

    function invokeResolver(resolver, promise) {
      function resolvePromise(value) {
        resolve(promise, value);
      }

      function rejectPromise(reason) {
        reject(promise, reason);
      }

      try {
        resolver(resolvePromise, rejectPromise);
      } catch(e) {
        rejectPromise(e);
      }
    }

    function invokeCallback(settled, promise, callback, detail) {
      var hasCallback = isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        try {
          value = callback(detail);
          succeeded = true;
        } catch(e) {
          failed = true;
          error = e;
        }
      } else {
        value = detail;
        succeeded = true;
      }

      if (handleThenable(promise, value)) {
        return;
      } else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (failed) {
        reject(promise, error);
      } else if (settled === FULFILLED) {
        resolve(promise, value);
      } else if (settled === REJECTED) {
        reject(promise, value);
      }
    }

    var PENDING   = void 0;
    var SEALED    = 0;
    var FULFILLED = 1;
    var REJECTED  = 2;

    function subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      subscribers[length] = child;
      subscribers[length + FULFILLED] = onFulfillment;
      subscribers[length + REJECTED]  = onRejection;
    }

    function publish(promise, settled) {
      var child, callback, subscribers = promise._subscribers, detail = promise._detail;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        invokeCallback(settled, child, callback, detail);
      }

      promise._subscribers = null;
    }

    Promise.prototype = {
      constructor: Promise,

      _state: undefined,
      _detail: undefined,
      _subscribers: undefined,

      then: function(onFulfillment, onRejection) {
        var promise = this;

        var thenPromise = new this.constructor(function() {});

        if (this._state) {
          var callbacks = arguments;
          config.async(function invokePromiseCallback() {
            invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
          });
        } else {
          subscribe(this, thenPromise, onFulfillment, onRejection);
        }

        return thenPromise;
      },

      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };

    Promise.all = all;
    Promise.race = race;
    Promise.resolve = staticResolve;
    Promise.reject = staticReject;

    function handleThenable(promise, value) {
      var then = null,
      resolved;

      try {
        if (promise === value) {
          throw new TypeError("A promises callback cannot return that same promise.");
        }

        if (objectOrFunction(value)) {
          then = value.then;

          if (isFunction(then)) {
            then.call(value, function(val) {
              if (resolved) { return true; }
              resolved = true;

              if (value !== val) {
                resolve(promise, val);
              } else {
                fulfill(promise, val);
              }
            }, function(val) {
              if (resolved) { return true; }
              resolved = true;

              reject(promise, val);
            });

            return true;
          }
        }
      } catch (error) {
        if (resolved) { return true; }
        reject(promise, error);
        return true;
      }

      return false;
    }

    function resolve(promise, value) {
      if (promise === value) {
        fulfill(promise, value);
      } else if (!handleThenable(promise, value)) {
        fulfill(promise, value);
      }
    }

    function fulfill(promise, value) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = value;

      config.async(publishFulfillment, promise);
    }

    function reject(promise, reason) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = reason;

      config.async(publishRejection, promise);
    }

    function publishFulfillment(promise) {
      publish(promise, promise._state = FULFILLED);
    }

    function publishRejection(promise) {
      publish(promise, promise._state = REJECTED);
    }

    __exports__.Promise = Promise;
  });
define("promise/race", 
  ["./utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global toString */
    var isArray = __dependency1__.isArray;

    /**
      `RSVP.race` allows you to watch a series of promises and act as soon as the
      first promise given to the `promises` argument fulfills or rejects.

      Example:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 2");
        }, 100);
      });

      RSVP.race([promise1, promise2]).then(function(result){
        // result === "promise 2" because it was resolved before promise1
        // was resolved.
      });
      ```

      `RSVP.race` is deterministic in that only the state of the first completed
      promise matters. For example, even if other promises given to the `promises`
      array argument are resolved, but the first completed promise has become
      rejected before the other promises became fulfilled, the returned promise
      will become rejected:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error("promise 2"));
        }, 100);
      });

      RSVP.race([promise1, promise2]).then(function(result){
        // Code here never runs because there are rejected promises!
      }, function(reason){
        // reason.message === "promise2" because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```

      @method race
      @for RSVP
      @param {Array} promises array of promises to observe
      @param {String} label optional string for describing the promise returned.
      Useful for tooling.
      @return {Promise} a promise that becomes fulfilled with the value the first
      completed promises is resolved with if the first completed promise was
      fulfilled, or rejected with the reason that the first completed promise
      was rejected with.
    */
    function race(promises) {
      /*jshint validthis:true */
      var Promise = this;

      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to race.');
      }
      return new Promise(function(resolve, reject) {
        var results = [], promise;

        for (var i = 0; i < promises.length; i++) {
          promise = promises[i];

          if (promise && typeof promise.then === 'function') {
            promise.then(resolve, reject);
          } else {
            resolve(promise);
          }
        }
      });
    }

    __exports__.race = race;
  });
define("promise/reject", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      `RSVP.reject` returns a promise that will become rejected with the passed
      `reason`. `RSVP.reject` is essentially shorthand for the following:

      ```javascript
      var promise = new RSVP.Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      Instead of writing the above, your code now simply becomes the following:

      ```javascript
      var promise = RSVP.reject(new Error('WHOOPS'));

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      @method reject
      @for RSVP
      @param {Any} reason value that the returned promise will be rejected with.
      @param {String} label optional string for identifying the returned promise.
      Useful for tooling.
      @return {Promise} a promise that will become rejected with the given
      `reason`.
    */
    function reject(reason) {
      /*jshint validthis:true */
      var Promise = this;

      return new Promise(function (resolve, reject) {
        reject(reason);
      });
    }

    __exports__.reject = reject;
  });
define("promise/resolve", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function resolve(value) {
      /*jshint validthis:true */
      if (value && typeof value === 'object' && value.constructor === this) {
        return value;
      }

      var Promise = this;

      return new Promise(function(resolve) {
        resolve(value);
      });
    }

    __exports__.resolve = resolve;
  });
define("promise/utils", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function objectOrFunction(x) {
      return isFunction(x) || (typeof x === "object" && x !== null);
    }

    function isFunction(x) {
      return typeof x === "function";
    }

    function isArray(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    }

    // Date.now is not available in browsers < IE9
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
    var now = Date.now || function() { return new Date().getTime(); };


    __exports__.objectOrFunction = objectOrFunction;
    __exports__.isFunction = isFunction;
    __exports__.isArray = isArray;
    __exports__.now = now;
  });
requireModule('promise/polyfill').polyfill();
}());
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
(function($) {
    /**
     * 让 jQuery 支持 Blob 类型
     */
    $.ajaxTransport('+*', function(options, originalOptions, jqXHR) {

        if (window.FormData && ((options.dataType &&
            (options.dataType === 'blob' || options.dataType === 'arraybuffer')) ||
            (options.data && ((window.Blob && options.data instanceof Blob) ||
                (window.ArrayBuffer && options.data instanceof ArrayBuffer)))
        )) {
            return {
                /**
                 * Return a transport capable of sending and/or receiving blobs - in this case, we instantiate
                 * a new XMLHttpRequest and use it to actually perform the request, and funnel the result back
                 * into the jquery complete callback (such as the success function, done blocks, etc.)
                 *
                 * @param headers
                 * @param completeCallback
                 */
                send: function(headers, completeCallback) {
                    var xhr = new XMLHttpRequest(),
                        url = options.url || window.location.href,
                        type = options.type || 'GET',
                        dataType = options.dataType || 'text',
                        data = options.data || null,
                        async = options.async || true,
                        key;

                    xhr.addEventListener('load', function() {
                        var response = {},
                            status, isSuccess;

                        isSuccess = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;

                        if (isSuccess) {
                            response[dataType] = xhr.response;
                        } else {
                            // In case an error occured we assume that the response body contains
                            // text data - so let's convert the binary data to a string which we can
                            // pass to the complete callback.
                            response.text = String.fromCharCode.apply(null, new Uint8Array(xhr.response));
                        }

                        completeCallback(xhr.status, xhr.statusText, response, xhr.getAllResponseHeaders());
                    });

                    xhr.open(type, url, async);
                    xhr.responseType = dataType;

                    for (key in headers) {
                        if (headers.hasOwnProperty(key)) xhr.setRequestHeader(key, headers[key]);
                    }
                    xhr.send(data);
                },
                abort: function() {
                    jqXHR.abort();
                }
            };
        }
    });
})(window.jQuery);
/*!
 * ====================================================
 * kity - v2.0.4 - 2015-09-09
 * https://github.com/fex-team/kity
 * GitHub: https://github.com/fex-team/kity.git 
 * Copyright (c) 2015 Baidu FEX; Licensed BSD
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/animate/animator.js
/**
 * @fileOverview
 *
 * 提供基本的动画支持
 */
_p[0] = {
    value: function(require) {
        function parseTime(str) {
            var value = parseFloat(str, 10);
            if (/ms/.test(str)) {
                return value;
            }
            if (/s/.test(str)) {
                return value * 1e3;
            }
            if (/min/.test(str)) {
                return value * 60 * 1e3;
            }
            return value;
        }
        var Timeline = _p.r(8);
        var easingTable = _p.r(1);
        /**
     * @class kity.Animator
     * @catalog animate
     * @description 表示一个动画启动器，可以作用于不同的对象进行动画
     */
        var Animator = _p.r(11).createClass("Animator", {
            /**
         * @constructor
         * @for kity.Animator
         * @catalog animate
         *
         * @grammar new kity.Animator(beginValue, finishValue, setter)
         * @grammar new kity.Animator(option)
         *
         * @param  {any}      beginValue|opt.beginValue
         *     动画的起始值，允许的类型有数字、数组、字面量、kity.Point、kity.Vector、kity.Box、kity.Matrix
         *
         * @param  {any}      finishValue|opt.beginValue
         *     动画的结束值，类型应于起始值相同
         *
         * @param  {Function} setter|opt.setter
         *     值的使用函数，接受三个参数: function(target, value, timeline)
         *         target   {object}        动画的目标
         *         value    {any}           动画的当前值
         *         timeline {kity.Timeline} 动画当前的时间线对象
         */
            constructor: function(beginValue, finishValue, setter) {
                if (arguments.length == 1) {
                    var opt = arguments[0];
                    this.beginValue = opt.beginValue;
                    this.finishValue = opt.finishValue;
                    this.setter = opt.setter;
                } else {
                    this.beginValue = beginValue;
                    this.finishValue = finishValue;
                    this.setter = setter;
                }
            },
            /**
         * @method start()
         * @for kity.Animator
         * @description 使用当前的动画器启动在指定目标上启动动画
         *
         * @grammar start(target, duration, easing, delay, callback) => {kity.Timeline}
         * @grammar start(target, option) => {kity.Timeline}
         *
         * @param  {object} target
         *     启动动画的目标
         *
         * @param  {Number|String} duration|option.duration
         *     [Optional] 动画的持续时间，如 300、"300ms"、"1.5min"
         *
         * @param  {String|Function} easing|option.easing
         *     [Optional] 动画使用的缓动函数，如 "ease"、"linear"、"swing"
         *
         * @param  {Number|String} delay|option.delay
         *     [Optional] 动画的播放延迟时间
         *
         * @param  {Function} callback|option.callback
         *     [Optional] 动画结束后的回调函数
         *
         * @example
         *
         * ```js
         * var turnRed = new kity.Animator(
         *     new kity.Color('yellow'),
         *     new kity.Color('red'),
         *     function(target, value) {
         *         target.fill(value);
         *     });
         *
         * turnRed.start(rect, 300, 'ease', function() {
         *     console.log('I am red!');
         * });
         * ```
         */
            start: function(target, duration, easing, delay, callback) {
                if (arguments.length === 2 && typeof duration == "object") {
                    easing = duration.easing;
                    delay = duration.delay;
                    callback = duration.callback;
                    duration = duration.duration;
                }
                if (arguments.length === 4 && typeof delay == "function") {
                    callback = delay;
                    delay = 0;
                }
                var timeline = this.create(target, duration, easing, callback);
                delay = parseTime(delay);
                if (delay > 0) {
                    setTimeout(function() {
                        timeline.play();
                    }, delay);
                } else {
                    timeline.play();
                }
                return timeline;
            },
            /**
         * @method create()
         * @for kity.Animator
         * @description 使用当前的动画器为指定目标创建时间线
         *
         * @grammar create(target, duration, easing, callback) => {kity.Timeline}
         *
         * @param  {object}            target   要创建的时间线的目标
         * @param  {Number|String}     duration 要创建的时间线的长度，如 300、"5s"、"0.5min"
         * @param  {String|Function}   easing   要创建的时间线的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 时间线播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * var expand = new kity.Animator({
         *     beginValue: function(target) {
         *         return target.getBox();
         *     },
         *     finishValue: function(target) {
         *         return target.getBox().expand(100, 100, 100, 100);
         *     },
         *     setter: function(target, value) {
         *         target.setBox(value)
         *     }
         * });
         *
         * var timeline = expand.create(rect, 300);
         * timeline.repeat(3).play();
         * ```
         */
            create: function(target, duration, easing, callback) {
                var timeline;
                duration = duration && parseTime(duration) || Animator.DEFAULT_DURATION;
                easing = easing || Animator.DEFAULT_EASING;
                if (typeof easing == "string") {
                    easing = easingTable[easing];
                }
                timeline = new Timeline(this, target, duration, easing);
                if (typeof callback == "function") {
                    timeline.on("finish", callback);
                }
                return timeline;
            },
            /**
         * @method reverse()
         * @for kity.Animator
         * @grammar reverse() => {kity.Animator}
         * @description 创建一个与当前动画器相反的动画器
         *
         * @example
         *
         * ```js
         * var turnYellow = turnRed.reverse();
         * ```
         */
            reverse: function() {
                return new Animator(this.finishValue, this.beginValue, this.setter);
            }
        });
        Animator.DEFAULT_DURATION = 300;
        Animator.DEFAULT_EASING = "linear";
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            /**
         * @method animate()
         * @for kity.Shape
         * @description 在图形上播放使用指定的动画器播放动画，如果图形当前有动画正在播放，则会加入播放队列
         *
         * @grammar animate(animator, duration, easing, delay, callback)
         *
         * @param  {object}            animator 播放动画使用的动画器
         * @param  {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param  {Number|String}     delay    动画播放前的延时
         * @param  {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * rect.animate(turnRed, 300); // turnRect 是一个动画器
         * rect.animate(expand, 500);  // turnRect 播放结束后播放 expand
         * ```
         */
            animate: function(animator, duration, easing, delay, callback) {
                var queue = this._KityAnimateQueue = this._KityAnimateQueue || [];
                var timeline = animator.create(this, duration, easing, callback);
                function dequeue() {
                    queue.shift();
                    if (queue.length) {
                        setTimeout(queue[0].t.play.bind(queue[0].t), queue[0].d);
                    }
                }
                timeline.on("finish", dequeue);
                queue.push({
                    t: timeline,
                    d: delay
                });
                if (queue.length == 1) {
                    setTimeout(timeline.play.bind(timeline), delay);
                }
                return this;
            },
            /**
         * @method timeline()
         * @for kity.Shape
         * @description 获得当前正在播放的动画的时间线
         *
         * @grammar timeline() => {kity.Timeline}
         *
         * @example
         *
         * ```js
         * rect.timeline().repeat(2);
         * ```
         */
            timeline: function() {
                return this._KityAnimateQueue[0].t;
            },
            /**
         * @method stop()
         * @for kity.Shape
         * @description 停止当前正在播放的动画
         *
         * @grammar stop() => {this}
         *
         * @example
         *
         * ```js
         * rect.stop(); // 停止 rect 上的动画
         * ```
         */
            stop: function() {
                var queue = this._KityAnimateQueue;
                if (queue) {
                    while (queue.length) {
                        queue.shift().t.stop();
                    }
                }
                return this;
            }
        });
        return Animator;
    }
};

//src/animate/easing.js
/**
 * Kity Animate Easing modified from jQuery Easing
 * Author: techird
 * Changes:
 *     1. make easing functions standalone
 *     2. remove the 'x' parameter
 */
/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
_p[1] = {
    value: function(require, exports, module) {
        var easings = {
            // t: current_time, b: begin_value, c: change_value, d: duration
            linear: function(t, b, c, d) {
                return c * (t / d) + b;
            },
            swing: function(t, b, c, d) {
                return easings.easeOutQuad(t, b, c, d);
            },
            ease: function(t, b, c, d) {
                return easings.easeInOutCubic(t, b, c, d);
            },
            easeInQuad: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * (--t * (t - 2) - 1) + b;
            },
            easeInCubic: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function(t, b, c, d) {
                return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function(t, b, c, d) {
                return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function(t, b, c, d) {
                if (t === 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function(t, b, c, d) {
                return c - easings.easeOutBounce(d - t, 0, c, d) + b;
            },
            easeOutBounce: function(t, b, c, d) {
                if ((t /= d) < 1 / 2.75) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < 2 / 2.75) {
                    return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
                } else if (t < 2.5 / 2.75) {
                    return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
                }
            },
            easeInOutBounce: function(t, b, c, d) {
                if (t < d / 2) return easings.easeInBounce(t * 2, 0, c, d) * .5 + b;
                return easings.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        };
        return easings;
    }
};

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
//src/animate/frame.js
/**
 * @fileOverview
 *
 * 提供动画帧的基本支持
 */
_p[2] = {
    value: function(require, exports) {
        // 原生动画帧方法 polyfill
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(fn) {
            return setTimeout(fn, 1e3 / 60);
        };
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;
        // 上一个请求的原生动画帧 id
        var frameRequestId;
        // 等待执行的帧动作的集合，这些帧的方法将在下个原生动画帧同步执行
        var pendingFrames = [];
        /**
     * 添加一个帧到等待集合中
     *
     * 如果添加的帧是序列的第一个，至少有一个帧需要被执行，则会请求一个原生动画帧来执行
     */
        function pushFrame(frame) {
            if (pendingFrames.push(frame) === 1) {
                frameRequestId = requestAnimationFrame(executePendingFrames);
            }
        }
        /**
     * 执行所有等待帧
     */
        function executePendingFrames() {
            var frames = pendingFrames;
            pendingFrames = [];
            while (frames.length) {
                executeFrame(frames.pop());
            }
            frameRequestId = 0;
        }
        /**
     * @method kity.requestFrame
     * @catalog animate
     * @grammar kity.requestFrame(action) => {frame}
     * @description 请求一个帧，执行指定的动作。动作回调提供一些有用的信息
     *
     * @param {Function} action
     *
     *     要执行的动作，该动作回调有一个参数 frame，其中：
     *
     *     frame.time {Number}
     *         动作执行时的时间戳（ms）
     *
     *     frame.index {Number}
     *         当前执行的帧的编号（首帧为 0）
     *
     *     frame.dur {Number}
     *         上一帧至当前帧经过的时间，单位 ms
     *
     *     frame.elapsed {Number}
     *         从首帧开始到当前帧经过的时间，单位 ms
     *
     *     frame.action {Number}
     *         指向当前的帧处理函数
     *
     *     frame.next()
     *         表示下一帧继续执行。如果不调用该方法，将不会执行下一帧。
     *
     * @example
     *
     * ```js
     * kity.requestFrame(function(frame) {
     *     console.log('平均帧率:' + frame.elapsed / (frame.index + 1));
     *
     *     // 更新或渲染动作
     *
     *     frame.next(); //继续执行下一帧
     * });
     * ```
     */
        function requestFrame(action) {
            var frame = initFrame(action);
            pushFrame(frame);
            return frame;
        }
        /**
     * @method kity.releaseFrame
     * @catalog animate
     * @grammar kity.releaseFrame(frame)
     * @description 释放一个已经请求过的帧，如果该帧在等待集合里，将移除，下个动画帧不会执行释放的帧
     *
     * @param {frame} frame 使用 kity.requestFrame() 返回的帧
     *
     * @example
     *
     * ```js
     * var frame = kity.requestFrame(function() {....});
     * kity.releaseFrame(frame);
     * ```
     */
        function releaseFrame(frame) {
            var index = pendingFrames.indexOf(frame);
            if (~index) {
                pendingFrames.splice(index, 1);
            }
            if (pendingFrames.length === 0) {
                cancelAnimationFrame(frameRequestId);
            }
        }
        /**
     * 初始化一个帧，主要用于后续计算
     */
        function initFrame(action) {
            var frame = {
                index: 0,
                time: +new Date(),
                elapsed: 0,
                action: action,
                next: function() {
                    pushFrame(frame);
                }
            };
            return frame;
        }
        /**
     * 执行一个帧动作
     */
        function executeFrame(frame) {
            // 当前帧时间错
            var time = +new Date();
            // 当上一帧到当前帧经过的时间
            var dur = time - frame.time;
            //
            // http://stackoverflow.com/questions/13133434/requestanimationframe-detect-stop
            // 浏览器最小化或切换标签，requestAnimationFrame 不会执行。
            // 检测时间超过 200 ms（频率小于 5Hz ） 判定为计时器暂停，重置为一帧长度
            //
            if (dur > 200) {
                dur = 1e3 / 60;
            }
            frame.dur = dur;
            frame.elapsed += dur;
            frame.time = time;
            frame.action.call(null, frame);
            frame.index++;
        }
        // 暴露
        exports.requestFrame = requestFrame;
        exports.releaseFrame = releaseFrame;
    }
};

//src/animate/motionanimator.js
/**
 * @fileOverview
 *
 * 路径动画器，可以让一个物体沿着某个轨迹运动
 */
_p[3] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(34);
        var Path = _p.r(46);
        var Shape = _p.r(60);
        /**
     * @class kity.MotionAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 路径动画器，可以让一个物体沿着某个轨迹运动
     *
     * @example
     *
     * ```js
     * var motionAnimator = new MotionAnimator('M0,0C100,0,100,0,100,100L200,200');
     * motionAnimator.start(rect, 3000);
     * ```
     */
        var MotionAnimator = _p.r(11).createClass("MotionAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.MotionAnimator
         * @grammar new kity.MotionAnimator(path, doRotate)
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {boolean} doRotate 是否让运动的目标沿着路径的切线方向旋转
         */
            constructor: function(path, doRotate) {
                var me = this;
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value) {
                        var path = me.motionPath instanceof Path ? me.motionPath.getPathData() : me.motionPath;
                        var point = g.pointAtPath(path, value);
                        target.setTranslate(point.x, point.y);
                        if (this.doRotate) target.setRotate(point.tan.getAngle());
                    }
                });
                /**
             * @property doRotate
             * @for kity.MotionAnimator
             * @type {boolean}
             * @description 是否让运动的目标沿着路径的切线方向旋转
             *
             * @example
             *
             * ```js
             * motionAnimator.doRotate = true; // 目标沿着切线方向旋转
             * ```
             */
                this.doRotate = doRotate;
                /**
             * @property motionPath
             * @for kity.MotionAnimator
             * @type  {kity.Path|String|PathSegment}
             * @description 运动沿着的路径，可以在动画过程中更新
             */
                this.motionPath = path;
            }
        });
        _p.r(11).extendClass(Shape, {
            /**
         * @method motion()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形沿着指定的路径运动
         *
         * @grammar motion(path, duration, easing, delay, callback) => this
         *
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            motion: function(path, duration, easing, delay, callback) {
                return this.animate(new MotionAnimator(path), duration, easing, delay, callback);
            }
        });
        return MotionAnimator;
    }
};

//src/animate/opacityanimator.js
/**
 * @fileOverview
 *
 * 透明度动画器，让图形动画过度到指定的透明度。
 */
_p[4] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.OpacityAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 透明度动画器，让图形动画过度到指定的透明度
     */
        var OpacityAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.OpacityAnimator
         * @grammar new kity.OpacityAnimator(opacity)
         *
         * @param  {Number} opacity 目标透明度，取值范围 0 - 1
         */
            constructor: function(opacity) {
                this.callBase({
                    beginValue: function(target) {
                        return target.getOpacity();
                    },
                    finishValue: opacity,
                    setter: function(target, value) {
                        target.setOpacity(value);
                    }
                });
            }
        });
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxOpacity()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fxOpacity(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxOpacity: function(opacity, duration, easing, delay, callback) {
                return this.animate(new OpacityAnimator(opacity), duration, easing, delay, callback);
            },
            /**
         * @method fadeTo()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fadeTo(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeTo: function() {
                return this.fxOpacity.apply(this, arguments);
            },
            /**
         * @method fadeIn()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡入
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeIn: function() {
                return this.fxOpacity.apply(this, [ 1 ].concat([].slice.call(arguments)));
            },
            /**
         * @method fadeOut()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡出
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeOut: function() {
                return this.fxOpacity.apply(this, [ 0 ].concat([].slice.call(arguments)));
            }
        });
        return OpacityAnimator;
    }
};

//src/animate/pathanimator.js
/**
 * @fileOverview
 *
 * 路径补间动画器，让图形从一个形状变为另一个形状
 */
_p[5] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(34);
        /**
     * @catalog animate
     *
     * @class kity.PathAnimator
     * @base kity.Animator
     * @description 路径补间动画器，让图形从一个形状变为另一个形状
     *
     * @example
     *
     * ```js
     * var path = new kity.Path('M0,0L0,100');
     * var pa = new kity.PathAnimator('M0,0C100,0,100,0,100,100');
     * pa.start(path, 300);
     * ```
     */
        var PathAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.PathAnimator
         *
         * @grammar new kity.Path.Animator(path)
         *
         * @param  {String|PathSegment} path 目标形状的路径数据
         *
         */
            constructor: function(path) {
                this.callBase({
                    beginValue: function(target) {
                        this.beginPath = target.getPathData();
                        return 0;
                    },
                    finishValue: 1,
                    setter: function(target, value) {
                        target.setPathData(g.pathTween(this.beginPath, path, value));
                    }
                });
            }
        });
        var Path = _p.r(46);
        _p.r(11).extendClass(Path, {
            /**
         * @catalog animate
         *
         * @method fxPath()
         * @for kity.Shape
         * @description 以动画的形式把路径变换为新路径
         *
         * @grammar fxPath(path, duration, easing, delay, callback) => {this}
         *
         * @param {String|PathSegment}   path     要变换新路径
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxPath: function(path, duration, easing, delay, callback) {
                return this.animate(new PathAnimator(path), duration, easing, delay, callback);
            }
        });
        return PathAnimator;
    }
};

//src/animate/rotateanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标旋转的动画器
 */
_p[6] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.RotateAnimator
     * @base Animator
     * @description 提供支持目标旋转的动画器
     */
        var RotateAnimator = _p.r(11).createClass("RotateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.RotateAnimator
         *
         * @grammar new kity.RotateAnimator(deg, ax, ay)
         *
         * @param  {Number} deg 要旋转的角度
         */
            constructor: function(deg) {
                this.callBase({
                    beginValue: 0,
                    finishValue: deg,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        target.rotate(delta, ax, ay);
                    }
                });
            }
        });
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxRotate()
         * @for kity.Shape
         * @description 让目标以动画旋转指定的角度
         *
         * @grammar fxRotate(deg, duration, easing, delay) => {this}
         *
         * @param {Number}            deg      要旋转的角度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxRotate: function(deg, duration, easing, delay, callback) {
                return this.animate(new RotateAnimator(deg), duration, easing, delay, callback);
            }
        });
        return RotateAnimator;
    }
};

//src/animate/scaleanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标缩放的动画器
 */
_p[7] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.ScaleAnimator
     * @base kity.Animator
     * @description 提供支持目标缩放的动画器
     */
        var ScaleAnimator = _p.r(11).createClass("ScaleAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.ScaleAnimator
         *
         * @grammar new kity.ScaleAnimator(sx, sy)
         * @param  {Number} sx x 轴的缩放比例
         * @param  {Number} sy y 轴的缩放比例
         */
            constructor: function(sx, sy) {
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        var kx = Math.pow(sx, delta);
                        var ky = Math.pow(sy, delta);
                        target.scale(ky, kx);
                    }
                });
            }
        });
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxScale
         * @for kity.Shape
         * @description 动画缩放当前的图形
         *
         * @grammar fxScale(sx, sy, duration, easing, delay, callback) => {this}
         *
         * @param {Number} sx x 轴的缩放比例
         * @param {Number} sy y 轴的缩放比例
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxScale: function(sx, sy, duration, easing, delay, callback) {
                return this.animate(new ScaleAnimator(sx, sy), duration, easing, delay, callback);
            }
        });
        return ScaleAnimator;
    }
};

//src/animate/timeline.js
/**
 * @fileOverview
 *
 * 动画时间线的实现
 */
_p[8] = {
    value: function(require) {
        var EventHandler = _p.r(33);
        var utils = _p.r(12);
        var frame = _p.r(2);
        function getPercentValue(b, f, p) {
            return utils.paralle(b, f, function(b, f) {
                return b + (f - b) * p;
            });
        }
        function getDelta(v1, v2) {
            return utils.paralle(v1, v2, function(v1, v2) {
                return v2 - v1;
            });
        }
        function TimelineEvent(timeline, type, param) {
            this.timeline = timeline;
            this.target = timeline.target;
            this.type = type;
            for (var name in param) {
                if (param.hasOwnProperty(name)) {
                    this[name] = param[name];
                }
            }
        }
        /**
     * @class kity.Timeline
     * @catalog animate
     * @mixins EventHandler
     * @description 动画时间线
     */
        var Timeline = _p.r(11).createClass("Timeline", {
            mixins: [ EventHandler ],
            /**
         * @constructor
         * @for kity.Timeline
         * @private
         * @description 时间线应该由动画器进行构造，不应手动创建
         *
         */
            constructor: function(animator, target, duration, easing) {
                this.callMixin();
                this.target = target;
                this.time = 0;
                this.duration = duration;
                this.easing = easing;
                this.animator = animator;
                this.beginValue = animator.beginValue;
                this.finishValue = animator.finishValue;
                this.setter = animator.setter;
                this.status = "ready";
            },
            /**
         * @private
         *
         * 让时间线进入下一帧
         */
            nextFrame: function(frame) {
                if (this.status != "playing") {
                    return;
                }
                this.time += frame.dur;
                this.setValue(this.getValue());
                if (this.time >= this.duration) {
                    this.timeUp();
                }
                frame.next();
            },
            /**
         * @method getPlayTime()
         * @for kity.Timeline
         * @grammar getPlayTime() => {Number}
         * @description 获得当前播放的时间，取值区间为 [0, duration]
         */
            getPlayTime: function() {
                return this.rollbacking ? this.duration - this.time : this.time;
            },
            /**
         * @method getTimeProportion()
         * @for kity.Timeline
         * @grammar getTimeProportion() => {Number}
         * @description 获得当前播放时间的比例，取值区间为 [0, 1]
         */
            getTimeProportion: function() {
                return this.getPlayTime() / this.duration;
            },
            /**
         * @method getValueProportion()
         * @for kity.Timeline
         * @grammar getValueProportion() => {Number}
         * @description 获得当前播放时间对应值的比例，取值区间为 [0, 1]；该值实际上是时间比例值经过缓动函数计算之后的值。
         */
            getValueProportion: function() {
                return this.easing(this.getPlayTime(), 0, 1, this.duration);
            },
            /**
         * @method getValue()
         * @for kity.Timeline
         * @grammar getValue() => {any}
         * @description 返回当前播放时间对应的值。
         */
            getValue: function() {
                var b = this.beginValue;
                var f = this.finishValue;
                var p = this.getValueProportion();
                return getPercentValue(b, f, p);
            },
            /**
         * @private
         *
         * 把值通过动画器的 setter 设置到目标上
         */
            setValue: function(value) {
                this.lastValue = this.currentValue;
                this.currentValue = value;
                this.setter.call(this.target, this.target, value, this);
            },
            /**
         * @method getDelta()
         * @for kity.Timeline
         * @grammar getDelta() => {any}
         * @description 返回当前值和上一帧的值的差值
         */
            getDelta: function() {
                this.lastValue = this.lastValue === undefined ? this.beginValue : this.lastValue;
                return getDelta(this.lastValue, this.currentValue);
            },
            /**
         * @method play()
         * @for kity.Timeline
         * @grammar play() => {this}
         * @description 让时间线播放，如果时间线还没开始，或者已停止、已结束，则重头播放；如果是已暂停，从暂停的位置继续播放
         */
            play: function() {
                var lastStatus = this.status;
                this.status = "playing";
                switch (lastStatus) {
                  case "ready":
                    if (utils.isFunction(this.beginValue)) {
                        this.beginValue = this.beginValue.call(this.target, this.target);
                    }
                    if (utils.isFunction(this.finishValue)) {
                        this.finishValue = this.finishValue.call(this.target, this.target);
                    }
                    this.time = 0;
                    this.setValue(this.beginValue);
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "finished":
                  case "stoped":
                    this.time = 0;
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "paused":
                    this.frame.next();
                }
                /**
             * @event play
             * @for kity.Timeline
             * @description 在时间线播放后触发
             *
             * @param {String} event.lastStatus
             *        表示播放前的上一个状态，可能取值为 'ready'、'finished'、'stoped'、'paused'
             */
                this.fire("play", new TimelineEvent(this, "play", {
                    lastStatus: lastStatus
                }));
                return this;
            },
            /**
         * @method pause()
         * @for kity.Timeline
         * @description 暂停当前的时间线
         *
         * @grammar pause() => {this}
         */
            pause: function() {
                this.status = "paused";
                /**
             * @event pause
             * @for kity.Timeline
             * @description 暂停事件，在时间线暂停时触发
             */
                this.fire("pause", new TimelineEvent(this, "pause"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @method stop()
         * @for kity.Timeline
         * @description 停止当前时间线
         *
         * @grammar stop() => {this}
         */
            stop: function() {
                this.status = "stoped";
                this.setValue(this.finishValue);
                this.rollbacking = false;
                /**
             * @event stop
             * @for kity.Timeline
             * @description 停止时间，在时间线停止时触发
             */
                this.fire("stop", new TimelineEvent(this, "stop"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @private
         *
         * 播放结束之后的处理
         */
            timeUp: function() {
                if (this.repeatOption) {
                    this.time = 0;
                    if (this.rollback) {
                        if (this.rollbacking) {
                            this.decreaseRepeat();
                            this.rollbacking = false;
                        } else {
                            this.rollbacking = true;
                            /**
                         * @event rollback
                         * @for kity.Timeline
                         * @description 回滚事件，在时间线回滚播放开始的时候触发
                         */
                            this.fire("rollback", new TimelineEvent(this, "rollback"));
                        }
                    } else {
                        this.decreaseRepeat();
                    }
                    if (!this.repeatOption) {
                        this.finish();
                    } else {
                        /**
                     * @event repeat
                     * @for kity.Timeline
                     * @description 循环事件，在时间线循环播放开始的时候触发
                     */
                        this.fire("repeat", new TimelineEvent(this, "repeat"));
                    }
                } else {
                    this.finish();
                }
            },
            /**
         * @private
         *
         * 决定播放结束的处理
         */
            finish: function() {
                this.setValue(this.finishValue);
                this.status = "finished";
                /**
             * @event finish
             * @for kity.Timeline
             * @description 结束事件，在时间线播放结束后触发（包括重复和回滚都结束）
             */
                this.fire("finish", new TimelineEvent(this, "finish"));
                frame.releaseFrame(this.frame);
            },
            /**
         * @private
         *
         *  循环次数递减
         */
            decreaseRepeat: function() {
                if (this.repeatOption !== true) {
                    this.repeatOption--;
                }
            },
            /**
         * @method repeat()
         * @for kity.Timeline
         * @description 设置时间线的重复选项
         *
         * @grammar repeat(repeat, rollback) => {this}
         *
         * @param  {Number|Boolean} repeat
         *     是否重复播放，设置为 true 无限循环播放，设置数值则循环指定的次数
         * @param  {Boolean} rollback
         *     指示是否要回滚播放。
         *     如果设置为真，一次事件到 duration 则一个来回算一次循环次数，否则播放完成一次算一次循环次数
         *
         */
            repeat: function(repeat, rollback) {
                this.repeatOption = repeat;
                this.rollback = rollback;
                return this;
            }
        });
        Timeline.requestFrame = frame.requestFrame;
        Timeline.releaseFrame = frame.releaseFrame;
        return Timeline;
    }
};

//src/animate/translateanimator.js
/**
 * @fileOverview
 *
 * 提供让图形移动的动画器
 */
_p[9] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.TranslateAnimator
     * @base kity.Animator
     * @description 提供让图形移动的动画器
     */
        var TranslateAnimator = _p.r(11).createClass("TranslateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.TranslateAnimator
         * @grammar new kity.TranslateAnimator(x, y)
         * @param  {Number} x x 方向上需要移动的距离
         * @param  {Number} y y 方向上需要移动的距离
         */
            constructor: function(x, y) {
                this.callBase({
                    x: 0,
                    y: 0
                }, {
                    x: x,
                    y: y
                }, function(target, value, timeline) {
                    var delta = timeline.getDelta();
                    target.translate(delta.x, delta.y);
                });
            }
        });
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxTranslate()
         * @for kity.Shape
         * @description 让目标以动画平移指定的距离
         *
         * @grammar fxTranslate(x, y, duration, easing, delay, callback) => {this}
         *
         * @param {Number} x x 方向上需要移动的距离
         * @param {Number} y y 方向上需要移动的距离
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxTranslate: function(x, y, duration, easing, delay, callback) {
                return this.animate(new TranslateAnimator(x, y), duration, easing, delay, callback);
            }
        });
        return TranslateAnimator;
    }
};

//src/core/browser.js
/**
 * @fileOverview
 *
 * 提供浏览器判断的一些字段
 */
_p[10] = {
    value: function() {
        /**
     * @class kity.Browser
     * @catalog core
     * @static
     * @description 提供浏览器信息
     */
        var browser = function() {
            var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser;
            // 浏览器对象
            browser = {
                /**
             * @property platform
             * @description 获取浏览器所在系统,"Win"->Windows;"Mac"->Mac;"Lux"->Linux
             * @type {String}
             */
                platform: function(navigator) {
                    var _p = {
                        win32: "Win",
                        macintel: "Mac"
                    };
                    return _p[navigator.platform.toLowerCase()] || "Lux";
                }(navigator),
                /**
             * 猎豹,区分两种不同内核
             */
                lb: function(agent) {
                    if (~agent.indexOf("lbbrowser")) {
                        return ~agent.indexOf("msie") ? "ie" : "chrome";
                    }
                    return false;
                }(agent),
                /**
             * 搜狗
             */
                sg: /se[\s\S]+metasr/.test(agent),
                /**
             * 百度
             */
                bd: !!~agent.indexOf("bidubrowser"),
                /**
             * edge浏览器
             */
                edge: !!~agent.indexOf("edge"),
                /**
             * chrome初始化为false
             * @type {Boolean}
             */
                chrome: false,
                /**
             * @property opera
             * @for kity.Browser
             * @description 判断是否为 Opera 浏览器
             * @type {boolean}
             */
                opera: !!opera && opera.version,
                /**
             * @property webkit
             * @for kity.Browser
             * @description 判断是否为 Webkit 内核的浏览器
             * @type {boolean}
             */
                webkit: agent.indexOf(" applewebkit/") > -1,
                /**
             * @property mac
             * @for kity.Browser
             * @description 判断是否为 Mac 下的浏览器
             * @type {boolean}
             */
                mac: agent.indexOf("macintosh") > -1
            };
            /**
         * @property ie
         * @for kity.Browser
         * @description 判断是否为 IE 浏览器
         * @type {boolean}
         */
            browser.ie = !browser.lb && /(msie\s|trident.*rv:)([\w.]+)/.test(agent);
            browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera && !browser.ie;
            var version = 0;
            // Internet Explorer 6.0+
            if (browser.ie) {
                version = (agent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0) * 1;
                browser.ie11Compat = document.documentMode == 11;
                browser.ie9Compat = document.documentMode == 9;
            }
            // Gecko.
            if (browser.gecko) {
                var geckoRelease = agent.match(/rv:([\d\.]+)/);
                if (geckoRelease) {
                    geckoRelease = geckoRelease[1].split(".");
                    version = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
                }
            }
            // 排除其他chrome内核的浏览器的干扰
            if (/chrome\/(\d+\.\d)/i.test(agent) && !browser.bd && !browser.opera && !browser.lb && !browser.sg && !browser.edge) {
                /**
             * @property chrome
             * @for kity.Browser
             * @description 判断是否为 Chrome 浏览器
             * @type {boolean}
             */
                browser.chrome = +RegExp["$1"];
            }
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
                browser.safari = +(RegExp["$1"] || RegExp["$2"]);
            }
            // Opera 9.50+
            if (browser.opera) version = parseFloat(opera.version());
            // WebKit 522+ (Safari 3+)
            if (browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
            // 搜狗版本号无从得知
            // 猎豹版本号无从得知
            // 百度
            if (browser.bd) version = parseFloat(agent.match(/bidubrowser\/(\d+)/)[1]);
            // Opera 9.50+
            if (browser.opera) version = parseFloat(agent.match(/opr\/(\d+)/)[1]);
            // edge
            if (browser.edge) version = parseFloat(agent.match(/edge\/(\d+)/)[1]);
            /**
         * @property version
         * @for kity.Browser
         * @description 获取当前浏览器的版本
         * @type {Number}
         */
            browser.version = version;
            browser.isCompatible = !browser.mobile && (browser.ie && version >= 6 || browser.gecko && version >= 10801 || browser.opera && version >= 9.5 || browser.air && version >= 1 || browser.webkit && version >= 522 || false);
            return browser;
        }();
        return browser;
    }
};

//src/core/class.js
/**
 * @fileOverview
 *
 * 提供 Kity 的 OOP 支持
 */
_p[11] = {
    value: function(require, exports) {
        /**
     * @class kity.Class
     * @catalog core
     * @description 所有 kity 类的基类
     * @abstract
     */
        function Class() {}
        exports.Class = Class;
        Class.__KityClassName = "Class";
        /**
     * @method base()
     * @for kity.Class
     * @protected
     * @grammar base(name, args...) => {any}
     * @description 调用父类指定名称的函数
     * @param {string} name 函数的名称
     * @param {parameter} args... 传递给父类函数的参数
     *
     * @example
     *
     * ```js
     * var Person = kity.createClass('Person', {
     *     toString: function() {
     *         return 'I am a person';
     *     }
     * });
     *
     * var Male = kity.createClass('Male', {
     *     base: Person,
     *
     *     toString: function() {
     *         return 'I am a man';
     *     },
     *
     *     speak: function() {
     *         return this.base('toString') + ',' + this.toString();
     *     }
     * })
     * ```
     */
        Class.prototype.base = function(name) {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        /**
     * @method callBase()
     * @for kity.Class
     * @protected
     * @grammar callBase(args...) => {any}
     * @description 调用父类同名函数
     * @param {parameter} args... 传递到父类同名函数的参数
     *
     * @example
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return 'I am an animal name ' + this.name;
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     constructor: function(name) {
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return this.callBase() + ', a dog';
     *     }
     * });
     *
     * var dog = new Dog('Dummy');
     * console.log(dog.toString()); // "I am an animal name Dummy, a dog";
     * ```
     */
        Class.prototype.callBase = function() {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[caller.__KityMethodName];
            return method.apply(this, arguments);
        };
        Class.prototype.mixin = function(name) {
            var caller = arguments.callee.caller;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        Class.prototype.callMixin = function() {
            var caller = arguments.callee.caller;
            var methodName = caller.__KityMethodName;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[methodName];
            if (methodName == "constructor") {
                for (var i = 0, l = method.length; i < l; i++) {
                    method[i].call(this);
                }
                return this;
            } else {
                return method.apply(this, arguments);
            }
        };
        /**
     * @method pipe()
     * @for kity.Class
     * @grammar pipe() => {this}
     * @description 以当前对象为上线文以及管道函数的第一个参数，执行一个管道函数
     * @param  {Function} fn 进行管道操作的函数
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect().pipe(function() {
     *     this.setWidth(500);
     *     this.setHeight(300);
     * });
     * ```
     */
        Class.prototype.pipe = function(fn) {
            if (typeof fn == "function") {
                fn.call(this, this);
            }
            return this;
        };
        /**
     * @method getType()
     * @for kity.Class
     * @grammar getType() => {string}
     * @description 获得对象的类型
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     * var circle = new kity.Circle();
     *
     * console.log(rect.getType()); // "Rect"
     * console.log(rect.getType()); // "Circle"
     * ```
     */
        Class.prototype.getType = function() {
            return this.__KityClassName;
        };
        /**
     * @method getClass()
     * @for kity.Class
     * @grammar getClass() => {Class}
     * @description 获得对象的类
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     *
     * console.log(rect.getClass() === kity.Rect); // true
     * console.log(rect instanceof kity.Rect); // true
     * ```
     */
        Class.prototype.getClass = function() {
            return this.constructor;
        };
        // 检查基类是否调用了父类的构造函数
        // 该检查是弱检查，假如调用的代码被注释了，同样能检查成功（这个特性可用于知道建议调用，但是出于某些原因不想调用的情况）
        function checkBaseConstructorCall(targetClass, classname) {
            var code = targetClass.toString();
            if (!/this\.callBase/.test(code)) {
                throw new Error(classname + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数");
            }
        }
        var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date();
        function inherit(constructor, BaseClass, classname) {
            var KityClass = eval("(function " + classname + "( __inherit__flag ) {" + "if( __inherit__flag != KITY_INHERIT_FLAG ) {" + "KityClass.__KityConstructor.apply(this, arguments);" + "}" + "this.__KityClassName = KityClass.__KityClassName;" + "})");
            KityClass.__KityConstructor = constructor;
            KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
            for (var methodName in BaseClass.prototype) {
                if (BaseClass.prototype.hasOwnProperty(methodName) && methodName.indexOf("__Kity") !== 0) {
                    KityClass.prototype[methodName] = BaseClass.prototype[methodName];
                }
            }
            KityClass.prototype.constructor = KityClass;
            return KityClass;
        }
        function mixin(NewClass, mixins) {
            if (false === mixins instanceof Array) {
                return NewClass;
            }
            var i, length = mixins.length, proto, method;
            NewClass.__KityMixins = {
                constructor: []
            };
            for (i = 0; i < length; i++) {
                proto = mixins[i].prototype;
                for (method in proto) {
                    if (false === proto.hasOwnProperty(method) || method.indexOf("__Kity") === 0) {
                        continue;
                    }
                    if (method === "constructor") {
                        // constructor 特殊处理
                        NewClass.__KityMixins.constructor.push(proto[method]);
                    } else {
                        NewClass.prototype[method] = NewClass.__KityMixins[method] = proto[method];
                    }
                }
            }
            return NewClass;
        }
        function extend(BaseClass, extension) {
            if (extension.__KityClassName) {
                extension = extension.prototype;
            }
            for (var methodName in extension) {
                if (extension.hasOwnProperty(methodName) && methodName.indexOf("__Kity") && methodName != "constructor") {
                    var method = BaseClass.prototype[methodName] = extension[methodName];
                    method.__KityMethodClass = BaseClass;
                    method.__KityMethodName = methodName;
                }
            }
            return BaseClass;
        }
        /**
     * @method kity.createClass()
     * @grammar kity.createClass(classname, defines) => {Class}
     * @description 创建一个类
     * @param  {string} classname 类名，用于调试的时候查看，可选
     * @param  {object} defines   类定义
     *      defines.base {Class}
     *          定义的类的基类，如果不配置，则表示基类为 kity.Class
     *      defines.mixins {Class[]}
     *          定义的类要融合的类列表
     *      defines.constructor {Function}
     *          定义类的构造函数，如果父类显式定义了构造函数，需要在构造函数中使用 callBase() 方法调用父类的构造函数
     *      defines.* {Function}
     *          定义类的其它函数
     *
     * @example 创建一个类
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return this.name;
     *     }
     * });
     *
     * var a = new Animal('kity');
     * console.log(a.toString()); // "kity"
     * ```
     *
     * @example 继承一个类
     *
     * ```js
     * var Cat = kity.createClass('Cat', {
     *     base: Animal,
     *     constructor: function(name, color) {
     *         // 调用父类构造函数
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return 'A ' + this.color + ' cat, ' + this.callBase();
     *     }
     * });
     *
     * var cat = new Cat('kity', 'black');
     * console.log(cat.toString()); // "A black cat, kity"
     * ```
     *
     * @example 混合类的能力
     * ```js
     * var Walkable = kity.createClass('Walkable', {
     *     constructor: function() {
     *         this.speed = 'fast';
     *     },
     *     walk: function() {
     *         console.log('I am walking ' + this.speed);
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     base: Animal,
     *     mixins: [Walkable],
     *     constructor: function(name) {
     *         this.callBase(name);
     *         this.callMixins();
     *     }
     * });
     *
     * var dog = new Dog('doggy');
     * console.log(dog.toString() + ' say:');
     * dog.walk();
     * ```
     */
        exports.createClass = function(classname, defines) {
            var constructor, NewClass, BaseClass;
            if (arguments.length === 1) {
                defines = arguments[0];
                classname = "AnonymousClass";
            }
            BaseClass = defines.base || Class;
            if (defines.hasOwnProperty("constructor")) {
                constructor = defines.constructor;
                if (BaseClass != Class) {
                    checkBaseConstructorCall(constructor, classname);
                }
            } else {
                constructor = function() {
                    this.callBase.apply(this, arguments);
                    this.callMixin.apply(this, arguments);
                };
            }
            NewClass = inherit(constructor, BaseClass, classname);
            NewClass = mixin(NewClass, defines.mixins);
            NewClass.__KityClassName = constructor.__KityClassName = classname;
            NewClass.__KityBaseClass = constructor.__KityBaseClass = BaseClass;
            NewClass.__KityMethodName = constructor.__KityMethodName = "constructor";
            NewClass.__KityMethodClass = constructor.__KityMethodClass = NewClass;
            // 下面这些不需要拷贝到原型链上
            delete defines.mixins;
            delete defines.constructor;
            delete defines.base;
            NewClass = extend(NewClass, defines);
            return NewClass;
        };
        /**
     * @method kity.extendClass()
     * @grammar kity.extendClass(clazz, extension) => {Class}
     * @description 拓展一个已有的类
     *
     * @example
     *
     * ```js
     * kity.extendClass(Dog, {
     *     spark: function() {
     *         console.log('wao wao wao!');
     *     }
     * });
     *
     * new Dog().spark(); // "wao wao wao!";
     * ```
     */
        exports.extendClass = extend;
    }
};

//src/core/utils.js
/**
 * @fileOverview
 *
 * 一些常用的工具方法
 */
_p[12] = {
    value: function() {
        /**
     * @class kity.Utils
     * @catalog core
     * @static
     * @description 提供常用的工具方法
     */
        var utils = {
            /**
         * @method each()
         * @for kity.Utils
         * @grammar each(obj, interator, context)
         * @param  {Object|Array} obj 要迭代的对象或数组
         * @param  {Function} iterator 迭代函数
         * @param  {Any} context  迭代函数的上下文
         *
         * @example 迭代数组
         *
         * ```js
         * kity.Utils.each([1, 2, 3, 4, 5], function(value, index, array) {
         *     console.log(value, index);
         * });
         * // 1, 0
         * // 2, 1
         * // 3, 2
         * // 4, 3
         * // 5, 4
         * ```
         *
         * @example 迭代对象
         *
         * ```js
         * var obj = {
         *     name: 'kity',
         *     version: '1.2.1'
         * };
         * var param = [];
         * kity.Utils.each(obj, function(value, key, obj) {
         *     param.push(key + '=' + value);
         * });
         * console.log(param.join('&')); // "name=kity&version=1.2.1"
         * ```
         */
            each: function each(obj, iterator, context) {
                if (obj === null) {
                    return;
                }
                if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (iterator.call(context, obj[i], i, obj) === false) {
                            return false;
                        }
                    }
                } else {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (iterator.call(context, obj[key], key, obj) === false) {
                                return false;
                            }
                        }
                    }
                }
            },
            /**
         * @method extend()
         * @for kity.Utils
         * @grammar extend(target, sources..., notCover) => {object}
         * @description 把源对象的属性合并到目标对象上
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         *
         * @example
         *
         * ```js
         * var a = {
         *     key1: 'a1',
         *     key2: 'a2'
         * };
         *
         * var b = {
         *     key2: 'b2',
         *     key3: 'b3'
         * };
         *
         * var c = {
         *     key4: 'c4'
         * };
         *
         * var d = kity.extend(a, b, c);
         *
         * console.log(d === a); // true
         * console.log(a); // {key1: 'a1', key2: 'b2', key3: 'b3', key4: 'c4'}
         * ```
         */
            extend: function extend(t) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            t[k] = x[k];
                        }
                    }
                }
                return t;
            },
            /**
         * @method deepExtend()
         * @for kity.Utils
         * @grammar deepExtend(target, sources..., notCover)
         * @description 把源对象的属性合并到目标对象上，如果属性是对象，会递归合并
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         */
            deepExtend: function(t, s) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            if (this.isObject(t[k]) && this.isObject(x[k])) {
                                this.deepExtend(t[k], x[k], notCover);
                            } else {
                                t[k] = x[k];
                            }
                        }
                    }
                }
                return t;
            },
            /**
         * @method clone()
         * @for kity.Utils
         * @grammar clone(obj) => {object}
         * @description 返回一个对象的克隆副本（非深度复制）
         * @param  {object} obj 要克隆的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.clone(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // true
         * console.log(target.key3 === source.key3); // true
         * ```
         */
            clone: function clone(obj) {
                var cloned = {};
                for (var m in obj) {
                    if (obj.hasOwnProperty(m)) {
                        cloned[m] = obj[m];
                    }
                }
                return cloned;
            },
            /**
         * @method copy()
         * @for kity.Utils
         * @grammar copy(obj) => {object}
         * @description 返回一个对象的拷贝副本（深度复制）
         * @param  {object} obj 要拷贝的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.copy(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // false
         * console.log(target.key3 === source.key3); // true，因为是值类型
         * ```
         */
            copy: function copy(obj) {
                if (typeof obj !== "object") return obj;
                if (typeof obj === "function") return null;
                return JSON.parse(JSON.stringify(obj));
            },
            queryPath: function(path, obj) {
                var arr = path.split(".");
                var i = 0, tmp = obj, l = arr.length;
                while (i < l) {
                    if (arr[i] in tmp) {
                        tmp = tmp[arr[i]];
                        i++;
                        if (i >= l || tmp === undefined) {
                            return tmp;
                        }
                    } else {
                        return undefined;
                    }
                }
            },
            getValue: function(value, defaultValue) {
                return value !== undefined ? value : defaultValue;
            },
            /**
         * @method flatten()
         * @for kity.Utils
         * @grammar flatten(arr) => {Array}
         * @description 返回给定数组的扁平化版本
         * @param  {Array} arr 要扁平化的数组
         *
         * @example
         *
         * ```js
         * var flattened = kity.Utils.flatten([[1, 2], [2, 3], [[4, 5], [6, 7]]]);
         * console.log(flattened); // [1, 2, 3, 4, 5, 6, 7];
         * ```
         */
            flatten: function flatten(arr) {
                var result = [], length = arr.length, i;
                for (i = 0; i < length; i++) {
                    if (arr[i] instanceof Array) {
                        result = result.concat(utils.flatten(arr[i]));
                    } else {
                        result.push(arr[i]);
                    }
                }
                return result;
            },
            /**
         * @method paralle()
         * @for kity.Utils
         * @grammar paralle() => {Any}
         *
         * @description 平行地对 v1 和 v2 进行指定的操作
         *
         *    如果 v1 是数字，那么直接进行 op 操作
         *    如果 v1 是对象，那么返回一个对象，其元素是 v1 和 v2 同键值的每个元素平行地进行 op 操作的结果
         *    如果 v1 是数组，那么返回一个数组，其元素是 v1 和 v2 同索引的每个元素平行地进行 op 操作的结果
         *
         * @param  {Number|Object|Array} v1 第一个操作数
         * @param  {Number|Object|Array} v2 第二个操作数
         * @param  {Function} op 操作函数
         *
         *
         *
         * @example
         *
         * ```js
         * var a = {
         *     value1: 1,
         *     value2: 2,
         *     value3: [3, 4, 5]
         * };
         *
         * var b = {
         *     value1: 2,
         *     value2: 3,
         *     value3: [4, 5, 6]
         * };
         *
         * var c = kity.Utils.paralle(a, b, function(v1, v2) {
         *     return v1 + v2;
         * });
         *
         * console.log(c.value1); // 3
         * console.log(c.value2); // 5
         * console.log(c.value3); // [7, 9, 11]
         *
         * ```
         */
            paralle: function paralle(v1, v2, op) {
                var Class, field, index, name, value;
                // 数组
                if (v1 instanceof Array) {
                    value = [];
                    for (index = 0; index < v1.length; index++) {
                        value.push(utils.paralle(v1[index], v2[index], op));
                    }
                    return value;
                }
                // 对象
                if (v1 instanceof Object) {
                    // 如果值是一个支持原始表示的实例，获取其原始表示
                    Class = v1.getClass && v1.getClass();
                    if (Class && Class.parse) {
                        v1 = v1.valueOf();
                        v2 = v2.valueOf();
                        value = utils.paralle(v1, v2, op);
                        value = Class.parse(value);
                    } else {
                        value = {};
                        for (name in v1) {
                            if (v1.hasOwnProperty(name) && v2.hasOwnProperty(name)) {
                                value[name] = utils.paralle(v1[name], v2[name], op);
                            }
                        }
                    }
                    return value;
                }
                // 是否数字
                if (false === isNaN(parseFloat(v1))) {
                    return op(v1, v2);
                }
                return value;
            },
            /**
         * 创建 op 操作的一个平行化版本
         */
            parallelize: function parallelize(op) {
                return function(v1, v2) {
                    return utils.paralle(v1, v2, op);
                };
            }
        };
        /**
     * @method isString()
     * @for kity.Utils
     * @grammar isString(unknown) => {boolean}
     * @description 判断一个值是否为字符串类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isFunction()
     * @for kity.Utils
     * @grammar isFunction(unknown) => {boolean}
     * @description 判断一个值是否为函数类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isArray()
     * @for kity.Utils
     * @grammar isArray(unknown) => {boolean}
     * @description 判断一个值是否为数组类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isNumber()
     * @for kity.Utils
     * @grammar isNumber(unknown) => {boolean}
     * @description 判断一个值是否为数字类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isRegExp()
     * @for kity.Utils
     * @grammar isRegExp(unknown) => {boolean}
     * @description 判断一个值是否为正则表达式类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isObject()
     * @for kity.Utils
     * @grammar isObject(unknown) => {boolean}
     * @description 判断一个值是否为对象类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isBoolean()
     * @for kity.Utils
     * @grammar isBoolean(unknown) => {boolean}
     * @description 判断一个值是否为布尔类型
     * @param  {any} unknown 要判断的值
     */
        utils.each([ "String", "Function", "Array", "Number", "RegExp", "Object", "Boolean" ], function(v) {
            utils["is" + v] = function typeCheck(obj) {
                return Object.prototype.toString.apply(obj) == "[object " + v + "]";
            };
        });
        return utils;
    }
};

//src/filter/effect/colormatrixeffect.js
/**
 * 颜色矩阵运算效果封装
 */
_p[13] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var ColorMatrixEffect = _p.r(11).createClass("ColorMatrixEffect", {
            base: Effect,
            constructor: function(type, input) {
                this.callBase(Effect.NAME_COLOR_MATRIX);
                this.set("type", Utils.getValue(type, ColorMatrixEffect.TYPE_MATRIX));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ColorMatrixEffect, {
            // 类型常量
            TYPE_MATRIX: "matrix",
            TYPE_SATURATE: "saturate",
            TYPE_HUE_ROTATE: "hueRotate",
            TYPE_LUMINANCE_TO_ALPHA: "luminanceToAlpha",
            // 矩阵常量
            MATRIX_ORIGINAL: "10000010000010000010".split("").join(" "),
            MATRIX_EMPTY: "00000000000000000000".split("").join(" ")
        });
        return ColorMatrixEffect;
    }
};

//src/filter/effect/compositeeffect.js
/**
 * 高斯模糊效果封装
 */
_p[14] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var CompositeEffect = _p.r(11).createClass("CompositeEffect", {
            base: Effect,
            constructor: function(operator, input, input2) {
                this.callBase(Effect.NAME_COMPOSITE);
                this.set("operator", Utils.getValue(operator, CompositeEffect.OPERATOR_OVER));
                if (input) {
                    this.set("in", input);
                }
                if (input2) {
                    this.set("in2", input2);
                }
            }
        });
        Utils.extend(CompositeEffect, {
            // operator 常量
            OPERATOR_OVER: "over",
            OPERATOR_IN: "in",
            OPERATOR_OUT: "out",
            OPERATOR_ATOP: "atop",
            OPERATOR_XOR: "xor",
            OPERATOR_ARITHMETIC: "arithmetic"
        });
        return CompositeEffect;
    }
};

//src/filter/effect/convolvematrixeffect.js
/**
 * 像素级别的矩阵卷积运算效果封装
 */
_p[15] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        var ConvolveMatrixEffect = _p.r(11).createClass("ConvolveMatrixEffect", {
            base: Effect,
            constructor: function(edgeMode, input) {
                this.callBase(Effect.NAME_CONVOLVE_MATRIX);
                this.set("edgeMode", Utils.getValue(edgeMode, ConvolveMatrixEffect.MODE_DUPLICATE));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ConvolveMatrixEffect, {
            MODE_DUPLICATE: "duplicate",
            MODE_WRAP: "wrap",
            MODE_NONE: "none"
        });
        return ConvolveMatrixEffect;
    }
};

//src/filter/effect/effect.js
/*
 * 效果类
 * 该类型的对象不存储任何内部属性， 所有操作都是针对该类对象所维护的节点进行的
 */
_p[16] = {
    value: function(require, exports, module) {
        var svg = _p.r(67), Effect = _p.r(11).createClass("Effect", {
            constructor: function(type) {
                this.node = svg.createNode(type);
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            },
            // 返回该效果的result
            toString: function() {
                return this.node.getAttribute("result") || "";
            }
        });
        _p.r(12).extend(Effect, {
            // 特效名称常量
            NAME_GAUSSIAN_BLUR: "feGaussianBlur",
            NAME_OFFSET: "feOffset",
            NAME_COMPOSITE: "feComposite",
            NAME_COLOR_MATRIX: "feColorMatrix",
            NAME_CONVOLVE_MATRIX: "feConvolveMatrix",
            // 输入常量
            INPUT_SOURCE_GRAPHIC: "SourceGraphic",
            INPUT_SOURCE_ALPHA: "SourceAlpha",
            INPUT_BACKGROUND_IMAGE: "BackgroundImage",
            INPUT_BACKGROUND_ALPHA: "BackgroundAlpha",
            INPUT_FILL_PAINT: "FillPaint",
            INPUT_STROKE_PAINT: "StrokePaint"
        });
        return Effect;
    }
};

//src/filter/effect/gaussianblureffect.js
/**
 * 高斯模糊效果封装
 */
_p[17] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        return _p.r(11).createClass("GaussianblurEffect", {
            base: Effect,
            constructor: function(stdDeviation, input) {
                this.callBase(Effect.NAME_GAUSSIAN_BLUR);
                this.set("stdDeviation", Utils.getValue(stdDeviation, 1));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effect/offseteffect.js
/**
 * 偏移效果封装
 */
_p[18] = {
    value: function(require, exports, module) {
        var Effect = _p.r(16), Utils = _p.r(12);
        return _p.r(11).createClass("OffsetEffect", {
            base: Effect,
            constructor: function(dx, dy, input) {
                this.callBase(Effect.NAME_OFFSET);
                this.set("dx", Utils.getValue(dx, 0));
                this.set("dy", Utils.getValue(dy, 0));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effectcontainer.js
/*
 * Effect所用的container
 */
_p[19] = {
    value: function(require) {
        return _p.r(11).createClass("EffectContainer", {
            base: _p.r(29),
            addEffect: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependEffect: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendEffect: function() {
                return this.appendItem.apply(this, arguments);
            },
            removeEffect: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addEffects: function() {
                return this.addItems.apply(this, arguments);
            },
            setEffects: function() {
                return this.setItems.apply(this, arguments);
            },
            getEffect: function() {
                return this.getItem.apply(this, arguments);
            },
            getEffects: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstEffect: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastEffect: function() {
                return this.getLastItem.apply(this, arguments);
            },
            handleAdd: function(effectItem, pos) {
                var count = this.getEffects().length, nextEffectItem = this.getItem(pos + 1);
                // 最后一个节点， 直接追加
                if (count === pos + 1) {
                    this.node.appendChild(effectItem.getNode());
                    return;
                }
                this.node.insertBefore(effectItem.getNode(), nextEffectItem.getNode());
            }
        });
    }
};

//src/filter/filter.js
/**
 * Filter 基类
 */
_p[20] = {
    value: function(require, exports, module) {
        var svg = _p.r(67);
        var Class = _p.r(11);
        var Filter = Class.createClass("Filter", {
            mixins: [ _p.r(19) ],
            constructor: function(x, y, width, height) {
                this.node = svg.createNode("filter");
                if (x !== undefined) {
                    this.set("x", x);
                }
                if (y !== undefined) {
                    this.set("y", y);
                }
                if (width !== undefined) {
                    this.set("width", width);
                }
                if (height !== undefined) {
                    this.set("height", height);
                }
            },
            getId: function() {
                return this.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            }
        });
        var Shape = _p.r(60);
        Class.extendClass(Shape, {
            applyFilter: function(filter) {
                var filterId = filter.get("id");
                if (filterId) {
                    this.node.setAttribute("filter", "url(#" + filterId + ")");
                }
                return this;
            }
        });
        return Filter;
    }
};

//src/filter/gaussianblurfilter.js
/*
 * 高斯模糊滤镜
 */
_p[21] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(17);
        return _p.r(11).createClass("GaussianblurFilter", {
            base: _p.r(20),
            constructor: function(stdDeviation) {
                this.callBase();
                this.addEffect(new GaussianblurEffect(stdDeviation));
            }
        });
    }
};

//src/filter/projectionfilter.js
/*
 * 投影滤镜
 */
_p[22] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(17), Effect = _p.r(16), ColorMatrixEffect = _p.r(13), Color = _p.r(28), Utils = _p.r(12), CompositeEffect = _p.r(14), OffsetEffect = _p.r(18);
        return _p.r(11).createClass("ProjectionFilter", {
            base: _p.r(20),
            constructor: function(stdDeviation, dx, dy) {
                this.callBase();
                this.gaussianblurEffect = new GaussianblurEffect(stdDeviation, Effect.INPUT_SOURCE_ALPHA);
                this.gaussianblurEffect.set("result", "gaussianblur");
                this.addEffect(this.gaussianblurEffect);
                this.offsetEffect = new OffsetEffect(dx, dy, this.gaussianblurEffect);
                this.offsetEffect.set("result", "offsetBlur");
                this.addEffect(this.offsetEffect);
                this.colorMatrixEffect = new ColorMatrixEffect(ColorMatrixEffect.TYPE_MATRIX, this.offsetEffect);
                this.colorMatrixEffect.set("values", ColorMatrixEffect.MATRIX_ORIGINAL);
                this.colorMatrixEffect.set("result", "colorOffsetBlur");
                this.addEffect(this.colorMatrixEffect);
                this.compositeEffect = new CompositeEffect(CompositeEffect.OPERATOR_OVER, Effect.INPUT_SOURCE_GRAPHIC, this.colorMatrixEffect);
                this.addEffect(this.compositeEffect);
            },
            // 设置投影颜色
            setColor: function(color) {
                var matrix = null, originMatrix = null, colorValue = [];
                if (Utils.isString(color)) {
                    color = Color.parse(color);
                }
                if (!color) {
                    return this;
                }
                matrix = ColorMatrixEffect.MATRIX_EMPTY.split(" ");
                colorValue.push(color.get("r"));
                colorValue.push(color.get("g"));
                colorValue.push(color.get("b"));
                // rgb 分量更改
                for (var i = 0, len = colorValue.length; i < len; i++) {
                    matrix[i * 5 + 3] = colorValue[i] / 255;
                }
                // alpha 分量更改
                matrix[18] = color.get("a");
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置投影透明度
            setOpacity: function(opacity) {
                var matrix = this.colorMatrixEffect.get("values").split(" ");
                matrix[18] = opacity;
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置阴影偏移量
            setOffset: function(dx, dy) {
                this.setOffsetX(dx);
                this.setOffsetY(dy);
            },
            setOffsetX: function(dx) {
                this.offsetEffect.set("dx", dx);
            },
            setOffsetY: function(dy) {
                this.offsetEffect.set("dy", dy);
            },
            setDeviation: function(deviation) {
                this.gaussianblurEffect.set("stdDeviation", deviation);
            }
        });
    }
};

//src/graphic/bezier.js
/**
 * @fileOverview
 *
 * 贝塞尔曲线
 */
_p[23] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Bezier
     * @mixins kity.PointContainer
     * @base kity.Path
     * @description 绘制和使用贝塞尔曲线。贝塞尔曲线作为一个贝塞尔点的容器，任何贝塞尔点的改变都会更改贝塞尔曲线的外观
     */
        return _p.r(11).createClass("Bezier", {
            mixins: [ _p.r(51) ],
            base: _p.r(46),
            /**
         * @constructor
         * @for kity.Bezier
         *
         * @grammar new kity.Bezier(bezierPoints)
         *
         * @param  {kity.BezierPoints[]} bezierPoints 贝塞尔点集合，每个元素应该是 {kity.BezierPoint} 类型
         *
         * @example
         *
         * ```js
         * var bezier = new kity.Bezier([
         *     new kity.BezierPoint(0, 0).setForward(100, 0),
         *     new kity.BezierPoint(100, 100).setBackward(100, 0)
         * ]);
         * ```
         */
            constructor: function(bezierPoints) {
                this.callBase();
                bezierPoints = bezierPoints || [];
                this.changeable = true;
                this.setBezierPoints(bezierPoints);
            },
            /**
         * @method getBezierPoints()
         * @for kity.Bezier
         * @description 返回当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar getBezierPoints() => {kity.BezierPoints[]}
         *
         */
            getBezierPoints: function() {
                return this.getPoints();
            },
            /**
         * @method setBezierPoints()
         * @for kity.Bezier
         * @description 设置当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar setBeizerPoints(bezierPoints) => {this}
         *
         * @param {kity.BezierPoint[]} bezierPoints 贝塞尔点集合
         */
            setBezierPoints: function(bezierPoints) {
                return this.setPoints(bezierPoints);
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = null, bezierPoints = this.getBezierPoints();
                //单独的一个点不画任何图形
                if (bezierPoints.length < 2) {
                    return;
                }
                drawer = this.getDrawer();
                drawer.clear();
                var vertex = bezierPoints[0].getVertex(), forward = null, backward = null;
                drawer.moveTo(vertex.x, vertex.y);
                for (var i = 1, len = bezierPoints.length; i < len; i++) {
                    vertex = bezierPoints[i].getVertex();
                    backward = bezierPoints[i].getBackward();
                    forward = bezierPoints[i - 1].getForward();
                    drawer.bezierTo(forward.x, forward.y, backward.x, backward.y, vertex.x, vertex.y);
                }
                return this;
            }
        });
    }
};

//src/graphic/bezierpoint.js
/**
 * @fileOverview
 *
 * 表示一个贝塞尔点
 */
_p[24] = {
    value: function(require, exports, module) {
        var ShapePoint = _p.r(63);
        var Vector = _p.r(73);
        /**
     * @class kity.BezierPoint
     *
     * @description 表示一个贝塞尔点
     *              一个贝塞尔点由顶点坐标（曲线经过的点）、前方控制点、后方控制点表示
     */
        var BezierPoint = _p.r(11).createClass("BezierPoint", {
            /**
         * @constructor
         * @for kity.BezierPoint
         *
         * @description 创建一个具有默认顶点坐标的贝塞尔点，两个控制点的坐标和顶点一致
         *
         * @param  {Number}  x        顶点的 x 坐标
         * @param  {Number}  y        顶点的 y 坐标
         * @param  {Boolean} isSmooth 指示当前贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         */
            constructor: function(x, y, isSmooth) {
                //顶点
                this.vertex = new ShapePoint(x, y);
                //控制点
                this.forward = new ShapePoint(x, y);
                this.backward = new ShapePoint(x, y);
                //是否平滑
                this.setSmooth(isSmooth === undefined || isSmooth);
                this.setSymReflaction(true);
            },
            /**
         * @method clone()
         * @for kity.BezierPoint
         * @description 返回贝塞尔点的一份拷贝
         *
         * @grammar clone() => {kity.BezierPoint}
         */
            clone: function() {
                var newPoint = new BezierPoint(), tmp = null;
                tmp = this.getVertex();
                newPoint.setVertex(tmp.x, tmp.y);
                tmp = this.getForward();
                newPoint.setForward(tmp.x, tmp.y);
                tmp = this.getBackward();
                newPoint.setBackward(tmp.x, tmp.y);
                newPoint.setSymReflaction(this.isSymReflaction);
                newPoint.setSmooth(this.isSmooth());
                return newPoint;
            },
            /**
         * @method setVertex()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点的顶点坐标，注意，控制点的坐标不会跟着变化。希望控制点的坐标跟着变化，请用 moveTo() 方法
         *
         * @grammar setVertex(x, y) => {this}
         *
         * @param {Number} x 顶点的 x 坐标
         * @param {Number} y 顶点的 y 坐标
         */
            setVertex: function(x, y) {
                this.vertex.setPoint(x, y);
                this.update();
                return this;
            },
            /**
         * @method moveTo()
         * @for kity.BezierPoint
         * @description 同步移动整个贝塞尔点，使顶点的移动到指定的坐标中。控制点的位置相对顶点坐标固定。
         *
         * @grammar moveTo() => {this}
         *
         * @param  {Number} x 顶点的目标 x 坐标
         * @param  {Number} y 顶点的目标 y 坐标
         *
         */
            moveTo: function(x, y) {
                var oldForward = this.forward.getPoint(), oldBackward = this.backward.getPoint(), oldVertex = this.vertex.getPoint(), //移动距离
                distance = {
                    left: x - oldVertex.x,
                    top: y - oldVertex.y
                };
                // 更新
                this.forward.setPoint(oldForward.x + distance.left, oldForward.y + distance.top);
                this.backward.setPoint(oldBackward.x + distance.left, oldBackward.y + distance.top);
                this.vertex.setPoint(x, y);
                this.update();
            },
            /**
         * @method setForward()
         * @for kity.BezierPoint
         * @description 设置前方控制点的位置，如果贝塞尔点光滑，后方控制点会跟着联动
         *
         * @grammar setForward(x, y) => {this}
         *
         * @param {Number} x 前方控制点的 x 坐标
         * @param {Number} y 前方控制点的 y 坐标
         */
            setForward: function(x, y) {
                this.forward.setPoint(x, y);
                //更新后置点
                if (this.smooth) {
                    this.updateAnother(this.forward, this.backward);
                }
                this.update();
                this.lastControlPointSet = this.forward;
                return this;
            },
            /**
         * @method setBackward()
         * @for kity.BezierPoint
         * @description 设置后方控制点的位置，如果贝塞尔点光滑，前方控制点会跟着联动
         *
         * @grammar setBackward(x, y) => {this}
         *
         * @param {Number} x 后方控制点的 x 坐标
         * @param {Number} y 后方控制点的 y 坐标
         */
            setBackward: function(x, y) {
                this.backward.setPoint(x, y);
                //更新前置点
                if (this.smooth) {
                    this.updateAnother(this.backward, this.forward);
                }
                this.update();
                this.lastControlPointSet = this.backward;
                return this;
            },
            /**
         * @method setSymReflaction()
         * @for kity.BezierPoint
         * @description 设定是否镜像两个控制点的位置
         *
         * @grammar setSymReflaction(value) => {this}
         *
         * @param {boolean} value 如果设置为 true，且贝塞尔点光滑，两个控制点离顶点的距离相等
         */
            setSymReflaction: function(value) {
                this.symReflaction = value;
                if (this.smooth) this.setSmooth(true);
                return this;
            },
            /**
         * @method isSymReflaction()
         * @for kity.BezierPoint
         * @description 当前贝塞尔点的两个控制点是否被镜像约束
         *
         * @grammar isSymReflaction() => {boolean}
         */
            isSymReflaction: function() {
                return this.symReflaction;
            },
            /**
         * @private
         *
         * 根据前方控制点或后方控制点更新另一方
         */
            updateAnother: function(p, q) {
                var v = this.getVertex(), pv = Vector.fromPoints(p.getPoint(), v), vq = Vector.fromPoints(v, q.getPoint());
                vq = pv.normalize(this.isSymReflaction() ? pv.length() : vq.length());
                q.setPoint(v.x + vq.x, v.y + vq.y);
                return this;
            },
            /**
         * @method setSmooth()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         *
         * @param {Boolean} isSmooth 设置为 true 让贝塞尔点光滑
         */
            setSmooth: function(isSmooth) {
                var lc;
                this.smooth = !!isSmooth;
                if (this.smooth && (lc = this.lastControlPointSet)) {
                    this.updateAnother(lc, lc == this.forward ? this.backward : this.forward);
                }
                return this;
            },
            /**
         * @method isSmooth()
         * @for kity.BezierPoint
         * @description 判断贝塞尔点是否光滑
         *
         * @grammar isSmooth() => {boolean}
         */
            isSmooth: function() {
                return this.smooth;
            },
            /**
         * @method getVertex()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的顶点
         *
         * @grammar getVertex() => {kity.ShapePoint}
         */
            getVertex: function() {
                return this.vertex.getPoint();
            },
            /**
         * @method getForward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的前方控制点
         *
         * @grammar getForward() => {kity.ShapePoint}
         */
            getForward: function() {
                return this.forward.getPoint();
            },
            /**
         * @method getBackward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的后方控制点
         *
         * @grammar getBackward() => {kity.ShapePoint}
         */
            getBackward: function() {
                return this.backward.getPoint();
            },
            /**
         * @private
         *
         * 联动更新相关的贝塞尔曲线
         */
            update: function() {
                if (!this.container) {
                    return this;
                }
                //新增参数 this， 把当前引起变化的点传递过去， 以便有需要的地方可以获取到引起变化的源
                if (this.container.update) this.container.update(this);
            }
        });
        return BezierPoint;
    }
};

//src/graphic/box.js
/**
 * @fileOverview
 *
 * 表示一个矩形区域
 */
_p[25] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Box
     * @description 表示一个矩形区域
     */
        var Box = _p.r(11).createClass("Box", {
            /**
         * @constructor
         * @for kity.Box
         *
         * @grammar new kity.Box(x, y, width, height)
         * @grammar new kity.Box(box)
         *
         * @param  {Number} x|box.x      矩形区域的 x 坐标
         * @param  {Number} y|box.y      矩形区域的 y 坐标
         * @param  {Number} width|box.width   矩形区域的宽度
         * @param  {Number} height|box.height 矩形区域的高度
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 20, 50, 50);
         * var box2 = new kity.Box({x: 10, y: 20, width: 50, height: 50});
         * ```
         */
            constructor: function(x, y, width, height) {
                var box = arguments[0];
                if (box && typeof box === "object") {
                    x = box.x;
                    y = box.y;
                    width = box.width;
                    height = box.height;
                }
                if (width < 0) {
                    x -= width = -width;
                }
                if (height < 0) {
                    y -= height = -height;
                }
                /**
             * @property x
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 x 坐标
             */
                this.x = x || 0;
                /**
             * @property y
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 y 坐标
             */
                this.y = y || 0;
                /**
             * @property width
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的宽度
             */
                this.width = width || 0;
                /**
             * @property height
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的高度
             */
                this.height = height || 0;
                /**
             * @property left
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最左侧坐标，等价于 x 的值
             */
                this.left = this.x;
                /**
             * @property right
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最右侧坐标，等价于 x + width 的值
             */
                this.right = this.x + this.width;
                /**
             * @property top
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最上侧坐标，等价于 y 的值
             */
                this.top = this.y;
                /**
             * @property bottom
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最下侧坐标，等价于 y + height 的值
             */
                this.bottom = this.y + this.height;
                /**
             * @property cx
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 x 坐标
             */
                this.cx = this.x + this.width / 2;
                /**
             * @property cy
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 y 坐标
             */
                this.cy = this.y + this.height / 2;
            },
            /**
         * @method getRangeX()
         * @for kity.Box
         * @description 获得矩形区域的 x 值域
         *
         * @grammar getRangeX() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeX()); // [10, 40]
         */
            getRangeX: function() {
                return [ this.left, this.right ];
            },
            /**
         * @method getRangeY()
         * @for kity.Box
         * @description 获得矩形区域的 y 值域
         *
         * @grammar getRangeY() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeY()); // [10, 60]
         */
            getRangeY: function() {
                return [ this.top, this.bottom ];
            },
            /**
         * @method merge()
         * @for kity.Box
         * @description 把当前矩形区域和指定的矩形区域合并，返回一个新的矩形区域（即包含两个源矩形区域的最小矩形区域）
         *
         * @grammar merge(another) => {kity.Box}
         * @param  {kity.Box} another 要合并的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.merge(box2);
         * console.log(box3.valueOf()); // [10, 10, 70, 70]
         * ```
         */
            merge: function(another) {
                if (this.isEmpty()) {
                    return new Box(another.x, another.y, another.width, another.height);
                }
                var left = Math.min(this.left, another.left), right = Math.max(this.right, another.right), top = Math.min(this.top, another.top), bottom = Math.max(this.bottom, another.bottom);
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method intersect()
         * @for kity.Box
         * @description 求当前矩形区域和指定的矩形区域重叠的矩形区域
         *
         * @grammar intersect(another) => {kity.Box}
         * @param  {kity.Box} another 要求重叠的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.intersect(box2);
         * console.log(box3.valueOf()); // [30, 30, 20, 20]
         * ```
         */
            intersect: function(another) {
                if (!another instanceof Box) {
                    another = new Box(another);
                }
                var left = Math.max(this.left, another.left), right = Math.min(this.right, another.right), top = Math.max(this.top, another.top), bottom = Math.min(this.bottom, another.bottom);
                if (left > right || top > bottom) return new Box();
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method expand()
         * @for kity.Box
         * @description 扩展（或收缩）当前的盒子，返回新的盒子
         *
         * @param {Number} top
         *     矩形区域的上边界往上扩展的值；如果是负数，则上边界往下收缩
         *
         * @param {Number} right
         *     [Optional] 矩形区域的右边界往右拓展的值；
         *                如果是负数，则右边界往左收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} bottom
         *     [Optional] 矩形区域的下边界往下拓展的值；
         *                如果是负数，则下边界往上收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} left
         *     [Optional] 矩形区域的左边界往左拓展的值;
         *                如果是负数，则左边界往右收缩;
         *                如果不设置该值，使用和 right 同样的值。
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 10, 20, 20);
         * var box1 = box.expand(10); // [0, 0, 40, 40]
         * var box2 = box.expand(10, 20); // [0, -10, 40, 60]
         * var box3 = box.expand(1, 2, 3, 4); // [9, 8, 24, 26]
         * ```
         */
            expand: function(top, right, bottom, left) {
                if (arguments.length < 1) {
                    return new Box(this);
                }
                if (arguments.length < 2) {
                    right = top;
                }
                if (arguments.length < 3) {
                    bottom = top;
                }
                if (arguments.length < 4) {
                    left = right;
                }
                var x = this.left - left, y = this.top - top, width = this.width + right, height = this.height + top;
                return new Box(x, y, width, height);
            },
            /**
         * @method valueOf()
         * @for kity.Box
         * @description 返回当前盒子的数组表示
         *
         * @grammar valueOf() => {Number[]}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.valueOf()); // [0, 0, 200, 50]
         * ```
         */
            valueOf: function() {
                return [ this.x, this.y, this.width, this.height ];
            },
            /**
         * @method toString()
         * @for kity.Box
         * @description 返回当前盒子的字符串表示
         *
         * @grammar toString() => {String}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.toString()); // "0 0 200 50"
         */
            toString: function() {
                return this.valueOf().join(" ");
            },
            /**
         * @method isEmpty()
         * @for kity.Box
         * @description 判断当前盒子是否具有尺寸（面积大
         *
         * @grammar isEmpty() => {boolean}
         *
         * @example
         * ```js
         * var box = new kity.Box(0, 0, 0, 100000);
         * console.log(box.isEmpty()); // true
         * ```
         */
            isEmpty: function() {
                return !this.width || !this.height;
            }
        });
        /**
     * @method parse()
     * @static
     * @for kity.Box
     * @description 解析一个字符串或数组为 kity.Box 对象
     *
     * @grammar kity.Box.parse(any) => {kity.Box}
     *
     * @param  {Number[]|String} any 要解析的字符串或数组
     *
     * @example
     *
     * ```js
     * console.log(kity.Box.parse('0 0 100 200'));
     * console.log(kity.Box.parse([0, 0, 100, 200]));
     * ```
     */
        Box.parse = function(any) {
            if (typeof any == "string") {
                return Box.parse(any.split(/[\s,]+/).map(parseFloat));
            }
            if (any instanceof Array) {
                return new Box(any[0], any[1], any[2], any[3]);
            }
            if ("x" in any) return new Box(any);
            return null;
        };
        return Box;
    }
};

//src/graphic/circle.js
/**
 * @fileOverview
 *
 * 绘制和使用圆形
 */
_p[26] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Circle
     * @base kity.Ellipse
     * @description 表示一个圆形
     */
        return _p.r(11).createClass("Circle", {
            base: _p.r(32),
            /**
         * @constructor
         * @for kity.Circle
         *
         * @grammar new kity.Circle(radius, cx, cy)
         *
         * @param  {Number} radius 半径
         * @param  {Number} cx     圆心 x 坐标
         * @param  {Number} cy     圆心 y 坐标
         */
            constructor: function(radius, cx, cy) {
                this.callBase(radius, radius, cx, cy);
            },
            /**
         * @method
         * @for kity.Circle
         * @description 获取圆形的半径
         *
         * @grammar getRadius() => {Number}
         */
            getRadius: function() {
                return this.getRadiusX();
            },
            /**
         * @method
         * @for kity.Circle
         * @description 设置圆形的半径
         *
         * @grammar setRadius() => {this}
         *
         * @param {Number} radius 半径大小
         */
            setRadius: function(radius) {
                return this.callBase(radius, radius);
            }
        });
    }
};

//src/graphic/clip.js
/**
 * @fileOverview
 *
 * 支持图形裁切
 */
_p[27] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(60);
        /**
     * @class kity.Clip
     * @base kity.Resource
     * @mixins kity.ShapeContainer
     *
     * @description 创建图形裁切，用于裁切目标图形
     */
        var Clip = Class.createClass("Clip", {
            base: Shape,
            mixins: [ _p.r(61) ],
            /**
         * @constructor
         * @for kity.Clip
         *
         * @grammar new kity.Clip(paper)
         *
         * @param  {kity.Paper} paper 资源所属的文档
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100).fill('yellow'));
         * var clip = new kity.Clip(paper);
         * clip.addShape(new kity.Circle(100, 50, 0));
         * clip.clip(circle);
         * ```
         */
            constructor: function(paper) {
                this.callBase("clipPath", paper);
            },
            /**
         * @method clip()
         * @for kity.Clip
         * @description 将裁切应用到指定的图形上，应用之后，目标图形将显示与裁切形状重合的部分
         *
         * @grammar clip(shape) => {this}
         *
         * @param  {kity.Shape} shape 要应用裁切的图形
         */
            clip: function(shape) {
                shape.getNode().setAttribute("clip-path", this);
                return this;
            }
        });
        Class.extendClass(Shape, {
            /**
         * @method clipWidth()
         * @for kity.Shape
         *
         * @grammar clipWidth(clip) => {this}
         *
         * @param {kity.Clip|kity.Shape} clip 要用于裁切当前图形的图形；
         *     如果 clip 本身是一个裁切对象（kity.Clip 类型），则直接裁切；
         *     否则将创建新的裁切包含给定的图形，然后对当前图形进行裁切
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100));
         * var rect = paper.put(new kity.Rect(100, 100, -100, 0));
         *
         * circle.clipWidth(rect);
         * ```
         */
            clipWith: function(clip) {
                if (clip instanceof Shape) {
                    clip = new Clip(clip.getPaper()).addShape(clip);
                }
                clip.clip(this);
                return this;
            }
        });
        return Clip;
    }
};

//src/graphic/color.js
/**
 * @fileOverview
 *
 * 提供颜色支持
 */
_p[28] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), StandardColor = _p.r(64), ColorUtils = {}, /**
         * @class kity.Color
         * @description 表示一个颜色
         */
        Color = _p.r(11).createClass("Color", {
            /**
             * @constructor
             * @for kity.Color
             *
             * @grammar new kity.Color(r, g, b)
             * @grammar new kity.Color(r, g, b, a)
             * @grammar new kity.Color(colorString)
             *
             * @param {Number} r 红色分量，取值 0 - 255
             * @param {Number} g 绿色分量，取值 0 - 255
             * @param {Number} b 蓝色分量，取值 0 - 255
             * @param {Number} a 透明度（可选），取值 0 - 100
             * @param {String} colorString 一个代表颜色的字符串，可以是：
             *     熟知颜色表：如 'red', 'yellow'
             *     HEX 表示：如 '#368', '#123456'
             *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
             *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
             */
            constructor: function() {
                var colorValue = null;
                //parse构造
                if (typeof arguments[0] === "string") {
                    colorValue = ColorUtils.parseToValue(arguments[0]);
                    //解析失败
                    if (colorValue === null) {
                        colorValue = {
                            r: 0,
                            g: 0,
                            b: 0,
                            h: 0,
                            s: 0,
                            l: 0,
                            a: 1
                        };
                    }
                } else {
                    colorValue = {
                        r: arguments[0] | 0,
                        g: arguments[1] | 0,
                        b: arguments[2] | 0,
                        //alpha 默认为1
                        a: arguments[3] === undefined ? 1 : parseFloat(arguments[3])
                    };
                    colorValue = ColorUtils.overflowFormat(colorValue);
                    //获取hsl分量
                    colorValue = Utils.extend(colorValue, ColorUtils.rgbValueToHslValue(colorValue));
                }
                this._color = colorValue;
            },
            /**
             * @method set()
             * @for kity.Color
             *
             * @description 设置当前颜色某个分量的值
             *
             * @grammar set(name, value) => {this}
             *
             * @param {string} name  要设置的颜色通道的名称
             *     r: 红色（Red），取值范围 [0, 255]
             *     g: 绿色（Green），取值范围 [0, 255]
             *     b: 蓝色（Blue），取值范围 [0, 255]
             *     a: 透明度（Alpha），取值范围 [0, 1]
             *     h: 色环角度（Hue），取值范围 [0, 359]
             *     s: 饱和度（Saturation），取值范围 [0, 100]
             *     l: 亮度（Lightness），取值范围 [0, 100]
             *     r、g、b 值和 h、s、l 值会联动修改
             * @param {number} value 要设置的值
             */
            set: function(name, value) {
                var values = null;
                //设置的值非法
                if (!Color._MAX_VALUE[name]) {
                    throw new Error("Color set(): Illegal parameter");
                }
                if (name !== "a") {
                    value = Math.floor(value);
                }
                if (name == "h") {
                    value = (value + 360) % 360;
                }
                this._color[name] = Math.max(Color._MIN_VALUE[name], Math.min(Color._MAX_VALUE[name], value));
                if ("rgb".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.rgbValueToHslValue(this._color));
                } else if ("hsl".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.hslValueToRGBValue(this._color));
                }
                return this;
            },
            /**
             * @method inc()
             *
             * @description 返回新的颜色，表示当前颜色增加指定通道的值之后的颜色
             *
             * @grammar inc(name, value) => {this}
             *
             * @param  {string} name  要增加的通道的名称，具体含义请查看 set 方法
             * @param  {number} value 增量值
             */
            inc: function(name, value) {
                value = this.get(name) + value;
                if (name == "h") {
                    value = (value + 360) % 360;
                } else {
                    value = Math.min(Color._MAX_VALUE[name], value);
                    value = Math.max(Color._MIN_VALUE[name], value);
                }
                return this.clone().set(name, value);
            },
            /**
             * @method dec()
             * @for kity.Color
             *
             * @description 返回新的颜色，表示当前颜色减少指定通道的值之后的颜色
             *
             * @grammar dec(name, value) => {this}
             *
             * @param  {string} name  要减少值的通道的名称，具体含义请查看 set 方法
             * @param  {number} value 减量值
             */
            dec: function(name, value) {
                return this.inc(name, -value);
            },
            /**
             * @method clone()
             * @for kity.Color
             *
             * @description 返回当前颜色的一个拷贝
             *
             * @grammar clone() => {kity.Color}
             */
            clone: function() {
                return new Color(this.toRGBA());
            },
            /**
             * @method get()
             * @for kity.Color
             *
             * @description 返回当前颜色指定的分量
             *
             * @grammar get() => {number}
             */
            get: function(name) {
                if (!Color._MAX_VALUE[name]) {
                    return null;
                }
                return this._color[name];
            },
            getValues: function() {
                return Utils.clone(this._color);
            },
            /**
             * @method valueOf()
             * @for kity.Color
             *
             * @description 返回当前颜色的一个字面量表示
             *
             * @return {plain} 颜色字面量，其结构为：
             *     {
             *         r: 0,
             *         g: 0,
             *         b: 0,
             *         a: 0,
             *         h: 0,
             *         s: 0,
             *         l: 0
             *     }
             */
            valueOf: function() {
                return this.getValues();
            },
            /**
             * @method toRGB()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGB 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
             *
             * @grammar toRGB() => {string}
             */
            toRGB: function() {
                return ColorUtils.toString(this._color, "rgb");
            },
            /**
             * @method toRGBA()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGBA 表示
             *
             * @grammar toRGBA() => {string}
             */
            toRGBA: function() {
                return ColorUtils.toString(this._color, "rgba");
            },
            /**
             * @method toHEX()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HEX 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
             *
             * @grammar toHEX() => {string}
             */
            toHEX: function() {
                return ColorUtils.toString(this._color, "hex");
            },
            /**
             * @method toHSL()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HSL 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toHSLA()）方法。
             *
             * @grammar toHSL() => {string}
             */
            toHSL: function() {
                return ColorUtils.toString(this._color, "hsl");
            },
            /**
             * @method toHSLA()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HSLA 表示
             *
             * @grammar toHSLA() => {string}
             */
            toHSLA: function() {
                return ColorUtils.toString(this._color, "hsla");
            },
            /**
             * @method toString()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGB 或 RGBA 表示，如果颜色有透明度，将使用 RGBA 形式，否则是 RGB 形式
             * @grammar toString() => {string}
             */
            toString: function() {
                if (this._color.a === 1) {
                    return this.toRGB();
                }
                return this.toRGBA();
            }
        });
        //Color 静态方法
        Utils.extend(Color, {
            //各分量可表示的最大值
            _MAX_VALUE: {
                r: 255,
                g: 255,
                b: 255,
                h: 360,
                s: 100,
                l: 100,
                a: 1
            },
            //各分量最小值
            _MIN_VALUE: {
                r: 0,
                g: 0,
                b: 0,
                h: 0,
                s: 0,
                l: 0,
                a: 0
            },
            //分量常量
            R: "r",
            G: "g",
            B: "b",
            H: "h",
            S: "s",
            L: "l",
            A: "a",
            /**
         * @method parse()
         * @static
         * @for kity.Color
         *
         * @description 解析一个颜色字符串为 kity.Color 对象
         *
         * @grammar kity.Color.parse(valStr)
         *
         * @param  {string} valStr 一个代表颜色的字符串，可以是：
         *     熟知颜色表：如 'red', 'yellow'
         *     HEX 表示：如 '#368', '#123456'
         *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
         *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
         */
            parse: function(valStr) {
                var rgbValue;
                if (Utils.isString(valStr)) {
                    rgbValue = ColorUtils.parseToValue(valStr);
                }
                if (Utils.isObject(valStr) && "r" in valStr) {
                    rgbValue = valStr;
                }
                //解析失败， 返回一个默认color实例
                if (rgbValue === null) {
                    return new Color();
                }
                return new Color(rgbValue.r, rgbValue.g, rgbValue.b, rgbValue.a);
            },
            /**
         * @method createHSL()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 HSL 颜色
         *
         * @grammar kity.Color.createHSL(h, s, l) => {kity.Color}
         *
         * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
         * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
         * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
         */
            createHSL: function(h, s, l) {
                return Color.createHSLA(h, s, l, 1);
            },
            /**
         * @method createHSLA()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 HSLA 颜色
         *
         * @grammar kity.Color.createHSLA(h, s, l, a) => {kity.Color}
         *
         * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
         * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
         * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
         * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
         */
            createHSLA: function(h, s, l, a) {
                var colorValue = null;
                s += "%";
                l += "%";
                colorValue = [ "hsla(" + h, s, l, a + ")" ];
                return Color.parse(colorValue.join(", "));
            },
            /**
         * @method createRGB()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 RGB 颜色
         *
         * @grammar kity.Color.createRGB(r, g, b) => {kity.Color}
         *
         * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
         * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
         * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
         */
            createRGB: function(r, g, b) {
                return Color.createRGBA(r, g, b, 1);
            },
            /**
         * @method createRGBA()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 RGBA 颜色
         *
         * @grammar kity.Color.createRGBA(r, g, b, a) => {kity.Color}
         *
         * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
         * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
         * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
         * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
         */
            createRGBA: function(r, g, b, a) {
                return new Color(r, g, b, a);
            }
        });
        //内部工具对象
        Utils.extend(ColorUtils, {
            parseToValue: function(valStr) {
                var rgbaValue = {};
                /* 优先检测在调色板中是否有对应的颜色 */
                valStr = StandardColor.EXTEND_STANDARD[valStr] || StandardColor.COLOR_STANDARD[valStr] || valStr;
                /* 颜色转换 */
                //hex格式
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(valStr)) {
                    rgbaValue = ColorUtils.hexToValue(valStr);
                } else if (/^(rgba?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.rgbaToValue(valStr);
                } else if (/^(hsla?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.hslaToValue(valStr);
                } else {
                    return null;
                }
                return ColorUtils.overflowFormat(rgbaValue);
            },
            hexToValue: function(hexStr) {
                var result = {}, keys = [ "r", "g", "b" ];
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hexStr)) {
                    hexStr = RegExp.$1.split("");
                    Utils.each(keys, function(key, index) {
                        if (hexStr.length === 3) {
                            result[key] = ColorUtils.toNumber(hexStr[index] + hexStr[index]);
                        } else {
                            result[key] = ColorUtils.toNumber(hexStr[index * 2] + hexStr[index * 2 + 1]);
                        }
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = 1;
                    return result;
                }
                return null;
            },
            rgbaToValue: function(rgbaStr) {
                var result = {}, hasAlpha = false, keys = [ "r", "g", "b" ];
                if (/^(rgba?)/i.test(rgbaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    rgbaStr = rgbaStr.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    Utils.each(keys, function(key, index) {
                        result[key] = rgbaStr[index] | 0;
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = hasAlpha ? parseFloat(rgbaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            hslaToValue: function(hslaStr) {
                var result = {}, hasAlpha = false;
                if (/^(hsla?)/i.test(hslaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    hslaStr = hslaStr.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    //记录hsl值
                    result.h = hslaStr[0] | 0;
                    result.s = hslaStr[1] | 0;
                    result.l = hslaStr[2] | 0;
                    //转换出rgb值
                    result = Utils.extend(result, ColorUtils.hslValueToRGBValue(result));
                    //hsl值转换为rgb值
                    result = ColorUtils.hslValueToRGBValue(result);
                    result.a = hasAlpha ? parseFloat(hslaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            //hsl值对象转换为rgb值对象
            hslValueToRGBValue: function(hslValue) {
                function trans(v1, v2, vH) {
                    if (vH < 0) {
                        vH += 1;
                    } else if (vH > 1) {
                        vH -= 1;
                    }
                    if (6 * vH < 1) {
                        return v1 + (v2 - v1) * 6 * vH;
                    } else if (2 * vH < 1) {
                        return v2;
                    } else if (3 * vH < 2) {
                        return v1 + (v2 - v1) * ((2 / 3 - vH) * 6);
                    }
                    return v1;
                }
                var q = null, p = null, result = {};
                hslValue = Utils.extend({}, hslValue);
                hslValue.h = hslValue.h / 360;
                hslValue.s = hslValue.s / 100;
                hslValue.l = hslValue.l / 100;
                //分量计算
                if (hslValue.s === 0) {
                    result.r = result.g = result.b = hslValue.l;
                } else {
                    if (hslValue.l < .5) {
                        q = hslValue.l * (1 + hslValue.s);
                    } else {
                        q = hslValue.l + hslValue.s - hslValue.l * hslValue.s;
                    }
                    p = 2 * hslValue.l - q;
                    result.r = trans(p, q, hslValue.h + 1 / 3);
                    result.g = trans(p, q, hslValue.h);
                    result.b = trans(p, q, hslValue.h - 1 / 3);
                }
                result.r = Math.min(Math.round(result.r * 255), 255);
                result.g = Math.min(Math.round(result.g * 255), 255);
                result.b = Math.min(Math.round(result.b * 255), 255);
                return result;
            },
            //rgb值对象转换为hsl值对象
            rgbValueToHslValue: function(rgbValue) {
                var max = null, min = null, result = {};
                rgbValue = Utils.extend({}, rgbValue);
                rgbValue.r = rgbValue.r / 255;
                rgbValue.g = rgbValue.g / 255;
                rgbValue.b = rgbValue.b / 255;
                max = Math.max(rgbValue.r, rgbValue.g, rgbValue.b);
                min = Math.min(rgbValue.r, rgbValue.g, rgbValue.b);
                //h分量计算
                if (max === min) {
                    result.h = 0;
                } else if (max === rgbValue.r) {
                    if (rgbValue.g >= rgbValue.b) {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min);
                    } else {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min) + 360;
                    }
                } else if (max === rgbValue.g) {
                    result.h = 60 * (rgbValue.b - rgbValue.r) / (max - min) + 120;
                } else if (max === rgbValue.b) {
                    result.h = 60 * (rgbValue.r - rgbValue.g) / (max - min) + 240;
                }
                //l分量计算
                result.l = (max + min) / 2;
                //s分量计算
                if (result.l === 0 || max === min) {
                    result.s = 0;
                } else if (result.l > 0 && result.l <= .5) {
                    result.s = (max - min) / (max + min);
                } else {
                    result.s = (max - min) / (2 - max - min);
                }
                //格式化hsl结果
                result.h = Math.round(result.h);
                result.s = Math.round(result.s * 100);
                result.l = Math.round(result.l * 100);
                return result;
            },
            toString: function(colorValue, type) {
                var vals = [];
                colorValue = Utils.extend({}, colorValue);
                if (type.indexOf("hsl") !== -1) {
                    colorValue.s += "%";
                    colorValue.l += "%";
                }
                if (type !== "hex") {
                    Utils.each(type.split(""), function(key) {
                        vals.push(colorValue[key]);
                    });
                    return (type + "(" + vals.join(", ") + ")").toLowerCase();
                } else {
                    vals.push(ColorUtils.toHexValue(+colorValue.r));
                    vals.push(ColorUtils.toHexValue(+colorValue.g));
                    vals.push(ColorUtils.toHexValue(+colorValue.b));
                    return ("#" + vals.join("")).toLowerCase();
                }
            },
            //16进制的2个数字转化为10进制， 如果转化失败， 返回0
            toNumber: function(value) {
                return Number("0x" + value) | 0;
            },
            toHexValue: function(value) {
                var result = value.toString(16);
                return result.length === 1 ? "0" + result : result;
            },
            //溢出控制
            overflowFormat: function(value) {
                var tmpValue = Utils.extend({}, value), keys = "rgba";
                Utils.each(keys.split(""), function(key) {
                    if (!tmpValue.hasOwnProperty(key)) {
                        return;
                    }
                    //上溢出
                    tmpValue[key] = Math.min(Color._MAX_VALUE[key], tmpValue[key]);
                    //下溢出
                    tmpValue[key] = Math.max(Color._MIN_VALUE[key], tmpValue[key]);
                });
                return tmpValue;
            }
        });
        return Color;
    }
};

//src/graphic/container.js
_p[29] = {
    value: function(require, exports, module) {
        function itemRemove() {
            this.container.removeItem(this);
            return this;
        }
        return _p.r(11).createClass("Container", {
            getItems: function() {
                return this.items || (this.items = []);
            },
            getItem: function(index) {
                return this.getItems()[index];
            },
            getFirstItem: function() {
                return this.getItem(0);
            },
            getLastItem: function() {
                return this.getItem(this.getItems().length - 1);
            },
            indexOf: function(item) {
                return this.getItems().indexOf(item);
            },
            eachItem: function(fn) {
                var items = this.getItems(), length = items.length, i;
                for (i = 0; i < length; i++) {
                    fn.call(this, i, items[i]);
                }
                return this;
            },
            addItem: function(item, pos, noEvent) {
                var items = this.getItems(), length = items.length;
                if (~items.indexOf(item)) {
                    return this;
                }
                if (!(pos >= 0 && pos < length)) {
                    pos = length;
                }
                items.splice(pos, 0, item);
                if (typeof item === "object") {
                    item.container = this;
                    item.remove = itemRemove;
                }
                this.handleAdd(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("add", [ item ]);
                }
                return this;
            },
            addItems: function(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    this.addItem(items[i], -1, true);
                }
                this.onContainerChanged("add", items);
                return this;
            },
            setItems: function(items) {
                return this.clear().addItems(items);
            },
            appendItem: function(item) {
                return this.addItem(item);
            },
            prependItem: function(item) {
                return this.addItem(item, 0);
            },
            removeItem: function(pos, noEvent) {
                if (typeof pos !== "number") {
                    return this.removeItem(this.indexOf(pos));
                }
                var items = this.getItems(), length = items.length, item = items[pos];
                if (item === undefined) {
                    return this;
                }
                items.splice(pos, 1);
                if (item.container) {
                    delete item.container;
                }
                if (item.remove) {
                    delete item.remove;
                }
                this.handleRemove(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("remove", [ item ]);
                }
                return this;
            },
            clear: function() {
                var removed = [];
                var item;
                while (item = this.getFirstItem()) {
                    removed.push(item);
                    this.removeItem(0, true);
                }
                this.onContainerChanged("remove", removed);
                return this;
            },
            onContainerChanged: function(type, items) {},
            handleAdd: function(item, index) {},
            handleRemove: function(item, index) {}
        });
    }
};

//src/graphic/curve.js
/*
 * 曲线
 * */
_p[30] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), CurveUtil = {
            /*
             * 获取由两个以上的点组成的曲线的平移线
             * @param points 曲线上的点的集合， 集合中的点的数量必须大于2
             * @return 平移线数组
             */
            getCurvePanLines: function(points, smoothFactor) {
                //计算原始点的中点坐标
                var centerPoints = CurveUtil.getCenterPoints(points), //注意：计算中点连线的中点坐标， 得出平移线
                panLines = CurveUtil.getPanLine(points.length, centerPoints);
                //平移线移动到顶点
                return CurveUtil.getMovedPanLines(points, panLines, smoothFactor);
            },
            /*
             * 计算给定点集合的连线的中点
             * @param points
             */
            getCenterPoints: function(points) {
                var centerPoints = {}, key = null;
                for (var i = 0, j = 0, len = points.length; i < len; i++) {
                    //j是下一个点的索引
                    j = i === len - 1 ? 0 : i + 1;
                    key = i + "," + j;
                    //计算中点坐标
                    centerPoints[key] = {
                        x: (points[i].x + points[j].y) / 2,
                        y: (points[i].x + points[j].y) / 2
                    };
                }
                return centerPoints;
            },
            /*
             * 对getCenterPoints()接口获取到的数据做处理， 计算出各个顶点对应的平移线数据
             * @param length 集合中点的个数
             * @param points 点集合， 该集合应该是getCenterPoints()接口返回的数据
             */
            getPanLine: function(length, points) {
                var result = {}, //顶点索引
                pointIndex = null;
                for (var i = 0, j; i < length; i++) {
                    var point1 = null, point2 = null;
                    //计算当前点
                    j = (i + 1) % length;
                    //保存当前处理的顶点索引
                    pointIndex = j;
                    point1 = points[i + "," + j];
                    //计算下一个点
                    i = j;
                    j = (i + 1) % length;
                    point2 = points[i + "," + j];
                    result[pointIndex] = {
                        points: [ {
                            x: point1.x,
                            y: point1.y
                        }, {
                            x: point2.x,
                            y: point2.y
                        } ],
                        center: {
                            x: (point1.x + point2.x) / 2,
                            y: (point1.y + point2.y) / 2
                        }
                    };
                    //还原i值
                    i = (pointIndex + length - 1) % length;
                }
                return result;
            },
            /*
             * 计算平移线移动到顶点后的位置
             * @param points 顶点集合
             * @param panLines 平移线集合
             */
            getMovedPanLines: function(points, panLines, smoothFactor) {
                var result = {};
                Utils.each(points, function(point, index) {
                    //当前平移线
                    var currentPanLine = panLines[index], //平移线中点
                    center = currentPanLine.center, //移动距离
                    distance = {
                        x: center.x - point.x,
                        y: center.y - point.y
                    };
                    var currentResult = result[index] = {
                        points: [],
                        center: {
                            x: point.x,
                            y: point.y
                        }
                    };
                    //计算控制点到顶点的距离， 并且应用平滑系数到距离上
                    Utils.each(currentPanLine.points, function(controlPoint, index) {
                        var moved = {
                            x: controlPoint.x - distance.x,
                            y: controlPoint.y - distance.y
                        };
                        var vertex = currentResult.center;
                        var dx = moved.x - vertex.x;
                        var dy = moved.y - vertex.y;
                        moved.x = vertex.x + smoothFactor * dx;
                        moved.y = vertex.y + smoothFactor * dy;
                        currentResult.points.push(moved);
                    });
                });
                return result;
            }
        };
        return _p.r(11).createClass("Curve", {
            base: _p.r(46),
            mixins: [ _p.r(51) ],
            constructor: function(points, isColse) {
                this.callBase();
                this.setPoints(points || []);
                this.closeState = !!isColse;
                this.changeable = true;
                this.smoothFactor = 1;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            setSmoothFactor: function(factor) {
                this.smoothFactor = factor < 0 ? 0 : factor;
                this.update();
                return this;
            },
            getSmoothFactor: function() {
                return this.smoothFactor;
            },
            update: function() {
                var points = this.getPoints(), withControlPoints = null, drawer = this.getDrawer(), curPoint = null, curControlPoint = null, prevControlPoint = null;
                drawer.clear();
                if (points.length === 0) {
                    return this;
                } else {
                    drawer.moveTo(points[0]);
                }
                if (points.length === 1) {
                    return this;
                }
                if (points.length === 2) {
                    drawer.lineTo(points[1]);
                    return this;
                }
                //获取已转换过后的带控制点的所有点
                withControlPoints = CurveUtil.getCurvePanLines(points, this.getSmoothFactor());
                for (var i = 1, len = points.length; i < len; i++) {
                    //当前顶点
                    curPoint = withControlPoints[i].center;
                    //当前控制点
                    if (this.closeState || i != len - 1) {
                        curControlPoint = withControlPoints[i].points[0];
                    } else {
                        //非闭合状态下最后一个点的处理
                        curControlPoint = withControlPoints[i].center;
                    }
                    if (this.closeState || i != 1) {
                        prevControlPoint = withControlPoints[i - 1].points[1];
                    } else {
                        //非闭合状态下第一个点的处理
                        prevControlPoint = withControlPoints[i - 1].center;
                    }
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                //处理闭合
                if (this.closeState) {
                    curPoint = withControlPoints[0].center;
                    curControlPoint = withControlPoints[0].points[0];
                    prevControlPoint = withControlPoints[points.length - 1].points[1];
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                return this;
            },
            close: function() {
                this.closeState = true;
                return this.update();
            },
            open: function() {
                this.closeState = false;
                return this.update();
            },
            isClose: function() {
                return !!this.closeState;
            }
        });
    }
};

//src/graphic/data.js
_p[31] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Data", {
            constructor: function() {
                this._data = {};
            },
            setData: function(name, value) {
                this._data[name] = value;
                return this;
            },
            getData: function(name) {
                return this._data[name];
            },
            removeData: function(name) {
                delete this._data[name];
                return this;
            }
        });
    }
};

//src/graphic/ellipse.js
_p[32] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), Point = _p.r(50);
        return _p.r(11).createClass("Ellipse", {
            base: _p.r(46),
            constructor: function(rx, ry, cx, cy) {
                this.callBase();
                this.rx = rx || 0;
                this.ry = ry || 0;
                this.cx = cx || 0;
                this.cy = cy || 0;
                this.update();
            },
            update: function() {
                var rx = this.rx, ry = this.ry, x1 = this.cx + rx, x2 = this.cx - rx, y = this.cy;
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(x1, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x2, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x1, y);
                return this;
            },
            getRadius: function() {
                return {
                    x: this.rx,
                    y: this.ry
                };
            },
            getRadiusX: function() {
                return this.rx;
            },
            getRadiusY: function() {
                return this.ry;
            },
            getCenter: function() {
                return new Point(this.cx, this.cy);
            },
            getCenterX: function() {
                return this.cx;
            },
            getCenterY: function() {
                return this.cy;
            },
            setRadius: function(rx, ry) {
                this.rx = rx;
                this.ry = ry;
                return this.update();
            },
            setRadiusX: function(rx) {
                this.rx = rx;
                return this.update();
            },
            setRadiusY: function(ry) {
                this.ry = ry;
                return this.update();
            },
            setCenter: function(cx, cy) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    cx = p.x;
                    cy = p.y;
                }
                this.cx = cx;
                this.cy = cy;
                return this.update();
            },
            setCenterX: function(cx) {
                this.cx = cx;
                return this.update();
            },
            setCenterY: function(cy) {
                this.cy = cy;
                return this.update();
            }
        });
    }
};

//src/graphic/eventhandler.js
/*
 * kity event 实现
 */
_p[33] = {
    value: function(require, exports, module) {
        // polyfill
        (function() {
            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var Utils = _p.r(12), ShapeEvent = _p.r(62);
        // 内部处理器缓存
        var INNER_HANDLER_CACHE = {}, // 用户处理器缓存
        USER_HANDLER_CACHE = {}, guid = 0;
        // 添加事件统一入口
        function _addEvent(type, handler, isOnce) {
            isOnce = !!isOnce;
            if (Utils.isString(type)) {
                type = type.match(/\S+/g);
            }
            Utils.each(type, function(currentType) {
                listen.call(this, this.node, currentType, handler, isOnce);
            }, this);
            return this;
        }
        // 移除事件统一入口
        function _removeEvent(type, handler) {
            var userHandlerList = null, eventId = this._EVNET_UID, isRemoveAll = handler === undefined;
            userHandlerList = USER_HANDLER_CACHE[eventId][type];
            //移除指定的监听器
            if (!isRemoveAll) {
                isRemoveAll = true;
                Utils.each(userHandlerList, function removeKityEvent(fn, index) {
                    if (fn === handler) {
                        // 不能结束， 需要查找完整个list， 避免丢失移除多次绑定同一个处理器的情况
                        delete userHandlerList[index];
                    } else {
                        isRemoveAll = false;
                    }
                });
            }
            //删除所有监听器
            if (isRemoveAll) {
                deleteDomEvent(this.node, type, INNER_HANDLER_CACHE[eventId][type]);
                delete USER_HANDLER_CACHE[eventId][type];
                delete INNER_HANDLER_CACHE[eventId][type];
            }
            return this;
        }
        // 执行绑定, 该方法context为shape或者mixin了eventhandler的对象
        function listen(node, type, handler, isOnce) {
            var eid = this._EVNET_UID, targetObject = this;
            // 初始化内部监听器
            if (!INNER_HANDLER_CACHE[eid]) {
                INNER_HANDLER_CACHE[eid] = {};
            }
            if (!INNER_HANDLER_CACHE[eid][type]) {
                // 内部监听器
                INNER_HANDLER_CACHE[eid][type] = function kityEventHandler(e) {
                    e = new ShapeEvent(e || window.event);
                    Utils.each(USER_HANDLER_CACHE[eid][type], function executeKityEvent(fn) {
                        var result;
                        if (fn) {
                            result = fn.call(targetObject, e);
                            //once 绑定， 执行完后删除
                            if (isOnce) {
                                targetObject.off(type, fn);
                            }
                        }
                        // 如果用户handler里return了false， 则该节点上的此后的同类型事件将不再执行
                        return result;
                    }, targetObject);
                };
            }
            // 初始化用户监听器列表
            if (!USER_HANDLER_CACHE[eid]) {
                USER_HANDLER_CACHE[eid] = {};
            }
            if (!USER_HANDLER_CACHE[eid][type]) {
                USER_HANDLER_CACHE[eid][type] = [ handler ];
                // 绑定对应类型的事件
                // dom对象利用dom event进行处理， 非dom对象， 由消息分发机制处理
                if (!!node && "on" + type in node) {
                    bindDomEvent(node, type, INNER_HANDLER_CACHE[eid][type]);
                }
            } else {
                USER_HANDLER_CACHE[eid][type].push(handler);
            }
        }
        // 绑定dom事件
        function bindDomEvent(node, type, handler) {
            if (node.addEventListener) {
                node.addEventListener(type, handler, false);
            } else {
                node.attachEvent("on" + type, handler);
            }
        }
        // 删除dom事件
        function deleteDomEvent(node, type, handler) {
            if (node.removeEventListener) {
                node.removeEventListener(type, handler, false);
            } else {
                node.detachEvent(type, handler);
            }
        }
        // 触发dom事件
        function triggerDomEvent(node, type, params) {
            var event = new CustomEvent(type, {
                bubbles: true,
                cancelable: true
            });
            event._kityParam = params;
            node.dispatchEvent(event);
        }
        // 发送消息
        function sendMessage(messageObj, type, msg) {
            var event = null, handler = null;
            var handlers = INNER_HANDLER_CACHE[messageObj._EVNET_UID];
            if (!handlers) return;
            handler = handlers[type];
            if (!handler) {
                return;
            }
            event = Utils.extend({
                type: type,
                target: messageObj
            }, msg || {});
            handler.call(messageObj, event);
        }
        // 对外接口
        return _p.r(11).createClass("EventHandler", {
            constructor: function() {
                this._EVNET_UID = ++guid;
            },
            addEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, false);
            },
            addOnceEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, true);
            },
            removeEventListener: function(type, handler) {
                return _removeEvent.call(this, type, handler);
            },
            on: function(type, handler) {
                return this.addEventListener.apply(this, arguments);
            },
            once: function(type, handler) {
                return this.addOnceEventListener.apply(this, arguments);
            },
            off: function() {
                return this.removeEventListener.apply(this, arguments);
            },
            fire: function(type, params) {
                return this.trigger.apply(this, arguments);
            },
            trigger: function(type, params) {
                sendMessage(this, type, params);
                return this;
            }
        });
    }
};

//src/graphic/geometry.js
_p[34] = {
    value: function(require) {
        var utils = _p.r(12);
        var Point = _p.r(50);
        var Vector = _p.r(73);
        var Matrix = _p.r(43);
        var g = {};
        var pathCommand = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi, paramCounts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };
        function pathClone(path) {
            var result, i, j, segment, segmentCopy;
            result = [];
            for (i = 0; i < path.length; i++) {
                segment = path[i];
                result.push(segmentCopy = []);
                for (j = 0; j < segment.length; j++) {
                    segmentCopy.push(segment[j]);
                }
            }
            if (path.isUniform) result.isUniform = true;
            if (path.isAbsolute) result.isAbsolute = true;
            if (path.isCurve) result.isCurve = true;
            return result;
        }
        // 缓存函数
        // from raphael.js
        function cacher(f, scope, postprocessor) {
            function repush(array, item) {
                for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
                    return array.push(array.splice(i, 1)[0]);
                }
            }
            function newf() {
                var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
                if (cache.hasOwnProperty(args)) {
                    repush(count, args);
                    return postprocessor ? postprocessor(cache[args]) : cache[args];
                }
                if (count.length >= 1e3) {
                    delete cache[count.shift()];
                }
                count.push(args);
                cache[args] = f.apply(scope, arg);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            return newf;
        }
        /**
     *
     * kity.g.pathToString(pathSegment)
     *
     * 返回表示 PathSegment 的字符串
     *
     * @param  {Array} pathSegment
     *     要表示的 Path Segment
     *
     * @return {String} 表示该 Path 的字符串
     *
     * @example
     *
     *     var pathSegment = [['M', 0, 0], ['L', 10, 10]]
     *     var pathString = kity.g.pathToString(pathSegment);
     *     // 返回 'M0,0L10,10'
     */
        g.pathToString = function(pathSegment) {
            pathSegment = pathSegment || this;
            if (typeof pathSegment == "string") return pathSegment;
            if (pathSegment instanceof Array) {
                pathSegment = utils.flatten(pathSegment);
                return pathSegment.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1");
            }
        };
        /**
     * kity.g.parsePathString(pathString)
     *
     * 解析 Path 字符串成 PathSegment
     *
     * @copyright rapheal.js
     *
     * @example
     *
     *     var seg = kity.g.parsePathString('M10,12l21-23-21.5,11z');
     *     // 返回: [['M', 10, 12], ['l', 21, -23], ['l', -21.5, 11], ['z']]
     *
     * @param  {String} pathString Path 字符串
     * @return {Array}
     */
        g.parsePathString = cacher(function(pathString) {
            var data = [];
            pathString.replace(pathCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    if (b) params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([ b ].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "r") {
                    data.push([ b ].concat(params));
                } else {
                    while (params.length >= paramCounts[name]) {
                        data.push([ b ].concat(params.splice(0, paramCounts[name])));
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                }
            });
            data.isUniform = true;
            data.toString = g.pathToString;
            return data;
        });
        /**
     * kity.g.pathToAbsolute(path)
     *
     * 把路径转换为绝对路径的形式
     *
     * @param {Array|String} path
     *     要转换的 path 路径或者数组
     *
     * @return {Array}
     *     转换后的 Path Segment
     *
     * @example
     *
     *     var path = 'M10,10l50,50';
     *     var absPath = kity.g.pathToAbsolute(path);
     *     // 返回 [['M', 10, 10], ['L', 60, 60]]
     */
        g.pathToAbsolute = cacher(function(path) {
            var pathArray = path.isUniform ? path : g.parsePathString(g.pathToString(path));
            var res = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
            var r, pa, i, j, k, ii, jj, kk;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = [ "M", x, y ];
            }
            for (r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                if (pa[0] != pa[0].toUpperCase()) {
                    r[0] = pa[0].toUpperCase();
                    switch (r[0]) {
                      case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;

                      case "V":
                        r[1] = +pa[1] + y;
                        break;

                      case "H":
                        r[1] = +pa[1] + x;
                        break;

                      case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                        break;

                      default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                    }
                } else {
                    for (k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                switch (r[0]) {
                  case "Z":
                    x = mx;
                    y = my;
                    break;

                  case "H":
                    x = r[1];
                    break;

                  case "V":
                    y = r[1];
                    break;

                  case "M":
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break;

                  default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.toString = g.pathToString;
            return res;
        });
        // 把圆弧绘制的曲线转化为对应的三次贝塞尔形式
        function a2c(x1, y1, rx, ry, angle, laf, sf, x2, y2, recursive) {
            // copy from raphael.js
            // for more information of where this math came from visit:
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            var math = Math, PI = math.PI, abs = Math.abs, _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res = [], xy, rotate = function(x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad), Y = x * math.sin(rad) + y * math.cos(rad);
                return {
                    x: X,
                    y: Y
                };
            };
            var cos, sin, h, x, y, rx2, ry2, k, cx, cy, f1, f2, df, f2old, x2old, y2old, c1, s1, c2, s2, t, hx, hy, m1, m2, m3, m4, newres, i, ii;
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                cos = math.cos(PI / 180 * angle);
                sin = math.sin(PI / 180 * angle);
                x = (x1 - x2) / 2;
                y = (y1 - y2) / 2;
                h = x * x / (rx * rx) + y * y / (ry * ry);
                if (h > 1) {
                    h = math.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                rx2 = rx * rx;
                ry2 = ry * ry;
                k = (laf == sf ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
                cx = k * rx * y / ry + (x1 + x2) / 2;
                cy = k * -ry * x / rx + (y1 + y2) / 2;
                f1 = math.asin(((y1 - cy) / ry).toFixed(9));
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));
                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                if (f1 < 0) f1 = PI * 2 + f1;
                if (f2 < 0) f2 = PI * 2 + f2;
                if (sf && f1 > f2) {
                    f1 = f1 - PI * 2;
                }
                if (!sf && f2 > f1) {
                    f2 = f2 - PI * 2;
                }
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            df = f2 - f1;
            if (abs(df) > _120) {
                f2old = f2;
                x2old = x2;
                y2old = y2;
                f2 = f1 + _120 * (sf && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math.cos(f2);
                y2 = cy + ry * math.sin(f2);
                res = a2c(x2, y2, rx, ry, angle, 0, sf, x2old, y2old, [ f2, f2old, cx, cy ]);
            }
            df = f2 - f1;
            c1 = math.cos(f1);
            s1 = math.sin(f1);
            c2 = math.cos(f2);
            s2 = math.sin(f2);
            t = math.tan(df / 4);
            hx = 4 / 3 * rx * t;
            hy = 4 / 3 * ry * t;
            m1 = [ x1, y1 ];
            m2 = [ x1 + hx * s1, y1 - hy * c1 ];
            m3 = [ x2 + hx * s2, y2 - hy * c2 ];
            m4 = [ x2, y2 ];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) {
                return [ m2, m3, m4 ].concat(res);
            } else {
                res = [ m2, m3, m4 ].concat(res).join().split(",");
                newres = [];
                for (i = 0, ii = res.length; i < ii; i++) {
                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                }
                return newres;
            }
        }
        // 把二次贝塞尔曲线参数转化为三次贝塞尔曲线参数
        function q2c(x1, y1, ax, ay, x2, y2) {
            // copy from raphael.js
            var _13 = 1 / 3, _23 = 2 / 3;
            return [ _13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2 ];
        }
        /**
     * kity.g.pathToCurve(path)
     *
     * 把路径转换为贝塞尔路径
     *
     * @param  {Array|String} path
     *     要转换的 path 路径或数组
     *
     * @return {Array}
     *     转换后的 PathSegment，每一段都是 'C'
     */
        g.pathToCurve = cacher(function(path) {
            var i, j, command, param;
            var initPoint, currentPoint, endPoint, shouldClose, lastControlPoint, aussumedControlPoint;
            var controlPoint1, controlPoint2;
            var res = [];
            // 处理的路径要求是一个绝对路径
            if (!path.isAbsolute) path = g.pathToAbsolute(path);
            for (i = 0; i < path.length; i++) {
                command = path[i][0];
                param = path[i].slice(1);
                // 画笔移动
                if (command == "M") {
                    initPoint = lastControlPoint = currentPoint = param;
                    res.push(path[i]);
                    continue;
                }
                // 路径闭合
                if (command == "Z") {
                    shouldClose = true;
                    command = "L";
                    param = initPoint;
                }
                // 绘制命令的目的位置
                endPoint = param.slice(param.length - 2);
                // 对 'H' 命令的修正
                if (command == "H") {
                    endPoint = [ param[0], currentPoint[1] ];
                    command = "L";
                }
                // 对 'V' 命令的修正
                if (command == "V") {
                    endPoint = [ currentPoint[0], param[0] ];
                    command = "L";
                }
                // 对 'S' 命令求出隐含的控制点位置
                if (command == "S" || command == "T") {
                    // 隐含控制点是上一个控制点关于当前位置的镜像
                    aussumedControlPoint = [ currentPoint[0] + (currentPoint[0] - lastControlPoint[0]), currentPoint[1] + (currentPoint[1] - lastControlPoint[1]) ];
                }
                // 针对不同的命令求控制点
                switch (command) {
                  case "L":
                    controlPoint1 = currentPoint;
                    controlPoint2 = endPoint;
                    break;

                  case "C":
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "S":
                    controlPoint1 = aussumedControlPoint.slice();
                    controlPoint2 = param.slice(0, 2);
                    break;

                  case "Q":
                    lastControlPoint = param.slice(0, 2);
                    param = q2c.apply(null, currentPoint.concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "T":
                    param = q2c.apply(null, currentPoint.concat(aussumedControlPoint).concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "A":
                    param = a2c.apply(null, currentPoint.concat(param));
                    j = 0;
                    while (j in param) {
                        controlPoint1 = param.slice(j, j + 2);
                        controlPoint2 = param.slice(j + 2, j + 4);
                        endPoint = param.slice(j + 4, j + 6);
                        // 写入当前一段曲线
                        res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                        j += 6;
                    }
                    break;
                }
                if (command != "A") {
                    // 写入当前一段曲线
                    res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                }
                // 为下次循环准备当前位置
                currentPoint = endPoint;
                // 二次贝塞尔曲线自己已经记录了上个控制点的位置，其它的记录控制点 2 的位置
                if (command != "Q") {
                    lastControlPoint = controlPoint2;
                }
                if (shouldClose) {
                    res.push([ "Z" ]);
                    shouldClose = false;
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.isCurve = true;
            res.toString = g.pathToString;
            return res;
        });
        /**
     * 将贝塞尔曲线切成两部分
     *
     * @see http://stackoverflow.com/questions/18655135/divide-bezier-curve-into-two-equal-halves
     */
        function cutBezier(bezierArray, t) {
            function __(t) {
                return function(p, q) {
                    return p + t * (q - p);
                };
            }
            var _ = __(t || .5), ba = bezierArray, ax = ba[0], ay = ba[1], bx = ba[2], by = ba[3], cx = ba[4], cy = ba[5], dx = ba[6], dy = ba[7], ex = _(ax, bx), ey = _(ay, by), fx = _(bx, cx), fy = _(by, cy), gx = _(cx, dx), gy = _(cy, dy), hx = _(ex, fx), hy = _(ey, fy), jx = _(fx, gx), jy = _(fy, gy), kx = _(hx, jx), ky = _(hy, jy);
            return [ [ ax, ay, ex, ey, hx, hy, kx, ky ], [ kx, ky, jx, jy, gx, gy, dx, dy ] ];
        }
        /**
     * kity.g.cutBezier(bezierArray, t)
     *
     * 在指定位置把贝塞尔曲线切割为两部分
     *
     * @param {Array} bezierArray
     *     表示贝塞尔曲线的一个数组 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *     p1 和 p2 是贝塞尔曲线的起点和终点，c1 和 c2 是两个控制点
     *
     * @param {Number} t
     *     切割的位置（0 到 1）
     *
     * @return {Array}
     *     切割的两个贝塞尔曲线：[
     *         [p1x1, p1y1, c1x1, c1y1, c2x1, c2y1, p2x1, p2y1],
     *         [p1x2, p1y2, c1x2, c1y2, c2x2, c2y2, p2x2, p2y2]
     *     ]
     *
     */
        g.cutBezier = cacher(cutBezier);
        /**
     * 求一段贝塞尔曲线的子段
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     子段的结束位置（0 到 1）
     *
     * @param {Number} t0
     *     字段的开始位置（0 到 t），可不传，默认为 0
     *
     * @return {Array}
     *     长度为 8 的数组，表示给定贝塞尔曲线的子段
     */
        g.subBezier = function(bezierArray, t, t0) {
            var b2t = cutBezier(bezierArray, t)[0];
            return t0 ? cutBezier(b2t, t0 / t)[1] : b2t;
        };
        /**
     * 求贝塞尔曲线上的一个点
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     所求点的开始位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtBezier = function(bezierArray, t) {
            var b2t = cutBezier(bezierArray, t)[0];
            var p = Point.parse(b2t.slice(6)), c = Point.parse(b2t.slice(4, 2)), v = Vector.fromPoints(c, p);
            if (t === 0) {
                p.tan = g.pointAtBezier(bezierArray, .01).tan;
            } else {
                p.tan = v.normalize();
            }
            return p;
        };
        /**
     * 求贝塞尔曲线的长度
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} tolerate
     *     允许的误差，默认是 0.1
     *
     * @return {Number} 贝塞尔曲线的长度
     */
        g.bezierLength = cacher(function bezierLength(bezierArray) {
            // 表示（c[0]*t^4 + c[1]*t^3 + c[2]*t^2 + c[3]*t^1 + c[4])^(1/2)的函数
            function f(x) {
                var m = c0 * Math.pow(x, 4) + c1 * Math.pow(x, 3) + c2 * Math.pow(x, 2) + c3 * x + c4;
                if (m < 0) {
                    m = 0;
                }
                return Math.pow(m, .5);
            }
            // 用Newton-Cotes型求积公式
            var arr = bezierArray;
            // 三次贝塞尔曲线函数求导后，求出对应的方程系数，用cx[],cy[]表示x`(t)和y`(t)的系数
            var cx0, cx1, cx2;
            var cy0, cy1, cy2;
            // 用c[]表示x`(t)^2 + y`(t)^2的结果的系数
            var c0, c1, c2, c3, c4;
            // 求x`(t) 和 y`(t)的系数
            cx0 = -3 * arr[0] + 9 * arr[2] - 9 * arr[4] + 3 * arr[6];
            cx1 = 6 * arr[0] - 12 * arr[2] + 6 * arr[4];
            cx2 = -3 * arr[0] + 3 * arr[2];
            cy0 = -3 * arr[1] + 9 * arr[3] - 9 * arr[5] + 3 * arr[7];
            cy1 = 6 * arr[1] - 12 * arr[3] + 6 * arr[5];
            cy2 = -3 * arr[1] + 3 * arr[3];
            // 求x`(t)^2 + y`(t)^2的结果的系数 c[]
            c0 = Math.pow(cx0, 2) + Math.pow(cy0, 2);
            c1 = 2 * (cx0 * cx1 + cy0 * cy1);
            c2 = 2 * (cx0 * cx2 + cy0 * cy2) + Math.pow(cx1, 2) + Math.pow(cy1, 2);
            c3 = 2 * (cx1 * cx2 + cy1 * cy2);
            c4 = Math.pow(cx2, 2) + Math.pow(cy2, 2);
            // 用cotes积分公式求值
            return (f(0) + f(1) + 4 * (f(.125) + f(.375) + f(.625) + f(.875)) + 2 * (f(.25) + f(.5) + f(.75))) / 24;
        });
        // 计算一个 pathSegment 中每一段的在整体中所占的长度范围，以及总长度
        // 方法要求每一段都是贝塞尔曲线
        var getBezierPathSegmentRanges = cacher(function(pathSegment) {
            var i, ii, segment, position, bezierLength, segmentRanges, totalLength;
            segmentRanges = [];
            // 总长度
            totalLength = 0;
            for (i = 0, ii = pathSegment.length; i < ii; i++) {
                segment = pathSegment[i];
                if (segment[0] == "M") {
                    position = segment.slice(1);
                    segmentRanges.push(null);
                    continue;
                }
                if (segment[0] == "Z") {
                    segmentRanges.push(null);
                    continue;
                }
                bezierLength = g.bezierLength(position.concat(segment.slice(1)));
                segmentRanges.push([ totalLength, totalLength + bezierLength ]);
                totalLength += bezierLength;
                // 迭代当前位置
                position = segment.slice(4);
            }
            segmentRanges.totalLength = totalLength;
            return segmentRanges;
        });
        /**
     * 求一段路径的子路径
     *
     * @param  {Array|String} path
     *     原路径
     *
     * @param  {Number} t1
     *     要求的子路径的结束位置（0 到 1）
     *
     * @param  {Number} t0
     *     要求的子路径的开始位置（0 到 t1），可不传，默认为 0
     *
     * @return {Array}
     *     子路径的 PathSegment
     */
        g.subPath = function(path, t1, t0) {
            var dt;
            t0 = t0 || 0;
            dt = t1 - t0;
            dt = dt - (dt | 0);
            t0 = t0 - (t0 | 0);
            t1 = t0 + dt;
            if (t1 > 1) {
                return g.subPath(path, 1, t0).concat(g.subPath(path, t1 - 1));
            }
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            // path 总长度
            var totalLength = segmentRanges.totalLength;
            // t1 和 t0 位置命中的长度位置
            var t1Length = totalLength * t1, t0Length = totalLength * (t0 || 0);
            // 产生的子路径
            var subPath = [];
            // 迭代变量，a 是一段的长度区间左值，b 是右值，d 是区间长度
            var i, ii, a, b, d;
            var position;
            var bezier, subBezier, stared;
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "M") {
                    position = path[i].slice(1);
                    if (stared) {
                        subPath.push(path[i].slice());
                    }
                    continue;
                }
                if (path[i][0] == "Z") {
                    // subpath 路径不闭合
                    continue;
                }
                a = segmentRanges[i][0];
                b = segmentRanges[i][1];
                d = b - a;
                bezier = position.concat(path[i].slice(1));
                if (t0Length > b) {
                    // t0 和 t1 都右溢出
                    // -----------------------------------
                    //            t0   t1
                    // |________|
                    //
                    // 需要跳过当前块
                    position = bezier.slice(bezier.length - 2);
                    continue;
                } else if (t0Length >= a) {
                    // 命中 t0；t1 可能命中或右溢出
                    // -----------------------------------
                    //            t0   t1
                    //     |______|__|
                    //
                    //     or:  |_|____|__|
                    //
                    // 取当前块 t0 到 t1 的部分
                    subBezier = g.subBezier(bezier, Math.min((t1Length - a) / d, 1), (t0Length - a) / d);
                    stared = true;
                    position = subBezier.slice(0, 2);
                    subPath.push([ "M" ].concat(subBezier.slice(0, 2)));
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                } else if (t1Length >= b) {
                    // t0 左溢出；t1 右溢出，整个块是需要的
                    // -----------------------------------
                    //       t0             t1
                    //          |_________|
                    //
                    // 此时取整个块
                    subPath.push(path[i].slice());
                } else if (t1Length >= a) {
                    // t0 左溢出；t1 命中，取当前块 t1 之前的部分
                    // -----------------------------------
                    //            t0   t1
                    //              |__|______|
                    // 取当前块 t1 之前的部分
                    subBezier = g.subBezier(bezier, (t1Length - a) / d);
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                    stared = false;
                } else {
                    // 没有可以再要的了
                    break;
                }
                position = bezier.slice(bezier.length - 2);
            }
            subPath.isAbsolute = true;
            subPath.isCurve = true;
            subPath.isUniform = true;
            subPath.toString = g.pathToString;
            return subPath;
        };
        /**
     * 求路径上的一个点
     *
     * @param  {Array|String} path
     *     要求点的路径
     *
     * @param  {Number} t
     *     要求的点的位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtPath = function(path, t) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            var subPath = g.subPath(path, t);
            var lastCurve = subPath[subPath.length - 1][0] == "Z" ? subPath[subPath.length - 2] : subPath[subPath.length - 1];
            // 跳过 'C' 命令，只留参数
            lastCurve = lastCurve.slice(1);
            var p = Point.parse(lastCurve.slice(4)), c = Point.parse(lastCurve.slice(2, 4));
            p.tan = Vector.fromPoints(c, p).normalize();
            return p;
        };
        /**
     * 求一段路径的长度
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Number}
     *     路径的长度
     */
        g.pathLength = cacher(function(path) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            return segmentRanges.totalLength;
        });
        /**
     * 求一段路径的关键点
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Array}
     *     关键点的集合
     */
        g.pathKeyPoints = cacher(function(path) {
            var i, ii, command, keyPoints;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            keyPoints = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "z") continue;
                keyPoints.push(path[i].slice(path[i].length - 2));
            }
            return keyPoints;
        });
        // 对比两个路径的关键位置，在合适的位置切割合适的路径，使得两个路径的段数一致
        // TODO: 使用插值算法，使对应点更合理
        var alignCurve = cacher(function(path1, path2) {
            if (!path1.isCurve) path1 = g.pathToCurve(path1);
            if (!path2.isCurve) path2 = g.pathToCurve(path2);
            var p1 = pathClone(path1);
            var p2 = pathClone(path2);
            p1.i = 0;
            p2.i = 0;
            p1.o = p2;
            p2.o = p1;
            function command(p, i) {
                return p[i || p.i] && p[i || p.i][0];
            }
            function param(p, i) {
                return p[i || p.i] && p[i || p.i].slice(1);
            }
            function point(p, i) {
                var _param = param(p, i);
                return _param && _param.slice(-2);
            }
            function fixZ(p) {
                if (command(p) == "Z") {
                    p.splice(p.i, 1);
                    return true;
                }
                return false;
            }
            function fixM(p) {
                if (command(p) == "M") {
                    p.o.splice(p.o.i, 0, [ "M" ].concat(point(p.o, p.o.i - 1)));
                    p.i++;
                    p.o.i++;
                    return true;
                }
                return false;
            }
            function fill(p) {
                var lastPoint;
                var i = 1;
                while (!lastPoint) {
                    lastPoint = point(p, p.length - i++);
                }
                p.o.i = p.i;
                while (p.length < p.o.length) {
                    if (fixZ(p.o)) continue;
                    if (fixM(p.o)) continue;
                    p.push([ "C" ].concat(lastPoint).concat(lastPoint).concat(lastPoint));
                    p.i++;
                    p.o.i++;
                }
            }
            while (p1.i < p1.length && p2.i < p2.length) {
                if (fixZ(p1) || fixZ(p2)) continue;
                if (command(p1) == command(p2)) {
                    p1.i++;
                    p2.i++;
                    continue;
                }
                if (fixM(p1) || fixM(p2)) continue;
                p1.i++;
                p2.i++;
            }
            if (p1.i == p1.length) fill(p1);
            if (p2.i == p2.length) fill(p2);
            delete p1.i;
            delete p1.o;
            delete p2.i;
            delete p2.o;
            return [ p1, p2 ];
        });
        g.alignCurve = alignCurve;
        /**
     * 获得两个路径的补间结果
     *
     * @param  {string|Array} path1
     *     补间起始路径
     *
     * @param  {string|Array} path2
     *     补间结束路径
     *
     * @param  {Number} t
     *     补间比例，0 返回跟 path1 等效的结果；1 返回跟 path2 等效的结果
     *
     * @return {PathSegment}
     *     补间的结果
     */
        g.pathTween = function(path1, path2, t) {
            if (t === 0) return path1;
            if (t === 1) return path2;
            var aligned = alignCurve(path1, path2);
            var result = [], seg, i, j;
            path1 = aligned[0];
            path2 = aligned[1];
            for (i = 0; i < path1.length; i++) {
                result.push(seg = []);
                seg.push(path1[i][0]);
                for (j = 1; j < path1[i].length; j++) {
                    seg.push(path1[i][j] + t * (path2[i][j] - path1[i][j]));
                }
            }
            result.isUniform = result.isCurve = result.isAbsolute = true;
            return result;
        };
        /**
     * 变换指定的路径
     *
     * @param  {String|Array} path
     *     需要变换的路径
     *
     * @param  {kity.Matrix} matrix
     *     使用的变换矩阵
     *
     * @return {Array}
     *     变换后的路径
     */
        g.transformPath = cacher(function(path, matrix) {
            var i, ii, j, result, seg, pair;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            result = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                result.push(seg = [ path[i][0] ]);
                for (j = 1; j < path[i].length; j += 2) {
                    pair = path[i].slice(j, j + 2);
                    pair = matrix.transformPoint(Point.parse(pair));
                    result.push(pair);
                }
            }
            return result;
        });
        // entend
        _p.r(11).extendClass(Matrix, {
            transformPath: function(path) {
                return g.transformPath(path, this);
            }
        });
        return g;
    }
};

//src/graphic/gradient.js
_p[35] = {
    value: function(require, exports, module) {
        var svg = _p.r(67);
        var Resource = _p.r(58);
        var Color = _p.r(28);
        return _p.r(11).createClass("GradientBrush", {
            base: Resource,
            constructor: function(gradientNodeType, paper) {
                this.callBase(gradientNodeType, paper);
                this.stops = [];
            },
            addStop: function(offset, color, opacity) {
                var gstop = svg.createNode("stop");
                if (!(color instanceof Color)) {
                    color = Color.parse(color);
                }
                if (opacity === undefined) {
                    opacity = color.get("a");
                }
                gstop.setAttribute("offset", offset);
                gstop.setAttribute("stop-color", color.toRGB());
                if (opacity < 1) {
                    gstop.setAttribute("stop-opacity", opacity);
                }
                this.node.appendChild(gstop);
                return this;
            }
        });
    }
};

//src/graphic/group.js
_p[36] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(61);
        return _p.r(11).createClass("Group", {
            mixins: [ ShapeContainer ],
            base: _p.r(60),
            constructor: function Group() {
                this.callBase("g");
            }
        });
    }
};

//src/graphic/hyperlink.js
_p[37] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(61);
        return _p.r(11).createClass("HyperLink", {
            mixins: [ ShapeContainer ],
            base: _p.r(60),
            constructor: function(url) {
                this.callBase("a");
                this.setHref(url);
            },
            setHref: function(href) {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", href);
                return this;
            },
            getHref: function() {
                return this.node.getAttributeNS("xlink:href");
            },
            setTarget: function(target) {
                this.node.setAttribute("target", target);
                return this;
            },
            getTarget: function() {
                return this.node.getAttribute("target");
            }
        });
    }
};

//src/graphic/image.js
_p[38] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Image", {
            base: _p.r(60),
            constructor: function(url, width, height, x, y) {
                this.callBase("image");
                this.url = url;
                this.width = width || 0;
                this.height = height || 0;
                this.x = x || 0;
                this.y = y || 0;
                this.update();
            },
            update: function() {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.url);
                this.node.setAttribute("x", this.x);
                this.node.setAttribute("y", this.y);
                this.node.setAttribute("width", this.width);
                this.node.setAttribute("height", this.height);
                return this;
            },
            setUrl: function(url) {
                this.url = url === "" ? null : url;
                return this.update();
            },
            getUrl: function() {
                return this.url;
            },
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            getHeight: function() {
                return this.height;
            },
            setX: function(x) {
                this.x = x;
                return this.update();
            },
            getX: function() {
                return this.x;
            },
            setY: function(y) {
                this.y = y;
                return this.update();
            },
            getY: function() {
                return this.y;
            }
        });
    }
};

//src/graphic/line.js
_p[39] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Line", {
            base: _p.r(46),
            constructor: function(x1, y1, x2, y2) {
                this.callBase();
                this.point1 = {
                    x: x1 || 0,
                    y: y1 || 0
                };
                this.point2 = {
                    x: x2 || 0,
                    y: y2 || 0
                };
                this.update();
            },
            setPoint1: function(x, y) {
                this.point1.x = x;
                this.point1.y = y;
                return this.update();
            },
            setPoint2: function(x, y) {
                this.point2.x = x;
                this.point2.y = y;
                return this.update();
            },
            getPoint1: function() {
                return {
                    x: this.point1.x,
                    y: this.point1.y
                };
            },
            getPoint2: function() {
                return {
                    x: this.point2.x,
                    y: this.point2.y
                };
            },
            update: function() {
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(this.point1.x, this.point1.y);
                drawer.lineTo(this.point2.x, this.point2.y);
                return this;
            }
        });
    }
};

//src/graphic/lineargradient.js
_p[40] = {
    value: function(require, exports, module) {
        var svg = _p.r(67);
        var Gradient = _p.r(35);
        return _p.r(11).createClass("LinearGradientBrush", {
            base: Gradient,
            constructor: function(paper) {
                this.callBase("linearGradient", paper);
                this.setStartPosition(0, 0);
                this.setEndPosition(1, 0);
            },
            setStartPosition: function(px, py) {
                this.node.setAttribute("x1", px);
                this.node.setAttribute("y1", py);
                return this;
            },
            setEndPosition: function(px, py) {
                this.node.setAttribute("x2", px);
                this.node.setAttribute("y2", py);
                return this;
            },
            getStartPosition: function() {
                return {
                    x: +this.node.getAttribute("x1"),
                    y: +this.node.getAttribute("y1")
                };
            },
            getEndPosition: function() {
                return {
                    x: +this.node.getAttribute("x2"),
                    y: +this.node.getAttribute("y2")
                };
            }
        });
    }
};

//src/graphic/marker.js
_p[41] = {
    value: function(require, exports, module) {
        var Point = _p.r(50);
        var Marker = _p.r(11).createClass("Marker", {
            base: _p.r(58),
            mixins: [ _p.r(61), _p.r(75) ],
            constructor: function() {
                this.callBase("marker");
                this.setOrient("auto");
            },
            setRef: function(x, y) {
                if (arguments.length === 1) {
                    y = x.y;
                    x = x.x;
                }
                this.node.setAttribute("refX", x);
                this.node.setAttribute("refY", y);
                return this;
            },
            getRef: function() {
                return new Point(+this.node.getAttribute("refX"), +this.node.getAttribute("refY"));
            },
            setWidth: function(width) {
                this.node.setAttribute("markerWidth", this.width = width);
                return this;
            },
            setOrient: function(orient) {
                this.node.setAttribute("orient", this.orient = orient);
                return this;
            },
            getOrient: function() {
                return this.orient;
            },
            getWidth: function() {
                return +this.width;
            },
            setHeight: function(height) {
                this.node.setAttribute("markerHeight", this.height = height);
                return this;
            },
            getHeight: function() {
                return +this.height;
            }
        });
        var Path = _p.r(46);
        _p.r(11).extendClass(Path, {
            setMarker: function(marker, pos) {
                pos = pos || "end";
                if (!marker) {
                    this.node.removeAttribute("marker-" + pos);
                } else {
                    this.node.setAttribute("marker-" + pos, marker.toString());
                }
                return this;
            }
        });
        return Marker;
    }
};

//src/graphic/mask.js
/**
 * 蒙板
 */
_p[42] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(60);
        var Mask = Class.createClass("Mask", {
            base: Shape,
            mixins: [ _p.r(61) ],
            constructor: function() {
                this.callBase("mask");
            },
            mask: function(shape) {
                shape.getNode().setAttribute("mask", "url(#" + this.getId() + ")");
                return this;
            }
        });
        Class.extendClass(Shape, {
            maskWith: function(mask) {
                mask.mask(this);
                return this;
            }
        });
        return Mask;
    }
};

//src/graphic/matrix.js
_p[43] = {
    value: function(require, exports, module) {
        var utils = _p.r(12);
        var Box = _p.r(25);
        var mPattern = /matrix\s*\((.+)\)/i;
        var Point = _p.r(50);
        // 注意，合并的结果是先执行m2，再执行m1的结果
        function mergeMatrixData(m2, m1) {
            return {
                a: m1.a * m2.a + m1.c * m2.b,
                b: m1.b * m2.a + m1.d * m2.b,
                c: m1.a * m2.c + m1.c * m2.d,
                d: m1.b * m2.c + m1.d * m2.d,
                e: m1.a * m2.e + m1.c * m2.f + m1.e,
                f: m1.b * m2.e + m1.d * m2.f + m1.f
            };
        }
        function d2r(deg) {
            return deg * Math.PI / 180;
        }
        var Matrix = _p.r(11).createClass("Matrix", {
            constructor: function() {
                if (arguments.length) {
                    this.setMatrix.apply(this, arguments);
                } else {
                    this.setMatrix(1, 0, 0, 1, 0, 0);
                }
            },
            translate: function(x, y) {
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: 0,
                    e: x,
                    b: 0,
                    d: 1,
                    f: y
                });
                return this;
            },
            rotate: function(deg) {
                var rad = d2r(deg);
                var sin = Math.sin(rad), cos = Math.cos(rad);
                this.m = mergeMatrixData(this.m, {
                    a: cos,
                    c: -sin,
                    e: 0,
                    b: sin,
                    d: cos,
                    f: 0
                });
                return this;
            },
            scale: function(sx, sy) {
                if (sy === undefined) {
                    sy = sx;
                }
                this.m = mergeMatrixData(this.m, {
                    a: sx,
                    c: 0,
                    e: 0,
                    b: 0,
                    d: sy,
                    f: 0
                });
                return this;
            },
            skew: function(degX, degY) {
                if (degY === undefined) {
                    degY = degX;
                }
                var tx = Math.tan(d2r(degX)), ty = Math.tan(d2r(degY));
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: tx,
                    e: 0,
                    b: ty,
                    d: 1,
                    f: 0
                });
                return this;
            },
            /**
         * 获得反转矩阵
         *
         * 这是我解方程算出来的
         */
            inverse: function() {
                var m = this.m, a = m.a, b = m.b, c = m.c, d = m.d, e = m.e, f = m.f, k, aa, bb, cc, dd, ee, ff;
                k = a * d - b * c;
                aa = d / k;
                bb = -b / k;
                cc = -c / k;
                dd = a / k;
                ee = (c * f - e * d) / k;
                ff = (b * e - a * f) / k;
                return new Matrix(aa, bb, cc, dd, ee, ff);
            },
            setMatrix: function(a, b, c, d, e, f) {
                if (arguments.length === 1) {
                    this.m = utils.clone(arguments[0]);
                } else {
                    this.m = {
                        a: a,
                        b: b,
                        c: c,
                        d: d,
                        e: e,
                        f: f
                    };
                }
                return this;
            },
            getMatrix: function() {
                return utils.clone(this.m);
            },
            getTranslate: function() {
                var m = this.m;
                return {
                    x: m.e / m.a,
                    y: m.f / m.d
                };
            },
            mergeMatrix: function(matrix) {
                return new Matrix(mergeMatrixData(this.m, matrix.m));
            },
            merge: function(matrix) {
                return this.mergeMatrix(matrix);
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            valueOf: function() {
                var m = this.m;
                return [ m.a, m.b, m.c, m.d, m.e, m.f ];
            },
            equals: function(matrix) {
                var m1 = this.m, m2 = matrix.m;
                return m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d && m1.e == m2.e && m1.f == m2.f;
            },
            transformPoint: function() {
                return Matrix.transformPoint.apply(null, [].slice.call(arguments).concat([ this.m ]));
            },
            transformBox: function(box) {
                return Matrix.transformBox(box, this.m);
            },
            clone: function() {
                return new Matrix(this.m);
            }
        });
        Matrix.parse = function(str) {
            var match;
            var f = parseFloat;
            if (str instanceof Array) {
                return new Matrix({
                    a: str[0],
                    b: str[1],
                    c: str[2],
                    d: str[3],
                    e: str[4],
                    f: str[5]
                });
            }
            if (match = mPattern.exec(str)) {
                var values = match[1].split(",");
                if (values.length != 6) {
                    values = match[1].split(" ");
                }
                return new Matrix({
                    a: f(values[0]),
                    b: f(values[1]),
                    c: f(values[2]),
                    d: f(values[3]),
                    e: f(values[4]),
                    f: f(values[5])
                });
            }
            return new Matrix();
        };
        Matrix.transformPoint = function(x, y, m) {
            if (arguments.length === 2) {
                m = y;
                y = x.y;
                x = x.x;
            }
            return new Point(m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f);
        };
        Matrix.transformBox = function(box, matrix) {
            var xMin = Number.MAX_VALUE, xMax = -Number.MAX_VALUE, yMin = Number.MAX_VALUE, yMax = -Number.MAX_VALUE;
            var bps = [ [ box.x, box.y ], [ box.x + box.width, box.y ], [ box.x, box.y + box.height ], [ box.x + box.width, box.y + box.height ] ];
            var bp, rp, rps = [];
            while (bp = bps.pop()) {
                rp = Matrix.transformPoint(bp[0], bp[1], matrix);
                rps.push(rp);
                xMin = Math.min(xMin, rp.x);
                xMax = Math.max(xMax, rp.x);
                yMin = Math.min(yMin, rp.y);
                yMax = Math.max(yMax, rp.y);
            }
            box = new Box({
                x: xMin,
                y: yMin,
                width: xMax - xMin,
                height: yMax - yMin
            });
            utils.extend(box, {
                closurePoints: rps
            });
            return box;
        };
        // 获得从 node 到 refer 的变换矩阵
        Matrix.getCTM = function(target, refer) {
                var ctm = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            var node = target.shapeNode || target.node;

            refer = refer || 'parent';
            /**
             * 由于新版chrome(dev 48.0)移除了getTransformToElement这个方法可能导致报错，这里做兼容处理
             * @Date 2015-11-12
             * @Editor Naixor
             */
            function getTransformToElement(target, source) {
                var matrix;
                try {
                    matrix = source.getScreenCTM().inverse();
                } catch(e) {
                    throw new Error('Can not inverse source element\' ctm.');
                }
                return matrix.multiply(target.getScreenCTM());
            }

            // 根据参照坐标系选区的不一样，返回不同的结果
            switch (refer) {
              case "screen":
                // 以浏览器屏幕为参照坐标系
                ctm = node.getScreenCTM();
                break;

              case "doc":
              case "paper":
                // 以文档（Paper）为参照坐标系
                ctm = node.getCTM();
                break;

              case "view":
              case "top":
                // 以顶层绘图容器（视野）为参照坐标系
                if (target.getPaper()) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.getPaper().shapeNode) : getTransformToElement(node, target.getPaper().shapeNode);
                }
                break;

              case "parent":
                // 以父容器为参照坐标系
                if (target.node.parentNode) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.node.parentNode) : getTransformToElement(node, target.node.parentNode);
                }
                break;

              default:
                // 其他情况，指定参照物
                if (refer.node) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(refer.shapeNode || refer.node) : getTransformToElement(node, refer.shapeNode || refer.node);
                }
            }
            return ctm ? new Matrix(ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f) : new Matrix();
        };
        return Matrix;
    }
};

//src/graphic/palette.js
/**
 * 调色板
 */
_p[44] = {
    value: function(require, exports, module) {
        //标准color
        var StandardColor = _p.r(64), Color = _p.r(28), Utils = _p.r(12);
        var Palette = _p.r(11).createClass("Palette", {
            constructor: function() {
                this.color = {};
            },
            /*
         * 获取颜色名称所对应的颜色值的Color对象
         * @param name 需要获取的颜色名称
         * @return 对应颜色名称的color对象， 如果未找到对应的名称， 则返回null
         */
            get: function(name) {
                var colorValue = this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 获取给定名称的颜色的hex值表示
         * @param name 需要获取的颜色名称
         * @return 如果找到对应的名称， 则返回该名称所对应的hex格式的值， 否则， 返回一个空字符串
         */
            getColorValue: function(name) {
                return this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板实例添加自己独有的颜色名称，对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对应的值， 可以是一个合法的颜色字符串或者是一个color对象
         * @return 新添加的颜色的值
         */
            add: function(name, value) {
                if (typeof value === "string") {
                    this.color[name] = new Color(value).toRGBA();
                } else {
                    this.color[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除调色板实例上用户自己添加的颜色， 该方法不能删除内置的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            remove: function(name) {
                if (this.color.hasOwnProperty(name)) {
                    delete this.color[name];
                    return true;
                }
                return false;
            }
        });
        Utils.extend(Palette, {
            getColor: function(name) {
                var colorValue = StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name];
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 通过给定的名字获取标准的颜色值表示， 返回的值以hex的方式提供
         * @param name 需要获取的标准颜色名称
         * @return 名字所对应的颜色值的hex表示， 如果未找到对应名称的值， 则返回一个空字符串
         */
            getColorValue: function(name) {
                return StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板添加颜色名称，新添加的颜色对所有的调色板对象都可见
         * 对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对于的值， 应该是一个hex格式的颜色字符串， 如： ”#ff0000“
         * @return 新添加的颜色的值
         */
            addColor: function(name, value) {
                if (typeof value === "string") {
                    StandardColor.EXTEND_STANDARD[name] = new Color(value).toRGBA();
                } else {
                    StandardColor.EXTEND_STANDARD[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除用户自己添加的颜色， 该方法不能删除内置的颜色， 该方法不会影响调色板实例自由的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            removeColor: function(name) {
                if (StandardColor.EXTEND_STANDARD.hasOwnProperty(name)) {
                    delete StandardColor.EXTEND_STANDARD[name];
                    return true;
                }
                return false;
            }
        });
        return Palette;
    }
};

//src/graphic/paper.js
_p[45] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var utils = _p.r(12);
        var svg = _p.r(67);
        var Container = _p.r(29);
        var ShapeContainer = _p.r(61);
        var ViewBox = _p.r(75);
        var EventHandler = _p.r(33);
        var Styled = _p.r(66);
        var Matrix = _p.r(43);
        var Paper = Class.createClass("Paper", {
            mixins: [ ShapeContainer, EventHandler, Styled, ViewBox ],
            constructor: function(container) {
                this.callBase();
                this.node = this.createSVGNode();
                this.node.paper = this;
                this.node.appendChild(this.resourceNode = svg.createNode("defs"));
                this.node.appendChild(this.shapeNode = svg.createNode("g"));
                this.resources = new Container();
                this.setWidth("100%").setHeight("100%");
                if (container) {
                    this.renderTo(container);
                }
                this.callMixin();
            },
            renderTo: function(container) {
                if (utils.isString(container)) {
                    container = document.getElementById(container);
                }
                this.container = container;
                container.appendChild(this.node);
            },
            createSVGNode: function() {
                var node = svg.createNode("svg");
                node.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                node.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                node.setAttribute("version", "1.1");
                return node;
            },
            getNode: function() {
                return this.node;
            },
            getContainer: function() {
                return this.container;
            },
            getWidth: function() {
                return this.node.clientWidth;
            },
            setWidth: function(width) {
                this.node.setAttribute("width", width);
                return this;
            },
            getHeight: function() {
                return this.node.clientHeight;
            },
            setHeight: function(height) {
                this.node.setAttribute("height", height);
                return this;
            },
            setViewPort: function(cx, cy, zoom) {
                var viewport, box;
                if (arguments.length == 1) {
                    viewport = arguments[0];
                    cx = viewport.center.x;
                    cy = viewport.center.y;
                    zoom = viewport.zoom;
                }
                zoom = zoom || 1;
                box = this.getViewBox();
                var matrix = new Matrix();
                var dx = box.x + box.width / 2 - cx, dy = box.y + box.height / 2 - cy;
                matrix.translate(-cx, -cy);
                matrix.scale(zoom);
                matrix.translate(cx, cy);
                matrix.translate(dx, dy);
                this.shapeNode.setAttribute("transform", "matrix(" + matrix + ")");
                this.viewport = {
                    center: {
                        x: cx,
                        y: cy
                    },
                    offset: {
                        x: dx,
                        y: dy
                    },
                    zoom: zoom
                };
                return this;
            },
            getViewPort: function() {
                if (!this.viewport) {
                    var box = this.getViewBox();
                    return {
                        zoom: 1,
                        center: {
                            x: box.x + box.width / 2,
                            y: box.y + box.height / 2
                        },
                        offset: {
                            x: 0,
                            y: 0
                        }
                    };
                }
                return this.viewport;
            },
            getViewPortMatrix: function() {
                return Matrix.parse(this.shapeNode.getAttribute("transform"));
            },
            getViewPortTransform: function() {
                var m = this.shapeNode.getCTM();
                return new Matrix(m.a, m.b, m.c, m.d, m.e, m.f);
            },
            getTransform: function() {
                return this.getViewPortTransform().reverse();
            },
            addResource: function(resource) {
                this.resources.appendItem(resource);
                if (resource.node) {
                    this.resourceNode.appendChild(resource.node);
                }
                return this;
            },
            removeResource: function(resource) {
                if (resource.remove) {
                    resource.remove();
                }
                if (resource.node) {
                    this.resourceNode.removeChild(resource.node);
                }
                return this;
            },
            getPaper: function() {
                return this;
            }
        });
        var Shape = _p.r(60);
        Class.extendClass(Shape, {
            getPaper: function() {
                var parent = this.container;
                while (parent && parent instanceof Paper === false) {
                    parent = parent.container;
                }
                return parent;
            },
            isAttached: function() {
                return !!this.getPaper();
            },
            whenPaperReady: function(fn) {
                var me = this;
                function check() {
                    var paper = me.getPaper();
                    if (paper && fn) {
                        fn.call(me, paper);
                    }
                    return paper;
                }
                if (!check()) {
                    this.on("add treeadd", function listen() {
                        if (check()) {
                            me.off("add", listen);
                            me.off("treeadd", listen);
                        }
                    });
                }
                return this;
            }
        });
        return Paper;
    }
};

//src/graphic/path.js
_p[46] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        var createClass = _p.r(11).createClass;
        var Shape = _p.r(60);
        var svg = _p.r(67);
        var g = _p.r(34);
        var slice = Array.prototype.slice, flatten = Utils.flatten;
        var PathDrawer = createClass("PathDrawer", {
            constructor: function(path) {
                this.segment = [];
                this.path = path;
                this.__clear = false;
            },
            getPath: function() {
                return this.path;
            },
            redraw: function() {
                this._transation = this._transation || [];
                return this.clear();
            },
            done: function() {
                var transation = this._transation;
                this._transation = null;
                this.push(transation);
                return this;
            },
            clear: function() {
                if (this._transation) {
                    this._transation = [];
                } else {
                    this.path.setPathData("M 0 0");
                }
                this._clear = true;
                return this;
            },
            push: function() {
                var segment = slice.call(arguments);
                var originData;
                if (this._transation) {
                    this._transation.push(segment);
                    return this;
                }
                if (this._clear) {
                    originData = "";
                    this._clear = false;
                } else {
                    originData = this.path.getPathData();
                }
                originData = originData || "";
                this.path.setPathData(originData + g.pathToString(segment));
                return this;
            },
            moveTo: function(x, y) {
                return this.push("M", slice.call(arguments));
            },
            moveBy: function(dx, dy) {
                return this.push("m", slice.call(arguments));
            },
            lineTo: function(x, y) {
                return this.push("L", slice.call(arguments));
            },
            lineBy: function(dx, dy) {
                return this.push("l", slice.call(arguments));
            },
            arcTo: function(rx, ry, xr, laf, sf, x, y) {
                return this.push("A", slice.call(arguments));
            },
            arcBy: function(rx, ry, xr, laf, sf, dx, dy) {
                return this.push("a", arguments);
            },
            carcTo: function(r, laf, sf, x, y) {
                return this.push("A", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            carcBy: function(r, laf, sf, dx, dy) {
                return this.push("a", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            bezierTo: function(x1, y1, x2, y2, x, y) {
                return this.push("C", slice.call(arguments));
            },
            bezierBy: function(dx1, dy1, dx2, dy2, dx, dy) {
                return this.push("c", slice.call(arguments));
            },
            close: function() {
                return this.push("z");
            }
        });
        return createClass("Path", {
            base: Shape,
            constructor: function(data) {
                this.callBase("path");
                if (data) {
                    this.setPathData(data);
                }
                this.node.setAttribute("fill", svg.defaults.fill);
                this.node.setAttribute("stroke", svg.defaults.stroke);
            },
            setPathData: function(data) {
                data = data || "M0,0";
                this.pathdata = g.pathToString(data);
                this.node.setAttribute("d", this.pathdata);
                this.trigger("shapeupdate", {
                    type: "pathdata"
                });
                return this;
            },
            getPathData: function() {
                return this.pathdata || "";
            },
            getDrawer: function() {
                return new PathDrawer(this);
            },
            isClosed: function() {
                var data = this.getPathData();
                return !!~data.indexOf("z") || !!~data.indexOf("Z");
            }
        });
    }
};

//src/graphic/pattern.js
_p[47] = {
    value: function(require, exports, module) {
        var Resource = _p.r(58);
        var ShapeContainer = _p.r(61);
        var svg = _p.r(67);
        return _p.r(11).createClass("PatternBrush", {
            base: Resource,
            mixins: [ ShapeContainer ],
            constructor: function(paper) {
                this.callBase("pattern", paper);
                this.node.setAttribute("patternUnits", "userSpaceOnUse");
            },
            setX: function(x) {
                this.x = x;
                this.node.setAttribute("x", x);
                return this;
            },
            setY: function(y) {
                this.y = y;
                this.node.setAttribute("y", y);
                return this;
            },
            setWidth: function(width) {
                this.width = width;
                this.node.setAttribute("width", width);
                return this;
            },
            setHeight: function(height) {
                this.height = height;
                this.node.setAttribute("height", height);
                return this;
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            }
        });
    }
};

//src/graphic/pen.js
_p[48] = {
    value: function(require, exports, module) {
        var Color = _p.r(28);
        return _p.r(11).createClass("Pen", {
            constructor: function(brush, width) {
                this.brush = brush;
                this.width = width || 1;
                this.linecap = null;
                this.linejoin = null;
                this.dashArray = null;
                this.opacity = 1;
            },
            getBrush: function() {
                return this.brush;
            },
            setBrush: function(brush) {
                this.brush = brush;
                return this;
            },
            setColor: function(color) {
                return this.setBrush(color);
            },
            getColor: function() {
                return this.brush instanceof Color ? this.brush : null;
            },
            getWidth: function() {
                return this.width;
            },
            setWidth: function(width) {
                this.width = width;
                return this;
            },
            getOpacity: function() {
                return this.opacity;
            },
            setOpacity: function(opacity) {
                this.opacity = opacity;
            },
            getLineCap: function() {
                return this.linecap;
            },
            setLineCap: function(linecap) {
                this.linecap = linecap;
                return this;
            },
            getLineJoin: function() {
                return this.linejoin;
            },
            setLineJoin: function(linejoin) {
                this.linejoin = linejoin;
                return this;
            },
            getDashArray: function() {
                return this.dashArray;
            },
            setDashArray: function(dashArray) {
                this.dashArray = dashArray;
                return this;
            },
            stroke: function(shape) {
                var node = shape.node;
                node.setAttribute("stroke", this.brush.toString());
                node.setAttribute("stroke-width", this.getWidth());
                if (this.getOpacity() < 1) {
                    node.setAttribute("stroke-opacity", this.getOpacity());
                }
                if (this.getLineCap()) {
                    node.setAttribute("stroke-linecap", this.getLineCap());
                }
                if (this.getLineJoin()) {
                    node.setAttribute("stroke-linejoin", this.getLineJoin());
                }
                if (this.getDashArray()) {
                    node.setAttribute("stroke-dasharray", this.getDashArray());
                }
            }
        });
    }
};

//src/graphic/pie.js
_p[49] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(68),
            constructor: function(radius, angle, angleOffset) {
                this.callBase([ 0, radius ], angle, angleOffset);
            },
            getRadius: function() {
                return this.getSectionArray()[1];
            },
            setRadius: function(radius) {
                this.setSectionArray([ 0, radius ]);
            }
        });
    }
};

//src/graphic/point.js
/*
 * 点对象抽象
 */
_p[50] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Point
     * @description 表示一个点
     */
        var Point = _p.r(11).createClass("Point", {
            /**
         * @constructor
         * @for kity.Point
         * @description 指定默认的 x 和 y 创建一个点
         * 
         * @param  {Number} x 点的 x 坐标
         * @param  {Number} y 点的 y 坐标
         */
            constructor: function(x, y) {
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 x 坐标
             * @type {Number}
             */
                this.x = x || 0;
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 y 坐标
             * @type {Number}
             */
                this.y = y || 0;
            },
            offset: function(dx, dy) {
                if (arguments.length == 1) {
                    dy = dx.y;
                    dx = dx.x;
                }
                return new Point(this.x + dx, this.y + dy);
            },
            valueOf: function() {
                return [ this.x, this.y ];
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            spof: function() {
                return new Point((this.x | 0) + .5, (this.y | 0) + .5);
            },
            round: function() {
                return new Point(this.x | 0, this.y | 0);
            },
            isOrigin: function() {
                return this.x === 0 && this.y === 0;
            }
        });
        /**
     * @static
     * @method fromPolar()
     * @for kity.Point
     * @grammar kity.Point.fromPolar(radius, angle, unit) => kity.Point
     * @param  {Number} radius 极坐标中的半径
     * @param  {Number} angle  极坐标中的角度
     * @param  {String} unit   角度使用的单位，默认为 'deg' (角度)，可以取值为 'rad'，表示传入的是弧度值
     */
        Point.fromPolar = function(radius, angle, unit) {
            if (unit != "rad") {
                // deg to rad
                angle = angle / 180 * Math.PI;
            }
            return new Point(radius * Math.cos(angle), radius * Math.sin(angle));
        };
        Point.parse = function(unknown) {
            if (!unknown) return new Point();
            if (unknown instanceof Point) {
                return unknown;
            }
            if (typeof unknown == "string") {
                return Point.parse(unknown.split(/\s*[\s,]\s*/));
            }
            if ("0" in unknown && "1" in unknown) {
                return new Point(unknown[0], unknown[1]);
            }
        };
        return Point;
    }
};

//src/graphic/pointcontainer.js
/**
 * 点集合容器
 */
_p[51] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("PointContainer", {
            base: _p.r(29),
            constructor: function() {
                this.callBase();
            },
            addPoint: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependPoint: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendPoint: function() {
                return this.appendItem.apply(this, arguments);
            },
            removePoint: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addPoints: function() {
                return this.addItems.apply(this, arguments);
            },
            setPoints: function() {
                return this.setItems.apply(this, arguments);
            },
            getPoint: function() {
                return this.getItem.apply(this, arguments);
            },
            getPoints: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstPoint: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastPoint: function() {
                return this.getLastItem.apply(this, arguments);
            }
        });
    }
};

//src/graphic/poly.js
/*
 * 通过点来决定图形的公共父类
 */
_p[52] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        return _p.r(11).createClass("Poly", {
            base: _p.r(46),
            mixins: [ _p.r(51) ],
            constructor: function(points, closeable) {
                this.callBase();
                //是否可闭合
                this.closeable = !!closeable;
                this.setPoints(points || []);
                this.changeable = true;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = this.getDrawer(), points = this.getPoints();
                drawer.clear();
                if (!points.length) {
                    return this;
                }
                drawer.moveTo(points[0]);
                for (var i = 1, point, len = points.length; i < len; i++) {
                    point = points[i];
                    drawer.lineTo(point);
                }
                if (this.closeable && points.length > 2) {
                    drawer.close();
                }
                return this;
            }
        });
    }
};

//src/graphic/polygon.js
_p[53] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polygon", {
            base: _p.r(52),
            constructor: function(points) {
                this.callBase(points, true);
            }
        });
    }
};

//src/graphic/polyline.js
_p[54] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polyline", {
            base: _p.r(52),
            constructor: function(points) {
                this.callBase(points);
            }
        });
    }
};

//src/graphic/radialgradient.js
_p[55] = {
    value: function(require, exports, module) {
        var Gradient = _p.r(35);
        return _p.r(11).createClass("RadialGradientBrush", {
            base: Gradient,
            constructor: function(paper) {
                this.callBase("radialGradient", paper);
                this.setCenter(.5, .5);
                this.setFocal(.5, .5);
                this.setRadius(.5);
            },
            setCenter: function(cx, cy) {
                this.node.setAttribute("cx", cx);
                this.node.setAttribute("cy", cy);
                return this;
            },
            getCenter: function() {
                return {
                    x: +this.node.getAttribute("cx"),
                    y: +this.node.getAttribute("cy")
                };
            },
            setFocal: function(fx, fy) {
                this.node.setAttribute("fx", fx);
                this.node.setAttribute("fy", fy);
                return this;
            },
            getFocal: function() {
                return {
                    x: +this.node.getAttribute("fx"),
                    y: +this.node.getAttribute("fy")
                };
            },
            setRadius: function(r) {
                this.node.setAttribute("r", r);
                return this;
            },
            getRadius: function() {
                return +this.node.getAttribute("r");
            }
        });
    }
};

//src/graphic/rect.js
_p[56] = {
    value: function(require, exports, module) {
        var RectUtils = {}, Utils = _p.r(12), Point = _p.r(50), Box = _p.r(25);
        Utils.extend(RectUtils, {
            //根据传递进来的width、height和radius属性，
            //获取最适合的radius值
            formatRadius: function(width, height, radius) {
                var minValue = Math.floor(Math.min(width / 2, height / 2));
                return Math.min(minValue, radius);
            }
        });
        /**
     * @class kity.Rect
     * @description 表示一个矩形
     * @base kity.Path
     */
        var Rect = _p.r(11).createClass("Rect", {
            base: _p.r(46),
            /**
         * @constructor
         * @for kity.Rect
         * @grammar new kity.Rect(width, height, x, y, radius)
         * @param  {Number} width  矩形的初始化宽度
         * @param  {Number} height 矩形的初始化高度
         * @param  {Number} x      矩形的初始化 x 坐标
         * @param  {Number} y      矩形的初始化 y 坐标
         * @param  {Number} radius 矩形的初始化圆角大小
         */
            constructor: function(width, height, x, y, radius) {
                this.callBase();
                this.x = x || 0;
                this.y = y || 0;
                this.width = width || 0;
                this.height = height || 0;
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                this.update();
            },
            update: function() {
                var x = this.x, y = this.y, w = this.width, h = this.height, r = this.radius;
                var drawer = this.getDrawer().redraw();
                if (!r) {
                    // 直角
                    drawer.push("M", x, y);
                    drawer.push("h", w);
                    drawer.push("v", h);
                    drawer.push("h", -w);
                    drawer.push("z");
                } else {
                    //圆角
                    w -= 2 * r;
                    h -= 2 * r;
                    drawer.push("M", x + r, y);
                    drawer.push("h", w);
                    drawer.push("a", r, r, 0, 0, 1, r, r);
                    drawer.push("v", h);
                    drawer.push("a", r, r, 0, 0, 1, -r, r);
                    drawer.push("h", -w);
                    drawer.push("a", r, r, 0, 0, 1, -r, -r);
                    drawer.push("v", -h);
                    drawer.push("a", r, r, 0, 0, 1, r, -r);
                    drawer.push("z");
                }
                drawer.done();
                return this;
            },
            /**
         * @method setWidth
         * @for kity.Rect
         * @grammar setWidth(width) => kity.Rect
         * @description 设置矩形的宽度，设置后返回矩形实例本身
         * @param {Number} width 宽度值
         *
         * @example
         * ```js
         * rect.setWidth(300);
         * ```
         */
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            /**
         * @method setHeight
         * @for  kity.Rect
         * @grammar setHeight(height) => kity.Rect
         * @description 设置矩形的高度，设置后返回矩形实例本身
         * @param {Number} height 高度值
         *
         * @example
         * ```js
         * rect.setHeight(200);
         * ```
         */
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            /**
         * @method setSize
         * @for  kity.Rect
         * @grammar setSize(width, height) => kity.Rect
         * @description 设置矩形的尺寸，设置后返回矩形本身
         * @param {Number} width  矩形的宽度值
         * @param {Number} height 矩形的高度值
         *
         * @example
         * ```js
         * rect.setSize(300, 200);
         * ```
         */
            setSize: function(width, height) {
                this.width = width;
                this.height = height;
                return this.update();
            },
            /**
         * @method setBox
         * @for kity.Rect
         * @grammar setBox(box) => kity.Rect
         * @description 使用一个 kity 的盒子数据，
         * @param {kity.Box} box 盒子数据
         */
            setBox: function(box) {
                this.x = box.x;
                this.y = box.y;
                this.width = box.width;
                this.height = box.height;
                return this.update();
            },
            getBox: function() {
                return new Box(this.x, this.y, this.width, this.height);
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                return this.update();
            },
            getPosition: function() {
                return new Point(this.x, this.y);
            },
            setPosition: function(x, y) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    y = p.y;
                    x = p.x;
                }
                this.x = x;
                this.y = y;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            },
            getPositionX: function() {
                return this.x;
            },
            getPositionY: function() {
                return this.y;
            },
            setPositionX: function(x) {
                this.x = x;
                return this.update();
            },
            setPositionY: function(y) {
                this.y = y;
                return this.update();
            }
        });
        return Rect;
    }
};

//src/graphic/regularpolygon.js
_p[57] = {
    value: function(require, exports, module) {
        var Point = _p.r(50);
        return _p.r(11).createClass("RegularPolygon", {
            base: _p.r(46),
            constructor: function(side, radius, x, y) {
                this.callBase();
                this.radius = radius || 0;
                this.side = Math.max(side || 3, 3);
                if (arguments.length > 2) {
                    if (arguments.length == 3) {
                        y = x.y;
                        x = x.x;
                    }
                }
                this.center = new Point(x, y);
                this.draw();
            },
            getSide: function() {
                return this.side;
            },
            setSide: function(side) {
                this.side = side;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = radius;
                return this.draw();
            },
            draw: function() {
                var radius = this.radius, side = this.side, step = Math.PI * 2 / side, drawer = this.getDrawer(), i;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(radius, Math.PI / 2, "rad").offset(this.center));
                for (i = 0; i <= side; i++) {
                    drawer.lineTo(Point.fromPolar(radius, step * i + Math.PI / 2, "rad").offset(this.center));
                }
                drawer.close();
                return this;
            }
        });
    }
};

//src/graphic/resource.js
/**
 * @fileOverview
 *
 * 资源节点基类
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[58] = {
    value: function(require, exports, module) {
        var svg = _p.r(67);
        return _p.r(11).createClass("Resource", {
            constructor: function(nodeType, paper) {
                this.callBase();
                this.node = svg.createNode(nodeType);
                if (paper) {
                    paper.addResource(this);
                }
            },
            toString: function() {
                return "url(#" + this.node.id + ")";
            }
        });
    }
};

//src/graphic/ring.js
_p[59] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(68),
            constructor: function(innerRadius, outerRadius) {
                this.callBase([ innerRadius, outerRadius ], 360, 0);
            },
            getInnerRadius: function() {
                return this.getSectionArray()[0];
            },
            getOuterRadius: function() {
                return this.getSectionArray()[1];
            },
            setInnerRadius: function(value) {
                this.setSectionArray([ value, this.getOuterRadius() ]);
            },
            setOuterRadius: function(value) {
                this.setSectionArray([ this.getInnerRadius(), value ]);
            }
        });
    }
};

//src/graphic/shape.js
_p[60] = {
    value: function(require, exports, module) {
        var svg = _p.r(67);
        var utils = _p.r(12);
        var EventHandler = _p.r(33);
        var Styled = _p.r(66);
        var Data = _p.r(31);
        var Matrix = _p.r(43);
        var Pen = _p.r(48);
        var slice = Array.prototype.slice;
        var Box = _p.r(25);
        var Shape = _p.r(11).createClass("Shape", {
            mixins: [ EventHandler, Styled, Data ],
            constructor: function Shape(tagName) {
                this.node = svg.createNode(tagName);
                this.node.shape = this;
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.callMixin();
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            getNode: function() {
                return this.node;
            },
            getBoundaryBox: function() {
                var box;
                try {
                    box = this.node.getBBox();
                } catch (e) {
                    box = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight
                    };
                }
                return new Box(box);
            },
            getRenderBox: function(refer) {
                var box = this.getBoundaryBox();
                var matrix = this.getTransform(refer);
                return matrix.transformBox(box);
            },
            getWidth: function() {
                return this.getRenderBox().width;
            },
            getHeight: function() {
                return this.getRenderBox().height;
            },
            getSize: function() {
                var box = this.getRenderBox();
                delete box.x;
                delete box.y;
                return box;
            },
            setOpacity: function(value) {
                this.node.setAttribute("opacity", value);
                return this;
            },
            getOpacity: function() {
                var opacity = this.node.getAttribute("opacity");
                return opacity ? +opacity : 1;
            },
            setVisible: function(value) {
                if (value) {
                    this.node.removeAttribute("display");
                } else {
                    this.node.setAttribute("display", "none");
                }
                return this;
            },
            getVisible: function() {
                this.node.getAttribute("display");
            },
            hasAncestor: function(node) {
                var parent = this.container;
                while (parent) {
                    if (parent === node) {
                        return true;
                    }
                    parent = parent.container;
                }
                return false;
            },
            getTransform: function(refer) {
                return Matrix.getCTM(this, refer);
            },
            clearTransform: function() {
                this.node.removeAttribute("transform");
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.trigger("shapeupdate", {
                    type: "transform"
                });
                return this;
            },
            _applyTransform: function() {
                var t = this.transform, result = [];
                if (t.translate) {
                    result.push([ "translate(", t.translate, ")" ]);
                }
                if (t.rotate) {
                    result.push([ "rotate(", t.rotate, ")" ]);
                }
                if (t.scale) {
                    result.push([ "scale(", t.scale, ")" ]);
                }
                if (t.matrix) {
                    result.push([ "matrix(", t.matrix, ")" ]);
                }
                this.node.setAttribute("transform", utils.flatten(result).join(" "));
                return this;
            },
            setMatrix: function(m) {
                this.transform.matrix = m;
                return this._applyTransform();
            },
            setTranslate: function(t) {
                this.transform.translate = t !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setRotate: function(r) {
                this.transform.rotate = r !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setScale: function(s) {
                this.transform.scale = s !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            translate: function(dx, dy) {
                var m = this.transform.matrix || new Matrix();
                if (dy === undefined) {
                    dy = 0;
                }
                this.transform.matrix = m.translate(dx, dy);
                return this._applyTransform();
            },
            rotate: function(deg) {
                var m = this.transform.matrix || new Matrix();
                this.transform.matrix = m.rotate(deg);
                return this._applyTransform();
            },
            scale: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.scale(sx, sy);
                return this._applyTransform();
            },
            skew: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.skew(sx, sy);
                return this._applyTransform();
            },
            stroke: function(pen, width) {
                if (pen && pen.stroke) {
                    pen.stroke(this);
                } else if (pen) {
                    // 字符串或重写了 toString 的对象
                    this.node.setAttribute("stroke", pen.toString());
                    if (width) {
                        this.node.setAttribute("stroke-width", width);
                    }
                } else if (pen === null) {
                    this.node.removeAttribute("stroe");
                }
                return this;
            },
            fill: function(brush) {
                // 字符串或重写了 toString 的对象
                if (brush) {
                    this.node.setAttribute("fill", brush.toString());
                }
                if (brush === null) {
                    this.node.removeAttribute("fill");
                }
                return this;
            },
            setAttr: function(a, v) {
                var me = this;
                if (utils.isObject(a)) {
                    utils.each(a, function(val, key) {
                        me.setAttr(key, val);
                    });
                }
                if (v === undefined || v === null || v === "") {
                    this.node.removeAttribute(a);
                } else {
                    this.node.setAttribute(a, v);
                }
                return this;
            },
            getAttr: function(a) {
                return this.node.getAttribute(a);
            }
        });
        return Shape;
    }
};

//src/graphic/shapecontainer.js
_p[61] = {
    value: function(require, exports, module) {
        var Container = _p.r(29);
        var utils = _p.r(12);
        var ShapeContainer = _p.r(11).createClass("ShapeContainer", {
            base: Container,
            isShapeContainer: true,
            /* private */
            handleAdd: function(shape, index) {
                var parent = this.getShapeNode();
                parent.insertBefore(shape.node, parent.childNodes[index] || null);
                shape.trigger("add", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeadd", this);
                }
            },
            /* private */
            handleRemove: function(shape, index) {
                var parent = this.getShapeNode();
                parent.removeChild(shape.node);
                shape.trigger("remove", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeremove", this);
                }
            },
            /* private */
            notifyTreeModification: function(type, container) {
                this.eachItem(function(index, shape) {
                    if (shape.notifyTreeModification) {
                        shape.notifyTreeModification(type, container);
                    }
                    shape.trigger(type, {
                        container: container
                    });
                });
            },
            /* public */
            getShape: function(index) {
                return this.getItem(index);
            },
            /* public */
            addShape: function(shape, index) {
                return this.addItem(shape, index);
            },
            put: function(shape) {
                this.addShape(shape);
                return shape;
            },
            appendShape: function(shape) {
                return this.addShape(shape);
            },
            prependShape: function(shape) {
                return this.addShape(shape, 0);
            },
            replaceShape: function(replacer, origin) {
                var index = this.indexOf(origin);
                if (index === -1) {
                    return;
                }
                this.removeShape(index);
                this.addShape(replacer, index);
                return this;
            },
            addShapeBefore: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index);
            },
            addShapeAfter: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index === -1 ? undefined : index + 1);
            },
            /* public */
            addShapes: function(shapes) {
                return this.addItems(shapes);
            },
            /* public */
            removeShape: function(index) {
                return this.removeItem(index);
            },
            getShapes: function() {
                return this.getItems();
            },
            getShapesByType: function(name) {
                var shapes = [];
                function getShapes(shape) {
                    if (name.toLowerCase() == shape.getType().toLowerCase()) {
                        shapes.push(shape);
                    }
                    if (shape.isShapeContainer) {
                        utils.each(shape.getShapes(), function(n) {
                            getShapes(n);
                        });
                    }
                }
                getShapes(this);
                return shapes;
            },
            /* public */
            getShapeById: function(id) {
                return this.getShapeNode().getElementById(id).shape;
            },
            arrangeShape: function(shape, index) {
                return this.removeShape(shape).addShape(shape, index);
            },
            /* protected */
            getShapeNode: function() {
                return this.shapeNode || this.node;
            }
        });
        var Shape = _p.r(60);
        _p.r(11).extendClass(Shape, {
            bringTo: function(index) {
                this.container.arrangeShape(this, index);
                return this;
            },
            bringFront: function() {
                return this.bringTo(this.container.indexOf(this) + 1);
            },
            bringBack: function() {
                return this.bringTo(this.container.indexOf(this) - 1);
            },
            bringTop: function() {
                this.container.removeShape(this).addShape(this);
                return this;
            },
            bringRear: function() {
                return this.bringTo(0);
            },
            bringRefer: function(referShape, offset) {
                if (referShape.container) {
                    if (this.remove) {
                        this.remove();
                    }
                    referShape.container.addShape(this, referShape.container.indexOf(referShape) + (offset || 0));
                }
                return this;
            },
            bringAbove: function(referShape) {
                return this.bringRefer(referShape);
            },
            bringBelow: function(referShape) {
                return this.bringRefer(referShape, 1);
            },
            replaceBy: function(newShape) {
                if (this.container) {
                    newShape.bringAbove(this);
                    this.remove();
                }
                return this;
            }
        });
        return ShapeContainer;
    }
};

//src/graphic/shapeevent.js
/*
 * 图形事件包装类
 * */
_p[62] = {
    value: function(require, exprots, module) {
        var Matrix = _p.r(43), Utils = _p.r(12), Point = _p.r(50);
        return _p.r(11).createClass("ShapeEvent", {
            constructor: function(event) {
                var target = null;
                // dom 事件封装对象
                if (!Utils.isObject(event.target)) {
                    this.type = event.type;
                    target = event.target;
                    // use标签有特殊属性， 需要区别对待
                    if (target.correspondingUseElement) {
                        target = target.correspondingUseElement;
                    }
                    this.originEvent = event;
                    this.targetShape = target.shape || target.paper || event.currentTarget && (event.currentTarget.shape || event.currentTarget.paper);
                    if (event._kityParam) {
                        Utils.extend(this, event._kityParam);
                    }
                } else {
                    Utils.extend(this, event);
                }
            },
            preventDefault: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.preventDefault) {
                    evt.preventDefault();
                    return evt.cancelable;
                } else {
                    evt.returnValue = false;
                    return true;
                }
            },
            //当前鼠标事件在用户坐标系中点击的点的坐标位置
            getPosition: function(refer, touchIndex) {
                if (!this.originEvent) {
                    return null;
                }
                var eventClient = this.originEvent.touches ? this.originEvent.touches[touchIndex || 0] : this.originEvent;
                var target = this.targetShape;
                var targetNode = target.shapeNode || target.node;
                var pScreen = new Point(eventClient && eventClient.clientX || 0, eventClient && eventClient.clientY || 0);
                var pTarget = Matrix.transformPoint(pScreen, targetNode.getScreenCTM().inverse());
                var pRefer = Matrix.getCTM(target, refer || "view").transformPoint(pTarget);
                return pRefer;
            },
            stopPropagation: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = false;
                }
            }
        });
    }
};

//src/graphic/shapepoint.js
/*
 * 图形上的点抽象
 */
_p[63] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ShapePoint", {
            base: _p.r(50),
            constructor: function(px, py) {
                this.callBase(px, py);
            },
            setX: function(x) {
                return this.setPoint(x, this.y);
            },
            setY: function(y) {
                return this.setPoint(this.x, y);
            },
            setPoint: function(x, y) {
                this.x = x;
                this.y = y;
                this.update();
                return this;
            },
            getPoint: function() {
                return this;
            },
            update: function() {
                if (this.container && this.container.update) {
                    this.container.update();
                }
                return this;
            }
        });
    }
};

//src/graphic/standardcolor.js
/**
 * 标准颜色映射
 */
_p[64] = {
    value: {
        COLOR_STANDARD: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00"
        },
        //标准扩展
        EXTEND_STANDARD: {}
    }
};

//src/graphic/star.js
_p[65] = {
    value: function(require, exports, module) {
        /**
     * @see http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html
     */
        var defaultRatioForStar = {
            "3": .2,
            // yy
            "5": .38196601125,
            "6": .57735026919,
            "8": .541196100146,
            "10": .726542528005,
            "12": .707106781187
        };
        var Point = _p.r(50);
        return _p.r(11).createClass("Star", {
            base: _p.r(46),
            constructor: function(vertex, radius, shrink, offset, angleOffset) {
                this.callBase();
                this.vertex = vertex || 3;
                this.radius = radius || 0;
                this.shrink = shrink;
                this.offset = offset || new Point(0, 0);
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getVertex: function() {
                return this.vertex;
            },
            setVertex: function(value) {
                this.vertex = value;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(value) {
                this.radius = value;
                return this.draw();
            },
            getShrink: function() {
                return this.shrink;
            },
            setShrink: function(value) {
                this.shrink = value;
                return this.draw();
            },
            getOffset: function() {
                return this.offset;
            },
            setOffset: function(value) {
                this.offset = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var innerRadius = this.radius, outerRadius = this.radius * (this.shrink || defaultRatioForStar[this.vertex] || .5), vertex = this.vertex, offset = this.offset, angleStart = 90, angleStep = 180 / vertex, angleOffset = this.angleOffset, drawer = this.getDrawer(), i, angle;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(outerRadius, angleStart));
                for (i = 1; i <= vertex * 2; i++) {
                    angle = angleStart + angleStep * i;
                    // 绘制内点
                    if (i % 2) {
                        drawer.lineTo(Point.fromPolar(innerRadius, angle + angleOffset).offset(offset));
                    } else {
                        drawer.lineTo(Point.fromPolar(outerRadius, angle));
                    }
                }
                drawer.close();
            }
        });
    }
};

//src/graphic/styled.js
_p[66] = {
    value: function(require, exports, module) {
        // polyfill for ie
        var ClassList = _p.r(11).createClass("ClassList", {
            constructor: function(node) {
                this._node = node;
                this._list = node.className.toString().split(" ");
            },
            _update: function() {
                this._node.className = this._list.join(" ");
            },
            add: function(name) {
                this._list.push(name);
                this._update();
            },
            remove: function(name) {
                var index = this._list.indexOf(name);
                if (~index) {
                    this._list.splice(index, 1);
                }
                this._update();
            },
            contains: function(name) {
                return !!~this._list.indexOf(name);
            }
        });
        function getClassList(node) {
            if (!node.classList) {
                node.classList = new ClassList(node);
            }
            return node.classList;
        }
        return _p.r(11).createClass("Styled", {
            addClass: function(name) {
                getClassList(this.node).add(name);
                return this;
            },
            removeClass: function(name) {
                getClassList(this.node).remove(name);
                return this;
            },
            hasClass: function(name) {
                return getClassList(this.node).contains(name);
            },
            setStyle: function(styles) {
                if (arguments.length == 2) {
                    this.node.style[arguments[0]] = arguments[1];
                    return this;
                }
                for (var name in styles) {
                    if (styles.hasOwnProperty(name)) {
                        this.node.style[name] = styles[name];
                    }
                }
                return this;
            }
        });
    }
};

//src/graphic/svg.js
_p[67] = {
    value: function(require, exports, module) {
        var doc = document;
        var id = 0;
        var svg = {
            createNode: function(name) {
                var node = doc.createElementNS(svg.ns, name);
                node.id = "kity_" + name + "_" + id++;
                return node;
            },
            defaults: {
                stroke: "none",
                fill: "none"
            },
            xlink: "http://www.w3.org/1999/xlink",
            ns: "http://www.w3.org/2000/svg"
        };
        return svg;
    }
};

//src/graphic/sweep.js
_p[68] = {
    value: function(require, exports, module) {
        var Point = _p.r(50);
        return _p.r(11).createClass("Sweep", {
            base: _p.r(46),
            constructor: function(sectionArray, angle, angleOffset) {
                this.callBase();
                this.sectionArray = sectionArray || [];
                this.angle = angle || 0;
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getSectionArray: function() {
                return this.sectionArray;
            },
            setSectionArray: function(value) {
                this.sectionArray = value;
                return this.draw();
            },
            getAngle: function() {
                return this.angle;
            },
            setAngle: function(value) {
                this.angle = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var sectionArray = this.sectionArray, i;
                for (i = 0; i < sectionArray.length; i += 2) {
                    this.drawSection(sectionArray[i], sectionArray[i + 1]);
                }
                return this;
            },
            drawSection: function(from, to) {
                var angleLength = this.angle && (this.angle % 360 ? this.angle % 360 : 360), angleStart = this.angleOffset, angleHalf = angleStart + angleLength / 2, angleEnd = angleStart + angleLength, sweepFlag = angleLength < 0 ? 0 : 1, drawer = this.getDrawer();
                drawer.redraw();
                if (angleLength === 0) {
                    drawer.done();
                    return;
                }
                drawer.moveTo(Point.fromPolar(from, angleStart));
                drawer.lineTo(Point.fromPolar(to, angleStart));
                if (to) {
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleHalf));
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleEnd));
                }
                drawer.lineTo(Point.fromPolar(from, angleEnd));
                if (from) {
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleHalf));
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleStart));
                }
                drawer.close();
                drawer.done();
            }
        });
    }
};

//src/graphic/text.js
_p[69] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(70);
        var ShapeContainer = _p.r(61);
        var svg = _p.r(67);
        var utils = _p.r(12);
        var offsetHash = {};
        function getTextBoundOffset(text) {
            var font = text._cachedFontHash;
            if (offsetHash[font]) {
                return offsetHash[font];
            }
            var textContent = text.getContent();
            text.setContent("百度Fex");
            var bbox = text.getBoundaryBox(), y = text.getY();
            if (!bbox.height) return {
                top: 0,
                bottom: 0,
                middle: 0
            };
            var topOffset = y - bbox.y + +text.node.getAttribute("dy"), bottomOffset = topOffset - bbox.height;
            text.setContent(textContent);
            return offsetHash[font] = {
                top: topOffset,
                bottom: bottomOffset,
                middle: (topOffset + bottomOffset) / 2
            };
        }
        return _p.r(11).createClass("Text", {
            base: TextContent,
            mixins: [ ShapeContainer ],
            constructor: function(content) {
                this.callBase("text");
                if (content !== undefined) {
                    this.setContent(content);
                }
                this._buildFontHash();
            },
            fixPosition: function() {
                if (!this.__fixedPosition) {
                    this.setVerticalAlign(this.getVerticalAlign());
                }
            },
            _buildFontHash: function() {
                var style = window.getComputedStyle(this.node);
                this._cachedFontHash = [ style.fontFamily, style.fontSize, style.fontStretch, style.fontStyle, style.fontVariant, style.fontWeight ].join("-");
            },
            _fontChanged: function(font) {
                var last = this._lastFont;
                var current = utils.extend({}, last, font);
                if (!last) {
                    this._lastFont = font;
                    return true;
                }
                var changed = last.family != current.family || last.size != current.size || last.style != current.style || last.weight != current.weight;
                this._lastFont = current;
                return changed;
            },
            setX: function(x) {
                this.node.setAttribute("x", x);
                return this;
            },
            setPosition: function(x, y) {
                return this.setX(x).setY(y);
            },
            setY: function(y) {
                this.node.setAttribute("y", y);
                return this;
            },
            getX: function() {
                return +this.node.getAttribute("x") || 0;
            },
            getY: function() {
                return +this.node.getAttribute("y") || 0;
            },
            setFont: function(font) {
                this.callBase(font);
                if (this._fontChanged(font)) {
                    this._buildFontHash();
                    this.setVerticalAlign(this.getVerticalAlign());
                }
                return this;
            },
            setTextAnchor: function(anchor) {
                this.node.setAttribute("text-anchor", anchor);
                return this;
            },
            getTextAnchor: function() {
                return this.node.getAttribute("text-anchor") || "start";
            },
            // top/bottom/middle/baseline
            setVerticalAlign: function(align) {
                this.whenPaperReady(function() {
                    var dy;
                    switch (align) {
                      case "top":
                        dy = getTextBoundOffset(this).top;
                        break;

                      case "bottom":
                        dy = getTextBoundOffset(this).bottom;
                        break;

                      case "middle":
                        dy = getTextBoundOffset(this).middle;
                        break;

                      default:
                        dy = 0;
                    }
                    if (dy) this.__fixedPosition = true;
                    this.node.setAttribute("dy", dy);
                });
                this.verticalAlign = align;
                return this;
            },
            getVerticalAlign: function() {
                return this.verticalAlign || "baseline";
            },
            setStartOffset: function(offset) {
                // only for text path
                if (this.shapeNode != this.node) {
                    this.shapeNode.setAttribute("startOffset", offset * 100 + "%");
                }
            },
            addSpan: function(span) {
                this.addShape(span);
                return this;
            },
            setPath: function(path) {
                var textpath = this.shapeNode;
                if (this.shapeNode == this.node) {
                    // 当前还不是 textpath
                    textpath = this.shapeNode = svg.createNode("textPath");
                    while (this.node.firstChild) {
                        this.shapeNode.appendChild(this.node.firstChild);
                    }
                    this.node.appendChild(textpath);
                }
                textpath.setAttributeNS(svg.xlink, "xlink:href", "#" + path.node.id);
                this.setTextAnchor(this.getTextAnchor());
                return this;
            }
        });
    }
};

//src/graphic/textcontent.js
_p[70] = {
    value: function(require, exports, module) {
        var Shape = _p.r(60);
        return _p.r(11).createClass("TextContent", {
            base: Shape,
            constructor: function(nodeType) {
                // call shape constructor
                this.callBase(nodeType);
                this.shapeNode = this.shapeNode || this.node;
                this.shapeNode.setAttribute("text-rendering", "geometricPrecision");
            },
            clearContent: function() {
                while (this.shapeNode.firstChild) {
                    this.shapeNode.removeChild(this.shapeNode.firstChild);
                }
                return this;
            },
            setContent: function(content) {
                this.shapeNode.textContent = content;
                return this;
            },
            getContent: function() {
                return this.shapeNode.textContent;
            },
            appendContent: function(content) {
                this.shapeNode.textContent += content;
                return this;
            },
            setSize: function(value) {
                return this.setFontSize(value);
            },
            setFontSize: function(value) {
                return this.setFont({
                    size: value
                });
            },
            setFontFamily: function(value) {
                return this.setFont({
                    family: value
                });
            },
            setFontBold: function(bold) {
                return this.setFont({
                    weight: bold ? "bold" : "normal"
                });
            },
            setFontItalic: function(italic) {
                return this.setFont({
                    style: italic ? "italic" : "normal"
                });
            },
            setFont: function(font) {
                var node = this.node;
                [ "family", "size", "weight", "style" ].forEach(function(section) {
                    if (font[section] === null) {
                        node.removeAttribute("font-" + section);
                    } else if (font[section]) {
                        node.setAttribute("font-" + section, font[section]);
                    }
                });
                return this;
            },
            getExtentOfChar: function(index) {
                return this.node.getExtentOfChar(index);
            },
            getRotationOfChar: function(index) {
                return this.node.getRotationOfChar(index);
            },
            getCharNumAtPosition: function(x, y) {
                return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(x, y));
            }
        });
    }
};

//src/graphic/textspan.js
_p[71] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(70);
        var Styled = _p.r(66);
        return _p.r(11).createClass("TextSpan", {
            base: TextContent,
            mixins: [ Styled ],
            constructor: function(content) {
                this.callBase("tspan");
                this.setContent(content);
            }
        });
    }
};

//src/graphic/use.js
/*
 * USE 功能
 */
_p[72] = {
    value: function(require, exports, module) {
        var Svg = _p.r(67);
        var Class = _p.r(11);
        var Use = Class.createClass("Use", {
            base: _p.r(60),
            constructor: function(shape) {
                this.callBase("use");
                this.ref(shape);
            },
            ref: function(shape) {
                if (!shape) {
                    this.node.removeAttributeNS(Svg.xlink, "xlink:href");
                    return this;
                }
                var shapeId = shape.getId();
                if (shapeId) {
                    this.node.setAttributeNS(Svg.xlink, "xlink:href", "#" + shapeId);
                }
                // by techird
                // 作为 Use 的图形，如果没有 fill 和 stroke，移除默认的 'none' 值，用于 Use 覆盖
                if (shape.node.getAttribute("fill") === "none") {
                    shape.node.removeAttribute("fill");
                }
                if (shape.node.getAttribute("stroke") === "none") {
                    shape.node.removeAttribute("stroke");
                }
                return this;
            }
        });
        var Shape = _p.r(60);
        Class.extendClass(Shape, {
            // fast-use
            use: function() {
                return new Use(this);
            }
        });
        return Use;
    }
};

//src/graphic/vector.js
_p[73] = {
    value: function(require, exports, module) {
        var Point = _p.r(50);
        var Matrix = _p.r(43);
        var Vector = _p.r(11).createClass("Vector", {
            base: Point,
            constructor: function(x, y) {
                this.callBase(x, y);
            },
            square: function() {
                return this.x * this.x + this.y * this.y;
            },
            length: function() {
                return Math.sqrt(this.square());
            },
            add: function(q) {
                return new Vector(this.x + q.x, this.y + q.y);
            },
            minus: function(q) {
                return new Vector(this.x - q.x, this.y - q.y);
            },
            dot: function(q) {
                return this.x * q.x + this.y * q.y;
            },
            project: function(q) {
                return q.multipy(this.dot(q) / q.square());
            },
            normalize: function(length) {
                if (length === undefined) {
                    length = 1;
                }
                return this.multipy(length / this.length());
            },
            multipy: function(scale) {
                return new Vector(this.x * scale, this.y * scale);
            },
            rotate: function(angle, unit) {
                if (unit == "rad") {
                    angle = angle / Math.PI * 180;
                }
                var p = new Matrix().rotate(angle).transformPoint(this);
                return new Vector(p.x, p.y);
            },
            vertical: function() {
                return new Vector(this.y, -this.x);
            },
            reverse: function() {
                return this.multipy(-1);
            },
            getAngle: function() {
                var length = this.length();
                if (length === 0) return 0;
                var rad = Math.acos(this.x / length);
                var sign = this.y > 0 ? 1 : -1;
                return sign * 180 * rad / Math.PI;
            }
        });
        Vector.fromPoints = function(p1, p2) {
            return new Vector(p2.x - p1.x, p2.y - p1.y);
        };
        Vector.fromPolar = function() {
            var p = Point.fromPolar.apply(Point, arguments);
            return new Vector(p.x, p.y);
        };
        _p.r(11).extendClass(Point, {
            asVector: function() {
                return new Vector(this.x, this.y);
            }
        });
        return Vector;
    }
};

//src/graphic/view.js
_p[74] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(61);
        var ViewBox = _p.r(75);
        return _p.r(11).createClass("View", {
            mixins: [ ShapeContainer, ViewBox ],
            base: _p.r(74),
            constructor: function() {
                this.callBase("view");
            }
        });
    }
};

//src/graphic/viewbox.js
_p[75] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ViewBox", {
            getViewBox: function() {
                var attr = this.node.getAttribute("viewBox");
                if (attr === null) {
                    // firefox:
                    // 1. viewBox 没有设置过的时候获得的是 null
                    // 2. svg 标签没有指定绝对大小的时候 clientWidth 和 clientHeigt 为 0，需要在父容器上查找
                    // TODO: 第 2 条取得的不准确（假如有 padding 之类的）
                    return {
                        x: 0,
                        y: 0,
                        width: this.node.clientWidth || this.node.parentNode.clientWidth,
                        height: this.node.clientHeight || this.node.parentNode.clientHeight
                    };
                } else {
                    attr = attr.split(" ");
                    return {
                        x: +attr[0],
                        y: +attr[1],
                        width: +attr[2],
                        height: +attr[3]
                    };
                }
            },
            setViewBox: function(x, y, width, height) {
                this.node.setAttribute("viewBox", [ x, y, width, height ].join(" "));
                return this;
            }
        });
    }
};

//src/kity.js
/**
 * @fileOverview kity 暴露的方法或对象
 */
_p[76] = {
    value: function(require, exports, module) {
        var kity = {}, utils = _p.r(12);
        kity.version = "2.0.0";
        utils.extend(kity, {
            // core
            createClass: _p.r(11).createClass,
            extendClass: _p.r(11).extendClass,
            Utils: utils,
            Browser: _p.r(10),
            // shape
            Box: _p.r(25),
            Bezier: _p.r(23),
            BezierPoint: _p.r(24),
            Circle: _p.r(26),
            Clip: _p.r(27),
            Color: _p.r(28),
            Container: _p.r(29),
            Curve: _p.r(30),
            Ellipse: _p.r(32),
            Group: _p.r(36),
            Gradient: _p.r(35),
            HyperLink: _p.r(37),
            Image: _p.r(38),
            Line: _p.r(39),
            LinearGradient: _p.r(40),
            Mask: _p.r(42),
            Matrix: _p.r(43),
            Marker: _p.r(41),
            Palette: _p.r(44),
            Paper: _p.r(45),
            Path: _p.r(46),
            Pattern: _p.r(47),
            Pen: _p.r(48),
            Point: _p.r(50),
            PointContainer: _p.r(51),
            Polygon: _p.r(53),
            Polyline: _p.r(54),
            Pie: _p.r(49),
            RadialGradient: _p.r(55),
            Resource: _p.r(58),
            Rect: _p.r(56),
            RegularPolygon: _p.r(57),
            Ring: _p.r(59),
            Shape: _p.r(60),
            ShapePoint: _p.r(63),
            ShapeContainer: _p.r(61),
            Sweep: _p.r(68),
            Star: _p.r(65),
            Text: _p.r(69),
            TextSpan: _p.r(71),
            Use: _p.r(72),
            Vector: _p.r(73),
            g: _p.r(34),
            // animate
            Animator: _p.r(0),
            Easing: _p.r(1),
            OpacityAnimator: _p.r(4),
            RotateAnimator: _p.r(6),
            ScaleAnimator: _p.r(7),
            Timeline: _p.r(8),
            TranslateAnimator: _p.r(9),
            PathAnimator: _p.r(5),
            MotionAnimator: _p.r(3),
            requestFrame: _p.r(2).requestFrame,
            releaseFrame: _p.r(2).releaseFrame,
            // filter
            Filter: _p.r(20),
            GaussianblurFilter: _p.r(21),
            ProjectionFilter: _p.r(22),
            // effect
            ColorMatrixEffect: _p.r(13),
            CompositeEffect: _p.r(14),
            ConvolveMatrixEffect: _p.r(15),
            Effect: _p.r(16),
            GaussianblurEffect: _p.r(17),
            OffsetEffect: _p.r(18)
        });
        window.kity = kity;
        // window.Utils = window.utils =utils;
        //return ;
    }
};

var moduleMapping = {
    kity: 76
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
/* global use, inc: true */

/**
 * 模块暴露
 */
use('kity');
})();
var CHESS = window.CHESS = function() {
    var instanceMap = {},
        instanceId = 0,
        uuidMap = {};
    return {
        version: '1.0.0',
        uuid: function(name) {
            name = name || 'unknown';
            uuidMap[name] = uuidMap[name] || 0;
            ++uuidMap[name];
            return name + '_' + uuidMap[name];
        },
        createChess: function(renderTarget, options) {
            options = options || {};
            options.renderTo = Utils.isString(renderTarget) ? document.getElementById(renderTarget) : renderTarget;
            var chess = new Chess(options);
            this.addChess(options.renderTo, chess);
            return chess;
        },
        addChess: function(target, chess) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("CHESS_" + instanceId++);
            }
            instanceMap[id] = chess;
        },
        getChess: function(target, options) {
            var id;
            if (typeof(target) === 'string') {
                id = target;
            } else {
                id = target.id || ("CHESS_INSTANCE_" + instanceId++);
            }
            return instanceMap[id] || this.createChess(target, options);
        },
        //挂接多语言
        LANG: {},
        //棋子
        PIECE:{},
        //棋子价值
        PIECEVALUE:{}
    };
}();

var Chess = kity.createClass('Chess', {
    constructor: function(options) {
        this._options = Utils.extend(window.CHESS_CONFIG || {}, options);

        var initQueue = Chess._initFnQueue.slice();

        // @see option.js
        // @see event.js
        // @see status.js
        // @see paper.js
        // @see key.js
        // @see contextmenu.js
        // @see module.js
        // @see data.js         
        // @see readonly.js
        // @see layout.js
        // @see theme.js
        
        while (initQueue.length) initQueue.shift().call(this, options);
        this.fire('ready');

    }
});
Chess._initFnQueue = [];
Chess.registerInit = function(fn) {
    //console.log(fn);
    Chess._initFnQueue.push(fn);
};
Array.prototype.remove=function(dx){
    if(isNaN(dx)||dx>this.length){return false;} 
    for(var i=0,n=0;i<this.length;i++){ 
        if(this[i]!=this[dx]){ 
            this[n++]=this[i] 
        } 
    } 
    this.length-=1;
    return this;
}
/**
 * 时间格式化
 * @param format
 * @returns
 */
Date.prototype.format = function(format){
    var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3), //quarter
            "S" : this.getMilliseconds() //millisecond
        }
        if(/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}
/**
* each是一个集合迭代函数，它接受一个函数作为参数和一组可选的参数
* @param {Function} fn 进行迭代判定的函数
* @param more ... 零个或多个可选的用户自定义参数
* @returns {Array} 结果集，如果没有结果，返回空集
*/

Array.prototype.each = function(fn){
    fn = fn || Function.K;
     var a = [];
     var args = Array.prototype.slice.call(arguments, 1);
     for(var i = 0; i < this.length; i++){
         var res = fn.apply(this,[this[i],i].concat(args));
         if(res != null) a.push(res);
     }
     return a;
};

/**
* 得到一个数组不重复的元素集合<br/>
* 唯一化一个数组
* @returns {Array} 由不重复元素构成的数组
*/
Array.prototype.uniquelize = function(){
     var ra = new Array();
     for(var i = 0; i < this.length; i ++){
         if(ra.indexOf(this[i])<0){
            ra.push(this[i]);
         }
     }
     return ra;
};

/**
* 求两个集合的补集
* @param {Array} a 全集S
* @param {Array} b 集合B
* @returns {Array} 两个集合的补集
*/
Array.complement = function(S, b){
     return Array.minus(S,Array.intersect(S, b));
};

/**
* 求两个集合的交集

     var a = [1,2,3,4];
     var b = [3,4,5,6];
     console.log(Array.intersect(a,b));
%}
* @param {Array} a 集合A
* @param {Array} b 集合B
* @returns {Array} 两个集合的交集
*/
Array.intersect = function(a, b){
     return a.uniquelize().each(function(o){return b.indexOf(o)>=0 ? o : null});
};
/** 
* 求两个集合的差集 
* @param {Array} a 集合A 
* @param {Array} b 集合B 
* @returns {Array} 两个集合的差集 
*/ 
Array.minus = function(a, b){
     return a.uniquelize().each(function(o){return b.indexOf(o)>=0 ? null : o});
};

/** 
* 求两个集合的并集 

* @param {Array} a 集合A 
* @param {Array} b 集合B 
* @returns {Array} 两个集合的并集 
*/
Array.union = function(a, b){
     return a.concat(b).uniquelize();
};
var utils = Utils = CHESS.Utils = {
    extend: kity.Utils.extend.bind(kity.Utils),

    listen: function(element, type, handler) {
        var types = utils.isArray(type) ? type : utils.trim(type).split(/\s+/),
            k = types.length;
        if (k)
            while (k--) {
                type = types[k];
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else {
                    if (!handler._d) {
                        handler._d = {
                            els: []
                        };
                    }
                    var key = type + handler.toString(),
                        index = utils.indexOf(handler._d.els, element);
                    if (!handler._d[key] || index == -1) {
                        if (index == -1) {
                            handler._d.els.push(element);
                        }
                        if (!handler._d[key]) {
                            handler._d[key] = function(evt) {
                                return handler.call(evt.srcElement, evt || window.event);
                            };
                        }
                        element.attachEvent('on' + type, handler._d[key]);
                    }
                }
            }
        element = null;
    },
    trim: function(str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },
    each: function(obj, iterator, context) {
        if (obj == null) return;
        if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, i, obj[i], obj) === false)
                    return false;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (iterator.call(context, key, obj[key], obj) === false)
                        return false;
                }
            }
        }
    },
    addCssRule: function(key, style, doc) {
        var head, node;
        if (style === undefined || style && style.nodeType && style.nodeType == 9) {
            //获取样式
            doc = style && style.nodeType && style.nodeType == 9 ? style : (doc || document);
            node = doc.getElementById(key);
            return node ? node.innerHTML : undefined;
        }
        doc = doc || document;
        node = doc.getElementById(key);

        //清除样式
        if (style === '') {
            if (node) {
                node.parentNode.removeChild(node);
                return true
            }
            return false;
        }

        //添加样式
        if (node) {
            node.innerHTML = style;
        } else {
            node = doc.createElement('style');
            node.id = key;
            node.innerHTML = style;
            doc.getElementsByTagName('head')[0].appendChild(node);
        }
    },
    keys: function(plain) {
        var keys = [];
        for (var key in plain) {
            if (plain.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    },
    proxy: function(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        };
    },
    indexOf: function(array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array, function(v, i) {
            if (i >= start && v === item) {
                index = i;
                return false;
            }
        });
        return index;
    },
    argsToArray: function(args, index) {
        return Array.prototype.slice.call(args, index || 0);
    },
    clonePlainObject: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (utils.isObject(tmp) || utils.isArray(tmp)) {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clonePlainObject(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    compareObject: function(source, target) {
        var tmp;
        if (this.isEmptyObject(source) !== this.isEmptyObject(target)) {
            return false
        }
        if (this.getObjectLength(source) != this.getObjectLength(target)) {
            return false;
        }
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                tmp = source[p];
                if (target[p] === undefined) {
                    return false;
                }
                if (this.isObject(tmp) || this.isArray(tmp)) {
                    if (this.isObject(target[p]) !== this.isObject(tmp)) {
                        return false;
                    }
                    if (this.isArray(tmp) !== this.isArray(target[p])) {
                        return false;
                    }
                    if (this.compareObject(tmp, target[p]) === false) {
                        return false
                    }
                } else {
                    if (tmp != target[p]) {
                        return false
                    }
                }
            }
        }
        return true;
    },
    getObjectLength: function(obj) {
        if (this.isArray(obj) || this.isString(obj)) return obj.length;
        var count = 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) count++;
        return count;
    },
    isEmptyObject: function(obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj)
            if (obj.hasOwnProperty(key)) return false;
        return true;
    },
    loadFile: function() {
        var tmpList = [];

        function getItem(doc, obj) {
            try {
                for (var i = 0, ci; ci = tmpList[i++];) {
                    if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                        return ci;
                    }
                }
            } catch (e) {
                return null;
            }

        }

        return function(doc, obj, fn) {
            var item = getItem(doc, obj);
            if (item) {
                if (item.ready) {
                    fn && fn();
                } else {
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc: doc,
                url: obj.src || obj.href,
                funs: [fn]
            });
            if (!doc.body) {
                var html = [];
                for (var p in obj) {
                    if (p == 'tag') continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc, obj);
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            //            element.onerror = function () {
            //                throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ')
            //            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    clone: function(source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    unhtml: function(str, reg) {
        return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
            if (b) {
                return a;
            } else {
                return {
                    '<': '&lt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    '>': '&gt;',
                    "'": '&#39;'
                }[a]
            }
        }) : '';
    },
    cloneArr:function(arr){
        return [].concat(arr);
    },
    clearWhitespace:function(str){
        return str.replace(/[\u200b\t\r\n]/g, '');
    },
    getValueByIndex:function(data,index){

        var initIndex = 0,result = 0;

        utils.each(data,function(i,arr){
            if(initIndex + arr.length >= index){

                if(index - initIndex == arr.length){
                    if(arr.length == 1 && arr[0].width === 0){
                        initIndex++;
                        return;
                    }
                    result = {
                        x: arr[arr.length - 1].x + arr[arr.length - 1].width,
                        y: arr[arr.length - 1].y
                    };
                }else{
                    result = arr[index - initIndex];
                }

                return false;
            }else{
                initIndex += arr.length + (arr.length == 1 && arr[0].width === 0 ? 0 : 1);
            }
        });
        return result;
    },
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                if(preNode.nodeType != preNode.nextSibling.nodeType ){
                    i++;
                }
                continue;
            }
            i++;
        }
        return i;
    },
    //二维数组克隆
    arr2Clone :function (arr){
        var newArr=[];
        for (var i=0; i<arr.length ; i++){  
            newArr[i] = arr[i].slice();
        }
        return newArr;
    }


};

Utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function(i, v) {
    CHESS.Utils['is' + v] = function(obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 *
 * 棋子枚举
 * 棋子价值
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */

CHESS['value']={
        //车价值
        c:[
            [206, 208, 207, 213, 214, 213, 207, 208, 206],
            [206, 212, 209, 216, 233, 216, 209, 212, 206],
            [206, 208, 207, 214, 216, 214, 207, 208, 206],
            [206, 213, 213, 216, 216, 216, 213, 213, 206],
            [208, 211, 211, 214, 215, 214, 211, 211, 208],
            
            [208, 212, 212, 214, 215, 214, 212, 212, 208],
            [204, 209, 204, 212, 214, 212, 204, 209, 204],
            [198, 208, 204, 212, 212, 212, 204, 208, 198],
            [200, 208, 206, 212, 200, 212, 206, 208, 200],
            [194, 206, 204, 212, 200, 212, 204, 206, 194]
        ],
        
        //马价值
        m:[
            [90, 90, 90, 96, 90, 96, 90, 90, 90],
            [90, 96,103, 97, 94, 97,103, 96, 90],
            [92, 98, 99,103, 99,103, 99, 98, 92],
            [93,108,100,107,100,107,100,108, 93],
            [90,100, 99,103,104,103, 99,100, 90],
            
            [90, 98,101,102,103,102,101, 98, 90],
            [92, 94, 98, 95, 98, 95, 98, 94, 92],
            [93, 92, 94, 95, 92, 95, 94, 92, 93],
            [85, 90, 92, 93, 78, 93, 92, 90, 85],
            [88, 85, 90, 88, 90, 88, 90, 85, 88]
        ],
        
        //相价值
        x:[
            [0, 0,20, 0, 0, 0,20, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0,23, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0,20, 0, 0, 0,20, 0, 0],
            
            [0, 0,20, 0, 0, 0,20, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [18,0, 0, 0,23, 0, 0, 0,18],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0,20, 0, 0, 0,20, 0, 0]
        ],
        
        //士价值
        s:[
            [0, 0, 0,20, 0,20, 0, 0, 0],
            [0, 0, 0, 0,23, 0, 0, 0, 0],
            [0, 0, 0,20, 0,20, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0,20, 0,20, 0, 0, 0],
            [0, 0, 0, 0,23, 0, 0, 0, 0], 
            [0, 0, 0,20, 0,20, 0, 0, 0]
        ],
        
        //将价值
        j:[
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
            [0, 0, 0, 8888, 8888, 8888, 0, 0, 0]
        ],
        
        //炮价值
        p:[
            
            [100, 100,  96, 91,  90, 91,  96, 100, 100],
            [ 98,  98,  96, 92,  89, 92,  96,  98,  98],
            [ 97,  97,  96, 91,  92, 91,  96,  97,  97],
            [ 96,  99,  99, 98, 100, 98,  99,  99,  96],
            [ 96,  96,  96, 96, 100, 96,  96,  96,  96], 
            
            [ 95,  96,  99, 96, 100, 96,  99,  96,  95],
            [ 96,  96,  96, 96,  96, 96,  96,  96,  96],
            [ 97,  96, 100, 99, 101, 99, 100,  96,  97],
            [ 96,  97,  98, 98,  98, 98,  98,  97,  96],
            [ 96,  96,  97, 99,  99, 99,  97,  96,  96]
        ],
        
        //卒价值
        z:[
            [ 9,  9,  9, 11, 13, 11,  9,  9,  9],
            [19, 24, 34, 42, 44, 42, 34, 24, 19],
            [19, 24, 32, 37, 37, 37, 32, 24, 19],
            [19, 23, 27, 29, 30, 29, 27, 23, 19],
            [14, 18, 20, 27, 29, 27, 20, 18, 14],
            
            [ 7,  0, 13,  0, 16,  0, 13,  0,  7],
            [ 7,  0,  7,  0, 15,  0,  7,  0,  7], 
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0]
        ]
    }

//黑子为红字价值位置的倒置
CHESS.value.C = utils.arr2Clone(CHESS.value.c).reverse();
CHESS.value.M = utils.arr2Clone(CHESS.value.m).reverse();
CHESS.value.X = CHESS.value.x;
CHESS.value.S = CHESS.value.s;
CHESS.value.J = CHESS.value.j;
CHESS.value.P = utils.arr2Clone(CHESS.value.p).reverse();
CHESS.value.Z = utils.arr2Clone(CHESS.value.z).reverse();

CHESS['PIECE'] = {
    //红子 中文/图片地址/阵营/权重
    'c':{text:"车", img:'r_c', my:'j0' ,bl:"c", value:CHESS.value.c},
    'm':{text:"马", img:'r_m', my:'j0' ,bl:"m", value:CHESS.value.m},
    'x':{text:"相", img:'r_x', my:'j0' ,bl:"x", value:CHESS.value.x},
    's':{text:"仕", img:'r_s', my:'j0' ,bl:"s", value:CHESS.value.s},
    'j':{text:"将", img:'r_j', my:'j0' ,bl:"j", value:CHESS.value.j},
    'p':{text:"炮", img:'r_p', my:'j0' ,bl:"p", value:CHESS.value.p},
    'z':{text:"兵", img:'r_z', my:'j0' ,bl:"z", value:CHESS.value.z},
    
    //蓝子
    'C':{text:"車", img:'b_c', my:'J0' ,bl:"c", value:CHESS.value.C},
    'M':{text:"馬", img:'b_m', my:'J0' ,bl:"m", value:CHESS.value.M},
    'X':{text:"象", img:'b_x', my:'J0' ,bl:"x", value:CHESS.value.X},
    'S':{text:"士", img:'b_s', my:'J0' ,bl:"s", value:CHESS.value.S},
    'J':{text:"帅", img:'b_j', my:'J0' ,bl:"j", value:CHESS.value.J},
    'P':{text:"炮", img:'b_p', my:'J0' ,bl:"p", value:CHESS.value.P},
    'Z':{text:"卒", img:'b_z', my:'J0' ,bl:"z", value:CHESS.value.Z}
}
// var _Piece = CHESS._Piece = kity.createClass('Piece',{
// 	isShow:function(){

// 	}
// });
var ChessBass = CHESS.ChessBass = kity.createClass('ChessBass', {
	constructor: function(option, name) {
		this.data = {};
		this.tmpData = {};
		this.setData(option);
		this.initContainers();

	},
	initContainers: function() {
		throw new Error('Not implement: ChessBass.initContainers()');
	},
	isShow: function() {
		return this.getData('isShow');
	},
	getData: function(name) {
		if (name === undefined) {
			return this.data;
		}
		return this.data[name];
	},
	setData: function(name, value) {
		if (name === undefined) {
			this.data = {};

		} else if (utils.isObject(name)) {
			utils.extend(this.data, name);
		} else {
			if (value === undefined) {
				this.data[name] = null;
				delete this.data[name];
			} else {
				this.data[name] = value;
			}
		}
		return this;
	},
	getRenderContainer: function() {
		return this.rc;
	},
	setTmpData: function(a, v) {
		var me = this;
		if (utils.isObject(a)) {
			utils.each(a, function(key, val) {
				me.setTmpData(key, val);
			});
		}
		if (v === undefined || v === null || v === '') {
			delete this.tmpData[a];
		} else {
			this.tmpData[a] = v;
		}
	},

	getTmpData: function(a) {
		if (a === undefined) {
			return this.tmpData;
		}
		return this.tmpData[a];
	}

})

/**
 * Chesspiece 棋子类
 */
var Chesspiece = CHESS.Chesspiece = kity.createClass('ChessPiece', {
	base: ChessBass,
	initContainers: function() {
		this.rc = new kity.Group().setId(CHESS.uuid('chess_piece'));
		this.rc.chessPiece = this;
	},
	getImg: function() {
		return this.getData('img');
	},
	/**
	 * 获取文本数据
	 * @return {String}
	 */
	getText: function(str2arr) {
		var text = this.getData('text') || '';

		if (str2arr) {
			text = text.split('\n');
		}

		return text;
	},
	ref: function(isShow) {
		this.data.x = this.data.defaultx
		this.data.y = this.data.defaulty
		this.data.isShow = !!isShow;
	}
});


//Dot 着点类
var ChessDot = CHESS.ChessDot = kity.createClass('ChessDot', {
	base: ChessBass,
	initContainers: function() {
		this.rc = new kity.Group().setId(CHESS.uuid('chess_Dot'));
		this.rc.chessDot = this;
	}
});

/**
 *
 * 初始化
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */
kity.extendClass(Chess, {
	_mans: {}, //棋子集合
	_chess_dots: {}, //着点集合
	_pace: [], //棋谱
	startGame: function(camp, map) {
		this._camp = camp || 'j0';
		if (map) {

		}
		this.refDots(); //重置可着点
		this.refChess(true); //重置棋子
		this.renderList();

		this.setStatus('normal', true);
		this.hidePieceFrame();
		return this;
	},
	//悔棋
	regret: function() {
		this.refChess(true);

		var __camp = {
			'1': 'j0',
			'-1': 'J0'
		};
		// __camp[this.getThisCamp()]
		var camp = 1;
		var pace = this._pace;
		pace.pop();
		if(this.getThisCamp() !='j0')
			pace.pop();

		for (var i = 0; i < pace.length; i++) {
			if(!/^\d+$/.test(pace[i])) continue;
			var p = pace[i].split("")
			var x = parseInt(p[0], 10);
			var y = parseInt(p[1], 10);
			var newX = parseInt(p[2], 10);
			var newY = parseInt(p[3], 10);
			var key = this._map[y][x];
			//try{

			var cMan = this._map[newY][newX];
			if (cMan)
				this._mans[this._map[newY][newX]].setData('isShow', false);
			this._mans[key].setData('x', newX);
			this._mans[key].setData('y', newY);
			this._map[newY][newX] = key;
			delete this._map[y][x];
			if (i == pace.length - 1) {
				this.renderPieceFrame({
					x: x,
					y: y,
					newx: newX,
					newy: newY
				}, __camp[camp+""]);
			}
			//} catch (e){
			//	com.show()
			//	z([key,p,pace,map])

			//	}
			camp = -camp;
		}
		this._camp = __camp[camp];
		this.renderList();
	},
	getThisCamp: function() {
		return this._camp;
	},
	toggleCamp: function() {
		if (this._camp === 'j0') {
			this._camp = 'J0';
		} else {
			this._camp = 'j0';
		}
	},
	//把坐标生成着法
	createMove : function (x,y,newX,newY){
		var h="";
		var man = this._mans[this._map[y][x]];
		h+= man.getText();
		if (man.getData('my')==='j0'){
			var mumTo=["一","二","三","四","五","六","七","八","九","十"];	
			newX=8-newX;
			h+= mumTo[8-x];
			if (newY > y) {
				h+= "退";
				if (man.getData('pater') == "m" || man.getData('pater') == "s" || man.getData('pater') == "x"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[newY - y -1];
				}
			}else if (newY < y) {
				h+= "进";
				if (man.getData('pater') == "m" || man.getData('pater') == "s" || man.getData('pater') == "x"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[y - newY -1];
				}
			}else {
				h+= "平";
				h+= mumTo[newX];
			}
		}else{
			var mumTo=["１","２","３","４","５","６","７","８","９","10"];
			h+= mumTo[x];
			if (newY > y) {
				h+= "进";
				if (man.getData('pater') == "M" || man.getData('pater') == "S" || man.getData('pater') == "X"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[newY - y-1];
				}
			}else if (newY < y) {
				h+= "退";
				if (man.getData('pater') == "M" || man.getData('pater') == "S" || man.getData('pater') == "X"){
					h+= mumTo[newX];
				}else {
					h+= mumTo[y - newY-1];
				}
			}else {
				h+= "平";
				h+= mumTo[newX];
			}
		}
	return h;
}
});
//


// Chess.registerInit(function() {
// 	var initMap = ;
//    this._initChess(initMap);
// });

Chess.registerInit(function() {
    this._initbylaw();
});

// 可走路径
kity.extendClass(Chess, {
	_initbylaw:function(){
		this._bylaw = {};
		var self = this;
		//车
		this._bylaw.c = function (x,y,map,my){
			var d=[];
			//左侧检索
			for (var i=x-1; i>= 0; i--){
				if (map[y][i]) {
					if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
					break
				}else{
					d.push([i,y])	
				}
			}
			//右侧检索
			for (var i=x+1; i <= 8; i++){
				if (map[y][i]) {
					if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
					break
				}else{
					d.push([i,y])	
				}
			}
			//上检索
			for (var i = y-1 ; i >= 0; i--){
				if (map[i][x]) {
					if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
					break
				}else{
					d.push([x,i])	
				}
			}
			//下检索
			for (var i = y+1 ; i<= 9; i++){
				if (map[i][x]) {
					if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
					break
				}else{
					d.push([x,i])	
				}
			}
			return d;
		}

		//马
		this._bylaw.m = function (x,y,map,my){
			var d=[];
				//1点
				if ( y-2>= 0 && x+1<= 8 && !self._map[y-1][x] &&(!self._mans[map[y-2][x+1]] || self._mans[map[y-2][x+1]].getData('my')!=my)) d.push([x+1,y-2]);
				//2点
				if ( y-1>= 0 && x+2<= 8 && !self._map[y][x+1] &&(!self._mans[map[y-1][x+2]] || self._mans[map[y-1][x+2]].getData('my')!=my)) d.push([x+2,y-1]);
				//4点
				if ( y+1<= 9 && x+2<= 8 && !self._map[y][x+1] &&(!self._mans[map[y+1][x+2]] || self._mans[map[y+1][x+2]].getData('my')!=my)) d.push([x+2,y+1]);
				//5点
				if ( y+2<= 9 && x+1<= 8 && !self._map[y+1][x] &&(!self._mans[map[y+2][x+1]] || self._mans[map[y+2][x+1]].getData('my')!=my)) d.push([x+1,y+2]);
				//7点
				if ( y+2<= 9 && x-1>= 0 && !self._map[y+1][x] &&(!self._mans[map[y+2][x-1]] || self._mans[map[y+2][x-1]].getData('my')!=my)) d.push([x-1,y+2]);
				//8点
				if ( y+1<= 9 && x-2>= 0 && !self._map[y][x-1] &&(!self._mans[map[y+1][x-2]] || self._mans[map[y+1][x-2]].getData('my')!=my)) d.push([x-2,y+1]);
				//10点
				if ( y-1>= 0 && x-2>= 0 && !self._map[y][x-1] &&(!self._mans[map[y-1][x-2]] || self._mans[map[y-1][x-2]].getData('my')!=my)) d.push([x-2,y-1]);
				//11点
				if ( y-2>= 0 && x-1>= 0 && !self._map[y-1][x] &&(!self._mans[map[y-2][x-1]] || self._mans[map[y-2][x-1]].getData('my')!=my)) d.push([x-1,y-2]);

			return d;
		}

		//相
		this._bylaw.x = function (x,y,map,my){
			var d=[];
			if (my==='j0'){ //红方
				//4点半
				if ( y+2<= 9 && x+2<= 8 && !self._map[y+1][x+1] && (!self._mans[map[y+2][x+2]] || self._mans[map[y+2][x+2]].getData('my')!=my)) d.push([x+2,y+2]);
				//7点半
				if ( y+2<= 9 && x-2>= 0 && !self._map[y+1][x-1] && (!self._mans[map[y+2][x-2]] || self._mans[map[y+2][x-2]].getData('my')!=my)) d.push([x-2,y+2]);
				//1点半
				if ( y-2>= 5 && x+2<= 8 && !self._map[y-1][x+1] && (!self._mans[map[y-2][x+2]] || self._mans[map[y-2][x+2]].getData('my')!=my)) d.push([x+2,y-2]);
				//10点半
				if ( y-2>= 5 && x-2>= 0 && !self._map[y-1][x-1] && (!self._mans[map[y-2][x-2]] || self._mans[map[y-2][x-2]].getData('my')!=my)) d.push([x-2,y-2]);
			}else{
				//4点半
				if ( y+2<= 4 && x+2<= 8 && !self._map[y+1][x+1] && (!self._mans[map[y+2][x+2]] || self._mans[map[y+2][x+2]].getData('my')!=my)) d.push([x+2,y+2]);
				//7点半
				if ( y+2<= 4 && x-2>= 0 && !self._map[y+1][x-1] && (!self._mans[map[y+2][x-2]] || self._mans[map[y+2][x-2]].getData('my')!=my)) d.push([x-2,y+2]);
				//1点半
				if ( y-2>= 0 && x+2<= 8 && !self._map[y-1][x+1] && (!self._mans[map[y-2][x+2]] || self._mans[map[y-2][x+2]].getData('my')!=my)) d.push([x+2,y-2]);
				//10点半
				if ( y-2>= 0 && x-2>= 0 && !self._map[y-1][x-1] && (!self._mans[map[y-2][x-2]] || self._mans[map[y-2][x-2]].getData('my')!=my)) d.push([x-2,y-2]);
			}
			return d;
		}

		//士
		this._bylaw.s = function (x,y,map,my){
			var d=[];
			if (my==='j0'){ //红方
				//4点半
				if ( y+1<= 9 && x+1<= 5 && (!self._mans[map[y+1][x+1]] || self._mans[map[y+1][x+1]].getData('my')!=my)) d.push([x+1,y+1]);
				//7点半
				if ( y+1<= 9 && x-1>= 3 && (!self._mans[map[y+1][x-1]] || self._mans[map[y+1][x-1]].getData('my')!=my)) d.push([x-1,y+1]);
				//1点半
				if ( y-1>= 7 && x+1<= 5 && (!self._mans[map[y-1][x+1]] || self._mans[map[y-1][x+1]].getData('my')!=my)) d.push([x+1,y-1]);
				//10点半
				if ( y-1>= 7 && x-1>= 3 && (!self._mans[map[y-1][x-1]] || self._mans[map[y-1][x-1]].getData('my')!=my)) d.push([x-1,y-1]);
			}else{
				//4点半
				if ( y+1<= 2 && x+1<= 5 && (!self._mans[map[y+1][x+1]] || self._mans[map[y+1][x+1]].getData('my')!=my)) d.push([x+1,y+1]);
				//7点半
				if ( y+1<= 2 && x-1>= 3 && (!self._mans[map[y+1][x-1]] || self._mans[map[y+1][x-1]].getData('my')!=my)) d.push([x-1,y+1]);
				//1点半
				if ( y-1>= 0 && x+1<= 5 && (!self._mans[map[y-1][x+1]] || self._mans[map[y-1][x+1]].getData('my')!=my)) d.push([x+1,y-1]);
				//10点半
				if ( y-1>= 0 && x-1>= 3 && (!self._mans[map[y-1][x-1]] || self._mans[map[y-1][x-1]].getData('my')!=my)) d.push([x-1,y-1]);
			}
			return d;
				
		}

		//将
		this._bylaw.j = function (x,y,map,my){
			var d=[];
			var isNull=(function (y1,y2){
				var y1=self._mans["j0"].getData('y');
				var x1=self._mans["J0"].getData('x');
				var y2=self._mans["J0"].getData('y');
				for (var i=y1-1; i>y2; i--){
					if (map[i][x1]) return false;
				}
				return true;
			})();
			
			if (my==='j0'){ //红方
				//下
				if ( y+1<= 9  && (!self._mans[map[y+1][x]] || self._mans[map[y+1][x]].getData('my')!=my)) d.push([x,y+1]);
				//上
				if ( y-1>= 7 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//老将对老将的情况
				if ( self._mans["j0"].getData('x') == self._mans["J0"].getData('x') &&isNull) d.push([self._mans["J0"].getData('x'),self._mans["J0"].getData('y')]);
				
			}else{
				//下
				if ( y+1<= 2  && (!self._mans[map[y+1][x]] || self._mans[map[y+1][x]].getData('my')!=my)) d.push([x,y+1]);
				//上
				if ( y-1>= 0 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//老将对老将的情况
				if ( self._mans["j0"].getData('x') == self._mans["J0"].getData('x') &&isNull) d.push([self._mans["j0"].getData('x'),self._mans["j0"].getData('y')]);
			}
			//右
			if ( x+1<= 5  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
			//左
			if ( x-1>= 3 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			return d;
		}

		//炮
		this._bylaw.p = function (x,y,map,my){
			var d=[];
			//左侧检索
			var n=0;
			for (var i=x-1; i>= 0; i--){
				if (map[y][i]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
						break	
					}
				}else{
					if(n==0) d.push([i,y])	
				}
			}
			//右侧检索
			var n=0;
			for (var i=x+1; i <= 8; i++){
				if (map[y][i]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[y][i]].getData('my')!=my) d.push([i,y]);
						break	
					}
				}else{
					if(n==0) d.push([i,y])	
				}
			}
			//上检索
			var n=0;
			for (var i = y-1 ; i >= 0; i--){
				if (map[i][x]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
						break	
					}
				}else{
					if(n==0) d.push([x,i])	
				}
			}
			//下检索
			var n=0;
			for (var i = y+1 ; i<= 9; i++){
				if (map[i][x]) {
					if (n==0){
						n++;
						continue;
					}else{
						if (self._mans[map[i][x]].getData('my')!=my) d.push([x,i]);
						break	
					}
				}else{
					if(n==0) d.push([x,i])	
				}
			}
			return d;
		}

		//卒
		this._bylaw.z = function (x,y,map,my){
			var d=[];
			if (my==='j0'){ //红方
				//上
				if ( y-1>= 0 && (!self._mans[map[y-1][x]] || self._mans[map[y-1][x]].getData('my')!=my)) d.push([x,y-1]);
				//右
				if ( x+1<= 8 && y<=4  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
				//左
				if ( x-1>= 0 && y<=4 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			}else{
				//下
				if ( y+1<= 9  && (!self._mans[map[y+1][x]] || self._mans[map[y+1][x]].getData('my')!=my)) d.push([x,y+1]);
				//右
				if ( x+1<= 8 && y>=6  && (!self._mans[map[y][x+1]] || self._mans[map[y][x+1]].getData('my')!=my)) d.push([x+1,y]);
				//左
				if ( x-1>= 0 && y>=6 && (!self._mans[map[y][x-1]] || self._mans[map[y][x-1]].getData('my')!=my))d.push([x-1,y]);
			}
			
			return d;
		}
	},

});


/**
 *
 * 提供选项支持
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */
kity.extendClass(Chess, {

    getOptions: function(key) {
        var val;
        if (key) {
            val = this.getPreferences(key);
            return val && val[key] || this._options[key];
        } else {
            val = this.getPreferences();
            return utils.extend(val, this._options, true);
        }
    },

    setDefaultOptions: function(key, val, cover) {
        var obj = {};
        if (Utils.isString(key)) {
            obj[key] = val;
        } else {
            obj = key;
        }
        utils.extend(this._options, obj, !cover);
    },

    setOptions: function(key, val) {
        this.setPreferences(key, val);
    }

});

Chess.registerInit(function(option) {
    // this.setDefaultOptions({
    //     width           :   stype.width,        //画布宽度
    //     height          :   stype.height,       //画布高度
    //     spaceX          :   stype.spaceX,       //着点X跨度
    //     spaceY          :   stype.spaceY,       //着点Y跨度
    //     pointStartX     :   stype.pointStartX,  //第一个着点X坐标;
    //     pointStartY     :   stype.pointStartY,  //第一个着点Y坐标;
    //     page            :   stype.page         //图片目录
    // });
});
var ChessEvent = kity.createClass('ChessEvent', {
    constructor: function(type, params, canstop) {
        params = params || {};
        if (params.getType && params.getType() == 'ShapeEvent') {
            this.kityEvent = params;
            this.originEvent = params.originEvent;
            this.getPosition = params.getPosition.bind(params);
        } else if (params.target && params.preventDefault) {
            this.originEvent = params;
        } else {
            kity.Utils.extend(this, params);
        }
        this.type = type;
        this._canstop = canstop || false;
    },

    getTargetNode: function() {
        var findShape = this.kityEvent && this.kityEvent.targetShape;
        if (!findShape) return null;
        while (!findShape.chessPiece && findShape.container) {
            findShape = findShape.container;
        }
        var node = findShape.chessPiece;
        if (node && findShape.getOpacity() < 1) return null;
        return node || null;
    },
    getTargetDot:function(){
        var findShape = this.kityEvent && this.kityEvent.targetShape;
        if (!findShape) return null;
        while (!findShape.chessDot && findShape.container) {
            findShape = findShape.container;
        }
        var node = findShape.chessDot;
        if (node && findShape.getOpacity() < 1) return null;
        return node || null;
    },
    stopPropagation: function() {
        this._stoped = true;
    },

    stopPropagationImmediately: function() {
        this._immediatelyStoped = true;
        this._stoped = true;
    },

    shouldStopPropagation: function() {
        return this._canstop && this._stoped;
    },

    shouldStopPropagationImmediately: function() {
        return this._canstop && this._immediatelyStoped;
    },
    preventDefault: function() {
        this.originEvent.preventDefault();
    },
    isRightMB: function() {
        var isRightMB = false;
        if (!this.originEvent) {
            return false;
        }
        if ("which" in this.originEvent)
            isRightMB = this.originEvent.which == 3;
        else if ("button" in this.originEvent)
            isRightMB = this.originEvent.button == 2;
        return isRightMB;
    },
    getKeyCode: function(){
        var evt = this.originEvent;
        return evt.keyCode || evt.which;
    }
});

Chess.registerInit(function() {
    this._initEvents();
});

// 事件机制
kity.extendClass(Chess, {
    _initEvents: function() {
        this._eventCallbacks = {};
    },
    _bindEvents: function() {
        this._bindPaperEvents();
        this._bindKeyboardEvents();
    },
    _resetEvents: function() {
        this._initEvents();
        this._bindEvents();
    },
    // TODO: mousemove lazy bind
    _bindPaperEvents: function() {
        this._paper.on('click dblclick mousedown contextmenu mouseup mousemove mouseover mousewheel DOMMouseScroll touchstart touchmove touchend dragenter dragleave drop', this._firePharse.bind(this));
        if (window) {
            window.addEventListener('resize', this._firePharse.bind(this));
            window.addEventListener('blur', this._firePharse.bind(this));
        }
    },
    _bindKeyboardEvents: function() {
        if ((navigator.userAgent.indexOf('iPhone') == -1) && (navigator.userAgent.indexOf('iPod') == -1) && (navigator.userAgent.indexOf('iPad') == -1)) {
            //只能在这里做，要不无法触发
            Utils.listen(document.body, 'keydown keyup keypress paste', this._firePharse.bind(this));
        }
    },
    _firePharse: function(e) {
        //        //只读模式下强了所有的事件操作
        //        if(this.readOnly === true){
        //            return false;
        //        }
        var beforeEvent, preEvent, executeEvent;

        if (e.type == 'DOMMouseScroll') {
            e.type = 'mousewheel';
            e.wheelDelta = e.originEvent.wheelDelta = e.originEvent.detail * -10;
            e.wheelDeltaX = e.originEvent.mozMovementX;
            e.wheelDeltaY = e.originEvent.mozMovementY;
        }

        beforeEvent = new ChessEvent('before' + e.type, e, true);
        if (this._fire(beforeEvent)) {
            return;
        }
        preEvent = new ChessEvent('pre' + e.type, e, true);
        executeEvent = new ChessEvent(e.type, e, true);

        if (this._fire(preEvent) ||
            this._fire(executeEvent))
            this._fire(new ChessEvent('after' + e.type, e, false));
    },
    _interactChange: function(e) {
        var me = this;
        if (me._interactScheduled) return;
        setTimeout(function() {
            me._fire(new ChessEvent('interactchange'));
            me._interactScheduled = false;
        }, 100);
        me._interactScheduled = true;
    },
    _listen: function(type, callback) {
        var callbacks = this._eventCallbacks[type] || (this._eventCallbacks[type] = []);
        callbacks.push(callback);
    },
    _fire: function(e) {
       
        var status = this.getStatus();
        // console.log(status);
        var callbacks = this._eventCallbacks[e.type.toLowerCase()] || [];
        
        if (status) {
            callbacks = callbacks.concat(this._eventCallbacks[status + '.' + e.type.toLowerCase()] || []);
        }
        // console.log(status + '.' + e.type.toLowerCase())
//        if(e.type.indexOf('saveScene')>=0){//statuschange interactchange
//            console.log(e.type);
//        }
        if (callbacks.length === 0) {
            return;
        }
        
        var lastStatus = this.getStatus();

        for (var i = 0; i < callbacks.length; i++) {

            callbacks[i].call(this, e);

            /* this.getStatus() != lastStatus ||*/
            if (e.shouldStopPropagationImmediately()) {
                break;
            }
        }
        return e.shouldStopPropagation();
    },
    on: function(name, callback) {
        var km = this;
        utils.each(name.split(/\s+/), function(i, n) {
            km._listen(n.toLowerCase(), callback);
        });
        return this;
    },
    off: function(name, callback) {

        var types = name.split(/\s+/);
        var i, j, callbacks, removeIndex;
        for (i = 0; i < types.length; i++) {

            callbacks = this._eventCallbacks[types[i].toLowerCase()];
            if (callbacks) {
                removeIndex = null;
                for (j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] == callback) {
                        removeIndex = j;
                    }
                }
                if (removeIndex !== null) {
                    callbacks.splice(removeIndex, 1);
                }
            }
        }
    },
    fire: function(type, params) {
        var e = new ChessEvent(type, params);
        this._fire(e);
        return this;
    }
});
/**
 *
 * UI 注册及加载机制
 *
 * @author: jjjjyx
 * @copyright: jjjjyx 2016
 */

Chess.registerInit(function() {
    this._initStatus();
});

kity.extendClass(Chess, {

    _initStatus: function() {
        this._status = 'normal';
        this._rollbackStatus = 'normal';
    },

    setStatus: (function() {
        var sf = ~window.location.href.indexOf('status');
        var tf = ~window.location.href.indexOf('trace');

        // 在 readonly 模式下，只有 force 为 true 才能切换回来
        return function(status, force) {
            if (this._status == 'readonly' && !force) return this;
            if (status != this._status) {
                this._rollbackStatus = this._status;
                this._status = status;
                this.fire('statuschange', {
                    lastStatus: this._rollbackStatus,
                    currentStatus: this._status
                });
                if (sf) {
                    console.log(window.event.type, this._rollbackStatus, '->', this._status);
                    if (tf) {
                        console.trace();
                    }
                }
            }
            return this;
        };
    })(),

    rollbackStatus: function() {
        this.setStatus(this._rollbackStatus);
    },
    getRollbackStatus:function(){
        return this._rollbackStatus;
    },
    getStatus: function() {
        return this._status;
    }
});
/**
 * @fileOverview
 *
 * 初始化渲染容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
Chess.registerInit(function() {
    this._initPaper();
    // this._initPieceFrame();
});
kity.extendClass(Chess, {
    
    _initPaper: function() {

        this._paper = new kity.Paper();
        this._paper.getNode().setAttribute('contenteditable', true);
        this._paper.getNode().ondragstart = function(e) {
            e.preventDefault();
        };
        this._paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');

        this._addRenderContainer();
        var defaultmap = this._defaultmap = [
                ['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                [    ,'P0',    ,    ,    ,    ,    ,'P1',    ,],
                ['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                ['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
                [    ,'p0',    ,    ,    ,    ,    ,'p1',    ,],
                [    ,    ,    ,    ,    ,    ,    ,    ,    ,],
                ['c0','m0','x0','s0','j0','s1','x1','m1','c1']
            ];
        this._initChess(utils.arr2Clone(defaultmap));

        if (this._options.renderTo) {
            this.renderTo(this._options.renderTo);
        }
    },
    _initChess:function(map){
        //初始化时 先删除原有的东西
        this._map = map;
        for (var i = 0; i < 10; i++) {
            for (var n = 0; n < 9; n++) {
                var key = map[i][n];
                if (key) {
                    this._mans[key] = new Chesspiece(utils.extend({}, {
                        x: n,
                        y: i,
                        key: key,
                        defaultx:n,
                        defaulty:i,
                        isShow: false,
                        alpha: 1,
                        pater: key.slice(0, 1),
                        imageSize: {
                            width: 60,
                            height: 60
                        }
                    }, CHESS.PIECE[key.slice(0, 1)]));

                    this._rc.addShape(this._mans[key].getRenderContainer());

                }
                var ddd =  new ChessDot({
                    x: n,
                    y: i,
                    isShow: false,
                    imageSize: {
                        width: 30,
                        height: 30
                    }
                });
                this._chess_dots[n + "_" + i]  = ddd;
                this._dotG.addShape(ddd.getRenderContainer());
            }
        }
    },
    refDots:function(){
        for(var aa in this._chess_dots)
            if(this._chess_dots[aa] instanceof ChessBass)
                this._chess_dots[aa].setData('isShow',false);
    },
    refChess:function(ref){
        this._map =utils.arr2Clone(this._defaultmap);
        for(var piece in this._mans){
            if(this._mans[piece] instanceof Chesspiece){
                this._mans[piece].ref(ref);
            }
        }
    },
    getMans: function() {
        return this._mans;
    },
    _addRenderContainer: function() {
        this._rc = new kity.Group().setId('chess');
        this._dotG = new kity.Group().setId('dot');
        this._pframe = new kity.Group().setId('pframe');
        
        this._paper.addShape(this._pframe);
        this._paper.addShape(this._rc);
        this._paper.addShape(this._dotG);
        
    },

    renderTo: function(target) {
        this._paper.renderTo(this._renderTarget = target);
        this._bindEvents();
    },

    getRenderContainer: function() {
        return this._rc;
    },

    getPaper: function() {
        return this._paper;
    },

    getRenderTarget: function() {
        return this._renderTarget;
    },
});
Chess.registerInit(function() {
    this._initSelection();
});

// 选区管理
kity.extendClass(Chess, {
    _initSelection: function() {
        this._selectedPiece = null;
        this._lastPiect = null;
    },
    renderChangedSelection: function() {
        this._selectedPiece.setData('alpha', 0.6);
        // current.setData('ps',this.getPieceBylaw())
        this._selectedPiece.setTmpData('selected', true);

        this._lastPiect && this._lastPiect.setTmpData('selected', false);
        this._lastPiect && this._lastPiect.setData('alpha', 1);
        // console.log(this._map);
        this._ps = this._bylaw[this._selectedPiece.getData('bl')](this._selectedPiece.getData('x'), this._selectedPiece.getData('y'), this._map, this._selectedPiece.getData('my'));
        this._interactChange();
        this.fire('selectionchange');

    },
    getSelectedPiece: function() {
        return this._selectedPiece || null;
    },
    // removeAllSelectedNodes: function() {
    //     var me = this;
    //     var last = this._selectedNodes.splice(0);
    //     this._selectedNodes = [];
    //     last&&this.renderChangedSelection(last);
    //     return this.fire('selectionclear');
    // },
    removeSelectedPiece: function() {
        this._lastPiect = this._selectedPiece
        this._selectedPiece.setTmpData('selected', false);
        this._selectedPiece.setData('alpha', 1);
        this._selectedPiece = null;
    },
    select: function(piece) {
        this._lastPiect = this._selectedPiece;
        this._selectedPiece = piece;
        this.renderChangedSelection();

        return this;
    },
    movePiece: function(dot, eat) {
        var piece = this.getSelectedPiece();
        var self = this;

        // this._map
        if (piece) {
            //记录步数
            var pace = piece.getData('x') + "" + piece.getData('y');
            var move = {
                x:piece.getData('x'),
                y:piece.getData('y'),
                newx:dot.getData('x'),
                newy:dot.getData('y')
            };
            var thelaw = this.createMove(move.x,move.y,move.newx,move.newy);
            //删除子
            delete this._map[piece.getData('y')][piece.getData('x')];
            var key = this._map[dot.getData('y')][dot.getData('x')];
            //移动子
            this._map[dot.getData('y')][dot.getData('x')] = piece.getData('key');
             
            
            //显示移动外框
            this.renderPieceFrame(move,this.getThisCamp());
            piece.setData('x', dot.getData('x'));
            piece.setData('y', dot.getData('y'));

            //取消选择
            this.removeSelectedPiece();
            //恢复可着点
            this.refDots();
            this._pace.push(pace + dot.getData('x') + dot.getData('y'))

            
            //吃掉棋子
            var eatpiece = eat || (key && this._mans[key]);
            if (eatpiece) {
                eatpiece.setData('isShow', false);
                this.fire('eatpiece',{
                    key:key
                })
            }
            this.fire('movepiece', {
                pace: pace + dot.getData('x') + dot.getData('y'),
                move :thelaw
            });
        }
    },
    clickThisPiece: function() {
        return this._selectedPiece.getData('key') != this._lastPiect.getData('key');
    },
    pieceIndexOfChessDots: function(piece) {
        var d = this._chess_dots[piece.getData('x') + '_' + piece.getData('y')]
        return d && d.isShow();
    }

});

kity.extendClass(Chesspiece, {
    isSelected: function() {
        return this.getTmpData('selected');
    },
    clearSelectedFlag: function() {
        this.setTmpData('selected');
    },
    setSelectedFlag: function() {
        this.setTmpData('selected', true);
    }
});
//模块注册&暴露模块接口
( function () {
    var _modules;
    CHESS.registerModule = function ( name, module ) {
        //初始化模块列表
        if ( !_modules ) {
            _modules = {};
        }
        _modules[ name ] = module;
    };
    CHESS.getModules = function () {
        return _modules;
    };
} )();

Chess.registerInit(function() {
    this._initModules();
});

// 模块声明周期维护
kity.extendClass(Chess, {
    _initModules: function() {
        var modulesPool = CHESS.getModules();
        var modulesToLoad = this._options.modules || Utils.keys(modulesPool);
        this._commands = {};
        this._query = {};
        this._modules = {};
        this._rendererClasses = {};

        var i, name, type, module, moduleDeals,
            dealCommands, dealEvents, dealRenderers;
        var me = this;
        for (i = 0; i < modulesToLoad.length; i++) {
            name = modulesToLoad[i];

            if (!modulesPool[name]) continue;

            // 执行模块初始化，抛出后续处理对象
            if (typeof(modulesPool[name]) == 'function') {
                moduleDeals = modulesPool[name].call(me);
            } else {
                moduleDeals = modulesPool[name];
            }
            this._modules[name] = moduleDeals;
    
            if (!moduleDeals) continue;

            if (moduleDeals.init) {
                moduleDeals.init.call(me, this._options);
            }
            
            // command加入命令池子
            dealCommands = moduleDeals.commands;
            for (name in dealCommands) {
                this._commands[name.toLowerCase()] = new dealCommands[name]();
            }

            // 绑定事件
            dealEvents = moduleDeals.events;
            if (dealEvents) {
                for (type in dealEvents) {
                    me.on(type, dealEvents[type]);
                }
            }

            // 渲染器

            dealRenderers = moduleDeals.renderers;
            
            if (dealRenderers) {
                
                for (type in dealRenderers) {

                    this._rendererClasses[type] = this._rendererClasses[type] || [];
                    //console.log(dealRenderers[type])
                    if (Utils.isArray(dealRenderers[type])) {
                        this._rendererClasses[type] = this._rendererClasses[type].concat(dealRenderers[type]);
                    } else {
                        this._rendererClasses[type].push(dealRenderers[type]);
                    }
                }

            }

            if (moduleDeals.defaultOptions) {
                this.setDefaultOptions(moduleDeals.defaultOptions);
            }

//             //添加模块的快捷键
            
//             if (moduleDeals.commandShortcutKeys) {
// //                console.log(moduleDeals.commandShortcutKeys);
//                 this.addCommandShortcutKeys(moduleDeals.commandShortcutKeys);
//             }
//             //console.log(moduleDeals.contextmenu);
//             //添加右键菜单
//             if (moduleDeals.contextmenu) {
//                 this.addContextMenu(moduleDeals.contextmenu);
//             }
        }
    },

    _garbage: function() {
        // this.clearSelect();

        // while (this._root.getChildren().length) {
        //     this._root.removeChild(0);
        // }
    },

    destroy: function() {
        var modules = this._modules;

        this._resetEvents();
        this._garbage();

        for (var key in modules) {
            if (!modules[key].destroy) continue;
            modules[key].destroy.call(this);
        }
    },

    reset: function() {
        var modules = this._modules;

        this._garbage();

        for (var key in modules) {
            if (!modules[key].reset) continue;
            modules[key].reset.call(this);
        }
    }
});
/**
 *
 * 初始化布局
 *
 * @author: jjjjyx
 * @copyright: jjjjyx, 2014
 */

Chess.registerInit(function(options) {
    this.layout();
});

kity.extendClass(Chess,{
    layout:function(){
        //this.layout(duration).fire('contentchange')._interactChange();
        return this;
    }
});
var cssLikeValueMatcher = {
    left: function(value) {
        return 3 in value && value[3] ||
            1 in value && value[1] ||
            value[0];
    },
    right: function(value) {
        return 1 in value && value[1] || value[0];
    },
    top: function(value) {
        return value[0];
    },
    bottom: function(value) {
        return 2 in value && value[2] || value[0];
    }
};

Utils.extend(CHESS, {
    _themes: {},

    /**
     * 注册一个主题
     *
     * @param  {String} name  主题的名称
     * @param  {Plain} theme 主题的样式描述
     *
     * @example
     *     CHESS.registerTheme('default', {
     *         'root-color': 'red',
     *         'root-stroke': 'none',
     *         'root-padding': [10, 20]
     *     });
     */
    registerTheme: function(name, theme) {
        CHESS._themes[name] = theme;
    },

    getThemeList: function() {
        return CHESS._themes;
    }
});

kity.extendClass(Chess, {

    /**
     * 切换主题
     * @param  {String} name 要使用的主题的名称
     */
    useTheme: function(name) {

        this.setTheme(name);
        // this.refresh(800);

        return true;
    },

    setTheme: function(name) {
        this._theme = name || null;
        // this.getRenderTarget().style.background = ;
        this.fire('themechange', {
            theme: name
        });
    },

    /**
     * 获取当前主题
     * @return {[type]} [description]
     */
    getTheme: function(node) {
        return this._theme || this.getOptions('defaultTheme');
    },

    getThemeItems: function(node) {
        var theme = this.getTheme(node);
        return CHESS._themes[this.getTheme(node)];
    },

    /**
     * 获得的样式
     * @param  {String} item 样式名称
     */
    getStyle: function(item) {
        return this.getThemeItems()[item];
    },
});

// kity.extendClass(MinderNode, {
//     getStyle: function(name) {
//         return this.getMinder().getNodeStyle(this, name);
//     }
// });

// CHESS.registerModule('Theme', {
//     defaultOptions: {
//         defaultTheme: 'default'
//     },
//     commands: {
//         'theme': kity.createClass('ThemeCommand', {
//             base: Command,

//             execute: function(km, name) {
//                 return km.useTheme(name);
//             },

//             queryValue: function(km) {
//                 return km.getTheme() || 'default';
//             }
//         })
//     }
// });

Chess.registerInit(function() {
    this.setTheme('stype1');
});
var Renderer = CHESS.Renderer = kity.createClass('Renderer', {
    constructor: function(node) {
        this.node = node;
    },

    create: function(node) {
        throw new Error('Not implement: Renderer.create()');
    },

    shouldRender: function(node) {
        return node.isShow();
    },

    watchChange: function(data) {
        var changed;

        if (this.watchingData === undefined) {
            changed = true;
        } else if (this.watchingData != data) {
            changed = true;
        } else {
            changed = false;
        }

        this.watchingData = data;
    },

    shouldDraw: function(node) {
        return true;
    },

    update: function(shape, node, box) {
        if (this.shouldDraw()) this.draw(shape, node);
        return this.place(shape, node, box);
    },

    draw: function(shape, node) {
        throw new Error('Not implement: Renderer.draw()');
    },

    place: function(shape, node, box) {
        throw new Error('Not implement: Renderer.place()');
    },

    getRenderShape: function() {
        return this._renderShape || null;
    },

    setRenderShape: function(shape) {
        this._renderShape = shape;
    }
});
Chess.registerInit(function() {
    this.renderList();
});
kity.extendClass(Chess, function() {
    var chess = this;

    function createRendererForPiece(piece, registered) {
        var renderers = [];
        var o_name = piece.__KityClassName;
        ['Piece', 'Dot'].forEach(function(section) {
            if (o_name ==='Chess'+section) {
                renderers = renderers.concat(registered[section]);
            }
        });
        piece._renderers = renderers.map(function(Renderer) {
            return new Renderer(piece);
        });
    }

    return {
        render: function(piece) {
            var rendererClasses = this._rendererClasses;
            var i, latestBox, renderer;
            if (!piece._renderers) {
                createRendererForPiece(piece, rendererClasses);
            }
            piece._contentBox = new kity.Box();
            
            piece._renderers.forEach(function(renderer) {

                if (renderer.shouldRender(piece)) {
                    // 应该渲染，但是渲染图形没创建过，需要创建
                    if (!renderer.getRenderShape()) {
                        renderer.setRenderShape(renderer.create(piece));
                        if (renderer.bringToBack) {
                            piece.getRenderContainer().prependShape(renderer.getRenderShape());
                        } else {
                            piece.getRenderContainer().appendShape(renderer.getRenderShape());
                        }
                    }
                    // 强制让渲染图形显示
                    renderer.getRenderShape().setVisible(true);
                    // 更新渲染图形
                    latestBox = renderer.update(renderer.getRenderShape(), piece, piece._contentBox);
                    if (typeof(latestBox) == 'function') latestBox = latestBox();

                    // 合并渲染区域
                    if (latestBox) {
                        piece._contentBox = piece._contentBox.merge(latestBox);
                        renderer.contentBox = latestBox;
                    }


                } else if (renderer.getRenderShape()) {
                    renderer.getRenderShape().setVisible(false);
                }
            });
            this.fire('piecerender', {
                piece: piece
            });
        },
        renderList: function() {
            var self = this;
            var name ;
            for(var name in this._mans){
                if((this._mans[name] instanceof ChessBass)){
                    self.render(this._mans[name]);
                }
            }
            for(var name in this._chess_dots){
                if((this._chess_dots[name] instanceof ChessBass)){
                    self.render(this._chess_dots[name]);
                }
            }
        },
        hidePieceFrame:function(){
            var f = this._getPieceFrame(this.getThisCamp());
            f.oldf.setVisible(false);
            f.newf.setVisible(false);
        },
        renderPieceFrame: function(obj,my) {
            var img = my =='j0' ? "r":"b";
            var f = this._getPieceFrame(my),
            //chess.getStyle('spaceX')*node.getData('x')+chess.getStyle('pointStartX');
                x1 = this.getStyle('spaceX') * obj.x + this.getStyle('pointStartX') ,
                y1 = this.getStyle('spaceY') *  obj.y + this.getStyle('pointStartY'),
                x2 = this.getStyle('spaceX') * obj.newx + this.getStyle('pointStartX'),
                y2 = this.getStyle('spaceY') * obj.newy + this.getStyle('pointStartY'),
                size ={width:60,height:60};
            f.oldf
                .setUrl('ui/theme/default/img/'+img+'_box.png')
                .setX(x1||0)
                .setY(y1||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setVisible(true);
            f.newf
                .setUrl('ui/theme/default/img/'+img+'_box.png')
                .setX(x2||0)
                .setY(y2||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setVisible(true);

        },
        _getPieceFrame:function(my){
            var img = my =='j0' ? "r":"b";
            var self = this;
            function newImg(){
                var obj = new kity.Image('ui/theme/default/img/'+img+'_box.png').setId('oldf');
                self._pframe.addShape(obj)
                return obj;
            }
            return {
                oldf : this._pframe.getShape(0)||newImg(),
                newf : this._pframe.getShape(1)||newImg()
            }
            
        }
    }
}());



CHESS.registerModule('peiceText', function() {
	var chess = this;
	var PeiceRenderer = kity.createClass('PeiceRenderer', {
		base: CHESS.Renderer,
		create: function(node) {
            return new kity.Image("ui/theme/default/img/"+node.getData('img')+".png");
        },

        update: function(image, node, box) {
            var url = "ui/theme/default/img/"+node.getData('img')+".png";
            var title = node.getData('text');
            var size = node.getData('imageSize');
            if (!size) return;

            if (title) {
                image.node.setAttributeNS('http://www.w3.org/1999/xlink', 'title', title);
            }

            var x = chess.getStyle('spaceX')*node.getData('x')+chess.getStyle('pointStartX');
            var y = chess.getStyle('spaceY')*node.getData('y')+chess.getStyle('pointStartY');
            var opacity= node.getData('alpha');
            image
                .setUrl(url)
                .setX(x||0)
                .setY(y||0)
                .setWidth(size.width | 0)
                .setHeight(size.height | 0)
                .setAttr('opacity',opacity);


            return new kity.Box(x | 0, y | 0, size.width | 0, size.height | 0);
        }
	});
	return {
		renderers:{'Piece':PeiceRenderer}
	}
});
/**
 * 棋子着点
 */
 CHESS.registerModule('Dot', function() {
	var chess = this;
    var DotRenderer = kity.createClass('DotRenderer', {
                base: CHESS.Renderer,
                create: function() {
                    return new kity.Image("ui/theme/default/img/dot.png");
                },

                update: function(image, node) {
                    var url = "ui/theme/default/img/dot.png";
                    var size = node.getData('imageSize');
                    //             spaceX: 65, //着点X跨度
                    //             spaceY: 67, //着点Y跨度
                    //             pointStartX: 33, //第一个着点X坐标;
                    //             pointStartY: 51, //第一个着点Y坐标;
                    var x = 65 * node.getData('x') + 26;
                    var y = 67 * node.getData('y') + 43;
                    image
                        .setUrl(url)
                        .setX(x || 0)
                        .setY(y || 0)
                        .setWidth(size.width)
                        .setHeight(size.height);


                    return new kity.Box(30, 30, 60, 60);
                }
            });
	
	return {
		renderers:{'Dot':DotRenderer}
	}
});


CHESS.registerModule('Select', function() {
	var chess = this;

	return {
		'init': function() {
            // window.addEventListener('mouseup', function() {
            //     marqueeActivator.selectEnd();
            // });
        },
		events:{
			//只能点点击 自己的棋子
			'normal.click':function(e){
				var clickNode =  e.getTargetNode();
				//点了自己的棋子并且该棋子没有被渲染
				if(clickNode && clickNode.getData('my') ==this.getThisCamp()&&!clickNode.isSelected()){
					this.select(clickNode, true);
					//将状态设置为 选择着点
					this.setStatus('selectdot');
				}
			},
			'normal.click selectpiece.click':function(e){
				// //this.setStatus('selectpiece');
				// var clickNode =  e.getTargetNode();
				// var clickDot = e.getTargetDot();
				// console.log(clickDot)
				// //点击了棋子
				// if (clickNode&&!clickNode.isSelected()){
					
				// }else 
				// //点击了着点
				// if(clickDot){
				// 	//console.log(clickDot)
				// }
				
			},
			'selectdot.click':function(e){
				var clickNode =  e.getTargetNode();
				var clickDot = e.getTargetDot();
				if(clickDot){
					//将棋子移动
					this.movePiece(clickDot);
				}else 
				//点了自己的棋子并且该棋子没有被渲染
				if(clickNode){
					if(clickNode.getData('my') ==this.getThisCamp()&&!clickNode.isSelected())
						this.select(clickNode, true);
 					else
 					//吃子 //点中自己
 					if (clickNode.getData('my') != this.getThisCamp()&&this.pieceIndexOfChessDots(clickNode)) {
 						this.movePiece(clickNode,clickNode);
 					}
				}
			},
			'movepiece':function(e){
				console.log(this._pace);
				//console.log(this.createMove(e.move.x,e.move.y,e.move.newx,e.move.newy));
				console.log(e.move);
				this.renderList();
				this.toggleCamp();
				this.setStatus('normal');
			},
			'selectionchange':function(){
				this.refDots();
				for(var j =0,c =this._ps.length;j<c ;j++ ){
					var arr = this._ps[j];
					var  obj = this._chess_dots[arr[0]+"_"+arr[1]]
					if(obj instanceof ChessBass)
						obj.setData('isShow',true)
				}
				this.renderList()
			},
			'eatpiece':function(e){
				if(e.key =='j0'||e.key=='J0'){
					this.setStatus('readonly');
					this.fire('gameOver',{
						lose:e.key
					});
				}
			}
		}
	}
});
CHESS.registerTheme('stype1',{
	width:600,		//画布宽度
	height:726, 	//画布高度
	peicewidth:60,
	peiceheight:60,
	spaceX:65,		//着点X跨度
	spaceY:67,		//着点Y跨度
	pointStartX:12,	//第一个着点X坐标;
	pointStartY:30,	//第一个着点Y坐标;
	page:"stype_1"	//图片目录
});
/**
 *
 * UI 注册及加载机制
 *
 * @author: jjjjyx
 * @copyright: jjjjyx 2016
 */

(function() {
    var uiQueue = [];

    /* 注册一个新的 UI 交互 */
    CHESS.registerUI = function(id, deps, ui) {
        if (typeof(deps) == 'function') {
            ui = deps;
            deps = null;
        }
        uiQueue.push({
            id: id,
            ui: ui,
            deps: deps
        });
    };

    kity.extendClass(Chess, {
        /* 为实例注册 UI 交互 */
        initUI: function() {
            var ui = this._ui = {};
            var chess = this;

            uiQueue.forEach(function(uiDeal) {
                var deps = uiDeal.deps;
                if (deps) deps = deps.map(function(dep) {
                    return chess.getUI(dep);
                });
                ui[uiDeal.id] = uiDeal.ui.apply(null, [chess].concat(deps || []));
            });

            // 阻止非象棋事件冒泡
            $('#content-wrapper').delegate('#panel, #tab-container, .fui-dialog, #main-menu, .sweet-alert', 'keydown keyup', function(e) {
                e.stopPropagation();
            });

            // 阻止非象棋事件冒泡
            $('#content-wrapper').delegate('input', 'mousedown mousemove mouseup contextmenu', function(e) {
                e.stopPropagation();
            });

            chess.getPaper().addClass('loading-target');

            this.fire('interactchange');
            this.fire('uiready');
        },

        /* 获得实例的 UI 实例 */
        getUI: function(id) {
            return this._ui[id];
        }
    });

    $.ajaxSetup({ cache: false });
    $.extend($, {
        pajax: function() {
            var jqXHR = $.ajax.apply($, arguments);
            return new Promise(function(resolve, reject) {
                jqXHR.done(resolve);
                jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
                    var e = new Error(textStatus);
                    e.getDetail = function() {
                        try {
                            return 'jQuery XHR Error: \n' + JSON.stringify(errorThrown);
                        } catch (e) {
                            return errorThrown;
                        }
                    };
                    reject(e);
                });
            });
        }
    });

    // preload css images
    // $(function() {
    //     var list = ["kmcat_warn.png", "kmcat_sad.png", "icons.png", "template_large.png", "history.png", "feedback.png", "iconpriority.png", "iconprogress.png", "template.png", "layout.png", "next-level.png", "prev-level.png"];
    //     list.forEach(function(item) {
    //         (new Image()).src = 'ui/theme/default/images/' + item;
    //     });
    // });

})();
/**
 *
 * UI 注册及加载机制
 *
 * @author: jjjjyx
 * @copyright: jjjjyx 2016
 */

CHESS.registerUI('eve', function(chess) {
    return {
        setup: function(obj) {
            var callbacks = {};
            
            obj.on = function on(name, callback) {
                var list = callbacks[name] || (callbacks[name] = []);
                list.push(callback);
                return this;
            };
            
            obj.off = function off(name, callback) {
                var list = callbacks[name];
                if (list) {
                    var index = list.indexOf(callback);
                    if (~index) {
                        list.splice(index, 1);
                    } else {
                        callback[name] = null;
                    }
                }
                return this;
            };
            
            obj.once = function once(name, callback) {
                return this.on(name, function wrapped() {
                    callback.apply(obj, arguments);
                    obj.off(name, wrapped);
                });
            };
            
            obj.fire = function fire(name) {
                var list = callbacks[name];
                var args = [].slice.call(arguments, 1);
                if (list) list.forEach(function(callback) {
                    callback.apply(obj, args);
                });
                return this;
            };

            return obj;
        }
    };
});
/**
 *	开始 
 */

CHESS.registerUI('main', function(chess) {
	var ret = chess.getUI('eve').setup({});
	var $satrtBtnPanel = $("<div>").attr('id','main-panel').appendTo($('#chess'));//content-wrapper
	var $satrtBtn = $('<button>').addClass('main-start').appendTo($satrtBtnPanel);
	var $optionsBtnPanel = $("<div>").attr('id','options-panel').appendTo($('#chess'));
	var $undoBtn = $('<button>').addClass('undo').appendTo($optionsBtnPanel).hide();
	var $drawBtn = $('<button>').addClass('draw').appendTo($optionsBtnPanel).hide();
	var $failBtn = $('<button>').addClass('fail').appendTo($optionsBtnPanel).hide();
	$satrtBtn.on('click',function(){
		$(this).slideUp();
    	chess.startGame()//.renderList();
    	$undoBtn.show();
	});
	$undoBtn.on('click',function(){
		chess.regret();
	})
	chess.on('gameOver',function(e){
		swal({
			text:'游戏结束',
			title:(e.key=='j0'?'黑':'红')+'方胜',
			showCancelButton: true,   
            closeOnConfirm: true,
            imageUrl: "static/img/thumbs-up.jpg",
            confirmButtonText:'重新开始',
            cancelButtonText:'查看棋谱'
		},function(v){
			if(v){
				$satrtBtn.trigger('click');
			}else{

			}

		});

	})

	


})

})(window)