import{a as Fe}from"./chunk-FCMSSE5W.js";import{c as Ae,d as U,f as J,h as ee,i as te,k as ie}from"./chunk-KMVDOPWF.js";import{c as ne}from"./chunk-X3A3Q6RL.js";import{S as Pe,X as Re,Y as Oe,a as Me,aa as Be}from"./chunk-DEL7GGHP.js";import{A as N,G,Ga as Se,J as ke,Ja as Ve,aa as A,na as De,oa as K,v as S,va as Ee,w as O,wa as F,x as Z,xa as Le,y as B,z as j}from"./chunk-HJ3EJAPD.js";import{j as ve,m as Te,p as ze,q as Ce,u as we,y as Ie}from"./chunk-O4W5DSIC.js";import{$b as P,Ab as C,Eb as w,Fb as I,Gb as L,Hb as k,Mb as D,N as ae,O as se,Ob as r,Pb as me,Qa as l,Qb as $,Qc as m,Rb as ce,Rc as R,S as X,Sb as _e,Tb as _,Ub as g,X as f,Xb as ge,Y as u,_b as Q,ac as he,bc as fe,da as y,ea as le,eb as re,fb as pe,jb as de,kb as d,kc as ue,lc as xe,ma as V,mc as W,nc as be,oc as ye,rb as Y,xb as o,yb as c,zb as h,zc as q}from"./chunk-DNC77BQZ.js";import{a as H}from"./chunk-GAL4ENT6.js";var $e=({dt:t})=>`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${t("dialog.border.radius")};
    box-shadow: ${t("dialog.shadow")};
    background: ${t("dialog.background")};
    border: 1px solid ${t("dialog.border.color")};
    color: ${t("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${t("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${t("dialog.title.font.weight")};
    font-size: ${t("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${t("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${t("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${t("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`,Qe={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},We={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,[`p-dialog-${e}`]:e}},root:({instance:t})=>({"p-dialog p-component":!0,"p-dialog-maximized":t.maximizable&&t.maximized}),header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},oe=(()=>{class t extends Se{name="dialog";theme=$e;classes=We;inlineStyles=Qe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=V(t)))(n||t)}})();static \u0275prov=ae({token:t,factory:t.\u0275fac})}return t})();var qe=["header"],He=["content"],Xe=["footer"],Ze=["closeicon"],je=["maximizeicon"],Ne=["minimizeicon"],Ge=["headless"],Ke=["titlebar"],Ue=["*",[["p-footer"]]],Je=["*","p-footer"],et=(t,a,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":a,"pointer-events":e}),tt=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),it=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),nt=(t,a)=>({transform:t,transition:a}),ot=t=>({value:"visible",params:t});function at(t,a){t&1&&L(0)}function st(t,a){if(t&1&&(w(0),d(1,at,1,0,"ng-container",11),I()),t&2){let e=r(3);l(),o("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function lt(t,a){if(t&1){let e=k();c(0,"div",15),D("mousedown",function(n){f(e);let s=r(4);return u(s.initResize(n))}),h()}if(t&2){let e=r(4);o("ngClass",e.cx("resizeHandle"))}}function rt(t,a){if(t&1&&(c(0,"span",21),he(1),h()),t&2){let e=r(5);o("id",e.ariaLabelledBy)("ngClass",e.cx("title")),l(),fe(e.header)}}function pt(t,a){t&1&&L(0)}function dt(t,a){if(t&1&&C(0,"span",18),t&2){let e=r(6);o("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function mt(t,a){t&1&&C(0,"WindowMaximizeIcon")}function ct(t,a){t&1&&C(0,"WindowMinimizeIcon")}function _t(t,a){if(t&1&&(w(0),d(1,mt,1,0,"WindowMaximizeIcon",23)(2,ct,1,0,"WindowMinimizeIcon",23),I()),t&2){let e=r(6);l(),o("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),l(),o("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function gt(t,a){}function ht(t,a){t&1&&d(0,gt,0,0,"ng-template")}function ft(t,a){if(t&1&&(w(0),d(1,ht,1,0,null,11),I()),t&2){let e=r(6);l(),o("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function ut(t,a){}function xt(t,a){t&1&&d(0,ut,0,0,"ng-template")}function bt(t,a){if(t&1&&(w(0),d(1,xt,1,0,null,11),I()),t&2){let e=r(6);l(),o("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function yt(t,a){if(t&1){let e=k();c(0,"p-button",22),D("onClick",function(){f(e);let n=r(5);return u(n.maximize())})("keydown.enter",function(){f(e);let n=r(5);return u(n.maximize())}),d(1,dt,1,1,"span",14)(2,_t,3,2,"ng-container",23)(3,ft,2,1,"ng-container",23)(4,bt,2,1,"ng-container",23),h()}if(t&2){let e=r(5);o("styleClass",e.cx("pcMaximizeButton"))("tabindex",e.maximizable?"0":"-1")("ariaLabel",e.maximizeLabel)("buttonProps",e.maximizeButtonProps),l(),o("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),l(),o("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),l(),o("ngIf",!e.maximized),l(),o("ngIf",e.maximized)}}function vt(t,a){if(t&1&&C(0,"span",18),t&2){let e=r(8);o("ngClass",e.closeIcon)}}function Tt(t,a){t&1&&C(0,"TimesIcon")}function zt(t,a){if(t&1&&(w(0),d(1,vt,1,1,"span",14)(2,Tt,1,0,"TimesIcon",23),I()),t&2){let e=r(7);l(),o("ngIf",e.closeIcon),l(),o("ngIf",!e.closeIcon)}}function Ct(t,a){}function wt(t,a){t&1&&d(0,Ct,0,0,"ng-template")}function It(t,a){if(t&1&&(c(0,"span"),d(1,wt,1,0,null,11),h()),t&2){let e=r(7);l(),o("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function kt(t,a){if(t&1&&d(0,zt,3,2,"ng-container",23)(1,It,2,1,"span",23),t&2){let e=r(6);o("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),l(),o("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function Dt(t,a){if(t&1){let e=k();c(0,"p-button",24),D("onClick",function(n){f(e);let s=r(5);return u(s.close(n))})("keydown.enter",function(n){f(e);let s=r(5);return u(s.close(n))}),d(1,kt,2,2,"ng-template",null,4,q),h()}if(t&2){let e=r(5);o("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)}}function Et(t,a){if(t&1){let e=k();c(0,"div",16,3),D("mousedown",function(n){f(e);let s=r(4);return u(s.initDrag(n))}),d(2,rt,2,3,"span",17)(3,pt,1,0,"ng-container",11),c(4,"div",18),d(5,yt,5,8,"p-button",19)(6,Dt,3,4,"p-button",20),h()()}if(t&2){let e=r(4);o("ngClass",e.cx("header")),l(2),o("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),l(),o("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT),l(),o("ngClass",e.cx("headerActions")),l(),o("ngIf",e.maximizable),l(),o("ngIf",e.closable)}}function Lt(t,a){t&1&&L(0)}function St(t,a){t&1&&L(0)}function Mt(t,a){if(t&1&&(c(0,"div",18,5),$(2,1),d(3,St,1,0,"ng-container",11),h()),t&2){let e=r(4);o("ngClass",e.cx("footer")),l(3),o("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function Vt(t,a){if(t&1&&(d(0,lt,1,1,"div",12)(1,Et,7,6,"div",13),c(2,"div",7,2),$(4),d(5,Lt,1,0,"ng-container",11),h(),d(6,Mt,4,2,"div",14)),t&2){let e=r(3);o("ngIf",e.resizable),l(),o("ngIf",e.showHeader),l(),P(e.contentStyleClass),o("ngClass",e.cx("content"))("ngStyle",e.contentStyle),Y("data-pc-section","content"),l(3),o("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),l(),o("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function Pt(t,a){if(t&1){let e=k();c(0,"div",9,0),D("@animation.start",function(n){f(e);let s=r(2);return u(s.onAnimationStart(n))})("@animation.done",function(n){f(e);let s=r(2);return u(s.onAnimationEnd(n))}),d(2,st,2,1,"ng-container",10)(3,Vt,7,9,"ng-template",null,1,q),h()}if(t&2){let e=ge(4),i=r(2);Q(i.style),P(i.styleClass),o("ngClass",W(13,tt,i.maximizable&&i.maximized))("ngStyle",xe(15,it))("pFocusTrapDisabled",i.focusTrap===!1)("@animation",W(19,ot,be(16,nt,i.transformOptions,i.transitionOptions))),Y("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0),l(2),o("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function Rt(t,a){if(t&1&&(c(0,"div",7),d(1,Pt,5,21,"div",8),h()),t&2){let e=r();Q(e.maskStyle),P(e.maskStyleClass),o("ngClass",e.maskClass)("ngStyle",ye(7,et,e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?"flex-start":e.position==="right"||e.position==="topright"||e.position==="bottomright"?"flex-end":"center",e.position==="top"||e.position==="topleft"||e.position==="topright"?"flex-start":e.position==="bottom"||e.position==="bottomleft"||e.position==="bottomright"?"flex-end":"center",e.modal?"auto":"none")),l(),o("ngIf",e.visible)}}var Ot=te([J({transform:"{{transform}}",opacity:0}),U("{{transition}}")]),Bt=te([U("{{transition}}",J({transform:"{{transform}}",opacity:0}))]),At=(()=>{class t extends Ve{header;draggable=!0;resizable=!0;get positionLeft(){return 0}set positionLeft(e){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(e){console.log("positionTop property is deprecated.")}contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;get responsive(){return!1}set responsive(e){console.log("Responsive property is deprecated.")}appendTo;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;get breakpoint(){return 649}set breakpoint(e){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",text:!0,rounded:!0};maximizeButtonProps={severity:"secondary",text:!0,rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=H({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}role="dialog";onShow=new y;onHide=new y;visibleChange=new y;onResizeInit=new y;onResizeEnd=new y;onDragEnd=new y;onMaximize=new y;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;_visible=!1;maskVisible;container;wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=K("pn_id_");_style={};_position="center";originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=X(oe);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;get maximizeLabel(){return this.config.getTranslation(Le.ARIA).maximizeLabel}zone=X(le);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?K("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,s;for(;(s=i.exec(e))!==null;){let p=parseFloat(s[1]),v=s[2];v==="ms"?n+=p:v==="s"&&(n+=p*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=Me.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&Z(void 0)}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll(".p-dialog-mask-scrollblocker");this.modal&&e&&e.length==1&&j(void 0),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?Z(void 0):j(void 0)),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(ne.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(Ie(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),De(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){S(e.target,"p-dialog-maximize-icon")||S(e.target,"p-dialog-header-close-icon")||S(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",O(this.document.body,"p-unselectable-text"))}onDrag(e){if(this.dragging){let i=G(this.container),n=A(this.container),s=e.pageX-this.lastPageX,p=e.pageY-this.lastPageY,v=this.container.getBoundingClientRect(),T=getComputedStyle(this.container),z=parseFloat(T.marginLeft),M=parseFloat(T.marginTop),x=v.left+s-z,b=v.top+p-M,E=N();this.container.style.position="fixed",this.keepInViewport?(x>=this.minX&&x+i<E.width&&(this._style.left=`${x}px`,this.lastPageX=e.pageX,this.container.style.left=`${x}px`),b>=this.minY&&b+n<E.height&&(this._style.top=`${b}px`,this.lastPageY=e.pageY,this.container.style.top=`${b}px`)):(this.lastPageX=e.pageX,this.container.style.left=`${x}px`,this.lastPageY=e.pageY,this.container.style.top=`${b}px`)}}endDrag(e){this.dragging&&(this.dragging=!1,B(this.document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,O(this.document.body,"p-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,s=G(this.container),p=A(this.container),v=A(this.contentViewChild?.nativeElement),T=s+i,z=p+n,M=this.container.style.minWidth,x=this.container.style.minHeight,b=this.container.getBoundingClientRect(),E=N();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(T+=i,z+=n),(!M||T>parseInt(M))&&b.left+T<E.width&&(this._style.width=T+"px",this.container.style.width=this._style.width),(!x||z>parseInt(x))&&b.top+z<E.height&&(this.contentViewChild.nativeElement.style.height=v+z-p+"px",this._style.height&&(this._style.height=z+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,B(this.document.body,"p-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.key=="Escape"&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.wrapper):ke(this.appendTo,this.wrapper))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.modal&&this.enableModality(),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&O(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({}),this.cd.markForCheck(),this.maskVisible!==this.visible&&(this.maskVisible=this.visible);break;case"visible":this.onShow.emit({});break}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(this.document.body.style.removeProperty("--scrollbar;-width"),this.maximized=!1),this.modal&&this.disableModality(),S(this.document.body,"p-overflow-hidden")&&B(this.document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&ne.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?H({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=V(t)))(n||t)}})();static \u0275cmp=re({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,s){if(i&1&&ce(s,qe,4)(s,He,4)(s,Xe,4)(s,Ze,4)(s,je,4)(s,Ne,4)(s,Ge,4)(s,Ee,4),i&2){let p;_(p=g())&&(n._headerTemplate=p.first),_(p=g())&&(n._contentTemplate=p.first),_(p=g())&&(n._footerTemplate=p.first),_(p=g())&&(n._closeiconTemplate=p.first),_(p=g())&&(n._maximizeiconTemplate=p.first),_(p=g())&&(n._minimizeiconTemplate=p.first),_(p=g())&&(n._headlessTemplate=p.first),_(p=g())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&_e(Ke,5)(He,5)(Xe,5),i&2){let s;_(s=g())&&(n.headerViewChild=s.first),_(s=g())&&(n.contentViewChild=s.first),_(s=g())&&(n.footerViewChild=s.first)}},inputs:{header:"header",draggable:[2,"draggable","draggable",m],resizable:[2,"resizable","resizable",m],positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",m],closeOnEscape:[2,"closeOnEscape","closeOnEscape",m],dismissableMask:[2,"dismissableMask","dismissableMask",m],rtl:[2,"rtl","rtl",m],closable:[2,"closable","closable",m],responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",m],breakpoint:"breakpoint",blockScroll:[2,"blockScroll","blockScroll",m],autoZIndex:[2,"autoZIndex","autoZIndex",m],baseZIndex:[2,"baseZIndex","baseZIndex",R],minX:[2,"minX","minX",R],minY:[2,"minY","minY",R],focusOnShow:[2,"focusOnShow","focusOnShow",m],maximizable:[2,"maximizable","maximizable",m],keepInViewport:[2,"keepInViewport","keepInViewport",m],focusTrap:[2,"focusTrap","focusTrap",m],transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[ue([oe]),de],ngContentSelectors:Je,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngClass","class","ngStyle","style",4,"ngIf"],[3,"ngClass","ngStyle"],["pFocusTrap","",3,"class","ngClass","ngStyle","style","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"id","ngClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass","tabindex","ariaLabel","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"styleClass","ariaLabel","tabindex","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"id","ngClass"],[3,"onClick","keydown.enter","styleClass","tabindex","ariaLabel","buttonProps"],[4,"ngIf"],[3,"onClick","keydown.enter","styleClass","ariaLabel","tabindex","buttonProps"]],template:function(i,n){i&1&&(me(Ue),d(0,Rt,2,11,"div",6)),i&2&&o("ngIf",n.maskVisible)},dependencies:[we,ve,Te,Ce,ze,Be,Fe,Pe,Re,Oe,F],encapsulation:2,data:{animation:[Ae("animation",[ee("void => visible",[ie(Ot)]),ee("visible => void",[ie(Bt)])])]},changeDetection:0})}return t})(),di=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=pe({type:t});static \u0275inj=se({imports:[At,F,F]})}return t})();export{oe as a,At as b,di as c};
