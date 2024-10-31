class Maldicao{
    sol(sound: string):void;
    sol(sound?: string):void;
    sol(sound:string){
        if(sound===undefined){
            console.log("Maldição solar")
        }
        else{
            console.log(sound)
        }
    }
}
let maldicao=new Maldicao()
maldicao.sol()
maldicao.sol("Maldição de magma")






class Maldicao2{
    lua(sound: string):void;
    lua(sound?: string):void;
    lua(sound:string){
        if(sound===undefined){
            console.log("Maldição lunar")
        }
        else{
            console.log(sound)
        }
    }
}
let maldicao2=new Maldicao2()
maldicao2.lua()
maldicao2.lua("Maldição gravitocional")




class Maldicao3{
    eclipce(sound: string):void;
    eclipce(sound?: string):void;
    eclipce(sound:string){
        if(sound===undefined){
            console.log("Maldição espaço")
        }
        else{
            console.log(sound)
        }
    }
}
let maldicao3=new Maldicao3()
maldicao3.eclipce()
maldicao3.eclipce("Maldição buraco negro")
