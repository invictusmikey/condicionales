let longitud = parseFloat(prompt("ingrese la medida"))
let original = prompt("ingrese unidad de medida de su longitud")
let destino = prompt("ingrese la unidad de medida destino")


switch (destino) {
    case "mm":
        resultado = longitud / 1000;
        console.log("su nueva medida es", resultado, "mm")
        break;
    case "cm":
        resultado = longitud / 100;
        console.log("su nueva medida es", resultado, "cm")
        break;
    case "m":
        resultado = longitud / 10;
        console.log("su nueva medida es", resultado, "m")
        break;
    case "km":
        resultado = longitud / 1000;
        console.log("su nueva medida es", resultado, "km")
        break;
    default:
        console.log('Unidad de medida de origen inválida');
        break;
}
switch (original) {
    case "mm":
        resultado = longitud * 1000;
        console.log("su nueva medida es", resultado, "mm")
        break;
    case "cm":
        resultado = longitud * 100;
        console.log("su nueva medida es", resultado, "cm")
        break;
    case "m":
        resultado = longitud * 10;
        console.log("su nueva medida es", resultado, "m")
        break;
    case "km":
        resultado = longitud * 1000;
        console.log("su nueva medida es", resultado, "km")
        break;
    default:
        console.log('Unidad de medida de origen inválida');
        break;
}