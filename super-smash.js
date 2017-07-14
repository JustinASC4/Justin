var mashArray = ["Final Destination", "Saffron City", "Peach's Castle", "Dream Land"];
var firstQuestion = [1, 2];
var secondQuestion = ["JigglyPuff", "Mario"]; 

function questions() {
    var firstAnswer = prompt("How many times will you strike?");
    firstQuestion.push(firstAnswer);

    var secondAnswer = prompt("Who will you choose to fight?");
    secondQuestion.push(secondAnswer);
}
function rand(num) {
    // Random number between zero & whatever you're choosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return randInt;
    
 }

var randArray = function (array){
return array[Math.floor(Math.random()*array.length)];
return randArray; 
}


console.log("you fought " + randArray(secondQuestion) + " in the " + randArray(mashArray) + " and hit them " + randArray(firstQuestion) + " times.");