import{a as q}from"./chunk-EB7P3FPB.js";import{a as H,b as W}from"./chunk-O3G27VMI.js";import{a as Be,b as Ne}from"./chunk-AOPLLNOY.js";import{a as Ve,b as ze}from"./chunk-WUU3QR6B.js";import{a as V}from"./chunk-LXRDKFH5.js";import{a as z}from"./chunk-XSWIBJX5.js";import{b as G}from"./chunk-43LHUBCK.js";import"./chunk-FCMSSE5W.js";import{a as U}from"./chunk-K3W3SKUQ.js";import{a as Oe,b as Le}from"./chunk-F4X3V2LA.js";import"./chunk-EHIVA7EC.js";import"./chunk-VHOAM5CB.js";import"./chunk-GSPHHRWT.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as D,d as Re,e as te}from"./chunk-I6RUY6VJ.js";import{a as F,b as Pe}from"./chunk-CIUCWEWU.js";import{e as we,j as xe,s as _e}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as M,b as Ae}from"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{e as Se,i as $}from"./chunk-UHCZASEU.js";import{Ga as Ee,Ja as Me,Ka as Fe,P as A,Q as ee,o as Te,oa as De,qa as j,va as Ce,wa as Ie}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as be,l as he,m as ke,p as ve,q as ye,u as N}from"./chunk-O4W5DSIC.js";import{$b as ue,Ab as d,Gb as X,Hb as I,Ka as w,Mb as Y,Mc as ge,N as ne,O as K,Ob as u,Qa as p,Rb as me,S as ae,Sb as ce,Tb as P,Ub as R,X as h,Xb as de,Y as k,Za as x,_b as Z,ac as n,cc as fe,da as Q,eb as g,fb as J,fc as S,gc as T,hc as E,jb as le,kb as b,kc as B,lc as v,ma as re,mc as L,rb as _,vb as se,wb as pe,xb as s,yb as a,zb as r,zc as y}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var $e=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["dock-accessibility-doc"]],standalone:!1,decls:92,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),r(),a(4,"p"),n(5," Dock component uses the "),a(6,"i"),n(7,"menu"),r(),n(8," role with the "),a(9,"i"),n(10,"aria-orientation"),r(),n(11," and the value to describe the menu can either be provided with "),a(12,"i"),n(13,"aria-labelledby"),r(),n(14," or "),a(15,"i"),n(16,"aria-label"),r(),n(17," props. Each list item has a "),a(18,"i"),n(19,"presentation"),r(),n(20," role whereas anchor elements have a "),a(21,"i"),n(22,"menuitem"),r(),n(23," role with "),a(24,"i"),n(25,"aria-label"),r(),n(26," referring to the label of the item and "),a(27,"i"),n(28,"aria-disabled"),r(),n(29," defined if the item is disabled. "),r(),a(30,"h3"),n(31,"Keyboard Support"),r(),a(32,"div",0)(33,"table",1)(34,"thead")(35,"tr")(36,"th"),n(37,"Key"),r(),a(38,"th"),n(39,"Function"),r()()(),a(40,"tbody")(41,"tr")(42,"td")(43,"i"),n(44,"tab"),r()(),a(45,"td"),n(46,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),r()(),a(47,"tr")(48,"td")(49,"i"),n(50,"shift"),r(),n(51," + "),a(52,"i"),n(53,"tab"),r()(),a(54,"td"),n(55,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),r()(),a(56,"tr")(57,"td")(58,"i"),n(59,"enter"),r()(),a(60,"td"),n(61,"Activates the focused menuitem."),r()(),a(62,"tr")(63,"td")(64,"i"),n(65,"space"),r()(),a(66,"td"),n(67,"Activates the focused menuitem."),r()(),a(68,"tr")(69,"td")(70,"i"),n(71,"down arrow"),r()(),a(72,"td"),n(73,"Moves focus to the next menuitem in vertical layout."),r()(),a(74,"tr")(75,"td")(76,"i"),n(77,"up arrow"),r()(),a(78,"td"),n(79,"Moves focus to the previous menuitem in vertical layout."),r()(),a(80,"tr")(81,"td")(82,"i"),n(83,"home"),r()(),a(84,"td"),n(85,"Moves focus to the first menuitem in horizontal layout."),r()(),a(86,"tr")(87,"td")(88,"i"),n(89,"end"),r()(),a(90,"td"),n(91,"Moves focus to the last menuitem in horizontal layout."),r()()()()()()())},dependencies:[D],encapsulation:2})}return t})();var Ze=({dt:t})=>`
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: ${t("dock.background")};
    border: 1px solid ${t("dock.border.color")};
    padding: ${t("dock.padding")};
    border-radius: ${t("dock.border.radius")};
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: ${t("dock.item.padding")};
    border-radius: ${t("dock.item.border.radius")};
}

.p-dock-item.p-focus {
    box-shadow: ${t("dock.item.focus.ring.shadow")};
    outline: ${t("dock.item.focus.ring.width")} ${t("dock.item.focus.ring.style")} ${t("dock.item.focus.ring.color")};
    outline-offset: ${t("dock.item.focus.ring.offset")};
}

.p-dock-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: ${t("dock.item.size")};
    height: ${t("dock.item.size")};
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right:dir(rtl) {
    right: auto;
    left: 0;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left:dir(rtl) {
    left: auto;
    right: 0;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`,et={root:({instance:t,props:m})=>["p-dock p-component",`p-dock-${m.position}`,{"p-dock-mobile":t.queryMatches}],listContainer:"p-dock-list-container",list:"p-dock-list",item:({instance:t,processedItem:m,id:e})=>["p-dock-item",{"p-focus":t.isItemActive(e),"p-disabled":t.disabled(m)}],itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},oe=(()=>{class t extends Ee{name="dock";theme=Ze;classes=et;static \u0275fac=(()=>{let e;return function(o){return(e||(e=re(t)))(o||t)}})();static \u0275prov=ne({token:t,factory:t.\u0275fac})}return t})();var it=["item"],ot=["list"],Ue=t=>({"p-disabled":t}),nt=()=>({exact:!1}),Ge=t=>({$implicit:t}),at=(t,m)=>m.label;function rt(t,m){if(t&1&&d(0,"span",13),t&2){let e=u(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function lt(t,m){t&1&&X(0)}function st(t,m){if(t&1&&(a(0,"a",10),b(1,rt,1,2,"span",11)(2,lt,1,0,"ng-container",12),r()),t&2){let e=u(2).$implicit,i=u();s("routerLink",e.routerLink)("queryParams",e.queryParams)("ngClass",L(17,Ue,e.disabled))("routerLinkActiveOptions",e.routerLinkActiveOptions||v(19,nt))("target",e.target)("tooltipOptions",e.tooltipOptions)("fragment",e.fragment)("queryParamsHandling",e.queryParamsHandling)("preserveFragment",e.preserveFragment)("skipLocationChange",e.skipLocationChange)("replaceUrl",e.replaceUrl)("state",e.state),_("tabindex",e.disabled||i.readonly?null:e.tabindex?e.tabindex:"-1")("aria-hidden",!0),p(),s("ngIf",e.icon&&!i.itemTemplate&&!i._itemTemplate),p(),s("ngTemplateOutlet",i.itemTemplate||i.itemTemplate)("ngTemplateOutletContext",L(20,Ge,e))}}function pt(t,m){if(t&1&&d(0,"span",13),t&2){let e=u(3).$implicit;s("ngClass",e.icon)("ngStyle",e.iconStyle)}}function mt(t,m){t&1&&X(0)}function ct(t,m){if(t&1&&(a(0,"a",14),b(1,pt,1,2,"span",11)(2,mt,1,0,"ng-container",12),r()),t&2){let e=u(2),i=e.$implicit,o=e.$index,l=u();s("tooltipPosition",i.tooltipPosition)("tooltipOptions",i.tooltipOptions)("ngClass",L(10,Ue,i.disabled))("target",i.target),_("href",i.url||null,w)("tabindex",i.disabled||o!==l.activeIndex&&l.readonly?null:i.tabindex?i.tabindex:"-1")("aria-hidden",!0),p(),s("ngIf",i.icon&&!l.itemTemplate&&!l._itemTemplate),p(),s("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",L(12,Ge,i))}}function dt(t,m){if(t&1){let e=I();a(0,"li",7),Y("click",function(o){h(e);let l=u().$implicit,c=u();return k(c.onItemClick(o,l))})("mouseenter",function(){h(e);let o=u().$index,l=u();return k(l.onItemMouseEnter(o))}),a(1,"div",8),b(2,st,3,22,"a",9)(3,ct,3,14,"ng-template",null,1,y),r()()}if(t&2){let e=de(4),i=u(),o=i.$implicit,l=i.$index,c=u();s("ngClass",c.itemClass(o,l)),_("id",c.getItemId(o,l))("aria-label",o.label)("aria-disabled",c.disabled(o))("data-pc-section","menuitem")("data-p-focused",c.isItemActive(c.getItemId(o,l)))("data-p-disabled",c.disabled(o)||!1),p(),_("data-pc-section","content"),p(),s("ngIf",c.isClickableRouterLink(o))("ngIfElse",e)}}function ut(t,m){if(t&1&&b(0,dt,5,10,"li",6),t&2){let e=m.$implicit;s("ngIf",e.visible!==!1)}}var O=(()=>{class t extends Me{cd;id;style;styleClass;model=null;position="bottom";ariaLabel;ariaLabelledBy;onFocus=new Q;onBlur=new Q;listViewChild;currentIndex;tabindex=0;focused=!1;focusedOptionIndex=-1;_componentStyle=ae(oe);get focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}constructor(e){super(),this.cd=e,this.currentIndex=-3}ngOnInit(){super.ngOnInit(),this.id=this.id||De("pn_id_")}itemTemplate;_itemTemplate;getItemId(e,i){return e&&e?.id?e.id:`${i}`}getItemProp(e,i){return e&&e.item?Te(e.item[i]):void 0}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled}isItemActive(e){return e===this.focusedOptionIndex}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(e){this.currentIndex=e,this.cd.markForCheck()}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i})}onListFocus(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onListKeyDown(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(),e.preventDefault();break}default:break}}onArrowDownKey(){let e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onArrowUpKey(){let e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(A(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)}onSpaceKey(){let e=ee(this.listViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),i=e&&ee(e,'[data-pc-section="action"]');i?i.click():e&&e.click()}findNextOptionIndex(e){let o=[...A(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(l=>l.id===e);return o>-1?o+1:0}changeFocusedOptionIndex(e){let i=A(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[o].getAttribute("id")}findPrevOptionIndex(e){let o=[...A(this.listViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(l=>l.id===e);return o>-1?o-1:0}get containerClass(){return{[`p-dock p-component  p-dock-${this.position}`]:!0}}isClickableRouterLink(e){return e.routerLink&&!e.disabled}itemClass(e,i){return{"p-dock-item":!0,"p-focus":this.isItemActive(this.getItemId(e,i)),"p-disabled":this.disabled(e)}}templates;ngAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="item"?this._itemTemplate=e.template:this._itemTemplate=e.template})}static \u0275fac=function(i){return new(i||t)(x(ge))};static \u0275cmp=g({type:t,selectors:[["p-dock"]],contentQueries:function(i,o,l){if(i&1&&me(l,it,5)(l,Ce,4),i&2){let c;P(c=R())&&(o.itemTemplate=c.first),P(c=R())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&ce(ot,5),i&2){let l;P(l=R())&&(o.listViewChild=l.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",model:"model",position:"position",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[B([oe]),le],decls:6,vars:12,consts:[["list",""],["elseBlock",""],[3,"ngClass","ngStyle"],[1,"p-dock-list-container"],["role","menu",1,"p-dock-list",3,"focus","blur","keydown","mouseleave","tabindex"],["role","menuitem",3,"ngClass"],["role","menuitem",3,"ngClass","click","mouseenter",4,"ngIf"],["role","menuitem",3,"click","mouseenter","ngClass"],[1,"p-dock-item-content"],["pRipple","","class","p-dock-item-link","pTooltip","",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf","ngIfElse"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-dock-item-icon",3,"ngClass","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dock-item-icon",3,"ngClass","ngStyle"],["pRipple","","pTooltip","",1,"p-dock-item-link",3,"tooltipPosition","tooltipOptions","ngClass","target"]],template:function(i,o){i&1&&(a(0,"div",2)(1,"div",3)(2,"ul",4,0),Y("focus",function(c){return o.onListFocus(c)})("blur",function(c){return o.onListBlur(c)})("keydown",function(c){return o.onListKeyDown(c)})("mouseleave",function(){return o.onListMouseLeave()}),se(4,ut,1,1,"li",5,at),r()()()),i&2&&(ue(o.styleClass),s("ngClass",o.containerClass)("ngStyle",o.style),_("data-pc-name","dock"),p(2),s("tabindex",o.tabindex),_("id",o.id)("aria-orientation",o.position==="bottom"||o.position==="top"?"horizontal":"vertical")("aria-activedescendant",o.focused?o.focusedOptionId:void 0)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy)("data-pc-section","menu"),p(2),pe(o.model))},dependencies:[N,be,ke,ye,ve,$,Se,Fe,Ae,M,Ie],encapsulation:2,changeDetection:0})}return t})();var ft=()=>({width:"30vw",height:"18rem"}),We=()=>({"960px":"50vw"}),gt=()=>({width:"30vw"}),bt=()=>({width:"400px"});function ht(t,m){t&1&&d(0,"i",14)}function kt(t,m){t&1&&(d(0,"i",15)(1,"i",16)(2,"i",17),a(3,"span",18),n(4,"Fri 13:07"),r(),d(5,"i",19)(6,"i",20))}function vt(t,m){if(t&1&&(a(0,"a",21),d(1,"img",22),r()),t&2){let e=m.$implicit;s("pTooltip",e.label),p(),s("alt",e.label)("src",e.icon,w)}}function yt(t,m){if(t&1&&d(0,"img",23),t&2){let e=m.$implicit;s("src",e.itemImageSrc,w)}}var Ke=(()=>{class t{galleriaService;nodeService;messageService;terminalService;displayTerminal;displayFinder;displayGalleria;dockItems;menubarItems;responsiveOptions;images;nodes;subscription;constructor(e,i,o,l){this.galleriaService=e,this.nodeService=i,this.messageService=o,this.terminalService=l}ngOnInit(){this.dockItems=[{label:"Finder",tooltipOptions:{tooltipLabel:"Finder",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/finder.svg",command:()=>{this.displayFinder=!0}},{label:"Terminal",tooltipOptions:{tooltipLabel:"Terminal",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/terminal.svg",command:()=>{this.displayTerminal=!0}},{label:"App Store",tooltipOptions:{tooltipLabel:"App Store",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/appstore.svg",command:()=>{this.messageService.add({severity:"error",summary:"An unexpected error occurred while signing in.",detail:"UNTRUSTED_CERT_TITLE",key:"tc"})}},{label:"Safari",tooltipOptions:{tooltipLabel:"Safari",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/safari.svg",command:()=>{this.messageService.add({severity:"warn",summary:"Safari has stopped working",key:"tc"})}},{label:"Photos",tooltipOptions:{tooltipLabel:"Photos",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/photos.svg",command:()=>{this.displayGalleria=!0}},{label:"GitHub",tooltipOptions:{tooltipLabel:"GitHub",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/github.svg"},{label:"Trash",tooltipOptions:{tooltipLabel:"Trash",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"https://primefaces.org/cdn/primeng/images/dock/trash.png",command:()=>{this.messageService.add({severity:"info",summary:"Empty Trash",key:"tc"})}}],this.menubarItems=[{label:"Finder",styleClass:"menubar-root"},{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit"}],this.responsiveOptions=[{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.subscription=this.terminalService.commandHandler.subscribe(e=>this.commandHandler(e)),this.galleriaService.getImages().then(e=>this.images=e),this.nodeService.getFiles().then(e=>this.nodes=e)}commandHandler(e){let i,o=e.indexOf(" "),l=o!==-1?e.substring(0,o):e;switch(l){case"date":i="Today is "+new Date().toDateString();break;case"greet":i="Hola "+e.substring(o+1)+"!";break;case"random":i=Math.floor(Math.random()*100);break;default:i="Unknown command: "+l;break}i&&this.terminalService.sendResponse(i)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}code={basic:`<p-menubar [model]="menubarItems">
    <ng-template #start>
        <i class="pi pi-apple px-2"></i>
    </ng-template>
    <ng-template #end>
        <i class="pi pi-video px-2"></i>
        <i class="pi pi-wifi px-2"></i>
        <i class="pi pi-volume-up px-2"></i>
        <span class="px-2">Fri 13:07</span>
        <i class="pi pi-search px-2"></i>
        <i class="pi pi-bars px-2"></i>
    </ng-template>
</p-menubar>
<div class="dock-window">
    <p-dock [model]="dockItems" position="bottom">
        <ng-template #item let-item>
            <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
            </a>
        </ng-template>
    </p-dock>

    <p-toast position="top-center" key="tc" />

    <p-dialog
        [(visible)]="displayFinder"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw', height: '18rem' }"
        [draggable]="false"
        [resizable]="false"
        header="Finder"
    >
        <p-tree [value]="nodes" />
    </p-dialog>

    <p-dialog
        [maximizable]="true"
        [(visible)]="displayTerminal"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw' }"
        [draggable]="false"
        [resizable]="false"
        header="Terminal"
    >
        <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
    </p-dialog>

    <p-galleria
        [(value)]="images"
        [showThumbnails]="false"
        [showThumbnailNavigators]="false"
        [showItemNavigators]="true"
        [(visible)]="displayGalleria"
        [circular]="true"
        [responsiveOptions]="responsiveOptions"
        [circular]="true"
        [fullScreen]="true"
        [containerStyle]="{ width: '400px' }"
    >
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>`,html:`<div class="card dock-demo">
   <p-menubar [model]="menubarItems">
        <ng-template #start>
            <i class="pi pi-apple px-2"></i>
        </ng-template>
        <ng-template #end>
            <i class="pi pi-video px-2"></i>
            <i class="pi pi-wifi px-2"></i>
            <i class="pi pi-volume-up px-2"></i>
            <span class="px-2">Fri 13:07</span>
            <i class="pi pi-search px-2"></i>
            <i class="pi pi-bars px-2"></i>
        </ng-template>
    </p-menubar>
    <div class="dock-window">
        <p-dock [model]="dockItems" position="bottom">
            <ng-template #item let-item>
                <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                    <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
                </a>
            </ng-template>
        </p-dock>

        <p-toast position="top-center" key="tc" />

        <p-dialog
            [(visible)]="displayFinder"
            [breakpoints]="{ '960px': '50vw' }"
            [style]="{ width: '30vw', height: '18rem' }"
            [draggable]="false"
            [resizable]="false"
            header="Finder"
        >
            <p-tree [value]="nodes" />
        </p-dialog>

        <p-dialog
            [maximizable]="true"
            [(visible)]="displayTerminal"
            [breakpoints]="{ '960px': '50vw' }"
            [style]="{ width: '30vw' }"
            [draggable]="false"
            [resizable]="false"
            header="Terminal"
        >
            <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
        </p-dialog>

        <p-galleria
            [(value)]="images"
            [showThumbnails]="false"
            [showThumbnailNavigators]="false"
            [showItemNavigators]="true"
            [(visible)]="displayGalleria"
            [circular]="true"
            [responsiveOptions]="responsiveOptions"
            [circular]="true"
            [fullScreen]="true"
            [containerStyle]="{ width: '400px' }"
        >
            <ng-template #item let-item>
                <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
            </ng-template>
        </p-galleria>
</div>`,typescript:`import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TerminalModule } from 'primeng/terminal';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { NodeService } from '@/service/nodeservice';
import { PhotoService } from '@/service/photoservice';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'dock-advanced-demo',
    templateUrl: './dock-advanced-demo.html',
    imports: [DockModule, MenubarModule, ToastModule, DialogModule, TreeModule, TerminalModule, GalleriaModule, TooltipModule],
    standalone: true,
    styles: [
        \` :host ::ng-deep {
            .dock-demo > .dock-window {
                width: 100%;
                height: 450px;
                position: relative;
                background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            }

            .dock-demo .p-menubar {
                padding: 0;
                border-radius: 0;
            }
        }\`
    ],
    providers: [MessageService, TerminalService, PhotoService, NodeService]
})
export class DockAdvancedDemo implements OnInit, OnDestroy {
    displayTerminal: boolean | undefined;

    displayFinder: boolean | undefined;

    displayGalleria: boolean | undefined;

    dockItems: MenuItem[] | undefined;

    menubarItems: any[] | undefined;

    responsiveOptions: any[] | undefined;

    images: any[] | undefined;

    nodes: any[] | undefined;

    subscription: Subscription | undefined;

    constructor(private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService) {}

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Finder',
                tooltipOptions: {
                    tooltipLabel: 'Finder',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
                command: () => {
                    this.displayFinder = true;
                }
            },
            {
                label: 'Terminal',
                tooltipOptions: {
                    tooltipLabel: 'Terminal',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/terminal.svg',
                command: () => {
                    this.displayTerminal = true;
                }
            },
            {
                label: 'App Store',
                tooltipOptions: {
                    tooltipLabel: 'App Store',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', key: 'tc' });
                }
            },
            {
                label: 'Safari',
                tooltipOptions: {
                    tooltipLabel: 'Safari',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/safari.svg',
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Safari has stopped working', key: 'tc' });
                }
            },
            {
                label: 'Photos',
                tooltipOptions: {
                    tooltipLabel: 'Photos',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
                command: () => {
                    this.displayGalleria = true;
                }
            },
            {
                label: 'GitHub',
                tooltipOptions: {
                    tooltipLabel: 'GitHub',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg'
            },
            {
                label: 'Trash',
                tooltipOptions: {
                    tooltipLabel: 'Trash',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Empty Trash', key: 'tc' });
                }
            }
        ];

        this.menubarItems = [
            {
                label: 'Finder',
                styleClass: 'menubar-root'
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit'
            }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        this.subscription = this.terminalService.commandHandler.subscribe((command) => this.commandHandler(command));

        this.galleriaService.getImages().then((data) => (this.images = data));
        this.nodeService.getFiles().then((data) => (this.nodes = data));
    }

    commandHandler(text: any) {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            this.terminalService.sendResponse(response as string);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}`,scss:`
:host ::ng-deep {
    .dock-demo > .dock-window {
            width: 100%;
            height: 450px;
            position: relative;
            background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }

        .dock-demo .p-menubar {
            padding: 0;
            border-radius: 0;
        }
}

.dark-tooltip {
    .p-tooltip {
        .p-tooltip-arrow {
            border-top-color: var(--surface-900);
        }

        .p-tooltip-text {
            background-color: var(--surface-900);
        }
    }
}`,service:["PhotoService","NodeService"]};static \u0275fac=function(i){return new(i||t)(x(z),x(V),x(j),x(H))};static \u0275cmp=g({type:t,selectors:[["dock-advanced-demo"]],standalone:!1,features:[B([j,H,z,V])],decls:34,vars:32,consts:[["start",""],["end",""],["item",""],[1,"card","dock-demo"],[3,"model"],[1,"dock-window"],["position","bottom",3,"model"],["position","top-center","key","tc"],["header","Finder",3,"visibleChange","visible","breakpoints","draggable","resizable"],[3,"value"],["header","Terminal",3,"visibleChange","maximizable","visible","breakpoints","draggable","resizable"],["welcomeMessage","Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')","prompt","primeng $"],[3,"valueChange","visibleChange","value","showThumbnails","showThumbnailNavigators","showItemNavigators","visible","circular","responsiveOptions","fullScreen","containerStyle"],["selector","dock-advanced-demo",3,"code"],[1,"pi","pi-apple","px-2"],[1,"pi","pi-video","px-2"],[1,"pi","pi-wifi","px-2"],[1,"pi","pi-volume-up","px-2"],[1,"px-2"],[1,"pi","pi-search","px-2"],[1,"pi","pi-bars","px-2"],["tooltipPosition","top",1,"p-dock-item-link",3,"pTooltip"],[2,"width","100%",3,"alt","src"],[2,"width","100%","display","block",3,"src"]],template:function(i,o){if(i&1){let l=I();a(0,"app-docsectiontext")(1,"p"),n(2," Dock requires a collection of menuitems as its "),a(3,"i"),n(4,"model"),r(),n(5,". Default location is "),a(6,"i"),n(7,"bottom"),r(),n(8," and other sides are also available when defined with the "),a(9,"i"),n(10,"position"),r(),n(11," property. Content of the dock component is defined by "),a(12,"i"),n(13,"item"),r(),n(14," template. "),r()(),a(15,"div",3)(16,"p-menubar",4),b(17,ht,1,0,"ng-template",null,0,y)(19,kt,7,0,"ng-template",null,1,y),r(),a(21,"div",5)(22,"p-dock",6),b(23,vt,2,3,"ng-template",null,2,y),r(),d(25,"p-toast",7),a(26,"p-dialog",8),E("visibleChange",function(f){return h(l),T(o.displayFinder,f)||(o.displayFinder=f),k(f)}),d(27,"p-tree",9),r(),a(28,"p-dialog",10),E("visibleChange",function(f){return h(l),T(o.displayTerminal,f)||(o.displayTerminal=f),k(f)}),d(29,"p-terminal",11),r(),a(30,"p-galleria",12),E("valueChange",function(f){return h(l),T(o.images,f)||(o.images=f),k(f)})("visibleChange",function(f){return h(l),T(o.displayGalleria,f)||(o.displayGalleria=f),k(f)}),b(31,yt,1,1,"ng-template",null,2,y),r()()(),d(33,"app-code",13)}i&2&&(p(16),s("model",o.menubarItems),p(6),s("model",o.dockItems),p(4),Z(v(27,ft)),S("visible",o.displayFinder),s("breakpoints",v(28,We))("draggable",!1)("resizable",!1),p(),s("value",o.nodes),p(),Z(v(29,gt)),s("maximizable",!0),S("visible",o.displayTerminal),s("breakpoints",v(30,We))("draggable",!1)("resizable",!1),p(2),S("value",o.images),s("showThumbnails",!1)("showThumbnailNavigators",!1)("showItemNavigators",!0),S("visible",o.displayGalleria),s("circular",!0)("responsiveOptions",o.responsiveOptions)("circular",!0)("fullScreen",!0)("containerStyle",v(31,bt)),p(3),s("code",o.code))},dependencies:[F,O,Be,Oe,G,Ve,W,q,D,M],styles:["[_nghost-%COMP%]     .dock-demo>.dock-window{width:100%;height:450px;position:relative;background-image:url(https://primefaces.org/cdn/primevue/images/dock/window.jpg);background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]     .dock-demo .p-menubar{padding:0;border-radius:0}"]})}return t})();function wt(t,m){if(t&1){let e=I();a(0,"div",7)(1,"p-radiobutton",8),E("ngModelChange",function(o){h(e);let l=u();return T(l.position,o)||(l.position=o),k(o)}),r(),a(2,"label",9),n(3),r()()}if(t&2){let e=m.$implicit,i=u();p(),s("value",e.value)("label",e.label),S("ngModel",i.position),s("inputId",e.label),p(),s("for",e.label),p(),fe(" ",e.label," ")}}function xt(t,m){if(t&1&&d(0,"img",10),t&2){let e=m.$implicit;s("pTooltip",e.label)("src",e.icon,w)("alt",e.label)}}var Qe=(()=>{class t{items;position="bottom";positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}];ngOnInit(){this.items=[{label:"Finder",icon:"https://primefaces.org/cdn/primeng/images/dock/finder.svg"},{label:"App Store",icon:"https://primefaces.org/cdn/primeng/images/dock/appstore.svg"},{label:"Photos",icon:"https://primefaces.org/cdn/primeng/images/dock/photos.svg"},{label:"Trash",icon:"https://primefaces.org/cdn/primeng/images/dock/trash.png"}]}code={basic:`<p-dock [model]="items" [position]="position">
    <ng-template #item let-item>
        <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-8">
        <div *ngFor="let pos of positionOptions" class="flex items-center">
            <p-radiobutton
                name="dock"
                [value]="pos.value"
                [label]="pos.label"
                [(ngModel)]="position"
                [inputId]="pos.label"
            />
            <label [for]="pos.label" class="ml-2"> {{ pos.label }} </label>
        </div>
    </div>
    <div class="dock-window">
        <p-dock [model]="items" [position]="position">
            <ng-template #item let-item>
                <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
            </ng-template>
        </p-dock>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { RadioButton } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'dock-basic-demo',
    templateUrl: './dock-basic-demo.html',
    styles: [
        \` .dock-window {
            width: 100%;
            height: 450px;
            position: relative;
            background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }

        .p-dock {
            z-index: 1000;
        }\`
    ],
    standalone: true,
    imports: [Dock, RadioButton, CommonModule, FormsModule, TooltipModule]
})
export class DockBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["dock-basic-demo"]],standalone:!1,decls:23,vars:4,consts:[["item",""],[1,"card"],[1,"flex","flex-wrap","gap-4","mb-8"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"dock-window"],[3,"model","position"],["selector","dock-basic-demo",3,"code"],[1,"flex","items-center"],["name","dock",3,"ngModelChange","value","label","ngModel","inputId"],[1,"ml-2",3,"for"],["tooltipPosition","top","width","100%",3,"pTooltip","src","alt"]],template:function(i,o){i&1&&(a(0,"app-docsectiontext")(1,"p"),n(2," Dock requires a collection of menuitems as its "),a(3,"i"),n(4,"model"),r(),n(5,". Default location is "),a(6,"i"),n(7,"bottom"),r(),n(8," and other sides are also available when defined with the "),a(9,"i"),n(10,"position"),r(),n(11," property. Content of the dock component is defined by "),a(12,"i"),n(13,"item"),r(),n(14," template. "),r()(),a(15,"div",1)(16,"div",2),b(17,wt,4,6,"div",3),r(),a(18,"div",4)(19,"p-dock",5),b(20,xt,1,3,"ng-template",null,0,y),r()()(),d(22,"app-code",6)),i&2&&(p(17),s("ngForOf",o.positionOptions),p(2),s("model",o.items)("position",o.position),p(3),s("code",o.code))},dependencies:[he,F,O,we,xe,U,D,M],styles:["[_nghost-%COMP%]     .dock-window{width:100%;height:450px;position:relative;background-image:url(https://primefaces.org/cdn/primeng/images/dock/window.jpg);background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]     .p-dock{z-index:1000}"]})}return t})();var Je=(()=>{class t{code={typescript:"import { DockModule } from 'primeng/dock';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["dock-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&d(0,"app-code",0),i&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[F],encapsulation:2})}return t})();var Xe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=K({imports:[N,Pe,$,O,_e,U,Ne,Le,G,ze,W,q,te,te]})}return t})();var _t=()=>["Dock","MenuItem"],Ye=(()=>{class t{docs=[{id:"import",label:"Import",component:Je},{id:"basic",label:"Basic",component:Qe},{id:"advanced",label:"Advanced",component:Ke},{id:"accessibility",label:"Accessibility",component:$e}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dock Component","header","Dock","description","Dock is a navigation component consisting of menuitems.","themeDocs","dock",3,"docs","apiDocs"]],template:function(i,o){i&1&&d(0,"app-doc",0),i&2&&s("docs",o.docs)("apiDocs",v(2,_t))},dependencies:[Xe,Re],encapsulation:2})}return t})();var Ji=[{path:"",component:Ye}];export{Ji as default};
