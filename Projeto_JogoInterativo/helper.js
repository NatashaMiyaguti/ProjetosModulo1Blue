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
}

module.exports = Helper;
