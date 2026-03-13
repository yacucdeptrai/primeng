import{c as q,d as R,f as S,g as Tt,h as E,j as xt,l as Ct}from"./chunk-KMVDOPWF.js";import{c as A}from"./chunk-X3A3Q6RL.js";import{F as _t,S as bt,T as yt,u as gt,z as ft}from"./chunk-DEL7GGHP.js";import{Ga as ht,Ja as B,e as lt,na as mt,oa as pt,qa as ut,va as dt,wa as C}from"./chunk-HJ3EJAPD.js";import{j as L,l as nt,m as at,p as rt,q as ct,u as j}from"./chunk-O4W5DSIC.js";import{$b as O,Ab as u,Eb as J,Fb as K,Gb as F,Hb as z,Mb as $,N as Y,O as H,Ob as c,Qa as r,Qc as k,Rb as W,Rc as x,S as v,Sb as Q,Tb as _,Ub as b,X as h,Y as g,Za as U,_b as tt,ac as Z,bc as et,cc as ot,da as V,ea as X,eb as M,fb as G,jb as D,kb as f,kc as P,ma as I,mc as N,nc as st,pc as it,rb as l,sb as y,tb as T,xb as a,yb as m,zb as p}from"./chunk-DNC77BQZ.js";var It=({dt:t})=>`
.p-toast {
    width: ${t("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${t("toast.icon.size")};
    width: ${t("toast.icon.size")};
    height: ${t("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${t("toast.content.padding")};
    gap: ${t("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${t("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${t("toast.summary.font.weight")};
    font-size: ${t("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${t("toast.detail.font.weight")};
    font-size: ${t("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${t("toast.transition.duration")}, color ${t("toast.transition.duration")}, outline-color ${t("toast.transition.duration")}, box-shadow ${t("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${t("toast.close.button.width")};
    height: ${t("toast.close.button.height")};
    border-radius: ${t("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${t("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${t("toast.blur")});
    border-radius: ${t("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${t("toast.close.icon.size")};
    width: ${t("toast.close.icon.size")};
    height: ${t("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${t("focus.ring.width")};
    outline-style: ${t("focus.ring.style")};
    outline-offset: ${t("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${t("toast.info.background")};
    border-color: ${t("toast.info.border.color")};
    color: ${t("toast.info.color")};
    box-shadow: ${t("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${t("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.info.close.button.focus.ring.color")};
    box-shadow: ${t("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${t("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${t("toast.success.background")};
    border-color: ${t("toast.success.border.color")};
    color: ${t("toast.success.color")};
    box-shadow: ${t("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${t("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.success.close.button.focus.ring.color")};
    box-shadow: ${t("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${t("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${t("toast.warn.background")};
    border-color: ${t("toast.warn.border.color")};
    color: ${t("toast.warn.color")};
    box-shadow: ${t("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${t("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${t("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${t("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${t("toast.error.background")};
    border-color: ${t("toast.error.border.color")};
    color: ${t("toast.error.color")};
    box-shadow: ${t("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${t("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.error.close.button.focus.ring.color")};
    box-shadow: ${t("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${t("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${t("toast.secondary.background")};
    border-color: ${t("toast.secondary.border.color")};
    color: ${t("toast.secondary.color")};
    box-shadow: ${t("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${t("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${t("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${t("toast.contrast.background")};
    border-color: ${t("toast.contrast.border.color")};
    color: ${t("toast.contrast.color")};
    box-shadow: ${t("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${t("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${t("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,$t={root:({instance:t})=>{let{_position:i}=t;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},Ot={root:({instance:t})=>({"p-toast p-component":!0,[`p-toast-${t._position}`]:!!t._position}),message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},w=(()=>{class t extends ht{name="toast";theme=It;classes=Ot;inlineStyles=$t;static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275prov=Y({token:t,factory:t.\u0275fac})}return t})();var wt=["container"],kt=(t,i,e,s)=>({showTransformParams:t,hideTransformParams:i,showTransitionParams:e,hideTransitionParams:s}),St=t=>({value:"visible",params:t}),Et=(t,i)=>({$implicit:t,closeFn:i}),At=t=>({$implicit:t});function Vt(t,i){t&1&&F(0)}function Mt(t,i){if(t&1&&f(0,Vt,1,0,"ng-container",3),t&2){let e=c();a("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",st(2,Et,e.message,e.onCloseIconClick))}}function Dt(t,i){if(t&1&&u(0,"span",4),t&2){let e=c(3);a("ngClass",e.cx("messageIcon"))}}function Ft(t,i){t&1&&u(0,"CheckIcon"),t&2&&l("aria-hidden",!0)("data-pc-section","icon")}function zt(t,i){t&1&&u(0,"InfoCircleIcon"),t&2&&l("aria-hidden",!0)("data-pc-section","icon")}function Qt(t,i){t&1&&u(0,"TimesCircleIcon"),t&2&&l("aria-hidden",!0)("data-pc-section","icon")}function Zt(t,i){t&1&&u(0,"ExclamationTriangleIcon"),t&2&&l("aria-hidden",!0)("data-pc-section","icon")}function Pt(t,i){t&1&&u(0,"InfoCircleIcon"),t&2&&l("aria-hidden",!0)("data-pc-section","icon")}function Nt(t,i){if(t&1&&(m(0,"span",4),y(1,Ft,1,2,"CheckIcon")(2,zt,1,2,"InfoCircleIcon")(3,Qt,1,2,"TimesCircleIcon")(4,Zt,1,2,"ExclamationTriangleIcon")(5,Pt,1,2,"InfoCircleIcon"),p()),t&2){let e,s=c(3);a("ngClass",s.cx("messageIcon")),l("aria-hidden",!0)("data-pc-section","icon"),r(),T((e=s.message.severity)==="success"?1:e==="info"?2:e==="error"?3:e==="warn"?4:5)}}function Lt(t,i){if(t&1&&(J(0),f(1,Dt,1,1,"span",6)(2,Nt,6,4,"span",6),m(3,"div",4)(4,"div",4),Z(5),p(),m(6,"div",4),Z(7),p()(),K()),t&2){let e=c(2);r(),a("ngIf",e.message.icon),r(),a("ngIf",!e.message.icon),r(),a("ngClass",e.cx("messageText")),l("data-pc-section","text"),r(),a("ngClass",e.cx("summary")),l("data-pc-section","summary"),r(),ot(" ",e.message.summary," "),r(),a("ngClass",e.cx("detail")),l("data-pc-section","detail"),r(),et(e.message.detail)}}function jt(t,i){t&1&&F(0)}function Bt(t,i){if(t&1&&u(0,"span",4),t&2){let e=c(4);a("ngClass",e.cx("closeIcon"))}}function qt(t,i){if(t&1&&f(0,Bt,1,1,"span",6),t&2){let e=c(3);a("ngIf",e.message.closeIcon)}}function Rt(t,i){if(t&1&&u(0,"TimesIcon",4),t&2){let e=c(3);a("ngClass",e.cx("closeIcon")),l("aria-hidden",!0)("data-pc-section","closeicon")}}function Yt(t,i){if(t&1){let e=z();m(0,"div")(1,"button",7),$("click",function(o){h(e);let n=c(2);return g(n.onCloseIconClick(o))})("keydown.enter",function(o){h(e);let n=c(2);return g(n.onCloseIconClick(o))}),y(2,qt,1,1,"span",4)(3,Rt,1,3,"TimesIcon",4),p()()}if(t&2){let e=c(2);r(),a("ariaLabel",e.closeAriaLabel),l("class",e.cx("closeButton"))("data-pc-section","closebutton"),r(),T(e.message.closeIcon?2:3)}}function Ht(t,i){if(t&1&&(m(0,"div",4),f(1,Lt,8,10,"ng-container",5)(2,jt,1,0,"ng-container",3),y(3,Yt,4,4,"div"),p()),t&2){let e=c();O(e.message==null?null:e.message.contentStyleClass),a("ngClass",e.cx("messageContent")),l("data-pc-section","content"),r(),a("ngIf",!e.template),r(),a("ngTemplateOutlet",e.template)("ngTemplateOutletContext",N(8,At,e.message)),r(),T((e.message==null?null:e.message.closable)!==!1?3:-1)}}var Xt=["message"],Ut=["headless"];function Gt(t,i){if(t&1){let e=z();m(0,"p-toastItem",3),$("onClose",function(o){h(e);let n=c();return g(n.onMessageClose(o))})("@toastAnimation.start",function(o){h(e);let n=c();return g(n.onAnimationStart(o))})("@toastAnimation.done",function(o){h(e);let n=c();return g(n.onAnimationEnd(o))}),p()}if(t&2){let e=i.$implicit,s=i.index,o=c();a("message",e)("index",s)("life",o.life)("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",o.showTransformOptions)("hideTransformOptions",o.hideTransformOptions)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions)}}var Jt=(()=>{class t extends B{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new V;containerViewChild;_componentStyle=v(w);timeout;constructor(e){super(),this.zone=e}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(s){return new(s||t)(U(X))};static \u0275cmp=M({type:t,selectors:[["p-toastItem"]],viewQuery:function(s,o){if(s&1&&Q(wt,5),s&2){let n;_(n=b())&&(o.containerViewChild=n.first)}},inputs:{message:"message",index:[2,"index","index",x],life:[2,"life","life",x],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[P([w]),D],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(s,o){s&1&&(m(0,"div",1,0),$("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()}),y(2,Mt,1,5,"ng-container")(3,Ht,4,10,"div",2),p()),s&2&&(O(o.message==null?null:o.message.styleClass),a("ngClass",o.cx("message"))("@messageState",N(13,St,it(8,kt,o.showTransformOptions,o.hideTransformOptions,o.showTransitionOptions,o.hideTransitionOptions))),l("id",o.message==null?null:o.message.id)("data-pc-name","toast")("data-pc-section","root"),r(2),T(o.headlessTemplate?2:3))},dependencies:[j,L,at,ct,gt,ft,_t,bt,yt,C],encapsulation:2,data:{animation:[q("messageState",[Tt("visible",S({transform:"translateY(0)",opacity:1})),E("void => *",[S({transform:"{{showTransformParams}}",opacity:0}),R("{{showTransitionParams}}")]),E("* => void",[R("{{hideTransitionParams}}",S({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),Kt=(()=>{class t extends B{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new V;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=v(ut);_componentStyle=v(w);styleElement;id=pt("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let s=e.filter(o=>this.canAdd(o));this.add(s)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let s=this.key===e.key;return s&&this.preventOpenDuplicates&&(s=!this.containsMessage(this.messages,e)),s&&this.preventDuplicates&&(s=!this.containsMessage(this.messagesArchieve,e)),s}containsMessage(e,s){return e?e.find(o=>o.summary===s.summary&&o.detail==s.detail&&o.severity===s.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&A.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&lt(this.messages)&&A.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let s in this.breakpoints){let o="";for(let n in this.breakpoints[s])o+=n+":"+this.breakpoints[s][n]+" !important;";e+=`
                    @media screen and (max-width: ${s}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),mt(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&A.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=I(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["p-toast"]],contentQueries:function(s,o,n){if(s&1&&W(n,Xt,5)(n,Ut,5)(n,dt,4),s&2){let d;_(d=b())&&(o.template=d.first),_(d=b())&&(o.headlessTemplate=d.first),_(d=b())&&(o.templates=d)}},viewQuery:function(s,o){if(s&1&&Q(wt,5),s&2){let n;_(n=b())&&(o.containerViewChild=n.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",x],life:[2,"life","life",x],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",k],preventDuplicates:[2,"preventDuplicates","preventDuplicates",k],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[P([w]),D],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(s,o){s&1&&(m(0,"div",1,0),f(2,Gt,1,10,"p-toastItem",2),p()),s&2&&(tt(o.style),O(o.styleClass),a("ngClass",o.cx("root"))("ngStyle",o.sx("root")),r(2),a("ngForOf",o.messages))},dependencies:[j,L,nt,rt,Jt,C],encapsulation:2,data:{animation:[q("toastAnimation",[E(":enter, :leave",[Ct("@*",xt())])])]},changeDetection:0})}return t})(),Te=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=G({type:t});static \u0275inj=H({imports:[Kt,C,C]})}return t})();export{Kt as a,Te as b};
