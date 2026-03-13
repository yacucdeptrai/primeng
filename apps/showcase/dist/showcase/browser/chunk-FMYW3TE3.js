import{a as M,b as Q}from"./chunk-6TSCAW4U.js";import{a as H,b as J}from"./chunk-C47HG2XK.js";import{a as U,b as K}from"./chunk-YF7WV7YA.js";import{a as V,b as q}from"./chunk-C4X3ZIUF.js";import{a as v,d as G,e as I}from"./chunk-I6RUY6VJ.js";import{a as g,b as R}from"./chunk-CIUCWEWU.js";import{e as k,f as W,g as T,i as N,j as b,k as A,l as B,m as z,s as j,t as P}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{e as _,i as O}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as L}from"./chunk-O4W5DSIC.js";import{Ab as m,O as F,Qa as r,ac as e,eb as d,fb as w,fc as c,gc as u,hc as f,lc as E,xb as p,yb as t,zb as o}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var X=(()=>{class i{code={basic:`<label for="date">Date</label>
<p-inputmask inputId="date"/>

<span id="phone">Phone</span>
<p-inputmask ariaLabelledBy="phone"/>

<p-inputmask ariaLabel="Age"/>`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["input-mask-accessibility-doc"]],standalone:!1,decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),t(6,"i"),e(7,"label"),o(),e(8," tag combined with "),t(9,"i"),e(10,"id"),o(),e(11," prop or using "),t(12,"i"),e(13,"ariaLabelledBy"),o(),e(14,", "),t(15,"i"),e(16,"ariaLabel"),o(),e(17," props. "),o()(),m(18,"app-code",0),t(19,"h3"),e(20,"Keyboard Support"),o(),t(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),e(26,"Key"),o(),t(27,"th"),e(28,"Function"),o()()(),t(29,"tbody")(30,"tr")(31,"td")(32,"i"),e(33,"tab"),o()(),t(34,"td"),e(35,"Moves focus to the input."),o()()()()()()),n&2&&(r(18),p("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,v],encapsulation:2})}return i})();var Y=(()=>{class i{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-basic-demo',
    templateUrl: './input-mask-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99-999999","placeholder","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-basic-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"InputMask is used as a controlled input with "),t(3,"i"),e(4,"ngModel"),o(),e(5," properties."),o()(),t(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(8,"app-code",2)),n&2&&(r(7),c("ngModel",a.value),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var Z=(()=>{class i{value;code={basic:'<p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-disabled-demo',
    templateUrl: './input-mask-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskDisabledDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["mask","999-99-9999",3,"ngModelChange","ngModel","disabled"],["selector","input-mask-disabled-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),o(),e(5," is present, the element cannot be edited and focused."),o()(),t(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(8,"app-code",2)),n&2&&(r(7),c("ngModel",a.value),p("disabled",!0),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var $=(()=>{class i{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-filled-demo',
    templateUrl: './input-mask-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskFilledDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99-999999","variant","filled","placeholder","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-filled-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),o(),e(5," property as "),t(6,"i"),e(7,"filled"),o(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),o(),e(11," style."),o()(),t(12,"div",0)(13,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(14,"app-code",2)),n&2&&(r(13),c("ngModel",a.value),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var ee=(()=>{class i{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from "primeng/floatlabel"

@Component({
    selector: 'input-mask-floatlabel-demo',
    templateUrl: './input-mask-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask, FloatLabel]
})
export class InputMaskFloatlabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["id","over_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["id","in_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["id","on_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-mask-floatlabel-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"FloatLabel visually integrates a label with its form element. Visit "),t(3,"a",0),e(4,"FloatLabel"),o(),e(5," documentation for more information."),o()(),t(6,"div",1)(7,"p-floatlabel")(8,"p-inputmask",2),f("ngModelChange",function(l){return u(a.value1,l)||(a.value1=l),l}),o(),t(9,"label",3),e(10,"Over Label"),o()(),t(11,"p-floatlabel",4)(12,"p-inputmask",5),f("ngModelChange",function(l){return u(a.value2,l)||(a.value2=l),l}),o(),t(13,"label",6),e(14,"In Label"),o()(),t(15,"p-floatlabel",7)(16,"p-inputmask",8),f("ngModelChange",function(l){return u(a.value3,l)||(a.value3=l),l}),o(),t(17,"label",9),e(18,"On Label"),o()()(),m(19,"app-code",10)),n&2&&(r(8),c("ngModel",a.value1),r(4),c("ngModel",a.value2),r(4),c("ngModel",a.value3),r(3),p("code",a.code))},dependencies:[k,b,M,_,g,v,U],encapsulation:2})}return i})();var te=(()=>{class i{value;code={basic:`<p-iftalabel>
    <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
    <label for="ssn">SSN</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
        <label for="ssn">SSN</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-mask-iftalabel-demo',
    templateUrl: './input-mask-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputMaskModule, IftaLabelModule]
})
export class InputMaskIftaLabelDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["id","ssn","mask","999-99-9999","autocomplete","off",3,"ngModelChange","ngModel"],["for","ssn"],["selector","input-mask-iftalabel-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),o(),e(5," documentation for more information."),o()(),t(6,"div",1)(7,"p-iftalabel")(8,"p-inputmask",2),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o(),t(9,"label",3),e(10,"SSN"),o()()(),m(11,"app-code",4)),n&2&&(r(8),c("ngModel",a.value),r(3),p("code",a.code))},dependencies:[k,b,M,_,g,v,V],encapsulation:2})}return i})();var oe=(()=>{class i{code={typescript:"import { InputMaskModule } from 'primeng/inputmask';"};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["input-mask-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&m(0,"app-code",0),n&2&&p("code",a.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return i})();var ae=(()=>{class i{value;code={basic:'<p-inputmask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Serial Key" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Serial Key" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-invalid-demo',
    templateUrl: './input-mask-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskInvalidDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["mask","999-99-9999","placeholder","Serial Key",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-mask-invalid-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),o(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),o(),e(8," class to indicate a failed validation."),o()(),t(9,"div",0)(10,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(11,"app-code",2)),n&2&&(r(10),c("ngModel",a.value),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var ie=(()=>{class i{value1;value2;value3;code={basic:`<span class="font-bold block mb-2">SSN</span>
<p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
<span class="font-bold block mb-2">Phone</span>
<p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
<span class="font-bold block mb-2">Serial Number</span>
<p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <span class="font-bold block mb-2">SSN</span>
        <p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
    </div>
    <div class="flex-auto">
        <span class="font-bold block mb-2">Phone</span>
        <p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
    </div>
    <div class="flex-auto">
        <span class="font-bold block mb-2">Serial Number</span>
        <p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-mask-mask-demo',
    templateUrl: './input-mask-mask-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask, Fluid]
})
export class InputMaskMaskDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["input-mask-mask-demo"]],standalone:!1,decls:35,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],[1,"font-bold","block","mb-2"],["mask","999-99-9999","placeholder","999-99-9999",3,"ngModelChange","ngModel"],["mask","(999) 999-9999","placeholder","(999) 999-9999",3,"ngModelChange","ngModel"],["mask","a*-999-a999","placeholder","a*-999-a999",3,"ngModelChange","ngModel"],["selector","input-mask-mask-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Mask format can be a combination of the following definitions; "),t(3,"i"),e(4,"a"),o(),e(5," for alphabetic characters, "),t(6,"i"),e(7,"9"),o(),e(8," for numeric characters and "),t(9,"i"),e(10,"*"),o(),e(11," for alphanumberic characters. In addition, formatting characters like "),t(12,"i"),e(13,"("),o(),e(14," , "),t(15,"i"),e(16,")"),o(),e(17," , "),t(18,"i"),e(19,"-"),o(),e(20," are also accepted. "),o()(),t(21,"p-fluid",0)(22,"div",1)(23,"span",2),e(24,"SSN"),o(),t(25,"p-inputmask",3),f("ngModelChange",function(l){return u(a.value1,l)||(a.value1=l),l}),o()(),t(26,"div",1)(27,"span",2),e(28,"Phone"),o(),t(29,"p-inputmask",4),f("ngModelChange",function(l){return u(a.value2,l)||(a.value2=l),l}),o()(),t(30,"div",1)(31,"span",2),e(32,"Serial Number"),o(),t(33,"p-inputmask",5),f("ngModelChange",function(l){return u(a.value3,l)||(a.value3=l),l}),o()()(),m(34,"app-code",6)),n&2&&(r(25),c("ngModel",a.value1),r(4),c("ngModel",a.value2),r(4),c("ngModel",a.value3),r(),p("code",a.code))},dependencies:[k,b,M,g,v,H],encapsulation:2})}return i})();var ne=(()=>{class i{value;code={basic:'<p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-optional-demo',
    templateUrl: './input-mask-optional-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskOptionalDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["optional-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["mask","(999) 999-9999? x99999","placeholder","(999) 999-9999? x99999",3,"ngModelChange","ngModel"],["selector","input-mask-optional-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When the input does not complete the mask definition, it is cleared by default. Use "),t(3,"i"),e(4,"autoClear"),o(),e(5," property to control this behavior. In addition, "),t(6,"i"),e(7,"?"),o(),e(8," is used to mark anything after the question mark optional."),o()(),t(9,"div",0)(10,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(11,"app-code",2)),n&2&&(r(10),c("ngModel",a.value),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var le=(()=>{class i{formGroup;ngOnInit(){this.formGroup=new T({value:new N(null)})}code={basic:'<p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputMask } from 'primeng/inputmask';

@Component({
    selector: 'input-mask-reactive-forms-demo',
    templateUrl: './input-mask-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputMask]
})
export class InputMaskReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl<string | null>(null)
        });
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["mask","99-999999","formControlName","value","placeholder","99-999999"],["selector","input-mask-reactive-forms-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"InputMask can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),o(),e(5," property is used to bind the component to a form control."),o()(),t(6,"div",0)(7,"form",1),m(8,"p-inputmask",2),o()(),m(9,"app-code",3)),n&2&&(r(7),p("formGroup",a.formGroup),r(2),p("code",a.code))},dependencies:[A,k,W,z,B,M,g,v],encapsulation:2})}return i})();var re=(()=>{class i{value1;value2;value3;code={basic:`<p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
<p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
<p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
    <p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
    <p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-sizes-demo',
    templateUrl: './input-mask-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskSizesDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["placeholder","Small","size","small","mask","99-999999",3,"ngModelChange","ngModel"],["placeholder","Normal","mask","99-999999",3,"ngModelChange","ngModel"],["placeholder","Large","size","large","mask","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-sizes-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"InputMask provides "),t(3,"i"),e(4,"small"),o(),e(5," and "),t(6,"i"),e(7,"large"),o(),e(8," sizes as alternatives to the base."),o()(),t(9,"div",0)(10,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value1,l)||(a.value1=l),l}),o(),t(11,"p-inputmask",2),f("ngModelChange",function(l){return u(a.value2,l)||(a.value2=l),l}),o(),t(12,"p-inputmask",3),f("ngModelChange",function(l){return u(a.value3,l)||(a.value3=l),l}),o()(),m(13,"app-code",4)),n&2&&(r(10),c("ngModel",a.value1),r(),c("ngModel",a.value2),r(),c("ngModel",a.value3),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var pe=(()=>{class i{value;code={basic:'<p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />',html:`<div class="card flex justify-center">
    <p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-slot-char-demo',
    templateUrl: './input-mask-slot-char-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskSlotCharDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["slot-char-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99/99/9999","placeholder","99/99/9999","slotChar","mm/dd/yyyy",3,"ngModelChange","ngModel"],["selector","input-mask-slot-char-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Default placeholder for a mask is underscore that can be customized using "),t(3,"i"),e(4,"slotChar"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return u(a.value,l)||(a.value=l),l}),o()(),m(8,"app-code",2)),n&2&&(r(7),c("ngModel",a.value),r(),p("code",a.code))},dependencies:[k,b,M,g,v],encapsulation:2})}return i})();var me=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=w({type:i});static \u0275inj=F({imports:[L,j,P,Q,O,R,I,K,J,q,I]})}return i})();var ce=()=>["InputMask"],se=(()=>{class i{docs=[{id:"import",label:"Import",component:oe},{id:"basic",label:"Basic",component:Y},{id:"reactive-forms",label:"Reactive Forms",component:le},{id:"mask",label:"Mask",component:ie},{id:"optional",label:"Optional",component:ne},{id:"slotchar",label:"SlotChar",component:pe},{id:"filled",label:"Filled",component:$},{id:"floatlabel",label:"Float Label",component:ee},{id:"iftalabel",label:"Ifta Label",component:te},{id:"sizes",label:"Sizes",component:re},{id:"invalid",label:"Invalid",component:ae},{id:"disabled",label:"Disabled",component:Z},{id:"accessibility",label:"Accessibility",component:X}];static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputMask Component","header","InputMask","description","InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.","themeDocs","inputmask",3,"docs","apiDocs"]],template:function(n,a){n&1&&m(0,"app-doc",0),n&2&&p("docs",a.docs)("apiDocs",E(2,ce))},dependencies:[me,G],encapsulation:2})}return i})();var Wt=[{path:"",component:se}];export{Wt as default};
