let numero;

while (true) {
    numero = parseInt(prompt("Digite um número: "), 10);
    if (numero === 2) {
        alert("Número correto! Página liberada.");
        break;
    } else {
        alert("Número incorreto! Tente novamente.");
    }
}