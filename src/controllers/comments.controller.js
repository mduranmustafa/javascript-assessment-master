class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment') 
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', '.add-comment',(event) => {
      event.preventDefault();
      var imageId = parseInt($(this).parents('h2').next('ul').data('id'));
      var currentComment = $(event.currentTarget).find("input[type=text]").val()
      var yeniYorum = new Comment(imageid, comment);
      yeniYorum.findImage(imageid)
      $(event.currentTarget).find("input[type=text]").val("");
      let $imageul = this.$target.find("ul#comments-" + comment["imageid"])
    $imageul.append(comment.commentEl());
    });
  }
    
}
