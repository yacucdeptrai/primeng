import './polyfills.server.mjs';
import{a as b,b as v,c as q,d as g,e as f,f as Q}from"./chunk-ZCNPBCUQ.mjs";import{a as X,b as Y}from"./chunk-BVKBGFRF.mjs";import{a as d,d as ee,e as N}from"./chunk-HZSAMTDM.mjs";import{a as c,b as Z}from"./chunk-EK6YV52O.mjs";import"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as G,ba as J,f as K,g as z}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as W}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as V}from"./chunk-RUZVPFSZ.mjs";import{Ab as T,Bb as r,Cb as t,Db as a,Dc as L,Eb as u,O as F,Qb as w,Sa as l,dc as U,ec as e,fc as C,gb as p,gc as B,hb as P,jc as $,kc as O,lc as R,mb as H,pc as j,zb as h}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var te=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["tabs-accessibility-doc"]],standalone:!1,decls:83,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,s){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),a(),t(4,"p"),e(5," Tabs container is defined with the "),t(6,"i"),e(7,"tablist"),a(),e(8," role, as any attribute is passed to the container element "),t(9,"i"),e(10,"aria-labelledby"),a(),e(11," can be optionally used to specify an element to describe the Tabs. Each tab header has a "),t(12,"i"),e(13,"tab"),a(),e(14," role along with "),t(15,"i"),e(16,"aria-selected"),a(),e(17," state attribute and "),t(18,"i"),e(19,"aria-controls"),a(),e(20," to refer to the corresponding tab content element. The content element of each tab has "),t(21,"i"),e(22,"tabpanel"),a(),e(23," role, an id to match the"),t(24,"i"),e(25,"aria-controls"),a(),e(26," of the header and "),t(27,"i"),e(28,"aria-labelledby"),a(),e(29," reference to the header as the accessible name. "),a(),t(30,"h3"),e(31,"Tab Header Keyboard Support"),a(),t(32,"div",0)(33,"table",1)(34,"thead")(35,"tr")(36,"th"),e(37,"Key"),a(),t(38,"th"),e(39,"Function"),a()()(),t(40,"tbody")(41,"tr")(42,"td")(43,"i"),e(44,"tab"),a()(),t(45,"td"),e(46,"Moves focus through the header."),a()(),t(47,"tr")(48,"td")(49,"i"),e(50,"enter"),a()(),t(51,"td"),e(52,"Activates the focused tab header."),a()(),t(53,"tr")(54,"td")(55,"i"),e(56,"space"),a()(),t(57,"td"),e(58,"Activates the focused tab header."),a()(),t(59,"tr")(60,"td")(61,"i"),e(62,"right arrow"),a()(),t(63,"td"),e(64,"Moves focus to the next header."),a()(),t(65,"tr")(66,"td")(67,"i"),e(68,"left arrow"),a()(),t(69,"td"),e(70,"Moves focus to the previous header."),a()(),t(71,"tr")(72,"td")(73,"i"),e(74,"home"),a()(),t(75,"td"),e(76,"Moves focus to the last header."),a()(),t(77,"tr")(78,"td")(79,"i"),e(80,"end"),a()(),t(81,"td"),e(82,"Moves focus to the first header."),a()()()()()()())},dependencies:[d],encapsulation:2})}return i})();var ae=(()=>{class i{code={basic:`<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <p-tabs value="0">
        <p-tablist>
            <p-tab value="0">Header I</p-tab>
            <p-tab value="1">Header II</p-tab>
            <p-tab value="2">Header III</p-tab>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel value="0">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </p-tabpanel>
            <p-tabpanel value="1">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                    modi.
                </p>
            </p-tabpanel>
            <p-tabpanel value="2">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus.
                </p>
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tabs-basic-demo',
    templateUrl: './tabs-basic-demo.html',
    standalone: true,
    imports: [CommonModule, TabsModule]
})
export class TabsBasicDemo {}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["basic-doc"]],standalone:!1,decls:38,vars:1,consts:[[1,"card"],["value","0"],["value","1"],["value","2"],[1,"m-0"],["selector","tabs-basic-demo",3,"code"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Tabs is defined using "),t(3,"i"),e(4,"TabList"),a(),e(5,", "),t(6,"i"),e(7,"Tab"),a(),e(8,", "),t(9,"i"),e(10,"TabPanels"),a(),e(11," and "),t(12,"i"),e(13,"TabPanel"),a(),e(14," components. Tab and TabPanel components are associated with their "),t(15,"i"),e(16,"value"),a(),e(17," properties"),a()(),t(18,"div",0)(19,"p-tabs",1)(20,"p-tablist")(21,"p-tab",1),e(22,"Header I"),a(),t(23,"p-tab",2),e(24,"Header II"),a(),t(25,"p-tab",3),e(26,"Header III"),a()(),t(27,"p-tabpanels")(28,"p-tabpanel",1)(29,"p",4),e(30," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a()(),t(31,"p-tabpanel",2)(32,"p",4),e(33," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a()(),t(34,"p-tabpanel",3)(35,"p",4),e(36," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()()()(),u(37,"app-code",5)),o&2&&(l(37),r("code",s.code))},dependencies:[c,d,f,g,q,b,v],encapsulation:2})}return i})();var ie=(()=>{class i{value=0;code={basic:`<div class="flex mb-2 gap-2 justify-end">
    <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
    <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
    <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
</div>
<p-tabs [value]="value">
    <p-tablist>
        <p-tab [value]="0">Header I</p-tab>
        <p-tab [value]="1">Header II</p-tab>
        <p-tab [value]="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel [value]="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <div class="flex mb-2 gap-2 justify-end">
        <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
        <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
        <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
    </div>
    <p-tabs [value]="value">
        <p-tablist>
            <p-tab [value]="0">Header I</p-tab>
            <p-tab [value]="1">Header II</p-tab>
            <p-tab [value]="2">Header III</p-tab>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel [value]="0">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </p-tabpanel>
            <p-tabpanel [value]="1">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </p-tabpanel>
            <p-tabpanel [value]="2">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'tabs-controlled-demo',
    templateUrl: './tabs-controlled-demo.html',
    standalone: true,
    imports: [ButtonModule, TabsModule, FormsModule]
})
export class TabsControlledDemo {
    value: number = 0;
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["controlled-doc"]],standalone:!1,decls:30,vars:11,consts:[[1,"card"],[1,"flex","mb-2","gap-2","justify-end"],["rounded","true","styleClass","w-8 h-8 p-0","label","1",3,"onClick","outlined"],["rounded","true","styleClass","w-8 h-8 p-0","label","2",3,"onClick","outlined"],["rounded","true","styleClass","w-8 h-8 p-0","label","3",3,"onClick","outlined"],[3,"valueChange","value"],[3,"value"],[1,"m-0"],["selector","tabs-controlled-demo",3,"code"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Tabs can be controlled programmatically using "),t(3,"i"),e(4,"value"),a(),e(5," property as a model."),a()(),t(6,"div",0)(7,"div",1)(8,"p-button",2),w("onClick",function(){return s.value=0}),a(),t(9,"p-button",3),w("onClick",function(){return s.value=1}),a(),t(10,"p-button",4),w("onClick",function(){return s.value=2}),a()(),t(11,"p-tabs",5),R("valueChange",function(k){return O(s.value,k)||(s.value=k),k}),t(12,"p-tablist")(13,"p-tab",6),e(14,"Header I"),a(),t(15,"p-tab",6),e(16,"Header II"),a(),t(17,"p-tab",6),e(18,"Header III"),a()(),t(19,"p-tabpanels")(20,"p-tabpanel",6)(21,"p",7),e(22," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a()(),t(23,"p-tabpanel",6)(24,"p",7),e(25," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a()(),t(26,"p-tabpanel",6)(27,"p",7),e(28," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()()()(),u(29,"app-code",8)),o&2&&(l(8),r("outlined",s.value!==0),l(),r("outlined",s.value!==1),l(),r("outlined",s.value!==2),l(),$("value",s.value),l(2),r("value",0),l(2),r("value",1),l(2),r("value",2),l(3),r("value",0),l(3),r("value",1),l(3),r("value",2),l(3),r("code",s.code))},dependencies:[c,d,f,g,q,b,v,G],encapsulation:2})}return i})();function be(i,m){i&1&&u(0,"i",16)}function ve(i,m){i&1&&u(0,"i",17)}var oe=(()=>{class i{code={basic:`<p-tabs value="0" scrollable>
    <p-tablist>
        <ng-template #previcon>
            <i class="pi pi-minus"></i>
        </ng-template>
        <p-tab value="0" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle"/>
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </p-tab>
        <p-tab value="1" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Onyama Limba</span>
        </p-tab>
        <p-tab value="2" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
            <p-badge value="2" />
        </p-tab>
        <ng-template #nexticon>
            <i class="pi pi-plus"></i>
        </ng-template>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <p-tabs value="0" scrollable>
        <p-tablist>
            <ng-template #previcon>
                <i class="pi pi-minus"></i>
            </ng-template>
            <p-tab value="0" class="flex items-center !gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle"/>
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
            </p-tab>
            <p-tab value="1" class="flex items-center !gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
            </p-tab>
            <p-tab value="2" class="flex items-center !gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <p-badge value="2" />
            </p-tab>
            <ng-template #nexticon>
                <i class="pi pi-plus"></i>
            </ng-template>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel value="0">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </p-tabpanel>
            <p-tabpanel value="1">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                    modi.
                </p>
            </p-tabpanel>
            <p-tabpanel value="2">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus.
                </p>
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'tabs-template-demo',
    templateUrl: './tabs-template-demo.html',
    standalone: true,
    imports: [CommonModule, TabsModule, BadgeModule, AvatarModule]
})
export class TabsTemplateDemo {}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["template-doc"]],standalone:!1,decls:34,vars:1,consts:[["previcon",""],["nexticon",""],[1,"card"],["value","0","scrollable",""],["value","0",1,"flex","items-center","!gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","whitespace-nowrap"],["value","1",1,"flex","items-center","!gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","shape","circle"],["value","2",1,"flex","items-center","!gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png","shape","circle"],["value","2"],["value","0"],[1,"m-0"],["value","1"],["selector","tabs-template-demo",3,"code"],[1,"pi","pi-minus"],[1,"pi","pi-plus"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Custom content for a tab is defined with the default ng-content."),a()(),t(3,"div",2)(4,"p-tabs",3)(5,"p-tablist"),H(6,be,1,0,"ng-template",null,0,L),t(8,"p-tab",4),u(9,"p-avatar",5),t(10,"span",6),e(11,"Amy Elsner"),a()(),t(12,"p-tab",7),u(13,"p-avatar",8),t(14,"span",6),e(15,"Onyama Limba"),a()(),t(16,"p-tab",9),u(17,"p-avatar",10),t(18,"span",6),e(19,"Ioni Bowcher"),a(),u(20,"p-badge",11),a(),H(21,ve,1,0,"ng-template",null,1,L),a(),t(23,"p-tabpanels")(24,"p-tabpanel",12)(25,"p",13),e(26," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a()(),t(27,"p-tabpanel",14)(28,"p",13),e(29," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a()(),t(30,"p-tabpanel",11)(31,"p",13),e(32," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()()()(),u(33,"app-code",15)),o&2&&(l(33),r("code",s.code))},dependencies:[c,d,f,g,q,b,v,X,K],encapsulation:2})}return i})();var ne=(()=>{class i{code={basic:`<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
        <p-tab disabled>Header IV</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <p-tabs value="0">
        <p-tablist>
            <p-tab value="0">Header I</p-tab>
            <p-tab value="1">Header II</p-tab>
            <p-tab value="2">Header III</p-tab>
            <p-tab disabled>Header IV</p-tab>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel value="0">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </p-tabpanel>
            <p-tabpanel value="1">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                    modi.
                </p>
            </p-tabpanel>
            <p-tabpanel value="2">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus.
                </p>
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'tabs-disabled-demo',
    templateUrl: './tabs-disabled-demo.html',
    standalone: true,
    imports: [CommonModule, TabsModule]
})
export class TabsDisabledDemo {}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["disabled-doc"]],standalone:!1,decls:28,vars:1,consts:[[1,"card"],["value","0"],["value","1"],["value","2"],["disabled",""],[1,"m-0"],["selector","tabs-disabled-demo",3,"code"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Enabling "),t(3,"i"),e(4,"disabled"),a(),e(5," property of a Tab prevents user interaction."),a()(),t(6,"div",0)(7,"p-tabs",1)(8,"p-tablist")(9,"p-tab",1),e(10,"Header I"),a(),t(11,"p-tab",2),e(12,"Header II"),a(),t(13,"p-tab",3),e(14,"Header III"),a(),t(15,"p-tab",4),e(16,"Header IV"),a()(),t(17,"p-tabpanels")(18,"p-tabpanel",1)(19,"p",5),e(20," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),a()(),t(21,"p-tabpanel",2)(22,"p",5),e(23," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),a()(),t(24,"p-tabpanel",3)(25,"p",5),e(26," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),a()()()()(),u(27,"app-code",6)),o&2&&(l(27),r("code",s.code))},dependencies:[c,d,f,g,q,b,v],encapsulation:2})}return i})();var le=(i,m)=>m.value;function fe(i,m){if(i&1&&(t(0,"p-tab",2),e(1),a()),i&2){let n=m.$implicit;r("value",n.value),l(),C(n.title)}}function qe(i,m){if(i&1&&(t(0,"p-tabpanel",2)(1,"p",4),e(2),a()()),i&2){let n=m.$implicit;r("value",n.value),l(2),C(n.content)}}var se=(()=>{class i{tabs=[];code={basic:`<p-tabs value="0">
    <p-tablist>
        @for (tab of tabs; track tab.value) {
            <p-tab [value]="tab.value">{{ tab.title }}</p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for (tab of tabs; track tab.value) {
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <p-tabs value="0">
        <p-tablist>
            @for (tab of tabs; track tab.value) {
                <p-tab [value]="tab.value">{{ tab.title }}</p-tab>
            }
        </p-tablist>
        <p-tabpanels>
            @for (tab of tabs; track tab.value) {
                <p-tabpanel [value]="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </p-tabpanel>
            }
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tabs-dynamic-demo',
    templateUrl: './tabs-dynamic-demo.html',
    standalone: true,
    imports: [TabsModule, CommonModule]
})
export class TabsDynamicDemo implements OnInit {
    tabs: { title: string; value: number; content: string }[] = [];

    ngOnInit() {
        this.tabs = [
            { title: 'Tab 1', value: 0, content: 'Tab 1 Content' },
            { title: 'Tab 2', value: 1, content: 'Tab 2 Content' },
            { title: 'Tab 3', value: 2, content: 'Tab 3 Content' },
        ];
    }
}`};ngOnInit(){this.tabs=[{title:"Tab 1",value:"0",content:"Tab 1 Content"},{title:"Tab 2",value:"1",content:"Tab 2 Content"},{title:"Tab 3",value:"2",content:"Tab 3 Content"}]}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["dynamic-doc"]],standalone:!1,decls:15,vars:1,consts:[[1,"card"],["value","0"],[3,"value"],["selector","tabs-dynamic-demo",3,"code"],[1,"m-0"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Tabs can be generated dynamically using the standard "),t(3,"i"),e(4,"@for"),a(),e(5," block."),a()(),t(6,"div",0)(7,"p-tabs",1)(8,"p-tablist"),h(9,fe,2,2,"p-tab",2,le),a(),t(11,"p-tabpanels"),h(12,qe,3,2,"p-tabpanel",2,le),a()()(),u(14,"app-code",3)),o&2&&(l(9),T(s.tabs),l(3),T(s.tabs),l(2),r("code",s.code))},dependencies:[c,d,f,g,q,b,v],encapsulation:2})}return i})();var re=(()=>{class i{code={typescript:"import { TabsModule } from 'primeng/tabs';"};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["tabs-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,s){o&1&&u(0,"app-code",0),o&2&&r("code",s.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return i})();var ue=(i,m)=>m.value;function ge(i,m){if(i&1&&(t(0,"p-tab",2),e(1),a()),i&2){let n=m.$implicit;r("value",n.value),l(),B(" ",n.title," ")}}function xe(i,m){if(i&1&&(t(0,"p-tabpanel",2)(1,"p",4),e(2),a()()),i&2){let n=m.$implicit;r("value",n.value),l(2),C(n.content)}}var pe=(()=>{class i{scrollableTabs=Array.from({length:50},(n,o)=>({title:`Tab ${o+1}`,content:`Tab ${o+1} Content`,value:`${o}`}));code={basic:`<p-tabs value="0" scrollable>
    <p-tablist>
        @for(tab of scrollableTabs; track tab.value){
            <p-tab [value]="tab.value">
                {{ tab.title }}
            </p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for(tab of scrollableTabs; track tab.value){
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>`,html:`<div class="card">
    <p-tabs value="0" scrollable>
        <p-tablist>
            @for(tab of scrollableTabs; track tab.value){
                <p-tab [value]="tab.value">
                    {{ tab.title }}
                </p-tab>
            }
        </p-tablist>
        <p-tabpanels>
            @for(tab of scrollableTabs; track tab.value){
                <p-tabpanel [value]="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </p-tabpanel>
            }
        </p-tabpanels>
    </p-tabs>
</div>`,typescript:`import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tabs-scrollable-demo',
    templateUrl: './tabs-scrollable-demo.html',
    standalone: true,
    imports: [CommonModule, TabsModule]
})
export class TabsScrollableDemo {
    activeIndex: number = 0;

    scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Title", content: "Content" }));
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["scrollable-doc"]],standalone:!1,decls:15,vars:1,consts:[[1,"card"],["value","0","scrollable",""],[3,"value"],["selector","tabs-scrollable-demo",3,"code"],[1,"m-0"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Adding "),t(3,"i"),e(4,"scrollable"),a(),e(5," property displays navigational buttons at each side to scroll between tabs."),a()(),t(6,"div",0)(7,"p-tabs",1)(8,"p-tablist"),h(9,ge,2,2,"p-tab",2,ue),a(),t(11,"p-tabpanels"),h(12,xe,3,2,"p-tabpanel",2,ue),a()()(),u(14,"app-code",3)),o&2&&(l(9),T(s.scrollableTabs),l(3),T(s.scrollableTabs),l(2),r("code",s.code))},dependencies:[c,d,f,g,q,b,v],encapsulation:2})}return i})();var he=(i,m)=>m.route;function Te(i,m){if(i&1&&(t(0,"p-tab",3),u(1,"i"),t(2,"span"),e(3),a()()),i&2){let n=m.$implicit;r("value",n.route),l(),U(n.icon),l(2),C(n.label)}}var me=(()=>{class i{tabs=[{route:"dashboard",label:"Dashboard",icon:"pi pi-home"},{route:"transactions",label:"Transactions",icon:"pi pi-chart-line"},{route:"products",label:"Products",icon:"pi pi-list"},{route:"messages",label:"Messages",icon:"pi pi-inbox"}];code={basic:`<p-tabs value="/dashboard">
    <p-tablist>
        @for(tab of tabs; track tab.route){
            <p-tab [value]="tab.route" [routerLink]="tab.route" class="flex items-center !gap-2 text-inherit">
                <i [class]="tab.icon"></i>
                <span>{{ tab.label }}</span>
            </p-tab>
        }
    </p-tablist>
</p-tabs>
<!--<router-outlet></router-outlet>-->`,html:`<div class="card">
    <p-tabs value="/dashboard">
        <p-tablist>
            @for(tab of tabs; track tab.route){
                <p-tab [value]="tab.route" [routerLink]="tab.route" class="flex items-center !gap-2 text-inherit">
                    <i [class]="tab.icon"></i>
                    <span>{{ tab.label }}</span>
                </p-tab>
            }
        </p-tablist>
    </p-tabs>
    <!--<router-outlet></router-outlet>-->
</div>`,typescript:`import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'tabs-tabmenu-demo',
    templateUrl: './tabs-tabmenu-demo.html',
    standalone: true,
    imports: [TabsModule, RouterModule, CommonModule]
})
export class TabsTabmenuDemo {
    tabs = [
        { route: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
        { route: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
        { route: 'products', label: 'Products', icon: 'pi pi-list' },
        { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
    ];
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["tabmenu-doc"]],standalone:!1,decls:15,vars:1,consts:[["href","https://angular.dev/api/router/RouterOutlet?tab=description","target","_blank","rel","noopener noreferrer"],[1,"card"],["value","dashboard"],[1,"flex","items-center","!gap-2","text-inherit",3,"value"],["selector","tabs-tabmenu-demo",3,"code"]],template:function(o,s){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A navigation menu is implemented using tabs without the panels where the content of a tab is provided by a route component like "),t(3,"a",0),e(4,"router-outlet"),a(),e(5,". For the purpose of this demo, "),t(6,"i"),e(7,"router-outlet"),a(),e(8," is not included. "),a()(),t(9,"div",1)(10,"p-tabs",2)(11,"p-tablist"),h(12,Te,4,4,"p-tab",3,he),a()()(),u(14,"app-code",4)),o&2&&(l(12),T(s.tabs),l(2),r("code",s.code))},dependencies:[c,d,f,b,v],encapsulation:2})}return i})();var ce=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=P({type:i});static \u0275inj=F({imports:[V,Z,N,Q,W,J,Y,z,N]})}return i})();var Ce=()=>["Tabs","TabPanel","Tab"],de=(()=>{class i{docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:ae},{id:"dynamic",label:"Dynamic",component:se},{id:"controlled",label:"Controlled",component:ie},{id:"scrollable",label:"Scrollable",component:pe},{id:"disabled",label:"Disabled",component:ne},{id:"template",label:"Template",component:oe},{id:"tabmenu",label:"Tab Menu",component:me},{id:"accessibility",label:"Accessibility",component:te}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tabs Component","header","Tabs","description","Tabs is a container component to group content with tabs.","themeDocs","tabs",3,"docs","apiDocs"]],template:function(o,s){o&1&&u(0,"app-doc",0),o&2&&r("docs",s.docs)("apiDocs",j(2,Ce))},dependencies:[ce,ee],encapsulation:2})}return i})();var Tt=[{path:"",component:de}];export{Tt as default};
