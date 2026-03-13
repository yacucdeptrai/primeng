import{a as z}from"./chunk-4UBEEHUP.js";import{c as U}from"./chunk-DEL7GGHP.js";import{Ga as q,Ja as P,va as G,wa as p}from"./chunk-HJ3EJAPD.js";import{j as N,p as j,q as D,u as R}from"./chunk-O4W5DSIC.js";import{$b as O,Gb as x,M as f,Mb as b,N as y,O as k,Ob as M,Qa as s,Qc as u,Rb as E,Rc as Q,S as $,Sb as I,Tb as h,Ub as d,_b as L,da as C,eb as v,fb as _,jb as T,kb as S,kc as A,ma as r,mc as B,rb as c,sb as V,tb as F,xb as a,yb as g,zb as w}from"./chunk-DNC77BQZ.js";var K=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,X={root:{position:"relative"}},Y={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},m=(()=>{class e extends q{name="toggleswitch";theme=K;classes=Y;inlineStyles=X;static \u0275fac=(()=>{let i;return function(t){return(i||(i=r(e)))(t||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Z=["handle"],ee=["input"],te=e=>({checked:e});function ie(e,W){e&1&&x(0)}function oe(e,W){if(e&1&&S(0,ie,1,0,"ng-container",4),e&2){let i=M();a("ngTemplateOutlet",i.handleTemplate||i._handleTemplate)("ngTemplateOutletContext",B(2,te,i.checked()))}}var le={provide:z,useExisting:f(()=>H),multi:!0},H=(()=>{class e extends P{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new C;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=$(m);templates;ngAfterContentInit(){this.templates.forEach(i=>{i.getType()==="handle"?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:i,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(i){this.modelValue=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let i;return function(t){return(i||(i=r(e)))(t||e)}})();static \u0275cmp=v({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,t,l){if(o&1&&E(l,Z,4)(l,G,4),o&2){let n;h(n=d())&&(t.handleTemplate=n.first),h(n=d())&&(t.templates=n)}},viewQuery:function(o,t){if(o&1&&I(ee,5),o&2){let l;h(l=d())&&(t.input=l.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Q],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",u],readonly:[2,"readonly","readonly",u],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",u]},outputs:{onChange:"onChange"},features:[A([le,m]),T],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,t){o&1&&(g(0,"div",1),b("click",function(n){return t.onClick(n)}),g(1,"input",2,0),b("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),w(),g(3,"span",3)(4,"div",3),V(5,oe,1,4,"ng-container"),w()()()),o&2&&(L(t.sx("root")),O(t.styleClass),a("ngClass",t.cx("root"))("ngStyle",t.style),c("data-pc-name","toggleswitch")("data-pc-section","root"),s(),a("ngClass",t.cx("input"))("checked",t.checked())("disabled",t.disabled)("pAutoFocus",t.autofocus),c("id",t.inputId)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name)("tabindex",t.tabindex)("data-pc-section","hiddenInput"),s(2),a("ngClass",t.cx("slider")),c("data-pc-section","slider"),s(),a("ngClass",t.cx("handle")),s(),F(t.handleTemplate||t._handleTemplate?5:-1))},dependencies:[R,N,D,j,U,p],encapsulation:2,changeDetection:0})}return e})(),_e=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=_({type:e});static \u0275inj=k({imports:[H,p,p]})}return e})();export{H as a,_e as b};
