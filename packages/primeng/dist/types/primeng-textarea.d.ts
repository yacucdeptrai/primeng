import * as i0 from '@angular/core';
import { OnInit, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgModel, NgControl } from '@angular/forms';
import { BaseComponent } from 'primeng/basecomponent';
import { Subscription } from 'rxjs';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.primeng.org/textarea/)
 *
 * @module textareastyle
 *
 */
declare enum TextareaClasses {
    /**
     * Class name of the root element
     */
    root = "p-textarea"
}
declare class TextareaStyle extends BaseStyle {
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
            'p-textarea-resizable ': any;
            'p-invalid': any;
            'p-variant-filled': boolean;
            'p-textarea-fluid': any;
        })[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TextareaStyle>;
}
interface TextareaStyle extends BaseStyle {
}

/**
 * Textarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
declare class Textarea extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
    ngModel: NgModel;
    control: NgControl;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Spans 100% width of the container when enabled.
     * @group Props
     */
    fluid: boolean;
    /**
     * Defines the size of the component.
     * @group Props
     */
    pSize: 'large' | 'small';
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize: EventEmitter<Event | {}>;
    filled: boolean | undefined;
    cachedScrollHeight: number | undefined;
    ngModelSubscription: Subscription | undefined;
    ngControlSubscription: Subscription | undefined;
    _componentStyle: TextareaStyle;
    constructor(ngModel: NgModel, control: NgControl);
    ngOnInit(): void;
    get hasFluid(): boolean;
    ngAfterViewInit(): void;
    onInput(e: Event): void;
    updateFilledState(): void;
    resize(event?: Event): void;
    updateState(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Textarea, [{ optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Textarea, "[pTextarea]", never, { "autoResize": { "alias": "autoResize"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "pSize": { "alias": "pSize"; "required": false; }; }, { "onResize": "onResize"; }, never, never, true, never>;
    static ngAcceptInputType_autoResize: unknown;
    static ngAcceptInputType_fluid: unknown;
}
declare class TextareaModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TextareaModule, never, [typeof Textarea], [typeof Textarea]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TextareaModule>;
}

export { Textarea, TextareaClasses, TextareaModule, TextareaStyle };
