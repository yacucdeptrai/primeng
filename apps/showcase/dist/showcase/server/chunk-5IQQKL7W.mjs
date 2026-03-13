import './polyfills.server.mjs';
import{Ga as I,Ja as C,wa as h}from"./chunk-YQJJ7I3T.mjs";import{v as y}from"./chunk-RUZVPFSZ.mjs";import{N as s,O as r,S as c,Tb as f,Ub as d,bc as m,dc as u,gb as l,hb as a,lb as p,ma as n,oc as g}from"./chunk-ZJKG6QAF.mjs";var M=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,j={root:"p-iconfield"},x=(()=>{class e extends I{name="iconfield";theme=M;classes=j;static \u0275fac=(()=>{let t;return function(o){return(t||(t=n(e)))(o||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var v=["*"],B=(()=>{class e extends C{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=c(x);static \u0275fac=(()=>{let t;return function(o){return(t||(t=n(e)))(o||e)}})();static \u0275cmp=l({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,o){i&2&&(u(o._styleClass),m("p-iconfield-left",o.iconPosition==="left")("p-iconfield-right",o.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[g([x]),p],ngContentSelectors:v,decls:1,vars:0,template:function(i,o){i&1&&(f(),d(0))},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),G=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[B]})}return e})();var z={root:"p-inputicon"},$=(()=>{class e extends I{name="inputicon";classes=z;static \u0275fac=(()=>{let t;return function(o){return(t||(t=n(e)))(o||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var D=["*"],S=(()=>{class e extends C{styleClass;get hostClasses(){return this.styleClass}_componentStyle=c($);static \u0275fac=(()=>{let t;return function(o){return(t||(t=n(e)))(o||e)}})();static \u0275cmp=l({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,o){i&2&&(u(o.hostClasses),m("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[g([$]),p],ngContentSelectors:D,decls:1,vars:0,template:function(i,o){i&1&&(f(),d(0))},dependencies:[y,h],encapsulation:2,changeDetection:0})}return e})(),re=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[S,h,h]})}return e})();export{B as a,G as b,S as c,re as d};
