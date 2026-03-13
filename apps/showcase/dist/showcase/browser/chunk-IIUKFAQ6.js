import{a as y,b as ae,c as x,d as le}from"./chunk-INLKTFEM.js";import{a as q,b as A}from"./chunk-K3W3SKUQ.js";import{a as L,b as $}from"./chunk-AKIDLCU7.js";import{a as ee,b as te}from"./chunk-6FFJRHC4.js";import"./chunk-EHIVA7EC.js";import{a as X,b as Z}from"./chunk-VHOAM5CB.js";import{a as z,b as J}from"./chunk-GCF7VN5N.js";import{a as ne,b as ie}from"./chunk-YF7WV7YA.js";import{a as re,b as ue}from"./chunk-C4X3ZIUF.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as b,d as pe,e as E}from"./chunk-I6RUY6VJ.js";import{a as f,b as oe}from"./chunk-CIUCWEWU.js";import{b as T,e as C,j as v,s as j,u as h,v as Q}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as Y,ba as H}from"./chunk-DEL7GGHP.js";import{e as k,i as K}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as O}from"./chunk-O4W5DSIC.js";import{Ab as u,Hb as U,Mb as V,O as B,Qa as a,X as F,Xb as R,Y as P,ac as r,eb as m,fb as N,fc as c,gc as s,hc as g,xb as l,yb as e,zb as t}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var de=(()=>{class p{static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["input-group-accessibility-doc"]],standalone:!1,decls:9,vars:0,template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),t(),e(3,"p"),r(4,"InputGroup and InputGroupAddon does not require any roles and attributes."),t(),e(5,"h3"),r(6,"Keyboard Support"),t(),e(7,"p"),r(8,"Component does not include any interactive elements."),t()())},dependencies:[b],encapsulation:2})}return p})();var me=(()=>{class p{text1;text2;number;selectedCity;cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];code={basic:`<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <input pInputText [(ngModel)]="text1" placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputnumber [(ngModel)]="number" placeholder="Price" />
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <input pInputText  [(ngModel)]="text2" placeholder="Website" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-map"></i>
    </p-inputgroup-addon>
    <p-select [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" placeholder="City" />
</p-inputgroup>`,html:`<div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-user"></i>
        </p-inputgroup-addon>
        <input pInputText [(ngModel)]="text1" placeholder="Username" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-inputnumber [(ngModel)]="number" placeholder="Price" />
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>www</p-inputgroup-addon>
        <input pInputText  [(ngModel)]="text2" placeholder="Website" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-map"></i>
        </p-inputgroup-addon>
        <p-select [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" placeholder="City" />
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'input-group-basic-demo',
    templateUrl: './input-group-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule]
})
export class InputGroupBasicDemo {
    text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["basic-doc"]],standalone:!1,decls:29,vars:6,consts:[[1,"card","grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"pi","pi-user"],["pInputText","","placeholder","Username",3,"ngModelChange","ngModel"],["placeholder","Price",3,"ngModelChange","ngModel"],["pInputText","","placeholder","Website",3,"ngModelChange","ngModel"],[1,"pi","pi-map"],["optionLabel","name","placeholder","City",3,"ngModelChange","ngModel","options"],["selector","input-group-basic-demo",3,"code"]],template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"p"),r(2,"A group is created by wrapping the input and add-ons with the "),e(3,"i"),r(4,"p-inputgroup"),t(),r(5," component. Each add-on element is defined as a child of "),e(6,"i"),r(7,"p-inputgroup-addon"),t(),r(8," component."),t()(),e(9,"div",0)(10,"p-inputgroup")(11,"p-inputgroup-addon"),u(12,"i",1),t(),e(13,"input",2),g("ngModelChange",function(n){return s(o.text1,n)||(o.text1=n),n}),t()(),e(14,"p-inputgroup")(15,"p-inputgroup-addon"),r(16,"$"),t(),e(17,"p-inputnumber",3),g("ngModelChange",function(n){return s(o.number,n)||(o.number=n),n}),t(),e(18,"p-inputgroup-addon"),r(19,".00"),t()(),e(20,"p-inputgroup")(21,"p-inputgroup-addon"),r(22,"www"),t(),e(23,"input",4),g("ngModelChange",function(n){return s(o.text2,n)||(o.text2=n),n}),t()(),e(24,"p-inputgroup")(25,"p-inputgroup-addon"),u(26,"i",5),t(),e(27,"p-select",6),g("ngModelChange",function(n){return s(o.selectedCity,n)||(o.selectedCity=n),n}),t()()(),u(28,"app-code",7)),i&2&&(a(13),c("ngModel",o.text1),a(4),c("ngModel",o.number),a(6),c("ngModel",o.text2),a(4),c("ngModel",o.selectedCity),l("options",o.cities),a(),l("code",o.code))},dependencies:[f,b,T,C,v,h,y,x,ee,L],encapsulation:2})}return p})();var ce=(()=>{class p{items;ngOnInit(){this.items=[{label:"Web Search"},{label:"AI Assistant"},{label:"History"}]}code={basic:`<p-inputgroup>
    <p-button label="Search" />
    <input pInputText placeholder="Keyword" />
</p-inputgroup>

<p-inputgroup>
    <input pInputText placeholder="Keyword" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
    </p-inputgroup-addon>
</p-inputgroup>
<p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

<p-inputgroup>
    <p-inputgroup-addon>
        <p-button icon="pi pi-check" severity="secondary" />
    </p-inputgroup-addon>
    <input pInputText placeholder="Vote" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-times" severity="secondary" />
    </p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex flex-col md:flex-row gap-4">
    <p-inputgroup>
        <p-button label="Search" />
        <input pInputText placeholder="Keyword" />
    </p-inputgroup>

    <p-inputgroup>
        <input pInputText placeholder="Keyword" />
        <p-inputgroup-addon>
            <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
        </p-inputgroup-addon>
    </p-inputgroup>
    <p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

    <p-inputgroup>
        <p-inputgroup-addon>
            <p-button icon="pi pi-check" severity="secondary" />
        </p-inputgroup-addon>
        <input pInputText placeholder="Vote" />
        <p-inputgroup-addon>
            <p-button icon="pi pi-times" severity="secondary" />
        </p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'input-group-button-demo',
    templateUrl: './input-group-button-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule, ButtonModule, MenuModule]
})
export class InputGroupButtonDemo {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
    }
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["button-doc"]],standalone:!1,decls:20,vars:2,consts:[["menu",""],[1,"card","flex","flex-col","md:flex-row","gap-4"],["label","Search"],["pInputText","","placeholder","Keyword"],["icon","pi pi-search","severity","secondary","variant","text",3,"click"],["popup","","styleClass","!min-w-fit",3,"model"],["icon","pi pi-check","severity","secondary"],["pInputText","","placeholder","Vote"],["icon","pi pi-times","severity","secondary"],["selector","input-group-button-demo",3,"code"]],template:function(i,o){if(i&1){let M=U();e(0,"app-docsectiontext")(1,"p"),r(2,"Buttons can be placed at either side of an input element."),t()(),e(3,"div",1)(4,"p-inputgroup"),u(5,"p-button",2)(6,"input",3),t(),e(7,"p-inputgroup"),u(8,"input",3),e(9,"p-inputgroup-addon")(10,"p-button",4),V("click",function(he){F(M);let Ie=R(12);return P(Ie.toggle(he))}),t()()(),u(11,"p-menu",5,0),e(13,"p-inputgroup")(14,"p-inputgroup-addon"),u(15,"p-button",6),t(),u(16,"input",7),e(17,"p-inputgroup-addon"),u(18,"p-button",8),t()()(),u(19,"app-code",9)}i&2&&(a(11),l("model",o.items),a(8),l("code",o.code))},dependencies:[f,b,h,Y,y,x,z],encapsulation:2})}return p})();var se=(()=>{class p{radioValue1=!1;checked1=!1;checked2=!1;category;code={basic:`<p-inputgroup>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>
        <p-radiobutton [(ngModel)]="radioValue1" name="rb1" value="rb1"/>
    </p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked1" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked2" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Website" />
    <p-inputgroup-addon><p-radiobutton name="rb2" value="rb2" [(ngModel)]="category"/></p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex flex-col md:flex-row gap-4">
    <p-inputgroup>
        <input type="text" pInputText placeholder="Price" />
        <p-inputgroup-addon>
            <p-radiobutton [(ngModel)]="radioValue1" name="rb1" value="rb1"/>
        </p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon><p-checkbox [(ngModel)]="checked1" [binary]="true"/></p-inputgroup-addon>
        <input type="text" pInputText placeholder="Username" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon><p-checkbox [(ngModel)]="checked2" [binary]="true"/></p-inputgroup-addon>
        <input type="text" pInputText placeholder="Website" />
        <p-inputgroup-addon><p-radiobutton name="rb2" value="rb2" [(ngModel)]="category"/></p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';

@Component({
    selector: 'input-group-checkbox-demo',
    templateUrl: './input-group-checkbox-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule, Checkbox, RadioButton]
})
export class InputGroupCheckboxDemo {
    radioValue1: boolean = false;

    checked1: boolean = false;

    checked2: boolean = false;

    category: string | undefined;
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["checkbox-doc"]],standalone:!1,decls:19,vars:7,consts:[[1,"card","flex","flex-col","md:flex-row","gap-4"],["type","text","pInputText","","placeholder","Price"],["name","rb1","value","rb1",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","binary"],["type","text","pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Website"],["name","rb2","value","rb2",3,"ngModelChange","ngModel"],["selector","input-group-checkbox-demo",3,"code"]],template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"p"),r(2,"Checkbox and RadioButton components can be combined with an input element under the same group."),t()(),e(3,"div",0)(4,"p-inputgroup"),u(5,"input",1),e(6,"p-inputgroup-addon")(7,"p-radiobutton",2),g("ngModelChange",function(n){return s(o.radioValue1,n)||(o.radioValue1=n),n}),t()()(),e(8,"p-inputgroup")(9,"p-inputgroup-addon")(10,"p-checkbox",3),g("ngModelChange",function(n){return s(o.checked1,n)||(o.checked1=n),n}),t()(),u(11,"input",4),t(),e(12,"p-inputgroup")(13,"p-inputgroup-addon")(14,"p-checkbox",3),g("ngModelChange",function(n){return s(o.checked2,n)||(o.checked2=n),n}),t()(),u(15,"input",5),e(16,"p-inputgroup-addon")(17,"p-radiobutton",6),g("ngModelChange",function(n){return s(o.category,n)||(o.category=n),n}),t()()()(),u(18,"app-code",7)),i&2&&(a(7),c("ngModel",o.radioValue1),a(3),c("ngModel",o.checked1),l("binary",!0),a(4),c("ngModel",o.checked2),l("binary",!0),a(3),c("ngModel",o.category),a(),l("code",o.code))},dependencies:[f,b,C,v,h,X,q,y,x],encapsulation:2})}return p})();var ge=(()=>{class p{value1;value2;value3;code={basic:`<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value1" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value2" />
        <label for="in_label">In Label</label>
    </p-floatlabel>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value3" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</p-inputgroup>`,html:`<div class="card flex flex-col md:items-end md:flex-row gap-4">
    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-user"></i>
        </p-inputgroup-addon>
        <p-floatlabel>
            <input pInputText id="over_label" [(ngModel)]="value1" />
            <label for="over_label">Over Label</label>
        </p-floatlabel>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-floatlabel variant="in">
            <input pInputText id="in_label" [(ngModel)]="value2" />
            <label for="in_label">In Label</label>
        </p-floatlabel>
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>www</p-inputgroup-addon>
        <p-floatlabel variant="on">
            <input pInputText id="on_label" [(ngModel)]="value3" />
            <label for="on_label">On Label</label>
        </p-floatlabel>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'input-group-float-label-demo',
    templateUrl: './input-group-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, FloatLabelModule]
})
export class InputGroupFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["float-label-doc"]],standalone:!1,decls:31,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-col","md:items-end","md:flex-row","gap-4"],[1,"pi","pi-user"],["pInputText","","id","over_label",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-group-float-label-demo",3,"code"]],template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"p"),r(2," FloatLabel visually integrates a label with its form element. Visit "),e(3,"a",0),r(4,"FloatLabel"),t(),r(5," documentation for more information. "),t()(),e(6,"div",1)(7,"p-inputgroup")(8,"p-inputgroup-addon"),u(9,"i",2),t(),e(10,"p-floatlabel")(11,"input",3),g("ngModelChange",function(n){return s(o.value1,n)||(o.value1=n),n}),t(),e(12,"label",4),r(13,"Over Label"),t()()(),e(14,"p-inputgroup")(15,"p-inputgroup-addon"),r(16,"$"),t(),e(17,"p-floatlabel",5)(18,"input",6),g("ngModelChange",function(n){return s(o.value2,n)||(o.value2=n),n}),t(),e(19,"label",7),r(20,"In Label"),t()(),e(21,"p-inputgroup-addon"),r(22,".00"),t()(),e(23,"p-inputgroup")(24,"p-inputgroup-addon"),r(25,"www"),t(),e(26,"p-floatlabel",8)(27,"input",9),g("ngModelChange",function(n){return s(o.value3,n)||(o.value3=n),n}),t(),e(28,"label",10),r(29,"On Label"),t()()()(),u(30,"app-code",11)),i&2&&(a(11),c("ngModel",o.value1),a(7),c("ngModel",o.value2),a(9),c("ngModel",o.value3),a(3),l("code",o.code))},dependencies:[k,f,b,T,C,v,h,y,x,ne],encapsulation:2})}return p})();var fe=(()=>{class p{value=10;code={basic:`<p-inputgroup class="md:!w-80">
    <p-inputgroup-addon>
        <i class="pi pi-shopping-cart"></i>
    </p-inputgroup-addon>
    <p-iftalabel>
        <p-inputnumber [(ngModel)]="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
        <label for="price">Price</label>
    </p-iftalabel>
</p-inputgroup>`,html:`<div class="card flex justify-center">
    <p-inputgroup class="md:!w-80">
        <p-inputgroup-addon>
            <i class="pi pi-shopping-cart"></i>
        </p-inputgroup-addon>
        <p-iftalabel>
            <p-inputnumber [(ngModel)]="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
            <label for="price">Price</label>
        </p-iftalabel>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'input-group-ifta-label-demo',
    templateUrl: './input-group-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, IftaLabelModule , InputNumberModule]
})
export class InputGroupIftaLabelDemo {
    value: number = 10;
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["ifta-label-doc"]],standalone:!1,decls:15,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"md:!w-80"],[1,"pi","pi-shopping-cart"],["inputId","price","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","price"],["selector","input-group-ifta-label-demo",3,"code"]],template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"p"),r(2,"IftaLabel is used to create infield top aligned labels. Visit "),e(3,"a",0),r(4,"IftaLabel"),t(),r(5," documentation for more information."),t()(),e(6,"div",1)(7,"p-inputgroup",2)(8,"p-inputgroup-addon"),u(9,"i",3),t(),e(10,"p-iftalabel")(11,"p-inputnumber",4),g("ngModelChange",function(n){return s(o.value,n)||(o.value=n),n}),t(),e(12,"label",5),r(13,"Price"),t()()()(),u(14,"app-code",6)),i&2&&(a(11),c("ngModel",o.value),a(3),l("code",o.code))},dependencies:[k,f,b,C,v,y,x,L,re],encapsulation:2})}return p})();var be=(()=>{class p{code={typescript:`import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["input-group-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&u(0,"app-code",0),i&2&&l("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return p})();var Me=(()=>{class p{code={basic:`<p-inputgroup class="w-full md:!w-[30rem]">
    <p-inputgroup-addon>
        <i class="pi pi-clock"></i>
    </p-inputgroup-addon>
    <p-inputgroup-addon>
        <i class="pi pi-star-fill"></i>
    </p-inputgroup-addon>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex justify-center">
    <p-inputgroup class="w-full md:!w-[30rem]">
        <p-inputgroup-addon>
            <i class="pi pi-clock"></i>
        </p-inputgroup-addon>
        <p-inputgroup-addon>
            <i class="pi pi-star-fill"></i>
        </p-inputgroup-addon>
        <input type="text" pInputText placeholder="Price" />
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'input-group-multiple-demo',
    templateUrl: './input-group-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule]
})
export class InputGroupMultipleDemo {
}`};static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["multiple-doc"]],standalone:!1,decls:15,vars:1,consts:[[1,"card","flex","justify-center"],[1,"w-full","md:!w-[30rem]"],[1,"pi","pi-clock"],[1,"pi","pi-star-fill"],["type","text","pInputText","","placeholder","Price"],["selector","input-group-multiple-demo",3,"code"]],template:function(i,o){i&1&&(e(0,"app-docsectiontext")(1,"p"),r(2,"Multiple add-ons can be placed inside the same group."),t()(),e(3,"div",0)(4,"p-inputgroup",1)(5,"p-inputgroup-addon"),u(6,"i",2),t(),e(7,"p-inputgroup-addon"),u(8,"i",3),t(),u(9,"input",4),e(10,"p-inputgroup-addon"),r(11,"$"),t(),e(12,"p-inputgroup-addon"),r(13,".00"),t()()(),u(14,"app-code",5)),i&2&&(a(14),l("code",o.code))},dependencies:[f,b,h,y,x],encapsulation:2})}return p})();var ye=(()=>{class p{static \u0275fac=function(i){return new(i||p)};static \u0275mod=N({type:p});static \u0275inj=B({imports:[O,K,oe,E,j,Q,H,Z,A,ae,le,A,te,$,ie,ue,J,E]})}return p})();var xe=(()=>{class p{docs=[{id:"import",label:"Import",component:be},{id:"basic",label:"Basic",component:me},{id:"multiple",label:"Multiple",component:Me},{id:"button",label:"Button",component:ce},{id:"checkbox",label:"Checkbox & Radio",component:se},{id:"floatlabel",label:"Float Label",component:ge},{id:"iftalabel",label:"Ifta Label",component:fe},{id:"accessibility",label:"Accessibility",component:de}];static \u0275fac=function(i){return new(i||p)};static \u0275cmp=m({type:p,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular InputGroup Component","header","InputGroup","description","Text, icon, buttons and other content can be grouped next to an input.","themeDocs","inputgroup",3,"docs"]],template:function(i,o){i&1&&u(0,"app-doc",0),i&2&&l("docs",o.docs)},dependencies:[ye,pe],encapsulation:2})}return p})();var Lt=[{path:"",component:xe}];export{Lt as default};
