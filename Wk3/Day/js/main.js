/**
 * Created by GM_Dahaka on 10/16/14.
 */
/*
console.log("loaded");

(function(){

//    var dog = {name:"Pippi",age:9,breed:"German Shepard"};
//
//    var jeffDog = new Dog();
//    jeffDog.name="Pippi";
//
//    var alexDog = new Dog();
//    alexDog.name="Eevee";
//
//    var kennel = [jeffDog,alexDog];
//
//    console.log(jeffDog.name);
//
//    function Dog(){
//
//        console.log("dog created");
//        this.name = "";
//        this.age = 0;
//        this.breed = "";
//    }

    var names = ["Bob","Scott","Princess","Fido","Lassie"];
    var maxAge = 15;
    var kennel = [];

    for (var i = 0;i<5/*101*//*;i++){
        //var dog = new Dog();
        kennel.push(new Dog());
        //console.log(i,dog.name);
    }

    console.log(displayDogNames());

    function Dog(){  /* Dog Blueprints *//*
        console.log("dog created");
        var rn = ~~(Math.random()*names.length);
        this.name = names[rn];
        names.splice(rn,1);

        //this.name = names[~~(Math.random()*names.length)];
        this.age = ~~(Math.random()*maxAge+1);

    }

    function displayDogNames(){
        kennel.forEach(function(dew){
            console.log(dew.name);
        })
    }

    //kennel[31].name = "kewl";
    //console.log(kennel[0]);

})();
*/






console.log("Loaded");

(function(){
    var students = [];
    var studNum = 0;

    createStudents();
    displayData();
    //console.log(students);

    function createStudents(){
        classRoom.students.forEach(function(e){
            var kid = new Kid();
            kid.name = e.name;
            kid.id = e.id;
            kid.grades = e.grades;
            students.push(kid);
        })
    }

    function displayData(){
        students.forEach(function(e){
            console.log("Name : "+ e.name);
            console.log("Id : "+ e.id);
            console.log("Average : "+ e.average);
            console.log("*************************");
        })
    }








    function Kid(){
        this.name="";
        this.id=0;
        this.grades=[];
        this.food="pizza";
    }

    Kid.prototype.eat = function(){
        console.log(this.name+ " is eating "+this.food);
    };

    Kid.prototype.average = function(arr){
        var total=0;
        this.grades.forEach(function(e){
            total+=e;
        });
        return total/this.grades.length

    };

    //console.log(students[0].name+" "+Math.round(students[0].average()));
    //console.log(students[1].name+" "+Math.round(students[1].average()));
    //console.log(students[2].name+" "+Math.round(students[2].average()));



    students[0].average();
    students[0].eat();

})();













































