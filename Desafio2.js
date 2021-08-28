
const prompt = require('prompt-sync')();    

let play1 = prompt ("Primeiro jogador, qual é seu nome? ");
console.log();
console.log ("Segundo jogador, qual é seu nome? Meu nome é CPU");
console.log();

let replay = "sim";

while (replay == "sim") {

let rodadas = +prompt ("Quantas rodadas pretende jogar? ");
console.log();

const pedra = 1;
const papel = 2;
const tesoura = 3;

var vitorias_play1 = 0;
var vitorias_CPU = 0;


for (let i = 1; i <= rodadas; i++) {

    let escolha_play1 = +prompt ("Escolha 1 para pedra, 2 para papel ou 3 para tesoura: ");
    console.log();

    function gerar_escolha_CPU(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let escolha_CPU = (gerar_escolha_CPU(1, 3));


    
    if (escolha_play1 === tesoura && escolha_CPU === pedra) {
        console.log("Pedra vence de tesoura, CPU vence! ");
        console.log();
        vitorias_CPU++ 
    }
    else if (escolha_play1 === papel && escolha_CPU === pedra) {
        console.log (`Papel vence pedra, ${play1} vence! `);
        console.log();
        vitorias_play1++
   }
    else if (escolha_play1 === papel && escolha_CPU === tesoura) {
        console.log("Tesoura vence papel, CPU vence! ");
        console.log();
        vitorias_CPU++
    }
    else if (escolha_play1 === pedra && escolha_CPU === papel) {
        console.log("Papel vence pedra, CPU vence! ");
        console.log();
        vitorias_CPU++
    }
    else if (escolha_play1 === pedra && escolha_CPU === tesoura) {
        console.log(`Pedra vence tesoura, ${play1} vence! `);
        console.log();
        vitorias_play1++
    }
    else if (escolha_play1 === tesoura && escolha_CPU === papel) {
        console.log(`Tesoura vence papel, ${play1} vence! `);
        console.log();
        vitorias_play1++
    }
    else if (escolha_play1 === escolha_CPU) { 
        console.log("Opa, deu empate! ");
        console.log();

    } else {
        console.log("Erro! Selecione 1 para pedra, 2 para papel ou 3 para tesoura")
        console.log();
    }
}

if (vitorias_play1 > vitorias_CPU) {
    console.log(`O grande campeao da melhor de ${rodadas} foi o(a) ${play1}!!! `);
    console.log();
    console.log(`Quantidade de vitorias do(a) ${play1} : ${vitorias_play1}`);
    console.log();
    console.log(`Quantidade de vitorias da CPU: ${vitorias_CPU}`);
    console.log();

} else if (vitorias_play1 < vitorias_CPU) {
    console.log(`O grande campeao da melhor de ${rodadas} foi a CPU!!!`);
    console.log();
    console.log(`Quantidade de vitorias da CPU: ${vitorias_CPU}`);
    console.log();
    console.log(`Quantidade de vitorias do(a) ${play1} : ${vitorias_play1}`);
    console.log();

} else {
    console.log("Deu empate!!");
}
replay = prompt ("Deseja jogar novamente? ");
console.log();
}


