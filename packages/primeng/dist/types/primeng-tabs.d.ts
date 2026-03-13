import * as _angular_core from '@angular/core';
import { AfterViewInit, AfterContentInit, TemplateRef, QueryList, ElementRef, OnDestroy } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';
import { PrimeTemplate } from 'primeng/api';
import * as i1 from 'primeng/ripple';

/**
 *
 * Tabs facilitates seamless switching between different views.
 *
 * [Live Demo](https://www.primeng.org/tabs/)
 *
 * @module tabsstyle
 *
 */
declare enum TabsClasses {
    /**
     * Class name of the root element
     */
    root = "p-tabs",
    /**
     * Class name of the wrapper element
     */
    list = "p-tablist",
    /**
     * Class name of the content element
     */
    content = "p-tablist-content",
    /**
     * Class name of the tab list element
     */
    tablist = "p-tablist-tab-list",
    /**
     * Class name of the tab list element
     */
    tab = "p-tab",
    /**
     * Class name of the inkbar element
     */
    inkbar = "p-tablist-active-bar",
    /**
     * Class name of the navigation buttons
     */
    button = "p-tablist-nav-button",
    /**
     * Class name of the tab panels wrapper
     */
    tabpanels = "p-tabpanels",
    /**
     * Class name of the tab panel element
     */
    tabpanel = "p-tabs-panel"
}
declare class TabsStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ props }: {
            props: any;
        }) => (string | {
            'p-tabs-scrollable': any;
        })[];
    };
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabsStyle, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<TabsStyle>;
}
interface TabsStyle extends BaseStyle {
}

/**
 * TabPanels is a helper component for Tabs component.
 * @group Components
 */
declare class TabPanels extends BaseComponent {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabPanels, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TabPanels, "p-tabpanels", never, {}, {}, never, ["*"], true, never>;
}

/**
 * TabPanel is a helper component for Tabs component.
 * @group Components
 */
declare class TabPanel extends BaseComponent {
    pcTabs: any;
    /**
     * Value of the active tab.
     * @defaultValue undefined
     * @group Props
     */
    value: _angular_core.ModelSignal<string | number>;
    id: _angular_core.Signal<string>;
    ariaLabelledby: _angular_core.Signal<string>;
    active: _angular_core.Signal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabPanel, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TabPanel, "p-tabpanel", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, ["*"], true, never>;
}

/**
 * TabList is a helper component for Tabs component.
 * @group Components
 */
declare class TabList extends BaseComponent implements AfterViewInit, AfterContentInit {
    /**
     * A template reference variable that represents the previous icon in a UI component.
     * @type {TemplateRef<any> | undefined}
     * @group Templates
     */
    prevIconTemplate: TemplateRef<any> | undefined;
    /**
     * A template reference variable that represents the next icon in a UI component.
     * @type {TemplateRef<any> | undefined}
     * @group Templates
     */
    nextIconTemplate: TemplateRef<any> | undefined;
    templates: QueryList<PrimeTemplate> | undefined;
    content: ElementRef<HTMLDivElement>;
    prevButton: ElementRef<HTMLButtonElement>;
    nextButton: ElementRef<HTMLButtonElement>;
    inkbar: ElementRef<HTMLSpanElement>;
    tabs: ElementRef<HTMLDivElement>;
    pcTabs: any;
    isPrevButtonEnabled: _angular_core.WritableSignal<boolean>;
    isNextButtonEnabled: _angular_core.WritableSignal<boolean>;
    resizeObserver: ResizeObserver;
    showNavigators: _angular_core.Signal<any>;
    tabindex: _angular_core.Signal<any>;
    scrollable: _angular_core.Signal<any>;
    constructor();
    get prevButtonAriaLabel(): string;
    get nextButtonAriaLabel(): string;
    ngAfterViewInit(): void;
    _prevIconTemplate: TemplateRef<any> | undefined;
    _nextIconTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onScroll(event: Event): void;
    onPrevButtonClick(): void;
    onNextButtonClick(): void;
    updateButtonState(): void;
    updateInkBar(): void;
    getVisibleButtonWidths(): number;
    bindResizeObserver(): void;
    unbindResizeObserver(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabList, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TabList, "p-tablist", never, {}, {}, ["prevIconTemplate", "nextIconTemplate", "templates"], ["*"], true, never>;
}

/**
 * Defines valid properties in Tab component.
 * @group Components
 */
declare class Tab extends BaseComponent implements AfterViewInit, OnDestroy {
    /**
     * Value of tab.
     * @defaultValue undefined
     * @group Props
     */
    value: _angular_core.ModelSignal<string | number>;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     * @group Props
     */
    disabled: _angular_core.InputSignalWithTransform<boolean, unknown>;
    pcTabs: any;
    pcTabList: any;
    el: ElementRef<any>;
    ripple: _angular_core.Signal<boolean>;
    id: _angular_core.Signal<string>;
    ariaControls: _angular_core.Signal<string>;
    active: _angular_core.Signal<boolean>;
    tabindex: _angular_core.Signal<any>;
    mutationObserver: MutationObserver | undefined;
    onFocus(event: FocusEvent): void;
    onClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    onArrowRightKey(event: any): void;
    onArrowLeftKey(event: any): void;
    onHomeKey(event: any): void;
    onEndKey(event: any): void;
    onPageDownKey(event: any): void;
    onPageUpKey(event: any): void;
    onEnterKey(event: any): void;
    findNextTab(tabElement: any, selfCheck?: boolean): any;
    findPrevTab(tabElement: any, selfCheck?: boolean): any;
    findFirstTab(): any;
    findLastTab(): any;
    changeActiveValue(): void;
    changeFocusedTab(event: any, element: any): void;
    scrollInView(element: any): void;
    bindMutationObserver(): void;
    unbindMutationObserver(): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Tab, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Tab, "p-tab", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, ["*"], true, [{ directive: typeof i1.Ripple; inputs: {}; outputs: {}; }]>;
}

/**
 * Tabs facilitates seamless switching between different views.
 * @group Components
 */
declare class Tabs extends BaseComponent {
    /**
     * Value of the active tab.
     * @defaultValue undefined
     * @group Props
     */
    value: _angular_core.ModelSignal<string | number>;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     * @type boolean
     * @defaultValue false
     * @group Props
     */
    scrollable: _angular_core.InputSignalWithTransform<boolean, unknown>;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @type boolean
     * @defaultValue false
     * @group Props
     */
    lazy: _angular_core.InputSignalWithTransform<boolean, unknown>;
    /**
     * When enabled, the focused tab is activated.
     * @type boolean
     * @defaultValue false
     * @group Props
     */
    selectOnFocus: _angular_core.InputSignalWithTransform<boolean, unknown>;
    /**
     * Whether to display navigation buttons in container when scrollable is enabled.
     * @type boolean
     * @defaultValue true
     * @group Props
     */
    showNavigators: _angular_core.InputSignalWithTransform<boolean, unknown>;
    /**
     * Tabindex of the tab buttons.
     * @type number
     * @defaultValue 0
     * @group Props
     */
    tabindex: _angular_core.InputSignalWithTransform<number, unknown>;
    id: _angular_core.WritableSignal<string>;
    _componentStyle: TabsStyle;
    updateValue(newValue: any): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Tabs, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Tabs, "p-tabs", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "scrollable": { "alias": "scrollable"; "required": false; "isSignal": true; }; "lazy": { "alias": "lazy"; "required": false; "isSignal": true; }; "selectOnFocus": { "alias": "selectOnFocus"; "required": false; "isSignal": true; }; "showNavigators": { "alias": "showNavigators"; "required": false; "isSignal": true; }; "tabindex": { "alias": "tabindex"; "required": false; "isSignal": true; }; }, { "value": "valueChange"; }, never, ["*"], true, never>;
}
declare class TabsModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TabsModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<TabsModule, never, [typeof Tabs, typeof TabPanels, typeof TabPanel, typeof TabList, typeof Tab], [typeof Tabs, typeof TabPanels, typeof TabPanel, typeof TabList, typeof Tab]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<TabsModule>;
}

export { Tab, TabList, TabPanel, TabPanels, Tabs, TabsClasses, TabsModule, TabsStyle };
