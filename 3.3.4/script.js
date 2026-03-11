// Vložení podmínky
let isLoggedIn = true;
let isAdmin = false;

if (is isLoggedIn) {
    console.log("Vítej na stránce!")
    if (isAdmin) {
        console.log("Přístup do panelu admin povolen")
    } else {
        console.log("Přístup jako uživatel povolen")
    }
}


// Operátory

let age = 20;
let hasDriverLicense = true;

if (age >= 18 && hasDriverLicense) {
    console.log("Můžeš řídit") 
} else {
    console.log("řídit nemůžeš")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("je čas relaxovat")
} else {
    console.log("musíš se učit")
}

