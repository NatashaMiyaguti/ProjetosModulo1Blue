const prompt = require("prompt-sync")();

console.log("\nMinha Vida em Pandemia\n");

console.log(
  "Seu objetivo nesse jogo é conseguir passar por um fim de semana sem ser contaminado pelo vírus covid 19. Conforme suas escolhas no jogo, será computado seu conhecimento sobre o vírus, formas de contágio e ensinar formas mais eficientes de prevenção. Com base nisso, os status de sáude e também de necessidades básicas são alterados(fique de olho para não zerar nenhum). De uma forma divertida conseguimos passar as melhores escolhas para que consiga ter uma 'vida normal', diante a pandemia, tomando as melhores decisões e protegendo você e aqueles que ama\n\n"
);

let nome = prompt("digite o nome do seu personagem: ");

console.log(`São 10hs da manha de sábado. ${nome} acabou de acordar.\n 
STATUS:

Fome: 20
Higiene: 50
Saúde: 50
`);

let acao1 = prompt("Qual sua primeira ação? ");

console.log(`

[1] Procurar comida
[2] Tomar um banho
[3] Voltar a dormir

`);

if (acao1 == 1) {
  console.log(`${nome} vai até a cozinha se tem alguma coisa para comer, olha geladeira que esta praticamente vazia. No fundo da geladeira encontra um pão de forma velho. O que você faz:

    [1] Esquenta o pão velho na frigideira e come, afinal é melhor não sair, os mercados são muito cheios
    [2] Resolve ir no mercado, afinal, precisa escolher os produtos e não aguenta mais ficar em casa.
    [3] Pede comida no Ifood, ${nome} está com muita fome, não quer comer aquele pão velho, e é mais seguro pedir do que ir no mercado.
    [4] Faz uma compra online de mercado, como são muitos itens, seria uma saída demorada ir comprar.`);
} else if (acao1 == 2) {
  console.log(
    `${nome} prefere lavantar e tomar um banho, para acordar e poder pensar melhor o que fazer. Assim entra num longo e gostoso banho`
  );
} else {
  console.log(
    `Ahh o dia está tão preguiçoso, melhor voltar pra cama, já que não posso ir em nenhum lugar com essa pandemia! pensa${nome}.`
  );
}
// se escolheu 1 na resposta anterior para
console.log(
  `Realmente talvez não tenha sido uma boa ideia comer aquele pão, pensa ${nome} ,mas pelo menos deu para disfarçar o estômago.`
);
// são 12hs. O que vamos fazer

// se escolher 2
console.log(
  `${nome} pensa, 'Antes de ir para o mercado é necessario pegar itens importantes.'`
);

let itens = prompt("Digite quais objetos ${nome} pega para ir no mercado: ");
// se a pessoa digitou alcool, mascara

console.log(
  "Parabéns, ${nome}! Não a máscara é o alcool em gel são muito importantes para você se manter seguro, com essa proteção reduz a chances de contágio em cerca de 87%. Evite também levar as mãos ao rosto."
);

console.log(
  `Infelizmente você esqueceu que os dois itens principais de proteção é o uso da máscara, e alcool em gel. Manter as mãos limpas, quando estiver fora de casa é muito importante, leve sempre um alcool em gel 70% e passe sempre que tiver contato com superfícies, e evite levar as mãos ao rosto.`
);
// ainda assim vc saí e faz suas compras, ja são 13hs, e volta para casa

// se escolher 3
console.log(
  `Olhando as opções ${nome} escolhe pegar um misto quente com suco, 'Com a barriga cheia pode pensar melhor o que fazer no dia', pensa ${nome}. O lanche demora um pouco mais a chegar,e assim que chega ele(a) devora rapidamente `
);
// são 12:30 o que vai fazer

// se esolher 4

console.log(
  `Melhor fazer uma listinha para passar alguns dias, pensa ${nome}. Assim que o entregador aparece ${nome} pega um pano e o alcool em gel e passa nas embalagens antes de coloca-las para dentro.Em seguida faz um lanche caprichado e come rapidamente. A limpeza das embalagens émuito importante pois outras pessoas tiveram contato. Com essa ação o nível de possível contagio é mínimo.`
);
// são 13 hs

console.log(`$nome, recebe uma msg no celular de Pedro,um amigo antigo,chamando-o (a) para ir no parque, insiste que ela vá dizendo que só vai mais 2 pessoas. Em seguida Ana, uma outra amiga, manda mensagem chamando ${nome} para ir no shopping ajudar ela a escolher uma roupa para dar de presente para sua mãe que irá fazer aniversário, em seguida a convida para a festa.
O que ${nome} vai fazer? `);

console.log(`
[1]${nome} acha que é melhor ficar em casa, o contato com outras pessoas pode ser perigoso. "Mesmo com os casos diminuindo acho melhor não sair de casa", pensa.
[2]${nome} se ve tentando(a) a ir no parque, faz tanto tempo que não saí, que não toma um ar. E com esse pensamento acaba aceitando o convite.
[3]"Ahh a quanto tempo não vou ao shopping, talvez um ano", pensa ${nome}. Acho que não não tem problema ir e bater uma perna, e ainda poder comer um bolo ver a mãe da Ana uma senhora tão querida. Com certeza vou aceitar
`);

//1 Com certeza é uma boa opção ficar em casa, entretanto ficar somente em casa pode não ser uma boa idéia. Uma recente pesquisa aponta um aumento de 90% os casos de depressão. E praticamente dobrou o numero de casos em relação ao mesmo periodo do ano passado

//2 Essa ida no parque pode não parecer uma boa ideia. Mas faça esse tipo de passeio em grupos pequenos, e com pessoas que estão se protegendo de forma adequada. Mantendo um certo distanciamento, ainda mais em um lugar aberto como um parque pode ser uma atividade viável. Temos que nos proteger, e infelizmente a melhor forma é o isolamente, evitar sair, mas com a pandemia o índice de depressão estão mais que dobrando em relçaõ ao mesmo período do ano passado. Então proteja do vírus, mas pense também na sua saúde emocionales

//3 Essa ido no shopping pode calhar, mas é realmente necessária? E ainda seguir para uma festa, num lugar fechado, com outras pessoas e algumas mas idosas. Estudos mostram que as gotículas geradas por fala, espirro ou tosse pode permanecer suspensas no ar em lugares fechados, durante longos períodos, isso explica o porque o contágio do covid 19 é tão rápido. Entretanto se for realmente ir para esses locais, não esqueça o uso da máscara, alcool em gel e o distanciamento de pelo menos 1.5m

// ja são  19hs. ${nome} chega em casa. Digite em ordem, as 4 principais ações para manter para fora de casa o vírus:
console.log(`

[1] Ir direto tomar banho
[7] Passar spray de alcool na roupa
[2] Passar alcool
[3] Lavar as roupas que usou enquanto estava fora
[4] Lavar as mãos
[5] Tirar os sapatos na porta
[6] Separar as roupas que usou enquanto estava fora das demais roupas
[8] Tomar banho

`);

// se a pessoa acertou toda a ordem

console.log(`Infelizmente você não acertou a melhor ordem! Existe várias formas de previnir que o vírus não entre na sua casa, mas se você teve que sair, seguindo alguns passos você pode manter sua casa mais segura.

Em 1° lugar é muito importante deixar seu calçado do lado de fora, isso ja é comum em muitos países, até mesmo por higiêne,  não sabemos exatamente no que pisamos na rua, você pode levar para dentro da sua casa o vírus, mas também baxtérias, e vermes que podem ser prejudicial a sua família a até mesmo aos pets(caso tenha)
Em 2° lugar, é importante passar o alcool gel pois você provávelmente precisará abrir alguma, porta, ou pegar em alguma coisa. O ideal seria não encostar nada, mas temos que ser realistas e sabemos que não.
Em 3° lugar, separar as roupas das demais, é importante não deixar ela jogada ou em contato com outras coisas. Baseado em pesquisas patógenos, acreditam que o covid 19 de maneira geral pode sobreviver em tecidos de 72 96 horas.
Em 4° lugar, tome um banho. Mande para o ralo qualquer vestígio do vírus, e tome um belo de um banho.
`);

//caso a pessoa tenha errado a ordem
console.log(
  "Parabéns!!! Você fez tudo na melhor ordem! Seguir essa ordem pode deixar o vírus bem longe"
);

//ordem certa (5,2,6,8)
console.log(`

[1] Procurar na geladeira
[2]pedir comida
[3]fazer comida

`);

//se escolher 1( caso a pessoa tenha feito compras,ou compras online)
console.log(
  "Revirando as compras feitas mais cedo, ${nome} encontra na geladeira uma pizza congelada. Esta salva essa noite! dia de pizza"
);
// se naõ fez compras
console.log(
  "Infelizmente o jeito é comer o pão velho de novo, pensa ${nome} tristemente"
);

// se escolher 2. caso não tenha feiro compras
console.log(
  `$nome} Resolve dar uma olhada nos armários, olha as prateleiras vazias e pensa: "Realmente tenho que fazer umas compras, essa vida de ficar só pedindo comida não ta dando, sem contar que vou falir!'.E mais uma vez pede uma comida japonesa no app`
);
// caso tenha feito comprad

console.log(
  ` "Realmente tenho que parar de pedir comida mesmo tendo coisas em casa, assim eu vou falir!', pesna ${nome}E mais uma vez pede uma comida mexicana no app`
);

//pessoa escolheu 3 , fez compras
console.log(
  `${nome} resolve fazer uma comida fresca, "Foi muita sorte hj ter feito compras.", pensa. E assim rapidamente prepara um macarrão com molho e muitoo queijo, e se delicia assistindo um filme.`
);

//se não fez compras
console.log(
  "Infelizmente o jeito é comer o pão velho de novo, pensa ${nome} tristemente. Pois apesar de ter olhado os armarios não tem nada pra fazer para comer"
);

//Ja é 21:30 hs e ${nome} já esta cansado(a) e resolve dormir. Vai p dia 2

console.log(`São 10hs de domingo.
Hoje é dia de feira, pastel, caldo de cana. Mas, também tem pastel, no ifood. O que ${nome} vai fazer:

[1] ir na feira 
[2] comprar no app
[3] desiste do pastel, preparar algo p comer em casa

`);

//se escolher 1
console.log(`${nome} reolve ir na feira, comer aquele pastel quentinho.
Apesar de parecer uma boa ideia, a feira tem um alto indice de contágio, além da aglomeração, muitos pessoas, inclusive os feirantes não usam a máscara, ou não usam de forma adequada, além da grande manipulação dos produtos.
Mas como vc escolheu ir na feira, tome as medidas protetivas que ja deve estar cansada de ouvir: máscara, alcool gel, distanciamneto, e aproveite seu pastel`);

//se escolher 2
console.log(
  "Apesar de não ser tão bom quanto comer um pastel fresquinho na barraca da feira, e também sabemos que pedir comida também pode ser perigoso, temos q fazer escolhas né! Então não esqueça de limpar a embalagem que receber e lavar as mãos em seguida"
);

//se escolher 30
console.log(
  `Talvez seja melhor não se arriscar, e evitar ir em lugares com aglomeração como a a feira e até mesmo pedir a comida onde não se sabe como é a manipulação e o cuidado.Então ${nome} resolve fazer uma comida simples e comer em casa mesmo. Entretanto não fique bitolado(a), e se permita as vezes. De forma segura, podemos nos permitir e tentar viver da forma mais normal possível`
);

console.log(`Ja são 14 hs. O que ${nome} vai fazer:

[1] ir ver sua mae, faz ja um tempo q vc não aparece
[1] ir na igreja, no grupo de jovens
[3] procurar uns amigo para fazer alguma coisa
[4] ficar em casa sozinha

`);
