const part2 = (input: Array<number>): number => {
  const elfCalories: Array<number> = [0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === null) {
      elfCalories.push(0);
      continue;
    }
    elfCalories[elfCalories.length - 1] =
      elfCalories[elfCalories.length - 1] + input[i];
  }

  elfCalories.sort((a, b) => a - b);

  return (
    elfCalories[elfCalories.length - 3] +
    elfCalories[elfCalories.length - 2] +
    elfCalories[elfCalories.length - 1]
  );
};

export default part2;
