// create Comment class here

var allComments = []

class Comment {
  constructor(comment, imageId){
    Comment.all().push(this)
    this.id = Comment.all().length
    this.image = this.findImage(imageId)
    this.commentContent = comment
  }

  static all(){
    return allComments
  }
    //To list the comments
commentEl(){
     return `<li id='comment-${this.id}'><p> ${this.commentContent}   <button class="destroy-comment" data-id=${this.id}>X</button></p></li>`
   }
  findImage(imageId){
     return Image.all.find((image) => {
       return image.id === imageId
     })
   }

   

}
