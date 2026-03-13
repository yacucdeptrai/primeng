import{a as b,d as H,e as T}from"./chunk-I6RUY6VJ.js";import{a as g,b as K}from"./chunk-CIUCWEWU.js";import{s as Q}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as P}from"./chunk-UHCZASEU.js";import{Ga as U,Ja as V,va as q,wa as _}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{q as L,u as S,y as N}from"./chunk-O4W5DSIC.js";import{$b as F,Ab as n,Mb as R,N as M,O as x,Qa as c,Rb as k,S as j,Tb as w,Ub as I,ac as i,eb as l,fb as D,jb as z,kb as d,kc as B,lc as O,ma as C,rb as A,xb as p,yb as a,zb as o,zc as h}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var G=(()=>{class e{code={typescript:"import { ImageCompareModule } from 'primeng/imagecompare';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["image-compare-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,r){t&1&&n(0,"app-code",0),t&2&&p("code",r.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var W=(()=>{class e{code={html:`<span id="image_label">Compare Images</span>
<p-imagecompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</p-imagecompare>

<p-imagecompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</p-imagecompare>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["image-compare-accessibility-doc"]],standalone:!1,decls:75,vars:2,consts:[["id","accessibility","label","Accessibility"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(t,r){t&1&&(a(0,"div")(1,"app-docsectiontext",0)(2,"h3"),i(3,"Screen Reader"),o(),a(4,"p"),i(5,"ImageComponent component uses a native range "),a(6,"i"),i(7,"slider"),o(),i(8," internally. Value to describe the component can be defined using "),a(9,"i"),i(10,"aria-labelledby"),o(),i(11," and "),a(12,"i"),i(13,"aria-label"),o(),i(14," props."),o(),n(15,"app-code",1),a(16,"h3"),i(17,"Keyboard Support"),o(),a(18,"div",2)(19,"table",3)(20,"thead")(21,"tr")(22,"th"),i(23,"Key"),o(),a(24,"th"),i(25,"Function"),o()()(),a(26,"tbody")(27,"tr")(28,"td")(29,"i"),i(30,"tab"),o()(),a(31,"td"),i(32,"Moves focus to the component."),o()(),a(33,"tr")(34,"td")(35,"span",4)(36,"i",5),i(37,"left arrow"),o(),a(38,"i"),i(39,"up arrow"),o()()(),a(40,"td"),i(41,"Decrements the value."),o()(),a(42,"tr")(43,"td")(44,"span",4)(45,"i",5),i(46,"right arrow"),o(),a(47,"i"),i(48,"down arrow"),o()()(),a(49,"td"),i(50,"Increments the value."),o()(),a(51,"tr")(52,"td")(53,"i"),i(54,"home"),o()(),a(55,"td"),i(56,"Set the minimum value."),o()(),a(57,"tr")(58,"td")(59,"i"),i(60,"end"),o()(),a(61,"td"),i(62,"Set the maximum value."),o()(),a(63,"tr")(64,"td")(65,"i"),i(66,"page up"),o()(),a(67,"td"),i(68,"Increments the value by 10 steps."),o()(),a(69,"tr")(70,"td")(71,"i"),i(72,"page down"),o()(),a(73,"td"),i(74,"Decrements the value by 10 steps."),o()()()()()()()),t&2&&(c(15),p("code",r.code)("hideToggleCode",!0))},dependencies:[g,b],encapsulation:2})}return e})();var ae=({dt:e})=>`
.p-imagecompare {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
}

.p-imagecompare img {
    width: 100%;
    height: 100%;
    position: absolute;
}

.p-imagecompare img + img {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
}

.p-imagecompare:dir(rtl) img + img {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}

.p-imagecompare-slider {
    position: relative;
    -webkit-appearance: none;
    width: calc(100% + ${e("imagecompare.handle.size")});
    height: 100%;
    margin-inline-start: calc(-1 * calc(${e("imagecompare.handle.size")} / 2));
    background-color: transparent;
    outline: none;
    transition: all ${e("imagecompare.handle.transition.duration")};
}

.p-imagecompare-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${e("imagecompare.handle.size")};
    width: ${e("imagecompare.handle.size")};
    background: ${e("imagecompare.handle.background")};
    border: ${e("imagecompare.handle.border.width")} solid ${e("imagecompare.handle.border.color")};
    border-radius: ${e("imagecompare.handle.border.radius")};
    background-size: contain;
    cursor: ew-resize;
    transition: all ${e("imagecompare.handle.transition.duration")};
}

.p-imagecompare-slider::-moz-range-thumb {
    height: ${e("imagecompare.handle.size")};
    width: ${e("imagecompare.handle.size")};
    background: ${e("imagecompare.handle.background")};
    border: ${e("imagecompare.handle.border.width")} ${e("imagecompare.handle.border.style")} ${e("imagecompare.handle.border.color")};
    border-radius: ${e("imagecompare.handle.border.radius")};
    background-size: contain;
    cursor: ew-resize;
}

.p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
    box-shadow: ${e("imagecompare.handle.focus.ring.shadow")};
    outline: ${e("imagecompare.handle.focus.ring.width")} ${e("imagecompare.handle.focus.ring.style")} ${e("imagecompare.handle.focus.ring.color")};
    outline-offset: ${e("imagecompare.handle.focus.ring.offset")};
}

.p-imagecompare-slider:focus-visible::-moz-range-thumb {
    box-shadow: ${e("imagecompare.handle.focus.ring.shadow")};
    outline: ${e("imagecompare.handle.focus.ring.width")} ${e("imagecompare.handle.focus.ring.style")} ${e("imagecompare.handle.focus.ring.color")};
    outline-offset: ${e("imagecompare.handle.focus.ring.offset")};
}

.p-imagecompare-slider:hover {
    width: calc(100% + ${e("imagecompare.handle.hover.size")});
    margin-inline-start: calc(-1 * calc(${e("imagecompare.handle.hover.size")} / 2));
}

.p-imagecompare-slider:hover::-webkit-slider-thumb {
    background: ${e("imagecompare.handle.hover.background")};
    border-color: ${e("imagecompare.handle.hover.border.color")};
    height: ${e("imagecompare.handle.hover.size")};
    width: ${e("imagecompare.handle.hover.size")};
}

.p-imagecompare-slider:hover::-moz-range-thumb {
    background: ${e("imagecompare.handle.hover.background")};
    border-color: ${e("imagecompare.handle.hover.border.color")};
    height: ${e("imagecompare.handle.hover.size")};
    width: ${e("imagecompare.handle.hover.size")};
}
`,oe={root:"p-imagecompare",slider:"p-imagecompare-slider"},$=(()=>{class e extends U{name="imagecompare";theme=ae;classes=oe;static \u0275fac=(()=>{let m;return function(r){return(m||(m=C(e)))(r||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var re=["left"],me=["right"];function ne(e,u){}function pe(e,u){e&1&&d(0,ne,0,0,"ng-template")}function le(e,u){}function ce(e,u){e&1&&d(0,le,0,0,"ng-template")}var v=(()=>{class e extends V{isRTL=!1;tabindex;ariaLabelledby;ariaLabel;leftTemplate;rightTemplate;_leftTemplate;_rightTemplate;templates;_componentStyle=j($);mutationObserver;ngOnInit(){super.ngOnInit(),this.updateDirection(),this.observeDirectionChanges()}ngAfterContentInit(){this.templates?.forEach(m=>{switch(m.getType()){case"left":this._leftTemplate=m.template;break;case"right":this._rightTemplate=m.template;break}})}onSlide(m){let t=m.target.value,r=m.target.previousElementSibling;this.isRTL?r.style.clipPath=`polygon(${100-t}% 0, 100% 0, 100% 100%, ${100-t}% 100%)`:r.style.clipPath=`polygon(0 0, ${t}% 0, ${t}% 100%, 0 100%)`}updateDirection(){this.isRTL=!!this.el.nativeElement.closest('[dir="rtl"]')}observeDirectionChanges(){if(N(this.platformId)){let m=document?.documentElement,t={attributes:!0,attributeFilter:["dir"]};this.mutationObserver=new MutationObserver(()=>{this.updateDirection()}),this.mutationObserver.observe(m,t)}}ngOnDestroy(){this.mutationObserver&&this.mutationObserver.disconnect(),super.ngOnDestroy()}static \u0275fac=(()=>{let m;return function(r){return(m||(m=C(e)))(r||e)}})();static \u0275cmp=l({type:e,selectors:[["p-imageCompare"],["p-imagecompare"],["p-image-compare"]],contentQueries:function(t,r,y){if(t&1&&k(y,re,4)(y,me,4)(y,q,4),t&2){let s;w(s=I())&&(r.leftTemplate=s.first),w(s=I())&&(r.rightTemplate=s.first),w(s=I())&&(r.templates=s)}},hostAttrs:[1,"p-imagecompare"],hostVars:3,hostBindings:function(t,r){t&2&&A("tabindex",r.tabindex)("aria-labelledby",r.ariaLabelledby)("aria-label",r.ariaLabel)},inputs:{tabindex:"tabindex",ariaLabelledby:"ariaLabelledby",ariaLabel:"ariaLabel"},features:[B([$]),z],decls:3,vars:4,consts:[[4,"ngTemplateOutlet"],["type","range","min","0","max","100","value","50",3,"input"]],template:function(t,r){t&1&&(d(0,pe,1,0,null,0)(1,ce,1,0,null,0),a(2,"input",1),R("input",function(s){return r.onSlide(s)}),o()),t&2&&(p("ngTemplateOutlet",r.leftTemplate||r._leftTemplate),c(),p("ngTemplateOutlet",r.rightTemplate||r._rightTemplate),c(),F(r.cx("slider")))},dependencies:[S,L,_],encapsulation:2,changeDetection:0})}return e})(),X=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=x({imports:[v,_,_]})}return e})();function se(e,u){e&1&&n(0,"img",5)}function de(e,u){e&1&&n(0,"img",6)}var Z=(()=>{class e{code={basic:`<p-imagecompare class="shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>`,html:`<div class="card flex justify-center">
    <p-imagecompare class="shadow-lg rounded-2xl">
        <ng-template #left>
            <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </ng-template>
        <ng-template #right>
            <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </ng-template>
    </p-imagecompare>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
    selector: 'image-compare-basic-demo',
    templateUrl: './image-compare-basic-demo.html',
    standalone: true,
    imports: [ImageCompareModule]
})
export class ImageCompareBasicDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["basic-doc"]],standalone:!1,decls:22,vars:1,consts:[["left",""],["right",""],[1,"card","flex","justify-center"],[1,"shadow-lg","rounded-2xl"],["selector","image-compare-basic-demo",3,"code"],["src","https://primefaces.org/cdn/primevue/images/compare/island1.jpg"],["src","https://primefaces.org/cdn/primevue/images/compare/island2.jpg"]],template:function(t,r){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Images are defined using templating with "),a(3,"i"),i(4,"left"),o(),i(5," and "),a(6,"i"),i(7,"right"),o(),i(8," templates. Use the "),a(9,"i"),i(10,"style"),o(),i(11," or "),a(12,"i"),i(13,"class"),o(),i(14," properties to define the size of the container."),o()(),a(15,"div",2)(16,"p-imagecompare",3),d(17,se,1,0,"ng-template",null,0,h)(19,de,1,0,"ng-template",null,1,h),o()(),n(21,"app-code",4)),t&2&&(c(21),p("code",r.code))},dependencies:[g,b,v],encapsulation:2})}return e})();function ge(e,u){e&1&&n(0,"img",5)}function ue(e,u){e&1&&n(0,"img",6)}var ee=(()=>{class e{code={basic:`<p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>`,html:`<div class="card flex justify-center">
    <p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
        <ng-template #left>
            <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </ng-template>
        <ng-template #right>
            <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </ng-template>
    </p-imagecompare>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
    selector: 'image-compare-responsive-demo',
    templateUrl: './image-compare-responsive-demo.html',
    standalone: true,
    imports: [ImageCompareModule]
})
export class ImageCompareResponsiveDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["responsive-doc"]],standalone:!1,decls:10,vars:1,consts:[["left",""],["right",""],[1,"card","flex","justify-center"],[1,"sm:!w-96","shadow-lg","rounded-2xl"],["selector","image-compare-basic-demo",3,"code"],["src","https://primefaces.org/cdn/primevue/images/compare/island1.jpg"],["src","https://primefaces.org/cdn/primevue/images/compare/island2.jpg"]],template:function(t,r){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Apply responsive styles to the container element to optimize display per screen size."),o()(),a(3,"div",2)(4,"p-imagecompare",3),d(5,ge,1,0,"ng-template",null,0,h)(7,ue,1,0,"ng-template",null,1,h),o()(),n(9,"app-code",4)),t&2&&(c(9),p("code",r.code))},dependencies:[g,b,v],encapsulation:2})}return e})();var te=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=D({type:e});static \u0275inj=x({imports:[S,P,K,T,Q,X,T]})}return e})();var fe=()=>["ImageCompare"],ie=(()=>{class e{docs=[{id:"import",label:"Import",component:G},{id:"basic",label:"Basic",component:Z},{id:"responsive",label:"Responsive",component:ee},{id:"accessibility",label:"Accessibility",component:W}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ImageCompare Component","header","ImageCompare","description","Compare two images side by side with a slider.","themeDocs","imagecompare",3,"docs","apiDocs"]],template:function(t,r){t&1&&n(0,"app-doc",0),t&2&&p("docs",r.docs)("apiDocs",O(2,fe))},dependencies:[te,H],encapsulation:2})}return e})();var nt=[{path:"",component:ie}];export{nt as default};
