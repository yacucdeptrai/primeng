import{a as u}from"./chunk-MENTEOEF.js";import{a as F,b as U}from"./chunk-GCF7VN5N.js";import{a as L,b as I}from"./chunk-RPICNBEK.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as s,d as H,e as b}from"./chunk-I6RUY6VJ.js";import{a as d,b as j}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as k,ba as B}from"./chunk-DEL7GGHP.js";import{i as P}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as A}from"./chunk-O4W5DSIC.js";import{Ab as r,Hb as M,Mb as T,O as y,Ob as q,Qa as c,X as D,Xb as _,Y as E,ac as e,eb as m,fb as S,kb as C,lc as w,xb as l,yb as t,zb as i,zc as g}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var R=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["panel-accessibility-doc"]],standalone:!1,decls:73,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,p){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Toggleable panels use a content toggle button at the header that has "),t(6,"i"),e(7,"aria-controls"),i(),e(8," to define the id of the content section along with "),t(9,"i"),e(10,"aria-expanded"),i(),e(11," for the visibility state. The value to read the button defaults to the value of the "),t(12,"i"),e(13,"header"),i(),e(14," property and can be customized by defining an "),t(15,"i"),e(16,"aria-label"),i(),e(17," or "),t(18,"i"),e(19,"aria-labelledby"),i(),e(20," via the "),t(21,"i"),e(22,"toggleButtonProps"),i(),e(23," property. "),i(),t(24,"p"),e(25,"The content uses "),t(26,"i"),e(27,"region"),i(),e(28,", defines an id that matches the "),t(29,"i"),e(30,"aria-controls"),i(),e(31," of the content toggle button and "),t(32,"i"),e(33,"aria-labelledby"),i(),e(34," referring to the id of the header."),i(),t(35,"h3"),e(36,"Content Toggle Button Keyboard Support"),i(),t(37,"div",0)(38,"table",1)(39,"thead")(40,"tr")(41,"th"),e(42,"Key"),i(),t(43,"th"),e(44,"Function"),i()()(),t(45,"tbody")(46,"tr")(47,"td")(48,"i"),e(49,"tab"),i()(),t(50,"td"),e(51,"Moves focus to the next the focusable element in the page tab sequence."),i()(),t(52,"tr")(53,"td")(54,"i"),e(55,"shift"),i(),e(56," + "),t(57,"i"),e(58,"tab"),i()(),t(59,"td"),e(60,"Moves focus to the previous the focusable element in the page tab sequence."),i()(),t(61,"tr")(62,"td")(63,"i"),e(64,"enter"),i()(),t(65,"td"),e(66,"Toggles the visibility of the content."),i()(),t(67,"tr")(68,"td")(69,"i"),e(70,"space"),i()(),t(71,"td"),e(72,"Toggles the visibility of the content."),i()()()()()()())},dependencies:[s],encapsulation:2})}return n})();var N=(()=>{class n{code={basic:`<p-panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>`,html:`<div class="card flex justify-center">
    <p-panel header="Header">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-panel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'panel-basic-demo',
    templateUrl: './panel-basic-demo.html',
    standalone: true,
    imports: [PanelModule]
})
export class PanelBasicDemo {}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["basic-doc"]],standalone:!1,decls:11,vars:1,consts:[[1,"card","flex","justify-center"],["header","Header"],[1,"m-0"],["selector","panel-basic-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A simple Panel is created with a "),t(3,"i"),e(4,"header"),i(),e(5," property along with the content as children."),i()(),t(6,"div",0)(7,"p-panel",1)(8,"p",2),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),r(10,"app-code",3)),o&2&&(c(10),l("code",p.code))},dependencies:[d,s,u],encapsulation:2})}return n})();var V=(()=>{class n{code={typescript:"import { PanelModule } from 'primeng/panel';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["panel-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,p){o&1&&r(0,"app-code",0),o&2&&l("code",p.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2})}return n})();function Q(n,h){n&1&&(t(0,"div",8),r(1,"p-avatar",9),t(2,"span",10),e(3,"Amy Elsner"),i()())}function W(n,h){n&1&&(t(0,"div",11)(1,"div",8),r(2,"p-button",12)(3,"p-button",13),i(),t(4,"span",14),e(5,"Updated 2 hours ago"),i()())}function X(n,h){if(n&1){let a=M();t(0,"p-button",15),T("click",function(p){D(a);let J=_(2);return E(J.toggle(p))}),i(),r(1,"p-menu",16,3)}if(n&2){let a=q();c(),l("model",a.items)("popup",!0)}}var z=(()=>{class n{items=[];ngOnInit(){this.items=[{label:"Refresh",icon:"pi pi-refresh"},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Delete",icon:"pi pi-times"}]}code={basic:`<p-panel [toggleable]="true">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <ng-template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <p-button icon="pi pi-user" rounded text></p-button>
                <p-button icon="pi pi-bookmark" severity="secondary" rounded text></p-button>
            </div>
            <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
        </div>
    </ng-template>
    <ng-template #icons>
        <p-button icon="pi pi-cog" severity="secondary" rounded text (click)="menu.toggle($event)" />
        <p-menu #menu id="config_menu" [model]="items" [popup]="true" />
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-panel>`,html:`<div class="card">
    <p-panel [toggleable]="true">
        <ng-template #header>
            <div class="flex items-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
        </ng-template>
        <ng-template #footer>
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center gap-2">
                    <p-button icon="pi pi-user" rounded text></p-button>
                    <p-button icon="pi pi-bookmark" severity="secondary" rounded text></p-button>
                </div>
                <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
            </div>
        </ng-template>
        <ng-template #icons>
            <p-button icon="pi pi-cog" severity="secondary" rounded text (click)="menu.toggle($event)" />
            <p-menu #menu id="config_menu" [model]="items" [popup]="true" />
        </ng-template>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-panel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'panel-template-demo',
    templateUrl: './panel-template-demo.html',
    standalone: true,
    imports: [PanelModule, AvatarModule, ButtonModule, MenuModule]
})
export class PanelTemplateDemo implements OnInit {
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["template-doc"]],standalone:!1,decls:20,vars:2,consts:[["header",""],["footer",""],["icons",""],["menu",""],[1,"card"],[3,"toggleable"],[1,"m-0"],["selector","panel-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["image","https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png","shape","circle"],[1,"font-bold"],[1,"flex","flex-wrap","items-center","justify-between","gap-4"],["icon","pi pi-user","rounded","","text",""],["icon","pi pi-bookmark","severity","secondary","rounded","","text",""],[1,"text-surface-500","dark:text-surface-400"],["icon","pi pi-cog","severity","secondary","rounded","","text","",3,"click"],["id","config_menu",3,"model","popup"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Header and Footers sections can be customized using "),t(3,"i"),e(4,"header"),i(),e(5," and "),t(6,"i"),e(7,"footer"),i(),e(8," templates."),i()(),t(9,"div",4)(10,"p-panel",5),C(11,Q,4,0,"ng-template",null,0,g)(13,W,6,0,"ng-template",null,1,g)(15,X,3,2,"ng-template",null,2,g),t(17,"p",6),e(18," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),r(19,"app-code",7)),o&2&&(c(10),l("toggleable",!0),c(9),l("code",p.code))},dependencies:[d,s,u,L,k,F],encapsulation:2})}return n})();var K=(()=>{class n{code={basic:`<p-panel header="Header" [toggleable]="true">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>`,html:`<div class="card flex justify-center">
    <p-panel header="Header" [toggleable]="true">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-panel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'panel-toggleable-demo',
    templateUrl: './panel-toggleable-demo.html',
    standalone: true,
    imports: [PanelModule]
})
export class PanelToggleableDemo {}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["toggleable-doc"]],standalone:!1,decls:11,vars:2,consts:[[1,"card","flex","justify-center"],["header","Header",3,"toggleable"],[1,"m-0"],["selector","panel-toggleable-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Content of the panel can be expanded and collapsed using "),t(3,"i"),e(4,"toggleable"),i(),e(5,' option, default state is defined with collapsed option. By default, toggle icon is used to toggle the contents whereas setting toggler to "header" enables clicking anywhere in the header to trigger a toggle. '),i()(),t(6,"div",0)(7,"p-panel",1)(8,"p",2),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),r(10,"app-code",3)),o&2&&(c(7),l("toggleable",!0),c(3),l("code",p.code))},dependencies:[d,s,u],encapsulation:2})}return n})();var $=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=S({type:n});static \u0275inj=y({imports:[A,j,b,u,P,I,B,U,b]})}return n})();var Y=()=>["Panel"],G=(()=>{class n{docs=[{id:"import",label:"Import",component:V},{id:"basic",label:"Basic",component:N},{id:"toggleable",label:"Toggleable",component:K},{id:"template",label:"Template",component:z},{id:"accessibility",label:"Accessibility",component:R}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Panel Component","header","Panel","description","Panel is a container component with an optional content toggle feature.","themeDocs","panel",3,"docs","apiDocs"]],template:function(o,p){o&1&&r(0,"app-doc",0),o&2&&l("docs",p.docs)("apiDocs",w(2,Y))},dependencies:[$,H],encapsulation:2})}return n})();var je=[{path:"",component:G}];export{je as default};
