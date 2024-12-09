const display = document.getElementById("display");

display.addEventListener("keypress", function (event) {
    const allowedKeys = "0123456789.+-*/";
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});

display.addEventListener("input", function () {
    display.value = display.value.replace("/[^0-9.+\-*/]/g,");
});

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        resetOnNextInput = true;
    } catch {
        display.value = "Erro";
        resetOnNextInput = true;
    }
}

let resetOnNextInput = false;

function appendValue(value) {
    if (resetOnNextInput) {
        display.value = "";
        resetOnNextInput = false;
    }
    display.value += value;
}


