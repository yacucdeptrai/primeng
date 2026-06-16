import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ComponentRef, Directive, inject, InjectionToken, Injector, NgModule, StaticProvider, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { uuid } from '@primeuix/utils';
import { MotionOptions } from '@primeuix/motion';
import { filter, Subscription, SubscriptionLike } from 'rxjs';
import { SharedModule, TranslationKeys } from 'primeng/api';
import { BaseComponent, PARENT_INSTANCE } from 'primeng/basecomponent';
import { Bind, BindModule } from 'primeng/bind';
import { Dialog, DialogPassThrough } from 'primeng/dialog';
import { Nullable } from 'primeng/ts-helpers';
import { DynamicDialogConfig } from './dynamicdialog-config';
import { DynamicDialogRef } from './dynamicdialog-ref';
import { DynamicDialogContent } from './dynamicdialogcontent';
import { DynamicDialogStyle } from './style/dynamicdialogstyle';

const DYNAMIC_DIALOG_INSTANCE = new InjectionToken<DynamicDialog>('DYNAMIC_DIALOG_INSTANCE');

@Component({
    selector: 'p-dynamicDialog, p-dynamicdialog, p-dynamic-dialog',
    standalone: true,
    imports: [CommonModule, SharedModule, DynamicDialogContent, Dialog, BindModule],
    template: `
        <p-dialog
            [(visible)]="visible"
            [header]="ddconfig?.header"
            [draggable]="ddconfig?.draggable !== false"
            [resizable]="ddconfig?.resizable !== false"
            [contentStyle]="ddconfig?.contentStyle"
            [modal]="ddconfig?.modal !== false"
            [closeOnEscape]="ddconfig?.closeOnEscape !== false"
            [dismissableMask]="ddconfig?.dismissableMask"
            [rtl]="ddconfig?.rtl"
            [closable]="closable"
            [breakpoints]="breakpoints"
            [styleClass]="dialogStyleClass"
            [maskStyleClass]="ddconfig?.maskStyleClass"
            [showHeader]="ddconfig?.minimal ? false : ddconfig?.showHeader !== false"
            [autoZIndex]="ddconfig?.autoZIndex !== false"
            [baseZIndex]="ddconfig?.baseZIndex || 0"
            [minX]="minX"
            [minY]="minY"
            [focusOnShow]="ddconfig?.focusOnShow !== false"
            [maximizable]="maximizable"
            [keepInViewport]="keepInViewport"
            [focusTrap]="ddconfig?.focusTrap !== false"
            [transitionOptions]="ddconfig?.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'"
            [motionOptions]="motionOptions"
            [closeAriaLabel]="ddconfig?.closeAriaLabel || defaultCloseAriaLabel"
            [minimizeIcon]="minimizeIcon"
            [maximizeIcon]="maximizeIcon"
            [closeButtonProps]="{ severity: 'secondary', variant: 'text', rounded: true }"
            [maximizeButtonProps]="{ severity: 'secondary', variant: 'text', rounded: true }"
            [style]="dialogStyle"
            [position]="position"
            (onHide)="onDialogHide($event)"
            (onMaximize)="onDialogMaximize($event)"
            (onResizeInit)="onDialogResizeInit($event)"
            (onResizeEnd)="onDialogResizeEnd($event)"
            (onDragEnd)="onDialogDragEnd($event)"
            (visibleChange)="onVisibleChange($event)"
            [pt]="ddconfig.pt"
            appendTo="self"
            hostName="DynamicDialog"
            [unstyled]="isUnstyled"
        >
            <ng-template #header *ngIf="headerTemplate">
                <ng-container *ngComponentOutlet="headerTemplate"></ng-container>
            </ng-template>
            <ng-template #content *ngIf="contentTemplate">
                <ng-container *ngComponentOutlet="contentTemplate"></ng-container>
            </ng-template>
            <ng-template #footer *ngIf="footerTemplate">
                <ng-container *ngComponentOutlet="footerTemplate"></ng-container>
            </ng-template>
            <ng-template #closeicon *ngIf="closeIconTemplate">
                <ng-container *ngComponentOutlet="closeIconTemplate"></ng-container>
            </ng-template>
            <ng-template #maximizeicon *ngIf="maximizeIconTemplate">
                <ng-container *ngComponentOutlet="maximizeIconTemplate"></ng-container>
            </ng-template>
            <ng-template #minimizeicon *ngIf="minimizeIconTemplate">
                <ng-container *ngComponentOutlet="minimizeIconTemplate"></ng-container>
            </ng-template>

            <ng-template pDynamicDialogContent *ngIf="!contentTemplate"></ng-template>
            <div *ngIf="ddconfig.footer && !footerTemplate">{{ ddconfig.footer }}</div>
        </p-dialog>
    `,
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None,
    providers: [DynamicDialogStyle, { provide: DYNAMIC_DIALOG_INSTANCE, useExisting: DynamicDialog }, { provide: PARENT_INSTANCE, useExisting: DynamicDialog }],
    hostDirectives: [Bind]
})
export class DynamicDialog extends BaseComponent<DialogPassThrough> {
    componentName = 'Dialog';

    _componentStyle = inject(DynamicDialogStyle);

    $pcDynamicDialog: DynamicDialog | undefined = inject(DYNAMIC_DIALOG_INSTANCE, { optional: true, skipSelf: true }) ?? undefined;

    bindDirectiveInstance = inject(Bind, { self: true });

    onAfterViewChecked(): void {
        this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }

    visible: boolean = true;

    componentRef: Nullable<ComponentRef<any>>;

    id: string = uuid('pn_id_');

    @ViewChild(DynamicDialogContent) insertionPoint: Nullable<DynamicDialogContent>;

    @ViewChild(Dialog) dialog: Nullable<Dialog>;

    childComponentType: Nullable<Type<any>>;

    inputValues: Record<string, any>;

    get minX(): number {
        return this.ddconfig.minX ? this.ddconfig.minX : 0;
    }

    get minY(): number {
        return this.ddconfig.minY ? this.ddconfig.minY : 0;
    }

    get keepInViewport(): boolean {
        return this.ddconfig.keepInViewport!;
    }

    get maximizable(): boolean {
        return this.ddconfig.maximizable!;
    }

    get maximizeIcon(): string {
        return this.ddconfig.maximizeIcon!;
    }

    get minimizeIcon(): string {
        return this.ddconfig.minimizeIcon!;
    }

    get closable() {
        return this.ddconfig.closable!;
    }

    get position(): string {
        return this.ddconfig.position!;
    }

    get defaultCloseAriaLabel(): string {
        return this.config.getTranslation(TranslationKeys.ARIA)['close'];
    }

    get breakpoints() {
        return this.ddconfig.breakpoints;
    }

    get footerTemplate() {
        return this.ddconfig?.templates?.footer;
    }

    get headerTemplate() {
        return this.ddconfig?.templates?.header;
    }

    get contentTemplate() {
        return this.ddconfig?.templates?.content;
    }

    get minimizeIconTemplate(): any {
        return this.ddconfig?.templates?.minimizeicon;
    }

    get maximizeIconTemplate(): any {
        return this.ddconfig?.templates?.maximizeicon;
    }

    get closeIconTemplate() {
        return this.ddconfig?.templates?.closeicon;
    }

    get dialogStyle() {
        return {
            ...(this.ddconfig?.style || {}),
            ...(this.ddconfig?.width && { width: this.ddconfig.width }),
            ...(this.ddconfig?.height && { height: this.ddconfig.height })
        };
    }

    get header() {
        return this.ddconfig.header;
    }

    get data() {
        return this.ddconfig.data;
    }

    get dialogId() {
        return this.$attrSelector;
    }

    get isUnstyled() {
        return this.ddconfig.unstyled || this.$unstyled();
    }

    get motionOptions(): MotionOptions | undefined {
        return this.ddconfig?.disableAnimation ? { disabled: true } : undefined;
    }

    get dialogStyleClass(): string {
        const classes = [this.ddconfig?.styleClass, this.ddconfig?.minimal ? 'p-dialog-minimal' : undefined].filter(Boolean);
        return classes.join(' ');
    }

    private router = inject(Router, { optional: true });

    private _locationChanges: SubscriptionLike = Subscription.EMPTY;

    maximized: boolean | undefined;

    dragging: boolean | undefined;

    resizing: boolean | undefined;

    ariaLabelledBy: string | undefined | null;

    _style: any = {};

    styleElement: any;

    lastPageX: number | undefined;

    lastPageY: number | undefined;

    contentViewChild: any;

    footerViewChild: any;

    headerViewChild: any;

    maskViewChild: any;

    maskClickListener: any;

    documentDragListener: any;

    documentDragEndListener: any;

    documentResizeListener: any;

    documentResizeEndListener: any;

    documentEscapeListener: any;

    constructor(
        public ddconfig: DynamicDialogConfig,
        private dialogRef: DynamicDialogRef
    ) {
        super();
    }

    onVisibleChange(visible: boolean) {
        if (!visible) {
            this.dialogRef.close();
        }
    }

    onAfterViewInit() {
        this.loadChildComponent(this.childComponentType!);
        this.ariaLabelledBy = this.getAriaLabelledBy();
        this.bindDocumentEscapeListener();
        if (this.ddconfig.closeOnNavigation && this.router) {
            this._locationChanges = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.close());
        }
        this.cd.detectChanges();
    }

    getAriaLabelledBy() {
        const { header, showHeader } = this.ddconfig;

        if (header === null || showHeader === false) {
            return null;
        }
        return uuid('pn_id_') + '_header';
    }

    loadChildComponent(componentType: Type<any>) {
        let viewContainerRef = this.insertionPoint?.viewContainerRef;
        viewContainerRef?.clear();

        const childInjector = this.createChildInjector();
        this.componentRef = viewContainerRef?.createComponent(componentType, childInjector ? { injector: childInjector } : undefined);

        if (this.inputValues && this.componentRef) {
            Object.entries(this.inputValues).forEach(([key, value]) => {
                this.componentRef!.setInput(key, value);
            });
        }

        this.dialogRef.onChildComponentLoaded.next(this.componentRef!.instance);
    }

    private createChildInjector(): Injector | null {
        const explicitParent = this.ddconfig.injector || this.ddconfig.viewContainerRef?.injector;
        const extraProviders = this.ddconfig.providers;

        // No caller-supplied parent and no extra providers: keep the default insertion-point
        // injector, which already resolves the dialog tokens via DynamicDialogInjector.
        if (!explicitParent && (!extraProviders || extraProviders.length === 0)) {
            return null;
        }

        // Re-provide the dialog tokens since a custom parent chain bypasses DynamicDialogInjector.
        const providers: StaticProvider[] = [
            { provide: DynamicDialogConfig, useValue: this.ddconfig },
            { provide: DynamicDialogRef, useValue: this.dialogRef },
            { provide: DynamicDialog, useValue: this },
            ...(extraProviders ?? [])
        ];

        return Injector.create({
            parent: explicitParent ?? this.injector,
            providers
        });
    }

    onDialogHide(event: any) {
        this.dialogRef.destroy();
    }

    onDialogMaximize(event: any) {
        this.maximized = event.maximized;
        this.dialogRef.maximize(event);
    }

    onDialogResizeInit(event: MouseEvent) {
        this.resizing = true;
        this.dialogRef.resizeInit(event);
    }

    onDialogResizeEnd(event: MouseEvent) {
        this.resizing = false;
        this.dialogRef.resizeEnd(event);
    }

    onDialogDragEnd(event: DragEvent) {
        this.dragging = false;
        this.dialogRef.dragEnd(event);
    }

    close() {
        this.visible = false;
        this.cd.markForCheck();
    }

    hide() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    get _parent() {
        const domElements = Array.from(this.document.getElementsByClassName('p-dialog'));
        if (domElements.length > 1) {
            return domElements.pop();
        }
    }

    get parentContent() {
        const domElements = Array.from(this.document.getElementsByClassName('p-dialog'));
        if (domElements.length > 0) {
            const contentElements = domElements[domElements.length - 1].querySelector('.p-dialog-content');
            if (contentElements) return Array.isArray(contentElements) ? contentElements[0] : contentElements;
        }
    }

    // The visible dialog DOM lives in the inner Dialog. The consumer helper reads
    // `container.style.zIndex`, so delegate to the inner Dialog's container signal.
    get container(): any {
        return this.dialog?.container?.() ?? null;
    }

    get wrapper(): any {
        return this.dialog?.wrapper ?? null;
    }

    /**
     * Re-surfaced for the consumer's nested-dialog focus fix. The inner Dialog owns the
     * z-index/focus/listener machinery in v21, so delegate to it.
     */
    moveOnTop() {
        this.dialog?.moveOnTop();
    }

    bindGlobalListeners() {
        this.dialog?.bindGlobalListeners();
    }

    focus() {
        this.dialog?.focus();
    }

    unbindGlobalListeners() {
        this.unbindDocumentEscapeListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentDragListener();
        this.unbindDocumentDragEndListener();
        this.dialog?.unbindGlobalListeners();
    }

    onAnimationStart(event: any) {
        if (event.toState === 'visible') {
            // If parent dialog exists, unbind its listeners first
            if (this._parent) {
                this.unbindGlobalListeners();
            }
            if (this.ddconfig.modal) {
                this.enableModality();
            }
        }
    }

    onAnimationEnd(event: any) {
        if (event.toState === 'void') {
            this.onContainerDestroy();
            this.dialogRef.destroy();
        }
    }

    onContainerDestroy() {
        this.unbindGlobalListeners();
        if (this.ddconfig.modal) {
            this.disableModality();
        }
    }

    bindDocumentDragListener() {
        if (!this.documentDragListener) {
            this.documentDragListener = this.renderer.listen(this.document.defaultView, 'mousemove', (event) => {
                this.onDrag(event);
            });
        }
    }

    bindDocumentDragEndListener() {
        if (!this.documentDragEndListener) {
            this.documentDragEndListener = this.renderer.listen(this.document.defaultView, 'mouseup', (event) => {
                this.endDrag(event);
            });
        }
    }

    unbindDocumentDragEndListener() {
        if (this.documentDragEndListener) {
            this.documentDragEndListener();
            this.documentDragEndListener = null;
        }
    }

    unbindDocumentDragListener() {
        if (this.documentDragListener) {
            this.documentDragListener();
            this.documentDragListener = null;
        }
    }

    initDrag(event: MouseEvent) {
        // Don't initialize drag when clicking on header icons
        if (event.target instanceof HTMLElement) {
            const target = event.target;
            if (target.closest('.p-dialog-header-icon') || target.closest('.p-dialog-header-icons')) {
                return;
            }
        }

        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.dialogRef.dragStart(event);
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
        // Handled by Dialog component
    }

    onDrag(event: MouseEvent) {
        if (this.dragging) {
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;

            if (this.ddconfig.keepInViewport && this.container) {
                this.container.style.position = 'fixed';
            }
        }
    }

    endDrag(event: MouseEvent) {
        if (this.dragging) {
            this.dragging = false;
            this.dialogRef.dragEnd(event as any);
            this.cd.detectChanges();
        }
    }

    resetPosition() {
        if (this.container) {
            this.container.style.position = '';
            this.container.style.left = '';
            this.container.style.top = '';
            this.container.style.margin = '';
        }
    }

    bindDocumentResizeListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = this.renderer.listen(this.document.defaultView, 'mousemove', (event) => {
                this.onResize(event);
            });
        }
        if (!this.documentResizeEndListener) {
            this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, 'mouseup', (event) => {
                this.resizeEnd(event);
            });
        }
    }

    unbindDocumentResizeListeners() {
        if (this.documentResizeListener) {
            this.documentResizeListener();
            this.documentResizeListener = null;
        }
        if (this.documentResizeEndListener) {
            this.documentResizeEndListener();
            this.documentResizeEndListener = null;
        }
    }

    initResize(event: MouseEvent) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.dialogRef.resizeInit(event);
    }

    onResize(event: MouseEvent) {
        if (this.resizing) {
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }

    resizeEnd(event: MouseEvent) {
        if (this.resizing) {
            this.resizing = false;
            this.dialogRef.resizeEnd(event);
        }
    }

    maximize() {
        this.maximized = !this.maximized;
        this.dialogRef.maximize({ maximized: this.maximized });
    }

    enableModality() {
        if (this.ddconfig.dismissableMask && this.wrapper) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', (event: any) => {
                if (this.wrapper && this.wrapper.isSameNode(event.target)) {
                    this.hide();
                }
            });
        }
    }

    disableModality() {
        this.unbindMaskClickListener();
        this.cd.detectChanges();
    }

    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }

    bindDocumentEscapeListener() {
        if (this.ddconfig.closeOnEscape) {
            this.documentEscapeListener = this.renderer.listen(this.document, 'keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape' && this.container) {
                    this.hide();
                }
            });
        }
    }

    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }

    createStyle() {
        if (!this.styleElement && this.breakpoints) {
            this.styleElement = this.renderer.createElement('style');
            this.styleElement.type = 'text/css';
            this.renderer.appendChild(this.document.head, this.styleElement);

            let innerHTML = '';
            for (let breakpoint in this.breakpoints) {
                innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.dialogId}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
            }
            this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
    }

    destroyStyle() {
        if (this.styleElement) {
            this.renderer.removeChild(this.document.head, this.styleElement);
            this.styleElement = null;
        }
    }

    onDestroy() {
        this.onContainerDestroy();
        this._locationChanges.unsubscribe();
        if (this.componentRef && typeof this.componentRef.destroy === 'function') {
            this.componentRef.destroy();
        }
        this.destroyStyle();
    }
}

/**
 * Alias kept for the consumer helper which imports `DynamicDialogComponent` (the v17 class name).
 */
export const DynamicDialogComponent = DynamicDialog;
export type DynamicDialogComponent = DynamicDialog;

/**
 * Header bar of the dialog content rendered through the `p-dialog-title` selector.
 * @group Components
 */
@Directive({
    selector: 'p-dialog-title, p-dialogTitle',
    standalone: true,
    host: {
        class: 'p-dialog-title'
    }
})
export class DynamicDialogTitle {}

/**
 * Marks an element as the dialog content region.
 * @group Components
 */
@Directive({
    selector: '[pDialogContent]',
    standalone: true,
    host: {
        class: 'p-dialog-content'
    }
})
export class DynamicDialogActualContent {}

/**
 * Marks an element as the dialog footer/actions region.
 * @group Components
 */
@Directive({
    selector: '[pDialogActions]',
    standalone: true,
    host: {
        class: 'p-dialog-footer'
    }
})
export class DynamicDialogActions {}

@NgModule({
    imports: [DynamicDialog, DynamicDialogTitle, DynamicDialogActualContent, DynamicDialogActions, SharedModule],
    exports: [DynamicDialog, DynamicDialogTitle, DynamicDialogActualContent, DynamicDialogActions, SharedModule]
})
export class DynamicDialogModule {}
