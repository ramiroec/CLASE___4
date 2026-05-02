        // Función para innerHTML
        function demoInnerHTML() {
            const card = document.getElementById("innerHTML-card")
            card.classList.add("highlight")
            setTimeout(() => card.classList.remove("highlight"), 2000)
            
            document.getElementById("demo").innerHTML = `
                <strong>¡Funciona!</strong> La suma de 5 + 6 es ${5 + 6}.
                <br><small>${new Date().toLocaleTimeString()}</small>
            `
        }
        
        // Función para document.write()
        function demoDocumentWrite() {
            document.write(`
                <div style="padding:20px;background:#e3f2fd;border-radius:8px;">
                    <h2>Document.write() en acción</h2>
                    <p>Este contenido se ha añadido dinámicamente.</p>
                    <p>5 + 6 = ${5 + 6}</p>
                    <button onclick="window.location.reload()">Volver</button>
                </div>
            `)
        }
        
        // Función para alert()
        function demoAlert() {
            alert(`¡Alerta! La suma de 7 + 8 es ${7 + 8}`)
        }
        
        // Función para console.log()
        function demoConsoleLog() {
            console.log("%c¡Hola desde la consola!", 
                "color: white; background: linear-gradient(90deg, #3498db, #2ecc71); padding: 5px 10px; border-radius: 3px;")
            console.log("Puedes inspeccionar elementos, ver errores y mucho más aquí.")
            console.table([
                { Método: "innerHTML", Uso: "Modificar elementos HTML" },
                { Método: "document.write()", Uso: "Escribir en el documento" },
                { Método: "alert()", Uso: "Mostrar alertas" },
                { Método: "console.log()", Uso: "Depuración" }
            ])
        }
        
        // Función para variables
        function demoVariables() {
            let x = 5
            let y = 6
            let z = x + y
            
            console.group("Demo de Variables")
            console.log("x =", x)
            console.log("y =", y)
            console.log("z = x + y =", z)
            console.groupEnd()
        }
        
        // Función para punto y coma
        function demoSemicolon() {
            let a = 1
            let b = 2
            
            console.group("Demo de Punto y Coma")
            console.log("Antes del intercambio: a =", a, "b =", b)
            
            // Intercambio de valores sin punto y coma
            [a, b] = [b, a]
            
            console.log("Después del intercambio: a =", a, "b =", b)
            console.log("JavaScript interpretó correctamente el código sin punto y coma")
            console.groupEnd()
        }