//Final Exam
//Brandon Hess
//10/23/2014
//PWA-1 Final Exam

(function(){
//good luck!

var days = [data.results.forecast];
var dayNum = 0;

var dom = {
    info:document.querySelector("#info"),

    date:document.querySelector("#wd1"),
    day:document.querySelector("#wd2"),
    high:document.querySelector("#wd3"),
    low:document.querySelector("#wd4"),
    text:document.querySelector("#wd5"),
    btn:document.querySelector("button")

};

    dom.btn.addEventListener("click",onClick);

    //document.querySelector("button").addEventListener("click",display);

    onClick();
    function onClick(){
        dom.info.innerHTML = data.location.city+", "+data.location.region;

        dom.date.innerHTML = "Date : "+data.results.forecast[dayNum].date;
        dom.day.innerHTML = "Day : "+data.results.forecast[dayNum].day;
        dom.high.innerHTML = "High : "+data.results.forecast[dayNum].high+"°";
        dom.low.innerHTML = "Low : "+data.results.forecast[dayNum].low+"°";
        dom.text.innerHTML = "Text : "+data.results.forecast[dayNum].text;

        dayNum++;
        if (dayNum==days.length){
            dayNum=0
        }
    }







//Console.logged stuff

    createStudents();
    displayData();

    function createStudents(){
        data.results.forecast.forEach(function(e){
            var info = new Info();
            info.date = e.date;
            info.day = e.day;
            info.high = e.high;
            info.low = e.low;
            info.text = e.text;
        })
    }

    function displayData(){
        data.results.forecast.forEach(function(e){
            console.log("Date : "+ e.date);
            console.log("Day : "+ e.day);
            console.log("High : "+ e.high+"°");
            console.log("Low : "+ e.low+"°");
            console.log("Text : "+ e.text);
            console.log("*************************");
        })
    }
    function Info(){
        this.date="";
        this.day="";
        this.high=0;
        this.low=0;
        this.text="";
    }


})();
