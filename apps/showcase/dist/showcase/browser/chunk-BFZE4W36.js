import{c as pe,d as R,f as I,h as V,i as A,k as M}from"./chunk-KMVDOPWF.js";import{a as f,c as O}from"./chunk-X3A3Q6RL.js";import{a as u,b as he}from"./chunk-DEL7GGHP.js";import{Ga as de,I as re,Ja as ce,R as L,ja as m,ra as le,va as ae,w as D,wa as C,y as se}from"./chunk-HJ3EJAPD.js";import{j as X,m as ee,p as te,q as ie,u as ne,y as oe}from"./chunk-O4W5DSIC.js";import{$b as k,Gb as P,Hb as S,Mb as E,N as Z,O as z,Ob as r,Pb as q,Qa as b,Qb as U,Rb as $,S as H,Sb as Y,Tb as v,Ub as y,X as c,Y as p,Za as x,da as s,ea as F,eb as K,fb as Q,jb as N,kb as g,kc as G,ma as B,mc as _,oc as J,uc as W,xb as d,yb as w,zb as T}from"./chunk-DNC77BQZ.js";import{a as h}from"./chunk-GAL4ENT6.js";var be=({dt:i})=>`
.p-overlay {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,j=(()=>{class i extends de{name="overlay";theme=be;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(i)))(n||i)}})();static \u0275prov=Z({token:i,factory:i.\u0275fac})}return i})();var ve=["content"],xe=["overlay"],we=["*"],Te=(i,l,e,t,n,o,a,ye,me,ue,fe,ge,_e,Ce)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":i,"p-overlay-center":l,"p-overlay-top":e,"p-overlay-top-start":t,"p-overlay-top-end":n,"p-overlay-bottom":o,"p-overlay-bottom-start":a,"p-overlay-bottom-end":ye,"p-overlay-left":me,"p-overlay-left-start":ue,"p-overlay-left-end":fe,"p-overlay-right":ge,"p-overlay-right-start":_e,"p-overlay-right-end":Ce}),Se=(i,l,e)=>({showTransitionParams:i,hideTransitionParams:l,transform:e}),Ee=i=>({value:"visible",params:i}),ke=i=>({mode:i}),De=i=>({$implicit:i});function Le(i,l){i&1&&P(0)}function Re(i,l){if(i&1){let e=S();w(0,"div",3,1),E("click",function(n){c(e);let o=r(2);return p(o.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){c(e);let o=r(2);return p(o.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){c(e);let o=r(2);return p(o.onOverlayContentAnimationDone(n))}),U(2),g(3,Le,1,0,"ng-container",4),T()}if(i&2){let e=r(2);k(e.contentStyleClass),d("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",_(11,Ee,J(7,Se,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),b(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",_(15,De,_(13,ke,e.overlayMode)))}}function Ie(i,l){if(i&1){let e=S();w(0,"div",3,0),E("click",function(){c(e);let n=r();return p(n.onOverlayClick())}),g(2,Re,4,17,"div",2),T()}if(i&2){let e=r();k(e.styleClass),d("ngStyle",e.style)("ngClass",W(5,Te,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),b(2),d("ngIf",e.visible)}}var Ve=A([I({transform:"{{transform}}",opacity:0}),R("{{showTransitionParams}}")]),Ae=A([R("{{hideTransitionParams}}",I({transform:"{{transform}}",opacity:0}))]),Me=(()=>{class i extends ce{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return f.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return f.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return f.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return f.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new s;onBeforeShow=new s;onShow=new s;onBeforeHide=new s;onHide=new s;onAnimationStart=new s;onAnimationDone=new s;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=H(j);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(oe(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return h(h({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return h(h({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return re(this.target,this.el?.nativeElement)}constructor(e,t){super(),this.overlayService=e,this.zone=t}ngAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}show(e,t=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),t&&L(this.targetEl),this.modal&&D(this.document?.body,"p-overflow-hidden")}hide(e,t=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),t&&L(this.targetEl),this.modal&&se(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&u.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&O.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),u.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&D(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let t=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(t,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(t,!0),this.modalVisible=!1,this.unbindListeners(),u.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),O.clear(t),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,t){this[e].emit(t),this.options&&this.options[e]&&this.options[e](t),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](t)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new he(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!m()}):!m())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!m()}):!m())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(u.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),O.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||i)(x(le),x(F))};static \u0275cmp=K({type:i,selectors:[["p-overlay"]],contentQueries:function(t,n,o){if(t&1&&$(o,ve,4)(o,ae,4),t&2){let a;v(a=y())&&(n.contentTemplate=a.first),v(a=y())&&(n.templates=a)}},viewQuery:function(t,n){if(t&1&&Y(xe,5)(ve,5),t&2){let o;v(o=y())&&(n.overlayViewChild=o.first),v(o=y())&&(n.contentViewChild=o.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[G([j]),N],ngContentSelectors:we,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&(q(),g(0,Ie,3,20,"div",2)),t&2&&d("ngIf",n.modalVisible)},dependencies:[ne,X,ee,ie,te,C],encapsulation:2,data:{animation:[pe("overlayContentAnimation",[V(":enter",[M(Ve)]),V(":leave",[M(Ae)])])]},changeDetection:0})}return i})(),ot=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Q({type:i});static \u0275inj=z({imports:[Me,C,C]})}return i})();export{Me as a,ot as b};
