// Función recursiva para hacer las operaciones
function operarMatrices(m1, m2, operacion, fila = 0, col = 0, resultado = [[0, 0], [0, 0]]) {
    if (fila >= 2) {
        return resultado; 
    }

    switch (operacion) {
        case 'sumar':
            resultado[fila][col] = m1[fila][col] + m2[fila][col];
            break;
        case 'restar':
            resultado[fila][col] = m1[fila][col] - m2[fila][col];
            break;
        case 'multiplicar':
            resultado[fila][col] = m1[fila][col] * m2[fila][col];
            break;
        case 'dividir':
            resultado[fila][col] = m1[fila][col] / m2[fila][col];
            break;
    }

    if (col < 1) {
        return operarMatrices(m1, m2, operacion, fila, col + 1, resultado);
    } else {
        return operarMatrices(m1, m2, operacion, fila + 1, 0, resultado);
    }
}
function obtenerMatriz(idPrefix) {
    return [
        [parseFloat(document.getElementById(idPrefix + "-00").value), parseFloat(document.getElementById(idPrefix + "-01").value)],
        [parseFloat(document.getElementById(idPrefix + "-10").value), parseFloat(document.getElementById(idPrefix + "-11").value)]
    ];
}

function mostrarMatriz(titulo, matriz) {
    let html = `<h3>${titulo}</h3><table>`;
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(valor => {
            html += `<td>${isNaN(valor) ? 'Indefinido' : valor.toFixed(2)}</td>`; 
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}

document.getElementById("calcular").addEventListener("click", function() {
    const matriz1 = obtenerMatriz("mat1");
    const matriz2 = obtenerMatriz("mat2");
    const suma = operarMatrices(matriz1, matriz2, 'sumar');
    const resta = operarMatrices(matriz1, matriz2, 'restar');
    const multiplicacion = operarMatrices(matriz1, matriz2, 'multiplicar');
    const division = operarMatrices(matriz1, matriz2, 'dividir');
    let resultadoHTML = "";
    resultadoHTML += mostrarMatriz("Suma de Matrices", suma);
    resultadoHTML += mostrarMatriz("Resta de Matrices", resta);
    resultadoHTML += mostrarMatriz("Producto de Matrices", multiplicacion);
    resultadoHTML += mostrarMatriz("División de Matrices", division);

    document.getElementById("resultados").innerHTML = resultadoHTML;
});
