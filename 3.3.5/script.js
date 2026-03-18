let podminka = !false;

podminka = true && true;

podminka = false || true;

console.log(podminka);

// podminka přes if

let number = 10;
let message;

if (number > 0) {
    message = "Kladné číslo";
} else {
    message = "není kladné";
}

console.log(message);

// druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Není kladné";

console.log(message2);