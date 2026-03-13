import{a as S,b as H}from"./chunk-JCAUEKMF.js";import{a as U,b as k}from"./chunk-OI76OXDY.js";import"./chunk-7T6NUUXL.js";import{a as u,d as J,e as E}from"./chunk-I6RUY6VJ.js";import{a as c,b as q}from"./chunk-CIUCWEWU.js";import{b as A,e as y,f as N,g as B,i as W,j as C,k as j,l as R,m as L,s as G,t as O,u as z,v as K}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as P}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as I}from"./chunk-O4W5DSIC.js";import{Ab as s,O as F,Qa as a,_b as T,ac as e,eb as p,fb as _,fc as f,gc as g,hc as v,lc as V,xb as m,yb as t,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Q=(()=>{class o{code={basic:`<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number" />

<p-slider ariaLabel="Number" />`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-accessibility-doc"]],standalone:!1,decls:87,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(r,n){r&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Slider element component uses "),t(6,"i"),e(7,"slider"),i(),e(8," role on the handle in addition to the "),t(9,"i"),e(10,"aria-orientation"),i(),e(11,", "),t(12,"i"),e(13,"aria-valuemin"),i(),e(14,", "),t(15,"i"),e(16,"aria-valuemax"),i(),e(17," and "),t(18,"i"),e(19,"aria-valuenow"),i(),e(20," attributes. Value to describe the component can be defined using "),t(21,"i"),e(22,"ariaLabelledBy"),i(),e(23," and "),t(24,"i"),e(25,"ariaLabel"),i(),e(26," props. "),i()(),s(27,"app-code",0),t(28,"h3"),e(29,"Keyboard Support"),i(),t(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e(35,"Key"),i(),t(36,"th"),e(37,"Function"),i()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"i"),e(42,"tab"),i()(),t(43,"td"),e(44,"Moves focus to the slider."),i()(),t(45,"tr")(46,"td")(47,"span",3)(48,"i",4),e(49,"left arrow"),i(),t(50,"i"),e(51,"up arrow"),i()()(),t(52,"td"),e(53,"Decrements the value."),i()(),t(54,"tr")(55,"td")(56,"span",3)(57,"i",4),e(58,"right arrow"),i(),t(59,"i"),e(60,"down arrow"),i()()(),t(61,"td"),e(62,"Increments the value."),i()(),t(63,"tr")(64,"td")(65,"i"),e(66,"home"),i()(),t(67,"td"),e(68,"Set the minimum value."),i()(),t(69,"tr")(70,"td")(71,"i"),e(72,"end"),i()(),t(73,"td"),e(74,"Set the maximum value."),i()(),t(75,"tr")(76,"td")(77,"i"),e(78,"page up"),i()(),t(79,"td"),e(80,"Increments the value by 10 steps."),i()(),t(81,"tr")(82,"td")(83,"i"),e(84,"page down"),i()(),t(85,"td"),e(86,"Decrements the value by 10 steps."),i()()()()()()),r&2&&(a(27),m("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c,u],encapsulation:2})}return o})();var X=(()=>{class o{value;code={basic:'<p-slider [(ngModel)]="value" styleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" styleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-basic-demo',
    templateUrl: './slider-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderBasicDemo {
    value!: number;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["styleClass","w-56",3,"ngModelChange","ngModel"],["selector","slider-basic-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Two-way binding is defined using the standard "),t(3,"i"),e(4,"ngModel"),i(),e(5," directive."),i()(),t(6,"div",0)(7,"p-slider",1),v("ngModelChange",function(l){return g(n.value,l)||(n.value=l),l}),i()(),s(8,"app-code",2)),r&2&&(a(7),f("ngModel",n.value),a(),m("code",n.code))},dependencies:[c,y,C,S,u],encapsulation:2})}return o})();var Y=(()=>{class o{filter=0;filterValues=[100,100,0];filterOptions=[{label:"Contrast",value:0},{label:"Brightness",value:1},{label:"Sepia",value:2}];code={basic:`<img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
<p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />`,html:`<div class="card flex justify-center">
    <div class="flex flex-col items-center">
        <img alt="user header" class="w-full md:w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
        <p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
        <p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
    selector: 'slider-filter-demo',
    templateUrl: './slider-filter-demo.html',
    standalone: true,
    imports: [FormsModule, SliderModule, SelectButtonModule]
})
export class SliderFilterDemo {
    filter: number = 0;

    filterValues: number[] = [100, 100, 0];

    filterOptions: any = [
        { label: 'Contrast', value: 0 },
        { label: 'Brightness', value: 1 },
        { label: 'Sepia', value: 2 },
    ];

    get filterStyle() {
        return {
            filter: \`contrast(\${this.filterValues[0]}%) brightness(\${this.filterValues[1]}%) sepia(\${this.filterValues[2]}%)\`,
        };
    }
}`};get filterStyle(){return{filter:`contrast(${this.filterValues[0]}%) brightness(${this.filterValues[1]}%) sepia(${this.filterValues[2]}%)`}}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["filter-doc"]],standalone:!1,decls:9,vars:8,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","items-center"],["alt","user header","src","https://primefaces.org/cdn/primevue/images/card-vue.jpg",1,"w-full","md:w-80","rounded","mb-6"],["optionLabel","label","optionValue","value",1,"mb-4",3,"ngModelChange","ngModel","options"],[1,"w-56",3,"ngModelChange","ngModel","min","max"],["selector","slider-filter-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Image filter implementation using multiple sliders."),i()(),t(3,"div",0)(4,"div",1),s(5,"img",2),t(6,"p-selectbutton",3),v("ngModelChange",function(l){return g(n.filter,l)||(n.filter=l),l}),i(),t(7,"p-slider",4),v("ngModelChange",function(l){return g(n.filterValues[n.filter],l)||(n.filterValues[n.filter]=l),l}),i()()(),s(8,"app-code",5)),r&2&&(a(5),T(n.filterStyle),a(),f("ngModel",n.filter),m("options",n.filterOptions),a(),f("ngModel",n.filterValues[n.filter]),m("min",0)("max",200),a(),m("code",n.code))},dependencies:[c,y,C,S,u,U],encapsulation:2})}return o})();var Z=(()=>{class o{code={typescript:"import { SliderModule } from 'primeng/slider';"};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,n){r&1&&s(0,"app-code",0),r&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return o})();var $=(()=>{class o{value=50;code={basic:`<input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
<p-slider [(ngModel)]="value" class="w-full" />`,html:`<div class="card flex justify-center">
    <div>
        <input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
        <p-slider [(ngModel)]="value" class="w-full" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'slider-input-demo',
    templateUrl: './slider-input-demo.html',
    standalone: true,
    imports: [FormsModule, Slider, InputTextModule]
})
export class SliderInputDemo {
    value: number = 50;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["input-doc"]],standalone:!1,decls:8,vars:3,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","",1,"w-full","mb-4",3,"ngModelChange","ngModel"],[1,"w-full",3,"ngModelChange","ngModel"],["selector","slider-input-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Slider is connected to an input field using two-way binding."),i()(),t(3,"div",0)(4,"div")(5,"input",1),v("ngModelChange",function(l){return g(n.value,l)||(n.value=l),l}),i(),t(6,"p-slider",2),v("ngModelChange",function(l){return g(n.value,l)||(n.value=l),l}),i()()(),s(7,"app-code",3)),r&2&&(a(5),f("ngModel",n.value),a(),f("ngModel",n.value),a(),m("code",n.code))},dependencies:[c,A,y,C,S,u,z],encapsulation:2})}return o})();var ee=(()=>{class o{rangeValues=[20,80];code={basic:'<p-slider [(ngModel)]="rangeValues" [range]="true" styleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="rangeValues" [range]="true" styleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-range-demo',
    templateUrl: './slider-range-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderRangeDemo {
    rangeValues: number[] = [20, 80];
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["range-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["styleClass","w-56",3,"ngModelChange","ngModel","range"],["selector","slider-range-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"range"),i(),e(5," property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value."),i()(),t(6,"div",0)(7,"p-slider",1),v("ngModelChange",function(l){return g(n.rangeValues,l)||(n.rangeValues=l),l}),i()(),s(8,"app-code",2)),r&2&&(a(7),f("ngModel",n.rangeValues),m("range",!0),a(),m("code",n.code))},dependencies:[c,y,C,S,u],encapsulation:2})}return o})();var te=(()=>{class o{formGroup;ngOnInit(){this.formGroup=new B({value:new W(20)})}code={basic:`<form [formGroup]="formGroup">
    <p-slider formControlName="value" styleClass="w-56" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-slider formControlName="value" styleClass="w-56" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-reactive-forms-demo',
    templateUrl: './slider-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Slider]
})
export class SliderReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(20),
        });
    }
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","value","styleClass","w-56"],["selector","slider-reactive-forms-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Slider can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),t(6,"div",0)(7,"form",1),s(8,"p-slider",2),i()(),s(9,"app-code",3)),r&2&&(a(7),m("formGroup",n.formGroup),a(2),m("code",n.code))},dependencies:[c,j,y,N,L,R,S,u],encapsulation:2})}return o})();var ie=(()=>{class o{value=20;code={basic:'<p-slider [(ngModel)]="value" [step]="20" styleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" [step]="20" styleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-step-demo',
    templateUrl: './slider-step-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderStepDemo {
    value: number = 20;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["step-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["styleClass","w-56",3,"ngModelChange","ngModel","step"],["selector","slider-step-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Size of each movement is defined with the "),t(3,"i"),e(4,"step"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-slider",1),v("ngModelChange",function(l){return g(n.value,l)||(n.value=l),l}),i()(),s(8,"app-code",2)),r&2&&(a(7),f("ngModel",n.value),m("step",20),a(),m("code",n.code))},dependencies:[c,y,C,S,u],encapsulation:2})}return o})();var oe=(()=>{class o{value=50;code={basic:'<p-slider [(ngModel)]="value" orientation="vertical" styleClass="h-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" orientation="vertical" styleClass="h-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-vertical-demo',
    templateUrl: './slider-vertical-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderVerticalDemo {
    value: number = 50
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["vertical-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["orientation","vertical","styleClass","h-56",3,"ngModelChange","ngModel"],["selector","slider-vertical-demo",3,"code"]],template:function(r,n){r&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Default layout of slider is "),t(3,"i"),e(4,"horizontal"),i(),e(5,", use "),t(6,"i"),e(7,"orientation"),i(),e(8," property for the alternative "),t(9,"i"),e(10,"vertical"),i(),e(11," mode."),i()(),t(12,"div",0)(13,"p-slider",1),v("ngModelChange",function(l){return g(n.value,l)||(n.value=l),l}),i()(),s(14,"app-code",2)),r&2&&(a(13),f("ngModel",n.value),a(),m("code",n.code))},dependencies:[c,y,C,S,u],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=_({type:o});static \u0275inj=F({imports:[I,q,G,O,H,E,K,k,P,E]})}return o})();var le=()=>["Slider"],ne=(()=>{class o{docs=[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:te},{id:"input",label:"Input",component:$},{id:"step",label:"Step",component:ie},{id:"range",label:"Range",component:ee},{id:"filter",label:"Filter",component:Y},{id:"vertical",label:"Vertical",component:oe},{id:"accessibility",label:"Accessibility",component:Q}];static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Slider Component","header","Slider","description","Slider is a component to provide input with a drag handle.","themeDocs","slider",3,"docs","apiDocs"]],template:function(r,n){r&1&&s(0,"app-doc",0),r&2&&m("docs",n.docs)("apiDocs",V(2,le))},dependencies:[re,J],encapsulation:2})}return o})();var mt=[{path:"",component:ne}];export{mt as default};
