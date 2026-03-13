import { BaseStyle } from 'primeng/base';
import * as i0 from '@angular/core';
import { TemplateRef, AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i2 from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { Nullable } from 'primeng/ts-helpers';
import * as i1 from 'primeng/ripple';

/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.primeng.org/togglebutton/)
 *
 * @module togglebuttonstyle
 *
 */
declare enum ToggleButtonClasses {
    /**
     * Class name of the root element
     */
    root = "p-togglebutton",
    /**
     * Class name of the icon element
     */
    icon = "p-togglebutton-icon",
    /**
     * Class name of the label element
     */
    label = "p-togglebutton-label"
}
declare class ToggleButtonStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => {
            'p-togglebutton p-component': boolean;
            'p-togglebutton-checked': any;
            'p-disabled': any;
            'p-togglebutton-sm p-inputfield-sm': boolean;
            'p-togglebutton-lg p-inputfield-lg': boolean;
        };
        content: string;
        icon: string;
        label: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButtonStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToggleButtonStyle>;
}
interface ToggleButtonStyle extends BaseStyle {
}

/**
 * Custom change event.
 * @see {@link ToggleButton.onChange}
 * @group Events
 */
interface ToggleButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Boolean value to represent checked state.
     */
    checked: boolean | undefined;
}
/**
 * Defines valid templates in ToggleButton.
 * @group Templates
 */
interface ToggleButtonTemplates {
    /**
     * Custom icon template.
     * @param {boolean} context - checked state as boolean.
     */
    icon(context: {
        /**
         * Checked.
         */
        $implicit: boolean;
    }): TemplateRef<{
        $implicit: boolean;
    }>;
    /**
     * Custom content template.
     * @param {Object} context - content data.
     */
    content(context: {
        /**
         * Checked.
         */
        $implicit: boolean;
        /**
         * Label of the component.
         */
        label: string;
    }): TemplateRef<{
        $implicit: boolean | null;
        label: string;
    }>;
}

declare const TOGGLEBUTTON_VALUE_ACCESSOR: any;
/**
 * ToggleButton is used to select a boolean value using a button.
 * @group Components
 */
declare class ToggleButton extends BaseComponent implements AfterContentInit, ControlValueAccessor {
    get hostClass(): string;
    onKeyDown(event: KeyboardEvent): void;
    toggle(event: Event): void;
    /**
     * Label for the on state.
     * @group Props
     */
    onLabel: string;
    /**
     * Label for the off state.
     * @group Props
     */
    offLabel: string;
    /**
     * Icon for the on state.
     * @group Props
     */
    onIcon: string | undefined;
    /**
     * Icon for the off state.
     * @group Props
     */
    offIcon: string | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: any;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Defines the size of the component.
     * @group Props
     */
    size: 'large' | 'small';
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos: 'left' | 'right';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Whether selection can not be cleared.
     * @group Props
     */
    allowEmpty: boolean | undefined;
    /**
     * Callback to invoke on value change.
     * @param {ToggleButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<ToggleButtonChangeEvent>;
    /**
     * Custom icon template.
     * @group Templates
     */
    iconTemplate: Nullable<TemplateRef<any>>;
    /**
     * Custom content template.
     * @group Templates
     */
    contentTemplate: Nullable<TemplateRef<any>>;
    templates: QueryList<PrimeTemplate>;
    checked: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    _componentStyle: ToggleButtonStyle;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    get hasOnLabel(): boolean;
    get hasOffLabel(): boolean;
    get active(): boolean;
    _iconTemplate: TemplateRef<any> | undefined;
    _contentTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleButton, "p-toggleButton, p-togglebutton, p-toggle-button", never, { "onLabel": { "alias": "onLabel"; "required": false; }; "offLabel": { "alias": "offLabel"; "required": false; }; "onIcon": { "alias": "onIcon"; "required": false; }; "offIcon": { "alias": "offIcon"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "size": { "alias": "size"; "required": false; }; "iconPos": { "alias": "iconPos"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "allowEmpty": { "alias": "allowEmpty"; "required": false; }; }, { "onChange": "onChange"; }, ["iconTemplate", "contentTemplate", "templates"], never, true, [{ directive: typeof i1.Ripple; inputs: {}; outputs: {}; }]>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
declare class ToggleButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToggleButtonModule, never, [typeof ToggleButton, typeof i2.SharedModule], [typeof ToggleButton, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToggleButtonModule>;
}

export { TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButton, ToggleButtonClasses, ToggleButtonModule, ToggleButtonStyle };
export type { ToggleButtonChangeEvent, ToggleButtonTemplates };
