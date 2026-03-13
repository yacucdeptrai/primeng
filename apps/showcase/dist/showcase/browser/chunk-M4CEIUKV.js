import{a as u}from"./chunk-URX6CYXA.js";import{a as s,d as _,e as y}from"./chunk-I6RUY6VJ.js";import{a as p,b as T}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as A,ba as M}from"./chunk-DEL7GGHP.js";import{i as E}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as q}from"./chunk-O4W5DSIC.js";import{Ab as r,O as D,Qa as c,_b as w,ac as t,eb as l,fb as S,kb as x,lc as C,xb as a,yb as o,zb as n,zc as f}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var F=(()=>{class e{code={html:`<p-card role="region">
    Content
</p-card>`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["card-accessibility-doc"]],standalone:!1,decls:20,vars:2,consts:[[1,"doc-section-description"],["href","https://www.w3.org/TR/wai-aria/#landmark","alt","Landmark Roles"],[3,"code","hideToggleCode"]],template:function(i,m){i&1&&(o(0,"app-docsectiontext")(1,"div",0)(2,"h3"),t(3,"Screen Reader"),n(),o(4,"p"),t(5," A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the "),o(6,"a",1),t(7,"landmark"),n(),t(8," roles like "),o(9,"i"),t(10,"region"),n(),t(11,", you may use the "),o(12,"i"),t(13,"role"),n(),t(14," property. "),n(),r(15,"app-code",2),o(16,"h3"),t(17,"Keyboard Support"),n(),o(18,"p"),t(19,"Component does not include any interactive elements."),n()()()),i&2&&(c(15),a("code",m.code)("hideToggleCode",!0))},dependencies:[p,s],encapsulation:2})}return e})();var N=()=>({width:"25rem",overflow:"hidden"});function z(e,v){e&1&&r(0,"img",6)}function U(e,v){e&1&&t(0," Advanced Card ")}function H(e,v){e&1&&t(0," Card subtitle ")}function K(e,v){e&1&&(o(0,"div",7),r(1,"p-button",8)(2,"p-button",9),n()),e&2&&(c(),a("outlined",!0))}var I=(()=>{class e{code={basic:`<p-card [style]="{ width: '25rem', overflow: 'hidden' }">
    <ng-template #header>
        <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
    </ng-template>
    <ng-template #title> Advanced Card </ng-template>
    <ng-template #subtitle> Card subtitle </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
    <ng-template #footer>
        <div class="flex gap-4 mt-1">
            <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
            <p-button label="Save" class="w-full" styleClass="w-full" />
        </div>
    </ng-template>
</p-card>`,html:`<div class="mb-4 p-8 flex items-center justify-center">
    <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
        <ng-template #header>
            <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
        </ng-template>
        <ng-template #title> Advanced Card </ng-template>
        <ng-template #subtitle> Card subtitle </ng-template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
        <ng-template #footer>
            <div class="flex gap-4 mt-1">
                <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
                <p-button label="Save" class="w-full" styleClass="w-full" />
            </div>
        </ng-template>
    </p-card>
</div>`,typescript:`import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'card-advanced-demo',
    templateUrl: './card-advanced-demo.html',
    standalone: true,
    imports: [CardModule, ButtonModule]
})
export class CardAdvancedDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["card-advanced-demo"]],standalone:!1,decls:25,vars:4,consts:[["header",""],["title",""],["subtitle",""],["footer",""],[1,"mb-4","p-8","flex","items-center","justify-center"],["selector","card-advanced-demo",3,"code"],["alt","Card","src","https://primefaces.org/cdn/primeng/images/card-ng.jpg",1,"w-full"],[1,"flex","gap-4","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full",3,"outlined"],["label","Save","styleClass","w-full",1,"w-full"]],template:function(i,m){i&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Card content can be customized further with "),o(3,"i"),t(4,"subHeader"),n(),t(5,", "),o(6,"i"),t(7,"header"),n(),t(8," and "),o(9,"i"),t(10,"footer"),n(),t(11," properties."),n()(),o(12,"div",4)(13,"p-card"),x(14,z,1,0,"ng-template",null,0,f)(16,U,1,0,"ng-template",null,1,f)(18,H,1,0,"ng-template",null,2,f),o(20,"p"),t(21," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),n(),x(22,K,3,1,"ng-template",null,3,f),n()(),r(24,"app-code",5)),i&2&&(c(13),w(C(3,N)),c(11),a("code",m.code))},dependencies:[p,s,u,A],encapsulation:2})}return e})();var B=(()=>{class e{code={basic:`<p-card header="Simple Card">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-card>`,html:`<div class="mb-4 p-8">
    <p-card header="Simple Card">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </p-card>
</div>`,typescript:`import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'card-basic-demo',
    templateUrl: './card-basic-demo.html',
    standalone: true,
    imports: [CardModule]
})
export class CardBasicDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["card-basic-demo"]],standalone:!1,decls:11,vars:1,consts:[[1,"mb-4","p-8"],["header","Simple Card"],[1,"m-0"],["selector","card-basic-demo",3,"code"]],template:function(i,m){i&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"A simple Card is created with a "),o(3,"i"),t(4,"header"),n(),t(5," property along with the content as children."),n()(),o(6,"div",0)(7,"p-card",1)(8,"p",2),t(9," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),n()()(),r(10,"app-code",3)),i&2&&(c(10),a("code",m.code))},dependencies:[p,s,u],encapsulation:2})}return e})();var L=(()=>{class e{code={typescript:"import { CardModule } from 'primeng/card';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["card-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,m){i&1&&r(0,"app-code",0),i&2&&a("code",m.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return e})();var R=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=S({type:e});static \u0275inj=D({imports:[q,T,y,u,M,E,y]})}return e})();var G=()=>["Card"],j=(()=>{class e{docs=[{id:"import",label:"Import",component:L},{id:"basic",label:"Basic",component:B},{id:"advanced",label:"Advanced",component:I},{id:"accessibility",label:"Accessibility",component:F}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Card Component","header","Card","description","Card is a flexible container component.","themeDocs","Card",3,"docs","apiDocs"]],template:function(i,m){i&1&&r(0,"app-doc",0),i&2&&a("docs",m.docs)("apiDocs",C(2,G))},dependencies:[R,_],encapsulation:2})}return e})();var he=[{path:"",component:j}];export{he as default};
