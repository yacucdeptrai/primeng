import{a as ae,b as se}from"./chunk-MENTEOEF.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as d,d as re,e as E}from"./chunk-I6RUY6VJ.js";import{a as f,b as ce}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import{c as _}from"./chunk-X3A3Q6RL.js";import{aa as x,ba as le}from"./chunk-DEL7GGHP.js";import{i as X}from"./chunk-UHCZASEU.js";import{Ga as ie,Ja as ne,va as te,wa as oe,x as Y,z as ee}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as G,p as J,q as W,u as v,y as C}from"./chunk-O4W5DSIC.js";import{$b as V,Ab as m,Gb as L,Mb as b,Mc as K,N as T,O as I,Pb as O,Qa as p,Qb as Z,Qc as M,Rb as j,Rc as $,S as P,Sb as Q,Tb as y,Ub as g,Xb as N,Za as A,ac as c,eb as a,fb as B,jb as F,kb as q,kc as H,lc as D,ma as w,mc as z,rb as R,xb as r,yb as n,zb as l}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var me=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-accessibility-doc"]],standalone:!1,decls:18,vars:0,template:function(t,i){t&1&&(n(0,"app-docsectiontext")(1,"h3"),c(2,"Screen Reader"),l(),n(3,"p"),c(4," BlockUI manages "),n(5,"i"),c(6,"aria-busy"),l(),c(7," state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like "),n(8,"i"),c(9,"role"),l(),c(10," and "),n(11,"i"),c(12,"aria-live"),l(),c(13," can be used to define live regions. "),l(),n(14,"h3"),c(15,"Keyboard Support"),l(),n(16,"p"),c(17,"Component does not include any interactive elements."),l()())},dependencies:[d],encapsulation:2})}return e})();var ye=({dt:e})=>`
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${e("blockui.border.radius")};
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
    position: fixed;
}
`,ge={root:"p-blockui"},U=(()=>{class e extends ie{name="blockui";theme=ye;classes=ge;static \u0275fac=(()=>{let o;return function(i){return(o||(o=w(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var De=["content"],ve=["mask"],Ce=["*"],xe=e=>({"p-blockui-mask-document":e,"p-blockui p-blockui-mask p-overlay-mask":!0}),Ie=()=>({display:"none"});function Be(e,Ee){e&1&&L(0)}var k=(()=>{class e extends ne{target;autoZIndex=!0;baseZIndex=0;styleClass;get blocked(){return this._blocked}set blocked(o){this.mask&&this.mask.nativeElement?o?this.block():this.unblock():this._blocked=o}contentTemplate;mask;_blocked=!1;animationEndListener;_componentStyle=P(U);constructor(){super()}ngAfterViewInit(){if(super.ngAfterViewInit(),this._blocked&&this.block(),this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(o=>{o.getType()==="content"?this.contentTemplate=o.template:this.contentTemplate=o.template})}block(){C(this.platformId)&&(this._blocked=!0,this.mask.nativeElement.style.display="flex",this.target?(this.target.getBlockableElement().appendChild(this.mask.nativeElement),this.target.getBlockableElement().style.position="relative"):(this.renderer.appendChild(this.document.body,this.mask.nativeElement),Y(void 0)),this.autoZIndex&&_.set("modal",this.mask.nativeElement,this.baseZIndex+this.config.zIndex.modal))}unblock(){C(this.platformId)&&this.mask&&!this.animationEndListener&&this.destroyModal()}destroyModal(){this._blocked=!1,this.mask&&C(this.platformId)&&(_.clear(this.mask.nativeElement),this.renderer.removeChild(this.el.nativeElement,this.mask.nativeElement),ee(void 0)),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.unblock(),this.destroyModal(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["p-blockUI"],["p-blockui"],["p-block-ui"]],contentQueries:function(t,i,s){if(t&1&&j(s,De,4)(s,te,4),t&2){let h;y(h=g())&&(i.contentTemplate=h.first),y(h=g())&&(i.templates=h)}},viewQuery:function(t,i){if(t&1&&Q(ve,5),t&2){let s;y(s=g())&&(i.mask=s.first)}},inputs:{target:"target",autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",$],styleClass:"styleClass",blocked:[2,"blocked","blocked",M]},features:[H([U]),F],ngContentSelectors:Ce,decls:4,vars:11,consts:[["mask",""],[3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"]],template:function(t,i){t&1&&(O(),n(0,"div",1,0),Z(2),q(3,Be,1,0,"ng-container",2),l()),t&2&&(V(i.styleClass),r("ngClass",z(8,xe,!i.target))("ngStyle",D(10,Ie)),R("aria-busy",i.blocked)("data-pc-name","blockui")("data-pc-section","root"),p(3),r("ngTemplateOutlet",i.contentTemplate||i._contentTemplate))},dependencies:[v,G,W,J,oe],encapsulation:2,changeDetection:0})}return e})();var ue=(()=>{class e{blockedPanel=!1;code={basic:`<p-button label="Block" (click)="blockedPanel = true" />
<p-button label="Unblock" (click)="blockedPanel = false" />
<p-blockui [target]="pnl" [blocked]="blockedPanel" />
<p-panel #pnl header="Header" styleClass="mt-6">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-panel>`,html:`<div class="card">
    <p-button label="Block" (click)="blockedPanel = true" />
    <p-button label="Unblock" (click)="blockedPanel = false" />
    <p-blockui [target]="pnl" [blocked]="blockedPanel" />
    <p-panel #pnl header="Header" styleClass="mt-6">
        <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </p-panel>
</div>`,typescript:`import { Component } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'block-ui-basic-demo',
    templateUrl: './block-ui-basic-demo.html',
    standalone: true,
    imports: [BlockUI, ButtonModule, PanelModule, Ripple]
})
export class BlockUiBasicDemo {
    blockedPanel: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-basic-demo"]],standalone:!1,decls:15,vars:3,consts:[["pnl",""],[1,"card"],["label","Block",3,"click"],["label","Unblock",3,"click"],[3,"target","blocked"],["header","Header","styleClass","mt-6"],[1,"m-0"],["selector","block-ui-basic-demo",3,"code"]],template:function(t,i){if(t&1&&(n(0,"app-docsectiontext")(1,"p"),c(2,"The element to block should be placed as a child of BlockUI and "),n(3,"i"),c(4,"blocked"),l(),c(5," property is required to control the state."),l()(),n(6,"div",1)(7,"p-button",2),b("click",function(){return i.blockedPanel=!0}),l(),n(8,"p-button",3),b("click",function(){return i.blockedPanel=!1}),l(),m(9,"p-blockui",4),n(10,"p-panel",5,0)(12,"p",6),c(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),l()()(),m(14,"app-code",7)),t&2){let s=N(11);p(9),r("target",s)("blocked",i.blockedPanel),p(5),r("code",i.code)}},dependencies:[f,d,ae,x,k],encapsulation:2})}return e})();var fe=(()=>{class e{cd;blockedDocument=!1;constructor(o){this.cd=o}blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1,this.cd.markForCheck()},3e3)}code={basic:'<p-blockui [blocked]="blockedDocument" />',html:`<div class="card">
    <p-blockui [blocked]="blockedDocument" />
    <p-button label="Block" (click)="blockDocument()" />
</div>`,typescript:`import { Component, ChangeDetectorRef } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'block-ui-document-demo',
    templateUrl: './block-ui-document-demo.html',
    standalone: true,
    imports: [BlockUI, ButtonModule, Ripple]
})
export class BlockUiDocumentDemo {
    blockedDocument: boolean = false;

    constructor(private cd: ChangeDetectorRef) {}

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
            this.cd.markForCheck();
        }, 3000);
    }

}`};static \u0275fac=function(t){return new(t||e)(A(K))};static \u0275cmp=a({type:e,selectors:[["block-ui-document-demo"]],standalone:!1,decls:7,vars:2,consts:[[1,"card"],[3,"blocked"],["label","Block",3,"click"],["selector","block-ui-document-demo",3,"code"]],template:function(t,i){t&1&&(n(0,"app-docsectiontext")(1,"p"),c(2,"If the target element is not specified, BlockUI blocks the document by default."),l()(),n(3,"div",0),m(4,"p-blockui",1),n(5,"p-button",2),b("click",function(){return i.blockDocument()}),l()(),m(6,"app-code",3)),t&2&&(p(4),r("blocked",i.blockedDocument),p(2),r("code",i.code))},dependencies:[f,d,x,k],encapsulation:2})}return e})();var ke=(()=>{class e{code={typescript:"import { BlockUIModule } from 'primeng/blockui';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,i){t&1&&m(0,"app-code",0),t&2&&r("code",i.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return e})();var be=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=B({type:e});static \u0275inj=I({imports:[v,X,ce,E,se,le,k,E]})}return e})();var _e=()=>["BlockUI"],he=(()=>{class e{blockedPanel=!1;blockedDocument=!1;docs=[{id:"import",label:"Import",component:ke},{id:"basic",label:"Basic",component:ue},{id:"document",label:"Document",component:fe},{id:"accessibility",label:"Accessibility",component:me}];blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1},3e3)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular BlockUI Component","header","BlockUI","description","BlockUI can either block other components or the whole page.","themeDocs","BlockUI",3,"docs","apiDocs"]],template:function(t,i){t&1&&m(0,"app-doc",0),t&2&&r("docs",i.docs)("apiDocs",D(2,_e))},dependencies:[be,re],styles:["[_nghost-%COMP%]     button{margin-right:.25em}[_nghost-%COMP%]     .p-overlay-mask-enter .pi.pi-lock{animation:_ngcontent-%COMP%_enter .15s forwards}[_nghost-%COMP%]     .p-overlay-mask-leave .pi.pi-lock{animation:_ngcontent-%COMP%_leave .15s forwards}@keyframes _ngcontent-%COMP%_enter{0%{color:transparent}to{color:var(--text-color)}}@keyframes _ngcontent-%COMP%_leave{0%{color:var(--text-color)}to{color:transparent}}"]})}return e})();var St=[{path:"",component:he}];export{St as default};
