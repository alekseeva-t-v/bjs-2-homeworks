function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => {
      return value === arr2[index];
    })
  );
}

function getUsersNamesInAgeRange(users, gender) {
  if (
    users.length === 0 ||
    !users
      .map((value) => {
        return value.gender;
      })
      .includes(gender)
  ) {
    return 0;
  }

  let resultArrLength = 0;
  let result = users
    .filter((value) => {
      return value.gender === gender;
    })
    .map((value, index, array) => {
      resultArrLength = array.length;
      return value.age;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  return result / resultArrLength;
}