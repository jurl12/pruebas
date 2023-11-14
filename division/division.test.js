const division =require('./division')
 
 test('Division of 10 by 2 should be 5', () => {
    let result = division(10, 2);
    expect(result).toBe(5);
});
 test('Division by zero should result in an error message', () => {
    let result = division(7, 0);
    expect(result).toBe("Error: division by zero");
});
