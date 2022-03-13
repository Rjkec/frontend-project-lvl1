function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = () => {
  const number = getRandomInteger(1, 10);
  return number;
};


