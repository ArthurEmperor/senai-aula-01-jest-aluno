function calcularPreco(preco, percentualDesconto) {
  return preco - preco * percentualDesconto;
}

module.exports = { calcularPreco };
