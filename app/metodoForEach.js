const sectionLivros = document.getElementById("livros")

function mostraLivro(livros){
    sectionLivros.innerHTML = ''

    livros.forEach(livro => {
        let livrosDisponiveis = livro.quantidade > 0 ? 'livro__imagns' : 'livro__imagns indisponivel'
        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="${livrosDisponiveis}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco}</p>
            <div class="tags">
                 <span class="tag">${livro.categoria}</span>
            </div>
         </div>
        `
    });
}