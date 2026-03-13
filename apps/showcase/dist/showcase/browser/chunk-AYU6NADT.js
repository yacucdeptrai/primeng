import{c as Te,d as M,f as $,h as A}from"./chunk-KMVDOPWF.js";import{a as le,u as ke}from"./chunk-4UBEEHUP.js";import{c as P}from"./chunk-X3A3Q6RL.js";import{A as ve,B as be,S as ye,b as fe,c as we}from"./chunk-DEL7GGHP.js";import{E as pe,G as de,Ga as _e,H as ce,Ja as ge,ja as ue,ra as he,va as me,wa as E,xa as k}from"./chunk-HJ3EJAPD.js";import{j as ne,m as re,p as se,q as ae,u as oe,y as F}from"./chunk-O4W5DSIC.js";import{$b as O,Ab as Z,Eb as y,Fb as T,Gb as I,Hb as v,M as H,Mb as f,N as B,O as Q,Ob as p,Qa as r,Qc as b,Rb as j,Rc as V,S as z,Sb as K,Tb as g,Ub as w,X as m,Xb as G,Y as _,ac as Y,bc as J,da as C,eb as N,fb as W,hb as U,jb as q,kb as d,kc as X,lc as ee,ma as x,mc as R,nc as te,rb as u,vc as S,xb as o,xc as L,yb as h,zb as c,zc as ie}from"./chunk-DNC77BQZ.js";var Ie=({dt:t})=>`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${t("password.meter.height")};
    background: ${t("password.meter.background")};
    border-radius: ${t("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${t("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${t("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${t("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${t("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${t("password.overlay.padding")};
    background: ${t("password.overlay.background")};
    color: ${t("password.overlay.color")};
    border: 1px solid ${t("password.overlay.border.color")};
    box-shadow: ${t("password.overlay.shadow")};
    border-radius: ${t("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${t("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${t("form.field.padding.x")};
    color: ${t("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${t("icon.size")} / 2));
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon,
.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${t("form.field.padding.x")};
    color: ${t("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`,Se={root:({instance:t})=>({position:t.appendTo==="self"?"relative":void 0})},Le={root:({instance:t})=>({"p-password p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled(),"p-variant-filled":'instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled"',"p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}),pcInput:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text"},D=(()=>{class t extends _e{name="password";theme=Ie;classes=Le;inlineStyles=Se;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Ee=["content"],Pe=["footer"],ze=["header"],Oe=["clearicon"],Re=["hideicon"],Ve=["showicon"],Fe=["input"],Me=()=>({class:"p-password-toggle-mask-icon p-password-mask-icon"}),$e=(t,s)=>({showTransitionParams:t,hideTransitionParams:s}),Ae=t=>({value:"visible",params:t}),De=t=>({width:t});function He(t,s){if(t&1){let e=v();h(0,"TimesIcon",8),f("click",function(){m(e);let i=p(2);return _(i.clear())}),c()}t&2&&u("data-pc-section","clearIcon")}function Be(t,s){}function Qe(t,s){t&1&&d(0,Be,0,0,"ng-template")}function Ne(t,s){if(t&1){let e=v();y(0),d(1,He,1,1,"TimesIcon",7),h(2,"span",8),f("click",function(){m(e);let i=p();return _(i.clear())}),d(3,Qe,1,0,null,9),c(),T()}if(t&2){let e=p();r(),o("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),u("data-pc-section","clearIcon"),r(),o("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function We(t,s){if(t&1){let e=v();h(0,"EyeSlashIcon",12),f("click",function(){m(e);let i=p(3);return _(i.onMaskToggle())}),c()}t&2&&u("data-pc-section","hideIcon")}function Ue(t,s){}function qe(t,s){t&1&&d(0,Ue,0,0,"ng-template")}function Ze(t,s){if(t&1){let e=v();h(0,"span",13),f("click",function(){m(e);let i=p(3);return _(i.onMaskToggle())}),d(1,qe,1,0,null,14),c()}if(t&2){let e=p(3);r(),o("ngTemplateOutlet",e.hideIconTemplate||e._hideIconTemplate)("ngTemplateOutletContext",ee(2,Me))}}function je(t,s){if(t&1&&(y(0),d(1,We,1,1,"EyeSlashIcon",10)(2,Ze,2,3,"span",11),T()),t&2){let e=p(2);r(),o("ngIf",!e.hideIconTemplate&&!e._hideIconTemplate),r(),o("ngIf",e.hideIconTemplate||e._hideIconTemplate)}}function Ke(t,s){if(t&1){let e=v();h(0,"EyeIcon",12),f("click",function(){m(e);let i=p(3);return _(i.onMaskToggle())}),c()}t&2&&u("data-pc-section","showIcon")}function Ge(t,s){}function Ye(t,s){t&1&&d(0,Ge,0,0,"ng-template")}function Je(t,s){if(t&1){let e=v();h(0,"span",13),f("click",function(){m(e);let i=p(3);return _(i.onMaskToggle())}),d(1,Ye,1,0,null,9),c()}if(t&2){let e=p(3);r(),o("ngTemplateOutlet",e.showIconTemplate||e._showIconTemplate)}}function Xe(t,s){if(t&1&&(y(0),d(1,Ke,1,1,"EyeIcon",10)(2,Je,2,1,"span",11),T()),t&2){let e=p(2);r(),o("ngIf",!e.showIconTemplate&&!e._showIconTemplate),r(),o("ngIf",e.showIconTemplate||e._showIconTemplate)}}function et(t,s){if(t&1&&(y(0),d(1,je,3,2,"ng-container",5)(2,Xe,3,2,"ng-container",5),T()),t&2){let e=p();r(),o("ngIf",e.unmasked),r(),o("ngIf",!e.unmasked)}}function tt(t,s){t&1&&I(0)}function it(t,s){t&1&&I(0)}function nt(t,s){if(t&1&&(y(0),d(1,it,1,0,"ng-container",9),T()),t&2){let e=p(2);r(),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}function rt(t,s){if(t&1&&(h(0,"div",17)(1,"div",18),Z(2,"div",3),S(3,"mapper"),c(),h(4,"div",19),Y(5),c()()),t&2){let e=p(2);r(),u("data-pc-section","meter"),r(),o("ngClass",L(3,6,e.meter,e.strengthClass))("ngStyle",R(9,De,e.meter?e.meter.width:"")),u("data-pc-section","meterLabel"),r(2),u("data-pc-section","info"),r(),J(e.infoText)}}function st(t,s){t&1&&I(0)}function at(t,s){if(t&1){let e=v();h(0,"div",15,1),f("click",function(i){m(e);let l=p();return _(l.onOverlayClick(i))})("@overlayAnimation.start",function(i){m(e);let l=p();return _(l.onAnimationStart(i))})("@overlayAnimation.done",function(i){m(e);let l=p();return _(l.onAnimationEnd(i))}),d(2,tt,1,0,"ng-container",9)(3,nt,2,1,"ng-container",16)(4,rt,6,11,"ng-template",null,2,ie)(6,st,1,0,"ng-container",9),c()}if(t&2){let e=G(5),n=p();o("@overlayAnimation",R(9,Ae,te(6,$e,n.showTransitionOptions,n.hideTransitionOptions))),u("data-pc-section","panel"),r(2),o("ngTemplateOutlet",n.headerTemplate||n._headerTemplate),r(),o("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),r(3),o("ngTemplateOutlet",n.footerTemplate||n._footerTemplate)}}var ot=(()=>{class t{transform(e,n,...i){return n(e,...i)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=U({name:"mapper",type:t,pure:!0})}return t})(),lt={provide:le,useExisting:H(()=>Ce),multi:!0},Ce=(()=>{class t extends ge{ariaLabel;fluid;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;size;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;variant;tabindex;onFocus=new C;onBlur=new C;onClear=new C;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;_componentStyle=z(D);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}overlayService=z(he);ngOnInit(){super.ngOnInit(),this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"hideicon":this._hideIconTemplate=e.template;break;case"showicon":this._showIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,P.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(e){e.toState==="void"&&P.clear(e.element)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=de(this.input.nativeElement)+"px",pe(this.overlay,this.input.nativeElement)):ce(this.overlay,this.input.nativeElement)}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback){let n=e.target.value;if(this.updateUI(n),e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(e){let n=null,i=null;switch(this.testStrength(e)){case 1:n=this.weakText(),i={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText(),i={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText(),i={strength:"strong",width:"100%"};break;default:n=this.promptText(),i=null;break}this.meter=i,this.infoText=n}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let n=0;return this.strongCheckRegExp.test(e)?n=3:this.mediumCheckRegExp.test(e)?n=2:e.length&&(n=1),n}writeValue(e){e===void 0?this.value=null:this.value=e,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindScrollListener(){F(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new fe(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(F(this.platformId)&&!this.resizeListener){let e=this.document.defaultView;this.resizeListener=this.renderer.listen(e,"resize",()=>{this.overlayVisible&&!ue()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(e){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":e}}get rootClass(){return this._componentStyle.classes.root({instance:this})}inputFieldClass(e){return{"p-password-input":!0,"p-disabled":e}}strengthClass(e){return`p-password-meter-label p-password-meter${e?.strength?`-${e.strength}`:""}`}filled(){return this.value!=null&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(k.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(k.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(k.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(k.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&(this.appendTo==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(e){return e?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(P.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-password"]],contentQueries:function(n,i,l){if(n&1&&j(l,Ee,4)(l,Pe,4)(l,ze,4)(l,Oe,4)(l,Re,4)(l,Ve,4)(l,me,4),n&2){let a;g(a=w())&&(i.contentTemplate=a.first),g(a=w())&&(i.footerTemplate=a.first),g(a=w())&&(i.headerTemplate=a.first),g(a=w())&&(i.clearIconTemplate=a.first),g(a=w())&&(i.hideIconTemplate=a.first),g(a=w())&&(i.showIconTemplate=a.first),g(a=w())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&K(Fe,5),n&2){let l;g(l=w())&&(i.input=l.first)}},inputs:{ariaLabel:"ariaLabel",fluid:[2,"fluid","fluid",b],ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:[2,"disabled","disabled",b],promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",V],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",b],appendTo:"appendTo",toggleMask:[2,"toggleMask","toggleMask",b],size:"size",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",b],autofocus:[2,"autofocus","autofocus",b],variant:"variant",tabindex:[2,"tabindex","tabindex",V]},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[X([lt,D]),q],decls:8,vars:34,consts:[["input",""],["overlay",""],["content",""],[3,"ngClass","ngStyle"],["pInputText","",3,"input","focus","blur","keyup","disabled","pSize","ngClass","ngStyle","value","variant","pAutoFocus"],[4,"ngIf"],["class","p-password-overlay p-component",3,"click",4,"ngIf"],["class","p-password-clear-icon",3,"click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-password-toggle-mask-icon p-password-mask-icon",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[1,"p-password-toggle-mask-icon","p-password-mask-icon",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-password-overlay","p-component",3,"click"],[4,"ngIf","ngIfElse"],[1,"p-password-content"],[1,"p-password-meter"],[1,"p-password-meter-text"]],template:function(n,i){n&1&&(h(0,"div",3)(1,"input",4,0),S(3,"mapper"),S(4,"mapper"),f("input",function(a){return i.onInput(a)})("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)})("keyup",function(a){return i.onKeyUp(a)}),c(),d(5,Ne,4,3,"ng-container",5)(6,et,3,2,"ng-container",5)(7,at,7,11,"div",6),c()),n&2&&(O(i.styleClass),o("ngClass",i.rootClass)("ngStyle",i.style),u("data-pc-name","password")("data-pc-section","root"),r(),O(i.inputStyleClass),o("disabled",i.disabled)("pSize",i.size)("ngClass",L(3,28,i.disabled,i.inputFieldClass))("ngStyle",i.inputStyle)("value",i.value)("variant",i.variant)("pAutoFocus",i.autofocus),u("label",i.label)("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.inputId)("tabindex",i.tabindex)("type",L(4,31,i.unmasked,i.inputType))("placeholder",i.placeholder)("autocomplete",i.autocomplete)("maxlength",i.maxLength)("data-pc-section","input"),r(4),o("ngIf",i.showClear&&i.value!=null),r(),o("ngIf",i.toggleMask),r(),o("ngIf",i.overlayVisible))},dependencies:[oe,ne,re,ae,se,ke,we,ye,be,ve,E,ot],encapsulation:2,data:{animation:[Te("overlayAnimation",[A(":enter",[$({opacity:0,transform:"scaleY(0.8)"}),M("{{showTransitionParams}}")]),A(":leave",[M("{{hideTransitionParams}}",$({opacity:0}))])])]},changeDetection:0})}return t})(),qt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=Q({imports:[Ce,E,E]})}return t})();export{Ce as a,qt as b};
