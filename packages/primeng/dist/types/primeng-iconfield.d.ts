import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';
import * as i0 from '@angular/core';

/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primeng.org/iconfield/)
 *
 * @module iconfieldstyle
 *
 */
declare enum IconFieldClasses {
    /**
     * Class name of the root element
     */
    root = "p-iconfield"
}
declare class IconFieldStyle extends BaseStyle {
    name: string;
    theme: ({ dt }: {
        dt: any;
    }) => string;
    classes: {
        root: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFieldStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconFieldStyle>;
}
interface IconFieldStyle extends BaseStyle {
}

/**
 * IconField wraps an input and an icon.
 * @group Components
 */
declare class IconField extends BaseComponent {
    /**
     * Position of the icon.
     * @group Props
     */
    iconPosition: 'right' | 'left';
    get _styleClass(): string;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass: string;
    _componentStyle: IconFieldStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconField, "p-iconfield, p-iconField, p-icon-field", never, { "iconPosition": { "alias": "iconPosition"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], true, never>;
}
declare class IconFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IconFieldModule, never, [typeof IconField], [typeof IconField]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IconFieldModule>;
}

export { IconField, IconFieldClasses, IconFieldModule, IconFieldStyle };
