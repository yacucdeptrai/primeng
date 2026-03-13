import './polyfills.server.mjs';
import{a as U}from"./chunk-TFKM2WIB.mjs";import{Ga as Y,Ja as J,Ka as W,va as K,wa as h}from"./chunk-YQJJ7I3T.mjs";import{k as G,r as V,v as q}from"./chunk-RUZVPFSZ.mjs";import{Bb as a,Cb as k,Db as C,Eb as z,Kb as y,M as v,Mb as S,N as B,O as L,Qb as D,S as w,Sa as g,Sb as c,Vb as P,Xb as b,Yb as f,Zc as $,_c as Q,bc as A,da as I,dc as _,ec as H,fc as N,gb as O,hb as E,kb as F,lb as M,ma as s,mb as m,oc as R,qc as T,rc as j,vb as u,wb as d,xb as p}from"./chunk-ZJKG6QAF.mjs";var ot=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,et={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},x=(()=>{class t extends Y{name="togglebutton";theme=ot;classes=et;static \u0275fac=(()=>{let o;return function(e){return(o||(o=s(t)))(e||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var nt=["icon"],it=["content"],X=t=>({$implicit:t}),lt=(t,l)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":l});function at(t,l){t&1&&y(0)}function rt(t,l){if(t&1&&z(0,"span",0),t&2){let o=c(3);_(o.checked?o.onIcon:o.offIcon),a("ngClass",j(4,lt,o.iconPos==="left",o.iconPos==="right")),u("data-pc-section","icon")}}function gt(t,l){if(t&1&&d(0,rt,1,7,"span",2),t&2){let o=c(2);p(o.onIcon||o.offIcon?0:-1)}}function ct(t,l){t&1&&y(0)}function st(t,l){if(t&1&&m(0,ct,1,0,"ng-container",1),t&2){let o=c(2);a("ngTemplateOutlet",o.iconTemplate||o._iconTemplate)("ngTemplateOutletContext",T(2,X,o.checked))}}function ut(t,l){if(t&1&&(d(0,gt,1,1)(1,st,1,4,"ng-container"),k(2,"span",0),H(3),C()),t&2){let o=c();p(o.iconTemplate?1:0),g(2),a("ngClass",o.cx("label")),u("data-pc-section","label"),g(),N(o.checked?o.hasOnLabel?o.onLabel:"\xA0":o.hasOffLabel?o.offLabel:"\xA0")}}var dt={provide:U,useExisting:v(()=>Z),multi:!0},Z=(()=>{class t extends J{get hostClass(){return this.styleClass||""}onKeyDown(o){switch(o.code){case"Enter":this.toggle(o),o.preventDefault();break;case"Space":this.toggle(o),o.preventDefault();break}}toggle(o){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:o,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new I;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=w(x);onBlur(){this.onModelTouched()}writeValue(o){this.checked=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(o=>{switch(o.getType()){case"icon":this._iconTemplate=o.template;break;case"content":this._contentTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}static \u0275fac=(()=>{let o;return function(e){return(o||(o=s(t)))(e||t)}})();static \u0275cmp=O({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,e,r){if(n&1&&P(r,nt,4)(r,it,4)(r,K,4),n&2){let i;b(i=f())&&(e.iconTemplate=i.first),b(i=f())&&(e.contentTemplate=i.first),b(i=f())&&(e.templates=i)}},hostVars:22,hostBindings:function(n,e){n&1&&D("keydown",function(i){return e.onKeyDown(i)})("click",function(i){return e.toggle(i)}),n&2&&(S("tabIndex",e.tabindex),u("aria-labelledby",e.ariaLabelledBy)("aria-pressed",e.checked)("data-p-checked",e.active)("data-p-disabled",e.disabled)("type","button"),_(e.hostClass),A("p-togglebutton",!0)("p-togglebutton-checked",e.checked)("p-disabled",e.disabled)("p-togglebutton-sm",e.size==="small")("p-inputfield-sm",e.size==="small")("p-togglebutton-lg",e.size==="large")("p-inputfield-lg",e.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",$],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Q],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",$],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[R([dt,x]),F([W]),M],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,e){n&1&&(k(0,"span",0),m(1,at,1,0,"ng-container",1),d(2,ut,4,4),C()),n&2&&(a("ngClass",e.cx("content")),g(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",T(4,X,e.checked)),g(),p(e.contentTemplate?-1:2))},dependencies:[q,G,V,h],encapsulation:2,changeDetection:0})}return t})(),zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=E({type:t});static \u0275inj=L({imports:[Z,h,h]})}return t})();export{Z as a,zt as b};
