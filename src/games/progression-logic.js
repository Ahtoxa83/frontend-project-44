#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNum, gameInit, initProgression } from '../index.js';
import greeting from '../cli.js';

const progressionTextRule = 'What number is missing in the progression?';

const progressionGame = () => {
  const userName = greeting();
  console.log(progressionTextRule);
  for (let roundPosition = 1; roundPosition <= 3; roundPosition += 1) {
    const progressionNonHidden = initProgression();
    const hiddenElement = randomNum(0, progressionNonHidden.length - 1);
    const response = progressionNonHidden[hiddenElement];
    const theCorrectAnswer = response;
    progressionNonHidden[hiddenElement] = '..';
    const task = progressionNonHidden.join(' ');
    const enteredResponse = readlineSync.question(`Question: ${task}\n`);
    const result = gameInit(theCorrectAnswer, +enteredResponse, userName, roundPosition);
    if (result === false) {
      break;
    }
  }
};

export default progressionGame;
