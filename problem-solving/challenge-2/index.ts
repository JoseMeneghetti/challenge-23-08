export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number,
): number => {
  const arrayOfDices = [dice1, dice2, dice3];

  if (arrayOfDices.find((el) => el === dice1)) {
    if (arrayOfDices.length > 1) {
      return dice1 * 3;
    }
    if (arrayOfDices.length > 0 && arrayOfDices.length < 1) {
      return dice1 * 2;
    }
  }
  return 0;
};
