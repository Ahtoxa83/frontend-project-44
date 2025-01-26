#!/usr/bin/env node

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const calculator = (operand, randomNum1, randomNum2) => {
  const operands = ['+', '-', '*'];
  if (operand === operands[1]) {
    return String(randomNum1 - randomNum2);
  }
  if (operand === operands[2]) {
    return String(randomNum1 * randomNum2);
  }
  return String(randomNum1 + randomNum2);
};

export const findGcd = (number1, number2) => {
  if (number2 > number1) return findGcd(number2, number1);
  if (!number2) return number1;
  return findGcd(number2, number1 % number2);
};

export const initProgression = () => {
  const progressionArr = [];
  const startPoint = randomNum(1, 10);
  const step = randomNum(1, 10);
  const length = randomNum(5, 10);
  for (let i = 0; i < length; i += 1) {
    progressionArr.push(startPoint + step * i);
  }
  return progressionArr;
};

export const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const gameInit = (theCorrrectAnswer, enteredResponse, userName, roundPosition) => {
  let result = true;
  if (roundPosition >= 3 && theCorrrectAnswer === enteredResponse) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
    return result;
  }
  if (theCorrrectAnswer === enteredResponse) {
    console.log('Correct!');
    return result;
  }
  result = false;
  console.log(`'${enteredResponse}' is wrong answer ;(. Correct answer was '${theCorrrectAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return result;
};
