/*
 Brandon Hess
 ID# 4621251
 10-4-2014
 PWA-1
 */


//New Code 2

(function(){
    console.log("FIGHT!");
    var playerOne = {name:"Scorpion", health:100, damage:20};
    var playerTwo = {name:"Sub-Zero", health:100, damage:20};
    var players = [playerOne, playerTwo];
    var button = document.querySelector('.buttonblue');
    var round = 0;


    function fight (){

        var minDamage1 = playerOne.damage * .5;
        var minDamage2 = playerTwo.damage * .5;
        var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);
        playerOne.health-=f1;
        playerTwo.health-=f2;
        console.log(playerOne.name + ":" + playerOne.health + " " + playerTwo.name + ":" + playerTwo.health);
        var results = winnerCheck();
        console.log(results);
        if(results === "no winner"){
            document.querySelector('#kabal p').innerHTML= playerOne.name + ":" + playerOne.health;
            document.querySelector('#kratos p').innerHTML= playerTwo.name + ":" + playerTwo.health;
            round++;
            document.getElementById('round_number').innerHTML= "Round #" + round + " is over!";
        }else{
            document.querySelector('#kratos p').innerHTML= results;
            document.querySelector('#kabal p').innerHTML = "";
        }
    };


    function winnerCheck(){

        var result = "no winner";
        if(playerOne.health < 1 && playerTwo.health < 1){
            result = "You Both Die!" ;
        }else if(playerOne.health < 1){
            result = playerTwo.name + " wins!";
        }else if(playerTwo.health < 1) {
            result = playerOne.name + " wins!";
        };
        return result;
    };

    button.onclick = function(e){

        fight();
        e.preventDefault();
        return false;
    }
})();




/*


/*
//New code 1

(function(){

    console.log("FIGHT!!!");

    var game = {
        "playerOne": "Scorpion",//0
        "playerTwo": "Sub-Zero",//1
        "p1d": 20,//2
        "p2d": 20,//3
        "player1H": 100,//4
        "player2H": 100,//5
        "round": 0//6
    };

    function fight(){
        alert(game.playerOne+":"+game.player1H+"  *START*  "+game.playerTwo+":"+game.player2H);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = game.p1d * .5;
            var minDamage2 = game.p2d * .5;
            var f1 = Math.floor(Math.random()*(game.p1d-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(game.p2d-minDamage2)+minDamage2);

            //inflict damage
            game.player1H-=f1;
            game.player2H-=f2;

            console.log(game.playerOne+": "+game.player1H + " " + game.playerTwo+":"+game.player2H);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                game.round++;
                alert(game.playerOne+":"+game.player1H+"  *ROUND "+game.round+" OVER"+"*  "+game.playerTwo+":"+game.player2H);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (game.player1H<1 && game.player2H<1)
        {
            result = "You Both Die";
        } else if(game.player1H<1){
            result =game.playerTwo+" WINS!!!"
        } else if (game.player2H<1)
        {
            result = game.playerOne+" WINS!!!"
        };
        return result;
    };


    fight();

})();
*/

//Original code


/*

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = ["Scorpion"];
    var playerTwoName = ["Sub-Zero"];

    //player damage
    var player1Damage = [20];
    var player2Damage = [20];

    //player health
    var playerOneHealth = [100];
    var playerTwoHealth = [100];

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };


    fight();

})();

*/






























