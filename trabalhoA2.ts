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

