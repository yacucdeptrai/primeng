import './polyfills.server.mjs';
import{a as j}from"./chunk-K66PAVXO.mjs";import{a as u}from"./chunk-PPCUCQZZ.mjs";import{a as X,b as Y}from"./chunk-BVKBGFRF.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as f,d as G,e as O}from"./chunk-HZSAMTDM.mjs";import{a as v,b as q}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as h,ba as N}from"./chunk-DE54ZEHA.mjs";import{Ka as M,qa as n}from"./chunk-YQJJ7I3T.mjs";import{j as $}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as K}from"./chunk-RUZVPFSZ.mjs";import{$a as y,Bb as p,Cb as t,Db as i,Dc as F,Eb as l,Lb as B,O as U,Qb as m,Sa as c,Sb as A,Tc as Z,X as D,Y as E,cc as V,ec as e,fc as I,gb as d,gc as z,hb as W,mb as R,oc as S,pc as _,qc as H}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var J=(()=>{class o{static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-accessibility-doc"]],standalone:!1,decls:51,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),t(3,"p"),e(4,"Toast component use "),t(5,"i"),e(6,"alert"),i(),e(7," role that implicitly defines "),t(8,"i"),e(9,"aria-live"),i(),e(10,' as "assertive" and '),t(11,"i"),e(12,"aria-atomic"),i(),e(13,' as "true".'),i(),t(14,"p"),e(15,"Close element is a "),t(16,"i"),e(17,"button"),i(),e(18," with an "),t(19,"i"),e(20,"aria-label"),i(),e(21," that refers to the "),t(22,"i"),e(23,"aria.close"),i(),e(24," property of the "),t(25,"a",0),e(26,"locale"),i(),e(27," API by default."),i(),t(28,"h3"),e(29,"Close Button Keyboard Support"),i(),t(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e(35,"Key"),i(),t(36,"th"),e(37,"Function"),i()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"i"),e(42,"enter"),i()(),t(43,"td"),e(44,"Closes the message."),i()(),t(45,"tr")(46,"td")(47,"i"),e(48,"space"),i()(),t(49,"td"),e(50,"Closes the message."),i()()()()()())},dependencies:[f],encapsulation:2})}return o})();var Q=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}code={basic:`<p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'" />
<p-button pRipple (click)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'" />
    <p-button pRipple (click)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-animation-demo',
    templateUrl: './toast-animation-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastAnimationDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["animation-doc"]],standalone:!1,features:[S([n])],decls:19,vars:5,consts:[[1,"card","flex","justify-center"],[3,"showTransformOptions","showTransitionOptions","hideTransitionOptions"],["pRipple","","label","Show",3,"click"],["selector","toast-animation-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Transition of the animations can be customized using the "),t(3,"i"),e(4,"showTransitionOptions"),i(),e(5,", "),t(6,"i"),e(7,"hideTransitionOptions"),i(),e(8,", "),t(9,"i"),e(10,"showTransformOptions"),i(),e(11," and "),t(12,"i"),e(13,"hideTransformOptions"),i(),e(14," properties."),i()(),t(15,"div",0),l(16,"p-toast",1),t(17,"p-button",2),m("click",function(){return a.show()}),i()(),l(18,"app-code",3)),s&2&&(c(16),p("showTransformOptions","translateY(100%)")("showTransitionOptions","1000ms")("hideTransitionOptions","1000ms")("showTransformOptions","translateX(100%)"),c(2),p("code",a.code))},dependencies:[v,f,u,h,M],encapsulation:2})}return o})();var ee=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content",life:3e3})}code={basic:`<p-toast />
<p-button (onClick)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-button (onClick)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './toast-basic-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastBasicDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["basic-doc"]],standalone:!1,features:[S([n])],decls:28,vars:1,consts:[[1,"card","flex","justify-center"],["label","Show",3,"onClick"],["selector","toast-basic-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Toasts are displayed by calling the "),t(3,"i"),e(4,"add"),i(),e(5," and "),t(6,"i"),e(7,"addAll"),i(),e(8," method provided by the "),t(9,"i"),e(10,"messageService"),i(),e(11,". A single toast is specified by the "),t(12,"i"),e(13,"Message"),i(),e(14," interface that defines various properties such as "),t(15,"i"),e(16,"severity"),i(),e(17,", "),t(18,"i"),e(19,"summary"),i(),e(20," and "),t(21,"i"),e(22,"detail"),i(),e(23,". "),i()(),t(24,"div",0),l(25,"p-toast"),t(26,"p-button",1),m("onClick",function(){return a.show()}),i()(),l(27,"app-code",2)),s&2&&(c(27),p("code",a.code))},dependencies:[v,f,u,h],encapsulation:2})}return o})();var ce=()=>({height:"4px"});function de(o,P){if(o&1){let r=B();t(0,"section",5)(1,"div",6),l(2,"i",7),t(3,"span",8),e(4),i()(),t(5,"div",9),l(6,"p-progressbar",10),t(7,"label",11),e(8),i()(),t(9,"div",12)(10,"p-button",13),m("click",function(a){let g=D(r).closeFn;return E(g(a))}),i(),t(11,"p-button",14),m("click",function(a){let g=D(r).closeFn;return E(g(a))}),i()()()}if(o&2){let r=P.$implicit,s=A();c(4),I(r.summary),c(2),V(_(6,ce)),p("value",s.progress)("showValue",!1),c(2),z("",s.progress,"% uploaded")}}var te=(()=>{class o{messageService;cdr;visible=!1;progress=0;interval=null;constructor(r,s){this.messageService=r,this.cdr=s}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"custom",summary:"Uploading your files.",styleClass:"backdrop-blur-lg rounded-2xl"}),this.visible=!0,this.progress=0,this.interval&&clearInterval(this.interval),this.interval=setInterval(()=>{this.progress<=100&&(this.progress=this.progress+20),this.progress>=100&&(this.progress=100,clearInterval(this.interval)),this.cdr.markForCheck()},1e3))}onClose(){this.visible=!1}code={basic:`<p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message #headless let-closeFn="closeFn">
        <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
            <div class="flex items-center gap-5">
                <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" styleClass="!bg-primary/80" />
                <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
            </div>
            <div class="flex gap-4 mb-4 justify-end">
                <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                <p-button label="Cancel" (click)="closeFn($event)" size="small" />
            </div>
        </section>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="Confirm" />`,html:`<div class="card flex justify-center">
    <p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
        <ng-template let-message #headless let-closeFn="closeFn">
            <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
                <div class="flex items-center gap-5">
                    <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                    <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" styleClass="!bg-primary/80" />
                    <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
                </div>
                <div class="flex gap-4 mb-4 justify-end">
                    <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                    <p-button label="Cancel" (click)="closeFn($event)" size="small" />
                </div>
            </section>
        </ng-template>
    </p-toast>
    <p-button (click)="showConfirm()" label="Confirm" />
</div>`,typescript:`import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'toast-headless-demo',
    templateUrl: './toast-headless-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple, ProgressBar],
    providers: [MessageService]
})
export class ToastHeadlessDemo {

    visible: boolean = false;

    progress: number = 0;

    interval = null;

    constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) {}

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({
                key: 'confirm',
                sticky: true,
                severity: 'custom',
                summary: 'Uploading your files.',
                styleClass: 'backdrop-blur-lg rounded-2xl',
            });
            this.visible = true;
            this.progress = 0;

            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => {
                if (this.progress <= 100) {
                    this.progress = this.progress + 20;
                }

                if (this.progress >= 100) {
                    this.progress = 100;
                    clearInterval(this.interval);
                }
                this.cdr.markForCheck();
            }, 1000);
        }
    }

    onClose() {
        this.visible = false;
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n),y(Z))};static \u0275cmp=d({type:o,selectors:[["headless-doc"]],standalone:!1,features:[S([n])],decls:11,vars:2,consts:[["headless",""],[1,"card","flex","justify-center"],["position","top-center","key","confirm",3,"onClose","baseZIndex"],["label","Confirm",3,"click"],["selector","toast-headless-demo",3,"code"],[1,"flex","flex-col","p-4","gap-4","w-full","bg-primary/70","rounded-xl"],[1,"flex","items-center","gap-5"],[1,"pi","pi-cloud-upload","text-white","dark:text-black","text-2xl"],[1,"font-bold","text-base","text-white","dark:text-black"],[1,"flex","flex-col","gap-2"],["styleClass","!bg-primary/80",3,"value","showValue"],[1,"text-sm","font-bold","text-white","dark:text-black"],[1,"flex","gap-4","mb-4","justify-end"],["label","Another Upload?","size","small",3,"click"],["label","Cancel","size","small",3,"click"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),i(),e(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),t(5,"div",1)(6,"p-toast",2),m("onClose",function(){return a.onClose()}),R(7,de,12,7,"ng-template",null,0,F),i(),t(9,"p-button",3),m("click",function(){return a.showConfirm()}),i()(),l(10,"app-code",4)),s&2&&(c(6),p("baseZIndex",5e3),c(4),p("code",a.code))},dependencies:[v,f,u,h,j],styles:["[_nghost-%COMP%]     .p-progressbar-value{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--p-primary-50) calc(100% * var(--tw-bg-opacity)),transparent)!important}"]})}return o})();var ie=(()=>{class o{code={typescript:"import { ToastModule } from 'primeng/toast';"};static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(s,a){s&1&&l(0,"app-code",0),s&2&&p("code",a.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return o})();var oe=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.addAll([{severity:"success",summary:"Message 1",detail:"Message Content"},{severity:"info",summary:"Message 2",detail:"Message Content"},{severity:"warn",summary:"Message 3",detail:"Message Content"},{severity:"error",summary:"Message 4",detail:"Message Content"}])}code={basic:`<p-toast />
<p-button pRipple (click)="show()" label="Multiple" severity="warn" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-button pRipple (click)="show()" label="Multiple" severity="warn" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-multiple-demo',
    templateUrl: './toast-multiple-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastMultipleDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["toast-multiple-demo"]],standalone:!1,features:[S([n])],decls:13,vars:1,consts:[[1,"card","flex","justify-center"],["pRipple","","label","Multiple","severity","warn",3,"click"],["selector","toast-multiple-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Multiple toasts are displayed by passing an array to the "),t(3,"i"),e(4,"showAll"),i(),e(5," method of the "),t(6,"i"),e(7,"messageService"),i(),e(8,"."),i()(),t(9,"div",0),l(10,"p-toast"),t(11,"p-button",1),m("click",function(){return a.show()}),i()(),l(12,"app-code",2)),s&2&&(c(12),p("code",a.code))},dependencies:[v,f,u,h,M],encapsulation:2})}return o})();var se=(()=>{class o{messageService;constructor(r){this.messageService=r}showTopLeft(){this.messageService.add({severity:"info",summary:"Info Message",detail:"Message Content",key:"tl",life:3e3})}showBottomLeft(){this.messageService.add({severity:"warn",summary:"Warn Message",detail:"Message Content",key:"bl",life:3e3})}showBottomRight(){this.messageService.add({severity:"success",summary:"Success Message",detail:"Message Content",key:"br",life:3e3})}code={basic:`<p-toast position="top-left" key="tl" />
<p-toast position="bottom-left" key="bl" />
<p-toast position="bottom-right" key="br" />
<p-button pRipple (click)="showTopLeft()" label="Top Left" />
<p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
<p-button pRipple (click)="showBottomRight()" label="Bottom Right" />`,html:`<div class="card flex justify-center">
    <p-toast position="top-left" key="tl" />
    <p-toast position="bottom-left" key="bl" />
    <p-toast position="bottom-right" key="br" />
    <div class="flex flex-wrap gap-2">
        <p-button pRipple (click)="showTopLeft()" label="Top Left" />
        <p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
        <p-button pRipple (click)="showBottomRight()" label="Bottom Right" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-position-demo',
    templateUrl: './toast-position-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastPositionDemo {
    constructor(private messageService: MessageService) {}

    showTopLeft() {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
    }

    showBottomLeft() {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', key: 'bl', life: 3000 });
    }

    showBottomRight() {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', key: 'br', life: 3000 });
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["position-doc"]],standalone:!1,features:[S([n])],decls:36,vars:1,consts:[[1,"card","flex","justify-center"],["position","top-left","key","tl"],["position","bottom-left","key","bl"],["position","bottom-right","key","br"],[1,"flex","flex-wrap","gap-2"],["pRipple","","label","Top Left",3,"click"],["pRipple","","label","Bottom Left",3,"click"],["pRipple","","label","Bottom Right",3,"click"],["selector","toast-position-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Location of the toast is customized with the "),t(3,"i"),e(4,"position"),i(),e(5," property. Valid values are "),t(6,"i"),e(7,"top-left"),i(),e(8,", "),t(9,"i"),e(10,"top-center"),i(),e(11,", "),t(12,"i"),e(13,"top-right"),i(),e(14,", "),t(15,"i"),e(16,"bottom-left"),i(),e(17,", "),t(18,"i"),e(19,"bottom-center"),i(),e(20,", "),t(21,"i"),e(22,"bottom-right"),i(),e(23," and "),t(24,"i"),e(25,"center"),i(),e(26,"."),i()(),t(27,"div",0),l(28,"p-toast",1)(29,"p-toast",2)(30,"p-toast",3),t(31,"div",4)(32,"p-button",5),m("click",function(){return a.showTopLeft()}),i(),t(33,"p-button",6),m("click",function(){return a.showBottomLeft()}),i(),t(34,"p-button",7),m("click",function(){return a.showBottomRight()}),i()()(),l(35,"app-code",8)),s&2&&(c(35),p("code",a.code))},dependencies:[v,f,u,h,M],encapsulation:2})}return o})();var fe=()=>({width:"100%",right:"0",left:"0"}),ue=o=>({"920px":o}),re=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}code={basic:`<p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
<p-button (click)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
    <p-button (click)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-responsive-demo',
    templateUrl: './toast-responsive-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastResponsiveDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["responsive-doc"]],standalone:!1,features:[S([n])],decls:13,vars:5,consts:[[1,"card","flex","justify-center"],[3,"breakpoints"],["label","Show",3,"click"],["selector","toast-responsive-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Toast styling can be adjusted per screen size with the "),t(3,"i"),e(4,"breakpoints"),i(),e(5," option. The value of "),t(6,"i"),e(7,"breakpoints"),i(),e(8," should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px. "),i()(),t(9,"div",0),l(10,"p-toast",1),t(11,"p-button",2),m("click",function(){return a.show()}),i()(),l(12,"app-code",3)),s&2&&(c(10),p("breakpoints",H(3,ue,_(2,fe))),c(2),p("code",a.code))},dependencies:[v,f,u,h],encapsulation:2})}return o})();var ae=(()=>{class o{messageService;constructor(r){this.messageService=r}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}showError(){this.messageService.add({severity:"error",summary:"Error",detail:"Message Content"})}showContrast(){this.messageService.add({severity:"contrast",summary:"Contrast",detail:"Message Content"})}showSecondary(){this.messageService.add({severity:"secondary",summary:"Secondary",detail:"Message Content"})}code={basic:`<p-toast />
<p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
<p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
<p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
<p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
<p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
<p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
    <p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
    <p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
    <p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
    <p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
    <p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-severity-demo',
    templateUrl: './toast-severity-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastSeverityDemo {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["severity-doc"]],standalone:!1,features:[S([n])],decls:27,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["type","button","pRipple","","label","Success","severity","success",3,"click"],["type","button","pRipple","","label","Info","severity","info",3,"click"],["type","button","pRipple","","label","Warn","severity","warn",3,"click"],["type","button","pRipple","","label","Error","severity","danger",3,"click"],["type","button","pRipple","","label","Secondary","severity","secondary",3,"click"],["type","button","pRipple","","label","Contrast","severity","contrast",3,"click"],["selector","toast-severity-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The "),t(3,"i"),e(4,"severity"),i(),e(5," option specifies the type of the message. There are four types of messages: "),t(6,"i"),e(7,"success"),i(),e(8,", "),t(9,"i"),e(10,"info"),i(),e(11,", "),t(12,"i"),e(13,"warn"),i(),e(14," and "),t(15,"i"),e(16,"error"),i(),e(17,". The severity of the message is used to display the icon and the color of the toast. "),i()(),t(18,"div",0),l(19,"p-toast"),t(20,"p-button",1),m("click",function(){return a.showSuccess()}),i(),t(21,"p-button",2),m("click",function(){return a.showInfo()}),i(),t(22,"p-button",3),m("click",function(){return a.showWarn()}),i(),t(23,"p-button",4),m("click",function(){return a.showError()}),i(),t(24,"p-button",5),m("click",function(){return a.showSecondary()}),i(),t(25,"p-button",6),m("click",function(){return a.showContrast()}),i()(),l(26,"app-code",7)),s&2&&(c(26),p("code",a.code))},dependencies:[v,f,u,h,M],encapsulation:2})}return o})();var ne=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})}clear(){this.messageService.clear()}code={basic:`<p-toast />
<div class="flex flex-wrap gap-2">
    <p-button pRipple (click)="show()" label="Sticky" />
    <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
</div>`,html:`<div class="card flex justify-center">
    <p-toast />
    <div class="flex flex-wrap gap-2">
        <p-button pRipple (click)="show()" label="Sticky" />
        <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-sticky-demo',
    templateUrl: './toast-sticky-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastStickyDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    }

    clear() {
        this.messageService.clear();
    }
}`};static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["sticky-doc"]],standalone:!1,features:[S([n])],decls:18,vars:1,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-2"],["pRipple","","label","Sticky",3,"click"],["pRipple","","severity","secondary","label","Clear",3,"click"],["selector","toast-sticky-demo",3,"code"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A toast disappears after the time defined by the "),t(3,"i"),e(4,"life"),i(),e(5," option, set "),t(6,"i"),e(7,"sticky"),i(),e(8," option "),t(9,"i"),e(10,"true"),i(),e(11," on the message to override this and not hide the toast automatically."),i()(),t(12,"div",0),l(13,"p-toast"),t(14,"div",1)(15,"p-button",2),m("click",function(){return a.show()}),i(),t(16,"p-button",3),m("click",function(){return a.clear()}),i()()(),l(17,"app-code",4)),s&2&&(c(17),p("code",a.code))},dependencies:[v,f,u,h,M],encapsulation:2})}return o})();function ve(o,P){if(o&1){let r=B();t(0,"div",5)(1,"div",6),l(2,"p-avatar",7),t(3,"span",8),e(4,"Amy Elsner"),i()(),t(5,"div",9),e(6),i(),t(7,"p-button",10),m("click",function(){D(r);let a=A();return E(a.onConfirm())}),i()()}if(o&2){let r=P.$implicit;c(6),I(r.summary)}}var le=(()=>{class o{messageService;constructor(r){this.messageService=r}visible=!1;code={basic:`<p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
    <ng-template let-message #message>
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ message.summary }}</div>
            <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
        </div>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="View" />`,html:`<div class="card flex justify-center">
    <p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
        <ng-template let-message #message>
            <div class="flex flex-col items-start flex-auto">
                <div class="flex items-center gap-2">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </div>
                <div class="font-medium text-lg my-4">{{ message.summary }}</div>
                <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
            </div>
        </ng-template>
    </p-toast>
    <p-button (click)="showConfirm()" label="View" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'toast-template-demo',
    templateUrl: './toast-template-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple, AvatarModule],
    providers: [MessageService]
})
export class ToastTemplateDemo {
    constructor(private messageService: MessageService) {}

    visible: boolean = false;

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
            this.visible = true;
        }
    }

    onConfirm() {
        this.messageService.clear('confirm');
        this.visible = false;
    }

    onReject() {
        this.messageService.clear('confirm');
        this.visible = false;
    }
}`};onConfirm(){this.messageService.clear("confirm"),this.visible=!1}onReject(){this.messageService.clear("confirm"),this.visible=!1}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"success",summary:"Can you send me the report?"}),this.visible=!0)}static \u0275fac=function(s){return new(s||o)(y(n))};static \u0275cmp=d({type:o,selectors:[["template-doc"]],standalone:!1,features:[S([n])],decls:9,vars:2,consts:[["message",""],[1,"card","flex","justify-center"],["position","bottom-center","key","confirm",3,"onClose","baseZIndex"],["label","View",3,"click"],["selector","toast-template-demo",3,"code"],[1,"flex","flex-col","items-start","flex-auto"],[1,"flex","items-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"],[1,"font-medium","text-lg","my-4"],["severity","success","size","small","label","Reply",3,"click"]],template:function(s,a){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows customizing the content where the message instance is available as the implicit variable."),i()(),t(3,"div",1)(4,"p-toast",2),m("onClose",function(){return a.onReject()}),R(5,ve,8,1,"ng-template",null,0,F),i(),t(7,"p-button",3),m("click",function(){return a.showConfirm()}),i()(),l(8,"app-code",4)),s&2&&(c(4),p("baseZIndex",5e3),c(4),p("code",a.code))},dependencies:[v,f,u,h,X],encapsulation:2})}return o})();var me=(()=>{class o{static \u0275fac=function(s){return new(s||o)};static \u0275mod=W({type:o});static \u0275inj=U({imports:[K,$,q,O,u,N,Y,j,O]})}return o})();var ge=()=>["Toast","ToastMessage"],pe=(()=>{class o{docs=[{id:"import",label:"Import",component:ie},{id:"basic",label:"Basic",component:ee},{id:"severity",label:"Severity",component:ae},{id:"position",label:"Position",component:se},{id:"multiple",label:"Multiple",component:oe},{id:"sticky",label:"Sticky",component:ne},{id:"templating",label:"Template",component:le},{id:"headless",label:"Headless",component:te},{id:"responsive",label:"Responsive",component:re},{id:"animation",label:"Animation",component:Q},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Toast Component","header","Toast","description","Toast is used to display messages in an overlay.","themeDocs","toast",3,"docs","apiDocs"]],template:function(s,a){s&1&&l(0,"app-doc",0),s&2&&p("docs",a.docs)("apiDocs",_(2,ge))},dependencies:[me,G],encapsulation:2})}return o})();var Xt=[{path:"",component:pe}];export{Xt as default};
