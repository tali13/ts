/*class Animal{
    Andar(direcao:string): boolean{
        return true
    }
}
class Cachorro extends Animal{
    Andar(direcao: string): boolean {
        let nome ="meu nome"
        return false
    }
}*/
/*
class Animal{
    Andar(direcao:string): boolean{
        if (direcao ==="frente")
            return true
    }
}
class Cachorro extends Animal{
    Andar(direcao: string): boolean {
        if (direcao==="frente")
            return false
    }
}
*/
//
//
//
//
//Classe Livro: Título, autor, ISBN, número de páginas, gênero (ficção, não-ficção, etc.).
//Classe Revista: Título, editora, ISSN, número de edições, dados de publicação.
//Classe Usuário: Nome, matrícula, tipo (aluno, professor, funcionário), lista de itens emprestados.
//Classe Empréstimo: Dados de empréstimo, dados de devolução prevista, usuário, item emprestado.

class Livro{
    titulo:string=""
    autor:string=""
    isbn:Number=0
    numeroPaginas:Number=0
    genero:string=""
    revista:Revista[]=[]

    constructor(
        titulo:string,
        autor:string,
        isbn:Number,
        numeroPaginas:Number,
        genero:string
    )
    {
        this.titulo=titulo
        this.autor=autor
        this.isbn=isbn
        this.numeroPaginas=numeroPaginas
        this.genero=genero
    }
    adicionarLivro(Titulo:string,editora:string){
        let revista=new Revista()
        revista.Titulo=Titulo
        revista.editora=editora
        this.revista.push(revista)
    }
}

class Revista{
    Titulo:string=""
    editora:string=""
    issn:Number=0
    NumeroEdicao=0
    DadosPublicação=0
}
let numero= 3.22
let capa="poesia"
let revista=new Revista()


class Usuario{
    nome:string=""
    matricula:string=""
    tipo:string=""
    LIstaDeitensEmprestadps:string=""
}
let cadastroUsuario= new Usuario

class Empréstimo{
    dadosDeemprestimo:string=""
    dadosdeDevoluçãoPrevista:string=""
    usuario:string=""
    itemEmprestado:string=""
}
let pessoa= new Empréstimo

/*Classe Animal: Nome, idade, espécie, raça, peso.
Classe Mamifero: Atributos adicionais: tipo de pelagem, se amamenta.
Classe Ave: Atributos adicionais: envergadura das asas, tipo de bico.
Classe Peixe: Atributos adicionais: tamanho do adicional, tipo de alimentação.
*/
class Animal{
    Nome:string=""
    idade:Number=0
    espéci:string=""
    raça:string=""
    peso:Number=0
    mamifero:Mamifero []=[]

  constructor(
    nome:string,
    idade:Number,
    espéci:string,
    raça:string,
    peso:Number
  )
  {
    this.Nome=nome
    this.idade=idade
    this.espéci=espéci
    this.raça=raça
    this.peso=peso
  }
  novoAnimal(AtributosAdicionais:string,tipoDePelagem:string){
    let mamifero=new Mamifero()
    mamifero.AtributosAdicionais=AtributosAdicionais
    mamifero.tipoDePelagem=tipoDePelagem
    this.mamifero.push(mamifero)
  }
}

class Mamifero{
    AtributosAdicionais:string=""
     tipoDePelagem:string=""
      amamenta:string=""
}
    let quantos=8
    let meses="5 meses"
    let mamifero=new Mamifero()
class Ave{
    AtributoAdicionais:string=""
     envergaduraDasAsas:string=""
     tipoDeBico:string=""
}
let aves=new Ave
class Peixe{
    AtributoAdicional:string=""
    tamanhoDoAdicional:string=""
    tipoDeAlimentação:string=""

}
let peixes=new Peixe
