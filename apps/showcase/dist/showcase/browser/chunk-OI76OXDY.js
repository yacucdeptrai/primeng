import{a as oe}from"./chunk-7T6NUUXL.js";import{a as X,e as Y,j as Z,s as ee}from"./chunk-4UBEEHUP.js";import{Ga as ie,Ja as ne,i as p,j as c,va as te,wa as m}from"./chunk-HJ3EJAPD.js";import{q as J,u as W}from"./chunk-O4W5DSIC.js";import{Gb as z,Hb as N,M as C,Mb as q,N as v,O as T,Ob as u,Qa as S,Qc as r,Rb as R,Rc as H,S as E,Tb as y,Ub as _,X as B,Y as O,Zb as j,_b as Q,da as h,eb as w,fb as L,jb as V,kb as f,kc as P,ma as d,nc as U,rb as F,sb as M,tb as D,ub as $,vb as I,wb as k,xb as g,yb as A,zb as K,zc as G}from"./chunk-DNC77BQZ.js";var se=({dt:i})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${i("selectbutton.border.radius")};
    border-end-start-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${i("selectbutton.border.radius")};
    border-end-end-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${i("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,re={root:({props:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid}]},x=(()=>{class i extends ie{name="selectbutton";theme=se;classes=re;static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(i)))(n||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();var ue=["item"],ce=(i,a)=>({$implicit:i,index:a});function de(i,a){i&1&&z(0)}function pe(i,a){if(i&1&&f(0,de,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,o=u();g("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",U(2,ce,t,n))}}function me(i,a){i&1&&f(0,pe,1,5,"ng-template",null,0,G)}function be(i,a){if(i&1){let e=N();A(0,"p-toggleButton",2),q("onChange",function(n){let o=B(e),l=o.$implicit,s=o.$index,b=u();return O(b.onOptionSelect(n,l,s))}),M(1,me,2,0),K()}if(i&2){let e=a.$implicit,t=u();g("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.disabled||t.isOptionDisabled(e))("allowEmpty",t.allowEmpty)("size",t.size),S(),D(t.itemTemplate||t._itemTemplate?1:-1)}}var he={provide:X,useExisting:C(()=>le),multi:!0},le=(()=>{class i extends ne{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new h;onChange=new h;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=E(x);getOptionLabel(e){return this.optionLabel?p(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?p(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?p(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,t,n){if(this.disabled||this.isOptionDisabled(t))return;let o=this.isSelected(t);if(o&&this.unselectable)return;let l=this.getOptionValue(t),s;if(this.multiple)o?s=this.value.filter(b=>!c(b,l,this.equalityKey)):s=this.value?[...this.value,l]:[l];else{if(o&&!this.allowEmpty)return;s=o?null:l}this.focusedIndex=n,this.value=s,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,o;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});t==="prev"?n.index===0?o=this.el.nativeElement.children.length-1:o=n.index-1:n.index===this.el.nativeElement.children.length-1?o=0:o=n.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!c(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(c(o,n,this.dataKey)){t=!0;break}}}else t=c(this.getOptionValue(e),this.value,this.equalityKey);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=d(i)))(n||i)}})();static \u0275cmp=w({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,o){if(t&1&&R(o,ue,4)(o,te,4),t&2){let l;y(l=_())&&(n.itemTemplate=l.first),y(l=_())&&(n.templates=l)}},hostVars:10,hostBindings:function(t,n){t&2&&(F("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Q(n.style),j("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",H],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",r],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[P([he,x]),V],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&I(0,be,2,9,"p-toggleButton",1,$),t&2&&k(n.options)},dependencies:[oe,ee,Y,Z,W,J,m],encapsulation:2,changeDetection:0})}return i})(),ke=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=T({imports:[le,m,m]})}return i})();export{le as a,ke as b};
