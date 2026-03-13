import * as i0 from '@angular/core';
import { AfterContentInit, EventEmitter, ElementRef, TemplateRef, QueryList } from '@angular/core';
import * as i1 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';

/**
 *
 * ToggleSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primeng.org/toggleswitch/)
 *
 * @module toggleswitchstyle
 *
 */
declare enum ToggleSwitchClasses {
    /**
     * Class name of the root element
     */
    root = "p-toggleswitch",
    /**
     * Class name of the input element
     */
    input = "p-toggleswitch-input",
    /**
     * Class name of the slider element
     */
    slider = "p-toggleswitch-slider"
}
declare class ToggleSwitchStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => {
            'p-toggleswitch p-component': boolean;
            'p-toggleswitch-checked': any;
            'p-disabled': any;
            'p-invalid': any;
        };
        input: string;
        slider: string;
        handle: string;
    };
    inlineStyles: {
        root: {
            position: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSwitchStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToggleSwitchStyle>;
}
interface ToggleSwitchStyle extends BaseStyle {
}

/**
 * Custom change event.
 * @see {@link ToggleSwitch.onChange}
 * @group Events
 */
interface ToggleSwitchChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Checked state.
     */
    checked: boolean;
}

/**
 * Context interface for the handle template.
 * @property {boolean} checked - A flag indicating whether the input is checked.
 * @group Interface
 */
interface ToggleSwitchHandleTemplateContext {
    checked: boolean;
}
declare const TOGGLESWITCH_VALUE_ACCESSOR: any;
/**
 * ToggleSwitch is used to select a boolean value.
 * @group Components
 */
declare class ToggleSwitch extends BaseComponent implements AfterContentInit {
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Identifier of the input element.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Name of the input element.
     * @group Props
     */
    name: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly: boolean | undefined;
    /**
     * Value in checked state.
     * @group Props
     */
    trueValue: any;
    /**
     * Value in unchecked state.
     * @group Props
     */
    falseValue: any;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Callback to invoke when the on value change.
     * @param {ToggleSwitchChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<ToggleSwitchChangeEvent>;
    input: ElementRef;
    /**
     * Callback to invoke when the on value change.
     * @type {TemplateRef<ToggleSwitchHandleTemplateContext>} context - Context of the template
     * @example
     * ```html
     * <ng-template #handle let-checked="checked"> </ng-template>
     * ```
     * @see {@link ToggleSwitchHandleTemplateContext}
     * @group Templates
     */
    handleTemplate: TemplateRef<any> | undefined;
    _handleTemplate: TemplateRef<any> | undefined;
    modelValue: any;
    focused: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    _componentStyle: ToggleSwitchStyle;
    templates: QueryList<PrimeTemplate>;
    ngAfterContentInit(): void;
    onClick(event: Event): void;
    onFocus(): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    checked(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleSwitch, "p-toggleswitch, p-toggleSwitch, p-toggle-switch", never, { "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "trueValue": { "alias": "trueValue"; "required": false; }; "falseValue": { "alias": "falseValue"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "onChange": "onChange"; }, ["handleTemplate", "templates"], never, true, never>;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
declare class ToggleSwitchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSwitchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToggleSwitchModule, never, [typeof ToggleSwitch, typeof i1.SharedModule], [typeof ToggleSwitch, typeof i1.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToggleSwitchModule>;
}

export { TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitch, ToggleSwitchClasses, ToggleSwitchModule, ToggleSwitchStyle };
export type { ToggleSwitchChangeEvent, ToggleSwitchHandleTemplateContext };
