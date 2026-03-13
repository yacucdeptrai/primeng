import './polyfills.server.mjs';
import{Ga as R,Ja as q,wa as p}from"./chunk-YQJJ7I3T.mjs";import{k as N,n as H,v as P}from"./chunk-RUZVPFSZ.mjs";import{$b as u,Bb as n,Cb as v,Db as f,Dc as h,Eb as T,Lb as M,Ma as C,N as d,O as y,Qb as A,S as b,Sa as g,Sb as i,Tb as F,Ub as L,X as z,Y as $,bc as j,cc as S,da as I,dc as x,ec as D,fc as V,gb as w,hb as E,lb as B,ma as l,mb as s,oc as k,vb as m}from"./chunk-ZJKG6QAF.mjs";var U=({dt:a})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${a("avatar.width")};
    height: ${a("avatar.height")};
    font-size: ${a("avatar.font.size")};
    color: ${a("avatar.color")};
    background: ${a("avatar.background")};
    border-radius: ${a("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${a("avatar.icon.size")};
    width: ${a("avatar.icon.size")};
    height: ${a("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${a("avatar.lg.width")};
    height: ${a("avatar.lg.width")};
    font-size: ${a("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${a("avatar.lg.icon.size")};
    width: ${a("avatar.lg.icon.size")};
    height: ${a("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${a("avatar.xl.width")};
    height: ${a("avatar.xl.width")};
    font-size: ${a("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${a("avatar.xl.font.size")};
    width: ${a("avatar.xl.icon.size")};
    height: ${a("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${a("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${a("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${a("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${a("avatar.xl.group.offset")};
}
`,G={root:({props:a})=>["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},_=(()=>{class a extends R{name="avatar";theme=U;classes=G;static \u0275fac=(()=>{let e;return function(t){return(e||(e=l(a)))(t||a)}})();static \u0275prov=d({token:a,factory:a.\u0275fac})}return a})();var J=["*"];function K(a,o){if(a&1&&(v(0,"span",3),D(1),f()),a&2){let e=i();g(),V(e.label)}}function Q(a,o){if(a&1&&T(0,"span",5),a&2){let e=i(2);x(e.icon),n("ngClass","p-avatar-icon")}}function W(a,o){if(a&1&&s(0,Q,1,3,"span",4),a&2){let e=i(),r=u(5);n("ngIf",e.icon)("ngIfElse",r)}}function X(a,o){if(a&1){let e=M();v(0,"img",7),A("error",function(t){z(e);let c=i(2);return $(c.imageError(t))}),f()}if(a&2){let e=i(2);n("src",e.image,C),m("aria-label",e.ariaLabel)}}function Y(a,o){if(a&1&&s(0,X,1,2,"img",6),a&2){let e=i();n("ngIf",e.image)}}var Z=(()=>{class a extends q{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new I;_componentStyle=b(_);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(t){return(e||(e=l(a)))(t||a)}})();static \u0275cmp=w({type:a,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(r,t){r&2&&(m("data-pc-name","avatar")("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy),S(t.style),x(t.hostClass),j("p-avatar",!0)("p-component",!0)("p-avatar-circle",t.shape==="circle")("p-avatar-lg",t.size==="large")("p-avatar-xl",t.size==="xlarge")("p-avatar-image",t.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[k([_]),B],ngContentSelectors:J,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(r,t){if(r&1&&(F(),L(0),s(1,K,2,1,"span",2)(2,W,1,2,"ng-template",null,0,h)(4,Y,1,1,"ng-template",null,1,h)),r&2){let c=u(3);g(),n("ngIf",t.label)("ngIfElse",c)}},dependencies:[P,N,H,p],encapsulation:2,changeDetection:0})}return a})(),ua=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=E({type:a});static \u0275inj=y({imports:[Z,p,p]})}return a})();export{Z as a,ua as b};
