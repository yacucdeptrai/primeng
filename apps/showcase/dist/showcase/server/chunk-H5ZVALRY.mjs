import './polyfills.server.mjs';
import{a as f}from"./chunk-JK4FPM6O.mjs";import{a as G,b as H}from"./chunk-PPCUCQZZ.mjs";import{a as X}from"./chunk-IIW25JG6.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as d,d as Q,e as R}from"./chunk-HZSAMTDM.mjs";import{a as u,b as J}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as z,ba as K,f as W,g as q}from"./chunk-DE54ZEHA.mjs";import{qa as I}from"./chunk-YQJJ7I3T.mjs";import{e as U,f as V,j as $}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{n as D,v as L}from"./chunk-RUZVPFSZ.mjs";import{$a as M,$b as y,Bb as l,Cb as t,Db as i,Dc as v,Eb as r,Ib as w,Jb as k,Lb as N,Ma as C,O,Qb as j,Sa as m,Sb as g,X as A,Y as F,dc as E,ec as e,fc as x,gb as s,hb as P,mb as h,pc as B}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Y=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["tiered-menu-accessibility-doc"]],standalone:!1,decls:136,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,p){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," TieredMenu component uses the "),t(6,"i"),e(7,"menubar"),i(),e(8," role with "),t(9,"i"),e(10,"aria-orientation"),i(),e(11,' set to "vertical" and the value to describe the menu can either be provided with '),t(12,"i"),e(13,"aria-labelledby"),i(),e(14," or "),t(15,"i"),e(16,"aria-label"),i(),e(17," props. Each list item has a "),t(18,"i"),e(19,"presentation"),i(),e(20," role whereas anchor elements have a "),t(21,"i"),e(22,"menuitem"),i(),e(23," role with "),t(24,"i"),e(25,"aria-label"),i(),e(26," referring to the label of the item and "),t(27,"i"),e(28,"aria-disabled"),i(),e(29," defined if the item is disabled. A submenu within a TieredMenu uses the "),t(30,"i"),e(31,"menu"),i(),e(32," role with an "),t(33,"i"),e(34,"aria-labelledby"),i(),e(35," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),t(36,"i"),e(37,"aria-haspopup"),i(),e(38,", "),t(39,"i"),e(40,"aria-expanded"),i(),e(41," and "),t(42,"i"),e(43,"aria-controls"),i(),e(44," to define the relation between the item and the submenu. "),i(),t(45,"p"),e(46,"In popup mode, the component implicitly manages the "),t(47,"i"),e(48,"aria-expanded"),i(),e(49,", "),t(50,"i"),e(51,"aria-haspopup"),i(),e(52," and "),t(53,"i"),e(54,"aria-controls"),i(),e(55," attributes of the target element to define the relation between the target and the popup."),i(),t(56,"h3"),e(57,"Keyboard Support"),i(),t(58,"div",0)(59,"table",1)(60,"thead")(61,"tr")(62,"th"),e(63,"Key"),i(),t(64,"th"),e(65,"Function"),i()()(),t(66,"tbody")(67,"tr")(68,"td")(69,"i"),e(70,"tab"),i()(),t(71,"td"),e(72,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),i()(),t(73,"tr")(74,"td")(75,"i"),e(76,"shift"),i(),e(77," + "),t(78,"i"),e(79,"tab"),i()(),t(80,"td"),e(81,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),i()(),t(82,"tr")(83,"td")(84,"i"),e(85,"enter"),i()(),t(86,"td"),e(87,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(88,"tr")(89,"td")(90,"i"),e(91,"space"),i()(),t(92,"td"),e(93,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"escape"),i()(),t(98,"td"),e(99,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),i()(),t(100,"tr")(101,"td")(102,"i"),e(103,"down arrow"),i()(),t(104,"td"),e(105,"Moves focus to the next menuitem within the submenu."),i()(),t(106,"tr")(107,"td")(108,"i"),e(109,"up arrow"),i()(),t(110,"td"),e(111,"Moves focus to the previous menuitem within the submenu."),i()(),t(112,"tr")(113,"td")(114,"i"),e(115,"right arrow"),i()(),t(116,"td"),e(117,"Opens a submenu if there is one available and moves focus to the first item."),i()(),t(118,"tr")(119,"td")(120,"i"),e(121,"left arrow"),i()(),t(122,"td"),e(123,"Closes a submenu and moves focus to the root item of the closed submenu."),i()(),t(124,"tr")(125,"td")(126,"i"),e(127,"home"),i()(),t(128,"td"),e(129,"Moves focus to the first menuitem within the submenu."),i()(),t(130,"tr")(131,"td")(132,"i"),e(133,"end"),i()(),t(134,"td"),e(135,"Moves focus to the last menuitem within the submenu."),i()()()()()()())},dependencies:[d],encapsulation:2})}return n})();var Z=(()=>{class n{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}code={basic:'<p-tieredmenu [model]="items" />',html:`<div class="card flex justify-center">
    <p-tieredmenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
    selector: 'tiered-menu-basic-demo',
    templateUrl: './tiered-menu-basic-demo.html',
    standalone: true,
    imports: [TieredMenu]
})
export class TieredMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-basic-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu requires a collection of menuitems as its "),t(3,"i"),e(4,"model"),i(),e(5,"."),i()(),t(6,"div",0),r(7,"p-tieredmenu",1),i(),r(8,"app-code",2)),o&2&&(m(7),l("model",p.items),m(),l("code",p.code))},dependencies:[u,f,d],encapsulation:2})}return n})();var ee=(()=>{class n{messageService;items;constructor(a){this.messageService=a}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}]}code={basic:`<p-toast/>
<p-tieredmenu [model]="items" />`,html:`<div class="card flex justify-center">
    <p-toast/>
    <p-tieredmenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tiered-menu-command-demo',
    templateUrl: './tiered-menu-command-demo.html',
    standalone: true,
    imports: [TieredMenu, ToastModule],
    providers: [MessageService]
})
export class TieredMenuCommandDemo implements OnInit {

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
}`};static \u0275fac=function(o){return new(o||n)(M(I))};static \u0275cmp=s({type:n,selectors:[["command-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-command-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"command"),i(),e(5," property defines the callback to run when an item is activated by click or a key event."),i()(),t(6,"div",0),r(7,"p-toast")(8,"p-tieredmenu",1),i(),r(9,"app-code",2)),o&2&&(m(8),l("model",p.items),m(),l("code",p.code))},dependencies:[u,f,d,G],encapsulation:2})}return n})();var te=(()=>{class n{code={typescript:"import { TieredMenuModule } from 'primeng/tieredmenu';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["tiered-menu-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,p){o&1&&r(0,"app-code",0),o&2&&l("code",p.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return n})();var ie=(()=>{class n{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}code={basic:`<p-button label="Toggle" (click)="menu.toggle($event)" />
<p-tieredmenu #menu [model]="items" [popup]="true" />`,html:`<div class="card flex justify-center">
    <p-button label="Toggle" (click)="menu.toggle($event)" />
    <p-tieredmenu #menu [model]="items" [popup]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tiered-menu-popup-demo',
    templateUrl: './tiered-menu-popup-demo.html',
    standalone: true,
    imports: [TieredMenu, ButtonModule]
})
export class TieredMenuPopupDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["popup-doc"]],standalone:!1,decls:14,vars:3,consts:[["menu",""],[1,"card","flex","justify-center"],["label","Toggle",3,"click"],[3,"model","popup"],["selector","tiered-menu-popup-demo",3,"code"]],template:function(o,p){if(o&1){let le=N();t(0,"app-docsectiontext")(1,"p"),e(2,"Popup mode is enabled by adding "),t(3,"i"),e(4,"popup"),i(),e(5," property and calling "),t(6,"i"),e(7,"toggle"),i(),e(8," method with an event of the target."),i()(),t(9,"div",1)(10,"p-button",2),j("click",function(re){A(le);let pe=y(12);return F(pe.toggle(re))}),i(),r(11,"p-tieredmenu",3,0),i(),r(13,"app-code",4)}o&2&&(m(11),l("model",p.items)("popup",!0),m(2),l("code",p.code))},dependencies:[u,f,z,d],encapsulation:2})}return n})();function ce(n,c){if(n&1&&(w(0),t(1,"a",7),r(2,"span",8),t(3,"span",9),e(4),i()(),k()),n&2){let a=g().$implicit;m(),l("routerLink",a.route)("href",a.href,C),m(3),x(a.label)}}function de(n,c){n&1&&r(0,"span",12)}function ue(n,c){if(n&1&&(w(0),t(1,"a",10),r(2,"span"),t(3,"span",9),e(4),i(),h(5,de,1,0,"span",11),i(),k()),n&2){let a=g(2),o=a.$implicit,p=a.hasSubmenu;m(),l("href",o.url,C)("target",o.target),m(),E(o.icon),m(2),x(o.label),m(),l("ngIf",p)}}function fe(n,c){n&1&&r(0,"span",12)}function he(n,c){if(n&1&&(t(0,"a",13),r(1,"span"),t(2,"span",9),e(3),i(),h(4,fe,1,0,"span",11),i()),n&2){let a=g(2),o=a.$implicit,p=a.hasSubmenu;m(),E(o.icon),m(2),x(o.label),m(),l("ngIf",p)}}function ge(n,c){if(n&1&&h(0,ue,6,6,"ng-container",6)(1,he,5,4,"ng-template",null,2,v),n&2){let a=y(2),o=g().$implicit;l("ngIf",o.url)("ngIfElse",a)}}function be(n,c){if(n&1&&h(0,ce,5,3,"ng-container",6)(1,ge,3,2,"ng-template",null,1,v),n&2){let a=c.$implicit,o=y(2);l("ngIf",a.route)("ngIfElse",o)}}var ne=(()=>{class n{router;items;constructor(a){this.router=a}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Theming",route:"/theming"},{label:"Colors",route:"/colors"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",url:"https://angular.dev/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]}code={basic:`<p-tieredmenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <ng-container *ngIf="item.route; else withoutRoute">
            <a [routerLink]="item.route" [href]="item.href" class="p-tieredmenu-item-link">
                <span class="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #withoutRoute>
            <ng-container *ngIf="item.url; else withoutUrl">
                <a [href]="item.url" [target]="item.target" class="p-tieredmenu-item-link">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                </a>
            </ng-container>
            <ng-template #withoutUrl>
                <a class="p-tieredmenu-item-link">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                </a>
            </ng-template>
        </ng-template>
    </ng-template>
</p-tieredmenu>`,html:`<div class="card flex justify-center">
    <p-tieredmenu [model]="items">
        <ng-template #item let-item let-hasSubmenu="hasSubmenu">
            <ng-container *ngIf="item.route; else withoutRoute">
                <a [routerLink]="item.route" [href]="item.href" class="p-tieredmenu-item-link">
                    <span class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </ng-container>
            <ng-template #withoutRoute>
                <ng-container *ngIf="item.url; else withoutUrl">
                    <a [href]="item.url" [target]="item.target" class="p-tieredmenu-item-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-container>
                <ng-template #withoutUrl>
                    <a class="p-tieredmenu-item-link">
                        <span [class]="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <span *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></span>
                    </a>
                </ng-template>
            </ng-template>
        </ng-template>
    </p-tieredmenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TieredMenu } from 'primeng/tieredmenu';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tiered-menu-router-demo',
    templateUrl: './tiered-menu-router-demo.html',
    standalone: true,
    imports: [TieredMenu, CommonModule]
})
export class TieredMenuRouterDemo implements OnInit {

    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Theming',
                        route: '/theming'
                    },
                    {
                        label: 'Colors',
                        route: '/colors'
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
                        url: 'https://angular.dev/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }


}`};static \u0275fac=function(o){return new(o||n)(M(U))};static \u0275cmp=s({type:n,selectors:[["router-doc"]],standalone:!1,decls:8,vars:2,consts:[["item",""],["withoutRoute",""],["withoutUrl",""],[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-router-demo",3,"code"],[4,"ngIf","ngIfElse"],[1,"p-tieredmenu-item-link",3,"routerLink","href"],[1,"item.icon"],[1,"ml-2"],[1,"p-tieredmenu-item-link",3,"href","target"],["class","pi pi-angle-right ml-auto",4,"ngIf"],[1,"pi","pi-angle-right","ml-auto"],[1,"p-tieredmenu-item-link"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation."),i()(),t(3,"div",3)(4,"p-tieredmenu",4),h(5,be,3,2,"ng-template",null,0,v),i()(),r(7,"app-code",5)),o&2&&(m(4),l("model",p.items),m(3),l("code",p.code))},dependencies:[D,u,V,f,d],encapsulation:2})}return n})();function xe(n,c){if(n&1&&r(0,"p-badge",10),n&2){let a=g().$implicit;l("value",a.badge)}}function ve(n,c){if(n&1&&(t(0,"span",11),e(1),i()),n&2){let a=g().$implicit;m(),x(a.shortcut)}}function Se(n,c){n&1&&r(0,"i",12)}function ye(n,c){if(n&1&&(t(0,"a",4),r(1,"span",5),t(2,"span",6),e(3),i(),h(4,xe,1,1,"p-badge",7)(5,ve,2,1,"span",8)(6,Se,1,0,"i",9),i()),n&2){let a=c.$implicit,o=c.hasSubmenu;m(),E(a.icon),m(2),x(a.label),m(),l("ngIf",a.badge),m(),l("ngIf",a.shortcut),m(),l("ngIf",o)}}var oe=(()=>{class n{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file",shortcut:"\u2318+N"},{label:"Image",icon:"pi pi-image",shortcut:"\u2318+I"},{label:"Video",icon:"pi pi-video",shortcut:"\u2318+L"}]},{label:"Open",icon:"pi pi-folder-open",shortcut:"\u2318+O"},{label:"Print",icon:"pi pi-print",shortcut:"\u2318+P"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy",shortcut:"\u2318+C"},{label:"Delete",icon:"pi pi-times",shortcut:"\u2318+D"}]},{label:"Search",icon:"pi pi-search",shortcut:"\u2318+S"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack",badge:"2"},{label:"Whatsapp",icon:"pi pi-whatsapp",badge:"3"}]}]}code={basic:`<p-tieredMenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex items-center p-tieredmenu-item-link">
            <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-tieredMenu>`,html:`<div class="card flex justify-center">
    <p-tieredMenu [model]="items">
        <ng-template #item let-item let-hasSubmenu="hasSubmenu">
            <a pRipple class="flex items-center p-tieredmenu-item-link">
                <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                    {{ item.shortcut }}
                </span>
                <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
            </a>
        </ng-template>
    </p-tieredMenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'tiered-menu-template-demo',
    templateUrl: './tiered-menu-template-demo.html',
    standalone: true,
    imports: [TieredMenu, BadgeModule, Ripple, CommonModule]
})
export class TieredMenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file',
                                shortcut: '\u2318+N'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image',
                                shortcut: '\u2318+I'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video',
                                shortcut: '\u2318+L'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open',
                        shortcut: '\u2318+O'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        shortcut: '\u2318+P'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy',
                        shortcut: '\u2318+C'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        shortcut: '\u2318+D'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '\u2318+S'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack',
                        badge: '2'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '3'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["template-doc"]],standalone:!1,decls:11,vars:2,consts:[["item",""],[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-template-demo",3,"code"],["pRipple","",1,"flex","items-center","p-tieredmenu-item-link"],[1,"p-tieredmenu-item-icon"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],["class","pi pi-angle-right ml-auto",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[1,"pi","pi-angle-right","ml-auto"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu offers item customization with the "),t(3,"i"),e(4,"item"),i(),e(5," template that receives the menuitem instance from the model as a parameter."),i()(),t(6,"div",1)(7,"p-tieredMenu",2),h(8,ye,7,6,"ng-template",null,0,v),i()(),r(10,"app-code",3)),o&2&&(m(7),l("model",p.items),m(3),l("code",p.code))},dependencies:[D,u,f,d,W],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=P({type:n});static \u0275inj=O({providers:[I],imports:[L,J,$,f,K,R,q,H,X,R]})}return n})();var Ee=()=>["TieredMenu","MenuItem"],me=(()=>{class n{docs=[{id:"import",label:"Import",component:te},{id:"basic",label:"Basic",component:Z},{id:"popup",label:"Popup",component:ie},{id:"template",label:"Template",component:oe},{id:"command",label:"Command",component:ee},{id:"router",label:"Router",component:ne},{id:"accessibility",label:"Accessibility",component:Y}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TieredMenu Component","header","TieredMenu","description","TieredMenu displays submenus in nested overlays.","themeDocs","tieredmenu",3,"docs","apiDocs"]],template:function(o,p){o&1&&r(0,"app-doc",0),o&2&&l("docs",p.docs)("apiDocs",B(2,Ee))},dependencies:[ae,Q],encapsulation:2})}return n})();var yt=[{path:"",component:me}];export{yt as default};
