const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base1=new Ground(600,350,310,15)
    base2=new Ground(1000,200,300,15)
    //1st level
   box1=new Box(600,350,20,20)
    

}

function draw(){
    background("black")
    base1.display()
    base2.display()
    box1.display()


}