import * as _angular_core from '@angular/core';
import { ModelSignal, AfterContentInit, InputSignalWithTransform, TemplateRef, QueryList, InputSignal } from '@angular/core';
import * as i1 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primeng.org/stepper/)
 *
 * @module stepperstyle
 *
 */
declare enum StepperClasses {
    /**
     * Class name of the root element
     */
    root = "p-stepper",
    /**
     * Class name of the separator element
     */
    separator = "p-stepper-separator"
}
declare class StepperStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ props }: {
            props: any;
        }) => (string | {
            'p-readonly': any;
        })[];
        separator: string;
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepperStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<StepperStyle>;
}
interface StepperStyle extends BaseStyle {
}

/**
 * Context interface for the StepPanel content template.
 * @property {() => void} activateCallback - Callback function to activate a step.
 * @property {number} value - The value associated with the step.
 * @property {boolean} active - A flag indicating whether the step is active.
 * @group Interface
 */
interface StepContentTemplateContext {
    activateCallback: () => void;
    value: number;
    active: boolean;
}
/**
 * Context interface for the StepPanel content template.
 * @property {(index: number) => void} activateCallback - Callback function to activate a step.
 * @property {number} value - The value associated with the step.
 * @property {boolean} active - A flag indicating whether the step is active.
 * @group Interface
 */
interface StepPanelContentTemplateContext {
    activateCallback: (index: number) => void;
    value: number;
    active: boolean;
}
declare class StepList extends BaseComponent {
    steps: _angular_core.Signal<readonly any[]>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepList, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<StepList, "p-step-list", never, {}, {}, ["steps"], ["*"], true, never>;
}
declare class StepperSeparator extends BaseComponent {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepperSeparator, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<StepperSeparator, "p-stepper-separator", never, {}, {}, never, ["*"], true, never>;
}
/**
 * StepItem is a helper component for Stepper component used in vertical orientation.
 * @group Components
 */
declare class StepItem extends BaseComponent {
    pcStepper: any;
    /**
     * Value of step.
     * @type {<number | undefined>}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    isActive: _angular_core.Signal<boolean>;
    step: _angular_core.Signal<any>;
    stepPanel: _angular_core.Signal<any>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepItem, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<StepItem, "p-step-item", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["step", "stepPanel"], ["*"], true, never>;
}
/**
 * Step is a helper component for Stepper component.
 * @group Components
 */
declare class Step extends BaseComponent implements AfterContentInit {
    pcStepper: any;
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number>;
    /**
     * Whether the step is disabled.
     * @type {boolean}
     * @defaultValue false
     * @group Props
     */
    disabled: InputSignalWithTransform<any, boolean>;
    active: _angular_core.Signal<any>;
    isStepDisabled: _angular_core.Signal<any>;
    id: _angular_core.Signal<string>;
    ariaControls: _angular_core.Signal<string>;
    isSeparatorVisible: _angular_core.Signal<boolean>;
    /**
     * Content template.
     * @type {TemplateRef<StepContentTemplateContext>}
     * @group Templates
     */
    content: TemplateRef<StepContentTemplateContext>;
    templates: QueryList<PrimeTemplate> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit(): void;
    onStepClick(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Step, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Step, "p-step", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["content", "templates"], ["*"], true, never>;
}
/**
 * StepPanel is a helper component for Stepper component.
 * @group Components
 */
declare class StepPanel extends BaseComponent implements AfterContentInit {
    pcStepper: any;
    transitionOptions: _angular_core.Signal<any>;
    /**
     * Active value of stepper.
     * @type {number}
     * @defaultValue undefined
     * @group Props
     */
    value: ModelSignal<number>;
    active: _angular_core.Signal<boolean>;
    ariaControls: _angular_core.Signal<string>;
    id: _angular_core.Signal<string>;
    isVertical: _angular_core.Signal<boolean>;
    isSeparatorVisible: _angular_core.Signal<boolean>;
    /**
     * Content template.
     * @param {StepPanelContentTemplateContext} context - Context of the template
     * @see {@link StepPanelContentTemplateContext}
     * @group Templates
     */
    contentTemplate: TemplateRef<StepPanelContentTemplateContext>;
    templates: QueryList<PrimeTemplate> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit(): void;
    updateValue(value: number): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepPanel, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<StepPanel, "p-step-panel", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["contentTemplate", "templates"], never, true, never>;
}
declare class StepPanels extends BaseComponent {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepPanels, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<StepPanels, "p-step-panels", never, {}, {}, never, ["*"], true, never>;
}
/**
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multistep process.
 * @group Components
 */
declare class Stepper extends BaseComponent {
    /**
     * A model that can hold a numeric value or be undefined.
     * @defaultValue undefined
     * @type {ModelSignal<number | undefined>}
     * @group Props
     */
    value: ModelSignal<number | undefined>;
    /**
     * A boolean variable that captures user input.
     * @defaultValue false
     * @type {InputSignalWithTransform<any, boolean >}
     * @group Props
     */
    linear: InputSignalWithTransform<any, boolean>;
    /**
     * Transition options of the animation.
     * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
     * @type {InputSignal<string >}
     * @group Props
     */
    transitionOptions: InputSignal<string>;
    _componentStyle: StepperStyle;
    id: _angular_core.WritableSignal<string>;
    stepItems: _angular_core.Signal<readonly StepItem[]>;
    steps: _angular_core.Signal<readonly Step[]>;
    stepList: _angular_core.Signal<StepList>;
    updateValue(value: number): void;
    isStepActive(value: number): boolean;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Stepper, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Stepper, "p-stepper", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "linear": { "alias": "linear"; "required": false; "isSignal": true; }; "transitionOptions": { "alias": "transitionOptions"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, ["stepItems", "steps", "stepList"], ["*"], true, never>;
}
declare class StepperModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<StepperModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<StepperModule, never, [typeof Stepper, typeof StepList, typeof StepPanels, typeof StepPanel, typeof StepItem, typeof Step, typeof StepperSeparator, typeof i1.SharedModule], [typeof Stepper, typeof StepList, typeof StepPanels, typeof StepPanel, typeof StepItem, typeof Step, typeof StepperSeparator, typeof i1.SharedModule]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<StepperModule>;
}

export { Step, StepItem, StepList, StepPanel, StepPanels, Stepper, StepperClasses, StepperModule, StepperSeparator, StepperStyle };
export type { StepContentTemplateContext, StepPanelContentTemplateContext };
