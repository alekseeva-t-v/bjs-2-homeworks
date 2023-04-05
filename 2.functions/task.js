function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  console.log(sumEvenElement);
  console.log(countEvenElement);
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    let result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    }
  }

  return maxWorkerResult
}
