const { filtrarChamadosAbertos } = require('./filtrarChamadosAbertos');

// TODO: 3 testes — usar toContain (lista mista) e toEqual([]) (sem abertos / lista vazia).

test.todo('lista mista — resultado contém o id 1 e o id 3 (usar toContain)');
test.todo('lista só com fechados — resultado é [] (usar toEqual)');
test.todo('lista vazia — resultado é [] (usar toEqual)');


const { filtrarChamadosAbertos } = require('./filtrarChamadosAbertos');

describe('filtrarChamadosAbertos', () => {
  test('lista mista — resultado contém o id 1 e o id 3 (usar toContain)', () => {

    const chamados = [
      { id: 1, status: 'aberto' },
      { id: 2, status: 'fechado' },
      { id: 3, status: 'aberto' },
      { id: 4, status: 'fechado' },
    ];


    const abertos = filtrarChamadosAbertos(chamados);


    expect(abertos).toContain(chamados[0]); // id 1
    expect(abertos).toContain(chamados[2]); // id 3
    expect(abertos).toHaveLength(2);
  });

  test('lista só com fechados — resultado é [] (usar toEqual)', () => {
    const chamados = [
      { id: 1, status: 'fechado' },
      { id: 2, status: 'fechado' },
    ];
    const abertos = filtrarChamadosAbertos(chamados);
    expect(abertos).toEqual([]);
  });

  test('lista vazia — resultado é [] (usar toEqual)', () => {
    const chamados = [];
    const abertos = filtrarChamadosAbertos(chamados);
    expect(abertos).toEqual([]);
  });
});