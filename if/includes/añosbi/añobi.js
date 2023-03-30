let año = parseInt(prompt("ingrese el año"));
if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
    alert("su año es bisiesto");
} else {
    alert("su año no es bisiesto");
}