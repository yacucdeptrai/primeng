import{w as ht,x as vt}from"./chunk-DEL7GGHP.js";import{$ as G,D as U,G as bt,Ga as mt,Ja as h,Ka as z,La as gt,Q as pt,R as ut,S as E,da as F,j as S,oa as dt,va as ft,wa as A}from"./chunk-HJ3EJAPD.js";import{j as lt,q as ct,u as m,y as N}from"./chunk-O4W5DSIC.js";import{Ab as R,Ec as r,Gb as q,Hb as W,Hc as T,Kc as M,M as y,Mb as $,N as X,O as Y,Ob as C,Pb as u,Qa as k,Qb as d,Qc as D,Rb as it,Rc as st,S as l,Sb as ot,Tb as v,Ub as g,X as K,Y as H,Zb as f,eb as b,fb as et,ha as I,ib as nt,jb as p,ka as Z,kb as Q,kc as at,ma as c,mc as rt,oa as tt,rb as s,sb as x,tb as w,xb as P,yb as L,zb as V}from"./chunk-DNC77BQZ.js";var wt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Ct={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},J=(()=>{class e extends mt{name="tabs";theme=wt;classes=Ct;static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275prov=X({token:e,factory:e.\u0275fac})}return e})();var Dt=["*"],_t=(()=>{class e extends h{value=M();disabled=T(!1,{transform:D});pcTabs=l(y(()=>B));pcTabList=l(y(()=>j));el=l(tt);ripple=r(()=>this.config.ripple());id=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=r(()=>S(this.pcTabs.value(),this.value()));tabindex=r(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?E(n,"data-p-disabled")||E(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?E(n,"data-p-disabled")||E(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){ut(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){N(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&$("focus",function(a){return n.onFocus(a)})("click",function(a){return n.onClick(a)})("keydown",function(a){return n.onKeyDown(a)}),i&2&&(s("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),f("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[nt([z]),p],ngContentSelectors:Dt,decls:1,vars:0,template:function(i,n){i&1&&(u(),d(0))},dependencies:[m,A],encapsulation:2,changeDetection:0})}return e})();var Bt=["*"];function kt(e,_){e&1&&d(0)}var Tt=(()=>{class e extends h{pcTabs=l(y(()=>B));value=M(void 0);id=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=r(()=>S(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(s("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),f("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[p],ngContentSelectors:Bt,decls:1,vars:1,template:function(i,n){i&1&&(u(),x(0,kt,1,0)),i&2&&w(n.active()?0:-1)},dependencies:[m],encapsulation:2,changeDetection:0})}return e})();var $t=["*"],yt=(()=>{class e extends h{static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(s("data-pc-name","tabpanels")("role","presentation"),f("p-tabpanels",!0)("p-component",!0))},features:[p],ngContentSelectors:$t,decls:1,vars:0,template:function(i,n){i&1&&(u(),d(0))},dependencies:[m],encapsulation:2,changeDetection:0})}return e})();var Mt=["*"],B=(()=>{class e extends h{value=M(void 0);scrollable=T(!1,{transform:D});lazy=T(!1,{transform:D});selectOnFocus=T(!1,{transform:D});showNavigators=T(!0,{transform:D});tabindex=T(0,{transform:st});id=I(dt("pn_id_"));_componentStyle=l(J);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(s("data-pc-name","tabs")("id",n.id()),f("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[at([J]),p],ngContentSelectors:Mt,decls:1,vars:0,template:function(i,n){i&1&&(u(),d(0))},dependencies:[m],encapsulation:2,changeDetection:0})}return e})(),Oe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=et({type:e});static \u0275inj=Y({imports:[B,yt,Tt,j,_t]})}return e})();var It=["previcon"],Lt=["nexticon"],Nt=["content"],Et=["prevButton"],Ft=["nextButton"],Ot=["inkbar"],Pt=["tabs"],Vt=["*"],Rt=e=>({"p-tablist-viewport":e});function St(e,_){e&1&&q(0)}function At(e,_){if(e&1&&Q(0,St,1,0,"ng-container",11),e&2){let t=C(2);P("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function zt(e,_){e&1&&R(0,"ChevronLeftIcon")}function jt(e,_){if(e&1){let t=W();L(0,"button",10,3),$("click",function(){K(t);let n=C();return H(n.onPrevButtonClick())}),x(2,At,1,1,"ng-container")(3,zt,1,0,"ChevronLeftIcon"),V()}if(e&2){let t=C();s("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),k(2),w(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Kt(e,_){e&1&&q(0)}function Ht(e,_){if(e&1&&Q(0,Kt,1,0,"ng-container",11),e&2){let t=C(2);P("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Qt(e,_){e&1&&R(0,"ChevronRightIcon")}function qt(e,_){if(e&1){let t=W();L(0,"button",12,4),$("click",function(){K(t);let n=C();return H(n.onNextButtonClick())}),x(2,Ht,1,1,"ng-container")(3,Qt,1,0,"ChevronRightIcon"),V()}if(e&2){let t=C();s("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),k(2),w(t.nextIconTemplate||t._nextIconTemplate?2:3)}}var j=(()=>{class e extends h{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=l(y(()=>B));isPrevButtonEnabled=I(!1);isNextButtonEnabled=I(!1);resizeObserver;showNavigators=r(()=>this.pcTabs.showNavigators());tabindex=r(()=>this.pcTabs.tabindex());scrollable=r(()=>this.pcTabs.scrollable());constructor(){super(),Z(()=>{this.pcTabs.value(),N(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&N(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=F(t),n=Math.abs(t.scrollLeft)-i,o=n<=0?0:n;t.scrollLeft=U(t)?-1*o:o}onNextButtonClick(){let t=this.content.nativeElement,i=F(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,o=t.scrollWidth-i,a=n>=o?o:n;t.scrollLeft=U(t)?-1*a:a}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=t,a=Math.abs(t.scrollLeft),xt=F(t);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&a!==n-xt)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=pt(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=bt(o)+"px",i.style.left=G(o).left-G(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,o)=>o?n+F(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=b({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&it(o,It,4)(o,Lt,4)(o,ft,4),i&2){let a;v(a=g())&&(n.prevIconTemplate=a.first),v(a=g())&&(n.nextIconTemplate=a.first),v(a=g())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&ot(Nt,5)(Et,5)(Ft,5)(Ot,5)(Pt,5),i&2){let o;v(o=g())&&(n.content=o.first),v(o=g())&&(n.prevButton=o.first),v(o=g())&&(n.nextButton=o.first),v(o=g())&&(n.inkbar=o.first),v(o=g())&&(n.tabs=o.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(s("data-pc-name","tablist"),f("p-tablist",!0)("p-component",!0))},features:[p],ngContentSelectors:Vt,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){i&1&&(u(),x(0,jt,4,4,"button",5),L(1,"div",6,0),$("scroll",function(a){return n.onScroll(a)}),L(3,"div",7,1),d(5),R(6,"span",8,2),V()(),x(8,qt,4,4,"button",9)),i&2&&(w(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),k(),P("ngClass",rt(4,Rt,n.scrollable())),k(5),s("data-pc-section","inkbar"),k(2),w(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[m,lt,ct,ht,vt,gt,z,A],encapsulation:2,changeDetection:0})}return e})();export{j as a,_t as b,Tt as c,yt as d,B as e,Oe as f};
