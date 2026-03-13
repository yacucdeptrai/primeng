import{a as ie}from"./chunk-6TSCAW4U.js";import{b as We}from"./chunk-URX6CYXA.js";import{a as Ne}from"./chunk-ZVFS65R5.js";import{a as z,b as Ve}from"./chunk-F4X3V2LA.js";import"./chunk-EHIVA7EC.js";import{a as ee}from"./chunk-VHOAM5CB.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as g,d as Re,e as te}from"./chunk-I6RUY6VJ.js";import{a as v,b as Oe}from"./chunk-CIUCWEWU.js";import{s as Se,v as Ae}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as Le,b as Fe}from"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as w,ba as Pe}from"./chunk-DEL7GGHP.js";import{b as Ce,c as ke,d as we,e as Te,i as q}from"./chunk-UHCZASEU.js";import{Ga as De,Ja as Ee,P as Z,Q as Me,qa as y,wa as H}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as ye,m as Ie,p as he,u as j}from"./chunk-O4W5DSIC.js";import{$b as J,Ab as c,Hb as G,Ja as X,Ka as pe,Mb as _,N as F,O as A,Ob as d,Qa as p,Qc as Y,Rc as xe,S as N,Sb as ue,Tb as ge,Ub as ve,X as T,Xb as W,Y as M,Za as D,ac as r,bc as P,d as le,da as me,eb as f,fb as R,jb as ce,kb as E,kc as k,lc as B,ma as O,mc as be,nc as _e,rb as C,vb as de,wb as fe,xb as l,yb as o,zb as a,zc as $}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Be=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["steps-accessibility-doc"]],standalone:!1,decls:71,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),a(),o(4,"p"),r(5," Steps component uses the "),o(6,"i"),r(7,"nav"),a(),r(8," element and since any attribute is passed to the root implicitly "),o(9,"i"),r(10,"aria-labelledby"),a(),r(11," or "),o(12,"i"),r(13,"aria-label"),a(),r(14," can be used to describe the component. Inside an ordered list is used where the current step item defines "),o(15,"i"),r(16,"aria-current"),a(),r(17,' as "step". '),a(),o(18,"h3"),r(19,"Keyboard Support"),a(),o(20,"div",0)(21,"table",1)(22,"thead")(23,"tr")(24,"th"),r(25,"Key"),a(),o(26,"th"),r(27,"Function"),a()()(),o(28,"tbody")(29,"tr")(30,"td")(31,"i"),r(32,"tab"),a()(),o(33,"td"),r(34,"Adds focus to the active step when focus moves in to the component, if there is already a focused tab header then moves the focus out of the component based on the page tab sequence."),a()(),o(35,"tr")(36,"td")(37,"i"),r(38,"enter"),a()(),o(39,"td"),r(40,"Activates the focused step if readonly is not enabled."),a()(),o(41,"tr")(42,"td")(43,"i"),r(44,"space"),a()(),o(45,"td"),r(46,"Activates the focused step if readonly is not enabled."),a()(),o(47,"tr")(48,"td")(49,"i"),r(50,"right arrow"),a()(),o(51,"td"),r(52,"Moves focus to the next step if readonly is not enabled."),a()(),o(53,"tr")(54,"td")(55,"i"),r(56,"left arrow"),a()(),o(57,"td"),r(58,"Moves focus to the previous step if readonly is not enabled."),a()(),o(59,"tr")(60,"td")(61,"i"),r(62,"home"),a()(),o(63,"td"),r(64,"Moves focus to the first step if readonly is not enabled."),a()(),o(65,"tr")(66,"td")(67,"i"),r(68,"end"),a()(),o(69,"td"),r(70,"Moves focus to the last step if readonly is not enabled."),a()()()()()()())},dependencies:[g],encapsulation:2})}return e})();var Xe=({dt:e})=>`
.p-steps {
    position: relative;
}

.p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid ${e("steps.separator.background")};
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color ${e("steps.transition.duration")}, box-shadow ${e("steps.transition.duration")};
    border-radius: ${e("steps.item.link.border.radius")};
    outline-color: transparent;
    gap: ${e("steps.item.link.gap")};
}

.p-steps-item-link:not(.p-disabled):focus-visible {
    box-shadow: ${e("steps.item.link.focus.ring.shadow")};
    outline: ${e("steps.item.link.focus.ring.width")} ${e("steps.item.link.focus.ring.style")} ${e("steps.item.link.focus.ring.color")};
    outline-offset: ${e("steps.item.link.focus.ring.offset")};
}

.p-steps-item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("steps.item.label.color")};
    display: block;
    font-weight: ${e("steps.item.label.font.weight")};
}

.p-steps-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("steps.item.number.color")};
    border: 2px solid ${e("steps.item.number.border.color")};
    background: ${e("steps.item.number.background")};
    min-width: ${e("steps.item.number.size")};
    height: ${e("steps.item.number.size")};
    line-height: ${e("steps.item.number.size")};
    font-size: ${e("steps.item.number.font.size")};
    z-index: 1;
    border-radius: ${e("steps.item.number.border.radius")};
    position: relative;
    font-weight: ${e("steps.item.number.font.weight")};
}

.p-steps-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("steps.item.number.border.radius")};
    box-shadow: ${e("steps.item.number.shadow")};
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-item-active .p-steps-item-number {
    background: ${e("steps.item.number.active.background")};
    border-color: ${e("steps.item.number.active.border.color")};
    color: ${e("steps.item.number.active.color")};
}

.p-steps-item-active .p-steps-item-label {
    color: ${e("steps.item.label.active.color")};
}
`,Ge={root:({props:e})=>["p-steps p-component",{"p-readonly":e.readonly}],list:"p-steps-list",item:({instance:e,item:u,index:t})=>["p-steps-item",{"p-steps-item-active":e.isActive(t),"p-disabled":e.isItemDisabled(u,t)}],itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},ne=(()=>{class e extends De{name="steps";theme=Xe;classes=Ge;static \u0275fac=(()=>{let t;return function(n){return(t||(t=O(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Ye=["list"],Ze=e=>({"p-steps p-component":!0,"p-readonly":e}),et=(e,u)=>({"p-steps-item-active":e,"p-disabled":u}),tt=()=>({exact:!1}),it=(e,u)=>u.label;function nt(e,u){if(e&1&&(o(0,"span",14),r(1),a()),e&2){let t=d(3).$implicit;p(),P(t.label)}}function ot(e,u){if(e&1&&c(0,"span",15),e&2){let t=d(3).$implicit;l("innerHTML",t.label,X)}}function at(e,u){if(e&1){let t=G();o(0,"a",11),_("click",function(n){T(t);let s=d(2),m=s.$implicit,h=s.$index,S=d();return M(S.onItemClick(n,m,h))})("keydown",function(n){T(t);let s=d(2),m=s.$implicit,h=s.$index,S=d();return M(S.onItemKeydown(n,m,h))}),o(1,"span",12),r(2),a(),E(3,nt,2,1,"span",13)(4,ot,1,1,"ng-template",null,3,$),a()}if(e&2){let t=W(5),i=d(2),n=i.$implicit,s=i.$index,m=d();l("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActiveOptions",n.routerLinkActiveOptions||B(17,tt))("target",n.target)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),C("tabindex",m.getItemTabIndex(n,s))("aria-expanded",s===m.activeIndex)("aria-disabled",n.disabled||m.readonly&&s!==m.activeIndex)("ariaCurrentWhenActive",m.exact?"step":void 0),p(2),P(s+1),p(),l("ngIf",n.escape!==!1)("ngIfElse",t)}}function rt(e,u){if(e&1&&(o(0,"span",14),r(1),a()),e&2){let t=d(3).$implicit;p(),P(t.label)}}function st(e,u){if(e&1&&c(0,"span",15),e&2){let t=d(3).$implicit;l("innerHTML",t.label,X)}}function lt(e,u){if(e&1){let t=G();o(0,"a",16),_("click",function(n){T(t);let s=d(2),m=s.$implicit,h=s.$index,S=d();return M(S.onItemClick(n,m,h))})("keydown",function(n){T(t);let s=d(2),m=s.$implicit,h=s.$index,S=d();return M(S.onItemKeydown(n,m,h))}),o(1,"span",12),r(2),a(),E(3,rt,2,1,"span",13)(4,st,1,1,"ng-template",null,4,$),a()}if(e&2){let t=W(5),i=d(2),n=i.$implicit,s=i.$index,m=d();l("target",n.target),C("href",n.url,pe)("tabindex",m.getItemTabIndex(n,s))("aria-expanded",s===m.activeIndex)("aria-disabled",n.disabled||m.readonly&&s!==m.activeIndex)("ariaCurrentWhenActive",m.exact&&(!n.disabled||m.readonly)?"step":void 0),p(2),P(s+1),p(),l("ngIf",n.escape!==!1)("ngIfElse",t)}}function mt(e,u){if(e&1&&(o(0,"li",9,1),E(2,at,6,18,"a",10)(3,lt,6,9,"ng-template",null,2,$),a()),e&2){let t=W(4),i=d(),n=i.$implicit,s=i.$index,m=d();J(n.styleClass),l("ngStyle",n.style)("tooltipOptions",n.tooltipOptions)("ngClass",_e(10,et,m.isActive(n,s),n.disabled||m.readonly&&!m.isActive(n,s))),C("aria-current",m.isActive(n,s)?"step":void 0)("id",n.id)("data-pc-section","menuitem"),p(2),l("ngIf",m.isClickableRouterLink(n))("ngIfElse",t)}}function pt(e,u){if(e&1&&E(0,mt,5,13,"li",8),e&2){let t=u.$implicit;l("ngIf",t.visible!==!1)}}var x=(()=>{class e extends Ee{activeIndex=0;model;readonly=!0;style;styleClass;exact=!0;activeIndexChange=new me;listViewChild;router=N(we);route=N(Ce);_componentStyle=N(ne);subscription;ngOnInit(){super.ngOnInit(),this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(t,i,n){if(this.readonly||i.disabled){t.preventDefault();return}this.activeIndexChange.emit(n),!i.url&&!i.routerLink&&t.preventDefault(),i.command&&i.command({originalEvent:t,item:i,index:n})}onItemKeydown(t,i,n){switch(t.code){case"ArrowRight":{this.navigateToNextItem(t.target),t.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(t.target),t.preventDefault();break}case"Home":{this.navigateToFirstItem(t.target),t.preventDefault();break}case"End":{this.navigateToLastItem(t.target),t.preventDefault();break}case"Tab":if(n!==this.activeIndex){let s=Z(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');s[n].children[0].tabIndex="-1",s[this.activeIndex].children[0].tabIndex="0"}break;case"Enter":case"Space":{this.onItemClick(t,i,n),t.preventDefault();break}default:break}}navigateToNextItem(t){let i=this.findNextItem(t);i&&this.setFocusToMenuitem(t,i)}navigateToPrevItem(t){let i=this.findPrevItem(t);i&&this.setFocusToMenuitem(t,i)}navigateToFirstItem(t){let i=this.findFirstItem();i&&this.setFocusToMenuitem(t,i)}navigateToLastItem(t){let i=this.findLastItem();i&&this.setFocusToMenuitem(t,i)}findNextItem(t){let i=t.parentElement.nextElementSibling;return i?i.children[0]:null}findPrevItem(t){let i=t.parentElement.previousElementSibling;return i?i.children[0]:null}findFirstItem(){let t=Me(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');return t?t.children[0]:null}findLastItem(){let t=Z(this.listViewChild.nativeElement,'[data-pc-section="menuitem"]');return t?t[t.length-1].children[0]:null}setFocusToMenuitem(t,i){t.tabIndex="-1",i.tabIndex="0",i.focus()}isClickableRouterLink(t){return t.routerLink&&!this.readonly&&!t.disabled}isActive(t,i){if(t.routerLink){let n=Array.isArray(t.routerLink)?t.routerLink:[t.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),!1)}return i===this.activeIndex}getItemTabIndex(t,i){return t.disabled?"-1":!t.disabled&&this.activeIndex===i?t.tabindex||"0":t.tabindex??"-1"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=O(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-steps"]],viewQuery:function(i,n){if(i&1&&ue(Ye,5),i&2){let s;ge(s=ve())&&(n.listViewChild=s.first)}},inputs:{activeIndex:[2,"activeIndex","activeIndex",xe],model:"model",readonly:[2,"readonly","readonly",Y],style:"style",styleClass:"styleClass",exact:[2,"exact","exact",Y]},outputs:{activeIndexChange:"activeIndexChange"},features:[k([ne]),ce],decls:5,vars:8,consts:[["list",""],["menuitem",""],["elseBlock",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngClass","ngStyle"],[1,"p-steps-list"],["pTooltip","",1,"p-steps-item",3,"ngStyle","class","tooltipOptions","ngClass"],["class","p-steps-item","pTooltip","",3,"ngStyle","class","tooltipOptions","ngClass",4,"ngIf"],["pTooltip","",1,"p-steps-item",3,"ngStyle","tooltipOptions","ngClass"],["role","link","class","p-steps-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf","ngIfElse"],["role","link",1,"p-steps-item-link",3,"click","keydown","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[1,"p-steps-item-number"],["class","p-steps-item-label",4,"ngIf","ngIfElse"],[1,"p-steps-item-label"],[1,"p-steps-item-label",3,"innerHTML"],["role","link",1,"p-steps-item-link",3,"click","keydown","target"]],template:function(i,n){i&1&&(o(0,"nav",5)(1,"ul",6,0),de(3,pt,1,1,"li",7,it),a()()),i&2&&(J(n.styleClass),l("ngClass",be(6,Ze,n.readonly))("ngStyle",n.style),C("data-pc-name","steps"),p(),C("data-pc-section","menu"),p(2),fe(n.model))},dependencies:[j,ye,Ie,he,q,Te,Fe,Le,H],encapsulation:2,changeDetection:0})}return e})(),$e=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=R({type:e});static \u0275inj=A({imports:[x,H,H]})}return e})();var je=(()=>{class e{items;ngOnInit(){this.items=[{label:"Personal Info"},{label:"Reservation"},{label:"Review"}]}code={basic:'<p-steps [model]="items" [readonly]="true" />',html:`<div class="card">
    <p-steps [model]="items" [readonly]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
    selector: 'steps-basic-demo',
    templateUrl: './steps-basic-demo.html',
    standalone: true,
    imports: [StepsModule]
})
export class StepsBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Seat',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card"],[3,"model","readonly"],["selector","steps-basic-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Steps requires a collection of menuitems as its "),o(3,"i"),r(4,"model"),a(),r(5,"."),a()(),o(6,"div",0),c(7,"p-steps",1),a(),c(8,"app-code",2)),i&2&&(p(7),l("model",n.items)("readonly",!0),p(),l("code",n.code))},dependencies:[v,x,g],encapsulation:2})}return e})();var qe=(()=>{class e{items;active=0;ngOnInit(){this.items=[{label:"Personal Info"},{label:"Reservation"},{label:"Review"}]}code={basic:`<div class="flex mb-8 gap-2 justify-end">
    <p-button (click)="active = 0" [rounded]="true" label="1" styleClass="w-8 h-8 p-0" [outlined]="active !== 0" />
    <p-button (click)="active = 1" [rounded]="true" label="2" styleClass="w-8 h-8 p-0" [outlined]="active !== 1" />
    <p-button (click)="active = 2" [rounded]="true" label="3" styleClass="w-8 h-8 p-0" [outlined]="active !== 2" />
</div>
<p-steps [activeIndex]="active" [model]="items" />`,html:`<div class="card">
    <div class="flex mb-8 gap-2 justify-end">
        <p-button (click)="active = 0" [rounded]="true" label="1" styleClass="w-8 h-8 p-0" [outlined]="active !== 0" />
        <p-button (click)="active = 1" [rounded]="true" label="2" styleClass="w-8 h-8 p-0" [outlined]="active !== 1" />
        <p-button (click)="active = 2" [rounded]="true" label="3" styleClass="w-8 h-8 p-0" [outlined]="active !== 2" />
    </div>
    <p-steps [activeIndex]="active" [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'steps-controlled-demo',
    templateUrl: './steps-controlled-demo.html',
    standalone: true,
    imports: [StepsModule, ButtonModule]
})
export class StepsControlledDemo implements OnInit {
    items: MenuItem[] | undefined;

    active: number = 0;

    ngOnInit() {
        this.items = [
            {
                label: 'Personal Info'
            },
            {
                label: 'Reservation'
            },
            {
                label: 'Review'
            }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["controlled-doc"]],standalone:!1,decls:13,vars:9,consts:[[1,"card"],[1,"flex","mb-8","gap-2","justify-end"],["label","1","styleClass","w-8 h-8 p-0",3,"click","rounded","outlined"],["label","2","styleClass","w-8 h-8 p-0",3,"click","rounded","outlined"],["label","3","styleClass","w-8 h-8 p-0",3,"click","rounded","outlined"],[3,"activeIndex","model"],["selector","steps-controlled-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Steps can be controlled programmatically using "),o(3,"i"),r(4,"activeIndex"),a(),r(5," property."),a()(),o(6,"div",0)(7,"div",1)(8,"p-button",2),_("click",function(){return n.active=0}),a(),o(9,"p-button",3),_("click",function(){return n.active=1}),a(),o(10,"p-button",4),_("click",function(){return n.active=2}),a()(),c(11,"p-steps",5),a(),c(12,"app-code",6)),i&2&&(p(8),l("rounded",!0)("outlined",n.active!==0),p(),l("rounded",!0)("outlined",n.active!==1),p(),l("rounded",!0)("outlined",n.active!==2),p(),l("activeIndex",n.active)("model",n.items),p(),l("code",n.code))},dependencies:[v,x,g,w],encapsulation:2})}return e})();var He=(()=>{class e{code={typescript:"import { StepsModule } from 'primeng/steps';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["steps-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&c(0,"app-code",0),i&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return e})();var ze=(()=>{class e{messageService;items;activeIndex=0;constructor(t){this.messageService=t}onActiveIndexChange(t){this.activeIndex=t}ngOnInit(){this.items=[{label:"Personal",command:t=>this.messageService.add({severity:"info",summary:"First Step",detail:t.item.label})},{label:"Seat",command:t=>this.messageService.add({severity:"info",summary:"Second Step",detail:t.item.label})},{label:"Payment",command:t=>this.messageService.add({severity:"info",summary:"Third Step",detail:t.item.label})},{label:"Confirmation",command:t=>this.messageService.add({severity:"info",summary:"Last Step",detail:t.item.label})}]}code={basic:`<p-toast />
<p-steps [model]="items" [readonly]="false" [activeIndex]="activeIndex" (activeIndexChange)="onActiveIndexChange($event)" />`,html:`<div class="card">
    <p-toast />
    <p-steps [model]="items" [readonly]="false" [activeIndex]="activeIndex" (activeIndexChange)="onActiveIndexChange($event)" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'steps-interactive-demo',
    templateUrl: './steps-interactive-demo.html',
    standalone: true,
    imports: [StepsModule, ToastModule],
    providers: [MessageService]
})
export class StepsInteractiveDemo implements OnInit {
    items: MenuItem[] | undefined;

    activeIndex: number = 0;

    constructor(public messageService: MessageService) {}

    onActiveIndexChange(event: number) {
        this.activeIndex = event;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
            },
            {
                label: 'Seat',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Second Step', detail: event.item.label})
            },
            {
                label: 'Payment',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Third Step', detail: event.item.label})
            },
            {
                label: 'Confirmation',
                command: (event: any) => this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label})
            }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)(D(y))};static \u0275cmp=f({type:e,selectors:[["interactive-doc"]],standalone:!1,features:[k([y])],decls:16,vars:4,consts:[[1,"card"],[3,"activeIndexChange","model","readonly","activeIndex"],["selector","steps-interactive-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"In order to add interactivity to the component, disable "),o(3,"i"),r(4,"readonly"),a(),r(5," and use a binding to "),o(6,"i"),r(7,"activeIndex"),a(),r(8," along with "),o(9,"i"),r(10,"activeIndexChange"),a(),r(11," to control the Steps."),a()(),o(12,"div",0),c(13,"p-toast"),o(14,"p-steps",1),_("activeIndexChange",function(m){return n.onActiveIndexChange(m)}),a()(),c(15,"app-code",2)),i&2&&(p(14),l("model",n.items)("readonly",!1)("activeIndex",n.activeIndex),p(),l("code",n.code))},dependencies:[v,x,z,g],encapsulation:2})}return e})();var I=(()=>{class e{ticketInformation={personalInformation:{firstname:"",lastname:"",age:null},seatInformation:{class:null,wagon:null,seat:null},paymentInformation:{cardholderName:"",cardholderNumber:"",date:"",cvv:"",remember:!1}};paymentComplete=new le;paymentComplete$=this.paymentComplete.asObservable();getTicketInformation(){return this.ticketInformation}setTicketInformation(t){this.ticketInformation=t}complete(){this.paymentComplete.next(this.ticketInformation.personalInformation)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Ue=(()=>{class e{messageService;ticketService;items;subscription;constructor(t,i){this.messageService=t,this.ticketService=i}ngOnInit(){this.items=[{label:"Personal",routerLink:""},{label:"Seat",routerLink:"seat"},{label:"Payment",routerLink:"payment"},{label:"Confirmation",routerLink:"confirmation"}],this.subscription=this.ticketService.paymentComplete$.subscribe(t=>{this.messageService.add({severity:"success",summary:"Order submitted",detail:"Dear, "+t.firstname+" "+t.lastname+" your order completed."})})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}code={basic:`<div class="card">
    <p-toast />
    <p-steps [model]="items" [readonly]="false" />
</div>
<router-outlet></router-outlet>`,html:`<div class="card">
    <p-toast />
    <p-steps [model]="items" [readonly]="false" />
</div>
<router-outlet></router-outlet>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TicketService } from '@/service/ticketservice';
import { Subscription } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'steps-routing-demo',
    templateUrl: './steps-routing-demo.html',
    standalone: true,
    imports: [StepsModule, ToastModule],
    providers: [MessageService, TicketService]
})
export class StepsRoutingDemo implements OnInit {
    items: MenuItem[];

    subscription: Subscription;

    constructor(public messageService: MessageService, public ticketService: TicketService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Seat',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) => {
            this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}`,routerModule:`
    RouterModule.forRoot([
        {
            path: '',
            children: [
                { path: 'personal', component: PersonalDemo },
                { path: 'seat', component: SeatDemo },
                { path: 'payment', component: PaymentDemo },
                { path: 'confirmation', component: ConfirmationDemo },
                { path: '', redirectTo: 'personal', pathMatch: 'full' },
            ]
        }
    ])`,service:["TicketService"]};routeFiles=[{path:"src/app/demo/paymentdemo.ts",name:"PaymentDemo",content:`import { Component, OnInit } from '@angular/core';
import { TicketService } from '@/service/ticketservice';
import { Router } from '@angular/router';

@Component({
    template: \`
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Payment Information </ng-template>
                <ng-template pTemplate="subtitle"> Enter your card details </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid grid-cols-12 gap-4">
                        <div class="field col-span-12">
                            <label for="class">Card Holder Name</label>
                            <input type="text" required pInputText [(ngModel)]="paymentInformation.cardholderName" />
                        </div>
                        <div class="field col-span-8">
                            <label id="number" for="lastname">Number</label>
                            <p-inputmask inputId="number" mask="9999-9999-9999-9999" [(ngModel)]="paymentInformation.cardholderNumber"></p-inputmask>
                        </div>
                        <div class="field col-span-2">
                            <label id="date" for="date">Date</label>
                            <p-inputmask inputId="date" mask="99/99" [(ngModel)]="paymentInformation.date"></p-inputmask>
                        </div>
                        <div class="field col-span-2">
                            <label for="cvv">CVV</label>
                            <p-inputmask id="cvv" mask="999" [(ngModel)]="paymentInformation.cvv"></p-inputmask>
                        </div>
                        <div class="field-checkbox col-span-12">
                            <p-checkbox id="remember" [binary]="true" [(ngModel)]="paymentInformation.remember"></p-checkbox>
                            <label for="remember" class="p-checkbox-label">Save credit card information for future</label>
                        </div>
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-cols-12 gap-4 grid-nogutter justify-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    \`
})
export class PaymentDemo implements OnInit {
    paymentInformation: any;

    constructor(public ticketService: TicketService, private router: Router) {}

    ngOnInit() {
        this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
    }

    nextPage() {
        this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
        this.router.navigate(['steps/confirmation']);
    }

    prevPage() {
        this.router.navigate(['steps/seat']);
    }
}`},{path:"src/app/demo/personaldemo.ts",name:"PersonalDemo",content:`import { Component, OnInit } from '@angular/core';
import { TicketService } from '@/service/ticketservice';
import { Router } from '@angular/router';

@Component({
    template: \`
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Personal Information </ng-template>
                <ng-template pTemplate="subtitle"> Enter your personal information </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid">
                        <div class="field">
                            <label for="firstname">Firstname</label>
                            <input
                                #firstname="ngModel"
                                id="firstname"
                                type="text"
                                required
                                pInputText
                                [(ngModel)]="personalInformation.firstname"
                                [ngClass]="{ 'ng-dirty': (firstname.invalid && submitted) || (firstname.dirty && firstname.invalid) }"
                            />
                            <small *ngIf="(firstname.invalid && submitted) || (firstname.dirty && firstname.invalid)" class="p-error">Firstname is required.</small>
                        </div>
                        <div class="field">
                            <label for="lastname">Lastname</label>
                            <input #lastname="ngModel" id="lastname" type="text" required pInputText [(ngModel)]="personalInformation.lastname" [ngClass]="{ 'ng-dirty': (lastname.invalid && submitted) || (lastname.dirty && lastname.invalid) }" />
                            <small class="p-error" *ngIf="(lastname.invalid && submitted) || (lastname.dirty && lastname.invalid)">Lastname is required.</small>
                        </div>
                        <div class="field">
                            <label for="age">Age</label>
                            <input #age="ngModel" id="age" type="number" required pInputText [(ngModel)]="personalInformation.age" [ngClass]="{ 'ng-dirty': (age.invalid && submitted) || (age.dirty && age.invalid) }" />
                            <small class="p-error" *ngIf="(age.invalid && submitted) || (age.dirty && age.invalid)">Age is required.</small>
                        </div>
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-cols-12 gap-4 grid-nogutter justify-end">
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    \`
})
export class PersonalDemo implements OnInit {
    personalInformation: any;

    submitted: boolean = false;

    constructor(public ticketService: TicketService, private router: Router) {}

    ngOnInit() {
        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
        if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
            this.ticketService.ticketInformation.personalInformation = this.personalInformation;
            this.router.navigate(['steps/seat']);

            return;
        }

        this.submitted = true;
    }
}`},{path:"src/app/demo/seatdemo.ts",name:"SeatDemo",content:`import { Component, OnInit } from '@angular/core';
import { TicketService } from '@/service/ticketservice';
import { Router } from '@angular/router';

@Component({
    template: \`
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Seat Information </ng-template>
                <ng-template pTemplate="subtitle"> Choose your seat </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid formgrid grid grid-cols-12 gap-4">
                        <div class="field col-span-12 md:col-span-6">
                            <label for="class">Class</label>
                            <p-dropdown inputId="class" [(ngModel)]="seatInformation.class" [options]="classes" (onChange)="setVagons($event)" optionLabel="name" placeholder="Select a Class"></p-dropdown>
                        </div>
                        <div class="field col-span-12 md:col-span-6">
                            <label for="wagon">Wagon</label>
                            <p-dropdown inputId="wagon" [(ngModel)]="seatInformation.wagon" [options]="vagons" (onChange)="setSeats($event)" optionLabel="wagon" placeholder="Select a Wagon"></p-dropdown>
                        </div>
                        <div class="field col-span-12">
                            <label for="seat">Seat</label>
                            <p-dropdown inputId="seat" [(ngModel)]="seatInformation.seat" [options]="seats" optionLabel="seat" placeholder="Select a Seat"></p-dropdown>
                        </div>
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-cols-12 gap-4 grid-nogutter justify-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
        \`
})
export class SeatDemo implements OnInit {
    constructor(public ticketService: TicketService, private router: Router) {}

    classes: any[];

    vagons: any[];

    seats: any[];

    seatInformation: any;

    ngOnInit() {
        this.seatInformation = this.ticketService.ticketInformation.seatInformation;

        this.classes = [
            { name: 'First Class', code: 'A', factor: 1 },
            { name: 'Second Class', code: 'B', factor: 2 },
            { name: 'Third Class', code: 'C', factor: 3 }
        ];
    }

    setVagons(event) {
        if (this.seatInformation.class && event.value) {
            this.vagons = [];
            this.seats = [];
            for (let i = 1; i < 3 * event.value.factor; i++) {
                this.vagons.push({ wagon: i + event.value.code, type: event.value.name, factor: event.value.factor });
            }
        }
    }

    setSeats(event) {
        if (this.seatInformation.wagon && event.value) {
            this.seats = [];
            for (let i = 1; i < 10 * event.value.factor; i++) {
                this.seats.push({ seat: i, type: event.value.type });
            }
        }
    }

    nextPage() {
        this.ticketService.ticketInformation.seatInformation = this.seatInformation;
        this.router.navigate(['steps/payment']);
    }

    prevPage() {
        this.router.navigate(['steps/personal']);
    }
}`},{path:"src/app/demo/confirmationdemo.ts",name:"ConfirmationDemo",content:`import { Component, OnInit } from '@angular/core';
import { TicketService } from '@/service/ticketservice';
import { Router } from '@angular/router';

@Component({
    template: \`
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Confirmation </ng-template>
                <ng-template pTemplate="subtitle"> Enter your card details </ng-template>
                <ng-template pTemplate="content">
                    <div class="field col-span-12">
                        <label for="class">Name</label>
                        <b>{{ ticketInformation.personalInformation.firstname ? ticketInformation.personalInformation.firstname : '-' }} {{ ticketInformation.personalInformation.lastname ? ticketInformation.personalInformation.lastname : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Age</label>
                        <b>{{ ticketInformation.personalInformation.age ? ticketInformation.personalInformation.age : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Seat Class</label>
                        <b>{{ ticketInformation.seatInformation.class ? ticketInformation.seatInformation.class.name : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Wagon Number</label>
                        <b>{{ ticketInformation.seatInformation.wagon ? ticketInformation.seatInformation.wagon.wagon : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Seat</label>
                        <b>{{ ticketInformation.seatInformation.seat ? ticketInformation.seatInformation.seat.seat : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Cardholder Name</label>
                        <b>{{ ticketInformation.paymentInformation.cardholderName ? ticketInformation.paymentInformation.cardholderName : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Card Number</label>
                        <b>{{ ticketInformation.paymentInformation.cardholderNumber ? ticketInformation.paymentInformation.cardholderNumber : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">Date</label>
                        <b>{{ ticketInformation.paymentInformation.date ? ticketInformation.paymentInformation.date : '-' }}</b>
                    </div>
                    <div class="field col-span-12">
                        <label for="Age">CVV</label>
                        <b>{{ ticketInformation.paymentInformation.cvv && ticketInformation.paymentInformation.cvv.length === 3 ? '**' + ticketInformation.paymentInformation.cvv[2] : '-' }}</b>
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-cols-12 gap-4 grid-nogutter justify-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Complete" (onClick)="complete()" icon="pi pi-angle-right" iconPos="right" severity="success"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    \`
})
export class ConfirmationDemo implements OnInit {
    ticketInformation: any;

    constructor(public ticketService: TicketService, private router: Router) {}

    ngOnInit() {
        this.ticketInformation = this.ticketService.ticketInformation;
    }

    complete() {
        this.ticketService.complete();
    }

    prevPage() {
        this.router.navigate(['steps/payment']);
    }
}`}];static \u0275fac=function(i){return new(i||e)(D(y),D(I))};static \u0275cmp=f({type:e,selectors:[["routing-doc"]],standalone:!1,features:[k([y])],decls:8,vars:4,consts:[[1,"card"],[3,"model","readonly"],["selector","steps-routing-demo",3,"code","routeFiles"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Example below uses nested routes with Steps."),a()(),o(3,"div",0),c(4,"p-toast")(5,"p-steps",1),a(),c(6,"router-outlet")(7,"app-code",2)),i&2&&(p(5),l("model",n.items)("readonly",!1),p(2),l("code",n.code)("routeFiles",n.routeFiles))},dependencies:[v,x,z,g,ke],encapsulation:2})}return e})();var Ke=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=R({type:e});static \u0275inj=A({providers:[I],imports:[j,Oe,$e,Ve,te,Se,Ne,Ae,ie,ee,We,Pe,q,te]})}return e})();var gt=()=>["Steps","MenuItem"],Qe=(()=>{class e{docs=[{id:"import",label:"Import",component:He},{id:"basic",label:"Basic",component:je},{id:"controlled",label:"Controlled",component:qe},{id:"interactive",label:"Interactive",component:ze},{id:"routing",label:"Routing",component:Ue},{id:"accessibility",label:"Accessibility",component:Be}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Steps Component","header","Steps","description","Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.","themeDocs","steps",3,"docs","apiDocs"]],template:function(i,n){i&1&&c(0,"app-doc",0),i&2&&l("docs",n.docs)("apiDocs",B(2,gt))},dependencies:[Ke,Re],styles:["[_nghost-%COMP%]     b{display:block}[_nghost-%COMP%]     .p-card-body{padding:2rem}"]})}return e})();var Xi=[{path:"",component:Qe}];export{Xi as default};
