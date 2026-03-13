import './polyfills.server.mjs';
import{a as rt}from"./chunk-JK4FPM6O.mjs";import{a as it,b as lt}from"./chunk-25YO5GOD.mjs";import{$ as ot,c as tt,v as et}from"./chunk-DE54ZEHA.mjs";import{Ga as Y,Ja as Z,Ka as nt,oa as W,va as X,wa as g}from"./chunk-YQJJ7I3T.mjs";import{k as j,n as K,q as U,r as G,v as J}from"./chunk-RUZVPFSZ.mjs";import{$b as H,Bb as l,Cb as m,Db as _,Dc as $,Eb as B,Ib as S,Jb as D,Kb as V,Lb as v,N as P,O,Qb as h,S as M,Sa as s,Sb as u,Vb as Q,Wb as R,X as T,Xb as d,Y as C,Yb as c,Zc as p,_c as q,cc as L,da as f,dc as I,gb as z,ha as E,hb as A,lb as F,ma as y,mb as b,oc as N,vb as w}from"./chunk-ZJKG6QAF.mjs";import{a as k}from"./chunk-AFOT676I.mjs";var pt=({dt:n})=>`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${n("splitbutton.border.radius")};
}

.p-splitbutton-button.p-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-button.p-button:focus-visible,
.p-splitbutton-dropdown.p-button:focus-visible {
    z-index: 1;
}

.p-splitbutton-button.p-button:not(:disabled):hover,
.p-splitbutton-button.p-button:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-dropdown.p-button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-start-end-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-end-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-rounded > .p-splitbutton-button {
    border-start-start-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-start-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-raised {
    box-shadow: ${n("splitbutton.raised.shadow")};
}
`,at={root:({props:n})=>["p-splitbutton p-component",{"p-splitbutton-raised":n.raised,"p-splitbutton-rounded":n.rounded,"p-splitbutton-fluid":n.fluid}],pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},x=(()=>{class n extends Y{name="splitbutton";theme=pt;classes=at;static \u0275fac=(()=>{let t;return function(e){return(t||(t=y(n)))(e||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();var ut=["content"],dt=["dropdownicon"],ct=["container"],bt=["defaultbtn"],mt=["menu"];function ft(n,a){n&1&&V(0)}function _t(n,a){if(n&1){let t=v();S(0),m(1,"button",10),h("click",function(e){T(t);let o=u();return C(o.onDefaultButtonClick(e))}),b(2,ft,1,0,"ng-container",11),_(),D()}if(n&2){let t=u();s(),l("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("disabled",t.disabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions),w("tabindex",t.tabindex)("aria-label",(t.buttonProps==null?null:t.buttonProps.ariaLabel)||t.label),s(),l("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function ht(n,a){if(n&1){let t=v();m(0,"button",12,3),h("click",function(e){T(t);let o=u();return C(o.onDefaultButtonClick(e))}),_()}if(n&2){let t=u();l("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("label",t.label)("disabled",t.buttonDisabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions),w("tabindex",t.tabindex)("aria-label",t.buttonProps==null?null:t.buttonProps.ariaLabel)}}function yt(n,a){if(n&1&&B(0,"span"),n&2){let t=u();I(t.dropdownIcon)}}function wt(n,a){n&1&&B(0,"ChevronDownIcon")}function gt(n,a){}function Tt(n,a){n&1&&b(0,gt,0,0,"ng-template")}function Ct(n,a){if(n&1&&(S(0),b(1,wt,1,0,"ChevronDownIcon",8)(2,Tt,1,0,null,11),D()),n&2){let t=u();s(),l("ngIf",!t.dropdownIconTemplate&&!t._dropdownIconTemplate),s(),l("ngTemplateOutlet",t.dropdownIconTemplate||t._dropdownIconTemplate)}}var Bt=(()=>{class n extends Z{model;severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;icon;iconPos="left";label;tooltip;tooltipOptions;style;styleClass;menuStyle;menuStyleClass;dropdownIcon;appendTo;dir;expandAriaLabel;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";buttonProps;menuButtonProps;autofocus;set disabled(t){this._disabled=t,this._buttonDisabled=t,this.menuButtonDisabled=t}get disabled(){return this._disabled}tabindex;set menuButtonDisabled(t){this.disabled?this._menuButtonDisabled=this.disabled:this._menuButtonDisabled=t}get menuButtonDisabled(){return this._menuButtonDisabled}set buttonDisabled(t){this.disabled?this.buttonDisabled=this.disabled:this._buttonDisabled=t}get buttonDisabled(){return this._buttonDisabled}onClick=new f;onMenuHide=new f;onMenuShow=new f;onDropdownClick=new f;containerViewChild;buttonViewChild;menu;contentTemplate;dropdownIconTemplate;templates;ariaId;isExpanded=E(!1);_disabled;_buttonDisabled;_menuButtonDisabled;_componentStyle=M(x);_contentTemplate;_dropdownIconTemplate;ngOnInit(){super.ngOnInit(),this.ariaId=W("pn_id_")}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"dropdownicon":this._dropdownIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get containerClass(){let t={"p-splitbutton p-component":!0,"p-splitbutton-raised":this.raised,"p-splitbutton-rounded":this.rounded,"p-splitbutton-outlined":this.outlined,"p-splitbutton-text":this.text,[`p-splitbutton-${this.size==="small"?"sm":"lg"}`]:this.size};return k({},t)}onDefaultButtonClick(t){this.onClick.emit(t),this.menu.hide()}onDropdownButtonClick(t){this.onDropdownClick.emit(t),this.menu?.toggle({currentTarget:this.containerViewChild?.nativeElement,relativeAlign:this.appendTo==null})}onDropdownButtonKeydown(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())}onHide(){this.isExpanded.set(!1),this.onMenuHide.emit()}onShow(){this.isExpanded.set(!0),this.onMenuShow.emit()}static \u0275fac=(()=>{let t;return function(e){return(t||(t=y(n)))(e||n)}})();static \u0275cmp=z({type:n,selectors:[["p-splitbutton"],["p-splitButton"],["p-split-button"]],contentQueries:function(i,e,o){if(i&1&&Q(o,ut,4)(o,dt,4)(o,X,4),i&2){let r;d(r=c())&&(e.contentTemplate=r.first),d(r=c())&&(e.dropdownIconTemplate=r.first),d(r=c())&&(e.templates=r)}},viewQuery:function(i,e){if(i&1&&R(ct,5)(bt,5)(mt,5),i&2){let o;d(o=c())&&(e.containerViewChild=o.first),d(o=c())&&(e.buttonViewChild=o.first),d(o=c())&&(e.menu=o.first)}},inputs:{model:"model",severity:"severity",raised:[2,"raised","raised",p],rounded:[2,"rounded","rounded",p],text:[2,"text","text",p],outlined:[2,"outlined","outlined",p],size:"size",plain:[2,"plain","plain",p],icon:"icon",iconPos:"iconPos",label:"label",tooltip:"tooltip",tooltipOptions:"tooltipOptions",style:"style",styleClass:"styleClass",menuStyle:"menuStyle",menuStyleClass:"menuStyleClass",dropdownIcon:"dropdownIcon",appendTo:"appendTo",dir:"dir",expandAriaLabel:"expandAriaLabel",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonProps:"buttonProps",menuButtonProps:"menuButtonProps",autofocus:[2,"autofocus","autofocus",p],disabled:[2,"disabled","disabled",p],tabindex:[2,"tabindex","tabindex",q],menuButtonDisabled:"menuButtonDisabled",buttonDisabled:"buttonDisabled"},outputs:{onClick:"onClick",onMenuHide:"onMenuHide",onMenuShow:"onMenuShow",onDropdownClick:"onDropdownClick"},features:[N([x]),F],decls:10,vars:26,consts:[["container",""],["defaultButton",""],["menu",""],["defaultbtn",""],[3,"ngClass","ngStyle"],[4,"ngIf","ngIfElse"],["type","button","pButton","","pRipple","",1,"p-splitbutton-dropdown","p-button-icon-only",3,"click","keydown","size","severity","text","outlined","disabled"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"onHide","onShow","id","popup","model","styleClass","appendTo","showTransitionOptions","hideTransitionOptions"],["type","button","pButton","","pRipple","",1,"p-splitbutton-button",3,"click","severity","text","outlined","size","icon","iconPos","disabled","pAutoFocus","pTooltip","tooltipOptions"],[4,"ngTemplateOutlet"],["type","button","pButton","","pRipple","",1,"p-splitbutton-button",3,"click","severity","text","outlined","size","icon","iconPos","label","disabled","pAutoFocus","pTooltip","tooltipOptions"]],template:function(i,e){if(i&1&&(m(0,"div",4,0),b(2,_t,3,13,"ng-container",5)(3,ht,2,13,"ng-template",null,1,$),m(5,"button",6),h("click",function(r){return e.onDropdownButtonClick(r)})("keydown",function(r){return e.onDropdownButtonKeydown(r)}),b(6,yt,1,2,"span",7)(7,Ct,3,2,"ng-container",8),_(),m(8,"p-tieredMenu",9,2),h("onHide",function(){return e.onHide()})("onShow",function(){return e.onShow()}),_()()),i&2){let o=H(4);I(e.styleClass),l("ngClass",e.containerClass)("ngStyle",e.style),s(2),l("ngIf",e.contentTemplate||e._contentTemplate)("ngIfElse",o),s(3),l("size",e.size)("severity",e.severity)("text",e.text)("outlined",e.outlined)("disabled",e.menuButtonDisabled),w("aria-label",(e.menuButtonProps==null?null:e.menuButtonProps.ariaLabel)||e.expandAriaLabel)("aria-haspopup",(e.menuButtonProps==null?null:e.menuButtonProps.ariaHasPopup)||!0)("aria-expanded",(e.menuButtonProps==null?null:e.menuButtonProps.ariaExpanded)||e.isExpanded())("aria-controls",(e.menuButtonProps==null?null:e.menuButtonProps.ariaControls)||e.ariaId),s(),l("ngIf",e.dropdownIcon),s(),l("ngIf",!e.dropdownIcon),s(),L(e.menuStyle),l("id",e.ariaId)("popup",!0)("model",e.model)("styleClass",e.menuStyleClass)("appendTo",e.appendTo)("showTransitionOptions",e.showTransitionOptions)("hideTransitionOptions",e.hideTransitionOptions)}},dependencies:[J,j,K,G,U,ot,rt,tt,et,nt,lt,it,g],encapsulation:2,changeDetection:0})}return n})(),Jt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=A({type:n});static \u0275inj=O({imports:[Bt,g,g]})}return n})();export{Bt as a,Jt as b};
