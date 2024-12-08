import readlineSync from 'readline-sync';
import askName from '../../src/cli.js';
import getRandomInt from '../../src/getRandomInt.js';

const generateProgression = (length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(i * step);
  }
  return progression;
};

const brainProgression = () => {
  const name = askName();
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const length = getRandomInt(5, 10);
    const step = getRandomInt(1, 10);
    const progression = generateProgression(length, step);
    const hiddenIndex = getRandomInt(0, length - 1);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnswer = hiddenValue;

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainProgression;
