import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, contentChildren, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, Component, inject, model, computed, contentChild, effect, input, ContentChildren, ContentChild, signal, NgModule } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { find, findIndexInList, uuid } from '@primeuix/utils';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { transformToBoolean } from 'primeng/utils';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${dt('stepper.step.gap')};
    padding: ${dt('stepper.step.padding')};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')};
    border-radius: ${dt('stepper.step.header.border.radius')};
    outline-color: transparent;
    background: transparent;
    padding: ${dt('stepper.step.header.padding')};
    gap: ${dt('stepper.step.header.gap')};
}

.p-step-header:focus-visible {
    box-shadow: ${dt('stepper.step.header.focus.ring.shadow')};
    outline: ${dt('stepper.step.header.focus.ring.width')} ${dt('stepper.step.header.focus.ring.style')} ${dt('stepper.step.header.focus.ring.color')};
    outline-offset: ${dt('stepper.step.header.focus.ring.offset')};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${dt('stepper.step.title.color')};
    font-weight: ${dt('stepper.step.title.font.weight')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dt('stepper.step.number.color')};
    border: 2px solid ${dt('stepper.step.number.border.color')};
    background: ${dt('stepper.step.number.background')};
    min-width: ${dt('stepper.step.number.size')};
    height: ${dt('stepper.step.number.size')};
    line-height: ${dt('stepper.step.number.size')};
    font-size: ${dt('stepper.step.number.font.size')};
    z-index: 1;
    border-radius: ${dt('stepper.step.number.border.radius')};
    position: relative;
    font-weight: ${dt('stepper.step.number.font.weight')};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt('stepper.step.number.border.radius')};
    box-shadow: ${dt('stepper.step.number.shadow')};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${dt('stepper.step.number.active.background')};
    border-color: ${dt('stepper.step.number.active.border.color')};
    color: ${dt('stepper.step.number.active.color')};
}

.p-step-active .p-step-title {
    color: ${dt('stepper.step.title.active.color')};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${dt('stepper.separator.background')};
    width: 100%;
    height: ${dt('stepper.separator.size')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')};
}

.p-steppanels {
    padding: ${dt('stepper.steppanels.padding')};
}

.p-steppanel {
    background: ${dt('stepper.steppanel.background')};
    color: ${dt('stepper.steppanel.color')};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${dt('stepper.steppanel.padding')};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${dt('stepper.separator.size')};
    height: auto;
    margin: ${dt('stepper.separator.margin')};
    position: relative;
    left: calc(-1 * ${dt('stepper.separator.size')});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${dt('stepper.separator.size')});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${dt('stepper.step.number.size')};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`;
const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-readonly': props.linear
        }
    ],
    separator: 'p-stepper-separator'
};
class StepperStyle extends BaseStyle {
    name = 'stepper';
    theme = theme;
    classes = classes;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperStyle, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperStyle });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperStyle, decorators: [{
            type: Injectable
        }] });
/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepperstyle
 *
 */
var StepperClasses;
(function (StepperClasses) {
    /**
     * Class name of the root element
     */
    StepperClasses["root"] = "p-stepper";
    /**
     * Class name of the separator element
     */
    StepperClasses["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));

class StepList extends BaseComponent {
    steps = contentChildren(forwardRef(() => Step), ...(ngDevMode ? [{ debugName: "steps" }] : /* istanbul ignore next */ []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepList, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.4", type: StepList, isStandalone: true, selector: "p-step-list", host: { properties: { "class.p-steplist": "true", "class.p-component": "true" } }, queries: [{ propertyName: "steps", predicate: i0.forwardRef(() => Step), isSignal: true }], usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepList, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-list',
                    standalone: true,
                    imports: [CommonModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-steplist]': 'true',
                        '[class.p-component]': 'true'
                    }
                }]
        }], propDecorators: { steps: [{ type: i0.ContentChildren, args: [forwardRef(() => Step), { isSignal: true }] }] } });
class StepperSeparator extends BaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperSeparator, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.4", type: StepperSeparator, isStandalone: true, selector: "p-stepper-separator", host: { properties: { "class.p-stepper-separator": "true", "class.p-component": "true" } }, usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper-separator',
                    standalone: true,
                    imports: [CommonModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-stepper-separator]': 'true',
                        '[class.p-component]': 'true'
                    }
                }]
        }] });
/**
 * StepItem is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
class StepItem extends BaseComponent {
    pcStepper = inject(forwardRef(() => Stepper));
    /**
     * Value of step.
     * @type {<number | undefined>}
     * @defaultValue undefined
     * @group Props
     */
    value = model(...(ngDevMode ? [undefined, { debugName: "value" }] : /* istanbul ignore next */ []));
    isActive = computed(() => this.pcStepper.value() === this.value(), ...(ngDevMode ? [{ debugName: "isActive" }] : /* istanbul ignore next */ []));
    step = contentChild(forwardRef(() => Step), ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    stepPanel = contentChild(forwardRef(() => StepPanel), ...(ngDevMode ? [{ debugName: "stepPanel" }] : /* istanbul ignore next */ []));
    constructor() {
        super();
        effect(() => {
            this.step().value.set(this.value());
        });
        effect(() => {
            this.stepPanel().value.set(this.value());
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepItem, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.4", type: StepItem, isStandalone: true, selector: "p-step-item", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class.p-stepitem": "true", "class.p-component": "true", "attr.data-p-active": "isActive()" } }, queries: [{ propertyName: "step", first: true, predicate: i0.forwardRef(() => Step), descendants: true, isSignal: true }, { propertyName: "stepPanel", first: true, predicate: i0.forwardRef(() => StepPanel), descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-item',
                    standalone: true,
                    imports: [CommonModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-stepitem]': 'true',
                        '[class.p-component]': 'true',
                        '[attr.data-p-active]': 'isActive()'
                    }
                }]
        }], ctorParameters: () => [], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], step: [{ type: i0.ContentChild, args: [forwardRef(() => Step), { isSignal: true }] }], stepPanel: [{ type: i0.ContentChild, args: [forwardRef(() => StepPanel), { isSignal: true }] }] } });
/**
 * Step is a helper component for Stepper component.
 * @group Components
 */
class Step extends BaseComponent {
    pcStepper = inject(forwardRef(() => Stepper));
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value = model(...(ngDevMode ? [undefined, { debugName: "value" }] : /* istanbul ignore next */ []));
    /**
     * Whether the step is disabled.
     * @type {boolean}
     * @defaultValue false
     * @group Props
     */
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: (v) => transformToBoolean(v) });
    active = computed(() => this.pcStepper.isStepActive(this.value()), ...(ngDevMode ? [{ debugName: "active" }] : /* istanbul ignore next */ []));
    isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...(ngDevMode ? [{ debugName: "isStepDisabled" }] : /* istanbul ignore next */ []));
    id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...(ngDevMode ? [{ debugName: "ariaControls" }] : /* istanbul ignore next */ []));
    isSeparatorVisible = computed(() => {
        if (this.pcStepper.stepList()) {
            const steps = this.pcStepper.stepList().steps();
            const index = steps.indexOf(this);
            const stepLen = steps.length;
            return index !== stepLen - 1;
        }
        else {
            return false;
        }
    }, ...(ngDevMode ? [{ debugName: "isSeparatorVisible" }] : /* istanbul ignore next */ []));
    /**
     * Content template.
     * @type {TemplateRef<StepContentTemplateContext>}
     * @group Templates
     */
    content;
    templates;
    _contentTemplate;
    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    onStepClick() {
        this.pcStepper.updateValue(this.value());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Step, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.4", type: Step, isStandalone: true, selector: "p-step", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class.p-step": "true", "class.p-step-active": "active()", "class.p-disabled": "isStepDisabled()", "class.p-component": "true", "attr.aria-current": "active() ? \"step\" : undefined", "attr.role": "\"presentation\"", "attr.data-p-active": "active()", "attr.data-p-disabled": "isStepDisabled()", "attr.data-pc-name": "\"step\"" } }, queries: [{ propertyName: "content", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: i0, template: `
        @if (!content && !_contentTemplate) {
            <button [attr.id]="id()" class="p-step-header" [attr.role]="'tab'" [tabindex]="isStepDisabled() ? -1 : undefined" [attr.aria-controls]="ariaControls()" [disabled]="isStepDisabled()" (click)="onStepClick()" type="button">
                <span class="p-step-number">{{ value() }}</span>
                <span class="p-step-title">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperSeparator, selector: "p-stepper-separator" }, { kind: "ngmodule", type: SharedModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Step, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step',
                    standalone: true,
                    imports: [CommonModule, StepperSeparator, SharedModule],
                    template: `
        @if (!content && !_contentTemplate) {
            <button [attr.id]="id()" class="p-step-header" [attr.role]="'tab'" [tabindex]="isStepDisabled() ? -1 : undefined" [attr.aria-controls]="ariaControls()" [disabled]="isStepDisabled()" (click)="onStepClick()" type="button">
                <span class="p-step-number">{{ value() }}</span>
                <span class="p-step-title">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-step]': 'true',
                        '[class.p-step-active]': 'active()',
                        '[class.p-disabled]': 'isStepDisabled()',
                        '[class.p-component]': 'true',
                        '[attr.aria-current]': 'active() ? "step" : undefined',
                        '[attr.role]': '"presentation"',
                        '[attr.data-p-active]': 'active()',
                        '[attr.data-p-disabled]': 'isStepDisabled()',
                        '[attr.data-pc-name]': '"step"'
                    }
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], content: [{
                type: ContentChild,
                args: ['content', { descendants: false }]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
/**
 * StepPanel is a helper component for Stepper component.
 * @group Components
 */
class StepPanel extends BaseComponent {
    pcStepper = inject(forwardRef(() => Stepper));
    transitionOptions = computed(() => this.pcStepper.transitionOptions(), ...(ngDevMode ? [{ debugName: "transitionOptions" }] : /* istanbul ignore next */ []));
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value = model(undefined, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    active = computed(() => this.pcStepper.value() === this.value(), ...(ngDevMode ? [{ debugName: "active" }] : /* istanbul ignore next */ []));
    ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...(ngDevMode ? [{ debugName: "ariaControls" }] : /* istanbul ignore next */ []));
    id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...(ngDevMode ? [{ debugName: "isVertical" }] : /* istanbul ignore next */ []));
    isSeparatorVisible = computed(() => {
        if (this.pcStepper.stepItems()) {
            const stepLen = this.pcStepper.stepItems().length;
            const stepPanelElements = find(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
            const index = findIndexInList(this.el.nativeElement, stepPanelElements);
            return index !== stepLen - 1;
        }
    }, ...(ngDevMode ? [{ debugName: "isSeparatorVisible" }] : /* istanbul ignore next */ []));
    /**
     * Content template.
     * @param {StepPanelContentTemplateContext} context - Context of the template
     * @see {@link StepPanelContentTemplateContext}
     * @group Templates
     */
    contentTemplate;
    templates;
    _contentTemplate;
    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this._contentTemplate = item.template;
                    break;
            }
        });
    }
    updateValue(value) {
        this.pcStepper.updateValue(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepPanel, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.4", type: StepPanel, isStandalone: true, selector: "p-step-panel", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class.p-steppanel": "true", "class.p-component": "true", "class.p-steppanel-active": "active()", "attr.role": "\"tabpanel\"", "attr.aria-controls": "ariaControls()", "attr.id": "id()", "attr.data-p-active": "active()", "attr.data-pc-name": "\"steppanel\"" } }, queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: i0, template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div class="p-steppanel-content" [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined">
            @if (active()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperSeparator, selector: "p-stepper-separator" }, { kind: "ngmodule", type: SharedModule }], animations: [
            trigger('content', [
                state('hidden', style({
                    height: '0',
                    visibility: 'hidden'
                })),
                state('visible', style({
                    height: '*',
                    visibility: 'visible'
                })),
                transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                transition('void => *', animate(0))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-panel',
                    standalone: true,
                    imports: [CommonModule, StepperSeparator, SharedModule],
                    template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div class="p-steppanel-content" [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined">
            @if (active()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-steppanel]': 'true',
                        '[class.p-component]': 'true',
                        '[class.p-steppanel-active]': 'active()',
                        '[attr.role]': '"tabpanel"',
                        '[attr.aria-controls]': 'ariaControls()',
                        '[attr.id]': 'id()',
                        '[attr.data-p-active]': 'active()',
                        '[attr.data-pc-name]': '"steppanel"'
                    },
                    animations: [
                        trigger('content', [
                            state('hidden', style({
                                height: '0',
                                visibility: 'hidden'
                            })),
                            state('visible', style({
                                height: '*',
                                visibility: 'visible'
                            })),
                            transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                            transition('void => *', animate(0))
                        ])
                    ]
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], contentTemplate: [{
                type: ContentChild,
                args: ['content']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
class StepPanels extends BaseComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepPanels, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.4", type: StepPanels, isStandalone: true, selector: "p-step-panels", host: { properties: { "class.p-steppanels": "true", "class.p-component": "true" } }, usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepPanels, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-step-panels',
                    standalone: true,
                    imports: [CommonModule, SharedModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.p-steppanels]': 'true',
                        '[class.p-component]': 'true'
                    }
                }]
        }] });
/**
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.
 * @group Components
 */
class Stepper extends BaseComponent {
    /**
     * A model that can hold a numeric value or be undefined.
     * @defaultValue undefined
     * @type {ModelSignal<number | undefined>}
     * @group Props
     */
    value = model(undefined, ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    /**
     * A boolean variable that captures user input.
     * @defaultValue false
     * @type {InputSignalWithTransform<any, boolean >}
     * @group Props
     */
    linear = input(false, { ...(ngDevMode ? { debugName: "linear" } : /* istanbul ignore next */ {}), transform: (v) => transformToBoolean(v) });
    /**
     * Transition options of the animation.
     * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
     * @type {InputSignal<string >}
     * @group Props
     */
    transitionOptions = input('400ms cubic-bezier(0.86, 0, 0.07, 1)', ...(ngDevMode ? [{ debugName: "transitionOptions" }] : /* istanbul ignore next */ []));
    _componentStyle = inject(StepperStyle);
    id = signal(uuid('pn_id_'), ...(ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []));
    stepItems = contentChildren(StepItem, ...(ngDevMode ? [{ debugName: "stepItems" }] : /* istanbul ignore next */ []));
    steps = contentChildren(Step, ...(ngDevMode ? [{ debugName: "steps" }] : /* istanbul ignore next */ []));
    stepList = contentChild(StepList, ...(ngDevMode ? [{ debugName: "stepList" }] : /* istanbul ignore next */ []));
    updateValue(value) {
        this.value.set(value);
    }
    isStepActive(value) {
        return this.value() === value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Stepper, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.2.4", type: Stepper, isStandalone: true, selector: "p-stepper", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, linear: { classPropertyName: "linear", publicName: "linear", isSignal: true, isRequired: false, transformFunction: null }, transitionOptions: { classPropertyName: "transitionOptions", publicName: "transitionOptions", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "class.p-stepper": "true", "class.p-component": "true", "attr.role": "\"tablist\"", "attr.id": "id()" } }, providers: [StepperStyle], queries: [{ propertyName: "stepItems", predicate: StepItem, isSignal: true }, { propertyName: "steps", predicate: Step, isSignal: true }, { propertyName: "stepList", first: true, predicate: StepList, descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: Stepper, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepper',
                    standalone: true,
                    imports: [CommonModule, SharedModule],
                    template: ` <ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [StepperStyle],
                    host: {
                        '[class.p-stepper]': 'true',
                        '[class.p-component]': 'true',
                        '[attr.role]': '"tablist"',
                        '[attr.id]': 'id()'
                    }
                }]
        }], propDecorators: { value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: i0.Output, args: ["valueChange"] }], linear: [{ type: i0.Input, args: [{ isSignal: true, alias: "linear", required: false }] }], transitionOptions: [{ type: i0.Input, args: [{ isSignal: true, alias: "transitionOptions", required: false }] }], stepItems: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => StepItem), { isSignal: true }] }], steps: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => Step), { isSignal: true }] }], stepList: [{ type: i0.ContentChild, args: [i0.forwardRef(() => StepList), { isSignal: true }] }] } });
class StepperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.2.4", ngImport: i0, type: StepperModule, imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule], exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperModule, imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.4", ngImport: i0, type: StepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule],
                    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Step, StepItem, StepList, StepPanel, StepPanels, Stepper, StepperClasses, StepperModule, StepperSeparator, StepperStyle };
//# sourceMappingURL=primeng-stepper.mjs.map
