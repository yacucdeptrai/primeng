import './polyfills.server.mjs';
import{a as J}from"./chunk-FYV3QHZG.mjs";import"./chunk-5IQQKL7W.mjs";import{b as g}from"./chunk-ULLGJRYO.mjs";import"./chunk-NVQ54RHQ.mjs";import{a as Y,b as G}from"./chunk-BVKBGFRF.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as b,d as $,e as A}from"./chunk-HZSAMTDM.mjs";import{a as f,b as X}from"./chunk-EK6YV52O.mjs";import{s as N,u as C,v as Q}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as h,ba as K,d as O}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as Z}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as R}from"./chunk-RUZVPFSZ.mjs";import{Bb as s,Cb as t,Db as e,Dc as U,Eb as n,Lb as I,O as W,Qb as r,Sa as p,Sb as V,X as L,Y as T,Z as j,_ as F,cc as D,ec as i,gb as u,hb as z,jc as x,kc as y,lc as w,mb as B,pc as v}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var ee=(()=>{class a{code={html:`<p-button icon="pi pi-external-link" (click)="visible = true" aria-controls="{{visible ? 'dialog' : null}}" aria-expanded="{{visible ? true : false}}" />

<p-dialog id="dialog" header="Header" [(visible)]="visible" [style]="{ width: '50vw' }" (onHide)="visible = false">
    <p>Content</p>
</p-dialog>`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-accessibility-doc"]],standalone:!1,decls:110,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),e(),t(4,"p"),i(5," Dialog component uses "),t(6,"i"),i(7,"dialog"),e(),i(8," role along with "),t(9,"i"),i(10,"aria-labelledby"),e(),i(11," referring to the header element however any attribute is passed to the root element so you may use "),t(12,"i"),i(13,"aria-labelledby"),e(),i(14," to override this default behavior. In addition "),t(15,"i"),i(16,"aria-modal"),e(),i(17," is added since focus is kept within the popup. "),e(),t(18,"p"),i(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),i(21,"tabIndex"),e(),i(22," would be necessary. "),e(),t(23,"p"),i(24,"Trigger element also requires "),t(25,"i"),i(26,"aria-expanded"),e(),i(27," and "),t(28,"i"),i(29,"aria-controls"),e(),i(30," to be handled explicitly."),e(),t(31,"p"),i(32," Close element is a "),t(33,"i"),i(34,"button"),e(),i(35," with an "),t(36,"i"),i(37,"aria-label"),e(),i(38," that refers to the "),t(39,"i"),i(40,"aria.close"),e(),i(41," property of the "),t(42,"a",0),i(43,"locale"),e(),i(44," API by default, you may use"),t(45,"i"),i(46,"closeButtonProps"),e(),i(47," to customize the element and override the default "),t(48,"i"),i(49,"aria-label"),e(),i(50,". "),e(),n(51,"app-code",1),t(52,"h3"),i(53,"Overlay Keyboard Support"),e(),t(54,"div",2)(55,"table",3)(56,"thead")(57,"tr")(58,"th"),i(59,"Key"),e(),t(60,"th"),i(61,"Function"),e()()(),t(62,"tbody")(63,"tr")(64,"td")(65,"i"),i(66,"tab"),e()(),t(67,"td"),i(68,"Moves focus to the next the focusable element within the dialog."),e()(),t(69,"tr")(70,"td")(71,"i"),i(72,"shift"),e(),i(73," + "),t(74,"i"),i(75,"tab"),e()(),t(76,"td"),i(77,"Moves focus to the previous the focusable element within the dialog."),e()(),t(78,"tr")(79,"td")(80,"i"),i(81,"escape"),e()(),t(82,"td"),i(83,"Closes the dialog if "),t(84,"i"),i(85,"closeOnEscape"),e(),i(86," is true."),e()()()()(),t(87,"h3"),i(88,"Close Button Keyboard Support"),e(),t(89,"div",2)(90,"table",3)(91,"thead")(92,"tr")(93,"th"),i(94,"Key"),e(),t(95,"th"),i(96,"Function"),e()()(),t(97,"tbody")(98,"tr")(99,"td")(100,"i"),i(101,"enter"),e()(),t(102,"td"),i(103,"Closes the dialog."),e()(),t(104,"tr")(105,"td")(106,"i"),i(107,"space"),e()(),t(108,"td"),i(109,"Closes the dialog."),e()()()()()()()),l&2&&(p(51),s("code",o.code)("hideToggleCode",!0))},dependencies:[f,b],encapsulation:2})}return a})();var ce=()=>({width:"25rem"}),te=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">
        <span class="p-text-secondary block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-basic-demo',
    templateUrl: './dialog-basic-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogBasicDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-basic-demo"]],standalone:!1,decls:23,vars:6,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Edit Profile",3,"visibleChange","modal","visible"],[1,"p-text-secondary","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-basic-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog is used as a container and visibility is controlled with "),t(3,"i"),i(4,"visible"),e(),i(5," property."),e()(),t(6,"div",0)(7,"p-button",1),r("click",function(){return o.showDialog()}),e(),t(8,"p-dialog",2),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(9,"span",3),i(10,"Update your information."),e(),t(11,"div",4)(12,"label",5),i(13,"Username"),e(),n(14,"input",6),e(),t(15,"div",7)(16,"label",8),i(17,"Email"),e(),n(18,"input",9),e(),t(19,"div",10)(20,"p-button",11),r("click",function(){return o.visible=!1}),e(),t(21,"p-button",12),r("click",function(){return o.visible=!1}),e()()()(),n(22,"app-code",13)),l&2&&(p(8),D(v(5,ce)),s("modal",!0),x("visible",o.visible),p(14),s("code",o.code))},dependencies:[f,g,h,b,C],encapsulation:2})}return a})();function ue(a,P){if(a&1){let m=I();t(0,"div",5),j(),t(1,"svg",6),n(2,"path",7),t(3,"mask",8),n(4,"path",9),e(),t(5,"g",10),n(6,"path",11),e(),n(7,"path",12)(8,"path",13)(9,"path",14)(10,"path",15)(11,"path",16)(12,"path",17)(13,"path",18)(14,"path",19)(15,"path",20)(16,"path",21),e(),F(),t(17,"div",22)(18,"label",23),i(19,"Username"),e(),n(20,"input",24),e(),t(21,"div",22)(22,"label",25),i(23,"Password"),e(),n(24,"input",26),e(),t(25,"div",27)(26,"p-button",28),r("click",function(){L(m);let o=V();return T(o.closeDialog())}),e(),t(27,"p-button",29),r("click",function(){L(m);let o=V();return T(o.closeDialog())}),e()()()}a&2&&(p(26),s("text",!0),p(),s("text",!0))}var ie=(()=>{class a{visible=!1;showDialog(){this.visible=!0}closeDialog(){this.visible=!1}code={basic:`<p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
<p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
    <ng-template #headless>
        <div
            class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
            style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
        >
            <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block mx-auto"
            >
                <path
                    d="..."
                    fill="var(--p-primary-color)"
                />
            </svg>
            <div class="inline-flex flex-col gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
            </div>
            <div class="inline-flex flex-col gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input
                    pInputText
                    id="password"
                    class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
                    type="password"
                />
            </div>
            <div class="flex items-center gap-4">
                <p-button
                    label="Cancel"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
                <p-button
                    label="Sign-In"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
            </div>
        </div>
    </ng-template>
</p-dialog>`,html:`<div class="card flex justify-center">
  <p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
<p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
    <ng-template #headless>
        <div
            class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
            style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
        >
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--p-primary-color)" />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--ground-background)" />
                </mask>
                <g mask="url(#mask0_1_52)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--p-primary-color)" />
                </g>
                <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--ground-background)" />
                <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--ground-background)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--ground-background)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--ground-background)"
                />
                <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--ground-background)" />
                <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--ground-background)" />
                <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--ground-background)" />
                <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--ground-background)" />
            </svg>
            <div class="inline-flex flex-col gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
            </div>
            <div class="inline-flex flex-col gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input
                    pInputText
                    id="password"
                    class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
                    type="password"
                />
            </div>
            <div class="flex items-center gap-4">
                <p-button
                    label="Cancel"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
                <p-button
                    label="Sign-In"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
            </div>
        </div>
    </ng-template>
</p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-headless-demo',
    templateUrl: './dialog-headless-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogHeadlessDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-headless-demo"]],standalone:!1,decls:11,vars:2,consts:[["headless",""],[1,"card","flex","justify-center"],["icon","pi pi-user","label","Login",3,"click"],["maskStyleClass","backdrop-blur-sm","styleClass","!border-0 !bg-transparent",3,"visibleChange","visible"],["selector","dialog-headless-demo",3,"code"],[1,"flex","flex-col","px-8","py-8","gap-6","rounded-2xl",2,"border-radius","12px","background-image","radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"inline-flex","flex-col","gap-2"],["for","username",1,"text-primary-50","font-semibold"],["pInputText","","id","username",1,"!bg-white/20","!border-0","!p-4","!text-primary-50","w-80"],["for","password",1,"text-primary-50","font-semibold"],["pInputText","","id","password","type","password",1,"!bg-white/20","!border-0","!p-4","!text-primary-50","w-80"],[1,"flex","items-center","gap-4"],["label","Cancel","styleClass","!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10",1,"w-full",3,"click","text"],["label","Sign-In","styleClass","!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10",1,"w-full",3,"click","text"]],template:function(l,o){if(l&1){let d=I();t(0,"app-docsectiontext")(1,"p")(2,"i"),i(3,"Headless"),e(),i(4," mode allows you to customize the entire user interface instead of the default elements."),e()(),t(5,"div",1)(6,"p-button",2),r("click",function(){return o.showDialog()}),e(),t(7,"p-dialog",3),w("visibleChange",function(M){return L(d),y(o.visible,M)||(o.visible=M),T(M)}),B(8,ue,28,2,"ng-template",null,0,U),e()(),n(10,"app-code",4)}l&2&&(p(7),x("visible",o.visible),p(3),s("code",o.code))},dependencies:[f,g,h,b,C],encapsulation:2})}return a})();var oe=(()=>{class a{code={typescript:"import { DialogModule } from 'primeng/dialog';"};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,o){l&1&&n(0,"app-code",0),l&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return a})();var fe=()=>({width:"50rem"}),be=()=>({"1199px":"75vw","575px":"90vw"}),ae=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
    <p class="mb-8">
        Lorem ipsum dolor sit amet...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="mb-8">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
        <p class="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="mb-8">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p class="mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <p class="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="mb-8">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dialog-long-content-demo',
    templateUrl: './dialog-long-content-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogLongContentDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-long-content-demo"]],standalone:!1,decls:19,vars:8,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","modal","visible","breakpoints"],[1,"mb-8"],["selector","dialog-long-content-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog automatically displays a scroller when content exceeeds viewport."),e()(),t(3,"div",0)(4,"p-button",1),r("click",function(){return o.showDialog()}),e(),t(5,"p-dialog",2),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(6,"p",3),i(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e(),t(8,"p",3),i(9,' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '),e(),t(10,"p",3),i(11," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),e(),t(12,"p",3),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e(),t(14,"p",3),i(15,' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '),e(),t(16,"p"),i(17," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),e()()(),n(18,"app-code",4)),l&2&&(p(5),D(v(6,fe)),s("modal",!0),x("visible",o.visible),s("breakpoints",v(7,be)),p(13),s("code",o.code))},dependencies:[f,g,h,b],encapsulation:2})}return a})();var ge=()=>({width:"50rem"}),ve=()=>({"1199px":"75vw","575px":"90vw"}),le=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'dialog-maximizable-demo',
    templateUrl: './dialog-maximizable-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogMaximizableDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-maximizable-demo"]],standalone:!1,decls:15,vars:9,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","modal","visible","breakpoints","maximizable"],["selector","dialog-maximizable-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Setting "),t(3,"i"),i(4,"maximizable"),e(),i(5," property to "),t(6,"i"),i(7,"true"),e(),i(8," enables the full screen mode."),e()(),t(9,"div",0)(10,"p-button",1),r("click",function(){return o.showDialog()}),e(),t(11,"p-dialog",2),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(12,"p"),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e()()(),n(14,"app-code",3)),l&2&&(p(11),D(v(7,ge)),s("modal",!0),x("visible",o.visible),s("breakpoints",v(8,ve))("maximizable",!0),p(3),s("code",o.code))},dependencies:[f,g,h,b],encapsulation:2})}return a})();var he=()=>({width:"25rem"}),ne=(()=>{class a{visible=!1;position="center";showDialog(m){this.position=m,this.visible=!0}code={basic:`<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="showDialog('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [position]="position" [style]="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card">
    <div class="flex flex-wrap justify-center gap-2 mb-2">
        <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2 mb-2">
        <p-button (click)="showDialog('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2">
        <p-button (click)="showDialog('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [position]="position" [style]="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-position-demo',
    templateUrl: './dialog-position-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogPositionDemo {
    visible: boolean = false;

    position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

    showDialog(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
        this.position = position;
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-position-demo"]],standalone:!1,decls:33,vars:7,consts:[[1,"card"],[1,"flex","flex-wrap","justify-center","gap-2","mb-2"],["icon","pi pi-arrow-right","label","Left","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-left","label","Right","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down-right","label","TopLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","Top","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down-left","label","TopRight","severity","secondary","styleClass","min-w-40",3,"click"],[1,"flex","flex-wrap","justify-center","gap-2"],["icon","pi pi-arrow-up-right","label","BottomLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","Bottom","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up-left","label","BottomRight","severity","secondary","styleClass","min-w-40",3,"click"],["header","Edit Profile",3,"visibleChange","modal","visible","position"],[1,"text-surface-500","dark:text-surface-400","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-position-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"The "),t(3,"i"),i(4,"position"),e(),i(5," property is used to display a Dialog at all edges and corners of the screen."),e()(),t(6,"div",0)(7,"div",1)(8,"p-button",2),r("click",function(){return o.showDialog("left")}),e(),t(9,"p-button",3),r("click",function(){return o.showDialog("right")}),e()(),t(10,"div",1)(11,"p-button",4),r("click",function(){return o.showDialog("topleft")}),e(),t(12,"p-button",5),r("click",function(){return o.showDialog("top")}),e(),t(13,"p-button",6),r("click",function(){return o.showDialog("topright")}),e()(),t(14,"div",7)(15,"p-button",8),r("click",function(){return o.showDialog("bottomleft")}),e(),t(16,"p-button",9),r("click",function(){return o.showDialog("bottom")}),e(),t(17,"p-button",10),r("click",function(){return o.showDialog("bottomright")}),e()(),t(18,"p-dialog",11),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(19,"span",12),i(20,"Update your information."),e(),t(21,"div",13)(22,"label",14),i(23,"Username"),e(),n(24,"input",15),e(),t(25,"div",16)(26,"label",17),i(27,"Email"),e(),n(28,"input",18),e(),t(29,"div",19)(30,"p-button",20),r("click",function(){return o.visible=!1}),e(),t(31,"p-button",21),r("click",function(){return o.visible=!1}),e()()()(),n(32,"app-code",22)),l&2&&(p(18),D(v(6,he)),s("modal",!0),x("visible",o.visible),s("position",o.position),p(14),s("code",o.code))},dependencies:[f,g,h,b,C],encapsulation:2})}return a})();var xe=()=>({width:"50vw"}),ye=()=>({"1199px":"75vw","575px":"90vw"}),se=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [(visible)]="visible" [modal]="true" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [(visible)]="visible" [modal]="true" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dialog-responsive-demo',
    templateUrl: './dialog-responsive-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogResponsiveDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-responsive-demo"]],standalone:!1,decls:15,vars:10,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","visible","modal","breakpoints","draggable","resizable"],["selector","dialog-responsive-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2," Dialog width can be adjusted per screen size with the "),t(3,"i"),i(4,"breakpoints"),e(),i(5," option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in "),t(6,"i"),i(7,"style"),e(),i(8," property is used. "),e()(),t(9,"div",0)(10,"p-button",1),r("click",function(){return o.showDialog()}),e(),t(11,"p-dialog",2),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(12,"p"),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e()()(),n(14,"app-code",3)),l&2&&(p(11),D(v(8,xe)),x("visible",o.visible),s("modal",!0)("breakpoints",v(9,ye))("draggable",!1)("resizable",!1),p(3),s("code",o.code))},dependencies:[f,g,h,b],encapsulation:2})}return a})();var we=()=>({width:"25rem"});function De(a,P){a&1&&(t(0,"div",13),n(1,"p-avatar",14),t(2,"span",15),i(3,"Amy Elsner"),e()())}function _e(a,P){if(a&1){let m=I();t(0,"p-button",16),r("click",function(){L(m);let o=V();return T(o.visible=!1)}),e(),t(1,"p-button",17),r("click",function(){L(m);let o=V();return T(o.visible=!1)}),e()}a&2&&(s("text",!0),p(),s("outlined",!0))}var re=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }">
    <ng-template #header>
        <div class="inline-flex items-center justify-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </div>
    </ng-template>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-2">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <ng-template #footer>
        <p-button label="Cancel" [text]="true" severity="secondary" (click)="visible = false" />
        <p-button label="Save" [outlined]="true" severity="secondary" (click)="visible = false" />
    </ng-template>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }">
        <ng-template #header>
            <div class="inline-flex items-center justify-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
            </div>
        </ng-template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-2">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <ng-template #footer>
            <p-button label="Cancel" [text]="true" severity="secondary" (click)="visible = false" />
            <p-button label="Save" [outlined]="true" severity="secondary" (click)="visible = false" />
        </ng-template>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'dialog-template-demo',
    templateUrl: './dialog-template-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule, AvatarModule]
})
export class DialogTemplateDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-template-demo"]],standalone:!1,decls:27,vars:6,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],["label","Show",3,"click"],[3,"visibleChange","visible","modal"],[1,"text-surface-500","dark:text-surface-400","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-2"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],["selector","dialog-template-demo",3,"code"],[1,"inline-flex","items-center","justify-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","whitespace-nowrap"],["label","Cancel","severity","secondary",3,"click","text"],["label","Save","severity","secondary",3,"click","outlined"]],template:function(l,o){if(l&1){let d=I();t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog can be customized using "),t(3,"i"),i(4,"header"),e(),i(5," and "),t(6,"i"),i(7,"footer"),e(),i(8," templates."),e()(),t(9,"div",2)(10,"p-button",3),r("click",function(){return o.showDialog()}),e(),t(11,"p-dialog",4),w("visibleChange",function(M){return L(d),y(o.visible,M)||(o.visible=M),T(M)}),B(12,De,4,0,"ng-template",null,0,U),t(14,"span",5),i(15,"Update your information."),e(),t(16,"div",6)(17,"label",7),i(18,"Username"),e(),n(19,"input",8),e(),t(20,"div",9)(21,"label",10),i(22,"Email"),e(),n(23,"input",11),e(),B(24,_e,2,2,"ng-template",null,1,U),e()(),n(26,"app-code",12)}l&2&&(p(11),D(v(5,we)),x("visible",o.visible),s("modal",!0),p(15),s("code",o.code))},dependencies:[f,g,h,b,C,Y],encapsulation:2})}return a})();var ke=()=>({width:"25rem"}),me=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Edit Profile" [(visible)]="visible" [style]="{ width: '25rem' }">
        <span class="p-text-secondary block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-without-modal-demo',
    templateUrl: './dialog-without-modal-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogWithoutModalDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["dialog-without-modal-demo"]],standalone:!1,decls:23,vars:5,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Edit Profile",3,"visibleChange","visible"],[1,"p-text-secondary","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-without-modal-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Mask layer behind the Dialog is configured with the "),t(3,"i"),i(4,"modal"),e(),i(5," property. By default, no modal layer is added."),e()(),t(6,"div",0)(7,"p-button",1),r("click",function(){return o.showDialog()}),e(),t(8,"p-dialog",2),w("visibleChange",function(c){return y(o.visible,c)||(o.visible=c),c}),t(9,"span",3),i(10,"Update your information."),e(),t(11,"div",4)(12,"label",5),i(13,"Username"),e(),n(14,"input",6),e(),t(15,"div",7)(16,"label",8),i(17,"Email"),e(),n(18,"input",9),e(),t(19,"div",10)(20,"p-button",11),r("click",function(){return o.visible=!1}),e(),t(21,"p-button",12),r("click",function(){return o.visible=!1}),e()()()(),n(22,"app-code",13)),l&2&&(p(8),D(v(4,ke)),x("visible",o.visible),p(14),s("code",o.code))},dependencies:[f,g,h,b,C],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=z({type:a});static \u0275inj=W({imports:[R,X,Z,N,g,K,J,A,Q,G,O,A]})}return a})();var Se=()=>["Dialog"],de=(()=>{class a{docs=[{id:"import",label:"Import",component:oe},{id:"basic",label:"Basic",component:te},{id:"template",label:"Template",component:re},{id:"position",label:"Position",component:ne},{id:"maximizable",label:"Maximizable",component:le},{id:"longcontent",label:"Long Content",component:ae},{id:"withoutmodal",label:"Without Modal",component:me},{id:"responsive",label:"Responsive",component:se},{id:"headless",label:"Headless",component:ie},{id:"accessibility",label:"Accessibility",component:ee}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dialog Component","header","Dialog","description","Dialog is a container to display content in an overlay window.","themeDocs","dialog",3,"docs","apiDocs"]],template:function(l,o){l&1&&n(0,"app-doc",0),l&2&&s("docs",o.docs)("apiDocs",v(2,Se))},dependencies:[pe,$],encapsulation:2})}return a})();var jt=[{path:"",component:de}];export{jt as default};
