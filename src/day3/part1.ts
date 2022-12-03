const part1 = (input: Array<Array<string>>): number => {
  let sumOfPriorities = 0;

  for (let i = 0; i < input.length; i++) {
    const rucksack = input[i];

    // We'll use a set to deduplicate each compartments' contents
    const rucksackCompartment1 = new Set(
      rucksack.slice(0, rucksack.length / 2)
    );
    const rucksackCompartment2 = new Set(rucksack.slice(rucksack.length / 2));

    for (const item of rucksackCompartment1) {
      if (rucksackCompartment2.has(item)) {
        sumOfPriorities += itemToPriority(item);
        break;
      }
    }
  }

  return sumOfPriorities;
};

const itemToPriority = (item: string): number => {
  const itemCode = item.charCodeAt(0);
  switch (true) {
    case itemCode > 96:
      return itemCode - 96;
    default:
      return itemCode - 38;
  }
};

export default part1;
export { itemToPriority };
