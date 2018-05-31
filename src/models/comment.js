// create Comment class here
class Comment {  //Comment class initiated
  constructor(imageId,comment){  //
    this.id = this.constructor.all.length;
    this.imageId = imageId;
    this.comment = comment;    
    this.constructor.all.push(this);
  }
//findImage Method
 findImage(imageId){
  var resim = Image.all[imageId]; //resim instance created from Image object
  resim.comments.push(this); 
 }

 commentEl(){
   return "<li id=${this.id}>${this.comment}</li>":
 }

}
Comment.all=[] //to clear