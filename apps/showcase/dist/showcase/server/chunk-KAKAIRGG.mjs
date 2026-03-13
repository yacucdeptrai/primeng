import './polyfills.server.mjs';
import{a as ue,b as ge,c as et,d as tt,e as it}from"./chunk-BFSZRPEE.mjs";import"./chunk-5IQQKL7W.mjs";import"./chunk-6IOIRDBP.mjs";import{a as $}from"./chunk-VTA4L4HB.mjs";import"./chunk-RP7DCUL4.mjs";import{a as V,d as Ze,e as de}from"./chunk-HZSAMTDM.mjs";import{a as M,b as Ye}from"./chunk-EK6YV52O.mjs";import{e as we,j as Fe,s as De}from"./chunk-TFKM2WIB.mjs";import"./chunk-OEKEPL5T.mjs";import"./chunk-25YO5GOD.mjs";import"./chunk-3SL6YYR2.mjs";import{$ as Xe,h as qe,i as Qe,j as Ge,k as Ne,l as $e,m as je,n as We,o as ze}from"./chunk-DE54ZEHA.mjs";import{Ga as He,Ja as Ke,Ka as Je,P as pe,Q as Ae,e as j,l as v,ma as Me,na as Oe,oa as Be,pa as Re,va as Ve,wa as Ue}from"./chunk-YQJJ7I3T.mjs";import{j as Ee}from"./chunk-X4SEKHHA.mjs";import"./chunk-5H7TUZVV.mjs";import{A as ee,k as N,n as Le,q as Pe,r as Ce,v as Z}from"./chunk-RUZVPFSZ.mjs";import{$a as O,$b as R,Bb as m,Cb as a,Db as l,Dc as I,Eb as f,Ib as x,Jb as k,Kb as B,Lb as J,Ma as z,N as Te,O as ne,Qb as L,S as re,Sa as p,Sb as h,Tc as G,Vb as Se,Wb as be,X as F,Xb as _,Y as D,Yb as T,Zc as w,_c as Ie,da as C,dc as ye,ec as n,fc as A,gb as P,gc as xe,hb as ae,jc as le,kc as se,lb as ve,lc as ce,ma as W,mb as d,mc as X,oc as ke,pc as E,qc as Q,sc as Y,tc as me,vb as g}from"./chunk-ZJKG6QAF.mjs";import{a as y}from"./chunk-AFOT676I.mjs";var ot=(()=>{class i{code={html:`<span id="lb">Options</span>
<p-picklist ariaLabelledBy="lb" />

<p-picklist ariaLabel="City" />`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=P({type:i,selectors:[["pick-list-accessibility-doc"]],standalone:!1,decls:225,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),l(),a(3,"p"),n(4," Value to describe the source listbox and target listbox can be provided with "),a(5,"i"),n(6,"ariaLabelledBy"),l(),n(7," or "),a(8,"i"),n(9,"ariaLabel"),l(),n(10," props. The list elements has a "),a(11,"i"),n(12,"listbox"),l(),n(13," role with the "),a(14,"i"),n(15,"aria-multiselectable"),l(),n(16," attribute. Each list item has an "),a(17,"i"),n(18,"option"),l(),n(19," role with "),a(20,"i"),n(21,"aria-selected"),l(),n(22," and "),a(23,"i"),n(24,"aria-disabled"),l(),n(25," as their attributes. "),l(),a(26,"p"),n(27," Controls buttons are "),a(28,"i"),n(29,"button"),l(),n(30," elements with an "),a(31,"i"),n(32,"aria-label"),l(),n(33," that refers to the "),a(34,"i"),n(35,"aria.moveTop"),l(),n(36,", "),a(37,"i"),n(38,"aria.moveUp"),l(),n(39,", "),a(40,"i"),n(41,"aria.moveDown"),l(),n(42,", "),a(43,"i"),n(44,"aria.moveBottom"),l(),n(45,","),a(46,"i"),n(47,"aria.moveTo"),l(),n(48,", "),a(49,"i"),n(50,"aria.moveAllTo"),l(),n(51,", "),a(52,"i"),n(53,"aria.moveFrom"),l(),n(54," and "),a(55,"i"),n(56,"aria.moveAllFrom"),l(),n(57," properties of the "),a(58,"a",0),n(59,"locale"),l(),n(60," API by default, alternatively you may use"),a(61,"i"),n(62,"moveTopButtonProps"),l(),n(63,", "),a(64,"i"),n(65,"moveUpButtonProps"),l(),n(66,", "),a(67,"i"),n(68,"moveDownButtonProps"),l(),n(69,", "),a(70,"i"),n(71,"moveToButtonProps"),l(),n(72,", "),a(73,"i"),n(74,"moveAllToButtonProps"),l(),n(75,", "),a(76,"i"),n(77,"moveFromButtonProps"),l(),n(78,", "),a(79,"i"),n(80,"moveFromButtonProps"),l(),n(81," and "),a(82,"i"),n(83,"moveAllFromButtonProps"),l(),n(84," to customize the buttons like overriding the default "),a(85,"i"),n(86,"aria-label"),l(),n(87," attributes. "),l(),f(88,"app-code",1),a(89,"h3"),n(90,"PickList Keyboard Support"),l(),a(91,"div",2)(92,"table",3)(93,"thead")(94,"tr")(95,"th"),n(96,"Key"),l(),a(97,"th"),n(98,"Function"),l()()(),a(99,"tbody")(100,"tr")(101,"td")(102,"i"),n(103,"tab"),l()(),a(104,"td"),n(105,"Moves focus to the first selected option, if there is none then first option receives the focus."),l()(),a(106,"tr")(107,"td")(108,"i"),n(109,"up arrow"),l()(),a(110,"td"),n(111,"Moves focus to the previous option."),l()(),a(112,"tr")(113,"td")(114,"i"),n(115,"down arrow"),l()(),a(116,"td"),n(117,"Moves focus to the next option."),l()(),a(118,"tr")(119,"td")(120,"i"),n(121,"enter"),l()(),a(122,"td"),n(123,"Toggles the selected state of the focused option."),l()(),a(124,"tr")(125,"td")(126,"i"),n(127,"space"),l()(),a(128,"td"),n(129,"Toggles the selected state of the focused option."),l()(),a(130,"tr")(131,"td")(132,"i"),n(133,"home"),l()(),a(134,"td"),n(135,"Moves focus to the first option."),l()(),a(136,"tr")(137,"td")(138,"i"),n(139,"end"),l()(),a(140,"td"),n(141,"Moves focus to the last option."),l()(),a(142,"tr")(143,"td")(144,"i"),n(145,"shift"),l(),n(146," + "),a(147,"i"),n(148,"down arrow"),l()(),a(149,"td"),n(150,"Moves focus to the next option and toggles the selection state."),l()(),a(151,"tr")(152,"td")(153,"i"),n(154,"shift"),l(),n(155," + "),a(156,"i"),n(157,"up arrow"),l()(),a(158,"td"),n(159,"Moves focus to the previous option and toggles the selection state."),l()(),a(160,"tr")(161,"td")(162,"i"),n(163,"shift"),l(),n(164," + "),a(165,"i"),n(166,"space"),l()(),a(167,"td"),n(168,"Selects the items between the most recently selected option and the focused option."),l()(),a(169,"tr")(170,"td")(171,"i"),n(172,"control"),l(),n(173," + "),a(174,"i"),n(175,"shift"),l(),n(176," + "),a(177,"i"),n(178,"home"),l()(),a(179,"td"),n(180,"Selects the focused options and all the options up to the first one."),l()(),a(181,"tr")(182,"td")(183,"i"),n(184,"control"),l(),n(185," + "),a(186,"i"),n(187,"shift"),l(),n(188," + "),a(189,"i"),n(190,"end"),l()(),a(191,"td"),n(192,"Selects the focused options and all the options down to the first one."),l()(),a(193,"tr")(194,"td")(195,"i"),n(196,"control"),l(),n(197," + "),a(198,"i"),n(199,"a"),l()(),a(200,"td"),n(201,"Selects all options."),l()()()()(),a(202,"h3"),n(203,"Buttons Keyboard Support"),l(),a(204,"div",2)(205,"table",3)(206,"thead")(207,"tr")(208,"th"),n(209,"Key"),l(),a(210,"th"),n(211,"Function"),l()()(),a(212,"tbody")(213,"tr")(214,"td")(215,"i"),n(216,"enter"),l()(),a(217,"td"),n(218,"Executes button action."),l()(),a(219,"tr")(220,"td")(221,"i"),n(222,"space"),l()(),a(223,"td"),n(224,"Executes button action."),l()()()()()()),o&2&&(p(88),m("code",t.code)("hideToggleCode",!0))},dependencies:[M,V],encapsulation:2})}return i})();var St=({dt:i})=>`
.p-picklist {
    display: flex;
    gap: ${i("picklist.gap")};
}

.p-picklist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${i("picklist.controls.gap")};
}

.p-picklist-list-container {
    flex: 1 1 50%;
}

.p-picklist .p-listbox {
    height: 100%;
}
`,bt={root:"p-picklist p-component",sourceControls:"p-picklist-controls p-picklist-source-controls",sourceListContainer:"p-picklist-list-container p-picklist-source-list-container",transferControls:"p-picklist-controls p-picklist-transfer-controls",targetListContainer:"p-picklist-list-container p-picklist-target-list-container",targetControls:"p-picklist-controls p-picklist-target-controls"},fe=(()=>{class i extends He{name="picklist";theme=St;classes=bt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=W(i)))(t||i)}})();static \u0275prov=Te({token:i,factory:i.\u0275fac})}return i})();var yt=["item"],xt=["sourceHeader"],kt=["targetHeader"],nt=["sourceFilter"],rt=["targetFilter"],It=["emptymessagesource"],Lt=["emptyfiltermessagesource"],Pt=["emptymessagetarget"],Ct=["emptyfiltermessagetarget"],Et=["moveupicon"],wt=["movetopicon"],Ft=["movedownicon"],Dt=["movebottomicon"],At=["movetotargeticon"],Mt=["movealltotargeticon"],Ot=["movetosourceicon"],Bt=["movealltosourceicon"],Rt=["targetfiltericon"],Vt=["sourcefiltericon"],Ut=["sourcelist"],Ht=["targetlist"],Kt=()=>({"p-picklist p-component":!0}),oe=i=>({$implicit:i}),lt=i=>({options:i}),st=(i,c,e,o)=>({$implicit:i,index:c,selected:e,disabled:o});function qt(i,c){i&1&&f(0,"AngleUpIcon"),i&2&&g("data-pc-section","moveupicon")}function Qt(i,c){}function Gt(i,c){i&1&&d(0,Qt,0,0,"ng-template")}function Nt(i,c){i&1&&f(0,"AngleDoubleUpIcon"),i&2&&g("data-pc-section","movetopicon")}function $t(i,c){}function jt(i,c){i&1&&d(0,$t,0,0,"ng-template")}function Wt(i,c){i&1&&f(0,"AngleDownIcon"),i&2&&g("data-pc-section","movedownicon")}function zt(i,c){}function Jt(i,c){i&1&&d(0,zt,0,0,"ng-template")}function Xt(i,c){i&1&&f(0,"AngleDoubleDownIcon"),i&2&&g("data-pc-section","movebottomicon")}function Yt(i,c){}function Zt(i,c){i&1&&d(0,Yt,0,0,"ng-template")}function ei(i,c){if(i&1){let e=J();a(0,"div",17)(1,"button",13),L("click",function(){F(e);let t=h(),r=R(4);return D(t.moveUp(r,t.source,t.selectedItemsSource,t.onSourceReorder,t.SOURCE_LIST))}),d(2,qt,1,1,"AngleUpIcon",11)(3,Gt,1,0,null,18),l(),a(4,"button",13),L("click",function(){F(e);let t=h(),r=R(4);return D(t.moveTop(r,t.source,t.selectedItemsSource,t.onSourceReorder,t.SOURCE_LIST))}),d(5,Nt,1,1,"AngleDoubleUpIcon",11)(6,jt,1,0,null,18),l(),a(7,"button",13),L("click",function(){F(e);let t=h(),r=R(4);return D(t.moveDown(r,t.source,t.selectedItemsSource,t.onSourceReorder,t.SOURCE_LIST))}),d(8,Wt,1,1,"AngleDownIcon",11)(9,Jt,1,0,null,18),l(),a(10,"button",13),L("click",function(){F(e);let t=h(),r=R(4);return D(t.moveBottom(r,t.source,t.selectedItemsSource,t.onSourceReorder,t.SOURCE_LIST))}),d(11,Xt,1,1,"AngleDoubleDownIcon",11)(12,Zt,1,0,null,18),l()()}if(i&2){let e=h();g("data-pc-section","sourceControls")("data-pc-group-section","controls"),p(),m("disabled",e.sourceMoveDisabled())("buttonProps",e.getButtonProps("moveup")),g("aria-label",e.moveUpAriaLabel)("data-pc-section","sourceMoveUpButton"),p(),m("ngIf",!e.moveUpIconTemplate&&!e._moveUpIconTemplate),p(),m("ngTemplateOutlet",e.moveUpIconTemplate||e._moveUpIconTemplate),p(),m("disabled",e.sourceMoveDisabled())("buttonProps",e.getButtonProps("movetop")),g("aria-label",e.moveTopAriaLabel)("data-pc-section","sourceMoveTopButton"),p(),m("ngIf",!e.moveTopIconTemplate&&!e._moveTopIconTemplate),p(),m("ngTemplateOutlet",e.moveTopIconTemplate||e._moveTopIconTemplate),p(),m("disabled",e.sourceMoveDisabled())("buttonProps",e.getButtonProps("movedown")),g("aria-label",e.moveDownAriaLabel)("data-pc-section","sourceMoveDownButton"),p(),m("ngIf",!e.moveDownIconTemplate&&!e._moveDownIconTemplate),p(),m("ngTemplateOutlet",e.moveDownIconTemplate||e._moveDownIconTemplate),p(),m("disabled",e.sourceMoveDisabled())("buttonProps",e.getButtonProps("movebottom")),g("aria-label",e.moveBottomAriaLabel)("data-pc-section","sourceMoveBottomButton"),p(),m("ngIf",!e.moveBottomIconTemplate||e._moveBottomIconTemplate),p(),m("ngTemplateOutlet",e.moveBottomIconTemplate||e._moveBottomIconTemplate)}}function ti(i,c){if(i&1&&(a(0,"div",20),n(1),l()),i&2){let e=h(3);p(),A(e.sourceHeader)}}function ii(i,c){}function oi(i,c){i&1&&d(0,ii,0,0,"ng-template")}function ni(i,c){if(i&1&&d(0,ti,2,1,"div",19)(1,oi,1,0,null,18),i&2){let e=h(2);m("ngIf",!e.sourceHeaderTemplate&&!e._sourceHeaderTemplate),p(),m("ngTemplateOutlet",e.sourceHeaderTemplate||e._sourceHeaderTemplate)}}function ri(i,c){i&1&&(x(0),d(1,ni,2,2,"ng-template",null,2,I),k())}function ai(i,c){}function li(i,c){i&1&&d(0,ai,0,0,"ng-template")}function si(i,c){if(i&1&&d(0,li,1,0,null,14),i&2){let e=h(2);m("ngTemplateOutlet",e.sourceFilterTemplate||e._sourceFilterTemplate)("ngTemplateOutletContext",Q(2,lt,e.sourceFilterOptions))}}function ci(i,c){i&1&&(x(0),d(1,si,1,4,"ng-template",null,3,I),k())}function mi(i,c){i&1&&B(0)}function pi(i,c){if(i&1&&(x(0),d(1,mi,1,0,"ng-container",18),k()),i&2){let e=h();p(),m("ngTemplateOutlet",e.sourceFilterIconTemplate||e._sourceFilterIconTemplate)}}function di(i,c){i&1&&B(0)}function ui(i,c){if(i&1&&d(0,di,1,0,"ng-container",14),i&2){let e=c.$implicit,o=c.index,t=c.selected,r=c.disabled,s=h(2);m("ngTemplateOutlet",s.itemTemplate||s._itemTemplate)("ngTemplateOutletContext",me(2,st,e,o,t,r))}}function gi(i,c){i&1&&(x(0),d(1,ui,1,7,"ng-template",null,4,I),k())}function fi(i,c){i&1&&B(0)}function hi(i,c){if(i&1&&d(0,fi,1,0,"ng-container",18),i&2){let e=h(2);m("ngTemplateOutlet",e.emptyMessageSourceTemplate||e._emptyMessageSourceTemplate)}}function _i(i,c){i&1&&(x(0),d(1,hi,1,1,"ng-template",null,5,I),k())}function Ti(i,c){i&1&&B(0)}function vi(i,c){if(i&1&&d(0,Ti,1,0,"ng-container",18),i&2){let e=h(2);m("ngTemplateOutlet",e.emptyFilterMessageSourceTemplate||e._emptyFilterMessageSourceTemplate)}}function Si(i,c){i&1&&(x(0),d(1,vi,1,1,"ng-template",null,6,I),k())}function bi(i,c){i&1&&f(0,"AngleRightIcon"),i&2&&g("data-pc-section","movetotargeticon")}function yi(i,c){i&1&&f(0,"AngleDownIcon"),i&2&&g("data-pc-section","movetotargeticon")}function xi(i,c){if(i&1&&(x(0),d(1,bi,1,1,"AngleRightIcon",11)(2,yi,1,1,"AngleDownIcon",11),k()),i&2){let e=h();p(),m("ngIf",!e.viewChanged),p(),m("ngIf",e.viewChanged)}}function ki(i,c){}function Ii(i,c){i&1&&d(0,ki,0,0,"ng-template")}function Li(i,c){i&1&&f(0,"AngleDoubleRightIcon"),i&2&&g("data-pc-section","movealltotargeticon")}function Pi(i,c){i&1&&f(0,"AngleDoubleDownIcon"),i&2&&g("data-pc-section","movealltotargeticon")}function Ci(i,c){if(i&1&&(x(0),d(1,Li,1,1,"AngleDoubleRightIcon",11)(2,Pi,1,1,"AngleDoubleDownIcon",11),k()),i&2){let e=h();p(),m("ngIf",!e.viewChanged),p(),m("ngIf",e.viewChanged)}}function Ei(i,c){}function wi(i,c){i&1&&d(0,Ei,0,0,"ng-template")}function Fi(i,c){i&1&&f(0,"AngleLeftIcon"),i&2&&g("data-pc-section","movedownsourceticon")}function Di(i,c){i&1&&f(0,"AngleUpIcon"),i&2&&g("data-pc-section","movedownsourceticon")}function Ai(i,c){if(i&1&&(x(0),d(1,Fi,1,1,"AngleLeftIcon",11)(2,Di,1,1,"AngleUpIcon",11),k()),i&2){let e=h();p(),m("ngIf",!e.viewChanged),p(),m("ngIf",e.viewChanged)}}function Mi(i,c){}function Oi(i,c){i&1&&d(0,Mi,0,0,"ng-template")}function Bi(i,c){i&1&&f(0,"AngleDoubleLeftIcon"),i&2&&g("data-pc-section","movealltosourceticon")}function Ri(i,c){i&1&&f(0,"AngleDoubleUpIcon"),i&2&&g("data-pc-section","movealltosourceticon")}function Vi(i,c){if(i&1&&(x(0),d(1,Bi,1,1,"AngleDoubleLeftIcon",11)(2,Ri,1,1,"AngleDoubleUpIcon",11),k()),i&2){let e=h();p(),m("ngIf",!e.viewChanged),p(),m("ngIf",e.viewChanged)}}function Ui(i,c){}function Hi(i,c){i&1&&d(0,Ui,0,0,"ng-template")}function Ki(i,c){if(i&1&&(a(0,"div",20),n(1),l()),i&2){let e=h(3);p(),A(e.targetHeader)}}function qi(i,c){}function Qi(i,c){i&1&&d(0,qi,0,0,"ng-template")}function Gi(i,c){if(i&1&&d(0,Ki,2,1,"div",19)(1,Qi,1,0,null,18),i&2){let e=h(2);m("ngIf",!e.targetHeaderTemplate&&!e._targetHeaderTemplate),p(),m("ngTemplateOutlet",e.targetHeaderTemplate||e._targetHeaderTemplate)}}function Ni(i,c){i&1&&(x(0),d(1,Gi,2,2,"ng-template",null,2,I),k())}function $i(i,c){}function ji(i,c){i&1&&d(0,$i,0,0,"ng-template")}function Wi(i,c){if(i&1&&d(0,ji,1,0,null,14),i&2){let e=h(2);m("ngTemplateOutlet",e.targetFilterTemplate||e._targetFilterTemplate)("ngTemplateOutletContext",Q(2,lt,e.targetFilterOptions))}}function zi(i,c){i&1&&(x(0),d(1,Wi,1,4,"ng-template",null,3,I),k())}function Ji(i,c){i&1&&B(0)}function Xi(i,c){if(i&1&&(x(0),d(1,Ji,1,0,"ng-container",18),k()),i&2){let e=h();p(),m("ngTemplateOutlet",e.targetFilterIconTemplate||e._targetFilterIconTemplate)}}function Yi(i,c){i&1&&B(0)}function Zi(i,c){if(i&1&&d(0,Yi,1,0,"ng-container",14),i&2){let e=c.$implicit,o=c.index,t=c.selected,r=c.disabled,s=h(2);m("ngTemplateOutlet",s.itemTemplate||s._itemTemplate)("ngTemplateOutletContext",me(2,st,e,o,t,r))}}function eo(i,c){i&1&&(x(0),d(1,Zi,1,7,"ng-template",null,4,I),k())}function to(i,c){i&1&&B(0)}function io(i,c){if(i&1&&d(0,to,1,0,"ng-container",18),i&2){let e=h(2);m("ngTemplateOutlet",e.emptyMessageTargetTemplate||e._emptyMessageTargetTemplate)}}function oo(i,c){i&1&&(x(0),d(1,io,1,1,"ng-template",null,5,I),k())}function no(i,c){i&1&&B(0)}function ro(i,c){if(i&1&&d(0,no,1,0,"ng-container",18),i&2){let e=h(2);m("ngTemplateOutlet",e.emptyFilterMessageTargetTemplate||e._emptyFilterMessageTargetTemplate)}}function ao(i,c){i&1&&(x(0),d(1,ro,1,1,"ng-template",null,6,I),k())}function lo(i,c){i&1&&f(0,"AngleUpIcon"),i&2&&g("data-pc-section","moveupicon")}function so(i,c){}function co(i,c){i&1&&d(0,so,0,0,"ng-template")}function mo(i,c){i&1&&f(0,"AngleDoubleUpIcon"),i&2&&g("data-pc-section","movetopicon")}function po(i,c){}function uo(i,c){i&1&&d(0,po,0,0,"ng-template")}function go(i,c){i&1&&f(0,"AngleDownIcon"),i&2&&g("data-pc-section","movedownicon")}function fo(i,c){}function ho(i,c){i&1&&d(0,fo,0,0,"ng-template")}function _o(i,c){i&1&&f(0,"AngleDoubleDownIcon"),i&2&&g("data-pc-section","movebottomicon")}function To(i,c){}function vo(i,c){i&1&&d(0,To,0,0,"ng-template")}function So(i,c){if(i&1){let e=J();a(0,"div",21)(1,"button",13),L("click",function(){F(e);let t=h(),r=R(26);return D(t.moveUp(r,t.target,t.selectedItemsTarget,t.onTargetReorder,t.TARGET_LIST))}),d(2,lo,1,1,"AngleUpIcon",11)(3,co,1,0,null,18),l(),a(4,"button",13),L("click",function(){F(e);let t=h(),r=R(26);return D(t.moveTop(r,t.target,t.selectedItemsTarget,t.onTargetReorder,t.TARGET_LIST))}),d(5,mo,1,1,"AngleDoubleUpIcon",11)(6,uo,1,0,null,18),l(),a(7,"button",13),L("click",function(){F(e);let t=h(),r=R(26);return D(t.moveDown(r,t.target,t.selectedItemsTarget,t.onTargetReorder,t.TARGET_LIST))}),d(8,go,1,1,"AngleDownIcon",11)(9,ho,1,0,null,18),l(),a(10,"button",13),L("click",function(){F(e);let t=h(),r=R(26);return D(t.moveBottom(r,t.target,t.selectedItemsTarget,t.onTargetReorder,t.TARGET_LIST))}),d(11,_o,1,1,"AngleDoubleDownIcon",11)(12,vo,1,0,null,18),l()()}if(i&2){let e=h();g("data-pc-section","targetControls")("data-pc-group-section","controls"),p(),m("disabled",e.targetMoveDisabled())("buttonProps",e.getButtonProps("moveup")),g("aria-label",e.moveUpAriaLabel)("data-pc-section","targetMoveUpButton"),p(),m("ngIf",!e.moveUpIconTemplate&&!e._moveUpIconTemplate),p(),m("ngTemplateOutlet",e.moveUpIconTemplate||e._moveUpIconTemplate),p(),m("disabled",e.targetMoveDisabled())("buttonProps",e.getButtonProps("movetop")),g("aria-label",e.moveTopAriaLabel)("data-pc-section","targetMoveTopButton"),p(),m("ngIf",!e.moveTopIconTemplate&&!e._moveTopIconTemplate),p(),m("ngTemplateOutlet",e.moveTopIconTemplate||e.moveTopIconTemplate),p(),m("disabled",e.targetMoveDisabled())("buttonProps",e.getButtonProps("movedown")),g("aria-label",e.moveDownAriaLabel)("data-pc-section","targetMoveDownButton"),p(),m("ngIf",!e.moveDownIconTemplate&&!e._moveDownIconTemplate),p(),m("ngTemplateOutlet",e.moveDownIconTemplate||e._moveDownIconTemplate),p(),m("disabled",e.targetMoveDisabled())("buttonProps",e.getButtonProps("movebottom")),g("aria-label",e.moveBottomAriaLabel)("data-pc-section","targetMoveBottomButton"),p(),m("ngIf",!e.moveBottomIconTemplate&&!e._moveBottomIconTemplate),p(),m("ngTemplateOutlet",e.moveBottomIconTemplate||e._moveBottomIconTemplate)}}var K=(()=>{class i extends Ke{source;target;sourceHeader;tabindex=0;rightButtonAriaLabel;leftButtonAriaLabel;allRightButtonAriaLabel;allLeftButtonAriaLabel;upButtonAriaLabel;downButtonAriaLabel;topButtonAriaLabel;bottomButtonAriaLabel;targetHeader;responsive;filterBy;filterLocale;trackBy=(e,o)=>o;sourceTrackBy;targetTrackBy;showSourceFilter=!0;showTargetFilter=!0;metaKeySelection=!1;dragdrop=!1;style;styleClass;sourceStyle;targetStyle;showSourceControls=!0;showTargetControls=!0;sourceFilterPlaceholder;targetFilterPlaceholder;disabled=!1;sourceOptionDisabled;targetOptionDisabled;ariaSourceFilterLabel;ariaTargetFilterLabel;filterMatchMode="contains";stripedRows;keepSelection=!1;scrollHeight="14rem";autoOptionFocus=!0;buttonProps={severity:"secondary"};moveUpButtonProps;moveTopButtonProps;moveDownButtonProps;moveBottomButtonProps;moveToTargetProps;moveAllToTargetProps;moveToSourceProps;moveAllToSourceProps;get breakpoint(){return this._breakpoint}set breakpoint(e){e!==this._breakpoint&&(this._breakpoint=e,ee(this.platformId)&&(this.destroyMedia(),this.initMedia()))}onMoveToSource=new C;onMoveAllToSource=new C;onMoveAllToTarget=new C;onMoveToTarget=new C;onSourceReorder=new C;onTargetReorder=new C;onSourceSelect=new C;onTargetSelect=new C;onSourceFilter=new C;onTargetFilter=new C;onFocus=new C;onBlur=new C;listViewSourceChild;listViewTargetChild;sourceFilterViewChild;targetFilterViewChild;getButtonProps(e){switch(e){case"moveup":return y(y({},this.buttonProps),this.moveUpButtonProps);case"movetop":return y(y({},this.buttonProps),this.moveTopButtonProps);case"movedown":return y(y({},this.buttonProps),this.moveDownButtonProps);case"movebottom":return y(y({},this.buttonProps),this.moveBottomButtonProps);case"movetotarget":return y(y({},this.buttonProps),this.moveToTargetProps);case"movealltotarget":return y(y({},this.buttonProps),this.moveAllToTargetProps);case"movetosource":return y(y({},this.buttonProps),this.moveToSourceProps);case"movealltosource":return y(y({},this.buttonProps),this.moveAllToSourceProps);default:return this.buttonProps}}get moveUpAriaLabel(){return this.upButtonAriaLabel?this.upButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveUp:void 0}get moveTopAriaLabel(){return this.topButtonAriaLabel?this.topButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveTop:void 0}get moveDownAriaLabel(){return this.downButtonAriaLabel?this.downButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveDown:void 0}get moveBottomAriaLabel(){return this.bottomButtonAriaLabel?this.bottomButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveDown:void 0}get moveToTargetAriaLabel(){return this.rightButtonAriaLabel?this.rightButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveToTarget:void 0}get moveAllToTargetAriaLabel(){return this.allRightButtonAriaLabel?this.allRightButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveAllToTarget:void 0}get moveToSourceAriaLabel(){return this.leftButtonAriaLabel?this.leftButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveToSource:void 0}get moveAllToSourceAriaLabel(){return this.allLeftButtonAriaLabel?this.allLeftButtonAriaLabel:this.config.translation.aria?this.config.translation.aria.moveAllToSource:void 0}get idSource(){return this.id+"_source"}get idTarget(){return this.id+"_target"}get focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}_breakpoint="960px";visibleOptionsSource;visibleOptionsTarget;selectedItemsSource=[];selectedItemsTarget=[];reorderedListElement;movedUp;movedDown;itemTouched;styleElement;id=Be("pn_id_");filterValueSource;filterValueTarget;fromListType;sourceFilterOptions;targetFilterOptions;SOURCE_LIST=-1;TARGET_LIST=1;window;media;viewChanged;focusedOptionIndex=-1;focusedOption;focused={sourceList:!1,targetList:!1};_componentStyle=re(fe);mediaChangeListener;filterService=re(Re);ngOnInit(){super.ngOnInit(),this.responsive&&(this.createStyle(),this.initMedia()),this.filterBy&&(this.sourceFilterOptions={filter:e=>this.filterSource(e),reset:()=>this.resetSourceFilter()},this.targetFilterOptions={filter:e=>this.filterTarget(e),reset:()=>this.resetTargetFilter()})}itemTemplate;sourceHeaderTemplate;targetHeaderTemplate;sourceFilterTemplate;targetFilterTemplate;emptyMessageSourceTemplate;emptyFilterMessageSourceTemplate;emptyMessageTargetTemplate;emptyFilterMessageTargetTemplate;moveUpIconTemplate;moveTopIconTemplate;moveDownIconTemplate;moveBottomIconTemplate;moveToTargetIconTemplate;moveAllToTargetIconTemplate;moveToSourceIconTemplate;moveAllToSourceIconTemplate;targetFilterIconTemplate;sourceFilterIconTemplate;templates;_itemTemplate;_sourceHeaderTemplate;_targetHeaderTemplate;_sourceFilterTemplate;_targetFilterTemplate;_emptyMessageSourceTemplate;_emptyFilterMessageSourceTemplate;_emptyMessageTargetTemplate;_emptyFilterMessageTargetTemplate;_moveUpIconTemplate;_moveTopIconTemplate;_moveDownIconTemplate;_moveBottomIconTemplate;_moveToTargetIconTemplate;_moveAllToTargetIconTemplate;_moveToSourceIconTemplate;_moveAllToSourceIconTemplate;_targetFilterIconTemplate;_sourceFilterIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"option":this._itemTemplate=e.template;break;case"sourceHeader":this._sourceHeaderTemplate=e.template;break;case"targetHeader":this._targetHeaderTemplate=e.template;break;case"sourceFilter":this._sourceFilterTemplate=e.template;break;case"targetFilter":this._targetFilterTemplate=e.template;break;case"emptymessagesource":this._emptyMessageSourceTemplate=e.template;break;case"emptyfiltermessagesource":this._emptyFilterMessageSourceTemplate=e.template;break;case"emptymessagetarget":this._emptyMessageTargetTemplate=e.template;break;case"emptyfiltermessagetarget":this._emptyFilterMessageTargetTemplate=e.template;break;case"moveupicon":this._moveUpIconTemplate=e.template;break;case"movetopicon":this._moveTopIconTemplate=e.template;break;case"movedownicon":this._moveDownIconTemplate=e.template;break;case"movebottomicon":this._moveBottomIconTemplate=e.template;break;case"movetotargeticon":this._moveToTargetIconTemplate=e.template;break;case"movealltotargeticon":this._moveAllToTargetIconTemplate=e.template;break;case"movetosourceicon":this._moveToSourceIconTemplate=e.template;break;case"movealltosourceicon":this._moveAllToSourceIconTemplate=e.template;break;case"targetfiltericon":this._targetFilterIconTemplate=e.template;break;case"sourcefiltericon":this._sourceFilterIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.movedUp||this.movedDown){let e=pe(this.reorderedListElement?.el.nativeElement,"li.p-listbox-option-selected"),o;e.length>0&&(this.movedUp?o=e[0]:o=e[e.length-1],Me(this.reorderedListElement?.el.nativeElement,o)),this.movedUp=!1,this.movedDown=!1,this.reorderedListElement=null}}onItemClick(e,o,t,r,s,u){if(this.disabled)return;let S=this.findIndexInList(o,t);u&&(this.focusedOptionIndex=u);let b=S!=-1;if(this.itemTouched?!1:this.metaKeySelection){let q=e.metaKey||e.ctrlKey||e.shiftKey;b&&q?t=t.filter((_e,vt)=>vt!==S):(q||(t=[]),t.push(o))}else b?t=t.filter((q,_e)=>_e!==S):t.push(o);this.setSelectionList(r,t),s.emit({originalEvent:e,items:t}),this.itemTouched=!1}onOptionMouseDown(e,o){this.focused[o===this.SOURCE_LIST?"sourceList":"targetList"]=!0,this.focusedOptionIndex=e}onSourceItemDblClick(){this.disabled||(this.moveRight(),this.viewChildMarkForCheck())}onTargetItemDblClick(){this.disabled||(this.moveLeft(),this.viewChildMarkForCheck())}onFilter(e,o){let t=e.target.value;o===this.SOURCE_LIST?this.filterSource(t):o===this.TARGET_LIST&&this.filterTarget(t)}filterSource(e=""){this.filterValueSource=e.trim().toLocaleLowerCase(this.filterLocale),this.filter(this.source,this.SOURCE_LIST)}filterTarget(e=""){this.filterValueTarget=e.trim().toLocaleLowerCase(this.filterLocale),this.filter(this.target,this.TARGET_LIST)}filter(e,o){let t=this.filterBy.split(",");o===this.SOURCE_LIST?(this.visibleOptionsSource=this.filterService.filter(e,t,this.filterValueSource,this.filterMatchMode,this.filterLocale),this.onSourceFilter.emit({query:this.filterValueSource,value:this.visibleOptionsSource})):o===this.TARGET_LIST&&(this.visibleOptionsTarget=this.filterService.filter(e,t,this.filterValueTarget,this.filterMatchMode,this.filterLocale),this.onTargetFilter.emit({query:this.filterValueTarget,value:this.visibleOptionsTarget}))}isItemVisible(e,o){return o==this.SOURCE_LIST?this.isVisibleInList(this.visibleOptionsSource,e,this.filterValueSource):this.isVisibleInList(this.visibleOptionsTarget,e,this.filterValueTarget)}isEmpty(e){return e==this.SOURCE_LIST?this.filterValueSource?!this.visibleOptionsSource||this.visibleOptionsSource.length===0:!this.source||this.source.length===0:this.filterValueTarget?!this.visibleOptionsTarget||this.visibleOptionsTarget.length===0:!this.target||this.target.length===0}isVisibleInList(e,o,t){if(t&&t.trim().length){for(let r=0;r<e.length;r++)if(o==e[r])return!0}else return!0}onItemTouchEnd(){this.disabled||(this.itemTouched=!0)}sortByIndexInList(e,o){return e.sort((t,r)=>v(t,o)-v(r,o))}viewChildMarkForCheck(){this.listViewSourceChild.cd.markForCheck(),this.listViewTargetChild.cd.markForCheck()}moveUp(e,o,t,r,s){if(t&&t.length){t=this.sortByIndexInList(t,o);for(let u=0;u<t.length;u++){let S=t[u],b=v(S,o);if(b!=0){let U=o[b],q=o[b-1];o[b-1]=U,o[b]=q}else break}this.dragdrop&&(this.filterValueSource&&s===this.SOURCE_LIST||this.filterValueTarget&&s===this.TARGET_LIST)&&this.filter(o,s),this.movedUp=!0,this.reorderedListElement=e,r.emit({items:t}),this.viewChildMarkForCheck()}}moveTop(e,o,t,r,s){if(t&&t.length){t=this.sortByIndexInList(t,o);for(let u=0;u<t.length;u++){let S=t[u],b=v(S,o);if(b!=0){let U=o.splice(b,1)[0];o.unshift(U)}else break}this.dragdrop&&(this.filterValueSource&&s===this.SOURCE_LIST||this.filterValueTarget&&s===this.TARGET_LIST)&&this.filter(o,s),e.scrollTop=0,r.emit({items:t}),this.viewChildMarkForCheck()}}moveDown(e,o,t,r,s){if(t&&t.length){t=this.sortByIndexInList(t,o);for(let u=t.length-1;u>=0;u--){let S=t[u],b=v(S,o);if(b!=o.length-1){let U=o[b],q=o[b+1];o[b+1]=U,o[b]=q}else break}this.dragdrop&&(this.filterValueSource&&s===this.SOURCE_LIST||this.filterValueTarget&&s===this.TARGET_LIST)&&this.filter(o,s),this.movedDown=!0,this.reorderedListElement=e,r.emit({items:t}),this.viewChildMarkForCheck()}}moveBottom(e,o,t,r,s){if(t&&t.length){t=this.sortByIndexInList(t,o);for(let u=t.length-1;u>=0;u--){let S=t[u],b=v(S,o);if(b!=o.length-1){let U=o.splice(b,1)[0];o.push(U)}else break}this.dragdrop&&(this.filterValueSource&&s===this.SOURCE_LIST||this.filterValueTarget&&s===this.TARGET_LIST)&&this.filter(o,s),e.scrollTop=e.scrollHeight,r.emit({items:t}),this.viewChildMarkForCheck()}}moveRight(){if(this.selectedItemsSource&&this.selectedItemsSource.length){let e=[...this.selectedItemsSource];for(let o=0;o<e.length;o++){let t=e[o];v(t,this.target)==-1&&(this.target?.push(this.source?.splice(v(t,this.source),1)[0]),this.visibleOptionsSource?.includes(t)&&this.visibleOptionsSource.splice(v(t,this.visibleOptionsSource),1))}this.onMoveToTarget.emit({items:e}),this.keepSelection&&(this.selectedItemsTarget=[...this.selectedItemsTarget,...e]),e=[],this.selectedItemsSource=[],this.filterValueTarget&&this.filter(this.target,this.TARGET_LIST),this.viewChildMarkForCheck()}}moveAllRight(){if(this.source){let e=[];for(let o=0;o<this.source.length;o++)if(this.isItemVisible(this.source[o],this.SOURCE_LIST)){let t=this.source.splice(o,1)[0];this.target?.push(t),e.push(t),o--}this.onMoveAllToTarget.emit({items:e}),this.keepSelection&&(this.selectedItemsTarget=[...this.selectedItemsTarget,...this.selectedItemsSource]),this.selectedItemsSource=[],this.filterValueTarget&&this.filter(this.target,this.TARGET_LIST),this.visibleOptionsSource=[],this.viewChildMarkForCheck()}}moveLeft(){if(this.selectedItemsTarget&&this.selectedItemsTarget.length){let e=[...this.selectedItemsTarget];for(let o=0;o<e.length;o++){let t=e[o];v(t,this.source)==-1&&(this.source?.push(this.target?.splice(v(t,this.target),1)[0]),this.visibleOptionsTarget?.includes(t)&&this.visibleOptionsTarget.splice(v(t,this.visibleOptionsTarget),1)[0])}this.onMoveToSource.emit({items:e}),this.keepSelection&&(this.selectedItemsSource=[...this.selectedItemsSource,e]),e=[],this.selectedItemsTarget=[],this.filterValueSource&&this.filter(this.source,this.SOURCE_LIST),this.viewChildMarkForCheck()}}moveAllLeft(){if(this.target){let e=[];for(let o=0;o<this.target.length;o++)if(this.isItemVisible(this.target[o],this.TARGET_LIST)){let t=this.target.splice(o,1)[0];this.source?.push(t),e.push(t),o--}this.onMoveAllToSource.emit({items:e}),this.keepSelection&&(this.selectedItemsSource=[...this.selectedItemsSource,...this.selectedItemsTarget]),this.selectedItemsTarget=[],this.filterValueSource&&this.filter(this.source,this.SOURCE_LIST),this.visibleOptionsTarget=[],this.viewChildMarkForCheck()}}isSelected(e,o){return this.findIndexInList(e,o)!=-1}findIndexInList(e,o){return v(e,o)}onDrop(e,o){let t=e.previousContainer!==e.container,r=this.getDropIndexes(e.previousIndex,e.currentIndex,o,t,e.item.data);if(o===this.SOURCE_LIST){if(t){ge(e.previousContainer.data,e.container.data,r.previousIndex,r.currentIndex);let s=v(e.item.data,this.selectedItemsTarget);s!=-1&&(this.selectedItemsTarget.splice(s,1),this.keepSelection&&this.selectedItemsTarget.push(e.item.data)),this.visibleOptionsTarget&&this.visibleOptionsTarget.splice(e.previousIndex,1),this.onMoveToSource.emit({items:[e.item.data]})}else ue(e.container.data,r.previousIndex,r.currentIndex),this.onSourceReorder.emit({items:[e.item.data]});this.filterValueSource&&this.filter(this.source,this.SOURCE_LIST)}else{if(t){ge(e.previousContainer.data,e.container.data,r.previousIndex,r.currentIndex);let s=v(e.item.data,this.selectedItemsSource);s!=-1&&(this.selectedItemsSource.splice(s,1),this.keepSelection&&this.selectedItemsTarget.push(e.item.data)),this.visibleOptionsSource&&this.visibleOptionsSource.splice(e.previousIndex,1),this.onMoveToTarget.emit({items:[e.item.data]})}else ue(e.container.data,r.previousIndex,r.currentIndex),this.onTargetReorder.emit({items:[e.item.data]});this.filterValueTarget&&this.filter(this.target,this.TARGET_LIST)}}onListFocus(e,o){this.onFocus.emit(e)}onListBlur(e,o){this.onBlur.emit(e)}getListElement(e){return e===this.SOURCE_LIST?this.listViewSourceChild?.el.nativeElement:this.listViewTargetChild?.el.nativeElement}getListItems(e){let o=this.getListElement(e);return pe(o,"li.p-picklist-item")}getLatestSelectedVisibleOptionIndex(e,o){let t=[...o].reverse().find(r=>e.includes(r));return t!==void 0?e.indexOf(t):-1}getVisibleList(e){return e===this.SOURCE_LIST?this.visibleOptionsSource&&this.visibleOptionsSource.length>0?this.visibleOptionsSource:this.source&&this.source.length>0?this.source:null:this.visibleOptionsTarget&&this.visibleOptionsTarget.length>0?this.visibleOptionsTarget:this.target&&this.target.length>0?this.target:null}setSelectionList(e,o){e===this.SOURCE_LIST?this.selectedItemsSource=o:this.selectedItemsTarget=o}findNextOptionIndex(e,o){let r=[...this.getListItems(o)].findIndex(s=>s.id===e);return r>-1?r+1:0}findPrevOptionIndex(e,o){let r=[...this.getListItems(o)].findIndex(s=>s.id===e);return r>-1?r-1:0}onItemKeyDown(e,o,t,r){switch(e.code){case"ArrowDown":this.onArrowDownKey(e,o,t,r);break;case"ArrowUp":this.onArrowUpKey(e,o,t,r);break;case"Home":this.onHomeKey(e,o,t,r);break;case"End":this.onEndKey(e,o,t,r);break;case"Enter":this.onEnterKey(e,o,t,r);break;case"Space":this.onSpaceKey(e,o,t,r);break;case"KeyA":e.ctrlKey&&(this.setSelectionList(r,this.getVisibleList(r)),t.emit({items:o}),e.preventDefault());default:break}}getFocusedOption(e,o){return e===-1?null:o===this.SOURCE_LIST?this.visibleOptionsSource&&this.visibleOptionsSource.length?this.visibleOptionsSource[e]:this.source&&this.source.length?this.source[e]:null:this.visibleOptionsTarget&&this.visibleOptionsTarget.length?this.visibleOptionsTarget[e]:this.target&&this.target.length?this.target[e]:null}changeFocusedOptionIndex(e,o){let t=this.getListItems(o);if(t?.length>0){let r=e>=t.length?t.length-1:e<0?0:e;this.focusedOptionIndex=t[r].getAttribute("id"),this.focusedOption=this.getFocusedOption(r,o),this.scrollInView(t[r].getAttribute("id"),o)}}scrollInView(e,o){let t=Ae(this.getListElement(o),`li[id="${e}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"start"})}onArrowDownKey(e,o,t,r){let s=this.findNextOptionIndex(this.focusedOptionIndex,r);this.changeFocusedOptionIndex(s,r),e.shiftKey&&this.onEnterKey(e,o,t,r),e.preventDefault()}onArrowUpKey(e,o,t,r){let s=this.findPrevOptionIndex(this.focusedOptionIndex,r);this.changeFocusedOptionIndex(s,r),e.shiftKey&&this.onEnterKey(e,o,t,r),e.preventDefault()}onEnterKey(e,o,t,r){this.onItemClick(e,this.focusedOption,o,r,t),e.preventDefault()}onSpaceKey(e,o,t,r){if(e.target.tagName!=="INPUT"){if(e.preventDefault(),e.shiftKey&&o&&o.length>0){let s=this.getVisibleList(r),u=this.getLatestSelectedVisibleOptionIndex(s,o);if(u!==-1){let S=v(this.focusedOption,s);o=[...s.slice(Math.min(u,S),Math.max(u,S)+1)],this.setSelectionList(r,o),t.emit({items:o});return}}this.onEnterKey(e,o,t,r)}}onHomeKey(e,o,t,r){if(e.ctrlKey&&e.shiftKey){let s=this.getVisibleList(r),u=v(this.focusedOption,s);o=[...s.slice(0,u+1)],this.setSelectionList(r,o),t.emit({items:o})}else this.changeFocusedOptionIndex(0,r);e.preventDefault()}onEndKey(e,o,t,r){let s=this.getVisibleList(r),u=s&&s.length>0?s.length-1:null;if(u!==null){if(e.ctrlKey&&e.shiftKey){let S=v(this.focusedOption,s);o=[...s.slice(S,u)],this.setSelectionList(r,o),t.emit({items:o})}else this.changeFocusedOptionIndex(u,r);e.preventDefault()}}getDropIndexes(e,o,t,r,s){let u,S;return t===this.SOURCE_LIST?(u=r?this.filterValueTarget?v(s,this.target):e:this.filterValueSource?v(s,this.source):e,S=this.filterValueSource?this.findFilteredCurrentIndex(this.visibleOptionsSource,o,this.source):o):(u=r?this.filterValueSource?v(s,this.source):e:this.filterValueTarget?v(s,this.target):e,S=this.filterValueTarget?this.findFilteredCurrentIndex(this.visibleOptionsTarget,o,this.target):o),{previousIndex:u,currentIndex:S}}findFilteredCurrentIndex(e,o,t){return e.length===o?v(e[o-1],t)+1:v(e[o],t)}resetSourceFilter(){this.visibleOptionsSource=null,this.filterValueSource=null,this.sourceFilterViewChild&&(this.sourceFilterViewChild.nativeElement.value="")}resetTargetFilter(){this.visibleOptionsTarget=null,this.filterValueTarget=null,this.targetFilterViewChild&&(this.targetFilterViewChild.nativeElement.value="")}resetFilter(){this.resetSourceFilter(),this.resetTargetFilter()}initMedia(){ee(this.platformId)&&(this.media=this.document.defaultView.matchMedia(`(max-width: ${this.breakpoint})`),this.viewChanged=this.media.matches,this.bindMediaChangeListener())}destroyMedia(){this.unbindMediaChangeListener()}bindMediaChangeListener(){this.media&&!this.mediaChangeListener&&(this.mediaChangeListener=this.renderer.listen(this.media,"change",e=>{this.viewChanged=e.matches,this.cd.markForCheck()}))}unbindMediaChangeListener(){this.mediaChangeListener&&(this.mediaChangeListener(),this.mediaChangeListener=null)}createStyle(){if(ee(this.platformId)&&!this.styleElement){this.renderer.setAttribute(this.el.nativeElement.children[0],this.id,""),this.styleElement=this.renderer.createElement("style"),this.renderer.setAttribute(this.styleElement,"type","text/css"),this.renderer.appendChild(this.document.head,this.styleElement);let e=`
                @media screen and (max-width: ${this.breakpoint}) {
                    .p-picklist[${this.id}] {
                        flex-direction: column;
                    }

                    .p-picklist[${this.id}] .p-picklist-controls {
                        flex-direction: row;
                    }
                }`;this.renderer.setProperty(this.styleElement,"innerHTML",e),Oe(this.styleElement,"nonce",this.config?.csp()?.nonce)}}sourceMoveDisabled(){if(this.disabled||!this.selectedItemsSource.length)return!0}targetMoveDisabled(){if(this.disabled||!this.selectedItemsTarget.length)return!0}moveRightDisabled(){return this.disabled||j(this.selectedItemsSource)}moveLeftDisabled(){return this.disabled||j(this.selectedItemsTarget)}moveAllRightDisabled(){return this.disabled||j(this.source)}moveAllLeftDisabled(){return this.disabled||j(this.target)}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.destroyStyle(),this.destroyMedia(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=W(i)))(t||i)}})();static \u0275cmp=P({type:i,selectors:[["p-pickList"],["p-picklist"],["p-pick-list"]],contentQueries:function(o,t,r){if(o&1&&Se(r,yt,4)(r,xt,4)(r,kt,4)(r,nt,4)(r,rt,4)(r,It,4)(r,Lt,4)(r,Pt,4)(r,Ct,4)(r,Et,4)(r,wt,4)(r,Ft,4)(r,Dt,4)(r,At,4)(r,Mt,4)(r,Ot,4)(r,Bt,4)(r,Rt,4)(r,Vt,4)(r,Ve,4),o&2){let s;_(s=T())&&(t.itemTemplate=s.first),_(s=T())&&(t.sourceHeaderTemplate=s.first),_(s=T())&&(t.targetHeaderTemplate=s.first),_(s=T())&&(t.sourceFilterTemplate=s.first),_(s=T())&&(t.targetFilterTemplate=s.first),_(s=T())&&(t.emptyMessageSourceTemplate=s.first),_(s=T())&&(t.emptyFilterMessageSourceTemplate=s.first),_(s=T())&&(t.emptyMessageTargetTemplate=s.first),_(s=T())&&(t.emptyFilterMessageTargetTemplate=s.first),_(s=T())&&(t.moveUpIconTemplate=s.first),_(s=T())&&(t.moveTopIconTemplate=s.first),_(s=T())&&(t.moveDownIconTemplate=s.first),_(s=T())&&(t.moveBottomIconTemplate=s.first),_(s=T())&&(t.moveToTargetIconTemplate=s.first),_(s=T())&&(t.moveAllToTargetIconTemplate=s.first),_(s=T())&&(t.moveToSourceIconTemplate=s.first),_(s=T())&&(t.moveAllToSourceIconTemplate=s.first),_(s=T())&&(t.targetFilterIconTemplate=s.first),_(s=T())&&(t.sourceFilterIconTemplate=s.first),_(s=T())&&(t.templates=s)}},viewQuery:function(o,t){if(o&1&&be(Ut,5)(Ht,5)(nt,5)(rt,5),o&2){let r;_(r=T())&&(t.listViewSourceChild=r.first),_(r=T())&&(t.listViewTargetChild=r.first),_(r=T())&&(t.sourceFilterViewChild=r.first),_(r=T())&&(t.targetFilterViewChild=r.first)}},inputs:{source:"source",target:"target",sourceHeader:"sourceHeader",tabindex:[2,"tabindex","tabindex",Ie],rightButtonAriaLabel:"rightButtonAriaLabel",leftButtonAriaLabel:"leftButtonAriaLabel",allRightButtonAriaLabel:"allRightButtonAriaLabel",allLeftButtonAriaLabel:"allLeftButtonAriaLabel",upButtonAriaLabel:"upButtonAriaLabel",downButtonAriaLabel:"downButtonAriaLabel",topButtonAriaLabel:"topButtonAriaLabel",bottomButtonAriaLabel:"bottomButtonAriaLabel",targetHeader:"targetHeader",responsive:[2,"responsive","responsive",w],filterBy:"filterBy",filterLocale:"filterLocale",trackBy:"trackBy",sourceTrackBy:"sourceTrackBy",targetTrackBy:"targetTrackBy",showSourceFilter:[2,"showSourceFilter","showSourceFilter",w],showTargetFilter:[2,"showTargetFilter","showTargetFilter",w],metaKeySelection:[2,"metaKeySelection","metaKeySelection",w],dragdrop:[2,"dragdrop","dragdrop",w],style:"style",styleClass:"styleClass",sourceStyle:"sourceStyle",targetStyle:"targetStyle",showSourceControls:[2,"showSourceControls","showSourceControls",w],showTargetControls:[2,"showTargetControls","showTargetControls",w],sourceFilterPlaceholder:"sourceFilterPlaceholder",targetFilterPlaceholder:"targetFilterPlaceholder",disabled:[2,"disabled","disabled",w],sourceOptionDisabled:"sourceOptionDisabled",targetOptionDisabled:"targetOptionDisabled",ariaSourceFilterLabel:"ariaSourceFilterLabel",ariaTargetFilterLabel:"ariaTargetFilterLabel",filterMatchMode:"filterMatchMode",stripedRows:[2,"stripedRows","stripedRows",w],keepSelection:[2,"keepSelection","keepSelection",w],scrollHeight:"scrollHeight",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",w],buttonProps:"buttonProps",moveUpButtonProps:"moveUpButtonProps",moveTopButtonProps:"moveTopButtonProps",moveDownButtonProps:"moveDownButtonProps",moveBottomButtonProps:"moveBottomButtonProps",moveToTargetProps:"moveToTargetProps",moveAllToTargetProps:"moveAllToTargetProps",moveToSourceProps:"moveToSourceProps",moveAllToSourceProps:"moveAllToSourceProps",breakpoint:"breakpoint"},outputs:{onMoveToSource:"onMoveToSource",onMoveAllToSource:"onMoveAllToSource",onMoveAllToTarget:"onMoveAllToTarget",onMoveToTarget:"onMoveToTarget",onSourceReorder:"onSourceReorder",onTargetReorder:"onTargetReorder",onSourceSelect:"onSourceSelect",onTargetSelect:"onTargetSelect",onSourceFilter:"onSourceFilter",onTargetFilter:"onTargetFilter",onFocus:"onFocus",onBlur:"onBlur"},features:[ke([fe]),ve],decls:34,vars:99,consts:[["sourcelist",""],["targetlist",""],["header",""],["filter",""],["item",""],["empty",""],["emptyfilter",""],["cdkDropListGroup","",3,"ngStyle","ngClass"],["class","p-picklist-controls p-picklist-source-controls",4,"ngIf"],[1,"p-picklist-list-container","p-picklist-source-list-container"],["optionLabel","name",3,"ngModelChange","onFocus","onBlur","keydown","onDblClick","onDrop","onFilter","multiple","options","ngModel","id","ngStyle","striped","tabindex","disabled","optionDisabled","metaKeySelection","scrollHeight","autoOptionFocus","filter","filterBy","filterLocale","filterMatchMode","filterPlaceHolder","dragdrop"],[4,"ngIf"],[1,"p-picklist-controls","p-picklist-transfer-controls"],["type","button","pButton","","pRipple","","severity","secondary",1,"p-button-icon-only",3,"click","disabled","buttonProps"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-picklist-list-container","p-picklist-target-list-container"],["class","p-picklist-controls p-picklist-target-controls",4,"ngIf"],[1,"p-picklist-controls","p-picklist-source-controls"],[4,"ngTemplateOutlet"],["class","p-picklist-title",4,"ngIf"],[1,"p-picklist-title"],[1,"p-picklist-controls","p-picklist-target-controls"]],template:function(o,t){if(o&1){let r=J();a(0,"div",7),d(1,ei,13,26,"div",8),a(2,"div",9)(3,"p-listbox",10,0),ce("ngModelChange",function(u){return F(r),se(t.selectedItemsSource,u)||(t.selectedItemsSource=u),D(u)}),L("onFocus",function(u){return t.onListFocus(u,t.SOURCE_LIST)})("onBlur",function(u){return t.onListBlur(u,t.SOURCE_LIST)})("keydown",function(u){return t.onItemKeyDown(u,t.selectedItemsSource,t.onSourceSelect,t.SOURCE_LIST)})("onDblClick",function(){return t.onSourceItemDblClick()})("onDrop",function(u){return t.onDrop(u,t.SOURCE_LIST)})("onFilter",function(u){return t.onSourceFilter.emit(u)}),d(5,ri,3,0,"ng-container",11)(6,ci,3,0,"ng-container",11)(7,pi,2,1,"ng-container",11)(8,gi,3,0,"ng-container",11)(9,_i,3,0,"ng-container",11)(10,Si,3,0,"ng-container",11),l()(),a(11,"div",12)(12,"button",13),L("click",function(){return t.moveRight()}),d(13,xi,3,2,"ng-container",11)(14,Ii,1,0,null,14),l(),a(15,"button",13),L("click",function(){return t.moveAllRight()}),d(16,Ci,3,2,"ng-container",11)(17,wi,1,0,null,14),l(),a(18,"button",13),L("click",function(){return t.moveLeft()}),d(19,Ai,3,2,"ng-container",11)(20,Oi,1,0,null,14),l(),a(21,"button",13),L("click",function(){return t.moveAllLeft()}),d(22,Vi,3,2,"ng-container",11)(23,Hi,1,0,null,14),l()(),a(24,"div",15)(25,"p-listbox",10,1),ce("ngModelChange",function(u){return F(r),se(t.selectedItemsTarget,u)||(t.selectedItemsTarget=u),D(u)}),L("onFocus",function(u){return t.onListFocus(u,t.TARGET_LIST)})("onBlur",function(u){return t.onListBlur(u,t.TARGET_LIST)})("keydown",function(u){return t.onItemKeyDown(u,t.selectedItemsTarget,t.onTargetSelect,t.TARGET_LIST)})("onDblClick",function(){return t.onTargetItemDblClick()})("onDrop",function(u){return t.onDrop(u,t.TARGET_LIST)})("onFilter",function(u){return t.onTargetFilter.emit(u)}),d(27,Ni,3,0,"ng-container",11)(28,zi,3,0,"ng-container",11)(29,Xi,2,1,"ng-container",11)(30,eo,3,0,"ng-container",11)(31,oo,3,0,"ng-container",11)(32,ao,3,0,"ng-container",11),l()(),d(33,So,13,26,"div",16),l()}o&2&&(ye(t.styleClass),m("ngStyle",t.style)("ngClass",E(90,Kt)),g("data-pc-name","picklist")("data-pc-section","root"),p(),m("ngIf",t.showSourceControls),p(),g("data-pc-section","sourceWrapper")("data-pc-group-section","listWrapper"),p(),m("multiple",!0)("options",t.source),le("ngModel",t.selectedItemsSource),m("id",t.idSource+"_list")("ngStyle",t.sourceStyle)("striped",t.stripedRows)("tabindex",t.tabindex)("disabled",t.disabled)("optionDisabled",t.sourceOptionDisabled)("metaKeySelection",t.metaKeySelection)("scrollHeight",t.scrollHeight)("autoOptionFocus",t.autoOptionFocus)("filter",t.filterBy)("filterBy",t.filterBy)("filterLocale",t.filterLocale)("filterMatchMode",t.filterMatchMode)("filterPlaceHolder",t.sourceFilterPlaceholder)("dragdrop",t.dragdrop),p(2),m("ngIf",t.sourceHeaderTemplate||t._sourceHeaderTemplate||t.sourceHeader),p(),m("ngIf",t.sourceFilterTemplate||t._sourceFilterTemplate),p(),m("ngIf",t.sourceFilterIconTemplate||t._sourceFilterIconTemplate),p(),m("ngIf",t.itemTemplate||t._itemTemplate),p(),m("ngIf",t.emptyMessageSourceTemplate||t._emptyMessageSourceTemplate),p(),m("ngIf",t.emptyFilterMessageSourceTemplate||t._emptyFilterMessageSourceTemplate),p(),g("data-pc-section","buttons")("data-pc-group-section","controls"),p(),m("disabled",t.moveRightDisabled())("buttonProps",t.getButtonProps("movetotarget")),g("aria-label",t.moveToTargetAriaLabel)("data-pc-section","moveToTargetButton"),p(),m("ngIf",!t.moveToTargetIconTemplate&&!t._moveToTargetIconTemplate),p(),m("ngTemplateOutlet",t.moveToTargetIconTemplate||t._moveToTargetIconTemplate)("ngTemplateOutletContext",Q(91,oe,t.viewChanged)),p(),m("disabled",t.moveAllRightDisabled())("buttonProps",t.getButtonProps("movealltotarget")),g("aria-label",t.moveAllToTargetAriaLabel)("data-pc-section","moveAllToTargetButton"),p(),m("ngIf",!t.moveAllToTargetIconTemplate&&!t._moveAllToTargetIconTemplate),p(),m("ngTemplateOutlet",t.moveAllToTargetIconTemplate||t._moveAllToTargetIconTemplate)("ngTemplateOutletContext",Q(93,oe,t.viewChanged)),p(),m("disabled",t.moveLeftDisabled())("buttonProps",t.getButtonProps("movetosource")),g("aria-label",t.moveToSourceAriaLabel)("data-pc-section","moveToSourceButton"),p(),m("ngIf",!t.moveToSourceIconTemplate&&!t._moveToSourceIconTemplate),p(),m("ngTemplateOutlet",t.moveToSourceIconTemplate||t._moveToSourceIconTemplate)("ngTemplateOutletContext",Q(95,oe,t.viewChanged)),p(),m("disabled",t.moveAllLeftDisabled())("buttonProps",t.getButtonProps("movealltosource")),g("aria-label",t.moveAllToSourceAriaLabel)("data-pc-section","moveAllToSourceButton"),p(),m("ngIf",!t.moveAllToSourceIconTemplate&&!t._moveAllToSourceIconTemplate),p(),m("ngTemplateOutlet",t.moveAllToSourceIconTemplate||t._moveAllToSourceIconTemplate)("ngTemplateOutletContext",Q(97,oe,t.viewChanged)),p(),g("data-pc-section","targetWrapper")("data-pc-group-section","listwrapper"),p(),m("multiple",!0)("options",t.target),le("ngModel",t.selectedItemsTarget),m("id",t.idTarget+"_list")("ngStyle",t.targetStyle)("striped",t.stripedRows)("tabindex",t.tabindex)("disabled",t.disabled)("optionDisabled",t.targetOptionDisabled)("metaKeySelection",t.metaKeySelection)("scrollHeight",t.scrollHeight)("autoOptionFocus",t.autoOptionFocus)("filter",t.filterBy)("filterBy",t.filterBy)("filterLocale",t.filterLocale)("filterMatchMode",t.filterMatchMode)("filterPlaceHolder",t.targetFilterPlaceholder)("dragdrop",t.dragdrop),p(2),m("ngIf",t.targetHeaderTemplate||t._targetHeaderTemplate||t.targetHeader),p(),m("ngIf",t.targetFilterTemplate||t._targetFilterTemplate),p(),m("ngIf",t.targetFilterIconTemplate||t._targetFilterIconTemplate),p(),m("ngIf",t.itemTemplate||t._itemTemplate),p(),m("ngIf",t.emptyMessageTargetTemplate||t._emptyMessageTargetTemplate),p(),m("ngIf",t.emptyFilterMessageTargetTemplate||t._emptyFilterMessageTargetTemplate),p(),m("ngIf",t.showTargetControls))},dependencies:[Z,N,Le,Ce,Pe,Xe,Je,tt,et,qe,Qe,Ge,Ne,$e,je,We,ze,it,De,we,Fe,Ue],encapsulation:2,changeDetection:0})}return i})();var ct=()=>({height:"30rem"});function bo(i,c){if(i&1&&n(0),i&2){let e=c.$implicit;xe(" ",e.name," ")}}var pt=(()=>{class i{carService;cdr;sourceProducts;targetProducts;constructor(e,o){this.carService=e,this.cdr=o}ngOnInit(){this.carService.getProductsSmall().then(e=>{this.sourceProducts=e,this.cdr.markForCheck()}),this.targetProducts=[]}code={basic:`<p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" [sourceStyle]="{ height: '30rem' }" [targetStyle]="{ height: '30rem' }" breakpoint="1400px">
    <ng-template let-item #item>
        {{ item.name }}
    </ng-template>
</p-picklist>`,html:`<div class="card">
    <p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" [sourceStyle]="{ height: '30rem' }" [targetStyle]="{ height: '30rem' }" breakpoint="1400px">
        <ng-template let-item #item>
            {{ item.name }}
        </ng-template>
    </p-picklist>
</div>`,typescript:`import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { PickListModule } from 'primeng/picklist';

@Component({
    selector: 'picklist-basic-demo',
    templateUrl: './picklist-basic-demo.html',
    standalone: true,
    imports: [PickListModule],
    providers: [ProductService]
})
export class PicklistBasicDemo {
    sourceProducts!: Product[];

    targetProducts!: Product[];

    constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.carService.getProductsSmall().then(products => {
            this.sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.targetProducts = [];
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
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(o){return new(o||i)(O($),O(G))};static \u0275cmp=P({type:i,selectors:[["basic-doc"]],standalone:!1,decls:20,vars:10,consts:[["item",""],[1,"card"],["breakpoint","1400px",3,"source","target","dragdrop","responsive","sourceStyle","targetStyle"],["selector","picklist-basic-demo",3,"code","extFiles"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2," PickList is used as a controlled input with "),a(3,"i"),n(4,"source"),l(),n(5," and "),a(6,"i"),n(7,"target"),l(),n(8," properties. Content of a list item needs to be defined with the "),a(9,"i"),n(10,"pTemplate"),l(),n(11," property that receives an object in the list as parameter. Drag & drop functionality depends on "),a(12,"i"),n(13,"@angular/cdk"),l(),n(14," package. "),l()(),a(15,"div",1)(16,"p-picklist",2),d(17,bo,1,1,"ng-template",null,0,I),l()(),f(19,"app-code",3)),o&2&&(p(16),m("source",t.sourceProducts)("target",t.targetProducts)("dragdrop",!0)("responsive",!0)("sourceStyle",E(8,ct))("targetStyle",E(9,ct)),p(3),m("code",t.code)("extFiles",t.extFiles))},dependencies:[M,V,K],encapsulation:2})}return i})();var dt=()=>({height:"30rem"}),yo=(i,c,e)=>({"text-surface-500":i,"dark:text-surface-400":c,"text-inherit":e});function xo(i,c){if(i&1&&(a(0,"div",4),f(1,"img",5),a(2,"div",6)(3,"span",7),n(4),l(),a(5,"span",8),n(6),l()(),a(7,"span",9),n(8),l()()),i&2){let e=c.$implicit,o=c.selected;p(),m("src",X("https://primefaces.org/cdn/primeng/images/demo/product/",e.image),z)("alt",e.name),p(3),A(e.name),p(),m("ngClass",Y(7,yo,!o,!o,o)),p(),A(e.category),p(2),A("$"+e.price)}}var ut=(()=>{class i{carService;cdr;sourceProducts;targetProducts;constructor(e,o){this.carService=e,this.cdr=o}ngOnInit(){this.carService.getProductsSmall().then(e=>{this.sourceProducts=e,this.cdr.markForCheck()}),this.targetProducts=[]}code={basic:`<p-picklist
    [source]="sourceProducts"
    [target]="targetProducts"
    [dragdrop]="true"
    [responsive]="true"
    [sourceStyle]="{ height: '30rem' }"
    [targetStyle]="{ height: '30rem' }"
    filterBy="name"
    sourceFilterPlaceholder="Search by name"
    targetFilterPlaceholder="Search by name"
    breakpoint="1400px"
    scrollHeight="30rem"
>
    <ng-template let-option let-selected="selected" #option>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-picklist>`,html:`<div class="card">
    <p-picklist
        [source]="sourceProducts"
        [target]="targetProducts"
        [dragdrop]="true"
        [responsive]="true"
        [sourceStyle]="{ height: '30rem' }"
        [targetStyle]="{ height: '30rem' }"
        filterBy="name"
        sourceFilterPlaceholder="Search by name"
        targetFilterPlaceholder="Search by name"
        breakpoint="1400px"
        scrollHeight="30rem"
    >
        <ng-template let-option let-selected="selected" #option>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img
                    class="w-12 shrink-0 rounded"
                    src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                    [alt]="option.name"
                />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ option.name }}</span>
                    <span
                        [ngClass]="{
                            'text-surface-500': !selected,
                            'dark:text-surface-400': !selected,
                            'text-inherit': selected,
                        }"
                        >{{ option.category }}</span
                    >
                </div>
                <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
            </div>
        </ng-template>
    </p-picklist>
</div>`,typescript:`import { Component, ChangeDetectorRef } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { PickListModule } from 'primeng/picklist';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'picklist-filter-demo',
    templateUrl: './picklist-filter-demo.html',
    standalone: true,
    imports: [PickListModule, CommonModule],
    providers: [ProductService]
})
export class PicklistFilterDemo {
    sourceProducts!: Product[];

    targetProducts!: Product[];

    constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.carService.getProductsSmall().then(products => {
            this.sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.targetProducts = [];
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
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];static \u0275fac=function(o){return new(o||i)(O($),O(G))};static \u0275cmp=P({type:i,selectors:[["filter-doc"]],standalone:!1,decls:11,vars:10,consts:[["option",""],[1,"card"],["filterBy","name","sourceFilterPlaceholder","Search by name","targetFilterPlaceholder","Search by name","breakpoint","1400px","scrollHeight","30rem",3,"source","target","dragdrop","responsive","sourceStyle","targetStyle"],["selector","picklist-filter-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[3,"ngClass"],[1,"font-bold","sm:ml-8"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"Filter value is checked against the property of an object configured with the "),a(3,"i"),n(4,"filterBy"),l(),n(5," property."),l()(),a(6,"div",1)(7,"p-picklist",2),d(8,xo,9,11,"ng-template",null,0,I),l()(),f(10,"app-code",3)),o&2&&(p(7),m("source",t.sourceProducts)("target",t.targetProducts)("dragdrop",!0)("responsive",!0)("sourceStyle",E(8,dt))("targetStyle",E(9,dt)),p(3),m("code",t.code)("extFiles",t.extFiles))},dependencies:[N,M,V,K],encapsulation:2})}return i})();var gt=(()=>{class i{code={typescript:"import { PickListModule } from 'primeng/picklist';"};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=P({type:i,selectors:[["pick-list-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&f(0,"app-code",0),o&2&&m("code",t.code)("hideToggleCode",!0)},dependencies:[M],encapsulation:2})}return i})();var ft=()=>({height:"30rem"}),ko=(i,c,e)=>({"text-surface-500":i,"dark:text-surface-400":c,"text-inherit":e});function Io(i,c){if(i&1&&(a(0,"div",4),f(1,"img",5),a(2,"div",6)(3,"span",7),n(4),l(),a(5,"span",8),n(6),l()(),a(7,"span",9),n(8),l()()),i&2){let e=c.$implicit,o=c.selected;p(),m("src",X("https://primefaces.org/cdn/primeng/images/demo/product/",e.image),z)("alt",e.name),p(3),A(e.name),p(),m("ngClass",Y(7,ko,!o,!o,o)),p(),A(e.category),p(2),A("$"+e.price)}}var ht=(()=>{class i{carService;cdr;sourceProducts;targetProducts;code={basic:`<p-picklist
    [source]="sourceProducts"
    [target]="targetProducts"
    [dragdrop]="true"
    [responsive]="true"
    [sourceStyle]="{ height: '30rem' }"
    [targetStyle]="{ height: '30rem' }"
    filterBy="name"
    sourceFilterPlaceholder="Search by name"
    targetFilterPlaceholder="Search by name"
    breakpoint="1400px"
    scrollHeight="480px"
>
    <ng-template let-option let-selected="selected" #option>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-picklist>`,html:`<div class="card">
    <p-picklist
        [source]="sourceProducts"
        [target]="targetProducts"
        [dragdrop]="true"
        [responsive]="true"
        [sourceStyle]="{ height: '30rem' }"
        [targetStyle]="{ height: '30rem' }"
        filterBy="name"
        sourceFilterPlaceholder="Search by name"
        targetFilterPlaceholder="Search by name"
        breakpoint="1400px"
        scrollHeight="480px"
    >
        <ng-template let-option let-selected="selected" #option>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img
                    class="w-12 shrink-0 rounded"
                    src="https://primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                    [alt]="option.name"
                />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ option.name }}</span>
                    <span
                        [ngClass]="{
                            'text-surface-500': !selected,
                            'dark:text-surface-400': !selected,
                            'text-inherit': selected,
                        }"
                        >{{ option.category }}</span
                    >
                </div>
                <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
            </div>
        </ng-template>
    </p-picklist>
</div>`,typescript:`import { Component, ChangeDetectorRef } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { PickListModule } from 'primeng/picklist';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'picklist-template-demo',
    templateUrl: './picklist-template-demo.html',
    standalone: true,
    imports: [PickListModule, CommonModule],
    providers: [ProductService]
})
export class PicklistTemplateDemo {
    sourceProducts!: Product[];

    targetProducts!: Product[];

    constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.carService.getProductsSmall().then(products => {
            this.sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.targetProducts = [];
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
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
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
}`}];constructor(e,o){this.carService=e,this.cdr=o}ngOnInit(){this.carService.getProductsSmall().then(e=>{this.sourceProducts=e,this.cdr.markForCheck()}),this.targetProducts=[]}static \u0275fac=function(o){return new(o||i)(O($),O(G))};static \u0275cmp=P({type:i,selectors:[["template-doc"]],standalone:!1,decls:17,vars:10,consts:[["option",""],[1,"card"],["sourceFilterPlaceholder","Search by name","targetFilterPlaceholder","Search by name","breakpoint","1400px","scrollHeight","20rem",3,"source","target","dragdrop","responsive","sourceStyle","targetStyle"],["selector","picklist-template-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[3,"ngClass"],[1,"font-bold","sm:ml-8"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"For custom content support define an "),a(3,"i"),n(4,"option"),l(),n(5," template that gets the item instance as a parameter. In addition "),a(6,"i"),n(7,"sourceheader"),l(),n(8," and "),a(9,"i"),n(10,"targetheader"),l(),n(11," templates are provided for further customization."),l()(),a(12,"div",1)(13,"p-picklist",2),d(14,Io,9,11,"ng-template",null,0,I),l()(),f(16,"app-code",3)),o&2&&(p(13),m("source",t.sourceProducts)("target",t.targetProducts)("dragdrop",!0)("responsive",!0)("sourceStyle",E(8,ft))("targetStyle",E(9,ft)),p(3),m("code",t.code)("extFiles",t.extFiles))},dependencies:[N,M,V,K],encapsulation:2})}return i})();var _t=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=ae({type:i});static \u0275inj=ne({imports:[Z,Ye,de,K,Ee,de]})}return i})();var Lo=()=>["PickList"],Tt=(()=>{class i{docs=[{id:"import",label:"Import",component:gt},{id:"basic",label:"Basic",component:pt},{id:"filter",label:"Filter",component:ut},{id:"template",label:"Template",component:ht},{id:"accessibility",label:"Accessibility",component:ot}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=P({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular PickList Component","header","PickList","description","PickList is used to reorder items between different lists.","themeDocs","picklist",3,"docs","apiDocs"]],template:function(o,t){o&1&&f(0,"app-doc",0),o&2&&m("docs",t.docs)("apiDocs",E(2,Lo))},dependencies:[_t,Ze],styles:[".product-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem;width:100%}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}.product-item[_ngcontent-%COMP%]   .product-list-detail[_ngcontent-%COMP%]{flex:1 1 0}.product-item[_ngcontent-%COMP%]   .product-list-action[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.product-item[_ngcontent-%COMP%]   .product-category-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:.5rem}.product-item[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{vertical-align:middle;line-height:1}@media screen and (max-width:576px){.product-item[_ngcontent-%COMP%]{flex-wrap:wrap}.product-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;text-align:center}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 0 1rem;width:100px}}"]})}return i})();var Hn=[{path:"",component:Tt}];export{Hn as default};
