class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(currentState) {
    if (currentState < 0) {
      this._state = 0;
    } else if (currentState > 100) {
      this._state = 100;
    } else {
      this._state = currentState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const searchBook = this.books.find((book) => {
      if (book[type] === value) {
        return book;
      }
    });

    return searchBook === undefined ? null : searchBook;
  }

  giveBookByName(bookName) {
    const searchBook = this.books.find((book, index, booksArray) => {
      if (book.name === bookName) {
        booksArray.splice(index, 1);
        return book;
      }
    });

    return searchBook === undefined ? null : searchBook;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (!Object.keys(this.marks).includes(subject)) {
        this.marks[subject] = [];
      }

      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (!Object.keys(this.marks).includes(subject)) {
      return 0;
    }

    return this.marks[subject].reduce((acc, value, index, array) => {
      return acc + value / array.length;
    }, 0);
  }

  getAverage() {
    const subjectsArray = Object.keys(this.marks);
    if (subjectsArray.length === 0) {
      return 0;
    }

    return subjectsArray.reduce((acc, value, index, array) => {
      return acc + this.getAverageBySubject(value) / array.length;
    }, 0);
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
