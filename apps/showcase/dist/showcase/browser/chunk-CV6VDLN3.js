import{a as v}from"./chunk-ECWGVQMK.js";import{a as x,d as J,e as W}from"./chunk-I6RUY6VJ.js";import{a as y,b as H}from"./chunk-CIUCWEWU.js";import{e as M,j as h,s as N,t as R,v as G}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as K,ba as q}from"./chunk-DEL7GGHP.js";import{e as U,i as Y}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{m as V,u as j}from"./chunk-O4W5DSIC.js";import{Ab as d,Hb as w,Mb as F,O as P,Qa as s,X as _,Y as C,ac as p,eb as m,fb as B,fc as u,gc as f,hc as g,kb as k,lc as L,rb as A,xb as a,yb as n,zb as i,zc as z}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Q=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["input-otp-accessibility-doc"]],standalone:!1,decls:44,vars:0,consts:[["routerLink","/inputtext"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){t&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),p(3,"Screen Reader"),i(),n(4,"p"),p(5,"Input OTP uses a set of InputText components, refer to the "),n(6,"a",0),p(7,"InputText"),i(),p(8," component for more information about the screen reader support."),i()(),n(9,"h3"),p(10,"Keyboard Support"),i(),n(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),p(16,"Key"),i(),n(17,"th"),p(18,"Function"),i()()(),n(19,"tbody")(20,"tr")(21,"td")(22,"i"),p(23,"tab"),i()(),n(24,"td"),p(25,"Moves focus to the input otp."),i()(),n(26,"tr")(27,"td")(28,"i"),p(29,"right arrow"),i()(),n(30,"td"),p(31,"Moves focus to the next input element."),i()(),n(32,"tr")(33,"td")(34,"i"),p(35,"left arrow"),i()(),n(36,"td"),p(37,"Moves focus to the previous input element."),i()(),n(38,"tr")(39,"td")(40,"i"),p(41,"backspace"),i()(),n(42,"td"),p(43,"Deletes the input and moves focus to the previous input element."),i()()()()()())},dependencies:[U,x],encapsulation:2})}return e})();var X=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-basic-demo',
    templateUrl: './input-otp-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpBasicDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","input-otp-basic-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),p(2,"Two-way value binding is defined using "),n(3,"i"),p(4,"ngModel"),i(),p(5,". The number of characters is defined with the "),n(6,"i"),p(7,"length"),i(),p(8," property, which is set to 4 by default."),i()(),n(9,"div",0)(10,"p-inputotp",1),g("ngModelChange",function(l){return f(o.value,l)||(o.value=l),l}),i()(),d(11,"app-code",2)),t&2&&(s(10),u("ngModel",o.value),s(),a("code",o.code))},dependencies:[y,x,M,h,v],encapsulation:2})}return e})();var Z=(()=>{class e{code={typescript:"import { InputOtpModule } from 'primeng/inputotp';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["input-otp-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&d(0,"app-code",0),t&2&&a("code",o.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2})}return e})();var $=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" [integerOnly]="true" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" [integerOnly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-integer-only-demo',
    templateUrl: './input-otp-integer-only-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpIntegerOnlyDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["integer-only-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","integerOnly"],["selector","input-otp-integer-only-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),p(2,"When "),n(3,"i"),p(4,"integerOnly"),i(),p(5," is present, only integers can be accepted as input."),i()(),n(6,"div",0)(7,"p-inputotp",1),g("ngModelChange",function(l){return f(o.value,l)||(o.value=l),l}),i()(),d(8,"app-code",2)),t&2&&(s(7),u("ngModel",o.value),a("integerOnly",!0),s(),a("code",o.code))},dependencies:[y,x,M,h,v],encapsulation:2})}return e})();var ee=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" [mask]="true" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" [mask]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-mask-demo',
    templateUrl: './input-otp-mask-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpMaskDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["mask-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","mask"],["selector","input-otp-mask-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),p(2,"Enable the "),n(3,"i"),p(4,"mask"),i(),p(5," option to hide the values in the input fields."),i()(),n(6,"div",0)(7,"p-inputotp",1),g("ngModelChange",function(l){return f(o.value,l)||(o.value=l),l}),i()(),d(8,"app-code",2)),t&2&&(s(7),u("ngModel",o.value),a("mask",!0),s(),a("code",o.code))},dependencies:[y,x,M,h,v],encapsulation:2})}return e})();function re(e,O){e&1&&(n(0,"div",12),d(1,"i",13),i())}function le(e,O){if(e&1){let r=w();n(0,"input",10),F("input",function(o){let c=_(r).events;return C(c.input(o))})("keydown",function(o){let c=_(r).events;return C(c.keydown(o))}),i(),k(1,re,2,0,"div",11)}if(e&2){let r=O.$implicit,t=O.index;a("maxLength",1),A("value",r),s(),a("ngIf",t===3)}}var te=(()=>{class e{value;code={basic:`<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
    <p-inputotp [(ngModel)]="value" [length]="6">
        <ng-template #input let-token let-events="events" let-index="index">
            <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-4">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputotp>
    <div class="flex justify-between mt-8 self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"/>
        <p-button label="Submit Code"/>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col items-center">
        <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
        <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
        <p-inputotp [(ngModel)]="value" [length]="6">
            <ng-template #input let-token let-events="events" let-index="index">
                <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
                <div *ngIf="index === 3" class="px-4">
                    <i class="pi pi-minus"></i>
                </div>
            </ng-template>
        </p-inputotp>
        <div class="flex justify-between mt-8 self-stretch">
            <p-button label="Resend Code" [link]="true" class="p-0"/>
            <p-button label="Submit Code"/>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-otp-sample-demo',
    templateUrl: './input-otp-sample-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule, ButtonModule],
    styles: [
        \`
            .p-inputotp {
                gap: 0;
            }

            .custom-otp-input {
                width: 48px;
                height: 48px;
                font-size: 24px;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                border-radius: 0;
                border: 1px solid var(--p-inputtext-border-color);
                background: transparent;
                outline-offset: -2px;
                outline-color: transparent;
                border-right: 0 none;
                transition: outline-color 0.3s;
                color: var(--p-inputtext-color);
            }

            .custom-otp-input:focus {
                outline: 2px solid var(--p-focus-ring-color);
            }

            .custom-otp-input:first-child,
            .custom-otp-input:nth-child(5) {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }

            .custom-otp-input:nth-child(3),
            .custom-otp-input:last-child {
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                border-right-width: 1px;
                border-right-style: solid;
                border-color: var(--p-inputtext-border-color);
            }
        \`
    ],
})
export class InputOtpSampleDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["sample-doc"]],standalone:!1,decls:16,vars:4,consts:[["input",""],[1,"card","flex","justify-center"],[1,"flex","flex-col","items-center"],[1,"font-bold","text-xl","mb-2"],[1,"text-muted-color","block","mb-8"],[3,"ngModelChange","ngModel","length"],[1,"flex","justify-between","mt-8","self-stretch"],["label","Resend Code",1,"p-0",3,"link"],["label","Submit Code"],["selector","input-otp-sample-demo",3,"code"],["type","text",1,"custom-otp-input",3,"input","keydown","maxLength"],["class","px-4",4,"ngIf"],[1,"px-4"],[1,"pi","pi-minus"]],template:function(t,o){if(t&1){let c=w();n(0,"app-docsectiontext")(1,"p"),p(2,"A sample UI implementation with templating and additional elements."),i()(),n(3,"div",1)(4,"div",2)(5,"div",3),p(6,"Authenticate Your Account"),i(),n(7,"p",4),p(8,"Please enter the code sent to your phone."),i(),n(9,"p-inputotp",5),g("ngModelChange",function(D){return _(c),f(o.value,D)||(o.value=D),C(D)}),k(10,le,2,3,"ng-template",null,0,z),i(),n(12,"div",6),d(13,"p-button",7)(14,"p-button",8),i()()(),d(15,"app-code",9)}t&2&&(s(9),u("ngModel",o.value),a("length",6),s(4),a("link",!0),s(2),a("code",o.code))},dependencies:[V,y,x,M,h,v,K],styles:[".p-inputotp[_ngcontent-%COMP%]{gap:0}.custom-otp-input[_ngcontent-%COMP%]{width:48px;height:48px;font-size:24px;appearance:none;text-align:center;transition:all .2s;border-radius:0;border:1px solid var(--p-inputtext-border-color);background:transparent;outline-offset:-2px;outline-color:transparent;border-right:0 none;transition:outline-color .3s;color:var(--p-inputtext-color)}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:2px solid var(--p-focus-ring-color)}.custom-otp-input[_ngcontent-%COMP%]:first-child, .custom-otp-input[_ngcontent-%COMP%]:nth-child(5){border-top-left-radius:12px;border-bottom-left-radius:12px}.custom-otp-input[_ngcontent-%COMP%]:nth-child(3), .custom-otp-input[_ngcontent-%COMP%]:last-child{border-top-right-radius:12px;border-bottom-right-radius:12px;border-right-width:1px;border-right-style:solid;border-color:var(--p-inputtext-border-color)}"]})}return e})();var oe=(()=>{class e{value1;value2;value3;code={basic:`<p-inputotp [(ngModel)]="value1" size="small" />
<p-inputotp [(ngModel)]="value2" />
<p-inputotp [(ngModel)]="value3" size="large" />`,html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value1" size="small" />
    <p-inputotp [(ngModel)]="value2" />
    <p-inputotp [(ngModel)]="value3" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-sizes-demo',
    templateUrl: './input-otp-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpSizesDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["size","large",3,"ngModelChange","ngModel"],["selector","input-otp-sizes-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),p(2,"InputOtp provides "),n(3,"i"),p(4,"small"),i(),p(5," and "),n(6,"i"),p(7,"large"),i(),p(8," sizes as alternatives to the base."),i()(),n(9,"div",0)(10,"p-inputotp",1),g("ngModelChange",function(l){return f(o.value1,l)||(o.value1=l),l}),i(),n(11,"p-inputotp",2),g("ngModelChange",function(l){return f(o.value2,l)||(o.value2=l),l}),i(),n(12,"p-inputotp",3),g("ngModelChange",function(l){return f(o.value3,l)||(o.value3=l),l}),i()(),d(13,"app-code",4)),t&2&&(s(10),u("ngModel",o.value1),s(),u("ngModel",o.value2),s(),u("ngModel",o.value3),s(),a("code",o.code))},dependencies:[y,x,M,h,v],encapsulation:2})}return e})();function ae(e,O){if(e&1){let r=w();n(0,"input",4),F("keydown",function(o){let c=_(r).events;return C(c.keydown(o))})("input",function(o){let c=_(r).events;return C(c.input(o))}),i()}if(e&2){let r=O.$implicit;a("maxLength",1),A("value",r)}}var ne=(()=>{class e{value;code={basic:`<p-inputotp [(ngModel)]="value">
    <ng-template #input let-token let-events="events">
        <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
    </ng-template>
</p-inputotp>`,html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value">
        <ng-template #input let-token let-events="events">
            <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
        </ng-template>
    </p-inputotp>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-template-demo',
    templateUrl: './input-otp-template-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule],
    styles: [
        \`
        .custom-otp-input {
                width: 40px;
                font-size: 36px;
                border: 0 none;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                background: transparent;
                border-bottom: 2px solid var(--p-inputtext-border-color);
                border-radius: 0px;
            }

        .custom-otp-input:focus {
                outline: 0 none;
                border-bottom-color: var(--p-primary-color);
        }
        \`
    ],
})

export class InputOtpTemplateDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["template-doc"]],standalone:!1,decls:8,vars:2,consts:[["input",""],[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","input-otp-template-demo",3,"code"],["type","text",1,"custom-otp-input",3,"keydown","input","maxLength"]],template:function(t,o){if(t&1){let c=w();n(0,"app-docsectiontext")(1,"p"),p(2,"Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design."),i()(),n(3,"div",1)(4,"p-inputotp",2),g("ngModelChange",function(D){return _(c),f(o.value,D)||(o.value=D),C(D)}),k(5,ae,1,2,"ng-template",null,0,z),i()(),d(7,"app-code",3)}t&2&&(s(4),u("ngModel",o.value),s(3),a("code",o.code))},dependencies:[y,x,M,h,v],styles:[".custom-otp-input[_ngcontent-%COMP%]{width:40px;font-size:36px;border:0 none;appearance:none;text-align:center;transition:all .2s;background:transparent;border-bottom:2px solid var(--p-inputtext-border-color);border-radius:0}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:0 none;border-bottom-color:var(--p-primary-color)}"]})}return e})();var ie=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=B({type:e});static \u0275inj=P({imports:[j,Y,H,W,N,R,v,G,q,W]})}return e})();var se=()=>["InputOtp"],pe=(()=>{class e{docs=[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:X},{id:"mask",label:"Mask",component:ee},{id:"integeronly",label:"Integer Only",component:$},{id:"sizes",label:"Sizes",component:oe},{id:"template",label:"Template",component:ne},{id:"sample",label:"Sample",component:te},{id:"accessibility",label:"Accessibility",component:Q}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Otp Input Component","header","InputOtp","description","Input Otp is used to enter one time passwords.","themeDocs","inputotp",3,"docs","apiDocs"]],template:function(t,o){t&1&&d(0,"app-doc",0),t&2&&a("docs",o.docs)("apiDocs",L(2,se))},dependencies:[ie,J],encapsulation:2})}return e})();var it=[{path:"",component:pe}];export{it as default};
