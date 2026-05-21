const { somar, criarUsuario, listarChamadosAbertos, dividir } = require('../../../src/matchers');

describe('Matchers principais', () => {
  
  describe('Somar', () => {
    test('deve retornar 7 quando somar 2 e 5', () => {
      expect(somar(2, 5)).toBe(7);
    });
  });

  describe('criarUsuario', () => {
    test('deve retornar o usuário com as propriedades corretas', () => {
      expect(criarUsuario('João', 'joao@gmail.com')).toEqual({
        nome: 'João',
        email: 'joao@gmail.com',
        ativo: true
      });
    });
  });

  describe('listarChamadosAbertos', () => {
    test('deve filtrar apenas os títulos dos chamados abertos', () => {
      const chamados = [
        { titulo: 'Chamado 1', status: 'aberto' },
        { titulo: 'Chamado 2', status: 'fechado' },
        { titulo: 'Chamado 3', status: 'aberto' }
      ];
      
      expect(listarChamadosAbertos(chamados)).toEqual(['Chamado 1', 'Chamado 3']);
    });
  });

  describe('dividir', () => {
    test('10 / 2 deve ser igual a 5', () => {
      expect(dividir(10, 2)).toEqual(5);
    });

    test('deve lançar erro quando dividir por zero', () => {
      expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitido');
    });
  });

});