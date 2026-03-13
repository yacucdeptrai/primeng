import{a as f}from"./chunk-26EDZYCB.js";import{a as x}from"./chunk-EJPFCX63.js";import{a as v}from"./chunk-DZDZ3TKY.js";import{a as d,d as $,e as K}from"./chunk-I6RUY6VJ.js";import{a as S,b as U}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as g}from"./chunk-DEL7GGHP.js";import{i as R}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{p as w,u as B}from"./chunk-O4W5DSIC.js";import{Ab as l,Ka as y,Mc as T,O as A,Ob as C,Qa as s,Za as m,ac as e,bc as u,eb as p,fb as N,ic as O,kb as h,lc as b,xb as a,yb as t,zb as i,zc as E}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["carousel-accessibility-doc"]],standalone:!1,decls:153,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),t(3,"p"),e(4," Carousel uses "),t(5,"i"),e(6,"region"),i(),e(7," role and since any attribute is passed to the main container element, attributes such as "),t(8,"i"),e(9,"aria-label"),i(),e(10," and "),t(11,"i"),e(12,"aria-roledescription"),i(),e(13," can be used as well. The slides container has "),t(14,"i"),e(15,"aria-live"),i(),e(16,' attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay. '),i(),t(17,"p"),e(18," A slide has a "),t(19,"i"),e(20,"group"),i(),e(21," role with an aria-label that refers to the "),t(22,"i"),e(23,"aria.slideNumber"),i(),e(24," property of the "),t(25,"a",0),e(26,"locale"),i(),e(27," API. Similarly "),t(28,"i"),e(29,"aria.slide"),i(),e(30," is used as the "),t(31,"i"),e(32,"aria-roledescription"),i(),e(33," of the item. Inactive slides are hidden from the readers with "),t(34,"i"),e(35,"aria-hidden"),i(),e(36,". "),i(),t(37,"p"),e(38," Next and Previous navigators are button elements with "),t(39,"i"),e(40,"aria-label"),i(),e(41," attributes referring to the "),t(42,"i"),e(43,"aria.nextPageLabel"),i(),e(44," and "),t(45,"i"),e(46,"aria.firstPageLabel"),i(),e(47," properties of the "),t(48,"a",0),e(49,"locale"),i(),e(50," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),t(51,"i"),e(52,"nextButtonProps"),i(),e(53," and "),t(54,"i"),e(55,"prevButtonProps"),i(),e(56,". "),i(),t(57,"p"),e(58,"Quick navigation elements are button elements with an "),t(59,"i"),e(60,"aria-label"),i(),e(61," attribute referring to the "),t(62,"i"),e(63,"aria.pageLabel"),i(),e(64," of the "),t(65,"a",0),e(66,"locale"),i(),e(67," API. Current page is marked with "),t(68,"i"),e(69,"aria-current"),i(),e(70,"."),i(),t(71,"h3"),e(72,"Next/Prev Keyboard Support"),i(),t(73,"div",1)(74,"table",2)(75,"thead")(76,"tr")(77,"th"),e(78,"Key"),i(),t(79,"th"),e(80,"Function"),i()()(),t(81,"tbody")(82,"tr")(83,"td")(84,"i"),e(85,"tab"),i()(),t(86,"td"),e(87,"Moves focus through interactive elements in the carousel."),i()(),t(88,"tr")(89,"td")(90,"i"),e(91,"enter"),i()(),t(92,"td"),e(93,"Activates navigation."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"space"),i()(),t(98,"td"),e(99,"Activates navigation."),i()()()()(),t(100,"h3"),e(101,"Quick Navigation Keyboard Support"),i(),t(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),e(107,"Key"),i(),t(108,"th"),e(109,"Function"),i()()(),t(110,"tbody")(111,"tr")(112,"td")(113,"i"),e(114,"tab"),i()(),t(115,"td"),e(116,"Moves focus through the active slide link."),i()(),t(117,"tr")(118,"td")(119,"i"),e(120,"enter"),i()(),t(121,"td"),e(122,"Activates the focused slide link."),i()(),t(123,"tr")(124,"td")(125,"i"),e(126,"space"),i()(),t(127,"td"),e(128,"Activates the focused slide link."),i()(),t(129,"tr")(130,"td")(131,"i"),e(132,"right arrow"),i()(),t(133,"td"),e(134,"Moves focus to the next slide link."),i()(),t(135,"tr")(136,"td")(137,"i"),e(138,"left arrow"),i()(),t(139,"td"),e(140,"Moves focus to the previous slide link."),i()(),t(141,"tr")(142,"td")(143,"i"),e(144,"home"),i()(),t(145,"td"),e(146,"Moves focus to the first slide link."),i()(),t(147,"tr")(148,"td")(149,"i"),e(150,"end"),i()(),t(151,"td"),e(152,"Moves focus to the last slide link."),i()()()()()())},dependencies:[d],encapsulation:2})}return o})();var X=()=>({"left.px":5,"top.px":5});function Y(o,D){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"div",6),l(3,"img",7)(4,"p-tag",8),i()(),t(5,"div",9),e(6),i(),t(7,"div",10)(8,"div",11),e(9),i(),t(10,"span"),l(11,"p-button",12)(12,"p-button",13),i()()()),o&2){let r=D.$implicit,n=C();s(3),a("src",O("https://primefaces.org/cdn/primeng/images/demo/product/",r.image),y)("alt",r.name),s(),a("value",r.inventoryStatus)("severity",n.getSeverity(r.inventoryStatus))("ngStyle",b(9,X)),s(2),u(r.name),s(3),u("$"+r.price),s(2),a("outlined",!0)}}var L=(()=>{class o{productService;cdr;products;responsiveOptions;code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface rounded-border m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
        <ng-template let-product #item>
            <div class="border border-surface rounded-border m-2 p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ product.name }}</div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                    <span>
                        <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                        <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                    </span>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'carousel-basic-demo',
    templateUrl: './carousel-basic-demo.html',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    providers: [ProductService]
})
export class CarouselBasicDemo implements OnInit {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

       this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
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
...`,service:["ProductService"]};constructor(r,n){this.productService=r,this.cdr=n}ngOnInit(){this.productService.getProductsSmall().then(r=>{this.products=r,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]}getSeverity(r){switch(r){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger"}}extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(n){return new(n||o)(m(x),m(T))};static \u0275cmp=p({type:o,selectors:[["carousel-basic-demo"]],standalone:!1,decls:8,vars:7,consts:[["item",""],[1,"card"],[3,"value","numVisible","numScroll","circular","responsiveOptions"],["selector","carousel-basic-demo",3,"code","extFiles"],[1,"border","border-surface","rounded-border","m-2","p-4"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"w-full","rounded-border",3,"src","alt"],[1,"absolute",3,"value","severity","ngStyle"],[1,"mb-4","font-medium"],[1,"flex","justify-between","items-center"],[1,"mt-0","font-semibold","text-xl"],["icon","pi pi-heart","severity","secondary",3,"outlined"],["icon","pi pi-shopping-cart","styleClass","ml-2"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Carousel requires a collection of items as its value along with a template to render each item."),i()(),t(3,"div",1)(4,"p-carousel",2),h(5,Y,13,10,"ng-template",null,0,E),i()(),l(7,"app-code",3)),n&2&&(s(4),a("value",c.products)("numVisible",3)("numScroll",3)("circular",!1)("responsiveOptions",c.responsiveOptions),s(3),a("code",c.code)("extFiles",c.extFiles))},dependencies:[w,S,d,f,g,v],encapsulation:2})}return o})();var Z=()=>({"left.px":5,"top.px":5});function ee(o,D){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"div",6),l(3,"img",7)(4,"p-tag",8),i()(),t(5,"div",9),e(6),i(),t(7,"div",10)(8,"div",11),e(9),i(),t(10,"span"),l(11,"p-button",12)(12,"p-button",13),i()()()),o&2){let r=D.$implicit,n=C();s(3),a("src",O("https://primefaces.org/cdn/primeng/images/demo/product/",r.image),y)("alt",r.name),s(),a("value",r.inventoryStatus)("severity",n.getSeverity(r.inventoryStatus))("ngStyle",b(9,Z)),s(2),u(r.name),s(3),u("$"+r.price),s(2),a("outlined",!0)}}var q=(()=>{class o{productService;cdr;products;responsiveOptions;constructor(r,n){this.productService=r,this.cdr=n}ngOnInit(){this.productService.getProductsSmall().then(r=>{this.products=r,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]}getSeverity(r){switch(r){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger"}}code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
      <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="true" [responsiveOptions]="responsiveOptions" autoplayInterval="3000">
        <ng-template let-product #item>
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ product.name }}</div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                    <span>
                        <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                        <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                    </span>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'carousel-circular-demo',
    templateUrl: './carousel-circular-demo.html',
    standalone: true,
    imports: [Carousel, ButtonModule, Tag],
    providers: [ProductService]
})
export class CarouselCircularDemo implements OnInit{
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
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
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(n){return new(n||o)(m(x),m(T))};static \u0275cmp=p({type:o,selectors:[["carousel-circular-demo"]],standalone:!1,decls:14,vars:7,consts:[["item",""],[1,"card"],["autoplayInterval","3000",3,"value","numVisible","numScroll","circular","responsiveOptions"],["selector","carousel-circular-demo",3,"code","extFiles"],[1,"border","border-surface-200","dark:border-surface-700","rounded","m-2","p-4"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"w-full","rounded-border",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity","ngStyle"],[1,"mb-4","font-medium"],[1,"flex","justify-between","items-center"],[1,"mt-0","font-semibold","text-xl"],["icon","pi pi-heart","severity","secondary",3,"outlined"],["icon","pi pi-shopping-cart","styleClass","ml-2"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"autoplayInterval"),i(),e(5," is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling "),t(6,"i"),e(7,"circular"),i(),e(8," property needs to be added which is enabled automatically in auto play mode."),i()(),t(9,"div",1)(10,"p-carousel",2),h(11,ee,13,10,"ng-template",null,0,E),i()(),l(13,"app-code",3)),n&2&&(s(10),a("value",c.products)("numVisible",3)("numScroll",3)("circular",!0)("responsiveOptions",c.responsiveOptions),s(3),a("code",c.code)("extFiles",c.extFiles))},dependencies:[w,S,d,f,g,v],encapsulation:2})}return o})();var z=(()=>{class o{code={typescript:"import { CarouselModule } from 'primeng/carousel';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["carousel-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,c){n&1&&l(0,"app-code",0),n&2&&a("code",c.code)("hideToggleCode",!0)},dependencies:[S],encapsulation:2})}return o})();var te=()=>({"left.px":5,"top.px":5});function ie(o,D){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"div",6),l(3,"img",7)(4,"p-tag",8),i()(),t(5,"div",9),e(6),i(),t(7,"div",10)(8,"div",11),e(9),i(),t(10,"span"),l(11,"p-button",12)(12,"p-button",13),i()()()),o&2){let r=D.$implicit,n=C();s(3),a("src",O("https://primefaces.org/cdn/primeng/images/demo/product/",r.image),y)("alt",r.name),s(),a("value",r.inventoryStatus)("severity",n.getSeverity(r.inventoryStatus))("ngStyle",b(9,te)),s(2),u(r.name),s(3),u("$"+r.price),s(2),a("outlined",!0)}}var H=(()=>{class o{productService;cdr;products;responsiveOptions;constructor(r,n){this.productService=r,this.cdr=n}code={basic:`<p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="3" [numScroll]="1" [responsiveOptions]="responsiveOptions">
        <ng-template let-product #item>
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded-border" />
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ product.name }}</div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                    <span>
                        <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                        <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                    </span>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'carousel-responsive-demo',
    templateUrl: './carousel-responsive-demo.html',
    standalone: true,
    imports: [Carousel, ButtonModule, Tag],
    providers: [ProductService]
})
export class CarouselResponsiveDemo {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });


        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
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
...`,service:["ProductService"]};getSeverity(r){switch(r){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger"}}ngOnInit(){this.productService.getProductsSmall().then(r=>{this.products=r,this.cdr.detectChanges()}),this.responsiveOptions=[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]}extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(n){return new(n||o)(m(x),m(T))};static \u0275cmp=p({type:o,selectors:[["responsive-doc"]],standalone:!1,decls:29,vars:6,consts:[["item",""],[1,"card"],[3,"value","numVisible","numScroll","responsiveOptions"],["selector","carousel-responsive-demo",3,"code","extFiles"],[1,"border","border-surface-200","dark:border-surface-700","rounded","m-2","p-4"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"w-full","rounded-border",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity","ngStyle"],[1,"mb-4","font-medium"],[1,"flex","justify-between","items-center"],[1,"mt-0","font-semibold","text-xl"],["icon","pi pi-heart","severity","secondary",3,"outlined"],["icon","pi pi-shopping-cart","styleClass","ml-2"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Carousel supports specific configuration per screen size with the "),t(3,"i"),e(4,"responsiveOptions"),i(),e(5," property that takes an array of objects where each object defines the max-width "),t(6,"i"),e(7,"breakpoint"),i(),e(8,", "),t(9,"i"),e(10,"numVisible"),i(),e(11," for the number of items items per page and "),t(12,"i"),e(13,"numScroll"),i(),e(14," for number of items to scroll. When "),t(15,"i"),e(16,"responsiveOptions"),i(),e(17," is defined, the "),t(18,"i"),e(19,"numScroll"),i(),e(20," and "),t(21,"i"),e(22,"numVisible"),i(),e(23," properties of the Carousel are used as default when there is breakpoint that applies. "),i()(),t(24,"div",1)(25,"p-carousel",2),h(26,ie,13,10,"ng-template",null,0,E),i()(),l(28,"app-code",3)),n&2&&(s(25),a("value",c.products)("numVisible",3)("numScroll",1)("responsiveOptions",c.responsiveOptions),s(3),a("code",c.code)("extFiles",c.extFiles))},dependencies:[w,S,d,f,g,v],encapsulation:2})}return o})();var re=()=>({"left.px":5,"top.px":5});function oe(o,D){if(o&1&&(t(0,"div",4)(1,"div",5)(2,"div",6),l(3,"img",7)(4,"p-tag",8),i()(),t(5,"div",9),e(6),i(),t(7,"div",10)(8,"div",11),e(9),i(),t(10,"span"),l(11,"p-button",12)(12,"p-button",13),i()()()),o&2){let r=D.$implicit,n=C();s(3),a("src",O("https://primefaces.org/cdn/primeng/images/demo/product/",r.image),y)("alt",r.name),s(),a("value",r.inventoryStatus)("severity",n.getSeverity(r.inventoryStatus))("ngStyle",b(9,re)),s(2),u(r.name),s(3),u("$"+r.price),s(2),a("outlined",!0)}}var Q=(()=>{class o{productService;cdr;products;constructor(r,n){this.productService=r,this.cdr=n}ngOnInit(){this.productService.getProductsSmall().then(r=>{this.products=r,this.cdr.detectChanges()})}getSeverity(r){switch(r){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger"}}code={basic:`<p-carousel [value]="products" [numVisible]="1" [numScroll]="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center">
    <ng-template let-product #item>
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded" />
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                <span>
                    <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                    <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                </span>
            </div>
        </div>
    </ng-template>
</p-carousel>`,html:`<div class="card">
    <p-carousel [value]="products" [numVisible]="1" [numScroll]="1" orientation="vertical" verticalViewPortHeight="330px" contentClass="flex items-center">
        <ng-template let-product #item>
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" class="w-full rounded" />
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" class="absolute" styleClass="dark:!bg-surface-900" [ngStyle]="{ 'left.px': 5, 'top.px': 5 }" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ product.name }}</div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">{{ '$' + product.price }}</div>
                    <span>
                        <p-button icon="pi pi-heart" severity="secondary" [outlined]="true" />
                        <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
                    </span>
                </div>
            </div>
        </ng-template>
    </p-carousel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'carousel-vertical-demo',
    templateUrl: './carousel-vertical-demo.html',
    standalone: true,
    imports: [Carousel, ButtonModule, Tag],
    providers: [ProductService]
})
export class CarouselVerticalDemo implements OnInit {
    products: Product[] | undefined;

    responsiveOptions: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .product-item {
        .product-item-content {
            border: 1px solid var(--surface-d);
            border-radius: 3px;
            margin: .3rem;
            text-align: center;
            padding: 2rem 0;
        }

        .product-image {
            width: 50%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
        }
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
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(n){return new(n||o)(m(x),m(T))};static \u0275cmp=p({type:o,selectors:[["carousel-vertical-demo"]],standalone:!1,decls:17,vars:5,consts:[["item",""],[1,"card"],["orientation","vertical","verticalViewPortHeight","330px","contentClass","flex items-center",3,"value","numVisible","numScroll"],["selector","carousel-vertical-demo",3,"code","extFiles"],[1,"border","border-surface-200","dark:border-surface-700","rounded","m-2","p-4"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"w-full","rounded",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity","ngStyle"],[1,"mb-4","font-medium"],[1,"flex","justify-between","items-center"],[1,"mt-0","font-semibold","text-xl"],["icon","pi pi-heart","severity","secondary",3,"outlined"],["icon","pi pi-shopping-cart","styleClass","ml-2"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"To create a vertical Carousel, "),t(3,"i"),e(4,"orientation"),i(),e(5," needs to be set to "),t(6,"i"),e(7,"vertical"),i(),e(8," along with a "),t(9,"i"),e(10,"verticalViewPortHeight"),i(),e(11,"."),i()(),t(12,"div",1)(13,"p-carousel",2),h(14,oe,13,10,"ng-template",null,0,E),i()(),l(16,"app-code",3)),n&2&&(s(13),a("value",c.products)("numVisible",1)("numScroll",1),s(3),a("code",c.code)("extFiles",c.extFiles))},dependencies:[w,S,d,f,g,v],encapsulation:2})}return o})();var G=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=N({type:o});static \u0275inj=A({imports:[B,R,U,K,f,g,v,K]})}return o})();var ne=()=>["Carousel"],J=(()=>{class o{docs=[{id:"import",label:"Import",component:z},{id:"basic",label:"Basic",component:L},{id:"circular",label:"Circular",component:q},{id:"responsive",label:"Responsive",component:H},{id:"vertical",label:"Vertical",component:Q},{id:"accessibility",label:"Accessibility",component:W}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Carousel Component","header","Carousel","description","Carousel is a content slider featuring various customization options.","themeDocs","Carousel",3,"docs","apiDocs"]],template:function(n,c){n&1&&l(0,"app-doc",0),n&2&&a("docs",c.docs)("apiDocs",b(2,ne))},dependencies:[G,$],encapsulation:2})}return o})();var Ye=[{path:"",component:J}];export{Ye as default};
