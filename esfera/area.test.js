const volumenEsfera = require('./area')


test('Volume of a sphere with radius 2 should be approximately 33.51', () => {
    let result = volumenEsfera(2);
    expect(result).toBeCloseTo(33.51, 2);
});

