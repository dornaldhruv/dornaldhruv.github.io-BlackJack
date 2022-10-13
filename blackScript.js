let firstCard;
let secondCard;
var sum;

function draw(){
    document.getElementById("msg").innerHTML = "Your Two Cards are: ";
    firstCard = Math.floor(Math.random() * 11) + 2; 
    secondCard = Math.floor(Math.random() * 11) + 2;
         sum = firstCard + secondCard;
        document.getElementById("cards").innerHTML = "Cards: "+firstCard+", "+secondCard
        document.getElementById("summ").innerHTML = "Sum of two cards: "+sum
        if(sum<21){
            document.getElementById("notBlack").innerHTML = "You wanna pull another card ?"
        }
        else if(sum===21){
            document.getElementById("blackJack").innerHTML = "Damn bro that's a BLACKJACK"
            return;
        }
        else{
            document.getElementById("out").innerHTML = "Sad you are out of the game gg"
            return;
        }
}
function newCard(){
    var cardd = 5;
    sum = sum + cardd
    //draw();
}



        