

//var numbers = [5, 10, 25];
//var total=0;
//numbers.forEach(function(e){
//
//    total+=e;
//    console.log(e);
//});

//console.log("total",total);

//--------------------------------------------------------------\\

/*

(function(){
    var dog={name:"",age:0};

    //dot syntax
    dog.name="Max";
    dog.breed="German Shepard";//dot syntax blank(dot)blank


    //array access notation
    var prop="age";
    dog[prop] = 9;

    for (var p in dog){


        //console.log(typeof p);
        //dog. "name";
        //dog.p;
        console.log(p,dog[p]);
    }
*/

//--------------------------------------------------------------\\

/*

//    var t= document.querySelector("id");
    //console.log(evenNumbers([2,3,4,5,6,7,8]));
    function evenNumbers(arr){
        var total=0;
        //loop thru array using forEach() function
        arr.forEach(function(e){
            //determine if the element is even
            if (e%2==0){
                //add to our total of even numbers
                total++;
            }
        });
        return total;
    }
}());
*/

//--------------------------------------------------------------\\

/*

//    console.log(person.first);
      //(person) loads all info
      //person.first loads the first name
//
//    console.log(person.interests[0]);
//    console.log(person.interests.length);
//    console.log(person.favorites["food"]);
//    console.log(person.skills[0].tests[0].score);
//    console.log(person.skills[1].tests[0]);
//    console.log(person.skills[1].tests[1]);
//    console.log(person.skills[1].tests);

(function(){

    for(var i=0; i<person.skills.length; i++){

        console.log(person.skills[i].category);

         for(var j = 0; j < person.skills[i].tests.length; j++){


           console.log("name " + person.skills[i].tests[j].name + " - score " + person.skills[i].tests[j].score)

        }
        console.log("**********");

    }

})();


*/


(function(){

    var books = {

        title:"killer",
        author:"bob",
        chapters: [{chapterName:"c1", pages:1000},{chapterName:"c2",pages:2000}]


    }

    for (var i=0; i<books.chapters.length;i++){

       console.log(books.chapters[i].chapterName+ " "+books.chapters[i].pages);
    }


})();


































