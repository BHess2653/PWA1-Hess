



// 9-30-2014

/*

var animal = "Dog";
var age = 9;
var fName = "Pippy";
var lName = "Carroll";
var serviceDog = true;
var kennel = ["Fido", "Max", "Tom"];

console.log(animal+" "+age+" "+fName+" "+lName+" "+serviceDog+" "+kennel[0]);

var x=4;
var stuff=[x,20,"bob"];
stuff[1]=stuff[0]*2; //[x,8,"Bob"]
x--;
var y=stuff[0]*x; //y = 12
x+=3; //x=6
x--; x=5;

console.log(x,y,stuff[1]);

*//*


console.log(lowest([4,5,2,6,7,8,9,-1,4,6,5,4]));


function lowest(n){
    var lowNum =n[0];

    for (var i=1; i< n.length; i++){
        if (n[i]<lowNum){
            lowNum=n[i];
        }
    }

    return lowNum;

}

*//*


console.log(convertTemp(0,"c"));

function convertTemp(a,b){
    var temp=0;
    if (b=="f"){
        temp=a*2+30;
    }else
    {
        temp=(a-32)*(5/9);
    }
    return temp;
}




//var t = convertTemp(4,"f");


//f=c*2+30

*/





// 10-2-2014


//splice or pop 40 out

/*
var grades = [[90,50,60],[88,92,40],100];

console.log(grades[0][2]);

console.log(grades[0],grades[1],grades[2]);

//grades.splice([1],[0]);

console.log(grades[1]);


//grades[0][2]=100;

//grades[1].pop();

//console.log(grades[1].pop());

//grades[1].splice(2,1);

//[1].pop;

*//*


//console log bob

var grades = [[90,80,["Bob","Joe"]],[200,17],4];

console.log(grades[0][2][0]);

console.log(grades[0],grades[0][2],grades[1],grades[2]);

*/


//1-6
/*
for(var i=0;i<100;i++){

    var dice = Math.floor(Math.random()*11+2);    //if you want it to start from -2 to 15 it would be ()*15-2

    console.log(dice);
}

*//*

//-5 > 2

Math.floor(Math.random()*8-5);

//5-10

//~~(Math.random()*6+5);

*//*


function rnd(a,b){

    rnd = ~~(Math.random()*8-5) //3+4
    return rnd
}

rnd(-5,2); //4,6


//log random number between values

console.log(rnd);

*//*

Math.floor(Math.random()*8-5)

function rnd(l,h){

    return ~~(Math.random()*(h-l+1)+l);        //high number - low number +1         ()*(h-l+1)+l


}


console.log(rnd(-1,0));

*//*





var grade = 90;

if (grade>89){

    console.log("You got an A")


}else if(grade>79){

    console.log("You got a B");

}else if(grade>69){

    console.log("You got a C");

}else if(grade>59){

    console.log("You got a D");

}else {

    console.log("You Suck!!!");

}

switch(grade){

    case "A":
}

*//*

var dice=4;

switch(dice){
    case 1:      //case 1,2 <- can't do this.
        console.log("You rolled a one");
        break;
    case 2:
        console.log("You rolled a two");
    default:
        //blah blah blah blah blah
}



*//*

var grade = "A";

switch(grade){

    case "A":
        message("you got an A");
        break;
    case "B":
        message("you got a B");
        break;
    case "C":
        message("you got a C");
        break;
    default:
        //whatever


}

*//*



//console.log("bob");
var people = ["global folks"];
function(){
    var score=0;
    var people = ["bob", "joe"];
    console.log("started", people);

}

console.log(people);

*//*

//console.log("bob")
(function(){
    var score = 0;
    var people = ["bob","joe"];
    console.log("started", people);

})();

*//*

(function() {
    console.log("loaded");
    var glhfkng
    var name="bob";
    var gffdhdg
    console.log(Name);

})();

consoel.length(name);

*/

//10-4-2014 - objective literals

/*

(function(){

    var stuff = [80,90,100];
    var trash = [5,9,23,"Scott",8,9,11];
    enumerate(stuff);
    console.log(getAvarage(stuff));
    console.log(getAvarage([90,70]));

    // console.log("****************************");
   // enumerate(trash);

    function enumerate(a){
//        for (var i=0;i<a.length;i++){
//            console.log(a[i]);
//        }
        a.forEach(function(e){
            console.log("cool",e)

        })
    }
    function getAverage(n){
        var total=0;
        var ct=0;
        n.forEach(function(e){
            if (typeof e == "number"){
                ct++;
                total+=e;

            }

        });
        return total/ct;

    }

})();

*/


function cool(arr,t){

    var a = [1,2,"Bob",[4,7]];
    a.forEach(function(){



    });
    console.log(a.length);

}


//return the total number of elements that are only numbers




























