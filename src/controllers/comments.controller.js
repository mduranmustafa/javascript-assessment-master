// Comments Controller Class
class CommentsController {
  constructor() { //Default constructor
	 this.$wrapper = $('#wrapper') // Assingn id wrapper
    this.$addCommentForm = $('.add-comment') //assingn .add-comment class 
	
  }
//Initialize the methods
  init() {
    this.addCommentFormListener()
	this.destroyCommentLiveEventListener() 
  }

  //Comment Form method
    addCommentFormListener() {
    $('.add-comment').toArray().forEach((child) => {
      child.addEventListener("submit", (event) => {
        event.preventDefault()
        let commentText = event.target.children[1].value
        let imageId = parseInt(event.target.dataset.id) //
        let comment = new Comment(commentText, imageId)
        this.render(comment)
        event.target.children[1].value = ""
      })
    })
  }
//render method
  render(commentObject) {
    $(`#image-${commentObject.image.id}`).append(commentObject.commentEl())
  }
  //Method to remove comment
  destroyCommentLiveEventListener(){
    var self = this;
    this.$wrapper.on('click', '.destroy-comment', function(){ //live event imageener
      $(this).parents('li').remove()
    });
  };
}
