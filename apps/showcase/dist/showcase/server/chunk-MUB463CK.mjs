import './polyfills.server.mjs';
import{a as s,d as Z,e as T}from"./chunk-HZSAMTDM.mjs";import{a as c,b as P}from"./chunk-EK6YV52O.mjs";import{u as x,v as A}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import{a as u}from"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as g,ba as H}from"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{j as k}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as I}from"./chunk-RUZVPFSZ.mjs";import{$b as S,Bb as r,Cb as o,Db as i,Dc as V,Eb as p,O as D,Sa as d,Z as b,_ as E,ec as t,gb as a,hb as C,mb as M,pc as w}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var O=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["tooltip-accessibility-doc"]],standalone:!1,decls:28,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),i(),o(3,"p"),t(4,"Tooltip component uses "),o(5,"i"),t(6,"tooltip"),i(),t(7," role and when it becomes visible the generated id of the tooltip is defined as the "),o(8,"i"),t(9,"aria-describedby"),i(),t(10," of the target."),i(),o(11,"h3"),t(12,"Keyboard Support"),i(),o(13,"div",0)(14,"table",1)(15,"thead")(16,"tr")(17,"th"),t(18,"Key"),i(),o(19,"th"),t(20,"Function"),i()()(),o(21,"tbody")(22,"tr")(23,"td")(24,"i"),t(25,"escape"),i()(),o(26,"td"),t(27,"Closes the tooltip when focus is on the target."),i()()()()()())},dependencies:[s],encapsulation:2})}return e})();var B=(()=>{class e{code={basic:`<input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
<input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true" />`,html:`<div class="card flex flex-wrap justify-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
    <input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true">
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-auto-hide-demo',
    templateUrl: './tooltip-auto-hide-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipAutoHideDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["auto-hide-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","autoHide: false",3,"autoHide"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","autoHide: true"],["selector","tooltip-auto-hide-demo",3,"code"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set "),o(3,"i"),t(4,"autoHide"),i(),t(5," to false to change the default behavior. "),i()(),o(6,"div",0),p(7,"input",1)(8,"input",2),i(),p(9,"app-code",3)),n&2&&(d(7),r("autoHide",!1),d(2),r("code",m.code))},dependencies:[c,u,x,s],encapsulation:2})}return e})();function J(e,W){e&1&&(o(0,"div",4),b(),o(1,"svg",5),p(2,"path",6),o(3,"mask",7),p(4,"path",8),i(),o(5,"g",9),p(6,"path",10),i(),p(7,"path",11)(8,"path",12)(9,"path",13)(10,"path",14)(11,"path",15)(12,"path",16)(13,"path",17)(14,"path",18)(15,"path",19)(16,"path",20),i(),E(),o(17,"span")(18,"b"),t(19,"PrimeNG"),i(),t(20," rocks! "),i()())}var F=(()=>{class e{code={basic:`<p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
<ng-template #tooltipContent>
    <div class="flex items-center">
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
            <path
                d="..."
                fill="var(--p-primary-color)"
            />
        </svg>
        <span> <b>PrimeNG</b> rocks! </span>
    </div>
</ng-template>`,html:`<div class="card flex justify-center">
    <p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
    <ng-template #tooltipContent>
        <div class="flex items-center">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                <path
                    d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                    fill="var(--p-primary-color)"
                />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path
                        d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                        fill="var(--ground-background)"
                    />
                </mask>
                <g mask="url(#mask0_1_52)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                        fill="var(--p-primary-color)"
                    />
                </g>
                <path
                    d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--ground-background)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                    fill="var(--ground-background)"
                />
            </svg>
            <span> <b>PrimeNG</b> rocks! </span>
        </div>
    </ng-template>
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tooltip-custom-demo',
    templateUrl: './tooltip-custom-demo.html',
    standalone: true,
    imports: [Tooltip, ButtonModule]
})
export class TooltipCustomDemo {

}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["custom-doc"]],standalone:!1,decls:14,vars:2,consts:[["tooltipContent",""],[1,"card","flex","justify-center"],["severity","secondary","tooltipPosition","bottom","label","Button",3,"pTooltip"],["selector","tooltip-custom-demo",3,"code"],[1,"flex","items-center"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"mr-2"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"]],template:function(n,m){if(n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Tooltip can use either a "),o(3,"i"),t(4,"string"),i(),t(5," or a "),o(6,"i"),t(7,"TemplateRef"),i(),t(8,"."),i()(),o(9,"div",1),p(10,"p-button",2),M(11,J,21,0,"ng-template",null,0,V),i(),p(13,"app-code",3)),n&2){let q=S(12);d(10),r("pTooltip",q),d(3),r("code",m.code)}},dependencies:[c,u,g,s],encapsulation:2})}return e})();var j=(()=>{class e{code={basic:'<p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />',html:`<div class="card flex justify-center">
    <p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tooltip-delay-demo',
    templateUrl: './tooltip-delay-demo.html',
    standalone: true,
    imports: [Tooltip, ButtonModule]
})
export class TooltipDelayDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["delay-doc"]],standalone:!1,decls:12,vars:1,consts:[[1,"card","flex","justify-center"],["pTooltip","Confirm to proceed","showDelay","1000","hideDelay","300","label","Save"],["selector","tooltip-delay-demo",3,"code"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Adding delays to the show and hide events are defined with "),o(3,"i"),t(4,"showDelay"),i(),t(5," and "),o(6,"i"),t(7,"hideDelay"),i(),t(8," options respectively."),i()(),o(9,"div",0),p(10,"p-button",1),i(),p(11,"app-code",2)),n&2&&(d(11),r("code",m.code))},dependencies:[c,u,g,s],encapsulation:2})}return e})();var _=(()=>{class e{code={basic:'<input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip">
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-event-demo',
    templateUrl: './tooltip-event-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipEventDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["event-doc"]],standalone:!1,decls:12,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","tooltipEvent","focus","placeholder","focus to display tooltip"],["selector","tooltip-event-demo",3,"code"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Tooltip gets displayed on "),o(3,"i"),t(4,"hover"),i(),t(5," event of its target by default, other option is the "),o(6,"i"),t(7,"focus"),i(),t(8," event to display and blur to hide."),i()(),o(9,"div",0),p(10,"input",1),i(),p(11,"app-code",2)),n&2&&(d(11),r("code",m.code))},dependencies:[c,u,x,s],encapsulation:2})}return e})();var U=(()=>{class e{code={typescript:"import { TooltipModule } from 'primeng/tooltip';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["tooltip-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,m){n&1&&p(0,"app-code",0),n&2&&r("code",m.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return e})();var R=(()=>{class e{tooltipOptions={showDelay:150,autoHide:!1,tooltipEvent:"hover",tooltipPosition:"left"};code={basic:'<input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-options-demo',
    templateUrl: './tooltip-options-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipOptionsDemo {
    tooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["options-doc"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","hover to display tooltip",3,"tooltipOptions"],["selector","tooltip-options-demo",3,"code"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Tooltip is also configurable by using "),o(3,"i"),t(4,"tooltipOptions"),i(),t(5," property."),i()(),o(6,"div",0),p(7,"input",1),i(),p(8,"app-code",2)),n&2&&(d(7),r("tooltipOptions",m.tooltipOptions),d(),r("code",m.code))},dependencies:[c,u,x,s],encapsulation:2})}return e})();var N=(()=>{class e{code={basic:`<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />`,html:`<div class="card flex flex-wrap justify-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-position-demo',
    templateUrl: './tooltip-position-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipPositionDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["position-doc"]],standalone:!1,decls:27,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","right","placeholder","Right"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","top","placeholder","Top"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","bottom","placeholder","Bottom"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","left","placeholder","Left"],["selector","tooltip-position-demo",3,"code"]],template:function(n,m){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Position of the tooltip is specified using "),o(3,"i"),t(4,"tooltipPosition"),i(),t(5," attribute. Valid values are "),o(6,"i"),t(7,"top"),i(),t(8,", "),o(9,"i"),t(10,"bottom"),i(),t(11,", "),o(12,"i"),t(13,"right"),i(),t(14," and "),o(15,"i"),t(16,"left"),i(),t(17,". Default position of the tooltip is "),o(18,"i"),t(19,"right"),i(),t(20,"."),i()(),o(21,"div",0),p(22,"input",1)(23,"input",2)(24,"input",3)(25,"input",4),i(),p(26,"app-code",5)),n&2&&(d(26),r("code",m.code))},dependencies:[c,u,x,s],encapsulation:2})}return e})();var G=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=C({type:e});static \u0275inj=D({imports:[I,P,k,H,A,T,T]})}return e})();var Q=()=>["Tooltip","TooltipOptions"],K=(()=>{class e{docs=[{id:"import",label:"Import",component:U},{id:"position",label:"Position",component:N},{id:"event",label:"Event",component:_},{id:"autohide",label:"Auto Hide",component:B},{id:"delay",label:"Delay",component:j},{id:"custom",label:"Custom",component:F},{id:"options",label:"Tooltip Options",component:R},{id:"accessibility",label:"Accessibility",component:O}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tooltip Component","header","Tooltip","description","Tooltip directive provides advisory information for a component. Tooltip is integrated within various PrimeNG components.","themeDocs","tooltip",3,"docs","apiDocs"]],template:function(n,m){n&1&&p(0,"app-doc",0),n&2&&r("docs",m.docs)("apiDocs",w(2,Q))},dependencies:[G,Z],encapsulation:2})}return e})();var Kt=[{path:"",component:K}];export{Kt as default};
