let livros = []
const http = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function conectaApi(){
    const response = await fetch(http)
    livros = await response.json()
    let livroComDesconto = aplicaDesconto(livros)
    mostraLivro(livroComDesconto)
}
conectaApi()
