let contraseña = prompt("Ingrese su contraseña:");
if (contraseña.length >= 8 && contraseña.length <= 15 && contraseña.includes(" ")) {
    alert("su contraseña es valida")
} else {
    alert("su contraseña es invalida")
}