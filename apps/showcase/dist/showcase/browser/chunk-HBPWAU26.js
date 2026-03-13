import{a as x,d as be,e as W}from"./chunk-I6RUY6VJ.js";import{a as z,b as we}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as ve}from"./chunk-UHCZASEU.js";import{D as ye,G as F,Ga as Ce,Ja as X,W as ze,aa as L,da as _e,v as T,va as Ee,w as K,wa as N,y as q}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as he,l as fe,m as ge,p as Se,q as xe,u as M,y as Q}from"./chunk-O4W5DSIC.js";import{$b as O,Ab as g,Ec as de,Gb as te,Hb as ie,Ic as ue,M as J,Mb as G,N as Z,O as R,Ob as S,Pb as ne,Qa as c,Qb as le,Rb as re,Rc as U,S as ee,Sb as se,Tb as I,Ub as A,Vb as ae,Wb as oe,X as C,Y as w,Zb as pe,_b as y,ac as s,da as H,eb as m,fb as V,jb as B,kb as f,kc as ce,lc as u,ma as D,mc as me,rb as P,xb as p,yb as l,zb as r,zc as h}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var De=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["splitter-accessibility-doc"]],standalone:!1,decls:53,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(l(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),r(),l(4,"p"),s(5,"Splitter bar defines "),l(6,"i"),s(7,"separator"),r(),s(8," as the role with "),l(9,"i"),s(10,"aria-orientation"),r(),s(11," set to either horizontal or vertical."),r(),l(12,"h3"),s(13,"Keyboard Support"),r(),l(14,"div",0)(15,"table",1)(16,"thead")(17,"tr")(18,"th"),s(19,"Key"),r(),l(20,"th"),s(21,"Function"),r()()(),l(22,"tbody")(23,"tr")(24,"td")(25,"i"),s(26,"tab"),r()(),l(27,"td"),s(28,"Moves focus through the splitter bar."),r()(),l(29,"tr")(30,"td")(31,"i"),s(32,"down arrow"),r()(),l(33,"td"),s(34,"Moves a vertical splitter down."),r()(),l(35,"tr")(36,"td")(37,"i"),s(38,"up arrow"),r()(),l(39,"td"),s(40,"Moves a vertical splitter up."),r()(),l(41,"tr")(42,"td")(43,"i"),s(44,"left arrow"),r()(),l(45,"td"),s(46,"Moves a vertical splitter to the left."),r()(),l(47,"tr")(48,"td")(49,"i"),s(50,"right arrow"),r()(),l(51,"td"),s(52,"Moves a vertical splitter to the right."),r()()()()()()())},dependencies:[x],encapsulation:2})}return e})();var Ae=({dt:e})=>`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${e("splitter.border.color")};
    background: ${e("splitter.background")};
    border-radius: ${e("border.radius.md")};
    color: ${e("splitter.color")};
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: ${e("splitter.gutter.background")};
}

.p-splitter-gutter-handle {
    border-radius: ${e("splitter.handle.border.radius")};
    background: ${e("splitter.handle.background")};
    transition: outline-color ${e("splitter.transition.duration")}, box-shadow ${e("splitter.transition.duration")};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: ${e("splitter.handle.focus.ring.shadow")};
    outline: ${e("splitter.handle.focus.ring.width")} ${e("splitter.handle.focus.ring.style")} ${e("splitter.handle.focus.ring.color")};
    outline-offset: ${e("splitter.handle.focus.ring.offset")};
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: ${e("splitter.handle.size")};
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: ${e("splitter.handle.size")};
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
    flex-grow: 1;
    justify-content: center;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`,Ne={root:({props:e})=>["p-splitter p-component","p-splitter-"+e.layout],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Y=(()=>{class e extends Ce{name="splitter";theme=Ae;classes=Ne;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=Z({token:e,factory:e.\u0275fac})}return e})();var ke=["*"],$e=["panel"],He=["container"],Be=e=>({display:"flex","flex-wrap":"nowrap","flex-direction":e});function Ge(e,d){e&1&&te(0)}function Oe(e,d){if(e&1){let t=ie();l(0,"div",6),G("mousedown",function(n){C(t);let a=S().index,o=S();return w(o.onGutterMouseDown(n,a))})("touchstart",function(n){C(t);let a=S().index,o=S();return w(o.onGutterTouchStart(n,a))})("touchmove",function(n){C(t);let a=S(2);return w(a.onGutterTouchMove(n))})("touchend",function(n){C(t);let a=S(2);return w(a.onGutterTouchEnd(n))}),l(1,"div",7),G("keyup",function(n){C(t);let a=S(2);return w(a.onGutterKeyUp(n))})("keydown",function(n){C(t);let a=S().index,o=S();return w(o.onGutterKeyDown(n,a))}),r()()}if(e&2){let t=S(2);P("data-p-gutter-resizing",!1)("data-pc-section","gutter"),c(),p("ngStyle",t.gutterStyle()),P("aria-orientation",t.layout)("aria-valuenow",t.prevSize)("data-pc-section","gutterhandle")}}function Ue(e,d){if(e&1&&(l(0,"div",3),f(1,Ge,1,0,"ng-container",4),r(),f(2,Oe,2,6,"div",5)),e&2){let t=d.$implicit,i=d.index,n=S();O(n.panelStyleClass),p("ngClass",n.panelContainerClass())("ngStyle",n.panelStyle),P("data-pc-name","splitter")("data-pc-section","root"),c(),p("ngTemplateOutlet",t),c(),p("ngIf",i!==n.panels.length-1)}}var Qe=(()=>{class e extends X{splitter=ue(J(()=>v));nestedState=de(()=>this.splitter());static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=m({type:e,selectors:[["p-splitter-panel"]],contentQueries:function(i,n,a){i&1&&ae(a,n.splitter,v,5),i&2&&oe()},hostAttrs:[1,"p-splitterpanel"],features:[B],ngContentSelectors:ke,decls:1,vars:0,template:function(i,n){i&1&&(ne(),le(0))},dependencies:[M],encapsulation:2,changeDetection:0})}return e})(),v=(()=>{class e extends X{styleClass;panelStyleClass;style;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(t){if(this._panelSizes=t,this.el&&this.el.nativeElement&&this.panels.length>0){let i=[...this.el.nativeElement.children[0].children].filter(a=>T(a,"p-splitterpanel")),n=[];this.panels.map((a,o)=>{let b=(this.panelSizes.length-1>=o?this.panelSizes[o]:null)||100/this.panels.length;n[o]=b,i[o].style.flexBasis="calc("+b+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new H;onResizeStart=new H;containerViewChild;templates;panelChildren;nested=!1;panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=ee(Y);ngOnInit(){super.ngOnInit(),this.nested=this.isNested()}ngAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(t=>{t.getType()==="panel"?this.panels.push(t.template):this.panels.push(t.template)}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(t=>{this.panels.push(t)})}ngAfterViewInit(){if(super.ngAfterViewInit(),Q(this.platformId)&&this.panels&&this.panels.length){let t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){let i=[...this.el.nativeElement.children[0].children].filter(a=>T(a,"p-splitterpanel")),n=[];this.panels.map((a,o)=>{let b=(this.panelSizes.length-1>=o?this.panelSizes[o]:null)||100/this.panels.length;n[o]=b,i[o].style.flexBasis="calc("+b+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=n,this.prevSize=parseFloat(n[0]).toFixed(4)}}}resizeStart(t,i,n){this.gutterElement=t.currentTarget||t.target.parentElement,this.size=this.horizontal()?_e(this.containerViewChild.nativeElement):ze(this.containerViewChild.nativeElement),n||(this.dragging=!0,this.startPos=this.horizontal()?t instanceof MouseEvent?t.pageX:t.changedTouches[0].pageX:t instanceof MouseEvent?t.pageY:t.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,n?(this.prevPanelSize=this.horizontal()?F(this.prevPanelElement,!0):L(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?F(this.nextPanelElement,!0):L(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?F(this.prevPanelElement,!0):L(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?F(this.nextPanelElement,!0):L(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=i,K(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),K(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.containerViewChild.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:t,sizes:this._panelSizes})}onResize(t,i,n){let a,o,E;n?this.horizontal()?(o=100*(this.prevPanelSize+i)/this.size,E=100*(this.nextPanelSize-i)/this.size):(o=100*(this.prevPanelSize-i)/this.size,E=100*(this.nextPanelSize+i)/this.size):(this.horizontal()?ye(this.el.nativeElement)?a=(this.startPos-t.pageX)*100/this.size:a=(t.pageX-this.startPos)*100/this.size:a=(t.pageY-this.startPos)*100/this.size,o=this.prevPanelSize+a,E=this.nextPanelSize-a),this.prevSize=parseFloat(o).toFixed(4),this.validateResize(o,E)&&(this.prevPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+E+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=o,this._panelSizes[this.prevPanelIndex+1]=E)}resizeEnd(t){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:t,sizes:this._panelSizes}),q(this.gutterElement,"p-splitter-gutter-resizing"),q(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(t,i){this.resizeStart(t,i),this.bindMouseListeners()}onGutterTouchStart(t,i){t.cancelable&&(this.resizeStart(t,i),this.bindTouchListeners(),t.preventDefault())}onGutterTouchMove(t){this.onResize(t),t.preventDefault()}onGutterTouchEnd(t){this.resizeEnd(t),this.unbindTouchListeners(),t.cancelable&&t.preventDefault()}repeat(t,i,n){this.resizeStart(t,i,!0),this.onResize(t,n,!0)}setTimer(t,i,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(t,i,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(t){this.clearTimer(),this.resizeEnd(t)}onGutterKeyDown(t,i){switch(t.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(t,i,this.step*-1),t.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(t,i,this.step),t.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(t,i,this.step*-1),t.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(t,i,this.step),t.preventDefault();break}default:break}}validateResize(t,i){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>t||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>i)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",t=>{this.onResize(t)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",t=>{this.resizeEnd(t),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",t=>{this.onResize(t.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",t=>{this.resizeEnd(t),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let t=this.el.nativeElement.parentElement;for(;t&&!T(t,"p-splitter");)t=t.parentElement;return t!==null}else return!1}isStateful(){return this.stateKey!=null}getStorage(){if(Q(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView.localStorage;case"session":return this.document.defaultView.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let i=this.getStorage().getItem(this.stateKey);return i?(this._panelSizes=JSON.parse(i),[...this.containerViewChild.nativeElement.children].filter(a=>T(a,"p-splitterpanel")).forEach((a,o)=>{a.style.flexBasis="calc("+this._panelSizes[o]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":this.layout==="horizontal","p-splitter-vertical":this.layout==="vertical"}}panelContainerClass(){return{"p-splitterpanel":!0,"p-splitterpanel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=m({type:e,selectors:[["p-splitter"]],contentQueries:function(i,n,a){if(i&1&&re(a,Ee,4)(a,$e,4),i&2){let o;I(o=A())&&(n.templates=o),I(o=A())&&(n.panelChildren=o)}},viewQuery:function(i,n){if(i&1&&se(He,5),i&2){let a;I(a=A())&&(n.containerViewChild=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&pe("p-splitterpanel-nested",n.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",U],step:[2,"step","step",U],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[ce([Y]),B],decls:3,vars:12,consts:[["container",""],[3,"ngClass","ngStyle"],["ngFor","",3,"ngForOf"],["tabindex","-1",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter","role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",1,"p-splitter-gutter",3,"mousedown","touchstart","touchmove","touchend"],["tabindex","0",1,"p-splitter-gutter-handle",3,"keyup","keydown","ngStyle"]],template:function(i,n){i&1&&(l(0,"div",1,0),f(2,Ue,3,8,"ng-template",2),r()),i&2&&(y(me(10,Be,n.layout==="vertical"?"column":"")),O(n.styleClass),p("ngClass",n.containerClass())("ngStyle",n.style),P("data-pc-name","splitter")("data-p-gutter-resizing",!1)("data-pc-section","root"),c(2),p("ngForOf",n.panels))},dependencies:[M,he,fe,ge,xe,Se,N],encapsulation:2,changeDetection:0})}return e})(),Pe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=R({imports:[v,Qe,N,N]})}return e})();var Ke=()=>({height:"300px"});function qe(e,d){e&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function Xe(e,d){e&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var Me=(()=>{class e{code={basic:`<p-splitter [style]="{ height: '300px' }" styleClass="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" styleClass="mb-8">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-horizontal-demo',
    templateUrl: './splitter-horizontal-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterHorizontalDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["horizontal-doc"]],standalone:!1,decls:10,vars:4,consts:[["panel",""],[1,"card"],["styleClass","mb-8"],["selector","splitter-horizontal-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Splitter requires two SplitterPanel components as children which are displayed horizontally by default."),r()(),l(3,"div",1)(4,"p-splitter",2),f(5,qe,2,0,"ng-template",null,0,h)(7,Xe,2,0,"ng-template",null,0,h),r()(),g(9,"app-code",3)),i&2&&(c(4),y(u(3,Ke)),c(5),p("code",n.code))},dependencies:[z,x,v],encapsulation:2})}return e})();var Te=(()=>{class e{code={typescript:"import { SplitterModule } from 'primeng/splitter';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["splitter-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&g(0,"app-code",0),i&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[z],encapsulation:2})}return e})();var We=()=>({height:"300px"}),Fe=()=>[20,80],Ye=()=>[10,0],Je=()=>[50,50];function Ze(e,d){e&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function et(e,d){e&1&&(l(0,"div",6),s(1,"Panel 2"),r())}function tt(e,d){e&1&&(l(0,"div",4),s(1,"Panel 3"),r())}function it(e,d){e&1&&(l(0,"div",4),s(1,"Panel 4"),r())}function nt(e,d){e&1&&(l(0,"p-splitter",7),f(1,tt,2,0,"ng-template",null,0,h)(3,it,2,0,"ng-template",null,0,h),r()),e&2&&p("panelSizes",u(1,Fe))}function lt(e,d){e&1&&(l(0,"p-splitter",5),f(1,et,2,0,"ng-template",null,0,h)(3,nt,5,2,"ng-template",null,0,h),r()),e&2&&p("panelSizes",u(1,Je))}var Le=(()=>{class e{code={basic:`<p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" styleClass="mb-8">
    <ng-template #panel>
        <div class="col flex items-center justify-center">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <p-splitter layout="vertical" [panelSizes]="[50, 50]">
            <ng-template #panel>
                <div style="flex-grow: 1;" class="flex items-center justify-center">Panel 2</div>
            </ng-template>
            <ng-template #panel>
                <p-splitter [panelSizes]="[20, 80]">
                    <ng-template #panel>
                        <div class="col flex items-center justify-center">Panel 3</div>
                    </ng-template>
                    <ng-template #panel>
                        <div class="col flex items-center justify-center">Panel 4</div>
                    </ng-template>
                </p-splitter>
            </ng-template>
        </p-splitter>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" styleClass="mb-8">
        <ng-template #panel>
            <div class="col flex items-center justify-center">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <p-splitter layout="vertical" [panelSizes]="[50, 50]">
                <ng-template #panel>
                    <div style="flex-grow: 1;" class="flex items-center justify-center">Panel 2</div>
                </ng-template>
                <ng-template #panel>
                    <p-splitter [panelSizes]="[20, 80]">
                        <ng-template #panel>
                            <div class="col flex items-center justify-center">Panel 3</div>
                        </ng-template>
                        <ng-template #panel>
                            <div class="col flex items-center justify-center">Panel 4</div>
                        </ng-template>
                    </p-splitter>
                </ng-template>
            </p-splitter>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-nested-demo',
    templateUrl: './splitter-nested-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterNestedDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["nested-doc"]],standalone:!1,decls:10,vars:8,consts:[["panel",""],[1,"card"],["styleClass","mb-8",3,"panelSizes","minSizes"],["selector","splitter-nested-demo",3,"code"],[1,"col","flex","items-center","justify-center"],["layout","vertical",3,"panelSizes"],[1,"flex","items-center","justify-center",2,"flex-grow","1"],[3,"panelSizes"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Splitters can be combined to create advanced layouts."),r()(),l(3,"div",1)(4,"p-splitter",2),f(5,Ze,2,0,"ng-template",null,0,h)(7,lt,5,2,"ng-template",null,0,h),r()(),g(9,"app-code",3)),i&2&&(c(4),y(u(5,We)),p("panelSizes",u(6,Fe))("minSizes",u(7,Ye)),c(5),p("code",n.code))},dependencies:[z,x,v],encapsulation:2})}return e})();var rt=()=>({height:"300px"}),st=()=>[25,75];function at(e,d){e&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function ot(e,d){e&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var je=(()=>{class e{code={basic:`<p-splitter [panelSizes]="[25, 75]" [style]="{ height: '300px' }" styleClass="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [panelSizes]="[25, 75]" [style]="{ height: '300px' }" styleClass="mb-8">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-size-demo',
    templateUrl: './splitter-size-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterSizeDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["size-doc"]],standalone:!1,decls:13,vars:6,consts:[["panel",""],[1,"card"],["styleClass","mb-8",3,"panelSizes"],["selector","splitter-size-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"When no panelSizes are defined, panels are split 50/50, use the "),l(3,"i"),s(4,"panelSizes"),r(),s(5," property to give relative widths e.g. [25, 75]."),r()(),l(6,"div",1)(7,"p-splitter",2),f(8,at,2,0,"ng-template",null,0,h)(10,ot,2,0,"ng-template",null,0,h),r()(),g(12,"app-code",3)),i&2&&(c(7),y(u(4,rt)),p("panelSizes",u(5,st)),c(5),p("code",n.code))},dependencies:[z,x,v],encapsulation:2})}return e})();var pt=()=>({height:"300px"}),ct=()=>[50,50];function mt(e,d){e&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function dt(e,d){e&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var Re=(()=>{class e{code={basic:`<p-splitter [style]="{ height: '300px' }" styleClass="mb-8" layout="vertical">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" styleClass="mb-8" layout="vertical">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-vertical-demo',
    templateUrl: './splitter-vertical-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterVerticalDemo {}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["vertical-doc"]],standalone:!1,decls:16,vars:6,consts:[["panel",""],[1,"card"],["styleClass","mb-8","layout","vertical",3,"panelSizes"],["selector","splitter-vertical-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Panels are displayed as stacked by setting the "),l(3,"i"),s(4,"layout"),r(),s(5," to "),l(6,"i"),s(7,"vertical"),r(),s(8,"."),r()(),l(9,"div",1)(10,"p-splitter",2),f(11,mt,2,0,"ng-template",null,0,h)(13,dt,2,0,"ng-template",null,0,h),r()(),g(15,"app-code",3)),i&2&&(c(10),y(u(4,pt)),p("panelSizes",u(5,ct)),c(5),p("code",n.code))},dependencies:[z,x,v],encapsulation:2})}return e})();var Ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=R({imports:[M,we,W,Pe,ve,W]})}return e})();var ut=()=>["Splitter"],Ie=(()=>{class e{docs=[{id:"import",label:"Import",component:Te},{id:"horizontal",label:"Horizontal",component:Me},{id:"size",label:"Size",component:je},{id:"vertical",label:"Vertical",component:Re},{id:"nested",label:"Nested",component:Le},{id:"accessibility",label:"Accessibility",component:De}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Splitter Component","header","Splitter","description","Splitter is utilized to separate and resize panels.","themeDocs","splitter",3,"docs","apiDocs"]],template:function(i,n){i&1&&g(0,"app-doc",0),i&2&&p("docs",n.docs)("apiDocs",u(2,ut))},dependencies:[Ve,be],encapsulation:2})}return e})();var xi=[{path:"",component:Ie}];export{xi as default};
