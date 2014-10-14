/**
 * Brandon Hess
 * 10/9/14
 * PWA-1
 */

/*

(function(){
    var student1 = {name:"Joe",
                   grades:[90,80,95],
                   address:{street:"960 Rolling Hills",city:"Orlando"}
                  };
    var student2 = {name:"John",
                    grades:[80,70,85],
                    address:{street:"Mt.Dew",city:"Pizza"}
                   };
    var student3 = {name:"shelly",
        grades:[10,20,30],
        address:{street:"Gatoraide",city:"Tampa"}
    };

    var students = [student1,student2,student3];          //var students = [{jfakjwfakwj},{auwfauwfb}];
    var studNum = 0;

    var dom = {
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        btn:document.querySelector("button")
    };

    dom.btn.addEventListener("click",display);

    display();

    function display(){

        dom.name.innerHTML = students[studNum].name;
        dom.address.innerHTML = students[studNum].address.street +" "+students[studNum].address.city;
        //dom.grades.innerHTML = students[studNum].grades;
        studNum++;
        if (studNum==students.length){
            studNum=0
        }
    }

})();

*//*

(function(){

    var output = document.querySelector("#test");

    var movie1 = {title:"Dave" ,stats:{rating:"PG",runningTime:120}};
    var movie2 = {title:"Aliens" ,stats:{rating:"R",runningTime:90}};

    var movies = [movie1,movie2]; // or [{title:"Dave" ,stats:{rating:"PG",runningTime:120}},{title:"Aliens" ,stats:{rating:"R",runningTime:90}}];


    document.querySelector("button").addEventListener("click",onClick);

   //or this way
    //var btn = document.querySelector("button");
    //btn.addEventListener("click",onClick);


    function onClick(){

        updateHTML();
        //console.log("click");
        //btn.removeEventListener("click",onClick);

    }

    function updateHTML(){
        output.innerHTML = movie.stats.rating+" "+movie.stats.runningTime; //movie.title or "Good Luck" or movie.stats.rating+" "+movie.stats.runningTime
    }

})();

*/

(function(){
    var loop = [[1,2,3],[4,5,6,19],[7,8,9]];

    for (var i=0;i<loop.length;i++){
        //console.log(i,loop[i]);
        for (var j=0;j<loop[i].length;j++){
            console.log(i,j,loop[i][j])
        }
    }

})();







































