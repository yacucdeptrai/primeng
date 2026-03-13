import{a as k,b as Be}from"./chunk-F4X3V2LA.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as x,d as qe,e as ye}from"./chunk-I6RUY6VJ.js";import{a as b,b as je}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as He,b as ae}from"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{$ as Ne,H as Ve,_ as Ue,aa as ve,ba as Q}from"./chunk-DEL7GGHP.js";import{d as oe,e as Ae,i as ne}from"./chunk-UHCZASEU.js";import{Ga as he,Ja as be,Ka as Pe,P as X,Q as A,R as ee,oa as Fe,qa as u,v as se,va as fe,wa as N}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as Te,l as Le,m as Oe,p as Ee,q as $e,u as z,y as ge}from"./chunk-O4W5DSIC.js";import{$b as U,Ab as p,Eb as W,Fb as G,Gb as Y,Hb as P,Mb as O,N as Se,O as q,Ob as _,Qa as l,Qc as J,Rb as ce,Rc as ue,S as ke,Sb as we,Tb as E,Ub as $,X as T,Y as L,Z as De,Za as v,_b as g,ac as n,cc as de,da as R,eb as h,f as Ce,fb as Z,ha as Me,jb as le,kb as M,kc as y,lc as m,ma as te,mc as ie,nc as pe,oc as Ie,rb as V,xb as r,yb as s,zb as a,zc as me}from"./chunk-DNC77BQZ.js";import{a as re,b as xe}from"./chunk-GAL4ENT6.js";var Re=(()=>{class t{code={basic:'<p-speeddial aria-label="Options" />'};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["speed-dial-accessibility-doc"]],standalone:!1,decls:111,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),a(),s(3,"p"),n(4," SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the "),s(5,"i"),n(6,"aria-labelledby"),a(),n(7," or "),s(8,"i"),n(9,"aria-label"),a(),n(10," props. Addititonally the button includes includes "),s(11,"i"),n(12,"aria-haspopup"),a(),n(13,", "),s(14,"i"),n(15,"aria-expanded"),a(),n(16," for states along with "),s(17,"i"),n(18,"aria-controls"),a(),n(19," to define the relation between the popup and the button. "),a(),s(20,"p"),n(21,"The popup overlay uses "),s(22,"i"),n(23,"menu"),a(),n(24," role on the list and each action item has a "),s(25,"i"),n(26,"menuitem"),a(),n(27," role with an "),s(28,"i"),n(29,"aria-label"),a(),n(30," as the menuitem label. The id of the menu refers to the "),s(31,"i"),n(32,"aria-controls"),a(),n(33," of the button."),a()(),p(34,"app-code",0),s(35,"h3"),n(36,"Menu Button Keyboard Support"),a(),s(37,"div",1)(38,"table",2)(39,"thead")(40,"tr")(41,"th"),n(42,"Key"),a(),s(43,"th"),n(44,"Function"),a()()(),s(45,"tbody")(46,"tr")(47,"td")(48,"i"),n(49,"enter"),a()(),s(50,"td"),n(51,"Toggles the visibility of the menu."),a()(),s(52,"tr")(53,"td")(54,"i"),n(55,"space"),a()(),s(56,"td"),n(57,"Toggles the visibility of the menu."),a()(),s(58,"tr")(59,"td")(60,"i"),n(61,"down arrow"),a()(),s(62,"td"),n(63,"Opens the menu and moves focus to the first item."),a()(),s(64,"tr")(65,"td")(66,"i"),n(67,"up arrow"),a()(),s(68,"td"),n(69,"Opens the menu and moves focus to the last item."),a()()()()(),s(70,"h3"),n(71,"Menu Keyboard Support"),a(),s(72,"div",1)(73,"table",2)(74,"thead")(75,"tr")(76,"th"),n(77,"Key"),a(),s(78,"th"),n(79,"Function"),a()()(),s(80,"tbody")(81,"tr")(82,"td")(83,"i"),n(84,"enter"),a()(),s(85,"td"),n(86,"Activates the menuitem, closes the menu and sets focus on the menu button."),a()(),s(87,"tr")(88,"td")(89,"i"),n(90,"escape"),a()(),s(91,"td"),n(92,"Closes the menu and sets focus on the menu button."),a()(),s(93,"tr")(94,"td")(95,"i"),n(96,"arrow keys"),a()(),s(97,"td"),n(98,"Navigates between the menu items."),a()(),s(99,"tr")(100,"td")(101,"i"),n(102,"home"),a()(),s(103,"td"),n(104,"Moves focus to the first item."),a()(),s(105,"tr")(106,"td")(107,"i"),n(108,"end"),a()(),s(109,"td"),n(110,"Moves focus to the last item."),a()()()()()),o&2&&(l(34),r("code",i.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[b,x],encapsulation:2})}return t})();var nt=({dt:t})=>`
.p-speeddial {
    position: static;
    display: flex;
    gap: ${t("speeddial.gap")};
}

.p-speeddial-button {
    z-index: 1;
}

.p-speeddial-button.p-speeddial-rotate {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background ${t("speeddial.transition.duration")}, color ${t("speeddial.transition.duration")}, border-color ${t("speeddial.transition.duration")},
    box-shadow ${t("speeddial.transition.duration")}, outline-color ${t("speeddial.transition.duration")};
    will-change: transform;
}

.p-speeddial-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0s linear ${t("speeddial.transition.duration")};
    pointer-events: none;
    outline: 0 none;
    z-index: 2;
    gap: ${t("speeddial.gap")};
}

.p-speeddial-item {
    transform: scale(0);
    opacity: 0;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
    will-change: transform;
}

.p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    position: absolute;
}

.p-speeddial-mask {
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${t("mask.background")};
    border-radius: 6px;
    transition: opacity 150ms;
}

.p-speeddial-mask-visible {
    pointer-events: none;
    opacity: 1;
    transition: opacity 150ms;
}

.p-speeddial-open .p-speeddial-list {
    pointer-events: auto;
}

.p-speeddial-open .p-speeddial-item {
    transform: scale(1);
    opacity: 1;
}

.p-speeddial-open .p-speeddial-rotate {
    transform: rotate(45deg);
}
`,st={root:({props:t})=>({alignItems:(t.direction==="up"||t.direction==="down")&&"center",justifyContent:(t.direction==="left"||t.direction==="right")&&"center",flexDirection:t.direction==="up"?"column-reverse":t.direction==="down"?"column":t.direction==="left"?"row-reverse":t.direction==="right"?"row":null}),list:({props:t})=>({flexDirection:t.direction==="up"?"column-reverse":t.direction==="down"?"column":t.direction==="left"?"row-reverse":t.direction==="right"?"row":null})},at={root:({instance:t,props:f})=>[`p-speeddial p-component p-speeddial-${f.type}`,{[`p-speeddial-direction-${f.direction}`]:f.type!=="circle","p-speeddial-open":t.d_visible,"p-disabled":f.disabled}],pcButton:({props:t})=>["p-speeddial-button",{"p-speeddial-rotate":t.rotateAnimation&&!t.hideIcon}],list:"p-speeddial-list",item:"p-speeddial-item",action:"p-speeddial-action",actionIcon:"p-speeddial-action-icon",mask:({instance:t})=>["p-speeddial-mask",{"p-speeddial-mask-visible":t.d_visible}]},_e=(()=>{class t extends he{name="speeddial";theme=nt;classes=at;inlineStyles=st;static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275prov=Se({token:t,factory:t.\u0275fac})}return t})();var rt=["button"],lt=["item"],ct=["icon"],dt=["container"],pt=["list"],mt=t=>({toggleCallback:t}),ut=(t,f)=>({"p-hidden":t,"p-focus":f}),gt=(t,f,e)=>({$implicit:t,index:f,toggleCallback:e}),ft=t=>({"p-speeddial-mask":!0,"p-speeddial-mask-visible":t});function ht(t,f){t&1&&p(0,"PlusIcon",10)}function bt(t,f){t&1&&Y(0)}function vt(t,f){if(t&1){let e=P();W(0),s(1,"button",7),O("click",function(i){T(e);let c=_();return L(c.onButtonClick(i))})("keydown",function(i){T(e);let c=_();return L(c.onTogglerKeydown(i))}),M(2,ht,1,0,"PlusIcon",8)(3,bt,1,0,"ng-container",9),a(),G()}if(t&2){let e=_();l(),g(e.buttonStyle),U(e.buttonClass()),r("icon",e.buttonIconClass)("disabled",e.disabled)("buttonProps",e.buttonProps),V("aria-expanded",e.visible)("aria-haspopup",!0)("aria-controls",e.id+"_list")("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("data-pc-name","button"),l(),r("ngIf",!e.buttonIconClass&&!e.iconTemplate&&!e._iconTemplate),l(),r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function yt(t,f){t&1&&Y(0)}function _t(t,f){if(t&1&&(W(0),M(1,yt,1,0,"ng-container",11),G()),t&2){let e=_();l(),r("ngTemplateOutlet",e.buttonTemplate||e._buttonTemplate)("ngTemplateOutletContext",ie(2,mt,e.onButtonClick.bind(e)))}}function xt(t,f){t&1&&Y(0)}function Ct(t,f){if(t&1&&(W(0),M(1,xt,1,0,"ng-container",11),G()),t&2){let e=_(),o=e.$implicit,i=e.index,c=_();l(),r("ngTemplateOutlet",c.itemTemplate||c._itemTemplate)("ngTemplateOutletContext",Ie(2,gt,o,i,c.onItemClick.bind(c)))}}function St(t,f){if(t&1){let e=P();W(0),s(1,"button",13),O("click",function(i){T(e);let c=_().$implicit,d=_();return L(d.onItemClick(i,c))})("keydown.enter",function(i){T(e);let c=_().$implicit,d=_();return L(d.onItemClick(i,c))}),a(),G()}if(t&2){let e=_().$implicit,o=_();l(),r("rounded",!0)("icon",e.icon)("disabled",e==null?null:e.disabled),V("data-pc-section","action")("aria-label",e.label)("tabindex",e.disabled||!o.visible?null:e.tabindex?e.tabindex:"0")}}function kt(t,f){if(t&1&&(s(0,"li",12),M(1,Ct,2,6,"ng-container",3)(2,St,2,6,"ng-container",3),a()),t&2){let e=f.$implicit,o=f.index,i=_();r("ngStyle",i.getItemStyle(o))("tooltipOptions",e.tooltipOptions||i.getTooltipOptions(e))("ngClass",pe(8,ut,e.visible===!1,i.focusedOptionId==i.id+"_"+o))("id",i.id+"_"+o),V("aria-controls",i.id+"_item")("data-pc-section","menuitem"),l(),r("ngIf",i.itemTemplate||i._itemTemplate),l(),r("ngIf",!i.itemTemplate&&!i._itemTemplate)}}function Dt(t,f){if(t&1&&p(0,"div",2),t&2){let e=_();U(e.maskClassName),r("ngClass",ie(4,ft,e.visible))("ngStyle",e.maskStyle)}}var S=(()=>{class t extends be{id;model=null;get visible(){return this._visible}set visible(e){this._visible=e,this._visible?this.bindDocumentClickListener():this.unbindDocumentClickListener()}style;className;direction="up";transitionDelay=30;type="linear";radius=0;mask=!1;disabled=!1;hideOnClickOutside=!0;buttonStyle;buttonClassName;maskStyle;maskClassName;showIcon;hideIcon;rotateAnimation=!0;ariaLabel;ariaLabelledBy;tooltipOptions;buttonProps;onVisibleChange=new R;visibleChange=new R;onClick=new R;onShow=new R;onHide=new R;container;list;buttonTemplate;itemTemplate;iconTemplate;templates;_buttonTemplate;_itemTemplate;_iconTemplate;isItemClicked=!1;_visible=!1;documentClickListener;focusedOptionIndex=Me(null);focused=!1;_componentStyle=ke(_e);get focusedOptionId(){return this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null}get rootStyles(){let e=this._componentStyle?.inlineStyles.root;return e?e({props:this}):{}}get listStyles(){let e=this._componentStyle?.inlineStyles.list;return e?e({props:this}):{}}getTooltipOptions(e){return xe(re({},this.tooltipOptions),{tooltipLabel:e.label,disabled:!this.tooltipOptions})}ngOnInit(){super.ngOnInit(),this.id=this.id||Fe("pn_id_")}ngAfterViewInit(){if(super.ngAfterViewInit(),ge(this.platformId)&&this.type!=="linear"){let e=A(this.container?.nativeElement,".p-speeddial-button"),o=A(this.list?.nativeElement,".p-speeddial-item");if(e&&o){let i=Math.abs(e.offsetWidth-o.offsetWidth),c=Math.abs(e.offsetHeight-o.offsetHeight);this.list?.nativeElement.style.setProperty("--item-diff-x",`${i/2}px`),this.list?.nativeElement.style.setProperty("--item-diff-y",`${c/2}px`)}}}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"button":this._buttonTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break}})}show(){this.onVisibleChange.emit(!0),this.visibleChange.emit(!0),this._visible=!0,this.onShow.emit(),this.bindDocumentClickListener(),this.cd.markForCheck()}hide(){this.onVisibleChange.emit(!1),this.visibleChange.emit(!1),this._visible=!1,this.onHide.emit(),this.unbindDocumentClickListener(),this.cd.markForCheck()}onButtonClick(e){this.visible?this.hide():this.show(),this.onClick.emit(e),this.isItemClicked=!0}onItemClick(e,o){o.command&&o.command({originalEvent:e,item:o}),this.hide(),this.isItemClicked=!0}onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;default:break}}onFocus(e){this.focused=!0}onBlur(e){this.focused=!1,Ce.schedule(()=>this.focusedOptionIndex.set(-1))}onArrowUp(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)}onArrowDown(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)}onArrowLeft(e){let o=["left","up-right","down-left"],i=["right","up-left","down-right"];o.includes(this.direction)?this.navigateNextItem(e):i.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)}onArrowRight(e){let o=["left","up-right","down-left"],i=["right","up-left","down-right"];o.includes(this.direction)?this.navigatePrevItem(e):i.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)}onEndKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigatePrevItem(e)}onHomeKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigateNextItem(e)}onEnterKey(e){let i=[...X(this.container.nativeElement,'[data-pc-section="menuitem"]')].findIndex(d=>d.id===this.focusedOptionIndex());this.onItemClick(e,this.model[i]),this.onBlur(e);let c=A(this.container.nativeElement,"button");c&&ee(c)}onEscapeKey(e){this.hide();let o=A(this.container.nativeElement,"button");o&&ee(o)}onTogglerKeydown(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey(e);break;default:break}}onTogglerArrowUp(e){this.focused=!0,ee(this.list.nativeElement),this.show(),this.navigatePrevItem(e),e.preventDefault()}onTogglerArrowDown(e){this.focused=!0,ee(this.list.nativeElement),this.show(),this.navigateNextItem(e),e.preventDefault()}navigateNextItem(e){let o=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(o),e.preventDefault()}navigatePrevItem(e){let o=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(o),e.preventDefault()}findPrevOptionIndex(e){let i=[...X(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(C=>!se(A(C,"a"),"p-disabled")),c=e===-1?i[i.length-1].id:e,d=i.findIndex(C=>C.getAttribute("id")===c);return d=e===-1?i.length-1:d-1,d}findNextOptionIndex(e){let i=[...X(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(C=>!se(A(C,"a"),"p-disabled")),c=e===-1?i[0].id:e,d=i.findIndex(C=>C.getAttribute("id")===c);return d=e===-1?0:d+1,d}changeFocusedOptionIndex(e){let i=[...X(this.container.nativeElement,'[data-pc-section="menuitem"]')].filter(c=>!se(A(c,"a"),"p-disabled"));i[e]&&this.focusedOptionIndex.set(i[e].getAttribute("id"))}calculatePointStyle(e){let o=this.type;if(o!=="linear"){let i=this.model.length,c=this.radius||i*20;if(o==="circle"){let d=2*Math.PI/i;return{left:`calc(${c*Math.cos(d*e)}px + var(--item-diff-x, 0px))`,top:`calc(${c*Math.sin(d*e)}px + var(--item-diff-y, 0px))`}}else if(o==="semi-circle"){let d=this.direction,C=Math.PI/(i-1),w=`calc(${c*Math.cos(C*e)}px + var(--item-diff-x, 0px))`,I=`calc(${c*Math.sin(C*e)}px + var(--item-diff-y, 0px))`;if(d==="up")return{left:w,bottom:I};if(d==="down")return{left:w,top:I};if(d==="left")return{right:I,top:w};if(d==="right")return{left:I,top:w}}else if(o==="quarter-circle"){let d=this.direction,C=Math.PI/(2*(i-1)),w=`calc(${c*Math.cos(C*e)}px + var(--item-diff-x, 0px))`,I=`calc(${c*Math.sin(C*e)}px + var(--item-diff-y, 0px))`;if(d==="up-left")return{right:w,bottom:I};if(d==="up-right")return{left:w,bottom:I};if(d==="down-left")return{right:I,top:w};if(d==="down-right")return{left:I,top:w}}}return{}}calculateTransitionDelay(e){let o=this.model.length;return(this.visible?e:o-e-1)*this.transitionDelay}containerClass(){return{[`p-speeddial p-component p-speeddial-${this.type}`]:!0,[`p-speeddial-direction-${this.direction}`]:this.type!=="circle","p-speeddial-open":this.visible,"p-disabled":this.disabled}}buttonClass(){let e="p-button-icon-only p-speeddial-button p-button-rounded",o=this.rotateAnimation&&!this.hideIcon?"p-speeddial-rotate":"",i=this.buttonClassName?this.buttonClassName:"";return`${e} ${o} ${i}`}get buttonIconClass(){return!this.visible&&this.showIcon||!this.hideIcon?this.showIcon:this.hideIcon}getItemStyle(e){let o=this.calculateTransitionDelay(e),i=this.calculatePointStyle(e);return re({transitionDelay:`${o}ms`},i)}isClickableRouterLink(e){return e.routerLink&&!this.disabled&&!e.disabled}isOutsideClicked(e){return this.container&&!(this.container.nativeElement.isSameNode(e.target)||this.container.nativeElement.contains(e.target)||this.isItemClicked)}bindDocumentClickListener(){ge(this.platformId)&&!this.documentClickListener&&this.hideOnClickOutside&&(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{this.visible&&this.isOutsideClicked(e)&&this.hide(),this.isItemClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}ngOnDestroy(){this.unbindDocumentClickListener(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275cmp=h({type:t,selectors:[["p-speeddial"],["p-speedDial"],["p-speed-dial"]],contentQueries:function(o,i,c){if(o&1&&ce(c,rt,4)(c,lt,4)(c,ct,4)(c,fe,4),o&2){let d;E(d=$())&&(i.buttonTemplate=d.first),E(d=$())&&(i.itemTemplate=d.first),E(d=$())&&(i.iconTemplate=d.first),E(d=$())&&(i.templates=d)}},viewQuery:function(o,i){if(o&1&&we(dt,5)(pt,5),o&2){let c;E(c=$())&&(i.container=c.first),E(c=$())&&(i.list=c.first)}},inputs:{id:"id",model:"model",visible:"visible",style:"style",className:"className",direction:"direction",transitionDelay:[2,"transitionDelay","transitionDelay",ue],type:"type",radius:[2,"radius","radius",ue],mask:[2,"mask","mask",J],disabled:[2,"disabled","disabled",J],hideOnClickOutside:[2,"hideOnClickOutside","hideOnClickOutside",J],buttonStyle:"buttonStyle",buttonClassName:"buttonClassName",maskStyle:"maskStyle",maskClassName:"maskClassName",showIcon:"showIcon",hideIcon:"hideIcon",rotateAnimation:[2,"rotateAnimation","rotateAnimation",J],ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tooltipOptions:"tooltipOptions",buttonProps:"buttonProps"},outputs:{onVisibleChange:"onVisibleChange",visibleChange:"visibleChange",onClick:"onClick",onShow:"onShow",onHide:"onHide"},features:[y([_e]),le],decls:8,vars:17,consts:[["container",""],["list",""],[3,"ngClass","ngStyle"],[4,"ngIf"],["role","menu",1,"p-speeddial-list",3,"focus","focusout","keydown","id","tabindex","ngStyle"],["class","p-speeddial-item","pTooltip","","role","menuitem",3,"ngStyle","tooltipOptions","ngClass","id",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle",4,"ngIf"],["type","button","pButton","","pRipple","",3,"click","keydown","icon","disabled","buttonProps"],["pButtonIcon","",4,"ngIf"],[4,"ngTemplateOutlet"],["pButtonIcon",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pTooltip","","role","menuitem",1,"p-speeddial-item",3,"ngStyle","tooltipOptions","ngClass","id"],["type","button","pButton","","pRipple","","severity","secondary","size","small","role","menuitem",1,"p-speeddial-action",3,"click","keydown.enter","rounded","icon","disabled"]],template:function(o,i){o&1&&(s(0,"div",2,0),M(2,vt,4,15,"ng-container",3)(3,_t,2,4,"ng-container",3),s(4,"ul",4,1),O("focus",function(d){return i.onFocus(d)})("focusout",function(d){return i.onBlur(d)})("keydown",function(d){return i.onKeyDown(d)}),M(6,kt,3,11,"li",5),a()(),M(7,Dt,1,6,"div",6)),o&2&&(g(i.style),U(i.className),r("ngClass",i.containerClass())("ngStyle",i.rootStyles),V("data-pc-name","speeddial")("data-pc-section","root"),l(2),r("ngIf",!i.buttonTemplate&&!i._buttonTemplate),l(),r("ngIf",i.buttonTemplate||i._buttonTemplate),l(),r("id",i.id+"_list")("tabindex",-1)("ngStyle",i.listStyles),V("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("data-pc-section","menu"),l(2),r("ngForOf",i.model),l(),r("ngIf",i.mask&&i.visible))},dependencies:[z,Te,Le,Oe,$e,Ee,Q,Ne,Ue,Pe,ae,He,ne,Ve,N],encapsulation:2,changeDetection:0})}return t})(),ze=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Z({type:t});static \u0275inj=q({imports:[S,N,N]})}return t})();var Mt=()=>({position:"absolute"}),wt=()=>({severity:"warn",rounded:!0}),Qe=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}code={basic:`<p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />`,html:`<div class="card">
    <div style="position:relative; height: 500px;" class="flex items-center justify-center">
        <p-toast />
        <p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-circle-demo',
    templateUrl: './speed-dial-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(v(u))};static \u0275cmp=h({type:t,selectors:[["circle-doc"]],standalone:!1,features:[y([u])],decls:17,vars:8,consts:[[1,"card"],[1,"flex","items-center","justify-center",2,"position","relative","height","500px"],["type","circle",3,"model","radius","buttonProps"],["selector","speed-dial-circle-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"Items can be displayed around the button when "),s(3,"i"),n(4,"type"),a(),n(5," is set to "),s(6,"i"),n(7,"circle"),a(),n(8,". Additional "),s(9,"i"),n(10,"radius"),a(),n(11," property defines the radius of the circle."),a()(),s(12,"div",0)(13,"div",1),p(14,"p-toast")(15,"p-speeddial",2),a()(),p(16,"app-code",3)),o&2&&(l(15),g(m(6,Mt)),r("model",i.items)("radius",80)("buttonProps",m(7,wt)),l(),r("code",i.code))},dependencies:[b,x,S,k],encapsulation:2})}return t})();var Ke=(()=>{class t{code={typescript:"import { SpeedDialModule } from 'primeng/speeddial';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["speed-dial-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,i){o&1&&p(0,"app-code",0),o&2&&r("code",i.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return t})();var It=()=>({position:"absolute",left:"calc(50% - 2rem)",bottom:0}),Tt=()=>({position:"absolute",left:"calc(50% - 2rem)",top:0}),Lt=()=>({position:"absolute",top:"calc(50% - 2rem)",right:0}),Ot=()=>({position:"absolute",top:"calc(50% - 2rem)",left:0}),We=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}code={basic:`<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
<p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />`,html:`<div class="card">
    <div style="height: 500px; position: relative;">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
        <p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
        <p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
        <p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-linear-demo',
    templateUrl: './speed-dial-linear-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialLinearDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(v(u))};static \u0275cmp=h({type:t,selectors:[["linear-doc"]],standalone:!1,features:[y([u])],decls:17,vars:17,consts:[[1,"card"],[2,"height","500px","position","relative"],["direction","up",3,"model"],["direction","down",3,"model"],["direction","left",3,"model"],["direction","right",3,"model"],["selector","speed-dial-linear-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"SpeedDial items are defined with the "),s(3,"i"),n(4,"model"),a(),n(5," property based on MenuModel API. Default orientation of the items is linear and "),s(6,"i"),n(7,"direction"),a(),n(8," property is used to define the position of the items related to the button."),a()(),s(9,"div",0)(10,"div",1),p(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),p(16,"app-code",6)),o&2&&(l(12),g(m(13,It)),r("model",i.items),l(),g(m(14,Tt)),r("model",i.items),l(),g(m(15,Lt)),r("model",i.items),l(),g(m(16,Ot)),r("model",i.items),l(),r("code",i.code))},dependencies:[b,x,S,k],encapsulation:2})}return t})();var Et=()=>({position:"relative",height:"350px"}),$t=()=>({position:"absolute",right:"1rem",bottom:"1rem"}),Ge=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}code={basic:`<p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />`,html:`<div class="card p-4">
    <div [style]="{ position: 'relative', height: '350px' }">
        <p-toast />
        <p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-mask-demo',
    templateUrl: './speed-dial-mask-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialMaskDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(v(u))};static \u0275cmp=h({type:t,selectors:[["mask-doc"]],standalone:!1,features:[y([u])],decls:11,vars:8,consts:[[1,"card","p-4"],["direction","up","mask","",3,"model"],["selector","speed-dial-mask-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"Adding "),s(3,"i"),n(4,"mask"),a(),n(5," property displays a modal layer behind the popup items."),a()(),s(6,"div",0)(7,"div"),p(8,"p-toast")(9,"p-speeddial",1),a()(),p(10,"app-code",2)),o&2&&(l(7),g(m(6,Et)),l(2),g(m(7,$t)),r("model",i.items),l(),r("code",i.code))},dependencies:[b,x,S,k],encapsulation:2})}return t})();var At=()=>({position:"absolute",right:0,bottom:0}),Ft=()=>({position:"absolute",left:0,bottom:0}),Vt=()=>({position:"absolute",right:0,top:0}),Pt=()=>({position:"absolute",left:0,top:0}),Ye=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}code={basic:`<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />`,html:`<div class="card">
    <div style="position: relative; height: 500px">
        <p-toast />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-quarter-circle-demo',
    templateUrl: './speed-dial-quarter-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialQuarterCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(v(u))};static \u0275cmp=h({type:t,selectors:[["quarter-circle-doc"]],standalone:!1,features:[y([u])],decls:17,vars:21,consts:[[1,"card"],[2,"position","relative","height","500px"],["type","quarter-circle","direction","up-left",3,"model","radius"],["type","quarter-circle","direction","up-right",3,"model","radius"],["type","quarter-circle","direction","down-left",3,"model","radius"],["type","quarter-circle","direction","down-right",3,"model","radius"],["selector","speed-dial-quarter-circle-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"When "),s(3,"i"),n(4,"type"),a(),n(5," is defined as "),s(6,"i"),n(7,"quarter-circle"),a(),n(8,", items are displayed in a half-circle around the button."),a()(),s(9,"div",0)(10,"div",1),p(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),p(16,"app-code",6)),o&2&&(l(12),g(m(17,At)),r("model",i.items)("radius",120),l(),g(m(18,Ft)),r("model",i.items)("radius",120),l(),g(m(19,Vt)),r("model",i.items)("radius",120),l(),g(m(20,Pt)),r("model",i.items)("radius",120),l(),r("code",i.code))},dependencies:[b,x,S,k],encapsulation:2})}return t})();var Ut=()=>({position:"absolute",left:"calc(50% - 2rem)",top:0}),Nt=()=>({position:"absolute",top:"calc(50% - 2rem)",left:0}),Bt=()=>({position:"absolute",top:"calc(50% - 2rem)",right:0}),Ht=()=>({position:"absolute",left:"calc(50% - 2rem)",bottom:0}),Je=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}code={basic:`<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />`,html:`<div class="card">
    <div style="position: relative; height: 500px">
        <p-toast />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-semi-circle-demo',
    templateUrl: './speed-dial-semi-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialSemiCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`,scss:`:host ::ng-deep {
    .speeddial-linear-demo {
        .p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        .p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        .p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        .p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }
}`};static \u0275fac=function(o){return new(o||t)(v(u))};static \u0275cmp=h({type:t,selectors:[["semi-circle-doc"]],standalone:!1,features:[y([u])],decls:17,vars:21,consts:[[1,"card"],[2,"position","relative","height","500px"],["type","semi-circle","direction","down",3,"model","radius"],["type","semi-circle","direction","right",3,"model","radius"],["type","semi-circle","direction","left",3,"model","radius"],["type","semi-circle","direction","up",3,"model","radius"],["selector","speed-dial-semi-circle-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"When "),s(3,"i"),n(4,"type"),a(),n(5," is defined as "),s(6,"i"),n(7,"semi-circle"),a(),n(8,", items are displayed in a half-circle around the button."),a()(),s(9,"div",0)(10,"div",1),p(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),p(16,"app-code",6)),o&2&&(l(12),g(m(17,Ut)),r("model",i.items)("radius",80),l(),g(m(18,Nt)),r("model",i.items)("radius",80),l(),g(m(19,Bt)),r("model",i.items)("radius",80),l(),g(m(20,Ht)),r("model",i.items)("radius",80),l(),r("code",i.code))},dependencies:[b,x,S,k],encapsulation:2})}return t})();var Xe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Z({type:t});static \u0275inj=q({imports:[z,Q,N,N]})}return t})();function qt(t,f){if(t&1){let e=P();s(0,"p-button",6),O("click",function(i){let c=T(e).toggleCallback;return L(c(i))}),De(),s(1,"svg",7),p(2,"path",8),s(3,"mask",9),p(4,"path",10),a(),s(5,"g",11),p(6,"path",12),a(),p(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21)(16,"path",22),a()()}}function Rt(t,f){if(t&1){let e=P();s(0,"div",23),O("click",function(i){let c=T(e),d=c.$implicit,C=c.toggleCallback;return L(C(i,d))}),p(1,"span"),s(2,"span"),n(3),a()()}if(t&2){let e=f.$implicit;l(),U(e.icon),l(2),de(" ",e.label," ")}}var et=(()=>{class t{messageService;router;items;code={basic:`<p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
    <ng-template #button let-toggleCallback="toggleCallback">
        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
            </svg>
        </p-button>
    </ng-template>
    <ng-template #item let-item let-toggleCallback="toggleCallback">
        <div
            class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
            (click)="toggleCallback($event, item)"
        >
            <span [class]="item.icon"></span>
            <span>
                {{ item.label }}
            </span>
        </div>
    </ng-template>
</p-speeddial>`,html:`<div class="card">
    <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
            <ng-template #button let-toggleCallback="toggleCallback">
                <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                    <svg
                        width="31"
                        height="33"
                        viewBox="0 0 31 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                            fill="var(--p-primary-color)"
                        />
                        <mask
                            id="mask0_1_52"
                            style="mask-type:luminance"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="31"
                            height="33"
                        >
                            <path
                                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                                fill="var(--ground-background)"
                            />
                        </mask>
                        <g mask="url(#mask0_1_52)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                                fill="var(--p-primary-color)"
                            />
                        </g>
                        <path
                            d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                            fill="var(--ground-background)"
                        />
                    </svg>
                </p-button>
            </ng-template>
            <ng-template #item let-item let-toggleCallback="toggleCallback">
                <div
                    class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
                    (click)="toggleCallback($event, item)"
                >
                    <span [class]="item.icon"></span>
                    <span>
                        {{ item.label }}
                    </span>
                </div>
            </ng-template>
        </p-speeddial>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'speed-dial-template-demo',
    templateUrl: './speed-dial-template-demo.html',
    standalone: true,
    imports: [SpeedDialModule, ToastModule, ButtonModule],
    providers: [MessageService]
})
export class SpeedDialTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];
    }
}`};constructor(e,o){this.messageService=e,this.router=o}ngOnInit(){this.items=[{label:"Add",icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.router.navigate(["/fileupload"])}},{label:"Website",icon:"pi pi-external-link",command:()=>{window.open("https://angular.io/","_blank")}}]}static \u0275fac=function(o){return new(o||t)(v(u),v(oe))};static \u0275cmp=h({type:t,selectors:[["template-doc"]],standalone:!1,features:[y([u])],decls:21,vars:3,consts:[["button",""],["item",""],[1,"card"],[1,"flex","items-end","justify-center",2,"position","'relative'","height","'400px'"],["direction","up",2,"position","'absolute'",3,"model","transitionDelay"],["selector","speed-dial-template-demo",3,"code"],["outlined","","styleClass","border",3,"click"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"flex","flex-col","items-center","justify-between","gap-2","p-2","border","rounded","border-surface-200","dark:border-surface-700","w-20","cursor-pointer",3,"click"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2," SpeedDial offers item customization with the "),s(3,"i"),n(4,"item"),a(),n(5," template that receives the menuitem instance from the model as a parameter. The button has its own "),s(6,"i"),n(7,"button"),a(),n(8," template, additional template named "),s(9,"i"),n(10,"icon"),a(),n(11," is provided to embed icon content for default button. "),a()(),s(12,"div",2)(13,"div",3),p(14,"p-toast"),s(15,"p-speeddial",4),M(16,qt,17,0,"ng-template",null,0,me)(18,Rt,4,3,"ng-template",null,1,me),a()()(),p(20,"app-code",5)),o&2&&(l(15),r("model",i.items)("transitionDelay",80),l(5),r("code",i.code))},dependencies:[b,x,S,k,ve],encapsulation:2})}return t})();var Zt=()=>["/tooltip"],zt=()=>({position:"relative",height:"350px"}),Qt=()=>({position:"absolute",right:0,bottom:0}),Kt=()=>({severity:"help",rounded:!0}),Wt=()=>({tooltipPosition:"left"}),Gt=()=>({position:"absolute",left:0,bottom:0}),Yt=()=>({severity:"danger",rounded:!0}),Jt=()=>({tooltipPosition:"right"}),tt=(()=>{class t{messageService;router;items;code={basic:`<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />`,html:`<div class="card">
    <div [style]="{ position: 'relative', height: '350px' }">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
    selector: 'speed-dial-tooltip-demo',
    templateUrl: './speed-dial-tooltip-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialTooltipDemo implements OnInit {
      items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Angular Website',
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io',
            },
        ];
    }
}`};constructor(e,o){this.messageService=e,this.router=o}ngOnInit(){this.items=[{label:"Add",icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.router.navigate(["/fileupload"])}},{label:"Angular Website",icon:"pi pi-external-link",target:"_blank",url:"http://angular.io"}]}static \u0275fac=function(o){return new(o||t)(v(u),v(oe))};static \u0275cmp=h({type:t,selectors:[["tooltip-doc"]],standalone:!1,features:[y([u])],decls:12,vars:22,consts:[["href","#",3,"routerLink"],[1,"card"],["direction","up",3,"model","buttonProps","tooltipOptions"],["selector","speed-dial-tooltip-demo",3,"code"]],template:function(o,i){o&1&&(s(0,"app-docsectiontext")(1,"p"),n(2,"Items display a tooltip on hover when a standalone "),s(3,"a",0),n(4,"Tooltip"),a(),n(5," is present with a target that matches the items."),a()(),s(6,"div",1)(7,"div"),p(8,"p-toast")(9,"p-speeddial",2)(10,"p-speeddial",2),a()(),p(11,"app-code",3)),o&2&&(l(3),r("routerLink",m(14,Zt)),l(4),g(m(15,zt)),l(2),g(m(16,Qt)),r("model",i.items)("buttonProps",m(17,Kt))("tooltipOptions",m(18,Wt)),l(),g(m(19,Gt)),r("model",i.items)("buttonProps",m(20,Yt))("tooltipOptions",m(21,Jt)),l(),r("code",i.code))},dependencies:[b,x,S,k,Ae],encapsulation:2})}return t})();var it=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Z({type:t});static \u0275inj=q({imports:[z,je,ye,ze,Xe,Be,ae,ne,Q,ye]})}return t})();var Xt=()=>["SpeedDial"],ot=(()=>{class t{docs=[{id:"import",label:"Import",component:Ke},{id:"linear",label:"Linear",component:We},{id:"circle",label:"Circle",component:Qe},{id:"semicircle",label:"Semi Circle",component:Je},{id:"quartercircle",label:"Quarter Circle",component:Ye},{id:"tooltip",label:"Tooltip",component:tt},{id:"mask",label:"Mask",component:Ge},{id:"template",label:"Template",component:et},{id:"accessibility",label:"Accessibility",component:Re}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Speed Dial Component","header","Speed Dial","description","SpeedDial is a floating button with a popup menu.","themeDocs","speeddial",3,"docs","apiDocs"]],template:function(o,i){o&1&&p(0,"app-doc",0),o&2&&r("docs",i.docs)("apiDocs",m(2,Xt))},dependencies:[it,qe],styles:["[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-circle{top:calc(50% - 2rem);left:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left{right:0;top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right{left:0;top:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-left{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-right{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-delay-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-mask-demo .p-speeddial-direction-up{right:0;bottom:0}"]})}return t})();var hn=[{path:"",component:ot}];export{hn as default};
