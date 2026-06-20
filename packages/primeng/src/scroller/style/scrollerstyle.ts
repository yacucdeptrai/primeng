import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const css = /*css*/ `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

/* Thin scrollbar skin shared across overlay/scroll surfaces (v21 selectors).
   #424242/#646464 have no theme token — kept as the legacy oracle literals. */
.p-select-overlay::-webkit-scrollbar,
.p-multiselect-overlay::-webkit-scrollbar,
.p-autocomplete-overlay::-webkit-scrollbar,
.p-autocomplete-multiple-nowrap > .p-autocomplete-input-multiple::-webkit-scrollbar,
.p-dialog-content::-webkit-scrollbar,
.p-textarea::-webkit-scrollbar,
.p-scroller::-webkit-scrollbar,
.p-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
.p-select-overlay::-webkit-scrollbar-track,
.p-multiselect-overlay::-webkit-scrollbar-track,
.p-autocomplete-overlay::-webkit-scrollbar-track,
.p-autocomplete-multiple-nowrap > .p-autocomplete-input-multiple::-webkit-scrollbar-track,
.p-dialog-content::-webkit-scrollbar-track,
.p-textarea::-webkit-scrollbar-track,
.p-scroller::-webkit-scrollbar-track,
.p-scrollbar::-webkit-scrollbar-track {
    background: #424242;
    border-radius: 3px;
}
.p-select-overlay::-webkit-scrollbar-thumb,
.p-multiselect-overlay::-webkit-scrollbar-thumb,
.p-autocomplete-overlay::-webkit-scrollbar-thumb,
.p-autocomplete-multiple-nowrap > .p-autocomplete-input-multiple::-webkit-scrollbar-thumb,
.p-dialog-content::-webkit-scrollbar-thumb,
.p-textarea::-webkit-scrollbar-thumb,
.p-scroller::-webkit-scrollbar-thumb,
.p-scrollbar::-webkit-scrollbar-thumb {
    background: #646464;
    border-radius: 3px;
}
`;

const classes = {
    root: ({ instance }) => [
        'p-virtualscroller',
        {
            'p-virtualscroller-inline': instance.inline,
            'p-virtualscroller-both p-both-scroll': instance.both,
            'p-virtualscroller-horizontal p-horizontal-scroll': instance.horizontal
        }
    ],
    content: 'p-virtualscroller-content',
    spacer: 'p-virtualscroller-spacer',
    loader: ({ instance }) => [
        'p-virtualscroller-loader',
        {
            'p-virtualscroller-loader-mask': !instance.loaderTemplate
        }
    ],
    loadingIcon: 'p-virtualscroller-loading-icon'
};

@Injectable()
export class ScrollerStyle extends BaseStyle {
    name = 'virtualscroller';

    css = css;

    classes = classes;
}

/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * [Live Demo](https://www.primeng.org/scroller/)
 *
 * @module scrollerstyle
 *
 */
export enum ScrollerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-virtualscroller',
    /**
     * Class name of the content element
     */
    content = 'p-virtualscroller-content',
    /**
     * Class name of the spacer element
     */
    spacer = 'p-virtualscroller-spacer',
    /**
     * Class name of the loader element
     */
    loader = 'p-virtualscroller-loader',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-virtualscroller-loading-icon'
}

export interface ScrollerStyle extends BaseStyle {}
