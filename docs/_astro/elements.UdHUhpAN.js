import{u as S,f as A,s as a,t as c}from"./custom-element.CQYAQ0K3.js";import{x as d}from"./lit-html.x5FnikOf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:A},$=(t=L,r,s)=>{const{kind:o,metadata:e}=s;let l=globalThis.litPropertyMetadata.get(e);if(l===void 0&&globalThis.litPropertyMetadata.set(e,l=new Map),l.set(s.name,t),o==="accessor"){const{name:n}=s;return{set(i){const h=r.get.call(this);r.set.call(this,i),this.requestUpdate(n,h,t)},init(i){return i!==void 0&&this.P(n,void 0,t),i}}}if(o==="setter"){const{name:n}=s;return function(i){const h=this[n];r.call(this,i),this.requestUpdate(n,h,t)}}throw Error("Unsupported decorator location: "+o)};function u(t){return(r,s)=>typeof s=="object"?$(t,r,s):((o,e,l)=>{const n=e.hasOwnProperty(l);return e.constructor.createProperty(l,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(e,l):void 0})(t,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(t,r,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,s),s);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(t){return(r,s)=>{const{slot:o,selector:e}=t??{},l="slot"+(o?`[name=${o}]`:":not([name])");return j(r,s,{get(){const n=this.renderRoot?.querySelector(l),i=n?.assignedElements(t)??[];return e===void 0?i:i.filter(h=>h.matches(e))}})}}var q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,O=(t,r,s,o)=>{for(var e=o>1?void 0:o?T(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&q(r,s,e),e};let f=class extends a{constructor(){super(...arguments),this.single=!1}connectedCallback(){if(super.connectedCallback(),this.controls=this.querySelectorAll("guvam-collapse"),this.addEventListener("collapse-open",t=>{if(this.single){const r=Array.from(this.controls).findIndex(s=>s===t.target);this.setIndex(r)}}),this.single){const t=Array.from(this.controls).findIndex(r=>r.getAttribute("open")==="");this.setIndex(t)}}render(){return d`<slot />`}setIndex(t){this.controls.forEach((r,s)=>{t!==s&&r.removeAttribute("open")})}};O([u({type:Boolean,reflect:!0})],f.prototype,"single",2);f=O([c("guvam-accordion")],f);var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,y=(t,r,s,o)=>{for(var e=o>1?void 0:o?M(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&B(r,s,e),e};let p=class extends a{constructor(){super(...arguments),this.Value="",this.animationTime=1e3}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.copyToClipboard())}render(){return d`<slot />`}copyToClipboard(){this.classList.add("copied"),clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.classList.remove("copied"),this.animationTime),navigator.clipboard.writeText(this.Value).catch(console.info)}};y([u({type:String})],p.prototype,"Value",2);y([u({type:Number})],p.prototype,"animationTime",2);p=y([c("guvam-clipboard")],p);var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,C=(t,r,s,o)=>{for(var e=o>1?void 0:o?U(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&N(r,s,e),e};let b=class extends a{constructor(){super(...arguments),this.open=!1}connectedCallback(){super.connectedCallback(),this.control=this.querySelector('[data-target="collapse-control"]'),this.control?.addEventListener("click",()=>{this.open=!this.open,this.dispatchEvent(new CustomEvent("collapse-open",{detail:{open:this.open},bubbles:!0,composed:!0}))})}render(){return d`<slot />`}};C([u({type:Boolean,reflect:!0})],b.prototype,"open",2);b=C([c("guvam-collapse")],b);var V=Object.defineProperty,z=Object.getOwnPropertyDescriptor,_=(t,r,s,o)=>{for(var e=o>1?void 0:o?z(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&V(r,s,e),e};let v=class extends a{constructor(){super(...arguments),this.open=!0}connectedCallback(){super.connectedCallback(),this.buttons[0]?.addEventListener("click",()=>this.openToggle())}openToggle(){this.open=!this.open}render(){return d` <slot />`}};_([u({type:Boolean,reflect:!0})],v.prototype,"open",2);_([D({selector:'[data-target="button"]'})],v.prototype,"buttons",2);v=_([c("guvam-dropdown")],v);var R=Object.defineProperty,H=Object.getOwnPropertyDescriptor,w=(t,r,s,o)=>{for(var e=o>1?void 0:o?H(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&R(r,s,e),e};let m=class extends a{constructor(){super(...arguments),this.index=-1,this.autoSlideInterval=null}connectedCallback(){if(super.connectedCallback(),this.hasAttribute("auto-Slide")&&this.startAutoSlide(),this.slides=Array.from(this.querySelectorAll("[data-target='carousel-slide']")),this.indicators=Array.from(this.querySelectorAll("[data-target='carousel-indicator']")),this.controlPrev=this.querySelector("[data-target='carousel-control-prev']"),this.controlNext=this.querySelector("[data-target='carousel-control-next']"),this.controlPrev?.addEventListener("click",()=>this.setIndex(this.calcIndex(-1))),this.controlNext?.addEventListener("click",()=>this.setIndex(this.calcIndex(1))),this.indicators?.forEach(r=>r.addEventListener("click",s=>{const o=this.indicators.findIndex(e=>e===s.target);this.setIndex(o)})),this.index===-1){const r=this.slides.findIndex(s=>s.classList.contains("active"));this.index=r===-1?0:r}this.setIndex(this.index)}startAutoSlide(){this.autoSlideInterval=setInterval(()=>this.setIndex(this.calcIndex(1)),5e3)}stopAutoSlide(){this.autoSlideInterval!==null&&(clearInterval(this.autoSlideInterval),this.autoSlideInterval=null)}calcIndex(t){return(this.slides.length+this.index+t)%this.slides.length}setIndex(t){this.index=t,this.slides.forEach((r,s)=>{this.slides[s].classList.toggle("active",s===t),this.slides[s].classList.toggle("prev",s===this.calcIndex(-1)),this.slides[s].classList.toggle("next",s===this.calcIndex(1)),this.indicators[s].classList.toggle("active",s===t)}),this.dispatchEvent(new CustomEvent("carousel-change",{detail:{index:t},bubbles:!0,composed:!0})),this.autoSlideInterval!==null&&(this.stopAutoSlide(),this.startAutoSlide())}render(){return d` <slot />`}};w([u({type:Number,reflect:!0})],m.prototype,"index",2);m=w([c("guvam-carousel")],m);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,E=(t,r,s,o)=>{for(var e=o>1?void 0:o?G(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&F(r,s,e),e};let g=class extends a{constructor(){super(...arguments),this.index=-1}connectedCallback(){if(super.connectedCallback(),this.controls=this.querySelectorAll('[data-target="tab-control"]'),this.contents=this.querySelectorAll('[data-target="tab-content"]'),this.controls?.forEach(t=>t.addEventListener("click",r=>{const s=Array.from(this.controls).findIndex(o=>o===r.target);this.setIndex(s)})),this.index===-1){const t=Array.from(this.controls).findIndex(r=>r.classList.contains("active"));this.index=t===-1?0:t}this.setIndex(this.index)}render(){return d`<slot />`}setIndex(t){this.index=t,this.controls.forEach((r,s)=>{this.controls[s].classList.toggle("active",s===t),this.contents[s].classList.toggle("active",s===t)}),this.dispatchEvent(new CustomEvent("tabs-change",{detail:{index:t},bubbles:!0,composed:!0}))}};E([u({type:Number,reflect:!0})],g.prototype,"index",2);g=E([c("guvam-tabs")],g);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(t,r,s,o)=>{for(var e=o>1?void 0:o?K(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&J(r,s,e),e};let P=class extends a{render(){return d`<slot />`}connectedCallback(){super.connectedCallback(),this.addEventListener("close-alert",()=>{console.log("Alert!")}),this.querySelector('[data-target="close-button"]')?.addEventListener("click",()=>{this.closeAlert()})}closeAlert(){const t=this.querySelector('[data-target="alert"]');t instanceof HTMLElement&&(t.style.display="none",this.dispatchEvent(new CustomEvent("alert-close",{bubbles:!0,composed:!0})))}};P=Q([c("guvam-alert")],P);var W=Object.defineProperty,X=Object.getOwnPropertyDescriptor,I=(t,r,s,o)=>{for(var e=o>1?void 0:o?X(r,s):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,s,e):n(e))||e);return o&&e&&W(r,s,e),e};let x=class extends a{constructor(){super(...arguments),this.staticBackdrop=!1}connectedCallback(){this.initialize()}render(){return d`<slot />`}initialize(){this.modalOpener=this.querySelectorAll('[data-target="modal-opener"]'),this.modalClosers=this.querySelectorAll('[data-target="modal-close"]'),this.modal=this.querySelectorAll('[data-target="modal"]')[0],this.modalOpener[0].addEventListener("click",()=>{this.modal.showModal()}),this.modalClosers.forEach(t=>{t.addEventListener("click",()=>{this.modal.close()})}),this.staticBackdrop?this.addEventListener("keydown",t=>{t.key==="Escape"&&t.preventDefault()}):this.modal.addEventListener("mousedown",t=>{console.log(t.target),t.target===this.modal&&this.modal.close()})}};I([u({type:Boolean})],x.prototype,"staticBackdrop",2);x=I([c("guvam-modal")],x);export{f as Accordion,m as Carousel,p as Clipboard,b as Collapse,v as Dropdown,x as Modal,g as Tabs};