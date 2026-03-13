import './polyfills.server.mjs';
import{a as ae,b as me}from"./chunk-TUWVE3ES.mjs";import{a as le,b as re}from"./chunk-IIW25JG6.mjs";import{a as F,b,c as oe}from"./chunk-ZIC7UJZY.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-RUMDOR7N.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as v,d as ne,e as B}from"./chunk-HZSAMTDM.mjs";import{a as f,b as ie}from"./chunk-EK6YV52O.mjs";import{e as C,f as R,g as H,i as K,j as M,k as Y,l as J,m as Q,s as X,t as Z}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as ee,ba as te}from"./chunk-DE54ZEHA.mjs";import{pa as $}from"./chunk-YQJJ7I3T.mjs";import{f as N,j as G}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as V}from"./chunk-RUZVPFSZ.mjs";import{$a as w,Bb as s,Cb as t,Db as i,Dc as I,Eb as d,Lb as W,O as z,Qb as u,Sa as p,X as L,Y as q,dc as O,ec as e,fc as j,gb as c,hb as U,jc as g,kc as h,lc as y,mb as k,pc as P}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var pe=(()=>{class r{code={basic:`<label for="ac1">Username</label>
<p-autocomplete inputId="ac1"/>

<span id="ac2">Email</span>
<p-autocomplete ariaLabelledBy="ac2" />

<p-autocomplete ariaLabel="City" />`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-accessibility-doc"]],standalone:!1,decls:166,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),t(3,"p"),e(4," Value to describe the component can either be provided via "),t(5,"i"),e(6,"label"),i(),e(7," tag combined with "),t(8,"i"),e(9,"inputId"),i(),e(10," prop or using "),t(11,"i"),e(12,"ariaLabelledBy"),i(),e(13,", "),t(14,"i"),e(15,"ariaLabel"),i(),e(16," props. The input element has "),t(17,"i"),e(18,"combobox"),i(),e(19," role in addition to "),t(20,"i"),e(21,"aria-autocomplete"),i(),e(22,", "),t(23,"i"),e(24,"aria-haspopup"),i(),e(25," and "),t(26,"i"),e(27,"aria-expanded"),i(),e(28," attributes. The relation between the input and the popup is created with "),t(29,"i"),e(30,"aria-controls"),i(),e(31," and "),t(32,"i"),e(33,"aria-activedescendant"),i(),e(34," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),i(),t(35,"p"),e(36,"In multiple mode, chip list uses "),t(37,"i"),e(38,"listbox"),i(),e(39," role whereas each chip has the "),t(40,"i"),e(41,"option"),i(),e(42," role with "),t(43,"i"),e(44,"aria-label"),i(),e(45," set to the label of the chip."),i(),t(46,"p"),e(47," The popup list has an id that refers to the "),t(48,"i"),e(49,"aria-controls"),i(),e(50," attribute of the input element and uses "),t(51,"i"),e(52,"listbox"),i(),e(53," as the role. Each list item has "),t(54,"i"),e(55,"option"),i(),e(56," role and an id to match the "),t(57,"i"),e(58,"aria-activedescendant"),i(),e(59," of the input element. "),i()(),d(60,"app-code",0),t(61,"h3"),e(62,"Keyboard Support"),i(),t(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),e(68,"Key"),i(),t(69,"th"),e(70,"Function"),i()()(),t(71,"tbody")(72,"tr")(73,"td")(74,"i"),e(75,"tab"),i()(),t(76,"td"),e(77,"Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element."),i()(),t(78,"tr")(79,"td")(80,"i"),e(81,"up arrow"),i()(),t(82,"td"),e(83,"Highlights the previous item if popup is visible."),i()(),t(84,"tr")(85,"td")(86,"i"),e(87,"down arrow"),i()(),t(88,"td"),e(89,"Highlights the next item if popup is visible."),i()(),t(90,"tr")(91,"td")(92,"i"),e(93,"enter"),i()(),t(94,"td"),e(95,"Selects the highlighted item and closes the popup if popup is visible."),i()(),t(96,"tr")(97,"td")(98,"i"),e(99,"home"),i()(),t(100,"td"),e(101,"Highlights the first item if popup is visible."),i()(),t(102,"tr")(103,"td")(104,"i"),e(105,"end"),i()(),t(106,"td"),e(107,"Highlights the last item if popup is visible."),i()(),t(108,"tr")(109,"td")(110,"i"),e(111,"escape"),i()(),t(112,"td"),e(113,"Hides the popup."),i()()()()(),t(114,"h3"),e(115,"Chips Input Keyboard Support"),i(),t(116,"div",1)(117,"table",2)(118,"thead")(119,"tr")(120,"th"),e(121,"Key"),i(),t(122,"th"),e(123,"Function"),i()()(),t(124,"tbody")(125,"tr")(126,"td")(127,"i"),e(128,"backspace"),i()(),t(129,"td"),e(130,"Deletes the previous chip if the input field is empty."),i()(),t(131,"tr")(132,"td")(133,"i"),e(134,"left arrow"),i()(),t(135,"td"),e(136,"Moves focus to the previous chip if available and input field is empty."),i()()()()(),t(137,"h3"),e(138,"Chip Keyboard Support"),i(),t(139,"div",1)(140,"table",2)(141,"thead")(142,"tr")(143,"th"),e(144,"Key"),i(),t(145,"th"),e(146,"Function"),i()()(),t(147,"tbody")(148,"tr")(149,"td")(150,"i"),e(151,"left arrow"),i()(),t(152,"td"),e(153,"Moves focus to the previous chip if available."),i()(),t(154,"tr")(155,"td")(156,"i"),e(157,"right arrow"),i()(),t(158,"td"),e(159,"Moves focus to the next chip, if there is none then input field receives the focus."),i()(),t(160,"tr")(161,"td")(162,"i"),e(163,"backspace"),i()(),t(164,"td"),e(165,"Deletes the chips and adds focus to the input field."),i()()()()()),n&2&&(p(60),s("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[f,v],encapsulation:2})}return r})();var se=(()=>{class r{items=[];value;code={basic:'<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-basic-demo',
    templateUrl: './autocomplete-basic-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteBasicDemo {
    items: any[] = [];

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["basic-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-basic-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," AutoComplete uses "),t(3,"i"),e(4,"ngModel"),i(),e(5," for two-way binding, requires a list of suggestions and a "),t(6,"i"),e(7,"completeMethod"),i(),e(8," to query for the results. The completeMethod gets the query text as "),t(9,"i"),e(10,"event.query"),i(),e(11," property and should update the suggestions with the search results. "),i()(),t(12,"div",0)(13,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.value,l)||(o.value=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(14,"app-code",2)),n&2&&(p(13),g("ngModel",o.value),s("suggestions",o.items),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var de=(()=>{class r{items;selectedItem;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-disabled-demo',
    templateUrl: './autocomplete-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteDisabledDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["disabled-doc"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Disabled",3,"ngModelChange","completeMethod","ngModel","suggestions","disabled"],["selector","autocomplete-disabled-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),t(6,"div",0)(7,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedItem,l)||(o.selectedItem=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(8,"app-code",2)),n&2&&(p(7),g("ngModel",o.selectedItem),s("suggestions",o.suggestions)("disabled",!0),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var ce=(()=>{class r{items;value;code={basic:'<p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-dropdown-demo',
    templateUrl: './autocomplete-dropdown-demo.html',
    standalone:true,
    imports: [FormsModule, AutoCompleteModule]
})
export class AutocompleteDropdownDemo {
    items: any[] | undefined;

    value: any;

    search(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];

    this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
    }
}`};search(a){let n=[...Array(10).keys()];this.items=a.query?[...Array(10).keys()].map(o=>a.query+"-"+o):n}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["dropdown-doc"]],standalone:!1,decls:24,vars:4,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","completeMethod","ngModel","dropdown","suggestions"],["selector","autocomplete-dropdown-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Enabling "),t(3,"i"),e(4,"dropdown"),i(),e(5," property displays a button next to the input field where click behavior of the button is defined using "),t(6,"i"),e(7,"dropdownMode"),i(),e(8," property that takes "),t(9,"strong"),e(10,"blank"),i(),e(11," or "),t(12,"strong"),e(13,"current"),i(),e(14," as possible values. "),t(15,"i"),e(16,"blank"),i(),e(17," is the default mode to send a query with an empty string whereas "),t(18,"i"),e(19,"current"),i(),e(20," setting sends a query with the current value of the input. "),i()(),t(21,"div",0)(22,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.value,l)||(o.value=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(23,"app-code",2)),n&2&&(p(22),g("ngModel",o.value),s("dropdown",!0)("suggestions",o.items),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var ue=(()=>{class r{items;selectedItem;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-filled-demo',
    templateUrl: './autocomplete-filled-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteFilledDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["filled-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-filled-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),i(),e(5," property as "),t(6,"i"),e(7,"filled"),i(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),i(),e(11," style."),i()(),t(12,"div",0)(13,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedItem,l)||(o.selectedItem=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(14,"app-code",2)),n&2&&(p(13),g("ngModel",o.selectedItem),s("suggestions",o.suggestions),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var fe=(()=>{class r{value1;value2;value3;items;code={basic:`<p-floatlabel>
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-float-label-demo',
    templateUrl: './autocomplete-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete, FloatLabel]
})
export class AutocompleteFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["float-label-doc"]],standalone:!1,decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","over_label"],["variant","in"],["inputId","in_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","in_label"],["variant","on"],["inputId","on_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","on_label"],["selector","autocomplete-float-label-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),e(4,"FloatLabel"),i(),e(5," documentation for more information. "),i()(),t(6,"div",1)(7,"p-floatlabel")(8,"p-autocomplete",2),y("ngModelChange",function(l){return h(o.value1,l)||(o.value1=l),l}),u("completeMethod",function(l){return o.search(l)}),i(),t(9,"label",3),e(10,"Over Label"),i()(),t(11,"p-floatlabel",4)(12,"p-autocomplete",5),y("ngModelChange",function(l){return h(o.value2,l)||(o.value2=l),l}),u("completeMethod",function(l){return o.search(l)}),i(),t(13,"label",6),e(14,"In Label"),i()(),t(15,"p-floatlabel",7)(16,"p-autocomplete",8),y("ngModelChange",function(l){return h(o.value3,l)||(o.value3=l),l}),u("completeMethod",function(l){return o.search(l)}),i(),t(17,"label",9),e(18,"On Label"),i()()(),d(19,"app-code",10)),n&2&&(p(8),g("ngModel",o.value1),s("suggestions",o.items),p(4),g("ngModel",o.value2),s("suggestions",o.items),p(4),g("ngModel",o.value3),s("suggestions",o.items),p(3),s("code",o.code))},dependencies:[N,f,C,M,v,b,le],encapsulation:2})}return r})();var he=(()=>{class r{countryService;id;title;countries;selectedCountry;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],o=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(o.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}code={basic:'<p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { CountryService } from '@/service/countryservice';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-force-selection-demo',
    templateUrl: './autocomplete-force-selection-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete],
    providers: [CountryService]
})
export class AutocompleteForceSelectionDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(n){return new(n||r)(w(F))};static \u0275cmp=c({type:r,selectors:[["force-selection-doc"]],inputs:{id:"id",title:"title"},standalone:!1,decls:6,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","forceSelection","suggestions"],["selector","autocomplete-force-selection-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions."),i()(),t(3,"div",0)(4,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedCountry,l)||(o.selectedCountry=l),l}),u("completeMethod",function(l){return o.filterCountry(l)}),i()(),d(5,"app-code",2)),n&2&&(p(4),g("ngModel",o.selectedCountry),s("forceSelection",!0)("suggestions",o.filteredCountries),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();function Fe(r,T){if(r&1&&(t(0,"div",4),d(1,"img",5),t(2,"span"),e(3),i()()),r&2){let a=T.$implicit;p(),O("mr-2 flag flag-"+a.value),p(2),j(a.label)}}var ye=(()=>{class r{filterService;selectedCity;filteredGroups;groupedCities;constructor(a){this.filterService=a}ngOnInit(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}filterGroupedCity(a){let n=a.query,o=[];for(let m of this.groupedCities){let l=this.filterService.filter(m.items,["label"],n,"contains");l&&l.length&&o.push({label:m.label,value:m.value,items:l})}this.filteredGroups=o}code={basic:`<p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-autocomplete>`,html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
        <ng-template let-group #group>
            <div class="flex items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-autocomplete>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-grouped-demo',
    templateUrl: './autocomplete-grouped-demo.html',
    standalone: true,
    imports: [AutoComplete, FormsModule],
  })
export class AutocompleteGroupedDemo implements OnInit {
    selectedCity: any;

    filteredGroups: any[] | undefined;

    groupedCities: SelectItemGroup[] | undefined;

    constructor(private filterService: FilterService) { }

    ngOnInit() {
        this.groupedCities = [
            {
                label: 'Germany', value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA', value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan', value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }

    filterGroupedCity(event: AutoCompleteCompleteEvent) {
        let query = event.query;
        let filteredGroups = [];

        for (let optgroup of this.groupedCities) {
            let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, "contains");
            if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push({
                    label: optgroup.label,
                    value: optgroup.value,
                    items: filteredSubOptions
                });
            }
        }

        this.filteredGroups = filteredGroups;
    }
}`};static \u0275fac=function(n){return new(n||r)(w($))};static \u0275cmp=c({type:r,selectors:[["grouped-doc"]],standalone:!1,decls:17,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Hint: type 'a'",3,"ngModelChange","completeMethod","ngModel","group","suggestions"],["selector","autocomplete-grouped-demo",3,"code"],[1,"flex","items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,o){if(n&1){let m=W();t(0,"app-docsectiontext")(1,"p"),e(2,"Option grouping is enabled when "),t(3,"i"),e(4,"group"),i(),e(5," property is set to "),t(6,"i"),e(7,"true"),i(),e(8,". "),t(9,"i"),e(10,"group"),i(),e(11," template is available to customize the option groups. All templates get the option instance as the default local template variable."),i()(),t(12,"div",1)(13,"p-autocomplete",2),y("ngModelChange",function(A){return L(m),h(o.selectedCity,A)||(o.selectedCity=A),q(A)}),u("completeMethod",function(A){return o.filterGroupedCity(A)}),k(14,Fe,4,3,"ng-template",null,0,I),i()(),d(16,"app-code",3)}n&2&&(p(13),g("ngModel",o.selectedCity),s("group",!0)("suggestions",o.filteredGroups),p(3),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var ve=(()=>{class r{items;value;code={basic:`<p-iftalabel>
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
    <label for="ac">Identifier</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
        <label for="ac">Identifier</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IftaLabelModule } from 'primeng/iftalabel';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-ifta-label-demo',
    templateUrl: './autocomplete-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule, IftaLabelModule]
})
export class AutocompleteIftaLabelDemo {
    items: any[] | undefined;

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["ifta-label-doc"]],standalone:!1,decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","ac",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","ac"],["selector","autocomplete-ifta-label-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),i(),e(5," documentation for more information."),i()(),t(6,"div",1)(7,"p-iftalabel")(8,"p-autocomplete",2),y("ngModelChange",function(l){return h(o.value,l)||(o.value=l),l}),u("completeMethod",function(l){return o.search(l)}),i(),t(9,"label",3),e(10,"Identifier"),i()()(),d(11,"app-code",4)),n&2&&(p(8),g("ngModel",o.value),s("suggestions",o.items),p(3),s("code",o.code))},dependencies:[N,f,C,M,v,b,ae],encapsulation:2})}return r})();var Ce=(()=>{class r{code={typescript:"import { AutoCompleteModule } from 'primeng/autocomplete';"};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,o){n&1&&d(0,"app-code",0),n&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return r})();var be=(()=>{class r{items;selectedItem;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}code={basic:'<p-autocomplete class="ng-invalid ng-dirty" [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" placeholder="Code" />',html:`<div class="card flex justify-center">
    <p-autocomplete class="ng-invalid ng-dirty" [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" placeholder="Code" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-invalid-demo',
    templateUrl: './autocomplete-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteInvalidDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["invalid-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["placeholder","Code",1,"ng-invalid","ng-dirty",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-invalid-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),t(9,"div",0)(10,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedItem,l)||(o.selectedItem=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(11,"app-code",2)),n&2&&(p(10),g("ngModel",o.selectedItem),s("suggestions",o.suggestions),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var Me=(()=>{class r{value1;value2;items;search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}code={basic:`<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />`,html:`<div class="card">
    <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
    <p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

    <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
    <p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-multiple-demo',
    templateUrl: './autocomplete-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteMultipleDemo {
    value1: any[] | undefined;

    value2: any[] | undefined;

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-multiple-demo"]],standalone:!1,decls:14,vars:5,consts:[[1,"card"],["for","multiple-ac-1",1,"font-bold","mb-2","block"],["inputId","multiple-ac-1","multiple","","fluid","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","multiple-ac-2",1,"font-bold","mt-8","mb-2","block"],["inputId","multiple-ac-2","multiple","","fluid","",3,"ngModelChange","completeMethod","ngModel","typeahead"],["selector","autocomplete-multiple-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Multiple mode is enabled using "),t(3,"i"),e(4,"multiple"),i(),e(5," property used to select more than one value from the autocomplete. In this case, value reference should be an array."),i()(),t(6,"div",0)(7,"label",1),e(8,"With Typeahead"),i(),t(9,"p-autocomplete",2),y("ngModelChange",function(l){return h(o.value1,l)||(o.value1=l),l}),u("completeMethod",function(l){return o.search(l)}),i(),t(10,"label",3),e(11,"Without Typeahead"),i(),t(12,"p-autocomplete",4),y("ngModelChange",function(l){return h(o.value2,l)||(o.value2=l),l}),u("completeMethod",function(l){return o.search(l)}),i()(),d(13,"app-code",5)),n&2&&(p(9),g("ngModel",o.value1),s("suggestions",o.items),p(3),g("ngModel",o.value2),s("typeahead",!1),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var Se=(()=>{class r{countryService;countries;selectedCountry;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],o=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(o.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}code={basic:'<p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { CountryService } from '@/service/countryservice';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-objects-demo',
    templateUrl: './autocomplete-objects-demo.html',
    standalone: true,
    imports: [AutoComplete, FormsModule],
    providers: [CountryService]

})
export class AutocompleteObjectsDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(n){return new(n||r)(w(F))};static \u0275cmp=c({type:r,selectors:[["autocomplete-objects-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-objects-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," AutoComplete can also work with objects using the "),t(3,"i"),e(4,"field"),i(),e(5," property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as "),t(6,"i"),e(7,'{name: "United States", code:"USA"}'),i(),e(8,". "),i()(),t(9,"div",0)(10,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedCountry,l)||(o.selectedCountry=l),l}),u("completeMethod",function(l){return o.filterCountry(l)}),i()(),d(11,"app-code",2)),n&2&&(p(10),g("ngModel",o.selectedCountry),s("suggestions",o.filteredCountries),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var _e=(()=>{class r{items;formGroup;code={basic:`<form [formGroup]="formGroup">
    <p-autocomplete formControlName="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-autocomplete formControlName="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" />
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { CountryService } from '@/service/countryservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-reactive-forms-demo',
    templateUrl: './autocomplete-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, AutoComplete],
    providers: [CountryService]
})
export class AutocompleteReactiveFormsDemo implements OnInit {
    items: any[] | undefined;

    formGroup: FormGroup | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCountry: new FormControl(undefined),
        });
    }
}`};search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}ngOnInit(){this.formGroup=new H({selectedCountry:new K(void 0)})}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:3,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","selectedCountry",3,"completeMethod","suggestions"],["selector","autocomplete-reactive-forms-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"AutoComplete can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),t(6,"div",0)(7,"form",1)(8,"p-autocomplete",2),u("completeMethod",function(l){return o.search(l)}),i()()(),d(9,"app-code",3)),n&2&&(p(7),s("formGroup",o.formGroup),p(),s("suggestions",o.items),p(),s("code",o.code))},dependencies:[f,Y,C,R,v,b,Q,J],encapsulation:2})}return r})();var xe=(()=>{class r{items;value1;value2;value3;code={basic:`<p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
<p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
<p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'autocomplete-size-demo',
    templateUrl: './autocomplete-size-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteSizesDemo {
    items: any[] | undefined;

    value1: any;

    value2: any;

    value3: any;

    search() {
        this.items = [];
    }

}`};search(){this.items=[]}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["sizes-doc"]],standalone:!1,decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["placeholder","Normal","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["size","large","placeholder","Large","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-sizes-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"AutoComplete provides "),t(3,"i"),e(4,"small"),i(),e(5," and "),t(6,"i"),e(7,"large"),i(),e(8," sizes as alternatives to the base."),i()(),t(9,"div",0)(10,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.value1,l)||(o.value1=l),l}),u("completeMethod",function(){return o.search()}),i(),t(11,"p-autocomplete",2),y("ngModelChange",function(l){return h(o.value2,l)||(o.value2=l),l}),u("completeMethod",function(){return o.search()}),i(),t(12,"p-autocomplete",3),y("ngModelChange",function(l){return h(o.value3,l)||(o.value3=l),l}),u("completeMethod",function(){return o.search()}),i()(),d(13,"app-code",4)),n&2&&(p(10),g("ngModel",o.value1),s("suggestions",o.items),p(),g("ngModel",o.value2),s("suggestions",o.items),p(),g("ngModel",o.value3),s("suggestions",o.items),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();function Te(r,T){if(r&1&&(t(0,"div",6),d(1,"img",7),t(2,"div"),e(3),i()()),r&2){let a=T.$implicit;p(),O("flag flag-"+a.code.toLowerCase()),p(2),j(a.name)}}function Le(r,T){r&1&&(t(0,"div",8),e(1,"Available Countries"),i())}function qe(r,T){r&1&&(t(0,"div",9),d(1,"p-button",10),i())}var De=(()=>{class r{countryService;countries;selectedCountryAdvanced;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],o=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(o.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}code={basic:`<p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-autocomplete>`,html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="px-3 py-3">
                <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-autocomplete>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { CountryService } from '@/service/countryservice';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-template-demo',
    templateUrl: './autocomplete-template-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule, ButtonModule],
    providers: [CountryService]
})
export class AutocompleteTemplateDemo {
    countries: any[] | undefined;

    selectedCountryAdvanced: any[] | undefined;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(n){return new(n||r)(w(F))};static \u0275cmp=c({type:r,selectors:[["autocomplete-template-demo"]],standalone:!1,decls:12,vars:3,consts:[["item",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"font-medium","px-3","py-2"],[1,"px-3","py-3"],["label","Add New","fluid","","severity","secondary","text","","size","small","icon","pi pi-plus"]],template:function(n,o){if(n&1){let m=W();t(0,"app-docsectiontext")(1,"p"),e(2,"AutoComplete offers multiple templates for customization through templating."),i()(),t(3,"div",3)(4,"p-autocomplete",4),y("ngModelChange",function(A){return L(m),h(o.selectedCountryAdvanced,A)||(o.selectedCountryAdvanced=A),q(A)}),u("completeMethod",function(A){return o.filterCountry(A)}),k(5,Te,4,3,"ng-template",null,0,I)(7,Le,2,0,"ng-template",null,1,I)(9,qe,2,0,"ng-template",null,2,I),i()(),d(11,"app-code",5)}n&2&&(p(4),g("ngModel",o.selectedCountryAdvanced),s("suggestions",o.filteredCountries),p(7),s("code",o.code))},dependencies:[f,C,M,v,b,ee],encapsulation:2})}return r})();var Ee=(()=>{class r{selectedItem;filteredItems;items;filterItems(a){let n=[],o=a.query;for(let m=0;m<this.items.length;m++){let l=this.items[m];l.label.toLowerCase().indexOf(o.toLowerCase())==0&&n.push(l)}this.filteredItems=n}ngOnInit(){this.items=[];for(let a=0;a<1e4;a++)this.items.push({label:"Item "+a,value:"Item "+a})}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-virtual-scroll-demo',
    templateUrl: './autocomplete-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteVirtualScrollDemo {
    selectedItem: any;

    filteredItems: any[] | undefined;

    items: any[] | undefined;

    filterItems(event: AutoCompleteCompleteEvent) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.items as any[]).length; i++) {
            let item = (this.items as any[])[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }

        this.filteredItems = filtered;
    }

    ngOnInit() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-virtual-scroll-demo"]],standalone:!1,decls:15,vars:6,consts:[[1,"card","flex","justify-center"],["optionLabel","label",3,"ngModelChange","completeMethod","ngModel","virtualScroll","suggestions","virtualScrollItemSize","dropdown"],["selector","autocomplete-virtual-scroll-demo",3,"code"]],template:function(n,o){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Virtual scrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable virtual scrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),i(),e(5," property to "),t(6,"i"),e(7,"true"),i(),e(8," and defining "),t(9,"i"),e(10,"virtualScrollItemSize"),i(),e(11," to specify the height of an item. "),i()(),t(12,"div",0)(13,"p-autocomplete",1),y("ngModelChange",function(l){return h(o.selectedItem,l)||(o.selectedItem=l),l}),u("completeMethod",function(l){return o.filterItems(l)}),i()(),d(14,"app-code",2)),n&2&&(p(13),g("ngModel",o.selectedItem),s("virtualScroll",!0)("suggestions",o.filteredItems)("virtualScrollItemSize",34)("dropdown",!0),p(),s("code",o.code))},dependencies:[f,C,M,v,b],encapsulation:2})}return r})();var Ae=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=U({type:r});static \u0275inj=z({imports:[V,G,ie,X,B,oe,Z,G,re,me,te,B]})}return r})();var ke=()=>["AutoComplete"],we=(()=>{class r{docs=[{id:"import",label:"Import",component:Ce},{id:"basic",label:"Basic",component:se},{id:"reactive-forms",label:"Reactive Forms",component:_e},{id:"dropdown",label:"Dropdown",component:ce},{id:"objects",label:"Objects",component:Se},{id:"template",label:"Template",component:De},{id:"group",label:"Group",component:ye},{id:"forceselection",label:"Force Selection",component:he},{id:"virtualscroll",label:"Virtual Scroll",component:Ee},{id:"multiple",label:"Multiple",component:Me},{id:"floatlabel",label:"Float Label",component:fe},{id:"iftalabel",label:"Ifta Label",component:ve},{id:"sizes",label:"Sizes",component:xe},{id:"filled",label:"Filled",component:ue},{id:"invalid",label:"Invalid",component:be},{id:"disabled",label:"Disabled",component:de},{id:"accessibility",label:"Accessibility",component:pe}];static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular AutoComplete Component","header","AutoComplete","description","AutoComplete is an input component that provides real-time suggestions when being typed.","themeDocs","AutoComplete",3,"docs","apiDocs"]],template:function(n,o){n&1&&d(0,"app-doc",0),n&2&&s("docs",o.docs)("apiDocs",P(2,ke))},dependencies:[Ae,ne],encapsulation:2,changeDetection:0})}return r})();var vo=[{path:"",component:we}];export{vo as default};
