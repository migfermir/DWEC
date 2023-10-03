let num1 = parseInt(prompt("Introduce un numero"));
let num2 =  parseInt(prompt("Introduce un numero"));

while(num1 != num2)
{
    if(num1 > num2)
    {
        num2 = parseInt(prompt("El numero del primer usuario es mayor. Vuelve a probar!"));
    }
    else
        num2 = parseInt(prompt("El numero del primer usuario es menor. Vuelve a probar!"));
}
alert("Correcto!!!");