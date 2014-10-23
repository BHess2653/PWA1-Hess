/**
 * Brandon Hess
 * 10/21/14
 * PWA-1
 */

console.log("Practice");

(function(){
    //Strings
            var name = "SCOTT";
            var c = name.charAt(0);
            var part = name.substring(1,2); // (start on,end on)
            console.log(part);

    console.log("***************************************************");

    //nested loops
            var grades = [[80,90,100],[66,77,88]];

            for (var i = 0; i < grades.length; i++){
                console.log("Outer",i,grades[i]);
                for (j=0;j<grades[i].length;j++){
                    console.log("Inner",j,grades[i][j]);
                }
            }

    console.log("***************************************************");

    //For each
            var stuff = [3,"bob",14,true,[2,3,4]];
            stuff.forEach(function(e){
                console.log(e);
            });
            for (var ii=0;ii<stuff.length;ii++){
                console.log(stuff[ii]);
            }

    console.log("***************************************************");

    //Helper functions for arrays
            var spliceEx = [4,5,"Bob",6];
            var x = spliceEx.splice(2,1);
            spliceEx.push(x);
            console.log("Spliced stuff",x,"    New array after splice",spliceEx);

    console.log("***************************************************");

    //Split
            var words = "Bob,Scott,Dave,John,Kelly,Car,Book,Pencil,Desk";
            var cool = [];
            console.log("Before Split", cool);
            cool = words.split(",");
            console.log("After Split", cool);

    console.log("***************************************************");

    //Functions
            function getArea(l,w){
                console.log("inside function", l*w);  //not needed just showing it works
                return l*w;
            }

            var area = getArea(5,4);
            console.log("area", area);

    console.log("***************************************************");

    //DOM
            var domNode = document.querySelector("p");
            console.log("original id",domNode.id);
            domNode.innerHTML = "Eat Pizza";
            domNode.id = "newID";
            console.log("New id",domNode.id);

            var newElement = document.createElement("canvas");
            //document.body.appendChild(newElement);

            var json = {title:"1984",price:10,author:"George",stats:[4,56]};
            for (var prop in json){
                console.log(prop,json[prop],typeof  json[prop]);
            }

            console.log(json["title"]);


    //End of Notes

})();

/*********************************************************************************/

console.log("Practice 2");

(function(){

    function Person(){
        this.name=Person.prototype.list[~~(Math.random()*Person.prototype.list.length)]; //=n
        this.ssn=123456789;
        this.age=0;
        this.grades = [];

    }

    Person.prototype.list = ["bob","kelly","dave","scott"];

    Person.prototype.eat = function(){
        console.log(this.name, "is eating");
    };

    Person.prototype.sleep = function(){
        console.log(this.name, "is sleeping");
    };

    Person.prototype.getAverage=function(){
        var total =0;
        this.grades.forEach(function(e){
            total+=e;
        });
        return total/this.grades.length;
    };

    //console.log(Person.prototype);

    //var person = new Person(); //change Person("Dave")
    //person.name = "Joe";      // remove this line if ^
    //person.eat();


    var dave = new Person();
    dave.eat();
    dave.grades = [10,20,30];
    var average = dave.getAverage();
    console.log(average);


    var kelly = new Person();
    kelly.grades = [100,100,99];
    console.log(kelly.getAverage());










//    Array.prototype.cool = function(){
//        alert ("YOU SUCK as JS");
//    };
//
//    var stuff = [4,5,6];
//    stuff.cool();

})();












































