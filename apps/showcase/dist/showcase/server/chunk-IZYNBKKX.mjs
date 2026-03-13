import './polyfills.server.mjs';
import{a as f}from"./chunk-P2LA33M3.mjs";import{a as u,d as O,e as _}from"./chunk-HZSAMTDM.mjs";import{a as s,b as P}from"./chunk-EK6YV52O.mjs";import{e as b,f as A,g as N,i as R,j as C,k as z,l as B,m as j,s as G,t as L}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as I,ba as U}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as W}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as F}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as t,Db as o,Eb as p,O as w,Qb as E,Sa as l,ec as e,gb as c,hb as K,jc as v,kc as g,lc as y,pc as T}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var q=(()=>{class n{code={basic:`<span id="label_number">Number</span>
<p-knob ariaLabelledBy="label_number"/>

<p-knob ariaLabel="Number"/>`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["knob-accessibility-doc"]],standalone:!1,decls:84,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(i,r){i&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," Knob element component uses "),t(6,"i"),e(7,"slider"),o(),e(8," role in addition to the "),t(9,"i"),e(10,"aria-valuemin"),o(),e(11,", "),t(12,"i"),e(13,"aria-valuemax"),o(),e(14," and "),t(15,"i"),e(16,"aria-valuenow"),o(),e(17," attributes. Value to describe the component can be defined using "),t(18,"i"),e(19,"ariaLabelledBy"),o(),e(20," and "),t(21,"i"),e(22,"ariaLabel"),o(),e(23," props. "),o()(),p(24,"app-code",0),t(25,"h3"),e(26,"Keyboard Support"),o(),t(27,"div",1)(28,"table",2)(29,"thead")(30,"tr")(31,"th"),e(32,"Key"),o(),t(33,"th"),e(34,"Function"),o()()(),t(35,"tbody")(36,"tr")(37,"td")(38,"i"),e(39,"tab"),o()(),t(40,"td"),e(41,"Moves focus to the slider."),o()(),t(42,"tr")(43,"td")(44,"span",3)(45,"i",4),e(46,"left arrow"),o(),t(47,"i"),e(48,"down arrow"),o()()(),t(49,"td"),e(50,"Decrements the value."),o()(),t(51,"tr")(52,"td")(53,"span",3)(54,"i",4),e(55,"right arrow"),o(),t(56,"i"),e(57,"up arrow"),o()()(),t(58,"td"),e(59,"Increments the value."),o()(),t(60,"tr")(61,"td")(62,"i"),e(63,"home"),o()(),t(64,"td"),e(65,"Set the minimum value."),o()(),t(66,"tr")(67,"td")(68,"i"),e(69,"end"),o()(),t(70,"td"),e(71,"Set the maximum value."),o()(),t(72,"tr")(73,"td")(74,"i"),e(75,"page up"),o()(),t(76,"td"),e(77,"Increments the value by 10 steps."),o()(),t(78,"tr")(79,"td")(80,"i"),e(81,"page down"),o()(),t(82,"td"),e(83,"Decrements the value by 10 steps."),o()()()()()()),i&2&&(l(24),m("code",r.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[s,u],encapsulation:2})}return n})();var V=(()=>{class n{value;code={basic:'<p-knob [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-basic-demo',
    templateUrl: './knob-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobBasicDemo {
    value!: number;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","knob-basic-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Knob is an input component and used with the standard "),t(3,"i"),e(4,"ngModel"),o(),e(5," directive."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var H=(()=>{class n{value=50;code={basic:'<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />',html:`<div class="card flex justify-center">
<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-color-demo',
    templateUrl: './knob-color-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobColorDemo {
    value: number = 50;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["color-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModelChange","ngModel"],["selector","knob-color-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Colors are customized with the "),t(3,"i"),e(4,"textColor"),o(),e(5,", "),t(6,"i"),e(7,"rangeColor"),o(),e(8," and "),t(9,"i"),e(10,"valueColor"),o(),e(11," properties."),o()(),t(12,"div",0)(13,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(14,"app-code",2)),i&2&&(l(13),v("ngModel",r.value),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var J=(()=>{class n{value=75;code={basic:'<p-knob [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-disabled-demo',
    templateUrl: './knob-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobDisabledDemo {
    value: number = 75;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","knob-disabled-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),o(),e(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),m("disabled",!0),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var Q=(()=>{class n{code={typescript:"import { KnobModule } from 'primeng/knob';"};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["knob-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,r){i&1&&p(0,"app-code",0),i&2&&m("code",r.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return n})();var X=(()=>{class n{value=10;code={basic:'<p-knob [(ngModel)]="value" [min]="-50" [max]="50" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-min-max-demo',
    templateUrl: './knob-min-max-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobMinMaxDemo {
    value: number = 10;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["min-max-doc"]],standalone:!1,decls:12,vars:4,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","min","max"],["selector","knob-min-max-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Boundaries are configured with the "),t(3,"i"),e(4,"min"),o(),e(5," and "),t(6,"i"),e(7,"max"),o(),e(8," properties whose defaults are 0 and 100 respectively."),o()(),t(9,"div",0)(10,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(11,"app-code",2)),i&2&&(l(10),v("ngModel",r.value),m("min",-50)("max",50),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var Y=(()=>{class n{value=0;code={basic:`<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>`,html:`<div class="card flex flex-col items-center gap-2">
<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'knob-reactive-demo',
    templateUrl: './knob-reactive-demo.html',
    standalone: true,
    imports: [FormsModule, Knob, ButtonModule]
})
export class KnobReactiveDemo {
    value: number = 0;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["reactive-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-2"],["size","150","readonly","true",3,"ngModelChange","ngModel"],[1,"flex","gap-2"],["icon","pi pi-plus",3,"click","disabled"],["icon","pi pi-minus",3,"click","disabled"],["selector","knob-reactive-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Knob can be controlled with custom controls as well."),o()(),t(3,"div",0)(4,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o(),t(5,"div",2)(6,"p-button",3),E("click",function(){return r.value=r.value+1}),o(),t(7,"p-button",4),E("click",function(){return r.value=r.value-1}),o()()(),p(8,"app-code",5)),i&2&&(l(4),v("ngModel",r.value),l(2),m("disabled",r.value>=100),l(),m("disabled",r.value<=0),l(),m("code",r.code))},dependencies:[b,C,I,s,u,f],encapsulation:2})}return n})();var Z=(()=>{class n{formGroup;ngOnInit(){this.formGroup=new N({value:new R(32)})}code={basic:`<form [formGroup]="formGroup">
    <p-knob formControlName="value" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-knob formControlName="value" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-reactive-forms-demo',
    templateUrl: './knob-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Knob]
})
export class KnobReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(32)
        });
    }
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","value"],["selector","knob-reactive-forms-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Knob can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),o(),e(5," property is used to bind the component to a form control."),o()(),t(6,"div",0)(7,"form",1),p(8,"p-knob",2),o()(),p(9,"app-code",3)),i&2&&(l(7),m("formGroup",r.formGroup),l(2),m("code",r.code))},dependencies:[z,b,A,j,B,s,u,f],encapsulation:2})}return n})();var $=(()=>{class n{value=50;code={basic:'<p-knob [(ngModel)]="value" [readonly]="true" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [readonly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-readonly-demo',
    templateUrl: './knob-readonly-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobReadonlyDemo {
    value: number = 50;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["readonly-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","readonly"],["selector","knob-readonly-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"readonly"),o(),e(5," present, value cannot be edited."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),m("readonly",!0),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var ee=(()=>{class n{value=60;code={basic:'<p-knob [(ngModel)]="value" [size]="200" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [size]="200" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-size-demo',
    templateUrl: './knob-size-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobSizeDemo {
    value: number = 60;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["size-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","size"],["selector","knob-size-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Diameter of the knob is defined in pixels using the "),t(3,"i"),e(4,"size"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),m("size",200),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var te=(()=>{class n{value;code={basic:'<p-knob [(ngModel)]="value" [step]="10" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [step]="10" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-step-demo',
    templateUrl: './knob-step-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobStepDemo {
    value!: number;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["step-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","step"],["selector","knob-step-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Size of each movement is defined with the "),t(3,"i"),e(4,"step"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),m("step",10),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var oe=(()=>{class n{value=40;code={basic:'<p-knob [(ngModel)]="value" [strokeWidth]="5" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [strokeWidth]="5" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-stroke-demo',
    templateUrl: './knob-stroke-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobStrokeDemo {
    value: number = 40;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["stroke-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","strokeWidth"],["selector","knob-stroke-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The border size is specified with the "),t(3,"i"),e(4,"strokeWidth"),o(),e(5," property as a number in pixels."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),m("strokeWidth",5),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var ne=(()=>{class n{value=60;code={basic:'<p-knob [(ngModel)]="value" valueTemplate="{value}%" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" valueTemplate="{value}%" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-template-demo',
    templateUrl: './knob-template-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobTemplateDemo {
    value: number = 60;
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["template-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["valueTemplate","{value}%",3,"ngModelChange","ngModel"],["selector","knob-template-demo",3,"code"]],template:function(i,r){i&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Label is a string template that can be customized with the "),t(3,"i"),e(4,"valueTemplate"),o(),e(5," property having 60 as the placeholder ."),o()(),t(6,"div",0)(7,"p-knob",1),y("ngModelChange",function(a){return g(r.value,a)||(r.value=a),a}),o()(),p(8,"app-code",2)),i&2&&(l(7),v("ngModel",r.value),l(),m("code",r.code))},dependencies:[b,C,s,u,f],encapsulation:2})}return n})();var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=K({type:n});static \u0275inj=w({imports:[F,W,G,L,U,P,_,f,_]})}return n})();var ae=()=>["Knob"],re=(()=>{class n{docs=[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:V},{id:"reactive-forms",label:"Reactive Forms",component:Z},{id:"minmax",label:"Min/Max",component:X},{id:"step",label:"Step",component:te},{id:"template",label:"Template",component:ne},{id:"stroke",label:"Stroke",component:oe},{id:"size",label:"Size",component:ee},{id:"color",label:"Color",component:H},{id:"reactive",label:"Reactive",component:Y},{id:"readonly",label:"ReadOnly",component:$},{id:"disabled",label:"Disabled",component:J},{id:"accessibility",label:"Accessibility",component:q}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=c({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Knob Component","header","Knob","description","Knob is a form component to define number inputs with a dial.","themeDocs","knob",3,"docs","apiDocs"]],template:function(i,r){i&1&&p(0,"app-doc",0),i&2&&m("docs",r.docs)("apiDocs",T(2,ae))},dependencies:[ie,O],encapsulation:2})}return n})();var St=[{path:"",component:re}];export{St as default};
