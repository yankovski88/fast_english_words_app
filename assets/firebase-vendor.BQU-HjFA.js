var e={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,h=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==a||null==c)throw new r;const u=t<<2|o>>4;if(s.push(u),64!==a){const e=o<<4&240|a>>2;if(s.push(e),64!==c){const e=a<<6&192|c;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")},i=function(e){try{return n.decodeString(e,!0)}catch(t){}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a=()=>{try{return o().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===e)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&i(e[1]);return t&&JSON.parse(t)})()}catch(t){return}},c=()=>{var e;return null==(e=a())?void 0:e.config},u=e=>{var t;return null==(t=a())?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function d(e){return(await fetch(e,{credentials:"include"})).ok}const f={};let p=!1;function m(e,t){if("undefined"==typeof window||"undefined"==typeof document||!l(window.location.host)||f[e]===t||f[e]||p)return;function n(e){return"__firebase__banner__"+e}f[e]=t;const r=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(f))f[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{p=!0,function(){const e=document.getElementById("__firebase__banner");e&&e.remove()}()},e}function i(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}("__firebase__banner"),t=n("text"),i=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),a=document.getElementById(o)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(a,o);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,i,a,n),document.body.appendChild(t)}r?(i.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",i):i()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){var e;const t=null==(e=a())?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}function v(){return!y()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return!y()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(_,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new b(r,o,n)}}const _=/\{\$([^}]+)}/g;function T(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(S(n)&&S(i)){if(!T(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function S(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function k(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e&&e._delegate?e._delegate:e}class R{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new h;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=(null==e?void 0:e.optional)??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class O{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new P(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,M;(M=L||(L={}))[M.DEBUG=0]="DEBUG",M[M.VERBOSE=1]="VERBOSE",M[M.INFO=2]="INFO",M[M.WARN=3]="WARN",M[M.ERROR=4]="ERROR",M[M.SILENT=5]="SILENT";const V={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},F=L.INFO,U={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},B=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!U[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class j{constructor(e){this.name=e,this._logLevel=F,this._logHandler=B,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?V[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}let z,q;const K=new WeakMap,G=new WeakMap,$=new WeakMap,H=new WeakMap,W=new WeakMap;let Q={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return G.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return X(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function J(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Z(this),t),X(K.get(this))}:function(...t){return X(e.apply(Z(this),t))}:function(t,...n){const r=e.call(Z(this),t,...n);return $.set(r,t.sort?t.sort():[t]),X(r)}}function Y(e){return"function"==typeof e?J(e):(e instanceof IDBTransaction&&function(e){if(G.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});G.set(e,t)}(e),t=e,(z||(z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Q):e);var t}function X(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(X(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&K.set(t,e)}).catch(()=>{}),W.set(t,e),t}(e);if(H.has(e))return H.get(e);const t=Y(e);return t!==e&&(H.set(e,t),W.set(t,e)),t}const Z=e=>W.get(e);const ee=["get","getKey","getAll","getAllKeys","count"],te=["put","add","delete","clear"],ne=new Map;function re(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ne.get(t))return ne.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=te.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ee.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return ne.set(t,i),i}Q=(e=>({...e,get:(t,n,r)=>re(t,n)||e.get(t,n,r),has:(t,n)=>!!re(t,n)||e.has(t,n)}))(Q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const ie="@firebase/app",oe=new j("@firebase/app"),ae={[ie]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},ce=new Map,ue=new Map,he=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){oe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function de(e){const t=e.name;if(he.has(t))return oe.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of ce.values())le(n,e);for(const n of ue.values())le(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new E("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new R("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:"[DEFAULT]",automaticDataCollectionEnabled:!0,...t},s=r.name;if("string"!=typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=c()),!n)throw me.create("no-options");const i=ce.get(s);if(i){if(T(n,i.options)&&T(r,i.config))return i;throw me.create("duplicate-app",{appName:s})}const o=new O(s);for(const c of he.values())o.addComponent(c);const a=new ge(n,r,o);return ce.set(s,a),a}function ve(e,t,n){let r=ae[e]??e;n&&(r+="-"+n);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void oe.warn(e.join(" "))}de(new R(r+"-version",()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="firebase-heartbeat-store";let Ie=null;function be(){return Ie||(Ie=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=X(o);return r&&o.addEventListener("upgradeneeded",e=>{r(X(o.result),e.oldVersion,e.newVersion,X(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(we)}catch(n){}}}}).catch(e=>{throw me.create("idb-open",{originalErrorMessage:e.message})})),Ie}async function Ee(e,t){try{const n=(await be()).transaction(we,"readwrite"),r=n.objectStore(we);await r.put(t,_e(e)),await n.done}catch(n){if(n instanceof b)oe.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});oe.warn(e.message)}}}function _e(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ce(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Se();if(null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){oe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Se(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),ke(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ke(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return oe.warn(t),""}}}function Se(){return(new Date).toISOString().substring(0,10)}class Ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!I()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null==(e=s.error)?void 0:e.message)||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await be()).transaction(we),n=await t.objectStore(we).get(_e(e));return await t.done,n}catch(t){if(t instanceof b)oe.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});oe.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Ee(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Ee(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ke(e){return s(JSON.stringify({version:2,heartbeats:e})).length}var Ae;Ae="",de(new R("platform-logger",e=>new se(e),"PRIVATE")),de(new R("heartbeat",e=>new Te(e),"PRIVATE")),ve(ie,"0.14.9",Ae),ve(ie,"0.14.9","esm2020"),ve("fire-js","");var Ne,De,xe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var s=0;s<16;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];let i,o=e.g[3];i=t+(o^n&(s^o))+r[0]+3614090360&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[2]+606105819&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[3]+3250441966&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[4]+4118548399&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[6]+2821735955&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[7]+4249261313&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[8]+1770035416&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[10]+4294925233&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[11]+2304563134&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[12]+1804603682&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[14]+2792965006&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[15]+1236535329&4294967295,i=t+(s^o&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[11]+643717713&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[0]+3921069994&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[15]+3634488961&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[4]+3889429448&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[3]+4107603335&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[8]+1163531501&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[7]+1735328473&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[12]+2368359562&4294967295,i=t+((n=s+(i<<20&4294967295|i>>>12))^s^o)+r[5]+4294588738&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[11]+1839030562&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[14]+4259657740&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[1]+2763975236&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[7]+4139469664&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[10]+3200236656&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[13]+681279174&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[3]+3572445317&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[6]+76029189&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[9]+3654602809&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[15]+530742520&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[2]+3299628645&4294967295,i=t+(s^((n=s+(i<<23&4294967295|i>>>9))|~o))+r[0]+4096336452&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[14]+2878612391&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[5]+4237533241&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[12]+1700485571&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[10]+4293915773&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[1]+2240044497&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[8]+1873313359&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[6]+2734768916&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[13]+1309151649&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[4]+4149444226&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[2]+718787259&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,(function(){this.blockSize=-1})),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,s=this.C;let i=this.h,o=0;for(;o<t;){if(0==i)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(s[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<t;)if(s[i++]=e[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var s={};function i(e){return-128<=e&&e<128?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],e<0?-1:0)})):new r([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(e<0)return d(o(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var a=i(0),c=i(1),u=i(16777216);function h(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(h(t))throw Error("division by zero");if(h(e))return new m(a,a);if(l(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(l(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(l(e)||l(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;r.l(e)<=0;)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=i.add(r);u.l(e)<=0&&(s=s.add(n),i=u),r=v(r,1),n=v(n,1)}return t=f(e,s.j(t)),new m(s,t)}for(s=a;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(i=o(n)).j(t);l(u)||u.l(e)>0;)u=(i=o(n-=r)).j(t);h(i)&&(i=c),s=s.add(i),e=f(e,u)}return new m(s,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const s=e.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(l(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(l(this))return"-"+d(this).toString(e);const t=o(Math.pow(e,6));var n=this;let r="";for(;;){const s=g(n,t).g;let i=(((n=f(n,s.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(h(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return l(e=f(this,e))?-1:h(e)?0:1},e.abs=function(){return l(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let s=0;for(let r=0;r<=t;r++){let t=s+(65535&this.i(r))+(65535&e.i(r)),i=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);s=i>>>16,t&=65535,i&=65535,n[r]=i<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(l(this))return l(e)?d(this).j(d(e)):d(d(this).j(e));if(l(e))return d(this.j(d(e)));if(this.l(u)<0&&e.l(u)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let t=0;t<e.g.length;t++){const r=this.i(s)>>>16,i=65535&this.i(s),o=e.i(t)>>>16,a=65535&e.i(t);n[2*s+2*t]+=i*a,p(n,2*s+2*t),n[2*s+2*t+1]+=r*a,p(n,2*s+2*t+1),n[2*s+2*t+1]+=i*o,p(n,2*s+2*t+1),n[2*s+2*t+2]+=r*o,p(n,2*s+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,De=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let s=a;for(let a=0;a<t.length;a+=8){var i=Math.min(8,t.length-a);const e=parseInt(t.substring(a,a+i),n);i<8?(i=o(Math.pow(n,i)),s=s.j(i).add(o(e))):(s=s.j(r),s=s.add(o(e)))}return s},Ne=r}).apply(void 0!==xe?xe:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Re,Pe,Oe,Le,Me,Ve,Fe,Ue,Be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Be&&Be];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",(function(e){return e||Symbol("Symbol.dispose")})),r("Array.prototype.values",(function(e){return e||function(){return this[Symbol.iterator]()}})),r("Object.entries",(function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var s=s||{},i=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){return(c=a).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function p(e){i.setTimeout(()=>{throw e},0)}function m(){var e=I;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,I=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},b=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=m();){try{e.h.call(e.g)}catch(n){p(n)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function _(){this.u=this.u,this.C=this.C}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function k(e,t){T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}h(k,T),k.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&k.Z.h.call(this)},k.prototype.h=function(){k.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var A="closure_listenable_"+(1e6*Math.random()|0),N=0;function D(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++N,this.da=this.fa=!1}function x(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function R(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<O.length;t++)n=O[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function M(e){this.src=e,this.g={},this.h=0}function V(e,t){const n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(x(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function F(e,t,n,r){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}M.prototype.add=function(e,t,n,r,s){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const o=F(e,t,r,s);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new D(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var U="closure_lm_"+(1e6*Math.random()|0),B={};function j(e,t,n,r,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)j(e,t[i],n,r,s);return null}return n=H(n),e&&e[A]?e.J(t,n,!!o(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let c=G(e);if(c||(e[U]=c=new M(e)),(n=c.add(t,n,r,a,i)).proxy)return n;if(r=function(){const e=K;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)S||(s=a),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function z(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[A])V(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=G(t))?(V(n,e),0==n.h&&(n.src=null,t[U]=null)):x(e)}}}function q(e){return e in B?B[e]:B[e]="on"+e}function K(e,t){if(e.da)e=!0;else{t=new k(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&z(e),e=n.call(r,t)}return e}function G(e){return(e=e[U])instanceof M?e:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function H(e){return"function"==typeof e?e:(e[$]||(e[$]=function(t){return e.handleEvent(t)}),e[$])}function W(){_.call(this),this.i=new M(this),this.M=this,this.G=null}function Q(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var s=t;L(t=new T(r,e),s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=t.g=n[o],s=J(i,r,!0,t)&&s;if(i=t.g=e,s=J(i,r,!0,t)&&s,s=J(i,r,!1,t)&&s,n)for(o=0;o<n.length;o++)i=t.g=n[o],s=J(i,r,!1,t)&&s}function J(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const o=t[i];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&V(e.i,o),s=!1!==t.call(n,r)&&s}}return s&&!r.defaultPrevented}function Y(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,Y(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(W,_),W.prototype[A]=!0,W.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,s,i){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,s,i);else s=o(s)?!!s.capture:!!s,r=H(r),t&&t[A]?(t=t.i,(a=String(n).toString())in t.g&&((r=F(n=t.g[a],r,s,i))>-1&&(x(n[r]),Array.prototype.splice.call(n,r,1),0==n.length&&(delete t.g[a],t.h--)))):t&&(t=G(t))&&(n=t.g[n.toString()],t=-1,n&&(t=F(n,r,s,i)),(r=t>-1?n[t]:null)&&z(r))}(this,e,t,n,r)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)x(n[e]);delete e.g[t],e.h--}}this.G=null},W.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},W.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class X extends _{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(e){_.call(this),this.h=e,this.g={}}h(Z,_);var ee=[];function te(e){R(e.g,(function(e,t){this.g.hasOwnProperty(t)&&z(e)}),e),e.g={}}Z.prototype.N=function(){Z.Z.N.call(this),te(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ne=i.JSON.stringify,re=i.JSON.parse;function se(){}function ie(){}var oe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ae(){T.call(this,"d")}function ce(){T.call(this,"c")}h(ae,T),h(ce,T);var ue={},he=null;function le(){return he=he||new W}function de(e){T.call(this,ue.Ia,e)}function fe(e){const t=le();Q(t,new de(t))}function pe(e,t){T.call(this,ue.STAT_EVENT,e),this.stat=t}function me(e){const t=le();Q(t,new pe(t,e))}function ge(e,t){T.call(this,ue.Ja,e),this.size=t}function ye(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function ve(){this.g=!0}function we(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<r.length;e++)r[e]=""}}}return ne(i)}catch(i){return t}}(e,n)+(r?" "+r:"")}))}ue.Ia="serverreachability",h(de,T),ue.STAT_EVENT="statevent",h(pe,T),ue.Ja="timingevent",h(ge,T),ve.prototype.ua=function(){this.g=!1},ve.prototype.info=function(){};var Ie,be={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ee={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function _e(){}function Te(e){return encodeURIComponent(String(e))}function Se(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ce(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}h(_e,se),_e.prototype.g=function(){return new XMLHttpRequest},Ie=new _e;var Ae={},Ne={};function De(e,t,n){e.M=1,e.A=ut(st(t)),e.u=n,e.R=!0,xe(e,null)}function xe(e,t){e.F=Date.now(),qe(e),e.B=st(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),_t(n.i,"t",r),e.C=0,n=e.j.L,e.h=new ke,e.g=hn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new X(c(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(ee[0]=s.toString()),s=ee);for(let i=0;i<s.length;i++){const e=j(n,s[i],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?P(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),fe(),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i){var o="",a=i.split("&");for(let e=0;e<a.length;e++){var c=a[e].split("=");if(c.length>1){const e=c[0];c=c[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+c+"&":o+(e+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.v,e.B,e.l,e.S,e.u)}function je(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function ze(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ne:(n=Number(t.substring(n,r)),isNaN(n)?Ae:(r+=1)+n>t.length?Ne:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.T=Date.now()+e.H,Ke(e,e.H)}function Ke(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=ye(c(e.aa,e),t)}function Ge(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function $e(e){0==e.j.I||e.K||sn(e.j,e)}function He(e){Ge(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,te(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function We(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Xe(n.h,e)))if(!e.L&&Xe(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Ht(n)}en(n),me(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=ye(c(n.Va,n),6e3));Ye(n.h)<=1&&n.ta&&(n.ta=void 0)}else an(n,11)}else if((e.L||n.g==e)&&rn(n),!C(t))for(s=n.Ba.g.parse(t),t=0;t<s.length;t++){let c=s[t];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const t=c[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(r=1.5*h,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ze(i,i.h),i.h=null))}if(r.G){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,ct(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((r=n).na=un(r,r.L?r.ba:null,r.W),o.L){et(r.h,o);var a=o,u=r.O;u&&(a.H=u),a.D&&(Ge(a),qe(a)),r.g=o}else Zt(r);n.i.length>0&&Qt(n)}else"stop"!=c[0]&&"close"!=c[0]||an(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?an(n,7):$t(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}fe()}catch(h){}}Ce.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==zt(e)?t.j():this.Y(e)},Ce.prototype.Y=function(e){try{if(e==this.g)e:{const c=zt(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||qt(this.g)))){this.K||4!=c||7==u||fe(),Ge(this);var t=this.g.ca();this.X=t;var n=function(e){if(!je(e))return e.g.la();const t=qt(e.g);if(""===t)return"";let n="";const r=t.length,s=4==zt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return He(e),$e(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<r;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(s&&i==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.i,this.v,this.B,this.l,this.S,c,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var o=r;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,me(12),He(this),$e(this);break e}we(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,We(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=ze(this,n),t==Ne){4==c&&(this.m=4,me(14),e=!1),we(this.i,this.l,null,"[Incomplete Response]");break}if(t==Ae){this.m=4,me(15),we(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}we(this.i,this.l,t,null),We(this,t)}if(je(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,me(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),tn(a),a.P=!0,me(11))}}else we(this.i,this.l,n,"[Invalid Chunked Response]"),He(this),$e(this)}else we(this.i,this.l,n,null),We(this,n);4==c&&He(this),this.o&&!this.K&&(4==c?sn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={};e=(e.g&&zt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(C(e[r]))continue;var n=Se(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,me(12)):(this.m=0,me(13)),He(this),$e(this)}}}catch(c){}},Ce.prototype.cancel=function(){this.K=!0,He(this)},Ce.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.B),2!=this.M&&(fe(),me(17)),He(this),this.m=2,$e(this)):Ke(this,this.T-e)};function Qe(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Je(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ze(e,t){e.g?e.g.add(t):e.h=t}function et(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tt(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}Qe.prototype.cancel=function(){if(this.i=tt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof rt?(this.l=e.l,it(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.u),this.h=e.h,at(this,Tt(e.i)),this.m=e.m):e&&(t=String(e).match(nt))?(this.l=!1,it(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),ot(this,t[4]),this.h=ht(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.l=!1,this.i=new vt(null,this.l))}function st(e){return new rt(e)}function it(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function at(e,t,n){t instanceof vt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){const n=t.toLowerCase();t!=n&&(It(this,t),_t(this,n,e))}),e)),e.j=t}(e.i,e.l)):(n||(t=lt(t,gt)),e.i=new vt(t,e.l))}function ct(e,t,n){e.i.set(t,n)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function lt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(lt(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(lt(t,ft,!0),"@"),e.push(Te(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(lt(n,"/"==n.charAt(0)?mt:pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",lt(n,yt)),e.join("")},rt.prototype.resolve=function(e){const t=st(this);let n=!!e.j;n?it(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)ot(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=t.h.lastIndexOf("/");-1!=s&&(r=t.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const n=s[t++];"."==n?r&&t==s.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==s.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=s}return n?t.h=r:n=""!==e.i.toString(),n?at(t,Tt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ft=/[#\/\?@]/g,pt=/[#\?:]/g,mt=/[#\?]/g,gt=/[#\?@]/g,yt=/#/g;function vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let s,i=null;r>=0?(s=e[n].substring(0,r),i=e[n].substring(r+1)):s=e[n],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function It(e,t){wt(e),t=St(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bt(e,t){return wt(e),t=St(e,t),e.g.has(t)}function Et(e,t){wt(e);let n=[];if("string"==typeof t)bt(e,t)&&(n=n.concat(e.g.get(St(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function _t(e,t,n){It(e,t),n.length>0&&(e.i=null,e.g.set(St(e,t),d(n)),e.h+=n.length)}function Tt(e){const t=new vt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function St(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ct(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function kt(){this.g=new class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}}}function At(e){this.i=e.Sb||null,this.h=e.ab||!1}function Nt(e,t){W.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Dt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function xt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Rt(e)}function Rt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Pt(e){let t="";return R(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Pt(n),"string"==typeof e?null!=n&&Te(n):ct(e,t,n))}function Lt(e){W.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=vt.prototype).add=function(e,t){wt(this),this.i=null,e=St(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.set=function(e,t){return wt(this),this.i=null,bt(this,e=St(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=Et(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const s=Te(n);n=Et(this,n);for(let t=0;t<n.length;t++){let r=s;""!==n[t]&&(r+="="+Te(n[t])),e.push(r)}}return this.i=e.join("&")},h(At,se),At.prototype.g=function(){return new Nt(this.i,this.h)},h(Nt,W),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Rt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,xt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rt(this)),this.g&&(this.readyState=3,Rt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xt(this):Rt(this),3==this.readyState&&Dt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,xt(this))},e.Na=function(e){this.g&&(this.response=e,xt(this))},e.ga=function(){this.g&&xt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,W);var Mt=/^https?$/i,Vt=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Ut(e),jt(e)}function Ut(e){e.A||(e.A=!0,Q(e,"complete"),Q(e,"error"))}function Bt(e){if(e.h&&void 0!==s)if(e.v&&4==zt(e))setTimeout(e.Ca.bind(e),0);else if(Q(e,"readystatechange"),4==zt(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){let t=String(e.D).match(nt)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),r=!Mt.test(t?t.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.o=6;try{var o=zt(e)>2?e.g.statusText:""}catch(a){o=""}e.l=o+" ["+e.ca()+"]",Ut(e)}}finally{jt(e)}}}function jt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||Q(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function zt(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Kt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gt(e){this.za=0,this.i=[],this.j=new ve,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Kt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Kt("baseRetryDelayMs",5e3,e),this.Za=Kt("retryDelaySeedMs",1e4,e),this.Ta=Kt("forwardChannelMaxRetries",2,e),this.va=Kt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Qe(e&&e.concurrentRequestLimit),this.Ba=new kt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function $t(e){if(Wt(e),3==e.I){var t=e.V++,n=st(e.J);if(ct(n,"SID",e.M),ct(n,"RID",t),ct(n,"TYPE","terminate"),Yt(e,n),(t=new Ce(e,e.j,t)).M=2,t.A=ut(st(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.A,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),qe(t)}cn(e)}function Ht(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Wt(e){Ht(e),e.v&&(i.clearTimeout(e.v),e.v=null),rn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function Qt(e){if(!Je(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||b(),w||(v(),w=!0),I.add(t,e),e.D=0}}function Jt(e,t){var n;n=t?t.l:e.V++;const r=st(e.J);ct(r,"SID",e.M),ct(r,"RID",n),ct(r,"AID",e.K),Yt(e,r),e.u&&e.o&&Ot(r,e.u,e.o),n=new Ce(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Xt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Ze(e.h,n),De(n,r,t)}function Yt(e,t){e.H&&R(e.H,(function(e,n){ct(t,n,e)})),e.l&&R({},(function(e,n){ct(t,n,e)}))}function Xt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?c(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let c=!0;for(let h=0;h<n;h++){var i=s[h].g;const n=s[h].map;if((i-=t)<0)t=Math.max(0,s[h].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[t,n]of a){let r=n;o(n)&&(r=ne(n)),e.push(i+t+"="+encodeURIComponent(r))}}catch(u){throw e.push(i+"type="+encodeURIComponent("_badmap")),u}}catch(u){r&&r(n)}}if(c){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,n),t.G=e,a}function Zt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||b(),w||(v(),w=!0),I.add(t,e),e.A=0}}function en(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=ye(c(e.Da,e),on(e,e.A)),e.A++,!0)}function tn(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function nn(e){e.g=new Ce(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=st(e.na);ct(t,"RID","rpc"),ct(t,"SID",e.M),ct(t,"AID",e.K),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&ct(t,"TO",e.ia),ct(t,"TYPE","xmlhttp"),Yt(e,t),e.u&&e.o&&Ot(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=ut(st(t)),n.u=null,n.R=!0,xe(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.G,et(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;Q(r=le(),new ge(r,n)),Qt(e)}else Zt(e);else if(3==(s=t.m)||0==s&&t.X>0||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.G.concat(e.i),!0):!(1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta))&&(e.m=ye(c(e.Ea,e,t),on(e,e.D)),e.D++,!0))}(e,t)||2==r&&en(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),s){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.bb,e),r=e.Ua;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||it(r,"https"),ut(r),t?function(e,t){const n=new ve;if(i.Image){const r=new Image;r.onload=u(Ct,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Ct,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Ct,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Ct,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){const n=new ve,r=new AbortController,s=setTimeout(()=>{r.abort(),Ct(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(s),e.ok?Ct(n,"TestPingServer: ok",!0,t):Ct(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(s),Ct(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else me(2);e.I=0,e.l&&e.l.pa(t),cn(e),Wt(e)}function cn(e){if(e.I=0,e.ja=[],e.l){const t=tt(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function un(e,t,n){var r=n instanceof rt?st(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.u);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new rt(null);r&&it(e,r),t&&(e.g=t),s&&ot(e,s),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&ct(r,n,t),ct(r,"VER",e.ka),Yt(e,r),r}function hn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Lt(new At({ab:n})):new Lt(e.ma)).Fa(e.L),t}function ln(){}function dn(){}function fn(e,t){W.call(this),this.g=new Gt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gn(this)}function pn(e){ae.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mn(){ce.call(this),this.status=1}function gn(e){this.g=e}(e=Lt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ie.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ft(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(Vt,t,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(o){Ft(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Q(this,"complete"),Q(this,"abort"),jt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),Lt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Bt(this):this.Xa())},e.Xa=function(){Bt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return zt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),re(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Gt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){me(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=un(this,null,this.W),Qt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Ce(this,this.j,e);let i=this.o;if(this.U&&(i?(i=P(i),L(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xt(this,s,t),ct(n=st(this.J),"RID",e),ct(n,"CVER",22),this.G&&ct(n,"X-HTTP-Session-Id",this.G),Yt(this,n),i&&(this.R?t="headers="+Te(Pt(i))+"&"+t:this.u&&Ot(n,this.u,i)),Ze(this.h,s),this.Ra&&ct(n,"TYPE","init"),this.S?(ct(n,"$req",t),ct(n,"SID","null"),s.U=!0,De(s,n,null)):De(s,n,t),this.I=2}}else 3==this.I&&(e?Jt(this,e):0==this.i.length||Je(this.h)||Jt(this))},e.Da=function(){if(this.v=null,nn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=ye(c(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,me(10),Ht(this),nn(this))},e.Va=function(){null!=this.C&&(this.C=null,Ht(this),en(this),me(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=ln.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},h(fn,W),fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){$t(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ne(e),e=n);t.i.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.Ya++,e)),3==t.I&&Qt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,$t(this.g),delete this.g,fn.Z.N.call(this)},h(pn,ae),h(mn,ce),h(gn,ln),gn.prototype.ra=function(){Q(this.g,"a")},gn.prototype.qa=function(e){Q(this.g,new pn(e))},gn.prototype.pa=function(e){Q(this.g,new mn)},gn.prototype.oa=function(){Q(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Ue=function(){return new dn},Fe=function(){return le()},Ve=ue,Me={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},be.NO_ERROR=0,be.TIMEOUT=8,be.HTTP_ERROR=6,Le=be,Ee.COMPLETE="complete",Oe=Ee,ie.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",W.prototype.listen=W.prototype.J,Pe=ie,Lt.prototype.listenOnce=Lt.prototype.K,Lt.prototype.getLastError=Lt.prototype.Ha,Lt.prototype.getLastErrorCode=Lt.prototype.ya,Lt.prototype.getStatus=Lt.prototype.ca,Lt.prototype.getResponseJson=Lt.prototype.La,Lt.prototype.getResponseText=Lt.prototype.la,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Fa,Re=Lt}).apply(void 0!==Be?Be:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ze="12.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe=new j("@firebase/firestore");function Ke(){return qe.logLevel}function Ge(e,...t){if(qe.logLevel<=L.DEBUG){const n=t.map(We);qe.debug(`Firestore (${ze}): ${e}`,...n)}}function $e(e,...t){if(qe.logLevel<=L.ERROR){const n=t.map(We);qe.error(`Firestore (${ze}): ${e}`,...n)}}function He(e,...t){if(qe.logLevel<=L.WARN){const n=t.map(We);qe.warn(`Firestore (${ze}): ${e}`,...n)}}function We(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Je(e,r,n)}function Je(e,t,n){let r=`FIRESTORE (${ze}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(s){r+=" CONTEXT: "+n}throw $e(r),new Error(r)}function Ye(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||Je(t,s,r)}function Xe(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class et extends b{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class rt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class st{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{Ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ye("string"==typeof t.accessToken,31837,{l:t}),new nt(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(null===e||"string"==typeof e,2055,{h:e}),new je(e)}}class it{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=je.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ot{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new it(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class at{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ct{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(void 0===this.o,3512);const n=e=>{null!=e.error&&Ge("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.m;return this.m=e.token,Ge("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new at(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Ye("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new at(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=ut(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function lt(e,t){return e<t?-1:e>t?1:0}function dt(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return ft(n)===ft(s)?lt(n,s):ft(n)?1:-1}return lt(e.length,t.length)}function ft(e){const t=e.charCodeAt(0);return t>=55296&&t<=57343}function pt(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function mt(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="__name__";class yt{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qe(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Qe(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===yt.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yt?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=yt.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return lt(e.length,t.length)}static compareSegments(e,t){const n=yt.isNumericId(e),r=yt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?yt.extractNumericId(e).compare(yt.extractNumericId(t)):dt(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ne.fromString(e.substring(4,e.length-2))}}class vt extends yt{construct(e,t,n){return new vt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new et(Ze.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new vt(t)}static emptyPath(){return new vt([])}}const wt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends yt{construct(e,t,n){return new It(e,t,n)}static isValidIdentifier(e){return wt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===gt}static keyField(){return new It([gt])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new et(Ze.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new et(Ze.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new et(Ze.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new et(Ze.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.path=e}static fromPath(e){return new bt(vt.fromString(e))}static fromName(e){return new bt(vt.fromString(e).popFirst(5))}static empty(){return new bt(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===vt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new bt(new vt(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t,n){if(!n)throw new et(Ze.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _t(e){if(!bt.isDocumentKey(e))throw new et(Ze.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Tt(e){if(bt.isDocumentKey(e))throw new et(Ze.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function St(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Ct(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Qe(12329,{type:typeof e})}function kt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new et(Ze.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ct(e);throw new et(Ze.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){const n={typeString:e};return t&&(n.value=t),n}function Nt(e,t){if(!St(e))throw new et(Ze.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new et(Ze.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=-62135596800,xt=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*xt);return new Rt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new et(Ze.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new et(Ze.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dt)throw new et(Ze.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new et(Ze.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xt}_compareTo(e){return this.seconds===e.seconds?lt(this.nanoseconds,e.nanoseconds):lt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nt(e,Rt._jsonSchema))return new Rt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dt;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Rt._jsonSchemaVersion="firestore/timestamp/1.0",Rt._jsonSchema={type:At("string",Rt._jsonSchemaVersion),seconds:At("number"),nanoseconds:At("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{static fromTimestamp(e){return new Pt(e)}static min(){return new Pt(new Rt(0,0))}static max(){return new Pt(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=-1;class Lt{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Mt(e){return e.fields.find(e=>2===e.kind)}function Vt(e){return e.fields.filter(e=>2!==e.kind)}Lt.UNKNOWN_ID=-1;class Ft{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ut{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ut(0,zt.min())}}function Bt(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Pt.fromTimestamp(1e9===r?new Rt(n+1,0):new Rt(n,r));return new zt(s,bt.empty(),t)}function jt(e){return new zt(e.readTime,e.key,Ot)}class zt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new zt(Pt.min(),bt.empty(),Ot)}static max(){return new zt(Pt.max(),bt.empty(),Ot)}}function qt(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=bt.comparator(e.documentKey,t.documentKey),0!==n?n:lt(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e){if(e.code!==Ze.FAILED_PRECONDITION||e.message!==Kt)throw e;Ge("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ht((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ht?t:Ht.resolve(t)}catch(t){return Ht.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ht.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ht.reject(t)}static resolve(e){return new Ht((t,n)=>{t(e)})}static reject(e){return new Ht((t,n)=>{n(e)})}static waitFor(e){return new Ht((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Ht.resolve(!1);for(const n of e)t=t.next(e=>e?Ht.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ht((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next(e=>{i[c]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Ht((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="SimpleDb";class Qt{static open(e,t,n,r){try{return new Qt(t,e.transaction(r,n))}catch(s){throw new Zt(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new tt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Zt(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=sn(t.target.error);this.S.reject(new Zt(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(Ge(Wt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new tn(t)}}class Jt{static delete(e){return Ge(Wt,"Removing database:",e),nn(o().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!I())return!1;if(Jt.F())return!0;const e=g(),t=Jt.M(e),n=0<t&&t<10,r=Yt(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return"undefined"!=typeof process&&"YES"===(null==(e=process.__PRIVATE_env)?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,12.2===Jt.M(g())&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(Ge(Wt,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Zt(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new et(Ze.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new et(Ze.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Zt(e,r))},r.onupgradeneeded=e=>{Ge(Wt,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.N.k(t,r.transaction,e.oldVersion,this.version).next(()=>{Ge(Wt,"Database upgrade to version "+this.version+" complete")})}})),this.K&&(this.db.onversionchange=e=>this.K(e)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.L(e);const t=Qt.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next(e=>(t.C(),e)).catch(e=>(t.abort(e),Ht.reject(e))).toPromise();return i.catch(()=>{}),await t.D,i}catch(o){const e=o,t="FirebaseError"!==e.name&&i<3;if(Ge(Wt,"Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Yt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Xt{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return nn(this.U.delete())}}class Zt extends et{constructor(e,t){super(Ze.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function en(e){return"IndexedDbTransactionError"===e.name}class tn{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Ge(Wt,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(Ge(Wt,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return Ge(Wt,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(t=>(void 0===t&&(t=null),Ge(Wt,"GET",this.store.name,e,t),t))}delete(e){return Ge(Wt,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return Ge(Wt,"COUNT",this.store.name),nn(this.store.count())}H(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Ht((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.J(e,(e,n)=>{t.push(n)}).next(()=>t)}}Z(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ht((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}X(e,t){Ge(Wt,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.J(r,(e,t,n)=>n.delete())}ee(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.J(r,t)}te(e){const t=this.cursor({});return new Ht((n,r)=>{t.onerror=e=>{const t=sn(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}J(e,t){const n=[];return new Ht((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new Xt(s),o=t(s.primaryKey,s.value,i);if(o instanceof Ht){const e=o.catch(e=>(i.done(),Ht.reject(e)));n.push(e)}i.isDone?r():null===i.G?s.continue():s.continue(i.G)}}).next(()=>Ht.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(e){return new Ht((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=sn(e.target.error);n(t)}})}let rn=!1;function sn(e){const t=Jt.M(g());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new et("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rn||(rn=!0,setTimeout(()=>{throw e},0)),e}}return e}const on="IndexBackfiller";class an{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(e){Ge(on,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const e=await this.ne.ie();Ge(on,"Documents written: "+e)}catch(e){en(e)?Ge(on,"Ignoring IndexedDB error during index backfill: ",e):await $t(e)}await this.re(6e4)})}}class cn{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const n=new Set;let r=t,s=!0;return Ht.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return Ge(on,"Processing collection: "+t),this.oe(e,t,r).next(e=>{r-=e,n.add(t)});s=!1})).next(()=>t-r)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this._e(r,n)).next(n=>(Ge(on,"Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>s.size)}))}_e(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=jt(t);qt(r,n)>0&&(n=r)}),new zt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}un.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn=-1;function ln(e){return null==e}function dn(e){return 0===e&&1/e==-1/0}function fn(e){return"number"==typeof e&&Number.isInteger(e)&&!dn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="";function mn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=yn(t)),t=gn(e.get(n),t);return yn(t)}function gn(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case pn:n+="";break;default:n+=t}}return n}function yn(e){return e+pn+""}function vn(e){const t=e.length;if(Ye(t>=2,64408,{path:e}),2===t)return Ye(e.charAt(0)===pn&&""===e.charAt(1),56145,{path:e}),vt.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf(pn,i);switch((t<0||t>n)&&Qe(50515,{path:e}),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Qe(61167,{path:e})}i=t+2}return new vt(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="remoteDocuments",In="owner",bn="owner",En="mutationQueues",_n="mutations",Tn="batchId",Sn="userMutationsIndex",Cn=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,t){return[e,mn(t)]}function An(e,t,n){return[e,mn(t),n]}const Nn={},Dn="documentMutations",xn="remoteDocumentsV14",Rn=["prefixPath","collectionGroup","readTime","documentId"],Pn="documentKeyIndex",On=["prefixPath","collectionGroup","documentId"],Ln="collectionGroupIndex",Mn=["collectionGroup","readTime","prefixPath","documentId"],Vn="remoteDocumentGlobal",Fn="remoteDocumentGlobalKey",Un="targets",Bn="queryTargetsIndex",jn=["canonicalId","targetId"],zn="targetDocuments",qn=["targetId","path"],Kn="documentTargetsIndex",Gn=["path","targetId"],$n="targetGlobalKey",Hn="targetGlobal",Wn="collectionParents",Qn=["collectionId","parent"],Jn="clientMetadata",Yn="bundles",Xn="namedQueries",Zn="indexConfiguration",er="collectionGroupIndex",tr="indexState",nr=["indexId","uid"],rr="sequenceNumberIndex",sr=["uid","sequenceNumber"],ir="indexEntries",or=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ar="documentKeyIndex",cr=["indexId","uid","orderedDocumentKey"],ur="documentOverlays",hr=["userId","collectionPath","documentId"],lr="collectionPathOverlayIndex",dr=["userId","collectionPath","largestBatchId"],fr="collectionGroupOverlayIndex",pr=["userId","collectionGroup","largestBatchId"],mr="globals",gr=[En,_n,Dn,wn,Un,In,Hn,zn,Jn,Vn,Wn,Yn,Xn],yr=[...gr,ur],vr=[En,_n,Dn,xn,Un,In,Hn,zn,Jn,Vn,Wn,Yn,Xn,ur],wr=vr,Ir=[...wr,Zn,tr,ir],br=Ir,Er=[...Ir,mr],_r=Er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Gt{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Sr(e,t){const n=Xe(e);return Jt.O(n.le,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function kr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ar(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.comparator=e,this.root=t||xr.EMPTY}insert(e,t){return new Nr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xr.BLACK,null,null))}remove(e){return new Nr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dr(this.root,e,this.comparator,!0)}}class Dr{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xr{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:xr.RED,this.left=null!=r?r:xr.EMPTY,this.right=null!=s?s:xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new xr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return xr.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Qe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Qe(27949);return e+(this.isRed()?0:1)}}xr.EMPTY=null,xr.RED=!0,xr.BLACK=!1,xr.EMPTY=new class{constructor(){this.size=0}get key(){throw Qe(57766)}get value(){throw Qe(16141)}get color(){throw Qe(16727)}get left(){throw Qe(29726)}get right(){throw Qe(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new xr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(e){this.comparator=e,this.data=new Nr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pr(this.data.getIterator())}getIteratorFrom(e){return new Pr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Rr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Rr(this.comparator);return t.data=e,t}}class Pr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Or(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Lr([])}unionWith(e){let t=new Rr(It.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Lr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pt(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Mr("Invalid base64 string: "+t):t}}(e);return new Vr(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Vr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return lt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vr.EMPTY_BYTE_STRING=new Vr("");const Fr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(e){if(Ye(!!e,39018),"string"==typeof e){let t=0;const n=Fr.exec(e);if(Ye(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Br(e.seconds),nanos:Br(e.nanos)}}function Br(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function jr(e){return"string"==typeof e?Vr.fromBase64String(e):Vr.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="server_timestamp",qr="__type__",Kr="__previous_value__",Gr="__local_write_time__";function $r(e){var t,n;return(null==(n=((null==(t=null==e?void 0:e.mapValue)?void 0:t.fields)||{})[qr])?void 0:n.stringValue)===zr}function Hr(e){const t=e.mapValue.fields[Kr];return $r(t)?Hr(t):t}function Wr(e){const t=Ur(e.mapValue.fields[Gr].timestampValue);return new Rt(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,n,r,s,i,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h}}const Jr="(default)";class Yr{constructor(e,t){this.projectId=e,this.database=t||Jr}static empty(){return new Yr("","")}get isDefaultDatabase(){return this.database===Jr}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xr="__type__",Zr="__max__",es={mapValue:{fields:{__type__:{stringValue:Zr}}}},ts="__vector__",ns="value",rs={nullValue:"NULL_VALUE"};function ss(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$r(e)?4:ws(e)?9007199254740991:ys(e)?10:11:Qe(28295,{value:e})}function is(e,t){if(e===t)return!0;const n=ss(e);if(n!==ss(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Wr(e).isEqual(Wr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ur(e.timestampValue),r=Ur(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,jr(e.bytesValue).isEqual(jr(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Br(e.geoPointValue.latitude)===Br(t.geoPointValue.latitude)&&Br(e.geoPointValue.longitude)===Br(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Br(e.integerValue)===Br(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Br(e.doubleValue),r=Br(t.doubleValue);return n===r?dn(n)===dn(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pt(e.arrayValue.values||[],t.arrayValue.values||[],is);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Cr(n)!==Cr(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!is(n[s],r[s])))return!1;return!0}(e,t);default:return Qe(52216,{left:e})}var r}function os(e,t){return void 0!==(e.values||[]).find(e=>is(e,t))}function as(e,t){if(e===t)return 0;const n=ss(e),r=ss(t);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Br(e.integerValue||e.doubleValue),r=Br(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return cs(e.timestampValue,t.timestampValue);case 4:return cs(Wr(e),Wr(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(e,t){const n=jr(e),r=jr(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=lt(n[s],r[s]);if(0!==e)return e}return lt(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=lt(Br(e.latitude),Br(t.latitude));return 0!==n?n:lt(Br(e.longitude),Br(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return us(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,s,i;const o=e.fields||{},a=t.fields||{},c=null==(n=o[ns])?void 0:n.arrayValue,u=null==(r=a[ns])?void 0:r.arrayValue,h=lt((null==(s=null==c?void 0:c.values)?void 0:s.length)||0,(null==(i=null==u?void 0:u.values)?void 0:i.length)||0);return 0!==h?h:us(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===es.mapValue&&t===es.mapValue)return 0;if(e===es.mapValue)return 1;if(t===es.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=dt(r[o],i[o]);if(0!==e)return e;const t=as(n[r[o]],s[i[o]]);if(0!==t)return t}return lt(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Qe(23264,{he:n})}}function cs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return lt(e,t);const n=Ur(e),r=Ur(t),s=lt(n.seconds,r.seconds);return 0!==s?s:lt(n.nanos,r.nanos)}function us(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=as(n[s],r[s]);if(e)return e}return lt(n.length,r.length)}function hs(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=Ur(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(n=t.bytesValue,jr(n).toBase64()):"referenceValue"in t?function(e){return bt.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let n="[",r=!0;for(const s of t.values||[])r?r=!1:n+=",",n+=e(s);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const i of n)s?s=!1:r+=",",r+=`${i}:${e(t.fields[i])}`;return r+"}"}(t.mapValue):Qe(61005,{value:t});var n}(e)}function ls(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ds(e){return!!e&&"integerValue"in e}function fs(e){return!!e&&"arrayValue"in e}function ps(e){return!!e&&"nullValue"in e}function ms(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function gs(e){return!!e&&"mapValue"in e}function ys(e){var t,n;return(null==(n=((null==(t=null==e?void 0:e.mapValue)?void 0:t.fields)||{})[Xr])?void 0:n.stringValue)===ts}function vs(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return kr(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=vs(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vs(e.arrayValue.values[n]);return t}return{...e}}function ws(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Zr}const Is={mapValue:{fields:{[Xr]:{stringValue:ts},[ns]:{arrayValue:{}}}}};function bs(e){return"nullValue"in e?rs:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ls(Yr.empty(),bt.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?ys(e)?Is:{mapValue:{}}:Qe(35942,{value:e})}function Es(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ls(Yr.empty(),bt.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?Is:"mapValue"in e?ys(e)?{mapValue:{}}:es:Qe(61959,{value:e})}function _s(e,t){const n=as(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Ts(e,t){const n=as(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.value=e}static empty(){return new Ss({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(t)}setAll(e){let t=It.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=vs(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return is(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];gs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){kr(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Ss(vs(this.value))}}function Cs(e){const t=[];return kr(e.fields,(e,n)=>{const r=new It([e]);if(gs(n)){const e=Cs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Lr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ks(e,0,Pt.min(),Pt.min(),Pt.min(),Ss.empty(),0)}static newFoundDocument(e,t,n,r){return new ks(e,1,t,Pt.min(),n,r,0)}static newNoDocument(e,t){return new ks(e,2,t,Pt.min(),Pt.min(),Ss.empty(),0)}static newUnknownDocument(e,t){return new ks(e,3,t,Pt.min(),Pt.min(),Ss.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ss.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ks&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.position=e,this.inclusive=t}}function Ns(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?bt.comparator(bt.fromName(o.referenceValue),n.key):as(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ds(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!is(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{}class Os extends Ps{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new qs(e,t,n):"array-contains"===t?new Hs(e,n):"in"===t?new Ws(e,n):"not-in"===t?new Qs(e,n):"array-contains-any"===t?new Js(e,n):new Os(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ks(e,n):new Gs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(as(t,this.value)):null!==t&&ss(this.value)===ss(t)&&this.matchesComparison(as(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ls extends Ps{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ls(e,t)}matches(e){return Ms(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ms(e){return"and"===e.op}function Vs(e){return"or"===e.op}function Fs(e){return Us(e)&&Ms(e)}function Us(e){for(const t of e.filters)if(t instanceof Ls)return!1;return!0}function Bs(e,t){return e instanceof Os?(n=e,(r=t)instanceof Os&&n.op===r.op&&n.field.isEqual(r.field)&&is(n.value,r.value)):e instanceof Ls?function(e,t){return t instanceof Ls&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Bs(n,t.filters[r]),!0)}(e,t):void Qe(19439);var n,r}function js(e,t){const n=e.filters.concat(t);return Ls.create(n,e.op)}function zs(e){return e instanceof Os?`${(t=e).field.canonicalString()} ${t.op} ${hs(t.value)}`:e instanceof Ls?function(e){return e.op.toString()+" {"+e.getFilters().map(zs).join(" ,")+"}"}(e):"Filter";var t}class qs extends Os{constructor(e,t,n){super(e,t,n),this.key=bt.fromName(n.referenceValue)}matches(e){const t=bt.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ks extends Os{constructor(e,t){super(e,"in",t),this.keys=$s("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gs extends Os{constructor(e,t){super(e,"not-in",t),this.keys=$s("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $s(e,t){var n;return((null==(n=t.arrayValue)?void 0:n.values)||[]).map(e=>bt.fromName(e.referenceValue))}class Hs extends Os{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fs(t)&&os(t.arrayValue,this.value)}}class Ws extends Os{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&os(this.value.arrayValue,t)}}class Qs extends Os{constructor(e,t){super(e,"not-in",t)}matches(e){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!os(this.value.arrayValue,t)}}class Js extends Os{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>os(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function Xs(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Ys(e,t,n,r,s,i,o)}function Zs(e){const t=Xe(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof Os)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(Fs(t))return t.filters.map(t=>e(t)).join(",");{const n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),ln(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>hs(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>hs(e)).join(",")),t.Te=e}return t.Te}function ei(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Rs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ds(e.startAt,t.startAt)&&Ds(e.endAt,t.endAt)}function ti(e){return bt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ni(e,t){return e.filters.filter(e=>e instanceof Os&&e.field.isEqual(t))}function ri(e,t,n){let r=rs,s=!0;for(const i of ni(e,t)){let e=rs,t=!0;switch(i.op){case"<":case"<=":e=bs(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=rs}_s({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];_s({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function si(e,t,n){let r=es,s=!0;for(const i of ni(e,t)){let e=es,t=!0;switch(i.op){case">=":case">":e=Es(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=es}Ts({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Ts({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function oi(e,t,n,r,s,i,o,a){return new ii(e,t,n,r,s,i,o,a)}function ai(e){return new ii(e)}function ci(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ui(e){const t=Xe(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Rr(It.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new xs(r,n))}),e.has(It.keyField().canonicalString())||t.Ie.push(new xs(It.keyField(),n))}return t.Ie}function hi(e){const t=Xe(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return Xs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new xs(e.field,t)});const n=e.endAt?new As(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new As(e.startAt.position,e.startAt.inclusive):null;return Xs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,ui(e))),t.Ee}function li(e,t,n){return new ii(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function di(e,t){return ei(hi(e),hi(t))&&e.limitType===t.limitType}function fi(e){return`${Zs(hi(e))}|lt:${e.limitType}`}function pi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>zs(e)).join(", ")}]`),ln(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>hs(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>hs(e)).join(",")),`Target(${t})`}(hi(e))}; limitType=${e.limitType})`}function mi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):bt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ui(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ns(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,ui(n),r)||n.endAt&&!function(e,t,n){const r=Ns(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,ui(n),r)));var n,r}function gi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function yi(e){return(t,n)=>{let r=!1;for(const s of ui(e)){const e=vi(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function vi(e,t,n){const r=e.field.isKeyField()?bt.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?as(r,s):Qe(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Qe(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Ar(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Nr(bt.comparator);function bi(){return Ii}const Ei=new Nr(bt.comparator);function _i(...e){let t=Ei;for(const n of e)t=t.insert(n.key,n);return t}function Ti(e){let t=Ei;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Si(){return ki()}function Ci(){return ki()}function ki(){return new wi(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ai=new Nr(bt.comparator),Ni=new Rr(bt.comparator);function Di(...e){let t=Ni;for(const n of e)t=t.add(n);return t}const xi=new Rr(lt);function Ri(){return xi}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dn(t)?"-0":t}}function Oi(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(){this._=void 0}}function Mi(e,t,n){return e instanceof Ui?function(e,t){const n={fields:{[qr]:{stringValue:zr},[Gr]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&$r(t)&&(t=Hr(t)),t&&(n.fields[Kr]=t),{mapValue:n}}(n,t):e instanceof Bi?ji(e,t):e instanceof zi?qi(e,t):function(e,t){const n=Fi(e,t),r=Gi(n)+Gi(e.Ae);return ds(n)&&ds(e.Ae)?Oi(r):Pi(e.serializer,r)}(e,t)}function Vi(e,t,n){return e instanceof Bi?ji(e,t):e instanceof zi?qi(e,t):n}function Fi(e,t){return e instanceof Ki?ds(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Ui extends Li{}class Bi extends Li{constructor(e){super(),this.elements=e}}function ji(e,t){const n=$i(t);for(const r of e.elements)n.some(e=>is(e,r))||n.push(r);return{arrayValue:{values:n}}}class zi extends Li{constructor(e){super(),this.elements=e}}function qi(e,t){let n=$i(t);for(const r of e.elements)n=n.filter(e=>!is(e,r));return{arrayValue:{values:n}}}class Ki extends Li{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Gi(e){return Br(e.integerValue||e.doubleValue)}function $i(e){return fs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.field=e,this.transform=t}}class Wi{constructor(e,t){this.version=e,this.transformResults=t}}class Qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qi}static exists(e){return new Qi(void 0,e)}static updateTime(e){return new Qi(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Yi{}function Xi(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new co(e.key,Qi.none()):new ro(e.key,e.data,Qi.none());{const n=e.data,r=Ss.empty();let s=new Rr(It.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new so(e.key,r,new Lr(s.toArray()),Qi.none())}}function Zi(e,t,n){var r;e instanceof ro?function(e,t,n){const r=e.value.clone(),s=oo(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof so?function(e,t,n){if(!Ji(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=oo(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(io(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function eo(e,t,n,r){return e instanceof ro?function(e,t,n,r){if(!Ji(e.precondition,t))return n;const s=e.value.clone(),i=ao(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof so?function(e,t,n,r){if(!Ji(e.precondition,t))return n;const s=ao(e.fieldTransforms,r,t),i=t.data;return i.setAll(io(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(s=t,i=n,Ji(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function to(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Fi(r.transform,e||null);null!=s&&(null===n&&(n=Ss.empty()),n.set(r.field,s))}return n||null}function no(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&pt(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Bi&&r instanceof Bi||n instanceof zi&&r instanceof zi?pt(n.elements,r.elements,is):n instanceof Ki&&r instanceof Ki?is(n.Ae,r.Ae):n instanceof Ui&&r instanceof Ui);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class ro extends Yi{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class so extends Yi{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function io(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function oo(e,t,n){const r=new Map;Ye(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Vi(o,a,n[s]))}return r}function ao(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Mi(e,i,t))}return r}class co extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uo extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Zi(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=eo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=eo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ci();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Xi(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Pt.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Di())}isEqual(e){return this.batchId===e.batchId&&pt(this.mutations,e.mutations,(e,t)=>no(e,t))&&pt(this.baseMutations,e.baseMutations,(e,t)=>no(e,t))}}class lo{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Ye(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return Ai}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new lo(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mo,go;function yo(e){if(void 0===e)return $e("GRPC error has no .code"),Ze.UNKNOWN;switch(e){case mo.OK:return Ze.OK;case mo.CANCELLED:return Ze.CANCELLED;case mo.UNKNOWN:return Ze.UNKNOWN;case mo.DEADLINE_EXCEEDED:return Ze.DEADLINE_EXCEEDED;case mo.RESOURCE_EXHAUSTED:return Ze.RESOURCE_EXHAUSTED;case mo.INTERNAL:return Ze.INTERNAL;case mo.UNAVAILABLE:return Ze.UNAVAILABLE;case mo.UNAUTHENTICATED:return Ze.UNAUTHENTICATED;case mo.INVALID_ARGUMENT:return Ze.INVALID_ARGUMENT;case mo.NOT_FOUND:return Ze.NOT_FOUND;case mo.ALREADY_EXISTS:return Ze.ALREADY_EXISTS;case mo.PERMISSION_DENIED:return Ze.PERMISSION_DENIED;case mo.FAILED_PRECONDITION:return Ze.FAILED_PRECONDITION;case mo.ABORTED:return Ze.ABORTED;case mo.OUT_OF_RANGE:return Ze.OUT_OF_RANGE;case mo.UNIMPLEMENTED:return Ze.UNIMPLEMENTED;case mo.DATA_LOSS:return Ze.DATA_LOSS;default:return Qe(39323,{code:e})}}(go=mo||(mo={}))[go.OK=0]="OK",go[go.CANCELLED=1]="CANCELLED",go[go.UNKNOWN=2]="UNKNOWN",go[go.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",go[go.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",go[go.NOT_FOUND=5]="NOT_FOUND",go[go.ALREADY_EXISTS=6]="ALREADY_EXISTS",go[go.PERMISSION_DENIED=7]="PERMISSION_DENIED",go[go.UNAUTHENTICATED=16]="UNAUTHENTICATED",go[go.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",go[go.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",go[go.ABORTED=10]="ABORTED",go[go.OUT_OF_RANGE=11]="OUT_OF_RANGE",go[go.UNIMPLEMENTED=12]="UNIMPLEMENTED",go[go.INTERNAL=13]="INTERNAL",go[go.UNAVAILABLE=14]="UNAVAILABLE",go[go.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vo=new Ne([4294967295,4294967295],0);function wo(e){const t=(new TextEncoder).encode(e),n=new De;return n.update(t),new Uint8Array(n.digest())}function Io(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ne([n,r],0),new Ne([s,i],0)]}class bo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Eo("Invalid padding: "+t);if(n<0)throw new Eo("Invalid hash count: "+n);if(e.length>0&&0===this.hashCount)throw new Eo("Invalid hash count: "+n);if(0===e.length&&0!==t)throw new Eo("Invalid padding when bitmap length is 0: "+t);this.ge=8*e.length-t,this.pe=Ne.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Ne.fromNumber(n)));return 1===r.compare(vo)&&(r=new Ne([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=wo(e),[n,r]=Io(t);for(let s=0;s<this.hashCount;s++){const e=this.ye(n,r,s);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new bo(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.ge)return;const t=wo(e),[n,r]=Io(t);for(let s=0;s<this.hashCount;s++){const e=this.ye(n,r,s);this.be(e)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new _o(Pt.min(),r,new Nr(lt),bi(),Di())}}class To{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new To(n,t,Di(),Di(),Di())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Co{constructor(e,t){this.targetId=e,this.Ce=t}}class ko{constructor(e,t,n=Vr.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ao{constructor(){this.ve=0,this.Fe=xo(),this.Me=Vr.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Di(),t=Di(),n=Di();return this.Fe.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Qe(38017,{changeType:s})}}),new To(this.Me,this.xe,e,t,n)}Ke(){this.Oe=!1,this.Fe=xo()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class No{constructor(e){this.Ge=e,this.ze=new Map,this.je=bi(),this.He=Do(),this.Je=Do(),this.Ze=new Nr(lt)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Qe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const s=r.target;if(ti(s))if(0===n){const e=new bt(s.path);this.et(t,e,ks.newNoDocument(e,Pt.min()))}else Ye(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),s=n?this.ct(n,e,r):1;if(0!==s){this.it(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=jr(n).toUint8Array()}catch(a){if(a instanceof Mr)return He("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new bo(i,r,s)}catch(a){return He(a instanceof Eo?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.Ge.ht(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const s=this.ot(r);if(s){if(n.current&&ti(s.target)){const t=new bt(s.target.path);this.It(t).has(r)||this.Et(r,t)||this.et(r,t,ks.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.Ke())}});let n=Di();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new _o(e,t,this.Ze,this.je,n);return this.je=bi(),this.He=Do(),this.Je=Do(),this.Ze=new Nr(lt),r}Ye(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,n),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ao,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Rr(lt),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Rr(lt),this.He=this.He.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Ge("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ao),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Do(){return new Nr(bt.comparator)}function xo(){return new Nr(bt.comparator)}const Ro=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Po=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Oo=(()=>({and:"AND",or:"OR"}))();class Lo{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mo(e,t){return e.useProto3Json||ln(t)?t:{value:t}}function Vo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fo(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Uo(e,t){return Vo(e,t.toTimestamp())}function Bo(e){return Ye(!!e,49232),Pt.fromTimestamp(function(e){const t=Ur(e);return new Rt(t.seconds,t.nanos)}(e))}function jo(e,t){return zo(e,t).canonicalString()}function zo(e,t){const n=(r=e,new vt(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function qo(e){const t=vt.fromString(e);return Ye(ca(t),10190,{key:t.toString()}),t}function Ko(e,t){return jo(e.databaseId,t.path)}function Go(e,t){const n=qo(t);if(n.get(1)!==e.databaseId.projectId)throw new et(Ze.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new et(Ze.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new bt(Qo(n))}function $o(e,t){return jo(e.databaseId,t)}function Ho(e){const t=qo(e);return 4===t.length?vt.emptyPath():Qo(t)}function Wo(e){return new vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Qo(e){return Ye(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Jo(e,t,n){return{name:Ko(e,t),fields:n.value.mapValue.fields}}function Yo(e,t){let n;if(t instanceof ro)n={update:Jo(e,t.key,t.value)};else if(t instanceof co)n={delete:Ko(e,t.key)};else if(t instanceof so)n={update:Jo(e,t.key,t.data),updateMask:aa(t.fieldMask)};else{if(!(t instanceof uo))return Qe(16599,{dt:t.type});n={verify:Ko(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Ui)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bi)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zi)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ki)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Qe(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:Uo(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Qe(27497))),n;var r,s}function Xo(e,t){const n=t.currentDocument?void 0!==(s=t.currentDocument).updateTime?Qi.updateTime(Bo(s.updateTime)):void 0!==s.exists?Qi.exists(s.exists):Qi.none():Qi.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)Ye("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new Ui;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Bi(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new zi(e)}else"increment"in t?n=new Ki(e,t.increment):Qe(16584,{proto:t});const r=It.fromServerFormat(t.fieldPath);return new Hi(r,n)}(e,t)):[];var s;if(t.update){t.update.name;const s=Go(e,t.update.name),i=new Ss({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Lr(t.map(e=>It.fromServerFormat(e)))}(t.updateMask);return new so(s,i,e,n,r)}return new ro(s,i,n,r)}if(t.delete){const r=Go(e,t.delete);return new co(r,n)}if(t.verify){const r=Go(e,t.verify);return new uo(r,n)}return Qe(1463,{proto:t})}function Zo(e,t){return{documents:[$o(e,t.path)]}}function ea(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$o(e,s);const i=function(e){if(0!==e.length)return function e(t){return t instanceof Os?function(e){if("=="===e.op){if(ms(e.value))return{unaryFilter:{field:ia(e.field),op:"IS_NAN"}};if(ps(e.value))return{unaryFilter:{field:ia(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ms(e.value))return{unaryFilter:{field:ia(e.field),op:"IS_NOT_NAN"}};if(ps(e.value))return{unaryFilter:{field:ia(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ia(e.field),op:ra(e.op),value:e.value}}}(t):t instanceof Ls?function(t){const n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:sa(t.op),filters:n}}}(t):Qe(54877,{filter:t})}(Ls.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:ia((t=e).field),direction:na(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Mo(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:s};var c}function ta(e){let t=Ho(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ye(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=oa(e.unaryFilter.field);return Os.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=oa(e.unaryFilter.field);return Os.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=oa(e.unaryFilter.field);return Os.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=oa(e.unaryFilter.field);return Os.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Qe(61313);default:return Qe(60726)}}(t):void 0!==t.fieldFilter?function(e){return Os.create(oa(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Qe(58110);default:return Qe(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ls.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Qe(1026)}}(t.compositeFilter.op))}(t):Qe(30097,{filter:t})}(e);return t instanceof Ls&&Fs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new xs(oa((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ln(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new As(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new As(n,t)}(n.endAt)),oi(t,s,o,i,a,"F",c,u)}function na(e){return Ro[e]}function ra(e){return Po[e]}function sa(e){return Oo[e]}function ia(e){return{fieldPath:e.canonicalString()}}function oa(e){return It.fromServerFormat(e.fieldPath)}function aa(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ca(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function ua(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,n,r,s=Pt.min(),i=Pt.min(),o=Vr.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ha(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ha(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.yt=e}}function da(e,t){let n;if(t.document)n=function(e,t,n){const r=Go(e,t.name),s=Bo(t.updateTime),i=t.createTime?Bo(t.createTime):Pt.min(),o=new Ss({mapValue:{fields:t.fields}}),a=ks.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(e.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=bt.fromSegments(t.noDocument.path),r=ga(t.noDocument.readTime);n=ks.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Qe(56709);{const e=bt.fromSegments(t.unknownDocument.path),r=ga(t.unknownDocument.version);n=ks.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Rt(e[0],e[1]);return Pt.fromTimestamp(t)}(t.readTime)),n}function fa(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pa(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:Ko(s=e.yt,(i=t).key),fields:i.data.value.mapValue.fields,updateTime:Vo(s,i.version.toTimestamp()),createTime:Vo(s,i.createTime.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ma(t.version)};else{if(!t.isUnknownDocument())return Qe(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:ma(t.version)}}var s,i;return r}function pa(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function ma(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ga(e){const t=new Rt(e.seconds,e.nanoseconds);return Pt.fromTimestamp(t)}function ya(e,t){const n=(t.baseMutations||[]).map(t=>Xo(e.yt,t));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map(t=>Xo(e.yt,t)),s=Rt.fromMillis(t.localWriteTimeMs);return new ho(t.batchId,s,n,r)}function va(e){const t=ga(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?ga(e.lastLimboFreeSnapshotVersion):Pt.min();let r;return r=void 0!==e.query.documents?function(e){const t=e.documents.length;return Ye(1===t,1966,{count:t}),hi(ai(Ho(e.documents[0])))}(e.query):function(e){return hi(ta(e))}(e.query),new ha(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Vr.fromBase64String(e.resumeToken))}function wa(e,t){const n=ma(t.snapshotVersion),r=ma(t.lastLimboFreeSnapshotVersion);let s;s=ti(t.target)?Zo(e.yt,t.target):ea(e.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Zs(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Ia(e){const t=ta({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?li(t,t.limit,"L"):t}function ba(e,t){return new fo(t.largestBatchId,Xo(e.yt,t.overlayMutation))}function Ea(e,t){const n=t.path.lastSegment();return[e,mn(t.path.popLast()),n]}function _a(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:ma(r.readTime),documentKey:mn(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{getBundleMetadata(e,t){return Sa(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:ga(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Sa(e).put({bundleId:(n=t).id,createTime:ma(Bo(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Ca(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Ia(t.bundledQuery),readTime:ga(t.readTime)};var t})}saveNamedQuery(e,t){return Ca(e).put({name:(n=t).name,readTime:ma(Bo(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Sa(e){return Sr(e,Yn)}function Ca(e){return Sr(e,Xn)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new ka(e,n)}getOverlay(e,t){return Aa(e).get(Ea(this.userId,t)).next(e=>e?ba(this.serializer,e):null)}getOverlays(e,t){const n=Si();return Ht.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,s)=>{const i=new fo(t,s);r.push(this.bt(e,i))}),Ht.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(mn(e.getCollectionPath())));const s=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Aa(e).X(lr,r))}),Ht.waitFor(s)}getOverlaysForCollection(e,t,n){const r=Si(),s=mn(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Aa(e).H(lr,i).next(e=>{for(const t of e){const e=ba(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const s=Si();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Aa(e).ee({index:fr,range:o},(e,t,n)=>{const o=ba(this.serializer,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}bt(e,t){return Aa(e).put(function(e,t,n){const[r,s,i]=Ea(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Yo(e.yt,n.mutation)}}(this.serializer,this.userId,t))}}function Aa(e){return Sr(e,ur)}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{St(e){return Sr(e,mr)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{const t=null==e?void 0:e.value;return t?Vr.fromUint8Array(t):Vr.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Br(e.integerValue));else if("doubleValue"in e){const n=Br(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),dn(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=Ur(n)),t.xt(""+(n.seconds||"")),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(jr(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?ws(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):ys(e)?this.kt(e.mapValue,t):(this.Kt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Nt(t)):Qe(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}Kt(e,t){const n=e.fields||{};this.Ft(t,55);for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){var n,r;const s=e.fields||{};this.Ft(t,53);const i=ns,o=(null==(r=null==(n=s[i].arrayValue)?void 0:n.values)?void 0:r.length)||0;this.Ft(t,15),t.Mt(Br(o)),this.Ot(i,t),this.Ct(s[i],t)}qt(e,t){const n=e.values||[];this.Ft(t,50);for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),bt.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Da.Wt=new Da;function xa(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function Ra(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=xa(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}class Pa{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ht(n.value),n=t.next();this.Jt()}Zt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Gt(e);else if(e<2048)this.Gt(960|e>>>6),this.Gt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Gt(480|e>>>12),this.Gt(128|63&e>>>6),this.Gt(128|63&e);else{const e=t.codePointAt(0);this.Gt(240|e>>>18),this.Gt(128|63&e>>>12),this.Gt(128|63&e>>>6),this.Gt(128|63&e)}}this.zt()}Xt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ht(e);else if(e<2048)this.Ht(960|e>>>6),this.Ht(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ht(480|e>>>12),this.Ht(128|63&e>>>6),this.Ht(128|63&e);else{const e=t.codePointAt(0);this.Ht(240|e>>>18),this.Ht(128|63&e>>>12),this.Ht(128|63&e>>>6),this.Ht(128|63&e)}}this.Jt()}Yt(e){const t=this.en(e),n=Ra(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}nn(e){const t=this.en(e),n=Ra(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}rn(){this.sn(255),this.sn(255)}_n(){this.an(255),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Gt(e){const t=255&e;0===t?(this.sn(0),this.sn(255)):255===t?(this.sn(255),this.sn(0)):this.sn(t)}Ht(e){const t=255&e;0===t?(this.an(0),this.an(255)):255===t?(this.an(255),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Jt(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Oa{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class La{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ma{constructor(){this.cn=new Pa,this.ascending=new Oa(this.cn),this.descending=new La(this.cn)}seed(e){this.cn.seed(e)}ln(e){return 0===e?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,n,r){this.hn=e,this.Pn=t,this.Tn=n,this.In=r}En(){const e=this.In.length,t=0===e||255===this.In[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.In,0),t!==e?n.set([0],this.In.length):++n[n.length-1],new Va(this.hn,this.Pn,this.Tn,n)}Rn(e,t,n){return{indexId:this.hn,uid:e,arrayValue:Ba(this.Tn),directionalValue:Ba(this.In),orderedDocumentKey:Ba(t),documentKey:n.path.toArray()}}An(e,t,n){const r=this.Rn(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function Fa(e,t){let n=e.hn-t.hn;return 0!==n?n:(n=Ua(e.Tn,t.Tn),0!==n?n:(n=Ua(e.In,t.In),0!==n?n:bt.comparator(e.Pn,t.Pn)))}function Ua(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function Ba(e){return w()?function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}(e):e}function ja(e){return"string"!=typeof e?e:function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)}class za{constructor(e){this.Vn=new Rr((e,t)=>It.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Vn=this.Vn.add(e):this.mn.push(e)}}get fn(){return this.Vn.size>1}gn(e){if(Ye(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Mt(e);if(void 0!==t&&!this.pn(t))return!1;const n=Vt(e);let r=new Set,s=0,i=0;for(;s<n.length&&this.pn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const e=this.Vn.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[s];if(!this.yn(e,t)||!this.wn(this.dn[i++],t))return!1}++s}for(;s<n.length;++s){const e=n[s];if(i>=this.dn.length||!this.wn(this.dn[i++],e))return!1}return!0}bn(){if(this.fn)return null;let e=new Rr(It.comparator);const t=[];for(const n of this.mn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Ft(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ft(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ft(n.field,"asc"===n.dir?0:1)));return new Lt(Lt.UNKNOWN_ID,this.collectionId,t,Ut.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e){if(0===e.getFilters().length)return[];const t=function e(t){if(Ye(t instanceof Os||t instanceof Ls,34018),t instanceof Os)return t;if(1===t.filters.length)return e(t.filters[0]);const n=t.filters.map(t=>e(t));let r=Ls.create(n,t.op);return r=Qa(r),$a(r)?r:(Ye(r instanceof Ls,64498),Ye(Ms(r),40251),Ye(r.filters.length>1,57927),r.filters.reduce((e,t)=>Ha(e,t)))}(function e(t){var n,r;if(Ye(t instanceof Os||t instanceof Ls,20012),t instanceof Os){if(t instanceof Ws){const e=(null==(r=null==(n=t.value.arrayValue)?void 0:n.values)?void 0:r.map(e=>Os.create(t.field,"==",e)))||[];return Ls.create(e,"or")}return t}const s=t.filters.map(t=>e(t));return Ls.create(s,t.op)}(e));return Ye($a(t),7391),Ka(t)||Ga(t)?[t]:t.getFilters()}function Ka(e){return e instanceof Os}function Ga(e){return e instanceof Ls&&Fs(e)}function $a(e){return Ka(e)||Ga(e)||function(e){if(e instanceof Ls&&Vs(e)){for(const t of e.getFilters())if(!Ka(t)&&!Ga(t))return!1;return!0}return!1}(e)}function Ha(e,t){let n;return Ye(e instanceof Os||e instanceof Ls,38388),Ye(t instanceof Os||t instanceof Ls,25473),n=e instanceof Os?t instanceof Os?(r=e,s=t,Ls.create([r,s],"and")):Wa(e,t):t instanceof Os?Wa(t,e):function(e,t){if(Ye(e.filters.length>0&&t.filters.length>0,48005),Ms(e)&&Ms(t))return js(e,t.getFilters());const n=Vs(e)?e:t,r=Vs(e)?t:e,s=n.filters.map(e=>Ha(e,r));return Ls.create(s,"or")}(e,t),Qa(n);var r,s}function Wa(e,t){if(Ms(t))return js(t,e.getFilters());{const n=t.filters.map(t=>Ha(e,t));return Ls.create(n,"or")}}function Qa(e){if(Ye(e instanceof Os||e instanceof Ls,11850),e instanceof Os)return e;const t=e.getFilters();if(1===t.length)return Qa(t[0]);if(Us(e))return e;const n=t.map(e=>Qa(e)),r=[];return n.forEach(t=>{t instanceof Os?r.push(t):t instanceof Ls&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Ls.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ja{constructor(){this.Sn=new Ya}addToCollectionParentIndex(e,t){return this.Sn.add(t),Ht.resolve()}getCollectionParents(e,t){return Ht.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return Ht.resolve()}deleteFieldIndex(e,t){return Ht.resolve()}deleteAllFieldIndexes(e){return Ht.resolve()}createTargetIndexes(e,t){return Ht.resolve()}getDocumentsMatchingTarget(e,t){return Ht.resolve(null)}getIndexType(e,t){return Ht.resolve(0)}getFieldIndexes(e,t){return Ht.resolve([])}getNextCollectionGroupToUpdate(e){return Ht.resolve(null)}getMinOffset(e,t){return Ht.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return Ht.resolve(zt.min())}updateCollectionGroup(e,t,n){return Ht.resolve()}updateIndexEntries(e,t){return Ht.resolve()}}class Ya{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Rr(vt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Rr(vt.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="IndexedDbIndexManager",Za=new Uint8Array(0);class ec{constructor(e,t){this.databaseId=t,this.Dn=new Ya,this.Cn=new wi(e=>Zs(e),(e,t)=>ei(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const s={collectionId:n,parent:mn(r)};return tc(e).put(s)}return Ht.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[mt(t),""],!1,!0);return tc(e).H(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(vn(r.parent))}return n})}addFieldIndex(e,t){const n=rc(e),r={indexId:(s=t).indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};var s;delete r.indexId;const i=n.add(r);if(t.indexState){const n=sc(e);return i.next(e=>{n.put(_a(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=rc(e),r=sc(e),s=nc(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rc(e),n=nc(e),r=sc(e);return t.X().next(()=>n.X()).next(()=>r.X())}createTargetIndexes(e,t){return Ht.forEach(this.vn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new za(t).bn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=nc(e);let r=!0;const s=new Map;return Ht.forEach(this.vn(t),t=>this.Fn(e,t).next(e=>{r&&(r=!!e),s.set(t,e)})).next(()=>{if(r){let e=Di();const r=[];return Ht.forEach(s,(s,i)=>{var o;Ge(Xa,`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${Zs(t)}`);const a=function(e,t){const n=Mt(t);if(void 0===n)return null;for(const r of ni(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of Vt(t))for(const t of ni(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of Vt(t)){const t=0===s.kind?ri(e,s.fieldPath,e.startAt):si(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new As(n,r)}(i,s),h=function(e,t){const n=[];let r=!0;for(const s of Vt(t)){const t=0===s.kind?si(e,s.fieldPath,e.endAt):ri(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new As(n,r)}(i,s),l=this.Mn(s,i,u),d=this.Mn(s,i,h),f=this.xn(s,i,c),p=this.On(s.indexId,a,l,u.inclusive,d,h.inclusive,f);return Ht.forEach(p,s=>n.Z(s,t.limit).next(t=>{t.forEach(t=>{const n=bt.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Ht.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(t=0===e.filters.length?[e]:qa(Ls.create(e.filters,"and")).map(t=>Xs(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let h=0;h<a;++h){const a=t?this.Nn(t[h/c]):Za,l=this.Bn(e,a,n[h%c],r),d=this.Ln(e,a,s[h%c],i),f=o.map(t=>this.Bn(e,a,t,!0));u.push(...this.createRange(l,d,f))}return u}Bn(e,t,n,r){const s=new Va(e,bt.empty(),t,n);return r?s:s.En()}Ln(e,t,n,r){const s=new Va(e,bt.empty(),t,n);return r?s.En():s}Fn(e,t){const n=new za(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.gn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.vn(t);return Ht.forEach(r,t=>this.Fn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new Rr(It.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}kn(e,t){const n=new Ma;for(const r of Vt(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.ln(r.kind);Da.Wt.Dt(e,s)}return n.un()}Nn(e){const t=new Ma;return Da.Wt.Dt(e,t.ln(0)),t.un()}Kn(e,t){const n=new Ma;return Da.Wt.Dt(ls(this.databaseId,t),n.ln(function(e){const t=Vt(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.un()}xn(e,t,n){if(null===n)return[];let r=[];r.push(new Ma);let s=0;for(const i of Vt(e)){const e=n[s++];for(const n of r)if(this.qn(t,i.fieldPath)&&fs(e))r=this.Un(r,i,e);else{const t=n.ln(i.kind);Da.Wt.Dt(e,t)}}return this.$n(r)}Mn(e,t,n){return this.xn(e,t,n.position)}$n(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Un(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new Ma;n.seed(e.un()),Da.Wt.Dt(i,n.ln(t.kind)),s.push(n)}return s}qn(e,t){return!!e.filters.find(e=>e instanceof Os&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=rc(e),r=sc(e);return(t?n.H(er,IDBKeyRange.bound(t,t)):n.H()).next(e=>{const t=[];return Ht.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Ut(t.sequenceNumber,new zt(ga(t.readTime),new bt(vn(t.documentKey)),t.largestBatchId)):Ut.empty(),r=e.fields.map(([e,t])=>new Ft(It.fromServerFormat(e),t));return new Lt(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:lt(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=rc(e),s=sc(e);return this.Wn(e).next(e=>r.H(er,IDBKeyRange.bound(t,t)).next(t=>Ht.forEach(t,t=>s.put(_a(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Ht.forEach(t,(t,r)=>{const s=n.get(t.collectionGroup);return(s?Ht.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next(s=>(n.set(t.collectionGroup,s),Ht.forEach(s,n=>this.Qn(e,t,n).next(t=>{const s=this.Gn(r,n);return t.isEqual(s)?Ht.resolve():this.zn(e,r,n,t,s)}))))})}jn(e,t,n,r){return nc(e).put(r.Rn(this.uid,this.Kn(n,t.key),t.key))}Hn(e,t,n,r){return nc(e).delete(r.An(this.uid,this.Kn(n,t.key),t.key))}Qn(e,t,n){const r=nc(e);let s=new Rr(Fa);return r.ee({index:ar,range:IDBKeyRange.only([n.indexId,this.uid,Ba(this.Kn(n,t))])},(e,r)=>{s=s.add(new Va(n.indexId,t,ja(r.arrayValue),ja(r.directionalValue)))}).next(()=>s)}Gn(e,t){let n=new Rr(Fa);const r=this.kn(t,e);if(null==r)return n;const s=Mt(t);if(null!=s){const i=e.data.field(s.fieldPath);if(fs(i))for(const s of i.arrayValue.values||[])n=n.add(new Va(t.indexId,e.key,this.Nn(s),r))}else n=n.add(new Va(t.indexId,e.key,Za,r));return n}zn(e,t,n,r,s){Ge(Xa,"Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Or(i),c=Or(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Or(o)):t?(s(a),a=Or(i)):(a=Or(i),c=Or(o))}}(r,s,Fa,r=>{i.push(this.jn(e,t,n,r))},r=>{i.push(this.Hn(e,t,n,r))}),Ht.waitFor(i)}Wn(e){let t=1;return sc(e).ee({index:rr,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Fa(e,t)).filter((e,t,n)=>!t||0!==Fa(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=Fa(i,e),s=Fa(i,t);if(0===n)r[0]=e.En();else if(n>0&&s<0)r.push(i),r.push(i.En());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2){if(this.Jn(r[i],r[i+1]))return[];const e=r[i].An(this.uid,Za,bt.empty()),t=r[i+1].An(this.uid,Za,bt.empty());s.push(IDBKeyRange.bound(e,t))}return s}Jn(e,t){return Fa(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ic)}getMinOffset(e,t){return Ht.mapArray(this.vn(t),t=>this.Fn(e,t).next(e=>e||Qe(44426))).next(ic)}}function tc(e){return Sr(e,Wn)}function nc(e){return Sr(e,ir)}function rc(e){return Sr(e,Zn)}function sc(e){return Sr(e,tr)}function ic(e){Ye(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;qt(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new zt(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ac{static withCacheSize(e){return new ac(e,ac.DEFAULT_COLLECTION_PERCENTILE,ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t,n){const r=e.store(_n),s=e.store(Dn),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.ee({range:o},(e,t,n)=>(a++,n.delete()));i.push(c.next(()=>{Ye(1===a,47070,{batchId:n.batchId})}));const u=[];for(const h of n.mutations){const e=An(t,h.key.path,n.batchId);i.push(s.delete(e)),u.push(h.key)}return Ht.waitFor(i).next(()=>u)}function uc(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Qe(14731);t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ac.DEFAULT_COLLECTION_PERCENTILE=10,ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ac.DEFAULT=new ac(41943040,ac.DEFAULT_COLLECTION_PERCENTILE,ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ac.DISABLED=new ac(-1,0,0);class hc{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Zn={}}static wt(e,t,n,r){Ye(""!==e.uid,64387);const s=e.isAuthenticated()?e.uid:"";return new hc(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dc(e).ee({index:Sn,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const s=fc(e),i=dc(e);return i.add({}).next(o=>{Ye("number"==typeof o,49019);const a=new ho(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Yo(e.yt,t)),s=n.mutations.map(t=>Yo(e.yt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.serializer,this.userId,a),u=[];let h=new Rr((e,t)=>lt(e.canonicalString(),t.canonicalString()));for(const e of r){const t=An(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,Nn))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),Ht.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return dc(e).get(t).next(e=>e?(Ye(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),ya(this.serializer,e)):null)}Xn(e,t){return this.Zn[t]?Ht.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Zn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return dc(e).ee({index:Sn,range:r},(e,t,r)=>{t.userId===this.userId&&(Ye(t.batchId>=n,47524,{Yn:n}),s=ya(this.serializer,t)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=hn;return dc(e).ee({index:Sn,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,hn],[this.userId,Number.POSITIVE_INFINITY]);return dc(e).H(Sn,t).next(e=>e.map(e=>ya(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=kn(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return fc(e).ee({range:r},(n,r,i)=>{const[o,a,c]=n,u=vn(a);if(o===this.userId&&t.path.isEqual(u))return dc(e).get(c).next(e=>{if(!e)throw Qe(61480,{er:n,batchId:c});Ye(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:c}),s.push(ya(this.serializer,e))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Rr(lt);const r=[];return t.forEach(t=>{const s=kn(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=fc(e).ee({range:i},(e,r,s)=>{const[i,o,a]=e,c=vn(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()});r.push(o)}),Ht.waitFor(r).next(()=>this.tr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=kn(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Rr(lt);return fc(e).ee({range:i},(e,t,s)=>{const[i,a,c]=e,u=vn(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()}).next(()=>this.tr(e,o))}tr(e,t){const n=[],r=[];return t.forEach(t=>{r.push(dc(e).get(t).next(e=>{if(null===e)throw Qe(35274,{batchId:t});Ye(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(ya(this.serializer,e))}))}),Ht.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return cc(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),Ht.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ht.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return fc(e).ee({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=vn(e[1]);r.push(t)}else n.done()}).next(()=>{Ye(0===r.length,56720,{rr:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return lc(e,this.userId,t)}ir(e){return pc(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:hn,lastStreamToken:""})}}function lc(e,t,n){const r=kn(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return fc(e).ee({range:i,Y:!0},(e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()}).next(()=>o)}function dc(e){return Sr(e,_n)}function fc(e){return Sr(e,Dn)}function pc(e){return Sr(e,En)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new mc(0)}static ar(){return new mc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const n=new mc(t.highestTargetId);return t.highestTargetId=n.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(e=>Pt.fromTimestamp(new Rt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.ur(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.cr(e,r)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(n=>(n.targetCount+=1,this.hr(t,n),this.cr(e,n))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>yc(e).delete(t.targetId)).next(()=>this.ur(e)).next(t=>(Ye(t.targetCount>0,8065),t.targetCount-=1,this.cr(e,t)))}removeTargets(e,t,n){let r=0;const s=[];return yc(e).ee((i,o)=>{const a=va(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))}).next(()=>Ht.waitFor(s)).next(()=>r)}forEachTarget(e,t){return yc(e).ee((e,n)=>{const r=va(n);t(r)})}ur(e){return vc(e).get($n).next(e=>(Ye(null!==e,2888),e))}cr(e,t){return vc(e).put($n,t)}lr(e,t){return yc(e).put(wa(this.serializer,t))}hr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ur(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Zs(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return yc(e).ee({range:r,index:Bn},(e,n,r)=>{const i=va(n);ei(t,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(e,t,n){const r=[],s=wc(e);return t.forEach(t=>{const i=mn(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))}),Ht.waitFor(r)}removeMatchingKeys(e,t,n){const r=wc(e);return Ht.forEach(t,t=>{const s=mn(t.path);return Ht.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=wc(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=wc(e);let s=Di();return r.ee({range:n,Y:!0},(e,t,n)=>{const r=vn(e[1]),i=new bt(r);s=s.add(i)}).next(()=>s)}containsKey(e,t){const n=mn(t.path),r=IDBKeyRange.bound([n],[mt(n)],!1,!0);let s=0;return wc(e).ee({index:Kn,Y:!0,range:r},([e,t],n,r)=>{0!==e&&(s++,r.done())}).next(()=>s>0)}At(e,t){return yc(e).get(t).next(e=>e?va(e):null)}}function yc(e){return Sr(e,Un)}function vc(e){return Sr(e,Hn)}function wc(e){return Sr(e,zn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="LruGarbageCollector";function bc([e,t],[n,r]){const s=lt(e,n);return 0===s?lt(t,r):s}class Ec{constructor(e){this.Pr=e,this.buffer=new Rr(bc),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();bc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _c{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Ge(Ic,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){en(e)?Ge(Ic,"Ignoring IndexedDB error during garbage collection: ",e):await $t(e)}await this.Ar(3e5)})}}class Tc{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ht.resolve(un.ce);const n=new Ec(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ge("LruGarbageCollector","Garbage collection skipped; disabled"),Ht.resolve(oc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Ge("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Ge("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),Ke()<=L.DEBUG&&Ge("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+`ms\n\tRemoved ${s} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Ht.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}function Sc(e,t){return new Tc(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.db=e,this.garbageCollector=Sc(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(e,n)=>t(n))}addReference(e,t,n){return kc(e,n)}removeReference(e,t,n){return kc(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return kc(e,t)}wr(e,t){return function(e,t){let n=!1;return pc(e).te(r=>lc(e,r,t).next(e=>(e&&(n=!0),Ht.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.yr(e,(i,o)=>{if(o<=t){const t=this.wr(e,i).next(t=>{if(!t)return s++,n.getEntry(e,i).next(()=>(n.removeEntry(i,Pt.min()),wc(e).delete([0,mn(i.path)])))});r.push(t)}}).next(()=>Ht.waitFor(r)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return kc(e,t)}yr(e,t){const n=wc(e);let r,s=un.ce;return n.ee({index:Kn},([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==un.ce&&t(new bt(vn(r)),s),s=o,r=i):s=un.ce}).next(()=>{s!==un.ce&&t(new bt(vn(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function kc(e,t){return wc(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:mn(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.changes=new wi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ks.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ht.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Pc(e).put(n)}removeEntry(e,t,n){return Pc(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],pa(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=ks.newInvalidDocument(t);return Pc(e).ee({index:Pn,range:IDBKeyRange.only(Oc(t))},(e,r)=>{n=this.Sr(t,r)}).next(()=>n)}Dr(e,t){let n={size:0,document:ks.newInvalidDocument(t)};return Pc(e).ee({index:Pn,range:IDBKeyRange.only(Oc(t))},(e,r)=>{n={document:this.Sr(t,r),size:uc(r)}}).next(()=>n)}getEntries(e,t){let n=bi();return this.Cr(e,t,(e,t)=>{const r=this.Sr(e,t);n=n.insert(e,r)}).next(()=>n)}vr(e,t){let n=bi(),r=new Nr(bt.comparator);return this.Cr(e,t,(e,t)=>{const s=this.Sr(e,t);n=n.insert(e,s),r=r.insert(e,uc(t))}).next(()=>({documents:n,Fr:r}))}Cr(e,t,n){if(t.isEmpty())return Ht.resolve();let r=new Rr(Mc);t.forEach(e=>r=r.add(e));const s=IDBKeyRange.bound(Oc(r.first()),Oc(r.last())),i=r.getIterator();let o=i.getNext();return Pc(e).ee({index:Pn,range:s},(e,t,r)=>{const s=bt.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Mc(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.j(Oc(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),pa(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pc(e).H(IDBKeyRange.bound(o,a,!0)).next(e=>{null==s||s.incrementDocumentReadCount(e.length);let n=bi();for(const s of e){const e=this.Sr(bt.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(mi(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let s=bi();const i=Lc(t,n),o=Lc(t,zt.max());return Pc(e).ee({index:Ln,range:IDBKeyRange.bound(i,o,!0)},(e,t,n)=>{const i=this.Sr(bt.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(e){return new xc(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Rc(e).get(Fn).next(e=>(Ye(!!e,20021),e))}br(e,t){return Rc(e).put(Fn,t)}Sr(e,t){if(t){const e=da(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Pt.min()))return e}return ks.newInvalidDocument(e)}}function Dc(e){return new Nc(e)}class xc extends Ac{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new wi(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new Rr((e,t)=>lt(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=fa(this.Mr.serializer,i);r=r.add(s.path.popLast());const c=uc(a);n+=c-o.size,t.push(this.Mr.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=fa(this.Mr.serializer,i.convertToNoDocument(Pt.min()));t.push(this.Mr.addEntry(e,s,n))}}),r.forEach(n=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Mr.updateMetadata(e,n)),Ht.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(e=>(this.Or.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:e,Fr:t})=>(t.forEach((t,n)=>{this.Or.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Rc(e){return Sr(e,Vn)}function Pc(e){return Sr(e,xn)}function Oc(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Lc(e,t){const n=t.documentKey.path.toArray();return[e,pa(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Mc(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=lt(n[i],r[i]),s)return s;return s=lt(n.length,r.length),s||(s=lt(n[n.length-2],r[r.length-2]),s||lt(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&eo(n.mutation,e,Lr.empty(),Rt.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Di()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Di()){const r=Si();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=_i();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Si();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Di()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=bi();const i=ki(),o=ki();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof so)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),eo(o.mutation,t,o.mutation.getFieldMask(),Rt.now())):i.set(t.key,Lr.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>o.set(e,new Vc(t,i.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=ki();let r=new Nr((e,t)=>e-t),s=Di();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Lr.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Di()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ci();c.forEach(e=>{if(!s.has(e)){const r=Xi(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ht.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return bt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ht.resolve(Si());let o=Ot,a=s;return i.next(t=>Ht.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ht.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,Di())).next(e=>({batchId:o,changes:Ti(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new bt(t)).next(e=>{let t=_i();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=_i();return this.indexManager.getCollectionParents(e,s).next(o=>Ht.forEach(o,o=>{const a=(c=t,u=o.child(s),new ii(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ks.newInvalidDocument(r)))});let n=_i();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&eo(i.mutation,r,Lr.empty(),Rt.now()),mi(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Ht.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,{id:(n=t).id,version:n.version,createTime:Bo(n.createTime)}),Ht.resolve();var n}getNamedQuery(e,t){return Ht.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,{name:(n=t).name,query:Ia(n.bundledQuery),readTime:Bo(n.readTime)}),Ht.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.overlays=new Nr(bt.comparator),this.Lr=new Map}getOverlay(e,t){return Ht.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Si();return Ht.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.bt(e,t,r)}),Ht.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),Ht.resolve()}getOverlaysForCollection(e,t,n){const r=Si(),s=t.length+1,i=new bt(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ht.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Nr((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Si(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Si(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ht.resolve(o)}bt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new fo(t,n));let s=this.Lr.get(t);void 0===s&&(s=Di(),this.Lr.set(t,s)),this.Lr.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.sessionToken=Vr.EMPTY_BYTE_STRING}getSessionToken(e){return Ht.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ht.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.kr=new Rr(qc.Kr),this.qr=new Rr(qc.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new qc(e,t);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new qc(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new bt(new vt([])),n=new qc(t,e),r=new qc(t,e+1),s=[];return this.qr.forEachInRange([n,r],e=>{this.Wr(e),s.push(e.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new bt(new vt([])),n=new qc(t,e),r=new qc(t,e+1);let s=Di();return this.qr.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new qc(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class qc{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return bt.comparator(e.key,t.key)||lt(e.Hr,t.Hr)}static Ur(e,t){return lt(e.Hr,t.Hr)||bt.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Rr(qc.Kr)}checkEmpty(e){return Ht.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ho(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.Jr=this.Jr.add(new qc(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ht.resolve(i)}lookupMutationBatch(e,t){return Ht.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return Ht.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ht.resolve(0===this.mutationQueue.length?hn:this.Yn-1)}getAllMutationBatches(e){return Ht.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new qc(t,0),r=new qc(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);s.push(t)}),Ht.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Rr(lt);return t.forEach(e=>{const t=new qc(e,0),r=new qc(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),Ht.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;bt.isDocumentKey(s)||(s=s.child(""));const i=new qc(new bt(s),0);let o=new Rr(lt);return this.Jr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Hr)),!0)},i),Ht.resolve(this.Yr(o))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Ye(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return Ht.forEach(t.mutations,r=>{const s=new qc(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}nr(e){}containsKey(e,t){const n=new qc(t,0),r=this.Jr.firstAfterOrEqual(n);return Ht.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ht.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.ti=e,this.docs=new Nr(bt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ht.resolve(n?n.document.mutableCopy():ks.newInvalidDocument(t))}getEntries(e,t){let n=bi();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ks.newInvalidDocument(e))}),Ht.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=bi();const i=t.path,o=new bt(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||qt(jt(o),n)<=0||(r.has(o.key)||mi(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ht.resolve(s)}getAllFromCollectionGroup(e,t,n,r){Qe(9500)}ni(e,t){return Ht.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new $c(this)}getSize(e){return Ht.resolve(this.size)}}class $c extends Ac{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),Ht.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.persistence=e,this.ri=new wi(e=>Zs(e),ei),this.lastRemoteSnapshotVersion=Pt.min(),this.highestTargetId=0,this.ii=0,this.si=new zc,this.targetCount=0,this.oi=mc._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),Ht.resolve()}getLastRemoteSnapshotVersion(e){return Ht.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ht.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Ht.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),Ht.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new mc(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Ht.resolve()}updateTargetData(e,t){return this.lr(t),Ht.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Ht.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ri.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ri.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ht.waitFor(s).next(()=>r)}getTargetCount(e){return Ht.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return Ht.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),Ht.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Ht.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Ht.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return Ht.resolve(n)}containsKey(e,t){return Ht.resolve(this.si.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this._i={},this.overlays={},this.ai=new un(0),this.ui=!1,this.ui=!0,this.ci=new jc,this.referenceDelegate=e(this),this.li=new Hc(this),this.indexManager=new Ja,this.remoteDocumentCache=function(e){return new Gc(e)}(e=>this.referenceDelegate.hi(e)),this.serializer=new la(t),this.Pi=new Uc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Kc(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Ge("MemoryPersistence","Starting transaction:",e);const r=new Qc(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ii(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return Ht.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class Qc extends Gt{constructor(e){super(),this.currentSequenceNumber=e}}class Jc{constructor(e){this.persistence=e,this.Ri=new zc,this.Ai=null}static Vi(e){return new Jc(e)}get di(){if(this.Ai)return this.Ai;throw Qe(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),Ht.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),Ht.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Ht.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ht.forEach(this.di,n=>{const r=bt.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,Pt.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return Ht.or([()=>Ht.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yc{constructor(e,t){this.persistence=e,this.fi=new wi(e=>mn(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=Sc(this,t)}static Vi(e,t){return new Yc(e,t)}Ti(){}Ii(e){return Ht.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return Ht.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?Ht.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,s.removeEntry(r,Pt.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Ht.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Ht.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Ht.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Ht.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const n=Hr(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:return function(t){let n=0;return kr(t.fields,(t,r)=>{n+=t.length+e(r)}),n}(t.mapValue);default:throw Qe(13486,{value:t})}}(e.data.value)),t}wr(e,t,n){return Ht.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return Ht.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.serializer=e}k(e,t,n,r){const s=new Qt("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(In),function(e){e.createObjectStore(En,{keyPath:"userId"});e.createObjectStore(_n,{keyPath:Tn,autoIncrement:!0}).createIndex(Sn,Cn,{unique:!0}),e.createObjectStore(Dn)}(e),Zc(e),function(e){e.createObjectStore(wn)}(e));let i=Ht.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(zn),e.deleteObjectStore(Un),e.deleteObjectStore(Hn)}(e),Zc(e)),i=i.next(()=>function(e){const t=e.store(Hn),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Pt.min().toTimestamp(),targetCount:0};return t.put($n,n)}(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>function(e,t){return t.store(_n).H().next(n=>{e.deleteObjectStore(_n),e.createObjectStore(_n,{keyPath:Tn,autoIncrement:!0}).createIndex(Sn,Cn,{unique:!0});const r=t.store(_n),s=n.map(e=>r.put(e));return Ht.waitFor(s)})}(e,s))),i=i.next(()=>{!function(e){e.createObjectStore(Jn,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(i=i.next(()=>this.gi(s))),n<6&&r>=6&&(i=i.next(()=>(function(e){e.createObjectStore(Vn)}(e),this.pi(s)))),n<7&&r>=7&&(i=i.next(()=>this.yi(s))),n<8&&r>=8&&(i=i.next(()=>this.wi(e,s))),n<9&&r>=9&&(i=i.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(i=i.next(()=>this.bi(s))),n<11&&r>=11&&(i=i.next(()=>{!function(e){e.createObjectStore(Yn,{keyPath:"bundleId"})}(e),function(e){e.createObjectStore(Xn,{keyPath:"name"})}(e)})),n<12&&r>=12&&(i=i.next(()=>{!function(e){const t=e.createObjectStore(ur,{keyPath:hr});t.createIndex(lr,dr,{unique:!1}),t.createIndex(fr,pr,{unique:!1})}(e)})),n<13&&r>=13&&(i=i.next(()=>function(e){const t=e.createObjectStore(xn,{keyPath:Rn});t.createIndex(Pn,On),t.createIndex(Ln,Mn)}(e)).next(()=>this.Si(e,s)).next(()=>e.deleteObjectStore(wn))),n<14&&r>=14&&(i=i.next(()=>this.Di(e,s))),n<15&&r>=15&&(i=i.next(()=>function(e){e.createObjectStore(Zn,{keyPath:"indexId",autoIncrement:!0}).createIndex(er,"collectionGroup",{unique:!1});e.createObjectStore(tr,{keyPath:nr}).createIndex(rr,sr,{unique:!1});e.createObjectStore(ir,{keyPath:or}).createIndex(ar,cr,{unique:!1})}(e))),n<16&&r>=16&&(i=i.next(()=>{t.objectStore(tr).clear()}).next(()=>{t.objectStore(ir).clear()})),n<17&&r>=17&&(i=i.next(()=>{!function(e){e.createObjectStore(mr,{keyPath:"name"})}(e)})),n<18&&r>=18&&w()&&(i=i.next(()=>{t.objectStore(tr).clear()}).next(()=>{t.objectStore(ir).clear()})),i}pi(e){let t=0;return e.store(wn).ee((e,n)=>{t+=uc(n)}).next(()=>{const n={byteSize:t};return e.store(Vn).put(Fn,n)})}gi(e){const t=e.store(En),n=e.store(_n);return t.H().next(t=>Ht.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,hn],[t.userId,t.lastAcknowledgedBatchId]);return n.H(Sn,r).next(n=>Ht.forEach(n,n=>{Ye(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const r=ya(this.serializer,n);return cc(e,t.userId,r).next(()=>{})}))}))}yi(e){const t=e.store(zn),n=e.store(wn);return e.store(Hn).get($n).next(e=>{const r=[];return n.ee((n,s)=>{const i=new vt(n),o=[0,mn(i)];r.push(t.get(o).next(n=>{return n?Ht.resolve():(r=i,t.put({targetId:0,path:mn(r),sequenceNumber:e.highestListenSequenceNumber}));var r}))}).next(()=>Ht.waitFor(r))})}wi(e,t){e.createObjectStore(Wn,{keyPath:Qn});const n=t.store(Wn),r=new Ya,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:mn(r)})}};return t.store(wn).ee({Y:!0},(e,t)=>{const n=new vt(e);return s(n.popLast())}).next(()=>t.store(Dn).ee({Y:!0},([e,t,n],r)=>{const i=vn(t);return s(i.popLast())}))}bi(e){const t=e.store(Un);return t.ee((e,n)=>{const r=va(n),s=wa(this.serializer,r);return t.put(s)})}Si(e,t){const n=t.store(wn),r=[];return n.ee((e,n)=>{const s=t.store(xn),i=(a=n,a.document?new bt(vt.fromString(a.document.name).popFirst(5)):a.noDocument?bt.fromSegments(a.noDocument.path):a.unknownDocument?bt.fromSegments(a.unknownDocument.path):Qe(36783)).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(s.put(o))}).next(()=>Ht.waitFor(r))}Di(e,t){const n=t.store(_n),r=Dc(this.serializer),s=new Wc(Jc.Vi,this.serializer.yt);return n.H().next(e=>{const n=new Map;return e.forEach(e=>{let t=n.get(e.userId)??Di();ya(this.serializer,e).keys().forEach(e=>t=t.add(e)),n.set(e.userId,t)}),Ht.forEach(n,(e,n)=>{const i=new je(n),o=ka.wt(this.serializer,i),a=s.getIndexManager(i),c=hc.wt(i,this.serializer,a,s.referenceDelegate);return new Fc(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Tr(t,un.ce),e).next()})})}}function Zc(e){e.createObjectStore(zn,{keyPath:qn}).createIndex(Kn,Gn,{unique:!0}),e.createObjectStore(Un,{keyPath:"targetId"}).createIndex(Bn,jn,{unique:!0}),e.createObjectStore(Hn)}const eu="IndexedDbPersistence",tu=18e5,nu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ru{constructor(e,t,n,r,s,i,o,a,c,u,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ci=s,this.window=i,this.document=o,this.Fi=c,this.Mi=u,this.xi=h,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=e=>Promise.resolve(),!ru.v())throw new et(Ze.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Cc(this,r),this.Ki=t+"main",this.serializer=new la(a),this.qi=new Jt(this.Ki,this.xi,new Xc(this.serializer)),this.ci=new Na,this.li=new gc(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Dc(this.serializer),this.Pi=new Ta,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===u&&$e(eu,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new et(Ze.FAILED_PRECONDITION,nu);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new un(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(e=>{e||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Ji(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(en(e))return Ge(eu,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Ge(eu,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return su(e).get(bn).next(e=>Ht.resolve(this.Xi(e)))}Yi(e){return iu(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,tu)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Sr(e,Jn);return t.H().next(e=>{const n=this.ns(e,tu),r=e.filter(e=>-1===n.indexOf(e));return Ht.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.Mi?Ht.resolve(!0):su(e).get(bn).next(t=>{if(null!==t&&this.ts(t.leaseTimestampMs,5e3)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new et(Ze.FAILED_PRECONDITION,nu);return!1}}return!(!this.networkEnabled||!this.inForeground)||iu(e).H().next(e=>void 0===this.ns(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&Ge(eu,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[In,Jn],e=>{const t=new Tr(e,un.ce);return this.Ji(t).next(()=>this.Yi(t))}),this.qi.close(),this.ls()}ns(e,t){return e.filter(e=>this.ts(e.updateTimeMs,t)&&!this.ss(e.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>iu(e).H().next(e=>this.ns(e,tu).map(e=>e.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return hc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ec(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ka.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,n){Ge(eu,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=18===(i=this.xi)?_r:17===i?Er:16===i?br:15===i?Ir:14===i?wr:13===i?vr:12===i?yr:11===i?gr:void Qe(60245);var i;let o;return this.qi.runTransaction(e,r,s,r=>(o=new Tr(r,this.ai?this.ai.next():un.ce),"readwrite-primary"===t?this.ji(o).next(e=>!!e||this.Hi(o)).next(t=>{if(!t)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new et(Ze.FAILED_PRECONDITION,Kt);return n(o)}).next(e=>this.Zi(o).next(()=>e)):this.Ps(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Ps(e){return su(e).get(bn).next(e=>{if(null!==e&&this.ts(e.leaseTimestampMs,5e3)&&!this.ss(e.ownerId)&&!this.Xi(e)&&!(this.Mi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new et(Ze.FAILED_PRECONDITION,nu)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return su(e).put(bn,t)}static v(){return Jt.v()}Ji(e){const t=su(e);return t.get(bn).next(e=>this.Xi(e)?(Ge(eu,"Releasing primary lease."),t.delete(bn)):Ht.resolve())}ts(e,t){const n=Date.now();return!(e<n-t||e>n&&($e(`Detected an update time that is in the future: ${e} > ${n}`),1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground="visible"===this.document.visibilityState)}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;"function"==typeof(null==(e=this.window)?void 0:e.addEventListener)&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;v()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const n=null!==(null==(t=this.Ui)?void 0:t.getItem(this.rs(e)));return Ge(eu,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return $e(eu,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function su(e){return Sr(e,In)}function iu(e){return Sr(e,Jn)}function ou(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class au{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Is=r}static Es(e,t){let n=Di(),r=Di();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new au(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=v()?8:Yt(g())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.gs(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ps(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new cu;return this.ys(e,t,n).next(r=>{if(s.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>s.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(Ke()<=L.DEBUG&&Ge("QueryEngine","SDK will not create cache indexes for query:",pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ht.resolve()):(Ke()<=L.DEBUG&&Ge("QueryEngine","Query:",pi(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Ke()<=L.DEBUG&&Ge("QueryEngine","The SDK decides to create cache indexes for query:",pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hi(t))):Ht.resolve())}gs(e,t){if(ci(t))return Ht.resolve(null);let n=hi(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=li(t,null,"F"),n=hi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=Di(...r);return this.fs.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.bs(t,r);return this.Ss(t,i,s,n.readTime)?this.gs(e,li(t,null,"F")):this.Ds(e,i,t,n)}))})))}ps(e,t,n,r){return ci(t)||r.isEqual(Pt.min())?Ht.resolve(null):this.fs.getDocuments(e,n).next(s=>{const i=this.bs(t,s);return this.Ss(t,i,n,r)?Ht.resolve(null):(Ke()<=L.DEBUG&&Ge("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),pi(t)),this.Ds(e,i,t,Bt(r,Ot)).next(e=>e))})}bs(e,t){let n=new Rr(yi(e));return t.forEach((t,r)=>{mi(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(e,t,n){return Ke()<=L.DEBUG&&Ge("QueryEngine","Using full collection scan to execute query:",pi(t)),this.fs.getDocumentsMatchingQuery(e,t,zt.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="LocalStore";class lu{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Nr(lt),this.Fs=new wi(e=>Zs(e),ei),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fc(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function du(e,t,n,r){return new lu(e,t,n,r)}async function fu(e,t){const n=Xe(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=Di();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ns:e,removedBatchIds:s,addedBatchIds:i}))})})}function pu(e){const t=Xe(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function mu(e,t){const n=Xe(e),r=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const o=[];t.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.li.addMatchingKeys(e,i.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Vr.EMPTY_BYTE_STRING,Pt.min()).withLastLimboFreeSnapshotVersion(Pt.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.li.updateTargetData(e,u))});let a=bi(),c=Di();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(function(e,t,n){let r=Di(),s=Di();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=bi();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Pt.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Ge(hu,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Bs:r,Ls:s}})}(e,i,t.documentUpdates).next(e=>{a=e.Bs,c=e.Ls})),!r.isEqual(Pt.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ht.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.vs=s,e))}function gu(e,t){const n=Xe(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=hn),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function yu(e,t){const n=Xe(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(s=>s?(r=s,Ht.resolve(r)):n.li.allocateTargetId(e).next(s=>(r=new ha(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}async function vu(e,t,n){const r=Xe(e),s=r.vs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(o){if(!en(o))throw o;Ge(hu,`Failed to update sequence numbers for target ${t}: ${o}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function wu(e,t,n){const r=Xe(e);let s=Pt.min(),i=Di();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Xe(e),s=r.Fs.get(n);return void 0!==s?Ht.resolve(r.vs.get(s)):r.li.getTargetData(t,n)}(r,e,hi(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?s:Pt.min(),n?i:Di())).next(e=>(Eu(r,gi(t),e),{documents:e,ks:i})))}function Iu(e,t){const n=Xe(e),r=Xe(n.li),s=n.vs.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>r.At(e,t).next(e=>e?e.target:null))}function bu(e,t){const n=Xe(e),r=n.Ms.get(t)||Pt.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.xs.getAllFromCollectionGroup(e,t,Bt(r,Ot),Number.MAX_SAFE_INTEGER)).then(e=>(Eu(n,t,e),e))}function Eu(e,t,n){let r=e.Ms.get(t)||Pt.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="firestore_clients";function Tu(e,t){return`${_u}_${e}_${t}`}const Su="firestore_mutations";function Cu(e,t,n){let r=`${Su}_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}const ku="firestore_targets";function Au(e,t){return`${ku}_${e}_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="SharedClientState";class Du{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new et(r.error.code,r.error.message))),i?new Du(e,t,r.state,s):($e(Nu,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xu{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new et(n.error.code,n.error.message))),s?new xu(e,n.state,r):($e(Nu,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ru{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Ri();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=fn(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Ru(e,s):($e(Nu,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Pu{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Pu(t.clientId,t.onlineState):($e(Nu,"Failed to parse online state: "+e),null)}}class Ou{constructor(){this.activeTargetIds=Ri()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lu{constructor(e,t,n,r,s){this.window=e,this.Ci=t,this.persistenceKey=n,this.zs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Hs.bind(this),this.Js=new Nr(lt),this.started=!1,this.Zs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Tu(this.persistenceKey,this.zs),this.Ys="firestore_sequence_number_"+this.persistenceKey,this.Js=this.Js.insert(this.zs,new Ou),this.eo=new RegExp(`^${_u}_${i}_([^_]*)$`),this.no=new RegExp(`^${Su}_${i}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${ku}_${i}_(\\d+)$`),this.io=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.so=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const n of e){if(n===this.zs)continue;const e=this.getItem(Tu(this.persistenceKey,n));if(e){const t=Ru.$s(n,e);t&&(this.Js=this.Js.insert(t.clientId,t))}}this.oo();const t=this.storage.getItem(this.io);if(t){const e=this._o(t);e&&this.ao(e)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Js)}isActiveQueryTarget(e){let t=!1;return this.Js.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,n){this.co(e,t,n),this.lo(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(Au(this.persistenceKey,e));if(t){const r=xu.$s(e,t);r&&(n=r.state)}}return t&&this.ho.Qs(e),this.oo(),n}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Au(this.persistenceKey,e))}updateQueryState(e,t,n){this.Po(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.lo(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Io(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Ge(Nu,"READ",e,t),t}setItem(e,t){Ge(Nu,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){Ge(Nu,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(Ge(Nu,"EVENT",t.key,t.newValue),t.key===this.Xs)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.eo.test(t.key)){if(null==t.newValue){const e=this.Eo(t.key);return this.Ro(e,null)}{const e=this.Ao(t.key,t.newValue);if(e)return this.Ro(e.clientId,e)}}else if(this.no.test(t.key)){if(null!==t.newValue){const e=this.Vo(t.key,t.newValue);if(e)return this.mo(e)}}else if(this.ro.test(t.key)){if(null!==t.newValue){const e=this.fo(t.key,t.newValue);if(e)return this.po(e)}}else if(t.key===this.io){if(null!==t.newValue){const e=this._o(t.newValue);if(e)return this.ao(e)}}else if(t.key===this.Ys){const e=function(e){let t=un.ce;if(null!=e)try{const n=JSON.parse(e);Ye("number"==typeof n,30636,{yo:e}),t=n}catch(n){$e(Nu,"Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==un.ce&&this.sequenceNumberHandler(e)}else if(t.key===this.so){const e=this.wo(t.newValue);await Promise.all(e.map(e=>this.syncEngine.bo(e)))}}else this.Zs.push(t)})}}get ho(){return this.Js.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,n){const r=new Du(this.currentUser,e,t,n),s=Cu(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Ws())}lo(e){const t=Cu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,n){const r=Au(this.persistenceKey,e),s=new xu(e,t,n);this.setItem(r,s.Ws())}Io(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Eo(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const n=this.Eo(e);return Ru.$s(n,t)}Vo(e,t){const n=this.no.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Du.$s(new je(s),r,t)}fo(e,t){const n=this.ro.exec(e),r=Number(n[1]);return xu.$s(r,t)}_o(e){return Pu.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);Ge(Nu,"Ignoring mutation for non-active user "+e.user.uid)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Js.insert(e,t):this.Js.remove(e),r=this.uo(this.Js),s=this.uo(n),i=[],o=[];return s.forEach(e=>{r.has(e)||i.push(e)}),r.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.Co(i,o).then(()=>{this.Js=n})}ao(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Ri();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Mu{constructor(){this.vo=new Ou,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ou,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{Mo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="ConnectivityMonitor";class Uu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ge(Fu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ge(Fu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=null;function ju(){return null===Bu?Bu=268435456+Math.round(2147483648*Math.random()):Bu++,"0x"+Bu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zu="RestConnection",qu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="WebChannelConnection",$u=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};class Hu extends class{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Jr?"project_id="+n:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const i=ju(),o=this.Qo(e,t.toUriEncodedString());Ge(zu,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(a,r,s);const{host:c}=new URL(o),u=l(c);return this.zo(e,o,a,n,u).then(t=>(Ge(zu,`Received RPC '${e}' ${i}: `,t),t),t=>{throw He(zu,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}jo(e,t,n,r,s,i){return this.Wo(e,t,n,r,s)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ze,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=qu[e];let r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Hu.c_){const e=Fe();$u(e,Ve.STAT_EVENT,e=>{e.stat===Me.PROXY?Ge(Gu,"STAT_EVENT: detected buffering proxy"):e.stat===Me.NOPROXY&&Ge(Gu,"STAT_EVENT: detected no buffering proxy")}),Hu.c_=!0}}zo(e,t,n,r,s){const i=ju();return new Promise((s,o)=>{const a=new Re;a.setWithCredentials(!0),a.listenOnce(Oe.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Le.NO_ERROR:const t=a.getResponseJson();Ge(Gu,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Le.TIMEOUT:Ge(Gu,`RPC '${e}' ${i} timed out`),o(new et(Ze.DEADLINE_EXCEEDED,"Request time out"));break;case Le.HTTP_ERROR:const n=a.getStatus();if(Ge(Gu,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ze).indexOf(t)>=0?t:Ze.UNKNOWN}(t.status);o(new et(e,t.message))}else o(new et(Ze.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new et(Ze.UNAVAILABLE,"Connection failed."));break;default:Qe(9055,{l_:e,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{Ge(Gu,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);Ge(Gu,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)})}T_(e,t,n){const r=ju(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const c=s.join("");Ge(Gu,`Creating RPC '${e}' stream ${r}: ${c}`,o);const u=i.createWebChannel(c,o);this.I_(u);let h=!1,l=!1;const d=new Ku({Ho:t=>{l?Ge(Gu,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Ge(Gu,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),Ge(Gu,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Jo:()=>u.close()});return $u(u,Pe.EventType.OPEN,()=>{l||(Ge(Gu,`RPC '${e}' stream ${r} transport opened.`),d.i_())}),$u(u,Pe.EventType.CLOSE,()=>{l||(l=!0,Ge(Gu,`RPC '${e}' stream ${r} transport closed`),d.o_(),this.E_(u))}),$u(u,Pe.EventType.ERROR,t=>{l||(l=!0,He(Gu,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new et(Ze.UNAVAILABLE,"The operation could not be completed")))}),$u(u,Pe.EventType.MESSAGE,t=>{var n;if(!l){const s=t.data[0];Ye(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null==(n=i[0])?void 0:n.error);if(o){Ge(Gu,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=mo[e];if(void 0!==t)return yo(t)}(t),s=o.message;"NOT_FOUND"===t&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&He(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=Ze.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),l=!0,d.o_(new et(n,s)),u.close()}else Ge(Gu,`RPC '${e}' stream ${r} received:`,s),d.__(s)}}),Hu.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ue()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wu(){return"undefined"!=typeof window?window:null}function Qu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e){return new Lo(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hu.c_=!1;class Yu{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Ge("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="PersistentStream";class Zu{constructor(e,t,n,r,s,i,o,a){this.Ci=e,this.b_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yu(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Ze.RESOURCE_EXHAUSTED?($e(t.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Ze.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new et(Ze.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.H_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ge(Xu,"close with error: "+e),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Ge(Xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eh extends Zu{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Qe(39313,{state:r}),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Ye(void 0===t||"string"==typeof t,58123),Vr.fromBase64String(t||"")):(Ye(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Vr.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Ze.UNKNOWN:yo(e.code);return new et(t,e.message||"")}(a);n=new ko(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Go(e,r.document.name),i=Bo(r.document.updateTime),o=r.document.createTime?Bo(r.document.createTime):Pt.min(),a=new Ss({mapValue:{fields:r.document.fields}}),c=ks.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new So(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Go(e,r.document),i=r.readTime?Bo(r.readTime):Pt.min(),o=ks.newNoDocument(s,i),a=r.removedTargetIds||[];n=new So([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Go(e,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in t))return Qe(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new po(r,s),o=e.targetId;n=new Co(o,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Pt.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Pt.min():t.readTime?Bo(t.readTime):Pt.min()}(e);return this.listener.J_(t,n)}Z_(e){const t={};t.database=Wo(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ti(r)?{documents:Zo(e,r)}:{query:ea(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Fo(e,t.resumeToken);const r=Mo(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Pt.min())>0){n.readTime=Vo(e,t.snapshotVersion.toTimestamp());const r=Mo(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Qe(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.K_(t)}X_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.K_(t)}}class th extends Zu{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Ye(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Bo(e.updateTime):Bo(t);return n.isEqual(Pt.min())&&(n=Bo(t)),new Wi(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Bo(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Wo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Yo(this.serializer,e))};this.K_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new et(Ze.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(e,zo(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ze.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new et(Ze.UNKNOWN,e.toString())})}jo(e,t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.jo(e,zo(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ze.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new et(Ze.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la("Connection failed 1 times. Most recent error: "+e.toString()),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($e(t),this.aa=!1):Ge("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="RemoteStore";class ih{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{ph(this)&&(Ge(sh,"Restarting streams for network reachability change."),await async function(e){const t=Xe(e);t.Ea.add(4),await ah(t),t.Va.set("Unknown"),t.Ea.delete(4),await oh(t)}(this))})}),this.Va=new rh(n,r)}}async function oh(e){if(ph(e))for(const t of e.Ra)await t(!0)}async function ah(e){for(const t of e.Ra)await t(!1)}function ch(e,t){const n=Xe(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),fh(n)?dh(n):Ph(n).O_()&&hh(n,t))}function uh(e,t){const n=Xe(e),r=Ph(n);n.Ia.delete(t),r.O_()&&lh(n,t),0===n.Ia.size&&(r.O_()?r.L_():ph(n)&&n.Va.set("Unknown"))}function hh(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Pt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ph(e).Z_(t)}function lh(e,t){e.da.$e(t),Ph(e).X_(t)}function dh(e){e.da=new No({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Ph(e).start(),e.Va.ua()}function fh(e){return ph(e)&&!Ph(e).x_()&&e.Ia.size>0}function ph(e){return 0===Xe(e).Ea.size}function mh(e){e.da=void 0}async function gh(e){e.Va.set("Online")}async function yh(e){e.Ia.forEach((t,n)=>{hh(e,t)})}async function vh(e,t){mh(e),fh(e)?(e.Va.ha(t),dh(e)):e.Va.set("Unknown")}async function wh(e,t,n){if(e.Va.set("Online"),t instanceof ko&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.da.removeTarget(r))}(e,t)}catch(r){Ge(sh,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ih(e,r)}else if(t instanceof So?e.da.Xe(t):t instanceof Co?e.da.st(t):e.da.tt(t),!n.isEqual(Pt.min()))try{const t=await pu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Ia.get(r);s&&e.Ia.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t);if(!r)return;e.Ia.set(t,r.withResumeToken(Vr.EMPTY_BYTE_STRING,r.snapshotVersion)),lh(e,t);const s=new ha(r.target,t,n,r.sequenceNumber);hh(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){Ge(sh,"Failed to raise snapshot:",s),await Ih(e,s)}}async function Ih(e,t,n){if(!en(t))throw t;e.Ea.add(1),await ah(e),e.Va.set("Offline"),n||(n=()=>pu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ge(sh,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await oh(e)})}function bh(e,t){return t().catch(n=>Ih(e,n,t))}async function Eh(e){const t=Xe(e),n=Oh(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:hn;for(;_h(t);)try{const e=await gu(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,Th(t,e)}catch(s){await Ih(t,s)}Sh(t)&&Ch(t)}function _h(e){return ph(e)&&e.Ta.length<10}function Th(e,t){e.Ta.push(t);const n=Oh(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Sh(e){return ph(e)&&!Oh(e).x_()&&e.Ta.length>0}function Ch(e){Oh(e).start()}async function kh(e){Oh(e).ra()}async function Ah(e){const t=Oh(e);for(const n of e.Ta)t.ea(n.mutations)}async function Nh(e,t,n){const r=e.Ta.shift(),s=lo.from(r,t,n);await bh(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Eh(e)}async function Dh(e,t){t&&Oh(e).Y_&&await async function(e,t){if(function(e){switch(e){case Ze.OK:return Qe(64938);case Ze.CANCELLED:case Ze.UNKNOWN:case Ze.DEADLINE_EXCEEDED:case Ze.RESOURCE_EXHAUSTED:case Ze.INTERNAL:case Ze.UNAVAILABLE:case Ze.UNAUTHENTICATED:return!1;case Ze.INVALID_ARGUMENT:case Ze.NOT_FOUND:case Ze.ALREADY_EXISTS:case Ze.PERMISSION_DENIED:case Ze.FAILED_PRECONDITION:case Ze.ABORTED:case Ze.OUT_OF_RANGE:case Ze.UNIMPLEMENTED:case Ze.DATA_LOSS:return!0;default:return Qe(15467,{code:e})}}(n=t.code)&&n!==Ze.ABORTED){const n=e.Ta.shift();Oh(e).B_(),await bh(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Eh(e)}var n}(e,t),Sh(e)&&Ch(e)}async function xh(e,t){const n=Xe(e);n.asyncQueue.verifyOperationInProgress(),Ge(sh,"RemoteStore received new credentials");const r=ph(n);n.Ea.add(3),await ah(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await oh(n)}async function Rh(e,t){const n=Xe(e);t?(n.Ea.delete(2),await oh(n)):t||(n.Ea.add(2),await ah(n),n.Va.set("Unknown"))}function Ph(e){return e.ma||(e.ma=function(e,t,n){const r=Xe(e);return r.sa(),new eh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:gh.bind(null,e),Yo:yh.bind(null,e),t_:vh.bind(null,e),J_:wh.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),fh(e)?dh(e):e.Va.set("Unknown")):(await e.ma.stop(),mh(e))})),e.ma}function Oh(e){return e.fa||(e.fa=function(e,t,n){const r=Xe(e);return r.sa(),new th(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kh.bind(null,e),t_:Dh.bind(null,e),ta:Ah.bind(null,e),na:Nh.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Eh(e)):(await e.fa.stop(),e.Ta.length>0&&(Ge(sh,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lh{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Lh(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new et(Ze.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mh(e,t){if($e("AsyncQueue",`${t}: ${e}`),en(e))return new et(Ze.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{static emptySet(e){return new Vh(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||bt.comparator(t.key,n.key):(e,t)=>bt.comparator(e.key,t.key),this.keyedMap=_i(),this.sortedSet=new Nr(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Vh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.ga=new Nr(bt.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Qe(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Uh{constructor(e,t,n,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Uh(e,t,Vh.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&di(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class jh{constructor(){this.queries=zh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Xe(e),r=n.queries;n.queries=zh(),r.forEach((e,n)=>{for(const r of n.ba)r.onError(t)})}(this,new et(Ze.ABORTED,"Firestore shutting down"))}}function zh(){return new wi(e=>fi(e),di)}async function qh(e,t){const n=Xe(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Sa()&&t.Da()&&(r=2):(i=new Bh,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const e=Mh(o,`Initialization of query '${pi(t.query)}' failed`);return void t.onError(e)}n.queries.set(s,i),i.ba.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&Hh(n)}async function Kh(e,t){const n=Xe(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.ba.indexOf(t);e>=0&&(i.ba.splice(e,1),0===i.ba.length?s=t.Da()?0:1:!i.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Gh(e,t){const n=Xe(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.ba)e.Fa(s)&&(r=!0);t.wa=s}}r&&Hh(n)}function $h(e,t,n){const r=Xe(e),s=r.queries.get(t);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(t)}function Hh(e){e.Ca.forEach(e=>{e.next()})}var Wh,Qh;(Qh=Wh||(Wh={})).Ma="default",Qh.Cache="cache";class Jh{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Uh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.Ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Uh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wh.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.key=e}}class Xh{constructor(e){this.key=e}}class Zh{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Di(),this.mutatedKeys=Di(),this.eu=yi(e),this.tu=new Vh(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Fh,r=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),h=mi(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.su(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.eu(h,a)>0||c&&this.eu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{tu:i,iu:n,Ss:o,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const i=e.iu.ya();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qe(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const o=t&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==i.length||c?{snapshot:new Uh(this.query,e.tu,s,i,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Di(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new Xh(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new Yh(n))}),t}cu(e){this.Za=e.ks,this.Ya=Di();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uh.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const el="SyncEngine";class tl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nl{constructor(e){this.key=e,this.hu=!1}}class rl{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new wi(e=>fi(e),di),this.Iu=new Map,this.Eu=new Set,this.Ru=new Nr(bt.comparator),this.Au=new Map,this.Vu=new zc,this.du={},this.mu=new Map,this.fu=mc.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function sl(e,t,n=!0){const r=Pl(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ol(r,t,n,!0),s}async function il(e,t){const n=Pl(e);await ol(n,t,!0,!1)}async function ol(e,t,n,r){const s=await yu(e.localStore,hi(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await al(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&ch(e.remoteStore,s),a}async function al(e,t,n,r,s){e.pu=(t,n,r)=>async function(e,t,n,r){let s=t.view.ru(n);s.Ss&&(s=await wu(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return wl(e,t.targetId,a.au),a.snapshot}(e,t,n,r);const i=await wu(e.localStore,t,!0),o=new Zh(t,i.ks),a=o.ru(i.documents),c=To.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=o.applyChanges(a,e.isPrimaryClient,c);wl(e,n,u.au);const h=new tl(t,n,o);return e.Tu.set(t,h),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),u.snapshot}async function cl(e,t,n){const r=Xe(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(e=>!di(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&uh(r.remoteStore,s.targetId),yl(r,s.targetId)}).catch($t)):(yl(r,s.targetId),await vu(r.localStore,s.targetId,!0))}async function ul(e,t){const n=Xe(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uh(n.remoteStore,r.targetId))}async function hl(e,t){const n=Xe(e);try{const e=await mu(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(Ye(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?Ye(r.hu,14607):e.removedDocuments.size>0&&(Ye(r.hu,42227),r.hu=!1))}),await El(n,e,t)}catch(r){await $t(r)}}function ll(e,t,n){const r=Xe(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const s=r.view.va(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=Xe(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.ba)s.va(t)&&(r=!0)}),r&&Hh(n)}(r.eventManager,t),e.length&&r.Pu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dl(e,t,n){const r=Xe(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let e=new Nr(bt.comparator);e=e.insert(i,ks.newNoDocument(i,Pt.min()));const n=Di().add(i),s=new _o(Pt.min(),new Map,new Nr(lt),e,n);await hl(r,s),r.Ru=r.Ru.remove(i),r.Au.delete(t),bl(r)}else await vu(r.localStore,t,!1).then(()=>yl(r,t,n)).catch($t)}async function fl(e,t){const n=Xe(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Xe(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ht.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);Ye(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Di();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);gl(n,r,null),ml(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,e)}catch(s){await $t(s)}}async function pl(e,t,n){const r=Xe(e);try{const e=await function(e,t){const n=Xe(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Ye(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);gl(r,t,n),ml(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await El(r,e)}catch(s){await $t(s)}}function ml(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function gl(e,t,n){const r=Xe(e);let s=r.du[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function yl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||vl(e,t)})}function vl(e,t){e.Eu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(uh(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),bl(e))}function wl(e,t,n){for(const r of n)r instanceof Yh?(e.Vu.addReference(r.key,t),Il(e,r)):r instanceof Xh?(Ge(el,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||vl(e,r.key)):Qe(19791,{wu:r})}function Il(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Eu.has(r)||(Ge(el,"New document in limbo: "+n),e.Eu.add(r),bl(e))}function bl(e){for(;e.Eu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new bt(vt.fromString(t)),r=e.fu.next();e.Au.set(r,new nl(n)),e.Ru=e.Ru.insert(n,r),ch(e.remoteStore,new ha(hi(ai(n.path)),r,"TargetPurposeLimboResolution",un.ce))}}async function El(e,t,n){const r=Xe(e),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,a)=>{o.push(r.pu(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const s=e?!e.fromCache:null==(t=null==n?void 0:n.targetChanges.get(a.targetId))?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(e){s.push(e);const t=au.Es(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(e,t){const n=Xe(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ht.forEach(t,t=>Ht.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ht.forEach(t.Is,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!en(r))throw r;Ge(hu,"Failed to update sequence numbers: "+r)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=n.vs.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(e,s)}}}(r.localStore,i))}async function _l(e,t){const n=Xe(e);if(!n.currentUser.isEqual(t)){Ge(el,"User change. New user:",t.toKey());const e=await fu(n.localStore,t);n.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new et(Ze.CANCELLED,s))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await El(n,e.Ns)}var r,s}function Tl(e,t){const n=Xe(e),r=n.Au.get(t);if(r&&r.hu)return Di().add(r.key);{let e=Di();const r=n.Iu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}async function Sl(e,t){const n=Xe(e),r=await wu(n.localStore,t.query,!0),s=t.view.cu(r);return n.isPrimaryClient&&wl(n,t.targetId,s.au),s}async function Cl(e,t){const n=Xe(e);return bu(n.localStore,t).then(e=>El(n,e))}async function kl(e,t,n,r){const s=Xe(e),i=await function(e,t){const n=Xe(e),r=Xe(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Xn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):Ht.resolve(null)))}(s.localStore,t);var o,a;null!==i?("pending"===n?await Eh(s.remoteStore):"acknowledged"===n||"rejected"===n?(gl(s,t,r||null),ml(s,t),o=s.localStore,a=t,Xe(Xe(o).mutationQueue).nr(a)):Qe(6720,"Unknown batchState",{bu:n}),await El(s,i)):Ge(el,"Cannot apply mutation batch with id: "+t)}async function Al(e,t,n){const r=Xe(e),s=[],i=[];for(const o of t){let e;const t=r.Iu.get(o);if(t&&0!==t.length){e=await yu(r.localStore,hi(t[0]));for(const e of t){const t=r.Tu.get(e),n=await Sl(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await Iu(r.localStore,o);e=await yu(r.localStore,t),await al(r,Nl(t),o,!1,e.resumeToken)}s.push(e)}return r.Pu.J_(i),s}function Nl(e){return oi(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Dl(e){return t=Xe(e).localStore,Xe(Xe(t).persistence).hs();var t}async function xl(e,t,n,r){const s=Xe(e);if(s.gu)return void Ge(el,"Ignoring unexpected query state notification.");const i=s.Iu.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await bu(s.localStore,gi(i[0])),r=_o.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Vr.EMPTY_BYTE_STRING);await El(s,e,r);break}case"rejected":await vu(s.localStore,t,!0),yl(s,t,r);break;default:Qe(64155,n)}}async function Rl(e,t,n){const r=Pl(e);if(r.gu){for(const e of t){if(r.Iu.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){Ge(el,"Adding an already active target "+e);continue}const t=await Iu(r.localStore,e),n=await yu(r.localStore,t);await al(r,Nl(t),n.targetId,!1,n.resumeToken),ch(r.remoteStore,n)}for(const e of n)r.Iu.has(e)&&await vu(r.localStore,e,!1).then(()=>{uh(r.remoteStore,e),yl(r,e)}).catch($t)}}function Pl(e){const t=Xe(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=hl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dl.bind(null,t),t.Pu.J_=Gh.bind(null,t.eventManager),t.Pu.yu=$h.bind(null,t.eventManager),t}function Ol(e){const t=Xe(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pl.bind(null,t),t}class Ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ju(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return du(this.persistence,new uu,e.initialUser,this.serializer)}Cu(e){return new Wc(Jc.Vi,this.serializer)}Du(e){return new Mu}async terminate(){var e,t;null==(e=this.gcScheduler)||e.stop(),null==(t=this.indexBackfillerScheduler)||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ll.provider={build:()=>new Ll};class Ml extends Ll{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof Yc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new _c(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?ac.withCacheSize(this.cacheSizeBytes):ac.DEFAULT;return new Wc(e=>Yc.Vi(e,t),this.serializer)}}class Vl extends Ll{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Ol(this.xu.syncEngine),await Eh(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return du(this.persistence,new uu,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new _c(n,e.asyncQueue,t)}Mu(e,t){const n=new cn(t,this.persistence);return new an(e.asyncQueue,n)}Cu(e){const t=ou(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ac.withCacheSize(this.cacheSizeBytes):ac.DEFAULT;return new ru(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Wu(),Qu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Mu}}class Fl extends Vl{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof Lu&&(this.sharedClientState.syncEngine={So:kl.bind(null,t),Do:xl.bind(null,t),Co:Rl.bind(null,t),hs:Dl.bind(null,t),bo:Cl.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi(async e=>{await async function(e,t){const n=Xe(e);if(Pl(n),Ol(n),!0===t&&!0!==n.gu){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Al(n,e.toArray());n.gu=!0,await Rh(n.remoteStore,!0);for(const r of t)ch(n.remoteStore,r)}else if(!1===t&&!1!==n.gu){const e=[];let t=Promise.resolve();n.Iu.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(yl(n,s),vu(n.localStore,s,!0))),uh(n.remoteStore,s)}),await t,await Al(n,e),function(e){const t=Xe(e);t.Au.forEach((e,n)=>{uh(t.remoteStore,n)}),t.Vu.zr(),t.Au=new Map,t.Ru=new Nr(bt.comparator)}(n),n.gu=!1,await Rh(n.remoteStore,!1)}}(this.xu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Du(e){const t=Wu();if(!Lu.v(t))throw new et(Ze.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ou(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lu(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ul{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ll(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=_l.bind(null,this.syncEngine),await Rh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jh}createDatastore(e){const t=Ju(e.databaseInfo.databaseId),n=function(e){return new Hu(e)}(e.databaseInfo);return function(e,t,n,r){return new nh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new ih(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>ll(this.syncEngine,e,0),Uu.v()?new Uu:new Vu)}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new rl(e,t,n,r,s,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Xe(e);Ge(sh,"RemoteStore shutting down."),t.Ea.add(5),await ah(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),null==(e=this.datastore)||e.terminate(),null==(t=this.eventManager)||t.terminate()}}Ul.provider={build:()=>new Ul};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="FirestoreClient";class zl{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=je.UNAUTHENTICATED,this.clientId=ht.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{Ge(jl,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Ge(jl,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Mh(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ql(e,t){e.asyncQueue.verifyOperationInProgress(),Ge(jl,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await fu(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Kl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ge(jl,"Using user provided OfflineComponentProvider");try{await ql(e,e._uninitializedComponentsProvider._offline)}catch(t){const s=t;if(!("FirebaseError"===(n=s).name?n.code===Ze.FAILED_PRECONDITION||n.code===Ze.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw s;He("Error using user provided cache. Falling back to memory cache: "+s),await ql(e,new Ll)}}else Ge(jl,"Using default OfflineComponentProvider"),await ql(e,new Ml(void 0));var n;return e._offlineComponents}(e);Ge(jl,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>xh(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>xh(t.remoteStore,n)),e._onlineComponents=t}async function Gl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ge(jl,"Using user provided OnlineComponentProvider"),await Kl(e,e._uninitializedComponentsProvider._online)):(Ge(jl,"Using default OnlineComponentProvider"),await Kl(e,new Ul))),e._onlineComponents}async function $l(e){const t=await Gl(e),n=t.eventManager;return n.onListen=sl.bind(null,t.syncEngine),n.onUnlisten=cl.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=il.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=ul.bind(null,t.syncEngine),n}function Hl(e,t){const n=new tt;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=Ol(e);try{const e=await function(e,t){const n=Xe(e),r=Rt.now(),s=t.reduce((e,t)=>e.add(t.key),Di());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=bi(),c=Di();return n.xs.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=to(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new so(e.key,t,Cs(t.value.mapValue),Qi.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Ti(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new Nr(lt)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await El(r,e.changes),await Eh(r.remoteStore)}catch(s){const e=Mh(s,"Failed to persist write");n.reject(e)}}(await function(e){return Gl(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Wl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ql=new Map;class Jl{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new et(Ze.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new et(Ze.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new et(Ze.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wl(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new et(Ze.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Yl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new et(Ze.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new et(Ze.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rt;switch(e.type){case"firstParty":return new ot(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new et(Ze.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ql.get(e);t&&(Ge("ComponentProvider","Removing Datastore"),Ql.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Xl(this.firestore,e,this._query)}}class Zl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ed(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zl(this.firestore,e,this._key)}toJSON(){return{type:Zl._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Nt(t,Zl._jsonSchema))return new Zl(e,n||null,new bt(vt.fromString(t.referencePath)))}}Zl._jsonSchemaVersion="firestore/documentReference/1.0",Zl._jsonSchema={type:At("string",Zl._jsonSchemaVersion),referencePath:At("string")};class ed extends Xl{constructor(e,t,n){super(e,t,ai(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zl(this.firestore,null,new bt(e))}withConverter(e){return new ed(this.firestore,e,this._path)}}function td(e,t,...n){if(e=x(e),Et("collection","path",t),e instanceof Yl){const r=vt.fromString(t,...n);return Tt(r),new ed(e,null,r)}{if(!(e instanceof Zl||e instanceof ed))throw new et(Ze.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return Tt(r),new ed(e.firestore,null,r)}}function nd(e,t,...n){if(e=x(e),1===arguments.length&&(t=ht.newId()),Et("doc","path",t),e instanceof Yl){const r=vt.fromString(t,...n);return _t(r),new Zl(e,null,new bt(r))}{if(!(e instanceof Zl||e instanceof ed))throw new et(Ze.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return _t(r),new Zl(e.firestore,e instanceof ed?e.converter:null,new bt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="AsyncQueue";class sd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yu(this,"async_queue_retry"),this._c=()=>{const e=Qu();e&&Ge(rd,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=Qu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new tt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!en(e))throw e;Ge(rd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,$e("INTERNAL UNHANDLED ERROR: ",id(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Lh.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Qe(47125,{Pc:id(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function id(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class od extends Yl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sd,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sd(e),this._firestoreClient=void 0,await e}}}function ad(e,t,n){n||(n=Jr);const r=fe(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n});if(T(r.getOptions(n),t))return e;throw new et(Ze.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new et(Ze.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new et(Ze.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&l(t.host)&&d(t.host),r.initialize({options:t,instanceIdentifier:n})}function cd(e){if(e._terminated)throw new et(Ze.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,s;const i=e._freezeSettings(),o=function(e,t,n,r,s){return new Qr(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Wl(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null==(t=e._app)?void 0:t.options.appId)||"",e._persistenceKey,null==(n=e._app)?void 0:n.options.apiKey,i);e._componentsProvider||(null==(r=i.localCache)?void 0:r._offlineComponentProvider)&&(null==(s=i.localCache)?void 0:s._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new zl(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class ud{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ud(Vr.fromBase64String(e))}catch(t){throw new et(Ze.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ud(Vr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ud._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nt(e,ud._jsonSchema))return ud.fromBase64String(e.bytes)}}ud._jsonSchemaVersion="firestore/bytes/1.0",ud._jsonSchema={type:At("string",ud._jsonSchemaVersion),bytes:At("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new et(Ze.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new et(Ze.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new et(Ze.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return lt(this._lat,e._lat)||lt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dd._jsonSchemaVersion}}static fromJSON(e){if(Nt(e,dd._jsonSchema))return new dd(e.latitude,e.longitude)}}dd._jsonSchemaVersion="firestore/geoPoint/1.0",dd._jsonSchema={type:At("string",dd._jsonSchemaVersion),latitude:At("number"),longitude:At("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fd{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fd._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nt(e,fd._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new fd(e.vectorValues);throw new et(Ze.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fd._jsonSchemaVersion="firestore/vectorValue/1.0",fd._jsonSchema={type:At("string",fd._jsonSchemaVersion),vectorValues:At("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pd=/^__.*__$/;class md{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new so(e,this.data,this.fieldMask,t,this.fieldTransforms):new ro(e,this.data,t,this.fieldTransforms)}}class gd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new so(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qe(40011,{dataSource:e})}}class vd{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var t;const n=null==(t=this.path)?void 0:t.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var t;const n=null==(t=this.path)?void 0:t.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Pd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(0===e.length)throw this.createError("Document fields must not be empty");if(yd(this.dataSource)&&pd.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class wd{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ju(e)}createContext(e,t,n,r=!1){return new vd({dataSource:e,methodName:t,targetDoc:n,path:It.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Id(e){const t=e._freezeSettings(),n=Ju(e._databaseId);return new wd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function bd(e,t,n,r,s,i={}){const o=e.createContext(i.merge||i.mergeFields?2:0,t,n,s);Nd("Data must be an object, but it was:",o,r);const a=kd(r,o);let c,u;if(i.merge)c=new Lr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Dd(t,r,n);if(!o.contains(s))throw new et(Ze.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Od(e,s)||e.push(s)}c=new Lr(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new md(new Ss(a),c,u)}class Ed extends ld{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.createError(this._methodName+"() can only appear at the top level of your update data"):e.createError(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ed}}function _d(e,t,n){return new vd({dataSource:3,targetDoc:t.settings.targetDoc,methodName:e._methodName,arrayElement:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Td extends ld{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=_d(this,e,!0),n=this.Ac.map(e=>Cd(e,t)),r=new Bi(n);return new Hi(e.path,r)}isEqual(e){return e instanceof Td&&T(this.Ac,e.Ac)}}class Sd extends ld{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=_d(this,e,!0),n=this.Ac.map(e=>Cd(e,t)),r=new zi(n);return new Hi(e.path,r)}isEqual(e){return e instanceof Sd&&T(this.Ac,e.Ac)}}function Cd(e,t){if(Ad(e=x(e)))return Nd("Unsupported field value:",t,e),kd(e,t);if(e instanceof ld)return function(e,t){if(!yd(t.dataSource))throw t.createError(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.createError(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.createError("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Cd(s,t.childContextForArray(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=x(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return function(e,t){return fn(t)?Oi(t):Pi(e,t)}(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Rt.fromDate(e);return{timestampValue:Vo(t.serializer,n)}}if(e instanceof Rt){const n=new Rt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vo(t.serializer,n)}}if(e instanceof dd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ud)return{bytesValue:Fo(t.serializer,e._byteString)};if(e instanceof Zl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:jo(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof fd)return function(e,t){const n=e instanceof fd?e.toArray():e;return{mapValue:{fields:{[Xr]:{stringValue:ts},[ns]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.createError("VectorValues must only contain numeric values.");return Pi(t.serializer,e)})}}}}}}(e,t);if(ua(e))return e._toProto(t.serializer);throw t.createError("Unsupported field value: "+Ct(e))}(e,t)}function kd(e,t){const n={};return Ar(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):kr(e,(e,r)=>{const s=Cd(r,t.childContextForField(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Ad(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Rt||e instanceof dd||e instanceof ud||e instanceof Zl||e instanceof ld||e instanceof fd||ua(e))}function Nd(e,t,n){if(!Ad(n)||!St(n)){const r=Ct(n);throw"an object"===r?t.createError(e+" a custom object"):t.createError(e+" "+r)}}function Dd(e,t,n){if((t=x(t))instanceof hd)return t._internalPath;if("string"==typeof t)return Rd(e,t);throw Pd("Field path arguments must be of type string or ",e,!1,void 0,n)}const xd=new RegExp("[~\\*/\\[\\]]");function Rd(e,t,n){if(t.search(xd)>=0)throw Pd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hd(...t.split("."))._internalPath}catch(r){throw Pd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pd(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new et(Ze.INVALID_ARGUMENT,a+e+c)}function Od(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld extends class{convertValue(e,t="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Br(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Qe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return kr(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const s=null==(r=null==(n=null==(t=e.fields)?void 0:t[ns].arrayValue)?void 0:n.values)?void 0:r.map(e=>Br(e.doubleValue));return new fd(s)}convertGeoPoint(e){return new dd(Br(e.latitude),Br(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Hr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const t=Ur(e);return new Rt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=vt.fromString(e);Ye(ca(n),9688,{name:e});const r=new Yr(n.get(1),n.get(3)),s=new bt(n.popFirst(5));return r.isEqual(t)||$e(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ud(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zl(this.firestore,null,t)}}function Md(...e){return new Td("arrayUnion",e)}function Vd(...e){return new Sd("arrayRemove",e)}const Fd="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new jd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return(null==(e=this._document)?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Dd("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class jd extends Bd{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new et(Ze.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qd{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=function(e){return new Gd(null==e?void 0:e.forceOwnership)}(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Kd(e){return new qd(e)}class Gd{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ul.provider,this._offlineComponentProvider={build:t=>new Vl(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class $d{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ul.provider,this._offlineComponentProvider={build:t=>new Fl(t,null==e?void 0:e.cacheSizeBytes)}}}function Hd(){return new $d}class Wd{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qd extends Bd{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Dd("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new et(Ze.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Qd._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Qd._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qd._jsonSchema={type:At("string",Qd._jsonSchemaVersion),bundleSource:At("string","DocumentSnapshot"),bundleName:At("string"),bundle:At("string")};class Jd extends Qd{data(e={}){return super.data(e)}}class Yd{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Wd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Jd(this._firestore,this._userDataWriter,n.key,n,new Wd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new et(Ze.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Jd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Wd(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Jd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Wd(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Xd(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new et(Ze.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yd._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ht.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qe(61501,{type:e})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(e){e=kt(e,Xl);const t=kt(e.firestore,od),n=cd(t),r=new Ld(t);return zd(e._query),function(e,t,n={}){const r=new tt;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Bl({next:n=>{i.Nu(),t.enqueueAndForget(()=>Kh(e,o)),n.fromCache&&"server"===r.source?s.reject(new et(Ze.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Jh(n,i,{includeMetadataChanges:!0,Ka:!0});return qh(e,o)}(await $l(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new Yd(t,r,e,n))}function ef(e,t,n){e=kt(e,Zl);const r=kt(e.firestore,od),s=function(e,t,n){let r;return r=e?e.toFirestore(t):t,r}(e.converter,t);return rf(r,[bd(Id(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Qi.none())])}function tf(e,t,n,...r){e=kt(e,Zl);const s=kt(e.firestore,od),i=Id(s);let o;return o="string"==typeof(t=x(t))||t instanceof hd?function(e,t,n,r,s,i){const o=e.createContext(1,t,n),a=[Dd(t,r,n)],c=[s];if(i.length%2!=0)throw new et(Ze.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Dd(t,i[d])),c.push(i[d+1]);const u=[],h=Ss.empty();for(let d=a.length-1;d>=0;--d)if(!Od(u,a[d])){const e=a[d];let t=c[d];t=x(t);const n=o.childContextForFieldPath(e);if(t instanceof Ed)u.push(e);else{const r=Cd(t,n);null!=r&&(u.push(e),h.set(e,r))}}const l=new Lr(u);return new gd(h,l,o.fieldTransforms)}(i,"updateDoc",e._key,t,n,r):function(e,t,n,r){const s=e.createContext(1,t,n);Nd("Data must be an object, but it was:",s,r);const i=[],o=Ss.empty();kr(r,(e,r)=>{const a=Rd(t,e,n);r=x(r);const c=s.childContextForFieldPath(a);if(r instanceof Ed)i.push(a);else{const e=Cd(r,c);null!=e&&(i.push(a),o.set(a,e))}});const a=new Lr(i);return new gd(o,a,s.fieldTransforms)}(i,"updateDoc",e._key,t),rf(s,[o.toMutation(e._key,Qi.exists(!0))])}function nf(e,...t){var n,r,s;e=x(e);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||Ud(t[o])||(i=t[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ud(t[o])){const e=t[o];t[o]=null==(n=e.next)?void 0:n.bind(e),t[o+1]=null==(r=e.error)?void 0:r.bind(e),t[o+2]=null==(s=e.complete)?void 0:s.bind(e)}let c,u,h;if(e instanceof Zl)u=kt(e.firestore,od),h=ai(e._key.path),c={next:n=>{t[o]&&t[o](function(e,t,n){const r=n.docs.get(t._key),s=new Ld(e);return new Qd(e,s,t._key,r,new Wd(n.hasPendingWrites,n.fromCache),t.converter)}(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=kt(e,Xl);u=kt(n.firestore,od),h=n._query;const r=new Ld(u);c={next:e=>{t[o]&&t[o](new Yd(u,r,n,e))},error:t[o+1],complete:t[o+2]},zd(e._query)}return function(e,t,n,r){const s=new Bl(r),i=new Jh(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>qh(await $l(e),i)),()=>{s.Nu(),e.asyncQueue.enqueueAndForget(async()=>Kh(await $l(e),i))}}(cd(u),h,a,c)}function rf(e,t){return Hl(cd(e),t)}Yd._jsonSchemaVersion="firestore/querySnapshot/1.0",Yd._jsonSchema={type:At("string",Yd._jsonSchemaVersion),bundleSource:At("string","QuerySnapshot"),bundleName:At("string"),bundle:At("string")},function(e,t=!0){ze="12.10.0",de(new R("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new od(new st(e.getProvider("auth-internal")),new ct(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new et(Ze.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(e.options.projectId,t)}(s,n),s);return r={useFetchStreams:t,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),ve(Fd,"4.12.0",e),ve(Fd,"4.12.0","esm2020")}();function sf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ve("firebase","12.10.0","app");const of=sf,af=new E("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),cf=new j("@firebase/auth");function uf(e,...t){cf.logLevel<=L.ERROR&&cf.error("Auth (12.10.0): "+e,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e,...t){throw pf(e,...t)}function lf(e,...t){return pf(e,...t)}function df(e,t,n){const r={...of(),[t]:n};return new E("auth","Firebase",r).create(t,{appName:e.name})}function ff(e){return df(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return af.create(e,...t)}function mf(e,t,...n){if(!e)throw pf(t,...n)}function gf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw uf(t),new Error(t)}function yf(e,t){e||gf(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.href)||""}function wf(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==wf()&&"https:"!==wf()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bf{constructor(e,t){this.shortDelay=e,this.longDelay=t,yf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return If()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(e,t){yf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void gf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void gf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void gf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Sf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cf=new bf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Af(e,t,n,r,s={}){return Nf(e,s,async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=C({key:e.config.apiKey,...i}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:a,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&l(e.emulatorConfig.host)&&(c.credentials="include"),_f.fetch()(await xf(e,e.config.apiHost,n,o),c)})}async function Nf(e,t,n){e._canInitEmulator=!1;const r={...Tf,...t};try{const t=new Pf(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Of(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Of(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Of(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Of(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw df(e,a,o);hf(e,a)}}catch(s){if(s instanceof b)throw s;hf(e,"network-request-failed",{message:String(s)})}}async function Df(e,t,n,r,s={}){const i=await Af(e,t,n,r,s);return"mfaPendingCredential"in i&&hf(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function xf(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?Ef(e.config,s):`${e.config.apiScheme}://${s}`;if(Sf.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}function Rf(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(lf(this.auth,"network-request-failed")),Cf.get())})}}function Of(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=lf(e,t,r);return s.customData._tokenResponse=n,s}function Lf(e){return void 0!==e&&void 0!==e.enterprise}class Mf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Rf(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vf(e,t){return Af(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Uf(e){return 1e3*Number(e)}function Bf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return uf("JWT malformed, contained fewer than 3 sections"),null;try{const e=i(n);return e?JSON.parse(e):(uf("Failed to decode base64 JWT payload"),null)}catch(s){return uf("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}function jf(e){const t=Bf(e);return mf(t,"internal-error"),mf(void 0!==t.exp,"internal-error"),mf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof b&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class qf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ff(this.lastLoginAt),this.creationTime=Ff(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(e){var t;const n=e.auth,r=await e.getIdToken(),s=await zf(e,Vf(n,{idToken:r}));mf(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null==(t=i.providerUserInfo)?void 0:t.length)?$f(i.providerUserInfo):[],a=(c=e.providerData,u=o,[...c.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var c,u;const h=e.isAnonymous,l=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!h&&l,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function $f(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){mf(e.idToken,"internal-error"),mf(void 0!==e.idToken,"internal-error"),mf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){mf(0!==e.length,"internal-error");const t=jf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(mf(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await Nf(e,{},async()=>{const n=C({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=await xf(e,r,"/v1/token","key="+s),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&l(e.emulatorConfig.host)&&(a.credentials="include"),_f.fetch()(i,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Hf;return n&&(mf("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(mf("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(mf("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hf,this.toJSON())}_performRefresh(){return gf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e,t){mf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Qf{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new qf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await zf(this,this.stsTokenManager.getToken(this.auth,e));return mf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=x(e),r=await n.getIdToken(t),s=Bf(r);mf(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ff(Uf(s.auth_time)),issuedAtTime:Ff(Uf(s.iat)),expirationTime:Ff(Uf(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=x(e);await Gf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(mf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qf({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){mf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Gf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(ff(this.auth));const e=await this.getIdToken();return await zf(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Af(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:h,emailVerified:l,isAnonymous:d,providerData:f,stsTokenManager:p}=t;mf(h&&p,e,"internal-error");const m=Hf.fromJSON(this.name,p);mf("string"==typeof h,e,"internal-error"),Wf(n,e.name),Wf(r,e.name),mf("boolean"==typeof l,e,"internal-error"),mf("boolean"==typeof d,e,"internal-error"),Wf(s,e.name),Wf(i,e.name),Wf(o,e.name),Wf(a,e.name),Wf(c,e.name),Wf(u,e.name);const g=new Qf({uid:h,auth:e,email:r,emailVerified:l,displayName:n,isAnonymous:d,photoURL:i,phoneNumber:s,tenantId:o,stsTokenManager:m,createdAt:c,lastLoginAt:u});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Hf;r.updateFromServerResponse(t);const s=new Qf({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Gf(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];mf(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?$f(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||(null==s?void 0:s.length)),o=new Hf;o.updateFromIdToken(n);const a=new Qf({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Kf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==s?void 0:s.length))};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;function Yf(e){yf(e instanceof Function,"Expected a class definition");let t=Jf.get(e);return t?(yf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jf.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xf.type="NONE";const Zf=Xf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e,t,n){return`firebase:${e}:${t}:${n}`}class tp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ep(this.userKey,r.apiKey,s),this.fullPersistenceKey=ep("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Vf(this.auth,{idToken:e}).catch(()=>{});return t?Qf._fromGetAccountInfoResponse(this.auth,t,e):null}return Qf._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tp(Yf(Zf),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=r[0]||Yf(Zf);const i=ep(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(i);if(t){let n;if("string"==typeof t){const r=await Vf(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Qf._fromGetAccountInfoResponse(e,r,t)}else n=Qf._fromJSON(e,t);c!==s&&(o=n),s=c;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new tp(s,e,n)):new tp(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(op(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cp(t))return"Blackberry";if(up(t))return"Webos";if(sp(t))return"Safari";if((t.includes("chrome/")||ip(t))&&!t.includes("edge/"))return"Chrome";if(ap(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function rp(e=g()){return/firefox\//i.test(e)}function sp(e=g()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ip(e=g()){return/crios\//i.test(e)}function op(e=g()){return/iemobile/i.test(e)}function ap(e=g()){return/android/i.test(e)}function cp(e=g()){return/blackberry/i.test(e)}function up(e=g()){return/webos/i.test(e)}function hp(e=g()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function lp(){return function(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function dp(e=g()){return hp(e)||ap(e)||up(e)||cp(e)||/windows phone/i.test(e)||op(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(e,t=[]){let n;switch(e){case"Browser":n=np(g());break;case"Worker":n=`${np(g())}-${e}`;break;default:n=e}return`${n}/JsCore/12.10.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(null==(t=e.allowedNonAlphanumericCharacters)?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yf(t)),this._initializationPromise=this.queue(async()=>{var n,r,s;if(!this._deleted&&(this.persistenceManager=await tp.create(this,e),null==(n=this._resolvePersistenceManagerAvailable)||n.call(this),!this._deleted)){if(null==(r=this._popupRedirectResolver)?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null==(s=this.currentUser)?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Vf(this,{idToken:e}),n=await Qf._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pe(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null==(t=this.redirectUser)?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return mf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gf(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(ff(this));const t=e?x(e):null;return t&&mf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&mf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(ff(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(ff(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yf(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Af(e,"GET","/v2/passwordPolicy",kf(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new mp(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new E("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Af(e,"POST","/v2/accounts:revokeToken",kf(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null==(e=this._currentUser)?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yf(e)||this._popupRedirectResolver;mf(t,this,"argument-error"),this.redirectPersistenceManager=await tp.create(this,[Yf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null==(t=this._currentUser)?void 0:t._redirectEventId)===e?this._currentUser:(null==(n=this.redirectUser)?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(null==(e=this.currentUser)?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(mf(o,this,"internal-error"),o.then(()=>{i||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return mf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null==(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null==(e=this.appCheckServiceProvider.getImmediate({optional:!0}))?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){cf.logLevel<=L.WARN&&cf.warn("Auth (12.10.0): "+e,...t)}("Error while retrieving App Check token: "+t.error),null==t?void 0:t.token}}function yp(e){return x(e)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new N(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return mf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ip(e){return wp.loadJS(e)}class bp{constructor(){this.enterprise=new Ep}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ep{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _p{constructor(e){this.type="recaptcha-enterprise",this.auth=yp(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return Af(e,"GET","/v2/recaptchaConfig",kf(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Mf(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const s=window.grecaptcha;Lf(s)?s.enterprise.ready(()=>{s.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new bp).execute("siteKey",{action:"verify"})}return new Promise((e,s)=>{n(this.auth).then(n=>{if(!t&&Lf(window.grecaptcha))r(n,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));let t=wp.recaptchaEnterpriseScript;0!==t.length&&(t+=n),Ip(t).then(()=>{r(n,e,s)}).catch(e=>{s(e)})}}).catch(e=>{s(e)})})}}async function Tp(e,t,n,r=!1,s=!1){const i=new _p(e);let o;if(s)o="NO_RECAPTCHA";else try{o=await i.verify(n)}catch(c){o=await i.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Sp(e,t,n,r,s){var i;if(null==(i=e._getRecaptchaConfig())?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Tp(e,t,n,"getOobCode"===n);return r(e,s)}return r(e,t).catch(async s=>{if("auth/missing-recaptcha-token"===s.code){const s=await Tp(e,t,n,"getOobCode"===n);return r(e,s)}return Promise.reject(s)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e,t,n){const r=yp(e);mf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=kp(t),{host:i,port:o}=function(e){const t=kp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Ap(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ap(t)}}}(t),a=null===o?"":":"+o,c={url:`${s}//${i}${a}/`},u=Object.freeze({host:i,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return mf(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void mf(T(c,r.config.emulator)&&T(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,l(i)?(d(`${s}//${i}${a}`),m("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function kp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ap(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Np{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gf("not implemented")}_getIdTokenResponse(e){return gf("not implemented")}_linkToIdToken(e,t){return gf("not implemented")}_getReauthenticationResolver(e){return gf("not implemented")}}async function Dp(e,t){return Af(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(e,t){return Df(e,"POST","/v1/accounts:signInWithPassword",kf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rp extends Np{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Rp(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Rp(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Sp(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",xp);case"emailLink":return async function(e,t){return Df(e,"POST","/v1/accounts:signInWithEmailLink",kf(e,t))}(e,{email:this._email,oobCode:this._password});default:hf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Sp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dp);case"emailLink":return async function(e,t){return Df(e,"POST","/v1/accounts:signInWithEmailLink",kf(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:hf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(e,t){return Df(e,"POST","/v1/accounts:signInWithIdp",kf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Op(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):hf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const i=new Op(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return Pp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=C(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){const t=k(A(e)),n=t.apiKey??null,r=t.oobCode??null,s=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);mf(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=k(A(e)).link,n=t?k(A(t)).deep_link_id:null,r=k(A(e)).deep_link_id;return(r?k(A(r)).link:null)||r||n||t||e}(e);try{return new Lp(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.providerId=Mp.PROVIDER_ID}static credential(e,t){return Rp._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Lp.parseLink(t);return mf(n,"argument-error"),Rp._fromEmailAndCode(e,n.code,n.tenantId)}}Mp.PROVIDER_ID="password",Mp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Mp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Fp{constructor(){super("facebook.com")}static credential(e){return Op._fromParams({providerId:Up.PROVIDER_ID,signInMethod:Up.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Up.credentialFromTaggedObject(e)}static credentialFromError(e){return Up.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Up.credential(e.oauthAccessToken)}catch{return null}}}Up.FACEBOOK_SIGN_IN_METHOD="facebook.com",Up.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bp extends Fp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Op._fromParams({providerId:Bp.PROVIDER_ID,signInMethod:Bp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bp.credentialFromTaggedObject(e)}static credentialFromError(e){return Bp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Bp.credential(t,n)}catch{return null}}}Bp.GOOGLE_SIGN_IN_METHOD="google.com",Bp.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jp extends Fp{constructor(){super("github.com")}static credential(e){return Op._fromParams({providerId:jp.PROVIDER_ID,signInMethod:jp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jp.credentialFromTaggedObject(e)}static credentialFromError(e){return jp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jp.credential(e.oauthAccessToken)}catch{return null}}}jp.GITHUB_SIGN_IN_METHOD="github.com",jp.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zp extends Fp{constructor(){super("twitter.com")}static credential(e,t){return Op._fromParams({providerId:zp.PROVIDER_ID,signInMethod:zp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zp.credentialFromTaggedObject(e)}static credentialFromError(e){return zp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return zp.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qp(e,t){return Df(e,"POST","/v1/accounts:signUp",kf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zp.TWITTER_SIGN_IN_METHOD="twitter.com",zp.PROVIDER_ID="twitter.com";class Kp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Qf._fromIdTokenResponse(e,n,r),i=Gp(n);return new Kp({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Gp(n);return new Kp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Gp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends b{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,$p.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new $p(e,t,n,r)}}function Hp(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw $p._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wp(e,t,n=!1){if(pe(e.app))return Promise.reject(ff(e));const r=await Hp(e,"signIn",t),s=await Kp._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qp(e){const t=yp(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Jp(e,t,n){if(pe(e.app))return Promise.reject(ff(e));const r=yp(e),s=Sp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qp),i=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Qp(e),t}),o=await Kp._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Yp(e,t,n){return pe(e.app)?Promise.reject(ff(e)):async function(e,t){return Wp(yp(e),t)}(x(e),Mp.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Qp(e),t})}function Xp(e,t,n,r){return x(e).onAuthStateChanged(t,n,r)}function Zp(e){return x(e).signOut()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class em{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);lp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tm.type="LOCAL";const nm=tm;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rm.type="SESSION";const sm=rm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class im{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new im(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,s)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function om(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */im.receivers=[];class am{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((o,a)=>{const c=om("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function um(){return void 0!==cm().WorkerGlobalScope&&"function"==typeof cm().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hm="firebaseLocalStorageDb";class lm{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dm(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function fm(){const e=indexedDB.open(hm,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(hm);return new lm(e).toPromise()}(),t(await fm()))})})}async function pm(e,t,n){const r=dm(e,!0).put({fbase_key:t,value:n});return new lm(r).toPromise()}function mm(e,t){const n=dm(e,!0).delete(t);return new lm(n).toPromise()}class gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await fm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=im._getInstance(um()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new am(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null==(e=n[0])?void 0:e.fulfilled)&&(null==(t=n[0])?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null==(t=null==navigator?void 0:navigator.serviceWorker)?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await pm(e,"__sak","1"),await mm(e,"__sak"),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=dm(e,!1).get(t),r=await new lm(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=dm(e,!1).getAll();return new lm(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}gm.type="LOCAL";const ym=gm;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vm(e,t){return t?Yf(t):(mf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new bf(3e4,6e4);class wm extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Im(e){return Wp(e.auth,new wm(e),e.bypassAuthState)}function bm(e){const{auth:t,user:n}=e;return mf(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(pe(r.app))return Promise.reject(ff(r));try{const s=await zf(e,Hp(r,"reauthenticate",t,e),n);mf(s.idToken,r,"internal-error");const i=Bf(s.idToken);mf(i,r,"internal-error");const{sub:o}=i;return mf(e.uid===o,r,"user-mismatch"),Kp._forOperation(e,"reauthenticate",s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&hf(r,"user-mismatch"),s}}(n,new wm(e),e.bypassAuthState)}async function Em(e){const{auth:t,user:n}=e;return mf(n,t,"internal-error"),async function(e,t,n=!1){const r=await zf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Kp._forOperation(e,"link",r)}(n,new wm(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Im;case"linkViaPopup":case"linkViaRedirect":return Em;case"reauthViaPopup":case"reauthViaRedirect":return bm;default:hf(this.auth,"internal-error")}}resolve(e){yf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new bf(2e3,1e4);async function Sm(e,t,n){if(pe(e.app))return Promise.reject(lf(e,"operation-not-supported-in-this-environment"));const r=yp(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&hf(e,"argument-error"),df(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Vp);const s=vm(r,n);return new Cm(r,"signInViaPopup",t,s).executeNotNull()}class Cm extends _m{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Cm.currentPopupAction&&Cm.currentPopupAction.cancel(),Cm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return mf(e,this.auth,"internal-error"),e}async onExecution(){yf(1===this.filter.length,"Popup operations only handle one event");const e=om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(lf(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null==(e=this.authWindow)?void 0:e.associatedEvent)||null}cancel(){this.reject(lf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null==(n=null==(t=this.authWindow)?void 0:t.window)?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lf(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Tm.get())};e()}}Cm.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const km=new Map;class Am extends _m{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=km.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ep("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Yf(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}km.set(this.auth._key(),e)}return this.bypassAuthState||km.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Nm(e,t){km.set(e._key(),t)}async function Dm(e,t,n=!1){if(pe(e.app))return Promise.reject(ff(e));const r=yp(e),s=vm(r,t),i=new Am(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pm(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pm(e)){const r=(null==(n=e.error.code)?void 0:n.split("auth/")[1])||"internal-error";t.onError(lf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Pm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Om=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lm=/^https?/;async function Mm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Af(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(Vm(n))return}catch{}hf(e,"unauthorized-domain")}function Vm(e){const t=vf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Lm.test(n))return!1;if(Om.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new bf(3e4,6e4);function Um(){const e=cm().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bm(e){return new Promise((t,n)=>{var r,s,i;function o(){Um(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Um(),n(lf(e,"network-request-failed"))},timeout:Fm.get()})}if(null==(s=null==(r=cm().gapi)?void 0:r.iframes)?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null==(i=cm().gapi)?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return cm()[t]=()=>{gapi.load?o():n(lf(e,"network-request-failed"))},Ip(`${wp.gapiScript}?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw jm=null,e})}let jm=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zm=new bf(5e3,15e3),qm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Km=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gm(e){const t=e.config;mf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ef(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"12.10.0"},s=Km.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${C(r).slice(1)}`}async function $m(e){const t=await function(e){return jm=jm||Bm(e),jm}(e),n=cm().gapi;return mf(n,e,"internal-error"),t.open({where:document.body,url:Gm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qm,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=lf(e,"network-request-failed"),i=cm().setTimeout(()=>{r(s)},zm.get());function o(){cm().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qm(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...Hm,width:r.toString(),height:s.toString(),top:i,left:o},u=g().toLowerCase();n&&(a=ip(u)?"_blank":n),rp(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=g()){var t;return hp(e)&&!!(null==(t=window.navigator)?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Wm(null);const l=window.open(t||"",a,h);mf(l,e,"popup-blocked");try{l.focus()}catch(d){}return new Wm(l)}const Jm=encodeURIComponent("fac");async function Ym(e,t,n,r,s,i){mf(e.config.authDomain,e,"auth-domain-config-required"),mf(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"12.10.0",eventId:s};if(t instanceof Vp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof Fp){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))void 0===a[h]&&delete a[h];const c=await e._getAppCheckToken(),u=c?`#${Jm}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Ef(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${C(a).slice(1)}${u}`}const Xm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sm,this._completeRedirectFn=Dm,this._overrideRedirectResult=Nm}async _openPopup(e,t,n,r){var s;yf(null==(s=this.eventManagers[e._key()])?void 0:s.manager,"_initialize() not called before _openPopup()");return Qm(e,await Ym(e,t,n,vf(),r),om())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){cm().location.href=e}(await Ym(e,t,n,vf(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await $m(e),n=new xm(e);return t.register("authEvent",t=>{mf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const s=null==(r=null==n?void 0:n[0])?void 0:r.webStorageSupport;void 0!==s&&t(!!s),hf(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dp()||sp()||hp()}};var Zm="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null==(e=this.auth.currentUser)?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){mf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tg=u("authIdTokenMaxAge")||300;let ng=null;function rg(e=function(e="[DEFAULT]"){const t=ce.get(e);if(!t&&"[DEFAULT]"===e&&c())return ye();if(!t)throw me.create("no-app",{appName:e});return t}()){const t=fe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=fe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(T(n.getOptions(),t??{}))return e;hf(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Xm,persistence:[ym,nm,sm]}),r=u("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>tg)return;const r=null==t?void 0:t.token;ng!==r&&(ng=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(e,t,n){x(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){x(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var s;const i=(o="auth",null==(l=null==(h=a())?void 0:h.emulatorHosts)?void 0:l[o]);var o,h,l;return i&&Cp(n,"http://"+i),n}var sg;wp={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=lf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",((null==(s=document.getElementsByTagName("head"))?void 0:s[0])??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},sg="Browser",de(new R("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;mf(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:sg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(sg)},c=new gp(n,r,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),de(new R("auth-internal",e=>{const t=yp(e.getProvider("auth").getImmediate());return new eg(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(Zm,"1.12.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(sg)),ve(Zm,"1.12.1","esm2020");export{Bp as G,ad as a,Hd as b,td as c,Zd as d,Yp as e,Jp as f,rg as g,Sm as h,ye as i,nd as j,nf as k,ef as l,Vd as m,Md as n,Xp as o,Kd as p,Zp as s,tf as u};
