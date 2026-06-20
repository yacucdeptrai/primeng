import { Injectable } from '@angular/core';
import { style } from '@primeuix/styles/colorpicker';
import { BaseStyle } from 'primeng/base';

const css = /*css*/ `
.p-colorpicker-panel {
    width: 239px;
    height: 282px;
}

.p-colorpicker-color-selector {
    width: 180px;
    height: 180px;
    inset-block-start: 16px;
    inset-inline-start: 16px;
}

.p-colorpicker-color {
    width: 180px;
    height: 180px;
}

.p-colorpicker-hue {
    height: 180px;
    inset-block-start: 16px;
    inset-inline-start: 205px;
}

.p-colorpicker-hue-handle {
    border-radius: 4px;
}

.p-colorpicker-inputvalue {
    position: absolute;
    inset-block-start: 220px;
    inset-inline-start: 16px;
    width: 205px;
    height: 46px;
}
`;

const classes = {
    root: ({ instance }) => ['p-colorpicker p-component', { 'p-colorpicker-overlay': !instance.inline, 'p-colorpicker-dragging': instance.colorDragging || instance.hueDragging }],
    preview: ({ instance }) => ['p-colorpicker-preview', { 'p-disabled': instance.$disabled() }],
    panel: ({ instance }) => [
        'p-colorpicker-panel',
        {
            'p-colorpicker-panel-inline': instance.inline,
            'p-disabled': instance.$disabled()
        }
    ],
    content: 'p-colorpicker-content',
    colorSelector: 'p-colorpicker-color-selector',
    colorBackground: 'p-colorpicker-color-background',
    colorHandle: 'p-colorpicker-color-handle',
    hue: 'p-colorpicker-hue',
    hueHandle: 'p-colorpicker-hue-handle',
    inputValue: 'p-colorpicker-inputvalue p-inputtext'
};

@Injectable()
export class ColorPickerStyle extends BaseStyle {
    name = 'colorpicker';

    style = style;

    css = css;

    classes = classes;
}

/**
 *
 * ColorPicker groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/colorpicker/)
 *
 * @module colorpickerstyle
 *
 */
export enum ColorPickerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-colorpicker',
    /**
     * Class name of the preview element
     */
    preview = 'p-colorpicker-preview',
    /**
     * Class name of the panel element
     */
    panel = 'p-colorpicker-panel',
    /**
     * Class name of the color selector element
     */
    colorSelector = 'p-colorpicker-color-selector',
    /**
     * Class name of the color background element
     */
    colorBackground = 'p-colorpicker-color-background',
    /**
     * Class name of the color handle element
     */
    colorHandle = 'p-colorpicker-color-handle',
    /**
     * Class name of the hue element
     */
    hue = 'p-colorpicker-hue',
    /**
     * Class name of the hue handle element
     */
    hueHandle = 'p-colorpicker-hue-handle',
    /**
     * Class name of the in-panel hex input element
     */
    inputValue = 'p-colorpicker-inputvalue'
}

export interface ColorPickerStyle extends BaseStyle {}
