function setup() {
    createCanvas(windowWidth, windowHeight);
}

newList= 
x= 0
Speed = 5
y = 3

/*
y = 3
z = x + y
console. log(z);

*/





function draw() {
    background (255, y , 0 );

    //This is the circle on the left
    strokeweight(4);
    storke(0,0,255);
    fill(0,110,255)
    circle(200,200,10);

    //circle in the middle
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
}