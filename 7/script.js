// Matriz bidimensional
const matriz = [
    [0, 2, 5, 7, 6],
    [0, 0, 0, 3, 8],
    [2, 9, 6, 3, 4],
    [1, 5, 6, 1, 4],
    [0, 9, 2, 5, 0]
];

// Función para contar ceros en cada fila
function contarCerosPorFila(matriz) {
    return matriz.map(fila => {
        // Contar los ceros en cada fila
        return fila.filter(numero => numero === 0).length;
    });
}

document.getElementById("countZeros").addEventListener("click", function() {
    const resultado = contarCerosPorFila(matriz);
    let resultadoHTML = "<h2>Ceros por fila:</h2>";
    resultado.forEach((ceros, index) => {
        resultadoHTML += `<p>Fila ${index + 1}: ${ceros} ceros</p>`;
    });
    document.getElementById("result").innerHTML = resultadoHTML;
});
