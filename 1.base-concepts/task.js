'use strict';

/**
 * Возвращает результат вычисления квадратного уравнения
 *
 * @param {number} a коэффициент квадратного уравнения.
 * @param {number} b коэффициент квадратного уравнения.
 * @param {number} c коэффициент квадратного уравнения.
 * @return {object} массив с результатами вычисления квадратного уравнения.
 */
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootFirst, rootSecond);
  }

  return arr;
}

/**
 * Возвращает сумму, которую в итоге заплатит клиент за кредит (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)
 *
 * @param {number} percent процентная ставка.
 * @param {number} contribution сумма первоначального взноса.
 * @param {number} amount сумму кредита.
 * @param {number} countMonths длительность кредита в месяцах.
 * @return {number} сумма, которую в итоге заплатит клиент за кредит.
 */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentResult = parseInt(percent);
  let contributionResult = parseInt(contribution);
  let amountResult = parseInt(amount);
  let countMonthsResult = parseInt(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  let monthlyRate = percentResult / 100 / 12;
  let loanBody = amountResult - contributionResult;
  let monthlyPayment =
    loanBody *
    (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonthsResult - 1));
  let totalPayment = monthlyPayment * countMonthsResult;

  return Number(totalPayment.toFixed(2));
}