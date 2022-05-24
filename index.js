/* Block form-wysiwyg */
/* TinyMCE plugin */
tinymce.init({
	selector: '.form-wysiwyg__textarea',
	content_css: "/style.css",
	width: '100%',
	height: '100%',
  menubar: false,
  branding: false,
  statusbar: false,
	plugins: [
		'checklist','lists',
	],
	toolbar: 'bold italic underline bullist alignjustify alignleft alignright forecolor',
});
/* End block form-wysiwyg */