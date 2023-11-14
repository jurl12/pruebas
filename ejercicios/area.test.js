const calcularAreaTriangulo = require('./triangulo');
test('el are deberia ser  6', () => {
    let result = calcularAreaTriangulo(3, 4);
    expect(result).toBe(6);
});

