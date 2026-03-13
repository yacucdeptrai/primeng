import{a as Ye,b as Ze}from"./chunk-F4X3V2LA.js";import"./chunk-G3BDHYWP.js";import{c as Pe,d as ie,f as ae,g as oe,h as le}from"./chunk-KMVDOPWF.js";import{a as v,d as tt,e as Ee}from"./chunk-I6RUY6VJ.js";import{a as C,b as et}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as Te,b as _e}from"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as Je,ba as Xe,f as qe,g as je,l as Qe,n as Ge,v as ze,x as We}from"./chunk-DEL7GGHP.js";import{d as He,e as ee,f as Ce,i as j}from"./chunk-UHCZASEU.js";import{Ga as Ue,Ja as ue,Q as T,R as te,S as ne,e as pe,h as I,j as Ve,m as Se,o as ce,oa as Ke,qa as Q,s as Ne,va as Be,wa as de}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as be,l as Ie,m as R,p as ve,q as ye,u as q}from"./chunk-O4W5DSIC.js";import{$b as k,Ab as u,Eb as x,Ec as Re,Fb as b,Gb as Le,Hb as Y,Ja as J,Ka as X,M as we,Mb as M,N as De,O as fe,Ob as m,Qa as p,Qc as O,Rb as Fe,Rc as Z,S as he,Sb as me,Tb as F,Ub as $,X as D,Xb as w,Y as A,Za as re,Zb as $e,ac as s,bc as h,da as L,eb as f,fb as xe,ha as W,jb as se,kb as _,kc as K,la as Ae,lc as B,ma as N,mc as U,nc as Oe,rb as S,xb as o,yb as l,zb as r,zc as P}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["panel-menu-accessibility-doc"]],standalone:!1,decls:176,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,i){t&1&&(l(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),r(),l(4,"p"),s(5," Accordion header elements have a "),l(6,"i"),s(7,"button"),r(),s(8," role, an "),l(9,"i"),s(10,"aria-label"),r(),s(11," defined using the "),l(12,"i"),s(13,"label"),r(),s(14," property of the menuitem model and "),l(15,"i"),s(16,"aria-controls"),r(),s(17," to define the id of the content section along with "),l(18,"i"),s(19,"aria-expanded"),r(),s(20," for the visibility state. "),r(),l(21,"p"),s(22,"The content of an accordion panel uses "),l(23,"i"),s(24,"region"),r(),s(25," role, defines an id that matches the "),l(26,"i"),s(27,"aria-controls"),r(),s(28," of the header and "),l(29,"i"),s(30,"aria-labelledby"),r(),s(31," referring to the id of the header."),r(),l(32,"p"),s(33," The tree elements has a "),l(34,"i"),s(35,"tree"),r(),s(36," as the role and each menu item has a "),l(37,"i"),s(38,"treeitem"),r(),s(39," role along with "),l(40,"i"),s(41,"aria-label"),r(),s(42,", "),l(43,"i"),s(44,"aria-selected"),r(),s(45," and "),l(46,"i"),s(47,"aria-expanded"),r(),s(48," attributes. The container element of a treenode has the "),l(49,"i"),s(50,"group"),r(),s(51," role. The "),l(52,"i"),s(53,"aria-setsize"),r(),s(54,", "),l(55,"i"),s(56,"aria-posinset"),r(),s(57," and "),l(58,"i"),s(59,"aria-level"),r(),s(60," attributes are calculated implicitly and added to each treeitem. "),r(),l(61,"h3"),s(62,"Header Keyboard Support"),r(),l(63,"div",0)(64,"table",1)(65,"thead")(66,"tr")(67,"th"),s(68,"Key"),r(),l(69,"th"),s(70,"Function"),r()()(),l(71,"tbody")(72,"tr")(73,"td")(74,"i"),s(75,"tab"),r()(),l(76,"td"),s(77,"Adds focus to the first header when focus moves in to the component, if there is already a focused tab header then moves the focus out of the component based on the page tab sequence."),r()(),l(78,"tr")(79,"td")(80,"i"),s(81,"enter"),r()(),l(82,"td"),s(83,"Toggles the visibility of the content."),r()(),l(84,"tr")(85,"td")(86,"i"),s(87,"space"),r()(),l(88,"td"),s(89,"Toggles the visibility of the content."),r()(),l(90,"tr")(91,"td")(92,"i"),s(93,"down arrow"),r()(),l(94,"td"),s(95,"If panel is collapsed then moves focus to the next header, otherwise first treenode of the panel receives the focus."),r()(),l(96,"tr")(97,"td")(98,"i"),s(99,"up arrow"),r()(),l(100,"td"),s(101,"If previous panel is collapsed then moves focus to the previous header, otherwise last treenode of the previous panel receives the focus."),r()(),l(102,"tr")(103,"td")(104,"i"),s(105,"home"),r()(),l(106,"td"),s(107,"Moves focus to the first header."),r()(),l(108,"tr")(109,"td")(110,"i"),s(111,"end"),r()(),l(112,"td"),s(113,"Moves focus to the last header."),r()()()()(),l(114,"h3"),s(115,"Tree Keyboard Support"),r(),l(116,"div",0)(117,"table",1)(118,"thead")(119,"tr")(120,"th"),s(121,"Key"),r(),l(122,"th"),s(123,"Function"),r()()(),l(124,"tbody")(125,"tr")(126,"td")(127,"i"),s(128,"tab"),r()(),l(129,"td"),s(130,"Moves focus to the next focusable element in the page tab order."),r()(),l(131,"tr")(132,"td")(133,"i"),s(134,"shift"),r(),s(135," + "),l(136,"i"),s(137,"tab"),r()(),l(138,"td"),s(139,"Moves focus to the previous focusable element in the page tab order."),r()(),l(140,"tr")(141,"td")(142,"i"),s(143,"enter"),r()(),l(144,"td"),s(145,"Activates the focused treenode."),r()(),l(146,"tr")(147,"td")(148,"i"),s(149,"space"),r()(),l(150,"td"),s(151,"Activates the focused treenode."),r()(),l(152,"tr")(153,"td")(154,"i"),s(155,"down arrow"),r()(),l(156,"td"),s(157,"Moves focus to the next treenode."),r()(),l(158,"tr")(159,"td")(160,"i"),s(161,"up arrow"),r()(),l(162,"td"),s(163,"Moves focus to the previous treenode."),r()(),l(164,"tr")(165,"td")(166,"i"),s(167,"right arrow"),r()(),l(168,"td"),s(169,"If node is closed, opens the node otherwise moves focus to the first child node."),r()(),l(170,"tr")(171,"td")(172,"i"),s(173,"left arrow"),r()(),l(174,"td"),s(175,"If node is open, closes the node otherwise moves focus to the parent node."),r()()()()()()())},dependencies:[v],encapsulation:2})}return n})();var ft=({dt:n})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${n("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${n("panelmenu.panel.background")};
    border-width: ${n("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${n("panelmenu.panel.border.color")};
    color: ${n("panelmenu.panel.color")};
    border-radius: ${n("panelmenu.panel.border.radius")};
    padding: ${n("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${n("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${n("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${n("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${n("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${n("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${n("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${n("panelmenu.item.border.radius")};
    transition: background ${n("panelmenu.transition.duration")}, color ${n("panelmenu.transition.duration")}, outline-color ${n("panelmenu.transition.duration")}, box-shadow ${n("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${n("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${n("panelmenu.item.gap")};
    padding: ${n("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${n("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${n("panelmenu.submenu.icon.color")};
}

.p-panelmenu-header:not(.p-panelmenu-header-active)  .p-panelmenu-header-content .p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${n("panelmenu.item.focus.background")};
    color: ${n("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${n("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${n("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${n("panelmenu.item.focus.background")};
    color: ${n("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${n("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${n("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${n("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${n("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${n("panelmenu.item.gap")};
    padding: ${n("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${n("panelmenu.item.border.radius")};
    transition: background ${n("panelmenu.transition.duration")}, color ${n("panelmenu.transition.duration")}, outline-color ${n("panelmenu.transition.duration")}, box-shadow ${n("panelmenu.transition.duration")};
    color: ${n("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${n("panelmenu.item.focus.background")};
    color: ${n("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${n("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${n("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${n("panelmenu.item.focus.background")};
    color: ${n("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${n("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${n("panelmenu.submenu.icon.focus.color")};
}


/*For PrimeNG*/

.p-panelmenu-item:not(.ng-animating) {
    overflow: hidden;
}

.p-panelmenu-panel {
    overflow: hidden;
}

`,ht={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:({instance:n,item:c})=>["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(c)&&!!c.items,"p-disabled":n.isItemDisabled(c)}],headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:({instance:n,processedItem:c})=>["p-panelmenu-item",{"p-focus":n.isItemFocused(c),"p-disabled":n.isItemDisabled(c)}],itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},Me=(()=>{class n extends Ue{name="panelmenu";theme=ft;classes=ht;static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(n)))(i||n)}})();static \u0275prov=De({token:n,factory:n.\u0275fac})}return n})();var bt=["list"],It=()=>({"p-panelmenu-submenu":!0}),at=n=>({"p-disabled":n}),ot=()=>({exact:!1}),lt=n=>({$implicit:n});function vt(n,c){n&1&&u(0,"li",7)}function yt(n,c){if(n&1&&u(0,"AngleDownIcon",21),n&2){let e=m(6).$implicit,t=m();o("styleClass","p-panelmenu-submenu-icon")("ngStyle",t.getItemProp(e,"iconStyle"))}}function Ct(n,c){if(n&1&&u(0,"AngleRightIcon",21),n&2){let e=m(6).$implicit,t=m();o("styleClass","p-panelmenu-submenu-icon")("ngStyle",t.getItemProp(e,"iconStyle"))}}function St(n,c){if(n&1&&(x(0),_(1,yt,1,2,"AngleDownIcon",20)(2,Ct,1,2,"AngleRightIcon",20),b()),n&2){let e=m(5).$implicit,t=m();p(),o("ngIf",t.isItemActive(e)),p(),o("ngIf",!t.isItemActive(e))}}function Pt(n,c){}function Tt(n,c){n&1&&_(0,Pt,0,0,"ng-template")}function Et(n,c){if(n&1&&(x(0),_(1,St,3,2,"ng-container",10)(2,Tt,1,0,null,19),b()),n&2){let e=m(5);p(),o("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),p(),o("ngTemplateOutlet",e.panelMenu.submenuIconTemplate||e.panelMenu._submenuIconTemplate)}}function Mt(n,c){if(n&1&&u(0,"span",22),n&2){let e=m(4).$implicit,t=m();o("ngClass",e.icon)("ngStyle",t.getItemProp(e,"iconStyle"))}}function kt(n,c){if(n&1&&(l(0,"span",23),s(1),r()),n&2){let e=m(4).$implicit,t=m();p(),h(t.getItemProp(e,"label"))}}function wt(n,c){if(n&1&&u(0,"span",24),n&2){let e=m(4).$implicit,t=m();o("innerHTML",t.getItemProp(e,"label"),J)}}function Dt(n,c){if(n&1&&(l(0,"span",25),s(1),r()),n&2){let e=m(4).$implicit;o("ngClass",e.badgeStyleClass),p(),h(e.badge)}}function At(n,c){if(n&1&&(l(0,"a",15),_(1,Et,3,2,"ng-container",10)(2,Mt,1,2,"span",16)(3,kt,2,1,"span",17)(4,wt,1,1,"ng-template",null,1,P)(6,Dt,2,2,"span",18),r()),n&2){let e=w(5),t=m(3).$implicit,i=m();o("ngClass",U(10,at,i.getItemProp(t,"disabled")))("target",i.getItemProp(t,"target")),S("href",i.getItemProp(t,"url"),X)("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),p(),o("ngIf",i.isItemGroup(t)),p(),o("ngIf",t.icon),p(),o("ngIf",(t.item==null?null:t.item.escape)!==!1)("ngIfElse",e),p(3),o("ngIf",t.badge)}}function Lt(n,c){if(n&1&&u(0,"AngleDownIcon",21),n&2){let e=m(6).$implicit,t=m();o("styleClass","p-panelmenu-submenu-icon")("ngStyle",t.getItemProp(e,"iconStyle"))}}function Ft(n,c){if(n&1&&u(0,"AngleRightIcon",21),n&2){let e=m(6).$implicit,t=m();o("styleClass","p-panelmenu-submenu-icon")("ngStyle",t.getItemProp(e,"iconStyle"))}}function $t(n,c){if(n&1&&(x(0),_(1,Lt,1,2,"AngleDownIcon",20)(2,Ft,1,2,"AngleRightIcon",20),b()),n&2){let e=m(5).$implicit,t=m();p(),o("ngIf",t.isItemActive(e)),p(),o("ngIf",!t.isItemActive(e))}}function Ot(n,c){}function Rt(n,c){n&1&&_(0,Ot,0,0,"ng-template")}function Ht(n,c){if(n&1&&(x(0),_(1,$t,3,2,"ng-container",10)(2,Rt,1,0,null,19),b()),n&2){let e=m(5);p(),o("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),p(),o("ngTemplateOutlet",e.panelMenu.submenuIconTemplate&&e.panelMenu._submenuIconTemplate)}}function Vt(n,c){if(n&1&&u(0,"span",22),n&2){let e=m(4).$implicit,t=m();o("ngClass",e.icon)("ngStyle",t.getItemProp(e,"iconStyle"))}}function Nt(n,c){if(n&1&&(l(0,"span",23),s(1),r()),n&2){let e=m(4).$implicit,t=m();p(),h(t.getItemProp(e,"label"))}}function Kt(n,c){if(n&1&&u(0,"span",24),n&2){let e=m(4).$implicit,t=m();o("innerHTML",t.getItemProp(e,"label"),J)}}function Bt(n,c){if(n&1&&(l(0,"span",25),s(1),r()),n&2){let e=m(4).$implicit,t=m();o("ngClass",t.getItemProp(e,"badgeStyleClass")),p(),h(t.getItemProp(e,"badge"))}}function Ut(n,c){if(n&1&&(l(0,"a",26),_(1,Ht,3,2,"ng-container",10)(2,Vt,1,2,"span",16)(3,Nt,2,1,"span",17)(4,Kt,1,1,"ng-template",null,2,P)(6,Bt,2,2,"span",18),r()),n&2){let e=w(5),t=m(3).$implicit,i=m();o("routerLink",i.getItemProp(t,"routerLink"))("queryParams",i.getItemProp(t,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(t,"routerLinkActiveOptions")||B(20,ot))("ngClass",U(21,at,i.getItemProp(t,"disabled")))("target",i.getItemProp(t,"target"))("fragment",i.getItemProp(t,"fragment"))("queryParamsHandling",i.getItemProp(t,"queryParamsHandling"))("preserveFragment",i.getItemProp(t,"preserveFragment"))("skipLocationChange",i.getItemProp(t,"skipLocationChange"))("replaceUrl",i.getItemProp(t,"replaceUrl"))("state",i.getItemProp(t,"state")),S("title",i.getItemProp(t,"title"))("data-pc-section","action")("tabindex",i.parentExpanded?"0":"-1"),p(),o("ngIf",i.isItemGroup(t)),p(),o("ngIf",t.icon),p(),o("ngIf",i.getItemProp(t,"escape")!==!1)("ngIfElse",e),p(3),o("ngIf",t.badge)}}function qt(n,c){if(n&1&&(x(0),_(1,At,7,12,"a",13)(2,Ut,7,23,"a",14),b()),n&2){let e=m(2).$implicit,t=m();p(),o("ngIf",!t.getItemProp(e,"routerLink")),p(),o("ngIf",t.getItemProp(e,"routerLink"))}}function jt(n,c){}function Qt(n,c){n&1&&_(0,jt,0,0,"ng-template")}function Gt(n,c){if(n&1&&(x(0),_(1,Qt,1,0,null,27),b()),n&2){let e=m(2).$implicit,t=m();p(),o("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",U(2,lt,e.item))}}function zt(n,c){if(n&1){let e=Y();l(0,"p-panelmenu-sub",28),M("itemToggle",function(i){D(e);let a=m(3);return A(a.onItemToggle(i))}),r()}if(n&2){let e=m(2).$implicit,t=m();o("id",t.getItemId(e)+"_list")("panelId",t.panelId)("items",e==null?null:e.items)("itemTemplate",t.itemTemplate)("transitionOptions",t.transitionOptions)("focusedItemId",t.focusedItemId)("activeItemPath",t.activeItemPath)("level",t.level+1)("parentExpanded",!!t.parentExpanded&&t.isItemExpanded(e))}}function Wt(n,c){if(n&1){let e=Y();l(0,"li",8)(1,"div",9),M("click",function(i){D(e);let a=m().$implicit,d=m();return A(d.onItemClick(i,a))}),_(2,qt,3,2,"ng-container",10)(3,Gt,2,4,"ng-container",10),r(),l(4,"div",11),_(5,zt,1,9,"p-panelmenu-sub",12),r()()}if(n&2){let e=m(),t=e.$implicit,i=e.index,a=m();k(a.getItemProp(t,"styleClass")),$e("p-hidden",t.visible===!1)("p-focus",a.isItemFocused(t)&&!a.isItemDisabled(t)),o("ngClass",a.getItemClass(t))("ngStyle",a.getItemProp(t,"style"))("pTooltip",a.getItemProp(t,"tooltip"))("tooltipOptions",a.getItemProp(t,"tooltipOptions")),S("id",a.getItemId(t))("aria-label",a.getItemProp(t,"label"))("aria-expanded",a.isItemGroup(t)?a.isItemActive(t):void 0)("aria-level",a.level+1)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i))("data-p-disabled",a.isItemDisabled(t)),p(2),o("ngIf",!a.itemTemplate),p(),o("ngIf",a.itemTemplate),p(),o("@submenu",a.getAnimation(t)),p(),o("ngIf",a.isItemVisible(t)&&a.isItemGroup(t)&&a.isItemExpanded(t))}}function Jt(n,c){if(n&1&&_(0,vt,1,0,"li",5)(1,Wt,6,21,"li",6),n&2){let e=c.$implicit,t=m();o("ngIf",e.separator),p(),o("ngIf",!e.separator&&t.isItemVisible(e))}}var Xt=["submenu"],Yt=["submenuicon"],Zt=["item"],en=["container"],tn=(n,c)=>({"p-component p-panelmenu-header":!0,"p-panelmenu-header-active":n,"p-disabled":c}),nn=n=>({"p-panelmenu-expanded":n});function an(n,c){n&1&&u(0,"ChevronDownIcon",20),n&2&&o("styleClass","p-panelmenu-submenu-icon")}function on(n,c){n&1&&u(0,"ChevronRightIcon",20),n&2&&o("styleClass","p-panelmenu-submenu-icon")}function ln(n,c){if(n&1&&(x(0),_(1,an,1,1,"ChevronDownIcon",19)(2,on,1,1,"ChevronRightIcon",19),b()),n&2){let e=m(5).$implicit,t=m();p(),o("ngIf",t.isItemActive(e)),p(),o("ngIf",!t.isItemActive(e))}}function rn(n,c){}function sn(n,c){n&1&&_(0,rn,0,0,"ng-template")}function mn(n,c){if(n&1&&(x(0),_(1,ln,3,2,"ng-container",9)(2,sn,1,0,null,18),b()),n&2){let e=m(5);p(),o("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),p(),o("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function pn(n,c){if(n&1&&u(0,"span",21),n&2){let e=m(4).$implicit,t=m();o("ngClass",e.icon)("ngStyle",t.getItemProp(e,"iconStyle"))}}function cn(n,c){if(n&1&&(l(0,"span",22),s(1),r()),n&2){let e=m(4).$implicit,t=m();p(),h(t.getItemProp(e,"label"))}}function dn(n,c){if(n&1&&u(0,"span",23),n&2){let e=m(4).$implicit,t=m();o("innerHTML",t.getItemProp(e,"label"),J)}}function un(n,c){if(n&1&&(l(0,"span",24),s(1),r()),n&2){let e=m(4).$implicit,t=m();o("ngClass",t.getItemProp(e,"badgeStyleClass")),p(),h(t.getItemProp(e,"badge"))}}function _n(n,c){if(n&1&&(l(0,"a",14),_(1,mn,3,2,"ng-container",9)(2,pn,1,2,"span",15)(3,cn,2,1,"span",16)(4,dn,1,1,"ng-template",null,1,P)(6,un,2,2,"span",17),r()),n&2){let e=w(5),t=m(3).$implicit,i=m();o("target",i.getItemProp(t,"target")),S("href",i.getItemProp(t,"url"),X)("tabindex",-1)("title",i.getItemProp(t,"title"))("data-pc-section","headeraction"),p(),o("ngIf",i.isItemGroup(t)),p(),o("ngIf",t.icon),p(),o("ngIf",i.getItemProp(t,"escape")!==!1)("ngIfElse",e),p(3),o("ngIf",i.getItemProp(t,"badge"))}}function gn(n,c){if(n&1&&(x(0),_(1,_n,7,10,"a",13),b()),n&2){let e=m(2).$implicit,t=m();p(),o("ngIf",!t.getItemProp(e,"routerLink"))}}function fn(n,c){n&1&&Le(0)}function hn(n,c){n&1&&u(0,"ChevronDownIcon",20),n&2&&o("styleClass","p-panelmenu-submenu-icon")}function xn(n,c){n&1&&u(0,"ChevronRightIcon",20),n&2&&o("styleClass","p-panelmenu-submenu-icon")}function bn(n,c){if(n&1&&(x(0),_(1,hn,1,1,"ChevronDownIcon",19)(2,xn,1,1,"ChevronRightIcon",19),b()),n&2){let e=m(4).$implicit,t=m();p(),o("ngIf",t.isItemActive(e)),p(),o("ngIf",!t.isItemActive(e))}}function In(n,c){}function vn(n,c){n&1&&_(0,In,0,0,"ng-template")}function yn(n,c){if(n&1&&(x(0),_(1,bn,3,2,"ng-container",9)(2,vn,1,0,null,18),b()),n&2){let e=m(4);p(),o("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),p(),o("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function Cn(n,c){if(n&1&&u(0,"span",21),n&2){let e=m(3).$implicit,t=m();o("ngClass",e.icon)("ngStyle",t.getItemProp(e,"iconStyle"))}}function Sn(n,c){if(n&1&&(l(0,"span",22),s(1),r()),n&2){let e=m(3).$implicit,t=m();p(),h(t.getItemProp(e,"label"))}}function Pn(n,c){if(n&1&&u(0,"span",23),n&2){let e=m(3).$implicit,t=m();o("innerHTML",t.getItemProp(e,"label"),J)}}function Tn(n,c){if(n&1&&(l(0,"span",24),s(1),r()),n&2){let e=m(3).$implicit,t=m();o("ngClass",t.getItemProp(e,"badgeStyleClass")),p(),h(t.getItemProp(e,"badge"))}}function En(n,c){if(n&1&&(l(0,"a",25),_(1,yn,3,2,"ng-container",9)(2,Cn,1,2,"span",15)(3,Sn,2,1,"span",16)(4,Pn,1,1,"ng-template",null,2,P)(6,Tn,2,2,"span",17),r()),n&2){let e=w(5),t=m(2).$implicit,i=m();o("routerLink",i.getItemProp(t,"routerLink"))("queryParams",i.getItemProp(t,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",i.getItemProp(t,"routerLinkActiveOptions")||B(18,ot))("target",i.getItemProp(t,"target"))("fragment",i.getItemProp(t,"fragment"))("queryParamsHandling",i.getItemProp(t,"queryParamsHandling"))("preserveFragment",i.getItemProp(t,"preserveFragment"))("skipLocationChange",i.getItemProp(t,"skipLocationChange"))("replaceUrl",i.getItemProp(t,"replaceUrl"))("state",i.getItemProp(t,"state")),S("tabindex",-1)("data-pc-section","headeraction"),p(),o("ngIf",i.isItemGroup(t)),p(),o("ngIf",t.icon),p(),o("ngIf",i.getItemProp(t,"escape")!==!1)("ngIfElse",e),p(3),o("ngIf",i.getItemProp(t,"badge"))}}function Mn(n,c){if(n&1){let e=Y();l(0,"div",26),M("@rootItem.done",function(){D(e);let i=m(3);return A(i.onToggleDone())}),l(1,"div",27)(2,"p-panelMenuList",28),M("headerFocus",function(i){D(e);let a=m(3);return A(a.updateFocusedHeader(i))}),r()()()}if(n&2){let e=m(2),t=e.$implicit,i=e.index,a=m();o("@rootItem",a.getAnimation(t))("ngClass",U(14,nn,a.isItemActive(t))),S("id",a.getContentId(t,i))("aria-labelledby",a.getHeaderId(t,i))("data-pc-section","toggleablecontent"),p(),S("data-pc-section","menucontent"),p(),o("panelId",a.getPanelId(i,t))("items",a.getItemProp(t,"items"))("itemTemplate",a.itemTemplate||a._itemTemplate)("transitionOptions",a.transitionOptions)("root",!0)("activeItem",a.activeItem())("tabindex",a.tabindex)("parentExpanded",a.isItemActive(t))}}function kn(n,c){if(n&1){let e=Y();l(0,"div",6)(1,"div",7),M("click",function(i){D(e);let a=m(),d=a.$implicit,g=a.index,V=m();return A(V.onHeaderClick(i,d,g))})("keydown",function(i){D(e);let a=m(),d=a.$implicit,g=a.index,V=m();return A(V.onHeaderKeyDown(i,d,g))}),l(2,"div",8),_(3,gn,2,1,"ng-container",9)(4,fn,1,0,"ng-container",10)(5,En,7,19,"a",11),r()(),_(6,Mn,3,16,"div",12),r()}if(n&2){let e=m(),t=e.$implicit,i=e.index,a=m();o("ngClass",a.getItemProp(t,"headerClass"))("ngStyle",a.getItemProp(t,"style")),S("data-pc-section","panel"),p(),k(a.getItemProp(t,"styleClass")),o("ngClass",Oe(23,tn,a.isItemActive(t)&&!!t.items,a.isItemDisabled(t)))("ngStyle",a.getItemProp(t,"style"))("pTooltip",a.getItemProp(t,"tooltip"))("tabindex",0)("tooltipOptions",a.getItemProp(t,"tooltipOptions")),S("id",a.getHeaderId(t,i))("aria-expanded",a.isItemActive(t))("aria-label",a.getItemProp(t,"label"))("aria-controls",a.getContentId(t,i))("aria-disabled",a.isItemDisabled(t))("data-p-highlight",a.isItemActive(t))("data-p-disabled",a.isItemDisabled(t))("data-pc-section","header"),p(2),o("ngIf",!a.itemTemplate&&!a._itemTemplate),p(),o("ngTemplateOutlet",a.itemTemplate)("ngTemplateOutletContext",U(26,lt,t)),p(),o("ngIf",a.getItemProp(t,"routerLink")),p(),o("ngIf",a.isItemGroup(t))}}function wn(n,c){if(n&1&&(x(0),_(1,kn,7,28,"div",5),b()),n&2){let e=c.$implicit,t=m();p(),o("ngIf",t.isItemVisible(e))}}var Dn=(()=>{class n extends ue{panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new L;menuFocus=new L;menuBlur=new L;menuKeyDown=new L;listViewChild;panelMenu=he(we(()=>y));getItemId(e){return e.item?.id??`${this.panelId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemClass(e){return{"p-panelmenu-item":!0,"p-disabled":this.isItemDisabled(e),"p-focus":this.isItemFocused(e)}}getItemProp(e,t,i){return e&&e.item?ce(e.item[t],i):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemExpanded(e){return e.expanded}isItemActive(e){return this.isItemExpanded(e)||this.activeItemPath.some(t=>t&&t.key===e.key)}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return I(e.items)}getAnimation(e){return this.isItemActive(e)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemClick(e,t){this.isItemDisabled(t)||(this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemToggle.emit({processedItem:t,expanded:!this.isItemActive(t)}))}onItemToggle(e){this.itemToggle.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(n)))(i||n)}})();static \u0275cmp=f({type:n,selectors:[["p-panelMenuSub"],["p-panelmenu-sub"]],viewQuery:function(t,i){if(t&1&&me(bt,5),t&2){let a;F(a=$())&&(i.listViewChild=a.first)}},inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:[2,"level","level",Z],activeItemPath:"activeItemPath",root:[2,"root","root",O],tabindex:[2,"tabindex","tabindex",Z],transitionOptions:"transitionOptions",parentExpanded:[2,"parentExpanded","parentExpanded",O]},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},features:[se],decls:3,vars:7,consts:[["list",""],["htmlLabel",""],["htmlRouteLabel",""],["role","tree",3,"focusin","focusout","keydown","ngClass","tabindex"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-panelmenu-item-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-panelmenu-item-link",3,"ngClass","target",4,"ngIf"],["class","p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-panelmenu-item-link",3,"ngClass","target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-item-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-item-label"],[1,"p-panelmenu-item-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemToggle","id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded"]],template:function(t,i){t&1&&(l(0,"ul",3,0),M("focusin",function(d){return i.menuFocus.emit(d)})("focusout",function(d){return i.menuBlur.emit(d)})("keydown",function(d){return i.menuKeyDown.emit(d)}),_(2,Jt,2,2,"ng-template",4),r()),t&2&&(o("ngClass",B(6,It))("tabindex",-1),S("aria-activedescendant",i.focusedItemId)("data-pc-section","menu")("aria-hidden",!i.parentExpanded),p(2),o("ngForOf",i.items))},dependencies:[n,q,be,Ie,R,ye,ve,j,ee,Ce,_e,Te,Qe,Ge,de],encapsulation:2,data:{animation:[Pe("submenu",[oe("hidden",ae({height:"0"})),oe("visible",ae({height:"*"})),le("visible <=> hidden",[ie("{{transitionParams}}")]),le("void => *",ie(0))])]}})}return n})(),An=(()=>{class n extends ue{panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new L;headerFocus=new L;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=W(null);activeItemPath=W([]);processedItems=W([]);visibleItems=Re(()=>{let e=this.processedItems();return this.flatItems(e)});get focusedItemId(){let e=this.focusedItem();return e&&e.item?.id?e.item.id:I(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}ngOnChanges(e){this.processedItems.set(this.createProcessedItems(e?.items?.currentValue||this.items||[]))}getItemProp(e,t){return e&&e.item?ce(e.item[t]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemActive(e){return this.activeItemPath().some(t=>t.key===e.parentKey)}isItemGroup(e){return I(e.items)}isElementInPanel(e,t){let i=e.currentTarget.closest('[data-pc-section="panel"]');return i&&i.contains(t)}isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e)&&!e.separator}findFirstItem(){return this.visibleItems().find(e=>this.isValidItem(e))}findLastItem(){return Se(this.visibleItems(),e=>this.isValidItem(e))}findItemByEventTarget(e){let t=e;for(;t&&t.tagName?.toLowerCase()!=="li";)t=t?.parentNode;return t?.id&&this.visibleItems().find(i=>this.isValidItem(i)&&`${this.panelId}_${i.key}`===t.id)}createProcessedItems(e,t=0,i={},a=""){let d=[];return e&&e.forEach((g,V)=>{let ke=(a!==""?a+"_":"")+V,ge={icon:g.icon,expanded:g.expanded,separator:g.separator,item:g,index:V,level:t,key:ke,parent:i,parentKey:a};ge.items=this.createProcessedItems(g.items,t+1,ge,ke),d.push(ge)}),d}findProcessedItemByItemKey(e,t,i=0){if(t=t||this.processedItems(),t&&t.length)for(let a=0;a<t.length;a++){let d=t[a];if(this.getItemProp(d,"key")===e)return d;let g=this.findProcessedItemByItemKey(e,d.items,i+1);if(g)return g}}flatItems(e,t=[]){return e&&e.forEach(i=>{this.isVisibleItem(i)&&(t.push(i),this.flatItems(i.items,t))}),t}changeFocusedItem(e){let{originalEvent:t,processedItem:i,focusOnNext:a,selfCheck:d,allowHeaderFocus:g=!0}=e;I(this.focusedItem())&&this.focusedItem().key!==i.key?(this.focusedItem.set(i),this.scrollInView()):g&&this.headerFocus.emit({originalEvent:t,focusOnNext:a,selfCheck:d})}scrollInView(){let e=T(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(e){if(!this.focused){this.focused=!0;let t=this.focusedItem()||(this.isElementInPanel(e,e.relatedTarget)?this.findItemByEventTarget(e.target)||this.findFirstItem():this.findLastItem());e.relatedTarget!==null&&this.focusedItem.set(t)}}onBlur(e){let t=e.relatedTarget;this.focused&&!this.el.nativeElement.contains(t)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(e){let{processedItem:t,expanded:i}=e;t.item&&(t.item.expanded=!t.item.expanded),this.processedItems.set(this.createProcessedItems(this.items||[],0,{},""));let a=this.activeItemPath().filter(d=>d.parentKey!==t.parentKey);i&&a.push(t),this.activeItemPath.set(a),this.focusedItem.set(t)}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ne(e.key)&&this.searchItems(e,e.key);break}}onArrowDownKey(e){let t=I(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()}onArrowUpKey(e){let t=I(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()}onArrowLeftKey(e){if(I(this.focusedItem())){if(this.activeItemPath().some(i=>i.key===this.focusedItem().key)){let i=this.activeItemPath().filter(a=>a.key!==this.focusedItem().key);this.activeItemPath.set(i)}else{let i=I(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(i)}e.preventDefault()}}onArrowRightKey(e){if(I(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(a=>a.key===this.focusedItem().key))this.onArrowDownKey(e);else{let a=this.activeItemPath().filter(d=>d.parentKey!==this.focusedItem().parentKey);a.push(this.focusedItem()),this.activeItemPath.set(a)}e.preventDefault()}}onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()}onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()}onEnterKey(e){if(I(this.focusedItem())){let t=T(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(T(t,'[data-pc-section="action"]')||T(t,"a,button"));i?i.click():t&&t.click()}e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextItem(e){let t=this.visibleItems().findIndex(a=>a.key===e.key);return(t<this.visibleItems().length-1?this.visibleItems().slice(t+1).find(a=>this.isValidItem(a)):void 0)||e}findPrevItem(e){let t=this.visibleItems().findIndex(a=>a.key===e.key);return(t>0?Se(this.visibleItems().slice(0,t),a=>this.isValidItem(a)):void 0)||e}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=null,a=!1;if(I(this.focusedItem())){let d=this.visibleItems().findIndex(g=>g.key===this.focusedItem().key);i=this.visibleItems().slice(d).find(g=>this.isItemMatched(g)),i=pe(i)?this.visibleItems().slice(0,d).find(g=>this.isItemMatched(g)):i}else i=this.visibleItems().find(d=>this.isItemMatched(d));return I(i)&&(a=!0),pe(i)&&pe(this.focusedItem())&&(i=this.findFirstItem()),I(i)&&this.changeFocusedItem({originalEvent:e,processedItem:i,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(n)))(i||n)}})();static \u0275cmp=f({type:n,selectors:[["p-panelMenuList"],["p-panel-menu-list"]],viewQuery:function(t,i){if(t&1&&me(Xt,5),t&2){let a;F(a=$())&&(i.subMenuViewChild=a.first)}},inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:[2,"parentExpanded","parentExpanded",O],expanded:[2,"expanded","expanded",O],transitionOptions:"transitionOptions",root:[2,"root","root",O],tabindex:[2,"tabindex","tabindex",Z],activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[se,Ae],decls:2,vars:10,consts:[["submenu",""],[3,"itemToggle","keydown","menuFocus","menuBlur","root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded"]],template:function(t,i){t&1&&(l(0,"p-panelmenu-sub",1,0),M("itemToggle",function(d){return i.onItemToggle(d)})("keydown",function(d){return i.onKeyDown(d)})("menuFocus",function(d){return i.onFocus(d)})("menuBlur",function(d){return i.onBlur(d)}),r()),t&2&&o("root",!0)("id",i.panelId+"_list")("panelId",i.panelId)("tabindex",i.tabindex)("itemTemplate",i.itemTemplate)("focusedItemId",i.focused?i.focusedItemId:void 0)("activeItemPath",i.activeItemPath())("transitionOptions",i.transitionOptions)("items",i.processedItems())("parentExpanded",i.parentExpanded)},dependencies:[q,Dn,j,_e,de],encapsulation:2,changeDetection:0})}return n})(),y=(()=>{class n extends ue{model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;containerViewChild;submenuIconTemplate;itemTemplate;templates;_submenuIconTemplate;_itemTemplate;animating;activeItem=W(null);_componentStyle=he(Me);ngOnInit(){super.ngOnInit(),this.id=this.id||Ke("pn_id_")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}collapseAll(){for(let e of this.model)e.expanded&&(e.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1,this.cd.markForCheck()}changeActiveItem(e,t,i,a=!1){if(!this.isItemDisabled(t)){let d=a?t:this.activeItem&&Ve(t,this.activeItem)?null:t;this.activeItem.set(d)}}getAnimation(e){return e.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(e,t){return e?ce(e[t]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemActive(e){return e.expanded}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemGroup(e){return I(e.items)}getPanelId(e,t){return t&&t.id?t.id:`${this.id}_${e}`}getHeaderId(e,t){return e.id?e.id+"_header":`${this.getPanelId(t)}_header`}getContentId(e,t){return e.id?e.id+"_content":`${this.getPanelId(t)}_content`}updateFocusedHeader(e){let{originalEvent:t,focusOnNext:i,selfCheck:a}=e,d=t.currentTarget.closest('[data-pc-section="panel"]'),g=a?T(d,'[data-pc-section="header"]'):i?this.findNextHeader(d):this.findPrevHeader(d);g?this.changeFocusedHeader(t,g):i?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)}changeFocusedHeader(e,t){t&&te(t)}findNextHeader(e,t=!1){let i=t?e:e.nextElementSibling,a=T(i,'[data-pc-section="header"]');return a?ne(a,"data-p-disabled")?this.findNextHeader(a.parentElement):a:null}findPrevHeader(e,t=!1){let i=t?e:e.previousElementSibling,a=T(i,'[data-pc-section="header"]');return a?ne(a,"data-p-disabled")?this.findPrevHeader(a.parentElement):a:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(e,t,i){if(this.isItemDisabled(t)){e.preventDefault();return}if(t.command&&t.command({originalEvent:e,item:t}),!this.multiple)for(let a of this.model)t!==a&&a.expanded&&(a.expanded=!1);t.expanded=!t.expanded,this.changeActiveItem(e,t,i),this.animating=!0,te(e.currentTarget)}onHeaderKeyDown(e,t,i){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,t,i);break;default:break}}onHeaderArrowDownKey(e){let t=ne(e.currentTarget,"data-p-highlight")===!0?T(e.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;t?te(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()}onHeaderArrowUpKey(e){let t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),i=ne(t,"data-p-highlight")===!0?T(t.nextElementSibling,'[data-pc-section="menu"]'):null;i?te(i):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()}onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()}onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()}onHeaderEnterKey(e,t,i){let a=T(e.currentTarget,'[data-pc-section="headeraction"]');a?a.click():this.onHeaderClick(e,t,i),e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(n)))(i||n)}})();static \u0275cmp=f({type:n,selectors:[["p-panelMenu"],["p-panelmenu"],["p-panel-menu"]],contentQueries:function(t,i,a){if(t&1&&Fe(a,Yt,4)(a,Zt,4)(a,Be,4),t&2){let d;F(d=$())&&(i.submenuIconTemplate=d.first),F(d=$())&&(i.itemTemplate=d.first),F(d=$())&&(i.templates=d)}},viewQuery:function(t,i){if(t&1&&me(en,5),t&2){let a;F(a=$())&&(i.containerViewChild=a.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:[2,"multiple","multiple",O],transitionOptions:"transitionOptions",id:"id",tabindex:[2,"tabindex","tabindex",Z]},features:[K([Me]),se],decls:3,vars:5,consts:[["container",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"click","keydown","ngClass","ngStyle","pTooltip","tabindex","tooltipOptions"],[1,"p-panelmenu-header-content"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-panelmenu-content-container","role","region",3,"ngClass",4,"ngIf"],["class","p-panelmenu-header-link",3,"target",4,"ngIf"],[1,"p-panelmenu-header-link",3,"target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-header-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-header-label"],[1,"p-panelmenu-header-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["role","region",1,"p-panelmenu-content-container",3,"ngClass"],[1,"p-panelmenu-content"],[3,"headerFocus","panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded"]],template:function(t,i){t&1&&(l(0,"div",3,0),_(2,wn,2,1,"ng-container",4),r()),t&2&&(k(i.styleClass),o("ngStyle",i.style)("ngClass","p-panelmenu p-component"),p(2),o("ngForOf",i.model))},dependencies:[q,be,Ie,R,ye,ve,An,j,ee,Ce,_e,Te,ze,We,de],encapsulation:2,data:{animation:[Pe("rootItem",[oe("hidden",ae({height:"0",visibility:"hidden"})),oe("visible",ae({height:"*",visibility:"*"})),le("visible <=> hidden",[ie("{{transitionParams}}")]),le("void => *",ie(0))])]},changeDetection:0})}return n})();var rt=(()=>{class n{items;ngOnInit(){this.items=[{label:"Files",icon:"pi pi-file",items:[{label:"Documents",icon:"pi pi-file",items:[{label:"Invoices",icon:"pi pi-file-pdf",items:[{label:"Pending",icon:"pi pi-stop"},{label:"Paid",icon:"pi pi-check-circle"}]},{label:"Clients",icon:"pi pi-users"}]},{label:"Images",icon:"pi pi-image",items:[{label:"Logos",icon:"pi pi-image"}]}]},{label:"Cloud",icon:"pi pi-cloud",items:[{label:"Upload",icon:"pi pi-cloud-upload"},{label:"Download",icon:"pi pi-cloud-download"},{label:"Sync",icon:"pi pi-refresh"}]},{label:"Devices",icon:"pi pi-desktop",items:[{label:"Phone",icon:"pi pi-mobile"},{label:"Desktop",icon:"pi pi-desktop"},{label:"Tablet",icon:"pi pi-tablet"}]}]}code={basic:'<p-panelmenu [model]="items" styleClass="w-full md:w-20rem" />',html:`<div class="card flex justify-center">
    <p-panelmenu [model]="items" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
    selector: 'panel-menu-basic-demo',
    templateUrl: './panel-menu-basic-demo.html',
    standalone: true,
    imports: [PanelMenu]
})
export class PanelMenuBasicDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Files',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Documents',
                        icon: 'pi pi-file',
                        items: [
                            {
                                label: 'Invoices',
                                icon: 'pi pi-file-pdf',
                                items: [
                                    {
                                        label: 'Pending',
                                        icon: 'pi pi-stop'
                                    },
                                    {
                                        label: 'Paid',
                                        icon: 'pi pi-check-circle'
                                    }
                                ]
                            },
                            {
                                label: 'Clients',
                                icon: 'pi pi-users'
                            }
                        ]
                    },
                    {
                        label: 'Images',
                        icon: 'pi pi-image',
                        items: [
                            {
                                label: 'Logos',
                                icon: 'pi pi-image'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Cloud',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Upload',
                        icon: 'pi pi-cloud-upload'
                    },
                    {
                        label: 'Download',
                        icon: 'pi pi-cloud-download'
                    },
                    {
                        label: 'Sync',
                        icon: 'pi pi-refresh'
                    }
                ]
            },
            {
                label: 'Devices',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Phone',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Desktop',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Tablet',
                        icon: 'pi pi-tablet'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["styleClass","w-full md:w-80",3,"model"],["selector","panel-menu-basic-demo",3,"code"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"PanelMenu requires a collection of menuitems as its "),l(3,"i"),s(4,"model"),r(),s(5,"."),r()(),l(6,"div",0),u(7,"p-panelmenu",1),r(),u(8,"app-code",2)),t&2&&(p(7),o("model",i.items),p(),o("code",i.code))},dependencies:[C,y,v],encapsulation:2})}return n})();var st=(()=>{class n{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{label:"Files",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]},{label:"Sign Out",icon:"pi pi-sign-out",command:()=>{this.messageService.add({severity:"info",summary:"Signed out",detail:"User logged out",life:3e3})}}]}code={basic:`<p-toast />
<p-panelmenu [model]="items" styleClass="w-full md:w-80" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-panelmenu [model]="items" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'panel-menu-command-demo',
    templateUrl: './panel-menu-command-demo.html',
    standalone: true,
    imports: [PanelMenu, ToastModule],
    providers: [MessageService]
})
export class PanelMenuCommandDemo implements OnInit {
    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Files',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                        }
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        command: () => {
                            this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                        }
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        command: () => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                        }
                    }
                ]
            },
            {
                label: 'Sync',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Import',
                        icon: 'pi pi-cloud-download',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                        }
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-cloud-upload',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                        }
                    }
                ]
            },
            {
                label: 'Sign Out',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
                }
            }
        ];
    }
}`};static \u0275fac=function(t){return new(t||n)(re(Q))};static \u0275cmp=f({type:n,selectors:[["command-doc"]],standalone:!1,features:[K([Q])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],["styleClass","w-full md:w-80",3,"model"],["selector","panel-menu-command-demo",3,"code"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"The "),l(3,"i"),s(4,"command"),r(),s(5," property defines the callback to run when an item is activated by click or a key event."),r()(),l(6,"div",0),u(7,"p-toast")(8,"p-panelmenu",1),r(),u(9,"app-code",2)),t&2&&(p(8),o("model",i.items),p(),o("code",i.code))},dependencies:[C,y,v,Ye],encapsulation:2})}return n})();var mt=(()=>{class n{items;ngOnInit(){this.items=[{key:"0",label:"Users",icon:"pi pi-users",items:[{key:"0_1",label:"New",items:[{key:"0_1_0",label:"Member"},{key:"0_1_1",label:"Group"}]},{key:"0_2",label:"Search"}]},{key:"1",label:"Tasks",icon:"pi pi-server",items:[{key:"1_0",label:"Add New"},{key:"1_1",label:"Pending"},{key:"1_2",label:"Overdue"}]},{key:"2",label:"Calendar",icon:"pi pi-calendar",items:[{key:"2_0",label:"New Event"},{key:"2_1",label:"Today"},{key:"2_2",label:"This Week"}]}]}toggleAll(){let e=!this.areAllItemsExpanded();this.items=this.toggleAllRecursive(this.items,e)}toggleAllRecursive(e,t){return e.map(i=>(i.expanded=t,i.items&&(i.items=this.toggleAllRecursive(i.items,t)),i))}areAllItemsExpanded(){return this.items.every(e=>e.expanded)}code={basic:`<p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" styleClass="w-full md:w-80" />`,html:`<div class="card flex justify-center">
    <p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
    <p-panelmenu [model]="items" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'panel-menu-controlled-demo',
    templateUrl: './panel-menu-controlled-demo.html',
    standalone: true,
    imports: [PanelMenu, ButtonModule]
})
export class PanelMenuControlledDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                key: '0',
                label: 'Users',
                icon: 'pi pi-users',
                items: [
                    {
                        key: '0_1',
                        label: 'New',
                        items: [
                            {
                                key: '0_1_0',
                                label: 'Member'
                            },
                            {
                                key: '0_1_1',
                                label: 'Group'
                            }
                        ]
                    },
                    {
                        key: '0_2',
                        label: 'Search'
                    }
                ]
            },
            {
                key: '1',
                label: 'Tasks',
                icon: 'pi pi-server',
                items: [
                    {
                        key: '1_0',
                        label: 'Add New'
                    },
                    {
                        key: '1_1',
                        label: 'Pending'
                    },
                    {
                        key: '1_2',
                        label: 'Overdue'
                    }
                ]
            },
            {
                key: '2',
                label: 'Calendar',
                icon: 'pi pi-calendar',
                items: [
                    {
                        key: '2_0',
                        label: 'New Event'
                    },
                    {
                        key: '2_1',
                        label: 'Today'
                    },
                    {
                        key: '2_2',
                        label: 'This Week'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }
}`};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["controlled-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["label","Toggle All",3,"onClick","text"],["styleClass","w-full md:w-80",3,"model"],["selector","panel-menu-controlled-demo",3,"code"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Menu items can be controlled programmatically."),r()(),l(3,"div",0)(4,"p-button",1),M("onClick",function(){return i.toggleAll()}),r(),u(5,"p-panelmenu",2),r(),u(6,"app-code",3)),t&2&&(p(4),o("text",!0),p(),o("model",i.items),p(),o("code",i.code))},dependencies:[C,y,v,Je],encapsulation:2})}return n})();var pt=(()=>{class n{code={typescript:"import { PanelMenuModule } from 'primeng/panelmenu';"};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["panel-menu-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,i){t&1&&u(0,"app-code",0),t&2&&o("code",i.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return n})();var ct=(()=>{class n{items;ngOnInit(){this.items=[{label:"Files",icon:"pi pi-file",items:[{label:"Documents",icon:"pi pi-file",items:[{label:"Invoices",icon:"pi pi-file-pdf",items:[{label:"Pending",icon:"pi pi-stop"},{label:"Paid",icon:"pi pi-check-circle"}]},{label:"Clients",icon:"pi pi-users"}]},{label:"Images",icon:"pi pi-image",items:[{label:"Logos",icon:"pi pi-image"}]}]},{label:"Cloud",icon:"pi pi-cloud",items:[{label:"Upload",icon:"pi pi-cloud-upload"},{label:"Download",icon:"pi pi-cloud-download"},{label:"Sync",icon:"pi pi-refresh"}]},{label:"Devices",icon:"pi pi-desktop",items:[{label:"Phone",icon:"pi pi-mobile"},{label:"Desktop",icon:"pi pi-desktop"},{label:"Tablet",icon:"pi pi-tablet"}]}]}code={basic:`<p-panelmenu [model]="items" [style]="{'width':'300px'}" [multiple]="true" />`,html:`<div class="card flex justify-center">
    <p-panelmenu [model]="items" [style]="{'width':'300px'}" [multiple]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
    selector: 'panel-menu-multiple-demo',
    templateUrl: './panel-menu-multiple-demo.html',
    standalone: true,
    imports: [PanelMenu]
})
export class PanelMenuMultipleDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Files',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Documents',
                        icon: 'pi pi-file',
                        items: [
                            {
                                label: 'Invoices',
                                icon: 'pi pi-file-pdf',
                                items: [
                                    {
                                        label: 'Pending',
                                        icon: 'pi pi-stop'
                                    },
                                    {
                                        label: 'Paid',
                                        icon: 'pi pi-check-circle'
                                    }
                                ]
                            },
                            {
                                label: 'Clients',
                                icon: 'pi pi-users'
                            }
                        ]
                    },
                    {
                        label: 'Images',
                        icon: 'pi pi-image',
                        items: [
                            {
                                label: 'Logos',
                                icon: 'pi pi-image'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Cloud',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Upload',
                        icon: 'pi pi-cloud-upload'
                    },
                    {
                        label: 'Download',
                        icon: 'pi pi-cloud-download'
                    },
                    {
                        label: 'Sync',
                        icon: 'pi pi-refresh'
                    }
                ]
            },
            {
                label: 'Devices',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Phone',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Desktop',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Tablet',
                        icon: 'pi pi-tablet'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["multiple-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["styleClass","w-full md:w-80",3,"model","multiple"],["selector","panel-menu-multiple-demo",3,"code"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Only one single root menuitem can be active by default, enable "),l(3,"i"),s(4,"multiple"),r(),s(5," property to be able to open more than one items."),r()(),l(6,"div",0),u(7,"p-panelmenu",1),r(),u(8,"app-code",2)),t&2&&(p(7),o("model",i.items)("multiple",!0),p(),o("code",i.code))},dependencies:[C,y,v],encapsulation:2})}return n})();function Ln(n,c){if(n&1&&(x(0),l(1,"a",7),u(2,"span"),l(3,"span",8),s(4),r()(),b()),n&2){let e=m().$implicit;p(),o("routerLink",e.route),p(),k(e.icon),p(2),h(e.label)}}function Fn(n,c){if(n&1&&(l(0,"a",10),u(1,"span"),l(2,"span",8),s(3),r()()),n&2){let e=m(2).$implicit;o("href",e.url,X),p(),k(e.icon),p(2),h(e.label)}}function $n(n,c){n&1&&u(0,"i",13)}function On(n,c){if(n&1&&(l(0,"span",11),u(1,"span"),l(2,"span",8),s(3),r(),_(4,$n,1,0,"i",12),r()),n&2){let e=m(2).$implicit;p(),k(e.icon),p(2),h(e.label),p(),o("ngIf",e.items)}}function Rn(n,c){if(n&1&&_(0,Fn,4,4,"a",9)(1,On,5,4,"ng-template",null,2,P),n&2){let e=w(2),t=m().$implicit;o("ngIf",t.url)("ngIfElse",e)}}function Hn(n,c){if(n&1&&_(0,Ln,5,4,"ng-container",6)(1,Rn,3,2,"ng-template",null,1,P),n&2){let e=c.$implicit,t=w(2);o("ngIf",e.route)("ngIfElse",t)}}var dt=(()=>{class n{router;items;constructor(e){this.router=e}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Installation",icon:"pi pi-eraser",route:"/installation"},{label:"Configuration",icon:"pi pi-heart",route:"/configuration"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",icon:"pi pi-star",url:"https://angular.io/"},{label:"Vite.js",icon:"pi pi-bookmark",url:"https://vitejs.dev/"}]}]}code={basic:`<p-panelmenu [model]="items" styleClass="w-full md:w-80">
    <ng-template #item let-item>
        <ng-container *ngIf="item.route; else urlRef">
            <a [routerLink]="item.route" class="flex align-items-center
                cursor-pointer text-color px-3 py-2">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #urlRef>
            <a *ngIf="item.url; else noLink" [href]="item.url" class="flex align-items-center
                cursor-pointer text-color px-3 py-2">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
            <ng-template #noLink>
                <span class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <i *ngIf="item.items" class="pi pi-angle-down text-primary ml-auto"></i>
                </span>
            </ng-template>
        </ng-template>
    </ng-template>
</p-panelmenu>`,html:`<div class="card flex justify-center">
    <p-panelmenu [model]="items" styleClass="w-full md:w-80">
        <ng-template #item let-item>
            <ng-container *ngIf="item.route; else urlRef">
                <a [routerLink]="item.route" class="flex align-items-center
                    cursor-pointer text-color px-3 py-2">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #urlRef>
                <a *ngIf="item.url; else noLink" [href]="item.url" class="flex align-items-center
                    cursor-pointer text-color px-3 py-2">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
                <ng-template #noLink>
                    <span class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <i *ngIf="item.items" class="pi pi-angle-down text-primary ml-auto"></i>
                    </span>
                </ng-template>
            </ng-template>
        </ng-template>
    </p-panelmenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { Router } from '@angular/router';

@Component({
    selector: 'panel-menu-router-demo',
    templateUrl: './panel-menu-router-demo.html',
    standalone: true,
    imports: [PanelMenu],
    providers: [MessageService]
})
export class PanelMenuRouterDemo implements OnInit {
    items: MenuItem[];

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        icon: 'pi pi-eraser',
                        route: '/installation'
                    },
                    {
                        label: 'Configuration',
                        icon: 'pi pi-heart',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-star',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        icon: 'pi pi-bookmark',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }

}`};static \u0275fac=function(t){return new(t||n)(re(He))};static \u0275cmp=f({type:n,selectors:[["router-doc"]],standalone:!1,features:[K([Q])],decls:8,vars:2,consts:[["item",""],["urlRef",""],["noLink",""],[1,"card","flex","justify-center"],["styleClass","w-full md:w-80",3,"model"],["selector","panel-menu-router-demo",3,"code"],[4,"ngIf","ngIfElse"],[1,"flex","items-center","cursor-pointer","text-surface-700","dark:text-surface-0","px-4","py-2",3,"routerLink"],[1,"ml-2"],["class","flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2",3,"href",4,"ngIf","ngIfElse"],[1,"flex","items-center","cursor-pointer","text-surface-700","dark:text-surface-0","px-4","py-2",3,"href"],[1,"flex","items-center","cursor-pointer","text-surface-700","dark:text-surface-0","px-4","py-2"],["class","pi pi-angle-down text-primary ml-auto",4,"ngIf"],[1,"pi","pi-angle-down","text-primary","ml-auto"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Items with navigation are defined with templating to be able to use a routerLink directive, an external link or programmatic navigation."),r()(),l(3,"div",3)(4,"p-panelmenu",4),_(5,Hn,3,2,"ng-template",null,0,P),r()(),u(7,"app-code",5)),t&2&&(p(4),o("model",i.items),p(3),o("code",i.code))},dependencies:[R,C,ee,y,v],encapsulation:2})}return n})();function Vn(n,c){if(n&1&&u(0,"p-badge",8),n&2){let e=m().$implicit;o("value",e.badge)}}function Nn(n,c){if(n&1&&(l(0,"span",9),s(1),r()),n&2){let e=m().$implicit;p(),h(e.shortcut)}}function Kn(n,c){if(n&1&&(l(0,"a",4),u(1,"i"),l(2,"span",5),s(3),r(),_(4,Vn,1,1,"p-badge",6)(5,Nn,2,1,"span",7),r()),n&2){let e=c.$implicit;p(),k(e.icon+" text-primary group-hover:text-inherit"),p(2),h(e.label),p(),o("ngIf",e.badge),p(),o("ngIf",e.shortcut)}}var ut=(()=>{class n{items;ngOnInit(){this.items=[{label:"Mail",icon:"pi pi-envelope",badge:"5",items:[{label:"Compose",icon:"pi pi-file-edit",shortcut:"\u2318+N"},{label:"Inbox",icon:"pi pi-inbox",badge:"5"},{label:"Sent",icon:"pi pi-send",shortcut:"\u2318+S"},{label:"Trash",icon:"pi pi-trash",shortcut:"\u2318+T"}]},{label:"Reports",icon:"pi pi-chart-bar",shortcut:"\u2318+R",items:[{label:"Sales",icon:"pi pi-chart-line",badge:"3"},{label:"Products",icon:"pi pi-list",badge:"6"}]},{label:"Profile",icon:"pi pi-user",shortcut:"\u2318+W",items:[{label:"Settings",icon:"pi pi-cog",shortcut:"\u2318+O"},{label:"Privacy",icon:"pi pi-shield",shortcut:"\u2318+P"}]}]}toggleAll(){let e=!this.areAllItemsExpanded();this.items=this.toggleAllRecursive(this.items,e)}toggleAllRecursive(e,t){return e.map(i=>(i.expanded=t,i.items&&(i.items=this.toggleAllRecursive(i.items,t)),i))}areAllItemsExpanded(){return this.items.every(e=>e.expanded)}code={basic:`<p-panelmenu [model]="items" styleClass="w-full md:w-80">
    <ng-template #item let-item>
        <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
            <span class="ml-2">
                {{ item.label }}
            </span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
            bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
</p-panelmenu>`,html:`<div class="card flex flex-col items-center">
    <p-panelmenu [model]="items" styleClass="w-full md:w-80">
        <ng-template #item let-item>
            <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
                <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
                <span class="ml-2">
                    {{ item.label }}
                </span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
                 bg-emphasis text-muted-color text-xs p-1">
                    {{ item.shortcut }}
                </span>
            </a>
        </ng-template>
    </p-panelmenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'panel-menu-template-demo',
    templateUrl: './panel-menu-template-demo.html',
    standalone: true,
    imports: [PanelMenu, BadgeModule, Ripple, CommonModule]
})
export class PanelMenuTemplateDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Mail',
                icon: 'pi pi-envelope',
                badge: '5',
                items: [
                    {
                        label: 'Compose',
                        icon: 'pi pi-file-edit',
                        shortcut: '\u2318+N'
                    },
                    {
                        label: 'Inbox',
                        icon: 'pi pi-inbox',
                        badge: '5'
                    },
                    {
                        label: 'Sent',
                        icon: 'pi pi-send',
                        shortcut: '\u2318+S'
                    },
                    {
                        label: 'Trash',
                        icon: 'pi pi-trash',
                        shortcut: '\u2318+T'
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-chart-bar',
                shortcut: '\u2318+R',
                items: [
                    {
                        label: 'Sales',
                        icon: 'pi pi-chart-line',
                        badge: '3'
                    },
                    {
                        label: 'Products',
                        icon: 'pi pi-list',
                        badge: '6'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'pi pi-user',
                shortcut: '\u2318+W',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '\u2318+O'
                    },
                    {
                        label: 'Privacy',
                        icon: 'pi pi-shield',
                        shortcut: '\u2318+P'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }

}`};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["template-doc"]],standalone:!1,decls:11,vars:2,consts:[["item",""],[1,"card","flex","flex-col","items-center"],["styleClass","w-full md:w-80",3,"model"],["selector","panel-menu-template-demo",3,"code"],["pRipple","",1,"flex","items-center","px-4","py-2","cursor-pointer","group"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"]],template:function(t,i){t&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"PanelMenu requires a collection of menuitems as its "),l(3,"i"),s(4,"model"),r(),s(5,"."),r()(),l(6,"div",1)(7,"p-panelmenu",2),_(8,Kn,6,5,"ng-template",null,0,P),r()(),u(10,"app-code",3)),t&2&&(p(7),o("model",i.items),p(3),o("code",i.code))},dependencies:[R,C,y,v,qe],encapsulation:2})}return n})();var _t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=xe({type:n});static \u0275inj=fe({imports:[q,et,j,y,Ee,Xe,je,Ze,Ee]})}return n})();var Bn=()=>["PanelMenu","MenuItem"],gt=(()=>{class n{docs=[{id:"import",label:"Import",component:pt},{id:"basic",label:"Basic",component:rt},{id:"multiple",label:"Multiple",component:ct},{id:"controlled",label:"Controlled",component:mt},{id:"template",label:"Template",component:ut},{id:"command",label:"Command",component:st},{id:"router",label:"Router",component:dt},{id:"accessibility",label:"Accessibility",component:nt}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular PanelMenu Component","header","PanelMenu","description","PanelMenu is a hybrid of Accordion and Tree components.",3,"docs","apiDocs"]],template:function(t,i){t&1&&u(0,"app-doc",0),t&2&&o("docs",i.docs)("apiDocs",B(2,Bn))},dependencies:[_t,tt],encapsulation:2})}return n})();var ga=[{path:"",component:gt}];export{ga as default};
