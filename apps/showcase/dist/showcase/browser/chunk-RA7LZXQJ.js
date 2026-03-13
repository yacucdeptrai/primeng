import{b,c as x,d as R}from"./chunk-HCAMTZMF.js";import{a as f,d as O,e as I}from"./chunk-I6RUY6VJ.js";import{a as m,b as F}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import{a as v}from"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import"./chunk-DEL7GGHP.js";import{i as w}from"./chunk-UHCZASEU.js";import"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{u as B,y as S}from"./chunk-O4W5DSIC.js";import{Ab as s,Mc as C,O as V,Qa as p,S as c,Za as y,ac as t,eb as d,fb as E,ka as g,lc as k,sa as h,xb as l,yb as i,zb as r}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var j=(()=>{class a{code={html:'<p-chart type="line" [data]="data" ariaLabel="Data" />'};static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["chart-accessibility-doc"]],standalone:!1,decls:14,vars:2,consts:[[1,"doc-section-description"],["href","https://www.chartjs.org/docs/latest/general/accessibility.html",1,"text-primary","font-medium","hover:underline"],[3,"code","hideToggleCode"]],template:function(o,n){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),t(4,"Screen Reader"),r(),i(5,"p"),t(6," Chart components internally use "),i(7,"i"),t(8,"canvas"),r(),t(9," element, refer to the "),i(10,"a",1),t(11,"Chart.js accessibility"),r(),t(12," guide for more information. "),r()()(),s(13,"app-code",2),r()),o&2&&(p(13),l("code",n.code)("hideToggleCode",!0))},dependencies:[m,f],encapsulation:2})}return a})();var T=(()=>{class a{cd;basicData;basicOptions;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.basicData={labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(249, 115, 22, 0.2)","rgba(6, 182, 212, 0.2)","rgb(107, 114, 128, 0.2)","rgba(139, 92, 246, 0.2)"],borderColor:["rgb(249, 115, 22)","rgb(6, 182, 212)","rgb(107, 114, 128)","rgb(139, 92, 246)"],borderWidth:1}]},this.basicOptions={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n},grid:{color:u}},y:{beginAtZero:!0,ticks:{color:n},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="basicData" [options]="basicOptions" />',html:`<div class="card">
    <p-chart type="bar" [data]="basicData" [options]="basicOptions" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-basic-demo',
    templateUrl: './chart-basic-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartBasicDemo implements OnInit {
    basicData: any;

    basicOptions: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.basicData = {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: [
                            'rgba(249, 115, 22, 0.2)',
                            'rgba(6, 182, 212, 0.2)',
                            'rgb(107, 114, 128, 0.2)',
                            'rgba(139, 92, 246, 0.2)',
                        ],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-basic-demo"]],standalone:!1,decls:42,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-basic-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," A chart is configured with 3 properties; "),i(3,"i"),t(4,"type"),r(),t(5,", "),i(6,"i"),t(7,"data"),r(),t(8," and "),i(9,"i"),t(10,"options"),r(),t(11,". Chart type is defined using the "),i(12,"i"),t(13,"type"),r(),t(14," property that accepts "),i(15,"i"),t(16,"pie"),r(),t(17,", "),i(18,"i"),t(19,"doughtnut"),r(),t(20,", "),i(21,"i"),t(22,"line"),r(),t(23,", "),i(24,"i"),t(25,"bar"),r(),t(26,", "),i(27,"i"),t(28,"radar"),r(),t(29," and "),i(30,"i"),t(31,"polarArea"),r(),t(32," as a value. The "),i(33,"i"),t(34,"data"),r(),t(35," defines datasets represented with the chart and the "),i(36,"i"),t(37,"options"),r(),t(38," provide numerous customization options to customize the presentation. "),r()(),i(39,"div",0),s(40,"p-chart",1),r(),s(41,"app-code",2)),o&2&&(p(40),l("data",n.basicData)("options",n.basicOptions),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var L=(()=>{class a{code={typescript:"npm install chart.js --save"};static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["chartjs-doc"]],standalone:!1,decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"To begin with, first you must install the charts.js package using npm and then include it in your project. An example with CLI would be;"),r()(),s(3,"app-code",0)),o&2&&(p(3),l("code",n.code)("hideToggleCode",!0))},dependencies:[m,f],encapsulation:2})}return a})();var J=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:e.getPropertyValue("--p-orange-500"),borderWidth:2,fill:!1,tension:.4,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--p-gray-500"),data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--p-cyan-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n},grid:{color:u}},y:{ticks:{color:n},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-combo-demo',
    templateUrl: './chart-combo-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartComboDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-combo-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-combo-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Different chart types can be combined in the same graph using the "),i(3,"i"),t(4,"type"),r(),t(5," option of a dataset."),r()(),i(6,"div",0),s(7,"p-chart",1),r(),s(8,"app-code",2)),o&2&&(p(7),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var _=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color");this.data={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:[e.getPropertyValue("--p-cyan-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-gray-500")],hoverBackgroundColor:[e.getPropertyValue("--p-cyan-400"),e.getPropertyValue("--p-orange-400"),e.getPropertyValue("--p-gray-400")]}]},this.options={cutout:"60%",plugins:{legend:{labels:{color:o}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="doughnut" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="doughnut" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-doughnut-demo',
    templateUrl: './chart-doughnut-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartDoughnutDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');

            this.data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.options = {
                cutout: '60%',
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-doughnut-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","doughnut",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-doughnut-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var U=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--p-cyan-500"),borderColor:e.getPropertyValue("--p-cyan-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--p-gray-500"),borderColor:e.getPropertyValue("--p-gray-500"),data:[28,48,40,19,86,27,90]}]},this.options={indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:n},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-horizontal-bar-demo',
    templateUrl: './chart-horizontal-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartHorizontalBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                indexAxis: 'y',
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-horizontal-bar-demo"]],standalone:!1,decls:12,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-horizontal-bar-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A bar chart is rendered horizontally when "),i(3,"i"),t(4,"indexAxis"),r(),t(5," option is set as "),i(6,"i"),t(7,"y"),r(),t(8,"."),r()(),i(9,"div",0),s(10,"p-chart",1),r(),s(11,"app-code",2)),o&2&&(p(10),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var z=(()=>{class a{code={typescript:"import { ChartModule } from 'primeng/chart';"};static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["chart-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&s(0,"app-code",0),o&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[m],encapsulation:2})}return a})();var N=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:e.getPropertyValue("--p-cyan-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderColor:e.getPropertyValue("--p-gray-500"),tension:.4}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n},grid:{color:u,drawBorder:!1}},y:{ticks:{color:n},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-line-demo',
    templateUrl: './chart-line-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLineDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        tension: 0.4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-line-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-line-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var H=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.4,borderColor:e.getPropertyValue("--p-cyan-500")},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderDash:[5,5],tension:.4,borderColor:e.getPropertyValue("--p-orange-500")},{label:"Third Dataset",data:[12,51,62,33,21,62,45],fill:!0,borderColor:e.getPropertyValue("--p-gray-500"),tension:.4,backgroundColor:"rgba(107, 114, 128, 0.2)"}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n},grid:{color:u}},y:{ticks:{color:n},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-line-style-demo',
    templateUrl: './chart-line-style-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLineStyleDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500')
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--p-orange-500')
                    },
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(107, 114, 128, 0.2)'
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-line-style-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-line-style-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Various styles of a line series can be customized to display customizations like an area chart."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var Q=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["methods-doc"]],standalone:!1,decls:32,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t(5,"Name"),r(),i(6,"th"),t(7,"Parameters"),r(),i(8,"th"),t(9,"Description"),r()()(),i(10,"tbody")(11,"tr")(12,"td"),t(13,"refresh"),r(),i(14,"td"),t(15,"-"),r(),i(16,"td"),t(17,"Redraws the graph with new data."),r()(),i(18,"tr")(19,"td"),t(20,"reinit"),r(),i(21,"td"),t(22,"-"),r(),i(23,"td"),t(24,"Destroys the graph first and then creates it again."),r()(),i(25,"tr")(26,"td"),t(27,"generateLegend"),r(),i(28,"td"),t(29,"-"),r(),i(30,"td"),t(31,"Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options."),r()()()()())},encapsulation:2})}return a})();var W=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",fill:!1,borderColor:e.getPropertyValue("--p-cyan-500"),yAxisID:"y",tension:.4,data:[65,59,80,81,56,55,10]},{label:"Dataset 2",fill:!1,borderColor:e.getPropertyValue("--p-gray-500"),yAxisID:"y1",tension:.4,data:[28,48,40,19,86,27,90]}]},this.options={stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n},grid:{color:u}},y:{type:"linear",display:!0,position:"left",ticks:{color:n},grid:{color:u}},y1:{type:"linear",display:!0,position:"right",ticks:{color:n},grid:{drawOnChartArea:!1,color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject , OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-multi-axis-demo',
    templateUrl: './chart-multi-axis-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartMultiAxisDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        yAxisID: 'y',
                        tension: 0.4,
                        data: [65, 59, 80, 81, 56, 55, 10]
                    },
                    {
                        label: 'Dataset 2',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        yAxisID: 'y1',
                        tension: 0.4,
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                stacked: false,
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-multi-axis-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-multi-axis-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Multiple axes can be added using the "),i(3,"i"),t(4,"scales"),r(),t(5," option."),r()(),i(6,"div",0),s(7,"p-chart",1),r(),s(8,"app-code",2)),o&2&&(p(7),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var G=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color");this.data={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--p-cyan-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-gray-500")],hoverBackgroundColor:[e.getPropertyValue("--p-cyan-400"),e.getPropertyValue("--p-orange-400"),e.getPropertyValue("--p-gray-400")]}]},this.options={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="pie" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="pie" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-pie-demo',
    templateUrl: './chart-pie-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartPieDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            color: textColor
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }

    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-pie-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","pie",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-pie-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var Z=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-content-border-color");this.data={datasets:[{data:[11,16,7,3,14],backgroundColor:[e.getPropertyValue("--p-pink-500"),e.getPropertyValue("--p-gray-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-purple-500"),e.getPropertyValue("--p-cyan-500")],label:"My dataset"}],labels:["Pink","Gray","Orange","Purple","Cyan"]},this.options={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:n}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="polarArea" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="polarArea" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-polar-area-demo',
    templateUrl: './chart-polar-area-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartPolarAreaDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--p-pink-500'),
                            documentStyle.getPropertyValue('--p-gray-500'),
                            documentStyle.getPropertyValue('--p-orange-500'),
                            documentStyle.getPropertyValue('--p-purple-500'),
                            documentStyle.getPropertyValue('--p-cyan-500')
                        ],
                        label: 'My dataset'
                    }
                ],
                labels: ['Pink', 'Gray', 'Orange', 'Purple', 'Cyan']
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-polar-area-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","polarArea",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-polar-area-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var q=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["props-doc"]],standalone:!1,decls:85,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t(5,"Name"),r(),i(6,"th"),t(7,"Type"),r(),i(8,"th"),t(9,"Default"),r(),i(10,"th"),t(11,"Description"),r()()(),i(12,"tbody")(13,"tr")(14,"td"),t(15,"type"),r(),i(16,"td"),t(17,"string"),r(),i(18,"td"),t(19,"null"),r(),i(20,"td"),t(21,"Type of the chart."),r()(),i(22,"tr")(23,"td"),t(24,"data"),r(),i(25,"td"),t(26,"any"),r(),i(27,"td"),t(28,"null"),r(),i(29,"td"),t(30,"Data to display."),r()(),i(31,"tr")(32,"td"),t(33,"options"),r(),i(34,"td"),t(35,"any"),r(),i(36,"td"),t(37,"null"),r(),i(38,"td"),t(39,"Options to customize the chart."),r()(),i(40,"tr")(41,"td"),t(42,"plugins"),r(),i(43,"td"),t(44,"any[]"),r(),i(45,"td"),t(46,"null"),r(),i(47,"td"),t(48,"Array of per-chart plugins to customize the chart behaviour."),r()(),i(49,"tr")(50,"td"),t(51,"width"),r(),i(52,"td"),t(53,"string"),r(),i(54,"td"),t(55,"null"),r(),i(56,"td"),t(57,"Width of the chart."),r()(),i(58,"tr")(59,"td"),t(60,"height"),r(),i(61,"td"),t(62,"string"),r(),i(63,"td"),t(64,"null"),r(),i(65,"td"),t(66,"Height of the chart."),r()(),i(67,"tr")(68,"td"),t(69,"responsive"),r(),i(70,"td"),t(71,"boolean"),r(),i(72,"td"),t(73,"true"),r(),i(74,"td"),t(75,"Whether the chart is redrawn on screen size change."),r()(),i(76,"tr")(77,"td"),t(78,"onDataSelect"),r(),i(79,"td"),t(80,"function"),r(),i(81,"td"),t(82,"null"),r(),i(83,"td"),t(84,"Callback to execute when an element on chart is clicked."),r()()()()())},encapsulation:2})}return a})();var K=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color");this.data={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--p-gray-400"),pointBackgroundColor:e.getPropertyValue("--p-gray-400"),pointBorderColor:e.getPropertyValue("--p-gray-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--p-gray-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--p-cyan-400"),pointBackgroundColor:e.getPropertyValue("--p-cyan-400"),pointBorderColor:e.getPropertyValue("--p-cyan-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--p-cyan-400"),data:[28,48,40,19,96,27,100]}]},this.options={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:n}}}}}this.cd.markForCheck()}code={basic:'<p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-radar-demo',
    templateUrl: './chart-radar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartRadarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

            this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        borderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        borderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
        this.cd.markForCheck()
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-radar-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","radar",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-radar-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var X=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:e.getPropertyValue("--p-cyan-500"),data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--p-gray-500"),data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--p-orange-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{color:o}}},scales:{x:{stacked:!0,ticks:{color:n},grid:{color:u,drawBorder:!1}},y:{stacked:!0,ticks:{color:n},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-stacked-bar-demo',
    templateUrl: './chart-stacked-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartStackedBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dataset 1',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [50, 25, 12, 48, 90, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-stacked-bar-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-stacked-bar-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Bars can be stacked on top of each other when "),i(3,"i"),t(4,"stacked"),r(),t(5," option of a scale is enabled."),r()(),i(6,"div",0),s(7,"p-chart",1),r(),s(8,"app-code",2)),o&2&&(p(7),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var Y=(()=>{class a{cd;data;options;platformId=c(h);configService=c(v);designerService=c(b);constructor(e){this.cd=e}themeEffect=g(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--p-text-color"),n=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--p-cyan-500"),borderColor:e.getPropertyValue("--p-cyan-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--p-gray-500"),borderColor:e.getPropertyValue("--p-gray-500"),data:[28,48,40,19,86,27,90]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:n,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:n},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-vertical-bar-demo',
    templateUrl: './chart-vertical-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartVerticalBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartDemo } from './chartdemo';

@NgModule({
    imports: [CommonModule, ChartModule],
    declarations: [ChartDemo]
})
export class ChartDemoModule {}`};static \u0275fac=function(o){return new(o||a)(y(C))};static \u0275cmp=d({type:a,selectors:[["chart-vertical-bar-demo"]],standalone:!1,decls:6,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-vertical-bar-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent."),r()(),i(3,"div",0),s(4,"p-chart",1),r(),s(5,"app-code",2)),o&2&&(p(4),l("data",n.data)("options",n.options),p(),l("code",n.code))},dependencies:[m,x,f],encapsulation:2})}return a})();var $=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=E({type:a});static \u0275inj=V({imports:[B,w,F,R,I,I]})}return a})();var te=()=>["Chart"],ee=(()=>{class a{docs=[{id:"import",label:"Import",component:z},{id:"chartjs",label:"Chart.js",component:L},{id:"basic",label:"Basic",component:T},{id:"pie",label:"Pie",component:G},{id:"doughnut",label:"Doughnut",component:_},{id:"verticalbar",label:"Vertical Bar",component:Y},{id:"horizontalbar",label:"Horizontal Bar",component:U},{id:"stackedbar",label:"Stacked Bar",component:X},{id:"line",label:"Line",component:N},{id:"multiaxis",label:"MultiAxis",component:W},{id:"linestyles",label:"Line Styles",component:H},{id:"polararea",label:"Polar Area",component:Z},{id:"Radar",label:"Radar",component:K},{id:"combo",label:"Combo",component:J},{id:"accessibility",label:"Accessibility",component:j}];apiDocs=[{id:"properties",label:"Properties",component:q},{id:"methods",label:"Methods",component:Q}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=d({type:a,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Chart Component","header","Charts","description","Chart components are based on Charts.js 3.3.2+, an open source HTML5 based charting library.",3,"docs","apiDocs"]],template:function(o,n){o&1&&s(0,"app-doc",0),o&2&&l("docs",n.docs)("apiDocs",k(2,te))},dependencies:[$,O],encapsulation:2})}return a})();var Ro=[{path:"",component:ee}];export{Ro as default};
