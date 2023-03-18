function mostrarValor() {
    var valor = document.getElementById("rango").value;
    document.getElementById("valor").innerHTML = valor;
}

function montoPago() {
    var miModal = new bootstrap.Modal(document.getElementById('miModal'));

    var hv=document.getElementById("homeValue").value;  //Valor de la vivienda
    var ms = document.getElementById("amountRequired").value; //Monto solicitado
    var tm = document.getElementById("interestRate").value; //Tasa de interés mensual
    var p = document.getElementById("rango").value * 12; //Plazo en meses

    var pm = ms*((tm/100) * Math.pow((1+(tm/100)),p)) / (Math.pow((1+(tm/100)),p)- 1); //Pago mensual
    miModal.show();
    document.getElementById("monthlyPayment").innerHTML = valor;

} 