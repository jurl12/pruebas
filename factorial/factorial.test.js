const calcularFactorial = require('./factorial')


test('El factorial de 5 debe ser 120', () => {
    let resultado = calcularFactorial(5);
    expect(resultado).toBe(120);
});


