import"./chunk-G3BDHYWP.js";import{c as ye,d as H,f as j,g as ze,h as J}from"./chunk-KMVDOPWF.js";import{a as b,d as Te,e as Y}from"./chunk-I6RUY6VJ.js";import{a as _,b as Se}from"./chunk-CIUCWEWU.js";import"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{v as ve,y as Ce}from"./chunk-DEL7GGHP.js";import{i as be}from"./chunk-UHCZASEU.js";import{Ga as xe,Ja as _e,v as G,va as y,wa as F}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{j as q,l as ue,m as W,p as K,q as fe,u as I}from"./chunk-O4W5DSIC.js";import{$b as O,Ab as p,Eb as M,Fb as N,Gb as le,Hb as R,Ka as A,M as te,Mb as V,Mc as X,N as ne,O as $,Ob as u,Qa as a,Qc as z,Rb as ce,S as oe,Tb as L,Ub as Q,X as w,Y as E,Za as D,ac as r,bc as x,d as ee,da as S,eb as h,fb as U,fc as de,gc as pe,hc as se,jb as re,kb as m,kc as me,lc as ge,ma as ie,mc as T,nc as he,oa as ae,rb as s,xb as c,yb as o,zb as i}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var we=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["org-chart-accessibility-doc"]],standalone:!1,decls:34,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),i(),o(3,"p"),r(4," Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions. "),i(),o(5,"h3"),r(6,"Keyboard Support"),i(),o(7,"div",0)(8,"table",1)(9,"thead")(10,"tr")(11,"th"),r(12,"Key"),i(),o(13,"th"),r(14,"Function"),i()()(),o(15,"tbody")(16,"tr")(17,"td")(18,"i"),r(19,"tab"),i()(),o(20,"td"),r(21,"Moves focus through the focusable elements within the chart."),i()(),o(22,"tr")(23,"td")(24,"i"),r(25,"enter"),i()(),o(26,"td"),r(27,"Toggles the expanded state of a node."),i()(),o(28,"tr")(29,"td")(30,"i"),r(31,"space"),i()(),o(32,"td"),r(33,"Toggles the expanded state of a node."),i()()()()()())},dependencies:[b],encapsulation:2})}return e})();var Pe=({dt:e})=>`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 ${e("organizationchart.gutter")};
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid ${e("organizationchart.node.border.color")};
    background: ${e("organizationchart.node.background")};
    color: ${e("organizationchart.node.color")};
    padding: ${e("organizationchart.node.padding")};
    border-radius: ${e("organizationchart.node.border.radius")};
    transition: background ${e("organizationchart.transition.duration")}, border-color ${e("organizationchart.transition.duration")}, color ${e("organizationchart.transition.duration")}, box-shadow ${e("organizationchart.transition.duration")};
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: ${e("organizationchart.node.toggleable.padding")};
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
    background: ${e("organizationchart.node.hover.background")};
    color: ${e("organizationchart.node.hover.color")};
}

.p-organizationchart-node-selected {
    background: ${e("organizationchart.node.selected.background")};
    color: ${e("organizationchart.node.selected.color")};
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    inset-block-end: calc(-1 * calc(${e("organizationchart.node.toggle.button.size")} / 2));
    margin-inline-start: calc(-1 * calc(${e("organizationchart.node.toggle.button.size")} / 2));
    z-index: 2;
    inset-inline-start: 50%;
    user-select: none;
    cursor: pointer;
    width: ${e("organizationchart.node.toggle.button.size")};
    height: ${e("organizationchart.node.toggle.button.size")};
    text-decoration: none;
    background: ${e("organizationchart.node.toggle.button.background")};
    color: ${e("organizationchart.node.toggle.button.color")};
    border-radius: ${e("organizationchart.node.toggle.button.border.radius")};
    border: 1px solid ${e("organizationchart.node.toggle.button.border.color")};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background ${e("organizationchart.transition.duration")}, color ${e("organizationchart.transition.duration")}, border-color ${e("organizationchart.transition.duration")}, outline-color ${e("organizationchart.transition.duration")}, box-shadow ${e("organizationchart.transition.duration")};
}

.p-organizationchart-node-toggle-button:hover {
    background: ${e("organizationchart.node.toggle.button.hover.background")};
    color: ${e("organizationchart.node.toggle.button.hover.color")};
}

.p-organizationchart-node-toggle-button:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    inset-block-start: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: ${e("organizationchart.connector.height")};
    width: 1px;
    background: ${e("organizationchart.connector.color")};
}

.p-organizationchart-connector-right {
    border-radius: 0;
}

.p-organizationchart-connector-left {
    border-radius: 0;
    border-inline-end: 1px solid ${e("organizationchart.connector.color")};
}

.p-organizationchart-connector-top {
    border-block-start: 1px solid ${e("organizationchart.connector.color")};
}

.p-organizationchart-node-selectable {
    cursor: pointer;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
    border-inline-end: 0 none;
}

.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
    border-start-end-radius: ${e("organizationchart.connector.border.radius")};
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-inline-start: 1px solid ${e("organizationchart.connector.color")};
    border-start-start-radius: ${e("organizationchart.connector.border.radius")};
}
`,Re={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:({instance:e})=>["p-organizationchart-node",{"p-organizationchart-node-selectable":e.selectable,"p-organizationchart-node-selected":e.selected}],nodeToggleButton:"p-organizationchart-node-toggle-button",nodeToggleButtonIcon:"p-organizationchart-node-toggle-button-icon",connectors:"p-organizationchart-connectors",connectorDown:"p-organizationchart-connector-down",connectorLeft:({index:e})=>["p-organizationchart-connector-left",{"p-organizationchart-connector-top":e!==0}],connectorRight:({props:e,index:d})=>["p-organizationchart-connector-right",{"p-organizationchart-connector-top":d!==e.node.children.length-1}],nodeChildren:"p-organizationchart-node-children"},Z=(()=>{class e extends xe{name="organizationchart";theme=Pe;classes=Re;static \u0275fac=(()=>{let t;return function(l){return(t||(t=ie(e)))(l||e)}})();static \u0275prov=ne({token:e,factory:e.\u0275fac})}return e})();var Ve=["pOrganizationChartNode",""],Le=(e,d)=>({"p-organizationchart-node":!0,"p-organizationchart-node-selectable":e,"p-organizationchart-node-selected":d}),De=e=>({$implicit:e}),Ee=e=>({"p-organizationchart-connector-top":e});function Qe(e,d){if(e&1&&(o(0,"div"),r(1),i()),e&2){let t=u(2);a(),x(t.node.label)}}function Xe(e,d){e&1&&le(0)}function qe(e,d){if(e&1&&(o(0,"div"),m(1,Xe,1,0,"ng-container",6),i()),e&2){let t=u(2);a(),c("ngTemplateOutlet",t.chart.getTemplateForNode(t.node))("ngTemplateOutletContext",T(2,De,t.node))}}function We(e,d){e&1&&p(0,"ChevronDownIcon",11),e&2&&(c("styleClass","p-organizationchart-node-toggle-button-icon"),s("data-pc-section","nodeTogglerIcon"))}function Ke(e,d){e&1&&p(0,"ChevronUpIcon",11),e&2&&(c("styleClass","p-organizationchart-node-toggle-button-icon"),s("data-pc-section","nodeTogglerIcon"))}function Ge(e,d){if(e&1&&(M(0),m(1,We,1,2,"ChevronDownIcon",10)(2,Ke,1,2,"ChevronUpIcon",10),N()),e&2){let t=u(4);a(),c("ngIf",t.node.expanded),a(),c("ngIf",!t.node.expanded)}}function He(e,d){}function Je(e,d){e&1&&m(0,He,0,0,"ng-template")}function Ye(e,d){if(e&1&&(o(0,"span",12),m(1,Je,1,0,null,6),i()),e&2){let t=u(4);s("data-pc-section","nodeTogglerIcon"),a(),c("ngTemplateOutlet",t.chart.togglerIconTemplate||t.chart._togglerIconTemplate)("ngTemplateOutletContext",T(3,De,t.node.expanded))}}function Ze(e,d){if(e&1){let t=R();o(0,"a",8),V("click",function(l){w(t);let g=u(3);return E(g.toggleNode(l,g.node))})("keydown.enter",function(l){w(t);let g=u(3);return E(g.toggleNode(l,g.node))})("keydown.space",function(l){w(t);let g=u(3);return E(g.toggleNode(l,g.node))}),m(1,Ge,3,2,"ng-container",0)(2,Ye,2,5,"span",9),i()}if(e&2){let t=u(3);s("data-pc-section","nodeToggler"),a(),c("ngIf",!t.chart.togglerIconTemplate&&!t.chart._togglerIconTemplate),a(),c("ngIf",t.chart.togglerIconTemplate||t.chart._togglerIconTemplate)}}function et(e,d){if(e&1&&(M(0),m(1,Ze,3,3,"a",7),N()),e&2){let t=u(2);a(),c("ngIf",!t.leaf)}}function tt(e,d){if(e&1&&(M(0),o(1,"td"),p(2,"div",3),i(),N()),e&2){let t=u(2);a(),s("data-pc-section","lineCell")("colspan",t.colspan),a(),s("data-pc-section","lineDown")}}function nt(e,d){if(e&1&&(o(0,"td",14),r(1,"\xA0"),i(),o(2,"td",15),r(3,"\xA0"),i()),e&2){let t=d.first,n=d.last;c("ngClass",T(4,Ee,!t)),s("data-pc-section","lineLeft"),a(2),c("ngClass",T(6,Ee,!n)),s("data-pc-section","lineRight")}}function ot(e,d){if(e&1&&(M(0),m(1,nt,4,8,"ng-template",13),N()),e&2){let t=u(2);a(),c("ngForOf",t.node.children)}}function it(e,d){if(e&1&&(o(0,"td",16),p(1,"table",17),i()),e&2){let t=d.$implicit,n=u(2);s("data-pc-section","nodeCell"),a(),c("node",t)("collapsible",n.node.children&&n.node.children.length>0&&n.collapsible)}}function at(e,d){if(e&1){let t=R();o(0,"tbody")(1,"tr")(2,"td")(3,"div",1),V("click",function(l){w(t);let g=u();return E(g.onNodeClick(l,g.node))}),m(4,Qe,2,1,"div",0)(5,qe,2,4,"div",0)(6,et,2,1,"ng-container",0),i()()(),o(7,"tr",2)(8,"td"),p(9,"div",3),i()(),o(10,"tr",2),m(11,tt,3,3,"ng-container",0)(12,ot,2,1,"ng-container",0),i(),o(13,"tr",4),m(14,it,2,3,"td",5),i()()}if(e&2){let t=u();s("data-pc-section","body"),a(),s("data-pc-section","row"),a(),s("colspan",t.colspan)("data-pc-section","cell"),a(),O(t.node.styleClass),c("ngClass",he(26,Le,t.chart.selectionMode&&t.node.selectable!==!1,t.isSelected())),s("data-pc-section","node"),a(),c("ngIf",!t.chart.getTemplateForNode(t.node)),a(),c("ngIf",t.chart.getTemplateForNode(t.node)),a(),c("ngIf",t.collapsible),a(),c("ngStyle",t.getChildStyle(t.node))("@childState","in"),s("data-pc-section","lines"),a(),s("data-pc-section","lineCell")("colspan",t.colspan),a(),s("data-pc-section","lineDown"),a(),c("ngStyle",t.getChildStyle(t.node))("@childState","in"),s("data-pc-section","lines"),a(),c("ngIf",t.node.children&&t.node.children.length===1),a(),c("ngIf",t.node.children&&t.node.children.length>1),a(),c("ngStyle",t.getChildStyle(t.node))("@childState","in"),s("data-pc-section","nodes"),a(),c("ngForOf",t.node.children)}}var rt=["togglericon"],lt=e=>({"p-organizationchart p-component":!0,"p-organizationchart-preservespace":e});function ct(e,d){if(e&1&&p(0,"table",2),e&2){let t=u();c("collapsible",t.collapsible)("node",t.root)}}var Me=(()=>{class e{cd;node;root;first;last;collapsible;chart;subscription;constructor(t,n){this.cd=n,this.chart=t,this.subscription=this.chart.selectionSource$.subscribe(()=>{this.cd.markForCheck()})}get leaf(){if(this.node)return this.node.leaf==!1?!1:!(this.node.children&&this.node.children.length)}get colspan(){if(this.node)return this.node.children&&this.node.children.length?this.node.children.length*2:null}getChildStyle(t){return{visibility:!this.leaf&&t.expanded?"inherit":"hidden"}}onNodeClick(t,n){this.chart.onNodeClick(t,n)}toggleNode(t,n){n.expanded=!n.expanded,n.expanded?this.chart.onNodeExpand.emit({originalEvent:t,node:this.node}):this.chart.onNodeCollapse.emit({originalEvent:t,node:this.node}),t.preventDefault()}isSelected(){return this.chart.isSelected(this.node)}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(D(te(()=>v)),D(X))};static \u0275cmp=h({type:e,selectors:[["","pOrganizationChartNode",""]],inputs:{node:"node",root:[2,"root","root",z],first:[2,"first","first",z],last:[2,"last","last",z],collapsible:[2,"collapsible","collapsible",z]},attrs:Ve,decls:1,vars:1,consts:[[4,"ngIf"],[3,"click","ngClass"],[1,"p-organizationchart-connectors",3,"ngStyle"],[1,"p-organizationchart-connector-down"],[1,"p-organizationchart-node-children",3,"ngStyle"],["colspan","2",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["tabindex","0","class","p-organizationchart-node-toggle-button",3,"click","keydown.enter","keydown.space",4,"ngIf"],["tabindex","0",1,"p-organizationchart-node-toggle-button",3,"click","keydown.enter","keydown.space"],["class","p-organizationchart-node-toggle-button-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-organizationchart-node-toggle-button-icon"],["ngFor","",3,"ngForOf"],[1,"p-organizationchart-connector-left",3,"ngClass"],[1,"p-organizationchart-connector-right",3,"ngClass"],["colspan","2"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"node","collapsible"]],template:function(n,l){n&1&&m(0,at,15,29,"tbody",0),n&2&&c("ngIf",l.node)},dependencies:[e,I,q,ue,W,fe,K,ve,Ce,F],encapsulation:2,data:{animation:[ye("childState",[ze("in",j({opacity:1})),J("void => *",[j({opacity:0}),H(150)]),J("* => void",[H(150,j({opacity:0}))])])]}})}return e})(),v=(()=>{class e extends _e{el;cd;value;style;styleClass;selectionMode;collapsible;preserveSpace=!0;get selection(){return this._selection}set selection(t){this._selection=t,this.initialized&&this.selectionSource.next(null)}selectionChange=new S;onNodeSelect=new S;onNodeUnselect=new S;onNodeExpand=new S;onNodeCollapse=new S;templates;togglerIconTemplate;templateMap;_togglerIconTemplate;selectionSource=new ee;_selection;initialized;selectionSource$=this.selectionSource.asObservable();_componentStyle=oe(Z);constructor(t,n){super(),this.el=t,this.cd=n}get root(){return this.value&&this.value.length?this.value[0]:null}ngAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(t=>{t.getType()==="togglericon"?this._togglerIconTemplate=t.template:this.templateMap[t.getType()]=t.template}),this.initialized=!0}getTemplateForNode(t){return this.templateMap?t.type?this.templateMap[t.type]:this.templateMap.default:null}onNodeClick(t,n){let l=t.target;if(!(l.className&&(G(l,"p-organizationchart-node-toggle-button")||G(l,"p-organizationchart-node-toggle-button-icon")))&&this.selectionMode){if(n.selectable===!1)return;let g=this.findIndexInSelection(n),f=g>=0;this.selectionMode==="single"?f?(this.selection=null,this.onNodeUnselect.emit({originalEvent:t,node:n})):(this.selection=n,this.onNodeSelect.emit({originalEvent:t,node:n})):this.selectionMode==="multiple"&&(f?(this.selection=this.selection.filter((gt,Be)=>Be!=g),this.onNodeUnselect.emit({originalEvent:t,node:n})):(this.selection=[...this.selection||[],n],this.onNodeSelect.emit({originalEvent:t,node:n}))),this.selectionChange.emit(this.selection),this.selectionSource.next(null)}}findIndexInSelection(t){let n=-1;if(this.selectionMode&&this.selection){if(this.selectionMode==="single")n=this.selection==t?0:-1;else if(this.selectionMode==="multiple"){for(let l=0;l<this.selection.length;l++)if(this.selection[l]==t){n=l;break}}}return n}isSelected(t){return this.findIndexInSelection(t)!=-1}static \u0275fac=function(n){return new(n||e)(D(ae),D(X))};static \u0275cmp=h({type:e,selectors:[["p-organizationChart"],["p-organization-chart"],["p-organizationchart"]],contentQueries:function(n,l,g){if(n&1&&ce(g,rt,4)(g,y,4),n&2){let f;L(f=Q())&&(l.togglerIconTemplate=f.first),L(f=Q())&&(l.templates=f)}},inputs:{value:"value",style:"style",styleClass:"styleClass",selectionMode:"selectionMode",collapsible:[2,"collapsible","collapsible",z],preserveSpace:[2,"preserveSpace","preserveSpace",z],selection:"selection"},outputs:{selectionChange:"selectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse"},features:[me([Z]),re],decls:2,vars:8,consts:[[3,"ngStyle","ngClass"],["class","p-organizationchart-table","pOrganizationChartNode","",3,"collapsible","node",4,"ngIf"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"collapsible","node"]],template:function(n,l){n&1&&(o(0,"div",0),m(1,ct,1,2,"table",1),i()),n&2&&(O(l.styleClass),c("ngStyle",l.style)("ngClass",T(6,lt,l.preserveSpace)),s("data-pc-section","root"),a(),c("ngIf",l.root))},dependencies:[I,q,W,K,Me,F],encapsulation:2})}return e})(),Ne=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[v,Me,F,F]})}return e})();var Oe=(()=>{class e{data=[{label:"Argentina",expanded:!0,children:[{label:"Argentina",expanded:!0,children:[{label:"Argentina"},{label:"France"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}];code={basic:'<p-organization-chart [value]="data" />',html:`<div class="card flex justify-center">
    <p-organization-chart [value]="data" />
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-basic-doc',
    templateUrl: './organization-chart-basic-doc.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartBasicDoc {
    data: TreeNode[] = [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'France'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["basic-doc"]],standalone:!1,decls:12,vars:2,consts:[[1,"card","flex","justify-center","overflow-x-auto"],[3,"value"],["selector","organization-chart-basic-doc",3,"code"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"OrganizationChart requires a collection of "),o(3,"i"),r(4,"TreeNode"),i(),r(5," instances as a "),o(6,"i"),r(7,"value"),i(),r(8,"."),i()(),o(9,"div",0),p(10,"p-organization-chart",1),i(),p(11,"app-code",2)),n&2&&(a(10),c("value",l.data),a(),c("code",l.code))},dependencies:[_,b,v],encapsulation:2})}return e})();function dt(e,d){if(e&1&&(o(0,"div",4)(1,"div",5),p(2,"img",6),o(3,"span",7),r(4),i(),o(5,"span"),r(6),i()()()),e&2){let t=d.$implicit;a(2),c("src",t.data.image,A),a(2),x(t.data.name),a(2),x(t.data.title)}}var Fe=(()=>{class e{data=[{expanded:!0,type:"person",styleClass:"!bg-indigo-100 !text-indigo-900 rounded-xl",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl"},{label:"Marketing",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl"}]},{expanded:!0,type:"person",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl"},{label:"UI/UX Design",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl"}]}]}];code={basic:`<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ node.data.name }}</span>
                <span>{{ node.data.title }}</span>
            </div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card overflow-x-auto">
    <p-organization-chart [value]="data" [collapsible]="true">
        <ng-template let-node pTemplate="person">
            <div class="flex flex-col">
                <div class="flex flex-col items-center">
                    <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                    <span class="font-bold mb-2">{{ node.data.name }}</span>
                    <span>{{ node.data.title }}</span>
                </div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-colored-demo',
    templateUrl: './organization-chart-colored-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartColoredDemo {
     data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            styleClass: '!bg-indigo-100 !text-indigo-900 rounded-xl',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO',
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO',
                    },
                    children: [
                        {
                            label: 'Sales',
                            styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                        },
                        {
                            label: 'Marketing',
                            styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                        },
                    ],
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO',
                    },
                    children: [
                        {
                            label: 'Development',
                            styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                        },
                        {
                            label: 'UI/UX Design',
                            styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                        },
                    ],
                },
            ],
        },
    ];
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["organization-chart-colored-demo"]],standalone:!1,decls:13,vars:3,consts:[[1,"card","overflow-x-auto"],[3,"value","collapsible"],["pTemplate","person"],["selector","organization-chart-colored-demo",3,"code"],[1,"flex","flex-col"],[1,"flex","flex-col","items-center"],[1,"mb-4","w-12","h-12",3,"src"],[1,"font-bold","mb-2"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Styling a specific node is configured with "),o(3,"i"),r(4,"class"),i(),r(5," and "),o(6,"i"),r(7,"style"),i(),r(8," options of a TreeNode."),i()(),o(9,"div",0)(10,"p-organization-chart",1),m(11,dt,7,3,"ng-template",2),i()(),p(12,"app-code",3)),n&2&&(a(10),c("value",l.data)("collapsible",!0),a(2),c("code",l.code))},dependencies:[_,b,v,y],encapsulation:2})}return e})();var ke=(()=>{class e{code={typescript:"import { OrganizationChartModule } from 'primeng/organizationchart';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["org-chart-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&p(0,"app-code",0),n&2&&c("code",l.code)("hideToggleCode",!0)},dependencies:[_],encapsulation:2})}return e})();function pt(e,d){if(e&1&&(o(0,"div",4)(1,"div",5),p(2,"img",6),o(3,"div",7),r(4),i(),o(5,"div"),r(6),i()()()),e&2){let t=d.$implicit;a(2),c("src",t.data.image,A),a(2),x(t.data.name),a(2),x(t.data.title)}}var $e=(()=>{class e{selectedNodes;data=[{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales"},{label:"Marketing"}]},{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development"},{label:"UI/UX Design"}]}]}];code={basic:`<p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <div class="font-bold mb-2">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card flex justify-center overflow-x-auto">
    <p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
        <ng-template let-node pTemplate="person">
            <div class="flex flex-col">
                <div class="flex flex-col items-center">
                    <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                    <div class="font-bold mb-2">{{ node.data.name }}</div>
                    <div>{{ node.data.title }}</div>
                </div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-selection-demo',
    templateUrl: './organization-chart-selection-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartSelectionDemo {
    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["selection-doc"]],standalone:!1,decls:19,vars:4,consts:[[1,"card","flex","justify-center","overflow-x-auto"],["selectionMode","multiple",3,"selectionChange","value","selection","collapsible"],["pTemplate","person"],["selector","organization-chart-selection-demo",3,"code"],[1,"flex","flex-col"],[1,"flex","flex-col","items-center"],[1,"mb-4","w-12","h-12",3,"src"],[1,"font-bold","mb-2"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2," Nodes can be selected by defining "),o(3,"i"),r(4,"selectionMode"),i(),r(5," along with a value binding with "),o(6,"i"),r(7,"selection"),i(),r(8," properties. By default only one node can be selected, set "),o(9,"i"),r(10,"selectionMode"),i(),r(11," as "),o(12,"i"),r(13,"multiple"),i(),r(14," to select more than one. "),i()(),o(15,"div",0)(16,"p-organization-chart",1),se("selectionChange",function(f){return pe(l.selectedNodes,f)||(l.selectedNodes=f),f}),m(17,pt,7,3,"ng-template",2),i()(),p(18,"app-code",3)),n&2&&(a(16),c("value",l.data),de("selection",l.selectedNodes),c("collapsible",!0),a(2),c("code",l.code))},dependencies:[_,b,v,y],encapsulation:2})}return e})();function st(e,d){if(e&1&&(o(0,"div",4),p(1,"img",5),o(2,"div",6),r(3),i()()),e&2){let t=d.$implicit;a(),O("flag flag-"+t.data),c("alt",t.label),a(2),x(t.label)}}var Ae=(()=>{class e{data=[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",data:"ar"},{label:"Croatia",data:"hr"}]},{label:"France",expanded:!0,data:"fr",children:[{label:"France",data:"fr"},{label:"Morocco",data:"ma"}]}]}];code={basic:`<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="default">
        <div class="flex flex-col items-center">
            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
            <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card overflow-x-auto">
    <p-organization-chart [value]="data" [collapsible]="true">
        <ng-template let-node pTemplate="default">
            <div class="flex flex-col items-center">
                <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
                <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-template-demo',
    templateUrl: './organization-chart-template-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartTemplateDemo {
    data: TreeNode[] = [
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["template-doc"]],standalone:!1,decls:13,vars:3,consts:[[1,"card","overflow-x-auto"],[3,"value","collapsible"],["pTemplate","default"],["selector","organization-chart-template-demo",3,"code"],[1,"flex","flex-col","items-center"],["src","https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png","width","32",3,"alt"],[1,"mt-4","font-medium","text-lg"]],template:function(n,l){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Custom content instead of a node "),o(3,"i"),r(4,"label"),i(),r(5," is defined using the "),o(6,"i"),r(7,"pTemplate"),i(),r(8," property."),i()(),o(9,"div",0)(10,"p-organization-chart",1),m(11,st,4,4,"ng-template",2),i()(),p(12,"app-code",3)),n&2&&(a(10),c("value",l.data)("collapsible",!0),a(2),c("code",l.code))},dependencies:[_,b,v,y],encapsulation:2})}return e})();var Ue=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[I,be,Se,Y,Ne,Y]})}return e})();var mt=()=>["OrganizationChart"],je=(()=>{class e{docs=[{id:"import",label:"Import",component:ke},{id:"basic",label:"Basic",component:Oe},{id:"template",label:"Template",component:Ae},{id:"selection",label:"Selection",component:$e},{id:"colored",label:"Colored",component:Fe},{id:"accessibility",label:"Accessibility",component:we}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Organization Chart Component","header","OrganizationChart","description","OrganizationChart visualizes hierarchical organization data.",3,"docs","apiDocs"]],template:function(n,l){n&1&&p(0,"app-doc",0),n&2&&c("docs",l.docs)("apiDocs",ge(2,mt))},dependencies:[Ue,Te],styles:["[_nghost-%COMP%]     .p-organizationchart .p-person{padding:0;border:0 none}[_nghost-%COMP%]     .p-organizationchart .node-header, [_nghost-%COMP%]     .p-organizationchart .node-content{padding:.5em .7rem}[_nghost-%COMP%]     .p-organizationchart .node-header{background-color:#495ebb;color:#fff}[_nghost-%COMP%]     .p-organizationchart .node-content{text-align:center;border:1px solid #495ebb}[_nghost-%COMP%]     .p-organizationchart .node-content img{border-radius:50%}[_nghost-%COMP%]     .p-organizationchart .department-cfo{background-color:#7247bc;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-coo{background-color:#a534b6;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-cto{background-color:#e9286f;color:#fff}"]})}return e})();var zn=[{path:"",component:je}];export{zn as default};
