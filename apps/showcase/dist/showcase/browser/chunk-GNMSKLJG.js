import{a as O,b as ve}from"./chunk-WUU3QR6B.js";import{a as b}from"./chunk-XSWIBJX5.js";import"./chunk-FCMSSE5W.js";import{a as z}from"./chunk-K3W3SKUQ.js";import{a as K}from"./chunk-VHOAM5CB.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as w,d as he,e as J}from"./chunk-I6RUY6VJ.js";import{a as T,b as ue}from"./chunk-CIUCWEWU.js";import{e as q,j as Q,s as me}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{$ as de,aa as R,ba as ge}from"./chunk-DEL7GGHP.js";import{i as pe}from"./chunk-UHCZASEU.js";import{va as ce}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as j,m as U,p as re,u as se,y as H}from"./chunk-O4W5DSIC.js";import{Ab as c,Hb as C,Ka as g,Kc as k,Mb as G,Mc as le,O as Z,Ob as B,Qa as m,Sb as te,Tb as ie,Ub as ne,X as h,Y as v,Za as _,ac as i,bc as N,cc as L,dc as ae,eb as S,fb as ee,fc as x,gc as f,hc as I,kb as y,kc as A,lc as D,nc as oe,sa as $,xb as r,yb as n,zb as a,zc as u}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var fe=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275cmp=S({type:t,selectors:[["galleria-accessibility-doc"]],standalone:!1,decls:182,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),a(),n(3,"p"),i(4," Galleria uses "),n(5,"i"),i(6,"region"),a(),i(7," role and since any attribute is passed to the main container element, attributes such as "),n(8,"i"),i(9,"aria-label"),a(),i(10," and "),n(11,"i"),i(12,"aria-roledescription"),a(),i(13," can be used as well. The slides container has "),n(14,"i"),i(15,"aria-live"),a(),i(16,' attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay. '),a(),n(17,"p"),i(18," A slide has a "),n(19,"i"),i(20,"group"),a(),i(21," role with an aria-label that refers to the "),n(22,"i"),i(23,"aria.slideNumber"),a(),i(24," property of the "),n(25,"a",0),i(26,"locale"),a(),i(27," API. Similarly "),n(28,"i"),i(29,"aria.slide"),a(),i(30," is used as the "),n(31,"i"),i(32,"aria-roledescription"),a(),i(33," of the item. Inactive slides are hidden from the readers with "),n(34,"i"),i(35,"aria-hidden"),a(),i(36,". "),a(),n(37,"p"),i(38," Next and Previous navigators are button elements with "),n(39,"i"),i(40,"aria-label"),a(),i(41," attributes referring to the "),n(42,"i"),i(43,"aria.nextPageLabel"),a(),i(44," and "),n(45,"i"),i(46,"aria.firstPageLabel"),a(),i(47," properties of the "),n(48,"a",0),i(49,"locale"),a(),i(50," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),n(51,"i"),i(52,"nextButtonProps"),a(),i(53," and "),n(54,"i"),i(55,"prevButtonProps"),a(),i(56,". "),a(),n(57,"p"),i(58," Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a "),n(59,"i"),i(60,"tablist"),a(),i(61," role whereas each item has a "),n(62,"i"),i(63,"tab"),a(),i(64," role with "),n(65,"i"),i(66,"aria-selected"),a(),i(67," and "),n(68,"i"),i(69,"aria-controls"),a(),i(70," attributes. The "),n(71,"i"),i(72,"aria-label"),a(),i(73," attribute of a quick navigation item refers to the "),n(74,"i"),i(75,"aria.pageLabel"),a(),i(76," of the "),n(77,"a",0),i(78,"locale"),a(),i(79," API. Current page is marked with "),n(80,"i"),i(81,"aria-current"),a(),i(82,". "),a(),n(83,"p"),i(84,"In full screen mode, modal element uses "),n(85,"i"),i(86,"dialog"),a(),i(87," role with "),n(88,"i"),i(89,"aria-modal"),a(),i(90," enabled. The close button retrieves "),n(91,"i"),i(92,"aria-label"),a(),i(93," from the "),n(94,"i"),i(95,"aria.close"),a(),i(96," property of the "),n(97,"a",0),i(98,"locale"),a(),i(99," API."),a(),n(100,"h3"),i(101,"Next/Prev Keyboard Support"),a(),n(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),i(107,"Key"),a(),n(108,"th"),i(109,"Function"),a()()(),n(110,"tbody")(111,"tr")(112,"td")(113,"i"),i(114,"tab"),a()(),n(115,"td"),i(116,"Moves focus through interactive elements in the carousel."),a()(),n(117,"tr")(118,"td")(119,"i"),i(120,"enter"),a()(),n(121,"td"),i(122,"Activates navigation."),a()(),n(123,"tr")(124,"td")(125,"i"),i(126,"space"),a()(),n(127,"td"),i(128,"Activates navigation."),a()()()()(),n(129,"h3"),i(130,"Quick Navigation Keyboard Support"),a(),n(131,"div",1)(132,"table",2)(133,"thead")(134,"tr")(135,"th"),i(136,"Key"),a(),n(137,"th"),i(138,"Function"),a()()(),n(139,"tbody")(140,"tr")(141,"td")(142,"i"),i(143,"tab"),a()(),n(144,"td"),i(145,"Moves focus through the active slide link."),a()(),n(146,"tr")(147,"td")(148,"i"),i(149,"enter"),a()(),n(150,"td"),i(151,"Activates the focused slide link."),a()(),n(152,"tr")(153,"td")(154,"i"),i(155,"space"),a()(),n(156,"td"),i(157,"Activates the focused slide link."),a()(),n(158,"tr")(159,"td")(160,"i"),i(161,"right arrow"),a()(),n(162,"td"),i(163,"Moves focus to the next slide link."),a()(),n(164,"tr")(165,"td")(166,"i"),i(167,"left arrow"),a()(),n(168,"td"),i(169,"Moves focus to the previous slide link."),a()(),n(170,"tr")(171,"td")(172,"i"),i(173,"home"),a()(),n(174,"td"),i(175,"Moves focus to the first slide link."),a()(),n(176,"tr")(177,"td")(178,"i"),i(179,"end"),a()(),n(180,"td"),i(181,"Moves focus to the last slide link."),a()()()()()())},dependencies:[w],encapsulation:2})}return t})();var Ne=["galleria"],Le=()=>({"max-width":"640px"}),je=(t,p)=>({width:t,display:p});function Re(t,p){if(t&1&&c(0,"img",7),t&2){let e=p.$implicit,l=B();r("src",e.itemImageSrc,g)("ngStyle",oe(2,je,l.fullscreen?"":"100%",l.fullscreen?"":"block"))}}function ze(t,p){if(t&1&&(n(0,"div",8),c(1,"img",9),a()),t&2){let e=p.$implicit;m(),r("src",e.thumbnailImageSrc,g)}}function Ue(t,p){if(t&1&&(n(0,"span",14)(1,"span"),i(2),a(),n(3,"span",15),i(4),a(),n(5,"span"),i(6),a()()),t&2){let e=B(2);m(2),ae("",e.activeIndex+1,"/",e.images.length),m(2),N(e.images[e.activeIndex].title),m(2),N(e.images[e.activeIndex].alt)}}function He(t,p){if(t&1){let e=C();n(0,"div",10)(1,"button",11),G("click",function(){h(e);let o=B();return v(o.onThumbnailButtonClick())}),a(),y(2,Ue,7,4,"span",12),n(3,"button",13),G("click",function(){h(e);let o=B();return v(o.toggleFullScreen())}),a()()}if(t&2){let e=B();m(2),r("ngIf",e.images),m(),r("icon",e.fullScreenIcon())}}var be=(()=>{class t{platformId;photoService;cd;images;showThumbnails;fullscreen=!1;activeIndex=0;onFullScreenListener;galleria;constructor(e,l,o){this.platformId=e,this.photoService=l,this.cd=o}responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];ngOnInit(){this.photoService.getImages().then(e=>{this.images=e,this.cd.markForCheck()}),this.bindDocumentListeners()}onThumbnailButtonClick(){this.showThumbnails=!this.showThumbnails}toggleFullScreen(){this.fullscreen?this.closePreviewFullScreen():this.openPreviewFullScreen(),this.cd.detach()}openPreviewFullScreen(){let e=this.galleria?.element.nativeElement.querySelector(".p-galleria");e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}onFullScreenChange(){this.fullscreen=!this.fullscreen,this.cd.detectChanges(),this.cd.reattach()}closePreviewFullScreen(){H(this.platformId)&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}bindDocumentListeners(){H(this.platformId)&&(this.onFullScreenListener=this.onFullScreenChange.bind(this),document.addEventListener("fullscreenchange",this.onFullScreenListener),document.addEventListener("mozfullscreenchange",this.onFullScreenListener),document.addEventListener("webkitfullscreenchange",this.onFullScreenListener),document.addEventListener("msfullscreenchange",this.onFullScreenListener))}unbindDocumentListeners(){H(this.platformId)&&(document.removeEventListener("fullscreenchange",this.onFullScreenListener),document.removeEventListener("mozfullscreenchange",this.onFullScreenListener),document.removeEventListener("webkitfullscreenchange",this.onFullScreenListener),document.removeEventListener("msfullscreenchange",this.onFullScreenListener),this.onFullScreenListener=null)}ngOnDestroy(){this.unbindDocumentListeners()}galleriaClass(){return`custom-galleria ${this.fullscreen?"fullscreen":""}`}fullScreenIcon(){return`pi ${this.fullscreen?"pi-window-minimize":"pi-window-maximize"}`}code={basic:`<p-galleria #galleria [(value)]="images" [(activeIndex)]="activeIndex" [numVisible]="5" [showThumbnails]="showThumbnails" [showItemNavigators]="true" [showItemNavigatorsOnHover]="true" [circular]="true" [autoPlay]="true" [transitionInterval]="3000" [containerStyle]="{ 'max-width': '640px' }" [containerClass]="galleriaClass()">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" [ngStyle]="{ width: !fullscreen ? '100%' : '', display: !fullscreen ? 'block' : '' }" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <div class="grid gap-4 justify-center">
            <img [src]="item.thumbnailImageSrc" style="display: block" />
        </div>
    </ng-template>
    <ng-template #footer let-item>
        <div class="custom-galleria-footer">
            <button type="button" pButton icon="pi pi-list" (click)="onThumbnailButtonClick()"></button>
            <span *ngIf="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
            </span>
            <button type="button" pButton [icon]="fullScreenIcon()" (click)="toggleFullScreen()" class="fullscreen-button"></button>
        </div>
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria #galleria [(value)]="images" [(activeIndex)]="activeIndex" [numVisible]="5" [showThumbnails]="showThumbnails" [showItemNavigators]="true" [showItemNavigatorsOnHover]="true" [circular]="true" [autoPlay]="true" [transitionInterval]="3000" [containerStyle]="{ 'max-width': '640px' }" [containerClass]="galleriaClass()">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" [ngStyle]="{ width: !fullscreen ? '100%' : '', display: !fullscreen ? 'block' : '' }" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <div class="grid gap-4 justify-center">
                <img [src]="item.thumbnailImageSrc" style="display: block" />
            </div>
        </ng-template>
        <ng-template #footer let-item>
            <div class="custom-galleria-footer">
                <button type="button" pButton icon="pi pi-list" (click)="onThumbnailButtonClick()"></button>
                <span *ngIf="images" class="title-container">
                    <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                    <span class="title">{{ images[activeIndex].title }}</span>
                    <span>{{ images[activeIndex].alt }}</span>
                </span>
                <button type="button" pButton [icon]="fullScreenIcon()" (click)="toggleFullScreen()" class="fullscreen-button"></button>
            </div>
        </ng-template>
    </p-galleria>`,typescript:`import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { PhotoService } from '@/service/photoservice';

@Component({
    selector: 'galleria-advanced-demo',
    templateUrl: './galleria-advanced-demo.html',
    styles: [
        \`:host ::ng-deep {
            .custom-galleria {
                &.p-galleria {
                    &.fullscreen {
                        display: flex;
                        flex-direction: column;

                        .p-galleria-content {
                            flex-grow: 1;
                            justify-content: center;
                        }
                    }

                    .p-galleria-content {
                        position: relative;
                    }

                    .p-galleria-thumbnail-wrapper {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }

                    .p-galleria-thumbnail-items-container {
                        width: 100%;
                    }

                    .custom-galleria-footer {
                        display: flex;
                        align-items: center;
                        background-color: rgba(0, 0, 0, .9);
                        color: #ffffff;

                        > button {
                            background-color: transparent;
                            color: #ffffff;
                            border: 0 none;
                            border-radius: 0;
                            margin: .2rem 0;

                            &.fullscreen-button {
                                margin-left: auto;
                            }

                            &:hover {
                                background-color: rgba(255, 255, 255, 0.1);
                            }
                        }
                    }

                    .title-container {
                        > span {
                            font-size: .9rem;
                            padding-left: .829rem;

                            &.title {
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }\`
    ],
    standalone: true,
    imports: [ButtonModule, GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaAdvancedDemo implements OnInit, OnDestroy {

    images: any[] | undefined;

    showThumbnails: boolean | undefined;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    @ViewChild('galleria') galleria: Galleria | undefined;

    constructor(@Inject(PLATFORM_ID) private platformId: any, private photoService: PhotoService, private cd: ChangeDetectorRef) {}

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.bindDocumentListeners();
    }

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

        this.cd.detach();
    }

    openPreviewFullScreen() {
        let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
        this.cd.detectChanges();
        this.cd.reattach();
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
        } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    galleriaClass() {
        return \`custom-galleria \${this.fullscreen ? 'fullscreen' : ''}\`;
    }

    fullScreenIcon() {
        return \`pi \${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_($),_(b),_(le))};static \u0275cmp=S({type:t,selectors:[["galleria-advanced-doc"]],viewQuery:function(l,o){if(l&1&&te(Ne,5),l&2){let d;ie(d=ne())&&(o.galleria=d.first)}},standalone:!1,decls:13,vars:13,consts:[["galleria",""],["item",""],["thumbnail",""],["footer",""],[1,"card"],[3,"valueChange","activeIndexChange","value","activeIndex","numVisible","showThumbnails","showItemNavigators","showItemNavigatorsOnHover","circular","autoPlay","transitionInterval","containerStyle","containerClass"],["selector","galleria-advanced-demo",3,"code"],[3,"src","ngStyle"],[1,"grid","gap-4","justify-center"],[2,"display","block",3,"src"],[1,"custom-galleria-footer"],["type","button","pButton","","icon","pi pi-list",3,"click"],["class","title-container",4,"ngIf"],["type","button","pButton","",1,"fullscreen-button",3,"click","icon"],[1,"title-container"],[1,"title"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be extended further to implement complex requirements."),a()(),n(3,"div",4)(4,"p-galleria",5,0),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)})("activeIndexChange",function(s){return h(d),f(o.activeIndex,s)||(o.activeIndex=s),v(s)}),y(6,Re,1,5,"ng-template",null,1,u)(8,ze,2,1,"ng-template",null,2,u)(10,He,4,2,"ng-template",null,3,u),a()(),c(12,"app-code",6)}l&2&&(m(4),x("value",o.images)("activeIndex",o.activeIndex),r("numVisible",5)("showThumbnails",o.showThumbnails)("showItemNavigators",!0)("showItemNavigatorsOnHover",!0)("circular",!0)("autoPlay",!0)("transitionInterval",3e3)("containerStyle",D(12,Le))("containerClass",o.galleriaClass()),m(8),r("code",o.code))},dependencies:[U,re,T,w,O,de],encapsulation:2})}return t})();var qe=()=>({"max-width":"640px"});function Qe(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Ke(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Se=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-autoplay-demo',
    templateUrl: './galleria-autoplay-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaAutoplayDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-autoplay-demo"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:16,vars:8,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","autoPlay","circular","responsiveOptions","numVisible","containerStyle"],["selector","galleria-autoplay-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"A slideshow implementation is defined by adding "),n(3,"i"),i(4,"circular"),a(),i(5," and "),n(6,"i"),i(7,"autoPlay"),a(),i(8," properties."),a()(),n(9,"div",2)(10,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(11,Qe,1,1,"ng-template",null,0,u)(13,Ke,1,1,"ng-template",null,1,u),a()(),c(15,"app-code",4)}l&2&&(m(10),x("value",o.images),r("autoPlay",!0)("circular",!0)("responsiveOptions",o.responsiveOptions)("numVisible",5)("containerStyle",D(7,qe)),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Je=()=>({"max-width":"640px"});function Xe(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Ye(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var ye=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width:100%" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width:100%" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Code } from '@/domain/code';
import { PhotoService } from '@/service/photoservice';
import {Component, model, OnInit} from '@angular/core';

@Component({
    selector: 'galleria-basic-demo',
    templateUrl: './galleria-basic-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaBasicDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }

}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-basic-demo"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:19,vars:6,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible"],["selector","galleria-basic-demo",3,"code"],[2,"width","100%",3,"src"],[3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria requires a "),n(3,"i"),i(4,"value"),a(),i(5," as a collection of images, "),n(6,"i"),i(7,"item"),a(),i(8," template for the higher resolution image and "),n(9,"i"),i(10,"thumbnail"),a(),i(11," template to display as a thumbnail."),a()(),n(12,"div",2)(13,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(14,Xe,1,1,"ng-template",null,0,u)(16,Ye,1,1,"ng-template",null,1,u),a()(),c(18,"app-code",4)}l&2&&(m(13),x("value",o.images),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(5,Je))("numVisible",5),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Ze=()=>({"max-width":"640px"});function $e(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function et(t,p){if(t&1&&c(0,"img",7),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}function tt(t,p){if(t&1&&(n(0,"div",8),i(1),a(),n(2,"p",9),i(3),a()),t&2){let e=p.$implicit;m(),N(e.title),m(2),N(e.alt)}}var xe=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
    <ng-template #caption let-item>
        <div class="text-xl mb-2 font-bold">{{ item.title }}</div>
        <p class="text-white">{{ item.alt }}</p>
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;"  />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </ng-template>
        <ng-template #caption let-item>
            <div class="text-xl mb-2 font-bold">{{ item.title }}</div>
            <p class="text-white">{{ item.alt }}</p>
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-caption-demo',
    templateUrl: './galleria-caption-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaCaptionDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }

}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-caption-demo"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:15,vars:6,consts:[["item",""],["thumbnail",""],["caption",""],[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible"],["selector","galleria-caption-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"],[1,"text-xl","mb-2","font-bold"],[1,"text-white"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Description of an image is specified with the "),n(3,"i"),i(4,"caption"),a(),i(5," template."),a()(),n(6,"div",3)(7,"p-galleria",4),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,$e,1,1,"ng-template",null,0,u)(10,et,1,1,"ng-template",null,1,u)(12,tt,4,2,"ng-template",null,2,u),a()(),c(14,"app-code",5)}l&2&&(m(7),x("value",o.images),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(5,Ze))("numVisible",5),m(7),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var it=()=>({"max-width":"640px"});function nt(t,p){if(t&1&&c(0,"img",8),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function at(t,p){if(t&1&&c(0,"img",9),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Ie=(()=>{class t{photoService;images=k([]);get activeIndex(){return this._activeIndex}set activeIndex(e){this.images&&0<=e&&e<=this.images.length-1&&(this._activeIndex=e)}_activeIndex=2;responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}next(){this.activeIndex++}prev(){this.activeIndex--}code={basic:`<div class="mb-4">
    <p-button type="button" icon="pi pi-minus" (click)="prev()" />
    <p-button type="button" icon="pi pi-plus" (click)="next()" severity="secondary" styleClass="ml-2" />
</div>
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" [(activeIndex)]="activeIndex">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <div class="mb-4">
        <p-button type="button" icon="pi pi-minus" (click)="prev()" />
        <p-button type="button" icon="pi pi-plus" (click)="next()" severity="secondary" styleClass="ml-2" />
    </div>
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" [(activeIndex)]="activeIndex">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'galleria-controlled-demo',
    templateUrl: './galleria-controlled-demo.html',
    standalone: true,
    imports: [GalleriaModule, ButtonModule],
    providers: [PhotoService]
})
export class GalleriaControlledDemo implements OnInit {
    images = model([])

    get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images.set(images)));
    }

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-controlled-demo"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:16,vars:7,consts:[["item",""],["thumbnail",""],[1,"card"],[1,"mb-4"],["type","button","icon","pi pi-minus",3,"click"],["type","button","icon","pi pi-plus","severity","secondary","styleClass","ml-2",3,"click"],[3,"valueChange","activeIndexChange","value","responsiveOptions","containerStyle","numVisible","activeIndex"],["selector","galleria-controlled-demo",3,"code"],[2,"width","100%",3,"src"],[3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be controlled programmatically using the "),n(3,"i"),i(4,"activeIndex"),a(),i(5," property."),a()(),n(6,"div",2)(7,"div",3)(8,"p-button",4),G("click",function(){return o.prev()}),a(),n(9,"p-button",5),G("click",function(){return o.next()}),a()(),n(10,"p-galleria",6),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)})("activeIndexChange",function(s){return h(d),f(o.activeIndex,s)||(o.activeIndex=s),v(s)}),y(11,nt,1,1,"ng-template",null,0,u)(13,at,1,1,"ng-template",null,1,u),a()(),c(15,"app-code",7)}l&2&&(m(10),x("value",o.images),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(6,it))("numVisible",5),x("activeIndex",o.activeIndex),m(5),r("code",o.code))},dependencies:[T,w,O,R],encapsulation:2})}return t})();var ot=()=>({"max-width":"850px"});function lt(t,p){if(t&1){let e=C();n(0,"div",7)(1,"img",8),G("click",function(){let o=h(e).index,d=B(2);return v(d.imageClick(o))}),a()()}if(t&2){let e=p.$implicit;m(),r("src",e.thumbnailImageSrc,g)("alt",e.alt)}}function rt(t,p){if(t&1&&(n(0,"div",5),y(1,lt,2,2,"div",6),a()),t&2){let e=B();m(),r("ngForOf",e.images())}}function st(t,p){if(t&1&&c(0,"img",9),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var we=(()=>{class t{photoService;displayCustom;activeIndex=0;images=k([]);responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}imageClick(e){this.activeIndex=e,this.displayCustom=!0}code={basic:`<p-galleria [(value)]="images" [(visible)]="displayCustom" [(activeIndex)]="activeIndex" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '850px' }" [numVisible]="7" [circular]="true" [fullScreen]="true" [showItemNavigators]="true" [showThumbnails]="false">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card flex justify-center">
    <div *ngIf="images() && images().length > 0" class="grid grid-cols-12 gap-4" style="max-width: 800px;">
        <div *ngFor="let image of images(); let index = index" class="col-span-4" key="index">
            <img [src]="image.thumbnailImageSrc" [alt]="image.alt" style="cursor: pointer" (click)="imageClick(index)" />
        </div>
    </div>
    <p-galleria
        [(value)]="images"
        [(visible)]="displayCustom"
        [(activeIndex)]="activeIndex"
        [responsiveOptions]="responsiveOptions"
        [containerStyle]="{ 'max-width': '850px' }"
        [numVisible]="7"
        [circular]="true"
        [fullScreen]="true"
        [showItemNavigators]="true"
        [showThumbnails]="false"
    >
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'galleria-custom-content-demo',
    templateUrl: './galleria-custom-content-demo.html',
    standalone: true,
    imports: [GalleriaModule, CommonModule],
    providers: [PhotoService]
})
export class GalleriaCustomContentDemo implements OnInit {
    displayCustom: boolean | undefined;

    activeIndex: number = 0;

    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["custom-content-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:12,vars:13,consts:[["item",""],[1,"card","flex","justify-center"],["class","grid grid-cols-12 gap-4","style","max-width: 800px;",4,"ngIf"],[3,"valueChange","visibleChange","activeIndexChange","value","visible","activeIndex","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators","showThumbnails"],["selector","galleria-full-screen-template-demo",3,"code"],[1,"grid","grid-cols-12","gap-4",2,"max-width","800px"],["class","col-span-4","key","index",4,"ngFor","ngForOf"],["key","index",1,"col-span-4"],[2,"cursor","pointer",3,"click","src","alt"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Using "),n(3,"i"),i(4,"activeIndex"),a(),i(5,", Galleria is displayed with a specific initial image."),a()(),n(6,"div",1),y(7,rt,2,1,"div",2),n(8,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)})("visibleChange",function(s){return h(d),f(o.displayCustom,s)||(o.displayCustom=s),v(s)})("activeIndexChange",function(s){return h(d),f(o.activeIndex,s)||(o.activeIndex=s),v(s)}),y(9,st,1,1,"ng-template",null,0,u),a()(),c(11,"app-code",4)}l&2&&(m(7),r("ngIf",o.images()&&o.images().length>0),m(),x("value",o.images)("visible",o.displayCustom)("activeIndex",o.activeIndex),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(12,ot))("numVisible",7)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("showThumbnails",!1),m(3),r("code",o.code))},dependencies:[j,U,T,w,O],encapsulation:2})}return t})();var mt=()=>({"max-width":"850px"});function pt(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var _e=(()=>{class t{photoService;displayBasic;images=k([]);responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '850px' }" [numVisible]="7" [circular]="true" [fullScreen]="true" [showItemNavigators]="true" [showThumbnails]="false">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card flex justify-center">
    <p-button icon="pi pi-external-link" label="Show" (click)="displayBasic = true" />
        <p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '850px' }" [numVisible]="7" [circular]="true" [fullScreen]="true" [showItemNavigators]="true" [showThumbnails]="false">
            <ng-template #item let-item>
                <img
                    [src]="item.itemImageSrc"
                    style="width: 100%; display: block;" />
            </ng-template>
        </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'galleria-full-screen-without-thumbnails-demo',
    templateUrl: './galleria-full-screen-without-thumbnails-demo.html',
    standalone: true,
    imports: [GalleriaModule, ButtonModule],
    providers: [PhotoService]
})
export class GalleriaFullScreenWithoutThumbnailsDemo implements OnInit {
    displayBasic: boolean | undefined;

    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }

}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["without-thumbnails-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:9,vars:11,consts:[["item",""],[1,"card","flex","justify-center"],["icon","pi pi-external-link","label","Show",3,"click"],[3,"valueChange","visibleChange","value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showThumbnails","showItemNavigators"],["selector","galleria-full-screen-without-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Thumbnails can also be hidden in full screen mode."),a()(),n(3,"div",1)(4,"p-button",2),G("click",function(){return o.displayBasic=!0}),a(),n(5,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)})("visibleChange",function(s){return h(d),f(o.displayBasic,s)||(o.displayBasic=s),v(s)}),y(6,pt,1,1,"ng-template",null,0,u),a()(),c(8,"app-code",4)}l&2&&(m(5),x("value",o.images)("visible",o.displayBasic),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(10,mt))("numVisible",7)("circular",!0)("fullScreen",!0)("showThumbnails",!1)("showItemNavigators",!0),m(3),r("code",o.code))},dependencies:[T,w,O,R],encapsulation:2})}return t})();var ct=()=>({"max-width":"50%"});function dt(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function gt(t,p){if(t&1&&c(0,"img",7),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Ce=(()=>{class t{photoService;displayBasic;images=k([]);responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [(visible)]="displayBasic"[responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '50%' }" [numVisible]="9" [circular]="true" [fullScreen]="true" [showItemNavigators]="true">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card flex justify-center">
    <p-button icon="pi pi-external-link" label="Show" (click)="displayBasic = true" />
    <p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{'max-width': '50%'}" [numVisible]="9" [circular]="true" [fullScreen]="true" [showItemNavigators]="true">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;"/>
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block;"/>
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'galleria-full-screen-with-thumbnails-demo',
    templateUrl: './galleria-full-screen-with-thumbnails-demo.html',
    standalone: true,
    imports: [GalleriaModule, ButtonModule],
    providers: [PhotoService]
})
export class GalleriaFullScreenWithThumbnailsDemo implements OnInit {
    displayBasic: boolean | undefined;

    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["with-thumbnails-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:14,vars:10,consts:[["item",""],["thumbnail",""],[1,"card","flex","justify-center"],["icon","pi pi-external-link","label","Show",3,"click"],[3,"valueChange","visibleChange","value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators"],["selector","galleria-full-screen-with-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Full screen mode is enabled by adding "),n(3,"i"),i(4,"fullScreen"),a(),i(5," property."),a()(),n(6,"div",2)(7,"p-button",3),G("click",function(){return o.displayBasic=!0}),a(),n(8,"p-galleria",4),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)})("visibleChange",function(s){return h(d),f(o.displayBasic,s)||(o.displayBasic=s),v(s)}),y(9,dt,1,1,"ng-template",null,0,u)(11,gt,1,1,"ng-template",null,1,u),a()(),c(13,"app-code",5)}l&2&&(m(8),x("value",o.images)("visible",o.displayBasic),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(9,ct))("numVisible",9)("circular",!0)("fullScreen",!0)("showItemNavigators",!0),m(5),r("code",o.code))},dependencies:[T,w,O,R],encapsulation:2})}return t})();var De=(()=>{class t{code={typescript:"import { GalleriaModule } from 'primeng/galleria';"};static \u0275fac=function(l){return new(l||t)};static \u0275cmp=S({type:t,selectors:[["galleria-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,o){l&1&&c(0,"app-code",0),l&2&&r("code",o.code)("hideToggleCode",!0)},dependencies:[T],encapsulation:2})}return t})();var ut=()=>({"max-width":"640px"});function ht(t,p){if(t&1&&c(0,"img",4),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var Te=(()=>{class t{photoService;images=k([]);constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-indicator-click-event-demo',
    templateUrl: './galleria-indicator-click-event-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaIndicatorClickEventDemo implements OnInit {
    images = model([])

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["click-event-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:11,vars:6,consts:[["item",""],[1,"card"],[3,"valueChange","value","showIndicators","showThumbnails","containerStyle"],["selector","galleria-indicator-click-event-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Indicators are displayed at the bottom by enabling "),n(3,"i"),i(4,"showIndicators"),a(),i(5," property and interacted with the click event by default."),a()(),n(6,"div",1)(7,"p-galleria",2),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,ht,1,1,"ng-template",null,0,u),a()(),c(10,"app-code",3)}l&2&&(m(7),x("value",o.images),r("showIndicators",!0)("showThumbnails",!1)("containerStyle",D(5,ut)),m(3),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var vt=()=>({"max-width":"640px"});function ft(t,p){if(t&1&&c(0,"img",4),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var Oe=(()=>{class t{photoService;images=k([]);constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [changeItemOnIndicatorHover]="true" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [changeItemOnIndicatorHover]="true" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-indicator-hover-event-demo',
    templateUrl: './galleria-indicator-hover-event-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaIndicatorHoverEventDemo implements OnInit {
    images = model([]);

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["hover-event-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:11,vars:7,consts:[["item",""],[1,"card"],[3,"valueChange","value","showIndicators","showThumbnails","changeItemOnIndicatorHover","containerStyle"],["selector","galleria-indicator-hover-event-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Indicators can be activated on hover instead of click if "),n(3,"i"),i(4,"changeItemOnIndicatorHover"),a(),i(5," is added."),a()(),n(6,"div",1)(7,"p-galleria",2),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,ft,1,1,"ng-template",null,0,u),a()(),c(10,"app-code",3)}l&2&&(m(7),x("value",o.images),r("showIndicators",!0)("showThumbnails",!1)("changeItemOnIndicatorHover",!0)("containerStyle",D(6,vt)),m(3),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var yt=()=>({"max-width":"640px","margin-top":"2em"});function xt(t,p){if(t&1){let e=C();n(0,"div",9)(1,"p-radiobutton",10),I("ngModelChange",function(o){h(e);let d=B();return f(d.position,o)||(d.position=o),v(o)}),a(),n(2,"label",11),i(3),a()()}if(t&2){let e=p.$implicit,l=B();m(),r("name",e.label)("value",e.value)("label",e.label),x("ngModel",l.position),r("inputId",e.label),m(),r("for",e.label),m(),L(" ",e.label," ")}}function It(t,p){if(t&1&&c(0,"img",12),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var ke=(()=>{class t{photoService;images=k([]);position="bottom";showIndicatorsOnItem=!1;positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [indicatorsPosition]="position" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="showIndicatorsOnItem" [containerStyle]="{ 'max-width': '640px', 'margin-top': '2em' }" >
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-8">
        <p-radiobutton [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="option.label" />
    </div>
    <div class="flex items-center">
        <p-checkbox [(ngModel)]="showIndicatorsOnItem" [binary]="true" inputId="binary" label="Inside" ngClass="mt-4" />
    </div>
    <p-galleria [(value)]="images" [indicatorsPosition]="position" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="showIndicatorsOnItem" [containerStyle]="{'width': '100%','margin-top': '2em'}">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButton } from 'primeng/radiobutton';
import { Checkbox } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'galleria-indicator-positioned-demo',
    templateUrl: './galleria-indicator-positioned-demo.html',
    standalone: true,
    imports: [GalleriaModule, RadioButton, Checkbox, FormsModule],
    providers: [PhotoService]
})
export class GalleriaIndicatorPositionedDemo implements OnInit {
    images = model([]);

    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

    showIndicatorsOnItem: boolean = false;

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["positioned-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:38,vars:11,consts:[["item",""],[1,"card"],[1,"flex","flex-wrap","gap-4","mb-8"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"flex","items-center","mb-8"],["inputId","inside_cbox",3,"ngModelChange","ngModel","binary"],["for","inside_cbox",1,"ml-2"],[3,"valueChange","value","indicatorsPosition","showIndicators","showThumbnails","showIndicatorsOnItem","containerStyle"],["selector","galleria-indicator-positioned-demo",3,"code"],[1,"flex","items-center"],[3,"ngModelChange","name","value","label","ngModel","inputId"],[1,"ml-2",3,"for"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2," Indicators can be placed at four different sides using the "),n(3,"i"),i(4,"indicatorsPosition"),a(),i(5," property. In addition, enabling "),n(6,"i"),i(7,"showIndicatorsOnItem"),a(),i(8," moves the indicators inside the image section. "),n(9,"i"),i(10,"indicatorsPosition"),a(),i(11," set to "),n(12,"i"),i(13,"bottom"),a(),i(14," by default, accepted values are "),n(15,"i"),i(16,"top"),a(),i(17,", "),n(18,"i"),i(19,"left"),a(),i(20,", "),n(21,"i"),i(22,"right"),a(),i(23,", and "),n(24,"i"),i(25,"bottom"),a(),i(26,". "),a()(),n(27,"div",1)(28,"div",2),y(29,xt,4,7,"div",3),a(),n(30,"div",4)(31,"p-checkbox",5),I("ngModelChange",function(s){return h(d),f(o.showIndicatorsOnItem,s)||(o.showIndicatorsOnItem=s),v(s)}),a(),n(32,"label",6),i(33," Inside "),a()(),n(34,"p-galleria",7),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(35,It,1,1,"ng-template",null,0,u),a()(),c(37,"app-code",8)}l&2&&(m(29),r("ngForOf",o.positionOptions),m(2),x("ngModel",o.showIndicatorsOnItem),r("binary",!0),m(3),x("value",o.images),r("indicatorsPosition",o.position)("showIndicators",!0)("showThumbnails",!1)("showIndicatorsOnItem",o.showIndicatorsOnItem)("containerStyle",D(10,yt)),m(3),r("code",o.code))},dependencies:[j,T,w,O,q,Q,z,K],encapsulation:2})}return t})();var wt=()=>({maxWidth:"640px"});function _t(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Ct(t,p){if(t&1&&(n(0,"span",6),i(1),a()),t&2){let e=p.$implicit;m(),L(" ",e+1," ")}}var Ee=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [containerStyle]="{ 'max-width': '100%', 'margin-top': '2em' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="indicator" let-index>
        <span style="color: #ffffff; cursor: pointer">
            {{ index + 1 }}
        </span>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [containerStyle]="{ 'max-width': '100%','margin-top': '2em' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="indicator" let-index>
            <span style="color: #ffffff; cursor: pointer">
                {{index + 1}}
            </span>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';

@Component({
    selector: 'galleria-indicator-template-demo',
    templateUrl: './galleria-indicator-template-demo.html'
})
export class GalleriaIndicatorTemplateDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["template-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:13,vars:7,consts:[["item",""],["indicator",""],[1,"card"],["indicatorsPosition","left",3,"valueChange","value","showIndicators","showThumbnails","showIndicatorsOnItem","containerStyle"],["selector","galleria-indicator-template-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"color","#ffffff","cursor","pointer"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Indicator content can be customized with the "),n(3,"i"),i(4,"indicator"),a(),i(5," template."),a()(),n(6,"div",2)(7,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,_t,1,1,"ng-template",null,0,u)(10,Ct,2,1,"ng-template",null,1,u),a()(),c(12,"app-code",4)}l&2&&(m(7),x("value",o.images),r("showIndicators",!0)("showThumbnails",!1)("showIndicatorsOnItem",!0)("containerStyle",D(6,wt)),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Dt=()=>({"max-width":"640px"});function Tt(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Ot(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Pe=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showIndicators]="false" [showItemNavigatorsOnHover]="true" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [showIndicators]="false" [showItemNavigatorsOnHover]="true" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-navigator-hover-demo',
    templateUrl: './galleria-navigator-hover-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaNavigatorHoverDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["hover-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,features:[A([b])],decls:13,vars:8,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","showIndicators","showItemNavigatorsOnHover","showItemNavigators","responsiveOptions","containerStyle"],["selector","galleria-navigator-hover-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Navigators are displayed on hover only if "),n(3,"i"),i(4,"showItemNavigatorsOnHover"),a(),i(5," is enabled."),a()(),n(6,"div",2)(7,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,Tt,1,1,"ng-template",null,0,u)(10,Ot,1,1,"ng-template",null,1,u),a()(),c(12,"app-code",4)}l&2&&(m(7),x("value",o.images),r("showIndicators",!1)("showItemNavigatorsOnHover",!0)("showItemNavigators",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",D(7,Dt)),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var kt=()=>({"max-width":"640px"});function Et(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Pt(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Ve=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showItemNavigators]="true" [showThumbnails]="false" [showIndicators]="true" [showItemNavigatorsOnHover]="true" [circular]="true"[responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [showItemNavigators]="true" [showThumbnails]="false" [showIndicators]="true" [showItemNavigatorsOnHover]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-navigator-indicators-demo',
    templateUrl: './galleria-navigator-indicators-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaNavigatorIndicatorsDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["indicators-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,features:[A([b])],decls:10,vars:10,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","showItemNavigators","showThumbnails","showIndicators","showItemNavigatorsOnHover","circular","responsiveOptions","containerStyle"],["selector","galleria-navigator-indicators-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Navigators and Indicators can be combined as well."),a()(),n(3,"div",2)(4,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(5,Et,1,1,"ng-template",null,0,u)(7,Pt,1,1,"ng-template",null,1,u),a()(),c(9,"app-code",4)}l&2&&(m(4),x("value",o.images),r("showItemNavigators",!0)("showThumbnails",!1)("showIndicators",!0)("showItemNavigatorsOnHover",!0)("circular",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",D(9,kt)),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Vt=()=>({"max-width":"640px"});function Mt(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Ft(t,p){if(t&1&&c(0,"img",6),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var Me=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [circular]="true" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [circular]="true" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-navigator-item-thumbnails-demo',
    templateUrl: './galleria-navigator-item-thumbnails-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaNavigatorItemThumbnailsDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["itemthumbnails-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,features:[A([b])],decls:13,vars:8,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","showItemNavigators","responsiveOptions","circular","numVisible","containerStyle"],["selector","galleria-navigator-item-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Add "),n(3,"i"),i(4,"showItemNavigators"),a(),i(5," to display navigator elements and the left and right side."),a()(),n(6,"div",2)(7,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,Mt,1,1,"ng-template",null,0,u)(10,Ft,1,1,"ng-template",null,1,u),a()(),c(12,"app-code",4)}l&2&&(m(7),x("value",o.images),r("showItemNavigators",!0)("responsiveOptions",o.responsiveOptions)("circular",!0)("numVisible",5)("containerStyle",D(7,Vt)),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Wt=()=>({"max-width":"640px"});function Bt(t,p){if(t&1&&c(0,"img",4),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}var Fe=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [numVisible]="5" [circular]="true" [showItemNavigators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [numVisible]="5" [circular]="true" [showItemNavigators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-item-without-thumbnails-demo',
    templateUrl: './galleria-item-without-thumbnails-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaItemWithoutThumbnailsDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["itemwithoutthumbnails-doc"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,features:[A([b])],decls:7,vars:9,consts:[[1,"card"],[3,"valueChange","value","numVisible","circular","showItemNavigators","showThumbnails","responsiveOptions","containerStyle"],["pTemplate","item"],["selector","galleria-item-without-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Simple example with indicators only."),a()(),n(3,"div",0)(4,"p-galleria",1),I("valueChange",function(E){return f(o.images,E)||(o.images=E),E}),y(5,Bt,1,1,"ng-template",2),a()(),c(6,"app-code",3)),l&2&&(m(4),x("value",o.images),r("numVisible",5)("circular",!0)("showItemNavigators",!0)("showThumbnails",!1)("responsiveOptions",o.responsiveOptions)("containerStyle",D(8,Wt)),m(2),r("code",o.code))},dependencies:[T,w,O,ce],encapsulation:2})}return t})();var Gt=()=>({"max-width":"640px"});function At(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function Nt(t,p){if(t&1&&c(0,"img",5),t&2){let e=p.$implicit;r("src",e.thumbnailImageSrc,g)}}var We=(()=>{class t{photoService;images=k([]);responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images.set(e))}code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="7" [circular]="true">
    <ng-template #item let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template #thumbnail let-item>
        <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="7" [circular]="true">
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;"/>
        </ng-template>
        <ng-template #thumbnail let-item>
            <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit, model } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'galleria-responsive-demo',
    templateUrl: './galleria-responsive-demo.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class GalleriaResponsiveDemo implements OnInit {
    images = model([]);

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images.set(images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-responsive-demo"]],inputs:{images:[1,"images"]},outputs:{images:"imagesChange"},standalone:!1,decls:13,vars:7,consts:[["item",""],["thumbnail",""],[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible","circular"],["selector","galleria-responsive-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria responsiveness is defined with the "),n(3,"i"),i(4,"responsiveOptions"),a(),i(5," property."),a()(),n(6,"div",2)(7,"p-galleria",3),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(8,At,1,1,"ng-template",null,0,u)(10,Nt,1,1,"ng-template",null,1,u),a()(),c(12,"app-code",4)}l&2&&(m(7),x("value",o.images),r("responsiveOptions",o.responsiveOptions)("containerStyle",D(6,Gt))("numVisible",7)("circular",!0),m(5),r("code",o.code))},dependencies:[T,w,O],encapsulation:2})}return t})();var Lt=()=>({"max-width":"640px"});function jt(t,p){if(t&1){let e=C();n(0,"div",7)(1,"p-radiobutton",8),I("ngModelChange",function(o){h(e);let d=B();return f(d.position,o)||(d.position=o),v(o)}),a(),n(2,"label",9),i(3),a()()}if(t&2){let e=p.$implicit,l=B();m(),r("name",e.label)("value",e.value)("label",e.label),x("ngModel",l.position),r("inputId",e.label),m(),r("for",e.label),m(),L(" ",e.label," ")}}function Rt(t,p){if(t&1&&c(0,"img",10),t&2){let e=p.$implicit;r("src",e.itemImageSrc,g)}}function zt(t,p){if(t&1&&(n(0,"div",11),c(1,"img",10),a()),t&2){let e=p.$implicit;m(),r("src",e.thumbnailImageSrc,g)}}var Be=(()=>{class t{photoService;images;position="bottom";positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}];responsiveOptions=[{breakpoint:"1300px",numVisible:4},{breakpoint:"575px",numVisible:1}];constructor(e){this.photoService=e}ngOnInit(){this.photoService.getImages().then(e=>this.images=e)}code={basic:`<div class="flex flex-wrap gap-4 mb-8">
    <div *ngFor="let option of positionOptions" class="flex items-center">
        <p-radiobutton [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label" />
        <label [for]="option.label" class="ml-2"> {{ option.label }} </label>
    </div>
</div>
<p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" >
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid gap-4 justify-center">
            <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block" />
        </div>
    </ng-template>
</p-galleria>`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-8">
        <div *ngFor="let option of positionOptions" class="flex items-center">
            <p-radiobutton [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label" />
            <label [for]="option.label" class="ml-2"> {{ option.label }} </label>
        </div>
    </div>
    <p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid gap-4 justify-center">
                <img [src]="item.thumbnailImageSrc" style="width: 100%; display: block" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'galleria-thumbnail-demo',
    templateUrl: './galleria-thumbnail-demo.html',
    standalone: true,
    imports: [GalleriaModule, RadioButton, FormsModule],
    providers: [PhotoService]
})
export class GalleriaThumbnailDemo implements OnInit {
    images: any[] | undefined;

    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom' = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
        },
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]};static \u0275fac=function(l){return new(l||t)(_(b))};static \u0275cmp=S({type:t,selectors:[["galleria-thumbnail-demo"]],standalone:!1,decls:15,vars:8,consts:[["item",""],["thumbnail",""],[1,"card"],[1,"flex","flex-wrap","gap-4","mb-8"],["class","flex items-center",4,"ngFor","ngForOf"],[3,"valueChange","value","thumbnailsPosition","responsiveOptions","containerStyle","numVisible"],["selector","galleria-thumbnail-demo",3,"code"],[1,"flex","items-center"],[3,"ngModelChange","name","value","label","ngModel","inputId"],[1,"ml-2",3,"for"],[2,"width","100%","display","block",3,"src"],[1,"grid","gap-4","justify-center"]],template:function(l,o){if(l&1){let d=C();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be controlled programmatically using the "),n(3,"i"),i(4,"activeIndex"),a(),i(5," property."),a()(),n(6,"div",2)(7,"div",3),y(8,jt,4,7,"div",4),a(),n(9,"p-galleria",5),I("valueChange",function(s){return h(d),f(o.images,s)||(o.images=s),v(s)}),y(10,Rt,1,1,"ng-template",null,0,u)(12,zt,2,1,"ng-template",null,1,u),a()(),c(14,"app-code",6)}l&2&&(m(8),r("ngForOf",o.positionOptions),m(),x("value",o.images),r("thumbnailsPosition",o.position)("responsiveOptions",o.responsiveOptions)("containerStyle",D(7,Lt))("numVisible",5),m(5),r("code",o.code))},dependencies:[j,T,w,O,q,Q,z],encapsulation:2})}return t})();var Ge=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=ee({type:t});static \u0275inj=Z({imports:[se,pe,ue,J,ve,me,ge,z,K,J]})}return t})();var Ut=()=>["Galleria"],Ae=(()=>{class t{docs=[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:ye},{id:"controlled",label:"Controlled",component:Ie},{id:"indicator",label:"Indicator",children:[{id:"clickevent",label:"Click Event",component:Te},{id:"hoverevent",label:"Hover Event",component:Oe},{id:"position",label:"Position",component:ke},{id:"template",label:"Template",component:Ee}]},{id:"thumbnail",label:"Thumbnail",component:Be},{id:"responsive",label:"Responsive",component:We},{id:"fullscreen",label:"Full Screen",children:[{id:"withthumbnails",label:"With Thumbnails",component:Ce},{id:"withtouthumbnails",label:"Without Thumbnails",component:_e},{id:"customcontent",label:"Custom Content",component:we}]},{id:"navigator",label:"Navigator",children:[{id:"itemwiththumbnails",label:"With Thumbnails",component:Me},{id:"itemwithtouthumbnails",label:"Without Thumbnails",component:Fe},{id:"hover",label:"Display on Hover",component:Pe},{id:"withindicators",label:"With Indicators",component:Ve}]},{id:"autoplay",label:"AutoPlay",component:Se},{id:"caption",label:"Caption",component:xe},{id:"advanced",label:"Advanced",component:be},{id:"accessibility",label:"Accessibility",component:fe}];static \u0275fac=function(l){return new(l||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Gallery Component","header","Galleria","description","Galleria is an advanced content gallery component.",3,"docs","apiDocs"]],template:function(l,o){l&1&&c(0,"app-doc",0),l&2&&r("docs",o.docs)("apiDocs",D(2,Ut))},dependencies:[Ge,he],styles:["[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen{display:flex;flex-direction:column}[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen .p-galleria-content{flex-grow:1;justify-content:center}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-content{position:relative}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-wrapper{position:absolute;bottom:0;left:0;width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-items-container{width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer{display:flex;align-items:center;background-color:#000000e6;color:#fff}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button{background-color:transparent;color:#fff;border:0 none;border-radius:0;margin:.2rem 0}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button.fullscreen-button{margin-left:auto}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button:hover{background-color:#ffffff1a}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span{font-size:.9rem;padding-left:.829rem}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span.title{font-weight:700}"]})}return t})();var _a=[{path:"",component:Ae}];export{_a as default};
