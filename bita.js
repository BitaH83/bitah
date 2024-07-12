function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 = parseInt(document.getElementById("num2").value);
  
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          result = " Cannot divide by zero!";
        }
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        result = "Invalid operator!";
    }
  
    document.getElementById("result").innerHTML = "حاصل: " + result;
  }