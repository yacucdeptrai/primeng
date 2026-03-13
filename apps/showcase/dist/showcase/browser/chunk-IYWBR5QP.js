import{a as g}from"./chunk-U5JTIOEL.js";import{a as f,d as Q,e as k}from"./chunk-I6RUY6VJ.js";import{a as p,b as J}from"./chunk-CIUCWEWU.js";import{e as h,f as P,g as L,i as U,j as v,k as V,l as O,m as z,s as K,t as q}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as H}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j,u as G}from"./chunk-O4W5DSIC.js";import{Ab as m,Hb as N,O as E,Qa as a,X as F,Y as _,ac as o,eb as d,fb as A,fc as u,gc as w,hc as y,kb as I,lc as B,mc as W,xb as r,yb as i,zb as n,zc as R}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var X=(()=>{class e{code={basic:`<label for="switch1">Remember Me</label>
<p-toggleswitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<p-toggleswitch ariaLabelledBy="switch2" />

<p-toggleswitch ariaLabel="Remember Me" />`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggle-switch-accessibility-doc"]],standalone:!1,decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,c){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),n(),i(4,"p"),o(5," InputSwitch component uses a hidden native checkbox element with "),i(6,"i"),o(7,"switch"),n(),o(8," role internally that is only visible to screen readers. Value to describe the component can either be provided via "),i(9,"i"),o(10,"label"),n(),o(11," tag combined with "),i(12,"i"),o(13,"inputId"),n(),o(14," prop or using "),i(15,"i"),o(16,"ariaLabelledBy"),n(),o(17,", "),i(18,"i"),o(19,"ariaLabel"),n(),o(20," props. "),n()(),m(21,"app-code",0),i(22,"h3"),o(23,"Keyboard Support"),n(),i(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),o(29,"Key"),n(),i(30,"th"),o(31,"Function"),n()()(),i(32,"tbody")(33,"tr")(34,"td")(35,"i"),o(36,"tab"),n()(),i(37,"td"),o(38,"Moves focus to the switch."),n()(),i(39,"tr")(40,"td")(41,"i"),o(42,"space"),n()(),i(43,"td"),o(44,"Toggles the checked state."),n()()()()()()),t&2&&(a(21),r("code",c.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,f],encapsulation:2})}return e})();var Y=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-basic-demo',
    templateUrl: './toggle-switch-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-basic-demo",3,"code"]],template:function(t,c){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Two-way value binding is defined using "),i(3,"i"),o(4,"ngModel"),n(),o(5,"."),n()(),i(6,"div",0)(7,"p-toggleswitch",1),y("ngModelChange",function(s){return w(c.checked,s)||(c.checked=s),s}),n()(),m(8,"app-code",2)),t&2&&(a(7),u("ngModel",c.checked),a(),r("code",c.code))},dependencies:[p,f,h,v,g],encapsulation:2})}return e})();var Z=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-disabled-demo',
    templateUrl: './toggle-switch-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchDisabledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","toggle-switch-disabled-demo",3,"code"]],template:function(t,c){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"When "),i(3,"i"),o(4,"disabled"),n(),o(5," is present, the element cannot be edited and focused."),n()(),i(6,"div",0)(7,"p-toggleswitch",1),y("ngModelChange",function(s){return w(c.checked,s)||(c.checked=s),s}),n()(),m(8,"app-code",2)),t&2&&(a(7),u("ngModel",c.checked),r("disabled",!0),a(),r("code",c.code))},dependencies:[p,f,h,v,g],encapsulation:2})}return e})();var $=(()=>{class e{code={typescript:"import { ToggleSwitchModule } from 'primeng/toggleswitch';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggle-switch-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,c){t&1&&m(0,"app-code",0),t&2&&r("code",c.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return e})();var ee=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" class="ng-dirty ng-invalid" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" class="ng-dirty ng-invalid" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-invalid-demo',
    templateUrl: './toggle-switch-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["selector","toggle-switch-invalid-demo",3,"code"]],template:function(t,c){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Invalid state style is added using the "),i(3,"i"),o(4,"ng-invalid"),n(),o(5," and "),i(6,"i"),o(7,"ng-dirty"),n(),o(8," class to indicate a failed validation."),n()(),i(9,"div",0)(10,"p-toggleswitch",1),y("ngModelChange",function(s){return w(c.checked,s)||(c.checked=s),s}),n()(),m(11,"app-code",2)),t&2&&(a(10),u("ngModel",c.checked),a(),r("code",c.code))},dependencies:[p,f,h,v,g],encapsulation:2})}return e})();var te=(()=>{class e{checked=!0;code={basic:'<p-toggleswitch [(ngModel)]="checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-preselection-demo',
    templateUrl: './toggle-switch-preselection-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchPreselectionDemo {
    checked: boolean = true;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["preselection-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-preselection-demo",3,"code"]],template:function(t,c){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Enabling "),i(3,"i"),o(4,"ngModel"),n(),o(5," property displays the component as active initially."),n()(),i(6,"div",0)(7,"p-toggleswitch",1),y("ngModelChange",function(s){return w(c.checked,s)||(c.checked=s),s}),n()(),m(8,"app-code",2)),t&2&&(a(7),u("ngModel",c.checked),a(),r("code",c.code))},dependencies:[p,f,h,v,g],encapsulation:2})}return e})();var oe=(()=>{class e{formGroup;ngOnInit(){this.formGroup=new L({checked:new U(!1)})}code={basic:'<p-toggleswitch formControlName="checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch formControlName="checked" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
    selector: 'toggle-switch-reactive-forms-demo',
    templateUrl: './toggle-switch-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ToggleSwitch]
})
export class ToggleSwitchReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean>(false)
        });
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","checked"],["selector","toggle-switch-reactive-forms-demo",3,"code"]],template:function(t,c){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"ToggleSwitch can also be used with reactive forms. In this case, the "),i(3,"i"),o(4,"formControlName"),n(),o(5," property is used to bind the component to a form control."),n()(),i(6,"div",0)(7,"form",1),m(8,"p-toggleswitch",2),n()(),m(9,"app-code",3)),t&2&&(a(7),r("formGroup",c.formGroup),a(2),r("code",c.code))},dependencies:[p,f,V,h,P,z,O,g],encapsulation:2})}return e})();var le=e=>["!text-xs","pi",e];function ae(e,re){if(e&1&&m(0,"i",4),e&2){let l=re.checked;r("ngClass",W(1,le,l?"pi-check":"pi-times"))}}var ie=(()=>{class e{checked=!1;code={basic:`<p-toggleswitch [(ngModel)]="checked">
    <ng-template #handle let-checked="checked">
        <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
    </ng-template>
</p-toggleswitch>`,html:`<div class="card flex justify-center gap-4">
    <p-toggleswitch [(ngModel)]="checked">
        <ng-template #handle let-checked="checked">
            <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
        </ng-template>
    </p-toggleswitch>
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-template-demo',
    templateUrl: './toggle-switch-template-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchTemplateDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-doc"]],standalone:!1,decls:11,vars:2,consts:[["handle",""],[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-basic-demo",3,"code"],[3,"ngClass"]],template:function(t,c){if(t&1){let M=N();i(0,"app-docsectiontext")(1,"p"),o(2,"The "),i(3,"i"),o(4,"handle"),n(),o(5," template is available to display custom content."),n()(),i(6,"div",1)(7,"p-toggleswitch",2),y("ngModelChange",function(T){return F(M),w(c.checked,T)||(c.checked=T),_(T)}),I(8,ae,1,3,"ng-template",null,0,R),n()(),m(10,"app-code",3)}t&2&&(a(7),u("ngModel",c.checked),a(3),r("code",c.code))},dependencies:[j,p,f,h,v,g],encapsulation:2})}return e})();var ne=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[G,H,J,k,K,q,g,k]})}return e})();var me=()=>["ToggleSwitch"],ce=(()=>{class e{docs=[{id:"import",label:"Import",component:$},{id:"basic",label:"Basic",component:Y},{id:"reactive-forms",label:"Reactive Forms",component:oe},{id:"preselection",label:"Preselection",component:te},{id:"invalid",label:"Invalid",component:ee},{id:"template",label:"Template",component:ie},{id:"disabled",label:"Disabled",component:Z},{id:"accessibility",label:"Accessibility",component:X}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ToggleSwitch Component","header","ToggleSwitch","description","ToggleSwitch is used to select a boolean value.","themeDocs","toggleswitch",3,"docs","apiDocs"]],template:function(t,c){t&1&&m(0,"app-doc",0),t&2&&r("docs",c.docs)("apiDocs",B(2,me))},dependencies:[ne,Q],encapsulation:2})}return e})();var nt=[{path:"",component:ce}];export{nt as default};
