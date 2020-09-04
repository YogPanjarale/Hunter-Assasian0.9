class Form{ 
    constructor(){
        this.startButton=createButton("start")
    }
    show(){
    this.startButton.style('width', gb*4+"px");
    this.startButton.style('height', gb*1+"px");
    this.startButton.style('font-size',gb/2+"px");
    this.startButton.style('align', 'center')
    this.startButton.style('background', 'lightblue');
    this.startButton.position((width/2)-(gb*2),camera.y-gb)
    this.startButton.mousePressed(()=>{
       game=new Game()
       this.hide()
    })
    }
    hide(){
        this.startButton.hide()
    }
}