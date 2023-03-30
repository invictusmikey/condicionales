let edad = parseInt(prompt("ingrese su edad"));
edad2 = edad >= 18;
switch (edad2) {
    case true:
        console.log("usted es mayor de edad");
        break;
    case false:
        console.log("usted es menor de edad");
        break;
    default:
        break;
}