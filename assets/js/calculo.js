

function mostrarValor() {
    var valor = document.getElementById("rango").value;
    document.getElementById("valor").innerHTML = valor;
}

function montoPago() {
    var pagoMensual = document.getElementById('monthlyPayment'); //Campo para mostrar el pago mensual
    var salarioMinimo = document.getElementById('minimumSalary'); //Campo para mostrar el salario minimo
    const miMensaje1 = document.getElementById("miMensaje1"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje2 = document.getElementById("miMensaje2"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje3 = document.getElementById("miMensaje3"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje4 = document.getElementById("miMensaje4"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje5 = document.getElementById("miMensaje5"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje6 = document.getElementById("miMensaje6"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje7 = document.getElementById("miMensaje7"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje8 = document.getElementById("miMensaje8"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje9 = document.getElementById("miMensaje9"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje10 = document.getElementById("miMensaje10"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje11 = document.getElementById("miMensaje11"); //Campo para mostrar el mensaje de cumple o no
    const miMensaje12 = document.getElementById("miMensaje12"); //Campo para mostrar el mensaje de cumple con edad
    const miMensaje13 = document.getElementById("miMensaje13"); //Campo para mostrar el mensaje de cumple con edad


    var email = document.getElementById("email").value;  //Valor del email
    var name = document.getElementById("name").value;  //Valor del name
    var Birthdate = document.getElementById("Birthdate").value;
    var netSalary = document.getElementById("netSalary").value;
    var homeValue = document.getElementById("homeValue").value;
    var amountRequired = document.getElementById("amountRequired").value;
    var rango = document.getElementById("rango").value;
    var interestRate = document.getElementById("interestRate").value;
    var pFinance = parseFloat(homeValue) / parseFloat(amountRequired);

    var sn = parseFloat(document.getElementById("netSalary").value);  //Valor del salario neto
    var hv = parseFloat(document.getElementById("homeValue").value);  //Valor de la vivienda
    var ms = parseFloat(document.getElementById("amountRequired").value); //Monto solicitado
    var tm = parseFloat(document.getElementById("interestRate").value); //Tasa de interés mensual
    var p = parseInt(document.getElementById("rango").value * 12); //Plazo en meses

    var pmC1 = ms * ((tm / 100) * Math.pow((1 + (tm / 100)), p));
    var pmC2 = (Math.pow((1 + (tm / 100)), p) - 1);

    var pm = pmC1 / pmC2; //Pago mensual

    if (pm > 0) {

        pagoMensual.value = pm;
        salarioMinimo.value = pm / 0.40

        var card = document.getElementById("card");
        card.style.display = "block";

        miMensaje1.textContent = email;
        miMensaje2.textContent = name;
        miMensaje3.textContent = Birthdate;
        miMensaje4.textContent = netSalary;
        miMensaje5.textContent = homeValue;
        miMensaje6.textContent = amountRequired;
        miMensaje7.textContent = rango;
        miMensaje8.textContent = interestRate;
        miMensaje9.textContent = pagoMensual.value;
        miMensaje10.textContent = salarioMinimo.value;
        miMensaje11.textContent = pFinance;



        if (sn >= salarioMinimo.value) {
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

        var formulario = document.querySelector("form");


        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var Birthdate = document.getElementById("Birthdate").value;
        var netSalary = document.getElementById("netSalary").value;
        var homeValue = document.getElementById("homeValue").value;
        var amountRequired = document.getElementById("amountRequired").value;
        var rango = document.getElementById("rango").value;
        var interestRate = document.getElementById("interestRate").value;


        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
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
        var name = localStorage.getItem("name");
        var Birthdate = localStorage.getItem("Birthdate");
        var netSalary = localStorage.getItem("netSalary");
        var homeValue = localStorage.getItem("homeValue");
        var amountRequired = localStorage.getItem("amountRequired");
        var rango = localStorage.getItem("rango");
        var interestRate = localStorage.getItem("interestRate");

        document.getElementById("email").value = email;
        document.getElementById("name").value = name;
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
    

    if ( table.style.display == "none") {
        
        table.style.display = "block";
        
        var datos = [
            { mes: "1", pago: "2423", interes: 30, amortizacion: 30, saldo: 30 },
            { mes: "2", pago: "4324", interes: 30, amortizacion: 30, saldo: 30 },
            { mes: "3", pago: "32424", interes: 30, amortizacion: 30, saldo: 30 },
            { mes: "4", pago: "23424", interes: 30, amortizacion: 30, saldo: 30 },
            { mes: "5", pago: "324233", interes: 30, amortizacion: 30, saldo: 30 },
            { mes: "6", pago: "23434", interes: 30, amortizacion: 30, saldo: 30 }
        ];

        
    
        var tabla = document.createElement("table");
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
        datos.forEach(function (fila) {
            var filaCuerpo = document.createElement("tr");
            Object.keys(fila).forEach(function (columna) {
                var celdaCuerpo = document.createElement("td");
                celdaCuerpo.textContent = fila[columna];
                filaCuerpo.appendChild(celdaCuerpo);
            });
            cuerpo.appendChild(filaCuerpo);
        });
        tabla.appendChild(cuerpo);
    
        // Agregar tabla al contenedor
        var contenedorTabla = document.getElementById("contenedor-tabla");
        contenedorTabla.innerHTML = "";
        contenedorTabla.appendChild(tabla);
    
    }else {
       
        table.style.display = "none";
    }
   

    
}


window.onload = cargapantalla;

