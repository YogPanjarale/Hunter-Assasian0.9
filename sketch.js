var data= [
  [1,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1], 
  [1,0,1,0,0,0,0,0,1,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,1,0,1,0,0,0,1,1,1], 
  [1,0,1,0,0,0,0,0,0,0,1], 
  [1,0,1,0,1,1,0,1,1,0,1], 
  [1,0,0,0,1,0,0,0,0,0,1], 
  [1,1,1,0,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,0,0,1,0,1,0,0,1], 
  [1,0,1,0,0,0,0,1,0,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,1,1,1,0,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,1,1],
 ] 
 var activeBlock=10
 var game;
 // var spawnPoints=[[1,18],[6,]]
  var gb=75,database
var level,parr,e1,example_img;
function preload(){
 //example_img=loadImage("Images\Top_Down_Survivor\trail.png")
}
function setup(){
  
  //database =firebase.database();
  createCanvas(window.innerWidth,window.innerHeight);
  console.log(width,height)
  gb=map(width,1000,10000,150,1500)
  
  gb=map(gb,100,200,2,4)*50
  gb=int((int(gb/10)*10)/5 )*5

   console.log(width,height,gb)
  //createEditor()
  // var ref;
// var arrRef=database.ref('/')
//  arrRef.on("value",(dt)=>{
//    console.log(dt.val()+"inside ")
//  ref = dt.val();
// })

  //e1= new Enemy(1,17,level.data)
  //game=new Game()
  form=new Form()
}
var click={i:0,j:0}
function draw(){
form.show()
 if(game)game.play()
}
function mouseClicked(){ 
   if(edit){ var i=gi(mouseX, mouseY)
    level.data[i.y][i.x]=activeBlock
  }

  for (let i = 0; i < parr.length; i++) {
  
   // parr[i].moveToPos()
  }
  if(game!=null)
    player.moveToPos()
  console.log("mouseCliked")
  }
