/*class Padaria{
        paes:number
        tortas:number
        doces:number
        fins:number
        clientes: Cliente[] =[]

        constructor(
            paes:number,
            tortas:number,
            doces:number,
            fins:number
  

        )
        {
            this.paes=paes
            this.tortas=tortas
            this.doces=doces
            this.fins=fins
        }

        adicionarCliente(nome:string,sobre_nome:string){
            let cliente=new Cliente()
            cliente.nome=nome
            cliente.sobre_nome=sobre_nome
            this.clientes.push(cliente)
        }
}


class Cliente{
    nome:string=""
    sobre_nome=""
    musculacao:string=""
    natacao:string=""
    corrida:string=""
         
}

let uma_variavel = 25
let outra_variavle = "Veronica"
let cliente=new Cliente()
 

class Vendas{
    compra:number=0
     produto:string=""
}

let primeiraVenda= new Vendas


class Caixa {
    pagamento:number=0
    vendedora:string=""
}

let caixa_1= new Caixa

 class Mercado{
    balconista:string=""
    item:number=0
 }
 let mercadinho = new Mercado
  */

 //casp dois
 class Academi{
    musculacao:string=""
    natacao:string=""
    corrida:string=""
         aluno:alunos[]=[]

    constructor(
        musculacao:string,
        natacao:string,
        corrida:string
         
    )
    {
        this.corrida=corrida
        this.musculacao=musculacao
        this.natacao=natacao
    }
    AdicionarAluno(nome:string,sobre_nome:string){
        let aluno=new Aluno()
        aluno.nome=nome
        aluno.sobre_nome=sobre_nome
        this.aluno.push(aluno)
    }
 }
class alunos{
    nome:string=""
    sobre_nome:string=""

}
let uma_variavel = 19
let outra_variavle = "max"
let cliente=new Aluno()