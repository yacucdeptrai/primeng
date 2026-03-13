import './polyfills.server.mjs';
import{a as v,d as me,e as k}from"./chunk-HZSAMTDM.mjs";import{a as x,b as ue}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import{Ga as se,Ja as ce,W as ne,oa as ae,va as le,w as b,wa as re,y as w}from"./chunk-YQJJ7I3T.mjs";import{j as oe}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{A as ie,k as J,q as ee,r as te,v as _}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as n,Db as a,Eb as d,Kb as $,N as Y,O as T,Qb as E,S as A,Sa as c,Tb as Q,Ub as W,Vb as j,Wb as K,Xb as h,Yb as f,_c as G,cc as B,dc as O,ea as R,ec as l,gb as u,hb as P,lb as I,ma as D,mb as U,oc as Z,pc as q,vb as y,wb as N,xb as H}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var pe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["scroll-panel-accessibility-doc"]],standalone:!1,decls:50,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),a(),n(4,"p"),l(5," Scrollbars of the ScrollPanel has a "),n(6,"i"),l(7,"scrollbar"),a(),l(8," role along with the "),n(9,"i"),l(10,"aria-controls"),a(),l(11," attribute that refers to the id of the scrollable content container and the "),n(12,"i"),l(13,"aria-orientation"),a(),l(14," to indicate the orientation of scrolling. "),a(),n(15,"h3"),l(16,"Header Keyboard Support"),a(),n(17,"div",0)(18,"table",1)(19,"thead")(20,"tr")(21,"th"),l(22,"Key"),a(),n(23,"th"),l(24,"Function"),a()()(),n(25,"tbody")(26,"tr")(27,"td")(28,"i"),l(29,"down arrow"),a()(),n(30,"td"),l(31,"Scrolls content down when vertical scrolling is available."),a()(),n(32,"tr")(33,"td")(34,"i"),l(35,"up arrow"),a()(),n(36,"td"),l(37,"Scrolls content up when vertical scrolling is available."),a()(),n(38,"tr")(39,"td")(40,"i"),l(41,"left"),a()(),n(42,"td"),l(43,"Scrolls content left when horizontal scrolling is available."),a()(),n(44,"tr")(45,"td")(46,"i"),l(47,"right"),a()(),n(48,"td"),l(49,"Scrolls content right when horizontal scrolling is available."),a()()()()()()())},dependencies:[v],encapsulation:2})}return t})();var Se=({dt:t})=>`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * ${t("scrollpanel.bar.size")}));
    width: calc(100% + calc(2 * ${t("scrollpanel.bar.size")}));
    padding-inline: 0 calc(2 * ${t("scrollpanel.bar.size")});
    padding-block: 0 calc(2 * ${t("scrollpanel.bar.size")});
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: ${t("scrollpanel.bar.border.radius")};
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color ${t("scrollpanel.transition.duration")};
    background: ${t("scrollpanel.bar.background")};
    border: 0 none;
    transition: outline-color ${t("scrollpanel.transition.duration")}, opacity ${t("scrollpanel.transition.duration")};
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: ${t("scrollpanel.bar.focus.ring.shadow")};
    outline: ${t("scrollpanel.barfocus.ring.width")} ${t("scrollpanel.bar.focus.ring.style")} ${t("scrollpanel.bar.focus.ring.color")};
    outline-offset: ${t("scrollpanel.barfocus.ring.offset")};
}

.p-scrollpanel-bar-y {
    width: ${t("scrollpanel.bar.size")};
    top: 0;
}

.p-scrollpanel-bar-x {
    height: ${t("scrollpanel.bar.size")};
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`,Ce={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},V=(()=>{class t extends se{name="scrollpanel";theme=Se;classes=Ce;static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})();var de=["content"],Me=["container"],De=["xBar"],Ee=["yBar"],Be=["*"];function _e(t,we){t&1&&W(0)}function Le(t,we){t&1&&$(0)}var S=(()=>{class t extends ce{style;styleClass;step=5;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;contentTemplate;templates;_contentTemplate;scrollYRatio;scrollXRatio;timeoutFrame=e=>setTimeout(e,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;lastScrollLeft=0;lastScrollTop=0;orientation="vertical";timer;contentId;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;_componentStyle=A(V);zone=A(R);ngOnInit(){super.ngOnInit(),this.contentId=ae("pn_id_")+"_content"}ngAfterViewInit(){super.ngAfterViewInit(),ie(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}calculateContainerHeight(){let e=this.containerViewChild.nativeElement,i=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,s=this.document.defaultView,r=s.getComputedStyle(e),M=s.getComputedStyle(o),p=ne(e)-parseInt(M.height,10);r["max-height"]!="none"&&p==0&&(i.offsetHeight+parseInt(M.height,10)>parseInt(r["max-height"],10)?e.style.height=r["max-height"]:e.style.height=i.offsetHeight+parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth)+"px")}moveBar(){let e=this.containerViewChild.nativeElement,i=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,s=i.scrollWidth,r=i.clientWidth,M=(e.clientHeight-o.clientHeight)*-1;this.scrollXRatio=r/s;let p=this.yBarViewChild.nativeElement,z=i.scrollHeight,X=i.clientHeight,xe=(e.clientWidth-p.clientWidth)*-1;this.scrollYRatio=X/z,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)o.setAttribute("data-p-scrollpanel-hidden","true"),b(o,"p-scrollpanel-hidden");else{o.setAttribute("data-p-scrollpanel-hidden","false"),w(o,"p-scrollpanel-hidden");let C=Math.max(this.scrollXRatio*100,10),L=Math.abs(i.scrollLeft*(100-C)/(s-r));o.style.cssText="width:"+C+"%; inset-inline-start:"+L+"%;bottom:"+M+"px;"}if(this.scrollYRatio>=1)p.setAttribute("data-p-scrollpanel-hidden","true"),b(p,"p-scrollpanel-hidden");else{p.setAttribute("data-p-scrollpanel-hidden","false"),w(p,"p-scrollpanel-hidden");let C=Math.max(this.scrollYRatio*100,10),L=i.scrollTop*(100-C)/(z-X);p.style.cssText="height:"+C+"%; top: calc("+L+"% - "+o.clientHeight+"px); inset-inline-end:"+xe+"px;"}}),this.cd.markForCheck()}onScroll(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()}onKeyDown(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}default:break}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}default:break}}onKeyUp(){this.clearTimer()}repeat(e,i){this.contentViewChild.nativeElement[e]+=i,this.moveBar()}setTimer(e,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=e=>{this.onDocumentMouseMove(e)},this.document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=e=>{this.onDocumentMouseUp(e)},this.document.addEventListener("mouseup",this.documentMouseUpListener))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)}onYBarMouseDown(e){this.isYBarClicked=!0,this.yBarViewChild.nativeElement.focus(),this.lastPageY=e.pageY,this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","true"),b(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","true"),b(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onXBarMouseDown(e){this.isXBarClicked=!0,this.xBarViewChild.nativeElement.focus(),this.lastPageX=e.pageX,this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),b(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),b(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))}onMouseMoveForXBar(e){let i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=i/this.scrollXRatio})}onMouseMoveForYBar(e){let i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=i/this.scrollYRatio})}scrollTop(e){let i=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;e=e>i?i:e>0?e:0,this.contentViewChild.nativeElement.scrollTop=e}onFocus(e){this.xBarViewChild.nativeElement.isSameNode(e.target)?this.orientation="horizontal":this.yBarViewChild.nativeElement.isSameNode(e.target)&&(this.orientation="vertical")}onBlur(){this.orientation==="horizontal"&&(this.orientation="vertical")}onDocumentMouseUp(e){this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(e){(window.requestAnimationFrame||this.timeoutFrame)(e)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=D(t)))(o||t)}})();static \u0275cmp=u({type:t,selectors:[["p-scroll-panel"],["p-scrollPanel"],["p-scrollpanel"]],contentQueries:function(i,o,s){if(i&1&&j(s,de,4)(s,le,4),i&2){let r;h(r=f())&&(o.contentTemplate=r.first),h(r=f())&&(o.templates=r)}},viewQuery:function(i,o){if(i&1&&K(Me,5)(de,5)(De,5)(Ee,5),i&2){let s;h(s=f())&&(o.containerViewChild=s.first),h(s=f())&&(o.contentViewChild=s.first),h(s=f())&&(o.xBarViewChild=s.first),h(s=f())&&(o.yBarViewChild=s.first)}},inputs:{style:"style",styleClass:"styleClass",step:[2,"step","step",G]},features:[Z([V]),I],ngContentSelectors:Be,decls:11,vars:17,consts:[["container",""],["content",""],["xBar",""],["yBar",""],[3,"ngClass","ngStyle"],[1,"p-scrollpanel-content-container"],[1,"p-scrollpanel-content",3,"mouseenter","scroll"],[4,"ngTemplateOutlet"],["tabindex","0","role","scrollbar",1,"p-scrollpanel-bar","p-scrollpanel-bar-x",3,"mousedown","keydown","keyup","focus","blur"],["tabindex","0","role","scrollbar",1,"p-scrollpanel-bar","p-scrollpanel-bar-y",3,"mousedown","keydown","keyup","focus"]],template:function(i,o){i&1&&(Q(),n(0,"div",4,0)(2,"div",5)(3,"div",6,1),E("mouseenter",function(){return o.moveBar()})("scroll",function(r){return o.onScroll(r)}),N(5,_e,1,0),U(6,Le,1,0,"ng-container",7),a()(),n(7,"div",8,2),E("mousedown",function(r){return o.onXBarMouseDown(r)})("keydown",function(r){return o.onKeyDown(r)})("keyup",function(){return o.onKeyUp()})("focus",function(r){return o.onFocus(r)})("blur",function(){return o.onBlur()}),a(),n(9,"div",9,3),E("mousedown",function(r){return o.onYBarMouseDown(r)})("keydown",function(r){return o.onKeyDown(r)})("keyup",function(){return o.onKeyUp()})("focus",function(r){return o.onFocus(r)}),a()()),i&2&&(O(o.styleClass),m("ngClass","p-scrollpanel p-component")("ngStyle",o.style),y("data-pc-name","scrollpanel"),c(2),y("data-pc-section","wrapper"),c(),y("data-pc-section","content"),c(2),H(!o.contentTemplate&&!o._contentTemplate?5:-1),c(),m("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),c(),y("aria-orientation","horizontal")("aria-valuenow",o.lastScrollLeft)("data-pc-section","barx")("aria-controls",o.contentId),c(2),y("aria-orientation","vertical")("aria-valuenow",o.lastScrollTop)("data-pc-section","bary")("aria-controls",o.contentId))},dependencies:[_,J,te,ee,re],encapsulation:2,changeDetection:0})}return t})();var Te=()=>({width:"100%",height:"150px"}),be=(()=>{class t{code={basic:`<p-scrollpanel [style]="{ width: '100%', height: '150px' }">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>`,html:`<div class="card">
    <p-scrollpanel [style]="{ width: '100%', height: '150px' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-scrollpanel>
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector: 'scroll-panel-basic-demo',
    templateUrl: './scroll-panel-basic-demo.html',
    standalone: true,
    imports: [ScrollPanelModule]
})
export class ScrollPanelBasicDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:4,consts:[[1,"card"],[1,"m-0"],["selector","scroll-panel-basic-demo",3,"code"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"ScrollPanel is defined using dimensions for the scrollable viewport."),a()(),n(3,"div",0)(4,"p-scrollpanel")(5,"p"),l(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a(),n(7,"p"),l(8," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a(),n(9,"p",1),l(10," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()(),d(11,"app-code",2)),i&2&&(c(4),B(q(3,Te)),c(7),m("code",o.code))},dependencies:[x,v,S],encapsulation:2})}return t})();var Ae=()=>({width:"100%",height:"200px"}),ve=(()=>{class t{code={basic:`<p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>`,html:`<div class="card">
    <p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-scrollpanel>
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector: 'scroll-panel-custom-demo',
    templateUrl: './scroll-panel-custom-demo.html',
    standalone: true,
    imports: [ScrollPanelModule],
    styles: [ \`:host ::ng-deep {
    .p-scrollpanel {
        &.custombar {
            .p-scrollpanel-bar {
                background-color: var(--p-primary-color);
            }
        }
    }
}\`
    ],
})
export class ScrollPanelCustomDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["custom-doc"]],standalone:!1,decls:18,vars:4,consts:[[1,"card"],["selector","scroll-panel-custom-demo",3,"code"]],template:function(i,o){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"Scrollbar visuals can be styled for a unified look across different platforms."),a()(),n(3,"div",0)(4,"p-scrollpanel")(5,"p"),l(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a(),n(7,"p"),l(8," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a(),n(9,"p"),l(10," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a(),n(11,"p"),l(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a(),n(13,"p"),l(14," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a(),n(15,"p"),l(16," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()(),d(17,"app-code",1)),i&2&&(c(4),B(q(3,Ae)),c(13),m("code",o.code))},dependencies:[x,v,S],styles:["[_nghost-%COMP%]     .p-scrollpanel.custombar .p-scrollpanel-bar{background-color:var(--p-primary-color)}"]})}return t})();var ge=(()=>{class t{code={typescript:"import { ScrollPanelModule } from 'primeng/scrollpanel';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["scroll-panel-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&d(0,"app-code",0),i&2&&m("code",o.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2})}return t})();var ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=T({imports:[_,ue,k,S,oe,k]})}return t})();var Pe=()=>["ScrollPanel"],qe=(()=>{class t{docs=[{id:"import",label:"Import",component:ge},{id:"basic",label:"Basic",component:be},{id:"custom",label:"Custom",component:ve},{id:"accessibility",label:"Accessibility",component:pe}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Scroll Panel Component","header","ScrollPanel","description","ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.","themeDocs","scrollpanel",3,"docs","apiDocs"]],template:function(i,o){i&1&&d(0,"app-doc",0),i&2&&m("docs",o.docs)("apiDocs",q(2,Pe))},dependencies:[ye,me],encapsulation:2})}return t})();var Lt=[{path:"",component:qe}];export{Lt as default};
