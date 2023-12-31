const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let diponibilidade =verificarDisponibilidadeDoLivro(livro)
        let diponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livros__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${diponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}

// function verificarDisponibilidadeDoLivro(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro_imagens'
//     }else {
//         return 'livros__imagens indisponivel'
//     }
// }