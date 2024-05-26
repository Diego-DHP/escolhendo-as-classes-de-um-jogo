/*
Atributos de ataque dos herois:
Monge: 1
Guerreiro: 2
Mago: 3
Ninja: 4

Armas dos jogadores:
Monge: Arte marciais
Gurrreiro: Espada
Mago: Magia
Ninja: Shuriken

*/

var profile = {
    name: "Diego",
    age: 29,
    race: "guerreiro", // A escolha da raça vai definir o seu ataque e arma.
}


generateProfile(profile)

function generateProfile(profile){
    console.log(`Name: ${profile.name}`)
    console.log(`Age: ${profile.age}`)
    console.log(`Race: ${profile.race}`)
    console.log("-----------------")
}

if (profile.race === "guerreiro") {
    console.log("Vi que você é um guerreiro e vai fazer um ataque ao boss usando sua espada, boa sorte!")
    console.log("O boss tem 5 de HP")
} else if (profile.race === "mago") {
    console.log("Vi que você é um mago e vai fazer um ataque ao boss usando sua magia, boa sorte!")
    console.log("O boss tem 5 de HP")
}else if (profile.race === "monge") {
    console.log("Vi que você é um monge e vai fazer um ataque ao boss usando sua arte macial, boa sorte!")
    console.log("O boss tem 5 de HP")
}else if (profile.race === "ninja") {
    console.log("Vi que você é um ninja e vai fazer um ataque ao boss usando sua shuriken, boa sorte!")
    console.log("O boss tem 5 de HP")
}

console.log("")

class hero {
    constructor(guerreiro, mago, monge, ninja){
        this.guerreiro = guerreiro
        this.mago = mago
        this.monge = monge
        this.ninja = ninja
    }
    atacar(raceChosen) {
        var equipment = ""

       switch(raceChosen) {
        case "guerreiro":
        equipment = "espada"
        break

        case "mago":
        equipment = "magia"
        break

        case "monge":
        equipment = "artes maciais"
        break

        case "ninja":
        equipment = "shuriken"
        break

       }
       if (profile.race === "guerreiro"){
        console.log(`O ${raceChosen} atacou usando ${equipment}...`)
       console.log("")
       } else if (profile.race === "mago"){
        console.log(`O ${raceChosen} atacou usando ${equipment}...`)
       console.log("")
       } else if (profile.race === "monge"){
        console.log(`O ${raceChosen} atacou usando ${equipment}...`)
       console.log("")
       }else if (profile.race === "ninja"){
        console.log(`O ${raceChosen} atacou usando ${equipment}...`)
       console.log("")
       }else {
        console.log("Raça invalida ou indisponivel, verifique as opções e tente novamente!")
       }
       
    }
    
}

let theHero = new hero("guerreiro", "mago", "monge", "ninja")

let raceChosen = profile.race // Altere para a raça de acordo com o que você escolheu ***

theHero.atacar(raceChosen)

if (profile.race === "guerreiro"){
    for (let atk = 1; atk <=3; atk++){
        console.log("Você atacou o boss e tirou 2 ponto de vida")
    }
    console.log("")
        console.log("Parabéns, o boss foi derotado!")
}else if (profile.race === "mago") {
    for (let atk = 1; atk <=2; atk++){
        console.log("Você atacou o boss e tirou 3 ponto de vida")
    }
    console.log("")
        console.log("Parabéns, o boss foi derotado!")
}else if (profile.race === "monge"){
    for (let atk = 1; atk <=5; atk++){
        console.log("Você atacou o boss e tirou 1 ponto de vida")
    }
    console.log("")
        console.log("Parabéns, o boss foi derotado!")
}else if (profile.race === "ninja") {
    for (let atk = 1; atk <=2; atk++){
        console.log("Você atacou o boss e tirou 4 ponto de vida")
    }
    console.log("")
        console.log("Parabéns, o boss foi derotado!")
}
