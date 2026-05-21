// Exercício 1.1 — calcularDesconto
// Mariana corrige o cálculo de cupom no checkout.
//
// TODO: implementar a função.
// Retorna o preço final após aplicar o percentual de desconto.
//   calcularDesconto(100, 0.10)  → 90
//   calcularDesconto(80, 0.50)   → 40
//   calcularDesconto(200, 0)     → 200

function calcularDesconto(preco, percentualDesconto) {
  return preco - preco * percentualDesconto;
}

console.log(calcularDesconto(100, 0.1));
console.log(calcularDesconto(80, 0.5));
console.log(calcularDesconto(200, 0));

module.exports = { calcularDesconto };
