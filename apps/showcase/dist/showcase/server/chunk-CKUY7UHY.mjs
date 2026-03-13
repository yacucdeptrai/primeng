import './polyfills.server.mjs';
import{b as B,e as H,j as R,s as W}from"./chunk-TFKM2WIB.mjs";import{Ga as G,Ja as J,P as z,wa as q}from"./chunk-YQJJ7I3T.mjs";import{k as O,m as P,n as $,q as L,v as A}from"./chunk-RUZVPFSZ.mjs";import{$a as _,$b as F,Bb as c,Cb as r,Db as a,Lb as k,N as p,Qb as h,S as x,Sa as o,Sb as y,X as u,Y as f,d,dc as j,ec as s,fc as l,gb as I,jc as E,kc as T,lb as C,lc as D,ma as M,mb as g,oc as N,vb as V}from"./chunk-ZJKG6QAF.mjs";var Q=(()=>{class e{commandSource=new d;responseSource=new d;commandHandler=this.commandSource.asObservable();responseHandler=this.responseSource.asObservable();sendCommand(t){t&&this.commandSource.next(t)}sendResponse(t){t&&this.responseSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var X=({dt:e})=>`
.p-terminal {
    height: ${e("terminal.height")};
    overflow: auto;
    background: ${e("terminal.background")};
    color: ${e("terminal.color")};
    border: 1px solid ${e("terminal.border.color")};
    padding: ${e("terminal.padding")};
    border-radius: ${e("terminal.border.radius")};
}

.p-terminal-prompt {
    display: flex;
    align-items: center;
}

.p-terminal-prompt-value {
    flex: 1 1 auto;
    border: 0 none;
    background: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt-label {
    margin-inline-end: ${e("terminal.prompt.gap")};
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-command-response {
    margin: ${e("terminal.command.response.margin")};
}
`,Y={root:"p-terminal p-component",welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},v=(()=>{class e extends G{name="terminal";theme=X;classes=Y;static \u0275fac=(()=>{let t;return function(n){return(t||(t=M(e)))(n||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();function Z(e,b){if(e&1&&(r(0,"div",8),s(1),a()),e&2){let t=y();o(),l(t.welcomeMessage)}}function ee(e,b){if(e&1&&(r(0,"div",9)(1,"span",6),s(2),a(),r(3,"span",10),s(4),a(),r(5,"div",11),s(6),a()()),e&2){let t=b.$implicit,i=y();o(2),l(i.prompt),o(2),l(t.text),o(),V("aria-live","polite"),o(),l(t.response)}}var we=(()=>{class e extends J{terminalService;welcomeMessage;prompt;style;styleClass;commands=[];command;container;commandProcessed;subscription;_componentStyle=x(v);constructor(t){super(),this.terminalService=t,this.subscription=t.responseHandler.subscribe(i=>{this.commands[this.commands.length-1].response=i,this.commandProcessed=!0})}ngAfterViewInit(){super.ngAfterViewInit(),this.container=z(this.el.nativeElement,".p-terminal")[0]}ngAfterViewChecked(){this.commandProcessed&&(this.container.scrollTop=this.container.scrollHeight,this.commandProcessed=!1)}set response(t){t&&(this.commands[this.commands.length-1].response=t,this.commandProcessed=!0)}handleCommand(t){t.keyCode==13&&(this.commands.push({text:this.command}),this.terminalService.sendCommand(this.command),this.command="")}focus(t){t.focus()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(_(Q))};static \u0275cmp=I({type:e,selectors:[["p-terminal"]],inputs:{welcomeMessage:"welcomeMessage",prompt:"prompt",style:"style",styleClass:"styleClass",response:"response"},features:[N([v]),C],decls:9,vars:8,consts:[["inpc",""],[3,"click","ngClass","ngStyle"],["class","p-terminal-welcome-message",4,"ngIf"],[1,"p-terminal-command-list"],["class","p-terminal-command",4,"ngFor","ngForOf"],[1,"p-terminal-prompt"],[1,"p-terminal-prompt-label"],["type","text","autocomplete","off","autofocus","",1,"p-terminal-prompt-value",3,"ngModelChange","keydown","ngModel"],[1,"p-terminal-welcome-message"],[1,"p-terminal-command"],[1,"p-terminal-command-value"],[1,"p-terminal-command-response"]],template:function(i,n){if(i&1){let w=k();r(0,"div",1),h("click",function(){u(w);let m=F(8);return f(n.focus(m))}),g(1,Z,2,1,"div",2),r(2,"div",3),g(3,ee,7,4,"div",4),a(),r(4,"div",5)(5,"span",6),s(6),a(),r(7,"input",7,0),D("ngModelChange",function(m){return u(w),T(n.command,m)||(n.command=m),f(m)}),h("keydown",function(m){return n.handleCommand(m)}),a()()()}i&2&&(j(n.styleClass),c("ngClass","p-terminal p-component")("ngStyle",n.style),o(),c("ngIf",n.welcomeMessage),o(2),c("ngForOf",n.commands),o(3),l(n.prompt),o(),E("ngModel",n.command))},dependencies:[A,O,P,$,L,W,B,H,R,q],encapsulation:2,changeDetection:0})}return e})();export{Q as a,we as b};
