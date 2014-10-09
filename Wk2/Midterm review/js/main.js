/**
 * Brandon Hess
 * 10/9/14
 * PWA-1
 */


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











































