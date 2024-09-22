const input = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Display values in calculator
function display(buttons) {
    return input.value += buttons;
}

// Clear all the text
function clearAll() {
    return input.value = "";
}

// Delete one by one
function deleteOne() {
    return input.value = input.value.slice(0, -1);
}

// calculate the value
function calculation() {
    // First handle percentages if present
    expression = input.value.replace(/%/g, '/100');

    // Use regex to split numbers and operators (handle +, -, *, /)
    let tokens = expression.split(/([+\-*/])/).filter(token => token.trim() !== "");

    // Parse the first number
    let currentValue = parseFloat(tokens[0]);

    // Loop through the operators and numbers and apply the operations
    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let nextValue = parseFloat(tokens[i + 1]);

        switch (operator) {
            case '+':
                currentValue += nextValue;
                break;
            case '-':
                currentValue -= nextValue;
                break;
            case '*':
                currentValue *= nextValue;
                break;
            case '/':
                if (nextValue === 0) {
                    throw new Error("Division by zero");
                }
                currentValue /= nextValue;
                break;
            default:
                throw new Error("Invalid operator");
        }
    }

    return input.value = currentValue;
}

// Listen for keyboard events and map to calculator functions
document.addEventListener('keydown', function (event) {
    const key = event.key; // Get the pressed key

    if (!isNaN(key)) {
        // If the key is a number
        display(key);
    } else if (key === '+') {
        display('+');
    } else if (key === '-') {
        display('-');
    } else if (key === '*') {
        display('*');
    } else if (key === '/') {
        display('/');
    } else if (key === 'Enter') {
        // 'Enter' key is for '='
        calculation();
    } else if (key === 'Backspace') {
        // 'Backspace' key for delete
        deleteOne();
    } else if (key === 'Escape') {
        // 'Escape' key for clear all (AC)
        clearAll();
    } else if (key === '.') {
        // '.' key for decimal point
        display('.');
    } else if (key === '%') {
        display('%');
    }
});