<template>
  <section class="">
    <h2 class="title">Admin Dashboard for Child Routes</h2>
    <h5 class="subheading">The index page inside the admin folder</h5>	
    <vue-mce v-model="data" :config="config"></vue-mce>	
  </section>
</template>

<script>
export default {
  data() {
    return {
      data : 'Hi there from TinyMCE for Vue.js.',

      config: {
        branding: false, // To disable "Powered by TinyMCE"
        theme: 'modern',
        height: "60vh",
        width : "100%",
        elementpath: false, // To remove path in status bar in TinyMCE4
        plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help',
        menubar: 'file edit insert view format table tools help',
        toolbar1: 'undo redo | image | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 39px 34px 38px 42px 48px",
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
    }
  },
  methods: {
    onSave(){
      console.log(this.data)
    }
    /* handleInit (editor) {
      console.log(editor)
      // This handler fires when tinymce editor is successfully initialized.
      //   Receives tinymce editor instance as argument
      
      //   You can save the editor instance to variable and
      //   call editor.setContent(yourContent) any time you want
    }, */
    
    /* handleError (err) {
      console.log(err)
      // Fires when an error occurred. Receives error object 
    }, */
    
    /* handleInput (value) {
      console.log(value)
      // Fires whenever editor content changes. Receives generated HTML
    }, */
    
    /* handleChange (value) {
      console.log(value)
      // Fires only when editor emits focusout event. Receives generated HTML
    }, */
    
    /* handleDestroy (editor) {
      console.log(editor)
      // Fires before VueMce component destroys. Receives tinymce editor instance 
    }, */
  }
}
</script>

<style>
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}

</style>
