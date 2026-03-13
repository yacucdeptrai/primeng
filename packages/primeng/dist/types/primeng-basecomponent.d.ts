import * as i0 from '@angular/core';
import { ElementRef, Injector, ChangeDetectorRef, Renderer2, SimpleChanges } from '@angular/core';
import { BaseStyle } from 'primeng/base';
import { PrimeNG } from 'primeng/config';

declare class BaseComponentStyle extends BaseStyle {
    name: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponentStyle, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseComponentStyle>;
}

declare class BaseComponent {
    document: Document;
    platformId: any;
    el: ElementRef;
    readonly injector: Injector;
    readonly cd: ChangeDetectorRef;
    renderer: Renderer2;
    config: PrimeNG;
    baseComponentStyle: BaseComponentStyle;
    baseStyle: BaseStyle;
    scopedStyleEl: any;
    rootEl: any;
    dt: Object | undefined;
    get styleOptions(): {
        nonce: string;
    };
    get _name(): string;
    get componentStyle(): any;
    attrSelector: string;
    private themeChangeListeners;
    _getHostInstance(instance: any): any;
    _getOptionValue(options: any, key?: string, params?: {}): unknown;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    _loadStyles(): void;
    _loadCoreStyles(): void;
    _loadThemeStyles(): void;
    _loadScopedThemeStyles(preset: any): void;
    _unloadScopedThemeStyles(): void;
    _themeChangeListener(callback?: () => void): void;
    cx(arg: string, rest?: string): string;
    sx(arg: string): string;
    get parent(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseComponent, never, never, { "dt": { "alias": "dt"; "required": false; }; }, {}, never, never, true, never>;
}

export { BaseComponent, BaseComponentStyle };
