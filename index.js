document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        const cadena1 = document.getElementById('cadena1').value;
        const cadena2 = document.getElementById('cadena2').value;
        const resultadoTexto = document.getElementById('resultadoTexto');

        if (cadena1 && cadena2) {
            console.log('Cadenas ingresadas:', cadena1, cadena2);

            function interleaveStrings(cadena1, cadena2) {
                let result = '';
                const maxLength = Math.max(cadena1.length, cadena2.length);
            
                for (let i = 0; i < maxLength; i++) {
                    if (i < cadena1.length) {
                        result += cadena1[i];
                    }
                    if (i < cadena2.length) {
                        result += cadena2[i];
                    }
                }
            
                return result;
            }

            const interleavedResult = interleaveStrings(cadena1, cadena2);
            resultadoTexto.textContent = interleavedResult;
        } else {
            console.log('Por favor, ingrese las dos cadenas.');
        }
    });
});







// Ejemplo de uso:

