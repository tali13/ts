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
*/

class Cliente{
    nome:string=""
    sobre_nome=""
    idade:number=0
    peso:number=0

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
  