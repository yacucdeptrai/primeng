import './polyfills.server.mjs';
import{a as f}from"./chunk-6GLSMZCZ.mjs";import{a as d,d as J,e as _}from"./chunk-HZSAMTDM.mjs";import{a as g,b as H}from"./chunk-EK6YV52O.mjs";import{e as u,f as L,g as P,i as U,j as C,k as K,l as V,m as k,s as z,t as q}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as I}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as B}from"./chunk-RUZVPFSZ.mjs";import{Bb as a,Cb as i,Db as n,Dc as R,Eb as m,Lb as O,O as T,Sa as p,X as N,Y as A,ec as t,gb as s,hb as W,jc as v,kc as h,lc as y,mb as G,pc as j}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Q=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["rating-accessibility-doc"]],standalone:!1,decls:61,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(o,r){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the "),i(6,"a",0),t(7,"locale"),n(),t(8," API via "),i(9,"i"),t(10,"star"),n(),t(11," and "),i(12,"i"),t(13,"stars"),n(),t(14," of the "),i(15,"i"),t(16,"aria"),n(),t(17," property. "),n()(),i(18,"h3"),t(19,"Keyboard Support"),n(),i(20,"p"),t(21,"Keyboard interaction is derived from the native browser handling of radio buttons in a group."),n(),i(22,"div",1)(23,"table",2)(24,"thead")(25,"tr")(26,"th"),t(27,"Key"),n(),i(28,"th"),t(29,"Function"),n()()(),i(30,"tbody")(31,"tr")(32,"td")(33,"i"),t(34,"tab"),n()(),i(35,"td"),t(36,"Moves focus to the star representing the value, if there is none then first star receives the focus."),n()(),i(37,"tr")(38,"td")(39,"span",3)(40,"i",4),t(41,"left arrow"),n(),i(42,"i"),t(43,"up arrow"),n()()(),i(44,"td"),t(45,"Moves focus to the previous star, if there is none then last radio button receives the focus."),n()(),i(46,"tr")(47,"td")(48,"span",3)(49,"i",4),t(50,"right arrow"),n(),i(51,"i"),t(52,"down arrow"),n()()(),i(53,"td"),t(54,"Moves focus to the next star, if there is none then first star receives the focus."),n()(),i(55,"tr")(56,"td")(57,"i"),t(58,"space"),n()(),i(59,"td"),t(60,"If the focused star does not represent the value, changes the value to the star value."),n()()()()()())},dependencies:[d],encapsulation:2})}return e})();var X=(()=>{class e{value;code={basic:'<p-rating [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-basic-demo',
    templateUrl: './rating-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingBasicDemo {
    value!: number;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","rating-basic-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Two-way value binding is defined using "),i(3,"i"),t(4,"ngModel"),n(),t(5,"."),n()(),i(6,"div",0)(7,"p-rating",1),y("ngModelChange",function(c){return h(r.value,c)||(r.value=c),c}),n()(),m(8,"app-code",2)),o&2&&(p(7),v("ngModel",r.value),p(),a("code",r.code))},dependencies:[g,d,f,u,C],encapsulation:2})}return e})();var Y=(()=>{class e{value=5;code={basic:'<p-rating [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-disabled-demo',
    templateUrl: './rating-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingDisabledDemo {
    value: number = 5;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","rating-disabled-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"disabled"),n(),t(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),n()(),i(6,"div",0)(7,"p-rating",1),y("ngModelChange",function(c){return h(r.value,c)||(r.value=c),c}),n()(),m(8,"app-code",2)),o&2&&(p(7),v("ngModel",r.value),a("disabled",!0),p(),a("code",r.code))},dependencies:[g,d,f,u,C],encapsulation:2})}return e})();var Z=(()=>{class e{code={typescript:"import { RatingModule } from 'primeng/rating';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["rating-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&m(0,"app-code",0),o&2&&a("code",r.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var $=(()=>{class e{value=5;code={basic:'<p-rating [(ngModel)]="value" [stars]="10" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [stars]="10" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-number-of-stars-demo',
    templateUrl: './rating-number-of-stars-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingNumberOfStarsDemo {
    value: number = 5;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["number-of-stars-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","stars"],["selector","rating-number-of-stars-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Number of stars to display is defined with "),i(3,"i"),t(4,"stars"),n(),t(5," property."),n()(),i(6,"div",0)(7,"p-rating",1),y("ngModelChange",function(c){return h(r.value,c)||(r.value=c),c}),n()(),m(8,"app-code",2)),o&2&&(p(7),v("ngModel",r.value),a("stars",10),p(),a("code",r.code))},dependencies:[g,d,f,u,C],encapsulation:2})}return e})();var ee=(()=>{class e{formGroup;ngOnInit(){this.formGroup=new P({value:new U(4)})}code={basic:`<form [formGroup]="formGroup">
    <p-rating formControlName="value" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-rating formControlName="value" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-reactive-forms-demo',
    templateUrl: './rating-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Rating]
})
export class RatingReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(4)
        });
    }
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","value"],["selector","rating-reactive-forms-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Rating can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),n(),t(5," property is used to bind the component to a form control."),n()(),i(6,"div",0)(7,"form",1),m(8,"p-rating",2),n()(),m(9,"app-code",3)),o&2&&(p(7),a("formGroup",r.formGroup),p(2),a("code",r.code))},dependencies:[g,d,f,K,u,L,k,V],encapsulation:2})}return e})();var te=(()=>{class e{value=3;code={basic:'<p-rating [(ngModel)]="value" [readonly]="true" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [readonly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-readonly-demo',
    templateUrl: './rating-readonly-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingReadonlyDemo {
    value: number = 3;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["readonly-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","readonly"],["selector","rating-readonly-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"readOnly"),n(),t(5," present, value cannot be edited."),n()(),i(6,"div",0)(7,"p-rating",1),y("ngModelChange",function(c){return h(r.value,c)||(r.value=c),c}),n()(),m(8,"app-code",2)),o&2&&(p(7),v("ngModel",r.value),a("readonly",!0),p(),a("code",r.code))},dependencies:[g,d,f,u,C],encapsulation:2})}return e})();function re(e,F){e&1&&m(0,"img",6)}function ae(e,F){e&1&&m(0,"img",7)}function me(e,F){e&1&&m(0,"img",8)}var oe=(()=>{class e{value;code={basic:`<p-rating [(ngModel)]="value" stars="5">
    <ng-template #cancelicon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png" height="24" width="24" />
    </ng-template>
    <ng-template #onicon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
    </ng-template>
    <ng-template #officon>
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
    </ng-template>
</p-rating>`,html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" stars="5">
        <ng-template #cancelicon>
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png" height="24" width="24" />
        </ng-template>
        <ng-template #onicon>
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24"  width="24" />
        </ng-template>
        <ng-template #officon>
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
        </ng-template>
    </p-rating>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-template-demo',
    templateUrl: './rating-template-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingTemplateDemo {
    value!: number;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["template-doc"]],standalone:!1,decls:12,vars:2,consts:[["cancelicon",""],["onicon",""],["officon",""],[1,"card","flex","justify-center"],["stars","5",3,"ngModelChange","ngModel"],["selector","rating-template-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png","height","24","width","24"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png","height","24","width","24"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png","height","24","width","24"]],template:function(o,r){if(o&1){let S=O();i(0,"app-docsectiontext")(1,"p"),t(2,"Templating allows customizing the content where the icon instance is available as the implicit variable."),n()(),i(3,"div",3)(4,"p-rating",4),y("ngModelChange",function(E){return N(S),h(r.value,E)||(r.value=E),A(E)}),G(5,re,1,0,"ng-template",null,0,R)(7,ae,1,0,"ng-template",null,1,R)(9,me,1,0,"ng-template",null,2,R),n()(),m(11,"app-code",5)}o&2&&(p(4),v("ngModel",r.value),p(7),a("code",r.code))},dependencies:[g,d,f,u,C],encapsulation:2})}return e})();var ie=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=T({imports:[B,H,_,f,z,q,I,_]})}return e})();var le=()=>["Rating"],ne=(()=>{class e{docs=[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:ee},{id:"numberofstars",label:"Number of Stars",component:$},{id:"template",label:"Template",component:oe},{id:"readonly",label:"ReadOnly",component:te},{id:"disabled",label:"Disabled",component:Y},{id:"accessibility",label:"Accessibility",component:Q}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Rating Component","header","Rating","description","Rating component is a star based selection input.","themeDocs","rating",3,"docs","apiDocs"]],template:function(o,r){o&1&&m(0,"app-doc",0),o&2&&a("docs",r.docs)("apiDocs",j(2,le))},dependencies:[ie,J],encapsulation:2})}return e})();var rt=[{path:"",component:ne}];export{rt as default};
