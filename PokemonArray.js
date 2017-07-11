var myPokemonRoster = ["Gengar", "Hypno", "Raichu", "Snorlax", "Venusaur"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Mew", "Mewtwo");
myPokemonRoster.length;
var RosterSize = myPokemonRoster.length; 
// //console.log(myPokemonRoster);
// console.log(RosterSize);
// console.log(firstToFight);
// console.log(secondToFight);
// console.log(myPokemonRoster[5]);
// var lastPokemon = myPokemonRoster - 1; 
// console.log(lastPokemon)
// // console.log(myPokemonRoster - 1);
for (var i = 5; i > 0; i--){
    console.log(myPokemonRoster[i]);
}
//if (myPokemonRoster < 4) {
//console.log("You Can't Play! Not Enough Pokemon")
//}