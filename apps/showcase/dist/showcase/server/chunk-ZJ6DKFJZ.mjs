import './polyfills.server.mjs';
import{a as b}from"./chunk-Q3U3IJLS.mjs";import"./chunk-ULLGJRYO.mjs";import"./chunk-NVQ54RHQ.mjs";import{a as x,b as K}from"./chunk-PPCUCQZZ.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as y,d as O,e as B}from"./chunk-HZSAMTDM.mjs";import{a as g,b as N}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as h,ba as V}from"./chunk-DE54ZEHA.mjs";import{b as p,qa as d}from"./chunk-YQJJ7I3T.mjs";import{j as $}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as q,v as U}from"./chunk-RUZVPFSZ.mjs";import{$a as u,Bb as c,Cb as t,Db as i,Dc as E,Eb as l,Lb as H,O as L,Qb as m,Sa as s,X as P,Y as M,ec as e,fc as D,gb as f,hb as Y,mb as k,oc as S,pc as z}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Z=(()=>{class n{code1={typescript:`confirm1() {
this.confirmationService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => acceptFunc(),
    reject: () => rejectFunc()
});

<p-button (click)="confirm1()" icon="pi pi-check" label="Confirm" />

<p-confirmdialog />
        `};code2={html:`<p-confirmdialog id="dialog" [visible]="visible" (onHide)="visible = false" message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />

<p-button (click)="visible = true" icon="pi pi-check" label="Confirm" aria-controls="{{visible ? 'dialog' : null}} aria-expanded="{{visible ? true : false}}" />`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-accessibility-doc"]],standalone:!1,decls:102,vars:4,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," ConfirmDialog component uses "),t(6,"i"),e(7,"alertdialog"),i(),e(8," role along with "),t(9,"i"),e(10,"aria-labelledby"),i(),e(11," referring to the header element however any attribute is passed to the root element so you may use "),t(12,"i"),e(13,"aria-labelledby"),i(),e(14," to override this default behavior. In addition "),t(15,"i"),e(16,"aria-modal"),i(),e(17," is added since focus is kept within the popup. "),i(),t(18,"p"),e(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),e(21,"tabIndex"),i(),e(22," would be necessary. "),i(),t(23,"p"),e(24," When "),t(25,"i"),e(26,"confirm"),i(),e(27," function is used and a trigger is passed as a parameter, ConfirmDialog adds "),t(28,"i"),e(29,"aria-expanded"),i(),e(30," state attribute and "),t(31,"i"),e(32,"aria-controls"),i(),e(33," to the trigger so that the relation between the trigger and the popup is defined. "),i(),l(34,"app-code",0),t(35,"p"),e(36,"If the dialog is controlled with the "),t(37,"i"),e(38,"visible"),i(),e(39," property "),t(40,"i"),e(41,"aria-expanded"),i(),e(42," and "),t(43,"i"),e(44,"aria-controls"),i(),e(45," need to be handled explicitly."),i(),l(46,"app-code",0),t(47,"h3"),e(48,"Overlay Keyboard Support"),i(),t(49,"div",1)(50,"table",2)(51,"thead")(52,"tr")(53,"th"),e(54,"Key"),i(),t(55,"th"),e(56,"Function"),i()()(),t(57,"tbody")(58,"tr")(59,"td")(60,"i"),e(61,"tab"),i()(),t(62,"td"),e(63,"Moves focus to the next the focusable element within the popup."),i()(),t(64,"tr")(65,"td")(66,"i"),e(67,"shift"),i(),e(68," + "),t(69,"i"),e(70,"tab"),i()(),t(71,"td"),e(72,"Moves focus to the previous the focusable element within the popup."),i()(),t(73,"tr")(74,"td")(75,"i"),e(76,"escape"),i()(),t(77,"td"),e(78,"Closes the popup and moves focus to the trigger."),i()()()()(),t(79,"h3"),e(80,"Buttons Keyboard Support"),i(),t(81,"div",1)(82,"table",2)(83,"thead")(84,"tr")(85,"th"),e(86,"Key"),i(),t(87,"th"),e(88,"Function"),i()()(),t(89,"tbody")(90,"tr")(91,"td")(92,"i"),e(93,"enter"),i()(),t(94,"td"),e(95,"Triggers the action, closes the popup and moves focus to the trigger."),i()(),t(96,"tr")(97,"td")(98,"i"),e(99,"space"),i()(),t(100,"td"),e(101,"Triggers the action, closes the popup and moves focus to the trigger."),i()()()()()()()),o&2&&(s(34),c("code",a.code1)("hideToggleCode",!0),s(12),c("code",a.code2)("hideToggleCode",!0))},dependencies:[g,y],encapsulation:2})}return n})();var W=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm1(r){this.confirmationService.confirm({target:r.target,message:"Are you sure that you want to proceed?",header:"Confirmation",closable:!0,closeOnEscape:!0,icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(r){this.confirmationService.confirm({target:r.target,message:"Do you want to delete this record?",header:"Danger Zone",icon:"pi pi-info-circle",rejectLabel:"Cancel",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Delete",severity:"danger"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected"})}})}code={basic:`<p-toast />
<p-confirmdialog />
<p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmdialog />
    <p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
    <p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-dialog-basic-demo',
    templateUrl: './confirm-dialog-basic-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Save',
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
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

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            header: 'Danger Zone',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger',
            },

            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(u(p),u(d))};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-basic-demo"]],standalone:!1,features:[S([p,d])],decls:15,vars:3,consts:[[1,"card","flex","justify-center","gap-2"],["label","Save",3,"click","outlined"],["label","Delete","severity","danger",3,"click","outlined"],["selector","confirm-dialog-basic-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"ConfirmDialog is defined using "),t(3,"i"),e(4,"p-confirmDialog"),i(),e(5," tag and an instance of "),t(6,"i"),e(7,"ConfirmationService"),i(),e(8," is required to display it bycalling confirm method."),i()(),t(9,"div",0),l(10,"p-toast")(11,"p-confirmdialog"),t(12,"p-button",1),m("click",function(T){return a.confirm1(T)}),i(),t(13,"p-button",2),m("click",function(T){return a.confirm2(T)}),i()(),l(14,"app-code",3)),o&2&&(s(12),c("outlined",!0),s(),c("outlined",!0),s(),c("code",a.code))},dependencies:[g,b,h,x,y],encapsulation:2})}return n})();function ie(n,j){if(n&1){let r=H();t(0,"div",5)(1,"div",6),l(2,"i",7),i(),t(3,"span",8),e(4),i(),t(5,"p",9),e(6),i(),t(7,"div",10)(8,"p-button",11),m("onClick",function(){let a=P(r).onAccept;return M(a())}),i(),t(9,"p-button",12),m("onClick",function(){let a=P(r).onReject;return M(a())}),i()()()}if(n&2){let r=j.$implicit;s(4),D(r.header),s(2),D(r.message),s(3),c("outlined",!0)}}var G=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(){this.confirmationService.confirm({header:"Are you sure?",message:"Please confirm to proceed.",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"info",summary:"Rejected",detail:"You have rejected"})}})}code={basic:`<p-toast />
<p-confirmdialog #cd>
    <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div
                class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
            >
                <i class="pi pi-question !text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
            </div>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save"/>`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmdialog #cd>
        <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div
                    class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
                >
                    <i class="pi pi-question !text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                    <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
                </div>
            </div>
        </ng-template>
    </p-confirmdialog>
    <p-button (click)="confirm()" label="Save"/>
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'confirm-dialog-headless-demo',
    templateUrl: './confirm-dialog-headless-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ButtonModule, ToastModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogHeadlessDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'Please confirm to proceed.',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected' });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(u(p),u(d))};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-headless-demo"]],standalone:!1,features:[S([p,d])],decls:13,vars:1,consts:[["cd",""],["headless",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-dialog-headless-demo",3,"code"],[1,"flex","flex-col","items-center","p-8","bg-surface-0","dark:bg-surface-900","rounded"],[1,"rounded-full","bg-primary","text-primary-contrast","inline-flex","justify-center","items-center","h-24","w-24","-mt-20"],[1,"pi","pi-question","!text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-6"],[1,"mb-0"],[1,"flex","items-center","gap-2","mt-6"],["label","Save","styleClass","w-32",3,"onClick"],["label","Cancel","styleClass","w-32",3,"onClick","outlined"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),i(),e(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),t(5,"div",2),l(6,"p-toast"),t(7,"p-confirmdialog",null,0),k(9,ie,10,3,"ng-template",null,1,E),i(),t(11,"p-button",3),m("click",function(){return a.confirm()}),i()(),l(12,"app-code",4)),o&2&&(s(12),c("code",a.code))},dependencies:[g,b,h,x,y],encapsulation:2})}return n})();var J=(()=>{class n{code={typescript:"import { ConfirmDialogModule } from 'primeng/confirmdialog';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&l(0,"app-code",0),o&2&&c("code",a.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return n})();var Q=(()=>{class n{confirmationService;messageService;position="center";constructor(r,o){this.confirmationService=r,this.messageService=o}confirmPosition(r){this.position=r,this.confirmationService.confirm({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-info-circle",rejectButtonStyleClass:"p-button-text",rejectButtonProps:{label:"Cancel",severity:"secondary",text:!0},acceptButtonProps:{label:"Save",text:!0},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}code={basic:`<p-toast />
<p-confirmdialog key="positionDialog" [position]="position" />
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>`,html:`<div class="card">
    <p-toast />
    <p-confirmdialog key="positionDialog" [position]="position" />
    <div class="flex flex-wrap justify-center gap-2 mb-4">
        <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2 mb-4">
        <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2">
        <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'confirm-dialog-position-demo',
    templateUrl: './confirm-dialog-position-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ButtonModule, ToastModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogPositionDemo {
    position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirmPosition(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            rejectButtonStyleClass: 'p-button-text',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                text: true,
            },
            acceptButtonProps: {
                label: 'Save',
                text: true,
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'Process incomplete',
                    life: 3000,
                });
            },
            key: 'positionDialog',
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(u(p),u(d))};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-position-demo"]],standalone:!1,features:[S([p,d])],decls:21,vars:2,consts:[[1,"card"],["key","positionDialog",3,"position"],[1,"flex","flex-wrap","justify-center","gap-2","mb-4"],["icon","pi pi-arrow-right","label","Left","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-left","label","Right","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","TopLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","Top","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","TopRight","severity","secondary","styleClass","min-w-40",3,"click"],[1,"flex","flex-wrap","justify-center","gap-2"],["icon","pi pi-arrow-up","label","BottomLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","Bottom","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","BottomRight","severity","secondary","styleClass","min-w-40",3,"click"],["selector","confirm-dialog-position-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"position"),i(),e(5," property of the confirm options is used to display a Dialog at all edges and corners of the screen."),i()(),t(6,"div",0),l(7,"p-toast")(8,"p-confirmdialog",1),t(9,"div",2)(10,"p-button",3),m("click",function(){return a.confirmPosition("left")}),i(),t(11,"p-button",4),m("click",function(){return a.confirmPosition("right")}),i()(),t(12,"div",2)(13,"p-button",5),m("click",function(){return a.confirmPosition("topleft")}),i(),t(14,"p-button",6),m("click",function(){return a.confirmPosition("top")}),i(),t(15,"p-button",7),m("click",function(){return a.confirmPosition("topright")}),i()(),t(16,"div",8)(17,"p-button",9),m("click",function(){return a.confirmPosition("bottomleft")}),i(),t(18,"p-button",10),m("click",function(){return a.confirmPosition("bottom")}),i(),t(19,"p-button",11),m("click",function(){return a.confirmPosition("bottomright")}),i()()(),l(20,"app-code",12)),o&2&&(s(8),c("position",a.position),s(12),c("code",a.code))},dependencies:[g,b,h,x,y],encapsulation:2})}return n})();function oe(n,j){if(n&1&&(t(0,"div",4),l(1,"i",5),t(2,"p"),e(3),i()()),n&2){let r=j.$implicit;s(),c("ngClass",r.icon),s(2),D(r.message)}}var X=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(){this.confirmationService.confirm({header:"Confirmation",message:"Please confirm to proceed moving forward.",icon:"pi pi-exclamation-circle",rejectButtonProps:{label:"Cancel",icon:"pi pi-times",outlined:!0,size:"small"},acceptButtonProps:{label:"Save",icon:"pi pi-check",size:"small"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmdialog>
    <ng-template #message let-message>
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmdialog>
        <ng-template #message let-message>
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ message.message }}</p>
            </div>
        </ng-template>
    </p-confirmdialog>
    <p-button (click)="confirm()" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-dialog-template-demo',
    templateUrl: './confirm-dialog-template-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Please confirm to proceed moving forward.',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Cancel',
                icon: 'pi pi-times',
                outlined: true,
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Save',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

}`};static \u0275fac=function(o){return new(o||n)(u(p),u(d))};static \u0275cmp=f({type:n,selectors:[["confirm-dialog-template-demo"]],standalone:!1,features:[S([p,d])],decls:33,vars:1,consts:[["message",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-dialog-template-demo",3,"code"],[1,"flex","flex-col","items-center","w-full","gap-4","border-b","border-surface-200","dark:border-surface-700"],[1,"!text-6xl","text-primary-500",3,"ngClass"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Properties of the dialog are defined in two ways, "),t(3,"i"),e(4,"message"),i(),e(5,", "),t(6,"i"),e(7,"icon"),i(),e(8,", "),t(9,"i"),e(10,"header"),i(),e(11," properties can either be defined using confirm method or declaratively on p-confirmDialog ng-template by "),t(12,"i"),e(13,"header"),i(),e(14,", "),t(15,"i"),e(16,"message"),i(),e(17,", "),t(18,"i"),e(19,"icon"),i(),e(20," and "),t(21,"i"),e(22,"footer"),i(),e(23," templates. If these values are unlikely to change then declarative approach would be useful, still properties defined in a ng-template can be overridden with confirm method call. "),i(),t(24,"p"),e(25," In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons. "),i()(),t(26,"div",1),l(27,"p-toast"),t(28,"p-confirmdialog"),k(29,oe,4,2,"ng-template",null,0,E),i(),t(31,"p-button",2),m("click",function(){return a.confirm()}),i()(),l(32,"app-code",3)),o&2&&(s(32),c("code",a.code))},dependencies:[q,g,b,h,x,y],encapsulation:2})}return n})();var ee=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=Y({type:n});static \u0275inj=L({imports:[U,N,$,b,V,K,B,B]})}return n})();var ne=()=>["ConfirmDialog","ConfirmationService","Confirmation"],te=(()=>{class n{docs=[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:W},{id:"position",label:"Position",component:Q},{id:"template",label:"Template",component:X},{id:"headless",label:"Headless",component:G},{id:"accessibility",label:"Accessibility",component:Z}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=f({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ConfirmDialog Component","header","ConfirmDialog","description","ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.","themeDocs","confirmDialog",3,"docs","apiDocs"]],template:function(o,a){o&1&&l(0,"app-doc",0),o&2&&c("docs",a.docs)("apiDocs",z(2,ne))},dependencies:[ee,O],encapsulation:2})}return n})();var We=[{path:"",component:te}];export{We as default};
