const TAXA_BASE = 25;
const ACRESCIMO_NORTE = 1.40;
const LIMITE_PESO = 30;

function calcularFrete({ regiao, peso }) {
  let valor = TAXA_BASE;

  if (regiao === 'norte') {
    valor = valor * ACRESCIMO_NORTE;
  }

  if (peso > LIMITE_PESO) {
    valor = valor * 2;
  }

  return valor;
}

module.exports = { calcularFrete };
