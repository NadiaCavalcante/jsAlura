var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("Vai")

    var xhr = new XMLHttpRequest()  //faz requisições http

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
           var resposta = xhr.responseText
      
            var pacientes = JSON.parse(resposta)
      
            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente)
            
            }); 
        }else {
            
            
            erroAjax.classList.remove("invisivel")
        }
        
    })

    xhr.send()
})

//requisição AJAX com JS de modo assíncrono, ou seja, a requisição não para o fluxo do JS...executando ele normalmente sem que ele deixe de rodar o que fazia antes.