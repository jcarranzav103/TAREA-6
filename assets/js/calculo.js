function mostrarValor() {
    var valor = document.getElementById("rango").value;
    document.getElementById("valor").innerHTML = valor;
}

function montoPago() {
    var campoEntrada = document.getElementById('monthlyPayment');

    var hv= parseFloat(document.getElementById("homeValue").value);  //Valor de la vivienda
    var ms = parseFloat(document.getElementById("amountRequired").value); //Monto solicitado
    var tm = parseFloat(document.getElementById("interestRate").value); //Tasa de interés mensual
    var p = parseInt(document.getElementById("rango").value * 12); //Plazo en meses

    var pm = ms*((tm/100) * Math.pow((1+(tm/100)),p)) / (Math.pow((1+(tm/100)),p)- 1); //Pago mensual

    if (pm>0) {
        campoEntrada.value=pm;
        miModal.show();  
         event.preventDefault();
    } 
   
    

} 