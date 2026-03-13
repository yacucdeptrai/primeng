import{a as x}from"./chunk-QILM2AC2.js";import{a as fo,b as go}from"./chunk-TZFZAFXE.js";import{a as mo,b as uo}from"./chunk-QOGYWKV6.js";import{a as I}from"./chunk-LXRDKFH5.js";import{b as lt}from"./chunk-43LHUBCK.js";import"./chunk-FCMSSE5W.js";import{a as it,b as to}from"./chunk-F4X3V2LA.js";import{a as Fe}from"./chunk-OI76OXDY.js";import"./chunk-7T6NUUXL.js";import{a as ao,b as so}from"./chunk-JMD2YF5E.js";import"./chunk-AKIDLCU7.js";import"./chunk-6FFJRHC4.js";import{a as io,b as lo,c as ro,d as no}from"./chunk-EHIVA7EC.js";import{a as nt}from"./chunk-VHOAM5CB.js";import{a as ot,b as eo}from"./chunk-U5JTIOEL.js";import{a as rt}from"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-UCH3V5DN.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as C,d as po,e as Ct}from"./chunk-I6RUY6VJ.js";import{a as v,b as co}from"./chunk-CIUCWEWU.js";import{e as ne,j as ae,s as Xe,u as vt,v as oo}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{M as Gt,N as qt,O as Qt,P as Jt,a as wt,aa as ye,ba as Zt,p as Ht,q as Ut,v as jt,x as Wt}from"./chunk-DEL7GGHP.js";import{e as Pt,i as Ot}from"./chunk-UHCZASEU.js";import{$ as $e,Ga as At,Ja as Tt,K as Vt,Ka as Xt,L as bt,M as _t,P as ze,Q as ee,R as tt,S as St,X as Yt,Y as Kt,Z as Le,e as ft,h as Lt,i as ie,j as gt,pa as Bt,qa as Se,u as $t,v as Ze,va as De,w as et,wa as yt,y as ht}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as Oe,l as F,m as z,p as ut,q as Ce,u as Je,y as xe}from"./chunk-O4W5DSIC.js";import{$b as Pe,Ab as u,Eb as de,Fb as pe,Gb as U,Hb as H,Mb as S,Mc as le,N as He,O as Ue,Ob as f,Qa as c,Qc as $,Rb as Ft,Rc as _e,S as ke,Sb as mt,Tb as M,Ub as R,X as Y,Xb as be,Y as K,Ya as Ge,Yb as Mt,Za as b,Zb as Qe,_b as me,aa as dt,ac as a,bc as Q,cc as _,d as Ne,da as q,ea as we,eb as y,fb as qe,fc as J,gb as Te,gc as X,hc as Z,jb as pt,kb as p,kc as Ie,la as zt,lc as T,ma as je,mc as te,nc as ve,oa as Ee,pc as Rt,rb as ue,rc as kt,sa as We,xb as s,yb as l,zb as n,zc as h}from"./chunk-DNC77BQZ.js";import{a as he,b as Ae}from"./chunk-GAL4ENT6.js";var ho=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["tree-table-accessibility-doc"]],standalone:!1,decls:158,vars:0,consts:[["href","/paginator/"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),n(),l(3,"p"),a(4," Default role of the table is "),l(5,"i"),a(6,"table"),n(),a(7,". Header, body and footer elements use "),l(8,"i"),a(9,"rowgroup"),n(),a(10,", rows use "),l(11,"i"),a(12,"row"),n(),a(13," role, header cells have "),l(14,"i"),a(15,"columnheader"),n(),a(16," and body cells use "),l(17,"i"),a(18,"cell"),n(),a(19," roles. Sortable headers utilizer "),l(20,"i"),a(21,"aria-sort"),n(),a(22,' attribute either set to "ascending" or "descending". '),n(),l(23,"p"),a(24," Row elements manage "),l(25,"i"),a(26,"aria-expanded"),n(),a(27," for state and "),l(28,"i"),a(29,"aria-level"),n(),a(30," attribute to define the hierachy by "),l(31,"i"),a(32,"ttRow"),n(),a(33," directive. Table rows and table cells should be specified by users using the "),l(34,"i"),a(35,"aria-posinset"),n(),a(36,", "),l(37,"i"),a(38,"aria-setsize"),n(),a(39,", "),l(40,"i"),a(41,"aria-label"),n(),a(42,", and "),l(43,"i"),a(44,"aria-describedby"),n(),a(45," attributes, as they are determined through templating. "),n(),l(46,"p"),a(47,"When selection is enabled, "),l(48,"i"),a(49,"ttSelectableRow"),n(),a(50," directive sets "),l(51,"i"),a(52,"aria-selected"),n(),a(53," to true on a row. In checkbox mode, the built-in checkbox component use "),l(54,"i"),a(55,"checkbox"),n(),a(56," role with "),l(57,"i"),a(58,"aria-checked"),n(),a(59," state attribute."),n(),l(60,"p"),a(61,"Editable cells use custom templating so you need to manage aria roles and attributes manually if required."),n(),l(62,"p"),a(63,"Paginator is a standalone component used inside the TreeTable, refer to the "),l(64,"a",0),a(65,"paginator"),n(),a(66," for more information about the accessibility features."),n(),l(67,"h3"),a(68,"Sortable Headers Keyboard Support"),n(),l(69,"div",1)(70,"table",2)(71,"thead")(72,"tr")(73,"th"),a(74,"Key"),n(),l(75,"th"),a(76,"Function"),n()()(),l(77,"tbody")(78,"tr")(79,"td")(80,"i"),a(81,"tab"),n()(),l(82,"td"),a(83,"Moves through the headers."),n()(),l(84,"tr")(85,"td")(86,"i"),a(87,"enter"),n()(),l(88,"td"),a(89,"Sorts the column."),n()(),l(90,"tr")(91,"td")(92,"i"),a(93,"space"),n()(),l(94,"td"),a(95,"Sorts the column."),n()()()()(),l(96,"h3"),a(97,"Keyboard Support"),n(),l(98,"div",1)(99,"table",2)(100,"thead")(101,"tr")(102,"th"),a(103,"Key"),n(),l(104,"th"),a(105,"Function"),n()()(),l(106,"tbody")(107,"tr")(108,"td")(109,"i"),a(110,"tab"),n()(),l(111,"td"),a(112," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. "),n()(),l(113,"tr")(114,"td")(115,"i"),a(116,"shift"),n(),a(117," + "),l(118,"i"),a(119,"tab"),n()(),l(120,"td"),a(121," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. "),n()(),l(122,"tr")(123,"td")(124,"i"),a(125,"enter"),n()(),l(126,"td"),a(127,"Selects the focused treenode."),n()(),l(128,"tr")(129,"td")(130,"i"),a(131,"space"),n()(),l(132,"td"),a(133,"Selects the focused treenode."),n()(),l(134,"tr")(135,"td")(136,"i"),a(137,"down arrow"),n()(),l(138,"td"),a(139,"Moves focus to the next treenode."),n()(),l(140,"tr")(141,"td")(142,"i"),a(143,"up arrow"),n()(),l(144,"td"),a(145,"Moves focus to the previous treenode."),n()(),l(146,"tr")(147,"td")(148,"i"),a(149,"right arrow"),n()(),l(150,"td"),a(151,"If node is closed, opens the node otherwise moves focus to the first child node."),n()(),l(152,"tr")(153,"td")(154,"i"),a(155,"left arrow"),n()(),l(156,"td"),a(157,"If node is open, closes the node otherwise moves focus to the parent node."),n()()()()()())},dependencies:[C],encapsulation:2})}return t})();var ii=({dt:t})=>`
/* For PrimeNG */
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-treetable-auto-layout>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-auto-layout>.p-treetable-wrapper>table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody>tr {
    cursor: pointer;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
}


/* Scrollable */
.p-treetable-scrollable-wrapper {
    position: relative;
}

.p-treetable-scrollable-header,
.p-treetable-scrollable-footer {
    overflow: hidden;
    flex-shrink: 0;
}

.p-treetable-scrollable-body {
    overflow: auto;
    position: relative;
}

.p-treetable-virtual-table {
    position: absolute;
}

/* Frozen Columns */
.p-treetable-frozen-view .p-treetable-scrollable-body {
    overflow: hidden;
}

.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child {
    border-right: 0 none;
}

.p-treetable-unfrozen-view {
    position: absolute;
    top: 0;
}

/* Flex Scrollable */
.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,
.p-treetable-flex-scrollable .p-treetable-scrollable-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body {
    flex: 1;
}

/* Resizable */
.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: ${t("treetable.column.resizer.width")};
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable .p-column-resizer-helper {
    width: ${t("treetable.resize.indicator.width")};
    position: absolute;
    z-index: 10;
    display: none;
    background: ${t("treetable.resize.indicator.color")};
}

.p-treetable .p-row-editor-init,
.p-treetable .p-row-editor-save,
.p-treetable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}


/* Reorder */
.p-treetable-reorder-indicator-up,
.p-treetable-reorder-indicator-down {
    position: absolute;
    display: none;
}

[ttReorderableColumn] {
    cursor: move;
}

/* Loader */
.p-treetable-mask {
    position: absolute !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-treetable-loading-icon {
    font-size: ${t("treetable.loading.icon.size")};
    width: ${t("treetable.loading.icon.size")};
    height: ${t("treetable.loading.icon.size")};
}

/* Virtual Scroll */
.p-treetable .p-scroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-treetable .p-paginator-top {
    border-color: ${t("treetable.paginator.top.border.color")};
    border-style: solid;
    border-width: ${t("treetable.paginator.top.border.width")};
}

.p-treetable .p-paginator-bottom {
    border-color: ${t("treetable.paginator.bottom.border.color")};
    border-style: solid;
    border-width: ${t("treetable.paginator.bottom.border.width")};
}

.p-treetable .p-treetable-header {
    background: ${t("treetable.header.background")};
    color: ${t("treetable.header.color")};
    border-color: ${t("treetable.header.border.color")};
    border-style: solid;
    border-width: ${t("treetable.header.border.width")};
    padding: ${t("treetable.header.padding")};
    font-weight: ${t("treetable.column.title.font.weight")};
}

.p-treetable .p-treetable-footer {
    background: ${t("treetable.footer.background")};
    color: ${t("treetable.footer.color")};
    border-color: ${t("treetable.footer.border.color")};
    border-style: solid;
    border-width: ${t("treetable.footer.border.width")};
    padding: ${t("treetable.footer.padding")};
    font-weight: ${t("treetable.column.footer.font.weight")};
}

.p-treetable .p-treetable-thead>tr>th {
    padding: ${t("treetable.header.cell.padding")};
    background: ${t("treetable.header.cell.background")};
    border-color: ${t("treetable.header.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${t("treetable.header.cell.color")};
    font-weight: ${t("treetable.column.title.font.weight")};
    text-align: start;
    transition: background ${t("treetable.transition.duration")}, color ${t("treetable.transition.duration")}, border-color ${t("treetable.transition.duration")},
            outline-color ${t("treetable.transition.duration")}, box-shadow ${t("treetable.transition.duration")};
}

.p-treetable .p-treetable-tfoot>tr>td {
    text-align: start;
    padding: ${t("treetable.footer.cell.padding")};
    border-color: ${t("treetable.footer.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${t("treetable.footer.cell.color")};
    background: ${t("treetable.footer.cell.background")};
    font-weight: ${t("treetable.column.footer.font.weight")};
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: ${t("treetable.sort.icon.color")};
    transition: color ${t("treetable.transition.duration")};
}


.p-treetable .p-sortable-column:not(.p-treetable-column-sorted):hover {
    background: ${t("treetable.header.cell.hover.background")};
    color: ${t("treetable.header.cell.hover.color")};
}

.p-treetable .p-sortable-column:not(.p-treetable-column-sorted):hover .p-sortable-column-icon {
    color: ${t("treetable.sort.icon.hover.color")};
}

.p-treetable .p-sortable-column.p-treetable-column-sorted {
    background: ${t("treetable.header.cell.selected.background")};
    color: ${t("treetable.header.cell.selected.color")};
}

.p-treetable .p-sortable-column.p-treetable-column-sorted .p-sortable-column-icon {
    color: ${t("treetable.header.cell.selected.color")};
}

.p-treetable .p-sortable-column:focus-visible {
    box-shadow: ${t("treetable.header.cell.focus.ring.shadow")};
    outline: ${t("treetable.header.cell.focus.ring.width")} ${t("treetable.header.cell.focus.ring.style")} ${t("treetable.header.cell.focus.ring.color")};
    outline-offset: ${t("treetable.header.cell.focus.ring.offset")};
}

.p-treetable-hoverable .p-treetable-selectable-row {
    cursor: pointer;
}

.p-treetable .p-treetable-tbody > tr {
    outline-color: transparent;
    background: ${t("treetable.row.background")};
    color: ${t("treetable.row.color")};
    transition: background ${t("treetable.transition.duration")}, color ${t("treetable.transition.duration")}, border-color ${t("treetable.transition.duration")},
            outline-color ${t("treetable.transition.duration")}, box-shadow ${t("treetable.transition.duration")};
}

.p-treetable .p-treetable-tbody>tr>td {
    text-align: start;
    border-color: ${t("treetable.body.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: ${t("treetable.body.cell.padding")};
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("treetable.node.toggle.button.size")};
    height: ${t("treetable.node.toggle.button.size")};
    color: ${t("treetable.node.toggle.button.color")};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: ${t("treetable.node.toggle.button.border.radius")};
    transition: background ${t("treetable.transition.duration")}, color ${t("treetable.transition.duration")}, border-color ${t("treetable.transition.duration")},
            outline-color ${t("treetable.transition.duration")}, box-shadow ${t("treetable.transition.duration")};
    outline-color: transparent;
    user-select: none;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:enabled:hover {
    color: ${t("treetable.node.toggle.button.hover.color")};
    background: ${t("treetable.node.toggle.button.hover.background")};
}

.p-treetable .p-treetable-tbody>tr>tr.treetable-row-selected .p-treetable-toggler:hover {
    background: ${t("treetable.node.toggle.button.selected.hover.background")};
    color: ${t("treetable.node.toggle.button.selected.hover.color")};
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:focus-visible {
    box-shadow: ${t("treetable.node.toggle.button.focus.ring.shadow")};
    outline: ${t("treetable.node.toggle.button.focus.ring.width")} ${t("treetable.node.toggle.button.focus.ring.style")} ${t("treetable.node.toggle.button.focus.ring.color")};
    outline-offset: ${t("treetable.node.toggle.button.focus.ring.offset")};
}


.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected {
    background: ${t("treetable.row.selected.background")};
    color: ${t("treetable.row.selected.color")};
}

.p-treetable-tbody > tr:focus-visible,
.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
    box-shadow: ${t("treetable.row.focus.ring.shadow")};
    outline: ${t("treetable.row.focus.ring.width")} ${t("treetable.row.focus.ring.style")} ${t("treetable.row.focus.ring.color")};
    outline-offset: ${t("treetable.row.focus.ring.offset")};
}

.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected .p-treetable-toggler {
    color: inherit;
}

.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected .p-treetable-toggler:hover {
    background: ${t("treetable.node.toggle.button.selected.hover.background")};
    color: ${t("treetable.node.toggle.button.selected.hover.color")};
}

.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody>tr:not(.p-treetable-row-selected):hover {
    background: ${t("treetable.row.hover.background")};
    color: ${t("treetable.row.hover.color")};
}

.p-treetable.p-treetable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead>tr>th {
    border-width: 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-tbody>tr>td {
    border-width: 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-tfoot>tr>td {
    border-width: 1px;
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead>tr>th {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody>tr>td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot>tr>td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead>tr>th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}

p-treetabletoggler + p-treetablecheckbox .p-checkbox,
p-treetable-toggler + p-treetable-checkbox .p-checkbox,
p-tree-table-toggler + p-tree-table-checkbox .p-checkbox {
    vertical-align: middle;
}

p-treetabletoggler + p-treetablecheckbox + span,
p-treetable-toggler + p-treetable-checkbox + span,
p-tree-table-toggler + p-tree-table-checkbox + span {
    vertical-align: middle;
}
`,li={root:({instance:t})=>({"p-treetable p-component":!0,"p-treetable-hoverable":t.rowHover||t.selectionMode,"p-treetable-resizable":t.resizableColumns,"p-treetable-resizable-fit":t.resizableColumns&&t.columnResizeMode==="fit","p-treetable-scrollable":t.scrollable,"p-treetable-flex-scrollable":t.scrollable&&t.scrollHeight==="flex","p-treetable-gridlines":t.showGridlines,"p-treetable-sm":t.size==="small","p-treetable-lg":t.size==="large"}),loading:"p-treetable-loading",mask:"p-treetable-mask p-overlay-mask",loadingIcon:"p-treetable-loading-icon",header:"p-treetable-header",paginator:({instance:t})=>"p-treetable-paginator-"+t.paginatorPosition,tableContainer:"p-treetable-table-container",table:({instance:t})=>({"p-treetable-table":!0,"p-treetable-scrollable-table":t.scrollable,"p-treetable-resizable-table":t.resizableColumns,"p-treetable-resizable-table-fit":t.resizableColumns&&t.columnResizeMode==="fit"}),thead:"p-treetable-thead",headerCell:({instance:t})=>({"p-treetable-header-cell":!0,"p-treetable-sortable-column":t.sortable,"p-treetable-resizable-column":t.resizableColumns,"p-treetable-column-sorted":t?.sorted,"p-treetable-frozen-column":t.columnProp("frozen")}),columnResizer:"p-treetable-column-resizer",columnHeaderContent:"p-treetable-column-header-content",columnTitle:"p-treetable-column-title",sortIcon:"p-treetable-sort-icon",pcSortBadge:"p-treetable-sort-badge",tbody:"p-treetable-tbody",row:({instance:t})=>({"p-treetable-row-selected":t.selected}),bodyCell:({instance:t})=>({"p-treetable-frozen-column":t.columnProp("frozen")}),bodyCellContent:({instance:t})=>({"p-treetable-body-cell-content":!0,"p-treetable-body-cell-content-expander":t.columnProp("expander")}),toggler:"p-treetable-body-cell-content-expander",nodeToggleButton:"p-treetable-node-toggle-button",nodeToggleIcon:"p-treetable-node-toggle-icon",pcNodeCheckbox:"p-treetable-node-checkbox",emptyMessage:"p-treetable-empty-message",tfoot:"p-treetable-tfoot",footerCell:({instance:t})=>({"p-treetable-frozen-column":t.columnProp("frozen")}),footer:"p-treetable-footer",columnResizeIndicator:"p-treetable-column-resize-indicator"},ri={tableContainer:{overflow:"auto"},thead:{position:"sticky"},tfoot:{position:"sticky"}},xt=(()=>{class t extends At{name="treetable";theme=ii;classes=li;inlineStyles=ri;static \u0275fac=(()=>{let e;return function(i){return(e||(e=je(t)))(i||t)}})();static \u0275prov=He({token:t,factory:t.\u0275fac})}return t})();var ni=["colgroup"],ai=["caption"],si=["header"],ci=["body"],di=["footer"],pi=["summary"],mi=["emptymessage"],ui=["paginatorleft"],fi=["paginatorright"],gi=["paginatordropdownitem"],hi=["frozenheader"],bi=["frozenbody"],_i=["frozenfooter"],Si=["frozencolgroup"],yi=["loadingicon"],wi=["reorderindicatorupicon"],Ti=["reorderindicatordownicon"],vi=["sorticon"],Ci=["checkboxicon"],xi=["headercheckboxicon"],Di=["togglericon"],Ni=["paginatorfirstpagelinkicon"],Ei=["paginatorlastpagelinkicon"],Ii=["paginatorpreviouspagelinkicon"],zi=["paginatornextpagelinkicon"],Fi=["loader"],Mi=["container"],Ri=["resizeHelper"],ki=["reorderIndicatorUp"],Pi=["reorderIndicatorDown"],Oi=["table"],Li=["scrollableView"],$i=["scrollableFrozenView"],Vi=(t,r,e,o,i,d)=>({"p-treetable p-component":!0,"p-treetable-gridlines":t,"p-treetable-hoverable-rows":r,"p-treetable-auto-layout":e,"p-treetable-resizable":o,"p-treetable-resizable-fit":i,"p-treetable-flex-scrollable":d}),fe=t=>({$implicit:t}),Yi=(t,r)=>({left:t,width:r}),Ki=t=>({width:t});function Bi(t,r){if(t&1&&u(0,"i"),t&2){let e=f(2);Pe("p-treetable-loading-icon pi-spin "+e.loadingIcon)}}function Ai(t,r){t&1&&u(0,"SpinnerIcon",24),t&2&&s("spin",!0)("styleClass","p-treetable-loading-icon")}function Hi(t,r){}function Ui(t,r){t&1&&p(0,Hi,0,0,"ng-template")}function ji(t,r){if(t&1&&(l(0,"span",25),p(1,Ui,1,0,null,26),n()),t&2){let e=f(3);c(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Wi(t,r){if(t&1&&(de(0),p(1,Ai,1,2,"SpinnerIcon",22)(2,ji,2,1,"span",23),pe()),t&2){let e=f(2);c(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),c(),s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Gi(t,r){if(t&1&&(l(0,"div",18)(1,"div",19),p(2,Bi,1,2,"i",20)(3,Wi,3,2,"ng-container",21),n()()),t&2){let e=f();c(2),s("ngIf",e.loadingIcon),c(),s("ngIf",!e.loadingIcon)}}function qi(t,r){t&1&&U(0)}function Qi(t,r){if(t&1&&(l(0,"div",27),p(1,qi,1,0,"ng-container",26),n()),t&2){let e=f();c(),s("ngTemplateOutlet",e.captionTemplate||e._captionTemplate)}}function Ji(t,r){t&1&&U(0)}function Xi(t,r){if(t&1&&p(0,Ji,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function Zi(t,r){t&1&&p(0,Xi,1,1,"ng-template",29)}function el(t,r){t&1&&U(0)}function tl(t,r){if(t&1&&p(0,el,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function ol(t,r){t&1&&p(0,tl,1,1,"ng-template",30)}function il(t,r){t&1&&U(0)}function ll(t,r){if(t&1&&p(0,il,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function rl(t,r){t&1&&p(0,ll,1,1,"ng-template",31)}function nl(t,r){t&1&&U(0)}function al(t,r){if(t&1&&p(0,nl,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function sl(t,r){t&1&&p(0,al,1,1,"ng-template",32)}function cl(t,r){if(t&1){let e=H();l(0,"p-paginator",28),S("onPageChange",function(i){Y(e);let d=f();return K(d.onPageChange(i))}),p(1,Zi,1,0,null,21)(2,ol,1,0,null,21)(3,rl,1,0,null,21)(4,sl,1,0,null,21),n()}if(t&2){let e=f();s("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate??e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate??e._paginatorRightTemplate)("dropdownAppendTo",e.paginatorDropdownAppendTo)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate??e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)("locale",e.paginatorLocale),c(),s("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),c(),s("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),c(),s("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),c(),s("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function dl(t,r){t&1&&U(0)}function pl(t,r){t&1&&U(0)}function ml(t,r){t&1&&U(0)}function ul(t,r){if(t&1&&(l(0,"div",33)(1,"table",34,1),p(3,dl,1,0,"ng-container",35),l(4,"thead",36),p(5,pl,1,0,"ng-container",35),n(),u(6,"tbody",37),l(7,"tfoot",38),p(8,ml,1,0,"ng-container",35),n()()()),t&2){let e=f();c(),s("ngClass",e.tableStyleClass)("ngStyle",e.tableStyle),c(2),s("ngTemplateOutlet",e.colGroupTemplate||e._colGroupTemplate)("ngTemplateOutletContext",te(10,fe,e.columns)),c(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",te(12,fe,e.columns)),c(),s("pTreeTableBody",e.columns)("pTreeTableBodyTemplate",e.bodyTemplate??e._bodyTemplate),c(2),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)("ngTemplateOutletContext",te(14,fe,e.columns))}}function fl(t,r){if(t&1&&u(0,"div",42,3),t&2){let e=f(2);s("ttScrollableView",e.frozenColumns)("frozen",!0)("ngStyle",te(4,Ki,e.frozenWidth))("scrollHeight",e.scrollHeight)}}function gl(t,r){if(t&1&&(l(0,"div",39),p(1,fl,2,6,"div",40),u(2,"div",41,2),n()),t&2){let e=f();c(),s("ngIf",e.frozenColumns||e.frozenBodyTemplate||e._frozenBodyTemplate),c(),s("ttScrollableView",e.columns)("frozen",!1)("scrollHeight",e.scrollHeight)("ngStyle",ve(5,Yi,e.frozenWidth,"calc(100% - "+e.frozenWidth+")"))}}function hl(t,r){t&1&&U(0)}function bl(t,r){if(t&1&&p(0,hl,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function _l(t,r){t&1&&p(0,bl,1,1,"ng-template",29)}function Sl(t,r){t&1&&U(0)}function yl(t,r){if(t&1&&p(0,Sl,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function wl(t,r){t&1&&p(0,yl,1,1,"ng-template",30)}function Tl(t,r){t&1&&U(0)}function vl(t,r){if(t&1&&p(0,Tl,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function Cl(t,r){t&1&&p(0,vl,1,1,"ng-template",31)}function xl(t,r){t&1&&U(0)}function Dl(t,r){if(t&1&&p(0,xl,1,0,"ng-container",26),t&2){let e=f(3);s("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function Nl(t,r){t&1&&p(0,Dl,1,1,"ng-template",32)}function El(t,r){if(t&1){let e=H();l(0,"p-paginator",43),S("onPageChange",function(i){Y(e);let d=f();return K(d.onPageChange(i))}),p(1,_l,1,0,null,21)(2,wl,1,0,null,21)(3,Cl,1,0,null,21)(4,Nl,1,0,null,21),n()}if(t&2){let e=f();s("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate??e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate??e._paginatorRightTemplate)("dropdownAppendTo",e.paginatorDropdownAppendTo)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate??e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)("locale",e.paginatorLocale),c(),s("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),c(),s("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),c(),s("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),c(),s("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function Il(t,r){t&1&&U(0)}function zl(t,r){if(t&1&&(l(0,"div",44),p(1,Il,1,0,"ng-container",26),n()),t&2){let e=f();c(),s("ngTemplateOutlet",e.summaryTemplate||e._summaryTemplate)}}function Fl(t,r){t&1&&u(0,"div",45,4)}function Ml(t,r){t&1&&u(0,"ArrowDownIcon")}function Rl(t,r){}function kl(t,r){t&1&&p(0,Rl,0,0,"ng-template")}function Pl(t,r){if(t&1&&(l(0,"span",46,5),p(2,Ml,1,0,"ArrowDownIcon",21)(3,kl,1,0,null,26),n()),t&2){let e=f();c(2),s("ngIf",!e.reorderIndicatorUpIconTemplate&&!e._reorderIndicatorUpIconTemplate),c(),s("ngTemplateOutlet",e.reorderIndicatorUpIconTemplate||e._reorderIndicatorUpIconTemplate)}}function Ol(t,r){t&1&&u(0,"ArrowUpIcon")}function Ll(t,r){}function $l(t,r){t&1&&p(0,Ll,0,0,"ng-template")}function Vl(t,r){if(t&1&&(l(0,"span",47,6),p(2,Ol,1,0,"ArrowUpIcon",21)(3,$l,1,0,null,26),n()),t&2){let e=f();c(2),s("ngIf",!e.reorderIndicatorDownIconTemplate&&!e._reorderIndicatorDownIconTemplate),c(),s("ngTemplateOutlet",e.reorderIndicatorDownIconTemplate||e._reorderIndicatorDownIconTemplate)}}var Yl=["pTreeTableBody",""],Kl=(t,r,e,o)=>({$implicit:t,node:r,rowData:e,columns:o}),Bl=(t,r)=>({$implicit:t,frozen:r});function Al(t,r){t&1&&U(0)}function Hl(t,r){if(t&1&&(de(0),p(1,Al,1,0,"ng-container",2),pe()),t&2){let e=f().$implicit,o=f();c(),s("ngTemplateOutlet",o.template)("ngTemplateOutletContext",Rt(2,Kl,e,e.node,e.node.data,o.columns))}}function Ul(t,r){if(t&1&&p(0,Hl,2,7,"ng-container",1),t&2){let e=r.$implicit;s("ngIf",e.visible)}}function jl(t,r){t&1&&U(0)}function Wl(t,r){if(t&1&&(de(0),p(1,jl,1,0,"ng-container",2),pe()),t&2){let e=f();c(),s("ngTemplateOutlet",e.tt.emptyMessageTemplate)("ngTemplateOutletContext",ve(2,Bl,e.columns,e.frozen))}}var Gl=["scrollHeader"],ql=["scrollHeaderBox"],Ql=["scrollBody"],Jl=["scrollTable"],Xl=["loadingTable"],Zl=["scrollFooter"],er=["scrollFooterBox"],tr=["scrollableAligner"],or=["scroller"],ir=["ttScrollableView",""],lr=t=>({height:t}),_o=(t,r)=>({$implicit:t,options:r}),rr=t=>({options:t}),nr=(t,r)=>({"max-height":t,"overflow-y":r}),ar=()=>({});function sr(t,r){t&1&&U(0)}function cr(t,r){t&1&&U(0)}function dr(t,r){t&1&&U(0)}function pr(t,r){if(t&1&&p(0,dr,1,0,"ng-container",14),t&2){let e=r.$implicit,o=r.options;f(2);let i=be(11);s("ngTemplateOutlet",i)("ngTemplateOutletContext",ve(2,_o,e,o))}}function mr(t,r){t&1&&U(0)}function ur(t,r){if(t&1&&p(0,mr,1,0,"ng-container",14),t&2){let e=r.options,o=f(3);s("ngTemplateOutlet",o.tt.loaderTemplate||o.tt._loaderTemplate)("ngTemplateOutletContext",te(2,rr,e))}}function fr(t,r){t&1&&(de(0),p(1,ur,1,4,"ng-template",null,5,h),pe())}function gr(t,r){if(t&1){let e=H();l(0,"p-scroller",19,3),S("onLazyLoad",function(i){Y(e);let d=f();return K(d.tt.onLazyItemLoad(i))}),p(2,pr,1,5,"ng-template",null,4,h)(4,fr,3,0,"ng-container",17),n()}if(t&2){let e=f();me(te(8,lr,e.tt.scrollHeight!=="flex"?e.tt.scrollHeight:void 0)),s("items",e.tt.serializedValue)("scrollHeight",e.scrollHeight!=="flex"?void 0:"100%")("itemSize",e.tt.virtualScrollItemSize||e.tt._virtualRowHeight)("lazy",e.tt.lazy)("options",e.tt.virtualScrollOptions),c(4),s("ngIf",e.tt.loaderTemplate||e.tt._loaderTemplate)}}function hr(t,r){t&1&&U(0)}function br(t,r){if(t&1&&(de(0),l(1,"div",20,6),p(3,hr,1,0,"ng-container",14),n(),pe()),t&2){let e=f(),o=be(11);c(),s("ngStyle",ve(3,nr,e.tt.scrollHeight!=="flex"?e.scrollHeight:void 0,!e.frozen&&e.tt.scrollHeight?"scroll":void 0)),c(2),s("ngTemplateOutlet",o)("ngTemplateOutletContext",ve(7,_o,e.serializedValue,T(6,ar)))}}function _r(t,r){t&1&&U(0)}function Sr(t,r){t&1&&u(0,"div",24,8)}function yr(t,r){if(t&1&&(l(0,"table",21,7),p(2,_r,1,0,"ng-container",14),u(3,"tbody",22),n(),p(4,Sr,2,0,"div",23)),t&2){let e=r.$implicit,o=r.options,i=f();me(o.contentStyle),Pe(i.tt.tableStyleClass),s("ngClass",o.contentStyleClass)("ngStyle",i.tt.tableStyle),c(2),s("ngTemplateOutlet",i.frozen?i.tt.frozenColGroupTemplate||i.tt._frozenColGroupTemplate||i.tt.colGroupTemplate||i.tt._colGroupTemplate:i.tt.colGroupTemplate||i.tt._colGroupTemplate)("ngTemplateOutletContext",te(13,fe,i.columns)),c(),s("pTreeTableBody",i.columns)("pTreeTableBodyTemplate",i.frozen?i.tt.frozenBodyTemplate||i.tt._frozenBodyTemplate||i.tt.bodyTemplate||i.tt._bodyTemplate:i.tt.bodyTemplate||i.tt._bodyTemplate)("serializedNodes",e)("frozen",i.frozen),c(),s("ngIf",i.frozen)}}function wr(t,r){t&1&&U(0)}function Tr(t,r){t&1&&U(0)}function vr(t,r){if(t&1&&(l(0,"div",25,9)(2,"div",26,10)(4,"table",27),p(5,wr,1,0,"ng-container",14),l(6,"tfoot",28),p(7,Tr,1,0,"ng-container",14),n()()()()),t&2){let e=f();c(4),s("ngClass",e.tt.tableStyleClass)("ngStyle",e.tt.tableStyle),c(),s("ngTemplateOutlet",e.frozen?e.tt.frozenColGroupTemplate||e.tt._frozenColGroupTemplate||e.tt.colGroupTemplate||e.tt._colGroupTemplate:e.tt.colGroupTemplate||e.tt._colGroupTemplate)("ngTemplateOutletContext",te(6,fe,e.columns)),c(2),s("ngTemplateOutlet",e.frozen?e.tt.frozenFooterTemplate||e.tt._frozenFooterTemplate||e.tt.footerTemplate||e.tt._footerTemplate:e.tt.footerTemplate||e.tt._footerTemplate)("ngTemplateOutletContext",te(8,fe,e.columns))}}function Cr(t,r){t&1&&u(0,"SortAltIcon",3),t&2&&s("styleClass","p-sortable-column-icon")}function xr(t,r){t&1&&u(0,"SortAmountUpAltIcon",3),t&2&&s("styleClass","p-sortable-column-icon")}function Dr(t,r){t&1&&u(0,"SortAmountDownIcon",3),t&2&&s("styleClass","p-sortable-column-icon")}function Nr(t,r){if(t&1&&(de(0),p(1,Cr,1,1,"SortAltIcon",2)(2,xr,1,1,"SortAmountUpAltIcon",2)(3,Dr,1,1,"SortAmountDownIcon",2),pe()),t&2){let e=f();c(),s("ngIf",e.sortOrder===0),c(),s("ngIf",e.sortOrder===1),c(),s("ngIf",e.sortOrder===-1)}}function Er(t,r){}function Ir(t,r){t&1&&p(0,Er,0,0,"ng-template")}function zr(t,r){if(t&1&&(l(0,"span",4),p(1,Ir,1,0,null,5),n()),t&2){let e=f();c(),s("ngTemplateOutlet",e.tt.sortIconTemplate||e.tt._sortIconTemplate)("ngTemplateOutletContext",te(2,fe,e.sortOrder))}}var Fr=(t,r)=>({$implicit:t,partialSelected:r});function Mr(t,r){}function Rr(t,r){t&1&&p(0,Mr,0,0,"ng-template")}function kr(t,r){if(t&1&&p(0,Rr,1,0,null,3),t&2){let e=f(2);s("ngTemplateOutlet",e.tt.checkboxIconTemplate||e.tt._checkboxIconTemplate)("ngTemplateOutletContext",ve(2,Fr,e.checked,e.partialChecked))}}function Pr(t,r){t&1&&(de(0),p(1,kr,1,5,"ng-template",2),pe())}function Or(t,r){t&1&&u(0,"ChevronDownIcon"),t&2&&ue("aria-hidden",!0)}function Lr(t,r){t&1&&u(0,"ChevronRightIcon"),t&2&&ue("aria-hidden",!0)}function $r(t,r){if(t&1&&(de(0),p(1,Or,1,1,"ChevronDownIcon",1)(2,Lr,1,1,"ChevronRightIcon",1),pe()),t&2){let e=f();c(),s("ngIf",e.rowNode.node.expanded),c(),s("ngIf",!e.rowNode.node.expanded)}}function Vr(t,r){}function Yr(t,r){t&1&&p(0,Vr,0,0,"ng-template")}var Me=(()=>{class t{sortSource=new Ne;selectionSource=new Ne;contextMenuSource=new Ne;uiUpdateSource=new Ne;totalRecordsSource=new Ne;sortSource$=this.sortSource.asObservable();selectionSource$=this.selectionSource.asObservable();contextMenuSource$=this.contextMenuSource.asObservable();uiUpdateSource$=this.uiUpdateSource.asObservable();totalRecordsSource$=this.totalRecordsSource.asObservable();onSort(e){this.sortSource.next(e)}onSelectionChange(){this.selectionSource.next(null)}onContextMenu(e){this.contextMenuSource.next(e)}onUIUpdate(e){this.uiUpdateSource.next(e)}onTotalRecordsChange(e){this.totalRecordsSource.next(e)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=He({token:t,factory:t.\u0275fac})}return t})(),w=(()=>{class t extends Tt{_componentStyle=ke(xt);columns;style;styleClass;tableStyle;tableStyleClass;autoLayout;lazy=!1;lazyLoadOnInit=!0;paginator;rows;first=0;pageLinks=5;rowsPerPageOptions;alwaysShowPaginator=!0;paginatorPosition="bottom";paginatorStyleClass;paginatorDropdownAppendTo;currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;defaultSortOrder=1;sortMode="single";resetPageOnSort=!0;customSort;selectionMode;contextMenuSelection;contextMenuSelectionMode="separate";dataKey;metaKeySelection=!1;compareSelectionBy="deepEquals";rowHover;loading;loadingIcon;showLoader=!0;scrollable;scrollHeight;virtualScroll;virtualScrollItemSize;virtualScrollOptions;virtualScrollDelay=150;frozenWidth;frozenColumns;resizableColumns;columnResizeMode="fit";reorderableColumns;contextMenu;rowTrackBy=(e,o)=>o;filters={};globalFilterFields;filterDelay=300;filterMode="lenient";filterLocale;paginatorLocale;get totalRecords(){return this._totalRecords}set totalRecords(e){this._totalRecords=e,this.tableService.onTotalRecordsChange(this._totalRecords)}get sortField(){return this._sortField}set sortField(e){this._sortField=e}get sortOrder(){return this._sortOrder}set sortOrder(e){this._sortOrder=e}get multiSortMeta(){return this._multiSortMeta}set multiSortMeta(e){this._multiSortMeta=e}get selection(){return this._selection}set selection(e){this._selection=e}get value(){return this._value}set value(e){this._value=e}get virtualRowHeight(){return this._virtualRowHeight}set virtualRowHeight(e){this._virtualRowHeight=e,console.log("The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.")}get selectionKeys(){return this._selectionKeys}set selectionKeys(e){this._selectionKeys=e,this.selectionKeysChange.emit(this._selectionKeys)}showGridlines=!1;selectionChange=new q;contextMenuSelectionChange=new q;onFilter=new q;onNodeExpand=new q;onNodeCollapse=new q;onPage=new q;onSort=new q;onLazyLoad=new q;sortFunction=new q;onColResize=new q;onColReorder=new q;onNodeSelect=new q;onNodeUnselect=new q;onContextMenuSelect=new q;onHeaderCheckboxToggle=new q;onEditInit=new q;onEditComplete=new q;onEditCancel=new q;selectionKeysChange=new q;containerViewChild;resizeHelperViewChild;reorderIndicatorUpViewChild;reorderIndicatorDownViewChild;tableViewChild;scrollableViewChild;scrollableFrozenViewChild;_value=[];_virtualRowHeight=28;_selectionKeys;serializedValue;_totalRecords=0;_multiSortMeta;_sortField;_sortOrder=1;filteredNodes;filterTimeout;_colGroupTemplate;colGroupTemplate;_captionTemplate;captionTemplate;_headerTemplate;headerTemplate;_bodyTemplate;bodyTemplate;_footerTemplate;footerTemplate;_summaryTemplate;summaryTemplate;_emptyMessageTemplate;emptyMessageTemplate;_paginatorLeftTemplate;paginatorLeftTemplate;_paginatorRightTemplate;paginatorRightTemplate;_paginatorDropdownItemTemplate;paginatorDropdownItemTemplate;_frozenHeaderTemplate;frozenHeaderTemplate;_frozenBodyTemplate;frozenBodyTemplate;_frozenFooterTemplate;frozenFooterTemplate;_frozenColGroupTemplate;frozenColGroupTemplate;_loadingIconTemplate;loadingIconTemplate;_reorderIndicatorUpIconTemplate;reorderIndicatorUpIconTemplate;_reorderIndicatorDownIconTemplate;reorderIndicatorDownIconTemplate;_sortIconTemplate;sortIconTemplate;_checkboxIconTemplate;checkboxIconTemplate;_headerCheckboxIconTemplate;headerCheckboxIconTemplate;_togglerIconTemplate;togglerIconTemplate;_paginatorFirstPageLinkIconTemplate;paginatorFirstPageLinkIconTemplate;_paginatorLastPageLinkIconTemplate;paginatorLastPageLinkIconTemplate;_paginatorPreviousPageLinkIconTemplate;paginatorPreviousPageLinkIconTemplate;_paginatorNextPageLinkIconTemplate;paginatorNextPageLinkIconTemplate;_loaderTemplate;loaderTemplate;lastResizerHelperX;reorderIconWidth;reorderIconHeight;draggedColumn;dropPosition;preventSelectionSetterPropagation;_selection;selectedKeys={};rowTouched;editingCell;editingCellData;editingCellField;editingCellClick;documentEditListener;initialized;toggleRowIndex;ngOnInit(){super.ngOnInit(),this.lazy&&this.lazyLoadOnInit&&!this.virtualScroll&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.initialized=!0}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"caption":this.captionTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"body":this.bodyTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"summary":this.summaryTemplate=e.template;break;case"colgroup":this.colGroupTemplate=e.template;break;case"emptymessage":this.emptyMessageTemplate=e.template;break;case"paginatorleft":this.paginatorLeftTemplate=e.template;break;case"paginatorright":this.paginatorRightTemplate=e.template;break;case"paginatordropdownitem":this.paginatorDropdownItemTemplate=e.template;break;case"frozenheader":this.frozenHeaderTemplate=e.template;break;case"frozenbody":this.frozenBodyTemplate=e.template;break;case"frozenfooter":this.frozenFooterTemplate=e.template;break;case"frozencolgroup":this.frozenColGroupTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;case"reorderindicatorupicon":this.reorderIndicatorUpIconTemplate=e.template;break;case"reorderindicatordownicon":this.reorderIndicatorDownIconTemplate=e.template;break;case"sorticon":this.sortIconTemplate=e.template;break;case"checkboxicon":this.checkboxIconTemplate=e.template;break;case"headercheckboxicon":this.headerCheckboxIconTemplate=e.template;break;case"togglericon":this.togglerIconTemplate=e.template;break;case"paginatorfirstpagelinkicon":this.paginatorFirstPageLinkIconTemplate=e.template;break;case"paginatorlastpagelinkicon":this.paginatorLastPageLinkIconTemplate=e.template;break;case"paginatorpreviouspagelinkicon":this.paginatorPreviousPageLinkIconTemplate=e.template;break;case"paginatornextpagelinkicon":this.paginatorNextPageLinkIconTemplate=e.template;break;case"loader":this.loaderTemplate=e.template;break}})}filterService=ke(Bt);tableService=ke(Me);zone=ke(we);ngOnChanges(e){super.ngOnChanges(e),e.value&&(this._value=e.value.currentValue,this.lazy||(this.totalRecords=this._value?this._value.length:0,this.sortMode=="single"&&this.sortField?this.sortSingle():this.sortMode=="multiple"&&this.multiSortMeta?this.sortMultiple():this.hasFilter()&&this._filter()),this.updateSerializedValue(),this.tableService.onUIUpdate(this.value)),e.sortField&&(this._sortField=e.sortField.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.sortOrder&&(this._sortOrder=e.sortOrder.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.multiSortMeta&&(this._multiSortMeta=e.multiSortMeta.currentValue,this.sortMode==="multiple"&&this.sortMultiple()),e.selection&&(this._selection=e.selection.currentValue,this.preventSelectionSetterPropagation||(this.updateselectedKeys(),this.tableService.onSelectionChange()),this.preventSelectionSetterPropagation=!1)}updateSerializedValue(){this.serializedValue=[],this.paginator?this.serializePageNodes():this.serializeNodes(null,this.filteredNodes||this.value,0,!0)}serializeNodes(e,o,i,d){if(o&&o.length)for(let m of o){m.parent=e;let g={node:m,parent:e,level:i,visible:d&&(e?e.expanded:!0)};this.serializedValue.push(g),g.visible&&m.expanded&&this.serializeNodes(m,m.children,i+1,g.visible)}}serializePageNodes(){let e=this.filteredNodes||this.value;if(this.serializedValue=[],e&&e.length){let o=this.lazy?0:this.first;for(let i=o;i<o+this.rows;i++){let d=e[i];d&&(this.serializedValue.push({node:d,parent:null,level:0,visible:!0}),this.serializeNodes(d,d.children,1,!0))}}}updateselectedKeys(){if(this.dataKey&&this._selection)if(this.selectedKeys={},Array.isArray(this._selection))for(let e of this._selection)this.selectedKeys[String(ie(e.data,this.dataKey))]=1;else this.selectedKeys[String(ie(this._selection.data,this.dataKey))]=1}onPageChange(e){this.first=e.first,this.rows=e.rows,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.serializePageNodes(),this.onPage.emit({first:this.first,rows:this.rows}),this.tableService.onUIUpdate(this.value),this.scrollable&&this.resetScrollTop()}sort(e){let o=e.originalEvent;if(this.sortMode==="single"&&(this._sortOrder=this.sortField===e.field?this.sortOrder*-1:this.defaultSortOrder,this._sortField=e.field,this.sortSingle(),this.resetPageOnSort&&this.scrollable&&this.resetScrollTop()),this.sortMode==="multiple"){let i=o.metaKey||o.ctrlKey,d=this.getSortMeta(e.field);d?i?d.order=d.order*-1:(this._multiSortMeta=[{field:e.field,order:d.order*-1}],this.resetPageOnSort&&this.scrollable&&this.resetScrollTop()):((!i||!this.multiSortMeta)&&(this._multiSortMeta=[],this.resetPageOnSort&&this.scrollable&&this.resetScrollTop()),this.multiSortMeta.push({field:e.field,order:this.defaultSortOrder})),this.sortMultiple()}}sortSingle(){if(this.sortField&&this.sortOrder){this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.sortNodes(this.value),this.hasFilter()&&this._filter());let e={field:this.sortField,order:this.sortOrder};this.onSort.emit(e),this.tableService.onSort(e),this.updateSerializedValue()}}sortNodes(e){if(!(!e||e.length===0)){this.customSort?this.sortFunction.emit({data:e,mode:this.sortMode,field:this.sortField,order:this.sortOrder}):e.sort((o,i)=>{let d=ie(o.data,this.sortField),m=ie(i.data,this.sortField),g=null;return d==null&&m!=null?g=-1:d!=null&&m==null?g=1:d==null&&m==null?g=0:typeof d=="string"&&typeof m=="string"?g=d.localeCompare(m,void 0,{numeric:!0}):g=d<m?-1:d>m?1:0,this.sortOrder*g});for(let o of e)this.sortNodes(o.children)}}sortMultiple(){this.multiSortMeta&&(this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.sortMultipleNodes(this.value),this.hasFilter()&&this._filter()),this.onSort.emit({multisortmeta:this.multiSortMeta}),this.updateSerializedValue(),this.tableService.onSort(this.multiSortMeta))}sortMultipleNodes(e){if(!(!e||e.length===0)){this.customSort?this.sortFunction.emit({data:this.value,mode:this.sortMode,multiSortMeta:this.multiSortMeta}):e.sort((o,i)=>this.multisortField(o,i,this.multiSortMeta,0));for(let o of e)this.sortMultipleNodes(o.children)}}multisortField(e,o,i,d){if(ft(this.multiSortMeta)||ft(i[d]))return 0;let m=ie(e.data,i[d].field),g=ie(o.data,i[d].field),E=null;if(m==null&&g!=null?E=-1:m!=null&&g==null?E=1:m==null&&g==null&&(E=0),typeof m=="string"||m instanceof String){if(m.localeCompare&&m!=g)return i[d].order*m.localeCompare(g,void 0,{numeric:!0})}else E=m<g?-1:1;return m==g?i.length-1>d?this.multisortField(e,o,i,d+1):0:i[d].order*E}getSortMeta(e){if(this.multiSortMeta&&this.multiSortMeta.length){for(let o=0;o<this.multiSortMeta.length;o++)if(this.multiSortMeta[o].field===e)return this.multiSortMeta[o]}return null}isSorted(e){if(this.sortMode==="single")return this.sortField&&this.sortField===e;if(this.sortMode==="multiple"){let o=!1;if(this.multiSortMeta){for(let i=0;i<this.multiSortMeta.length;i++)if(this.multiSortMeta[i].field==e){o=!0;break}}return o}}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder,filters:this.filters,globalFilter:this.filters&&this.filters.global?this.filters.global.value:null,multiSortMeta:this.multiSortMeta,forceUpdate:()=>this.cd.detectChanges()}}onLazyItemLoad(e){this.onLazyLoad.emit(Ae(he(he({},this.createLazyLoadMetadata()),e),{rows:e.last-e.first}))}resetScrollTop(){this.virtualScroll?this.scrollToVirtualIndex(0):this.scrollTo({top:0})}scrollToVirtualIndex(e){this.scrollableViewChild&&this.scrollableViewChild.scrollToVirtualIndex(e),this.scrollableFrozenViewChild&&this.scrollableViewChild.scrollToVirtualIndex(e)}scrollTo(e){this.scrollableViewChild&&this.scrollableViewChild.scrollTo(e),this.scrollableFrozenViewChild&&this.scrollableViewChild.scrollTo(e)}isEmpty(){let e=this.filteredNodes||this.value;return e==null||e.length==0}getBlockableElement(){return this.el.nativeElement.children[0]}onColumnResizeBegin(e){let o=$e(this.containerViewChild?.nativeElement).left;this.lastResizerHelperX=e.pageX-o+this.containerViewChild?.nativeElement.scrollLeft,e.preventDefault()}onColumnResize(e){let o=$e(this.containerViewChild?.nativeElement).left;et(this.containerViewChild?.nativeElement,"p-unselectable-text"),this.resizeHelperViewChild.nativeElement.style.height=this.containerViewChild?.nativeElement.offsetHeight+"px",this.resizeHelperViewChild.nativeElement.style.top="0px",this.resizeHelperViewChild.nativeElement.style.left=e.pageX-o+this.containerViewChild?.nativeElement.scrollLeft+"px",this.resizeHelperViewChild.nativeElement.style.display="block"}onColumnResizeEnd(e,o){let i=this.resizeHelperViewChild.nativeElement.offsetLeft-this.lastResizerHelperX,d=o.offsetWidth,m=d+i,g=o.style.minWidth||15;if(d+i>parseInt(g)){if(this.columnResizeMode==="fit"){let E=o.nextElementSibling;for(;!E.offsetParent;)E=E.nextElementSibling;if(E){let A=E.offsetWidth-i,j=E.style.minWidth||15;if(m>15&&A>parseInt(j))if(this.scrollable){let oe=this.findParentScrollableView(o),G=ee(oe,".p-treetable-scrollable-body table")||ee(oe,".p-scroller-viewport table"),re=ee(oe,"table.p-treetable-scrollable-header-table"),se=ee(oe,"table.p-treetable-scrollable-footer-table"),ce=Le(o);this.resizeColGroup(re,ce,m,A),this.resizeColGroup(G,ce,m,A),this.resizeColGroup(se,ce,m,A)}else o.style.width=m+"px",E&&(E.style.width=A+"px")}}else if(this.columnResizeMode==="expand")if(this.scrollable){let E=this.findParentScrollableView(o),A=ee(E,".p-treetable-scrollable-body")||ee(E,".p-scroller-viewport"),j=ee(E,".p-treetable-scrollable-header"),oe=ee(E,".p-treetable-scrollable-footer"),G=ee(E,".p-treetable-scrollable-body table")||ee(E,".p-scroller-viewport table"),re=ee(E,"table.p-treetable-scrollable-header-table"),se=ee(E,"table.p-treetable-scrollable-footer-table");G.style.width=G.offsetWidth+i+"px",re.style.width=re.offsetWidth+i+"px",se&&(se.style.width=se.offsetWidth+i+"px");let ce=Le(o),Ke=o?G.offsetWidth+i:m,Be=o?re.offsetWidth+i:m,st=this.containerViewChild?.nativeElement.offsetWidth>=Ke,ct=(Nt,Et,It,oi)=>{Nt&&Et&&(Nt.style.width=oi?It+bt(A)+"px":"auto",Et.style.width=It+"px")};ct(A,G,Ke,st),ct(j,re,Be,st),ct(oe,se,Be,st),this.resizeColGroup(re,ce,m,null),this.resizeColGroup(G,ce,m,null),this.resizeColGroup(se,ce,m,null)}else{this.tableViewChild.nativeElement.style.width=this.tableViewChild?.nativeElement.offsetWidth+i+"px",o.style.width=m+"px";let E=this.tableViewChild?.nativeElement.style.width;this.containerViewChild.nativeElement.style.width=E+"px"}this.onColResize.emit({element:o,delta:i})}this.resizeHelperViewChild.nativeElement.style.display="none",ht(this.containerViewChild?.nativeElement,"p-unselectable-text")}findParentScrollableView(e){if(e){let o=e.parentElement;for(;o&&!Ze(o,"p-treetable-scrollable-view");)o=o.parentElement;return o}else return null}resizeColGroup(e,o,i,d){if(e){let m=e.children[0].nodeName==="COLGROUP"?e.children[0]:null;if(m){let g=m.children[o],E=g.nextElementSibling;g.style.width=i+"px",E&&d&&(E.style.width=d+"px")}else throw"Scrollable tables require a colgroup to support resizable columns"}}onColumnDragStart(e,o){this.reorderIconWidth=Kt(this.reorderIndicatorUpViewChild?.nativeElement),this.reorderIconHeight=Yt(this.reorderIndicatorDownViewChild?.nativeElement),this.draggedColumn=o,e.dataTransfer.setData("text","b")}onColumnDragEnter(e,o){if(this.reorderableColumns&&this.draggedColumn&&o){e.preventDefault();let i=$e(this.containerViewChild?.nativeElement),d=$e(o);if(this.draggedColumn!=o){let m=d.left-i.left,g=i.top-d.top,E=d.left+o.offsetWidth/2;this.reorderIndicatorUpViewChild.nativeElement.style.top=d.top-i.top-(this.reorderIconHeight-1)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.top=d.top-i.top+o.offsetHeight+"px",e.pageX>E?(this.reorderIndicatorUpViewChild.nativeElement.style.left=m+o.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=m+o.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=1):(this.reorderIndicatorUpViewChild.nativeElement.style.left=m-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=m-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=-1),this.reorderIndicatorUpViewChild.nativeElement.style.display="block",this.reorderIndicatorDownViewChild.nativeElement.style.display="block"}else e.dataTransfer.dropEffect="none"}}onColumnDragLeave(e){this.reorderableColumns&&this.draggedColumn&&(e.preventDefault(),this.reorderIndicatorUpViewChild.nativeElement.style.display="none",this.reorderIndicatorDownViewChild.nativeElement.style.display="none")}onColumnDrop(e,o){if(e.preventDefault(),this.draggedColumn){let i=wt.indexWithinGroup(this.draggedColumn,"ttreorderablecolumn"),d=wt.indexWithinGroup(o,"ttreorderablecolumn"),m=i!=d;m&&(d-i==1&&this.dropPosition===-1||i-d==1&&this.dropPosition===1)&&(m=!1),m&&d<i&&this.dropPosition===1&&(d=d+1),m&&d>i&&this.dropPosition===-1&&(d=d-1),m&&($t(this.columns,i,d),this.onColReorder.emit({dragIndex:i,dropIndex:d,columns:this.columns})),this.reorderIndicatorUpViewChild.nativeElement.style.display="none",this.reorderIndicatorDownViewChild.nativeElement.style.display="none",this.draggedColumn.draggable=!1,this.draggedColumn=null,this.dropPosition=null}}handleRowClick(e){let o=e.originalEvent.target.nodeName;if(!(o=="INPUT"||o=="BUTTON"||o=="A"||Ze(e.originalEvent.target,"p-clickable"))){if(this.selectionMode){this.preventSelectionSetterPropagation=!0;let i=e.rowNode,d=this.isSelected(i.node),m=this.rowTouched?!1:this.metaKeySelection,g=this.dataKey?String(ie(i.node.data,this.dataKey)):null;if(m){let E=e.originalEvent,A=E.metaKey||E.ctrlKey;if(d&&A){if(this.isSingleSelectionMode())this._selection=null,this.selectedKeys={},this.selectionChange.emit(null);else{let j=this.findIndexInSelection(i.node);this._selection=this.selection.filter((oe,G)=>G!=j),this.selectionChange.emit(this.selection),g&&delete this.selectedKeys[g]}this.onNodeUnselect.emit({originalEvent:e.originalEvent,node:i.node,type:"row"})}else this.isSingleSelectionMode()?(this._selection=i.node,this.selectionChange.emit(i.node),g&&(this.selectedKeys={},this.selectedKeys[g]=1)):this.isMultipleSelectionMode()&&(A?this._selection=this.selection||[]:(this._selection=[],this.selectedKeys={}),this._selection=[...this.selection,i.node],this.selectionChange.emit(this.selection),g&&(this.selectedKeys[g]=1)),this.onNodeSelect.emit({originalEvent:e.originalEvent,node:i.node,type:"row",index:e.rowIndex})}else if(this.selectionMode==="single")d?(this._selection=null,this.selectedKeys={},this.selectionChange.emit(this.selection),this.onNodeUnselect.emit({originalEvent:e.originalEvent,node:i.node,type:"row"})):(this._selection=i.node,this.selectionChange.emit(this.selection),this.onNodeSelect.emit({originalEvent:e.originalEvent,node:i.node,type:"row",index:e.rowIndex}),g&&(this.selectedKeys={},this.selectedKeys[g]=1));else if(this.selectionMode==="multiple")if(d){let E=this.findIndexInSelection(i.node);this._selection=this.selection.filter((A,j)=>j!=E),this.selectionChange.emit(this.selection),this.onNodeUnselect.emit({originalEvent:e.originalEvent,node:i.node,type:"row"}),g&&delete this.selectedKeys[g]}else this._selection=this.selection?[...this.selection,i.node]:[i.node],this.selectionChange.emit(this.selection),this.onNodeSelect.emit({originalEvent:e.originalEvent,node:i.node,type:"row",index:e.rowIndex}),g&&(this.selectedKeys[g]=1);this.tableService.onSelectionChange()}this.rowTouched=!1}}handleRowTouchEnd(e){this.rowTouched=!0}handleRowRightClick(e){if(this.contextMenu){let o=e.rowNode.node;if(this.contextMenuSelectionMode==="separate")this.contextMenuSelection=o,this.contextMenuSelectionChange.emit(o),this.onContextMenuSelect.emit({originalEvent:e.originalEvent,node:o}),this.contextMenu.show(e.originalEvent),this.tableService.onContextMenu(o);else if(this.contextMenuSelectionMode==="joint"){this.preventSelectionSetterPropagation=!0;let i=this.isSelected(o),d=this.dataKey?String(ie(o.data,this.dataKey)):null;i||(this.isSingleSelectionMode()?(this.selection=o,this.selectionChange.emit(o)):this.isMultipleSelectionMode()&&(this.selection=[o],this.selectionChange.emit(this.selection)),d&&(this.selectedKeys[d]=1)),this.contextMenu.show(e.originalEvent),this.onContextMenuSelect.emit({originalEvent:e.originalEvent,node:o})}}}toggleNodeWithCheckbox(e){this.selection=this.selection||[],this.preventSelectionSetterPropagation=!0;let o=e.rowNode.node;this.isSelected(o)?(this.propagateSelectionDown(o,!1),e.rowNode.parent&&this.propagateSelectionUp(o.parent,!1),this.selectionChange.emit(this.selection),this.onNodeUnselect.emit({originalEvent:e,node:o})):(this.propagateSelectionDown(o,!0),e.rowNode.parent&&this.propagateSelectionUp(o.parent,!0),this.selectionChange.emit(this.selection),this.onNodeSelect.emit({originalEvent:e,node:o})),this.tableService.onSelectionChange()}toggleNodesWithCheckbox(e,o){let i=this.filteredNodes||this.value;this._selection=o&&i?i.slice():[],this.toggleAll(o),o||(this._selection=[],this.selectedKeys={}),this.preventSelectionSetterPropagation=!0,this.selectionChange.emit(this._selection),this.tableService.onSelectionChange(),this.onHeaderCheckboxToggle.emit({originalEvent:e,checked:o})}toggleAll(e){let o=this.filteredNodes||this.value;if(this.selectionKeys){if(o&&o.length){for(let i of o)this.propagateDown(i,e);this.selectionKeysChange.emit(this.selectionKeys)}}else if(o&&o.length)for(let i of o)this.propagateSelectionDown(i,e)}propagateSelectionUp(e,o){if(e.children&&e.children.length){let d=0,m=!1,g=this.dataKey?String(ie(e.data,this.dataKey)):null;for(let E of e.children)this.isSelected(E)?d++:E.partialSelected&&(m=!0);if(o&&d==e.children.length)this._selection=[...this.selection||[],e],e.partialSelected=!1,g&&(this.selectedKeys[g]=1);else{if(!o){let E=this.findIndexInSelection(e);E>=0&&(this._selection=this.selection.filter((A,j)=>j!=E),g&&delete this.selectedKeys[g])}m||d>0&&d!=e.children.length?e.partialSelected=!0:e.partialSelected=!1}}let i=e.parent;e.checked=o,i&&this.propagateSelectionUp(i,o)}propagateSelectionDown(e,o){let i=this.findIndexInSelection(e),d=this.dataKey?String(ie(e.data,this.dataKey)):null;if(o&&i==-1?(this._selection=[...this.selection||[],e],d&&(this.selectedKeys[d]=1)):!o&&i>-1&&(this._selection=this.selection.filter((m,g)=>g!=i),d&&delete this.selectedKeys[d]),e.partialSelected=!1,e.checked=o,e.children&&e.children.length)for(let m of e.children)this.propagateSelectionDown(m,o)}isSelected(e){return e&&this.selection?this.dataKey?e.hasOwnProperty("checked")?e.checked:this.selectedKeys[ie(e.data,this.dataKey)]!==void 0:Array.isArray(this.selection)?this.findIndexInSelection(e)>-1:this.equals(e,this.selection):!1}isNodeSelected(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.nodeKey(e)]?.checked===!0:!1}isNodePartialSelected(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.nodeKey(e)]?.partialChecked===!0:!1}nodeKey(e){return ie(e,this.dataKey)||ie(e?.data,this.dataKey)}toggleCheckbox(e){let{rowNode:o,check:i,originalEvent:d}=e,m=o.node;this.selectionKeys?(this.propagateDown(m,i),m.parent&&this.propagateUp(m.parent,i),this.selectionKeysChange.emit(this.selectionKeys)):this.toggleNodeWithCheckbox({originalEvent:d,rowNode:o}),this.tableService.onSelectionChange()}propagateDown(e,o){if(o?this.selectionKeys[this.nodeKey(e)]={checked:!0,partialChecked:!1}:delete this.selectionKeys[this.nodeKey(e)],e.children&&e.children.length)for(let i of e.children)this.propagateDown(i,o)}propagateUp(e,o){let i=0,d=!1;for(let g of e.children)this.selectionKeys[this.nodeKey(g)]&&this.selectionKeys[this.nodeKey(g)].checked?i++:this.selectionKeys[this.nodeKey(g)]&&this.selectionKeys[this.nodeKey(g)].partialChecked&&(d=!0);o&&i===e.children.length?this.selectionKeys[this.nodeKey(e)]={checked:!0,partialChecked:!1}:(o||delete this.selectionKeys[this.nodeKey(e)],d||i>0&&i!==e.children.length?this.selectionKeys[this.nodeKey(e)]={checked:!1,partialChecked:!0}:this.selectionKeys[this.nodeKey(e)]={checked:!1,partialChecked:!1});let m=e.parent;m&&this.propagateUp(m,o)}findIndexInSelection(e){let o=-1;if(this.selection&&this.selection.length){for(let i=0;i<this.selection.length;i++)if(this.equals(e,this.selection[i])){o=i;break}}return o}isSingleSelectionMode(){return this.selectionMode==="single"}isMultipleSelectionMode(){return this.selectionMode==="multiple"}equals(e,o){return this.compareSelectionBy==="equals"?gt(e,o):gt(e.data,o.data,this.dataKey)}filter(e,o,i){this.filterTimeout&&clearTimeout(this.filterTimeout),this.isFilterBlank(e)?this.filters[o]&&delete this.filters[o]:this.filters[o]={value:e,matchMode:i},this.filterTimeout=setTimeout(()=>{this._filter(),this.filterTimeout=null},this.filterDelay)}filterGlobal(e,o){this.filter(e,"global",o)}isFilterBlank(e){return e!=null?!!(typeof e=="string"&&e.trim().length==0||Array.isArray(e)&&e.length==0):!0}_filter(){if(this.lazy)this.onLazyLoad.emit(this.createLazyLoadMetadata());else{if(!this.value)return;if(!this.hasFilter())this.filteredNodes=null,this.paginator&&(this.totalRecords=this.value?this.value.length:0);else{let o;if(this.filters.global){if(!this.columns&&!this.globalFilterFields)throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");o=this.globalFilterFields||this.columns}this.filteredNodes=[];let i=this.filterMode==="strict",d=!1;for(let m of this.value){let g=he({},m),E=!0,A=!1,j;for(let G in this.filters)if(this.filters.hasOwnProperty(G)&&G!=="global"){let re=this.filters[G],se=G,ce=re.value,Ke=re.matchMode||"startsWith",Be=this.filterService.filters[Ke];if(j={filterField:se,filterValue:ce,filterConstraint:Be,isStrictMode:i},(i&&!(this.findFilteredNodes(g,j)||this.isFilterMatched(g,j))||!i&&!(this.isFilterMatched(g,j)||this.findFilteredNodes(g,j)))&&(E=!1),!E)break}if(this.filters.global&&!A&&o){let G=he({},g),re,se=this.filters.global.value,ce=this.filterService.filters[this.filters.global.matchMode];j={filterField:re,filterValue:se,filterConstraint:ce,isStrictMode:i,globalFilterFieldsArray:o},(i&&(this.findFilteredNodes(G,j)||this.isFilterMatched(G,j))||!i&&(this.isFilterMatched(G,j)||this.findFilteredNodes(G,j)))&&(A=!0,g=G)}let oe=E;this.filters.global&&(oe=E&&A),oe&&this.filteredNodes.push(g),d=d||!E||A||E&&this.filteredNodes.length>0||!A&&this.filteredNodes.length===0}d||(this.filteredNodes=null),this.paginator&&(this.totalRecords=this.filteredNodes?this.filteredNodes.length:this.value?this.value.length:0)}this.cd.markForCheck()}this.first=0;let e=this.filteredNodes||this.value;this.onFilter.emit({filters:this.filters,filteredValue:e}),this.tableService.onUIUpdate(e),this.updateSerializedValue(),this.scrollable&&this.resetScrollTop()}findFilteredNodes(e,o){if(e){let i=!1;if(e.children){let d=[...e.children];e.children=[];for(let m of d){let g=he({},m);this.isFilterMatched(g,o)&&(i=!0,e.children.push(g))}}if(i)return!0}}isFilterMatched(e,o){let{filterField:i,filterValue:d,filterConstraint:m,isStrictMode:g,globalFilterFieldsArray:E}=o,A=!1,j=oe=>m(ie(e.data,oe),d,this.filterLocale);return A=E?.length?E.some(oe=>j(oe.field||oe)):j(i),(!A||g&&!this.isNodeLeaf(e))&&(A=this.findFilteredNodes(e,{filterField:i,filterValue:d,filterConstraint:m,isStrictMode:g,globalFilterFieldsArray:E})||A),A}isNodeLeaf(e){return e.leaf===!1?!1:!(e.children&&e.children.length)}hasFilter(){let e=!0;for(let o in this.filters)if(this.filters.hasOwnProperty(o)){e=!1;break}return!e}reset(){this._sortField=null,this._sortOrder=1,this._multiSortMeta=null,this.tableService.onSort(null),this.filteredNodes=null,this.filters={},this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.totalRecords=this._value?this._value.length:0}updateEditingCell(e,o,i){this.editingCell=e,this.editingCellData=o,this.editingCellField=i,this.bindDocumentEditListener()}isEditingCellValid(){return this.editingCell&&ze(this.editingCell,".ng-invalid.ng-dirty").length===0}bindDocumentEditListener(){this.documentEditListener||(this.documentEditListener=this.renderer.listen(this.document,"click",e=>{this.editingCell&&!this.editingCellClick&&this.isEditingCellValid()&&(ht(this.editingCell,"p-cell-editing"),this.editingCell=null,this.onEditComplete.emit({field:this.editingCellField,data:this.editingCellData}),this.editingCellField=null,this.editingCellData=null,this.unbindDocumentEditListener()),this.editingCellClick=!1}))}unbindDocumentEditListener(){this.documentEditListener&&(this.documentEditListener(),this.documentEditListener=null)}ngOnDestroy(){this.unbindDocumentEditListener(),this.editingCell=null,this.editingCellField=null,this.editingCellData=null,this.initialized=null,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=je(t)))(i||t)}})();static \u0275cmp=y({type:t,selectors:[["p-treeTable"],["p-treetable"],["p-tree-table"]],contentQueries:function(o,i,d){if(o&1&&Ft(d,ni,4)(d,ai,4)(d,si,4)(d,ci,4)(d,di,4)(d,pi,4)(d,mi,4)(d,ui,4)(d,fi,4)(d,gi,4)(d,hi,4)(d,bi,4)(d,_i,4)(d,Si,4)(d,yi,4)(d,wi,4)(d,Ti,4)(d,vi,4)(d,Ci,4)(d,xi,4)(d,Di,4)(d,Ni,4)(d,Ei,4)(d,Ii,4)(d,zi,4)(d,Fi,4)(d,De,4),o&2){let m;M(m=R())&&(i._colGroupTemplate=m.first),M(m=R())&&(i._captionTemplate=m.first),M(m=R())&&(i._headerTemplate=m.first),M(m=R())&&(i._bodyTemplate=m.first),M(m=R())&&(i._footerTemplate=m.first),M(m=R())&&(i._summaryTemplate=m.first),M(m=R())&&(i._emptyMessageTemplate=m.first),M(m=R())&&(i._paginatorLeftTemplate=m.first),M(m=R())&&(i._paginatorRightTemplate=m.first),M(m=R())&&(i._paginatorDropdownItemTemplate=m.first),M(m=R())&&(i._frozenHeaderTemplate=m.first),M(m=R())&&(i._frozenBodyTemplate=m.first),M(m=R())&&(i._frozenFooterTemplate=m.first),M(m=R())&&(i._frozenColGroupTemplate=m.first),M(m=R())&&(i._loadingIconTemplate=m.first),M(m=R())&&(i._reorderIndicatorUpIconTemplate=m.first),M(m=R())&&(i._reorderIndicatorDownIconTemplate=m.first),M(m=R())&&(i._sortIconTemplate=m.first),M(m=R())&&(i._checkboxIconTemplate=m.first),M(m=R())&&(i._headerCheckboxIconTemplate=m.first),M(m=R())&&(i._togglerIconTemplate=m.first),M(m=R())&&(i._paginatorFirstPageLinkIconTemplate=m.first),M(m=R())&&(i._paginatorLastPageLinkIconTemplate=m.first),M(m=R())&&(i._paginatorPreviousPageLinkIconTemplate=m.first),M(m=R())&&(i._paginatorNextPageLinkIconTemplate=m.first),M(m=R())&&(i._loaderTemplate=m.first),M(m=R())&&(i.templates=m)}},viewQuery:function(o,i){if(o&1&&mt(Mi,5)(Ri,5)(ki,5)(Pi,5)(Oi,5)(Li,5)($i,5),o&2){let d;M(d=R())&&(i.containerViewChild=d.first),M(d=R())&&(i.resizeHelperViewChild=d.first),M(d=R())&&(i.reorderIndicatorUpViewChild=d.first),M(d=R())&&(i.reorderIndicatorDownViewChild=d.first),M(d=R())&&(i.tableViewChild=d.first),M(d=R())&&(i.scrollableViewChild=d.first),M(d=R())&&(i.scrollableFrozenViewChild=d.first)}},inputs:{columns:"columns",style:"style",styleClass:"styleClass",tableStyle:"tableStyle",tableStyleClass:"tableStyleClass",autoLayout:[2,"autoLayout","autoLayout",$],lazy:[2,"lazy","lazy",$],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",$],paginator:[2,"paginator","paginator",$],rows:[2,"rows","rows",_e],first:[2,"first","first",_e],pageLinks:[2,"pageLinks","pageLinks",_e],rowsPerPageOptions:"rowsPerPageOptions",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",$],paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",paginatorDropdownAppendTo:"paginatorDropdownAppendTo",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",$],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",$],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",$],showPageLinks:[2,"showPageLinks","showPageLinks",$],defaultSortOrder:[2,"defaultSortOrder","defaultSortOrder",_e],sortMode:"sortMode",resetPageOnSort:[2,"resetPageOnSort","resetPageOnSort",$],customSort:[2,"customSort","customSort",$],selectionMode:"selectionMode",contextMenuSelection:"contextMenuSelection",contextMenuSelectionMode:"contextMenuSelectionMode",dataKey:"dataKey",metaKeySelection:[2,"metaKeySelection","metaKeySelection",$],compareSelectionBy:"compareSelectionBy",rowHover:[2,"rowHover","rowHover",$],loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",showLoader:[2,"showLoader","showLoader",$],scrollable:[2,"scrollable","scrollable",$],scrollHeight:"scrollHeight",virtualScroll:[2,"virtualScroll","virtualScroll",$],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",_e],virtualScrollOptions:"virtualScrollOptions",virtualScrollDelay:[2,"virtualScrollDelay","virtualScrollDelay",_e],frozenWidth:"frozenWidth",frozenColumns:"frozenColumns",resizableColumns:[2,"resizableColumns","resizableColumns",$],columnResizeMode:"columnResizeMode",reorderableColumns:[2,"reorderableColumns","reorderableColumns",$],contextMenu:"contextMenu",rowTrackBy:"rowTrackBy",filters:"filters",globalFilterFields:"globalFilterFields",filterDelay:[2,"filterDelay","filterDelay",_e],filterMode:"filterMode",filterLocale:"filterLocale",paginatorLocale:"paginatorLocale",totalRecords:"totalRecords",sortField:"sortField",sortOrder:"sortOrder",multiSortMeta:"multiSortMeta",selection:"selection",value:"value",virtualRowHeight:"virtualRowHeight",selectionKeys:"selectionKeys",showGridlines:[2,"showGridlines","showGridlines",$]},outputs:{selectionChange:"selectionChange",contextMenuSelectionChange:"contextMenuSelectionChange",onFilter:"onFilter",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onPage:"onPage",onSort:"onSort",onLazyLoad:"onLazyLoad",sortFunction:"sortFunction",onColResize:"onColResize",onColReorder:"onColReorder",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onContextMenuSelect:"onContextMenuSelect",onHeaderCheckboxToggle:"onHeaderCheckboxToggle",onEditInit:"onEditInit",onEditComplete:"onEditComplete",onEditCancel:"onEditCancel",selectionKeysChange:"selectionKeysChange"},standalone:!1,features:[Ie([Me,xt]),pt,zt],decls:12,vars:21,consts:[["container",""],["table",""],["scrollableView",""],["scrollableFrozenView",""],["resizeHelper",""],["reorderIndicatorUp",""],["reorderIndicatorDown",""],["data-scrollselectors",".p-treetable-scrollable-body",3,"ngStyle","ngClass"],["class","p-treetable-loading",4,"ngIf"],["class","p-treetable-header",4,"ngIf"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","dropdownAppendTo","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","locale","onPageChange",4,"ngIf"],["class","p-treetable-wrapper",4,"ngIf"],["class","p-treetable-scrollable-wrapper",4,"ngIf"],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","dropdownAppendTo","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","locale","onPageChange",4,"ngIf"],["class","p-treetable-footer",4,"ngIf"],["class","p-column-resizer-helper","style","display:none",4,"ngIf"],["class","p-treetable-reorder-indicator-up","style","display: none;",4,"ngIf"],["class","p-treetable-reorder-indicator-down","style","display: none;",4,"ngIf"],[1,"p-treetable-loading"],[1,"p-overlay-mask","p-treetable-mask"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"spin","styleClass",4,"ngIf"],["class","p-treetable-loading-icon",4,"ngIf"],[3,"spin","styleClass"],[1,"p-treetable-loading-icon"],[4,"ngTemplateOutlet"],[1,"p-treetable-header"],["styleClass","p-paginator-top",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","dropdownAppendTo","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","locale"],["pTemplate","firstpagelinkicon"],["pTemplate","previouspagelinkicon"],["pTemplate","lastpagelinkicon"],["pTemplate","nextpagelinkicon"],[1,"p-treetable-wrapper"],["role","table",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","rowgroup",1,"p-treetable-thead"],["role","rowgroup",1,"p-treetable-tbody",3,"pTreeTableBody","pTreeTableBodyTemplate"],["role","rowgroup",1,"p-treetable-tfoot"],[1,"p-treetable-scrollable-wrapper"],["class","p-treetable-scrollable-view p-treetable-frozen-view",3,"ttScrollableView","frozen","ngStyle","scrollHeight",4,"ngIf"],[1,"p-treetable-scrollable-view",3,"ttScrollableView","frozen","scrollHeight","ngStyle"],[1,"p-treetable-scrollable-view","p-treetable-frozen-view",3,"ttScrollableView","frozen","ngStyle","scrollHeight"],["styleClass","p-paginator-bottom",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","dropdownAppendTo","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","locale"],[1,"p-treetable-footer"],[1,"p-column-resizer-helper",2,"display","none"],[1,"p-treetable-reorder-indicator-up",2,"display","none"],[1,"p-treetable-reorder-indicator-down",2,"display","none"]],template:function(o,i){o&1&&(l(0,"div",7,0),p(2,Gi,4,2,"div",8)(3,Qi,2,1,"div",9)(4,cl,5,21,"p-paginator",10)(5,ul,9,16,"div",11)(6,gl,4,8,"div",12)(7,El,5,21,"p-paginator",13)(8,zl,2,1,"div",14)(9,Fl,2,0,"div",15)(10,Pl,4,2,"span",16)(11,Vl,4,2,"span",17),n()),o&2&&(Pe(i.styleClass),s("ngStyle",i.style)("ngClass",kt(14,Vi,i.showGridlines,i.rowHover||i.selectionMode==="single"||i.selectionMode==="multiple",i.autoLayout,i.resizableColumns,i.resizableColumns&&i.columnResizeMode==="fit",i.scrollable&&i.scrollHeight==="flex")),c(2),s("ngIf",i.loading&&i.showLoader),c(),s("ngIf",i.captionTemplate||i._captionTemplate),c(),s("ngIf",i.paginator&&(i.paginatorPosition==="top"||i.paginatorPosition=="both")),c(),s("ngIf",!i.scrollable),c(),s("ngIf",i.scrollable),c(),s("ngIf",i.paginator&&(i.paginatorPosition==="bottom"||i.paginatorPosition=="both")),c(),s("ngIf",i.summaryTemplate||i._summaryTemplate),c(),s("ngIf",i.resizableColumns),c(),s("ngIf",i.reorderableColumns),c(),s("ngIf",i.reorderableColumns))},dependencies:()=>[Oe,z,Ce,ut,ao,De,Jt,Ht,Ut,Kr,So],encapsulation:2})}return t})(),So=(()=>{class t{tt;treeTableService;cd;columns;template;frozen;serializedNodes;scrollerOptions;subscription;constructor(e,o,i){this.tt=e,this.treeTableService=o,this.cd=i,this.subscription=this.tt.tableService.uiUpdateSource$.subscribe(()=>{this.tt.virtualScroll&&this.cd.detectChanges()})}getScrollerOption(e,o){return this.tt.virtualScroll?(o=o||this.scrollerOptions,o?o[e]:null):null}getRowIndex(e){let o=this.getScrollerOption("getItemOptions");return o?o(e).index:e}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w),b(Me),b(le))};static \u0275cmp=y({type:t,selectors:[["","pTreeTableBody",""]],inputs:{columns:[0,"pTreeTableBody","columns"],template:[0,"pTreeTableBodyTemplate","template"],frozen:[2,"frozen","frozen",$],serializedNodes:"serializedNodes",scrollerOptions:"scrollerOptions"},standalone:!1,attrs:Yl,decls:2,vars:3,consts:[["ngFor","",3,"ngForOf","ngForTrackBy"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&p(0,Ul,1,1,"ng-template",0)(1,Wl,2,5,"ng-container",1),o&2&&(s("ngForOf",i.serializedNodes||i.tt.serializedValue)("ngForTrackBy",i.tt.rowTrackBy),c(),s("ngIf",i.tt.isEmpty()))},dependencies:[F,z,Ce],encapsulation:2})}return t})(),Kr=(()=>{class t{platformId;renderer;tt;el;zone;columns;frozen;scrollHeaderViewChild;scrollHeaderBoxViewChild;scrollBodyViewChild;scrollTableViewChild;scrollLoadingTableViewChild;scrollFooterViewChild;scrollFooterBoxViewChild;scrollableAlignerViewChild;scroller;headerScrollListener;bodyScrollListener;footerScrollListener;frozenSiblingBody;totalRecordsSubscription;_scrollHeight;preventBodyScrollPropagation;get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e,e!=null&&(e.includes("%")||e.includes("calc"))&&console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.')}constructor(e,o,i,d,m){this.platformId=e,this.renderer=o,this.tt=i,this.el=d,this.zone=m}ngAfterViewInit(){if(xe(this.platformId)){if(this.frozen)this.scrollableAlignerViewChild&&this.scrollableAlignerViewChild.nativeElement&&(this.scrollableAlignerViewChild.nativeElement.style.height=Vt()+"px");else{(this.tt.frozenColumns||this.tt.frozenBodyTemplate||this.tt._frozenBodyTemplate)&&et(this.el.nativeElement,"p-treetable-unfrozen-view");let e=this.el.nativeElement.previousElementSibling;if(e&&(this.tt.virtualScroll?this.frozenSiblingBody=ee(e,".p-scroller-viewport"):this.frozenSiblingBody=ee(e,".p-treetable-scrollable-body")),this.scrollHeight){let o=bt();this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight=o+"px",this.scrollFooterBoxViewChild&&this.scrollFooterBoxViewChild.nativeElement&&(this.scrollFooterBoxViewChild.nativeElement.style.paddingRight=o+"px")}}this.bindEvents()}}bindEvents(){xe(this.platformId)&&this.zone.runOutsideAngular(()=>{this.scrollHeaderViewChild&&this.scrollHeaderViewChild.nativeElement&&(this.headerScrollListener=this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement,"scroll",this.onHeaderScroll.bind(this))),this.scrollFooterViewChild&&this.scrollFooterViewChild.nativeElement&&(this.footerScrollListener=this.renderer.listen(this.scrollFooterViewChild.nativeElement,"scroll",this.onFooterScroll.bind(this))),this.frozen||(this.tt.virtualScroll?this.bodyScrollListener=this.renderer.listen((this.scroller?.getElementRef()).nativeElement,"scroll",this.onBodyScroll.bind(this)):this.bodyScrollListener=this.renderer.listen(this.scrollBodyViewChild?.nativeElement,"scroll",this.onBodyScroll.bind(this)))})}unbindEvents(){xe(this.platformId)&&(this.scrollHeaderViewChild&&this.scrollHeaderViewChild.nativeElement&&this.headerScrollListener&&(this.headerScrollListener(),this.headerScrollListener=null),this.scrollFooterViewChild&&this.scrollFooterViewChild.nativeElement&&this.footerScrollListener&&(this.footerScrollListener(),this.footerScrollListener=null),this.scrollBodyViewChild&&this.scrollBodyViewChild.nativeElement&&this.bodyScrollListener&&(this.bodyScrollListener(),this.bodyScrollListener=null),this.scroller&&this.scroller.getElementRef()&&this.bodyScrollListener&&(this.bodyScrollListener(),this.bodyScrollListener=null))}onHeaderScroll(){let e=this.scrollHeaderViewChild?.nativeElement.scrollLeft;this.scrollBodyViewChild.nativeElement.scrollLeft=e,this.scrollFooterViewChild&&this.scrollFooterViewChild.nativeElement&&(this.scrollFooterViewChild.nativeElement.scrollLeft=e),this.preventBodyScrollPropagation=!0}onFooterScroll(){let e=this.scrollFooterViewChild?.nativeElement.scrollLeft;this.scrollBodyViewChild.nativeElement.scrollLeft=e,this.scrollHeaderViewChild&&this.scrollHeaderViewChild.nativeElement&&(this.scrollHeaderViewChild.nativeElement.scrollLeft=e),this.preventBodyScrollPropagation=!0}onBodyScroll(e){if(this.preventBodyScrollPropagation){this.preventBodyScrollPropagation=!1;return}this.scrollHeaderViewChild&&this.scrollHeaderViewChild.nativeElement&&(this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft=-1*e.target.scrollLeft+"px"),this.scrollFooterViewChild&&this.scrollFooterViewChild.nativeElement&&(this.scrollFooterBoxViewChild.nativeElement.style.marginLeft=-1*e.target.scrollLeft+"px"),this.frozenSiblingBody&&(this.frozenSiblingBody.scrollTop=e.target.scrollTop)}scrollToVirtualIndex(e){this.scroller&&this.scroller.scrollToIndex(e)}scrollTo(e){this.scroller?this.scroller.scrollTo(e):this.scrollBodyViewChild?.nativeElement.scrollTo?this.scrollBodyViewChild.nativeElement.scrollTo(e):(this.scrollBodyViewChild.nativeElement.scrollLeft=e.left,this.scrollBodyViewChild.nativeElement.scrollTop=e.top)}ngOnDestroy(){this.unbindEvents(),this.frozenSiblingBody=null}static \u0275fac=function(o){return new(o||t)(b(We),b(Ge),b(w),b(Ee),b(we))};static \u0275cmp=y({type:t,selectors:[["","ttScrollableView",""]],viewQuery:function(o,i){if(o&1&&mt(Gl,5)(ql,5)(Ql,5)(Jl,5)(Xl,5)(Zl,5)(er,5)(tr,5)(or,5),o&2){let d;M(d=R())&&(i.scrollHeaderViewChild=d.first),M(d=R())&&(i.scrollHeaderBoxViewChild=d.first),M(d=R())&&(i.scrollBodyViewChild=d.first),M(d=R())&&(i.scrollTableViewChild=d.first),M(d=R())&&(i.scrollLoadingTableViewChild=d.first),M(d=R())&&(i.scrollFooterViewChild=d.first),M(d=R())&&(i.scrollFooterBoxViewChild=d.first),M(d=R())&&(i.scrollableAlignerViewChild=d.first),M(d=R())&&(i.scroller=d.first)}},inputs:{columns:[0,"ttScrollableView","columns"],frozen:[2,"frozen","frozen",$],scrollHeight:"scrollHeight"},standalone:!1,attrs:ir,decls:13,vars:13,consts:[["scrollHeader",""],["scrollHeaderBox",""],["buildInItems",""],["scroller",""],["content",""],["loader",""],["scrollBody",""],["scrollTable",""],["scrollableAligner",""],["scrollFooter",""],["scrollFooterBox",""],[1,"p-treetable-scrollable-header"],[1,"p-treetable-scrollable-header-box"],[1,"p-treetable-scrollable-header-table",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","rowgroup",1,"p-treetable-thead"],["styleClass","p-treetable-scrollable-body",3,"items","style","scrollHeight","itemSize","lazy","options","onLazyLoad",4,"ngIf"],[4,"ngIf"],["class","p-treetable-scrollable-footer",4,"ngIf"],["styleClass","p-treetable-scrollable-body",3,"onLazyLoad","items","scrollHeight","itemSize","lazy","options"],[1,"p-treetable-scrollable-body",3,"ngStyle"],["role","table",3,"ngClass","ngStyle"],["role","rowgroup",1,"p-treetable-tbody",3,"pTreeTableBody","pTreeTableBodyTemplate","serializedNodes","frozen"],["style","background-color:transparent",4,"ngIf"],[2,"background-color","transparent"],[1,"p-treetable-scrollable-footer"],[1,"p-treetable-scrollable-footer-box"],[1,"p-treetable-scrollable-footer-table",3,"ngClass","ngStyle"],["role","rowgroup",1,"p-treetable-tfoot"]],template:function(o,i){o&1&&(l(0,"div",11,0)(2,"div",12,1)(4,"table",13),p(5,sr,1,0,"ng-container",14),l(6,"thead",15),p(7,cr,1,0,"ng-container",14),n()()()(),p(8,gr,5,10,"p-scroller",16)(9,br,4,10,"ng-container",17)(10,yr,5,15,"ng-template",null,2,h)(12,vr,8,10,"div",18)),o&2&&(c(4),s("ngClass",i.tt.tableStyleClass)("ngStyle",i.tt.tableStyle),c(),s("ngTemplateOutlet",i.frozen?i.tt.frozenColGroupTemplate||i.tt._frozenColGroupTemplate||i.tt.colGroupTemplate||i.tt._colGroupTemplate:i.tt.colGroupTemplate||i.tt._colGroupTemplate)("ngTemplateOutletContext",te(9,fe,i.columns)),c(2),s("ngTemplateOutlet",i.frozen?i.tt.frozenHeaderTemplate||i.tt._frozenHeaderTemplate||i.tt.headerTemplate||i.tt._headerTemplate:i.tt.headerTemplate||i.tt._headerTemplate)("ngTemplateOutletContext",te(11,fe,i.columns)),c(),s("ngIf",i.tt.virtualScroll),c(),s("ngIf",!i.tt.virtualScroll),c(3),s("ngIf",i.tt.footerTemplate||i.tt._footerTemplate))},dependencies:[Oe,z,Ce,ut,rt,So],encapsulation:2})}return t})(),Ye=(()=>{class t{tt;field;ttSortableColumnDisabled;sorted;subscription;get ariaSorted(){return this.sorted&&this.tt.sortOrder<0?"descending":this.sorted&&this.tt.sortOrder>0?"ascending":"none"}constructor(e){this.tt=e,this.isEnabled()&&(this.subscription=this.tt.tableService.sortSource$.subscribe(o=>{this.updateSortState()}))}ngOnInit(){this.isEnabled()&&this.updateSortState()}updateSortState(){this.sorted=this.tt.isSorted(this.field)}onClick(e){this.isEnabled()&&(this.updateSortState(),this.tt.sort({originalEvent:e,field:this.field}),_t())}onEnterKey(e){this.onClick(e)}isEnabled(){return this.ttSortableColumnDisabled!==!0}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w))};static \u0275dir=Te({type:t,selectors:[["","ttSortableColumn",""]],hostVars:7,hostBindings:function(o,i){o&1&&S("click",function(m){return i.onClick(m)})("keydown.enter",function(m){return i.onEnterKey(m)}),o&2&&(ue("tabindex",i.isEnabled()?"0":null)("role","columnheader")("aria-sort",i.ariaSorted),Qe("p-sortable-column",i.isEnabled())("p-treetable-column-sorted",i.sorted))},inputs:{field:[0,"ttSortableColumn","field"],ttSortableColumnDisabled:[2,"ttSortableColumnDisabled","ttSortableColumnDisabled",$]},standalone:!1})}return t})(),at=(()=>{class t{tt;cd;field;ariaLabelDesc;ariaLabelAsc;subscription;sortOrder;constructor(e,o){this.tt=e,this.cd=o,this.subscription=this.tt.tableService.sortSource$.subscribe(i=>{this.updateSortState(),this.cd.markForCheck()})}ngOnInit(){this.updateSortState()}onClick(e){e.preventDefault()}updateSortState(){if(this.tt.sortMode==="single")this.sortOrder=this.tt.isSorted(this.field)?this.tt.sortOrder:0;else if(this.tt.sortMode==="multiple"){let e=this.tt.getSortMeta(this.field);this.sortOrder=e?e.order:0}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w),b(le))};static \u0275cmp=y({type:t,selectors:[["p-treeTableSortIcon"],["p-treetable-sort-icon"],["p-tree-table-sort-icon"]],inputs:{field:"field",ariaLabelDesc:"ariaLabelDesc",ariaLabelAsc:"ariaLabelAsc"},standalone:!1,decls:2,vars:2,consts:[[4,"ngIf"],["class","p-sortable-column-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-sortable-column-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&p(0,Nr,4,3,"ng-container",0)(1,zr,2,4,"span",1),o&2&&(s("ngIf",!i.tt.sortIconTemplate&&!i.tt._sortIconTemplate),c(),s("ngIf",i.tt.sortIconTemplate||i.tt._sortIconTemplate))},dependencies:[z,Ce,Gt,Qt,qt],encapsulation:2,changeDetection:0})}return t})(),Re=(()=>{class t{document;platformId;renderer;tt;el;zone;ttResizableColumnDisabled;resizer;resizerMouseDownListener;documentMouseMoveListener;documentMouseUpListener;constructor(e,o,i,d,m,g){this.document=e,this.platformId=o,this.renderer=i,this.tt=d,this.el=m,this.zone=g}ngAfterViewInit(){xe(this.platformId)&&this.isEnabled()&&(et(this.el.nativeElement,"p-resizable-column"),this.resizer=this.renderer.createElement("span"),this.renderer.addClass(this.resizer,"p-column-resizer"),this.renderer.appendChild(this.el.nativeElement,this.resizer),this.zone.runOutsideAngular(()=>{this.resizerMouseDownListener=this.renderer.listen(this.resizer,"mousedown",this.onMouseDown.bind(this))}))}bindDocumentEvents(){this.zone.runOutsideAngular(()=>{this.documentMouseMoveListener=this.renderer.listen(this.document,"mousemove",this.onDocumentMouseMove.bind(this)),this.documentMouseUpListener=this.renderer.listen(this.document,"mouseup",this.onDocumentMouseUp.bind(this))})}unbindDocumentEvents(){this.documentMouseMoveListener&&(this.documentMouseMoveListener(),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(this.documentMouseUpListener(),this.documentMouseUpListener=null)}onMouseDown(e){this.tt.onColumnResizeBegin(e),this.bindDocumentEvents()}onDocumentMouseMove(e){this.tt.onColumnResize(e)}onDocumentMouseUp(e){this.tt.onColumnResizeEnd(e,this.el.nativeElement),this.unbindDocumentEvents()}isEnabled(){return this.ttResizableColumnDisabled!==!0}ngOnDestroy(){this.resizerMouseDownListener&&(this.resizerMouseDownListener(),this.resizerMouseDownListener=null),this.unbindDocumentEvents()}static \u0275fac=function(o){return new(o||t)(b(dt),b(We),b(Ge),b(w),b(Ee),b(we))};static \u0275dir=Te({type:t,selectors:[["","ttResizableColumn",""]],inputs:{ttResizableColumnDisabled:[2,"ttResizableColumnDisabled","ttResizableColumnDisabled",$]},standalone:!1})}return t})(),yo=(()=>{class t{document;platformId;renderer;tt;el;zone;ttReorderableColumnDisabled;dragStartListener;dragOverListener;dragEnterListener;dragLeaveListener;mouseDownListener;constructor(e,o,i,d,m,g){this.document=e,this.platformId=o,this.renderer=i,this.tt=d,this.el=m,this.zone=g}ngAfterViewInit(){this.isEnabled()&&this.bindEvents()}bindEvents(){xe(this.platformId)&&this.zone.runOutsideAngular(()=>{this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this)),this.dragStartListener=this.renderer.listen(this.el.nativeElement,"dragstart",this.onDragStart.bind(this)),this.dragOverListener=this.renderer.listen(this.el.nativeElement,"dragover",this.onDragEnter.bind(this)),this.dragEnterListener=this.renderer.listen(this.el.nativeElement,"dragenter",this.onDragEnter.bind(this)),this.dragLeaveListener=this.renderer.listen(this.el.nativeElement,"dragleave",this.onDragLeave.bind(this))})}unbindEvents(){xe(this.platformId)&&(this.mouseDownListener&&(this.mouseDownListener(),this.mouseDownListener=null),this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.dragEnterListener&&(this.dragEnterListener(),this.dragEnterListener=null),this.dragLeaveListener&&(this.dragLeaveListener(),this.dragLeaveListener=null))}onMouseDown(e){e.target.nodeName==="INPUT"||e.target.nodeName==="TEXTAREA"||Ze(e.target,"p-column-resizer")?this.el.nativeElement.draggable=!1:this.el.nativeElement.draggable=!0}onDragStart(e){this.tt.onColumnDragStart(e,this.el.nativeElement)}onDragOver(e){e.preventDefault()}onDragEnter(e){this.tt.onColumnDragEnter(e,this.el.nativeElement)}onDragLeave(e){this.tt.onColumnDragLeave(e)}onDrop(e){this.isEnabled()&&this.tt.onColumnDrop(e,this.el.nativeElement)}isEnabled(){return this.ttReorderableColumnDisabled!==!0}ngOnDestroy(){this.unbindEvents()}static \u0275fac=function(o){return new(o||t)(b(dt),b(We),b(Ge),b(w),b(Ee),b(we))};static \u0275dir=Te({type:t,selectors:[["","ttReorderableColumn",""]],hostBindings:function(o,i){o&1&&S("drop",function(m){return i.onDrop(m)})},inputs:{ttReorderableColumnDisabled:[2,"ttReorderableColumnDisabled","ttReorderableColumnDisabled",$]},standalone:!1})}return t})(),ge=(()=>{class t{tt;tableService;rowNode;ttSelectableRowDisabled;selected;subscription;constructor(e,o){this.tt=e,this.tableService=o,this.isEnabled()&&(this.subscription=this.tt.tableService.selectionSource$.subscribe(()=>{this.selected=this.tt.isSelected(this.rowNode.node)}))}ngOnInit(){this.isEnabled()&&(this.selected=this.tt.isSelected(this.rowNode.node))}onClick(e){this.isEnabled()&&this.tt.handleRowClick({originalEvent:e,rowNode:this.rowNode})}onKeyDown(e){switch(e.code){case"Enter":case"Space":this.onEnterKey(e);break;default:break}}onTouchEnd(e){this.isEnabled()&&this.tt.handleRowTouchEnd(e)}onEnterKey(e){this.tt.selectionMode==="checkbox"?this.tt.toggleNodeWithCheckbox({originalEvent:e,rowNode:this.rowNode}):this.onClick(e),e.preventDefault()}isEnabled(){return this.ttSelectableRowDisabled!==!0}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w),b(Me))};static \u0275dir=Te({type:t,selectors:[["","ttSelectableRow",""]],hostVars:3,hostBindings:function(o,i){o&1&&S("click",function(m){return i.onClick(m)})("keydown",function(m){return i.onKeyDown(m)})("touchend",function(m){return i.onTouchEnd(m)}),o&2&&(ue("aria-checked",i.selected),Qe("p-treetable-row-selected",i.selected))},inputs:{rowNode:[0,"ttSelectableRow","rowNode"],ttSelectableRowDisabled:[2,"ttSelectableRowDisabled","ttSelectableRowDisabled",$]},standalone:!1})}return t})();var wo=(()=>{class t{tt;tableService;el;rowNode;ttContextMenuRowDisabled;selected;subscription;constructor(e,o,i){this.tt=e,this.tableService=o,this.el=i,this.isEnabled()&&(this.subscription=this.tt.tableService.contextMenuSource$.subscribe(d=>{this.selected=this.tt.equals(this.rowNode.node,d)}))}onContextMenu(e){this.isEnabled()&&(this.tt.handleRowRightClick({originalEvent:e,rowNode:this.rowNode}),this.el.nativeElement.focus(),e.preventDefault())}isEnabled(){return this.ttContextMenuRowDisabled!==!0}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w),b(Me),b(Ee))};static \u0275dir=Te({type:t,selectors:[["","ttContextMenuRow",""]],hostVars:3,hostBindings:function(o,i){o&1&&S("contextmenu",function(m){return i.onContextMenu(m)}),o&2&&(ue("tabindex",i.isEnabled()?0:void 0),Qe("p-treetable-contextmenu-row-selected",i.selected))},inputs:{rowNode:[0,"ttContextMenuRow","rowNode"],ttContextMenuRowDisabled:[2,"ttContextMenuRowDisabled","ttContextMenuRowDisabled",$]},standalone:!1})}return t})(),To=(()=>{class t{tt;tableService;cd;disabled;rowNode;checked;partialChecked;focused;subscription;constructor(e,o,i){this.tt=e,this.tableService=o,this.cd=i,this.subscription=this.tt.tableService.selectionSource$.subscribe(()=>{this.tt.selectionKeys?(this.checked=this.tt.isNodeSelected(this.rowNode.node),this.partialChecked=this.tt.isNodePartialSelected(this.rowNode.node)):(this.checked=this.tt.isSelected(this.rowNode.node),this.partialChecked=this.rowNode.node.partialSelected),this.cd.markForCheck()})}ngOnInit(){this.tt.selectionKeys?(this.checked=this.tt.isNodeSelected(this.rowNode.node),this.partialChecked=this.tt.isNodePartialSelected(this.rowNode.node)):(this.checked=this.tt.isSelected(this.rowNode.node),this.partialChecked=this.rowNode.node.partialSelected)}onClick(e){if(!this.disabled)if(this.tt.selectionKeys){let o=!this.checked;this.tt.toggleCheckbox({originalEvent:e,check:o,rowNode:this.rowNode})}else this.tt.toggleNodeWithCheckbox({originalEvent:e,rowNode:this.rowNode});_t()}onFocus(){this.focused=!0}onBlur(){this.focused=!1}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||t)(b(w),b(Me),b(le))};static \u0275cmp=y({type:t,selectors:[["p-treeTableCheckbox"],["p-treetable-checkbox"],["p-tree-table-checkbox"]],inputs:{disabled:[2,"disabled","disabled",$],rowNode:[0,"value","rowNode"]},standalone:!1,decls:2,vars:6,consts:[["styleClass","p-treetable-node-checkbox",3,"onChange","ngModel","binary","disabled","indeterminate","tabIndex"],[4,"ngIf"],["pTemplate","icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(l(0,"p-checkbox",0),S("onChange",function(m){return i.onClick(m)}),p(1,Pr,2,0,"ng-container",1),n()),o&2&&(s("ngModel",i.checked)("binary",!0)("disabled",i.disabled)("indeterminate",i.partialChecked)("tabIndex",-1),c(),s("ngIf",i.tt.checkboxIconTemplate||i.tt._checkboxIconTemplate))},dependencies:[z,Ce,De,nt,ne,ae],encapsulation:2,changeDetection:0})}return t})();var D=(()=>{class t{tt;el;zone;get level(){return this.rowNode?.level+1}get styleClass(){return this.rowNode?.node.styleClass||""}get expanded(){return this.rowNode?.node.expanded}rowNode;constructor(e,o,i){this.tt=e,this.el=o,this.zone=i}onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Tab":this.onTabKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;default:break}}onArrowDownKey(e){let o=this.el?.nativeElement?.nextElementSibling;o&&this.focusRowChange(e.currentTarget,o),e.preventDefault()}onArrowUpKey(e){let o=this.el?.nativeElement?.previousElementSibling;o&&this.focusRowChange(e.currentTarget,o),e.preventDefault()}onArrowRightKey(e){let o=e.currentTarget;!(ee(o,"button").style.visibility==="hidden")&&!this.expanded&&this.rowNode.node.children&&(this.expand(e),o.tabIndex=-1),e.preventDefault()}onArrowLeftKey(e){let o=this.tt.containerViewChild?.nativeElement,i=ze(o,'[aria-expanded="true"]'),d=i[i.length-1];this.expanded&&this.collapse(e),d&&(this.tt.toggleRowIndex=Le(d)),this.restoreFocus(),e.preventDefault()}onHomeKey(e){let o=ee(this.tt.containerViewChild?.nativeElement,`tr[aria-level="${this.level}"]`);o&&tt(o),e.preventDefault()}onEndKey(e){let o=ze(this.tt.containerViewChild?.nativeElement,`tr[aria-level="${this.level}"]`),i=o[o.length-1];tt(i),e.preventDefault()}onTabKey(e){let o=this.el.nativeElement?[...ze(this.el.nativeElement.parentNode,"tr")]:void 0;if(o&&Lt(o)){let i=o.some(d=>St(d,"data-p-highlight")||d.getAttribute("aria-checked")==="true");if(o.forEach(d=>{d.tabIndex=-1}),i){let d=o.filter(m=>St(m,"data-p-highlight")||m.getAttribute("aria-checked")==="true");d[0].tabIndex=0;return}o[0].tabIndex=0}}expand(e){this.tt.toggleRowIndex=Le(this.el.nativeElement),this.rowNode.node.expanded=!0,this.tt.updateSerializedValue(),this.tt.tableService.onUIUpdate(this.tt.value),this.rowNode.node.children?this.restoreFocus(this.tt.toggleRowIndex+1):this.restoreFocus(),this.tt.onNodeExpand.emit({originalEvent:e,node:this.rowNode.node})}collapse(e){this.rowNode.node.expanded=!1,this.tt.updateSerializedValue(),this.tt.tableService.onUIUpdate(this.tt.value),this.tt.onNodeCollapse.emit({originalEvent:e,node:this.rowNode.node})}focusRowChange(e,o,i){e.tabIndex="-1",o.tabIndex="0",tt(o)}restoreFocus(e){this.zone.runOutsideAngular(()=>{setTimeout(()=>{let o=this.tt.containerViewChild?.nativeElement,i=ee(o,".p-treetable-tbody").children[e||this.tt.toggleRowIndex],d=[...ze(o,"tr")];d&&d.forEach(m=>{i.isSameNode(m)||(m.tabIndex=-1)}),i&&(i.tabIndex=0,i.focus())},25)})}static \u0275fac=function(o){return new(o||t)(b(w),b(Ee),b(we))};static \u0275dir=Te({type:t,selectors:[["","ttRow",""]],hostVars:7,hostBindings:function(o,i){o&1&&S("keydown",function(m){return i.onKeyDown(m)}),o&2&&(ue("tabindex","0")("aria-expanded",i.expanded)("aria-level",i.level)("data-pc-section","row")("role","row"),Pe("p-element "+i.styleClass))},inputs:{rowNode:[0,"ttRow","rowNode"]},standalone:!1})}return t})(),N=(()=>{class t extends Tt{tt;rowNode;constructor(e){super(),this.tt=e}get toggleButtonAriaLabel(){return this.config.translation?this.rowNode.expanded?this.config.translation.aria.collapseRow:this.config.translation.aria.expandRow:void 0}onClick(e){this.rowNode.node.expanded=!this.rowNode.node.expanded,this.rowNode.node.expanded?this.tt.onNodeExpand.emit({originalEvent:e,node:this.rowNode.node}):this.tt.onNodeCollapse.emit({originalEvent:e,node:this.rowNode.node}),this.tt.updateSerializedValue(),this.tt.tableService.onUIUpdate(this.tt.value),e.preventDefault()}static \u0275fac=function(o){return new(o||t)(b(w))};static \u0275cmp=y({type:t,selectors:[["p-treeTableToggler"],["p-treetabletoggler"],["p-treetable-toggler"]],inputs:{rowNode:"rowNode"},standalone:!1,features:[pt],decls:3,vars:12,consts:[["type","button","tabindex","-1","pRipple","",1,"p-treetable-toggler",3,"click"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(l(0,"button",0),S("click",function(m){return i.onClick(m)}),p(1,$r,3,2,"ng-container",1)(2,Yr,1,0,null,2),n()),o&2&&(Mt("visibility",i.rowNode.node.leaf===!1||i.rowNode.node.children&&i.rowNode.node.children.length?"visible":"hidden")("margin-inline-start",i.rowNode.level*16+"px"),ue("data-pc-section","rowtoggler")("data-pc-group-section","rowactionbutton")("aria-label",i.toggleButtonAriaLabel),c(),s("ngIf",!i.tt.togglerIconTemplate&&!i.tt._togglerIconTemplate),c(),s("ngTemplateOutlet",i.tt.togglerIconTemplate||i.tt._togglerIconTemplate)("ngTemplateOutletContext",te(10,fe,i.rowNode.node.expanded)))},dependencies:[z,Ce,Xt,jt,Wt],encapsulation:2})}return t})(),vo=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=qe({type:t});static \u0275inj=Ue({imports:[Je,so,rt,nt,yt,Xe,yt]})}return t})();var Br=()=>({"min-width":"50rem"});function Ar(t,r){t&1&&(l(0,"tr")(1,"th"),a(2,"Name"),n(),l(3,"th"),a(4,"Size"),n(),l(5,"th"),a(6,"Type"),n()())}function Hr(t,r){if(t&1&&(l(0,"tr",6)(1,"td"),u(2,"p-treetable-toggler",7),a(3),n(),l(4,"td"),a(5),n(),l(6,"td"),a(7),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," "),c(2),Q(o.size),c(2),Q(o.type)}}var Co=(()=>{class t{nodeService;cd;files;constructor(e,o){this.nodeService=e,this.cd=o}loadDemoData(){this.nodeService.getFilesystem().then(e=>{this.files=e.slice(0,5),this.cd.markForCheck()})}code={basic:`<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td>
                    <p-treetable-toggler [rowNode]="rowNode" />
                    {{ rowData.name }}
                </td>
                <td>{{ rowData.size }}</td>
                <td>{{ rowData.type }}</td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';

@Component({
    selector: 'tree-table-basic-demo',
    templateUrl: './tree-table-basic-demo.html',
    standalone: true,
    imports: [TreeTableModule],
    providers: [NodeService]
})
export class TreeTableBasicDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(le))};static \u0275cmp=y({type:t,selectors:[["basic-doc"]],standalone:!1,decls:17,vars:5,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","scrollable","tableStyle"],["selector","tree-table-basic-demo",3,"code"],[3,"ttRow"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"TreeTable requires a collection of "),l(3,"i"),a(4,"TreeNode"),n(),a(5," instances as a "),l(6,"i"),a(7,"value"),n(),a(8," components as children for the representation."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,Ar,7,0,"ng-template",null,0,h)(14,Hr,8,5,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("scrollable",!0)("tableStyle",T(4,Br)),c(5),s("code",i.code))},dependencies:[v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Ur=()=>({"min-width":"50rem"});function jr(t,r){t&1&&(l(0,"tr")(1,"th",7),a(2,"Brand"),n(),l(3,"th",8),a(4,"Sale Rate"),n()(),l(5,"tr")(6,"th",9),a(7,"Sales"),n(),l(8,"th",9),a(9,"Profits"),n()(),l(10,"tr")(11,"th"),a(12,"Last Year"),n(),l(13,"th"),a(14,"This Year"),n(),l(15,"th"),a(16,"Last Year"),n(),l(17,"th"),a(18,"This Year"),n()())}function Wr(t,r){if(t&1&&(l(0,"tr",10)(1,"td"),u(2,"p-treetable-toggler",11),a(3),n(),l(4,"td"),a(5),n(),l(6,"td"),a(7),n(),l(8,"td"),a(9),n(),l(10,"td"),a(11),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.brand," "),c(2),Q(o.lastYearSale),c(2),Q(o.thisYearSale),c(2),Q(o.lastYearProfit),c(2),Q(o.thisYearProfit)}}function Gr(t,r){t&1&&(l(0,"tr")(1,"td",12),a(2,"Totals"),n(),l(3,"td"),a(4,"$3,283,772"),n(),l(5,"td"),a(6,"$2,126,925"),n()())}var xo=(()=>{class t{sales;loadDemoData(){this.sales=[{data:{brand:"Bliss",lastYearSale:"51%",thisYearSale:"40%",lastYearProfit:"$54,406.00",thisYearProfit:"$43,342"},children:[{data:{brand:"Product A",lastYearSale:"25%",thisYearSale:"20%",lastYearProfit:"$34,406.00",thisYearProfit:"$23,342"},children:[{data:{brand:"Product A-1",lastYearSale:"20%",thisYearSale:"10%",lastYearProfit:"$24,406.00",thisYearProfit:"$13,342"}},{data:{brand:"Product A-2",lastYearSale:"5%",thisYearSale:"10%",lastYearProfit:"$10,000.00",thisYearProfit:"$10,000"}}]},{data:{brand:"Product B",lastYearSale:"26%",thisYearSale:"20%",lastYearProfit:"$24,000.00",thisYearProfit:"$23,000"}}]},{data:{brand:"Fate",lastYearSale:"83%",thisYearSale:"96%",lastYearProfit:"$423,132",thisYearProfit:"$312,122"},children:[{data:{brand:"Product X",lastYearSale:"50%",thisYearSale:"40%",lastYearProfit:"$223,132",thisYearProfit:"$156,061"}},{data:{brand:"Product Y",lastYearSale:"33%",thisYearSale:"56%",lastYearProfit:"$200,000",thisYearProfit:"$156,061"}}]},{data:{brand:"Ruby",lastYearSale:"38%",thisYearSale:"5%",lastYearProfit:"$12,321",thisYearProfit:"$8,500"},children:[{data:{brand:"Product M",lastYearSale:"18%",thisYearSale:"2%",lastYearProfit:"$10,300",thisYearProfit:"$5,500"}},{data:{brand:"Product N",lastYearSale:"20%",thisYearSale:"3%",lastYearProfit:"$2,021",thisYearProfit:"$3,000"}}]},{data:{brand:"Sky",lastYearSale:"49%",thisYearSale:"22%",lastYearProfit:"$745,232",thisYearProfit:"$650,323"},children:[{data:{brand:"Product P",lastYearSale:"20%",thisYearSale:"16%",lastYearProfit:"$345,232",thisYearProfit:"$350,000"}},{data:{brand:"Product R",lastYearSale:"29%",thisYearSale:"6%",lastYearProfit:"$400,009",thisYearProfit:"$300,323"}}]},{data:{brand:"Comfort",lastYearSale:"17%",thisYearSale:"79%",lastYearProfit:"$643,242",thisYearProfit:"500,332"},children:[{data:{brand:"Product S",lastYearSale:"10%",thisYearSale:"40%",lastYearProfit:"$243,242",thisYearProfit:"$100,000"}},{data:{brand:"Product T",lastYearSale:"7%",thisYearSale:"39%",lastYearProfit:"$400,00",thisYearProfit:"$400,332"}}]},{data:{brand:"Merit",lastYearSale:"52%",thisYearSale:" 65%",lastYearProfit:"$421,132",thisYearProfit:"$150,005"},children:[{data:{brand:"Product L",lastYearSale:"20%",thisYearSale:"40%",lastYearProfit:"$121,132",thisYearProfit:"$100,000"}},{data:{brand:"Product G",lastYearSale:"32%",thisYearSale:"25%",lastYearProfit:"$300,000",thisYearProfit:"$50,005"}}]},{data:{brand:"Violet",lastYearSale:"82%",thisYearSale:"12%",lastYearProfit:"$131,211",thisYearProfit:"$100,214"},children:[{data:{brand:"Product SH1",lastYearSale:"30%",thisYearSale:"6%",lastYearProfit:"$101,211",thisYearProfit:"$30,214"}},{data:{brand:"Product SH2",lastYearSale:"52%",thisYearSale:"6%",lastYearProfit:"$30,000",thisYearProfit:"$70,000"}}]},{data:{brand:"Dulce",lastYearSale:"44%",thisYearSale:"45%",lastYearProfit:"$66,442",thisYearProfit:"$53,322"},children:[{data:{brand:"Product PN1",lastYearSale:"22%",thisYearSale:"25%",lastYearProfit:"$33,221",thisYearProfit:"$20,000"}},{data:{brand:"Product PN2",lastYearSale:"22%",thisYearSale:"25%",lastYearProfit:"$33,221",thisYearProfit:"$33,322"}}]},{data:{brand:"Solace",lastYearSale:"90%",thisYearSale:"56%",lastYearProfit:"$765,442",thisYearProfit:"$296,232"},children:[{data:{brand:"Product HT1",lastYearSale:"60%",thisYearSale:"36%",lastYearProfit:"$465,000",thisYearProfit:"$150,653"}},{data:{brand:"Product HT2",lastYearSale:"30%",thisYearSale:"20%",lastYearProfit:"$300,442",thisYearProfit:"$145,579"}}]},{data:{brand:"Essence",lastYearSale:"75%",thisYearSale:"54%",lastYearProfit:"$21,212",thisYearProfit:"$12,533"},children:[{data:{brand:"Product TS1",lastYearSale:"50%",thisYearSale:"34%",lastYearProfit:"$11,000",thisYearProfit:"$8,562"}},{data:{brand:"Product TS2",lastYearSale:"25%",thisYearSale:"20%",lastYearProfit:"$11,212",thisYearProfit:"$3,971"}}]}]}code={basic:`<p-treetable [value]="sales" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header>
        <tr>
            <th rowspan="3">Brand</th>
            <th colspan="4">Sale Rate</th>
        </tr>
        <tr>
            <th colspan="2">Sales</th>
            <th colspan="2">Profits</th>
        </tr>
        <tr>
            <th>Last Year</th>
            <th>This Year</th>
            <th>Last Year</th>
            <th>This Year</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr>
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.brand }}
            </td>
            <td>{{ rowData.lastYearSale }}</td>
            <td>{{ rowData.thisYearSale }}</td>
            <td>{{ rowData.lastYearProfit }}</td>
            <td>{{ rowData.thisYearProfit }}</td>
        </tr>
    </ng-template>
    <ng-template #footer>
        <tr>
            <td colspan="3">Totals</td>
            <td>$3,283,772</td>
            <td>$2,126,925</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="sales" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header>
            <tr>
                <th rowspan="3">Brand</th>
                <th colspan="4">Sale Rate</th>
            </tr>
            <tr>
                <th colspan="2">Sales</th>
                <th colspan="2">Profits</th>
            </tr>
            <tr>
                <th>Last Year</th>
                <th>This Year</th>
                <th>Last Year</th>
                <th>This Year</th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td>
                    <p-treetable-toggler [rowNode]="rowNode" />
                    {{ rowData.brand }}
                </td>
                <td>{{ rowData.lastYearSale }}</td>
                <td>{{ rowData.thisYearSale }}</td>
                <td>{{ rowData.lastYearProfit }}</td>
                <td>{{ rowData.thisYearProfit }}</td>
            </tr>
        </ng-template>
        <ng-template #footer>
            <tr>
                <td colspan="3">Totals</td>
                <td>$3,283,772</td>
                <td>$2,126,925</td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

@Component({
    selector: 'tree-table-column-group-demo',
    templateUrl: './tree-table-column-group-demo.html',
    standalone: true,
    imports: [TreeTableModule]
})
export class TreeTableColumnGroupDemo implements OnInit {
    sales!: TreeNode[];

    ngOnInit() {
        this.sales = [
            {
                data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
                children: [
                    {
                        data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                        children: [
                            {
                                data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' }
                            },
                            {
                                data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' }
                            }
                        ]
                    },
                    {
                        data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' }
                    }
                ]
            },
            {
                data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
                children: [
                    {
                        data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' }
                    },
                    {
                        data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' }
                    }
                ]
            },
            {
                data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
                children: [
                    {
                        data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' }
                    },
                    {
                        data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' }
                    }
                ]
            },
            {
                data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
                children: [
                    {
                        data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' }
                    },
                    {
                        data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' }
                    }
                ]
            },
            {
                data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
                children: [
                    {
                        data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' }
                    },
                    {
                        data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' }
                    }
                ]
            },
            {
                data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
                children: [
                    {
                        data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' }
                    },
                    {
                        data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' }
                    }
                ]
            },
            {
                data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
                children: [
                    {
                        data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' }
                    },
                    {
                        data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' }
                    }
                ]
            },
            {
                data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
                children: [
                    {
                        data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' }
                    },
                    {
                        data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' }
                    }
                ]
            },
            {
                data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
                children: [
                    {
                        data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' }
                    },
                    {
                        data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' }
                    }
                ]
            },
            {
                data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
                children: [
                    {
                        data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' }
                    },
                    {
                        data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' }
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["column-group-doc"]],standalone:!1,decls:10,vars:5,consts:[["header",""],["body",""],["footer",""],[1,"card"],[3,"load"],[3,"value","scrollable","tableStyle"],["selector","tree-table-column-group-demo",3,"code"],["rowspan","3"],["colspan","4"],["colspan","2"],[3,"ttRow"],[3,"rowNode"],["colspan","3"]],template:function(o,i){o&1&&(l(0,"div",3)(1,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(2,"p-treetable",5),p(3,jr,19,0,"ng-template",null,0,h)(5,Wr,12,7,"ng-template",null,1,h)(7,Gr,7,0,"ng-template",null,2,h),n()()(),u(9,"app-code",6)),o&2&&(c(2),s("value",i.sales)("scrollable",!0)("tableStyle",T(4,Ur)),c(7),s("code",i.code))},dependencies:[v,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();function qr(t,r){if(t&1&&(l(0,"th",7),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Qr(t,r){if(t&1&&(l(0,"tr"),p(1,qr,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Jr(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Xr(t,r){if(t&1&&(l(0,"td"),p(1,Jr,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Zr(t,r){if(t&1&&(l(0,"tr",8),p(1,Xr,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Do=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" columnResizeMode="expand">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" columnResizeMode="expand">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" ttResizableColumn>
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-resize-expand-demo',
    templateUrl: './tree-table-resize-expand-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableResizeExpandDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["resize-expand-doc"]],standalone:!1,decls:17,vars:4,consts:[["header",""],["body",""],[1,"card"],[3,"load"],["columnResizeMode","expand",3,"value","columns","resizableColumns"],["selector","tree-table-resize-expand-demo",3,"code"],["ttResizableColumn","",4,"ngFor","ngForOf"],["ttResizableColumn",""],[3,"ttRow"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Setting "),l(3,"i"),a(4,"columnResizeMode"),n(),a(5," as "),l(6,"i"),a(7,"expand"),n(),a(8," changes the table width as well."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,Qr,2,1,"ng-template",null,0,h)(14,Zr,2,2,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("resizableColumns",!0),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,Re,D,x],encapsulation:2,changeDetection:0})}return t})();var en=()=>({"min-width":"50rem"});function tn(t,r){if(t&1&&(l(0,"th",7),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function on(t,r){if(t&1&&(l(0,"tr"),p(1,tn,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function ln(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function rn(t,r){if(t&1&&(l(0,"td"),p(1,ln,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function nn(t,r){if(t&1&&(l(0,"tr",8),p(1,rn,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var No=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [tableStyle]="{'min-width': '50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" ttResizableColumn>
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-resize-fit-demo',
    templateUrl: './tree-table-resize-fit-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableResizeFitDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["resize-fit-doc"]],standalone:!1,decls:17,vars:6,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","resizableColumns","tableStyle"],["selector","tree-table-resize-fit-demo",3,"code"],["ttResizableColumn","",4,"ngFor","ngForOf"],["ttResizableColumn",""],[3,"ttRow"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Columns can be resized with drag and drop when "),l(3,"i"),a(4,"resizableColumns"),n(),a(5," is enabled. Default resize mode is "),l(6,"i"),a(7,"fit"),n(),a(8," that does not change the overall table width."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,on,2,1,"ng-template",null,0,h)(14,nn,2,2,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("resizableColumns",!0)("tableStyle",T(5,en)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,Re,D,x],encapsulation:2,changeDetection:0})}return t})();var an=()=>({"min-width":"50rem"});function sn(t,r){t&1&&u(0,"col")}function cn(t,r){if(t&1&&(l(0,"colgroup"),p(1,sn,1,0,"col",7),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function dn(t,r){if(t&1&&(l(0,"th",9),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function pn(t,r){if(t&1&&(l(0,"tr"),p(1,dn,2,1,"th",8),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function mn(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function un(t,r){if(t&1&&(l(0,"td"),p(1,mn,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function fn(t,r){if(t&1&&(l(0,"tr",10),p(1,un,3,2,"td",7),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Eo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [scrollable]="true" scrollHeight="200px">
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns">
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttResizableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [resizableColumns]="true" [scrollable]="true" scrollHeight="200px">
        <ng-template #colgroup let-columns>
            <colgroup>
                <col *ngFor="let col of columns">
            </colgroup>
        </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" ttResizableColumn>
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-resize-scrollable-demo',
    templateUrl: './tree-table-resize-scrollable-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableResizeScrollableDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["resize-scrollable-doc"]],standalone:!1,decls:19,vars:7,consts:[["colgroup",""],["header",""],["body",""],[1,"card"],[3,"load"],["scrollHeight","200px",3,"value","columns","resizableColumns","scrollable","tableStyle"],["selector","tree-table-resize-scrollable-demo",3,"code"],[4,"ngFor","ngForOf"],["ttResizableColumn","",4,"ngFor","ngForOf"],["ttResizableColumn",""],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"To utilize the column resize modes with a "),l(3,"i"),a(4,"scrollable"),n(),a(5," TreeTable, a "),l(6,"i"),a(7,"colgroup"),n(),a(8,' template must be defined. The default value of scrollHeight is "flex," it can also be set as a string value.'),n()(),l(9,"div",3)(10,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",5),p(12,cn,2,1,"ng-template",null,0,h)(14,pn,2,1,"ng-template",null,1,h)(16,fn,2,2,"ng-template",null,2,h),n()()(),u(18,"app-code",6)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("resizableColumns",!0)("scrollable",!0)("tableStyle",T(6,an)),c(7),s("code",i.code))},dependencies:[F,z,v,C,w,N,Re,D,x],encapsulation:2,changeDetection:0})}return t})();var gn=()=>({"min-width":"50rem"}),hn=()=>({width:"20em"});function bn(t,r){if(t&1){let e=H();l(0,"div",7)(1,"p-multiselect",8),Z("ngModelChange",function(i){Y(e);let d=f();return X(d.selectedColumns,i)||(d.selectedColumns=i),K(i)}),n()()}if(t&2){let e=f();c(),me(T(4,hn)),s("options",e.cols),J("ngModel",e.selectedColumns)}}function _n(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Sn(t,r){if(t&1&&(l(0,"tr"),p(1,_n,2,1,"th",9),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function yn(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function wn(t,r){if(t&1&&(l(0,"td"),p(1,yn,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Tn(t,r){if(t&1&&(l(0,"tr",10),p(1,wn,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Io=(()=>{class t{nodeService;files;cols;selectedColumns;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.selectedColumns=this.cols}code={basic:`<p-treetable [value]="files" [columns]="selectedColumns" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <div style="text-align:left">
            <p-multiselect [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header" selectedItemsLabel="{0} columns selected" [style]="{ width: '20em' }" placeholder="Choose Columns" display="chip" />
        </div>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="selectedColumns" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #caption>
            <div style="text-align:left">
                <p-multiselect [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header" selectedItemsLabel="{0} columns selected" [style]="{ width: '20em' }" placeholder="Choose Columns" display="chip" />
            </div>
        </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-column-toggle-demo',
    templateUrl: './tree-table-column-toggle-demo.html',
    standalone: true,
    imports: [TreeTableModule, MultiSelectModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableColumnToggleDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    selectedColumns!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedColumns = this.cols;
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["column-toggle-doc"]],standalone:!1,decls:13,vars:6,consts:[["caption",""],["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","scrollable","tableStyle"],["selector","tree-table-column-toggle-demo",3,"code"],[2,"text-align","left"],["optionLabel","header","selectedItemsLabel","{0} columns selected","placeholder","Choose Columns","display","chip",3,"ngModelChange","options","ngModel"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns."),n()(),l(3,"div",3)(4,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(5,"p-treetable",5),p(6,bn,2,5,"ng-template",null,0,h)(8,Sn,2,1,"ng-template",null,1,h)(10,Tn,2,2,"ng-template",null,2,h),n()()(),u(12,"app-code",6)),o&2&&(c(5),s("value",i.files)("columns",i.selectedColumns)("scrollable",!0)("tableStyle",T(5,gn)),c(7),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ne,ae,fo,x],encapsulation:2,changeDetection:0})}return t})();var vn=()=>({"min-width":"50rem"}),Cn=t=>({"p-highlight":t}),xn=t=>({"font-bold":t});function Dn(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Nn(t,r){if(t&1&&(l(0,"tr"),p(1,Dn,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function En(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function In(t,r){if(t&1&&(l(0,"td",9),p(1,En,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;s("ngClass",te(3,xn,e.field==="size"&&i.size.endsWith("kb"))),c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function zn(t,r){if(t&1&&(l(0,"tr",7),p(1,In,3,5,"td",8),n()),t&2){let e=r.$implicit,o=r.rowData,i=r.columns;s("ttRow",e)("ngClass",te(3,Cn,o.size.endsWith("kb"))),c(),s("ngForOf",i)}}var zo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
            <td *ngFor="let col of columns; let i = index" [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ngClass]="{ 'p-highlight': rowData.size.endsWith('kb') }">
                <td *ngFor="let col of columns; let i = index" [ngClass]="{ 'font-bold': col.field === 'size' && rowData.size.endsWith('kb') }">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-conditional-style-demo',
    templateUrl: './tree-table-conditional-style-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableConditionalStyleDemo implements OnInit{
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["conditional-style-doc"]],standalone:!1,decls:17,vars:6,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","scrollable","tableStyle"],["selector","tree-table-conditional-style-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Particular rows and cells can be styled based on conditions. The "),l(3,"i"),a(4,"ngClass"),n(),a(5," receives a row data as a parameter to return a style class for a row whereas cells are customized using the "),l(6,"i"),a(7,"body"),n(),a(8," template."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,Nn,2,1,"ng-template",null,0,h)(14,zn,2,5,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("scrollable",!0)("tableStyle",T(5,vn)),c(5),s("code",i.code))},dependencies:[Oe,F,z,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Rn=()=>({marginTop:"80px"}),kn=()=>({"min-width":"50rem"});function Pn(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function On(t,r){if(t&1&&(l(0,"tr"),p(1,Pn,2,1,"th",8),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Ln(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function $n(t,r){if(t&1&&(l(0,"td"),p(1,Ln,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Vn(t,r){if(t&1&&(l(0,"tr",9),p(1,$n,3,2,"td",8),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e)("ttContextMenuRow",e),c(),s("ngForOf",o)}}var Fo=(()=>{class t{nodeService;messageService;files;selectedNode;cols;items;constructor(e,o){this.nodeService=e,this.messageService=o}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.items=[{label:"View",icon:"pi pi-search",command:e=>this.viewFile(this.selectedNode)},{label:"Toggle",icon:"pi pi-sort",command:e=>this.toggleFile(this.selectedNode)}]}viewFile(e){this.messageService.add({severity:"info",summary:"File Selected",detail:e.data.name+" - "+e.data.size})}toggleFile(e){e.expanded=!e.expanded,this.files=[...this.files]}code={basic:`<p-toast [style]="{ marginTop: '80px' }" />

<p-treetable [value]="files" [columns]="cols" dataKey="name" [(contextMenuSelection)]="selectedNode" [contextMenu]="cm" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttContextMenuRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>

<p-contextmenu #cm [model]="items" />`,html:`<div class="card">
    <p-toast [style]="{ marginTop: '80px' }" />

    <p-treetable [value]="files" [columns]="cols" dataKey="name" [(contextMenuSelection)]="selectedNode" [contextMenu]="cm" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttContextMenuRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>

    <p-contextmenu #cm [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-context-menu-demo',
    templateUrl: './tree-table-context-menu-demo.html',
    standalone: true,
    imports: [TreeTableModule, ToastModule, ContextMenuModule, CommonModule],
    providers: [MessageService, NodeService]
})
export class TreeTableContextMenuDemo implements OnInit{
    files!: TreeNode[];

    selectedNode!: TreeNode;

    cols!: Column[];

    items!: MenuItem[];

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
            { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
        ];
    }

    viewFile(node: any) {
        this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
    }

    toggleFile(node: any) {
        node.expanded = !node.expanded;
        this.files = [...this.files];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(Se))};static \u0275cmp=y({type:t,selectors:[["context-menu-doc"]],standalone:!1,features:[Ie([Se])],decls:20,vars:12,consts:[["header",""],["body",""],["cm",""],[1,"card"],[3,"load"],["dataKey","name",3,"contextMenuSelectionChange","value","columns","contextMenuSelection","contextMenu","scrollable","tableStyle"],[3,"model"],["selector","tree-table-context-menu-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ttContextMenuRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2,"TreeTable has exclusive integration with ContextMenu using the "),l(3,"i"),a(4,"contextMenu"),n(),a(5," event to open a menu on right click alont with "),l(6,"i"),a(7,"contextMenuSelection"),n(),a(8," properties to control the selection via the menu."),n()(),l(9,"div",3),u(10,"p-toast"),l(11,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(12,"p-treetable",5),Z("contextMenuSelectionChange",function(g){return Y(d),X(i.selectedNode,g)||(i.selectedNode=g),K(g)}),p(13,On,2,1,"ng-template",null,0,h)(15,Vn,2,3,"ng-template",null,1,h),n()(),u(17,"p-contextmenu",6,2),n(),u(19,"app-code",7)}if(o&2){let d=be(18);c(10),me(T(10,Rn)),c(2),s("value",i.files)("columns",i.cols),J("contextMenuSelection",i.selectedNode),s("contextMenu",d)("scrollable",!0)("tableStyle",T(11,kn)),c(5),s("model",i.items),c(2),s("code",i.code)}},dependencies:[F,z,v,C,w,N,D,wo,it,mo,x],encapsulation:2,changeDetection:0})}return t})();var Yn=()=>({"min-width":"50rem"});function Kn(t,r){t&1&&(l(0,"tr")(1,"th",7),a(2,"Name"),n(),l(3,"th",7),a(4,"Size"),n(),l(5,"th",7),a(6,"Type"),n()())}function Bn(t,r){if(t&1&&(l(0,"tr",8)(1,"td",7),u(2,"p-treetable-toggler",9),a(3),n(),l(4,"td",7),a(5),n(),l(6,"td",7),a(7),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," "),c(2),Q(o.size),c(2),Q(o.type)}}var Mo=(()=>{class t{nodeService;cd;files;constructor(e,o){this.nodeService=e,this.cd=o}loadDemoData(){this.nodeService.getFilesystem().then(e=>{this.files=e.slice(0,5),this.cd.markForCheck()})}toggleApplications(){if(this.files&&this.files.length>0){let e=[...this.files];e[0]=Ae(he({},e[0]),{expanded:!e[0].expanded}),this.files=e}}code={basic:`<p-button (click)="toggleApplications()" label="Toggle Applications" />
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }" styleClass="mt-6">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
<p-button (click)="toggleApplications()" label="Toggle Applications" />
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }" styleClass="mt-6">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-table-controlled-demo',
    templateUrl: './tree-table-controlled-demo.html',
    standalone: true,
    imports: [TreeTableModule, ButtonModule],
    providers: [NodeService]
})
export class TreeTableControlledDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => {
            this.files = files.slice(0, 5);
            this.cd.markForCheck();
        });
    }

    toggleApplications() {
        if (this.files && this.files.length > 0) {
            const newFiles = [...this.files];
            newFiles[0] = { ...newFiles[0], expanded: !newFiles[0].expanded };
            this.files = newFiles;
        }
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(le))};static \u0275cmp=y({type:t,selectors:[["controlled-doc"]],standalone:!1,decls:15,vars:5,consts:[["header",""],["body",""],[1,"card"],["label","Toggle Applications",3,"click"],[3,"load"],["styleClass","mt-6",3,"value","scrollable","tableStyle"],["selector","tree-table-controlled-demo",3,"code"],[2,"width","34%"],[3,"ttRow"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Expansion state is controlled with "),l(3,"i"),a(4,"expandedKeys"),n(),a(5," property."),n()(),l(6,"div",2)(7,"p-button",3),S("click",function(){return i.toggleApplications()}),n(),l(8,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(9,"p-treetable",5),p(10,Kn,7,0,"ng-template",null,0,h)(12,Bn,8,5,"ng-template",null,1,h),n()()(),u(14,"app-code",6)),o&2&&(c(9),s("value",i.files)("scrollable",!0)("tableStyle",T(4,Yn)),c(5),s("code",i.code))},dependencies:[v,C,w,N,D,ye,x],encapsulation:2,changeDetection:0})}return t})();var An=()=>({"min-width":"50rem"});function Hn(t,r){if(t&1&&(l(0,"th",7),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Un(t,r){if(t&1&&(l(0,"tr"),p(1,Hn,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function jn(t,r){if(t&1&&u(0,"p-treetable-toggler",10),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Wn(t,r){if(t&1&&(l(0,"td",7),p(1,jn,1,1,"p-treetable-toggler",9),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Gn(t,r){if(t&1&&(l(0,"tr",8),p(1,Wn,3,2,"td",6),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Ro=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-dynamic-columns-demo',
    templateUrl: './tree-table-dynamic-columns-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableDynamicColumnsDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["dynamic-columns-doc"]],standalone:!1,decls:11,vars:6,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","scrollable","tableStyle"],["selector","tree-table-dynamic-columns-demo",3,"code"],["style","width: 34%",4,"ngFor","ngForOf"],[2,"width","34%"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Columns can be created programmatically."),n()(),l(3,"div",2)(4,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(5,"p-treetable",4),p(6,Un,2,1,"ng-template",null,0,h)(8,Gn,2,2,"ng-template",null,1,h),n()()(),u(10,"app-code",5)),o&2&&(c(5),s("value",i.files)("columns",i.cols)("scrollable",!0)("tableStyle",T(5,An)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Jn=()=>({"min-width":"50rem"});function Xn(t,r){if(t&1){let e=H();l(0,"div",11)(1,"p-iconfield"),u(2,"p-inputicon",12),l(3,"input",13),S("input",function(i){Y(e),f();let d=be(20);return K(d.filterGlobal(i.target.value,"contains"))}),n()()()}}function Zn(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function ea(t,r){if(t&1){let e=H();l(0,"th")(1,"input",15),S("input",function(i){let d=Y(e).$implicit;f(2);let m=be(20);return K(m.filter(i.target.value,d.field,d.filterMatchMode))}),n()()}if(t&2){let e=r.$implicit;c(),s("placeholder","Filter by "+e.field)}}function ta(t,r){if(t&1&&(l(0,"tr"),p(1,Zn,2,1,"th",14),n(),l(2,"tr"),p(3,ea,2,1,"th",14),n()),t&2){let e=f();c(),s("ngForOf",e.cols),c(2),s("ngForOf",e.cols)}}function oa(t,r){if(t&1&&u(0,"p-treetable-toggler",18),t&2){let e=f(2).$implicit;s("rowNode",e)}}function ia(t,r){if(t&1&&(l(0,"td"),p(1,oa,1,1,"p-treetable-toggler",17),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function la(t,r){if(t&1&&(l(0,"tr",16),p(1,ia,3,2,"td",14),n()),t&2){let e=r.$implicit,o=f();s("ttRow",e),c(),s("ngForOf",o.cols)}}function ra(t,r){if(t&1&&(l(0,"tr")(1,"td"),a(2,"No data found."),n()()),t&2){let e=f();c(),ue("colspan",e.cols==null?null:e.cols.length)}}var ko=(()=>{class t{nodeService;filterMode="lenient";filterModes=[{label:"Lenient",value:"lenient"},{label:"Strict",value:"strict"}];files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-selectbutton [options]="filterModes" [(ngModel)]="filterMode" optionLabel="label" optionValue="value" />

<p-treetable #tt [value]="files" [columns]="cols" [filterMode]="filterMode" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <div class="flex justify-end items-center">
            <p-iconfield>
                <p-inputicon class="pi pi-search" />
                <input type="text" pInputText placeholder="Global Search" (input)="tt.filterGlobal($event.target.value, 'contains')" />
            </p-iconfield>
        </div>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of cols">
                {{ col.header }}
            </th>
        </tr>
        <tr>
            <th *ngFor="let col of cols">
                <input pInputText [placeholder]="'Filter by ' + col.field" type="text" (input)="tt.filter($event.target.value, col.field, col.filterMatchMode)" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of cols; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #emptymessage>
        <tr>
            <td [attr.colspan]="cols?.length">No data found.</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <div class="flex justify-center mb-6">
        <p-selectbutton [options]="filterModes" [(ngModel)]="filterMode" optionLabel="label" optionValue="value" />
    </div>
     <p-treetable #tt [value]="files" [columns]="cols" [filterMode]="filterMode" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #caption>
            <div class="flex justify-end items-center">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input type="text" pInputText placeholder="Global Search" (input)="tt.filterGlobal($event.target.value, 'contains')" />
                </p-iconfield>
            </div>
        </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of cols">
                    {{ col.header }}
                </th>
            </tr>
            <tr>
                <th *ngFor="let col of cols">
                    <input pInputText [placeholder]="'Filter by ' + col.field" type="text" (input)="tt.filter($event.target.value, col.field, col.filterMatchMode)" />
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of cols; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
        <ng-template #emptymessage>
            <tr>
                <td [attr.colspan]="cols?.length">No data found.</td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-filter-demo',
    templateUrl: './tree-table-filter-demo.html',
    standalone: true,
    imports: [TreeTableModule, SelectButton, FormsModule, InputTextModule, CommonModule, IconFieldModule, InputIconModule],
    providers: [NodeService]
})
export class TreeTableFilterDemo implements OnInit{
    filterMode = 'lenient';

    filterModes = [
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ];

    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["filter-doc"]],standalone:!1,decls:30,vars:9,consts:[["tt",""],["caption",""],["header",""],["body",""],["emptymessage",""],[1,"card"],[1,"flex","justify-center","mb-6"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],[3,"load"],[3,"value","columns","filterMode","scrollable","tableStyle"],["selector","tree-table-filter-demo",3,"code"],[1,"flex","justify-end","items-center"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Global Search",3,"input"],[4,"ngFor","ngForOf"],["pInputText","","type","text",3,"input","placeholder"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2," The "),l(3,"i"),a(4,"filterMode"),n(),a(5," specifies the filtering strategy, in "),l(6,"i"),a(7,"lenient"),n(),a(8," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),l(9,"i"),a(10,"strict"),n(),a(11," mode when the query matches a node, filtering continues on all descendants. A general filled called "),l(12,"i"),a(13,"filterGlobal"),n(),a(14," is also provided to search all columns that support filtering. "),n()(),l(15,"div",5)(16,"div",6)(17,"p-selectbutton",7),Z("ngModelChange",function(g){return Y(d),X(i.filterMode,g)||(i.filterMode=g),K(g)}),n()(),l(18,"p-deferred-demo",8),S("load",function(){return i.loadDemoData()}),l(19,"p-treetable",9,0),p(21,Xn,4,0,"ng-template",null,1,h)(23,ta,4,2,"ng-template",null,2,h)(25,la,2,2,"ng-template",null,3,h)(27,ra,3,1,"ng-template",null,4,h),n()()(),u(29,"app-code",10)}o&2&&(c(17),s("options",i.filterModes),J("ngModel",i.filterMode),c(2),s("value",i.files)("columns",i.cols)("filterMode",i.filterMode)("scrollable",!0)("tableStyle",T(8,Jn)),c(10),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,vt,Fe,ne,ae,x,io,ro],encapsulation:2,changeDetection:0})}return t})();var na=()=>({width:"75vw"}),aa=()=>({height:"300px"}),sa=()=>({"min-width":"50rem"});function ca(t,r){t&1&&(l(0,"tr")(1,"th"),a(2,"Name"),n(),l(3,"th"),a(4,"Size"),n(),l(5,"th"),a(6,"Type"),n()())}function da(t,r){if(t&1&&(l(0,"tr",10)(1,"td"),u(2,"p-treetable-toggler",11),a(3),n(),l(4,"td"),a(5),n(),l(6,"td"),a(7),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," "),c(2),Q(o.size),c(2),Q(o.type)}}function pa(t,r){if(t&1&&(l(0,"p-treetable",9),p(1,ca,7,0,"ng-template",null,2,h)(3,da,8,5,"ng-template",null,3,h),n()),t&2){let e=f();s("value",e.files)("scrollable",!0)("tableStyle",T(3,sa))}}function ma(t,r){if(t&1){let e=H();l(0,"p-button",12),S("onClick",function(){Y(e);let i=f();return K(i.dialogVisible=!1)}),n()}}var Po=(()=>{class t{nodeService;cd;files;dialogVisible=!1;constructor(e,o){this.nodeService=e,this.cd=o}loadDemoData(){this.nodeService.getFilesystem().then(e=>{this.files=e,this.cd.markForCheck()})}code={basic:`<p-button label="Show" icon="pi pi-external-link" (onClick)="dialogVisible = true" />
<p-dialog [(visible)]="dialogVisible" header="Flex Scroll" [style]="{ width: '75vw' }" maximizable modal [contentStyle]="{ height: '300px' }">
    <ng-template #content>
        <p-treetable [value]="files" [scrollable]="true" scrollHeight="flex" [tableStyle]="{ 'min-width': '50rem' }">
            <ng-template #header>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                </tr>
            </ng-template>
            <ng-template #body let-rowNode let-rowData="rowData">
                <tr [ttRow]="rowNode">
                    <td>
                        <p-treetable-toggler [rowNode]="rowNode" />
                        {{ rowData.name }}
                    </td>
                    <td>{{ rowData.size }}</td>
                    <td>{{ rowData.type }}</td>
                </tr>
            </ng-template>
        </p-treetable>
    </ng-template>
    <ng-template #footer>
        <p-button label="Ok" icon="pi pi-check" (onClick)="dialogVisible = false" />
    </ng-template>
</p-dialog>`,html:`<div class="card">
    <p-button label="Show" icon="pi pi-external-link" (onClick)="dialogVisible = true" />
    <p-dialog [(visible)]="dialogVisible" header="Flex Scroll" [style]="{ width: '75vw' }" maximizable modal [contentStyle]="{ height: '300px' }">
        <ng-template #content>
            <p-treetable [value]="files" [scrollable]="true" scrollHeight="flex" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                    </tr>
                </ng-template>
                <ng-template #body let-rowNode let-rowData="rowData">
                    <tr [ttRow]="rowNode">
                        <td>
                            <p-treetable-toggler [rowNode]="rowNode" />
                            {{ rowData.name }}
                        </td>
                        <td>{{ rowData.size }}</td>
                        <td>{{ rowData.type }}</td>
                    </tr>
                </ng-template>
            </p-treetable>
        </ng-template>
        <ng-template #footer>
            <p-button label="Ok" icon="pi pi-check" (onClick)="dialogVisible = false" />
        </ng-template>
    </p-dialog>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'tree-table-flexible-scroll-demo',
    templateUrl: './tree-table-flexible-scroll-demo.html',
    standalone: true,
    imports: [TreeTableModule, ButtonModule, Dialog],
    providers: [NodeService]
})
export class TreeTableFlexibleScrollDemo implements OnInit {
    files!: TreeNode[];

    dialogVisible: boolean = false;

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => {
            this.files = files;
        });
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(le))};static \u0275cmp=y({type:t,selectors:[["flexible-scroll-doc"]],standalone:!1,decls:12,vars:7,consts:[["content",""],["footer",""],["header",""],["body",""],[1,"card","flex","justify-center"],[3,"load"],["label","Show","icon","pi pi-external-link",3,"onClick"],["header","Flex Scroll","maximizable","","modal","",3,"visibleChange","visible","contentStyle"],["selector","tree-table-flexible-scroll-demo",3,"code"],["scrollHeight","flex",3,"value","scrollable","tableStyle"],[3,"ttRow"],[3,"rowNode"],["label","Ok","icon","pi pi-check",3,"onClick"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2," Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes. "),n()(),l(3,"div",4)(4,"p-deferred-demo",5),S("load",function(){return i.loadDemoData()}),l(5,"p-button",6),S("onClick",function(){return i.dialogVisible=!0}),n(),l(6,"p-dialog",7),Z("visibleChange",function(g){return Y(d),X(i.dialogVisible,g)||(i.dialogVisible=g),K(g)}),p(7,pa,5,4,"ng-template",null,0,h)(9,ma,1,0,"ng-template",null,1,h),n()()(),u(11,"app-code",8)}o&2&&(c(6),me(T(5,na)),J("visible",i.dialogVisible),s("contentStyle",T(6,aa)),c(5),s("code",i.code))},dependencies:[v,C,w,N,D,ye,lt,x],encapsulation:2,changeDetection:0})}return t})();var ua=()=>({"min-width":"50rem"});function fa(t,r){t&1&&(l(0,"tr")(1,"th"),a(2,"Name"),n(),l(3,"th"),a(4,"Size"),n(),l(5,"th"),a(6,"Type"),n()())}function ga(t,r){if(t&1&&(l(0,"tr",7)(1,"td"),u(2,"p-treetable-toggler",8),a(3),n(),l(4,"td"),a(5),n(),l(6,"td"),a(7),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," "),c(2),Q(o.size),c(2),Q(o.type)}}var Oo=(()=>{class t{nodeService;files;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e)}code={basic:`<p-treetable [value]="files" [scrollable]="true" showGridlines [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [scrollable]="true" showGridlines [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td>
                    <p-treetable-toggler [rowNode]="rowNode" />
                    {{ rowData.name }}
                </td>
                <td>{{ rowData.size }}</td>
                <td>{{ rowData.type }}</td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';

@Component({
    selector: 'tree-table-gridlines-demo',
    templateUrl: './tree-table-gridlines-demo.html',
    standalone: true,
    imports: [TreeTableModule],
    providers: [NodeService]
})
export class TreeTableGridlinesDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["gridlines-doc"]],standalone:!1,decls:15,vars:5,consts:[["header",""],["body",""],[1,"py-6"],[1,"card"],[3,"load"],["showGridlines","",3,"value","scrollable","tableStyle"],["selector","tree-table-gridlines-demo",3,"code"],[3,"ttRow"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"section",2)(1,"app-docsectiontext")(2,"p"),a(3,"Enabling "),l(4,"i"),a(5,"showGridlines"),n(),a(6," displays grid lines."),n()(),l(7,"div",3)(8,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(9,"p-treetable",5),p(10,fa,7,0,"ng-template",null,0,h)(12,ga,8,5,"ng-template",null,1,h),n()()(),u(14,"app-code",6),n()),o&2&&(c(9),s("value",i.files)("scrollable",!0)("tableStyle",T(4,ua)),c(5),s("code",i.code))},dependencies:[v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Lo=(()=>{class t{code={typescript:"import { TreeTableModule } from 'primeng/treetable';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["tree-table-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,i){o&1&&u(0,"app-code",0),o&2&&s("code",i.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return t})();var ha=()=>({"min-width":"50rem"});function ba(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function _a(t,r){if(t&1&&(l(0,"tr"),p(1,ba,2,1,"th",5),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Sa(t,r){if(t&1&&u(0,"p-treetable-toggler",8),t&2){let e=f(2).$implicit;s("rowNode",e)}}function ya(t,r){if(t&1&&(l(0,"td"),p(1,Sa,1,1,"p-treetable-toggler",7),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function wa(t,r){if(t&1&&(l(0,"tr",6),p(1,ya,3,2,"td",5),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var $o=(()=>{class t{nodeService;cd;files;cols;totalRecords;loading=!1;constructor(e,o){this.nodeService=e,this.cd=o}ngOnInit(){this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.totalRecords=1e3,this.loading=!0}loadNodes(e){this.loading=!0,setTimeout(()=>{this.files=[];for(let o=0;o<e.rows;o++){let i={data:{name:"Item "+(e.first+o),size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+(e.first+o)},leaf:!1};this.files.push(i)}this.loading=!1,this.cd.markForCheck()},1e3)}onNodeExpand(e){this.loading=!0,setTimeout(()=>{this.loading=!1;let o=e.node;o.children=[{data:{name:o.data.name+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"File"}},{data:{name:o.data.name+" - 1",size:Math.floor(Math.random()*1e3)+1+"kb",type:"File"}}],this.files=[...this.files],this.cd.markForCheck()},250)}code={basic:`<p-treetable
    [value]="files"
    [columns]="cols"
    [paginator]="true"
    [rows]="10"
    [lazy]="true"
    (onLazyLoad)="loadNodes($event)"
    [totalRecords]="1000"
    [loading]="loading"
    (onNodeExpand)="onNodeExpand($event)"
    [scrollable]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable
        [value]="files"
        [columns]="cols"
        [paginator]="true"
        [rows]="10"
        [lazy]="true"
        (onLazyLoad)="loadNodes($event)"
        [totalRecords]="1000"
        [loading]="loading"
        (onNodeExpand)="onNodeExpand($event)"
        [scrollable]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
    >
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-lazy-load-demo',
    templateUrl: './tree-table-lazy-load-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule]
})
export class TreeTableLazyLoadDemo implements OnInit{
    files!: TreeNode[];

    cols!: Column[];

    totalRecords!: number;

    loading: boolean = false;

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.totalRecords = 1000;

        this.loading = true;
    }

    loadNodes(event: any) {
        this.loading = true;

        setTimeout(() => {
            this.files = [];

            for (let i = 0; i < event.rows; i++) {
                let node = {
                    data: {
                        name: 'Item ' + (event.first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (event.first + i)
                    },
                    leaf: false
                };

                this.files.push(node);
            }
            this.loading = false;
            this.cd.markForCheck();
        }, 1000);
    }

    onNodeExpand(event: any) {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            const node = event.node;

            node.children = [
                {
                    data: {
                        name: node.data.name + ' - 0',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                },
                {
                    data: {
                        name: node.data.name + ' - 1',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                }
            ];

            this.files = [...this.files];
            this.cd.markForCheck();
        }, 250);
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(le))};static \u0275cmp=y({type:t,selectors:[["lazy-load-doc"]],standalone:!1,decls:32,vars:11,consts:[["header",""],["body",""],[1,"card"],[3,"onLazyLoad","onNodeExpand","value","columns","paginator","rows","lazy","totalRecords","loading","scrollable","tableStyle"],["selector","tree-table-lazy-load-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2," Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime "),l(3,"i"),a(4,"paging"),n(),a(5,", "),l(6,"i"),a(7,"sorting"),n(),a(8," and "),l(9,"i"),a(10,"filtering"),n(),a(11," occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection. "),n(),l(12,"p"),a(13," Enabling the "),l(14,"i"),a(15,"lazy"),n(),a(16," property and assigning the logical number of rows to "),l(17,"i"),a(18,"totalRecords"),n(),a(19," by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist. "),n(),l(20,"p"),a(21,"In addition, only the root elements should be loaded, children can be loaded on demand using "),l(22,"i"),a(23,"onNodeExpand"),n(),a(24," callback."),n()(),l(25,"div",2)(26,"p-treetable",3),S("onLazyLoad",function(m){return i.loadNodes(m)})("onNodeExpand",function(m){return i.onNodeExpand(m)}),p(27,_a,2,1,"ng-template",null,0,h)(29,wa,2,2,"ng-template",null,1,h),n()(),u(31,"app-code",4)),o&2&&(c(26),s("value",i.files)("columns",i.cols)("paginator",!0)("rows",10)("lazy",!0)("totalRecords",1e3)("loading",i.loading)("scrollable",!0)("tableStyle",T(10,ha)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D],encapsulation:2,changeDetection:0})}return t})();var Ta=()=>[5,10,25],va=()=>({"min-width":"50rem"});function Ca(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function xa(t,r){if(t&1&&(l(0,"tr"),p(1,Ca,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Da(t,r){if(t&1&&u(0,"p-treetable-toggler",9),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Na(t,r){if(t&1&&(l(0,"td"),p(1,Da,1,1,"p-treetable-toggler",8),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Ea(t,r){if(t&1&&(l(0,"tr",7),p(1,Na,3,2,"td",6),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Vo=(()=>{class t{files;cols;loadDemoData(){this.files=[];for(let e=0;e<50;e++){let o={data:{name:"Item "+e,size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e},children:[{data:{name:"Item "+e+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e}}]};this.files.push(o)}this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="5" [rowsPerPageOptions]="[5, 10, 25]" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="5" [rowsPerPageOptions]="[5, 10, 25]" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-paginator-basic-demo',
    templateUrl: './tree-table-paginator-basic-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule]
})
export class TreeTablePaginatorBasicDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    ngOnInit() {
        this.files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                data:{
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["paginator-basic-doc"]],standalone:!1,decls:17,vars:10,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","paginator","rows","rowsPerPageOptions","scrollable","tableStyle"],["selector","tree-table-paginator-basic-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Pagination is enabled by adding "),l(3,"i"),a(4,"paginator"),n(),a(5," property and defining "),l(6,"i"),a(7,"rows"),n(),a(8," per page."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,xa,2,1,"ng-template",null,0,h)(14,Ea,2,2,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("paginator",!0)("rows",5)("rowsPerPageOptions",T(8,Ta))("scrollable",!0)("tableStyle",T(9,va)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Ia=()=>({"min-width":"50rem"});function za(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Fa(t,r){if(t&1&&(l(0,"tr"),p(1,za,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Ma(t,r){if(t&1&&u(0,"p-treetable-toggler",9),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Ra(t,r){if(t&1&&(l(0,"td"),p(1,Ma,1,1,"p-treetable-toggler",8),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function ka(t,r){if(t&1&&(l(0,"tr",7),p(1,Ra,3,2,"td",6),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Yo=(()=>{class t{files;cols;loadDemoData(){this.files=[];for(let e=0;e<50;e++){let o={data:{name:"Item "+e,size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e},children:[{data:{name:"Item "+e+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e}}]};this.files.push(o)}this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable paginatorLocale="fa-IR" [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable paginatorLocale="fa-IR" [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-paginator-locale-demo',
    templateUrl: './tree-table-paginator-locale-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule]
})
export class TreeTablePaginatorLocaleDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    ngOnInit() {
        this.files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                data:{
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["paginator-locale-doc"]],standalone:!1,decls:14,vars:8,consts:[["header",""],["body",""],[1,"card"],[3,"load"],["paginatorLocale","fa-IR",3,"value","columns","paginator","rows","scrollable","tableStyle"],["selector","tree-table-paginator-locale-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2," Paginator localization information such as page numbers and rows per page options are defined with the "),l(3,"i"),a(4,"paginatorLocale"),n(),a(5," property which defaults to the user locale. "),n()(),l(6,"div",2)(7,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(8,"p-treetable",4),p(9,Fa,2,1,"ng-template",null,0,h)(11,ka,2,2,"ng-template",null,1,h),n()()(),u(13,"app-code",5)),o&2&&(c(8),s("value",i.files)("columns",i.cols)("paginator",!0)("rows",10)("scrollable",!0)("tableStyle",T(7,Ia)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var Pa=()=>["/paginator"],Oa=()=>({"min-width":"50rem"});function La(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function $a(t,r){if(t&1&&(l(0,"tr"),p(1,La,2,1,"th",9),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Va(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Ya(t,r){if(t&1&&(l(0,"td"),p(1,Va,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Ka(t,r){if(t&1&&(l(0,"tr",10),p(1,Ya,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}function Ba(t,r){t&1&&u(0,"p-button",13)}function Aa(t,r){t&1&&u(0,"p-button",14)}var Ko=(()=>{class t{files;cols;loadDemoData(){this.files=[];for(let e=0;e<50;e++){let o={data:{name:"Item "+e,size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e},children:[{data:{name:"Item "+e+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+e}}]};this.files.push(o)}this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #paginatorleft>
        <p-button icon="pi pi-refresh" text />
    </ng-template>
    <ng-template #paginatorright>
        <p-button icon="pi pi-download" text />
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
        <ng-template #paginatorleft>
            <p-button icon="pi pi-refresh" text />
        </ng-template>
        <ng-template #paginatorright>
            <p-button icon="pi pi-download" text />
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-paginator-template-demo',
    templateUrl: './tree-table-paginator-template-demo.html',
    standalone: true,
    imports: [TreeTableModule, ButtonModule, CommonModule]
})
export class TreeTablePaginatorTemplateDemo implements OnInit {
    files!: TreeNode[];

    cols: Column[];

    ngOnInit() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["paginator-template-doc"]],standalone:!1,decls:24,vars:10,consts:[["header",""],["body",""],["paginatorleft",""],["paginatorright",""],["href","#",3,"routerLink"],[1,"card"],[3,"load"],[3,"value","columns","paginator","rows","scrollable","tableStyle"],["selector","tree-table-paginator-template-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"],["icon","pi pi-refresh","text",""],["icon","pi pi-download","text",""]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2," Paginator UI is customized using the "),l(3,"i"),a(4,"paginatorleft"),n(),a(5," and "),l(6,"i"),a(7,"paginatorright"),n(),a(8," property. Each element can also be customized further with your own UI to replace the default one, refer to the "),l(9,"a",4),a(10,"Paginator"),n(),a(11," component for more information about the advanced customization options. "),n()(),l(12,"div",5)(13,"p-deferred-demo",6),S("load",function(){return i.loadDemoData()}),l(14,"p-treetable",7),p(15,$a,2,1,"ng-template",null,0,h)(17,Ka,2,2,"ng-template",null,1,h)(19,Ba,1,0,"ng-template",null,2,h)(21,Aa,1,0,"ng-template",null,3,h),n()()(),u(23,"app-code",8)),o&2&&(c(9),s("routerLink",T(8,Pa)),c(5),s("value",i.files)("columns",i.cols)("paginator",!0)("rows",10)("scrollable",!0)("tableStyle",T(9,Oa)),c(9),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ye,Pt,x],encapsulation:2,changeDetection:0})}return t})();var Ha=()=>({"min-width":"50rem"});function Ua(t,r){if(t&1&&(l(0,"th",7),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function ja(t,r){if(t&1&&(l(0,"tr"),p(1,Ua,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Wa(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Ga(t,r){if(t&1&&(l(0,"td"),p(1,Wa,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function qa(t,r){if(t&1&&(l(0,"tr",8),p(1,Ga,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Bo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [reorderableColumns]="true" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" ttReorderableColumn>
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [reorderableColumns]="true" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" ttReorderableColumn>
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-reorder-demo',
    templateUrl: './tree-table-reorder-demo.html'
})
export class TreeTableReorderDemo implements OnInit{
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["reorder-doc"]],standalone:!1,decls:14,vars:7,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","reorderableColumns","scrollable","tableStyle"],["selector","tree-table-reorder-demo",3,"code"],["ttReorderableColumn","",4,"ngFor","ngForOf"],["ttReorderableColumn",""],[3,"ttRow"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Order of the columns can be changed using drag and drop when "),l(3,"i"),a(4,"reorderableColumns"),n(),a(5," is present."),n()(),l(6,"div",2)(7,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(8,"p-treetable",4),p(9,ja,2,1,"ng-template",null,0,h)(11,qa,2,2,"ng-template",null,1,h),n()()(),u(13,"app-code",5)),o&2&&(c(8),s("value",i.files)("columns",i.cols)("reorderableColumns",!0)("scrollable",!0)("tableStyle",T(6,Ha)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,yo,x],encapsulation:2,changeDetection:0})}return t})();var Qa=()=>({"min-width":"50rem"});function Ja(t,r){t&1&&u(0,"col",9)}function Xa(t,r){if(t&1&&(l(0,"colgroup"),p(1,Ja,1,0,"col",8),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Za(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function es(t,r){if(t&1&&(l(0,"tr"),p(1,Za,2,1,"th",10),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function ts(t,r){if(t&1&&(l(0,"td"),a(1),n()),t&2){let e=r.$implicit,o=f().rowData;c(),_(" ",o[e.field]," ")}}function os(t,r){if(t&1&&(l(0,"tr",11),p(1,ts,2,1,"td",10),n()),t&2){let e=r.columns,o=f();s("ttRow",o.rowNode),c(),s("ngForOf",e)}}function is(t,r){if(t&1&&(l(0,"tr",11)(1,"td"),u(2,"p-treetable-toggler",12),a(3),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," ")}}var Ao=(()=>{class t{nodeService;files;cols;frozenCols;scrollableCols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.scrollableCols=[{field:"size",header:"Size"},{field:"type",header:"Type"},{field:"size",header:"Size"},{field:"type",header:"Type"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.frozenCols=[{field:"name",header:"Name"}]}code={basic:`<p-treetable [value]="files" [columns]="scrollableCols" [frozenColumns]="frozenCols" [scrollable]="true" scrollHeight="250px" frozenWidth="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns" style="width:250px" />
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" style="height: 57px">
            <td *ngFor="let col of columns; let i = index">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #frozenbody let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode" style="height: 57px">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="scrollableCols" [frozenColumns]="frozenCols" [scrollable]="true" scrollHeight="250px" frozenWidth="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #colgroup let-columns>
            <colgroup>
                <col *ngFor="let col of columns" style="width:250px" />
            </colgroup>
        </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" style="height: 57px">
                <td *ngFor="let col of columns; let i = index">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
        <ng-template #frozenbody let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode" style="height: 57px">
                <td>
                    <p-treetable-toggler [rowNode]="rowNode" />
                    {{ rowData.name }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-scroll-frozen-columns-demo',
    templateUrl: './tree-table-scroll-frozen-columns-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableScrollFrozenColumnsDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    frozenCols!: Column[];

    scrollableCols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.scrollableCols = [
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.frozenCols = [{ field: 'name', header: 'Name' }];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["scroll-frozen-columns-doc"]],standalone:!1,decls:18,vars:8,consts:[["colgroup",""],["header",""],["body",""],["frozenbody",""],[1,"card"],[3,"load"],["scrollHeight","250px","frozenWidth","200px",3,"value","columns","frozenColumns","scrollable","tableStyle"],["selector","tree-table-scroll-frozen-columns-demo",3,"code"],["style","width:250px",4,"ngFor","ngForOf"],[2,"width","250px"],[4,"ngFor","ngForOf"],[2,"height","57px",3,"ttRow"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"A column can be fixed during horizontal scrolling by enabling the "),l(3,"i"),a(4,"frozenColumns"),n(),a(5," property."),n()(),l(6,"div",4)(7,"p-deferred-demo",5),S("load",function(){return i.loadDemoData()}),l(8,"p-treetable",6),p(9,Xa,2,1,"ng-template",null,0,h)(11,es,2,1,"ng-template",null,1,h)(13,os,2,2,"ng-template",null,2,h)(15,is,4,3,"ng-template",null,3,h),n()()(),u(17,"app-code",7)),o&2&&(c(8),s("value",i.files)("columns",i.scrollableCols)("frozenColumns",i.frozenCols)("scrollable",!0)("scrollable",!0)("tableStyle",T(7,Qa)),c(9),s("code",i.code))},dependencies:[F,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var ls=()=>({"min-width":"50rem"});function rs(t,r){t&1&&u(0,"col",8)}function ns(t,r){if(t&1&&(l(0,"colgroup"),p(1,rs,1,0,"col",7),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function as(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function ss(t,r){if(t&1&&(l(0,"tr"),p(1,as,2,1,"th",9),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function cs(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function ds(t,r){if(t&1&&(l(0,"td"),p(1,cs,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function ps(t,r){if(t&1&&(l(0,"tr",10),p(1,ds,3,2,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Ho=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="250px" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #colgroup let-columns>
        <colgroup>
            <col *ngFor="let col of columns" style="width:500px" />
        </colgroup>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`
<div class="card">
    <p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="250px" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #colgroup let-columns>
            <colgroup>
                <col *ngFor="let col of columns" style="width:500px" />
            </colgroup>
        </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0"></p-treetable-toggler>
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-scroll-horizontal-demo',
    templateUrl: './tree-table-scroll-horizontal-demo.html'
})
export class TreeTableScrollHorizontalDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["scroll-horizontal-doc"]],standalone:!1,decls:13,vars:7,consts:[["colgroup",""],["header",""],["body",""],[1,"card"],[3,"load"],["scrollHeight","250px",3,"value","columns","scrollable","tableStyle"],["selector","tree-table-scroll-horizontal-demo",3,"code"],["style","width:500px",4,"ngFor","ngForOf"],[2,"width","500px"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Horizontal scrolling is enabled when the total width of columns exceeds table width."),n()(),l(3,"div",3)(4,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(5,"p-treetable",5),p(6,ns,2,1,"ng-template",null,0,h)(8,ss,2,1,"ng-template",null,1,h)(10,ps,2,2,"ng-template",null,2,h),n()()(),u(12,"app-code",6)),o&2&&(c(5),s("value",i.files)("columns",i.cols)("scrollable",!0)("scrollable",!0)("tableStyle",T(6,ls)),c(7),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,x],encapsulation:2})}return t})();var ms=()=>({"min-width":"50rem"});function us(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function fs(t,r){if(t&1&&(l(0,"tr"),p(1,us,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function gs(t,r){if(t&1&&u(0,"p-treetable-toggler",9),t&2){let e=f(2).$implicit;s("rowNode",e)}}function hs(t,r){if(t&1&&(l(0,"td"),p(1,gs,1,1,"p-treetable-toggler",8),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function bs(t,r){if(t&1&&(l(0,"tr",7),p(1,hs,3,2,"td",6),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Uo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
   <p-treetable [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="200px" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-scroll-vertical-demo',
    templateUrl: './tree-table-scroll-vertical-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableScrollVerticalDemo implements OnInit{
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["scroll-vertical-doc"]],standalone:!1,decls:17,vars:7,consts:[["header",""],["body",""],[1,"card"],[3,"load"],["scrollHeight","200px",3,"value","columns","scrollable","tableStyle"],["selector","tree-table-scroll-vertical-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Adding "),l(3,"i"),a(4,"scrollable"),n(),a(5," property along with a "),l(6,"i"),a(7,"scrollHeight"),n(),a(8," for the data viewport enables vertical scrolling with fixed headers."),n()(),l(9,"div",2)(10,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(11,"p-treetable",4),p(12,fs,2,1,"ng-template",null,0,h)(14,bs,2,2,"ng-template",null,1,h),n()()(),u(16,"app-code",5)),o&2&&(c(11),s("value",i.files)("columns",i.cols)("scrollable",!0)("scrollable",!0)("tableStyle",T(6,ms)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,x],encapsulation:2,changeDetection:0})}return t})();var _s=()=>({"min-width":"50rem"});function Ss(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function ys(t,r){if(t&1&&(l(0,"tr"),p(1,Ss,2,1,"th",7),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function ws(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Ts(t,r){if(t&1&&u(0,"p-treetable-checkbox",12),t&2){let e=f(2).$implicit;s("value",e)}}function vs(t,r){if(t&1&&(l(0,"td"),p(1,ws,1,1,"p-treetable-toggler",9)(2,Ts,1,1,"p-treetable-checkbox",10),a(3),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Cs(t,r){if(t&1&&(l(0,"tr",8),p(1,vs,4,3,"td",7),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e)("ttSelectableRow",e),c(),s("ngForOf",o)}}var jo=(()=>{class t{nodeService;cd;files;selectionKeys={};cols;constructor(e,o){this.nodeService=e,this.cd=o}loadDemoData(){this.nodeService.getTreeTableNodes().then(e=>{this.files=e,this.cd.markForCheck()}),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}],this.selectionKeys={0:{partialChecked:!0},"0-0":{partialChecked:!1,checked:!0},"0-0-0":{checked:!0},"0-0-1":{checked:!0},"0-0-2":{checked:!0}}}code={basic:`<p-treetable [value]="files" [columns]="cols" selectionMode="checkbox" [(selectionKeys)]="selectionKeys" dataKey="key" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                <p-treetable-checkbox [value]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" selectionMode="checkbox" [(selectionKeys)]="selectionKeys" dataKey="key" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    <p-treetable-checkbox [value]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-selection-checkbox-demo',
    templateUrl: './tree-table-selection-checkbox-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableSelectionCheckboxDemo implements OnInit {
    files!: TreeNode[];

    selectionKeys = {};

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getTreeTableNodes().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectionKeys = {
            '0': {
                partialChecked: true
            },
            '0-0': {
                partialChecked: false,
                checked: true
            },
            '0-0-0': {
                checked: true
            },
            '0-0-1': {
                checked: true
            },
            '0-0-2': {
                checked: true
            }
        };
    }
}`,service:["NodeService"]};code2={typescript:`{
    '0': {
        partialChecked: true
    },
    '0-0': {
        partialChecked: false,
        checked: true
    },
    '0-0-0': {
        checked: true
    },
    '0-0-1': {
        checked: true
    },
    '0-0-2': {
        checked: true
    }
}`};static \u0275fac=function(o){return new(o||t)(b(I),b(le))};static \u0275cmp=y({type:t,selectors:[["selection-checkbox-doc"]],standalone:!1,decls:26,vars:9,consts:[["header",""],["body",""],["selector","selection-keys",3,"code","hideToggleCode"],[1,"card","mt-4"],[3,"load"],["selectionMode","checkbox","dataKey","key",3,"selectionKeysChange","value","columns","selectionKeys","scrollable","tableStyle"],["selector","tree-table-selection-checkbox-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ttSelectableRow"],[3,"rowNode",4,"ngIf"],[3,"value",4,"ngIf"],[3,"rowNode"],[3,"value"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),l(3,"i"),a(4,"selectionMode"),n(),a(5," as "),l(6,"i"),a(7,"checkbox"),n(),a(8,"."),n(),l(9,"p"),a(10," In checkbox selection mode, value binding should be a key-value pair where key (or the dataKey) is the node key and value is an object that has "),l(11,"i"),a(12,"checked"),n(),a(13," and "),l(14,"i"),a(15,"partialChecked"),n(),a(16," properties to represent the checked state of a node. "),n()(),u(17,"app-code",2),l(18,"div",3)(19,"p-deferred-demo",4),S("load",function(){return i.loadDemoData()}),l(20,"p-treetable",5),Z("selectionKeysChange",function(g){return Y(d),X(i.selectionKeys,g)||(i.selectionKeys=g),K(g)}),p(21,ys,2,1,"ng-template",null,0,h)(23,Cs,2,3,"ng-template",null,1,h),n()()(),u(25,"app-code",6)}o&2&&(c(17),s("code",i.code2)("hideToggleCode",!0),c(3),s("value",i.files)("columns",i.cols),J("selectionKeys",i.selectionKeys),s("scrollable",!0)("tableStyle",T(8,_s)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ge,To,x],encapsulation:2,changeDetection:0})}return t})();var xs=()=>({"min-width":"50rem"});function Ds(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Ns(t,r){if(t&1&&(l(0,"tr"),p(1,Ds,2,1,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Es(t,r){if(t&1&&u(0,"p-treetable-toggler",9),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Is(t,r){if(t&1&&(l(0,"td"),p(1,Es,1,1,"p-treetable-toggler",8),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function zs(t,r){if(t&1&&(l(0,"tr",7),p(1,Is,3,2,"td",6),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e)("ttSelectableRow",e),c(),s("ngForOf",o)}}var Wo=(()=>{class t{nodeService;messageService;files;selectedNode;cols;constructor(e,o){this.nodeService=e,this.messageService=o}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}nodeSelect(e){this.messageService.add({severity:"info",summary:"Node Selected",detail:e.node.data.name})}nodeUnselect(e){this.messageService.add({severity:"warn",summary:"Node Unselected",detail:e.node.data.name})}code={basic:`<p-treetable
    [value]="files"
    [columns]="cols"
    selectionMode="single"
    [(selection)]="selectedNode"
    dataKey="name"
    (onNodeSelect)="nodeSelect($event)"
    (onNodeUnselect)="nodeUnselect($event)"
    [scrollable]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-toast />
    <p-treetable
        [value]="files"
        [columns]="cols"
        selectionMode="single"
        [(selection)]="selectedNode"
        dataKey="name"
        (onNodeSelect)="nodeSelect($event)"
        (onNodeUnselect)="nodeUnselect($event)"
        [scrollable]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
    >
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

interface NodeEvent {
    originalEvent: Event;
    node: TreeNode;
}

@Component({
    selector: 'tree-table-selection-events-demo',
    templateUrl: './tree-table-selection-events-demo.html',
    standalone: true,
    imports: [TreeTableModule, ToastModule, CommonModule],
    providers: [MessageService, NodeService]
})
export class TreeTableSelectionEventsDemo implements OnInit {
    files!: TreeNode[];

    selectedNode!: TreeNode;

    cols!: Column[];

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }

    nodeSelect(event: NodeEvent) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    nodeUnselect(event: NodeEvent) {
        this.messageService.add({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I),b(Se))};static \u0275cmp=y({type:t,selectors:[["selection-events-doc"]],standalone:!1,features:[Ie([Se])],decls:18,vars:7,consts:[["header",""],["body",""],[1,"card"],[3,"load"],["selectionMode","single","dataKey","name",3,"selectionChange","onNodeSelect","onNodeUnselect","value","columns","selection","scrollable","tableStyle"],["selector","tree-table-selection-events-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ttSelectableRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2,"TreeTable provides "),l(3,"i"),a(4,"onNodeSelect"),n(),a(5," and "),l(6,"i"),a(7,"onNodeUnselect"),n(),a(8," events to listen selection events."),n()(),l(9,"div",2),u(10,"p-toast"),l(11,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(12,"p-treetable",4),Z("selectionChange",function(g){return Y(d),X(i.selectedNode,g)||(i.selectedNode=g),K(g)}),S("onNodeSelect",function(g){return i.nodeSelect(g)})("onNodeUnselect",function(g){return i.nodeUnselect(g)}),p(13,Ns,2,1,"ng-template",null,0,h)(15,zs,2,3,"ng-template",null,1,h),n()()(),u(17,"app-code",5)}o&2&&(c(12),s("value",i.files)("columns",i.cols),J("selection",i.selectedNode),s("scrollable",!0)("tableStyle",T(6,xs)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ge,it,x],encapsulation:2,changeDetection:0})}return t})();var Ms=()=>({"min-width":"50rem"});function Rs(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function ks(t,r){if(t&1&&(l(0,"tr"),p(1,Rs,2,1,"th",8),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Ps(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Os(t,r){if(t&1&&(l(0,"td"),p(1,Ps,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Ls(t,r){if(t&1&&(l(0,"tr",9),p(1,Os,3,2,"td",8),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e)("ttSelectableRow",e),c(),s("ngForOf",o)}}var Go=(()=>{class t{nodeService;metaKeySelection=!0;files;selectedNodes;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-toggleswitch [(ngModel)]="metaKeySelection" />
<p-treetable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <div class="flex gap-4 items-center justify-center mb-6">
        <p-toggleswitch [(ngModel)]="metaKeySelection" />
        <span>Metakey</span>
    </div>
    <p-treetable [value]="files" [columns]="cols" selectionMode="multiple" [(selection)]="selectedNodes" dataKey="name" [metaKeySelection]="metaKeySelection" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-selection-multiple-demo',
    templateUrl: './tree-table-selection-multiple-demo.html',
    standalone: true,
    imports: [TreeTableModule, ToggleSwitchModule, FormsModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableSelectionMultipleDemo implements OnInit {
    metaKeySelection: boolean = true;

    files!: TreeNode[];

    selectedNodes!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["selection-multiple-doc"]],standalone:!1,decls:27,vars:9,consts:[["header",""],["body",""],[1,"card"],[1,"flex","gap-4","items-center","justify-center","mb-6"],[3,"ngModelChange","ngModel"],[3,"load"],["selectionMode","multiple","dataKey","name",3,"selectionChange","value","columns","selection","metaKeySelection","scrollable","tableStyle"],["selector","tree-table-selection-multiple-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ttSelectableRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2," More than one node is selectable by setting "),l(3,"i"),a(4,"selectionMode"),n(),a(5," to "),l(6,"i"),a(7,"multiple"),n(),a(8,". By default in multiple selection mode, metaKey press (e.g. "),l(9,"i"),a(10,"\u2318"),n(),a(11,") is necessary to add to existing selections however this can be configured with disabling the "),l(12,"i"),a(13,"metaKeySelection"),n(),a(14," property. Note that in touch enabled devices, TreeTable always ignores metaKey. "),n()(),l(15,"div",2)(16,"div",3)(17,"p-toggleswitch",4),Z("ngModelChange",function(g){return Y(d),X(i.metaKeySelection,g)||(i.metaKeySelection=g),K(g)}),n(),l(18,"span"),a(19,"Metakey"),n()(),l(20,"p-deferred-demo",5),S("load",function(){return i.loadDemoData()}),l(21,"p-treetable",6),Z("selectionChange",function(g){return Y(d),X(i.selectedNodes,g)||(i.selectedNodes=g),K(g)}),p(22,ks,2,1,"ng-template",null,0,h)(24,Ls,2,3,"ng-template",null,1,h),n()()(),u(26,"app-code",7)}o&2&&(c(17),J("ngModel",i.metaKeySelection),c(4),s("value",i.files)("columns",i.cols),J("selection",i.selectedNodes),s("metaKeySelection",i.metaKeySelection)("scrollable",!0)("tableStyle",T(8,Ms)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ge,ne,ae,x,ot],encapsulation:2,changeDetection:0})}return t})();var $s=()=>({"min-width":"50rem"});function Vs(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function Ys(t,r){if(t&1&&(l(0,"tr"),p(1,Vs,2,1,"th",8),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Ks(t,r){if(t&1&&u(0,"p-treetable-toggler",11),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Bs(t,r){if(t&1&&(l(0,"td"),p(1,Ks,1,1,"p-treetable-toggler",10),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function As(t,r){if(t&1&&(l(0,"tr",9),p(1,Bs,3,2,"td",8),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e)("ttSelectableRow",e),c(),s("ngForOf",o)}}var qo=(()=>{class t{nodeService;metaKeySelection=!0;files;selectedNode;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" selectionMode="single" [(selection)]="selectedNode" dataKey="name" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <div class="flex gap-4 items-center justify-center mb-6">
        <p-toggleswitch [(ngModel)]="metaKeySelection" />
        <span>Metakey</span>
    </div>
    <p-treetable [value]="files" [columns]="cols" selectionMode="single" [(selection)]="selectedNode" dataKey="name" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-selection-single-demo',
    templateUrl: './tree-table-selection-single-demo.html',
    standalone: true,
    imports: [TreeTableModule, ToggleSwitchModule, FormsModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableSelectionSingleDemo implements OnInit {
    metaKeySelection: boolean = true;

    files!: TreeNode[];

    selectedNode!: TreeNode;

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["selection-single-doc"]],standalone:!1,decls:32,vars:9,consts:[["header",""],["body",""],[1,"card"],[1,"flex","gap-4","items-center","justify-center","mb-6"],[3,"ngModelChange","ngModel"],[3,"load"],["selectionMode","single","dataKey","name",3,"selectionChange","value","columns","metaKeySelection","selection","scrollable","tableStyle"],["selector","tree-table-selection-single-demo",3,"code"],[4,"ngFor","ngForOf"],[3,"ttRow","ttSelectableRow"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"app-docsectiontext")(1,"p"),a(2,"Single node selection is configured by setting "),l(3,"i"),a(4,"selectionMode"),n(),a(5," as "),l(6,"i"),a(7,"single"),n(),a(8," along with "),l(9,"i"),a(10,"selection"),n(),a(11," properties to manage the selection value binding."),n(),l(12,"p"),a(13," By default, metaKey press (e.g. "),l(14,"i"),a(15,"\u2318"),n(),a(16,") is necessary to unselect a node however this can be configured with disabling the "),l(17,"i"),a(18,"metaKeySelection"),n(),a(19," property. In touch enabled devices this option has no effect and behavior is same as setting it to false "),n()(),l(20,"div",2)(21,"div",3)(22,"p-toggleswitch",4),Z("ngModelChange",function(g){return Y(d),X(i.metaKeySelection,g)||(i.metaKeySelection=g),K(g)}),n(),l(23,"span"),a(24,"Metakey"),n()(),l(25,"p-deferred-demo",5),S("load",function(){return i.loadDemoData()}),l(26,"p-treetable",6),Z("selectionChange",function(g){return Y(d),X(i.selectedNode,g)||(i.selectedNode=g),K(g)}),p(27,Ys,2,1,"ng-template",null,0,h)(29,As,2,3,"ng-template",null,1,h),n()()(),u(31,"app-code",7)}o&2&&(c(22),J("ngModel",i.metaKeySelection),c(4),s("value",i.files)("columns",i.cols)("metaKeySelection",i.metaKeySelection),J("selection",i.selectedNode),s("scrollable",!0)("tableStyle",T(8,$s)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ge,ne,ae,x,ot],encapsulation:2,changeDetection:0})}return t})();var Hs=()=>({"min-width":"50rem"});function Us(t,r){t&1&&(l(0,"tr")(1,"th"),a(2,"Name"),n(),l(3,"th"),a(4,"Size"),n(),l(5,"th"),a(6,"Type"),n()())}function js(t,r){if(t&1&&(l(0,"tr",9)(1,"td"),u(2,"p-treetable-toggler",10),a(3),n(),l(4,"td"),a(5),n(),l(6,"td"),a(7),n()()),t&2){let e=r.$implicit,o=r.rowData;s("ttRow",e),c(2),s("rowNode",e),c(),_(" ",o.name," "),c(2),Q(o.size),c(2),Q(o.type)}}var Qo=(()=>{class t{nodeService;files;sizes;selectedSize="";constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.sizes=[{name:"Small",class:"p-treetable-sm"},{name:"Normal",class:""},{name:"Large",class:"p-treetable-lg"}]}code={basic:`<div class="flex justify-center mb-4">
    <p-selectbutton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="class" />
</div>
<p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}" [styleClass]="selectedSize">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Type</th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData">
        <tr [ttRow]="rowNode">
            <td>
                <p-treetable-toggler [rowNode]="rowNode" />
                {{ rowData.name }}
            </td>
            <td>{{ rowData.size }}</td>
            <td>{{ rowData.type }}</td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <div class="flex justify-center mb-4">
        <p-selectbutton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="class" />
    </div>
    <p-treetable [value]="files" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}" [styleClass]="selectedSize">
        <ng-template #header>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData">
            <tr [ttRow]="rowNode">
                <td>
                    <p-treetable-toggler [rowNode]="rowNode" />
                    {{ rowData.name }}
                </td>
                <td>{{ rowData.size }}</td>
                <td>{{ rowData.type }}</td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'tree-table-size-demo',
    templateUrl: './tree-table-size-demo.html',
    standalone: true,
    imports: [TreeTableModule, SelectButton, FormsModule],
    providers: [NodeService]
})
export class TreeTableSizeDemo implements OnInit {
    files!: TreeNode[];

    sizes!: any[];

    selectedSize: any = '';

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.sizes = [
            { name: 'Small', class: 'p-treetable-sm' },
            { name: 'Normal', class: '' },
            { name: 'Large', class: 'p-treetable-lg' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["size-doc"]],standalone:!1,decls:20,vars:9,consts:[["header",""],["body",""],[1,"py-6"],[1,"card"],[1,"flex","justify-center","mb-4"],["optionLabel","name","optionValue","class",3,"ngModelChange","options","ngModel","multiple"],[3,"load"],[3,"value","scrollable","tableStyle","styleClass"],["selector","tree-table-size-demo",3,"code"],[3,"ttRow"],[3,"rowNode"]],template:function(o,i){if(o&1){let d=H();l(0,"section",2)(1,"app-docsectiontext")(2,"p"),a(3,"In addition to a regular treetable, alternatives with alternative sizes are available. Add "),l(4,"i"),a(5,"p-treetable-sm"),n(),a(6," class to reduce the size of treetable or "),l(7,"i"),a(8,"p-treetable-lg"),n(),a(9," to enlarge it."),n()(),l(10,"div",3)(11,"div",4)(12,"p-selectbutton",5),Z("ngModelChange",function(g){return Y(d),X(i.selectedSize,g)||(i.selectedSize=g),K(g)}),n()(),l(13,"p-deferred-demo",6),S("load",function(){return i.loadDemoData()}),l(14,"p-treetable",7),p(15,Us,7,0,"ng-template",null,0,h)(17,js,8,5,"ng-template",null,1,h),n()()(),u(19,"app-code",8),n()}o&2&&(c(12),s("options",i.sizes),J("ngModel",i.selectedSize),s("multiple",!1),c(2),s("value",i.files)("scrollable",!0)("tableStyle",T(8,Hs))("styleClass",i.selectedSize),c(5),s("code",i.code))},dependencies:[v,C,w,N,D,Fe,ne,ae,x],encapsulation:2,changeDetection:0})}return t})();var Ws=()=>({"min-width":"50rem"});function Gs(t,r){if(t&1&&(l(0,"th",7),a(1),u(2,"p-treetable-sort-icon",8),n()),t&2){let e=r.$implicit;s("ttSortableColumn",e.field),c(),_(" ",e.header," "),c(),s("field",e.field)}}function qs(t,r){if(t&1&&(l(0,"tr"),p(1,Gs,3,3,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function Qs(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function Js(t,r){if(t&1&&(l(0,"td"),p(1,Qs,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function Xs(t,r){if(t&1&&(l(0,"tr",9),p(1,Js,3,2,"td",10),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Jo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" sortMode="multiple" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                {{ col.header }}
                <p-treetable-sort-icon [field]="col.field" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" sortMode="multiple" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                    {{ col.header }}
                    <p-treetable-sort-icon [field]="col.field" />
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-sort-multiple-columns-demo',
    templateUrl: './tree-table-sort-multiple-columns-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableSortMultipleColumnsDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["sort-multiple-columns-doc"]],standalone:!1,decls:20,vars:6,consts:[["header",""],["body",""],[1,"card"],[3,"load"],["sortMode","multiple",3,"value","columns","scrollable","tableStyle"],["selector","tree-table-sort-multiple-columns-demo",3,"code"],[3,"ttSortableColumn",4,"ngFor","ngForOf"],[3,"ttSortableColumn"],[3,"field"],[3,"ttRow"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Multiple columns can be sorted by defining "),l(3,"i"),a(4,"sortMode"),n(),a(5," as "),l(6,"i"),a(7,"multiple"),n(),a(8,". This mode requires metaKey (e.g. "),l(9,"i"),a(10,"\u2318"),n(),a(11,") to be pressed when clicking a header."),n()(),l(12,"div",2)(13,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(14,"p-treetable",4),p(15,qs,2,1,"ng-template",null,0,h)(17,Xs,2,2,"ng-template",null,1,h),n()()(),u(19,"app-code",5)),o&2&&(c(14),s("value",i.files)("columns",i.cols)("scrollable",!0)("tableStyle",T(5,Ws)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,Ye,at,D,x],encapsulation:2,changeDetection:0})}return t})();var Zs=()=>({"min-width":"50rem"});function ec(t,r){if(t&1&&(l(0,"th",7),a(1),u(2,"p-treetable-sort-icon",8),n()),t&2){let e=r.$implicit;s("ttSortableColumn",e.field),c(),_(" ",e.header," "),c(),s("field",e.field)}}function tc(t,r){if(t&1&&(l(0,"tr"),p(1,ec,3,3,"th",6),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function oc(t,r){if(t&1&&u(0,"p-treetable-toggler",12),t&2){let e=f(2).$implicit;s("rowNode",e)}}function ic(t,r){if(t&1&&(l(0,"td"),p(1,oc,1,1,"p-treetable-toggler",11),a(2),n()),t&2){let e=r.$implicit,o=r.index,i=f().rowData;c(),s("ngIf",o===0),c(),_(" ",i[e.field]," ")}}function lc(t,r){if(t&1&&(l(0,"tr",9),p(1,ic,3,2,"td",10),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}var Xo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                {{ col.header }}
                <p-treetable-sort-icon [field]="col.field" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns" [ttSortableColumn]="col.field">
                    {{ col.header }}
                    <p-treetable-sort-icon [field]="col.field" />
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-sort-single-column-demo',
    templateUrl: './tree-table-sort-single-column-demo.html',
    standalone: true,
    imports: [TreeTableModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableSortSingleColumnDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["sort-single-column-doc"]],standalone:!1,decls:14,vars:6,consts:[["header",""],["body",""],[1,"card"],[3,"load"],[3,"value","columns","scrollable","tableStyle"],["selector","tree-table-sort-single-column-demo",3,"code"],[3,"ttSortableColumn",4,"ngFor","ngForOf"],[3,"ttSortableColumn"],[3,"field"],[3,"ttRow"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"rowNode"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Sorting on a column is enabled by adding the "),l(3,"i"),a(4,"ttSortableColumn"),n(),a(5," property."),n()(),l(6,"div",2)(7,"p-deferred-demo",3),S("load",function(){return i.loadDemoData()}),l(8,"p-treetable",4),p(9,tc,2,1,"ng-template",null,0,h)(11,lc,2,2,"ng-template",null,1,h),n()()(),u(13,"app-code",5)),o&2&&(c(8),s("value",i.files)("columns",i.cols)("scrollable",!0)("tableStyle",T(5,Zs)),c(5),s("code",i.code))},dependencies:[F,z,v,C,w,N,Ye,at,D,x],encapsulation:2,changeDetection:0})}return t})();var rc=()=>({"min-width":"50rem"}),nc=()=>({"margin-right":".5em"});function ac(t,r){t&1&&(l(0,"div",8),a(1,"File Viewer"),n())}function sc(t,r){if(t&1&&(l(0,"th"),a(1),n()),t&2){let e=r.$implicit;c(),_(" ",e.header," ")}}function cc(t,r){if(t&1&&(l(0,"tr"),p(1,sc,2,1,"th",9),n()),t&2){let e=r.$implicit;c(),s("ngForOf",e)}}function dc(t,r){if(t&1&&u(0,"p-treetable-toggler",13),t&2){let e=f(2).$implicit;s("rowNode",e)}}function pc(t,r){t&1&&(de(0),u(1,"p-button",14)(2,"p-button",15),pe()),t&2&&(c(),me(T(2,nc)))}function mc(t,r){if(t&1&&(l(0,"td"),p(1,dc,1,1,"p-treetable-toggler",11),a(2),p(3,pc,3,3,"ng-container",12),n()),t&2){let e=r.$implicit,o=r.index,i=r.last,d=f().rowData;c(),s("ngIf",o===0),c(),_(" ",d[e.field]," "),c(),s("ngIf",i)}}function uc(t,r){if(t&1&&(l(0,"tr",10),p(1,mc,4,3,"td",9),n()),t&2){let e=r.$implicit,o=r.columns;s("ttRow",e),c(),s("ngForOf",o)}}function fc(t,r){t&1&&(l(0,"div",16),u(1,"p-button",17),n())}var Zo=(()=>{class t{nodeService;files;cols;constructor(e){this.nodeService=e}loadDemoData(){this.nodeService.getFilesystem().then(e=>this.files=e),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"},{field:"",header:""}]}code={basic:`<p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption><div class="text-xl font-bold">File Viewer</div> </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index; let last = last">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                <ng-container *ngIf="last">
                    <p-button icon="pi pi-search" rounded="true" [style]="{ 'margin-right': '.5em' }" />
                    <p-button icon="pi pi-pencil" rounded="true" severity="success" />
                </ng-container>
            </td>
        </tr>
    </ng-template>
    <ng-template #summary>
        <div style="text-align:left">
            <p-button icon="pi pi-refresh" label="Reload" severity="warn" />
        </div>
    </ng-template>
</p-treetable>`,html:`<div class="card">
    <p-treetable [value]="files" [columns]="cols" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #caption><div class="text-xl font-bold">File Viewer</div> </ng-template>
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index; let last = last">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                        {{ rowData[col.field] }}
                    <ng-container *ngIf="last">
                        <p-button icon="pi pi-search" rounded="true" [style]="{ 'margin-right': '.5em' }" />
                        <p-button icon="pi pi-pencil" rounded="true" severity="success" />
                    </ng-container>
                </td>
            </tr>
        </ng-template>
        <ng-template #summary>
            <div style="text-align:left">
                <p-button icon="pi pi-refresh" label="Reload" severity="warn" />
            </div>
        </ng-template>
    </p-treetable>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-template-demo',
    templateUrl: './tree-table-template-demo.html',
    standalone: true,
    imports: [TreeTableModule, ButtonModule, CommonModule],
    providers: [NodeService]
})
export class TreeTableTemplateDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
            { field: '', header: '' }
        ];
    }
}`,service:["NodeService"]};static \u0275fac=function(o){return new(o||t)(b(I))};static \u0275cmp=y({type:t,selectors:[["template-doc"]],standalone:!1,decls:27,vars:6,consts:[["caption",""],["header",""],["body",""],["summary",""],[1,"card"],[3,"load"],[3,"value","columns","scrollable","tableStyle"],["selector","tree-table-template-demo",3,"code"],[1,"text-xl","font-bold"],[4,"ngFor","ngForOf"],[3,"ttRow"],[3,"rowNode",4,"ngIf"],[4,"ngIf"],[3,"rowNode"],["icon","pi pi-search","rounded","true"],["icon","pi pi-pencil","rounded","true","severity","success"],[2,"text-align","left"],["icon","pi pi-refresh","label","Reload","severity","warn"]],template:function(o,i){o&1&&(l(0,"app-docsectiontext")(1,"p"),a(2,"Custom content at "),l(3,"i"),a(4,"caption"),n(),a(5,", "),l(6,"i"),a(7,"header"),n(),a(8,", "),l(9,"i"),a(10,"body"),n(),a(11," and "),l(12,"i"),a(13,"summary"),n(),a(14," sections are supported via templating."),n()(),l(15,"div",4)(16,"p-deferred-demo",5),S("load",function(){return i.loadDemoData()}),l(17,"p-treetable",6),p(18,ac,2,0,"ng-template",null,0,h)(20,cc,2,1,"ng-template",null,1,h)(22,uc,2,2,"ng-template",null,2,h)(24,fc,2,0,"ng-template",null,3,h),n()()(),u(26,"app-code",7)),o&2&&(c(17),s("value",i.files)("columns",i.cols)("scrollable",!0)("tableStyle",T(5,rc)),c(9),s("code",i.code))},dependencies:[F,z,v,C,w,N,D,ye,x],encapsulation:2,changeDetection:0})}return t})();var ei=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=qe({type:t});static \u0275inj=Ue({imports:[Je,co,Ct,vo,Zt,Ot,oo,Fe,Xe,to,go,uo,lt,x,eo,lo,no,Ct]})}return t})();var gc=()=>["TreeTable","TreeTableNode","TreeNode"],ti=(()=>{class t{docs=[{id:"import-demo",label:"Import",component:Lo},{id:"basic",label:"Basic",component:Co},{id:"dynamiccolumns",label:"Dynamic Columns",component:Ro},{id:"controlled",label:"Controlled",component:Mo},{id:"template",label:"Template",component:Zo},{id:"size",label:"Size",component:Qo},{id:"gridlines",label:"Grid Lines",component:Oo},{id:"paginator",label:"Paginator",children:[{id:"paginatorbasic",label:"Basic",component:Vo},{id:"paginatorlocale",label:"Locale",component:Yo},{id:"paginatortemplate",label:"Template",component:Ko}]},{id:"sort",label:"Sort",children:[{id:"sortsinglecolumn",label:"Single Column",component:Xo},{id:"sortmultiplecolumns",label:"Multiple Columns",component:Jo}]},{id:"filter",label:"Filter",component:ko},{id:"selection",label:"Selection",children:[{id:"selectionsingle",label:"Single",component:qo},{id:"selectionmultiple",label:"Multiple",component:Go},{id:"checkbox",label:"Checkbox",component:jo},{id:"events",label:"Events",component:Wo}]},{id:"columngroup",label:"Column Group",component:xo},{id:"lazyload",label:"Lazy Load",component:$o},{id:"scroll",label:"Scroll",children:[{id:"vertical",label:"Vertical",component:Uo},{id:"flexible",label:"Flexible",component:Po},{id:"horizontal",label:"Horizontal",component:Ho},{id:"frozencolumns",label:"Frozen Columns",component:Ao}]},{id:"columnresize",label:"Column Resize",children:[{id:"fitmode",label:"Fit Mode",component:No},{id:"expandmode",label:"Expand Mode",component:Do},{id:"scrollable",label:"Scrollable",component:Eo}]},{id:"reorder",label:"Reorder",component:Bo},{id:"columntoggle",label:"Column Toggle",component:Io},{id:"conditionalstyle",label:"Conditional Style",component:zo},{id:"contextmenu",label:"Context Menu",component:Fo},{id:"accessibility",label:"Accessibility",component:ho}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=y({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TreeTable Component","header","TreeTable","description","TreeTable is used to display hierarchical data in tabular format.","themeDocs","treetable",3,"docs","apiDocs"]],template:function(o,i){o&1&&u(0,"app-doc",0),o&2&&s("docs",i.docs)("apiDocs",T(2,gc))},dependencies:[ei,po],encapsulation:2})}return t})();var v0=[{path:"",component:ti}];export{v0 as default};
