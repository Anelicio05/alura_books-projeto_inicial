function aplicaDesconto(livros){
    const desconto = 0.3
    let livroComdesconto = livros.map(livro =>{
        return {...livro, preco: (livro.preco - (livro.preco * desconto)).toFixed(2)}
    } )

    return livroComdesconto
}
