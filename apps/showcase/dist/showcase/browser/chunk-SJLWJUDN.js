import{b as Q}from"./chunk-ZDNP2BJW.js";import{a as O,b as H}from"./chunk-YF7WV7YA.js";import{a as q,b as J}from"./chunk-C4X3ZIUF.js";import{a as u,d as K,e as F}from"./chunk-I6RUY6VJ.js";import{a as c,b as R}from"./chunk-CIUCWEWU.js";import{b as y,e as b,f as W,g as N,i as B,j as M,k as z,l as j,m as k,s as U,t as P,u as v,v as G}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{e as _,i as V}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as A}from"./chunk-O4W5DSIC.js";import{Ab as m,O as w,Qa as r,ac as e,eb as s,fb as E,fc as f,gc as g,hc as x,lc as L,xb as p,yb as o,zb as n}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var X=(()=>{class t{code={basic:`<label for="firstname">Firstname</label>
<input pInputText id="firstname" />

<span id="lastname">Lastname</span>
<input pInputText aria-labelledby="lastname" />

<input pInputText aria-label="Age" />`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["input-text-accessibility-doc"]],standalone:!1,decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,l){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),n(),o(4,"p"),e(5," InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),o(6,"i"),e(7,"label"),n(),e(8," tag combined with "),o(9,"i"),e(10,"id"),n(),e(11," prop or using "),o(12,"i"),e(13,"aria-labelledby"),n(),e(14,", "),o(15,"i"),e(16,"aria-label"),n(),e(17," props. "),n()(),m(18,"app-code",0),o(19,"h3"),e(20,"Keyboard Support"),n(),o(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),e(26,"Key"),n(),o(27,"th"),e(28,"Function"),n()()(),o(29,"tbody")(30,"tr")(31,"td")(32,"i"),e(33,"tab"),n()(),o(34,"td"),e(35,"Moves focus to the input."),n()()()()()()),i&2&&(r(18),p("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c,u],encapsulation:2})}return t})();var Y=(()=>{class t{value;code={basic:'<input type="text" pInputText [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-basic-demo',
    templateUrl: './input-text-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextBasicDemo {
    value: string;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","",3,"ngModelChange","ngModel"],["selector","input-text-basic-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"InputText is used as a controlled input with "),o(3,"i"),e(4,"ngModel"),n(),e(5," property."),n()(),o(6,"div",0)(7,"input",1),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n()(),m(8,"app-code",2)),i&2&&(r(7),f("ngModel",l.value),r(),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var Z=(()=>{class t{value="Disabled";code={basic:'<input pInputText [disabled]="true" [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <input pInputText [disabled]="true" [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-disabled-demo',
    templateUrl: './input-text-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextDisabledDemo {
    value: string | undefined = "Disabled"
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["pInputText","",3,"ngModelChange","disabled","ngModel"],["selector","input-text-disabled-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"When "),o(3,"i"),e(4,"disabled"),n(),e(5," is present, the element cannot be edited and focused."),n()(),o(6,"div",0)(7,"input",1),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n()(),m(8,"app-code",2)),i&2&&(r(7),p("disabled",!0),f("ngModel",l.value),r(),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var $=(()=>{class t{value;code={basic:'<input type="text" pInputText [(ngModel)]="value" variant="filled" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText [(ngModel)]="value" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-filled-demo',
    templateUrl: './input-text-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextFilledDemo {
    value: string;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","","variant","filled",3,"ngModelChange","ngModel"],["selector","input-text-filled-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),o(3,"i"),e(4,"variant"),n(),e(5," property as "),o(6,"i"),e(7,"filled"),n(),e(8," to display the component with a higher visual emphasis than the default "),o(9,"i"),e(10,"outlined"),n(),e(11," style."),n()(),o(12,"div",0)(13,"input",1),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n()(),m(14,"app-code",2)),i&2&&(r(13),f("ngModel",l.value),r(),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var ee=(()=>{class t{value1;value2;value3;code={basic:`<p-floatlabel>
    <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-text-floatlabel-demo',
    templateUrl: './input-text-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, FloatLabel]
})
export class InputTextFloatlabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["pInputText","","id","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-text-floatlabel-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," FloatLabel visually integrates a label with its form element. Visit "),o(3,"a",0),e(4,"FloatLabel"),n(),e(5," documentation for more information. "),n()(),o(6,"div",1)(7,"p-floatlabel")(8,"input",2),x("ngModelChange",function(a){return g(l.value1,a)||(l.value1=a),a}),n(),o(9,"label",3),e(10,"Over Label"),n()(),o(11,"p-floatlabel",4)(12,"input",5),x("ngModelChange",function(a){return g(l.value2,a)||(l.value2=a),a}),n(),o(13,"label",6),e(14,"In Label"),n()(),o(15,"p-floatlabel",7)(16,"input",8),x("ngModelChange",function(a){return g(l.value3,a)||(l.value3=a),a}),n(),o(17,"label",9),e(18,"On Label"),n()()(),m(19,"app-code",10)),i&2&&(r(8),f("ngModel",l.value1),r(4),f("ngModel",l.value2),r(4),f("ngModel",l.value3),r(3),p("code",l.code))},dependencies:[c,v,y,b,M,u,O,_],encapsulation:2})}return t})();var te=(()=>{class t{value;code={basic:`<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-2">
        <label for="username">Username</label>
        <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
        <small id="username-help">Enter your username to reset your password.</small>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-help-text-demo',
    templateUrl: './input-text-help-text-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextHelpTextDemo {
    value: string | undefined;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["helptext-doc"]],standalone:!1,decls:14,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-2"],["for","username"],["pInputText","","id","username","aria-describedby","username-help",3,"ngModelChange","ngModel"],["id","username-help"],["selector","input-text-help-text-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"An advisory text can be defined with the semantic "),o(3,"i"),e(4,"small"),n(),e(5," tag."),n()(),o(6,"div",0)(7,"div",1)(8,"label",2),e(9,"Username"),n(),o(10,"input",3),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n(),o(11,"small",4),e(12,"Enter your username to reset your password."),n()()(),m(13,"app-code",5)),i&2&&(r(10),f("ngModel",l.value),r(3),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var oe=(()=>{class t{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
     <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-text-iftalabel-demo',
    templateUrl: './input-text-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, IftaLabelModule]
})
export class InputTextIftaLabelDemo {
    value: string | undefined;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","input-text-iftalabel-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),o(3,"a",0),e(4,"IftaLabel"),n(),e(5," documentation for more information."),n()(),o(6,"div",1)(7,"p-iftalabel")(8,"input",2),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n(),o(9,"label",3),e(10,"Username"),n()()(),m(11,"app-code",4)),i&2&&(r(8),f("ngModel",l.value),r(3),p("code",l.code))},dependencies:[c,v,y,b,M,u,q,_],encapsulation:2})}return t})();var ne=(()=>{class t{value1;code={typescript:"import { InputTextModule } from 'primeng/inputtext';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["input-text-import-doc"]],standalone:!1,decls:1,vars:4,consts:[[3,"hideToggleCode","hideStackBlitz","hideCodeSandbox","code"]],template:function(i,l){i&1&&m(0,"app-code",0),i&2&&p("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0)("code",l.code)},dependencies:[c],encapsulation:2})}return t})();var ie=(()=>{class t{value;code={basic:'<input pInputText [(ngModel)]="value"  class="ng-invalid ng-dirty" placeholder="Name" />',html:`<div class="card flex justify-center">
    <input pInputText [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Name" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-invalid-demo',
    templateUrl: './input-text-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextInvalidDemo {
    value: string | undefined;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["pInputText","","placeholder","Name",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-text-invalid-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),o(3,"i"),e(4,"ng-invalid"),n(),e(5," and "),o(6,"i"),e(7,"ng-dirty"),n(),e(8," class to indicate a failed validation."),n()(),o(9,"div",0)(10,"input",1),x("ngModelChange",function(a){return g(l.value,a)||(l.value=a),a}),n()(),m(11,"app-code",2)),i&2&&(r(10),f("ngModel",l.value),r(),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var le=(()=>{class t{formGroup;ngOnInit(){this.formGroup=new N({text:new B(null)})}code={basic:'<input type="text" pInputText formControlName="text" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText formControlName="text" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'input-text-reactive-forms-demo',
    templateUrl: './input-text-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule]
})
export class InputTextReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["type","text","pInputText","","formControlName","text"],["selector","input-text-reactive-forms-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"InputText can also be used with reactive forms. In this case, the "),o(3,"i"),e(4,"formControlName"),n(),e(5," property is used to bind the component to a form control."),n()(),o(6,"div",0)(7,"form",1),m(8,"input",2),n()(),m(9,"app-code",3)),i&2&&(r(7),p("formGroup",l.formGroup),r(2),p("code",l.code))},dependencies:[c,v,z,y,b,W,k,j,u],encapsulation:2})}return t})();var ae=(()=>{class t{value1;value2;value3;code={basic:`<input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
<input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
<input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4 ">
    <input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
    <input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
    <input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'input-text-sizes-demo',
    templateUrl: './input-text-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextSizesDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["pInputText","","type","text","pSize","small","placeholder","Small",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Normal",3,"ngModelChange","ngModel"],["pInputText","","type","text","pSize","large","placeholder","Large",3,"ngModelChange","ngModel"],["selector","input-text-sizes-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"InputText provides "),o(3,"i"),e(4,"small"),n(),e(5," and "),o(6,"i"),e(7,"large"),n(),e(8," sizes as alternatives to the standard."),n()(),o(9,"div",0)(10,"input",1),x("ngModelChange",function(a){return g(l.value1,a)||(l.value1=a),a}),n(),o(11,"input",2),x("ngModelChange",function(a){return g(l.value2,a)||(l.value2=a),a}),n(),o(12,"input",3),x("ngModelChange",function(a){return g(l.value3,a)||(l.value3=a),a}),n()(),m(13,"app-code",4)),i&2&&(r(10),f("ngModel",l.value1),r(),f("ngModel",l.value2),r(),f("ngModel",l.value3),r(),p("code",l.code))},dependencies:[c,v,y,b,M,u],encapsulation:2})}return t})();var re=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=E({type:t});static \u0275inj=w({imports:[A,R,G,U,P,F,Q,H,J,V,F]})}return t})();var de=()=>["InputText"],pe=(()=>{class t{docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:Y},{id:"reactive-forms",label:"Reactive Forms",component:le},{id:"floatlabel",label:"Float Label",component:ee},{id:"iftalabel",label:"Ifta Label",component:oe},{id:"sizes",label:"Sizes",component:ae},{id:"helptext",label:"Help Text",component:te},{id:"filled",label:"Filled",component:$},{id:"invalid",label:"Invalid",component:ie},{id:"disabled",label:"Disabled",component:Z},{id:"accessibility",label:"Accessibility",component:X}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=s({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputText Component","header","InputText","description","InputText is an extension to standard input element with theming and keyfiltering.","themeDocs","inputtext",3,"apiDocs","docs"]],template:function(i,l){i&1&&m(0,"app-doc",0),i&2&&p("apiDocs",L(2,de))("docs",l.docs)},dependencies:[re,K],encapsulation:2})}return t})();var wt=[{path:"",component:pe}];export{wt as default};
