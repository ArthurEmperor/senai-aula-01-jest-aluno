class ControladorLinha {
  constructor() {
    this.estado = "parada";
    this.pecasProduzidas = 0;
    this.emergenciaAtiva = false;
  }

  iniciarCiclo() {
    if (this.emergenciaAtiva) {
      throw new Error("Linha em emergência — não pode iniciar");
    }
    this.estado = "produzindo";
  }

  pausarEmergencia() {
    this.emergenciaAtiva = true;
    this.estado = "parada";
  }

  liberarEmergencia() {
    this.emergenciaAtiva = false;
  }

  contarPeca() {
    if (this.estado === "produzindo") {
      this.pecasProduzidas += 1;
    }
  }

  // ===== logica de manutencao — PROPOSITALMENTE NAO TESTADA =====
  // serve para demonstrar o relatorio de cobertura no Bloco 06.

  agendarManutencao(intervaloHoras) {
    if (intervaloHoras < 1) {
      throw new Error("Intervalo de manutencao precisa ser >= 1 hora");
    }
    this.proximaManutencao = Date.now() + intervaloHoras * 3600 * 1000;
    this.estado = "aguardando-manutencao";
  }

  iniciarManutencao() {
    if (this.estado !== "aguardando-manutencao") {
      throw new Error("Linha nao esta aguardando manutencao");
    }
    this.estado = "em-manutencao";
  }

  concluirManutencao(tecnicoId) {
    if (this.estado !== "em-manutencao") {
      throw new Error("Manutencao nao foi iniciada");
    }
    if (!tecnicoId) {
      throw new Error("Tecnico responsavel e obrigatorio");
    }
    this.estado = "parada";
    this.proximaManutencao = null;
    this.ultimoTecnico = tecnicoId;
  }

  precisaManutencao() {
    return this.proximaManutencao && Date.now() >= this.proximaManutencao;
  }
}

module.exports = { ControladorLinha };
