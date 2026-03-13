import './polyfills.server.mjs';
import{a as w,b as ie}from"./chunk-ZRV7YDR2.mjs";import{a as M,b as Q}from"./chunk-P3BSQTDP.mjs";import{a as te,b as ne}from"./chunk-TUWVE3ES.mjs";import{a as $,b as ee}from"./chunk-IIW25JG6.mjs";import{a as v,d as Z,e as P}from"./chunk-HZSAMTDM.mjs";import{a as g,b as X}from"./chunk-EK6YV52O.mjs";import{e as y,f as j,g as V,i as O,j as S,k as J,l as Y,m as H,s as K,t as q}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{f as T,j as R}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as G}from"./chunk-RUZVPFSZ.mjs";import{Bb as m,Cb as e,Db as t,Dc as N,Eb as c,Lb as W,O as A,Sa as a,X as E,Y as F,ec as n,gb as f,hb as z,jc as u,kc as p,lc as d,mb as L,pc as U}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var oe=(()=>{class l{code={basic:`<label for="price">Price</label>
<p-inputnumber inputId="price" />

<span id="label_number">Number</span>
<p-inputnumber ariaLabelledBy="label_number" />

<p-inputnumber ariaLabel="Number" />

<p-inputnumber ariaDescribedBy="describe" />
<small id="describe">Information</small>`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["input-number-accessibility-doc"]],standalone:!1,decls:75,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,i){r&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),t(),e(4,"p"),n(5," Value to describe the component can either be provided via "),e(6,"i"),n(7,"label"),t(),n(8," tag combined with "),e(9,"i"),n(10,"inputId"),t(),n(11," prop or using "),e(12,"i"),n(13,"ariaLabelledBy"),t(),n(14,", "),e(15,"i"),n(16,"ariaLabel"),t(),n(17,", "),e(18,"i"),n(19,"ariaDescribedBy"),t(),n(20," props. The input element uses "),e(21,"i"),n(22,"spinbutton"),t(),n(23," role in addition to the "),e(24,"i"),n(25,"aria-valuemin"),t(),n(26,", "),e(27,"i"),n(28,"aria-valuemax"),t(),n(29," and "),e(30,"i"),n(31,"aria-valuenow"),t(),n(32," attributes. "),t()(),c(33,"app-code",0),e(34,"h3"),n(35,"Keyboard Support"),t(),e(36,"div",1)(37,"table",2)(38,"thead")(39,"tr")(40,"th"),n(41,"Key"),t(),e(42,"th"),n(43,"Function"),t()()(),e(44,"tbody")(45,"tr")(46,"td")(47,"i"),n(48,"tab"),t()(),e(49,"td"),n(50,"Moves focus to the input."),t()(),e(51,"tr")(52,"td")(53,"i"),n(54,"up arrow"),t()(),e(55,"td"),n(56,"Increments the value."),t()(),e(57,"tr")(58,"td")(59,"i"),n(60,"down arrow"),t()(),e(61,"td"),n(62,"Decrements the value."),t()(),e(63,"tr")(64,"td")(65,"i"),n(66,"home"),t()(),e(67,"td"),n(68,"Set the minimum value if provided."),t()(),e(69,"tr")(70,"td")(71,"i"),n(72,"end"),t()(),e(73,"td"),n(74,"Set the maximum value if provided."),t()()()()()()),r&2&&(a(33),m("code",i.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,v],encapsulation:2})}return l})();function xe(l,k){l&1&&c(0,"span",11)}function he(l,k){l&1&&c(0,"span",12)}var le=(()=>{class l{value1=20;value2=10.5;value3=25;code={basic:`<p-inputnumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100" />
<p-inputnumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="EUR">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="stacked">
            Stacked
        </label>
        <p-inputnumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD" />
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="minmax-buttons">
            Min-Max Boundaries
        </label>
        <p-inputnumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100" />
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="horizontal">
            Horizontal with Step
        </label>
    <p-inputnumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="EUR">
        <ng-template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
        </ng-template>
        <ng-template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
        </ng-template>
    </p-inputnumber>
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-buttons-demo',
    templateUrl: './input-number-buttons-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberButtonsDemo {
    value1: number = 20;

    value2: number = 10.5;

    value3: number = 25;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["buttons-doc"]],standalone:!1,decls:27,vars:10,consts:[["incrementbuttonicon",""],["decrementbuttonicon",""],[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","stacked",1,"mb-2","block","font-bold"],["inputId","stacked","mode","currency","currency","USD",3,"ngModelChange","ngModel","showButtons"],["for","minmax-buttons",1,"mb-2","block","font-bold"],["mode","decimal","inputId","minmax-buttons",3,"ngModelChange","ngModel","showButtons","min","max"],["for","horizontal",1,"mb-2","block","font-bold"],["buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","mode","currency","currency","EUR",3,"ngModelChange","ngModel","showButtons","step"],["selector","input-number-buttons-demo",3,"code"],[1,"pi","pi-plus"],[1,"pi","pi-minus"]],template:function(r,i){if(r&1){let b=W();e(0,"app-docsectiontext")(1,"p"),n(2," Spinner buttons are enabled using the "),e(3,"i"),n(4,"showButtons"),t(),n(5," options and layout is defined with the "),e(6,"i"),n(7,"buttonLayout"),t(),n(8,'. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard. '),t()(),e(9,"p-fluid",2)(10,"div",3)(11,"label",4),n(12,"Stacked"),t(),e(13,"p-inputnumber",5),d("ngModelChange",function(h){return E(b),p(i.value1,h)||(i.value1=h),F(h)}),t()(),e(14,"div",3)(15,"label",6),n(16,"Min-Max Boundaries"),t(),e(17,"p-inputnumber",7),d("ngModelChange",function(h){return E(b),p(i.value2,h)||(i.value2=h),F(h)}),t()(),e(18,"div",3)(19,"label",8),n(20,"Horizontal with Step"),t(),e(21,"p-inputnumber",9),d("ngModelChange",function(h){return E(b),p(i.value3,h)||(i.value3=h),F(h)}),L(22,xe,1,0,"ng-template",null,0,N)(24,he,1,0,"ng-template",null,1,N),t()()(),c(26,"app-code",10)}r&2&&(a(13),u("ngModel",i.value1),m("showButtons",!0),a(4),u("ngModel",i.value2),m("showButtons",!0)("min",0)("max",100),a(4),u("ngModel",i.value3),m("showButtons",!0)("step",.25),a(5),m("code",i.code))},dependencies:[y,S,M,g,v,w],encapsulation:2})}return l})();var re=(()=>{class l{value1=1500;value2=2500;value3=4250;value4=5002;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" mode="currency"inputId="currency-germany"currency="EUR" locale="de-DE" />
<p-inputnumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN" />
<p-inputnumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-us">
            United States
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-germany">
            Germany
        </label>
        <p-inputnumber [(ngModel)]="value2" mode="currency" inputId="currency-germany" currency="EUR" locale="de-DE" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-india">
            India
        </label>
        <p-inputnumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-japan">
            Japan
        </label>
        <p-inputnumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-currency-demo',
    templateUrl: './input-number-currency-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberCurrencyDemo {
    value1: number = 1500;

    value2: number = 2500;

    value3: number = 4250;

    value4: number = 5002;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["currency-doc"]],standalone:!1,decls:30,vars:5,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","currency-us",1,"block","font-bold","mb-2"],["inputId","currency-us","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","currency-germany",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-germany","currency","EUR","locale","de-DE",3,"ngModelChange","ngModel"],["for","currency-india",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-india","currency","INR","currencyDisplay","code","locale","en-IN",3,"ngModelChange","ngModel"],["for","currency-japan",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-japan","currency","JPY","locale","jp-JP",3,"ngModelChange","ngModel"],["selector","input-number-currency-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2," Currency formatting is specified by setting the "),e(3,"i"),n(4,"mode"),t(),n(5," option to currency and "),e(6,"i"),n(7,"currency"),t(),n(8," property. In addition "),e(9,"i"),n(10,"currencyDisplay"),t(),n(11,' option allows how the currency is displayed, valid values are "symbol" (default) or "code". '),t()(),e(12,"p-fluid",0)(13,"div",1)(14,"label",2),n(15,"United States"),t(),e(16,"p-inputnumber",3),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),e(17,"div",1)(18,"label",4),n(19,"Germany"),t(),e(20,"p-inputnumber",5),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t()(),e(21,"div",1)(22,"label",6),n(23,"India"),t(),e(24,"p-inputnumber",7),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t()(),e(25,"div",1)(26,"label",8),n(27,"Japan"),t(),e(28,"p-inputnumber",9),d("ngModelChange",function(o){return p(i.value4,o)||(i.value4=o),o}),t()()(),c(29,"app-code",10)),r&2&&(a(16),u("ngModel",i.value1),a(4),u("ngModel",i.value2),a(4),u("ngModel",i.value3),a(4),u("ngModel",i.value4),a(),m("code",i.code))},dependencies:[y,S,M,g,v,w],encapsulation:2})}return l})();var ae=(()=>{class l{value1=50;code={basic:'<p-inputnumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1" />',html:`<div class="card flex justify-center">
    <p-inputnumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-disabled-demo',
    templateUrl: './input-number-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberDisabledDemo {
    value1: number = 50;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["inputId","integeronly","prefix","%",3,"ngModelChange","disabled","ngModel"],["selector","input-number-disabled-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"When "),e(3,"i"),n(4,"disabled"),t(),n(5," is present, the element cannot be edited and focused."),t()(),e(6,"div",0)(7,"p-inputnumber",1),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),c(8,"app-code",2)),r&2&&(a(7),m("disabled",!0),u("ngModel",i.value1),a(),m("code",i.code))},dependencies:[y,S,M,g,v],encapsulation:2})}return l})();var me=(()=>{class l{value1;code={basic:'<p-inputnumber variant="filled" [(ngModel)]="value1" />',html:`<div class="card flex justify-center">
    <p-inputnumber variant="filled" [(ngModel)]="value1" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-filled-demo',
    templateUrl: './input-number-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberFilledDemo {
    value1!: number;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","input-number-filled-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Specify the "),e(3,"i"),n(4,"variant"),t(),n(5," property as "),e(6,"i"),n(7,"filled"),t(),n(8," to display the component with a higher visual emphasis than the default "),e(9,"i"),n(10,"outlined"),t(),n(11," style."),t()(),e(12,"div",0)(13,"p-inputnumber",1),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),c(14,"app-code",2)),r&2&&(a(13),u("ngModel",i.value1),a(),m("code",i.code))},dependencies:[y,S,M,g,v],encapsulation:2})}return l})();var ue=(()=>{class l{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-inputnumber [(ngModel)]="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputnumber [(ngModel)]="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputnumber [(ngModel)]="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-inputnumber [(ngModel)]="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-inputnumber [(ngModel)]="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-inputnumber [(ngModel)]="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-number-float-label-demo',
    templateUrl: './input-number-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, FloatLabel]
})
export class InputNumberFloatLabelDemo {
    value1: number | undefined;

    value2: number | undefined;

    value3: number | undefined;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["float-label-doc"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-number-float-label-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2," A floating label appears on top of the input field when focused. Visit "),e(3,"a",0),n(4,"FloatLabel"),t(),n(5," documentation for more information. "),t()(),e(6,"div",1)(7,"p-floatlabel")(8,"p-inputnumber",2),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t(),e(9,"label",3),n(10,"Over Label"),t()(),e(11,"p-floatlabel",4)(12,"p-inputnumber",5),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t(),e(13,"label",6),n(14,"In Label"),t()(),e(15,"p-floatlabel",7)(16,"p-inputnumber",8),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t(),e(17,"label",9),n(18,"On Label"),t()()(),c(19,"app-code",10)),r&2&&(a(8),u("ngModel",i.value1),a(4),u("ngModel",i.value2),a(4),u("ngModel",i.value3),a(3),m("code",i.code))},dependencies:[y,S,M,T,g,v,$],encapsulation:2})}return l})();var pe=(()=>{class l{value;code={basic:`<p-iftalabel>
    <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" />
    <label for="price_input">Price</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" />
        <label for="price_input">Price</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-number-ifta-label-demo',
    templateUrl: './input-number-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumberModule, IftaLabelModule]
})
export class InputNumberIftaLabelDemo {
    value: number | undefined;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["ifta-label-doc"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","price_input","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","price_input"],["selector","input-number-ifta-label-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"IftaLabel is used to create infield top aligned labels. Visit "),e(3,"a",0),n(4,"IftaLabel"),t(),n(5," documentation for more information."),t()(),e(6,"div",1)(7,"p-iftalabel")(8,"p-inputnumber",2),d("ngModelChange",function(o){return p(i.value,o)||(i.value=o),o}),t(),e(9,"label",3),n(10,"Price"),t()()(),c(11,"app-code",4)),r&2&&(a(8),u("ngModel",i.value),a(3),m("code",i.code))},dependencies:[y,S,M,T,g,v,te],encapsulation:2})}return l})();var de=(()=>{class l{code={typescript:"import { InputNumberModule } from 'primeng/inputnumber';"};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["input-number-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,i){r&1&&c(0,"app-code",0),r&2&&m("code",i.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return l})();var ce=(()=>{class l{value;code={basic:'<p-inputnumber inputId="integeronly" class="ng-invalid ng-dirty" [(ngModel)]="value" placeholder="Amount" />',html:`<div class="card flex justify-center">
    <p-inputnumber inputId="integeronly" class="ng-invalid ng-dirty" [(ngModel)]="value" placeholder="Amount" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-invalid-demo',
    templateUrl: './input-number-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberInvalidDemo {
    value!: number;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["inputId","integeronly","placeholder","Amount",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-number-invalid-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Invalid state style is added using the "),e(3,"i"),n(4,"ng-invalid"),t(),n(5," and "),e(6,"i"),n(7,"ng-dirty"),t(),n(8," class to indicate a failed validation."),t()(),e(9,"div",0)(10,"p-inputnumber",1),d("ngModelChange",function(o){return p(i.value,o)||(i.value=o),o}),t()(),c(11,"app-code",2)),r&2&&(a(10),u("ngModel",i.value),a(),m("code",i.code))},dependencies:[y,S,M,g,v],encapsulation:2})}return l})();var se=(()=>{class l{value1=151351;value2=115744;value3=635524;value4=732762;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-user">
            User Locale
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-us">
            United States Locale
        </label>
        <p-inputnumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-german">
            German Locale
        </label>
        <p-inputnumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-indian">
            Indian Locale
        </label>
        <p-inputnumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-locale-demo',
    templateUrl: './input-number-locale-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberLocaleDemo {
    value1: number = 151351;

    value2: number = 115744;

    value3: number = 635524;

    value4: number = 732762;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["locale-doc"]],standalone:!1,decls:24,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","locale-user",1,"block","font-bold","mb-2"],["inputId","locale-user",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-us",1,"block","font-bold","mb-2"],["inputId","locale-us","mode","decimal","locale","en-US",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-german",1,"block","font-bold","mb-2"],["inputId","locale-german","mode","decimal","locale","de-DE",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-indian",1,"block","font-bold","mb-2"],["inputId","locale-indian","mode","decimal","locale","en-IN",3,"ngModelChange","ngModel","minFractionDigits"],["selector","input-number-locale-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Localization information such as grouping and decimal symbols are defined with the "),e(3,"i"),n(4,"locale"),t(),n(5," property which defaults to the user locale."),t()(),e(6,"p-fluid",0)(7,"div",1)(8,"label",2),n(9,"User Locale"),t(),e(10,"p-inputnumber",3),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),e(11,"div",1)(12,"label",4),n(13,"United States Locale"),t(),e(14,"p-inputnumber",5),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t()(),e(15,"div",1)(16,"label",6),n(17,"German Locale"),t(),e(18,"p-inputnumber",7),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t()(),e(19,"div",1)(20,"label",8),n(21,"Indian Locale"),t(),e(22,"p-inputnumber",9),d("ngModelChange",function(o){return p(i.value4,o)||(i.value4=o),o}),t()()(),c(23,"app-code",10)),r&2&&(a(10),u("ngModel",i.value1),m("minFractionDigits",2),a(4),u("ngModel",i.value2),m("minFractionDigits",2),a(4),u("ngModel",i.value3),m("minFractionDigits",2),a(4),u("ngModel",i.value4),m("minFractionDigits",2),a(),m("code",i.code))},dependencies:[y,S,M,g,v,w],encapsulation:2})}return l})();var fe=(()=>{class l{value1=42723;value2=58151;value3=2351.35;value4=50;code={basic:`<p-inputnumber inputId="integeronly" [(ngModel)]="value1" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false" />
<p-inputnumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5" />
<p-inputnumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="integeronly">Integer Only</label>
        <p-inputnumber inputId="integeronly" [(ngModel)]="value1" />
    </div>
    <div class="flex-auto">
        <label for="withoutgrouping">Without Grouping</label>
        <p-inputnumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false" />
    </div>
    <div class="flex-auto">
        <label for="minmaxfraction">Min-Max Fraction Digits</label>
        <p-inputnumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5" />
    </div>
    <div class="flex-auto">
        <label for="minmax">Min-Max Boundaries</label>
        <p-inputnumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-numerals-demo',
    templateUrl: './input-number-numerals-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberNumeralsDemo {
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["numerals-doc"]],standalone:!1,decls:24,vars:10,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","integeronly",1,"mb-2","font-bold","block"],["inputId","integeronly",3,"ngModelChange","ngModel"],["for","withoutgrouping",1,"mb-2","font-bold","block"],["mode","decimal","inputId","withoutgrouping",3,"ngModelChange","ngModel","useGrouping"],["for","minmaxfraction",1,"mb-2","font-bold","block"],["inputId","minmaxfraction","mode","decimal",3,"ngModelChange","ngModel","minFractionDigits","maxFractionDigits"],["for","minmax",1,"mb-2","font-bold","block"],["inputId","minmax","mode","decimal",3,"ngModelChange","ngModel","min","max"],["selector","input-number-numerals-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"InputNumber is used as a controlled input with "),e(3,"i"),n(4,"ngModel"),t(),n(5," property."),t()(),e(6,"p-fluid",0)(7,"div",1)(8,"label",2),n(9,"Integer Only"),t(),e(10,"p-inputnumber",3),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),e(11,"div",1)(12,"label",4),n(13,"Without Grouping"),t(),e(14,"p-inputnumber",5),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t()(),e(15,"div",1)(16,"label",6),n(17,"Min-Max Fraction Digits"),t(),e(18,"p-inputnumber",7),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t()(),e(19,"div",1)(20,"label",8),n(21,"Min-Max Boundaries"),t(),e(22,"p-inputnumber",9),d("ngModelChange",function(o){return p(i.value4,o)||(i.value4=o),o}),t()()(),c(23,"app-code",10)),r&2&&(a(10),u("ngModel",i.value1),a(4),u("ngModel",i.value2),m("useGrouping",!1),a(4),u("ngModel",i.value3),m("minFractionDigits",2)("maxFractionDigits",5),a(4),u("ngModel",i.value4),m("min",0)("max",100),a(),m("code",i.code))},dependencies:[y,S,M,g,v,w],encapsulation:2})}return l})();var be=(()=>{class l{value1=20;value2=50;value3=10;value4=20;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="mile" suffix=" mi" />
<p-inputnumber [(ngModel)]="value2" inputId="percent" prefix="%" />
<p-inputnumber [(ngModel)]="value3"inputId="expiry" prefix="Expires in " suffix=" days" />
<p-inputnumber [(ngModel)]="value4" prefix="\u2191 " inputId="temperature" suffix="\u2103" [min]="0" [max]="40" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="mile">
            Mile
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="mile" suffix=" mi" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="percent">
            Percent
        </label>
        <p-inputnumber [(ngModel)]="value2" inputId="percent" prefix="%" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="expiry">
            Expiry
        </label>
        <p-inputnumber [(ngModel)]="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="temperature">
            Temperature
        </label>
        <p-inputnumber [(ngModel)]="value4" prefix="\u2191 "inputId="temperature" suffix="\u2103" [min]="0" [max]="40" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-prefix-suffix-demo',
    templateUrl: './input-number-prefix-suffix-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberPrefixSuffixDemo {
    value1: number = 20;

    value2: number = 50;

    value3: number = 10;

    value4: number = 20;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["prefix-suffix-doc"]],standalone:!1,decls:27,vars:7,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","mile",1,"font-bold","block","mb-2"],["inputId","mile","suffix"," mi",3,"ngModelChange","ngModel"],["for","percent",1,"font-bold","block","mb-2"],["inputId","percent","prefix","%",3,"ngModelChange","ngModel"],["for","expiry",1,"font-bold","block","mb-2"],["inputId","expiry","prefix","Expires in ","suffix"," days",3,"ngModelChange","ngModel"],["for","temperature",1,"font-bold","block","mb-2"],["prefix","\u2191 ","inputId","temperature","suffix","\u2103",3,"ngModelChange","ngModel","min","max"],["selector","input-number-prefix-suffix-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Custom texts e.g. units can be placed before or after the input section with the "),e(3,"i"),n(4,"prefix"),t(),n(5," and "),e(6,"i"),n(7,"suffix"),t(),n(8," properties."),t()(),e(9,"p-fluid",0)(10,"div",1)(11,"label",2),n(12,"Mile"),t(),e(13,"p-inputnumber",3),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t()(),e(14,"div",1)(15,"label",4),n(16,"Percent"),t(),e(17,"p-inputnumber",5),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t()(),e(18,"div",1)(19,"label",6),n(20,"Expiry"),t(),e(21,"p-inputnumber",7),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t()(),e(22,"div",1)(23,"label",8),n(24,"Temperature"),t(),e(25,"p-inputnumber",9),d("ngModelChange",function(o){return p(i.value4,o)||(i.value4=o),o}),t()()(),c(26,"app-code",10)),r&2&&(a(13),u("ngModel",i.value1),a(4),u("ngModel",i.value2),a(4),u("ngModel",i.value3),a(4),u("ngModel",i.value4),m("min",0)("max",40),a(),m("code",i.code))},dependencies:[y,S,M,g,v,w],encapsulation:2})}return l})();var ge=(()=>{class l{formGroup;ngOnInit(){this.formGroup=new V({value:new O(1234)})}code={basic:`<form [formGroup]="formGroup">
    <p-inputnumber inputId="integeronly" formControlName="value" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-inputnumber inputId="integeronly" formControlName="value" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';

@Component({
    selector: 'input-number-reactive-forms-demo',
    templateUrl: './input-number-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputNumber],
})
export class InputNumberReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(1234)
        });
    }
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["inputId","integeronly","formControlName","value"],["selector","input-number-reactive-forms-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"InputNumber can also be used with reactive forms. In this case, the "),e(3,"i"),n(4,"formControlName"),t(),n(5," property is used to bind the component to a form control."),t()(),e(6,"div",0)(7,"form",1),c(8,"p-inputnumber",2),t()(),c(9,"app-code",3)),r&2&&(a(7),m("formGroup",i.formGroup),a(2),m("code",i.code))},dependencies:[J,y,j,H,Y,M,g,v],encapsulation:2})}return l})();var ve=(()=>{class l{value1;value2;value3;code={basic:`<p-inputnumber [(ngModel)]="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-inputnumber [(ngModel)]="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
    <p-inputnumber [(ngModel)]="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
    <p-inputnumber [(ngModel)]="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-sizes-demo',
    templateUrl: './input-number-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberSizesDemo {
    value1!: number;

    value2!: number;

    value3!: number;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["placeholder","Normal","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["size","large","placeholder","Large","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["selector","input-number-sizes-demo",3,"code"]],template:function(r,i){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"InputNumber provides "),e(3,"i"),n(4,"small"),t(),n(5," and "),e(6,"i"),n(7,"large"),t(),n(8," sizes as alternatives to the base."),t()(),e(9,"div",0)(10,"p-inputnumber",1),d("ngModelChange",function(o){return p(i.value1,o)||(i.value1=o),o}),t(),e(11,"p-inputnumber",2),d("ngModelChange",function(o){return p(i.value2,o)||(i.value2=o),o}),t(),e(12,"p-inputnumber",3),d("ngModelChange",function(o){return p(i.value3,o)||(i.value3=o),o}),t()(),c(13,"app-code",4)),r&2&&(a(10),u("ngModel",i.value1),a(),u("ngModel",i.value2),a(),u("ngModel",i.value3),a(),m("code",i.code))},dependencies:[y,S,M,g,v],encapsulation:2})}return l})();var Ce=()=>({width:"3rem"});function _e(l,k){l&1&&c(0,"span",5)}function Ie(l,k){l&1&&c(0,"span",6)}var ye=(()=>{class l{value1=50;code={basic:`<p-inputnumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" [inputStyle]="{ width: '3rem' }">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>`,html:`<div class="card flex justify-center">
    <p-inputnumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" [inputStyle]="{ width: '3rem' }">
        <ng-template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
        </ng-template>
        <ng-template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
        </ng-template>
    </p-inputnumber>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-vertical-demo',
    templateUrl: './input-number-vertical-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberVerticalDemo {
    value1: number = 50;
}`};static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["vertical-doc"]],standalone:!1,decls:16,vars:5,consts:[["incrementbuttonicon",""],["decrementbuttonicon",""],[1,"card","flex","justify-center"],["buttonLayout","vertical","spinnerMode","vertical","inputId","vertical",3,"ngModelChange","ngModel","showButtons","inputStyle"],["selector","input-number-vertical-demo",3,"code"],[1,"pi","pi-plus"],[1,"pi","pi-minus"]],template:function(r,i){if(r&1){let b=W();e(0,"app-docsectiontext")(1,"p"),n(2,"Buttons can also placed vertically by setting "),e(3,"i"),n(4,"buttonLayout"),t(),n(5," as "),e(6,"i"),n(7,"vertical"),t(),n(8,"."),t()(),e(9,"div",2)(10,"p-inputnumber",3),d("ngModelChange",function(h){return E(b),p(i.value1,h)||(i.value1=h),F(h)}),L(11,_e,1,0,"ng-template",null,0,N)(13,Ie,1,0,"ng-template",null,1,N),t()(),c(15,"app-code",4)}r&2&&(a(10),u("ngModel",i.value1),m("showButtons",!0)("inputStyle",U(4,Ce)),a(5),m("code",i.code))},dependencies:[y,S,M,g,v],encapsulation:2})}return l})();var Me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=z({type:l});static \u0275inj=A({imports:[G,K,q,Q,R,X,P,ee,ie,ne,P]})}return l})();var we=()=>["InputNumber"],Se=(()=>{class l{docs=[{id:"import",label:"Import",component:de},{id:"numerals",label:"Numerals",component:fe},{id:"reactive-forms",label:"Reactive Forms",component:ge},{id:"locale",label:"Locale",component:se},{id:"currency",label:"Currency",component:re},{id:"prefixsuffix",label:"Prefix & Suffix",component:be},{id:"buttons",label:"Buttons",component:le},{id:"vertical",label:"Vertical",component:ye},{id:"floatlabel",label:"Float Label",component:ue},{id:"iftalabel",label:"Ifta Label",component:pe},{id:"sizes",label:"Sizes",component:ve},{id:"filled",label:"Filled",component:me},{id:"invalid",label:"Invalid",component:ce},{id:"disabled",label:"Disabled",component:ae},{id:"accessibility",label:"Accessibility",component:oe}];static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputNumber Component","header","InputNumber","description","InputNumber is an input component to provide numerical input.","themeDocs","inputnumber",3,"docs","apiDocs"]],template:function(r,i){r&1&&c(0,"app-doc",0),r&2&&m("docs",i.docs)("apiDocs",U(2,we))},dependencies:[Me,Z],encapsulation:2})}return l})();var en=[{path:"",component:Se}];export{en as default};
