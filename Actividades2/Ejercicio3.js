let numherm = prompt("Introduce el numero hermanos");
let cantidad = prompt("Introduce la cantidad del importe");
if(numherm >= 3)
{
    alert(cantidad * 0.15);
}
else if (numherm > 0)
{
    alert(cantidad * 0.05);
}
else
    alert(cantidad);