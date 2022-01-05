var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault(); //previne o comportamento pradão do site - enviar o formo e retorna em branco. Usando este evente fazemos com que ao carregar o site a função abaixo seja exibida
    
    var form = document.querySelector("#form-adiciona")
     
    //obtem informações do paciente do form
    var paciente = obtemPacienteForm(form)

     //cria a tr e td do paciente
    var pacienteTr = montaTr(paciente)

    var erros = validaPaciente(paciente)
        
    if(erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro")
        mensagemErro.textContent = erros
        return;
    }
     
     //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.reset() //apaga os dados inseridos no campo depois que vc adiciona
})

    function obtemPacienteForm(form) {

        var paciente = {
            nome: form.nome.value,
            peso: form. peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        
        return paciente;

    }

    function montaTr(paciente) {
        var pacienteTr = document.createElement("tr")
        pacienteTr.classList.add("paciente")

        // var nomeTd = montaTd(paciente.nome, "info-nome")
        // var pesoTd = montaTd(paciente.peso, "info-peso")
        // var alturaTd = montaTd(paciente.altura, "info-altura")
        // var gorduraTd = montaTd(paciente.gordura, "info-gordura")
        // var imcTd = montaTd(paciente.imc, "info-imc")

        // var nomeTd = document.createElement("td")
        // var pesoTd = document.createElement("td")
        // var alturaTd = document.createElement("td")
        // var gorduraTd = document.createElement("td")
        // var imcTd = document.createElement("td")

        // nomeTd.textContent = paciente.nome
        // pesoTd.textContent = paciente.peso
        // alturaTd.textContent = paciente.altura
        // gorduraTd.textContent = paciente.gordura
        // imcTd.textContent = paciente.imc

        // var pesoTd = montaTd(paciente.peso, "info-peso")
        

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")) // coloca o Td dentro do Tr
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

        return pacienteTr
    }

    function montaTd(dado, classe) {
        var td = document.createElement("td")
        td.textContent = dado
        td.classList.add(classe)

        return td;
    }   

    function validaPaciente(paciente){
        var erros = []

        if(!validaPeso(paciente.peso )) erros.push("Peso é inválido") // push adiciona objetos no array
        // caso tenha apenas um if, o js entende ao deixarmos tudo em uma linha e sem {} como no exemplo acima.
        

        if(!validaAltura(paciente.altura)){
            erros.push("Altura é inválida!")
        }

        return erros
    }
    

    
    //O comportamento padrão do botão que se encontra no formulário é limpar os dados preenchidos nos campos, recarregar a página e enviar os dados.
    //são funções que não tem nome e só são chamadas no contexto aonde foram declaradas


