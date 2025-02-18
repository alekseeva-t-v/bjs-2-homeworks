/**
 * Сравнивает значения двух массивов, возвращает true или false в зависимости от результатов сравнения.
 *
 * @param {object} arr1 массив значений.
 * @param {object} arr2 массив значений.
 * @return {boolean} итог сравнения элементов массива
 */
function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  )
}

/**
 * Возвращает среднее значение возраста пользователей одного пола.
 *
 * @param {object} users массив пользователей.
 * @param {string} gender пол.
 * @return {number} среднее значение возраста пользователей одного пола
 */
function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((value) => {
      return value.gender === gender;
    })
    .map((value) => {
      return value.age;
    })
    .reduce((acc, value, index, array) => {
      return acc + value / array.length;
    }, 0);

  return result;
}