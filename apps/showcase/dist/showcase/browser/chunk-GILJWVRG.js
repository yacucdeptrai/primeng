import{a as h}from"./chunk-PXCL2BMZ.js";import{a as B}from"./chunk-52K4E6GR.js";import"./chunk-QRVM7EFP.js";import{a as U,b as oe}from"./chunk-F4X3V2LA.js";import{a as Z}from"./chunk-DZDZ3TKY.js";import"./chunk-G3BDHYWP.js";import"./chunk-KMVDOPWF.js";import{a as x,d as ae,e as j}from"./chunk-I6RUY6VJ.js";import{a as b,b as le}from"./chunk-CIUCWEWU.js";import{s as J}from"./chunk-4UBEEHUP.js";import"./chunk-FJZWZQF6.js";import"./chunk-VDPAGLM7.js";import"./chunk-X3A3Q6RL.js";import{aa as I,ba as ie,f as ee,g as te}from"./chunk-DEL7GGHP.js";import{e as Q,i as X}from"./chunk-UHCZASEU.js";import{Ha as Y,qa as m}from"./chunk-HJ3EJAPD.js";import"./chunk-O4HV46V6.js";import{l as z,m as A,u as q}from"./chunk-O4W5DSIC.js";import{Ab as d,Hb as k,Ka as $,Mb as g,O as N,Ob as u,Qa as r,X as C,Xb as G,Y as y,Za as _,ac as a,bc as M,cc as H,dc as K,eb as v,fb as O,kb as S,kc as F,lc as W,xb as p,yb as o,zb as l,zc as w}from"./chunk-DNC77BQZ.js";import"./chunk-GAL4ENT6.js";var ne=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["file-upload-accessibility-doc"]],standalone:!1,decls:18,vars:0,consts:[["routerLink","/button#accessibility"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),l(),o(3,"p"),a(4,"FileUpload uses a hidden native "),o(5,"i"),a(6,"input"),l(),a(7," element with "),o(8,"i"),a(9,'type="file"'),l(),a(10," for screen readers."),l(),o(11,"h3"),a(12,"Keyboard Support"),l(),o(13,"p"),a(14,"Interactive elements of the uploader are buttons, visit the "),o(15,"a",0),a(16,"Button"),l(),a(17," accessibility section for more information."),l()())},dependencies:[x,Q],encapsulation:2})}return t})();function ve(t,c){t&1&&(o(0,"div"),a(1,"Drag and drop files to here to upload."),l())}function ge(t,c){if(t&1&&(o(0,"li"),a(1),l()),t&2){let e=c.$implicit;r(),K("",e.name," - ",e.size," bytes")}}function xe(t,c){if(t&1&&(o(0,"ul"),S(1,ge,2,2,"li",6),l()),t&2){let e=u(2);r(),p("ngForOf",e.uploadedFiles)}}function he(t,c){if(t&1&&S(0,xe,2,1,"ul",5),t&2){let e=u();p("ngIf",e.uploadedFiles.length)}}var re=(()=>{class t{messageService;uploadedFiles=[];constructor(e){this.messageService=e}onUpload(e){for(let i of e.files)this.uploadedFiles.push(i);this.messageService.add({severity:"info",summary:"File Uploaded",detail:""})}code={basic:`<p-fileupload name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
    <ng-template #empty>
        <div>Drag and drop files to here to upload.</div>
    </ng-template>
    <ng-template #content>
        <ul *ngIf="uploadedFiles.length">
            <li *ngFor="let file of uploadedFiles">{{ file.name }} - {{ file.size }} bytes</li>
        </ul>
    </ng-template>
</p-fileupload>`,html:`<div class="card">
    <p-toast />
    <p-fileupload name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
        <ng-template #empty>
            <div>Drag and drop files to here to upload.</div>
        </ng-template>
        <ng-template #content>
            <ul *ngIf="uploadedFiles.length">
                <li *ngFor="let file of uploadedFiles">{{ file.name }} - {{ file.size }} bytes</li>
            </ul>
        </ng-template>
    </p-fileupload>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-advanced-demo',
    templateUrl: './file-upload-advanced-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadAdvancedDemo {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}`};static \u0275fac=function(i){return new(i||t)(_(m))};static \u0275cmp=v({type:t,selectors:[["file-upload-advanced-demo"]],standalone:!1,features:[F([m])],decls:11,vars:2,consts:[["empty",""],["content",""],[1,"card"],["name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","mode","advanced",3,"onUpload","multiple"],["selector","file-upload-advanced-demo",3,"code"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."),l()(),o(3,"div",2),d(4,"p-toast"),o(5,"p-fileupload",3),g("onUpload",function(f){return n.onUpload(f)}),S(6,ve,2,0,"ng-template",null,0,w)(8,he,1,1,"ng-template",null,1,w),l()(),d(10,"app-code",4)),i&2&&(r(5),p("multiple",!0),r(5),p("code",n.code))},dependencies:[z,A,b,x,U,h],encapsulation:2})}return t})();var pe=(()=>{class t{messageService;constructor(e){this.messageService=e}onBasicUploadAuto(e){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Auto Mode"})}code={basic:'<p-fileupload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />',html:`<div class="card flex justify-center">
    <p-toast />
    <p-fileupload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-auto-demo',
    templateUrl: './file-upload-auto-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule],
    providers: [MessageService]
})
export class FileUploadAutoDemo {
    constructor(private messageService: MessageService) { }

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
}`};static \u0275fac=function(i){return new(i||t)(_(m))};static \u0275cmp=v({type:t,selectors:[["file-upload-auto-demo"]],standalone:!1,features:[F([m])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],["mode","basic","name","demo[]","chooseIcon","pi pi-upload","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","chooseLabel","Browse",3,"onUpload","auto"],["selector","file-upload-auto-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"When "),o(3,"i"),a(4,"auto"),l(),a(5," property is enabled, a file gets uploaded instantly after selection."),l()(),o(6,"div",0),d(7,"p-toast"),o(8,"p-fileupload",1),g("onUpload",function(f){return n.onBasicUploadAuto(f)}),l()(),d(9,"app-code",2)),i&2&&(r(8),p("auto",!0),r(),p("code",n.code))},dependencies:[b,x,U,h],encapsulation:2})}return t})();var de=(()=>{class t{messageService;constructor(e){this.messageService=e}onUpload(e){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}code={basic:`<p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
<p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />`,html:`<div class="card flex flex-col gap-6 items-center justify-center">
    <p-toast />
    <p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
    <p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-basic-demo',
    templateUrl: './file-upload-basic-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule, ButtonModule],
    providers: [MessageService]
})
export class FileUploadBasicDemo {
    constructor(private messageService: MessageService) {}

    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}`};static \u0275fac=function(i){return new(i||t)(_(m))};static \u0275cmp=v({type:t,selectors:[["file-upload-basic-demo"]],standalone:!1,features:[F([m])],decls:12,vars:1,consts:[["fu",""],[1,"card","flex","flex-col","gap-6","items-center","justify-center"],["mode","basic","chooseLabel","Choose","chooseIcon","pi pi-upload","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"onUpload"],["label","Upload","severity","secondary",3,"onClick"],["selector","file-upload-basic-demo",3,"code"]],template:function(i,n){if(i&1){let s=k();o(0,"app-docsectiontext")(1,"p"),a(2,"FileUpload basic "),o(3,"i"),a(4,"mode"),l(),a(5," provides a simpler UI as an alternative to default advanced mode."),l()(),o(6,"div",1),d(7,"p-toast"),o(8,"p-fileupload",2,0),g("onUpload",function(D){return n.onUpload(D)}),l(),o(10,"p-button",3),g("onClick",function(){C(s);let D=G(9);return y(D.upload())}),l()(),d(11,"app-code",4)}i&2&&(r(11),p("code",n.code))},dependencies:[b,x,I,U,h],encapsulation:2})}return t})();var se=(()=>{class t{code={typescript:"import { FileUploadModule } from 'primeng/fileupload';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["file-upload-import-doc"]],standalone:!1,decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&d(0,"app-code",0),i&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return t})();function _e(t,c){if(t&1){let e=k();o(0,"div",8)(1,"div",9)(2,"p-button",10),g("onClick",function(n){let s=C(e).chooseCallback,f=u();return y(f.choose(n,s))}),l(),o(3,"p-button",11),g("onClick",function(){let n=C(e).uploadCallback,s=u();return y(s.uploadEvent(n))}),l(),o(4,"p-button",12),g("onClick",function(){let n=C(e).clearCallback;return y(n())}),l()(),o(5,"p-progressbar",13)(6,"span",14),a(7),l()()()}if(t&2){let e=c.$implicit,i=u();r(2),p("rounded",!0)("outlined",!0),r(),p("rounded",!0)("outlined",!0)("disabled",!e||e.length===0),r(),p("rounded",!0)("outlined",!0)("disabled",!e||e.length===0),r(),p("value",i.totalSizePercent)("showValue",!1),r(2),H("",i.totalSize,"B / 1Mb")}}function Se(t,c){if(t&1){let e=k();o(0,"div",19)(1,"div"),d(2,"img",20),l(),o(3,"span",21),a(4),l(),o(5,"div"),a(6),l(),d(7,"p-badge",22),o(8,"p-button",23),g("click",function(n){let s=C(e).$implicit,f=u(2).removeFileCallback,D=u();return y(D.onRemoveTemplatingFile(n,s,f,D.index))}),l()()}if(t&2){let e=c.$implicit,i=u(3);r(2),p("alt",e.name)("src",e.objectURL,$),r(2),M(e.name),r(2),M(i.formatSize(e.size)),r(2),p("outlined",!0)("rounded",!0)}}function Ce(t,c){if(t&1&&(o(0,"div")(1,"h5"),a(2,"Pending"),l(),o(3,"div",17),S(4,Se,9,6,"div",18),l()()),t&2){let e=u().$implicit;r(4),p("ngForOf",e)}}function ye(t,c){if(t&1){let e=k();o(0,"div",25)(1,"div"),d(2,"img",20),l(),o(3,"span",21),a(4),l(),o(5,"div"),a(6),l(),d(7,"p-badge",26),o(8,"p-button",27),g("onClick",function(){C(e);let n=u(2).removeUploadedFileCallback,s=u();return y(n(s.index))}),l()()}if(t&2){let e=c.$implicit,i=u(3);r(2),p("alt",e.name)("src",e.objectURL,$),r(2),M(e.name),r(2),M(i.formatSize(e.size)),r(2),p("outlined",!0)("rounded",!0)}}function Fe(t,c){if(t&1&&(o(0,"div")(1,"h5"),a(2,"Completed"),l(),o(3,"div",17),S(4,ye,9,6,"div",24),l()()),t&2){let e=u().uploadedFiles;r(4),p("ngForOf",e)}}function we(t,c){if(t&1&&(o(0,"div",15),S(1,Ce,5,1,"div",16)(2,Fe,5,1,"div",16),l()),t&2){let e=c.$implicit,i=c.uploadedFiles;r(),p("ngIf",(e==null?null:e.length)>0),r(),p("ngIf",(i==null?null:i.length)>0)}}function Ue(t,c){}function De(t,c){t&1&&(o(0,"div",28),d(1,"i",29),o(2,"p",30),a(3,"Drag and drop files to here to upload."),l()())}var ce=(()=>{class t{config;messageService;files=[];totalSize=0;totalSizePercent=0;constructor(e,i){this.config=e,this.messageService=i}choose(e,i){i()}onRemoveTemplatingFile(e,i,n,s){n(e,s),this.totalSize-=parseInt(this.formatSize(i.size)),this.totalSizePercent=this.totalSize/10}onClearTemplatingUpload(e){e(),this.totalSize=0,this.totalSizePercent=0}onTemplatedUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}onSelectedFiles(e){this.files=e.currentFiles,this.files.forEach(i=>{this.totalSize+=parseInt(this.formatSize(i.size))}),this.totalSizePercent=this.totalSize/10}uploadEvent(e){e()}formatSize(e){let s=this.config.translation.fileSizeTypes;if(e===0)return`0 ${s[0]}`;let f=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,f)).toFixed(3))} ${s[f]}`}code={basic:`<p-toast />
<p-fileupload name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
    <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
        <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
            <div class="flex gap-2">
                <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
            </div>
            <p-progressbar [value]="totalSizePercent" [showValue]="false" class="w-full" styleClass="md:w-20rem h-1 w-full md:ml-auto">
                <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
            </p-progressbar>
        </div>
    </ng-template>
    <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
        <div class="flex flex-col gap-8 pt-4">
            <div *ngIf="files?.length > 0">
                <h5>Pending</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Pending" severity="warn" />
                        <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
            <div *ngIf="uploadedFiles?.length > 0">
                <h5>Completed</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Completed" class="mt-4" severity="success" />
                        <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #file></ng-template>
    <ng-template #empty>
        <div class="flex items-center justify-center flex-col">
            <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"></i>
            <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
        </div>
    </ng-template>
</p-fileupload>`,html:`<div class="card">
    <p-toast />
    <p-fileupload name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
        <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
            <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                <div class="flex gap-2">
                    <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                    <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                    <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
                </div>
                <p-progressbar [value]="totalSizePercent" [showValue]="false" class="w-full" styleClass="md:w-20rem h-1 w-full md:ml-auto">
                    <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
                </p-progressbar>
            </div>
        </ng-template>
        <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
            <div class="flex flex-col gap-8 pt-4">
                <div *ngIf="files?.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-4">
                        <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                            <div>
                                <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <p-badge value="Pending" severity="warn" />
                            <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, index)" [outlined]="true" [rounded]="true" severity="danger" />
                        </div>
                    </div>
                </div>
                <div *ngIf="uploadedFiles?.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-4">
                        <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                            <div>
                                <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <p-badge value="Completed" class="mt-4" severity="success" />
                            <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(index)" [outlined]="true" [rounded]="true" severity="danger" />
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #file></ng-template>
        <ng-template #empty>
            <div class="flex items-center justify-center flex-col">
                <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"></i>
                <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
            </div>
        </ng-template>
    </p-fileupload>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService} from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileUpload } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'file-upload-template-demo',
    templateUrl: './file-upload-template-demo.html',
    standalone: true,
    imports: [FileUpload, ButtonModule, BadgeModule, ProgressBar, ToastModule, HttpClientModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadTemplateDemo {
    files = [];

    totalSize : number = 0;

    totalSizePercent : number = 0;

    constructor(private config: PrimeNG, private messageService: MessageService) {}

    choose(event, callback) {
        callback();
    }

    onRemoveTemplatingFile(event, file, removeFileCallback, index) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event) {
        this.files = event.currentFiles;
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback) {
        callback();
    }

    formatSize(bytes) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return \`0 \${sizes[0]}\`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return \`\${formattedSize} \${sizes[i]}\`;
    }
}`};static \u0275fac=function(i){return new(i||t)(_(Y),_(m))};static \u0275cmp=v({type:t,selectors:[["file-upload-template-demo"]],standalone:!1,features:[F([m])],decls:27,vars:2,consts:[["header",""],["content",""],["file",""],["empty",""],["href","https://www.w3.org/TR/FileAPI/"],[1,"card"],["name","myfile[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"onUpload","onSelect","multiple"],["selector","file-upload-template-demo",3,"code"],[1,"flex","flex-wrap","justify-between","items-center","flex-1","gap-4"],[1,"flex","gap-2"],["icon","pi pi-images",3,"onClick","rounded","outlined"],["icon","pi pi-cloud-upload","severity","success",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-times","severity","danger",3,"onClick","rounded","outlined","disabled"],["styleClass","md:w-20rem h-1 w-full md:ml-auto",1,"w-full",3,"value","showValue"],[1,"whitespace-nowrap"],[1,"flex","flex-col","gap-8","pt-4"],[4,"ngIf"],[1,"flex","flex-wrap","gap-4"],["class","p-8 rounded-border flex flex-col border border-surface items-center gap-4",4,"ngFor","ngForOf"],[1,"p-8","rounded-border","flex","flex-col","border","border-surface","items-center","gap-4"],["role","presentation","width","100","height","50",3,"alt","src"],[1,"font-semibold","text-ellipsis","max-w-60","whitespace-nowrap","overflow-hidden"],["value","Pending","severity","warn"],["icon","pi pi-times","severity","danger",3,"click","outlined","rounded"],["class","card m-0 px-12 flex flex-col border border-surface items-center gap-4",4,"ngFor","ngForOf"],[1,"card","m-0","px-12","flex","flex-col","border","border-surface","items-center","gap-4"],["value","Completed","severity","success",1,"mt-4"],["icon","pi pi-times","severity","danger",3,"onClick","outlined","rounded"],[1,"flex","items-center","justify-center","flex-col"],[1,"pi","pi-cloud-upload","!border-2","!rounded-full","!p-8","!text-4xl","!text-muted-color"],[1,"mt-6","mb-0"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2," Uploader UI is customizable using a ng-template called "),o(3,"i"),a(4,"file"),l(),a(5," that gets the "),o(6,"a",4),a(7,"File"),l(),a(8," instance as the implicit variable. Second ng-template named "),o(9,"i"),a(10,"content"),l(),a(11," can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them. This template gets the selected files as the implicit variable. Third and final ng-template option is "),o(12,"i"),a(13,"toolbar"),l(),a(14," to display custom content at toolbar. "),l()(),o(15,"div",5),d(16,"p-toast"),o(17,"p-fileupload",6),g("onUpload",function(){return n.onTemplatedUpload()})("onSelect",function(f){return n.onSelectedFiles(f)}),S(18,_e,8,11,"ng-template",null,0,w)(20,we,3,2,"ng-template",null,1,w)(22,Ue,0,0,"ng-template",null,2,w)(24,De,4,0,"ng-template",null,3,w),l()(),d(26,"app-code",7)),i&2&&(r(17),p("multiple",!0),r(9),p("code",n.code))},dependencies:[z,A,b,x,I,B,U,h,ee],encapsulation:2})}return t})();var me=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[q,J,le,j,ie,Z,B,oe,h,te,X,j]})}return t})();var Te=()=>["FileUpload"],ue=(()=>{class t{docs=[{id:"import",label:"Import",component:se},{id:"basic",label:"Basic",component:de},{id:"auto",label:"Auto",component:pe},{id:"template",label:"Template",component:ce},{id:"advanced",label:"Advanced",component:re},{id:"accessibility",label:"Accessibility",component:ne}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=v({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular FileUpload Component","header","FileUpload","description","FileUpload is an advanced uploader with drag and drop support, multi file uploads, auto uploading, progress tracking and validations.","themeDocs","fileupload",3,"docs","apiDocs"]],template:function(i,n){i&1&&d(0,"app-doc",0),i&2&&p("docs",n.docs)("apiDocs",W(2,Te))},dependencies:[me,ae],encapsulation:2})}return t})();var Ut=[{path:"",component:ue}];export{Ut as default};
