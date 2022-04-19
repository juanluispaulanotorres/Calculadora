window.addEventListener("load", function () {
    // Obtención del Input
    var pantalla = document.getElementById("txtDigitos");
    // Obtención de los botones
    var btnCero = document.getElementById("0");
    var btnUno = document.getElementById("1");
    var btnDos = document.getElementById("2");
    var btnTres = document.getElementById("3");
    var btnCuatro = document.getElementById("4");
    var btnCinco = document.getElementById("5");
    var btnSeis = document.getElementById("6");
    var btnSiete = document.getElementById("7");
    var btnOcho = document.getElementById("8");
    var btnNueve = document.getElementById("9");
    // let btnExp = <HTMLButtonElement>document.getElementById("exp");
    var btnPunto = document.getElementById("punto");
    var btnDivision = document.getElementById("division");
    var btnMultiplicacion = document.getElementById("multiplicacion");
    var btnSuma = document.getElementById("suma");
    var btnResta = document.getElementById("resta");
    var btnResultado = document.getElementById("igual");
    var btnBorrado = document.getElementById("borrado");
    var acumulador = "";
    var resultado = "";
    var operaciones = document.getElementsByClassName("especial");
    // Impedir el uso de operaciones sin escribir antes los valores
    if (pantalla.value == "") {
        for (var i = 0; i < operaciones.length; i++) {
            if (operaciones[i].innerHTML != "-")
                operaciones[i].setAttribute("disabled", "");
        }
    }
    btnCero.addEventListener("click", function () {
        // Añadir al acumulador
        if (acumulador.charAt(0) == "0")
            acumulador += "";
        else
            acumulador += this.innerHTML;
        // Añadir el acumulador a la pantalla
        pantalla.value = acumulador;
    });
    btnUno.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        // No se permitirá pulsar el botón si antes no se ha especificado la operación
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnDos.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnTres.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnCuatro.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnCinco.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnSeis.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnSiete.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnOcho.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnNueve.addEventListener("click", function () {
        habilitarOperaciones(operaciones);
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnPunto.addEventListener("click", function () {
        if (resultado == pantalla.value && acumulador != "") {
            this.setAttribute("disabled", "");
        }
        else {
            // Añadir al acumulador
            acumulador += this.innerText;
            // Añadir el acumulador a la pantalla
            pantalla.value = acumulador;
        }
    });
    btnBorrado.addEventListener("click", function () {
        pantalla.value = "";
        acumulador = "";
        resultado = "";
        // Si algún botón está deshabilitado, se modificará dicho atributo
        var botones = document.getElementsByTagName("button");
        for (var i = 0; i < botones.length; i++) {
            if (botones[i].getAttribute("disabled") == "") {
                botones[i].removeAttribute("disabled");
            }
        }
        for (var i = 0; i < operaciones.length; i++) {
            if (operaciones[i].innerHTML != "-")
                operaciones[i].setAttribute("disabled", "");
        }
    });
    /* Operaciones */
    btnSuma.addEventListener("click", function () {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerText;
            pantalla.value += acumulador;
            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado
            var botones = document.getElementsByTagName("button");
            for (var i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }
        }
        else {
            acumulador += this.innerText;
            pantalla.value = acumulador;
        }
    });
    btnResta.addEventListener("click", function () {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerText;
            pantalla.value += acumulador;
            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado
            var botones = document.getElementsByTagName("button");
            for (var i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }
        }
        else {
            acumulador += this.innerText;
            pantalla.value = acumulador;
        }
    });
    btnMultiplicacion.addEventListener("click", function () {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += "*";
            pantalla.value += acumulador;
            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado
            var botones = document.getElementsByTagName("button");
            for (var i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }
        }
        else {
            acumulador += "*";
            pantalla.value = acumulador;
        }
    });
    btnDivision.addEventListener("click", function () {
        if (resultado != "") {
            pantalla.value = "";
            acumulador = resultado;
            acumulador += this.innerHTML;
            pantalla.value += acumulador;
            // Se podrán pulsar los botones cuando se haya especificado una operación después de obtener un resultado
            var botones = document.getElementsByTagName("button");
            for (var i = 0; i < botones.length; i++) {
                if (botones[i].getAttribute("disabled") == "") {
                    botones[i].removeAttribute("disabled");
                }
            }
        }
        else {
            acumulador += this.innerHTML;
            pantalla.value = acumulador;
        }
    });
    btnResultado.addEventListener("click", function () {
        pantalla.value = "";
        resultado = eval(acumulador);
        pantalla.value = resultado;
    });
});
function habilitarOperaciones(operaciones) {
    for (var i = 0; i < operaciones.length; i++) {
        if (operaciones[i].innerHTML != "-")
            operaciones[i].removeAttribute("disabled");
    }
}
