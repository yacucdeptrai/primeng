import{a as V,b as N}from"./chunk-URX6CYXA.js";import{a as d}from"./chunk-6FNJFYMQ.js";import{a as s,d as R,e as w}from"./chunk-I6RUY6VJ.js";import{a as u,b as U}from"./chunk-CIUCWEWU.js";import{s as k}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as L,ba as O}from"./chunk-DEL7GGHP.js";import{i as B}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as j,u as z}from"./chunk-O4W5DSIC.js";import{$b as C,Ab as m,Eb as A,Fb as _,O as T,Ob as I,Qa as r,_b as x,ac as o,bc as F,cc as D,eb as c,fb as G,kb as h,lc as S,mc as E,nc as P,xb as p,yb as i,zb as a,zc as y}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var $=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["meter-group-accessibility-doc"]],standalone:!1,decls:24,vars:0,template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),a(),i(3,"p"),o(4,"MeterGroup component uses "),i(5,"i"),o(6,"meter"),a(),o(7," role in addition to the "),i(8,"i"),o(9,"aria-valuemin"),a(),o(10,", "),i(11,"i"),o(12,"aria-valuemax"),a(),o(13," and "),i(14,"i"),o(15,"aria-valuenow"),a(),o(16," attributes. Value to describe the component can be defined using "),i(17,"i"),o(18,"aria-labelledby"),a(),o(19," prop."),a(),i(20,"h3"),o(21,"Keyboard Support"),a(),i(22,"p"),o(23,"Component does not include any interactive elements."),a()())},dependencies:[s],encapsulation:2})}return e})();var q=(()=>{class e{value=[{label:"Space used",value:15,color:"var(--p-primary-color)"}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-basic-demo',
    templateUrl: './meter-group-basic-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupBasicDemo {
    value = [
        { label: 'Space used', value: 15, color: 'var(--p-primary-color)' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-basic-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"MeterGroup requires a "),i(3,"i"),o(4,"value"),a(),o(5," as the data to display where each item in the collection should be a type of "),i(6,"i"),o(7,"MeterItem"),a(),o(8,"."),a()(),i(9,"div",0),m(10,"p-metergroup",1),a(),m(11,"app-code",2)),t&2&&(r(10),p("value",n.value),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var K=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16,icon:"pi pi-table"},{label:"Messages",color:"#fbbf24",value:8,icon:"pi pi-inbox"},{label:"Media",color:"#60a5fa",value:24,icon:"pi pi-image"},{label:"System",color:"#c084fc",value:10,icon:"pi pi-cog"}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-icon-demo',
    templateUrl: './meter-group-icon-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupIconDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["icon-doc"]],standalone:!1,decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-icon-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Icons can be displayed next to the labels instead of the default marker."),a()(),i(3,"div",0),m(4,"p-metergroup",1),a(),m(5,"app-code",2)),t&2&&(r(4),p("value",n.value),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var H=(()=>{class e{code={typescript:"import { MeterGroupModule } from 'primeng/metergroup';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["meter-group-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&m(0,"app-code",0),t&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return e})();var J=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />',html:`<div class="card">
    <p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-label-demo',
    templateUrl: './meter-group-label-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupLabelDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["label-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card"],["labelPosition","start","labelOrientation","vertical",3,"value"],["selector","meter-group-label-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2," The position of the labels relative to the meters is defined using the "),i(3,"i"),o(4,"labelPosition"),a(),o(5," property. The default orientation of the labels is horizontal, and the vertical alternative is available through the "),i(6,"i"),o(7,"labelOrientation"),a(),o(8," option. "),a()(),i(9,"div",0),m(10,"p-metergroup",1),a(),m(11,"app-code",2)),t&2&&(r(10),p("value",n.value),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var Q=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" [max]="200" />',html:`<div class="card">
<p-metergroup [value]="value" [max]="200" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-min-max-demo',
    templateUrl: './meter-group-min-max-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupMinMaxDemo{

    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["min-max-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card"],[3,"value","max"],["selector","meter-group-min-max-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Boundaries are configured with the "),i(3,"i"),o(4,"min"),a(),o(5," and "),i(6,"i"),o(7,"max"),a(),o(8," values whose defaults are 0 and 100 respectively."),a()(),i(9,"div",0),m(10,"p-metergroup",1),a(),m(11,"app-code",2)),t&2&&(r(10),p("value",n.value)("max",200),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var W=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-multiple-demo',
    templateUrl: './meter-group-multiple-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupMultipleDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["multiple-doc"]],standalone:!1,decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-multiple-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Adding more items to the array displays the meters in a group."),a()(),i(3,"div",0),m(4,"p-metergroup",1),a(),m(5,"app-code",2)),t&2&&(r(4),p("value",n.value),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var te=e=>({"background-color":e,color:"#ffffff"}),oe=(e,f)=>({background:e,width:f}),ie=e=>({width:e});function ae(e,f){if(e&1&&(A(0),i(1,"p-card",9)(2,"div",10)(3,"div",11)(4,"span",12),o(5),a(),i(6,"span",13),o(7),a()(),i(8,"span",14),m(9,"i"),a()()(),_()),e&2){let l=f.$implicit;r(5),F(l.label),r(2),D("",l.value,"%"),r(),x(E(6,te,l.color1)),r(),C(l.icon)}}function le(e,f){if(e&1&&(i(0,"div",7),h(1,ae,10,8,"ng-container",8),a()),e&2){let l=I();r(),p("ngForOf",l.value)}}function re(e,f){if(e&1&&m(0,"span"),e&2){let l=f.$implicit,t=f.class,n=f.size;x(P(4,oe,"linear-gradient(to right, "+l.color1+", "+l.color2+")",n)),C(t)}}function ne(e,f){if(e&1&&(i(0,"div",15)(1,"span"),o(2,"Storage"),a(),i(3,"span",16),o(4),a(),i(5,"span",17),o(6,"1TB"),a()()),e&2){let l=f.totalPercent;r(3),x(E(3,ie,l+"%")),r(),D("",l,"%")}}function pe(e,f){e&1&&(i(0,"div",18),m(1,"p-button",19)(2,"p-button",20),a()),e&2&&(r(),p("outlined",!0))}var X=(()=>{class e{value=[{label:"Apps",color1:"#34d399",color2:"#fbbf24",value:25,icon:"pi pi-table"},{label:"Messages",color1:"#fbbf24",color2:"#60a5fa",value:15,icon:"pi pi-inbox"},{label:"Media",color1:"#60a5fa",color2:"#c084fc",value:20,icon:"pi pi-image"},{label:"System",color1:"#c084fc",color2:"#c084fc",value:10,icon:"pi pi-cog"}];code={basic:`<p-metergroup [value]="value" labelPosition="start">
    <ng-template #label>
        <div class="flex flex-wrap gap-4">
            <ng-container *ngFor="let meterItem of value; let index = index">
                <p-card class="flex-1" styleClass="border border-surface shadow-none">
                    <div class="flex justify-between gap-8">
                        <div class="flex flex-col gap-1">
                            <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                            <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                        </div>
                        <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                            <i [class]="meterItem.icon"></i>
                        </span>
                    </div>
                </p-card>
            </ng-container>
        </div>
    </ng-template>
    <ng-template #meter let-value let-class="class" let-width="size">
        <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
    </ng-template>
    <ng-template #start let-totalPercent="totalPercent">
        <div class="flex justify-between mt-4 mb-2 relative">
            <span>Storage</span>
            <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </ng-template>
    <ng-template #end>
        <div class="flex justify-between mt-4">
            <p-button label="Manage Storage" [outlined]="true" size="small" />
            <p-button label="Update Plan" size="small" />
        </div>
    </ng-template>
</p-metergroup>`,html:`<div class="card">
    <p-metergroup [value]="value" labelPosition="start">
        <ng-template #label>
            <div class="flex flex-wrap gap-4">
                <ng-container *ngFor="let meterItem of value; let index = index">
                    <p-card class="flex-1" styleClass="border border-surface shadow-none">
                        <div class="flex justify-between gap-8">
                            <div class="flex flex-col gap-1">
                                <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                                <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                            </div>
                            <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                                <i [class]="meterItem.icon"></i>
                            </span>
                        </div>
                    </p-card>
                </ng-container>
            </div>
        </ng-template>
        <ng-template #meter let-value let-class="class" let-width="size">
            <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
        </ng-template>
        <ng-template #start let-totalPercent="totalPercent">
            <div class="flex justify-between mt-4 mb-2 relative">
                <span>Storage</span>
                <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
                <span class="font-medium">1TB</span>
            </div>
        </ng-template>
        <ng-template #end>
            <div class="flex justify-between mt-4">
                <p-button label="Manage Storage" [outlined]="true" size="small" />
                <p-button label="Update Plan" size="small" />
            </div>
        </ng-template>
    </p-metergroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'meter-group-template-demo',
    templateUrl: './meter-group-template-demo.html',
    standalone: true,
    imports: [MeterGroup, CardModule, ButtonModule, CommonModule]
})
export class MeterGroupTemplateDemo {
    value = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["template-doc"]],standalone:!1,decls:14,vars:2,consts:[["label",""],["meter",""],["start",""],["end",""],[1,"card"],["labelPosition","start",3,"value"],["selector","meter-group-template-demo",3,"code"],[1,"flex","flex-wrap","gap-4"],[4,"ngFor","ngForOf"],["styleClass","border border-surface shadow-none",1,"flex-1"],[1,"flex","justify-between","gap-8"],[1,"flex","flex-col","gap-1"],[1,"text-surface-500","dark:text-surface-400","text-sm"],[1,"font-bold","text-lg"],[1,"w-8","h-8","rounded-full","inline-flex","justify-center","items-center","text-center"],[1,"flex","justify-between","mt-4","mb-2","relative"],[1,"absolute","text-right"],[1,"font-medium"],[1,"flex","justify-between","mt-4"],["label","Manage Storage","size","small",3,"outlined"],["label","Update Plan","size","small"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"MeterGroup provides templating support for labels, meter items, and content around the meters."),a()(),i(3,"div",4)(4,"p-metergroup",5),h(5,le,2,1,"ng-template",null,0,y)(7,re,1,7,"ng-template",null,1,y)(9,ne,7,5,"ng-template",null,2,y)(11,pe,3,1,"ng-template",null,3,y),a()(),m(13,"app-code",6)),t&2&&(r(4),p("value",n.value),r(9),p("code",n.code))},dependencies:[j,u,L,s,d,V],encapsulation:2})}return e})();var me=()=>({height:"300px"}),Y=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:`<p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />`,html:`<div class="card flex justify-center">
    <p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-vertical-demo',
    templateUrl: './meter-group-vertical-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupVerticalDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["vertical-doc"]],standalone:!1,decls:15,vars:5,consts:[[1,"card","flex","justify-center"],["orientation","vertical","labelOrientation","vertical",3,"value"],["selector","meter-group-vertical-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Layout of the MeterGroup is configured with the "),i(3,"i"),o(4,"orientation"),a(),o(5," property that accepts either "),i(6,"i"),o(7,"horizontal"),a(),o(8," or "),i(9,"i"),o(10,"vertical"),a(),o(11," as available options."),a()(),i(12,"div",0),m(13,"p-metergroup",1),a(),m(14,"app-code",2)),t&2&&(r(13),x(S(4,me)),p("value",n.value),r(),p("code",n.code))},dependencies:[u,s,d],encapsulation:2})}return e})();var Z=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=G({type:e});static \u0275inj=T({imports:[z,U,k,B,O,w,d,N,w]})}return e})();var ce=()=>["MeterGroup"],ee=(()=>{class e{docs=[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:q},{id:"multiple",label:"Multiple",component:W},{id:"icon",label:"Icon",component:K},{id:"label",label:"Label",component:J},{id:"vertical",label:"Vertical",component:Y},{id:"minmax",label:"Min Max",component:Q},{id:"template",label:"Template",component:X},{id:"accessibility",label:"Accessibility",component:$}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular MeterGroup Component","header","MeterGroup","description","MeterGroup displays scalar measurements within a known range.","themeDocs","metergroup",3,"docs","apiDocs"]],template:function(t,n){t&1&&m(0,"app-doc",0),t&2&&p("docs",n.docs)("apiDocs",S(2,ce))},dependencies:[Z,R],encapsulation:2})}return e})();var dt=[{path:"",component:ee}];export{dt as default};
