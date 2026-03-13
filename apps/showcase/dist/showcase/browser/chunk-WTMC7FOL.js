import{a as Ee}from"./chunk-FCMSSE5W.js";import"./chunk-G3BDHYWP.js";import{c as Ce,d as U,f as H,h as N}from"./chunk-KMVDOPWF.js";import{a as I,d as De,e as K}from"./chunk-I6RUY6VJ.js";import{a as x,b as ze}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import{c as Z}from"./chunk-X3A3Q6RL.js";import{A as ye,I as Ie,K as xe,L as Te,S as Se,V as ke}from"./chunk-DEL7GGHP.js";import{e as se,i as ge}from"./chunk-UHCZASEU.js";import{Ga as we,J as _e,Ja as be,R as q,va as ve,w as de,wa as he,x as ue,z as fe}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as me,m as le,p as ce,q as pe,u as R}from"./chunk-O4W5DSIC.js";import{$b as Q,Ab as s,Eb as M,Fb as O,Gb as V,Hb as S,Ka as F,Mb as v,N as G,O as $,Ob as d,Pa as Y,Qa as l,Qc as re,Rb as te,S as J,Sb as ie,Tb as w,Ub as b,X as f,Xb as ae,Y as _,_b as ne,ac as r,da as D,eb as h,fb as L,jb as ee,kb as u,kc as oe,lc as A,ma as X,mc as E,nc as j,rb as y,xb as m,yb as n,zb as o,zc as C}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Me=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["image-accessibility-doc"]],standalone:!1,decls:85,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,i){a&1&&(n(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),o(),n(3,"p"),r(4,"The preview button is a native "),n(5,"i"),r(6,"button"),o(),r(7," element with an "),n(8,"i"),r(9,"aria-label"),o(),r(10," that refers to the "),n(11,"i"),r(12,"aria.zoomImage"),o(),r(13," property of the "),n(14,"a",0),r(15,"locale"),o(),r(16," API by default."),o(),n(17,"p"),r(18,"When preview is active, "),n(19,"i"),r(20,"dialog"),o(),r(21," role with "),n(22,"i"),r(23,"aria-modal"),o(),r(24," is applied to the overlay image container."),o(),n(25,"p"),r(26,"Button controls use "),n(27,"i"),r(28,"aria.rotateRight"),o(),r(29,", "),n(30,"i"),r(31,"aria.rotateLeft"),o(),r(32,", "),n(33,"i"),r(34,"aria.zoomIn"),o(),r(35,", "),n(36,"i"),r(37,"aria.zoomOut"),o(),r(38," and "),n(39,"i"),r(40,"aria.close"),o(),r(41," from the "),n(42,"a",0),r(43,"locale"),o(),r(44," API as "),n(45,"i"),r(46,"aria-label"),o(),r(47,"."),o(),n(48,"h3"),r(49,"ButtonBar Keyboard Support"),o(),n(50,"p"),r(51,"When preview is activated, close button receives the initial focus."),o(),n(52,"div",1)(53,"table",2)(54,"thead")(55,"tr")(56,"th"),r(57,"Key"),o(),n(58,"th"),r(59,"Function"),o()()(),n(60,"tbody")(61,"tr")(62,"td")(63,"i"),r(64,"tab"),o()(),n(65,"td"),r(66,"Moves focus through button bar."),o()(),n(67,"tr")(68,"td")(69,"i"),r(70,"enter"),o()(),n(71,"td"),r(72,"Activates the button."),o()(),n(73,"tr")(74,"td")(75,"i"),r(76,"space"),o()(),n(77,"td"),r(78,"Activates the button."),o()(),n(79,"tr")(80,"td")(81,"i"),r(82,"esc"),o()(),n(83,"td"),r(84,"Closes the image preview."),o()()()()()())},dependencies:[I],encapsulation:2})}return e})();var Pe=({dt:e})=>`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${e("image.preview.mask.color")};
    transition: background ${e("image.transition.duration")};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${e("image.preview.mask.background")};
}

.p-image-preview-icon {
    font-size: ${e("image.preview.icon.size")};
    width: ${e("image.preview.icon.size")};
    height: ${e("image.preview.icon.size")};
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: ${e("image.toolbar.position.top")};
    inset-inline-end: ${e("image.toolbar.position.right")};
    inset-inline-start: ${e("image.toolbar.position.left")};
    inset-block-end: ${e("image.toolbar.position.bottom")};
    display: flex;
    z-index: 1;
    padding: ${e("image.toolbar.padding")};
    background: ${e("image.toolbar.background")};
    backdrop-filter: blur(${e("image.toolbar.blur")});
    border-color: ${e("image.toolbar.border.color")};
    border-style: solid;
    border-width: ${e("image.toolbar.border.width")};
    border-radius: ${e("image.toolbar.border.radius")};
    gap: ${e("image.toolbar.gap")};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${e("image.action.color")};
    background: transparent;
    width: ${e("image.action.size")};
    height: ${e("image.action.size")};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${e("image.action.border.radius")};
    outline-color: transparent;
    transition: background ${e("image.transition.duration")}, color ${e("image.transition.duration")}, outline-color ${e("image.transition.duration")}, box-shadow ${e("image.transition.duration")};
}

.p-image-action:hover {
    color: ${e("image.action.hover.color")};
    background: ${e("image.action.hover.background")};
}

.p-image-action:focus-visible {
    box-shadow: ${e("toolbar.action.focus.ring.shadow")};
    outline: ${e("toolbar.action.focus.ring.width")} ${e("toolbar.action.focus.ring.style")} ${e("toolbar.action.focus.ring.color")};
    outline-offset: ${e("toolbar.action.focus.ring.offset")};
}

.p-image-action .p-icon {
    font-size: ${e("image.action.icon.size")};
    width: ${e("image.action.icon.size")};
    height: ${e("image.action.icon.size")};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`,$e={root:({props:e})=>["p-image p-component",{"p-image-preview":e.preview}],previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:({instance:e})=>["p-image-action p-image-zoom-out-button",{"p-disabled":e.isZoomOutDisabled}],zoomInButton:({instance:e})=>["p-image-action p-image-zoom-in-button",{"p-disabled":e.isZoomInDisabled}],closeButton:"p-image-action p-image-close-button",original:"p-image-original"},W=(()=>{class e extends we{name="image";theme=Pe;classes=$e;static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(e)))(i||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var Fe=["indicator"],Le=["rotaterighticon"],Qe=["rotatelefticon"],qe=["zoomouticon"],Ue=["zoominicon"],He=["closeicon"],Ne=["preview"],Ze=["image"],Ke=["mask"],We=["previewButton"],Ge=["closeButton"],Je=e=>({errorCallback:e}),Xe=(e,c)=>({height:e,width:c}),Ye=e=>({"p-image-action p-image-zoom-out-button":!0,"p-disabled":e}),et=e=>({"p-image-action p-image-zoom-in-button":!0,"p-disabled":e}),tt=(e,c)=>({showTransitionParams:e,hideTransitionParams:c}),it=e=>({value:"visible",params:e}),at=(e,c)=>({class:"p-image-original",style:e,previewCallback:c});function nt(e,c){if(e&1){let t=S();M(0),n(1,"img",9),v("error",function(i){f(t);let p=d();return _(p.imageError(i))}),o(),O()}if(e&2){let t=d();l(),Q(t.imageClass),m("ngStyle",t.imageStyle),y("src",t.src,F)("srcset",t.srcSet)("sizes",t.sizes)("alt",t.alt)("width",t.width)("height",t.height)("loading",t.loading)}}function ot(e,c){e&1&&V(0)}function rt(e,c){e&1&&V(0)}function mt(e,c){if(e&1&&(M(0),u(1,rt,1,0,"ng-container",12),O()),e&2){let t=d(2);l(),m("ngTemplateOutlet",t.indicatorTemplate||t._indicatorTemplate)}}function lt(e,c){e&1&&s(0,"EyeIcon",13),e&2&&m("styleClass","p-image-preview-icon")}function ct(e,c){if(e&1){let t=S();n(0,"button",10,0),v("click",function(){f(t);let i=d();return _(i.onImageClick())}),u(2,mt,2,1,"ng-container",11)(3,lt,1,1,"ng-template",null,1,C),o()}if(e&2){let t=ae(4),a=d();m("ngStyle",j(4,Xe,a.height+"px",a.width+"px")),y("aria-label",a.zoomImageAriaLabel),l(2),m("ngIf",a.indicatorTemplate||!a._indicatorTemplate)("ngIfElse",t)}}function pt(e,c){e&1&&s(0,"RefreshIcon")}function st(e,c){}function gt(e,c){e&1&&u(0,st,0,0,"ng-template")}function dt(e,c){e&1&&s(0,"UndoIcon")}function ut(e,c){}function ft(e,c){e&1&&u(0,ut,0,0,"ng-template")}function _t(e,c){e&1&&s(0,"SearchMinusIcon")}function vt(e,c){}function ht(e,c){e&1&&u(0,vt,0,0,"ng-template")}function wt(e,c){e&1&&s(0,"SearchPlusIcon")}function bt(e,c){}function yt(e,c){e&1&&u(0,bt,0,0,"ng-template")}function It(e,c){e&1&&s(0,"TimesIcon")}function xt(e,c){}function Tt(e,c){e&1&&u(0,xt,0,0,"ng-template")}function St(e,c){if(e&1){let t=S();M(0),n(1,"img",20),v("click",function(){f(t);let i=d(3);return _(i.onPreviewImageClick())}),o(),O()}if(e&2){let t=d(3);l(),m("ngStyle",t.imagePreviewStyle()),y("src",t.previewImageSrc?t.previewImageSrc:t.src,F)("srcset",t.previewImageSrcSet)("sizes",t.previewImageSizes)}}function kt(e,c){e&1&&V(0)}function Ct(e,c){if(e&1){let t=S();n(0,"div"),v("@animation.start",function(i){f(t);let p=d(2);return _(p.onAnimationStart(i))})("@animation.done",function(i){f(t);let p=d(2);return _(p.onAnimationEnd(i))}),u(1,St,2,4,"ng-container",5)(2,kt,1,0,"ng-container",6),o()}if(e&2){let t=d(2);m("@animation",E(7,it,j(4,tt,t.showTransitionOptions,t.hideTransitionOptions))),l(),m("ngIf",!t.previewTemplate&&!t._previewTemplate),l(),m("ngTemplateOutlet",t.previewTemplate||t._previewTemplate)("ngTemplateOutletContext",j(9,at,t.imagePreviewStyle(),t.onPreviewImageClick.bind(t)))}}function Et(e,c){if(e&1){let t=S();n(0,"div",14,2),v("click",function(){f(t);let i=d();return _(i.onMaskClick())})("keydown",function(i){f(t);let p=d();return _(p.onMaskKeydown(i))}),n(2,"div",15),v("click",function(i){f(t);let p=d();return _(p.handleToolbarClick(i))}),n(3,"button",16),v("click",function(){f(t);let i=d();return _(i.rotateRight())}),u(4,pt,1,0,"RefreshIcon",5)(5,gt,1,0,null,12),o(),n(6,"button",17),v("click",function(){f(t);let i=d();return _(i.rotateLeft())}),u(7,dt,1,0,"UndoIcon",5)(8,ft,1,0,null,12),o(),n(9,"button",18),v("click",function(){f(t);let i=d();return _(i.zoomOut())}),u(10,_t,1,0,"SearchMinusIcon",5)(11,ht,1,0,null,12),o(),n(12,"button",18),v("click",function(){f(t);let i=d();return _(i.zoomIn())}),u(13,wt,1,0,"SearchPlusIcon",5)(14,yt,1,0,null,12),o(),n(15,"button",19,3),v("click",function(){f(t);let i=d();return _(i.closePreview())}),u(17,It,1,0,"TimesIcon",5)(18,Tt,1,0,null,12),o()(),u(19,Ct,3,12,"div",5),o()}if(e&2){let t=d();y("aria-modal",t.maskVisible),l(3),y("aria-label",t.rightAriaLabel()),l(),m("ngIf",!t.rotateRightIconTemplate&&!t._rotateRightIconTemplate),l(),m("ngTemplateOutlet",t.rotateRightIconTemplate||t._rotateRightIconTemplate),l(),y("aria-label",t.leftAriaLabel()),l(),m("ngIf",!t.rotateLeftIconTemplate&&!t._rotateLeftIconTemplate),l(),m("ngTemplateOutlet",t.rotateLeftIconTemplate||t._rotateLeftIconTemplate),l(),m("ngClass",E(21,Ye,t.isZoomOutDisabled))("disabled",t.isZoomOutDisabled),y("aria-label",t.zoomOutAriaLabel()),l(),m("ngIf",!t.zoomOutIconTemplate&&!t._zoomOutIconTemplate),l(),m("ngTemplateOutlet",t.zoomOutIconTemplate||t._zoomOutIconTemplate),l(),m("ngClass",E(23,et,t.isZoomOutDisabled))("disabled",t.isZoomInDisabled),y("aria-label",t.zoomInAriaLabel()),l(),m("ngIf",!t.zoomInIconTemplate&&!t._zoomInIconTemplate),l(),m("ngTemplateOutlet",t.zoomInIconTemplate||t._zoomInIconTemplate),l(),y("aria-label",t.closeAriaLabel()),l(2),m("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),l(),m("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate),l(),m("ngIf",t.previewVisible)}}var T=(()=>{class e extends be{imageClass;imageStyle;styleClass;style;src;srcSet;sizes;previewImageSrc;previewImageSrcSet;previewImageSizes;alt;width;height;loading;appendTo;preview=!1;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";onShow=new D;onHide=new D;onImageError=new D;mask;previewButton;closeButton;indicatorTemplate;rotateRightIconTemplate;rotateLeftIconTemplate;zoomOutIconTemplate;zoomInIconTemplate;closeIconTemplate;previewTemplate;imageTemplate;maskVisible=!1;previewVisible=!1;rotate=0;scale=1;previewClick=!1;container;wrapper;_componentStyle=J(W);get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}zoomSettings={default:1,step:.1,max:1.5,min:.5};constructor(){super()}templates;_indicatorTemplate;_rotateRightIconTemplate;_rotateLeftIconTemplate;_zoomOutIconTemplate;_zoomInIconTemplate;_closeIconTemplate;_imageTemplate;_previewTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"indicator":this._indicatorTemplate=t.template;break;case"rotaterighticon":this._rotateRightIconTemplate=t.template;break;case"rotatelefticon":this._rotateLeftIconTemplate=t.template;break;case"zoomouticon":this._zoomOutIconTemplate=t.template;break;case"zoominicon":this._zoomInIconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"image":this._imageTemplate=t.template;break;case"preview":this._previewTemplate=t.template;break;default:this._indicatorTemplate=t.template;break}})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0,ue(void 0))}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onMaskKeydown(t){t.code==="Escape"&&(this.onMaskClick(),setTimeout(()=>{q(this.previewButton.nativeElement)},25),t.preventDefault())}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),setTimeout(()=>{q(this.closeButton.nativeElement)},25);break;case"void":de(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(t){switch(t.toState){case"void":Z.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({});break}}moveOnTop(){Z.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.document.body.appendChild(this.wrapper):_e(this.appendTo,this.wrapper))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}get zoomImageAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomImage:void 0}containerClass(){return{"p-image p-component":!0,"p-image-preview":this.preview}}handleToolbarClick(t){t.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default,fe(void 0)}imageError(t){this.onImageError.emit(t)}rightAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateRight:void 0}leftAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateLeft:void 0}zoomInAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomIn:void 0}zoomOutAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomOut:void 0}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onKeydownHandler(t){this.previewVisible&&this.closePreview()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["p-image"]],contentQueries:function(a,i,p){if(a&1&&te(p,Fe,4)(p,Le,4)(p,Qe,4)(p,qe,4)(p,Ue,4)(p,He,4)(p,Ne,4)(p,Ze,4)(p,ve,4),a&2){let g;w(g=b())&&(i.indicatorTemplate=g.first),w(g=b())&&(i.rotateRightIconTemplate=g.first),w(g=b())&&(i.rotateLeftIconTemplate=g.first),w(g=b())&&(i.zoomOutIconTemplate=g.first),w(g=b())&&(i.zoomInIconTemplate=g.first),w(g=b())&&(i.closeIconTemplate=g.first),w(g=b())&&(i.previewTemplate=g.first),w(g=b())&&(i.imageTemplate=g.first),w(g=b())&&(i.templates=g)}},viewQuery:function(a,i){if(a&1&&ie(Ke,5)(We,5)(Ge,5),a&2){let p;w(p=b())&&(i.mask=p.first),w(p=b())&&(i.previewButton=p.first),w(p=b())&&(i.closeButton=p.first)}},hostBindings:function(a,i){a&1&&v("keydown.escape",function(g){return i.onKeydownHandler(g)},Y)},inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",srcSet:"srcSet",sizes:"sizes",previewImageSrc:"previewImageSrc",previewImageSrcSet:"previewImageSrcSet",previewImageSizes:"previewImageSizes",alt:"alt",width:"width",height:"height",loading:"loading",appendTo:"appendTo",preview:[2,"preview","preview",re],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},features:[oe([W]),ee],decls:5,vars:11,consts:[["previewButton",""],["defaultTemplate",""],["mask",""],["closeButton",""],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-image-preview-mask",3,"ngStyle","click",4,"ngIf"],["class","p-image-mask p-overlay-mask p-overlay-mask-enter","role","dialog","pFocusTrap","",3,"click","keydown",4,"ngIf"],[3,"error","ngStyle"],["type","button",1,"p-image-preview-mask",3,"click","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"styleClass"],["role","dialog","pFocusTrap","",1,"p-image-mask","p-overlay-mask","p-overlay-mask-enter",3,"click","keydown"],[1,"p-image-toolbar",3,"click"],["type","button",1,"p-image-action","p-image-rotate-right-button",3,"click"],["type","button",1,"p-image-action","p-image-rotate-left-button",3,"click"],["type","button",3,"click","ngClass","disabled"],["type","button",1,"p-image-action","p-image-close-button",3,"click"],[1,"p-image-original",3,"click","ngStyle"]],template:function(a,i){a&1&&(n(0,"span",4),u(1,nt,2,10,"ng-container",5)(2,ot,1,0,"ng-container",6)(3,ct,5,7,"button",7)(4,Et,20,25,"div",8),o()),a&2&&(Q(i.styleClass),m("ngClass",i.containerClass())("ngStyle",i.style),l(),m("ngIf",!i.imageTemplate&&!i._imageTemplate),l(),m("ngTemplateOutlet",i.imageTemplate||i._imageTemplate)("ngTemplateOutletContext",E(9,Je,i.imageError.bind(i))),l(),m("ngIf",i.preview),l(),m("ngIf",i.maskVisible))},dependencies:[R,me,le,pe,ce,Ie,ye,ke,xe,Te,Se,Ee,he],encapsulation:2,data:{animation:[Ce("animation",[N("void => visible",[H({transform:"scale(0.7)",opacity:0}),U("{{showTransitionParams}}")]),N("visible => void",[U("{{hideTransitionParams}}",H({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return e})();var zt=()=>["/galleria"],Oe=(()=>{class e{code={basic:'<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />',html:`<div class="card flex justify-center">
    <p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
    selector: 'image-basic-demo',
    templateUrl: './image-basic-demo.html',
    standalone: true,
    imports: [Image]
})
export class ImageBasicDemo {}`};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["basic-doc"]],standalone:!1,decls:11,vars:3,consts:[[3,"routerLink"],[1,"card","flex","justify-center"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg","alt","Image","width","250"],["selector","image-basic-demo",3,"code"]],template:function(a,i){a&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Image is used as the native "),n(3,"i"),r(4,"img"),o(),r(5," element and supports all properties that the native element has. For multiple image, see "),n(6,"a",0),r(7,"Galleria."),o()()(),n(8,"div",1),s(9,"p-image",2),o(),s(10,"app-code",3)),a&2&&(l(6),m("routerLink",A(2,zt)),l(4),m("code",i.code))},dependencies:[se,T,x,I],encapsulation:2})}return e})();var Ve=(()=>{class e{code={typescript:"import { ImageModule } from 'primeng/image';"};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["image-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,i){a&1&&s(0,"app-code",0),a&2&&m("code",i.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2})}return e})();var Ae=(()=>{class e{code={basic:'<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />',html:`<div class="card flex justify-center">
    <p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
    selector: 'image-preview-demo',
    templateUrl: './image-preview-demo.html',
    standalone: true,
    imports: [Image]
})
export class ImagePreviewDemo {
}`,service:["PhotoService"]};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["image-preview-demo"]],standalone:!1,decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg","alt","Image","width","250",3,"preview"],["selector","image-preview-demo",3,"code"]],template:function(a,i){a&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming."),o()(),n(3,"div",0),s(4,"p-image",1),o(),s(5,"app-code",2)),a&2&&(l(4),m("preview",!0),l(),m("code",i.code))},dependencies:[T,x,I],encapsulation:2})}return e})();function Dt(e,c){e&1&&s(0,"i",6)}function Mt(e,c){e&1&&s(0,"img",7)}function Ot(e,c){if(e&1){let t=S();n(0,"img",8),v("click",function(){let i=f(t).previewCallback;return _(i())}),o()}if(e&2){let t=c.style;ne(t)}}var je=(()=>{class e{code={basic:`<p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
    <ng-template #indicator>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #image>
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
    </ng-template>
    <ng-template #preview let-style="style" let-previewCallback="previewCallback">
        <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
    </ng-template>
</p-image>`,html:`<div class="card flex justify-center">
    <p-image src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
        <ng-template #indicator>
            <i class="pi pi-search"></i>
        </ng-template>
        <ng-template #image>
            <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
        </ng-template>
        <ng-template #preview let-style="style" let-previewCallback="previewCallback">
            <img src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
        </ng-template>
    </p-image>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'image-template-demo',
    templateUrl: './image-template-demo.html',
    standalone: true,
    imports: [ImageModule]
})
export class ImageTemplateDemo {}`};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["template-doc"]],standalone:!1,decls:15,vars:2,consts:[["indicator",""],["image",""],["preview",""],[1,"card","flex","justify-center"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","Image","width","250",3,"preview"],["selector","image-template-demo",3,"code"],[1,"pi","pi-search"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","image","width","250"],["src","https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","image",3,"click"]],template:function(a,i){a&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"An eye icon is displayed by default when the image is hovered in preview mode. Use the "),n(3,"i"),r(4,"indicator"),o(),r(5," template for custom content."),o()(),n(6,"div",3)(7,"p-image",4),u(8,Dt,1,0,"ng-template",null,0,C)(10,Mt,1,0,"ng-template",null,1,C)(12,Ot,1,2,"ng-template",null,2,C),o()(),s(14,"app-code",5)),a&2&&(l(7),m("preview",!0),l(7),m("code",i.code))},dependencies:[T,x,I],encapsulation:2})}return e})();var Re=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=L({type:e});static \u0275inj=$({imports:[R,ge,T,ze,K,K]})}return e})();var Vt=()=>["Image"],Be=(()=>{class e{docs=[{id:"import",label:"Import",component:Ve},{id:"basic",label:"Basic",component:Oe},{id:"preview",label:"Preview",component:Ae},{id:"template",label:"Template",component:je},{id:"accessibility",label:"Accessibility",component:Me}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=h({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Image Component","header","Image","description","Displays an image with preview and tranformation options.","themeDocs","image",3,"docs","apiDocs"]],template:function(a,i){a&1&&s(0,"app-doc",0),a&2&&m("docs",i.docs)("apiDocs",A(2,Vt))},dependencies:[Re,De],encapsulation:2})}return e})();var Ui=[{path:"",component:Be}];export{Ui as default};
