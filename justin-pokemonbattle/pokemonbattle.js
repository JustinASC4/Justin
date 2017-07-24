function setup(){ 
    createCanvas(1000 , 1000);
}
function draw(){
    background(155);
    var loadScreen = rect(40, 50, 900, 350);
    var tab1 = rect(25, 450, 300, 250);
    textSize(32);
    text("Bulbasaur", 97, 590);
    var tab2 = rectcod(350, 450, 300, 250);
    textSize(32);
    text("Squirtle", 440, 590);
    var tab3 = rect(680, 450, 300, 250);
    textSize(32);
    text("Charmander", 740, 590)
    textSize(24)
    text("Choose your Pokemon: ", 376 ,435)
    //rect(35, 500, 450, 250);
    //rect(520, 500, 450, 250)
}
function pokemon(Bulbasaur, Squirtle, Charmander){
    this.Bulbasaur = Bulbasaur;
    this.Squirtle = Squirtle;
    this.Charmander = Charmander;
} 
function mouseClicked(){

}