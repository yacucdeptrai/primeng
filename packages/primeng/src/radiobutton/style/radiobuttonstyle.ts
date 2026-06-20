import { Injectable } from '@angular/core';
import { style as radiobutton_style } from '@primeuix/styles/radiobutton';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${radiobutton_style}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton:not([data-p-disabled='true']) {
        cursor: pointer;
    }

    .p-radiobutton-label:not(.p-disabled) {
        cursor: pointer;
    }

    /* Label-beside-box layout (gated on label-present, mirrors Checkbox).
       The ktt45678 fork renders <label> INSIDE the host; the styled root clamps the host
       to control width/height, crushing the label into a vertical wrap with an oval box.
       When a label is present (.p-radiobutton-label), make the host a real container:
       release the clamp, keep the box circular (never shrink), float the label inline. */
    .p-radiobutton.p-radiobutton-has-label {
        align-items: center;
        flex-wrap: wrap;
        width: auto;
        height: auto;
    }

    .p-radiobutton.p-radiobutton-has-label .p-radiobutton-box {
        flex: 0 0 auto; /* never shrink — keeps the box circular, not an oval */
        display: inline-flex;
        vertical-align: middle;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-label {
        display: inline-block; /* sit beside the box under block-display hosts */
        vertical-align: middle;
        margin-inline-start: 0.5rem; /* replaces flex gap so it works in block hosts too */
        line-height: 1.25;
        min-width: 0; /* allow the label to wrap instead of overflowing narrow rows */
    }

    /* Box-only focus: indigo border, no ring/halo.
       focus.border.color already resolves to the indigo primary via the focus-visible
       path in styled; remove the host state-layer halo (the Material preset css paints a
       wide box-shadow ring sized for the 20x20 host that smears on a label-bearing row). */
    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible),
    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible),
    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover),
    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
        box-shadow: none;
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: none;
        outline: 0 none;
        outline-offset: 0;
    }
`;

const classes = {
    root: ({ instance }) => [
        'p-radiobutton p-component',
        {
            'p-radiobutton-checked': instance.checked,
            'p-radiobutton-has-label': !!instance.label,
            'p-disabled': instance.$disabled(),
            'p-invalid': instance.invalid(),
            'p-variant-filled': instance.$variant() === 'filled',
            'p-radiobutton-sm p-inputfield-sm': instance.size() === 'small',
            'p-radiobutton-lg p-inputfield-lg': instance.size() === 'large'
        }
    ],
    box: 'p-radiobutton-box',
    input: 'p-radiobutton-input',
    icon: 'p-radiobutton-icon'
};

@Injectable()
export class RadioButtonStyle extends BaseStyle {
    name = 'radiobutton';

    style = style;

    classes = classes;
}

/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primeng.org/radiobutton/)
 *
 * @module radiobuttonstyle
 *
 */
export enum RadioButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-radiobutton',
    /**
     * Class name of the box element
     */
    box = 'p-radiobutton-box',
    /**
     * Class name of the input element
     */
    input = 'p-radiobutton-input',
    /**
     * Class name of the icon element
     */
    icon = 'p-radiobutton-icon'
}

export interface RadioButtonStyle extends BaseStyle {}
