interface Animal {
    nombre: string;
    hacerSonido(): void;
  }
  
  interface Mamifero extends Animal {
    tipoDePelo: string;
  }
  
  const perro: Mamifero = {
    nombre: "Lassie",
    tipoDePelo: "Largo",
    hacerSonido: () => console.log("Guau")
  };
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




 interface Vehiculo {
    encender(): void;
    detener(): void;
  }
  
  abstract class VehiculoAbstracto implements Vehiculo {
    abstract encender(): void;

    detener() {
      console.log("El vehículo se ha detenido.");
    }
  }
  
  class Coche extends VehiculoAbstracto {
    encender() {
      console.log("El coche está encendido.");
    }
  }
  
  const coche = new Coche();
  coche.encender(); 
  coche.detener();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface Operaciones {
    suma(a: number, b: number): number;
    resta(a: number, b: number): number;
  }
  
  const operaciones: Operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface Restaurante{
    cardapio:string;
    formaDepagamento():void
}
interface TipoDePratos extends Restaurante{
    salgados:string
    doces:string
}
 const pagamento={
    cardapio:"salgado",
    salgados:5,
    doces:9,
    formaDepagamento:() => console.log("coxinha")
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface Personagem{
    nome:string;
    sobre_nome:string;
    idade():number;
}
interface Item extends Personagem{
    armadura:string
    armasDeFogo:string
    espadas:string
    pocao:string
    feitico:string
}
interface partida extends Personagem{
    conquista:string
    jogadores:string
    ranking:string
    skins:string
}
interface skin extends Personagem{
    cabelo:string
    pele:string
    camisa:string
    calca:string
    sapato:string
    cor:string
}
interface mundo extends Personagem{
    arvore:string
    pedra:string
    terra:string
    casas:string
    npc:string
    lugaresSegrato:string
    mission:string
}
const GameInicial={
    armadura:"",
    armasDeFogo:"",
    espadas:"",
    pocao:"",
    feitico:"",
    conquista:"",
    jogadores:"",
    ranking:"",
    skins:"",
    cabelo:"",
    pele:"",
    camisa:"",
    calca:"",
    sapato:"",
    cor:"",
    arvore:"",
    pedra:"",
    terra:"",
    casas:"",
    npc:"",
    lugaresSegrato:"",
    mission:"",
    nome:"",
    sobre_nome:"",
    idade:()=> console.log("jogada")
}