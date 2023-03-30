let menu = prompt("Este es el menu de hoy \n-sancocho\n -bandeja paisa\n -lechona\n -tamal\n por favor escoja uno:");
switch (menu) {
    case "sancocho":
        console.log("su plato estara en 20 minutos");
        break;
    case "bandeja paisa":
        console.log("su plato estara en 30 minutos");
        break;
    case "lechona":
        console.log("su plato estara en 10 minutos");
        break;
    case "tamal":
        console.log("su plato estara en 1 hora")
        break;
    default:
        console.log("su plato no esta en el menu")
        break;
}