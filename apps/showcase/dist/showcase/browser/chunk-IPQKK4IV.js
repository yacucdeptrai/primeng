import{a as h,b as j}from"./chunk-L6HSRGMN.js";import{a as N,b as P}from"./chunk-YRYZCC4R.js";import"./chunk-NJQRXN25.js";import{a as H,b as F,c as U,d as R}from"./chunk-EHIVA7EC.js";import{a as A,b as B}from"./chunk-RPICNBEK.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as u,d as z,e as y}from"./chunk-I6RUY6VJ.js";import{a as c,b as O}from"./chunk-CIUCWEWU.js";import{u as I,v as Z}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as x,ba as _}from"./chunk-DEL7GGHP.js";import{i as w}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as k}from"./chunk-O4W5DSIC.js";import{Ab as r,O as V,Ob as E,Qa as d,Z as D,_ as C,_b as L,ac as t,eb as p,fb as T,kb as v,lc as f,xb as l,yb as o,zb as i,zc as s}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";function $(e,b){e&1&&r(0,"p-button",5)(1,"p-button",6)(2,"p-button",7)}function ee(e,b){e&1&&(o(0,"p-iconfield",8),r(1,"p-inputicon",9)(2,"input",10),i())}function te(e,b){if(e&1&&r(0,"p-splitbutton",11),e&2){let a=E();l("model",a.items)}}var q=(()=>{class e{items;ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]}code={basic:`<p-toolbar>
    <ng-template #start>
        <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-upload" text severity="secondary" />
    </ng-template>
    <ng-template #center>
        <p-iconfield iconPosition="left">
            <p-inputicon styleClass="pi pi-search" />
            <input type="text" pInputText placeholder="Search" />
        </p-iconfield>
    </ng-template>
    <ng-template #end>
        <p-splitbutton label="Save" [model]="items" />
    </ng-template>
</p-toolbar>`,html:`<div class="card">
    <p-toolbar>
        <ng-template #start>
            <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
            <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
            <p-button icon="pi pi-upload" text severity="secondary" />
        </ng-template>
        <ng-template #center>
            <p-iconfield iconPosition="left">
                <p-inputicon styleClass="pi pi-search" />
                <input type="text" pInputText placeholder="Search" />
            </p-iconfield>
        </ng-template>
        <ng-template #end>
            <p-splitbutton label="Save" [model]="items" />
        </ng-template>
    </p-toolbar>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
    selector: 'toolbar-basic-demo',
    templateUrl: './toolbar-basic-demo.html',
    standalone: true,
    imports: [Toolbar, ButtonModule, SplitButton, InputTextModule, IconField, InputIcon]
})
export class ToolbarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["basic-doc"]],standalone:!1,decls:21,vars:1,consts:[["start",""],["center",""],["end",""],[1,"card"],["selector","toolbar-basic-demo",3,"code"],["icon","pi pi-plus","text","","severity","secondary",1,"mr-2"],["icon","pi pi-print","text","","severity","secondary",1,"mr-2"],["icon","pi pi-upload","text","","severity","secondary"],["iconPosition","left"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Search"],["label","Save",3,"model"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," Toolbar is a grouping component for buttons and other content. Its content can be placed inside the "),o(3,"i"),t(4,"start"),i(),t(5,", "),o(6,"i"),t(7,"center"),i(),t(8," and "),o(9,"i"),t(10,"end"),i(),t(11," sections. "),i()(),o(12,"div",3)(13,"p-toolbar"),v(14,$,3,0,"ng-template",null,0,s)(16,ee,3,0,"ng-template",null,1,s)(18,te,1,1,"ng-template",null,2,s),i()(),r(20,"app-code",4)),n&2&&(d(20),l("code",m.code))},dependencies:[c,u,h,x,N,I,H,U],encapsulation:2})}return e})();var G=(()=>{class e{code={typescript:"import { ToolbarModule } from 'primeng/toolbar';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["toolbar-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,m){n&1&&r(0,"app-code",0),n&2&&l("code",m.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return e})();var K=(()=>{class e{code={html:`<p-toolbar aria-label="Actions">
    Content
</p-toolbar>`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["toolbar-accessibility-doc"]],standalone:!1,decls:26,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,m){n&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),o(4,"p"),t(5," Toolbar uses "),o(6,"i"),t(7,"toolbar"),i(),t(8," role for the root element, "),o(9,"i"),t(10,"aria-orientation"),i(),t(11," is not included as it defaults to "),o(12,"i"),t(13,"horizontal"),i(),t(14,". Any valid attribute is passed to the root element so you may add additional properties like "),o(15,"i"),t(16,"aria-labelledby"),i(),t(17," and "),o(18,"i"),t(19,"aria-labelled"),i(),t(20," to define the element if required. "),i(),r(21,"app-code",0),o(22,"h3"),t(23,"Keyboard Support"),i(),o(24,"p"),t(25,"Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence."),i()()()),n&2&&(d(21),l("code",m.code)("hideToggleCode",!0))},dependencies:[c,u],encapsulation:2})}return e})();var oe=()=>({"border-radius":"3rem",padding:"1rem 1rem 1rem 1.5rem"}),ie=()=>({width:"32px",height:"32px"});function ne(e,b){e&1&&(o(0,"div",4),D(),o(1,"svg",5),r(2,"path",6),o(3,"mask",7),r(4,"path",8),i(),o(5,"g",9),r(6,"path",10),i(),r(7,"path",11)(8,"path",12)(9,"path",13)(10,"path",14)(11,"path",15)(12,"path",16)(13,"path",17)(14,"path",18)(15,"path",19)(16,"path",20),i(),C(),r(17,"p-button",21)(18,"p-button",22)(19,"p-button",23),i())}function re(e,b){e&1&&(o(0,"div",4),r(1,"p-button",24)(2,"p-avatar",25),i()),e&2&&(d(2),L(f(2,ie)))}var J=(()=>{class e{code={basic:`<p-toolbar [style]="{ 'border-radius': '3rem', 'padding': '1rem 1rem 1rem 1.5rem' }">
    <ng-template #start>
        <div class="flex items-center gap-2">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
                <path d="..." fill="var(--p-primary-color)" />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
            </svg>
            <p-button label="Files" text plain />
            <p-button label="Edit" text plain />
            <p-button label="View" text plain />
        </div>
    </ng-template>

    <ng-template #end>
        <div class="flex items-center gap-2">
            <p-button label="Share" severity="contrast" size="small" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" [style]="{ width: '32px', height: '32px' }" />
        </div>
    </ng-template>
</p-toolbar>`,html:`<div class="card">
  <p-toolbar [style]="{ 'border-radius': '3rem', 'padding': '1rem 1rem 1rem 1.5rem' }">
        <ng-template #start>
            <div class="flex items-center gap-2">
                 <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
                    <path
                        d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                        fill="var(--p-primary-color)"
                    />
                    <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                        <path
                            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                            fill="var(--ground-background)"
                        />
                    </mask>
                    <g mask="url(#mask0_1_52)">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                            fill="var(--p-primary-color)"
                        />
                    </g>
                    <path
                        d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                        fill="var(--ground-background)"
                    />
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
                    <path
                        d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                        fill="var(--ground-background)"
                    />
                </svg>
                <p-button label="Files" text plain />
                <p-button label="Edit" text plain />
                <p-button label="View" text plain />
            </div>
        </ng-template>

        <ng-template #end>
            <div class="flex items-center gap-2">
                <p-button label="Share" severity="contrast" size="small" />
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    [style]="{ width: '32px', height: '32px' }"
                />
            </div>
        </ng-template>
    </p-toolbar>
</div>`,typescript:`import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toolbar-custom-demo',
    templateUrl: './toolbar-custom-demo.html',
    standalone: true,
    imports: [Toolbar, AvatarModule, ButtonModule]
})
export class ToolbarCustomDemo {

}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["custom-doc"]],standalone:!1,decls:19,vars:4,consts:[["start",""],["end",""],[1,"card"],["selector","toolbar-custom-demo",3,"code"],[1,"flex","items-center","gap-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",2,"width","2rem","margin-right","1rem"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["label","Files","text","","plain",""],["label","Edit","text","","plain",""],["label","View","text","","plain",""],["label","Share","severity","contrast","size","small"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Content can also be placed using the "),o(3,"i"),t(4,"start"),i(),t(5,", "),o(6,"i"),t(7,"center"),i(),t(8," and "),o(9,"i"),t(10,"end"),i(),t(11," templates."),i()(),o(12,"div",2)(13,"p-toolbar"),v(14,ne,20,0,"ng-template",null,0,s)(16,re,3,3,"ng-template",null,1,s),i()(),r(18,"app-code",3)),n&2&&(d(13),L(f(3,oe)),d(5),l("code",m.code))},dependencies:[c,u,h,x,A],encapsulation:2})}return e})();var Q=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=T({type:e});static \u0275inj=V({imports:[k,O,y,j,w,_,P,Z,B,F,R,y]})}return e})();var ae=()=>["Toolbar"],W=(()=>{class e{docs=[{id:"import",label:"Import",component:G},{id:"basic",label:"Basic",component:q},{id:"custom",label:"Custom",component:J},{id:"accessibility",label:"Accessibility",component:K}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Toolbar Component","header","Toolbar","description","Toolbar is a grouping component for buttons and other content.","themeDocs","toolbar",3,"docs","apiDocs"]],template:function(n,m){n&1&&r(0,"app-doc",0),n&2&&l("docs",m.docs)("apiDocs",f(2,ae))},dependencies:[Q,z],encapsulation:2})}return e})();var Ke=[{path:"",component:W}];export{Ke as default};
