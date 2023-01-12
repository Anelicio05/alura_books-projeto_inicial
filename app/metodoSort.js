const bntOndenaLivro = document.getElementById("btnOrdenarPorPreco")
bntOndenaLivro.addEventListener('click', ordenaLivros)

function ordenaLivros(){
    const ordenaPreco = livros.sort((a, b)=> a.preco - b.preco)
    mostraLivro(ordenaPreco)
}
