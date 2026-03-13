import{b as se,d as ce}from"./chunk-INLKTFEM.js";import{a as C,b as te}from"./chunk-6FFJRHC4.js";import"./chunk-EHIVA7EC.js";import{a as ne,b as le}from"./chunk-YF7WV7YA.js";import{a as ae,b as re}from"./chunk-C4X3ZIUF.js";import"./chunk-GSPHHRWT.js";import"./chunk-BFZE4W36.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as y,d as oe,e as z}from"./chunk-I6RUY6VJ.js";import{a as p,b as ie}from"./chunk-CIUCWEWU.js";import{e as h,f as U,g as j,i as J,j as S,k as K,l as H,m as q,s as Q,t as X,v as ee}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as A,ba as $}from"./chunk-DEL7GGHP.js";import{e as P,i as Z}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{m as V,u as G}from"./chunk-O4W5DSIC.js";import{$b as E,Ab as m,Hb as k,O as W,Ob as O,Qa as c,X as N,Y as R,ac as e,bc as F,eb as d,fb as B,fc as u,gc as f,hc as g,kb as T,lc as Y,xb as r,yb as t,zb as i,zc as L}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var me=(()=>{class o{code={basic:`<span id="dd1">Options</span>
<p-select ariaLabelledBy="dd1"/>

<p-select ariaLabel="Options"/>`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-accessibility-doc"]],standalone:!1,decls:209,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,n){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),i(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),i(),e(11," props. The select element has a "),t(12,"i"),e(13,"combobox"),i(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),i(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," attributes. If the editable option is enabled "),t(21,"i"),e(22,"aria-autocomplete"),i(),e(23," is also added. The relation between the combobox and the popup is created with "),t(24,"i"),e(25,"aria-controls"),i(),e(26," and "),t(27,"i"),e(28,"aria-activedescendant"),i(),e(29," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),i(),t(30,"p"),e(31," The popup list has an id that refers to the "),t(32,"i"),e(33,"aria-controls"),i(),e(34," attribute of the "),t(35,"i"),e(36,"combobox"),i(),e(37," element and uses "),t(38,"i"),e(39,"listbox"),i(),e(40," as the role. Each list item has an "),t(41,"i"),e(42,"option"),i(),e(43," role, an id to match the "),t(44,"i"),e(45,"aria-activedescendant"),i(),e(46," of the input element along with "),t(47,"i"),e(48,"aria-label"),i(),e(49,", "),t(50,"i"),e(51,"aria-selected"),i(),e(52," and "),t(53,"i"),e(54,"aria-disabled"),i(),e(55," attributes. "),i(),t(56,"p"),e(57,"If filtering is enabled, "),t(58,"i"),e(59,"filterInputProps"),i(),e(60," can be defined to give "),t(61,"i"),e(62,"aria-*"),i(),e(63," props to the filter input element."),i()(),m(64,"app-code",0),t(65,"h3"),e(66,"Closed State Keyboard Support"),i(),t(67,"div",1)(68,"table",2)(69,"thead")(70,"tr")(71,"th"),e(72,"Key"),i(),t(73,"th"),e(74,"Function"),i()()(),t(75,"tbody")(76,"tr")(77,"td")(78,"i"),e(79,"tab"),i()(),t(80,"td"),e(81,"Moves focus to the select element."),i()(),t(82,"tr")(83,"td")(84,"i"),e(85,"space"),i()(),t(86,"td"),e(87,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(88,"tr")(89,"td")(90,"i"),e(91,"down arrow"),i()(),t(92,"td"),e(93,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"up arrow"),i()(),t(98,"td"),e(99,"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus."),i()()()()(),t(100,"h3"),e(101,"Popup Keyboard Support"),i(),t(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),e(107,"Key"),i(),t(108,"th"),e(109,"Function"),i()()(),t(110,"tbody")(111,"tr")(112,"td")(113,"i"),e(114,"tab"),i()(),t(115,"td"),e(116,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),i()(),t(117,"tr")(118,"td")(119,"i"),e(120,"shift"),i(),e(121," + "),t(122,"i"),e(123,"tab"),i()(),t(124,"td"),e(125,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),i()(),t(126,"tr")(127,"td")(128,"i"),e(129,"enter"),i()(),t(130,"td"),e(131,"Selects the focused option and closes the popup."),i()(),t(132,"tr")(133,"td")(134,"i"),e(135,"space"),i()(),t(136,"td"),e(137,"Selects the focused option and closes the popup."),i()(),t(138,"tr")(139,"td")(140,"i"),e(141,"escape"),i()(),t(142,"td"),e(143,"Closes the popup, moves focus to the select element."),i()(),t(144,"tr")(145,"td")(146,"i"),e(147,"down arrow"),i()(),t(148,"td"),e(149,"Moves focus to the next option, if there is none then visual focus does not change."),i()(),t(150,"tr")(151,"td")(152,"i"),e(153,"up arrow"),i()(),t(154,"td"),e(155,"Moves focus to the previous option, if there is none then visual focus does not change."),i()(),t(156,"tr")(157,"td")(158,"i"),e(159,"right arrow"),i()(),t(160,"td"),e(161,"If the select is editable, removes the visual focus from the current option and moves input cursor to one character left."),i()(),t(162,"tr")(163,"td")(164,"i"),e(165,"left arrow"),i()(),t(166,"td"),e(167,"If the select is editable, removes the visual focus from the current option and moves input cursor to one character right."),i()(),t(168,"tr")(169,"td")(170,"i"),e(171,"home"),i()(),t(172,"td"),e(173,"If the select is editable, moves input cursor at the end, if not then moves focus to the first option."),i()(),t(174,"tr")(175,"td")(176,"i"),e(177,"end"),i()(),t(178,"td"),e(179,"If the select is editable, moves input cursor at the beginning, if not then moves focus to the last option."),i()(),t(180,"tr")(181,"td")(182,"i"),e(183,"any printable character"),i()(),t(184,"td"),e(185,"Moves focus to the option whose label starts with the characters being typed if select is not editable."),i()()()()(),t(186,"h3"),e(187,"Filter Input Keyboard Support"),i(),t(188,"div",1)(189,"table",2)(190,"thead")(191,"tr")(192,"th"),e(193,"Key"),i(),t(194,"th"),e(195,"Function"),i()()(),t(196,"tbody")(197,"tr")(198,"td")(199,"i"),e(200,"enter"),i()(),t(201,"td"),e(202,"Closes the popup and moves focus to the select element."),i()(),t(203,"tr")(204,"td")(205,"i"),e(206,"escape"),i()(),t(207,"td"),e(208,"Closes the popup and moves focus to the select element."),i()()()()()()),l&2&&(c(64),r("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,y],encapsulation:2})}return o})();var de=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-basic-demo',
    templateUrl: './select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectBasicDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-basic-demo"]],standalone:!1,decls:24,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-basic-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Select is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),i(),e(5," property along with an "),t(6,"i"),e(7,"options"),i(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),i(),e(11," and "),t(12,"i"),e(13,"optionValue"),i(),e(14," properties respectively. Note that, when options are simple primitive values such as a string array, no "),t(15,"i"),e(16,"optionLabel"),i(),e(17," and "),t(18,"i"),e(19,"optionValue"),i(),e(20," would be necessary. "),i()(),t(21,"div",0)(22,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(23,"app-code",2)),l&2&&(c(22),r("options",n.cities),u("ngModel",n.selectedCity),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var pe=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-checkmark-demo',
    templateUrl: './select-checkmark-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectCheckmarkDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-checkmark-demo"]],standalone:!1,decls:6,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","checkmark","showClear"],["selector","select-checkmark-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"An alternative way to highlight the selected option is displaying a checkmark instead."),i()(),t(3,"div",0)(4,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(5,"app-code",2)),l&2&&(c(4),r("options",n.cities),u("ngModel",n.selectedCity),r("checkmark",!0)("showClear",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var ue=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-clear-icon-demo',
    templateUrl: './select-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectClearIconDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-clear-icon-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","showClear"],["selector","select-clear-icon-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"showClear"),i(),e(5," is enabled, a clear icon is added to reset the Select."),i()(),t(6,"div",0)(7,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(8,"app-code",2)),l&2&&(c(7),r("options",n.cities),u("ngModel",n.selectedCity),r("showClear",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var fe=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-disabled-demo',
    templateUrl: './select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectDisabledDemo {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-disabled-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Select a City","optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","disabled"],["selector","select-disabled-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),t(6,"div",0)(7,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(8,"app-code",2)),l&2&&(c(7),r("options",n.cities),u("ngModel",n.selectedCity),r("disabled",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var ge=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-editable-demo',
    templateUrl: './select-editable-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectEditableDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-editable-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Select a City","optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","editable"],["selector","select-editable-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"editable"),i(),e(5," is present, the input can also be entered with typing."),i()(),t(6,"div",0)(7,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(8,"app-code",2)),l&2&&(c(7),r("options",n.cities),u("ngModel",n.selectedCity),r("editable",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var ye=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-filled-demo',
    templateUrl: './select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectFilledDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-filled-demo"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled","optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-filled-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),i(),e(5," property as "),t(6,"i"),e(7,"filled"),i(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),i(),e(11," style."),i()(),t(12,"div",0)(13,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(14,"app-code",2)),l&2&&(c(13),r("options",n.cities),u("ngModel",n.selectedCity),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();function Te(o,I){if(o&1&&(t(0,"div",5),m(1,"img",6),t(2,"div"),e(3),i()()),o&2){let s=I.$implicit,l=O();c(),E("flag flag-"+l.selectedCountry.code.toLowerCase()),c(2),F(s.name)}}function Ne(o,I){if(o&1&&(t(0,"div",5),m(1,"img",6),t(2,"div"),e(3),i()()),o&2){let s=I.$implicit;c(),E("flag flag-"+s.code.toLowerCase()),c(2),F(s.name)}}var Ce=(()=>{class o{countries;selectedCountry;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
        <ng-template #selectedItem let-selectedOption>
            <div class="flex items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-select>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'select-filter-demo',
    templateUrl: './select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectFilterDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

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
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-filter-demo"]],standalone:!1,decls:13,vars:5,consts:[["selectedItem",""],["item",""],[1,"card","flex","justify-center"],["optionLabel","name","filterBy","name","placeholder","Select a Country",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","filter","showClear"],["selector","select-filter-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(l,n){if(l&1){let v=k();t(0,"app-docsectiontext")(1,"p"),e(2,"Select provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),i(),e(5," property."),i()(),t(6,"div",2)(7,"p-select",3),g("ngModelChange",function(D){return N(v),f(n.selectedCountry,D)||(n.selectedCountry=D),R(D)}),T(8,Te,4,3,"ng-template",null,0,L)(10,Ne,4,3,"ng-template",null,1,L),i()(),m(12,"app-code",4)}l&2&&(c(7),r("options",n.countries),u("ngModel",n.selectedCountry),r("filter",!0)("showClear",!0),c(5),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var he=(()=>{class o{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-floatlabel class="w-full md:w-56">
    <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" styleClass="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" styleClass="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" styleClass="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-56">
        <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" styleClass="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="in">
        <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" styleClass="w-full" variant="filled" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="on">
        <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" styleClass="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-floatlabel-demo',
    templateUrl: './select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, Select, FloatLabel]
})
export class SelectFloatlabelDemo implements OnInit {
    cities: City[] | undefined;

    value1: City | undefined;

    value2: City | undefined;

    value3: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-floatlabel-demo"]],standalone:!1,decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-56"],["inputId","over_label","optionLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options"],["for","over_label"],["variant","in",1,"w-full","md:w-56"],["inputId","in_label","optionLabel","name","styleClass","w-full","variant","filled",3,"ngModelChange","ngModel","options"],["for","in_label"],["variant","on",1,"w-full","md:w-56"],["inputId","on_label","optionLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options"],["for","on_label"],["selector","select-floatlabel-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),e(4,"FloatLabel"),i(),e(5," documentation for more information. "),i()(),t(6,"div",1)(7,"p-floatlabel",2)(8,"p-select",3),g("ngModelChange",function(a){return f(n.value1,a)||(n.value1=a),a}),i(),t(9,"label",4),e(10,"Over Label"),i()(),t(11,"p-floatlabel",5)(12,"p-select",6),g("ngModelChange",function(a){return f(n.value2,a)||(n.value2=a),a}),i(),t(13,"label",7),e(14,"In Label"),i()(),t(15,"p-floatlabel",8)(16,"p-select",9),g("ngModelChange",function(a){return f(n.value3,a)||(n.value3=a),a}),i(),t(17,"label",10),e(18,"On Label"),i()()(),m(19,"app-code",11)),l&2&&(c(8),u("ngModel",n.value1),r("options",n.cities),c(4),u("ngModel",n.value2),r("options",n.cities),c(4),u("ngModel",n.value3),r("options",n.cities),c(3),r("code",n.code))},dependencies:[P,p,y,h,S,C,ne],encapsulation:2})}return o})();function ke(o,I){if(o&1&&(t(0,"div",4),m(1,"img",5),t(2,"span"),e(3),i()()),o&2){let s=I.$implicit;c(),E("mr-2 flag flag-"+s.value),c(2),F(s.label)}}var Se=(()=>{class o{groupedCities;selectedCity;constructor(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}code={basic:`<p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
            <ng-template let-group #group>
                <div class="flex items-center">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value"  style="width: 20px" />
                    <span>{{ group.label }}</span>
                </div>
            </ng-template>
    </p-select>
</div>`,typescript:`import { SelectItemGroup } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'select-group-demo',
    templateUrl: './select-group-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectGroupDemo {
    groupedCities: SelectItemGroup[];

    selectedCity: string | undefined;

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
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-group-demo"]],standalone:!1,decls:8,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","group"],["selector","select-group-demo",3,"code"],[1,"flex","items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(l,n){if(l&1){let v=k();t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),i()(),t(3,"div",1)(4,"p-select",2),g("ngModelChange",function(D){return N(v),f(n.selectedCity,D)||(n.selectedCity=D),R(D)}),T(5,ke,4,3,"ng-template",null,0,L),i()(),m(7,"app-code",3)}l&2&&(c(4),r("options",n.groupedCities),u("ngModel",n.selectedCity),r("group",!0),c(3),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var ve=(()=>{class o{cities;selectedCity;code={basic:`<p-iftalabel class="w-full md:w-56">
    <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" styleClass="w-full" />
    <label for="dd-city">City</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-56">
        <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" styleClass="w-full" />
        <label for="dd-city">City</label>
    </p-iftalabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-iftalabel-demo',
    templateUrl: './select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule, IftaLabelModule]
})
export class SelectIftaLabelDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-iftalabel-demo"]],standalone:!1,decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-56"],["inputId","dd-city","optionLabel","name","styleClass","w-full",3,"ngModelChange","ngModel","options"],["for","dd-city"],["selector","select-iftalabel-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),i(),e(5," documentation for more information."),i()(),t(6,"div",1)(7,"p-iftalabel",2)(8,"p-select",3),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i(),t(9,"label",4),e(10,"City"),i()()(),m(11,"app-code",5)),l&2&&(c(8),u("ngModel",n.selectedCity),r("options",n.cities),c(3),r("code",n.code))},dependencies:[P,p,y,h,S,C,ae],encapsulation:2})}return o})();var be=(()=>{class o{code={typescript:"import { SelectModule } from 'primeng/select';"};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,n){l&1&&m(0,"app-code",0),l&2&&r("code",n.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return o})();var we=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="ng-dirty ng-invalid w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="ng-dirty ng-invalid w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'select-invalid-demo',
    templateUrl: './select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectInvalidDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-invalid-demo"]],standalone:!1,decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"ng-dirty","ng-invalid","w-full","md:w-56",3,"ngModelChange","options","ngModel","showClear"],["selector","select-invalid-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),t(9,"div",0)(10,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(11,"app-code",2)),l&2&&(c(10),r("options",n.cities),u("ngModel",n.selectedCity),r("showClear",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var Me=(()=>{class o{items;selectedItem;loading=!1;loadLazyTimeout=null;options={delay:250,showLoader:!0,lazy:!0,onLazyLoad:this.onLazyLoad.bind(this)};constructor(){this.items=[];for(let s=0;s<1e4;s++)this.items.push({label:"Item "+s,value:"Item "+s})}onLazyLoad(s){this.loading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let{first:l,last:n}=s,v=[...this.items];for(let a=l;a<n;a++)v[a]={label:`Item #${a}`,value:a};this.items=v,this.loading=!1},Math.random()*1e3+250)}code={basic:'<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />
</div>`,typescript:`import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
    selector: 'select-lazy-virtualscroll-demo',
    templateUrl: './select-lazy-virtualscroll-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectLazyVirtualscrollDemo {
    items: SelectItem[];

    selectedItem: string | undefined;

    loading: boolean = false;

    loadLazyTimeout = null;

    options: ScrollerOptions = {
        delay: 250,
        showLoader: true,
        lazy: true,
        onLazyLoad: this.onLazyLoad.bind(this)
    };

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
    onLazyLoad(event) {
        this.loading = true;

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const items = [...this.items];

            for (let i = first; i < last; i++) {
                items[i] = { label: \`Item #\${i}\`, value: i };
            }

            this.items = items;
            this.loading = false;
        }, Math.random() * 1000 + 250);
    }

}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-lazy-virtualscroll-demo"]],standalone:!1,decls:3,vars:6,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize","virtualScrollOptions"],["selector","select-lazy-virtualscroll-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p-select",1),g("ngModelChange",function(a){return f(n.selectedItem,a)||(n.selectedItem=a),a}),i()(),m(2,"app-code",2)),l&2&&(c(),r("options",n.items),u("ngModel",n.selectedItem),r("virtualScroll",!0)("virtualScrollItemSize",38)("virtualScrollOptions",n.options),c(),r("code",n.code))},dependencies:[p,h,S,C],encapsulation:2})}return o})();var xe=(()=>{class o{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-loading-state-demo',
    templateUrl: './select-loading-state-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectLoadingStateDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-loading-state-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Loading...",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","loading"],["selector","select-loading-state-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Loading state can be used "),t(3,"i"),e(4,"loading"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-select",1),g("ngModelChange",function(a){return f(n.selectedCity,a)||(n.selectedCity=a),a}),i()(),m(8,"app-code",2)),l&2&&(c(7),r("options",n.cities),u("ngModel",n.selectedCity),r("loading",!0),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var _e=(()=>{class o{cities;formGroup;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new j({selectedCity:new J(null)})}code={basic:`<form [formGroup]="formGroup" class="card flex justify-center">
    <p-select formControlName="selectedCity" [options]="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</form>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-reactive-forms-demo',
    templateUrl: './select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Select]
})
export class SelectReactiveFormsDemo implements OnInit {
    cities: City[] | undefined;

    formGroup: FormGroup | undefined;

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
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["reactive-forms-doc"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center",3,"formGroup"],["formControlName","selectedCity","optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"options"],["selector","select-reactive-forms-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Select can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),t(6,"form",0),m(7,"p-select",1),i(),m(8,"app-code",2)),l&2&&(c(6),r("formGroup",n.formGroup),c(),r("options",n.cities),c(),r("code",n.code))},dependencies:[p,y,K,h,U,q,H,C],encapsulation:2})}return o})();var Ie=(()=>{class o{value1;value2;value3;cities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
    <p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
    <p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-size-demo',
    templateUrl: './select-size-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectSizeDemo implements OnInit {
    value1: City | undefined;

    value2: City | undefined;

    value3: City | undefined;

    cities: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-size-demo"]],standalone:!1,decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["optionLabel","name","size","small","placeholder","Small",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["optionLabel","name","placeholder","Normal",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["optionLabel","name","size","large","placeholder","Large",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["selector","select-size-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Select provides "),t(3,"i"),e(4,"small"),i(),e(5," and "),t(6,"i"),e(7,"large"),i(),e(8," sizes as alternatives to the base."),i()(),t(9,"div",0)(10,"p-select",1),g("ngModelChange",function(a){return f(n.value1,a)||(n.value1=a),a}),i(),t(11,"p-select",2),g("ngModelChange",function(a){return f(n.value2,a)||(n.value2=a),a}),i(),t(12,"p-select",3),g("ngModelChange",function(a){return f(n.value3,a)||(n.value3=a),a}),i()(),m(13,"app-code",4)),l&2&&(c(10),u("ngModel",n.value1),r("options",n.cities),c(),u("ngModel",n.value2),r("options",n.cities),c(),u("ngModel",n.value3),r("options",n.cities),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();function Pe(o,I){if(o&1&&(t(0,"div",9),m(1,"img",10),t(2,"div"),e(3),i()()),o&2){let s=O().$implicit;c(),E("flag flag-"+s.code.toLowerCase()),c(2),F(s.name)}}function Ae(o,I){if(o&1&&T(0,Pe,4,3,"div",8),o&2){let s=I.$implicit;r("ngIf",s)}}function ze(o,I){if(o&1&&(t(0,"div",9),m(1,"img",10),t(2,"div"),e(3),i()()),o&2){let s=I.$implicit;c(),E("flag flag-"+s.code.toLowerCase()),c(2),F(s.name)}}function We(o,I){o&1&&m(0,"i",11)}function Be(o,I){o&1&&(t(0,"div",12),e(1,"Available Countries"),i())}function Ye(o,I){o&1&&(t(0,"div",13),m(1,"p-button",14),i())}var De=(()=>{class o{countries;selectedCountry;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2" *ngIf="selectedOption">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img
                src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + country.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium p-3">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
        <ng-template #selectedItem let-selectedOption>
            <div class="flex items-center gap-2" *ngIf="selectedOption">
                <img
                    src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                    style="width: 18px"
                />
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img
                    src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'flag flag-' + country.code.toLowerCase()"
                    style="width: 18px"
                />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #dropdownicon>
            <i class="pi pi-map"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium p-3">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="p-3">
                <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-select>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'select-group-demo',
    templateUrl: './select-group-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule, ButtonModule]
})
export class SelectTemplateDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

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
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-template-demo"]],standalone:!1,decls:25,vars:3,consts:[["selectedItem",""],["item",""],["dropdownicon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a country",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-template-demo",3,"code"],["class","flex items-center gap-2",4,"ngIf"],[1,"flex","items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-map"],[1,"font-medium","p-3"],[1,"p-3"],["label","Add New","fluid","","severity","secondary","text","","size","small","icon","pi pi-plus"]],template:function(l,n){if(l&1){let v=k();t(0,"app-docsectiontext")(1,"p"),e(2," Both the selected option and the options list can be templated to provide customizated representation. Use "),t(3,"i"),e(4,"selectedItem"),i(),e(5," template to customize the selected label display and the "),t(6,"i"),e(7,"item"),i(),e(8," template to change the content of the options in the select panel. In addition when grouping is enabled, "),t(9,"i"),e(10,"group"),i(),e(11," template is available to customize the option groups. All templates get the option instance as the default local template variable. "),i()(),t(12,"div",5)(13,"p-select",6),g("ngModelChange",function(D){return N(v),f(n.selectedCountry,D)||(n.selectedCountry=D),R(D)}),T(14,Ae,1,1,"ng-template",null,0,L)(16,ze,4,3,"ng-template",null,1,L)(18,We,1,0,"ng-template",null,2,L)(20,Be,2,0,"ng-template",null,3,L)(22,Ye,2,0,"ng-template",null,4,L),i()(),m(24,"app-code",7)}l&2&&(c(13),r("options",n.countries),u("ngModel",n.selectedCountry),c(11),r("code",n.code))},dependencies:[V,p,y,h,S,C,A],encapsulation:2})}return o})();var Le=(()=>{class o{items;selectedItem;constructor(){this.items=[];for(let s=0;s<1e4;s++)this.items.push({label:"Item "+s,value:"Item "+s})}code={basic:'<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />
</div>`,typescript:`import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
    selector: 'select-virtualscroll-demo',
    templateUrl: './select-virtualscroll-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectVirtualscrollDemo {
    items: SelectItem[];

    selectedItem: string | undefined;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["select-virtualscroll-demo"]],standalone:!1,decls:12,vars:5,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize"],["selector","select-virtualscroll-demo",3,"code"]],template:function(l,n){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),i(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," to specify the height of an item. "),i()(),t(9,"div",0)(10,"p-select",1),g("ngModelChange",function(a){return f(n.selectedItem,a)||(n.selectedItem=a),a}),i()(),m(11,"app-code",2)),l&2&&(c(10),r("options",n.items),u("ngModel",n.selectedItem),r("virtualScroll",!0)("virtualScrollItemSize",38),c(),r("code",n.code))},dependencies:[p,y,h,S,C],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=B({type:o});static \u0275inj=W({imports:[G,Z,ie,z,Q,X,te,$,ee,le,re,se,ce,z]})}return o})();var Ve=()=>["Select"],Fe=(()=>{class o{docs=[{id:"import",label:"Import",component:be},{id:"basic",label:"Basic",component:de},{id:"reactive-forms",label:"Reactive Forms",component:_e},{id:"checkmark",label:"Checkmark",component:pe},{id:"editable",label:"Editable",component:ge},{id:"group",label:"Group",component:Se},{id:"template",label:"Template",component:De},{id:"filter",label:"Filter",component:Ce},{id:"clearicon",label:"Clear Icon",component:ue},{id:"loadingstate",label:"Loading State",component:xe},{id:"virtualscroll",label:"Virtual Scroll",component:Le},{id:"lazyvirtualscroll",label:"Lazy Virtual Scroll",component:Me},{id:"filled",label:"Filled",component:ye},{id:"floatlabel",label:"Float Label",component:he},{id:"iftalabel",label:"Ifta Label",component:ve},{id:"sizes",label:"Sizes",component:Ie},{id:"invalid",label:"Invalid",component:we},{id:"disabled",label:"Disabled",component:fe},{id:"accessibility",label:"Accessibility",component:me}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Select Component","header","Select","description","Select is used to choose an item from a collection of options.","themeDocs","select",3,"docs","apiDocs"]],template:function(l,n){l&1&&m(0,"app-doc",0),l&2&&r("docs",n.docs)("apiDocs",Y(2,Ve))},dependencies:[Ee,oe],styles:[".country-item-value[_ngcontent-%COMP%]   img.flag[_ngcontent-%COMP%]{width:17px}p-skeleton[_ngcontent-%COMP%]{width:100%}"]})}return o})();var Ji=[{path:"",component:Fe}];export{Ji as default};
