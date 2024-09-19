function contarCerosEnFila(fila, index = 0) {
    if (index >= fila.length) {
        return 0; 
    }
    return (fila[index] === 0 ? 1 : 0) + contarCerosEnFila(fila, index + 1);
}

function contarCerosPorFilaRecursivo(matriz, filaIndex = 0, resultado = []) {
    if (filaIndex >= matriz.length) {
        return resultado; 
    }
    const cerosEnFila = contarCerosEnFila(matriz[filaIndex]);
    resultado.push(cerosEnFila); 
    return contarCerosPorFilaRecursivo(matriz, filaIndex + 1, resultado); 
}

document.getElementById("generarMatriz").addEventListener("click", function() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
        document.getElementById("result").innerHTML = "Por favor, ingresa un número válido de filas y columnas.";
        return;
    }

    let tablaHTML = "<table>"; 
    for (let i = 0; i < filas; i++) {
        tablaHTML += "<tr>";
        for (let j = 0; j < columnas; j++) {
            tablaHTML += `<td><input type="number" class="matriz-input" id="matriz-${i}-${j}" placeholder="0"></td>`;
        }
        tablaHTML += "</tr>";
    }
    tablaHTML += "</table>";
    document.getElementById("matrizContainer").innerHTML = tablaHTML;
});

function obtenerMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            const valor = parseInt(document.getElementById(`matriz-${i}-${j}`).value);
            fila.push(isNaN(valor) ? 0 : valor); 
        }
        matriz.push(fila);
    }
    return matriz;
}

document.getElementById("countZeros").addEventListener("click", function() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
        document.getElementById("result").innerHTML = "Por favor, genera una matriz primero.";
        return;
    }

    const matriz = obtenerMatriz(filas, columnas);

    const resultado = contarCerosPorFilaRecursivo(matriz);

    let resultadoHTML = "<h2>Ceros por fila:</h2>";
    resultado.forEach((ceros, index) => {
        resultadoHTML += `<p>Fila ${index + 1}: ${ceros} ceros</p>`;
    });
    document.getElementById("result").innerHTML = resultadoHTML;
});
