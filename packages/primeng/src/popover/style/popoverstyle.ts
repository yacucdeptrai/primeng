import { Injectable } from '@angular/core';
import { style as popover_style } from '@primeuix/styles/popover';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${popover_style}

    /* no-arrow modifier (v21 rename of .p-overlaypanel-no-arrow) */
    .p-popover.p-popover-no-arrow {
        margin-top: 0;
        margin-bottom: 0;
    }

    .p-popover.p-popover-no-arrow:before,
    .p-popover.p-popover-no-arrow:after {
        border: none;
        margin-left: initial;
    }
`;

const inlineStyles = {
    root: () => ({ position: 'absolute' })
};

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

@Injectable()
export class PopoverStyle extends BaseStyle {
    name = 'popover';

    style = style;

    classes = classes;

    inlineStyles = inlineStyles;
}
