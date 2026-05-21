const { ehMaiorDeIdade } = require("../ehMaiorDeIdade");

// TODO: implementar 3 testes usando toBe (incluir um de borda).






describe('Função ehMaiorDeIDade', () => {
    test('idade 17 retorna false', () => {
        expect(ehMaiorDeIdade(17)).toBe(false);
    })
    test('idade 18 retorna true', () => {
        expect(ehMaiorDeIdade(18)).toBe(true);
    })
})
