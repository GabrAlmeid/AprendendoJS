
/* let postagem = {
    titulo: "a",
    mensagem: "b",
    autor: "c",
    visulizacoes: 100,
    comentarios: [
        {autor: "c", mensagem: "a"},
        {autor: "d", mensagem: "b"}
    ],
    aovivo: true
}
console.log(postagem)
*/

function Postagem (titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.aovivo = true
}

let postagem = new Postagem ("a", "b", "c")
console.log(postagem)