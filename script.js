const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const toggleTheme = document.getElementById("toggleTheme");

let currentInput = "";

// CALCULATOR LOGIC
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    }
    else if (value === "=") {
      try {
        currentInput = currentInput
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");

        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    }
    else if (button.id !== "toggleTheme") {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// THEME TOGGLE
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleTheme.innerText =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});
