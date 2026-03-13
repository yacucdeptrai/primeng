import{a as et,b as tt}from"./chunk-RPICNBEK.js";import{a as v,d as nt,e as Ce}from"./chunk-I6RUY6VJ.js";import{a as y,b as it}from"./chunk-CIUCWEWU.js";import{v as Ye}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as Xe,b as Me}from"./chunk-VDPAGLM7.js";import{c as ye}from"./chunk-X3A3Q6RL.js";import{aa as We,ba as Je,f as Ge,g as ve,l as Ze,n as Qe,r as Ue}from"./chunk-DEL7GGHP.js";import{e as Re,f as Ke,i as Q}from"./chunk-UHCZASEU.js";import{Ga as Ne,Ja as xe,Ka as je,Q as ee,R as z,e as fe,h as _,ja as ze,n as _e,o as he,oa as He,s as Oe,va as qe,wa as Ie}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as N,l as Be,m as G,p as de,q as ge,u as Z,y as be}from"./chunk-O4W5DSIC.js";import{$b as ue,Ab as d,Eb as w,Fb as E,Gb as X,Hb as q,Ja as oe,Ka as J,M as Te,Mb as B,N as Le,O as ie,Ob as p,Qa as c,Qc as O,Rb as Ae,Rc as Y,S as ne,Sb as re,Tb as I,Ub as x,X as C,Xb as ce,Y as S,Z as we,_b as D,ac as m,bc as A,cc as pe,da as $,eb as f,fb as le,ha as ae,jb as me,ka as Ee,kb as g,kc as Fe,lc as R,ma as W,mc as K,nc as Pe,pc as $e,qb as se,rb as b,sb as Ve,tb as De,xb as s,yb as o,zb as l,zc as F}from"./chunk-DNC77BQZ.js";import{a as j,b as te}from"./chunk-GAL4ENT6.js";var at=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["mega-menu-accessibility-doc"]],standalone:!1,decls:125,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),m(3,"Screen Reader"),l(),o(4,"p"),m(5," MegaMenu component uses the "),o(6,"i"),m(7,"menubar"),l(),m(8," role along with "),o(9,"i"),m(10,"aria-orientation"),l(),m(11," and the value to describe the component can either be provided with "),o(12,"i"),m(13,"aria-labelledby"),l(),m(14," or "),o(15,"i"),m(16,"aria-label"),l(),m(17," props. Each list item has a "),o(18,"i"),m(19,"presentation"),l(),m(20," role whereas anchor elements have a "),o(21,"i"),m(22,"menuitem"),l(),m(23," role with "),o(24,"i"),m(25,"aria-label"),l(),m(26," referring to the label of the item and "),o(27,"i"),m(28,"aria-disabled"),l(),m(29," defined if the item is disabled. A submenu within a MegaMenu uses the "),o(30,"i"),m(31,"menu"),l(),m(32," role with an "),o(33,"i"),m(34,"aria-labelledby"),l(),m(35," defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have "),o(36,"i"),m(37,"aria-haspopup"),l(),m(38,", "),o(39,"i"),m(40,"aria-expanded"),l(),m(41," and "),o(42,"i"),m(43,"aria-controls"),l(),m(44," to define the relation between the item and the submenu. "),l(),o(45,"h3"),m(46,"Keyboard Support"),l(),o(47,"div",0)(48,"table",1)(49,"thead")(50,"tr")(51,"th"),m(52,"Key"),l(),o(53,"th"),m(54,"Function"),l()()(),o(55,"tbody")(56,"tr")(57,"td")(58,"i"),m(59,"tab"),l()(),o(60,"td"),m(61,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),l()(),o(62,"tr")(63,"td")(64,"i"),m(65,"shift"),l(),m(66," + "),o(67,"i"),m(68,"tab"),l()(),o(69,"td"),m(70,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),l()(),o(71,"tr")(72,"td")(73,"i"),m(74,"enter"),l()(),o(75,"td"),m(76,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),l()(),o(77,"tr")(78,"td")(79,"i"),m(80,"space"),l()(),o(81,"td"),m(82,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),l()(),o(83,"tr")(84,"td")(85,"i"),m(86,"escape"),l()(),o(87,"td"),m(88,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),l()(),o(89,"tr")(90,"td")(91,"i"),m(92,"down arrow"),l()(),o(93,"td"),m(94,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),l()(),o(95,"tr")(96,"td")(97,"i"),m(98,"up arrow"),l()(),o(99,"td"),m(100,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),l()(),o(101,"tr")(102,"td")(103,"i"),m(104,"right arrow"),l()(),o(105,"td"),m(106,"If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group."),l()(),o(107,"tr")(108,"td")(109,"i"),m(110,"left arrow"),l()(),o(111,"td"),m(112,"If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group."),l()(),o(113,"tr")(114,"td")(115,"i"),m(116,"home"),l()(),o(117,"td"),m(118,"Moves focus to the first menuitem within the submenu."),l()(),o(119,"tr")(120,"td")(121,"i"),m(122,"end"),l()(),o(123,"td"),m(124,"Moves focus to the last menuitem within the submenu."),l()()()()()()())},dependencies:[v],encapsulation:2})}return t})();var ft=({dt:t})=>`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${t("megamenu.background")};
    border: 1px solid ${t("megamenu.border.color")};
    border-radius: ${t("megamenu.border.radius")};
    color: ${t("megamenu.color")};
    gap: ${t("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${t("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumega-item-content {
    border-radius: ${t("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${t("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${t("megamenu.transition.duration")}, color ${t("megamenu.transition.duration")};
    border-radius: ${t("megamenu.item.border.radius")};
    color: ${t("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("megamenu.item.padding")};
    gap: ${t("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.color")};
    font-size: ${t("megamenu.submenu.icon.size")};
    width: ${t("megamenu.submenu.icon.size")};
    height: ${t("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${t("megamenu.item.focus.color")};
    background: ${t("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${t("megamenu.item.focus.color")};
    background: ${t("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${t("megamenu.item.active.color")};
    background: ${t("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${t("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${t("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${t("megamenu.overlay.padding")};
    background: ${t("megamenu.overlay.background")};
    color: ${t("megamenu.overlay.color")};
    border: 1px solid ${t("megamenu.overlay.border.color")};
    border-radius: ${t("megamenu.overlay.border.radius")};
    box-shadow: ${t("megamenu.overlay.shadow")};
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${t("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${t("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${t("megamenu.submenu.label.padding")};
    color: ${t("megamenu.submenu.label.color")};
    font-weight: ${t("megamenu.submenu.label.font.weight")};
    background: ${t("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-top: 1px solid ${t("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${t("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${t("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${t("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active >.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${t("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("megamenu.mobile.button.size")};
    height: ${t("megamenu.mobile.button.size")};
    position: relative;
    color: ${t("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("megamenu.mobile.button.border.radius")};
    transition: background ${t("megamenu.transition.duration")}, color ${t("megamenu.transition.duration")}, outline-color ${t("megamenu.transition.duration")}, ox-shadow ${t("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${t("megamenu.mobile.button.hover.color")};
    background: ${t("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${t("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${t("megamenu.mobile.button.focus.ring.width")} ${t("megamenu.mobile.button.focus.ring.style")} ${t("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${t("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${t("megamenu.submenu.padding")};
    gap: ${t("megamenu.submenu.gap")};
    background: ${t("megamenu.overlay.background")};
    border: 1px solid ${t("megamenu.overlay.border.color")};
    box-shadow: ${t("megamenu.overlay.shadow")};
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}

/* For PrimeNG */
.p-megamenu-submenu-icon.p-iconwrapper {
    margin-left: auto;
}
`;var _t={root:({instance:t})=>["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:t,processedItem:r})=>["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(r)}],item:({instance:t,processedItem:r})=>["p-megamenu-item",{"p-megamenu-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:t,processedItem:r})=>{let e=t.isItemGroup(r)?r.items.length:0,i;if(t.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(e){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Se=(()=>{class t extends Ne{name="megamenu";theme=ft;classes=_t;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(t)))(n||t)}})();static \u0275prov=Le({token:t,factory:t.\u0275fac})}return t})();var It=["menubar"],xt=t=>({"max-height":t,overflow:"auto"}),vt=(t,r)=>({"p-megamenu-root-list":t,"p-megamenu-submenu":r}),ot=t=>({"p-megamenu-item-link":!0,"p-disabled":t}),yt=()=>({exact:!1}),Mt=t=>({$implicit:t});function Ct(t,r){if(t&1&&(o(0,"li",8),m(1),l()),t&2){let e=p(2);D(e.getItemProp(e.submenu,"style")),s("ngClass",e.getSubmenuHeaderClass(e.submenu)),c(),pe(" ",e.getItemLabel(e.submenu)," ")}}function St(t,r){if(t&1&&d(0,"li",11),t&2){let e=p().$implicit,i=p(2);D(i.getItemProp(e,"style")),s("ngClass",i.getSeparatorItemClass(e)),b("id",i.getItemId(e))("data-pc-section","separator")}}function kt(t,r){if(t&1&&d(0,"span",22),t&2){let e=p(4).$implicit,i=p(2);s("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function Tt(t,r){if(t&1&&(o(0,"span",23),m(1),l()),t&2){let e=p(4).$implicit,i=p(2);b("data-pc-section","label"),c(),pe(" ",i.getItemLabel(e)," ")}}function Lt(t,r){if(t&1&&d(0,"span",24),t&2){let e=p(4).$implicit,i=p(2);s("innerHTML",i.getItemLabel(e),oe),b("data-pc-section","label")}}function wt(t,r){if(t&1&&d(0,"p-badge",25),t&2){let e=p(4).$implicit,i=p(2);s("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function Et(t,r){t&1&&d(0,"AngleDownIcon",27),t&2&&(s("ngClass","p-megamenu-submenu-icon"),b("data-pc-section","submenuicon")("aria-hidden",!0))}function Vt(t,r){t&1&&d(0,"AngleRightIcon",27),t&2&&(s("ngClass","p-megamenu-submenu-icon"),b("data-pc-section","submenuicon")("aria-hidden",!0))}function Dt(t,r){if(t&1&&g(0,Vt,1,3,"AngleRightIcon",28),t&2){let e=p(8);s("ngIf",e.orientation==="vertical")}}function At(t,r){if(t&1&&(w(0),Ve(1,Et,1,3,"AngleDownIcon",27)(2,Dt,1,1,"AngleRightIcon",27),E()),t&2){let e=p(7);c(),De(e.orientation==="horizontal"||e.mobileActive?1:2)}}function Ft(t,r){}function Pt(t,r){t&1&&g(0,Ft,0,0,"ng-template",29),t&2&&(s("data-pc-section","submenuicon"),se("aria-hidden",!0))}function $t(t,r){if(t&1&&(w(0),g(1,At,3,1,"ng-container",14)(2,Pt,1,2,null,26),E()),t&2){let e=p(6);c(),s("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),c(),s("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function Bt(t,r){if(t&1&&(o(0,"a",18),g(1,kt,1,4,"span",19)(2,Tt,2,2,"span",20)(3,Lt,1,2,"ng-template",null,2,F)(5,wt,1,2,"p-badge",21)(6,$t,3,2,"ng-container",14),l()),t&2){let e=ce(4),i=p(3).$implicit,n=p(2);s("target",n.getItemProp(i,"target"))("ngClass",K(11,ot,n.getItemProp(i,"disabled"))),b("href",n.getItemProp(i,"url"),J)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),c(),s("ngIf",n.getItemProp(i,"icon")),c(),s("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),c(3),s("ngIf",n.getItemProp(i,"badge")),c(),s("ngIf",n.isItemGroup(i))}}function Rt(t,r){if(t&1&&d(0,"span",22),t&2){let e=p(4).$implicit,i=p(2);s("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function Kt(t,r){if(t&1&&(o(0,"span",23),m(1),l()),t&2){let e=p(4).$implicit,i=p(2);c(),A(i.getItemLabel(e))}}function Ot(t,r){if(t&1&&d(0,"span",24),t&2){let e=p(4).$implicit,i=p(2);s("innerHTML",i.getItemLabel(e),oe),b("data-pc-section","label")}}function zt(t,r){if(t&1&&d(0,"p-badge",25),t&2){let e=p(4).$implicit,i=p(2);s("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function Ht(t,r){t&1&&d(0,"AngleDownIcon",32),t&2&&(s("styleClass","p-megamenu-submenu-icon"),b("data-pc-section","submenuicon")("aria-hidden",!0))}function qt(t,r){t&1&&d(0,"AngleRightIcon",32),t&2&&(s("styleClass","p-megamenu-submenu-icon"),b("data-pc-section","submenuicon")("aria-hidden",!0))}function Nt(t,r){if(t&1&&(w(0),g(1,Ht,1,3,"AngleDownIcon",31)(2,qt,1,3,"AngleRightIcon",31),E()),t&2){let e=p(7);c(),s("ngIf",e.orientation==="horizontal"),c(),s("ngIf",e.orientation==="vertical")}}function Gt(t,r){}function Zt(t,r){t&1&&g(0,Gt,0,0,"ng-template",29),t&2&&(s("data-pc-section","submenuicon"),se("aria-hidden",!0))}function Qt(t,r){if(t&1&&(w(0),g(1,Nt,3,2,"ng-container",14)(2,Zt,1,2,null,26),E()),t&2){let e=p(6);c(),s("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),c(),s("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function Ut(t,r){if(t&1&&(o(0,"a",30),g(1,Rt,1,4,"span",19)(2,Kt,2,1,"span",20)(3,Ot,1,2,"ng-template",null,3,F)(5,zt,1,2,"p-badge",21)(6,Qt,3,2,"ng-container",14),l()),t&2){let e=ce(4),i=p(3).$implicit,n=p(2);s("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||R(20,yt))("target",n.getItemProp(i,"target"))("ngClass",K(21,ot,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),b("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("data-pc-section","action"),c(),s("ngIf",n.getItemProp(i,"icon")),c(),s("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),c(3),s("ngIf",n.getItemProp(i,"badge")),c(),s("ngIf",n.isItemGroup(i))}}function jt(t,r){if(t&1&&(w(0),g(1,Bt,7,13,"a",16)(2,Ut,7,23,"a",17),E()),t&2){let e=p(2).$implicit,i=p(2);c(),s("ngIf",!i.getItemProp(e,"routerLink")),c(),s("ngIf",i.getItemProp(e,"routerLink"))}}function Wt(t,r){}function Jt(t,r){t&1&&g(0,Wt,0,0,"ng-template")}function Xt(t,r){if(t&1&&(w(0),g(1,Jt,1,0,null,33),E()),t&2){let e=p(2).$implicit,i=p(2);c(),s("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",K(2,Mt,e.item))}}function Yt(t,r){if(t&1){let e=q();o(0,"p-megamenu-sub",38),B("itemClick",function(n){C(e);let a=p(6);return S(a.itemClick.emit(n))})("itemMouseEnter",function(n){C(e);let a=p(6);return S(a.onItemMouseEnter(n))}),l()}if(t&2){let e=r.$implicit,i=p(6);s("id",i.getSubListId(e))("submenu",e)("items",e.items)("itemTemplate",i.itemTemplate)("mobileActive",i.mobileActive)("menuId",i.menuId)("focusedItemId",i.focusedItemId)("level",i.level+1)("root",!1)}}function ei(t,r){if(t&1&&(o(0,"div",27),g(1,Yt,1,9,"p-megamenu-sub",37),l()),t&2){let e=r.$implicit,i=p(3).$implicit,n=p(2);s("ngClass",n.getColumnClass(i)),c(),s("ngForOf",e)}}function ti(t,r){if(t&1&&(o(0,"div",34)(1,"div",35),g(2,ei,2,2,"div",36),l()()),t&2){let e=p(2).$implicit;b("data-pc-section","panel"),c(),b("data-pc-section","grid"),c(),s("ngForOf",e.items)}}function ii(t,r){if(t&1){let e=q();o(0,"li",12,1)(2,"div",13),B("click",function(n){C(e);let a=p().$implicit,u=p(2);return S(u.onItemClick(n,a))})("mouseenter",function(n){C(e);let a=p().$implicit,u=p(2);return S(u.onItemMouseEnter({$event:n,processedItem:a}))}),g(3,jt,3,2,"ng-container",14)(4,Xt,2,4,"ng-container",14),l(),g(5,ti,3,3,"div",15),l()}if(t&2){let e=p(),i=e.$implicit,n=e.index,a=p(2);ue(a.getItemProp(i,"styleClass")),s("ngStyle",a.getItemProp(i,"style"))("ngClass",a.getItemClass(i))("tooltipOptions",a.getItemProp(i,"tooltipOptions")),b("id",a.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(i))("data-p-focused",a.isItemFocused(i))("data-p-disabled",a.isItemDisabled(i))("aria-label",a.getItemLabel(i))("aria-disabled",a.isItemDisabled(i)||void 0)("aria-haspopup",a.isItemGroup(i)&&!a.getItemProp(i,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(i)?a.isItemActive(i):void 0)("aria-level",a.level+1)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(n)),c(2),b("data-pc-section","content"),c(),s("ngIf",!a.itemTemplate),c(),s("ngIf",a.itemTemplate),c(),s("ngIf",a.isItemVisible(i)&&a.isItemGroup(i))}}function ni(t,r){if(t&1&&g(0,St,1,5,"li",9)(1,ii,6,21,"li",10),t&2){let e=r.$implicit,i=p(2);s("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),c(),s("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}function ai(t,r){if(t&1){let e=q();o(0,"ul",5,0),B("keydown",function(n){C(e);let a=p();return S(a.menuKeydown.emit(n))})("focus",function(n){C(e);let a=p();return S(a.menuFocus.emit(n))})("blur",function(n){C(e);let a=p();return S(a.menuBlur.emit(n))}),g(2,Ct,2,4,"li",6)(3,ni,2,2,"ng-template",7),l()}if(t&2){let e=p();D(K(11,xt,e.scrollHeight)),s("ngClass",Pe(13,vt,e.root,!e.root))("tabindex",e.tabindex),b("role",e.root?"menubar":"menu")("id",e.id)("aria-orientation",e.orientation)("aria-activedescendant",e.focusedItemId)("data-pc-section",e.root?"root":"submenu"),c(2),s("ngIf",e.submenu),c(),s("ngForOf",e.items)}}var oi=["start"],li=["end"],mi=["menuicon"],si=["submenuicon"],ri=["item"],ci=["button"],ui=["buttonicon"],pi=["menubutton"],di=["rootmenu"],gi=["container"],bi=t=>({flexDirection:t}),fi=(t,r,e,i)=>({"p-megamenu p-component":!0,"p-megamenu-mobile":t,"p-megamenu-mobile-active":r,"p-megamenu-horizontal":e,"p-megamenu-vertical":i});function _i(t,r){t&1&&X(0)}function hi(t,r){if(t&1&&(o(0,"div",9),g(1,_i,1,0,"ng-container",6),l()),t&2){let e=p();c(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Ii(t,r){t&1&&d(0,"BarsIcon")}function xi(t,r){}function vi(t,r){t&1&&g(0,xi,0,0,"ng-template")}function yi(t,r){if(t&1){let e=q();o(0,"a",11,2),B("click",function(n){C(e);let a=p(2);return S(a.menuButtonClick(n))})("keydown",function(n){C(e);let a=p(2);return S(a.menuButtonKeydown(n))}),g(2,Ii,1,0,"BarsIcon",5)(3,vi,1,0,null,6),l()}if(t&2){let e=p(2);b("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),c(2),s("ngIf",!e.buttonIconTemplate&&!e._buttonIconTemplate),c(),s("ngTemplateOutlet",e.buttonIconTemplate||e._buttonIconTemplate)}}function Mi(t,r){if(t&1&&(w(0),g(1,yi,4,6,"a",10),E()),t&2){let e=p();c(),s("ngIf",e.model&&e.model.length>0)}}function Ci(t,r){t&1&&X(0)}function Si(t,r){t&1&&X(0)}function ki(t,r){if(t&1&&(o(0,"div",12),g(1,Si,1,0,"ng-container",6),l()),t&2){let e=p();c(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var Ti=(()=>{class t extends xe{id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new $;itemMouseEnter=new $;menuFocus=new $;menuBlur=new $;menuKeydown=new $;menubarViewChild;megaMenu=ne(Te(()=>T));onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}getItemProp(e,i,n=null){return e&&e.item?he(e.item[i],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemClass(e){return te(j({},this.getItemProp(e,"class")),{"p-megamenu-item":!0,"p-megamenu-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return te(j({},this.getItemProp(e,"class")),{"p-megamenu-separator":!0})}getColumnClass(e){let i=this.isItemGroup(e)?e.items.length:0,n;if(this.queryMatches)n="p-megamenu-col-12";else switch(i){case 2:n="p-megamenu-col-6";break;case 3:n="p-megamenu-col-4";break;case 4:n="p-megamenu-col-3";break;case 6:n="p-megamenu-col-2";break;default:n="p-megamenu-col-12";break}return n}getSubmenuHeaderClass(e){return j({"p-megamenu-submenu-label":!0,"p-disabled":this.isItemDisabled(e)},this.getItemProp(e,"class"))}isSubmenuVisible(e){return this.submenu&&!this.root?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return _(this.activeItem)?this.activeItem.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return _(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemMouseEnter(e){let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-megaMenuSub"],["p-megamenu-sub"]],viewQuery:function(i,n){if(i&1&&re(It,7),i&2){let a;I(a=x())&&(n.menubarViewChild=a.first)}},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Y],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",O],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",O],mobileActive:[2,"mobileActive","mobileActive",O],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",Y],root:[2,"root","root",O]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[me],decls:1,vars:1,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngClass","style","tabindex","keydown","focus","blur",4,"ngIf"],[3,"keydown","focus","blur","ngClass","tabindex"],["role","presentation",3,"ngClass","style",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"ngClass"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-megamenu-item-content",3,"click","mouseenter"],[4,"ngIf"],["class","p-megamenu-overlay",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-megamenu-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-megamenu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-megamenu-item-icon",3,"ngClass","ngStyle"],[1,"p-megamenu-item-label"],[1,"p-megamenu-item-label",3,"innerHTML"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass",4,"ngIf"],[3,"data-pc-section","aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-megamenu-overlay"],[1,"p-megamenu-grid"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],[3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root"]],template:function(i,n){i&1&&g(0,ai,4,16,"ul",4),i&2&&s("ngIf",n.isSubmenuVisible(n.submenu))},dependencies:[t,Z,N,Be,G,ge,de,Q,Re,Ke,je,Me,Xe,Ze,Qe,ve,Ge,Ie],encapsulation:2})}return t})(),T=(()=>{class t extends xe{set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;container;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ae(null);focusedItemInfo=ae({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=ne(Se);matchMediaListener;query;queryMatches=!1;mobileActive=!1;get visibleItems(){let e=_(this.activeItem())?this.activeItem():null;return e?e.items.reduce((i,n)=>(n.forEach(a=>{a.items.forEach(u=>{i.push(u)})}),i),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:_(e.key)?`${this.id}_${e.key}`:null}constructor(){super(),Ee(()=>{let e=this.activeItem();_(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.id=this.id||He("pn_id_")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"button":this._buttonTemplate=e.template;break;case"buttonicon":this._buttonIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(be(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,i=0,n={},a="",u){let h=[];return e&&e.forEach((M,V)=>{let L=(a!==""?a+"_":"")+(u!==void 0?u+"_":"")+V,P={item:M,index:V,level:i,key:L,parent:n,parentKey:a,columnIndex:u!==void 0?u:n.columnIndex!==void 0?n.columnIndex:V};P.items=i===0&&M.items&&M.items.length>0?M.items.map((gt,bt)=>this.createProcessedItems(gt,i+1,P,L,bt)):this.createProcessedItems(M.items,i+1,P,L),h.push(P)}),h}getItemProp(e,i){return e?he(e[i]):void 0}onItemClick(e){let{originalEvent:i,processedItem:n}=e,a=this.isProcessedItemGroup(n),u=fe(n.parent);if(this.isSelected(n)){let{index:M,key:V,parentKey:L,item:P}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:M,key:V,parentKey:L,item:P}),this.dirty=!u,this.mobileActive||z(this.rootmenu?.menubarViewChild?.nativeElement,{preventScroll:!0})}else a?this.onItemChange(e):this.hide(i)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,ye.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,ye.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),z(this.rootmenu?.el.nativeElement)}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n;i===null&&this.queryMatches?n=this.menubuttonViewChild.nativeElement:n=ee(this.rootmenu?.menubarViewChild?.nativeElement,`li[id="${i}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(fe(i))return;let{index:a,key:u,parentKey:h,items:M,item:V}=i,L=_(M);L&&this.activeItem.set(i),this.focusedItemInfo.set({index:a,key:u,parentKey:h,item:V}),L&&(this.dirty=!0),n&&z(this.rootmenu?.menubarViewChild?.nativeElement)}hide(e,i){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{z(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),i&&z(this.rootmenu?.menubarViewChild?.nativeElement),this.dirty=!1}onMenuFocus(e){if(this.focused=!0,this.focusedItemInfo().index===-1){let i=this.findFirstFocusedItemIndex(),n=this.findVisibleItem(i);this.focusedItemInfo.set({index:i,key:n.key,parentKey:n.parentKey,item:n.item})}}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&Oe(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&_(e.items)}isSelected(e){return _(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&_(e.items)}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,a=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(u=>this.isItemMatched(u)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(u=>this.isItemMatched(u)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(u=>this.isItemMatched(u)),n!==-1&&(a=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}changeFocusedItemInfo(e,i){let n=this.findVisibleItem(i);if(_(n)){let{key:a,parentKey:u,item:h}=n;this.focusedItemInfo.set({index:i,key:a||"",parentKey:u,item:h})}this.scrollInView()}onArrowDownKey(e){if(this.orientation==="horizontal")if(_(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:a}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:a})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:u,key:h,item:M}=n;this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,key:h,parentKey:u,item:M}),this.searchValue=""}}let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}onArrowRightKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="vertical")if(_(this.activeItem())&&this.activeItem().key===i.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:i.item});else{let u=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(u)&&(this.onItemChange({originalEvent:e,processedItem:u}),this.focusedItemInfo.set({index:-1,key:u.key,parentKey:u.parentKey,item:u.item}),this.searchValue="")}let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,a)}else{let a=i.columnIndex+1,u=this.visibleItems.findIndex(h=>h.columnIndex===a);u!==-1&&this.changeFocusedItemInfo(e,u)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&_(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,i),e.preventDefault()}}onArrowLeftKey(e){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="horizontal"){let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,a)}}else{this.orientation==="vertical"&&_(this.activeItem())&&i.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null));let a=i.columnIndex-1,u=this.visibleItems.findIndex(h=>h.columnIndex===a);u!==-1&&this.changeFocusedItemInfo(e,u)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){_(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=ee(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&ee(i,'a[data-pc-section="action"]');n?n.click():i&&i.click();let a=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(a)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return _(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return _e(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?_e(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{ze()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){be(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{this.container?.nativeElement!==e.target&&!this.container?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}ngOnDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(i,n,a){if(i&1&&Ae(a,oi,4)(a,li,4)(a,mi,4)(a,si,4)(a,ri,4)(a,ci,4)(a,ui,4)(a,qe,4),i&2){let u;I(u=x())&&(n.startTemplate=u.first),I(u=x())&&(n.endTemplate=u.first),I(u=x())&&(n.menuIconTemplate=u.first),I(u=x())&&(n.submenuIconTemplate=u.first),I(u=x())&&(n.itemTemplate=u.first),I(u=x())&&(n.buttonTemplate=u.first),I(u=x())&&(n.buttonIconTemplate=u.first),I(u=x())&&(n.templates=u)}},viewQuery:function(i,n){if(i&1&&re(pi,5)(di,5)(gi,5),i&2){let a;I(a=x())&&(n.menubuttonViewChild=a.first),I(a=x())&&(n.rootmenu=a.first),I(a=x())&&(n.container=a.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",O],tabindex:[2,"tabindex","tabindex",Y]},features:[Fe([Se]),me],decls:8,vars:36,consts:[["container",""],["rootmenu",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-megamenu-start",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight"],["class","p-megamenu-end",4,"ngIf"],[1,"p-megamenu-start"],["role","button","tabindex","0","class","p-megamenu-button",3,"click","keydown",4,"ngIf"],["role","button","tabindex","0",1,"p-megamenu-button",3,"click","keydown"],[1,"p-megamenu-end"]],template:function(i,n){i&1&&(o(0,"div",3,0),g(2,hi,2,1,"div",4)(3,Mi,2,1,"ng-container",5)(4,Ci,1,0,"ng-container",6),o(5,"p-megamenu-sub",7,1),B("itemClick",function(u){return n.onItemClick(u)})("menuFocus",function(u){return n.onMenuFocus(u)})("menuBlur",function(u){return n.onMenuBlur(u)})("menuKeydown",function(u){return n.onKeyDown(u)})("itemMouseEnter",function(u){return n.onItemMouseEnter(u)}),l(),g(7,ki,2,1,"div",8),l()),i&2&&(D(K(29,bi,n.orientation=="vertical"&&n.queryMatches?"row":"")),ue(n.styleClass),s("ngClass",$e(31,fi,n.queryMatches,n.mobileActive,n.orientation=="horizontal",n.orientation=="vertical"))("ngStyle",n.style),b("data-pc-section","root")("data-pc-name","megamenu")("id",n.id),c(2),s("ngIf",n.startTemplate||n._startTemplate),c(),s("ngIf",!n.buttonTemplate&&!n._buttonTemplate),c(),s("ngTemplateOutlet",n.buttonTemplate||n._buttonTemplate),c(),s("itemTemplate",n.itemTemplate||n._itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches)("scrollHeight",n.scrollHeight),b("id",n.id+"_list"),c(2),s("ngIf",n.endTemplate||n._endTemplate))},dependencies:[Z,N,G,ge,de,Q,Ti,Me,Ue,ve,Ie],encapsulation:2,changeDetection:0})}return t})();var lt=(()=>{class t{items;ngOnInit(){this.items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}]}code={basic:'<p-megamenu [model]="items" />',html:`<div class="card">
    <p-megamenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
    selector: 'mega-menu-basic-demo',
    templateUrl: './mega-menu-basic-demo.html',
    standalone: true,
    imports: [MegaMenu]
})
export class MegaMenuBasicDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Armchair' },
                                { label: 'Coffee Table' },
                                { label: 'Couch' },
                                { label: 'TV Stand' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }],
                        },
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [
                                { label: 'Bed' },
                                { label: 'Chaise lounge' },
                                { label: 'Cupboard' },
                                { label: 'Dresser' },
                                { label: 'Wardrobe' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Office',
                            items: [
                                { label: 'Bookcase' },
                                { label: 'Cabinet' },
                                { label: 'Chair' },
                                { label: 'Desk' },
                                { label: 'Executive Chair' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [
                                { label: 'Monitor' },
                                { label: 'Mouse' },
                                { label: 'Notebook' },
                                { label: 'Keyboard' },
                                { label: 'Printer' },
                                { label: 'Storage' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Home Theater',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                        },
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                        },
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [
                                { label: 'Coffee Machine' },
                                { label: 'Fridge' },
                                { label: 'Oven' },
                                { label: 'Vaccum Cleaner' },
                                { label: 'Washing Machine' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                        },
                    ],
                    [
                        {
                            label: 'Running',
                            items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                        },
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                        },
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                        },
                    ],
                ],
            },
        ];
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card"],[3,"model"],["selector","mega-menu-basic-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),m(2,"MegaMenu requires a collection of menuitems as its "),o(3,"i"),m(4,"model"),l(),m(5,"."),l()(),o(6,"div",0),d(7,"p-megamenu",1),l(),d(8,"app-code",2)),i&2&&(c(7),s("model",n.items),c(),s("code",n.code))},dependencies:[y,T,v],encapsulation:2})}return t})();var mt=(()=>{class t{code={basic:`{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["command-doc"]],standalone:!1,decls:7,vars:3,consts:[["importCode","",3,"code","hideToggleCode","hideStackBlitz"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),m(2,"The "),o(3,"i"),m(4,"command"),l(),m(5," property of a menuitem defines the callback to run when an item is activated by click or a key event."),l()(),d(6,"app-code",0)),i&2&&(c(6),s("code",n.code)("hideToggleCode",!0)("hideStackBlitz",!0))},dependencies:[y,v],encapsulation:2})}return t})();var st=(()=>{class t{code={typescript:"import { MegaMenuModule } from 'primeng/megamenu';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["mega-menu-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&d(0,"app-code",0),i&2&&s("code",n.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2})}return t})();var rt=(()=>{class t{code={basic:`<p-megamenu [model]="items">
    <ng-template #item let-item>
        <ng-container *ngIf="item.route; else elseBlock">
            <a [routerLink]="item.route" class="p-menuitem-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #elseBlock>
            <a [href]="item.url" class="p-menuitem-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-template>
    </ng-template>
</p-megamenu>`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["router-doc"]],standalone:!1,decls:4,vars:3,consts:[[3,"code","hideToggleCode","hideStackBlitz"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),m(2,"Items with navigation are defined with templating to be able to use a routerLink directive, an external link or programmatic navigation."),l()(),d(3,"app-code",0)),i&2&&(c(3),s("code",n.code)("hideToggleCode",!0)("hideStackBlitz",!0))},dependencies:[y,v],encapsulation:2})}return t})();var Li=()=>({"border-radius":"3rem",display:"flex"});function wi(t,r){t&1&&(we(),o(0,"svg",6),d(1,"path",7),o(2,"mask",8),d(3,"path",9),l(),o(4,"g",10),d(5,"path",11),l(),d(6,"path",12)(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21),l())}function Ei(t,r){if(t&1&&(o(0,"a",25),d(1,"i",26),o(2,"span",27),m(3),l()()),t&2){let e=p().$implicit;c(),s("ngClass",e.icon),c(2),A(e.label)}}function Vi(t,r){if(t&1&&(o(0,"a",28)(1,"span",29),d(2,"i",26),l(),o(3,"span",30)(4,"span",31),m(5),l(),o(6,"span",32),m(7),l()()()),t&2){let e=p().$implicit;c(2),s("ngClass",e.icon+" text-lg"),c(3),A(e.label),c(2),A(e.subtext)}}function Di(t,r){if(t&1&&(o(0,"div",33),d(1,"img",34),o(2,"span"),m(3),l(),d(4,"p-button",35),l()),t&2){let e=p().$implicit;c(),s("src",e.image,J),c(2),A(e.subtext),c(),s("label",e.label)("outlined",!0)}}function Ai(t,r){if(t&1&&g(0,Ei,4,2,"a",22)(1,Vi,8,3,"a",23)(2,Di,5,4,"div",24),t&2){let e=r.$implicit;s("ngIf",e.root),c(),s("ngIf",!e.root&&!e.image),c(),s("ngIf",e.image)}}function Fi(t,r){t&1&&d(0,"p-avatar",36)}var ct=(()=>{class t{items;ngOnInit(){this.items=[{label:"Company",root:!0,items:[[{items:[{label:"Features",icon:"pi pi-list",subtext:"Subtext of item"},{label:"Customers",icon:"pi pi-users",subtext:"Subtext of item"},{label:"Case Studies",icon:"pi pi-file",subtext:"Subtext of item"}]}],[{items:[{label:"Solutions",icon:"pi pi-shield",subtext:"Subtext of item"},{label:"Faq",icon:"pi pi-question",subtext:"Subtext of item"},{label:"Library",icon:"pi pi-search",subtext:"Subtext of item"}]}],[{items:[{label:"Community",icon:"pi pi-comments",subtext:"Subtext of item"},{label:"Rewards",icon:"pi pi-star",subtext:"Subtext of item"},{label:"Investors",icon:"pi pi-globe",subtext:"Subtext of item"}]}],[{items:[{image:"https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png",label:"GET STARTED",subtext:"Build spectacular apps in no time."}]}]]},{label:"Resources",root:!0},{label:"Contact",root:!0}]}code={basic:`<p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" styleClass="p-4 bg-surface-0 dark:bg-surface-900">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item>
        <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
            <i [ngClass]="item.icon"></i>
            <span class="ml-2">{{ item.label }}</span>
        </a>
        <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                <i [ngClass]="item.icon + ' text-lg'"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
                <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
        </a>
        <div *ngIf="item.image" class="flex flex-col items-start gap-4">
            <img [src]="item.image" alt="megamenu-demo" class="w-full" />
            <span>{{ item.subtext }}</span>
            <p-button [label]="item.label" [outlined]="true"></p-button>
        </div>
    </ng-template>
    <ng-template #end>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
</p-megamenu>`,html:`<div class="card">
    <p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" styleClass="p-4 bg-surface-0 dark:bg-surface-900">
        <ng-template #start>
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                    fill="var(--p-primary-color)"
                />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
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
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
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
        </ng-template>
        <ng-template #item let-item>
            <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
                <i [ngClass]="item.icon"></i>
                <span class="ml-2">{{ item.label }}</span>
            </a>
            <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
                <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                    <i [ngClass]="item.icon + ' text-lg'"></i>
                </span>
                <span class="inline-flex flex-col gap-1">
                    <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                    <span class="whitespace-nowrap">{{ item.subtext }}</span>
                </span>
            </a>
            <div *ngIf="item.image" class="flex flex-col items-start gap-4">
                <img [src]="item.image" alt="megamenu-demo" class="w-full" />
                <span>{{ item.subtext }}</span>
                <p-button [label]="item.label" [outlined]="true"></p-button>
            </div>
        </ng-template>
        <ng-template #end>
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </ng-template>
    </p-megamenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';


@Component({
    selector: 'mega-menu-template-demo',
    templateUrl: './mega-menu-template-demo.html',
    standalone: true,
    imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule]
})
export class MegaMenuTemplateDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Company',
                root: true,
                items: [
                    [
                        {
                            items: [
                                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                        }
                    ]
                ]
            },
            {
                label: 'Resources',
                root: true
            },
            {
                label: 'Contact',
                root: true
            }
        ];
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["template-doc"]],standalone:!1,decls:15,vars:5,consts:[["start",""],["item",""],["end",""],[1,"card"],["styleClass","p-4 bg-surface-0 dark:bg-surface-900",3,"model"],["selector","mega-menu-template-demo",3,"code"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["pRipple","","class","flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase","style","border-radius: 2rem",4,"ngIf"],["class","flex items-center p-4 cursor-pointer mb-2 gap-2",4,"ngIf"],["class","flex flex-col items-start gap-4",4,"ngIf"],["pRipple","",1,"flex","items-center","cursor-pointer","px-4","py-2","overflow-hidden","relative","font-semibold","text-lg","uppercase",2,"border-radius","2rem"],[3,"ngClass"],[1,"ml-2"],[1,"flex","items-center","p-4","cursor-pointer","mb-2","gap-2"],[1,"inline-flex","items-center","justify-center","rounded-full","bg-primary","text-primary-contrast","w-12","h-12"],[1,"inline-flex","flex-col","gap-1"],[1,"font-medium","text-lg","text-surface-900","dark:text-surface-0"],[1,"whitespace-nowrap"],[1,"flex","flex-col","items-start","gap-4"],["alt","megamenu-demo",1,"w-full",3,"src"],[3,"label","outlined"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),m(2,"Custom content can be placed between p-megamenu tags. Megamenu should be "),o(3,"i"),m(4,"horizontal"),l(),m(5," for custom content."),l()(),o(6,"div",3)(7,"p-megamenu",4),g(8,wi,16,0,"ng-template",null,0,F)(10,Ai,3,3,"ng-template",null,1,F)(12,Fi,1,0,"ng-template",null,2,F),l()(),d(14,"app-code",5)),i&2&&(c(7),D(R(4,Li)),s("model",n.items),c(7),s("code",n.code))},dependencies:[N,G,y,T,We,v,et],encapsulation:2})}return t})();var ut=(()=>{class t{items;ngOnInit(){this.items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}]}code={basic:'<p-megamenu [model]="items" orientation="vertical" />',html:`<div class="card">
    <p-megamenu [model]="items" orientation="vertical" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
    selector: 'mega-menu-vertical-demo',
    templateUrl: './mega-menu-vertical-demo.html',
    standalone: true,
    imports: [MegaMenu]
})
export class MegaMenuVerticalDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Armchair' },
                                { label: 'Coffee Table' },
                                { label: 'Couch' },
                                { label: 'TV Stand' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }],
                        },
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [
                                { label: 'Bed' },
                                { label: 'Chaise lounge' },
                                { label: 'Cupboard' },
                                { label: 'Dresser' },
                                { label: 'Wardrobe' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Office',
                            items: [
                                { label: 'Bookcase' },
                                { label: 'Cabinet' },
                                { label: 'Chair' },
                                { label: 'Desk' },
                                { label: 'Executive Chair' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [
                                { label: 'Monitor' },
                                { label: 'Mouse' },
                                { label: 'Notebook' },
                                { label: 'Keyboard' },
                                { label: 'Printer' },
                                { label: 'Storage' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Home Theater',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                        },
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                        },
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [
                                { label: 'Coffee Machine' },
                                { label: 'Fridge' },
                                { label: 'Oven' },
                                { label: 'Vaccum Cleaner' },
                                { label: 'Washing Machine' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                        },
                    ],
                    [
                        {
                            label: 'Running',
                            items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                        },
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                        },
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                        },
                    ],
                ],
            },
        ];
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["vertical-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card"],["orientation","vertical",3,"model"],["selector","mega-menu-vertical-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),m(2,"Layout of the MegaMenu is changed with the "),o(3,"i"),m(4,"orientation"),l(),m(5," property that accepts "),o(6,"i"),m(7,"horizontal"),l(),m(8," and "),o(9,"i"),m(10,"vertical"),l(),m(11," as options."),l()(),o(12,"div",0),d(13,"p-megamenu",1),l(),d(14,"app-code",2)),i&2&&(c(13),s("model",n.items),c(),s("code",n.code))},dependencies:[y,T,v],encapsulation:2})}return t})();var pt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=le({type:t});static \u0275inj=ie({imports:[Z,it,Q,T,Ye,Je,Ce,tt,Ce]})}return t})();var Pi=()=>["MegaMenu","MegaMenuItem"],dt=(()=>{class t{docs=[{id:"import",label:"Import",component:st},{id:"basic",label:"Basic",component:lt},{id:"vertical",label:"Vertical",component:ut},{id:"template",label:"Template",component:ct},{id:"command",label:"Command",component:mt},{id:"router",label:"Router",component:rt},{id:"accessibility",label:"Accessibility",component:at}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular MegaMenu Component","header","MegaMenu","description","MegaMenu is navigation component that displays submenus together.","themeDocs","megamenu",3,"docs","apiDocs"]],template:function(i,n){i&1&&d(0,"app-doc",0),i&2&&s("docs",n.docs)("apiDocs",R(2,Pi))},dependencies:[pt,nt],styles:["[_nghost-%COMP%]     .p-megamenu-panel{z-index:3}"]})}return t})();var la=[{path:"",component:dt}];export{la as default};
