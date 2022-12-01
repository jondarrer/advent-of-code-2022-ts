const part1 = (input: Array<number>): number => {
  const elfCalories: Array<number> = [0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === null) {
      elfCalories.push(0);
      continue;
    }
    elfCalories[elfCalories.length - 1] =
      elfCalories[elfCalories.length - 1] + input[i];
  }

  return elfCalories.reduce((prev, curr) => (curr > prev ? curr : prev), 0);
};

export default part1;
