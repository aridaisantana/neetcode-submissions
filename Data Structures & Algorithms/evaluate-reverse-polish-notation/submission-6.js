class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let firstOperand,
            secondOperand = 0;

        for (let token of tokens) {
            switch (token) {
                case "+":
                    secondOperand = Number(stack.pop());
                    firstOperand = Number(stack.pop());
                    let sum = firstOperand + secondOperand;
                    stack.push(sum);
                    break;
                case "-":
                    secondOperand = Number(stack.pop());
                    firstOperand = Number(stack.pop());
                    let subtract = firstOperand - secondOperand;
                    stack.push(subtract);
                    break;

                case "*":
                    secondOperand = Number(stack.pop());
                    firstOperand = Number(stack.pop());
                    let multiply = firstOperand * secondOperand;
                    stack.push(multiply);
                    break;

                case "/":
                    secondOperand = Number(stack.pop());
                    firstOperand = Number(stack.pop());
                    let division = Math.trunc(firstOperand / secondOperand);
                    stack.push(division);
                    break;

                default:
                    stack.push(Number(token));
                    break;
            }
        }
        return Number(stack.pop());
    }
}
