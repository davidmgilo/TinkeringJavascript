var calculateArea = function () {
    console.log('Aquí calculo àrea')
};

var Figure = function (){
    this.area = calculateArea ;
};

var figura = new Figure();

console.log(figura.area());