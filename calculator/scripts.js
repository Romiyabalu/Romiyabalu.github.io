const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
        display.value = firstOperand;
    } else {
        secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
        display.value = secondOperand;
    }
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand !== null) {
        compute();
    }

    currentOperator = operator;
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '';
}

function compute() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }

        firstOperand = result;
        secondOperand = null;
        currentOperator = null;
        display.value = result;
    }
}