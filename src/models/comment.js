// create Comment class here

var allComments = []
//Decleratino of Comment class. Class names starts witk Capital letter 
class Comment {
  constructor(comment, imageId){ 
    Comment.all().push(this) //add comment to array
    this.id = Comment.all().length // use length as id
    this.image = this.findImage(imageId) // call findImage method with imageId parameter  
    this.commentContent = comment // assign comment
  }

  static all(){ //static method
    return allComments
  }
    //To list the comments
commentEl(){
     return `<li id='comment-${this.id}'><p> ${this.commentContent}   <button class="destroy-comment" data-id=${this.id}>X</button></p></li>` //display comments and close comments
   }
   //findImage Method. It takes imageId as parameter and searches in the imageId array.
  findImage(imageId){
     return Image.all.find((image) => {
       return image.id === imageId //return the matching imageId
     })
   }

   

}
