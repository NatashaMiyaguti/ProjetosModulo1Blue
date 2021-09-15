class Relogio {
  constructor() {
    this.horas = 10;
    this.minutos = 0;
    this.dia = 7;
  }

  Dia() {
    let diaSemana = "";
    if (this.dia == 1) {
      diaSemana = "Domingo";
    } else if (this.dia == 2) {
      diaSemana = "Segunda";
    } else if (this.dia == 3) {
      diaSemana = "Segunda-feira";
    } else if (this.dia == 4) {
      diaSemana = "Quarta-feira";
    } else if (this.dia == 5) {
      diaSemana = "Quinta-feira";
    } else if (this.dia == 6) {
      diaSemana = "Sexta-feita";
    } else if (this.dia == 7) {
      diaSemana = "Sábado";
    }
    return diaSemana;
  }

  AvancaTempo(minutos) {
    this.minutos += minutos;
    while (this.minutos >= 60) {
      this.horas += 1;
      this.minutos -= 60;
    }
    while (this.horas >= 24) {
      this.horas -= 24;
      this.dia += 1;
      if (this.dia > 7) {
        this.dia = 1;
      }
    }
  }

  DefineHora(horas, minutos) {
    this.horas = horas;
    this.minutos = minutos;
  }

  AvancaDia() {
    this.dia += 1;
    if (this.dia > 7) {
      this.dia = 1;
    }
    this.horas = 9;
    this.minutos = 0;
  }

  MostrarHora() {
    return `${this.horas.toLocaleString("pt-BR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${this.minutos.toLocaleString("pt-BR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  }

  MostrarStatus() {
    console.log(`${this.Dia()}, ${this.MostrarHora()}`);
  }
}

module.exports = Relogio;
