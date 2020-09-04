var player;
var spawnPoints=[[1,1],[5,2],[2,2],[3,2],[4,2]]
var finalLevels=[levels.Levels.perfect1,
      levels.Levels.base3
]
var activeLevel=0
var deadEnimiesCount=0
class Game {
     constructor(){
        parr = new Array(spawnPoints.length)
        console.log(levels)
        data = finalLevels[activeLevel]
        if(!data.spawnPoints)data.spawnPoints =spawnPoints
        console.log(data.data)
        level = new Level(data.data,data.spawnPoints)
        player =new Player(1,level.data.length-2,level.data)
        for (let i = 0; i < level.spawnPoints.length; i++) {
            parr[i]=new Enemy(level.spawnPoints[i][1],level.spawnPoints[i][0],level.data)
            
        }
        this.ui=createCanvas(width,height)
     }
     play(){
        var l=level.data.length
        var centery=gb*l/2
        var mappedValue=map(player.sprite.y,gb,gb*l,gb*5,gb*(l-5),true)
      
        camera.position.y =mappedValue
        
        var centerx=gb*level.data[0].length/2
        camera.x=map(player.sprite.x,gb,centerx*2,centerx/2,centerx*1.5)
        //showButtons();
        //console.log(frameRate())
          background(230,250,250)
            level.display()
         
          level.drawground()
          //e1.display();
          for (let i = 0; i < parr.length; i++) {
            parr[i].display()
        }
         
          level.drawWalls()
       
          player.display()
         // drawSprites()
        // clear();
      
          if(player.health<=0)this.resetGame()
          
		strokeWeight(gb/10)
		stroke(255,250,0,200);
		noFill();
    ellipse((click.j+1)*gb,(click.i+1)*gb,gb/2,gb/2);
    fill("black")
    strokeWeight(1)
    stroke(50,50,0)
     textSize(gb)
     
 text("🎯"+deadEnimiesCount+"/"+parr.length,camera.x,camera.y-height/3)

 if(deadEnimiesCount==parr.length){activeLevel++
this.resetGame()}
     }
     resetGame(){
       allSprites.destroyEach();
      parr = new Array(spawnPoints.length)
      console.log(levels)
      data = finalLevels[activeLevel]
      if(!data.spawnPoints)data.spawnPoints =spawnPoints
      console.log(data.data)
      level = new Level(data.data,data.spawnPoints)
      player =new Player(1,level.data.length-2,level.data)
      for (let i = 0; i < level.spawnPoints.length; i++) {
          parr[i]=new Enemy(level.spawnPoints[i][1],level.spawnPoints[i][0],level.data)
          
      }
     }
    
}