// Import JSDOM
const { JSDOM } = require('jsdom');

let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
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

// Mock the DOM environment using JSDOM
const dom = new JSDOM('<!DOCTYPE html><div id="display"></div>');
global.document = dom.window.document;
global.window = dom.window;

// Your tests go here
test('updateDisplay should update the display with the given value', () => {
    displayValue = '123';
    updateDisplay();
    expect(document.getElementById('display').innerText).toBe('123');
});

test('clearDisplay should set displayValue to "0" and update the display', () => {
    displayValue = '123';
    clearDisplay();
    expect(displayValue).toBe('0');
    expect(document.getElementById('display').innerText).toBe('0');
});

test('appendToDisplay should append the value to displayValue and update the display', () => {
    displayValue = '123';
    appendToDisplay('4');
    expect(displayValue).toBe('1234');
    expect(document.getElementById('display').innerText).toBe('1234');
});

test('calculate should evaluate the expression and update the display', () => {
    displayValue = '2+2';
    calculate();
    expect(displayValue).toBe('4');
    expect(document.getElementById('display').innerText).toBe('4');
});

test('calculate should handle errors and set displayValue to "Error"', () => {
    displayValue = 'invalid expression';
    calculate();
    expect(displayValue).toBe('Error');
    expect(document.getElementById('display').innerText).toBe('Error');
});
