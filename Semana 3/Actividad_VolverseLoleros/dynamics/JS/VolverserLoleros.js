class campeon {
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    {
        this.nombre = nombre;
        this.vida = vida; //el primer vida es variable, el segundo, depende del nombre que le pusiste como parametro
        this.ataque = ataque;
        this.mana = mana;              
        this.tipo = tipo; 
        this.esFuerteContra1 = esFuerteContra1; 
        this.esFuerteContra2 = esFuerteContra2;
        this.habilidades = habilidades;
    }
    presentarse(){
        console.log("Mi nombre es "+this.nombre+", soy un "+this.tipo+" del LOL");
        console.log("Mis estadisticas son las siguientes: Vida: "+this.vida+", Maná: "+this.mana+", Ataque: "+this.ataque);
        console.log("Mis habilidades son: ");
        console.log(this.habilidades);
    }
    /*
    comparar(campeonAComparar){        
        if(campeonAComparar)

    }*/
}
class Tanque extends campeon{
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades){
        super(nombre, vida*=1.24, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    }    
    propiedad = "Armadura";
}
class Luchador extends campeon{
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades){
        super(nombre, vida*=1.15, ataque*=1.15, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    }    
}
class Tirador extends campeon{
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades){
        super(nombre, vida, ataque *= 1.24, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    }    
    propiedad = "Distancia";
}
class Mago extends campeon{
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades){
        super(nombre, vida, ataque, mana*= 1.24, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    }   
    propiedad = "Distancia"; 
}
class Asesino extends campeon{
    constructor(nombre, vida, ataque, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades){
        super(nombre, vida=vida-(vida*0.05), ataque *= 1.35, mana, tipo, esFuerteContra1, esFuerteContra2, ...habilidades)
    }    
    propiedad = "Movilidad;"
}

const amogus = new Tirador("Amogus", 100, 100, 100, "Asesino", "Mago", "Tirador", "cuchillazo Pro", "Dientes asesinos")
const cholo_De_Iztapalapa = new Asesino("Amogus", 100, 100, 100, "Asesino", "Mago", "Tirador", "cuchillazo Pro", "Dientes asesinos")
const kemonito = new Luchador("KeMonito", 100, 100, 100, "Asesino", "Mago", "Tirador", "cuchillazo Pro", "Dientes asesinos")
const amlo = new Tanque("AMLO", 100, 100, 100, "Asesino", "Mago", "Tirador", "cuchillazo Pro", "Dientes asesinos")
const asaltante_del_metro = new Mago("Amogus", 100, 100, 100, "Asesino", "Mago", "Tirador", "cuchillazo Pro", "Dientes asesinos")

console.log(amogus.presentarse());
