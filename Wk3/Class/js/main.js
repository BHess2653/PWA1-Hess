/**
 * Brandon Hess
 * 10/14/14
 * PWA-1 Wk3
 */



//review of midterm
/*

(function(){

    var student1 = {name:"Scott",address:{street:"a street",city:"orlando"},grades:[80,90,100]};
    var student2 = {name:"Shelly",address:{street:"b street",city:"tampa"},grades:[5,88,89,12]};
    var student3 = {name:"Joe",address:{street:"c street",city:"fargo"},grades:[77,88,99]};

    var students = [student1,student2,student3];
    var studNum = 0;



    var dom = {
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        grades:document.querySelector("#grades"),
        avg:document.querySelector("#avg")
    };

    document.querySelector("#button").addEventListener("click",onClick);

    updateHtml();

    function onClick(){

        studNum++;
        if (studNum==students.length){
            studNum=0;
        }
        updateHtml();

    }

    function updateHtml(){

        var gs = "";
        dom.name.innerHTML = students[studNum].name;
        dom.address.innerHTML = students[studNum].address.street + " " + students[studNum].address.city;
        //dom.grades.innerHTML = students[studNum].grades;
        for (var i=0;i<students[studNum].grades.length;i++){
            //dom.grades.innerHTML = students[studNum].grades[i];
            gs+="Grade "+(i+1)+":"+" "+students[studNum].grades[i]+" ";
        }
        dom.grades.innerHTML = gs;
        dom.avg.innerHTML = Math.round(getAverage(students[studNum].grades));


    }

    function getAverage(arr){

        var total=0;
        arr.forEach(function(e){
            total+=e;

        });
        return total/arr.length;

    }

})();

*/

//Date

/*

console.log("loaded");

(function(){

    var d = new Date();

    var months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    console.log(d.getMonth()+1+"/"+ d.getDate()+"/"+ d.getFullYear());

    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();
    var day = d.getDay();

    var coolDate = month+1 + "/" + date + "/" + year;
    console.log(coolDate);

    var coolDate2 = days[day]+","+months[month]+" "+date+" "+year;
    console.log(coolDate2);

})();

*/

//

var pattern = /^\d{3}-\d{2}-\d{4}$/

document.querySelector("button").addEventListener("click",onClick);


function onClick(){
    var input = document.querySelector("#input").value;
    var pass = pattern.test(input);
    console.log(pass);


}











