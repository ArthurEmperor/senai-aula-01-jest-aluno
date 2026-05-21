function processarTransferencia({ de, para, valor, enviarEmail }) {
  if (!de || !para) {
    throw new Error("Conta de origem e destino sao obrigatorias");
  }
  if (valor <= 0) {
    throw new Error("Valor da transferencia deve ser positivo");
  }

  const protocolo = `TRF-${Date.now()}`;

  enviarEmail({
    para: `cliente-${de}@exemplo.com`,
    assunto: `Transferência de R$ ${valor}`,
    corpo: `Transferência de ${de} para ${para}. Protocolo ${protocolo}.`,
  });

  return { ok: true, protocolo };
}

module.exports = { processarTransferencia };
