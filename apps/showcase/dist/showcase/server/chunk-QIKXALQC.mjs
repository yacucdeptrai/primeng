import './polyfills.server.mjs';
import{a as B,b as I}from"./chunk-PCJYNWR2.mjs";import{a as h,b as k}from"./chunk-Q224N2XA.mjs";import{a as v,b as T}from"./chunk-BVKBGFRF.mjs";import{a as p,d as F,e as C}from"./chunk-HZSAMTDM.mjs";import{a as m,b as j}from"./chunk-EK6YV52O.mjs";import{s as E,v as w}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{g as M}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as z}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as S}from"./chunk-RUZVPFSZ.mjs";import{Bb as d,Cb as i,Db as e,Eb as o,O as A,Sa as c,cc as b,ec as a,gb as l,hb as D,pc as y}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var G=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-accessibility-doc"]],standalone:!1,decls:21,vars:0,template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),e(),i(3,"p"),a(4," Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like "),i(5,"i"),a(6,"img"),e(),a(7," along with "),i(8,"i"),a(9,"aria-labelledby"),e(),a(10," or "),i(11,"i"),a(12,"aria-label"),e(),a(13," to describe the component. In case avatars need to be tabbable, "),i(14,"i"),a(15,"tabIndex"),e(),a(16," can be added as well to implement custom key handlers. "),e(),i(17,"h3"),a(18,"Keyboard Support"),e(),i(19,"p"),a(20,"Component does not include any interactive elements."),e()())},dependencies:[p],encapsulation:2})}return t})();var U=(()=>{class t{code={basic:`<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
<p-avatar label="+2" shape="circle" size="large" />`,html:`<div class="card flex justify-center">
    <p-avatar-group>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
        <p-avatar label="+2" shape="circle" size="large" />
    </p-avatar-group>
</div>`,typescript:`import { Component } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';

@Component({
    selector: 'avatar-group-demo',
    templateUrl: './avatar-group-demo.html',
    standalone: true,
    imports: [Avatar, AvatarGroup]
})
export class AvatarGroupDemo {}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-group-demo"]],standalone:!1,decls:15,vars:1,consts:[[1,"card","flex","justify-center"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png","size","large","shape","circle"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["selector","avatar-group-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),a(2,"Grouping is available by wrapping multiple Avatar components inside an "),i(3,"i"),a(4,"AvatarGroup"),e(),a(5,"."),e()(),i(6,"div",0)(7,"p-avatar-group"),o(8,"p-avatar",1)(9,"p-avatar",2)(10,"p-avatar",3)(11,"p-avatar",4)(12,"p-avatar",5)(13,"p-avatar",6),e()(),o(14,"app-code",7)),r&2&&(c(14),d("code",s.code))},dependencies:[m,p,v,B],encapsulation:2})}return t})();var P=(()=>{class t{code={basic:`<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar icon="pi pi-user" size="xlarge" />
</p-overlay-badge>`,html:`<div class="card">
    <div class="flex flex-wrap gap-8">
        <div class="flex-auto">
            <h5>Icon</h5>
            <p-avatar icon="pi pi-user" class="mr-2" size="xlarge" />
            <p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
            <p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <p-avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
            <p-avatar
                icon="pi pi-user"
                class="mr-2"
                size="large"
                style="background-color: #ece9fc; color: #2a1261"
                shape="circle"
            />
            <p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <p-overlay-badge value="4" severity="danger" class="inline-flex">
                <p-avatar icon="pi pi-user" size="xlarge" />
            </p-overlay-badge>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'avatar-icon-demo',
    templateUrl: './avatar-icon-demo.html',
    standalone: true,
    imports: [AvatarModule, OverlayBadgeModule]
})
export class AvatarIconDemo {}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-icon-demo"]],standalone:!1,decls:26,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap","gap-8"],[1,"flex-auto"],["icon","pi pi-user","size","xlarge",1,"mr-2"],["icon","pi pi-user","size","large",1,"mr-2",2,"background-color","#ece9fc","color","#2a1261"],["icon","pi pi-user",2,"background-color","#dee9fc","color","#1a2551"],["icon","pi pi-user","size","xlarge","shape","circle",1,"mr-2"],["icon","pi pi-user","size","large","shape","circle",1,"mr-2",2,"background-color","#ece9fc","color","#2a1261"],["icon","pi pi-user","shape","circle",2,"background-color","#dee9fc","color","#1a2551"],["value","4","severity","danger",1,"inline-flex"],["icon","pi pi-user","size","xlarge"],["selector","avatar-icon-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),a(2,"A font icon is displayed as an Avatar with the "),i(3,"i"),a(4,"icon"),e(),a(5," property."),e()(),i(6,"div",0)(7,"div",1)(8,"div",2)(9,"h5"),a(10,"Icon"),e(),o(11,"p-avatar",3)(12,"p-avatar",4)(13,"p-avatar",5),e(),i(14,"div",2)(15,"h5"),a(16,"Circle"),e(),o(17,"p-avatar",6)(18,"p-avatar",7)(19,"p-avatar",8),e(),i(20,"div",2)(21,"h5"),a(22,"Badge"),e(),i(23,"p-overlay-badge",9),o(24,"p-avatar",10),e()()()(),o(25,"app-code",11)),r&2&&(c(25),d("code",s.code))},dependencies:[m,p,v,h],encapsulation:2})}return t})();var O=(()=>{class t{code={basic:`<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="xlarge" />
</p-overlay-badge>

<p-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />`,html:`<div class="card">
    <div class="flex flex-wrap gap-8">
        <div class="flex-auto">
            <h5>Image</h5>
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <p-overlay-badge value="4" severity="danger" class="inline-flex">
                <p-avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="xlarge" />
            </p-overlay-badge>
        </div>

        <div class="flex-auto">
            <h5>Gravatar</h5>
            <p-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'avatar-image-demo',
    templateUrl: './avatar-image-demo.html',
    standalone: true,
    imports: [AvatarModule, OverlayBadgeModule]
})
export class AvatarImageDemo {}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-image-demo"]],standalone:!1,decls:24,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap","gap-8"],[1,"flex-auto"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","size","xlarge","shape","circle",1,"mr-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","size","large","shape","circle",1,"mr-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","shape","circle"],["value","4","severity","danger",1,"inline-flex"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg","size","xlarge",1,"p-overlay-badge"],["image","https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp","size","xlarge",1,"flex","items-center","justify-center","mr-2"],["selector","avatar-image-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),a(2,"Use the "),i(3,"i"),a(4,"image"),e(),a(5," property to display an image as an Avatar."),e()(),i(6,"div",0)(7,"div",1)(8,"div",2)(9,"h5"),a(10,"Image"),e(),o(11,"p-avatar",3)(12,"p-avatar",4)(13,"p-avatar",5),e(),i(14,"div",2)(15,"h5"),a(16,"Badge"),e(),i(17,"p-overlay-badge",6),o(18,"p-avatar",7),e()(),i(19,"div",2)(20,"h5"),a(21,"Gravatar"),e(),o(22,"p-avatar",8),e()()(),o(23,"app-code",9)),r&2&&(c(23),d("code",s.code))},dependencies:[m,p,v,h],encapsulation:2})}return t})();var V=(()=>{class t{code={typescript:`import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,s){r&1&&o(0,"app-code",0),r&2&&d("code",s.code)("hideToggleCode",!0)},dependencies:[m],encapsulation:2})}return t})();var N=()=>({"background-color":"#ece9fc",color:"#2a1261"}),R=()=>({"background-color":"#dee9fc",color:"#1a2551"}),_=(()=>{class t{code={basic:`<p-avatar label="P" styleClass="mr-2" size="xlarge" />
<p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" />
<p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" />
<p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle" />
<p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" shape="circle" />
<p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar label="U" size="xlarge" />
</p-overlay-badge>`,html:`<div class="card">
    <div class="flex flex-wrap gap-8">
        <div class="flex-auto">
            <h5>Label</h5>
            <p-avatar label="P" styleClass="mr-2" size="xlarge" />
            <p-avatar label="V" styleClass="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" />
            <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" />
        </div>
        <div class="flex-auto">
            <h5>Circle</h5>
            <p-avatar label="P" styleClass="mr-2" size="xlarge" shape="circle" />
            <p-avatar
                label="V"
                styleClass="mr-2"
                size="large"
                [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }"
                shape="circle"
            />
            <p-avatar label="U" styleClass="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" shape="circle" />
        </div>
        <div class="flex-auto">
            <h5>Badge</h5>
            <p-overlay-badge value="4" severity="danger" class="inline-flex">
                <p-avatar label="U" size="xlarge" />
            </p-overlay-badge>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'avatar-label-demo',
    templateUrl: './avatar-label-demo.html',
    standalone: true,
    imports: [AvatarModule, OverlayBadgeModule]
})
export class AvatarLabelDemo {}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-label-demo"]],standalone:!1,decls:26,vars:13,consts:[[1,"card"],[1,"flex","flex-wrap","gap-8"],[1,"flex-auto"],["label","P","styleClass","mr-2","size","xlarge"],["label","V","styleClass","mr-2","size","large"],["label","U","styleClass","mr-2"],["label","P","styleClass","mr-2","size","xlarge","shape","circle"],["label","V","styleClass","mr-2","size","large","shape","circle"],["label","U","styleClass","mr-2","shape","circle"],["value","4","severity","danger",1,"inline-flex"],["label","U","size","xlarge"],["selector","avatar-label-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),a(2,"A letter Avatar is defined with the "),i(3,"i"),a(4,"label"),e(),a(5," property."),e()(),i(6,"div",0)(7,"div",1)(8,"div",2)(9,"h5"),a(10,"Label"),e(),o(11,"p-avatar",3)(12,"p-avatar",4)(13,"p-avatar",5),e(),i(14,"div",2)(15,"h5"),a(16,"Circle"),e(),o(17,"p-avatar",6)(18,"p-avatar",7)(19,"p-avatar",8),e(),i(20,"div",2)(21,"h5"),a(22,"Badge"),e(),i(23,"p-overlay-badge",9),o(24,"p-avatar",10),e()()()(),o(25,"app-code",11)),r&2&&(c(12),b(y(9,N)),c(),b(y(10,R)),c(5),b(y(11,N)),c(),b(y(12,R)),c(6),d("code",s.code))},dependencies:[m,p,v,h],encapsulation:2})}return t})();var q=(()=>{class t{code={basic:`<p-avatar label="P" shape="circle" />
<p-avatar label="T" />`,html:`<div class="card flex justify-center gap-2">
    <p-avatar label="P" shape="circle" />
    <p-avatar label="T" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Avatar } from 'primeng/avatar';

@Component({
    selector: 'avatar-shape-demo',
    templateUrl: './avatar-shape-demo.html',
    standalone: true,
    imports: [Avatar]
})
export class AvatarShapeDemo {}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["avatar-shape-demo"]],standalone:!1,decls:16,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["label","P","shape","circle"],["label","T"],["selector","avatar-shape-demo",3,"code"]],template:function(r,s){r&1&&(i(0,"app-docsectiontext")(1,"p"),a(2,"Avatar comes in two different styles specified with the "),i(3,"i"),a(4,"shape"),e(),a(5," property, "),i(6,"i"),a(7,"square"),e(),a(8," is the default and "),i(9,"i"),a(10,"circle"),e(),a(11," is the alternative."),e()(),i(12,"div",0),o(13,"p-avatar",1)(14,"p-avatar",2),e(),o(15,"app-code",3)),r&2&&(c(15),d("code",s.code))},dependencies:[m,p,v],encapsulation:2})}return t})();var K=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=D({type:t});static \u0275inj=A({imports:[S,z,j,w,E,C,T,I,M,k,C]})}return t})();var J=()=>["Avatar","AvatarGroup"],H=(()=>{class t{docs=[{id:"import",label:"Import",component:V},{id:"label",label:"Label",component:_},{id:"icon",label:"Icon",component:P},{id:"image",label:"Image",component:O},{id:"avatargroup",label:"AvatarGroup",component:U},{id:"shape",label:"Shape",component:q},{id:"accessibility",label:"Accessibility",component:G}];static \u0275fac=function(r){return new(r||t)};static \u0275cmp=l({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Avatar Component","header","Avatar","description","Avatar represents people using icons, labels and images.",3,"docs","apiDocs","themeDocs"]],template:function(r,s){r&1&&o(0,"app-doc",0),r&2&&d("docs",s.docs)("apiDocs",y(3,J))("themeDocs","Avatar")},dependencies:[K,F],encapsulation:2})}return t})();var aa=[{path:"",component:H}];export{aa as default};
