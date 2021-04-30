let pessoas = []

let novoRegistro = "S"
let contador = 0;

while(novoRegistro==="S"){
    alert(`Iniciando o registro da pessoa ${contador+1}`)
    let nome = prompt("Digite o nome da pessoa")
    let idade = Number(prompt("Digite a idade da pessoa"))

    let registro = new pessoa(nome, idade)

    pessoas.push(registro)

    novoRegistro = prompt("Deseja registrar uma nova pessoa? (S/N)")

    contador +=1
}

PessoaMaior(pessoas)

function PessoaMaior(pessoas){
    ordenarPessoas(pessoas)
    console.log(` La pessoa com maior idade é  ${pessoas[0].nome} e tem ${pessoas[0].idade} anos`)
}


function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

function ordenarPessoas(pessoas){
    pessoas.sort((a,b)=>{

        if(a.idade < b.idade){
            return 1
        }else if(a.idade > b.idade){
            return -1
        }else{
            return 0
        }

    })

    console.log(pessoas)

}