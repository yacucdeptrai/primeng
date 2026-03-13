import './polyfills.server.mjs';
import{a as d}from"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import{a as f,d as q,e as _}from"./chunk-HZSAMTDM.mjs";import{a as u,b as K}from"./chunk-EK6YV52O.mjs";import{e as y,f as z,g as I,i as G,j as M,k as R,l as P,m as U,s as k,t as J}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as V}from"./chunk-RUZVPFSZ.mjs";import{Bb as p,Cb as i,Db as l,Dc as N,Eb as c,Lb as j,O as w,Sa as r,X as E,Y as F,dc as W,ec as n,gb as m,hb as T,jc as g,kc as b,lc as v,mb as L,pc as A}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var H=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["select-button-accessibility-doc"]],standalone:!1,decls:41,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,t){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),l(),i(4,"p"),n(5," The container element that wraps the buttons has a "),i(6,"i"),n(7,"group"),l(),n(8," role whereas each button element uses "),i(9,"i"),n(10,"button"),l(),n(11," role and "),i(12,"i"),n(13,"aria-pressed"),l(),n(14," is updated depending on selection state. Value to describe an option is automatically set using the "),i(15,"i"),n(16,"ariaLabel"),l(),n(17," property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only. "),l()(),i(18,"h3"),n(19,"Keyboard Support"),l(),i(20,"div",0)(21,"table",1)(22,"thead")(23,"tr")(24,"th"),n(25,"Key"),l(),i(26,"th"),n(27,"Function"),l()()(),i(28,"tbody")(29,"tr")(30,"td")(31,"i"),n(32,"tab"),l()(),i(33,"td"),n(34,"Moves focus to the buttons."),l()(),i(35,"tr")(36,"td")(37,"i"),n(38,"space"),l()(),i(39,"td"),n(40,"Toggles the checked state of a button."),l()()()()()())},dependencies:[f],encapsulation:2})}return e})();var Q=(()=>{class e{stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];value="one-way";code={basic:'<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-basic-demo',
    templateUrl: './select-button-basic-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonBasicDemo {
    stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

    value: string = 'off';
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","label","optionValue","value","aria-labelledby","basic",3,"ngModelChange","options","ngModel"],["selector","select-button-basic-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"SelectButton requires a value to bind and a collection of options."),l()(),i(3,"div",0)(4,"p-selectbutton",1),v("ngModelChange",function(a){return b(t.value,a)||(t.value=a),a}),l()(),c(5,"app-code",2)),o&2&&(r(4),p("options",t.stateOptions),g("ngModel",t.value),r(),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();var X=(()=>{class e{stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}];stateOptions2=[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2",constant:!0}];value1="off";value2="Option 1";code={basic:`<p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />

<p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />`,html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />
    <p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-disabled-demo',
    templateUrl: './select-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonDisabledDemo {
    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    stateOptions2: any[] = [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2', constant: true }
    ];

    value1: string = 'off';

    value2: string = 'Option 1';
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["disabled-doc"]],standalone:!1,decls:13,vars:6,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel","disabled"],["optionLabel","label","optionValue","value","optionDisabled","constant",3,"ngModelChange","options","ngModel"],["selector","select-button-disabled-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"When "),i(3,"i"),n(4,"disabled"),l(),n(5," is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the "),i(6,"i"),n(7,"optionDisabled"),l(),n(8," property."),l()(),i(9,"div",0)(10,"p-selectbutton",1),v("ngModelChange",function(a){return b(t.value1,a)||(t.value1=a),a}),l(),i(11,"p-selectbutton",2),v("ngModelChange",function(a){return b(t.value2,a)||(t.value2=a),a}),l()(),c(12,"app-code",3)),o&2&&(r(10),p("options",t.stateOptions),g("ngModel",t.value1),p("disabled",!0),r(),p("options",t.stateOptions2),g("ngModel",t.value2),r(),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();var Y=(()=>{class e{code={typescript:"import { SelectButtonModule } from 'primeng/selectbutton';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["select-button-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&c(0,"app-code",0),o&2&&p("code",t.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return e})();var Z=(()=>{class e{stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];value="off";code={basic:'<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-invalid-demo',
    templateUrl: './select-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonInvalidDemo {
    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' },
    ];

    value: string = 'off';
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","label","optionValue","value",1,"ng-invalid","ng-dirty",3,"ngModelChange","options","ngModel"],["selector","select-button-invalid-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Invalid state style is added using the "),i(3,"i"),n(4,"ng-invalid"),l(),n(5," and "),i(6,"i"),n(7,"ng-dirty"),l(),n(8," class to indicate a failed validation."),l()(),i(9,"div",0)(10,"p-selectbutton",1),v("ngModelChange",function(a){return b(t.value,a)||(t.value=a),a}),l()(),c(11,"app-code",2)),o&2&&(r(10),p("options",t.stateOptions),g("ngModel",t.value),r(),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();var $=(()=>{class e{paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}];value;code={basic:'<p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-multiple-demo',
    templateUrl: './select-button-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonMultipleDemo {
    value!: number;

    paymentOptions: any[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];

}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["multiple-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","optionValue","value",3,"ngModelChange","options","ngModel","multiple"],["selector","select-button-multiple-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"SelectButton allows selecting only one item by default and setting "),i(3,"i"),n(4,"multiple"),l(),n(5," option enables choosing more than one item. In multiple case, model property should be an array."),l()(),i(6,"div",0)(7,"p-selectbutton",1),v("ngModelChange",function(a){return b(t.value,a)||(t.value=a),a}),l()(),c(8,"app-code",2)),o&2&&(r(7),p("options",t.paymentOptions),g("ngModel",t.value),p("multiple",!0),r(),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();var ee=(()=>{class e{formGroup;stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}];ngOnInit(){this.formGroup=new I({value:new G("on")})}code={basic:`<form [formGroup]="formGroup">
    <p-selectbutton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-selectbutton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-reactive-forms-demo',
    templateUrl: './select-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, SelectButton]
})
export class SelectButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl('on')
        });
    }
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","value","optionLabel","label","optionValue","value",3,"options"],["selector","select-button-reactive-forms-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"SelectButton can also be used with reactive forms. In this case, the "),i(3,"i"),n(4,"formControlName"),l(),n(5," property is used to bind the component to a form control."),l()(),i(6,"div",0)(7,"form",1),c(8,"p-selectbutton",2),l()(),c(9,"app-code",3)),o&2&&(r(7),p("formGroup",t.formGroup),r(),p("options",t.stateOptions),r(),p("code",t.code))},dependencies:[u,f,d,R,y,z,U,P],encapsulation:2})}return e})();var te=(()=>{class e{value1;value2="Beginner";value3="Expert";options=[{label:"Beginner",value:"Beginner"},{label:"Expert",value:"Expert"}];code={basic:`<p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
<p-selectbutton [(ngModel)]="value2" [options]="options" />
<p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
    <p-selectbutton [(ngModel)]="value2" [options]="options" />
    <p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-sizes-demo',
    templateUrl: './select-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonSizesDemo {
    value1! : string;

    value2 : string = 'Beginner';

    value3 : string = 'Expert';

    options: any[] = [
        { label: 'Beginner', value: 'Beginner' },
        { label: 'Expert', value: 'Expert' },
    ];
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small",3,"ngModelChange","ngModel","options"],[3,"ngModelChange","ngModel","options"],["size","large",3,"ngModelChange","ngModel","options"],["selector","select-button-sizes-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"SelectButton provides "),i(3,"i"),n(4,"small"),l(),n(5," and "),i(6,"i"),n(7,"large"),l(),n(8," sizes as alternatives to the base."),l()(),i(9,"div",0)(10,"p-selectbutton",1),v("ngModelChange",function(a){return b(t.value1,a)||(t.value1=a),a}),l(),i(11,"p-selectbutton",2),v("ngModelChange",function(a){return b(t.value2,a)||(t.value2=a),a}),l(),i(12,"p-selectbutton",3),v("ngModelChange",function(a){return b(t.value3,a)||(t.value3=a),a}),l()(),c(13,"app-code",4)),o&2&&(r(10),g("ngModel",t.value1),p("options",t.options),r(),g("ngModel",t.value2),p("options",t.options),r(),g("ngModel",t.value3),p("options",t.options),r(),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();function ae(e,le){if(e&1&&c(0,"i"),e&2){let s=le.$implicit;W(s.icon)}}var oe=(()=>{class e{value;justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}];code={basic:`<p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
    <ng-template #item let-item>
        <i [class]="item.icon"></i>
    </ng-template>
</p-selectbutton>`,html:`<div class="card flex justify-center">
    <p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
            <ng-template #item let-item>
                <i [class]="item.icon"></i>
            </ng-template>
    </p-selectbutton>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-template-demo',
    templateUrl: './select-button-template-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButtonModule]
})
export class SelectButtonTemplateDemo {
    value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];

}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["template-doc"]],standalone:!1,decls:11,vars:3,consts:[["item",""],[1,"card","flex","justify-center"],["optionLabel","justify",3,"ngModelChange","options","ngModel"],["selector","select-button-template-demo",3,"code"]],template:function(o,t){if(o&1){let C=j();i(0,"app-docsectiontext")(1,"p"),n(2,"For custom content support define a ng-template with "),i(3,"i"),n(4,"pTemplate"),l(),n(5," where the local ng-template variable refers to an option in the options collection."),l()(),i(6,"div",1)(7,"p-selectbutton",2),v("ngModelChange",function(x){return E(C),b(t.value,x)||(t.value=x),F(x)}),L(8,ae,1,2,"ng-template",null,0,N),l()(),c(10,"app-code",3)}o&2&&(r(7),p("options",t.justifyOptions),g("ngModel",t.value),r(3),p("code",t.code))},dependencies:[u,f,d,y,M],encapsulation:2})}return e})();var ne=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=T({type:e});static \u0275inj=w({imports:[V,K,_,d,k,J,_]})}return e})();var pe=()=>["SelectButton"],ie=(()=>{class e{docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:Q},{id:"reactive-forms",label:"Reactive Forms",component:ee},{id:"multiple",label:"Multiple",component:$},{id:"template",label:"Template",component:oe},{id:"sizes",label:"Sizes",component:te},{id:"invalid",label:"Invalid",component:Z},{id:"disabled",label:"Disabled",component:X},{id:"accessibility",label:"Accessibility",component:H}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular SelectButton Component","header","SelectButton","description","SelectButton is used to choose single or multiple items from a list using buttons.","themeDocs","selectbutton",3,"docs","apiDocs"]],template:function(o,t){o&1&&c(0,"app-doc",0),o&2&&p("docs",t.docs)("apiDocs",A(2,pe))},dependencies:[ne,q],encapsulation:2})}return e})();var tt=[{path:"",component:ie}];export{tt as default};
