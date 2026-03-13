import './polyfills.server.mjs';
import{f as j,g as F}from"./chunk-DE54ZEHA.mjs";import{Ga as B,Ja as M,wa as o}from"./chunk-YQJJ7I3T.mjs";import{v as C}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as u,Db as b,Eb as v,N as s,O as l,S as n,Sa as p,Tb as f,Ub as z,Zc as D,cc as S,gb as c,hb as g,lb as y,ma as d,oc as h}from"./chunk-ZJKG6QAF.mjs";var I=({dt:e})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}
`,O={root:"p-overlaybadge"},r=(()=>{class e extends B{name="overlaybadge";theme=I;classes=O;static \u0275fac=(()=>{let a;return function(t){return(a||(a=d(e)))(t||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var x=["*"],E=(()=>{class e extends M{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(a){this._size=a,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=n(r);constructor(){super()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=c({type:e,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",D],size:"size"},features:[h([r]),y],ngContentSelectors:x,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(i,t){i&1&&(f(),u(0,"div",0),z(1),v(2,"p-badge",1),b()),i&2&&(p(2),S(t.style),m("styleClass",t.styleClass)("badgeSize",t.badgeSize)("severity",t.severity)("value",t.value)("badgeDisabled",t.badgeDisabled))},dependencies:[C,F,j,o],encapsulation:2,changeDetection:0})}return e})(),Q=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=g({type:e});static \u0275inj=l({imports:[E,o,o]})}return e})();export{E as a,Q as b};
