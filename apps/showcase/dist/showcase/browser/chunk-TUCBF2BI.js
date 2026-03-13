import{a as c,d as C,e as g}from"./chunk-I6RUY6VJ.js";import{a as s,b as h}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as D}from"./chunk-UHCZASEU.js";import{Ka as u}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as v}from"./chunk-O4W5DSIC.js";import{Ab as l,O as x,Qa as f,ac as o,eb as p,fb as y,xb as d,yb as i,zb as r}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var R=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ripple-accessibility-doc"]],standalone:!1,decls:12,vars:0,template:function(t,a){t&1&&(i(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),r(),i(3,"p"),o(4,"Ripple element has the "),i(5,"i"),o(6,"aria-hidden"),r(),o(7," attribute as true so that it gets ignored by the screen readers."),r(),i(8,"h3"),o(9,"Keyboard Support"),r(),i(10,"p"),o(11,"Component does not include any interactive elements."),r()())},dependencies:[c],encapsulation:2})}return e})();var M=(()=>{class e{code={basic:`<div pRipple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">
    Green
</div>
<div pRipple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">
    Orange
</div>
<div pRipple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">
    Purple
</div>`,html:`<div class="flex justify-center gap-2">
    <div pRipple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">
        Green
    </div>
    <div pRipple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">
        Orange
    </div>
    <div pRipple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">
        Purple
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'ripple-custom-demo',
    templateUrl: './ripple-custom-demo.html',
    standalone: true,
    imports: [Ripple],
    styles: [
        \` :host {
                .box {
                    padding: 2rem;
                    border-radius: 10px;
                    width: 110px;
                    text-align: center;
                }
            }\`
    ],
})
export class RippleCustomDemo {
}`,scss:`:host {
            .box {
                padding: 2rem;
                border-radius: 10px;
                width: 110px;
                text-align: center;
            }
        }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["custom-doc"]],standalone:!1,decls:17,vars:1,consts:[[1,"card","flex","flex-col","gap-4","items-center"],[1,"mx-1","h-8","w-8","rounded-border","inline-flex","items-center","justify-center","bg-primary","text-primary-contrast"],[1,"pi","pi-palette"],[1,"flex","justify-center","gap-2"],["pRipple","",1,"box",2,"border","1px solid rgba(75, 175, 80, 0.3)","--p-ripple-background","rgba(75, 175, 80, 0.3)"],["pRipple","",1,"box",2,"border","1px solid rgba(255, 193, 6, 0.3)","--p-ripple-background","rgba(255, 193, 6, 0.3)"],["pRipple","",1,"box",2,"border","1px solid rgba(156, 39, 176, 0.3)","--p-ripple-background","rgba(156, 39, 176, 0.3)"],["selector","ripple-custom-demo",3,"code"]],template:function(t,a){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Styling Demo Content."),r()(),i(3,"div",0)(4,"span"),o(5,"Ripple option at the "),i(6,"span",1),l(7,"i",2),r(),o(8," configurator needs to be turned on for the demo."),r(),i(9,"div",3)(10,"div",4),o(11,"Green"),r(),i(12,"div",5),o(13,"Orange"),r(),i(14,"div",6),o(15,"Purple"),r()()(),l(16,"app-code",7)),t&2&&(f(16),d("code",a.code))},dependencies:[s,c,u],styles:["[_nghost-%COMP%]   .box[_ngcontent-%COMP%]{padding:2rem;border-radius:10px;width:110px;text-align:center}"]})}return e})();var k=(()=>{class e{code={basic:'<div pRipple class="ripple-box">Default</div>',html:`<div class="card flex flex-col items-center gap-4">
    <div pRipple class="ripple-box">Default</div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'ripple-default-demo',
    templateUrl: './ripple-default-demo.html',
    styles: [
        \` :host {
                .ripple-box {
                    display: flex;
                    user-select: none;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                    font-weight: bold;
                    background: var(--p-content-background);
                    border: 1px solid var(--p-content-border-color);
                    border-radius: var(--p-content-border-radius);
                }
            }\`
    ],
    standalone: true,
    imports: [Ripple]
})
export class RippleDefaultDemo {
}`,scss:`:host {
                .ripple-box {
                    display: flex;
                    user-select: none;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                    font-weight: bold;
                    background: var(--p-content-background);
                    border: 1px solid var(--p-content-border-color);
                    border-radius: var(--p-content-border-radius);
                }
            }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["default-doc"]],standalone:!1,decls:12,vars:1,consts:[[1,"card","flex","flex-col","items-center","gap-4"],[1,"mx-1","h-8","w-8","rounded-border","inline-flex","items-center","justify-center","bg-primary","text-primary-contrast"],[1,"pi","pi-palette"],["pRipple","",1,"ripple-box"],["selector","ripple-default-demo",3,"code"]],template:function(t,a){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Default Demo Content."),r()(),i(3,"div",0)(4,"span"),o(5,"Ripple option at the "),i(6,"span",1),l(7,"i",2),r(),o(8," configurator needs to be turned on for the demo."),r(),i(9,"div",3),o(10,"Default"),r()(),l(11,"app-code",4)),t&2&&(f(11),d("code",a.code))},dependencies:[s,c,u],styles:["[_nghost-%COMP%]   .ripple-box[_ngcontent-%COMP%]{display:flex;-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;padding:3rem;font-weight:700;background:var(--p-content-background);border:1px solid var(--p-content-border-color);border-radius:var(--p-content-border-radius)}"]})}return e})();var E=(()=>{class e{code={typescript:"import { RippleModule } from 'primeng/ripple';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ripple-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,a){t&1&&l(0,"app-code",0),t&2&&d("code",a.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var w=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=y({type:e});static \u0275inj=x({imports:[v,D,h,g,g]})}return e})();var A=(()=>{class e{docs=[{id:"import",label:"Import",component:E},{id:"default",label:"Default",component:k},{id:"custom",label:"Custom",component:M},{id:"accessibility",label:"Accessibility",component:R}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular Ripple Component","header","Ripple","description","Ripple directive adds ripple effect to the host element.","themeDocs","ripple",3,"docs"]],template:function(t,a){t&1&&l(0,"app-doc",0),t&2&&d("docs",a.docs)},dependencies:[w,C],styles:["[_nghost-%COMP%]     .card-container .card{width:75px;height:75px;display:flex;align-items:center;justify-content:center;margin-right:1rem;-webkit-user-select:none;user-select:none;padding:0}[_nghost-%COMP%]     .card-container .card.primary-box{background-color:var(--primary-color);padding:0;color:var(--primary-color-text)}[_nghost-%COMP%]     .card-container .card.styled-box-green .p-ink{background:#4baf504d}[_nghost-%COMP%]     .card-container .card.styled-box-orange .p-ink{background:#ffc1064d}[_nghost-%COMP%]     .card-container .card.styled-box-purple .p-ink{background:#9c27b04d}[_nghost-%COMP%]     .card-container .card:last-child{margin-right:0}"]})}return e})();var le=[{path:"",component:A}];export{le as default};
