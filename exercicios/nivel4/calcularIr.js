// Exercício 4.2 — calcularIr
// Ana mede cobertura da calculadora de IR simplificada.
//
// TODO: implementar.
// Faixas:
//   salário <= 2000           → isento (imposto = 0)
//   2001 <= salário <= 4000   → 15% sobre o que excede 2000
//   salário > 4000            → 15% × 2000 + 27.5% × (salário - 4000)
//
// Meta: 100% de cobertura de branches usando npx jest --coverage.

function calcularIr(salario) {
  // sua implementação aqui
}

module.exports = { calcularIr };
