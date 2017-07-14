
function rand(num) {
    // Random number between zero & whatever you're choosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return randInt;
    
 }
function randLetter(){
  

 var letters = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
 var alphabet = letters[rand(26)];
console.log(alphabet);
return alphabet;
}
randLetter();

function randWord(){
  var length = rand(100);
  var word = ""
  for (var i=0; i < length; i++){
    word = randLetter() + word;
    
  }
  console.log(word);
  return word; 
}
randWord(); 

function randSentence(){
  var numOfWords = randWord(100);
  var sentence = "";
  
}
