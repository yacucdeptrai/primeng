import './polyfills.server.mjs';
import{a as u,b as F}from"./chunk-4MUXLMQS.mjs";import{a as M,b as T}from"./chunk-BVKBGFRF.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as s,d as A,e as x}from"./chunk-HZSAMTDM.mjs";import{a as p,b as q}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as C}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as E}from"./chunk-RUZVPFSZ.mjs";import{Bb as r,Cb as t,Db as i,Dc as S,Eb as m,O as v,Sa as c,ec as e,gb as l,hb as h,mb as y,pc as D}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var w=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["fieldset-accessibility-doc"]],standalone:!1,decls:82,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,d){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Fieldset component uses the semantic "),t(6,"i"),e(7,"fieldset"),i(),e(8," element. When toggleable option is enabled, a clickable element with "),t(9,"i"),e(10,"button"),i(),e(11," role is included inside the "),t(12,"i"),e(13,"legend"),i(),e(14," element, this button has "),t(15,"i"),e(16,"aria-controls"),i(),e(17," to define the id of the content section along with "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," for the visibility state. The value to read the button defaults to the value of the "),t(21,"i"),e(22,"legend"),i(),e(23," property and can be customized by defining an "),t(24,"i"),e(25,"aria-label"),i(),e(26," or "),t(27,"i"),e(28,"aria-labelledby"),i(),e(29," via the "),t(30,"i"),e(31,"toggleButtonProps"),i(),e(32," property. "),i(),t(33,"p"),e(34,"The content uses "),t(35,"i"),e(36,"region"),i(),e(37,", defines an id that matches the "),t(38,"i"),e(39,"aria-controls"),i(),e(40," of the content toggle button and "),t(41,"i"),e(42,"aria-labelledby"),i(),e(43," referring to the id of the header."),i(),t(44,"h3"),e(45,"Content Toggle Button Keyboard Support"),i(),t(46,"div",0)(47,"table",1)(48,"thead")(49,"tr")(50,"th"),e(51,"Key"),i(),t(52,"th"),e(53,"Function"),i()()(),t(54,"tbody")(55,"tr")(56,"td")(57,"i"),e(58,"tab"),i()(),t(59,"td"),e(60,"Moves focus to the next the focusable element in the page tab sequence."),i()(),t(61,"tr")(62,"td")(63,"i"),e(64,"shift"),i(),e(65," + "),t(66,"i"),e(67,"tab"),i()(),t(68,"td"),e(69,"Moves focus to the previous the focusable element in the page tab sequence."),i()(),t(70,"tr")(71,"td")(72,"i"),e(73,"enter"),i()(),t(74,"td"),e(75,"Toggles the visibility of the content."),i()(),t(76,"tr")(77,"td")(78,"i"),e(79,"space"),i()(),t(80,"td"),e(81,"Toggles the visibility of the content."),i()()()()()()())},dependencies:[s],encapsulation:2})}return o})();var U=(()=>{class o{code={basic:`<p-fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card flex justify-center">
    <p-fieldset legend="Header">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'fieldset-basic-demo',
    templateUrl: './fieldset-basic-demo.html',
    standalone: true,
    imports: [FieldsetModule]
})
export class FieldsetBasicDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["fieldset-basic-demo"]],standalone:!1,decls:11,vars:1,consts:[[1,"card","flex","justify-center"],["legend","Header"],[1,"m-0"],["selector","fieldset-basic-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A simple Fieldset is created with a "),t(3,"i"),e(4,"legend"),i(),e(5," property along with the content as children."),i()(),t(6,"div",0)(7,"p-fieldset",1)(8,"p",2),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(10,"app-code",3)),n&2&&(c(10),r("code",d.code))},dependencies:[p,s,u],encapsulation:2})}return o})();var B=(()=>{class o{code={typescript:"import { FieldsetModule } from 'primeng/fieldset';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["fieldset-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,d){n&1&&m(0,"app-code",0),n&2&&r("code",d.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return o})();function k(o,N){o&1&&(t(0,"div",4),m(1,"p-avatar",5),t(2,"span",6),e(3,"Amy Elsner"),i()())}var H=(()=>{class o{code={basic:`<p-fieldset>
    <ng-template #header>
        <div class="flex items-center gap-2 px-2">
            <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card">
<p-fieldset>
<ng-template #header>
    <div class="flex items-center gap-2 px-2">
        <p-avatar
            image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
            shape="circle" />
        <span class="font-bold">Amy Elsner</span>
    </div>
</ng-template>
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'fieldset-template-demo',
    templateUrl: './fieldset-template-demo.html',
    standalone: true,
    imports: [FieldsetModule, AvatarModule]
})
export class FieldsetTemplateDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["fieldset-template-demo"]],standalone:!1,decls:10,vars:1,consts:[["header",""],[1,"card"],[1,"m-0"],["selector","fieldset-template-demo",3,"code"],[1,"flex","items-center","gap-2","px-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Header section can also be defined with custom content instead of primitive values."),i()(),t(3,"div",1)(4,"p-fieldset"),y(5,k,4,0,"ng-template",null,0,S),t(7,"p",2),e(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(9,"app-code",3)),n&2&&(c(9),r("code",d.code))},dependencies:[p,s,u,M],encapsulation:2})}return o})();var j=(()=>{class o{code={basic:`<p-fieldset legend="Header" [toggleable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card flex justify-center">
    <p-fieldset legend="Header" [toggleable]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'fieldset-toggleable-demo',
    templateUrl: './fieldset-toggleable-demo.html',
    standalone: true,
    imports: [FieldsetModule]
})
export class FieldsetToggleableDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["fieldset-toggleable-demo"]],standalone:!1,decls:11,vars:2,consts:[[1,"card","flex","justify-center"],["legend","Header",3,"toggleable"],["selector","fieldset-toggleable-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Content of the fieldset can be expanded and collapsed using "),t(3,"i"),e(4,"toggleable"),i(),e(5," option, default state is defined with collapsed option."),i()(),t(6,"div",0)(7,"p-fieldset",1)(8,"p"),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(10,"app-code",2)),n&2&&(c(7),r("toggleable",!0),c(3),r("code",d.code))},dependencies:[p,s,u],encapsulation:2})}return o})();var I=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=h({type:o});static \u0275inj=v({imports:[E,q,x,F,C,T,x]})}return o})();var R=()=>["Fieldset"],_=(()=>{class o{docs=[{id:"import",label:"Import",component:B},{id:"basic",label:"Basic",component:U},{id:"toggleable",label:"Toggleable",component:j},{id:"template",label:"Template",component:H},{id:"accessibility",label:"Accessibility",component:w}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Fieldset Component","header","Fieldset","description","Fieldset is a grouping component with a content toggle feature.","themeDocs","fieldset",3,"docs","apiDocs"]],template:function(n,d){n&1&&m(0,"app-doc",0),n&2&&r("docs",d.docs)("apiDocs",D(2,R))},dependencies:[I,A],encapsulation:2})}return o})();var Se=[{path:"",component:_}];export{Se as default};
