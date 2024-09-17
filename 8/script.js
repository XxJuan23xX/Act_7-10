// Función que nos verifica si es o no un cuadrado mágico
function esCuadradoMagico(matriz) {
    const n = matriz.length;
    const sumaMagica = (n * (n * n + 1)) / 2; // Fórmula de la constante mágica

    // Calcular las sumas de las filas
    for (let i = 0; i < n; i++) {
        let sumaFila = matriz[i].reduce((a, b) => a + b, 0);
        if (sumaFila !== sumaMagica) return false;
    }

    // Calcular las sumas de las columnas
    for (let j = 0; j < n; j++) {
        let sumaColumna = 0;
        for (let i = 0; i < n; i++) {
            sumaColumna += matriz[i][j];
        }
        if (sumaColumna !== sumaMagica) return false;
    }
 
    // Calcular la suma de la primera diagonal
    let sumaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
    }
    if (sumaDiagonalPrincipal !== sumaMagica) return false;

    // Calcular la suma de la segunda diagonal
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalSecundaria += matriz[i][n - i - 1];
    }
    if (sumaDiagonalSecundaria !== sumaMagica) return false;

    return true; // Si todo fue correcto, si es cuadrado mágico
}

// Función para mostrar la matriz en la página
function mostrarMatriz(matriz) {
    let html = "<h3>Cuadrado Mágico:</h3><table>";
    
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(num => {
            html += `<td>${num}</td>`;
        });
        html += "</tr>";
    });
    
    html += "</table>";
    return html;
}

// Funciones para el HTML
document.getElementById("verifyMagicSquare").addEventListener("click", function() {
    const size = parseInt(document.getElementById("size").value);
    
    // Validar que el tamaño exista
    if (isNaN(size) || size < 2) {
        document.getElementById("result").innerHTML = "Ingresa un tamaño válido.";
        return;
    }

    let matriz = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ]; 

    // Verificar si es un cuadrado mágico
    const esMagico = esCuadradoMagico(matriz);
    let resultadoHTML = mostrarMatriz(matriz); 

    if (esMagico) {
        const constanteMagica = (size * (size * size + 1)) / 2;
        resultadoHTML += `<p>Es un cuadrado mágico. Constante mágica: ${constanteMagica}</p>`;
    } else {
        resultadoHTML += "<p>No es un cuadrado mágico.</p>";
    }

    document.getElementById("result").innerHTML = resultadoHTML;
});
