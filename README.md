# Calculator 

A simple yet functional calculator webpage built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations through an interactive graphical interface. 

## Features

### HTML

-   **Structure:**
    -   The calculator is built within a `div` container for styling and positioning.
    -   An `input` field displays the input and results.
    -   Buttons for digits (0-9), operators (+, -, \*, /, %), decimal point, equal sign, clear (AC), and delete (DEL) are defined using `<button>` elements.

-   **Semantic Markup:**
    -   Appropriate use of semantic elements like `h1` for the title helps in better organization and accessibility.

### CSS

-   **Styling:**
    -   The calculator is styled with a dark background, contrasting button colors, and rounded corners for a visually appealing look.
    -   Buttons change color slightly on hover for a subtle interactive effect.
    -   `@media` queries are used to make the calculator responsive, adjusting layout and font sizes for different screen widths.

### JavaScript

-   **Functionality:**
    -   The script handles user input from button clicks and updates the display accordingly.
    -   It performs basic arithmetic operations (addition, subtraction, multiplication, division) and percentage calculations.
    -   The `eval()` function is **not used** for security reasons. Instead, a custom calculation logic is implemented.
    -   The `clearAll()`, `deleteOne()`, and `display()` functions provide clear functionalities.
    -   Keyboard support is implemented for a more convenient user experience.

## Functionality

-   **Input:** Users can input numbers and operators by clicking the on-screen buttons or using their keyboard.
-   **Display:** The input and calculation results are displayed in the input field.
-   **Operations:**
    -   Basic arithmetic operations: addition, subtraction, multiplication, division.
    -   Percentage calculation.
    -   Clear button (AC) to reset the calculator.
    -   Delete button (DEL) to remove the last entered character.
-   **Calculation:** Pressing the "=" button or the "Enter" key calculates the result of the entered expression.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Click the calculator buttons to input numbers and operators.
3.  Press the "=" button or "Enter" key to calculate the result.

## Future Enhancements

-   Implement advanced mathematical functions (e.g., square root, trigonometric functions).
-   Add support for keyboard shortcuts for operators and functions.
-   Store calculation history.
-   Implement error handling for invalid expressions (e.g., division by zero).
-   Add the ability to switch between different number systems (e.g., binary, hexadecimal).

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to fork the repository and submit a pull request.
