const calculator = (function () {
    let displayValue = '0';

    function updateDisplay() {
        document.getElementById('display').innerText = displayValue;
    }

    function clearDisplay() {
        console.log('Clear Display');
        displayValue = '0';
        updateDisplay();
    }
    

    function appendToDisplay(value) {
        if (displayValue === '0') {
            displayValue = value;
        } else {
            displayValue += value;
        }
        updateDisplay();
    }

    function calculate() {
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
        updateDisplay();
    }
    function squareRoot() {
        // Utiliza la función Math.sqrt para calcular la raíz cuadrada
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        updateDisplay();
    }

    return {
        updateDisplay,
        clearDisplay,
        appendToDisplay,
        calculate,
        squareRoot
    };
})();
function handleKeyPress(event) {
    const key = event.key;

    // Números del teclado (0-9)
    if (/^[0-9]$/.test(key)) {
        calculator.appendToDisplay(key);
    }

    // Operadores y teclas especiales
    switch (key) {
        case 'Enter':
            calculator.calculate();
            break;
        case '.':
            calculator.appendToDisplay('.');
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            calculator.appendToDisplay(key);
            break;
        case 'Backspace':
            calculator.clearDisplay();
            break;
        case 'Escape':
            calculator.clearDisplay();
            break;
        case 's':
            calculator.squareRoot();
            break;
    }
}

// Agrega el evento keydown al documento
document.addEventListener('keydown', handleKeyPress);
// Function to open the welcome modal
function openModal() {
    document.getElementById('welcomeModal').style.display = 'block';
}

// Function to close the welcome modal
function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}


// Display the welcome modal when the page loads
window.onload = function () {
    openModal();
};

