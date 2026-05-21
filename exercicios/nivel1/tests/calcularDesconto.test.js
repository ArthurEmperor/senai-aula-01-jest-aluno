const { calcularDesconto } = require("../calcularDesconto");

// TODO: implementar 3 testes usando toBe.

test.todo("aplica 10% de desconto em compra de R$ 100 (esperado 90)");
test.todo("aplica 50% de desconto em compra de R$ 80 (esperado 40)");
test.todo("aplica 0% de desconto em compra de R$ 200 (esperado 200)");


describe('calcular Desconto', () => {
    test('calcularDesconto(100, 0.10) retorna 10', () => {
        expect(calcularDesconto(100, 0.10)).toBe(90);
    });
    test('calcularDesconto(80, 0.50) retorna 40', () => {
        expect(calcularDesconto(80, 0.50)).toBe(40);
    });
    test('calcularDesconto(200, 0) retorna 200', () => {
        expect(calcularDesconto(200, 0)).toBe(200);
    });
});
