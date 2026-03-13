import{i as g}from"./chunk-UHCZASEU.js";import{Ga as y,Ja as x,wa as o}from"./chunk-HJ3EJAPD.js";import{u as h}from"./chunk-O4W5DSIC.js";import{N as n,O as r,Pb as b,Qb as m,S as f,eb as c,fb as s,jb as u,kc as d,ma as l}from"./chunk-DNC77BQZ.js";var I=({dt:t})=>`
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: ${t("iftalabel.top")};
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: ${t("iftalabel.font.size")};
    font-weight: ${t("iftalabel.font.weight")};
    inset-inline-start: ${t("iftalabel.position.x")};
    color: ${t("iftalabel.color")};
    transition-duration: ${t("iftalabel.transition.duration")};
}

.p-iftalabel > .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label-container,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label,
.p-iftalabel .p-datepicker-input,
.p-iftalabel .p-inputmask,
.p-iftalabel .p-autocomplete .p-inputtext,
.p-iftalabel .p-inputnumber .p-inputtext,
.p-iftalabel .p-password .p-inputtext,
.p-iftalabel > .p-iconfield .p-inputtext {
    padding-top: ${t("iftalabel.input.padding.top")};
}

.p-iftalabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("iftalabel.invalid.color")};
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: ${t("iftalabel.focus.color")};
}

.p-iftalabel > .p-iconfield .p-inputicon {
    top: ${t("iftalabel.input.padding.top")};
    transform: translateY(25%);
    margin-top: 0;
}

/*.p-iftalabel .p-placeholder,
.p-iftalabel input::placeholder,
.p-iftalabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-iftalabel .p-focus .p-placeholder,
.p-iftalabel input:focus::placeholder,
.p-iftalabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/
`,$={root:"p-iftalabel"},p=(()=>{class t extends y{name="iftalabel";theme=I;classes=$;static \u0275fac=(()=>{let e;return function(i){return(e||(e=l(t)))(i||t)}})();static \u0275prov=n({token:t,factory:t.\u0275fac})}return t})();var F=["*"],E=(()=>{class t extends x{_componentStyle=f(p);static \u0275fac=(()=>{let e;return function(i){return(e||(e=l(t)))(i||t)}})();static \u0275cmp=c({type:t,selectors:[["p-iftalabel"],["p-iftaLabel"],["p-ifta-label"]],hostAttrs:[1,"p-iftalabel"],features:[d([p]),u],ngContentSelectors:F,decls:1,vars:0,template:function(a,i){a&1&&(b(),m(0))},encapsulation:2,changeDetection:0})}return t})(),P=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=s({type:t});static \u0275inj=r({imports:[h,o,g,o]})}return t})();export{E as a,P as b};
