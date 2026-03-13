import './polyfills.server.mjs';
import{Ga as O,Ja as q,va as $,wa as T}from"./chunk-YQJJ7I3T.mjs";import{k,n as Q,q as w,r as D,v as N}from"./chunk-RUZVPFSZ.mjs";import{Bb as o,Cb as s,Db as m,Kb as y,N as v,O as h,S as C,Sa as i,Sb as g,Tb as B,Ub as F,Vb as j,Xb as d,Yb as f,dc as E,gb as x,hb as S,lb as I,ma as u,mb as p,oc as M,vb as c}from"./chunk-ZJKG6QAF.mjs";var R=({dt:e})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${e("toolbar.padding")};
    background: ${e("toolbar.background")};
    border: 1px solid ${e("toolbar.border.color")};
    color: ${e("toolbar.color")};
    border-radius: ${e("toolbar.border.radius")};
    gap: ${e("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,P={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},_=(()=>{class e extends O{name="toolbar";theme=R;classes=P;static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var A=["start"],V=["end"],z=["center"],G=["*"];function H(e,l){e&1&&y(0)}function J(e,l){if(e&1&&(s(0,"div",4),p(1,H,1,0,"ng-container",5),m()),e&2){let t=g();c("data-pc-section","start"),i(),o("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function K(e,l){e&1&&y(0)}function U(e,l){if(e&1&&(s(0,"div",6),p(1,K,1,0,"ng-container",5),m()),e&2){let t=g();c("data-pc-section","center"),i(),o("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function W(e,l){e&1&&y(0)}function X(e,l){if(e&1&&(s(0,"div",7),p(1,W,1,0,"ng-container",5),m()),e&2){let t=g();c("data-pc-section","end"),i(),o("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var Y=(()=>{class e extends q{style;styleClass;ariaLabelledBy;_componentStyle=C(_);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(a){return(t||(t=u(e)))(a||e)}})();static \u0275cmp=x({type:e,selectors:[["p-toolbar"]],contentQueries:function(r,a,b){if(r&1&&j(b,A,4)(b,V,4)(b,z,4)(b,$,4),r&2){let n;d(n=f())&&(a.startTemplate=n.first),d(n=f())&&(a.endTemplate=n.first),d(n=f())&&(a.centerTemplate=n.first),d(n=f())&&(a.templates=n)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[M([_]),I],ngContentSelectors:G,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(r,a){r&1&&(B(),s(0,"div",0),F(1),p(2,J,2,2,"div",1)(3,U,2,2,"div",2)(4,X,2,2,"div",3),m()),r&2&&(E(a.styleClass),o("ngClass","p-toolbar p-component")("ngStyle",a.style),c("aria-labelledby",a.ariaLabelledBy)("data-pc-name","toolbar"),i(2),o("ngIf",a.startTemplate||a._startTemplate),i(),o("ngIf",a.centerTemplate||a._centerTemplate),i(),o("ngIf",a.endTemplate||a._endTemplate))},dependencies:[N,k,Q,D,w,T],encapsulation:2,changeDetection:0})}return e})(),be=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=S({type:e});static \u0275inj=h({imports:[Y,T,T]})}return e})();export{Y as a,be as b};
