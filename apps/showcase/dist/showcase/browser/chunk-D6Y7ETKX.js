import{a as x,d as xe,e as z}from"./chunk-I6RUY6VJ.js";import{a as v,b as ge}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import{a as be,b as fe}from"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{E as _e,x as de}from"./chunk-DEL7GGHP.js";import{d as me,e as E,i as P}from"./chunk-UHCZASEU.js";import{Ga as se,Ja as ue,va as ce,wa as pe}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as H,l as oe,m as q,p as ae,q as le,u as j}from"./chunk-O4W5DSIC.js";import{$b as S,Ab as s,Eb as h,Fb as y,Hb as R,Ja as M,Ka as w,Mb as $,N as G,O as V,Ob as a,Qa as r,Rb as ne,S as J,Tb as F,Ub as A,X as D,Xb as k,Y as L,Za as Z,ac as p,bc as C,da as X,eb as d,fb as U,jb as ee,kb as u,kc as re,lc as O,ma as Y,mc as B,rb as b,sb as te,tb as ie,xb as n,yb as l,zb as m,zc as f}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var he=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["breadcrumb-accessibility-doc"]],standalone:!1,decls:24,vars:0,template:function(i,c){i&1&&(l(0,"app-docsectiontext")(1,"h3"),p(2,"Screen Reader"),m(),l(3,"p"),p(4," Breadcrumb uses the "),l(5,"i"),p(6,"nav"),m(),p(7," element and since any attribute is passed to the root implicitly "),l(8,"i"),p(9,"aria-labelledby"),m(),p(10," or "),l(11,"i"),p(12,"aria-label"),m(),p(13," can be used to describe the component. Inside an ordered list is used where the list item separators have "),l(14,"i"),p(15,"aria-hidden"),m(),p(16," to be able to ignored by the screen readers. If the last link represents the current route, "),l(17,"i"),p(18,"aria-current"),m(),p(19,' is added with "page" as the value. '),m(),l(20,"h3"),p(21,"Keyboard Support"),m(),l(22,"p"),p(23,"No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence."),m()())},dependencies:[x],encapsulation:2})}return t})();var Ee=({dt:t})=>`
.p-breadcrumb {
    background: ${t("breadcrumb.background")};
    padding: ${t("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${t("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${t("breadcrumb.separator.color")};
}

.p-breadcrumb-separator .p-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${t("breadcrumb.item.gap")};
    transition: background ${t("breadcrumb.transition.duration")}, color ${t("breadcrumb.transition.duration")}, outline-color ${t("breadcrumb.transition.duration")}, box-shadow ${t("breadcrumb.transition.duration")};
    border-radius: ${t("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${t("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${t("breadcrumb.item.focus.ring.shadow")};
    outline: ${t("breadcrumb.item.focus.ring.width")} ${t("breadcrumb.item.focus.ring.style")} ${t("breadcrumb.item.focus.ring.color")};
    outline-offset: ${t("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${t("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${t("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${t("breadcrumb.item.icon.hover.color")};
}
`,De={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:({instance:t})=>["p-breadcrumb-item",{"p-disabled":t.disabled()}],itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Q=(()=>{class t extends se{name="breadcrumb";theme=Ee;classes=De;static \u0275fac=(()=>{let e;return function(c){return(e||(e=Y(t)))(c||t)}})();static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();var Me=["item"],we=["separator"],Re=t=>({"p-breadcrumb-home-item":!0,"p-disabled":t}),Ce=()=>({exact:!1}),$e=t=>({"p-breadcrumb-item":!0,"p-disabled":t}),Oe=t=>({$implicit:t});function Fe(t,o){if(t&1&&s(0,"span",16),t&2){let e=a(3);n("ngClass",e.home.icon)("ngStyle",e.home==null?null:e.home.style)}}function Ae(t,o){t&1&&s(0,"HomeIcon",17),t&2&&n("styleClass","p-breadcrumb-item-icon")}function He(t,o){if(t&1&&(l(0,"span",19),p(1),m()),t&2){let e=a(4);r(),C(e.home.label)}}function qe(t,o){if(t&1&&s(0,"span",20),t&2){let e=a(4);n("innerHTML",e.home.label,M)}}function je(t,o){if(t&1&&(h(0),u(1,He,2,1,"span",18)(2,qe,1,1,"ng-template",null,0,f),y()),t&2){let e=k(3),i=a(3);r(),n("ngIf",i.home.escape!==!1)("ngIfElse",e)}}function Pe(t,o){if(t&1){let e=R();l(0,"a",12),$("click",function(c){D(e);let _=a(2);return L(_.onClick(c,_.home))}),u(1,Fe,1,2,"span",13)(2,Ae,1,1,"HomeIcon",14)(3,je,4,2,"ng-container",15),m()}if(t&2){let e=a(2);n("href",e.home.url?e.home.url:null,w)("target",e.home.target),b("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:"0"),r(),n("ngIf",e.home.icon),r(),n("ngIf",!e.home.icon),r(),n("ngIf",e.home.label)}}function Ne(t,o){if(t&1&&s(0,"span",16),t&2){let e=a(3);n("ngClass",e.home.icon)("ngStyle",e.home.iconStyle)}}function Ve(t,o){t&1&&s(0,"HomeIcon",17),t&2&&n("styleClass","p-breadcrumb-item-icon")}function Ue(t,o){if(t&1&&(l(0,"span",19),p(1),m()),t&2){let e=a(4);r(),C(e.home.label)}}function ze(t,o){if(t&1&&s(0,"span",20),t&2){let e=a(4);n("innerHTML",e.home.label,M)}}function Qe(t,o){if(t&1&&(h(0),u(1,Ue,2,1,"span",18)(2,ze,1,1,"ng-template",null,1,f),y()),t&2){let e=k(3),i=a(3);r(),n("ngIf",i.home.escape!==!1)("ngIfElse",e)}}function Ke(t,o){if(t&1){let e=R();l(0,"a",21),$("click",function(c){D(e);let _=a(2);return L(_.onClick(c,_.home))}),u(1,Ne,1,2,"span",13)(2,Ve,1,1,"HomeIcon",14)(3,Qe,4,2,"ng-container",15),m()}if(t&2){let e=a(2);n("routerLink",e.home.routerLink)("queryParams",e.home.queryParams)("routerLinkActiveOptions",e.home.routerLinkActiveOptions||O(16,Ce))("target",e.home.target)("fragment",e.home.fragment)("queryParamsHandling",e.home.queryParamsHandling)("preserveFragment",e.home.preserveFragment)("skipLocationChange",e.home.skipLocationChange)("replaceUrl",e.home.replaceUrl)("state",e.home.state),b("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:"0"),r(),n("ngIf",e.home.icon),r(),n("ngIf",!e.home.icon),r(),n("ngIf",e.home.label)}}function We(t,o){if(t&1&&(l(0,"li",9),u(1,Pe,4,8,"a",10)(2,Ke,4,17,"a",11),m()),t&2){let e=a();S(e.home.styleClass),n("ngClass",B(9,Re,e.home.disabled))("ngStyle",e.home.style)("tooltipOptions",e.home.tooltipOptions),b("id",e.home.id)("data-pc-section","home"),r(),n("ngIf",!e.home.routerLink),r(),n("ngIf",e.home.routerLink)}}function Ge(t,o){t&1&&s(0,"ChevronRightIcon")}function Je(t,o){}function Xe(t,o){t&1&&u(0,Je,0,0,"ng-template")}function Ye(t,o){if(t&1&&(l(0,"li",22),u(1,Ge,1,0,"ChevronRightIcon",15)(2,Xe,1,0,null,23),m()),t&2){let e=a();b("data-pc-section","separator"),r(),n("ngIf",!e.separatorTemplate&&!e._separatorTemplate),r(),n("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function Ze(t,o){}function et(t,o){t&1&&u(0,Ze,0,0,"ng-template")}function tt(t,o){if(t&1&&u(0,et,1,0,null,26),t&2){let e=a(2).$implicit,i=a();n("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",B(2,Oe,e))}}function it(t,o){if(t&1&&s(0,"span",16),t&2){let e=a(5).$implicit;n("ngClass",e==null?null:e.icon)("ngStyle",e==null?null:e.iconStyle)}}function nt(t,o){if(t&1&&(l(0,"span",19),p(1),m()),t&2){let e=a(6).$implicit;r(),C(e==null?null:e.label)}}function rt(t,o){if(t&1&&s(0,"span",20),t&2){let e=a(6).$implicit;n("innerHTML",e==null?null:e.label,M)}}function ot(t,o){if(t&1&&(h(0),u(1,nt,2,1,"span",18)(2,rt,1,1,"ng-template",null,2,f),y()),t&2){let e=k(3),i=a(5).$implicit;r(),n("ngIf",(i==null?null:i.escape)!==!1)("ngIfElse",e)}}function at(t,o){if(t&1&&(h(0),u(1,it,1,2,"span",13)(2,ot,4,2,"ng-container",15),y()),t&2){let e=a(4).$implicit;r(),n("ngIf",e==null?null:e.icon),r(),n("ngIf",e==null?null:e.label)}}function lt(t,o){if(t&1){let e=R();l(0,"a",28),$("click",function(c){D(e);let _=a(3).$implicit,g=a();return L(g.onClick(c,_))}),u(1,at,3,2,"ng-container",15),m()}if(t&2){let e=a(3).$implicit,i=a();n("target",e==null?null:e.target),b("href",e!=null&&e.url?e==null?null:e.url:null,w)("title",e==null?null:e.title)("tabindex",e!=null&&e.disabled?null:"0"),r(),n("ngIf",!i.itemTemplate&&!i._itemTemplate)}}function mt(t,o){if(t&1&&s(0,"span",16),t&2){let e=a(4).$implicit;n("ngClass",e==null?null:e.icon)("ngStyle",e==null?null:e.iconStyle)}}function ct(t,o){if(t&1&&(l(0,"span",19),p(1),m()),t&2){let e=a(5).$implicit;r(),C(e==null?null:e.label)}}function pt(t,o){if(t&1&&s(0,"span",20),t&2){let e=a(5).$implicit;n("innerHTML",e==null?null:e.label,M)}}function st(t,o){if(t&1&&(h(0),u(1,ct,2,1,"span",18)(2,pt,1,1,"ng-template",null,3,f),y()),t&2){let e=k(3),i=a(4).$implicit;r(),n("ngIf",(i==null?null:i.escape)!==!1)("ngIfElse",e)}}function ut(t,o){if(t&1){let e=R();l(0,"a",21),$("click",function(c){D(e);let _=a(3).$implicit,g=a();return L(g.onClick(c,_))}),u(1,mt,1,2,"span",13)(2,st,4,2,"ng-container",15),m()}if(t&2){let e=a(3).$implicit;n("routerLink",e==null?null:e.routerLink)("queryParams",e==null?null:e.queryParams)("routerLinkActiveOptions",(e==null?null:e.routerLinkActiveOptions)||O(14,Ce))("target",e==null?null:e.target)("fragment",e==null?null:e.fragment)("queryParamsHandling",e==null?null:e.queryParamsHandling)("preserveFragment",e==null?null:e.preserveFragment)("skipLocationChange",e==null?null:e.skipLocationChange)("replaceUrl",e==null?null:e.replaceUrl)("state",e==null?null:e.state),b("title",e==null?null:e.title)("tabindex",e!=null&&e.disabled?null:"0"),r(),n("ngIf",e==null?null:e.icon),r(),n("ngIf",e==null?null:e.label)}}function dt(t,o){if(t&1&&u(0,lt,2,5,"a",27)(1,ut,3,15,"a",11),t&2){let e=a(2).$implicit;n("ngIf",!(e!=null&&e.routerLink)),r(),n("ngIf",e==null?null:e.routerLink)}}function _t(t,o){if(t&1&&(l(0,"li",25),te(1,tt,1,4)(2,dt,2,2),m()),t&2){let e=a().$implicit,i=a();S(e.styleClass),n("ngStyle",e.style)("ngClass",B(8,$e,e.disabled))("tooltipOptions",e.tooltipOptions),b("id",e.id)("data-pc-section","menuitem"),r(),ie(i.itemTemplate||i._itemTemplate?1:2)}}function bt(t,o){t&1&&s(0,"ChevronRightIcon")}function ft(t,o){}function gt(t,o){t&1&&u(0,ft,0,0,"ng-template")}function xt(t,o){if(t&1&&(l(0,"li",22),u(1,bt,1,0,"ChevronRightIcon",15)(2,gt,1,0,null,23),m()),t&2){let e=a(2);b("data-pc-section","separator"),r(),n("ngIf",!e.separatorTemplate&&!e._separatorTemplate),r(),n("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function ht(t,o){if(t&1&&u(0,_t,3,10,"li",24)(1,xt,3,3,"li",7),t&2){let e=o.$implicit,i=o.last;n("ngIf",e.visible!==!1),r(),n("ngIf",!i&&e.visible!==!1)}}var I=(()=>{class t extends ue{router;model;style;styleClass;home;homeAriaLabel;onItemClick=new X;_componentStyle=J(Q);constructor(e){super(),this.router=e}onClick(e,i){if(i.disabled){e.preventDefault();return}!i.url&&!i.routerLink&&e.preventDefault(),i.command&&i.command({originalEvent:e,item:i}),this.onItemClick.emit({originalEvent:e,item:i})}itemTemplate;separatorTemplate;templates;_separatorTemplate;_itemTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"separator":this._separatorTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}static \u0275fac=function(i){return new(i||t)(Z(me))};static \u0275cmp=d({type:t,selectors:[["p-breadcrumb"]],contentQueries:function(i,c,_){if(i&1&&ne(_,Me,5)(_,we,5)(_,ce,4),i&2){let g;F(g=A())&&(c.itemTemplate=g.first),F(g=A())&&(c.separatorTemplate=g.first),F(g=A())&&(c.templates=g)}},inputs:{model:"model",style:"style",styleClass:"styleClass",home:"home",homeAriaLabel:"homeAriaLabel"},outputs:{onItemClick:"onItemClick"},features:[re([Q]),ee],decls:5,vars:10,consts:[["htmlHomeLabel",""],["htmlHomeRouteLabel",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[1,"p-breadcrumb-list"],["pTooltip","",3,"class","ngClass","ngStyle","tooltipOptions",4,"ngIf"],["class","p-breadcrumb-separator",4,"ngIf"],["ngFor","",3,"ngForOf"],["pTooltip","",3,"ngClass","ngStyle","tooltipOptions"],["class","p-breadcrumb-item-link",3,"href","target","click",4,"ngIf"],["class","p-breadcrumb-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click",4,"ngIf"],[1,"p-breadcrumb-item-link",3,"click","href","target"],["class","p-breadcrumb-item-icon",3,"ngClass","ngStyle",4,"ngIf"],[3,"styleClass",4,"ngIf"],[4,"ngIf"],[1,"p-breadcrumb-item-icon",3,"ngClass","ngStyle"],[3,"styleClass"],["class","p-breadcrumb-item-label",4,"ngIf","ngIfElse"],[1,"p-breadcrumb-item-label"],[1,"p-breadcrumb-item-label",3,"innerHTML"],[1,"p-breadcrumb-item-link",3,"click","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[1,"p-breadcrumb-separator"],[4,"ngTemplateOutlet"],["pTooltip","",3,"class","ngStyle","ngClass","tooltipOptions",4,"ngIf"],["pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-breadcrumb-item-link",3,"target","click",4,"ngIf"],[1,"p-breadcrumb-item-link",3,"click","target"]],template:function(i,c){i&1&&(l(0,"nav",4)(1,"ol",5),u(2,We,3,11,"li",6)(3,Ye,3,3,"li",7)(4,ht,2,2,"ng-template",8),m()()),i&2&&(S(c.styleClass),n("ngStyle",c.style)("ngClass","p-breadcrumb p-component"),b("data-pc-name","breadcrumb")("data-pc-section","root"),r(),b("data-pc-section","menu"),r(),n("ngIf",c.home&&c.home.visible!==!1),r(),n("ngIf",c.model&&c.home),r(),n("ngForOf",c.model))},dependencies:[j,H,oe,q,le,ae,P,E,fe,be,de,_e,pe],encapsulation:2,changeDetection:0})}return t})();var ve=(()=>{class t{items;home;ngOnInit(){this.items=[{label:"Electronics"},{label:"Computer"},{label:"Accessories"},{label:"Keyboard"},{label:"Wireless"}],this.home={icon:"pi pi-home"}}code={basic:'<p-breadcrumb class="max-w-full" [model]="items" [home]="home" />',html:`<div class="card flex justify-center">
    <p-breadcrumb class="max-w-full" [model]="items" [home]="home" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
    selector: 'breadcrumb-basic-demo',
    templateUrl: './breadcrumb-basic-demo.html',
    standalone: true,
    imports: [Breadcrumb]
})
export class BreadcrumbBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Electronics' },
            { label: 'Computer' },
            { label: 'Accessories' },
            { label: 'Keyboard' },
            { label: 'Wireless' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["breadcrumb-basic-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],[1,"max-w-full",3,"model","home"],["selector","breadcrumb-basic-demo",3,"code"]],template:function(i,c){i&1&&(l(0,"app-docsectiontext")(1,"p"),p(2,"Breadcrumb provides contextual information about page hierarchy."),m()(),l(3,"div",0),s(4,"p-breadcrumb",1),m(),s(5,"app-code",2)),i&2&&(r(4),n("model",c.items)("home",c.home),r(),n("code",c.code))},dependencies:[v,I,x],encapsulation:2})}return t})();var Te=(()=>{class t{code={typescript:"import { BreadcrumbModule } from 'primeng/breadcrumb';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["breadcrumb-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,c){i&1&&s(0,"app-code",0),i&2&&n("code",c.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return t})();var yt=t=>[t,"text-color"];function Ct(t,o){if(t&1&&(h(0),l(1,"a",6),s(2,"span",7),l(3,"span",8),p(4),m()(),y()),t&2){let e=a().$implicit;r(),n("routerLink",e.route),r(),n("ngClass",B(3,yt,e.icon?e.icon:"")),r(2),C(e.label)}}function vt(t,o){if(t&1&&(l(0,"a",9)(1,"span",10),p(2),m()()),t&2){let e=a().$implicit;n("href",e.url,w),r(2),C(e.label)}}function Tt(t,o){if(t&1&&u(0,Ct,5,5,"ng-container",5)(1,vt,3,2,"ng-template",null,1,f),t&2){let e=o.$implicit,i=k(2);n("ngIf",e.route)("ngIfElse",i)}}var Ie=(()=>{class t{items;home;ngOnInit(){this.items=[{icon:"pi pi-home",route:"/installation"},{label:"Components"},{label:"Form"},{label:"InputText",route:"/inputtext"}]}code={basic:`<p-breadcrumb class="max-w-full" [model]="items">
    <ng-template #item let-item>
        <ng-container *ngIf="item.route; else elseBlock">
            <a [routerLink]="item.route" class="p-breadcrumb-item-link">
                <span [ngClass]="[item.icon ? item.icon : '', 'text-color']"></span>
                <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #elseBlock>
            <a [href]="item.url">
                <span class="text-color">{{ item.label }}</span>
            </a>
        </ng-template>
    </ng-template>
</p-breadcrumb>`,html:`<div class="card flex justify-center">
    <p-breadcrumb class="max-w-full" [model]="items">
        <ng-template #item let-item>
            <ng-container *ngIf="item.route; else elseBlock">
                <a [routerLink]="item.route" class="p-breadcrumb-item-link">
                    <span [ngClass]="[item.icon ? item.icon : '', 'text-color']"></span>
                    <span class="text-primary font-semibold">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #elseBlock>
                <a [href]="item.url">
                    <span class="text-color">{{ item.label }}</span>
                </a>
            </ng-template>
        </ng-template>
    </p-breadcrumb>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'breadcrumb-router-demo',
    templateUrl: './breadcrumb-router-demo.html',
    standalone: true,
    imports: [Breadcrumb, RouterModule]
})
export class BreadcrumbRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["breadcrumb-router-demo"]],standalone:!1,decls:8,vars:2,consts:[["item",""],["elseBlock",""],[1,"card","flex","justify-center"],[1,"max-w-full",3,"model"],["selector","breadcrumb-router-demo",3,"code"],[4,"ngIf","ngIfElse"],[1,"p-breadcrumb-item-link",3,"routerLink"],[3,"ngClass"],[1,"text-primary","font-semibold"],[3,"href"],[1,"text-color"]],template:function(i,c){i&1&&(l(0,"app-docsectiontext")(1,"p"),p(2,"Items with navigation are defined with templating to be able to use a routerLink directive, an external link or programmatic navigation."),m()(),l(3,"div",2)(4,"p-breadcrumb",3),u(5,Tt,3,2,"ng-template",null,0,f),m()(),s(7,"app-code",4)),i&2&&(r(4),n("model",c.items),r(3),n("code",c.code))},dependencies:[H,q,v,E,I,x],encapsulation:2})}return t})();function It(t,o){if(t&1&&(l(0,"a",5),s(1,"i"),m()),t&2){let e=o.$implicit;n("routerLink",e.url),r(),S(e.icon)}}function kt(t,o){t&1&&p(0," / ")}var ke=(()=>{class t{items;home;ngOnInit(){this.items=[{icon:"pi pi-sitemap"},{icon:"pi pi-book"},{icon:"pi pi-wallet"},{icon:"pi pi-shopping-bag"},{icon:"pi pi-calculator"}],this.home={icon:"pi pi-home"}}code={basic:`<p-breadcrumb class="max-w-full" [model]="items" [home]="home">
    <ng-template #item let-item>
        <a class="cursor-pointer" [routerLink]="item.url">
            <i [class]="item.icon"></i>
        </a>
    </ng-template>
    <ng-template #separator> / </ng-template>
</p-breadcrumb>`,html:`<div class="card flex justify-center">
    <p-breadcrumb class="max-w-full" [model]="items" [home]="home">
        <ng-template #item let-item>
            <a class="cursor-pointer" [routerLink]="item.url">
                <i [class]="item.icon"></i>
            </a>
        </ng-template>
        <ng-template #separator> / </ng-template>
    </p-breadcrumb>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'breadcrumb-template-demo',
    templateUrl: './breadcrumb-template-demo.html',
    standalone: true,
    imports: [Breadcrumb, RouterModule]
})
export class BreadcrumbTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }];

        this.home = { icon: 'pi pi-home' };
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["breadcrumb-template-demo"]],standalone:!1,decls:16,vars:3,consts:[["item",""],["separator",""],[1,"card","flex","justify-center"],[1,"max-w-full",3,"model","home"],["selector","breadcrumb-template-demo",3,"code"],[1,"cursor-pointer",3,"routerLink"]],template:function(i,c){i&1&&(l(0,"app-docsectiontext")(1,"p"),p(2,"Custom content can be placed inside the items using the "),l(3,"i"),p(4,"item"),m(),p(5," template. The divider between the items has its own "),l(6,"i"),p(7,"separator"),m(),p(8," template."),m()(),l(9,"div",2)(10,"p-breadcrumb",3),u(11,It,2,3,"ng-template",null,0,f)(13,kt,1,0,"ng-template",null,1,f),m()(),s(15,"app-code",4)),i&2&&(r(10),n("model",c.items)("home",c.home),r(5),n("code",c.code))},dependencies:[v,E,I,x],encapsulation:2})}return t})();var Se=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=V({imports:[j,ge,P,I,z,z]})}return t})();var St=()=>["Breadcrumb","MenuItem"],Be=(()=>{class t{docs=[{id:"import",label:"Import",component:Te},{id:"basic",label:"Basic",component:ve},{id:"template",label:"Template",component:ke},{id:"router",label:"Router",component:Ie},{id:"accessibility",label:"Accessibility",component:he}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Breadcrumb Component","header","Breadcrumb","description","Breadcrumb provides contextual information about page hierarchy.","themeDocs","Breadcrumb",3,"docs","apiDocs"]],template:function(i,c){i&1&&s(0,"app-doc",0),i&2&&n("docs",c.docs)("apiDocs",O(2,St))},dependencies:[Se,xe],encapsulation:2})}return t})();var Di=[{path:"",component:Be}];export{Di as default};
