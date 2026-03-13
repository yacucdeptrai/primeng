import{a as s}from"./chunk-C47HG2XK.js";import{a as c,d as C,e as x}from"./chunk-I6RUY6VJ.js";import{a as m,b as T}from"./chunk-CIUCWEWU.js";import{s as h,u as g,v as D}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as F}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as y}from"./chunk-O4W5DSIC.js";import{Ab as l,O as b,Qa as f,ac as e,eb as p,fb as v,xb as r,yb as o,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var I=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["fluid-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),o(3,"p"),e(4,"Fluid does not require any roles and attributes."),i(),o(5,"h3"),e(6,"Keyboard Support"),i(),o(7,"p"),e(8,"Component does not include any interactive elements."),i()())},dependencies:[c],encapsulation:2})}return t})();var S=(()=>{class t{code={basic:`<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <input type="text" pInputText id="non-fluid" />
</div>
<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <input type="text" pInputText id="fluid" fluid />
</div>
<p-fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><input type="text" pInputText /></div>
        <div><input type="text" pInputText /></div>
        <div class="col-span-full"><input type="text" pInputText /></div>
        <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
    </div>
</p-fluid>`,html:`<div class="card flex flex-col gap-6">
    <div>
        <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
        <input type="text" pInputText id="non-fluid" />
    </div>
    <div>
        <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
        <input type="text" pInputText id="fluid" fluid />
    </div>
    <p-fluid>
        <span class="font-bold mb-2 block">Fluid Container</span>
        <div class="grid grid-cols-2 gap-4">
            <div><input type="text" pInputText /></div>
            <div><input type="text" pInputText /></div>
            <div class="col-span-full"><input type="text" pInputText /></div>
            <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
        </div>
    </p-fluid>
</div>`,typescript:`import { Component } from '@angular/core';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'fluid-basic-demo',
    templateUrl: './fluid-basic-demo.html',
    standalone: true,
    imports: [Fluid]
})
export class FluidBasicDemo {

}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["basic-doc"]],standalone:!1,decls:48,vars:2,consts:[[1,"card","flex","flex-col","gap-6"],["for","non-fluid",1,"font-bold","mb-2","block"],["type","text","pInputText","","id","non-fluid"],["for","fluid",1,"font-bold","mb-2","block"],["type","text","pInputText","","id","fluid","fluid",""],[1,"font-bold","mb-2","block"],[1,"grid","grid-cols-2","gap-4"],["type","text","pInputText",""],[1,"col-span-full"],["type","text","pInputText","","placeholder","Non-Fluid",3,"fluid"],["selector","fluid-basic-demo",3,"code"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Components with the "),o(3,"i"),e(4,"fluid"),i(),e(5," option like "),o(6,"i"),e(7,"InputText"),i(),e(8," have the ability to span the full width of their component. Enabling the "),o(9,"i"),e(10,"fluid"),i(),e(11," for each component individually may be cumbersome so wrap the content with "),o(12,"i"),e(13,"Fluid"),i(),e(14," to instead for an easier alternative. "),i(),o(15,"p"),e(16,"Any component that has the "),o(17,"i"),e(18,"fluid"),i(),e(19," property can be nested inside the "),o(20,"i"),e(21,"Fluid"),i(),e(22," component. The "),o(23,"i"),e(24,"fluid"),i(),e(25," property of a child component has higher precedence than the fluid container as shown in the last sample."),i()(),o(26,"div",0)(27,"div")(28,"label",1),e(29,"Non-Fluid"),i(),l(30,"input",2),i(),o(31,"div")(32,"label",3),e(33,"Fluid Prop"),i(),l(34,"input",4),i(),o(35,"p-fluid")(36,"span",5),e(37,"Fluid Container"),i(),o(38,"div",6)(39,"div"),l(40,"input",7),i(),o(41,"div"),l(42,"input",7),i(),o(43,"div",8),l(44,"input",7),i(),o(45,"div"),l(46,"input",9),i()()()(),l(47,"app-code",10)),n&2&&(f(46),r("fluid",!1),f(),r("code",a.code))},dependencies:[m,c,g,s],encapsulation:2})}return t})();var E=(()=>{class t{code={typescript:"import { FluidModule } from 'primeng/fluid';"};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["fluid-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&l(0,"app-code",0),n&2&&r("code",a.code)("hideToggleCode",!0)},dependencies:[m],encapsulation:2})}return t})();var M=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=v({type:t});static \u0275inj=b({imports:[y,F,T,x,h,D,s,x]})}return t})();var A=(()=>{class t{docs=[{id:"import",label:"Import",component:E},{id:"basic",label:"Basic",component:S},{id:"accessibility",label:"Accessibility",component:I}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular Fluid Component","header","Fluid","description","Fluid is a layout component to make descendant components span full width of their container.","themeDocs","fluid",3,"docs"]],template:function(n,a){n&1&&l(0,"app-doc",0),n&2&&r("docs",a.docs)},dependencies:[M,C],encapsulation:2})}return t})();var ne=[{path:"",component:A}];export{ne as default};
