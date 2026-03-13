import './polyfills.server.mjs';
import{a as L,b as N,c as M,d as P}from"./chunk-5IQQKL7W.mjs";import{a as G,b as K}from"./chunk-TUWVE3ES.mjs";import{a as R,b as q}from"./chunk-IIW25JG6.mjs";import{a as s,d as O,e as V}from"./chunk-HZSAMTDM.mjs";import{a as u,b as j}from"./chunk-EK6YV52O.mjs";import{b as x,e as y,j as S,s as B,u as b,v as U}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{f as T,j as W}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as H}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as e,Db as i,Eb as a,O as E,Sa as r,Z as k,_ as Z,ec as l,gb as c,hb as A,jc as f,kc as g,lc as v,pc as z}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var J=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["iconfield-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"h3"),l(2,"Screen Reader"),i(),e(3,"p"),l(4,"IconField and InputIcon does not require any roles and attributes."),i(),e(5,"h3"),l(6,"Keyboard Support"),i(),e(7,"p"),l(8,"Components does not include any interactive elements."),i()())},dependencies:[s],encapsulation:2})}return t})();var Q=(()=>{class t{code={basic:`<p-iconfield>
    <p-inputicon styleClass="pi pi-search" />
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
<p-iconfield>
    <input type="text" pInputText />
    <p-inputicon styleClass="pi pi-spinner pi-spin" />
</p-iconfield>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-iconfield>
        <p-inputicon styleClass="pi pi-search" />
        <input type="text" pInputText placeholder="Search" />
    </p-iconfield>
    <p-iconfield>
        <input type="text" pInputText />
        <p-inputicon styleClass="pi pi-spinner pi-spin" />
    </p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-basic-demo',
    templateUrl: './iconfield-basic-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconfieldBasicDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["basic-doc"]],standalone:!1,decls:26,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Search"],["type","text","pInputText",""],["styleClass","pi pi-spinner pi-spin"],["selector","iconfield-basic-demo",3,"code"]],template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"p"),l(2," A group is created by wrapping the input and icon with the "),e(3,"i"),l(4,"IconField"),i(),l(5," component. Each icon is defined as a child of "),e(6,"i"),l(7,"InputIcon"),i(),l(8," component. In addition, position of the icon can be changed using "),e(9,"i"),l(10,"iconPosition"),i(),l(11," property that the default value is "),e(12,"i"),l(13,"right"),i(),l(14," and also "),e(15,"i"),l(16,"left"),i(),l(17," option is available. "),i()(),e(18,"div",0)(19,"p-iconfield"),a(20,"p-inputicon",1)(21,"input",2),i(),e(22,"p-iconfield"),a(23,"input",3)(24,"p-inputicon",4),i()(),a(25,"app-code",5)),o&2&&(r(25),m("code",n.code))},dependencies:[u,s,b,L,M],encapsulation:2})}return t})();var Y=(()=>{class t{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    </p-iconfield>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    </p-iconfield>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    </p-iconfield>
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
        </p-iconfield>
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
        </p-iconfield>
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
        </p-iconfield>
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'iconfield-float-label-demo',
    templateUrl: './iconfield-float-label-demo.html',
    standalone: true,
    imports: [InputIconModule, IconFieldModule, InputTextModule, FloatLabelModule, FormsModule]
})
export class IconFieldFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["float-label-doc"]],standalone:!1,decls:26,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"pi","pi-search"],["pInputText","","id","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","iconfield-float-label-demo",3,"code"]],template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"FloatLabel visually integrates a label with its form element. Visit "),e(3,"a",0),l(4,"FloatLabel"),i(),l(5," documentation for more information."),i()(),e(6,"div",1)(7,"p-floatlabel")(8,"p-iconfield"),a(9,"p-inputicon",2),e(10,"input",3),v("ngModelChange",function(p){return g(n.value1,p)||(n.value1=p),p}),i()(),e(11,"label",4),l(12,"Over Label"),i()(),e(13,"p-floatlabel",5)(14,"p-iconfield"),a(15,"p-inputicon",2),e(16,"input",6),v("ngModelChange",function(p){return g(n.value2,p)||(n.value2=p),p}),i()(),e(17,"label",7),l(18,"In Label"),i()(),e(19,"p-floatlabel",8)(20,"p-iconfield"),a(21,"p-inputicon",2),e(22,"input",9),v("ngModelChange",function(p){return g(n.value3,p)||(n.value3=p),p}),i()(),e(23,"label",10),l(24,"On Label"),i()()(),a(25,"app-code",11)),o&2&&(r(10),f("ngModel",n.value1),r(6),f("ngModel",n.value2),r(6),f("ngModel",n.value3),r(3),m("code",n.code))},dependencies:[T,u,s,b,L,M,x,y,S,R],encapsulation:2})}return t})();var $=(()=>{class t{value;code={basic:`<p-iftalabel>
    <p-iconfield>
        <p-inputicon class="pi pi-user" />
        <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    </p-iconfield>
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-iconfield>
            <p-inputicon class="pi pi-user" />
            <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
        </p-iconfield>
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'iconfield-ifta-label-demo',
    templateUrl: './iconfield-ifta-label-demo.html',
    standalone: true,
    imports: [InputIconModule, IconFieldModule, InputTextModule, IftaLabelModule, FormsModule]
})
export class IconFieldIftaLabelDemo {
  value: string | undefined;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["ifta-label-doc"]],standalone:!1,decls:14,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"pi","pi-user"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","iconfield-ifta-label-demo",3,"code"]],template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"IftaLabel is used to create infield top aligned labels. Visit "),e(3,"a",0),l(4,"IftaLabel"),i(),l(5," documentation for more information."),i()(),e(6,"div",1)(7,"p-iftalabel")(8,"p-iconfield"),a(9,"p-inputicon",2),e(10,"input",3),v("ngModelChange",function(p){return g(n.value,p)||(n.value=p),p}),i()(),e(11,"label",4),l(12,"Username"),i()()(),a(13,"app-code",5)),o&2&&(r(10),f("ngModel",n.value),r(3),m("code",n.code))},dependencies:[T,u,s,b,L,M,x,y,S,G],encapsulation:2})}return t})();var ee=(()=>{class t{code={typescript:`import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["icon-field-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&a(0,"app-code",0),o&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return t})();var te=(()=>{class t{value1=null;value2=null;value3=null;code={basic:`<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
</p-iconfield>

<p-iconfield>
    <input pInputText [(ngModel)]="value2" placeholder="Normal" />
    <p-inputicon class="pi pi-user" />
</p-iconfield>

<p-iconfield>
    <p-inputicon class="pi pi-lock" />
    <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
    <p-inputicon class="pi pi-spin pi-spinner" />
</p-iconfield>`,html:`<div class="card flex flex-col items-center gap-4">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
    </p-iconfield>

    <p-iconfield>
        <input pInputText [(ngModel)]="value2" placeholder="Normal" />
        <p-inputicon class="pi pi-user" />
    </p-iconfield>

    <p-iconfield>
        <p-inputicon class="pi pi-lock" />
        <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
        <p-inputicon class="pi pi-spin pi-spinner" />
    </p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-sizes-demo',
    templateUrl: './iconfield-sizes-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconfieldSizesDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["sizes-doc"]],standalone:!1,decls:15,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],[1,"pi","pi-search"],["pInputText","","placeholder","Small","pSize","small",3,"ngModelChange","ngModel"],["pInputText","","placeholder","Normal",3,"ngModelChange","ngModel"],[1,"pi","pi-user"],[1,"pi","pi-lock"],["pInputText","","placeholder","Large","pSize","large",3,"ngModelChange","ngModel"],[1,"pi","pi-spin","pi-spinner"],["selector","iconfield-sizes-demo",3,"code"]],template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"IconField is compatible with the pSize setting of the input field."),i()(),e(3,"div",0)(4,"p-iconfield"),a(5,"p-inputicon",1),e(6,"input",2),v("ngModelChange",function(p){return g(n.value1,p)||(n.value1=p),p}),i()(),e(7,"p-iconfield")(8,"input",3),v("ngModelChange",function(p){return g(n.value2,p)||(n.value2=p),p}),i(),a(9,"p-inputicon",4),i(),e(10,"p-iconfield"),a(11,"p-inputicon",5),e(12,"input",6),v("ngModelChange",function(p){return g(n.value3,p)||(n.value3=p),p}),i(),a(13,"p-inputicon",7),i()(),a(14,"app-code",8)),o&2&&(r(6),f("ngModel",n.value1),r(2),f("ngModel",n.value2),r(4),f("ngModel",n.value3),r(2),m("code",n.code))},dependencies:[u,s,b,L,M,x,y,S],encapsulation:2})}return t})();var ie=(()=>{class t{code={basic:`<p-iconfield iconPosition="left">
    <p-inputicon>
        <svg width="20" height="20" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </p-inputicon>
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>`,html:`<div class="card flex justify-center">
    <p-iconfield iconPosition="left">
    <p-inputicon>
        <svg width="14" height="16" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </p-inputicon>
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-template-demo',
    templateUrl: './iconfield-template-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconFieldTemplateDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["template-doc"]],standalone:!1,decls:27,vars:1,consts:[[1,"card","flex","justify-center"],["iconPosition","left"],["width","14","height","16","viewBox","0 0 35 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["type","text","pInputText","","placeholder","Search"],["selector","iconfield-template-demo",3,"code"]],template:function(o,n){o&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"An eye icon is displayed by default when the image is hovered in preview mode. Use the "),e(3,"i"),l(4,"indicator"),i(),l(5," template for custom content."),i()(),e(6,"div",0)(7,"p-iconfield",1)(8,"p-inputicon"),k(),e(9,"svg",2),a(10,"path",3),e(11,"mask",4),a(12,"path",5),i(),e(13,"g",6),a(14,"path",7),i(),a(15,"path",8)(16,"path",9)(17,"path",10)(18,"path",11)(19,"path",12)(20,"path",13)(21,"path",14)(22,"path",15)(23,"path",16)(24,"path",17),i()(),Z(),a(25,"input",18),i()(),a(26,"app-code",19)),o&2&&(r(26),m("code",n.code))},dependencies:[u,s,b,L,M],encapsulation:2})}return t})();var oe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=A({type:t});static \u0275inj=E({imports:[H,W,j,V,U,N,P,B,q,K,V]})}return t})();var ae=()=>["IconField","InputIcon"],ne=(()=>{class t{docs=[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:Q},{id:"template",label:"Template",component:ie},{id:"floatlabel",label:"Float Label",component:Y},{id:"iftalabel",label:"Ifta Label",component:$},{id:"sizes",label:"Sizes",component:te},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular IconField Component","header","IconField","description","IconField wraps an input and an icon.","themeDocs","iconfield",3,"docs","apiDocs"]],template:function(o,n){o&1&&a(0,"app-doc",0),o&2&&m("docs",n.docs)("apiDocs",z(2,ae))},dependencies:[oe,O],encapsulation:2})}return t})();var tt=[{path:"",component:ne}];export{tt as default};
