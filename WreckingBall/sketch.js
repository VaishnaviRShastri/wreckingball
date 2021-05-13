const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const constraint = Matter.constraint

var engine,world;

function setup(){
    createCanvas(3000,800)
    engine=Engine.create()
    world=engine.world;

 ground=new Ground(600,600,1500,20)
 Box1= new Box(900,100,70,70);
 Box2= new Box(900,100,70,70);
 Box3= new Box(900,100,70,70);
 Box4= new Box(900,100,70,70);
 Box5= new Box(900,100,70,70);
 Box6= new Box(900,100,70,70);
 Box7= new Box(800,100,70,70);
 Box8= new Box(800,100,70,70);
 Box9= new Box(800,100,70,70);
 Box10= new Box(800,100,70,70);
 Box11= new Box(800,100,70,70);
 Box12= new Box(800,100,70,70);
 Box13= new Box(700,100,70,70);
 Box14= new Box(700,100,70,70);
 Box15= new Box(700,100,70,70);
 Box16= new Box(700,100,70,70);
 Box17= new Box(700,100,70,70);
 Box18= new Box(700,100,70,70);
 Box19= new Box(700,100,70,70);
 Box20= new Box(700,100,70,70);

 ball=new Ball(200,200,80,80)
 rope= new Rope(ball.body,{x:500,y:50})
}
function draw()
{
    background("white")
    Engine.update(engine)
 ground.display();
 Box1.display()
 Box2.display()
 Box3.display()
 Box4.display()
 Box5.display()
 Box6.display()
 Box7.display()
 Box8.display()
 Box9.display()
 Box10.display()
 Box11.display()
 Box12.display()
 Box13.display()
 Box14.display()
 Box15.display()
 Box16.display()
 Box17.display()
 Box18.display()
 Box19.display()
 Box20.display()

 ball.display()
 rope.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y:mouseY})
}


    