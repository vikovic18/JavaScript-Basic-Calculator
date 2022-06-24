const firstNum = parseFloat(prompt("Enter a number: "));
const operator = prompt("Enter an operator: +, -, *, /");
const secondNum = parseFloat(prompt("Enter a second number: "));

if (operator == "+") {
    sum = firstNum + secondNum;
    alert("The result is " + sum);
} else if (operator == "-") {
    sum = firstNum - secondNum;
    alert("The result is " + sum);
} else if (operator == "*") {
    sum = firstNum * secondNum;
    alert("The result is " + sum);
}else if (operator == '/'){
    sum = firstNum / secondNum;
    alert('The result is ' + sum);
}
