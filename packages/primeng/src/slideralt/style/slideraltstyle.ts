import { Injectable } from '@angular/core';
import { style as slider_style } from '@primeuix/styles/slider';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
${slider_style}

/* slideralt writes %-geometry on the range/handle via [ngStyle] but never wires the BaseStyle
   inlineStyles, so without an explicit position they stay static and collapse to 0. The base carries
   the orientation geometry (RTL-safe logical props); assert position only — don't duplicate geometry. */
.p-slider .p-slider-range,
.p-slider .p-slider-handle {
    position: absolute;
    display: block;
}
`;

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ instance }) => [
        'p-slider p-component',
        {
            'p-disabled': instance.disabled,
            'p-slider-horizontal': instance.orientation === 'horizontal',
            'p-slider-vertical': instance.orientation === 'vertical',
            'p-slider-animate': instance.animate
        }
    ],
    range: 'p-slider-range',
    handle: 'p-slider-handle'
};

// Reuses the slider token preset; @primeuix/styles/slideralt does not exist.
@Injectable()
export class SliderAltStyle extends BaseStyle {
    name = 'slideralt';

    style = style;

    classes = classes;

    inlineStyles = inlineStyles;
}

export interface SliderAltStyle extends BaseStyle {}
