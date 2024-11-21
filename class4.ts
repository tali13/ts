/*class Pessoa {
    public nome: string; // Propriedade pública
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    public falar(): void {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  }
  
  const pessoa1 = new Pessoa('João');
  console.log(pessoa1.nome); // Acessando propriedade pública
  pessoa1.falar(); // Acessando método público
  */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






 /* class ContaBancaria {
    private saldo: number; // Propriedade privada
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    public sacar(valor: number): void {
      if (valor > this.saldo) {
        console.error('Saldo insuficiente');
        return;
      }
  
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    }
  
    // O método 'getSaldo' não tem o modificador 'public', então ele é privado
    private getSaldo(): number {
      return this.saldo;
    }
  }
  
  const conta1 = new ContaBancaria(1000);
  conta1.sacar(500); // Acessando método público
  // conta1.saldo; // Erro: 'saldo' é privado e não pode ser acessado fora da classe
  */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  /*class Animal {
    protected nome: string; // Propriedade protegida
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    public falar(): void {
      console.log(`Eu sou um animal e meu nome é ${this.nome}`);
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome: string) {
      super(nome);
    }
  
    public latir(): void {
      console.log(`Au au! Meu nome é ${this.nome}`);
    }
  }
  
  const cachorro1 = new Cachorro('Rex');
  cachorro1.falar(); // Acessando método público herdado
  cachorro1.latir(); // Acessando método próprio
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*abstract class FiguraGeometrica {
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
  
  const retangulo1 = new Retangulo(5, 7);
  console.log(retangulo1.calcularArea()); // Acessando método implementado na classe derivada
  retangulo1.desenhar(); // Acessando método herdado
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Usuario{
    private nome: string
    private sobre_nome:string

    constructor(nome:string,sobre_nome:string){
        this.nome=nome
        this.sobre_nome=sobre_nome
    }

    public setNome(nome:string){
        this.nome
    }
    public getNome():String{
        return this.nome
    }
}
let usuario= new Usuario("jake","noha")














