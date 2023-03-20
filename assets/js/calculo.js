var VSalarioMinimo = document.getElementById('minimumSalary');
var vPagoMensual = document.getElementById('monthlyPayment');

function mostrarValor() {
    var valor = document.getElementById("rango").value;
    document.getElementById("valor").innerHTML = valor;
}

function maximoSolicitado(){
    var homeValue = document.getElementById("homeValue").value;
    var amountRequired = parseFloat(document.getElementById("amountRequired").value);
    var calcular = (homeValue * 80)/100;

    if (amountRequired>calcular) {
        alert("El monto requerido debe ser maximo del 80% del valor de la casa");
        document.getElementById("amountRequired").value='';
    }
}


function pagoMensual() {


    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var rango = parseInt(document.getElementById("rango").value * 12); //Plazo en meses
    var amountRequired = parseFloat(document.getElementById("amountRequired").value);

    var ms = amountRequired; //Monto solicitado
    var tm = interestRate; //Tasa de interés mensual
    var p = rango;
    var pm = 0;

    var pmC1 = ms * ((tm / 100) * Math.pow((1 + (tm / 100)), p));
    var pmC2 = (Math.pow((1 + (tm / 100)), p) - 1);

    pm = pmC1 / pmC2;

    vPagoMensual.value = pm;
    VSalarioMinimo.value = pm / 0.40


    return pm; //Pago mensual

}

function pagoMinimo() {
    var pagoMinimo = 0;
    return pagoMinimo = pagoMensual() / 0.40;
}

function pagoDetalle() {

    var vName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Birthdate = document.getElementById("Birthdate").value;
    var netSalary = document.getElementById("netSalary").value;
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var rango = parseInt(document.getElementById("rango").value * 12); //Plazo en meses
    var homeValue = document.getElementById("homeValue").value;
    var amountRequired = parseFloat(document.getElementById("amountRequired").value);
    var pFinance = parseFloat(homeValue) / parseFloat(amountRequired);

    var miMensaje1 = document.getElementById("miMensaje1");
    var miMensaje2 = document.getElementById("miMensaje2");
    var miMensaje3 = document.getElementById("miMensaje3");
    var miMensaje4 = document.getElementById("miMensaje4");
    var miMensaje5 = document.getElementById("miMensaje5");
    var miMensaje6 = document.getElementById("miMensaje6");
    var miMensaje7 = document.getElementById("miMensaje7");
    var miMensaje8 = document.getElementById("miMensaje8");
    var miMensaje9 = document.getElementById("miMensaje9");
    var miMensaje10 = document.getElementById("miMensaje10");
    var miMensaje11 = document.getElementById("miMensaje11");
    var miMensaje12 = document.getElementById("miMensaje12");
    var miMensaje13 = document.getElementById("miMensaje13");

    if (pagoMensual() > 0) {


        var card = document.getElementById("card");
        card.style.display = "block";

        miMensaje1.textContent = email;
        miMensaje2.textContent = vName;
        miMensaje3.textContent = Birthdate;
        miMensaje4.textContent = netSalary;
        miMensaje5.textContent = homeValue;
        miMensaje6.textContent = amountRequired;
        miMensaje7.textContent = rango;
        miMensaje8.textContent = interestRate;
        miMensaje9.textContent = pagoMensual();
        miMensaje10.textContent = pagoMinimo();
        miMensaje11.textContent = pFinance;



        if (netSalary >= pagoMinimo()) {
            miMensaje12.textContent = "Monto de salario suficiente para el crédito.";
        } else {
            miMensaje12.textContent = "Monto de salario insuficiente.";
        }

        const fechaNacimiento = new Date(document.getElementById("Birthdate").value);
        const edadEnMilisegundos = Date.now() - fechaNacimiento.getTime();
        const edad = new Date(edadEnMilisegundos).getFullYear() - 1970;



        if (edad > 22 && edad < 55) {
            miMensaje13.textContent = "Cliente con edad suficiente para crédito.";
        } else {
            miMensaje13.textContent = "Cliente no califica para crédito por edad";
        }

    }

}

function memorialocal() {


    if (typeof Storage !== "undefined") {

        var vName = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var Birthdate = document.getElementById("Birthdate").value;
        var netSalary = document.getElementById("netSalary").value;
        var interestRate = parseFloat(document.getElementById("interestRate").value);
        var rango = parseInt(document.getElementById("rango").value); //Plazo en meses
        var homeValue = document.getElementById("homeValue").value;
        var amountRequired = parseFloat(document.getElementById("amountRequired").value);
        var pFinance = parseFloat(homeValue) / parseFloat(amountRequired);

        localStorage.setItem("email", email);
        localStorage.setItem("name", vName);
        localStorage.setItem("Birthdate", Birthdate);
        localStorage.setItem("netSalary", netSalary);
        localStorage.setItem("homeValue", homeValue);
        localStorage.setItem("amountRequired", amountRequired);
        localStorage.setItem("rango", rango);
        localStorage.setItem("interestRate", interestRate);

        alert("Los datos han sido guardados en la memoria local.");



    }

}

function cargapantalla() {
    if (typeof Storage !== "undefined") {

        var email = localStorage.getItem("email");
        var vName = localStorage.getItem("name");
        var Birthdate = localStorage.getItem("Birthdate");
        var netSalary = localStorage.getItem("netSalary");
        var homeValue = localStorage.getItem("homeValue");
        var amountRequired = localStorage.getItem("amountRequired");
        var rango = localStorage.getItem("rango");
        var interestRate = localStorage.getItem("interestRate");

        document.getElementById("email").value = email;
        document.getElementById("name").value = vName;
        document.getElementById("Birthdate").value = Birthdate;
        document.getElementById("netSalary").value = netSalary;
        document.getElementById("homeValue").value = homeValue;
        document.getElementById("amountRequired").value = amountRequired;
        document.getElementById("rango").value = rango;
        document.getElementById("interestRate").value = interestRate;

        mostrarValor();
    }
}

function interes(tasaMensual, mes, pagoMensual, montoSolicitado) {
    var vInteres = 0;
    var amortiza = montoSolicitado;

    for (var i = 0; i < mes; i++) {

        vInteres = (amortiza * (tasaMensual / 100));
        amortiza = amortiza - (pagoMensual - vInteres);

    }
    return vInteres;
}

function cargarTabla() {
    var table = document.getElementById("contenedor-tabla");
    var boton = document.getElementById("btnProjection");


    if (table.style.display == "none") {
        boton.value = 'Hide projection';
        table.style.display = "block";

        var cantMes = parseInt(document.getElementById("rango").value * 12); //Plazo en meses
        var pagoMensual = parseFloat(document.getElementById("monthlyPayment").value);//pago mensal
        var interestRate = parseFloat(document.getElementById("interestRate").value);//Tasa mensual
        var amountRequired = parseFloat(document.getElementById("amountRequired").value);//Monto solicitado
        var ObPago = { mes: 0, pago: 0, interes: 0, amortizacion: 0, saldo: 0 };//Creamos el objeto pagos
        var vSaldo = amountRequired;
        var ArregloPagos = [];



        for (let i = 0; i < cantMes; i++) {


            var nuevoPago = Object.create(ObPago);
            nuevoPago.mes = i + 1;
            nuevoPago.pago = parseFloat(pagoMensual.toFixed(2));
            nuevoPago.interes = parseFloat(interes(interestRate, nuevoPago.mes, pagoMensual, amountRequired).toFixed(2));
            nuevoPago.amortizacion = parseFloat((pagoMensual - nuevoPago.interes).toFixed(2));
            nuevoPago.saldo = vSaldo - nuevoPago.amortizacion;
            ArregloPagos.push(nuevoPago);
            vSaldo = ArregloPagos[i].saldo;


        }


        var tabla = document.createElement("table");
        tabla.classList.add('table', 'table-hover');
        var encabezado = document.createElement("thead");
        var filaEncabezado = document.createElement("tr");
        var cuerpo = document.createElement("tbody");

        // Crear encabezado de la tabla
        var columnas = ["Mes", "Pago Mensual", "Interes", "Amortización", "Saldo"];
        columnas.forEach(function (columna) {
            var celdaEncabezado = document.createElement("th");
            celdaEncabezado.textContent = columna;
            filaEncabezado.appendChild(celdaEncabezado);
        });
        encabezado.appendChild(filaEncabezado);
        tabla.appendChild(encabezado);

        // Crear cuerpo de la tabla
        ArregloPagos.forEach(function (pago) {
            var filaCuerpo = document.createElement("tr");
            Object.keys(pago).forEach(function (columna) {
                var celdaCuerpo = document.createElement("td");
                celdaCuerpo.textContent = pago[columna];
                filaCuerpo.appendChild(celdaCuerpo);
            });
            cuerpo.appendChild(filaCuerpo);
        });
        tabla.appendChild(cuerpo);

        // Agregar tabla al contenedor
        var contenedorTabla = document.getElementById("contenedor-tabla");
        contenedorTabla.innerHTML = "";
        contenedorTabla.appendChild(tabla);

    } else {

        table.style.display = "none";
        boton.value = 'Show projection';
    }



}


window.onload = cargapantalla;

