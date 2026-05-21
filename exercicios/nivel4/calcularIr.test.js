const { calcularIr } = require("./calcularIr");

// TODO: cobrir cada faixa + valores de borda (R$ 2000, R$ 2001, R$ 4000, R$ 4001).
// Depois rode: npx jest exercicios/nivel4/calcularIr.test.js --coverage
// Meta: 100% de % Branch nesta função.

describe("calcularIr", () => {
  describe("faixa isenta", () => {
    test.todo("salário R$ 1500 → IR 0");
    test.todo("salário R$ 2000 (borda) → IR 0");
  });

  describe("faixa intermediária (15%)", () => {
    test.todo("salário R$ 2001 (borda inferior) → IR ~0.15");
    test.todo("salário R$ 3000 → IR 150");
    test.todo("salário R$ 4000 (borda superior) → IR 300");
  });

  describe("faixa superior (27.5%)", () => {
    test.todo("salário R$ 4001 (borda inferior) → IR 300.275");
    test.todo("salário R$ 6000 → IR 850");
  });
});
