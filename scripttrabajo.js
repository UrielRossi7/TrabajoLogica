// Empezamos a usar la función calcular unidades //

function calcular_unidades(form){

// Definimos las constantes //

    const pulgada = 2.54;
    const libra = 0.453592;
    const milla = 1.60934

    // Hacemos los cálculos //

    var cant_pulgada = parseInt(form.pulgada.value);
    var cant_libra = parseInt(form.libra.value);
    var cant_fahrenheit = parseInt(form.fahrenheit.value);
    var cant_milla = parseInt(form.milla.value);

    var centimetro = cant_pulgada * pulgada;
    var kilogramo = cant_libra * libra;
    var celsius = ((cant_fahrenheit - 32) * 5) / 9;
    var kilometro = cant_milla * milla;

    // Mostramos el resultado en la casilla //

    console.log(centimetro);
    form.tot_cm.value = centimetro;

    console.log(kilogramo);
    form.tot_kg.value = kilogramo;

    console.log(celsius);
    form.tot_cel.value = celsius;

    console.log(kilometro);
    form.tot_km.value = kilometro;


}