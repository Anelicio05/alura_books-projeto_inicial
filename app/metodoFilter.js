const botoes = document.querySelectorAll(".btn")
const elemntoValortotal = document.getElementById("valor_total_livros_disponiveis")

botoes.forEach(btn => btn.addEventListener('click', filtraLivro))

function filtraLivro(){
    const elementoBtn = document.getElementById(this.id).value
    const livrosFiltrados = elementoBtn == "disponivel" ? livros.filter( livro=> livro.quantidade > 0)
    : livros.filter( livro=> livro.categoria == elementoBtn)

    mostraLivro(livrosFiltrados)

    if(elementoBtn == 'disponivel'){
        const valorTotal = calcularValorDispopnivel(livrosFiltrados)
        valorTotalDisponivel(valorTotal)
    }
}

function valorTotalDisponivel(valorTotal){
    elemntoValortotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}