let primerValor = document.getElementById('valor1');
let segundoValor = document.getElementById('valor2');
let tercerValor = document.getElementById('valor3')
let valorDivision = document.getElementById('cantidadValores');

let primerPorcenjate = document.getElementById('porcentaje1');
let segundoPorcentaje = document.getElementById('porcentaje2');
let tercerPorcentaje = document.getElementById('porcentaje3');

/*function operar() {
    let suma = Number(primerValor.value) + Number(segundoValor.value);
    let operacionTotal = suma / Number(valorDivision.value);
    alert(operacionTotal);
}*/


let numeros = [];

    function operacion (){

       numeros.push(Number(primerValor.value))
       
       numeros.push(Number(segundoValor.value))
        if(tercerValor.value > 10 && primerValor.value > 10){
            numeros.push(Number(tercerValor.value))
        }
        
        let contador = 0;
        
        for(i = 0; i < numeros.length; i++){
        
        contador += numeros[i]
        }
        
        let result = contador / numeros.length;
        alert( "tu promedio es " + result);
        numeros.splice(0)
       
            let primerValorPorcentaje = Number((primerValor.value * Number(primerPorcenjate.value) / 100 ))

            primerPorcenjate.value < 10?  null : alert("el porcentaje de tu valor uno es de " + primerValorPorcentaje)
            
            let segundoValorPorcentaje = Number((segundoValor.value * Number(segundoPorcentaje.value) / 100 ))
            
            segundoPorcentaje.value < 10 ? null :  alert("El porcentaje de tu segundo valor es " + segundoValorPorcentaje)

            let tercerValorPorcentaje = Number((tercerValor.value) * Number(tercerPorcentaje.value) / 100);

            tercerPorcentaje.value < 10 ? null :  alert("El porcentaje de tu tercer valor es " + tercerValorPorcentaje)

        let notaFinal = Number(primerValorPorcentaje) + Number(segundoValorPorcentaje) + Number(tercerValorPorcentaje);

        notaFinal > .5 ? alert("tu nota final es de " + notaFinal) : null

        if(notaFinal < 30 && notaFinal > 5){
            alert("no vas pasando la materia, te falta")
        }
        if(notaFinal > 3){
            alert("pasaste")
        }
        else if(notaFinal > 30 && notaFinal < 40){
            alert("felicidades, ya aprobaste la materia, pero puedes mejorar, ánimo")
        }
        else if(notaFinal > 40){
            alert("felicidades, ya aprobaste la materia, y con una muy buena nota")
        }
        }


        /*usar metodo reduce*/

        /* comprime los elementos de un array, ya se sumandolos,restandolos, etc...*/

/* VA A ESTAR EN RESERVA PARA USARLA AHORITA


        function mediaAritmetica(lista) {

            const sumaConReduce = lista.reduce(function(numeroInicial = 0, valorSumado){

                let sumadora = numeroInicial + valorSumado;
                return sumadora;



            })
            return sumaConReduce / lista.length;
        }

        */


        