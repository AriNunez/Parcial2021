/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota

Ariel Nuñez- Ejercicio 2
*/
function mostrar()
{
  var nombreIngresado;
  var tipoCursadaIngresado;
  var cantidadMateriasIngresado;
  var sexoIngresado;
  var notaPromedioIngresado;
  var edadIngresado;
  var respuestaConfirm = true;

  var contadorMasculino = 0;
  var contadorFemenino = 0;
  var contadorNobinario = 0;
  var acumuladorNotaMasculino = 0;
  var acumuladorNotaFemenino = 0;
  var acumuladorNotaNobinario = 0;
  var promedioMasculino;
  var promedioFemenino;
  var promedioNobinario;

  var nombreJovenLibre;
  var edadMasJovenLibre;
  var flagJovenLibre = false;

  var edadMasMateriasNoRemotas;
  var nombreMasMateriasNoRemotas;
  var masMateriasNoRemotas;
  var flagMasMateriasNoRemotas = false;

  var flagMejorPromedioNoMasculino = false;
  var nombrePromedioNoMasculino;
  var mejorPromedioNoMasculino;

  do
  {
    nombreIngresado = prompt ("Ingrese el nombre (no se admiten números)");
    while (isNaN (nombreIngresado)== false)
    {
      nombreIngresado = prompt ("Error, reingrese el nombre (no se admiten números)");
    }

    tipoCursadaIngresado = prompt ("Ingrese el tipo de cursada (libre / presencial / remota");
    while (tipoCursadaIngresado != "libre" && tipoCursadaIngresado != "presencial" && tipoCursadaIngresado != "remota")
    {
      tipoCursadaIngresado = prompt ("Error, reingrese el tipo de cursada (libre / presencial / remota");
    }

    cantidadMateriasIngresado = parseInt(prompt("Ingrese la cantidad de materias (más de 0 y menos de 8)"));
    while (!(cantidadMateriasIngresado > 0 && cantidadMateriasIngresado < 8))
    {
      cantidadMateriasIngresado = parseInt(prompt("Error, reingrese la cantidad de materias (más de 0 y menos de 8)"));
    }

    sexoIngresado = prompt ("Ingrese el tipo de cursada (femenino / masculino / no binario");
    while (sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario")
    {
      sexoIngresado = prompt ("Error, reingrese el tipo de cursada (femenino / masculino / no binario");
    } 

    notaPromedioIngresado = parseInt(prompt("Ingrese la nota promedio (entre 0 y 10)"));
    while (!(notaPromedioIngresado > 0 && notaPromedioIngresado < 11))
    {
      notaPromedioIngresado = parseInt(prompt("Error, reingrese la nota promedio (entre 0 y 10)"));
    }

    edadIngresado = parseInt(prompt("Ingrese la edad (debe ser mayor de edad)"));
    while  (!(edadIngresado > 17 && edadIngresado < 91))
    {
      edadIngresado = parseInt(prompt("Error, reingrese la edad (debe ser mayor de edad)"));
    }

    switch (sexoIngresado) 
    {
      case "femenino":
        contadorFemenino++;
        acumuladorNotaFemenino = acumuladorNotaFemenino + notaPromedioIngresado;
        break;

      case "masculino":
        contadorMasculino++;
        acumuladorNotaMasculino = acumuladorNotaMasculino + notaPromedioIngresado;
        break;

      case "no binario":
        contadorNobinario++;
        acumuladorNotaNobinario = acumuladorNotaNobinario + notaPromedioIngresado;
        break;
    }

    if (sexoIngresado != "masculino")
    {
      if(flagMejorPromedioNoMasculino == false || notaPromedioIngresado > mejorPromedioNoMasculino)
      {
        mejorPromedioNoMasculino = notaPromedioIngresado;
        nombrePromedioNoMasculino = nombreIngresado;
        flagMejorPromedioNoMasculino = true;
      }
    }
    

    if(tipoCursadaIngresado == "libre")
    {
      if (flagJovenLibre == false || edadIngresado < edadMasJovenLibre)
      {
        edadMasJovenLibre = edadIngresado;
        nombreJovenLibre = nombreIngresado;
        flagJovenLibre = true;
      }
    }

    if (tipoCursadaIngresado != "remota")
    {
      if(flagMasMateriasNoRemotas == false || cantidadMateriasIngresado > masMateriasNoRemotas)
      {
        masMateriasNoRemotas = cantidadMateriasIngresado;
        nombreMasMateriasNoRemotas = nombreIngresado;
        edadMasMateriasNoRemotas = edadIngresado;
        flagMasMateriasNoRemotas = true;
      }
    }

    respuestaConfirm = confirm ("¿Desea continuar ingresando?");
  }while (respuestaConfirm)

  if (contadorFemenino > 0)
  {
    promedioFemenino = acumuladorNotaFemenino / contadorFemenino;
    console.log ("C) El promedio de notas del sexo Femenino es "+promedioFemenino);
  }

  if (contadorMasculino > 0)
  {
    promedioMasculino = acumuladorNotaMasculino / contadorMasculino;
    console.log("C) El promedio de notas del sexo Masculino es "+promedioMasculino);
  }

  if (contadorNobinario > 0)
  {
    promedioNobinario = acumuladorNotaNobinario / contadorNobinario;
    console.log("C) El promedio de notas del sexo No Binario es "+promedioNobinario);
  }

  if (flagMejorPromedioNoMasculino == true)
  {
    console.log ("A) El nombre del mejor promedio no masculino es "+nombrePromedioNoMasculino);
  }

  if (flagJovenLibre == true)
  {
    console.log("B) El nombre del más joven de los alumnos entre los que dan libre es "+nombreJovenLibre);
  }

  if(flagMasMateriasNoRemotas == true)
  {
    console.log ("D) El alumno que cursa más materias que no sea de forma remota lleva por nombre "+nombreMasMateriasNoRemotas+" y por edad "+edadMasMateriasNoRemotas);
  }

}
