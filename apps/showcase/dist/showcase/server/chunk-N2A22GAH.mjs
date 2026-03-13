import './polyfills.server.mjs';
import{a as et}from"./chunk-7IQZCBNN.mjs";import{a as x}from"./chunk-6746GQ27.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import{a as Ye,b as Ze}from"./chunk-TUWVE3ES.mjs";import{a as Je,b as Xe}from"./chunk-IIW25JG6.mjs";import"./chunk-RP7DCUL4.mjs";import{a as $e}from"./chunk-RUMDOR7N.mjs";import{a as qe}from"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as S,d as Ge,e as se}from"./chunk-HZSAMTDM.mjs";import{a as y,b as Qe}from"./chunk-EK6YV52O.mjs";import{a as Ee,e as _,f as Me,g as Ne,i as Ie,j as C,k as Fe,l as De,m as ke,s as Le,t as Oe}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{S as Ke,aa as Pe,ba as Ue,c as He,v as je}from"./chunk-DE54ZEHA.mjs";import{Ga as ze,Ja as Be,R as oe,U as J,V as Ve,_ as We,h as ae,oa as Ae,v as ie,va as Re,wa as le}from"./chunk-YQJJ7I3T.mjs";import{f as $,j as Te}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as be,m as _e,n as we,q as xe,r as Ce,v as te}from"./chunk-RUZVPFSZ.mjs";import{$a as b,$b as ne,Bb as s,Cb as n,Db as r,Dc as W,Eb as m,Ib as P,Jb as U,Kb as H,Lb as j,M as de,N as pe,O as X,Qb as B,S as me,Sa as d,Sb as E,Tc as ve,Vb as ue,Wb as he,X as L,Xb as M,Y as O,Yb as N,Zc as A,da as z,dc as Q,ec as o,fc as ge,gb as f,gc as ye,hb as Z,jc as u,kc as h,lb as fe,lc as g,ma as Y,mb as w,oc as Se,pc as ee,qc as re,rc as G,vb as K}from"./chunk-ZJKG6QAF.mjs";import{a as q}from"./chunk-AFOT676I.mjs";var tt=(()=>{class t{code={basic:`<span id="dd1">Options</span>
<p-treeselect ariaLabelledBy="dd1" />

<p-treeselect ariaLabel="Options" />`};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=f({type:t,selectors:[["tree-select-accessibility-doc"]],standalone:!1,decls:226,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,i){l&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),r(),n(4,"p"),o(5," Value to describe the component can either be provided with "),n(6,"i"),o(7,"ariaLabelledby"),r(),o(8," or "),n(9,"i"),o(10,"ariaLabel"),r(),o(11," props. The treeselect element has a "),n(12,"i"),o(13,"combobox"),r(),o(14," role in addition to "),n(15,"i"),o(16,"aria-haspopup"),r(),o(17," and "),n(18,"i"),o(19,"aria-expanded"),r(),o(20," attributes. The relation between the combobox and the popup is created with "),n(21,"i"),o(22,"aria-controls"),r(),o(23," that refers to the id of the popup. "),r(),n(24,"p"),o(25," The popup list has an id that refers to the "),n(26,"i"),o(27,"aria-controls"),r(),o(28," attribute of the "),n(29,"i"),o(30,"combobox"),r(),o(31," element and uses "),n(32,"i"),o(33,"tree"),r(),o(34," as the role. Each list item has a "),n(35,"i"),o(36,"treeitem"),r(),o(37," role along with "),n(38,"i"),o(39,"aria-label"),r(),o(40,", "),n(41,"i"),o(42,"aria-selected"),r(),o(43," and "),n(44,"i"),o(45,"aria-expanded"),r(),o(46," attributes. In checkbox selection, "),n(47,"i"),o(48,"aria-checked"),r(),o(49," is used instead of "),n(50,"i"),o(51,"aria-selected"),r(),o(52,". Checkbox and toggle icons are hidden from screen readers as their parent element with "),n(53,"i"),o(54,"treeitem"),r(),o(55," role and attributes are used instead for readers and keyboard support. The container element of a treenode has the "),n(56,"i"),o(57,"group"),r(),o(58," role. The "),n(59,"i"),o(60,"aria-setsize"),r(),o(61,", "),n(62,"i"),o(63,"aria-posinset"),r(),o(64," and "),n(65,"i"),o(66,"aria-level"),r(),o(67," attributes are calculated implicitly and added to each treeitem. "),r(),n(68,"p"),o(69,"If filtering is enabled, "),n(70,"i"),o(71,"filterInputProps"),r(),o(72," can be defined to give "),n(73,"i"),o(74,"aria-*"),r(),o(75," props to the filter input element."),r()(),m(76,"app-code",0),n(77,"h3"),o(78,"Closed State Keyboard Support"),r(),n(79,"div",1)(80,"table",2)(81,"thead")(82,"tr")(83,"th"),o(84,"Key"),r(),n(85,"th"),o(86,"Function"),r()()(),n(87,"tbody")(88,"tr")(89,"td")(90,"i"),o(91,"tab"),r()(),n(92,"td"),o(93,"Moves focus to the treeselect element."),r()(),n(94,"tr")(95,"td")(96,"i"),o(97,"space"),r()(),n(98,"td"),o(99,"Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus."),r()(),n(100,"tr")(101,"td")(102,"i"),o(103,"down arrow"),r()(),n(104,"td"),o(105,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),r()()()()(),n(106,"h3"),o(107,"Popup Keyboard Support"),r(),n(108,"div",1)(109,"table",2)(110,"thead")(111,"tr")(112,"th"),o(113,"Key"),r(),n(114,"th"),o(115,"Function"),r()()(),n(116,"tbody")(117,"tr")(118,"td")(119,"i"),o(120,"tab"),r()(),n(121,"td"),o(122,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),r()(),n(123,"tr")(124,"td")(125,"i"),o(126,"shift"),r(),o(127," + "),n(128,"i"),o(129,"tab"),r()(),n(130,"td"),o(131,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),r()(),n(132,"tr")(133,"td")(134,"i"),o(135,"enter"),r()(),n(136,"td"),o(137,"Selects the focused option, closes the popup if selection mode is single."),r()(),n(138,"tr")(139,"td")(140,"i"),o(141,"space"),r()(),n(142,"td"),o(143,"Selects the focused option, closes the popup if selection mode is single."),r()(),n(144,"tr")(145,"td")(146,"i"),o(147,"escape"),r()(),n(148,"td"),o(149,"Closes the popup, moves focus to the treeselect element."),r()(),n(150,"tr")(151,"td")(152,"i"),o(153,"down arrow"),r()(),n(154,"td"),o(155,"Moves focus to the next treenode."),r()(),n(156,"tr")(157,"td")(158,"i"),o(159,"up arrow"),r()(),n(160,"td"),o(161,"Moves focus to the previous treenode."),r()(),n(162,"tr")(163,"td")(164,"i"),o(165,"right arrow"),r()(),n(166,"td"),o(167,"If node is closed, opens the node otherwise moves focus to the first child node."),r()(),n(168,"tr")(169,"td")(170,"i"),o(171,"left arrow"),r()(),n(172,"td"),o(173,"If node is open, closes the node otherwise moves focus to the parent node."),r()()()()(),n(174,"h3"),o(175,"Filter Input Keyboard Support"),r(),n(176,"div",1)(177,"table",2)(178,"thead")(179,"tr")(180,"th"),o(181,"Key"),r(),n(182,"th"),o(183,"Function"),r()()(),n(184,"tbody")(185,"tr")(186,"td")(187,"i"),o(188,"enter"),r()(),n(189,"td"),o(190,"Closes the popup and moves focus to the treeselect element."),r()(),n(191,"tr")(192,"td")(193,"i"),o(194,"escape"),r()(),n(195,"td"),o(196,"Closes the popup and moves focus to the treeselect element."),r()()()()(),n(197,"h3"),o(198,"Close Button Keyboard Support"),r(),n(199,"div",1)(200,"table",2)(201,"thead")(202,"tr")(203,"th"),o(204,"Key"),r(),n(205,"th"),o(206,"Function"),r()()(),n(207,"tbody")(208,"tr")(209,"td")(210,"i"),o(211,"enter"),r()(),n(212,"td"),o(213,"Closes the popup and moves focus to the treeselect element."),r()(),n(214,"tr")(215,"td")(216,"i"),o(217,"space"),r()(),n(218,"td"),o(219,"Closes the popup and moves focus to the treeselect element."),r()(),n(220,"tr")(221,"td")(222,"i"),o(223,"escape"),r()(),n(224,"td"),o(225,"Closes the popup and moves focus to the treeselect element."),r()()()()()()),l&2&&(d(76),s("code",i.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[y,S],encapsulation:2})}return t})();var wt=({dt:t})=>`
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("treeselect.background")};
    border: 1px solid ${t("treeselect.border.color")};
    transition: background ${t("treeselect.transition.duration")}, color ${t("treeselect.transition.duration")}, border-color ${t("treeselect.transition.duration")}, outline-color ${t("treeselect.transition.duration")}, box-shadow ${t("treeselect.transition.duration")};
    border-radius: ${t("treeselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("treeselect.shadow")};
}

p-treeSelect.ng-invalid.ng-dirty .p-treeselect,
p-tree-select.ng-invalid.ng-dirty .p-treeselect,
p-treeselect.ng-invalid.ng-dirty .p-treeselect {
    border-color: ${t("treeselect.invalid.border.color")};
}

p-treeSelect.ng-invalid.ng-dirty .p-treeselect.p-focus,
p-tree-select.ng-invalid.ng-dirty .p-treeselect.p-focus,
p-treeselect.ng-invalid.ng-dirty .p-treeselect.p-focus {
    border-color: ${t("treeselect.focus.border.color")};
}

.p-treeselect:not(.p-disabled):hover {
    border-color: ${t("treeselect.hover.border.color")};
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: ${t("treeselect.focus.border.color")};
    box-shadow: ${t("treeselect.focus.ring.shadow")};
    outline: ${t("treeselect.focus.ring.width")} ${t("treeselect.focus.ring.style")} ${t("treeselect.focus.ring.color")};
    outline-offset: ${t("treeselect.focus.ring.offset")};
}

.p-treeselect.p-variant-filled {
    background: ${t("treeselect.filled.background")};
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${t("treeselect.filled.hover.background")};
}

.p-treeselect.p-variant-filled.p-focus {
    background: ${t("treeselect.filled.focus.background")};
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: ${t("treeselect.disabled.background")};
}

.p-treeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("treeselect.dropdown.color")};
    width: ${t("treeselect.dropdown.width")};
    border-start-end-radius: ${t("border.radius.md")};
    border-end-end-radius: ${t("border.radius.md")};
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: flex;
    align-items-center;
    gap: calc(${t("treeselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${t("treeselect.padding.y")} ${t("treeselect.padding.x")};
    color: ${t("treeselect.color")};
}

.p-treeselect-label.p-placeholder {
    color: ${t("treeselect.placeholder.color")};
}

p-treeselect.ng-invalid.ng-dirty .p-treeselect-label.p-placeholder {
    color: ${t("treeselect.invalid.placeholder.color")};
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: ${t("treeselect.disabled.color")};
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect .p-treeselect-overlay {
    min-width: 100%;
}

.p-treeselect-overlay {
    background: ${t("treeselect.overlay.background")};
    color: ${t("treeselect.overlay.color")};
    border: 1px solid ${t("treeselect.overlay.border.color")};
    border-radius: ${t("treeselect.overlay.border.radius")};
    box-shadow: ${t("treeselect.overlay.shadow")};
    overflow: hidden;
}


.p-treeselect-tree-container {
    overflow: auto;
}

.p-treeselect-empty-message {
    padding: ${t("treeselect.empty.message.padding")};
    background: transparent;
}

.p-treeselect-fluid {
    display: flex;
}

.p-treeselect-overlay .p-tree {
    padding: ${t("treeselect.tree.padding")};
}

.p-treeselect-label .p-chip {
    padding-top: calc(${t("treeselect.padding.y")} / 2);
    padding-bottom: calc(${t("treeselect.padding.y")} / 2);
    border-radius: ${t("treeselect.chip.border.radius")};
}

.p-treeselect-label:has(.p-chip) {
    padding: calc(${t("treeselect.padding.y")} / 2) calc(${t("treeselect.padding.x")} / 2);
}

.p-treeselect-sm .p-treeselect-label {
    font-size: ${t("treeselect.sm.font.size")};
    padding-block: ${t("treeselect.sm.padding.y")};
    padding-inline: ${t("treeselect.sm.padding.x")};
}

.p-treeselect-sm .p-treeselect-dropdown .p-icon {
    font-size: ${t("treeselect.sm.font.size")};
    width: ${t("treeselect.sm.font.size")};
    height: ${t("treeselect.sm.font.size")};
}

.p-treeselect-lg .p-treeselect-label {
    font-size: ${t("treeselect.lg.font.size")};
    padding-block: ${t("treeselect.lg.padding.y")};
    padding-inline: ${t("treeselect.lg.padding.x")};
}

.p-treeselect-lg .p-treeselect-dropdown .p-icon {
    font-size: ${t("treeselect.lg.font.size")};
    width: ${t("treeselect.lg.font.size")};
    height: ${t("treeselect.lg.font.size")};
}

.p-treeselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("treeselect.clear.icon.color")};
}`,xt={root:({instance:t})=>({position:t.appendTo==="self"?"relative":void 0})},Ct={root:({instance:t})=>({"p-treeselect p-component p-inputwrapper":!0,"p-treeselect-display-chip":t.display==="chip","p-disabled":t.disabled,"p-invalid":t.invalid,"p-focus":t.focused,"p-variant-filled":t.variant==="filled"||t.config.inputVariant()==="filled"||t.config.inputStyle()==="filled","p-inputwrapper-filled":!t.emptyValue,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-treeselect-open":t.overlayVisible,"p-treeselect-clearable":t.showClear,"p-treeselect-fluid":t.hasFluid,"p-treeselect-sm p-inputfield-sm":t.size==="small","p-treeselect-lg p-inputfield-lg":t.size==="large"}),labelContainer:"p-treeselect-label-container",label:({instance:t})=>({"p-treeselect-label":!0,"p-placeholder":t.label===t.placeholder,"p-treeselect-label-empty":!t.placeholder&&t.emptyValue}),chip:"p-treeselect-chip-item",pcChip:"p-treeselect-chip",dropdown:"p-treeselect-dropdown",dropdownIcon:"p-treeselect-dropdown-icon",panel:"p-treeselect-overlay p-component",treeContainer:"p-treeselect-tree-container",emptyMessage:"p-treeselect-empty-message"},ce=(()=>{class t extends ze{name="treeselect";theme=wt;classes=Ct;inlineStyles=xt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Y(t)))(i||t)}})();static \u0275prov=pe({token:t,factory:t.\u0275fac})}return t})();var Tt=["value"],Et=["header"],Mt=["empty"],Nt=["footer"],It=["clearicon"],Ft=["triggericon"],Dt=["dropdownicon"],kt=["filtericon"],Lt=["closeicon"],Ot=["itemtogglericon"],Vt=["itemcheckboxicon"],Wt=["itemloadingicon"],At=["container"],Rt=["focusInput"],zt=["filter"],Bt=["tree"],Ht=["panel"],jt=["overlay"],Kt=["firstHiddenFocusableEl"],Pt=["lastHiddenFocusableEl"],Ut=(t,p)=>({$implicit:t,placeholder:p}),it=(t,p)=>({$implicit:t,options:p}),$t=t=>({"max-height":t}),qt=t=>({$implicit:t}),Qt=(t,p)=>({$implicit:t,partialSelected:p});function Gt(t,p){t&1&&H(0)}function Jt(t,p){if(t&1&&(P(0),w(1,Gt,1,0,"ng-container",25),U()),t&2){let e=E();d(),s("ngTemplateOutlet",e.valueTemplate||e._valueTemplate)("ngTemplateOutletContext",G(2,Ut,e.value,e.placeholder))}}function Xt(t,p){if(t&1&&(P(0),o(1),U()),t&2){let e=E(2);d(),ye(" ",e.label||"empty"," ")}}function Yt(t,p){if(t&1&&(n(0,"div",27),m(1,"p-chip",28),r()),t&2){let e=p.$implicit;d(),s("label",e.label)}}function Zt(t,p){if(t&1&&(P(0),o(1),U()),t&2){let e=E(3);d(),ge(e.placeholder||"empty")}}function ei(t,p){if(t&1&&w(0,Yt,2,1,"div",26)(1,Zt,2,1,"ng-container",20),t&2){let e=E(2);s("ngForOf",e.value),d(),s("ngIf",e.emptyValue)}}function ti(t,p){if(t&1&&w(0,Xt,2,1,"ng-container",19)(1,ei,2,2,"ng-template",null,5,W),t&2){let e=ne(2),l=E();s("ngIf",l.display==="comma")("ngIfElse",e)}}function ii(t,p){if(t&1){let e=j();n(0,"TimesIcon",31),B("click",function(i){L(e);let c=E(2);return O(c.clear(i))}),r()}t&2&&Q("p-treeselect-clear-icon")}function oi(t,p){}function li(t,p){t&1&&w(0,oi,0,0,"ng-template")}function ni(t,p){if(t&1){let e=j();n(0,"span",32),B("click",function(i){L(e);let c=E(2);return O(c.clear(i))}),w(1,li,1,0,null,33),r()}if(t&2){let e=E(2);d(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ri(t,p){if(t&1&&(P(0),w(1,ii,1,2,"TimesIcon",29)(2,ni,2,1,"span",30),U()),t&2){let e=E();d(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),d(),s("ngIf",e.clearIconTemplate||e.clearIconTemplate)}}function ai(t,p){t&1&&m(0,"ChevronDownIcon",34),t&2&&s("styleClass","p-treeselect-dropdown-icon")}function si(t,p){}function ci(t,p){t&1&&w(0,si,0,0,"ng-template")}function di(t,p){if(t&1&&(n(0,"span",35),w(1,ci,1,0,null,33),r()),t&2){let e=E();d(),s("ngTemplateOutlet",e.triggerIconTemplate||e._triggerIconTemplate||e.dropdownIconTemplate||e._dropdownIconTemplate)}}function pi(t,p){t&1&&H(0)}function mi(t,p){t&1&&H(0)}function fi(t,p){if(t&1&&w(0,mi,1,0,"ng-container",33),t&2){let e=E(3);s("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function ui(t,p){t&1&&(P(0),w(1,fi,1,1,"ng-template",null,10,W),U())}function hi(t,p){t&1&&H(0)}function gi(t,p){if(t&1&&w(0,hi,1,0,"ng-container",25),t&2){let e=p.$implicit,l=E(3);s("ngTemplateOutlet",l.itemTogglerIconTemplate||l._itemTogglerIconTemplate)("ngTemplateOutletContext",re(2,qt,e))}}function yi(t,p){t&1&&w(0,gi,1,4,"ng-template",null,11,W)}function Si(t,p){t&1&&H(0)}function vi(t,p){if(t&1&&w(0,Si,1,0,"ng-container",25),t&2){let e=p.$implicit,l=p.partialSelected,i=E(3);s("ngTemplateOutlet",i.itemCheckboxIconTemplate||i._itemCheckboxIconTemplate)("ngTemplateOutletContext",G(2,Qt,e,l))}}function bi(t,p){t&1&&w(0,vi,1,5,"ng-template",null,12,W)}function _i(t,p){t&1&&H(0)}function wi(t,p){if(t&1&&w(0,_i,1,0,"ng-container",33),t&2){let e=E(3);s("ngTemplateOutlet",e.itemLoadingIconTemplate||e._itemLoadingIconTemplate)}}function xi(t,p){t&1&&w(0,wi,1,1,"ng-template",null,13,W)}function Ci(t,p){t&1&&H(0)}function Ti(t,p){if(t&1){let e=j();n(0,"div",36,6)(2,"span",37,7),B("focus",function(i){L(e);let c=E();return O(c.onFirstHiddenFocus(i))}),r(),w(4,pi,1,0,"ng-container",25),n(5,"div",38)(6,"p-tree",39,8),B("selectionChange",function(i){L(e);let c=E();return O(c.onSelectionChange(i))})("onNodeExpand",function(i){L(e);let c=E();return O(c.nodeExpand(i))})("onNodeCollapse",function(i){L(e);let c=E();return O(c.nodeCollapse(i))})("onNodeSelect",function(i){L(e);let c=E();return O(c.onSelect(i))})("onNodeUnselect",function(i){L(e);let c=E();return O(c.onUnselect(i))}),w(8,ui,3,0,"ng-container",20)(9,yi,2,0,null,20)(10,bi,2,0,null,20)(11,xi,2,0,null,20),r()(),w(12,Ci,1,0,"ng-container",25),n(13,"span",37,9),B("focus",function(i){L(e);let c=E();return O(c.onLastHiddenFocus(i))}),r()()}if(t&2){let e=E();Q(e.panelStyleClass),s("ngStyle",e.panelStyle)("ngClass",e.panelClass),K("id",e.listId),d(2),K("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),d(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",G(39,it,e.value,e.options)),d(),s("ngStyle",re(42,$t,e.scrollHeight)),d(),s("value",e.options)("propagateSelectionDown",e.propagateSelectionDown)("propagateSelectionUp",e.propagateSelectionUp)("selectionMode",e.selectionMode)("selection",e.value)("metaKeySelection",e.metaKeySelection)("emptyMessage",e.emptyMessage)("filter",e.filter)("filterBy",e.filterBy)("filterMode",e.filterMode)("filterPlaceholder",e.filterPlaceholder)("filterLocale",e.filterLocale)("filteredNodes",e.filteredNodes)("virtualScroll",e.virtualScroll)("virtualScrollItemSize",e.virtualScrollItemSize)("virtualScrollOptions",e.virtualScrollOptions)("_templateMap",e.templateMap)("loading",e.loading)("filterInputAutoFocus",e.filterInputAutoFocus),d(2),s("ngIf",e.emptyTemplate||e._emptyTemplate),d(),s("ngIf",e.itemTogglerIconTemplate||e._itemTogglerIconTemplate),d(),s("ngIf",e.itemCheckboxIconTemplate||e._itemCheckboxIconTemplate),d(),s("ngIf",e.itemLoadingIconTemplate||e._itemLoadingIconTemplate),d(),s("ngTemplateOutlet",e.footerTemplate)("ngTemplateOutletContext",G(44,it,e.value,e.options)),d(),K("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Ei={provide:Ee,useExisting:de(()=>v),multi:!0},v=(()=>{class t extends Be{inputId;scrollHeight="400px";disabled;metaKeySelection=!1;variant;display="comma";selectionMode="single";tabindex="0";ariaLabel;ariaLabelledBy;placeholder;panelClass;panelStyle;fluid=!1;panelStyleClass;set containerStyle(e){let l=this._componentStyle.inlineStyles.root({instance:this});this._containerStyle=q(q({},l),e)}get containerStyle(){return this._containerStyle}_containerStyle;containerStyleClass;labelStyle;labelStyleClass;overlayOptions;emptyMessage="";appendTo;filter=!1;filterBy="label";filterMode="lenient";filterPlaceholder;filterLocale;filterInputAutoFocus=!0;propagateSelectionDown=!0;propagateSelectionUp=!0;showClear=!1;resetFilterOnHide=!0;virtualScroll;virtualScrollItemSize;size;virtualScrollOptions;autofocus;get options(){return this._options}set options(e){this._options=e,this.updateTreeState()}get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}loading;onNodeExpand=new z;onNodeCollapse=new z;onShow=new z;onHide=new z;onClear=new z;onFilter=new z;onFocus=new z;onBlur=new z;onNodeUnselect=new z;onNodeSelect=new z;_showTransitionOptions;_hideTransitionOptions;containerEl;focusInput;filterViewChild;treeViewChild;panelEl;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;filteredNodes;filterValue=null;serializedValue;valueTemplate;headerTemplate;emptyTemplate;footerTemplate;clearIconTemplate;triggerIconTemplate;dropdownIconTemplate;filterIconTemplate;closeIconTemplate;itemTogglerIconTemplate;itemCheckboxIconTemplate;itemLoadingIconTemplate;templates;_valueTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_clearIconTemplate;_triggerIconTemplate;_filterIconTemplate;_closeIconTemplate;_itemTogglerIconTemplate;_itemCheckboxIconTemplate;_itemLoadingIconTemplate;_dropdownIconTemplate;focused;overlayVisible;selfChange;value;expandedNodes=[];_options;templateMap;onModelChange=()=>{};onModelTouched=()=>{};listId="";_componentStyle=me(ce);ngOnInit(){super.ngOnInit(),this.listId=Ae("pn_id_")+"_list",this.updateTreeState()}ngAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(e=>{switch(e.getType()){case"value":this._valueTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"triggericon":this._triggerIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"itemtogglericon":this._itemTogglerIconTemplate=e.template;break;case"itemcheckboxicon":this._itemCheckboxIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"itemloadingicon":this._itemLoadingIconTemplate=e.template;break;default:e.name?this.templateMap[e.name]=e.template:this.valueTemplate=e.template;break}})}onOverlayAnimationStart(e){switch(e.toState){case"visible":if(this.filter)ae(this.filterValue)&&this.treeViewChild?._filter(this.filterValue),this.filterInputAutoFocus&&this.filterViewChild?.nativeElement.focus();else{let l=J(this.panelEl.nativeElement);l&&l.length>0&&l[0].focus()}break}}onOverlayBeforeHide(e){let l=J(this.containerEl.nativeElement);l&&l.length>0&&l[0].focus()}onSelectionChange(e){this.value=e,this.onModelChange(this.value),this.cd.markForCheck()}onClick(e){this.disabled||!this.overlayViewChild?.el?.nativeElement?.contains(e.target)&&!ie(e.target,"p-treeselect-close")&&!ie(e.target,"p-checkbox-box")&&!ie(e.target,"p-checkbox-icon")&&(this.overlayVisible?this.hide():this.show(),this.focusInput?.nativeElement.focus())}onKeyDown(e){switch(e.code){case"ArrowDown":this.overlayVisible||(this.show(),e.preventDefault()),this.onArrowDown(e),e.preventDefault();break;case"Space":case"Enter":this.overlayVisible||(this.show(),e.preventDefault());break;case"Escape":this.overlayVisible&&(this.hide(),this.focusInput?.nativeElement.focus(),e.preventDefault());break;case"Tab":this.onTabKey(e);break;default:break}}onFilterInput(e){this.filterValue=e.target.value,this.treeViewChild?._filter(this.filterValue),this.onFilter.emit({filter:this.filterValue,filteredValue:this.treeViewChild?.filteredNodes}),setTimeout(()=>{this.overlayViewChild.alignOverlay()})}onArrowDown(e){if(this.overlayVisible&&this.panelEl?.nativeElement){let l=J(this.panelEl.nativeElement,".p-tree-node");l&&l.length>0&&l[0].focus(),e.preventDefault()}}onFirstHiddenFocus(e){let l=e.relatedTarget===this.focusInput?.nativeElement?Ve(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInput?.nativeElement;oe(l)}onLastHiddenFocus(e){let l=e.relatedTarget===this.focusInput?.nativeElement?We(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInput?.nativeElement;oe(l)}show(){this.overlayVisible=!0}hide(e){this.overlayVisible=!1,this.resetFilter(),this.onHide.emit(e),this.cd.markForCheck()}clear(e){this.value=null,this.resetExpandedNodes(),this.resetPartialSelected(),this.onModelChange(this.value),this.onClear.emit(),e.stopPropagation()}checkValue(){return this.value!==null&&ae(this.value)}onTabKey(e,l=!1){l||(this.overlayVisible&&this.hasFocusableElements()?(oe(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}hasFocusableElements(){return J(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}resetFilter(){this.filter&&!this.resetFilterOnHide?(this.filteredNodes=this.treeViewChild?.filteredNodes,this.treeViewChild?.resetFilter()):this.filterValue=null}updateTreeState(){if(this.value){let e=this.selectionMode==="single"?[this.value]:[...this.value];this.resetExpandedNodes(),this.resetPartialSelected(),e&&this.options&&this.updateTreeBranchState(null,null,e)}}updateTreeBranchState(e,l,i){if(e){if(this.isSelected(e)&&(this.expandPath(l),i.splice(i.indexOf(e),1)),i.length>0&&e.children)for(let c of e.children)this.updateTreeBranchState(c,[...l,e],i)}else for(let c of this.options)this.updateTreeBranchState(c,[],i)}expandPath(e){for(let l of e)l.expanded=!0;this.expandedNodes=[...e]}nodeExpand(e){this.onNodeExpand.emit(e),this.expandedNodes.push(e.node)}nodeCollapse(e){this.onNodeCollapse.emit(e),this.expandedNodes.splice(this.expandedNodes.indexOf(e.node),1)}resetExpandedNodes(){for(let e of this.expandedNodes)e.expanded=!1;this.expandedNodes=[]}resetPartialSelected(e=this.options){if(e)for(let l of e)l.partialSelected=!1,l.children&&l.children?.length>0&&this.resetPartialSelected(l.children)}findSelectedNodes(e,l,i){if(e){if(this.isSelected(e)&&(i.push(e),delete l[e.key]),Object.keys(l).length&&e.children)for(let c of e.children)this.findSelectedNodes(c,l,i)}else for(let c of this.options)this.findSelectedNodes(c,l,i)}isSelected(e){return this.findIndexInSelection(e)!=-1}findIndexInSelection(e){let l=-1;if(this.value)if(this.selectionMode==="single")l=this.value.key&&this.value.key===e.key||this.value==e?0:-1;else for(let i=0;i<this.value.length;i++){let c=this.value[i];if(c.key&&c.key===e.key||c==e){l=i;break}}return l}onSelect(e){this.onNodeSelect.emit(e),this.selectionMode==="single"&&(this.hide(),this.focusInput?.nativeElement.focus())}onUnselect(e){this.onNodeUnselect.emit(e)}onInputFocus(e){this.disabled||(this.focused=!0,this.onFocus.emit(e))}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}writeValue(e){this.value=e,this.updateTreeState(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}get containerClass(){return this._componentStyle.classes.root({instance:this})}get hasFluid(){let l=this.el.nativeElement.closest("p-fluid");return this.fluid||!!l}get labelClass(){return this._componentStyle.classes.label({instance:this})}get emptyValue(){return!this.value||Object.keys(this.value).length===0}get emptyOptions(){return!this.options||this.options.length===0}get label(){let e=this.value||[];return e.length?e.map(l=>l.label).join(", "):this.selectionMode==="single"&&this.value?e.label:this.placeholder}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Y(t)))(i||t)}})();static \u0275cmp=f({type:t,selectors:[["p-treeSelect"],["p-treeselect"],["p-tree-select"]],contentQueries:function(l,i,c){if(l&1&&ue(c,Tt,4)(c,Et,4)(c,Mt,4)(c,Nt,4)(c,It,4)(c,Ft,4)(c,Dt,4)(c,kt,4)(c,Lt,4)(c,Ot,4)(c,Vt,4)(c,Wt,4)(c,Re,4),l&2){let a;M(a=N())&&(i.valueTemplate=a.first),M(a=N())&&(i.headerTemplate=a.first),M(a=N())&&(i.emptyTemplate=a.first),M(a=N())&&(i.footerTemplate=a.first),M(a=N())&&(i.clearIconTemplate=a.first),M(a=N())&&(i.triggerIconTemplate=a.first),M(a=N())&&(i.dropdownIconTemplate=a.first),M(a=N())&&(i.filterIconTemplate=a.first),M(a=N())&&(i.closeIconTemplate=a.first),M(a=N())&&(i.itemTogglerIconTemplate=a.first),M(a=N())&&(i.itemCheckboxIconTemplate=a.first),M(a=N())&&(i.itemLoadingIconTemplate=a.first),M(a=N())&&(i.templates=a)}},viewQuery:function(l,i){if(l&1&&he(At,5)(Rt,5)(zt,5)(Bt,5)(Ht,5)(jt,5)(Kt,5)(Pt,5),l&2){let c;M(c=N())&&(i.containerEl=c.first),M(c=N())&&(i.focusInput=c.first),M(c=N())&&(i.filterViewChild=c.first),M(c=N())&&(i.treeViewChild=c.first),M(c=N())&&(i.panelEl=c.first),M(c=N())&&(i.overlayViewChild=c.first),M(c=N())&&(i.firstHiddenFocusableElementOnOverlay=c.first),M(c=N())&&(i.lastHiddenFocusableElementOnOverlay=c.first)}},inputs:{inputId:"inputId",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",A],metaKeySelection:[2,"metaKeySelection","metaKeySelection",A],variant:"variant",display:"display",selectionMode:"selectionMode",tabindex:"tabindex",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",placeholder:"placeholder",panelClass:"panelClass",panelStyle:"panelStyle",fluid:[2,"fluid","fluid",A],panelStyleClass:"panelStyleClass",containerStyle:"containerStyle",containerStyleClass:"containerStyleClass",labelStyle:"labelStyle",labelStyleClass:"labelStyleClass",overlayOptions:"overlayOptions",emptyMessage:"emptyMessage",appendTo:"appendTo",filter:[2,"filter","filter",A],filterBy:"filterBy",filterMode:"filterMode",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",filterInputAutoFocus:[2,"filterInputAutoFocus","filterInputAutoFocus",A],propagateSelectionDown:[2,"propagateSelectionDown","propagateSelectionDown",A],propagateSelectionUp:[2,"propagateSelectionUp","propagateSelectionUp",A],showClear:[2,"showClear","showClear",A],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",A],virtualScroll:"virtualScroll",virtualScrollItemSize:"virtualScrollItemSize",size:"size",virtualScrollOptions:"virtualScrollOptions",autofocus:[2,"autofocus","autofocus",A],options:"options",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",loading:[2,"loading","loading",A]},outputs:{onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onShow:"onShow",onHide:"onHide",onClear:"onClear",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onNodeUnselect:"onNodeUnselect",onNodeSelect:"onNodeSelect"},features:[Se([Ei,ce]),fe],decls:18,vars:30,consts:[["container",""],["focusInput",""],["defaultValueTemplate",""],["overlay",""],["content",""],["chipsValueTemplate",""],["panel",""],["firstHiddenFocusableEl",""],["tree",""],["lastHiddenFocusableEl",""],["empty",""],["togglericon",""],["checkboxicon",""],["loadingicon",""],[3,"click","ngClass","ngStyle"],[1,"p-hidden-accessible"],["type","text","role","combobox","readonly","",3,"focus","blur","keydown","disabled","pAutoFocus"],[1,"p-treeselect-label-container"],[3,"ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["role","button","aria-haspopup","tree",1,"p-treeselect-dropdown"],[3,"styleClass",4,"ngIf"],["class","p-treeselect-dropdown-icon",4,"ngIf"],[3,"visibleChange","onAnimationStart","onBeforeHide","onShow","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-treeselect-chip-item",4,"ngFor","ngForOf"],[1,"p-treeselect-chip-item"],["styleClass","p-treeselect-chip",3,"label"],[3,"class","click",4,"ngIf"],["class","p-treeselect-clear-icon",3,"click",4,"ngIf"],[3,"click"],[1,"p-treeselect-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-treeselect-dropdown-icon"],[1,"p-treeselect-overlay","p-component",3,"ngStyle","ngClass"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],[1,"p-treeselect-tree-container",3,"ngStyle"],[3,"selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect","value","propagateSelectionDown","propagateSelectionUp","selectionMode","selection","metaKeySelection","emptyMessage","filter","filterBy","filterMode","filterPlaceholder","filterLocale","filteredNodes","virtualScroll","virtualScrollItemSize","virtualScrollOptions","_templateMap","loading","filterInputAutoFocus"]],template:function(l,i){if(l&1){let c=j();n(0,"div",14,0),B("click",function(T){return i.onClick(T)}),n(2,"div",15)(3,"input",16,1),B("focus",function(T){return i.onInputFocus(T)})("blur",function(T){return i.onInputBlur(T)})("keydown",function(T){return i.onKeyDown(T)}),r()(),n(5,"div",17)(6,"div",18),w(7,Jt,2,5,"ng-container",19)(8,ti,3,2,"ng-template",null,2,W),r()(),w(10,ri,3,2,"ng-container",20),n(11,"div",21),w(12,ai,1,1,"ChevronDownIcon",22)(13,di,2,1,"span",23),r(),n(14,"p-overlay",24,3),g("visibleChange",function(T){return L(c),h(i.overlayVisible,T)||(i.overlayVisible=T),O(T)}),B("onAnimationStart",function(T){return i.onOverlayAnimationStart(T)})("onBeforeHide",function(T){return i.onOverlayBeforeHide(T)})("onShow",function(T){return i.onShow.emit(T)})("onHide",function(T){return i.hide(T)}),w(16,Ti,15,47,"ng-template",null,4,W),r()()}if(l&2){let c=ne(9);Q(i.containerStyleClass),s("ngClass",i.containerClass)("ngStyle",i.containerStyle),d(3),s("disabled",i.disabled)("pAutoFocus",i.autofocus),K("id",i.inputId)("tabindex",i.disabled?-1:i.tabindex)("aria-controls",i.overlayVisible?i.listId:null)("aria-haspopup","tree")("aria-expanded",i.overlayVisible??!1)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label)),d(3),Q(i.labelStyleClass),s("ngClass",i.labelClass)("ngStyle",i.labelStyle),d(),s("ngIf",i.valueTemplate||i._valueTemplate)("ngIfElse",c),d(3),s("ngIf",i.checkValue()&&!i.disabled&&i.showClear),d(),K("aria-expanded",i.overlayVisible??!1)("aria-label","treeselect trigger"),d(),s("ngIf",!i.triggerIconTemplate&&!i._triggerIconTemplate&&!i.dropdownIconTemplate&&!i._dropdownIconTemplate),d(),s("ngIf",i.triggerIconTemplate||i._triggerIconTemplate||i.dropdownIconTemplate||i._dropdownIconTemplate),d(),u("visible",i.overlayVisible),s("options",i.overlayOptions)("target","@parent")("appendTo",i.appendTo)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}},dependencies:[te,be,_e,we,Ce,xe,qe,le,et,He,Ke,je,$e],encapsulation:2,changeDetection:0})}return t})(),ot=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=Z({type:t});static \u0275inj=X({imports:[v,le,le]})}return t})();var nt=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-basic-demo',
    templateUrl: './tree-select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectBasicDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["basic-doc"]],standalone:!1,decls:20,vars:3,consts:[["routerLink","/tree"],[1,"card","flex","justify-center"],["containerStyleClass","w-full","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-basic-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"TreeSelect is used as a controlled component with "),n(3,"i"),o(4,"ng-model"),r(),o(5," directive along with an "),n(6,"i"),o(7,"options"),r(),o(8," collection. Internally "),n(9,"a",0),o(10,"Tree"),r(),o(11," component is used so the options model is based on TreeNode API."),r(),n(12,"p"),o(13,"In single selection mode, value binding should be the "),n(14,"i"),o(15,"key"),r(),o(16," value of a node."),r()(),n(17,"div",1)(18,"p-treeselect",2),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(19,"app-code",3)),l&2&&(d(18),u("ngModel",i.selectedNodes),s("options",i.nodes),d(),s("code",i.code))},dependencies:[y,S,v,_,C,$],encapsulation:2})}return t})();var rt=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-checkbox-demo',
    templateUrl: './tree-select-checkbox-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectCheckboxDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["checkbox-doc"]],standalone:!1,decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","display","chip","selectionMode","checkbox","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection"],["selector","tree-select-checkbox-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),n(3,"i"),o(4,"selectionMode"),r(),o(5," as "),n(6,"i"),o(7,"checkbox"),r(),o(8,"."),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(11,"app-code",2)),l&2&&(d(10),u("ngModel",i.selectedNodes),s("options",i.nodes)("metaKeySelection",!1),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var at=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" [disabled]="true" placeholder="TreeSelect" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" [disabled]="true" placeholder="TreeSelect" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-disabled-demo',
    templateUrl: './tree-select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectDisabledDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","placeholder","TreeSelect",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","disabled"],["selector","tree-select-disabled-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"When "),n(3,"i"),o(4,"disabled"),r(),o(5," is present, the element cannot be edited and focused."),r()(),n(6,"div",0)(7,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(8,"app-code",2)),l&2&&(d(7),u("ngModel",i.selectedNodes),s("options",i.nodes)("disabled",!0),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var st=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" variant="filled" [options]="nodes" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" variant="filled" [options]="nodes" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-filled-demo',
    templateUrl: './tree-select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectFilledDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","variant","filled","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-filled-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Specify the "),n(3,"i"),o(4,"variant"),r(),o(5," property as "),n(6,"i"),o(7,"filled"),r(),o(8," to display the component with a higher visual emphasis than the default "),n(9,"i"),o(10,"outlined"),r(),o(11," style."),r()(),n(12,"div",0)(13,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(14,"app-code",2)),l&2&&(d(13),u("ngModel",i.selectedNodes),s("options",i.nodes),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var ct=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" [filter]="true" [filterInputAutoFocus]="true" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes"placeholder="Select Item" [filter]="true" [filterInputAutoFocus]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-filter-demo',
    templateUrl: './tree-select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectFilterDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["filter-doc"]],standalone:!1,decls:21,vars:5,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","filter","filterInputAutoFocus"],["selector","tree-select-filter-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," Filtering is enabled by adding the "),n(3,"i"),o(4,"filter"),r(),o(5," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),n(6,"i"),o(7,"filterBy"),r(),o(8," property. In addition "),n(9,"i"),o(10,"filterMode"),r(),o(11," specifies the filtering strategy. In "),n(12,"i"),o(13,"lenient"),r(),o(14," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),n(15,"i"),o(16,"strict"),r(),o(17," mode when the query matches a node, filtering continues on all descendants. "),r()(),n(18,"div",0)(19,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(20,"app-code",2)),l&2&&(d(19),u("ngModel",i.selectedNodes),s("options",i.nodes)("filter",!0)("filterInputAutoFocus",!0),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var dt=(()=>{class t{nodeService;nodes;value1;value2;value3;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:`<p-floatlabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="value1" inputId="over_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-treeselect [(ngModel)]="value2" inputId="in_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-treeselect [(ngModel)]="value3" inputId="on_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-80">
        <p-treeselect [(ngModel)]="value1" inputId="over_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="in">
        <p-treeselect [(ngModel)]="value2" inputId="in_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="on">
        <p-treeselect [(ngModel)]="value3" inputId="on_label" [options]="nodes" class="w-full" containerStyleClass="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'tree-select-floatlabel-demo',
    templateUrl: './tree-select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect, FloatLabel],
    providers: [NodeService]
})
export class TreeSelectFloatlabelDemo {
    nodes!: any[];

    value1: any;

    value2: any;

    value3: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-80"],["inputId","over_label","containerStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","options"],["for","over_label"],["variant","in",1,"w-full","md:w-80"],["inputId","in_label","containerStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","options"],["for","in_label"],["variant","on",1,"w-full","md:w-80"],["inputId","on_label","containerStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","options"],["for","on_label"],["selector","tree-select-floatlabel-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," A floating label appears on top of the input field when focused. Visit "),n(3,"a",0),o(4,"FloatLabel"),r(),o(5," documentation for more information. "),r()(),n(6,"div",1)(7,"p-floatlabel",2)(8,"p-treeselect",3),g("ngModelChange",function(a){return h(i.value1,a)||(i.value1=a),a}),r(),n(9,"label",4),o(10,"Over Label"),r()(),n(11,"p-floatlabel",5)(12,"p-treeselect",6),g("ngModelChange",function(a){return h(i.value2,a)||(i.value2=a),a}),r(),n(13,"label",7),o(14,"In Label"),r()(),n(15,"p-floatlabel",8)(16,"p-treeselect",9),g("ngModelChange",function(a){return h(i.value3,a)||(i.value3=a),a}),r(),n(17,"label",10),o(18,"On Label"),r()()(),m(19,"app-code",11)),l&2&&(d(8),u("ngModel",i.value1),s("options",i.nodes),d(4),u("ngModel",i.value2),s("options",i.nodes),d(4),u("ngModel",i.value3),s("options",i.nodes),d(3),s("code",i.code))},dependencies:[y,S,v,_,C,$,Je],encapsulation:2})}return t})();var pt=(()=>{class t{nodeService;nodes;selectedValue;code={basic:`<p-iftalabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="selectedValue" inputId="t_file" [options]="nodes" class="w-full" containerStyleClass="w-full" />
    <label for="t_file">File</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-80">
        <p-treeselect [(ngModel)]="selectedValue" inputId="t_file" [options]="nodes" class="w-full" containerStyleClass="w-full" />
        <label for="t_file">File</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'tree-select-iftalabel-demo',
    templateUrl: './tree-select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelectModule, IftaLabelModule],
    providers: [NodeService]
})
export class TreeSelectIftaLabelDemo {
    nodes!: any[];

    selectedValue: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-80"],["inputId","t_file","containerStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","options"],["for","t_file"],["selector","tree-select-iftalabel-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"IftaLabel is used to create infield top aligned labels. Visit "),n(3,"a",0),o(4,"IftaLabel"),r(),o(5," documentation for more information."),r()(),n(6,"div",1)(7,"p-iftalabel",2)(8,"p-treeselect",3),g("ngModelChange",function(a){return h(i.selectedValue,a)||(i.selectedValue=a),a}),r(),n(9,"label",4),o(10,"File"),r()()(),m(11,"app-code",5)),l&2&&(d(8),u("ngModel",i.selectedValue),s("options",i.nodes),d(3),s("code",i.code))},dependencies:[y,S,v,_,C,$,Ye],encapsulation:2})}return t})();var mt=(()=>{class t{code={typescript:"import { TreeSelectModule } from 'primeng/treeselect';"};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=f({type:t,selectors:[["tree-select-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,i){l&1&&m(0,"app-code",0),l&2&&s("code",i.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2})}return t})();var ft=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:'<p-treeselect class="md:w-80 w-full ng-invalid ng-dirty" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full ng-invalid ng-dirty" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-invalid-demo',
    templateUrl: './tree-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectInvalidDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","placeholder","Select Item",1,"md:w-80","w-full","ng-invalid","ng-dirty",3,"ngModelChange","ngModel","options"],["selector","tree-select-invalid-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Invalid state style is added using the "),n(3,"i"),o(4,"ng-invalid"),r(),o(5," and "),n(6,"i"),o(7,"ng-dirty"),r(),o(8," class to indicate a failed validation."),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(11,"app-code",2)),l&2&&(d(10),u("ngModel",i.selectedNodes),s("options",i.nodes),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var ut=(()=>{class t{cd;selectedNodes=[];nodes;loading=!1;constructor(e){this.cd=e}ngOnInit(){this.loading=!0,setTimeout(()=>{this.nodes=this.initiateNodes(),this.loading=!1,this.cd.markForCheck()},2e3)}initiateNodes(){return[{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]}onNodeExpand(e){e.node.children||(this.loading=!0,setTimeout(()=>{let l=q({},e.node);l.children=[];for(let i=0;i<1500;i++)l.children.push({key:e.node.key+"-"+i,label:"Lazy "+e.node.label+"-"+i});this.nodes[parseInt(e.node.key,10)]=l,this.loading=!1,this.cd.markForCheck()},500))}code={basic:'<p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [loading]="loading" (onNodeExpand)="onNodeExpand($event)" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [loading]="loading"/>',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [loading]="loading" (onNodeExpand)="onNodeExpand($event)" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [loading]="loading"/>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-lazy-demo',
    templateUrl: './tree-select-lazy-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect]
  })
export class TreeSelectLazyDemo {
    selectedNodes: TreeNode[] = [];

    nodes!: TreeNode[];

    loading: boolean = false;

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.loading = true;

        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.cd.markForCheck();
        }, 2000);
    }

    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    onNodeExpand(event: any) {
        if (!event.node.children) {
            this.loading = true;

            setTimeout(() => {
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 150; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                this.nodes[parseInt(event.node.key, 10)] = _node;

                this.loading = false;
                this.cd.markForCheck();
            }, 500);
        }
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(ve))};static \u0275cmp=f({type:t,selectors:[["lazy-doc"]],standalone:!1,decls:12,vars:6,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","display","chip","selectionMode","checkbox","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","onNodeExpand","ngModel","loading","options","metaKeySelection"],["selector","tree-select-basic-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),n(3,"i"),o(4,"loading"),r(),o(5," property and "),n(6,"i"),o(7,"onNodeExpand"),r(),o(8," method. "),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),B("onNodeExpand",function(a){return i.onNodeExpand(a)}),r()(),m(11,"app-code",2)),l&2&&(d(10),u("ngModel",i.selectedNodes),s("loading",i.loading)("options",i.nodes)("metaKeySelection",!1)("loading",i.loading),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var ht=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}exampleCode={typescript:`{
    '0-0': true,
    '0-1-0': true
}`};code={basic:'<p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" [metaKeySelection]="false" selectionMode="multiple" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" [metaKeySelection]="false" selectionMode="multiple" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-multiple-demo',
    templateUrl: './tree-select-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectMultipleDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["multiple-doc"]],standalone:!1,decls:21,vars:6,consts:[[3,"code","hideToggleCode"],[1,"card","flex","justify-center"],["containerStyleClass","w-full","selectionMode","multiple","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection"],["selector","tree-select-multiple-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," More than one node is selectable by setting "),n(3,"i"),o(4,"selectionMode"),r(),o(5," to "),n(6,"i"),o(7,"multiple"),r(),o(8,". By default in multiple selection mode, metaKey press (e.g. "),n(9,"i"),o(10,"\u2318"),r(),o(11,") is necessary to add to existing selections however this can be configured with disabling the "),n(12,"i"),o(13,"metaKeySelection"),r(),o(14," property. Note that in touch enabled devices, TreeSelect always ignores metaKey. "),r(),n(15,"p"),o(16,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."),r()(),m(17,"app-code",0),n(18,"div",1)(19,"p-treeselect",2),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(20,"app-code",3)),l&2&&(d(17),s("code",i.exampleCode)("hideToggleCode",!0),d(2),u("ngModel",i.selectedNodes),s("options",i.nodes)("metaKeySelection",!1),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var gt=(()=>{class t{nodeService;nodes;formGroup;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}ngOnInit(){this.formGroup=new Ne({selectedNodes:new Ie})}code={basic:`<form [formGroup]="formGroup">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" formControlName="selectedNodes" [options]="nodes" placeholder="Select Item" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" formControlName="selectedNodes" [options]="nodes" placeholder="Select Item" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NodeService } from '@/service/nodeservice';

@Component({
    selector: 'tree-select-reactive-forms-demo',
    templateUrl: './tree-select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectReactiveFormsDemo implements OnInit {
    nodes!: any[];

    formGroup!: FormGroup;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedNodes: new FormControl()
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card"],[1,"flex","justify-center",3,"formGroup"],["containerStyleClass","w-full","formControlName","selectedNodes","placeholder","Select Item",1,"md:w-80","w-full",3,"options"],["selector","tree-select-reactive-forms-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"TreeSelect can also be used with reactive forms. In this case, the "),n(3,"i"),o(4,"formControlName"),r(),o(5," property is used to bind the component to a form control."),r()(),n(6,"div",0)(7,"form",1),m(8,"p-treeselect",2),r()(),m(9,"app-code",3)),l&2&&(d(7),s("formGroup",i.formGroup),d(),s("options",i.nodes),d(),s("code",i.code))},dependencies:[y,S,v,Fe,_,Me,ke,De],encapsulation:2})}return t})();var yt=(()=>{class t{nodeService;nodes;value1;value2;value3;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:`<p-treeselect [(ngModel)]="value1" [options]="nodes" size="small" placeholder="Small" class="md:w-80 w-full" containerStyleClass="w-full" />
<p-treeselect [(ngModel)]="value2" [options]="nodes" placeholder="Normal" class="md:w-80 w-full" />
<p-treeselect [(ngModel)]="value3" [options]="nodes" size="large" placeholder="Large" class="md:w-80 w-full" containerStyleClass="w-full" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-treeselect [(ngModel)]="value1" [options]="nodes" size="small" placeholder="Small" class="md:w-80 w-full" containerStyleClass="w-full" />
    <p-treeselect [(ngModel)]="value2" [options]="nodes" placeholder="Normal" class="md:w-80 w-full" containerStyleClass="w-full" />
    <p-treeselect [(ngModel)]="value3" [options]="nodes" size="large" placeholder="Large" class="md:w-80 w-full" containerStyleClass="w-full" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-sizes-demo',
    templateUrl: './tree-select-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectSizesDemo {
    nodes!: any[];

    value1: any;

    value2: any;

    value3: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","containerStyleClass","w-full",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["placeholder","Normal","containerStyleClass","w-full",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["size","large","placeholder","Large","containerStyleClass","w-full",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-sizes-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"TreeSelect provides "),n(3,"i"),o(4,"small"),r(),o(5," and "),n(6,"i"),o(7,"large"),r(),o(8," sizes as alternatives to the base."),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(i.value1,a)||(i.value1=a),a}),r(),n(11,"p-treeselect",2),g("ngModelChange",function(a){return h(i.value2,a)||(i.value2=a),a}),r(),n(12,"p-treeselect",3),g("ngModelChange",function(a){return h(i.value3,a)||(i.value3=a),a}),r()(),m(13,"app-code",4)),l&2&&(d(10),u("ngModel",i.value1),s("options",i.nodes),d(),u("ngModel",i.value2),s("options",i.nodes),d(),u("ngModel",i.value3),s("options",i.nodes),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();function Mi(t,p){t&1&&m(0,"i",6)}function Ni(t,p){t&1&&(n(0,"div",7),o(1,"Available Files"),r())}function Ii(t,p){t&1&&(n(0,"div",8),m(1,"p-button",9)(2,"p-button",10),r())}var St=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(l=>this.nodes=l)}code={basic:`<p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item">
    <ng-template #dropdownicon>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Files</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 pt-1 pb-2 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-treeselect>`,html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item">
        <ng-template #dropdownicon>
            <i class="pi pi-search"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Files</div>
        </ng-template>
        <ng-template #footer>
            <div class="px-3 pt-1 pb-2 flex justify-between">
                <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-treeselect>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-select-template-demo',
    templateUrl: './tree-select-template-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect, ButtonModule],
    providers: [NodeService]
  })
export class TreeSelectTemplateDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["template-doc"]],standalone:!1,decls:12,vars:3,consts:[["dropdownicon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["containerStyleClass","w-full","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-template-demo",3,"code"],[1,"pi","pi-search"],[1,"font-medium","px-3","py-2"],[1,"px-3","pt-1","pb-2","flex","justify-between"],["label","Add New","severity","secondary","text","","size","small","icon","pi pi-plus"],["label","Remove All","severity","danger","text","","size","small","icon","pi pi-plus"]],template:function(l,i){if(l&1){let c=j();n(0,"app-docsectiontext")(1,"p"),o(2,"TreeSelect offers multiple templates for customization through templating."),r()(),n(3,"div",3)(4,"p-treeselect",4),g("ngModelChange",function(T){return L(c),h(i.selectedNodes,T)||(i.selectedNodes=T),O(T)}),w(5,Mi,1,0,"ng-template",null,0,W)(7,Ni,2,0,"ng-template",null,1,W)(9,Ii,3,0,"ng-template",null,2,W),r()(),m(11,"app-code",5)}l&2&&(d(4),u("ngModel",i.selectedNodes),s("options",i.nodes),d(7),s("code",i.code))},dependencies:[y,S,v,_,C,Pe],encapsulation:2})}return t})();var Fi=()=>({scrollHeight:"200px"}),vt=(()=>{class t{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getLargeTreeNodes().then(l=>this.nodes=l)}code={basic:`<p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="46" [virtualScrollOptions]="{scrollHeight: '200px'}" />`,html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" containerStyleClass="w-full" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="46" [virtualScrollOptions]="{scrollHeight: '200px'}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-virtual-scroll-demo',
    templateUrl: './tree-select-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectVirtualScrollDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getLargeTreeNodes().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"]};static \u0275fac=function(l){return new(l||t)(b(x))};static \u0275cmp=f({type:t,selectors:[["virtual-scroll-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"card","flex","justify-center"],["containerStyleClass","w-full","display","chip","selectionMode","checkbox","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection","virtualScroll","virtualScrollItemSize","virtualScrollOptions"],["selector","tree-select-virtual-scroll-demo",3,"code"]],template:function(l,i){l&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),n(3,"i"),o(4,"virtualScroll"),r(),o(5," property to true and defining "),n(6,"i"),o(7,"virtualScrollItemSize"),r(),o(8," to specify the height of an item. "),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(i.selectedNodes,a)||(i.selectedNodes=a),a}),r()(),m(11,"app-code",2)),l&2&&(d(10),u("ngModel",i.selectedNodes),s("options",i.nodes)("metaKeySelection",!1)("virtualScroll",!0)("virtualScrollItemSize",46)("virtualScrollOptions",ee(7,Fi)),d(),s("code",i.code))},dependencies:[y,S,v,_,C],encapsulation:2})}return t})();var bt=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=Z({type:t});static \u0275inj=X({imports:[te,Qe,se,ot,Le,Oe,Te,Xe,Ze,Ue,se]})}return t})();var Di=()=>["TreeSelect","TreeNode"],_t=(()=>{class t{docs=[{id:"import",label:"Import",component:mt},{id:"basic",label:"Basic",component:nt},{id:"reactive-forms",label:"Reactive Forms",component:gt},{id:"multiple",label:"Multiple",component:ht},{id:"checkbox",label:"Checkbox",component:rt},{id:"virtual-scroll-doc",label:"Virtual Scroll",component:vt},{id:"lazy",label:"Lazy",component:ut},{id:"filter",label:"Filter",component:ct},{id:"template",label:"Template",component:St},{id:"floatlabel",label:"Float Label",component:dt},{id:"iftalabel",label:"Ifta Label",component:pt},{id:"sizes",label:"Sizes",component:yt},{id:"filled",label:"Filled",component:st},{id:"invalid",label:"Invalid",component:ft},{id:"disabled",label:"Disabled",component:at},{id:"accessibility",label:"Accessibility",component:tt}];static \u0275fac=function(l){return new(l||t)};static \u0275cmp=f({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TreeSelect Component","header","TreeSelect","description","TreeSelect is a form component to choose from hierarchical data.","themeDocs","treeselect",3,"docs","apiDocs"]],template:function(l,i){l&1&&m(0,"app-doc",0),l&2&&s("docs",i.docs)("apiDocs",ee(2,Di))},dependencies:[bt,Ge],encapsulation:2})}return t})();var Bl=[{path:"",component:_t}];export{Bl as default};
