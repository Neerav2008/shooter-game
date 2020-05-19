



class Box extends BaseClass {
  constructor(x, y){
     

    super(x,y,70,70);
    this.image = loadImage("sprites/box.png");
    this.Visibility=255;
  }

 display(){
   if(this.body.speed < 7 ){
     super.display();
   }
   else{
     push();
    World.remove(world, this.body);
    this.Visibility =  this.Visibility - 5;
    
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
   }
 }
};