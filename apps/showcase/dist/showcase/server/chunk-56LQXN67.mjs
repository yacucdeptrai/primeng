import './polyfills.server.mjs';
import{a as g,b as N}from"./chunk-GLPYBSVJ.mjs";import{a as q,b as V}from"./chunk-BVKBGFRF.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as d,d as R,e as D}from"./chunk-HZSAMTDM.mjs";import{a as c,b as H}from"./chunk-EK6YV52O.mjs";import{u as O,v as $}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as S,ba as W}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as L}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as U,v as B}from"./chunk-RUZVPFSZ.mjs";import{Ab as F,Bb as m,Cb as t,Db as s,Dc as j,Eb as r,O as h,Qb as x,Sa as p,ec as e,gb as l,ha as C,hb as E,mb as w,pc as k,qc as z,wb as T,xb as I,yb as A,zb as _}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var K=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["message-accessibility-doc"]],standalone:!1,decls:57,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),s(),t(3,"p"),e(4," Message component uses "),t(5,"i"),e(6,"alert"),s(),e(7," role that implicitly defines "),t(8,"i"),e(9,"aria-live"),s(),e(10,' as "assertive" and '),t(11,"i"),e(12,"aria-atomic"),s(),e(13,' as "true". Since any attribute is passed to the root element, attributes like '),t(14,"i"),e(15,"aria-labelledby"),s(),e(16," and "),t(17,"i"),e(18,"aria-label"),s(),e(19," can optionally be used as well. "),s(),t(20,"p"),e(21,"Close element is a "),t(22,"i"),e(23,"button"),s(),e(24," with an "),t(25,"i"),e(26,"aria-label"),s(),e(27," that refers to the "),t(28,"i"),e(29,"aria.close"),s(),e(30," property of the "),t(31,"a",0),e(32,"locale"),s(),e(33," API by default."),s(),t(34,"h3"),e(35,"Close Button Keyboard Support"),s(),t(36,"div",1)(37,"table",2)(38,"thead")(39,"tr")(40,"th"),e(41,"Key"),s(),t(42,"th"),e(43,"Function"),s()()(),t(44,"tbody")(45,"tr")(46,"td")(47,"i"),e(48,"enter"),s()(),t(49,"td"),e(50,"Closes the message."),s()(),t(51,"tr")(52,"td")(53,"i"),e(54,"space"),s()(),t(55,"td"),e(56,"Closes the message."),s()()()()()())},dependencies:[d],encapsulation:2})}return i})();var P=(()=>{class i{code={basic:"<p-message>Message Content</p-message>",html:`<div class="card">
    <p-message>Message Content</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-basic-demo',
    templateUrl: './message-basic-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageBasicDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["basic-doc"]],standalone:!1,decls:7,vars:1,consts:[[1,"card"],["selector","message-basic-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Message component requires a content to display."),s()(),t(3,"div",0)(4,"p-message"),e(5,"Message Content"),s()(),r(6,"app-code",1)),a&2&&(p(6),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var G=(()=>{class i{code={basic:"<p-message closable>Closable Message</p-message>",html:`<div class="card">
    <p-message closable>Closable Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-closable-demo',
    templateUrl: './message-closable-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageClosableDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["closable-doc"]],standalone:!1,decls:10,vars:1,consts:[[1,"card"],["closable",""],["selector","message-closable-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Enable "),t(3,"i"),e(4,"closable"),s(),e(5," option to display an icon to remove a message."),s()(),t(6,"div",0)(7,"p-message",1),e(8,"Closable Message"),s()(),r(9,"app-code",2)),a&2&&(p(9),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var re=i=>({"mt-4":i});function me(i,M){if(i&1&&r(0,"p-message",5),i&2){let o=M.$implicit,a=M.$index;m("severity",o.severity)("text",o.content)("ngClass",z(4,re,a!==0))("closable",o==null?null:o.closable)}}var J=(()=>{class i{messages=C([]);code={basic:`<div class="flex gap-2">
    <p-button label="Show" (onClick)="addMessages()" />
    <p-button label="Clear" severity="secondary" (onClick)="clearMessages()" />
</div>
<div class="flex flex-col">
    @for (message of messages(); track message; let first = $first) {
        <p-message [severity]="message.severity" [text]="message.content" [ngClass]="{ 'mt-4': !first }" />
    }
</div>`,html:`<div class="card flex flex-col items-center justify-center gap-4">
    <div class="flex gap-2">
        <p-button label="Show" (onClick)="addMessages()" />
        <p-button label="Clear" severity="secondary" (onClick)="clearMessages()" />
    </div>
    <div class="flex flex-col">
        @for (message of messages(); track message; let first = $first) {
            <p-message [severity]="message.severity" [text]="message.content" [ngClass]="{ 'mt-4': !first }" />
        }
    </div>
</div>`,typescript:`import { Component, signal } from '@angular/core';
import { Message } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'message-dynamic-demo',
    templateUrl: './message-dynamic-demo.html',
    standalone: true,
    imports: [Message, ButtonModule]
})
export class MessageDynamicDemo {
    messages = signal<any[]>([]);

    addMessages() {
        this.messages.set([
            { severity: 'info', content: 'Dynamic Info Message' },
            { severity: 'success', content: 'Dynamic Success Message' },
            { severity: 'warn', content: 'Dynamic Warn Message' },
        ]);
    }

    clearMessages() {
        this.messages.set([]);
    }
}`};clearMessages(){this.messages.set([])}addMessages(){this.messages.set([{severity:"info",content:"Dynamic Info Message"},{severity:"success",content:"Dynamic Success Message"},{severity:"warn",content:"Dynamic Warn Message"}])}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["dynamic-doc"]],standalone:!1,decls:14,vars:1,consts:[[1,"card","flex","flex-col","items-center","justify-center","gap-4"],[1,"flex","gap-2"],["label","Show",3,"onClick"],["label","Clear","severity","secondary",3,"onClick"],[1,"flex","flex-col"],[3,"severity","text","ngClass","closable"],["selector","message-dynamic-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Multiple messages can be displayed using the standard "),t(3,"i"),e(4,"for"),s(),e(5," block."),s()(),t(6,"div",0)(7,"div",1)(8,"p-button",2),x("onClick",function(){return n.addMessages()}),s(),t(9,"p-button",3),x("onClick",function(){return n.clearMessages()}),s()(),t(10,"div",4),_(11,me,1,6,"p-message",5,A),s()(),r(13,"app-code",6)),a&2&&(p(11),F(n.messages()),p(2),m("code",n.code))},dependencies:[U,c,g,d,S],encapsulation:2})}return i})();var Q=(()=>{class i{code={basic:`<div class="flex flex-col gap-4">
    <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
        <div class="flex flex-col gap-1">
            <input pInputText placeholder="Username" aria-label="username" class="ng-invalid ng-dirty" />
            <p-message severity="error" variant="simple" size="small">Username is required</p-message>
        </div>
        <div class="flex flex-col gap-1">
        <input pInputText placeholder="Email" aria-label="email" class="ng-invalid ng-dirty" />
        <p-message severity="error" variant="simple" size="small">Email is not valid</p-message>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
            <div class="flex flex-col gap-1">
                <input pInputText placeholder="Username" aria-label="username" class="ng-invalid ng-dirty" />
                <p-message severity="error" variant="simple" size="small">Username is required</p-message>
            </div>
            <div class="flex flex-col gap-1">
            <input pInputText placeholder="Email" aria-label="email" class="ng-invalid ng-dirty" />
            <p-message severity="error" variant="simple" size="small">Email is not valid</p-message>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'message-form-demo',
    templateUrl: './message-form-demo.html',
    standalone: true,
    imports: [Message, InputTextModule]
})
export class MessageFormDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["form-doc"]],standalone:!1,decls:19,vars:1,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["severity","error","icon","pi pi-times-circle","styleClass","mb-2"],[1,"flex","flex-col","gap-1"],["pInputText","","placeholder","Username","aria-label","username",1,"ng-invalid","ng-dirty"],["severity","error","variant","simple","size","small"],["pInputText","","placeholder","Email","aria-label","email",1,"ng-invalid","ng-dirty"],["selector","message-form-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Validation errors in a form are displayed with the "),t(3,"i"),e(4,"error"),s(),e(5," severity."),s()(),t(6,"div",0)(7,"div",1)(8,"p-message",2),e(9,"Validation Failed"),s(),t(10,"div",3),r(11,"input",4),t(12,"p-message",5),e(13,"Username is required"),s()(),t(14,"div",3),r(15,"input",6),t(16,"p-message",5),e(17,"Email is not valid"),s()()()(),r(18,"app-code",7)),a&2&&(p(18),m("code",n.code))},dependencies:[c,g,d,O],encapsulation:2})}return i})();function le(i,M){i&1&&r(0,"p-avatar",6)}var X=(()=>{class i{ngOnInit(){}code={basic:`<p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
<p-message severity="success">
    <ng-template #icon>
        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
    <span class="ml-2">How may I help you?</span>
</p-message>`,html:`<div class="card flex justify-center align-center gap-4">
    <p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
    <p-message severity="success">
        <ng-template #icon>
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </ng-template>
        <span class="ml-2">How may I help you?</span>
    </p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'message-icon-demo',
    templateUrl: './message-icon-demo.html',
    standalone: true,
    imports: [MessageModule, AvatarModule]
})
export class MessageIconDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["icon-doc"]],standalone:!1,decls:14,vars:1,consts:[["icon",""],[1,"card","flex","justify-center","align-center","gap-4"],["severity","info","icon","pi pi-send","text","Info Message","styleClass","h-full"],["severity","success"],[1,"ml-2"],["selector","message-icon-demo",3,"code"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"severity"),s(),e(5," option specifies the type of the message."),s()(),t(6,"div",1),r(7,"p-message",2),t(8,"p-message",3),w(9,le,1,0,"ng-template",null,0,j),t(11,"span",4),e(12,"How may I help you?"),s()()(),r(13,"app-code",5)),a&2&&(p(13),m("code",n.code))},dependencies:[c,g,d,q],encapsulation:2})}return i})();var Y=(()=>{class i{code={typescript:"import { MessageModule } from 'primeng/message';"};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["message-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,n){a&1&&r(0,"app-code",0),a&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return i})();function pe(i,M){i&1&&(t(0,"p-message",2),e(1,"Auto disappear message"),s()),i&2&&m("life",3e3)}var Z=(()=>{class i{visible=C(!1);showMessage(){this.visible.set(!0),setTimeout(()=>{this.visible.set(!1)},3500)}code={basic:'<p-message [life]="3000" severity="success">Auto disappear message</p-message>',html:`<div class="card flex flex-col items-center justify-center gap-4">
    <p-button label="Show" (onClick)="showMessage()" [disabled]="visible()" />
    @if (visible()) {
        <p-message [life]="3000" severity="success">Auto disappear message</p-message>
    }
</div>`,typescript:`import { Component, signal } from '@angular/core';
import { Message } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'message-life-demo',
    templateUrl: './message-life-demo.html',
    standalone: true,
    imports: [Message, ButtonModule]
})
export class MessageLifeDemo {
    visible = signal(false);

    showMessage() {
        this.visible.set(true);

        setTimeout(() => {
            this.visible.set(false);
        }, 3500);
    }
}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["life-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card","flex","flex-col","items-center","justify-center","gap-4"],["label","Show",3,"onClick","disabled"],["severity","success",3,"life"],["selector","message-life-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Messages can disappear automatically by defined the "),t(3,"i"),e(4,"life"),s(),e(5," in milliseconds."),s()(),t(6,"div",0)(7,"p-button",1),x("onClick",function(){return n.showMessage()}),s(),T(8,pe,2,1,"p-message",2),s(),r(9,"app-code",3)),a&2&&(p(7),m("disabled",n.visible()),p(),I(n.visible()?8:-1),p(),m("code",n.code))},dependencies:[c,g,d,S],encapsulation:2})}return i})();var ee=(()=>{class i{code={basic:`<p-message severity="success" variant="outlined">Success Message</p-message>
<p-message severity="info" variant="outlined">Info Message</p-message>
<p-message severity="warn" variant="outlined">Warn Message</p-message>
<p-message severity="error" variant="outlined">Error Message</p-message>
<p-message severity="secondary" variant="outlined">Secondary Message</p-message>
<p-message severity="contrast" variant="outlined">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success" variant="outlined">Success Message</p-message>
    <p-message severity="info" variant="outlined">Info Message</p-message>
    <p-message severity="warn" variant="outlined">Warn Message</p-message>
    <p-message severity="error" variant="outlined">Error Message</p-message>
    <p-message severity="secondary" variant="outlined">Secondary Message</p-message>
    <p-message severity="contrast" variant="outlined">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-outlined-demo',
    templateUrl: './message-outlined-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageOutlinedDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["outlined-doc"]],standalone:!1,decls:23,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success","variant","outlined"],["severity","info","variant","outlined"],["severity","warn","variant","outlined"],["severity","error","variant","outlined"],["severity","secondary","variant","outlined"],["severity","contrast","variant","outlined"],["selector","message-outlined-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Configure the "),t(3,"i"),e(4,"variant"),s(),e(5," value as "),t(6,"i"),e(7,"outlined"),s(),e(8," for messages with borders and no background."),s()(),t(9,"div",0)(10,"p-message",1),e(11,"Success Message"),s(),t(12,"p-message",2),e(13,"Info Message"),s(),t(14,"p-message",3),e(15,"Warn Message"),s(),t(16,"p-message",4),e(17,"Error Message"),s(),t(18,"p-message",5),e(19,"Secondary Message"),s(),t(20,"p-message",6),e(21,"Contrast Message"),s()(),r(22,"app-code",7)),a&2&&(p(22),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var te=(()=>{class i{code={basic:`<p-message severity="success">Success Message</p-message>
<p-message severity="info">Info Message</p-message>
<p-message severity="warn">Warn Message</p-message>
<p-message severity="error">Error Message</p-message>
<p-message severity="secondary">Secondary Message</p-message>
<p-message severity="contrast">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success">Success Message</p-message>
    <p-message severity="info">Info Message</p-message>
    <p-message severity="warn">Warn Message</p-message>
    <p-message severity="error">Error Message</p-message>
    <p-message severity="secondary">Secondary Message</p-message>
    <p-message severity="contrast">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-severity-demo',
    templateUrl: './message-severity-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSeverityDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["severity-doc"]],standalone:!1,decls:20,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success"],["severity","info"],["severity","warn"],["severity","error"],["severity","secondary"],["severity","contrast"],["selector","message-severity-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"severity"),s(),e(5," option specifies the type of the message."),s()(),t(6,"div",0)(7,"p-message",1),e(8,"Success Message"),s(),t(9,"p-message",2),e(10,"Info Message"),s(),t(11,"p-message",3),e(12,"Warn Message"),s(),t(13,"p-message",4),e(14,"Error Message"),s(),t(15,"p-message",5),e(16,"Secondary Message"),s(),t(17,"p-message",6),e(18,"Contrast Message"),s()(),r(19,"app-code",7)),a&2&&(p(19),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var se=(()=>{class i{code={basic:`<p-message severity="success" variant="simple">Success Message</p-message>
<p-message severity="info" variant="simple">Info Message</p-message>
<p-message severity="warn" variant="simple">Warn Message</p-message>
<p-message severity="error" variant="simple">Error Message</p-message>
<p-message severity="secondary" variant="simple">Secondary Message</p-message>
<p-message severity="contrast" variant="simple">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success" variant="simple">Success Message</p-message>
    <p-message severity="info" variant="simple">Info Message</p-message>
    <p-message severity="warn" variant="simple">Warn Message</p-message>
    <p-message severity="error" variant="simple">Error Message</p-message>
    <p-message severity="secondary" variant="simple">Secondary Message</p-message>
    <p-message severity="contrast" variant="simple">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-simple-demo',
    templateUrl: './message-simple-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSimpleDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["simple-doc"]],standalone:!1,decls:23,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success","variant","simple"],["severity","info","variant","simple"],["severity","warn","variant","simple"],["severity","error","variant","simple"],["severity","secondary","variant","simple"],["severity","contrast","variant","simple"],["selector","message-simple-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Configure the "),t(3,"i"),e(4,"variant"),s(),e(5," value as "),t(6,"i"),e(7,"simple"),s(),e(8," for messages without borders and backgrounds."),s()(),t(9,"div",0)(10,"p-message",1),e(11,"Success Message"),s(),t(12,"p-message",2),e(13,"Info Message"),s(),t(14,"p-message",3),e(15,"Warn Message"),s(),t(16,"p-message",4),e(17,"Error Message"),s(),t(18,"p-message",5),e(19,"Secondary Message"),s(),t(20,"p-message",6),e(21,"Contrast Message"),s()(),r(22,"app-code",7)),a&2&&(p(22),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var ie=(()=>{class i{code={basic:`<p-message size="small" icon="pi pi-send">Small Message</p-message>
<p-message icon="pi pi-user">Normal Message</p-message>
<p-message size="large" icon="pi pi-check">Large Message</p-message>`,html:`<div class="card flex flex-col items-center gap-4">
    <p-message size="small" icon="pi pi-send">Small Message</p-message>
    <p-message icon="pi pi-user">Normal Message</p-message>
    <p-message size="large" icon="pi pi-check">Large Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-sizes-demo',
    templateUrl: './message-sizes-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSizesDemo {}`};static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["sizes-doc"]],standalone:!1,decls:17,vars:1,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","icon","pi pi-send"],["icon","pi pi-user"],["size","large","icon","pi pi-check"],["selector","message-sizes-demo",3,"code"]],template:function(a,n){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Message provides "),t(3,"i"),e(4,"small"),s(),e(5," and "),t(6,"i"),e(7,"large"),s(),e(8," sizes as alternatives to the base."),s()(),t(9,"div",0)(10,"p-message",1),e(11,"Small Message"),s(),t(12,"p-message",2),e(13,"Normal Message"),s(),t(14,"p-message",3),e(15,"Large Message"),s()(),r(16,"app-code",4)),a&2&&(p(16),m("code",n.code))},dependencies:[c,g,d],encapsulation:2})}return i})();var ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=E({type:i});static \u0275inj=h({imports:[B,H,L,N,D,V,$,W,D]})}return i})();var ce=()=>["Message"],oe=(()=>{class i{docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:P},{id:"severity",label:"Severity",component:te},{id:"icon",label:"Icon",component:X},{id:"outlined",label:"Outlined",component:ee},{id:"simple",label:"Simple",component:se},{id:"sizes",label:"Sizes",component:ie},{id:"forms",label:"Forms",component:Q},{id:"dynamic",label:"Dynamic",component:J},{id:"closable",label:"Closable",component:G},{id:"life",label:"Life",component:Z},{id:"accessibility",label:"Accessibility",component:K}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=l({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Message Component","header","Message","description","Message component is used to display inline messages.","themeDocs","message",3,"docs","apiDocs"]],template:function(a,n){a&1&&r(0,"app-doc",0),a&2&&m("docs",n.docs)("apiDocs",k(2,ce))},dependencies:[ae,R],encapsulation:2})}return i})();var wt=[{path:"",component:oe}];export{wt as default};
