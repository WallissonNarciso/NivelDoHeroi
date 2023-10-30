let saldoVitorias = 0
let nivel = "";

// Arrays para armazenar os limites de XP e os nomes de níveis correspondentes
// Usamos Number.POSITIVE_INFINITY no último elemento do array limitesXP para representar o limite superior do último nível ("Radiante").
// Isso permite que qualquer valor de XP maior que o último limite seja automaticamente considerado como "Radiante", tornando o código flexível e tratando todos os casos.

//Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
function calcularPontuação(vitorias = 0, derrotas = 0){
    return vitorias - derrotas
}

function calcularRanking(saldo){
    let saldosParaPontuar = [10, 20, 50, 80, 90, 100, Number.POSITIVE_INFINITY];
    let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    
    // Loop for para percorrer os limites de saldo
    for (let i = 0; i < saldosParaPontuar.length; i++) {
        // Verifica se o saldo é menor do que o limite atual
        if (saldo <= saldosParaPontuar[i]) {
            // Define o nível com base no saldo atual
            nivel = niveis[i];
            // Sai do loop, pois encontramos o nível correto
            break;
        }
    }
}


saldoVitorias = calcularPontuação(200, 150)
calcularRanking(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
