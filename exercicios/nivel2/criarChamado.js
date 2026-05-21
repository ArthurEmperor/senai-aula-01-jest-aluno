// Exercício 2.3 — criarChamado
// Mariana garante que chamado sem título não entra no sistema.
//
// TODO: implementar.
// Entrada válida → retorna { id, titulo, descricao, status: 'aberto' }.
// Título vazio ou ausente → lançar erro (throw new Error('titulo obrigatorio')).
// Use Date.now() para gerar id.

function criarChamado({ titulo, descricao }) {
   return { titulo, descricao, status: 'aberto'};
}

module.exports = { criarChamado };
