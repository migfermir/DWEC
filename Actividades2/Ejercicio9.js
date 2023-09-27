let num = parseInt(prompt("Introduce un numero"));
let total = 1;

while(num > 0)
{
    total *= num;
    num--;
}
alert(total);