function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i <= arr.length; i++) { // <--- ¿Hay un problema aquí? 🤔
        suma += arr[i];
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];
console.log(`La suma del array es: ${sumaArray(numeros)}`);