let n1 = parseInt(prompt("ingrese un numero"));
let n2 = n1 % 5 == 0;

switch (n2) {
    case true:
        console.log("su numero es divisible entre 5");
        break;
    case false:
        console.log("su numero no es divisible entre 5");
        break;

    default:
        break;
}