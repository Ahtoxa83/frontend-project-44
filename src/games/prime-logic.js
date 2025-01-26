#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, gameInit, isPrime } from '../index.js';
import greeting from '../cli.js';

const primeTextRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const userName = greeting();
  console.log(primeTextRule);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const questionNum = randomNum(1, 100);
    const theCorrrectAnswer = isPrime(questionNum) ? 'yes' : 'no';
    const enteredResponse = readlineSync.question(`Question: ${questionNum}\n`);
    const result = gameInit(theCorrrectAnswer, enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
};

export default primeGame;
