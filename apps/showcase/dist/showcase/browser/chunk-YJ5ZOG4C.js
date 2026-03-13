import{a as D,b as V}from"./chunk-YF7WV7YA.js";import{a as b,d as B,e as S}from"./chunk-I6RUY6VJ.js";import{a as g,b as U}from"./chunk-CIUCWEWU.js";import{b as v,e as y,j as M,s as E,u as x,v as W}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as A}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as w}from"./chunk-O4W5DSIC.js";import{Ab as s,O as F,Qa as p,ac as n,eb as m,fb as _,fc as c,gc as u,hc as f,lc as L,xb as d,yb as l,zb as a}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var N=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["float-label-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(t,o){t&1&&(l(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),a(),l(3,"p"),n(4,"FloatLabel does not require any roles and attributes."),a(),l(5,"h3"),n(6,"Keyboard Support"),a(),l(7,"p"),n(8,"Component does not include any interactive elements."),a()())},dependencies:[b],encapsulation:2})}return e})();var O=(()=>{class e{value;code={basic:`<p-floatlabel>
    <input id="username" pInputText [(ngModel)]="value" />
    <label for="username">Username</label>
</p-floatlabel>`,html:`<div class="card flex justify-center">
    <p-floatlabel>
        <input id="username" pInputText [(ngModel)]="value" />
        <label for="username">Username</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-basic-demo',
    templateUrl: './float-label-basic-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["id","username","pInputText","","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","float-label-basic-demo",3,"code"]],template:function(t,o){t&1&&(l(0,"app-docsectiontext")(1,"p"),n(2,"FloatLabel is used by wrapping the input and its label."),a()(),l(3,"div",0)(4,"p-floatlabel")(5,"input",1),f("ngModelChange",function(i){return u(o.value,i)||(o.value=i),i}),a(),l(6,"label",2),n(7,"Username"),a()()(),s(8,"app-code",3)),t&2&&(p(5),c("ngModel",o.value),p(3),d("code",o.code))},dependencies:[g,b,v,y,M,D,x],encapsulation:2})}return e})();var R=(()=>{class e{code={typescript:"import { FloatLabelModule } from 'primeng/floatlabel';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["float-label-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&s(0,"app-code",0),t&2&&d("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var q=(()=>{class e{value1;value2;value3;code={basic:`<p-floatlabel>
    <input pInputText id="value1" [(ngModel)]="value1" class="ng-dirty ng-invalid" />
    <label for="value1">Username</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="value2" [(ngModel)]="value2" class="ng-dirty ng-invalid" />
    <label for="value2">Username</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="value3" [(ngModel)]="value3" class="ng-dirty ng-invalid" />
    <label for="value3">Username</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <input pInputText id="value1" [(ngModel)]="value1" class="ng-dirty ng-invalid" />
        <label for="value1">Username</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <input pInputText id="value2" [(ngModel)]="value2" class="ng-dirty ng-invalid" />
        <label for="value2">Username</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="value3" [(ngModel)]="value3" class="ng-dirty ng-invalid" />
        <label for="value3">Username</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-invalid-demo',
    templateUrl: './float-label-invalid-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelInvalidDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["invalid-doc"]],standalone:!1,decls:17,vars:4,consts:[[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["pInputText","","id","value1","autocomplete","off",1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["for","value1"],["variant","in"],["pInputText","","id","value2","autocomplete","off",1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["for","value2"],["variant","on"],["pInputText","","id","value3","autocomplete","off",1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["for","value3"],["selector","float-label-invalid-demo",3,"code"]],template:function(t,o){t&1&&(l(0,"app-docsectiontext")(1,"p"),n(2,"When the form element is invalid, the label is also highlighted."),a()(),l(3,"div",0)(4,"p-floatlabel")(5,"input",1),f("ngModelChange",function(i){return u(o.value1,i)||(o.value1=i),i}),a(),l(6,"label",2),n(7,"Username"),a()(),l(8,"p-floatlabel",3)(9,"input",4),f("ngModelChange",function(i){return u(o.value2,i)||(o.value2=i),i}),a(),l(10,"label",5),n(11,"Username"),a()(),l(12,"p-floatlabel",6)(13,"input",7),f("ngModelChange",function(i){return u(o.value3,i)||(o.value3=i),i}),a(),l(14,"label",8),n(15,"Username"),a()()(),s(16,"app-code",9)),t&2&&(p(5),c("ngModel",o.value1),p(4),c("ngModel",o.value2),p(4),c("ngModel",o.value3),p(3),d("code",o.code))},dependencies:[g,b,v,y,M,D,x],encapsulation:2})}return e})();var K=(()=>{class e{value1;value2;code={basic:`<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-variants-demo',
    templateUrl: './float-label-variants-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelVariantsDemo {
    value1: string | undefined;

    value2: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["variants-doc"]],standalone:!1,decls:25,vars:3,consts:[[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","float-label-variants-demo",3,"code"]],template:function(t,o){t&1&&(l(0,"app-docsectiontext")(1,"p"),n(2,"The "),l(3,"i"),n(4,"variant"),a(),n(5," property defines the position of the label. Default value is "),l(6,"i"),n(7,"over"),a(),n(8,", whereas "),l(9,"i"),n(10,"in"),a(),n(11," and "),l(12,"i"),n(13,"on"),a(),n(14," are the alternatives."),a()(),l(15,"div",0)(16,"p-floatlabel",1)(17,"input",2),f("ngModelChange",function(i){return u(o.value1,i)||(o.value1=i),i}),a(),l(18,"label",3),n(19,"In Label"),a()(),l(20,"p-floatlabel",4)(21,"input",5),f("ngModelChange",function(i){return u(o.value2,i)||(o.value2=i),i}),a(),l(22,"label",6),n(23,"On Label"),a()()(),s(24,"app-code",7)),t&2&&(p(17),c("ngModel",o.value1),p(4),c("ngModel",o.value2),p(3),d("code",o.code))},dependencies:[g,b,v,y,M,D,x],encapsulation:2})}return e})();var z=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=_({type:e});static \u0275inj=F({imports:[w,A,U,S,E,V,W,S]})}return e})();var H=()=>["FloatLabel"],G=(()=>{class e{docs=[{id:"import",label:"Import",component:R},{id:"basic",label:"Basic",component:O},{id:"variants",label:"Variants",component:K},{id:"invalid",label:"Invalid",component:q},{id:"accessibility",label:"Accessibility",component:N}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Float Label Component","header","FloatLabel","description","FloatLabel appears on top of the input field when focused.","themeDocs","floatlabel",3,"docs","apiDocs"]],template:function(t,o){t&1&&s(0,"app-doc",0),t&2&&d("docs",o.docs)("apiDocs",L(2,H))},dependencies:[z,B],encapsulation:2})}return e})();var Le=[{path:"",component:G}];export{Le as default};
