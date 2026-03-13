import './polyfills.server.mjs';
import{a as x,b as B}from"./chunk-TUWVE3ES.mjs";import{a as f,d as _,e as C}from"./chunk-HZSAMTDM.mjs";import{a as c,b as E}from"./chunk-EK6YV52O.mjs";import{b as y,e as M,j as I,s as w,u as D,v as F}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as A}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as S}from"./chunk-RUZVPFSZ.mjs";import{Bb as p,Cb as i,Db as a,Eb as m,O as T,Sa as s,ec as n,gb as r,hb as h,jc as b,kc as g,lc as v,pc as L}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var W=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["ifta-label-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),a(),i(3,"p"),n(4,"IftaLabel does not require any roles and attributes."),a(),i(5,"h3"),n(6,"Keyboard Support"),a(),i(7,"p"),n(8,"Component does not include any interactive elements."),a()())},dependencies:[f],encapsulation:2})}return e})();var N=(()=>{class e{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ifta-label-basic-demo',
    templateUrl: './ifta-label-basic-demo.html',
    standalone: true,
    imports: [IftaLabelModule, InputTextModule, FormsModule]
})
export class IftaLabelBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","ifta-label-basic-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"IftaLabel is used by wrapping the input and its label."),a()(),i(3,"div",0)(4,"p-iftalabel")(5,"input",1),v("ngModelChange",function(d){return g(o.value,d)||(o.value=d),d}),a(),i(6,"label",2),n(7,"Username"),a()()(),m(8,"app-code",3)),t&2&&(s(5),b("ngModel",o.value),s(3),p("code",o.code))},dependencies:[c,f,y,M,I,x,D],encapsulation:2})}return e})();var P=(()=>{class e{code={typescript:"import { IftaLabelModule } from 'primeng/iftalabel';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["ifta-label-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&m(0,"app-code",0),t&2&&p("code",o.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return e})();var R=(()=>{class e{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" class="ng-dirty ng-invalid" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" class="ng-dirty ng-invalid" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ifta-label-invalid-demo',
    templateUrl: './ifta-label-invalid-demo.html',
    standalone: true,
    imports: [IftaLabelModule, InputTextModule, FormsModule]
})
export class IftaLabelInvalidDemo {
    value: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["invalid-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["for","username"],["selector","ifta-label-invalid-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"When the form element is invalid, the label is also highlighted."),a()(),i(3,"div",0)(4,"p-iftalabel")(5,"input",1),v("ngModelChange",function(d){return g(o.value,d)||(o.value=d),d}),a(),i(6,"label",2),n(7,"Username"),a()()(),m(8,"app-code",3)),t&2&&(s(5),b("ngModel",o.value),s(3),p("code",o.code))},dependencies:[c,f,y,M,I,x,D],encapsulation:2})}return e})();var V=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=h({type:e});static \u0275inj=T({imports:[S,A,E,C,w,B,F,C]})}return e})();var H=()=>["IftaLabel"],q=(()=>{class e{docs=[{id:"import",label:"Import",component:P},{id:"basic",label:"Basic",component:N},{id:"invalid",label:"Invalid",component:R},{id:"accessibility",label:"Accessibility",component:W}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Ifta Label Component","header","IftaLabel","description","IftaLabel is used to create infield top aligned labels.","themeDocs","iftalabel",3,"docs","apiDocs"]],template:function(t,o){t&1&&m(0,"app-doc",0),t&2&&p("docs",o.docs)("apiDocs",L(2,H))},dependencies:[V,_],encapsulation:2})}return e})();var De=[{path:"",component:q}];export{De as default};
