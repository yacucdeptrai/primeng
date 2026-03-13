import{a as s}from"./chunk-UCH3V5DN.js";import{a as f,d as E,e as b}from"./chunk-I6RUY6VJ.js";import{a as d,b as A}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as S}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as D}from"./chunk-O4W5DSIC.js";import{Ab as p,O as v,Qa as l,ac as e,eb as r,fb as x,lc as C,xb as n,yb as o,zb as a}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var M=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-accessibility-doc"]],standalone:!1,decls:45,vars:0,consts:[[1,"doc-section-description"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,c){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),e(4,"Screen Reader"),a(),o(5,"p"),e(6," Chip uses the "),o(7,"i"),e(8,"label"),a(),e(9," property as the default "),o(10,"i"),e(11,"aria-label"),a(),e(12,", since any attribute is passed to the root element "),o(13,"i"),e(14,"aria-labelledby"),a(),e(15," or "),o(16,"i"),e(17,"aria-label"),a(),e(18," can be used to override the default behavior. Removable chips have a "),o(19,"i"),e(20,"tabindex"),a(),e(21," and focusable with the tab key. "),a(),o(22,"h3"),e(23,"Keyboard Support"),a(),o(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),e(29,"Key"),a(),o(30,"th"),e(31,"Function"),a()()(),o(32,"tbody")(33,"tr")(34,"td")(35,"i"),e(36,"backspace"),a()(),o(37,"td"),e(38,"Hides removable."),a()(),o(39,"tr")(40,"td")(41,"i"),e(42,"enter"),a()(),o(43,"td"),e(44,"Hides removable."),a()()()()()()()())},dependencies:[f],encapsulation:2})}return t})();var w=(()=>{class t{code={basic:`<p-chip label="Action" />
<p-chip label="Comedy" />
<p-chip label="Mystery" />
<p-chip label="Thriller" [removable]="true" />`,html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Action" />
    <p-chip label="Comedy" />
    <p-chip label="Mystery" />
    <p-chip label="Thriller" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-basic-demo',
    templateUrl: './chip-basic-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipBasicDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-basic-demo"]],standalone:!1,decls:18,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Action"],["label","Comedy"],["label","Mystery"],["label","Thriller",3,"removable"],["selector","chip-basic-demo",3,"code"]],template:function(i,c){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," A basic chip with a text is created with the "),o(3,"i"),e(4,"label"),a(),e(5," property. In addition when "),o(6,"i"),e(7,"removable"),a(),e(8," is added, a delete icon is displayed to remove a chip, the optional "),o(9,"i"),e(10,"onRemove"),a(),e(11," event is available to get notified when a chip is hidden. "),a()(),o(12,"div",0),p(13,"p-chip",1)(14,"p-chip",2)(15,"p-chip",3)(16,"p-chip",4),a(),p(17,"app-code",5)),i&2&&(l(16),n("removable",!0),l(),n("code",c.code))},dependencies:[d,f,s],encapsulation:2})}return t})();var T=(()=>{class t{code={basic:'<p-chip label="Apple" icon="pi pi-apple" />',html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Apple" icon="pi pi-apple" />
    <p-chip label="Facebook" icon="pi pi-facebook" />
    <p-chip label="Google" icon="pi pi-google" />
    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-icon-demo',
    templateUrl: './chip-icon-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipIconDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-icon-demo"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Apple","icon","pi pi-apple"],["label","Facebook","icon","pi pi-facebook"],["label","Google","icon","pi pi-google"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["selector","chip-icon-demo",3,"code"]],template:function(i,c){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"A font icon next to the label can be displayed with the "),o(3,"i"),e(4,"icon"),a(),e(5," property."),a()(),o(6,"div",0),p(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),a(),p(11,"app-code",5)),i&2&&(l(10),n("removable",!0),l(),n("code",c.code))},dependencies:[d,f,s],encapsulation:2})}return t})();var I=(()=>{class t{code={basic:`<p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
<p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
<p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
<p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />`,html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
    <p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
    <p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
    <p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-image-demo',
    templateUrl: './chip-image-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipImageDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-image-demo"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Amy Elsner","image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","alt","Avatar image"],["label","Asiya Javayant","image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","alt","Avatar image"],["label","Onyama Limba","image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","alt","Avatar image"],["label","Xuxue Feng","image","https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","alt","Avatar image",3,"removable"],["selector","chip-image-demo",3,"code"]],template:function(i,c){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"The "),o(3,"i"),e(4,"image"),a(),e(5," property is used to display an image like an avatar."),a()(),o(6,"div",0),p(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),a(),p(11,"app-code",5)),i&2&&(l(10),n("removable",!0),l(),n("code",c.code))},dependencies:[d,f,s],encapsulation:2})}return t})();var F=(()=>{class t{code={typescript:"import { ChipModule } from 'primeng/chip';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,c){i&1&&p(0,"app-code",0),i&2&&n("code",c.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2})}return t})();var j=(()=>{class t{code={basic:`<p-chip class="!py-0 !pl-0 !pr-4">
    <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
        P
    </span>
    <span class="ml-2 font-medium">
        PRIME
    </span>
</p-chip>`,html:`<div class="card">
    <p-chip class="!py-0 !pl-0 !pr-4">
        <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
            P
        </span>
        <span class="ml-2 font-medium">
            PRIME
        </span>
    </p-chip>
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-template-demo',
    templateUrl: './chip-template-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipTemplateDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["chip-template-demo"]],standalone:!1,decls:10,vars:1,consts:[[1,"card"],[1,"!py-0","!pl-0","!pr-4"],[1,"bg-primary","text-primary-contrast","rounded-full","w-8","h-8","flex","items-center","justify-center"],[1,"ml-2","font-medium"],["selector","chip-template-demo",3,"code"]],template:function(i,c){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Content can easily be customized with the dynamic content instead of using the built-in modes."),a()(),o(3,"div",0)(4,"p-chip",1)(5,"span",2),e(6,"P"),a(),o(7,"span",3),e(8,"PRIME"),a()()(),p(9,"app-code",4)),i&2&&(l(9),n("code",c.code))},dependencies:[d,f,s],encapsulation:2})}return t})();var R=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=x({type:t});static \u0275inj=v({imports:[D,S,A,b,s,b]})}return t})();var B=()=>["Chip"],k=(()=>{class t{docs=[{id:"import",label:"Import",component:F},{id:"basic",label:"Basic",component:w},{id:"icon",label:"Icon",component:T},{id:"image",label:"Image",component:I},{id:"template",label:"Template",component:j},{id:"accessibility",label:"Accessibility",component:M}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Chip Component","header","Chip","description","Chip represents entities using icons, labels and images.","themeDocs","chip",3,"docs","apiDocs"]],template:function(i,c){i&1&&p(0,"app-doc",0),i&2&&n("docs",c.docs)("apiDocs",C(2,B))},dependencies:[R,E],encapsulation:2})}return t})();var ye=[{path:"",component:k}];export{ye as default};
