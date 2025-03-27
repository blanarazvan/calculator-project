function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}



function operate (firstNumber, operator, secondNumber){
    switch(operator) {
        case "+":
            add(firstNumber,secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber,secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
        default:
            return ("Please enter a valid operator!");
    }
}
let firstNumber, operator, secondNumber;
const operators = ["/", "*","-", "+", "=", "."];
const numbers = ["0","1","2","3","4","5","6","7","8","9",]
const buttons = document.querySelectorAll(".btn"); 
const screen = document.querySelector(".screen"); 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (operators.includes(button.textContent)){
            screen.textContent = "err";  
         }else if (button.textContent === "CLR"){
                screen.textContent = " ";
                firstNumber = 0;
                operator = " ";
                secondNumber = 0;
        }else if (numbers.includes(button.textContent)){
        screen.textContent += button.textContent; 
        firstNumber = button.textContent;
            if(button.textContent === "/"){
                screen.textContent = "/";
            }
        }
        
    });
});



