import{a as Je,b as _e}from"./chunk-VDPAGLM7.js";import{c as be}from"./chunk-X3A3Q6RL.js";import{f as je,g as de,l as Qe,n as Ge,r as Ue}from"./chunk-DEL7GGHP.js";import{e as Re,f as He,i as me}from"./chunk-UHCZASEU.js";import{Ga as Ne,Ja as pe,Ka as We,Q as G,R as P,e as F,h as v,ja as ce,n as ue,o as le,oa as qe,s as ze,va as Ze,wa as A}from"./chunk-HJ3EJAPD.js";import{j as ie,l as Oe,m as ae,p as re,q as oe,u as se,y as Q}from"./chunk-O4W5DSIC.js";import{$b as te,Ab as b,B as xe,Eb as L,Fb as M,Gb as Y,Hb as z,Ja as W,Ka as Le,Mb as w,Mc as Be,N as O,O as ve,Ob as m,Pb as we,Qa as u,Qb as $e,Qc as x,Rb as Ee,Rc as E,S as U,Sb as ee,Tb as I,Ub as f,X as T,Xb as q,Y as k,Ya as Me,Za as S,_b as Fe,aa as Ce,ac as ne,bc as Ae,cc as De,d as he,da as y,eb as J,fb as Pe,ha as R,jb as X,ka as Te,kb as l,kc as Ke,lc as Ve,ma as H,mc as Z,nc as N,oa as ke,rb as c,sa as Se,v as ge,x as ye,xb as o,yb as d,zb as p,zc as j}from"./chunk-DNC77BQZ.js";import{a as V,b as B}from"./chunk-GAL4ENT6.js";var et=({dt:t})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${t("menubar.submenu.mobile.indent")};
}
`;var tt={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:s})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(s),"p-focus":t.isItemFocused(s),"p-disabled":t.isItemDisabled(s)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ie=(()=>{class t extends Ne{name="menubar";theme=et;classes=tt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(t)))(i||t)}})();static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();var nt=["menubar"],it=(t,s)=>({"p-menubar-submenu":t,"p-menubar-root-list":s}),Xe=t=>({"p-menubar-item-link":!0,"p-disabled":t}),at=()=>({exact:!1}),rt=(t,s)=>({$implicit:t,root:s}),ot=t=>({display:t});function st(t,s){if(t&1&&b(0,"li",8),t&2){let e=m().$implicit,n=m();Fe(n.getItemProp(e,"style")),o("ngClass",n.getSeparatorItemClass(e)),c("id",n.getItemId(e))("data-pc-section","separator")}}function mt(t,s){if(t&1&&b(0,"span",19),t&2){let e=m(4).$implicit,n=m();o("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),c("data-pc-section","icon")("tabindex",-1)}}function ut(t,s){if(t&1&&(d(0,"span",20),ne(1),p()),t&2){let e=m(4).$implicit,n=m();o("id",n.getItemLabelId(e)),c("data-pc-section","label"),u(),De(" ",n.getItemLabel(e)," ")}}function lt(t,s){if(t&1&&b(0,"span",21),t&2){let e=m(4).$implicit,n=m();o("innerHTML",n.getItemLabel(e),W)("id",n.getItemLabelId(e)),c("data-pc-section","label")}}function ct(t,s){if(t&1&&b(0,"p-badge",22),t&2){let e=m(4).$implicit,n=m();o("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function pt(t,s){t&1&&b(0,"AngleDownIcon",25),t&2&&c("data-pc-section","submenuicon")}function dt(t,s){t&1&&b(0,"AngleRightIcon",25),t&2&&c("data-pc-section","submenuicon")}function bt(t,s){if(t&1&&(L(0),l(1,pt,1,1,"AngleDownIcon",24)(2,dt,1,1,"AngleRightIcon",24),M()),t&2){let e=m(6);u(),o("ngIf",e.root),u(),o("ngIf",!e.root)}}function _t(t,s){}function It(t,s){t&1&&l(0,_t,0,0,"ng-template",26),t&2&&o("data-pc-section","submenuicon")}function ft(t,s){if(t&1&&(L(0),l(1,bt,3,2,"ng-container",11)(2,It,1,1,null,23),M()),t&2){let e=m(5);u(),o("ngIf",!e.submenuiconTemplate),u(),o("ngTemplateOutlet",e.submenuiconTemplate)}}function ht(t,s){if(t&1&&(d(0,"a",15),l(1,mt,1,4,"span",16)(2,ut,2,3,"span",17)(3,lt,1,3,"ng-template",null,2,j)(5,ct,1,2,"p-badge",18)(6,ft,3,2,"ng-container",11),p()),t&2){let e=q(4),n=m(3).$implicit,i=m();o("target",i.getItemProp(n,"target"))("ngClass",Z(11,Xe,i.getItemProp(n,"disabled"))),c("href",i.getItemProp(n,"url"),Le)("data-automationid",i.getItemProp(n,"automationId"))("data-pc-section","action")("tabindex",-1),u(),o("ngIf",i.getItemProp(n,"icon")),u(),o("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),u(3),o("ngIf",i.getItemProp(n,"badge")),u(),o("ngIf",i.isItemGroup(n))}}function gt(t,s){if(t&1&&b(0,"span",19),t&2){let e=m(4).$implicit,n=m();o("ngClass",n.getItemProp(e,"icon"))("ngStyle",n.getItemProp(e,"iconStyle")),c("data-pc-section","icon")("tabindex",-1)}}function yt(t,s){if(t&1&&(d(0,"span",29),ne(1),p()),t&2){let e=m(4).$implicit,n=m();u(),Ae(n.getItemLabel(e))}}function xt(t,s){if(t&1&&b(0,"span",30),t&2){let e=m(4).$implicit,n=m();o("innerHTML",n.getItemLabel(e),W),c("data-pc-section","label")}}function vt(t,s){if(t&1&&b(0,"p-badge",22),t&2){let e=m(4).$implicit,n=m();o("styleClass",n.getItemProp(e,"badgeStyleClass"))("value",n.getItemProp(e,"badge"))}}function Ct(t,s){t&1&&b(0,"AngleDownIcon",25),t&2&&c("data-pc-section","submenuicon")}function Tt(t,s){t&1&&b(0,"AngleRightIcon",25),t&2&&c("data-pc-section","submenuicon")}function kt(t,s){if(t&1&&(L(0),l(1,Ct,1,1,"AngleDownIcon",24)(2,Tt,1,1,"AngleRightIcon",24),M()),t&2){let e=m(6);u(),o("ngIf",e.root),u(),o("ngIf",!e.root)}}function St(t,s){}function Lt(t,s){t&1&&l(0,St,0,0,"ng-template",26),t&2&&o("data-pc-section","submenuicon")}function Mt(t,s){if(t&1&&(L(0),l(1,kt,3,2,"ng-container",11)(2,Lt,1,1,null,23),M()),t&2){let e=m(5);u(),o("ngIf",!e.submenuiconTemplate),u(),o("ngTemplateOutlet",e.submenuiconTemplate)}}function Pt(t,s){if(t&1&&(d(0,"a",27),l(1,gt,1,4,"span",16)(2,yt,2,1,"span",28)(3,xt,1,2,"ng-template",null,3,j)(5,vt,1,2,"p-badge",18)(6,Mt,3,2,"ng-container",11),p()),t&2){let e=q(4),n=m(3).$implicit,i=m();o("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||Ve(20,at))("target",i.getItemProp(n,"target"))("ngClass",Z(21,Xe,i.getItemProp(n,"disabled")))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),c("data-automationid",i.getItemProp(n,"automationId"))("tabindex",-1)("data-pc-section","action"),u(),o("ngIf",i.getItemProp(n,"icon")),u(),o("ngIf",i.getItemProp(n,"escape"))("ngIfElse",e),u(3),o("ngIf",i.getItemProp(n,"badge")),u(),o("ngIf",i.isItemGroup(n))}}function wt(t,s){if(t&1&&(L(0),l(1,ht,7,13,"a",13)(2,Pt,7,23,"a",14),M()),t&2){let e=m(2).$implicit,n=m();u(),o("ngIf",!n.getItemProp(e,"routerLink")),u(),o("ngIf",n.getItemProp(e,"routerLink"))}}function $t(t,s){}function Et(t,s){t&1&&l(0,$t,0,0,"ng-template")}function Ft(t,s){if(t&1&&(L(0),l(1,Et,1,0,null,31),M()),t&2){let e=m(2).$implicit,n=m();u(),o("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",N(2,rt,e.item,n.root))}}function At(t,s){if(t&1){let e=z();d(0,"p-menubarSub",32),w("itemClick",function(i){T(e);let a=m(3);return k(a.itemClick.emit(i))})("itemMouseEnter",function(i){T(e);let a=m(3);return k(a.onItemMouseEnter(i))}),p()}if(t&2){let e=m(2).$implicit,n=m();o("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("ariaLabelledBy",n.getItemLabelId(e))("inlineStyles",Z(10,ot,n.isItemActive(e)?"flex":"none"))}}function Dt(t,s){if(t&1){let e=z();d(0,"li",9,1)(2,"div",10),w("click",function(i){T(e);let a=m().$implicit,r=m();return k(r.onItemClick(i,a))})("mouseenter",function(i){T(e);let a=m().$implicit,r=m();return k(r.onItemMouseEnter({$event:i,processedItem:a}))}),l(3,wt,3,2,"ng-container",11)(4,Ft,2,5,"ng-container",11),p(),l(5,At,1,12,"p-menubarSub",12),p()}if(t&2){let e=m(),n=e.$implicit,i=e.index,a=m();te(a.getItemProp(n,"styleClass")),o("ngStyle",a.getItemProp(n,"style"))("ngClass",a.getItemClass(n))("tooltipOptions",a.getItemProp(n,"tooltipOptions")),c("id",a.getItemId(n))("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(n))("data-p-focused",a.isItemFocused(n))("data-p-disabled",a.isItemDisabled(n))("aria-label",a.getItemLabel(n))("aria-disabled",a.isItemDisabled(n)||void 0)("aria-haspopup",a.isItemGroup(n)&&!a.getItemProp(n,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(n)?a.isItemActive(n):void 0)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i)),u(2),c("data-pc-section","content"),u(),o("ngIf",!a.itemTemplate),u(),o("ngIf",a.itemTemplate),u(),o("ngIf",a.isItemVisible(n)&&a.isItemGroup(n))}}function Kt(t,s){if(t&1&&l(0,st,1,5,"li",6)(1,Dt,6,20,"li",7),t&2){let e=s.$implicit,n=m();o("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),u(),o("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var Vt=["start"],Bt=["end"],Ot=["item"],Rt=["menuicon"],Ht=["submenuicon"],zt=["menubutton"],qt=["rootmenu"],Zt=["*"],Nt=(t,s)=>({"p-menubar p-component":!0,"p-menubar-mobile":t,"p-menubar-mobile-active":s});function jt(t,s){t&1&&Y(0)}function Qt(t,s){if(t&1&&(d(0,"div",8),l(1,jt,1,0,"ng-container",9),p()),t&2){let e=m();u(),o("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Gt(t,s){t&1&&b(0,"BarsIcon")}function Ut(t,s){}function Wt(t,s){t&1&&l(0,Ut,0,0,"ng-template")}function Jt(t,s){if(t&1){let e=z();d(0,"a",10,2),w("click",function(i){T(e);let a=m();return k(a.menuButtonClick(i))})("keydown",function(i){T(e);let a=m();return k(a.menuButtonKeydown(i))}),l(2,Gt,1,0,"BarsIcon",11)(3,Wt,1,0,null,9),p()}if(t&2){let e=m();c("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),u(2),o("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),o("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Xt(t,s){t&1&&Y(0)}function Yt(t,s){if(t&1&&(d(0,"div",12),l(1,Xt,1,0,"ng-container",9),p()),t&2){let e=m();u(),o("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function en(t,s){t&1&&(d(0,"div",12),$e(1),p())}var fe=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new he;mouseLeft$=this.mouseLeaves.pipe(xe(()=>ge(this.autoHideDelay)),ye(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),tn=(()=>{class t extends pe{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new y;itemMouseEnter=new y;menuFocus=new y;menuBlur=new y;menuKeydown=new y;menubarViewChild;mouseLeaveSubscriber;menubarService=U(fe);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?le(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemClass(e){return B(V({},this.getItemProp(e,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return B(V({},this.getItemProp(e,"class")),{"p-menubar-separator":!0})}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(n=>n.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return v(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(e){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(t)))(i||t)}})();static \u0275cmp=J({type:t,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(n,i){if(n&1&&ee(nt,7),n&2){let a;I(a=f())&&(i.menubarViewChild=a.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",x],autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",E],mobileActive:[2,"mobileActive","mobileActive",x],autoDisplay:[2,"autoDisplay","autoDisplay",x],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",E],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[X],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(n,i){n&1&&(d(0,"ul",4,0),w("focus",function(r){return i.menuFocus.emit(r)})("blur",function(r){return i.menuBlur.emit(r)})("keydown",function(r){return i.menuKeydown.emit(r)}),l(2,Kt,2,2,"ng-template",5),p()),n&2&&(o("ngClass",N(9,it,!i.root,i.root))("tabindex",0)("ngStyle",i.inlineStyles),c("data-pc-section","menu")("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId),u(2),o("ngForOf",i.items))},dependencies:[t,se,ie,Oe,ae,oe,re,me,Re,He,We,_e,Je,Qe,Ge,de,je,A],encapsulation:2})}return t})(),nn=(()=>{class t extends pe{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new y;onBlur=new y;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=R([]);number=R(0);focusedItemInfo=R({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=U(Ie);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${v(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,a,r,h){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=a,this.cd=r,this.menubarService=h,Te(()=>{let _=this.activeItemPath();v(_)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||qe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},a=""){let r=[];return e&&e.forEach((h,_)=>{let g=(a!==""?a+"_":"")+_,C={item:h,index:_,level:n,key:g,parent:i,parentKey:a};C.items=this.createProcessedItems(h.items,n+1,C,g),r.push(C)}),r}bindMatchMediaListener(){if(Q(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?le(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:n,processedItem:i}=e,a=this.isProcessedItemGroup(i),r=F(i.parent);if(this.isSelected(i)){let{index:_,key:g,level:C,parentKey:D,item:K}=i;this.activeItemPath.set(this.activeItemPath().filter($=>g!==$.key&&g.startsWith($.key))),this.focusedItemInfo.set({index:_,level:C,parentKey:D,item:K}),this.dirty=!r,P(this.rootmenu.menubarViewChild.nativeElement)}else if(a)this.onItemChange(e);else{let _=r?i:this.activeItemPath().find(g=>g.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,_?_.index:-1),this.mobileActive=!1,P(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(e){ce()||this.mobileActive||this.onItemChange(e)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let a=this.focusedItemInfo();this.focusedItemInfo.set(B(V({},a),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=G(this.rootmenu.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e){let{processedItem:n,isFocus:i}=e;if(F(n))return;let{index:a,key:r,level:h,parentKey:_,items:g,item:C}=n,D=v(g),K=this.activeItemPath().filter($=>$.parentKey!==_&&$.parentKey!==r);D&&K.push(n),this.focusedItemInfo.set({index:a,level:h,parentKey:_,item:C}),this.activeItemPath.set(K),D&&(this.dirty=!0),i&&P(this.rootmenu.menubarViewChild.nativeElement)}toggle(e){this.mobileActive?(this.mobileActive=!1,be.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,be.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{P(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&P(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),P(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&ze(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return v(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&v(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&v(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,a=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(a=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?F(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(a=>a.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(F(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let a=this.activeItemPath().find(r=>r.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(h=>h.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(a=>a.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let a=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=G(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&G(n,'a[data-pc-section="action"]');i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ue(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?ue(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){Q(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{ce()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){Q(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),i=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(S(Ce),S(Se),S(ke),S(Me),S(Be),S(fe))};static \u0275cmp=J({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,a){if(n&1&&Ee(a,Vt,4)(a,Bt,4)(a,Ot,4)(a,Rt,4)(a,Ht,4)(a,Ze,4),n&2){let r;I(r=f())&&(i.startTemplate=r.first),I(r=f())&&(i.endTemplate=r.first),I(r=f())&&(i.itemTemplate=r.first),I(r=f())&&(i.menuIconTemplate=r.first),I(r=f())&&(i.submenuIconTemplate=r.first),I(r=f())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&ee(zt,5)(qt,5),n&2){let a;I(a=f())&&(i.menubutton=a.first),I(a=f())&&(i.rootmenu=a.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",x],baseZIndex:[2,"baseZIndex","baseZIndex",E],autoDisplay:[2,"autoDisplay","autoDisplay",x],autoHide:[2,"autoHide","autoHide",x],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",E],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[Ke([fe,Ie]),X],ngContentSelectors:Zt,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(n,i){if(n&1&&(we(),d(0,"div",3),l(1,Qt,2,1,"div",4)(2,Jt,4,7,"a",5),d(3,"p-menubarSub",6,0),w("itemClick",function(r){return i.onItemClick(r)})("menuFocus",function(r){return i.onMenuFocus(r)})("menuBlur",function(r){return i.onMenuBlur(r)})("menuKeydown",function(r){return i.onKeyDown(r)})("itemMouseEnter",function(r){return i.onItemMouseEnter(r)}),p(),l(5,Yt,2,1,"div",7)(6,en,2,0,"ng-template",null,1,j),p()),n&2){let a=q(7);te(i.styleClass),o("ngClass",N(23,Nt,i.queryMatches,i.mobileActive))("ngStyle",i.style),c("data-pc-section","root")("data-pc-name","menubar"),u(),o("ngIf",i.startTemplate||i._startTemplate),u(),o("ngIf",i.model&&i.model.length>0),u(),o("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("ariaLabel",i.ariaLabel)("ariaLabelledBy",i.ariaLabelledBy)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),u(2),o("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",a)}},dependencies:[se,ie,ae,oe,re,me,tn,_e,Ue,de,A],encapsulation:2,changeDetection:0})}return t})(),Dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Pe({type:t});static \u0275inj=ve({imports:[nn,A,A]})}return t})();export{nn as a,Dn as b};
