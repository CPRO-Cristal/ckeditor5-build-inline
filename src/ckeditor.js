/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import List from '@ckeditor/ckeditor5-list/src/list';
import Font from '@ckeditor/ckeditor5-font/src/font';


export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	List,
	Font,
	Subscript,
	Superscript,
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: [
		'bold', 'italic', 'underline', 'strikethrough',
		'|',
		'subscript', 'superscript',
		'|',
		'fontColor',
		'|',
		'numberedList', 'bulletedList',
	],
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fr'
};
