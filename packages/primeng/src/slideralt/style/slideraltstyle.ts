import { Injectable } from '@angular/core';
import { style as slider_style } from '@primeuix/styles/slider';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
${slider_style}

/* slideralt has no 'slideralt' theme preset, so it never loads the slider design tokens
   (--p-slider-*). Pin the visible skeleton with LITERALS (md-dark-indigo oracle) so it renders
   without depending on the slider component's theme variables: track 6px / white-alpha .3 / 4px,
   range + handle #526ED3, handle 14px round, absolute range/handle inside a relative track. */
.p-slider {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    border: 0 none;
    border-radius: 4px;
}
.p-slider.p-slider-horizontal {
    height: 6px;
}
.p-slider.p-slider-vertical {
    width: 6px;
}
.p-slider .p-slider-range,
.p-slider .p-slider-handle {
    position: absolute;
    display: block;
}
.p-slider .p-slider-range {
    background: #526ED3;
    border-radius: 4px;
}
.p-slider.p-slider-horizontal .p-slider-range {
    top: 0;
    height: 100%;
}
.p-slider.p-slider-vertical .p-slider-range {
    bottom: 0;
    left: 0;
    width: 100%;
}
.p-slider .p-slider-handle {
    width: 14px;
    height: 14px;
    background: #526ED3;
    border: 0 none;
    border-radius: 50%;
}
.p-slider.p-slider-horizontal .p-slider-handle {
    top: 50%;
    margin-top: -7px;
    margin-left: -7px;
}
.p-slider.p-slider-vertical .p-slider-handle {
    left: 50%;
    margin-left: -7px;
    margin-bottom: -7px;
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
