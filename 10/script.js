// Función para generar la matriz
function generarMatrizIdentidad(n) {
    let matriz = [];
    
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = (i === j) ? 1 : 0; // La diagonal será de 1 y lo demás de cero
        }
    }

    return matriz;
}

function mostrarMatriz(matriz) {
    let html = "<h3>Matriz Generada:</h3><table>";
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(valor => {
            html += `<td>${valor}</td>`;
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}

document.getElementById("generarMatriz").addEventListener("click", function() {
    const size = parseInt(document.getElementById("size").value);

    // Validar que el tamaño sea válido
    if (isNaN(size) || size < 2) {
        document.getElementById("resultados").innerHTML = "Ingresa un tamaño válido.";
        return;
    }
    const matriz = generarMatrizIdentidad(size);
    document.getElementById("resultados").innerHTML = mostrarMatriz(matriz);
});
