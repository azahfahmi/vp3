var dog, happyDog, database, foodS, foodStock;
var dogha;
var database;
var button1, button2;
var fedTime, lastFed;
var foodObj;
var gar, bed, wash;
var eadgs, changegs;

function preload()
{
  dogha = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  gar = loadImage("VPi/Garden.png");
  bed = loadImage("VPi/Bed Room.png");
  wash = loadImage("VPi/Wash Room.png");
}

function setup(){
  createCanvas(500, 500);
  dog = createSprite(250,350,20,20);
  dog.addImage(dogha);
  dog.scale = 0.3;

  foodObj = new Food(20,20,20,20);
  feed=createButton("Feed the dog");
  feed. position(700,95);
  feed . mousePressed ( feedDog) ;

  addFood=createButton("Add Food") ;
  addFood . position(800, 95);
  addFood . mousePressed(addFood) ;

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", function(data){
  foodS = data.val();
  })
  fedTime=database. ref("FeedTime");
  fedTime.on("value", function(data){
  lastFed=data. val()})
  fill(255, 255, 254);
  textSize(15);
  
  if(lastFed>=12){
    text("Last Feed : "+ lastFedx12 + " PM", 350,30);
  }
  else if(lastFed==0){
    text("Last Feed : 12 AM" , 350, 30);
  }else{
    text("Last Feed : "+ lastFed + " AM", 350, 30);
  }

  readState=database.ref("gameState");
  readState.on("value", function(data){
  gameState=data.val();
  })
}

function draw() {  
  background(46, 139, 87);
  foodObj.display();
  if (gameState!=="Hungry"){
    feed.hide ();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }
  
  currentTime=hour();    
  if (currentTime==(lastFed+1)){
    update("Playing");
    foodObj.garden();
  }else if(currentTime==(lastFed+2)){
    update("Sleeping");
    foodObj.bedroom();
  }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("Bathing");
    foodObj.washroom();
  }else{
    update("Hungry");
    foodObj.display();
  }
  drawSprites();
  textSize(20);
  fill("black");
  text("Food left : " + foodS,170,200);
}

function writeStock(x){
  x = x - 1;
  console.log(x);database.ref(' / ').update({
    Food : x
  })
  if(x<=0){
    x = 0;
  }
  else{
  }
}

function addFood(){
  foodS++;
  database. ref('/ ').update({
  Food : foods
  })
}

function feedDog(){
  dog.addImage (happyDog);
  foodobj.updateFoodStock(food0bj.getFoodStock()-1);
  database.ref(' / ').update({
  Food : foodObj.getFoodStock(),
  FeedTime : hour()
  })
}

function update(state){
  database.ref( ' /' ).update({
  gameState : state
  })
}