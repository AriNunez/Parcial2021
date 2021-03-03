/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos

Ariel Nuñez-Ejercicio 1 Parcial 2021
*/

function mostrar()
{
    var nombreProducto;
    var tipoProducto;
    var precioProducto;
    var cantidadUnidadesProducto;
    var tipoInflamableProducto;
	var marcaProductoIngresado;

	var contadorAlcohol = 0;
	var contadorIAC = 0;
	var contadorQUAT = 0;
	var acumuladorAlcohol = 0;
	var acumuladorIAC = 0;
	var acumuladorQUAT = 0;
	var promedioAlcohol;
	var promedioIAC;
	var promedioQUAT;

	var acumuladorIgnifugo = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;

	var acumuladorIACMenor;

	var marcaMasCaro;
	var tipoMasCaro;
	var precioMasCaro;
	var flagMasCaro = false;

    for (var i = 0 ; i < 5 ; i++)
    {
        nombreProducto = prompt ("Ingrese el nombre del producto (no se admiten números)");
        while(isNaN(nombreProducto) == false)
        {
            nombreProducto = prompt ("Error, reingrese el nombre del producto (no se admiten números)");
        }

        tipoProducto = prompt ("Ingrese el tipo de producto (ALCOHOL / IAC / QUAT)");
        while (tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT")
        {
            tipoProducto = prompt ("Error, reingrese el tipo de producto (ALCOHOL / IAC / QUAT)");
        }

        precioProducto = parseInt(prompt("Ingrese el precio del producto (entre 100 y 300)"));
        while (!(precioProducto > 99 && precioProducto < 301))
        {
            precioProducto = parseInt(prompt("Error, reingrese el precio del producto (entre 100 y 300)"));
        }

        cantidadUnidadesProducto = parseInt(prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
        while (!(cantidadUnidadesProducto > 0 && cantidadUnidadesProducto < 1001 ))
        {
            cantidadUnidadesProducto = parseInt(prompt("Error, reingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
        }

        tipoInflamableProducto = prompt ("Ingrese el tipo de inflamable (ignifugo / combustible / explosivo)");
        while (tipoInflamableProducto != "ignifugo" && tipoInflamableProducto != "combustible" && tipoInflamableProducto != "explosivo")
        {
            tipoInflamableProducto = prompt ("Error, reingrese el tipo de inflamable (ignifugo / combustible / explosivo)");
        }

		marcaProductoIngresado = prompt ("Ingrese la marca (no se admiten números)");
		while (isNaN(marcaProductoIngresado) == false)
		{
			marcaProductoIngresado = prompt ("Error, reingrese la marca (no se admiten números)");
		}

        switch (tipoProducto) 
        {
            case "ALCOHOL":
                contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidadesProducto;
                break;

			case "IAC":
				contadorIAC++;
				acumuladorIAC = acumuladorIAC + cantidadUnidadesProducto;
				if (precioProducto < 201)
				{
					acumuladorIACMenor = acumuladorIACMenor + cantidadUnidadesProducto;
				}
				break;

			case "QUAT":
				contadorQUAT++;
				acumuladorQUAT = acumuladorQUAT + cantidadUnidadesProducto;
				break;
		}

		switch (tipoInflamableProducto) 
		{
			case "ignifugo":
				acumuladorIgnifugo = acumuladorIgnifugo + cantidadUnidadesProducto;
				break;
		
			case "combustible":
				acumuladorCombustible = acumuladorCombustible + cantidadUnidadesProducto;
				break;

			case "explosivo":
				acumuladorExplosivo = acumuladorExplosivo + cantidadUnidadesProducto;
		}

		if (flagMasCaro == false || precioProducto > precioMasCaro)
		{
			precioMasCaro = precioProducto;
			marcaMasCaro = marcaProductoIngresado;
			tipoMasCaro = tipoProducto;
			flagMasCaro =  true;
		}

    }//FIN FOR

	if (contadorAlcohol != 0)
	{
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		console.log ("A) El promedio de cantidad del tipo Alcohol es "+promedioAlcohol+"<br>");
	}

	if (contadorIAC != 0)
	{
		promedioIAC = acumuladorIAC / contadorIAC;
		console.log = ("A) El promedio de cantidad del tipo IAC es "+promedioIAC+"<br>");
	}

	if (contadorQUAT != 0)
	{
		promedioQUAT = acumuladorQUAT / contadorQUAT;
		console.log ("A) El promedio de cantidad del tipo QUAT es "+promedioQUAT+"<br>");
	}
	////////
	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo)
	{
		console.log ("B) El tipo de inflamable con más cantidad de unidades en total es Ignifugo <br>");
	}
	else
	{
		if(acumuladorCombustible > acumuladorExplosivo)
		{
			console.log ("B) El tipo de inflamable con más cantidad de unidades en total es Combustible <br>");
		}
		else
		{
			console.log ("B) El tipo de inflamable con más cantidad de unidades en total es Explosivo <br>");
		}
	}
	///////
	if (acumuladorIACMenor != 0)
	{
		console.log ("C) La cantidad de unidades de IAC con precio menor a 200 (inclusive) es "+acumuladorIACMenor+"<br>");
	}
	//////
	if (flagMasCaro == true)
	{
		console.log ("D) El producto más caro lleva por marca "+marcaMasCaro+" y por tipo "+tipoMasCaro);
	}

}//FIN FUNCION
