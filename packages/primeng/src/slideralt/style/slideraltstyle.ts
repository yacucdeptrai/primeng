import { Injectable } from '@angular/core';
import { style } from '@primeuix/styles/slider';
import { BaseStyle } from 'primeng/base';

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
