import { Injectable } from '@angular/core';
import { style as baseStyle } from '@primeuix/styles/iconfield';
import { BaseStyle } from 'primeng/base';

/* Vertical-center the icon regardless of glyph line-box (Material Symbols .ms glyphs
   have no icon.size token, so the base margin-top math mis-centers). transform centering
   supersedes the base margin-top; covers the markup migrated from v17 .p-input-icon-left. */
const style = `
${baseStyle}
.p-iconfield > .p-inputicon {
    margin-top: 0;
    transform: translateY(-50%);
}
`;

const classes = {
    root: ({ instance }) => [
        'p-iconfield',
        {
            'p-iconfield-left': instance.iconPosition == 'left',
            'p-iconfield-right': instance.iconPosition == 'right'
        }
    ]
};

@Injectable()
export class IconFieldStyle extends BaseStyle {
    name = 'iconfield';

    style = style;

    classes = classes;
}

/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primeng.org/iconfield/)
 *
 * @module iconfieldstyle
 *
 */
export enum IconFieldClasses {
    /**
     * Class name of the root element
     */
    root = 'p-iconfield'
}

export interface IconFieldStyle extends BaseStyle {}
