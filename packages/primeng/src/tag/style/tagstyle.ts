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

// secondary severity interactive states (base style paints bg/color from tokens;
// hover/focus/active grays have no token, kept as dark literals)
const secondaryStyle = /*css*/ `
    .p-tag.p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
        transition: background-color 0.2s;
    }
    .p-tag.p-tag-secondary:hover,
    .p-tag.p-tag-secondary:focus {
        background: #575757;
    }
    .p-tag.p-tag-secondary:active {
        background: #7A7A7A;
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

    style = style + linkStyle + secondaryStyle;

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
