let n1 = parseInt(prompt("deme el primer numero"));
let n2 = parseInt(prompt("deme el segundo numero"));
switch (true) {
    case n1 > n2:
        console.log(n1, "es mayor que", n2);

        break;
    case n2 > n1:
        console.log(n2, "es mayor que", n1)

        break;

    default:
        console.log("sus numeros son iguales");

        break;
}