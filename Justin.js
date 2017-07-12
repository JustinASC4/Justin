

function rand(num) {
    // Random number between zero & whatever you're choosing
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    return randInt;
    
 }
 rand(500);
 