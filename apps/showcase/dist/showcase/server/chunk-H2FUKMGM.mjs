import './polyfills.server.mjs';
import{a as I}from"./chunk-JXRASPNW.mjs";import{a as S}from"./chunk-RP7DCUL4.mjs";import{a as x,d as J,e as O}from"./chunk-HZSAMTDM.mjs";import{a as v,b as K}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as q,ba as Q}from"./chunk-DE54ZEHA.mjs";import{va as G}from"./chunk-YQJJ7I3T.mjs";import{j as W}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as b,m as B,v as U}from"./chunk-RUZVPFSZ.mjs";import{$a as L,Bb as s,Cb as o,Db as l,Dc as u,Eb as m,O as j,Qb as T,Sa as n,Tc as M,Wb as H,Xb as N,Yb as P,cc as y,ec as i,fc as V,gb as d,gc as c,hb as R,mb as g,pc as f,qc as h}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var X=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["scroller-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),l(),o(3,"p"),i(4,"VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element."),l(),o(5,"h4"),i(6,"Keyboard Support"),l(),o(7,"p"),i(8,"Component does not include any built-in interactive elements."),l()())},dependencies:[x],encapsulation:2})}return e})();var ce=()=>({width:"200px",height:"200px"}),de=e=>({"bg-surface-100 dark:bg-surface-700":e});function fe(e,p){if(e&1&&(o(0,"div",4),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,de,t.odd)),n(),c(" ",r," ")}}var Y=(()=>{class e{items;ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex justify-center">
    <p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                {{ item }}
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-basic-demo',
    templateUrl: './scroller-basic-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerBasicDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],standalone:!1,decls:29,vars:6,consts:[["item",""],[1,"card","flex","justify-center"],["scrollHeight","200px","styleClass","border border-surface",3,"items","itemSize"],["selector","scroller-basic-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2," VirtualScroller requires "),o(3,"i"),i(4,"items"),l(),i(5," as the data to display, "),o(6,"i"),i(7,"itemSize"),l(),i(8," for the dimensions of an item and "),o(9,"i"),i(10,"item"),l(),i(11," template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using "),o(12,"i"),i(13,"scrollWidth"),l(),i(14,", "),o(15,"i"),i(16,"scrollHeight"),l(),i(17," properties directly or with CSS "),o(18,"i"),i(19,"width"),l(),i(20," and "),o(21,"i"),i(22,"height"),l(),i(23," styles. "),l()(),o(24,"div",1)(25,"p-virtualscroller",2),g(26,fe,2,4,"ng-template",null,0,u),l()(),m(28,"app-code",3)),t&2&&(n(25),y(f(5,ce)),s("items",a.items)("itemSize",50),n(3),s("code",a.code))},dependencies:[b,v,x,S],encapsulation:2,changeDetection:0})}return e})();var F=()=>({width:"200px",height:"200px"}),A=e=>({"bg-surface-100 dark:bg-surface-700":e});function he(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,A,t.odd)),n(),c(" ",r," ")}}function ge(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,A,t.odd)),n(),c(" ",r," ")}}function ue(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,A,t.odd)),n(),c(" ",r," ")}}var Z=(()=>{class e{items;ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="50" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

<p-virtualscroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <div>
        <span class="font-bold block mb-2">No Delay</span>
        <p-virtualscroller [items]="items" [itemSize]="50" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
    <div>
        <span class="font-bold block mb-2">150ms</span>
        <p-virtualscroller [items]="items" [itemSize]="50" [delay]="150" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
    <div>
        <span class="font-bold block mb-2">500ms</span>
        <p-virtualscroller [items]="items" [itemSize]="50" [delay]="500" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-delay-demo',
    templateUrl: './scroller-delay-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerDelayDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["delay-doc"]],standalone:!1,decls:26,vars:18,consts:[["item",""],[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"font-bold","block","mb-2"],["styleClass","border border-surface",3,"items","itemSize"],["styleClass","border border-surface",3,"items","itemSize","delay"],["selector","scroller-delay-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Scroll delay is adjusted by using "),o(3,"i"),i(4,"delay"),l(),i(5," property."),l()(),o(6,"div",1)(7,"div")(8,"span",2),i(9,"No Delay"),l(),o(10,"p-virtualscroller",3),g(11,he,2,4,"ng-template",null,0,u),l()(),o(13,"div")(14,"span",2),i(15,"150ms"),l(),o(16,"p-virtualscroller",4),g(17,ge,2,4,"ng-template",null,0,u),l()(),o(19,"div")(20,"span",2),i(21,"500ms"),l(),o(22,"p-virtualscroller",4),g(23,ue,2,4,"ng-template",null,0,u),l()()(),m(25,"app-code",5)),t&2&&(n(10),y(f(15,F)),s("items",a.items)("itemSize",50),n(6),y(f(16,F)),s("items",a.items)("itemSize",50)("delay",150),n(6),y(f(17,F)),s("items",a.items)("itemSize",50)("delay",500),n(3),s("code",a.code))},dependencies:[b,v,x,S],encapsulation:2})}return e})();var xe=()=>({width:"200px",height:"200px"}),ye=()=>[50,100],ve=e=>({"bg-surface-100 dark:bg-surface-700":e});function Se(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit;n(),V(r)}}function be(e,p){if(e&1&&(o(0,"div",4),g(1,Se,2,1,"div",5),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,ve,t.odd)),n(),s("ngForOf",r)}}var ee=(()=>{class e{cd;items;constructor(r){this.cd=r}ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>Array.from({length:1e3}).map((a,D)=>`Item #${t}_${D}`)),this.cd.markForCheck()}code={basic:`<p-virtualscroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex justify-center">
   <p-virtualscroller [items]="items" [itemSize]="[50, 100]" orientation="both" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                <div *ngFor="let el of item" style="width: 100px">{{ el }}</div>
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-grid-demo',
    templateUrl: './scroller-grid-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerGridDemo implements OnInit {
    items!: string[][];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`};static \u0275fac=function(t){return new(t||e)(L(M))};static \u0275cmp=d({type:e,selectors:[["grid-doc"]],standalone:!1,decls:17,vars:7,consts:[["item",""],[1,"card","flex","justify-center"],["orientation","both","styleClass","border border-surface",3,"items","itemSize"],["selector","scroller-grid-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"],["style","width: 100px",4,"ngFor","ngForOf"],[2,"width","100px"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Scrolling can be enabled vertically and horizontally when "),o(3,"i"),i(4,"orientation"),l(),i(5," is set as "),o(6,"i"),i(7,"both"),l(),i(8,". In this mode, "),o(9,"i"),i(10,"itemSize"),l(),i(11," should be an array where first value is the height of an item and second is the width."),l()(),o(12,"div",1)(13,"p-virtualscroller",2),g(14,be,2,4,"ng-template",null,0,u),l()(),m(16,"app-code",3)),t&2&&(n(13),y(f(5,xe)),s("items",a.items)("itemSize",f(6,ye)),n(3),s("code",a.code))},dependencies:[b,B,v,x,S],encapsulation:2,changeDetection:0})}return e})();var Ce=()=>({width:"200px",height:"200px"}),we=e=>({"bg-surface-100 dark:bg-surface-700":e});function De(e,p){if(e&1&&(o(0,"div",4),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,we,t.odd)),n(),c(" ",r," ")}}var te=(()=>{class e{items;ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex justify-center">
    <p-virtualscroller [items]="items" [itemSize]="50" scrollHeight="200px" orientation="horizontal" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex items-center p-2" style="writing-mode: vertical-lr; width: 50px;" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }">
                {{ item }}
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-horizontal-demo',
    templateUrl: './scroller-horizontal-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }

            .p-horizontal-scroll {
                .p-scroller-content {
                    display: flex;
                    flex-direction: row;
                }
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerHorizontalDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    .p-horizontal-scroll {
        .p-scroller-content {
            display: flex;
            flex-direction: row;
        }
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["horizontal-doc"]],standalone:!1,decls:17,vars:6,consts:[["item",""],[1,"card","flex","justify-center"],["scrollHeight","200px","orientation","horizontal","styleClass","border border-surface",3,"items","itemSize"],["selector","scroller-horizontal-demo",3,"code"],[1,"flex","items-center","p-2",2,"writing-mode","vertical-lr","width","50px",3,"ngClass"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Setting "),o(3,"i"),i(4,"orientation"),l(),i(5," to "),o(6,"i"),i(7,"horizontal"),l(),i(8," enables scrolling horizontally. In this case, the "),o(9,"i"),i(10,"itemSize"),l(),i(11," should refer to the width of an item."),l()(),o(12,"div",1)(13,"p-virtualscroller",2),g(14,De,2,4,"ng-template",null,0,u),l()(),m(16,"app-code",3)),t&2&&(n(13),y(f(5,Ce)),s("items",a.items)("itemSize",50),n(3),s("code",a.code))},dependencies:[b,v,x,S],encapsulation:2,changeDetection:0})}return e})();var ie=(()=>{class e{code={typescript:"import { ScrollerModule } from 'primeng/scroller';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["scroller-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,a){t&1&&m(0,"app-code",0),t&2&&s("code",a.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return e})();var _e=()=>({width:"200px",height:"200px"}),ze=e=>({"bg-surface-100 dark:bg-surface-700":e});function ke(e,p){if(e&1&&(o(0,"div",4),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,ze,t.odd)),n(),c(" ",r," ")}}var oe=(()=>{class e{cd;items;lazyLoading=!0;loadLazyTimeout;constructor(r){this.cd=r}ngOnInit(){this.items=Array.from({length:1e3})}onLazyLoad(r){this.lazyLoading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let{first:t,last:a}=r,D=[...this.items];for(let E=t;E<a;E++)D[E]=`Item #${E}`;this.items=D,this.lazyLoading=!1,this.cd.markForCheck()},Math.random()*1e3+250)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex justify-center">
     <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" [loading]="lazyLoading" [lazy]="true" (onLazyLoad)="onLazyLoad($event)" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                {{ item }}
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

interface LazyEvent {
    first: number;
    last: number;
}

@Component({
    selector: 'scroller-lazy-load-demo',
    templateUrl: './scroller-lazy-load-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerLazyLoadDemo implements OnInit {
    items!: string[];

    lazyLoading: boolean = true;

    loadLazyTimeout: any;

    ngOnInit() {
        this.items = Array.from({ length: 1000 });
    }

    onLazyLoad(event: LazyEvent) {
        this.lazyLoading = true;

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const lazyItems = [...this.items];

            for (let i = first; i < last; i++) {
                lazyItems[i] = \`Item #\${i}\`;
            }

            this.items = lazyItems;
            this.lazyLoading = false;
        }, Math.random() * 1000 + 250);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }
}`};static \u0275fac=function(t){return new(t||e)(L(M))};static \u0275cmp=d({type:e,selectors:[["lazy-load-doc"]],standalone:!1,decls:14,vars:10,consts:[["item",""],[1,"card","flex","justify-center"],["styleClass","border border-surface",3,"onLazyLoad","items","itemSize","showLoader","delay","loading","lazy"],["selector","scroller-lazy-load-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2," Lazy mode is handy to deal with large datasets where instead of loading the entire data, small chunks of data are loaded on demand by invoking onLazyLoad callback everytime scrolling requires a new chunk. To implement lazy loading, enable "),o(3,"i"),i(4,"lazy"),l(),i(5," attribute, initialize your data as a placeholder with a length and finally implement a method callback using "),o(6,"i"),i(7,"onLazyLoad"),l(),i(8," that actually loads a chunk from a datasource. onLazyLoad gets an event object that contains information about the chunk of data to load such as the index and number of items to load. Notice that a new template called loadingItem is also required to display as a placeholder while the new items are being loaded. "),l()(),o(9,"div",1)(10,"p-virtualscroller",2),T("onLazyLoad",function(E){return a.onLazyLoad(E)}),g(11,ke,2,4,"ng-template",null,0,u),l()(),m(13,"app-code",3)),t&2&&(n(10),y(f(9,_e)),s("items",a.items)("itemSize",50)("showLoader",!0)("delay",250)("loading",a.lazyLoading)("lazy",!0),n(3),s("code",a.code))},dependencies:[b,v,x,S],encapsulation:2,changeDetection:0})}return e})();var le=()=>({width:"200px",height:"200px"}),$=e=>({"bg-surface-100 dark:bg-surface-700":e});function Ie(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,$,t.odd)),n(),c(" ",r," ")}}function Le(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,$,t.odd)),n(),c(" ",r," ")}}function Te(e,p){if(e&1&&(o(0,"div",6),m(1,"p-skeleton",7),l()),e&2){let r=p.options;s("ngClass",h(2,$,r.odd)),n(),s("width",r.even?"60%":"50%")}}var re=(()=>{class e{items;ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>

 <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
    <ng-template pTemplate="loader" let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <div>
        <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
    <div>
        <p-virtualscroller [items]="items" [itemSize]="50" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
            <ng-template #item let-item let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    {{ item }}
                </div>
            </ng-template>
            <ng-template pTemplate="loader" let-options="options">
                <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                    <p-skeleton [width]="options.even ? '60%' : '50%'" height="1.3rem"></p-skeleton>
                </div>
            </ng-template>
        </p-virtualscroller>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-loader-demo',
    templateUrl: './scroller-loader-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }

            p-skeleton {
                width: 100%;
            }
        }\`
    ],
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerLoaderDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["loader-doc"]],standalone:!1,decls:23,vars:15,consts:[["item",""],["href","/skeleton",1,""],[1,"card","flex","flex-wrap","justify-center","gap-4"],["styleClass","border border-surface",3,"items","itemSize","showLoader","delay"],["pTemplate","loader"],["selector","scroller-loader-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"],["height","1.3rem",3,"width"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Busy state is enabled by adding "),o(3,"i"),i(4,"showLoader"),l(),i(5," property which blocks the UI with a modal by default. Alternatively, "),o(6,"i"),i(7,"loader"),l(),i(8," template can be used to customize items e.g. with "),o(9,"a",1),i(10,"Skeleton"),l(),i(11,"."),l()(),o(12,"div",2)(13,"div")(14,"p-virtualscroller",3),g(15,Ie,2,4,"ng-template",null,0,u),l()(),o(17,"div")(18,"p-virtualscroller",3),g(19,Le,2,4,"ng-template",null,0,u)(21,Te,2,4,"ng-template",4),l()()(),m(22,"app-code",5)),t&2&&(n(14),y(f(13,le)),s("items",a.items)("itemSize",50)("showLoader",!0)("delay",250),n(4),y(f(14,le)),s("items",a.items)("itemSize",50)("showLoader",!0)("delay",250),n(4),s("code",a.code))},dependencies:[b,v,x,S,I,G],encapsulation:2,changeDetection:0})}return e})();var Me=["sc"],Oe=()=>({width:"200px",height:"200px"}),Fe=e=>({"bg-surface-100 dark:bg-surface-700":e});function Ae(e,p){if(e&1&&(o(0,"div",6),i(1),l()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(2,Fe,t.odd)),n(),c(" ",r," ")}}var ne=(()=>{class e{sc;items=[];ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}reset(){this.sc.scrollToIndex(0,"smooth")}code={basic:`<p-button label="Reset" (click)="reset()" />
<p-virtualscroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
            {{ item }}
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex flex-col items-center gap-4">
    <p-button label="Reset" (click)="reset()" />
    <p-virtualscroller #sc [items]="items" [itemSize]="50" scrollHeight="200px" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex items-center p-2" [ngClass]="{ 'bg-surface-100 dark:bg-surface-700': options.odd }" style="height: 50px;">
                {{ item }}
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit, ViewChild } from '@angular/core';
import { Scroller } from 'primeng/scroller';
import { ScrollerModule } from 'primeng/scroller';

@Component({
    selector: 'scroller-programmatic-demo',
    templateUrl: './scroller-programmatic-demo.html',
    standalone: true,
    imports: [ScrollerModule]
})
export class ScrollerProgrammaticDemo implements OnInit {
    @ViewChild('sc') sc!: Scroller;

    items: string[] = [];

    ngOnInit(): void {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }

    reset() {
        this.sc.scrollToIndex(0, 'smooth');
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["programmatic-doc"]],viewQuery:function(t,a){if(t&1&&H(Me,5),t&2){let D;N(D=P())&&(a.sc=D.first)}},standalone:!1,decls:13,vars:6,consts:[["sc",""],["item",""],[1,"card","flex","flex-col","items-center","gap-4"],["label","Reset",3,"click"],["scrollHeight","200px","styleClass","border border-surface",3,"items","itemSize"],["selector","scroller-programmatic-demo",3,"code"],[1,"flex","items-center","p-2",2,"height","50px",3,"ngClass"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Scrolling to a specific index can be done with the "),o(3,"i"),i(4,"scrollToIndex"),l(),i(5," function."),l()(),o(6,"div",2)(7,"p-button",3),T("click",function(){return a.reset()}),l(),o(8,"p-virtualscroller",4,0),g(10,Ae,2,4,"ng-template",null,1,u),l()(),m(12,"app-code",5)),t&2&&(n(8),y(f(5,Oe)),s("items",a.items)("itemSize",50),n(4),s("code",a.code))},dependencies:[b,v,x,S,q],encapsulation:2})}return e})();var $e=()=>({width:"200px",height:"200px"}),se=e=>({"surface-ground":e});function je(e,p){if(e&1&&(o(0,"div",5)(1,"div",6),i(2),l(),o(3,"div",6),i(4),l(),o(5,"div",6),i(6),l(),o(7,"div",6),i(8),l(),o(9,"div",6),i(10),l(),o(11,"div",6),i(12),l(),o(13,"div",6),i(14),l()()),e&2){let r=p.$implicit,t=p.options;s("ngClass",h(8,se,t.odd)),n(2),c("Item: ",r),n(2),c("Index: ",t.index),n(2),c("Count: ",t.count),n(2),c("First: ",t.first),n(2),c("Last: ",t.last),n(2),c("Even: ",t.even),n(2),c("Odd: ",t.odd)}}function Re(e,p){if(e&1&&(o(0,"div",7)(1,"div",6),m(2,"p-skeleton",8),l(),o(3,"div",6),m(4,"p-skeleton",9),l(),o(5,"div",6),m(6,"p-skeleton",8),l(),o(7,"div",6),m(8,"p-skeleton",9),l(),o(9,"div",6),m(10,"p-skeleton",8),l(),o(11,"div",6),m(12,"p-skeleton",9),l(),o(13,"div",6),m(14,"p-skeleton",8),l()()),e&2){let r=p.options;s("ngClass",h(1,se,r.odd))}}var ae=(()=>{class e{items;ngOnInit(){this.items=Array.from({length:1e3}).map((r,t)=>`Item #${t}`)}code={basic:`<p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
            <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
            <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
            <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
            <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
            <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
            <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
        </div>
    </ng-template>
    <ng-template #loader let-options="options">
        <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
        </div>
    </ng-template>
</p-virtualscroller>`,html:`<div class="card flex justify-center">
   <p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
                <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
                <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
                <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
                <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
                <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
                <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
                <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
            </div>
        </ng-template>
        <ng-template #loader let-options="options">
            <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Scroller } from 'primeng/scroller';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'scroller-template-demo',
    templateUrl: './scroller-template-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }

            p-skeleton {
                width: 100%;
            }
        }\`
    ],
    standalone: true,
    imports: [Scroller, Skeleton]
})
export class ScrollerTemplateDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,scss:`
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-doc"]],standalone:!1,decls:24,vars:8,consts:[["item",""],["loader",""],[1,"card","flex","justify-center"],["styleClass","border border-surface",3,"items","itemSize","showLoader","delay"],["selector","scroller-template-demo",3,"code"],[1,"flex","flex-col","align-items-strech",3,"ngClass"],[1,"flex","items-center","px-2",2,"height","25px"],[1,"flex","flex-col","items-stretch",3,"ngClass"],["width","60%","height","1.2rem"],["width","50%","height","1.2rem"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Scroller content is customizable by using "),o(3,"i"),i(4,"ng-template"),l(),i(5,". Valid values are "),o(6,"i"),i(7,"content"),l(),i(8,", "),o(9,"i"),i(10,"item"),l(),i(11,", "),o(12,"i"),i(13,"loader"),l(),i(14," and "),o(15,"i"),i(16,"loadericon"),l()()(),o(17,"div",2)(18,"p-virtualscroller",3),g(19,je,15,10,"ng-template",null,0,u)(21,Re,15,3,"ng-template",null,1,u),l()(),m(23,"app-code",4)),t&2&&(n(18),y(f(7,$e)),s("items",a.items)("itemSize",175)("showLoader",!0)("delay",250),n(5),s("code",a.code))},dependencies:[b,v,x,S,I],encapsulation:2,changeDetection:0})}return e})();var pe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=R({type:e});static \u0275inj=j({imports:[U,W,K,O,S,I,Q,O]})}return e})();var He=()=>["Scroller"],me=(()=>{class e{docs=[{id:"import",label:"Import",component:ie},{id:"basic",label:"Basic",component:Y},{id:"horizontal",label:"Horizontal",component:te},{id:"grid",label:"Grid",component:ee},{id:"delay",label:"Delay",component:Z},{id:"loading",label:"Loading",component:re},{id:"lazy",label:"Lazy",component:oe},{id:"programmatic",label:"Programmatic",component:ne},{id:"template",label:"Template",component:ae},{id:"accessibility",label:"Accessibility",component:X}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Virtual Scroller Component","header","Scroller","description","VirtualScroller is a performance-approach to handle huge data efficiently.","themeDocs","scroller",3,"docs","apiDocs"]],template:function(t,a){t&1&&m(0,"app-doc",0),t&2&&s("docs",a.docs)("apiDocs",f(2,He))},dependencies:[pe,J],styles:["[_nghost-%COMP%]     .p-scroller-viewport{flex:none}[_nghost-%COMP%]     .p-horizontal-scroll .p-scroller-content{display:flex;flex-direction:row}[_nghost-%COMP%]     p-skeleton{width:100%}"]})}return e})();var Gt=[{path:"",component:me}];export{Gt as default};
