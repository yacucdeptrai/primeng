import './polyfills.server.mjs';
import{c as se,d as S,f as M,g as O,h as D}from"./chunk-RNBAXVKN.mjs";import{G as le,H as ae,ba as re}from"./chunk-DE54ZEHA.mjs";import{Ga as ie,Ja as oe,oa as te,va as ne,wa as x}from"./chunk-YQJJ7I3T.mjs";import{k as W,n as X,q as Y,r as Z,v as ee}from"./chunk-RUZVPFSZ.mjs";import{$b as k,Bb as o,Cb as g,Db as f,Dc as U,Eb as $,Ib as T,Jb as C,Kb as m,Lb as V,N as P,O as j,Qb as F,S as A,Sa as i,Sb as p,Tb as q,Ub as w,Vb as L,X as I,Xb as u,Y as v,Yb as _,Zc as E,da as h,dc as K,ec as z,fc as G,gb as Q,hb as N,lb as R,ma as y,mb as d,oc as H,qc as b,rc as J,vb as s}from"./chunk-ZJKG6QAF.mjs";var de=({dt:e})=>`
.p-fieldset {
    background: ${e("fieldset.background")};
    border: 1px solid ${e("fieldset.border.color")};
    border-radius: ${e("fieldset.border.radius")};
    color: ${e("fieldset.color")};
    padding:  ${e("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${e("fieldset.legend.background")};
    border-radius: ${e("fieldset.legend.border.radius")};
    border-width: ${e("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${e("fieldset.legend.border.color")};
    color: ${e("fieldset.legend.color")};
    padding: ${e("fieldset.legend.padding")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${e("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${e("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${e("fieldset.legend.border.radius")};
    transition: background ${e("fieldset.transition.duration")}, color ${e("fieldset.transition.duration")}, outline-color ${e("fieldset.transition.duration")}, box-shadow ${e("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${e("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${e("fieldset.legend.focus.ring.shadow")};
    outline: ${e("fieldset.legend.focus.ring.width")} ${e("fieldset.legend.focus.ring.style")} ${e("fieldset.legend.focus.ring.color")};
    outline-offset: ${e("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${e("fieldset.legend.hover.color")};
    background: ${e("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.color")};
    transition: color ${e("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${e("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${e("fieldset.content.padding")};
}

/* For PrimeNG */
.p-fieldset-toggleable.p-fieldset-expanded > .p-fieldset-content-container:not(.ng-animating) {
    overflow: visible
}

.p-fieldset-toggleable .p-fieldset-content-container {
    overflow: hidden;
}
`,pe={root:({props:e})=>["p-fieldset p-component",{"p-fieldset-toggleable":e.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},B=(()=>{class e extends ie{name="fieldset";theme=de;classes=pe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var ge=["header"],fe=["expandicon"],me=["collapseicon"],ue=["content"],_e=["*",[["p-header"]]],be=["*","p-header"],he=(e,l)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":e,"p-fieldset-expanded":l}),ye=e=>({transitionParams:e,height:"0"}),Te=e=>({value:"hidden",params:e}),Ce=e=>({transitionParams:e,height:"*"}),xe=e=>({value:"visible",params:e});function Ie(e,l){e&1&&$(0,"PlusIcon",11),e&2&&(o("styleClass","p-fieldset-toggler"),s("data-pc-section","togglericon"))}function ve(e,l){e&1&&m(0)}function $e(e,l){if(e&1&&(g(0,"span",12),d(1,ve,1,0,"ng-container",6),f()),e&2){let t=p(3);s("data-pc-section","togglericon"),i(),o("ngTemplateOutlet",t.expandIconTemplate||t._expandIconTemplate)}}function Fe(e,l){if(e&1&&(T(0),d(1,Ie,1,2,"PlusIcon",9)(2,$e,2,2,"span",10),C()),e&2){let t=p(2);i(),o("ngIf",!t.expandIconTemplate&&!t._expandIconTemplate),i(),o("ngIf",t.expandIconTemplate||t._expandIconTemplate)}}function we(e,l){e&1&&$(0,"MinusIcon",11),e&2&&(o("styleClass","p-fieldset-toggler"),s("aria-hidden",!0)("data-pc-section","togglericon"))}function ke(e,l){e&1&&m(0)}function Ee(e,l){if(e&1&&(g(0,"span",12),d(1,ke,1,0,"ng-container",6),f()),e&2){let t=p(3);s("data-pc-section","togglericon"),i(),o("ngTemplateOutlet",t.collapseIconTemplate||t._collapseIconTemplate)}}function Se(e,l){if(e&1&&(T(0),d(1,we,1,3,"MinusIcon",9)(2,Ee,2,2,"span",10),C()),e&2){let t=p(2);i(),o("ngIf",!t.collapseIconTemplate&&!t._collapseIconTemplate),i(),o("ngIf",t.collapseIconTemplate||t._collapseIconTemplate)}}function Me(e,l){e&1&&m(0)}function Oe(e,l){if(e&1){let t=V();T(0),g(1,"button",7),F("click",function(n){I(t);let r=p();return v(r.toggle(n))})("keydown",function(n){I(t);let r=p();return v(r.onKeyDown(n))}),d(2,Fe,3,2,"ng-container",8)(3,Se,3,2,"ng-container",8)(4,Me,1,0,"ng-container",6),f(),C()}if(e&2){let t=p(),a=k(4);i(),s("id",t.id+"_header")("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)("aria-label",t.buttonAriaLabel),i(),o("ngIf",t.collapsed),i(),o("ngIf",!t.collapsed),i(),o("ngTemplateOutlet",a)}}function De(e,l){e&1&&m(0)}function Be(e,l){if(e&1&&(g(0,"span",13),z(1),f(),w(2,1),d(3,De,1,0,"ng-container",6)),e&2){let t=p();s("data-pc-section","legendtitle"),i(),G(t.legend),i(2),o("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Pe(e,l){e&1&&m(0)}var je=(()=>{class e extends oe{legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new h;onBeforeToggle=new h;onAfterToggle=new h;get id(){return te("pn_id_")}get buttonAriaLabel(){return this.legend}animating;_componentStyle=A(B);headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed}),t.preventDefault()}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"expandicon":this._expandIconTemplate=t.template;break;case"collapseicon":this._collapseIconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=Q({type:e,selectors:[["p-fieldset"]],contentQueries:function(a,n,r){if(a&1&&L(r,ge,4)(r,fe,4)(r,me,4)(r,ue,4)(r,ne,4),a&2){let c;u(c=_())&&(n.headerTemplate=c.first),u(c=_())&&(n.expandIconTemplate=c.first),u(c=_())&&(n.collapseIconTemplate=c.first),u(c=_())&&(n.contentTemplate=c.first),u(c=_())&&(n.templates=c)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",E],collapsed:[2,"collapsed","collapsed",E],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[H([B]),R],ngContentSelectors:be,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-fieldset-content-container"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-fieldset-toggle-button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-label"]],template:function(a,n){if(a&1&&(q(_e),g(0,"fieldset",1)(1,"legend",2),d(2,Oe,5,7,"ng-container",3)(3,Be,4,3,"ng-template",null,0,U),f(),g(5,"div",4),F("@fieldsetContent.done",function(){return n.onToggleDone()}),g(6,"div",5),w(7),d(8,Pe,1,0,"ng-container",6),f()()()),a&2){let r=k(4);K(n.styleClass),o("ngClass",J(17,he,n.toggleable,!n.collapsed&&n.toggleable))("ngStyle",n.style),s("id",n.id)("data-pc-name","fieldset")("data-pc-section","root"),i(),s("data-pc-section","legend"),i(),o("ngIf",n.toggleable)("ngIfElse",r),i(3),o("@fieldsetContent",n.collapsed?b(22,Te,b(20,ye,n.transitionOptions)):b(26,xe,b(24,Ce,n.animating?n.transitionOptions:"0ms"))),s("id",n.id+"_content")("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("data-pc-section","toggleablecontent"),i(),s("data-pc-section","content"),i(2),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)}},dependencies:[ee,W,X,Z,Y,re,le,ae,x],encapsulation:2,data:{animation:[se("fieldsetContent",[O("hidden",M({height:"0"})),O("visible",M({height:"*"})),D("visible <=> hidden",[S("{{transitionParams}}")]),D("void => *",S(0))])]},changeDetection:0})}return e})(),it=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=N({type:e});static \u0275inj=j({imports:[je,x,x]})}return e})();export{je as a,it as b};
