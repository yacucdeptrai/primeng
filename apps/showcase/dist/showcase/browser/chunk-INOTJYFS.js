import{a as y}from"./chunk-AQJ4SUWR.js";import{a as qe}from"./chunk-3U2N3Q4C.js";import{a as G,b as Pe}from"./chunk-RPICNBEK.js";import"./chunk-G3BDHYWP.js";import{c as Fe,d as X,f as J,h as $,i as ee,k as te}from"./chunk-KMVDOPWF.js";import{a as _,d as Oe,e as ie}from"./chunk-I6RUY6VJ.js";import{a as b,b as je}from"./chunk-CIUCWEWU.js";import{s as De}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import{c as O}from"./chunk-X3A3Q6RL.js";import{$ as Be,S as Re,aa as k,ba as Y}from"./chunk-DEL7GGHP.js";import{i as Le}from"./chunk-UHCZASEU.js";import{Ga as Ve,J as Te,Ja as Ae,Ka as Ie,va as Me,wa as K,x as Ee}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as ye,m as Se,p as Ce,q as ke,u as N}from"./chunk-O4W5DSIC.js";import{$b as he,Ab as s,Eb as me,Fb as ue,Gb as B,Hb as E,Mb as u,N as ne,O as H,Ob as h,Pb as fe,Qa as p,Qb as be,Qc as q,Rb as ve,Rc as _e,S as ae,Sb as Q,Tb as M,Ub as V,X as S,Y as C,Z as oe,_ as se,_b as F,ac as n,da as U,eb as m,fb as W,fc as g,gc as w,hc as x,jb as pe,kb as v,kc as ge,la as le,lc as P,ma as z,mc as we,nc as xe,rb as L,sb as de,tb as ce,xb as d,yb as t,zb as r,zc as j}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Ze=(()=>{class e{code={html:`<p-button
    icon="pi pi-arrow-right"
    (click)="visible = true"
    aria-controls="{{visible ? 'drawer' : null}}"
    aria-expanded="{{visible ? true : false}}"
></p-button>
<p-drawer
    [(visible)]="visible"
    id="drawer"
    (onHide)="visible = false"
    role="region"
>
    content
</p-drawer>`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["drawer-accessibility-doc"]],standalone:!1,decls:86,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),r(),t(3,"p"),n(4," Drawer component uses "),t(5,"i"),n(6,"complementary"),r(),n(7," role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like "),t(8,"i"),n(9,"aria-labelledby"),r(),n(10," can be added. In addition "),t(11,"i"),n(12,"aria-modal"),r(),n(13," is added since focus is kept within the drawer when opened. "),r(),t(14,"p"),n(15," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(16,"i"),n(17,"tabIndex"),r(),n(18," would be necessary. "),r(),t(19,"p"),n(20,"Trigger element also requires "),t(21,"i"),n(22,"aria-expanded"),r(),n(23," and "),t(24,"i"),n(25,"aria-controls"),r(),n(26," to be handled explicitly."),r(),s(27,"app-code",0),t(28,"h3"),n(29,"Overlay Keyboard Support"),r(),t(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),n(35,"Key"),r(),t(36,"th"),n(37,"Function"),r()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"i"),n(42,"tab"),r()(),t(43,"td"),n(44,"Moves focus to the next the focusable element within the drawer."),r()(),t(45,"tr")(46,"td")(47,"i"),n(48,"shift"),r(),n(49," + "),t(50,"i"),n(51,"tab"),r()(),t(52,"td"),n(53,"Moves focus to the previous the focusable element within the drawer."),r()(),t(54,"tr")(55,"td")(56,"i"),n(57,"escape"),r()(),t(58,"td"),n(59,"Closes the dialog if "),t(60,"i"),n(61,"closeOnEscape"),r(),n(62," is true."),r()()()()(),t(63,"h3"),n(64,"Close Button Keyboard Support"),r(),t(65,"div",1)(66,"table",2)(67,"thead")(68,"tr")(69,"th"),n(70,"Key"),r(),t(71,"th"),n(72,"Function"),r()()(),t(73,"tbody")(74,"tr")(75,"td")(76,"i"),n(77,"enter"),r()(),t(78,"td"),n(79,"Closes the drawer."),r()(),t(80,"tr")(81,"td")(82,"i"),n(83,"space"),r()(),t(84,"td"),n(85,"Closes the drawer."),r()()()()()()),o&2&&(p(27),d("code",a.code)("hideToggleCode",!0))},dependencies:[b,_],encapsulation:2})}return e})();var He=(()=>{class e{visible=!1;code={basic:`<p-drawer [(visible)]="visible" header="Drawer">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-arrow-right" />`,html:`<div class="card flex justify-center">
    <p-drawer [(visible)]="visible" header="Drawer">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-arrow-right" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-basic-demo',
    templateUrl: './drawer-basic-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerBasicDemo {
    visible: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","drawer-basic-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),n(2,"Drawer is used as a container and visibility is controlled with a binding to "),t(3,"i"),n(4,"visible"),r(),n(5,"."),r()(),t(6,"div",0)(7,"p-drawer",1),x("visibleChange",function(c){return w(a.visible,c)||(a.visible=c),c}),t(8,"p"),n(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(10,"p-button",2),u("click",function(){return a.visible=!0}),r()(),s(11,"app-code",3)),o&2&&(p(7),g("visible",a.visible),p(4),d("code",a.code))},dependencies:[b,k,_,y],encapsulation:2})}return e})();var $e=({dt:e})=>`

.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

/* PrimeVue animations

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
*/

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {

    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}
`,et={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},tt={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},re=(()=>{class e extends Ve{name="drawer";theme=$e;classes=tt;inlineStyles=et;static \u0275fac=(()=>{let i;return function(a){return(i||(i=z(e)))(a||e)}})();static \u0275prov=ne({token:e,factory:e.\u0275fac})}return e})();var it=["maskRef"],rt=["container"],nt=["closeButton"],at=["*"],ot=(e,f)=>({transform:e,transition:f}),st=e=>({value:"visible",params:e});function lt(e,f){e&1&&B(0)}function pt(e,f){if(e&1&&v(0,lt,1,0,"ng-container",4),e&2){let i=h(2);d("ngTemplateOutlet",i.headlessTemplate||i._headlessTemplate)}}function dt(e,f){e&1&&B(0)}function ct(e,f){e&1&&s(0,"TimesIcon"),e&2&&L("data-pc-section","closeicon")}function mt(e,f){}function ut(e,f){e&1&&v(0,mt,0,0,"ng-template")}function ft(e,f){if(e&1&&(t(0,"span",10),v(1,ut,1,0,null,4),r()),e&2){let i=h(4);L("data-pc-section","closeicon"),p(),d("ngTemplateOutlet",i.closeIconTemplate||i._closeIconTemplate)}}function bt(e,f){if(e&1){let i=E();t(0,"p-button",8),u("onClick",function(a){S(i);let l=h(3);return C(l.close(a))})("keydown.enter",function(a){S(i);let l=h(3);return C(l.close(a))}),v(1,ct,1,1,"TimesIcon",7)(2,ft,2,2,"span",9),r()}if(e&2){let i=h(3);d("ngClass",i.cx("closeButton"))("buttonProps",i.closeButtonProps)("ariaLabel",i.ariaCloseLabel),L("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),p(),d("ngIf",!i.closeIconTemplate&&!i._closeIconTemplate),p(),d("ngIf",i.closeIconTemplate||i._closeIconTemplate)}}function vt(e,f){e&1&&B(0)}function ht(e,f){e&1&&B(0)}function gt(e,f){if(e&1&&(me(0),t(1,"div",5),v(2,ht,1,0,"ng-container",4),r(),ue()),e&2){let i=h(3);p(),d("ngClass",i.cx("footer")),L("data-pc-section","footer"),p(),d("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}function wt(e,f){if(e&1&&(t(0,"div",5),v(1,dt,1,0,"ng-container",4)(2,bt,3,7,"p-button",6),r(),t(3,"div",5),be(4),v(5,vt,1,0,"ng-container",4),r(),v(6,gt,3,3,"ng-container",7)),e&2){let i=h(2);d("ngClass",i.cx("header")),L("data-pc-section","header"),p(),d("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),p(),d("ngIf",i.showCloseIcon),p(),d("ngClass",i.cx("content")),L("data-pc-section","content"),p(2),d("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),p(),d("ngIf",i.footerTemplate||i._footerTemplate)}}function xt(e,f){if(e&1){let i=E();t(0,"div",2,0),u("@panelState.start",function(a){S(i);let l=h();return C(l.onAnimationStart(a))})("@panelState.done",function(a){S(i);let l=h();return C(l.onAnimationEnd(a))})("click",function(a){S(i);let l=h();return C(l.maskClickListener(a))}),t(2,"div",3),u("keydown",function(a){S(i);let l=h();return C(l.onKeyDown(a))}),de(3,pt,1,1,"ng-container")(4,wt,7,8),r()()}if(e&2){let i=h();F(i.maskStyle),d("ngClass",i.cx("mask"))("ngStyle",i.sx("mask"))("@panelState",we(15,st,xe(12,ot,i.transformOptions,i.transitionOptions))),L("data-pc-name","mask")("data-pc-section","mask"),p(2),he(i.styleClass),d("ngClass",i.cx("root")),L("data-pc-section","root"),p(),ce(i.headlessTemplate||i._headlessTemplate?3:4)}}var _t=ee([J({transform:"{{transform}}",opacity:0}),X("{{transition}}")]),yt=ee([X("{{transition}}",J({transform:"{{transform}}",opacity:0}))]),St=(()=>{class e extends Ae{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(i){this._visible=i}get position(){return this._position}set position(i){switch(this._position=i,i){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(i){this._fullScreen=i,i&&(this.transformOptions="none")}maskStyle;onShow=new U;onHide=new U;visibleChange=new U;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;documentEscapeListener;_componentStyle=ae(re);headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;contentTemplate;templates;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}ngOnChanges(i){super.ngOnChanges(i);let o=Object.keys(i).find(a=>a.includes("Template"));o&&(this[`_${o}`]=i[o].currentValue)}ngAfterContentInit(){this.templates?.forEach(i=>{switch(i.getType()){case"content":this._contentTemplate=i.template;break;case"header":this._headerTemplate=i.template;break;case"footer":this._footerTemplate=i.template;break;case"closeicon":this._closeIconTemplate=i.template;break;case"headless":this._headlessTemplate=i.template;break;default:this._contentTemplate=i.template;break}})}onKeyDown(i){i.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&O.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(i=!0){i&&this.onHide.emit({})}close(i){this.hide(),this.visibleChange.emit(!1),i.preventDefault()}maskClickListener(i){this.dismissible&&this.close(i),this.blockScroll&&Ee(void 0)}onAnimationStart(i){i.toState==="visible"&&(this.container=i.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(i){i.toState==="void"&&(this.hide(!1),O.clear(this.container),this.unbindGlobalListeners())}appendContainer(){if(this.appendTo)return this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Te(this.appendTo,this.container)}bindDocumentEscapeListener(){let i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(i,"keydown",o=>{o.which==27&&parseInt(this.container.style.zIndex)===O.get(this.container)&&this.close(o)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindGlobalListeners(){this.unbindDocumentEscapeListener()}ngOnDestroy(){this.initialized=!1,this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&O.clear(this.container),this.container=null,this.unbindGlobalListeners(),super.ngOnDestroy()}static \u0275fac=(()=>{let i;return function(a){return(i||(i=z(e)))(a||e)}})();static \u0275cmp=m({type:e,selectors:[["p-sidebar"]],contentQueries:function(o,a,l){if(o&1&&ve(l,Me,4),o&2){let c;M(c=V())&&(a.templates=c)}},viewQuery:function(o,a){if(o&1&&Q(it,5)(rt,5)(nt,5),o&2){let l;M(l=V())&&(a.maskRef=l.first),M(l=V())&&(a.containerViewChild=l.first),M(l=V())&&(a.closeButtonViewChild=l.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",q],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",q],baseZIndex:[2,"baseZIndex","baseZIndex",_e],modal:[2,"modal","modal",q],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",q],showCloseIcon:[2,"showCloseIcon","showCloseIcon",q],closeOnEscape:[2,"closeOnEscape","closeOnEscape",q],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",maskStyle:"maskStyle",headerTemplate:"headerTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",headlessTemplate:"headlessTemplate",contentTemplate:"contentTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[ge([re]),pe,le],ngContentSelectors:at,decls:1,vars:1,consts:[["maskRef",""],[3,"ngClass","ngStyle","style","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],[3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["class","p-sidebar-close-icon",4,"ngIf"],[1,"p-sidebar-close-icon"]],template:function(o,a){o&1&&(fe(),v(0,xt,5,17,"div",1)),o&2&&d("ngIf",a.visible)},dependencies:[N,ye,Se,ke,Ce,K,Re,Y,k],encapsulation:2,data:{animation:[Fe("panelState",[$("void => visible",[te(_t)]),$("visible => void",[te(yt)])])]},changeDetection:0})}return e})(),Ue=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[St,K,K]})}return e})();var ze=(()=>{class e{visible=!1;code={basic:`<p-drawer header="Drawer" [(visible)]="visible" position="full">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-window-maximize" />`,html:`<div class="card flex justify-center">
    <p-drawer header="Drawer" [(visible)]="visible" position="full">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-window-maximize" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-full-screen-demo',
    templateUrl: './drawer-full-screen-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerFullScreenDemo {
    visible: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["full-screen-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer","position","full",3,"visibleChange","visible"],["icon","pi pi-window-maximize",3,"click"],["selector","drawer-full-screen-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),n(2,"Drawer can cover the whole page when "),t(3,"i"),n(4,"fullScreen"),r(),n(5," property is enabled."),r()(),t(6,"div",0)(7,"p-drawer",1),x("visibleChange",function(c){return w(a.visible,c)||(a.visible=c),c}),t(8,"p"),n(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(10,"p-button",2),u("click",function(){return a.visible=!0}),r()(),s(11,"app-code",3)),o&2&&(p(7),g("visible",a.visible),p(4),d("code",a.code))},dependencies:[b,k,_,y],encapsulation:2})}return e})();var kt=["drawerRef"];function Dt(e,f){if(e&1){let i=E();t(0,"div",6)(1,"div",7)(2,"span",8),oe(),t(3,"svg",9),s(4,"path",10),t(5,"mask",11),s(6,"path",12),r(),t(7,"g",13),s(8,"path",14),r(),s(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21)(16,"path",22)(17,"path",23)(18,"path",24),r(),se(),t(19,"span",25),n(20,"Your Logo"),r()(),t(21,"span")(22,"p-button",26),u("click",function(a){S(i);let l=h();return C(l.closeCallback(a))}),r()()(),t(23,"div",27)(24,"ul",28)(25,"li")(26,"div",29)(27,"span",30),n(28,"FAVORITES"),r(),s(29,"i",31),r(),t(30,"ul",32)(31,"li")(32,"a",33),s(33,"i",34),t(34,"span",30),n(35,"Dashboard"),r()()(),t(36,"li")(37,"a",33),s(38,"i",35),t(39,"span",30),n(40,"Bookmarks"),r()()(),t(41,"li")(42,"a",36),s(43,"i",37),t(44,"span",30),n(45,"Reports"),r(),s(46,"i",38),r(),t(47,"ul",39)(48,"li")(49,"a",36),s(50,"i",37),t(51,"span",30),n(52,"Revenue"),r(),s(53,"i",38),r(),t(54,"ul",39)(55,"li")(56,"a",33),s(57,"i",40),t(58,"span",30),n(59,"View"),r()()(),t(60,"li")(61,"a",33),s(62,"i",41),t(63,"span",30),n(64,"Search"),r()()()()(),t(65,"li")(66,"a",33),s(67,"i",37),t(68,"span",30),n(69,"Expenses"),r()()()()(),t(70,"li")(71,"a",33),s(72,"i",42),t(73,"span",30),n(74,"Team"),r()()(),t(75,"li")(76,"a",33),s(77,"i",43),t(78,"span",30),n(79,"Messages"),r(),t(80,"span",44),n(81,"3"),r()()(),t(82,"li")(83,"a",33),s(84,"i",45),t(85,"span",30),n(86,"Calendar"),r()()(),t(87,"li")(88,"a",33),s(89,"i",46),t(90,"span",30),n(91,"Settings"),r()()()()()(),t(92,"ul",28)(93,"li")(94,"div",29)(95,"span",30),n(96,"APPLICATION"),r(),s(97,"i",31),r(),t(98,"ul",32)(99,"li")(100,"a",33),s(101,"i",47),t(102,"span",30),n(103,"Projects"),r()()(),t(104,"li")(105,"a",33),s(106,"i",48),t(107,"span",30),n(108,"Performance"),r()()(),t(109,"li")(110,"a",33),s(111,"i",46),t(112,"span",30),n(113,"Settings"),r()()()()()()(),t(114,"div",49),s(115,"hr",50),t(116,"a",51),s(117,"p-avatar",52),t(118,"span",53),n(119,"Amy Elsner"),r()()()()}}var We=(()=>{class e{drawerRef;closeCallback(i){this.drawerRef.close(i)}visible=!1;code={basic:`<p-drawer #drawerRef [(visible)]="visible">
    <ng-template #headless>
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                        <path d="..." />
                    </svg>
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterFromClass="hidden"
                                    enterActiveClass="animate-slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="animate-slideup"
                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterFromClass="hidden"
                                            enterActiveClass="animate-slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="animate-slideup"
                                            class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                            <li>
                                                <a
                                                    pRipple
                                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    pRipple
                                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-4 mx-4 border-t border-0 border-surface" />
                <a pRipple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-bars" />`,html:`<div class="card flex justify-center">
<p-drawer #drawerRef [(visible)]="visible">
    <ng-template #headless>
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
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
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterFromClass="hidden"
                                    enterActiveClass="animate-slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="animate-slideup"
                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterFromClass="hidden"
                                            enterActiveClass="animate-slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="animate-slideup"
                                            class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                            <li>
                                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-4 mx-4 border-t border-0 border-surface" />
                <a pRipple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-bars" />
</div>`,typescript:`import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'drawer-headless-demo',
    templateUrl: './drawer-headless-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class DrawerHeadlessDemo {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["headless-doc"]],viewQuery:function(o,a){if(o&1&&Q(kt,5),o&2){let l;M(l=V())&&(a.drawerRef=l.first)}},standalone:!1,decls:12,vars:2,consts:[["drawerRef",""],["headless",""],[1,"card","flex","justify-center"],[3,"visibleChange","visible"],["icon","pi pi-bars",3,"click"],["selector","drawer-headless-demo",3,"code"],[1,"flex","flex-col","h-full"],[1,"flex","items-center","justify-between","px-6","pt-4","shrink-0"],[1,"inline-flex","items-center","gap-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"font-semibold","text-2xl","text-primary"],["type","button","icon","pi pi-times","rounded","true","outlined","true","styleClass","h-8 w-8",3,"click"],[1,"overflow-y-auto"],[1,"list-none","p-4","m-0"],["pRipple","","pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-slidedown","leaveToClass","hidden","leaveActiveClass","animate-slideup",1,"p-4","flex","items-center","justify-between","text-surface-600","dark:text-surface-200","cursor-pointer","p-ripple"],[1,"font-medium"],[1,"pi","pi-chevron-down"],[1,"list-none","p-0","m-0","overflow-hidden"],["pRipple","",1,"flex","items-center","cursor-pointer","p-4","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],[1,"pi","pi-home","mr-2"],[1,"pi","pi-bookmark","mr-2"],["pRipple","","pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-slidedown","leaveToClass","hidden","leaveActiveClass","animate-slideup",1,"flex","items-center","cursor-pointer","p-4","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],[1,"pi","pi-chart-line","mr-2"],[1,"pi","pi-chevron-down","ml-auto"],[1,"list-none","py-0","pl-4","pr-0","m-0","hidden","overflow-y-hidden","transition-all","duration-[400ms]","ease-in-out"],[1,"pi","pi-table","mr-2"],[1,"pi","pi-search","mr-2"],[1,"pi","pi-users","mr-2"],[1,"pi","pi-comments","mr-2"],[1,"inline-flex","items-center","justify-center","ml-auto","bg-primary","text-primary-contrast","rounded-full",2,"min-width","1.5rem","height","1.5rem"],[1,"pi","pi-calendar","mr-2"],[1,"pi","pi-cog","mr-2"],[1,"pi","pi-folder","mr-2"],[1,"pi","pi-chart-bar","mr-2"],[1,"mt-auto"],[1,"mb-4","mx-4","border-t","border-0","border-surface"],["pRipple","",1,"m-4","flex","items-center","cursor-pointer","p-4","gap-2","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"]],template:function(o,a){if(o&1){let l=E();t(0,"app-docsectiontext")(1,"p")(2,"i"),n(3,"Headless"),r(),n(4," mode allows you to customize the entire user interface instead of the default elements."),r()(),t(5,"div",2)(6,"p-drawer",3,0),x("visibleChange",function(T){return S(l),w(a.visible,T)||(a.visible=T),C(T)}),v(8,Dt,120,0,"ng-template",null,1,j),r(),t(10,"p-button",4),u("click",function(){return a.visible=!0}),r()(),s(11,"app-code",5)}o&2&&(p(6),g("visible",a.visible),p(5),d("code",a.code))},dependencies:[b,k,_,G,Ie,qe,y],encapsulation:2})}return e})();var Qe=(()=>{class e{code={typescript:"import { DrawerModule } from 'primeng/drawer';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["drawer-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&s(0,"app-code",0),o&2&&d("code",a.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return e})();var Ne=()=>({height:"auto"}),Ke=(()=>{class e{visible1=!1;visible2=!1;visible3=!1;visible4=!1;code={basic:`<p-drawer header="Left Drawer" [(visible)]="visible1" position="left">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Right Drawer" [(visible)]="visible2" position="right">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Top Drawer" [(visible)]="visible3" position="top" style="height: auto">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Bottom Drawer" [(visible)]="visible4" position="bottom" style="height: auto">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>
<div class="flex gap-2 justify-center">
    <p-button type="button" (click)="visible1 = true" icon="pi pi-arrow-right" />
    <p-button type="button" (click)="visible2 = true" icon="pi pi-arrow-left" />
    <p-button type="button" (click)="visible3 = true" icon="pi pi-arrow-down" />
    <p-button type="button" (click)="visible4 = true" icon="pi pi-arrow-up" />
</div>`,html:`<div class="card">
    <p-drawer header="Left Drawer" [(visible)]="visible1" position="left">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Right Drawer" [(visible)]="visible2" position="right">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Top Drawer" [(visible)]="visible3" position="top" style="height: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Bottom Drawer" [(visible)]="visible4" position="bottom" style="height: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>
    <div class="flex gap-2 justify-center">
        <p-button type="button" (click)="visible1 = true" icon="pi pi-arrow-right" />
        <p-button type="button" (click)="visible2 = true" icon="pi pi-arrow-left" />
        <p-button type="button" (click)="visible3 = true" icon="pi pi-arrow-down" />
        <p-button type="button" (click)="visible4 = true" icon="pi pi-arrow-up" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-position-demo',
    templateUrl: './drawer-position-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerPositionDemo {
    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["position-doc"]],standalone:!1,decls:37,vars:11,consts:[[1,"card"],["header","Left Drawer","position","left",3,"visibleChange","visible"],["header","Right Drawer","position","right",3,"visibleChange","visible"],["header","Top Drawer","position","top",3,"visibleChange","visible"],["header","Bottom Drawer","position","bottom",3,"visibleChange","visible"],[1,"flex","gap-2","justify-center"],["type","button","icon","pi pi-arrow-right",3,"click"],["type","button","icon","pi pi-arrow-left",3,"click"],["type","button","icon","pi pi-arrow-down",3,"click"],["type","button","icon","pi pi-arrow-up",3,"click"],["selector","drawer-position-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),n(2,"Drawer location is configured with the "),t(3,"i"),n(4,"position"),r(),n(5," property that can take "),t(6,"i"),n(7,"left"),r(),n(8,", "),t(9,"i"),n(10,"right"),r(),n(11,", "),t(12,"i"),n(13,"top"),r(),n(14," and "),t(15,"i"),n(16,"bottom"),r(),n(17," as a value."),r()(),t(18,"div",0)(19,"p-drawer",1),x("visibleChange",function(c){return w(a.visible1,c)||(a.visible1=c),c}),t(20,"p"),n(21," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(22,"p-drawer",2),x("visibleChange",function(c){return w(a.visible2,c)||(a.visible2=c),c}),t(23,"p"),n(24," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(25,"p-drawer",3),x("visibleChange",function(c){return w(a.visible3,c)||(a.visible3=c),c}),t(26,"p"),n(27," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(28,"p-drawer",4),x("visibleChange",function(c){return w(a.visible4,c)||(a.visible4=c),c}),t(29,"p"),n(30," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(31,"div",5)(32,"p-button",6),u("click",function(){return a.visible1=!0}),r(),t(33,"p-button",7),u("click",function(){return a.visible2=!0}),r(),t(34,"p-button",8),u("click",function(){return a.visible3=!0}),r(),t(35,"p-button",9),u("click",function(){return a.visible4=!0}),r()()(),s(36,"app-code",10)),o&2&&(p(19),g("visible",a.visible1),p(3),g("visible",a.visible2),p(3),F(P(9,Ne)),g("visible",a.visible3),p(3),F(P(10,Ne)),g("visible",a.visible4),p(8),d("code",a.code))},dependencies:[b,k,_,y],encapsulation:2})}return e})();var Ye=(()=>{class e{visible=!1;code={basic:`<p-drawer header="Drawer" [(visible)]="visible" styleClass="!w-full md:!w-80 lg:!w-[30rem]">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-arrow-right" />`,html:`<div class="card flex justify-center">
  <p-drawer header="Drawer" [(visible)]="visible" styleClass="!w-full md:!w-80 lg:!w-[30rem]">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-arrow-right" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-size-demo',
    templateUrl: './drawer-size-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerSizeDemo {
    visible: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["size-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer","styleClass","!w-full md:!w-80 lg:!w-[30rem]",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","drawer-size-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),n(2,"Drawer dimension can be defined with "),t(3,"i"),n(4,"style"),r(),n(5," or "),t(6,"i"),n(7,"class"),r(),n(8," properties, this responsive example utilizes Tailwind."),r()(),t(9,"div",0)(10,"p-drawer",1),x("visibleChange",function(c){return w(a.visible,c)||(a.visible=c),c}),t(11,"p"),n(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r()(),t(13,"p-button",2),u("click",function(){return a.visible=!0}),r()(),s(14,"app-code",3)),o&2&&(p(10),g("visible",a.visible),p(4),d("code",a.code))},dependencies:[b,k,_,y],encapsulation:2})}return e})();function Lt(e,f){e&1&&(t(0,"div",6),s(1,"p-avatar",7),t(2,"span",8),n(3,"Amy Elsner"),r()())}function Et(e,f){e&1&&(t(0,"div",6),s(1,"button",9)(2,"button",10),r())}var Ge=(()=>{class e{visible=!1;code={basic:`<p-drawer [(visible)]="visible" [closable]="false">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
    <ng-template #footer>
        <div class="flex items-center gap-2">
            <button pButton label="Account" icon="pi pi-user" class="w-full" outlined></button>
            <button pButton label="Logout" icon="pi pi-sign-out" class="w-full" severity="danger" text></button>
        </div>
    </ng-template>
</p-drawer>
<button pButton (click)="visible = true" icon="pi pi-plus"></button>`,html:`<div class="card flex justify-center">
    <p-drawer [(visible)]="visible" [closable]="false">
        <ng-template #header>
            <div class="flex items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
        </ng-template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
        <ng-template #footer>
            <div class="flex items-center gap-2">
                <button pButton label="Account" icon="pi pi-user" class="w-full" outlined></button>
                <button pButton label="Logout" icon="pi pi-sign-out" class="w-full" severity="danger" text></button>
            </div>
        </ng-template>
    </p-drawer>
    <button pButton (click)="visible = true" icon="pi pi-plus"></button>
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-template-demo',
    templateUrl: './drawer-template-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerTemplateDemo {
    visible: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["template-doc"]],standalone:!1,decls:22,vars:3,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],[3,"visibleChange","visible","closable"],["pButton","","icon","pi pi-plus",3,"click"],["selector","drawer-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"],["pButton","","label","Account","icon","pi pi-user","outlined","",1,"w-full"],["pButton","","label","Logout","icon","pi pi-sign-out","severity","danger","text","",1,"w-full"]],template:function(o,a){if(o&1){let l=E();t(0,"app-docsectiontext")(1,"p"),n(2,"Drawer is customizable by "),t(3,"i"),n(4,"header"),r(),n(5,", "),t(6,"i"),n(7,"content"),r(),n(8,", "),t(9,"i"),n(10,"footer"),r(),n(11," templates."),r()(),t(12,"div",2)(13,"p-drawer",3),x("visibleChange",function(T){return S(l),w(a.visible,T)||(a.visible=T),C(T)}),v(14,Lt,4,0,"ng-template",null,0,j),t(16,"p"),n(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),r(),v(18,Et,3,0,"ng-template",null,1,j),r(),t(20,"button",4),u("click",function(){return a.visible=!0}),r()(),s(21,"app-code",5)}o&2&&(p(13),g("visible",a.visible),d("closable",!1),p(8),d("code",a.code))},dependencies:[b,Be,_,G,y],encapsulation:2})}return e})();var Xe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[N,De,je,Le,Ue,Y,ie,Pe,y,ie]})}return e})();var Tt=()=>["Drawer"],Je=(()=>{class e{docs=[{id:"import",label:"Import",component:Qe},{id:"basic",label:"Basic",component:He},{id:"position",label:"Position",component:Ke},{id:"size",label:"Size",component:Ye},{id:"fullscreen",label:"Full Screen",component:ze},{id:"template",label:"Template",component:Ge},{id:"headless",label:"Headless",component:We},{id:"accessibility",label:"Accessibility",component:Ze}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Drawer Component","header","Drawer","description","Drawer is a container component displayed as an overlay.","themeDocs","drawer",3,"docs","apiDocs"]],template:function(o,a){o&1&&s(0,"app-doc",0),o&2&&d("docs",a.docs)("apiDocs",P(2,Tt))},dependencies:[Xe,Oe],encapsulation:2})}return e})();var rr=[{path:"",component:Je}];export{rr as default};
