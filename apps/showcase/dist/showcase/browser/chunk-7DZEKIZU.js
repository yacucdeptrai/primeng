import{a as fe,b as ge,c as ve,d as xe}from"./chunk-INLKTFEM.js";import{a as S,b as pe}from"./chunk-SZJEMZIE.js";import{a as le,d as me,e as se,w as ce}from"./chunk-AS6SXM6A.js";import"./chunk-K3W3SKUQ.js";import{b as re}from"./chunk-F4X3V2LA.js";import"./chunk-OI76OXDY.js";import"./chunk-7T6NUUXL.js";import"./chunk-JMD2YF5E.js";import"./chunk-AKIDLCU7.js";import"./chunk-6FFJRHC4.js";import"./chunk-EHIVA7EC.js";import"./chunk-UCQ46N6K.js";import{a as J}from"./chunk-EJPFCX63.js";import{a as ee,b as te}from"./chunk-DZDZ3TKY.js";import"./chunk-VHOAM5CB.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as u,d as ue,e as $}from"./chunk-I6RUY6VJ.js";import{a as g,b as de}from"./chunk-CIUCWEWU.js";import{u as ne,v as ae}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{$ as ie,aa as y,ba as oe}from"./chunk-DEL7GGHP.js";import{i as Y}from"./chunk-UHCZASEU.js";import{qa as Z}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as q,m as W,u as F}from"./chunk-O4W5DSIC.js";import{Ab as m,Hb as C,Ka as w,Mb as f,Mc as L,O as U,Ob as h,Qa as p,Sb as M,Tb as k,Ub as I,X as x,Xb as Q,Y as b,Yb as X,Za as j,ac as i,bc as s,cc as z,eb as d,fb as K,kb as D,kc as H,lc as B,ub as N,vb as R,wb as G,xb as l,yb as e,zb as t,zc as A}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var be=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["popover-accessibility-doc"]],standalone:!1,decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),t(),e(4,"p"),i(5," Popover component uses "),e(6,"i"),i(7,"dialog"),t(),i(8," role and since any attribute is passed to the root element you may define attributes like "),e(9,"i"),i(10,"aria-label"),t(),i(11," or "),e(12,"i"),i(13,"aria-labelledby"),t(),i(14," to describe the popup contents. In addition "),e(15,"i"),i(16,"aria-modal"),t(),i(17," is added since focus is kept within the popup. "),t(),e(18,"p"),i(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(20,"i"),i(21,"tabIndex"),t(),i(22," would be necessary. Popover adds "),e(23,"i"),i(24,"aria-expanded"),t(),i(25," state attribute and "),e(26,"i"),i(27,"aria-controls"),t(),i(28," to the trigger so that the relation between the trigger and the popup is defined. "),t(),e(29,"h3"),i(30,"Popover Keyboard Support"),t(),e(31,"p"),i(32," When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),e(33,"i"),i(34,"autofocus"),t(),i(35," to an element within the popup. "),t(),e(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),i(41,"Key"),t(),e(42,"th"),i(43,"Function"),t()()(),e(44,"tbody")(45,"tr")(46,"td")(47,"i"),i(48,"tab"),t()(),e(49,"td"),i(50,"Moves focus to the next the focusable element within the popup."),t()(),e(51,"tr")(52,"td")(53,"i"),i(54,"shift"),t(),i(55," + "),e(56,"i"),i(57,"tab"),t()(),e(58,"td"),i(59,"Moves focus to the previous the focusable element within the popup."),t()(),e(60,"tr")(61,"td")(62,"i"),i(63,"escape"),t()(),e(64,"td"),i(65,"Closes the popup and moves focus to the trigger."),t()()()()(),e(66,"h3"),i(67,"Close Button Keyboard Support"),t(),e(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),i(73,"Key"),t(),e(74,"th"),i(75,"Function"),t()()(),e(76,"tbody")(77,"tr")(78,"td")(79,"i"),i(80,"enter"),t()(),e(81,"td"),i(82,"Closes the popup and moves focus to the trigger."),t()(),e(83,"tr")(84,"td")(85,"i"),i(86,"space"),t()(),e(87,"td"),i(88,"Closes the popup and moves focus to the trigger."),t()()()()()()())},dependencies:[u],encapsulation:2})}return r})();function Pe(r,v){if(r&1&&(e(0,"li",11),m(1,"img",13),e(2,"div")(3,"span",14),i(4),t(),e(5,"div",15),i(6),t()(),e(7,"div",16)(8,"span"),i(9),t(),m(10,"i",17),t()()),r&2){let o=v.$implicit;p(),l("src","https://primefaces.org/cdn/primeng/images/demo/avatar/"+o.image,w),p(3),s(o.name),p(2),s(o.email),p(3),s(o.role)}}var he=(()=>{class r{members=[{name:"Amy Elsner",image:"amyelsner.png",email:"amy@email.com",role:"Owner"},{name:"Bernardo Dominic",image:"bernardodominic.png",email:"bernardo@email.com",role:"Editor"},{name:"Ioni Bowcher",image:"ionibowcher.png",email:"ioni@email.com",role:"Viewer"}];code={basic:`<p-button (click)="op.toggle($event)" icon="pi pi-share-alt" label="Share" />
<p-popover #op>
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Share this document</span>
            <p-inputgroup>
                <input pInputText value="https://primeng.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]" />
                <p-inputgroup-addon>
                    <i class="pi pi-copy"></i>
                </p-inputgroup-addon>
            </p-inputgroup>
        </div>
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Invite Member</span>
            <div class="flex">
                <p-inputgroup>
                    <input pInputText disabled />
                    <button pButton label="Invite" icon="pi pi-users"></button>
                </p-inputgroup>
            </div>
        </div>
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                @for(member of members; track member) {
                <li class="flex items-center gap-2">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-muted-color">{{ member.email }}</div>
                    </div>
                    <div class="flex items-center gap-2 text-muted-color ml-auto text-sm">
                        <span>{{ member.role }}</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
                }
            </ul>
        </div>
    </div>
</p-popover>`,html:`<div class="card flex justify-center">
    <p-button (click)="op.toggle($event)" icon="pi pi-share-alt" label="Share" />
    <p-popover #op>
        <div class="flex flex-col gap-4 w-[25rem]">
            <div>
                <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Share this document</span>
                <p-inputgroup>
                    <input pInputText value="https://primeng.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]" />
                    <p-inputgroup-addon>
                        <i class="pi pi-copy"></i>
                    </p-inputgroup-addon>
                </p-inputgroup>
            </div>
            <div>
                <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Invite Member</span>
                <div class="flex">
                    <p-inputgroup>
                        <input pInputText disabled />
                        <button pButton label="Invite" icon="pi pi-users"></button>
                    </p-inputgroup>
                </div>
            </div>
            <div>
                <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Team Members</span>
                <ul class="list-none p-0 m-0 flex flex-col gap-4">
                    @for(member of members; track member) {
                    <li class="flex items-center gap-2">
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                        <div>
                            <span class="font-medium">{{ member.name }}</span>
                            <div class="text-sm text-muted-color">{{ member.email }}</div>
                        </div>
                        <div class="flex items-center gap-2 text-muted-color ml-auto text-sm">
                            <span>{{ member.role }}</span>
                            <i class="pi pi-angle-down"></i>
                        </div>
                    </li>
                    }
                </ul>
            </div>
        </div>
    </p-popover>
</div>`,typescript:`import { Component } from '@angular/core';
import { Popover } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'popover-basic-demo',
    templateUrl: './popover-basic-demo.html',
    standalone: true,
    imports: [Popover, InputGroup, InputGroupAddonModule, ButtonModule, InputTextModule, CommonModule]
})
export class PopoverBasicDemo {
    members = [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
    ];
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["basic-doc"]],standalone:!1,decls:38,vars:1,consts:[["op",""],[1,"card","flex","justify-center"],["icon","pi pi-share-alt","label","Share",3,"click"],[1,"flex","flex-col","gap-4","w-[25rem]"],[1,"font-medium","text-surface-900","dark:text-surface-0","block","mb-2"],["pInputText","","value","https://primeng.org/12323ff26t2g243g423g234gg52hy25XADXAG3","readonly","",1,"w-[25rem]"],[1,"pi","pi-copy"],[1,"flex"],["pInputText","","disabled",""],["pButton","","label","Invite","icon","pi pi-users"],[1,"list-none","p-0","m-0","flex","flex-col","gap-4"],[1,"flex","items-center","gap-2"],["selector","popover-basic-demo",3,"code"],[2,"width","32px",3,"src"],[1,"font-medium"],[1,"text-sm","text-muted-color"],[1,"flex","items-center","gap-2","text-muted-color","ml-auto","text-sm"],[1,"pi","pi-angle-down"]],template:function(n,a){if(n&1){let c=C();e(0,"app-docsectiontext")(1,"p"),i(2,"Popover is accessed via its reference and visibility is controlled using "),e(3,"i"),i(4,"toggle"),t(),i(5,", "),e(6,"i"),i(7,"show"),t(),i(8," and "),e(9,"i"),i(10,"hide"),t(),i(11," methods with an event of the target."),t()(),e(12,"div",1)(13,"p-button",2),f("click",function(_e){x(c);let Ee=Q(15);return b(Ee.toggle(_e))}),t(),e(14,"p-popover",null,0)(16,"div",3)(17,"div")(18,"span",4),i(19,"Share this document"),t(),e(20,"p-inputgroup"),m(21,"input",5),e(22,"p-inputgroup-addon"),m(23,"i",6),t()()(),e(24,"div")(25,"span",4),i(26,"Invite Member"),t(),e(27,"div",7)(28,"p-inputgroup"),m(29,"input",8)(30,"button",9),t()()(),e(31,"div")(32,"span",4),i(33,"Team Members"),t(),e(34,"ul",10),R(35,Pe,11,4,"li",11,N),t()()()()(),m(37,"app-code",12)}n&2&&(p(35),G(a.members),p(2),l("code",a.code))},dependencies:[g,S,ie,y,u,fe,ve,ne],encapsulation:2})}return r})();var Me=["op"],ke=()=>({"min-width":"50rem"});function Ie(r,v){r&1&&(e(0,"tr")(1,"th",8),i(2,"Id"),t(),e(3,"th",8),i(4,"Code"),t(),e(5,"th",8),i(6,"Name"),t(),e(7,"th",9),i(8,"Price "),m(9,"p-sortIcon",10),t(),e(10,"th",8),i(11,"Image"),t(),e(12,"th",8),i(13,"Details"),t()())}function Be(r,v){if(r&1){let o=C();e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),m(10,"img",11),t(),e(11,"td")(12,"p-button",12),f("onClick",function(a){let c=x(o).$implicit,T=h();return b(T.displayProduct(a,c))}),t()()()}if(r&2){let o=v.$implicit;p(2),s(o.id),p(2),s(o.code),p(2),s(o.name),p(2),z("$ ",o.price),p(2),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+o.image,w)("alt",o.image)}}function Ae(r,v){if(r&1){let o=C();e(0,"div",14)(1,"div",15)(2,"div",16),m(3,"img",17)(4,"p-tag",18),t()(),e(5,"div",19)(6,"div",20)(7,"div")(8,"span",21),i(9),t(),e(10,"div",22),i(11),t()(),e(12,"div",23)(13,"div",24)(14,"span",25),i(15),t(),m(16,"i",26),t()()(),e(17,"div",27)(18,"p-button",28),f("onClick",function(){x(o);let a=h(2);return b(a.hidePopover())}),t(),e(19,"p-button",29),f("onClick",function(){x(o);let a=h(2);return b(a.hidePopover())}),t()()()()}if(r&2){let o=h(2);p(3),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+o.selectedProduct.image,w)("alt",o.selectedProduct.name),p(),X("left",4,"px")("top",4,"px"),l("value",o.selectedProduct.inventoryStatus)("severity",o.getSeverity(o.selectedProduct)),p(5),s(o.selectedProduct.category),p(2),s(o.selectedProduct.name),p(4),s(o.selectedProduct.rating),p(3),l("label","Buy Now | $"+o.selectedProduct.price)("disabled",o.selectedProduct.inventoryStatus==="OUTOFSTOCK")}}function Fe(r,v){if(r&1&&D(0,Ae,20,13,"div",13),r&2){let o=h();l("ngIf",o.selectedProduct)}}var ye=(()=>{class r{productService;cdr;constructor(o,n){this.productService=o,this.cdr=n}op;products;selectedProduct;ngOnInit(){this.productService.getProductsSmall().then(o=>{this.products=o,this.cdr.markForCheck()})}code={basic:`<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [paginator]="true" [rows]="5">
    <ng-template #header>
        <tr>
            <th class="w-1/6">Id</th>
            <th class="w-1/6">Code</th>
            <th class="w-1/6">Name</th>
            <th class="w-1/6" pSortableColumn="price">Price <p-sortIcon field="price" /></th>
            <th class="w-1/6">Image</th>
            <th class="w-1/6">Details</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>$ {{ product.price }}</td>
            <td>
                <img
                    [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                    [alt]="product.image"
                    class="w-16 shadow-sm"
                />
            </td>
            <td>
                <p-button (onClick)="displayProduct($event, product)" icon="pi pi-search" severity="secondary" rounded />
            </td>
        </tr>
    </ng-template>
</p-table>
<p-popover #op (onHide)="selectedProduct = null">
    <ng-template #content>
        <div *ngIf="selectedProduct" class="rounded flex flex-col">
            <div class="flex justify-center rounded">
                <div class="relative mx-auto">
                    <img
                        class="rounded w-44 sm:w-64"
                        [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + selectedProduct.image"
                        [alt]="selectedProduct.name"
                    />
                    <p-tag
                        [value]="selectedProduct.inventoryStatus"
                        [severity]="getSeverity(selectedProduct)"
                        class="absolute"
                        styleClass="dark:!bg-surface-900"
                        [style.left.px]="4"
                        [style.top.px]="4"
                    />
                </div>
            </div>
            <div class="pt-4">
                <div class="flex flex-row justify-between items-start gap-2 mb-4">
                    <div>
                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                            selectedProduct.category
                        }}</span>
                        <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                    </div>
                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                        <div
                            class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                            style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                        >
                            <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2">
                    <p-button
                        icon="pi pi-shopping-cart"
                        [label]="'Buy Now | $' + selectedProduct.price"
                        [disabled]="selectedProduct.inventoryStatus === 'OUTOFSTOCK'"
                        class="flex-auto"
                        styleClass="w-full whitespace-nowrap"
                        (onClick)="hidePopover()"
                    />
                    <p-button icon="pi pi-heart" outlined (onClick)="hidePopover()" />
                </div>
            </div>
        </div>
    </ng-template>
</p-popover>`,html:`<div class="card">
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [paginator]="true" [rows]="5">
        <ng-template #header>
            <tr>
                <th class="w-1/6">Id</th>
                <th class="w-1/6">Code</th>
                <th class="w-1/6">Name</th>
                <th class="w-1/6" pSortableColumn="price">Price <p-sortIcon field="price" /></th>
                <th class="w-1/6">Image</th>
                <th class="w-1/6">Details</th>
            </tr>
        </ng-template>
        <ng-template #body let-product>
            <tr>
                <td>{{ product.id }}</td>
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>$ {{ product.price }}</td>
                <td>
                    <img
                        [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                        [alt]="product.image"
                        class="w-16 shadow-sm"
                    />
                </td>
                <td>
                    <p-button (onClick)="displayProduct($event, product)" icon="pi pi-search" severity="secondary" rounded />
                </td>
            </tr>
        </ng-template>
    </p-table>
    <p-popover #op (onHide)="selectedProduct = null">
        <ng-template #content>
            <div *ngIf="selectedProduct" class="rounded flex flex-col">
                <div class="flex justify-center rounded">
                    <div class="relative mx-auto">
                        <img
                            class="rounded w-44 sm:w-64"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + selectedProduct.image"
                            [alt]="selectedProduct.name"
                        />
                        <p-tag
                            [value]="selectedProduct.inventoryStatus"
                            [severity]="getSeverity(selectedProduct)"
                            class="absolute"
                            styleClass="dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                </div>
                <div class="pt-4">
                    <div class="flex flex-row justify-between items-start gap-2 mb-4">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                selectedProduct.category
                            }}</span>
                            <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div
                                class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                            >
                                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <p-button
                            icon="pi pi-shopping-cart"
                            [label]="'Buy Now | $' + selectedProduct.price"
                            [disabled]="selectedProduct.inventoryStatus === 'OUTOFSTOCK'"
                            class="flex-auto"
                            styleClass="w-full whitespace-nowrap"
                            (onClick)="hidePopover()"
                        />
                        <p-button icon="pi pi-heart" outlined (onClick)="hidePopover()" />
                    </div>
                </div>
            </div>
        </ng-template>
    </p-popover>
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'popover-data-table-demo',
    templateUrl: './popover-data-table-demo.html',
    standalone: true,
    imports: [PopoverModule, TableModule, ButtonModule, TagModule],
    providers: [MessageService, ProductService]
})
export class PopoverDataTableDemo implements OnInit {

    constructor(
        private productService: ProductService,
        private cdr: ChangeDetectorRef,
    ) {}

    @ViewChild('op') op!: Popover;

    products: Product[] | undefined;

    selectedProduct: Product | undefined;

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
            this.cdr.markForCheck();
        });
    }

    displayProduct(event, product) {
        if (this.selectedProduct?.id === product.id) {
            this.op.hide();
            this.selectedProduct = null;
        } else {
            this.selectedProduct = product;
            this.op.show(event);

            if (this.op.container) {
                this.op.align();
            }
        }
    }

    hidePopover() {
        this.op.hide();
    }

    getSeverity(product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }
}`,service:["ProductService"]};displayProduct(o,n){this.selectedProduct?.id===n.id?(this.op.hide(),this.selectedProduct=null):(this.selectedProduct=n,this.op.show(o),this.op.container&&this.op.align())}hidePopover(){this.op.hide()}getSeverity(o){switch(o.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(n){return new(n||r)(j(J),j(L))};static \u0275cmp=d({type:r,selectors:[["data-table-doc"]],viewQuery:function(n,a){if(n&1&&M(Me,5),n&2){let c;k(c=I())&&(a.op=c.first)}},standalone:!1,features:[H([Z])],decls:14,vars:7,consts:[["header",""],["body",""],["op",""],["content",""],[1,"card"],[3,"value","tableStyle","paginator","rows"],[3,"onHide"],["selector","popover-data-table-demo",3,"code","extFiles"],[1,"w-1/6"],["pSortableColumn","price",1,"w-1/6"],["field","price"],[1,"w-16","shadow-sm",3,"src","alt"],["icon","pi pi-search","severity","secondary","rounded","",3,"onClick"],["class","rounded flex flex-col",4,"ngIf"],[1,"rounded","flex","flex-col"],[1,"flex","justify-center","rounded"],[1,"relative","mx-auto"],[1,"rounded","w-44","sm:w-64",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity"],[1,"pt-4"],[1,"flex","flex-row","justify-between","items-start","gap-2","mb-4"],[1,"font-medium","text-surface-500","dark:text-surface-400","text-sm"],[1,"text-lg","font-medium","mt-1"],[1,"bg-surface-100","p-1",2,"border-radius","30px"],[1,"bg-surface-0","flex","items-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"text-surface-900","font-medium","text-sm"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"flex","gap-2"],["icon","pi pi-shopping-cart","styleClass","w-full whitespace-nowrap",1,"flex-auto",3,"onClick","label","disabled"],["icon","pi pi-heart","outlined","",3,"onClick"]],template:function(n,a){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Place the Popover outside of the data iteration components to avoid rendering it multiple times."),t()(),e(3,"div",4)(4,"p-table",5),D(5,Ie,14,0,"ng-template",null,0,A)(7,Be,13,6,"ng-template",null,1,A),t(),e(9,"p-popover",6,2),f("onHide",function(){return a.selectedProduct=null}),D(11,Fe,1,1,"ng-template",null,3,A),t()(),m(13,"app-code",7)),n&2&&(p(4),l("value",a.products)("tableStyle",B(6,ke))("paginator",!0)("rows",5),p(9),l("code",a.code)("extFiles",a.extFiles))},dependencies:[W,g,S,y,le,me,se,u,ee],encapsulation:2})}return r})();var Se=(()=>{class r{code={typescript:"import { PopoverModule } from 'primeng/popover';"};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["popover-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&m(0,"app-code",0),n&2&&l("code",a.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return r})();var Oe=["op"];function Ve(r,v){if(r&1){let o=C();e(0,"li",8),f("click",function(){let a=x(o).$implicit,c=h();return b(c.selectMember(a))}),m(1,"img",9),e(2,"div")(3,"span",10),i(4),t(),e(5,"div",11),i(6),t()()()}if(r&2){let o=v.$implicit;p(),l("src","https://primefaces.org/cdn/primeng/images/demo/avatar/"+o.image,w),p(3),s(o.name),p(2),s(o.email)}}var we=(()=>{class r{op;selectedMember=null;members=[{name:"Amy Elsner",image:"amyelsner.png",email:"amy@email.com",role:"Owner"},{name:"Bernardo Dominic",image:"bernardodominic.png",email:"bernardo@email.com",role:"Editor"},{name:"Ioni Bowcher",image:"ionibowcher.png",email:"ioni@email.com",role:"Viewer"}];toggle(o){this.op.toggle(o)}selectMember(o){this.selectedMember=o,this.op.hide()}code={basic:`<p-button type="button" [label]="selectedMember ? selectedMember.name : 'Select Member'" (onClick)="toggle($event)" styleClass="min-w-48" />

<p-popover #op>
    <div class="flex flex-col gap-4">
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col">
                <li *ngFor="let member of members" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" (click)="selectMember(member)">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</p-popover>`,html:`<div class="card flex justify-center">
    <p-button type="button" [label]="selectedMember ? selectedMember.name : 'Select Member'" (onClick)="toggle($event)" styleClass="min-w-48" />

    <p-popover #op>
        <div class="flex flex-col gap-4">
            <div>
                <span class="font-medium block mb-2">Team Members</span>
                <ul class="list-none p-0 m-0 flex flex-col">
                    <li *ngFor="let member of members" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" (click)="selectMember(member)">
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                        <div>
                            <span class="font-medium">{{ member.name }}</span>
                            <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </p-popover>
</div>`,typescript:`import { Component, ViewChild } from '@angular/core';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'popover-basic-demo',
    templateUrl: './popover-basic-demo.html',
    standalone: true,
    imports: [PopoverModule, ButtonModule, CommonModule]
})
export class PopoverBasicDemo {
   @ViewChild('op') op!: Popover;

    selectedMember = null;

    members = [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
    ];

    toggle(event) {
        this.op.toggle(event);
    }

    selectMember(member) {
        this.selectedMember = member;
        this.op.hide();
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["basic-doc"]],viewQuery:function(n,a){if(n&1&&M(Oe,5),n&2){let c;k(c=I())&&(a.op=c.first)}},standalone:!1,decls:14,vars:3,consts:[["op",""],[1,"card","flex","justify-center"],["type","button","styleClass","min-w-48",3,"onClick","label"],[1,"flex","flex-col","gap-4"],[1,"font-medium","block","mb-2"],[1,"list-none","p-0","m-0","flex","flex-col"],["class","flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border",3,"click",4,"ngFor","ngForOf"],["selector","popover-basic-demo",3,"code"],[1,"flex","items-center","gap-2","px-2","py-3","hover:bg-emphasis","cursor-pointer","rounded-border",3,"click"],[2,"width","32px",3,"src"],[1,"font-medium"],[1,"text-sm","text-surface-500","dark:text-surface-400"]],template:function(n,a){n&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"In this sample, data is retrieved from the content inside the popover."),t()(),e(3,"div",1)(4,"p-button",2),f("onClick",function(T){return a.toggle(T)}),t(),e(5,"p-popover",null,0)(7,"div",3)(8,"div")(9,"span",4),i(10,"Team Members"),t(),e(11,"ul",5),D(12,Ve,7,3,"li",6),t()()()()(),m(13,"app-code",7)),n&2&&(p(4),l("label",a.selectedMember?a.selectedMember.name:"Select Member"),p(8),l("ngForOf",a.members),p(),l("code",a.code))},dependencies:[q,g,S,y,u],encapsulation:2})}return r})();var Ce=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=K({type:r});static \u0275inj=U({imports:[F,de,Y,pe,oe,ce,re,$,ge,xe,ae,te,$]})}return r})();var je=()=>["Popover"],De=(()=>{class r{docs=[{id:"import",label:"Import",component:Se},{id:"basic",label:"Basic",component:he},{id:"selectdata",label:"Select Data",component:we},{id:"datatable",label:"DataTable",component:ye},{id:"accessibility",label:"Accessibility",component:be}];static \u0275fac=function(n){return new(n||r)};static \u0275cmp=d({type:r,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Popover Component","header","Popover","description","Popover is a container component that can overlay other components on page.","themeDocs","popover",3,"docs","apiDocs"]],template:function(n,a){n&1&&m(0,"app-doc",0),n&2&&l("docs",a.docs)("apiDocs",B(2,je))},dependencies:[F,Ce,ue],encapsulation:2})}return r})();var $t=[{path:"",component:De}];export{$t as default};
