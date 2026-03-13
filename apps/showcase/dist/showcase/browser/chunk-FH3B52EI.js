import{a as S}from"./chunk-JCAUEKMF.js";import{a as W}from"./chunk-ZVFS65R5.js";import{a as N,b as U}from"./chunk-6SHJACKZ.js";import{a as P,b as V}from"./chunk-JMD2YF5E.js";import{a as K}from"./chunk-AKIDLCU7.js";import{a as C}from"./chunk-6FFJRHC4.js";import"./chunk-EHIVA7EC.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as g,d as q,e as R}from"./chunk-I6RUY6VJ.js";import{a as f,b as z}from"./chunk-CIUCWEWU.js";import{e as j,j as A,s as k}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as O,ba as $}from"./chunk-DEL7GGHP.js";import{e as B,i as J}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as F}from"./chunk-O4W5DSIC.js";import{Ab as m,Mb as c,O as _,Qa as s,_b as I,ac as e,dc as h,eb as d,ec as L,fb as T,fc as b,gc as E,hc as D,lc as w,xb as p,yb as t,zb as o}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var G=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-accessibility-doc"]],standalone:!1,decls:112,vars:0,consts:[["href","/configuration/#locale"],["routerLink","/dropdown"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,i){r&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5,"Paginator is placed inside a "),t(6,"i"),e(7,"nav"),o(),e(8," element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below."),o(),t(9,"p"),e(10," First, previous, next and last page navigators elements with "),t(11,"i"),e(12,"aria-label"),o(),e(13," attributes referring to the "),t(14,"i"),e(15,"aria.firstPageLabel"),o(),e(16,", "),t(17,"i"),e(18,"aria.prevPageLabel"),o(),e(19,", "),t(20,"i"),e(21,"aria.nextPageLabel"),o(),e(22," and "),t(23,"i"),e(24,"aria.lastPageLabel"),o(),e(25,"properties of the "),t(26,"a",0),e(27,"locale"),o(),e(28," API respectively. "),o(),t(29,"p"),e(30," Page links are also button elements with an "),t(31,"i"),e(32,"aria-label"),o(),e(33," attribute derived from the "),t(34,"i"),e(35,"aria.pageLabel"),o(),e(36," of the "),t(37,"a",0),e(38,"locale"),o(),e(39," API. Current page is marked with "),t(40,"i"),e(41,"aria-current"),o(),e(42,' set to "page" as well. '),o(),t(43,"p"),e(44,"Current page report uses "),t(45,"i"),e(46,'aria-live="polite"'),o(),e(47," to instruct screen reader about the changes to the pagination state."),o(),t(48,"p"),e(49," Rows per page dropdown internally uses a dropdown component, refer to the "),t(50,"a",1),e(51,"dropdown"),o(),e(52," documentation for accessibility details. Additionally, the dropdown uses an "),t(53,"i"),e(54,"aria-label"),o(),e(55,"from the "),t(56,"i"),e(57,"aria.rowsPerPage"),o(),e(58," property of the "),t(59,"a",0),e(60,"locale"),o(),e(61," API. "),o(),t(62,"p"),e(63,"Jump to page input is an "),t(64,"i"),e(65,"input"),o(),e(66," element with an "),t(67,"i"),e(68,"aria-label"),o(),e(69," that refers to the "),t(70,"i"),e(71,"aria.jumpToPage"),o(),e(72," property of the "),t(73,"a",0),e(74,"locale"),o(),e(75," API."),o(),t(76,"h3"),e(77,"Keyboard Support"),o(),t(78,"div",2)(79,"table",3)(80,"thead")(81,"tr")(82,"th"),e(83,"Key"),o(),t(84,"th"),e(85,"Function"),o()()(),t(86,"tbody")(87,"tr")(88,"td")(89,"i"),e(90,"tab"),o()(),t(91,"td"),e(92,"Moves focus through the paginator elements."),o()(),t(93,"tr")(94,"td")(95,"i"),e(96,"enter"),o()(),t(97,"td"),e(98,"Executes the paginator element action."),o()(),t(99,"tr")(100,"td")(101,"i"),e(102,"space"),o()(),t(103,"td"),e(104,"Executes the paginator element action."),o()()()()(),t(105,"h3"),e(106,"Rows Per Page Dropdown Keyboard Support"),o(),t(107,"p"),e(108,"Refer to the "),t(109,"a",1),e(110,"dropdown"),o(),e(111," documentation for more details about keyboard support."),o()()())},dependencies:[g,B],encapsulation:2})}return n})();var te=()=>[10,20,30],H=(()=>{class n{first=0;rows=10;onPageChange(a){this.first=a.first??0,this.rows=a.rows??10}code={basic:'<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />',html:`<div class="card flex justify-center">
    <p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-basic-demo',
    templateUrl: './paginator-basic-demo.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorBasicDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["basic-doc"]],standalone:!1,decls:24,vars:6,consts:[[1,"card","flex","justify-center"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["selector","paginator-basic-demo",3,"code"]],template:function(r,i){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Paginator is used as a controlled component with "),t(3,"i"),e(4,"first"),o(),e(5,", "),t(6,"i"),e(7,"rows"),o(),e(8," and "),t(9,"i"),e(10,"onPageChange"),o(),e(11," properties to manage the first index and number of records to display per page. Total number of records need to be with "),t(12,"i"),e(13,"totalRecords"),o(),e(14," property. Default template includes a dropdown to change the "),t(15,"i"),e(16,"rows"),o(),e(17," so "),t(18,"i"),e(19,"rowsPerPageOptions"),o(),e(20," is also necessary for the dropdown options. "),o()(),t(21,"div",0)(22,"p-paginator",1),c("onPageChange",function(l){return i.onPageChange(l)}),o()(),m(23,"app-code",2)),r&2&&(s(22),p("first",i.first)("rows",i.rows)("totalRecords",120)("rowsPerPageOptions",w(5,te)),s(),p("code",i.code))},dependencies:[f,g,P],encapsulation:2})}return n})();var Q=(()=>{class n{first=0;rows=10;onPageChange(a){this.first=a.first??0,this.rows=a.rows??10}code={basic:`<p-paginator
    (onPageChange)="onPageChange($event)"
    [first]="first"
    [rows]="rows"
    [totalRecords]="120"
    [showCurrentPageReport]="true"
    [showPageLinks]="false"
    [showJumpToPageDropdown]="false"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />`,html:`<div class="card flex justify-center">
    <p-paginator
        (onPageChange)="onPageChange($event)"
        [first]="first"
        [rows]="rows"
        [totalRecords]="120"
        [showCurrentPageReport]="true"
        [showPageLinks]="false"
        [showJumpToPageDropdown]="false"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-current-page-report-demo',
    templateUrl: './paginator-current-page-report-demo.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorCurrentPageReportDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["current-page-report-doc"]],standalone:!1,decls:19,vars:23,consts:[[1,"mb-6","leading-loose"],[1,"card","flex","justify-center"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showCurrentPageReport","showPageLinks","showJumpToPageDropdown"],["selector","paginator-current-page-report-demo",3,"code"]],template:function(r,i){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2),o(),t(3,"ul",0)(4,"li"),e(5),o(),t(6,"li"),e(7),o(),t(8,"li"),e(9),o(),t(10,"li"),e(11),o(),t(12,"li"),e(13),o(),t(14,"li"),e(15),o()()(),t(16,"div",1)(17,"p-paginator",2),c("onPageChange",function(l){return i.onPageChange(l)}),o()(),m(18,"app-code",3)),r&2&&(s(2),L("Current page report item in the template displays information about the pagination state. Default value is (","{","currentPage","}"," of ","{","totalPages","}",") whereas available placeholders are the following;"),s(3),h("","{","currentPage","}"),s(2),h("","{","totalPages","}"),s(2),h("","{","rows","}"),s(2),h("","{","first","}"),s(2),h("","{","last","}"),s(2),h("","{","totalRecords","}"),s(2),p("first",i.first)("rows",i.rows)("totalRecords",120)("showCurrentPageReport",!0)("showPageLinks",!1)("showJumpToPageDropdown",!1),s(),p("code",i.code))},dependencies:[f,g,P],encapsulation:2})}return n})();var X=(()=>{class n{code={typescript:"import { PaginatorModule } from 'primeng/paginator';"};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,i){r&1&&m(0,"app-code",0),r&2&&p("code",i.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return n})();var oe=()=>[10,20,30],ie=()=>({width:"10rem"}),Y=(()=>{class n{first1=0;rows1=10;first2=0;rows2=10;first3=0;rows3=10;totalRecords=120;options=[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:120,value:120}];onPageChange1(a){this.first1=a.first??0,this.rows1=a.rows??10}onPageChange2(a){this.first2=a.first??0,this.rows2=a.rows??10}onPageChange3(a){this.first3=a.first??0,this.rows3=a.rows??10}code={basic:`<div class="flex items-center justify-center">
    <div>
        <p-button icon="pi pi-star" outlined />
    </div>
    <div class="flex-1">
        <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
    </div>
    <div class="justify-end">
        <p-button icon="pi pi-search" />
    </div>
</div>

<div class="flex items-center justify-end">
    <span class="mx-1 text-color">Items per page: </span>
    <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
    <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false" ></p-paginator>
</div>

<div class="flex items-center justify-start">
    <div class="flex justify-center items-center gap-4">
        <span>Items per page: </span>
        <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
    </div>
    <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords" [showFirstLastIcon]="false"
        [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}" ></p-paginator>
</div>`,html:`<div class="card flex flex-col gap-4">
    <div class="flex items-center justify-center">
        <div>
            <p-button icon="pi pi-star" outlined />
        </div>
        <div class="flex-1">
            <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
        </div>
        <div class="justify-end">
            <p-button icon="pi pi-search" />
        </div>
    </div>
    <p-divider />
    <div class="flex items-center justify-end">
        <span class="mx-1 text-color">Items per page: </span>
        <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
        <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
            currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false"></p-paginator>
    </div>
    <p-divider />
    <div class="flex items-center justify-start">
        <div class="flex justify-center items-center gap-4">
            <span>Items per page: </span>
            <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
        </div>
        <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords"
            [showFirstLastIcon]="false" [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}"></p-paginator>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Slider } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'paginator-template-demo',
    templateUrl: './paginator-template-demo.html',
    standalone: true,
    imports: [PaginatorModule, ButtonModule, DividerModule, Slider, FormsModule]
})
export class PaginatorTemplateDemo {
    first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange1(event: PaginatorState) {
        this.first1 = event.first ?? 0;
        this.rows1 = event.rows ?? 10;
    }

    onPageChange2(event: PaginatorState) {
        this.first2 = event.first ?? 0;
        this.rows2 = event.rows ?? 10;
    }

    onPageChange3(event: PaginatorState) {
        this.first3 = event.first ?? 0;
        this.rows3 = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["template-doc"]],standalone:!1,decls:25,vars:27,consts:[[1,"card","flex","flex-col","gap-4"],[1,"flex","items-center","justify-center"],["icon","pi pi-star","outlined",""],[1,"flex-1"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions","showFirstLastIcon"],[1,"justify-end"],["icon","pi pi-search"],[1,"flex","items-center","justify-end"],[1,"mx-1","text-color"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showCurrentPageReport","showPageLinks","showFirstLastIcon"],[1,"flex","items-center","justify-start"],[1,"flex","justify-center","items-center","gap-4"],[3,"ngModelChange","ngModel","min","max","step"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showFirstLastIcon","showCurrentPageReport"],["selector","paginator-template-demo",3,"code"]],template:function(r,i){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows overriding the default content of the UI elements by defining callbacks using the element name."),o()(),t(3,"div",0)(4,"div",1)(5,"div"),m(6,"p-button",2),o(),t(7,"div",3)(8,"p-paginator",4),c("onPageChange",function(l){return i.onPageChange1(l)}),o()(),t(9,"div",5),m(10,"p-button",6),o()(),m(11,"p-divider"),t(12,"div",7)(13,"span",8),e(14,"Items per page: "),o(),t(15,"p-select",9),D("ngModelChange",function(l){return E(i.rows2,l)||(i.rows2=l),l}),c("ngModelChange",function(){return i.first2=0}),o(),t(16,"p-paginator",10),c("onPageChange",function(l){return i.onPageChange2(l)}),o()(),m(17,"p-divider"),t(18,"div",11)(19,"div",12)(20,"span"),e(21,"Items per page: "),o(),t(22,"p-slider",13),D("ngModelChange",function(l){return E(i.rows3,l)||(i.rows3=l),l}),c("ngModelChange",function(){return i.first3=0}),o()(),t(23,"p-paginator",14),c("onPageChange",function(l){return i.onPageChange3(l)}),o()()(),m(24,"app-code",15)),r&2&&(s(8),p("first",i.first1)("rows",i.rows1)("totalRecords",120)("rowsPerPageOptions",w(25,oe))("showFirstLastIcon",!1),s(7),p("options",i.options),b("ngModel",i.rows2),s(),p("first",i.first2)("rows",i.rows2)("totalRecords",120)("showCurrentPageReport",!0)("showPageLinks",!1)("showFirstLastIcon",!1),s(6),I(w(26,ie)),b("ngModel",i.rows3),p("min",10)("max",120)("step",30),s(),p("first",i.first3)("rows",i.rows3)("totalRecords",i.totalRecords)("showFirstLastIcon",!1)("showCurrentPageReport",!0),s(),p("code",i.code))},dependencies:[f,g,P,O,N,j,A,S,C],encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=T({type:n});static \u0275inj=_({imports:[F,z,R,V,$,U,k,K,S,J,C,W,R]})}return n})();var ne=()=>["Paginator"],ee=(()=>{class n{docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:H},{id:"template",label:"Template",component:Y},{id:"current-page-report",label:"Current Page Report",component:Q},{id:"accessibility",label:"Accessibility",component:G}];static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Paginator Component","header","Paginator","description","Paginator displays data in paged format and provides navigation between pages.","themeDocs","paginator",3,"docs","apiDocs"]],template:function(r,i){r&1&&m(0,"app-doc",0),r&2&&p("docs",i.docs)("apiDocs",w(2,ne))},dependencies:[Z,q],styles:[".image-gallery[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]})}return n})();var et=[{path:"",component:ee}];export{et as default};
