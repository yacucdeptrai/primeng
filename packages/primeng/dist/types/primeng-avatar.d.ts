import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';
import * as i1 from 'primeng/api';

/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://primeng.org/avatar)
 *
 * @module avatarstyle
 *
 */
declare enum AvatarClasses {
    /**
     * Class name of the root element
     */
    root = "p-avatar",
    /**
     * Class name of the label element
     */
    label = "p-avatar-label",
    /**
     * Class name of the icon element
     */
    icon = "p-avatar-icon"
}
declare class AvatarStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: ({ props }: {
            props: any;
        }) => (string | {
            'p-avatar-image': boolean;
            'p-avatar-circle': boolean;
            'p-avatar-lg': boolean;
            'p-avatar-xl': boolean;
        })[];
        label: string;
        icon: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AvatarStyle>;
}
interface AvatarStyle extends BaseStyle {
}

/**
 * Avatar represents people using icons, labels and images.
 * @group Components
 */
declare class Avatar extends BaseComponent {
    /**
     * Defines the text to display.
     * @group Props
     */
    label: string | undefined;
    /**
     * Defines the icon to display.
     * @group Props
     */
    icon: string | undefined;
    /**
     * Defines the image to display.
     * @group Props
     */
    image: string | undefined;
    /**
     * Size of the element.
     * @group Props
     */
    size: 'normal' | 'large' | 'xlarge' | undefined;
    /**
     * Shape of the element.
     * @group Props
     */
    shape: 'square' | 'circle' | undefined;
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
     * Establishes a string value that labels the component.
     * @group Props
     */
    ariaLabel: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy: string | undefined;
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError: EventEmitter<Event>;
    _componentStyle: AvatarStyle;
    imageError(event: Event): void;
    get hostClass(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Avatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Avatar, "p-avatar", never, { "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "image": { "alias": "image"; "required": false; }; "size": { "alias": "size"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "style": { "alias": "style"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledBy": { "alias": "ariaLabelledBy"; "required": false; }; }, { "onImageError": "onImageError"; }, never, ["*"], true, never>;
}
declare class AvatarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AvatarModule, never, [typeof Avatar, typeof i1.SharedModule], [typeof Avatar, typeof i1.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AvatarModule>;
}

export { Avatar, AvatarClasses, AvatarModule, AvatarStyle };
