function superhero(realName, ability, gender, archEnemy){
    this.realName = realName = realName,
    this.ability = ability,
    this.gender = gender, 
    this.archEnemy

    this.newAbility = function (ability2) {
        this.ability = ability2;
    }
};

var superman = {
    'realName' : 'Clark Kent'
};

var batman = new superhero('Bruce Wayne', 'dat money', 'male', 'Joker');
var staticShock = new superhero('Virgil', 'electricy', 'male', 'Ebon');

console.log(superman.realName);
console.log(staticShock.realName);

console.log(batman.ability);
batman.newAbility('drop kick');
console.log(batman.ability);