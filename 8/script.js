function sumaFila(fila, index = 0) {
    if (index === fila.length) return 0;
    return fila[index] + sumaFila(fila, index + 1);
}

function sumaColumna(matriz, columna, filaIndex = 0) {
    if (filaIndex === matriz.length) return 0;
    return matriz[filaIndex][columna] + sumaColumna(matriz, columna, filaIndex + 1);
}

function sumaDiagonalPrincipal(matriz, index = 0) {
    if (index === matriz.length) return 0;
    return matriz[index][index] + sumaDiagonalPrincipal(matriz, index + 1);
}

function sumaDiagonalSecundaria(matriz, index = 0) {
    if (index === matriz.length) return 0;
    return matriz[index][matriz.length - index - 1] + sumaDiagonalSecundaria(matriz, index + 1);
}

function esCuadradoMagico(matriz, sumaMagica, filaIndex = 0) {
    if (filaIndex === matriz.length) {
        const sumaDiagPrin = sumaDiagonalPrincipal(matriz);
        const sumaDiagSec = sumaDiagonalSecundaria(matriz);
        return sumaDiagPrin === sumaMagica && sumaDiagSec === sumaMagica;
    }

    const sumaFilaActual = sumaFila(matriz[filaIndex]);
    if (sumaFilaActual !== sumaMagica) return false;
    const sumaColumnaActual = sumaColumna(matriz, filaIndex);
    if (sumaColumnaActual !== sumaMagica) return false;
    return esCuadradoMagico(matriz, sumaMagica, filaIndex + 1);
}
document.getElementById("generarMatriz").addEventListener("click", function() {
    const size = parseInt(document.getElementById("size").value);
    
    if (isNaN(size) || size < 2) {
        document.getElementById("result").innerHTML = "Ingresa un tamaño válido.";
        return;
    }
    let tablaHTML = "<table>";
    for (let i = 0; i < size; i++) {
        tablaHTML += "<tr>";
        for (let j = 0; j < size; j++) {
            tablaHTML += `<td><input type="number" class="matriz-input" id="matriz-${i}-${j}" placeholder="0"></td>`;
        }
        tablaHTML += "</tr>";
    }
    tablaHTML += "</table>";
    document.getElementById("matrizContainer").innerHTML = tablaHTML;
});
function obtenerMatriz(size) {
    let matriz = [];
    for (let i = 0; i < size; i++) {
        let fila = [];
        for (let j = 0; j < size; j++) {
            const valor = parseInt(document.getElementById(`matriz-${i}-${j}`).value);
            fila.push(isNaN(valor) ? 0 : valor);
        }
        matriz.push(fila);
    }
    return matriz;
}
document.getElementById("verifyMagicSquare").addEventListener("click", function() {
    const size = parseInt(document.getElementById("size").value);

    if (isNaN(size) || size < 2) {
        document.getElementById("result").innerHTML = "Ingresa un tamaño válido.";
        return;
    }

    const matriz = obtenerMatriz(size);
    const sumaMagica = (size * (size * size + 1)) / 2;
    const esMagico = esCuadradoMagico(matriz, sumaMagica);
    let resultadoHTML = "";
    if (esMagico) {
        resultadoHTML = `<p>Es un cuadrado mágico. Constante mágica: ${sumaMagica}</p>`;
    } else {
        resultadoHTML = "<p>No es un cuadrado mágico.</p>";
    }
    document.getElementById("result").innerHTML = resultadoHTML;
});
