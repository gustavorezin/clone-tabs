const calculadora = require("../models/calculadora.js");

test("somar 100+5 deve retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 5 deve retornar 'Erro", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
});

test("somar 5 + 'banana' deve retornar 'Erro", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("Erro");
});
