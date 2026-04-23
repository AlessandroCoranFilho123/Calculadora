const display = document.getElementById("display");
const body = document.body;
const modeToggle = document.getElementById("mode-toggle");
let resetOnNextInput = false;

body.classList.add("dark-mode");

display.addEventListener("keypress", (event) => {
  const allowedKeys = "0123456789.+-*/";
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});

display.addEventListener("input", () => {
  display.value = display.value.replace(/[^0-9.+-/*]/g, "");
});

function appendValue(value) {
  if (resetOnNextInput) {
    display.value = "";
    resetOnNextInput = false;
  }
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
    const result = eval(display.value);
    
    if (result === undefined || isNaN(result)) throw new Error();
    display.value = Number.isInteger(result) ? result : result.toFixed(4).replace(/\.?0+$/, "");
    resetOnNextInput = true;
  } catch {
    display.value = "Erro";
    resetOnNextInput = true;
  }
}

modeToggle.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-mode");
  
  if (isDark) {
    body.classList.replace("dark-mode", "light-mode");
    modeToggle.textContent = "🌑";
  } else {
    body.classList.replace("light-mode", "dark-mode");
    modeToggle.textContent = "☀️";
  }
});