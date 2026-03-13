import './polyfills.server.mjs';
import{c as de,d as L,f as y,g,h as O}from"./chunk-RNBAXVKN.mjs";import{c as C}from"./chunk-3SL6YYR2.mjs";import{b as ce}from"./chunk-DE54ZEHA.mjs";import{$ as S,Ba as ae,E as ee,Ga as le,J as te,Ja as pe,Q as ie,ia as oe,ja as ne,ra as re,va as se,w as J,wa as v}from"./chunk-YQJJ7I3T.mjs";import{A as b,k as q,n as K,q as U,r as X,v as G}from"./chunk-RUZVPFSZ.mjs";import{Bb as u,Cb as w,Db as R,Lb as Z,N as P,O as D,Qb as m,Ra as $,S as p,Sa as H,Sb as r,Tb as B,Ub as M,Vb as j,X as l,Xb as k,Y as c,Yb as T,Zc as f,_c as W,da as _,dc as N,ea as V,gb as z,hb as E,lb as A,ma as d,mb as h,oc as Q,qc as Y,rc as x,vb as F}from"./chunk-ZJKG6QAF.mjs";var ue=({dt:t})=>`
.p-popover {
    margin-top: ${t("popover.gutter")};
    background: ${t("popover.background")};
    color: ${t("popover.color")};
    border: 1px solid ${t("popover.border.color")};
    border-radius: ${t("popover.border.radius")};
    box-shadow: ${t("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${t("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${t("popover.gutter")} * -1);
    margin-bottom: ${t("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${t("popover.arrow.offset")} + ${t("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${t("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${t("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.background")};
}

.p-popover:before {
    border-width: ${t("popover.gutter")};
    margin-left: calc(-1 * ${t("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.border.color")};
}

`,me={root:"p-popover p-component",content:"p-popover-content"},I=(()=>{class t extends le{name="popover";theme=ue;classes=me;static \u0275fac=(()=>{let e;return function(o){return(e||(e=d(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var fe=["content"],be=["*"],ve=(t,s)=>({showTransitionParams:t,hideTransitionParams:s}),ye=(t,s)=>({value:t,params:s}),ge=t=>({closeCallback:t});function Ce(t,s){}function _e(t,s){t&1&&h(0,Ce,0,0,"ng-template")}function we(t,s){if(t&1){let e=Z();w(0,"div",1),m("click",function(o){l(e);let n=r();return c(n.onOverlayClick(o))})("@animation.start",function(o){l(e);let n=r();return c(n.onAnimationStart(o))})("@animation.done",function(o){l(e);let n=r();return c(n.onAnimationEnd(o))}),w(1,"div",2),m("click",function(o){l(e);let n=r();return c(n.onContentClick(o))})("mousedown",function(o){l(e);let n=r();return c(n.onContentClick(o))}),M(2),h(3,_e,1,0,null,3),R()()}if(t&2){let e=r();N(e.styleClass),u("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",x(13,ye,e.overlayVisible?"open":"close",x(10,ve,e.showTransitionOptions,e.hideTransitionOptions))),F("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),H(3),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Y(16,ge,e.onCloseClick.bind(e)))}}var ke=(()=>{class t extends pe{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new _;onHide=new _;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=p(I);zone=p(V);overlayService=p(re);ngAfterContentInit(){this.templates.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}bindDocumentClickListener(){if(b(this.platformId)&&!this.documentClickListener){let e=oe()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):te(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&C.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),ee(this.container,this.target,!1);let e=S(this.container),i=S(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(ae("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),J(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&C.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ie(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ne()&&this.hide()}bindDocumentResizeListener(){if(b(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){b(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ce(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&C.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=d(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&j(n,fe,4)(n,se,4),i&2){let a;k(a=T())&&(o.contentTemplate=a.first),k(a=T())&&(o.templates=a)}},hostBindings:function(i,o){i&1&&m("keydown.escape",function(a){return o.onEscapeKeydown(a)},$)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",W],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[Q([I]),A],ngContentSelectors:be,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(B(),h(0,we,4,18,"div",0)),i&2&&u("ngIf",o.render)},dependencies:[G,q,K,X,U,v],encapsulation:2,data:{animation:[de("animation",[g("void",y({transform:"scaleY(0.8)",opacity:0})),g("close",y({opacity:0})),g("open",y({transform:"translateY(0)",opacity:1})),O("void => open",L("{{showTransitionParams}}")),O("open => close",L("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=D({imports:[ke,v,v]})}return t})();export{ke as a,Ye as b};
