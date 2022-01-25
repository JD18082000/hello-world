function setup() {
    createCanvas(windowWidth, windowHeight);
}

newList= [200,255,0,10,104,39,200,48,193];
x= 0
Speed = 5
y = 3



console.log(newList);

firstNum = newList[x];
console.log(firstNum);

/*
z= x + y
console. log(z);

*/





function draw() {
    background (255,0, 0,(x*0.01));

    //This is the circle on the left
    strokeweight(4);
    storke(0,0,255);
    fill(0,110,255)
    circle(200,200,10);

    listNum = newList[x];

    //circle on the
    strokeweight(2);
    stroke(225,0,255);
    fill(110,255,0);
    circle(x,100,20);
    
    nofill();
    strokeweight(1);
    stroke(0,110,255);
    circle(300,300,20);



    x= x + Speed;
    if (x > windowWidth) {
        speed = speed*-1 
    }
    //console.log(x);
}
