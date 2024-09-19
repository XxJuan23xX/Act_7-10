function generarInputsMatriz() {
    let tablaHTML = "<table>";
    for (let i = 0; i < 3; i++) {
        tablaHTML += "<tr>";
        for (let j = 0; j < 3; j++) {
            tablaHTML += `<td><input type="number" class="matriz-input" id="matriz-${i}-${j}" placeholder="0"></td>`;
        }
        tablaHTML += "</tr>";
    }
    tablaHTML += "</table>";
    document.getElementById("matrizContainer").innerHTML = tablaHTML;
}
function obtenerMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let fila = [];
        for (let j = 0; j < 3; j++) {
            const valor = parseFloat(document.getElementById(`matriz-${i}-${j}`).value);
            fila.push(isNaN(valor) ? 0 : valor);
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarMatriz(titulo, matriz) {
    let html = `<h3>${titulo}</h3><table>`;
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(valor => {
            html += `<td>${valor.toFixed(2)}</td>`;
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}

// Función para aplicar el método de Gauss-Jordan en una matriz 3x3 y mostrar los pasos
function gaussJordan(matriz) {
    let n = 3;
    let pasosHTML = '';
    pasosHTML += mostrarMatriz("Matriz inicial", matriz);

    for (let i = 0; i < n; i++) {
        if (matriz[i][i] === 0) {
            for (let j = i + 1; j < n; j++) {
                if (matriz[j][i] !== 0) {
                    let temp = matriz[i];
                    matriz[i] = matriz[j];
                    matriz[j] = temp;
                    pasosHTML += mostrarMatriz(`Intercambio de fila ${i + 1} con fila ${j + 1}`, matriz);
                    break;
                }
            }
        }

        let pivote = matriz[i][i];
        for (let j = 0; j < n; j++) {
            matriz[i][j] /= pivote;
        }
        pasosHTML += mostrarMatriz(`Dividir fila ${i + 1} por ${pivote.toFixed(2)}`, matriz);

        for (let k = 0; k < n; k++) {
            if (k !== i) {
                let factor = matriz[k][i];
                for (let j = 0; j < n; j++) {
                    matriz[k][j] -= factor * matriz[i][j];
                }
                pasosHTML += mostrarMatriz(`Eliminar el valor de la columna ${i + 1} en fila ${k + 1}`, matriz);
            }
        }
    }

    return pasosHTML;
}

document.getElementById("generarMatriz").addEventListener("click", function() {
    const matriz = obtenerMatriz();
    const pasosHTML = gaussJordan(matriz);
    document.getElementById("resultados").innerHTML = pasosHTML;
});
generarInputsMatriz();
