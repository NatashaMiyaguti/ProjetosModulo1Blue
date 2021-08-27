// Projeto 01 – Projeto Detetive
// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// 1.	"Telefonou para a vítima?"
// 2.	"Esteve no local do crime?"
// 3.	"Mora perto da vítima?"
// 4.	"Devia para a vítima?"
// 5.	"Já trabalhou com a vítima?" 

// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

const color = require('colors'); //colocando cores nas strings
const prompt = require('prompt-sync')();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); //criando uma função sleep
const jogoDetetive = async () => { //criando função assíncrona para usar a função sleep. 

    console.log (' Seja bem vindo!!!\n'.red);

    const jogo = prompt("Vamos jogar um jogo? [S/N]: ")
      .slice(0, 1)
      .toUpperCase();
    if (jogo == 'N'){
        console.log ('Até a próxima!'.yellow);
        process.exit();  //chamando a função que para fechar o prgrama
    }
    if (jogo != 'S' && jogo != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }

    console.log('\nNeste jogo você está sendo investigado(a) por um homicídio. Responda as perguntas para que possamos fazer a investigação e achar o possível culpado.\n'.blue)
    console.log ('\n Começando em:\n3');
    await sleep(1000); //chamando o delay. com await que só funciona dentro da função async

    console.log (' Começando em:\n2');
    await sleep(1000);

    console.log (' Começando em:\n1\n');
    await sleep(1000);

    console.log ('Boa sorte!');
    await sleep(1000);
    console.log ('\n\nJogo do Detetive\n'.red);
    await sleep(2000);

    const pergunta1 = prompt('Você telefonou para a vítima? [S/N]: '.gray).slice(0,1).toUpperCase();
    if (pergunta1 != 'S' && pergunta1 != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }
    const pergunta2 = prompt ('Você esteve no local do crime? [S/N]:'.gray).slice(0,1).toUpperCase();
    if (pergunta2 != 'S' && pergunta2 != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }

    const pergunta3 = prompt('Você mora perto da vítima? [S/N]:'.gray).slice(0,1).toUpperCase();
    if (pergunta3 != 'S' && pergunta3 != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }

    const pergunta4 = prompt('Você devia para a vítima? [S/N]:'.gray).slice(0,1).toUpperCase();
    if (pergunta4 != 'S' && pergunta4 != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }

    const pergunta5 = prompt('Você já trabalhou com a vítima? [S/N]: '.gray).slice(0,1). toUpperCase();
    if (pergunta5 != 'S' && pergunta5 != 'N'){
        console.log ('Resposta inválida'.red);
        process.exit();
    }

    console.log ()
    contador = 0

    if (pergunta1 == 'S')
        contador = contador + 1;

    if (pergunta2 == 'S')
        contador = contador + 1;

    if (pergunta3 == 'S')
        contador = contador + 1;

    if (pergunta4 == 'S')
        contador = contador + 1;

    if (pergunta5 == 'S')
        contador = contador + 1;


    await sleep(1000);

    console.log ('Com base na nossa investigacão...\n'.blue)

    await sleep(1000);

    if (contador == 2)
        console.log ('"Você é Suspeito"'.yellow);
    else if (contador ==3 || contador == 4)
        console.log ('"Você é Cúmplice"'.yellow);
    else if (contador == 5)
        console.log ('"Você é o Assassino"'.red)
    else
        console.log ('"Você é inocente"'.green)
}

jogoDetetive();