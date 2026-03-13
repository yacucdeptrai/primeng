import{a as c}from"./chunk-3U2N3Q4C.js";import{a as f,d as A,e as v}from"./chunk-I6RUY6VJ.js";import{a as r,b as T}from"./chunk-CIUCWEWU.js";import{u as D,v as M}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as y,ba as h}from"./chunk-DEL7GGHP.js";import{i as S}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as b}from"./chunk-O4W5DSIC.js";import{Ab as s,O as C,Qa as p,ac as e,eb as a,fb as x,lc as g,xb as d,yb as i,zb as o}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var E=(()=>{class t{code={basic:`<div class="flex flex-col items-center">
    <div>
        <p-button pStyleClass=".box1" enterFromClass="my-hidden" enterActiveClass="my-fadein" label="FadeIn" class="mr-2" />
        <p-button
            pStyleClass=".box1"
            leaveActiveClass="my-fadeout"
            leaveToClass="my-hidden"
            label="FadeOut"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="my-hidden animate-duration-500 box1">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Custom
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col items-center">
    <div>
        <p-button
            pStyleClass=".box2"
            enterFromClass="hidden"
            enterActiveClass="animate-slidedown"
            label="SlideDown"
            class="mr-2"
        />
        <p-button
            pStyleClass=".box2"
            leaveActiveClass="animate-slideup"
            leaveToClass="hidden"
            label="SlideUp"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="hidden animate-duration-500 box2 overflow-hidden">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Content
            </div>
        </div>
    </div>
</div>`,html:`<div class="card flex items-center justify-center gap-8">
    <div class="flex flex-col items-center">
        <div>
            <p-button pStyleClass=".box1" enterFromClass="my-hidden" enterActiveClass="my-fadein" label="FadeIn" class="mr-2" />
            <p-button
                pStyleClass=".box1"
                leaveActiveClass="my-fadeout"
                leaveToClass="my-hidden"
                label="FadeOut"
                severity="secondary"
            />
        </div>
        <div class="h-32">
            <div class="my-hidden animate-duration-500 box1">
                <div
                    class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
                >
                    Custom
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div>
            <p-button
                pStyleClass=".box2"
                enterFromClass="hidden"
                enterActiveClass="animate-slidedown"
                label="SlideDown"
                class="mr-2"
            />
            <p-button
                pStyleClass=".box2"
                leaveActiveClass="animate-slideup"
                leaveToClass="hidden"
                label="SlideUp"
                severity="secondary"
            />
        </div>
        <div class="h-32">
            <div class="hidden animate-duration-500 box2 overflow-hidden">
                <div
                    class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
                >
                    Content
                </div>
            </div>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: './style-class-animation-demo',
    templateUrl: './style-class-animation-demo.html',
    standalone: true,
    imports: [StyleClassModule, ButtonModule],
    styles: [
        \`:host ::ng-deep {
                @keyframes my-fadein {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes my-fadeout {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }

                .my-hidden {
                    display: none;
                }

                .my-fadein {
                    animation: my-fadein 150ms linear;
                }

                .my-fadeout {
                    animation: my-fadeout 150ms linear;
                }
            } \`
    ],
})
export class StyleClassAnimationDemo {}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["animation-doc"]],standalone:!1,decls:48,vars:1,consts:[[1,"card","flex","items-center","justify-center","gap-8"],[1,"flex","flex-col","items-center"],["pStyleClass",".box1","enterFromClass","my-hidden","enterActiveClass","my-fadein","label","FadeIn",1,"mr-2"],["pStyleClass",".box1","leaveActiveClass","my-fadeout","leaveToClass","my-hidden","label","FadeOut","severity","secondary"],[1,"h-32"],[1,"my-hidden","animate-duration-500","box1"],[1,"flex","bg-primary","text-primary-contrast","items-center","justify-center","py-4","rounded-md","mt-4","font-bold","w-32","h-32"],["pStyleClass",".box2","enterFromClass","hidden","enterActiveClass","animate-slidedown","label","SlideDown",1,"mr-2"],["pStyleClass",".box2","leaveActiveClass","animate-slideup","leaveToClass","hidden","label","SlideUp","severity","secondary"],[1,"hidden","animate-duration-500","box2","overflow-hidden"],["selector","style-class-animation-demo",3,"code"]],template:function(n,m){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Classes to apply during enter and leave animations are specified using the "),i(3,"i"),e(4,"enterFromClass"),o(),e(5,", "),i(6,"i"),e(7,"enterActiveClass"),o(),e(8,", "),i(9,"i"),e(10,"enterToClass"),o(),e(11,", "),i(12,"i"),e(13,"leaveFromClass"),o(),e(14,", "),i(15,"i"),e(16,"leaveActiveClass"),o(),e(17,","),i(18,"i"),e(19,"leaveToClass"),o(),e(20,"properties. In addition in case the target is an overlay, "),i(21,"i"),e(22,"hideOnOutsideClick"),o(),e(23," would be handy to hide the target if outside of the popup is clicked, or enable "),i(24,"i"),e(25,"hideOnEscape"),o(),e(26," to close the popup by listening "),i(27,"i"),e(28,"escape"),o(),e(29," key. "),o()(),i(30,"div",0)(31,"div",1)(32,"div"),s(33,"p-button",2)(34,"p-button",3),o(),i(35,"div",4)(36,"div",5)(37,"div",6),e(38,"Custom"),o()()()(),i(39,"div",1)(40,"div"),s(41,"p-button",7)(42,"p-button",8),o(),i(43,"div",4)(44,"div",9)(45,"div",6),e(46,"Content"),o()()()()(),s(47,"app-code",10)),n&2&&(p(47),d("code",m.code))},dependencies:[r,f,c,y],styles:["@keyframes _ngcontent-%COMP%_my-fadein{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_my-fadeout{0%{opacity:1}to{opacity:0}}[_nghost-%COMP%]     .my-hidden{display:none}[_nghost-%COMP%]     .my-fadein{animation:_ngcontent-%COMP%_my-fadein .15s linear}[_nghost-%COMP%]     .my-fadeout{animation:_ngcontent-%COMP%_my-fadeout .15s linear}"]})}return t})();var F=(()=>{class t{code={typescript:"import { StyleClassModule } from 'primeng/styleclass';"};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["style-class-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,m){n&1&&s(0,"app-code",0),n&2&&d("code",m.code)("hideToggleCode",!0)},dependencies:[r],encapsulation:2})}return t})();var I=(()=>{class t{code={basic:`<p-button label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled" />
<input type="text" pInputText class="block mt-4" />`,html:`<div class="card flex flex-col items-center">
    <p-button label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled" />
    <input type="text" pInputText class="block mt-4">
</div>`,typescript:`import { Component } from '@angular/core';
import { StyleClass } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'style-class-toggle-class-demo',
    templateUrl: './style-class-toggle-class-demo.html',
    standalone: true,
    imports: [StyleClass, InputTextModule, ButtonModule]
})
export class StyleClassToggleClassDemo {}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["toggle-class-doc"]],standalone:!1,decls:26,vars:1,consts:[[1,"card","flex","flex-col","items-center"],["label","Toggle p-disabled","pStyleClass","@next","toggleClass","p-disabled"],["type","text","pInputText","",1,"block","mt-4"],["selector","style-class-toggle-class-demo",3,"code"]],template:function(n,m){n&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"StyleClass"),o(),e(4," has two modes, "),i(5,"i"),e(6,"toggleClass"),o(),e(7," to simply add-remove a class and enter/leave animations. The target element to change the styling is defined with the "),i(8,"i"),e(9,"selector"),o(),e(10," property that accepts any valid CSS selector or keywords including "),i(11,"i"),e(12,"@next"),o(),e(13,", "),i(14,"i"),e(15,"prev"),o(),e(16,", "),i(17,"i"),e(18,"parent"),o(),e(19,", "),i(20,"i"),e(21,"grandparent"),o()()(),i(22,"div",0),s(23,"p-button",1)(24,"input",2),o(),s(25,"app-code",3)),n&2&&(p(25),d("code",m.code))},dependencies:[r,f,c,y,D],encapsulation:2})}return t})();var O=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=C({imports:[b,S,T,v,h,M,v]})}return t})();var P=()=>["StyleClass"],k=(()=>{class t{docs=[{id:"import",label:"Import",component:F},{id:"toggleclass",label:"Toggle Class",component:I},{id:"animation",label:"Animation",component:E}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=a({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular StyleClass Component","header","StyleClass","description","StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.",3,"docs","apiDocs"]],template:function(n,m){n&1&&s(0,"app-doc",0),n&2&&d("docs",m.docs)("apiDocs",g(2,P))},dependencies:[O,A],encapsulation:2})}return t})();var me=[{path:"",component:k}];export{me as default};
