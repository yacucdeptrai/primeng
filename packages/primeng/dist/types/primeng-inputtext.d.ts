import * as i0 from '@angular/core';
import { DoCheck, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BaseComponent } from 'primeng/basecomponent';
import { Nullable } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.primeng.org/inputtext/)
 *
 * @module inputtextstyle
 *
 */
declare enum InputTextClasses {
    /**
     * The class of root element
     */
    root = "p-inputtext"
}
declare class InputTextStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance, props }: {
            instance: any;
            props: any;
        }) => (string | {
            'p-filled': any;
            'p-inputtext-sm': boolean;
            'p-inputtext-lg': boolean;
            'p-invalid': any;
            'p-variant-filled': boolean;
            'p-inputtext-fluid': any;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InputTextStyle>;
}
interface InputTextStyle extends BaseStyle {
}

/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
declare class InputText extends BaseComponent implements DoCheck, AfterViewInit {
    ngModel: NgModel;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Spans 100% width of the container when enabled.
     * @group Props
     */
    fluid: boolean | undefined;
    /**
     * Defines the size of the component.
     * @group Props
     */
    pSize: 'large' | 'small';
    filled: Nullable<boolean>;
    _componentStyle: InputTextStyle;
    get hasFluid(): boolean;
    constructor(ngModel: NgModel);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    onInput(): void;
    updateFilledState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputText, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputText, "[pInputText]", never, { "variant": { "alias": "variant"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "pSize": { "alias": "pSize"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_fluid: unknown;
}
declare class InputTextModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputTextModule, never, [typeof InputText], [typeof InputText]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputTextModule>;
}

export { InputText, InputTextClasses, InputTextModule, InputTextStyle };
