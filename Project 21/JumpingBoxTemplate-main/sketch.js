var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    movingbox = createSprite(random(20, 750), 40, 20, 20);
    movingbox.shapeColor = "grey";
    movingbox.velocityX = 8
    movingbox.velocityY = 8

    Platform1 = createSprite(150, 550, 100, 50);
    Platform1.shapeColor = "green";


    Platform2 = createSprite(150+150, 550, 100, 50);
    Platform2.shapeColor = "blue";

    Platform3 = createSprite(150+150+150, 550, 100, 50);
    Platform3.shapeColor = "red";


    Platform4 = createSprite(150+150+150+150, 550, 100, 50);
    Platform4.shapeColor = "yellow";

    Edges = createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    movingbox.bounceOff(Edges);



    //add condition to check if box touching surface and make it box
    if(movingbox.isTouching(Platform1)){
        movingbox.shapeColor = "green";
        movingbox.bounceOff(Platform1);
    }
    else if(movingbox.isTouching(Platform2)){
        movingbox.shapeColor = "blue";
        movingbox.bounceOff(Platform2);
    }
    else if(movingbox.isTouching(Platform3)){
        movingbox.shapeColor = "red";
        movingbox.bounceOff(Platform3);
    }
    else if(movingbox.isTouching(Platform4)){
        movingbox.shapeColor = "yellow";
        movingbox.bounceOff(Platform4);
    }

    drawSprites();
}