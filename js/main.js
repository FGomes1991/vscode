function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) { // <--- ¿Hay un problema aquí? 🤔
        suma += arr[i];
    }
    return suma;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`La suma del array es: ${sumaArray(numeros)}`);