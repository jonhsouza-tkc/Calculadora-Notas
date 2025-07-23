let notas = []

function adicionarNota() {
    let notaInput = document.getElementById("nota")
    let nota = parseFloat(notaInput.value)

    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota)
        atualizarNotas()
        notaInput.value = ''
        // Limpa o campo de input apos adicionar a nota

    } else {
        alert("Insira uma nota válida entre 0 e 10 !")

    }

}

function atualizarNotas() {
    const listaNotas = document.getElementById("notas")
    listaNotas.innerHTML = ''
    // Limpa a lista antes de adicionar as novas notas 

    notas.forEach(function(nota) {
        const item = document.createElement("li")
        item.textContent = `Nota: ${nota}`
        listaNotas.appendChild(item)

    })
    
}

function CalcularMedia() {
    let somatarioDeNotas = 0
    let media = 0
    
    for (let index = 0; index < notas.length; index += 1) {
        somatarioDeNotas = somatarioDeNotas + notas[index]

    }

    media = somatarioDeNotas / notas.length

    if (media > 6) {
        document.getElementById("resultado").textContent = `Media: ${media.toFixed(2)} - Pessaoa estudante aprovada!`

    } else {
        document.getElementById("resultado").textContent = `Media: ${media.toFixed(2)} - Pessaoa estudante reprovada!`


    }
}

