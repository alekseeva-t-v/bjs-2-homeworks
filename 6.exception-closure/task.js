function parseCount(value) {
  let parseResult = Number.parseFloat(value);
  if (isNaN(parseResult)) {
    throw new Error('Невалидное значение');
  }
  return parseResult;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
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

  get perimeter() {
    return this.sideFirst + this.sideSecond + this.sideThird;
  }

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
