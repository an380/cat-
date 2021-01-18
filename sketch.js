var cat
var mouse
var garden
function preload() {
    tom1 = loadImage("tomOne.png")
    tom2=loadImage("tomTwo.png")
    jerry1 = loadImage("jerryOne.png")
    jerry2 = loadImage("jerryTwo.png")
    jerry3 = loadImage("jerryThree.png")
    backdrop = loadImage("garden.png")
}

function setup(){
    createCanvas(800,800);
    cat = createSprite(750,750,30,30)
    mouse = createSprite(50,50,30,30)
}

function draw() {

    background(255);
    if(keyPressed("LEFT_ARROW")){
        cat.x = cat.x-4
        cat.addImage(tom2)
        mouse.addImage(jerry3)
    }
    if (cat.x-mouse.x<cat.width/2+mouse.width/2){
        mouse.addImage(jerry1)
        cat.addImage(tom1)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
