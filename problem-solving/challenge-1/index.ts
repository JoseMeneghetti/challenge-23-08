export const numbersFractionCalculator = (numbers: number[]) => {
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;
  const total = numbers.length;

  for (let i = 0; i < total; i++) {
    if (numbers[i] > 0) {
      positive++;
    }
    if (numbers[i] < 0) {
      negative++;
    }
    if (numbers[i] === 0) {
      zero++;
    }
  }

  return {
    positives: (positive / total).toFixed(6),
    negative: (negative / total).toFixed(6),
    zeros: (zero / total).toFixed(6),
  };
};
