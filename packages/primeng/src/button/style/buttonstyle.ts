import { Injectable } from '@angular/core';
import { style as button_style } from '@primeuix/styles/button';
import { BaseStyle } from 'primeng/base';

const style = /*css*/ `
    ${button_style}

    /* Button icons inherit the button's (severity-aware) color via currentColor — no icon-color
       override here. Forcing text.color stripped the severity color from text/icon-only buttons
       (danger delete went white, plain upload/import lost their indigo). A neutral-icon look is an
       app concern (consumer .app-icon-btn), not a fork default. */

    /* Dark severity family (base / outlined / text + hover/focus/active; buttonset + splitbutton) */
    .p-button-dark,
    .p-buttonset-dark > .p-button,
    .p-splitbutton-dark > .p-button {
        color: #ffffff;
        background: #2f2f2f;
        border: 0 none;
    }
    .p-button-dark:enabled:hover,
    .p-buttonset-dark > .p-button:enabled:hover,
    .p-splitbutton-dark > .p-button:enabled:hover {
        background: #262626;
        color: #ffffff;
        border-color: transparent;
    }
    .p-button-dark:enabled:focus,
    .p-buttonset-dark > .p-button:enabled:focus,
    .p-splitbutton-dark > .p-button:enabled:focus {
        background: #262626;
        box-shadow: none;
    }
    .p-button-dark:enabled:active,
    .p-buttonset-dark > .p-button:enabled:active,
    .p-splitbutton-dark > .p-button:enabled:active {
        background: #242424;
        color: #ffffff;
        border-color: transparent;
    }

    .p-button-dark.p-button-outlined,
    .p-buttonset-dark > .p-button.p-button-outlined,
    .p-splitbutton-dark > .p-button.p-button-outlined {
        background-color: transparent;
        color: #ffffff;
        border: 0 none;
    }
    .p-button-dark.p-button-outlined:enabled:hover,
    .p-buttonset-dark > .p-button.p-button-outlined:enabled:hover,
    .p-splitbutton-dark > .p-button.p-button-outlined:enabled:hover {
        background: rgba(255, 255, 255, 0.08);
        color: #ffffff;
        border: 0 none;
    }
    .p-button-dark.p-button-outlined:enabled:active,
    .p-buttonset-dark > .p-button.p-button-outlined:enabled:active,
    .p-splitbutton-dark > .p-button.p-button-outlined:enabled:active {
        background: rgba(255, 255, 255, 0.18);
        color: #ffffff;
        border: 0 none;
    }

    .p-button-dark.p-button-text,
    .p-buttonset-dark > .p-button.p-button-text,
    .p-splitbutton-dark > .p-button.p-button-text {
        background-color: transparent;
        color: #ffffff;
        border-color: transparent;
    }
    .p-button-dark.p-button-text:enabled:hover,
    .p-buttonset-dark > .p-button.p-button-text:enabled:hover,
    .p-splitbutton-dark > .p-button.p-button-text:enabled:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: transparent;
        color: #ffffff;
    }
    .p-button-dark.p-button-text:enabled:active,
    .p-buttonset-dark > .p-button.p-button-text:enabled:active,
    .p-splitbutton-dark > .p-button.p-button-text:enabled:active {
        background: rgba(255, 255, 255, 0.18);
        border-color: transparent;
        color: #ffffff;
    }
    .p-button-dark.p-button-text:enabled:focus,
    .p-button-dark.p-button-outlined:enabled:focus,
    .p-buttonset-dark > .p-button.p-button-text:enabled:focus,
    .p-buttonset-dark > .p-button.p-button-outlined:enabled:focus,
    .p-splitbutton-dark > .p-button.p-button-text:enabled:focus,
    .p-splitbutton-dark > .p-button.p-button-outlined:enabled:focus {
        background: rgba(255, 255, 255, 0.14);
    }

    /* Dark family keeps icon glyphs white regardless of variant */
    .p-button-dark .p-button-icon,
    .p-buttonset-dark > .p-button .p-button-icon,
    .p-splitbutton-dark > .p-button .p-button-icon {
        color: #ffffff;
    }

    /* Size variants */
    .p-button-xs {
        font-size: 0.875rem;
        padding: 0.468rem 0.656rem;
    }
    .p-button-xs .p-button-icon {
        font-size: 20px;
    }
    .p-button-md {
        font-size: 1rem;
        padding: 0.75rem 1rem;
    }
    .p-button-sm .p-button-icon {
        font-size: 20px;
    }

    /* Rounded icon size + shape variants */
    .p-button-rounded.p-button-xs {
        width: 1.875rem;
        height: 1.875rem;
    }
    .p-button-rounded.p-button-sm-icon {
        width: 2.5rem;
        height: 2.5rem;
    }

    /* Shrink: center content, let icon/label shrink */
    .p-button-shrink {
        justify-content: center;
    }
    .p-button-shrink .p-button-icon,
    .p-button-shrink .p-button-label {
        flex: 0 1 auto;
    }
`;

const classes = {
    root: ({ instance }) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !instance.label && !instance.buttonProps?.label && !instance.badge,
            'p-button-vertical': (instance.iconPos === 'top' || instance.iconPos === 'bottom') && instance.label,
            'p-button-loading': instance.loading || instance.buttonProps?.loading,
            'p-button-link': instance.link || instance.buttonProps?.link,
            [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
            'p-button-raised': instance.raised || instance.buttonProps?.raised,
            'p-button-rounded': instance.rounded || instance.buttonProps?.rounded,
            'p-button-text': instance.text || instance.variant === 'text' || instance.buttonProps?.text || instance.buttonProps?.variant === 'text',
            'p-button-outlined': instance.outlined || instance.variant === 'outlined' || instance.buttonProps?.outlined || instance.buttonProps?.variant === 'outlined',
            'p-button-sm': instance.size === 'small' || instance.buttonProps?.size === 'small',
            'p-button-lg': instance.size === 'large' || instance.buttonProps?.size === 'large',
            'p-button-plain': instance.plain || instance.buttonProps?.plain,
            'p-button-fluid': instance.hasFluid
        }
    ],
    loadingIcon: 'p-button-loading-icon',
    icon: ({ instance }) => [
        'p-button-icon',
        {
            [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
            'p-button-icon-left': ((instance.iconPos === 'left' || instance.buttonProps?.iconPos === 'left') && instance.label) || instance.buttonProps?.label,
            'p-button-icon-right': ((instance.iconPos === 'right' || instance.buttonProps?.iconPos === 'right') && instance.label) || instance.buttonProps?.label,
            'p-button-icon-top': ((instance.iconPos === 'top' || instance.buttonProps?.iconPos === 'top') && instance.label) || instance.buttonProps?.label,
            'p-button-icon-bottom': ((instance.iconPos === 'bottom' || instance.buttonProps?.iconPos === 'bottom') && instance.label) || instance.buttonProps?.label
        },
        instance.icon,
        instance.buttonProps?.icon
    ],
    spinnerIcon: ({ instance }) => {
        return Object.entries(instance.cx('icon'))
            .filter(([, value]) => !!value)
            .reduce((acc, [key]) => acc + ` ${key}`, 'p-button-loading-icon');
    },
    label: 'p-button-label'
};

@Injectable()
export class ButtonStyle extends BaseStyle {
    name = 'button';

    style = style;

    classes = classes;
}

/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * [Live Demo](https://www.primeng.org/button/)
 *
 * @module buttonstyle
 *
 */
export enum ButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-button',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-button-loading-icon',
    /**
     * Class name of the icon element
     */
    icon = 'p-button-icon',
    /**
     * Class name of the label element
     */
    label = 'p-button-label'
}

export interface ButtonStyle extends BaseStyle {}
