import{a as m}from"./chunk-DZDZ3TKY.js";import{a as d,d as M,e as D}from"./chunk-I6RUY6VJ.js";import{a as u,b as w}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{ba as E}from"./chunk-DEL7GGHP.js";import{i as T}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as h}from"./chunk-O4W5DSIC.js";import{Ab as r,O as S,Qa as p,_b as b,ac as o,eb as s,fb as C,lc as y,xb as n,yb as i,zb as a}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var I=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["tag-accessibility-doc"]],standalone:!1,decls:16,vars:0,template:function(t,l){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),a(),i(4,"p"),o(5," Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,"),i(6,"i"),o(7,"aria-live"),a(),o(8," may be utilized as well. In case badges need to be tabbable, "),i(9,"i"),o(10,"tabIndex"),a(),o(11," can be added to implement custom key handlers. "),a(),i(12,"h3"),o(13,"Keyboard Support"),a(),i(14,"p"),o(15,"Component does not include any interactive elements."),a()()())},dependencies:[d],encapsulation:2})}return e})();var A=(()=>{class e{code={basic:'<p-tag value="New" />',html:`<div class="card flex justify-center">
    <p-tag value="New" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-basic-demo',
    templateUrl: './tag-basic-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:1,consts:[[1,"card","flex","justify-center"],["value","New"],["selector","tag-basic-demo",3,"code"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Label of the tag is defined with the "),i(3,"i"),o(4,"value"),a(),o(5," property."),a()(),i(6,"div",0),r(7,"p-tag",1),a(),r(8,"app-code",2)),t&2&&(p(8),n("code",l.code))},dependencies:[u,d,m],encapsulation:2})}return e})();var P=(()=>{class e{code={basic:`<p-tag icon="pi pi-user" value="Primary" />
<p-tag icon="pi pi-search" severity="secondary" value="Secondary" />
<p-tag icon="pi pi-check" severity="success" value="Success" />
<p-tag icon="pi pi-info-circle" severity="info" value="Info" />
<p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn" />
<p-tag icon="pi pi-times" severity="danger" value="Danger" />
<p-tag icon="pi pi-cog" severity="contrast" value="Contrast" />`,html:`<div class="card flex flex-wrap justify-center gap-2">
    <p-tag icon="pi pi-user" value="Primary" />
    <p-tag icon="pi pi-search" severity="secondary" value="Secondary" />
    <p-tag icon="pi pi-check" severity="success" value="Success" />
    <p-tag icon="pi pi-info-circle" severity="info" value="Info" />
    <p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn" />
    <p-tag icon="pi pi-times" severity="danger" value="Danger" />
    <p-tag icon="pi pi-cog" severity="contrast" value="Contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-icon-demo',
    templateUrl: './tag-icon-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagIconDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["icon-doc"]],standalone:!1,decls:15,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["icon","pi pi-user","value","Primary"],["icon","pi pi-search","severity","secondary","value","Secondary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["icon","pi pi-exclamation-triangle","severity","warn","value","Warn"],["icon","pi pi-times","severity","danger","value","Danger"],["icon","pi pi-cog","severity","contrast","value","Contrast"],["selector","tag-icon-demo",3,"code"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"A font icon next to the value can be displayed with the "),i(3,"i"),o(4,"icon"),a(),o(5," property."),a()(),i(6,"div",0),r(7,"p-tag",1)(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5)(12,"p-tag",6)(13,"p-tag",7),a(),r(14,"app-code",8)),t&2&&(p(14),n("code",l.code))},dependencies:[u,d,m],encapsulation:2})}return e})();var F=(()=>{class e{code={typescript:"import { TagModule } from 'primeng/tag';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["tag-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&r(0,"app-code",0),t&2&&n("code",l.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return e})();var j=(()=>{class e{code={basic:`<p-tag value="Primary" [rounded]="true" />
<p-tag severity="secondary" value="Secondary" [rounded]="true" />
<p-tag severity="success" value="Success" [rounded]="true" />
<p-tag severity="info" value="Info" [rounded]="true" />
<p-tag severity="warn" value="Warn" [rounded]="true" />
<p-tag severity="danger" value="Danger" [rounded]="true" />
<p-tag severity="contrast" value="Contrast" [rounded]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-tag value="Primary" [rounded]="true" />
    <p-tag severity="secondary" value="Secondary" [rounded]="true" />
    <p-tag severity="success" value="Success" [rounded]="true" />
    <p-tag severity="info" value="Info" [rounded]="true" />
    <p-tag severity="warn" value="Warn" [rounded]="true" />
    <p-tag severity="danger" value="Danger" [rounded]="true" />
    <p-tag severity="contrast" value="Contrast" [rounded]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-pill-demo',
    templateUrl: './tag-pill-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagPillDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["pill-doc"]],standalone:!1,decls:15,vars:8,consts:[[1,"card","flex","justify-center","gap-2"],["value","Primary",3,"rounded"],["severity","secondary","value","Secondary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warn","value","Warn",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["severity","contrast","value","Contrast",3,"rounded"],["selector","tag-pill-demo",3,"code"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Enabling "),i(3,"i"),o(4,"rounded"),a(),o(5,", displays a tag as a pill."),a()(),i(6,"div",0),r(7,"p-tag",1)(8,"p-tag",2)(9,"p-tag",3)(10,"p-tag",4)(11,"p-tag",5)(12,"p-tag",6)(13,"p-tag",7),a(),r(14,"app-code",8)),t&2&&(p(7),n("rounded",!0),p(),n("rounded",!0),p(),n("rounded",!0),p(),n("rounded",!0),p(),n("rounded",!0),p(),n("rounded",!0),p(),n("rounded",!0),p(),n("code",l.code))},dependencies:[u,d,m],encapsulation:2})}return e})();var k=(()=>{class e{code={basic:`<p-tag value="Primary" />
<p-tag severity="secondary" value="Secondary" />
<p-tag severity="success" value="Success" />
<p-tag severity="info" value="Info" />
<p-tag severity="warn" value="Warn" />
<p-tag severity="danger" value="Danger" />
<p-tag severity="contrast" value="Contrast" />`,html:`<div class="card flex justify-center gap-2">
    <p-tag value="Primary"/>
    <p-tag severity="secondary" value="Secondary"/>
    <p-tag severity="success" value="Success"/>
    <p-tag severity="info" value="Info"/>
    <p-tag severity="warn" value="Warn"/>
    <p-tag severity="danger" value="Danger"/>
    <p-tag severity="contrast" value="Contrast"/>
</div>`,typescript:`import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-severity-demo',
    templateUrl: './tag-severity-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagSeverityDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["severity-doc"]],standalone:!1,decls:24,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["value","Primary"],["severity","secondary","value","Secondary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warn","value","Warn"],["severity","danger","value","Danger"],["severity","contrast","value","Contrast"],["selector","tag-severity-demo",3,"code"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Severity defines the color of the tag, possible values are "),i(3,"i"),o(4,"success"),a(),o(5,", "),i(6,"i"),o(7,"info"),a(),o(8,", "),i(9,"i"),o(10,"warn"),a(),o(11," and "),i(12,"i"),o(13,"danger"),a(),o(14," in addition to the default theme color."),a()(),i(15,"div",0),r(16,"p-tag",1)(17,"p-tag",2)(18,"p-tag",3)(19,"p-tag",4)(20,"p-tag",5)(21,"p-tag",6)(22,"p-tag",7),a(),r(23,"app-code",8)),t&2&&(p(23),n("code",l.code))},dependencies:[u,d,m],encapsulation:2})}return e})();var U=()=>({border:"2px solid var(--border-color)",background:"transparent",color:"var(--text-color)"}),W=(()=>{class e{code={basic:`<p-tag [style]="{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)'}">
    <div class="flex items-center gap-2 px-1">
        <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
        <span class="text-base">
            Italy
        </span>
    </div>
</p-tag>`,html:`<div class="card flex justify-center">
    <p-tag [style]="{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)'}">
        <div class="flex items-center gap-2 px-1">
            <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
            <span class="text-base">
                Italy
            </span>
        </div>
    </p-tag>
</div>`,typescript:`import { Component } from '@angular/core';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'tag-template-demo',
    templateUrl: './tag-template-demo.html',
    standalone: true,
    imports: [Tag]
})
export class TagTemplateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["tag-template-demo"]],standalone:!1,decls:10,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","items-center","gap-2","px-1"],["alt","Country","src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",1,"flag","flag-it",2,"width","18px"],[1,"text-base"],["selector","tag-template-demo",3,"code"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Children of the component are passed as the content for templating."),a()(),i(3,"div",0)(4,"p-tag")(5,"div",1),r(6,"img",2),i(7,"span",3),o(8,"Italy"),a()()()(),r(9,"app-code",4)),t&2&&(p(4),b(y(3,U)),p(5),n("code",l.code))},dependencies:[u,d,m],encapsulation:2})}return e})();var B=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=C({type:e});static \u0275inj=S({imports:[h,T,w,D,m,E,D]})}return e})();var _=()=>["Tag"],N=(()=>{class e{docs=[{id:"import",label:"Import",component:F},{id:"basic",label:"Basic",component:A},{id:"severity",label:"Severity",component:k},{id:"pill",label:"Pill",component:j},{id:"icon",label:"Icon",component:P},{id:"template",label:"Template",component:W},{id:"accessibility",label:"Accessibility",component:I}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tag Component","header","Tag","description","Tag component is used to categorize content.","themeDocs","tag",3,"docs","apiDocs"]],template:function(t,l){t&1&&r(0,"app-doc",0),t&2&&n("docs",l.docs)("apiDocs",y(2,_))},dependencies:[B,M],encapsulation:2})}return e})();var Me=[{path:"",component:N}];export{Me as default};
