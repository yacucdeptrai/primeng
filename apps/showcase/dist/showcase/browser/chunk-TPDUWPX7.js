import{a as O,b as Z}from"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as p,d as G,e as w}from"./chunk-I6RUY6VJ.js";import{a as f,b as N}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as C,ba as P}from"./chunk-DEL7GGHP.js";import"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as R}from"./chunk-O4W5DSIC.js";import{Ab as m,Hb as _,Mb as h,O as T,Qa as c,Sb as V,Tb as B,Ub as F,X as k,Y as M,ac as e,cc as q,eb as l,fb as A,fc as g,gc as S,hc as D,kb as I,lc as u,xb as s,yb as t,zb as o,zc as H}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class i{id;title;static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},standalone:!1,decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," Overlay component uses "),t(6,"i"),e(7,"dialog"),o(),e(8," role and since any attribute is passed to the root element you may define attributes like "),t(9,"i"),e(10,"aria-label"),o(),e(11," or "),t(12,"i"),e(13,"aria-labelledby"),o(),e(14," to describe the popup contents. In addition "),t(15,"i"),e(16,"aria-modal"),o(),e(17," is added since focus is kept within the popup. "),o(),t(18,"p"),e(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),e(21,"tabIndex"),o(),e(22," would be necessary. Overlay adds "),t(23,"i"),e(24,"aria-expanded"),o(),e(25," state attribute and "),t(26,"i"),e(27,"aria-controls"),o(),e(28," to the trigger so that the relation between the trigger and the popup is defined. "),o(),t(29,"h3"),e(30,"Overlay Keyboard Support"),o(),t(31,"p"),e(32," When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),t(33,"i"),e(34,"autofocus"),o(),e(35," to an element within the popup. "),o(),t(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),e(41,"Key"),o(),t(42,"th"),e(43,"Function"),o()()(),t(44,"tbody")(45,"tr")(46,"td")(47,"i"),e(48,"tab"),o()(),t(49,"td"),e(50,"Moves focus to the next the focusable element within the popup."),o()(),t(51,"tr")(52,"td")(53,"i"),e(54,"shift"),o(),e(55," + "),t(56,"i"),e(57,"tab"),o()(),t(58,"td"),e(59,"Moves focus to the previous the focusable element within the popup."),o()(),t(60,"tr")(61,"td")(62,"i"),e(63,"escape"),o()(),t(64,"td"),e(65,"Closes the popup and moves focus to the trigger."),o()()()()(),t(66,"h3"),e(67,"Close Button Keyboard Support"),o(),t(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),e(73,"Key"),o(),t(74,"th"),e(75,"Function"),o()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"i"),e(80,"enter"),o()(),t(81,"td"),e(82,"Closes the popup and moves focus to the trigger."),o()(),t(83,"tr")(84,"td")(85,"i"),e(86,"space"),o()(),t(87,"td"),e(88,"Closes the popup and moves focus to the trigger."),o()()()()()()())},dependencies:[p],encapsulation:2})}return i})();var W=(()=>{class i{code={typescript:`
import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

this.primeng.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["appendto-doc"]],standalone:!1,decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Overlay can be mounted into its location, body or DOM element instance using this option."),o()(),m(3,"app-code",0)),n&2&&(c(3),s("code",r.code)("hideToggleCode",!0))},dependencies:[f,p],encapsulation:2})}return i})();var j=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["auto-zindex-doc"]],standalone:!1,decls:6,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"autoZIndex"),o(),e(5," determines whether to automatically manage layering. Its default value is 'false'."),o()())},dependencies:[p],encapsulation:2})}return i})();var U=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["base-zindex-doc"]],standalone:!1,decls:6,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"baseZIndex"),o(),e(5," is base zIndex value to use in layering. Its default value is 0."),o()())},dependencies:[p],encapsulation:2})}return i})();var pe=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}),K=(()=>{class i{overlayVisible=!1;toggle(){this.overlayVisible=!this.overlayVisible}code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
    Content
</p-overlay>`,html:`
<div class="card flex justify-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
        Content
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-basic-demo',
    templateUrl: './overlay-basic-demo.html'
})
export class OverlayBasicDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["basic-doc"]],standalone:!1,decls:8,vars:4,consts:[[1,"card","flex","justify-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border",3,"visibleChange","visible","responsive"],["selector","overlay-basic-demo",3,"code"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component."),o()(),t(3,"div",0)(4,"p-button",1),h("click",function(){return r.toggle()}),o(),t(5,"p-overlay",2),D("visibleChange",function(b){return S(r.overlayVisible,b)||(r.overlayVisible=b),b}),e(6," Content "),o()(),m(7,"app-code",3)),n&2&&(c(5),g("visible",r.overlayVisible),s("responsive",u(3,pe)),c(2),s("code",r.code))},dependencies:[f,O,C,p],encapsulation:2})}return i})();var Q=(()=>{class i{code={typescript:`
import { OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { AnimationEvent } from '@angular/animations';

this.primeng.overlayOptions: OverlayOptions = {
    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.
    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.
    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.
    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.
    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.
    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["events-doc"]],standalone:!1,decls:2,vars:2,consts:[[1,"py-6"],[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"section",0),m(1,"app-code",1),o()),n&2&&(c(),s("code",r.code)("hideToggleCode",!0))},dependencies:[f],encapsulation:2})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["hide-on-escape-doc"]],standalone:!1,decls:9,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"hideOnEscape"),o(),e(5," determines to hide the overlay when escape key pressed. Accepts boolean, default value is "),t(6,"i"),e(7,"false"),o(),e(8,"."),o()())},dependencies:[p],encapsulation:2})}return i})();var J=(()=>{class i{id;title;code={typescript:"import { OverlayModule } from 'primeng/overlay';"};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&m(0,"app-code",0),n&2&&s("code",r.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return i})();var X=(()=>{class i{code={typescript:`
import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.overlayOptions: OverlayOptions = {
            mode: 'modal'
        };
    }
}`};code2={basic:`import { OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primeng.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["mode-doc"]],standalone:!1,decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," It has two valid values; "),t(3,"i"),e(4,"overlay"),o(),e(5," and "),t(6,"i"),e(7,"modal"),o(),e(8,". In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a dialog component. "),o()(),m(9,"app-code",0)),n&2&&(c(9),s("code",r.code)("hideToggleCode",!0))},dependencies:[f,p],encapsulation:2})}return i})();var se=["docsectiontext"],Y=(()=>{class i{id;title;docsectiontext;code={basic:`import { OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primeng.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["responsive-doc"]],viewQuery:function(n,r){if(n&1&&V(se,7),n&2){let y;B(y=F())&&(r.docsectiontext=y.first)}},inputs:{id:"id",title:"title"},standalone:!1,decls:43,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-section-description"],[1,"card"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"It is the option used to determine in which mode it should appear according to the given "),t(3,"i"),e(4,"media"),o(),e(5," or "),t(6,"i"),e(7,"breakpoint"),o(),e(8,"."),o()(),m(9,"app-code",0),t(10,"p",1),e(11,"Valid values of the "),t(12,"i"),e(13,"direction"),o(),e(14," property would be;"),o(),t(15,"div",2)(16,"ul")(17,"li"),e(18,"center (default)"),o(),t(19,"li"),e(20,"top"),o(),t(21,"li"),e(22,"top-start"),o(),t(23,"li"),e(24,"top-end"),o(),t(25,"li"),e(26,"bottom"),o(),t(27,"li"),e(28,"bottom-start"),o(),t(29,"li"),e(30,"bottom-end"),o(),t(31,"li"),e(32,"left"),o(),t(33,"li"),e(34,"left-start"),o(),t(35,"li"),e(36,"left-end"),o(),t(37,"li"),e(38,"right"),o(),t(39,"li"),e(40,"right-start"),o(),t(41,"li"),e(42,"right-end"),o()()()),n&2&&(c(9),s("code",r.code)("hideToggleCode",!0))},dependencies:[f,p],encapsulation:2})}return i})();var $=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["style-doc"]],standalone:!1,decls:15,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"style"),o(),e(5," and "),t(6,"i"),e(7,"styleClass"),o(),e(8," are used to define styles that will be added to all overlay components. In addition, it can be used in "),t(9,"i"),e(10,"contentStyle"),o(),e(11," and "),t(12,"i"),e(13,"contentStyleClass"),o(),e(14," classes."),o()())},dependencies:[p],encapsulation:2})}return i})();var ee=(()=>{class i{code={basic:`import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

this.primeng.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["target-doc"]],standalone:!1,decls:24,vars:0,consts:[[1,"card"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"target"),o(),e(5," is used to detect the element that will be used to position the overlay. Valid values would be;"),o()(),t(6,"div",0)(7,"ul")(8,"li"),e(9,"@prev (default)"),o(),t(10,"li"),e(11,"@next"),o(),t(12,"li"),e(13,"@parent"),o(),t(14,"li"),e(15,"@grandparent"),o(),t(16,"li"),e(17,"Use "),t(18,"em"),e(19,"CSS selector"),o()(),t(20,"li"),e(21,"Use "),t(22,"em"),e(23,"() => HTMLElement"),o()()()())},dependencies:[p],encapsulation:2})}return i})();var me=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"});function de(i,ae){if(i&1&&e(0),i&2){let a=ae.$implicit;q(" Content - ",a.mode," ")}}var te=(()=>{class i{overlayVisible=!1;toggle(){this.overlayVisible=!this.overlayVisible}code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
    <ng-template #content let-option>
        Content - {{option.mode}}
    </ng-template>
</p-overlay>`,html:`
<div class="card flex justify-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
        <ng-template #content let-option>
            Content - {{option.mode}}
        </ng-template>
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-template-demo',
    templateUrl: './overlay-template-demo.html'
})
export class OverlayTemplateDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["overlay-template-demo"]],standalone:!1,decls:12,vars:4,consts:[["content",""],[1,"card","flex","justify-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border",3,"visibleChange","visible","responsive"],["selector","overlay-template-demo",3,"code"]],template:function(n,r){if(n&1){let y=_();t(0,"app-docsectiontext")(1,"p"),e(2,"Content can be customized with the "),t(3,"i"),e(4,"content"),o(),e(5," template."),o()(),t(6,"div",1)(7,"p-button",2),h("click",function(){return r.toggle()}),o(),t(8,"p-overlay",3),D("visibleChange",function(E){return k(y),S(r.overlayVisible,E)||(r.overlayVisible=E),M(E)}),I(9,de,1,1,"ng-template",null,0,H),o()(),m(11,"app-code",4)}n&2&&(c(8),g("visible",r.overlayVisible),s("responsive",u(3,me)),c(3),s("code",r.code))},dependencies:[f,O,C,p],encapsulation:2})}return i})();var oe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["transition-options-doc"]],standalone:!1,decls:9,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Transition options of the show or hide animation. The default value of "),t(3,"i"),e(4,"showTransitionOptions"),o(),e(5," is '.12s cubic-bezier(0, 0, 0.2, 1)' and the default value of "),t(6,"i"),e(7,"hideTransitionOptions"),o(),e(8," is '.1s linear'."),o()())},dependencies:[p],encapsulation:2})}return i})();var ie=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[R,N,Z,P,w,w]})}return i})();var ce=()=>["Overlay","OverlayOptions"],ne=(()=>{class i{docs=[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:K},{id:"template",label:"Template",component:te},{id:"options",label:"Options",children:[{id:"mode",label:"Mode",component:X},{id:"responsive",label:"Responsive",component:Y},{id:"append-to",label:"AppendTo",component:W},{id:"target",label:"Target",component:ee},{id:"style",label:"Style",component:$},{id:"base-z-index",label:"BaseZIndex",component:U},{id:"auto-z-index",label:"AutoZIndex",component:j},{id:"hide-on-escape",label:"HideOnEscape",component:L},{id:"transition-options",label:"ShowTransitionOptions and HideTransitionOptions",component:oe},{id:"events",label:"Events",component:Q}]},{id:"accessibility",label:"Accessibility",component:z}];static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Overlay API - PrimeNG","header","Overlay API","description","This API allows overlay components to be controlled from the PrimeNG. In this way, all overlay components in the application can have the same behavior.","themeDocs","overlay",3,"docs","apiDocs"]],template:function(n,r){n&1&&m(0,"app-doc",0),n&2&&s("docs",r.docs)("apiDocs",u(2,ce))},dependencies:[ie,G],encapsulation:2})}return i})();var Et=[{path:"",component:ne}];export{Et as default};
