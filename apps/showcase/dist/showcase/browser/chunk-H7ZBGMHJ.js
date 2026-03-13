import{a as h,b as q}from"./chunk-VHOAM5CB.js";import{a as b,d as J,e as _}from"./chunk-I6RUY6VJ.js";import{a as p,b as H}from"./chunk-CIUCWEWU.js";import{e as x,f as P,g as V,i as j,j as y,k as G,l as R,m as O,s as U,t as Y}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as K}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as L,u as B}from"./chunk-O4W5DSIC.js";import{Ab as m,Hb as W,O as w,Ob as z,Qa as r,X as E,Y as F,ac as t,cc as N,eb as s,fb as I,fc as f,gc as u,hc as g,kb as T,lc as A,xb as c,yb as e,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Q=(()=>{class n{code={basic:`<label for="chkbox1">Remember Me</label>
<p-checkbox inputId="chkbox1"/>

<span id="chkbox2">Remember Me</span>
<p-checkbox ariaLabelledBy="chkbox2"/>

<p-checkbox ariaLabel="Remember Me"/>`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-accessibility-doc"]],standalone:!1,decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,o){a&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),e(4,"p"),t(5," Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via "),e(6,"i"),t(7,"label"),i(),t(8," tag combined with "),e(9,"i"),t(10,"inputId"),i(),t(11," prop or using "),e(12,"i"),t(13,"ariaLabelledBy"),i(),t(14,", "),e(15,"i"),t(16,"ariaLabel"),i(),t(17," props. "),i()(),m(18,"app-code",0),e(19,"h3"),t(20,"Keyboard Support"),i(),e(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),i(),e(27,"th"),t(28,"Function"),i()()(),e(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),i()(),e(34,"td"),t(35,"Moves focus to the checkbox."),i()(),e(36,"tr")(37,"td")(38,"i"),t(39,"space"),i()(),e(40,"td"),t(41,"Toggles the checked state."),i()()()()()()),a&2&&(r(18),c("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,b],encapsulation:2})}return n})();var X=(()=>{class n{checked=null;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-basic-demo',
    templateUrl: './checkbox-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-basic-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel","binary"],["selector","checkbox-basic-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Binary checkbox is used as a controlled input with "),e(3,"i"),t(4,"ngModel"),i(),t(5," and "),e(6,"i"),t(7,"binary"),i(),t(8," properties."),i()(),e(9,"div",0)(10,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i()(),m(11,"app-code",2)),a&2&&(r(10),f("ngModel",o.checked),c("binary",!0),r(),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var Z=(()=>{class n{checked1=!1;checked2=!0;code={basic:`<p-checkbox [(ngModel)]="checked1" [binary]="true" [disabled]="true" />
<p-checkbox [(ngModel)]="checked2" [binary]="true" [disabled]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-checkbox [(ngModel)]="checked1" [binary]="true" [disabled]="true" />
    <p-checkbox [(ngModel)]="checked2" [binary]="true" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-disabled-demo',
    templateUrl: './checkbox-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxDisabledDemo {
    checked1: boolean = false;

    checked2: boolean = true;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-disabled-demo"]],standalone:!1,decls:10,vars:7,consts:[[1,"card","flex","justify-center","gap-2"],[3,"ngModelChange","ngModel","binary","disabled"],["selector","checkbox-disabled-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"When "),e(3,"i"),t(4,"disabled"),i(),t(5," is present, the element cannot be edited and focused."),i()(),e(6,"div",0)(7,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked1,l)||(o.checked1=l),l}),i(),e(8,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked2,l)||(o.checked2=l),l}),i()(),m(9,"app-code",2)),a&2&&(r(7),f("ngModel",o.checked1),c("binary",!0)("disabled",!0),r(),f("ngModel",o.checked2),c("binary",!0)("disabled",!0),r(),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();function me(n,de){if(n&1){let d=W();e(0,"div",4)(1,"p-checkbox",5),g("ngModelChange",function(o){E(d);let k=z();return u(k.selectedCategories,o)||(k.selectedCategories=o),F(o)}),i(),e(2,"label",6),t(3),i()()}if(n&2){let d=de.$implicit,a=z();r(),c("inputId",d.key)("value",d),f("ngModel",a.selectedCategories),r(),c("for",d.key),r(),N(" ",d.name," ")}}var $=(()=>{class n{selectedCategories=[];categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];code={basic:`<div *ngFor="let category of categories" class="flex items-center">
    <p-checkbox [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories" />
    <label [for]="category.key" class="ml-2"> {{ category.name }} </label>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <div *ngFor="let category of categories" class="flex items-center">
            <p-checkbox [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories" />
            <label [for]="category.key" class="ml-2"> {{ category.name }} </label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'checkbox-dynamic-demo',
    templateUrl: './checkbox-dynamic-demo.html',
    standalone: true,
    imports: [FormsModule, CheckboxModule, CommonModule]
})
export class CheckboxDynamicDemo {
    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
    ];

    ngOnInit() {
        this.selectedCategories = [this.categories[1]];
    }
}`};ngOnInit(){this.selectedCategories=[this.categories[1]]}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-dynamic-demo"]],standalone:!1,decls:7,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["class","flex items-center",4,"ngFor","ngForOf"],["selector","checkbox-dynamic-demo",3,"code"],[1,"flex","items-center"],["name","group",3,"ngModelChange","inputId","value","ngModel"],[1,"ml-2",3,"for"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Checkboxes can be generated using a list of values."),i()(),e(3,"div",0)(4,"div",1),T(5,me,4,5,"div",2),i()(),m(6,"app-code",3)),a&2&&(r(5),c("ngForOf",o.categories),r(),c("code",o.code))},dependencies:[L,x,y,p,b,h],encapsulation:2})}return n})();var ee=(()=>{class n{checked=!1;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" variant="filled" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-filled-demo',
    templateUrl: './checkbox-filled-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxFilledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-filled-demo"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel","binary"],["selector","checkbox-filled-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Specify the "),e(3,"i"),t(4,"variant"),i(),t(5," property as "),e(6,"i"),t(7,"filled"),i(),t(8," to display the component with a higher visual emphasis than the default "),e(9,"i"),t(10,"outlined"),i(),t(11," style."),i()(),e(12,"div",0)(13,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i()(),m(14,"app-code",2)),a&2&&(r(13),f("ngModel",o.checked),c("binary",!0),r(),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var te=(()=>{class n{code={typescript:"import { CheckboxModule } from 'primeng/checkbox';"};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,o){a&1&&m(0,"app-code",0),a&2&&c("code",o.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return n})();var oe=(()=>{class n{checked=null;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" [indeterminate]="true" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" [indeterminate]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-indeterminate-demo',
    templateUrl: './checkbox-indeterminate-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxIndeterminateDemo {
    checked: boolean = false;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-indeterminate-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel","binary","indeterminate"],["selector","checkbox-indeterminate-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"When "),e(3,"i"),t(4,"indeterminate"),i(),t(5," is present, the checkbox masks the actual value visually."),i()(),e(6,"div",0)(7,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i()(),m(8,"app-code",2)),a&2&&(r(7),f("ngModel",o.checked),c("binary",!0)("indeterminate",!0),r(),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var ie=(()=>{class n{checked=!1;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" class="ng-invalid ng-dirty" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" class="ng-invalid ng-dirty" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-invalid-demo',
    templateUrl: './checkbox-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-invalid-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel","binary"],["selector","checkbox-invalid-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),e(3,"i"),t(4,"ng-invalid"),i(),t(5," and "),e(6,"i"),t(7,"ng-dirty"),i(),t(8," class to indicate a failed validation."),i()(),e(9,"div",0)(10,"p-checkbox",1),g("ngModelChange",function(l){return u(o.checked,l)||(o.checked=l),l}),i()(),m(11,"app-code",2)),a&2&&(r(10),f("ngModel",o.checked),c("binary",!0),r(),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var ne=(()=>{class n{pizza=[];code={basic:`<div class="flex items-center">
    <p-checkbox inputId="ingredient1" name="pizza"value="Cheese" [(ngModel)]="pizza" />
    <label for="ingredient1" class="ml-2"> Cheese </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient2" name="pizza" value="Mushroom" [(ngModel)]="pizza" />
    <label for="ingredient2" class="ml-2"> Mushroom </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient3" name="pizza" value="Pepper" [(ngModel)]="pizza" />
    <label for="ingredient3" class="ml-2"> Pepper </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient4" name="pizza" value="Onion" [(ngModel)]="pizza" />
    <label for="ingredient4" class="ml-2"> Onion </label>
</div>`,html:`<div class="card flex justify-center gap-4">
    <div class="flex items-center">
        <p-checkbox inputId="ingredient1" name="pizza"value="Cheese" [(ngModel)]="pizza" />
        <label for="ingredient1" class="ml-2"> Cheese </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient2" name="pizza" value="Mushroom" [(ngModel)]="pizza" />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient3" name="pizza" value="Pepper" [(ngModel)]="pizza" />
        <label for="ingredient3" class="ml-2"> Pepper </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient4" name="pizza" value="Onion" [(ngModel)]="pizza" />
        <label for="ingredient4" class="ml-2"> Onion </label>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-multiple-demo',
    templateUrl: './checkbox-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxMultipleDemo {
    pizza: string[] = [];
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-multiple-demo"]],standalone:!1,decls:21,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"flex","items-center"],["inputId","ingredient1","name","pizza","value","Cheese",3,"ngModelChange","ngModel"],["for","ingredient1",1,"ml-2"],["inputId","ingredient2","name","pizza","value","Mushroom",3,"ngModelChange","ngModel"],["for","ingredient2",1,"ml-2"],["inputId","ingredient3","name","pizza","value","Pepper",3,"ngModelChange","ngModel"],["for","ingredient3",1,"ml-2"],["inputId","ingredient4","name","pizza","value","Onion",3,"ngModelChange","ngModel"],["for","ingredient4",1,"ml-2"],["selector","checkbox-multiple-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Multiple checkboxes can be grouped together."),i()(),e(3,"div",0)(4,"div",1)(5,"p-checkbox",2),g("ngModelChange",function(l){return u(o.pizza,l)||(o.pizza=l),l}),i(),e(6,"label",3),t(7," Cheese "),i()(),e(8,"div",1)(9,"p-checkbox",4),g("ngModelChange",function(l){return u(o.pizza,l)||(o.pizza=l),l}),i(),e(10,"label",5),t(11," Mushroom "),i()(),e(12,"div",1)(13,"p-checkbox",6),g("ngModelChange",function(l){return u(o.pizza,l)||(o.pizza=l),l}),i(),e(14,"label",7),t(15," Pepper "),i()(),e(16,"div",1)(17,"p-checkbox",8),g("ngModelChange",function(l){return u(o.pizza,l)||(o.pizza=l),l}),i(),e(18,"label",9),t(19," Onion "),i()()(),m(20,"app-code",10)),a&2&&(r(5),f("ngModel",o.pizza),r(4),f("ngModel",o.pizza),r(4),f("ngModel",o.pizza),r(4),f("ngModel",o.pizza),r(3),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var ae=(()=>{class n{formGroup;ngOnInit(){this.formGroup=new V({city:new j(null)})}code={basic:`<form class="flex items-center gap-1" [formGroup]="formGroup">
    <p-checkbox formControlName="city" value="New York" inputId="ny" />
    <label for="ny" class="ml-2">New York</label>
</form>`,html:`<div class="card">
    <form class="flex items-center gap-1" [formGroup]="formGroup">
        <p-checkbox formControlName="city" value="New York" inputId="ny" />
        <label for="ny" class="ml-2">New York</label>
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-reactive-forms-demo',
    templateUrl: './checkbox-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Checkbox]
})
export class CheckboxReactiveFormsDemo implements OnInit{
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            city: new FormControl<string | null>(null)
        });
    }
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["reactive-forms-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card"],[1,"flex","items-center","justify-center","gap-1",3,"formGroup"],["formControlName","city","value","New York","inputId","ny"],["for","ny",1,"ml-2"],["selector","checkbox-reactive-forms-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Checkbox can also be used with reactive forms. In this case, the "),e(3,"i"),t(4,"formControlName"),i(),t(5," property is used to bind the component to a form control."),i()(),e(6,"div",0)(7,"form",1),m(8,"p-checkbox",2),e(9,"label",3),t(10,"New York"),i()()(),m(11,"app-code",4)),a&2&&(r(7),c("formGroup",o.formGroup),r(4),c("code",o.code))},dependencies:[G,x,P,p,b,h,O,R],encapsulation:2})}return n})();var le=(()=>{class n{size=null;code={basic:`<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
    <label for="size_small" class="text-sm">Small</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
    <label for="size_normal">Normal</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
    <label for="size_large" class="text-lg">Large</label>
</div>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-sizes-demo',
    templateUrl: './checkbox-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxSizesDemo {
    size: any = null;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["checkbox-sizes-demo"]],standalone:!1,decls:23,vars:4,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"flex","items-center","gap-2"],["inputId","size_small","name","size","value","Small","size","small",3,"ngModelChange","ngModel"],["for","size_small",1,"text-sm"],["inputId","size_normal","name","size","value","Normal",3,"ngModelChange","ngModel"],["for","size_normal"],["inputId","size_large","name","size","value","Large","size","large",3,"ngModelChange","ngModel"],["for","size_large",1,"text-lg"],["selector","checkbox-sizes-demo",3,"code"]],template:function(a,o){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Checkbox provides "),e(3,"i"),t(4,"small"),i(),t(5," and "),e(6,"i"),t(7,"large"),i(),t(8," sizes as alternatives to the base."),i()(),e(9,"div",0)(10,"div",1)(11,"p-checkbox",2),g("ngModelChange",function(l){return u(o.size,l)||(o.size=l),l}),i(),e(12,"label",3),t(13,"Small"),i()(),e(14,"div",1)(15,"p-checkbox",4),g("ngModelChange",function(l){return u(o.size,l)||(o.size=l),l}),i(),e(16,"label",5),t(17,"Normal"),i()(),e(18,"div",1)(19,"p-checkbox",6),g("ngModelChange",function(l){return u(o.size,l)||(o.size=l),l}),i(),e(20,"label",7),t(21,"Large"),i()()(),m(22,"app-code",8)),a&2&&(r(11),f("ngModel",o.size),r(4),f("ngModel",o.size),r(4),f("ngModel",o.size),r(3),c("code",o.code))},dependencies:[x,y,p,b,h],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=I({type:n});static \u0275inj=w({imports:[B,K,U,H,_,q,Y,_]})}return n})();var se=()=>["Checkbox"],ce=(()=>{class n{docs=[{id:"import",label:"Import",component:te},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:ae},{id:"indeterminate",label:"Indeterminate",component:oe},{id:"group",label:"Group",component:ne},{id:"dynamic",label:"Dynamic",component:$},{id:"filled",label:"Filled",component:ee},{id:"sizes",label:"Sizes",component:le},{id:"invalid",label:"Invalid",component:ie},{id:"disabled",label:"Disabled",component:Z},{id:"accessibility",label:"Accessibility",component:Q}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Checkbox Component","header","Checkbox","description","Checkbox is an extension to standard checkbox element with theming.","themeDocs","checkbox",3,"docs","apiDocs"]],template:function(a,o){a&1&&m(0,"app-doc",0),a&2&&c("docs",o.docs)("apiDocs",A(2,se))},dependencies:[re,J],encapsulation:2})}return n})();var Ct=[{path:"",component:ce}];export{Ct as default};
