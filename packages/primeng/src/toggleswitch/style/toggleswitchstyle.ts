import { Injectable } from '@angular/core';
import { style as toggleswitch_style } from '@primeuix/styles/toggleswitch';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${toggleswitch_style}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    /* ktt45678 [label]/[icon] support: lay icon + label + switch in one row so the
       re-added <label> doesn't wrap or overlap the slider (v17 "container display:flex").
       v21 sizes the switch on the root, so the slider re-asserts its own width. */
    .p-toggleswitch {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        width: auto;
        height: auto;
        vertical-align: middle;
    }
    .p-toggleswitch .p-toggleswitch-slider {
        flex: 0 0 auto;
        position: relative;
        width: var(--p-toggleswitch-width, 2.5rem);
    }
    .p-toggleswitch .p-toggleswitch-label {
        flex: 0 1 auto;
        line-height: 1.5;
        cursor: pointer;
    }
    .p-toggleswitch.p-disabled .p-toggleswitch-label {
        cursor: default;
    }
    /* iOS 13 flex-gap fallback */
    @supports not (gap: 0.5rem) {
        .p-toggleswitch > * + * { margin-left: 0.5rem; }
    }
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance }) => [
        'p-toggleswitch p-component',
        {
            'p-toggleswitch p-component': true,
            'p-toggleswitch-checked': instance.checked(),
            'p-disabled': instance.$disabled(),
            'p-invalid': instance.invalid()
        }
    ],

    input: 'p-toggleswitch-input',
    slider: 'p-toggleswitch-slider',
    handle: 'p-toggleswitch-handle'
};

@Injectable()
export class ToggleSwitchStyle extends BaseStyle {
    name = 'toggleswitch';

    style = style;

    classes = classes;

    inlineStyles = inlineStyles;
}

/**
 *
 * ToggleSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primeng.org/toggleswitch/)
 *
 * @module toggleswitchstyle
 *
 */
export enum ToggleSwitchClasses {
    /**
     * Class name of the root element
     */
    root = 'p-toggleswitch',
    /**
     * Class name of the input element
     */
    input = 'p-toggleswitch-input',
    /**
     * Class name of the slider element
     */
    slider = 'p-toggleswitch-slider'
}

export interface ToggleSwitchStyle extends BaseStyle {}
