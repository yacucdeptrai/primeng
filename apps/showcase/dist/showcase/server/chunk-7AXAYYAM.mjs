import './polyfills.server.mjs';
import{a as c}from"./chunk-JXRASPNW.mjs";import{a as E,w as z}from"./chunk-BGUWY5AX.mjs";import"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import"./chunk-AELPXV2Z.mjs";import"./chunk-P3BSQTDP.mjs";import"./chunk-HYVLMK22.mjs";import"./chunk-AMGQPWR6.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import"./chunk-NJTPIEO6.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as d,d as M,e as v}from"./chunk-HZSAMTDM.mjs";import{a as p,b as T}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as D}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as w}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as e,Db as s,Dc as b,Eb as o,O as x,Sa as f,ec as i,gb as r,hb as S,mb as g,pc as k}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var R=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["skeleton-accessibility-doc"]],standalone:!1,decls:16,vars:0,template:function(l,a){l&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),s(),e(4,"p"),i(5," Skeleton uses "),e(6,"i"),i(7,"aria-hidden"),s(),i(8,' as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use '),e(9,"i"),i(10,"aria-busy"),s(),i(11," on the container element as well to indicate the loading process. "),s()(),e(12,"h3"),i(13,"Keyboard Support"),s(),e(14,"p"),i(15,"Component does not include any interactive elements."),s()())},dependencies:[d],encapsulation:2})}return t})();var A=(()=>{class t{code={basic:`<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <div class="flex mb-4">
        <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
        <div>
            <p-skeleton width="10rem" styleClass="mb-2" />
            <p-skeleton width="5rem" styleClass="mb-2" />
            <p-skeleton height=".5rem" />
        </div>
    </div>
    <p-skeleton width="100%" height="150px" />
    <div class="flex justify-between mt-4">
        <p-skeleton width="4rem" height="2rem" />
        <p-skeleton width="4rem" height="2rem" />
    </div>
</div>`,html:`<div class="card">
    <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
        <div class="flex mb-4">
            <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
            <div>
                <p-skeleton width="10rem" styleClass="mb-2" />
                <p-skeleton width="5rem" styleClass="mb-2" />
                <p-skeleton height=".5rem" />
            </div>
        </div>
        <p-skeleton width="100%" height="150px" />
        <div class="flex justify-between mt-4">
            <p-skeleton width="4rem" height="2rem" />
            <p-skeleton width="4rem" height="2rem" />
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'skeleton-card-demo',
    templateUrl: './skeleton-card-demo.html',
    standalone: true,
    imports: [Skeleton]
})
export class SkeletonCardDemo {}`};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["card-doc"]],standalone:!1,decls:16,vars:1,consts:[[1,"card"],[1,"rounded","border","border-surface-200","dark:border-surface-700","p-6","bg-surface-0","dark:bg-surface-900"],[1,"flex","mb-4"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-between","mt-4"],["width","4rem","height","2rem"],["selector","skeleton-card-demo",3,"code"]],template:function(l,a){l&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sample Card implementation using different Skeleton components and Tailwind CSS utilities."),s()(),e(3,"div",0)(4,"div",1)(5,"div",2),o(6,"p-skeleton",3),e(7,"div"),o(8,"p-skeleton",4)(9,"p-skeleton",5)(10,"p-skeleton",6),s()(),o(11,"p-skeleton",7),e(12,"div",8),o(13,"p-skeleton",9)(14,"p-skeleton",9),s()()(),o(15,"app-code",10)),l&2&&(f(15),m("code",a.code))},dependencies:[p,d,c],encapsulation:2})}return t})();var q=()=>({"min-width":"50rem"});function U(t,j){t&1&&(e(0,"tr")(1,"th"),i(2,"Code"),s(),e(3,"th"),i(4,"Name"),s(),e(5,"th"),i(6,"Category"),s(),e(7,"th"),i(8,"Quantity"),s()())}function P(t,j){t&1&&(e(0,"tr")(1,"td"),o(2,"p-skeleton"),s(),e(3,"td"),o(4,"p-skeleton"),s(),e(5,"td"),o(6,"p-skeleton"),s(),e(7,"td"),o(8,"p-skeleton"),s()())}var _=(()=>{class t{products;ngOnInit(){this.products=Array.from({length:5}).map((n,l)=>`Item #${l}`)}code={basic:`<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
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
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
            <td><p-skeleton /></td>
        </tr>
    </ng-template>
</p-table>`,html:`<div class="card">
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
                <td><p-skeleton /></td>
                <td><p-skeleton /></td>
                <td><p-skeleton /></td>
                <td><p-skeleton /></td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'skeleton-data-table-demo',
    templateUrl: './skeleton-data-table-demo.html',
    standalone: true,
    imports: [Skeleton, TableModule]
})
export class SkeletonDataTableDemo implements OnInit {
    products: any[] | undefined;

    ngOnInit() {
        this.products = Array.from({ length: 5 }).map((_, i) => \`Item #\${i}\`);
    }
}`};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["datatable-doc"]],standalone:!1,decls:10,vars:4,consts:[["header",""],["body",""],[1,"card"],[3,"value","tableStyle"],["selector","skeleton-data-table-demo",3,"code"]],template:function(l,a){l&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sample DataTable implementation using different Skeleton components and Tailwind CSS utilities."),s()(),e(3,"div",2)(4,"p-table",3),g(5,U,9,0,"ng-template",null,0,b)(7,P,9,0,"ng-template",null,1,b),s()(),o(9,"app-code",4)),l&2&&(f(4),m("value",a.products)("tableStyle",k(3,q)),f(5),m("code",a.code))},dependencies:[p,d,E,c],encapsulation:2})}return t})();var F=(()=>{class t{code={typescript:"import { SkeletonModule } from 'primeng/skeleton';"};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["skeleton-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,a){l&1&&o(0,"app-code",0),l&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return t})();var I=(()=>{class t{code={basic:`<div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
    <ul class="m-0 p-0 list-none">
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li class="mb-4">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <div class="self-center" style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2" />
                    <p-skeleton width="75%" />
                </div>
            </div>
        </li>
    </ul>
</div>`,html:`<div class="card">
    <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
        <ul class="m-0 p-0 list-none">
            <li class="mb-4">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                    <div class="self-center" style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2" />
                        <p-skeleton width="75%" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'skeleton-list-demo,
    templateUrl: './skeleton-list-demo.html',
    standalone: true,
    imports: [Skeleton]
})
export class SkeletonListDemo {}`};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["list-doc"]],standalone:!1,decls:31,vars:1,consts:[[1,"card"],[1,"rounded","border","border-surface-200","dark:border-surface-700","p-6","bg-surface-0","dark:bg-surface-900"],[1,"m-0","p-0","list-none"],[1,"mb-4"],[1,"flex"],["shape","circle","size","4rem","styleClass","mr-2"],[1,"self-center",2,"flex","1"],["width","100%","styleClass","mb-2"],["width","75%"],["selector","skeleton-list-demo",3,"code"]],template:function(l,a){l&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Sample List implementation using different Skeleton components and Tailwind CSS utilities."),s()(),e(3,"div",0)(4,"div",1)(5,"ul",2)(6,"li",3)(7,"div",4),o(8,"p-skeleton",5),e(9,"div",6),o(10,"p-skeleton",7)(11,"p-skeleton",8),s()()(),e(12,"li",3)(13,"div",4),o(14,"p-skeleton",5),e(15,"div",6),o(16,"p-skeleton",7)(17,"p-skeleton",8),s()()(),e(18,"li",3)(19,"div",4),o(20,"p-skeleton",5),e(21,"div",6),o(22,"p-skeleton",7)(23,"p-skeleton",8),s()()(),e(24,"li")(25,"div",4),o(26,"p-skeleton",5),e(27,"div",6),o(28,"p-skeleton",7)(29,"p-skeleton",8),s()()()()()(),o(30,"app-code",9)),l&2&&(f(30),m("code",a.code))},dependencies:[p,d,c],encapsulation:2})}return t})();var L=(()=>{class t{code={basic:`<h5>Rectangle</h5>
<p-skeleton styleClass="mb-2" />
<p-skeleton width="10rem" styleClass="mb-2" />
<p-skeleton width="5rem" styleClass="mb-2" />
<p-skeleton height="2rem" styleClass="mb-2" />
<p-skeleton width="10rem" height="4rem" />

<h5>Rounded</h5>
<p-skeleton styleClass="mb-2" borderRadius="16px" />
<p-skeleton width="10rem" styleClass="mb-2" borderRadius="16px" />
<p-skeleton width="5rem" styleClass="mb-2" borderRadius="16px" />
<p-skeleton height="2rem" styleClass="mb-2" borderRadius="16px" />
<p-skeleton width="10rem" height="4rem" borderRadius="16px" />

<h5 class="mt-4">Square</h5>
<p-skeleton size="2rem" styleClass="mr-2" />
<p-skeleton size="3rem" styleClass="mr-2" />
<p-skeleton size="4rem" styleClass="mr-2" />
<p-skeleton size="5rem" />

<h5 class="mt-4">Circle</h5>
<p-skeleton shape="circle" size="2rem" styleClass="mr-2" />
<p-skeleton shape="circle" size="3rem" styleClass="mr-2" />
<p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
<p-skeleton shape="circle" size="5rem" />`,html:`<div class="card">
    <div class="flex flex-wrap">
        <div class="w-full xl:w-6/12 p-4">
            <h5>Rectangle</h5>
            <p-skeleton styleClass="mb-2" />
            <p-skeleton width="10rem" styleClass="mb-2" />
            <p-skeleton width="5rem" styleClass="mb-2" />
            <p-skeleton height="2rem" styleClass="mb-2" />
            <p-skeleton width="10rem" height="4rem" />
        </div>
        <div class="w-full xl:w-6/12 p-4">
            <h5>Rounded</h5>
            <p-skeleton styleClass="mb-2" borderRadius="16px" />
            <p-skeleton width="10rem" styleClass="mb-2" borderRadius="16px" />
            <p-skeleton width="5rem" styleClass="mb-2" borderRadius="16px" />
            <p-skeleton height="2rem" styleClass="mb-2" borderRadius="16px" />
            <p-skeleton width="10rem" height="4rem" borderRadius="16px" />
        </div>
        <div class="w-full xl:w-6/12 p-4">
            <h5 class="mt-4">Square</h5>
            <div class="flex items-end">
                <p-skeleton size="2rem" styleClass="mr-2" />
                <p-skeleton size="3rem" styleClass="mr-2" />
                <p-skeleton size="4rem" styleClass="mr-2" />
                <p-skeleton size="5rem" />
            </div>
        </div>
        <div class="field w-full xl:w-6/12 p-4">
            <h5 class="mt-4">Circle</h5>
            <div class="flex items-end">
                <p-skeleton shape="circle" size="2rem" styleClass="mr-2" />
                <p-skeleton shape="circle" size="3rem" styleClass="mr-2" />
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2" />
                <p-skeleton shape="circle" size="5rem" />
            </div>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'skeleton-shapes-demo',
    templateUrl: './skeleton-shapes-demo.html',
    standalone: true,
    imports: [Skeleton]
})
export class SkeletonShapesDemo {}`};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["shapes-doc"]],standalone:!1,decls:53,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap"],[1,"w-full","xl:w-6/12","p-4"],["styleClass","mb-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height","2rem","styleClass","mb-2"],["width","10rem","height","4rem"],["styleClass","mb-2","borderRadius","16px"],["width","10rem","styleClass","mb-2","borderRadius","16px"],["width","5rem","styleClass","mb-2","borderRadius","16px"],["height","2rem","styleClass","mb-2","borderRadius","16px"],["width","10rem","height","4rem","borderRadius","16px"],[1,"mt-4"],[1,"flex","items-end"],["size","2rem","styleClass","mr-2"],["size","3rem","styleClass","mr-2"],["size","4rem","styleClass","mr-2"],["size","5rem"],[1,"field","w-full","xl:w-6/12","p-4"],["shape","circle","size","2rem","styleClass","mr-2"],["shape","circle","size","3rem","styleClass","mr-2"],["shape","circle","size","4rem","styleClass","mr-2"],["shape","circle","size","5rem"],["selector","skeleton-shapes-demo",3,"code"]],template:function(l,a){l&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Various shapes and sizes can be created using styling properties like "),e(3,"i"),i(4,"shape"),s(),i(5,", "),e(6,"i"),i(7,"width"),s(),i(8,", "),e(9,"i"),i(10,"height"),s(),i(11,", "),e(12,"i"),i(13,"borderRadius"),s(),i(14," and "),e(15,"i"),i(16,"styleClass"),s(),i(17,"."),s()(),e(18,"div",0)(19,"div",1)(20,"div",2)(21,"h5"),i(22,"Rectangle"),s(),o(23,"p-skeleton",3)(24,"p-skeleton",4)(25,"p-skeleton",5)(26,"p-skeleton",6)(27,"p-skeleton",7),s(),e(28,"div",2)(29,"h5"),i(30,"Rounded"),s(),o(31,"p-skeleton",8)(32,"p-skeleton",9)(33,"p-skeleton",10)(34,"p-skeleton",11)(35,"p-skeleton",12),s(),e(36,"div",2)(37,"h5",13),i(38,"Square"),s(),e(39,"div",14),o(40,"p-skeleton",15)(41,"p-skeleton",16)(42,"p-skeleton",17)(43,"p-skeleton",18),s()(),e(44,"div",19)(45,"h5",13),i(46,"Circle"),s(),e(47,"div",14),o(48,"p-skeleton",20)(49,"p-skeleton",21)(50,"p-skeleton",22)(51,"p-skeleton",23),s()()()(),o(52,"app-code",24)),l&2&&(f(52),m("code",a.code))},dependencies:[p,d,c],encapsulation:2})}return t})();var O=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=S({type:t});static \u0275inj=x({imports:[w,D,T,v,z,c,v]})}return t})();var Q=()=>["Skeleton"],N=(()=>{class t{docs=[{id:"import",label:"Import",component:F},{id:"shapes",label:"Shapes",component:L},{id:"card",label:"Card",component:A},{id:"list",label:"List",component:I},{id:"datatable",label:"DataTable",component:_},{id:"accessibility",label:"Accessibility",component:R}];static \u0275fac=function(l){return new(l||t)};static \u0275cmp=r({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Skeleton Component","header","Skeleton","description","Skeleton is a placeholder to display instead of the actual content.","themeDocs","skeleton",3,"docs","apiDocs"]],template:function(l,a){l&1&&o(0,"app-doc",0),l&2&&m("docs",a.docs)("apiDocs",k(2,Q))},dependencies:[O,M],styles:[".custom-skeleton[_ngcontent-%COMP%]{border:1px solid var(--surface-d);border-borderRadius:4px}.custom-skeleton[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}"]})}return t})();var Te=[{path:"",component:N}];export{Te as default};
