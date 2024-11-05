// script.js

// Affiche le contenu de la calculatrice
function insert(value) {
    document.getElementById("display").value += value;
}

// Efface l'écran
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Supprime le dernier caractère
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Effectue le calcul
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erreur";
    }
}

// Fonction de calcul de factoriel
function calculateFactorial() {
    const display = document.getElementById("display");
    let num = parseInt(display.value);
    if (num < 0) {
        display.value = "Erreur";
        return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    display.value = result;
}

// Fonction trigonométrique (sin, cos, tan)
function calculateTrig(func) {
    const display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (func === "sin") {
        display.value = Math.sin(value);
    } else if (func === "cos") {
        display.value = Math.cos(value);
    } else if (func === "tan") {
        display.value = Math.tan(value);
    }
}

// Calcul du logarithme
function calculateLog() {
    const display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (value <= 0) {
        display.value = "Erreur";
    } else {
        display.value = Math.log(value);
    }
}

// Calcul de l'exponentielle
function calculateExp() {
    const display = document.getElementById("display");
    display.value = Math.exp(parseFloat(display.value));
}

// Calcul de la racine carrée
function calculateSqrt() {
    const display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (value < 0) {
        display.value = "Erreur";
    } else {
        display.value = Math.sqrt(value);
    }
}
