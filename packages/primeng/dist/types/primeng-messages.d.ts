import * as i0 from '@angular/core';
import { AfterContentInit, OnDestroy, EventEmitter, TemplateRef, QueryList } from '@angular/core';
import * as i5 from 'primeng/api';
import { MessageService, ToastMessageOptions, PrimeTemplate } from 'primeng/api';
import { BaseComponent } from 'primeng/basecomponent';
import { Subscription } from 'rxjs';
import { BaseStyle } from 'primeng/base';
import * as i1 from '@angular/common';
import * as i2 from 'primeng/ripple';
import * as i3 from 'primeng/icons';
import * as i4 from 'primeng/button';

declare class MessagesStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ instance }: {
            instance: any;
        }) => {
            'p-message': boolean;
        };
        container: string;
        content: string;
        icon: string;
        text: string;
        closeButton: string;
        closeIcon: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessagesStyle>;
}

/**
 * Messages is used to display alerts inline.
 * @group Components
 * @deprecated Use Message component instead.
 */
declare class Messages extends BaseComponent implements AfterContentInit, OnDestroy {
    messageService: MessageService;
    /**
     * An array of messages to display.
     * @group Props
     */
    set value(messages: ToastMessageOptions[]);
    /**
     * Defines if message box can be closed by the click icon.
     * @group Props
     */
    closable: boolean;
    /**
     * Inline style of the component.
     * @group Props
     */
    style: {
        [klass: string]: any;
    } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string | undefined;
    /**
     * Whether displaying services messages are enabled.
     * @group Props
     */
    enableService: boolean;
    /**
     * Id to match the key of the message to enable scoping in service based messaging.
     * @group Props
     */
    key: string | undefined;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    escape: boolean;
    /**
     * Severity level of the message.
     * @group Props
     */
    severity: string | undefined;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions: string;
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions: string;
    /**
     * This function is executed when the value changes.
     * @param {ToastMessageOptions[]} value - messages value.
     * @group Emits
     */
    valueChange: EventEmitter<ToastMessageOptions[]>;
    /**
     * This function is executed when a message is closed.
     * @param {ToastMessageOptions} value - Closed message.
     * @group Emits
     */
    onClose: EventEmitter<ToastMessageOptions>;
    messages: ToastMessageOptions[] | null | undefined;
    messageSubscription: Subscription | undefined;
    clearSubscription: Subscription | undefined;
    timerSubscriptions: Subscription[];
    contentTemplate: TemplateRef<any> | undefined;
    _componentStyle: MessagesStyle;
    constructor(messageService: MessageService);
    templates: QueryList<PrimeTemplate> | undefined;
    ngAfterContentInit(): void;
    hasMessages(): boolean;
    clear(): void;
    removeMessage(i: number): void;
    get icon(): string | null;
    get closeAriaLabel(): string;
    ngOnDestroy(): void;
    private startMessageLifes;
    private startMessageLife;
    static ɵfac: i0.ɵɵFactoryDeclaration<Messages, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Messages, "p-messages", never, { "value": { "alias": "value"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "enableService": { "alias": "enableService"; "required": false; }; "key": { "alias": "key"; "required": false; }; "escape": { "alias": "escape"; "required": false; }; "severity": { "alias": "severity"; "required": false; }; "showTransitionOptions": { "alias": "showTransitionOptions"; "required": false; }; "hideTransitionOptions": { "alias": "hideTransitionOptions"; "required": false; }; }, { "valueChange": "valueChange"; "onClose": "onClose"; }, ["templates"], never, false, never>;
    static ngAcceptInputType_closable: unknown;
    static ngAcceptInputType_enableService: unknown;
    static ngAcceptInputType_escape: unknown;
}
declare class MessagesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MessagesModule, [typeof Messages], [typeof i1.CommonModule, typeof i2.Ripple, typeof i3.CheckIcon, typeof i3.InfoCircleIcon, typeof i3.TimesCircleIcon, typeof i3.ExclamationTriangleIcon, typeof i3.TimesIcon, typeof i4.ButtonModule, typeof i5.SharedModule], [typeof Messages, typeof i5.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MessagesModule>;
}

/**
 * Defines valid templates in Messages.
 * @group Templates
 */
interface MessagesTemplates {
    /**
     * Custom template of content.
     */
    content(): TemplateRef<any>;
}

export { Messages, MessagesModule, MessagesStyle };
export type { MessagesTemplates };
