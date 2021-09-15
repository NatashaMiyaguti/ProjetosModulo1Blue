//  Projeto 04 - Simulador de votação:# Crie um programa que simule um sistema de votação, ele deve receber votos até
//  que o usuário diga que não tem mais ninguém para votar, esse programa precisa ter
//  duas funções:
//  A 1° Função precisa ser chamada autorizaVoto() ela vai receber como parâmetro o# ano de nascimento de uma pessoa que será digitado pelo usuário, retornando um# valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL e# OBRIGATÓRIO nas eleições.
//  A 2° Função será a votacao(), ela vai receber dois parâmetros, autorização (que virá
//  da função autorizaVoto()) e o voto que é o número que a pessoa votou.
//  Se ela não puder votar, a 2° função terá que retornar “Você não pode votar”, caso o
//  contrário a 2° função deve validar o número que a pessoa escolheu, ela pode
//  escolher de 1 a 5 (crie 3 candidatos para a votação):
//  ● 1, 2 ou 3 - Votos para os respectivos candidatos
//  ● 4- Voto Nulo
//  ● 5 - Voto em Branco
//  Sua função votacao() tem que calcular e mostrar:
//  ● O total de votos para cada candidato;
//  ● O total de votos nulos;
//  ● O total de votos em branco;
//  ● Qual candidato venceu a votação

const color = require("colors"); //colocando cores nas strings
const prompt = require("prompt-sync")();
const _ = require("lodash"); //vamos usar a função groupBy pra agrupar pelo numero jogado no dado
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //criando uma função sleep
const exibirResultados = (candidatos) => {
  let ranking_final = _.groupBy(candidatos, "voto");

  let votos = Object.keys(ranking_final);
  let agrupamentoOrdenado = votos.sort(function (a, b) {
    return b - a;
  });

  let total_votos = _.sumBy(candidatos, "voto");

  if (total_votos > 0) {
    // valida se houve votos
    for (let posicao in agrupamentoOrdenado) {
      let quantidadeVotos = agrupamentoOrdenado[posicao];
      for (let candidato of ranking_final[quantidadeVotos]) {
        let porcentagem = Math.round((candidato.voto / total_votos) * 100); //transformei a quantidade de votos em %
        console.log(
          `Com ${candidato.voto} votos, o candidato ${candidato.nome} com ${porcentagem}%`
        );
      }
    }

    let somente_candidatos = candidatos.filter(
      (candidato) => candidato.numero != 4 && candidato.numero != 5
    ); // cria um filtro p pegar os numeros de votos q não sejam 4 e 5
    let candidatosAgrupados = _.groupBy(somente_candidatos, "voto");

    let chaves = Object.keys(candidatosAgrupados);
    let candidatoOrdenado = chaves.sort(function (a, b) {
      return b - a;
    });

    let total_votosValidos = _.sumBy(somente_candidatos, "voto");
    if (total_votosValidos > 0) {
      //valida os votos validos
      for (let posicao in candidatoOrdenado) {
        let quantidadeVotos = candidatoOrdenado[posicao];
        let porcentagem = Math.round((quantidadeVotos / total_votos) * 100);
        console.log(`Com ${porcentagem} % de votos`.blue);

        for (let candidato of candidatosAgrupados[quantidadeVotos]) {
          console.log(`${candidato.nome}`.blue);
        }
      }

      let vitoria = candidatosAgrupados[candidatoOrdenado[0]];

      if (vitoria.length > 1) {
        //caso tenho mais de um candidato na posicao 1#
        console.log(
          `Houve empate! Aguardem data para nova votação, entre os candidatos:`
        );
        for (i of vitoria) {
          console.log(i.nome);
        }
      } else {
        console.log(`O(A) vencedor(a) das eleições é:\n`.blue);
        await sleep(1000);
        console.log(`${vitoria[0].nome}`); //mostra qnd ha um unico vencedor#
      }
    } else {
      console.log("\nNão houve votos válidos.".blue);
    }
  } else {
    console.log("\nSem votos computados.".blue);
  }
};

const election = () => {
  //criando função assíncrona para usar a função sleep.

  var anoAtual = new Date().getFullYear();

  console.log(`
     _________
    | ======= |
   | __________|
  | ___________ |
  | |         | |
  | | VOTAÇÃO | |
  | |_________| |
  (____________/   
  [ """"""""""" ]                      
 [ ::::::::::::: ]                  
[_________________]
  
  
  `);

  await sleep(2000);
  let candidatos = [
    { nome: "Joao", voto: 0, numero: 1 },
    { nome: "Pedro", voto: 0, numero: 2 },
    { nome: "Ana", voto: 0, numero: 3 },
    { nome: "Voto Nulo", voto: 0, numero: 4 },
    { nome: "Voto em Branco", voto: 0, numero: 5 },
  ];

  function autorizaVoto(ano) {
    let idade = anoAtual - ano; //para colocar o ano atual
    if (idade < 16) {
      return "NEGADO";
    } else if (idade >= 18 && idade < 70) {
      return "OBRIGATORIO";
    } else {
      return "OPCIONAL";
    }
  }

  function votacao(autorizacao, voto) {
    if (!(voto in [1, 2, 3, 4, 5, 6])) {
      //verifica se o numero não esta dentro da lista
      console.log("Opção inválida".blue);
    } else if (autorizacao == "OPCIONAL" || autorizacao == "OBRIGATORIO") {
      console.log(`\nVoto computado.\n  Obrigada.\n`);
      let candidato = candidatos.find((x) => x.numero === voto);
      candidato.voto += 1;
    } else {
      console.log("Você não pode votar".blue);
    }
  }

  while (true) {
    let ano = +prompt("Digite o ano de nascimento: ".blue);
    await sleep(1000);

    console.log(`\n Escolha seu voto:`.blue);
    await sleep(1000);
    console.log(`
    1 - João 
    2 - Pedro 
    3 - Ana    
    4 - Voto Nulo
    5 - Voto em Branco
    `);
    await sleep(1000);
    let voto_escolhido = +prompt("Digite o numero do seu voto: ".blue);
    votacao(autorizaVoto(ano), voto_escolhido);

    let continuar = prompt(`Deseja continuar[S/N]:`.blue)
      .toUpperCase()
      .slice(0, 1);
    if (continuar == "N") {
      break;
    }
  }

  exibirResultados(candidatos);
};
election();
