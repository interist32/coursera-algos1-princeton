import {LinkedListStack} from '../stack/linked-list-stack';


/**
 * Let's assume that expression contains only from positive digits, not numbers.
 * @param expression
 */
export function evaluateExpression(expression: string): number {
  const operators = new LinkedListStack<string>();
  const operands = new LinkedListStack<number>();

  for (const char of expression) {
    if (['+', '-', '/', '*'].includes(char)) {
      operators.push(char);
    }
    if (!isNaN(Number(char))) {
      operands.push(Number(char));
    }
    if (char === ')') {
      const op1 = operands.pop();
      const op2 = operands.pop();
      const operator = operators.pop();
      // Note: op1,op2 are swapped because they come from stack
      operands.push(evaluate(op2, op1, operator));
    }
  }
  return operands.pop();
}

function evaluate(op1, op2, operator) {
  switch (operator) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '*':
      return op1 * op2;
    case '/':
      return op1 / op2;
  }
}