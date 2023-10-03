let nombre = prompt("Introduce tu nombre");
let apellidos = prompt("Introduce tus apellidos");
let salario = parseFloat(prompt("Introduce tu salario"));
let edad = parseInt(prompt("Introduce tu edad"));
let sumsal
let total
if(salario >= 2000)
{
    total = salario;
}
else if(salario > 1000 && salario < 2000)
{
    if(edad > 45)
    {
        sumsal = salario * 0.03;
        total = salario + sumsal;
    }
    else
    {
        sumsal = salario * 0.10;
        total = salario + sumsal;
    }
}
else
{
    if(edad < 30)
    {
        total = 1100;
    }
    else if(edad >= 30 && edad <= 45)
    {
        sumsal = salario * 0.03;
        total = salario + sumsal;
    }
    else
    {
        sumsal = salario * 0.15;
        total = salario + sumsal;
    }
}

alert(nombre + " " +apellidos + ", edad:" + edad + " total:" + total);