import * as i0 from '@angular/core';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, ElementRef, TemplateRef, QueryList } from '@angular/core';
import * as i1 from 'primeng/api';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { Nullable } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primeng.org/dock/)
 *
 * @module dockstyle
 *
 */
declare enum DockClasses {
    /**
     * Class name of the root element
     */
    root = "p-dock",
    /**
     * Class name of the list container element
     */
    listContainer = "p-dock-list-container",
    /**
     * Class name of the list element
     */
    list = "p-dock-list",
    /**
     * Class name of the item element
     */
    item = "p-dock-item",
    /**
     * Class name of the item content element
     */
    itemContent = "p-dock-item-content",
    /**
     * Class name of the item link element
     */
    itemLink = "p-dock-item-link",
    /**
     * Class name of the item icon element
     */
    itemIcon = "p-dock-item-icon"
}
declare class DockStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance, props }: {
            instance: any;
            props: any;
        }) => (string | {
            'p-dock-mobile': any;
        })[];
        listContainer: string;
        list: string;
        item: ({ instance, processedItem, id }: {
            instance: any;
            processedItem: any;
            id: any;
        }) => (string | {
            'p-focus': any;
            'p-disabled': any;
        })[];
        itemContent: string;
        itemLink: string;
        itemIcon: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DockStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DockStyle>;
}
interface DockStyle extends BaseStyle {
}

/**
 * Dock is a navigation component consisting of menuitems.
 * @group Components
 */
declare class Dock extends BaseComponent implements AfterContentInit {
    cd: ChangeDetectorRef;
    /**
     * Current id state as a string.
     * @group Props
     */
    id: string | undefined;
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
     * MenuModel instance to define the action items.
     * @group Props
     */
    model: MenuItem[] | undefined | null;
    /**
     * Position of element.
     * @group Props
     */
    position: 'bottom' | 'top' | 'left' | 'right';
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Defines a string that labels the dropdown button for accessibility.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Callback to execute when button is focused.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to invoke when the component loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    listViewChild: Nullable<ElementRef>;
    currentIndex: number;
    tabindex: number;
    focused: boolean;
    focusedOptionIndex: number;
    _componentStyle: DockStyle;
    get focusedOptionId(): number;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    itemTemplate: TemplateRef<any> | undefined;
    _itemTemplate: TemplateRef<any> | undefined;
    getItemId(item: any, index: any): any;
    getItemProp(processedItem: any, name: any): any;
    disabled(item: any): any;
    isItemActive(id: any): boolean;
    onListMouseLeave(): void;
    onItemMouseEnter(index: number): void;
    onItemClick(e: Event, item: MenuItem): void;
    onListFocus(event: any): void;
    onListBlur(event: any): void;
    onListKeyDown(event: any): void;
    onArrowDownKey(): void;
    onArrowUpKey(): void;
    onHomeKey(): void;
    onEndKey(): void;
    onSpaceKey(): void;
    findNextOptionIndex(index: any): number;
    changeFocusedOptionIndex(index: any): void;
    findPrevOptionIndex(index: any): number;
    get containerClass(): {
        [x: string]: boolean;
    };
    isClickableRouterLink(item: any): boolean;
    itemClass(item: any, index: number): {
        'p-dock-item': boolean;
        'p-focus': boolean;
        'p-disabled': any;
    };
    templates: QueryList<PrimeTemplate> | undefined;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Dock, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Dock, "p-dock", never, { "id": { "alias": "id"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "model": { "alias": "model"; "required": false; }; "position": { "alias": "position"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["itemTemplate", "templates"], never, true, never>;
}
declare class DockModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DockModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DockModule, never, [typeof Dock, typeof i1.SharedModule], [typeof Dock, typeof i1.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DockModule>;
}

/**
 * Defines valid templates in Dock.
 * @group Templates
 */
interface DockTemplates {
    /**
     * Custom template of item.
     * @param {Object} context - item data.
     */
    item(context: {
        /**
         * Item instance.
         */
        $implicit: any;
    }): TemplateRef<{
        $implicit: any;
    }>;
}

export { Dock, DockClasses, DockModule, DockStyle };
export type { DockTemplates };
