//Funció constructora
// function Persona(){
//     console.log("Creant un objecte");
// }

var Persona = function (name) {
    this.name = name;
    console.log("Creant un objecte");
};

var personeta = new Persona('David');

console.log(personeta.name);