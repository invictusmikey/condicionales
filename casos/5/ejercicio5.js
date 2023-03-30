let n1 = parseInt(prompt("ingrese un numero"));
let n2 = n1 % 2 == 0;

switch (n2) {
    case true:
        console.log("su numero es par");
        break;
    case false:
        console.log("su numero es impar");
        break;

    default:
        break;
}