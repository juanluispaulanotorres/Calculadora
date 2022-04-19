
window.addEventListener("load", function() {
    
    // Obtención del Input
    let pantalla = <HTMLInputElement>document.getElementById("txtDigitos");
    
    // Obtención de los botones

    let btnCero = <HTMLButtonElement>document.getElementById("0");
    let btnUno = <HTMLButtonElement>document.getElementById("1");
    let btnDos = <HTMLButtonElement>document.getElementById("2");
    let btnTres = <HTMLButtonElement>document.getElementById("3");
    let btnCuatro = <HTMLButtonElement>document.getElementById("4");
    let btnCinco = <HTMLButtonElement>document.getElementById("5");
    let btnSeis = <HTMLButtonElement>document.getElementById("6");
    let btnSiete = <HTMLButtonElement>document.getElementById("7");
    let btnOcho = <HTMLButtonElement>document.getElementById("8");
    let btnNueve = <HTMLButtonElement>document.getElementById("9");

    // let btnExp = <HTMLButtonElement>document.getElementById("exp");
    let btnPunto = <HTMLButtonElement>document.getElementById("punto");
    let btnDivision = <HTMLButtonElement>document.getElementById("division");
    let btnMultiplicacion = <HTMLButtonElement>document.getElementById("multiplicacion");
    let btnSuma = <HTMLButtonElement>document.getElementById("suma");
    let btnResta = <HTMLButtonElement>document.getElementById("resta");
    let btnResultado = <HTMLButtonElement>document.getElementById("igual");

    let btnBorrado = <HTMLButtonElement>document.getElementById("borrado");

    let acumulador: string = "";
    let resultado: string = "";
    let operaciones = document.getElementsByClassName("especial");

    // Impedir el uso de operaciones sin escribir antes los valores

    if (pantalla.value == "") {
        for (let i = 0; i < operaciones.length; i++) {
            if (operaciones[i].innerHTML != "-" )
                operaciones[i].setAttribute("disabled", "");
        }
    }

    btnCero.addEventListener("click", function() {
        // Añadir al acumulador
        if (acumulador.charAt(0) == "0")
            acumulador += "";
        else
            acumulador += this.innerHTML;
        // Añadir el acumulador a la pantalla
        pantalla.value = acumulador;
    })

    btnUno.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        // No se permitirá pulsar el botón si antes no se ha especificado la operación

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnDos.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnTres.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnCuatro.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnCinco.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnSeis.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnSiete.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnOcho.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnNueve.addEventListener("click", function() {

        habilitarOperaciones(operaciones);

        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })


    btnPunto.addEventListener("click", function() {
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        } else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    })

    btnBorrado.addEventListener("click", function() {
        pantalla.value = "";
        acumulador = "";
        resultado = "";

        // Si algún botón está deshabilitado, se modificará dicho atributo

        let botones = document.getElementsByTagName("button");
        for (let i = 0; i < botones.length; i++) {
            if (botones[i].getAttribute("disabled") == "") {
                botones[i].removeAttribute("disabled");
            }
        }

        for (let i = 0; i < operaciones.length; i++) {
            if (operaciones[i].innerHTML != "-" )
                operaciones[i].setAttribute("disabled", "");
        }

    })

    /* Operaciones */

    btnSuma.addEventListener("click", function() {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerText;
            pantalla.value += acumulador;

            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado

            let botones = document.getElementsByTagName("button");
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }

        } else {
            acumulador += this.innerText;
            pantalla.value = acumulador;
        }
    })

    btnResta.addEventListener("click", function() {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerText;
            pantalla.value += acumulador;

            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado

            let botones = document.getElementsByTagName("button");
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }

        } else {
            acumulador += this.innerText;
            pantalla.value = acumulador;
        }
    })

    btnMultiplicacion.addEventListener("click", function() {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += "*";
            pantalla.value += acumulador;

            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado

            let botones = document.getElementsByTagName("button");
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }

        } else {
            acumulador += "*";
            pantalla.value = acumulador;
        }
    })

    btnDivision.addEventListener("click", function() {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerHTML;
            pantalla.value += acumulador;

            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado

            let botones = document.getElementsByTagName("button");
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }

        } else {
            acumulador += this.innerHTML;
            pantalla.value = acumulador;
        }
    })

    btnResultado.addEventListener("click", function() {
        pantalla.value = "";
        resultado = eval(acumulador);
        pantalla.value = resultado;
    })
})

function habilitarOperaciones(operaciones: HTMLCollectionOf<Element>) {
    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i].innerHTML != "-" )
            operaciones[i].removeAttribute("disabled");
    }
}