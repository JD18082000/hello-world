function setup() {
    createCanvas(windowWidth, windowHeight);
}

let x=120;
let y=100;
let speedX =5;
let speedY =5;

//This is a list of colors
clr1= [0,0,0];
clr2= [200,20,20];
clr3= [0,0,255];

clrLIST = [clr1,clr2,clr3];
counter =1;



function draw() {
    console.log(clrLIST);
    console.log(clrLIST[1]);
    //background (clrList[counter][0],clrlist[counter[1]],clrlist[counter[2]]);
    background(clrLIST[counter]);

    fill(200,30,30);
    circle (x,y,100);

    x= x + speedX;
    y= y + speedY;
    counter = counter*-1;

    if (counter= clrLIST.length-1 || counter <=0){
        direction = direction*-1
    }
    
    if(x >= windowwidth || x<=0){
        speedX= (-1)*speedX;
    if(y >= windowHeight || y<=0){
        speedY = (-1)*speedY;
    }
    }

}
