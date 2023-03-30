let a1 = parseFloat(prompt("deme el primer angulo"));
let a2 = parseFloat(prompt("deme el segundo angulo"));
let a3 = parseFloat(prompt("deme el tercer angulo"));
let si = a1 + a2 + a3 == 180
switch (si) {
    case true:
        console.log("sus angulos corresponden a un triangulo");
        break;
    case false:
        console.log("sus angulos no corresponden a un triangulo");
        break;

    default:
        console.log("ni idea");
        break;
}