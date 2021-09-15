const color = require("colors");
const Helper = require("./helper.js");

class Personagem {
  constructor(nome) {
    this.nome = nome;
    this.saude = 50;
    this.fome = 20;
    this.helper = new Helper();
  }

  MostrarStatus() {
    console.log(
      `
---- STATUS ----
Saúde: ${this.saude}
Fome: ${this.fome}
        `.green
    );
  }

  MudaFome(novaFome) {
    this.fome += novaFome;
  }

  MudaSaude(novaSaude) {
    this.saude += novaSaude;
  }

  MostrarResultado() {
    this.helper.Sleep(1000);
    if (this.saude < 0) {
      console.log(
        `Talvez você tenha sido um pouco displicente em relação a sua saúde e daqueles que ama. Provavelmente agora você estaria contaminado e tenha contaminado outras pessoas. Que tal aprender a se proteger melhor? Segue informações importantes sobre o covid19, e formas de prevenção que vão alem do isolamento, para aprender a conviver com  essa nova doença que até hoje afetou milhoes de pessoas no mundo\n`
          .red
      );
    } else if (this.saude < 25) {
      this.helper.Sleep(1000);
      console.log(
        " Você tem grandes chances de estar contaminado ou de ter contaminado outras pessoas. Seria interessante pensar a respeito das suas escolhas e se proteger melhor.  Segue informações importantes sobre o covid19, e formas de prevenção, que vão além do isolamento, para aprender a conviver com  essa nova doença que até hoje afetou milhoes de pessoas no mundo.\n"
          .yellow
      );
    } else if (this.saude < 65) {
      this.helper.Sleep(1000);
      console.log(
        "Você se protegeu e  provávelmente não tenha pego o vírus, entretanto apesar dos cuidados isso não é certeza que nunca pegará. Continue se protegendo, e protegendo a todos a seu redor com os cuidados de prevenção. É importante continuar a vida, agora mais do que nunca com segurança. Segue imformações que são importantes para aprender a conviver com  essa nova doença que até hoje afetou milhoes de pessoas no mundo.\n"
          .green
      );
    } else {
      this.helper.Sleep(1000);
      console.log(
        " Provavelmente você não esteja contaminado. Evitou ao máximo se expor, entretanto tome cuidado com o excesso de cuidados contra o vírus e acabar se esquecendo da sua saúde emocional. É importante ainda ter contato com as pessoas e com o mundo, sendo de forma segura pode te fazer muito bem também. Talvez conhecendo mais sobre esse vírus se sinta um pouco mais confiante, Segue informações importantes sobre o covid19, e formas de prevenção, que vão além do isolamento, para aprender a conviver com  essa nova doença que até hoje afetou milhoes de pessoas no mundo.\n\n"
          .yellow
      );
    }

    console.clear();
    this.helper.Sleep(2000);
    console.log("\nFIQUE POR DENTRO.\n".red);
    this.helper.Sleep(2000);
    console.log(
      `\nO que sabemos sobre COVID-19?

    Segundo a Organização Mundial da Saúde (OMS) oque se sabemos sobre o novo coronavírus – COVID-19, é uma grande família de vírus que é conhecida desde os anos 60. È um vírus que provoca infecções respiratórias que podem ser leves ou até mais graves como uma Síndrome Respiratória.

O novo coronavírus causa uma doença chamada COVID-19 (coronavirus disease 2019) que foi descoberta em Dezembro de 2019 após alguns casos registrados na China.\n`
    );
    this.helper.Sleep(2000);
    console.log(`Forma de Transmissão.

A transmissão do novo coronavírus é dada pelo contato com o vírus, que é transportado por gotículas de saliva que são expelidos pela boca ou narina quando uma pessoa infectada espirra ou tosse, essas gotículas podem estar no ar e também sobre superfícies contaminadas.

O COVID-19 tem um período de incubação de 7 a 14 dias este é o tempo entre ser infectado e  o inicio dos sintomas do vírus, algumas pessoas não apresentam sintomas durante a incubação do vírus.\n`);
    this.helper.Sleep(2000);
    console.log(`Principais formas de prevenção. 

Lavar as mãos com frequência com bastante água e sabonete;
Utilizar álcool em gel para limpeza das mãos;
Manter distanciamento de 1.5 mt;
Usar máscara;
Evitar contato próximo com pessoas com sintomas de alguma síndrome respiratória;
Evitar tocar na boca, olhos e nariz com as mãos sujas;
Manter o ambiente sempre bem ventilado;
Quando pedir comida, ou compras higenise cada item com alcool 70%;
Ficar em casa quando estiver com algum dos sintomas;
Não compartilhar objetos de uso pessoal;
Sempre que espirrar ou tossir, cobrir a boca e nariz com o braço;
Tomar bastante água e se manter sempre hidratado.\n`);

    this.helper.Sleep(2000);
    console.log(
      `Não é qualquer máscara, não é de qualquer jeito!

 Existem diversos tipos de máscaras, vamos listar as mais populares e eficez:

 Máscara de tecido: A recomendação da Organização Mundial da Saúde é que as máscaras de pano tenham três camadas de tecido, ou seja, a camada exterior com material resistente à água (polipropileno e/ou poliéster); a do meio de material sintético ou algodão para atuar como filtro, e a interior de material que absorva a água como o algodão. 

 Máscara cirurgica:são descartáveis, portanto não são tão econômicas, mas são muito eficientes e conseguem filtrar partículas menores do que outros tecidos, aumentando a proteção

 Máscara N95: Apesar de ser um pouco mais cara, é um dos modelos mais seguros para usar segundo a OMS. É utilizada por profissionais da saúde e oferece cinco camadas de proteção que se encaixam no rosto vedando todas as extremidades do nariz, bochecha e queixo.

 Máscara com Válvula: Esse modelo vem com uma válvula que facilita a saída de ar. Porém, essa marca não é indicada e inclusive está proibida em voos, pois se uma pessoa está contaminada ela pode expelir partículas virais e ser um risco para as outras pessoas. 

 Máscara Vinil ou M85: A máscara de vinil, ou M85, ficou conhecida por ser um dos poucos modelos transparentes, mas além de não ter uma boa adesão, o material não é capaz de filtrar o ar tanto inspirado quanto expirado. Ou seja, não é uma boa opção. 

 Depois de escolher o seu modelo de máscara,é importante é se certificar que ela cubra completamente a boca e o nariz. É essencial que nenhuma fresta entre o material e a bochecha fique aberta, por menor que seja, pois o vírus poderá entrar por ali e chegar até as narinas. 
 Porém, lembre-se que apenas usar máscara não é o suficiente para se proteger do coronavírus. A máscara deve ser utilizada em conjunto com outras práticas de proteção como uso de álcool em gel nas mãos e distanciamento social.\n`
    );

    this.helper.Sleep(2000);
    console.log(`Ansiedade e Depressão
      
      De acordo com a Organização Mundial de Saúde (OMS), mais de 264 milhões de pessoas sofrem de depressão no planeta, e um a cada 13 indivíduos possuem sintomas de ansiedade. Com isso, a pandemia da covid-19 agravou o problema. Ao mesmo tempo, de 2020 até agora, 93% de 130 países apresentaram interrupção ou fechamento dos serviços de atendimento a esses pacientes.
      Além desse fato, muitas pacientes começaram a apresentar sintomas de ansiedade ou depressão por conta do distanciamento e excluso de vida social, um aumento de mais de 200% em relação à média de 2019.

      `);
  }
}
module.exports = Personagem;
