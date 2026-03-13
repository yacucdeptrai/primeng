import './polyfills.server.mjs';
import{Ga as R,Ja as G,va as q,wa as b}from"./chunk-YQJJ7I3T.mjs";import{k as D,n as O,q as Q,r as z,v as A}from"./chunk-RUZVPFSZ.mjs";import{Bb as r,Cb as l,Db as p,Eb as I,Kb as B,N as _,O as w,S as x,Sa as a,Sb as d,Vb as P,Xb as v,Yb as y,Zc as N,_c as V,ac as u,dc as g,ec as F,gb as T,hb as k,hc as M,lb as S,ma as m,mb as f,oc as $,qc as j,rc as E,vb as s}from"./chunk-ZJKG6QAF.mjs";var J=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,K={root:({instance:e})=>["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},h=(()=>{class e extends R{name="progressbar";theme=J;classes=K;static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var L=["content"],U=(e,o)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":o}),W=e=>({$implicit:e});function X(e,o){if(e&1&&(l(0,"div"),F(1),p()),e&2){let t=d(2);u("display",t.value!=null&&t.value!==0?"flex":"none"),s("data-pc-section","label"),a(),M("",t.value,"",t.unit)}}function Y(e,o){e&1&&B(0)}function Z(e,o){if(e&1&&(l(0,"div",3)(1,"div",4),f(2,X,2,5,"div",5)(3,Y,1,0,"ng-container",6),p()()),e&2){let t=d();g(t.valueStyleClass),u("width",t.value+"%")("background",t.color),r("ngClass","p-progressbar-value p-progressbar-value-animate"),s("data-pc-section","value"),a(2),r("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),a(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",j(11,W,t.value))}}function ee(e,o){if(e&1&&(l(0,"div",7),I(1,"div",8),p()),e&2){let t=d();g(t.valueStyleClass),r("ngClass","p-progressbar-indeterminate-container"),s("data-pc-section","container"),a(),u("background",t.color),s("data-pc-section","value")}}var te=(()=>{class e extends G{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=x(h);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="content"?this._contentTemplate=t.template:this._contentTemplate=t.template})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,C){if(i&1&&P(C,L,4)(C,q,4),i&2){let c;v(c=y())&&(n.contentTemplate=c.first),v(c=y())&&(n.templates=c)}},inputs:{value:[2,"value","value",V],showValue:[2,"showValue","showValue",N],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[$([h]),S],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(l(0,"div",0),f(1,Z,4,13,"div",1)(2,ee,2,7,"div",2),p()),i&2&&(g(n.styleClass),r("ngStyle",n.style)("ngClass",E(12,U,n.mode==="determinate",n.mode==="indeterminate")),s("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),a(),r("ngIf",n.mode==="determinate"),a(),r("ngIf",n.mode==="indeterminate"))},dependencies:[A,D,O,z,Q,b],encapsulation:2,changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=k({type:e});static \u0275inj=w({imports:[te,b,b]})}return e})();export{te as a,ve as b};
