import './polyfills.server.mjs';
import{a as w,b as A}from"./chunk-Q224N2XA.mjs";import{a as m,d as j,e as x}from"./chunk-HZSAMTDM.mjs";import{a as s,b as T}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as M,ba as z,e as y,f as v,g as h}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as E}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as C}from"./chunk-RUZVPFSZ.mjs";import{Bb as p,Cb as o,Db as n,Eb as a,O as D,Sa as c,ec as i,gb as d,hb as S,pc as B}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var F=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-accessibility-doc"]],standalone:!1,decls:15,vars:0,template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),n(),o(3,"p"),i(4," Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, "),o(5,"i"),i(6,"aria-live"),n(),i(7," may be utilized as well. In case badges need to be tabbable, "),o(8,"i"),i(9,"tabIndex"),n(),i(10," can be added to implement custom key handlers. "),n(),o(11,"h3"),i(12,"Keyboard Support"),n(),o(13,"p"),i(14,"Component does not include any interactive elements."),n()())},dependencies:[m],encapsulation:2})}return e})();var O=(()=>{class e{code={basic:'<p-badge value="2" />',html:`<div class="card flex justify-center">
    <p-badge value="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-basic-demo',
    templateUrl: './badge-basic-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-basic-demo"]],standalone:!1,decls:9,vars:1,consts:[[1,"card","flex","justify-center"],["value","2"],["selector","badge-basic-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Content of the badge is specified using the "),o(3,"i"),i(4,"value"),n(),i(5," property."),n()(),o(6,"div",0),a(7,"p-badge",1),n(),a(8,"app-code",2)),t&2&&(c(8),p("code",l.code))},dependencies:[s,m,v],encapsulation:2})}return e})();var I=(()=>{class e{code={basic:'<p-button label="Emails" icon="pi pi-bell" label="Notifications" badge="2" />',html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-button label="Emails" badge="2" label="Notifications" icon="pi pi-bell" />
    <p-button label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined/>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'badge-button-demo',
    templateUrl: './badge-button-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class BadgeButtonDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-button-demo"]],standalone:!1,decls:7,vars:1,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Emails","icon","pi pi-bell","label","Notifications","badge","2"],["label","Inbox","icon","pi pi-inbox","badge","2","badgeSeverity","contrast","outlined",""],["selector","badge-button-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Buttons have built-in support for badges to display a badge inline."),n()(),o(3,"div",0),a(4,"p-button",1)(5,"p-button",2),n(),a(6,"app-code",3)),t&2&&(c(6),p("code",l.code))},dependencies:[s,m,M],encapsulation:2})}return e})();var U=(()=>{class e{code={basic:'<i class="pi pi-bell text-3xl" pBadge value="2"></i>',html:`<div class="card flex justify-center">
    <i class="pi pi-bell text-3xl" pBadge value="2"></i>
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-directive-demo',
    templateUrl: './badge-directive-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeDirectiveDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-directive-demo"]],standalone:!1,decls:9,vars:1,consts:[[1,"card","flex","justify-center"],["pBadge","","value","2",1,"pi","pi-bell","!text-3xl"],["selector","badge-directive-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Content of the badge is specified using the "),o(3,"i"),i(4,"value"),n(),i(5," property."),n()(),o(6,"div",0),a(7,"i",1),n(),a(8,"app-code",2)),t&2&&(c(8),p("code",l.code))},dependencies:[s,m,y],encapsulation:2})}return e})();var N=(()=>{class e{code={typescript:`import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&a(0,"app-code",0),t&2&&p("code",l.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var k=(()=>{class e{code={basic:`<p-overlaybadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem"></i>
</p-overlaybadge>`,html:`<div class="card flex flex-wrap justify-center gap-6">
    <p-overlaybadge value="2">
        <i class="pi pi-bell" style="font-size: 2rem"></i>
    </p-overlaybadge>
    <p-overlaybadge value="4" severity="danger">
        <i class="pi pi-calendar" style="font-size: 2rem"></i>
    </p-overlaybadge>
    <p-overlaybadge severity="danger">
        <i class="pi pi-envelope" style="font-size: 2rem"></i>
    </p-overlaybadge>
</div>`,typescript:`import { Component } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'badge-overlay-demo',
    templateUrl: './badge-overlay-demo.html',
    standalone: true,
    imports: [OverlayBadgeModule]
})
export class BadgeOverlayDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-overlay-demo"]],standalone:!1,decls:14,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-6"],["value","2"],[1,"pi","pi-bell",2,"font-size","2rem"],["value","4","severity","danger"],[1,"pi","pi-calendar",2,"font-size","2rem"],["severity","danger"],[1,"pi","pi-envelope",2,"font-size","2rem"],["selector","badge-overlay-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"A badge can be added to any element by encapsulating the content with the "),o(3,"i"),i(4,"OverlayBadge"),n(),i(5," component."),n()(),o(6,"div",0)(7,"p-overlaybadge",1),a(8,"i",2),n(),o(9,"p-overlaybadge",3),a(10,"i",4),n(),o(11,"p-overlaybadge",5),a(12,"i",6),n()(),a(13,"app-code",7)),t&2&&(c(13),p("code",l.code))},dependencies:[s,m,w],encapsulation:2})}return e})();var L=(()=>{class e{code={basic:'<p-badge [value]="2" severity="success" />',html:`<div class="card flex justify-center gap-2">
    <p-badge [value]="2" severity="success" />
    <p-badge [value]="9" severity="info" />
    <p-badge [value]="3" severity="warn" />
    <p-badge [value]="9" severity="danger" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-severity-demo',
    templateUrl: './badge-severity-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeSeverityDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-severity-demo"]],standalone:!1,decls:23,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["value","2"],["value","6","severity","secondary"],["value","8","severity","success"],["value","4","severity","info"],["value","9","severity","warn"],["value","3","severity","danger"],["value","5","severity","contrast"],["selector","badge-severity-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Severity defines the color of the badge, possible values are "),o(3,"i"),i(4,"success"),n(),i(5,", "),o(6,"i"),i(7,"info"),n(),i(8,", "),o(9,"i"),i(10,"warn"),n(),i(11," and "),o(12,"i"),i(13,"danger"),n()()(),o(14,"div",0),a(15,"p-badge",1)(16,"p-badge",2)(17,"p-badge",3)(18,"p-badge",4)(19,"p-badge",5)(20,"p-badge",6)(21,"p-badge",7),n(),a(22,"app-code",8)),t&2&&(c(22),p("code",l.code))},dependencies:[s,m,v],encapsulation:2})}return e})();var P=(()=>{class e{code={basic:'<p-badge value="8" badgeSize="xlarge" severity="success" />',html:`<div class="card flex justify-center gap-1">
        <p-badge value="8" badgeSize="xlarge" severity="success" />
        <p-badge value="6" badgeSize="large" severity="warn" />
        <p-badge value="4" badgeSize="small" severity="info" />
        <p-badge value="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-size-demo',
    templateUrl: './badge-size-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeSizeDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["badge-size-demo"]],standalone:!1,decls:21,vars:1,consts:[[1,"card","flex","justify-center","gap-1","items-end"],["value","8","badgeSize","xlarge","severity","success"],["value","6","badgeSize","large","severity","warn"],["value","4","severity","info"],["value","2","badgeSize","small"],["selector","badge-size-demo",3,"code"]],template:function(t,l){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Badge sizes are adjusted with the "),o(3,"i"),i(4,"badgeSize"),n(),i(5," property that accepts "),o(6,"i"),i(7,"small"),n(),i(8,", "),o(9,"i"),i(10,"large"),n(),i(11," and "),o(12,"i"),i(13,"xlarge"),n(),i(14," as the possible alternatives to the default size. Currently sizes only apply to component mode."),n()(),o(15,"div",0),a(16,"p-badge",1)(17,"p-badge",2)(18,"p-badge",3)(19,"p-badge",4),n(),a(20,"app-code",5)),t&2&&(c(20),p("code",l.code))},dependencies:[s,m,v],encapsulation:2})}return e})();var R=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=S({type:e});static \u0275inj=D({imports:[C,E,T,x,h,z,A,x]})}return e})();var K=()=>["Badge","BadgeDirective"],q=(()=>{class e{docs=[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:O},{id:"directive",label:"Directive",component:U},{id:"severity",label:"Severity",component:L},{id:"size",label:"Size",component:P},{id:"overlay",label:"Overlay",component:k},{id:"button",label:"Button",component:I},{id:"accessibility",label:"Accessibility",component:F}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Badge Component","header","Badge","description","Badge is a small status indicator for another element.","themeDocs","Badge",3,"docs","apiDocs"]],template:function(t,l){t&1&&a(0,"app-doc",0),t&2&&p("docs",l.docs)("apiDocs",B(2,K))},dependencies:[R,j],encapsulation:2})}return e})();var qe=[{path:"",component:q}];export{qe as default};
