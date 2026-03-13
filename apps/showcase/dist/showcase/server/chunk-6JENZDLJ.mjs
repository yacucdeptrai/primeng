import './polyfills.server.mjs';
import"./chunk-ZAJPSZPD.mjs";import{c as Re,d as K,f as Q,h as Y}from"./chunk-RNBAXVKN.mjs";import{a as g,d as Ge,e as $}from"./chunk-HZSAMTDM.mjs";import{a as C,b as Ae}from"./chunk-EK6YV52O.mjs";import{a as be,e as _,f as ve,g as ke,i as Ce,j as E,k as xe,l as ye,m as Se,s as we,t as _e}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import{c as N}from"./chunk-3SL6YYR2.mjs";import{b as Ve,c as Pe,d as Le}from"./chunk-DE54ZEHA.mjs";import{E as Me,Ga as Fe,H as De,J as Ee,Ja as Ie,ja as He,ra as Te,wa as Be,xa as Z}from"./chunk-YQJJ7I3T.mjs";import{j as ge}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{A as fe,k as me,n as ue,q as he,v as O}from"./chunk-RUZVPFSZ.mjs";import{$a as ie,Bb as p,Cb as r,Db as n,Eb as m,Lb as X,M as J,N as ee,O as j,Qb as V,S as te,Sa as s,Sb as u,Wb as le,X as h,Xb as T,Y as f,Yb as B,Zc as I,_c as de,ac as ce,da as R,dc as ae,ec as l,fc as A,gb as d,hb as U,jc as y,kc as S,lb as re,lc as w,ma as oe,mb as ne,oc as se,pc as pe,qc as z,rc as G,vb as x}from"./chunk-ZJKG6QAF.mjs";import"./chunk-AFOT676I.mjs";var Oe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-accessibility-doc"]],standalone:!1,decls:98,vars:0,consts:[["href","https://github.com/w3c/aria/issues/930"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(t,o){t&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),n(),r(4,"p"),l(5," Specification does not cover a color picker "),r(6,"a",0),l(7,"yet"),n(),l(8," and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats. "),n()(),r(9,"h3"),l(10,"Closed State Keyboard Support of Popup ColorPicker"),n(),r(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),l(16,"Key"),n(),r(17,"th"),l(18,"Function"),n()()(),r(19,"tbody")(20,"tr")(21,"td")(22,"i"),l(23,"tab"),n()(),r(24,"td"),l(25,"Moves focus to the color picker button."),n()(),r(26,"tr")(27,"td")(28,"i"),l(29,"space"),n()(),r(30,"td"),l(31,"Opens the popup and moves focus to the color slider."),n()()()()(),r(32,"h3"),l(33,"Popup Keyboard Support"),n(),r(34,"div",1)(35,"table",2)(36,"thead")(37,"tr")(38,"th"),l(39,"Key"),n(),r(40,"th"),l(41,"Function"),n()()(),r(42,"tbody")(43,"tr")(44,"td")(45,"i"),l(46,"enter"),n()(),r(47,"td"),l(48,"Selects the color and closes the popup."),n()(),r(49,"tr")(50,"td")(51,"i"),l(52,"space"),n()(),r(53,"td"),l(54,"Selects the color and closes the popup."),n()(),r(55,"tr")(56,"td")(57,"i"),l(58,"escape"),n()(),r(59,"td"),l(60,"Closes the popup, moves focus to the input."),n()()()()(),r(61,"h3"),l(62,"Color Picker Slider"),n(),r(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),l(68,"Key"),n(),r(69,"th"),l(70,"Function"),n()()(),r(71,"tbody")(72,"tr")(73,"td")(74,"i"),l(75,"arrow keys"),n()(),r(76,"td"),l(77,"Changes color."),n()()()()(),r(78,"h3"),l(79,"Hue Slider"),n(),r(80,"div",1)(81,"table",2)(82,"thead")(83,"tr")(84,"th"),l(85,"Key"),n(),r(86,"th"),l(87,"Function"),n()()(),r(88,"tbody")(89,"tr")(90,"td")(91,"span",3)(92,"i",4),l(93,"up arrow"),n(),r(94,"i"),l(95,"down arrow"),n()()(),r(96,"td"),l(97,"Changes hue."),n()()()()()())},dependencies:[g],encapsulation:2})}return i})();var Ye=({dt:i})=>`
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: ${i("colorpicker.preview.width")};
    height: ${i("colorpicker.preview.height")};
    padding: 0;
    border: 0 none;
    border-radius: ${i("colorpicker.preview.border.radius")};
    transition: background ${i("colorpicker.transition.duration")}, color ${i("colorpicker.transition.duration")}, border-color ${i("colorpicker.transition.duration")}, outline-color ${i("colorpicker.transition.duration")}, box-shadow ${i("colorpicker.transition.duration")};
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: ${i("colorpicker.preview.focus.border.color")};
    box-shadow: ${i("colorpicker.preview.focus.ring.shadow")};
    outline: ${i("colorpicker.preview.focus.ring.width")} ${i("colorpicker.preview.focus.ring.style")} ${i("colorpicker.preview.focus.ring.color")};
    outline-offset: ${i("colorpicker.preview.focus.ring.offset")};
}

.p-colorpicker-panel {
    background: ${i("colorpicker.panel.background")};
    border: 1px solid ${i("colorpicker.panel.border.color")};
    border-radius: ${i("colorpicker.panel.border.radius")};
    box-shadow: ${i("colorpicker.panel.shadow")};
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel:dir(rtl) {
    left: auto;
    right: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-selector:dir(rtl) {
    left: auto;
    right: 8px;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: ${i("colorpicker.handle.color")};
}

.p-colorpicker-color-handle:dir(rtl) {
    left: auto;
    right: 150px;
    margin: -5px -5px 0 0;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue:dir(rtl) {
    left: auto;
    right: 167px;
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: ${i("colorpicker.handle.color")};
}

.p-colorpicker-hue-handle:dir(rtl) {
    left: auto;
    right: 0px;
    margin-left: 0;
    margin-right: -2px;
}
`,$e={root:"p-colorpicker p-component",preview:({props:i})=>["p-colorpicker-preview",{"p-disabled":i.disabled}],panel:({props:i})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.disabled}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},q=(()=>{class i extends Fe{name="colorpicker";theme=Ye;classes=$e;static \u0275fac=(()=>{let e;return function(o){return(e||(e=oe(i)))(o||i)}})();static \u0275prov=ee({token:i,factory:i.\u0275fac})}return i})();var qe=["container"],Je=["input"],et=["colorSelector"],tt=["colorHandle"],ot=["hue"],it=["hueHandle"],rt=(i,H)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":i,"p-colorpicker-dragging":H}),nt=i=>({"p-disabled":i}),lt=(i,H)=>({"p-colorpicker-panel":!0,"p-colorpicker-panel-inline":i,"p-disabled":H}),ct=(i,H)=>({showTransitionParams:i,hideTransitionParams:H}),at=i=>({value:"visible",params:i});function st(i,H){if(i&1){let e=X();r(0,"input",9,1),V("click",function(){h(e);let o=u();return f(o.onInputClick())})("keydown",function(o){h(e);let c=u();return f(c.onInputKeydown(o))})("focus",function(){h(e);let o=u();return f(o.onInputFocus())}),n()}if(i&2){let e=u();ce("background-color",e.inputBgColor),p("ngClass",z(9,nt,e.disabled))("disabled",e.disabled)("pAutoFocus",e.autofocus),x("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}function pt(i,H){if(i&1){let e=X();r(0,"div",10),V("click",function(o){h(e);let c=u();return f(c.onOverlayClick(o))})("@overlayAnimation.start",function(o){h(e);let c=u();return f(c.onOverlayAnimationStart(o))})("@overlayAnimation.done",function(o){h(e);let c=u();return f(c.onOverlayAnimationEnd(o))}),r(1,"div",11)(2,"div",12,2),V("touchstart",function(o){h(e);let c=u();return f(c.onColorDragStart(o))})("touchmove",function(o){h(e);let c=u();return f(c.onDrag(o))})("touchend",function(){h(e);let o=u();return f(o.onDragEnd())})("mousedown",function(o){h(e);let c=u();return f(c.onColorMousedown(o))}),r(4,"div",13),m(5,"div",14,3),n()(),r(7,"div",15,4),V("mousedown",function(o){h(e);let c=u();return f(c.onHueMousedown(o))})("touchstart",function(o){h(e);let c=u();return f(c.onHueDragStart(o))})("touchmove",function(o){h(e);let c=u();return f(c.onDrag(o))})("touchend",function(){h(e);let o=u();return f(o.onDragEnd())}),m(9,"div",16,5),n()()()}if(i&2){let e=u();p("ngClass",G(10,lt,e.inline,e.disabled))("@overlayAnimation",z(16,at,G(13,ct,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),x("data-pc-section","panel"),s(),x("data-pc-section","content"),s(),x("data-pc-section","selector"),s(2),x("data-pc-section","color"),s(),x("data-pc-section","colorHandle"),s(2),x("data-pc-section","hue"),s(2),x("data-pc-section","hueHandle")}}var dt={provide:be,useExisting:J(()=>b),multi:!0},b=(()=>{class i extends Ie{overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new R;onShow=new R;onHide=new R;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=te(q);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(Z.ARIA)[Z.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,t){let o=t?t.pageY:e.pageY,c=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,o-c)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let o=t?t.pageX:e.pageX,c=t?t.pageY:e.pageY,a=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),v=a.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),k=a.left+this.document.body.scrollLeft,D=Math.floor(100*Math.max(0,Math.min(150,o-k))/150),Qe=Math.floor(100*(150-Math.max(0,Math.min(150,c-v)))/150);this.value=this.validateHSB({h:this.value.h,s:D,b:Qe}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&N.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&N.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):Ee(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?Me(this.overlay,this.inputViewChild?.nativeElement):De(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){fe(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!He()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ve(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var t=6-e.length;if(t>0){for(var o=[],c=0;c<t;c++)o.push("0");o.push(e),e=o.join("")}return e}HEXtoRGB(e){let t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var t={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),c=Math.max(e.r,e.g,e.b),a=c-o;return t.b=c,t.s=c!=0?255*a/c:0,t.s!=0?e.r==c?t.h=(e.g-e.b)/a:e.g==c?t.h=2+(e.b-e.r)/a:t.h=4+(e.r-e.g)/a:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){var t={r:0,g:0,b:0};let o=e.h,c=e.s*255/100,a=e.b*255/100;if(c==0)t={r:a,g:a,b:a};else{let v=a,k=(255-c)*a/255,D=(v-k)*(o%60)/60;o==360&&(o=0),o<60?(t.r=v,t.b=k,t.g=k+D):o<120?(t.g=v,t.b=k,t.r=v-D):o<180?(t.g=v,t.r=k,t.b=k+D):o<240?(t.b=v,t.r=k,t.g=v-D):o<300?(t.b=v,t.g=k,t.r=k+D):o<360?(t.r=v,t.g=k,t.b=v-D):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in t)t[o].length==1&&(t[o]="0"+t[o]);return t.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&N.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(t){return new(t||i)(ie(Te))};static \u0275cmp=d({type:i,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(t,o){if(t&1&&le(qe,5)(Je,5)(et,5)(tt,5)(ot,5)(it,5),t&2){let c;T(c=B())&&(o.containerViewChild=c.first),T(c=B())&&(o.inputViewChild=c.first),T(c=B())&&(o.colorSelector=c.first),T(c=B())&&(o.colorHandle=c.first),T(c=B())&&(o.hue=c.first),T(c=B())&&(o.hueHandle=c.first)}},inputs:{style:"style",styleClass:"styleClass",inline:[2,"inline","inline",I],format:"format",appendTo:"appendTo",disabled:[2,"disabled","disabled",I],tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",de],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",I]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[se([dt,q]),re],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview","readonly","readonly",3,"ngClass","disabled","backgroundColor","pAutoFocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview",3,"click","keydown","focus","ngClass","disabled","pAutoFocus"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color-background"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(t,o){t&1&&(r(0,"div",6,0),ne(2,st,2,11,"input",7)(3,pt,11,18,"div",8),n()),t&2&&(ae(o.styleClass),p("ngStyle",o.style)("ngClass",G(8,rt,!o.inline,o.colorDragging||o.hueDragging)),x("data-pc-name","colorpicker")("data-pc-section","root"),s(2),p("ngIf",!o.inline),s(),p("ngIf",o.inline||o.overlayVisible))},dependencies:[O,me,ue,he,Le,Pe,Be],encapsulation:2,data:{animation:[Re("overlayAnimation",[Y(":enter",[Q({opacity:0,transform:"scaleY(0.8)"}),K("{{showTransitionParams}}")]),Y(":leave",[K("{{hideTransitionParams}}",Q({opacity:0}))])])]},changeDetection:0})}return i})();var Ne=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-basic-demo',
    templateUrl: './color-picker-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerBasicDemo {
    color: string | undefined;
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-basic-demo"]],standalone:!1,decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","color-picker-basic-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is used as a controlled input with "),r(3,"i"),l(4,"ngModel"),n(),l(5," property."),n()(),r(6,"div",0)(7,"p-colorpicker",1),w("ngModelChange",function(a){return S(o.color,a)||(o.color=a),a}),n()(),m(8,"app-code",2)),t&2&&(s(7),y("ngModel",o.color),s(),p("code",o.code))},dependencies:[C,g,_,E,b],encapsulation:2})}return i})();var We=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-format-demo',
    templateUrl: './color-picker-format-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerDisabledDemo {
    color: string | undefined;
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-disabled-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","color-picker-disabled-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"When "),r(3,"i"),l(4,"disabled"),n(),l(5," is present, the element cannot be edited and focused."),n()(),r(6,"div",0)(7,"p-colorpicker",1),w("ngModelChange",function(a){return S(o.color,a)||(o.color=a),a}),n()(),m(8,"app-code",2)),t&2&&(s(7),y("ngModel",o.color),p("disabled",!0),s(),p("code",o.code))},dependencies:[C,g,_,E,b],encapsulation:2})}return i})();var je=(()=>{class i{color="#6466f1";colorRGB={r:100,g:102,b:241};colorHSB={h:239,s:59,b:95};code={basic:`<p-colorpicker [(ngModel)]="color" inputId="cp-hex" />

<p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />

<p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
        <p-colorpicker [(ngModel)]="color" inputId="cp-hex" />
        <span>{{ color }}</span>
    </div>
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
        <p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />
        <span>{{ 'r:' + colorRGB.r + ' g:' + colorRGB.g + ' b:' + colorRGB.b }}</span>
    </div>
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
        <p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />
        <span>{{ 'h:' + colorHSB.h + ' s:' + colorHSB.s + ' b:' + colorHSB.b }}</span>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-format-demo',
    templateUrl: './color-picker-format-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerFormatDemo {
    color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-format-demo"]],standalone:!1,decls:35,vars:7,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-1","flex","flex-col","items-center"],["for","cp-hex",1,"font-bold","block","mb-2"],["inputId","cp-hex",3,"ngModelChange","ngModel"],["for","cp-rgb",1,"font-bold","block","mb-2"],["format","rgb","inputId","cp-rgb",3,"ngModelChange","ngModel"],["for","cp-hsb",1,"font-bold","block","mb-2"],["format","hsb","inputId","cp-hsb",3,"ngModelChange","ngModel"],["selector","color-picker-format-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"Default color format to use in value binding is "),r(3,"i"),l(4,"hex"),n(),l(5," and other possible values can be "),r(6,"i"),l(7,"rgb"),n(),l(8," and "),r(9,"i"),l(10,"hsb"),n(),l(11," using the "),r(12,"i"),l(13,"format"),n(),l(14," property."),n()(),r(15,"div",0)(16,"div",1)(17,"label",2),l(18," HEX "),n(),r(19,"p-colorpicker",3),w("ngModelChange",function(a){return S(o.color,a)||(o.color=a),a}),n(),r(20,"span"),l(21),n()(),r(22,"div",1)(23,"label",4),l(24," RGB "),n(),r(25,"p-colorpicker",5),w("ngModelChange",function(a){return S(o.colorRGB,a)||(o.colorRGB=a),a}),n(),r(26,"span"),l(27),n()(),r(28,"div",1)(29,"label",6),l(30," HSB "),n(),r(31,"p-colorpicker",7),w("ngModelChange",function(a){return S(o.colorHSB,a)||(o.colorHSB=a),a}),n(),r(32,"span"),l(33),n()()(),m(34,"app-code",8)),t&2&&(s(19),y("ngModel",o.color),s(2),A(o.color),s(4),y("ngModel",o.colorRGB),s(2),A("r:"+o.colorRGB.r+" g:"+o.colorRGB.g+" b:"+o.colorRGB.b),s(4),y("ngModel",o.colorHSB),s(2),A("h:"+o.colorHSB.h+" s:"+o.colorHSB.s+" b:"+o.colorHSB.b),s(),p("code",o.code))},dependencies:[C,g,_,E,b],encapsulation:2})}return i})();var Ue=(()=>{class i{code={typescript:"import { ColorPickerModule } from 'primeng/colorpicker';"};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&m(0,"app-code",0),t&2&&p("code",o.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return i})();var Xe=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" [inline]="true" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" [inline]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-inline-demo',
    templateUrl: './color-picker-inline-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerInlineDemo {
    color: string | undefined;
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["color-picker-inline-demo"]],standalone:!1,decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","inline"],["selector","color-picker-inline-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is displayed as a popup by default, add "),r(3,"i"),l(4,"inline"),n(),l(5," property to customize this behavior."),n()(),r(6,"div",0)(7,"p-colorpicker",1),w("ngModelChange",function(a){return S(o.color,a)||(o.color=a),a}),n()(),m(8,"app-code",2)),t&2&&(s(7),y("ngModel",o.color),p("inline",!0),s(),p("code",o.code))},dependencies:[C,g,_,E,b],encapsulation:2})}return i})();var ze=(()=>{class i{formGroup;ngOnInit(){this.formGroup=new ke({color:new Ce})}code={basic:`<form [formGroup]="formGroup">
    <p-colorpicker formControlName="color" />
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="formGroup">
        <p-colorpicker formControlName="color" />
    </form>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-reactive-forms-demo',
    templateUrl: './color-picker-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ColorPicker]
})
export class ColorPickerReactiveFormsDemo {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            color: new FormControl()
        });
    }
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["reactive-forms-doc"]],standalone:!1,decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"formGroup"],["formControlName","color"],["selector","color-picker-reactive-forms-demo",3,"code"]],template:function(t,o){t&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker can also be used with reactive forms. In this case, the "),r(3,"i"),l(4,"formControlName"),n(),l(5," property is used to bind the component to a form control."),n()(),r(6,"div",0)(7,"form",1),m(8,"p-colorpicker",2),n()(),m(9,"app-code",3)),t&2&&(s(7),p("formGroup",o.formGroup),s(2),p("code",o.code))},dependencies:[C,g,xe,_,ve,Se,ye,b],encapsulation:2})}return i})();var Ze=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[O,ge,Ae,$,we,_e,b,$]})}return i})();var mt=()=>["ColorPicker"],Ke=(()=>{class i{docs=[{id:"import",label:"Import",component:Ue},{id:"basic",label:"Basic",component:Ne},{id:"reactive-forms",label:"Reactive Forms",component:ze},{id:"inline",label:"Inline",component:Xe},{id:"format",label:"Format",component:je},{id:"disabled",label:"Disabled",component:We},{id:"accessibility",label:"Accessibility",component:Oe}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=d({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ColorPicker Component","header","ColorPicker","description","ColorPicker is an input component to select a color.","themeDocs","colorpicker",3,"docs","apiDocs"]],template:function(t,o){t&1&&m(0,"app-doc",0),t&2&&p("docs",o.docs)("apiDocs",pe(2,mt))},dependencies:[Ze,Ge],encapsulation:2})}return i})();var To=[{path:"",component:Ke}];export{To as default};
