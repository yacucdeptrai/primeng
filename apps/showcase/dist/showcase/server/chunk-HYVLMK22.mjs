import './polyfills.server.mjs';
import{a as L,d as O}from"./chunk-TFKM2WIB.mjs";import{c as T}from"./chunk-DE54ZEHA.mjs";import{Ga as R,Ja as D,wa as h}from"./chunk-YQJJ7I3T.mjs";import{k as V,q as j,v as A}from"./chunk-RUZVPFSZ.mjs";import{$,Bb as f,Cb as m,Db as g,Eb as B,M as y,N as u,O as k,Qb as I,S as s,Sa as b,Wb as F,Xb as N,Yb as S,Zc as p,_c as M,da as c,dc as _,gb as C,hb as w,lb as x,ma as l,oc as z,uc as E,vb as d}from"./chunk-ZJKG6QAF.mjs";var U=({dt:o})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${o("radiobutton.width")};
    height: ${o("radiobutton.height")};
}

.p-radiobutton-input {
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
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${o("radiobutton.border.color")};
    background: ${o("radiobutton.background")};
    width: ${o("radiobutton.width")};
    height: ${o("radiobutton.height")};
    transition: background ${o("radiobutton.transition.duration")}, color ${o("radiobutton.transition.duration")}, border-color ${o("radiobutton.transition.duration")}, box-shadow ${o("radiobutton.transition.duration")}, outline-color ${o("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${o("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${o("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${o("radiobutton.icon.size")};
    width: ${o("radiobutton.icon.size")};
    height: ${o("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${o("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${o("radiobutton.checked.border.color")};
    background: ${o("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${o("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${o("radiobutton.checked.hover.border.color")};
    background: ${o("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${o("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${o("radiobutton.focus.border.color")};
    box-shadow: ${o("radiobutton.focus.ring.shadow")};
    outline: ${o("radiobutton.focus.ring.width")} ${o("radiobutton.focus.ring.style")} ${o("radiobutton.focus.ring.color")};
    outline-offset: ${o("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${o("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${o("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${o("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${o("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${o("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${o("radiobutton.disabled.background")};
    border-color: ${o("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${o("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${o("radiobutton.sm.width")};
    height: ${o("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${o("radiobutton.icon.sm.size")};
    width: ${o("radiobutton.icon.sm.size")};
    height: ${o("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${o("radiobutton.lg.width")};
    height: ${o("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${o("radiobutton.icon.lg.size")};
    width: ${o("radiobutton.icon.lg.size")};
    height: ${o("radiobutton.icon.lg.size")};
}
`,Z={root:({instance:o,props:n})=>["p-radiobutton p-component",{"p-radiobutton-checked":o.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":o.config.inputStyle==="filled"||o.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},v=(()=>{class o extends R{name="radiobutton";theme=U;classes=Z;static \u0275fac=(()=>{let t;return function(i){return(t||(t=l(o)))(i||o)}})();static \u0275prov=u({token:o,factory:o.\u0275fac})}return o})();var q=["input"],H=(o,n,t,e,i)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":o,"p-disabled":n,"p-variant-filled":t,"p-radiobutton-sm p-inputfield-sm":e,"p-radiobutton-lg p-inputfield-lg":i}),J={provide:L,useExisting:y(()=>Q),multi:!0},K=(()=>{class o{accessors=[];add(t,e){this.accessors.push([t,e])}remove(t){this.accessors=this.accessors.filter(e=>e[1]!==t)}select(t){this.accessors.forEach(e=>{this.isSameGroup(e,t)&&e[1]!==t&&e[1].writeValue(t.value)})}isSameGroup(t,e){return t[0].control?t[0].control.root===e.control.control.root&&t[1].name===e.name:!1}static \u0275fac=function(e){return new(e||o)};static \u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Q=(()=>{class o extends D{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new c;onFocus=new c;onBlur=new c;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=s(v);injector=s($);registry=s(K);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(O),this.checkName(),this.registry.add(this.control,this)}onChange(t){this.disabled||this.select(t)}select(t){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:t,value:this.value}))}writeValue(t){this.binary?this.checked=!!t:this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=l(o)))(i||o)}})();static \u0275cmp=C({type:o,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(e,i){if(e&1&&F(q,5),e&2){let r;N(r=S())&&(i.inputViewChild=r.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",p],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",M],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",p],binary:[2,"binary","binary",p]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[z([J,v]),x],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(e,i){e&1&&(m(0,"div",1)(1,"input",2,0),I("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)})("change",function(a){return i.onChange(a)}),g(),m(3,"div",3),B(4,"div",4),g()()),e&2&&(_(i.styleClass),f("ngStyle",i.style)("ngClass",E(18,H,i.checked,i.disabled,i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled",i.size==="small",i.size==="large")),d("data-pc-name","radiobutton")("data-pc-section","root"),b(),f("checked",i.checked)("disabled",i.disabled)("value",i.value)("pAutoFocus",i.autofocus),d("id",i.inputId)("name",i.name)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("aria-checked",i.checked),b(2),d("data-pc-section","input"),b(),d("data-pc-section","icon"))},dependencies:[A,V,j,T,h],encapsulation:2,changeDetection:0})}return o})(),ho=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=w({type:o});static \u0275inj=k({imports:[Q,h,h]})}return o})();export{Q as a,ho as b};
