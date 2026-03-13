import{a as ue,d as ae,u as be}from"./chunk-4UBEEHUP.js";import{S as fe,c as he,l as de,o as _e}from"./chunk-DEL7GGHP.js";import{Ga as pe,Ja as me,ba as le,va as ce,wa as A}from"./chunk-HJ3EJAPD.js";import{j as ne,m as ie,p as re,q as oe,u as se}from"./chunk-O4W5DSIC.js";import{$ as q,$b as v,Ab as w,Eb as N,Fb as k,Hb as M,M as K,Mb as E,N as j,O as G,Ob as u,Qa as h,Qc as I,Rb as Z,Rc as V,S as P,Sb as ee,Tb as F,Ub as R,X as d,Y as _,Za as W,da as S,eb as J,fb as X,jb as Y,kb as g,kc as te,la as Q,ma as H,rb as b,xb as l,yb as B,zb as D}from"./chunk-DNC77BQZ.js";import{a as O,b as z}from"./chunk-GAL4ENT6.js";var Ie=({dt:i})=>`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${i("inputnumber.button.background")};
    color: ${i("inputnumber.button.color")};
    width: ${i("inputnumber.button.width")};
    transition: background ${i("inputnumber.transition.duration")}, color ${i("inputnumber.transition.duration")}, border-color ${i("inputnumber.transition.duration")}, outline-color ${i("inputnumber.transition.duration")};
}

.p-inputnumber-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: 0.75rem;
    color: ${i("inputnumber.button.color")};
}

.p-inputnumber-button:hover {
    background: ${i("inputnumber.button.hover.background")};
    color: ${i("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${i("inputnumber.button.active.background")};
    color: ${i("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${i("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${i("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${i("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${i("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${i("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${i("inputnumber.button.border.radius")};
    border-end-end-radius: ${i("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${i("inputnumber.button.border.radius")};
    border-end-start-radius: ${i("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${i("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${i("inputnumber.button.border.color")};
    padding-block: ${i("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${i("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${i("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${i("inputnumber.button.border.radius")};
    border-start-end-radius: ${i("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${i("inputnumber.button.border.radius")};
    border-end-end-radius: ${i("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${i("form.field.sm.font.size")};
    width: ${i("form.field.sm.font.size")};
    height: ${i("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${i("form.field.lg.font.size")};
    width: ${i("form.field.lg.font.size")};
    height: ${i("form.field.lg.font.size")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
p-input-number.ng-invalid.ng-dirty > .p-inputtext,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${i("inputtext.invalid.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${i("inputtext.focus.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${i("inputtext.invalid.placeholder.color")};
}
`,ye={root:({instance:i})=>({"p-inputnumber p-component p-inputwrapper":!0,"p-inputwrapper-filled":i.filled||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid}),pcInput:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>({"p-inputnumber-button p-inputnumber-increment-button":!0,"p-disabled":i.showButtons&&i.max!==null&&i.maxlength}),decrementButton:({instance:i})=>({"p-inputnumber-button p-inputnumber-decrement-button":!0,"p-disabled":i.showButtons&&i.min!==null&&i.minlength})},U=(()=>{class i extends pe{name="inputnumber";theme=Ie;classes=ye;static \u0275fac=(()=>{let e;return function(t){return(e||(e=H(i)))(t||i)}})();static \u0275prov=j({token:i,factory:i.\u0275fac})}return i})();var Ce=["clearicon"],we=["incrementbuttonicon"],Te=["decrementbuttonicon"],Be=["input"];function De(i,m){if(i&1){let e=M();B(0,"TimesIcon",7),E("click",function(){d(e);let t=u(2);return _(t.clear())}),D()}i&2&&(l("ngClass","p-inputnumber-clear-icon"),b("data-pc-section","clearIcon"))}function Ee(i,m){}function Ve(i,m){i&1&&g(0,Ee,0,0,"ng-template")}function ve(i,m){if(i&1){let e=M();B(0,"span",8),E("click",function(){d(e);let t=u(2);return _(t.clear())}),g(1,Ve,1,0,null,9),D()}if(i&2){let e=u(2);b("data-pc-section","clearIcon"),h(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Se(i,m){if(i&1&&(N(0),g(1,De,1,2,"TimesIcon",5)(2,ve,2,2,"span",6),k()),i&2){let e=u();h(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),h(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Ne(i,m){if(i&1&&w(0,"span",13),i&2){let e=u(2);l("ngClass",e.incrementButtonIcon),b("data-pc-section","incrementbuttonicon")}}function ke(i,m){i&1&&w(0,"AngleUpIcon"),i&2&&b("data-pc-section","incrementbuttonicon")}function Me(i,m){}function Fe(i,m){i&1&&g(0,Me,0,0,"ng-template")}function Re(i,m){if(i&1&&(N(0),g(1,ke,1,1,"AngleUpIcon",2)(2,Fe,1,0,null,9),k()),i&2){let e=u(2);h(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function $e(i,m){if(i&1&&w(0,"span",13),i&2){let e=u(2);l("ngClass",e.decrementButtonIcon),b("data-pc-section","decrementbuttonicon")}}function Ae(i,m){i&1&&w(0,"AngleDownIcon"),i&2&&b("data-pc-section","decrementbuttonicon")}function Ue(i,m){}function Le(i,m){i&1&&g(0,Ue,0,0,"ng-template")}function Oe(i,m){if(i&1&&(N(0),g(1,Ae,1,1,"AngleDownIcon",2)(2,Le,1,0,null,9),k()),i&2){let e=u(2);h(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function ze(i,m){if(i&1){let e=M();B(0,"span",10)(1,"button",11),E("mousedown",function(t){d(e);let r=u();return _(r.onUpButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return _(t.onUpButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return _(t.onUpButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return _(r.onUpButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return _(t.onUpButtonKeyUp())}),g(2,Ne,1,2,"span",12)(3,Re,3,2,"ng-container",2),D(),B(4,"button",11),E("mousedown",function(t){d(e);let r=u();return _(r.onDownButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return _(t.onDownButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return _(t.onDownButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return _(r.onDownButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return _(t.onDownButtonKeyUp())}),g(5,$e,1,2,"span",12)(6,Oe,3,2,"ng-container",2),D()()}if(i&2){let e=u();b("data-pc-section","buttonGroup"),h(),v(e.incrementButtonClass),l("ngClass",e._incrementButtonClass)("disabled",e.disabled),b("aria-hidden",!0)("data-pc-section","incrementbutton"),h(),l("ngIf",e.incrementButtonIcon),h(),l("ngIf",!e.incrementButtonIcon),h(),v(e.decrementButtonClass),l("ngClass",e._decrementButtonClass)("disabled",e.disabled),b("aria-hidden",!0)("data-pc-section","decrementbutton"),h(),l("ngIf",e.decrementButtonIcon),h(),l("ngIf",!e.decrementButtonIcon)}}function Ke(i,m){if(i&1&&w(0,"span",13),i&2){let e=u(2);l("ngClass",e.incrementButtonIcon),b("data-pc-section","incrementbuttonicon")}}function je(i,m){i&1&&w(0,"AngleUpIcon"),i&2&&b("data-pc-section","incrementbuttonicon")}function Ge(i,m){}function Pe(i,m){i&1&&g(0,Ge,0,0,"ng-template")}function qe(i,m){if(i&1&&(N(0),g(1,je,1,1,"AngleUpIcon",2)(2,Pe,1,0,null,9),k()),i&2){let e=u(2);h(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),h(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Qe(i,m){if(i&1){let e=M();B(0,"button",11),E("mousedown",function(t){d(e);let r=u();return _(r.onUpButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return _(t.onUpButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return _(t.onUpButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return _(r.onUpButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return _(t.onUpButtonKeyUp())}),g(1,Ke,1,2,"span",12)(2,qe,3,2,"ng-container",2),D()}if(i&2){let e=u();v(e.incrementButtonClass),l("ngClass",e._incrementButtonClass)("disabled",e.disabled),b("aria-hidden",!0)("data-pc-section","incrementbutton"),h(),l("ngIf",e.incrementButtonIcon),h(),l("ngIf",!e.incrementButtonIcon)}}function He(i,m){if(i&1&&w(0,"span",13),i&2){let e=u(2);l("ngClass",e.decrementButtonIcon),b("data-pc-section","decrementbuttonicon")}}function We(i,m){i&1&&w(0,"AngleDownIcon"),i&2&&b("data-pc-section","decrementbuttonicon")}function Je(i,m){}function Xe(i,m){i&1&&g(0,Je,0,0,"ng-template")}function Ye(i,m){if(i&1&&(N(0),g(1,We,1,1,"AngleDownIcon",2)(2,Xe,1,0,null,9),k()),i&2){let e=u(2);h(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),h(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Ze(i,m){if(i&1){let e=M();B(0,"button",11),E("mousedown",function(t){d(e);let r=u();return _(r.onDownButtonMouseDown(t))})("mouseup",function(){d(e);let t=u();return _(t.onDownButtonMouseUp())})("mouseleave",function(){d(e);let t=u();return _(t.onDownButtonMouseLeave())})("keydown",function(t){d(e);let r=u();return _(r.onDownButtonKeyDown(t))})("keyup",function(){d(e);let t=u();return _(t.onDownButtonKeyUp())}),g(1,He,1,2,"span",12)(2,Ye,3,2,"ng-container",2),D()}if(i&2){let e=u();v(e.decrementButtonClass),l("ngClass",e._decrementButtonClass)("disabled",e.disabled),b("aria-hidden",!0)("data-pc-section","decrementbutton"),h(),l("ngIf",e.decrementButtonIcon),h(),l("ngIf",!e.decrementButtonIcon)}}var et={provide:ue,useExisting:K(()=>ge),multi:!0},ge=(()=>{class i extends me{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;style;placeholder;size;maxlength;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;name;required;autocomplete;min;max;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly=!1;step=1;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;variant;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1),this._disabled=e,this.timer&&this.clearTimer()}fluid=!1;onInput=new S;onFocus=new S;onBlur=new S;onKeyDown=new S;onClear=new S;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_disabled;_componentStyle=P(U);ngControl=null;get _rootClass(){return this._componentStyle.classes.root({instance:this})}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}get _incrementButtonClass(){return this._componentStyle.classes.incrementButton({instance:this})}get _decrementButtonClass(){return this._componentStyle.classes.decrementButton({instance:this})}constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}get hostClasses(){return typeof this._rootClass=="string"?this._rootClass:Array.isArray(this._rootClass)?this._rootClass.join(" "):typeof this._rootClass=="object"?Object.keys(this._rootClass).filter(e=>this._rootClass[e]).join(" "):""}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(ae,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((t,r)=>[t,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=t=>n.get(t)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,z(O({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),t=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let s=+o;return isNaN(s)?null:s}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=this.step*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t);this.maxlength&&this.maxlength<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.disabled||this.clearTimer()}onUpButtonMouseLeave(){this.disabled||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.disabled||this.clearTimer()}onDownButtonMouseLeave(){this.disabled||this.clearTimer()}onDownButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=n;s<=r.length;s++){let c=s===0?0:s-1;if(this.isNumeralChar(r.charAt(c))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=t;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let s=r.charAt(n-1),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:p}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let a=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,a?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(c>0&&n>c){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<a?"":"0";o=r.slice(0,n-1)+x+r.slice(n)}else p===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&s.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let s=r.charAt(n),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:p}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let a=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,a?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(c>0&&n>c){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<a?"":"0";o=r.slice(0,n)+x+r.slice(n+1)}else p===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:s,selectionStart:c,selectionEnd:p}=this.input.nativeElement,a=this.parseValue(s+t),x=a!=null?a.toString():"",y=s.substring(c,p),f=this.parseValue(y),T=f!=null?f.toString():"";if(c!==p&&T.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}this.maxlength&&x.length>this.maxlength||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.disabled&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(n){this.maxlength&&(n=n.toString().substring(0,this.maxlength));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){return this.min==null||this.min<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,c=this.input?.nativeElement.value.trim(),{decimalCharIndex:p,minusCharIndex:a,suffixCharIndex:x,currencyCharIndex:y}=this.getCharIndexes(c),f;if(t.isMinusSign)o===0&&(f=c,(a===-1||s!==0)&&(f=this.insertText(c,n,0,s)),this.updateValue(e,f,n,"insert"));else if(t.isDecimalSign)p>0&&o===p?this.updateValue(e,c,n,"insert"):p>o&&p<s?(f=this.insertText(c,n,o,s),this.updateValue(e,f,n,"insert")):p===-1&&this.maxFractionDigits&&(f=this.insertText(c,n,o,s),this.updateValue(e,f,n,"insert"));else{let T=this.numberFormat.resolvedOptions().maximumFractionDigits,C=o!==s?"range-insert":"insert";if(p>0&&o>p){if(o+n.length-(p+1)<=T){let $=y>=o?y-1:x>=o?x:c.length;f=c.slice(0,o)+n+c.slice(o+n.length,$)+c.slice($),this.updateValue(e,f,n,C)}}else f=this.insertText(c,n,o,s),this.updateValue(e,f,n,C)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let s=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<s)&&(e-=s);let c=t.charAt(e);if(this.isNumeralChar(c))return e+s;let p=e-1;for(;p>=0;)if(c=t.charAt(p),this.isNumeralChar(c)){o=p+s;break}else p--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(p=e;p<r;)if(c=t.charAt(p),this.isNumeralChar(c)){o=p+s;break}else p++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==le()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,t,r,n),this.handleOnInput(e,o,s))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,s=this.formatValue(e),c=o.length;if(s!==r&&(s=this.concatValues(s,r)),c===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let a=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(a,a)}else{let p=this.input.nativeElement.selectionStart,a=this.input.nativeElement.selectionEnd;if(this.maxlength&&s.length>this.maxlength&&(s=s.slice(0,this.maxlength),p=Math.min(p,this.maxlength),a=Math.min(a,this.maxlength)),this.maxlength&&this.maxlength<s.length)return;this.input.nativeElement.value=s;let x=s.length;if(t==="range-insert"){let y=this.parseValue((o||"").slice(0,p)),T=(y!==null?y.toString():"").split("").join(`(${this.groupChar})?`),C=new RegExp(T,"g");C.test(s);let $=n.split("").join(`(${this.groupChar})?`),L=new RegExp($,"g");L.test(s.slice(C.lastIndex)),a=C.lastIndex+L.lastIndex,this.input.nativeElement.setSelectionRange(a,a)}else if(x===c)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(a+1,a+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(a-1,a-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(a,a);else if(t==="delete-back-single"){let y=o.charAt(a-1),f=o.charAt(a),T=c-x,C=this._group.test(f);C&&T===1?a+=1:!C&&this.isNumeralChar(y)&&(a+=-1*T+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(a,a)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let f=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(f,f)}else a=a+(x-c),this.input.nativeElement.setSelectionRange(a,a)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e:e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n),this.onModelTouched()}writeValue(e){this.value=e&&Number(e),this.input&&(this.input.nativeElement.value=e&&Number(e)),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get filled(){return this.value!=null&&this.value.toString().length>0}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(W(q))};static \u0275cmp=J({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&Z(r,Ce,4)(r,we,4)(r,Te,4)(r,ce,4),n&2){let o;F(o=R())&&(t.clearIconTemplate=o.first),F(o=R())&&(t.incrementButtonIconTemplate=o.first),F(o=R())&&(t.decrementButtonIconTemplate=o.first),F(o=R())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&ee(Be,5),n&2){let r;F(r=R())&&(t.input=r.first)}},hostVars:4,hostBindings:function(n,t){n&2&&(b("data-pc-name","inputnumber")("data-pc-section","root"),v(t.hostClasses))},inputs:{showButtons:[2,"showButtons","showButtons",I],format:[2,"format","format",I],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",style:"style",placeholder:"placeholder",size:"size",maxlength:[2,"maxlength","maxlength",V],tabindex:[2,"tabindex","tabindex",V],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",I],name:"name",required:[2,"required","required",I],autocomplete:"autocomplete",min:[2,"min","min",V],max:[2,"max","max",V],incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",I],step:[2,"step","step",V],allowEmpty:[2,"allowEmpty","allowEmpty",I],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",I],variant:"variant",minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>V(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>V(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",I],autofocus:[2,"autofocus","autofocus",I],disabled:"disabled",fluid:[2,"fluid","fluid",I]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[te([et,U]),Y,Q],decls:6,vars:33,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","ngClass","ngStyle","value","variant","disabled","readonly","pSize","pAutoFocus","fluid"],[4,"ngIf"],["class","p-inputnumber-button-group",4,"ngIf"],["type","button","tabindex","-1",3,"ngClass","class","disabled","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["class","p-inputnumber-clear-icon",3,"click",4,"ngIf"],[3,"click","ngClass"],[1,"p-inputnumber-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[1,"p-inputnumber-button-group"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","ngClass","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,t){n&1&&(B(0,"input",1,0),E("input",function(o){return t.onUserInput(o)})("keydown",function(o){return t.onInputKeyDown(o)})("keypress",function(o){return t.onInputKeyPress(o)})("paste",function(o){return t.onPaste(o)})("click",function(){return t.onInputClick()})("focus",function(o){return t.onInputFocus(o)})("blur",function(o){return t.onInputBlur(o)}),D(),g(2,Se,3,2,"ng-container",2)(3,ze,7,17,"span",3)(4,Qe,3,8,"button",4)(5,Ze,3,8,"button",4)),n&2&&(v(t.inputStyleClass),l("ngClass","p-inputnumber-input")("ngStyle",t.inputStyle)("value",t.formattedValue())("variant",t.variant)("disabled",t.disabled)("readonly",t.readonly)("pSize",t.size)("pAutoFocus",t.autofocus)("fluid",t.hasFluid),b("id",t.inputId)("aria-valuemin",t.min)("aria-valuemax",t.max)("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("name",t.name)("autocomplete",t.autocomplete)("maxlength",t.maxlength)("tabindex",t.tabindex)("aria-required",t.ariaRequired)("required",t.required)("min",t.min)("max",t.max)("data-pc-section","input"),h(2),l("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),h(),l("ngIf",t.showButtons&&t.buttonLayout==="stacked"),h(),l("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),h(),l("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[se,ne,ie,oe,re,be,he,fe,_e,de,A],encapsulation:2,changeDetection:0})}return i})(),Tt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=X({type:i});static \u0275inj=G({imports:[ge,A,A]})}return i})();export{ge as a,Tt as b};
