// Función para calcular el factorial de un número:

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    return numero * calcularFactorial(numero - 1);
}

module.exports =calcularFactorial;
