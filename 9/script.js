// Función para obtener el valor de las matrices ingresadas 
function obtenerMatriz(idPrefix) {
    return [
        [parseFloat(document.getElementById(idPrefix + "-00").value), parseFloat(document.getElementById(idPrefix + "-01").value)],
        [parseFloat(document.getElementById(idPrefix + "-10").value), parseFloat(document.getElementById(idPrefix + "-11").value)]
    ];
}

// Función para sumar 
function sumarMatrices(m1, m2) {
    return [
        [m1[0][0] + m2[0][0], m1[0][1] + m2[0][1]],
        [m1[1][0] + m2[1][0], m1[1][1] + m2[1][1]]
    ];
}

// Función para restar 
function restarMatrices(m1, m2) {
    return [
        [m1[0][0] - m2[0][0], m1[0][1] - m2[0][1]],
        [m1[1][0] - m2[1][0], m1[1][1] - m2[1][1]]
    ];
}

// Función para multiplicar 
function multiplicarMatrices(m1, m2) {
    return [
        [m1[0][0] * m2[0][0], m1[0][1] * m2[0][1]],
        [m1[1][0] * m2[1][0], m1[1][1] * m2[1][1]]
    ];
}

// Función para dividir 
function dividirMatrices(m1, m2) {
    return [
        [m1[0][0] / m2[0][0], m1[0][1] / m2[0][1]],
        [m1[1][0] / m2[1][0], m1[1][1] / m2[1][1]]
    ];
}

// Función para mostrar una matriz 
function mostrarMatriz(titulo, matriz) {
    let html = `<h3>${titulo}</h3><table>`;
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(valor => {
            html += `<td>${valor.toFixed(2)}</td>`; // Mostrar decimales también
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}


document.getElementById("calcular").addEventListener("click", function() {
    const matriz1 = obtenerMatriz("mat1");
    const matriz2 = obtenerMatriz("mat2");

    const suma = sumarMatrices(matriz1, matriz2);
    const resta = restarMatrices(matriz1, matriz2);
    const multiplicacion = multiplicarMatrices(matriz1, matriz2);
    const division = dividirMatrices(matriz1, matriz2);
    let resultadoHTML = "";
    resultadoHTML += mostrarMatriz("Suma de Matrices", suma);
    resultadoHTML += mostrarMatriz("Resta de Matrices", resta);
    resultadoHTML += mostrarMatriz("Producto de Matrices", multiplicacion);
    resultadoHTML += mostrarMatriz("División de Matrices", division);

    document.getElementById("resultados").innerHTML = resultadoHTML;
});
