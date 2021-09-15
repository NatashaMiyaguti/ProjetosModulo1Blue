const color = require("colors"); //colocando cores nas strings
const prompt = require("prompt-sync")();
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //criando uma função sleep
const jogojokenpo = () => {
  //criando função assíncrona para usar a função sleep.

  while (true) {
    let cont_computador = (cont_jogagor = empate = 0); //variáveis criadas para fazer as contagens de vitórias/derrotas/empates

    let jogo = prompt("\nVamos jogar Jokenpo? [S/N]: ")
      .slice(0, 1)
      .toUpperCase();
    if (jogo == "N") {
      console.log("Até a próxima!".yellow);
      break;
    }
    if (jogo != "S" && jogo != "N") {
      console.log("Resposta inválida".yellow);
      break;
    }

    let rodadas = +prompt("\nDigite quantas rodadas iremos jogar: ");

    for (let n = 0; n < rodadas; n++) {
      await sleep(1000);
      console.log("\nVamos começar a rodada!".blue);
      let computador = Math.floor(Math.random() * 3 + 1);
      await sleep(1000);
      console.log("\n[1] Pedra".yellow);
      await sleep(1000);
      console.log("[2] Papel".yellow);
      await sleep(1000);
      console.log("[3] Tesoura".yellow);
      await sleep(1000);
      let escolha = +prompt("\nQual opção você escolhe(escolha o número): ");
      await sleep(1000);

      if (escolha == 1 && computador == 1) {
        empate += 1;
        console.log(
          `\nVocê escolheu [${escolha}] Pedra, e o computador escolheu [1] Pedra.`
        );
        await sleep(2000);
        console.log("Deu empate!!!".yellow);
      } else if (escolha == 1 && computador == 2) {
        cont_computador += 1;
        console.log(
          `Você escolheu [${escolha}] Pedra, e o computador escolheu [2] Papel.`
        );
        sleep(2000);
        console.log("Você perdeu!!!.".red);
      } else if (escolha == 1 && computador == 3) {
        cont_jogagor += 1;
        console.log(
          `Você escolheu [${escolha}] Pedra, e o computador escolheu [3] Tesoura.`
        );
        await sleep(2000);
        console.log("Você ganhou!!!".green);
      } else if (escolha == 2 && computador == 2) {
        empate += 1;
        console.log(
          `\nVocê escolheu [${escolha}] Papel, e o computador escolheu [2] Papel.`
        );
        await sleep(2000);
        console.log("Deu empate!!!".yellow);
      } else if (escolha == 2 && computador == 3) {
        cont_computador += 1;
        console.log(
          `Você escolheu [${escolha}] Papel, e o computador escolheu [3] Tesoura.`
        );
        await sleep(2000);
        console.log("Você perdeu!!!".red);
      } else if (escolha == 2 && computador == 1) {
        cont_jogagor += 1;
        console.log(
          `Você escolheu [${escolha}] Papel, e o computador escolheu [1] Pedra.`
        );
        await sleep(2000);
        console.log("Você ganhou!!!".green);
      } else if (escolha == 3 && computador == 1) {
        cont_computador += 1;
        console.log(
          `Você escolheu [${escolha}] Tesoura, e o computador escolheu [1] Pedra.`
        );
        await sleep(2000);
        console.log("Você perdeu!!!".red);
      } else if (escolha == 3 && computador == 2) {
        cont_jogagor += 1;
        console.log(
          `Você escolheu [${escolha}] Tesoura, e o computador escolheu [1] Papel.`
        );
        await sleep(2000);
        console.log("Você ganhou!!!".green);
      } else if (escolha == 3 && computador == 3) {
        empate += 1;
        console.log(
          `\nVocê escolheu [${escolha}] Tesoura, e o computador escolheu [3] Tesoura.`
        );
        await sleep(2000);
        console.log("Deu empate!!!".yellow);
      } else console.log(`Você digitou [${escolha}]. Opção inválida!`);
    }
    console.log("\n");

    console.log(`Em ${rodadas} rodada(s)...`.blue);
    await sleep(2000);
    console.log(
      `\n Você venceu ${cont_jogagor} rodada(s).\n
Você perdeu ${cont_computador} rodada(s).\n
Você empatou ${empate} rodada(s)`.blue
    );
    sleep(1000);
    if (cont_jogagor > cont_computador) {
      console.log(`Você Ganhou!!!`.green);
    } else if (cont_computador > cont_jogagor) {
      console.log("Você Perdeu!!!".red);
    } else console.log("Deu Empate!!!".yellow);
  }
};

jogojokenpo();
