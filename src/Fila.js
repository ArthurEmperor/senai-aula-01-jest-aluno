class Fila {
  constructor() {
    this.itens = [];
  }

  adicionar(chamado) {
    if (chamado.urgente) {
      this.itens.unshift(chamado);
    } else {
      this.itens.push(chamado);
    }
  }

  proximo() {
    return this.itens[0];
  }

  tamanho() {
    return this.itens.length;
  }

  remover() {
    return this.itens.shift();
  }
}

module.exports = { Fila };
