        // Funciones
        function showMessage() {
            document.getElementById("output").textContent = "¡Hola! Este es un mensaje desde una función.";
        }

        function calculateSquare() {
            let number = prompt("Ingresa un número para calcular su cuadrado:");
            if (number !== null) {
                let result = number ** 2;
                document.getElementById("output").textContent = `El cuadrado de ${number} es: ${result}`;
            }
        }