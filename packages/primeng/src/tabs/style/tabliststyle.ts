import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

// Legacy tabmenu modifiers (v21 removed TabMenu; consumers still apply these on
// their tab-nav markup, which renders a `p-tablist`). `-center` centers the nav;
// the base `p-tabmenu` carries a bottom border from the tablist border token.
const tabmenuModifiers = /*css*/ `
    .p-tabmenu-center .p-tablist {
        justify-content: center;
    }
    .p-tabmenu .p-tablist {
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: 0 0 1px 0;
    }
`;

const classes = {
    root: 'p-tablist',
    content: 'p-tablist-content p-tablist-viewport',
    tabList: 'p-tablist-tab-list',
    activeBar: 'p-tablist-active-bar',
    prevButton: 'p-tablist-prev-button p-tablist-nav-button',
    nextButton: 'p-tablist-next-button p-tablist-nav-button'
};

@Injectable()
export class TabListStyle extends BaseStyle {
    name = 'tablist';

    style = tabmenuModifiers;

    classes = classes;
}

/**
 *
 * Tabs facilitates seamless switching between different views.
 *
 * [Live Demo](https://www.primeng.org/tabs/)
 *
 * @module tabliststyle
 *
 */

export enum TabListClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tablist',
    /**
     * Class name of the content element
     */
    content = 'p-tablist-content',
    /**
     * Class name of the tabs element
     */
    tabList = 'p-tablist-tab-list',
    /**
     * Class name of the activebar element
     */
    activeBar = 'p-tablist-active-bar',
    /**
     * Class name of the previous button element
     */
    prevButton = 'p-tablist-prev-button',
    /**
     * Class name of the next button element
     */
    nextButton = 'p-tablist-next-button'
}

export interface TabListStyle extends BaseStyle {}
