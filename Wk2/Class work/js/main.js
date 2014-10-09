/**
 * Brandon Hess
 * 10/9/14
 * PWA-1
 */


// 10-9-2014

/*

(function(){
    for (var i=0;i<5;i++){
        // console.log("outer",i);
        for (var j=0;j<3;j++){
            // console.log("inner",j);
        }
    }
    var hard = [["a","b","c"],["d","e","f"],["g","h","i"]];
    var easy = ["x","y","z"];

    for (var k=0;k<easy.length;k++){
        // console.log()
    }
})();

*/

//(function(){
//    document.querySelector("#output"/*"p"*/).innerHTML = "Hello World!";
//    var btn = document.querySelector("button");
//    console.log(btn);
//    btn.addEventListener("click",onClick);
//
//    function onClick(){
//        console.log("click me");
//    }
//})();

(function(){
    var num = ~~(Math.random()*10+1);
    var guessRemain = 3;
    var userInput = 0;
    var dom = {
        btn:document.querySelector("button"),
        output:document.querySelector("#output"),
        input:document.querySelector("#input")
    };

    dom.btn.addEventListener("click",onGuess);
    window.addEventListener("keydown",onDown);

    function onDown(evt){
        if (evt.keyCode==13){
            onGuess();
        }
    }
    console.log(num);
    function onGuess(){
        userInput = dom.input.value;
        if (userInput>0 && userInput<11){
            guessRemain--;
            if (guessRemain>0){
                check();
            }
        }else
        {
            dom.documentElement.innerHTML = "can you read!!!! 1-10!!!!! Damn dude!"
        }
        //console.log(typeof userInput);
    }
    function check(){
        //dom.output.innerHTML = "Guess my magic number between 1-10";
        if (userInput>num){
            dom.output.innerHTML="too high guesses remaining "+ guessRemain;
        }else if(userInput<num){
            dom.output.innerHTML="too low guesses remaining "+ guessRemain;
        }else {
            dom.output.innerHTML = "Nice Job!"
        }
    }
   // if (what you typed in == num)

})();
























