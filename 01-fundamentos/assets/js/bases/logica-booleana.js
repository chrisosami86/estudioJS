const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa False');
    return false;
}

//Operador de negacion en javascript se utiliza el signo de admiracion
// antes del valor booleano a negar
console.warn('Not o la Negación');
console.log(true);// valor normal
console.log(!true);// valor negado, resultado es false
console.log(!regresaTrue()); // Valor negado del resultado de la funcion, el resultado sera false

console.log('-----------------------');

// Los siguientes operadores se aplican a una o mas condiciones, debe existir por lo menos una condicion
console.warn('Operador and "&&" '); // Retorna verdadero si todos los valores son verdaderos
console.log(true && true);// Resultado: true
console.log(!true && true);// Resultado: false
console.log(regresaTrue() && !regresaFalse());//Resultado: true

console.log('-----------------------');

// Los siguientes operadores se aplican a una o mas condiciones, debe existir por lo menos una condicion
console.warn('Operador or "||" '); // Retorna verdadero si al menos un valor es verdadero dentro de la condicion
console.log(true || true);// Resultado: true
console.log(!true || false);// Resultado: false
console.log(regresaFalse() || regresaTrue());//Resultado: true