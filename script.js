const btnCriar = document.querySelector("#btnCriar")
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')
const inputAno = document.querySelector('#inputAno')
const inputDiretor = document.querySelector('#inputDiretor')


const filmes = [
    {
        nome: "Tropa de Elite",
        ano: 2008,
        diretor: "José Padilha"
    },
    {
        nome:"Carros",
        ano:2006,
        diretor:"John Lasseter"
    },
    {
        nome: "Titanic",
        ano: 1997,
        diretor: "James Cameron"
    }
]

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();
    
    // chama a função criarFilme
    criarFilme()
})


// CRUD -> Create, Read, Update, Delete

// CREATE
function criarFilme(){
    // 1 - Pegar os dados do filme
    let criaNovoFilme = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value

        // Para inserir imagens
        // imagem: [imagem.value, imagem2.value, imagem3.value]
    }
    
    // 2 - Armazenar
    filmes.unshift(criaNovoFilme)

    // 3 - Atualizar o DOM
    renderizarNaTela()
}

window.onload = renderizarNaTela()
// READ
function renderizarNaTela(){
    
    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement('li')
            novoFilme.innerHTML = `
            <h1 class="nomeFilme">${filme.nome}</h1>
            <p class="anoFilme">${filme.ano}</p>
            <h3 class="diretorFilme">${filme.diretor}</h3>
            
            <button onclick="editarFilme(${filmes.indexOf(filme)})"> Editar </button>
            <button onclick="apagarFilme(${filmes.indexOf(filme)})"> Apagar </button>
            `
            // indexOF procura a posição do objeto dentro do array 
            listaFilmes.append(novoFilme)
        }
    )
}

// UPDATE
function editarFilme(idFilme){
    // 1 - Selecionar o filme
        // (idFilme)

    // 2 - Pegar as informações que a pessoa quer inserir
    // filmes[idFilme].nome => coloca o nome antigo do filme no input
    let tituloModificado = prompt('Digite o novo nome do filme',filmes[idFilme].nome)
    let anoModificado = prompt('Digite o ano do filme',filmes[idFilme].ano)
    let diretorModificado = prompt('Digite o diretor do filme',filmes[idFilme].diretor)

    // 3 - Mudar as informações
    filmes[idFilme].nome = tituloModificado
    filmes[idFilme].ano = anoModificado
    filmes[idFilme].diretor = diretorModificado

    // 4 - Atualizar o DOM
    renderizarNaTela()
}

// DELETE
function apagarFilme(idFilme){
    // 1 - Selecionar o filme 
        // (idFilme)

    // 2 - Apaga o filme
    // idFilme,3 -> Deleta o idFilme e os dois próximos
    filmes.splice(idFilme,1)

    // 3 - Atualizar o DOM
    renderizarNaTela()
}


// FILTER
// const filmesFiltrados = filmes.filter(
//     filmes =>{
//         filme.categoria === categoria
//     }
// )

// Pegar data no js
// const date = new Date()
// console.log(date.toLocaleString())