'use strit'

var acum=0
var contador_clientes=0

function calcular_promo(form){

    calc= pulgadas * 2.54

    var precio_kilo = 1700;
    var precio_medio = 1000;
    var precio_cuarto = 700;


    var cant_kilo = parseInt(form.kilo.value);
    var cant_medio = parseInt(form.medio.value);
    var cant_cuarto = parseInt(form.cuarto.value);

    var tot_kilo = cant_kilo * precio_kilo;
    var tot_medio = cant_medio * precio_medio;
    var tot_cuarto = cant_cuarto * precio_cuarto;

    var total_promo = tot_cuarto + tot_kilo + tot_medio;

    console.log(total_promo);
    form.total.value = total_promo;

    acum = acum + total_promo;
    contador_clientes= contador_clientes + 1;


    form.recaudacion.value = acum;
    form.clientes.value = contador_clientes;


}