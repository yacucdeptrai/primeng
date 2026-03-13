import{a as d,b as u}from"./chunk-O3G27VMI.js";import{a as l,d as w,e as b}from"./chunk-I6RUY6VJ.js";import{a as p,b as M}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as C}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as T}from"./chunk-O4W5DSIC.js";import{Ab as s,O as S,Qa as h,Za as v,ac as e,eb as a,fb as y,kc as D,lc as E,xb as c,yb as o,zb as n}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var F=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=a({type:i,selectors:[["terminal-accessibility-doc"]],standalone:!1,decls:38,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,r){t&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),n(),o(4,"p"),e(5," Terminal component has an input element that can be described with "),o(6,"i"),e(7,"aria-label"),n(),e(8," or "),o(9,"i"),e(10,"aria-labelledby"),n(),e(11," props. The element that lists the previous commands has "),o(12,"i"),e(13,"aria-live"),n(),e(14," so that changes are received by the screen reader. "),n(),o(15,"h3"),e(16,"Keyboard Support"),n(),o(17,"div",0)(18,"table",1)(19,"thead")(20,"tr")(21,"th"),e(22,"Key"),n(),o(23,"th"),e(24,"Function"),n()()(),o(25,"tbody")(26,"tr")(27,"td")(28,"i"),e(29,"tab"),n()(),o(30,"td"),e(31,"Moves focus through the input element."),n()(),o(32,"tr")(33,"td")(34,"i"),e(35,"enter"),n()(),o(36,"td"),e(37,"Executes the command when focus in on the input element."),n()()()()()()())},dependencies:[l],encapsulation:2})}return i})();var I=(()=>{class i{terminalService;subscription;constructor(m){this.terminalService=m,this.subscription=this.terminalService.commandHandler.subscribe(t=>{let r,g=t.indexOf(" "),x=g!==-1?t.substring(0,g):t;switch(x){case"date":r="Today is "+new Date().toDateString();break;case"greet":r="Hola "+t.substring(g+1);break;case"random":r=Math.floor(Math.random()*100);break;default:r="Unknown command: "+x}this.terminalService.sendResponse(r)})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}code={basic:`<p>Enter "<strong>date</strong>" to display the current date,
"<strong>greet &#123;0&#125;</strong>" for a message and "<strong>random</strong>"
to get a random number.</p>
<p-terminal welcomeMessage="Welcome to PrimeNG" prompt="primeng $" />`,html:`<div class="card">
    <p>Enter "<strong>date</strong>" to display the current date,
    "<strong>greet &#123;0&#125;</strong>" for a message and "<strong>random</strong>"
    to get a random number.</p>
    <p-terminal welcomeMessage="Welcome to PrimeNG" prompt="primeng $" />
</div>`,typescript:`import { Component, OnDestroy } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { Terminal } from 'primeng/terminal';
import { Subscription } from 'rxjs';

@Component({
    selector: 'terminal-basic-demo',
    templateUrl: './terminal-basic-demo.html',
    standalone: true,
    imports: [Terminal],
    providers: [TerminalService]
})
export class TerminalBasicDemo implements OnDestroy {
    subscription: Subscription;

    constructor(private terminalService: TerminalService) {
        this.subscription = this.terminalService.commandHandler.subscribe((command) => {
            let response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}`};static \u0275fac=function(t){return new(t||i)(v(d))};static \u0275cmp=a({type:i,selectors:[["basic-doc"]],standalone:!1,features:[D([d])],decls:26,vars:1,consts:[[1,"card"],["welcomeMessage","Welcome to PrimeNG","prompt","primeng $"],["selector","terminal-basic-demo",3,"code"]],template:function(t,r){t&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Commands are processed using observables via the "),o(3,"i"),e(4,"TerminalService"),n(),e(5,". Import this service into your component and subscribe to "),o(6,"i"),e(7,"commandHandler"),n(),e(8," to process commands by sending replies with "),o(9,"i"),e(10,"sendResponse"),n(),e(11," function."),n()(),o(12,"div",0)(13,"p"),e(14,'Enter "'),o(15,"strong"),e(16,"date"),n(),e(17,'" to display the current date, "'),o(18,"strong"),e(19,"greet {0}"),n(),e(20,'" for a message and "'),o(21,"strong"),e(22,"random"),n(),e(23,'" to get a random number.'),n(),s(24,"p-terminal",1),n(),s(25,"app-code",2)),t&2&&(h(25),c("code",r.code))},dependencies:[p,l,u],encapsulation:2})}return i})();var k=(()=>{class i{code={typescript:"import { TerminalModule } from 'primeng/terminal';"};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=a({type:i,selectors:[["terminal-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,r){t&1&&s(0,"app-code",0),t&2&&c("code",r.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return i})();var B=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=y({type:i});static \u0275inj=S({imports:[T,C,M,b,u,b]})}return i})();var O=()=>["Terminal"],N=(()=>{class i{docs=[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:I},{id:"accessibility",label:"Accessibility",component:F}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=a({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Terminal Component","header","Terminal","description",'Terminal is a text based user interface. Enter "date" to display the current date.',"themeDocs","terminal",3,"docs","apiDocs"]],template:function(t,r){t&1&&s(0,"app-doc",0),t&2&&c("docs",r.docs)("apiDocs",E(2,O))},dependencies:[B,w],encapsulation:2})}return i})();var le=[{path:"",component:N}];export{le as default};
