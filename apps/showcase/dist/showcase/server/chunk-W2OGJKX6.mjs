import './polyfills.server.mjs';
import{a as h,b as ae}from"./chunk-7IQZCBNN.mjs";import{a as le,b as re}from"./chunk-PLFJAR2F.mjs";import{a as y}from"./chunk-6746GQ27.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import{a as I,b as ie}from"./chunk-PPCUCQZZ.mjs";import{a as ee,b as te}from"./chunk-TO7SNEUN.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as v,d as ne,e as z}from"./chunk-HZSAMTDM.mjs";import{a as u,b as oe}from"./chunk-EK6YV52O.mjs";import{e as $,j as G,s as J}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{aa as Y,ba as Z}from"./chunk-DE54ZEHA.mjs";import{qa as E,va as Q,ya as X}from"./chunk-YQJJ7I3T.mjs";import"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{v as q}from"./chunk-RUZVPFSZ.mjs";import{$a as f,$b as B,Bb as a,Cb as o,Db as i,Eb as c,Lb as V,Ma as U,O as W,Qb as k,Sa as d,Tc as M,X as L,Y as H,ec as e,fc as A,gb as p,hb as j,jc as w,kc as D,lc as C,mb as K,oc as F,pc as P}from"./chunk-ZJKG6QAF.mjs";import{a as N,b as R}from"./chunk-AFOT676I.mjs";var de=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["tree-accessibility-doc"]],standalone:!1,decls:109,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),o(3,"p"),e(4," Value to describe the component can either be provided with "),o(5,"i"),e(6,"aria-labelledby"),i(),e(7," or "),o(8,"i"),e(9,"aria-label"),i(),e(10," props. The root list element has a "),o(11,"i"),e(12,"tree"),i(),e(13," role whereas each list item has a "),o(14,"i"),e(15,"treeitem"),i(),e(16," role along with "),o(17,"i"),e(18,"aria-label"),i(),e(19,", "),o(20,"i"),e(21,"aria-selected"),i(),e(22," and "),o(23,"i"),e(24,"aria-expanded"),i(),e(25," attributes. In checkbox selection, "),o(26,"i"),e(27,"aria-checked"),i(),e(28," is used instead of "),o(29,"i"),e(30,"aria-selected"),i(),e(31,". The container element of a treenode has the "),o(32,"i"),e(33,"group"),i(),e(34," role. Checkbox and toggle icons are hidden from screen readers as their parent element with "),o(35,"i"),e(36,"treeitem"),i(),e(37," role and attributes are used instead for readers and keyboard support. The "),o(38,"i"),e(39,"aria-setsize"),i(),e(40,", "),o(41,"i"),e(42,"aria-posinset"),i(),e(43," and "),o(44,"i"),e(45,"aria-level"),i(),e(46," attributes are calculated implicitly and added to each treeitem. "),i(),o(47,"h3"),e(48,"Keyboard Support"),i(),o(49,"div",0)(50,"table",1)(51,"thead")(52,"tr")(53,"th"),e(54,"Key"),i(),o(55,"th"),e(56,"Function"),i()()(),o(57,"tbody")(58,"tr")(59,"td")(60,"i"),e(61,"tab"),i()(),o(62,"td"),e(63," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. "),i()(),o(64,"tr")(65,"td")(66,"i"),e(67,"shift"),i(),e(68," + "),o(69,"i"),e(70,"tab"),i()(),o(71,"td"),e(72," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. "),i()(),o(73,"tr")(74,"td")(75,"i"),e(76,"enter"),i()(),o(77,"td"),e(78,"Selects the focused treenode."),i()(),o(79,"tr")(80,"td")(81,"i"),e(82,"space"),i()(),o(83,"td"),e(84,"Selects the focused treenode."),i()(),o(85,"tr")(86,"td")(87,"i"),e(88,"down arrow"),i()(),o(89,"td"),e(90,"Moves focus to the next treenode."),i()(),o(91,"tr")(92,"td")(93,"i"),e(94,"up arrow"),i()(),o(95,"td"),e(96,"Moves focus to the previous treenode."),i()(),o(97,"tr")(98,"td")(99,"i"),e(100,"right arrow"),i()(),o(101,"td"),e(102,"If node is closed, opens the node otherwise moves focus to the first child node."),i()(),o(103,"tr")(104,"td")(105,"i"),e(106,"left arrow"),i()(),o(107,"td"),e(108,"If node is open, closes the node otherwise moves focus to the parent node."),i()()()()()())},dependencies:[v],encapsulation:2})}return r})();var se=(()=>{class r{nodeService;files;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}code={basic:'<p-tree [value]="files" styleClass="w-full md:w-[30rem]" />',html:`<div class="card">
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-basic-demo',
    templateUrl: './tree-basic-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeBasicDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card"],["styleClass","w-full md:w-[30rem]",3,"value"],["selector","tree-basic-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Tree component requires an array of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," objects as its "),o(6,"i"),e(7,"value"),i(),e(8,"."),i()(),o(9,"div",0),c(10,"p-tree",1),i(),c(11,"app-code",2)),n&2&&(d(10),a("value",l.files),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var ce=(()=>{class r{nodeService;files;selectedFiles;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}code={basic:'<p-tree [value]="files" selectionMode="checkbox" styleClass="w-full md:w-[30rem]" [(selection)]="selectedFiles" />',html:`<div class="card">
    <p-tree [value]="files" selectionMode="checkbox" styleClass="w-full md:w-[30rem]" [(selection)]="selectedFiles" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-checkbox-demo',
    templateUrl: './tree-checkbox-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeCheckboxDemo implements OnInit {
    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["checkbox-doc"]],standalone:!1,decls:12,vars:3,consts:[[1,"card"],["selectionMode","checkbox","styleClass","w-full md:w-[30rem]",3,"selectionChange","value","selection"],["selector","tree-checkbox-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),o(3,"i"),e(4,"selectionMode"),i(),e(5," as "),o(6,"i"),e(7,"checkbox"),i(),e(8,"."),i()(),o(9,"div",0)(10,"p-tree",1),C("selectionChange",function(s){return D(l.selectedFiles,s)||(l.selectedFiles=s),s}),i()(),c(11,"app-code",2)),n&2&&(d(10),a("value",l.files),w("selection",l.selectedFiles),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var pe=(()=>{class r{nodeService;messageService;files;selectedFile;items;constructor(t,n){this.nodeService=t,this.messageService=n}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t),this.items=[{label:"View",icon:"pi pi-search",command:t=>this.viewFile(this.selectedFile)},{label:"Unselect",icon:"pi pi-times",command:t=>this.unselectFile()}]}viewFile(t){this.messageService.add({severity:"info",summary:"Node Details",detail:t.label})}unselectFile(){this.selectedFile=null}code={basic:`<p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm" />
<p-contextmenu #cm [model]="items" />
<p-toast />`,html:`<div class="card">
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm" />
    <p-contextmenu #cm [model]="items" />
    <p-toast />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tree-context-menu-demo',
    templateUrl: './tree-context-menu-demo.html',
    standalone: true,
    imports: [Tree, ContextMenuModule, ToastModule],
    providers: [MessageService, NodeService]
})
export class TreeContextMenuDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode | null;

    items!: MenuItem[];

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((files) => (this.files = files));

        this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile) },
            { label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile() }
        ];
    }

    viewFile(file: TreeNode) {
        this.messageService.add({ severity: 'info', summary: 'Node Details', detail: file.label });
    }

    unselectFile() {
        this.selectedFile = null;
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y),f(E))};static \u0275cmp=p({type:r,selectors:[["context-menu-doc"]],standalone:!1,features:[F([E])],decls:12,vars:5,consts:[["cm",""],[1,"card"],["styleClass","w-full md:w-[30rem]","selectionMode","single",3,"selectionChange","value","selection","contextMenu"],[3,"model"],["selector","tree-context-menu-demo",3,"code"]],template:function(n,l){if(n&1){let m=V();o(0,"app-docsectiontext")(1,"p"),e(2,"Tree requires a collection of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," instances as a value."),i()(),o(6,"div",1)(7,"p-tree",2),C("selectionChange",function(O){return L(m),D(l.selectedFile,O)||(l.selectedFile=O),H(O)}),i(),c(8,"p-contextmenu",3,0)(10,"p-toast"),i(),c(11,"app-code",4)}if(n&2){let m=B(9);d(7),a("value",l.files),w("selection",l.selectedFile),a("contextMenu",m),d(),a("model",l.items),d(3),a("code",l.code)}},dependencies:[u,v,h,I,le],encapsulation:2})}return r})();var me=(()=>{class r{nodeService;files;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}expandAll(){this.files.forEach(t=>{this.expandRecursive(t,!0)})}collapseAll(){this.files.forEach(t=>{this.expandRecursive(t,!1)})}expandRecursive(t,n){t.expanded=n,t.children&&t.children.forEach(l=>{this.expandRecursive(l,n)})}code={basic:`<div class="flex flex-wrap gap-2 mb-6">
    <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
    <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
</div>
<p-tree [value]="files" styleClass="w-full md:w-[30rem]" />`,html:`<div class="card">
    <div class="flex flex-wrap gap-2 mb-6">
        <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
        <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
    </div>
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-controlled-demo',
    templateUrl: './tree-controlled-demo.html',
    standalone: true,
    imports: [Tree, ButtonModule],
    providers: [NodeService]
})
export class TreeControlledDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    expandAll() {
        this.files.forEach((node) => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.files.forEach((node) => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["controlled-doc"]],standalone:!1,decls:15,vars:2,consts:[[1,"card"],[1,"flex","flex-wrap","gap-2","mb-6"],["icon","pi pi-plus","label","Expand all",3,"click"],["icon","pi pi-minus","label","Collapse all",3,"click"],["styleClass","w-full md:w-[30rem]",3,"value"],["selector","tree-controlled-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Tree requires a collection of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," instances as a "),o(6,"i"),e(7,"value"),i(),e(8,"."),i()(),o(9,"div",0)(10,"div",1)(11,"p-button",2),k("click",function(){return l.expandAll()}),i(),o(12,"p-button",3),k("click",function(){return l.collapseAll()}),i()(),c(13,"p-tree",4),i(),c(14,"app-code",5)),n&2&&(d(13),a("value",l.files),d(),a("code",l.code))},dependencies:[u,v,h,Y],encapsulation:2})}return r})();var fe=(()=>{class r{nodeService;files;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}code={basic:'<p-tree [value]="files" styleClass="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />',html:`<div class="card">
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-drag-drop-demo',
    templateUrl: './tree-drag-drop-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [TreeDragDropService, NodeService]
})
export class TreeDragDropDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["drag-drop-doc"]],standalone:!1,features:[F([X])],decls:6,vars:4,consts:[[1,"card"],["styleClass","w-full md:w-[30rem]","draggableScope","self","droppableScope","self",3,"value","draggableNodes","droppableNodes"],["selector","tree-drag-drop-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop."),i()(),o(3,"div",0),c(4,"p-tree",1),i(),c(5,"app-code",2)),n&2&&(d(4),a("value",l.files)("draggableNodes",!0)("droppableNodes",!0),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var ue=(()=>{class r{nodeService;messageService;files;selectedFile;constructor(t,n){this.nodeService=t,this.messageService=n}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}nodeExpand(t){this.messageService.add({severity:"success",summary:"Node Expanded",detail:t.node.label})}nodeCollapse(t){this.messageService.add({severity:"warn",summary:"Node Collapsed",detail:t.node.label})}nodeSelect(t){this.messageService.add({severity:"info",summary:"Node Selected",detail:t.node.label})}nodeUnselect(t){this.messageService.add({severity:"info",summary:"Node Unselected",detail:t.node.label})}code={basic:'<p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />',html:`<div class="card">
    <p-toast />
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tree-events-demo',
    templateUrl: './tree-events-demo.html',
    standalone: true,
    imports: [Tree, ToastModule],
    providers: [MessageService, NodeService]
})
export class TreeEventsDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode;

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    nodeExpand(event: any) {
        this.messageService.add({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    }

    nodeCollapse(event: any) {
        this.messageService.add({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    }

    nodeSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    nodeUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y),f(E))};static \u0275cmp=p({type:r,selectors:[["event-doc"]],standalone:!1,features:[F([E])],decls:7,vars:3,consts:[[1,"card"],["styleClass","w-full md:w-[30rem]","selectionMode","single",3,"selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect","value","selection"],["selector","tree-events-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"An event is provided for each type of user interaction such as expand, collapse and selection."),i()(),o(3,"div",0),c(4,"p-toast"),o(5,"p-tree",1),C("selectionChange",function(s){return D(l.selectedFile,s)||(l.selectedFile=s),s}),k("onNodeExpand",function(s){return l.nodeExpand(s)})("onNodeCollapse",function(s){return l.nodeCollapse(s)})("onNodeSelect",function(s){return l.nodeSelect(s)})("onNodeUnselect",function(s){return l.nodeUnselect(s)}),i()(),c(6,"app-code",2)),n&2&&(d(5),a("value",l.files),w("selection",l.selectedFile),d(),a("code",l.code))},dependencies:[u,v,h,I],encapsulation:2})}return r})();var ve=(()=>{class r{nodeService;files;files2;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files=t,this.files2=t})}code={basic:`<p-tree [value]="files" styleClass="w-full md:w-[30rem]" [filter]="true" filterPlaceholder="Lenient Filter" />
<p-tree [value]="files2" styleClass="w-full md:w-[30rem]" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <p-tree [value]="files" styleClass="w-full md:w-[30rem]" [filter]="true" filterPlaceholder="Lenient Filter" />
    </div>
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <p-tree [value]="files2" styleClass="w-full md:w-[30rem]" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-filter-demo',
    templateUrl: './tree-filter-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeFilterDemo implements OnInit {
    files: TreeNode[];

    files2: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files = data;
            this.files2 = data;
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["filter-doc"]],standalone:!1,decls:24,vars:5,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto","md:flex","md:justify-start","md:items-center","flex-col"],["styleClass","w-full md:w-[30rem]","filterPlaceholder","Lenient Filter",3,"value","filter"],["styleClass","w-full md:w-[30rem]","filterMode","strict","filterPlaceholder","Strict Filter",3,"value","filter"],["selector","tree-filter-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Filtering is enabled by adding the "),o(3,"i"),e(4,"filter"),i(),e(5," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),o(6,"i"),e(7,"filterBy"),i(),e(8," property. In addition "),o(9,"i"),e(10,"filterMode"),i(),e(11," specifies the filtering strategy. In "),o(12,"i"),e(13,"lenient"),i(),e(14," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),o(15,"i"),e(16,"strict"),i(),e(17," mode when the query matches a node, filtering continues on all descendants. "),i()(),o(18,"div",0)(19,"div",1),c(20,"p-tree",2),i(),o(21,"div",1),c(22,"p-tree",3),i()(),c(23,"app-code",4)),n&2&&(d(20),a("value",l.files)("filter",!0),d(2),a("value",l.files2)("filter",!0),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var he=(()=>{class r{code={typescript:"import { TreeModule } from 'primeng/tree';"};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["tree-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&c(0,"app-code",0),n&2&&a("code",l.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return r})();var ye=(()=>{class r{cd;loading=!1;nodes;nodes2;constructor(t){this.cd=t}ngOnInit(){this.loading=!0,this.nodes2=this.initiateNodes2(),setTimeout(()=>{this.nodes=this.initiateNodes(),this.loading=!1,this.nodes2.map(t=>t.loading=!1),this.cd.markForCheck()},2e3)}initiateNodes(){return[{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]}initiateNodes2(){return[{key:"0",label:"Node 0",leaf:!1,loading:!0},{key:"1",label:"Node 1",leaf:!1,loading:!0},{key:"2",label:"Node 2",leaf:!1,loading:!0}]}onNodeExpand(t){t.node.children||(this.loading=!0,setTimeout(()=>{let n=N({},t.node);n.children=[];for(let l=0;l<3;l++)n.children.push({key:t.node.key+"-"+l,label:"Lazy "+t.node.label+"-"+l});this.nodes[parseInt(t.node.key,10)]=n,this.loading=!1,this.cd.markForCheck()},500))}onNodeExpand2(t){t.node.children||(t.node.loading=!0,setTimeout(()=>{let n=N({},t.node);n.children=[];for(let m=0;m<3;m++)n.children.push({key:t.node.key+"-"+m,label:"Lazy "+t.node.label+"-"+m});let l=parseInt(n.key,10);this.nodes2[l]=R(N({},n),{loading:!1}),this.cd.markForCheck()},500))}code={basic:`<p-tree styleClass="w-full md:w-[30rem]" [value]="nodes" (onNodeExpand)="onNodeExpand($event)" [loading]="loading" />
<p-tree styleClass="w-full md:w-[30rem]" [value]="nodes2" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <label for="mask" class="font-bold block mb-2">Mask Mode</label>
        <p-tree styleClass="w-full md:w-[30rem]" [value]="nodes" (onNodeExpand)="onNodeExpand($event)" [loading]="loading" />
    </div>
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <label for="icon" class="font-bold block mb-2">Icon Mode</label>
        <p-tree styleClass="w-full md:w-[30rem]" [value]="nodes2" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />
    </div>
</div>`,typescript:`import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-lazy-demo',
    templateUrl: './tree-lazy-demo.html',
    standalone: true,
    imports: [Tree]
})
export class TreeLazyDemo implements OnInit {
    loading: boolean = false;

    nodes!: TreeNode[];

    nodes2!: TreeNode[];

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.loading = true;
        this.nodes2 = this.initiateNodes2();

        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.nodes2.map((node) => (node.loading = false));
            this.cd.markForCheck();
        }, 2000);
    }

    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    initiateNodes2(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: true
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: true
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: true
            }
        ];
    }

    onNodeExpand(event: any) {
        if (!event.node.children) {
            this.loading = true;

            setTimeout(() => {
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                this.nodes[parseInt(event.node.key, 10)] = _node;

                this.loading = false;
                this.cd.markForCheck();
            }, 500);
        }
    }

    onNodeExpand2(event: any) {
        if (!event.node.children) {
            event.node.loading = true;

            setTimeout(() => {
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                const key = parseInt(_node.key, 10);
                this.nodes2[key] = { ..._node, loading: false };
                this.cd.markForCheck();
            }, 500);
        }
    }
}`,data:`{
    key: '0',
    label: 'Node 0',
    leaf: false
},
...`};static \u0275fac=function(n){return new(n||r)(f(M))};static \u0275cmp=p({type:r,selectors:[["lazy-demo"]],standalone:!1,decls:28,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto","md:flex","md:justify-start","md:items-center","flex-col"],["for","mask",1,"font-bold","block","mb-2"],["styleClass","w-full md:w-[30rem]",3,"onNodeExpand","value","loading"],["for","icon",1,"font-bold","block","mb-2"],["styleClass","w-full md:w-[30rem]","loadingMode","icon",3,"onNodeExpand","value"],["selector","tree-lazy-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),o(3,"i"),e(4,"loading"),i(),e(5," property and "),o(6,"i"),e(7,"onNodeExpand"),i(),e(8," method. Default value of "),o(9,"i"),e(10,"loadingMode"),i(),e(11," is "),o(12,"i"),e(13,"mask"),i(),e(14," and also "),o(15,"i"),e(16,"icon"),i(),e(17," is available. "),i()(),o(18,"div",0)(19,"div",1)(20,"label",2),e(21,"Mask Mode"),i(),o(22,"p-tree",3),k("onNodeExpand",function(s){return l.onNodeExpand(s)}),i()(),o(23,"div",1)(24,"label",4),e(25,"Icon Mode"),i(),o(26,"p-tree",5),k("onNodeExpand",function(s){return l.onNodeExpand2(s)}),i()()(),c(27,"app-code",6)),n&2&&(d(22),a("value",l.nodes)("loading",l.loading),d(4),a("value",l.nodes2),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var ge=(()=>{class r{nodeService;metaKeySelection=!1;files;selectedFiles;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}code={basic:`<div class="flex items-center mb-6 gap-2">
    <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree [metaKeySelection]="metaKeySelection" [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />`,html:`<div class="card">
    <div class="flex items-center mb-6 gap-2">
        <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
        <label for="input-metakey">MetaKey</label>
    </div>
    <p-tree [metaKeySelection]="metaKeySelection" [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'tree-multiple-demo',
    templateUrl: './tree-multiple-demo.html',
    standalone: true,
    imports: [Tree, InputSwitchModule, ToggleSwitchModule],
    providers: [NodeService]
})
export class TreeMultipleDemo implements OnInit {
    metaKeySelection: boolean = false;

    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["multiple-doc"]],standalone:!1,decls:24,vars:5,consts:[[1,"card"],[1,"flex","items-center","mb-6","gap-2"],["inputId","input-metakey",3,"ngModelChange","ngModel"],["for","input-metakey"],["styleClass","w-full md:w-[30rem]","selectionMode","multiple",3,"selectionChange","metaKeySelection","value","selection"],["selector","tree-multiple-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," More than one node is selectable by setting "),o(3,"i"),e(4,"selectionMode"),i(),e(5," to "),o(6,"i"),e(7,"multiple"),i(),e(8,". By default in multiple selection mode, metaKey press (e.g. "),o(9,"i"),e(10,"\u2318"),i(),e(11,") is necessary to add to existing selections however this can be configured with disabling the "),o(12,"i"),e(13,"metaKeySelection"),i(),e(14," property. Note that in touch enabled devices, Tree always ignores metaKey. "),i(),o(15,"p"),e(16,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."),i()(),o(17,"div",0)(18,"div",1)(19,"p-toggleswitch",2),C("ngModelChange",function(s){return D(l.metaKeySelection,s)||(l.metaKeySelection=s),s}),i(),o(20,"label",3),e(21,"MetaKey"),i()(),o(22,"p-tree",4),C("selectionChange",function(s){return D(l.selectedFiles,s)||(l.selectedFiles=s),s}),i()(),c(23,"app-code",5)),n&2&&(d(19),w("ngModel",l.metaKeySelection),d(3),a("metaKeySelection",l.metaKeySelection)("value",l.files),w("selection",l.selectedFiles),d(),a("code",l.code))},dependencies:[u,v,h,$,G,ee],encapsulation:2})}return r})();var Se=(()=>{class r{nodeService;files;selectedFile;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files=t)}code={basic:'<p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />',html:`<div class="card">
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-single-demo',
    templateUrl: './tree-single-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeSingleDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode;

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y))};static \u0275cmp=p({type:r,selectors:[["single-doc"]],standalone:!1,decls:15,vars:3,consts:[[1,"card"],["styleClass","w-full md:w-[30rem]","selectionMode","single",3,"selectionChange","value","selection"],["selector","tree-single-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Single node selection is configured by setting "),o(3,"i"),e(4,"selectionMode"),i(),e(5," as "),o(6,"i"),e(7,"single"),i(),e(8," along with "),o(9,"i"),e(10,"selection"),i(),e(11," properties to manage the selection value binding."),i()(),o(12,"div",0)(13,"p-tree",1),C("selectionChange",function(s){return D(l.selectedFile,s)||(l.selectedFile=s),s}),i()(),c(14,"app-code",2)),n&2&&(d(13),a("value",l.files),w("selection",l.selectedFile),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();function Ne(r,_){if(r&1&&(o(0,"a",5),e(1),i()),r&2){let t=_.$implicit;a("href",t.data,U),d(),A(t.label)}}function Ee(r,_){if(r&1&&(o(0,"b"),e(1),i()),r&2){let t=_.$implicit;d(),A(t.label)}}var xe=(()=>{class r{nodes;ngOnInit(){this.nodes=[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Angular",data:"https://angular.io",type:"url"},{key:"0-1",label:"Getting Started",data:"https://angular.io/guide/setup-local",type:"url"},{key:"0-2",label:"Learn and Explore",data:"https://angular.io/guide/architecture",type:"url"},{key:"0-3",label:"Take a Look",data:"https://angular.io/start",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://angular.io/guide/component-interaction",type:"url"},{key:"1-1",label:"User Input",data:"https://angular.io/guide/user-input",type:"url"},{key:"1-2",label:"Hooks",data:"https://angular.io/guide/lifecycle-hooks",type:"url"},{key:"1-3",label:"Attribute Directives",data:"https://angular.io/guide/attribute-directives",type:"url"}]}]}code={basic:`<p-tree [value]="nodes" styleClass="w-full md:w-[30rem]">
    <ng-template let-node pTemplate="url">
        <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-100 hover:text-primary">
            {{ node.label }}
        </a>
    </ng-template>
    <ng-template let-node pTemplate="default">
        <b>{{ node.label }}</b>
    </ng-template>
</p-tree>`,html:`<div class="card">
    <p-tree [value]="nodes" styleClass="w-full md:w-[30rem]">
        <ng-template let-node pTemplate="url">
            <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-100 hover:text-primary">
               {{ node.label }}
            </a>
        </ng-template>
        <ng-template let-node pTemplate="default">
            <b>{{ node.label }}</b>
        </ng-template>
    </p-tree>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';

@Component({
    selector: 'tree-template-demo',
    templateUrl: './tree-template-demo.html',
    standalone: true,
    imports: [TreeModule]
})
export class TreeTemplateDemo implements OnInit {
    nodes!: TreeNode[];

    ngOnInit() {
        this.nodes = [
            {
                key: '0',
                label: 'Introduction',
                children: [
                    { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'url' },
                    { key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url' },
                    { key: '0-2', label: 'Learn and Explore', data: 'https://angular.io/guide/architecture', type: 'url' },
                    { key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url' }
                ]
            },
            {
                key: '1',
                label: 'Components In-Depth',
                children: [
                    { key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url' },
                    { key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url' },
                    { key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url' },
                    { key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url' }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["template-doc"]],standalone:!1,decls:11,vars:2,consts:[[1,"card"],["styleClass","w-full md:w-[30rem]",3,"value"],["pTemplate","url"],["pTemplate","default"],["selector","tree-template-demo",3,"code"],["target","_blank","rel","noopener noreferrer",1,"text-surface-700","dark:text-surface-100","hover:text-primary",3,"href"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Custom node content instead of a node label is defined with the "),o(3,"i"),e(4,"pTemplate"),i(),e(5," property."),i()(),o(6,"div",0)(7,"p-tree",1),K(8,Ne,2,2,"ng-template",2)(9,Ee,2,1,"ng-template",3),i()(),c(10,"app-code",4)),n&2&&(d(7),a("value",l.nodes),d(3),a("code",l.code))},dependencies:[u,v,h,Q],encapsulation:2})}return r})();var be=(()=>{class r{nodeService;cd;loading=!1;files;constructor(t,n){this.nodeService=t,this.cd=n}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files=this.duplicateData(t,50),this.cd.markForCheck()})}duplicateData(t,n){let l=[];for(let m=0;m<n;m++)l=[...l,...t.map(s=>N({},s))];return l}code={basic:'<p-tree [value]="files" styleClass="w-full md:w-[30rem]" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" />',html:`<div class="card flex justify-center">
    <p-tree [value]="files" styleClass="w-full md:w-[30rem]" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" />
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-virtual-scroll-demo',
    templateUrl: './tree-virtual-scroll-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeVirtualScrollDemo implements OnInit {
    loading: boolean = false;

    files!: TreeNode[];

    constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files = this.duplicateData(data, 50);
            this.cd.markForCheck();
        });
    }

    duplicateData(data: TreeNode[], count: number): TreeNode[] {
        let duplicatedData: TreeNode[] = [];
        for (let i = 0; i < count; i++) {
            duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
        }
        return duplicatedData;
    }

}`,service:["NodeService"],data:`
/* NodeService */
{
key: '0',
label: 'Documents',
data: 'Documents Folder',
icon: 'pi pi-fw pi-inbox',
children: [
{
    key: '0-0',
    label: 'Work',
    data: 'Work Folder',
    icon: 'pi pi-fw pi-cog',
    children: [
        { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
        { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
    ]
},
{
    key: '0-1',
    label: 'Home',
    data: 'Home Folder',
    icon: 'pi pi-fw pi-home',
    children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
}
]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y),f(M))};static \u0275cmp=p({type:r,selectors:[["virtual-scroll-doc"]],standalone:!1,decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["styleClass","w-full md:w-[30rem]","scrollHeight","250px",3,"virtualScroll","virtualScrollItemSize","value"],["selector","tree-virtual-scroll-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),o(3,"i"),e(4,"virtualScroll"),i(),e(5," property as true and providing a "),o(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," in pixels would be enough to enable this functionality."),i()(),o(9,"div",0),c(10,"p-tree",1),i(),c(11,"app-code",2)),n&2&&(d(10),a("virtualScroll",!0)("virtualScrollItemSize",46)("value",l.files),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var we=(()=>{class r{nodeService;cd;loading=!1;files;virtualFiles;constructor(t,n){this.nodeService=t,this.cd=n}ngOnInit(){this.loading=!0,setTimeout(()=>{this.nodeService.getLazyFiles().then(t=>this.files=this.duplicateData(t,50)),this.loading=!1,this.cd.markForCheck()},1e3)}duplicateData(t,n){let l=[];for(let m=0;m<n;m++)l=[...l,...t.map(s=>N({},s))];return l}nodeExpand(t){t.node&&(this.loading=!0,setTimeout(()=>{this.nodeService.getLazyFiles().then(n=>{t.node.children=n,this.files=[...this.files,t.node.children]}),this.loading=!1,this.cd.markForCheck()},200))}code={basic:'<p-tree styleClass="w-full md:w-[30rem]" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" [value]="files" (onNodeExpand)="nodeExpand($event)" [loading]="loading" />',html:`<div class="card flex justify-center">
    <p-tree styleClass="w-full md:w-[30rem]" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" [value]="files" (onNodeExpand)="nodeExpand($event)" [loading]="loading" />
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-virtual-scroll-lazy-demo',
    templateUrl: './tree-virtual-scroll-lazy-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeVirtualScrollLazyDemo implements OnInit {
    loading: boolean = false;

    files!: TreeNode[];

    virtualFiles!: TreeNode[];

    constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.loading = true;
        setTimeout(() => {
            this.nodeService.getLazyFiles().then((files) => (this.files = this.duplicateData(files, 50)));
            this.loading = false;
            this.cd.markForCheck();
        }, 1000);
    }

    duplicateData(data: TreeNode[], count: number): TreeNode[] {
        let duplicatedData: TreeNode[] = [];
        for (let i = 0; i < count; i++) {
            duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
        }
        return duplicatedData;
    }

    nodeExpand(event: any) {
        if (event.node) {
            this.loading = true;
            setTimeout(() => {
                this.nodeService.getLazyFiles().then((nodes) => {
                    event.node.children = nodes;
                    this.files = [...this.files, event.node.children];
                });
                this.loading = false;
                this.cd.markForCheck();
            }, 200);
        }
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||r)(f(y),f(M))};static \u0275cmp=p({type:r,selectors:[["lazy-virtual-scroll-doc"]],standalone:!1,decls:12,vars:6,consts:[[1,"card","flex","justify-center"],["styleClass","w-full md:w-[30rem]","scrollHeight","250px",3,"onNodeExpand","virtualScroll","lazy","virtualScrollItemSize","value","loading"],["selector","tree-virtual-scroll-lazy-demo",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),o(3,"i"),e(4,"virtualScroll"),i(),e(5," property as true and providing a "),o(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," in pixels would be enough to enable this functionality."),i()(),o(9,"div",0)(10,"p-tree",1),k("onNodeExpand",function(s){return l.nodeExpand(s)}),i()(),c(11,"app-code",2)),n&2&&(d(10),a("virtualScroll",!0)("lazy",!0)("virtualScrollItemSize",46)("value",l.files)("loading",l.loading),d(),a("code",l.code))},dependencies:[u,v,h],encapsulation:2})}return r})();var De=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=j({type:r});static \u0275inj=W({imports:[q,oe,z,ae,Z,J,ie,re,te,z]})}return r})();var Fe=()=>["Tree","TreeNode"],Ce=(()=>{class r{docs=[{id:"import",label:"Import",component:he},{id:"basic",label:"Basic",component:se},{id:"controlled",label:"Controlled",component:me},{id:"selection",label:"Selection",children:[{id:"single",label:"Single",component:Se},{id:"multiple",label:"Multiple",component:ge},{id:"checkbox",label:"Checkbox",component:ce}]},{id:"event",label:"Events",component:ue},{id:"lazy",label:"Lazy",component:ye},{id:"template",label:"Template",component:xe},{id:"filter",label:"Filter",component:ve},{id:"virtualscroll",label:"Virtual Scroll",children:[{id:"preload",label:"Preload",component:be},{id:"lazyvirtualscroll",label:"Lazy",component:we}]},{id:"dragdrop",label:"DragDrop",component:fe},{id:"contextmenu",label:"Context Menu",component:pe},{id:"accessibility",label:"Accessibility",component:de}];static \u0275fac=function(n){return new(n||r)};static \u0275cmp=p({type:r,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tree Component","header","Tree","description","Tree is used to display hierarchical data.","themeDocs","tree",3,"docs","apiDocs"]],template:function(n,l){n&1&&c(0,"app-doc",0),n&2&&a("docs",l.docs)("apiDocs",P(2,Fe))},dependencies:[De,ne],encapsulation:2})}return r})();var ai=[{path:"",component:Ce}];export{ai as default};
