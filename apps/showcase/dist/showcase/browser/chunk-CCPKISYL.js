import{a as d,d as A,e as x}from"./chunk-I6RUY6VJ.js";import{a as s,b as w}from"./chunk-CIUCWEWU.js";import{s as h}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as S,ba as b}from"./chunk-DEL7GGHP.js";import{e as D,i as C}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as g}from"./chunk-O4W5DSIC.js";import{Ab as l,O as y,Qa as m,ac as o,eb as a,fb as v,xb as r,yb as n,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var M=(()=>{class e{code={command:`# Using npm
npm install primeng @primeng/themes

# Using yarn
yarn add primeng @primeng/themes

# Using pnpm
pnpm add primeng @primeng/themes`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["download-doc"]],standalone:!1,decls:7,vars:2,consts:[["href","https://www.npmjs.com/package/primeng"],[3,"code","hideToggleCode"]],template:function(t,c){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"PrimeNG is available for download on the "),n(3,"a",0),o(4,"npm registry"),i(),o(5,"."),i()(),l(6,"app-code",1)),t&2&&(m(6),r("code",c.code)("hideToggleCode",!0))},dependencies:[s,d],encapsulation:2})}return e})();var T=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["examples-doc"]],standalone:!1,decls:6,vars:0,consts:[["href","https://github.com/primefaces/primeng-examples"]],template:function(t,c){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"An example starter with Angular CLI is available at "),n(3,"a",0),o(4,"GitHub"),i(),o(5,"."),i()())},dependencies:[d],encapsulation:2})}return e})();var N=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["download-doc"]],standalone:!1,decls:13,vars:3,consts:[[1,"leading-relaxed"],[1,"doc-link",3,"routerLink"]],template:function(t,c){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Welcome to the Prime UI Ecosystem! Once you have PrimeNG up and running, we recommend exploring the following resources to gain a deeper understanding of the library."),i(),n(3,"ul",0)(4,"li")(5,"a",1),o(6,"Global configuration"),i()(),n(7,"li")(8,"a",1),o(9,"Customization of styles"),i()(),n(10,"li")(11,"a",1),o(12,"Getting support"),i()()()()),t&2&&(m(5),r("routerLink","/configuration"),m(3),r("routerLink","/theming"),m(3),r("routerLink","/support"))},dependencies:[D,d],encapsulation:2})}return e})();var k=(()=>{class e{code={typescript:`import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["provider-doc"]],standalone:!1,decls:16,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,c){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Add "),n(3,"i"),o(4,"providePrimeNG"),i(),o(5," and "),n(6,"i"),o(7,"provideAnimationsAsync"),i(),o(8," to the list of providers in your "),n(9,"i"),o(10,"app.config.ts"),i(),o(11," and use the "),n(12,"i"),o(13,"theme"),i(),o(14," property to configure a theme such as Aura."),i(),l(15,"app-code",0),i()),t&2&&(m(15),r("code",c.code)("hideToggleCode",!0))},dependencies:[s,d],encapsulation:2})}return e})();var P=(()=>{class e{code1={typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-demo',
    templateUrl: './button-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDemo {}`};code2={html:`<div class="card flex justify-center">
    <p-button label="Check" />
</div>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["usage-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"card","flex","justify-center"],["label","Check"],[1,"block","mb-4",3,"code","hideStackBlitz","hideCodeSandbox","hideToggleCode"],[3,"code","hideStackBlitz","hideCodeSandbox","hideToggleCode"]],template:function(t,c){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," Verify your setup by adding a component such as Button. Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component. "),i()(),n(3,"div",0),l(4,"p-button",1),i(),l(5,"app-code",2)(6,"app-code",3)),t&2&&(m(5),r("code",c.code1)("hideStackBlitz",!0)("hideCodeSandbox",!0)("hideToggleCode",!0),m(),r("code",c.code2)("hideStackBlitz",!0)("hideCodeSandbox",!0)("hideToggleCode",!0))},dependencies:[s,d,S],encapsulation:2})}return e})();var G=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[g,C,w,h,x,b,x]})}return e})();var I=(()=>{class e{docs=[{id:"download",label:"Download",component:M},{id:"provider",label:"Provider",component:k},{id:"verify",label:"Verify",component:P},{id:"examples",label:"Example",component:T},{id:"nextsteps",label:"Next Steps",component:N}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Getting Started - PrimeNG","header","Installation","description","Setting up PrimeNG in an Angular CLI project.",3,"docs"]],template:function(t,c){t&1&&l(0,"app-doc",0),t&2&&r("docs",c.docs)},dependencies:[g,G,A],encapsulation:2})}return e})();var ye=[{path:"",component:I}];export{ye as default};
