class  projeto_nemesis{
    policial:string=""
    parasita:string=""
    atacks:Atack[]=[]
    
    constructor
    (policial:string,
    parasita:string)
    {
    this.parasita=parasita
    this.policial=policial
    }
    nemesis(
        força:number,velocidade:number
    ){
        let atack=new Atack()
        atack.força=força
        atack.velocidade=velocidade
        this.atacks.push(atack)
    }
    }
    class Atack{
    força:number=0
    velocidade:number=0
    }
    class loja{
    luta:number=0 
    valor:number=0
    facas:string=""
    armas:string=""


    


    constructor
    (corpo,dano)
    {
    if(corpo=55){
      corpo.dano+=corpo
    }
    }
    }
    class  armas extends loja{
    luta: number=2
    valor: number=6
    arma:string="pistola"
    }
    
    class erva_medicinal{
   curaLeves:string=""
   curaAlta:string=""
   curaMedia:string=""
   curaExtrama:string=""

   constructor(
     curaLeves:string,
    curaAlta:string,
    curaMedia:string,
    curaExtrama:string
 ){
    this.curaAlta=curaAlta
    this.curaExtrama=curaExtrama
    this.curaLeves=curaLeves
    this.curaMedia=curaMedia
 }
    }
    class erva_vermelha extends erva_medicinal{
     curaLeves4:string="arranhoes"
    }
    class erva_amarela extends erva_medicinal{
     curaMedia3: string="cortes"
    }
    class erva_azul extends erva_medicinal{
      curaAlta2: string="machucado pouco profundo"
    } 
    class erva_verde extends erva_medicinal{
      curaExtrama1: string="machucados graves"
    }
    class erva_roxa extends erva_medicinal{
     curaExtrama_leves: string=this.curaAlta
    }
    class Vida{
    private vida:number=0
    private tempo_vida:number=0


    constructor
    (
        vida:number,
        tempo_vida:number)
    {
        this.vida=vida
        this.tempo_vida=tempo_vida
    }

    public setVida
    (
        vida:number,
        tempo_vida:number)
    {
        this.vida=vida
        this.tempo_vida=tempo_vida
    }
    public getVida
    (
        vida:number,
        tempo_vida:number)
    {
        this.vida
        return this.tempo_vida
    }
}
    class mapa{
    com_zumbi:string=""
    sem_zumbi:string=""
    local:string=""

    constructor
    (com_zumbi:string,
     sem_zumbi:string,
     local:string
    )
    {
        this.com_zumbi=com_zumbi
        this.sem_zumbi=sem_zumbi
        this.local=local
    }
}
    class  zumbi extends mapa{
        com_zumbi:string="zumbi encontrado"
        sem_zumbi:string="zumbi nâo encontrado"
        local: string="zona aberta"
    }
  
    
    class capitulo{
    private nome_capitulo:string=""
    private numero_capitulo:number=0
    private missao_capitulo:string=""
    private reconpensa:string=""

    constructor(
        nome_capitlo:string,
        numero_capitulo:number,
     missao_capitulo:string,
     reconpensa:string
    ){
        this.missao_capitulo=missao_capitulo
        this.nome_capitulo=nome_capitlo
        this.numero_capitulo=numero_capitulo
        this.reconpensa=reconpensa
    }
    public setCap(
        nome_capitlo:string,
        numero_capitulo:number,
     missao_capitulo:string,
     reconpensa:string){
        this.missao_capitulo=missao_capitulo
        this.nome_capitulo=nome_capitlo
        this.numero_capitulo=numero_capitulo
        this.reconpensa=reconpensa
    }
   public getCap(
    nome_capitlo:string,
        numero_capitulo:number,
     missao_capitulo:string,
     reconpensa:string){
        this.missao_capitulo=missao_capitulo
        this.nome_capitulo=nome_capitlo
        this.numero_capitulo=numero_capitulo
        this.reconpensa=reconpensa
        return this.nome_capitulo
     }

     public qual_capitulo():void{
        console.log("qual capitulo voce estava?")
     }
     }
     const capitulo1 = new capitulo("sanguinario",1,"n morrer","ouro");

     const capitulo2 = new capitulo("sanguinario2",2,"n morrer","ouro");

     const capitulo3 = new capitulo("sanguinario3",3,"n morrer","ouro");

     const capitulo4 = new capitulo("sanguinario4",4,"n morrer","ouro");

     const capitulo5 = new capitulo("sanguinario5",5,"n morrer","ouro");

     const capitulo6 = new capitulo("sanguinario6",6,"n morrer","ouro");

     const capitulo7 = new capitulo("sanguinario7",7,"n morrer","ouro");

     const capitulo8 = new capitulo("sanguinario8",8,"n morrer","ouro");

     const capitulo9 = new capitulo("sanguinario9",9,"n morrer","ouro");

     const capitulo10= new capitulo("sanguinario10",10,"n morrer","ouro");

     const capitulo111= new capitulo("sanguinario11",11,"n morrer","ouro");
    
    
     abstract class Missao {
     abstract reconpensa ():number

     public salvar_reconpensa():void{
        console.log('salvando suas novas reconpensa...')
     }
    }
   
    
     class personagem{
    skin:string;
    nome_skin:string;

    public Personagem(nome_skin:personagem,zumbi_som:Movimento,nome_usuario:Usuario){
        return`o personagem${nome_skin.Personagem}levou dano de${zumbi_som.skin}}`

    }
    
    setNome(){
        return this.skin
        return this.nome_skin
    }

    getName(){
        return this.Personagem
        return this.skin
    }
    }
    class Movimento extends personagem{
     sons:string=""
     zumbi_som:string=""
     passos:string=""
     caminhada:string=""
     pula:string=""
     posicao:string=""
     movimento_mao:string=""
     vira:string=""


     constructor(
        sons:string,
        zumbi_som:string,
        passos:string,
        caminhada:string,
        pula:string,
        posicao:string,
        movimento_mao:string,
        vira:string){
           super() 
            this.caminhada=caminhada
            this.movimento_mao=movimento_mao
            this.passos=passos
            this.posicao=posicao
            this.pula=pula
            this.vira=vira
            this.sons=sons
            this.zumbi_som=zumbi_som
        }
    }
    class Usuario{
    nome_usuario:string=""
    idade:number=0

    constructor(nome_usuario:string,idade:number){
        this.idade=idade
        this.nome_usuario
    }
    }
    
 let usuario1=new Usuario("jake",24)
 let usuario2=new Usuario("hanna",26)
 let usuario3=new Usuario("lily",21)
 let usuario4=new Usuario("dan",30)
 let usuario5=new Usuario("richy",29)
 let usuario6=new Usuario("adam",20)
 let usuario7=new Usuario("eric",33)
 let usuario8=new Usuario("violet",24)
 let usuario9=new Usuario("charlie",25)
 let usuario10=new Usuario("alastor",17)
 let usuario11=new Usuario("nill",19)
 let usuario12=new Usuario("noha",17)
 let usuario13=new Usuario("kymers",18)
 let usuario14=new Usuario("harry",46)
 let usuario15=new Usuario("luca",76)
 let usuario16=new Usuario("maik",84)
 let usuario17=new Usuario("simon",5520)
 let usuario18=new Usuario("tommy",13300)
 let usuario19=new Usuario("naru",18)
 let usuario20=new Usuario("fizt",1)
 let usuario21=new Usuario("maya",16)
 let usuario22=new Usuario("eclipsa",45448)
 let usuario23=new Usuario("renam",45448)
 let usuario24=new Usuario("mitsuk",19)
 let usuario25=new Usuario("adriel",19)
 let usuario26=new Usuario("gabriel",20)
 let usuario27=new Usuario("lua",35)
 let usuario28=new Usuario("san",27)
let usuario29=new Usuario("merlin",29)
let usuario30=new Usuario("castiel",23)
