function setup() {
    createCanvas(windowWidth, windowHeight);
}

let x=120;
let y=100;
let speedX =5;
let speedY =5;

//This is a list of colors
cLr1= [0,0,0];
cLr2= [200,20,20];
cLr3= [0,0,225];



function draw() {
    background (clrList[2]);


    fill(200,30,30);
    circle (x,y,100);

    x= x + speedX;
    y= y + speedY;
   

    x= x + Speed;
    if (x >= windowWidth) || x=0)
    speed = speed(-1)*speed


    if (y >= windowWidth) || y=0)
        speed = speed(-1)*speed;
    
}


}
