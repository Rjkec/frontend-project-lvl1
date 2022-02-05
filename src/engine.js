const playLogic = (qestion, answer, name) => {
  if (qestion === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${qestion}`);
  console.log(`let's try again,${name}`); 
  return false;

};

export default playLogic;
