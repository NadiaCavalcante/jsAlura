//Notar que paciente foi clicado duas vezes. Objetivo do código -> Ao clicar no nome do paciente, o mesmo é excluído da tabela
// var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    

    event.target.parentNode.classList.add("fadeOut")


    setTimeout(function(){
        event.target.parentNode.remove()   
    }, 500) //aceita parâmetros em milisegundos
})

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Clique duplo")
//         this.remove() // this faz referência ao elemento que ele está inserido - quem estiver escutando o evento
//     })
// })

//  	parentNode - pai de qualquer nó no HTML

// event bubbling