import{a as g}from"./chunk-7T6NUUXL.js";import{a as f,d as j,e as T}from"./chunk-I6RUY6VJ.js";import{a as p,b as R}from"./chunk-CIUCWEWU.js";import{e as C,f as I,g as F,i as _,j as h,k as z,l as O,m as A,s as N,t as W}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as G}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as E}from"./chunk-O4W5DSIC.js";import{Ab as s,O as L,Qa as r,ac as e,eb as d,fb as k,fc as u,gc as b,hc as y,lc as B,xb as m,yb as n,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var U=(()=>{class t{code={basic:`<span id="rememberme">Remember Me</span>
<p-togglebutton ariaLabelledBy="rememberme" />

<p-togglebutton ariaLabel="Remember Me" />`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["toggle-button-accessibility-doc"]],standalone:!1,decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,l){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),n(4,"p"),e(5," ToggleButton component uses an element with "),n(6,"i"),e(7,"button"),i(),e(8," role and updates "),n(9,"i"),e(10,"aria-pressed"),i(),e(11," state for screen readers. Value to describe the component can be defined with "),n(12,"i"),e(13,"ariaLabelledBy"),i(),e(14," or "),n(15,"i"),e(16,"ariaLabel"),i(),e(17," props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. "),i()(),s(18,"app-code",0),n(19,"h3"),e(20,"Keyboard Support"),i(),n(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),e(26,"Key"),i(),n(27,"th"),e(28,"Function"),i()()(),n(29,"tbody")(30,"tr")(31,"td")(32,"i"),e(33,"tab"),i()(),n(34,"td"),e(35,"Moves focus to the button."),i()(),n(36,"tr")(37,"td")(38,"i"),e(39,"space"),i()(),n(40,"td"),e(41,"Toggles the checked state."),i()()()()()()),o&2&&(r(18),m("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,f],encapsulation:2})}return t})();var P=(()=>{class t{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" styleClass="w-24" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" styleClass="w-24" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-basic-demo',
    templateUrl: './toggle-button-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["onLabel","On","offLabel","Off","styleClass","w-24",3,"ngModelChange","ngModel"],["selector","toggle-button-basic-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Two-way binding to a boolean property is defined using the standard "),n(3,"i"),e(4,"ngModel"),i(),e(5," directive."),i()(),n(6,"div",0)(7,"p-togglebutton",1),y("ngModelChange",function(a){return b(l.checked,a)||(l.checked=a),a}),i()(),s(8,"app-code",2)),o&2&&(r(7),u("ngModel",l.checked),r(),m("code",l.code))},dependencies:[p,f,g,C,h],encapsulation:2})}return t})();var V=(()=>{class t{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" styleClass="w-36" ariaLabel="Do you confirm" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" styleClass="w-36" ariaLabel="Do you confirm" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-customized-demo',
    templateUrl: './toggle-button-customized-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonCustomizedDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["customized-doc"]],standalone:!1,decls:18,vars:2,consts:[[1,"card","flex","justify-center"],["onLabel","Locked","offLabel","Unlocked","onIcon","pi pi-check","offIcon","pi pi-times","onIcon","pi pi-lock","offIcon","pi pi-lock-open","styleClass","w-36","ariaLabel","Do you confirm",3,"ngModelChange","ngModel"],["selector","toggle-button-customized-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Icons and Labels can be customized using "),n(3,"i"),e(4,"onLabel"),i(),e(5,", "),n(6,"i"),e(7,"offLabel"),i(),e(8,", "),n(9,"i"),e(10,"onIcon"),i(),e(11," and "),n(12,"i"),e(13,"offIcon"),i(),e(14," properties."),i()(),n(15,"div",0)(16,"p-togglebutton",1),y("ngModelChange",function(a){return b(l.checked,a)||(l.checked=a),a}),i()(),s(17,"app-code",2)),o&2&&(r(16),u("ngModel",l.checked),r(),m("code",l.code))},dependencies:[p,f,g,C,h],encapsulation:2})}return t})();var Y=(()=>{class t{checked=!1;code={basic:'<p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" styleClass="w-full sm:w-40" ariaLabel="Confirmation" />',html:`<div class="card flex justify-center">
    <p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" styleClass="w-full sm:w-40" ariaLabel="Confirmation" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-disabled-demo',
    templateUrl: './toggle-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonDisabledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["disabled","true","onIcon","pi pi-check","offIcon","pi pi-times","onLabel","Yes","offLabel","No","styleClass","w-full sm:w-40","ariaLabel","Confirmation",3,"ngModelChange","ngModel"],["selector","toggle-button-disabled-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"When "),n(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),n(6,"div",0)(7,"p-togglebutton",1),y("ngModelChange",function(a){return b(l.checked,a)||(l.checked=a),a}),i()(),s(8,"app-code",2)),o&2&&(r(7),u("ngModel",l.checked),r(),m("code",l.code))},dependencies:[p,f,g,C,h],encapsulation:2})}return t})();var K=(()=>{class t{code={typescript:"import { ToggleButtonModule } from 'primeng/togglebutton';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["toggle-button-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,l){o&1&&s(0,"app-code",0),o&2&&m("code",l.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return t})();var q=(()=>{class t{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" class="ng-invalid ng-dirty" styleClass="w-full sm:w-40" aria-label="Confirmation" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" class="ng-invalid ng-dirty" styleClass="w-full sm:w-40" aria-label="Confirmation" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-invalid-demo',
    templateUrl: './toggle-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButtonModule]
})
export class ToggleButtonInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["onIcon","pi pi-check","offIcon","pi pi-times","styleClass","w-full sm:w-40","aria-label","Confirmation",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","toggle-button-invalid-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),n(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),n(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),n(9,"div",0)(10,"p-togglebutton",1),y("ngModelChange",function(a){return b(l.checked,a)||(l.checked=a),a}),i()(),s(11,"app-code",2)),o&2&&(r(10),u("ngModel",l.checked),r(),m("code",l.code))},dependencies:[p,f,g,C,h],encapsulation:2})}return t})();var H=(()=>{class t{formGroup;ngOnInit(){this.formGroup=new F({checked:new _(!1)})}code={basic:`<form [formGroup]="formGroup">
    <p-togglebutton formControlName="checked" onLabel="On" offLabel="Off" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-togglebutton formControlName="checked" onLabel="On" offLabel="Off" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-reactive-forms-demo',
    templateUrl: './toggle-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ToggleButton]
})
export class ToggleButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean>(false)
        });
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","checked","onLabel","On","offLabel","Off"],["selector","toggle-button-reactive-forms-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"ToggleButton can also be used with reactive forms. In this case, the "),n(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),n(6,"div",0)(7,"form",1),s(8,"p-togglebutton",2),i()(),s(9,"app-code",3)),o&2&&(r(7),m("formGroup",l.formGroup),r(2),m("code",l.code))},dependencies:[p,f,g,z,C,I,A,O],encapsulation:2})}return t})();var J=(()=>{class t{value1=!1;value2=!1;value3=!1;code={basic:`<p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" styleClass="min-w-16" />
<p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" styleClass="min-w-20" />
<p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" styleClass="min-w-24" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" styleClass="min-w-16" />
    <p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" styleClass="min-w-20" />
    <p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" styleClass="min-w-24" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-sizes-demo',
    templateUrl: './toggle-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonSizesDemo {
    value1: boolean = false;

    value2: boolean = false;

    value3: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["onLabel","On","offLabel","Off","size","small","styleClass","min-w-16",3,"ngModelChange","ngModel"],["onLabel","On","offLabel","Off","styleClass","min-w-20",3,"ngModelChange","ngModel"],["onLabel","On","offLabel","Off","size","large","styleClass","min-w-24",3,"ngModelChange","ngModel"],["selector","toggle-button-sizes-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"ToggleButton provides "),n(3,"i"),e(4,"small"),i(),e(5," and "),n(6,"i"),e(7,"large"),i(),e(8," sizes as alternatives to the base."),i()(),n(9,"div",0)(10,"p-togglebutton",1),y("ngModelChange",function(a){return b(l.value1,a)||(l.value1=a),a}),i(),n(11,"p-togglebutton",2),y("ngModelChange",function(a){return b(l.value2,a)||(l.value2=a),a}),i(),n(12,"p-togglebutton",3),y("ngModelChange",function(a){return b(l.value3,a)||(l.value3=a),a}),i()(),s(13,"app-code",4)),o&2&&(r(10),u("ngModel",l.value1),r(),u("ngModel",l.value2),r(),u("ngModel",l.value3),r(),m("code",l.code))},dependencies:[p,f,g,C,h],encapsulation:2})}return t})();var Q=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=k({type:t});static \u0275inj=L({imports:[E,R,T,g,N,W,G,T]})}return t})();var Z=()=>["ToggleButton"],X=(()=>{class t{docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:P},{id:"reactive-forms",label:"Reactive Forms",component:H},{id:"customized",label:"Customized",component:V},{id:"sizes",label:"Sizes",component:J},{id:"invalid",label:"Invalid",component:q},{id:"disabled",label:"Disabled",component:Y},{id:"accessibility",label:"Accessibility",component:U}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ToggleButton Component","header","ToggleButton","description","ToggleButton is used to select a boolean value using a button.","themeDocs","togglebutton",3,"docs","apiDocs"]],template:function(o,l){o&1&&s(0,"app-doc",0),o&2&&m("docs",l.docs)("apiDocs",B(2,Z))},dependencies:[Q,j],encapsulation:2})}return t})();var Ke=[{path:"",component:X}];export{Ke as default};
