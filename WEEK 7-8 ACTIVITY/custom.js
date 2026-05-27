// Helper function to fetch and convert inputs
function getInputs() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}


// Helper function to update the DOM result
function updateResult(value) {
    document.getElementById('result').textContent = 'Result: ' + value;
}


// 1. Addition
document.getElementById('addBtn').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = num1 + num2;
    updateResult(result);
});


// 2. Subtraction
document.getElementById('subBtn').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = num1 - num2;
    updateResult(result);
});


// 3. Multiplication
document.getElementById('mulBtn').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
    const result = num1 * num2;
    updateResult(result);
});


// 4. Division
document.getElementById('divBtn').addEventListener('click', function() {
    const { num1, num2 } = getInputs();
   
    // Check for division by zero to avoid showing 'Infinity'
    if (num2 === 0) {
        updateResult("Error (Cannot divide by 0)");
    } else {
        const result = num1 / num2;
        updateResult(result);
    }
});


