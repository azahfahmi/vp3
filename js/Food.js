class Food{
  constructor(){
      var foodStock;
      var lastFed;
      this.image = loadImage("images/Milk.png");
  }
  bedroom(){
    background(bedroom, 550, 500);
  }
  garden(){    
    background(garden, 550, 508);
  }
  washroom(){
    background(washroom, 550, 508);
  }
  
  display(){
    var x=80, y=100;
    imageMode(CENTER);    
    image(this.image, 720, 220, 70,70);

    if (this. foodStock!=0){
      for (var i=0; i<this.foodStock; i++) {
        if(i*10==0){
          X=80;
          y=y+50;
        }
        image(this.image, x, y, 50, 50);
        X=x+30;
      }
    }
  }  
}
