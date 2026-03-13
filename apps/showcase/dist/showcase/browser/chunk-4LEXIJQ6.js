import{a as pe,b as ce}from"./chunk-URX6CYXA.js";import{a as v,d as me,e as q}from"./chunk-I6RUY6VJ.js";import{a as f,b as re}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as le,ba as ae}from"./chunk-DEL7GGHP.js";import{i as ee}from"./chunk-UHCZASEU.js";import{Ga as ne,Ja as oe,va as te,wa as ie}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as Y,m as A,q as Z,u as I}from"./chunk-O4W5DSIC.js";import{$b as B,Ab as s,Eb as Q,Fb as U,Gb as M,Ka as N,N as H,O as $,Ob as C,Qa as p,Rb as V,S as P,Tb as E,Ub as S,Xb as K,Zb as G,_b as F,ac as a,bc as J,cc as g,eb as u,fb as O,jb as L,kb as c,kc as W,lc as X,ma as z,mc as D,rb as T,xb as r,yb as o,zb as l,zc as d}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var se=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["timeline-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),l(),o(3,"p"),a(4,"Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element."),l(),o(5,"h3"),a(6,"Keyboard Support"),l(),o(7,"p"),a(8,"Component does not include any interactive elements."),l()())},dependencies:[v],encapsulation:2})}return e})();var _e=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,Te={root:({props:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},R=(()=>{class e extends ne{name="timeline";theme=_e;classes=Te;static \u0275fac=(()=>{let t;return function(n){return(t||(t=z(e)))(n||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var De=["content"],be=["opposite"],Ee=["marker"],j=e=>({$implicit:e});function Se(e,m){e&1&&M(0)}function we(e,m){e&1&&M(0)}function ke(e,m){if(e&1&&(Q(0),c(1,we,1,0,"ng-container",4),U()),e&2){let t=C().$implicit,i=C();p(),r("ngTemplateOutlet",i.markerTemplate||i._markerTemplate)("ngTemplateOutletContext",D(2,j,t))}}function ze(e,m){e&1&&s(0,"div",9),e&2&&T("data-pc-section","marker")}function Me(e,m){e&1&&s(0,"div",10)}function Fe(e,m){e&1&&M(0)}function Be(e,m){if(e&1&&(o(0,"div",2)(1,"div",3),c(2,Se,1,0,"ng-container",4),l(),o(3,"div",5),c(4,ke,2,4,"ng-container",6)(5,ze,1,1,"ng-template",null,0,d)(7,Me,1,0,"div",7),l(),o(8,"div",8),c(9,Fe,1,0,"ng-container",4),l()()),e&2){let t=m.$implicit,i=m.last,n=K(6),x=C();T("data-pc-section","event"),p(),T("data-pc-section","opposite"),p(),r("ngTemplateOutlet",x.oppositeTemplate||x._oppositeTemplate)("ngTemplateOutletContext",D(11,j,t)),p(),T("data-pc-section","separator"),p(),r("ngIf",x.markerTemplate||x._markerTemplate)("ngIfElse",n),p(3),r("ngIf",!i),p(),T("data-pc-section","content"),p(),r("ngTemplateOutlet",x.contentTemplate||x._contentTemplate)("ngTemplateOutletContext",D(13,j,t))}}var h=(()=>{class e extends oe{value;style;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=P(R);get hostClass(){return this.styleClass}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=z(e)))(n||e)}})();static \u0275cmp=u({type:e,selectors:[["p-timeline"]],contentQueries:function(i,n,x){if(i&1&&V(x,De,4)(x,be,4)(x,Ee,4)(x,te,4),i&2){let _;E(_=S())&&(n.contentTemplate=_.first),E(_=S())&&(n.oppositeTemplate=_.first),E(_=S())&&(n.markerTemplate=_.first),E(_=S())&&(n.templates=_)}},hostVars:24,hostBindings:function(i,n){i&2&&(T("data-pc-section","root")("data-pc-name","timeline"),F(n.style),B(n.hostClass),G("p-timeline",!0)("p-component",!0)("p-timeline-left",n.align==="left")("p-timeline-right",n.align==="right")("p-timeline-top",n.align==="top")("p-timeline-bottom",n.align==="bottom")("p-timeline-alternate",n.align==="alternate")("p-timeline-vertical",n.layout==="vertical")("p-timeline-horizontal",n.layout==="horizontal"))},inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},features:[W([R]),L],decls:1,vars:1,consts:[["marker",""],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(i,n){i&1&&c(0,Be,10,15,"div",1),i&2&&r("ngForOf",n.value)},dependencies:[I,Y,A,Z,ie],encapsulation:2,changeDetection:0})}return e})();function Ae(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t.status," ")}}function Ie(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t.status," ")}}function $e(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t.status," ")}}var de=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events" class="w-full md:w-80">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="right">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="alternate">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card flex flex-wrap gap-12">
    <p-timeline [value]="events" class="w-full md:w-80">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-80" align="right">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-80" align="alternate">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-alignment-demo',
    templateUrl: './timeline-alignment-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineAlignmentDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["alignment-doc"]],standalone:!1,decls:17,vars:4,consts:[["content",""],[1,"card","flex","flex-wrap","gap-12"],[1,"w-full","md:w-80",3,"value"],["align","right",1,"w-full","md:w-80",3,"value"],["align","alternate",1,"w-full","md:w-80",3,"value"],["selector","timeline-alignment-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Content location relative the line is defined with the "),o(3,"i"),a(4,"align"),l(),a(5," property."),l()(),o(6,"div",1)(7,"p-timeline",2),c(8,Ae,1,1,"ng-template",null,0,d),l(),o(10,"p-timeline",3),c(11,Ie,1,1,"ng-template",null,0,d),l(),o(13,"p-timeline",4),c(14,$e,1,1,"ng-template",null,0,d),l()(),s(16,"app-code",5)),i&2&&(p(7),r("value",n.events),p(3),r("value",n.events),p(3),r("value",n.events),p(3),r("code",n.code))},dependencies:[f,v,h],encapsulation:2})}return e})();function Oe(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t.status," ")}}var ue=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

@Component({
    selector: 'timeline-basic-demo',
    templateUrl: './timeline-basic-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineBasicDemo {
    events: any[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["basic-doc"]],standalone:!1,decls:14,vars:2,consts:[["content",""],[1,"card"],[3,"value"],["selector","timeline-basic-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2," Timeline receives the events with the "),o(3,"i"),a(4,"value"),l(),a(5," property as a collection of arbitrary objects. In addition, "),o(6,"i"),a(7,"content"),l(),a(8," template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation. "),l()(),o(9,"div",1)(10,"p-timeline",2),c(11,Oe,1,1,"ng-template",null,0,d),l()(),s(13,"app-code",3)),i&2&&(p(10),r("value",n.events),p(3),r("code",n.code))},dependencies:[f,v,h],encapsulation:2})}return e})();function qe(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t," ")}}function Re(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t," ")}}function je(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t," ")}}function He(e,m){e&1&&(o(0,"span"),a(1,"\xA0"),l())}var ve=(()=>{class e{events;constructor(){this.events=["2020","2021","2022","2023"]}code={basic:`<p-timeline [value]="events" layout="horizontal" align="top">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="bottom">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="alternate">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
    <ng-template #opposite let-event>
        <span>&nbsp;</span>
    </ng-template>
</p-timeline>`,html:`<div class="card flex flex-col gap-4">
    <p-timeline [value]="events" layout="horizontal" align="top">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="bottom">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="alternate">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
        <ng-template #opposite let-event>
            <span>&nbsp;</span>
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

@Component({
    selector: 'timeline-horizontal-demo',
    templateUrl: './timeline-horizontal-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineHorizontalDemo {
    events: string[];

    constructor() {
        this.events = [
            "2020", "2021", "2022", "2023"
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["horizontal-doc"]],standalone:!1,decls:25,vars:4,consts:[["content",""],["opposite",""],[1,"card","flex","flex-col","gap-4"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],["selector","timeline-horizontal-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"TimeLine orientation is controlled with the "),o(3,"i"),a(4,"layout"),l(),a(5," property, default is "),o(6,"i"),a(7,"vertical"),l(),a(8," having "),o(9,"i"),a(10,"horizontal"),l(),a(11," as the alternative."),l()(),o(12,"div",2)(13,"p-timeline",3),c(14,qe,1,1,"ng-template",null,0,d),l(),o(16,"p-timeline",4),c(17,Re,1,1,"ng-template",null,0,d),l(),o(19,"p-timeline",5),c(20,je,1,1,"ng-template",null,0,d)(22,He,2,0,"ng-template",null,1,d),l()(),s(24,"app-code",6)),i&2&&(p(13),r("value",n.events),p(3),r("value",n.events),p(3),r("value",n.events),p(5),r("code",n.code))},dependencies:[f,v,h],encapsulation:2})}return e})();var ge=(()=>{class e{code={typescript:"import { TimelineModule } from 'primeng/timeline';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["timeline-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&s(0,"app-code",0),i&2&&r("code",n.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return e})();function Pe(e,m){if(e&1&&(o(0,"small",5),a(1),l()),e&2){let t=m.$implicit;p(),J(t.date)}}function Ne(e,m){if(e&1&&a(0),e&2){let t=m.$implicit;g(" ",t.status," ")}}var fe=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events">
    <ng-template #opposite let-event>
        <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
    </ng-template>
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events">
         <ng-template #opposite let-event>
            <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
        </ng-template>
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-opposite-demo',
    templateUrl: './timeline-opposite-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineOppositeDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["opposite-doc"]],standalone:!1,decls:13,vars:2,consts:[["opposite",""],["content",""],[1,"card"],[3,"value"],["selector","timeline-opposite-demo",3,"code"],[1,"text-surface-500","dark:text-surface-400"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Additional content at the other side of the line can be provided with the "),o(3,"i"),a(4,"opposite"),l(),a(5," property."),l()(),o(6,"div",2)(7,"p-timeline",3),c(8,Pe,2,1,"ng-template",null,0,d)(10,Ne,1,1,"ng-template",null,1,d),l()(),s(12,"app-code",4)),i&2&&(p(7),r("value",n.events),p(5),r("code",n.code))},dependencies:[f,v,h],encapsulation:2})}return e})();var Le=e=>({"background-color":e});function Qe(e,m){if(e&1&&(o(0,"span",5),s(1,"i"),l()),e&2){let t=m.$implicit;F(D(4,Le,t.color)),p(),B(t.icon)}}function Ue(e,m){if(e&1&&s(0,"img",9),e&2){let t=C().$implicit;r("src","https://primefaces.org/cdn/primeng/images/demo/product/"+t.image,N)("alt",t.name)}}function Ve(e,m){if(e&1&&(o(0,"p-card",6),c(1,Ue,1,2,"img",7),o(2,"p"),a(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),l(),s(4,"p-button",8),l()),e&2){let t=m.$implicit;r("header",t.status)("subheader",t.date),p(),r("ngIf",t.image),p(3),r("text",!0)}}var he=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events" align="alternate" styleClass="customized-timeline">
    <ng-template #marker let-event>
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
            <i [class]="event.icon"></i>
        </span>
    </ng-template>
    <ng-template #content let-event>
        <p-card [header]="event.status" [subheader]="event.date">
            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
            </p>
            <p-button label="Read more" [text]="true" />
        </p-card>
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events" align="alternate" styleClass="customized-timeline">
        <ng-template #marker let-event>
            <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
                <i [class]="event.icon"></i>
            </span>
        </ng-template>
        <ng-template #content let-event>
            <p-card [header]="event.status" [subheader]="event.date">
                <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                    neque quas!
                </p>
                <p-button label="Read more" [text]="true" />
            </p-card>
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-template-demo',
    templateUrl: './timeline-template-demo.html',
    standalone: true,
    imports: [Timeline, CardModule, ButtonModule]
})
export class TimelineTemplateDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["template-doc"]],standalone:!1,decls:10,vars:2,consts:[["marker",""],["content",""],[1,"card"],["align","alternate","styleClass","customized-timeline",3,"value"],["selector","timeline-template-demo",3,"code"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Sample implementation with custom content and styled markers."),l()(),o(3,"div",2)(4,"p-timeline",3),c(5,Qe,2,6,"ng-template",null,0,d)(7,Ve,5,4,"ng-template",null,1,d),l()(),s(9,"app-code",4)),i&2&&(p(4),r("value",n.events),p(5),r("code",n.code))},dependencies:[A,f,v,h,pe,le],encapsulation:2})}return e})();var xe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=$({imports:[I,re,q,h,ce,ae,ee,q]})}return e})();var Ke=()=>["Timeline"],ye=(()=>{class e{docs=[{id:"import",label:"Import",component:ge},{id:"basic",label:"Basic",component:ue},{id:"alignment",label:"Alignment",component:de},{id:"opposite",label:"Opposite",component:fe},{id:"template",label:"Template",component:he},{id:"horizontal",label:"Horizontal",component:ve},{id:"accessibility",label:"Accessibility",component:se}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Timeline Component","header","Timeline","description","Timeline visualizes a series of chained events.","themeDocs","timeline",3,"docs","apiDocs"]],template:function(i,n){i&1&&s(0,"app-doc",0),i&2&&r("docs",n.docs)("apiDocs",X(2,Ke))},dependencies:[xe,me],styles:[".custom-marker[_ngcontent-%COMP%]{display:flex;width:2rem;height:2rem;align-items:center;justify-content:center;color:#fff;border-radius:50%;z-index:1}  .p-timeline-event-content,   .p-timeline-event-opposite{line-height:1}@media screen and (max-width:960px){  .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]})}return e})();var oi=[{path:"",component:ye}];export{oi as default};
