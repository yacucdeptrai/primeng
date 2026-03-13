import './polyfills.server.mjs';
import{Ga as G,Ja as J,j as P,ta as A,ua as H,va as V,wa as g}from"./chunk-YQJJ7I3T.mjs";import{k as D,n as N,q as O,r as B,v as z}from"./chunk-RUZVPFSZ.mjs";import{Bb as r,Cb as m,Db as f,Ib as T,Jb as b,Kb as _,N as S,O as F,S as I,Sa as i,Sb as u,Tb as q,Ub as h,Vb as M,Xb as p,Yb as d,dc as R,ec as v,fc as C,gb as Q,ha as E,hb as k,lb as $,ma as y,mb as c,oc as w,vb as j}from"./chunk-ZJKG6QAF.mjs";var L=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,U={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},x=(()=>{class e extends G{name="card";theme=L;classes=U;static \u0275fac=(()=>{let t;return function(a){return(t||(t=y(e)))(a||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var W=["header"],X=["title"],Y=["subtitle"],Z=["content"],ee=["footer"],te=["*",[["p-header"]],[["p-footer"]]],ae=["*","p-header","p-footer"];function ne(e,o){e&1&&_(0)}function ie(e,o){if(e&1&&(m(0,"div",8),h(1,1),c(2,ne,1,0,"ng-container",6),f()),e&2){let t=u();i(2),r("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function re(e,o){if(e&1&&(T(0),v(1),b()),e&2){let t=u(2);i(),C(t.header)}}function oe(e,o){e&1&&_(0)}function le(e,o){if(e&1&&(m(0,"div",9),c(1,re,2,1,"ng-container",10)(2,oe,1,0,"ng-container",6),f()),e&2){let t=u();i(),r("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),i(),r("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ce(e,o){if(e&1&&(T(0),v(1),b()),e&2){let t=u(2);i(),C(t.subheader)}}function pe(e,o){e&1&&_(0)}function de(e,o){if(e&1&&(m(0,"div",11),c(1,ce,2,1,"ng-container",10)(2,pe,1,0,"ng-container",6),f()),e&2){let t=u();i(),r("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),i(),r("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function se(e,o){e&1&&_(0)}function me(e,o){e&1&&_(0)}function fe(e,o){if(e&1&&(m(0,"div",12),h(1,2),c(2,me,1,0,"ng-container",6),f()),e&2){let t=u();i(2),r("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ue=(()=>{class e extends J{header;subheader;set style(t){P(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=E(null);_componentStyle=I(x);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(a){return(t||(t=y(e)))(a||e)}})();static \u0275cmp=Q({type:e,selectors:[["p-card"]],contentQueries:function(l,a,s){if(l&1&&M(s,A,5)(s,H,5)(s,W,4)(s,X,4)(s,Y,4)(s,Z,4)(s,ee,4)(s,V,4),l&2){let n;p(n=d())&&(a.headerFacet=n.first),p(n=d())&&(a.footerFacet=n.first),p(n=d())&&(a.headerTemplate=n.first),p(n=d())&&(a.titleTemplate=n.first),p(n=d())&&(a.subtitleTemplate=n.first),p(n=d())&&(a.contentTemplate=n.first),p(n=d())&&(a.footerTemplate=n.first),p(n=d())&&(a.templates=n)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[w([x]),$],ngContentSelectors:ae,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(l,a){l&1&&(q(te),m(0,"div",0),c(1,ie,3,1,"div",1),m(2,"div",2),c(3,le,3,2,"div",3)(4,de,3,2,"div",4),m(5,"div",5),h(6),c(7,se,1,0,"ng-container",6),f(),c(8,fe,3,1,"div",7),f()()),l&2&&(R(a.styleClass),r("ngClass","p-card p-component")("ngStyle",a._style()),j("data-pc-name","card"),i(),r("ngIf",a.headerFacet||a.headerTemplate||a._headerTemplate),i(2),r("ngIf",a.header||a.titleTemplate||a._titleTemplate),i(),r("ngIf",a.subheader||a.subtitleTemplate||a._subtitleTemplate),i(3),r("ngTemplateOutlet",a.contentTemplate||a._contentTemplate),i(),r("ngIf",a.footerFacet||a.footerTemplate||a._footerTemplate))},dependencies:[z,D,N,B,O,g],encapsulation:2,changeDetection:0})}return e})(),je=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=k({type:e});static \u0275inj=F({imports:[ue,g,g]})}return e})();export{ue as a,je as b};
