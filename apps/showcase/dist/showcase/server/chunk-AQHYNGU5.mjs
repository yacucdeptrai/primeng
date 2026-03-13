import './polyfills.server.mjs';
import{a as M,b as te}from"./chunk-PFWW3SMH.mjs";import{a as q,b as J}from"./chunk-LTP35ICR.mjs";import{a as ee,b as oe}from"./chunk-TUWVE3ES.mjs";import{a as Z,b as $}from"./chunk-IIW25JG6.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as f,d as Y,e as E}from"./chunk-HZSAMTDM.mjs";import{a as c,b as X}from"./chunk-EK6YV52O.mjs";import{e as v,f as z,g as G,i as R,j as b,k as U,l as O,m as V,s as K,t as H,v as Q}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{f as _,j}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as B}from"./chunk-RUZVPFSZ.mjs";import{Bb as s,Cb as o,Db as t,Dc as L,Eb as d,Lb as k,O as F,Sa as n,X as T,Y as A,ec as e,gb as m,hb as I,jc as u,kc as g,lc as w,mb as W,pc as N}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var ae=(()=>{class a{code={basic:`<label for="pwd1">Password</label>
<p-password inputId="pwd1" />

<span id="pwd2">Password</span>
<p-password ariaLabelledBy="pwd2" />

<p-password ariaLabel="Password" />`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["password-accessibility-doc"]],standalone:!1,decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),o(4,"p"),e(5," Value to describe the component can either be provided via "),o(6,"i"),e(7,"label"),t(),e(8," tag combined with "),o(9,"i"),e(10,"id"),t(),e(11," prop or using "),o(12,"i"),e(13,"ariaLabelledBy"),t(),e(14,", "),o(15,"i"),e(16,"ariaLabel"),t(),e(17," props. Screen reader is notified about the changes to the strength of the password using a section that has "),o(18,"i"),e(19,"aria-live"),t(),e(20," while typing. "),t()(),d(21,"app-code",0),o(22,"h3"),e(23,"Keyboard Support"),t(),o(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),e(29,"Key"),t(),o(30,"th"),e(31,"Function"),t()()(),o(32,"tbody")(33,"tr")(34,"td")(35,"i"),e(36,"tab"),t()(),o(37,"td"),e(38,"Moves focus to the input."),t()(),o(39,"tr")(40,"td")(41,"i"),e(42,"escape"),t()(),o(43,"td"),e(44,"Hides the strength meter if open."),t()()()()()()),i&2&&(n(21),s("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c,f],encapsulation:2})}return a})();var ie=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [feedback]="false" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-basic-demo',
    templateUrl: './password-basic-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordBasicDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel","feedback"],["selector","password-basic-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Two-way value binding is defined using "),o(3,"i"),e(4,"ngModel"),t(),e(5,"."),t()(),o(6,"div",0)(7,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(8,"app-code",2)),i&2&&(n(7),u("ngModel",l.value),s("feedback",!1),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var le=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-disabled-demo',
    templateUrl: './password-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordDisabledDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["placeholder","Disabled","autocomplete","off",3,"ngModelChange","ngModel","disabled"],["selector","password-disabled-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"When "),o(3,"i"),e(4,"disabled"),t(),e(5," is present, the element cannot be edited and focused."),t()(),o(6,"div",0)(7,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(8,"app-code",2)),i&2&&(n(7),u("ngModel",l.value),s("disabled",!0),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var re=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" variant="filled" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [feedback]="false" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-filled-demo',
    templateUrl: './password-filled-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordFilledDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled","autocomplete","off",3,"ngModelChange","ngModel","feedback"],["selector","password-filled-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),o(3,"i"),e(4,"variant"),t(),e(5," property as "),o(6,"i"),e(7,"filled"),t(),e(8," to display the component with a higher visual emphasis than the default "),o(9,"i"),e(10,"outlined"),t(),e(11," style."),t()(),o(12,"div",0)(13,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(14,"app-code",2)),i&2&&(n(13),u("ngModel",l.value),s("feedback",!1),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var ne=(()=>{class a{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-password [(ngModel)]="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-password [(ngModel)]="value2" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-password [(ngModel)]="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-password [(ngModel)]="value1" inputId="over_label" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-password [(ngModel)]="value2" inputId="in_label" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-password [(ngModel)]="value3" inputId="on_label" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'password-floatlabel-demo',
    templateUrl: './password-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, FloatLabelModule]
})
export class PasswordFloatlabelDemo {
    value1!: string;

    value2!: string;

    value3!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","password-floatlabel-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),o(3,"a",0),e(4,"FloatLabel"),t(),e(5," documentation for more information. "),t()(),o(6,"div",1)(7,"p-floatlabel")(8,"p-password",2),w("ngModelChange",function(r){return g(l.value1,r)||(l.value1=r),r}),t(),o(9,"label",3),e(10,"Over Label"),t()(),o(11,"p-floatlabel",4)(12,"p-password",5),w("ngModelChange",function(r){return g(l.value2,r)||(l.value2=r),r}),t(),o(13,"label",6),e(14,"In Label"),t()(),o(15,"p-floatlabel",7)(16,"p-password",8),w("ngModelChange",function(r){return g(l.value3,r)||(l.value3=r),r}),t(),o(17,"label",9),e(18,"On Label"),t()()(),d(19,"app-code",10)),i&2&&(n(8),u("ngModel",l.value1),n(4),u("ngModel",l.value2),n(4),u("ngModel",l.value3),n(3),s("code",l.code))},dependencies:[c,f,M,v,b,_,Z],encapsulation:2})}return a})();var se=(()=>{class a{value;code={basic:`<p-iftalabel>
    <p-password [(ngModel)]="value" inputId="password" />
    <label for="password">Password</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-password [(ngModel)]="value" inputId="password" />
        <label for="password">Password</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'password-iftalabel-demo',
    templateUrl: './password-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, IftaLabelModule]
})
export class PasswordIftaLabelDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","password","autocomplete","off",3,"ngModelChange","ngModel"],["for","password"],["selector","password-iftalabel-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),o(3,"a",0),e(4,"IftaLabel"),t(),e(5," documentation for more information."),t()(),o(6,"div",1)(7,"p-iftalabel")(8,"p-password",2),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t(),o(9,"label",3),e(10,"Password"),t()()(),d(11,"app-code",4)),i&2&&(n(8),u("ngModel",l.value),n(3),s("code",l.code))},dependencies:[c,f,M,v,b,_,ee],encapsulation:2})}return a})();var de=(()=>{class a{code={typescript:"import { PasswordModule } from 'primeng/password';"};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["password-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,l){i&1&&d(0,"app-code",0),i&2&&s("code",l.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return a})();var pe=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Password" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Password" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-invalid-demo',
    templateUrl: './password-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordInvalidDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["autocomplete","off","placeholder","Password",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","password-invalid-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),o(3,"i"),e(4,"ng-invalid"),t(),e(5," and "),o(6,"i"),e(7,"ng-dirty"),t(),e(8," class to indicate a failed validation."),t()(),o(9,"div",0)(10,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(11,"app-code",2)),i&2&&(n(10),u("ngModel",l.value),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var me=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-locale-demo',
    templateUrl: './password-locale-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordLocaleDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["locale-doc"]],standalone:!1,decls:20,vars:2,consts:[["href","/configuration/#locale"],[1,"card","flex","justify-center"],["promptLabel","Choose a password","weakLabel","Too simple","mediumLabel","Average complexity","strongLabel","Complex password","autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-locale-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Labels are translated at component level by "),o(3,"i"),e(4,"promptLabel"),t(),e(5,", "),o(6,"i"),e(7,"weakLabel"),t(),e(8,", "),o(9,"i"),e(10,"mediumLabel"),t(),e(11," and "),o(12,"i"),e(13,"strongLabel"),t(),e(14," properties. In order to apply global translations for all Password components in the application, refer to the "),o(15,"a",0),e(16,"locale"),t()()(),o(17,"div",1)(18,"p-password",2),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(19,"app-code",3)),i&2&&(n(18),u("ngModel",l.value),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var ce=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-meter-demo',
    templateUrl: './password-meter-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordMeterDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["meter-doc"]],standalone:!1,decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-meter-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Strength meter is displayed as a popup while a value is being entered."),t()(),o(3,"div",0)(4,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(5,"app-code",2)),i&2&&(n(4),u("ngModel",l.value),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var fe=(()=>{class a{formGroup;ngOnInit(){this.formGroup=new G({value:new R})}code={basic:`<form [formGroup]="formGroup">
    <p-password formControlName="value" [feedback]="false" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-password formControlName="value" [feedback]="false" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
    selector: 'password-reactive-forms-demo',
    templateUrl: './password-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, PasswordModule]
})
export class PasswordReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl()
        });
    }
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","value","autocomplete","off",3,"feedback"],["selector","password-reactive-forms-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Password can also be used with reactive forms. In this case, the "),o(3,"i"),e(4,"formControlName"),t(),e(5," property is used to bind the component to a form control."),t()(),o(6,"div",0)(7,"form",1),d(8,"p-password",2),t()(),d(9,"app-code",3)),i&2&&(n(7),s("formGroup",l.formGroup),n(),s("feedback",!1),n(),s("code",l.code))},dependencies:[c,f,M,U,v,z,V,O],encapsulation:2})}return a})();var ue=(()=>{class a{value1;value2;value3;code={basic:`<p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
<p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
<p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
    <p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
    <p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-sizes-demo',
    templateUrl: './password-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordSizesDemo {
    value1: string;

    value2: string;

    value3: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["type","text","size","small","placeholder","Small",3,"ngModelChange","ngModel"],["type","text","placeholder","Normal",3,"ngModelChange","ngModel"],["type","text","size","large","placeholder","Large",3,"ngModelChange","ngModel"],["selector","password-sizes-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Password provides "),o(3,"i"),e(4,"small"),t(),e(5," and "),o(6,"i"),e(7,"large"),t(),e(8," sizes as alternatives to the base."),t()(),o(9,"div",0)(10,"p-password",1),w("ngModelChange",function(r){return g(l.value1,r)||(l.value1=r),r}),t(),o(11,"p-password",2),w("ngModelChange",function(r){return g(l.value2,r)||(l.value2=r),r}),t(),o(12,"p-password",3),w("ngModelChange",function(r){return g(l.value3,r)||(l.value3=r),r}),t()(),d(13,"app-code",4)),i&2&&(n(10),u("ngModel",l.value1),n(),u("ngModel",l.value2),n(),u("ngModel",l.value3),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();function Ce(a,be){a&1&&(o(0,"div",5),e(1,"Pick a password"),t())}function he(a,be){a&1&&(d(0,"p-divider"),o(1,"ul",6)(2,"li"),e(3,"At least one lowercase"),t(),o(4,"li"),e(5,"At least one uppercase"),t(),o(6,"li"),e(7,"At least one numeric"),t(),o(8,"li"),e(9,"Minimum 8 characters"),t()())}var ge=(()=>{class a{value;code={basic:`<p-password [(ngModel)]="value" autocomplete="off">
    <ng-template #header>
        <div class="font-semibold text-xm mb-4">Pick a password</div>
    </ng-template>
    <ng-template #footer>
        <p-divider />
        <ul class="pl-2 ml-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </ng-template>
</p-password>`,html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" autocomplete="off">
        <ng-template #header>
            <div class="font-semibold text-xm mb-4">Pick a password</div>
        </ng-template>
        <ng-template #footer>
            <p-divider />
            <ul class="pl-2 ml-2 my-0 leading-normal">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </ng-template>
    </p-password>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'password-template-demo',
    templateUrl: './password-template-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, DividerModule]
})
export class PasswordTemplateDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["template-doc"]],standalone:!1,decls:19,vars:2,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-template-demo",3,"code"],[1,"font-semibold","text-xm","mb-4"],[1,"pl-2","ml-2","my-0","leading-normal"]],template:function(i,l){if(i&1){let y=k();o(0,"app-docsectiontext")(1,"p"),e(2,"3 templates are included to customize the overlay. These are "),o(3,"i"),e(4,"header"),t(),e(5,", "),o(6,"i"),e(7,"content"),t(),e(8," and "),o(9,"i"),e(10,"footer"),t(),e(11,". Note that content overrides the default meter."),t()(),o(12,"div",2)(13,"p-password",3),w("ngModelChange",function(P){return T(y),g(l.value,P)||(l.value=P),A(P)}),W(14,Ce,2,0,"ng-template",null,0,L)(16,he,10,0,"ng-template",null,1,L),t()(),d(18,"app-code",4)}i&2&&(n(13),u("ngModel",l.value),n(5),s("code",l.code))},dependencies:[c,f,M,v,b,q],encapsulation:2})}return a})();var we=(()=>{class a{value;code={basic:'<p-password [(ngModel)]="value" [toggleMask]="true" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [toggleMask]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-toggle-mask-demo',
    templateUrl: './password-toggle-mask-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordToggleMaskDemo {
    value!: string;
}`};static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["togglemask-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel","toggleMask"],["selector","password-toggle-mask-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"When "),o(3,"i"),e(4,"toggleMask"),t(),e(5," is present, an icon is displayed to show the value as plain text."),t()(),o(6,"div",0)(7,"p-password",1),w("ngModelChange",function(r){return g(l.value,r)||(l.value=r),r}),t()(),d(8,"app-code",2)),i&2&&(n(7),u("ngModel",l.value),s("toggleMask",!0),n(),s("code",l.code))},dependencies:[c,f,M,v,b],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=I({type:a});static \u0275inj=F({imports:[B,Q,X,E,te,K,H,J,j,$,oe,E]})}return a})();var xe=()=>["Password","PasswordDirective"],Me=(()=>{class a{docs=[{id:"import",label:"Import",component:de},{id:"basic",label:"Basic",component:ie},{id:"reactive-forms",label:"Reactive Forms",component:fe},{id:"meter",label:"Meter",component:ce},{id:"locale",label:"Locale",component:me},{id:"togglemask",label:"Toggle Mask",component:we},{id:"template",label:"Template",component:ge},{id:"floatlabel",label:"Float Label",component:ne},{id:"iftalabel",label:"Ifta Label",component:se},{id:"sizes",label:"Sizes",component:ue},{id:"filled",label:"Filled",component:re},{id:"invalid",label:"Invalid",component:pe},{id:"disabled",label:"Disabled",component:le},{id:"accessibility",label:"Accessibility",component:ae}];static \u0275fac=function(i){return new(i||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Password Component","header","Password","description","Password displays strength indicator for password fields.","themeDocs","password",3,"docs","apiDocs"]],template:function(i,l){i&1&&d(0,"app-doc",0),i&2&&s("docs",l.docs)("apiDocs",N(2,xe))},dependencies:[ve,Y],encapsulation:2})}return a})();var Qo=[{path:"",component:Me}];export{Qo as default};
