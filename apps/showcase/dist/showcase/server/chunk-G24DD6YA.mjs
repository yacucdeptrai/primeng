import './polyfills.server.mjs';
import{a as u}from"./chunk-2VRTJX4L.mjs";import{a as d,d as G,e as x}from"./chunk-HZSAMTDM.mjs";import{a as s,b as R}from"./chunk-EK6YV52O.mjs";import{b as h,e as T,f as D,g as K,i as C,k as w,l as M,m as E,t as S,u as f,v as A}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as k}from"./chunk-RUZVPFSZ.mjs";import{Bb as p,Cb as r,Db as o,Eb as l,O as F,Sa as c,ec as i,gb as a,hb as g,pc as I}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var N=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["key-filter-accessibility-doc"]],standalone:!1,decls:7,vars:0,consts:[["href","/inputtext"]],template:function(t,n){t&1&&(r(0,"div")(1,"app-docsectiontext")(2,"p"),i(3,"Refer to "),r(4,"a",0),i(5,"InputText"),o(),i(6," for accessibility as KeyFilter is a built-in add-on of the InputText."),o()()())},dependencies:[d],encapsulation:2})}return e})();var P=(()=>{class e{code={typescript:"import { KeyFilterModule } from 'primeng/keyfilter';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["key-filter-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&l(0,"app-code",0),t&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var O=(()=>{class e{code={basic:`<input pInputText pKeyFilter="int" />
<input pInputText pKeyFilter="num" />
<input pInputText pKeyFilter="money" />
<input pInputText pKeyFilter="hex" />
<input pInputText pKeyFilter="alpha" />
<input pInputText pKeyFilter="alphanum" />`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-6">
        <div class="flex-auto">
            <label for="integer" class="font-bold block mb-2"> Integer </label>
            <input pInputText id="integer" pKeyFilter="int" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="number" class="font-bold block mb-2"> Number </label>
            <input pInputText id="number" pKeyFilter="num" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="money" class="font-bold block mb-2"> Money </label>
            <input pInputText id="money" pKeyFilter="money" class="w-full" />
        </div>
    </div>
    <div class="flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="hex" class="font-bold block mb-2"> Hex </label>
            <input pInputText id="hex" pKeyFilter="hex" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
            <input pInputText id="alphabetic" pKeyFilter="alpha" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
            <input pInputText id="alphanumeric" pKeyFilter="alphanum" class="w-full" />
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'key-filter-presets-demo',
    templateUrl: './key-filter-presets-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class KeyFilterPresetsDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["presets-doc"]],standalone:!1,decls:34,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap","gap-4","mb-6"],[1,"flex-auto"],["for","integer",1,"font-bold","block","mb-2"],["pInputText","","id","integer","pKeyFilter","int",1,"w-full"],["for","number",1,"font-bold","block","mb-2"],["pInputText","","id","number","pKeyFilter","num",1,"w-full"],["for","money",1,"font-bold","block","mb-2"],["pInputText","","id","money","pKeyFilter","money",1,"w-full"],[1,"flex","flex-wrap","gap-4"],["for","hex",1,"font-bold","block","mb-2"],["pInputText","","id","hex","pKeyFilter","hex",1,"w-full"],["for","alphabetic",1,"font-bold","block","mb-2"],["pInputText","","id","alphabetic","pKeyFilter","alpha",1,"w-full"],["for","alphanumeric",1,"font-bold","block","mb-2"],["pInputText","","id","alphanumeric","pKeyFilter","alphanum",1,"w-full"],["selector","key-filter-presets-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"KeyFilter provides various presets configured with the "),r(3,"i"),i(4,"pKeyFilter"),o(),i(5," property."),o()(),r(6,"div",0)(7,"div",1)(8,"div",2)(9,"label",3),i(10," Integer "),o(),l(11,"input",4),o(),r(12,"div",2)(13,"label",5),i(14," Number "),o(),l(15,"input",6),o(),r(16,"div",2)(17,"label",7),i(18," Money "),o(),l(19,"input",8),o()(),r(20,"div",9)(21,"div",2)(22,"label",10),i(23," Hex "),o(),l(24,"input",11),o(),r(25,"div",2)(26,"label",12),i(27," Alphabetic "),o(),l(28,"input",13),o(),r(29,"div",2)(30,"label",14),i(31," Alphanumeric "),o(),l(32,"input",15),o()()(),l(33,"app-code",16)),t&2&&(c(33),p("code",n.code))},dependencies:[s,d,u,f],encapsulation:2})}return e})();var U=(()=>{class e{formGroup;ngOnInit(){this.formGroup=new K({value:new C(1234)})}code={basic:`<form [formGroup]="formGroup">
    <label for="integer" class="font-bold block mb-2"> Integer </label>
    <input pInputText id="integer" pKeyFilter="int" class="w-full" formControlName="value" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <label for="integer" class="font-bold block mb-2"> Integer </label>
        <input pInputText id="integer" pKeyFilter="int" class="w-full" formControlName="value" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'key-filter-reactive-forms-demo',
    templateUrl: './key-filter-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule]
})
export class KeyFilterReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(1234)
        });
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["reactive-forms-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["for","integer",1,"font-bold","block","mb-2"],["pInputText","","id","integer","pKeyFilter","int","formControlName","value",1,"w-full"],["selector","key-filter-reactive-forms-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"KeyFilter can also be used with reactive forms. In this case, the "),r(3,"i"),i(4,"formControlName"),o(),i(5," property is used to bind the component to a form control."),o()(),r(6,"div",0)(7,"form",1)(8,"label",2),i(9," Integer "),o(),l(10,"input",3),o()(),l(11,"app-code",4)),t&2&&(c(7),p("formGroup",n.formGroup),c(4),p("code",n.code))},dependencies:[s,w,h,T,D,E,M,d,u,f],encapsulation:2})}return e})();var $=(()=>{class e{blockSpace=/^[^\s]+$/;blockChars=/^[^<>*!]+$/;code={basic:`<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="blockspace" class="font-bold block mb-2"> Block Space </label>
        <input pInputText id="blockspace" pKeyFilter="int" class="w-full" />
    </div>
    <div class="flex-auto">
        <label for="block" class="font-bold block mb-2"> Block < > * ! </label>
        <input pInputText id="block" pKeyFilter="int" class="w-full" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'key-filter-reg-exp-demo',
    templateUrl: './key-filter-reg-exp-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class KeyFilterRegExpDemo {
    blockSpace: RegExp = /[^s]/;

    blockChars: RegExp = /^[^<>*!]+$/;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["reg-exp-demo"]],standalone:!1,decls:13,vars:3,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","blockspace",1,"font-bold","block","mb-2"],["pInputText","","id","blockspace",1,"w-full",3,"pKeyFilter"],["for","block",1,"font-bold","block","mb-2"],["pInputText","","id","block",1,"w-full",3,"pKeyFilter"],["selector","key-filter-reg-exp-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"In addition to the presets, a regular expression can be configured for customization."),o()(),r(3,"div",0)(4,"div",1)(5,"label",2),i(6," Block Space "),o(),l(7,"input",3),o(),r(8,"div",1)(9,"label",4),i(10," Block < > * ! "),o(),l(11,"input",5),o()(),l(12,"app-code",6)),t&2&&(c(7),p("pKeyFilter",n.blockSpace),c(4),p("pKeyFilter",n.blockChars),c(),p("code",n.code))},dependencies:[s,d,u,f],encapsulation:2})}return e})();var H=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=g({type:e});static \u0275inj=F({imports:[k,R,S,x,A,x]})}return e})();var z=()=>["KeyFilter"],V=(()=>{class e{docs=[{id:"import",label:"Import",component:P},{id:"presets",label:"Presets",component:O},{id:"regex",label:"Regex",component:$},{id:"reactive-forms",label:"Reactive Forms",component:U},{id:"accessibility",label:"Accessibility",component:N}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular KeyFilter Component","header","KeyFilter","description","KeyFilter is a directive to restrict individual key strokes. In order to restrict the whole input, use InputNumber or InputMask instead.",3,"docs","apiDocs"]],template:function(t,n){t&1&&l(0,"app-doc",0),t&2&&p("docs",n.docs)("apiDocs",I(2,z))},dependencies:[H,G],encapsulation:2})}return e})();var De=[{path:"",component:V}];export{De as default};
