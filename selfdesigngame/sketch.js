var bg;
var bgimage;
var gun,gunimage;
var bottle1,bottle2,bottle3,bottle4;
var bottle1img,bottle2img,bottle3img,bottle4img
var bottle;
var fireball,fireballimg;
var score=0;
var bottlegrp;
var fireballgrp;
var poison,poisonimg;
var poisongrp
var gamestate="play"
var gunsound,waterfall,glasssound;

function preload()
{


    bgimage=loadAnimation("images/bg2.gif");
    gunimage=loadAnimation("images/gun1.png","images/gun2.png","images/gun3.png");
    bottle1img=loadImage("images/bottle1.png");
    bottle2img=loadImage("images/bottle2.png");
    bottle3img=loadImage("images/bottle3.png");
    bottle4img=loadImage("images/bottle4.png");
    fireballimg=loadImage("images/fireball.png");
    poisonimg=loadImage("images/poison.png");
    gunsound=loadSound("sound/gun1.wav");
    glasssound=loadSound("sound/glassbreak.wav");
    waterfall=loadSound("sound/waterfall.wav");
}


function setup()
{
    createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    bg.addAnimation("bgimage1",bgimage);
    bg.scale=2;
    gun=createSprite(displayWidth/2,displayHeight/2+315);
    gun.addAnimation("gun",gunimage);
    gun.scale=0.7;
    frameRate(30);
    bottlegrp=createGroup();
    fireballgrp=createGroup();
    poisongrp=createGroup();
  //  waterfall.play();

                
}


function draw()
{
if(gamestate==="play")
{
   var rand=Math.round(random(1,5));
   if(rand===3||rand===5)
   {
       createpoison();
   }
   else{
    createbottle();
   }

   if(keyWentDown("w"))
    {
        fire();
        fireball.velocityY=-2
        gunsound.play();



    }
    if(keyWentDown("a"))
    {
        fire();
        fireball.velocityY=-2
        fireball.velocityX=-2
        gunsound.play();


    }

    if(keyWentDown("d"))
    {
        fire();
        fireball.velocityY=-2
        fireball.velocityX=2
        gunsound.play();


    }


        if(fireballgrp.isTouching(bottlegrp))
        {
            score=score+5
            bottlegrp[0].destroy()
            glasssound.play();



        }

        if(fireballgrp.isTouching(poisongrp))
        {
            gamestate="end"
            glasssound.play();
        }

    
        


    drawSprites();
    textSize(40)
    fill("yellow")
    text("score:"+score,1000,30)
}
    

if(gamestate==="end")  
{
            background("black");
            textSize(50)
            fill("red");
            stroke("green");
            strokeWeight(20);
            text("GAMEOVER",500,500);

}

}


function createbottle()
{
    if(frameCount%60===0)
    {
        bottle=createSprite(20,300,30,30)
        bottle.x=random(500,900)
        bottle.velocityY=2
        bottle.scale=0.2
        var rand=Math.round(random(1,4))
        if(rand===1)
        {
            bottle.addImage(bottle1img)

        }

        if(rand===2)
        {
            bottle.addImage(bottle2img)

        }

        if(rand===3)
        {
            bottle.addImage(bottle3img)

        }

        if(rand===4)
        {
            bottle.addImage(bottle4img)

        }

        bottle.lifetime=120

        bottlegrp.add(bottle)


    }
    

}

function fire()
{

    fireball=createSprite(displayWidth/2,displayHeight/2+280);
    fireball.addImage(fireballimg)
    fireball.scale=0.1
    fireballgrp.add(fireball)
    




}


function createpoison()
{
    if(frameCount%60===0)
    {
        poison=createSprite(20,300,30,30)
        poison.x=random(500,900)
        poison.velocityY=2
        poison.scale=0.2
        poison.addImage(poisonimg);

        poison.lifetime=120

        poisongrp.add(poison)


    }
    

}