import"./chunk-G3BDHYWP.js";import{c as dt,d as L,f as P,g as F,h as q}from"./chunk-KMVDOPWF.js";import{a as f,d as ft,e as A}from"./chunk-I6RUY6VJ.js";import{a as b,b as ut}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import{c as w}from"./chunk-X3A3Q6RL.js";import{aa as mt,y as pt}from"./chunk-DEL7GGHP.js";import{i as nt}from"./chunk-UHCZASEU.js";import{C as rt,Ga as at,Ja as ct,va as lt,wa as st}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as tt,m as et,p as ot,q as it,u as C,y as k}from"./chunk-O4W5DSIC.js";import{$b as W,Ab as a,Eb as R,Fb as z,Hb as Q,Mb as $,N as B,O as D,Ob as m,Qa as p,Rb as K,Rc as Y,S as N,Tb as M,Ub as I,X as x,Xb as G,Y as v,ac as i,eb as c,fb as E,jb as j,kb as y,kc as Z,lc as u,ma as T,mc as H,nc as J,rb as U,xb as s,yb as l,zb as n,zc as X}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var ht=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["scroll-top-accessibility-doc"]],standalone:!1,decls:38,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,r){o&1&&(l(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),n(),l(4,"p"),i(5," ScrollTop uses a button element with an "),l(6,"i"),i(7,"aria-label"),n(),i(8," that refers to the "),l(9,"i"),i(10,"aria.scrollTop"),n(),i(11," property of the "),l(12,"a",0),i(13,"locale"),n(),i(14," API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly. "),n()(),l(15,"h3"),i(16,"Keyboard Support"),n(),l(17,"div",1)(18,"table",2)(19,"thead")(20,"tr")(21,"th"),i(22,"Key"),n(),l(23,"th"),i(24,"Function"),n()()(),l(25,"tbody")(26,"tr")(27,"td")(28,"i"),i(29,"enter"),n()(),l(30,"td"),i(31,"Scrolls to top."),n()(),l(32,"tr")(33,"td")(34,"i"),i(35,"space"),n()(),l(36,"td"),i(37,"Scrolls to top."),n()()()()()())},dependencies:[f],encapsulation:2})}return t})();var Tt=({dt:t})=>`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-sticky.p-button:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}

/* For PrimeNG */
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
`,Ct={root:({props:t})=>["p-scrolltop",{"p-scrolltop-sticky":t.target!=="window"}],icon:"p-scrolltop-icon"},V=(()=>{class t extends at{name="scrolltop";theme=Tt;classes=Ct;static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var wt=["icon"],Dt=(t,d)=>({showTransitionParams:t,hideTransitionParams:d}),Et=t=>({value:"open",params:t}),Mt=()=>({styleClass:"p-scrolltop-icon"}),It=()=>({"font-size":"1rem",scale:"1.5"});function kt(t,d){if(t&1&&a(0,"span",7),t&2){let e=m(4);W(e._icon),s("ngClass","p-scrolltop-icon")}}function Lt(t,d){t&1&&a(0,"ChevronUpIcon",8),t&2&&s("styleClass","p-scrolltop-icon")("ngStyle",u(2,It))}function Pt(t,d){if(t&1&&(R(0),y(1,kt,1,3,"span",5)(2,Lt,1,3,"ChevronUpIcon",6),z()),t&2){let e=m(3);p(),s("ngIf",e._icon),p(),s("ngIf",!e._icon)}}function Ft(t,d){}function qt(t,d){if(t&1&&y(0,Ft,0,0,"ng-template",9),t&2){m(2);let e=G(2);s("ngIf",!e)}}function At(t,d){if(t&1&&y(0,Pt,3,2,"ng-container",3)(1,qt,1,1,null,4),t&2){let e=m(2);s("ngIf",!e.iconTemplate&&!e._iconTemplate),p(),s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",u(3,Mt))}}function Ot(t,d){if(t&1){let e=Q();l(0,"p-button",2),$("@animation.start",function(r){x(e);let g=m();return v(g.onEnter(r))})("@animation.done",function(r){x(e);let g=m();return v(g.onLeave(r))})("click",function(){x(e);let r=m();return v(r.onClick())}),y(1,At,2,4,"ng-template",null,0,X),n()}if(t&2){let e=m();s("@animation",H(8,Et,J(5,Dt,e.showTransitionOptions,e.hideTransitionOptions)))("styleClass",e.getStyleClass())("ngStyle",e.style)("buttonProps",e.buttonProps),U("aria-label",e.buttonAriaLabel)}}var _=(()=>{class t extends ct{styleClass;style;target="window";threshold=400;get icon(){return this._icon}behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";buttonAriaLabel;buttonProps={rounded:!0};iconTemplate;templates;_iconTemplate;_icon;set icon(e){this._icon=e}documentScrollListener;parentScrollListener;visible=!1;overlay;_componentStyle=N(V);ngOnInit(){super.ngOnInit(),this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}onClick(){(this.target==="window"?this.document.defaultView:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(e){switch(e.toState){case"open":this.overlay=e.element,w.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null;break}}onLeave(e){e.toState==="void"&&w.clear(e.element)}checkVisibility(e){e>this.threshold?this.visible=!0:this.visible=!1,this.cd.markForCheck()}bindParentScrollListener(){k(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){k(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.document.defaultView,"scroll",()=>{this.checkVisibility(rt())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}getStyleClass(){return`p-scrolltop p-button${this.styleClass?` ${this.styleClass}`:""}${this.target!=="window"?" p-scrolltop-sticky":""}`}ngOnDestroy(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.overlay&&(w.clear(this.overlay),this.overlay=null),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=T(t)))(r||t)}})();static \u0275cmp=c({type:t,selectors:[["p-scrollTop"],["p-scrolltop"],["p-scroll-top"]],contentQueries:function(o,r,g){if(o&1&&K(g,wt,4)(g,lt,4),o&2){let S;M(S=I())&&(r.iconTemplate=S.first),M(S=I())&&(r.templates=S)}},inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:[2,"threshold","threshold",Y],icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonAriaLabel:"buttonAriaLabel",buttonProps:"buttonProps"},features:[Z([V]),j],decls:1,vars:1,consts:[["icon",""],["type","button",3,"styleClass","ngStyle","buttonProps","click",4,"ngIf"],["type","button",3,"click","styleClass","ngStyle","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(o,r){o&1&&y(0,Ot,3,10,"p-button",1),o&2&&s("ngIf",r.visible)},dependencies:[C,tt,et,it,ot,pt,mt,st],encapsulation:2,data:{animation:[dt("animation",[F("void",P({opacity:0})),F("open",P({opacity:1})),q("void => open",L("{{showTransitionParams}}")),q("open => void",L("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})();var bt=(()=>{class t{code={basic:"<p-scrolltop />",html:`<div class="card flex flex-col items-center">
    <p>Scroll down the page to display the ScrollTo component.</p>
    <i class="pi pi-angle-down animate-fadeout animate-duration-1000 animate-infinite" style="fontsize: 2rem"></i>
    <p-scrolltop />
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
    selector: 'scroll-top-basic-demo',
    templateUrl: './scroll-top-basic-demo.html',
    standalone: true,
    imports: [ScrollTop]
})
export class ScrollTopBasicDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:1,consts:[[1,"card","flex","flex-col","items-center"],[1,"pi","pi-angle-down","animate-fadeout","animate-duration-1000","animate-infinite",2,"fontsize","2rem","margin-bottom","30rem"],["selector","scroll-top-basic-demo",3,"code"]],template:function(o,r){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"ScrollTop listens window scroll by default."),n()(),l(3,"div",0)(4,"p"),i(5,"Scroll down the page to display the ScrollTo component."),n(),a(6,"i",1)(7,"p-scrolltop"),n(),a(8,"app-code",2)),o&2&&(p(8),s("code",r.code))},dependencies:[b,f,_],encapsulation:2})}return t})();var Vt=()=>({severity:"contrast",raised:!0,rounded:!0}),_t=(()=>{class t{code={basic:`<p-scrolltop target="parent" [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />`,html:`<div class="card">
    <div style="width: 250px; height: 200px; overflow: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
            adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue
            mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan
            in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
        </p>
        <p-scrolltop target="parent" [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
    selector: 'scroll-top-element-demo',
    templateUrl: './scroll-top-element-demo.html',
    standalone: true,
    imports: [ScrollTop]
})
export class ScrollTopElementDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["element-doc"]],standalone:!1,decls:15,vars:4,consts:[[1,"card","flex","justify-center"],[2,"width","250px","height","200px","overflow","auto"],["target","parent","icon","pi pi-arrow-up",3,"threshold","buttonProps"],["selector","scroll-top-element-demo",3,"code"]],template:function(o,r){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"Setting the "),l(3,"i"),i(4,"target"),n(),i(5," property to "),l(6,"i"),i(7,"parent"),n(),i(8," binds ScrollTop to its parent element that has scrolling content."),n()(),l(9,"div",0)(10,"div",1)(11,"p"),i(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. "),n(),a(13,"p-scrolltop",2),n()(),a(14,"app-code",3)),o&2&&(p(13),s("threshold",100)("buttonProps",u(3,Vt)),p(),s("code",r.code))},dependencies:[b,f,_],encapsulation:2})}return t})();var St=(()=>{class t{code={typescript:"import { ScrollTopModule } from 'primeng/scrolltop';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["scroll-top-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&a(0,"app-code",0),o&2&&s("code",r.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return t})();var xt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=E({type:t});static \u0275inj=D({imports:[C,nt,ut,A,_,A]})}return t})();var Bt=()=>["ScrollTop"],vt=(()=>{class t{docs=[{id:"import",label:"Import",component:St},{id:"basic",label:"Basic",component:bt},{id:"element",label:"Target Element",component:_t},{id:"accessibility",label:"Accessibility",component:ht}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Scroll Top Component","header","ScrollTop","description","ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.","themeDocs","scrollTop",3,"docs","apiDocs"]],template:function(o,r){o&1&&a(0,"app-doc",0),o&2&&s("docs",r.docs)("apiDocs",u(2,Bt))},dependencies:[xt,ft],styles:["[_nghost-%COMP%]     .custom-scrolltop{width:2rem;height:2rem;border-radius:4px;background-color:var(--primary-color)}[_nghost-%COMP%]     .custom-scrolltop:hover{background-color:var(--primary-color)}[_nghost-%COMP%]     .custom-scrolltop .p-scrolltop-icon{font-size:1rem;color:var(--primary-color-text)}"]})}return t})();var Be=[{path:"",component:vt}];export{Be as default};
