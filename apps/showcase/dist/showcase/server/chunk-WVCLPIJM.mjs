import './polyfills.server.mjs';
import{a as f}from"./chunk-KCPSY2PV.mjs";import{a as G,w as J}from"./chunk-BGUWY5AX.mjs";import"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import"./chunk-AELPXV2Z.mjs";import"./chunk-P3BSQTDP.mjs";import"./chunk-HYVLMK22.mjs";import"./chunk-AMGQPWR6.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import{a as b,b as $}from"./chunk-PPCUCQZZ.mjs";import"./chunk-NJTPIEO6.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as T,d as W,e as I}from"./chunk-HZSAMTDM.mjs";import{a as u,b as K}from"./chunk-EK6YV52O.mjs";import{s as Y}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import{Ja as q,qa as m,va as U}from"./chunk-YQJJ7I3T.mjs";import{j as H}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{A as _,v as Q}from"./chunk-RUZVPFSZ.mjs";import{$a as g,Bb as c,Cb as o,Db as r,Eb as s,O as w,Qb as C,S as v,Sa as d,Sb as P,Vb as V,Xb as k,Ya as j,Yb as N,bb as A,da as F,ec as n,fc as h,gb as l,hb as L,ib as R,lb as z,ma as B,mb as D,oc as p,pc as O}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var x=(()=>{class e extends q{onLoad=new F;template;documentScrollListener;view;viewContainer=v(A);ngOnInit(){super.ngOnInit(),console.log("Defer is deprecated as of v18, use Angular defer block instead.")}ngAfterViewInit(){super.ngAfterViewInit(),_(this.platformId)&&(this.shouldLoad()&&this.load(),this.isLoaded()||(this.documentScrollListener=this.renderer.listen(this.document.defaultView,"scroll",()=>{this.shouldLoad()&&(this.load(),this.documentScrollListener&&this.documentScrollListener(),this.documentScrollListener=null)})))}shouldLoad(){if(this.isLoaded())return!1;{let t=this.el.nativeElement.getBoundingClientRect();return this.document.documentElement.clientHeight>=t.top}}load(){this.view=this.viewContainer.createEmbeddedView(this.template),this.onLoad.emit(),this.cd.detectChanges()}isLoaded(){return this.view!=null&&_(this.platformId)}ngOnDestroy(){this.view=null,this.documentScrollListener&&this.documentScrollListener()}static \u0275fac=(()=>{let t;return function(a){return(t||(t=B(e)))(a||e)}})();static \u0275dir=R({type:e,selectors:[["","pDefer",""]],contentQueries:function(i,a,M){if(i&1&&V(M,j,5),i&2){let E;k(E=N())&&(a.template=E.first)}},outputs:{onLoad:"onLoad"},features:[z]})}return e})();function me(e,y){e&1&&s(0,"img",4)}var ee=(()=>{class e{messageService;constructor(t){this.messageService=t}onLoad(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}code={basic:`<div pDefer (onLoad)="onLoad()">
    <ng-template>
        <img
            class="w-full md:w-[30rem] md:block md:mx-auto"
            src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg"
            alt="Prime" />
    </ng-template>
</div>`,html:`<div class="card">
    <p style="margin-bottom: 70rem;">
        Content is not loaded yet, scroll down to initialize it.
    </p>
    <p-toast />
    <div pDefer (onLoad)="onLoad()">
        <ng-template>
            <img
                class="w-full md:w-[30rem] md:block md:mx-auto"
                src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg"
                alt="Prime" />
        </ng-template>
    </div>
</div>`,typescript:`import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Defer } from 'primeng/defer';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'defer-basic-demo',
    templateUrl: './defer-basic-demo.html',
    standalone: true,
    imports: [Defer, ToastModule],
    providers: [MessageService]
})
export class DeferBasicDemo {
    constructor(private messageService: MessageService) {}

    onLoad() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }
}`};static \u0275fac=function(i){return new(i||e)(g(m))};static \u0275cmp=l({type:e,selectors:[["basic-doc"]],standalone:!1,features:[p([m])],decls:10,vars:1,consts:[[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-basic-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg","alt","Prime",1,"w-full","md:w-[30rem]","md:block","md:mx-auto"]],template:function(i,a){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),r()(),o(3,"div",0)(4,"p",1),n(5,"Content is not loaded yet, scroll down to initialize it."),r(),s(6,"p-toast"),o(7,"div",2),C("onLoad",function(){return a.onLoad()}),D(8,me,1,0,"ng-template"),r()(),s(9,"app-code",3)),i&2&&(d(9),c("code",a.code))},dependencies:[u,T,x,b],encapsulation:2})}return e})();function ce(e,y){e&1&&(o(0,"tr")(1,"th"),n(2,"Vin"),r(),o(3,"th"),n(4,"Year"),r(),o(5,"th"),n(6,"Brand"),r(),o(7,"th"),n(8,"Color"),r()())}function de(e,y){if(e&1&&(o(0,"tr")(1,"td"),n(2),r(),o(3,"td"),n(4),r(),o(5,"td"),n(6),r(),o(7,"td"),n(8),r()()),e&2){let t=y.$implicit;d(2),h(t.vin),d(2),h(t.year),d(2),h(t.brand),d(2),h(t.color)}}function le(e,y){if(e&1&&(o(0,"p-table",4),D(1,ce,9,0,"ng-template",5)(2,de,9,4,"ng-template",6),r()),e&2){let t=P();c("value",t.cars)}}var te=(()=>{class e{carService;messageService;cars;constructor(t,i){this.carService=t,this.messageService=i}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(t=>this.cars=t)}code={basic:`<div pDefer (onLoad)="initData()">
    <ng-template>
        <p-table [value]="cars" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th>Vin</th>
                    <th>Year</th>
                    <th>Brand</th>
                    <th>Color</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-car>
                <tr>
                    <td>{{car.vin}}</td>
                    <td>{{car.year}}</td>
                    <td>{{car.brand}}</td>
                    <td>{{car.color}}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</div>`,html:`<div class="card">
    <p style="margin-bottom: 70rem;">
        Table is not loaded yet, scroll down to initialize it.
    </p>

    <p-toast />
    <div pDefer (onLoad)="initData()">
        <ng-template>
            <p-table [value]="cars" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Vin</th>
                        <th>Year</th>
                        <th>Brand</th>
                        <th>Color</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-car>
                    <tr>
                        <td>{{car.vin}}</td>
                        <td>{{car.year}}</td>
                        <td>{{car.brand}}</td>
                        <td>{{car.color}}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </div>
</div>`,typescript:`import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from '@/domain/car';
import { CarService } from '@/service/carservice';
import { Defer } from 'primeng/defer';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'defer-data-table-demo',
    templateUrl: './defer-data-table-demo.html',
    standalone: true,
    imports: [Defer, ToastModule],
    providers: [MessageService, CarService]
})
export class DeferDataTableDemo {
    cars: Car[] | undefined;

    constructor(private carService: CarService, private messageService: MessageService) {}

    initData() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }
}`,data:`{
            vin: 'ee8a89d8',
            brand: 'Fiat',
            year: 1987,
            color: 'Maroon'
}`,service:["CarService"]};extFiles=[{path:"src/domain/car.ts",content:`
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`}];static \u0275fac=function(i){return new(i||e)(g(f),g(m))};static \u0275cmp=l({type:e,selectors:[["datatable-doc"]],standalone:!1,features:[p([m,f])],decls:10,vars:2,consts:[[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-data-table-demo",3,"code","extFiles"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(i,a){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),r()(),o(3,"div",0)(4,"p",1),n(5,"Table is not loaded yet, scroll down to initialize it."),r(),s(6,"p-toast"),o(7,"div",2),C("onLoad",function(){return a.initData()}),D(8,le,3,1,"ng-template"),r()(),s(9,"app-code",3)),i&2&&(d(9),c("code",a.code)("extFiles",a.extFiles))},dependencies:[u,T,x,G,U,b],encapsulation:2})}return e})();var ie=(()=>{class e{code={typescript:"import { Defer } from 'primeng/defer';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["defer-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,a){i&1&&s(0,"app-code",0),i&2&&c("code",a.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return e})();var oe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=L({type:e});static \u0275inj=w({imports:[Q,H,K,I,Y,J,$,I]})}return e})();var pe=()=>["Defer"],re=(()=>{class e{cars;carService=v(f);messageService=v(m);docs=[{id:"import",label:"Import",component:ie},{id:"basic",label:"Basic",component:ee},{id:"datatable",label:"DataTable",component:te}];initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(t=>this.cars=t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],features:[p([m])],decls:1,vars:3,consts:[["docTitle","Angular Defer Component","header","Defer","description","Defer postpones the loading of the content that is initially not in the viewport until it becomes visible on scroll.",3,"docs","apiDocs"]],template:function(i,a){i&1&&s(0,"app-doc",0),i&2&&c("docs",a.docs)("apiDocs",O(2,pe))},dependencies:[oe,W],encapsulation:2})}return e})();var rt=[{path:"",component:re}];export{rt as default};
