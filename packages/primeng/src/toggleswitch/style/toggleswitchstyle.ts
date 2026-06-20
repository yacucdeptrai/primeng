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

    /* Full-width settings-row MODIFIER: label on the left, slider pushed to the
       right margin. Opt-in via .p-toggleswitch--has-label on the host (set by the
       consumer when a [label] is rendered) — the base inline-flex shrinks to
       content, which is wrong for a settings list where each row spans the width.
       iOS 13 lacks :has(), so this is a static marker class, not a :has() match. */
    .p-toggleswitch--has-label {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 1rem;
    }
    .p-toggleswitch--has-label .p-toggleswitch-label {
        flex: 1 1 auto;
    }
    /* iOS 13 flex-gap fallback */
    @supports not (gap: 1rem) {
        .p-toggleswitch--has-label > * + * { margin-left: 1rem; }
    }

    /* Slider track + knob + checked visuals from colorScheme.dark tokens.
       v17 oracle styled .p-inputswitch-slider; v21 emits .p-toggleswitch-slider,
       so the track/knob/checked fills were never painted. Tokens resolve to the
       Material dark ramp (track=surface.700, knob=handle.background,
       checked=primary.color). */
    .p-toggleswitch .p-toggleswitch-slider {
        background: dt('toggleswitch.background');
        border-radius: dt('toggleswitch.border.radius');
        width: 3rem;
        height: 1.75rem;
        transition: background-color 0.2s, box-shadow 0.2s;
    }
    .p-toggleswitch .p-toggleswitch-slider:before {
        content: '';
        position: absolute;
        background: dt('toggleswitch.handle.background');
        width: 1.25rem;
        height: 1.25rem;
        left: 0.25rem;
        top: 50%;
        margin-top: -0.625rem;
        border-radius: dt('toggleswitch.handle.border.radius');
        transition: transform 0.2s;
    }
    .p-toggleswitch:not(.p-disabled):hover .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
    }
    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
    }
    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
        background: dt('toggleswitch.handle.background');
        transform: translateX(1.25rem);
    }
    .p-toggleswitch.p-toggleswitch-checked:not(.p-disabled):hover .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
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
