import{a as C,b as ce}from"./chunk-TZFZAFXE.js";import"./chunk-EHIVA7EC.js";import"./chunk-VHOAM5CB.js";import{a as ae,b as se}from"./chunk-YF7WV7YA.js";import{a as re,b as me}from"./chunk-C4X3ZIUF.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-UCH3V5DN.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as u,d as ne,e as O}from"./chunk-I6RUY6VJ.js";import{a as p,b as oe}from"./chunk-CIUCWEWU.js";import{e as b,f as H,g as J,i as Q,j as y,k as q,l as X,m as Z,s as $,t as ee}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as ie,ba as le}from"./chunk-DEL7GGHP.js";import{e as P,i as te}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{m as G,p as U,u as K}from"./chunk-O4W5DSIC.js";import{$b as A,Ab as c,Hb as F,Mb as B,O as W,Qa as r,Sb as z,Tb as j,Ub as V,X as N,Y as T,ac as e,bc as R,eb as d,fb as Y,fc as f,gc as g,hc as S,kb as I,lc as k,xb as a,yb as t,zb as i,zc as _}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var de=(()=>{class l{code={basic:`<span id="dd1">Options</span>
<p-multiselect ariaLabelledBy="dd1"/>

<p-multiselect ariaLabel="Options"/>`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["multi-select-accessibility-doc"]],standalone:!1,decls:268,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),i(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),i(),e(11," props. The multiselect component has a "),t(12,"i"),e(13,"combobox"),i(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),i(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," attributes. The relation between the combobox and the popup is created with "),t(21,"i"),e(22,"aria-controls"),i(),e(23," attribute that refers to the id of the popup listbox. "),i(),t(24,"p"),e(25,"The popup listbox uses "),t(26,"i"),e(27,"listbox"),i(),e(28," as the role with "),t(29,"i"),e(30,"aria-multiselectable"),i(),e(31," enabled. Each list item has an "),t(32,"i"),e(33,"option"),i(),e(34," role along with "),t(35,"i"),e(36,"aria-label"),i(),e(37,", "),t(38,"i"),e(39,"aria-selected"),i(),e(40," and "),t(41,"i"),e(42,"aria-disabled"),i(),e(43," attributes."),i(),t(44,"p"),e(45," Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the "),t(46,"i"),e(47,"selectAll"),i(),e(48," and "),t(49,"i"),e(50,"unselectAll"),i(),e(51," keys of the "),t(52,"i"),e(53,"aria"),i(),e(54," property from the "),t(55,"a",0),e(56,"locale"),i(),e(57," API. "),i(),t(58,"p"),e(59,"If filtering is enabled, "),t(60,"i"),e(61,"filterInputProps"),i(),e(62," can be defined to give "),t(63,"i"),e(64,"aria-*"),i(),e(65," props to the input element."),i(),t(66,"p"),e(67,"Close button uses "),t(68,"i"),e(69,"close"),i(),e(70," key of the "),t(71,"i"),e(72,"aria"),i(),e(73," property from the "),t(74,"a",0),e(75,"locale"),i(),e(76," API as the "),t(77,"i"),e(78,"aria-label"),i(),e(79," by default, this can be overriden with the "),t(80,"i"),e(81,"closeButtonProps"),i(),e(82,"."),i()(),c(83,"app-code",1),t(84,"h3"),e(85,"Closed State Keyboard Support"),i(),t(86,"div",2)(87,"table",3)(88,"thead")(89,"tr")(90,"th"),e(91,"Key"),i(),t(92,"th"),e(93,"Function"),i()()(),t(94,"tbody")(95,"tr")(96,"td")(97,"i"),e(98,"tab"),i()(),t(99,"td"),e(100,"Moves focus to the multiselect element."),i()(),t(101,"tr")(102,"td")(103,"i"),e(104,"space"),i()(),t(105,"td"),e(106,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(107,"tr")(108,"td")(109,"i"),e(110,"down arrow"),i()(),t(111,"td"),e(112,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(113,"tr")(114,"td")(115,"i"),e(116,"up arrow"),i()(),t(117,"td"),e(118,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()()()()(),t(119,"h3"),e(120,"Popup Keyboard Support"),i(),t(121,"div",2)(122,"table",3)(123,"thead")(124,"tr")(125,"th"),e(126,"Key"),i(),t(127,"th"),e(128,"Function"),i()()(),t(129,"tbody")(130,"tr")(131,"td")(132,"i"),e(133,"tab"),i()(),t(134,"td"),e(135,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),i()(),t(136,"tr")(137,"td")(138,"i"),e(139,"shift"),i(),e(140," + "),t(141,"i"),e(142,"tab"),i()(),t(143,"td"),e(144,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),i()(),t(145,"tr")(146,"td")(147,"i"),e(148,"enter"),i()(),t(149,"td"),e(150,"Toggles the selection state of the focused option."),i()(),t(151,"tr")(152,"td")(153,"i"),e(154,"space"),i()(),t(155,"td"),e(156,"Toggles the selection state of the focused option."),i()(),t(157,"tr")(158,"td")(159,"i"),e(160,"escape"),i()(),t(161,"td"),e(162,"Closes the popup, moves focus to the multiselect element."),i()(),t(163,"tr")(164,"td")(165,"i"),e(166,"down arrow"),i()(),t(167,"td"),e(168,"Moves focus to the next option, if there is none then visual focus does not change."),i()(),t(169,"tr")(170,"td")(171,"i"),e(172,"up arrow"),i()(),t(173,"td"),e(174,"Moves focus to the previous option, if there is none then visual focus does not change."),i()(),t(175,"tr")(176,"td")(177,"i"),e(178,"home"),i()(),t(179,"td"),e(180,"Moves focus to the first option."),i()(),t(181,"tr")(182,"td")(183,"i"),e(184,"end"),i()(),t(185,"td"),e(186,"Moves focus to the last option."),i()(),t(187,"tr")(188,"td")(189,"i"),e(190,"any printable character"),i()(),t(191,"td"),e(192,"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."),i()()()()(),t(193,"h3"),e(194,"Toggle All Checkbox Keyboard Support"),i(),t(195,"div",2)(196,"table",3)(197,"thead")(198,"tr")(199,"th"),e(200,"Key"),i(),t(201,"th"),e(202,"Function"),i()()(),t(203,"tbody")(204,"tr")(205,"td")(206,"i"),e(207,"space"),i()(),t(208,"td"),e(209,"Toggles the checked state."),i()(),t(210,"tr")(211,"td")(212,"i"),e(213,"escape"),i()(),t(214,"td"),e(215,"Closes the popup."),i()()()()(),t(216,"h3"),e(217,"Filter Input Keyboard Support"),i(),t(218,"div",2)(219,"table",3)(220,"thead")(221,"tr")(222,"th"),e(223,"Key"),i(),t(224,"th"),e(225,"Function"),i()()(),t(226,"tbody")(227,"tr")(228,"td")(229,"i"),e(230,"enter"),i()(),t(231,"td"),e(232,"Closes the popup and moves focus to the multiselect element."),i()(),t(233,"tr")(234,"td")(235,"i"),e(236,"escape"),i()(),t(237,"td"),e(238,"Closes the popup and moves focus to the multiselect element."),i()()()()(),t(239,"h3"),e(240,"Close Button Keyboard Support"),i(),t(241,"div",2)(242,"table",3)(243,"thead")(244,"tr")(245,"th"),e(246,"Key"),i(),t(247,"th"),e(248,"Function"),i()()(),t(249,"tbody")(250,"tr")(251,"td")(252,"i"),e(253,"enter"),i()(),t(254,"td"),e(255,"Closes the popup and moves focus to the multiselect element."),i()(),t(256,"tr")(257,"td")(258,"i"),e(259,"space"),i()(),t(260,"td"),e(261,"Closes the popup and moves focus to the multiselect element."),i()(),t(262,"tr")(263,"td")(264,"i"),e(265,"escape"),i()(),t(266,"td"),e(267,"Closes the popup and moves focus to the multiselect element."),i()()()()()()),n&2&&(r(83),a("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,u],encapsulation:2})}return l})();var pe=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-basic-demo',
    templateUrl: './multi-select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectBasicDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["basic-doc"]],standalone:!1,decls:42,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-basic-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," MultiSelect is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),i(),e(5," property along with an "),t(6,"i"),e(7,"options"),i(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),i(),e(11," and "),t(12,"i"),e(13,"optionValue"),i(),e(14," properties respectively. Default property name for the "),t(15,"i"),e(16,"optionLabel"),i(),e(17," is "),t(18,"i"),e(19,"label"),i(),e(20," and "),t(21,"i"),e(22,"value"),i(),e(23," for the "),t(24,"i"),e(25,"optionValue"),i(),e(26,". If "),t(27,"i"),e(28,"optionValue"),i(),e(29," is omitted and the object has no "),t(30,"i"),e(31,"value"),i(),e(32," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no "),t(33,"i"),e(34,"optionLabel"),i(),e(35," and "),t(36,"i"),e(37,"optionValue"),i(),e(38," would be necessary. "),i()(),t(39,"div",0)(40,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(41,"app-code",2)),n&2&&(r(40),a("options",o.cities),f("ngModel",o.selectedCities),a("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var ue=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-chips-demo',
    templateUrl: './multi-select-chips-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectChipsDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["chips-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["placeholder","Select Cities","optionLabel","name","display","chip","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel"],["selector","multi-select-chips-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Selected values are displayed as a comma separated list by default, setting "),t(3,"i"),e(4,"display"),i(),e(5," as "),t(6,"i"),e(7,"chip"),i(),e(8," displays them as chips."),i()(),t(9,"div",0)(10,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(11,"app-code",2)),n&2&&(r(10),a("options",o.cities),f("ngModel",o.selectedCities),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var fe=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-disabled-demo',
    templateUrl: './multi-select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectDisabledDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel","disabled"],["selector","multi-select-disabled-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),t(6,"div",0)(7,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(8,"app-code",2)),n&2&&(r(7),a("options",o.cities),f("ngModel",o.selectedCities),a("disabled",!0),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var ge=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" variant="filled" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" variant="filled" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-filled-demo',
    templateUrl: './multi-select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectFilledDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:4,consts:[[1,"card","flex","justify-center"],["variant","filled","optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-filled-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),i(),e(5," property as "),t(6,"i"),e(7,"filled"),i(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),i(),e(11," style."),i()(),t(12,"div",0)(13,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(14,"app-code",2)),n&2&&(r(13),a("options",o.cities),f("ngModel",o.selectedCities),a("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var Se=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-filter-demo',
    templateUrl: './multi-select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectFilterDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["filter-doc"]],standalone:!1,decls:9,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel","filter","maxSelectedLabels"],["selector","multi-select-filter-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(8,"app-code",2)),n&2&&(r(7),a("options",o.cities),f("ngModel",o.selectedCities),a("filter",!0)("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var be=(()=>{class l{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-floatlabel class="w-full md:w-80">
    <p-multiselect id="over_label" [(ngModel)]="value1" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-multiselect id="in_label" [(ngModel)]="value2" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-multiselect id="on_label" [(ngModel)]="value3" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-80">
        <p-multiselect id="over_label" [(ngModel)]="value1" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="in">
        <p-multiselect id="in_label" [(ngModel)]="value2" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="on">
        <p-multiselect id="on_label" [(ngModel)]="value3" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" styleClass="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabel } from 'primeng/floatlabel';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-floatlabel-demo',
    templateUrl: './multi-select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, FloatLabel]
})
export class MultiSelectFloatlabelDemo implements OnInit {
    cities!: City[];

    value1!: City[];

    value2!: City[];

    value3!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["floatlabel-doc"]],standalone:!1,decls:20,vars:10,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-80"],["id","over_label","optionLabel","name","filter","","styleClass","w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","over_label"],["variant","in",1,"w-full","md:w-80"],["id","in_label","optionLabel","name","filter","","styleClass","w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","in_label"],["variant","on",1,"w-full","md:w-80"],["id","on_label","optionLabel","name","filter","","styleClass","w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","on_label"],["selector","multi-select-floatlabel-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),e(4,"FloatLabel"),i(),e(5," documentation for more information. "),i()(),t(6,"div",1)(7,"p-floatlabel",2)(8,"p-multiselect",3),S("ngModelChange",function(s){return g(o.value1,s)||(o.value1=s),s}),i(),t(9,"label",4),e(10,"Over Label"),i()(),t(11,"p-floatlabel",5)(12,"p-multiselect",6),S("ngModelChange",function(s){return g(o.value2,s)||(o.value2=s),s}),i(),t(13,"label",7),e(14,"In Label"),i()(),t(15,"p-floatlabel",8)(16,"p-multiselect",9),S("ngModelChange",function(s){return g(o.value3,s)||(o.value3=s),s}),i(),t(17,"label",10),e(18,"On Label"),i()()(),c(19,"app-code",11)),n&2&&(r(8),f("ngModel",o.value1),a("options",o.cities)("maxSelectedLabels",3),r(4),f("ngModel",o.value2),a("options",o.cities)("maxSelectedLabels",3),r(4),f("ngModel",o.value3),a("options",o.cities)("maxSelectedLabels",3),r(3),a("code",o.code))},dependencies:[p,P,C,b,y,u,ae],encapsulation:2})}return l})();function Ne(l,E){if(l&1&&(t(0,"div",4),c(1,"img",5),t(2,"span"),e(3),i()()),l&2){let m=E.$implicit;r(),A("mr-2 flag flag-"+m.value),r(2),R(m.label)}}var Ce=(()=>{class l{groupedCities;selectedCities;constructor(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}code={basic:`<p-multiselect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip" styleClass="w-full md:w-80">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip" styleClass="w-full md:w-80">
        <ng-template let-group #group>
            <div class="flex items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-group-demo',
    templateUrl: './multi-select-group-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCities!: City[];

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["group-doc"]],standalone:!1,decls:8,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Select Cities","scrollHeight","250px","display","chip","styleClass","w-full md:w-80",3,"ngModelChange","options","group","ngModel"],["selector","multi-select-group-demo",3,"code"],[1,"flex","items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,o){if(n&1){let h=F();t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),i()(),t(3,"div",1)(4,"p-multiselect",2),S("ngModelChange",function(w){return N(h),g(o.selectedCities,w)||(o.selectedCities=w),T(w)}),I(5,Ne,4,3,"ng-template",null,0,_),i()(),c(7,"app-code",3)}n&2&&(r(4),a("options",o.groupedCities)("group",!0),f("ngModel",o.selectedCities),r(3),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var ye=(()=>{class l{cities;selectedCities;code={basic:`<p-iftalabel class="w-full md:w-80">
    <p-multiselect [(ngModel)]="selectedCities" inputId="ms_cities" [options]="cities" optionLabel="name" [filter]="true" [maxSelectedLabels]="3" styleClass="w-full" />
    <label for="ms_cities">Cities</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-80">
        <p-multiselect [(ngModel)]="selectedCities" inputId="ms_cities" [options]="cities" optionLabel="name" [filter]="true" [maxSelectedLabels]="3" styleClass="w-full" />
        <label for="ms_cities">Cities</label>
    </p-iftalabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { IftaLabelModule } from 'primeng/iftalabel';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-iftalabel-demo',
    templateUrl: './multi-select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, IftaLabelModule]
})
export class MultiSelectIftalabelDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["iftalabel-doc"]],standalone:!1,decls:12,vars:5,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-80"],["inputId","ms_cities","optionLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options","filter","maxSelectedLabels"],["for","ms_cities"],["selector","multi-select-iftalabel-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),i(),e(5," documentation for more information."),i()(),t(6,"div",1)(7,"p-iftalabel",2)(8,"p-multiselect",3),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i(),t(9,"label",4),e(10,"Cities"),i()()(),c(11,"app-code",5)),n&2&&(r(8),f("ngModel",o.selectedCities),a("options",o.cities)("filter",!0)("maxSelectedLabels",3),r(3),a("code",o.code))},dependencies:[p,P,C,b,y,u,re],encapsulation:2})}return l})();var he=(()=>{class l{code={typescript:"import { MultiSelectModule } from 'primeng/multiselect';"};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["multi-select-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,o){n&1&&c(0,"app-code",0),n&2&&a("code",o.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return l})();var ve=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-invalid-demo',
    templateUrl: './multi-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectInvalidDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",1,"ng-dirty","ng-invalid",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-invalid-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),t(9,"div",0)(10,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(11,"app-code",2)),n&2&&(r(10),a("options",o.cities),f("ngModel",o.selectedCities),a("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var xe=(()=>{class l{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [loading]="true" optionLabel="name" placeholder="Loading..." styleClass="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [loading]="true" optionLabel="name" placeholder="Loading..." styleClass="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-loading-state-demo',
    templateUrl: './multi-select-loading-state-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectLoadingStateDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["loading-state-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Loading...","styleClass","w-full md:w-80",3,"ngModelChange","options","ngModel","loading"],["selector","multi-select-loading-state-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Loading state can be used "),t(3,"i"),e(4,"loading"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-multiselect",1),S("ngModelChange",function(s){return g(o.selectedCities,s)||(o.selectedCities=s),s}),i()(),c(8,"app-code",2)),n&2&&(r(7),a("options",o.cities),f("ngModel",o.selectedCities),a("loading",!0),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();var Me=(()=>{class l{cities;formGroup;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new J({selectedCities:new Q([{name:"Istanbul",code:"IST"}])})}code={basic:`<form [formGroup]="formGroup" class="card flex justify-center">
    <p-multiselect [options]="cities" formControlName="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" styleClass="w-full md:w-80" />
</form>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-reactive-forms-demo',
    templateUrl: './multi-select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, MultiSelectModule]
})
export class MultiSelectReactiveFormsDemo implements OnInit {
    cities!: City[];

    formGroup!: FormGroup;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.formGroup = new FormGroup({
            selectedCities: new FormControl<City[] | null>([{ name: 'Istanbul', code: 'IST' }])
        });
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["reactive-forms-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center",3,"formGroup"],["formControlName","selectedCities","optionLabel","name","placeholder","Select Cities","styleClass","w-full md:w-80",3,"options","maxSelectedLabels"],["selector","multi-select-reactive-forms-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),t(6,"form",0),c(7,"p-multiselect",1),i(),c(8,"app-code",2)),n&2&&(r(6),a("formGroup",o.formGroup),r(),a("options",o.cities)("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,q,b,H,Z,X,u],encapsulation:2})}return l})();var we=(()=>{class l{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-multiselect [(ngModel)]="value1" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" size="small" placeholder="Small" />
<p-multiselect [(ngModel)]="value2" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" placeholder="Normal" />
<p-multiselect [(ngModel)]="value3" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" size="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-multiselect [(ngModel)]="value1" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" size="small" placeholder="Small" />
    <p-multiselect [(ngModel)]="value2" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" placeholder="Normal" />
    <p-multiselect [(ngModel)]="value3" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" styleClass="w-full md:w-80" size="large" placeholder="Large" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-sizes-demo',
    templateUrl: './multi-select-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectSizesDemo implements OnInit {

    cities!: City[];

    value1: any[];

    value2: any[];

    value3: any[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:10,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["optionLabel","name","styleClass","w-full md:w-80","size","small","placeholder","Small",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["optionLabel","name","styleClass","w-full md:w-80","placeholder","Normal",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["optionLabel","name","styleClass","w-full md:w-80","size","large","placeholder","Large",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["selector","multi-select-sizes-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect provides "),t(3,"i"),e(4,"small"),i(),e(5," and "),t(6,"i"),e(7,"large"),i(),e(8," sizes as alternatives to the base."),i()(),t(9,"div",0)(10,"p-multiselect",1),S("ngModelChange",function(s){return g(o.value1,s)||(o.value1=s),s}),i(),t(11,"p-multiselect",2),S("ngModelChange",function(s){return g(o.value2,s)||(o.value2=s),s}),i(),t(12,"p-multiselect",3),S("ngModelChange",function(s){return g(o.value3,s)||(o.value3=s),s}),i()(),c(13,"app-code",4)),n&2&&(r(10),f("ngModel",o.value1),a("options",o.cities)("maxSelectedLabels",3),r(),f("ngModel",o.value2),a("options",o.cities)("maxSelectedLabels",3),r(),f("ngModel",o.value3),a("options",o.cities)("maxSelectedLabels",3),r(),a("code",o.code))},dependencies:[p,C,b,y,u],encapsulation:2})}return l})();function Te(l,E){if(l&1&&(t(0,"div",8),c(1,"img",9),t(2,"div"),e(3),i()()),l&2){let m=E.$implicit;r(),A("flag flag-"+m.code.toLowerCase()),r(2),R(m.name)}}function Fe(l,E){l&1&&c(0,"i",10)}function Ae(l,E){l&1&&c(0,"i",11)}function Re(l,E){l&1&&(t(0,"div",12),e(1,"Available Countries"),i())}function ke(l,E){l&1&&(t(0,"div",13),c(1,"p-button",14)(2,"p-button",15),i())}var Le=(()=>{class l{countries;selectedCountries;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-multiselect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name" styleClass="w-full md:w-80" display="chip">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #filtericon>
        <i class="pi pi-map-marker"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
        </div>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name" styleClass="w-full md:w-80" display="chip">
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #dropdownicon>
            <i class="pi pi-map"></i>
        </ng-template>
        <ng-template #filtericon>
            <i class="pi pi-map-marker"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="p-3 flex justify-between">
                <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
            </div>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'multi-select-template-demo',
    templateUrl: './multi-select-template-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, ButtonModule]
})
export class MultiSelectTemplateDemo implements OnInit {
    countries!: Country[];

    selectedCountries!: Country[];

    constructor() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["template-doc"]],standalone:!1,decls:19,vars:3,consts:[["item",""],["dropdownicon",""],["filtericon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["placeholder","Select Countries","optionLabel","name","styleClass","w-full md:w-80","display","chip",3,"ngModelChange","options","ngModel"],["selector","multi-select-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-map"],[1,"pi","pi-map-marker"],[1,"font-medium","px-3","py-2"],[1,"p-3","flex","justify-between"],["label","Add New","severity","secondary","text","","size","small","icon","pi pi-plus"],["label","Remove All","severity","danger","text","","size","small","icon","pi pi-times"]],template:function(n,o){if(n&1){let h=F();t(0,"app-docsectiontext")(1,"p"),e(2,"Available options and the selected options support templating with "),t(3,"i"),e(4,"pTemplate"),i(),e(5," properties respectively. In addition, header, footer and filter sections can be templated as well."),i()(),t(6,"div",5)(7,"p-multiselect",6),S("ngModelChange",function(w){return N(h),g(o.selectedCountries,w)||(o.selectedCountries=w),T(w)}),I(8,Te,4,3,"ng-template",null,0,_)(10,Fe,1,0,"ng-template",null,1,_)(12,Ae,1,0,"ng-template",null,2,_)(14,Re,2,0,"ng-template",null,3,_)(16,ke,3,0,"ng-template",null,4,_),i()(),c(18,"app-code",7)}n&2&&(r(7),a("options",o.countries),f("ngModel",o.selectedCountries),r(11),a("code",o.code))},dependencies:[p,C,b,y,u,ie],encapsulation:2})}return l})();var Pe=["ms"],Oe=()=>({color:"var(--text-color)"});function We(l,E){l&1&&c(0,"i",7)}function Ye(l,E){l&1&&c(0,"i",8),l&2&&a("ngStyle",k(1,Oe))}function Be(l,E){if(l&1&&I(0,We,1,0,"i",5)(1,Ye,1,2,"i",6),l&2){let m=E.checked,n=E.partialSelected;a("ngIf",m),r(),a("ngIf",n)}}var De=(()=>{class l{ms;items=Array.from({length:1e5},(m,n)=>({label:`Item #${n}`,value:n}));selectedItems;selectAll=!1;onSelectAllChange(m){this.selectedItems=m.checked?[...this.ms.visibleOptions()]:[],this.selectAll=m.checked}code={basic:`<p-multiselect [options]="items" [showToggleAll]="true" [selectAll]="selectAll" [(ngModel)]="selectedItems" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="43" class="multiselect-custom-virtual-scroll" placeholder="Select Cities" (onSelectAllChange)="onSelectAllChange($event)" [maxSelectedLabels]="3" styleClass="w-full md:w-80" #ms>
    <ng-template #headercheckboxicon let-allSelected let-partialSelected="partialSelected">
        <i class="pi pi-check" *ngIf="allSelected"></i>
        <i class="pi pi-minus" *ngIf="partialSelected" [ngStyle]="{ color: 'var(--text-color)' }"></i>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="items" [showToggleAll]="true" [selectAll]="selectAll" [(ngModel)]="selectedItems" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="43" class="multiselect-custom-virtual-scroll" placeholder="Select Cities" (onSelectAllChange)="onSelectAllChange($event)" [maxSelectedLabels]="3" styleClass="w-full md:w-80" #ms>
        <ng-template #headercheckboxicon let-allSelected let-partialSelected="partialSelected">
            <i class="pi pi-check" *ngIf="allSelected"></i>
            <i class="pi pi-minus" *ngIf="partialSelected" [ngStyle]="{ color: 'var(--text-color)' }"></i>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelect } from 'primeng/multiselect';

@Component({
    selector: 'multi-select-virtual-scroll-demo',
    templateUrl: './multi-select-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectVirtualScrollDemo {
    @ViewChild('ms') ms: MultiSelect;

    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll: boolean = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.ms.visibleOptions()] : [];
        this.selectAll = event.checked;
    }

}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["virtual-scroll-doc"]],viewQuery:function(n,o){if(n&1&&z(Pe,5),n&2){let h;j(h=V())&&(o.ms=h.first)}},standalone:!1,decls:15,vars:8,consts:[["ms",""],["headercheckboxicon",""],[1,"card","flex","justify-center"],["optionLabel","label","placeholder","Select Cities","styleClass","w-full md:w-80",1,"multiselect-custom-virtual-scroll",3,"ngModelChange","onSelectAllChange","options","showToggleAll","selectAll","ngModel","virtualScroll","virtualScrollItemSize","maxSelectedLabels"],["selector","multi-select-virtual-scroll-demo",3,"code"],["class","pi pi-check",4,"ngIf"],["class","pi pi-minus",3,"ngStyle",4,"ngIf"],[1,"pi","pi-check"],[1,"pi","pi-minus",3,"ngStyle"]],template:function(n,o){if(n&1){let h=F();t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),i(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," to specify the height of an item. "),i()(),t(9,"div",2)(10,"p-multiselect",3,0),S("ngModelChange",function(w){return N(h),g(o.selectedItems,w)||(o.selectedItems=w),T(w)}),B("onSelectAllChange",function(w){return o.onSelectAllChange(w)}),I(12,Be,2,2,"ng-template",null,1,_),i()(),c(14,"app-code",4)}n&2&&(r(10),a("options",o.items)("showToggleAll",!0)("selectAll",o.selectAll),f("ngModel",o.selectedItems),a("virtualScroll",!0)("virtualScrollItemSize",43)("maxSelectedLabels",3),r(4),a("code",o.code))},dependencies:[G,U,p,C,b,y,u],encapsulation:2})}return l})();var Ee=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=Y({type:l});static \u0275inj=W({imports:[K,oe,te,ce,$,ee,O,se,me,le,O]})}return l})();var ze=()=>["MultiSelect"],_e=(()=>{class l{docs=[{id:"import",label:"Import",component:he},{id:"basic",label:"Basic",component:pe},{id:"reactive-forms",label:"Reactive Forms",component:Me},{id:"chips",label:"Chips",component:ue},{id:"group",label:"Group",component:Ce},{id:"template",label:"Template",component:Le},{id:"filter",label:"Filter",component:Se},{id:"loadingstate",label:"Loading State",component:xe},{id:"virtualscroll",label:"VirtualScroll",component:De},{id:"floatlabel",label:"Float Label",component:be},{id:"iftalabel",label:"Ifta Label",component:ye},{id:"sizes",label:"Sizes",component:we},{id:"filled",label:"Filled",component:ge},{id:"invalid",label:"Invalid",component:ve},{id:"disabled",label:"Disabled",component:fe},{id:"accessibility",label:"Accessibility",component:de}];static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular MultiSelect Component","header","MultiSelect","description","MultiSelect is used to select multiple items from a collection.","themeDocs","multiselect",3,"docs","apiDocs"]],template:function(n,o){n&1&&c(0,"app-doc",0),n&2&&a("docs",o.docs)("apiDocs",k(2,ze))},dependencies:[Ee,ne],encapsulation:2})}return l})();var hi=[{path:"",component:_e}];export{hi as default};
