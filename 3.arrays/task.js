function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  )
}

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