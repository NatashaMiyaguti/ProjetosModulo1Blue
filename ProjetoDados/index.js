/*• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)*/

const color = require("colors"); //colocando cores nas strings
const prompt = require("prompt-sync")();
const _ = require("lodash"); //vamos usar a função groupBy pra agrupar pelo numero jogado no dado
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //criando uma função sleep
const jogoDados = async () => {
  //criando função assíncrona para usar a função sleep.

  console.log(
    ` 
  JOGO DE DADOS
    
                (( _______
     _______     /\\O     O\\
    /O     /\\   /  \\       \\
   /   O  /O \\ / O  \\O_____O\\ ))
((/_____O/    \\\\    /O      /
  \\O    O\\    / \\  /   O   /
   \\O    O\\ O/   \\/_____O /
    \\O____O\\/ ))          ))
  ((
      `.magenta
  );

  console.log(" Seja bem vindo!!!\n".green);

  const jogo = prompt("Vamos jogar um jogo? [S/N]: ").slice(0, 1).toUpperCase();
  if (jogo == "N") {
    console.log("Até a próxima!".yellow);
    process.exit(); //chamando a função que para fechar o prgrama
  }
  if (jogo != "S" && jogo != "N") {
    console.log("Resposta inválida".red);
    process.exit();
  }

  console.log(
    "\nVamos testar sua sorte e de seus amigos no famoso Jogo de Dados. Quem será o grande vencedor?\n"
      .magenta
  );
  console.log("\n Começando em:\n3");
  await sleep(1000); //chamando o delay. com await que só funciona dentro da função async

  console.log(" Começando em:\n2");
  await sleep(1000);

  console.log(" Começando em:\n1\n");
  await sleep(1000);

  console.log("A sorte está lançada!".green);
  await sleep(1000);
  console.log("\n\nJogo de Dados\n".red);
  await sleep(2000);

  var rodadas = prompt("Digite quantas rodadas iremos jogar: ".blue);
  var jogadores = prompt("Digite a quantidade de jogadores: ".blue);

  let lista = [];
  for (let i = 0; i < jogadores; i++) {
    let jogador = {
      nome: prompt("Digite o nome do jogador: ".blue).toUpperCase(),
      dado: 0,
      vitorias: 0,
    };
    lista.push(jogador);
  }

  for (let n = 0; n < rodadas; n++) {
    for (let pessoa of lista) {
      pessoa.dado = Math.floor(Math.random() * 6 + 1);
    }
    let jogadoresAgrupados = _.groupBy(lista, "dado");
    let dados = Object.keys(jogadoresAgrupados);
    let agrupamentoOrdenado = dados.sort(function (a, b) {
      return b - a;
    });

    console.log(`\nResultados da ${n + 1}ª rodada: \n`.magenta);
    await sleep(1000);
    for (let posicao in agrupamentoOrdenado) {
      let key = agrupamentoOrdenado[posicao];
      console.log(
        `Em ${parseInt(posicao) + 1}º lugar. Com o número ${key} no dado: `.blue
      );
      for (let jogador of jogadoresAgrupados[key]) {
        console.log(jogador.nome);
        if (posicao == 0) {
          jogador.vitorias += 1;
        }
      }
    }
    console.log();
  }

  let vitoriasAgrupadas = _.groupBy(lista, "vitorias");
  let vitorias = Object.keys(vitoriasAgrupadas);
  let agrupamentoOrdenado = vitorias.sort(function (a, b) {
    return b - a;
  });
  await sleep(2000);
  console.log(`Computando as vitórias... `.magenta);

  let key = agrupamentoOrdenado[0];
  if (vitoriasAgrupadas[key].length == 1) {
    await sleep(2000);
    console.log(`\nCom ${key} vitórias. O(a) grande vencedor(a) é:`.blue);
  } else {
    console.log(
      `\nHouve empate! Com ${key} vitórias os(a) grandes vencedores(a) são:`
        .blue
    );
  }
  for (let jogador of vitoriasAgrupadas[key]) {
    await sleep(3000);
    console.log(`${jogador.nome}`.green);
  }
};

jogoDados();
