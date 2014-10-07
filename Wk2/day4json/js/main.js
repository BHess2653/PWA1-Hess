

//var numbers = [5, 10, 25];
//var total=0;
//numbers.forEach(function(e){
//
//    total+=e;
//    console.log(e);
//});

//console.log("total",total);

//--------------------------------------------------------------\\

(function(){
    var dog={name:"",age:0};

    //dot syntax
    dog.name="Max";
    dog.breed="German Shepard";//dot syntax blank(dot)blank


    //array access notation
    var prop="age";
    dog[prop] = 9;




//    var t= document.querySelector("id");
    console.log(evenNumbers([2,3,4,5,6,7,8]));
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


//--------------------------------------------------------------\\








































