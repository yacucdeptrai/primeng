import{Ga as P,Ja as R,va as A,wa as p}from"./chunk-HJ3EJAPD.js";import{j as N,m as Q,q as O,u as q}from"./chunk-O4W5DSIC.js";import{$b as j,Ab as x,Eb as k,Fb as I,N as h,O as T,Ob as g,Pb as w,Qa as o,Qb as F,Qc as E,Rb as M,S as b,Tb as f,Ub as d,_b as S,ac as z,bc as B,eb as v,fb as C,jb as $,kb as r,kc as D,ma as l,xb as i,yb as u,zb as m}from"./chunk-DNC77BQZ.js";var H=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,G={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},y=(()=>{class e extends P{name="tag";theme=H;classes=G;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var J=["icon"],K=["*"];function L(e,c){if(e&1&&x(0,"span",4),e&2){let t=g(2);i("ngClass",t.icon)}}function U(e,c){if(e&1&&(k(0),r(1,L,1,1,"span",3),I()),e&2){let t=g();o(),i("ngIf",t.icon)}}function W(e,c){}function X(e,c){e&1&&r(0,W,0,0,"ng-template")}function Y(e,c){if(e&1&&(u(0,"span",5),r(1,X,1,0,null,6),m()),e&2){let t=g();o(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Z=(()=>{class e extends R{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=b(y);ngAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,_){if(a&1&&M(_,J,4)(_,A,4),a&2){let s;f(s=d())&&(n.iconTemplate=s.first),f(s=d())&&(n.templates=s)}},hostVars:4,hostBindings:function(a,n){a&2&&(S(n.style),j(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",E]},features:[D([y]),$],ngContentSelectors:K,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(w(),F(0),r(1,U,2,1,"ng-container",0)(2,Y,2,1,"span",1),u(3,"span",2),z(4),m()),a&2&&(o(),i("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),i("ngIf",n.iconTemplate||n._iconTemplate),o(2),B(n.value))},dependencies:[q,N,Q,O,p],encapsulation:2,changeDetection:0})}return e})(),de=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=C({type:e});static \u0275inj=T({imports:[Z,p,p]})}return e})();export{Z as a,de as b};
