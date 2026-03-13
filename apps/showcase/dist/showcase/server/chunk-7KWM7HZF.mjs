import './polyfills.server.mjs';
import"./chunk-KCPSY2PV.mjs";import{a as Q,w as _e}from"./chunk-BGUWY5AX.mjs";import"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import"./chunk-AELPXV2Z.mjs";import"./chunk-P3BSQTDP.mjs";import"./chunk-HYVLMK22.mjs";import"./chunk-AMGQPWR6.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import"./chunk-NJTPIEO6.mjs";import{a as pe}from"./chunk-VTA4L4HB.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as v,d as he,e as U}from"./chunk-HZSAMTDM.mjs";import{a as y,b as be}from"./chunk-EK6YV52O.mjs";import{u as ve,v as xe}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{$ as ge,S as ue,ba as ye,c as se,d as de}from"./chunk-DE54ZEHA.mjs";import{Ga as re,Ja as me,Ka as fe,va as O,wa as z}from"./chunk-YQJJ7I3T.mjs";import{j as ce}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as ie,n as ae,q as oe,r as le,v as S}from"./chunk-RUZVPFSZ.mjs";import{$a as G,Bb as c,Cb as i,Db as a,Dc as f,Eb as s,Ib as J,Jb as X,Kb as N,Lb as D,N as Y,O as L,Qb as h,S as W,Sa as p,Sb as g,Tb as j,Ub as T,Vb as Z,X as C,Xb as E,Y as I,Yb as w,Zc as M,da as $,dc as ee,ec as n,fc as k,gb as m,hb as R,lb as H,ma as B,mb as d,oc as te,pc as ne,qc as q,vb as P}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Ce=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["inplace-accessibility-doc"]],standalone:!1,decls:80,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,l){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),a(),i(4,"p"),n(5,"Inplace component defines "),i(6,"i"),n(7,"aria-live"),a(),n(8,' as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.'),a(),i(9,"p"),n(10," Display element uses "),i(11,"i"),n(12,"button"),a(),n(13," role in view mode by default, "),i(14,"i"),n(15,"displayProps"),a(),n(16," can be used for customizations like adding "),i(17,"i"),n(18,"aria-label"),a(),n(19," or "),i(20,"i"),n(21,"aria-labelledby"),a(),n(22," attributes to describe the content of the view mode or even overriding the default role. "),a(),i(23,"p"),n(24," Closable inplace components displays a button with an "),i(25,"i"),n(26,"aria-label"),a(),n(27," that refers to the "),i(28,"i"),n(29,"aria.close"),a(),n(30," property of the "),i(31,"a",0),n(32,"locale"),a(),n(33," API by default, you may use"),i(34,"i"),n(35,"closeButtonProps"),a(),n(36," to customize the element and override the default "),i(37,"i"),n(38,"aria-label"),a(),n(39,". "),a(),i(40,"h3"),n(41,"View Mode Keyboard Support"),a(),i(42,"div",1)(43,"table",2)(44,"thead")(45,"tr")(46,"th"),n(47,"Key"),a(),i(48,"th"),n(49,"Function"),a()()(),i(50,"tbody")(51,"tr")(52,"td")(53,"i"),n(54,"enter"),a()(),i(55,"td"),n(56,"Switches to content."),a()()()()(),i(57,"h3"),n(58,"Close Button Keyboard Support"),a(),i(59,"div",1)(60,"table",2)(61,"thead")(62,"tr")(63,"th"),n(64,"Key"),a(),i(65,"th"),n(66,"Function"),a()()(),i(67,"tbody")(68,"tr")(69,"td")(70,"i"),n(71,"enter"),a()(),i(72,"td"),n(73,"Switches to display."),a()(),i(74,"tr")(75,"td")(76,"i"),n(77,"space"),a()(),i(78,"td"),n(79,"Switches to display."),a()()()()()()())},dependencies:[v],encapsulation:2})}return e})();var Fe=({dt:e})=>`
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: ${e("inplace.padding")};
    border-radius: ${e("inplace.border.radius")};
    transition: background ${e("inplace.transition.duration")}, color ${e("inplace.transition.duration")}, outline-color ${e("inplace.transition.duration")}, box-shadow ${e("inplace.transition.duration")};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${e("inplace.display.hover.background")};
    color: ${e("inplace.display.hover.color")};
}

.p-inplace-display:focus-visible {
    box-shadow: ${e("inplace.focus.ring.shadow")};
    outline: ${e("inplace.focus.ring.width")} ${e("inplace.focus.ring.style")} ${e("inplace.focus.ring.color")};
    outline-offset: ${e("inplace.focus.ring.offset")};
}

.p-inplace-content {
    display: block;
}
`,Ve={root:"p-inplace p-component",display:({props:e})=>["p-inplace-display",{"p-disabled":e.disabled}],content:"p-inplace-content"},K=(()=>{class e extends re{name="inplace";theme=Fe;classes=Ve;static \u0275fac=(()=>{let t;return function(l){return(t||(t=B(e)))(l||e)}})();static \u0275prov=Y({token:e,factory:e.\u0275fac})}return e})();var Ie=["*"],Le=["display"],Be=["content"],Re=["closeicon"],Pe=[[["","pInplaceDisplay",""]],[["","pInplaceContent",""]]],je=["[pInplaceDisplay]","[pInplaceContent]"],qe=e=>({"p-inplace p-component":!0,"p-inplace-closable":e}),ze=e=>({"p-disabled":e}),$e=e=>({closeCallback:e});function Ne(e,r){e&1&&N(0)}function Oe(e,r){if(e&1){let t=D();i(0,"div",3),h("click",function(l){C(t);let u=g();return I(u.onActivateClick(l))})("keydown",function(l){C(t);let u=g();return I(u.onKeydown(l))}),T(1),d(2,Ne,1,0,"ng-container",4),a()}if(e&2){let t=g();c("ngClass",q(2,ze,t.disabled)),p(2),c("ngTemplateOutlet",t.displayTemplate||t._displayTemplate)}}function Qe(e,r){e&1&&N(0)}function Ue(e,r){if(e&1){let t=D();i(0,"button",10),h("click",function(l){C(t);let u=g(3);return I(u.onDeactivateClick(l))}),a()}if(e&2){let t=g(3);c("icon",t.closeIcon),P("aria-label",t.closeAriaLabel)}}function Ke(e,r){e&1&&s(0,"TimesIcon")}function Ye(e,r){}function We(e,r){e&1&&d(0,Ye,0,0,"ng-template")}function Ge(e,r){if(e&1){let t=D();i(0,"button",11),h("click",function(l){C(t);let u=g(3);return I(u.onDeactivateClick(l))}),d(1,Ke,1,0,"TimesIcon",7)(2,We,1,0,null,4),a()}if(e&2){let t=g(3);c("ngClass","p-button-icon-only"),P("aria-label",t.closeAriaLabel),p(),c("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),p(),c("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function He(e,r){if(e&1&&(J(0),d(1,Ue,1,2,"button",8)(2,Ge,3,4,"button",9),X()),e&2){let t=g(2);p(),c("ngIf",t.closeIcon),p(),c("ngIf",!t.closeIcon)}}function Je(e,r){if(e&1&&(i(0,"div",5),T(1,1),d(2,Qe,1,0,"ng-container",6)(3,He,3,2,"ng-container",7),a()),e&2){let t=g();p(2),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",q(3,$e,t.onDeactivateClick.bind(t))),p(),c("ngIf",t.closable)}}var Xe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["p-inplacedisplay"],["p-inplaceDisplay"]],ngContentSelectors:Ie,decls:1,vars:0,template:function(o,l){o&1&&(j(),T(0))},dependencies:[S],encapsulation:2})}return e})(),Ze=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["p-inplacecontent"],["p-inplaceContent"]],ngContentSelectors:Ie,decls:1,vars:0,template:function(o,l){o&1&&(j(),T(0))},dependencies:[S],encapsulation:2})}return e})(),x=(()=>{class e extends me{active=!1;closable=!1;disabled=!1;preventClick;style;styleClass;closeIcon;closeAriaLabel;onActivate=new $;onDeactivate=new $;hover;displayTemplate;contentTemplate;closeIconTemplate;_componentStyle=W(K);onActivateClick(t){this.preventClick||this.activate(t)}onDeactivateClick(t){this.preventClick||this.deactivate(t)}activate(t){this.disabled||(this.active=!0,this.onActivate.emit(t),this.cd.markForCheck())}deactivate(t){this.disabled||(this.active=!1,this.hover=!1,this.onDeactivate.emit(t),this.cd.markForCheck())}onKeydown(t){t.code==="Enter"&&(this.activate(t),t.preventDefault())}templates;_displayTemplate;_closeIconTemplate;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"display":this._displayTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(l){return(t||(t=B(e)))(l||e)}})();static \u0275cmp=m({type:e,selectors:[["p-inplace"]],contentQueries:function(o,l,u){if(o&1&&Z(u,Le,4)(u,Be,4)(u,Re,4)(u,O,4),o&2){let b;E(b=w())&&(l.displayTemplate=b.first),E(b=w())&&(l.contentTemplate=b.first),E(b=w())&&(l.closeIconTemplate=b.first),E(b=w())&&(l.templates=b)}},inputs:{active:[2,"active","active",M],closable:[2,"closable","closable",M],disabled:[2,"disabled","disabled",M],preventClick:[2,"preventClick","preventClick",M],style:"style",styleClass:"styleClass",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel"},outputs:{onActivate:"onActivate",onDeactivate:"onDeactivate"},features:[te([K]),H],ngContentSelectors:je,decls:3,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-inplace-display","tabindex","0","role","button",3,"ngClass","click","keydown",4,"ngIf"],["class","p-inplace-content",4,"ngIf"],["tabindex","0","role","button",1,"p-inplace-display",3,"click","keydown","ngClass"],[4,"ngTemplateOutlet"],[1,"p-inplace-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],["type","button","pButton","","pRipple","",3,"icon","click",4,"ngIf"],["type","button","pButton","","pRipple","",3,"ngClass","click",4,"ngIf"],["type","button","pButton","","pRipple","",3,"click","icon"],["type","button","pButton","","pRipple","",3,"click","ngClass"]],template:function(o,l){o&1&&(j(Pe),i(0,"div",0),d(1,Oe,3,4,"div",1)(2,Je,4,5,"div",2),a()),o&2&&(ee(l.styleClass),c("ngClass",q(7,qe,l.closable))("ngStyle",l.style),P("aria-live","polite"),p(),c("ngIf",!l.active),p(),c("ngIf",l.active))},dependencies:[S,ie,ae,le,oe,ye,ge,ue,z,fe],encapsulation:2,changeDetection:0})}return e})(),De=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=L({imports:[x,Ze,Xe,z,z]})}return e})();function et(e,r){e&1&&(i(0,"span"),n(1,"View Content"),a())}function tt(e,r){e&1&&(i(0,"p",4),n(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a())}var Se=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span>View Content</span>
    </ng-template>
    <ng-template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span>View Content</span>
        </ng-template>
        <ng-template #content>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';

@Component({
    selector: 'inplace-basic-demo',
    templateUrl: './inplace-basic-demo.html',
    standalone: true,
    imports: [InplaceModule]
})
export class InplaceBasicDemo {}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],standalone:!1,decls:18,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-basic-demo",3,"code"],[1,"m-0"]],template:function(o,l){o&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),n(3,"Inplace"),a(),n(4," component requires "),i(5,"i"),n(6,"display"),a(),n(7," and "),i(8,"i"),n(9,"content"),a(),n(10," templates to define the content of each state."),a()(),i(11,"div",2)(12,"p-inplace"),d(13,et,2,0,"ng-template",null,0,f)(15,tt,2,0,"ng-template",null,1,f),a()(),s(17,"app-code",3)),o&2&&(p(17),c("code",l.code))},dependencies:[y,v,x],encapsulation:2})}return e})();function nt(e,r){e&1&&(i(0,"span",4),s(1,"span",5),i(2,"span",6),n(3,"View Photo"),a()())}function it(e,r){e&1&&s(0,"img",7)}var Te=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image" style="vertical-align: middle"></span>
            <span class="ml-2">View Photo</span>
        </span>
    </ng-template>
    <ng-template #content>
        <img
            class="w-full sm:w-80 shadow-md"
            src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
            alt="Nature"
        />
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span class="inline-flex items-center gap-2">
                <span class="pi pi-image" style="vertical-align: middle"></span>
                <span class="ml-2">View Photo</span>
            </span>
        </ng-template>
        <ng-template #content>
            <img
                class="w-full sm:w-80 shadow-md"
                src="https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
                alt="Nature"
            />
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';

@Component({
    selector: 'inplace-image-demo',
    templateUrl: './inplace-image-demo.html',
    standalone: true,
    imports: [InplaceModule]
})
export class InplaceImageDemo {}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["image-doc"]],standalone:!1,decls:10,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-image-demo",3,"code"],[1,"inline-flex","items-center","gap-2"],[1,"pi","pi-image",2,"vertical-align","middle"],[1,"ml-2"],["src","https://primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg","alt","Nature",1,"w-full","sm:w-80","shadow-md"]],template:function(o,l){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Any content such as an image can be placed inside an Inplace."),a()(),i(3,"div",2)(4,"p-inplace"),d(5,nt,4,0,"ng-template",null,0,f)(7,it,1,0,"ng-template",null,1,f),a()(),s(9,"app-code",3)),o&2&&(p(9),c("code",l.code))},dependencies:[y,v,x],encapsulation:2})}return e})();var Ee=(()=>{class e{code={typescript:"import { InplaceModule } from 'primeng/inplace';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["inplace-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,l){o&1&&s(0,"app-code",0),o&2&&c("code",l.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2})}return e})();function ot(e,r){e&1&&(i(0,"span"),n(1,"Click to Edit"),a())}function lt(e,r){if(e&1){let t=D();i(0,"span",4),s(1,"input",5),i(2,"button",6),h("click",function(l){let u=C(t).closeCallback;return I(u(l))}),a()()}e&2&&(p(),c("pAutoFocus",!0))}var we=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span>Click to Edit</span>
    </ng-template>
    <ng-template #content let-closeCallback="closeCallback">
        <span class="inline-flex items-center gap-2">
            <input type="text" pInputText autofocus />
            <button (click)="closeCallback($event)" pButton icon="pi pi-times" text severity="danger"></button>
        </span>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span>Click to Edit</span>
        </ng-template>
        <ng-template #content let-closeCallback="closeCallback">
            <span class="inline-flex items-center gap-2">
                <input type="text" pInputText autofocus />
                <button (click)="closeCallback($event)" pButton icon="pi pi-times" text severity="danger"></button>
            </span>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
    selector: 'inplace-input-demo',
    templateUrl: './inplace-input-demo.html',
    standalone: true,
    imports: [InplaceModule, InputTextModule, AutoFocusModule]
})
export class InplaceInputDemo {}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["input-doc"]],standalone:!1,decls:13,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-input-demo",3,"code"],[1,"inline-flex","items-center","gap-2"],["type","text","pInputText","",3,"pAutoFocus"],["pButton","","icon","pi pi-times","text","","severity","danger",3,"click"]],template:function(o,l){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2," Inplace can be used within a form to display a value as read only before making it editable. The "),i(3,"i"),n(4,"closable"),a(),n(5," property adds a close button next to the content to switch back to read only mode. "),a()(),i(6,"div",2)(7,"p-inplace"),d(8,ot,2,0,"ng-template",null,0,f)(10,lt,3,1,"ng-template",null,1,f),a()(),s(12,"app-code",3)),o&2&&(p(12),c("code",l.code))},dependencies:[y,v,x,ve,se],encapsulation:2})}return e})();function ct(e,r){e&1&&(i(0,"span"),n(1,"View Data"),a())}function pt(e,r){e&1&&(i(0,"tr")(1,"th"),n(2,"Code"),a(),i(3,"th"),n(4,"Name"),a(),i(5,"th"),n(6,"Category"),a(),i(7,"th"),n(8,"Quantity"),a()())}function rt(e,r){if(e&1&&(i(0,"tr")(1,"td"),n(2),a(),i(3,"td"),n(4),a(),i(5,"td"),n(6),a(),i(7,"td"),n(8),a()()),e&2){let t=r.$implicit;p(2),k(t.code),p(2),k(t.name),p(2),k(t.category),p(2),k(t.quantity)}}function mt(e,r){if(e&1&&(i(0,"p-table",7),d(1,pt,9,0,"ng-template",null,2,f)(3,rt,9,4,"ng-template",null,3,f),a()),e&2){let t=g();c("value",t.products)}}var ke=(()=>{class e{productService;products;constructor(t){this.productService=t}code={basic:`<p-inplace (onActivate)="loadData()">
    <ng-template #display>
        <span>View Data</span>
    </ng-template>
    <ng-template #content>
        <p-table [value]="products" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace (onActivate)="loadData()">
        <ng-template #display>
            <span>View Data</span>
        </ng-template>
        <ng-template #content>
            <p-table [value]="products" responsiveLayout="scroll">
                <ng-template #header>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template #body let-product>
                    <tr>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { InplaceModule } from 'primeng/inplace';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'inplace-lazy-demo',
    templateUrl: './inplace-lazy-demo.html',
    standalone: true,
    imports: [InplaceModule, TableModule],
    providers: [ProductService]
})
export class InplaceLazyDemo {
    products: Product[] | undefined;

    constructor(private productService: ProductService) {}

    loadData() {
        this.productService.getProductsMini().then((products) => (this.products = products));
    }
}`,data:`
/* ProductService */
{
id: '1000',
code: 'f230fh0g3',
name: 'Bamboo Watch',
description: 'Product Description',
image: 'bamboo-watch.jpg',
price: 65,
category: 'Accessories',
quantity: 24,
inventoryStatus: 'INSTOCK',
rating: 5
},
...`,service:["ProductService"]};loadData(){this.productService.getProductsMini().then(t=>this.products=t)}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
id?: string;
code?: string;
name?: string;
description?: string;
price?: number;
quantity?: number;
inventoryStatus?: string;
category?: string;
image?: string;
rating?: number;
}`}];static \u0275fac=function(o){return new(o||e)(G(pe))};static \u0275cmp=m({type:e,selectors:[["lazy-doc"]],standalone:!1,decls:13,vars:1,consts:[["display",""],["content",""],["header",""],["body",""],[1,"card"],[3,"onActivate"],["selector","inplace-lazy-demo",3,"code"],["responsiveLayout","scroll",3,"value"]],template:function(o,l){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Using the "),i(3,"i"),n(4,"onActivate"),a(),n(5," event, data can be loaded in a lazy manner before displaying it in a table."),a()(),i(6,"div",4)(7,"p-inplace",5),h("onActivate",function(){return l.loadData()}),d(8,ct,2,0,"ng-template",null,0,f)(10,mt,5,1,"ng-template",null,1,f),a()(),s(12,"app-code",6)),o&2&&(p(12),c("code",l.code))},dependencies:[y,v,x,Q],encapsulation:2})}return e})();var Me=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=L({imports:[S,ce,be,U,De,xe,_e,de,U]})}return e})();var st=()=>["Inplace"],Ae=(()=>{class e{docs=[{id:"import",label:"Import",component:Ee},{id:"basic",label:"Basic",component:Se},{id:"input",label:"Input",component:we},{id:"image",label:"Image",component:Te},{id:"lazy",label:"Lazy",component:ke},{id:"accessibility",label:"Accessibility",component:Ce}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Inplace Component","header","Inplace","description","Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.","themeDocs","Inplace",3,"docs","apiDocs"]],template:function(o,l){o&1&&s(0,"app-doc",0),o&2&&c("docs",l.docs)("apiDocs",ne(2,st))},dependencies:[Me,he],encapsulation:2})}return e})();var Fn=[{path:"",component:Ae}];export{Fn as default};
