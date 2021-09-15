const color = require("colors");
const prompt = require("./prompt.js");
const Helper = require("./helper.js");
const Fase = require("./fase.js"); // importando a classe mae

class Fase2 extends Fase {
  constructor(personagem, relogio) {
    super(personagem, relogio);
    this.helper = new Helper();
  }

  Jogar() {
    this.personagem.MostrarStatus();
    this.relogio.MostrarStatus();
    this.helper.Sleep(1000);
    console.log(
      `Hoje é dia de feira, pastel, caldo de cana. Mas, também tem pastel, no ifood. O que ${this.personagem.nome} vai fazer:\n`
        .blue);

    this.helper.Sleep(1000);
    const opcao1 = prompt(`

        [1] ir na feira 
        [2] comprar no app
        [3] desiste do pastel, preparar algo p comer em casa
-> `);

    if (opcao1 == 1) {
      this.helper.Sleep(1000);
      console.log(`${this.personagem.nome} reolve ir na feira, comer aquele pastel quentinho.
Apesar de parecer uma boa ideia, a feira tem um alto indice de contágio, além da aglomeração, muitos pessoas, inclusive os feirantes não usam a máscara, ou não usam de forma adequada, além da grande manipulação dos produtos. Mas como vc escolheu ir na feira, tome as medidas protetivas que ja deve estar cansada de ouvir: máscara, alcool gel, distanciamneto, e aproveite seu pastel\n`.blue);
      this.personagem.MudaFome(20);
      this.personagem.MudaSaude(-20);
    } else if (opcao1 == 2) {
      this.helper.Sleep(1000);
      console.log(
        "Apesar de não ser tão bom quanto comer um pastel fresquinho na barraca da feira, e também sabemos que pedir comida também pode ser perigoso, temos q fazer escolhas né! Então não esqueça de limpar a embalagem que receber e lavar as mãos em seguida\n".blue
      );
      this.personagem.MudaFome(15);
      this.personagem.MudaSaude(10);
    } else {
      this.helper.Sleep(1000);
      console.log(
        `Talvez seja melhor não se arriscar, e evitar ir em lugares com aglomeração como a a feira e até mesmo pedir a comida onde não se sabe como é a manipulação e o cuidado.Então ${this.personagem.nome} resolve fazer uma comida simples e comer em casa mesmo. Entretanto não fique bitolado(a), e se permita as vezes. De forma segura, podemos nos permitir e tentar viver da forma mais normal possível\n`.blue
      );
      this.personagem.MudaFome(20);
      this.personagem.MudaSaude(10);
    }
    this.relogio.AvancaTempo(600);

    this.helper.Sleep(1000);
    console.log(
      `Ja são 14 hs. O que ${this.personagem.nome} vai fazer:\n`.blue
    );
    this.helper.Sleep(1000);
    const opcao2 = prompt(`

        [1] ir ver sua mae, faz ja um tempo q vc não aparece
        [2] ir na igreja, no grupo de jovens
        [3] ficar em casa sozinha
        
        `);
    let saiuDomingo = false;
    if (opcao2 == 1) {
      this.helper.Sleep(1000);
      console.log(
        `Com a pandemia já faz alguns meses que não vejo minha mãe, pensa ${this.personagem.nome} e se arruma rapidamente e sai para encontrar a família. É muito importante que antes da visita seja para um parente ou outra pessoa você esteja tomando medidas preventivas, não somente no dia da visita, mas se possível duas semanas antes, evite o contato com outras pessoas, e em caso de qualquer sintoma faça o teste. Com certeza seus pais, avós e alguns amigos fazem parte do grupo de risco, então previna-se, pois todos podem ser contaminados.

            Obs: Grupo de risco: Pessoas com doenças crônicas, como diabetes e hipertensão, asma, doença pulmonar obstrutiva crônica, e indivíduos fumantes (que fazem uso de tabaco incluindo narguilé), acima de 60 anos, gestantes, puérperas  e crianças menores de 5 anos)\n`
          .blue
      );
      this.personagem.MudaSaude(-20);
      saiuDomingo = true;
    } else if (opcao2 == 2) {
      this.helper.Sleep(1000);
      console.log(
        `"Ir na igreja, orar, se apegar e ter uma esperança, é o melhor a se fazer", pensa ${this.personagem.nome}.
Antes de mais nada vamos deixar claro que não sou contra nenhuma religião. Entretanto, as igrejas tem altissímo índice de contagio por ser local fechado, pouco ventilado, as pessoas falam alto, cantam e oram em voz alta que aumenta a dipersão de aerossóis(gotículas de salida). Além disse as igrejas e/ou templos religiosos, não conseguem ter controle sobre abraços, apertos de mãos, e distanciamento, e também não conseguem fazer todos usarema a máscara e principalmente de forma correta. Não importa onde formos, sempre existe pessoas de grupo de risco, devemos nos proteger por nós e pelo os outros, para que assim o vírus seja controlado. O vírus também não escolhe, qualquer um pode ser vítima.

Obs: Grupo de risco: Pessoas com doenças crônicas, como diabetes e hipertensão, asma, doença pulmonar obstrutiva crônica, e indivíduos fumantes (que fazem uso de tabaco incluindo narguilé), acima de 60 anos, gestantes, puérperas  e crianças menores de 5 anos
`.yellow
      );
      this.personagem.MudaSaude(-30);
      saiuDomingo = true;
    } else if (opcao2 == 3) {
      this.helper.Sleep(1000);
      console.log(
        `"Melhor ficar quieta em casa mesmo", pensa ${this.personagem.nome}. Sair é importante, ver as pessoas, mas o mais importante é fazer isso na hora certa, tomando todas as medidas de prevencão. Não importa onde formos, sempre existe pessoas de grupo de risco, devemos nos proteger por nós e pelo os outros, para que assim o vírus seja controlado. O vírus também não escolhe, qualquer um pode ser vítima.

Obs: Grupo de risco: Pessoas com doenças crônicas, como diabetes e hipertensão, asma, doença pulmonar obstrutiva crônica, e indivíduos fumantes (que fazem uso de tabaco incluindo narguilé), acima de 60 anos, gestantes, puérperas  e crianças menores de 5 anos\n`
          .yellow
      );

      this.personagem.MudaSaude(20);
    }

    if (saiuDomingo) {
      this.helper.Sleep(1000);
      console.log(
        `Chegando no seu destino, qual as duas principais coisas que você precisa fazer?[Digite separando com virgula] \n`
          .blue
      );
      this.helper.Sleep(1000);
      const acoes = prompt(`

            [1]trocar de roupa
            [2]passar alcool gel
            [3]comprimentar com um "soquinho"
            [4]lavar as mãos
            [5]tirar a máscara 
            
-> `);
      const lista = this.helper.TransformaItemsEmLista(acoes);
      if (lista.length >= 2 && lista[0] == "2" && lista[1] == "4") {
        this.helper.Sleep(1000);
        console.log(
          `Você esta certo. A primeira coisa que se deve fazer quando chega a casa de alguém é passar alcool nas mãos, pois no seu caminho pode ter tocado em algum lugar contaminado. E assim que possível lavar as mãos com sabão. Seria sim importante trocar de roupa, mas nem sempre podemos fazer isso fora de casa. Então o alcool, e o sabão vão ser seus grandes aliados, além manter o distanciamento, e o uso da máscara sempre que possivel.\n`
            .green
        );
        this.personagem.MudaSaude(10);
      } else {
        console.log(
          `Infelizmente você não acertou a melhor ordem! A primeira coisa que se deve fazer quando chega a casa de alguém é passar alcool nas mãos, pois no seu caminho pode ter tocado em algum lugar contaminado. E assim que possível lavar as mãos com sabão. Seria sim importante trocar de roupa, mas nem sempre podemos fazer isso fora de casa. Então o alcool, e o sabão vão ser seus grandes aliados, além manter o distanciamento, e o uso da máscara sempre que possivel.\n`
            .yellow
        );

        this.personagem.MudaSaude(-10);
      }
    }

    console.log(`Vamos ver como você se saiu nesse fds:\n `.magenta);
    this.personagem.MostrarStatus();
    this.personagem.MostrarResultado();
  }
}

module.exports = Fase2;
