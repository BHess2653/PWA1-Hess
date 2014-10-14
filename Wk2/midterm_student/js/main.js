/*
    Mid Terms for PWA1
    do NOT modify the included HTML/CSS file
    read comments in HTML
    Make sure the first student's information is displayed when the browser loads
*/

(function(){

    //var student = {name:"Brandon Hess", address:{street:"508 Blaine St",city:"Yorkville",zip:"60560"},grades:[80,75,90]};

	var student1 = {name:"Brandon Hess", address:{street:"508 Blaine St",city:"Yorkville",zip:"60560"},grades:[80,75,90]};
    var student2 = {name:"John Smith", address:{street:"101 Tardis Rd",city:"Cardiff",zip:"90290"},grades:[90,90,90]};
    var student3 = {name:"Oliver Queen", address:{street:"901 Queen Dr",city:"Speed",zip:"19535"},grades:[85,80,90]};

    var students = [student1,student2,student3];
    var studNum =0;


    var dom = {
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        grades:document.querySelector("#grades"),
        average:document.querySelector("#avg"),
        btn:document.querySelector("#button")


    };




    dom.btn.addEventListener("click",display);

    display();

    function display() {

        dom.name.innerHTML = students[studNum].name;
        dom.address.innerHTML = students[studNum].address.street + " " + students[studNum].address.city;
        dom.grades.innerHTML = "Grade 1: " + students[studNum].grades[0] + "  " + "Grade 2: " + students[studNum].grades[1] + "  " + "Grade 3: " + students[studNum].grades[2];
        studNum++;
        if (studNum == students.length) {
            studNum = 0;
        }

    }
    var total = students[studNum].grades[0]+students[studNum].grades[1]+students[studNum].grades[2];
    var length = students[studNum].grades.length;

    function getAverage(total,length){

        var avg = total / length;

        //console.log(Math.round(avg));

        dom.btn.addEventListener("click", display);
        dom.average.innerHTML = "Average: "+Math.round(avg);

    }
    getAverage(total,length);



})();  // end self executing closure




























//    dom.btn.addEventListener("click", onClick);
//
//
//
//    function onClick(){
//
//        dom.name.innerHTML = "Name: "+student.name;
//
//        dom.address.innerHTML = "Address: "+student.address.street+" "+student.address.city+" "+student.address.zip;
//
//        dom.grades.innerHTML = /*"Grades: "+*/"Grade 1: "+student.grades[0]+"  "+"Grade 2: "+student.grades[1]+"  "+"Grade 3: "+student.grades[2];
//
//        //dom.average.innerHTML = "Average: "+avg;
//
//    }
