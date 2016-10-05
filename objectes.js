// class { } -> Sugar Syntax

// First class citizens functions
//var x = function(){}
// Utilitzarem les funcions per "fer" objectes

//Javascript: functional programming

function Persona() {
    console.log('Creant una nova persona')
    this.name ='David';
    this.sn1 ='Martinez';
} // function contructor

var persona1 = new Persona();
console.log(persona1);

