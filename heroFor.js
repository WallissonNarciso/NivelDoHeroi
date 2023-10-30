// Definindo o nome do herói e o valor de XP
let nome = "Teste";
let xp = 6005;
let nivel = "";

// Arrays para armazenar os limites de XP e os nomes de níveis correspondentes
// Usamos Number.POSITIVE_INFINITY no último elemento do array limitesXP para representar o limite superior do último nível ("Radiante").
// Isso permite que qualquer valor de XP maior que o último limite seja automaticamente considerado como "Radiante", tornando o código flexível e tratando todos os casos.
const limitesXP = [1000, 2000, 5000, 7000, 8000, 9000, 10000, Number.POSITIVE_INFINITY];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// Loop for para percorrer os limites de XP
for (let i = 0; i < limitesXP.length; i++) {
    // Verifica se o XP é menor do que o limite atual
    if (xp < limitesXP[i]) {
        // Define o nível com base no limite atual
        nivel = niveis[i];
        // Sai do loop, pois encontramos o nível correto
        break;
    }
}

// Exibe o resultado com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
