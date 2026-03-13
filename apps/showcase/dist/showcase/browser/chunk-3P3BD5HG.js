import{e as f}from"./chunk-F4N6BDYB.js";import"./chunk-EHIVA7EC.js";import"./chunk-VHOAM5CB.js";import"./chunk-GSPHHRWT.js";import{a as u,d as X,e as R}from"./chunk-I6RUY6VJ.js";import{a as p,b as Q}from"./chunk-CIUCWEWU.js";import{e as g,f as B,g as j,i as V,j as h,k as U,l as K,m as z,s as H,t as J}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as q}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as W}from"./chunk-O4W5DSIC.js";import{$b as N,Ab as c,Hb as _,Mb as Y,O,Qa as s,X as E,Y as I,ac as e,bc as T,eb as d,fb as P,fc as b,gc as x,hc as y,kb as k,lc as G,xb as a,yb as t,zb as o,zc as F}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var Z=(()=>{class i{code={basic:`<span id="lb">Options</span>
<p-listbox ariaLabelledBy="lb"/>

<p-listbox ariaLabel="City"/>`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["listbox-accessibility-doc"]],standalone:!1,decls:141,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," Value to describe the component can be provided "),t(6,"i"),e(7,"ariaLabelledBy"),o(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),o(),e(11," props. The list element has a "),t(12,"i"),e(13,"listbox"),o(),e(14," role with the "),t(15,"i"),e(16,"aria-multiselectable"),o(),e(17," attribute that sets to true when multiple selection is enabled. Each list item has an "),t(18,"i"),e(19,"option"),o(),e(20," role with "),t(21,"i"),e(22,"aria-selected"),o(),e(23," and "),t(24,"i"),e(25,"aria-disabled"),o(),e(26," as their attributes. "),o()(),c(27,"app-code",0),t(28,"h3"),e(29,"Keyboard Support"),o(),t(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e(35,"Key"),o(),t(36,"th"),e(37,"Function"),o()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"i"),e(42,"tab"),o()(),t(43,"td"),e(44,"Moves focus to the first selected option, if there is none then first option receives the focus."),o()(),t(45,"tr")(46,"td")(47,"i"),e(48,"up arrow"),o()(),t(49,"td"),e(50,"Moves focus to the previous option."),o()(),t(51,"tr")(52,"td")(53,"i"),e(54,"down arrow"),o()(),t(55,"td"),e(56,"Moves focus to the next option."),o()(),t(57,"tr")(58,"td")(59,"i"),e(60,"enter"),o()(),t(61,"td"),e(62,"Toggles the selected state of the focused option."),o()(),t(63,"tr")(64,"td")(65,"i"),e(66,"space"),o()(),t(67,"td"),e(68,"Toggles the selected state of the focused option."),o()(),t(69,"tr")(70,"td")(71,"i"),e(72,"home"),o()(),t(73,"td"),e(74,"Moves focus to the first option."),o()(),t(75,"tr")(76,"td")(77,"i"),e(78,"end"),o()(),t(79,"td"),e(80,"Moves focus to the last option."),o()(),t(81,"tr")(82,"td")(83,"i"),e(84,"shift"),o(),e(85," + "),t(86,"i"),e(87,"down arrow"),o()(),t(88,"td"),e(89,"Moves focus to the next option and toggles the selection state."),o()(),t(90,"tr")(91,"td")(92,"i"),e(93,"shift"),o(),e(94," + "),t(95,"i"),e(96,"up arrow"),o()(),t(97,"td"),e(98,"Moves focus to the previous option and toggles the selection state."),o()(),t(99,"tr")(100,"td")(101,"i"),e(102,"shift"),o(),e(103," + "),t(104,"i"),e(105,"space"),o()(),t(106,"td"),e(107,"Selects the items between the most recently selected option and the focused option."),o()(),t(108,"tr")(109,"td")(110,"i"),e(111,"control"),o(),e(112," + "),t(113,"i"),e(114,"shift"),o(),e(115," + "),t(116,"i"),e(117,"home"),o()(),t(118,"td"),e(119,"Selects the focused options and all the options up to the first one."),o()(),t(120,"tr")(121,"td")(122,"i"),e(123,"control"),o(),e(124," + "),t(125,"i"),e(126,"shift"),o(),e(127," + "),t(128,"i"),e(129,"end"),o()(),t(130,"td"),e(131,"Selects the focused options and all the options down to the last one."),o()(),t(132,"tr")(133,"td")(134,"i"),e(135,"control"),o(),e(136," + "),t(137,"i"),e(138,"a"),o()(),t(139,"td"),e(140,"Selects all options."),o()()()()()()),n&2&&(s(27),a("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,u],encapsulation:2})}return i})();var $=(()=>{class i{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-basic-demo',
    templateUrl: './listbox-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxBasicDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["basic-doc"]],standalone:!1,decls:42,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","listbox-basic-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Listbox is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),o(),e(5," property along with an "),t(6,"i"),e(7,"options"),o(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),o(),e(11," and "),t(12,"i"),e(13,"optionValue"),o(),e(14," properties respectively. Default property name for the "),t(15,"i"),e(16,"optionLabel"),o(),e(17," is "),t(18,"i"),e(19,"label"),o(),e(20," and "),t(21,"i"),e(22,"value"),o(),e(23," for the "),t(24,"i"),e(25,"optionValue"),o(),e(26,". If "),t(27,"i"),e(28,"optionValue"),o(),e(29," is omitted and the object has no "),t(30,"i"),e(31,"value"),o(),e(32," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no "),t(33,"i"),e(34,"optionLabel"),o(),e(35," and "),t(36,"i"),e(37,"optionValue"),o(),e(38," would be necessary. "),o()(),t(39,"div",0)(40,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(41,"app-code",2)),n&2&&(s(40),a("options",l.cities),b("ngModel",l.selectedCity),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var ee=(()=>{class i{cities;selectedCity;code={basic:'<p-listbox [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" [checkmark]="true" [highlightOnSelect]="false" class="w-full md:w-56"/>',html:`<div class="card flex justify-center">
       <p-listbox [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" [checkmark]="true" [highlightOnSelect]="false" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-checkmark-demo',
    templateUrl: './listbox-checkmark-demo.html',
    standalone: true,
    imports: [FormsModule, ListboxModule]
})
export class ListboxCheckmarkDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["checkmark-doc"]],standalone:!1,decls:6,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options","checkmark","highlightOnSelect"],["selector","listbox-checkmark-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"An alternative way to highlight the selected option is displaying a checkmark instead."),o()(),t(3,"div",0)(4,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(5,"app-code",2)),n&2&&(s(4),b("ngModel",l.selectedCity),a("options",l.cities)("checkmark",!0)("highlightOnSelect",!1),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var te=(()=>{class i{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-disabled-demo',
    templateUrl: './listbox-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxDisabledDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","disabled"],["selector","listbox-disabled-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),o(),e(5," is present, the element cannot be edited and focused."),o()(),t(6,"div",0)(7,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),b("ngModel",l.selectedCity),a("disabled",!0),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var oe=(()=>{class i{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [filter]="true" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-filter-demo',
    templateUrl: './listbox-filter-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxFilterDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["filter-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","filter"],["selector","listbox-filter-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"ListBox provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),b("ngModel",l.selectedCity),a("filter",!0),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();function ue(i,A){if(i&1&&(t(0,"div",4),c(1,"img",5),t(2,"span"),e(3),o()()),i&2){let r=A.$implicit;s(),N("mr-2 flag flag-"+r.value),s(2),T(r.label)}}var ie=(()=>{class i{groupedCities;selectedCountry;constructor(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}code={basic:`<p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-listbox>`,html:`<div class="card flex justify-center">
    <p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" class="w-full md:w-56">
        <ng-template let-group #group>
            <div class="flex items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-listbox>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-group-demo',
    templateUrl: './listbox-group-demo.html',
    standalone: true,
    imports: [FormsModule, ListboxModule]
})
export class ListboxGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCountry!: Country;

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
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["group-doc"]],standalone:!1,decls:8,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],[1,"w-full","md:w-56",3,"ngModelChange","options","group","ngModel"],["selector","listbox-group-demo",3,"code"],[1,"flex","items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,l){if(n&1){let S=_();t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),o()(),t(3,"div",1)(4,"p-listbox",2),y("ngModelChange",function(L){return E(S),x(l.selectedCountry,L)||(l.selectedCountry=L),I(L)}),k(5,ue,4,3,"ng-template",null,0,F),o()(),c(7,"app-code",3)}n&2&&(s(4),a("options",l.groupedCities)("group",!0),b("ngModel",l.selectedCountry),s(3),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var ne=(()=>{class i{code={typescript:"import { ListboxModule } from 'primeng/listbox';"};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["listbox-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&c(0,"app-code",0),n&2&&a("code",l.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return i})();var le=(()=>{class i{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="ng-invalid ng-dirty w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" class="ng-invalid ng-dirty w-full md:w-56" />
</div>`,typescript:`import { Component, ngOnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-invalid-demo',
    templateUrl: './listbox-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxInvalidDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["listbox-invalid-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"ng-invalid","ng-dirty","w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","listbox-invalid-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),o(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),o(),e(8," class to indicate a failed validation."),o()(),t(9,"div",0)(10,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(11,"app-code",2)),n&2&&(s(10),a("options",l.cities),b("ngModel",l.selectedCity),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var ae=(()=>{class i{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true" [metaKeySelection]="false" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true" [metaKeySelection]="false" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-multiple-demo',
    templateUrl: './listbox-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxMultipleDemo implements OnInit {
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
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["multiple-doc"]],standalone:!1,decls:12,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","multiple","metaKeySelection"],["selector","listbox-multiple-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," ListBox allows choosing a single item by default, enable "),t(3,"i"),e(4,"multiple"),o(),e(5," property to choose more than one. When the optional "),t(6,"i"),e(7,"metaKeySelection"),o(),e(8," is present, behavior is changed in a way that selecting a new item requires meta key to be present. "),o()(),t(9,"div",0)(10,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCities,m)||(l.selectedCities=m),m}),o()(),c(11,"app-code",2)),n&2&&(s(10),a("options",l.cities),b("ngModel",l.selectedCities),a("multiple",!0)("metaKeySelection",!1),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var re=(()=>{class i{cities;formGroup;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new j({selectedCity:new V(null)})}code={basic:`<form [formGroup]="formGroup" class="card flex justify-center">
    <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" class="w-full md:w-56" />
</form>`,html:`<form [formGroup]="formGroup" class="card flex justify-center">
    <p-listbox [options]="cities" formControlName="selectedCity" optionLabel="name" class="w-full md:w-56" />
</form>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-reactive-forms-demo',
    templateUrl: './listbox-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Listbox]
})
export class ListboxReactiveFormsDemo implements OnInit {
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
            selectedCity: new FormControl<City | null>(null)
        });
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["reactive-forms-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center",3,"formGroup"],["formControlName","selectedCity","optionLabel","name",1,"w-full","md:w-56",3,"options"],["selector","listbox-reactive-forms-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Listbox can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),o(),e(5," property is used to bind the component to a form control."),o()(),t(6,"form",0),c(7,"p-listbox",1),o(),c(8,"app-code",2)),n&2&&(s(6),a("formGroup",l.formGroup),s(),a("options",l.cities),s(),a("code",l.code))},dependencies:[p,f,U,g,B,z,K,u],encapsulation:2})}return i})();function fe(i,A){if(i&1&&(t(0,"div",4),c(1,"img",5),t(2,"div"),e(3),o()()),i&2){let r=A.$implicit;s(),N("flag flag-"+r.code.toLowerCase()),s(2),T(r.name)}}var se=(()=>{class i{countries;selectedCountry;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" class="w-full md:w-56">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-listbox>`,html:`<div class="card flex justify-center">
    <p-listbox [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" class="w-full md:w-56">
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-listbox>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-template-demo',
    templateUrl: './listbox-template-demo.html',
    standalone: true,
    imports: [FormsModule, ListboxModule]
})
export class ListboxTemplateDemo implements OnInit {
    countries!: Country[];

    selectedCountry!: Country;

    ngOnInit() {
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
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["template-doc"]],standalone:!1,decls:11,vars:3,consts:[["item",""],[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","listbox-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(n,l){if(n&1){let S=_();t(0,"app-docsectiontext")(1,"p"),e(2,"Custom content for an option is displayed with the "),t(3,"i"),e(4,"pTemplate"),o(),e(5," property that takes an option as a parameter."),o()(),t(6,"div",1)(7,"p-listbox",2),y("ngModelChange",function(L){return E(S),x(l.selectedCountry,L)||(l.selectedCountry=L),I(L)}),k(8,fe,4,3,"ng-template",null,0,F),o()(),c(10,"app-code",3)}n&2&&(s(7),a("options",l.countries),b("ngModel",l.selectedCountry),s(3),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var me=(()=>{class i{items=Array.from({length:1e5},(r,n)=>({label:`Item #${n}`,value:n}));selectedItems;selectAll=!1;onSelectAllChange(r){this.selectedItems=r.checked?[...this.items]:[],this.selectAll=r.checked}onChange(r){let{value:n}=r;n&&(this.selectAll=n.length===this.items.length)}code={basic:'<p-listbox [options]="items" [(ngModel)]="selectedItems" [selectAll]="selectAll" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="38" [multiple]="true" [metaKeySelection]="false" (onSelectAllChange)="onSelectAllChange($event)" (onChange)="onChange($event)" scrollHeight="250px" [striped]="true" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [options]="items" [(ngModel)]="selectedItems" [selectAll]="selectAll" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="38" [multiple]="true" [metaKeySelection]="false" (onSelectAllChange)="onSelectAllChange($event)" (onChange)="onChange($event)" scrollHeight="250px" [striped]="true" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Listbox } from 'primeng/listbox';

@Component({
    selector: 'listbox-virtual-scroll-demo',
    templateUrl: './listbox-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, Listbox]
})
export class ListboxVirtualScrollDemo {
    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.items] : [];
        this.selectAll = event.checked;
        event.updateModel(this.selectedItems, event.originalEvent)
    }

    onChange(event) {
        const { originalEvent, value } = event
        if(value) this.selectAll = value.length === this.items.length;
    }

}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["virtual-scroll-doc"]],standalone:!1,decls:12,vars:9,consts:[[1,"card","flex","justify-center"],["optionLabel","label","scrollHeight","250px",1,"w-full","md:w-56",3,"ngModelChange","onSelectAllChange","onChange","options","ngModel","selectAll","virtualScroll","virtualScrollItemSize","multiple","metaKeySelection","striped"],["selector","listbox-virtual-scroll-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),o(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),o(),e(8," to specify the height of an item. "),o()(),t(9,"div",0)(10,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedItems,m)||(l.selectedItems=m),m}),Y("onSelectAllChange",function(m){return l.onSelectAllChange(m)})("onChange",function(m){return l.onChange(m)}),o()(),c(11,"app-code",2)),n&2&&(s(10),a("options",l.items),b("ngModel",l.selectedItems),a("selectAll",l.selectAll)("virtualScroll",!0)("virtualScrollItemSize",38)("multiple",!0)("metaKeySelection",!1)("striped",!0),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var ce=(()=>{class i{cities;selectedCity;code={basic:'<p-listbox [(ngModel)]="selectedCity" [options]="cities" [multiple]="true" [checkbox]="true" optionLabel="name" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-listbox [(ngModel)]="selectedCity" [options]="cities" [multiple]="true" [checkbox]="true" optionLabel="name" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-checkbox-demo',
    templateUrl: './listbox-checkbox-demo.html',
    standalone: true,
    imports: [FormsModule, ListboxModule]
})
export class ListboxCheckboxDemo implements OnInit {
    cities!: City[];

    selectedCity!: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["checkbox-doc"]],standalone:!1,decls:6,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options","multiple","checkbox"],["selector","listbox-checkbox-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Listbox allows item selection using checkboxes."),o()(),t(3,"div",0)(4,"p-listbox",1),y("ngModelChange",function(m){return x(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),c(5,"app-code",2)),n&2&&(s(4),b("ngModel",l.selectedCity),a("options",l.cities)("multiple",!0)("checkbox",!0),s(),a("code",l.code))},dependencies:[p,f,g,h,u],encapsulation:2})}return i})();var de=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=P({type:i});static \u0275inj=O({imports:[W,Q,q,f,H,J,R,R]})}return i})();var ge=()=>["Listbox"],pe=(()=>{class i{docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:$},{id:"reactive-forms",label:"Reactive Forms",component:re},{id:"checkmark",label:"Checkmark",component:ee},{id:"checkbox",label:"Checkbox",component:ce},{id:"multiple",label:"Multiple",component:ae},{id:"group",label:"Group",component:ie},{id:"filter",label:"Filter",component:oe},{id:"template",label:"Template",component:se},{id:"virtualscroll",label:"Virtual Scroll",component:me},{id:"invalid",label:"Invalid",component:le},{id:"disabled",label:"Disabled",component:te},{id:"accessibility",label:"Accessibility",component:Z}];static \u0275fac=function(n){return new(n||i)};static \u0275cmp=d({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Listbox Component","header","Listbox","description","Listbox is used to select one or more values from a list of items.","themeDocs","listbox",3,"docs","apiDocs"]],template:function(n,l){n&1&&c(0,"app-doc",0),n&2&&a("docs",l.docs)("apiDocs",G(2,ge))},dependencies:[de,X],encapsulation:2})}return i})();var kt=[{path:"",component:pe}];export{kt as default};
