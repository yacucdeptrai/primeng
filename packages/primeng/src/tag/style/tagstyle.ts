import { Injectable } from '@angular/core';
import { style } from '@primeuix/styles/tag';
import { BaseStyle } from 'primeng/base';

// Anchor wrapper for the `link` input: display:contents keeps the host flexbox
// governing icon/label directly, while the <a> is a transparent navigation target.
const linkStyle = /*css*/ `
    .p-tag-link {
        display: contents;
        color: inherit;
        text-decoration: none;
    }
`;

const classes = {
    root: ({ instance }) => [
        'p-tag p-component',
        {
            'p-tag-info': instance.severity === 'info',
            'p-tag-success': instance.severity === 'success',
            'p-tag-warn': instance.severity === 'warn',
            'p-tag-danger': instance.severity === 'danger',
            'p-tag-secondary': instance.severity === 'secondary',
            'p-tag-contrast': instance.severity === 'contrast',
            'p-tag-rounded': instance.rounded
        }
    ],
    icon: 'p-tag-icon',
    label: 'p-tag-label',
    link: 'p-tag-link'
};

@Injectable()
export class TagStyle extends BaseStyle {
    name = 'tag';

    style = style + linkStyle;

    classes = classes;
}

/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.primeng.org/tag)
 *
 * @module tagstyle
 *
 */
export enum TagClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tag',
    /**
     * Class name of the icon element
     */
    icon = 'p-tag-icon',
    /**
     * Class name of the label element
     */
    label = 'p-tag-label'
}

export interface TagStyle extends BaseStyle {}
