import{a as E,b as O}from"./chunk-VYKACWBM.js";import{a as h,b as N}from"./chunk-F4X3V2LA.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as v,d as U,e as A}from"./chunk-I6RUY6VJ.js";import{a as S,b as K}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as y,ba as L}from"./chunk-DEL7GGHP.js";import{i as V}from"./chunk-UHCZASEU.js";import{b as p,qa as d}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as $}from"./chunk-O4W5DSIC.js";import{$b as z,Ab as m,Hb as Y,Mb as u,O as F,Ob as w,Qa as c,X as k,Xb as B,Y as P,Za as f,ac as e,bc as D,eb as s,fb as R,kb as C,kc as g,lc as H,xb as l,yb as t,zb as i,zc as M}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["confirm-popup-accessibility-doc"]],standalone:!1,decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," ConfirmPopup component uses "),t(6,"i"),e(7,"alertdialog"),i(),e(8," role and since any attribute is passed to the root element you may define attributes like "),t(9,"i"),e(10,"aria-label"),i(),e(11," or "),t(12,"i"),e(13,"aria-labelledby"),i(),e(14," to describe the popup contents. In addition "),t(15,"i"),e(16,"aria-modal"),i(),e(17," is added since focus is kept within the popup. "),i(),t(18,"p"),e(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),e(21,"tabIndex"),i(),e(22," would be necessary. ConfirmPopup adds "),t(23,"i"),e(24,"aria-expanded"),i(),e(25," state attribute and "),t(26,"i"),e(27,"aria-controls"),i(),e(28," to the trigger so that the relation between the trigger and the popup is defined. "),i(),t(29,"h3"),e(30,"Overlay Keyboard Support"),i(),t(31,"p"),e(32," When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),t(33,"i"),e(34,"autofocus"),i(),e(35," to an element within the popup. "),i(),t(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),e(41,"Key"),i(),t(42,"th"),e(43,"Function"),i()()(),t(44,"tbody")(45,"tr")(46,"td")(47,"i"),e(48,"tab"),i()(),t(49,"td"),e(50,"Moves focus to the next the focusable element within the popup."),i()(),t(51,"tr")(52,"td")(53,"i"),e(54,"shift"),i(),e(55," + "),t(56,"i"),e(57,"tab"),i()(),t(58,"td"),e(59,"Moves focus to the previous the focusable element within the popup."),i()(),t(60,"tr")(61,"td")(62,"i"),e(63,"escape"),i()(),t(64,"td"),e(65,"Closes the popup and moves focus to the trigger."),i()()()()(),t(66,"h3"),e(67,"Buttons Keyboard Support"),i(),t(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),e(73,"Key"),i(),t(74,"th"),e(75,"Function"),i()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"i"),e(80,"enter"),i()(),t(81,"td"),e(82,"Triggers the action, closes the popup and moves focus to the trigger."),i()(),t(83,"tr")(84,"td")(85,"i"),e(86,"space"),i()(),t(87,"td"),e(88,"Triggers the action, closes the popup and moves focus to the trigger."),i()()()()()()())},dependencies:[v],encapsulation:2})}return n})();var Q=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm1(r){this.confirmationService.confirm({target:r.target,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(r){this.confirmationService.confirm({target:r.target,message:"Do you want to delete this record?",icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Delete",severity:"danger"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup />
<p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmpopup />
    <p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
    <p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
    selector: 'confirm-popup-basic-demo',
    templateUrl: './confirm-popup-basic-demo.html',
    standalone: true,
    imports: [ButtonModule, ToastModule, ConfirmPopupModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Save'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(f(p),f(d))};static \u0275cmp=s({type:n,selectors:[["confirm-popup-basic-demo"]],standalone:!1,features:[g([p,d])],decls:15,vars:3,consts:[[1,"card","flex","justify-center","gap-2"],["label","Save",3,"onClick","outlined"],["label","Delete","severity","danger",3,"onClick","outlined"],["selector","confirm-popup-basic-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"ConfirmPopup is defined using "),t(3,"i"),e(4,"p-confirmPopup"),i(),e(5," tag and an instance of "),t(6,"i"),e(7,"ConfirmationService"),i(),e(8," is required to display it bycalling confirm method."),i()(),t(9,"div",0),m(10,"p-toast")(11,"p-confirmpopup"),t(12,"p-button",1),u("onClick",function(x){return a.confirm1(x)}),i(),t(13,"p-button",2),u("onClick",function(x){return a.confirm2(x)}),i()(),m(14,"app-code",3)),o&2&&(c(12),l("outlined",!0),c(),l("outlined",!0),c(),l("code",a.code))},dependencies:[S,E,y,h,v],encapsulation:2})}return n})();function oe(n,T){if(n&1){let r=Y();t(0,"div",5)(1,"span"),e(2),i(),t(3,"div",6)(4,"p-button",7),u("onClick",function(){k(r),w();let a=B(8);return P(a.onAccept())}),i(),t(5,"p-button",8),u("onClick",function(){k(r),w();let a=B(8);return P(a.onReject())}),i()()()}if(n&2){let r=T.$implicit;c(2),D(r.message),c(3),l("text",!0)}}var X=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(r){this.confirmationService.confirm({target:r.target,message:"Save your current process?",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup #cp>
    <ng-template #headless let-message>
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
            </div>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (onClick)="confirm($event)" label="Save" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmpopup #cp>
        <ng-template #headless let-message>
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                    <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
                </div>
            </div>
        </ng-template>
    </p-confirmpopup>
    <p-button (onClick)="confirm($event)" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-popup-headless-demo',
    templateUrl: './confirm-popup-headless-demo.html',
    standalone: true,
    imports: [ConfirmPopupModule, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupHeadlessDemo {
   constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Save your current process?',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(f(p),f(d))};static \u0275cmp=s({type:n,selectors:[["confirm-popup-headless-demo"]],standalone:!1,features:[g([p,d])],decls:13,vars:1,consts:[["cp",""],["headless",""],[1,"card","flex","justify-center"],["label","Save",3,"onClick"],["selector","confirm-popup-headless-demo",3,"code"],[1,"rounded","p-4"],[1,"flex","items-center","gap-2","mt-4"],["label","Save","size","small",3,"onClick"],["label","Cancel","size","small","severity","secondary",3,"onClick","text"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),i(),e(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),t(5,"div",2),m(6,"p-toast"),t(7,"p-confirmpopup",null,0),C(9,oe,6,2,"ng-template",null,1,M),i(),t(11,"p-button",3),u("onClick",function(x){return a.confirm(x)}),i()(),m(12,"app-code",4)),o&2&&(c(12),l("code",a.code))},dependencies:[S,E,y,h,v],encapsulation:2})}return n})();var ee=(()=>{class n{code={typescript:"import { ConfirmPopupModule } from 'primeng/confirmpopup';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["confirm-popup-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&m(0,"app-code",0),o&2&&l("code",a.code)("hideToggleCode",!0)},dependencies:[S],encapsulation:2})}return n})();function re(n,T){if(n&1&&(t(0,"div",4),m(1,"i",5),t(2,"p"),e(3),i()()),n&2){let r=T.$implicit;c(),z(r.icon),c(2),D(r.message)}}var te=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(r){this.confirmationService.confirm({target:r.target,message:"Please confirm to proceed moving forward.",icon:"pi pi-exclamation-circle",rejectButtonProps:{icon:"pi pi-times",label:"Cancel",outlined:!0},acceptButtonProps:{icon:"pi pi-check",label:"Confirm"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup>
    <ng-template #content let-message>
        <div
            class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
        >
            <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (click)="confirm($event)" label="Save" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmpopup>
        <ng-template #content let-message>
            <div
                class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
            >
                <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ message.message }}</p>
            </div>
        </ng-template>
    </p-confirmpopup>
    <p-button (click)="confirm($event)" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-popup-template-demo',
    templateUrl: './confirm-popup-template-demo.html',
    standalone: true,
    imports: [ConfirmPopupModule, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}


    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Please confirm to proceed moving forward.',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                icon: 'pi pi-times',
                label: 'Cancel',
                outlined: true,
            },
            acceptButtonProps: {
                icon: 'pi pi-check',
                label: 'Confirm',
            },
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'You have accepted',
                    life: 3000,
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'You have rejected',
                    life: 3000,
                });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(f(p),f(d))};static \u0275cmp=s({type:n,selectors:[["confirm-popup-template-demo"]],standalone:!1,features:[g([p,d])],decls:13,vars:1,consts:[["content",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-popup-template-demo",3,"code"],[1,"flex","flex-col","items-center","w-full","gap-4","border-b","border-surface-200","dark:border-surface-700","p-4","mb-4","pb-0"],[1,"!text-6xl","text-primary-500"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Content section can be customized using "),t(3,"i"),e(4,"content"),i(),e(5," template."),i()(),t(6,"div",1),m(7,"p-toast"),t(8,"p-confirmpopup"),C(9,re,4,3,"ng-template",null,0,M),i(),t(11,"p-button",2),u("click",function(x){return a.confirm(x)}),i()(),m(12,"app-code",3)),o&2&&(c(12),l("code",a.code))},dependencies:[S,E,y,h,v],encapsulation:2})}return n})();var ie=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=R({type:n});static \u0275inj=F({imports:[$,K,V,O,L,N,A,A]})}return n})();var ae=()=>["ConfirmPopup","Confirmation","ConfirmationService"],ne=(()=>{class n{docs=[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:Q},{id:"template",label:"Template",component:te},{id:"headless",label:"Headless",component:X},{id:"accessibility",label:"Accessibility",component:W}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ConfirmPopup Component","header","ConfirmPopup","description","ConfirmPopup displays a confirmation overlay displayed relatively to its target.","themeDocs","confirmPopup",3,"docs","apiDocs"]],template:function(o,a){o&1&&m(0,"app-doc",0),o&2&&l("docs",a.docs)("apiDocs",H(2,ae))},dependencies:[ie,U],encapsulation:2})}return n})();var et=[{path:"",component:ne}];export{et as default};
