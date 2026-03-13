import './polyfills.server.mjs';
import{a as ht,d as _t,w as yt}from"./chunk-BGUWY5AX.mjs";import"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import"./chunk-AELPXV2Z.mjs";import"./chunk-P3BSQTDP.mjs";import"./chunk-HYVLMK22.mjs";import"./chunk-AMGQPWR6.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import{a as ft,b as gt}from"./chunk-ULLGJRYO.mjs";import{a as ut}from"./chunk-NVQ54RHQ.mjs";import{a as mt,b as pt}from"./chunk-PPCUCQZZ.mjs";import"./chunk-NJTPIEO6.mjs";import{a as Ke}from"./chunk-VTA4L4HB.mjs";import{a as rt}from"./chunk-XSLTCZBH.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import{c as dt,d as ue,f as ie,h as fe,i as ge,k as he}from"./chunk-RNBAXVKN.mjs";import{a as b,d as Dt,e as _e}from"./chunk-HZSAMTDM.mjs";import{a as C,b as vt}from"./chunk-EK6YV52O.mjs";import{s as Ge}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import{c as N}from"./chunk-3SL6YYR2.mjs";import{S as at,X as st,Y as lt,a as pe,aa as E,ba as ct}from"./chunk-DE54ZEHA.mjs";import{A as ce,G as de,J as Je,Ja as nt,aa as te,na as et,oa as me,qa as R,v as le,va as tt,w as B,wa as it,xa as ot,y as q}from"./chunk-YQJJ7I3T.mjs";import{f as Qe,j as $e}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{A as H,k as We,l as Ue,n as He,q as qe,r as Ze,v as ee}from"./chunk-RUZVPFSZ.mjs";import{$ as Ie,$a as m,Bb as s,Cb as n,Db as r,Eb as f,Ib as F,Jb as O,Kb as K,Lb as L,Ma as Pe,N as Q,O as ne,Qb as _,R as $,S as we,Sa as l,Sb as g,Wb as Ve,X as w,Xb as j,Y as I,Yb as A,_a as Me,aa as Te,ac as je,bb as Le,bd as Ye,cc as Ae,d as P,dc as ae,ea as Ee,ec as a,fc as k,gb as u,gc as G,hb as re,ib as ke,lb as Re,ma as ze,mb as h,mc as Be,oc as x,pc as J,qc as se,rc as Ne,sc as Xe,tb as Fe,vb as Oe}from"./chunk-ZJKG6QAF.mjs";import{a as Z,b as Se}from"./chunk-AFOT676I.mjs";var ye=(()=>{class t{viewContainerRef;constructor(e){this.viewContainerRef=e}static \u0275fac=function(i){return new(i||t)(m(Le))};static \u0275dir=ke({type:t,selectors:[["","pDynamicDialogContent",""]]})}return t})();var ve=(()=>{class t extends ft{name="dialog";static \u0275fac=(()=>{let e;return function(o){return(e||(e=ze(t)))(o||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var X=class{data;inputValues;header;ariaLabelledBy;footer;width;height;closeOnEscape=!1;focusOnShow=!0;focusTrap=!0;baseZIndex;autoZIndex=!1;dismissableMask=!1;rtl=!1;style;contentStyle;styleClass;transitionOptions;closable=!1;showHeader=!1;modal=!1;maskStyleClass;resizable=!1;draggable=!1;keepInViewport=!1;minX;minY;maximizable=!1;maximizeIcon;minimizeIcon;position;closeAriaLabel;appendTo;duplicate=!1;breakpoints;templates};var S=class{constructor(){}close(c){this._onClose.next(c),setTimeout(()=>{this._onClose.complete()},1e3)}destroy(){this._onDestroy.next(null)}dragStart(c){this._onDragStart.next(c)}dragEnd(c){this._onDragEnd.next(c)}resizeInit(c){this._onResizeInit.next(c)}resizeEnd(c){this._onResizeEnd.next(c)}maximize(c){this._onMaximize.next(c)}_onClose=new P;onClose=this._onClose.asObservable();_onDestroy=new P;onDestroy=this._onDestroy.asObservable();_onDragStart=new P;onDragStart=this._onDragStart.asObservable();_onDragEnd=new P;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new P;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new P;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new P;onMaximize=this._onMaximize.asObservable();onChildComponentLoaded=new P};var Ft=["mask"],Ot=["content"],Vt=["footer"],jt=["titlebar"],At=(t,c,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":c,"pointer-events":e}),Bt=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),Nt=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),Xt=(t,c)=>({transform:t,transition:c}),Yt=t=>({value:"visible",params:t});function Wt(t,c){if(t&1){let e=L();n(0,"div",14),_("mousedown",function(o){w(e);let d=g(2);return I(d.initResize(o))}),r()}t&2&&s("ngClass","p-resizable-handle")}function Ut(t,c){t&1&&K(0)}function Ht(t,c){t&1&&f(0,"WindowMaximizeIcon")}function qt(t,c){t&1&&f(0,"WindowMinimizeIcon")}function Zt(t,c){if(t&1&&(F(0),h(1,Ht,1,0,"WindowMaximizeIcon",11)(2,qt,1,0,"WindowMinimizeIcon",11),O()),t&2){let e=g(5);l(),s("ngIf",!e.maximized&&!e.maximizeIconTemplate),l(),s("ngIf",e.maximized&&!e.minimizeIconTemplate)}}function Qt(t,c){}function $t(t,c){t&1&&h(0,Qt,0,0,"ng-template")}function Kt(t,c){if(t&1&&(F(0),h(1,$t,1,0,null,21),O()),t&2){let e=g(5);l(),s("ngTemplateOutlet",e.maximizeIconTemplate)}}function Gt(t,c){}function Jt(t,c){t&1&&h(0,Gt,0,0,"ng-template")}function ei(t,c){if(t&1&&(F(0),h(1,Jt,1,0,null,21),O()),t&2){let e=g(5);l(),s("ngTemplateOutlet",e.minimizeIconTemplate)}}function ti(t,c){if(t&1){let e=L();n(0,"p-button",20),_("onClick",function(){w(e);let o=g(4);return I(o.maximize())})("keydown.enter",function(){w(e);let o=g(4);return I(o.maximize())}),h(1,Zt,3,2,"ng-container",11)(2,Kt,2,1,"ng-container",11)(3,ei,2,1,"ng-container",11),r()}if(t&2){let e=g(4);s("styleClass","p-dialog-maximize-button")("tabindex",e.maximizable?"0":"-1"),l(),s("ngIf",!e.maximizeIcon),l(),s("ngIf",!e.maximized),l(),s("ngIf",e.maximized)}}function ii(t,c){t&1&&(F(0),f(1,"TimesIcon"),O())}function oi(t,c){}function ni(t,c){t&1&&h(0,oi,0,0,"ng-template")}function ri(t,c){if(t&1&&(n(0,"span"),h(1,ni,1,0,null,21),r()),t&2){let e=g(5);l(),s("ngTemplateOutlet",e.closeIconTemplate)}}function ai(t,c){if(t&1){let e=L();n(0,"p-button",22),_("onClick",function(){w(e);let o=g(4);return I(o.hide())})("keydown.enter",function(){w(e);let o=g(4);return I(o.hide())}),h(1,ii,2,0,"ng-container",11)(2,ri,2,1,"span",11),r()}if(t&2){let e=g(4);s("styleClass","p-dialog-close-button")("ariaLabel",e.ddconfig.closeAriaLabel||e.defaultCloseAriaLabel),l(),s("ngIf",!e.closeIconTemplate),l(),s("ngIf",e.closeIconTemplate)}}function si(t,c){if(t&1&&(F(0),n(1,"span",16),a(2),r(),n(3,"div",17),h(4,ti,4,5,"p-button",18)(5,ai,3,4,"p-button",19),r(),O()),t&2){let e=g(3);l(),s("ngClass","p-dialog-title")("id",e.ariaLabelledBy),l(),k(e.ddconfig.header),l(),s("ngClass","p-dialog-header-actions"),l(),s("ngIf",e.ddconfig.maximizable),l(),s("ngIf",e.closable)}}function li(t,c){if(t&1){let e=L();n(0,"div",15,3),_("mousedown",function(o){w(e);let d=g(2);return I(d.initDrag(o))}),h(2,Ut,1,0,"ng-container",12)(3,si,6,6,"ng-container",11),r()}if(t&2){let e=g(2);s("ngClass","p-dialog-header"),l(2),s("ngComponentOutlet",e.headerTemplate),l(),s("ngIf",!e.headerTemplate)}}function ci(t,c){}function di(t,c){t&1&&h(0,ci,0,0,"ng-template",23)}function mi(t,c){t&1&&K(0)}function pi(t,c){if(t&1&&(F(0),a(1),O()),t&2){let e=g(3);l(),G(" ",e.ddconfig.footer," ")}}function ui(t,c){t&1&&K(0)}function fi(t,c){if(t&1&&(n(0,"div",17,4),h(2,pi,2,1,"ng-container",11)(3,ui,1,0,"ng-container",12),r()),t&2){let e=g(2);s("ngClass","p-dialog-footer"),l(2),s("ngIf",!e.footerTemplate),l(),s("ngComponentOutlet",e.footerTemplate)}}function gi(t,c){if(t&1){let e=L();n(0,"div",7,1),_("@animation.start",function(o){w(e);let d=g();return I(d.onAnimationStart(o))})("@animation.done",function(o){w(e);let d=g();return I(d.onAnimationEnd(o))}),h(2,Wt,1,1,"div",8)(3,li,4,3,"div",9),n(4,"div",10,2),h(6,di,1,0,null,11)(7,mi,1,0,"ng-container",12),r(),h(8,fi,4,3,"div",13),r()}if(t&2){let e=g();Ae(e.ddconfig.style),ae(e.ddconfig.styleClass),je("width",e.ddconfig.width)("height",e.ddconfig.height),s("ngClass",se(22,Bt,e.maximizable&&e.maximized))("ngStyle",J(24,Nt))("@animation",se(28,Yt,Ne(25,Xt,e.transformOptions,e.ddconfig.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)")))("pFocusTrapDisabled",e.ddconfig.focusTrap===!1),Oe("aria-labelledby",e.ariaLabelledBy)("aria-modal",!0)("id",e.dialogId),l(2),s("ngIf",e.ddconfig.resizable),l(),s("ngIf",e.ddconfig.showHeader!==!1),l(),s("ngClass","p-dialog-content")("ngStyle",e.ddconfig.contentStyle),l(2),s("ngIf",!e.contentTemplate),l(),s("ngComponentOutlet",e.contentTemplate),l(),s("ngIf",e.ddconfig.footer||e.footerTemplate)}}var hi=ge([ie({transform:"{{transform}}",opacity:0}),ue("{{transition}}",ie({transform:"none",opacity:1}))]),_i=ge([ue("{{transition}}",ie({transform:"{{transform}}",opacity:0}))]),xt=(()=>{class t extends nt{renderer;ddconfig;dialogRef;zone;parentDialog;visible=!0;componentRef;mask;resizing;dragging;maximized;_style={};originalStyle;lastPageX;lastPageY;ariaLabelledBy;id=me("pn_id_");styleElement;insertionPoint;maskViewChild;contentViewChild;footerViewChild;headerViewChild;childComponentType;inputValues;container;wrapper;documentKeydownListener;documentEscapeListener;maskClickListener;transformOptions="scale(0.7)";documentResizeListener;documentResizeEndListener;documentDragListener;documentDragEndListener;_componentStyle=we(ve);get minX(){return this.ddconfig.minX?this.ddconfig.minX:0}get minY(){return this.ddconfig.minY?this.ddconfig.minY:0}get keepInViewport(){return this.ddconfig.keepInViewport}get maximizable(){return this.ddconfig.maximizable}get maximizeIcon(){return this.ddconfig.maximizeIcon}get minimizeIcon(){return this.ddconfig.minimizeIcon}get closable(){return this.ddconfig.closable}get style(){return this._style}get position(){return this.ddconfig.position}get defaultCloseAriaLabel(){return this.config.getTranslation(ot.ARIA).close}set style(e){e&&(this._style=Z({},e),this.originalStyle=e)}get parent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>1)return e.pop()}get parentContent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>0){let i=e[e.length-1].querySelector(".p-dialog-content");if(i)return Array.isArray(i)?i[0]:i}}get header(){return this.ddconfig.header}get data(){return this.ddconfig.data}get breakpoints(){return this.ddconfig.breakpoints}get footerTemplate(){return this.ddconfig?.templates?.footer}get headerTemplate(){return this.ddconfig?.templates?.header}get contentTemplate(){return this.ddconfig?.templates?.content}get minimizeIconTemplate(){return this.ddconfig?.templates?.minimizeicon}get maximizeIconTemplate(){return this.ddconfig?.templates?.maximizeicon}get closeIconTemplate(){return this.ddconfig?.templates?.closeicon}get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(o=>o===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.ddconfig.modal||this.ddconfig.dismissableMask,[`p-dialog-${i}`]:i}}get dialogId(){return this.attrSelector}zIndexForLayering;constructor(e,i,o,d,T){super(),this.renderer=e,this.ddconfig=i,this.dialogRef=o,this.zone=d,this.parentDialog=T}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}createStyle(){if(H(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[id=${this.dialogId}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),et(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadChildComponent(this.childComponentType),this.ariaLabelledBy=this.getAriaLabelledBy(),this.cd.detectChanges()}getAriaLabelledBy(){return this.header!==null?me("pn_id_")+"_header":null}loadChildComponent(e){let i=this.insertionPoint?.viewContainerRef;i?.clear(),this.componentRef=i?.createComponent(e),this.inputValues&&Object.entries(this.inputValues).forEach(([o,d])=>{this.componentRef.setInput(o,d)}),this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance)}moveOnTop(){this.ddconfig.autoZIndex!==!1?(N.set("modal",this.container,(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)):this.zIndexForLayering=N.generateZIndex("modal",(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.parent&&this.unbindGlobalListeners(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.ddconfig.modal!==!1&&this.enableModality(),this.ddconfig.focusOnShow!==!1&&this.focus();break;case"void":this.wrapper&&this.ddconfig.modal!==!1&&B(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){e.toState==="void"&&(this.parentContent&&this.focus(this.parentContent),this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&this.ddconfig.autoZIndex!==!1&&N.clear(this.container),this.zIndexForLayering&&N.revertZIndex(this.zIndexForLayering),this.ddconfig.modal!==!1&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){this.ddconfig.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.hide()})),this.ddconfig.modal!==!1&&B(this.document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.ddconfig.dismissableMask&&this.unbindMaskClickListener(),this.ddconfig.modal!==!1&&q(this.document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}focus(e=this.contentViewChild.nativeElement){let i=pe.getFocusableElement(e,"[autofocus]");if(i){this.zone.runOutsideAngular(()=>{setTimeout(()=>i.focus(),5)});return}let o=pe.getFocusableElement(e);o?this.zone.runOutsideAngular(()=>{setTimeout(()=>o.focus(),5)}):this.footerViewChild?this.focus(this.footerViewChild.nativeElement):!o&&this.headerViewChild&&this.focus(this.headerViewChild.nativeElement)}maximize(){this.maximized=!this.maximized,this.maximized?B(this.document.body,"p-overflow-hidden"):q(this.document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(e){this.ddconfig.resizable&&(this.documentResizeListener||this.bindDocumentResizeListeners(),this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,B(this.document.body,"p-unselectable-text"),this.dialogRef.resizeInit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,d=de(this.container),T=te(this.container),V=te(this.contentViewChild.nativeElement),v=d+i,D=T+o,U=this.container.style.minWidth,xe=this.container.style.minHeight,Ce=this.container.getBoundingClientRect(),be=ce();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(v+=i,D+=o),(!U||v>parseInt(U))&&Ce.left+v<be.width&&(this._style.width=v+"px",this.container.style.width=this._style.width),(!xe||D>parseInt(xe))&&Ce.top+D<be.height&&(this.contentViewChild.nativeElement.style.height=V+D-T+"px",this._style.height&&(this._style.height=D+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,q(this.document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(e))}initDrag(e){le(e.target,"p-dialog-header-icon")||le(e.target.parentElement,"p-dialog-header-icon")||this.ddconfig.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",B(this.document.body,"p-unselectable-text"),this.dialogRef.dragStart(e))}onDrag(e){if(this.dragging){let i=de(this.container),o=te(this.container),d=e.pageX-this.lastPageX,T=e.pageY-this.lastPageY,V=this.container.getBoundingClientRect(),v=V.left+d,D=V.top+T,U=ce();this.container.style.position="fixed",this.keepInViewport?(v>=this.minX&&v+i<U.width&&(this._style.left=v+"px",this.lastPageX=e.pageX,this.container.style.left=v+"px"),D>=this.minY&&D+o<U.height&&(this._style.top=D+"px",this.lastPageY=e.pageY,this.container.style.top=D+"px")):(this.lastPageX=e.pageX,this.container.style.left=v+"px",this.lastPageY=e.pageY,this.container.style.top=D+"px")}}endDrag(e){this.dragging&&(this.dragging=!1,q(this.document.body,"p-unselectable-text"),this.dialogRef.dragEnd(e),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){H(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document,"mousemove",this.onDrag.bind(this))})}bindDocumentDragEndListener(){H(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentResizeListeners(){H(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.ddconfig.closeOnEscape!==!1&&this.bindDocumentEscapeListener(),this.ddconfig.resizable&&this.bindDocumentResizeListeners(),this.ddconfig.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}bindDocumentEscapeListener(){let e=this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{if(i.which==27){let o=N.getCurrent();(parseInt(this.container.style.zIndex)==o||this.zIndexForLayering==o)&&this.hide()}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(m(Me),m(X),m(S),m(Ee),m(t,12))};static \u0275cmp=u({type:t,selectors:[["p-dynamicDialog"],["p-dynamicdialog"],["p-dynamic-dialog"]],viewQuery:function(i,o){if(i&1&&Ve(ye,5)(Ft,5)(Ot,5)(Vt,5)(jt,5),i&2){let d;j(d=A())&&(o.insertionPoint=d.first),j(d=A())&&(o.maskViewChild=d.first),j(d=A())&&(o.contentViewChild=d.first),j(d=A())&&(o.footerViewChild=d.first),j(d=A())&&(o.headerViewChild=d.first)}},features:[x([ve]),Re],decls:3,vars:9,consts:[["mask",""],["container",""],["content",""],["titlebar",""],["footer",""],[3,"ngStyle","ngClass"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","style","class","pFocusTrapDisabled","width","height",4,"ngIf"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngComponentOutlet"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"ngClass","id"],[3,"ngClass"],["rounded","","text","",3,"styleClass","tabindex","onClick","keydown.enter",4,"ngIf"],["rounded","","text","","severity","secondary",3,"styleClass","ariaLabel","onClick","keydown.enter",4,"ngIf"],["rounded","","text","",3,"onClick","keydown.enter","styleClass","tabindex"],[4,"ngTemplateOutlet"],["rounded","","text","","severity","secondary",3,"onClick","keydown.enter","styleClass","ariaLabel"],["pDynamicDialogContent",""]],template:function(i,o){i&1&&(n(0,"div",5,0),h(2,gi,9,30,"div",6),r()),i&2&&(ae(o.ddconfig.maskStyleClass),s("ngStyle",Xe(5,At,o.position==="left"||o.position==="topleft"||o.position==="bottomleft"?"flex-start":o.position==="right"||o.position==="topright"||o.position==="bottomright"?"flex-end":"center",o.position==="top"||o.position==="topleft"||o.position==="topright"?"flex-start":o.position==="bottom"||o.position==="bottomleft"||o.position==="bottomright"?"flex-end":"center",o.ddconfig.modal?"auto":"none"))("ngClass",o.maskClass),l(2),s("ngIf",o.visible))},dependencies:[ee,We,Ue,He,Ze,qe,it,ye,st,lt,at,E,ut],encapsulation:2,data:{animation:[dt("animation",[fe("void => visible",[he(hi)]),fe("visible => void",[he(_i)])])]}})}return t})();var oe=class{_parentInjector;_additionalTokens;constructor(c,e){this._parentInjector=c,this._additionalTokens=e}get(c,e,i){let o=this._additionalTokens.get(c);return o||this._parentInjector.get(c,e)}};var p=(()=>{class t{appRef;injector;document;dialogComponentRefMap=new Map;constructor(e,i,o){this.appRef=e,this.injector=i,this.document=o}open(e,i){if(!this.duplicationPermission(e,i))return null;let o=this.appendDialogComponentToBody(i,e);return this.dialogComponentRefMap.get(o).instance.childComponentType=e,this.dialogComponentRefMap.get(o).instance.inputValues=i.inputValues,o}getInstance(e){return this.dialogComponentRefMap.get(e).instance}appendDialogComponentToBody(e,i){let o=new WeakMap;o.set(X,e);let d=new S;o.set(S,d);let T=d.onClose.subscribe(()=>{this.dialogComponentRefMap.get(d).instance.close()}),V=d.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(d),V.unsubscribe(),T.unsubscribe()}),v=Ye(xt,{environmentInjector:this.appRef.injector,elementInjector:new oe(this.injector,o)});this.appRef.attachView(v.hostView);let D=v.hostView.rootNodes[0];return!e.appendTo||e.appendTo==="body"?this.document.body.appendChild(D):Je(e.appendTo,D),this.dialogComponentRefMap.set(d,v),d}removeDialogComponentFromBody(e){if(!e||!this.dialogComponentRefMap.has(e))return;let i=this.dialogComponentRefMap.get(e);this.appRef.detachView(i.hostView),i.destroy(),i.changeDetectorRef.detectChanges(),this.dialogComponentRefMap.delete(e)}duplicationPermission(e,i){if(i.duplicate)return!0;let o=!0;for(let[d,T]of this.dialogComponentRefMap)if(T.instance.childComponentType===e){o=!1;break}return o}static \u0275fac=function(i){return new(i||t)($(Fe),$(Ie),$(Te))};static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var Ct=(()=>{class t{ref;dialogService;totalProducts=0;instance;constructor(e,i){this.ref=e,this.dialogService=i,this.instance=this.dialogService.getInstance(this.ref)}ngOnInit(){this.instance&&this.instance.data&&(this.totalProducts=this.instance.data.totalProducts)}close(){this.ref.close()}ngOnDestroy(){this.ref&&this.ref.close()}static \u0275fac=function(i){return new(i||t)(m(S),m(p))};static \u0275cmp=u({type:t,selectors:[["ng-component"]],standalone:!1,decls:8,vars:1,consts:[[1,"flex","justify-end"],["type","button","label","Close",3,"click"]],template:function(i,o){i&1&&(n(0,"div")(1,"p"),a(2," There are "),n(3,"strong"),a(4),r(),a(5," products in total in this list. "),r(),n(6,"div",0)(7,"p-button",1),_("click",function(){return o.close()}),r()()()),i&2&&(l(4),k(o.totalProducts))},dependencies:[E],encapsulation:2})}return t})();function yi(t,c){t&1&&(n(0,"tr")(1,"th",5),a(2,"Code"),r(),n(3,"th",6),a(4,"Name"),r(),n(5,"th",7),a(6,"Image"),r(),n(7,"th",8),a(8,"Category"),r(),n(9,"th",9),a(10,"Quantity"),r(),f(11,"th",10),r())}function vi(t,c){if(t&1){let e=L();n(0,"tr")(1,"td"),a(2),r(),n(3,"td"),a(4),r(),n(5,"td"),f(6,"img",11),r(),n(7,"td"),a(8),r(),n(9,"td"),a(10),r(),n(11,"td")(12,"p-button",12),_("click",function(){let o=w(e).$implicit,d=g();return I(d.selectProduct(o))}),r()()()}if(t&2){let e=c.$implicit;l(2),k(e.code),l(2),k(e.name),l(2),s("src",Be("https://primefaces.org/cdn/primeng/images/demo/product/",e.image),Pe)("alt",e.image),l(2),k(e.category),l(2),G(" ",e.quantity," "),l(2),s("text",!0)("rounded",!0)}}var z=(()=>{class t{productService;dialogService;ref;products;constructor(e,i,o){this.productService=e,this.dialogService=i,this.ref=o}ngOnInit(){this.productService.getProductsSmall().then(e=>this.products=e.slice(0,5))}selectProduct(e){this.ref.close(e)}showInfo(){this.dialogService.open(Ct,{header:"Information",modal:!0,dismissableMask:!0,data:{totalProducts:this.products?this.products.length:0}})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}static \u0275fac=function(i){return new(i||t)(m(Ke),m(p),m(S))};static \u0275cmp=u({type:t,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[[1,"flex","justify-end","mt-1","mb-4"],["icon","pi pi-external-link","label","Nested Dialog","severity","success",3,"click","outlined"],["responsiveLayout","scroll",3,"value","rows","responsive"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","code"],["pSortableColumn","name"],["pSortableColumn","year"],["pSortableColumn","price"],["pSortableColumn","inventoryStatus"],[2,"width","4em"],[1,"w-16",3,"src","alt"],["type","button","icon","pi pi-plus",3,"click","text","rounded"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"p-button",1),_("click",function(){return o.showInfo()}),r()(),n(2,"p-table",2),h(3,yi,12,0,"ng-template",3)(4,vi,13,9,"ng-template",4),r()),i&2&&(l(),s("outlined",!0),l(),s("value",o.products)("rows",5)("responsive",!0))},dependencies:[E,tt,ht,_t],encapsulation:2})}return t})();var bt=(()=>{class t{dialogService;messageService;constructor(e,i){this.dialogService=e,this.messageService=i}ref;show(){this.ref=this.dialogService.open(z,{header:"Select a Product",width:"70%",contentStyle:{overflow:"auto"},baseZIndex:1e4,maximizable:!0}),this.ref.onClose.subscribe(e=>{e&&this.messageService.add({severity:"info",summary:"Product Selected",detail:e.name})})}code={typescript:`
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService, MessageService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.ref.onClose.subscribe((product: Product) => {
            if (product) {
                this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
            }
        });
    }
}`};static \u0275fac=function(i){return new(i||t)(m(p),m(R))};static \u0275cmp=u({type:t,selectors:[["close-doc"]],standalone:!1,features:[x([p,R])],decls:7,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2," Most of the time, requirement is returning a value from the dialog. DialogRef's close method is used for this purpose where the parameter passed will be available at the "),n(3,"i"),a(4,"onClose"),r(),a(5," event at the caller. Here is an example on how to close the dialog from the ProductListDemo by passing a selected product. "),r()(),f(6,"app-code",0)),i&2&&(l(6),s("code",o.code)("hideToggleCode",!0))},dependencies:[C,b],encapsulation:2})}return t})();var St=(()=>{class t{dialogService;ref;constructor(e){this.dialogService=e}show(){this.ref=this.dialogService.open(z,{header:"Select a Product",width:"50vw",modal:!0,breakpoints:{"960px":"75vw","640px":"90vw"}})}code={typescript:`
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class CustomizationDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Select a Product',
            width: '50vw',
            modal:true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        });
}`};static \u0275fac=function(i){return new(i||t)(m(p))};static \u0275cmp=u({type:t,selectors:[["customization-doc"]],standalone:!1,features:[x([p])],decls:7,vars:3,consts:[[3,"routerLink"],[3,"code","hideToggleCode"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"DynamicDialog uses the Dialog component internally, visit "),n(3,"a",0),a(4,"dialog"),r(),a(5," for more information about the available props."),r()(),f(6,"app-code",1)),i&2&&(l(3),s("routerLink","/dialog"),l(3),s("code",o.code)("hideToggleCode",!0))},dependencies:[C,Qe,b],encapsulation:2})}return t})();var wt=(()=>{class t{ref;constructor(e){this.ref=e}closeDialog(e){this.ref.close(e)}static \u0275fac=function(i){return new(i||t)(m(S))};static \u0275cmp=u({type:t,selectors:[["footer"]],standalone:!1,decls:2,vars:0,consts:[[1,"flex","w-full","justify-end","mt-4"],["type","button","label","Cancel","icon","pi pi-times",3,"click"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"p-button",1),_("click",function(){return o.closeDialog({buttonType:"Cancel",summary:"No Product Selected"})}),r()())},dependencies:[E],encapsulation:2})}return t})();var It=(()=>{class t{dialogService;messageService;constructor(e,i){this.dialogService=e,this.messageService=i}ref;code={basic:`<p-toast />
<p-button (click)="show()" icon="pi pi-search" label="Select a Product" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-button (click)="show()" icon="pi pi-search" label="Select a Product" />
</div>`,typescript:`import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './demo/productlistdemo';
import { Footer } from './demo/footer';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dynamic-dialog-example-demo',
    templateUrl: './dynamic-dialog-example-demo.html',
    imports: [DynamicDialogModule, ToastModule, ButtonModule],
    providers: [DialogService, MessageService],
    standalone: true,
})
export class DynamicDialogExampleDemo implements OnDestroy {

    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    ref: DynamicDialogRef | undefined;

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            header: 'Product List',
            width: '50vw',
            modal: true,
            contentStyle: { overflow: 'auto' },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            templates: {
                footer: Footer
            }
        });

        this.ref.onClose.subscribe((data: any) => {
            let summary_and_detail;
            if (data) {
                const buttonType = data?.buttonType;
                summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data?.name };
            } else {
                summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
            }
            this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
        });

        this.ref.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: \`maximized: \${value.maximized}\` });
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}`,service:["ProductService"]};ngOnDestroy(){this.ref&&this.ref.close()}show(){this.ref=this.dialogService.open(z,{header:"Product List",modal:!0,width:"50vw",closable:!0,contentStyle:{overflow:"auto"},breakpoints:{"960px":"75vw","640px":"90vw"},templates:{footer:wt}}),this.ref.onClose.subscribe(e=>{let i;if(e){let o=e?.buttonType;i=o?{summary:"No Product Selected",detail:`Pressed '${o}' button`}:{summary:"Product Selected",detail:e?.name}}else i={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(Se(Z({severity:"info"},i),{life:3e3}))}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];routeFiles=[{path:"src/app/demo/productlistdemo.ts",name:"ProductListDemo",content:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InfoDemo } from './infodemo';
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button';

@Component({
    providers: [DialogService, MessageService, ProductService],
    standalone:true,
    imports:[TableModule, ButtonModule],
    template: \`<div class="flex justify-end mt-1 mb-4">
            <p-button icon="pi pi-external-link" label="Nested Dialog" [outlined]="true" severity="success" (click)="showInfo()" />
        </div>
        <p-table [value]="products" responsiveLayout="scroll" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="code">Code</th>
                    <th pSortableColumn="name">Name</th>
                    <th pSortableColumn="year">Image</th>
                    <th pSortableColumn="price">Category</th>
                    <th pSortableColumn="inventoryStatus">Quantity</th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td><img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.image" class="w-16 h-16 shadow" /></td>
                    <td>{{ product.category }}</td>
                    <td>
                        {{ product.quantity }}
                    </td>
                    <td>
                        <p-button type="button" [text]="true" [rounded]="true" icon="pi pi-plus" (click)="selectProduct(product)" />
                    </td>
                </tr>
            </ng-template>
        </p-table>\`
})
export class ProductListDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService, private dialogService: DialogService, private ref: DynamicDialogRef) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => (this.products = products.slice(0, 5)));
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }

    showInfo() {
        this.dialogService.open(InfoDemo, {
            header: 'Information',
            modal: true,
            dismissableMask: true,
            data: {
                totalProducts: this.products ? this.products.length : 0
            }
        });
    }

    closeDialog(data) {
        this.ref.close(data);
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`},{path:"src/app/demo/infodemo.ts",name:"InfoDemo",content:`import { Component} from '@angular/core';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    providers: [DialogService, MessageService],
    standalone: true,
    imports:[ButtonModule],
    template: \`<div>
    <p>
        There are <strong>{{ totalProducts }}</strong> products in total in this list.
    </p>
    <div class="flex justify-end">
        <p-button type="button" label="Close" (click)="close()" />
    </div>
</div>\`
})
export class InfoDemo {
    totalProducts: number = 0;

    instance: DynamicDialogComponent | undefined;

    constructor(public ref: DynamicDialogRef, private dialogService: DialogService) {
        this.instance = this.dialogService.getInstance(this.ref);
    }

    ngOnInit() {
        if (this.instance && this.instance.data) {
            this.totalProducts = this.instance.data['totalProducts'];
        }
    }

    close() {
        this.ref.close();
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}`},{path:"src/app/demo/footer.ts",name:"Footer",content:`import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'footer',
    standalone: true,
    imports: [ButtonModule],
    template:  \`
        <div class="flex w-full justify-end mt-4">
            <p-button type="button" label="Cancel" icon="pi pi-times" (click)="closeDialog({ buttonType: 'Cancel', summary: 'No Product Selected' })" />
        </div> \`
})
export class Footer {
    constructor(public ref: DynamicDialogRef) {}

    closeDialog(data) {
        this.ref.close(data);
    }
}`}];static \u0275fac=function(i){return new(i||t)(m(p),m(R))};static \u0275cmp=u({type:t,selectors:[["dynamic-dialog-example-demo"]],standalone:!1,features:[x([p,R])],decls:25,vars:3,consts:[[1,"card","flex","justify-center"],["icon","pi pi-search","label","Select a Product",3,"click"],["selector","dynamic-dialog-example-demo",3,"code","extFiles","routeFiles"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2," Dynamic dialogs require an instance of a "),n(3,"i"),a(4,"DialogService"),r(),a(5," that is responsible for displaying a dialog with a component as its content. Calling "),n(6,"i"),a(7,"open"),r(),a(8," method of "),n(9,"i"),a(10,"DialogService"),r(),a(11," will display dynamic dialog. First parameter of "),n(12,"i"),a(13,"open"),r(),a(14," method is the type of component to load and the second parameter is the configuration of the Dialog such as "),n(15,"i"),a(16,"header"),r(),a(17,", "),n(18,"i"),a(19,"width"),r(),a(20," and more. "),r()(),n(21,"div",0),f(22,"p-toast"),n(23,"p-button",1),_("click",function(){return o.show()}),r()(),f(24,"app-code",2)),i&2&&(l(24),s("code",o.code)("extFiles",o.extFiles)("routeFiles",o.routeFiles))},dependencies:[C,E,b,mt],encapsulation:2})}return t})();var Tt=(()=>{class t{code={typescript:"import { DynamicDialogModule } from 'primeng/dynamicdialog';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["dynamic-dialog-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&f(0,"app-code",0),i&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return t})();var Et=(()=>{class t{dialogService;constructor(e){this.dialogService=e}ref;show(){this.ref=this.dialogService.open(z,{header:"Select a Product"})}code={typescript:`
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, { header: 'Select a Product'});
    }
}`};static \u0275fac=function(i){return new(i||t)(m(p))};static \u0275cmp=u({type:t,selectors:[["open-doc"]],standalone:!1,features:[x([p])],decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"The "),n(3,"i"),a(4,"open"),r(),a(5," method of the "),n(6,"i"),a(7,"DialogService"),r(),a(8," is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog."),r()(),f(9,"app-code",0)),i&2&&(l(9),s("code",o.code)("hideToggleCode",!0))},dependencies:[C,b],encapsulation:2})}return t})();var zt=(()=>{class t{dialogService;ref;constructor(e){this.dialogService=e}show(){this.ref=this.dialogService.open(z,{data:{id:"51gF3"},header:"Select a Product"})}code={typescript:`
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(ProductListDemo, {
            data: {
                id: '51gF3'
            },
      		inputValues: {
        		selectedProduct: 'Laptop',
        		quantity: 2
      		},
            header: 'Select a Product'
        });
    }
}`};static \u0275fac=function(i){return new(i||t)(m(p))};static \u0275cmp=u({type:t,selectors:[["passingdata-doc"]],standalone:!1,features:[x([p])],decls:18,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2," To pass data to a dynamically loaded component, you can use either the "),n(3,"i"),a(4,"data"),r(),a(5," or "),n(6,"i"),a(7,"inputValues"),r(),a(8," property, depending on your requirements. The "),n(9,"i"),a(10,"data"),r(),a(11," property is ideal for passing generic information that is not directly tied to the component's inputs, while "),n(12,"i"),a(13,"inputValues"),r(),a(14," allows you to set specific input properties on the component in a more structured and type-safe way. "),r(),n(15,"p"),a(16," Both properties can be used together or independently, offering flexibility to meet different use cases. Additionally, the loaded component can control the dialog using the DynamicDialogRef API, providing complete control over the dialog lifecycle. Both DynamicDialogConfig and DynamicDialogRef are injectable through the constructor. "),r()(),f(17,"app-code",0)),i&2&&(l(17),s("code",o.code)("hideToggleCode",!0))},dependencies:[C,b],encapsulation:2})}return t})();var Pt=(()=>{class t{dialogService;ref;constructor(e){this.dialogService=e}code={typescript:`
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '@/domain/product';
import { ProductListDemo } from './productlistdemo';

@Component({
    templateUrl: './dynamicdialogdemo.html',
    providers: [DialogService]
})
export class DynamicDialogDemo implements OnDestroy {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
}`};static \u0275fac=function(i){return new(i||t)(m(p))};static \u0275cmp=u({type:t,selectors:[["usage-doc"]],standalone:!1,features:[x([p])],decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"To use dynamic dialog, a reference should be declared as "),n(3,"i"),a(4,"DynamicDialogRef"),r(),a(5," after the "),n(6,"i"),a(7,"DialogService"),r(),a(8," injected into the component."),r()(),f(9,"app-code",0)),i&2&&(l(9),s("code",o.code)("hideToggleCode",!0))},dependencies:[C,b],encapsulation:2})}return t})();var Mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=re({type:t});static \u0275inj=ne({imports:[ee,vt,$e,Ge,rt,gt,ct,_e,pt,yt,_e]})}return t})();var xi=()=>["DynamicDialog-Ref","DynamicDialog-Config","DialogService"],Lt=(()=>{class t{docs=[{id:"import",label:"Import",component:Tt},{id:"usage",label:"Usage",component:Pt},{id:"open",label:"Opening a Dialog",component:Et},{id:"customization",label:"Customization",component:St},{id:"passingdata",label:"Passing Data",component:zt},{id:"close",label:"Closing a Dialog",component:bt},{id:"example",label:"Example",component:It}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dynamic Dialog Component","header","Dynamic Dialog","description","Dialogs can be created dynamically with any component as the content using a DialogService.","themeDocs","dynamicdialog",3,"docs","apiDocs"]],template:function(i,o){i&1&&f(0,"app-doc",0),i&2&&s("docs",o.docs)("apiDocs",J(2,xi))},dependencies:[Mt,Dt],encapsulation:2})}return t})();var jn=[{path:"",component:Lt}];export{jn as default};
