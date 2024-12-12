abstract class FiguraGeometrica {
    abstract calcularArea(): number; // Método abstrato
  
    public desenhar(): void {
      console.log('Desenhando figura geométrica...');
    }
  }
  
  class Retangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    public calcularArea(): number {
      return this.base * this.altura;
    }
  }
  


 /* Exercício 1: Sistema de Gestão de Biblioteca
  Descrição:
  Classe Livro: Título, autor, ISBN, número de páginas, gênero (ficção, não-ficção, etc.).
  Classe Revista: Título, editora, ISSN, número de edições, data de publicação.
  Classe Usuario: Nome, matrícula, tipo (aluno, professor, funcionário), lista de itens emprestados.
  Classe Empréstimo: Data de empréstimo, data de devolução prevista, usuário, item emprestado.*/

  abstract class Biblioteca{
    abstract livros(): number

    public registrar(): void{
    console.log('registrando novos livros...');
    }
  }

  class Livro extends Biblioteca{
       private titulo:number;
       private autor:number;
       private isbn:number;
       private NumeroPag:number;
       private genero: number;

       constructor( titulo:number,autor:number, isbn:number, NumeroPag:number,genero: number){
        super();
        this.titulo=titulo
        this.autor=autor
        this.isbn=isbn
        this.NumeroPag=NumeroPag
        this.genero=genero
       }

       public livros(): number {
           return this.titulo * this.autor * this.isbn * this.NumeroPag * this.genero;
           
       }
  }
class Revista extends Biblioteca{
    private título1:number;
    private editora:number;
     private ISSN:number;
      private númeroDeEdições:number;
       private dataDePublicação:number;

       constructor(título1:number, editora:number, ISSN:number, númeroDeEdições:number, dataDePublicação:number){
        super();
        this.ISSN=ISSN
        this.dataDePublicação=dataDePublicação
        this.editora=editora
        this.título1=título1
        this.númeroDeEdições=númeroDeEdições
       }
        public livros(): number {
            return this.ISSN,this.dataDePublicação,this.editora,this.título1,this.númeroDeEdições;
        }
}
class Usuario extends Biblioteca{
    private nome: string;
    private matricula:number;

    constructor(nome:string){
        super();
        this.nome=nome
       
    }

    public setNome(nome:string){
        this.nome
      
    }
    public getNome():String{
        return this.nome
    }
    public setMatricula(matricula:number){
        this.matricula
    }
    public getMatricula():void{
        this.matricula
    }
    

    public livros(): number {
        return this.matricula
    }

}


interface psicose{
  nome:string
  idade:number
}

function garoto(psicose:psicose){
  return "menino" + psicose.nome;
}