let num1 = parseInt(prompt("Introduce un numero"));
let caracter = prompt("Introduce un caracter + ,- ,* o /");
let num2 = parseInt(prompt("Introduce otro numero"));

switch(caracter)
{
    case "+":
        alert(num1 + num2)
    break;
    case "-":
        alert(num1 - num2)
    break;
    case "*":
        alert(num1 * num2)
    break;
    case "/":
        alert(num1 / num2)
    break;
    default:
        alert("El caracter no es correcto");
}