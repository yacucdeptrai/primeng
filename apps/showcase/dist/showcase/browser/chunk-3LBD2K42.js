import{a as E,b as k}from"./chunk-FCMSSE5W.js";import{a as j,b as L,c as P,d as O}from"./chunk-EHIVA7EC.js";import{a as R,b as U}from"./chunk-VHOAM5CB.js";import{b as G}from"./chunk-YF7WV7YA.js";import{a as q,d as z,e as M}from"./chunk-I6RUY6VJ.js";import{a as g,b as V}from"./chunk-CIUCWEWU.js";import{b as C,e as I,j as D,s as v,u as W,v as N}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as S,ba as _,c as A,d as B}from"./chunk-DEL7GGHP.js";import{i as w}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as h}from"./chunk-O4W5DSIC.js";import{Ab as r,O as F,Qa as m,ac as s,eb as l,fb as T,fc as u,gc as d,hc as f,lc as b,xb as c,yb as n,zb as p}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var H=(()=>{class e{name="";email="";accept=!1;code={basic:`<div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-user"></i>
        </p-inputicon>
        <input type="text" pInputText id="input" [(ngModel)]="name" type="text" placeholder="Name" [pAutoFocus]="true" [fluid]="true" />
    </p-iconfield>

    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-envelope"> </i>
        </p-inputicon>
        <input type="text" pInputText id="email" [(ngModel)]="email" type="email" placeholder="Email" [fluid]="true" />
    </p-iconfield>

    <div class="flex items-center gap-2">
        <p-checkbox id="accept" [(ngModel)]="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
    </div>

    <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" />
</div>`,html:` <div class="card flex justify-center">
    <div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
        <p-iconfield>
            <p-inputicon>
                <i class="pi pi-user"></i>
            </p-inputicon>
            <input type="text" pInputText id="input" [(ngModel)]="name" type="text" placeholder="Name" [pAutoFocus]="true" [fluid]="true" />
        </p-iconfield>

        <p-iconfield>
            <p-inputicon>
                <i class="pi pi-envelope"> </i>
            </p-inputicon>
            <input type="text" pInputText id="email" [(ngModel)]="email" type="email" placeholder="Email" [fluid]="true" />
        </p-iconfield>

        <div class="flex items-center gap-2">
            <p-checkbox id="accept" [(ngModel)]="accept" name="accept" value="Accept" />
            <label for="accept">I agree to the terms and conditions.</label>
        </div>

        <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
    selector: 'focus-trap-basic-demo',
    templateUrl: './focus-trap-basic-demo.html',
    standalone: true,
    imports: [FocusTrapModule, ButtonModule, FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, AutoFocusModule]
})
export class FocusTrapBasicDemo {
    name: string = '';

    email: string = '';

    accept: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=l({type:e,selectors:[["focus-trap-basic-demo"]],standalone:!1,decls:22,vars:7,consts:[[1,"card","flex","justify-center"],["pFocusTrap","",1,"w-full","sm:w-80","flex","flex-col","gap-6"],[1,"pi","pi-user"],["type","text","pInputText","","id","input","type","text","placeholder","Name",3,"ngModelChange","ngModel","pAutoFocus","fluid"],[1,"pi","pi-envelope"],["type","text","pInputText","","id","email","type","email","placeholder","Email",3,"ngModelChange","ngModel","fluid"],[1,"flex","items-center","gap-2"],["id","accept","name","accept","value","Accept",3,"ngModelChange","ngModel"],["for","accept"],["type","submit","label","Submit","styleClass","w-full",1,"mt-2"],["selector","focus-trap-basic-demo",3,"code"]],template:function(o,t){o&1&&(n(0,"app-docsectiontext")(1,"p"),s(2,"FocusTrap is applied to a container element with the "),n(3,"i"),s(4,"pFocusTrap"),p(),s(5," directive."),p()(),n(6,"div",0)(7,"div",1)(8,"p-iconfield")(9,"p-inputicon"),r(10,"i",2),p(),n(11,"input",3),f("ngModelChange",function(i){return d(t.name,i)||(t.name=i),i}),p()(),n(12,"p-iconfield")(13,"p-inputicon"),r(14,"i",4),p(),n(15,"input",5),f("ngModelChange",function(i){return d(t.email,i)||(t.email=i),i}),p()(),n(16,"div",6)(17,"p-checkbox",7),f("ngModelChange",function(i){return d(t.accept,i)||(t.accept=i),i}),p(),n(18,"label",8),s(19,"I agree to the terms and conditions."),p()(),r(20,"p-button",9),p()(),r(21,"app-code",10)),o&2&&(m(11),u("ngModel",t.name),c("pAutoFocus",!0)("fluid",!0),m(4),u("ngModel",t.email),c("fluid",!0),m(2),u("ngModel",t.accept),m(4),c("code",t.code))},dependencies:[g,q,C,I,D,S,W,E,j,P,R,A],encapsulation:2})}return e})();var J=(()=>{class e{code={typescript:"import { FocusTrapModule } from 'primeng/focustrap';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=l({type:e,selectors:[["focus-trap-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&r(0,"app-code",0),o&2&&c("code",t.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var K=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=T({type:e});static \u0275inj=F({imports:[h,w,V,M,v,_,N,k,G,L,O,U,B,M]})}return e})();var Y=()=>["FocusTrap"],Q=(()=>{class e{docs=[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:H}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Focus Trap Component","header","Focus Trap","description","Focus Trap keeps focus within a certain DOM element while tabbing.",3,"docs","apiDocs"]],template:function(o,t){o&1&&r(0,"app-doc",0),o&2&&c("docs",t.docs)("apiDocs",b(2,Y))},dependencies:[K,z],encapsulation:2})}return e})();var ke=[{path:"",component:Q}];export{ke as default};
