import { Injectable } from '@angular/core';
import { style as dialogStyle } from '@primeuix/styles/dialog';
import { DialogStyle } from 'primeng/dialog';

// Minimal mode strips the header chrome and tightens the content surface.
const minimalStyle = `
    .p-dialog-minimal .p-dialog-content {
        padding: 0;
    }
`;

@Injectable()
export class DynamicDialogStyle extends DialogStyle {
    name = 'dialog';

    style = `${dialogStyle}${minimalStyle}`;
}

/**
 *
 * DynamicDialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primeng.org/dynamicdialog)
 *
 * @module dynamicdialogstyle
 *
 */
export enum DynamicDialogClasses {
    /**
     * Class name of the mask element
     */
    mask = 'p-dialog-mask',
    /**
     * Class name of the root element
     */
    root = 'p-dialog',
    /**
     * Class name of the header element
     */
    header = 'p-dialog-header',
    /**
     * Class name of the title element
     */
    title = 'p-dialog-title',
    /**
     * Class name of the header actions element
     */
    headerActions = 'p-dialog-header-actions',
    /**
     * Class name of the maximize button element
     */
    pcMaximizeButton = 'p-dialog-maximize-button',
    /**
     * Class name of the close button element
     */
    pcCloseButton = 'p-dialog-close-button',
    /**
     * Class name of the content element
     */
    content = 'p-dialog-content',
    /**
     * Class name of the footer element
     */
    footer = 'p-dialog-footer'
}

export interface DynamicDialogStyle {}
