import './polyfills.server.mjs';
import{Ga as w,Ja as F,wa as a}from"./chunk-YQJJ7I3T.mjs";import{k as S,q as C,v}from"./chunk-RUZVPFSZ.mjs";import{Bb as y,Eb as g,N as c,O as m,S as p,dc as k,gb as d,hb as h,lb as f,ma as r,oc as b,vb as u}from"./chunk-ZJKG6QAF.mjs";import{a as i,b as s}from"./chunk-AFOT676I.mjs";var x=({dt:e})=>`
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,z={root:{position:"relative"}},I={root:({props:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},l=(()=>{class e extends w{name="skeleton";theme=x;classes=I;inlineStyles=z;static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var R=(()=>{class e extends F{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=p(l);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.size?n=s(i(i({},this.style),t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=i(s(i({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),n}static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275cmp=d({type:e,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[b([l]),f],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(n,o){n&1&&g(0,"div",0),n&2&&(k(o.styleClass),y("ngClass",o.containerClass())("ngStyle",o.containerStyle),u("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[v,S,C,a],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=h({type:e});static \u0275inj=m({imports:[R,a,a]})}return e})();export{R as a,H as b};
