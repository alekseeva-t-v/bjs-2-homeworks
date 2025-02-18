# Обработка исключений и замыкания
Домашнее задание к лекции 6 «Обработка исключений и замыкания» курса [«JavaScript-программирование для начинающих»](https://cat.2035.university/rall/course/18787/?project_id=48).

## Задача 1. Форматтер чисел
Ошибки случаются, и нужно уметь с ними работать. Ваши коллеги разработали форму, которая принимает от пользователя количество покупаемых единиц товара. Вас попросили написать функцию-преобразователь, которая:

* возвращает число, если всё корректно;
* генерирует ошибку, если ввод не является числом в десятичной системе счисления.

Необходимо использовать возможности стандартной библиотеки JS для преобразования строки в число.

### Процесс реализации
1. Написана функция `parseCount` .
    * Аргументом функции является значение, которое необходимо распарсить.
    * Для парсинга используется функцию `Number.parseFloat`.
    * Если результат парсинга — значение `NaN`, то выбрасывется исключение с ошибкой *«Невалидное значение»*.
    * Возвращается результат парсинга из функции.

2. Написана функция `validateCount`.
    * Аргументом функции является значение, которое необходимо распарсить.
    * Осуществляется попытка распарсить значение с помощью функции `parseCount`.
    * Если распарсить удаётся успешно, то возвращается результат.
    * Происходит перехват исключения, которое может выбрасывать функция `parseCount`.
    * Возвращается ошибка из функции в случае перехвата исключения.

## Задача 2. Треугольник
На этот раз Вася решил создать онлайн-калькулятор геометрических фигур. Помогите ему создать калькулятор треугольников, который сможет проверять существование треугольника, считать площадь и периметр.

### Процесс реализации
1. Написан класс `Triangle`.
    * Конструктор класса принимает три стороны треугольника.
    * В случае нарушения правила существования треугольника (сумма двух сторон меньше третьей) выбрасывается исключение с ошибкой *«Треугольник с такими сторонами не существует»*.
    * Геттер `perimeter` возвращает периметр треугольника.
    * Геттер `area` возвращает площадь треугольника. Для подсчёта площади используется [формула Герона](https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%93%D0%B5%D1%80%D0%BE%D0%BD%D0%B0). Точность вычисляется с обозначением до трёх знаков после запятой.
2. Написана функцию `getTriangle`.
    * Аргументами функции являются три значения длин сторон.
    * Происходит попытка вернуть новый объект треугольника.
    * В случае перехвата исключения возвращается объект с двумя геттерами `area` и `perimeter`, которые возвращают строку: *«Ошибка! Треугольник не существует»*.

## Результат при правильном решении задания
![графическое представление](../Jasmine/results/sucessed_tasks_6.png)

## **Стек технологий**
![JS](./js.svg)
![GIT](./git.svg)

## **[Демо](https://alekseeva-t-v.github.io/bjs-2-homeworks/6.exception-closure/)**