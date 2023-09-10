/**
 * Функция конструктор формирет объект с данными студента.
 *
 * @param {string} name имя студента.
 * @param {string} gender пол студента.
 * @param {number} age возраст студента.
 */
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

/**
 * Метод, устанавливает поле subject, присваивает ему subjectName.
 *
 * @param {string} subjectName наименование предмета.
 *
 */
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

/**
 * Метод, добавляет студенту несколько оценок.
 *
 * @param {object} marks последовательность значений оценок.
 *
 */
Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
};

/**
 * Метод, возвращает среднее арифметическое оценок студента.
 *
 * @return {number} среднее арифметическое оценок студента
 */
Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  return (
    this.marks.reduce((acc, value) => {
      return acc + value;
    }, 0) / this.marks.length
  );
};

/**
 * Метод, исключает студента из учебного процесса.
 *
 * @param {string} reason причина исключения.
 *
 */
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
