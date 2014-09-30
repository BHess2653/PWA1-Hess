
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
































