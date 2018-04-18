import {charcounter} from './tinymce-charactercount.plugin.js'

export const config = {
	branding: false, // To disable "Powered by TinyMCE"
	theme: "modern",
	height: "60vh",
	width : "100%",
	elementpath: false, // To remove path in status bar in TinyMCE4
	resize: 'both',
	
	plugins: `print preview searchreplace autolink directionality visualblocks charactercount 
						visualchars fullscreen image link media template table charmap 
						hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor 
						wordcount imagetools  contextmenu colorpicker textpattern help`,
	// menubar: 'file edit insert view format table tools help',

	toolbar1: `undo redo | formatselect | bold italic strikethrough forecolor backcolor 
						| link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent 
						indent  | image table fullscreen | removeformat`,
	
	fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 39px 34px 38px 42px 48px",
	
	theme_advanced_resizing : true,

	templates: [
		{ title: 'Test template 1', content: 'Test 1' },
		{ title: 'Test template 2', content: 'Test 2' }
	],
	content_css: [
		'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
		'https://www.tinymce.com/css/codepen.min.css'
	],


	image_title: true, 
	// enable automatic uploads of images represented by blob or data URIs
	automatic_uploads: true,
	// URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
	// images_upload_url: 'postAcceptor.php',
	// here we add custom filepicker only to Image dialog
	file_picker_types: 'image', 
	// and here's our custom image picker
	file_picker_callback: function(cb, value, meta) {
		var input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		
		// Note: In modern browsers input[type="file"] is functional without 
		// even adding it to the DOM, but that might not be the case in some older
		// or quirky browsers like IE, so you might want to add it to the DOM
		// just in case, and visually hide it. And do not forget do remove it
		// once you do not need it anymore.

		input.onchange = function() {
			var file = this.files[0];
			
			var reader = new FileReader();
			reader.onload = function () {
				// Note: Now we need to register the blob in TinyMCEs image blob
				// registry. In the next release this part hopefully won't be
				// necessary, as we are looking to handle it internally.
				var id = 'blobid' + (new Date()).getTime();
				var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
				var base64 = reader.result.split(',')[1];
				var blobInfo = blobCache.create(id, file, base64);
				blobCache.add(blobInfo);

				// call the callback and populate the Title field with the file name
				cb(blobInfo.blobUri(), { title: file.name });
			};
			reader.readAsDataURL(file);
		};
		
		input.click();
	}
}
