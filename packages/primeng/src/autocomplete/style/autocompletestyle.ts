import { Injectable } from '@angular/core';
import { style as autocomplete_style } from '@primeuix/styles/autocomplete';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
${autocomplete_style}

/* For PrimeNG */
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.invalid.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

/* Multi-token container chrome. v17 styled .p-autocomplete-multiple-container;
   v21 renamed it to .p-autocomplete-input-multiple and leaves it unstyled, so the
   token row renders as a tiny bare box. Paint the bordered formField surface plus
   the summary/+N token from formField/highlight tokens. */
.p-autocomplete-input-multiple {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 0;
    padding: 0.25rem 0.5rem;
    min-height: 3.5rem;
    list-style: none;
    background: dt('autocomplete.background');
    border: 1px solid dt('autocomplete.border.color');
    border-radius: dt('autocomplete.border.radius');
    color: dt('autocomplete.color');
}

.p-autocomplete-input-multiple:not(.p-disabled):hover {
    border-color: dt('autocomplete.hover.border.color');
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

.p-autocomplete-input-multiple .p-autocomplete-input-token {
    display: inline-flex;
    flex: 1 1 auto;
    padding: 0.5rem 0;
}

.p-autocomplete-input-multiple input {
    background: transparent;
    border: 0 none;
    outline: 0 none;
    width: 100%;
    color: dt('autocomplete.color');
    font-family: inherit;
}

/* Summary +N token (AltAutoComplete) painted from the highlight pair. */
.p-autocomplete-token {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: dt('autocomplete.option.selected.background');
    color: dt('autocomplete.option.selected.color');
    border-radius: dt('autocomplete.border.radius');
}

.p-autocomplete-token-label {
    line-height: 1;
}

/* Fixed single-row height for full-width autocompletes (.p-autocomplete-full): the base container is
   min-height only, so it gains/loses a row as the selected-count token renders/clears and the field
   jumps height. Pin one row; the count token always fits on a single line. */
.p-autocomplete-full .p-autocomplete-input-multiple {
    height: 56px;
    overflow: hidden;
    flex-wrap: nowrap;
    align-items: center;
}
.p-autocomplete-full .p-autocomplete-input-multiple > li,
.p-autocomplete-full .p-autocomplete-input-multiple .p-autocomplete-token {
    white-space: nowrap;
    max-width: none;
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance }) => [
        'p-autocomplete p-component p-inputwrapper',
        {
            'p-invalid': instance.invalid(),
            'p-focus': instance.focused,
            'p-inputwrapper-filled': instance.$filled(),
            'p-inputwrapper-focus': (instance.focused && !instance.$disabled()) || instance.autofocus || instance.overlayVisible,
            'p-autocomplete-open': instance.overlayVisible,
            'p-autocomplete-clearable': instance.showClear && !instance.$disabled(),
            'p-autocomplete-fluid': instance.hasFluid
        }
    ],
    pcInputText: 'p-autocomplete-input',
    inputMultiple: ({ instance }) => [
        'p-autocomplete-input-multiple',
        {
            'p-disabled': instance.$disabled(),
            'p-variant-filled': instance.$variant() === 'filled'
        }
    ],
    chipItem: ({ instance, i }) => [
        'p-autocomplete-chip-item',
        {
            'p-focus': instance.focusedMultipleOptionIndex() === i
        }
    ],
    pcChip: 'p-autocomplete-chip',
    chipIcon: 'p-autocomplete-chip-icon',
    inputChip: 'p-autocomplete-input-chip',
    loader: 'p-autocomplete-loader',
    dropdown: 'p-autocomplete-dropdown',
    overlay: ({ instance }) => ['p-autocomplete-overlay p-component-overlay p-component', { 'p-input-filled': instance.$variant() === 'filled', 'p-ripple-disabled': instance.config.ripple() === false }],
    listContainer: 'p-autocomplete-list-container',
    list: 'p-autocomplete-list',
    optionGroup: 'p-autocomplete-option-group',
    option: ({ instance, option, i, scrollerOptions }) => ({
        'p-autocomplete-option': true,
        'p-autocomplete-option-selected': instance.isSelected(option),
        'p-focus': instance.focusedOptionIndex() === instance.getOptionIndex(i, scrollerOptions),
        'p-disabled': instance.isOptionDisabled(option)
    }),
    emptyMessage: 'p-autocomplete-empty-message',
    clearIcon: 'p-autocomplete-clear-icon'
};

@Injectable()
export class AutoCompleteStyle extends BaseStyle {
    name = 'autocomplete';

    style = style;

    classes = classes;

    inlineStyles = inlineStyles;
}

/**
 *
 * AutoComplete is an input component that provides real-time suggestions while being typed.
 *
 * [Live Demo](https://www.primeng.org/autocomplete/)
 *
 * @module autocompletestyle
 *
 */
export enum AutoCompleteClasses {
    /**
     * Class name of the root element
     */
    root = 'p-autocomplete',
    /**
     * Class name of the input element
     */
    pcInputText = 'p-autocomplete-input',
    /**
     * Class name of the input multiple element
     */
    inputMultiple = 'p-autocomplete-input-multiple',
    /**
     * Class name of the chip item element
     */
    chipItem = 'p-autocomplete-chip-item',
    /**
     * Class name of the chip element
     */
    pcChip = 'p-autocomplete-chip',
    /**
     * Class name of the chip icon element
     */
    chipIcon = 'p-autocomplete-chip-icon',
    /**
     * Class name of the input chip element
     */
    inputChip = 'p-autocomplete-input-chip',
    /**
     * Class name of the loader element
     */
    loader = 'p-autocomplete-loader',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-autocomplete-dropdown',
    /**
     * Class name of the panel element
     */
    panel = 'p-autocomplete-overlay',
    /**
     * Class name of the list element
     */
    list = 'p-autocomplete-list',
    /**
     * Class name of the option group element
     */
    optionGroup = 'p-autocomplete-option-group',
    /**
     * Class name of the option element
     */
    option = 'p-autocomplete-option',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-autocomplete-empty-message',
    /**
     * Class name of the clear icon
     */
    clearIcon = 'p-autocomplete-clear-icon'
}

export interface AutoCompleteStyle extends BaseStyle {}
