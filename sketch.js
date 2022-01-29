const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;
const Constraint= Matter.Constraint;
var world, engine;
var ground, block1, string1
function preload(){

}

function setup() {

createCanvas(1400,600);

engine= Engine.create();
world= engine.world;

var options={
isStatic:true
}

console.log(block1)

console.log(string1)

ground=Bodies.rectangle(300,590,2800,15,options);
World.add(world,ground);
console.log(ground)

block1=new block(700,200,100,40)
string1= new string(block1.body,{x:700,y:20})
}

function draw() {
background("lightblue");
Engine.update(engine)

rectMode(CENTER)
rect(ground.position.x,ground.position.y,2800,15);

Matter.Body.setVelocity(block1,{x:20,y:0})
console.log("")
block1.display()
string1.display()



}