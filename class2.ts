/*Crie classes para representar diferentes tipos de roupas (camiseta, calça, vestido, etc.), cada uma com suas características específicas (tamanho, cor, material). Implemente um sistema de descontos, onde cada tipo de roupa pode ter um desconto diferente em determinadas épocas do ano.*/
class Loja{
 camisa:string=""
 calça:string=""
 vestido:string=""
especificas:Especificas[]=[]

    constructor(
        camisa:string,
        calça:string,
        vestido:string
    )
    {
        this.camisa=camisa
        this.calça=calça
        this.vestido=vestido
    }
    adicionarRoupa(cor:string,tamanho:string,material:string){
        let especificas=new Especificas()
        especificas.cor=cor
        especificas.tamanho=tamanho
        especificas.material=material
        this.especificas.push(especificas)
    }
}
class Especificas{
    cor:string=""
    tamanho:string=""
    material:string=""
}
let tamanho="m"
let cor="preto"
let material="elastico"
let especificas=new Especificas()



 //Crie classes para representar diferentes tipos de pratos (carne, massa, vegetariano, etc.), cada um com seus ingredientes e modo de preparo. Implemente um sistema de pedidos, onde o cliente pode escolher diferentes pratos e adicionar acompanhamentos

class carne{
prato1:string=""
prato2:string=""
massa:Massa[]=[]

constructor(
    prato1:string,
    prato2:string
)
{
    this.prato1=prato1
    this.prato2=prato2
}
comida(prato3:string,prato4:string){
    let massa= new Massa()
    massa.prato3=prato3
    massa.prato4=prato4
}
}
class Massa{
prato3:string=""
prato4:string=""
}
let prato="churrasco"
let custo=150.00
let massa=new Massa()

class Vegetariano{
prato5:string=""
prato6:string=""
}
let vegetariano=new Vegetariano()
class Cliente{
    nome:string=""
    idade:number=0

}
let cliente=new Cliente








//Crie classes para representar diferentes tipos de funcionários (professores, coordenadores, diretores), cada um com suas responsabilidades e salários. Implemente um sistema de pagamento, onde cada funcionário recebe um salário calculado de acordo com sua função.
class professor{
 salario(pagemento:Number):boolean{
    if(pagemento===1.3000)
        return true
 }       
}
class coordenadores extends professor{
     salario(pagemento: Number): boolean {
         if(pagemento===1.3000)
            return false
     }
}
class diretores extends coordenadores {
    salario(pagemento: Number): boolean {
        if (pagemento===1.3000)
            return true
    }

}



//Crie classes para representar diferentes tipos de veículos (carros, caminhões, motos), cada um com suas características específicas (motor, capacidade de carga, número de rodas). Implemente um sistema de montagem, onde cada veículo passa por diferentes etapas de produção.

//Crie classes para representar diferentes tipos de profissionais da saúde (médicos, enfermeiros, técnicos de enfermagem), cada um com suas especialidades. Implemente um sistema de agendamento de consultas, onde o paciente pode marcar consulta com diferentes profissionais


















