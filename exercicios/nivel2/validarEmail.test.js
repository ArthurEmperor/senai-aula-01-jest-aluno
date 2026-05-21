const { validarEmail } = require('./validarEmail');

// TODO: 4 testes usando toEqual para comparar os objetos retornados.

test.todo("'ana@exemplo.com' retorna { ok: true }");
test.todo("'ana.exemplo.com' (sem arroba) retorna { ok: false, razao: 'sem-arroba' }");
test.todo("'ana@exemplo' (sem ponto) retorna { ok: false, razao: 'sem-ponto' }");
test.todo("'bruno@empresa.com.br' retorna { ok: true }");


const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {
  test("'ana@exemplo.com' retorna { ok: true }", () => {
    expect(validarEmail('ana@exemplo.com')).toEqual({ ok: true });
  });

  test("'ana.exemplo.com' (sem arroba) retorna { ok: false, razao: 'sem-arroba' }", () => {
    expect(validarEmail('ana.exemplo.com')).toEqual({ ok: false, razao: 'sem-arroba' });
  });

  test("'ana@exemplo' (sem ponto) retorna { ok: false, razao: 'sem-ponto' }", () => {
    expect(validarEmail('ana@exemplo')).toEqual({ ok: false, razao: 'sem-ponto' });
  });

  test("'bruno@empresa.com.br' retorna { ok: true }", () => {
    expect(validarEmail('bruno@empresa.com.br')).toEqual({ ok: true });
  });
});