import{a as f}from"./chunk-AOPLLNOY.js";import{a as z,b as G}from"./chunk-F4X3V2LA.js";import{a as W,b as X}from"./chunk-RPICNBEK.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as d,d as ee,e as w}from"./chunk-I6RUY6VJ.js";import{a as u,b as Y}from"./chunk-CIUCWEWU.js";import{u as J,v as Q}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{f as $,g as K}from"./chunk-DEL7GGHP.js";import{d as j,e as N,i as P}from"./chunk-UHCZASEU.js";import{Ka as q,qa as E}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as O,m as M,u as U}from"./chunk-O4W5DSIC.js";import{$b as y,Ab as m,Eb as R,Fb as A,Ka as T,O as D,Ob as g,Qa as l,Xb as _,Z as k,Za as L,ac as e,bc as v,eb as c,fb as V,kb as h,kc as Z,lc as H,mc as F,nc as B,xb as r,yb as t,zb as i,zc as b}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var te=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["menubar-accessibility-doc"]],standalone:!1,decls:157,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,p){a&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Menubar component uses the "),t(6,"i"),e(7,"menubar"),i(),e(8," role and the value to describe the menu can either be provided with "),t(9,"i"),e(10,"aria-labelledby"),i(),e(11," or "),t(12,"i"),e(13,"aria-label"),i(),e(14," props. Each list item has a "),t(15,"i"),e(16,"presentation"),i(),e(17," role whereas anchor elements have a "),t(18,"i"),e(19,"menuitem"),i(),e(20," role with "),t(21,"i"),e(22,"aria-label"),i(),e(23," referring to the label of the item and "),t(24,"i"),e(25,"aria-disabled"),i(),e(26," defined if the item is disabled. A submenu within a MenuBar uses the "),t(27,"i"),e(28,"menu"),i(),e(29," role with an "),t(30,"i"),e(31,"aria-labelledby"),i(),e(32," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),t(33,"i"),e(34,"aria-haspopup"),i(),e(35,", "),t(36,"i"),e(37,"aria-expanded"),i(),e(38," and "),t(39,"i"),e(40,"aria-controls"),i(),e(41," to define the relation between the item and the submenu. "),i(),t(42,"p"),e(43," In mobile viewports, a menu icon appears with a "),t(44,"i"),e(45,"button"),i(),e(46," role along with "),t(47,"i"),e(48,"aria-haspopup"),i(),e(49,", "),t(50,"i"),e(51,"aria-expanded"),i(),e(52," and "),t(53,"i"),e(54,"aria-controls"),i(),e(55," to manage the relation between the overlay menubar and the button. The value to describe the button can be defined "),t(56,"i"),e(57,"aria-label"),i(),e(58," or "),t(59,"i"),e(60,"aria-labelledby"),i(),e(61," specified using "),t(62,"i"),e(63,"buttonProps"),i(),e(64,", by default "),t(65,"i"),e(66,"navigation"),i(),e(67," key of the "),t(68,"i"),e(69,"aria"),i(),e(70," property from the "),t(71,"a",0),e(72,"locale"),i(),e(73," API as the "),t(74,"i"),e(75,"aria-label"),i(),e(76,". "),i(),t(77,"h3"),e(78,"Keyboard Support"),i(),t(79,"div",1)(80,"table",2)(81,"thead")(82,"tr")(83,"th"),e(84,"Key"),i(),t(85,"th"),e(86,"Function"),i()()(),t(87,"tbody")(88,"tr")(89,"td")(90,"i"),e(91,"tab"),i()(),t(92,"td"),e(93,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"shift"),i(),e(98," + "),t(99,"i"),e(100,"tab"),i()(),t(101,"td"),e(102,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),i()(),t(103,"tr")(104,"td")(105,"i"),e(106,"enter"),i()(),t(107,"td"),e(108,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(109,"tr")(110,"td")(111,"i"),e(112,"space"),i()(),t(113,"td"),e(114,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(115,"tr")(116,"td")(117,"i"),e(118,"escape"),i()(),t(119,"td"),e(120,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),i()(),t(121,"tr")(122,"td")(123,"i"),e(124,"down arrow"),i()(),t(125,"td"),e(126,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),i()(),t(127,"tr")(128,"td")(129,"i"),e(130,"up arrow"),i()(),t(131,"td"),e(132,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),i()(),t(133,"tr")(134,"td")(135,"i"),e(136,"right arrow"),i()(),t(137,"td"),e(138,"If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item."),i()(),t(139,"tr")(140,"td")(141,"i"),e(142,"left arrow"),i()(),t(143,"td"),e(144,"If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu."),i()(),t(145,"tr")(146,"td")(147,"i"),e(148,"home"),i()(),t(149,"td"),e(150,"Moves focus to the first menuitem within the submenu."),i()(),t(151,"tr")(152,"td")(153,"i"),e(154,"end"),i()(),t(155,"td"),e(156,"Moves focus to the last menuitem within the submenu."),i()()()()()()())},dependencies:[d],encapsulation:2})}return n})();var ie=(()=>{class n{items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home"},{label:"Features",icon:"pi pi-star"},{label:"Projects",icon:"pi pi-search",items:[{label:"Components",icon:"pi pi-bolt"},{label:"Blocks",icon:"pi pi-server"},{label:"UI Kit",icon:"pi pi-pencil"},{label:"Templates",icon:"pi pi-palette",items:[{label:"Apollo",icon:"pi pi-palette"},{label:"Ultima",icon:"pi pi-palette"}]}]},{label:"Contact",icon:"pi pi-envelope"}]}code={basic:'<p-menubar [model]="items" />',html:`<div class="card">
    <p-menubar [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    selector: 'menubar-basic-demo',
    templateUrl: './menubar-basic-demo.html',
    standalone: true,
    imports: [Menubar]
})
export class MenubarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["basic-doc"]],standalone:!1,decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-basic-demo",3,"code"]],template:function(a,p){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menubar requires nested menuitems as its model."),i()(),t(3,"div",0),m(4,"p-menubar",1),i(),m(5,"app-code",2)),a&2&&(l(4),r("model",p.items),l(),r("code",p.code))},dependencies:[u,f,d],encapsulation:2})}return n})();var ne=(()=>{class n{messageService;items;constructor(o){this.messageService=o}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}]}code={basic:`<p-toast />
<p-menubar [model]="items" />`,html:`<div class="card">
    <p-toast />
    <p-menubar [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'menubar-command-demo',
    templateUrl: './menubar-command-demo.html',
    standalone: true,
    imports: [Menubar, ToastModule],
    providers: [MessageService]
})
export class MenubarCommandDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                        }
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        command: () => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                        }
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                }
            },
            {
                separator: true
            },
            {
                label: 'Sync',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Import',
                        icon: 'pi pi-cloud-download',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                        }
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-cloud-upload',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                        }
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(a){return new(a||n)(L(E))};static \u0275cmp=c({type:n,selectors:[["command-doc"]],standalone:!1,features:[Z([E])],decls:10,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-command-demo",3,"code"]],template:function(a,p){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"command"),i(),e(5," property defines the callback to run when an item is activated by click or a key event."),i()(),t(6,"div",0),m(7,"p-toast")(8,"p-menubar",1),i(),m(9,"app-code",2)),a&2&&(l(8),r("model",p.items),l(),r("code",p.code))},dependencies:[u,f,d,z],encapsulation:2})}return n})();var oe=(()=>{class n{code={typescript:"import { MenubarModule } from 'primeng/menubar';"};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["menubar-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,p){a&1&&m(0,"app-code",0),a&2&&r("code",p.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return n})();function se(n,s){if(n&1&&(R(0),t(1,"a",7),m(2,"span"),t(3,"span",8),e(4),i()(),A()),n&2){let o=g().$implicit;l(),r("routerLink",o.route),l(),y(o.icon),l(2),v(o.label)}}function ce(n,s){if(n&1&&(t(0,"a",10),m(1,"span"),t(2,"span",8),e(3),i()()),n&2){let o=g(2).$implicit;r("href",o.url,T),l(),y(o.icon),l(2),v(o.label)}}function de(n,s){if(n&1&&h(0,ce,4,4,"a",9),n&2){let o=g().$implicit,a=_(4);r("ngIf",o.url)("ngIfElse",a)}}function ue(n,s){if(n&1&&(t(0,"div",11),m(1,"span"),t(2,"span",8),e(3),i(),m(4,"span",12),i()),n&2){let o=g().$implicit;l(),y(o.icon),l(2),v(o.label)}}function fe(n,s){if(n&1&&h(0,se,5,4,"ng-container",6)(1,de,1,2,"ng-template",null,1,b)(3,ue,5,3,"ng-template",null,2,b),n&2){let o=s.$implicit,a=_(2);r("ngIf",o.route)("ngIfElse",a)}}var ae=(()=>{class n{router;items;constructor(o){this.router=o}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Installation",route:"/installation"},{label:"Configuration",route:"/configuration"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",url:"https://angular.io/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]}code={basic:`<p-menubar [model]="items">
    <ng-template  #item let-item>
        <ng-container *ngIf="item.route; else urlRef">
            <a [routerLink]="item.route" class="p-menubar-item-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #urlRef>
            <a *ngIf="item.url; else noLink" [href]="item.url" class="p-menubar-item-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-template>
        <ng-template #noLink>
            <div class="p-menubar-item-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <span class="pi pi-fw pi-angle-down ml-2"></span>
            </div>
        </ng-template>
    </ng-template>
</p-menubar>`,html:`<div class="card">
    <p-menubar [model]="items">
        <ng-template  #item let-item>
            <ng-container *ngIf="item.route; else urlRef">
                <a [routerLink]="item.route" class="p-menubar-item-link">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #urlRef>
                <a *ngIf="item.url; else noLink" [href]="item.url" class="p-menubar-item-link">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-template>
            <ng-template #noLink>
                <div class="p-menubar-item-link">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <span class="pi pi-fw pi-angle-down ml-2"></span>
                </div>
            </ng-template>
        </ng-template>
    </p-menubar>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'menubar-router-demo',
    templateUrl: './menubar-router-demo.html',
    standalone: true,
    imports: [Menubar, CommonModule],
})
export class MenubarRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        route: '/installation'
                    },
                    {
                        label: 'Configuration',
                        route: '/configuration'
                    }
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(a){return new(a||n)(L(j))};static \u0275cmp=c({type:n,selectors:[["router-doc"]],standalone:!1,decls:8,vars:2,consts:[["item",""],["urlRef",""],["noLink",""],[1,"card"],[3,"model"],["selector","menubar-router-demo",3,"code"],[4,"ngIf","ngIfElse"],[1,"p-menubar-item-link",3,"routerLink"],[1,"ml-2"],["class","p-menubar-item-link",3,"href",4,"ngIf","ngIfElse"],[1,"p-menubar-item-link",3,"href"],[1,"p-menubar-item-link"],[1,"pi","pi-fw","pi-angle-down","ml-2"]],template:function(a,p){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Items with navigation are defined with templating to be able to use a routerLink directive, an external link or programmatic navigation."),i()(),t(3,"div",3)(4,"p-menubar",4),h(5,fe,5,2,"ng-template",null,0,b),i()(),m(7,"app-code",5)),a&2&&(l(4),r("model",p.items),l(3),r("code",p.code))},dependencies:[M,u,N,f,d],encapsulation:2})}return n})();var ge=(n,s)=>({"ml-auto":n,"ml-2":s}),be=n=>["ml-auto pi",n];function he(n,s){n&1&&(k(),t(0,"svg",6),m(1,"path",7),t(2,"mask",8),m(3,"path",9),i(),t(4,"g",10),m(5,"path",11),i(),m(6,"path",12)(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21),i())}function ve(n,s){if(n&1&&m(0,"p-badge",26),n&2){let o=g(),a=o.$implicit,p=o.root;r("ngClass",B(2,ge,!p,p))("value",a.badge)}}function xe(n,s){if(n&1&&(t(0,"span",27),e(1),i()),n&2){let o=g().$implicit;l(),v(o.shortcut)}}function Se(n,s){if(n&1&&m(0,"i",28),n&2){let o=g().root;r("ngClass",F(1,be,o?"pi-angle-down":"pi-angle-right"))}}function Le(n,s){if(n&1&&(t(0,"a",22)(1,"span"),e(2),i(),h(3,ve,1,5,"p-badge",23)(4,xe,2,1,"span",24)(5,Se,1,3,"i",25),i()),n&2){let o=s.$implicit;l(2),v(o.label),l(),r("ngIf",o.badge),l(),r("ngIf",o.shortcut),l(),r("ngIf",o.items)}}function ye(n,s){n&1&&(t(0,"div",29),m(1,"input",30)(2,"p-avatar",31),i())}var re=(()=>{class n{items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home"},{label:"Projects",icon:"pi pi-search",badge:"3",items:[{label:"Core",icon:"pi pi-bolt",shortcut:"\u2318+S"},{label:"Blocks",icon:"pi pi-server",shortcut:"\u2318+B"},{separator:!0},{label:"UI Kit",icon:"pi pi-pencil",shortcut:"\u2318+U"}]}]}code={basic:`<p-menubar [model]="items">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item let-root="root">
        <a pRipple class="flex items-center p-menubar-item-link">
            <span>{{ item.label }}</span>
            <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
        </a>
    </ng-template>
    <ng-template #end>
        <div class="flex items-center gap-2">
            <input type="text" pInputText placeholder="Search" class="w-36" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </div>
    </ng-template>
</p-menubar>`,html:`<div class="card">
    <p-menubar [model]="items">
        <ng-template #start>
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
                </mask>
                <g mask="url(#mask0_1_52)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                        fill="var(--p-primary-color)"
                    />
                </g>
                <path
                    d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--ground-background)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                    fill="var(--ground-background)"
                />
            </svg>
        </ng-template>
        <ng-template #item let-item let-root="root">
            <a pRipple class="flex items-center p-menubar-item-link">
                <span>{{ item.label }}</span>
                <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
            </a>
        </ng-template>
        <ng-template #end>
            <div class="flex items-center gap-2">
                <input type="text" pInputText placeholder="Search" class="w-36" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            </div>
        </ng-template>
    </p-menubar>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'menubar-template-demo',
    templateUrl: './menubar-template-demo.html',
    standalone: true,
    imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule]
})
export class MenubarTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '\u2318+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '\u2318+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '\u2318+U',
                    },
                ],
            },
        ];
    }
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["menubar-template-demo"]],standalone:!1,decls:18,vars:2,consts:[["start",""],["item",""],["end",""],[1,"card"],[3,"model"],["selector","menubar-template-demo",3,"code"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["pRipple","",1,"flex","items-center","p-menubar-item-link"],[3,"ngClass","value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass","value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[3,"ngClass"],[1,"flex","items-center","gap-2"],["type","text","pInputText","","placeholder","Search",1,"w-36"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(a,p){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside the menubar using the "),t(3,"i"),e(4,"start"),i(),e(5," and "),t(6,"i"),e(7,"end"),i(),e(8," templates."),i()(),t(9,"div",3)(10,"p-menubar",4),h(11,he,16,0,"ng-template",null,0,b)(13,Le,6,4,"ng-template",null,1,b)(15,ye,3,0,"ng-template",null,2,b),i()(),m(17,"app-code",5)),a&2&&(l(10),r("model",p.items),l(7),r("code",p.code))},dependencies:[O,M,u,f,J,d,$,q,W],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=V({type:n});static \u0275inj=D({imports:[U,Y,P,f,Q,w,K,X,G,w]})}return n})();var Me=()=>["Menubar","MenuItem"],le=(()=>{class n{docs=[{id:"import",label:"Import",component:oe},{id:"basic",label:"Basic",component:ie},{id:"template",label:"Template",component:re},{id:"command",label:"Command",component:ne},{id:"router",label:"Router",component:ae},{id:"accessibility",label:"Accessibility",component:te}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Menubar Component","header","Menubar","description","Menubar is a horizontal menu component.","themeDocs","menubar",3,"docs","apiDocs"]],template:function(a,p){a&1&&m(0,"app-doc",0),a&2&&r("docs",p.docs)("apiDocs",H(2,Me))},dependencies:[me,ee],encapsulation:2})}return n})();var Lt=[{path:"",component:le}];export{Lt as default};
