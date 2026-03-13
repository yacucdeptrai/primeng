import{Ga as Z,Ja as ee,aa as X,va as Y,wa as y}from"./chunk-HJ3EJAPD.js";import{j as z,l as S,m as k,p as G,q as P,u as w}from"./chunk-O4W5DSIC.js";import{$b as I,Ab as _,Eb as h,Fb as v,Gb as g,M as Q,N as E,O as N,Ob as p,Qa as l,Rb as D,S as C,Sb as j,Tb as u,Ub as s,ac as A,dc as H,eb as O,fb as R,jb as V,kb as m,kc as J,lc as K,ma as T,mc as $,nc as U,oa as B,oc as d,qc as W,rb as q,sb as F,tb as M,xb as a,yb as b,zb as f}from"./chunk-DNC77BQZ.js";var ne=({dt:e})=>`
.p-metergroup {
    display: flex;
    gap: ${e("metergroup.gap")};
}

.p-metergroup-meters {
    display: flex;
    background: ${e("metergroup.meters.background")};
    border-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: ${e("metergroup.label.gap")};
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: ${e("metergroup.label.marker.size")};
    height: ${e("metergroup.label.marker.size")};
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: ${e("metergroup.label.icon.size")};
    width: ${e("metergroup.label.icon.size")};
    height: ${e("metergroup.label.icon.size")};
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: ${e("metergroup.label.list.horizontal.gap")};
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: ${e("metergroup.meters.size")};
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-end-start-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-start-end-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: ${e("metergroup.label.list.vertical.gap")};
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: ${e("metergroup.meters.size")};
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-start-end-radius: ${e("metergroup.border.radius")};
}
.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-end-start-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}
`,ie={root:({props:e})=>["p-metergroup p-component",{"p-metergroup-horizontal":e.orientation==="horizontal","p-metergroup-vertical":e.orientation==="vertical"}],meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:({props:e})=>["p-metergroup-label-list",{"p-metergroup-label-list-vertical":e.labelOrientation==="vertical","p-metergroup-label-list-horizontal":e.labelOrientation==="horizontal"}],label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},L=(()=>{class e extends Z{name="metergroup";theme=ne;classes=ie;static \u0275fac=(()=>{let t;return function(r){return(t||(t=T(e)))(r||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var ae=(e,i)=>({$implicit:e,icon:i}),le=()=>({"p-metergroup-label-icon":!0}),oe=e=>({color:e}),pe=e=>({backgroundColor:e});function me(e,i){if(e&1&&_(0,"i",8),e&2){let t=p(2).$implicit;I(t.icon),a("ngClass",K(4,le))("ngStyle",$(5,oe,t.color))}}function ce(e,i){if(e&1&&_(0,"span",9),e&2){let t=p(2).$implicit;a("ngStyle",$(1,pe,t.color))}}function ue(e,i){if(e&1&&(h(0),m(1,me,1,7,"i",6)(2,ce,1,3,"span",7),v()),e&2){let t=p().$implicit;l(),a("ngIf",t.icon),l(),a("ngIf",!t.icon)}}function se(e,i){e&1&&g(0)}function ge(e,i){if(e&1&&(b(0,"li",2),m(1,ue,3,2,"ng-container",3)(2,se,1,0,"ng-container",4),b(3,"span",5),A(4),f()()),e&2){let t=i.$implicit,n=p();l(),a("ngIf",!n.iconTemplate),l(),a("ngTemplateOutlet",n.iconTemplate)("ngTemplateOutletContext",U(5,ae,t,t.icon)),l(2),H("",t.label," (",n.parentInstance.percentValue(t.value),")")}}var be=["label"],_e=["meter"],fe=["end"],de=["start"],ye=["icon"],Te=["container"],x=(e,i,t)=>({$implicit:e,totalPercent:i,percentages:t}),he=(e,i,t,n,r)=>({$implicit:e,index:i,orientation:t,class:"p-metergroup-meter",size:n,totalPercent:r});function ve(e,i){if(e&1&&_(0,"p-meterGroupLabel",6),e&2){let t=p(2);a("value",t.value)("labelPosition",t.labelPosition)("labelOrientation",t.labelOrientation)("min",t.min)("max",t.max)("iconTemplate",t.iconTemplate||t._iconTemplate)}}function xe(e,i){e&1&&g(0)}function Ce(e,i){if(e&1&&m(0,ve,1,6,"p-meterGroupLabel",5)(1,xe,1,0,"ng-container",2),e&2){let t=p();a("ngIf",!t.labelTemplate&&!t._labelTemplate),l(),a("ngTemplateOutlet",t.labelTemplate||t.labelTemplate)("ngTemplateOutletContext",d(3,x,t.value,t.totalPercent(),t.percentages()))}}function Oe(e,i){e&1&&g(0)}function Fe(e,i){e&1&&g(0)}function Me(e,i){if(e&1&&(h(0),_(1,"span",8),v()),e&2){let t=p().$implicit,n=p();l(),a("ngStyle",n.meterStyle(t))}}function Ie(e,i){if(e&1&&(h(0),m(1,Fe,1,0,"ng-container",2)(2,Me,2,1,"ng-container",7),v()),e&2){let t=i.$implicit,n=i.index,r=p();l(),a("ngTemplateOutlet",r.meterTemplate||r._meterTemplate)("ngTemplateOutletContext",W(3,he,t,n,r.orientation,r.percentValue(t.value),r.totalPercent())),l(),a("ngIf",!r.meterTemplate&&!r._meterTemplate&&t.value>0)}}function $e(e,i){e&1&&g(0)}function ze(e,i){if(e&1&&_(0,"p-meterGroupLabel",6),e&2){let t=p(2);a("value",t.value)("labelPosition",t.labelPosition)("labelOrientation",t.labelOrientation)("min",t.min)("max",t.max)("iconTemplate",t.iconTemplate||t._iconTemplate)}}function Se(e,i){e&1&&g(0)}function ke(e,i){if(e&1&&m(0,ze,1,6,"p-meterGroupLabel",5)(1,Se,1,0,"ng-container",2),e&2){let t=p();a("ngIf",!t.labelTemplate&&!t._labelTemplate),l(),a("ngTemplateOutlet",t.labelTemplate||t._labelTemplate)("ngTemplateOutletContext",d(3,x,t.value,t.totalPercent(),t.percentages()))}}var Ge=(()=>{class e{value=null;labelPosition="end";labelOrientation="horizontal";min;max;iconTemplate;get labelClass(){return{"p-metergroup-label-list p-component":!0,"p-metergroup-label-list-vertical":this.labelOrientation==="vertical","p-metergroup-label-list-horizontal":this.labelOrientation==="horizontal"}}parentInstance=C(Q(()=>te));static \u0275fac=function(n){return new(n||e)};static \u0275cmp=O({type:e,selectors:[["p-meterGroupLabel"],["p-metergrouplabel"]],inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},decls:2,vars:3,consts:[[3,"ngClass"],["class","p-metergroup-label",4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-metergroup-label"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-label-text"],[3,"class","ngClass","ngStyle",4,"ngIf"],["class","p-metergroup-label-marker",3,"ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[1,"p-metergroup-label-marker",3,"ngStyle"]],template:function(n,r){n&1&&(b(0,"ol",0),m(1,ge,5,8,"li",1),f()),n&2&&(a("ngClass",r.labelClass),l(),a("ngForOf",r.value)("ngForTrackBy",r.parentInstance.trackByFn))},dependencies:[w,z,S,k,P,G,y],encapsulation:2})}return e})(),te=(()=>{class e extends ee{value;min=0;max=100;orientation="horizontal";labelPosition="end";labelOrientation="horizontal";style;styleClass;get vertical(){return this.orientation==="vertical"}get containerClass(){return{"p-metergroup p-component":!0,"p-metergroup-horizontal":this.orientation==="horizontal","p-metergroup-vertical":this.orientation==="vertical"}}labelTemplate;meterTemplate;endTemplate;startTemplate;iconTemplate;templates;_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;_componentStyle=C(L);container;ngAfterViewInit(){super.ngAfterViewInit();let t=this.container.nativeElement,n=X(t);this.vertical&&(t.style.height=n+"px")}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"label":this._labelTemplate=t.template;break;case"meter":this._meterTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break}})}percent(t=0){let n=(t-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,n)))}percentValue(t){return this.percent(t)+"%"}meterStyle(t){return{backgroundColor:t.color,width:this.orientation==="horizontal"&&this.percentValue(t.value),height:this.orientation==="vertical"&&this.percentValue(t.value)}}totalPercent(){return this.percent(this.value.reduce((t,n)=>t+n.value,0))}percentages(){let t=0,n=[];return this.value.forEach(r=>{t+=r.value,n.push(t)}),n}trackByFn(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=T(e)))(r||e)}})();static \u0275cmp=O({type:e,selectors:[["p-meterGroup"],["p-metergroup"],["p-meter-group"]],contentQueries:function(n,r,c){if(n&1&&D(c,be,4)(c,_e,4)(c,fe,4)(c,de,4)(c,ye,4)(c,Y,4),n&2){let o;u(o=s())&&(r.labelTemplate=o.first),u(o=s())&&(r.meterTemplate=o.first),u(o=s())&&(r.endTemplate=o.first),u(o=s())&&(r.startTemplate=o.first),u(o=s())&&(r.iconTemplate=o.first),u(o=s())&&(r.templates=o)}},viewQuery:function(n,r){if(n&1&&j(Te,5,B),n&2){let c;u(c=s())&&(r.container=c.first)}},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",style:"style",styleClass:"styleClass"},features:[J([L]),V],decls:8,vars:24,consts:[["container",""],[3,"ngClass","ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-meters"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate"],[4,"ngIf"],[1,"p-metergroup-meter",3,"ngStyle"]],template:function(n,r){n&1&&(b(0,"div",1,0),F(2,Ce,2,7),m(3,Oe,1,0,"ng-container",2),b(4,"div",3),m(5,Ie,3,9,"ng-container",4),f(),m(6,$e,1,0,"ng-container",2),F(7,ke,2,7),f()),n&2&&(I(r.styleClass),a("ngClass",r.containerClass)("ngStyle",r.style),q("role","meter")("aria-valuemin",r.min)("aria-valuemax",r.max)("aria-valuenow",r.totalPercent()),l(2),M(r.labelPosition==="start"?2:-1),l(),a("ngTemplateOutlet",r.startTemplate||r._startTemplate)("ngTemplateOutletContext",d(16,x,r.value,r.totalPercent(),r.percentages())),l(2),a("ngForOf",r.value)("ngForTrackBy",r.trackByFn),l(),a("ngTemplateOutlet",r.endTemplate||r._endTemplate)("ngTemplateOutletContext",d(20,x,r.value,r.totalPercent(),r.percentages())),l(),M(r.labelPosition==="end"?7:-1))},dependencies:[w,z,S,k,P,G,Ge,y],encapsulation:2,changeDetection:0})}return e})(),We=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=R({type:e});static \u0275inj=N({imports:[te,y,y]})}return e})();export{te as a,We as b};
