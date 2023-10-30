class heroi{

    constructor (nome = "Joao", idade = 10, tipo = "guerreiro"){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        
        let golpe = ""

        if (this.tipo === "mago"){
            golpe = "magia"
        } else if(this.tipo === "guerreiro") {
            golpe = "espada"
        } else if(this.tipo === "monge") {
            golpe = "artes marciais"
        } else if (this.tipo === "ninja"){
            golpe = "shuriken"
        } else {
        }

        console.log(`o ${this.tipo} atacou usando ${golpe}`)
    }

}

let personagem = new heroi("Shogun", 45, "mago")
personagem.atacar()
