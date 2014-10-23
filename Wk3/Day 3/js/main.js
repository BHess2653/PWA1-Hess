/**
 * Brandon Hess
 * 10/18/14
 * PWA-1
 */

//(function(){
//    var name = "Bob";
//    greetings();
//    function greetings(){
//        var score;
//        var name;
//        for (var i = 0; i<100; i++){
//            console.log("sfawawd")
//        }
//        console.log(name);
//        score=0;
//        name="Scott";
//    }
//    //greetings();
//
//})();

/********************************************/

//var masterGlobal = "Whoa";
//
//(function(){
//    var global = "global";
//
//    function outerFunction(){
//        var outer = "outside";
//        //console.log(inner);
//
//        function innerFunction(){
//            var inner = "inside";
//            console.log(outer);
//        }
//    }
//
//
//
//})();

/********************************************/


//var masterGlobal = "whoa";
//(function(){
//
//    function Employee(n,d,s){
//        this.name=n;
//        this.department=d;
//        this.salary=s;
//
//    }
//    Employee.prototype.hire = function(){
//        console.log(this.name+" is hired!")
//
//    };
//
//    Employee.prototype.fire = function(){
//        console.log(this.name+" is fired!")
//
//    };
//
//    var person = new Employee("Joe","Mascot",100);
//      person.hire();
//      person.fire();
//
////    person.name = "Joe";
////    person.department = "Mascot";
////    person.salary=100.00;
//
//})();

/********************************************/

(function(){

    for (var i = 0; i<5; i++){
        var emp = new Employee("Bob","teacher",100);

    }
    var element = document.createElement("p");
    document.body.appendChild(element);
    element.innerHTML= "Hello"


})();



































