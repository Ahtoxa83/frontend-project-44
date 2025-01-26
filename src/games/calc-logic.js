#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, gameInit, calculator } from '../index.js';
import greeting from '../cli.js';

const calcTextRule = 'What is the result of the expression?';

const calcGame = () => {
  const userName = greeting();
  console.log(calcTextRule);
  const operands = ['+', '-', '*'];
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const randomNum1 = randomNum(1, 10);
    const randomNum2 = randomNum(1, 10);
    const operand = operands[Math.floor(Math.random() * 3)];
    const task = `${randomNum1} ${operand} ${randomNum2}`;
    const response = calculator(operand, randomNum1, randomNum2);
    const theCorrectAnswer = response;
    const enteredResponse = readlineSync.question(`Question: ${task}\n`);
    const result = gameInit(theCorrectAnswer, enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
};

export default calcGame;
