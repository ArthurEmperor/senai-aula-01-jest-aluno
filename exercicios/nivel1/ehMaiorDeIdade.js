// Exercício 1.2 — ehMaiorDeIdade
// Bruno bloqueia cadastro de menores num portal de seguros.
//
// TODO: retornar true se idade >= 18, false caso contrário.
// Lembrar do caso de borda: idade exatamente igual a 18 deve liberar.

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

module.exports = { ehMaiorDeIdade };
