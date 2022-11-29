console.log(process.argv);

const sumAndAvg = () => {
  let total = 0;
  const arg = process.argv;

  if (arg[2] !== "sum" && arg[2] !== "avg" && arg[2] !== "med") {
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
    return;
  } else if (arg[2] === "sum" || arg[2] === "avg") {
    for (let i = 3; i < arg.length; i++) {
      if (!parseInt(arg[i])) {
        console.log(
          `Sorry the argument ${arg[i]} is not a number, please try again`
        );
        return;
      } else {
        total += Number(arg[i]);
      }
    }
  } else if (arg[2] === "med") {
    let medArr = [];
    for (let i = 3; i < arg.length; i++) {
      if (!parseInt(arg[i])) {
        console.log(
          `Sorry the argument ${arg[i]} is not a number, please try again`
        );
        return;
      } else {
        medArr.push(arg[i]);
      }
    }

    const sortedMedArr = medArr.sort((a, b) => a - b);

    const medianIndex = (sortedMedArr.length - 1) / 2;

    return medianIndex % 1 === 0
      ? sortedMedArr[medianIndex]
      : (+sortedMedArr[Math.floor(medianIndex)] +
          +sortedMedArr[Math.floor(medianIndex) + 1]) /
          2;
  }

  return arg[2] === "sum"
    ? total
    : arg[2] === "avg"
    ? total / arg.slice(3).length
    : "";
};

console.log(sumAndAvg());
