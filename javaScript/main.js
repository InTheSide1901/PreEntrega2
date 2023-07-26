let jugadores = [];
        let resultados = [];
        let ganadores = [];
        let perdedores = [];
        function iniciarJuego() {
            let jugar = true;
            while (jugar) {
                let numeroAleatorio = Math.ceil(Math.random() * 10); //aca multiplicamos el math random por 10 para poder tener numeros decimales del 1 al 10
                let intentosRestantes = 3;
                let nombre = prompt("Por favor ingrese su nombre:");
                let resultadosJugador = [];
                resultadosJugador.push(nombre); //agregamos el elemento al array para que nos muestre el nombre ingresado en los datos
                while (intentosRestantes > 0) { 
                    let numeroElegido = prompt("Bienvenido/a " + nombre + ", por favor adivine el número del 1 al 10");
                    numeroElegido = parseInt(numeroElegido);
                    if (numeroElegido == numeroAleatorio) {
                        console.log("¡Felicidades " + nombre + "!" + ", el número correcto era " + numeroAleatorio + ", por lo tanto ¡Ganaste el juego!");
                        resultadosJugador.push("Ganaste, el numero era " + numeroAleatorio );
                        ganadores.push(" " + nombre);
                        console.log("------------------------------------------------------------");
                        break;
                    } else {
                        console.log("Incorrecto, " + nombre + " aún te quedan " + (intentosRestantes - 1) + " intentos");
                        intentosRestantes -= 1;
                        resultadosJugador.push("Intento fallido");
                    }
                }
                if (intentosRestantes == 0) {
                    console.log("Lo siento, " + nombre + ". Se agotaron tus intentos. El número era " + numeroAleatorio);
                    perdedores.push(" " + nombre);
                    console.log("------------------------------------------------------------");; //en caso de que mi intento llege a 0, mostrara este codigo final 
                    resultadosJugador.push("Perdiste, el numero era " + numeroAleatorio);
                }
                jugadores.push(nombre); // agregamos el nombre del jugador al array de jugadores
                resultados.push(resultadosJugador); // agregamos los resultados de este jugador al array de resultados
                let respuesta = prompt(nombre + ", si desea jugar otro jugador, responde 'sí' o 'no'");
                if (respuesta.toLowerCase() != "si") {
                    jugar = false;
                }
            }
            resultadosJugador(); //estos codigos son para mostrar el la pantalla de html 
        }
        function resultadosJugador() {
        for (let i = 0; i < jugadores.length; i++) {
            const contenedorJugador = document.querySelector(".contenedor_" + (i + 1)); //señalamos cada jugador que mencionamos en el html con las clases "contenedor_(numero)"
            const resultadosJugador = resultados[i]; //tendremos todos los resultados de cada jugador individual
            const listaResultados = document.createElement("ul");
            resultadosJugador.forEach((resultado) => {
                const item = document.createElement("li");  
                item.textContent = resultado; //añadimos el texto de los resultados a la tabla del html (no es una tabla, sino cajas hechas con div)
                listaResultados.appendChild(item);
            });
                contenedorJugador.appendChild(listaResultados);
            }
        }
        function mostrarGanadores(){
            console.log("Los ganadores son: " + ganadores);
        }
        function mostrarPerdedores(){
            console.log("Los perdedores son: " + perdedores);
        }

const iniciarElJuego = document.getElementById("iniciar_juego");
iniciarElJuego.addEventListener("click", iniciarJuego);

const mostrarALosGanadores = document.getElementById("mostrar_ganadores");
mostrarALosGanadores.addEventListener("click", mostrarGanadores);

const mostrarALosPerdedores = document.getElementById("mostrar_perdedores");
mostrarALosPerdedores.addEventListener("click", mostrarPerdedores);
