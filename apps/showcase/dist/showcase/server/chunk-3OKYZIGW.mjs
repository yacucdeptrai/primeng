import './polyfills.server.mjs';
import{a as L,b as de}from"./chunk-ZRV7YDR2.mjs";import{a as y,b as te}from"./chunk-NJTPIEO6.mjs";import{a as re,b as le}from"./chunk-TUWVE3ES.mjs";import{a as oe,b as ae}from"./chunk-IIW25JG6.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as p,d as ne,e as O}from"./chunk-HZSAMTDM.mjs";import{a as h,b as ie}from"./chunk-EK6YV52O.mjs";import{e as x,f as H,g as q,i as J,j as D,k as Q,l as X,m as Z,s as $,t as ee}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import"./chunk-DE54ZEHA.mjs";import"./chunk-YQJJ7I3T.mjs";import{f as B,j as K}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{n as V,v as G}from"./chunk-RUZVPFSZ.mjs";import{$b as W,Bb as d,Cb as i,Db as t,Dc as T,Eb as s,Lb as F,O as U,Qb as R,Sa as l,Sb as N,X as w,Y as _,ec as e,fc as j,gb as c,hb as z,jc as f,kc as u,lc as g,mb as I,pc as Y}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var me=(()=>{class n{code={basic:`<label for="date1">Date</label>
<p-datepicker inputId="date1"/>

<span id="date2">Date</span>
<p-datepicker ariaLabelledBy="date2"/>

<p-datepicker ariaLabel="Date"/>`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["date-picker-accessibility-doc"]],standalone:!1,decls:336,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,o){a&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5," Value to describe the component can either be provided via "),i(6,"i"),e(7,"label"),t(),e(8," tag combined with "),i(9,"i"),e(10,"inputId"),t(),e(11," prop or using "),i(12,"i"),e(13,"aria-labelledby"),t(),e(14,", "),i(15,"i"),e(16,"aria-label"),t(),e(17," props. The input element has "),i(18,"i"),e(19,"combobox"),t(),e(20," role in addition to "),i(21,"i"),e(22,"aria-autocomplete"),t(),e(23,' as "none", '),i(24,"i"),e(25,"aria-haspopup"),t(),e(26,' as "dialog" and '),i(27,"i"),e(28,"aria-expanded"),t(),e(29," attributes. The relation between the input and the popup is created with "),i(30,"i"),e(31,"aria-controls"),t(),e(32," attribute that refers to the id of the popup. "),t(),i(33,"p"),e(34," The optional DatePicker button requires includes "),i(35,"i"),e(36,"aria-haspopup"),t(),e(37,", "),i(38,"i"),e(39,"aria-expanded"),t(),e(40," for states along with "),i(41,"i"),e(42,"aria-controls"),t(),e(43," to define the relation between the popup and the button. The value to read is retrieved from the "),i(44,"i"),e(45,"chooseDate"),t(),e(46," key of the aria property from the "),i(47,"a",0),e(48,"locale"),t(),e(49," API. This label is also used for the "),i(50,"i"),e(51,"aria-label"),t(),e(52," of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value. "),t(),i(53,"p"),e(54," Popup has a "),i(55,"i"),e(56,"dialog"),t(),e(57," role along with "),i(58,"i"),e(59,"aria-modal"),t(),e(60," and "),i(61,"i"),e(62,"aria-label"),t(),e(63,". The navigation buttons at the header has an "),i(64,"i"),e(65,"aria-label"),t(),e(66," retrieved from the "),i(67,"i"),e(68,"prevYear"),t(),e(69,", "),i(70,"i"),e(71,"nextYear"),t(),e(72,", "),i(73,"i"),e(74,"prevMonth"),t(),e(75,", "),i(76,"i"),e(77,"nextMonth"),t(),e(78,","),i(79,"i"),e(80,"prevDecade"),t(),e(81," and "),i(82,"i"),e(83,"nextDecade"),t(),e(84," keys of the locale aria API. Similarly month picker button uses the "),i(85,"i"),e(86,"chooseMonth"),t(),e(87," and year picker button uses the "),i(88,"i"),e(89,"chooseYear"),t(),e(90," keys. "),t(),i(91,"p"),e(92," Main date table uses "),i(93,"i"),e(94,"grid"),t(),e(95," role that contains th elements with "),i(96,"i"),e(97,"col"),t(),e(98," as the scope along with "),i(99,"i"),e(100,"abbr"),t(),e(101," tag resolving to the full name of the month. Each date cell has an "),i(102,"i"),e(103,"aria-label"),t(),e(104," referring to the full date value. Buttons at the footer utilize their readable labels as "),i(105,"i"),e(106,"aria-label"),t(),e(107," as well. Selected date also receives the "),i(108,"i"),e(109,"aria-selected"),t(),e(110," attribute. "),t(),i(111,"p"),e(112," Timepicker spinner buttons get their labels for "),i(113,"i"),e(114,"aria-label"),t(),e(115," from the aria locale API using the "),i(116,"i"),e(117,"prevHour"),t(),e(118,", "),i(119,"i"),e(120,"nextHour"),t(),e(121,", "),i(122,"i"),e(123,"prevMinute"),t(),e(124,", "),i(125,"i"),e(126,"nextMinute"),t(),e(127,", "),i(128,"i"),e(129,"prevSecond"),t(),e(130,", "),i(131,"i"),e(132,"nextSecond"),t(),e(133,", "),i(134,"i"),e(135,"am"),t(),e(136," and "),i(137,"i"),e(138,"pm"),t(),e(139," keys. "),t(),i(140,"p"),e(141,"DatePicker also includes a hidden section that is only available to screen readers with "),i(142,"i"),e(143,"aria-live"),t(),e(144,' as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.'),t()(),s(145,"app-code",1),i(146,"h3"),e(147,"Choose Date Button Keyboard Support"),t(),i(148,"div",2)(149,"table",3)(150,"thead")(151,"tr")(152,"th"),e(153,"Key"),t(),i(154,"th"),e(155,"Function"),t()()(),i(156,"tbody")(157,"tr")(158,"td")(159,"i"),e(160,"space"),t()(),i(161,"td"),e(162,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()(),i(163,"tr")(164,"td")(165,"i"),e(166,"enter"),t()(),i(167,"td"),e(168,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()()()()(),i(169,"h3"),e(170,"Popup Keyboard Support"),t(),i(171,"div",2)(172,"table",3)(173,"thead")(174,"tr")(175,"th"),e(176,"Key"),t(),i(177,"th"),e(178,"Function"),t()()(),i(179,"tbody")(180,"tr")(181,"td")(182,"i"),e(183,"escape"),t()(),i(184,"td"),e(185,"Closes the popup and moves focus to the input element."),t()(),i(186,"tr")(187,"td")(188,"i"),e(189,"tab"),t()(),i(190,"td"),e(191,"Moves focus to the next focusable element within the popup."),t()(),i(192,"tr")(193,"td")(194,"i"),e(195,"shift"),t(),e(196," + "),i(197,"i"),e(198,"tab"),t()(),i(199,"td"),e(200,"Moves focus to the next focusable element within the popup."),t()()()()(),i(201,"h3"),e(202,"Header Buttons Keyboard Support"),t(),i(203,"div",2)(204,"table",3)(205,"thead")(206,"tr")(207,"th"),e(208,"Key"),t(),i(209,"th"),e(210,"Function"),t()()(),i(211,"tbody")(212,"tr")(213,"td")(214,"i"),e(215,"enter"),t()(),i(216,"td"),e(217,"Triggers the button action."),t()(),i(218,"tr")(219,"td")(220,"i"),e(221,"space"),t()(),i(222,"td"),e(223,"Triggers the button action."),t()()()()(),i(224,"h3"),e(225,"Date Grid Keyboard Support"),t(),i(226,"div",2)(227,"table",3)(228,"thead")(229,"tr")(230,"th"),e(231,"Key"),t(),i(232,"th"),e(233,"Function"),t()()(),i(234,"tbody")(235,"tr")(236,"td")(237,"i"),e(238,"enter"),t()(),i(239,"td"),e(240,"Selects the date, closes the popup and moves focus to the input element."),t()(),i(241,"tr")(242,"td")(243,"i"),e(244,"space"),t()(),i(245,"td"),e(246,"Selects the date, closes the popup and moves focus to the input element."),t()(),i(247,"tr")(248,"td")(249,"i"),e(250,"up arrow"),t()(),i(251,"td"),e(252,"Moves focus to the same day of the previous week."),t()(),i(253,"tr")(254,"td")(255,"i"),e(256,"down arrow"),t()(),i(257,"td"),e(258,"Moves focus to the same day of the next week."),t()(),i(259,"tr")(260,"td")(261,"i"),e(262,"right arrow"),t()(),i(263,"td"),e(264,"Moves focus to the next day."),t()(),i(265,"tr")(266,"td")(267,"i"),e(268,"left arrow"),t()(),i(269,"td"),e(270,"Moves focus to the previous day."),t()(),i(271,"tr")(272,"td")(273,"i"),e(274,"home"),t()(),i(275,"td"),e(276,"Moves focus to the first day of the current week."),t()(),i(277,"tr")(278,"td")(279,"i"),e(280,"end"),t()(),i(281,"td"),e(282,"Moves focus to the last day of the current week."),t()(),i(283,"tr")(284,"td")(285,"i"),e(286,"page up"),t()(),i(287,"td"),e(288,"Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker."),t()(),i(289,"tr")(290,"td")(291,"i"),e(292,"shift"),t(),e(293," + "),i(294,"i"),e(295,"page up"),t()(),i(296,"td"),e(297,"Changes the date to previous year in date picker mode. Has no effect in month or year picker"),t()(),i(298,"tr")(299,"td")(300,"i"),e(301,"page down"),t()(),i(302,"td"),e(303,"Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker."),t()(),i(304,"tr")(305,"td")(306,"i"),e(307,"shift"),t(),e(308," + "),i(309,"i"),e(310,"page down"),t()(),i(311,"td"),e(312,"Changes the date to next year in date picker mode. Has no effect in month or year picker"),t()()()()(),i(313,"h3"),e(314,"Footer Buttons Keyboard Support"),t(),i(315,"div",2)(316,"table",3)(317,"thead")(318,"tr")(319,"th"),e(320,"Key"),t(),i(321,"th"),e(322,"Function"),t()()(),i(323,"tbody")(324,"tr")(325,"td")(326,"i"),e(327,"enter"),t()(),i(328,"td"),e(329,"Triggers the button action."),t()(),i(330,"tr")(331,"td")(332,"i"),e(333,"space"),t()(),i(334,"td"),e(335,"Triggers the button action."),t()()()()()()),a&2&&(l(145),d("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[h,p],encapsulation:2})}return n})();var pe=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'datepicker-basic-demo',
    templateUrl: './datepicker-basic-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerBasicDemo {
    date: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-basic-demo"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","datepicker-basic-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Two-way value binding is defined using the standard "),i(3,"i"),e(4,"ngModel"),t(),e(5," directive referencing to a "),i(6,"i"),e(7,"Date"),t(),e(8," property."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(11,"app-code",2)),a&2&&(l(10),f("ngModel",o.date),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var ce=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" [showButtonBar]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [showButtonBar]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-buttonbar-demo',
    templateUrl: './datepicker-buttonbar-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerButtonbarDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-buttonbar-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","showButtonBar"],["selector","datepicker-buttonbar-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"When "),i(3,"i"),e(4,"showButtonBar"),t(),e(5," is present, today and clear buttons are displayed at the footer."),t()(),i(6,"div",0)(7,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(8,"app-code",2)),a&2&&(l(7),f("ngModel",o.date),d("showButtonBar",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();function Be(n,P){if(n&1&&(i(0,"strong",6),e(1),t()),n&2){let m=N().$implicit;l(),j(m.day)}}function Le(n,P){if(n&1&&e(0),n&2){let m=N().$implicit;j(m.day)}}function Ae(n,P){if(n&1&&I(0,Be,2,1,"strong",5)(1,Le,1,1,"ng-template",null,1,T),n&2){let m=P.$implicit,a=W(2);d("ngIf",m.day>10&&m.day<15)("ngIfElse",a)}}var se=(()=>{class n{date;code={basic:`<p-datepicker [(ngModel)]="date">
    <ng-template #date let-date>
        <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
        <ng-template #elseBlock>{{ date.day }}</ng-template>
    </ng-template>
</p-datepicker>`,html:`<div class="card flex justify-center">
   <p-datepicker [(ngModel)]="date">
        <ng-template #date let-date>
            <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
            <ng-template #elseBlock>{{ date.day }}</ng-template>
        </ng-template>
    </p-datepicker>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-datetemplate-demo',
    templateUrl: './datepicker-datetemplate-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule]
})
export class DatePickerDatetemplateDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-datetemplate-demo"]],standalone:!1,decls:11,vars:2,consts:[["date",""],["elseBlock",""],[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","datepicker-datetemplate-demo",3,"code"],["style","text-decoration: line-through",4,"ngIf","ngIfElse"],[2,"text-decoration","line-through"]],template:function(a,o){if(a&1){let k=F();i(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside date cells with the "),i(3,"i"),e(4,"ng-template"),t(),e(5," property that takes a Date as a parameter."),t()(),i(6,"div",2)(7,"p-datepicker",3),g("ngModelChange",function(E){w(k);let A=W(9);return u(A,E),_(E)}),I(8,Ae,3,2,"ng-template",null,0,T),t()(),s(10,"app-code",4)}if(a&2){let k=W(9);l(7),f("ngModel",k),l(3),d("code",o.code)}},dependencies:[V,h,p,x,D,y],encapsulation:2})}return n})();var fe=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-disabled-demo',
    templateUrl: './datepicker-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerDisabledDemo {
    date: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-disabled-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","datepicker-disabled-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"When "),i(3,"i"),e(4,"disabled"),t(),e(5," is present, the element cannot be edited and focused."),t()(),i(6,"div",0)(7,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(8,"app-code",2)),a&2&&(l(7),f("ngModel",o.date),d("disabled",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var ue=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" variant="filled" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-filled-demo',
    templateUrl: './datepicker-filled-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerFilledDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-filled-demo"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","datepicker-filled-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),i(3,"i"),e(4,"variant"),t(),e(5," property as "),i(6,"i"),e(7,"filled"),t(),e(8," to display the component with a higher visual emphasis than the default "),i(9,"i"),e(10,"outlined"),t(),e(11," style."),t()(),i(12,"div",0)(13,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(14,"app-code",2)),a&2&&(l(13),f("ngModel",o.date),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var ge=(()=>{class n{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'datepicker-float-label-demo',
    templateUrl: './datepicker-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker, FloatLabel]
})
export class DatePickerFloatLabelDemo {
    value1: Date | undefined;

    value2: Date | undefined;

    value3: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-float-label-demo"]],standalone:!1,decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","on_label"],["selector","datepicker-float-label-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),i(3,"a",0),e(4,"FloatLabel"),t(),e(5," documentation for more information. "),t()(),i(6,"div",1)(7,"p-floatlabel")(8,"p-datepicker",2),g("ngModelChange",function(r){return u(o.value1,r)||(o.value1=r),r}),t(),i(9,"label",3),e(10,"Over Label"),t()(),i(11,"p-floatlabel",4)(12,"p-datepicker",5),g("ngModelChange",function(r){return u(o.value2,r)||(o.value2=r),r}),t(),i(13,"label",6),e(14,"In Label"),t()(),i(15,"p-floatlabel",7)(16,"p-datepicker",8),g("ngModelChange",function(r){return u(o.value3,r)||(o.value3=r),r}),t(),i(17,"label",9),e(18,"On Label"),t()()(),s(19,"app-code",10)),a&2&&(l(8),f("ngModel",o.value1),l(4),f("ngModel",o.value2),l(4),f("ngModel",o.value3),l(3),d("code",o.code))},dependencies:[B,h,p,x,D,oe,y],encapsulation:2})}return n})();var he=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-format-demo',
    templateUrl: './datepicker-format-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerFormatDemo {
    date: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-format-demo"]],standalone:!1,decls:81,vars:2,consts:[[1,"mb-6","leading-loose"],[1,"card","flex","justify-center"],["dateFormat","dd.mm.yy",3,"ngModelChange","ngModel"],["selector","datepicker-format-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Default date format is "),i(3,"i"),e(4,"mm/dd/yy"),t(),e(5," which can be customized using the "),i(6,"i"),e(7,"dateFormat"),t(),e(8," property. Following options can be a part of the format."),t(),i(9,"ul",0)(10,"li")(11,"i"),e(12,"d"),t(),e(13," - day of month (no leading zero)"),t(),i(14,"li")(15,"i"),e(16,"dd"),t(),e(17," - day of month (two digit)"),t(),i(18,"li")(19,"i"),e(20,"o"),t(),e(21," - day of the year (no leading zeros)"),t(),i(22,"li")(23,"i"),e(24,"oo"),t(),e(25," - day of the year (three digit)"),t(),i(26,"li")(27,"i"),e(28,"D"),t(),e(29," - day name short"),t(),i(30,"li")(31,"i"),e(32,"DD"),t(),e(33," - day name long"),t(),i(34,"li")(35,"i"),e(36,"m"),t(),e(37," - month of year (no leading zero)"),t(),i(38,"li")(39,"i"),e(40,"mm"),t(),e(41," - month of year (two digit)"),t(),i(42,"li")(43,"i"),e(44,"M"),t(),e(45," - month name short"),t(),i(46,"li")(47,"i"),e(48,"MM"),t(),e(49," - month name long"),t(),i(50,"li")(51,"i"),e(52,"y"),t(),e(53," - year (two digit)"),t(),i(54,"li")(55,"i"),e(56,"yy"),t(),e(57," - year (four digit)"),t(),i(58,"li")(59,"i"),e(60,"@"),t(),e(61," - Unix timestamp (ms since 01/01/1970)"),t(),i(62,"li")(63,"i"),e(64,"!"),t(),e(65," - Windows ticks (100ns since 01/01/0001)"),t(),i(66,"li")(67,"i"),e(68,"'...'"),t(),e(69," - literal text"),t(),i(70,"li")(71,"i"),e(72,"''"),t(),e(73," - single quote"),t(),i(74,"li")(75,"i"),e(76,"anything else"),t(),e(77," - literal text"),t()()(),i(78,"div",1)(79,"p-datepicker",2),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(80,"app-code",3)),a&2&&(l(79),f("ngModel",o.date),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();function Oe(n,P){if(n&1){let m=F();i(0,"i",10),R("click",function(o){let k=w(m).clickCallBack;return _(k(o))}),t()}}var ye=(()=>{class n{date1;date2;date3;code={basic:`<p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />

<p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />

<p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
    <ng-template #inputicon let-clickCallBack="clickCallBack">
        <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
    </ng-template>
</p-datepicker>`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
        <p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />
    </div>

    <div class="flex-auto">
        <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
        <p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />
    </div>

    <div class="flex-auto">
        <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
        <p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
            <ng-template #inputicon let-clickCallBack="clickCallBack">
                <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
            </ng-template>
        </p-datepicker>
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'datepicker-icon-demo',
    templateUrl: './datepicker-icon-demo.html',
    standalone: true,
    imports: [DatePickerModule, FormsModule, FluidModule]
})
export class DatePickerIconDemo {
    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-icon-demo"]],standalone:!1,decls:22,vars:11,consts:[["inputicon",""],[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","buttondisplay",1,"font-bold","block","mb-2"],["inputId","buttondisplay",3,"ngModelChange","ngModel","showIcon","showOnFocus"],["for","icondisplay",1,"font-bold","block","mb-2"],["inputId","icondisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon"],["for","templatedisplay",1,"font-bold","block","mb-2"],["inputId","templatedisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon","timeOnly"],["selector","datepicker-icon-demo",3,"code"],[1,"pi","pi-clock",3,"click"]],template:function(a,o){if(a&1){let k=F();i(0,"app-docsectiontext")(1,"p"),e(2,"An additional icon is displayed next to the input field when "),i(3,"i"),e(4,"showIcon"),t(),e(5," is present."),t()(),i(6,"p-fluid",1)(7,"div",2)(8,"label",3),e(9," Button "),t(),i(10,"p-datepicker",4),g("ngModelChange",function(E){return w(k),u(o.date1,E)||(o.date1=E),_(E)}),t()(),i(11,"div",2)(12,"label",5),e(13," Default Icon "),t(),i(14,"p-datepicker",6),g("ngModelChange",function(E){return w(k),u(o.date2,E)||(o.date2=E),_(E)}),t()(),i(15,"div",2)(16,"label",7),e(17," Custom Icon "),t(),i(18,"p-datepicker",8),g("ngModelChange",function(E){return w(k),u(o.date3,E)||(o.date3=E),_(E)}),I(19,Oe,1,0,"ng-template",null,0,T),t()()(),s(21,"app-code",9)}a&2&&(l(10),f("ngModel",o.date1),d("showIcon",!0)("showOnFocus",!1),l(4),f("ngModel",o.date2),d("iconDisplay","input")("showIcon",!0),l(4),f("ngModel",o.date3),d("iconDisplay","input")("showIcon",!0)("timeOnly",!0),l(3),d("code",o.code))},dependencies:[h,p,x,D,y,L],encapsulation:2})}return n})();var xe=(()=>{class n{value;code={basic:`<p-iftalabel>
    <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
    <label for="date">Date</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
        <label for="date">Date</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'datepicker-ifta-label-demo',
    templateUrl: './datepicker-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule, IftaLabelModule]
})
export class DatepickerIftaLabelDemo {
    value: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-ifta-label-demo"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","date","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","date"],["selector","datepicker-ifta-label-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),i(3,"a",0),e(4,"IftaLabel"),t(),e(5," documentation for more information."),t()(),i(6,"div",1)(7,"p-iftalabel")(8,"p-datepicker",2),g("ngModelChange",function(r){return u(o.value,r)||(o.value=r),r}),t(),i(9,"label",3),e(10,"Date"),t()()(),s(11,"app-code",4)),a&2&&(l(8),f("ngModel",o.value),l(3),d("code",o.code))},dependencies:[B,h,p,x,D,re,y],encapsulation:2})}return n})();var De=(()=>{class n{code={typescript:"import { DatePickerModule } from 'primeng/datepicker';"};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,o){a&1&&s(0,"app-code",0),a&2&&d("code",o.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return n})();var ke=(()=>{class n{date;code={basic:'<p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-inline-demo',
    templateUrl: './datepicker-inline-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerInlineDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-inline-demo"]],standalone:!1,decls:9,vars:4,consts:[[1,"card","flex","justify-center"],[1,"max-w-full",3,"ngModelChange","ngModel","inline","showWeek"],["selector","datepicker-inline-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker is displayed as a popup by default, add "),i(3,"i"),e(4,"inline"),t(),e(5," property to customize this behavior."),t()(),i(6,"div",0)(7,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(8,"app-code",2)),a&2&&(l(7),f("ngModel",o.date),d("inline",!0)("showWeek",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Me=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" class="ng-invalid ng-dirty" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" class="ng-invalid ng-dirty" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-invalid-demo',
    templateUrl: './datepicker-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerInvalidDemo {
    date: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-invalid-demo"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","datepicker-invalid-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),i(3,"i"),e(4,"ng-invalid"),t(),e(5," and "),i(6,"i"),e(7,"ng-dirty"),t(),e(8," class to indicate a failed validation."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(11,"app-code",2)),a&2&&(l(10),f("ngModel",o.date),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-local-demo"]],standalone:!1,decls:6,vars:0,consts:[["href","/configuration/#locale"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Locale for different languages and formats is defined globally, refer to the "),i(3,"a",0),e(4,"PrimeNG Locale"),t(),e(5," configuration for more information. "),t()())},dependencies:[p],encapsulation:2})}return n})();var ve=(()=>{class n{date;minDate;maxDate;ngOnInit(){let m=new Date,a=m.getMonth(),o=m.getFullYear(),k=a===0?11:a-1,r=k===11?o-1:o,E=a===11?0:a+1,A=E===0?o+1:o;this.minDate=new Date,this.minDate.setMonth(k),this.minDate.setFullYear(r),this.maxDate=new Date,this.maxDate.setMonth(E),this.maxDate.setFullYear(A)}code={basic:'<p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-minmax-demo',
    templateUrl: './datepicker-minmax-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMinmaxDemo implements OnInit {
    date: Date | undefined;

    minDate: Date | undefined;

    maxDate: Date | undefined;

    ngOnInit() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
    }
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-minmax-demo"]],standalone:!1,decls:12,vars:5,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","minDate","maxDate","readonlyInput"],["selector","datepicker-minmax-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Boundaries for the permitted dates that can be entered are defined with "),i(3,"i"),e(4,"minDate"),t(),e(5," and "),i(6,"i"),e(7,"maxDate"),t(),e(8," properties."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(11,"app-code",2)),a&2&&(l(10),f("ngModel",o.date),d("minDate",o.minDate)("maxDate",o.maxDate)("readonlyInput",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var be=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-month-demo',
    templateUrl: './datepicker-month-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMonthDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-month-demo"]],standalone:!1,decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["view","month","dateFormat","mm/yy",3,"ngModelChange","ngModel","readonlyInput"],["selector","datepicker-month-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Month only picker is enabled by specifying "),i(3,"i"),e(4,"view"),t(),e(5," as "),i(6,"i"),e(7,"month"),t(),e(8," in addition to a suitable "),i(9,"i"),e(10,"dateFormat"),t(),e(11,"."),t()(),i(12,"div",0)(13,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(14,"app-code",2)),a&2&&(l(13),f("ngModel",o.date),d("readonlyInput",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Ce=(()=>{class n{dates;code={basic:'<p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-multiple-demo',
    templateUrl: './datepicker-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMultipleDemo {
    dates: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-multiple-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["selectionMode","multiple",3,"ngModelChange","ngModel","readonlyInput"],["selector","datepicker-multiple-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"In order to choose multiple dates, set "),i(3,"i"),e(4,"selectionMode"),t(),e(5," as "),i(6,"i"),e(7,"multiple"),t(),e(8,". In this mode, the value binding should be an array."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.dates,r)||(o.dates=r),r}),t()(),s(11,"app-code",2)),a&2&&(l(10),f("ngModel",o.dates),d("readonlyInput",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Ee=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-multiplemonths-demo',
    templateUrl: './datepicker-multiplemonths-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMultiplemonthsDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-multiplemonths-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","numberOfMonths"],["selector","datepicker-multiplemonths-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Number of months to display is configured with the "),i(3,"i"),e(4,"numberOfMonths"),t(),e(5," property."),t()(),i(6,"div",0)(7,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(8,"app-code",2)),a&2&&(l(7),f("ngModel",o.date),d("numberOfMonths",2),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var we=(()=>{class n{rangeDates;code={basic:'<p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-range-demo',
    templateUrl: './datepicker-range-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerRangeDemo {
    rangeDates: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-range-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["selectionMode","range",3,"ngModelChange","ngModel","readonlyInput"],["selector","datepicker-range-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A range of dates can be selected by defining "),i(3,"i"),e(4,"selectionMode"),t(),e(5," as "),i(6,"i"),e(7,"range"),t(),e(8,", in this case the bound value would be an array with two values where first date is the start of the range and second date is the end."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.rangeDates,r)||(o.rangeDates=r),r}),t()(),s(11,"app-code",2)),a&2&&(l(10),f("ngModel",o.rangeDates),d("readonlyInput",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var _e=(()=>{class n{formGroup;ngOnInit(){this.formGroup=new q({date:new J(null)})}code={basic:`<form [formGroup]="formGroup">
    <p-datepicker formControlName="date" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-datepicker formControlName="date" />
    </form>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-reactive-forms-demo',
    templateUrl: './datepicker-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, DatePicker]
})
export class DatePickerReactiveFormsDemo {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            date: new FormControl<Date | null>(null)
        });
    }
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","date"],["selector","datepicker-reactive-forms-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker can also be used with reactive forms. In this case, the "),i(3,"i"),e(4,"formControlName"),t(),e(5," property is used to bind the component to a form control."),t()(),i(6,"div",0)(7,"form",1),s(8,"p-datepicker",2),t()(),s(9,"app-code",3)),a&2&&(l(7),d("formGroup",o.formGroup),l(2),d("code",o.code))},dependencies:[h,p,Q,x,H,Z,X,y],encapsulation:2})}return n})();var Ie=(()=>{class n{value1;value2;value3;code={basic:`<p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
    <p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
    <p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'datepicker-sizes-demo',
    templateUrl: './datepicker-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerSizesDemo {
    value1: Date | undefined;

    value2: Date | undefined;

    value3: Date | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-sizes-demo"]],standalone:!1,decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["placeholder","Normal","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["size","large","placeholder","Large","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["selector","datepicker-sizes-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker provides "),i(3,"i"),e(4,"small"),t(),e(5," and "),i(6,"i"),e(7,"large"),t(),e(8," sizes as alternatives to the base."),t()(),i(9,"div",0)(10,"p-datepicker",1),g("ngModelChange",function(r){return u(o.value1,r)||(o.value1=r),r}),t(),i(11,"p-datepicker",2),g("ngModelChange",function(r){return u(o.value2,r)||(o.value2=r),r}),t(),i(12,"p-datepicker",3),g("ngModelChange",function(r){return u(o.value3,r)||(o.value3=r),r}),t()(),s(13,"app-code",4)),a&2&&(l(10),f("ngModel",o.value1),l(),f("ngModel",o.value2),l(),f("ngModel",o.value3),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Fe=(()=>{class n{datetime12h;datetime24h;time;code={basic:`<p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />

<p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />

<p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
        <p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />
    </div>
    <div class="flex-auto">
        <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
        <p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />
    </div>
    <div class="flex-auto">
        <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
        <p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'datepicker-time-demo',
    templateUrl: './datepicker-time-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker, Fluid]
})
export class DatePickerTimeDemo {

    datetime12h: Date[] | undefined;

    datetime24h: Date[] | undefined;

    time: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-time-demo"]],standalone:!1,decls:26,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","calendar-12h",1,"font-bold","block","mb-2"],["inputId","calendar-12h",3,"ngModelChange","ngModel","showTime","hourFormat"],["for","calendar-24h",1,"font-bold","block","mb-2"],["inputId","calendar-24h",3,"ngModelChange","ngModel","showTime","hourFormat"],["for","calendar-timeonly",1,"font-bold","block","mb-2"],["inputId","calendar-timeonly",3,"ngModelChange","ngModel","timeOnly"],["selector","datepicker-time-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A time picker is displayed when "),i(3,"i"),e(4,"showTime"),t(),e(5," is enabled where 12/24 hour format is configured with "),i(6,"i"),e(7,"hourFormat"),t(),e(8," property. In case, only time needs to be selected, add "),i(9,"i"),e(10,"timeOnly"),t(),e(11," to hide the date section."),t()(),i(12,"p-fluid",0)(13,"div",1)(14,"label",2),e(15," 12h Format "),t(),i(16,"p-datepicker",3),g("ngModelChange",function(r){return u(o.datetime12h,r)||(o.datetime12h=r),r}),t()(),i(17,"div",1)(18,"label",4),e(19," 24h Format "),t(),i(20,"p-datepicker",5),g("ngModelChange",function(r){return u(o.datetime24h,r)||(o.datetime24h=r),r}),t()(),i(21,"div",1)(22,"label",6),e(23," Time Only "),t(),i(24,"p-datepicker",7),g("ngModelChange",function(r){return u(o.time,r)||(o.time=r),r}),t()()(),s(25,"app-code",8)),a&2&&(l(16),f("ngModel",o.datetime12h),d("showTime",!0)("hourFormat",12),l(4),f("ngModel",o.datetime24h),d("showTime",!0)("hourFormat",24),l(4),f("ngModel",o.time),d("timeOnly",!0),l(),d("code",o.code))},dependencies:[h,p,x,D,y,L],encapsulation:2})}return n})();var Te=(()=>{class n{date;code={basic:'<p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'datepicker-year-demo',
    templateUrl: './datepicker-year-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerYearDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["datepicker-year-demo"]],standalone:!1,decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["view","year","dateFormat","yy",3,"ngModelChange","ngModel"],["selector","datepicker-year-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Specifying "),i(3,"i"),e(4,"view"),t(),e(5," as "),i(6,"i"),e(7,"year"),t(),e(8," in addition to a suitable "),i(9,"i"),e(10,"dateFormat"),t(),e(11," enables the year picker."),t()(),i(12,"div",0)(13,"p-datepicker",1),g("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),s(14,"app-code",2)),a&2&&(l(13),f("ngModel",o.date),l(),d("code",o.code))},dependencies:[h,p,x,D,y],encapsulation:2})}return n})();var Pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=z({type:n});static \u0275inj=U({imports:[G,K,ie,O,$,ee,ae,le,te,de,O]})}return n})();var Ue=()=>["DatePicker"],We=(()=>{class n{docs=[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:pe},{id:"reactive-forms",label:"Reactive Forms",component:_e},{id:"format",label:"Format",component:he},{id:"locale",label:"Locale",component:Se},{id:"icon",label:"Icon",component:ye},{id:"minmax",label:"Min / Max",component:ve},{id:"multiple",label:"Multiple",component:Ce},{id:"range",label:"Range",component:we},{id:"buttonbar",label:"Button Bar",component:ce},{id:"time",label:"Time",component:Fe},{id:"monthpicker",label:"Month Picker",component:be},{id:"yearpicker",label:"Year Picker",component:Te},{id:"multiplemonths",label:"Multiple Months",component:Ee},{id:"datetemplate",label:"Date Template",component:se},{id:"inline",label:"Inline",component:ke},{id:"floatlabel",label:"Float Label",component:ge},{id:"iftalabel",label:"Ifta Label",component:xe},{id:"sizes",label:"Sizes",component:Ie},{id:"filled",label:"Filled",component:ue},{id:"invalid",label:"Invalid",component:Me},{id:"disabled",label:"Disabled",component:fe},{id:"accessibility",label:"Accessibility",component:me}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular DatePicker Component","header","DatePicker","description","DatePicker is an input component to select a date.","themeDocs","datepicker",3,"docs","apiDocs"]],template:function(a,o){a&1&&s(0,"app-doc",0),a&2&&d("docs",o.docs)("apiDocs",Y(2,Ue))},dependencies:[Pe,ne],encapsulation:2})}return n})();var dn=[{path:"",component:We}];export{dn as default};
