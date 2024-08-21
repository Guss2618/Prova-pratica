var usuarios = []
function adicionarUsuarios(nome, emeil, idade){  
    usuarios.push("Nome de usuario: ", nome = "João", "Emeil de usuario: ", emeil = "joão12@gmail.com","Idade de usuario: ", idade = 18)
    if (nome == ""){
        console.log("Escreva seu nome!")
    }if (emeil == ""){
        console.log("Escreva seu emeal!")
    }if (idade <=0){
        console.log("Erro de idade, escreva sua idade novamente!")
    }
}
adicionarUsuarios()
function listarUsuarios(){
    console.log(usuarios)
}
listarUsuarios()