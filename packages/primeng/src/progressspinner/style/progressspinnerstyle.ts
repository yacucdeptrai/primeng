import { Injectable } from '@angular/core';
import { style as progressspinner_style } from '@primeuix/styles/progressspinner';
import { BaseStyle } from 'primeng/base';

// single-stroke severity variants (override the base 4-color cycle):
// default solid white, a token-driven color via --p-spinner-color, and a white preset.
// no theme token for a fixed-stroke override -> kept as literals.
const variantStyle = /*css*/ `
    .p-progressspinner .p-progressspinner-circle {
        stroke: #FFFFFF;
        animation-name: p-progressspinner-dash;
    }
    .p-progress-spinner-color .p-progressspinner-circle {
        stroke: var(--p-spinner-color);
        animation-name: p-progressspinner-dash;
    }
    .p-progress-spinner-white {
        --p-spinner-color: #FFFFFF;
    }
`;

const style = progressspinner_style + variantStyle;

const classes = {
    root: () => ['p-progressspinner'],
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

@Injectable()
export class ProgressSpinnerStyle extends BaseStyle {
    name = 'progressspinner';

    style = style;

    classes = classes;
}

/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primeng.org/progressspinner)
 *
 * @module progressspinnerstyle
 *
 */
export enum ProgressSpinnerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-progressspinner',
    /**
     * Class name of the spin element
     */
    spin = 'p-progressspinner-spin',
    /**
     * Class name of the circle element
     */
    circle = 'p-progressspinner-circle'
}

export interface ProgressSpinnerStyle extends BaseStyle {}
