let n1 = parseInt(prompt("deme un numero del 1 al 15"))
let n2 = n1 / n1 == 0
switch (n2) {
    case true:
        console.log("su numero es primo")
        break;
    case false:
        console.log("su numero no es primo")
        break;

    default:
        n1 > 15
        console.log("su numero es mayor de 15")

        break;
}