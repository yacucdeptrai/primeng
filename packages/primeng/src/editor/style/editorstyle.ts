import { Injectable } from '@angular/core';
import { style } from '@primeuix/styles/editor';
import { BaseStyle } from 'primeng/base';

// Quill toolbar/content dark theming — the v21 preset doesn't cover .ql-snow.
// Tokens where one exists; literal #2b2b2b for the picker-options surface (no token).
const editorDarkStyle = /*css*/ `
.p-editor-container .p-editor-toolbar {
    background: dt('content.background');
    border-top-right-radius: dt('content.border.radius');
    border-top-left-radius: dt('content.border.radius');
}
.p-editor-container .p-editor-toolbar.ql-snow {
    border: 1px solid dt('content.border.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: dt('text.muted.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: dt('text.muted.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: dt('text.muted.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: #2b2b2b;
    border: 0 none;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    border-radius: dt('content.border.radius');
    padding: 0;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: dt('text.color');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    color: dt('text.color');
    background: dt('content.hover.background');
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: 1rem 1rem;
}
.p-editor-container .p-editor-content {
    border-bottom-right-radius: dt('content.border.radius');
    border-bottom-left-radius: dt('content.border.radius');
}
.p-editor-container .p-editor-content.ql-snow {
    border: 1px solid dt('content.border.color');
}
.p-editor-container .p-editor-content .ql-editor {
    background: dt('content.background');
    color: dt('text.color');
    border-bottom-right-radius: dt('content.border.radius');
    border-bottom-left-radius: dt('content.border.radius');
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: dt('text.color');
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: dt('text.color');
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: dt('text.color');
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: dt('primary.color');
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: dt('primary.color');
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: dt('primary.color');
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: dt('primary.color');
}
`;

const classes = {
    root: ({ instance }) => [
        'p-editor',
        {
            'p-invalid': instance.invalid()
        }
    ],
    toolbar: 'p-editor-toolbar',
    content: 'p-editor-content'
};

@Injectable()
export class EditorStyle extends BaseStyle {
    name = 'editor';

    style = style + editorDarkStyle;

    classes = classes;
}

/**
 *
 * Editor groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/editor/)
 *
 * @module editorstyle
 *
 */
export enum EditorClasses {
    /**
     * Class name of the root element
     */
    root = 'p-editor',
    /**
     * Class name of the toolbar element
     */
    toolbar = 'p-editor-toolbar',
    /**
     * Class name of the content element
     */
    content = 'p-editor-content'
}

export interface EditorStyle extends BaseStyle {}
