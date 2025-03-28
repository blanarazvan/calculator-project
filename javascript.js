function add (a,b){
    let x = Number(a);
    let y = Number(b);
    return x+y;
}
function subtract (a,b){
    let x = Number(a);
    let y = Number(b);
    return x-y;
}
function multiply (a,b){
    return (Math.round(a*b * 100) /100);
}
function divide (a,b){
    return (Math.round(a/b * 100) /100);
}

let firstNumber = " ", operator, secondNumber = " ", operations = 0, secondOperator = " ", result = " ";
let isLocked = false;
let activeOperatorButton = null;
const operators = ["/", "*","-", "+"];
const numbers = ["0","1","2","3","4","5","6","7","8","9","."]
const buttons = document.querySelectorAll(".btn"); 
const screen = document.querySelector(".screen"); 
// Check if firstNumber has a value
// Input firstNumber
// Add operator & clear screen
// Input secondNumber

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "CLR"){
            screen.textContent = " ";
            firstNumber = " ";
            operator = undefined;
            secondNumber = " ";
            isLocked = false;
            secondOperator = " ";
            operations = 0;
        }
        if (operators.includes(button.textContent) && firstNumber === undefined && isLocked === false && operations === 0){
            screen.textContent = "err";  
        } 
        if (numbers.includes(button.textContent) && operator === undefined && operations === 0 && isLocked === false) {
            firstNumber += button.textContent; 
            screen.textContent = firstNumber;
        }  
        if(operators.includes(button.textContent) && firstNumber !== " " && operations === 0 && isLocked === false){
            operator = button.textContent; 
            if (activeOperatorButton) {
                activeOperatorButton.classList.remove("active");
            }
            button.classList.add("active");
            activeOperatorButton = button; 
        }
        if (numbers.includes(button.textContent) && secondOperator === " " && operator !== undefined && isLocked === false) {
            secondNumber += button.textContent;
            screen.textContent = secondNumber;
            if (activeOperatorButton) {
                activeOperatorButton.classList.remove("active");
                activeOperatorButton = null; // Reset reference
            }
            operations = 1;
            
        }
        if(operators.includes(button.textContent) && operations === 1 && isLocked === false){
            chooseOperation(operator);
            firstNumber = result;
            secondOperator = button.textContent;
            if (activeOperatorButton) {
                activeOperatorButton.classList.remove("active");
            }
        
            button.classList.add("active");
            activeOperatorButton = button;
            secondNumber = " ";
        }
        if(numbers.includes(button.textContent) && secondOperator !== " " && isLocked === false){
            secondNumber += button.textContent;
            screen.textContent = secondNumber; 
            if (activeOperatorButton) {
                activeOperatorButton.classList.remove("active");
                activeOperatorButton = null; // Reset reference
            }
        } 
        if(button.textContent === '=' && secondNumber !== " " && isLocked === false){
            screen.textContent = ' ';
            operations === 1 ? chooseOperation(operator) : chooseOperation(secondOperator);

            firstNumber = result;
            secondNumber = " ";
            operations = 0;
            operator = undefined;
        }
        if(screen.textContent.length > 10){
           exceedsNumber();
        }
    });
});
/*
buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        if (button.textContent === "CLR" || secondOperator === 0){
                screen.textContent = " ";
                firstNumber = " ";
                operator = undefined;
                secondNumber = " ";
                isLocked = false;
        }
        if (operators.includes(button.textContent) && firstNumber === undefined && isLocked === false && operations === 0){
            screen.textContent = "err";  
        } 
        if (numbers.includes(button.textContent) && operator === undefined) {
            firstNumber += button.textContent; 
            screen.textContent = firstNumber;
        }

        if(operators.includes(button.textContent) && firstNumber !== " " && secondNumber === " " && isLocked === false){
            operator = button.textContent; 
            screen.textContent = operator; 
        }
        if (numbers.includes(button.textContent) && operator !== undefined && isLocked === false) {
            secondNumber += button.textContent;
            screen.textContent = secondNumber;
            secondOperator = operator;
            operator = undefined;
            operations = 1;
        }
        if (operators.includes(button.textContent) && operations === 1 && secondOperator !== undefined){
            screen.textContent = ' ';
            chooseOperation(secondOperator);
            firstNumber = result;
            operator = button.textContent;
            secondNumber = " ";
            operations = 0;
        }
        if(numbers.includes(button.textContent) && firstNumber === result && operations === 0){
            screen.textContent = ' ';
            screen.textContent += button.textContent;
            secondNumber = screen.textContent; 
            chooseOperation(operator); // firstnumber = result, operator = new operator, // secondNumber = second Number
            secondOperator = 0;
        }

        if(button.textContent === '=' && secondNumber !== " " && isLocked === false){
            screen.textContent = ' ';
            chooseOperation(secondOperator);
            operations = 0;
        }
        if(screen.textContent.length > 10){
           exceedsNumber();
        }
      
    });
});
*/
function exceedsNumber (){
    screen.textContent = "exceeds";
    firstNumber = " ";
    operator = undefined;
    secondNumber = " ";
    isLocked = true;
}

function chooseOperation(operatorChoice){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch(operatorChoice){
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber,secondNumber);
            break;
        case "-":
            result = subtract(firstNumber,secondNumber);
            break;
        case "+":
            result = add(firstNumber,secondNumber);
            break;
        default:
            return;
    }

   screen.textContent = result;
}