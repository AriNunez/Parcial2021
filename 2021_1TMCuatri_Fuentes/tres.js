/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

Ariel Nuñez- Ejercicio 3 Parcial 2021
*/
function mostrar()
{
	var nombreIngresado;
	var estadoCivilIngresado;
	var edadIngresado;
	var temperaturaCorporalIngresado;
	var sexoIngresado;
	var precioPorPasajero = 600;
	var respuestaConfirm = true;

	var contadorViudoTerceraEdad = 0;
	var contadorTerceraEdad = 0;

	var nombreSolteraMasJoven;
	var edadSolteraMasJoven;
	var flagSolteraMasJoven = false;

	var contadorPasajerosTotal = 0;
	var precioTotalSinDescuento;

	var descuento = -25;
	var descuentoAplicado;
	var precioFinalConDescuento;

	do
	{
		nombreIngresado = prompt("Ingrese el nombre (no se permite números)");
		while (isNaN (nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error, reingrese el nombre (no se permite números)");
		}

		estadoCivilIngresado = prompt ("Ingrese el estado civil (soltero / casado / viudo)");
		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt ("Error, reingrese el estado civil (soltero / casado / viudo)");
		}

		edadIngresado = parseInt(prompt("Ingrese la edad (solo mayores de edad)"));
		while (!(edadIngresado > 17 && edadIngresado < 101))
		{
			edadIngresado = parseInt(prompt("Error, reingrese la edad (solo mayores de edad)"));
		}

		temperaturaCorporalIngresado = parseInt(prompt("Ingrese la temperatura corporal (entre 35 y 42)"));
		while (!(temperaturaCorporalIngresado > 34 && temperaturaCorporalIngresado < 43))
		{
			temperaturaCorporalIngresado = parseInt(prompt("Error, reingrese la temperatura corporal (entre 35 y 42)"));
		}

		sexoIngresado = prompt ("Ingrese el sexo (femenino / masculino)");
		while (sexoIngresado != "femenino" && sexoIngresado != "masculino")
		{
			sexoIngresado = prompt ("Error, reingrese el sexo (femenino / masculino)");
		}

		contadorPasajerosTotal++;

		switch (estadoCivilIngresado) {
			case "soltero":
				if (sexoIngresado == "femenino")
				{
					if (flagSolteraMasJoven == false || edadIngresado < edadSolteraMasJoven)
					{
						nombreSolteraMasJoven = nombreIngresado;
						edadSolteraMasJoven = edadIngresado;
						flagSolteraMasJoven = true;
					}
				}
				break;

			case "viudo":
				if (edadIngresado > 59)
				{
					contadorViudoTerceraEdad++;
				}
				break;
		
		}

		if (edadIngresado > 59)
		{
			contadorTerceraEdad++;
		}

		respuestaConfirm = confirm("¿Desea continuar ingresando?");
	}while(respuestaConfirm)

	if(contadorViudoTerceraEdad > 0)
	{
		console.log ("A) La cantidad de personadas viudas de más de 60 años es "+contadorViudoTerceraEdad);
	}

	if (flagSolteraMasJoven == true)
	{
		console.log ("B)La mujer soltera más joven lleva por nombre "+nombreSolteraMasJoven+" y por edad "+edadSolteraMasJoven);
	}

	if (contadorPasajerosTotal > 0)
	{
		precioTotalSinDescuento = precioPorPasajero * contadorPasajerosTotal;

		console.log ("C)El precio total del viaje sin descuento es "+precioTotalSinDescuento);
	}

	if (contadorPasajerosTotal > 0)
	{
		if (contadorTerceraEdad > (contadorPasajerosTotal / 2))
		{
			descuentoAplicado = precioTotalSinDescuento * descuento / 100;
			precioFinalConDescuento = precioTotalSinDescuento + descuentoAplicado;
			console.log ("D) El precio final con descuento es "+precioFinalConDescuento);
		}
	}

}
