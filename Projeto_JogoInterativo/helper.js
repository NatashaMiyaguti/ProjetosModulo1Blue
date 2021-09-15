const prompt = require("./prompt.js"); // função para poder usar o \n no prompt
const color = require("colors");

class Helper {
  TransformaItemsEmLista(items) {
    const lista = items.split(",").map((item) => {
      return item.trim();
    });
    return lista;
  }

  Sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  ValidaEntrada(texto, valoresValidos) {
    let opcao = +prompt(texto);
    while (!valoresValidos.includes(opcao)) {
      console.log("Opção inválida! Digite novamente -> \n".red);
      opcao = +prompt(texto);
    }
    return opcao;
  }
}

module.exports = Helper;
