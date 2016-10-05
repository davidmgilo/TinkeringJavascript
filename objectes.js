// class { } -> Sugar Syntax

// First class citizens functions
//var x = function(){}
// Utilitzarem les funcions per "fer" objectes

//Javascript: functional programming

// function Persona(name) {
//     console.log('Creant una nova persona')
//     this.name = name;
//     this.sn1 ='Martinez';
// } // function contructor
//
// var persona1 = new Persona('Xavier');
// console.log(persona1);

var persona = function() {
   console.log('Creant una nova persona');
     this.name = 'David';
     this.sn1 ='Martinez';
};

console.log (persona.name); // Així no funciona, necessita el new o el bind...

//bind
//per especificar a que fem referencia quan diem this
