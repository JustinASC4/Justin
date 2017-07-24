function stats(Name, Type, HP, Defense, Attack, Legend x, y, w , h) {
    this.Name = Name,
    this.HP = HP,
    this.Type = Type,
    this.Defense = Defense, 
    this.Attack = Attack,
    this.Legend = Legend 
    rect(x ,y, w, h );

};

var Gengar = new stats('Gengar', 'Ghost', 60, 60, 65, false );
var Hypno = new stats('Hypno', 'Pyschic', 85, 70, 73, false );
var Dragonite = new stats('Dragonite', 'Dragon', 91, 95, 134, false);
var Mew = new stats('Mew', 'Pychic', 100, 100, 100, true);
var MewTwo = new stats('MewTwo', 'Psychic', 106, 90, 110, true);

var pokemon = [Gengar, Hypno, Dragonite, Mew, MewTwo];
function printRoster() {
  for (i=0; i<= pokemon.length; i++){
  console.log(pokemon[i]);
}
}
function pokemonAttacked(){
  for (i=0; i < pokemon.length; i++){
   pokemon[i].HP -= 10;  
  }
}
printRoster();
console.log("Your pokemon have been attacked! -10HP")

pokemonAttacked();

printRoster();
