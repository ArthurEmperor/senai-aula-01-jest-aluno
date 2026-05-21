const { validarEmail } = require('./validarEmail');

// TODO: 4 testes usando toEqual para comparar os objetos retornados.

test.todo("'ana@exemplo.com' retorna { ok: true }");
test.todo("'ana.exemplo.com' (sem arroba) retorna { ok: false, razao: 'sem-arroba' }");
test.todo("'ana@exemplo' (sem ponto) retorna { ok: false, razao: 'sem-ponto' }");
test.todo("'bruno@empresa.com.br' retorna { ok: true }");
