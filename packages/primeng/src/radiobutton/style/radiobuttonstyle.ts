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

    /* Material paints the radio focus/hover state-layer as a box-shadow halo on the HOST
       (.p-radiobutton: 0 0 1px 10px ...). For a 20px box-only radio that's a tight circle,
       but a label-bearing radio widens the host (label beside the box), smearing the halo
       into a wide oval across the whole option. For labeled radios ONLY, kill the host halo
       and re-anchor the SAME state layer onto the fixed 20px box. The extra .p-radiobutton-has-label
       class lifts specificity above the preset css so this wins regardless of injection order.
       Non-label radios keep the preset's host halo (correct, since their host is 20px). */
    .p-radiobutton.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:hover),
    .p-radiobutton.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:focus-visible),
    .p-radiobutton-checked.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:hover),
    .p-radiobutton-checked.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
        box-shadow: none;
    }
    .p-radiobutton.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
    }
    .p-radiobutton.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);
    }
    .p-radiobutton-checked.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 92%);
    }
    .p-radiobutton-checked.p-radiobutton-has-label:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 84%);
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
