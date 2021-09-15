const color = require("colors");
const Helper = require("./helper.js"); // classe que tem funções auxiliares para chamar em mais de um lugar
const prompt = require("./prompt.js"); // função para poder usar o \n no prompt
const Fase = require("./fase.js"); // importando a classe mae
const Fase2 = require("./fase2.js");

class Fase1 extends Fase {
  constructor(personagem, relogio) {
    super(personagem, relogio);
    this.helper = new Helper();
    this.fezCompras = false;
  }

  Jogar() {
    // metodo que roda o jogo
    this.personagem.MostrarStatus();
    this.relogio.MostrarStatus();

    console.log(
      `${this.personagem.nome} acabou de acordar em sua casa. Senta na beira da cama pensando o que fazer...`
        .blue
    );
    this.helper.Sleep(1000);
    console.log(`O que ${this.personagem.nome} decide fazer? `.blue);
    this.helper.Sleep(1000);
    const acao1 = +prompt(`

        [1] Procurar comida
        [2] Tomar um banho
        [3] Voltar a dormir

-> `);

    if (acao1 == 1) {
      this.ProcurarComida();
    } else if (acao1 == 2) {
      this.helper.Sleep(1000);
      console.log(
        `${this.personagem.nome} prefere lavantar e tomar um banho, para acordar e poder pensar melhor o que fazer. Assim entra num longo e gostoso banho.`
          .blue
      );
      this.relogio.AvancaTempo(180);
    } else {
      this.helper.Sleep(1000);
      console.log(
        `Ahh o dia está tão preguiçoso, melhor voltar pra cama, já que não posso ir em nenhum lugar com essa pandemia! pensa ${this.personagem.nome}.`
          .blue
      );
      this.relogio.AvancaTempo(180);
      this.Jogar();
    }

    this.personagem.MostrarStatus();
    this.relogio.MostrarStatus();
    this.helper.Sleep(1000);
    console.log(
      `${this.personagem.nome}, recebe uma msg no celular de Pedro, um amigo antigo,chamando-o (a) para ir no parque, insiste que ela vá dizendo que só vai mais 2 pessoas. Em seguida Ana, uma outra amiga, manda mensagem chamando ${this.personagem.nome} para ir no shopping ajudar ela a escolher uma roupa para dar de presente para sua mãe que irá fazer aniversário, em seguida a convida para a festa.\n`
        .blue
    );
    let saiuDeCasa = false;
    this.helper.Sleep(1000);
    console.log(`O que ${this.personagem.nome} vai fazer? \n`.blue);
    const acao2 = +prompt(`

        [1] ${this.personagem.nome} acha que é melhor ficar em casa, o contato com outras pessoas pode ser perigoso. "Mesmo com os casos diminuindo acho melhor não sair de casa", pensa.
        [2] ${this.personagem.nome} se ve tentando(a) a ir no parque, faz tanto tempo que não saí, que não toma um ar. E com esse pensamento acaba aceitando o convite.
        [3] "Ahh a quanto tempo não vou ao shopping, talvez um ano", pensa ${this.personagem.nome}. Acho que não não tem problema ir e bater uma perna, e ainda poder comer um bolo ver a mãe da Ana uma senhora tão querida. Com certeza vou aceitar
-> \n`);
    if (acao2 == 1) {
      this.helper.Sleep(1000);
      console.log(
        `Com certeza é uma boa opção ficar em casa, entretanto ficar somente em casa pode não ser uma boa idéia. Uma recente pesquisa aponta um aumento de 90% os casos de depressão. E praticamente dobrou o numero de casos em relação ao mesmo periodo do ano passado.\n`
          .blue
      );
      this.personagem.MudaFome(-20);
      this.personagem.MudaSaude(20);
    } else if (acao2 == 2) {
      this.helper.Sleep(1000);
      console.log(
        `Essa ida no parque pode não parecer uma boa ideia. Mas faça esse tipo de passeio em grupos pequenos, e com pessoas que estão se protegendo de forma adequada. Mantendo um certo distanciamento, ainda mais em um lugar aberto como um parque pode ser uma atividade viável. Temos que nos proteger, e infelizmente a melhor forma é o isolamente, evitar sair, mas com a pandemia o índice de depressão estão mais que dobrando em relçaõ ao mesmo período do ano passado. Então proteja do vírus, mas pense também na sua saúde emocionales.\n`
          .blue
      );
      saiuDeCasa = true;
      this.personagem.MudaFome(-20);
      this.personagem.MudaSaude(-10);
    } else {
      this.helper.Sleep(1000);
      console.log(
        `Essa ida no shopping pode calhar, mas é realmente necessária? E ainda seguir para uma festa, num lugar fechado, com outras pessoas e algumas mai2,6s idosas. Estudos mostram que as gotículas geradas por fala, espirro ou tosse pode permanecer suspensas no ar em lugares fechados, durante longos períodos, isso explica o porque o contágio do COVID-19 é tão rápido. Entretanto se optar por sair, não esqueça o uso da máscara, alcool em gel e o distanciamento de pelo menos 1.5m.\n`
          .blue
      );
      saiuDeCasa = true;
      this.personagem.MudaFome(-20);
      this.personagem.MudaSaude(-40);
    }
    this.relogio.DefineHora(19, 0);

    if (saiuDeCasa) {
      this.helper.Sleep(1000);
      console.log(`São ${this.relogio.MostrarHora()}`);
      console.log(
        `${this.personagem.nome} chega em casa. Digite em ordem, as 4 principais ações para manter para fora de casa o vírus: [Digite as opções separadas por vírgula]`
          .blue
      );
      this.helper.Sleep(1000);
      const acao3 = prompt(`

        [1] Ir direto tomar banho
        [2] Passar spray de alcool na roupa
        [3] Passar alcool
        [4] Lavar as roupas que usou enquanto estava fora
        [5] Lavar as mãos
        [6] Tirar os sapatos na porta
        [7] Separar as roupas que usou enquanto estava fora das demais roupas
        [8] Tomar banho
        
-> `);
      const lista = this.helper.TransformaItemsEmLista(acao3);
      if (
        lista.length == 4 &&
        lista[0] == "6" &&
        lista[1] == "3" &&
        lista[2] == "7" &&
        lista[3] == "8"
      ) {
        this.helper.Sleep(1000);
        console.log(
          "Parabéns!!! Você fez tudo na melhor ordem! Seguir essa ordem pode deixar o vírus bem longe"
            .green
        );
        this.personagem.MudaSaude(15);
      } else {
        this.helper.Sleep(1000);
        console.log(
          `Infelizmente você não acertou a melhor ordem! Existe várias formas de previnir que o vírus não entre na sua casa, mas se você teve que sair, seguindo alguns passos você pode manter sua casa mais segura.

        Em 1° lugar é muito importante deixar seu calçado do lado de fora, isso ja é comum em muitos países, até mesmo por higiêne,  não sabemos exatamente no que pisamos na rua, você pode levar para dentro da sua casa o vírus, mas também baxtérias, e vermes que podem ser prejudicial a sua família a até mesmo aos pets(caso tenha)
        Em 2° lugar, é importante passar o alcool gel pois você provávelmente precisará abrir alguma, porta, ou pegar em alguma coisa. O ideal seria não encostar nada, mas temos que ser realistas e sabemos que não.
        Em 3° lugar, separar as roupas das demais, é importante não deixar ela jogada ou em contato com outras coisas. Baseado em pesquisas patógenos, acreditam que o COVID-19 de maneira geral pode sobreviver em tecidos de 72 96 horas.
        Em 4° lugar, tome um banho. Mande para o ralo qualquer vestígio do vírus, e tome um belo de um banho.
        `.yellow
        );
        this.personagem.MudaSaude(-5);
      }
      this.relogio.AvancaTempo(210);
    }

    this.helper.Sleep(1000);
    console.log(`São ${this.relogio.MostrarHora()}`);
    console.log(
      `${this.personagem.nome} se sente candado(a), e pensa "Melhor procurar alguma coisa para comer e descansar...`
        .blue
    );
    this.helper.Sleep(1000);
    console.log("Qual a sua escolha? ".blue);
    this.helper.Sleep(1000);
    const acao4 = +prompt(` 
    
[1] Procurar na geladeira
[2] Pedir comida
[3] Fazer comida

-> `);
    if (acao4 == 1) {
      if (this.fezCompras) {
        this.helper.Sleep(1000);
        console.log(
          `Revirando as compras feitas mais cedo, ${this.personagem.nome} encontra na geladeira uma pizza congelada. Esta salva essa noite! dia de pizza\n`
            .blue
        );
        this.personagem.MudaFome(20);
      } else {
        this.helper.Sleep(1000);
        console.log(
          `Infelizmente o jeito é comer o pão velho de novo, pensa ${this.personagem.nome} e come sem vontade aquele pão`
            .blue
        );
        this.personagem.MudaFome(10);
      }
    } else if (acao4 == 2) {
      if (this.fezCompras) {
        this.helper.Sleep(1000);
        console.log(
          `"Realmente tenho que parar de pedir comida mesmo tendo coisas em casa, assim eu vou falir!', pesna ${this.personagem.nome}. E mais uma vez pede uma comida mexicana no app\n`
            .blue
        );
        this.personagem.MudaFome(15);
      } else {
        this.helper.Sleep(1000);
        console.log(
          `${this.personagem.nome} resolve dar uma olhada nos armários, olha as prateleiras vazias e pensa: "Realmente tenho que fazer umas compras, essa vida de ficar só pedindo comida não ta dando, sem contar que vou falir!'. E mais uma vez pede uma comida japonesa no app.\n`
            .blue
        );
        this.personagem.MudaFome(10);
      }
    } else {
      this.helper.Sleep(1000);
      if (this.fezCompras) {
        console.log(
          `${this.personagem.nome} resolve fazer uma comida fresca, "Foi muita sorte hj ter feito compras.", pensa. E assim rapidamente prepara um macarrão com molho e muitoo queijo, e se delicia assistindo um filme.`
            .blue
        );
        this.personagem.MudaFome(20);
      } else {
        this.helper.Sleep(1000);
        console.log(
          `Infelizmente o jeito é comer o pão velho de novo, pensa ${this.personagem.nome} tristemente. Pois apesar de ter olhado os armarios não tem nada pra fazer para comer.`
            .blue
        );
        this.personagem.MudaFome(10);
      }
    }
    this.helper.Sleep(1000);
    console.log(
      `Não conseguimdo mais brigar com o sono ${this.personagem.nome} resolve dormir.`
        .blue
    );
    this.relogio.AvancaDia();

    const fase2 = new Fase2(this.personagem, this.relogio);
    fase2.Jogar();
  }

  ProcurarComida() {
    this.helper.Sleep(1000);
    console.log(
      `

${this.personagem.nome} vai até a cozinha ver se tem alguma coisa para comer, olha geladeira que esta praticamente vazia. No fundo da geladeira encontra um pão de forma velho. O que você faz:`
        .blue
    );

    console.log(`
        
            [1] Esquenta o pão velho na frigideira e come, afinal é melhor não sair, os mercados são muito cheios
            [2] Resolve ir no mercado, afinal, precisa escolher os produtos e não aguenta mais ficar em casa. 
            [3] Pede comida no Ifood, ${this.personagem.nome} está com muita fome, não quer comer aquele pão velho, e é mais rapido e seguro do quer até o mercado. 
            [4] Faz uma compra online de mercado, como são muitos itens, seria uma saída demorada ir comprar.
            `);

    const acao = +prompt(`
-> `);

    this.helper.Sleep(1000);
    if (acao == 1) {
      console.log(
        `Realmente talvez não tenha sido uma boa ideia comer aquele pão, pensa ${this.personagem.nome}, mas pelo menos deu para disfarçar o estômago.`
          .blue
      );
      this.relogio.AvancaTempo(180);
      this.personagem.MudaFome(10);
    } else if (acao == 2) {
      console.log(
        `${this.personagem.nome} pensa, 'Antes de ir para o mercado é necessario pegar itens importantes.`
          .blue
      );
      this.fezCompras = true;
      let itens = "";
      while (itens.trim().length == 0) {
        this.helper.Sleep(1000);
        itens = prompt(
          `Digite quais objetos ${this.personagem.nome} pega para ir no mercado: [Digite separando com virgula]
-> `.blue
        );
      }
      this.VerificaObjetosEssenciais(itens);
      this.relogio.AvancaTempo(240);
    } else if (acao == 3) {
      console.log(
        `Olhando as opções ${this.personagem.nome} escolhe pegar um misto quente com suco, 'Com a barriga cheia pode pensar melhor o que fazer no dia', pensa ${this.personagem.nome}. O lanche demora um pouco mais a chegar,e assim que chega ele(a) devora rapidamente. `
          .blue
      );
      this.relogio.AvancaTempo(210);
      this.personagem.MudaFome(20);
    } else {
      this.fezCompras = true;
      console.log(
        `Melhor fazer uma listinha para passar alguns dias, pensa ${this.personagem.nome}. Assim que o entregador aparece ${this.personagem.nome} pega um pano e o alcool em gel e passa nas embalagens antes de coloca-las para dentro.Em seguida faz um lanche caprichado e come rapidamente. A limpeza das embalagens é muito importante pois outras pessoas tiveram contato. Com essa ação o nível de possível contagio é mínimo.`
          .blue
      );
      this.relogio.AvancaTempo(240);
      this.personagem.MudaFome(30);
    }
  }

  VerificaObjetosEssenciais(objetos) {
    const lista = this.helper.TransformaItemsEmLista(objetos);
    const filtraMascara = lista.filter((item) => {
      return item.toLowerCase() == "máscara" || item.toLowerCase() == "mascara";
    });
    const filtraAlcool = lista.filter((item) => {
      return (
        item.toLowerCase() == "álcool" ||
        item.toLowerCase() == "alcool" ||
        item.toLowerCase() == "alcool em gel" ||
        item.toLowerCase() == "álcool em gel"
      );
    });
    if (filtraMascara.length > 0 || filtraAlcool.length > 0) {
      this.helper.Sleep(1000);
      console.log(`Parabéns, ${this.personagem.nome}! `);
      if (filtraMascara.length > 0) {
        console.log(
          `A máscara é muito importante para prevenção do COVID-19, pois funciona como uma barreira física contra o vírus!\n`
            .blue
        );
        this.personagem.MudaSaude(5);
      }
      if (filtraAlcool.length > 0) {
        this.helper.Sleep(1000);
        console.log(
          `O alcool gel 70% é considerado antisséptico, então é muito importante para higienizar as mãos e objetos que tiver contato!\n`
            .blue
        );
        this.personagem.MudaSaude(5);
      }
      if (filtraAlcool.length > 0 && filtraMascara.length > 0) {
        console.log(
          `Com essa duas proteções reduz a chances de contágio em cerca de 87%. Não se esqueça de também levar as mãos ao rosto, simples atitudes podem ajudar a manter o vírus afastado.\n`
            .blue
        );
      }
    } else {
      this.helper.Sleep(1000);
      console.log(
        `Infelizmente você esqueceu que os dois itens principais de proteção é o uso da máscara, e alcool em gel. O alcool gel 70% é considerado antisséptico, então é muito importante para higienizar as mãos e objetos que tiver contato e evite levar as mãos ao rosto.Com essa duas proteções reduz a chances de contágio em cerca de 87%.`
          .yellow
      );
      this.personagem.MudaSaude(-10);
    }
    this.relogio.AvancaTempo(240);
  }
}

module.exports = Fase1;
