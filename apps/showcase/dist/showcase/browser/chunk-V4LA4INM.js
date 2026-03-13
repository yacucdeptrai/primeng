import{a as g}from"./chunk-52K4E6GR.js";import{a as Z,b as _}from"./chunk-F4X3V2LA.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as d,d as N,e as D}from"./chunk-I6RUY6VJ.js";import{a as l,b as O}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as F}from"./chunk-UHCZASEU.js";import{qa as u}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as w}from"./chunk-O4W5DSIC.js";import{Ab as s,Mc as A,O as C,Qa as m,Za as y,_b as P,ac as r,cc as T,ea as M,eb as c,fb as E,kb as B,kc as h,lc as x,xb as a,yb as i,zb as o,zc as I}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var k=(()=>{class e{code={html:`<span id="label_status">Status</span>
<p-progressbar aria-labelledby="label_status" />

<p-progressbar aria-label="Status" />`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progress-bar-accessibility-doc"]],standalone:!1,decls:29,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,p){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),o(),i(4,"p"),r(5," ProgressBar components uses "),i(6,"i"),r(7,"progressbar"),o(),r(8," role along with "),i(9,"i"),r(10,"aria-valuemin"),o(),r(11,", "),i(12,"i"),r(13,"aria-valuemax"),o(),r(14," and "),i(15,"i"),r(16,"aria-valuenow"),o(),r(17," attributes. Value to describe the component can be defined using"),i(18,"i"),r(19,"aria-labelledby"),o(),r(20," and "),i(21,"i"),r(22,"aria-label"),o(),r(23," props. "),o()(),s(24,"app-code",0),i(25,"h3"),r(26,"Keyboard Support"),o(),i(27,"p"),r(28,"Not applicable."),o()()),t&2&&(m(24),a("code",p.code)("hideToggleCode",!0))},dependencies:[l,d],encapsulation:2})}return e})();var j=(()=>{class e{code={basic:'<p-progressbar [value]="50" />',html:`<div class="card">
    <p-progressbar [value]="50" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-basic-demo',
    templateUrl: './progress-bar-basic-demo.html',
    standalone: true,
    imports: [ProgressBar]
})
export class ProgressBarBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-basic-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"ProgressBar is used with the "),i(3,"i"),r(4,"value"),o(),r(5," property."),o()(),i(6,"div",0),s(7,"p-progressbar",1),o(),s(8,"app-code",2)),t&2&&(m(7),a("value",50),m(),a("code",p.code))},dependencies:[l,d,g],encapsulation:2})}return e})();var R=(()=>{class e{messageService;cd;ngZone;value=0;interval;constructor(n,t,p){this.messageService=n,this.cd=t,this.ngZone=p}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.interval=setInterval(()=>{this.ngZone.run(()=>{this.value=this.value+Math.floor(Math.random()*10)+1,this.value>=100&&(this.value=100,this.messageService.add({severity:"info",summary:"Success",detail:"Process Completed"}),clearInterval(this.interval)),this.cd.markForCheck()})},2e3)})}ngOnDestroy(){this.interval&&clearInterval(this.interval)}code={basic:'<p-progressbar [value]="value" />',html:`<div class="card">
    <p-toast />
    <p-progressbar [value]="value" />
</div>`,typescript:`import { Component, NgZone, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'progress-bar-dynamic-demo',
    templateUrl: './progress-bar-dynamic-demo.html',
    standalone: true,
    imports: [ProgressBar, ToastModule],
    providers: [MessageService]
})
export class ProgressBarDynamicDemo implements OnInit {
    value: number = 0;

    interval: any;

    constructor(private messageService: MessageService, private ngZone: NgZone) {}

    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this.interval = setInterval(() => {
                this.ngZone.run(() => {
                    this.value = this.value + Math.floor(Math.random() * 10) + 1;
                    if (this.value >= 100) {
                        this.value = 100;
                        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                        clearInterval(this.interval);
                    }
                });
            }, 2000);
        });
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}`};static \u0275fac=function(t){return new(t||e)(y(u),y(A),y(M))};static \u0275cmp=c({type:e,selectors:[["dynamic-doc"]],standalone:!1,features:[h([u])],decls:7,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-dynamic-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Value is reactive so updating it dynamically changes the bar as well."),o()(),i(3,"div",0),s(4,"p-toast")(5,"p-progressbar",1),o(),s(6,"app-code",2)),t&2&&(m(5),a("value",p.value),m(),a("code",p.code))},dependencies:[l,d,g,Z],encapsulation:2})}return e})();var L=(()=>{class e{code={typescript:`import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progress-bar-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,p){t&1&&s(0,"app-code",0),t&2&&a("code",p.code)("hideToggleCode",!0)},dependencies:[l],encapsulation:2})}return e})();var z=()=>({height:"6px"}),U=(()=>{class e{code={basic:`<p-progressbar mode="indeterminate" [style]="{ height: '6px' }" />`,html:`<div class="card">
    <p-progressbar mode="indeterminate" [style]="{'height': '6px'}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-indeterminate-demo',
    templateUrl: './progress-bar-indeterminate-demo.html',
    standalone: true,
    imports: [ProgressBar],
    providers: [MessageService]
})
export class ProgressBarIndeterminateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["indeterminate-doc"]],standalone:!1,features:[h([u])],decls:12,vars:4,consts:[[1,"card"],["mode","indeterminate"],["selector","progress-bar-indeterminate-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"For progresses with no value to track, set the "),i(3,"i"),r(4,"mode"),o(),r(5," property to "),i(6,"i"),r(7,"indeterminate"),o(),r(8,"."),o()(),i(9,"div",0),s(10,"p-progressbar",1),o(),s(11,"app-code",2)),t&2&&(m(10),P(x(3,z)),m(),a("code",p.code))},dependencies:[l,d,g],encapsulation:2})}return e})();function G(e,q){if(e&1&&(i(0,"span"),r(1),o()),e&2){let n=q.$implicit;m(),T("",n,"/100")}}var V=(()=>{class e{code={basic:`<p-progressbar [value]="50">
    <ng-template #content let-value>
        <span>{{value}}/100</span>
    </ng-template>
</p-progressbar>`,html:`<div class="card">
     <p-progressbar [value]="50">
         <ng-template #content let-value>
            <span>{{value}}/100</span>
         </ng-template>
     </p-progressbar>
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-template-demo',
    templateUrl: './progress-bar-template-demo.html',
    standalone: true,
    imports: [ProgressBar]
})
export class ProgressBarTemplateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["template-doc"]],standalone:!1,decls:10,vars:2,consts:[["content",""],[1,"card"],[3,"value"],["selector","progress-bar-template-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),r(3,"content"),o(),r(4," template allows displaying custom content inside the progressbar."),o()(),i(5,"div",1)(6,"p-progressbar",2),B(7,G,2,1,"ng-template",null,0,I),o()(),s(9,"app-code",3)),t&2&&(m(6),a("value",50),m(3),a("code",p.code))},dependencies:[l,d,g],encapsulation:2})}return e})();var K=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=E({type:e});static \u0275inj=C({imports:[w,F,O,D,g,_,D]})}return e})();var H=()=>["ProgressBar"],$=(()=>{class e{docs=[{id:"import",label:"Import",component:L},{id:"basic",label:"Basic",component:j},{id:"dynamic",label:"Dynamic",component:R},{id:"template",label:"Template",component:V},{id:"indeterminate",label:"Indeterminate",component:U},{id:"accessibility",label:"Accessibility",component:k}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ProgressBar Component","header","ProgressBar","description","ProgressBar is a process status indicator.","themeDocs","progressbar",3,"docs","apiDocs"]],template:function(t,p){t&1&&s(0,"app-doc",0),t&2&&a("docs",p.docs)("apiDocs",x(2,H))},dependencies:[K,N],encapsulation:2})}return e})();var ke=[{path:"",component:$}];export{ke as default};
