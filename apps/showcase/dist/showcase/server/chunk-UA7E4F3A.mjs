import './polyfills.server.mjs';
import{a as ne}from"./chunk-JXRASPNW.mjs";import{a as Ye}from"./chunk-6GLSMZCZ.mjs";import{a as W}from"./chunk-NT423BMI.mjs";import"./chunk-TILO7BIE.mjs";import{a as He,b as Qe}from"./chunk-AELPXV2Z.mjs";import"./chunk-P3BSQTDP.mjs";import{a as oe}from"./chunk-AMGQPWR6.mjs";import"./chunk-5IQQKL7W.mjs";import{a as F}from"./chunk-VTA4L4HB.mjs";import{a as E}from"./chunk-XSLTCZBH.mjs";import"./chunk-RP7DCUL4.mjs";import"./chunk-EUY3H6M4.mjs";import"./chunk-ZAJPSZPD.mjs";import"./chunk-RNBAXVKN.mjs";import{a as b,d as Ge,e as ve}from"./chunk-HZSAMTDM.mjs";import{a as _,b as Je}from"./chunk-EK6YV52O.mjs";import{e as $,j as U,s as je}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{$ as qe,P as Ue,aa as q,ba as We}from"./chunk-DE54ZEHA.mjs";import{Ga as ze,Ja as $e,i as xe,pa as Be,ta as Re,ua as Ne,wa as Ke,xa as Ae}from"./chunk-YQJJ7I3T.mjs";import{f as ae,j as Ve}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{k as S,m as D,n as Fe,q as Ee,r as Me,t as Le,u as Ie,v as re}from"./chunk-RUZVPFSZ.mjs";import{$a as j,Bb as l,Bc as ge,Cb as a,Cc as fe,Db as r,Dc as v,Eb as p,Ib as ce,Jb as me,Kb as B,Lb as I,Ma as L,N as Se,O as se,Qb as G,S as Q,Sa as o,Sb as u,Tb as Oe,Ub as ue,Vb as Te,X as O,Xb as y,Y as T,Yb as w,Zc as k,_c as z,ac as V,da as J,dc as Y,ec as n,fc as f,gb as x,gc as Pe,ha as P,hb as le,jc as R,kc as N,la as _e,lb as Ce,lc as K,ma as te,mb as g,oc as ke,pc as De,qc as h,rc as ie,wb as de,xb as pe,zc as A}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Xe=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275cmp=x({type:t,selectors:[["data-view-accessibility-doc"]],standalone:!1,decls:52,vars:0,consts:[["href","/configuration/#locale",1,""],["href","/paginator",1,""],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,i){s&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),r(),a(4,"p"),n(5," The container element that wraps the layout options buttons has a "),a(6,"i"),n(7,"group"),r(),n(8," role whereas each button element uses "),a(9,"i"),n(10,"button"),r(),n(11," role and "),a(12,"i"),n(13,"aria-pressed"),r(),n(14," is updated depending on selection state. Values to describe the buttons are derived from the "),a(15,"i"),n(16,"aria.listView"),r(),n(17," and "),a(18,"i"),n(19,"aria.gridView"),r(),n(20," properties of the "),a(21,"a",0),n(22,"locale"),r(),n(23," API respectively. "),r(),a(24,"p"),n(25,"Refer to "),a(26,"a",1),n(27,"paginator"),r(),n(28," accessibility documentation for the paginator of the component."),r(),a(29,"h3"),n(30,"Keyboard Support"),r(),a(31,"div",2)(32,"table",3)(33,"thead")(34,"tr")(35,"th"),n(36,"Key"),r(),a(37,"th"),n(38,"Function"),r()()(),a(39,"tbody")(40,"tr")(41,"td")(42,"i"),n(43,"tab"),r()(),a(44,"td"),n(45,"Moves focus to the buttons."),r()(),a(46,"tr")(47,"td")(48,"i"),n(49,"space"),r()(),a(50,"td"),n(51,"Toggles the checked state of a button."),r()()()()()()())},dependencies:[b],encapsulation:2})}return t})();var dt=({dt:t})=>`
.p-dataview {
    border-color: ${t("dataview.border.color")};
    border-width: ${t("dataview.border.width")};
    border-style: solid;
    border-radius: ${t("dataview.border.radius")};
    padding: ${t("dataview.padding")};
}

.p-dataview-header {
    background: ${t("dataview.header.background")};
    color: ${t("dataview.header.color")};
    border-color: ${t("dataview.header.border.color")};
    border-width: ${t("dataview.header.border.width")};
    border-style: solid;
    padding: ${t("dataview.header.padding")};
    border-radius: ${t("dataview.header.border.radius")};
}

.p-dataview-content {
    background: ${t("dataview.content.background")};
    border-color: ${t("dataview.content.border.color")};
    border-width: ${t("dataview.content.border.width")};
    border-style: solid;
    color: ${t("dataview.content.color")};
    padding: ${t("dataview.content.padding")};
    border-radius: ${t("dataview.content.border.radius")};
}

.p-dataview-footer {
    background: ${t("dataview.footer.background")};
    color: ${t("dataview.footer.color")};
    border-color: ${t("dataview.footer.border.color")};
    border-width: ${t("dataview.footer.border.width")};
    border-style: solid;
    padding: ${t("dataview.footer.padding")};
    border-radius: ${t("dataview.footer.border.radius")};
}

.p-dataview-paginator-top {
    border-width: ${t("dataview.paginator.top.border.width")};
    border-color: ${t("dataview.paginator.top.border.color")};
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: ${t("dataview.paginator.bottom.border.width")};
    border-color: ${t("dataview.paginator.bottom.border.color")};
    border-style: solid;
}
`,pt={root:({props:t})=>["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}],header:"p-dataview-header",pcPaginator:({position:t})=>"p-dataview-paginator-"+t,content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},ye=(()=>{class t extends ze{name="dataview";theme=dt;classes=pt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275prov=Se({token:t,factory:t.\u0275fac})}return t})();var ct=["list"],mt=["grid"],ut=["header"],gt=["emptymessage"],ft=["footer"],xt=["paginatorleft"],vt=["paginatorright"],yt=["paginatordropdownitem"],wt=["loadingicon"],ht=["listicon"],bt=["gridicon"],St=[[["p-header"]],[["p-footer"]]],_t=["p-header","p-footer"],Ct=(t,d)=>({"p-dataview p-component":!0,"p-dataview-list":t,"p-dataview-grid":d}),Ze=t=>({$implicit:t});function Ot(t,d){if(t&1&&p(0,"i"),t&2){let e=u(2);Y("p-dataview-loading-icon pi-spin "+e.loadingIcon)}}function Tt(t,d){t&1&&p(0,"SpinnerIcon",14),t&2&&l("spin",!0)("styleClass","p-dataview-loading-icon")}function Pt(t,d){}function kt(t,d){t&1&&g(0,Pt,0,0,"ng-template")}function Dt(t,d){if(t&1&&(ce(0),g(1,Tt,1,2,"SpinnerIcon",12)(2,kt,1,0,null,13),me()),t&2){let e=u(2);o(),l("ngIf",!e.loadingicon),o(),l("ngTemplateOutlet",e.loadingicon)}}function Ft(t,d){if(t&1&&(a(0,"div",9)(1,"div",10),g(2,Ot,1,2,"i",11)(3,Dt,3,2,"ng-container",6),r()()),t&2){let e=u();o(2),l("ngIf",e.loadingIcon),o(),l("ngIf",!e.loadingIcon)}}function Et(t,d){t&1&&B(0)}function Mt(t,d){if(t&1&&(a(0,"div",15),ue(1),g(2,Et,1,0,"ng-container",13),r()),t&2){let e=u();o(2),l("ngTemplateOutlet",e.headerTemplate)}}function Lt(t,d){if(t&1){let e=I();a(0,"p-paginator",16),G("onPageChange",function(i){O(e);let c=u();return T(c.paginate(i))}),r()}if(t&2){let e=u();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function It(t,d){t&1&&B(0)}function Vt(t,d){if(t&1&&(g(0,It,1,0,"ng-container",17),A(1,"slice")),t&2){let e=u();l("ngTemplateOutlet",e.listTemplate)("ngTemplateOutletContext",h(6,Ze,e.paginator?fe(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function jt(t,d){t&1&&B(0)}function Bt(t,d){if(t&1&&(g(0,jt,1,0,"ng-container",17),A(1,"slice")),t&2){let e=u();l("ngTemplateOutlet",e.gridTemplate)("ngTemplateOutletContext",h(6,Ze,e.paginator?fe(1,2,e.filteredValue||e.value,e.lazy?0:e.first,(e.lazy?0:e.first)+e.rows):e.filteredValue||e.value))}}function Rt(t,d){if(t&1&&(ce(0),n(1),me()),t&2){let e=u(2);o(),Pe(" ",e.emptyMessageLabel," ")}}function Nt(t,d){t&1&&B(0,null,0)}function Kt(t,d){if(t&1&&(a(0,"div")(1,"div",18),g(2,Rt,2,1,"ng-container",19)(3,Nt,2,0,"ng-container",13),r()()),t&2){let e=u();o(2),l("ngIf",!e.emptymessageTemplate)("ngIfElse",e.empty),o(),l("ngTemplateOutlet",e.emptymessageTemplate)}}function At(t,d){if(t&1){let e=I();a(0,"p-paginator",20),G("onPageChange",function(i){O(e);let c=u();return T(c.paginate(i))}),r()}if(t&2){let e=u();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("dropdownAppendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("templateLeft",e.paginatorleft)("templateRight",e.paginatorright)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatordropdownitem)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showPageLinks",e.showPageLinks)("styleClass",e.paginatorStyleClass)}}function zt(t,d){t&1&&B(0)}function $t(t,d){if(t&1&&(a(0,"div",21),ue(1,1),g(2,zt,1,0,"ng-container",13),r()),t&2){let e=u();o(2),l("ngTemplateOutlet",e.footerTemplate)}}var C=(()=>{class t extends $e{paginator;rows;totalRecords;pageLinks=5;rowsPerPageOptions;paginatorPosition="bottom";paginatorStyleClass;alwaysShowPaginator=!0;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showFirstLastIcon=!0;showPageLinks=!0;lazy;lazyLoadOnInit=!0;emptyMessage="";style;styleClass;gridStyleClass="";trackBy=(e,s)=>s;filterBy;filterLocale;loading;loadingIcon;first=0;sortField;sortOrder;value;layout="list";onLazyLoad=new J;onPage=new J;onSort=new J;onChangeLayout=new J;listTemplate;gridTemplate;headerTemplate;emptymessageTemplate;footerTemplate;paginatorleft;paginatorright;paginatordropdownitem;loadingicon;listicon;gridicon;header;footer;_value;filteredValue;filterValue;initialized;_layout="list";translationSubscription;_componentStyle=Q(ye);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Ae.EMPTY_MESSAGE)}filterService=Q(Be);ngOnInit(){super.ngOnInit(),this.lazy&&this.lazyLoadOnInit&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.initialized=!0}ngAfterViewInit(){super.ngAfterViewInit()}ngOnChanges(e){super.ngOnChanges(e),e.layout&&!e.layout.firstChange&&this.onChangeLayout.emit({layout:e.layout.currentValue}),e.value&&(this._value=e.value.currentValue,this.updateTotalRecords(),!this.lazy&&this.hasFilter()&&this.filter(this.filterValue)),(e.sortField||e.sortOrder)&&(!this.lazy||this.initialized)&&this.sort()}updateTotalRecords(){this.totalRecords=this.lazy?this.totalRecords:this._value?this._value.length:0}paginate(e){this.first=e.first,this.rows=e.rows,this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.onPage.emit({first:this.first,rows:this.rows})}sort(){this.first=0,this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.value.sort((e,s)=>{let i=xe(e,this.sortField),c=xe(s,this.sortField),m=null;return i==null&&c!=null?m=-1:i!=null&&c==null?m=1:i==null&&c==null?m=0:typeof i=="string"&&typeof c=="string"?m=i.localeCompare(c):m=i<c?-1:i>c?1:0,this.sortOrder*m}),this.hasFilter()&&this.filter(this.filterValue)),this.onSort.emit({sortField:this.sortField,sortOrder:this.sortOrder})}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder}}getBlockableElement(){return this.el.nativeElement.children[0]}filter(e,s="contains"){if(this.filterValue=e,this.value&&this.value.length){let i=this.filterBy.split(",");this.filteredValue=this.filterService.filter(this.value,i,e,s,this.filterLocale),this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.first=0,this.totalRecords=this.filteredValue?this.filteredValue.length:this.value?this.value.length:0),this.cd.markForCheck()}}hasFilter(){return this.filterValue&&this.filterValue.trim().length>0}ngOnDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-dataView"],["p-dataview"],["p-data-view"]],contentQueries:function(s,i,c){if(s&1&&Te(c,ct,5)(c,mt,5)(c,ut,5)(c,gt,5)(c,ft,5)(c,xt,5)(c,vt,5)(c,yt,5)(c,wt,5)(c,ht,5)(c,bt,5)(c,Re,5)(c,Ne,5),s&2){let m;y(m=w())&&(i.listTemplate=m.first),y(m=w())&&(i.gridTemplate=m.first),y(m=w())&&(i.headerTemplate=m.first),y(m=w())&&(i.emptymessageTemplate=m.first),y(m=w())&&(i.footerTemplate=m.first),y(m=w())&&(i.paginatorleft=m.first),y(m=w())&&(i.paginatorright=m.first),y(m=w())&&(i.paginatordropdownitem=m.first),y(m=w())&&(i.loadingicon=m.first),y(m=w())&&(i.listicon=m.first),y(m=w())&&(i.gridicon=m.first),y(m=w())&&(i.header=m.first),y(m=w())&&(i.footer=m.first)}},inputs:{paginator:[2,"paginator","paginator",k],rows:[2,"rows","rows",z],totalRecords:[2,"totalRecords","totalRecords",z],pageLinks:[2,"pageLinks","pageLinks",z],rowsPerPageOptions:"rowsPerPageOptions",paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",k],paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",k],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",k],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",k],showPageLinks:[2,"showPageLinks","showPageLinks",k],lazy:[2,"lazy","lazy",k],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",k],emptyMessage:"emptyMessage",style:"style",styleClass:"styleClass",gridStyleClass:"gridStyleClass",trackBy:"trackBy",filterBy:"filterBy",filterLocale:"filterLocale",loading:[2,"loading","loading",k],loadingIcon:"loadingIcon",first:[2,"first","first",z],sortField:"sortField",sortOrder:[2,"sortOrder","sortOrder",z],value:"value",layout:"layout"},outputs:{onLazyLoad:"onLazyLoad",onPage:"onPage",onSort:"onSort",onChangeLayout:"onChangeLayout"},features:[ke([ye]),Ce,_e],ngContentSelectors:_t,decls:10,vars:15,consts:[["empty",""],[3,"ngClass","ngStyle"],["class","p-dataview-loading",4,"ngIf"],["class","p-dataview-header",4,"ngIf"],["styleClass","p-paginator-top",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],[1,"p-dataview-content"],[4,"ngIf"],["styleClass","p-paginator-bottom",3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass","onPageChange",4,"ngIf"],["class","p-dataview-footer",4,"ngIf"],[1,"p-dataview-loading"],[1,"p-dataview-loading-overlay","p-overlay-mask"],[3,"class",4,"ngIf"],[3,"spin","styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"spin","styleClass"],[1,"p-dataview-header"],["styleClass","p-paginator-top",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-dataview-emptymessage"],[4,"ngIf","ngIfElse"],["styleClass","p-paginator-bottom",3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","dropdownAppendTo","dropdownScrollHeight","templateLeft","templateRight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showPageLinks","styleClass"],[1,"p-dataview-footer"]],template:function(s,i){s&1&&(Oe(St),a(0,"div",1),g(1,Ft,4,2,"div",2)(2,Mt,3,1,"div",3)(3,Lt,1,17,"p-paginator",4),a(4,"div",5),de(5,Vt,2,8,"ng-container"),de(6,Bt,2,8,"ng-container"),g(7,Kt,4,3,"div",6),r(),g(8,At,1,17,"p-paginator",7)(9,$t,3,1,"div",8),r()),s&2&&(Y(i.styleClass),l("ngClass",ie(12,Ct,i.layout==="list",i.layout==="grid"))("ngStyle",i.style),o(),l("ngIf",i.loading),o(),l("ngIf",i.header||i.headerTemplate),o(),l("ngIf",i.paginator&&(i.paginatorPosition==="top"||i.paginatorPosition=="both")),o(2),pe(i.layout==="list"?5:-1),o(),pe(i.layout==="grid"?6:-1),o(),l("ngIf",i.isEmpty()&&!i.loading),o(),l("ngIf",i.paginator&&(i.paginatorPosition==="bottom"||i.paginatorPosition=="both")),o(),l("ngIf",i.footer||i.footerTemplate))},dependencies:[re,S,Fe,Me,Ee,Qe,He,Ue,Ke,Ie],encapsulation:2,changeDetection:0})}return t})();var Ut=t=>({"border-t border-surface-200 dark:border-surface-700":t});function qt(t,d){if(t&1&&(a(0,"div",7)(1,"div",8)(2,"div",9),p(3,"img",10)(4,"p-tag",11),r(),a(5,"div",12)(6,"div",13)(7,"div")(8,"span",14),n(9),r(),a(10,"div",15),n(11),r()(),a(12,"div",16)(13,"div",17)(14,"span",18),n(15),r(),p(16,"i",19),r()()(),a(17,"div",20)(18,"span",21),n(19),r(),a(20,"div",22),p(21,"p-button",23)(22,"p-button",24),r()()()()()),t&2){let e=d.$implicit,s=d.first,i=u(2);o(),l("ngClass",h(15,Ut,!s)),o(2),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,L)("alt",e.name),o(),V("left",4,"px")("top",4,"px"),l("value",e.inventoryStatus)("severity",i.getSeverity(e)),o(5),f(e.category),o(2),f(e.name),o(4),f(e.rating),o(4),f("$"+e.price),o(2),l("outlined",!0),o(),l("disabled",e.inventoryStatus==="OUTOFSTOCK")}}function Wt(t,d){if(t&1&&(a(0,"div",5),g(1,qt,23,17,"div",6),r()),t&2){let e=d.$implicit;o(),l("ngForOf",e)}}var et=(()=>{class t{products=P([]);productService=Q(F);code={basic:`<p-dataview #dv [value]="products()">
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute"
                            styleClass="dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>`,html:`<div class="card">
    <p-dataview #dv [value]="products()">
        <ng-template #list let-items>
            <div class="grid grid-cols-12 gap-4 grid-nogutter">
                <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                    >
                        <div class="md:w-40 relative">
                            <img
                                class="block xl:block mx-auto rounded-border w-full"
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                                [alt]="item.name"
                            />
                            <p-tag
                                [value]="item.inventoryStatus"
                                [severity]="getSeverity(item)"
                                class="absolute"
                                styleClass="dark:!bg-surface-900"
                                [style.left.px]="4"
                                [style.top.px]="4"
                            />
                        </div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                    <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                </div>
                                <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                    <div
                                        class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                        style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                    >
                                        <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                            item.rating
                                        }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                    '$' + item.price
                                }}</span>
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <p-button icon="pi pi-heart" [outlined]="true" />
                                    <p-button
                                        icon="pi pi-shopping-cart"
                                        class="flex-auto md:flex-initial whitespace-nowrap"
                                        label="Buy Now"
                                        [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataview>
</div>`,typescript:`import { Component, inject, signal } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'data-view-basic-demo',
    templateUrl: './data-view-basic-demo.html',
    standalone: true,
    imports: [DataView, ButtonModule, Tag, CommonModule],
    providers: [ProductService]
})
export class DataViewBasicDemo {
    products = signal<any>([]);

    productService = inject(ProductService);
    
    ngOnInit() {
        this.productService.getProducts().then((data) => {
            const d = data.slice(0, 5);
            this.products.set([...d])
        });
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }

}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};getSeverity(e){switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}ngOnInit(){this.productService.getProducts().then(e=>{let s=e.slice(0,5);this.products.set([...s])})}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)};static \u0275cmp=x({type:t,selectors:[["data-view-basic-demo"]],standalone:!1,decls:12,vars:3,consts:[["dv",""],["list",""],[1,"card"],[3,"value"],["selector","data-view-basic-demo",3,"code","extFiles"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],["class","col-span-12",4,"ngFor","ngForOf"],[1,"col-span-12"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4",3,"ngClass"],[1,"md:w-40","relative"],[1,"block","xl:block","mx-auto","rounded-border","w-full",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity"],[1,"flex","flex-col","md:flex-row","justify-between","md:items-center","flex-1","gap-6"],[1,"flex","flex-row","md:flex-col","justify-between","items-start","gap-2"],[1,"font-medium","text-secondary","text-sm"],[1,"text-lg","font-medium","text-surface-900","dark:text-surface-0","mt-2"],[1,"bg-surface-100","dark:bg-surface-700","p-1",2,"border-radius","30px"],[1,"bg-surface-0","dark:bg-surface-900","flex","items-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"text-surface-900","dark:text-surface-0","font-medium","text-sm"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"flex","flex-col","md:items-end","gap-8"],[1,"text-xl","font-semibold","text-surface-900","dark:text-surface-0"],[1,"flex","flex-row-reverse","md:flex-row","gap-2"],["icon","pi pi-heart",3,"outlined"],["icon","pi pi-shopping-cart","label","Buy Now",1,"flex-auto","md:flex-initial","whitespace-nowrap",3,"disabled"]],template:function(s,i){s&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"DataView requires a value to display along with a "),a(3,"i"),n(4,"list"),r(),n(5," template that receives an object in the collection to return content."),r()(),a(6,"div",2)(7,"p-dataview",3,0),g(9,Wt,2,1,"ng-template",null,1,v),r()(),p(11,"app-code",4)),s&2&&(o(7),l("value",i.products()),o(4),l("code",i.code)("extFiles",i.extFiles))},dependencies:[S,D,_,b,C,q,E],encapsulation:2})}return t})();var tt=(()=>{class t{code={typescript:"import { DataViewModule } from 'primeng/dataview';"};static \u0275fac=function(s){return new(s||t)};static \u0275cmp=x({type:t,selectors:[["data-view-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(s,i){s&1&&p(0,"app-code",0),s&2&&l("code",i.code)("hideToggleCode",!0)},dependencies:[_],encapsulation:2})}return t})();var Qt=(t,d)=>({"pi-bars":t,"pi-table":d}),Jt=t=>({"border-t border-surface-200 dark:border-surface-700":t});function Gt(t,d){if(t&1&&p(0,"i",10),t&2){let e=d.$implicit;l("ngClass",ie(1,Qt,e==="list",e==="grid"))}}function Yt(t,d){if(t&1){let e=I();a(0,"div",8)(1,"p-selectbutton",9),K("ngModelChange",function(i){O(e);let c=u();return N(c.layout,i)||(c.layout=i),T(i)}),g(2,Gt,1,4,"ng-template",null,4,v),r()()}if(t&2){let e=u();o(),R("ngModel",e.layout),l("options",e.options)("allowEmpty",!1)}}function Xt(t,d){if(t&1&&(a(0,"div")(1,"div",12)(2,"div",13),p(3,"img",14)(4,"p-tag",15),r(),a(5,"div",16)(6,"div",17)(7,"div")(8,"span",18),n(9),r(),a(10,"div",19),n(11),r()(),a(12,"div",20)(13,"div",21)(14,"span",22),n(15),r(),p(16,"i",23),r()()(),a(17,"div",24)(18,"span",25),n(19),A(20,"currency"),r(),a(21,"div",26),p(22,"button",27)(23,"button",28),r()()()()()),t&2){let e=d.$implicit,s=d.first,i=u(2);o(),l("ngClass",h(18,Jt,!s)),o(2),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,L)("alt",e.name),o(),V("left",4,"px")("top",4,"px"),l("value",e.inventoryStatus)("severity",i.getSeverity(e)),o(5),f(e.category),o(2),f(e.name),o(4),f(e.rating),o(4),f(ge(20,15,e.price,"USD")),o(3),l("outlined",!0),o(),l("disabled",e.inventoryStatus==="OUTOFSTOCK")}}function Zt(t,d){if(t&1&&g(0,Xt,24,20,"div",11),t&2){let e=d.$implicit;l("ngForOf",e)}}function ei(t,d){if(t&1&&(a(0,"div",31)(1,"div",32)(2,"div",33)(3,"div",34),p(4,"img",35)(5,"p-tag",15),r()(),a(6,"div",36)(7,"div",37)(8,"div")(9,"span",18),n(10),r(),a(11,"div",38),n(12),r()(),a(13,"div",39)(14,"div",40)(15,"span",22),n(16),r(),p(17,"i",23),r()()(),a(18,"div",41)(19,"span",42),n(20),A(21,"currency"),r(),a(22,"div",43),p(23,"button",44)(24,"button",45),r()()()()()),t&2){let e=d.$implicit,s=u(2);o(4),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,L)("alt",e.name),o(),V("left",4,"px")("top",4,"px"),l("value",e.inventoryStatus)("severity",s.getSeverity(e)),o(5),f(e.category),o(2),f(e.name),o(4),f(e.rating),o(4),f(ge(21,13,e.price,"USD")),o(3),l("disabled",e.inventoryStatus==="OUTOFSTOCK")}}function ti(t,d){if(t&1&&(a(0,"div",29),g(1,ei,25,16,"div",30),r()),t&2){let e=d.$implicit;o(),l("ngForOf",e)}}var rt=(()=>{class t{productService;layout="grid";products=P([]);options=["list","grid"];constructor(e){this.productService=e}code={basic:`<p-dataview #dv [value]="products()" [layout]="layout">
    <ng-template #header>
        <div class="flex justify-end">
            <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                <ng-template #item let-item>
                    <i class="pi " [ngClass]="{ 'pi-bars': item === 'list', 'pi-table': item === 'grid' }"></i>
                </ng-template>
            </p-selectbutton>
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div *ngFor="let item of items; let first = first">
            <div
                class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
            >
                <div class="md:w-40 relative">
                    <img
                        class="block xl:block mx-auto rounded w-full"
                        [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                        [alt]="item.name"
                    />
                    <p-tag
                        [value]="item.inventoryStatus"
                        [severity]="getSeverity(item)"
                        class="absolute"
                        styleClass="dark:!bg-surface-900"
                        [style.left.px]="4"
                        [style.top.px]="4"
                    />
                </div>
                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                            <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                        </div>
                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                            <div
                                class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                            >
                                <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                <i class="pi pi-star-fill text-yellow-500"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:items-end gap-8">
                        <span class="text-xl font-semibold">{{ item.price | currency: 'USD' }}</span>
                        <div class="flex flex-row-reverse md:flex-row gap-2">
                            <button pButton icon="pi pi-heart" [outlined]="true"></button>
                            <button
                                pButton
                                icon="pi pi-shopping-cart"
                                label="Buy Now"
                                [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                class="flex-auto md:flex-initial whitespace-nowrap"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #grid let-items>
        <div class="grid grid-cols-12 gap-4">
            <div *ngFor="let product of items" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                <div
                    class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
                >
                    <div class="bg-surface-50 flex justify-center rounded p-4">
                        <div class="relative mx-auto">
                            <img
                                class="rounded w-full"
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                                [alt]="product.name"
                                style="max-width: 300px"
                            />
                            <p-tag
                                [value]="product.inventoryStatus"
                                [severity]="getSeverity(product)"
                                class="absolute"
                                styleClass="dark:!bg-surface-900"
                                [style.left.px]="4"
                                [style.top.px]="4"
                            />
                        </div>
                    </div>
                    <div class="pt-6">
                        <div class="flex flex-row justify-between products-start gap-2">
                            <div>
                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                    product.category
                                }}</span>
                                <div class="text-lg font-medium mt-1">{{ product.name }}</div>
                            </div>
                            <div class="bg-surface-100 p-1" style="border-radius: 30px; height:100%">
                                <div
                                    class="bg-surface-0 flex products-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 font-medium text-sm">{{ product.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-6 mt-6">
                            <span class="text-2xl font-semibold">{{ product.price | currency: 'USD' }}</span>
                            <div class="flex gap-2">
                                <button
                                    pButton
                                    icon="pi pi-shopping-cart"
                                    label="Buy Now"
                                    [disabled]="product.inventoryStatus === 'OUTOFSTOCK'"
                                    class="flex-auto whitespace-nowrap"
                                ></button>
                                <button pButton icon="pi pi-heart" outlined></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>`,html:`<div class="card">
    <p-dataview #dv [value]="products()" [layout]="layout">
        <ng-template #header>
            <div class="flex justify-end">
                <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                    <ng-template #item let-item>
                        <i class="pi " [ngClass]="{ 'pi-bars': item === 'list', 'pi-table': item === 'grid' }"></i>
                    </ng-template>
                </p-selectbutton>
            </div>
        </ng-template>
        <ng-template #list let-items>
            <div *ngFor="let item of items; let first = first">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute"
                            styleClass="dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold">{{ item.price | currency: 'USD' }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <button pButton icon="pi pi-heart" [outlined]="true"></button>
                                <button
                                    pButton
                                    icon="pi pi-shopping-cart"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #grid let-items>
            <div class="grid grid-cols-12 gap-4">
                <div *ngFor="let product of items" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                    <div
                        class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"
                    >
                        <div class="bg-surface-50 flex justify-center rounded p-4">
                            <div class="relative mx-auto">
                                <img
                                    class="rounded w-full"
                                    [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                                    [alt]="product.name"
                                    style="max-width: 300px"
                                />
                                <p-tag
                                    [value]="product.inventoryStatus"
                                    [severity]="getSeverity(product)"
                                    class="absolute"
                                    styleClass="dark:!bg-surface-900"
                                    [style.left.px]="4"
                                    [style.top.px]="4"
                                />
                            </div>
                        </div>
                        <div class="pt-6">
                            <div class="flex flex-row justify-between products-start gap-2">
                                <div>
                                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                        product.category
                                    }}</span>
                                    <div class="text-lg font-medium mt-1">{{ product.name }}</div>
                                </div>
                                <div class="bg-surface-100 p-1" style="border-radius: 30px; height:100%">
                                    <div
                                        class="bg-surface-0 flex products-center gap-2 justify-center py-1 px-2"
                                        style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                    >
                                        <span class="text-surface-900 font-medium text-sm">{{ product.rating }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6 mt-6">
                                <span class="text-2xl font-semibold">{{ product.price | currency: 'USD' }}</span>
                                <div class="flex gap-2">
                                    <button
                                        pButton
                                        icon="pi pi-shopping-cart"
                                        label="Buy Now"
                                        [disabled]="product.inventoryStatus === 'OUTOFSTOCK'"
                                        class="flex-auto whitespace-nowrap"
                                    ></button>
                                    <button pButton icon="pi pi-heart" outlined></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataview>
</div>`,typescript:`import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
    selector: 'data-view-layout-demo',
    templateUrl: './data-view-layout-demo.html',
    standalone: true,
    imports: [
      DataView,
      Tag,
      Rating,
      ButtonModule,
      CommonModule,
      SelectButton,
      FormsModule
    ],
    providers: [ProductService],
})
export class DataViewLayoutDemo {
    layout: string = 'grid';

    products = signal<any>([]);

    options = ['list', 'grid'];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => {
            this.products.set([...data.slice(0,12)]);
        });
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};getSeverity(e){switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}ngOnInit(){this.productService.getProducts().then(e=>{this.products.set([...e.slice(0,12)])})}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(j(F))};static \u0275cmp=x({type:t,selectors:[["data-view-layout-demo"]],standalone:!1,decls:25,vars:4,consts:[["dv",""],["header",""],["list",""],["grid",""],["item",""],[1,"card"],[3,"value","layout"],["selector","data-view-layout-demo",3,"code","extFiles"],[1,"flex","justify-end"],[3,"ngModelChange","ngModel","options","allowEmpty"],[1,"pi",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4",3,"ngClass"],[1,"md:w-40","relative"],[1,"block","xl:block","mx-auto","rounded","w-full",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity"],[1,"flex","flex-col","md:flex-row","justify-between","md:items-center","flex-1","gap-6"],[1,"flex","flex-row","md:flex-col","justify-between","items-start","gap-2"],[1,"font-medium","text-surface-500","dark:text-surface-400","text-sm"],[1,"text-lg","font-medium","mt-2"],[1,"bg-surface-100","p-1",2,"border-radius","30px"],[1,"bg-surface-0","flex","items-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"text-surface-900","font-medium","text-sm"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"flex","flex-col","md:items-end","gap-8"],[1,"text-xl","font-semibold"],[1,"flex","flex-row-reverse","md:flex-row","gap-2"],["pButton","","icon","pi pi-heart",3,"outlined"],["pButton","","icon","pi pi-shopping-cart","label","Buy Now",1,"flex-auto","md:flex-initial","whitespace-nowrap",3,"disabled"],[1,"grid","grid-cols-12","gap-4"],["class","col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2",4,"ngFor","ngForOf"],[1,"col-span-12","sm:col-span-6","md:col-span-4","xl:col-span-6","p-2"],[1,"p-6","border","border-surface-200","dark:border-surface-700","bg-surface-0","dark:bg-surface-900","rounded","flex","flex-col"],[1,"bg-surface-50","flex","justify-center","rounded","p-4"],[1,"relative","mx-auto"],[1,"rounded","w-full",2,"max-width","300px",3,"src","alt"],[1,"pt-6"],[1,"flex","flex-row","justify-between","products-start","gap-2"],[1,"text-lg","font-medium","mt-1"],[1,"bg-surface-100","p-1",2,"border-radius","30px","height","100%"],[1,"bg-surface-0","flex","products-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"flex","flex-col","gap-6","mt-6"],[1,"text-2xl","font-semibold"],[1,"flex","gap-2"],["pButton","","icon","pi pi-shopping-cart","label","Buy Now",1,"flex-auto","whitespace-nowrap",3,"disabled"],["pButton","","icon","pi pi-heart","outlined",""]],template:function(s,i){s&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"DataView supports "),a(3,"i"),n(4,"list"),r(),n(5," and "),a(6,"i"),n(7,"grid"),r(),n(8," display modes defined with the "),a(9,"i"),n(10,"layout"),r(),n(11," property. The "),a(12,"i"),n(13,"grid"),r(),n(14," mode is not built-in for flexibility purposes and requires a library with CSS grid features like Tailwind."),r()(),a(15,"div",5)(16,"p-dataview",6,0),g(18,Yt,4,3,"ng-template",null,1,v)(20,Zt,1,1,"ng-template",null,2,v)(22,ti,2,1,"ng-template",null,3,v),r()(),p(24,"app-code",7)),s&2&&(o(16),l("value",i.products())("layout",i.layout),o(8),l("code",i.code)("extFiles",i.extFiles))},dependencies:[S,D,_,W,b,C,qe,E,$,U,Le],encapsulation:2})}return t})();var ri=t=>({"border-t border-surface-200 dark:border-surface-700":t});function ai(t,d){if(t&1&&p(0,"i"),t&2){let e=d.$implicit;Y(e==="list"?"pi pi-bars":"pi pi-table")}}function oi(t,d){if(t&1){let e=I();a(0,"div",9)(1,"p-selectbutton",10),K("ngModelChange",function(i){O(e);let c=u();return N(c.layout,i)||(c.layout=i),T(i)}),g(2,ai,1,2,"ng-template",null,4,v),r()()}if(t&2){let e=u();o(),R("ngModel",e.layout),l("options",e.options)("allowEmpty",!1)}}function ni(t,d){if(t&1&&(a(0,"div")(1,"div",13),p(2,"p-skeleton",14),a(3,"div",15)(4,"div",16),p(5,"p-skeleton",17)(6,"p-skeleton",18),a(7,"div",19),p(8,"p-skeleton",18)(9,"p-skeleton",20),r()(),a(10,"div",21),p(11,"p-skeleton",22)(12,"p-skeleton",23),r()()()()),t&2){let e=d.first;o(),l("ngClass",h(1,ri,!e))}}function si(t,d){if(t&1&&(a(0,"div",11),g(1,ni,13,3,"div",12),r()),t&2){let e=u();o(),l("ngForOf",e.counterArray(6))}}function li(t,d){t&1&&(a(0,"div",26)(1,"div",27)(2,"div",28),p(3,"p-skeleton",29)(4,"p-skeleton",20),r(),a(5,"div",30),p(6,"p-skeleton",31)(7,"p-skeleton",17)(8,"p-skeleton",18),r(),a(9,"div",32),p(10,"p-skeleton",22)(11,"p-skeleton",33),r()()())}function di(t,d){if(t&1&&(a(0,"div",24),g(1,li,12,0,"div",25),r()),t&2){let e=u();o(),l("ngForOf",e.counterArray(6))}}var at=(()=>{class t{productService;layout="grid";products=P([]);options=["list","grid"];constructor(e){this.productService=e}code={basic:`<p-dataview #dv [value]="products()" [layout]="layout">
    <ng-template #header>
        <div class="flex justify-end">
            <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                <ng-template #item let-option>
                    <i [class]="option === 'list' ? 'pi pi-bars' : 'pi pi-table'"></i>
                </ng-template>
            </p-selectbutton>
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div class="flex flex-col">
            <div *ngFor="let i of counterArray(6); let first = first">
                <div
                    class="flex flex-col xl:flex-row xl:items-start p-6 gap-6"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <p-skeleton styleClass="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                    <div
                        class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6"
                    >
                        <div class="flex flex-col items-center sm:items-start gap-4">
                            <p-skeleton width="8rem" height="2rem" />
                            <p-skeleton width="6rem" height="1rem" />

                            <div class="flex items-center gap-4">
                                <p-skeleton width="6rem" height="1rem" />
                                <p-skeleton width="3rem" height="1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                            <p-skeleton width="4rem" height="2rem" />
                            <p-skeleton size="3rem" shape="circle" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #grid let-items>
        <div class="grid grid-cols-12 gap-4">
            <div
                *ngFor="let i of counterArray(6); let first = first"
                class="col-span-12 sm:col-span-6 xl:col-span-4 p-2"
            >
                <div
                    class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded"
                >
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <p-skeleton width="6rem" height="2rem" />
                        <p-skeleton width="3rem" height="1rem" />
                    </div>
                    <div class="flex flex-col items-center gap-4 py-8">
                        <p-skeleton height="10rem" class="w-3/4" styleClass="w-3/4" />
                        <p-skeleton width="8rem" height="2rem" />
                        <p-skeleton width="6rem" height="1rem" />
                    </div>
                    <div class="flex items-center justify-between">
                        <p-skeleton width="4rem" height="2rem" />
                        <p-skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>`,html:`<div class="card">
    <p-dataview #dv [value]="products" [layout]="layout">
        <ng-template #header>
            <div class="flex justify-end">
                <p-selectbutton [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                    <ng-template #item let-option>
                        <i [class]="option === 'list' ? 'pi pi-bars' : 'pi pi-table'"></i>
                    </ng-template>
                </p-selectbutton>
            </div>
        </ng-template>
        <ng-template #list let-products>
            <div class="flex flex-col">
                <div *ngFor="let i of counterArray(6); let first = first">
                    <div
                        class="flex flex-col xl:flex-row xl:items-start p-6 gap-6"
                        [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                    >
                        <p-skeleton styleClass="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                        <div
                            class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6"
                        >
                            <div class="flex flex-col items-center sm:items-start gap-4">
                                <p-skeleton width="8rem" height="2rem" />
                                <p-skeleton width="6rem" height="1rem" />

                                <div class="flex items-center gap-4">
                                    <p-skeleton width="6rem" height="1rem" />
                                    <p-skeleton width="3rem" height="1rem" />
                                </div>
                            </div>
                            <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                                <p-skeleton width="4rem" height="2rem" />
                                <p-skeleton size="3rem" shape="circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #>
            <div class="grid grid-cols-12 gap-4">
                <div
                    *ngFor="let i of counterArray(6); let first = first"
                    class="col-span-12 sm:col-span-6 xl:col-span-4 p-2"
                >
                    <div
                        class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded"
                    >
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <p-skeleton width="6rem" height="2rem" />
                            <p-skeleton width="3rem" height="1rem" />
                        </div>
                        <div class="flex flex-col items-center gap-4 py-8">
                            <p-skeleton height="10rem" class="w-3/4" styleClass="w-3/4" />
                            <p-skeleton width="8rem" height="2rem" />
                            <p-skeleton width="6rem" height="1rem" />
                        </div>
                        <div class="flex items-center justify-between">
                            <p-skeleton width="4rem" height="2rem" />
                            <p-skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataview>
</div>`,typescript:`import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DataView } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';
import { SelectButton } from 'primeng/selectbutton';
import { signal } from '@angular/core';

@Component({
    selector: 'data-view-loading-demo',
    templateUrl: './data-view-loading-demo.html',
    standalone: true,
    imports: [DataView, CommonModule, Skeleton, SelectButton],
    providers: [ProductService]
})
export class DataViewLoadingDemo {
    layout: 'grid' | 'list' = 'grid';

    products = signal<any>([]);

    options: string[] = ['list', 'grid'];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products.set([...data.slice(0,12)])));
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }

    counterArray(n: number): any[] {
        return Array(n);
    }

}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};getSeverity(e){switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}counterArray(e){return Array(e)}ngOnInit(){this.productService.getProducts().then(e=>this.products.set([...e.slice(0,12)]))}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(j(F))};static \u0275cmp=x({type:t,selectors:[["data-view-loading-demo"]],standalone:!1,decls:16,vars:4,consts:[["dv",""],["header",""],["list",""],["grid",""],["item",""],["routerLink","/skeleton"],[1,"card"],[3,"value","layout"],["selector","data-view-loading-demo",3,"code","extFiles"],[1,"flex","justify-end"],[3,"ngModelChange","ngModel","options","allowEmpty"],[1,"flex","flex-col"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","xl:flex-row","xl:items-start","p-6","gap-6",3,"ngClass"],["styleClass","!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto"],[1,"flex","flex-col","sm:flex-row","justify-between","items-center","xl:items-start","flex-1","gap-6"],[1,"flex","flex-col","items-center","sm:items-start","gap-4"],["width","8rem","height","2rem"],["width","6rem","height","1rem"],[1,"flex","items-center","gap-4"],["width","3rem","height","1rem"],[1,"flex","sm:flex-col","items-center","sm:items-end","gap-4","sm:gap-2"],["width","4rem","height","2rem"],["size","3rem","shape","circle"],[1,"grid","grid-cols-12","gap-4"],["class","col-span-12 sm:col-span-6 xl:col-span-4 p-2",4,"ngFor","ngForOf"],[1,"col-span-12","sm:col-span-6","xl:col-span-4","p-2"],[1,"p-6","border","border-surface-200","dark:border-surface-700","bg-surface-0","dark:bg-surface-900","rounded"],[1,"flex","flex-wrap","items-center","justify-between","gap-2"],["width","6rem","height","2rem"],[1,"flex","flex-col","items-center","gap-4","py-8"],["height","10rem","styleClass","w-3/4",1,"w-3/4"],[1,"flex","items-center","justify-between"],["width","6rem","height","1rem","shape","circle","size","3rem"]],template:function(s,i){s&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"While data is being loaded. "),a(3,"a",5),n(4,"Skeleton"),r(),n(5," component may be used to indicate the busy state."),r()(),a(6,"div",6)(7,"p-dataview",7,0),g(9,oi,4,3,"ng-template",null,1,v)(11,si,2,1,"ng-template",null,2,v)(13,di,2,1,"ng-template",null,3,v),r()(),p(15,"app-code",8)),s&2&&(o(7),l("value",i.products())("layout",i.layout),o(8),l("code",i.code)("extFiles",i.extFiles))},dependencies:[S,D,_,W,b,C,ae,$,U,ne],encapsulation:2})}return t})();var pi=t=>({"border-t border-surface-200 dark:border-surface-700":t});function ci(t,d){if(t&1&&(a(0,"div",8)(1,"div",9)(2,"div",10),p(3,"img",11)(4,"p-tag",12),r(),a(5,"div",13)(6,"div",14)(7,"div")(8,"span",15),n(9),r(),a(10,"div",16),n(11),r()(),a(12,"div",17)(13,"div",18)(14,"span",19),n(15),r(),p(16,"i",20),r()()(),a(17,"div",21)(18,"span",22),n(19),r(),a(20,"div",23),p(21,"p-button",24)(22,"p-button",25),r()()()()()),t&2){let e=d.$implicit,s=d.first,i=u(2);o(),l("ngClass",h(15,pi,!s)),o(2),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,L)("alt",e.name),o(),V("left",4,"px")("top",4,"px"),l("value",e.inventoryStatus)("severity",i.getSeverity(e)),o(5),f(e.category),o(2),f(e.name),o(4),f(e.rating),o(4),f("$"+e.price),o(2),l("outlined",!0),o(),l("disabled",e.inventoryStatus==="OUTOFSTOCK")}}function mi(t,d){if(t&1&&(a(0,"div",6),g(1,ci,23,17,"div",7),r()),t&2){let e=d.$implicit;o(),l("ngForOf",e)}}var ot=(()=>{class t{productService;products=P([]);constructor(e){this.productService=e}code={basic:`<p-dataview [value]="products()" [rows]="5" [paginator]="true">
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute"
                            styleClass="dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>`,html:`<div class="card">
    <p-dataview #dv [value]="products()" [rows]="5" [paginator]="true">
        <ng-template pTemplate="list" let-items>
            <div class="grid grid-cols-12 gap-4 grid-nogutter">
                <div class="col-span-12" *ngFor="let item of items; let first = first" class="col-span-12">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                    >
                        <div class="md:w-40 relative">
                            <img
                                class="block xl:block mx-auto rounded-border w-full"
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                                [alt]="item.name"
                            />
                            <p-tag
                                [value]="item.inventoryStatus"
                                [severity]="getSeverity(item)"
                                class="absolute"
                                styleClass="dark:!bg-surface-900"
                                [style.left.px]="4"
                                [style.top.px]="4"
                            />
                        </div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                    <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                </div>
                                <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                    <div
                                        class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                        style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                    >
                                        <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                            item.rating
                                        }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                    '$' + item.price
                                }}</span>
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <p-button icon="pi pi-heart" [outlined]="true" />
                                    <p-button
                                        icon="pi pi-shopping-cart"
                                        class="flex-auto md:flex-initial whitespace-nowrap"
                                        label="Buy Now"
                                        [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataview>
</div>`,typescript:`import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
    selector: 'data-view-pagination-demo',
    templateUrl: './data-view-pagination-demo.html',
    standalone: true,
    imports: [DataView, ButtonModule, Tag, CommonModule],
    providers: [ProductService]
})
export class DataViewPaginationDemo {
    products = signal<any>([]);

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => {
            this.products.set(data);
        });
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};getSeverity(e){switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}ngOnInit(){this.productService.getProducts().then(e=>{this.products.set(e)})}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(j(F))};static \u0275cmp=x({type:t,selectors:[["data-view-pagination-demo"]],standalone:!1,decls:18,vars:5,consts:[["dv",""],["list",""],["routerLink","/paginator"],[1,"card"],[3,"value","rows","paginator"],["selector","data-view-pagination-demo",3,"code","extFiles"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],["class","col-span-12",4,"ngFor","ngForOf"],[1,"col-span-12"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4",3,"ngClass"],[1,"md:w-40","relative"],[1,"block","xl:block","mx-auto","rounded-border","w-full",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity"],[1,"flex","flex-col","md:flex-row","justify-between","md:items-center","flex-1","gap-6"],[1,"flex","flex-row","md:flex-col","justify-between","items-start","gap-2"],[1,"font-medium","text-secondary","text-sm"],[1,"text-lg","font-medium","text-surface-900","dark:text-surface-0","mt-2"],[1,"bg-surface-100","dark:bg-surface-700","p-1",2,"border-radius","30px"],[1,"bg-surface-0","dark:bg-surface-900","flex","items-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"text-surface-900","dark:text-surface-0","font-medium","text-sm"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"flex","flex-col","md:items-end","gap-8"],[1,"text-xl","font-semibold","text-surface-900","dark:text-surface-0"],[1,"flex","flex-row-reverse","md:flex-row","gap-2"],["icon","pi pi-heart",3,"outlined"],["icon","pi pi-shopping-cart","label","Buy Now",1,"flex-auto","md:flex-initial","whitespace-nowrap",3,"disabled"]],template:function(s,i){s&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"Pagination is enabled with the "),a(3,"i"),n(4,"paginator"),r(),n(5," and "),a(6,"i"),n(7,"rows"),r(),n(8," properties. Refer to the "),a(9,"a",2),n(10,"Paginator"),r(),n(11," for more information about customizing the paginator."),r()(),a(12,"div",3)(13,"p-dataview",4,0),g(15,mi,2,1,"ng-template",null,1,v),r()(),p(17,"app-code",5)),s&2&&(o(13),l("value",i.products())("rows",5)("paginator",!0),o(4),l("code",i.code)("extFiles",i.extFiles))},dependencies:[S,D,_,b,C,q,ae,E],encapsulation:2})}return t})();var ui=t=>({"border-t border-surface-200 dark:border-surface-700":t});function gi(t,d){if(t&1){let e=I();a(0,"div",6)(1,"p-select",7),K("ngModelChange",function(i){O(e);let c=u();return N(c.sortKey,i)||(c.sortKey=i),T(i)}),G("onChange",function(i){O(e);let c=u();return T(c.onSortChange(i))}),r()()}if(t&2){let e=u();o(),l("options",e.sortOptions),R("ngModel",e.sortKey)}}function fi(t,d){if(t&1&&(a(0,"div",10)(1,"div",11)(2,"div",12),p(3,"img",13)(4,"p-tag",14),r(),a(5,"div",15)(6,"div",16)(7,"div")(8,"span",17),n(9),r(),a(10,"div",18),n(11),r()(),a(12,"div",19)(13,"div",20)(14,"span",21),n(15),r(),p(16,"i",22),r()()(),a(17,"div",23)(18,"span",24),n(19),r(),a(20,"div",25),p(21,"p-button",26)(22,"p-button",27),r()()()()()),t&2){let e=d.$implicit,s=d.first,i=u(2);o(),l("ngClass",h(15,ui,!s)),o(2),l("src","https://primefaces.org/cdn/primeng/images/demo/product/"+e.image,L)("alt",e.name),o(),V("left",4,"px")("top",4,"px"),l("value",e.inventoryStatus)("severity",i.getSeverity(e)),o(5),f(e.category),o(2),f(e.name),o(4),f(e.rating),o(4),f("$"+e.price),o(2),l("outlined",!0),o(),l("disabled",e.inventoryStatus==="OUTOFSTOCK")}}function xi(t,d){if(t&1&&(a(0,"div",8),g(1,fi,23,17,"div",9),r()),t&2){let e=d.$implicit;o(),l("ngForOf",e)}}var nt=(()=>{class t{productService;sortOptions;sortOrder;sortField;products=P([]);constructor(e){this.productService=e}code={basic:`<p-dataview [value]="products()" [sortField]="sortField" [sortOrder]="sortOrder">
    <ng-template #header>
        <div class="flex flex-col md:flex-row md:justify-between">
            <p-select
                [options]="sortOptions"
                [(ngModel)]="sortKey"
                placeholder="Sort By Price"
                (onChange)="onSortChange($event)"
                styleClass="mb-2 md:mb-0"
            />
        </div>
    </ng-template>
    <ng-template #list let-items>
        <div class="grid grid-cols-12 gap-4 grid-nogutter">
            <div class="col-span-12" *ngFor="let item of items; let first = first">
                <div
                    class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                    [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                >
                    <div class="md:w-40 relative">
                        <img
                            class="block xl:block mx-auto rounded-border w-full"
                            [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                            [alt]="item.name"
                        />
                        <p-tag
                            [value]="item.inventoryStatus"
                            [severity]="getSeverity(item)"
                            class="absolute"
                            styleClass="dark:!bg-surface-900"
                            [style.left.px]="4"
                            [style.top.px]="4"
                        />
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div
                                    class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                    style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                >
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                        item.rating
                                    }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-8">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                '$' + item.price
                            }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <p-button icon="pi pi-heart" [outlined]="true" />
                                <p-button
                                    icon="pi pi-shopping-cart"
                                    class="flex-auto md:flex-initial whitespace-nowrap"
                                    label="Buy Now"
                                    [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
</p-dataview>`,html:`<div class="card">
    <p-dataview #dv [value]="products()" [sortField]="sortField" [sortOrder]="sortOrder">
        <ng-template #header>
            <div class="flex flex-col md:flex-row md:justify-between">
                <p-select
                    [options]="sortOptions"
                    [(ngModel)]="sortKey"
                    placeholder="Sort By Price"
                    (onChange)="onSortChange($event)"
                    styleClass="mb-2 md:mb-0"
                />
            </div>
        </ng-template>
        <ng-template #list let-items>
            <div class="grid grid-cols-12 gap-4 grid-nogutter">
                <div class="col-span-12" *ngFor="let item of items; let first = first">
                    <div
                        class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        [ngClass]="{ 'border-t border-surface-200 dark:border-surface-700': !first }"
                    >
                        <div class="md:w-40 relative">
                            <img
                                class="block xl:block mx-auto rounded-border w-full"
                                [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + item.image"
                                [alt]="item.name"
                            />
                            <p-tag
                                [value]="item.inventoryStatus"
                                [severity]="getSeverity(item)"
                                class="absolute"
                                styleClass="dark:!bg-surface-900"
                                [style.left.px]="4"
                                [style.top.px]="4"
                            />
                        </div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                    <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                </div>
                                <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                    <div
                                        class="bg-surface-0 dark:bg-surface-900 flex items-center gap-2 justify-center py-1 px-2"
                                        style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                                    >
                                        <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{
                                            item.rating
                                        }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">{{
                                    '$' + item.price
                                }}</span>
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <p-button icon="pi pi-heart" [outlined]="true" />
                                    <p-button
                                        icon="pi pi-shopping-cart"
                                        class="flex-auto md:flex-initial whitespace-nowrap"
                                        label="Buy Now"
                                        [disabled]="item.inventoryStatus === 'OUTOFSTOCK'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataview>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { signal } from '@angular/core';

@Component({
    selector: 'data-view-sorting-demo',
    templateUrl: './data-view-sorting-demo.html',
    standalone: true,
    imports: [DataView, ButtonModule, Tag, CommonModule, DropdownModule],
    providers: [ProductService]
})
export class DataViewSortingDemo {
    sortOptions!: SelectItem[];

    sortOrder!: number;

    sortField!: string;

    products = signal<any>([]);

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products.set(data.slice(0, 5))));

        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' },
        ];
    }

    onSortChange(event: any) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};onSortChange(e){let s=e.value;s.indexOf("!")===0?(this.sortOrder=-1,this.sortField=s.substring(1,s.length)):(this.sortOrder=1,this.sortField=s)}getSeverity(e){switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}ngOnInit(){this.productService.getProducts().then(e=>this.products.set(e.slice(0,5))),this.sortOptions=[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(j(F))};static \u0275cmp=x({type:t,selectors:[["data-view-sorting-demo"]],standalone:!1,decls:17,vars:5,consts:[["dv",""],["header",""],["list",""],[1,"card"],[3,"value","sortField","sortOrder"],["selector","data-view-sorting-demo",3,"code","extFiles"],[1,"flex","flex-col","md:flex-row","md:justify-between"],["placeholder","Sort By Price","styleClass","mb-2 md:mb-0",3,"ngModelChange","onChange","options","ngModel"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],["class","col-span-12",4,"ngFor","ngForOf"],[1,"col-span-12"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4",3,"ngClass"],[1,"md:w-40","relative"],[1,"block","xl:block","mx-auto","rounded-border","w-full",3,"src","alt"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"value","severity"],[1,"flex","flex-col","md:flex-row","justify-between","md:items-center","flex-1","gap-6"],[1,"flex","flex-row","md:flex-col","justify-between","items-start","gap-2"],[1,"font-medium","text-secondary","text-sm"],[1,"text-lg","font-medium","text-surface-900","dark:text-surface-0","mt-2"],[1,"bg-surface-100","dark:bg-surface-700","p-1",2,"border-radius","30px"],[1,"bg-surface-0","dark:bg-surface-900","flex","items-center","gap-2","justify-center","py-1","px-2",2,"border-radius","30px","box-shadow","0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"],[1,"text-surface-900","dark:text-surface-0","font-medium","text-sm"],[1,"pi","pi-star-fill","text-yellow-500"],[1,"flex","flex-col","md:items-end","gap-8"],[1,"text-xl","font-semibold","text-surface-900","dark:text-surface-0"],[1,"flex","flex-row-reverse","md:flex-row","gap-2"],["icon","pi pi-heart",3,"outlined"],["icon","pi pi-shopping-cart","label","Buy Now",1,"flex-auto","md:flex-initial","whitespace-nowrap",3,"disabled"]],template:function(s,i){s&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"Built-in sorting is controlled by bindings "),a(3,"i"),n(4,"sortField"),r(),n(5," and "),a(6,"i"),n(7,"sortOrder"),r(),n(8," properties from a custom UI."),r()(),a(9,"div",3)(10,"p-dataview",4,0),g(12,gi,2,2,"ng-template",null,1,v)(14,xi,2,1,"ng-template",null,2,v),r()(),p(16,"app-code",5)),s&2&&(o(10),l("value",i.products())("sortField",i.sortField)("sortOrder",i.sortOrder),o(6),l("code",i.code)("extFiles",i.extFiles))},dependencies:[S,D,_,b,C,oe,q,E,$,U],encapsulation:2})}return t})();var st=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=le({type:t});static \u0275inj=se({imports:[re,Je,W,ve,C,oe,We,Ve,Ye,E,je,ne,ve]})}return t})();var vi=()=>["DataView"],lt=(()=>{class t{docs=[{id:"import",label:"Import",component:tt},{id:"basic",label:"Basic",component:et},{id:"pagination",label:"Pagination",component:ot},{id:"sorting",label:"Sorting",component:nt},{id:"layout",label:"Layout",component:rt},{id:"loading",label:"Loading",component:at},{id:"accessibility",label:"Accessibility",component:Xe}];static \u0275fac=function(s){return new(s||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular DataView Component","header","DataView","description","DataView displays data in grid grid-cols-12 gap-4 or list layout with pagination and sorting features.","themeDocs","dataview",3,"docs","apiDocs"]],template:function(s,i){s&1&&p(0,"app-doc",0),s&2&&l("docs",i.docs)("apiDocs",De(2,vi))},dependencies:[st,Ge],styles:["[_nghost-%COMP%]     .p-dropdown{width:14rem;font-weight:400}[_nghost-%COMP%]     .product-name{font-size:1.5rem;font-weight:700}[_nghost-%COMP%]     .product-description{margin:0 0 1rem}[_nghost-%COMP%]     .product-category-icon{vertical-align:middle;margin-right:.5rem}[_nghost-%COMP%]     .product-category{font-weight:600;vertical-align:middle}[_nghost-%COMP%]     .product-list-item{display:flex;align-items:center;padding:1rem;width:100%}[_nghost-%COMP%]     .product-list-item img{width:150px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:2rem}[_nghost-%COMP%]     .product-list-item .product-list-detail{flex:1 1 0}[_nghost-%COMP%]     .product-list-item .p-rating{margin:0 0 .5rem}[_nghost-%COMP%]     .product-list-item .product-price{font-size:1.5rem;font-weight:600;margin-bottom:.5rem;align-self:flex-end}[_nghost-%COMP%]     .product-list-item .product-list-action{display:flex;flex-direction:column}[_nghost-%COMP%]     .product-list-item .p-button{margin-bottom:.5rem}[_nghost-%COMP%]     .product-grid-item{margin:.5em;border:1px solid var(--surface-border)}[_nghost-%COMP%]     .product-grid-item .product-grid-item-top, [_nghost-%COMP%]     .product-grid-item .product-grid-item-bottom{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]     .product-grid-item img{width:75%;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin:2rem 0}[_nghost-%COMP%]     .product-grid-item .product-grid-item-content{text-align:center}[_nghost-%COMP%]     .product-grid-item .product-price{font-size:1.5rem;font-weight:600}@media screen and (max-width:576px){[_nghost-%COMP%]     .product-list-item{flex-direction:column;align-items:center}[_nghost-%COMP%]     .product-list-item img{width:75%;margin:2rem 0}[_nghost-%COMP%]     .product-list-item .product-list-detail{text-align:center}[_nghost-%COMP%]     .product-list-item .product-price{align-self:center}[_nghost-%COMP%]     .product-list-item .product-list-action{display:flex;flex-direction:column}[_nghost-%COMP%]     .product-list-item .product-list-action{margin-top:2rem;flex-direction:row;justify-content:space-between;align-items:center;width:100%}}"]})}return t})();var Hr=[{path:"",component:lt}];export{Hr as default};
