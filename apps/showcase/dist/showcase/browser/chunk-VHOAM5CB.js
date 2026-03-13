import{a as G,d as H}from"./chunk-4UBEEHUP.js";import{G as ee,u as Z}from"./chunk-DEL7GGHP.js";import{Ga as W,Ja as Y,j as K,k as X,va as J,wa as m}from"./chunk-HJ3EJAPD.js";import{j as D,m as R,q as P,u as U}from"./chunk-O4W5DSIC.js";import{$b as $,Ab as u,Eb as y,Fb as _,M as w,Mb as O,N as T,O as M,Ob as k,Qa as l,Qc as h,Rb as q,Rc as A,S as V,Sb as L,Tb as x,Ub as f,_b as v,da as p,eb as z,fb as B,ha as F,jb as E,kb as b,kc as N,la as S,lc as Q,ma as d,mc as j,rb as s,xb as a,yb as g,zb as C}from"./chunk-DNC77BQZ.js";var ie=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
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
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,ne={root:({instance:e,props:r})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},I=(()=>{class e extends W{name="checkbox";theme=ie;classes=ne;static \u0275fac=(()=>{let o;return function(c){return(o||(o=d(e)))(c||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var te=["checkboxicon"],ae=["input"],re=()=>({"p-checkbox-input":!0}),le=e=>({checked:e,class:"p-checkbox-icon"});function he(e,r){if(e&1&&u(0,"span",8),e&2){let o=k(3);a("ngClass",o.checkboxIcon),s("data-pc-section","icon")}}function se(e,r){e&1&&u(0,"CheckIcon",9),e&2&&(a("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function be(e,r){if(e&1&&(y(0),b(1,he,1,2,"span",7)(2,se,1,2,"CheckIcon",6),_()),e&2){let o=k(2);l(),a("ngIf",o.checkboxIcon),l(),a("ngIf",!o.checkboxIcon)}}function pe(e,r){e&1&&u(0,"MinusIcon",9),e&2&&(a("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function de(e,r){if(e&1&&(y(0),b(1,be,3,2,"ng-container",4)(2,pe,1,2,"MinusIcon",6),_()),e&2){let o=k();l(),a("ngIf",o.checked),l(),a("ngIf",o._indeterminate())}}function ue(e,r){}function ke(e,r){e&1&&b(0,ue,0,0,"ng-template")}var xe={provide:G,useExisting:w(()=>oe),multi:!0},oe=(()=>{class e extends Y{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new p;onFocus=new p;onBlur=new p;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:X(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=F(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=V(I);ngAfterContentInit(){this.templates.forEach(o=>{switch(o.getType()){case"icon":this._checkboxIconTemplate=o.template;break;case"checkboxicon":this._checkboxIconTemplate=o.template;break}})}ngOnChanges(o){super.ngOnChanges(o),o.indeterminate&&this._indeterminate.set(o.indeterminate.currentValue)}updateModel(o){let i,c=this.injector.get(H,null,{optional:!0,self:!0}),n=c&&!this.formControl?c.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=n.filter(t=>!K(t,this.value)):i=n?[...n,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:o})}handleChange(o){this.readonly||this.updateModel(o)}onInputFocus(o){this.focused=!0,this.onFocus.emit(o)}onInputBlur(o){this.focused=!1,this.onBlur.emit(o),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(o){this.model=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){setTimeout(()=>{this.disabled=o,this.cd.markForCheck()})}static \u0275fac=(()=>{let o;return function(c){return(o||(o=d(e)))(c||e)}})();static \u0275cmp=z({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,c,n){if(i&1&&q(n,te,4)(n,J,4),i&2){let t;x(t=f())&&(c.checkboxIconTemplate=t.first),x(t=f())&&(c.templates=t)}},viewQuery:function(i,c){if(i&1&&L(ae,5),i&2){let n;x(n=f())&&(c.inputViewChild=n.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",h],binary:[2,"binary","binary",h],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",A],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",h],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",h],required:[2,"required","required",h],autofocus:[2,"autofocus","autofocus",h],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[N([xe,I]),E,S],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,c){i&1&&(g(0,"div",1)(1,"input",2,0),O("focus",function(t){return c.onInputFocus(t)})("blur",function(t){return c.onInputBlur(t)})("change",function(t){return c.handleChange(t)}),C(),g(3,"div",3),b(4,de,3,2,"ng-container",4)(5,ke,1,0,null,5),C()()),i&2&&(v(c.style),$(c.styleClass),a("ngClass",c.containerClass),s("data-p-highlight",c.checked)("data-p-checked",c.checked)("data-p-disabled",c.disabled),l(),v(c.inputStyle),$(c.inputClass),a("value",c.value)("checked",c.checked)("disabled",c.disabled)("readonly",c.readonly)("ngClass",Q(26,re)),s("id",c.inputId)("name",c.name)("tabindex",c.tabindex)("required",c.required?!0:null)("aria-labelledby",c.ariaLabelledBy)("aria-label",c.ariaLabel),l(3),a("ngIf",!c.checkboxIconTemplate&&!c._checkboxIconTemplate),l(),a("ngTemplateOutlet",c.checkboxIconTemplate||c._checkboxIconTemplate)("ngTemplateOutletContext",j(27,le,c.checked)))},dependencies:[U,D,R,P,Z,ee,m],encapsulation:2,changeDetection:0})}return e})(),Le=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=B({type:e});static \u0275inj=M({imports:[oe,m,m]})}return e})();export{oe as a,Le as b};
