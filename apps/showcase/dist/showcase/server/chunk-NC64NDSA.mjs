import './polyfills.server.mjs';
import{b as X}from"./chunk-2VRTJX4L.mjs";import{a as u,b as O}from"./chunk-3HN54ZGW.mjs";import{a as J,b as Q}from"./chunk-TUWVE3ES.mjs";import{a as q,b as H}from"./chunk-IIW25JG6.mjs";import{a as f,d as U,e as _}from"./chunk-HZSAMTDM.mjs";import{a as c,b as P}from"./chunk-EK6YV52O.mjs";import{b,e as y,f as W,g as N,i as R,j as M,k as j,l as B,m as G,s as k,t as K,v as V}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{f as F,j as L}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as I}from"./chunk-RUZVPFSZ.mjs";import{Bb as p,Cb as a,Db as r,Eb as m,O as E,Sa as n,ec as t,gb as d,hb as A,jc as x,kc as g,lc as v,pc as z}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Y=(()=>{class e{code={basic:`<label for="address1">Address 1</label>
<textarea pTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea pTextarea aria-labelledby="address2"></textarea>

<textarea pTextarea aria-label="Address Details"></textarea>`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["text-area-accessibility-doc"]],standalone:!1,decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){o&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),r(),a(4,"p"),t(5," Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via "),a(6,"i"),t(7,"label"),r(),t(8," tag combined with "),a(9,"i"),t(10,"id"),r(),t(11," prop or using "),a(12,"i"),t(13,"aria-labelledby"),r(),t(14,", "),a(15,"i"),t(16,"aria-label"),r(),t(17," props. "),r()(),m(18,"app-code",0),a(19,"h3"),t(20,"Keyboard Support"),r(),a(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),r(),a(27,"th"),t(28,"Function"),r()()(),a(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),r()(),a(34,"td"),t(35,"Moves focus to the input."),r()()()()()()),o&2&&(n(18),p("code",i.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c,f],encapsulation:2})}return e})();var Z=(()=>{class e{code={basic:'<textarea rows="5"cols="30" pTextarea [autoResize]="true"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [autoResize]="true"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-auto-resize-demo',
    templateUrl: './input-textarea-auto-resize-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaAutoResizeDemo {
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["autoresize-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"autoResize"],["selector","input-textarea-auto-resize-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"When "),a(3,"i"),t(4,"autoResize"),r(),t(5," is enabled, textarea grows instead of displaying a scrollbar."),r()(),a(6,"div",0),m(7,"textarea",1),r(),m(8,"app-code",2)),o&2&&(n(7),p("autoResize",!0),n(),p("code",i.code))},dependencies:[c,u,f],encapsulation:2})}return e})();var $=(()=>{class e{value;code={basic:'<textarea rows="5" cols="30" pTextarea [(ngModel)]="value"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea  [(ngModel)]="value"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-basic-demo',
    templateUrl: './input-textarea-basic-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaBasicDemo {
    value!: string;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"ngModelChange","ngModel"],["selector","input-textarea-basic-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Textarea is applied to an input field with "),a(3,"i"),t(4,"pTextarea"),r(),t(5," directive."),r()(),a(6,"div",0)(7,"textarea",1),v("ngModelChange",function(l){return g(i.value,l)||(i.value=l),l}),r()(),m(8,"app-code",2)),o&2&&(n(7),x("ngModel",i.value),n(),p("code",i.code))},dependencies:[c,b,y,M,u,f],encapsulation:2})}return e})();var ee=(()=>{class e{code={basic:'<textarea rows="5"cols="30" pTextarea [disabled]="true"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [disabled]="true"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-disabled-demo',
    templateUrl: './input-textarea-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaDisabledDemo {
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"disabled"],["selector","input-textarea-disabled-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"When "),a(3,"i"),t(4,"disabled"),r(),t(5," is present, the element cannot be edited and focused."),r()(),a(6,"div",0),m(7,"textarea",1),r(),m(8,"app-code",2)),o&2&&(n(7),p("disabled",!0),n(),p("code",i.code))},dependencies:[c,u,f],encapsulation:2})}return e})();var te=(()=>{class e{value;code={basic:'<textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>',html:`<div class="card flex justify-center">
    <textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-filled-demo',
    templateUrl: './input-textarea-filled-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaFilledDemo {
    value!: string;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"ngModelChange","ngModel","variant"],["selector","input-textarea-filled-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Specify the "),a(3,"i"),t(4,"variant"),r(),t(5," property as "),a(6,"i"),t(7,"filled"),r(),t(8," to display the component with a higher visual emphasis than the default "),a(9,"i"),t(10,"outlined"),r(),t(11," style."),r()(),a(12,"div",0)(13,"textarea",1),v("ngModelChange",function(l){return g(i.value,l)||(i.value=l),l}),r()(),m(14,"app-code",2)),o&2&&(n(13),x("ngModel",i.value),p("variant","filled"),n(),p("code",i.code))},dependencies:[c,b,y,M,u,f],encapsulation:2})}return e})();var oe=(()=>{class e{value1="";value2="";value3="";code={basic:`<p-floatlabel>
    <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <textarea pTextarea id="over_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <textarea pTextarea id="over_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-stretch gap-4">
    <p-floatlabel>
        <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <textarea pTextarea id="over_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <textarea pTextarea id="over_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: ': 'input-textarea-floatlabel-demo',
    templateUrl: './: 'input-textarea-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule, FloatLabel]
})
export class TextareaFloatlabelDemo {
    value1: string = '';

    value2: string = '';

    value3: string = '';
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-stretch","gap-4"],["pTextarea","","id","over_label","rows","5","cols","30",1,"h-full",2,"resize","none",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["for","in_label"],["variant","on"],["for","on_label"],["selector","input-textarea-floatlabel-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2," A floating label appears on top of the input field when focused. Visit "),a(3,"a",0),t(4,"FloatLabel"),r(),t(5," documentation for more information. "),r()(),a(6,"div",1)(7,"p-floatlabel")(8,"textarea",2),v("ngModelChange",function(l){return g(i.value1,l)||(i.value1=l),l}),r(),a(9,"label",3),t(10,"Over Label"),r()(),a(11,"p-floatlabel",4)(12,"textarea",2),v("ngModelChange",function(l){return g(i.value2,l)||(i.value2=l),l}),r(),a(13,"label",5),t(14,"In Label"),r()(),a(15,"p-floatlabel",6)(16,"textarea",2),v("ngModelChange",function(l){return g(i.value3,l)||(i.value3=l),l}),r(),a(17,"label",7),t(18,"On Label"),r()()(),m(19,"app-code",8)),o&2&&(n(8),x("ngModel",i.value1),n(4),x("ngModel",i.value2),n(4),x("ngModel",i.value3),n(3),p("code",i.code))},dependencies:[c,b,y,M,u,f,q,F],encapsulation:2})}return e})();var ae=(()=>{class e{value="";code={basic:`<p-iftalabel>
    <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
    <label for="description">Description</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
        <label for="description">Description</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: ': 'input-textarea-iftalabel-demo',
    templateUrl: './: 'input-textarea-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextareaModule, IftaLabelModule]
})
export class TextareaIftaLabelDemo {
    value: string = '';
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["pTextarea","","id","description","rows","5","cols","30",2,"resize","none",3,"ngModelChange","ngModel"],["for","description"],["selector","input-textarea-iftalabel-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"IftaLabel is used to create infield top aligned labels. Visit "),a(3,"a",0),t(4,"IftaLabel"),r(),t(5," documentation for more information."),r()(),a(6,"div",1)(7,"p-iftalabel")(8,"textarea",2),v("ngModelChange",function(l){return g(i.value,l)||(i.value=l),l}),r(),a(9,"label",3),t(10,"Description"),r()()(),m(11,"app-code",4)),o&2&&(n(8),x("ngModel",i.value),n(3),p("code",i.code))},dependencies:[c,b,y,M,u,f,F,J],encapsulation:2})}return e})();var re=(()=>{class e{code={typescript:"import { TextareaModule } from 'primeng/textarea';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["text-area-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,i){o&1&&m(0,"app-code",0),o&2&&p("code",i.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return e})();var ie=(()=>{class e{value;code={basic:'<textarea rows="5" cols="30" pTextarea [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Address"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [(ngModel)]="value" class="ng-invalid ng-dirty" placeholder="Address"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-invalid-demo',
    templateUrl: './input-textarea-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaInvalidDemo {
    value!: string;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","","placeholder","Address",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-textarea-invalid-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),a(3,"i"),t(4,"ng-invalid"),r(),t(5," and "),a(6,"i"),t(7,"ng-dirty"),r(),t(8," class to indicate a failed validation."),r()(),a(9,"div",0)(10,"textarea",1),v("ngModelChange",function(l){return g(i.value,l)||(i.value=l),l}),r()(),m(11,"app-code",2)),o&2&&(n(10),x("ngModel",i.value),n(),p("code",i.code))},dependencies:[c,b,y,M,u,f],encapsulation:2})}return e})();var le=(()=>{class e{formGroup;ngOnInit(){this.formGroup=new N({text:new R(null)})}code={basic:`<form [formGroup]="formGroup">
    <textarea rows="5" cols="30" pTextarea formControlName="text"></textarea>
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <textarea rows="5"cols="30" pTextarea formControlName="text"></textarea>
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'input-textarea-reactive-forms-demo',
    templateUrl: './input-textarea-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, TextareaModule],
})
export class InputTextareaReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
    }
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["rows","5","cols","30","pTextarea","","formControlName","text"],["selector","input-textarea-reactive-forms-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Textarea can also be used with reactive forms. In this case, the "),a(3,"i"),t(4,"formControlName"),r(),t(5," property is used to bind the component to a form control."),r()(),a(6,"div",0)(7,"form",1),m(8,"textarea",2),r()(),m(9,"app-code",3)),o&2&&(n(7),p("formGroup",i.formGroup),n(2),p("code",i.code))},dependencies:[c,j,b,y,W,G,B,u,f],encapsulation:2})}return e})();var ne=(()=>{class e{value1;value2;value3;code={basic:`<textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>`,html:`<div class="card flex flex-col items-center gap-4">
    <textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
    <textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
    <textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-sizes-demo',
    templateUrl: './input-textarea-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaSizesDemo {
    value1!: string;

    value2!: string;

    value3!: string;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["pTextarea","","pSize","small","placeholder","Small","rows","3",3,"ngModelChange","ngModel"],["pTextarea","","placeholder","Normal","rows","3",3,"ngModelChange","ngModel"],["pTextarea","","pSize","large","placeholder","Large","rows","3",3,"ngModelChange","ngModel"],["selector","input-textarea-basic-demo",3,"code"]],template:function(o,i){o&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Textarea provides "),a(3,"i"),t(4,"small"),r(),t(5," and "),a(6,"i"),t(7,"large"),r(),t(8," sizes as alternatives to the base."),r()(),a(9,"div",0)(10,"textarea",1),v("ngModelChange",function(l){return g(i.value1,l)||(i.value1=l),l}),r(),a(11,"textarea",2),v("ngModelChange",function(l){return g(i.value2,l)||(i.value2=l),l}),r(),a(12,"textarea",3),v("ngModelChange",function(l){return g(i.value3,l)||(i.value3=l),l}),r()(),m(13,"app-code",4)),o&2&&(n(10),x("ngModel",i.value1),n(),x("ngModel",i.value2),n(),x("ngModel",i.value3),n(),p("code",i.code))},dependencies:[c,b,y,M,u,f],encapsulation:2})}return e})();var pe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=A({type:e});static \u0275inj=E({imports:[I,P,V,k,K,O,_,X,H,L,Q,_]})}return e})();var de=()=>["Textarea"],me=(()=>{class e{docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:$},{id:"reactive-forms",label:"Reactive Forms",component:le},{id:"autoresize",label:"AutoResize",component:Z},{id:"floatlabel",label:"Float Label",component:oe},{id:"iftalabel",label:"Ifta Label",component:ae},{id:"sizes",label:"Sizes",component:ne},{id:"filled",label:"Filled",component:te},{id:"invalid",label:"Invalid",component:ie},{id:"disabled",label:"Disabled",component:ee},{id:"accessibility",label:"Accessibility",component:Y}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Textarea Component","header","Textarea","description","Textarea adds styling and autoResize functionality to standard textarea element.","themeDocs","textearea",3,"docs","apiDocs"]],template:function(o,i){o&1&&m(0,"app-doc",0),o&2&&p("docs",i.docs)("apiDocs",z(2,de))},dependencies:[pe,U],encapsulation:2})}return e})();var _t=[{path:"",component:me}];export{_t as default};
