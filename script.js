// script.js
document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const calculateButton = document.getElementById('calculateButton');
    const factorialResult = document.getElementById('factorialResult');
    const fibonacciResult = document.getElementById('fibonacciResult');

    function calculateFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    function calculateFibonacci(num) {
        let sequence = [0, 1];
        for (let i = 2; i <= num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, num + 1);
    }

    calculateButton.addEventListener('click', () => {
        const num = parseInt(numberInput.value);
        if (isNaN(num) || num < 1) {
            alert('Por favor, insira um número inteiro positivo.');
            return;
        }
        const factorial = calculateFactorial(num);
        const fibonacci = calculateFibonacci(num);

        factorialResult.textContent = `Fatorial: ${factorial}`;
        fibonacciResult.textContent = `Sequência de Fibonacci: ${fibonacci.join(', ')}`;
    });
});
