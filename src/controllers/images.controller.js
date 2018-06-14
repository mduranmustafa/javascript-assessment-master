'use strict';
// Images Controller 
function ImagesController() {
  this.$addImage = $('#add_image');
  this.$imageTitleInput = $('#image_title');
  this.$imageUrlInput = $('#image_url');
  this.$selectImageMenu = $('#select_image');
  this.$addCommentForm = $('#add-comment');
  this.$wrapper = $('#wrapper');
}
//add new method to ImagesController to  hide comment form startup
ImagesController.prototype.hideCommentForm = function(){
  this.$addCommentForm.hide(); // initially hide add comment form with self invoking method
};
//add new method to ImagesController to  destroy and clear the ids etc
ImagesController.prototype.destroyImageLiveEventListener = function(){
  var self = this;
  this.$wrapper.on('click', '.image-sil', function(){ 
    var imageId = parseInt($(this).parents('h2').next('ul').data('id'));
    Image.all.splice(imageId, 1, null);
    self.$selectImageMenu.find('option[value="'+imageId+'"]').remove();
    $(this).parents('.image').remove();
  });
};
//add new method to ImagesController to display images
ImagesController.render = function(image) {
  $('#images').append(image.imageEl());
}
//method to initialize
ImagesController.prototype.init = function() {
  this.hideCommentForm();
  this.destroyImageLiveEventListener();
  Image.load()
};
