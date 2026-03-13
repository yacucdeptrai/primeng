import{a as L}from"./chunk-4UBEEHUP.js";import{c as D,d as N}from"./chunk-DEL7GGHP.js";import{Ga as T,Ja as x,wa as g}from"./chunk-HJ3EJAPD.js";import{j as E,p as A,u as B}from"./chunk-O4W5DSIC.js";import{$b as _,Ab as C,M as w,Mb as u,N as b,O as f,Qa as a,Qc as c,Rc as M,S as m,Sb as S,Tb as I,Ub as V,da as k,eb as y,fb as $,jb as v,kc as F,ma as r,rb as l,xb as n,yb as d,zb as h}from"./chunk-DNC77BQZ.js";var Q=({dt:e})=>`
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
    left: 0;
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

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: ${e("toggleswitch.handle.background")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    left: ${e("toggleswitch.gap")};
    margin-top: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, left ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.checked.background")};
    left: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.hover.background")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.checked.hover.background")};
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

.p-toggleswitch.p-disabled .p-toggleswitch-slider:before {
    background: ${e("toggleswitch.handle.disabled.background")};
}
`,R={root:{position:"relative"}},U={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider"},p=(()=>{class e extends T{name="toggleswitch";theme=Q;classes=U;inlineStyles=R;static \u0275fac=(()=>{let i;return function(t){return(i||(i=r(e)))(t||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var P=["input"],W={provide:L,useExisting:w(()=>j),multi:!0},j=(()=>{class e extends x{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new k;input;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=m(p);onClick(i){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:i,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(i){this.modelValue=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let i;return function(t){return(i||(i=r(e)))(t||e)}})();static \u0275cmp=y({type:e,selectors:[["p-inputSwitch"],["p-inputswitch"]],viewQuery:function(o,t){if(o&1&&S(P,5),o&2){let s;I(s=V())&&(t.input=s.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",M],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",c],readonly:[2,"readonly","readonly",c],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",c]},outputs:{onChange:"onChange"},features:[F([W,p]),v],decls:5,vars:22,consts:[["input",""],[3,"click","ngClass","ngStyle"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"]],template:function(o,t){o&1&&(d(0,"div",1),u("click",function(z){return t.onClick(z)}),d(1,"div",2)(2,"input",3,0),u("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),h()(),C(4,"span",4),h()),o&2&&(_(t.styleClass),n("ngClass",t.cx("root"))("ngStyle",t.sx("root"))("ngStyle",t.style),l("data-pc-name","inputswitch")("data-pc-section","root"),a(),l("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),a(),n("ngClass",t.cx("input"))("checked",t.checked())("disabled",t.disabled)("pAutoFocus",t.autofocus),l("id",t.inputId)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name)("tabindex",t.tabindex)("data-pc-section","hiddenInput"),a(2),n("ngClass",t.cx("slider")),l("data-pc-section","slider"))},dependencies:[B,E,A,N,D,g],encapsulation:2,changeDetection:0})}return e})(),ge=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=$({type:e});static \u0275inj=f({imports:[j,g,g]})}return e})();export{ge as a};
