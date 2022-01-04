//QuerySelector("tag") - seleção dentro do arquivo html

// var titulo = document.querySelector("h1") //identifica elemento h1 na página
// console.log(titulo);
// console.log(titulo.textContent) //representa o conteúdo de texto

// titulo.textContent = "Salão Shalonie"

// var pacientes = document.querySelector("h2")

//  pacientes.textContent = "Meus pacientes"


var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutrição"

var pacientes = document.querySelectorAll(".paciente")

// for( var i = 0; i < 5; i++) {
//     console.log(i)
// }
for( var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso= paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura")
    var altura = tdaltura.textContent;

    var tdImc =  paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso Inválido")
        pesoValido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        console.log("Altura Inválida")
        alturaValida = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")

    }

    if (alturaValida && pesoValido){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc

    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.00){
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura)

    return imc.toFixed(2); 
}

//função anônima
// titulo.addEventListener("click", function(){

// }) 









