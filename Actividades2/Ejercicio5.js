let num = prompt("Introduce un numero");
let mensaje;
if (num % 2 == 0)
{
    mensaje = "El numero introducido es par";
}
else
{
    mensaje = "El numero introducido es impar";
}


if(num % 3 == 0)
{
    mensaje += ", el numero introducido es multiplo de 3";
}

if(num % 5 == 0)
{
    mensaje += ", el numero introducido es multiplo de 5";
}
alert(mensaje);