import './polyfills.server.mjs';
import{a as De}from"./chunk-NVQ54RHQ.mjs";import{c as Pe,d as te,f as ie,h as ae}from"./chunk-RNBAXVKN.mjs";import{c as ne}from"./chunk-3SL6YYR2.mjs";import{S as Oe,v as Ne,w as J,x as ee,y as Ae}from"./chunk-DE54ZEHA.mjs";import{Ga as Fe,Ja as Y,Ka as Ee,P as F,Q as G,R as Ce,S as Se,na as ke,oa as Ve,va as $e,w as W,wa as X,x as Te,y as R,z as ye}from"./chunk-YQJJ7I3T.mjs";import{A as C,k as N,m as U,n as $,q as B,r as A,v as Z}from"./chunk-RUZVPFSZ.mjs";import{$a as I,$b as be,Bb as l,Cb as p,Db as d,Dc as xe,Eb as f,Ib as O,Jb as E,Kb as de,Lb as x,N as oe,O as se,Qb as _,Ra as me,S as L,Sa as c,Sb as s,Tc as D,Vb as ge,Vc as we,Wb as P,X as m,Xb as b,Y as h,Yb as v,Zc as g,_a as he,_c as V,aa as ce,da as T,dc as q,gb as k,hb as pe,la as M,lb as Q,ma as ue,mb as u,oa as z,oc as ve,pc as K,qc as y,rc as fe,sa as j,sc as _e,tc as Ie,vb as w}from"./chunk-ZJKG6QAF.mjs";var Re=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,Ge={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let r=t.$attrs.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.$attrs.thumbnailsPosition),e=t.$attrs.showIndicators&&t.getPositionClass("p-galleria-indicators",t.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},r,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:r})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(r)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:r,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===r,"p-galleria-thumbnail-item-active":t.isItemActive(r),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===r}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},le=(()=>{class t extends Fe{name="galleria";theme=Re;classes=Ge;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ue(t)))(a||t)}})();static \u0275prov=oe({token:t,factory:t.\u0275fac})}return t})();var He=["header"],Le=["footer"],Me=["indicator"],ze=["caption"],je=["closeicon"],Qe=["previousthumbnailicon"],qe=["nextthumbnailicon"],Ke=["itempreviousicon"],Ue=["itemnexticon"],Ze=["item"],We=["thumbnail"],Xe=["mask"],Ye=["container"],Je=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),et=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),tt=t=>({value:"visible",params:t});function it(t,r){if(t&1){let e=x();p(0,"p-galleriaContent",7),_("@animation.start",function(a){m(e);let n=s(3);return h(n.onAnimationStart(a))})("@animation.done",function(a){m(e);let n=s(3);return h(n.onAnimationEnd(a))})("maskHide",function(){m(e);let a=s(3);return h(a.onMaskHide())})("activeItemChange",function(a){m(e);let n=s(3);return h(n.onActiveItemChange(a))}),d()}if(t&2){let e=s(3);l("@animation",y(9,tt,fe(6,et,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)}}function at(t,r){if(t&1&&(p(0,"div",5,2),u(2,it,1,11,"p-galleriaContent",6),d()),t&2){let e=s(2);q(e.maskClass),l("ngClass",K(6,Je)),w("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),c(2),l("ngIf",e.visible)}}function nt(t,r){if(t&1&&(p(0,"div",null,1),u(2,at,3,7,"div",4),d()),t&2){let e=s();c(2),l("ngIf",e.maskVisible)}}function lt(t,r){if(t&1){let e=x();p(0,"p-galleriaContent",8),_("activeItemChange",function(a){m(e);let n=s();return h(n.onActiveItemChange(a))}),d()}if(t&2){let e=s();l("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var rt=["closeButton"],ot=(t,r,e)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":t,"p-galleria-inset-indicators":r,"p-galleria-hover-navigators":e}),st=()=>({});function ct(t,r){t&1&&f(0,"TimesIcon",11),t&2&&l("styleClass","p-galleria-close-icon")}function ut(t,r){}function mt(t,r){t&1&&u(0,ut,0,0,"ng-template")}function ht(t,r){if(t&1){let e=x();p(0,"button",8),_("click",function(){m(e);let a=s(2);return h(a.maskHide.emit())}),u(1,ct,1,1,"TimesIcon",9)(2,mt,1,0,null,10),d()}if(t&2){let e=s(2);w("aria-label",e.closeAriaLabel())("data-pc-section","closebutton"),c(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),c(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function pt(t,r){if(t&1&&(p(0,"div",12),f(1,"p-galleriaItemSlot",13),d()),t&2){let e=s(2);c(),l("templates",e.galleria.templates)}}function dt(t,r){if(t&1){let e=x();p(0,"p-galleriaThumbnails",14),_("onActiveIndexChange",function(a){m(e);let n=s(2);return h(n.onActiveIndexChange(a))})("stopSlideShow",function(){m(e);let a=s(2);return h(a.stopSlideShow())}),d()}if(t&2){let e=s(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)}}function gt(t,r){if(t&1&&(p(0,"div",15),f(1,"p-galleriaItemSlot",16),d()),t&2){let e=s(2);c(),l("templates",e.galleria.templates)}}function bt(t,r){if(t&1){let e=x();p(0,"div",1),u(1,ht,3,4,"button",2)(2,pt,2,1,"div",3),p(3,"div",4)(4,"p-galleriaItem",5),_("onActiveIndexChange",function(a){m(e);let n=s();return h(n.onActiveIndexChange(a))})("startSlideShow",function(){m(e);let a=s();return h(a.startSlideShow())})("stopSlideShow",function(){m(e);let a=s();return h(a.stopSlideShow())}),d(),u(5,dt,1,11,"p-galleriaThumbnails",6),d(),u(6,gt,2,1,"div",7),d()}if(t&2){let e=s();q(e.galleriaClass()),l("ngClass",_e(24,ot,e.galleria.fullScreen,e.galleria.showIndicatorsOnItem,e.galleria.showItemNavigatorsOnHover&&!e.galleria.fullScreen))("ngStyle",e.galleria.fullScreen?K(28,st):e.galleria.containerStyle)("pFocusTrapDisabled",!e.fullScreen),w("id",e.id)("role","region"),c(),l("ngIf",e.galleria.fullScreen),c(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),c(),w("aria-live",e.galleria.autoPlay?"polite":"off"),c(),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive),c(),l("ngIf",e.galleria.showThumbnails),c(),l("ngIf",e.shouldRenderFooter())}}function vt(t,r){t&1&&de(0)}function ft(t,r){if(t&1&&(O(0),u(1,vt,1,0,"ng-container",1),E()),t&2){let e=s();c(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var _t=t=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":t}),It=t=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":t}),xt=t=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":t});function wt(t,r){t&1&&f(0,"ChevronLeftIcon",9),t&2&&l("styleClass","p-galleria-prev-icon")}function Tt(t,r){}function yt(t,r){t&1&&u(0,Tt,0,0,"ng-template")}function Ct(t,r){if(t&1){let e=x();p(0,"button",6),_("click",function(a){m(e);let n=s();return h(n.navBackward(a))})("focus",function(){m(e);let a=s();return h(a.onButtonFocus("left"))})("blur",function(){m(e);let a=s();return h(a.onButtonBlur("left"))}),u(1,wt,1,1,"ChevronLeftIcon",7)(2,yt,1,0,null,8),d()}if(t&2){let e=s();l("ngClass",y(4,_t,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),c(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function St(t,r){t&1&&f(0,"ChevronRightIcon",9),t&2&&l("styleClass","p-galleria-next-icon")}function kt(t,r){}function Vt(t,r){t&1&&u(0,kt,0,0,"ng-template")}function $t(t,r){if(t&1){let e=x();p(0,"button",6),_("click",function(a){m(e);let n=s();return h(n.navForward(a))})("focus",function(){m(e);let a=s();return h(a.onButtonFocus("right"))})("blur",function(){m(e);let a=s();return h(a.onButtonBlur("right"))}),u(1,St,1,1,"ChevronRightIcon",7)(2,Vt,1,0,null,8),d()}if(t&2){let e=s();l("ngClass",y(4,It,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),c(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function Ft(t,r){if(t&1&&(p(0,"div",10),f(1,"p-galleriaItemSlot",11),d()),t&2){let e=s();c(),l("item",e.activeItem)("templates",e.templates)}}function Nt(t,r){t&1&&f(0,"button",17)}function At(t,r){if(t&1){let e=x();p(0,"li",14),_("click",function(){let a=m(e).index,n=s(2);return h(n.onIndicatorClick(a))})("mouseenter",function(){let a=m(e).index,n=s(2);return h(n.onIndicatorMouseEnter(a))})("keydown",function(a){let n=m(e).index,o=s(2);return h(o.onIndicatorKeyDown(a,n))}),u(1,Nt,1,0,"button",15),f(2,"p-galleriaItemSlot",16),d()}if(t&2){let e=r.index,i=s(2);l("ngClass",y(7,xt,i.isIndicatorItemActive(e))),w("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),c(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),c(),l("index",e)("templates",i.templates)}}function Ot(t,r){if(t&1&&(p(0,"ul",12),u(1,At,3,9,"li",13),d()),t&2){let e=s();c(),l("ngForOf",e.value)}}var Et=["itemsContainer"],Pt=t=>({height:t}),Dt=t=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t}),Bt=(t,r,e,i)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":t,"p-galleria-thumbnail-item-active":r,"p-galleria-thumbnail-item-start":e,"p-galleria-thumbnail-item-end":i}),Rt=t=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t});function Gt(t,r){t&1&&f(0,"ChevronLeftIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function Ht(t,r){t&1&&f(0,"ChevronUpIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function Lt(t,r){if(t&1&&(O(0),u(1,Gt,1,1,"ChevronLeftIcon",10)(2,Ht,1,1,"ChevronUpIcon",10),E()),t&2){let e=s(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Mt(t,r){}function zt(t,r){t&1&&u(0,Mt,0,0,"ng-template")}function jt(t,r){if(t&1){let e=x();p(0,"button",7),_("click",function(a){m(e);let n=s();return h(n.navBackward(a))}),u(1,Lt,3,2,"ng-container",8)(2,zt,1,0,null,9),d()}if(t&2){let e=s();l("ngClass",y(5,Dt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),w("aria-label",e.ariaPrevButtonLabel()),c(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function Qt(t,r){if(t&1){let e=x();p(0,"div",12),_("keydown",function(a){let n=m(e).index,o=s();return h(o.onThumbnailKeydown(a,n))}),p(1,"div",13),_("click",function(){let a=m(e).index,n=s();return h(n.onItemClick(a))})("touchend",function(){let a=m(e).index,n=s();return h(n.onItemClick(a))})("keydown.enter",function(){let a=m(e).index,n=s();return h(n.onItemClick(a))}),f(2,"p-galleriaItemSlot",14),d()()}if(t&2){let e=r.$implicit,i=r.index,a=s();l("ngClass",Ie(10,Bt,a.activeIndex===i,a.isItemActive(i),a.firstItemAciveIndex()===i,a.lastItemActiveIndex()===i)),w("aria-selected",a.activeIndex===i)("aria-controls",a.containerId+"_item_"+i)("data-pc-section","thumbnailitem")("data-p-active",a.activeIndex===i),c(),w("tabindex",a.activeIndex===i?0:-1)("aria-current",a.activeIndex===i?"page":void 0)("aria-label",a.ariaPageLabel(i+1)),c(),l("item",e)("templates",a.templates)}}function qt(t,r){t&1&&f(0,"ChevronRightIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function Kt(t,r){t&1&&f(0,"ChevronDownIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function Ut(t,r){if(t&1&&(O(0),u(1,qt,1,1,"ChevronRightIcon",15)(2,Kt,1,1,"ChevronDownIcon",15),E()),t&2){let e=s(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Zt(t,r){}function Wt(t,r){t&1&&u(0,Zt,0,0,"ng-template")}function Xt(t,r){if(t&1){let e=x();p(0,"button",7),_("click",function(a){m(e);let n=s();return h(n.navForward(a))}),u(1,Ut,3,2,"ng-container",8)(2,Wt,1,0,null,9),d()}if(t&2){let e=s();l("ngClass",y(5,Rt,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),w("aria-label",e.ariaNextButtonLabel()),c(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var H=(()=>{class t extends Y{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new T;visibleChange=new T;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=L(le);constructor(e,i,a){super(),this.platformId=e,this.element=i,this.cd=a}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{Ce(G(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":W(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){e.toState==="void"&&this.disableModality()}enableModality(){Te(void 0),this.cd.markForCheck(),this.mask&&ne.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){ye(void 0),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&ne.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&R(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(I(j),I(z),I(D))};static \u0275cmp=k({type:t,selectors:[["p-galleria"]],contentQueries:function(i,a,n){if(i&1&&ge(n,He,4)(n,Le,4)(n,Me,4)(n,ze,4)(n,je,4)(n,Qe,4)(n,qe,4)(n,Ke,4)(n,Ue,4)(n,Ze,4)(n,We,4)(n,$e,4),i&2){let o;b(o=v())&&(a.headerTemplate=o.first),b(o=v())&&(a.footerTemplate=o.first),b(o=v())&&(a.indicatorTemplate=o.first),b(o=v())&&(a.captionTemplate=o.first),b(o=v())&&(a._closeIconTemplate=o.first),b(o=v())&&(a._previousThumbnailIconTemplate=o.first),b(o=v())&&(a._nextThumbnailIconTemplate=o.first),b(o=v())&&(a._itemPreviousIconTemplate=o.first),b(o=v())&&(a._itemNextIconTemplate=o.first),b(o=v())&&(a._itemTemplate=o.first),b(o=v())&&(a._thumbnailTemplate=o.first),b(o=v())&&(a.templates=o)}},viewQuery:function(i,a){if(i&1&&P(Xe,5)(Ye,5),i&2){let n;b(n=v())&&(a.mask=n.first),b(n=v())&&(a.container=n.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",g],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",V],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",g],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],circular:[2,"circular","circular",g],autoPlay:[2,"autoPlay","autoPlay",g],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",g],transitionInterval:[2,"transitionInterval","transitionInterval",V],showThumbnails:[2,"showThumbnails","showThumbnails",g],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",g],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",g],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",V],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[ve([le]),Q,M],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(i,a){if(i&1&&u(0,nt,3,1,"div",3)(1,lt,1,3,"ng-template",null,0,xe),i&2){let n=be(2);l("ngIf",a.fullScreen)("ngIfElse",n)}},dependencies:()=>[N,$,B,Yt],encapsulation:2,data:{animation:[Pe("animation",[ae("void => visible",[ie({transform:"scale(0.7)",opacity:0}),te("{{showTransitionParams}}")]),ae("visible => void",[te("{{hideTransitionParams}}",ie({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),Yt=(()=>{class t extends Y{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new T;activeItemChange=new T;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i,a,n){super(),this.galleria=e,this.cd=i,this.differs=a,this.elementRef=n,this.id=this.galleria.id||Ve("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(C(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let e=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),i=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(e?e+" ":"")+(i?i+" ":"")}startSlideShow(){C(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let n=["top","left","bottom","right"].find(o=>o===i);return n?`${e}-${n}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(I(H),I(D),I(we),I(z))};static \u0275cmp=k({type:t,selectors:[["p-galleriaContent"]],viewQuery:function(i,a){if(i&1&&P(rt,5),i&2){let n;b(n=v())&&(a.closeButton=n.first)}},hostBindings:function(i,a){i&1&&_("fullscreenchange",function(o){return a.handleFullscreenChange(o)},me)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",V],fullScreen:[2,"fullScreen","fullScreen",g]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[Q],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(i,a){i&1&&u(0,bt,7,29,"div",0),i&2&&l("ngIf",a.value&&a.value.length>0)},dependencies:()=>[N,$,A,B,Oe,De,re,Jt,ei],encapsulation:2,changeDetection:0})}return t})(),re=(()=>{class t{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=L(H);set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",V],item:"item",type:"type"},standalone:!1,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,a){i&1&&u(0,ft,2,2,"ng-container",0),i&2&&l("ngIf",a.shouldRender())},dependencies:[$,A],encapsulation:2,changeDetection:0})}return t})(),Jt=(()=>{class t{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new T;stopSlideShow=new T;onActiveIndexChange=new T;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){this.galleria=e}ngOnChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(I(H))};static \u0275cmp=k({type:t,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",g],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showIndicators:[2,"showIndicators","showIndicators",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],autoPlay:[2,"autoPlay","autoPlay",g],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[M],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(i,a){i&1&&(p(0,"div",0),u(1,Ct,3,6,"button",1),p(2,"div",2),f(3,"p-galleriaItemSlot",3),d(),u(4,$t,3,6,"button",1)(5,Ft,2,2,"div",4),d(),u(6,Ot,2,1,"ul",5)),i&2&&(c(),l("ngIf",a.showItemNavigators),c(),l("id",a.id+"_item_"+a.activeIndex),w("aria-label",a.ariaSlideNumber(a.activeIndex+1))("aria-roledescription",a.ariaSlideLabel()),c(),l("item",a.activeItem)("templates",a.templates),c(),l("ngIf",a.showItemNavigators),c(),l("ngIf",a.captionFacet||a.galleria.captionTemplate),c(),l("ngIf",a.showIndicators))},dependencies:[N,U,$,A,ee,J,re],encapsulation:2,changeDetection:0})}return t})(),ei=(()=>{class t{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new T;stopSlideShow=new T;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(e,i,a,n,o){this.galleria=e,this.document=i,this.platformId=a,this.renderer=n,this.cd=o}ngOnInit(){C(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(R(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){C(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,a)=>{let n=i.breakpoint,o=a.breakpoint,S=null;return n==null&&o!=null?S=-1:n!=null&&o==null?S=1:n==null&&o==null?S=0:typeof n=="string"&&typeof o=="string"?S=n.localeCompare(o,void 0,{numeric:!0}):S=n<o?-1:n>o?1:0,-1*S});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,ke(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(C(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let a=0;a<this.sortedResponsiveOptions.length;a++){let n=this.sortedResponsiveOptions[a];parseInt(n.breakpoint,10)>=e&&(i=n)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let a=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,a=i+this.totalShiftedItems;this.d_numVisible-a-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let n=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let a=i+this.totalShiftedItems,n=0;i<this._activeIndex?(n=this.d_numVisible-a-1-this.getMedianItemIndex(),n>0&&-1*this.totalShiftedItems!==0&&this.step(n)):(n=this.getMedianItemIndex()-a,n<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(n)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=F(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=F(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...F(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(o=>Se(o,"data-p-active")===!0),a=G(this.itemsContainer.nativeElement,'[tabindex="0"]'),n=e.findIndex(o=>o===a.parentElement);e[n].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...F(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=G(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(a=>a===i.parentElement)}changedFocusedIndicator(e,i){let a=F(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');a[e].children[0].tabIndex="-1",a[i].children[0].tabIndex="0",a[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(R(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(W(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(C(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(I(H),I(ce),I(j),I(he),I(D))};static \u0275cmp=k({type:t,selectors:[["p-galleriaThumbnails"]],viewQuery:function(i,a){if(i&1&&P(Et,5),i&2){let n;b(n=v())&&(a.itemsContainer=n.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],circular:[2,"circular","circular",g],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,a){i&1&&(p(0,"div",1)(1,"div",2),u(2,jt,3,7,"button",3),p(3,"div",4)(4,"div",5,0),_("transitionend",function(){return a.onTransitionEnd()})("touchstart",function(o){return a.onTouchStart(o)})("touchmove",function(o){return a.onTouchMove(o)}),u(6,Qt,3,15,"div",6),d()(),u(7,Xt,3,7,"button",3),d()()),i&2&&(c(2),l("ngIf",a.showThumbnailNavigators),c(),l("ngStyle",y(4,Pt,a.isVertical?a.contentHeight:"")),c(3),l("ngForOf",a.value),c(),l("ngIf",a.showThumbnailNavigators))},dependencies:[N,U,$,A,B,Ee,ee,Ae,Ne,J,re],encapsulation:2,changeDetection:0})}return t})(),Mi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=pe({type:t});static \u0275inj=se({imports:[Z,X,Z,X]})}return t})();export{H as a,Mi as b};
