/*Cenário 3
Um posto de gasolina precisa de um sistema para gerenciar suas operações,
desde o controle de estoque de combustíveis até a emissão de notas fiscais. O
sistema deve ser capaz de atender diferentes tipos de clientes, como clientes
comuns e clientes com frotas, e registrar diversas informações sobre as vendas,
como tipo de combustível, quantidade, forma de pagamento e veículo.*/

class GerenciarPosto{
nomePosto:string;
 NotaFiscal:string;
 Venda:Number;



 constructor(nomePosto:string,NotaFiscal:string,Venda:Number){
        this.NotaFiscal=NotaFiscal
        this.Venda=Venda
        this.nomePosto=nomePosto

 }

}
class Vendas extends GerenciarPosto{
    Valor:Number=5.99
    Valor2:Number=4.54
}


class Estoque extends GerenciarPosto{
    Litros:Number=1000.000
}


class Investimento extends GerenciarPosto{
    Litros_Valor:Number=this.Venda
}



class Cliente{
NomeCliente:string;
Sobre_NomeCliente:string;
veiculo: Veiculo | null = null

constructor(nome: string, sobre_nome: string){
    this.NomeCliente = nome
    this.Sobre_NomeCliente = sobre_nome
}

NovoCarro(Cor:string, Modelo:string, Placa:number){
    this.veiculo=new Veiculo() 
}

}

class Veiculo{
Cor:string=""
Modelo:string=""
Placa:number=0

}

let usuario=new Cliente("alastor","sunset");
let usuario2=new Cliente("noha","sharpwater");
let usuario3=new Cliente("maik","wolfstone");
let usuario4=new Cliente("nill","fullmoon");
let usuario5=new Cliente("kymera","longhair");
let usuario6=new Cliente("simon","hotice");
let usuario7=new Cliente("luca","thepainter");
let usuario8=new Cliente("naru","aim");
let usuario9=new Cliente("alex","spirit");
let usuario10=new Cliente("hiro","theclown");
let usuario11= new Cliente("tommy","brokenmoon");
let usuarioA11=new Cliente("jose","silva");
let usuario12=new Cliente("gabi","anchieta");
let usuario13=new Cliente("michael","costa");
let usuario14=new Cliente("deissom","costa");
let usuario15=new Cliente("sunamita","alves");
let usuario16=new Cliente("kalitha","naibert");
let usuario17=new Cliente("ester","solza");
let usuario18= new Cliente("rose","fatima");
let usuario19=new Cliente("micaela","rocha");
let usuario20=new Cliente("jacksson","mesquita");
let usuario21=new Cliente("lurdis","moon");
let usuario22=new Cliente("gabriel","rosa");
let usuario23=new Cliente("rafael","silveira");
let usuario24=new Cliente("arcanjelo","naibert");
let usuario25=new Cliente("lucas","eitur");
let usuario26=new Cliente("julia","morais");
let usuario27=new Cliente("hinata","jack");
let usuario28=new Cliente("jack"," Donfort");
let usuario29=new Cliente("Hannah","Donfort");
let usuario30=new Cliente("Phil"," Hawkins");
let usuario31=new Cliente("Amy ","Bell Lewi");
let usuario32=new Cliente("Thomas ","Scherer");
let usuario33=new Cliente("Cleo "," Baumgartne");
let usuario34= new Cliente("Alan"," Bloomgate");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Cenário 4
Imagine uma escola de idiomas que oferece uma ampla variedade de cursos,
desde idiomas tradicionais como inglês e espanhol até línguas menos comuns como
mandarim e árabe. A escola busca oferecer uma experiência personalizada para
cada aluno, adaptando os materiais didáticos e as metodologias de ensino às suas
necessidades e objetivos.*/

class Professor{
private nomeProf:string
private Idade:number
private diciplina:string



constructor(nomeProf:string,Idade:number,diciplina:string){
    this.Idade=Idade
    this.diciplina=diciplina
    this.nomeProf=nomeProf
 }
 public setNome(nomeProf:string,idade:number,diciplina:string){
    this.nomeProf=nomeProf
    this.Idade=idade
    this.diciplina=diciplina
 }
 public getNome(nomeProf:string,idade:number,diciplina:string){
    this.nomeProf=nomeProf
    this.Idade=idade
    this.diciplina=diciplina
    
 }
}


class Aluno{
private nome:string
private sobre_nome:string

constructor(nome:string,sobre_nome:string){
    this.nome=nome
    this.sobre_nome=sobre_nome
}
public setNome(nome:string,sobre_nome:string){
    this.nome=nome
    this.sobre_nome=sobre_nome
}
public getNome(nome:string,sobre_nome:string){
    this.sobre_nome
    return this.nome
 }
}


class CursoIdiomas{
#ingles:string;
#espanhol:string;
#mandarim:string;
#arabe:string;

constructor(ingles:string,espanhol:string,mandarim:string,arabe:string){
    this.#ingles=ingles;
    this.#espanhol=espanhol;
    this.#mandarim=mandarim;
    this.#arabe=arabe;
}
Idiomas(){
    if(navigator.language[0]==="HI"){
        console.log(`ola,${this.#ingles}`);
    }else{console.log(`嘿 ${this.#mandarim}`);
  }
 }
}
let aluno=new Aluno("alastor","sunset");
let aluno1=new Aluno("noha","sharpwater");
let aluno2=new Aluno("maik","wolfstone");
let aluno3=new Aluno("nill","fullmoon");
let aluno4=new Aluno("kymera","longhair");
let aluno5=new Aluno("simon","hotice");
let aluno6=new Aluno("luca","thepainter");
let aluno7=new Aluno("naru","aim");
let aluno8=new Aluno("alex","spirit");
let aluno9=new Aluno("hiro","theclown");
let aluno10= new Aluno("tommy","brokenmoon");
let aluno11=new Aluno("jose","silva");
let aluno12=new Aluno("gabi","anchieta");
let aluno13=new Aluno("michael","costa");
let aluno14=new Aluno("deissom","costa");
let aluno15=new Aluno("sunamita","alves");
let aluno16=new Aluno("kalitha","naibert");
let aluno17=new Aluno("ester","solza");
let aluno18= new Aluno("rose","fatima");
let aluno19=new Aluno("micaela","rocha");
let aluno20=new Aluno("jacksson","mesquita");
let aluno21=new Aluno("lurdis","moon");
let aluno22=new Aluno("gabriel","rosa");
let aluno23=new Aluno("rafael","silveira");
let aluno24=new Aluno("arcanjelo","naibert");
let aluno25=new Aluno("lucas","eitur");
let aluno26= new Aluno("julia","morais");
let aluno27=new Aluno("hinata","jack");
let aluno28=new Aluno("jack"," Donfort");
let aluno29=new Aluno("Hannah","Donfort");
let aluno30=new Aluno("Phil"," Hawkins");
let aluno31=new Aluno("Amy ","Bell Lewi");
let aluno32=new Aluno("Thomas ","Scherer");
let aluno33=new Aluno("Cleo "," Baumgartne");
let aluno34= new Aluno("Alan"," Bloomgate");



/*Cenário 2
Uma empresa de Recursos Humanos precisa de um sistema para gerenciar
seus funcionários. Os funcionários podem ser de diferentes tipos: funcionários
horistas, assalariados e comissionados. Cada tipo de funcionário possui
características e cálculos de pagamento específicos. Além de gerenciar seus
funcionários, precisa também controlar seus ativos (equipamentos, softwares, etc.) e
manter uma base de dados completa sobre ambos. A base de dados deve
armazenar informações como histórico de manutenção dos ativos, projetos que os
funcionários estão envolvidos e outras informações relevantes para a gestão da
empresa.*/
class Funcionario{
    funcionario:string
    sobrenome:string
    salario: number = 0

    constructor(sobrenome:string,
        salario:number,
        funcionario:string
    )
    {this.sobrenome=sobrenome; this.salario=salario; this.funcionario=funcionario}

    getName(){
        return this.funcionario
    }
}

class Pagamento{
    pix:string;
    dinheiro:string
    
    public pagamento(chefe:Employer, empregado:Funcionario, método:Pagamento){
        return `O funcionário ${empregado.funcionario} recebeu seu salário no valor de R$${método.pix} por ${chefe.nomeCompleto}.`
    }

    setName(){
        return this.dinheiro
        return this.pix
    }

    getName(){
        return this.dinheiro
        return this.pagamento
    }
}
    

class Horista extends Funcionario{//salario de 1.000;;;; hrsMes/7= resultado * 4 = resultado *8
}

class Assalariado extends Funcionario{//salario de 3.000;;;;; 3.000/220
}

class Comissionado extends Funcionario{//salario de 4.895;;;;; totalVenda * porcentagem
}

class Ativo{//salario de 3.000;;;;; ativo = passivo + patrimonio liquido
    equipamento:string
    software:number
    manutencao:string

    constructor(equipamento:string, software:number, manutencao:string)
    {
        this.equipamento=equipamento
        this.software=software
        this.manutencao=manutencao
    }

    aparelho1(equip1:Ativo, software:Ativo, manut:Ativo){
         return `O aparelho ${equip1.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}

    aparelho2(equip2:Ativo, software:Ativo, manut:Ativo){
         return `O aparelho ${equip2.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}

    aparelho3(equip3:Ativo, software:Ativo, manut:Ativo){
        return `O aparelho ${equip2.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}
}


class Employer extends Pagamento{
    nomeCompleto:string
    cargo:string

    constructor(nome:string,sobrenome:string,cargo:string)
    {super()
        this.nomeCompleto=nome
        this.cargo=cargo
    }
}




let employee1 = new Funcionario('Lucas Petry', 3000,'assalariado')
let employee2 = new Funcionario ('Vitor Reis', 1000, 'Horista')
let employee3 = new Funcionario ('Vitoria Bier', 4895,'Comissionada')


let equip1 = new Ativo ('PC',10,'Em progresso')
let equip2 = new Ativo ('Notebook', 11, 'Concluído')
let equip3 = new Ativo ('Tablet', 9, 'Não solicitado')


let payday = new Pagamento()


let boss = new Employer('Vitória','Faller','Diretora')
/*Cenário 1
Uma empresa de transporte de cargas precisa de um sistema para gerenciar
suas operações, desde o cadastro de clientes e veículos até o acompanhamento de
entregas e geração de notas fiscais. O sistema deve ser capaz de atender
diferentes tipos de cargas, como cargas secas, refrigeradas e perigosas, e oferecer
funcionalidades para otimização de rotas e cálculo de custos.
Cliente: Classe base com atributos como nome, CNPJ e endereço.
● ClienteContratante: Classe derivada de Cliente, com atributos específicos
para clientes que contratam fretes com frequência.
● ClienteEsporádico: Classe derivada de Cliente, com atributos específicos
para clientes que realizam fretes esporadicamente.
Veículo: Classe com atributos como placa, modelo, capacidade de carga, tipo de
carga (seco, refrigerado, perigoso) e status (disponível, em manutenção, em rota).
Carga: Classe com atributos como peso, volume, tipo, origem, destino, data de
embarque prevista e data de entrega prevista.
Motorista: Classe com atributos como nome, CNH, categoria, experiência e veículo
atribuído.
Rota: Classe com atributos como origem, destino, distância, tempo estimado de
viagem e lista de veículos que percorreram a rota.
Entrega: Classe com atributos como data, hora, cliente, carga, veículo, motorista,
status (pendente, em andamento, entregue) e observações.
NotaFiscal: Classe com atributos como número, data de emissão, cliente, itens
(lista de cargas), valor total e forma de pagamento.*/
class Cliente1{
    nome: string;
    Sobre_nome:string;
     fone:number; 
     endereco:string;
      cpf: string;
      cnpj:string;

    constructor (
        nome:string,
        Sobre_nome:string,
         fone:number, endereco:string, cpf:string,cnpj:string)
    {this.nome=nome,
    this.fone=fone, 
    this.endereco=endereco,
    this.cpf=cpf
    this.cnpj=cnpj 
    this.Sobre_nome=Sobre_nome
 }
}

class ClienteContratante extends Cliente1{
    freteFrequente:boolean
    
    constructor (nome:string,Sobre_nome:string, fone:number, endereco:string,cpf:string,cnpj:string, freteFrequente:boolean)
    {
        super(nome,Sobre_nome,fone,endereco,cpf,cnpj)
        this.freteFrequente=freteFrequente
    }
}
class ClienteEsporádico extends Cliente1{
    FretesEsporadicamente:boolean
    
    constructor (nome:string,Sobre_nome:string, fone:number, endereco:string,cpf:string,cnpj:string, FretesEsporadicamente:boolean)
    {
        super(nome,Sobre_nome,fone,endereco,cpf,cnpj)
        this.FretesEsporadicamente=FretesEsporadicamente
}
}

class Pedido{
    cliente:Cliente1[]=[];
     carga: Carga[]=[]; 
     entrega: Entrega[]=[];
      motorista: Motorista[]=[];
     rota: Rota[]=[]
    }

    class Carga {
        seca:string;
        refrigerada:string;
        perigosas:string;
        pedido: Pedido;
        peso:number;
         volume: number;
          tipo: string; 
          origem: string;
           destino: string;
            dataeEmbarque:number;
             dataEntrega:number;

        constructor(seca:string,
            refrigerada:string,
            perigosas:string,
            pedido:Pedido,
            peso:number,
            volume:number,
            tipo:string,
            origem:string,
            destino:string,
            dataEmbarque:number,
            dataEntrega:number){
            this.seca=seca
            this.refrigerada=refrigerada
            this.perigosas=perigosas
            this.pedido=pedido
            this.dataEntrega=dataEntrega
            this.dataeEmbarque=dataEmbarque
            this.destino=destino
            this.peso=peso
            this.volume=volume
            this.tipo=tipo
            this.origem=origem
        }
    }
    class Veiculo{
    placa:string;
    modelo:string; 
    capacidadeCarga:number;

    constructor(placa:string,modelo:string,capacidadeCarga:number){
        this.modelo=modelo
        this.capacidadeCarga=capacidadeCarga
        this.placa=placa
      

    }
}
class Motorista{
    nomeMotorista: string;
     cnh:number;
      categoria:string;
       experiencia: string;
        veiculoAtribuido: string

        constructor(nomeMotorista:string,
            cnh:number,
            categoria:string,
            experiencia:string,
            veiculoAtribuido:string){
                this.cnh=cnh
                this.categoria=categoria
                this.experiencia=experiencia
                this.nomeMotorista=nomeMotorista
                this.veiculoAtribuido=veiculoAtribuido
            }
}

class Rota{origem:string; 
    destino:string; 
    distancia:number;
     tempoViagem:number;
      veiculosPercorreramRota:string


      constructor(destino:string, 
        distancia:number,
         tempoViagem:number,
          veiculosPercorreramRota:string,
          origem:string
    ){
        this.destino=destino
        this.distancia=distancia
        this.tempoViagem=tempoViagem
        this.veiculosPercorreramRota=veiculosPercorreramRota
        this.origem=origem
    }
}

class Entrega{
     data:number; 
    hora:number; 
    client:Cliente1; 
    carga:Carga; 
    veiculo:Veiculo; 
    motorista: Motorista; 
    observacao:string;
    status:string;

    constructor(
        data:number,
    hora:number,
    client:Cliente1, 
    carga:Carga,
    veiculo:Veiculo, 
    motorista: Motorista, 
    observacao:string,
    status:string
    ){
        this.hora=hora
        this.data=data
        this.client=client
        this.carga=carga
        this.veiculo=veiculo
        this.motorista=motorista
        this.observacao=observacao
        this.status=status
    }
}
class EntregaDeCarga extends Entrega{
    foiEntregue:Number=99.1564
    
}
class Pendente extends Entrega{
    pendente:Number=45.26
    Prevista:Number=99565.56262
}

class NotaFiscal{ 
    numero:number; 
    dataEmissao:number; 
    cliente: Cliente1; 
    item: Carga; 
    valorTotal:number; 
    formaPagamento:number;

    constructor(
         numero:number, 
        dataEmissao:number, 
        cliente: Cliente1,
        item: Carga, 
        valorTotal:number, 
        formaPagamento:number,
    ){
        this.cliente=cliente
        this.dataEmissao=dataEmissao
        this.item=item
        this.valorTotal=valorTotal
        this.formaPagamento=formaPagamento
        this.numero=numero
    }
}

let cliente =new Cliente1("jake","Donfort",5,"0000","cpf","cnpj");
let aluno=new Cliente1("alastor","sunset",5,"0000","cpf","cnpj");
let aluno1=new Cliente1("noha","sharpwater",5,"0000","cpf","cnpj");
let aluno2=new Cliente1("maik","wolfstone",5,"0000","cpf","cnpj");
let aluno3=new Cliente1("nill","fullmoon",5,"0000","cpf","cnpj");
let aluno4=new Cliente1("kymera","longhair",5,"0000","cpf","cnpj");
let aluno5=new Cliente1("simon","hotice",5,"0000","cpf","cnpj");
let aluno6=new Cliente1("luca","thepainter",5,"0000","cpf","cnpj");
let aluno7=new Cliente1("naru","aim",5,"0000","cpf","cnpj");
let aluno8=new Cliente1("alex","spirit",5,"0000","cpf","cnpj");
let aluno9=new Cliente1("hiro","theclown",5,"0000","cpf","cnpj");
let aluno10= new Cliente1("tommy","brokenmoon",5,"0000","cpf","cnpj");
let aluno11=new Cliente1("jose","silva",5,"0000","cpf","cnpj");
let aluno12=new Cliente1("gabi","anchieta",5,"0000","cpf","cnpj");
let aluno13=new Cliente1("michael","costa",5,"0000","cpf","cnpj");
let aluno14=new Cliente1("deissom","costa",5,"0000","cpf","cnpj");
let aluno15=new Cliente1("sunamita","alves",5,"0000","cpf","cnpj");
let aluno16=new Cliente1("kalitha","naibert",5,"0000","cpf","cnpj");
let aluno17=new Cliente1("ester","solza",5,"0000","cpf","cnpj");
let aluno18= new Cliente1("rose","fatima",5,"0000","cpf","cnpj");
let aluno19=new Cliente1("micaela","rocha",5,"0000","cpf","cnpj");
let aluno20=new Cliente1("jacksson","mesquita",5,"0000","cpf","cnpj");
let aluno21=new Cliente1("lurdis","moon",5,"0000","cpf","cnpj");
let aluno22=new Cliente1("gabriel","rosa",5,"0000","cpf","cnpj");
let aluno23=new Cliente1("rafael","silveira",5,"0000","cpf","cnpj");
let aluno24=new Cliente1("arcanjelo","naibert",5,"0000","cpf","cnpj");
let aluno25=new Cliente1("lucas","eitur",5,"0000","cpf","cnpj");
let aluno26= new Cliente1("julia","morais",5,"0000","cpf","cnpj");
let aluno27=new Cliente1("hinata","jack",5,"0000","cpf","cnpj");
let aluno28=new Cliente1("jack"," Donfort",5,"0000","cpf","cnpj");
let aluno29=new Cliente1("Hannah","Donfort",5,"0000","cpf","cnpj");
let aluno30=new Cliente1("Phil"," Hawkins",5,"0000","cpf","cnpj");
let aluno31=new Cliente1("Amy ","Bell Lewi",5,"0000","cpf","cnpj");
let aluno32=new Cliente1("Thomas ","Scherer",5,"0000","cpf","cnpj");
let aluno33=new Cliente1("Cleo "," Baumgartne",5,"0000","cpf","cnpj");
let aluno34= new Cliente1("Alan"," Bloomgate",5,"0000","cpf","cnpj");
//vitoria e talita
