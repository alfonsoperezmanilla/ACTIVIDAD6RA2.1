function mensaje(){
    var a;
    var b = prompt("Escribe el numero hasta el cual deses saber");
    for (a = 1; a <= b; a++) {
        document.write(a);
        if (a % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (a % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (a % 5 == 0) {
        document.write("<hr>");
    }
}
}