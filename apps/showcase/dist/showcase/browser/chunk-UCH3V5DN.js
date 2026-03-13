import{T as Z}from"./chunk-DEL7GGHP.js";import{Ga as X,Ja as Y,va as G,wa as J,xa as W}from"./chunk-HJ3EJAPD.js";import{j as Q,m as q,q as H,u as U}from"./chunk-O4W5DSIC.js";import{$b as d,Ab as M,Eb as x,Fb as b,Hb as g,Ka as V,Mb as u,N as k,Ob as r,Pb as F,Qa as p,Qb as j,Qc as L,Rb as z,S as $,Tb as I,Ub as w,X as s,Xb as A,Y as l,Yb as O,_b as R,ac as B,bc as D,da as C,eb as P,jb as S,kb as m,kc as N,la as E,ma as y,rb as _,xb as c,yb as h,zb as f,zc as K}from"./chunk-DNC77BQZ.js";var ie=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,te={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},T=(()=>{class e extends X{name="chip";theme=ie;classes=te;static \u0275fac=(()=>{let i;return function(n){return(i||(i=y(e)))(n||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var ne=["removeicon"],oe=["*"];function re(e,a){if(e&1){let i=g();h(0,"img",4),u("error",function(n){s(i);let o=r();return l(o.imageError(n))}),f()}if(e&2){let i=r();c("src",i.image,V)("alt",i.alt)}}function ce(e,a){if(e&1&&M(0,"span",6),e&2){let i=r(2);d(i.icon),c("ngClass","p-chip-icon"),_("data-pc-section","icon")}}function ae(e,a){if(e&1&&m(0,ce,1,4,"span",5),e&2){let i=r();c("ngIf",i.icon)}}function pe(e,a){if(e&1&&(h(0,"div",7),B(1),f()),e&2){let i=r();_("data-pc-section","label"),p(),D(i.label)}}function se(e,a){if(e&1){let i=g();h(0,"span",11),u("click",function(n){s(i);let o=r(3);return l(o.close(n))})("keydown",function(n){s(i);let o=r(3);return l(o.onKeydown(n))}),f()}if(e&2){let i=r(3);d(i.removeIcon),c("ngClass","p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function le(e,a){if(e&1){let i=g();h(0,"TimesCircleIcon",12),u("click",function(n){s(i);let o=r(3);return l(o.close(n))})("keydown",function(n){s(i);let o=r(3);return l(o.onKeydown(n))}),f()}if(e&2){let i=r(3);d("p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function me(e,a){if(e&1&&(x(0),m(1,se,1,5,"span",9)(2,le,1,4,"TimesCircleIcon",10),b()),e&2){let i=r(2);p(),c("ngIf",i.removeIcon),p(),c("ngIf",!i.removeIcon)}}function _e(e,a){}function he(e,a){e&1&&m(0,_e,0,0,"ng-template")}function fe(e,a){if(e&1){let i=g();h(0,"span",13),u("click",function(n){s(i);let o=r(2);return l(o.close(n))})("keydown",function(n){s(i);let o=r(2);return l(o.onKeydown(n))}),m(1,he,1,0,null,14),f()}if(e&2){let i=r(2);_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel),p(),c("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)}}function ge(e,a){if(e&1&&(x(0),m(1,me,3,2,"ng-container",3)(2,fe,2,3,"span",8),b()),e&2){let i=r();p(),c("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate),p(),c("ngIf",i.removeIconTemplate||i._removeIconTemplate)}}var ze=(()=>{class e extends Y{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new C;onImageError=new C;visible=!0;get removeAriaLabel(){return this.config.getTranslation(W.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(i){this._chipProps=i,i&&typeof i=="object"&&Object.entries(i).forEach(([t,n])=>this[`_${t}`]!==n&&(this[`_${t}`]=n))}_chipProps;_componentStyle=$(T);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(i=>{i.getType()==="removeicon"?this._removeIconTemplate=i.template:this._removeIconTemplate=i.template})}ngOnChanges(i){if(super.ngOnChanges(i),i.chipProps&&i.chipProps.currentValue){let{currentValue:t}=i.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.style!==void 0&&(this.style=t.style),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}containerClass(){let i="p-chip p-component";return this.styleClass&&(i+=` ${this.styleClass}`),i}close(i){this.visible=!1,this.onRemove.emit(i)}onKeydown(i){(i.key==="Enter"||i.key==="Backspace")&&this.close(i)}imageError(i){this.onImageError.emit(i)}static \u0275fac=(()=>{let i;return function(n){return(i||(i=y(e)))(n||e)}})();static \u0275cmp=P({type:e,selectors:[["p-chip"]],contentQueries:function(t,n,o){if(t&1&&z(o,ne,4)(o,G,4),t&2){let v;I(v=w())&&(n.removeIconTemplate=v.first),I(v=w())&&(n.templates=v)}},hostVars:9,hostBindings:function(t,n){t&2&&(_("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),R(n.style),d(n.containerClass()),O("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",L],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[N([T]),S,E],ngContentSelectors:oe,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(t,n){if(t&1&&(F(),j(0),m(1,re,1,2,"img",1)(2,ae,1,1,"ng-template",null,0,K)(4,pe,2,2,"div",2)(5,ge,3,2,"ng-container",3)),t&2){let o=A(3);p(),c("ngIf",n.image)("ngIfElse",o),p(3),c("ngIf",n.label),p(),c("ngIf",n.removable)}},dependencies:[U,Q,q,H,Z,J],encapsulation:2,changeDetection:0})}return e})();export{ze as a};
