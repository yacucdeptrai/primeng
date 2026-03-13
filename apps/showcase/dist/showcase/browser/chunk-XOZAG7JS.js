import{a as Ye,b as Ze}from"./chunk-AYU6NADT.js";import{a as ce}from"./chunk-7T6NUUXL.js";import{a as Ue,c as Ke}from"./chunk-EHIVA7EC.js";import"./chunk-G3BDHYWP.js";import{c as ze,d as xe,f as _e,g as Ce,h as ye}from"./chunk-KMVDOPWF.js";import{a as D,d as Xe,e as Se}from"./chunk-I6RUY6VJ.js";import{a as M,b as Je}from"./chunk-CIUCWEWU.js";import{b as je,e as Pe,j as Ne,s as Fe,t as Ae,u as qe,v as Ge}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import{d as he}from"./chunk-X3A3Q6RL.js";import{aa as F,ba as Qe}from"./chunk-DEL7GGHP.js";import{i as We}from"./chunk-UHCZASEU.js";import{Ga as Re,Ja as N,P as He,l as $e,oa as Oe,va as be,wa as H}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as Be,q as ve,u as V}from"./chunk-O4W5DSIC.js";import{Ab as b,Ec as w,Gb as ue,Hb as x,Hc as re,Ic as pe,Jc as se,Kc as X,M as A,Mb as u,N as Te,O as ie,Ob as g,Pb as W,Qa as r,Qb as $,Rb as fe,S as G,Tb as U,Ub as K,Vb as ae,Wb as oe,X as c,Y as d,Zb as P,ac as l,bc as Ee,eb as f,fb as ne,fc as y,gc as h,ha as Ie,hc as S,jb as j,ka as me,kb as v,kc as Ve,lc as Le,ma as B,mc as J,nc as le,oc as ge,rb as R,sb as Q,tb as z,xb as s,yb as a,zb as o,zc as _}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var et=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["stepper-accessibility-doc"]],standalone:!1,decls:56,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,i){n&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),o(),a(4,"p"),l(5," Stepper container is defined with the "),a(6,"i"),l(7,"tablist"),o(),l(8," role, as any attribute is passed to the container element "),a(9,"i"),l(10,"aria-labelledby"),o(),l(11," can be optionally used to specify an element to describe the Stepper. Each stepper header has a "),a(12,"i"),l(13,"tab"),o(),l(14," role and "),a(15,"i"),l(16,"aria-controls"),o(),l(17," to refer to the corresponding stepper content element. The content element of each stepper has "),a(18,"i"),l(19,"tabpanel"),o(),l(20," role, an id to match the "),a(21,"i"),l(22,"aria-controls"),o(),l(23," of the header and "),a(24,"i"),l(25,"aria-labelledby"),o(),l(26," reference to the header as the accessible name. "),o(),a(27,"h3"),l(28,"Tab Header Keyboard Support"),o(),a(29,"div",0)(30,"table",1)(31,"thead")(32,"tr")(33,"th"),l(34,"Key"),o(),a(35,"th"),l(36,"Function"),o()()(),a(37,"tbody")(38,"tr")(39,"td")(40,"i"),l(41,"tab"),o()(),a(42,"td"),l(43,"Moves focus through the header."),o()(),a(44,"tr")(45,"td")(46,"i"),l(47,"enter"),o()(),a(48,"td"),l(49,"Activates the focused stepper header."),o()(),a(50,"tr")(51,"td")(52,"i"),l(53,"space"),o()(),a(54,"td"),l(55,"Activates the focused stepper header."),o()()()()()()())},dependencies:[D],encapsulation:2})}return e})();var ut=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,ft={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},ke=(()=>{class e extends Re{name="stepper";theme=ut;classes=ft;static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275prov=Te({token:e,factory:e.\u0275fac})}return e})();var q=["*"],it=["content"],nt=(e,m,t)=>({activateCallback:e,value:m,active:t});function vt(e,m){e&1&&b(0,"p-stepper-separator")}function bt(e,m){if(e&1){let t=x();a(0,"button",0),u("click",function(){c(t);let i=g();return d(i.onStepClick())}),a(1,"span",1),l(2),o(),a(3,"span",2),$(4),o()(),Q(5,vt,1,0,"p-stepper-separator")}if(e&2){let t=g();s("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),R("id",t.id())("role","tab")("aria-controls",t.ariaControls()),r(2),Ee(t.value()),r(3),z(t.isSeparatorVisible()?5:-1)}}function xt(e,m){e&1&&ue(0)}function _t(e,m){e&1&&b(0,"p-stepper-separator")}function Ct(e,m){if(e&1&&(v(0,xt,1,0,"ng-container",3),Q(1,_t,1,0,"p-stepper-separator")),e&2){let t=g();s("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",ge(3,nt,t.onStepClick.bind(t),t.value(),t.active())),r(),z(t.isSeparatorVisible()?1:-1)}}var tt=e=>({transitionParams:e}),yt=e=>({value:"visible",params:e}),ht=e=>({value:"hidden",params:e});function St(e,m){e&1&&b(0,"p-stepper-separator")}function kt(e,m){e&1&&ue(0)}function wt(e,m){if(e&1&&v(0,kt,1,0,"ng-container",1),e&2){let t=g();s("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ge(2,nt,t.updateValue.bind(t),t.value(),t.active()))}}var T=(()=>{class e extends N{steps=se(A(()=>C));static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-list"]],contentQueries:function(n,i,p){n&1&&ae(p,i.steps,C,4),n&2&&oe()},hostVars:4,hostBindings:function(n,i){n&2&&P("p-steplist",!0)("p-component",!0)},features:[j],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(W(),$(0))},dependencies:[V],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e extends N{static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(n,i){n&2&&P("p-stepper-separator",!0)("p-component",!0)},features:[j],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(W(),$(0))},dependencies:[V],encapsulation:2,changeDetection:0})}return e})(),Z=(()=>{class e extends N{pcStepper=G(A(()=>k));value=X();isActive=w(()=>this.pcStepper.value()===this.value());step=pe(A(()=>C));stepPanel=pe(A(()=>I));constructor(){super(),me(()=>{this.step().value.set(this.value())}),me(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["p-step-item"]],contentQueries:function(n,i,p){n&1&&ae(p,i.step,C,5)(p,i.stepPanel,I,5),n&2&&oe(2)},hostVars:5,hostBindings:function(n,i){n&2&&(R("data-p-active",i.isActive()),P("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[j],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(W(),$(0))},dependencies:[V],encapsulation:2,changeDetection:0})}return e})(),C=(()=>{class e extends N{pcStepper=G(A(()=>k));value=X();disabled=re(!1,{transform:t=>he(t)});active=w(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=w(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=w(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=w(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=w(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),n=t.indexOf(this),i=t.length;return n!==i-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="content"&&(this._contentTemplate=t.template)})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step"]],contentQueries:function(n,i,p){if(n&1&&fe(p,it,4)(p,be,4),n&2){let E;U(E=K())&&(i.content=E.first),U(E=K())&&(i.templates=E)}},hostVars:13,hostBindings:function(n,i){n&2&&(R("aria-current",i.active()?"step":void 0)("role","presentation")("data-p-active",i.active())("data-p-disabled",i.isStepDisabled())("data-pc-name","step"),P("p-step",!0)("p-step-active",i.active())("p-disabled",i.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[j],ngContentSelectors:q,decls:2,vars:1,consts:[["type","button",1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(W(),Q(0,bt,6,7)(1,Ct,2,7)),n&2&&z(!i.content&&!i._contentTemplate?0:1)},dependencies:[V,ve,we,H],encapsulation:2,changeDetection:0})}return e})(),I=(()=>{class e extends N{pcStepper=G(A(()=>k));transitionOptions=w(()=>this.pcStepper.transitionOptions());value=X(void 0);active=w(()=>this.pcStepper.value()===this.value());ariaControls=w(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=w(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=w(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=w(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,n=He(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return $e(this.el.nativeElement,n)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="content"&&(this._contentTemplate=t.template)})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panel"]],contentQueries:function(n,i,p){if(n&1&&fe(p,it,5)(p,be,4),n&2){let E;U(E=K())&&(i.contentTemplate=E.first),U(E=K())&&(i.templates=E)}},hostVars:11,hostBindings:function(n,i){n&2&&(R("role","tabpanel")("aria-controls",i.ariaControls())("id",i.id())("data-p-active",i.active())("data-pc-name","steppanel"),P("p-steppanel",!0)("p-component",!0)("p-steppanel-active",i.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[j],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(Q(0,St,1,0,"p-stepper-separator"),a(1,"div",0),Q(2,wt,1,6,"ng-container"),o()),n&2&&(z(i.isSeparatorVisible()?0:-1),r(),s("@content",i.isVertical()?i.active()?J(5,yt,J(3,tt,i.transitionOptions())):J(9,ht,J(7,tt,i.transitionOptions())):void 0),r(),z(i.active()?2:-1))},dependencies:[V,ve,we,H],encapsulation:2,data:{animation:[ze("content",[Ce("hidden",_e({height:"0",visibility:"hidden"})),Ce("visible",_e({height:"*",visibility:"visible"})),ye("visible <=> hidden",[xe("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),ye("void => *",xe(0))])]},changeDetection:0})}return e})(),O=(()=>{class e extends N{static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(n,i){n&2&&P("p-steppanels",!0)("p-component",!0)},features:[j],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(W(),$(0))},dependencies:[V,H],encapsulation:2,changeDetection:0})}return e})(),k=(()=>{class e extends N{value=X(void 0);linear=re(!1,{transform:t=>he(t)});transitionOptions=re("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=G(ke);id=Ie(Oe("pn_id_"));stepItems=se(Z);steps=se(C);stepList=pe(T);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=B(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper"]],contentQueries:function(n,i,p){n&1&&ae(p,i.stepItems,Z,4)(p,i.steps,C,4)(p,i.stepList,T,5),n&2&&oe(3)},hostVars:6,hostBindings:function(n,i){n&2&&(R("role","tablist")("id",i.id()),P("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[Ve([ke]),j],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(W(),$(0))},dependencies:[V,H],encapsulation:2,changeDetection:0})}return e})(),at=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ne({type:e});static \u0275inj=ie({imports:[k,T,O,I,Z,C,we,H,H]})}return e})();function Mt(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content I"),o(),a(3,"div",7)(4,"p-button",8),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()()}}function Dt(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content II"),o()(),a(3,"div",9)(4,"p-button",10),u("onClick",function(){let i=c(t).activateCallback;return d(i(1))}),o(),a(5,"p-button",8),u("onClick",function(){let i=c(t).activateCallback;return d(i(3))}),o()()}}function Tt(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content III"),o()(),a(3,"div",11)(4,"p-button",12),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}}var ot=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]">
        <p-step-list>
            <p-step [value]="1">Header I</p-step>
            <p-step [value]="2">Header II</p-step>
            <p-step [value]="3">Header II</p-step>
        </p-step-list>
        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                        <div class="flex pt-6 justify-end">
                            <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                        </div>
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'stepper-basic-demo',
    templateUrl: './stepper-basic-demo.html',
    standalone: true,
    imports: [ButtonModule, StepperModule]
})
export class StepperBasicDemo {
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["basic-doc"]],standalone:!1,decls:38,vars:8,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value"],[3,"value"],["selector","stepper-basic-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-6","justify-start"],["label","Back","icon","pi pi-arrow-left","iconPos","right",3,"onClick"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),l(2,"Stepper consists of a combination of "),a(3,"i"),l(4,"StepList"),o(),l(5,", "),a(6,"i"),l(7,"Step"),o(),l(8,", "),a(9,"i"),l(10,"StepPanels"),o(),l(11," and "),a(12,"i"),l(13,"StepPanel"),o(),l(14," components. The "),a(15,"i"),l(16,"value"),o(),l(17," property is essential for associating Step and StepPanel with each other."),o()(),a(18,"div",1)(19,"p-stepper",2)(20,"p-step-list")(21,"p-step",3),l(22,"Header I"),o(),a(23,"p-step",3),l(24,"Header II"),o(),a(25,"p-step",3),l(26,"Header II"),o()(),a(27,"p-step-panels")(28,"p-step-panel",3),v(29,Mt,5,0,"ng-template",null,0,_),o(),a(31,"p-step-panel",3),v(32,Dt,6,0,"ng-template",null,0,_),o(),a(34,"p-step-panel",3),v(35,Tt,5,0,"ng-template",null,0,_),o()()()(),b(37,"app-code",4)),n&2&&(r(19),s("value",1),r(2),s("value",1),r(2),s("value",2),r(2),s("value",3),r(3),s("value",1),r(3),s("value",2),r(3),s("value",3),r(3),s("code",i.code))},dependencies:[M,D,k,T,O,I,C,F],encapsulation:2})}return e})();var lt=(()=>{class e{code={typescript:"import { StepperModule } from 'primeng/stepper';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["stepper-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,i){n&1&&b(0,"app-code",0),n&2&&s("code",i.code)("hideToggleCode",!0)},dependencies:[M],encapsulation:2})}return e})();function It(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content I"),o(),a(3,"div",7)(4,"p-button",8),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()()}}function Et(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content II"),o()(),a(3,"div",9)(4,"p-button",10),u("onClick",function(){let i=c(t).activateCallback;return d(i(1))}),o(),a(5,"p-button",8),u("onClick",function(){let i=c(t).activateCallback;return d(i(3))}),o()()}}function Vt(e,m){if(e&1){let t=x();a(0,"div",5)(1,"div",6),l(2,"Content III"),o()(),a(3,"div",11)(4,"p-button",12),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}}var rt=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]" [linear]="true">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]" [linear]="true">
        <p-step-list>
            <p-step [value]="1">Header I</p-step>
            <p-step [value]="2">Header II</p-step>
            <p-step [value]="3">Header II</p-step>
        </p-step-list>
        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                        <div class="flex pt-6 justify-end">
                            <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                        </div>
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'stepper-linear-demo-demo',
    templateUrl: './stepper-linear-demo-demo.html',
    standalone: true,
    imports: [StepperModule, ButtonModule]
})
export class StepperLinearDemo {
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["linear-doc"]],standalone:!1,decls:26,vars:9,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value","linear"],[3,"value"],["selector","stepper-linear-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-6","justify-start"],["label","Back","icon","pi pi-arrow-left","iconPos","right",3,"onClick"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),l(2,"When "),a(3,"i"),l(4,"linear"),o(),l(5," property is set to true, current step must be completed in order to move to the next step."),o()(),a(6,"div",1)(7,"p-stepper",2)(8,"p-step-list")(9,"p-step",3),l(10,"Header I"),o(),a(11,"p-step",3),l(12,"Header II"),o(),a(13,"p-step",3),l(14,"Header II"),o()(),a(15,"p-step-panels")(16,"p-step-panel",3),v(17,It,5,0,"ng-template",null,0,_),o(),a(19,"p-step-panel",3),v(20,Et,6,0,"ng-template",null,0,_),o(),a(22,"p-step-panel",3),v(23,Vt,5,0,"ng-template",null,0,_),o()()()(),b(25,"app-code",4)),n&2&&(r(7),s("value",1)("linear",!0),r(2),s("value",1),r(2),s("value",2),r(2),s("value",3),r(3),s("value",1),r(3),s("value",2),r(3),s("value",3),r(3),s("code",i.code))},dependencies:[M,D,k,T,O,I,C,F],encapsulation:2})}return e})();var pt=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Design</p-step>
        <p-step [value]="2">Development</p-step>
        <p-step [value]="3">QA</p-step>
    </p-step-list>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]">
        <p-step-list>
            <p-step [value]="1">Design</p-step>
            <p-step [value]="2">Development</p-step>
            <p-step [value]="3">QA</p-step>
        </p-step-list>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'stepper-steps-only-demo',
    templateUrl: './stepper-steps-only-demo.html',
    standalone: true,
    imports: [ButtonModule, StepperModule]
})
export class StepperStepsOnlyDemo {
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["steps-only-doc"]],standalone:!1,decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value"],[3,"value"],["selector","stepper-steps-only-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),l(2,"Use Stepper with a "),a(3,"i"),l(4,"StepList"),o(),l(5," only for custom requirements where a progress indicator is needed."),o()(),a(6,"div",0)(7,"p-stepper",1)(8,"p-step-list")(9,"p-step",2),l(10,"Design"),o(),a(11,"p-step",2),l(12,"Development"),o(),a(13,"p-step",2),l(14,"QA"),o()()()(),b(15,"app-code",3)),n&2&&(r(7),s("value",1),r(2),s("value",1),r(2),s("value",2),r(2),s("value",3),r(2),s("code",i.code))},dependencies:[M,D,k,T,C],encapsulation:2})}return e})();var De=(e,m)=>({"bg-primary text-primary-contrast border-primary":e,"border-surface":m});function Lt(e,m){if(e&1){let t=x();a(0,"button",6),u("click",function(){let i=c(t).activateCallback;return d(i())}),a(1,"span",7),b(2,"i",8),o()()}if(e&2){let t=m.value,n=g();r(),s("ngClass",le(1,De,t<=n.activeStep,t>n.activeStep))}}function Bt(e,m){if(e&1){let t=x();a(0,"button",6),u("click",function(){let i=c(t).activateCallback;return d(i())}),a(1,"span",7),b(2,"i",9),o()()}if(e&2){let t=m.value,n=g();r(),s("ngClass",le(1,De,t<=n.activeStep,t>n.activeStep))}}function jt(e,m){if(e&1){let t=x();a(0,"button",6),u("click",function(){let i=c(t).activateCallback;return d(i())}),a(1,"span",7),b(2,"i",10),o()()}if(e&2){let t=m.value,n=g();r(),s("ngClass",le(1,De,t<=n.activeStep,t>n.activeStep))}}function Pt(e,m){if(e&1){let t=x();a(0,"div",11)(1,"div",12),l(2,"Create your account"),o(),a(3,"div",13)(4,"input",14),S("ngModelChange",function(i){c(t);let p=g();return h(p.name,i)||(p.name=i),d(i)}),o()(),a(5,"div",13)(6,"input",15),S("ngModelChange",function(i){c(t);let p=g();return h(p.email,i)||(p.email=i),d(i)}),o()(),a(7,"div",13)(8,"p-password",16),S("ngModelChange",function(i){c(t);let p=g();return h(p.password,i)||(p.password=i),d(i)}),o()()(),a(9,"div",17)(10,"p-button",18),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}if(e&2){let t=g();r(4),y("ngModel",t.name),r(2),y("ngModel",t.email),r(2),y("ngModel",t.password)}}function Nt(e,m){if(e&1){let t=x();a(0,"div",19)(1,"div",12),l(2,"Choose your interests"),o(),a(3,"div",20)(4,"p-togglebutton",21),S("ngModelChange",function(i){c(t);let p=g();return h(p.option1,i)||(p.option1=i),d(i)}),o(),a(5,"p-togglebutton",22),S("ngModelChange",function(i){c(t);let p=g();return h(p.option2,i)||(p.option2=i),d(i)}),o(),a(6,"p-togglebutton",23),S("ngModelChange",function(i){c(t);let p=g();return h(p.option3,i)||(p.option3=i),d(i)}),o(),a(7,"p-togglebutton",24),S("ngModelChange",function(i){c(t);let p=g();return h(p.option4,i)||(p.option4=i),d(i)}),o(),a(8,"p-togglebutton",25),S("ngModelChange",function(i){c(t);let p=g();return h(p.option5,i)||(p.option5=i),d(i)}),o(),a(9,"p-togglebutton",26),S("ngModelChange",function(i){c(t);let p=g();return h(p.option6,i)||(p.option6=i),d(i)}),o(),a(10,"p-togglebutton",27),S("ngModelChange",function(i){c(t);let p=g();return h(p.option7,i)||(p.option7=i),d(i)}),o(),a(11,"p-togglebutton",28),S("ngModelChange",function(i){c(t);let p=g();return h(p.option8,i)||(p.option8=i),d(i)}),o(),a(12,"p-togglebutton",29),S("ngModelChange",function(i){c(t);let p=g();return h(p.option9,i)||(p.option9=i),d(i)}),o(),a(13,"p-togglebutton",30),S("ngModelChange",function(i){c(t);let p=g();return h(p.option10,i)||(p.option10=i),d(i)}),o()()(),a(14,"div",31)(15,"p-button",32),u("onClick",function(){let i=c(t).activateCallback;return d(i(1))}),o(),a(16,"p-button",18),u("onClick",function(){let i=c(t).activateCallback;return d(i(3))}),o()()}if(e&2){let t=g();r(4),y("ngModel",t.option1),r(),y("ngModel",t.option2),r(),y("ngModel",t.option3),r(),y("ngModel",t.option4),r(),y("ngModel",t.option5),r(),y("ngModel",t.option6),r(),y("ngModel",t.option7),r(),y("ngModel",t.option8),r(),y("ngModel",t.option9),r(),y("ngModel",t.option10)}}function Ft(e,m){if(e&1){let t=x();a(0,"div",19)(1,"div",12),l(2,"Account created successfully"),o(),a(3,"div",33),b(4,"img",34),o()(),a(5,"div",35)(6,"p-button",32),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}}var st=(()=>{class e{activeStep=1;name=null;email=null;password=null;option1=!1;option2=!1;option3=!1;option4=!1;option5=!1;option6=!1;option7=!1;option8=!1;option9=!1;option10=!1;code={basic:`<p-stepper [(value)]="activeStep" class="basis-[40rem]">
    <p-step-list>
        <p-step [value]="1" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-user"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="2" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-star"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="3" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-id-card"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>
    </p-step-list>

    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                    <div class="field">
                        <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" fluid />
                    </div>
                    <div class="field">
                        <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" fluid />
                    </div>
                    <div class="field">
                        <p-password [(ngModel)]="password" placeholder="Password" fluid />
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button (onClick)="activateCallback(2)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                    <div class="flex flex-wrap justify-center gap-4">
                        <p-togglebutton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                        <p-togglebutton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                        <p-togglebutton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                        <p-togglebutton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                        <p-togglebutton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                        <p-togglebutton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                        <p-togglebutton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                        <p-togglebutton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                        <p-togglebutton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                        <p-togglebutton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button (onClick)="activateCallback(1)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    <p-button (onClick)="activateCallback(3)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                    <div class="text-center">
                        <img alt="logo" src="https://primefaces.org/cdn/primeng/images/stepper/content.svg" />
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button (onClick)="activateCallback(2)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [(value)]="activeStep" class="basis-[40rem]">
        <p-step-list>
            <p-step [value]="1" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-user"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>

            <p-step [value]="2" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-star"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>

            <p-step [value]="3" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-id-card"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>
        </p-step-list>

        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                        <div class="field">
                            <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" fluid />
                        </div>
                        <div class="field">
                            <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" fluid />
                        </div>
                        <div class="field">
                            <p-password [(ngModel)]="password" placeholder="Password" fluid />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button (onClick)="activateCallback(2)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                        <div class="flex flex-wrap justify-center gap-4">
                            <p-togglebutton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                            <p-togglebutton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                            <p-togglebutton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                            <p-togglebutton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                            <p-togglebutton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                            <p-togglebutton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                            <p-togglebutton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                            <p-togglebutton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                            <p-togglebutton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                            <p-togglebutton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button (onClick)="activateCallback(1)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                        <p-button (onClick)="activateCallback(3)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                        <div class="text-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primeng/images/stepper/content.svg" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button (onClick)="activateCallback(2)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'stepper-template-demo',
    templateUrl: './stepper-template-demo.html',
    standalone: true,
    imports: [
      StepperModule,
      ButtonModule,
      InputTextModule,
      ToggleButton,
      IconField,
      InputIcon,
      CommonModule
    ]
})
export class StepperTemplateDemo {
    activeStep: number = 1;

    name: string | undefined = null;

    email: string | undefined = null;

    password: string | undefined = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["template-doc"]],standalone:!1,decls:26,vars:8,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[40rem]",3,"valueChange","value"],[1,"flex","flex-row","flex-auto","gap-2",3,"value"],[3,"value"],["selector","stepper-template-demo",3,"code"],[1,"bg-transparent","border-0","inline-flex","flex-col","gap-2",3,"click"],[1,"rounded-full","border-2","w-12","h-12","inline-flex","items-center","justify-center",3,"ngClass"],[1,"pi","pi-user"],[1,"pi","pi-star"],[1,"pi","pi-id-card"],[1,"flex","flex-col","gap-2","mx-auto",2,"min-height","16rem","max-width","20rem"],[1,"text-center","mt-4","mb-4","text-xl","font-semibold"],[1,"field"],["pInputText","","id","input","type","text","placeholder","Name","fluid","",3,"ngModelChange","ngModel"],["pInputText","","id","email","type","email","placeholder","Email","fluid","",3,"ngModelChange","ngModel"],["placeholder","Password","fluid","",3,"ngModelChange","ngModel"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","flex-col","gap-2","mx-auto",2,"min-height","16rem","max-width","24rem"],[1,"flex","flex-wrap","justify-center","gap-4"],["onLabel","Nature","offLabel","Nature",3,"ngModelChange","ngModel"],["onLabel","Art","offLabel","Art",3,"ngModelChange","ngModel"],["onLabel","Music","offLabel","Music",3,"ngModelChange","ngModel"],["onLabel","Design","offLabel","Design",3,"ngModelChange","ngModel"],["onLabel","Photography","offLabel","Photography",3,"ngModelChange","ngModel"],["onLabel","Movies","offLabel","Movies",3,"ngModelChange","ngModel"],["onLabel","Sports","offLabel","Sports",3,"ngModelChange","ngModel"],["onLabel","Gaming","offLabel","Gaming",3,"ngModelChange","ngModel"],["onLabel","Traveling","offLabel","Traveling",3,"ngModelChange","ngModel"],["onLabel","Dancing","offLabel","Dancing",3,"ngModelChange","ngModel"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"text-center"],["alt","logo","src","https://primefaces.org/cdn/primeng/images/stepper/content.svg"],[1,"flex","pt-6","justify-start"]],template:function(n,i){if(n&1){let p=x();a(0,"app-docsectiontext")(1,"p"),l(2,"Stepper provides various templating options to customize the default UI design."),o()(),a(3,"div",1)(4,"p-stepper",2),S("valueChange",function(de){return c(p),h(i.activeStep,de)||(i.activeStep=de),d(de)}),a(5,"p-step-list")(6,"p-step",3),v(7,Lt,3,4,"ng-template",null,0,_),o(),a(9,"p-step",3),v(10,Bt,3,4,"ng-template",null,0,_),o(),a(12,"p-step",3),v(13,jt,3,4,"ng-template",null,0,_),o()(),a(15,"p-step-panels")(16,"p-step-panel",4),v(17,Pt,11,3,"ng-template",null,0,_),o(),a(19,"p-step-panel",4),v(20,Nt,17,10,"ng-template",null,0,_),o(),a(22,"p-step-panel",4),v(23,Ft,7,0,"ng-template",null,0,_),o()()()(),b(25,"app-code",5)}n&2&&(r(4),y("value",i.activeStep),r(2),s("value",1),r(3),s("value",2),r(3),s("value",3),r(4),s("value",1),r(3),s("value",2),r(3),s("value",3),r(3),s("code",i.code))},dependencies:[Be,M,D,k,T,O,I,C,je,Pe,Ne,F,Ye,qe,ce],encapsulation:2})}return e})();function At(e,m){if(e&1){let t=x();a(0,"div",4)(1,"div",5),l(2,"Content I"),o()(),a(3,"div",6)(4,"p-button",7),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}}function Wt(e,m){if(e&1){let t=x();a(0,"div",4)(1,"div",5),l(2,"Content II"),o()(),a(3,"div",8)(4,"p-button",9),u("onClick",function(){let i=c(t).activateCallback;return d(i(1))}),o(),a(5,"p-button",7),u("onClick",function(){let i=c(t).activateCallback;return d(i(3))}),o()()}}function $t(e,m){if(e&1){let t=x();a(0,"div",4)(1,"div",5),l(2,"Content III"),o()(),a(3,"div",6)(4,"p-button",9),u("onClick",function(){let i=c(t).activateCallback;return d(i(2))}),o()()}}var ct=(()=>{class e{code={basic:`<p-stepper [value]="1">
    <p-step-item [value]="1">
        <p-step>Header I</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Next" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="2">
        <p-step>Header II</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex py-6 gap-2">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                    <p-button label="Next" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="3">
        <p-step>Header III</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>
</p-stepper>`,html:`<div class="card">
    <p-stepper [value]="1">
        <p-step-item [value]="1">
            <p-step>Header I</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                    </div>
                    <div class="py-6">
                        <p-button label="Next" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>

        <p-step-item [value]="2">
            <p-step>Header II</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                        <p-button label="Next" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>

        <p-step-item [value]="3">
            <p-step>Header III</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="py-6">
                        <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'stepper-vertical-demo',
    templateUrl: './stepper-vertical-demo.html',
    standalone: true,
    imports: [StepperModule, ButtonModule]
})
export class StepperVerticalDemo {
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["vertical-doc"]],standalone:!1,decls:33,vars:5,consts:[["content",""],[1,"card"],[3,"value"],["selector","stepper-vertical-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"py-6"],["label","Next",3,"onClick"],[1,"flex","py-6","gap-2"],["label","Back","severity","secondary",3,"onClick"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),l(2,"Vertical layout requires "),a(3,"i"),l(4,"StepItem"),o(),l(5," as a wrapper of "),a(6,"i"),l(7,"Step"),o(),l(8," and "),a(9,"i"),l(10,"StepPanel"),o(),l(11," components."),o()(),a(12,"div",1)(13,"p-stepper",2)(14,"p-step-item",2)(15,"p-step"),l(16,"Header I"),o(),a(17,"p-step-panel"),v(18,At,5,0,"ng-template",null,0,_),o()(),a(20,"p-step-item",2)(21,"p-step"),l(22,"Header II"),o(),a(23,"p-step-panel"),v(24,Wt,6,0,"ng-template",null,0,_),o()(),a(26,"p-step-item",2)(27,"p-step"),l(28,"Header III"),o(),a(29,"p-step-panel"),v(30,$t,5,0,"ng-template",null,0,_),o()()()(),b(32,"app-code",3)),n&2&&(r(13),s("value",1),r(),s("value",1),r(6),s("value",2),r(6),s("value",3),r(6),s("code",i.code))},dependencies:[M,D,k,I,Z,C,F],encapsulation:2})}return e})();var dt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ne({type:e});static \u0275inj=ie({imports:[V,Je,Se,at,We,Fe,Ae,Qe,Ze,Ke,Ue,Ge,ce,Se]})}return e})();var Ht=()=>["Stepper","StepItem","StepPanel"],mt=(()=>{class e{docs=[{id:"import",label:"Import",component:lt},{id:"horizontal",label:"Horizontal",component:ot},{id:"vertical",label:"Vertical",component:ct},{id:"linear",label:"Linear",component:rt},{id:"steps-only",label:"Steps Only",component:pt},{id:"template",label:"Template",component:st},{id:"accessibility",label:"Accessibility",component:et}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Stepper Component","header","Stepper","description","The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.","themeDocs","stepper",3,"docs","apiDocs"]],template:function(n,i){n&1&&b(0,"app-doc",0),n&2&&s("docs",i.docs)("apiDocs",Le(2,Ht))},dependencies:[dt,Xe],encapsulation:2})}return e})();var nn=[{path:"",component:mt}];export{nn as default};
