import * as i0 from '@angular/core';
import { ElementRef, TemplateRef, OnInit, AfterContentInit, EventEmitter, QueryList, SimpleChanges } from '@angular/core';
import * as i1 from 'primeng/api';
import { OverlayService, OverlayOptions, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { Overlay } from 'primeng/overlay';
import { Nullable, VoidListener } from 'primeng/ts-helpers';
import { BaseStyle } from 'primeng/base';

/**
 * Custom panel show event.
 * @see {@link CascadeSelect.onShow}
 * @group Events
 */
interface CascadeSelectShowEvent {
    /**
     * Overlay element.
     */
    overlay?: Overlay | ElementRef | TemplateRef<any> | HTMLElement | null | undefined;
    /**
     * Target element.
     */
    target?: Overlay | ElementRef | TemplateRef<any> | HTMLElement | null | undefined;
    /**
     * Overlay mode.
     */
    overlayMode?: 'modal' | 'overlay' | string;
}
/**
 * Custom panel hide event.
 * @see {@link CascadeSelect.onHide}
 * @extends {CascadeSelectShowEvent}
 * @group Events
 */
interface CascadeSelectHideEvent extends CascadeSelectShowEvent {
}
/**
 * Custom panel show event emits right before the panel is shown.
 * @see {@link CascadeSelect.onBeforeShow}
 * @extends {CascadeSelectShowEvent}
 * @group Events
 */
interface CascadeSelectBeforeShowEvent extends CascadeSelectShowEvent {
}
/**
 * Custom panel hide event emits right before the panel is hidden.
 * @see {@link CascadeSelect.onBeforeHide}
 * @extends {CascadeSelectShowEvent}
 * @group Events
 */
interface CascadeSelectBeforeHideEvent extends CascadeSelectShowEvent {
}
/**
 * Custom panel change event emits when selection changed.
 * @see {@link CascadeSelect.onChange}
 * @group Events
 */
interface CascadeSelectChangeEvent {
    /**
     * Browser event.
     */
    originalEvent?: Event;
    /**
     * Selected value.
     */
    value?: any;
    /**
     * Focus state.
     */
    isFocus?: boolean;
}
/**
 * Defines valid templates in CascadeSelect.
 * @group Templates
 */
interface CascadeSelectTemplates {
    /**
     * Custom value template.
     * @param {Object} context - value data.
     */
    value(context: {
        /**
         * Value.
         */
        $implicit: any;
        /**
         * Placeholder.
         */
        placeholder: string;
    }): TemplateRef<{
        $implicit: any;
        placeholder: string;
    }>;
    /**
     * Custom option template.
     * @param {Object} context - option data.
     */
    option(context: {
        /**
         * Option instance.
         */
        $implicit: any;
    }): TemplateRef<{
        $implicit: any;
    }>;
    /**
     * Custom dropdown trigger icon template.
     */
    triggericon(): TemplateRef<any>;
    /**
     * Custom clear icon template.
     */
    clearicon(): TemplateRef<any>;
    /**
     * Custom option group icon template.
     */
    optiongroupicon(): TemplateRef<any>;
    /**
     * Custom loading icon template.
     */
    loadingicon(): TemplateRef<any>;
}

/**
 *
 * CascadeSelect is a form component to select a value from a nested structure of options.
 *
 * [Live Demo](https://www.primeng.org/cascadeselect/)
 *
 * @module cascadeselectstyle
 *
 */
declare enum CascadeSelectClasses {
    /**
     * Class name of the root element
     */
    root = "p-cascadeselect",
    /**
     * Class name of the label element
     */
    label = "p-cascadeselect-label",
    /**
     * Class name of the dropdown element
     */
    dropdown = "p-cascadeselect-dropdown",
    /**
     * Class name of the loading icon element
     */
    loadingIcon = "p-cascadeselect-loading-icon",
    /**
     * Class name of the dropdown icon element
     */
    dropdownIcon = "p-cascadeselect-dropdown-icon",
    /**
     * Class name of the overlay element
     */
    overlay = "p-cascadeselect-overlay",
    /**
     * Class name of the list container element
     */
    listContainer = "p-cascadeselect-list-container",
    /**
     * Class name of the list element
     */
    list = "p-cascadeselect-list",
    /**
     * Class name of the item element
     */
    item = "p-cascadeselect-item",
    /**
     * Class name of the item content element
     */
    itemContent = "p-cascadeselect-item-content",
    /**
     * Class name of the item text element
     */
    itemText = "p-cascadeselect-item-text",
    /**
     * Class name of the group icon element
     */
    groupIcon = "p-cascadeselect-group-icon",
    /**
     * Class name of the item list element
     */
    itemList = "p-cascadeselect-item-list"
}
declare class CascadeSelectStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance, props }: {
            instance: any;
            props: any;
        }) => (string | {
            'p-cascadeselect-mobile': any;
            'p-disabled': any;
            'p-invalid': any;
            'p-variant-filled': boolean;
            'p-focus': any;
            'p-inputwrapper-filled': any;
            'p-inputwrapper-focus': any;
            'p-cascadeselect-open': any;
            'p-cascadeselect-fluid': any;
            'p-cascadeselect-sm p-inputfield-sm': boolean;
            'p-cascadeselect-lg p-inputfield-lg': boolean;
        })[];
        label: ({ instance, props }: {
            instance: any;
            props: any;
        }) => (string | {
            'p-placeholder': boolean;
            'p-cascadeselect-label-empty': boolean;
        })[];
        dropdown: string;
        loadingIcon: string;
        dropdownIcon: string;
        overlay: ({ instance }: {
            instance: any;
        }) => (string | {
            'p-cascadeselect-mobile-active': any;
        })[];
        listContainer: string;
        list: string;
        option: ({ instance, processedOption }: {
            instance: any;
            processedOption: any;
        }) => (string | {
            'p-cascadeselect-option-active': any;
            'p-cascadeselect-option-selected': any;
            'p-focus': any;
            'p-disabled': any;
        })[];
        optionContent: string;
        optionText: string;
        groupIcon: string;
        optionList: string;
    };
    inlineStyles: {
        root: ({ props }: {
            props: any;
        }) => {
            position: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelectStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CascadeSelectStyle>;
}
interface CascadeSelectStyle extends BaseStyle {
}

declare const CASCADESELECT_VALUE_ACCESSOR: any;
declare class CascadeSelectSub extends BaseComponent implements OnInit {
    cascadeselect: CascadeSelect;
    role: string | undefined;
    selectId: string | undefined;
    activeOptionPath: any[];
    optionDisabled: any[];
    focusedOptionId: string | undefined;
    options: any[] | string[] | string | undefined | null;
    optionGroupChildren: string[] | string | undefined | null;
    optionTemplate: Nullable<TemplateRef<any>>;
    groupicon: Nullable<TemplateRef<any>>;
    level: number;
    optionLabel: string | undefined;
    optionValue: string | undefined;
    optionGroupLabel: string | undefined;
    dirty: boolean | undefined;
    root: boolean | undefined;
    onChange: EventEmitter<any>;
    onFocusChange: EventEmitter<any>;
    onFocusEnterChange: EventEmitter<any>;
    get listLabel(): string;
    constructor(cascadeselect: CascadeSelect);
    ngOnInit(): void;
    onOptionClick(event: any, processedOption: any): void;
    onOptionMouseEnter(event: any, processedOption: any): void;
    onOptionMouseMove(event: any, processedOption: any): void;
    getOptionId(processedOption: any): string;
    getOptionLabel(processedOption: any): any;
    getOptionValue(processedOption: any): any;
    getOptionLabelToRender(processedOption: any): any;
    isOptionDisabled(processedOption: any): any;
    getOptionGroupLabel(processedOption: any): any;
    getOptionGroupChildren(processedOption: any): any;
    isOptionGroup(processedOption: any): boolean;
    isOptionSelected(processedOption: any): boolean;
    isOptionActive(processedOption: any): boolean;
    isOptionFocused(processedOption: any): boolean;
    getItemClass(option: string | string[]): {
        'p-cascadeselect-option': boolean;
        'p-cascadeselect-option-group': boolean;
        'p-cascadeselect-option-active': boolean;
        'p-cascadeselect-option-selected': boolean;
        'p-focus': boolean;
        'p-disabled': any;
    };
    position(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelectSub, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CascadeSelectSub, "p-cascadeSelectSub, p-cascadeselect-sub", never, { "role": { "alias": "role"; "required": false; }; "selectId": { "alias": "selectId"; "required": false; }; "activeOptionPath": { "alias": "activeOptionPath"; "required": false; }; "optionDisabled": { "alias": "optionDisabled"; "required": false; }; "focusedOptionId": { "alias": "focusedOptionId"; "required": false; }; "options": { "alias": "options"; "required": false; }; "optionGroupChildren": { "alias": "optionGroupChildren"; "required": false; }; "optionTemplate": { "alias": "optionTemplate"; "required": false; }; "groupicon": { "alias": "groupicon"; "required": false; }; "level": { "alias": "level"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; "optionValue": { "alias": "optionValue"; "required": false; }; "optionGroupLabel": { "alias": "optionGroupLabel"; "required": false; }; "dirty": { "alias": "dirty"; "required": false; }; "root": { "alias": "root"; "required": false; }; }, { "onChange": "onChange"; "onFocusChange": "onFocusChange"; "onFocusEnterChange": "onFocusEnterChange"; }, never, never, true, never>;
    static ngAcceptInputType_level: unknown;
    static ngAcceptInputType_dirty: unknown;
    static ngAcceptInputType_root: unknown;
}
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
declare class CascadeSelect extends BaseComponent implements OnInit, AfterContentInit {
    overlayService: OverlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id: string | undefined;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage: string | undefined;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage: string | undefined;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage: string | undefined;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage: string | undefined;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale: string | undefined;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled: any;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    focusOnHover: boolean;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus: boolean;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus: boolean;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options: string[] | string | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel: string | undefined;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue: string | undefined;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel: string | undefined;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren: string[] | string | undefined | null;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder: string | undefined;
    /**
     * Selected value of the component.
     * @group Props
     */
    value: string | undefined | null;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey: string | undefined;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId: string | undefined;
    /**
     * Defines the size of the component.
     * @group Props
     */
    size: 'large' | 'small';
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex: number | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel: string | undefined;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled: boolean | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear: boolean;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass: string | undefined;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions: OverlayOptions | undefined;
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus: boolean | undefined;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions(): string;
    set showTransitionOptions(val: string);
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    variant: 'filled' | 'outlined';
    /**
     * Whether the dropdown is in loading state.
     * @group Props
     */
    loading: boolean | undefined;
    /**
     * Icon to display in loading state.
     * @group Props
     */
    loadingIcon: string | undefined;
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions(): string;
    set hideTransitionOptions(val: string);
    /**
     * Spans 100% width of the container when enabled.
     * @group Props
     */
    fluid: boolean;
    /**
     * The breakpoint to define the maximum width boundary.
     * @group Props
     */
    breakpoint: string;
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange: EventEmitter<CascadeSelectChangeEvent>;
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange: EventEmitter<Event>;
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow: EventEmitter<CascadeSelectShowEvent>;
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide: EventEmitter<CascadeSelectHideEvent>;
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear: EventEmitter<any>;
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow: EventEmitter<CascadeSelectBeforeShowEvent>;
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide: EventEmitter<CascadeSelectBeforeHideEvent>;
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus: EventEmitter<FocusEvent>;
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur: EventEmitter<FocusEvent>;
    focusInputViewChild: Nullable<ElementRef>;
    containerViewChild: Nullable<ElementRef>;
    panelViewChild: Nullable<ElementRef>;
    overlayViewChild: Nullable<Overlay>;
    /**
     * Content template for displaying the selected value.
     * @group Templates
     */
    valueTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the option display.
     * @group Templates
     */
    optionTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the header.
     * @group Templates
     */
    headerTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the footer.
     * @group Templates
     */
    footerTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the trigger icon.
     * @group Templates
     */
    triggerIconTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the loading icon.
     * @group Templates
     */
    loadingIconTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the group icon.
     * @group Templates
     */
    groupIconTemplate: Nullable<TemplateRef<any>>;
    /**
     * Content template for customizing the clear icon.
     * @group Templates
     */
    clearIconTemplate: Nullable<TemplateRef<any>>;
    _valueTemplate: TemplateRef<any> | undefined;
    _optionTemplate: TemplateRef<any> | undefined;
    _headerTemplate: TemplateRef<any> | undefined;
    _footerTemplate: TemplateRef<any> | undefined;
    _triggerIconTemplate: TemplateRef<any> | undefined;
    _loadingIconTemplate: TemplateRef<any> | undefined;
    _groupIconTemplate: TemplateRef<any> | undefined;
    _clearIconTemplate: TemplateRef<any> | undefined;
    _showTransitionOptions: string;
    _hideTransitionOptions: string;
    selectionPath: any;
    focused: boolean;
    overlayVisible: boolean;
    clicked: boolean;
    dirty: boolean;
    searchValue: string | undefined;
    searchTimeout: any;
    onModelChange: Function;
    onModelTouched: Function;
    focusedOptionInfo: i0.WritableSignal<any>;
    activeOptionPath: i0.WritableSignal<any>;
    modelValue: i0.WritableSignal<any>;
    processedOptions: string[] | string | undefined;
    _componentStyle: CascadeSelectStyle;
    get containerClass(): {
        'p-cascadeselect p-component p-inputwrapper': boolean;
        'p-cascadeselect-clearable': boolean;
        'p-cascadeselect-mobile': boolean;
        'p-disabled': boolean;
        'p-focus': boolean;
        'p-inputwrapper-filled': any;
        'p-variant-filled': boolean;
        'p-inputwrapper-focus': boolean;
        'p-cascadeselect-open': boolean;
        'p-cascadeselect-fluid': boolean;
        'p-cascadeselect-sm p-inputfield-sm': boolean;
        'p-cascadeselect-lg p-inputfield-lg': boolean;
    };
    get labelClass(): {
        'p-cascadeselect-label': boolean;
        'p-placeholder': boolean;
        'p-cascadeselect-label-empty': boolean;
    };
    get hasFluid(): boolean;
    get focusedOptionId(): string;
    get filled(): boolean;
    get searchResultMessageText(): string;
    get searchMessageText(): string;
    get emptySearchMessageText(): string;
    get emptyMessageText(): string;
    get selectionMessageText(): string;
    get emptySelectionMessageText(): string;
    get selectedMessageText(): string;
    visibleOptions: i0.Signal<any>;
    label: i0.Signal<any>;
    get _label(): any;
    templates: QueryList<PrimeTemplate>;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    hasSelectedOption(): boolean;
    createProcessedOptions(options: any, level?: number, parent?: {}, parentKey?: string): any[];
    onInputFocus(event: FocusEvent): void;
    onInputBlur(event: FocusEvent): void;
    onInputKeyDown(event: KeyboardEvent): void;
    onArrowDownKey(event: any): void;
    onArrowUpKey(event: any): void;
    onArrowLeftKey(event: any): void;
    onArrowRightKey(event: any): void;
    onHomeKey(event: any): void;
    onEndKey(event: any): void;
    onEnterKey(event: any): void;
    onSpaceKey(event: any): void;
    onEscapeKey(event: any): void;
    onTabKey(event: any): void;
    onBackspaceKey(event: any): void;
    equalityKey(): string;
    updateModel(value: any, event?: any): void;
    autoUpdateModel(): void;
    scrollInView(index?: number): void;
    changeFocusedOptionIndex(event: any, index: any, preventSelection?: boolean): void;
    matchMediaListener: VoidListener;
    onOptionSelect(event: any): void;
    onOptionGroupSelect(event: any): void;
    onContainerClick(event: MouseEvent): void;
    isOptionMatched(processedOption: any): any;
    isOptionDisabled(option: any): any;
    isValidOption(processedOption: any): boolean;
    isValidSelectedOption(processedOption: any): any;
    isSelected(processedOption: any): any;
    findOptionPathByValue(value: any, processedOptions?: any, level?: number): any;
    findFirstOptionIndex(): any;
    findLastOptionIndex(): number;
    findNextOptionIndex(index: any): any;
    findPrevOptionIndex(index: any): any;
    findSelectedOptionIndex(): any;
    findFirstFocusedOptionIndex(): any;
    findLastFocusedOptionIndex(): any;
    searchOptions(event: any, char: any): boolean;
    hide(event?: any, isFocus?: boolean): void;
    show(event?: any, isFocus?: boolean): void;
    clear(event?: MouseEvent): void;
    getOptionLabel(option: any): any;
    getOptionValue(option: any): any;
    getOptionGroupLabel(optionGroup: any): any;
    getOptionGroupChildren(optionGroup: any, level: any): any;
    isOptionGroup(option: any, level: any): any;
    isProccessedOptionGroup(processedOption: any): boolean;
    getProccessedOptionLabel(processedOption: any): any;
    constructor(overlayService: OverlayService);
    query: any;
    queryMatches: i0.WritableSignal<boolean>;
    mobileActive: i0.WritableSignal<boolean>;
    onOptionChange(event: any): void;
    onOptionClick(event: any): void;
    onOptionMouseEnter(event: any): void;
    onOptionMouseMove(event: any): void;
    ngOnInit(): void;
    bindMatchMediaListener(): void;
    unbindMatchMediaListener(): void;
    onOverlayAnimationDone(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CascadeSelect, "p-cascadeSelect, p-cascadeselect, p-cascade-select", never, { "id": { "alias": "id"; "required": false; }; "searchMessage": { "alias": "searchMessage"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "selectionMessage": { "alias": "selectionMessage"; "required": false; }; "emptySearchMessage": { "alias": "emptySearchMessage"; "required": false; }; "emptySelectionMessage": { "alias": "emptySelectionMessage"; "required": false; }; "searchLocale": { "alias": "searchLocale"; "required": false; }; "optionDisabled": { "alias": "optionDisabled"; "required": false; }; "focusOnHover": { "alias": "focusOnHover"; "required": false; }; "selectOnFocus": { "alias": "selectOnFocus"; "required": false; }; "autoOptionFocus": { "alias": "autoOptionFocus"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "options": { "alias": "options"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; "optionValue": { "alias": "optionValue"; "required": false; }; "optionGroupLabel": { "alias": "optionGroupLabel"; "required": false; }; "optionGroupChildren": { "alias": "optionGroupChildren"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; "inputId": { "alias": "inputId"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; "inputLabel": { "alias": "inputLabel"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "panelStyleClass": { "alias": "panelStyleClass"; "required": false; }; "panelStyle": { "alias": "panelStyle"; "required": false; }; "overlayOptions": { "alias": "overlayOptions"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingIcon": { "alias": "loadingIcon"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; }, { "onChange": "onChange"; "onGroupChange": "onGroupChange"; "onShow": "onShow"; "onHide": "onHide"; "onClear": "onClear"; "onBeforeShow": "onBeforeShow"; "onBeforeHide": "onBeforeHide"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, ["valueTemplate", "optionTemplate", "headerTemplate", "footerTemplate", "triggerIconTemplate", "loadingIconTemplate", "groupIconTemplate", "clearIconTemplate", "templates"], never, true, never>;
    static ngAcceptInputType_focusOnHover: unknown;
    static ngAcceptInputType_selectOnFocus: unknown;
    static ngAcceptInputType_autoOptionFocus: unknown;
    static ngAcceptInputType_tabindex: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_showClear: unknown;
    static ngAcceptInputType_autofocus: unknown;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_fluid: unknown;
}
declare class CascadeSelectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CascadeSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CascadeSelectModule, never, [typeof CascadeSelect, typeof i1.SharedModule], [typeof CascadeSelect, typeof i1.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CascadeSelectModule>;
}

export { CASCADESELECT_VALUE_ACCESSOR, CascadeSelect, CascadeSelectClasses, CascadeSelectModule, CascadeSelectStyle, CascadeSelectSub };
export type { CascadeSelectBeforeHideEvent, CascadeSelectBeforeShowEvent, CascadeSelectChangeEvent, CascadeSelectHideEvent, CascadeSelectShowEvent, CascadeSelectTemplates };
