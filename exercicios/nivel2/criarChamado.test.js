const { criarChamado } = require("./criarChamado");

// TODO: 3 testes — entrada ok (toEqual ignorando id via expect.objectContaining),
//                  título vazio (toThrow), título ausente (toThrow).

test.todo(
  "entrada válida retorna objeto com titulo, descricao e status='aberto'",
);
test.todo("título vazio ('') lança erro");
test.todo("título ausente (undefined) lança erro");
