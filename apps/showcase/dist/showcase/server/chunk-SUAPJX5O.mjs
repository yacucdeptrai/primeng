import './polyfills.server.mjs';
import{a as _t,b as vt}from"./chunk-TUWVE3ES.mjs";import{a as bt,b as St}from"./chunk-IIW25JG6.mjs";import{a as gt}from"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as b,d as Ct,e as Te}from"./chunk-HZSAMTDM.mjs";import{a as C,b as yt}from"./chunk-EK6YV52O.mjs";import{a as Re,e as x,f as Qe,g as $e,i as He,j as U,k as Ke,l as ze,m as je,s as Je,t as qe}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{S as mt,aa as ft,ba as ht,c as rt,n as dt,v as pt}from"./chunk-DE54ZEHA.mjs";import{$ as nt,A as Xe,G as Ze,Ga as lt,Ja as xe,Ka as ut,L as et,Q as tt,R as fe,Y as it,e as ue,h as E,i as B,j as ve,n as Oe,oa as ot,ra as at,s as Ye,va as ct,wa as ie,xa as st}from"./chunk-YQJJ7I3T.mjs";import{f as me,j as Pe}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as Se,m as Ne,n as ee,q as Be,r as _e,v as te}from"./chunk-RUZVPFSZ.mjs";import{$a as he,$b as re,Bb as r,Cb as a,Db as c,Dc as N,Eb as u,Ib as K,Jb as z,Jc as Ce,Kb as le,Lb as R,M as Ae,N as Le,O as ce,Qb as Q,S as De,Sa as d,Sb as f,Vb as Ge,Wb as Ve,X as T,Xb as A,Y as w,Yb as L,Zc as V,_c as be,cc as D,da as F,dc as Y,ec as o,fc as de,gb as g,gc as pe,ha as q,hb as se,jc as _,ka as Ue,kc as v,la as Ee,lb as ge,lc as O,ma as Fe,mb as y,oc as ke,pc as h,qc as ye,rc as We,vb as I}from"./chunk-ZJKG6QAF.mjs";import{a as X,b as Z}from"./chunk-AFOT676I.mjs";var Ot=(()=>{class t{id;title;code={basic:`<span id="dd1">Options</span>
<p-cascadeselect ariaLabelledBy="dd1"/>

<p-cascadeselect ariaLabel="Options"/>`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-accessibility-doc"]],inputs:{id:"id",title:"title"},standalone:!1,decls:156,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),c(),a(3,"p"),o(4," Value to describe the component can either be provided with "),a(5,"i"),o(6,"ariaLabelledBy"),c(),o(7," or "),a(8,"i"),o(9,"ariaLabel"),c(),o(10," props. The cascadeselect element has a "),a(11,"i"),o(12,"combobox"),c(),o(13," role in addition to "),a(14,"i"),o(15,"aria-haspopup"),c(),o(16," and "),a(17,"i"),o(18,"aria-expanded"),c(),o(19," attributes. The relation between the combobox and the popup is created with "),a(20,"i"),o(21,"aria-controls"),c(),o(22," that refers to the id of the popup. "),c(),a(23,"p"),o(24," The popup list has an id that refers to the "),a(25,"i"),o(26,"aria-controls"),c(),o(27," attribute of the "),a(28,"i"),o(29,"combobox"),c(),o(30," element and uses "),a(31,"i"),o(32,"tree"),c(),o(33," as the role. Each list item has a "),a(34,"i"),o(35,"treeitem"),c(),o(36," role along with "),a(37,"i"),o(38,"aria-label"),c(),o(39,", "),a(40,"i"),o(41,"aria-selected"),c(),o(42," and "),a(43,"i"),o(44,"aria-expanded"),c(),o(45," attributes. The container element of a treenode has the "),a(46,"i"),o(47,"group"),c(),o(48," role. The "),a(49,"i"),o(50,"aria-setsize"),c(),o(51,", "),a(52,"i"),o(53,"aria-posinset"),c(),o(54," and "),a(55,"i"),o(56,"aria-level"),c(),o(57," attributes are calculated implicitly and added to each treeitem. "),c()(),u(58,"app-code",0),a(59,"h3"),o(60,"Closed State Keyboard Support"),c(),a(61,"div",1)(62,"table",2)(63,"thead")(64,"tr")(65,"th"),o(66,"Key"),c(),a(67,"th"),o(68,"Function"),c()()(),a(69,"tbody")(70,"tr")(71,"td")(72,"i"),o(73,"tab"),c()(),a(74,"td"),o(75,"Moves focus to the cascadeselect element."),c()(),a(76,"tr")(77,"td")(78,"i"),o(79,"space"),c()(),a(80,"td"),o(81,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),c()(),a(82,"tr")(83,"td")(84,"i"),o(85,"down arrow"),c()(),a(86,"td"),o(87,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),c()()()()(),a(88,"h3"),o(89,"Popup Keyboard Support"),c(),a(90,"div",1)(91,"table",2)(92,"thead")(93,"tr")(94,"th"),o(95,"Key"),c(),a(96,"th"),o(97,"Function"),c()()(),a(98,"tbody")(99,"tr")(100,"td")(101,"i"),o(102,"tab"),c()(),a(103,"td"),o(104,"Hides the popup and moves focus to the next tabbable element."),c()(),a(105,"tr")(106,"td")(107,"i"),o(108,"shift"),c(),o(109," + "),a(110,"i"),o(111,"tab"),c()(),a(112,"td"),o(113,"Hides the popup and moves focus to the previous tabbable element."),c()(),a(114,"tr")(115,"td")(116,"i"),o(117,"enter"),c()(),a(118,"td"),o(119,"Selects the focused option and closes the popup."),c()(),a(120,"tr")(121,"td")(122,"i"),o(123,"space"),c()(),a(124,"td"),o(125,"Selects the focused option and closes the popup."),c()(),a(126,"tr")(127,"td")(128,"i"),o(129,"escape"),c()(),a(130,"td"),o(131,"Closes the popup, moves focus to the cascadeselect element."),c()(),a(132,"tr")(133,"td")(134,"i"),o(135,"down arrow"),c()(),a(136,"td"),o(137,"Moves focus to the next option."),c()(),a(138,"tr")(139,"td")(140,"i"),o(141,"up arrow"),c()(),a(142,"td"),o(143,"Moves focus to the previous option."),c()(),a(144,"tr")(145,"td")(146,"i"),o(147,"right arrow"),c()(),a(148,"td"),o(149,"If option is closed, opens the option otherwise moves focus to the first child option."),c()(),a(150,"tr")(151,"td")(152,"i"),o(153,"left arrow"),c()(),a(154,"td"),o(155,"If option is open, closes the option otherwise moves focus to the parent option."),c()()()()()),n&2&&(d(58),r("code",i.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[C,b],encapsulation:2})}return t})();var Wt=({dt:t})=>`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("cascadeselect.background")};
    border: 1px solid ${t("cascadeselect.border.color")};
    transition: background ${t("cascadeselect.transition.duration")}, color ${t("cascadeselect.transition.duration")}, border-color ${t("cascadeselect.transition.duration")}, outline-color ${t("cascadeselect.transition.duration")}, box-shadow ${t("cascadeselect.transition.duration")};
    border-radius: ${t("cascadeselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("cascadeselect.shadow")};
}

p-cascadeSelect.ng-invalid.ng-dirty .p-cascadeselect,
p-cascade-select.ng-invalid.ng-dirty .p-cascadeselect,
p-cascadeselect.ng-invalid.ng-dirty .p-cascadeselect {
    border-color: ${t("cascadeselect.invalid.border.color")};
}

p-cascadeSelect.ng-invalid.ng-dirty .p-cascadeselect.p-focus,
p-cascade-select.ng-invalid.ng-dirty .p-cascadeselect.p-focus,
p-cascadeselect.ng-invalid.ng-dirty .p-cascadeselect.p-focus {
    border-color: ${t("cascadeselect.focus.border.color")};
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: ${t("cascadeselect.hover.border.color")};
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: ${t("cascadeselect.focus.border.color")};
    box-shadow: ${t("cascadeselect.focus.ring.shadow")};
    outline: ${t("cascadeselect.focus.ring.width")} ${t("cascadeselect.focus.ring.style")} ${t("cascadeselect.focus.ring.color")};
    outline-offset: ${t("multiscascadeselectelect.focus.ring.offset")};
}

.p-cascadeselect.p-variant-filled {
    background: ${t("cascadeselect.filled.background")};
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${t("cascadeselect.filled.hover.background")};
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: ${t("cascadeselect.filled.focus.background")};
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: ${t("cascadeselect.disabled.background")};
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("cascadeselect.dropdown.color")};
    width: ${t("cascadeselect.dropdown.width")};
    border-start-end-radius: ${t("border.radius.md")};
    border-end-end-radius: ${t("border.radius.md")};
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: ${t("cascadeselect.padding.y")} ${t("cascadeselect.padding.x")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: ${t("cascadeselect.placeholder.color")};
}

p-cascadeselect.ng-invalid.ng-dirty .p-cascadeselect-label.p-placeholder {
    color: ${t("cascadeselect.invalid.placeholder.color")};
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: ${t("cascadeselect.disabled.color")};
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-cascadeselect-fluid {
    display: flex;
}

.p-cascadeselect-fluid .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: ${t("cascadeselect.overlay.background")};
    color: ${t("cascadeselect.overlay.color")};
    border: 1px solid ${t("cascadeselect.overlay.border.color")};
    border-radius: ${t("cascadeselect.overlay.border.radius")};
    box-shadow: ${t("cascadeselect.overlay.shadow")};
}

.p-cascadeselect .p-cascadeselect-overlay {
    min-width: 100%;
}

.p-cascadeselect-option-list {
    display: none;
    min-width: 100%;
    position: absolute;
    z-index: 1;
}

.p-cascadeselect-list {
    min-width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("cascadeselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("cascadeselect.list.gap")}
}

.p-cascadeselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    border: 0 none;
    color: ${t("cascadeselect.option.color")};
    background: transparent;
    transition: background ${t("cascadeselect.transition.duration")}, color ${t("cascadeselect.transition.duration")}, border-color ${t("cascadeselect.transition.duration")}, box-shadow ${t("cascadeselect.transition.duration")}, outline-color ${t("cascadeselect.transition.duration")};
    border-radius: ${t("cascadeselect.option.border.radius")};
}

.p-cascadeselect-option-active {
    overflow: visible;
}

.p-cascadeselect-option-active > .p-cascadeselect-option-content {
    background: ${t("cascadeselect.option.focus.background")};
    color: ${t("cascadeselect.option.focus.color")};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content {
    background: ${t("cascadeselect.option.focus.background")};
    color: ${t("cascadeselect.option.focus.color")};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content > .p-cascadeselect-group-icon-container > .p-cascadeselect-group-icon {
    color: ${t("cascadeselect.option.icon.focus.color")};
}

.p-cascadeselect-option-selected > .p-cascadeselect-option-content {
    background: ${t("cascadeselect.option.selected.background")};
    color: ${t("cascadeselect.option.selected.color")};
}

.p-cascadeselect-option-selected.p-focus > .p-cascadeselect-option-content {
    background: ${t("cascadeselect.option.selected.focus.background")};
    color: ${t("cascadeselect.option.selected.focus.color")};
}

.p-cascadeselect-option-active > .p-cascadeselect-option-list {
    inset-inline-start: 100%;
    top: 0;
}

.p-cascadeselect-option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    padding: ${t("cascadeselect.option.padding")};
    border-radius: ${t("cascadeselect.option.border.radius")};
    transition: background ${t("cascadeselect.transition.duration")}, color ${t("cascadeselect.transition.duration")}, border-color ${t("cascadeselect.transition.duration")}, box-shadow ${t("cascadeselect.transition.duration")}, outline-color ${t("cascadeselect.transition.duration")};
}

.p-cascadeselect-group-icon {
    font-size: ${t("cascadeselect.option.icon.size")};
    width: ${t("cascadeselect.option.icon.size")};
    height: ${t("cascadeselect.option.icon.size")};
    color: ${t("cascadeselect.option.icon.color")};
}

.p-cascadeselect-group-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-list {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: 1rem;
    padding-inline-end: 0;
}

.p-cascadeselect-mobile-active .p-cascadeselect-group-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-active > .p-cascadeselect-option-content .p-cascadeselect-group-icon {
    transform: rotate(-90deg);
}

.p-cascadeselect-sm .p-cascadeselect-label {
    font-size: ${t("cascadeselect.sm.font.size")};
    padding-block: ${t("cascadeselect.sm.padding.y")};
    padding-inline: ${t("cascadeselect.sm.padding.x")};
}

.p-cascadeselect-sm .p-cascadeselect-dropdown .p-icon {
    font-size: ${t("cascadeselect.sm.font.size")};
    width: ${t("cascadeselect.sm.font.size")};
    height: ${t("cascadeselect.sm.font.size")};
}

.p-cascadeselect-lg .p-cascadeselect-label {
    font-size: ${t("cascadeselect.lg.font.size")};
    padding-block: ${t("cascadeselect.lg.padding.y")};
    padding-inline: ${t("cascadeselect.lg.padding.x")};
}

.p-cascadeselect-lg .p-cascadeselect-dropdown .p-icon {
    font-size: ${t("cascadeselect.lg.font.size")};
    width: ${t("cascadeselect.lg.font.size")};
    height: ${t("cascadeselect.lg.font.size")};
}

/* For PrimeNG */
.p-cascadeselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("cascadeselect.clear.icon.color")};
}`,Nt={root:({props:t})=>({position:t.appendTo==="self"?"relative":void 0})},Bt={root:({instance:t,props:p})=>["p-cascadeselect p-component p-inputwrapper",{"p-cascadeselect-mobile":t.queryMatches(),"p-disabled":p.disabled,"p-invalid":p.invalid,"p-variant-filled":p.variant?p.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-focus":t.focused,"p-inputwrapper-filled":p.modelValue,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-cascadeselect-open":t.overlayVisible,"p-cascadeselect-fluid":p.fluid,"p-cascadeselect-sm p-inputfield-sm":p.size==="small","p-cascadeselect-lg p-inputfield-lg":p.size==="large"}],label:({instance:t,props:p})=>["p-cascadeselect-label",{"p-placeholder":t.label===p.placeholder,"p-cascadeselect-label-empty":!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}],dropdown:"p-cascadeselect-dropdown",loadingIcon:"p-cascadeselect-loading-icon",dropdownIcon:"p-cascadeselect-dropdown-icon",overlay:({instance:t})=>["p-cascadeselect-overlay p-component",{"p-cascadeselect-mobile-active":t.queryMatches()}],listContainer:"p-cascadeselect-list-container",list:"p-cascadeselect-list",option:({instance:t,processedOption:p})=>["p-cascadeselect-option",{"p-cascadeselect-option-active":t.isOptionActive(p),"p-cascadeselect-option-selected":t.isOptionSelected(p),"p-focus":t.isOptionFocused(p),"p-disabled":t.isOptionDisabled(p)}],optionContent:"p-cascadeselect-option-content",optionText:"p-cascadeselect-option-text",groupIcon:"p-cascadeselect-group-icon",optionList:"p-cascadeselect-overlay p-cascadeselect-option-list"},we=(()=>{class t extends lt{name="cascadeselect";theme=Wt;classes=Bt;inlineStyles=Nt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Fe(t)))(i||t)}})();static \u0275prov=Le({token:t,factory:t.\u0275fac})}return t})();var Rt=t=>({$implicit:t});function Qt(t,p){t&1&&le(0)}function $t(t,p){if(t&1&&(K(0),y(1,Qt,1,0,"ng-container",8),z()),t&2){let e=f().$implicit,n=f();d(),r("ngTemplateOutlet",n.optionTemplate)("ngTemplateOutletContext",ye(2,Rt,e==null?null:e.option))}}function Ht(t,p){if(t&1&&(a(0,"span",9),o(1),c()),t&2){let e=f().$implicit,n=f();I("data-pc-section","text"),d(),de(n.getOptionLabelToRender(e))}}function Kt(t,p){t&1&&u(0,"AngleRightIcon")}function zt(t,p){}function jt(t,p){t&1&&y(0,zt,0,0,"ng-template")}function Jt(t,p){if(t&1&&(a(0,"span",10),y(1,Kt,1,0,"AngleRightIcon",11)(2,jt,1,0,null,12),c()),t&2){let e=f(2);I("data-pc-section","groupIcon"),d(),r("ngIf",!e.groupicon),d(),r("ngTemplateOutlet",e.groupicon)}}function qt(t,p){if(t&1){let e=R();a(0,"p-cascadeselect-sub",13),Q("onChange",function(i){T(e);let l=f(2);return w(l.onChange.emit(i))})("onFocusChange",function(i){T(e);let l=f(2);return w(l.onFocusChange.emit(i))})("onFocusEnterChange",function(i){T(e);let l=f(2);return w(l.onFocusEnterChange.emit(i))}),c()}if(t&2){let e=f().$implicit,n=f();r("role","group")("selectId",n.selectId)("focusedOptionId",n.focusedOptionId)("activeOptionPath",n.activeOptionPath)("options",n.getOptionGroupChildren(e))("optionLabel",n.optionLabel)("optionValue",n.optionValue)("level",n.level+1)("optionGroupLabel",n.optionGroupLabel)("optionGroupChildren",n.optionGroupChildren)("dirty",n.dirty)("optionTemplate",n.optionTemplate)}}function Yt(t,p){if(t&1){let e=R();a(0,"li",3)(1,"div",4),Q("click",function(i){let l=T(e).$implicit,s=f();return w(s.onOptionClick(i,l))})("mouseenter",function(i){let l=T(e).$implicit,s=f();return w(s.onOptionMouseEnter(i,l))})("mousemove",function(i){let l=T(e).$implicit,s=f();return w(s.onOptionMouseMove(i,l))}),y(2,$t,2,4,"ng-container",5)(3,Ht,2,2,"ng-template",null,0,N)(5,Jt,3,3,"span",6),c(),y(6,qt,1,12,"p-cascadeselect-sub",7),c()}if(t&2){let e=p.$implicit,n=p.index,i=re(4),l=f();r("ngClass",l.getItemClass(e))("id",l.getOptionId(e)),I("aria-level",l.level+1)("aria-setsize",l.options.length)("data-pc-section","item")("aria-label",l.getOptionLabelToRender(e))("aria-selected",l.isOptionGroup(e)?void 0:l.isOptionSelected(e))("aria-posinset",n+1),d(),I("data-pc-section","content"),d(),r("ngIf",l.optionTemplate)("ngIfElse",i),d(3),r("ngIf",l.isOptionGroup(e)),d(),r("ngIf",l.isOptionGroup(e)&&l.isOptionActive(e))}}var Xt=["value"],Zt=["option"],ei=["header"],ti=["footer"],ii=["triggericon"],ni=["loadingicon"],oi=["optiongroupicon"],ai=["clearicon"],ci=["focusInput"],si=["container"],li=["panel"],ri=["overlay"],di=(t,p)=>({$implicit:t,placeholder:p}),pi=t=>({"p-cascadeselect-overlay p-component":!0,"p-cascadeselect-mobile-active":t});function mi(t,p){t&1&&le(0)}function ui(t,p){if(t&1&&(K(0),y(1,mi,1,0,"ng-container",16),z()),t&2){let e=f();d(),r("ngTemplateOutlet",e.valueTemplate||e._valueTemplate)("ngTemplateOutletContext",We(2,di,e.value,e.placeholder))}}function fi(t,p){if(t&1&&o(0),t&2){let e=f();pe(" ",e.label()," ")}}function hi(t,p){if(t&1){let e=R();a(0,"TimesIcon",18),Q("click",function(i){T(e);let l=f(2);return w(l.clear(i))}),c()}t&2&&I("data-pc-section","clearicon")("aria-hidden",!0)}function gi(t,p){}function yi(t,p){t&1&&y(0,gi,0,0,"ng-template")}function Ci(t,p){if(t&1){let e=R();a(0,"span",18),Q("click",function(i){T(e);let l=f(2);return w(l.clear(i))}),y(1,yi,1,0,null,19),c()}if(t&2){let e=f(2);I("data-pc-section","clearicon")("aria-hidden",!0),d(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function bi(t,p){if(t&1&&(K(0),y(1,hi,1,2,"TimesIcon",17)(2,Ci,2,3,"span",17),z()),t&2){let e=f();d(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),r("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Si(t,p){t&1&&le(0)}function _i(t,p){if(t&1&&(K(0),y(1,Si,1,0,"ng-container",19),z()),t&2){let e=f(2);d(),r("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function vi(t,p){if(t&1&&u(0,"span",22),t&2){let e=f(3);r("ngClass","p-cascadeselect-loading-icon pi-spin "+e.loadingIcon)}}function Oi(t,p){t&1&&u(0,"span",23),t&2&&Y("p-cascadeselect-loading-icon pi pi-spinner pi-spin")}function xi(t,p){if(t&1&&(K(0),y(1,vi,1,1,"span",20)(2,Oi,1,2,"span",21),z()),t&2){let e=f(2);d(),r("ngIf",e.loadingIcon),d(),r("ngIf",!e.loadingIcon)}}function Ti(t,p){if(t&1&&(K(0),y(1,_i,2,1,"ng-container",12)(2,xi,3,2,"ng-container",12),z()),t&2){let e=f();d(),r("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),d(),r("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function wi(t,p){t&1&&u(0,"ChevronDownIcon",26),t&2&&r("styleClass","p-cascadeselect-dropdown-icon")}function Ii(t,p){}function Mi(t,p){t&1&&y(0,Ii,0,0,"ng-template")}function Ai(t,p){if(t&1&&(a(0,"span",27),y(1,Mi,1,0,null,19),c()),t&2){let e=f(2);d(),r("ngTemplateOutlet",e.triggerIconTemplate||e._triggerIconTemplate)}}function Li(t,p){if(t&1&&y(0,wi,1,1,"ChevronDownIcon",24)(1,Ai,2,1,"span",25),t&2){let e=f();r("ngIf",!e.triggerIconTemplate&&!e._triggerIconTemplate),d(),r("ngIf",e.triggerIconTemplate||e._triggerIconTemplate)}}function Di(t,p){}function Ui(t,p){t&1&&y(0,Di,0,0,"ng-template")}function Ei(t,p){}function Fi(t,p){t&1&&y(0,Ei,0,0,"ng-template")}function Gi(t,p){if(t&1){let e=R();a(0,"div",28,6),y(2,Ui,1,0,null,19),a(3,"div",29)(4,"p-cascadeselect-sub",30),Q("onChange",function(i){T(e);let l=f();return w(l.onOptionClick(i))})("onFocusChange",function(i){T(e);let l=f();return w(l.onOptionMouseMove(i))})("onFocusEnterChange",function(i){T(e);let l=f();return w(l.onOptionMouseEnter(i))}),c()(),a(5,"span",14),o(6),c(),y(7,Fi,1,0,null,19),c()}if(t&2){let e=f();Y(e.panelStyleClass),r("ngClass",ye(24,pi,e.queryMatches()))("ngStyle",e.panelStyle),I("data-pc-section","panel"),d(2),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),I("data-pc-section","wrapper"),d(),r("options",e.processedOptions)("selectId",e.id)("focusedOptionId",e.focused?e.focusedOptionId:void 0)("activeOptionPath",e.activeOptionPath())("optionLabel",e.optionLabel)("optionValue",e.optionValue)("level",0)("optionTemplate",e.optionTemplate||e._optionTemplate)("groupicon",e.groupIconTemplate||e.groupIconTemplate)("optionGroupLabel",e.optionGroupLabel)("optionGroupChildren",e.optionGroupChildren)("optionDisabled",e.optionDisabled)("root",!0)("dirty",e.dirty)("role","tree"),d(2),pe(" ",e.selectedMessageText," "),d(),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Vi={provide:Re,useExisting:Ae(()=>S),multi:!0},ki=(()=>{class t extends xe{cascadeselect;role;selectId;activeOptionPath;optionDisabled;focusedOptionId;options;optionGroupChildren;optionTemplate;groupicon;level=0;optionLabel;optionValue;optionGroupLabel;dirty;root;onChange=new F;onFocusChange=new F;onFocusEnterChange=new F;get listLabel(){return this.config.getTranslation(st.ARIA).listLabel}constructor(e){super(),this.cascadeselect=e}ngOnInit(){super.ngOnInit(),this.root||this.position()}onOptionClick(e,n){this.onChange.emit({originalEvent:e,processedOption:n,isFocus:!0})}onOptionMouseEnter(e,n){this.onFocusEnterChange.emit({originalEvent:e,processedOption:n})}onOptionMouseMove(e,n){this.onFocusChange.emit({originalEvent:e,processedOption:n})}getOptionId(e){return`${this.selectId}_${e.key}`}getOptionLabel(e){return this.optionLabel?B(e.option,this.optionLabel):e.option}getOptionValue(e){return this.optionValue?B(e.option,this.optionValue):e.option}getOptionLabelToRender(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)}isOptionDisabled(e){return this.optionDisabled?B(e.option,this.optionDisabled):!1}getOptionGroupLabel(e){return this.optionGroupLabel?B(e.option,this.optionGroupLabel):null}getOptionGroupChildren(e){return e.children}isOptionGroup(e){return E(e.children)}isOptionSelected(e){return ve(this.cascadeselect?.modelValue(),e?.option)}isOptionActive(e){return this.activeOptionPath.some(n=>n.key===e.key)}isOptionFocused(e){return this.focusedOptionId===this.getOptionId(e)}getItemClass(e){return{"p-cascadeselect-option":!0,"p-cascadeselect-option-group":this.isOptionGroup(e),"p-cascadeselect-option-active":this.isOptionActive(e),"p-cascadeselect-option-selected":this.isOptionSelected(e),"p-focus":this.isOptionFocused(e),"p-disabled":this.isOptionDisabled(e)}}position(){let e=this.el.nativeElement.parentElement,n=nt(e),i=Xe(),l=this.el.nativeElement.children[0].offsetParent?this.el.nativeElement.children[0].offsetWidth:it(this.el.nativeElement.children[0]),s=Ze(e.children[0]);parseInt(n.left,10)+s+l>i.width-et()&&(this.el.nativeElement.children[0].style.left="-200%")}static \u0275fac=function(n){return new(n||t)(he(S))};static \u0275cmp=g({type:t,selectors:[["p-cascadeSelectSub"],["p-cascadeselect-sub"]],inputs:{role:"role",selectId:"selectId",activeOptionPath:"activeOptionPath",optionDisabled:"optionDisabled",focusedOptionId:"focusedOptionId",options:"options",optionGroupChildren:"optionGroupChildren",optionTemplate:"optionTemplate",groupicon:"groupicon",level:[2,"level","level",be],optionLabel:"optionLabel",optionValue:"optionValue",optionGroupLabel:"optionGroupLabel",dirty:[2,"dirty","dirty",V],root:[2,"root","root",V]},outputs:{onChange:"onChange",onFocusChange:"onFocusChange",onFocusEnterChange:"onFocusEnterChange"},features:[ge],decls:2,vars:4,consts:[["defaultOptionTemplate",""],["aria-orientation","horizontal",1,"p-cascadeselect-list"],["ngFor","",3,"ngForOf"],["role","treeitem",3,"ngClass","id"],["pRipple","",1,"p-cascadeselect-option-content",3,"click","mouseenter","mousemove"],[4,"ngIf","ngIfElse"],["class","p-cascadeselect-group-icon",4,"ngIf"],["class","p-cascadeselect-list p-cascadeselect-overlay p-cascadeselect-option-list",3,"role","selectId","focusedOptionId","activeOptionPath","options","optionLabel","optionValue","level","optionGroupLabel","optionGroupChildren","dirty","optionTemplate","onChange","onFocusChange","onFocusEnterChange",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-cascadeselect-option-text"],[1,"p-cascadeselect-group-icon"],[4,"ngIf"],[4,"ngTemplateOutlet"],[1,"p-cascadeselect-list","p-cascadeselect-overlay","p-cascadeselect-option-list",3,"onChange","onFocusChange","onFocusEnterChange","role","selectId","focusedOptionId","activeOptionPath","options","optionLabel","optionValue","level","optionGroupLabel","optionGroupChildren","dirty","optionTemplate"]],template:function(n,i){n&1&&(a(0,"ul",1),y(1,Yt,7,13,"ng-template",2),c()),n&2&&(I("role",i.role)("data-pc-section",i.level===0?"list":"sublist")("aria-label",i.listLabel),d(),r("ngForOf",i.options))},dependencies:[t,te,Se,Ne,ee,_e,ut,dt,ie],encapsulation:2,changeDetection:0})}return t})(),S=(()=>{class t extends xe{overlayService;id;searchMessage;emptyMessage;selectionMessage;emptySearchMessage;emptySelectionMessage;searchLocale;optionDisabled;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;styleClass;style;options;optionLabel;optionValue;optionGroupLabel;optionGroupChildren;placeholder;value;dataKey;inputId;size;tabindex=0;ariaLabelledBy;inputLabel;ariaLabel;appendTo;disabled;showClear=!1;panelStyleClass;panelStyle;overlayOptions;autofocus;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}variant;loading=!1;loadingIcon;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}fluid=!1;breakpoint="960px";onChange=new F;onGroupChange=new F;onShow=new F;onHide=new F;onClear=new F;onBeforeShow=new F;onBeforeHide=new F;onFocus=new F;onBlur=new F;focusInputViewChild;containerViewChild;panelViewChild;overlayViewChild;valueTemplate;optionTemplate;headerTemplate;footerTemplate;triggerIconTemplate;loadingIconTemplate;groupIconTemplate;clearIconTemplate;_valueTemplate;_optionTemplate;_headerTemplate;_footerTemplate;_triggerIconTemplate;_loadingIconTemplate;_groupIconTemplate;_clearIconTemplate;_showTransitionOptions="";_hideTransitionOptions="";selectionPath=null;focused=!1;overlayVisible=!1;clicked=!1;dirty=!1;searchValue;searchTimeout;onModelChange=()=>{};onModelTouched=()=>{};focusedOptionInfo=q({index:-1,level:0,parentKey:""});activeOptionPath=q([]);modelValue=q(null);processedOptions=[];_componentStyle=De(we);get containerClass(){return{"p-cascadeselect p-component p-inputwrapper":!0,"p-cascadeselect-clearable":this.showClear&&!this.disabled,"p-cascadeselect-mobile":this.queryMatches(),"p-disabled":this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue(),"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-inputwrapper-focus":this.focused||this.overlayVisible,"p-cascadeselect-open":this.overlayVisible,"p-cascadeselect-fluid":this.hasFluid,"p-cascadeselect-sm p-inputfield-sm":this.size==="small","p-cascadeselect-lg p-inputfield-lg":this.size==="large"}}get labelClass(){return{"p-cascadeselect-label":!0,"p-placeholder":this.label()===this.placeholder,"p-cascadeselect-label-empty":!this.value&&(this.label()==="p-emptylabel"||this.label().length===0)}}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}get focusedOptionId(){return this.focusedOptionInfo().index!==-1?`${this.id}${E(this.focusedOptionInfo().parentKey)?"_"+this.focusedOptionInfo().parentKey:""}_${this.focusedOptionInfo().index}`:null}get filled(){return typeof this.modelValue()=="string"?!!this.modelValue():this.modelValue()||this.modelValue()!=null||this.modelValue()!=null}get searchResultMessageText(){return E(this.visibleOptions())?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptySearchMessage||this.config.translation.emptySearchMessage||""}get emptyMessageText(){return this.emptyMessage||this.config.translation.emptyMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText}visibleOptions=Ce(()=>{let e=this.activeOptionPath().find(n=>n.key===this.focusedOptionInfo().parentKey);return e?e.children:this.processedOptions});label=Ce(()=>{let e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption()){let n=this.findOptionPathByValue(this.modelValue(),null),i=E(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e});get _label(){let e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption()){let n=this.findOptionPathByValue(this.modelValue(),null),i=E(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"value":this._valueTemplate=e.template;break;case"option":this._optionTemplate=e.template;break;case"triggericon":this._triggerIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"optiongroupicon":this._groupIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.options&&(this.processedOptions=this.createProcessedOptions(e.options.currentValue||[]),this.updateModel(null))}hasSelectedOption(){return E(this.modelValue())}createProcessedOptions(e,n=0,i={},l=""){let s=[];return e&&e.forEach((m,G)=>{let H=(l!==""?l+"_":"")+G,$={option:m,index:G,level:n,key:H,parent:i,parentKey:l};$.children=this.createProcessedOptions(this.getOptionGroupChildren(m,n),n+1,$,H),s.push($)}),s}onInputFocus(e){this.disabled||(this.focused=!0,this.onFocus.emit(e))}onInputBlur(e){this.focused=!1,this.focusedOptionInfo.set({indeX:-1,level:0,parentKey:""}),this.searchValue="",this.onModelTouched(),this.onBlur.emit(e)}onInputKeyDown(e){if(this.disabled||this.loading){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"PageDown":case"PageUp":case"ShiftLeft":case"ShiftRight":break;default:!n&&Ye(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1}onArrowDownKey(e){if(!this.overlayVisible)this.show();else{let n=this.focusedOptionInfo().index!==-1?this.findNextOptionIndex(this.focusedOptionInfo().index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n,!0)}e.preventDefault()}onArrowUpKey(e){if(e.altKey){if(this.focusedOptionInfo().index!==-1){let n=this.visibleOptions[this.focusedOptionInfo().index];!this.isProccessedOptionGroup(n)&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide(),e.preventDefault()}else{let n=this.focusedOptionInfo().index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo().index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n,!0),!this.overlayVisible&&this.show(),e.preventDefault()}}onArrowLeftKey(e){if(this.overlayVisible){let n=this.visibleOptions()[this.focusedOptionInfo().index],i=this.activeOptionPath().find(m=>m.key===n.parentKey),l=this.focusedOptionInfo().parentKey===""||i&&i.key===this.focusedOptionInfo().parentKey,s=ue(n.parent);if(l){let m=this.activeOptionPath().filter(G=>G.parentKey!==this.focusedOptionInfo().parentKey);this.activeOptionPath.set(m)}s||(this.focusedOptionInfo.set({index:-1,parentKey:i?i.parentKey:""}),this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}}onArrowRightKey(e){if(this.overlayVisible){let n=this.visibleOptions()[this.focusedOptionInfo().index];this.isProccessedOptionGroup(n)&&(this.activeOptionPath().some(s=>n.key===s.key)?(this.focusedOptionInfo.set({index:-1,parentKey:n.key}),this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:n})),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()}onEnterKey(e){if(!this.overlayVisible)this.focusedOptionInfo.set(Z(X({},this.focusedOptionInfo()),{index:-1})),this.onArrowDownKey(e);else if(this.focusedOptionInfo().index!==-1){let n=this.visibleOptions()[this.focusedOptionInfo().index],i=this.isProccessedOptionGroup(n);this.onOptionClick({originalEvent:e,processedOption:n}),!i&&this.hide()}e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.overlayVisible&&this.hide(e,!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionInfo().index!==-1){let n=this.visibleOptions()[this.focusedOptionInfo().index];!this.isProccessedOptionGroup(n)&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide()}onBackspaceKey(e){E(this.modelValue())&&this.showClear&&this.clear(),e.stopPropagation()}equalityKey(){return this.optionValue?null:this.dataKey}updateModel(e,n){this.value=e,this.onModelChange(e),this.modelValue.set(e),this.onChange.emit({originalEvent:n,value:e})}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionInfo().index=this.findFirstFocusedOptionIndex(),this.onOptionChange({originalEvent:null,processedOption:this.visibleOptions()[this.focusedOptionInfo().index],isHide:!1}),!this.overlayVisible&&this.focusedOptionInfo.set({index:-1,level:0,parentKey:""}))}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId,i=tt(this.panelViewChild?.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})}changeFocusedOptionIndex(e,n,i){let l=this.focusedOptionInfo();l.index!==n&&(this.focusedOptionInfo.set(Z(X({},l),{index:n})),this.scrollInView(),this.focusOnHover&&this.onOptionClick({originalEvent:e,processedOption:this.visibleOptions()[n],isHide:!1,preventSelection:i}),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions()[n],isHide:!1}))}matchMediaListener;onOptionSelect(e){let{originalEvent:n,value:i,isHide:l}=e,s=this.getOptionValue(i),m=this.activeOptionPath();m.forEach(G=>G.selected=!0),this.activeOptionPath.set(m),this.updateModel(s,n),l&&this.hide(e,!0)}onOptionGroupSelect(e){this.dirty=!0,this.onGroupChange.emit(e)}onContainerClick(e){this.disabled||this.loading||(this.overlayViewChild?.el?.nativeElement?.contains(e.target)||(this.overlayVisible?this.hide():this.show(),this.focusInputViewChild?.nativeElement.focus()),this.clicked=!0)}isOptionMatched(e){return this.isValidOption(e)&&this.getProccessedOptionLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))}isOptionDisabled(e){return this.optionDisabled?B(e,this.optionDisabled):!1}isValidOption(e){return!!e&&!this.isOptionDisabled(e.option)}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isSelected(e){return this.activeOptionPath().some(n=>n.key===e.key)}findOptionPathByValue(e,n,i=0){if(n=n||i===0&&this.processedOptions,!n)return null;if(ue(e))return[];for(let l=0;l<n.length;l++){let s=n[l];if(ve(e,this.getOptionValue(s.option),this.equalityKey()))return[s];let m=this.findOptionPathByValue(e,s.children,i+1);if(m)return m.unshift(s),m}}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Oe(this.visibleOptions(),e=>this.isValidOption(e))}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?Oe(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findSelectedOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,l=!1,s=this.focusedOptionInfo();return s.index!==-1?(i=this.visibleOptions().slice(s.index).findIndex(m=>this.isOptionMatched(m)),i=i===-1?this.visibleOptions().slice(0,s.index).findIndex(m=>this.isOptionMatched(m)):i+s.index):i=this.visibleOptions().findIndex(m=>this.isOptionMatched(m)),i!==-1&&(l=!0),i===-1&&s.index===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),l}hide(e,n=!1){let i=()=>{this.overlayVisible=!1,this.clicked=!1,this.activeOptionPath.set([]),this.focusedOptionInfo.set({index:-1,level:0,parentKey:""}),n&&fe(this.focusInputViewChild.nativeElement),this.onHide.emit(e),this.cd.markForCheck()};setTimeout(()=>{i()},0)}show(e,n=!1){this.onShow.emit(e),this.overlayVisible=!0;let i=this.hasSelectedOption()?this.findOptionPathByValue(this.modelValue()):this.activeOptionPath();this.activeOptionPath.set(i);let l;if(this.hasSelectedOption()&&E(this.activeOptionPath())){let s=this.activeOptionPath()[this.activeOptionPath().length-1];l={index:s.index,level:s.level,parentKey:s.parentKey}}else l={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};this.focusedOptionInfo.set(l),n&&fe(this.focusInputViewChild.nativeElement)}clear(e){E(this.modelValue())&&this.showClear&&(this.updateModel(null),this.focusedOptionInfo.set({index:-1,level:0,parentKey:""}),this.activeOptionPath.set([]),this.onClear.emit()),e&&e.stopPropagation()}getOptionLabel(e){return this.optionLabel?B(e,this.optionLabel):e}getOptionValue(e){return this.optionValue?B(e,this.optionValue):e}getOptionGroupLabel(e){return this.optionGroupLabel?B(e,this.optionGroupLabel):null}getOptionGroupChildren(e,n){return B(e,this.optionGroupChildren[n])}isOptionGroup(e,n){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[n])}isProccessedOptionGroup(e){return E(e?.children)}getProccessedOptionLabel(e){return this.isProccessedOptionGroup(e)?this.getOptionGroupLabel(e.option):this.getOptionLabel(e.option)}constructor(e){super(),this.overlayService=e,Ue(()=>{let n=this.activeOptionPath();E(n)&&this.overlayViewChild.alignOverlay()})}query;queryMatches=q(!1);mobileActive=q(!1);onOptionChange(e){let{processedOption:n,type:i}=e;if(ue(n))return;let{index:l,key:s,level:m,parentKey:G,children:H}=n,$=E(H),J=this.activeOptionPath().filter(ne=>ne.parentKey!==G&&ne.parentKey!==s);this.focusedOptionInfo.set({index:l,level:m,parentKey:G}),!(i=="hover"&&this.queryMatches())&&($&&J.push(n),this.activeOptionPath.set([...J]))}onOptionClick(e){let{originalEvent:n,processedOption:i,isFocus:l,isHide:s,preventSelection:m}=e,{index:G,key:H,level:$,parentKey:J}=i,ne=this.isProccessedOptionGroup(i);if(this.isSelected(i)){let oe=this.activeOptionPath().filter(ae=>H!==ae.key&&H.startsWith(ae.key));this.activeOptionPath.set([...oe]),this.focusedOptionInfo.set({index:G,level:$,parentKey:J})}else if(ne)this.onOptionChange(e),this.onOptionGroupSelect({originalEvent:n,value:i.option,isFocus:!1});else{let oe=this.activeOptionPath().filter(ae=>ae.parentKey!==J);oe.push(i),this.focusedOptionInfo.set({index:G,level:$,parentKey:J}),(!m||i?.children.length!==0)&&(this.activeOptionPath.set([...oe]),this.onOptionSelect({originalEvent:n,value:i.option,isHide:l}))}l&&fe(this.focusInputViewChild.nativeElement)}onOptionMouseEnter(e){this.focusOnHover&&(this.dirty||!this.dirty&&E(this.modelValue())?this.onOptionChange(Z(X({},e),{type:"hover"})):!this.dirty&&e.processedOption.level===0&&this.onOptionClick(Z(X({},e),{type:"hover"})))}onOptionMouseMove(e){this.focused&&this.focusOnHover&&this.changeFocusedOptionIndex(e,e.processedOption.index)}ngOnInit(){super.ngOnInit(),this.id=this.id||ot("pn_id_"),this.autoUpdateModel(),this.bindMatchMediaListener()}bindMatchMediaListener(){if(!this.matchMediaListener){let e=this.document.defaultView;if(e&&e.matchMedia){let n=e.matchMedia(`(max-width: ${this.breakpoint})`);this.query=n,this.queryMatches.set(n?.matches),this.matchMediaListener=()=>{this.queryMatches.set(n?.matches),this.mobileActive.set(!1)},this.query.addEventListener("change",this.matchMediaListener)}}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}onOverlayAnimationDone(e){e.toState==="void"&&(this.dirty=!1)}writeValue(e){this.value=e,this.updateModel(e),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}ngOnDestroy(){this.matchMediaListener&&this.unbindMatchMediaListener()}static \u0275fac=function(n){return new(n||t)(he(at))};static \u0275cmp=g({type:t,selectors:[["p-cascadeSelect"],["p-cascadeselect"],["p-cascade-select"]],contentQueries:function(n,i,l){if(n&1&&Ge(l,Xt,4)(l,Zt,4)(l,ei,4)(l,ti,4)(l,ii,4)(l,ni,4)(l,oi,4)(l,ai,4)(l,ct,4),n&2){let s;A(s=L())&&(i.valueTemplate=s.first),A(s=L())&&(i.optionTemplate=s.first),A(s=L())&&(i.headerTemplate=s.first),A(s=L())&&(i.footerTemplate=s.first),A(s=L())&&(i.triggerIconTemplate=s.first),A(s=L())&&(i.loadingIconTemplate=s.first),A(s=L())&&(i.groupIconTemplate=s.first),A(s=L())&&(i.clearIconTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&Ve(ci,5)(si,5)(li,5)(ri,5),n&2){let l;A(l=L())&&(i.focusInputViewChild=l.first),A(l=L())&&(i.containerViewChild=l.first),A(l=L())&&(i.panelViewChild=l.first),A(l=L())&&(i.overlayViewChild=l.first)}},inputs:{id:"id",searchMessage:"searchMessage",emptyMessage:"emptyMessage",selectionMessage:"selectionMessage",emptySearchMessage:"emptySearchMessage",emptySelectionMessage:"emptySelectionMessage",searchLocale:"searchLocale",optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",V],selectOnFocus:[2,"selectOnFocus","selectOnFocus",V],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",V],styleClass:"styleClass",style:"style",options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",placeholder:"placeholder",value:"value",dataKey:"dataKey",inputId:"inputId",size:"size",tabindex:[2,"tabindex","tabindex",be],ariaLabelledBy:"ariaLabelledBy",inputLabel:"inputLabel",ariaLabel:"ariaLabel",appendTo:"appendTo",disabled:[2,"disabled","disabled",V],showClear:[2,"showClear","showClear",V],panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",overlayOptions:"overlayOptions",autofocus:[2,"autofocus","autofocus",V],showTransitionOptions:"showTransitionOptions",variant:"variant",loading:[2,"loading","loading",V],loadingIcon:"loadingIcon",hideTransitionOptions:"hideTransitionOptions",fluid:[2,"fluid","fluid",V],breakpoint:"breakpoint"},outputs:{onChange:"onChange",onGroupChange:"onGroupChange",onShow:"onShow",onHide:"onHide",onClear:"onClear",onBeforeShow:"onBeforeShow",onBeforeHide:"onBeforeHide",onFocus:"onFocus",onBlur:"onBlur"},features:[ke([Vi,we]),ge,Ee],decls:20,vars:34,consts:[["container",""],["focusInput",""],["defaultValueTemplate",""],["elseBlock",""],["overlay",""],["content",""],["panel",""],[3,"click","ngClass","ngStyle"],[1,"p-hidden-accessible"],["readonly","","type","text","role","combobox","aria-haspopup","tree",3,"focus","blur","keydown","disabled","placeholder","tabindex","pAutoFocus"],[3,"ngClass"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["role","button","aria-haspopup","listbox",1,"p-cascadeselect-dropdown"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"visibleChange","onAnimationDone","onBeforeShow","onShow","onBeforeHide","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-cascadeselect-clear-icon",3,"click",4,"ngIf"],[1,"p-cascadeselect-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],[3,"styleClass",4,"ngIf"],["class","p-cascadeselect-dropdown-icon",4,"ngIf"],[3,"styleClass"],[1,"p-cascadeselect-dropdown-icon"],[3,"ngClass","ngStyle"],[1,"p-cascadeselect-list-container"],[3,"onChange","onFocusChange","onFocusEnterChange","options","selectId","focusedOptionId","activeOptionPath","optionLabel","optionValue","level","optionTemplate","groupicon","optionGroupLabel","optionGroupChildren","optionDisabled","root","dirty","role"]],template:function(n,i){if(n&1){let l=R();a(0,"div",7,0),Q("click",function(m){return i.onContainerClick(m)}),a(2,"div",8)(3,"input",9,1),Q("focus",function(m){return i.onInputFocus(m)})("blur",function(m){return i.onInputBlur(m)})("keydown",function(m){return i.onInputKeyDown(m)}),c()(),a(5,"span",10),y(6,ui,2,5,"ng-container",11)(7,fi,1,1,"ng-template",null,2,N),c(),y(9,bi,3,2,"ng-container",12),a(10,"div",13),y(11,Ti,3,2,"ng-container",11)(12,Li,2,2,"ng-template",null,3,N),c(),a(14,"span",14),o(15),c(),a(16,"p-overlay",15,4),O("visibleChange",function(m){return T(l),v(i.overlayVisible,m)||(i.overlayVisible=m),w(m)}),Q("onAnimationDone",function(m){return i.onOverlayAnimationDone(m)})("onBeforeShow",function(m){return i.onBeforeShow.emit(m)})("onShow",function(m){return i.show(m)})("onBeforeHide",function(m){return i.onBeforeHide.emit(m)})("onHide",function(m){return i.hide(m)}),y(18,Gi,8,26,"ng-template",null,5,N),c()()}if(n&2){let l=re(8),s=re(13);Y(i.styleClass),r("ngClass",i.containerClass)("ngStyle",i.style),I("data-pc-name","cascadeselect")("data-pc-section","root"),d(2),I("data-pc-section","hiddenInputWrapper"),d(),r("disabled",i.disabled)("placeholder",i.placeholder)("tabindex",i.disabled?-1:i.tabindex)("pAutoFocus",i.autofocus),I("id",i.inputId)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-expanded",i.overlayVisible??!1)("aria-controls",i.overlayVisible?i.id+"_tree":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0),d(2),r("ngClass",i.labelClass),I("data-pc-section","label"),d(),r("ngIf",i.valueTemplate||i._valueTemplate)("ngIfElse",l),d(3),r("ngIf",i.filled&&!i.disabled&&i.showClear),d(),I("aria-expanded",i.overlayVisible??!1)("data-pc-section","dropdownIcon")("aria-hidden",!0),d(),r("ngIf",i.loading)("ngIfElse",s),d(4),pe(" ",i.searchResultMessageText," "),d(),_("visible",i.overlayVisible),r("options",i.overlayOptions)("target","@parent")("appendTo",i.appendTo)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}},dependencies:[te,Se,ee,_e,Be,gt,rt,ki,pt,mt,ie],encapsulation:2,changeDetection:0})}return t})(),xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=ce({imports:[S,ie,ie]})}return t})();var Wi=()=>({minWidth:"14rem"}),Ni=()=>["states","cities"],Tt=(()=>{class t{countries;selectedCity;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />`,html:`<div class="card flex justify-center">
    <p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-basic-demo',
    templateUrl: './cascade-select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectBasicDemo implements OnInit {
    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-basic-demo"]],standalone:!1,decls:15,vars:8,consts:[[1,"card","flex","justify-center"],["optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",3,"ngModelChange","ngModel","options","optionGroupChildren"],["selector","cascade-select-basic-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2," CascadeSelect requires a value to bind and a collection of arbitrary objects with a nested hierarchy. "),a(3,"i"),o(4,"optionGroupLabel"),c(),o(5," is used for the text of a category and "),a(6,"i"),o(7,"optionGroupChildren"),c(),o(8," is to define the children of the category. Note that order of the "),a(9,"i"),o(10,"optionGroupChildren"),c(),o(11," matters and it should correspond to the data hierarchy. "),c()(),a(12,"div",0)(13,"p-cascadeselect",1),O("ngModelChange",function(s){return v(i.selectedCity,s)||(i.selectedCity=s),s}),c()(),u(14,"app-code",2)),n&2&&(d(13),D(h(6,Wi)),_("ngModel",i.selectedCity),r("options",i.countries)("optionGroupChildren",h(7,Ni)),d(),r("code",i.code))},dependencies:[S,x,U,C,b],encapsulation:2})}return t})();var Bi=()=>({minWidth:"14rem"}),wt=(()=>{class t{code={basic:`<p-cascadeselect [disabled]="true" placeholder="Disabled" [style]="{ minWidth: '14rem' }" />`,html:`<div class="card flex justify-center">
    <p-cascadeselect [disabled]="true" placeholder="Disabled" [style]="{ minWidth: '14rem' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-disabled-demo',
    templateUrl: './cascade-select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectDisabledDemo {

}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-disabled-demo"]],standalone:!1,decls:9,vars:5,consts:[[1,"card","flex","justify-center"],["placeholder","Disabled",3,"disabled"],["selector","cascade-select-disabled-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"When "),a(3,"i"),o(4,"disabled"),c(),o(5," is present, the element cannot be edited and focused."),c()(),a(6,"div",0),u(7,"p-cascadeselect",1),c(),u(8,"app-code",2)),n&2&&(d(7),D(h(4,Bi)),r("disabled",!0),d(),r("code",i.code))},dependencies:[S,C,b],encapsulation:2})}return t})();var Pi=()=>({minWidth:"14rem"}),Ri=()=>["states","cities"],It=(()=>{class t{countries;selectedCity;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-cascadeselect [(ngModel)]="selectedCity" variant="filled" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />`,html:`<div class="card flex justify-center">
    <p-cascadeselect [(ngModel)]="selectedCity" variant="filled" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-filled-demo',
    templateUrl: './cascade-select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectFilledDemo implements OnInit {
    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-filled-demo"]],standalone:!1,decls:15,vars:8,consts:[[1,"card","flex","justify-center"],["variant","filled","optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",3,"ngModelChange","ngModel","options","optionGroupChildren"],["selector","cascade-select-filled-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Specify the "),a(3,"i"),o(4,"variant"),c(),o(5," property as "),a(6,"i"),o(7,"filled"),c(),o(8," to display the component with a higher visual emphasis than the default "),a(9,"i"),o(10,"outlined"),c(),o(11," style."),c()(),a(12,"div",0)(13,"p-cascadeselect",1),O("ngModelChange",function(s){return v(i.selectedCity,s)||(i.selectedCity=s),s}),c()(),u(14,"app-code",2)),n&2&&(d(13),D(h(6,Pi)),_("ngModel",i.selectedCity),r("options",i.countries)("optionGroupChildren",h(7,Ri)),d(),r("code",i.code))},dependencies:[S,x,U,C,b],encapsulation:2})}return t})();var Ie=()=>["states","cities"],Mt=(()=>{class t{value1;value2;value3;countries;selectedCity;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-floatlabel class="w-full md:w-56">
    <p-cascadeselect [(ngModel)]="value1" inputId="over_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-cascadeselect [(ngModel)]="value2" inputId="in_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-cascadeselect [(ngModel)]="value3" inputId="on_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-56">
        <p-cascadeselect [(ngModel)]="value1" inputId="over_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="in">
        <p-cascadeselect [(ngModel)]="value2" inputId="in_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="on">
        <p-cascadeselect [(ngModel)]="value3" inputId="on_label" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'cascade-select-float-label-demo',
    templateUrl: './cascade-select-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect, FloatLabel]
})
export class CascadeSelectFloatLabelDemo implements OnInit {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;

    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-float-label-demo"]],standalone:!1,decls:20,vars:13,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-56"],["inputId","over_label","optionLabel","cname","optionGroupLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options","optionGroupChildren"],["for","over_label"],["variant","in",1,"w-full","md:w-56"],["inputId","in_label","optionLabel","cname","optionGroupLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options","optionGroupChildren"],["for","in_label"],["variant","on",1,"w-full","md:w-56"],["inputId","on_label","optionLabel","cname","optionGroupLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options","optionGroupChildren"],["for","on_label"],["selector","cascade-select-float-label-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2," A floating label appears on top of the input field when focused. Visit "),a(3,"a",0),o(4,"FloatLabel"),c(),o(5," documentation for more information. "),c()(),a(6,"div",1)(7,"p-floatlabel",2)(8,"p-cascadeselect",3),O("ngModelChange",function(s){return v(i.value1,s)||(i.value1=s),s}),c(),a(9,"label",4),o(10,"Over Label"),c()(),a(11,"p-floatlabel",5)(12,"p-cascadeselect",6),O("ngModelChange",function(s){return v(i.value2,s)||(i.value2=s),s}),c(),a(13,"label",7),o(14,"In Label"),c()(),a(15,"p-floatlabel",8)(16,"p-cascadeselect",9),O("ngModelChange",function(s){return v(i.value3,s)||(i.value3=s),s}),c(),a(17,"label",10),o(18,"On Label"),c()()(),u(19,"app-code",11)),n&2&&(d(8),_("ngModel",i.value1),r("options",i.countries)("optionGroupChildren",h(10,Ie)),d(4),_("ngModel",i.value2),r("options",i.countries)("optionGroupChildren",h(11,Ie)),d(4),_("ngModel",i.value3),r("options",i.countries)("optionGroupChildren",h(12,Ie)),d(3),r("code",i.code))},dependencies:[me,S,x,U,C,b,bt],encapsulation:2})}return t})();var $i=()=>["states","cities"],At=(()=>{class t{countries;selectedCity;code={basic:`<p-iftalabel class="w-full md:w-56">
    <p-cascadeselect [(ngModel)]="selectedCity" inputId="cs_city" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
    <label for="cs_city">City</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-56">
        <p-cascadeselect [(ngModel)]="selectedCity" inputId="cs_city" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-full" />
        <label for="cs_city">City</label>
    </p-iftalabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'cascade-select-ifta-label-demo',
    templateUrl: './cascade-select-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelectModule, IftaLabelModule]
})
export class CascadeSelectIftaLabelDemo implements OnInit {

    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-ifta-label-demo"]],standalone:!1,decls:12,vars:5,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-56"],["inputId","cs_city","optionLabel","cname","optionGroupLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options","optionGroupChildren"],["for","cs_city"],["selector","cascade-select-ifta-label-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"IftaLabel is used to create infield top aligned labels. Visit "),a(3,"a",0),o(4,"IftaLabel"),c(),o(5," documentation for more information."),c()(),a(6,"div",1)(7,"p-iftalabel",2)(8,"p-cascadeselect",3),O("ngModelChange",function(s){return v(i.selectedCity,s)||(i.selectedCity=s),s}),c(),a(9,"label",4),o(10,"City"),c()()(),u(11,"app-code",5)),n&2&&(d(8),_("ngModel",i.selectedCity),r("options",i.countries)("optionGroupChildren",h(4,$i)),d(3),r("code",i.code))},dependencies:[me,S,x,U,C,b,_t],encapsulation:2})}return t})();var Lt=(()=>{class t{code={typescript:"import { CascadeSelectModule } from 'primeng/cascadeselect';"};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,i){n&1&&u(0,"app-code",0),n&2&&r("code",i.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return t})();var Hi=()=>({minWidth:"14rem"}),Ki=()=>["states","cities"],Dt=(()=>{class t{countries;selectedCity;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-cascadeselect class="ng-invalid ng-dirty" [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />`,html:`<div class="card flex justify-center">
    <p-cascadeselect class="ng-invalid ng-dirty" [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-invalid-demo',
    templateUrl: './cascade-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectInvalidDemo implements OnInit {
    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-invalid-demo"]],standalone:!1,decls:12,vars:8,consts:[[1,"card","flex","justify-center"],["optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel","options","optionGroupChildren"],["selector","cascade-select-invalid-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Invalid state style is added using the "),a(3,"i"),o(4,"ng-invalid"),c(),o(5," and "),a(6,"i"),o(7,"ng-dirty"),c(),o(8," class to indicate a failed validation."),c()(),a(9,"div",0)(10,"p-cascadeselect",1),O("ngModelChange",function(s){return v(i.selectedCity,s)||(i.selectedCity=s),s}),c()(),u(11,"app-code",2)),n&2&&(d(10),D(h(6,Hi)),_("ngModel",i.selectedCity),r("options",i.countries)("optionGroupChildren",h(7,Ki)),d(),r("code",i.code))},dependencies:[S,x,U,C,b],encapsulation:2})}return t})();var zi=()=>({minWidth:"14rem"}),Ut=(()=>{class t{code={basic:`<p-cascadeselect [loading]="true" [style]="{ minWidth: '14rem' }" placeholder="Loading..." />`,html:`<div class="card flex justify-center">
    <p-cascadeselect [loading]="true" [style]="{ minWidth: '14rem' }" placeholder="Loading..." />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-loading-demo',
    templateUrl: './cascade-select-loading-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectLoadingDemo {}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-loading-demo"]],standalone:!1,decls:9,vars:5,consts:[[1,"card","flex","justify-center"],["placeholder","Loading...",3,"loading"],["selector","cascade-select-loading-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Loading state can be used "),a(3,"i"),o(4,"loading"),c(),o(5," property."),c()(),a(6,"div",0),u(7,"p-cascadeselect",1),c(),u(8,"app-code",2)),n&2&&(d(7),D(h(4,zi)),r("loading",!0),d(),r("code",i.code))},dependencies:[S,C,b],encapsulation:2})}return t})();var ji=()=>({minWidth:"14rem"}),Ji=()=>["states","cities"],Et=(()=>{class t{countries;selectedCity;formGroup;ngOnInit(){this.formGroup=new $e({selectedCity:new He(null)}),this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<form [formGroup]="formGroup">
    <p-cascadeselect formControlName="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-cascadeselect formControlName="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-reactive-forms-demo',
    templateUrl: './cascade-select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, CascadeSelect]
})
export class CascadeSelectReactiveFormsDemo implements OnInit {
    countries: any[] | undefined;

    selectedCity: any;

    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCity: new FormControl<object | null>(null)
        });

        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:8,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","selectedCity","optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",3,"options","optionGroupChildren"],["selector","cascade-select-reactive-forms-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"CascadeSelect can also be used with reactive forms. In this case, the "),a(3,"i"),o(4,"formControlName"),c(),o(5," property is used to bind the component to a form control."),c()(),a(6,"div",0)(7,"form",1),u(8,"p-cascadeselect",2),c()(),u(9,"app-code",3)),n&2&&(d(7),r("formGroup",i.formGroup),d(),D(h(6,ji)),r("options",i.countries)("optionGroupChildren",h(7,Ji)),d(),r("code",i.code))},dependencies:[S,Ke,x,Qe,C,b,je,ze],encapsulation:2})}return t})();var Me=()=>["states","cities"],Ft=(()=>{class t{countries;value1;value2;value3;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-cascadeselect [(ngModel)]="value1" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" size="small" placeholder="Small" />
<p-cascadeselect [(ngModel)]="value2" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" placeholder="Normal" />
<p-cascadeselect [(ngModel)]="value3" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" size="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-cascadeselect [(ngModel)]="value1" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" size="small" placeholder="Small" />
    <p-cascadeselect [(ngModel)]="value2" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" placeholder="Normal" />
    <p-cascadeselect [(ngModel)]="value3" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" styleClass="w-56" size="large" placeholder="Large" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'cascade-select-sizes-demo',
    templateUrl: './cascade-select-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class CascadeSelectSizesDemo implements OnInit {
    countries: any[] | undefined;

    value1: any;

    value2: any;

    value3: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-sizes-demo"]],standalone:!1,decls:14,vars:13,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["optionLabel","cname","optionGroupLabel","name","styleClass","w-56","size","small","placeholder","Small",3,"ngModelChange","ngModel","options","optionGroupChildren"],["optionLabel","cname","optionGroupLabel","name","styleClass","w-56","placeholder","Normal",3,"ngModelChange","ngModel","options","optionGroupChildren"],["optionLabel","cname","optionGroupLabel","name","styleClass","w-56","size","large","placeholder","Large",3,"ngModelChange","ngModel","options","optionGroupChildren"],["selector","cascade-select-sizes-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"CascadeSelect provides "),a(3,"i"),o(4,"small"),c(),o(5," and "),a(6,"i"),o(7,"large"),c(),o(8," sizes as alternatives to the base."),c()(),a(9,"div",0)(10,"p-cascadeselect",1),O("ngModelChange",function(s){return v(i.value1,s)||(i.value1=s),s}),c(),a(11,"p-cascadeselect",2),O("ngModelChange",function(s){return v(i.value2,s)||(i.value2=s),s}),c(),a(12,"p-cascadeselect",3),O("ngModelChange",function(s){return v(i.value3,s)||(i.value3=s),s}),c()(),u(13,"app-code",4)),n&2&&(d(10),_("ngModel",i.value1),r("options",i.countries)("optionGroupChildren",h(10,Me)),d(),_("ngModel",i.value2),r("options",i.countries)("optionGroupChildren",h(11,Me)),d(),_("ngModel",i.value3),r("options",i.countries)("optionGroupChildren",h(12,Me)),d(),r("code",i.code))},dependencies:[S,x,U,C,b],encapsulation:2})}return t})();var qi=()=>({minWidth:"14rem"}),Yi=()=>["states","cities"];function Xi(t,p){if(t&1&&u(0,"img",11),t&2){let e=f().$implicit;Y("mr-2 flag flag-"+e.code.toLowerCase())}}function Zi(t,p){t&1&&u(0,"i",12)}function en(t,p){t&1&&u(0,"i",13)}function tn(t,p){if(t&1&&(a(0,"div",7),y(1,Xi,1,2,"img",8)(2,Zi,1,0,"i",9)(3,en,1,0,"i",10),a(4,"span"),o(5),c()()),t&2){let e=p.$implicit;d(),r("ngIf",e.states),d(),r("ngIf",e.cities),d(),r("ngIf",e.cname),d(2),de(e.cname||e.name)}}function nn(t,p){t&1&&u(0,"i",14)}function on(t,p){t&1&&(a(0,"div",15),o(1,"Available Countries"),c())}function an(t,p){t&1&&(a(0,"div",16),u(1,"p-button",17),c())}var Gt=(()=>{class t{countries;selectedCity;ngOnInit(){this.countries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}code={basic:`<p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City">
    <ng-template #option let-option>
        <div class="flex items-center">
            <img *ngIf="option.states" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px" />
            <i class="pi pi-compass mr-2" *ngIf="option.cities"></i>
            <i class="pi pi-map-marker mr-2" *ngIf="option.cname"></i>
            <span>{{ option.cname || option.name }}</span>
        </div>
    </ng-template>
    <ng-template #triggericon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-1">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-cascadeselect>`,html:`<div class="card flex justify-center">
    <p-cascadeselect [(ngModel)]="selectedCity" [options]="countries" optionLabel="cname" optionGroupLabel="name" [optionGroupChildren]="['states', 'cities']" [style]="{ minWidth: '14rem' }" placeholder="Select a City">
        <ng-template #option let-option>
            <div class="flex items-center">
                <img *ngIf="option.states" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px" />
                <i class="pi pi-compass mr-2" *ngIf="option.cities"></i>
                <i class="pi pi-map-marker mr-2" *ngIf="option.cname"></i>
                <span>{{ option.cname || option.name }}</span>
            </div>
        </ng-template>
        <ng-template #triggericon>
            <i class="pi pi-map"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="px-3 py-1">
                <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-cascadeselect>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'cascade-select-template-demo',
    templateUrl: './cascade-select-template-demo.html',
    standalone: true,
    imports: [FormsModule, CascadeSelectModule, ButtonModule]
})
export class CascadeSelectTemplateDemo implements OnInit {
    countries: any[] | undefined;

    selectedCity: any;

    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["cascade-select-template-demo"]],standalone:!1,decls:29,vars:8,consts:[["option",""],["triggericon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["optionLabel","cname","optionGroupLabel","name","placeholder","Select a City",3,"ngModelChange","ngModel","options","optionGroupChildren"],["selector","cascade-select-template-demo",3,"code"],[1,"flex","items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png","style","width: 18px",3,"class",4,"ngIf"],["class","pi pi-compass mr-2",4,"ngIf"],["class","pi pi-map-marker mr-2",4,"ngIf"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-compass","mr-2"],[1,"pi","pi-map-marker","mr-2"],[1,"pi","pi-map"],[1,"font-medium","px-3","py-2"],[1,"px-3","py-1"],["label","Add New","fluid","","severity","secondary","text","","size","small","icon","pi pi-plus"]],template:function(n,i){if(n&1){let l=R();a(0,"app-docsectiontext")(1,"p"),o(2," Label of an option is used as the display text of an item by default, for custom content support define an "),a(3,"i"),o(4,"option"),c(),o(5," template that gets the option instance as a parameter. In addition "),a(6,"i"),o(7,"value"),c(),o(8,", "),a(9,"i"),o(10,"dropdownicon"),c(),o(11,", "),a(12,"i"),o(13,"loadingicon"),c(),o(14,", and "),a(15,"i"),o(16,"optiongroupicon"),c(),o(17," slots are provided for further customization. "),c()(),a(18,"div",4)(19,"p-cascadeselect",5),O("ngModelChange",function(m){return T(l),v(i.selectedCity,m)||(i.selectedCity=m),w(m)}),y(20,tn,6,4,"ng-template",null,0,N)(22,nn,1,0,"ng-template",null,1,N)(24,on,2,0,"ng-template",null,2,N)(26,an,2,0,"ng-template",null,3,N),c()(),u(28,"app-code",6)}n&2&&(d(19),D(h(6,qi)),_("ngModel",i.selectedCity),r("options",i.countries)("optionGroupChildren",h(7,Yi)),d(9),r("code",i.code))},dependencies:[ee,S,x,U,C,b,ft],encapsulation:2})}return t})();var Vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=se({type:t});static \u0275inj=ce({imports:[te,Pe,xt,Je,yt,Te,qe,St,vt,ht,Te]})}return t})();var cn=()=>["CascadeSelect"],kt=(()=>{class t{docs=[{id:"import",label:"Import",component:Lt},{id:"basic",label:"Basic",component:Tt},{id:"reactive-forms",label:"Reactive Forms",component:Et},{id:"template",label:"Template",component:Gt},{id:"loading",label:"Loading State",component:Ut},{id:"float-label",label:"Float Label",component:Mt},{id:"ifta-label",label:"Ifta Label",component:At},{id:"sizes",label:"Sizes",component:Ft},{id:"filled",label:"Filled",component:It},{id:"invalid",label:"Invalid",component:Dt},{id:"disabled",label:"Disabled",component:wt},{id:"accessibility",label:"Accessibility",component:Ot}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular CascadeSelect Component","header","CascadeSelect","description","CascadeSelect displays a nested structure of options.","themeDocs","CascadeSelect",3,"docs","apiDocs"]],template:function(n,i){n&1&&u(0,"app-doc",0),n&2&&r("docs",i.docs)("apiDocs",h(2,cn))},dependencies:[Vt,Ct],encapsulation:2})}return t})();var Xo=[{path:"",component:kt}];export{Xo as default};
