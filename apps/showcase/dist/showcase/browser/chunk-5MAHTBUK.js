import{a as d,d as V,e as C}from"./chunk-I6RUY6VJ.js";import{a as l,b as $}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as B}from"./chunk-UHCZASEU.js";import{Ga as W,Ja as N,wa as L}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as I,p as j,u as h}from"./chunk-O4W5DSIC.js";import{Ab as p,N as M,O as x,Qa as m,S as E,Yb as F,Z as P,_b as A,ac as o,eb as a,fb as D,jb as w,kc as T,lc as S,ma as u,rb as y,xb as c,yb as i,zb as n}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var R=(()=>{class e{code={html:'<p-progress-spinner aria-label="Loading"></p-progress-spinner>'};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["progress-spinner-accessibility-doc"]],standalone:!1,decls:20,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,r){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),n(),i(4,"p"),o(5,"ProgressSpinner components uses "),i(6,"i"),o(7,"progressbar"),n(),o(8," role. Value to describe the component can be defined using "),i(9,"i"),o(10,"aria-labelledby"),n(),o(11," and "),i(12,"i"),o(13,"aria-label"),n(),o(14," props."),n()(),p(15,"app-code",0),i(16,"h3"),o(17,"Keyboard Support"),n(),i(18,"p"),o(19,"Component does not include any interactive elements."),n()()),t&2&&(m(15),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,d],encapsulation:2})}return e})();var J=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.one")};
    }
    40% {
        stroke: ${e("progressspinner.color.two")};
    }
    66% {
        stroke: ${e("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.four")};
    }
}
`,O={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},k=(()=>{class e extends W{name="progressspinner";theme=J;classes=O;static \u0275fac=(()=>{let s;return function(r){return(s||(s=u(e)))(r||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var g=(()=>{class e extends N{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=E(k);static \u0275fac=(()=>{let s;return function(r){return(s||(s=u(e)))(r||e)}})();static \u0275cmp=a({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[T([k]),w],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(t,r){t&1&&(i(0,"div",0),P(),i(1,"svg",1),p(2,"circle",2),n()()),t&2&&(c("ngStyle",r.style)("ngClass",r.styleClass),y("aria-label",r.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),m(),F("animation-duration",r.animationDuration),y("data-pc-section","root"),m(),y("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[h,I,j,L],encapsulation:2,changeDetection:0})}return e})();var U=(()=>{class e{code={basic:'<p-progress-spinner ariaLabel="loading" />',html:`<div class="card flex justify-center">
    <p-progress-spinner ariaLabel="loading" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
    selector: 'progress-spinner-basic-demo',
    templateUrl: './progress-spinner-basic-demo.html',
    standalone: true,
    imports: [ProgressSpinner]
})
export class ProgressSpinnerBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["basic-doc"]],standalone:!1,decls:6,vars:1,consts:[[1,"card","flex","justify-center"],["ariaLabel","loading"],["selector","progress-spinner-basic-demo",3,"code"]],template:function(t,r){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"An infinite spin animation is displayed by default."),n()(),i(3,"div",0),p(4,"p-progress-spinner",1),n(),p(5,"app-code",2)),t&2&&(m(5),c("code",r.code))},dependencies:[l,d,g],encapsulation:2})}return e})();var Q=()=>({width:"50px",height:"50px"}),z=(()=>{class e{id;title;code={basic:`<p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />`,html:`<div class="card flex justify-center">
    <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
    selector: 'progress-spinner-custom-demo',
    templateUrl: './progress-spinner-custom-demo.html',
    standalone: true,
    imports: [ProgressSpinner]
})
export class ProgressSpinnerCustomDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["custom-doc"]],inputs:{id:"id",title:"title"},standalone:!1,decls:15,vars:4,consts:[[1,"card","flex","justify-center"],["strokeWidth","8","fill","transparent","animationDuration",".5s"],["selector","progress-spinner-custom-demo",3,"code"]],template:function(t,r){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"ProgressSpinner can be customized with styling property like "),i(3,"i"),o(4,"styleClass"),n(),o(5,", "),i(6,"i"),o(7,"strokeWidth"),n(),o(8," and "),i(9,"i"),o(10,"fill"),n(),o(11,"."),n()(),i(12,"div",0),p(13,"p-progress-spinner",1),n(),p(14,"app-code",2)),t&2&&(m(13),A(S(3,Q)),m(),c("code",r.code))},dependencies:[l,d,g],encapsulation:2})}return e})();var K=(()=>{class e{code={typescript:"import { ProgressSpinnerModule } from 'primeng/progressspinner';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["progress-spinner-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,r){t&1&&p(0,"app-code",0),t&2&&c("code",r.code)("hideToggleCode",!0)},dependencies:[l],encapsulation:2})}return e})();var q=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=x({imports:[h,B,$,C,g,C]})}return e})();var X=()=>["ProgressSpinner"],H=(()=>{class e{docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:U},{id:"custom",label:"Custom",component:z},{id:"accessibility",label:"Accessibility",component:R}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ProgressSpinner Component","header","ProgressSpinner","description","ProgressSpinner is a process status indicator.","themeDocs","progressspinner",3,"docs","apiDocs"]],template:function(t,r){t&1&&p(0,"app-doc",0),t&2&&c("docs",r.docs)("apiDocs",S(2,X))},dependencies:[q,V],encapsulation:2})}return e})();var Ue=[{path:"",component:H}];export{Ue as default};
