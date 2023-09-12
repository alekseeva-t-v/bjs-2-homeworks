/**
 * Возвращает результат парсинга (возвращает число, если всё корректно и генерирует ошибку, если ввод не является числом в десятичной системе счисления).
 *
 * @param {number | string} value значение, которое необходимо распарсить.
 * @return {number} результат парсинга.
 */
function parseCount(value) {
  let parseResult = Number.parseFloat(value);
  if (isNaN(parseResult)) {
    throw new Error('Невалидное значение');
  }
  return parseResult;
}

/**
 * Возвращает результат парсинга или ошибка из функции в случае перехвата исключения.
 *
 * @param {number | string} value значение, которое необходимо распарсить.
 * @return {number | object} результат парсинга или ошибка из функции в случае перехвата исключения.
 */
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  /**
   * Конструктор класса треугольника.
   *
   * @param {number} sideFirst длина первой стороны треугольника.
   * @param {number} sideSecond длина второй стороны треугольника.
   * @param {number} sideThird длина третьей стороны треугольника.
   */
  constructor(sideFirst, sideSecond, sideThird) {
    if (
      sideFirst > sideSecond + sideThird ||
      sideSecond > sideFirst + sideThird ||
      sideThird > sideFirst + sideSecond
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.sideFirst = sideFirst;
    this.sideSecond = sideSecond;
    this.sideThird = sideThird;
  }

  /**
   * Геттер возвращает периметр треугольника.
   * @return {number} периметр треугольника.
   */
  get perimeter() {
    return this.sideFirst + this.sideSecond + this.sideThird;
  }

  /**
   * Геттер возвращает площадь треугольника.
   * @return {number} площадь треугольника.
   */
  get area() {
    let semiPerimeter = (this.sideFirst + this.sideSecond + this.sideThird) / 2;
    let result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideFirst) *
        (semiPerimeter - this.sideSecond) *
        (semiPerimeter - this.sideThird)
    );
    return Number(result.toFixed(3));
  }
}

/**
 * Возвращает новый объект треугольника или объект с двумя геттерами в случае ошибки.
 *
 * @param {number} sideFirst длина первой стороны треугольника.
 * @param {number} sideSecond длина второй стороны треугольника.
 * @param {number} sideThird длина третьей стороны треугольника.
 */
function getTriangle(sideFirst, sideSecond, sideThird) {
  try {
    return new Triangle(sideFirst, sideSecond, sideThird);
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
