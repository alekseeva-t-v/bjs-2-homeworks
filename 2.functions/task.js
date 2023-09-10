/**
 * Возвращает минимальное, максимальное и среднее арифметическое значений массива.
 *
 * @param {object} arr массив / последовательность чисел.
 * @return {object} объект содержащий минимальное, максимальное и среднее арифметическое значений массива
 */
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let avg = Number((sum / arr.length).toFixed(2));

  return {
    min: min,
    max: max,
    avg: avg,
  };
}

/**
 * Возвращает сумму элементов.
 *
 * @param {object} arr массив / последовательность чисел.
 * @return {number} сумма элементов
 */
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

/**
 * Возвращает разницу максимального и минимального элементов.
 *
 * @param {object} arr массив / последовательность чисел.
 * @return {number} разница максимального и минимального элементов
 */
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

/**
 * Возвращает разницу сумм чётных и нечётных элементов.
 *
 * @param {object} arr массив / последовательность чисел.
 * @return {number} разница сумм чётных и нечётных элементов
 */
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

/**
 * Возвращает среднее значение четных элементов.
 *
 * @param {object} arr массив / последовательность чисел.
 * @return {number} среднее хначение четных элементов
 */
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
  return sumEvenElement / countEvenElement;
}

/**
 * Возвращает максимальный результат функции насадки.
 *
 * @param {object} arr массив данных.
 * @param {object} func функция насадка.
 * @return {number} максимальный результат функции насадки
 */
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    let result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
