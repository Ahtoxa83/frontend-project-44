#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, gameInit } from '../index.js';
import greeting from '../cli.js';

const isEvenTextRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const userName = greeting();
  console.log(isEvenTextRule);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const questionNum = randomNum(1, 100);
    const isEven = (num) => {
      if (num % 2 === 0) {
        return true;
      }
      return false;
    };
    const theCorrrectAnswer = isEven(questionNum) ? 'yes' : 'no';
    const enteredResponse = readlineSync.question(`Question: ${questionNum}\n`);
    const result = gameInit(theCorrrectAnswer, enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
};

export default evenGame;
