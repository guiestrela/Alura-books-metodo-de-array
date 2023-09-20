const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBnt = document.getElementById(this.id)
    const categoria = elementoBnt.value
    let livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        exibirValorTotalDoslivrosDispomiveisNaTela()
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDoslivrosDispomiveisNaTela() {
    elementoComValorDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
    `
}


