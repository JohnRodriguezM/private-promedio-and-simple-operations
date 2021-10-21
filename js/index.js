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
//operaciones para promedio
       primerValor.value > 1? numeros.push(Number(primerValor.value)): undefined;
       segundoValor.value > 1? numeros.push(Number(segundoValor.value)) :undefined;
       tercerValor.value > 1? numeros.push(Number(tercerValor.value)): undefined;

        
        let contador = 0;
        
        for(i = 0; i < numeros.length; i++){
        
        contador += numeros[i]
        }
        
        let result = contador / numeros.length;
        alert( "tu promedio es " + result);
        numeros.splice(0)
//operaciones para el porcentaje      
            let primerValorPorcentaje = Number((primerValor.value * Number(primerPorcenjate.value) / 100 ))

            primerPorcenjate.value < 10?  null : alert("el porcentaje de tu valor uno es de " + primerValorPorcentaje)
            
            let segundoValorPorcentaje = Number((segundoValor.value * Number(segundoPorcentaje.value) / 100 ))
            
            segundoPorcentaje.value < 10 ? null :  alert("El porcentaje de tu segundo valor es " + segundoValorPorcentaje)

            let tercerValorPorcentaje = Number((tercerValor.value) * Number(tercerPorcentaje.value) / 100);

            tercerPorcentaje.value < 10 ? null :  alert("El porcentaje de tu tercer valor es " + tercerValorPorcentaje)


//operacion resultanta de porcentaje y promedio 
        let notaFinal = Number(primerValorPorcentaje) + Number(segundoValorPorcentaje) + Number(tercerValorPorcentaje);
//condicionales para decidir el alert que se muestra dependiendo la situcacion de la nota
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
        let numerosLista = document.getElementById('numerosLista') + "   "
        function calcularMediana(numerosLista)

        {
        
        
        if(numerosLista.value.length % 2 === 0)
        {  
        
        let operacionMedianaPar = "la mediana de tu lista es " + ((numerosLista.value.length  / 2 ) + (numerosLista.value.length  / 2) + 1) / 2
        let parrafoInteraccion = document.getElementById('parrafoMediana').innerHTML = operacionMedianaPar;
        return parrafoInteraccion;
        }else{
        
        let operacionListaImpar = parseInt(numerosLista.value.length / 2);
        let mensaje = `la mediana de lista impar es ${numerosLista.value[operacionListaImpar]}`
        let parrafoInteraccion2 = document.getElementById('parrafoMediana').innerHTML = mensaje;
        return parrafoInteraccion2;

        /*numerosLista.sort(function(a,b){
            return a - b 
            
            })*/

        }
        
        
        
        }