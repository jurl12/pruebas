const valorAbsoluto= require('./valor')
test('El valor absoluto de -5 debe ser 5', () => {
    let result = valorAbsoluto(-5);
    expect(result).toBe(5);
});