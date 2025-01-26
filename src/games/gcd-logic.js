#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, gameInit, findGcd } from '../index.js';
import greeting from '../cli.js';

const gcdTextRule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const userName = greeting();
  console.log(gcdTextRule);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const randomNum1 = randomNum(1, 100);
    const randomNum2 = randomNum(1, 100);
    const task = `${randomNum1} ${randomNum2}`;
    const response = `${findGcd(randomNum1, randomNum2)}`;
    const theCorrectAnswer = response;
    const enteredResponse = readlineSync.question(`Question: ${task}\n`);
    const result = gameInit(theCorrectAnswer, enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
};

export default gcdGame;
