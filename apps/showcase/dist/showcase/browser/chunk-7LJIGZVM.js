import{a as v}from"./chunk-K3W3SKUQ.js";import{a as b,d as Q,e as k}from"./chunk-I6RUY6VJ.js";import{a as g,b as J}from"./chunk-CIUCWEWU.js";import{e as y,f as G,g as P,i as O,j as h,k as j,l as U,m as V,s as K,t as q}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as H}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as w,u as L}from"./chunk-O4W5DSIC.js";import{Ab as s,Hb as A,O as B,Ob as R,Qa as l,X as I,Y as T,ac as t,bc as E,eb as p,fb as W,fc as c,gc as u,hc as f,kb as z,lc as N,xb as m,yb as e,zb as o}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var X=(()=>{class i{code={basic:`<label for="rb1">One</label>
<p-radiobutton inputId="rb1" />

<span id="rb2">Two</span>
<p-radiobutton ariaLabelledBy="rb2" />

<p-radiobutton ariaLabel="Three" />`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["radio-button-accessibility-doc"]],standalone:!1,decls:60,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(a,n){a&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),o(),e(4,"p"),t(5," RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via "),e(6,"i"),t(7,"label"),o(),t(8," tag combined with "),e(9,"i"),t(10,"inputId"),o(),t(11," prop or using "),e(12,"i"),t(13,"ariaLabelledBy"),o(),t(14,", "),e(15,"i"),t(16,"ariaLabel"),o(),t(17," props. "),o()(),s(18,"app-code",0),e(19,"h3"),t(20,"Keyboard Support"),o(),e(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),o(),e(27,"th"),t(28,"Function"),o()()(),e(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),o()(),e(34,"td"),t(35,"Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus."),o()(),e(36,"tr")(37,"td")(38,"span",3)(39,"i",4),t(40,"left arrow"),o(),e(41,"i"),t(42,"up arrow"),o()()(),e(43,"td"),t(44,"Moves focus to the previous radio button, if there is none then last radio button receives the focus."),o()(),e(45,"tr")(46,"td")(47,"span",3)(48,"i",4),t(49,"right arrow"),o(),e(50,"i"),t(51,"down arrow"),o()()(),e(52,"td"),t(53,"Moves focus to the next radio button, if there is none then first radio button receives the focus."),o()(),e(54,"tr")(55,"td")(56,"i"),t(57,"space"),o()(),e(58,"td"),t(59,"If the focused radio button is unchecked, changes the state to checked."),o()()()()()()),a&2&&(l(18),m("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,b],encapsulation:2})}return i})();var Y=(()=>{class i{value=2;code={basic:`<p-radiobutton [(ngModel)]="value" [value]="1" [disabled]="true" />
<p-radiobutton [(ngModel)]="value" [value]="2" [disabled]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-radiobutton [(ngModel)]="value" [value]="1" [disabled]="true" />
    <p-radiobutton [(ngModel)]="value" [value]="2" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-disabled-demo',
    templateUrl: './radio-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonDisabledDemo { }`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["disabled-doc"]],standalone:!1,decls:10,vars:7,consts:[[1,"card","flex","justify-center","gap-2"],[3,"ngModelChange","ngModel","value","disabled"],["selector","radio-button-disabled-demo",3,"code"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"When "),e(3,"i"),t(4,"disabled"),o(),t(5," is present, the element cannot be edited and focused."),o()(),e(6,"div",0)(7,"p-radiobutton",1),f("ngModelChange",function(r){return u(n.value,r)||(n.value=r),r}),o(),e(8,"p-radiobutton",1),f("ngModelChange",function(r){return u(n.value,r)||(n.value=r),r}),o()(),s(9,"app-code",2)),a&2&&(l(7),c("ngModel",n.value),m("value",1)("disabled",!0),l(),c("ngModel",n.value),m("value",2)("disabled",!0),l(),m("code",n.code))},dependencies:[g,b,v,y,h],encapsulation:2})}return i})();function de(i,F){if(i&1){let d=A();e(0,"div",4)(1,"p-radiobutton",5),f("ngModelChange",function(n){I(d);let x=R();return u(x.selectedCategory,n)||(x.selectedCategory=n),T(n)}),o(),e(2,"label",6),t(3),o()()}if(i&2){let d=F.$implicit,a=R();l(),m("inputId",d.key)("value",d),c("ngModel",a.selectedCategory),l(),m("for",d.key),l(),E(d.name)}}var Z=(()=>{class i{selectedCategory=null;categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];ngOnInit(){this.selectedCategory=this.categories[1]}code={basic:`<div class="flex flex-col gap-4">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radiobutton [inputId]="category.key"name="category" [value]="category" [(ngModel)]="selectedCategory" />
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <div *ngFor="let category of categories" class="field-checkbox">
            <p-radiobutton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" />
            <label [for]="category.key" class="ml-2">{{ category.name }}</label>
        </div>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-dynamic-demo',
    templateUrl: './radio-button-dynamic-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonDynamicDemo implements OnInit{
    selectedCategory: any = null;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["dynamic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","radio-button-dynamic-demo",3,"code"],[1,"field-checkbox"],["name","category",3,"ngModelChange","inputId","value","ngModel"],[1,"ml-2",3,"for"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"RadioButtons can be generated using a list of values."),o()(),e(3,"div",0)(4,"div",1),z(5,de,4,5,"div",2),o()(),s(6,"app-code",3)),a&2&&(l(5),m("ngForOf",n.categories),l(),m("code",n.code))},dependencies:[w,g,b,v,y,h],encapsulation:2})}return i})();var $=(()=>{class i{checked=!1;code={basic:'<p-radiobutton [(ngModel)]="checked" variant="filled" />',html:`<div class="card flex justify-center">
    <p-radiobutton [(ngModel)]="checked" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-filled-demo',
    templateUrl: './radio-button-filled-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonFilledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","radio-button-filled-demo",3,"code"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Specify the "),e(3,"i"),t(4,"variant"),o(),t(5," property as "),e(6,"i"),t(7,"filled"),o(),t(8," to display the component with a higher visual emphasis than the default "),e(9,"i"),t(10,"outlined"),o(),t(11," style."),o()(),e(12,"div",0)(13,"p-radiobutton",1),f("ngModelChange",function(r){return u(n.checked,r)||(n.checked=r),r}),o()(),s(14,"app-code",2)),a&2&&(l(13),c("ngModel",n.checked),l(),m("code",n.code))},dependencies:[g,b,v,y,h],encapsulation:2})}return i})();var ee=(()=>{class i{ingredient;code={basic:`<div class="flex flex-wrap gap-4">
    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
            <label for="ingredient1" class="ml-2">Cheese</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
            <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
            <label for="ingredient3" class="ml-2">Pepper</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
            <label for="ingredient4" class="ml-2">Onion</label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-group-demo',
    templateUrl: './radio-button-group-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonGroupDemo {
    ingredient!: string;
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["group-doc"]],standalone:!1,decls:28,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"ngModelChange","ngModel"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"ngModelChange","ngModel"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"ngModelChange","ngModel"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"ngModelChange","ngModel"],["for","ingredient4",1,"ml-2"],["selector","radio-button-group-demo",3,"code"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"RadioButton is used as a controlled input with "),e(3,"i"),t(4,"value"),o(),t(5," and "),e(6,"i"),t(7,"ngModel"),o(),t(8," properties."),o()(),e(9,"div",0)(10,"div",1)(11,"div",2)(12,"p-radiobutton",3),f("ngModelChange",function(r){return u(n.ingredient,r)||(n.ingredient=r),r}),o(),e(13,"label",4),t(14,"Cheese"),o()(),e(15,"div",2)(16,"p-radiobutton",5),f("ngModelChange",function(r){return u(n.ingredient,r)||(n.ingredient=r),r}),o(),e(17,"label",6),t(18,"Mushroom"),o()(),e(19,"div",2)(20,"p-radiobutton",7),f("ngModelChange",function(r){return u(n.ingredient,r)||(n.ingredient=r),r}),o(),e(21,"label",8),t(22,"Pepper"),o()(),e(23,"div",2)(24,"p-radiobutton",9),f("ngModelChange",function(r){return u(n.ingredient,r)||(n.ingredient=r),r}),o(),e(25,"label",10),t(26,"Onion"),o()()()(),s(27,"app-code",11)),a&2&&(l(12),c("ngModel",n.ingredient),l(4),c("ngModel",n.ingredient),l(4),c("ngModel",n.ingredient),l(4),c("ngModel",n.ingredient),l(3),m("code",n.code))},dependencies:[g,b,v,y,h],encapsulation:2})}return i})();var te=(()=>{class i{code={typescript:"import { RadioButtonModule } from 'primeng/radiobutton';"};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["radio-button-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,n){a&1&&s(0,"app-code",0),a&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return i})();var oe=(()=>{class i{checked=!1;code={basic:'<p-radiobutton class="ng-invalid ng-dirty" />',html:`<div class="card flex justify-center">
    <p-radiobutton class="ng-invalid ng-dirty" />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-invalid-demo',
    templateUrl: './radio-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonInvalidDemo { }`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","radio-button-invalid-demo",3,"code"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),e(3,"i"),t(4,"ng-invalid"),o(),t(5," and "),e(6,"i"),t(7,"ng-dirty"),o(),t(8," class to indicate a failed validation."),o()(),e(9,"div",0)(10,"p-radiobutton",1),f("ngModelChange",function(r){return u(n.checked,r)||(n.checked=r),r}),o()(),s(11,"app-code",2)),a&2&&(l(10),c("ngModel",n.checked),l(),m("code",n.code))},dependencies:[g,b,v,y,h],encapsulation:2})}return i})();function me(i,F){if(i&1&&(e(0,"div",4),s(1,"p-radiobutton",5),e(2,"label",6),t(3),o()()),i&2){let d=F.$implicit;l(),m("inputId",d.key)("value",d),l(),m("for",d.key),l(),E(d.name)}}var ie=(()=>{class i{formGroup;categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];ngOnInit(){this.formGroup=new P({selectedCategory:new O})}code={basic:`<form class="flex flex-col gap-4" [formGroup]="formGroup">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radiobutton [inputId]="category.key" [value]="category" formControlName="selectedCategory" />
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</form>`,html:`<div class="card flex justify-center">
    <form class="flex flex-col gap-4" [formGroup]="formGroup">
        <div *ngFor="let category of categories" class="field-checkbox">
            <p-radiobutton [inputId]="category.key" [value]="category" formControlName="selectedCategory" />
            <label [for]="category.key" class="ml-2">{{ category.name }}</label>
        </div>
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';

@Component({
    selector: 'radio-button-reactive-forms-demo',
    templateUrl: './radio-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, RadioButton],
})
export class RadioButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
    }
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"formGroup"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","radio-button-reactive-forms-demo",3,"code"],[1,"field-checkbox"],["formControlName","selectedCategory",3,"inputId","value"],[1,"ml-2",3,"for"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"RadioButton can also be used with reactive forms. In this case, the "),e(3,"i"),t(4,"formControlName"),o(),t(5," property is used to bind the component to a form control."),o()(),e(6,"div",0)(7,"form",1),z(8,me,4,4,"div",2),o()(),s(9,"app-code",3)),a&2&&(l(7),m("formGroup",n.formGroup),l(),m("ngForOf",n.categories),l(),m("code",n.code))},dependencies:[w,g,b,v,j,y,G,V,U],encapsulation:2})}return i})();var ne=(()=>{class i{size=!1;code={basic:`<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
            <label for="size_small" class="text-sm">Small</label>
        </div>
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
            <label for="size_normal">Normal</label>
        </div>
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
            <label for="size_large" class="text-lg">Large</label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-sizes-demo',
    templateUrl: './radio-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonSizesDemo {
    size: any = false;
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["sizes-doc"]],standalone:!1,decls:24,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["inputId","size_small","name","size","value","Small","size","small",3,"ngModelChange","ngModel"],["for","size_small",1,"text-sm"],["inputId","size_normal","name","size","value","Normal",3,"ngModelChange","ngModel"],["for","size_normal"],["inputId","size_large","name","size","value","Large","size","large",3,"ngModelChange","ngModel"],["for","size_large",1,"text-lg"],["selector","radio-button-sizes-demo",3,"code"]],template:function(a,n){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"RadioButton provides "),e(3,"i"),t(4,"small"),o(),t(5," and "),e(6,"i"),t(7,"large"),o(),t(8," sizes as alternatives to the base."),o()(),e(9,"div",0)(10,"div",1)(11,"div",2)(12,"p-radiobutton",3),f("ngModelChange",function(r){return u(n.size,r)||(n.size=r),r}),o(),e(13,"label",4),t(14,"Small"),o()(),e(15,"div",2)(16,"p-radiobutton",5),f("ngModelChange",function(r){return u(n.size,r)||(n.size=r),r}),o(),e(17,"label",6),t(18,"Normal"),o()(),e(19,"div",2)(20,"p-radiobutton",7),f("ngModelChange",function(r){return u(n.size,r)||(n.size=r),r}),o(),e(21,"label",8),t(22,"Large"),o()()()(),s(23,"app-code",9)),a&2&&(l(12),c("ngModel",n.size),l(4),c("ngModel",n.size),l(4),c("ngModel",n.size),l(3),m("code",n.code))},dependencies:[g,b,v,y,h],encapsulation:2})}return i})();var ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[L,J,k,v,K,q,H,k]})}return i})();var se=()=>["RadioButton"],re=(()=>{class i{docs=[{id:"import",label:"Import",component:te},{id:"group",label:"Group",component:ee},{id:"reactive-forms",label:"Reactive Forms",component:ie},{id:"dynamic",label:"Dynamic",component:Z},{id:"filled",label:"Filled",component:$},{id:"sizes",label:"Sizes",component:ne},{id:"invalid",label:"Invalid",component:oe},{id:"disabled",label:"Disabled",component:Y},{id:"accessibility",label:"Accessibility",component:X}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular RadioButton Component","header","RadioButton","description","RadioButton is an extension to standard radio button element with theming.","themeDocs","radiobutton",3,"docs","apiDocs"]],template:function(a,n){a&1&&s(0,"app-doc",0),a&2&&m("docs",n.docs)("apiDocs",N(2,se))},dependencies:[ae,Q],encapsulation:2})}return i})();var dt=[{path:"",component:re}];export{dt as default};
