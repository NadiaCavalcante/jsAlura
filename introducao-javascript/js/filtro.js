var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    // console.log(campoFiltro.value) - obtem o resultado do que vc digitar
     console.log(this.value)

    var pacientes = document.querySelectorAll(".paciente")

    if( this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i") // RegExp - recebe dois parâmetros (o que ela deve procurar e como)
        
            if (!expressao.test(nome)){  //invertemos a lá
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
    }
    }else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }    

})