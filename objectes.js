// class { } -> Sugar Syntax

// First class citizens functions
//var x = function(){}
// Utilitzarem les funcions per "fer" objectes

//Javascript: functional programming

function Persona(name) {
    console.log('Creant una nova persona')
    this.name = name;
    this.sn1 ='Martinez';
} // function contructor

var persona1 = new Persona('Xavier');
console.log(persona1);

