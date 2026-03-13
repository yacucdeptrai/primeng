import{Ga as x,Ja as I,wa as e}from"./chunk-HJ3EJAPD.js";import{u as h}from"./chunk-O4W5DSIC.js";import{$b as b,N as i,O as u,Pb as f,Qb as g,S as a,Zb as M,_b as m,eb as d,fb as s,jb as l,kc as y,ma as r,rb as c}from"./chunk-DNC77BQZ.js";var $=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,j={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},F=(()=>{class t extends x{name="inputgroup";theme=$;classes=j;static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275prov=i({token:t,factory:t.\u0275fac})}return t})();var v=["*"],B=(()=>{class t extends I{style;styleClass;_componentStyle=a(F);static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275cmp=d({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(o,n){o&2&&(c("data-pc-name","inputgroup"),m(n.style),b(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[y([F]),l],ngContentSelectors:v,decls:1,vars:0,template:function(o,n){o&1&&(f(),g(0))},dependencies:[h,e],encapsulation:2})}return t})(),J=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=s({type:t});static \u0275inj=u({imports:[B,e,e]})}return t})();var G={root:"p-inputgroupaddon"},C=(()=>{class t extends x{name="inputgroupaddon";classes=G;static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275prov=i({token:t,factory:t.\u0275fac})}return t})();var S=["*"],D=(()=>{class t extends I{style;styleClass;_componentStyle=a(C);get hostStyle(){return this.style}static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275cmp=d({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(o,n){o&2&&(c("data-pc-name","inputgroupaddon"),m(n.hostStyle),b(n.styleClass),M("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[y([C]),l],ngContentSelectors:S,decls:1,vars:0,template:function(o,n){o&1&&(f(),g(0))},dependencies:[h],encapsulation:2})}return t})(),rt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=s({type:t});static \u0275inj=u({imports:[D,e,e]})}return t})();export{B as a,J as b,D as c,rt as d};
