let input = document.getElementById('campo')
let button = document.getElementById('botao')
let concluido = document.querySelector('.cinza')
let tarefa = document.getElementById('tarefa-id')
let listaCompleta = document.getElementById('corpo')

let meuArray = []
recarregarLinha()

function mostrarLinha() {
    let novali = ''
    meuArray.forEach((tarefa, index) => {
        novali = novali + `<tr class="tr-hov">
                                <td id="tarefa-id" class="${tarefa.concluida == true ? "line-through verde" : ""}">${tarefa.tarefa}</td>
                                <td class="cursor-text hov ${tarefa.concluida == true ? "verde" : ""}" onclick="concluirLinha(${index})">${tarefa.concluida == true ? tarefa.concluida[index] ='Sim' : 'Não'}</td>
                                <td class="td-trash ${tarefa.concluida == true ? "verde" : ""}" onclick="deletarLinha(${index})"><i class="fas fa-trash"></i></td>
                            </tr>`
    })

    listaCompleta.innerHTML = novali

    localStorage.setItem("corpo", JSON.stringify(meuArray))
}

function concluirLinha(index) {
    meuArray[index].concluida = !meuArray[index].concluida
    mostrarLinha()
}

function deletarLinha(index) {
    meuArray.splice(index, 1)

    mostrarLinha()
}

function adicionarLinha() {
    if (input.value) {
        meuArray.push({
            tarefa: input.value,
            concluida: false
        })
    } else {
        alert('Digite algum Nó')
    }

    input.value = ''
    mostrarLinha()
}


function recarregarLinha() {
    let minhasTarefas = localStorage.getItem("corpo")


    if (minhasTarefas) {
        meuArray = JSON.parse(minhasTarefas)

        mostrarLinha()
    }
}

function adicionarPeloEnter(teclas) {

    if (teclas.key === "Enter") {
        adicionarLinha()
    }
}
button.addEventListener('click', adicionarLinha)

document.addEventListener("keypress", adicionarPeloEnter)