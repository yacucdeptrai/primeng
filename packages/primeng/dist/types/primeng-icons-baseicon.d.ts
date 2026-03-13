import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';
import { BaseStyle } from 'primeng/base';

declare class BaseIcon extends BaseComponent implements OnInit {
    label: string;
    spin: boolean;
    styleClass: string;
    role: string;
    ariaLabel: string;
    ariaHidden: boolean;
    ngOnInit(): void;
    getAttributes(): void;
    getClassNames(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseIcon, "ng-component", never, { "label": { "alias": "label"; "required": false; }; "spin": { "alias": "spin"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_spin: unknown;
}

/**
 *
 * [Live Demo](https://www.primeng.org/)
 *
 * @module baseiconstyle
 *
 */
declare enum BaseIconClasses {
    root = "p-icon"
}
declare class BaseIconStyle extends BaseStyle {
    name: string;
    inlineStyles: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseIconStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseIconStyle>;
}
interface BaseIconStyle extends BaseStyle {
}

export { BaseIcon, BaseIconClasses, BaseIconStyle };
