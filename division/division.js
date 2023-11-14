function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: division by zero";
    }
}

module.exports = division;
