import{s as a,t as g}from"./custom-element.4JEvFqI0.js";import{x as p}from"./lit-html.Z3QJor2R.js";var h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(t,e,o,r)=>{for(var s=r>1?void 0:r?m(e,o):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(s=(r?l(e,o,s):l(s))||s);return r&&s&&h(e,o,s),s};const n=t=>{if(t){const e=t.classList.contains("type-light");t.classList.toggle("type-light",!e),t.classList.toggle("type-dark",e),localStorage.setItem("theme",String(!e))}};let i=class extends a{connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{n(document.querySelector(":root")),n(this)})}render(){return p`<slot />`}};i=f([g("theme-toggle")],i);export{i as ThemeToggle};