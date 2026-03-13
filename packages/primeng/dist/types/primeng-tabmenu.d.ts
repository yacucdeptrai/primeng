import * as i0 from '@angular/core';
import { AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, EventEmitter, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as i1 from 'primeng/api';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { Nullable } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 *
 * TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
 *
 * [Live Demo](https://www.primeng.org/tabmenu/)
 *
 * @module tabmenustyle
 *
 */
declare enum TabMenuClasses {
    /**
     * Class name of the root element
     */
    root = "p-tabmenu",
    /**
     * Class name of the tablist element
     */
    tablist = "p-tabmenu-tablist",
    /**
     * Class name of the item element
     */
    item = "p-tabmenu-item",
    /**
     * Class name of the item link element
     */
    itemLink = "p-tabmenu-item-link",
    /**
     * Class name of the item icon element
     */
    itemIcon = "p-tabmenu-item-icon",
    /**
     * Class name of the item label element
     */
    itemLabel = "p-tabmenu-item-label",
    /**
     * Class name of the inkbar element
     */
    inkbar = "p-tabmenu-ink-bar"
}
declare class TabMenuStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabMenuStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TabMenuStyle>;
}
interface TabMenuStyle extends BaseStyle {
}

/**
 * TabMenu is a navigation component that displays items as tab headers.
 * @group Components
 */
declare class TabMenu extends BaseComponent implements AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy {
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value: MenuItem[] | undefined);
    get model(): MenuItem[] | undefined;
    /**
     * Defines the default active menuitem
     * @group Props
     */
    set activeItem(value: MenuItem | undefined);
    get activeItem(): MenuItem | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @group Props
     */
    scrollable: boolean | undefined;
    /**
     * Defines if popup mode enabled.
     */
    popup: boolean | undefined;
    /**
     * Inline style of the element.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Event fired when a tab is selected.
     * @param {MenuItem} item - Menu item.
     * @group Emits
     */
    activeItemChange: EventEmitter<MenuItem>;
    content: Nullable<ElementRef>;
    navbar: Nullable<ElementRef>;
    inkbar: Nullable<ElementRef>;
    prevBtn: Nullable<ElementRef>;
    nextBtn: Nullable<ElementRef>;
    tabLink: Nullable<QueryList<ElementRef>>;
    tab: Nullable<QueryList<ElementRef>>;
    /**
     * Template of the menu item.
     * @group Templates
     */
    itemTemplate: Nullable<TemplateRef<any>>;
    /**
     * Template of the previous icon.
     * @group Templates
     */
    previousIconTemplate: Nullable<TemplateRef<any>>;
    /**
     * Template of the next icon.
     * @group Templates
     */
    nextIconTemplate: Nullable<TemplateRef<any>>;
    templates: QueryList<PrimeTemplate> | undefined;
    _itemTemplate: TemplateRef<any> | undefined;
    _nextIconTemplate: TemplateRef<any> | undefined;
    _previousIconTemplate: TemplateRef<any> | undefined;
    tabChanged: boolean | undefined;
    backwardIsDisabled: boolean;
    forwardIsDisabled: boolean;
    private timerIdForInitialAutoScroll;
    _focusableItems: MenuItem[] | undefined | any;
    _model: MenuItem[] | undefined;
    _activeItem: MenuItem | undefined;
    focusedItemInfo: i0.WritableSignal<any>;
    router: Router;
    route: ActivatedRoute;
    _componentStyle: TabMenuStyle;
    get focusableItems(): any;
    constructor();
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    isActive(item: MenuItem): boolean;
    getItemProp(item: any, name: string): string;
    visible(item: any): any;
    disabled(item: any): any;
    onMenuItemFocus(item: any): void;
    itemClick(event: Event, item: MenuItem): void;
    onKeydownItem(event: any, index: any, item: any): void;
    onTabKeyDown(tabLinks: any): void;
    changeFocusedTab(event: KeyboardEvent, element: HTMLLIElement, index: number): void;
    findNextItem(items: any, index: any): any;
    findPrevItem(items: any, index: any): any;
    updateInkBar(): void;
    getVisibleButtonWidths(): any;
    updateButtonState(): void;
    updateScrollBar(index: number): void;
    onScroll(event: Event): void;
    navBackward(): void;
    navForward(): void;
    private initAutoScrollForActiveItem;
    private clearAutoScrollHandler;
    private initButtonState;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabMenu, "p-tabMenu, p-tabmenu", never, { "model": { "alias": "model"; "required": false; }; "activeItem": { "alias": "activeItem"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "popup": { "alias": "popup"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "activeItemChange": "activeItemChange"; }, ["itemTemplate", "previousIconTemplate", "nextIconTemplate", "templates"], never, true, never>;
    static ngAcceptInputType_scrollable: unknown;
    static ngAcceptInputType_popup: unknown;
}
declare class TabMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TabMenuModule, never, [typeof TabMenu, typeof i1.SharedModule], [typeof TabMenu, typeof i1.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TabMenuModule>;
}

/**
 * Defines valid templates in TabMenu.
 * @group Templates
 */
interface TabMenuTemplates {
    /**
     * Custom template of item.
     * @param {Object} context - item data.
     */
    item(context: {
        /**
         * Item instance.
         */
        $implicit: any;
        /**
         * Item index.
         */
        index: number;
    }): TemplateRef<{
        $implicit: any;
        index: number;
    }>;
    /**
     * Custom template of nexticon.
     */
    nexticon(): TemplateRef<any>;
    /**
     * Custom template of previousicon.
     */
    previousicon(): TemplateRef<any>;
}

export { TabMenu, TabMenuClasses, TabMenuModule, TabMenuStyle };
export type { TabMenuTemplates };
