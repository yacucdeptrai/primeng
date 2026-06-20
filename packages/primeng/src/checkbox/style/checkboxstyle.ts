import { Injectable } from '@angular/core';
import { style as checkbox_style } from '@primeuix/styles/checkbox';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${checkbox_style}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox-label {
        cursor: pointer;
    }

    /* Label beside box — gated on the .p-checkbox-has-label marker the component emits when a
       [label] is set (static class, NOT :has() — iOS Safari <15.4 lacks :has; the iOS-13 floor).
       The ktt45678 <label> sits inside the box-sized v21 host, so the 20x20 host clamp ovals the
       box and wraps the label. With a label, release the clamp: host is a real container, box is
       fixed-size and never shrinks, label sits inline beside it. Label-less checkboxes keep the clamp. */
    .p-checkbox.p-checkbox-has-label {
        align-items: center;
        flex-wrap: wrap;
        width: auto;
        height: auto;
        vertical-align: middle;
    }
    .p-checkbox.p-checkbox-has-label .p-checkbox-box {
        flex: 0 0 auto; /* never shrink — keeps the box square, not an oval */
        display: inline-flex;
        vertical-align: middle;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }
    .p-checkbox.p-checkbox-has-label .p-checkbox-label {
        display: inline-block; /* beside the box even under block-display hosts */
        vertical-align: middle;
        margin-left: 0.5rem;
        line-height: 1.25;
        min-width: 0; /* allow wrap instead of overflow in narrow rows */
    }
    /* Full-width single-row variant (host marked .tw-w-full / .p-checkbox-full): [box][label][trailing
       icon at the right]. The :has rule above forces width:auto + wrap; restore the one row. */
    .p-checkbox.tw-w-full,
    .p-checkbox.p-checkbox-full {
        width: 100%;
        flex-wrap: nowrap;
    }

    /* Checked fill + tick on the v21 HOST marker (.p-checkbox-checked) — daplex host-glyph
       convention (Material-Symbols), the approved resolution over the Material base border-tick.
       The Material base (in checkbox_style above) draws a :before border-tick on the host marker
       and display:none's the icon; suppress that and render the icon glyph centred in a filled box. */
    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }
    .p-checkbox-checked .p-checkbox-box:before {
        content: none; /* drop the Material base CSS border-tick — the glyph below is the tick */
    }
    .p-checkbox-checked .p-checkbox-icon {
        display: inline-flex; /* un-hide (Material base hides it); centre the glyph in the box */
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        position: static;
        transform: none;
        font-size: 16px;
        line-height: 1;
        --wght: 700; /* bold Material-Symbols check (the .ms font-variation-settings reads --wght) */
        color: dt('checkbox.icon.checked.color'); /* dark glyph on the indigo checked box (token resolves to primary.contrast). */
    }

    /* Box-only focus border, no ring — the box border turns indigo on focus, matching the
       formField focus convention; the preset pins focus.ring:none so no halo. */
    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box,
    .p-checkbox:not(.p-disabled):focus-within .p-checkbox-box {
        box-shadow: none;
        outline: 0 none;
        outline-offset: 0;
        border-color: dt('checkbox.checked.focus.border.color');
    }
    /* The Material base sizes a host-level focus/hover state-layer box-shadow for a 20px square
       host; on a widened label row it smears into a band. Drop the host halo when a label is present. */
    .p-checkbox.p-checkbox-has-label {
        box-shadow: none;
    }
`;

const classes = {
    root: ({ instance }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked p-highlight': instance.checked,
            'p-checkbox-has-label': !!instance.label,
            'p-disabled': instance.$disabled(),
            'p-invalid': instance.invalid(),
            'p-variant-filled': instance.$variant() === 'filled',
            'p-checkbox-sm p-inputfield-sm': instance.size() === 'small',
            'p-checkbox-lg p-inputfield-lg': instance.size() === 'large'
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

@Injectable()
export class CheckboxStyle extends BaseStyle {
    name = 'checkbox';

    style = style;

    classes = classes;
}

/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primeng.org/checkbox/)
 *
 * @module checkboxstyle
 *
 */
export enum CheckboxClasses {
    /**
     * Class name of the root element
     */
    root = 'p-checkbox',
    /**
     * Class name of the box element
     */
    box = 'p-checkbox-box',
    /**
     * Class name of the input element
     */
    input = 'p-checkbox-input',
    /**
     * Class name of the icon element
     */
    icon = 'p-checkbox-icon'
}

export interface CheckboxStyle extends BaseStyle {}
