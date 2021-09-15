const color = require("colors");
const Fase1 = require("./fase1.js");
const Fase2 = require("./fase2.js");
const Relogio = require("./relogio.js");
const Personagem = require("./personagem.js");
const prompt = require("./prompt.js");
const Helper = require("./helper.js");

const jogoInterativo = () => {
  const helper = new Helper();
  console.log("\nVIDA EM PANDEMIA\n".red);
  helper.Sleep(1000);
  console.log(`Seu objetivo nesse jogo é conseguir passar por um fim de semana sem ser contaminado pelo Coronavirus COVID-19. Conforme suas escolhas no jogo, será computado seu conhecimento sobre o vírus, formas de contágio e você vai aprender formas mais eficientes de prevenção. Com base nisso, os status de sáude e também de necessidades básicas são alterados(fique de olho para não zerar nenhum). De uma forma divertida conseguimos passar as melhores escolhas para que consiga ter uma 'vida normal', diante a pandemia, tomando as melhores decisões e protegendo você e aqueles que ama.\n
    `);
  helper.Sleep(2000);
  const relogio = new Relogio();
  // const nome = prompt("Digite o nome do seu personagem: ");
  const personagem = new Personagem("Natasha");
  const fase1 = new Fase1(personagem, relogio);
  fase1.Jogar();
};
jogoInterativo();
