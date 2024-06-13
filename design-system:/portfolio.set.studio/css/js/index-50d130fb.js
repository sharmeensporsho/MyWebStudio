import { i as ids, d as dimensions, v as version, s as store, o as openNavigationDrawer, a as setLanguage, b as language, c as closeNavigationDrawer, e as checkIfUserAcceptsCookies, f as setUserAcceptsCookies, g as setUserRejectsCookies } from './actions-4405a952.js';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol(),n$4=new Map;class s$4{constructor(t,n){if(this._$cssResult$=!0,n!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$4.get(this.cssText);return t$3&&void 0===e&&(n$4.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$4("string"==typeof t?t:t+"",e$5),i$3=(e,n)=>{t$3?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$2=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$4=window.trustedTypes,r$2=e$4?e$4.emptyScript:"",h$2=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,i){switch(i){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$3=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$3};class a$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$2(i));}else void 0!==i&&s.push(S$2(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$3){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$4.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$4.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$2||h$2({ReactiveElement:a$2}),(null!==(s$3=globalThis.reactiveElementVersions)&&void 0!==s$3?s$3:globalThis.reactiveElementVersions=[]).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$2=globalThis.trustedTypes,s$2=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$3=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+e$3,n$2=`<${o$3}>`,l$2=document,h$1=(t="")=>l$2.createComment(t),r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u$1=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_$1=/'/g,m$1=/"/g,g$1=/^(?:script|style|textarea|title)$/i,p$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$$1=p$1(1),b$1=Symbol.for("lit-noChange"),w$1=Symbol.for("lit-nothing"),T$1=new WeakMap,x$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N$1(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A$1=l$2.createTreeWalker(l$2,129,null,!1),C$1=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g$1.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m$1:_$1):d===m$1||d===_$1?d=f$1:d===v$1||d===a$1?d=c$1:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$2:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$3+y):s+e$3+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$2?s$2.createHTML(u):u,l]};class E$1{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C$1(t,s);if(this.el=E$1.createElement(v,n),A$1.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A$1.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M$1:"?"===i[1]?H$1:"@"===i[1]?I$1:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g$1.test(l.tagName)){const t=l.textContent.split(e$3),s=t.length-1;if(s>0){l.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A$1.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$3)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$3,t+1));)c.push({type:7,index:r}),t+=e$3.length-1;}r++;}}static createElement(t,i){const s=l$2.createElement("template");return s.innerHTML=t,s}}function P$1(t,i,s=t,e){var o,n,l,h;if(i===b$1)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$1(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P$1(t,d._$AS(t,i.values),d,e)),i}class V$1{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$2).importNode(s,!0);A$1.currentNode=o;let n=A$1.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N$1(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L$1(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A$1.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N$1{constructor(t,i,s,e){var o;this.type=2,this._$AH=w$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P$1(this,t,i),r$1(t)?t===w$1||null==t||""===t?(this._$AH!==w$1&&this._$AR(),this._$AH=w$1):t!==this._$AH&&t!==b$1&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u$1(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w$1&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$2.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E$1.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V$1(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T$1.get(t.strings);return void 0===i&&T$1.set(t.strings,i=new E$1(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N$1(this.M(h$1()),this.M(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=w$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P$1(this,t,i,0),n=!r$1(t)||t!==this._$AH&&t!==b$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P$1(this,e[s+l],i,l),h===b$1&&(h=this._$AH[l]),n||(n=!r$1(h)||h!==this._$AH[l]),h===w$1?t=w$1:t!==w$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M$1 extends S$1{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w$1?void 0:t;}}const k$1=i$2?i$2.emptyScript:"";class H$1 extends S$1{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w$1?this.element.setAttribute(this.name,k$1):this.element.removeAttribute(this.name);}}class I$1 extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P$1(this,t,i,0))&&void 0!==s?s:w$1)===b$1)return;const e=this._$AH,o=t===w$1&&e!==w$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w$1&&(e===w$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P$1(this,t);}}const z$1=window.litHtmlPolyfillSupport;null==z$1||z$1(E$1,N$1),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$2;class s$1 extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b$1}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$1});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s$1});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.0");

/* eslint-disable require-jsdoc */
class BaseElement extends s$1 {
  /**
   * @param {PropertyValues} changedProperties
   */
  firstUpdated(changedProperties) {
    this.classList.remove('unresolved');
    super.firstUpdated(changedProperties);
  }

  createRenderRoot() {
    // Disable shadow DOM.
    // Instead templates will be rendered in the light DOM.
    return this;
  }
}

var e$2,t$1,n,r,i$1,a=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},o$1=function(e){if("loading"===document.readyState)return "loading";var t=a();if(t){if(e<t.domInteractive)return "loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return "dom-interactive";if(0===t.domComplete||e<t.domComplete)return "dom-content-loaded"}return "complete"},u=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},c=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:u(r)+(r.className&&r.className.length?"."+r.className.replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode;}}catch(e){}return n},s=-1,f=function(){return s},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&(s=t.timeStamp,e(t));}),!0);},l=function(){var e=a();return e&&e.activationStart||0},m=function(e,t){var n=a(),r="navigate";return f()>=0?r="back-forward-cache":n&&(r=document.prerendering||l()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},v=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries());}));}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},p=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t));}},h=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}));},g=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t);};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0);},T=function(e){var t=!1;return function(n){t||(e(n),t=!0);}},y=-1,E=function(){return "hidden"!==document.visibilityState||document.prerendering?1/0:0},S=function(e){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===e.type?e.timeStamp:0,C());},b=function(){addEventListener("visibilitychange",S,!0),addEventListener("prerenderingchange",S,!0);},C=function(){removeEventListener("visibilitychange",S,!0),removeEventListener("prerenderingchange",S,!0);},L=function(){return y<0&&(y=E(),b(),d((function(){setTimeout((function(){y=E(),b();}),0);}))),{get firstHiddenTime(){return y}}},w=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e();},M=function(e,t){t=t||{},w((function(){var n,r=[1800,3e3],i=L(),a=m("FCP"),o=v("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-l(),0),a.entries.push(e),n(!0)));}));}));o&&(n=p(e,a,r,t.reportAllChanges),d((function(i){a=m("FCP"),n=p(e,a,r,t.reportAllChanges),h((function(){a.value=performance.now()-i.timeStamp,n(!0);}));})));}));},x=function(e,t){!function(e,t){t=t||{},M(T((function(){var n,r=[.1,.25],i=m("CLS",0),a=0,o=[],u=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=o[0],n=o[o.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]);}})),a>i.value&&(i.value=a,i.entries=o,n());},c=v("layout-shift",u);c&&(n=p(e,i,r,t.reportAllChanges),g((function(){u(c.takeRecords()),n(!0);})),d((function(){a=0,i=m("CLS",0),n=p(e,i,r,t.reportAllChanges),h((function(){return n()}));})),setTimeout(n,0));})));}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:c(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:o$1(t.startTime)})}}var r;e.attribution={};}(t),e(t);}),t);},A=function(e,t){M((function(t){!function(e){if(e.entries.length){var t=a(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:o$1(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:o$1(f())};}(t),e(t);}),t);},F={passive:!0,capture:!0},I=new Date,B=function(r,i){e$2||(e$2=i,t$1=r,n=new Date,k(removeEventListener),D());},D=function(){if(t$1>=0&&t$1<n-I){var i={entryType:"first-input",name:e$2.type,target:e$2.target,cancelable:e$2.cancelable,startTime:e$2.timeStamp,processingStart:e$2.timeStamp+t$1};r.forEach((function(e){e(i);})),r=[];}},P=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){B(e,t),i();},r=function(){i();},i=function(){removeEventListener("pointerup",n,F),removeEventListener("pointercancel",r,F);};addEventListener("pointerup",n,F),addEventListener("pointercancel",r,F);}(t,e):B(t,e);}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,P,F)}));},R=function(n,i){i=i||{},w((function(){var a,o=[100,300],u=L(),c=m("FID"),s=function(e){e.startTime<u.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),a(!0));},f=function(e){e.forEach(s);},l=v("first-input",f);a=p(n,c,o,i.reportAllChanges),l&&g(T((function(){f(l.takeRecords()),l.disconnect();}))),l&&d((function(){var u;c=m("FID"),a=p(n,c,o,i.reportAllChanges),r=[],t$1=-1,e$2=null,k(addEventListener),u=s,r.push(u),D();}));}));},N=function(e,t){R((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:c(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:o$1(t.startTime)};}(t),e(t);}),t);},q=0,H=1/0,O=0,j=function(e){e.forEach((function(e){e.interactionId&&(H=Math.min(H,e.interactionId),O=Math.max(O,e.interactionId),q=O?(O-H)/7+1:0);}));},U=function(){return i$1?q:performance.interactionCount||0},V=function(){"interactionCount"in performance||i$1||(i$1=v("event",j,{type:"event",buffered:!0,durationThreshold:0}));},_=0,z=function(){return U()-_},G=[],J={},K=function(e){var t=G[G.length-1],n=J[e.interactionId];if(n||G.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else {var r={id:e.interactionId,latency:e.duration,entries:[e]};J[r.id]=r,G.push(r);}G.sort((function(e,t){return t.latency-e.latency})),G.splice(10).forEach((function(e){delete J[e.id];}));}},Q=function(e,t){t=t||{},w((function(){var n=[200,500];V();var r,i=m("INP"),a=function(e){e.forEach((function(e){(e.interactionId&&K(e),"first-input"===e.entryType)&&(!G.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&K(e));}));var t,n=(t=Math.min(G.length-1,Math.floor(z()/50)),G[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r());},o=v("event",a,{durationThreshold:t.durationThreshold||40});r=p(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),g((function(){a(o.takeRecords()),i.value<0&&z()>0&&(i.value=0,i.entries=[]),r(!0);})),d((function(){G=[],_=U(),i=m("INP"),r=p(e,i,n,t.reportAllChanges);})));}));},W=function(e,t){Q((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:c(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:o$1(t.startTime)};}else e.attribution={};}(t),e(t);}),t);},X={},Y=function(e,t){!function(e,t){t=t||{},w((function(){var n,r=[2500,4e3],i=L(),a=m("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-l(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n());}},u=v("largest-contentful-paint",o);if(u){n=p(e,a,r,t.reportAllChanges);var c=T((function(){X[a.id]||(o(u.takeRecords()),u.disconnect(),X[a.id]=!0,n(!0));}));["keydown","click"].forEach((function(e){addEventListener(e,c,!0);})),g(c),d((function(i){a=m("LCP"),n=p(e,a,r,t.reportAllChanges),h((function(){a.value=performance.now()-i.timeStamp,X[a.id]=!0,n(!0);}));}));}}));}((function(t){!function(e){if(e.entries.length){var t=a();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],o=Math.max(0,t.responseStart-n),u=Math.max(o,i?(i.requestStart||i.startTime)-n:0),s=Math.max(u,i?i.responseEnd-n:0),f=Math.max(s,r?r.startTime-n:0),d={element:c(r.element),timeToFirstByte:o,resourceLoadDelay:u-o,resourceLoadTime:s-u,elementRenderDelay:f-s,navigationEntry:t,lcpEntry:r};return r.url&&(d.url=r.url),i&&(d.lcpResourceEntry=i),void(e.attribution=d)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value};}(t),e(t);}),t);},Z=function e(t){document.prerendering?w((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0);},$=function(e,t){t=t||{};var n=[800,1800],r=m("TTFB"),i=p(e,r,n,t.reportAllChanges);Z((function(){var o=a();if(o){var u=o.responseStart;if(u<=0||u>performance.now())return;r.value=Math.max(u-l(),0),r.entries=[o],i(!0),d((function(){r=m("TTFB",0),(i=p(e,r,n,t.reportAllChanges))(!0);}));}}));},ee=function(e,t){$((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t};}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0};}(t),e(t);}),t);};

// A function that should be called once all all analytics code has been
// initialized. Calling this will resolve the `whenAnalyticsInitialize`
// promise.
let markAnalyticsInitialized;

// A promise that settles once all analytics has been initialized.
// Internally this assigned the `resolve()` function to the module-level
// `markAnalyticsInitialized` variable.
const whenAnalyticsInitialized = new Promise((resolve) => {
  markAnalyticsInitialized = resolve;
});

/**
 * @param {string} name
 * @param {Object} params
 */
async function logEvent(name, params) {
  await whenAnalyticsInitialized;
  gtag('event', name, params);
}

/**
 * Logs an error via Analytics with optional context message and fatal notice.
 *
 * @param {Error} error to log
 * @param {string=} message context to provide around error message
 * @param {boolean=} fatal whether this is fatal (as per Analytics' logging)
 */
function logError(error, message = '', fatal = false) {
  const description = message ? `${message} (${error.message})` : error.message;
  logEvent('exception', {description, fatal});
}

/**
 * See: https://github.com/GoogleChrome/web-vitals#using-analyticsjs
 * @param {Object} metric
 */
function sendToGoogleAnalytics({
  name,
  value,
  delta,
  id,
  attribution,
  navigationType,
}) {
  const params = {
    event_category: 'Web Vitals',
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    event_label: id,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // Send the raw metric value in addition to the value computed for GA
    // so it's available in BigQuery and the API.
    metric_value: value,
    // This should already by set globally, but to ensure it's consistent
    // with the web-vitals library, set it again.
    // Override for 'navigational-prefetch' for the prefetch origin trial
    // experiment (https://github.com/GoogleChrome/web.dev/pull/9532)
    navigation_type:
      navigationType === 'navigate' &&
      performance.getEntriesByType &&
      performance.getEntriesByType('navigation')[0] &&
      performance.getEntriesByType('navigation')[0].deliveryType ===
        'navigational-prefetch'
        ? 'navigational-prefetch'
        : navigationType,
    // Use a non-interaction event to avoid affecting bounce rate.
    // This only applies to Universal Analytics and can be deleted once
    // we're only using GA4.
    non_interaction: true,
  };

  let overrides;

  switch (name) {
    case 'CLS':
      overrides = {
        debug_time: attribution.largestShiftTime,
        debug_load_state: attribution.loadState,
        debug_target: attribution.largestShiftTarget || '(not set)',
      };
      break;
    case 'FCP':
      overrides = {
        debug_ttfb: attribution.timeToFirstByte,
        debug_fb2fcp: attribution.firstByteToFCP,
        debug_load_state: attribution.loadState,
        debug_target: attribution.loadState || '(not set)',
      };
      break;
    case 'FID':
    case 'INP':
      overrides = {
        debug_event: attribution.eventType,
        debug_time: attribution.eventTime,
        debug_load_state: attribution.loadState,
        debug_target: attribution.eventTarget || '(not set)',
      };
      break;
    case 'LCP':
      overrides = {
        debug_url: attribution.url,
        debug_ttfb: attribution.timeToFirstByte,
        debug_rld: attribution.resourceLoadDelay,
        debug_rlt: attribution.resourceLoadTime,
        debug_erd: attribution.elementRenderDelay,
        debug_target: attribution.element || '(not set)',
      };
      break;
    case 'TTFB':
      overrides = {
        debug_waiting_time: attribution.waitingTime,
        debug_dns_time: attribution.dnsTime,
        debug_connection_time: attribution.connectionTime,
        debug_request_time: attribution.requestTime,
      };
      break;
  }

  logEvent(name, Object.assign(params, overrides));
}

/**
 * Configures logging events for any clicks on a link (`<a href="...">`)
 * or another relevant elements (class="gc-analytics-event"), searching
 * for (requiring at least `data-category`, but also allowing
 * `data-action`, `data-label` and `data-value`.
 */
function addClickEventListener() {
  document.addEventListener(
    'click',
    /**
     * @param {WMouseEvent} e
     */
    (e) => {
      const clickableEl = e.target.closest('a[href], .gc-analytics-event');
      if (!clickableEl) {
        return;
      }
      const event = clickableEl.dataset['action'] || 'click';
      const category = clickableEl.dataset['category'] || undefined;
      const label = clickableEl.dataset['label'] || undefined;
      // must be number, or is ignored
      const value = Number(clickableEl.dataset['value']) || undefined;

      if (event && category) {
        logEvent(event, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
  );
}

/**
 * Adds a listener to detect back/forward cache restores and log them
 * as pageviews with the "back-forward-cache" navigation type set (in
 * case we need to distinguish them from regular pageviews).
 * https://web.dev/bfcache/#how-bfcache-affects-analytics-and-performance-measurement
 */
function addPageShowEventListener() {
  window.addEventListener(
    'pageshow',
    /**
     * @param {PageTransitionEvent} e
     */
    (e) => {
      if (e.persisted) {
        logEvent('page_view', {
          [dimensions.NAVIGATION_TYPE]: 'back-forward-cache',
        });
      }
    },
  );
}

// Set up a promise for when the page is activated,
// which is needed for prerendered pages.
const whenPageActivated = new Promise((resolve) => {
  if (document.prerendering) {
    document.addEventListener('prerenderingchange', () => resolve());
  } else {
    resolve();
  }
});

/**
 * Gets the type of navigation for this page. In most cases this is the
 * value returned by the Navigation Timing API (normalized to use kebab case),
 * but in addition to this it also captures pages that were prerendered
 * as well as page that were restored after a discard.
 * @returns {string}
 */
function getNavigationType() {
  if (document.wasDiscarded) {
    return 'restore';
  }

  const navEntry =
    self.performance &&
    performance.getEntriesByType &&
    performance.getEntriesByType('navigation')[0];

  if (navEntry) {
    // Prerendered pages have an activationStart time after activation
    if (navEntry.activationStart > 0) {
      return 'prerender';
    } else if (
      // For the document speculation rules origin trial
      // overrwrite the navigation type
      navEntry.type === 'navigate' &&
      navEntry.deliveryType === 'navigational-prefetch'
    ) {
      return 'navigational-prefetch';
    } else {
      return navEntry.type.replace(/_/, '-');
    }
  }
  return '(not set)';
}

/**
 * Returns a list of any `prerender` speculation rules defined by any
 * `script[type=speculationrules]` elements on the page.
 * @returns {Object}
 */
function getPrerenderRules() {
  return [...document.querySelectorAll('script[type=speculationrules]')]
    .map((s) => {
      try {
        return JSON.parse(s.textContent).prerender;
      } catch {
        // Ignore parse errors.
      }
    })
    .flat() // Remove scripts with errors or no prerender rules.
    .filter((rule) => rule && rule.source === 'list');
}

/**
 * Logs analytics events for `prerender` speculation rules, if that browser
 * support speculation rules and is not in Data Saver mode.
 * @returns {void}
 */
function logPrerenders() {
  // Only log prerender attempts if supported
  // and not in datasaver mode
  if (
    !(
      HTMLScriptElement.supports &&
      HTMLScriptElement.supports('speculationrules')
    ) ||
    navigator.connection?.saveData
  ) {
    return;
  }

  const prerenderURLs = new Set(
    getPrerenderRules()
      .map((r) => r.urls)
      .flat(),
  );

  prerenderURLs.forEach((prerenderURL) => {
    logEvent('prerender_attempt', {
      value: 1,
      event_category: 'Site-Wide Custom Events',
      event_label: prerenderURL,
      // Use a non-interaction event to avoid affecting bounce rate.
      non_interaction: true,
    });
  });
}

/**
 * @param {string} name
 * @returns {string|undefined}
 */
function getMeta(name) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  return meta && meta.content;
}

/**
 * Returns the UA or GA4 config for a given analytics measurement ID,
 * configured for the web.dev accounts.
 * @param {string} id
 * @returns {['config', string, Gtag.ConfigParams]}
 */
function getConfig(id) {
  const config = {
    measurement_version: version,
    navigation_type: getNavigationType(),
    page_path: location.pathname,
    page_authors: getMeta('authors'),
    page_tags: getMeta('tags'),
    page_learn_paths: getMeta('paths'),
    color_scheme_preference: self.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light',
  };
  if (id.startsWith('UA-')) {
    Object.assign(config, {
      transport_type: 'beacon',
      // See: https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
      custom_map: {
        [dimensions.MEASUREMENT_VERSION]: 'measurement_version',
        [dimensions.NAVIGATION_TYPE]: 'navigation_type',
        [dimensions.COLOR_SCHEME_PREFERENCE]: 'color_scheme_preference',
        [dimensions.WEB_VITALS_DEBUG]: 'debug_target',
      },
    });
  }
  if (id.startsWith('G-')) {
    if (location.hostname === 'localhost') {
      config.debug_mode = true;
    }
  }
  return ['config', id, config];
}

async function initAnalytics() {
  // If prerendering then only init once the page is activated
  await whenPageActivated;

  gtag(...getConfig(ids.GA4));
  gtag(...getConfig(ids.UA));

  addClickEventListener();
  addPageShowEventListener();

  x(sendToGoogleAnalytics);
  A(sendToGoogleAnalytics);
  N(sendToGoogleAnalytics);
  W(sendToGoogleAnalytics);
  Y(sendToGoogleAnalytics);
  ee(sendToGoogleAnalytics);

  logPrerenders();

  markAnalyticsInitialized();
}

// Some pages on web.dev include the full site JS but doesn't load
// the gtag.js library. We can't initialize analytics in those cases.
if (window.gtag) {
  initAnalytics();
}

/**
 *
 * The shadowDom / Intersection Observer version of Paul's concept:
 * https://github.com/paulirish/lite-youtube-embed
 *
 * A lightweight YouTube embed. Still should feel the same to the user, just
 * MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these (👍👍):
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube
 *   https://github.com/Daugilas/lazyYT https://github.com/vb/lazyframe
 */
class LiteYTEmbed extends HTMLElement {
    constructor() {
        super();
        this.iframeLoaded = false;
        this.setupDom();
    }
    static get observedAttributes() {
        return ['videoid'];
    }
    connectedCallback() {
        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
            once: true,
        });
        this.addEventListener('click', () => this.addIframe());
    }
    get videoId() {
        return encodeURIComponent(this.getAttribute('videoid') || '');
    }
    set videoId(id) {
        this.setAttribute('videoid', id);
    }
    get videoTitle() {
        return this.getAttribute('videotitle') || 'Video';
    }
    set videoTitle(title) {
        this.setAttribute('videotitle', title);
    }
    get videoPlay() {
        return this.getAttribute('videoPlay') || 'Play';
    }
    set videoPlay(name) {
        this.setAttribute('videoPlay', name);
    }
    get videoStartAt() {
        return Number(this.getAttribute('videoStartAt') || '0');
    }
    set videoStartAt(time) {
        this.setAttribute('videoStartAt', String(time));
    }
    get autoLoad() {
        return this.hasAttribute('autoload');
    }
    set autoLoad(value) {
        if (value) {
            this.setAttribute('autoload', '');
        }
        else {
            this.removeAttribute('autoload');
        }
    }
    get params() {
        return `start=${this.videoStartAt}&${this.getAttribute('params')}`;
    }
    /**
     * Define our shadowDOM for the component
     */
    setupDom() {
        const shadowDom = this.attachShadow({ mode: 'open' });
        shadowDom.innerHTML = `
      <style>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
          background-position: top;
          background-repeat: repeat-x;
          height: 60px;
          padding-bottom: 50px;
          width: 100%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          z-index: 1;
        }
        /* play button */
        .lty-playbtn {
          width: 70px;
          height: 46px;
          background-color: #212121;
          z-index: 1;
          opacity: 0.8;
          border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          border: 0;
        }
        #frame:hover .lty-playbtn {
          background-color: #f00;
          opacity: 1;
        }
        /* play button triangle */
        .lty-playbtn:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }
        .lty-playbtn,
        .lty-playbtn:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        /* Post-click styles */
        .lyt-activated {
          cursor: unset;
        }

        #frame.lyt-activated::before,
        .lyt-activated .lty-playbtn {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin">
        </picture>
        <button class="lty-playbtn"></button>
      </div>
    `;
        this.domRefFrame = this.shadowRoot.querySelector('#frame');
        this.domRefImg = {
            fallback: this.shadowRoot.querySelector('#fallbackPlaceholder'),
            webp: this.shadowRoot.querySelector('#webpPlaceholder'),
            jpeg: this.shadowRoot.querySelector('#jpegPlaceholder'),
        };
        this.domRefPlayButton = this.shadowRoot.querySelector('.lty-playbtn');
    }
    /**
     * Parse our attributes and fire up some placeholders
     */
    setupComponent() {
        this.initImagePlaceholder();
        this.domRefPlayButton.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.setAttribute('title', `${this.videoPlay}: ${this.videoTitle}`);
        if (this.autoLoad) {
            this.initIntersectionObserver();
        }
    }
    /**
     * Lifecycle method that we use to listen for attribute changes to period
     * @param {*} name
     * @param {*} oldVal
     * @param {*} newVal
     */
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'videoid': {
                if (oldVal !== newVal) {
                    this.setupComponent();
                    // if we have a previous iframe, remove it and the activated class
                    if (this.domRefFrame.classList.contains('lyt-activated')) {
                        this.domRefFrame.classList.remove('lyt-activated');
                        this.shadowRoot.querySelector('iframe').remove();
                        this.iframeLoaded = false;
                    }
                }
                break;
            }
        }
    }
    /**
     * Inject the iframe into the component body
     */
    addIframe() {
        if (!this.iframeLoaded) {
            const iframeHTML = `
<iframe frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube.com/embed/${this.videoId}?autoplay=1&${this.params}"
></iframe>`;
            this.domRefFrame.insertAdjacentHTML('beforeend', iframeHTML);
            this.domRefFrame.classList.add('lyt-activated');
            this.iframeLoaded = true;
        }
    }
    /**
     * Setup the placeholder image for the component
     */
    initImagePlaceholder() {
        // we don't know which image type to preload, so warm the connection
        LiteYTEmbed.addPrefetch('preconnect', 'https://i.ytimg.com/');
        const posterUrlWebp = `https://i.ytimg.com/vi_webp/${this.videoId}/hqdefault.webp`;
        const posterUrlJpeg = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
        this.domRefImg.webp.srcset = posterUrlWebp;
        this.domRefImg.jpeg.srcset = posterUrlJpeg;
        this.domRefImg.fallback.src = posterUrlJpeg;
        this.domRefImg.fallback.setAttribute('aria-label', `${this.videoPlay}: ${this.videoTitle}`);
        this.domRefImg.fallback.setAttribute('alt', `${this.videoPlay}: ${this.videoTitle}`);
    }
    /**
     * Setup the Intersection Observer to load the iframe when scrolled into view
     */
    initIntersectionObserver() {
        if ('IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0,
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.iframeLoaded) {
                        LiteYTEmbed.warmConnections();
                        this.addIframe();
                        observer.unobserve(this);
                    }
                });
            }, options);
            observer.observe(this);
        }
    }
    /**
     * Add a <link rel={preload | preconnect} ...> to the head
     * @param {*} kind
     * @param {*} url
     * @param {*} as
     */
    static addPrefetch(kind, url, as) {
        const linkElem = document.createElement('link');
        linkElem.rel = kind;
        linkElem.href = url;
        if (as) {
            linkElem.as = as;
        }
        linkElem.crossOrigin = 'true';
        document.head.append(linkElem);
    }
    /**
     * Begin preconnecting to warm up the iframe load Since the embed's netwok
     * requests load within its iframe, preload/prefetch'ing them outside the
     * iframe will only cause double-downloads. So, the best we can do is warm up
     * a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported:
     * http://crbug.com/593267 But TBH, I don't think it'll happen soon with Site
     * Isolation and split caches adding serious complexity.
     */
    static warmConnections() {
        if (LiteYTEmbed.preconnected)
            return;
        // Host that YT uses to serve JS needed by player, per amp-youtube
        LiteYTEmbed.addPrefetch('preconnect', 'https://s.ytimg.com');
        // The iframe document and most of its subresources come right off
        // youtube.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
        // The botguard script is fetched off from google.com
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');
        // TODO: Not certain if these ad related domains are in the critical path.
        // Could verify with domain-specific throttling.
        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');
        LiteYTEmbed.preconnected = true;
    }
}
LiteYTEmbed.preconnected = false;
// Register custom element
customElements.define('lite-youtube', LiteYTEmbed);

/**
 * Base element which subscribes to global state.
 *
 * @extends {BaseElement}
 */
class BaseStateElement extends BaseElement {
  constructor() {
    super();
    this.onStateChanged = this.onStateChanged.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    store.subscribe(this.onStateChanged);
    this.onStateChanged(store.getState());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.unsubscribe(this.onStateChanged);
  }

  /**
   * This method will be called whenever unistore state changes,
   * you can overwrite the method to hook into the event and deconstruct the state.
   *
   * @param {!Object<string, *>} state
   */

  // @ts-ignore-start
  onStateChanged(state) {} // eslint-disable-line no-unused-vars
  // @ts-ignore-end
}

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Header extends BaseStateElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    /** @type HTMLButtonElement */
    this.openDrawerBtn = this.querySelector('[data-open-drawer-button]');
    if (this.openDrawerBtn) {
      this.openDrawerBtn.addEventListener('click', openNavigationDrawer);
    }
  }

  disconnectedCallback() {
    if (this.openDrawerBtn) {
      this.openDrawerBtn.removeEventListener('click', openNavigationDrawer);
    }

    store.unsubscribe(this.onStateChanged);
  }

  onStateChanged({isSearchExpanded, currentUrl}) {
    this.classList.toggle('web-header--has-expanded-search', isSearchExpanded);

    // Ensure that the "active" attribute is applied to any matching header
    // link, or to none (for random subpages or articles).
    currentUrl = currentUrl.replace(/"/g, '\\"');
    currentUrl = (currentUrl.match(/^\/\w+\//) || [''])[0];

    const active = this.querySelector('[active]');
    const updated = this.querySelector(`[href="${currentUrl}"]`);

    if (active === updated) {
      return;
    }

    if (active) {
      active.removeAttribute('active');
      active.removeAttribute('aria-current');
    }

    if (updated) {
      updated.setAttribute('active', '');
      updated.setAttribute('aria-current', 'page');
    }
  }

  /**
   * This is called by the NavigationDrawer to return focus to this control when
   * the user closes the NavigationDrawer.
   * This is important for accessibility.
   */
  manageFocus() {
    if (this.openDrawerBtn) {
      this.openDrawerBtn.focus();
    }
  }
}

customElements.define('web-header', Header);

/*
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @extends {BaseElement}
 * @final
 */
class DevRelRibbon extends BaseElement {
  constructor() {
    super();
    this.onIntersection = this.onIntersection.bind(this);
  }

  onIntersection(entries) {
    for (const entry of entries) {
      this.ribbon.classList.toggle('--visible', entry.isIntersecting);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.ribbon = this.querySelector('.devrel-ribbon__ribbon');

    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.observe(this);
  }

  detachedCallback() {
    this.observer.disconnect();
    this.observer = null;
  }
}

customElements.define('web-devrel-ribbon', DevRelRibbon);

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class LanguageSelect extends BaseStateElement {
  static get properties() {
    return {
      current: {type: String},
    };
  }

  onStateChanged({currentLanguage}) {
    this.current = currentLanguage;
  }

  onChange(e) {
    setLanguage(e.target.value);
  }

  renderOption(language$1) {
    let languageName = language.languageNames[language$1];
    if (!languageName) {
      return '';
    }
    languageName = languageName.toUpperCase();
    return this.current === language$1
      ? $$1`
          <option value="${language$1}" selected>
            ${languageName} (${language$1})
          </option>
        `
      : $$1`
          <option value="${language$1}">${languageName} (${language$1})</option>
        `;
  }

  render() {
    const languageVersions = Array.from(
      document.querySelectorAll('link[rel="alternate"]'),
    )
      .filter((link) => link['hreflang'])
      .map((link) => link['hreflang']);
    const currentLang = document.documentElement.lang;
    const langList = language.supportedLanguages.filter(
      (language) =>
        languageVersions.includes(language) || language === currentLang,
    );
    return $$1`
      <div class="w-display-flex">
        <label class="visually-hidden" for="preferred-language">
          Choose language
        </label>
        <select id="preferred-language" @change="${this.onChange}">
          ${langList.map((language) => this.renderOption(language))}
        </select>
      </div>
    `;
  }
}

customElements.define('web-language-select', LanguageSelect);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

(function () {
  // Return early if we're not running inside of the browser.
  if (typeof window === 'undefined') {
    return;
  }

  // Convenience function for converting NodeLists.
  /** @type {typeof Array.prototype.slice} */
  var slice = Array.prototype.slice;

  /**
   * IE has a non-standard name for "matches".
   * @type {typeof Element.prototype.matches}
   */
  var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

  /** @type {string} */
  var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

  /**
   * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
   * attribute.
   *
   * Its main functions are:
   *
   * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
   *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
   *   each focusable node in the subtree with the singleton `InertManager` which manages all known
   *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
   *   instance exists for each focusable node which has at least one inert root as an ancestor.
   *
   * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
   *   attribute is removed from the root node). This is handled in the destructor, which calls the
   *   `deregister` method on `InertManager` for each managed inert node.
   */

  var InertRoot = function () {
    /**
     * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
     * @param {!InertManager} inertManager The global singleton InertManager object.
     */
    function InertRoot(rootElement, inertManager) {
      _classCallCheck(this, InertRoot);

      /** @type {!InertManager} */
      this._inertManager = inertManager;

      /** @type {!HTMLElement} */
      this._rootElement = rootElement;

      /**
       * @type {!Set<!InertNode>}
       * All managed focusable nodes in this InertRoot's subtree.
       */
      this._managedNodes = new Set();

      // Make the subtree hidden from assistive technology
      if (this._rootElement.hasAttribute('aria-hidden')) {
        /** @type {?string} */
        this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
      } else {
        this._savedAriaHidden = null;
      }
      this._rootElement.setAttribute('aria-hidden', 'true');

      // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
      this._makeSubtreeUnfocusable(this._rootElement);

      // Watch for:
      // - any additions in the subtree: make them unfocusable too
      // - any removals from the subtree: remove them from this inert root's managed nodes
      // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
      //   element, make that node a managed node.
      this._observer = new MutationObserver(this._onMutation.bind(this));
      this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
    }

    /**
     * Call this whenever this object is about to become obsolete.  This unwinds all of the state
     * stored in this object and updates the state of all of the managed nodes.
     */


    _createClass(InertRoot, [{
      key: 'destructor',
      value: function destructor() {
        this._observer.disconnect();

        if (this._rootElement) {
          if (this._savedAriaHidden !== null) {
            this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
          } else {
            this._rootElement.removeAttribute('aria-hidden');
          }
        }

        this._managedNodes.forEach(function (inertNode) {
          this._unmanageNode(inertNode.node);
        }, this);

        // Note we cast the nulls to the ANY type here because:
        // 1) We want the class properties to be declared as non-null, or else we
        //    need even more casts throughout this code. All bets are off if an
        //    instance has been destroyed and a method is called.
        // 2) We don't want to cast "this", because we want type-aware optimizations
        //    to know which properties we're setting.
        this._observer = /** @type {?} */null;
        this._rootElement = /** @type {?} */null;
        this._managedNodes = /** @type {?} */null;
        this._inertManager = /** @type {?} */null;
      }

      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */

    }, {
      key: '_makeSubtreeUnfocusable',


      /**
       * @param {!Node} startNode
       */
      value: function _makeSubtreeUnfocusable(startNode) {
        var _this2 = this;

        composedTreeWalk(startNode, function (node) {
          return _this2._visitNode(node);
        });

        var activeElement = document.activeElement;

        if (!document.body.contains(startNode)) {
          // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
          var node = startNode;
          /** @type {!ShadowRoot|undefined} */
          var root = undefined;
          while (node) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              root = /** @type {!ShadowRoot} */node;
              break;
            }
            node = node.parentNode;
          }
          if (root) {
            activeElement = root.activeElement;
          }
        }
        if (startNode.contains(activeElement)) {
          activeElement.blur();
          // In IE11, if an element is already focused, and then set to tabindex=-1
          // calling blur() will not actually move the focus.
          // To work around this we call focus() on the body instead.
          if (activeElement === document.activeElement) {
            document.body.focus();
          }
        }
      }

      /**
       * @param {!Node} node
       */

    }, {
      key: '_visitNode',
      value: function _visitNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        var element = /** @type {!HTMLElement} */node;

        // If a descendant inert root becomes un-inert, its descendants will still be inert because of
        // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
        if (element !== this._rootElement && element.hasAttribute('inert')) {
          this._adoptInertRoot(element);
        }

        if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
          this._manageNode(element);
        }
      }

      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */

    }, {
      key: '_manageNode',
      value: function _manageNode(node) {
        var inertNode = this._inertManager.register(node, this);
        this._managedNodes.add(inertNode);
      }

      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */

    }, {
      key: '_unmanageNode',
      value: function _unmanageNode(node) {
        var inertNode = this._inertManager.deregister(node, this);
        if (inertNode) {
          this._managedNodes['delete'](inertNode);
        }
      }

      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */

    }, {
      key: '_unmanageSubtree',
      value: function _unmanageSubtree(startNode) {
        var _this3 = this;

        composedTreeWalk(startNode, function (node) {
          return _this3._unmanageNode(node);
        });
      }

      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */

    }, {
      key: '_adoptInertRoot',
      value: function _adoptInertRoot(node) {
        var inertSubroot = this._inertManager.getInertRoot(node);

        // During initialisation this inert root may not have been registered yet,
        // so register it now if need be.
        if (!inertSubroot) {
          this._inertManager.setInert(node, true);
          inertSubroot = this._inertManager.getInertRoot(node);
        }

        inertSubroot.managedNodes.forEach(function (savedInertNode) {
          this._manageNode(savedInertNode.node);
        }, this);
      }

      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */

    }, {
      key: '_onMutation',
      value: function _onMutation(records, self) {
        records.forEach(function (record) {
          var target = /** @type {!HTMLElement} */record.target;
          if (record.type === 'childList') {
            // Manage added nodes
            slice.call(record.addedNodes).forEach(function (node) {
              this._makeSubtreeUnfocusable(node);
            }, this);

            // Un-manage removed nodes
            slice.call(record.removedNodes).forEach(function (node) {
              this._unmanageSubtree(node);
            }, this);
          } else if (record.type === 'attributes') {
            if (record.attributeName === 'tabindex') {
              // Re-initialise inert node if tabindex changes
              this._manageNode(target);
            } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
              // If a new inert root is added, adopt its managed nodes and make sure it knows about the
              // already managed nodes from this inert subroot.
              this._adoptInertRoot(target);
              var inertSubroot = this._inertManager.getInertRoot(target);
              this._managedNodes.forEach(function (managedNode) {
                if (target.contains(managedNode.node)) {
                  inertSubroot._manageNode(managedNode.node);
                }
              });
            }
          }
        }, this);
      }
    }, {
      key: 'managedNodes',
      get: function get() {
        return new Set(this._managedNodes);
      }

      /** @return {boolean} */

    }, {
      key: 'hasSavedAriaHidden',
      get: function get() {
        return this._savedAriaHidden !== null;
      }

      /** @param {?string} ariaHidden */

    }, {
      key: 'savedAriaHidden',
      set: function set(ariaHidden) {
        this._savedAriaHidden = ariaHidden;
      }

      /** @return {?string} */
      ,
      get: function get() {
        return this._savedAriaHidden;
      }
    }]);

    return InertRoot;
  }();

  /**
   * `InertNode` initialises and manages a single inert node.
   * A node is inert if it is a descendant of one or more inert root elements.
   *
   * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
   * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
   * is intrinsically focusable or not.
   *
   * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
   * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
   * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
   * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
   * or removes the `tabindex` attribute if the element is intrinsically focusable.
   */


  var InertNode = function () {
    /**
     * @param {!Node} node A focusable element to be made inert.
     * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
     */
    function InertNode(node, inertRoot) {
      _classCallCheck(this, InertNode);

      /** @type {!Node} */
      this._node = node;

      /** @type {boolean} */
      this._overrodeFocusMethod = false;

      /**
       * @type {!Set<!InertRoot>} The set of descendant inert roots.
       *    If and only if this set becomes empty, this node is no longer inert.
       */
      this._inertRoots = new Set([inertRoot]);

      /** @type {?number} */
      this._savedTabIndex = null;

      /** @type {boolean} */
      this._destroyed = false;

      // Save any prior tabindex info and make this node untabbable
      this.ensureUntabbable();
    }

    /**
     * Call this whenever this object is about to become obsolete.
     * This makes the managed node focusable again and deletes all of the previously stored state.
     */


    _createClass(InertNode, [{
      key: 'destructor',
      value: function destructor() {
        this._throwIfDestroyed();

        if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var element = /** @type {!HTMLElement} */this._node;
          if (this._savedTabIndex !== null) {
            element.setAttribute('tabindex', this._savedTabIndex);
          } else {
            element.removeAttribute('tabindex');
          }

          // Use `delete` to restore native focus method.
          if (this._overrodeFocusMethod) {
            delete element.focus;
          }
        }

        // See note in InertRoot.destructor for why we cast these nulls to ANY.
        this._node = /** @type {?} */null;
        this._inertRoots = /** @type {?} */null;
        this._destroyed = true;
      }

      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */

    }, {
      key: '_throwIfDestroyed',


      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function _throwIfDestroyed() {
        if (this.destroyed) {
          throw new Error('Trying to access destroyed InertNode');
        }
      }

      /** @return {boolean} */

    }, {
      key: 'ensureUntabbable',


      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function ensureUntabbable() {
        if (this.node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        var element = /** @type {!HTMLElement} */this.node;
        if (matches.call(element, _focusableElementsString)) {
          if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
            return;
          }

          if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
          }
          element.setAttribute('tabindex', '-1');
          if (element.nodeType === Node.ELEMENT_NODE) {
            element.focus = function () {};
            this._overrodeFocusMethod = true;
          }
        } else if (element.hasAttribute('tabindex')) {
          this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
          element.removeAttribute('tabindex');
        }
      }

      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */

    }, {
      key: 'addInertRoot',
      value: function addInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.add(inertRoot);
      }

      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */

    }, {
      key: 'removeInertRoot',
      value: function removeInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots['delete'](inertRoot);
        if (this._inertRoots.size === 0) {
          this.destructor();
        }
      }
    }, {
      key: 'destroyed',
      get: function get() {
        return (/** @type {!InertNode} */this._destroyed
        );
      }
    }, {
      key: 'hasSavedTabIndex',
      get: function get() {
        return this._savedTabIndex !== null;
      }

      /** @return {!Node} */

    }, {
      key: 'node',
      get: function get() {
        this._throwIfDestroyed();
        return this._node;
      }

      /** @param {?number} tabIndex */

    }, {
      key: 'savedTabIndex',
      set: function set(tabIndex) {
        this._throwIfDestroyed();
        this._savedTabIndex = tabIndex;
      }

      /** @return {?number} */
      ,
      get: function get() {
        this._throwIfDestroyed();
        return this._savedTabIndex;
      }
    }]);

    return InertNode;
  }();

  /**
   * InertManager is a per-document singleton object which manages all inert roots and nodes.
   *
   * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
   * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
   * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
   * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
   * is created for each such node, via the `_managedNodes` map.
   */


  var InertManager = function () {
    /**
     * @param {!Document} document
     */
    function InertManager(document) {
      _classCallCheck(this, InertManager);

      if (!document) {
        throw new Error('Missing required argument; InertManager needs to wrap a document.');
      }

      /** @type {!Document} */
      this._document = document;

      /**
       * All managed nodes known to this InertManager. In a map to allow looking up by Node.
       * @type {!Map<!Node, !InertNode>}
       */
      this._managedNodes = new Map();

      /**
       * All inert roots known to this InertManager. In a map to allow looking up by Node.
       * @type {!Map<!Node, !InertRoot>}
       */
      this._inertRoots = new Map();

      /**
       * Observer for mutations on `document.body`.
       * @type {!MutationObserver}
       */
      this._observer = new MutationObserver(this._watchForInert.bind(this));

      // Add inert style.
      addInertStyle(document.head || document.body || document.documentElement);

      // Wait for document to be loaded.
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
      } else {
        this._onDocumentLoaded();
      }
    }

    /**
     * Set whether the given element should be an inert root or not.
     * @param {!HTMLElement} root
     * @param {boolean} inert
     */


    _createClass(InertManager, [{
      key: 'setInert',
      value: function setInert(root, inert) {
        if (inert) {
          if (this._inertRoots.has(root)) {
            // element is already inert
            return;
          }

          var inertRoot = new InertRoot(root, this);
          root.setAttribute('inert', '');
          this._inertRoots.set(root, inertRoot);
          // If not contained in the document, it must be in a shadowRoot.
          // Ensure inert styles are added there.
          if (!this._document.body.contains(root)) {
            var parent = root.parentNode;
            while (parent) {
              if (parent.nodeType === 11) {
                addInertStyle(parent);
              }
              parent = parent.parentNode;
            }
          }
        } else {
          if (!this._inertRoots.has(root)) {
            // element is already non-inert
            return;
          }

          var _inertRoot = this._inertRoots.get(root);
          _inertRoot.destructor();
          this._inertRoots['delete'](root);
          root.removeAttribute('inert');
        }
      }

      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */

    }, {
      key: 'getInertRoot',
      value: function getInertRoot(element) {
        return this._inertRoots.get(element);
      }

      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */

    }, {
      key: 'register',
      value: function register(node, inertRoot) {
        var inertNode = this._managedNodes.get(node);
        if (inertNode !== undefined) {
          // node was already in an inert subtree
          inertNode.addInertRoot(inertRoot);
        } else {
          inertNode = new InertNode(node, inertRoot);
        }

        this._managedNodes.set(node, inertNode);

        return inertNode;
      }

      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */

    }, {
      key: 'deregister',
      value: function deregister(node, inertRoot) {
        var inertNode = this._managedNodes.get(node);
        if (!inertNode) {
          return null;
        }

        inertNode.removeInertRoot(inertRoot);
        if (inertNode.destroyed) {
          this._managedNodes['delete'](node);
        }

        return inertNode;
      }

      /**
       * Callback used when document has finished loading.
       */

    }, {
      key: '_onDocumentLoaded',
      value: function _onDocumentLoaded() {
        // Find all inert roots in document and make them actually inert.
        var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
        inertElements.forEach(function (inertElement) {
          this.setInert(inertElement, true);
        }, this);

        // Comment this out to use programmatic API only.
        this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
      }

      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */

    }, {
      key: '_watchForInert',
      value: function _watchForInert(records, self) {
        var _this = this;
        records.forEach(function (record) {
          switch (record.type) {
            case 'childList':
              slice.call(record.addedNodes).forEach(function (node) {
                if (node.nodeType !== Node.ELEMENT_NODE) {
                  return;
                }
                var inertElements = slice.call(node.querySelectorAll('[inert]'));
                if (matches.call(node, '[inert]')) {
                  inertElements.unshift(node);
                }
                inertElements.forEach(function (inertElement) {
                  this.setInert(inertElement, true);
                }, _this);
              }, _this);
              break;
            case 'attributes':
              if (record.attributeName !== 'inert') {
                return;
              }
              var target = /** @type {!HTMLElement} */record.target;
              var inert = target.hasAttribute('inert');
              _this.setInert(target, inert);
              break;
          }
        }, this);
      }
    }]);

    return InertManager;
  }();

  /**
   * Recursively walk the composed tree from |node|.
   * @param {!Node} node
   * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
   *     before descending into child nodes.
   * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
   */


  function composedTreeWalk(node, callback, shadowRootAncestor) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      var element = /** @type {!HTMLElement} */node;
      if (callback) {
        callback(element);
      }

      // Descend into node:
      // If it has a ShadowRoot, ignore all child elements - these will be picked
      // up by the <content> or <shadow> elements. Descend straight into the
      // ShadowRoot.
      var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
      if (shadowRoot) {
        composedTreeWalk(shadowRoot, callback);
        return;
      }

      // If it is a <content> element, descend into distributed elements - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'content') {
        var content = /** @type {!HTMLContentElement} */element;
        // Verifies if ShadowDom v0 is supported.
        var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
        for (var i = 0; i < distributedNodes.length; i++) {
          composedTreeWalk(distributedNodes[i], callback);
        }
        return;
      }

      // If it is a <slot> element, descend into assigned nodes - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'slot') {
        var slot = /** @type {!HTMLSlotElement} */element;
        // Verify if ShadowDom v1 is supported.
        var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
        for (var _i = 0; _i < _distributedNodes.length; _i++) {
          composedTreeWalk(_distributedNodes[_i], callback);
        }
        return;
      }
    }

    // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
    // element, nor a <shadow> element recurse normally.
    var child = node.firstChild;
    while (child != null) {
      composedTreeWalk(child, callback);
      child = child.nextSibling;
    }
  }

  /**
   * Adds a style element to the node containing the inert specific styles
   * @param {!Node} node
   */
  function addInertStyle(node) {
    if (node.querySelector('style#inert-style, link#inert-style')) {
      return;
    }
    var style = document.createElement('style');
    style.setAttribute('id', 'inert-style');
    style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
    node.appendChild(style);
  }

  if (!HTMLElement.prototype.hasOwnProperty('inert')) {
    /** @type {!InertManager} */
    var inertManager = new InertManager(document);

    Object.defineProperty(HTMLElement.prototype, 'inert', {
      enumerable: true,
      /** @this {!HTMLElement} */
      get: function get() {
        return this.hasAttribute('inert');
      },
      /** @this {!HTMLElement} */
      set: function set(inert) {
        inertManager.setInert(this, inert);
      }
    });
  }
})();

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const NAVIGATION_DRAWER_TYPE = {
  standard: 'standard',
  modal: 'modal',
};

class NavigationDrawer extends BaseStateElement {
  static get properties() {
    return {
      type: {type: String, reflect: true},
      open: {type: Boolean, reflect: true},
      animating: {type: Boolean, reflect: true},
    };
  }

  set open(val) {
    if (this._open === val) {
      return;
    }

    const oldVal = this._open;
    this._open = val;
    this.animating = true;
    if (this._open) {
      document.addEventListener('keyup', this.onKeyUp);
    }
    this.addEventListener('transitionend', this.onTransitionEnd);
    this.requestUpdate('open', oldVal);
  }

  get open() {
    return this._open;
  }

  constructor() {
    super();

    this.type = null;
    this._open = false;
    this.animating = false;

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  connectedCallback() {
    this.tabIndex = -1;

    if (this.type === NAVIGATION_DRAWER_TYPE.modal) {
      this.inert = true;
    }

    /** @type HTMLElement */
    this.drawerContainer = this.querySelector('[data-drawer-container]');
    /** @type HTMLElement */
    this.closeBtn = this.querySelector('[data-drawer-close-button]');

    this.addEventListeners();
    super.connectedCallback();
  }

  addEventListeners() {
    this.drawerContainer.addEventListener('click', this.onBlockClicks);
    this.closeBtn.addEventListener('click', closeNavigationDrawer);
    this.addEventListener('click', closeNavigationDrawer);
  }

  onStateChanged({isNavigationDrawerOpen, currentUrl}) {
    this.open = isNavigationDrawerOpen;

    if (currentUrl) {
      // Ensure that the "active" attribute is applied to any matching header
      // link, or to none (for random subpages or articles).
      currentUrl = currentUrl.replace(/"/g, '\\"');
      currentUrl = (currentUrl.match(/^\/\w+\//) || [''])[0];

      const active = this.querySelector('[active]');
      const updated = this.querySelector(`[href="${currentUrl}"]`);

      if (active === updated) {
        return;
      }

      if (active) {
        active.removeAttribute('active');
        active.removeAttribute('aria-current');
      }

      if (updated) {
        updated.setAttribute('active', '');
        updated.setAttribute('aria-current', 'page');
      }
    }
  }

  onBlockClicks(e) {
    // When the NavigationDrawer is expanded we use a ::before element to render
    // the overlay. Because the ::before element is a child of NavigationDrawer,
    // and covers the entire page, we add a listener to NavigationDrawer to see
    // if it was clicked on.
    // If a link within the NavigationDrawer was clicked, we allow the click to
    // happen so the router can know about it.
    // If the NavigationDrawer's container was clicked, we block the click so
    // the NavigationDrawer won't collapse.
    // If the click was outside of the container/on the overlay, we close the
    // NavigationDrawer.
    const link = e.target.closest('a');
    if (!link) {
      e.stopPropagation();
    }
  }

  onTransitionEnd(e) {
    if (e.target !== this) {
      return;
    }

    this.animating = false;
    // If the NavigationDrawer is expanded we need to move focus into the element so
    // folks using a screen reader or switch can access it.
    if (this.open) {
      this.focus();
    } else {
      // When the NavigationDrawer is collapsed, we need to restore focus to the
      // hamburger button in the header. It might be more techincally pure to
      // use a unistore action for this, but it feels like a lot of ceremony
      // for a small behavior.
      /** @type {import('../Header').Header} */
      const webHeader = document.querySelector('web-header');
      if (webHeader) {
        webHeader.manageFocus();
      }
    }
    this.inert = !this.open;
    this.removeEventListener('transitionend', this.onTransitionEnd);
  }

  onKeyUp(e) {
    if (e.key === 'Escape') {
      closeNavigationDrawer();
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }
}

customElements.define('web-navigation-drawer', NavigationDrawer);

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const OPENING_ANIMATION_TIME = 150;
const CLOSING_ANIMATION_TIME = 75;

class Snackbar extends BaseElement {
  static get properties() {
    return {
      animatable: {type: Boolean, reflect: true},
      stacked: {type: Boolean, reflect: true},
      type: {type: String},
      onAccept: {type: Object}, // onAccept is a Function
      onReject: {type: Object}, // onReject is a Function
    };
  }

  constructor() {
    super();
    this.onAccept = null;
    this.onReject = null;
    this.type = null;
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    let ms;
    if (val) {
      this.setAttribute('open', '');
      ms = OPENING_ANIMATION_TIME;
    } else {
      this.removeAttribute('open');
      ms = CLOSING_ANIMATION_TIME;
    }

    this.animatable = true;
    setTimeout(() => (this.animatable = false), ms);
  }

  get cookiesTemplate() {
    return $$1`
      <div class="web-snackbar__label" role="status">
        web.dev uses cookies to deliver and enhance the quality of its services
        and to analyze traffic. If you agree, cookies are also used to serve
        advertising and to personalize the content and advertisements that you
        see.
        <a href="https://policies.google.com/technologies/cookies">
          Learn more.
        </a>
      </div>
      <div class="web-snackbar__actions cluster gutter-base">
        <button @click=${this.onAccept} class="button button--action">
          Agree
        </button>
        <button @click=${this.onReject} class="button">No thanks</button>
      </div>
    `;
  }

  render() {
    let template;
    switch (this.type) {
      case 'cookies':
        template = this.cookiesTemplate;
        break;
    }

    return $$1` <div class="web-snackbar__surface flow">${template}</div> `;
  }
}

customElements.define('web-snackbar', Snackbar);

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class SnackbarContainer extends BaseElement {
  static get properties() {
    return {
      open: {type: Boolean},
      type: {type: String},
    };
  }

  constructor() {
    super();
    this.onBeforeInstallPrompt = this.onBeforeInstallPrompt.bind(this);
    this.onStateChanged = this.onStateChanged.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    checkIfUserAcceptsCookies();
    store.subscribe(this.onStateChanged);
    this.onStateChanged();

    window.addEventListener('beforeinstallprompt', this.onBeforeInstallPrompt);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.unsubscribe(this.onStateChanged);
    window.removeEventListener(
      'beforeinstallprompt',
      this.onBeforeInstallPrompt,
    );
  }

  onBeforeInstallPrompt(e) {
    if (!this.cookiePreference) {
      e.preventDefault();
    }
  }

  onStateChanged() {
    const state = store.getState();
    this.open = state.showingSnackbar;
    this.type = state.snackbarType;
    this.cookiePreference = state.cookiePreference;
  }

  render() {
    let onAccept;
    let onReject;
    let isStacked;
    switch (this.type) {
      case 'cookies':
        onAccept = setUserAcceptsCookies;
        onReject = setUserRejectsCookies;
        isStacked = true;
        break;
    }

    return $$1`
      <web-snackbar
        .type="${this.type}"
        .open="${this.open}"
        .stacked="${isStacked}"
        .onAccept="${onAccept}"
        .onReject="${onReject}"
      ></web-snackbar>
    `;
  }
}

customElements.define('web-snackbar-container', SnackbarContainer);

/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Element that allows a user to toggle the current theme.
 * @extends {HTMLElement}
 * @final
 */
class ThemeToggle extends HTMLElement {
  constructor() {
    super();

    this.STORAGE_KEY = 'user-color-scheme';
    this.COLOR_MODE_KEY = '--color-mode';
  }

  connectedCallback() {
    this.toggleSwitch = this.querySelector('[role="switch"]');

    if (this.toggleSwitch) {
      // On change, calculate the new setting, toggle state changes and store in storage
      this.toggleSwitch.addEventListener('change', () => {
        const setting = this.toggleSwitch.checked ? 'dark' : 'light';
        this.applySetting(setting);
        localStorage.setItem(this.STORAGE_KEY, setting);
      });

      this.applySetting();
    }
  }

  applySetting(passedSetting) {
    // Attempts to load the setting from local storage
    const currentSetting =
      passedSetting || localStorage.getItem(this.STORAGE_KEY);

    if (currentSetting) {
      this.setToggleSwitchStatus(currentSetting);
      window.applyThemeSetting(currentSetting);
    }
    // If no storage setting, we set up media query-based state change
    else {
      // Set the checkbox to on if we're already in dark preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setToggleSwitchStatus('dark');
      }

      // Listen for changes to the preference and set checkbox state accordingly
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (evt) => {
          this.setToggleSwitchStatus(evt.matches ? 'dark' : 'light');
        });
    }
  }

  // Sets the correct aria checked role and checked state
  setToggleSwitchStatus(currentSetting) {
    const isDarkMode = currentSetting === 'dark';
    this.toggleSwitch.setAttribute(
      'aria-checked',
      isDarkMode ? 'true' : 'false',
    );

    this.toggleSwitch.checked = isDarkMode;
  }
}

if ('customElements' in window) {
  customElements.define('theme-toggle', ThemeToggle);
}

/**
 * A simple debounce util for ensuring a function only gets called once during
 * a particular interval.
 * @param {!Function} func A function to debounce based on the wait time.
 * @param {!number} wait Time in milliseconds to wait before invoking function.
 * @return {() => void | Promise<void> | TODO} A debounced copy of the function.
 */
const debounce = (func, wait) => {
  if (!func) {
    throw new TypeError('func is a required argument.');
  }

  if (!wait) {
    throw new TypeError('wait is a required argument.');
  }

  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * @fileoverview An Algolia search box.
 */

let algoliaIndexPromise;

function loadAlgoliaLibrary() {
  algoliaIndexPromise = algoliaIndexPromise || internalLoadAlgoliaLibrary();
  return algoliaIndexPromise;
}

async function internalLoadAlgoliaLibrary() {
  const {default: algoliasearch} = await import(
    './algoliasearch-lite.esm.browser-e1b03016.js'
  );
  // Create an algolia client so we can get search results.
  // These keys are safe to be public.
  const applicationID = '2JPAZHQ6K7';
  const apiKey = 'ac32acde5503ed0ab18332e0592e9919';
  const indexName = 'prod_web_dev';
  const client = algoliasearch(applicationID, apiKey);
  const index = client.initIndex(indexName);
  return index;
}

/**
 * An Algolia search box.
 * @extends {BaseStateElement}
 * @final
 */
class Search extends BaseStateElement {
  static get properties() {
    return {
      // Manages the expanded/collapsed state of the UI.
      expanded: {type: Boolean, reflect: true},
      // An array of algolia results.
      hits: {type: Object},
      // Manages showing/hiding the search results popout.
      showHits: {type: Boolean},
      // Locale to use for search
      locale: {type: String},
      // Search query
      query: {type: String},
      // Tag to filter the search results by.
      tag: {type: String},
      // Translations for strings displayed by this component
      i18n: {type: Object},
    };
  }

  constructor() {
    super();
    this.hits = [];
    this.showHits = false;
    this.query = '';
    this.tag = '';
    this.timeout;
    this.expanded = false;
    this.locale = 'en';
    this.resultsEl;
    this.i18n = {};

    // On smaller screens we don't do an animation so it's ok for us to fire off
    // actions immediately. On larger screens we need to wait for the searchbox
    // to fully expand/animate before we fire off actions.
    // So we need to figure out our screen size and keep track of it if changes.
    // We debounce this because the handler triggers style recalc.
    this.onResize = debounce(this.onResize.bind(this), 200);

    // Debounce the method we use to search Algolia so we don't waste calls
    // while the user is typing.
    this.search = debounce(this.search.bind(this), 200);

    this.onResultSelect = this.onResultSelect.bind(this);
  }

  onStateChanged({currentLanguage}) {
    this.locale = currentLanguage;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.onResize);
    this.onResize();
    // Note: We only check for the existence of the resultsEl here in
    // connectedCalback. This means if the resultsEl is added later, or
    // if the JavaScript for the search component is inlined into the head,
    // then this will run _before_ resultsEl exists.
    this.resultsEl = document.getElementById(this.getAttribute('results-id'));
    if (this.resultsEl) {
      // ts requires us to cast the event listener if it's handling custom
      // events.
      // https://github.com/Microsoft/TypeScript/issues/28357
      this.resultsEl.addEventListener(
        'resultselect',
        /** @type {EventListener} */ (this.onResultSelect),
      );
    } else {
      console.warn(`No search results element found for ${this}`);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.onResize);
    if (this.resultsEl) {
      this.resultsEl.removeEventListener(
        'resultselect',
        /** @type {EventListener} */ (this.onResultSelect),
      );
    }
  }

  render() {
    const i18n = this.i18n;
    const locale = this.locale;
    const placeholder = i18n.search[locale] || i18n.search['en'];
    const open_search = i18n.open_search[locale] || i18n.open_search['en'];
    const all_articles = i18n.all_articles[locale] || i18n.all_articles['en'];
    return $$1`
      <button
        class="web-search__open-btn icon-button color-mid-text"
        @click="${this.onOpenSearch}"
        aria-label="${open_search}"
      >
        <svg
          class="web-search__search-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </button>
      <div
        class="web-search__input-wrapper"
        role="combobox"
        aria-expanded="${this.expanded}"
        aria-controls="web-search__input"
        aria-owns="${this.resultsEl.id}-list"
        aria-haspopup="listbox"
      >
        <input
          id="web-search__input"
          class="web-search__input"
          type="text"
          role="searchbox"
          autocomplete="off"
          aria-autocomplete="list"
          aria-controls="${this.resultsEl.id}-list"
          aria-label="${all_articles}"
          placeholder="${placeholder}"
          @keydown="${this.onKeyDown}"
          @input="${this.onInput}"
          @focusin="${this.onFocusIn}"
          @focusout="${this.onFocusOut}"
        />
      </div>
    `;
  }

  firstUpdated() {
    /** @type HTMLInputElement */
    this.inputEl = this.renderRoot.querySelector('.web-search__input');
  }

  /**
   * Passes on updated search properties to the search results element.
   * @param {Map} changedProperties A Map of LitElement properties that changed.
   */
  updated(changedProperties) {
    // Reflect changed properties to the results el.
    const sharedProperties = ['query', 'hits', 'showHits'];
    sharedProperties.forEach((property) => {
      if (changedProperties.has(property)) {
        this.resultsEl[property] = this[property];
      }
    });
  }

  /**
   * Grab the animation custom property to infer how long our javascript should
   * wait before doing state changes.
   */
  onResize() {
    const styles = getComputedStyle(this);
    const value = styles.getPropertyValue('--web-search-animation-time');
    // value will either be "200ms" or "0".
    this.animationTime = parseInt(value, 10);
  }

  /**
   * Keep track of which result is selected in the search results element and
   * reflect them to aria-activedescendant.
   * This ensures screen readers properly announce the current search result.
   * We do this because focus never leaves the search input box, so when the
   * user is arrowing through results, we have to tell the screen reader about
   * it.
   * @param {CustomEvent} event Select event fired by search results element.
   */
  onResultSelect(event) {
    const selected = event.detail.selected;
    if (!selected || !selected.id) {
      this.inputEl.removeAttribute('aria-activedescendant');
      return;
    }
    this.inputEl.setAttribute('aria-activedescendant', selected.id);
  }

  onKeyDown(e) {
    const navigationKeys = [
      'Home',
      'End',
      'Up',
      'ArrowUp',
      'Down',
      'ArrowDown',
      'Enter',
    ];
    // Check if the user is navigating within the search popout.
    if (navigationKeys.includes(e.key)) {
      e.preventDefault();
      /** @type {WebSearchResults} */ (this.resultsEl).navigate(e.key);
    }
    if (['Esc', 'Escape'].includes(e.key)) {
      /** @type HTMLElement */ (document.activeElement).blur();
      return;
    }
  }

  onInput(e) {
    this.search(e.target.value);
  }

  /**
   * Search algolia using the provided query.
   * Note, we bind and debounce this function in the constructor to avoid
   * spamming algolia as the user types.
   * @param {string} query The text to query algolia for.
   */
  async search(query) {
    // Cache a copy of the query.
    // We'll check against this copy when results come back to ensure
    // we don't show search results for a stale query.
    this.query = query;
    if (query === '') {
      this.hits = [];
      return;
    }
    try {
      const index = await loadAlgoliaLibrary();
      const settings = {
        hitsPerPage: 10,
        attributesToHighlight: ['title'],
        attributesToRetrieve: ['url', 'parentTitle'],
        highlightPreTag: '<strong>',
        highlightPostTag: '</strong>',
        facetFilters: [`locales:${this.locale}`],
        attributesToSnippet: ['content:20'],
        snippetEllipsisText: '...',
      };
      if (this.tag) {
        settings.facetFilters.push(`tags:${this.tag}`);
      }
      const {hits} = await index.search(query, settings);
      if (this.query === query) {
        this.hits = hits;
      }
    } catch (err) {
      console.error(err);
      console.error(err.debugData);
      logError(err, 'search');
    }
  }

  /**
   * Empty out the search field.
   */
  clear() {
    this.inputEl.value = '';
    this.inputEl.removeAttribute('aria-activedescendant');
    this.query = '';
  }

  /**
   * Expand the search box.
   */
  onOpenSearch() {
    this.expanded = true;
    // Set state here even though it'll happen again during onFocusIn.
    // If we wait until onFocusIn the animation has a bit of jank to it.
    store.setState({isSearchExpanded: true});
    this.requestUpdate();
    this.updateComplete.then(() => {
      this.inputEl.focus();
    });
  }

  /**
   * Collapse the search box.
   */
  onCloseSearch() {
    this.expanded = false;
  }

  /**
   * Animate the search box open.
   */
  onFocusIn() {
    loadAlgoliaLibrary().catch((err) => {
      console.error('failed to load Algolia', err);
      logError(err, 'algolia load');
    });
    this.expanded = true;

    // Wait for the expanding animation to finish before hiding the header
    // links and allowing overflow content.
    // Keep a reference to the timeout in case the user tabs out quickly.
    // In that scenario, we'll use onFocusOut to kill the timeout.
    this.timeout = setTimeout(() => {
      store.setState({isSearchExpanded: true});
      this.showHits = true;
    }, this.animationTime);
  }

  /**
   * Animate the search box closed.
   * See internal comments for side-effects.
   * @param {FocusEvent} e focusout event object.
   */
  onFocusOut(e) {
    // Check if the user's focus is moving to something that they just clicked
    // on. If so, programatically click it before closing the popout.
    // Because focusout fires before click, if we try to wait for the click
    // event (~10's of ms later) then lit will have already deleted the link.
    const relatedTarget = /** @type HTMLElement */ (e.relatedTarget);
    if (relatedTarget && this.resultsEl.contains(relatedTarget)) {
      relatedTarget.click();
    }

    // If the user is tabbing quickly through the header then they may have
    // started the animation but tabbed out before it completed.
    // In that scenario, kill the animation timeout to avoid invalid state.
    clearTimeout(this.timeout);

    store.setState({isSearchExpanded: false});
    this.expanded = false;
    this.showHits = false;
    this.hits = [];
    this.clear();
  }
}

customElements.define('web-search', Search);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=w$1,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w$1||null==r)return this.ft=void 0,this.it=r;if(r===b$1)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this.ft;this.it=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/**
 * Sanitize an HTML string by escaping < and > characters.
 * @param {string} str A string to sanitize
 * @return {string}
 */
const escapeHtml = (str) => {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

/**
 * Allow a specific tag to be unescaped.
 * @param {string} str A string which has already been escaped
 * @param {string} tag The html tag to allow. E.g. "strong"
 * @return {string}
 */
const allowHtml = (str, tag) => {
  const open = new RegExp(`&lt;${tag}&gt;`, 'g');
  const close = new RegExp(`&lt;/${tag}&gt;`, 'g');
  return str.replace(open, `<${tag}>`).replace(close, `</${tag}>`);
};

/**
 * @fileoverview An Algolia search box.
 */

/**
 * An Algolia search box.
 * @extends {BaseElement}
 * @final
 */
class SearchResults extends BaseElement {
  static get properties() {
    return {
      // An array of algolia results.
      hits: {type: Object},
      // An internal array of algolia results (observable).
      hits_: {type: Object},
      // Manages showing/hiding the search results element.
      showHits: {type: Boolean},
      // Indicates which search result should be highlighted.
      // Primarily used for keyboard behavior.
      cursor: {type: Number},
    };
  }

  constructor() {
    super();
    this.hits = [];
    this.hits_ = [];
    this.showHits = false;
    this.cursor = -1;
    this.query = '';
  }

  set hits(hits) {
    this.hits_ = hits;
    this.cursor = -1;
  }

  /**
   * Allows to select and navigate to a search result using keyboard keys.
   * @param {String} key Key identifier
   */
  navigate(key) {
    switch (key) {
      case 'Home':
        this.firstHit();
        return;

      case 'End':
        this.lastHit();
        return;

      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        this.prevHit();
        return;

      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        this.nextHit();
        return;

      case 'Enter':
        const hit = this.hits_[this.cursor];
        if (hit) {
          this.navigateToHit(hit);
        }
        return;
    }
  }

  firstHit() {
    this.cursor = 0;
    this.scrollHitIntoView();
  }

  lastHit() {
    this.cursor = this.hits_.length - 1;
    this.scrollHitIntoView();
  }

  nextHit() {
    this.cursor = (this.cursor + 1) % this.hits_.length;
    this.scrollHitIntoView();
  }

  prevHit() {
    if (this.cursor === -1) {
      this.cursor = this.hits_.length - 1;
    } else {
      this.cursor = (this.cursor - 1 + this.hits_.length) % this.hits_.length;
    }
    this.scrollHitIntoView();
  }

  /**
   * Waits for LitElement to render, then attempts to scroll the current active
   * link into view. This is done because focus never leaves the input field
   * since the user may still be typing their query. As a result, we need to
   * tell the browser to scroll if the user has arrowed down to a hit that has
   * overflown the container.
   */
  scrollHitIntoView() {
    this.requestUpdate();
    this.updateComplete.then(() => {
      const selected = this.renderRoot.querySelector('[aria-selected="true"]');
      selected.scrollIntoView({block: 'nearest'});
      this.dispatchEvent(new CustomEvent('resultselect', {detail: {selected}}));
    });
  }

  /**
   * Tells the page to navigate to the url.
   * @param {{url:string}} url A URL data object.
   */
  navigateToHit({url}) {
    window.location.href = url;
  }

  /* eslint-disable indent */
  render() {
    if (!this.showHits) {
      return $$1`
        <div id="${this.id}-list" role="listbox" aria-hidden="true"></div>
      `;
    }

    if (!this.hits_.length) {
      if (!this.query) {
        return '';
      }

      // This is intentionally NOT "site:web.dev", as users can have a broader
      // result set that way. We tend to come up first regardless.
      const query = 'web.dev ' + this.query.trim();
      const searchUrl =
        'https://google.com/search?q=' + window.encodeURIComponent(query);
      return $$1`
        <div class="web-search-popout">
          <div class="web-search-popout__heading">
            There are no suggestions for your query&mdash;try
            <a
              data-category="web.dev"
              data-label="search, open Google"
              data-action="click"
              target="_blank"
              tabindex="-1"
              href=${searchUrl}
            >
              Google search
            </a>
          </div>
        </div>
      `;
    }

    return $$1`
      <div class="web-search-popout over-scroll">
        <ul id="${this.id}-list" class="stack-nav" aria-label="search results">
          ${this.itemsTemplate}
        </ul>
      </div>
    `;
  }

  get itemsTemplate() {
    // Note that our anchors have tabindex=-1 to prevent them from
    // being focused.
    // This is intentional because focus needs to stay in the input field.
    // When the user is pressing arrow keys, we use a virtual cursor and
    // aria-activedescendant to indicate the active anchor.
    return this.hits_.map((hit, idx) => {
      if (!hit._highlightResult.title || !hit._highlightResult.title.value) {
        return $$1``;
      }

      const title = this.formatAlgoliaValue(hit._highlightResult.title.value);
      return $$1`
        <li>
          <a
            id="${this.id}-link-${idx}"
            aria-selected="${idx === this.cursor}"
            tabindex="-1"
            href="${hit.url}"
          >
            ${o(title)}
            ${hit.parentTitle !== null
              ? $$1`<div class="web-search-popout__parent-title">
                  ${o(hit.parentTitle)}
                </div>`
              : ''}
          </a>
        </li>
      `;
    });
  }

  formatAlgoliaValue(value) {
    // Escape any html entities in the title except for <strong> tags.
    // Algolia sends back <strong> tags in the title which help highlight
    // the characters that match what the user has typed.
    value = allowHtml(escapeHtml(value), 'strong');
    // Strip backticks as they look a bit ugly in the results.
    return value.replace(/`/g, '');
  }

  /* eslint-enable indent */
}

customElements.define('web-search-results', SearchResults);

export { $$1 as $, BaseElement as B, SearchResults as S, logEvent as a, debounce as d, logError as l, o };
