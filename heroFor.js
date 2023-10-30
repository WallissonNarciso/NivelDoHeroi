let nome = "Teste";
let xp = 6005;
let nivel = "";

const limitesXP = [1000, 2000, 5000, 7000, 8000, 9000, 10000, Number.POSITIVE_INFINITY];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < limitesXP.length; i++) {
    if (xp < limitesXP[i]) {
        nivel = niveis[i];
        break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
