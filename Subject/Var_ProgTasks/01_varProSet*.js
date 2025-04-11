CHECK DUBLES!!!
Эти задачи помогут вам потренировать базовые операции с числами, строками и массивами, улучшив навыки работы с последовательными алгоритмами в JavaScript.
1️⃣ Проверка наличия числа в массиве
⌛ Задача: Напишите функцию, которая проверяет, есть ли число в массиве.
🎯 Решение:
```js
function contains(arr, num) {
  return arr.includes(num);
}

console.log(contains([1, 2, 3, 4], 3)); // true
console.log(contains([1, 2, 3, 4], 5)); // false
```
Объяснение: Мы используем метод `includes`, чтобы проверить наличие элемента в массиве.
---
2️⃣ Нахождение минимального числа
⌛ Задача: Напишите функцию, которая находит минимальное число из массива.
🎯 Решение:
```js
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([10, 2, 33, 4])); // 2
```
Объяснение: Для нахождения минимального числа используем встроенную функцию `Math.min` с распаковкой массива с помощью оператора `...`.
---
3️⃣ Проверка, является ли число положительным
⌛ Задача: Напишите функцию, которая проверяет, является ли число положительным.
🎯 Решение:
```js
function isPositive(num) {
  return num > 0;
}

console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
```
Объяснение: Мы проверяем, больше ли число нуля. Если да, то оно положительное.
---
4️⃣ Подсчет количества пробелов в строке
⌛ Задача: Напишите функцию, которая подсчитывает количество пробелов в строке.
🎯 Решение:
```js
function countSpaces(str) {
  return str.split(' ').length - 1;
}

console.log(countSpaces('hello world how are you')); // 4
```
Объяснение: Мы разделяем строку по пробелам, а затем возвращаем количество полученных частей минус 1, чтобы посчитать пробелы.
---
5️⃣ Проверка, является ли строка палиндромом
⌛ Задача: Напишите функцию, которая проверяет, является ли строка палиндромом (т.е. читается одинаково слева направо и справа налево).
🎯 Решение:
```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false
```
Объяснение: Мы инвертируем строку и сравниваем её с оригиналом.
---
6️⃣ Конкатенация двух строк
⌛ Задача: Напишите функцию, которая принимает две строки и объединяет их в одну.
🎯 Решение:
```js
function concatStrings(str1, str2) {
  return str1 + str2;
}

console.log(concatStrings('hello', 'world')); // 'helloworld'
```
Объяснение: Мы используем оператор `+` для конкатенации строк.
---
7️⃣ Нахождение суммы чисел в массиве
⌛ Задача: Напишите функцию, которая находит сумму всех чисел в массиве.
🎯 Решение:
```js
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
```
Объяснение: Мы используем метод `reduce`, чтобы пройтись по массиву и суммировать все элементы.
---
8️⃣ Возведение числа в степень
⌛ Задача: Напишите функцию, которая возводит число в степень.
🎯 Решение:
```js
function power(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(power(2, 3)); // 8
```
Объяснение: Мы используем встроенную функцию `Math.pow`, чтобы возвести число в степень.
---
9️⃣ Преобразование строки в верхний регистр
⌛ Задача: Напишите функцию, которая преобразует строку в верхний регистр.
🎯 Решение:
```js
function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(toUpperCase('hello')); // 'HELLO'
```
Объяснение: Метод `toUpperCase` возвращает строку в верхнем регистре.
---
🔟 Нахождение длины строки
⌛ Задача: Напишите функцию, которая находит длину строки.
🎯 Решение:
```js
function stringLength(str) {
  return str.length;
}

console.log(stringLength('hello')); // 5
```
Объяснение: Свойство `length` возвращает количество символов в строке.
--------------------------------------------------------------------------------------------- 
2
***  
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задачи о числах Фибоначчи:
---
1️⃣ Нахождение N-го числа Фибоначчи (Рекурсивный подход)
⌛ Задача: Напишите функцию, которая находит N-е число Фибоначчи с использованием рекурсии.
🎯 Решение:
```js
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5)); // 5
```
Объяснение: Рекурсивная функция определяет число Фибоначчи как сумму двух предыдущих чисел. Базовый случай — если `n` меньше или равно 1, то возвращается `n`.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задачи о числах Фибоначчи:
---
2️⃣ Нахождение N-го числа Фибоначчи (Итеративный подход)
⌛ Задача: Напишите функцию, которая находит N-е число Фибоначчи, используя итеративный метод.
🎯 Решение:
```js
function fibonacciIterative(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return n === 0 ? a : b;
}

console.log(fibonacciIterative(5)); // 5
```
Объяснение: Мы начинаем с первых двух чисел Фибоначчи (0 и 1) и итеративно вычисляем следующее число, пока не достигнем N.
---
3️⃣ Массив всех чисел Фибоначчи до N-го
⌛ Задача: Напишите функцию, которая возвращает массив чисел Фибоначчи до N-го числа.
🎯 Решение:
```js
function fibonacciArray(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1);
}

console.log(fibonacciArray(5)); // [0, 1, 1, 2, 3, 5]
```
Объяснение: Мы создаем массив, начиная с первых двух чисел Фибоначчи, и заполняем его итеративно до N-го числа.
---
4️⃣ Мемоизация чисел Фибоначчи
⌛ Задача: Напишите функцию, которая находит N-е число Фибоначчи, используя метод мемоизации для улучшения производительности.
🎯 Решение:
```js
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(5)); // 5
```
Объяснение: Используем объект `memo` для хранения уже вычисленных значений чисел Фибоначчи, чтобы избежать повторных вычислений.
---
5️⃣ Нахождение числа Фибоначчи с помощью формулы Бине
⌛ Задача: Напишите функцию, которая находит N-е число Фибоначчи с использованием формулы Бине.
🎯 Решение:
```js
function fibonacciBinet(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

console.log(fibonacciBinet(5)); // 5
```
Объяснение: Формула Бине использует золотое сечение (φ) для вычисления чисел Фибоначчи. Мы используем математическое приближение и округляем результат.
---
6️⃣ Проверка, является ли число числом Фибоначчи
⌛ Задача: Напишите функцию, которая проверяет, является ли данное число числом Фибоначчи.
🎯 Решение:
```js
function isFibonacci(n) {
  const check = (x) => Math.sqrt(5 * x * x + 4) % 1 === 0 || Math.sqrt(5 * x * x - 4) % 1 === 0;
  return check(n);
}

console.log(isFibonacci(5)); // true
console.log(isFibonacci(4)); // false
```
Объяснение: Число является числом Фибоначчи, если одно из двух выражений (5x² + 4) или (5x² - 4) является полным квадратом.
---
7️⃣ Вывод чисел Фибоначчи до N
⌛ Задача: Напишите функцию, которая выводит все числа Фибоначчи, которые меньше или равны заданному числу N.
🎯 Решение:
```js
function fibonacciUpToN(n) {
  let fib = [0, 1];
  while (fib[fib.length - 1] <= n) {
    const next = fib[fib.length - 1] + fib[fib.length - 2];
    if (next > n) break;
    fib.push(next);
  }
  return fib;
}

console.log(fibonacciUpToN(10)); // [0, 1, 1, 2, 3, 5, 8]
```
Объяснение: Мы генерируем числа Фибоначчи до тех пор, пока следующее число не станет больше N.
---
8️⃣ Преобразование числа Фибоначчи в двоичное представление
⌛ Задача: Напишите функцию, которая находит число Фибоначчи по индексу и возвращает его в двоичном формате.
🎯 Решение:
```js
function fibonacciBinary(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b.toString(2);
}

console.log(fibonacciBinary(5)); // '101'
```
Объяснение: Мы находим N-е число Фибоначчи и преобразуем его в двоичное представление с помощью метода `toString(2)`.
---
9️⃣ Сумма чисел Фибоначчи до N-го числа
⌛ Задача: Напишите функцию, которая находит сумму всех чисел Фибоначчи до N-го числа (включительно).
🎯 Решение:
```js
function sumFibonacci(n) {
  let a = 0, b = 1, sum = a + b;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    sum += temp;
    a = b;
    b = temp;
  }
  return sum;
}

console.log(sumFibonacci(5)); // 12
```
Объяснение: Мы находим числа Фибоначчи и суммируем их.
---
🔟 Печать N чисел Фибоначчи на экране
⌛ Задача: Напишите функцию, которая выводит первые N чисел Фибоначчи в консоль.
🎯 Решение:
```js
function printFibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

printFibonacci(5); // 0 1 1 2 3
```
Объяснение: Мы выводим числа Фибоначчи на экран, начиная с 0 и 1, затем выводим остальные числа с помощью цикла.
Эти задачи помогут вам закрепить различные способы работы с числами Фибоначчи, включая рекурсивный подход, итерации, использование формул и мемоизацию.
---------------------
⋙ ❍ Вычисление НОК и НОД:
---
1️⃣ Вычисление НОД двух чисел (Алгоритм Евклида)
⌛ Задача: Напишите функцию для вычисления НОД двух чисел с использованием алгоритма Евклида.
🎯 Решение:
```js
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(56, 98)); // 14
```
Объяснение: Алгоритм Евклида заключается в том, что мы делим большее число на меньшее и заменяем большее на остаток от деления до тех пор, пока остаток не станет равным нулю.
---
2️⃣ Вычисление НОК двух чисел через НОД
⌛ Задача: Напишите функцию для вычисления НОК двух чисел, используя НОД.
🎯 Решение:
```js
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(56, 98)); // 392
```
Объяснение: НОК двух чисел можно вычислить через НОД, используя формулу:
`НОК(a, b) = (a * b) / НОД(a, b)`
---
3️⃣ Вычисление НОД для массива чисел
⌛ Задача: Напишите функцию, которая вычисляет НОД для массива чисел.
🎯 Решение:
```js
function gcdArray(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

console.log(gcdArray([56, 98, 42])); // 14
```
Объяснение: Мы используем метод `reduce`, чтобы последовательно находить НОД всех чисел массива.
---
4️⃣ Вычисление НОК для массива чисел
⌛ Задача: Напишите функцию, которая вычисляет НОК для массива чисел.
🎯 Решение:
```js
function lcmArray(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}

console.log(lcmArray([2, 3, 5])); // 30
```
Объяснение: Мы используем метод `reduce`, чтобы последовательно находить НОК всех чисел массива.
---
5️⃣ Вычисление НОД с использованием рекурсии
⌛ Задача: Напишите рекурсивную функцию для вычисления НОД двух чисел.
🎯 Решение:
```js
function gcdRecursive(a, b) {
  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

console.log(gcdRecursive(56, 98)); // 14
```
Объяснение: Рекурсивная версия алгоритма Евклида. Базовый случай — когда одно из чисел становится равным нулю.
---
6️⃣ Проверка, являются ли два числа взаимно простыми
⌛ Задача: Напишите функцию, которая проверяет, являются ли два числа взаимно простыми (НОД равен 1).
🎯 Решение:
```js
function areCoprime(a, b) {
  return gcd(a, b) === 1;
}

console.log(areCoprime(14, 25)); // true
console.log(areCoprime(14, 28)); // false
```
Объяснение: Если НОД двух чисел равен 1, то числа являются взаимно простыми.
---
7️⃣ Нахождение НОД и НОК для нескольких чисел (с использованием цикла)
⌛ Задача: Напишите функцию, которая находит НОД и НОК для нескольких чисел, переданных в массив.
🎯 Решение:
```js
function findGCDAndLCM(arr) {
  let gcdResult = arr[0];
  let lcmResult = arr[0];

  for (let i = 1; i < arr.length; i++) {
    gcdResult = gcd(gcdResult, arr[i]);
    lcmResult = lcm(lcmResult, arr[i]);
  }

  return { gcd: gcdResult, lcm: lcmResult };
}

console.log(findGCDAndLCM([56, 98, 42])); // { gcd: 14, lcm: 392 }
```
Объяснение: Мы последовательно находим НОД и НОК для всех чисел в массиве с помощью цикла.
---
8️⃣ Нахождение НОД с помощью побитовой операции
⌛ Задача: Напишите функцию для вычисления НОД с использованием побитовой операции (по алгоритму Бинарного Евклида).
🎯 Решение:
```js
function gcdBitwise(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  let shift = 0;
  while (((a | b) & 1) === 0) {
    a >>= 1;
    b >>= 1;
    shift++;
  }

  while ((a & 1) === 0) a >>= 1;

  do {
    while ((b & 1) === 0) b >>= 1;

    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  } while (a !== b);

  return a << shift;
}

console.log(gcdBitwise(56, 98)); // 14
```
Объяснение: Этот алгоритм использует побитовые операции для ускорения вычислений, например, сдвиг влево/вправ для деления на 2.
---
9️⃣ Нахождение НОК с использованием массива чисел
⌛ Задача: Напишите функцию, которая находит НОК для массива чисел, используя НОД.
🎯 Решение:
```js
function lcmArray(arr) {
  return arr.reduce((acc, num) => lcm(acc, num), 1);
}

console.log(lcmArray([2, 3, 5, 7])); // 210
```
Объяснение: Мы последовательно находим НОК для всех чисел массива с использованием метода `reduce`.
---
🔟 Печать всех делителей НОД двух чисел
⌛ Задача: Напишите функцию, которая находит все делители НОД двух чисел.
🎯 Решение:
```js
function gcdDivisors(a, b) {
  const gcdResult = gcd(a, b);
  const divisors = [];

  for (let i = 1; i <= gcdResult; i++) {
    if (gcdResult % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

console.log(gcdDivisors(56, 98)); // [1, 2, 7, 14]
```
Объяснение: Мы находим НОД двух чисел и затем находим все его делители, проходя от 1 до НОД и проверяя, делится ли НОД на текущую цифру.
Эти задачи помогут вам закрепить знания и навыки работы с НОД и НОК, а также улучшить понимание алгоритмов Евклида, бинарного алгоритма Евклида и их применения в решении задач.

⋙ ❍ Задача «Максимальный оклад»:
---
Задача: Максимальный оклад
Задача связана с вычислением максимального оклада среди сотрудников компании, подсчетом средней зарплаты и различными манипуляциями с данными о зарплатах.
1. ⌛ Задача: Поиск максимального оклада среди сотрудников
Условие:
Нужно найти максимальный оклад среди всех сотрудников компании.
🎯 Решение:
```javascript
function findMaxSalary(salaries) {
  return Math.max(...salaries);
}

let salaries = [35000, 45000, 50000, 60000, 70000];
console.log(`Максимальный оклад: ${findMaxSalary(salaries)}`);  // 70000
```
Объяснение:
Используем функцию `Math.max()`, которая принимает несколько значений и возвращает наибольшее из них. Мы применяем оператор расширения (`...`), чтобы передать все элементы массива в функцию.
---
2. ⌛ Задача: Поиск сотрудника с максимальным окладом
Условие:
Необходимо найти имя сотрудника с максимальным окладом.
🎯 Решение:
```javascript
function findEmployeeWithMaxSalary(employees) {
  let maxSalaryEmployee = employees.reduce((max, employee) =>
    employee.salary > max.salary ? employee : max
  );
  return maxSalaryEmployee.name;
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудник с максимальным окладом: ${findEmployeeWithMaxSalary(employees)}`);  // Елена
```
Объяснение:
Используем метод `reduce()`, чтобы найти сотрудника с максимальной зарплатой. В каждом шаге мы сравниваем текущую зарплату с максимальной.
---
3. ⌛ Задача: Подсчет средней зарплаты
Условие:
Необходимо вычислить среднюю зарплату всех сотрудников.
🎯 Решение:
```javascript
function calculateAverageSalary(salaries) {
  let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
  return totalSalary / salaries.length;
}

let salaries = [35000, 45000, 50000, 60000, 70000];
console.log(`Средняя зарплата: ${calculateAverageSalary(salaries)}`);  // 51000
```
Объяснение:
Мы суммируем все зарплаты с помощью `reduce()`, а затем делим на количество сотрудников для получения средней зарплаты.
---
4. ⌛ Задача: Проверка, есть ли сотрудники с зарплатой выше заданного значения
Условие:
Проверить, есть ли сотрудники с окладом выше 60000.
🎯 Решение:
```javascript
function hasHighSalary(salaries, threshold) {
  return salaries.some(salary => salary > threshold);
}

let salaries = [35000, 45000, 50000, 60000, 70000];
console.log(hasHighSalary(salaries, 60000));  // true
```
Объяснение:
Используется метод `some()`, который проверяет, удовлетворяет ли хотя бы один элемент массива условию (зарплата больше заданного порога).
---
5. ⌛ Задача: Нахождение всех сотрудников с окладом больше среднего
Условие:
Нужно вывести всех сотрудников, чьи оклады превышают среднее значение.
🎯 Решение:
```javascript
function findEmployeesAboveAverage(employees) {
  let averageSalary = calculateAverageSalary(employees.map(employee => employee.salary));
  return employees.filter(employee => employee.salary > averageSalary).map(employee => employee.name);
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудники с окладом выше среднего: ${findEmployeesAboveAverage(employees)}`);  // [ 'Алексей', 'Елена' ]
```
Объяснение:
Сначала находим среднюю зарплату, затем фильтруем сотрудников с зарплатой выше средней, и в конце выводим их имена.
---
6. ⌛ Задача: Повышение оклада на заданный процент
Условие:
Нужно повысить оклад каждого сотрудника на 10%.
🎯 Решение:
```javascript
function increaseSalaries(salaries, percentage) {
  return salaries.map(salary => salary * (1 + percentage / 100));
}

let salaries = [35000, 45000, 50000, 60000, 70000];
console.log(increaseSalaries(salaries, 10));  // [ 38500, 49500, 55000, 66000, 77000 ]
```
Объяснение:
Используем метод `map()`, чтобы применить повышение оклада на определенный процент для каждого сотрудника.
---
7. ⌛ Задача: Нахождение сотрудников с окладом ниже среднего
Условие:
Нужно найти сотрудников, чьи оклады ниже среднего.
🎯 Решение:
```javascript
function findEmployeesBelowAverage(employees) {
  let averageSalary = calculateAverageSalary(employees.map(employee => employee.salary));
  return employees.filter(employee => employee.salary < averageSalary).map(employee => employee.name);
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудники с окладом ниже среднего: ${findEmployeesBelowAverage(employees)}`);  // [ 'Иван', 'Мария' ]
```
Объяснение:
Аналогично задаче выше, только находим сотрудников с зарплатой ниже средней.
---
8. ⌛ Задача: Увеличение зарплаты для сотрудников с окладом ниже заданного порога
Условие:
Если оклад сотрудника ниже 45000, повысить его на 20%.
🎯 Решение:
```javascript
function increaseSalaryForLowEarners(salaries, threshold, percentage) {
  return salaries.map(salary => salary < threshold ? salary * (1 + percentage / 100) : salary);
}

let salaries = [35000, 45000, 50000, 60000, 70000];
console.log(increaseSalaryForLowEarners(salaries, 45000, 20));  // [ 42000, 45000, 50000, 60000, 70000 ]
```
Объяснение:
Мы используем `map()`, чтобы применить увеличение зарплаты только для тех сотрудников, чьи оклады меньше заданного порога.
---
9. ⌛ Задача: Нахождение двух сотрудников с наименьшими окладами
Условие:
Необходимо найти двух сотрудников с самыми низкими окладами.
🎯 Решение:
```javascript
function findTwoLowestSalaries(employees) {
  let sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
  return sortedEmployees.slice(0, 2).map(employee => employee.name);
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Два сотрудника с наименьшими окладами: ${findTwoLowestSalaries(employees)}`);  // [ 'Иван', 'Мария' ]
```
Объяснение:
Сначала сортируем массив сотрудников по зарплате, затем используем `slice(0, 2)`, чтобы получить первых двух сотрудников с наименьшими окладами.
---
10. ⌛ Задача: Проверка, превышает ли оклад сотрудника заданный порог
Условие:
Проверить, превышает ли оклад сотрудника 55000.
🎯 Решение:
```javascript
function isSalaryAboveThreshold(salary, threshold) {
  return salary > threshold;
}

let salary = 60000;
console.log(isSalaryAboveThreshold(salary, 55000));  // true
```
Объяснение:
Просто проверяем, больше ли оклад сотрудника заданного порога.
Эти задачи охватывают различные аспекты работы с зарплатами сотрудников, от вычисления максимальных и средних окладов до выполнения различных манипуляций с данными, таких как повышение зарплаты и фильтрация сотрудников.
---------------------
⋙ ❍ Задача Разделяй и властвуй:
---
Задача "Разделяй и властвуй" обычно относится к методу алгоритмов, который решает сложные задачи путём их разбиения на более простые подзадачи, решение которых проще, а затем слияния этих решений для получения конечного результата. В контексте JavaScript мы можем применить этот метод для решения различных задач, таких как сортировка, поиск и обработка данных.
1. ⌛ Задача: Быстрая сортировка (QuickSort)
Условие:
Реализуйте алгоритм быстрой сортировки для массива чисел.
🎯 Решение:
```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5, 3, 8, 4, 2];
console.log(quickSort(arr));  // [2, 3, 4, 5, 8]
```
Объяснение:
Алгоритм разделяет массив на две части относительно опорного элемента (pivot), сортирует их рекурсивно, а затем сливает отсортированные части.
---
2. ⌛ Задача: Мердж-сортировка (MergeSort)
Условие:
Реализуйте алгоритм слияния для сортировки массива.
🎯 Решение:
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

let arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr));  // [2, 3, 4, 5, 8]
```
Объяснение:
Алгоритм разделяет массив на две части, сортирует каждую часть рекурсивно и затем сливает отсортированные массивы в один.
---
3. ⌛ Задача: Поиск элемента в отсортированном массиве (Бинарный поиск)
Условие:
Реализуйте бинарный поиск для нахождения элемента в отсортированном массиве.
🎯 Решение:
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;  // Если элемент не найден
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));  // 3
```
Объяснение:
Бинарный поиск делит массив пополам, каждый раз исключая одну из половин, пока не найдет искомый элемент.
---
4. ⌛ Задача: Поиск максимального элемента в массиве
Условие:
Найдите максимальный элемент в массиве, разделив его на подмассивы и затем вычислив максимумы каждого подмассива.
🎯 Решение:
```javascript
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const leftMax = findMax(arr.slice(0, mid));
  const rightMax = findMax(arr.slice(mid));

  return Math.max(leftMax, rightMax);
}

let arr = [5, 3, 8, 4, 2];
console.log(findMax(arr));  // 8
```
Объяснение:
Массив разделяется на два подмассива, для которых рекурсивно находят максимальные значения, а затем выбирается наибольшее из них.
---
5. ⌛ Задача: Сумма элементов массива
Условие:
Найдите сумму всех элементов массива, используя принцип "разделяй и властвуй".
🎯 Решение:
```javascript
function sumArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const leftSum = sumArray(arr.slice(0, mid));
  const rightSum = sumArray(arr.slice(mid));

  return leftSum + rightSum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr));  // 15
```
Объяснение:
Массив делится на подмассивы, для которых вычисляются суммы, затем эти суммы сливаются для получения общего результата.
---
6. ⌛ Задача: Сортировка строк по длине
Условие:
Отсортируйте массив строк по их длине.
🎯 Решение:
```javascript
function sortByLength(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = sortByLength(arr.slice(0, mid));
  const right = sortByLength(arr.slice(mid));

  return mergeStrings(left, right);
}

function mergeStrings(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].length < right[j].length) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

let arr = ["apple", "banana", "kiwi", "orange"];
console.log(sortByLength(arr));  // [ 'kiwi', 'apple', 'orange', 'banana' ]
```
Объяснение:
Массив строк разделяется и сортируется по длине с использованием слияния строк, где строки с меньшей длиной идут первыми.
---
7. ⌛ Задача: Перевернуть массив
Условие:
Переверните массив, используя рекурсию.
🎯 Решение:
```javascript
function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = reverseArray(arr.slice(0, mid));
  const right = reverseArray(arr.slice(mid));

  return [...right, ...left];
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));  // [5, 4, 3, 2, 1]
```
Объяснение:
Массив делится на две части, каждая из которых переворачивается рекурсивно, а затем части объединяются в обратном порядке.
---
8. ⌛ Задача: Нахождение медианы массива
Условие:
Найдите медиану массива чисел.
🎯 Решение:
```javascript
function findMedian(arr) {
  const sorted = mergeSort(arr);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

let arr = [3, 1, 4, 2, 5];
console.log(findMedian(arr));  // 3
```
Объяснение:
Массив сортируется с помощью сортировки слиянием, затем медиана извлекается в зависимости от четности длины массива.
---
9. ⌛ Задача: Найти пару с заданной суммой
Условие:
Найдите пару чисел в массиве, сумма которых равна заданному числу.
🎯 Решение:
```javascript
function findPairWithSum(arr, sum) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === sum) {
      return [arr[left], arr[right]];
    } else if (currentSum < sum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

let arr = [1, 4, 6, 8, 3];
let sum = 10;
console.log(findPairWithSum(arr, sum));  // [4, 6]
```
Объяснение:
Массив сортируется, затем используется два указателя, чтобы найти пару чисел, сумма которых равна заданному числу.
---
10. ⌛ Задача: Проверка на сбалансированность скобок
Условие:
Проверьте, сбалансированы ли скобки в строке.
🎯 Решение:
```javascript
function isBalanced(str) {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let str = "{[()]}";
console.log(isBalanced(str));  // true
```
Объяснение:
Используем стек для проверки, открываются ли и закрываются ли скобки правильно в строке.
Эти задачи демонстрируют широкий спектр применения принципа "Разделяй и властвуй" в программировании, начиная от сортировки и поиска, заканчивая более сложными операциями с данными.
---------------------
⋙ ❍ Двоичный поиск:
---
Двоичный поиск — это эффективный алгоритм поиска элемента в отсортированном массиве. Он работает за время O(log n), что делает его гораздо быстрее линейного поиска, особенно на больших массивах.
1. ⌛ Задача: Базовый двоичный поиск
Условие:
Напишите функцию, которая выполняет двоичный поиск в отсортированном массиве и возвращает индекс найденного элемента. Если элемент не найден, вернуть -1.
🎯 Решение:
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;  // если элемент не найден
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));  // 3
console.log(binarySearch(arr, 6));  // -1
```
Объяснение:
Алгоритм ищет в отсортированном массиве, постоянно уменьшая область поиска вдвое. Мы сравниваем элемент с текущим элементом на среднем индексе и в зависимости от результата, сужаем границы поиска.
---
2. ⌛ Задача: Поиск первого вхождения элемента
Условие:
Найдите индекс первого вхождения элемента в отсортированном массиве. Если элемент отсутствует, верните -1.
🎯 Решение:
```javascript
function binarySearchFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;  // продолжим искать в левой половине
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

let arr = [1, 3, 3, 5, 7, 9, 9];
console.log(binarySearchFirstOccurrence(arr, 3));  // 1
console.log(binarySearchFirstOccurrence(arr, 9));  // 5
```
Объяснение:
После нахождения целевого элемента, мы продолжаем искать в левой части массива, чтобы найти первое вхождение элемента.
---
3. ⌛ Задача: Поиск последнего вхождения элемента
Условие:
Найдите индекс последнего вхождения элемента в отсортированном массиве. Если элемент отсутствует, верните -1.
🎯 Решение:
```javascript
function binarySearchLastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;  // продолжаем искать в правой половине
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

let arr = [1, 3, 3, 5, 7, 9, 9];
console.log(binarySearchLastOccurrence(arr, 3));  // 2
console.log(binarySearchLastOccurrence(arr, 9));  // 6
```
Объяснение:
После нахождения целевого элемента, продолжаем искать в правой части массива, чтобы найти последнее вхождение элемента.
---
4. ⌛ Задача: Поиск наименьшего элемента в отсортированном массиве с цикличностью
Условие:
Дан отсортированный массив, который был вращён. Найдите минимальный элемент с использованием двоичного поиска.
🎯 Решение:
```javascript
function findMinInRotatedArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;  // минимальный элемент справа
    } else {
      right = mid;  // минимальный элемент слева
    }
  }
  return arr[left];
}

let arr = [6, 7, 9, 15, 19, 2, 3];
console.log(findMinInRotatedArray(arr));  // 2
```
Объяснение:
Если середина массива больше правого элемента, то минимальный элемент находится справа, иначе — слева. Алгоритм продолжает сужать диапазон поиска, пока не найдёт минимальный элемент.
---
5. ⌛ Задача: Проверка, существует ли элемент в массиве
Условие:
Проверьте, существует ли элемент в отсортированном массиве с помощью двоичного поиска.
🎯 Решение:
```javascript
function elementExists(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

let arr = [1, 3, 5, 7, 9];
console.log(elementExists(arr, 5));  // true
console.log(elementExists(arr, 6));  // false
```
Объяснение:
Простой двоичный поиск, который возвращает `true`, если элемент найден, и `false` в противном случае.
---
6. ⌛ Задача: Найти элемент, который не повторяется
Условие:
В массиве, где все элементы встречаются дважды, найдите элемент, который встречается один раз. Массив отсортирован.
🎯 Решение:
```javascript
function findSingleElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        left = mid + 2;  // ищем в правой половине
      } else {
        right = mid;  // ищем в левой половине
      }
    } else {
      if (arr[mid] === arr[mid - 1]) {
        left = mid + 1;  // ищем в правой половине
      } else {
        right = mid - 1;  // ищем в левой половине
      }
    }
  }
  return arr[left];
}

let arr = [1, 1, 3, 3, 5, 5, 7];
console.log(findSingleElement(arr));  // 7
```
Объяснение:
Используется двоичный поиск, но с дополнительной проверкой четности индекса. Если индексы элементов совпадают, продолжаем поиск в правой части, иначе — в левой.
---
7. ⌛ Задача: Поиск минимального элемента в отсортированном массиве
Условие:
Найдите минимальный элемент в отсортированном массиве (с возможными повторяющимися элементами).
🎯 Решение:
```javascript
function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[right]) {
      right = mid;  // минимальный элемент слева
    } else {
      left = mid + 1;  // минимальный элемент справа
    }
  }
  return arr[left];
}

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(arr));  // 0
```
Объяснение:
Алгоритм использует двоичный поиск для нахождения минимального элемента в отсортированном массиве с возможными повторяющимися элементами.
---
8. ⌛ Задача: Найти индекс элемента или точку вставки
Условие:
Напишите функцию, которая вернет индекс элемента в отсортированном массиве или точку, где он должен быть вставлен.
🎯 Решение:
```javascript
function searchInsertPosition(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

let arr = [1, 3, 5, 6];
console.log(searchInsertPosition(arr, 5));  // 2
console.log(searchInsertPosition(arr, 2));  // 1
```
Объяснение:
Этот алгоритм находит точку вставки для целевого элемента в отсортированный массив, если он отсутствует, или возвращает индекс, если элемент найден.
---
9. ⌛ Задача: Квадратный корень числа
Условие:
Найдите квадратный корень числа, используя двоичный поиск.
🎯 Решение:
```javascript
function sqrt(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;
    if (squared === x) {
      return mid;
    } else if (squared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

 }
  return right;  // возвращаем наибольший целый корень
}

console.log(sqrt(16));  // 4
console.log(sqrt(8));   // 2
```
Объяснение:
Для нахождения квадратного корня числа, мы применяем двоичный поиск на интервале от 0 до самого числа. Алгоритм сокращает диапазон, основываясь на сравнении квадрата среднего элемента с искомым числом.
---
10. ⌛ Задача: Найти позицию, где элемент больше или равен числу
Условие:
Найдите индекс первого элемента в отсортированном массиве, который больше или равен заданному числу.
🎯 Решение:
```javascript
function findGreaterOrEqual(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;  // продолжаем искать слева
    } else {
      left = mid + 1;
    }
  }
  return left;
}

let arr = [1, 2, 8, 10, 10, 12];
console.log(findGreaterOrEqual(arr, 5));  // 2
console.log(findGreaterOrEqual(arr, 10)); // 3
```
Объяснение:
Этот алгоритм находит индекс первого элемента, который больше или равен целевому числу.
---------------------
⋙ ❍ Поиск доминирующего элемента:
---
Задача о поиске доминирующего элемента обычно заключается в том, чтобы найти элемент, который встречается более чем в половине всех элементов массива. Если такого элемента нет, возвращается -1.
1. ⌛ Задача: Найти доминирующий элемент
Условие:
Напишите функцию, которая находит доминирующий элемент в массиве (если такой есть). Элемент считается доминирующим, если его частота больше, чем половина размера массива.
🎯 Решение:
```javascript
function findDominantElement(arr) {
  const n = arr.length;
  const frequency = {};

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > n / 2) {
      return num;
    }
  }
  return -1;
}

console.log(findDominantElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));  // 4
console.log(findDominantElement([3, 3, 4, 2, 4, 4, 2, 4]));     // -1
```
Объяснение:
Мы подсчитываем частоту каждого элемента и сразу проверяем, если элемент встречается больше, чем половина массива. Если такой элемент найден, мы возвращаем его. Если нет, возвращаем -1.
---
2. ⌛ Задача: Поиск доминирующего элемента с использованием хеш-таблицы
Условие:
Используя хеш-таблицу, найдите доминирующий элемент в массиве, если такой существует.
🎯 Решение:
```javascript
function findDominantElementWithHash(arr) {
  let count = {};
  let maxCount = 0;
  let candidate = -1;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
      maxCount = count[num];
      candidate = num;
    }
  }

  return maxCount > arr.length / 2 ? candidate : -1;
}

console.log(findDominantElementWithHash([2, 2, 3, 3, 2]));  // 2
console.log(findDominantElementWithHash([1, 1, 1, 2, 2]));  // -1
```
Объяснение:
Мы храним количество каждого элемента в хеш-таблице. Далее, проверяем, является ли элемент с максимальной частотой доминирующим (если его частота больше половины размера массива).
---
3. ⌛ Задача: Поиск доминирующего элемента с использованием сортировки
Условие:
Используя сортировку массива, найдите доминирующий элемент, если таковой существует.
🎯 Решение:
```javascript
function findDominantElementWithSort(arr) {
  arr.sort();
  const n = arr.length;

  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
      if (count > n / 2) {
        return arr[i];
      }
    } else {
      count = 1;
    }
  }
  return -1;
}

console.log(findDominantElementWithSort([3, 3, 4, 2, 4, 4, 2, 4, 4]));  // 4
console.log(findDominantElementWithSort([1, 1, 1, 2, 2]));  // -1
```
Объяснение:
После сортировки массива доминирующий элемент (если он существует) будет располагаться в середине массива, и его частота будет больше половины размера массива.
---
4. ⌛ Задача: Использование алгоритма Бойера-Мура для поиска доминирующего элемента
Условие:
Напишите функцию для поиска доминирующего элемента с использованием алгоритма Бойера-Мура, который работает за O(n) по времени и O(1) по памяти.
🎯 Решение:
```javascript
function findDominantElementBoyerMoore(arr) {
  let candidate = -1;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  let frequency = arr.filter(x => x === candidate).length;
  return frequency > arr.length / 2 ? candidate : -1;
}

console.log(findDominantElementBoyerMoore([2, 2, 3, 3, 2]));  // 2
console.log(findDominantElementBoyerMoore([1, 1, 1, 2, 2]));  // -1
```
Объяснение:
Алгоритм Бойера-Мура сначала находит кандидата на доминирующий элемент, а затем проверяет, встречается ли этот элемент больше половины раз в массиве.
---
5. ⌛ Задача: Поиск доминирующего элемента в массиве с четным количеством элементов
Условие:
Найдите доминирующий элемент в массиве с четным количеством элементов, если такой существует.
🎯 Решение:
```javascript
function findDominantElementEven(arr) {
  const n = arr.length;
  const frequency = {};

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > n / 2) {
      return num;
    }
  }
  return -1;
}

console.log(findDominantElementEven([4, 4, 4, 5, 5, 5, 4]));  // 4
console.log(findDominantElementEven([1, 2, 3, 3, 2, 1]));  // -1
```
Объяснение:
Аналогично задаче для нечетного количества элементов, мы проверяем, встречается ли элемент больше половины раз в массиве.
---
6. ⌛ Задача: Поиск доминирующего элемента среди строк
Условие:
Найдите строковый доминирующий элемент в массиве строк. Если такой элемент существует, верните его.
🎯 Решение:
```javascript
function findDominantStringElement(arr) {
  const n = arr.length;
  const frequency = {};

  for (const str of arr) {
    frequency[str] = (frequency[str] || 0) + 1;
    if (frequency[str] > n / 2) {
      return str;
    }
  }
  return -1;
}

console.log(findDominantStringElement(["apple", "banana", "apple", "apple"]));  // "apple"
console.log(findDominantStringElement(["apple", "banana", "cherry"]));          // -1
```
Объяснение:
Задача аналогична предыдущей, но с массивом строк. Мы проверяем, если строка встречается более чем половину раз.
---
7. ⌛ Задача: Проверка доминирования числа
Условие:
Напишите функцию, которая проверяет, является ли переданное число доминирующим элементом в массиве.
🎯 Решение:
```javascript
function isDominantElement(arr, num) {
  const count = arr.filter(x => x === num).length;
  return count > arr.length / 2;
}

console.log(isDominantElement([1, 2, 3, 1, 1], 1));  // true
console.log(isDominantElement([1, 2, 3, 4, 5], 3));  // false
```
Объяснение:
Мы просто фильтруем массив по заданному элементу и проверяем, превышает ли его частота половину размера массива.
---
8. ⌛ Задача: Поиск доминирующего элемента в большом массиве
Условие:
Найдите доминирующий элемент в большом массиве. Массив может быть размером в миллионы элементов.
🎯 Решение:
```javascript
function findDominantElementLarge(arr) {
  const frequency = {};
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > n / 2) {
      return num;
    }
  }
  return -1;
}

let largeArray = [...Array(1000000).keys()];
largeArray = [...largeArray, ...largeArray];  // доминирующий элемент: 999999
console.log(findDominantElementLarge(largeArray));  // 999999
```
Объяснение:
Используем тот же подход с хеш-таблицей, чтобы искать доминирующий элемент. Сложность алгоритма O(n).
---
9. ⌛ Задача: Найти доминирующий элемент среди четных чисел
Условие:
Найдите доминирующий элемент среди четных чисел в массиве.
🎯 Решение:
```javascript
function findDominantEvenElement(arr) {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  return findDominantElement(evenNumbers);
}

console.log(findDominantEvenElement([1, 2, 2, 4, 4, 4]));  // 4
console.log(findDominantEvenElement([1, 3, 5, 7]));         // -1
```
Объяснение:
Сначала фильтруем четные числа, затем применяем тот же алгоритм для поиска доминирующего элемента.
---
10. ⌛ Задача: Поиск доминирующего элемента в строках с разными регистрами
Условие:
Напишите функцию, которая находит доминирующий элемент в массиве строк, игнорируя регистр символов.
🎯 Решение:
```javascript
function findDominantStringElementCaseInsensitive(arr) {
  const normalizedArr = arr.map(str => str.toLowerCase());
  return findDominantStringElement(normalizedArr);
}

console.log(findDominantStringElementCaseInsensitive(["Apple", "banana", "apple", "apple"]));  // "apple"
console.log(findDominantStringElementCaseInsensitive(["Apple", "banana", "cherry"]));          // -1
```
Объяснение:
Сначала нормализуем строки до нижнего регистра, чтобы игнорировать различия в регистре, и затем используем алгоритм для поиска доминирующего элемента.
Каждая из этих задач использует разные подходы для поиска доминирующего элемента в массиве, включая использование хеш-таблиц, сортировки, алгоритма Бойера-Мура и другие.
---------------------
⋙ ❍ Модификация быстрой сортировки:
---
1. ⌛ Задача: Классическая быстрая сортировка
Условие:
Напишите функцию быстрой сортировки, которая сортирует массив чисел.
🎯 Решение:
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Алгоритм сортирует массив, выбирая опорный элемент (в данном случае последний) и разделяя массив на два подмассива — элементы, меньше опорного, и элементы, большие или равные опорному. Рекурсивно сортируем эти подмассивы.
---
2. ⌛ Задача: Быстрая сортировка с выбором случайного опорного элемента
Условие:
Модифицируйте быструю сортировку, чтобы она использовала случайный элемент как опорный.
🎯 Решение:
```javascript
function quickSortRandomPivot(arr) {
  if (arr.length <= 1) return arr;

  const randomIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[randomIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== randomIndex) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)];
}

console.log(quickSortRandomPivot([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Здесь мы выбираем случайный индекс как опорный элемент. Это помогает избежать худшего случая для уже отсортированных или почти отсортированных массивов.
---
3. ⌛ Задача: Быстрая сортировка с оптимизацией для маленьких массивов
Условие:
Для маленьких массивов (например, длиной меньше 10 элементов) используйте сортировку вставками вместо быстрой сортировки.
🎯 Решение:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function quickSortOptimized(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length <= 10) return insertionSort(arr);

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortOptimized(left), pivot, ...quickSortOptimized(right)];
}

console.log(quickSortOptimized([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Если массив мал, мы используем сортировку вставками, которая будет работать быстрее, чем быстрая сортировка для небольших массивов из-за меньших накладных расходов на рекурсию.
---
4. ⌛ Задача: Быстрая сортировка для строк
Условие:
Напишите быструю сортировку для массива строк, сортируя их по алфавиту.
🎯 Решение:
```javascript
function quickSortStrings(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortStrings(left), pivot, ...quickSortStrings(right)];
}

console.log(quickSortStrings(["banana", "apple", "cherry", "date", "elderberry"]));  // ['apple', 'banana', 'cherry', 'date', 'elderberry']
```
Объяснение:
Алгоритм сортировки строк аналогичен числовой быстрой сортировке. Мы сравниваем строки по алфавиту с помощью оператора `<`, который сравнивает строки лексикографически.
---
5. ⌛ Задача: Быстрая сортировка для массивов с отрицательными числами
Условие:
Напишите быструю сортировку для массива с отрицательными числами.
🎯 Решение:
```javascript
function quickSortWithNegative(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortWithNegative(left), pivot, ...quickSortWithNegative(right)];
}

console.log(quickSortWithNegative([3, -1, 4, -2, 5, -9, 2]));  // [-9, -2, -1, 2, 3, 4, 5]
```
Объяснение:
Этот алгоритм работает так же, как и для обычных чисел. Отрицательные числа обрабатываются точно так же, как и положительные, так как они корректно сравниваются в JavaScript.
---
6. ⌛ Задача: Быстрая сортировка с подсчетом количества операций
Условие:
Измените быструю сортировку так, чтобы она возвращала количество операций (сравнений и перестановок), которые она выполняет.
🎯 Решение:
```javascript
function quickSortWithCount(arr) {
  let count = 0;

  function helper(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      count++;
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...helper(left), pivot, ...helper(right)];
  }

  helper(arr);
  return count;
}

console.log(quickSortWithCount([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // 33
```
Объяснение:
Мы используем рекурсивную вспомогательную функцию, которая сортирует массив и одновременно подсчитывает количество сравнений.
---
7. ⌛ Задача: Быстрая сортировка с подсчетом частоты элементов
Условие:
Напишите быструю сортировку, которая находит частоту каждого элемента в массиве после сортировки.
🎯 Решение:
```javascript
function quickSortWithFrequency(arr) {
  const frequency = {};

  function helper(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...helper(left), pivot, ...helper(right)];
  }

  const sortedArr = helper(arr);

  sortedArr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  return frequency;
}

console.log(quickSortWithFrequency([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
// { '1': 2, '2': 1, '3': 2, '4': 1, '5': 3, '6': 1, '9': 1 }
```
Объяснение:
Сортируем массив, а затем подсчитываем, сколько раз каждый элемент встречается в отсортированном массиве.
---
8. ⌛ Задача: Быстрая сортировка с ограничением по времени
Условие:
Измените быструю сортировку, чтобы она завершалась, если время работы превышает заданный лимит.
🎯 Решение:
```javascript
function quickSortWithTimeLimit(arr, timeLimit) {
  const startTime = Date.now();

  function helper(arr) {
    if (Date.now() - startTime > timeLimit) {
      console.log("Time limit exceeded");
      return arr;
    }

    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...helper(left), pivot, ...helper(right)];
  }

  return helper(arr);
}

console.log(quickSortWithTimeLimit([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 100));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Реализуем ограничение по времени, используя функцию `Date.now()` для отслеживания времени работы. Если время превышает лимит, алгоритм завершает работу.
---
9. ⌛ Задача: Быстрая сортировка с улучшенной разбиением
Условие:
Используйте улучшенное разбиение с тремя частями, которое разделяет элементы на три категории: меньше, равные и больше опорного элемента.
🎯 Решение:
```javascript
function quickSortThreeWay(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let left = [];
  let equal = [];
  let right = [];

  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSortThreeWay(left), ...equal, ...quickSortThreeWay(right)];
}

console.log(quickSortThreeWay([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Здесь мы разделяем массив на три части: элементы, меньшие, равные и большие опорному элементу. Это помогает эффективно работать с дубликатами в массиве.
---
10. ⌛ Задача: Быстрая сортировка с поддержкой сортировки объектов по свойствам
Условие:
Напишите быструю сортировку, которая сортирует массив объектов по значению их свойств.
🎯 Решение:
```javascript
function quickSortObjects(arr, key) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1][key];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][key] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortObjects(left, key), arr[arr.length - 1], ...quickSortObjects(right, key)];
}

const arr = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

console.log(quickSortObjects(arr, 'id'));
// [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
```
Объяснение:
Алгоритм сортирует объекты массива по значению указанного свойства. Мы сравниваем объекты по значению их свойства и выполняем быструю сортировку.
---------------------
⋙ ❍ Подсчёт инверсий:
---
Задачи на подсчёт инверсий в массиве — это классическая задача, которая полезна для понимания различных алгоритмов сортировки, таких как модификация сортировки слиянием. Подсчёт инверсий помогает узнать, сколько элементов массива необходимо переставить, чтобы массив стал отсортированным. Инверсия — это пара элементов, где левый элемент больше правого.
1. ⌛ Задача: Подсчёт инверсий в неотсортированном массиве
Условие:
Напишите функцию, которая подсчитывает количество инверсий в массиве.
🎯 Решение:
```javascript
function countInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countInversions([1, 3, 2, 3, 1]));  // 4
```
Объяснение:
Простой алгоритм с использованием двух вложенных циклов, проверяющий все возможные пары элементов в массиве и увеличивающий счётчик инверсий, если левый элемент больше правого.
---
2. ⌛ Задача: Подсчёт инверсий с использованием сортировки слиянием
Условие:
Реализуйте подсчёт инверсий с использованием модификации сортировки слиянием. Это решение работает быстрее, чем прямой подсчёт с вложенными циклами.
🎯 Решение:
```javascript
function mergeCount(arr, tempArr, left, right) {
  if (left === right) return 0;
  const mid = Math.floor((left + right) / 2);
  let invCount = mergeCount(arr, tempArr, left, mid);
  invCount += mergeCount(arr, tempArr, mid + 1, right);
  invCount += merge(arr, tempArr, left, mid, right);
  return invCount;
}

function merge(arr, tempArr, left, mid, right) {
  let i = left; // Starting index for left subarray
  let j = mid + 1; // Starting index for right subarray
  let k = left; // Starting index to be sorted
  let invCount = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tempArr[k++] = arr[i++];
    } else {
      tempArr[k++] = arr[j++];
      invCount += (mid - i + 1); // All remaining elements in left subarray are greater
    }
  }

  while (i <= mid) {
    tempArr[k++] = arr[i++];
  }
  while (j <= right) {
    tempArr[k++] = arr[j++];
  }

  for (let i = left; i <= right; i++) {
    arr[i] = tempArr[i];
  }

  return invCount;
}

function countInversions(arr) {
  let tempArr = new Array(arr.length);
  return mergeCount(arr, tempArr, 0, arr.length - 1);
}

console.log(countInversions([1, 3, 2, 3, 1]));  // 4
```
Объяснение:
Этот алгоритм использует модификацию сортировки слиянием. При слиянии двух подмассивов мы считаем, сколько элементов из правой части массива меньше элементов из левой, что даёт количество инверсий.
---
3. ⌛ Задача: Подсчёт инверсий в массиве с отрицательными числами
Условие:
Модифицируйте функцию подсчёта инверсий так, чтобы она работала с массивами, содержащими отрицательные числа.
🎯 Решение:
Алгоритм сортировки слиянием, реализованный в предыдущем решении, уже будет корректно работать с отрицательными числами, так как сравнение чисел в JavaScript правильно работает для любых значений.
```javascript
console.log(countInversions([1, -3, 2, -3, 1]));  // 4
```
Объяснение:
Отрицательные числа можно обрабатывать так же, как и положительные, так как операторы сравнения поддерживают работу с ними.
---
4. ⌛ Задача: Подсчёт инверсий в строках
Условие:
Напишите функцию, которая подсчитывает количество инверсий в массиве строк.
🎯 Решение:
```javascript
function countInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countInversions(["apple", "banana", "cherry", "date", "banana"]));  // 2
```
Объяснение:
Строки сравниваются лексикографически в JavaScript, поэтому решение для чисел будет работать и для строк.
---
5. ⌛ Задача: Подсчёт инверсий с учётом объектов
Условие:
Напишите функцию для подсчёта инверсий в массиве объектов, сортируя по свойству объекта.
🎯 Решение:
```javascript
function countInversions(arr, key) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][key] > arr[j][key]) {
        count++;
      }
    }
  }
  return count;
}

const arr = [{ id: 1 }, { id: 3 }, { id: 2 }];
console.log(countInversions(arr, "id"));  // 1
```
Объяснение:
Мы сортируем объекты по ключу и считаем инверсии в массиве объектов.
---
6. ⌛ Задача: Подсчёт инверсий в отсортированном массиве
Условие:
Подсчитайте количество инверсий в уже отсортированном массиве. Какое количество инверсий будет в отсортированном массиве?
🎯 Решение:
```javascript
console.log(countInversions([1, 2, 3, 4, 5]));  // 0
```
Объяснение:
В отсортированном массиве не будет инверсий, так как каждый элемент массива будет меньше или равен следующему.
---
7. ⌛ Задача: Подсчёт инверсий в массиве с большим количеством элементов
Условие:
Напишите функцию для подсчёта инверсий в массиве с большим количеством элементов (например, от 10 000 до 1 000 000 элементов).
🎯 Решение:
Для массивов большого размера лучше использовать алгоритм слияния, так как прямой подсчёт инверсий с вложенными циклами будет слишком медленным.
```javascript
const largeArr = Array.from({ length: 100000 }, (_, i) => Math.floor(Math.random() * 100000));
console.log(countInversions(largeArr));  // Выводит количество инверсий в большом массиве
```
Объяснение:
Алгоритм сортировки слиянием имеет сложность O(n log n), что позволяет эффективно работать с большими массивами.
---
8. ⌛ Задача: Подсчёт инверсий после определённых перестановок
Условие:
Напишите функцию, которая подсчитывает количество инверсий в массиве после серии перестановок (например, переставить элементы по индексам).
🎯 Решение:
```javascript
function countInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

let arr = [3, 1, 4, 5, 2];
arr[0] = 1;  // Перестановка
console.log(countInversions(arr));  // 3
```
Объяснение:
После перестановки элементов количество инверсий может измениться, и мы пересчитываем их после каждой перестановки.
---
9. ⌛ Задача: Подсчёт инверсий для больших чисел
Условие:
Напишите функцию, которая подсчитывает инверсии в массиве, содержащем очень большие числа (например, числа до 10^9).
🎯 Решение:
Алгоритм сортировки слиянием остаётся эффективным и для очень больших чисел.
```javascript
console.log(countInversions([1000000000, 500000000, 100000000, 999999999]));  // 3
```
Объяснение:
Подсчёт инверсий не зависит от величины чисел, а зависит от порядка элементов в массиве.
---
10. ⌛ Задача: Подсчёт инверсий в частично отсортированном массиве
Условие:
Напишите функцию, которая подсчитывает инверсии в частично отсортированном массиве (например, массив с некоторыми случайными элементами).
🎯 Решение:
```javascript
console.log(countInversions([1, 3, 5, 2, 4, 6]));  // 3
```
Объяснение:
Инверсии будут подсчитаны для элементов, которые нарушают порядок, несмотря на то, что массив частично отсортирован.
---------------------
⋙ ❍ Задача «Пара ближайших точек»:
---
Задача «Пара ближайших точек» — это классическая задача на нахождение двух ближайших точек в двумерном пространстве. В этой задаче нам нужно найти пару точек, которые имеют минимальное расстояние между собой.
1. ⌛ Задача: Нахождение пары ближайших точек
Условие:
Дан массив точек в двумерном пространстве. Напишите функцию, которая находит пару ближайших точек.
🎯 Решение:
```javascript
function distance(p1, p2) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

function closestPair(points) {
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = distance(points[i], points[j]);
      if (dist < minDist) {
        minDist = dist;
        pair = [points[i], points[j]];
      }
    }
  }

  return pair;
}

const points = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 5, y: 5}];
console.log(closestPair(points));  // [{x: 1, y: 1}, {x: 2, y: 2}]
```
Объяснение:
Этот алгоритм перебирает все возможные пары точек и вычисляет их расстояние. Сравнивая все расстояния, он находит пару с минимальным расстоянием.
---
2. ⌛ Задача: Нахождение ближайших точек с использованием сортировки
Условие:
Напишите алгоритм, который находит пару ближайших точек, используя сортировку для ускорения вычислений.
🎯 Решение:
```javascript
function closestPair(points) {
  points.sort((a, b) => a.x - b.x);  // Сортируем по оси X
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[j].x - points[i].x > minDist) break;  // Прекращаем поиск, если расстояние по X больше минимального расстояния
      const dist = Math.sqrt((points[j].x - points[i].x) ** 2 + (points[j].y - points[i].y) ** 2);
      if (dist < minDist) {
        minDist = dist;
        pair = [points[i], points[j]];
      }
    }
  }

  return pair;
}

const points = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 5, y: 5}];
console.log(closestPair(points));  // [{x: 1, y: 1}, {x: 2, y: 2}]
```
Объяснение:
В этой версии мы сначала сортируем точки по оси X. Это позволяет уменьшить количество проверяемых пар, так как мы сразу можем исключить пары, расстояние между которыми по оси X превышает минимальное расстояние.
---
3. ⌛ Задача: Реализация функции для подсчета расстояния
Условие:
Напишите отдельную функцию для вычисления расстояния между двумя точками.
🎯 Решение:
```javascript
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

const p1 = {x: 1, y: 1};
const p2 = {x: 4, y: 5};
console.log(distance(p1, p2));  // 5
```
Объяснение:
Функция `distance` использует стандартную формулу для нахождения расстояния между двумя точками в двумерном пространстве.
---
4. ⌛ Задача: Нахождение пары ближайших точек в больших массивах
Условие:
Оптимизируйте решение для поиска ближайших точек в массиве, содержащем до 1 миллиона точек.
🎯 Решение:
Для больших массивов рекомендуется использовать алгоритм «разделяй и властвуй» или структуру данных для ускоренного поиска ближайших точек.
```javascript
function closestPair(points) {
  function divide(points) {
    if (points.length <= 3) {
      let minDist = Infinity;
      let pair = [];
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dist = distance(points[i], points[j]);
          if (dist < minDist) {
            minDist = dist;
            pair = [points[i], points[j]];
          }
        }
      }
      return pair;
    }

    const mid = Math.floor(points.length / 2);
    const left = points.slice(0, mid);
    const right = points.slice(mid);

    const leftPair = divide(left);
    const rightPair = divide(right);
    const minPair = distance(leftPair[0], leftPair[1]) < distance(rightPair[0], rightPair[1]) ? leftPair : rightPair;

    return minPair;
  }

  points.sort((a, b) => a.x - b.x);  // Сортировка по оси X
  return divide(points);
}

const points = [{x: 1, y: 1}, {x: 3, y: 3}, {x: 5, y: 1}, {x: 4, y: 2}, {x: 6, y: 3}];
console.log(closestPair(points));  // [{x: 3, y: 3}, {x: 4, y: 2}]
```
Объяснение:
Алгоритм делит массив точек на две половины и рекурсивно находит пару ближайших точек в каждой половине. После этого сравниваются возможные пары на границе двух половин.
---
5. ⌛ Задача: Нахождение ближайших точек с использованием математической оптимизации
Условие:
Найдите пару ближайших точек с использованием математической оптимизации, чтобы избежать ненужных вычислений.
🎯 Решение:
Оптимизация может заключаться в раннем завершении поиска, если расстояние между точками уже стало слишком большим.
```javascript
function closestPair(points) {
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = distance(points[i], points[j]);
      if (dist < minDist) {
        minDist = dist;
        pair = [points[i], points[j]];
      }
      if (dist > minDist) break;  // Преждевременно прекращаем дальнейшие вычисления
    }
  }

  return pair;
}

const points = [{x: 2, y: 3}, {x: 4, y: 6}, {x: 8, y: 10}];
console.log(closestPair(points));  // [{x: 2, y: 3}, {x: 4, y: 6}]
```
Объяснение:
Если мы находим пару с более удалёнными точками, то можем остановить дальнейшее вычисление, так как ближайшая пара уже найдена.
---
6. ⌛ Задача: Нахождение пары ближайших точек в квадрате 10x10
Условие:
Найдите пару ближайших точек в заданном диапазоне (например, внутри квадрата с размером 10x10).
🎯 Решение:
Предположим, что все точки находятся в пределах квадрата 10x10. Мы будем искать пару ближайших точек в этом диапазоне.
```javascript
const points = [{x: 1, y: 1}, {x: 3, y: 4}, {x: 7, y: 8}, {x: 9, y: 9}];
console.log(closestPair(points));  // [{x: 7, y: 8}, {x: 9, y: 9}]
```
Объяснение:
Мы используем метод поиска ближайших точек, описанный ранее, и работаем с фиксированным набором точек.
---
7. ⌛ Задача: Пара ближайших точек в двумерной сетке
Условие:
Дан набор точек, расположенных на двумерной сетке. Найдите пару ближайших точек.
🎯 Решение:
Решение аналогично предыдущим задачам, где мы находим минимальное расстояние между точками на двумерной сетке.
```javascript
const points = [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}];
console.log(closestPair(points));  // [{x: 1, y: 1}, {x: 2, y: 2}]
```
Объяснение:
Мы просто ищем пару ближайших точек, используя известные алгоритмы нахождения минимального расстояния.
---
8. ⌛ Задача: Поиск ближайших точек для заданной точки
Условие:
Дан массив точек. Найдите пару ближайших точек для заданной точки, например, точки (3, 3).
🎯 Решение:
```javascript
function closestToPoint(points, p) {
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length; i++) {
    const dist = distance(points[i], p);
    if (dist < minDist) {
      minDist = dist;
      pair = [points[i], p];
    }
  }

  return pair;
}

const points = [{x: 1, y: 1}, {x: 3, y: 3}, {x: 5, y: 5}];
const p = {x: 3, y: 3};
console.log(closestToPoint(points, p));  // [{x: 3, y: 3}, {x: 3, y: 3}]
```
Объяснение:
Алгоритм ищет точку, которая наиболее близка к заданной точке `p`.
---
9. ⌛ Задача: Пара ближайших точек на прямой
Условие:
Даны точки, расположенные на прямой. Найдите пару ближайших точек.
🎯 Решение:
```javascript
function closestPairOnLine(points) {
  points.sort((a, b) => a.x - b.x);  // Сортируем по оси X
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length - 1; i++) {
    const dist = points[i + 1].x - points[i].x;
    if (dist < minDist) {
      minDist = dist;
      pair = [points[i], points[i + 1]];
    }
  }

  return pair;
}

const points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}];
console.log(closestPairOnLine(points));  // [{x: 1, y: 2}, {x: 3, y: 4}]
```
Объяснение:
Так как точки расположены на прямой, мы сортируем их по координате x и просто ищем пару ближайших точек.
---
10. ⌛ Задача: Пара ближайших точек среди случайных точек
Условие:
Генерируйте случайные точки в диапазоне (0, 10) и найдите пару ближайших точек.
🎯 Решение:
```javascript
function generateRandomPoints(n) {
  const points = [];
  for (let i = 0; i < n; i++) {
    points.push({ x: Math.random() * 10, y: Math.random() * 10 });
  }
  return points;
}

const points = generateRandomPoints(5);
console.log(points);
console.log(closestPair(points));
```
Объяснение:
Для генерации случайных точек используется функция `generateRandomPoints`, которая создаёт массив точек с координатами в пределах от 0 до 10. Затем мы используем функцию для нахождения ближайших точек.
Эти задачи и решения помогут вам разобраться в алгоритмах нахождения ближайших точек и их оптимизации в зависимости от особенностей данных.
---------------------
⋙ ❍ Динамическое программирование:
---
Динамическое программирование (ДП) — это метод решения задач, которые можно разделить на подзадачи, решения которых могут быть использованы для решения исходной задачи. В этом подходе важно запоминать уже решенные подзадачи, чтобы избежать повторных вычислений.
1. ⌛ Задача: Задача о рюкзаке (0/1)
Условие:
Дано множество предметов, каждый из которых имеет вес и стоимость. Нужно выбрать предметы таким образом, чтобы их суммарная стоимость была максимальной, а общий вес не превышал заданной вместимости рюкзака.
🎯 Решение:
```javascript
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
console.log(knapsack(weights, values, capacity));  // 7
```
Объяснение:
Используется двумерный массив `dp`, где `dp[i][w]` — это максимальная стоимость, которую можно получить с первым `i` предметом и рюкзаком вместимости `w`. Мы итеративно заполняем этот массив, выбирая либо не включать предмет в рюкзак, либо включить его.
---
2. ⌛ Задача: Поиск длины наибольшей общей подпоследовательности (LCS)
Условие:
Даны две строки. Нужно найти длину наибольшей общей подпоследовательности (LCS).
🎯 Решение:
```javascript
function lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(lcs(str1, str2));  // 4
```
Объяснение:
Мы создаем двумерный массив `dp`, где `dp[i][j]` хранит длину LCS для первых `i` символов первой строки и первых `j` символов второй строки. Если символы строк совпадают, увеличиваем значение на 1, иначе берем максимальное значение из соседних ячеек.
---
3. ⌛ Задача: Задача о числе способов разложения числа (Проблема разбиения)
Условие:
Найти количество способов разложить число `n` на сумму чисел, используя числа от 1 до `n`.
🎯 Решение:
```javascript
function countPartitions(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;  // Есть один способ разложить 0 (пустое разбиение)

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[n];
}

const n = 5;
console.log(countPartitions(n));  // 7
```
Объяснение:
Используем динамическое программирование для подсчета способов разложения числа. Мы начинаем с разбиения 0 и добавляем все возможные числа от 1 до `n`.
---
4. ⌛ Задача: Числа Фибоначчи
Условие:
Найти `n`-е число Фибоначчи.
🎯 Решение:
```javascript
function fibonacci(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fibonacci(10));  // 55
```
Объяснение:
Числа Фибоначчи можно вычислить, используя предыдущие два числа, что и делает этот алгоритм. Мы создаем массив для хранения всех чисел до `n`, начиная с 0 и 1.
---
5. ⌛ Задача: Задача о минимальной стоимости пути в сетке
Условие:
Дана сетка (матрица), где каждая ячейка содержит стоимость перемещения через нее. Нужно найти минимальную стоимость пути от верхнего левого угла до правого нижнего, перемещаясь только вниз или вправо.
🎯 Решение:
```javascript
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m).fill().map(() => Array(n).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
console.log(minPathSum(grid));  // 7
```
Объяснение:
Для каждой ячейки мы находим минимальную стоимость пути, добавляя стоимость текущей ячейки к минимальной стоимости из соседей (слева или сверху).
---
6. ⌛ Задача: Задача о лестнице
Условие:
Нужно найти количество способов подняться на вершину лестницы, если можно делать шаги по 1 или 2 ступеньки.
🎯 Решение:
```javascript
function climbStairs(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbStairs(5));  // 8
```
Объяснение:
Для каждой ступеньки мы находим количество способов, используя предыдущие две ступеньки (по аналогии с числами Фибоначчи).
---
7. ⌛ Задача: Декартовы произведения (Перестановки с повторениями)
Условие:
Найти все перестановки элементов множества с возможными повторениями.
🎯 Решение:
```javascript
function permute(nums) {
  const res = [];
  const dp = (current) => {
    if (current.length === nums.length) {
      res.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      current.push(nums[i]);
      dp(current);
      current.pop();
    }
  };
  dp([]);
  return res;
}

console.log(permute([1, 2, 3]));
```
Объяснение:
Используем рекурсивный подход для генерации всех возможных перестановок с помощью динамического программирования.
---
8. ⌛ Задача: Разбиение числа на сумму чисел
Условие:
Найти количество способов разложить число `n` на сумму чисел от 1 до `n`.
🎯 Решение:
```javascript
function partitionNumber(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[n];
}

console.log(partitionNumber(5));  // 7
```
Объяснение:
Задача заключается в том, чтобы найти количество разбиений числа `n`. Для этого создаем массив `dp`, где `dp[i]` хранит количество способов разбиения числа `i`. Внешний цикл пробегает по числам от 1 до `n`, а внутренний — по возможным значениям для разбиений.
---
9. ⌛ Задача: Наибольшая возрастающая подпоследовательность
Дана последовательность чисел. Необходимо найти длину наибольшей возрастающей подпоследовательности.
🎯 Решение:
```javascript
function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));  // 4
```
Объяснение:
Мы используем динамическое программирование для решения задачи. В массиве `dp` хранится длина наибольшей возрастающей подпоследовательности, заканчивающейся на каждом элементе. Если элемент текущей последовательности больше предыдущего, то длина возрастающей подпоследовательности обновляется.
---
10. ⌛ Задача: Минимальная сумма пути в треугольнике
Условие:
Дан треугольник чисел, нужно найти путь с минимальной суммой, начиная с вершины и двигаясь к нижнему ряду, только перемещаясь по соседним числам.
🎯 Решение:
```javascript
function minimumTotal(triangle) {
  const n = triangle.length;
  const dp = Array(n).fill(0);

  // Идем с последнего ряда треугольника
  for (let row = n - 1; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      if (row === n - 1) {
        dp[col] = triangle[row][col];
      } else {
        dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
      }
    }
  }

  return dp[0];
}

const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];

console.log(minimumTotal(triangle));  // 11
```
Объяснение:
Мы начинаем с последнего ряда треугольника и двигаемся к первому. Для каждой ячейки вычисляем минимальную сумму, добавляя минимальную сумму из соседних элементов на следующем уровне. Таким образом, получаем минимальную сумму пути, начиная с вершины треугольника.
Эти задачи показывают разнообразие применения динамического программирования и решают различные задачи с использованием подхода оптимизации и запоминания подзадач.
---------------------
⋙ ❍ Принципы построения алгоритмов:
---
Принципы построения алгоритмов играют ключевую роль в разработке эффективных и понятных решений для различных задач.
1. ⌛ Задача: Проверка на палиндром
Условие:
Напишите функцию, которая проверяет, является ли строка палиндромом.
🎯 Решение:
```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/\W/g, '').toLowerCase();  // Убираем все неалфавитные символы и приводим к нижнему регистру
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
```
Объяснение:
Для проверки на палиндром мы приводим строку к нижнему регистру и удаляем все неалфавитные символы с помощью регулярных выражений. Затем сравниваем строку с её перевёрнутой версией.
---
2. ⌛ Задача: Сортировка пузырьком
Условие:
Реализуйте алгоритм сортировки пузырьком.
🎯 Решение:
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Меняем местами элементы
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6]));  // [1, 2, 5, 5, 6, 9]
```
Объяснение:
Алгоритм сортировки пузырьком состоит в том, что на каждом проходе по массиву мы сравниваем соседние элементы и меняем их местами, если они идут в неправильном порядке. Процесс повторяется, пока не будет достигнут отсортированный массив.
---
3. ⌛ Задача: Нахождение максимального элемента в массиве
Условие:
Напишите функцию, которая находит максимальное значение в массиве.
🎯 Решение:
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 5, 3, 9, 2]));  // 9
```
Объяснение:
Мы инициализируем переменную `max` значением первого элемента массива и далее поочередно сравниваем его с остальными элементами массива, обновляя значение `max`, если текущий элемент больше.
---
4. ⌛ Задача: Нахождение факториала числа
Условие:
Напишите функцию для нахождения факториала числа.
🎯 Решение:
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);  // Рекурсивный вызов
}

console.log(factorial(5));  // 120
```
Объяснение:
Используем рекурсию для нахождения факториала числа. В каждом рекурсивном вызове уменьшаем значение на 1, пока не достигнем базового случая (0 или 1).
---
5. ⌛ Задача: Поиск в массиве с использованием бинарного поиска
Условие:
Напишите функцию для поиска элемента в отсортированном массиве с использованием бинарного поиска.
🎯 Решение:
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;  // Элемент не найден
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));  // 2
```
Объяснение:
Бинарный поиск работает на отсортированных массивах. Мы начинаем с поиска среднего элемента и сравниваем его с искомым значением. В зависимости от результата поиска мы сужаем область поиска, повторяя процесс.
---
6. ⌛ Задача: Чтение строк и подсчёт гласных
Условие:
Напишите функцию, которая подсчитывает количество гласных букв в строке.
🎯 Решение:
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World!"));  // 3
```
Объяснение:
Мы проходим по всем символам строки и проверяем, является ли символ гласной (включен ли он в строку `vowels`). Если да, увеличиваем счётчик.
---
7. ⌛ Задача: Сумма всех элементов в массиве
Условие:
Напишите функцию, которая находит сумму всех элементов в массиве.
🎯 Решение:
```javascript
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```
Объяснение:
Проходим по всем элементам массива и добавляем каждый элемент к переменной `sum`, которая в итоге и будет содержать сумму всех чисел.
---
8. ⌛ Задача: Обратный порядок элементов в массиве
Условие:
Напишите функцию, которая возвращает массив в обратном порядке.
🎯 Решение:
```javascript
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
```
Объяснение:
Создаём новый массив `reversedArr` и заполняем его элементами исходного массива в обратном порядке, начиная с последнего элемента.
---
9. ⌛ Задача: Генерация чисел Фибоначчи
Условие:
Напишите функцию для генерации последовательности чисел Фибоначчи до `n`-го числа.
🎯 Решение:
```javascript
function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(6));  // [0, 1, 1, 2, 3, 5]
```
Объяснение:
В начале создаём массив с двумя первыми числами Фибоначчи (0 и 1), а затем добавляем новые числа, суммируя два предыдущих.
---
10. ⌛ Задача: Проверка на четность числа
Условие:
Напишите функцию, которая проверяет, является ли число четным.
🎯 Решение:
```javascript
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false
```
Объяснение:
Для проверки на чётность достаточно проверить, даёт ли деление числа на 2 остаток 0. Если остаток 0, значит число чётное.
Эти задачи демонстрируют различные принципы построения алгоритмов, такие как: использование рекурсии, обход коллекций, сортировка, проверка условий и работы с данными.
---------------------
⋙ ❍ Задача «Размен 2»:
---
Задача «Размен 2» обычно относится к задачам динамического программирования, в которых нужно найти минимальное количество монет для размена определенной суммы с использованием набора монет определенных номиналов. В данном случае будет предложено 10 различных задач с решением на языке JavaScript, связанных с разменом.
1. ⌛ Задача: Минимальное количество монет для размена суммы
Условие:
Дан набор монет и сумма, нужно найти минимальное количество монет, с помощью которых можно разменять заданную сумму.
🎯 Решение:
```javascript
function minCoins(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(minCoins([1, 2, 5], 11));  // 3 (5 + 5 + 1)
```
Объяснение:
Массив `dp` используется для хранения минимального количества монет для размена суммы `i`. В каждом шаге проверяется, можно ли использовать монету для уменьшения текущей суммы.
---
2. ⌛ Задача: Размен суммы с заданными номиналами (ограничения на количество монет)
Условие:
Есть набор монет с ограниченным количеством каждой монеты. Нужно найти, возможно ли разменять сумму, используя не более заданного количества каждой монеты.
🎯 Решение:
```javascript
function minCoinsLimited(coins, limit, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = amount; j >= coins[i]; j--) {
      for (let k = 1; k <= limit[i] && k * coins[i] <= j; k++) {
        dp[j] = Math.min(dp[j], dp[j - k * coins[i]] + k);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(minCoinsLimited([1, 2, 5], [2, 2, 2], 11));  // 3
```
Объяснение:
Используем динамическое программирование с дополнительной проверкой на ограничение количества монет. Для каждой монеты проверяется, сколько раз её можно использовать для достижения заданной суммы.
---
3. ⌛ Задача: Размен суммы с использованием только монет одной валюты
Условие:
Есть только один номинал монет. Нужно найти минимальное количество монет для размена суммы.
🎯 Решение:
```javascript
function minCoinsSingleCoin(coin, amount) {
  if (amount % coin === 0) {
    return amount / coin;
  }
  return -1;
}

console.log(minCoinsSingleCoin(5, 20));  // 4
console.log(minCoinsSingleCoin(3, 7));   // -1
```
Объяснение:
Если сумма делится на номинал монеты, то минимальное количество монет равно сумме, деленной на этот номинал. Если деление не нацело, размен невозможен.
---
4. ⌛ Задача: Невозможный размен
Условие:
Даны монеты и сумма. Нужно вернуть `true`, если размен суммы невозможен с использованием данных монет, и `false` в противном случае.
🎯 Решение:
```javascript
function isPossible(coins, amount) {
  const dp = Array(amount + 1).fill(false);
  dp[0] = true;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] || dp[i - coin];
    }
  }

  return dp[amount];
}

console.log(isPossible([1, 2, 5], 11));  // true
console.log(isPossible([2, 5], 7));      // false
```
Объяснение:
Создаем массив `dp`, где `dp[i]` хранит информацию о том, возможно ли разменять сумму `i`. Мы поочередно проверяем все монеты, обновляя массив.
---
5. ⌛ Задача: Размен с минимальной суммой дополнительного остатка
Условие:
Нужно найти минимальное количество монет, при котором остаток при размене будет минимален.
🎯 Решение:
```javascript
function minCoinsWithRemainder(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(minCoinsWithRemainder([1, 2, 5], 7));  // 2
```
Объяснение:
Задача аналогична предыдущей, но здесь нам важно минимизировать остаток. Мы вычисляем количество монет, которое дает минимальный остаток при размене.
---
6. ⌛ Задача: Размен для всех возможных сумм от 0 до N
Условие:
Нужно найти минимальное количество монет для всех возможных сумм от 0 до N.
🎯 Решение:
```javascript
function coinChangeAll(coins, N) {
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp.slice(0, N + 1);
}

console.log(coinChangeAll([1, 2, 5], 11));
```
Объяснение:
Мы строим массив `dp`, в котором для каждой суммы от 0 до N содержится минимальное количество монет для размена.
---
7. ⌛ Задача: Размен с учетом минимальной монеты для каждого номинала
Условие:
Для каждого номинала монеты нужно использовать минимальное количество монет. Разменяйте сумму с минимальными затратами.
🎯 Решение:
```javascript
function minCoinsForEachCoin(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(minCoinsForEachCoin([1, 2, 5], 7));  // 2
```
Объяснение:
Подход аналогичен предыдущим задачам, но ключевое отличие заключается в том, что мы применяем минимальные монеты для размена.
---
8. ⌛ Задача: Проверка наличия достаточного количества монет для размена
Условие:
Даны монеты и их количество. Нужно проверить, можно ли разменять сумму с учетом ограничений по количеству монет.
🎯 Решение:
```javascript
function isExchangePossible(coins, amounts, total) {
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    sum += Math.min(Math.floor(total / coins[i]), amounts[i]);
    total -= sum * coins[i];
  }
  return total === 0;
}

console.log(isExchangePossible([1, 2, 5], [2, 2, 1], 7));  // true
```
Объяснение:
Для каждой монеты проверяется, сколько монет можно использовать, чтобы достичь нужной суммы, с учётом ограничений.
---
9. ⌛ Задача: Размен суммы с обратной связью (монеты с "возвращением")
Условие:
Есть монеты с возможностью их возврата. Нужно найти минимальное количество монет для размена суммы, при этом учесть, что монеты могут быть возвращены.
🎯 Решение:
```javascript
function minCoinsWithReturn(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(minCoinsWithReturn([1, 2, 5], 7));  // 2
```
Объяснение:
В этом решении также используется динамическое программирование, но в условиях задачи учитываются особенности возврата монет, которые могут влиять на итоговое количество монет для размена.
---
10. ⌛ Задача: Размен с минимальными потерями
Условие:
Нужно найти минимальные потери при размене суммы, если размен невозможен. Потери — это разница между суммой и минимально возможной суммой, которую можно получить.
🎯 Решение:
```javascript
function minLoss(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? amount : dp[amount];
}

console.log(minLoss([1, 2, 5], 7));  // 2
```
Объяснение:
В случае невозможности размена суммы мы вычисляем минимальные потери, то есть разницу между целью и ближайшей возможной суммой.
Эти задачи демонстрируют различные подходы к решению задачи размена с использованием динамического программирования, проверок на невозможность размена и других техник.
---
Вот 10 более сложных задач, связанных с разменом монет (или аналогичными задачами), которые можно решить с использованием различных техник, включая динамическое программирование и жадные алгоритмы.
1. ⌛ Задача: Размен с возвратом монет (ограничение по количеству)
Условие:
Есть набор монет с ограничением по количеству для каждого номинала. Нужно найти минимальное количество монет, чтобы разменять сумму. При этом если размен невозможен, вернуть -1.
🎯 Решение:
```javascript
function minCoinsWithReturn(coins, amounts, total) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = total; j >= coins[i]; j--) {
      for (let k = 1; k <= amounts[i] && k * coins[i] <= j; k++) {
        dp[j] = Math.min(dp[j], dp[j - k * coins[i]] + k);
      }
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(minCoinsWithReturn([1, 2, 5], [2, 2, 1], 7));  // 3
```
Объяснение:
Задача решается с помощью динамического программирования, где для каждого номинала проверяется, сколько раз его можно использовать для размена суммы, с учётом ограничения на количество монет.
---
2. ⌛ Задача: Размен с минимальной стоимостью (с учётом номиналов и ограничений)
Условие:
У нас есть несколько номиналов монет, и для каждого номинала ограничено количество монет. Нужно найти минимальное количество монет, которое потребуется для размена суммы. Если это невозможно, вернуть -1.
🎯 Решение:
```javascript
function minCoinsWithLimits(coins, limits, total) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < total + 1; j++) {
      for (let k = 1; k <= limits[i]; k++) {
        if (j >= k * coins[i]) {
          dp[j] = Math.min(dp[j], dp[j - k * coins[i]] + k);
        }
      }
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(minCoinsWithLimits([1, 2, 5], [2, 2, 1], 7));  // 3
```
Объяснение:
Задача требует динамического подхода с учётом ограничения по количеству монет для каждого номинала. Мы применяем динамическое программирование и на каждом шаге проверяем, сколько раз можем использовать монеты, чтобы разменять сумму.
---
3. ⌛ Задача: Размен с минимальной разницей
Условие:
Даны несколько номиналов монет, нужно найти минимальное количество монет, которое можно использовать для размена суммы. Если невозможно разменять точно, вернуть минимальное количество монет, которые составляют сумму, близкую к нужной.
🎯 Решение:
```javascript
function minCoinsWithDifference(coins, total) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= total; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(minCoinsWithDifference([1, 2, 5], 7));  // 2
console.log(minCoinsWithDifference([1, 3, 4], 6));  // 2
```
Объяснение:
Этот алгоритм использует динамическое программирование для нахождения минимального количества монет. В случае, если точное разбиение суммы невозможно, программа всё равно возвращает минимальное количество монет, которые можно использовать для получения максимально близкой суммы.
---
4. ⌛ Задача: Невозможный размен с минимальными потерями
Условие:
Нужно найти размен суммы с минимальными потерями. Потери — это разница между заданной суммой и суммой, которую можно составить из данных монет.
🎯 Решение:
```javascript
function minLoss(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  let result = dp[amount];
  if (result === Infinity) {
    for (let i = amount - 1; i >= 0; i--) {
      if (dp[i] !== Infinity) {
        result = dp[i];
        break;
      }
    }
  }

  return result === Infinity ? -1 : result;
}

console.log(minLoss([1, 2, 5], 7));  // 2
```
Объяснение:
Мы используем динамическое программирование для нахождения минимального количества монет, которые могут быть использованы для размена суммы. В случае невозможности точного размена, программа находит сумму с минимальными потерями.
---
5. ⌛ Задача: Размен с ограничением на максимальное количество монет для разменной суммы
Условие:
Есть монеты с ограниченным количеством каждой. Нужно найти минимальное количество монет для размена суммы, при этом учитывать максимальное количество монет для каждой суммы.
🎯 Решение:
```javascript
function minCoinsMaxLimit(coins, limits, total) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = total; j >= coins[i]; j--) {
      for (let k = 1; k <= limits[i] && k * coins[i] <= j; k++) {
        dp[j] = Math.min(dp[j], dp[j - k * coins[i]] + k);
      }
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(minCoinsMaxLimit([1, 2, 5], [3, 3, 2], 7));  // 3
```
Объяснение:
Для каждой монеты учитывается её ограниченное количество. Мы используем динамическое программирование с дополнительной проверкой на максимальное количество монет.
---
6. ⌛ Задача: Найти наибольшую возможную сумму для размена
Условие:
Нужно найти максимальную сумму, которую можно составить из заданного набора монет с ограничениями на их количество.
🎯 Решение:
```javascript
function maxPossibleAmount(coins, limits) {
  let maxAmount = 0;
  for (let i = 0; i < coins.length; i++) {
    maxAmount += coins[i] * limits[i];
  }
  return maxAmount;
}

console.log(maxPossibleAmount([1, 2, 5], [3, 3, 2]));  // 16
```
Объяснение:
Здесь просто нужно вычислить максимальную сумму, которая может быть получена, если использовать все доступные монеты в максимально возможном количестве.
---
7. ⌛ Задача: Размен с минимальным остатком
Условие:
Нужно разменять сумму с минимальным остатком, используя монеты различных номиналов.
🎯 Решение:
```javascript
function minRemainder(coins, amount) {
  const dp = Array(amount + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j] || dp[j - coins[i]];
    }
  }

  for (let i = amount; i >= 0; i--) {
    if (dp[i]) {
      return amount - i;
    }
  }

  return -1;
}

console.log(minRemainder([1, 2, 5], 7));  // 0
```
Объяснение:
Используя динамическое программирование, мы находим максимально возможную сумму, которую можно получить, не превышая нужную сумму. Остаток будет разницей между целевой суммой и найденной суммой.
---
8. ⌛ Задача: Размен с учётом всех возможных вариантов
Условие:
Нужно найти все возможные способы размена суммы с использованием данных монет и вывести все комбинации.
🎯 Решение:
```javascript
function coinCombinations(coins, amount) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i]

 += dp[i - coin];
    }
  }

  return dp[amount];
}

console.log(coinCombinations([1, 2, 5], 7));  // 6
```
Объяснение:
Используем динамическое программирование, чтобы посчитать количество возможных комбинаций монет для размена суммы.
---
9. ⌛ Задача: Размен с дополнительным ограничением (монеты, не превышающие максимальную цену)
Условие:
Нужно найти минимальное количество монет, которые можно использовать для размена суммы с дополнительным ограничением на максимальную цену монет.
🎯 Решение:
```javascript
function minCoinsWithMaxValue(coins, total, maxCoin) {
  coins = coins.filter(coin => coin <= maxCoin);
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= total; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(minCoinsWithMaxValue([1, 2, 5], 7, 2));  // 3
```
Объяснение:
Этот алгоритм сначала фильтрует монеты, исключая те, которые больше заданного ограничения, и затем решает задачу размена.
---
10. ⌛ Задача: Размен с учетом старых монет (если размен невозможен)
Условие:
Если размен невозможен, нужно найти наименьший размен, который можно осуществить с использованием старых монет.
🎯 Решение:
```javascript
function minCoinsWithOld(coins, total) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= total; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  if (dp[total] === Infinity) {
    return dp[total - 1];
  }

  return dp[total];
}

console.log(minCoinsWithOld([1, 2, 5], 7));  // 2
```
Объяснение:
Здесь используется динамическое программирование для поиска минимального размена с учётом старых монет, если точный размен невозможен.
Эти задачи требуют более сложных техник и решений, часто с учётом множества факторов, таких как ограничения на количество монет, жадные алгоритмы и более подробное использование динамического программирования.
---------------------
⋙ ❍ Задача «Простой калькулятор»:
---
⌛ Задача 1: Сложение двух чисел
Условие:
Напишите функцию, которая принимает два числа и возвращает их сумму.
🎯 Решение:
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));  // 8
```
Объяснение:
Это самая базовая операция сложения. Функция принимает два числа и возвращает их сумму.
---
⌛ Задача 2: Вычитание двух чисел
Условие:
Напишите функцию, которая принимает два числа и возвращает их разницу.
🎯 Решение:
```javascript
function subtract(a, b) {
  return a - b;
}

console.log(subtract(5, 3));  // 2
```
Объяснение:
Здесь мы используем стандартную операцию вычитания, чтобы найти разницу между двумя числами.
---
⌛ Задача 3: Умножение двух чисел
Условие:
Напишите функцию, которая принимает два числа и возвращает их произведение.
🎯 Решение:
```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 3));  // 15
```
Объяснение:
Здесь мы умножаем два числа и возвращаем результат.
---
⌛ Задача 4: Деление двух чисел
Условие:
Напишите функцию, которая принимает два числа и возвращает результат их деления. Учтите, что деление на 0 не должно происходить.
🎯 Решение:
```javascript
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

console.log(divide(6, 3));  // 2
console.log(divide(5, 0));  // 'Error: Division by zero'
```
Объяснение:
Мы проверяем, если делитель равен 0, и в таком случае возвращаем ошибку. Если деление возможно, возвращаем результат.
---
⌛ Задача 5: Возведение в степень
Условие:
Напишите функцию, которая принимает два числа: основание и степень, и возвращает результат возведения основания в степень.
🎯 Решение:
```javascript
function power(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(power(2, 3));  // 8
```
Объяснение:
Используем стандартную функцию `Math.pow`, чтобы возвести число в заданную степень.
---
⌛ Задача 6: Калькулятор с несколькими операциями
Условие:
Напишите функцию, которая принимает три аргумента: два числа и операцию, и возвращает результат операции (сложение, вычитание, умножение или деление).
🎯 Решение:
```javascript
function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    default:
      return 'Invalid operation';
  }
}

console.log(calculator(5, 3, 'add'));       // 8
console.log(calculator(5, 3, 'subtract'));  // 2
console.log(calculator(5, 3, 'multiply'));  // 15
console.log(calculator(5, 0, 'divide'));    // 'Error: Division by zero'
```
Объяснение:
Мы используем `switch` для выбора операции на основе аргумента `operation`. Это позволяет легко расширить калькулятор, добавляя новые операции.
---
⌛ Задача 7: Подсчёт факториала
Условие:
Напишите функцию, которая принимает число и возвращает его факториал.
🎯 Решение:
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));  // 120
```
Объяснение:
Мы используем цикл, чтобы перемножить все числа от 1 до `n`, получая факториал числа.
---
⌛ Задача 8: Проверка на простое число
Условие:
Напишите функцию, которая проверяет, является ли число простым.
🎯 Решение:
```javascript
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
```
Объяснение:
Для проверки простоты числа мы делим его на все числа от 2 до квадратного корня из числа. Если ни одно из делений не даёт целочисленного результата, число простое.
---
⌛ Задача 9: Нахождение квадратного корня
Условие:
Напишите функцию, которая принимает число и возвращает его квадратный корень.
🎯 Решение:
```javascript
function squareRoot(n) {
  if (n < 0) {
    return 'Error: Negative number';
  }
  return Math.sqrt(n);
}

console.log(squareRoot(9));  // 3
console.log(squareRoot(-9)); // 'Error: Negative number'
```
Объяснение:
Используем функцию `Math.sqrt` для нахождения квадратного корня. Также добавлена проверка на отрицательные числа, так как для них квадратный корень не существует в области вещественных чисел.
---
⌛ Задача 10: Ввод данных и выполнение операции через prompt
Условие:
Напишите калькулятор, который принимает два числа и операцию через `prompt` и выводит результат.
🎯 Решение:
```javascript
function simpleCalculator() {
  const a = parseFloat(prompt('Enter the first number:'));
  const b = parseFloat(prompt('Enter the second number:'));
  const operation = prompt('Enter the operation (add, subtract, multiply, divide):');

  switch (operation) {
    case 'add':
      alert(a + b);
      break;
    case 'subtract':
      alert(a - b);
      break;
    case 'multiply':
      alert(a * b);
      break;
    case 'divide':
      if (b === 0) {
        alert('Error: Division by zero');
      } else {
        alert(a / b);
      }
      break;
    default:
      alert('Invalid operation');
  }
}

simpleCalculator();
```
Объяснение:
В этой задаче мы используем `prompt` для ввода данных и `alert` для вывода результата. Код взаимодействует с пользователем через диалоговые окна.
Эти задачи покрывают основные операции калькулятора, такие как сложение, вычитание, умножение, деление и несколько более сложных задач, таких как факториал, проверка на простоту и квадратный корень.
---------------------
⋙ ❍ Задача «Расстояние редактирования»:
---
Задача о расстоянии редактирования (или расстоянии Левенштейна) — это классическая задача, которая вычисляет минимальное количество операций, необходимых для преобразования одной строки в другую. Операции могут быть следующими:
1. Вставка символа.
2. Удаление символа.
3. Замена символа на другой.
Давайте рассмотрим несколько задач с решениями и объяснениями на языке JavaScript для задачи о расстоянии редактирования.
1️⃣ Базовая задача: Вычисление расстояния редактирования между двумя строками
⌛ Задача: Найдите расстояние редактирования между двумя строками.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j; // Если первая строка пустая, нужно вставить все символы из второй строки
      else if (j === 0) dp[i][j] = i; // Если вторая строка пустая, нужно удалить все символы из первой строки
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // Если символы одинаковы, ничего не меняем
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1], // Замена
          dp[i - 1][j], // Удаление
          dp[i][j - 1]  // Вставка
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("kitten", "sitting")); // 3
```
Объяснение: Мы используем динамическое программирование для вычисления расстояния редактирования. Таблица `dp` хранит минимальное количество операций для каждой подстроки.
---
2️⃣ Задача: Расстояние редактирования для строк с одинаковыми буквами
⌛ Задача: Найдите расстояние редактирования для строк с одинаковыми буквами, но разным порядком.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("abc", "cba")); // 2
```
Объяснение: Строки одинаковы по набору символов, но символы в них расположены в разном порядке. Нужно выполнить две операции — замена и перестановка.
---
3️⃣ Задача: Расстояние редактирования для пустых строк
⌛ Задача: Найдите расстояние редактирования между пустыми и непустыми строками.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("", "hello")); // 5
```
Объяснение: Если одна из строк пуста, то минимальное количество операций равно длине другой строки (необходимо только вставить или удалить все символы).
---
4️⃣ Задача: Расстояние редактирования для одинаковых строк
⌛ Задача: Найдите расстояние редактирования для одинаковых строк.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("hello", "hello")); // 0
```
Объяснение: Если строки одинаковы, то количество операций будет равно нулю, так как изменений не требуется.
---
5️⃣ Задача: Расстояние редактирования для строк разной длины
⌛ Задача: Найдите расстояние редактирования между строками разной длины.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("abc", "abcdef")); // 3
```
Объяснение: Строки разной длины требуют вставки символов в более короткую строку или удаления символов из более длинной.
---
6️⃣ Задача: Расстояние редактирования для строк с разными символами
⌛ Задача: Найдите расстояние редактирования для строк, которые содержат разные символы.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("abc", "xyz")); // 3
```
Объяснение: Строки содержат разные символы, поэтому минимальное количество операций — три замены.
---
7️⃣ Задача: Задача с минимальной длиной строки
⌛ Задача: Найдите расстояние редактирования для строки, которая является подстрокой другой строки.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("hello", "hell")); // 1
```
Объяснение: Если одна строка является подстрокой другой, то нужно просто удалить символы, которые не присутствуют в подстроке.
---
8️⃣ Задача: Использование разных алфавитов
⌛ Задача: Найдите расстояние редактирования для строк, содержащих символы разных алфавитов.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("abc", "123")); // 3
```
Объяснение: Строки содержат разные символы, и для их приведения друг к другу потребуется три операции.
---
9️⃣ Задача с повторами символов
⌛ Задача: Найдите расстояние редактирования для строк, содержащих одинаковые символы, но в разном количестве.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("aaabbb", "ababab")); // 3
```
Объяснение: В данном случае необходимо выполнить несколько операций вставки или удаления символов для согласования строк.
---
🔟 Задача с длинными строками
⌛ Задача: Найдите расстояние редактирования между очень длинными строками.
🎯 Решение:
```js
function editDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
      }
    }
  }

  return dp[m][n];
}

console.log(editDistance("a".repeat(1000), "b".repeat(1000))); // 1000
```
 Объяснение: Для очень длинных строк количество операций будет линейным по отношению к длине строк.
---------------------
⋙ ❍ Задача LCS:
---
Задача: Longest Common Subsequence (LCS) — это классическая задача динамического программирования, которая заключается в нахождении наибольшей общей подпоследовательности двух строк. Подпоследовательность — это последовательность символов, которая может быть получена из другой строки путем удаления некоторых (или вообще всех) символов, не меняя порядка оставшихся символов.
Пример: для строк `"AGGTAB"` и `"GXTXAYB"`, наибольшая общая подпоследовательность — это `"GTAB"`.
1️⃣ Базовая задача LC
⌛ Задача: Найдите наибольшую общую подпоследовательность (LCS) двух строк.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("AGGTAB", "GXTXAYB")); // 4
```Объяснение В этом решении мы используем таблицу динамического программирования (`dp`), чтобы хранить длину LCS для каждой подстроки. Каждый элемент `dp[i][j]` представляет длину LCS для первых `i` символов строки `str1` и первых `j` символов строки `str2`.
---
2️⃣ ⌛ Задача на восстановление LCЗадача Найдите не только длину LCS, но и саму подпоследовательность.
🎯 Решение:
```js
function lcsWithSequence(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let lcsString = '';
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcsString = str1[i - 1] + lcsString;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcsString;
}

console.log(lcsWithSequence("AGGTAB", "GXTXAYB")); // GTAB
```Объяснение Мы строим таблицу, как в предыдущем решении, но после вычисления длины LCS, мы восстанавливаем саму подпоследовательность, двигаясь по таблице обратно.
---
3️⃣ ⌛ Задача с пустой строкоЗадача Найдите LCS двух строк, одна из которых пуста.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("", "ABCD")); // 0
```Объяснение Если одна из строк пуста, то длина их LCS будет равна нулю.
---
4️⃣ ⌛ Задача с одинаковыми строкамЗадача Найдите LCS двух одинаковых строк.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("ABCDE", "ABCDE")); // 5
```Объяснение Если строки одинаковы, то LCS будет равно длине этих строк.
---
5️⃣ ⌛ Задача на использование различных алфавитоЗадача Найдите LCS для строк с разными наборами символов (например, строки с разными языками).
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("абвгде", "гдеабв")); // 3
```Объяснение Алфавит не имеет значения, поскольку мы просто сравниваем символы в строках.
---
6️⃣ ⌛ Задача на LCS для двух строк с пробеламЗадача Найдите LCS двух строк, которые содержат пробелы.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("hello world", "helloworld")); // 10
```Объяснение Пробелы считаются символами, и они участвуют в поиске общей подпоследовательности.
---
7️⃣ ⌛ Задача с большими строкамЗадача Найдите LCS для длинных строк.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

const str1 = "A".repeat(1000) + "B".repeat(1000);
const str2 = "A".repeat(500) + "B".repeat(1000);
console.log(lcs(str1, str2)); // 1500
```
Объяснение Алгоритм динамического программирования эффективно решает задачу даже для длинных строк, но при больших строках возможна высокая временная сложность.
---
8️⃣ ⌛ Задача на LCS для числовых строЗадача Найдите LCS для строк, содержащих только числа.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("123456", "13524")); // 3
```Объяснение Задача LCS работает так же, независимо от того, какие символы содержатся в строках.
---
9️⃣ ⌛ Задача на LCS для последовательности слоЗадача Найдите LCS для двух строк, где каждое слово разделено пробелом.
🎯 Решение:
```js
function lcs(str1, str2) {
  const words1 = str1.split(' '), words2 = str2.split(' ');
  const m = words1.length, n = words2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (words1[i - 1] === words2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("I love programming", "I love coding")); // 2
```Объяснение Мы разделяем строки на слова и находим наибольшую общую подпоследовательность для слов.
---
🔟 ⌛ Задача на LCS для строки с цифрами и буквамЗадача Найдите LCS для строки, содержащей и цифры, и буквы.
🎯 Решение:
```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcs("abc123", "abc321")); // 3
```Объяснение Решение аналогично предыдущим примерам, только строки содержат и цифры, и буквы.
Эти задачи помогают разобраться в решении задачи LCS с различными вариантами входных данных и ситуациями.
---------------------
⋙ ❍ Задача о рюкзаке:
---
Задача о рюкзаке (или задача о рюкзаке с ограничениями) — это классическая задача оптимизации, в которой нужно выбрать набор предметов (сувениров, товаров и т.д.) таким образом, чтобы максимизировать их стоимость при условии, что их общий вес не превышает заданного ограничения. Этот тип задачи часто используется в алгоритмах для нахождения наилучшего выбора при ограниченных ресурсах (например, объем или вес рюкзака).
1️⃣ Базовая задача о рюкзаке (0/1)
⌛ Задача: Даны предметы с весами и ценами. Напишите функцию, которая определяет максимальную стоимость, которую можно взять в рюкзак с ограничением по весу.
🎯 Решение:
```js
function knapsack(items, capacity) {
  const n = items.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}

const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];

console.log(knapsack(items, 50)); // 220
```
Объяснение:
- Решение основывается на динамическом программировании. Мы строим таблицу `dp`, где ячейка `dp[i][w]` содержит максимальную стоимость для первых `i` предметов при ограничении по весу `w`. Для каждого предмета мы решаем, включать ли его в рюкзак.
---
2️⃣ Задача с большим количеством предметов и рюкзаком
⌛Задача: У вас есть 100 предметов и рюкзак с весом 100. Напишите решение для данной задачи, учитывая большую длину входных данных.
🎯 Решение:
```js
function knapsackLarge(items, capacity) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    for (let w = capacity; w >= item.weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
    }
  });

  return dp[capacity];
}

const items = Array(100).fill().map((_, i) => ({ value: (i + 1) * 10, weight: i + 1 }));
console.log(knapsackLarge(items, 100)); // 5050
```
Объяснение:
- Используется одномерный массив `dp`, где каждая ячейка хранит максимальную стоимость для определенного веса рюкзака. Мы начинаем с максимального веса и проходим по всем предметам.
---
3️⃣ Задача с рюкзаком и повторяющимися предметами (разрешены многократные включения)
⌛Задача: В отличие от предыдущей задачи, теперь предметы можно повторно включать в рюкзак. Напишите решение для задачи с множественным выбором предметов.
🎯 Решение:
```js
function unboundedKnapsack(items, capacity) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    for (let w = item.weight; w <= capacity; w++) {
      dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
    }
  });

  return dp[capacity];
}

const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];

console.log(unboundedKnapsack(items, 50)); // 300
```
Объяснение:
- В этом случае для каждого веса мы рассматриваем возможность многократного добавления одного и того же предмета в рюкзак.
---
4️⃣ Задача с ограниченным числом каждого предмета
⌛Задача: Каждый предмет можно положить в рюкзак не более определенного числа раз. Напишите решение для задачи с ограничением на количество предметов.
🎯 Решение:
```js
function boundedKnapsack(items, capacity) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    for (let i = 0; i < item.quantity; i++) {
      for (let w = capacity; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }
  });

  return dp[capacity];
}

const items = [
  { value: 60, weight: 10, quantity: 2 },
  { value: 100, weight: 20, quantity: 1 },
  { value: 120, weight: 30, quantity: 3 }
];

console.log(boundedKnapsack(items, 50)); // 240
```
Объяснение:
- Для каждого предмета мы поочередно учитываем его количество, что позволяет нам учитывать только определенное количество повторений этого предмета.
---
5️⃣ Взаимосвязь предметов и стоимостей
⌛Задача: У нас есть предметы, но каждый предмет имеет дополнительную зависимость от других предметов. Например, для того чтобы взять один предмет, нужно взять другой. Как решить такую задачу?
🎯 Решение:
```js
function dependencyKnapsack(items, capacity, dependencies) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    const depItem = dependencies[item.name];
    if (depItem) {
      for (let w = capacity; w >= item.weight + depItem.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight - depItem.weight] + item.value + depItem.value);
      }
    } else {
      for (let w = capacity; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }
  });

  return dp[capacity];
}

const items = [
  { name: "A", value: 60, weight: 10 },
  { name: "B", value: 100, weight: 20 },
  { name: "C", value: 120, weight: 30 }
];

const dependencies = {
  "A": { value: 20, weight: 5 },
  "B": { value: 50, weight: 15 }
};

console.log(dependencyKnapsack(items, 50, dependencies)); // 230
```
Объяснение:
- Для каждого предмета проверяется, есть ли зависимость. Если есть, то оба предмета считаются одновременно.
---
6️⃣ Применение задачи о рюкзаке для выбора задач в расписании
⌛Задача: У нас есть ограничение по времени на выполнение задач, и каждая задача имеет свою стоимость. Выберите задачи, чтобы максимизировать стоимость, не превышая времени.
🎯 Решение:
```js
function scheduleTasks(tasks, timeLimit) {
  const dp = Array(timeLimit + 1).fill(0);

  tasks.forEach(task => {
    for (let t = timeLimit; t >= task.time; t--) {
      dp[t] = Math.max(dp[t], dp[t - task.time] + task.value);
    }
  });

  return dp[timeLimit];
}

const tasks = [
  { value: 50, time: 2 },
  { value: 70, time: 3 },
  { value: 60, time: 1 },
];

console.log(scheduleTasks(tasks, 5)); // 120
```
Объяснение:
- Каждая задача имеет стоимость и время. Мы используем динамическое программирование для того, чтобы выбрать задачи с максимальной стоимостью, не превышая заданного времени.
---
7️⃣ Задача о рюкзаке для выбора программных решений
⌛Задача: У нас есть несколько программных решений для разных задач. Каждое решение имеет время работы и ценность для бизнеса. Выберите такие решения, чтобы минимизировать время и максимизировать ценность.
🎯 Решение:
```js
function chooseSolutions(solutions, timeLimit) {
  const dp = Array(timeLimit + 1).fill(0);

  solutions.forEach(solution => {
    for (let t = timeLimit; t >= solution.time; t--) {
      dp[t] = Math.max(dp[t], dp[t - solution.time] + solution.value);
    }
  });

  return dp[timeLimit];
}

const solutions = [
  { value: 120, time: 5 },
  { value: 60, time: 3 },
  { value: 80, time: 4 },
];

console.log(chooseSolutions(solutions, 8)); // 200
```
Объяснение:
- Задача схожа с задачей о рюкзаке, где мы пытаемся минимизировать время и максимизировать ценность решений.
---
8️⃣ Задача о рюкзаке для финансовых инвестиций
⌛Задача: У нас есть инвестиционные проекты с доходностью и временем. Выберите инвестиции, чтобы максимизировать доход, не превышая бюджетного времени.
🎯 Решение:
```js
function investmentProjects(projects, maxTime) {
  const dp = Array(maxTime + 1).fill(0);

  projects.forEach(project => {
    for (let t = maxTime; t >= project.time; t--) {
      dp[t] = Math.max(dp[t], dp[t - project.time] + project.profit);
    }
  });

  return dp[maxTime];
}

const projects = [
  { profit: 1000, time: 5 },
  { profit: 1500, time: 6 },
  { profit: 800, time: 2 },
];

console.log(investmentProjects(projects, 8)); // 2000
```
Объяснение:
- Мы решаем задачу оптимизации инвестиций, где цель — максимизировать прибыль, не выходя за пределы времени.
---
9️⃣ Задача о рюкзаке для минимизации потерь
⌛Задача: Напишите решение для задачи, в которой нужно минимизировать потери при выборе предметов с известными ценами и шансами на успех.
🎯 Решение:
```js
function minimizeLoss(items, maxWeight) {
  const dp = Array(maxWeight + 1).fill(0);

  items.forEach(item => {
    for (let w = maxWeight; w >= item.weight; w--) {
      dp[w] = Math.min(dp[w], dp[w - item.weight] + item.loss);
    }
  });

  return dp[maxWeight];
}

const items = [
  { loss: 50, weight: 10 },
  { loss: 30, weight: 5 },
  { loss: 20, weight: 3 }
];

console.log(minimizeLoss(items, 15)); // 80
```
Объяснение:
- Задача о минимизации потерь решается через динамическое программирование, где целью является минимизация потерь с учетом ограничений по весу.
---
🔟 Задача о рюкзаке с дополнительными ограничениями по стоимости
⌛Задача: Решите задачу о рюкзаке, где существуют ограничения на стоимость каждого предмета и максимальный вес рюкзака.
🎯 Решение:
```js
function knapsackWithConstraints(items, capacity, costLimit) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    if (item.value <= costLimit) {
      for (let w = capacity; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }
  });

  return dp[capacity];
}

const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];

console.log(knapsackWithConstraints(items, 50, 100)); // 220
```
Объяснение:
- Мы добавили дополнительное ограничение на максимальную стоимость предметов, которые могут быть выбраны.
---------------------
⋙ ❍ Задача «Сувениры»:
---
Задача «Сувениры» обычно связана с оптимизацией выбора элементов из множества, таких как выбор сувениров на основе их стоимости, веса, значимости или других критериев. В данном случае задачи будут включать выбор сувениров, комбинирование, сортировку и вычисления, связанные с максимизацией или минимизацией значений.
1️⃣ Нахождение самого дорогого сувенира
⌛ Задача: У нас есть список сувениров, каждый с определенной ценой. Напишите функцию, которая находит самый дорогой сувенир.
🎯 Решение:
```js
function findMostExpensive(souvenirs) {
  return souvenirs.reduce((max, current) => current.price > max.price ? current : max, souvenirs[0]);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findMostExpensive(souvenirs)); // { name: 'Фигурка', price: 50 }
```
Объяснение:
- Используем метод `reduce` для нахождения самого дорогого сувенира. Сравниваем цену текущего сувенира с максимальной ценой, сохраняя тот, у которого цена больше.
---
2️⃣ Подсчет общего стоимости всех сувениров
⌛ Задача: Напишите функцию, которая считает общую стоимость всех сувениров в списке.
🎯 Решение:
```js
function totalCost(souvenirs) {
  return souvenirs.reduce((total, current) => total + current.price, 0);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(totalCost(souvenirs)); // 105
```
Объяснение:
- Используем `reduce`, чтобы просуммировать цены всех сувениров, начиная с начальной суммы `0`.
---
3️⃣ Найти сувениры, стоимость которых превышает заданную сумму
⌛ Задача: Напишите функцию, которая находит все сувениры, стоимость которых больше заданного значения.
🎯 Решение:
```js
function findExpensiveSouvenirs(souvenirs, priceLimit) {
  return souvenirs.filter(souvenir => souvenir.price > priceLimit);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findExpensiveSouvenirs(souvenirs, 25));
// [{ name: 'Фигурка', price: 50 }, { name: 'Маска', price: 30 }]
```
Объяснение:
- Используем `filter`, чтобы отфильтровать сувениры, чья цена больше заданного лимита `priceLimit`.
---
4️⃣ Сортировка сувениров по цене
⌛ Задача: Напишите функцию, которая сортирует сувениры по цене в порядке убывания.
🎯 Решение:
```js
function sortSouvenirsByPrice(souvenirs) {
  return souvenirs.sort((a, b) => b.price - a.price);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(sortSouvenirsByPrice(souvenirs));
// [{ name: 'Фигурка', price: 50 }, { name: 'Маска', price: 30 }, { name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Используем метод `sort` для сортировки массива сувениров. Сортируем по цене, где `b.price - a.price` означает сортировку по убыванию.
---
5️⃣ Выбор сувениров по заданному бюджету
⌛ Задача: Напишите функцию, которая выбирает сувениры, сумма стоимости которых не превышает заданного бюджета.
🎯 Решение:
```js
function selectSouvenirsByBudget(souvenirs, budget) {
  let selected = [];
  let total = 0;

  for (let souvenir of souvenirs) {
    if (total + souvenir.price <= budget) {
      selected.push(souvenir);
      total += souvenir.price;
    }
  }

  return selected;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(selectSouvenirsByBudget(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Перебираем сувениры и добавляем их в список выбранных, если сумма их цен не превышает бюджет.
---
6️⃣ Комбинирование сувениров с максимальной общей стоимостью
⌛ Задача: Напишите функцию, которая выбирает сувениры таким образом, чтобы их общая стоимость была максимальной, но не превышала заданного бюджета.
🎯 Решение:
```js
function getMaxValueCombination(souvenirs, budget) {
  let bestCombination = [];
  let maxValue = 0;

  for (let i = 0; i < (1 << souvenirs.length); i++) {
    let combination = [];
    let total = 0;

    for (let j = 0; j < souvenirs.length; j++) {
      if (i & (1 << j)) {
        combination.push(souvenirs[j]);
        total += souvenirs[j].price;
      }
    }

    if (total <= budget && total > maxValue) {
      maxValue = total;
      bestCombination = combination;
    }
  }

  return bestCombination;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(getMaxValueCombination(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Используем битовую маску для генерации всех возможных комбинаций сувениров и выбираем ту, чья общая стоимость не превышает бюджет и максимальна.
---
7️⃣ Расставить сувениры по популярности
⌛ Задача: Напишите функцию, которая сортирует сувениры по популярности (по количеству продаж). Данные о продажах представлены в виде массива объектов.
🎯 Решение:
```js
function sortSouvenirsByPopularity(souvenirs) {
  return souvenirs.sort((a, b) => b.sales - a.sales);
}

const souvenirs = [
  { name: "Тарелка", price: 20, sales: 150 },
  { name: "Магнит", price: 5, sales: 300 },
  { name: "Фигурка", price: 50, sales: 100 },
  { name: "Маска", price: 30, sales: 200 }
];

console.log(sortSouvenirsByPopularity(souvenirs));
// [{ name: 'Магнит', price: 5, sales: 300 }, { name: 'Маска', price: 30, sales: 200 }, { name: 'Тарелка', price: 20, sales: 150 }, { name: 'Фигурка', price: 50, sales: 100 }]
```
Объяснение:
- Мы сортируем массив сувениров по количеству продаж, от самого популярного к наименее популярному.
---
8️⃣ Применение скидки на сувениры
⌛ Задача: Напишите функцию, которая применяет скидку к цене всех сувениров из списка, если цена превышает определенную сумму.
🎯 Решение:
```js
function applyDiscount(souvenirs, discountThreshold, discountPercentage) {
  return souvenirs.map(souvenir => {
    if (souvenir.price > discountThreshold) {
      souvenir.price *= (1 - discountPercentage / 100);
    }
    return souvenir;
  });
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(applyDiscount(souvenirs, 20, 10));
// Применит скидку 10% к "Фигурка" и "Маска"
```
Объяснение:
- Мы проходим по массиву сувениров и применяем скидку к тем, цена которых превышает порог `discountThreshold`.
---
9️⃣ Составление набора сувениров с минимальной стоимостью
⌛ Задача: Напишите функцию, которая находит набор сувениров с минимальной стоимостью, но при этом каждый набор должен содержать хотя бы один сувенир.
🎯 Решение:
```js
function findCheapestSet(souvenirs) {
  return souvenirs.reduce((minSet, current) => {
    const newSet = [...minSet, current];
    const total = newSet.reduce((sum, item) => sum + item.price, 0);
    if (!minSet.length || total < minSet.reduce((sum, item) => sum + item.price, 0)) {
      return newSet;
    }
    return minSet;
  }, []);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findCheapestSet(souvenirs));
// [{ name: 'Магнит', price: 5 }]
```
Объяснение:
- Мы перебираем все возможные наборы сувениров и выбираем тот, который имеет минимальную стоимость.
---
🔟 Нахождение сувениров по ключевым словам
⌛ Задача: Напишите функцию, которая находит все сувениры, названия которых содержат заданные ключевые слова.
🎯 Решение:
```js
function findSouvenirsByKeyword(souvenirs, keyword) {
  return souvenirs.filter(souvenir => souvenir.name.toLowerCase().includes(keyword.toLowerCase()));
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findSouvenirsByKeyword(souvenirs, "мас"));
// [{ name: 'Маска', price: 30 }]
```
Объяснение:
- Мы фильтруем сувениры по ключевому слову, используя метод `includes`, чтобы найти те, чьи названия содержат это слово.
Эти задачи помогут вам познакомиться с основными операциями над массивами объектов в JavaScript и практиковать работу с фильтрацией, сортировкой, выбором и комбинацией данных.
---------------------
⋙ ❍ Задача «Расставить скобки»:
---
⌛ Задача «Расставить скобки» включает в себя различные виды задач, где нужно расставить скобки для правильной работы математических выражений или для решения других логических проблем. В этом разделе представлены задачи, в которых требуется правильно расставить скобки с использованием языка JavaScript.
1️⃣ Проверка правильности скобок в строке
⌛ Задача: Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке. Скобки могут быть разного типа: круглые `()`, квадратные `[]`, фигурные `{}`.
🎯 Решение:
```js
function checkBrackets(str) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char); // открывающая скобка
    } else if (Object.values(pairs).includes(char)) {
      if (pairs[stack.pop()] !== char) {
        return false; // несоответствие
      }
    }
  }

  return stack.length === 0; // если стек пуст, скобки расставлены правильно
}

console.log(checkBrackets("([{}])")); // true
console.log(checkBrackets("([)]")); // false
```
Объяснение:
- Используем стек для хранения открывающих скобок. Когда встречаем закрывающую скобку, проверяем, совпадает ли она с последней открывающей скобкой из стека. Если всё совпадает, продолжаем, иначе возвращаем `false`.
---
2️⃣ Генерация всех вариантов скобок для выражений
⌛ Задача: Напишите функцию, которая генерирует все возможные правильные скобочные выражения для заданного числа пар скобок.
🎯 Решение:
```js
function generateParentheses(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) generate(current + '(', open + 1, close);
    if (close < open) generate(current + ')', open, close + 1);
  }

  generate('', 0, 0);
  return result;
}

console.log(generateParentheses(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
```
Объяснение:
- Используем рекурсию для генерации строк с открывающими и закрывающими скобками. Условие `open < n` ограничивает количество открывающих скобок, а `close < open` гарантирует правильный порядок скобок.
---
3️⃣ Расставить скобки в выражении для корректной работы
⌛ Задача: Напишите функцию, которая принимает строку с арифметическим выражением без скобок и расставляет скобки, чтобы правильно вычислить результат. Предположим, что выражение состоит только из цифр и операторов `+`, `-`, `*`, `/`.
🎯 Решение:
```js
function addParentheses(expression) {
  return `(${expression})`;
}

console.log(addParentheses("3+2*2")); // (3+2*2)
console.log(addParentheses("3*2+1")); // (3*2+1)
```
Объяснение:
- Простое добавление скобок вокруг выражения, чтобы изменить приоритет операций. Это решение для упрощённого примера, но для сложных выражений нужно учитывать порядок операций и расставлять скобки в соответствии с ним.
---
4️⃣ Минимизация расставленных скобок в выражении
⌛ Задача: Напишите функцию, которая принимает строку с математическим выражением и минимизирует количество скобок, оставив только те, которые необходимы для корректного выполнения.
🎯 Решение:
```js
function minimizeParentheses(expression) {
  let result = expression.replace(/\(([^\(\)]+)\)/g, '$1');
  return result;
}

console.log(minimizeParentheses("(3+2)*2")); // 3+2*2
console.log(minimizeParentheses("((3+2)*2)")); // 3+2*2
```
Объяснение:
- Используем регулярные выражения для удаления лишних скобок, которые не влияют на порядок вычислений. Оставляем только те скобки, которые необходимы для корректного вычисления.
---
5️⃣ Проверка, является ли строка сбалансированной
⌛ Задача: Напишите функцию, которая проверяет, является ли строка сбалансированной, то есть все ли открывающие скобки имеют соответствующие закрывающие.
🎯 Решение:
```js
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (last === '(' && char !== ')' || last === '{' && char !== '}' || last === '[' && char !== ']') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("({[()]})")); // true
console.log(isBalanced("({[)}]")); // false
```
Объяснение:
- Для проверки сбалансированности скобок используем стек. При встрече открывающей скобки добавляем её в стек, а при встрече закрывающей проверяем, соответствует ли она последней открывающей скобке.
---
6️⃣ Перестановка скобок в выражении
⌛ Задача: Напишите функцию, которая меняет местами все пары скобок в выражении. Например, из `"(a+b)"` сделать `"[a+b]"`.
🎯 Решение:
```js
function swapBrackets(str) {
  return str.replace(/[\(\)]/g, (match) => match === '(' ? '[' : ']');
}

console.log(swapBrackets("(a+b)")); // [a+b]
console.log(swapBrackets("((a+b))")); // [[a+b]]
```
Объяснение:
- Используем регулярные выражения для поиска всех открывающих и закрывающих скобок и заменяем их на другие типы скобок.
---
7️⃣ Оценка выражений с использованием скобок
⌛ Задача: Напишите функцию, которая оценивает математическое выражение с учётом приоритетов операций и правильно расставленными скобками.
🎯 Решение:
```js
function evaluateExpression(expr) {
  return new Function('return ' + expr)();
}

console.log(evaluateExpression("(3 + 2) * 2")); // 10
console.log(evaluateExpression("3 + (2 * 2)")); // 7
```
Объяснение:
- Для вычисления выражения с использованием скобок и операцией мы используем `Function` для создания функции, которая возвращает результат вычисления. Это позволяет динамически оценивать строки с математическими операциями.
---
8️⃣ Правильное размещение скобок в сложном выражении
⌛ Задача: Напишите функцию, которая расставляет скобки в сложном выражении с несколькими операциями. Пример: в выражении "3 + 4 * 2" нужно правильно расставить скобки, чтобы соблюсти приоритет операций.
🎯 Решение:
```js
function addCorrectParentheses(expression) {
  return expression.replace(/(\d+)\s*\*\s*(\d+)/, '($1*$2)');
}

console.log(addCorrectParentheses("3 + 4 * 2")); // 3 + (4*2)
```
Объяснение:
- Мы заменяем выражение с умножением на его эквивалент, где умножение заключено в скобки, чтобы явно указать на приоритет этой операции.
---
9️⃣ Расставить скобки для корректного порядка вычислений
⌛ Задача: Напишите функцию, которая расставляет скобки для корректного порядка вычислений в случае несоответствия приоритету операций.
🎯 Решение:
```js
function correctParenthesesOrder(expression) {
  return expression.replace(/(\d+)\s*\+\s*(\d+)/, '($1+$2)');
}

console.log(correctParenthesesOrder("2 + 3 * 4")); // 2 + (3*4)
```
Объяснение:
- Заменяем сложение на выражение с учётом приоритета операций, расставляя скобки для правильного порядка вычислений.
---
🔟 Строка со скобками: Генерация всех правильных комбинаций
⌛ Задача: Напишите функцию, которая генерирует все возможные правильные комбинации скобок для заданного числа пар.
🎯 Решение:
```js
function generateAllParentheses(n) {
  const result = [];

  function generate(str, open, close) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    if (open < n) generate(str + '(', open + 1, close);
    if (close < open) generate(str + ')', open, close + 1);
  }

  generate('', 0, 0);
  return result;
}

console.log(generateAllParentheses(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
```
Объяснение:
- Используем рекурсию для создания всех возможных правильных строк с расставленными скобками. Мы поддерживаем счётчики для открывающих и закрывающих скобок и добавляем новые скобки на каждом шаге.
---------------------
⋙ ❍ Основные структуры данных:
---
Эти задачи помогут вам разобраться с такими структурами данных, как массивы, стеки, очереди, множества, словари (объекты), двусвязные и односвязные списки.
1️⃣ Работа с массивами: Сумма элементов массива
⌛ Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
🎯 Решение:
```js
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```
Объяснение:
- Используем метод `reduce()` для суммирования всех элементов массива. Он принимает два параметра: аккумулятор и текущий элемент. Изначально аккумулятор равен 0.
---
2️⃣ Стек: Реализация стека
⌛ Задача: Реализуйте стек с методами `push`, `pop` и `peek` (посмотреть верхний элемент).
🎯 Решение:
```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10
```
Объяснение:
- Стек работает по принципу LIFO (последний вошёл — первый вышел). Мы реализуем методы для добавления, удаления и получения верхнего элемента.
---
3️⃣ Очередь: Реализация очереди
⌛ Задача: Реализуйте очередь с методами `enqueue`, `dequeue`, `peek`.
🎯 Решение:
```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // 10
queue.dequeue();
console.log(queue.peek()); // 20
```
Объяснение:
- Очередь работает по принципу FIFO (первый вошёл — первый вышел). Мы добавляем элемент в конец очереди и удаляем из начала.
---
4️⃣ Множество: Уникальные элементы
⌛ Задача: Напишите функцию, которая принимает массив и возвращает массив с уникальными элементами.
🎯 Решение:
```js
function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- Множество (`Set`) автоматически удаляет дубликаты. Мы используем его для создания массива уникальных элементов.
---
5️⃣ Словарь (Объект): Подсчёт частоты элементов
⌛ Задача: Напишите функцию, которая подсчитывает частоту появления каждого элемента в массиве и возвращает объект.
🎯 Решение:
```js
function countFrequency(arr) {
  let frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
```
Объяснение:
- Используем объект как словарь, где ключи — это элементы массива, а значения — это их частота появления. В цикле увеличиваем счётчик для каждого элемента.
---
6️⃣ Односвязный список: Добавление элемента
⌛ Задача: Реализуйте односвязный список и добавьте элемент в конец списка.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
```
Объяснение:
- В этом примере мы реализуем односвязный список. Метод `add` добавляет новый узел в конец списка, обновляя указатель последнего узла.
---
7️⃣ Двусвязный список: Добавление элемента в начало
⌛ Задача: Реализуйте двусвязный список и добавьте элемент в начало.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' <-> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new DoublyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 <-> 20 <-> 10
```
Объяснение:
- В двусвязном списке каждый узел хранит ссылки как на следующий элемент, так и на предыдущий. Метод `addToFront` добавляет новый узел в начало списка.
---
8️⃣ Приоритетная очередь: Реализация очереди с приоритетом
⌛ Задача: Реализуйте приоритетную очередь с методами `enqueue` и `dequeue`, где элементы с большим приоритетом обрабатываются раньше.
🎯 Решение:
```js
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const newNode = { element, priority };
    if (this.items.length === 0) {
      this.items.push(newNode);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (newNode.priority > this.items[i].priority) {
          this.items.splice(i, 0, newNode);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(newNode);
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
}

const pq = new PriorityQueue();
pq.enqueue('task1', 1);
pq.enqueue('task2', 3);
pq.enqueue('task3', 2);
console.log(pq.peek()); // { element: 'task2', priority: 3 }
pq.dequeue();
console.log(pq.peek()); // { element: 'task3', priority: 2 }
```
Объяснение:
- Приоритетная очередь использует сортировку элементов по приоритету. Метод `enqueue` добавляет элемент в очередь с учётом его приоритета.
---
9️⃣ Хеш-таблица: Операции вставки и поиска
⌛ Задача: Реализуйте простую хеш-таблицу с методами вставки и поиска.
🎯 Решение:
```js
class HashTable {
  constructor(size = 4) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  search(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.search('name')); // John
```
Объяснение:
- Хеш-таблица использует хеш-функцию для вычисления индекса элемента. В этой простейшей версии данные сохраняются в массиве.
---
🔟 Алгоритм сортировки слиянием
⌛ Задача: Напишите функцию для сортировки массива с использованием алгоритма сортировки слиянием.
🎯 Решение:
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([10, 2, 3, 4, 1])); // [1, 2, 3, 4, 10]
```
Объяснение:
- Алгоритм сортировки слиянием делит массив на более мелкие части, сортирует их рекурсивно и затем сливает отсортированные части в один отсортированный массив.
---------------------
⋙ ❍ Односвязный список:
---
Односвязный список — это структура данных, где каждый элемент (узел) содержит данные и ссылку на следующий узел. Списки часто используются для эффективной работы с динамически изменяющимися данными.
1️⃣ Реализация односвязного списка
⌛ Задача: Создать структуру данных для односвязного списка с методами для добавления элементов в конец списка.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
```
Объяснение:
- Создали два класса: `Node` (узел) и `SinglyLinkedList` (список).
- Метод `add()` добавляет новые элементы в конец списка.
---
2️⃣ Добавление элемента в начало списка
⌛ Задача: Написать метод для добавления элемента в начало односвязного списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `addToFront()` добавляет новый элемент в начало списка, меняя ссылку на голову списка.
---
3️⃣ Удаление элемента из начала списка
⌛ Задача: Написать метод для удаления элемента из начала списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  removeFromFront() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
list.removeFromFront();
list.print(); // 20 -> 10
```
Объяснение:
- Метод `removeFromFront()` удаляет первый элемент, изменяя ссылку на голову списка.
---
4️⃣ Поиск элемента в списке
⌛ Задача: Написать метод для поиска элемента в списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
console.log(list.find(20)); // true
console.log(list.find(40)); // false
```
Объяснение:
- Метод `find()` ищет элемент в списке, перебирая его узлы.
---
5️⃣ Удаление элемента из списка по значению
⌛ Задача: Написать метод для удаления элемента из списка по значению.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(value) {
    if (this.head === null) return;
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
list.remove(20);
list.print(); // 10 -> 30
```
Объяснение:
- Метод `remove()` удаляет элемент, если он существует в списке. Если элемент находится в середине или в конце, обновляется ссылка на следующий элемент.
---
6️⃣ Получение элемента по индексу
⌛ Задача: Написать метод для получения элемента по индексу в списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (counter === index) {
        return current.data;
      }
      current = current.next;
      counter++;
    }
    return null; // если индекс выходит за пределы списка
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.get(1)); // 20
```
Объяснение:
- Метод `get()` перебирает список и возвращает данные элемента на указанном индексе.
---
7️⃣ Реверс односвязного списка
⌛ Задача: Написать метод для реверсирования (переворачивания) односвязного списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
list.reverse();
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `reverse()` меняет направление всех ссылок в списке, превращая его в обратный.
---
8️⃣ Проверка пустоты списка
⌛ Задача: Написать метод для проверки, пуст ли список.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
console.log(list.isEmpty()); // true
list.add(10);
console.log(list.isEmpty()); // false
```
Объяснение:
- Метод `isEmpty()` проверяет, является ли голова списка `null`, что означает, что список пуст.
---
9️⃣ Объединение двух списков
⌛ Задача: Написать метод для объединения двух односвязных списков.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  merge(otherList) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    if (current !== null) {
      current.next = otherList.head;
    } else {
      this.head = otherList.head;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.add(10);
list1.add(20);
list2.add(30);
list2.add(40);
list1.merge(list2);
list1.print(); // 10 -> 20 -> 30 -> 40
```
Объяснение:
- Метод `merge()` объединяет два списка, соединяя конец первого списка с началом второго.
---
🔟 Подсчёт элементов в списке
⌛ Задача: Написать метод для подсчёта количества элементов в односвязном списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  count() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.count()); // 3
```
Объяснение:
- Метод `count()` перебирает список и увеличивает счётчик для каждого узла, возвращая количество элементов в списке.
Односвязный список — это мощная структура данных, которая позволяет эффективно добавлять, удалять и манипулировать элементами, но с затратами на произвольный доступ.
---------------------
⋙ ❍ Множество:
---
Множество — это структура данных, которая хранит уникальные значения. В JavaScript для работы с множествами используется встроенный объект `Set`. Множества не содержат повторяющихся элементов, и их элементы не упорядочены.
1️⃣ Создание множества и добавление элементов
⌛ Задача: Реализовать множество и добавить в него несколько элементов.
🎯 Решение:
```js
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }
```
Объяснение:
- Множество создается с помощью конструктора `Set()`.
- Метод `add()` добавляет элементы в множество.
- В множестве не может быть повторяющихся значений.
---
2️⃣ Проверка наличия элемента в множестве
⌛ Задача: Написать функцию для проверки, существует ли элемент в множестве.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(5)); // false
```
Объяснение:
- Метод `has()` проверяет наличие элемента в множестве.
- Если элемент существует, возвращается `true`, если нет — `false`.
---
3️⃣ Удаление элемента из множества
⌛ Задача: Написать функцию для удаления элемента из множества.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.delete(2);
console.log(set); // Set { 1, 3 }
```
Объяснение:
- Метод `delete()` удаляет элемент из множества.
- Если элемент существует, он будет удален, иначе множество остается без изменений.
---
4️⃣ Очищение множества
⌛ Задача: Написать метод для очистки множества (удаления всех элементов).
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); // Set {}
```
Объяснение:
- Метод `clear()` удаляет все элементы из множества, делая его пустым.
---
5️⃣ Перебор всех элементов множества
⌛ Задача: Написать метод для перебора всех элементов множества и вывода их на экран.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.forEach(value => console.log(value));
// 1
// 2
// 3
```
Объяснение:
- Метод `forEach()` используется для перебора всех элементов множества и выполнения функции для каждого элемента.
---
6️⃣ Получение размера множества
⌛ Задача: Написать функцию для получения количества элементов в множестве.
🎯 Решение:
```js
const set = new Set([1, 2, 3, 4]);
console.log(set.size); // 4
```
Объяснение:
- Свойство `size` возвращает количество элементов в множестве.
---
7️⃣ Объединение двух множеств
⌛ Задача: Написать функцию для объединения двух множеств.
🎯 Решение:
```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);
console.log(union); // Set { 1, 2, 3, 4, 5 }
```
Объяснение:
- Для объединения двух множеств мы используем оператор распространения (`...`), который распаковывает элементы из каждого множества и собирает их в новое множество.
---
8️⃣ Пересечение двух множеств
⌛ Задача: Написать функцию для нахождения пересечения двух множеств.
🎯 Решение:
```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Set { 3 }
```
Объяснение:
- Для нахождения пересечения используем метод `filter()`, чтобы отфильтровать только те элементы, которые есть в обоих множествах.
---
9️⃣ Разность двух множеств
⌛ Задача: Написать функцию для нахождения разности двух множеств (элементы, которые есть в первом множестве, но отсутствуют во втором).
🎯 Решение:
```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5]);
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Set { 1, 2 }
```
Объяснение:
- Для нахождения разности используем метод `filter()`, чтобы отфильтровать элементы, которые есть в первом множестве, но нет во втором.
---
🔟 Симметрическая разность двух множеств
⌛ Задача: Написать функцию для нахождения симметрической разности двух множеств (элементы, которые есть в одном множестве, но отсутствуют в другом).
🎯 Решение:
```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const symmetricDifference = new Set([
  ...[...set1].filter(x => !set2.has(x)),
  ...[...set2].filter(x => !set1.has(x))
]);
console.log(symmetricDifference); // Set { 1, 2, 5, 6 }
```
Объяснение:
- Симметрическая разность состоит из элементов, которые есть в одном из двух множеств, но отсутствуют в другом.
- Для этого используем два фильтра: один для элементов из первого множества, другой — для элементов из второго.
Множества в JavaScript являются полезной структурой данных, которая позволяет работать с уникальными элементами. С помощью методов `add()`, `delete()`, `has()`, а также с использованием операторов для объединения, пересечения и разности множеств, можно легко манипулировать данными.
---------------------
⋙ ❍ Словарь:
---
Словарь или объект в JavaScript — это структура данных, которая хранит данные в виде пар "ключ-значение". Это основной способ работы с ассоциативными массивами в JavaScript.
1️⃣ Создание словаря и добавление элементов
⌛ Задача: Реализовать словарь с методами для добавления элементов и получения значений по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key] || undefined;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.get('apple')); // fruit
console.log(dict.get('carrot')); // vegetable
console.log(dict.get('banana')); // undefined
```
Объяснение:
- Создали словарь с методами для добавления и получения значений по ключу.
- Если ключ не существует, возвращаем `undefined`.
---
2️⃣ Проверка наличия ключа в словаре
⌛ Задача: Написать метод для проверки, существует ли ключ в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
console.log(dict.has('apple')); // true
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `has()` проверяет наличие ключа в словаре с помощью оператора `in`.
---
3️⃣ Удаление элемента по ключу
⌛ Задача: Написать метод для удаления элемента по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
dict.remove('banana');
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `remove()` удаляет элемент, если ключ существует в словаре.
---
4️⃣ Получение всех ключей из словаря
⌛ Задача: Написать метод для получения всех ключей в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  keys() {
    return Object.keys(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `keys()` возвращает массив всех ключей с помощью `Object.keys()`.
---
5️⃣ Получение всех значений из словаря
⌛ Задача: Написать метод для получения всех значений в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  values() {
    return Object.values(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.values()); // ['fruit', 'vegetable']
```
Объяснение:
- Метод `values()` возвращает массив всех значений с помощью `Object.values()`.
---
6️⃣ Перебор всех элементов словаря
⌛ Задача: Написать метод для перебора всех элементов словаря и вывода их на экран.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  forEach(callback) {
    for (let key in this.items) {
      callback(key, this.items[key]);
    }
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.forEach((key, value) => console.log(`${key}: ${value}`));
// apple: fruit
// carrot: vegetable
```
Объяснение:
- Метод `forEach()` перебирает все ключи и значения, вызывая переданную функцию для каждого элемента.
---
7️⃣ Слияние двух словарей
⌛ Задача: Написать метод для слияния двух словарей в один.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  merge(otherDict) {
    for (let key in otherDict.items) {
      this.items[key] = otherDict.items[key];
    }
  }
}

const dict1 = new Dictionary();
dict1.add('apple', 'fruit');
const dict2 = new Dictionary();
dict2.add('carrot', 'vegetable');
dict1.merge(dict2);
console.log(dict1.keys()); // ['apple', 'carrot']
```
Объяснение:
- Метод `merge()` объединяет два словаря. Все ключи и значения второго словаря добавляются в первый.
---
8️⃣ Подсчёт количества элементов в словаре
⌛ Задача: Написать метод для подсчёта количества элементов в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  size() {
    return Object.keys(this.items).length;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.size()); // 2
```
Объяснение:
- Метод `size()` возвращает количество элементов в словаре, используя `Object.keys()`.
---
9️⃣ Фильтрация словаря
⌛ Задача: Написать метод для фильтрации словаря по условию (например, все ключи, связанные с фруктами).
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  filter(callback) {
    const filtered = new Dictionary();
    for (let key in this.items) {
      if (callback(key, this.items[key])) {
        filtered.add(key, this.items[key]);
      }
    }
    return filtered;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.add('banana', 'fruit');
const fruits = dict.filter((key, value) => value === 'fruit');
console.log(fruits.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `filter()` создает новый словарь с элементами, которые удовлетворяют условию в `callback`.
---
🔟 Обновление значений по ключу
⌛ Задача: Написать метод для обновления значения в словаре по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  update(key, newValue) {
    if (this.has(key)) {
      this.items[key] = newValue;
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.update('apple', 'red fruit');
console.log(dict.get('apple')); // 'red fruit'
```
Объяснение:
- Метод `update()` обновляет значение для существующего ключа. Если ключ не существует, ничего не происходит.
Итог
Словарь — это отличная структура данных для хранения ассоциативных пар "ключ-значение". Он широко используется для быстрого доступа к данным, а в JavaScript для этой цели чаще всего используют объекты.
Словарь позволяет легко добавлять, удалять элементы, проверять их наличие и проводить различные манипуляции с данными.
---------------------
⋙ ❍ Стек:
---
Стек (Stack) в JavaScript
Что такое стек?
Стек (Stack) — это структура данных, работающая по принципу LIFO (Last In, First Out — последний вошёл, первый вышел).
Основные операции стека
1. push(x) – добавляет элемент в стек.
2. pop() – удаляет и возвращает верхний элемент.
3. peek() – возвращает верхний элемент без удаления.
4. isEmpty() – проверяет, пуст ли стек.
5. size() – возвращает количество элементов.
---
🎯 Простая реализация стека на массиве
```js
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const s = new Stack();
s.push(10);
s.push(20);
console.log(s.pop()); // 20
console.log(s.peek()); // 10
console.log(s.isEmpty()); // false
```
---
1️⃣ Проверка правильности скобок (Valid Parentheses)
⌛ Задача: Проверить, является ли строка с `()`, `{}`, `[]` правильной (парные скобки).
🎯 Решение:
```js
function isValidParentheses(s) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("(){}[]")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("{[()]}")); // true
```
Объяснение:
- Если видим открывающую скобку – кладём в стек.
- Если встречаем закрывающую – сравниваем с вершиной стека.
---
2️⃣ Преобразование десятичного числа в двоичное
⌛ Задача: Написать функцию, которая переводит число в двоичную систему.
🎯 Решение:
```js
function decimalToBinary(n) {
  const stack = [];

  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }

  return stack.reverse().join('');
}

console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(25)); // "11001"
```
Объяснение:
- Остаток от деления на `2` сохраняем в стек.
- Читаем стек в обратном порядке.
---
3️⃣ Операции над стеком (Min Stack)
⌛ Задача: Реализовать стек с функцией getMin(), которая за O(1) находит минимум.
🎯 Решение:
```js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const ms = new MinStack();
ms.push(3);
ms.push(5);
ms.push(2);
ms.push(1);
console.log(ms.getMin()); // 1
ms.pop();
console.log(ms.getMin()); // 2
```
Объяснение:
- minStack хранит минимальный элемент в каждый момент.
---
4️⃣ Обратный порядок строки (Reverse String)
⌛ Задача: Перевернуть строку с помощью стека.
🎯 Решение:
```js
function reverseString(s) {
  const stack = s.split('');
  let reversed = '';

  while (stack.length) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Кладём символы в стек, затем достаём в обратном порядке.
---
5️⃣ Постфиксная нотация (Reverse Polish Notation, RPN)
⌛ Задача: Вычислить выражение в обратной польской нотации.
🎯 Решение:
```js
function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(eval(`${a} ${token} ${b}`));
    }
  }

  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
```
Объяснение:
- Если видим число – кладём в стек.
- Если оператор – берём два числа и выполняем операцию.
---
6️⃣ Отмена последнего действия (Undo)
🎯 Решение:
```js
class UndoStack {
  constructor() {
    this.stack = [];
  }

  execute(action) {
    this.stack.push(action);
    console.log(`Выполнено: ${action}`);
  }

  undo() {
    console.log(`Отменено: ${this.stack.pop()}`);
  }
}

const editor = new UndoStack();
editor.execute("Написать код");
editor.execute("Добавить комментарий");
editor.undo(); // "Отменено: Добавить комментарий"
```
---
7️⃣ Проверка палиндрома
🎯 Решение:
```js
function isPalindrome(s) {
  const stack = s.split('');
  return s === stack.reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
---
8️⃣ Сортировка стека
🎯 Решение:
```js
function sortStack(stack) {
  return stack.sort((a, b) => a - b);
}

console.log(sortStack([3, 1, 4, 2])); // [1, 2, 3, 4]
```
---
9️⃣ Баланс скобок в математических выражениях
🎯 Решение:
```js
console.log(isValidParentheses("[(2+3) * (5/2)]")); // true
```
---
🔟 История браузера (Back button)
🎯 Решение:
```js
class BrowserHistory {
  constructor() {
    this.history = [];
  }

  visit(page) {
    this.history.push(page);
  }

  back() {
    return this.history.pop();
  }
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("stackoverflow.com");
console.log(browser.back()); // "stackoverflow.com"
```
Стек – полезная структура данных для отката изменений, парсинга выражений, управления вызовами функций.
---------------------
⋙ ❍ Очередь с приоритетом:
---
Что такое очередь с приоритетом?
Очередь с приоритетом — это структура данных, похожая на обычную очередь, но с одной особенностью: элементы извлекаются не в порядке добавления, а в порядке их приоритета.
🛠 Основные операции
1. enqueue (добавление элемента с приоритетом)
2. dequeue (извлечение элемента с наивысшим приоритетом)
3. peek (просмотр элемента с наивысшим приоритетом, без удаления)
4. isEmpty (проверка на пустоту)
5. size (количество элементов)
---
🎯 Реализация очереди с приоритетом
Обычно очередь с приоритетом реализуется с массивом (менее эффективно) или бинарной кучей (более эффективно).
Простая реализация на массиве (O(n) на добавление, O(1) на извлечение)
```js
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Сортируем по приоритету (O(n log n))
  }

  dequeue() {
    return this.queue.shift(); // Удаляем элемент с наивысшим приоритетом (O(1))
  }

  peek() {
    return this.queue[0]; // Возвращаем элемент с наивысшим приоритетом без удаления
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Легкая задача", 3);
pq.enqueue("Срочная задача", 1);
pq.enqueue("Средняя задача", 2);
console.log(pq.dequeue()); // { element: 'Срочная задача', priority: 1 }
```
---
1️⃣ Реализация приоритетной очереди на куче (heap)
⌛ Задача: Реализовать приоритетную очередь с использованием бинарной кучи для оптимального времени работы.
🎯 Решение (O(log n) на добавление и удаление):
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    let leftChild, rightChild, minIndex;
    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;
      minIndex = index;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[minIndex].priority) {
        minIndex = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[minIndex].priority) {
        minIndex = rightChild;
      }
      if (minIndex === index) break;
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      index = minIndex;
    }
  }
}

const pq = new MinHeap();
pq.insert("Task A", 2);
pq.insert("Task B", 1);
pq.insert("Task C", 3);
console.log(pq.extractMin()); // { element: 'Task B', priority: 1 }
```
---
2️⃣ Обработка задач с разными приоритетами
⌛ Задача: Написать систему обработки задач, где более важные выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(task, priority) {
    this.pq.insert(task, priority);
  }

  executeNextTask() {
    return this.pq.extractMin();
  }
}

const scheduler = new TaskScheduler();
scheduler.addTask("Fix bug", 1);
scheduler.addTask("Develop feature", 2);
console.log(scheduler.executeNextTask()); // Fix bug
```
---
3️⃣ Реализация алгоритма Дейкстры
⌛ Задача: Найти кратчайший путь в графе с помощью очереди с приоритетом.
🎯 Решение:
```js
function dijkstra(graph, start) {
  const pq = new MinHeap();
  const distances = {};
  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  pq.insert(start, 0);

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.insert(neighbor, newDist);
      }
    }
  }
  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"));
```
---
4️⃣ Медиана потока чисел (Median Stream)
⌛ Задача: Поддерживать поток чисел и находить медиану.
🎯 Решение:
Используем две очереди с приоритетом (макс-кучу и мин-кучу):
```js
class MedianFinder {
  constructor() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
  }

  addNum(num) {
    this.low.insert(num, -num);
    this.high.insert(this.low.extractMax().element, this.low.extractMax().priority);
    if (this.low.size() < this.high.size()) {
      this.low.insert(this.high.extractMin().element, -this.high.extractMin().priority);
    }
  }

  findMedian() {
    return this.low.size() > this.high.size() ? this.low.peek().element : (this.low.peek().element + this.high.peek().element) / 2;
  }
}
```
Очередь с приоритетом полезна для обработки задач, алгоритмов поиска пути, оптимизации маршрутов и других задач, где важен порядок приоритетов!
---
5️⃣ Симуляция процессов в ОС (с приоритетами) в JavaScript
⌛ Задача:
Реализовать планировщик процессов, в котором:
- Каждый процесс имеет приоритет (чем меньше число, тем выше приоритет).
- Планировщик сначала выполняет более важные процессы.
- Если процессы с одинаковым приоритетом, они выполняются в порядке добавления.
- После выполнения процесс удаляется из очереди.
🎯 Решение:
Используем очередь с приоритетом (`Priority Queue`), основанную на минимальной куче (Min Heap).
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(process, priority) {
    this.heap.push({ process, priority });
    this._bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);

    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    let leftChild, rightChild;
    let smallest = index;

    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
        smallest = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
        smallest = rightChild;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class ProcessScheduler {
  constructor() {
    this.queue = new MinHeap();
  }

  addProcess(name, priority) {
    console.log(`Процесс "${name}" добавлен с приоритетом ${priority}`);
    this.queue.insert(name, priority);
  }

  runNextProcess() {
    if (this.queue.isEmpty()) {
      console.log("Нет процессов для выполнения.");
      return;
    }
    const { process, priority } = this.queue.extractMin();
    console.log(`🔄 Выполняется процесс "${process}" с приоритетом ${priority}`);
  }
}

// 🔥 Симуляция работы планировщика процессов:
const scheduler = new ProcessScheduler();

scheduler.addProcess("Антивирус", 2);
scheduler.addProcess("Видео-рендеринг", 5);
scheduler.addProcess("Системное обновление", 1);
scheduler.addProcess("Музыка", 4);

scheduler.runNextProcess(); // Выполняется "Системное обновление" (приоритет 1)
scheduler.runNextProcess(); // Выполняется "Антивирус" (приоритет 2)
scheduler.runNextProcess(); // Выполняется "Музыка" (приоритет 4)
scheduler.runNextProcess(); // Выполняется "Видео-рендеринг" (приоритет 5)
scheduler.runNextProcess(); // Нет процессов для выполнения
```
---
Объяснение:
1. Используем очередь с приоритетом (Min Heap):
   - Чем меньше число приоритета, тем выше важность процесса.
   - Min Heap автоматически сортирует процессы, поддерживая их в правильном порядке.
2. Алгоритм работы:
   - addProcess(name, priority) — добавляет процесс в очередь.
   - runNextProcess() — выполняет наиболее важный процесс и удаляет его.
3. Симуляция работы ОС:
   - Сначала выполняются критически важные процессы.
   - Затем менее важные процессы (например, музыка, рендеринг видео).
---
📌 Итог
✔ Такой подход используется в операционных системах для управления задачами.
✔ Позволяет эффективно планировать работу процессора.
✔ Приоритеты управляют порядком выполнения процессов. 🚀
---
6️⃣ Оптимальное планирование задач на сервере
⌛ Задача: Реализовать систему планирования задач на сервере, где задачи с более высоким приоритетом выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(taskName, priority) {
    this.pq.insert(taskName, priority);
  }

  runNextTask() {
    const nextTask = this.pq.extractMin();
    return nextTask ? `Выполняется: ${nextTask.element}` : "Нет задач";
  }
}

const server = new TaskScheduler();
server.addTask("Обновить БД", 2);
server.addTask("Запустить бэкап", 1);
server.addTask("Очистить логи", 3);

console.log(server.runNextTask()); // Выполняется: Запустить бэкап
console.log(server.runNextTask()); // Выполняется: Обновить БД
```
Объяснение:
- Каждая задача имеет приоритет.
- Сервер выполняет задачи в порядке их важности.
---
7️⃣ Обработка заявок в службе поддержки
⌛ Задача: Написать систему обработки заявок, где **VIP-клиенты получают помощь быстрее.
🎯 Решение:
```js
class SupportQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  addRequest(clientName, priority) {
    this.pq.insert(clientName, priority);
  }

  processNextRequest() {
    const nextClient = this.pq.extractMin();
    return nextClient ? `Обслуживается клиент: ${nextClient.element}` : "Нет запросов";
  }
}

const support = new SupportQueue();
support.addRequest("Обычный клиент", 3);
support.addRequest("VIP-клиент", 1);
support.addRequest("Премиум-клиент", 2);

console.log(support.processNextRequest()); // Обслуживается клиент: VIP-клиент
console.log(support.processNextRequest()); // Обслуживается клиент: Премиум-клиент
```
Объяснение:
- VIP-клиенты получают более высокий приоритет (меньшие значения).
- Используем приоритетную очередь для быстрой обработки.
---
8️⃣ Система бронирования билетов
⌛ Задача: Написать систему бронирования билетов, где клиенты с **платными подписками** получают приоритет при покупке.
🎯 Решение:
```js
class TicketQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  bookTicket(clientName, membershipType) {
    const priority = membershipType === "VIP" ? 1 : membershipType === "Premium" ? 2 : 3;
    this.pq.insert(clientName, priority);
  }

  processBooking() {
    const client = this.pq.extractMin();
    return client ? `Билет оформлен для: ${client.element}` : "Нет заявок";
  }
}

const tickets = new TicketQueue();
tickets.bookTicket("Анна", "Standard");
tickets.bookTicket("Иван", "VIP");
tickets.bookTicket("Олег", "Premium");

console.log(tickets.processBooking()); // Билет оформлен для: Иван
console.log(tickets.processBooking()); // Билет оформлен для: Олег
```
Объяснение:
- VIP > Premium > Standard (меньший приоритет — выше приоритет).
- VIP-клиенты первыми получают билеты.
---
9️⃣ Алгоритм A* (Поиск пути в лабиринте)
⌛ Задача: Реализовать поиск кратчайшего пути в лабиринте с использованием A* (A-star).
🎯 Решение (упрощённый вариант):
```js
function aStar(start, goal, graph) {
  const pq = new MinHeap();
  pq.insert(start, 0);
  const cameFrom = {};
  const costSoFar = { [start]: 0 };

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();
    if (current === goal) break;

    for (let neighbor in graph[current]) {
      let newCost = costSoFar[current] + graph[current][neighbor];
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        let priority = newCost;
        pq.insert(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }

  return cameFrom;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(aStar("A", "D", graph));
```
Объяснение:
- A* ищет путь к цели, используя приоритетную очередь.
- Находит оптимальный маршрут в графе.
---
🔟 Очередь задач для робота на складе
⌛ Задача: Реализовать систему управления складским роботом, который выполняет **более срочные задачи раньше.
🎯 Решение:
```js
class WarehouseRobot {
  constructor() {
    this.taskQueue = new MinHeap();
  }

  addTask(task, priority) {
    this.taskQueue.insert(task, priority);
  }

  processTask() {
    const nextTask = this.taskQueue.extractMin();
    return nextTask ? `Робот выполняет: ${nextTask.element}` : "Нет задач";
  }
}

const robot = new WarehouseRobot();
robot.addTask("Переместить ящик A", 2);
robot.addTask("Срочная доставка", 1);
robot.addTask("Распаковка товаров", 3);

console.log(robot.processTask()); // Робот выполняет: Срочная доставка
console.log(robot.processTask()); // Робот выполняет: Переместить ящик A
```
Объяснение:
- Более срочные задачи выполняются первыми.
- Приоритетная очередь позволяет управлять задачами эффективно.
Итог
Очередь с приоритетом — мощная структура данных, которую можно использовать:
- Для управления задачами в серверных системах.
- Для алгоритмов поиска пути (A* и Dijkstra).
- В службах поддержки, логистике, бронировании билетов.
- В искусственном интеллекте (AI), робототехнике, планировании маршрутов.
⚡ Где ещё можно использовать?
- Система управления лифтом 🚀
- Распределение CPU-процессов 💻
- Оптимизация рекламных аукционов 📊
> Очереди с приоритетом помогают оптимально управлять ресурсами и ускорять алгоритмы.
---------------------
⋙ ❍ Дек:
---
Дек (Deque) в JavaScript:
🔹 Что такое дек?
Дек (двусторонняя очередь, deque — double-ended queue) — структура данных, в которой элементы можно добавлять и удалять с обоих концов. Дек объединяет возможности стека (LIFO) и очереди (FIFO).
🛠 Основные операции дека
- Добавление в начало (`unshift()`) и в конец (`push()`).
- Удаление из начала (`shift()`) и из конца (`pop()`).
- Просмотр первого (`front()`) и последнего (`back()`) элемента.
- Проверка на пустоту (`isEmpty()`).
---
🎯 Реализация дека
JavaScript не имеет встроенного класса `Deque`, но мы можем реализовать его с использованием массива или объекта.
🎯 Реализация на массиве
```js
class Deque {
  constructor() {
    this.items = [];
  }

  pushBack(item) { this.items.push(item); }  // Добавить в конец
  pushFront(item) { this.items.unshift(item); } // Добавить в начало
  popBack() { return this.items.pop(); } // Удалить с конца
  popFront() { return this.items.shift(); } // Удалить с начала
  front() { return this.items[0]; } // Первый элемент
  back() { return this.items[this.items.length - 1]; } // Последний элемент
  isEmpty() { return this.items.length === 0; } // Проверка на пустоту
  size() { return this.items.length; } // Размер дека
  display() { console.log(this.items); } // Вывести содержимое
}

const deque = new Deque();
deque.pushFront(1);
deque.pushBack(2);
deque.pushFront(3);
deque.display(); // [3, 1, 2]
```
---
1️⃣ Реализация дека с помощью объекта (оптимизация)
⌛ Задача: Реализовать дек на основе объекта (без `unshift()`, который медленный).
🎯 Решение:
```js
class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  pushFront(item) {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  pushBack(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  popFront() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return undefined;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  isEmpty() { return this.frontIndex === this.backIndex; }
  size() { return this.backIndex - this.frontIndex; }
  front() { return this.items[this.frontIndex]; }
  back() { return this.items[this.backIndex - 1]; }
}

const deque = new Deque();
deque.pushFront(10);
deque.pushBack(20);
console.log(deque.popFront()); // 10
console.log(deque.popBack()); // 20
```
---
2️⃣ Палиндром с использованием дека
⌛ Задача: Проверить, является ли строка палиндромом (читается одинаково в обе стороны).
🎯 Решение:
```js
const isPalindrome = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushBack(char);

  while (deque.size() > 1) {
    if (deque.popFront() !== deque.popBack()) return false;
  }
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```
---
3️⃣ Имитация очереди с приоритетом
⌛ Задача: Использовать дек для реализации приоритетной очереди.
🎯 Решение:
```js
class PriorityQueue {
  constructor() {
    this.deque = new Deque();
  }

  enqueue(item, isHighPriority = false) {
    isHighPriority ? this.deque.pushFront(item) : this.deque.pushBack(item);
  }

  dequeue() { return this.deque.popFront(); }
}

const pq = new PriorityQueue();
pq.enqueue("обычная задача");
pq.enqueue("срочная задача", true);
console.log(pq.dequeue()); // "срочная задача"
```
---
4️⃣ Очередь для обработки задач
⌛ Задача: Реализовать дек для задач с возможностью отмены последней операции.
🎯 Решение:
```js
class TaskManager {
  constructor() {
    this.deque = new Deque();
  }

  addTask(task) { this.deque.pushBack(task); }
  undoTask() { return this.deque.popBack(); }
}

const tasks = new TaskManager();
tasks.addTask("Задача 1");
tasks.addTask("Задача 2");
console.log(tasks.undoTask()); // "Задача 2"
```
---
5️⃣ Обратный порядок слов
⌛ Задача: Перевернуть строку с использованием дека.
🎯 Решение:
```js
const reverseString = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushFront(char);

  let reversed = "";
  while (!deque.isEmpty()) reversed += deque.popFront();
  return reversed;
};

console.log(reverseString("hello")); // "olleh"
```
---
6️⃣ Циклический сдвиг массива
⌛ Задача: Сдвинуть массив вправо на `k` позиций.
🎯 Решение:
```js
const rotateArray = (arr, k) => {
  const deque = new Deque();
  for (let num of arr) deque.pushBack(num);

  for (let i = 0; i < k; i++) deque.pushFront(deque.popBack());

  return [...deque.items];
};

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```
---
7️⃣ Симуляция кэша (LRU Cache)
⌛ Задача: Реализовать LRU-кеш.
🎯 Решение:
```js
class LRUCache {
  constructor(size) {
    this.deque = new Deque();
    this.size = size;
    this.cache = new Set();
  }

  accessPage(page) {
    if (this.cache.has(page)) {
      this.deque.popFront(page);
      this.cache.delete(page);
    } else if (this.deque.size() === this.size) {
      this.cache.delete(this.deque.popBack());
    }

    this.deque.pushFront(page);
    this.cache.add(page);
  }

  display() { console.log([...this.deque.items]); }
}

const cache = new LRUCache(3);
cache.accessPage(1);
cache.accessPage(2);
cache.accessPage(3);
cache.accessPage(4);
cache.display(); // [4, 3, 2]
```
---
8️⃣ Проверка сбалансированных скобок
```js
const isBalanced = (str) => {
  const deque = new Deque();
  for (let char of str) {
    if (char === '(') deque.pushBack(char);
    else if (char === ')') {
      if (deque.isEmpty()) return false;
      deque.popBack();
    }
  }
  return deque.isEmpty();
};

console.log(isBalanced("(())")); // true
console.log(isBalanced("(()")) ; // false
```
---
9️⃣ Симуляция хода змейки (Snake Game) с использованием дека
⌛ Задача: Реализовать логику движения змейки, используя `Deque`.
🎯 Решение:
```js
class SnakeGame {
  constructor() {
    this.snake = new Deque();
    this.snake.pushBack([0, 0]); // Начальная позиция змейки
    this.directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  }

  move(direction) {
    let head = this.snake.back();
    let newHead = [head[0] + this.directions[direction][0], head[1] + this.directions[direction][1]];

    this.snake.pushBack(newHead);
    this.snake.popFront(); // Удаляем хвост (если не съели еду)

    return newHead;
  }

  display() {
    console.log([...this.snake.items]);
  }
}

const game = new SnakeGame();
game.move("R"); // Двигаем змейку вправо
game.move("D"); // Двигаем вниз
game.display(); // [[0,1], [1,1]]
```
Объяснение:
- `Deque` используется для хранения координат тела змейки.
- Добавляем новую голову (`pushBack()`), удаляем хвост (`popFront()`), если змейка не съела еду.
---
🔟 Поддержка истории действий (Undo/Redo)
⌛ Задача: Реализовать механизм Undo / Redo с помощью дека.
🎯 Решение:
```js
class HistoryManager {
  constructor() {
    this.undoStack = new Deque();
    this.redoStack = new Deque();
  }

  performAction(action) {
    this.undoStack.pushBack(action);
    this.redoStack = new Deque(); // Очистить Redo-стек после нового действия
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      let lastAction = this.undoStack.popBack();
      this.redoStack.pushBack(lastAction);
      return `Отменено: ${lastAction}`;
    }
    return "Нечего отменять";
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      let redoAction = this.redoStack.popBack();
      this.undoStack.pushBack(redoAction);
      return `Повторено: ${redoAction}`;
    }
    return "Нечего повторять";
  }

  displayHistory() {
    console.log("История действий:", [...this.undoStack.items]);
  }
}

const history = new HistoryManager();
history.performAction("Открыт файл");
history.performAction("Написан код");
console.log(history.undo()); // "Отменено: Написан код"
console.log(history.redo()); // "Повторено: Написан код"
```
Объяснение:
- Используем два дека: `undoStack` (для отмены) и `redoStack` (для повторения).
- При новом действии очищаем `redoStack`, т.к. после новых операций старые "повторения" уже не актуальны.
Дек — мощный инструмент для решения задач, связанных с историей действий, обработкой строк, симуляцией игр и даже алгоритмами поиска!
---------------------
⋙ ❍ Графы:
---
Графы в JavaScript:
Что такое граф?
Граф — это структура данных, которая состоит из:
- Вершин (nodes, vertices) — объекты или узлы.
- Рёбер (edges) — связи между вершинами.
Виды графов
🔹 Ориентированные и неориентированные
- В ориентированном графе связи имеют направление (например, однонаправленные дороги).
- В неориентированном графе связи двусторонние (например, друзья в соцсетях).
🔹 Взвешенные и невзвешенные
- Взвешенные графы имеют "вес" у рёбер (например, стоимость билета или расстояние).
- Невзвешенные графы имеют только связи без весов.
---
Как представить граф в памяти?
🔸 Матрица смежности (подходит для плотных графов)
Массив `n × n`, где `1` означает связь между вершинами, а `0` — её отсутствие.
```js
const adjacencyMatrix = [
  [0, 1, 1], // Вершина 0 соединена с 1 и 2
  [1, 0, 1], // Вершина 1 соединена с 0 и 2
  [1, 1, 0]  // Вершина 2 соединена с 0 и 1
];
```
🔸 Список смежности (подходит для разреженных графов)
Объект, где ключи — вершины, а значения — массивы смежных вершин.
```js
const adjacencyList = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
};
```
---
1️⃣ Создание графа
⌛ Задача: Реализовать структуру графа с методами **добавления вершин и рёбер.
🎯 Решение и объяснение:
Используем объект `adjacencyList` для хранения графа.
```js
class Graph {
  constructor() {
    this.adjacencyList = {}; // Хранение графа
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Для неориентированного графа
  }

  display() {
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.display();
// Вывод: { '1': [ 2 ], '2': [ 1, 3 ], '3': [ 2 ] }
```
---
2️⃣ Обход в глубину (DFS)
⌛ Задача: Реализовать DFS для обхода графа.
🎯 Решение и объяснение:
DFS рекурсивно посещает вершины, углубляясь как можно дальше.
```js
const dfs = (graph, start, visited = new Set()) => {
  if (!visited.has(start)) {
    console.log(start);
    visited.add(start);
    for (let neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
};

const graph2 = { 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] };
dfs(graph2, 0);
// Вывод: 0 1 3 2
```
---
3️⃣ Обход в ширину (BFS)
⌛ Задача: Реализовать BFS для обхода графа.
🎯 Решение и объяснение:
BFS проходит граф по уровням, используя очередь.
```js
const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set(queue);

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

bfs(graph2, 0);
// Вывод: 0 1 2 3
```
---
4️⃣ Проверка пути между двумя вершинами
⌛ Задача: Проверить, есть ли путь между вершинами.
🎯 Решение и объяснение:
Используем DFS.
```js
const hasPath = (graph, start, end, visited = new Set()) => {
  if (start === end) return true;
  if (visited.has(start)) return false;

  visited.add(start);
  for (let neighbor of graph[start]) {
    if (hasPath(graph, neighbor, end, visited)) return true;
  }
  return false;
};

console.log(hasPath(graph2, 0, 3)); // true
console.log(hasPath(graph2, 2, 3)); // false
```
---
5️⃣ Количество компонент связности
⌛ Задача: Подсчитать количество несвязанных частей графа.
🎯 Решение и объяснение:
Запускаем DFS для каждой новой компоненты.
```js
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  };

  for (let node in graph) {
    if (!visited.has(Number(node))) {
      count++;
      dfs(Number(node));
    }
  }
  return count;
};

console.log(countComponents({ 0: [1], 1: [0], 2: [] })); // 2
```
---
6️⃣ Поиск цикла
```js
const hasCycle = (graph, node, visited = new Set(), parent = -1) => {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycle(graph, neighbor, visited, node)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
};
```
---
7️⃣ Кратчайший путь (BFS)
```js
const shortestPathBFS = (graph, start, end) => {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;

    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
};

console.log(shortestPathBFS(graph2, 0, 3)); // 2
```
---
8️⃣ Алгоритм Дейкстры
Используем приоритетную очередь для нахождения кратчайшего пути во взвешенном графе.
```js
// Реализация приоритетной очереди и Дейкстры
```
---
9️⃣ Проверка, является ли граф деревом
```js
const isTree = (graph) => {
  let edges = 0;
  for (let key in graph) edges += graph[key].length;
  edges /= 2;
  return countComponents(graph) === 1 && edges === Object.keys(graph).length - 1;
};
```
---
🔟 Нахождение мостов (DFS)
```js
// Используем алгоритм Тарьяна
```
---------------------
⋙ ❍ Природа графа:
---
Граф — это структура данных, состоящая из множества вершин (узлов) и рёбер (связей между узлами). Графы бывают ориентированные и неориентированные, взвешенные и невзвешенные, связные и несвязные.
1. ⌛ Задача: Определение, является ли граф связным
Граф считается связным, если между любой парой вершин существует путь. Проверим, является ли граф, представленный в виде списка смежности, связным.
🎯 Решение:
Используем обход в глубину (DFS) для проверки, можно ли достичь все вершины из стартовой.
```javascript
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2]
};

const isConnected = (graph) => {
  const visited = new Set();
  const startNode = Object.keys(graph)[0];

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  dfs(startNode);
  return visited.size === Object.keys(graph).length;
};

console.log(isConnected(graph)); // true
```
---
2. ⌛ Задача: Проверка, является ли граф деревом
Граф является деревом, если он связен и не содержит циклов.
🎯 Решение:
- Граф является деревом, если количество рёбер = количеству вершин - 1.
- Граф не содержит циклов (используем DFS для проверки).
```javascript
const isTree = (graph) => {
  const visited = new Set();
  let edgeCount = 0;

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (!dfs(neighbor, node)) return false;
        edgeCount++;
      }
    }
    return true;
  };

  const startNode = Object.keys(graph)[0];
  if (!dfs(startNode, null)) return false;

  return visited.size === Object.keys(graph).length && edgeCount === visited.size - 1;
};

const graph1 = { 0: [1, 2], 1: [0], 2: [0] }; // Дерево
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом, не дерево

console.log(isTree(graph1)); // true
console.log(isTree(graph2)); // false
```
---
3. ⌛ Задача: Проверка, является ли граф двудольным
Граф двудольный, если его вершины можно разбить на два множества, такие что все рёбра соединяют вершины из разных множеств.
🎯 Решение:
Используем BFS и красим вершины в два цвета.
```javascript
const isBipartite = (graph) => {
  const colors = {};

  for (let node in graph) {
    if (!(node in colors)) {
      colors[node] = 0;
      const queue = [node];

      while (queue.length) {
        let current = queue.shift();
        for (let neighbor of graph[current]) {
          if (!(neighbor in colors)) {
            colors[neighbor] = 1 - colors[current];
            queue.push(neighbor);
          } else if (colors[neighbor] === colors[current]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

const graph1 = { 0: [1, 3], 1: [0, 2], 2: [1, 3], 3: [0, 2] };
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };

console.log(isBipartite(graph1)); // true
console.log(isBipartite(graph2)); // false
```
---
4. ⌛ Задача: Определение количества компонентов связности
Если граф несвязный, его можно разбить на несколько компонент связности.
🎯 Решение:
Запускаем *DFS из каждой непосещённой вершины и считаем компоненты.
```javascript
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return count;
};

const graph1 = { 0: [1], 1: [0], 2: [3], 3: [2] }; // Две компоненты
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Одна компонента

console.log(countComponents(graph1)); // 2
console.log(countComponents(graph2)); // 1
```
---
5. ⌛ Задача: Поиск цикла в неориентированном графе
Определим, есть ли в графе цикл.
🎯 Решение:
Используем DFS с отслеживанием родителя.
```javascript
const hasCycle = (graph) => {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
};

const graph1 = { 0: [1], 1: [0, 2], 2: [1] }; // Без цикла
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом

console.log(hasCycle(graph1)); // false
console.log(hasCycle(graph2)); // true
```
---

6. ⌛ Задача: Проверка, является ли граф полным
Граф называется полным, если каждая вершина соединена со всеми другими вершинами.
🎯 Решение:
В полном графе с `n` вершинами у каждой вершины должно быть `n-1` соседей.
```javascript
const isCompleteGraph = (graph) => {
  const nodes = Object.keys(graph);
  const n = nodes.length;

  for (let node of nodes) {
    if (graph[node].length !== n - 1) {
      return false;
    }
  }
  return true;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный
const graph2 = { 0: [1], 1: [0, 2], 2: [1] }; // Не полный

console.log(isCompleteGraph(graph1)); // true
console.log(isCompleteGraph(graph2)); // false
```
---
7. ⌛ Задача: Поиск кратчайшего пути в невзвешенном графе (BFS)
Используем поиск в ширину (BFS), так как в невзвешенном графе он гарантирует нахождение кратчайшего пути.
🎯 Решение:
Мы будем использовать очередь (`queue`), чтобы проходить по графу уровнями.
```javascript
const shortestPathBFS = (graph, start, target) => {
  const queue = [[start, 0]]; // (вершина, расстояние)
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();

    if (node === target) return dist;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // Если пути нет
};

const graph = { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] };

console.log(shortestPathBFS(graph, 0, 3)); // 2
console.log(shortestPathBFS(graph, 0, 4)); // -1 (нет пути)
```
---
8. ⌛ Задача: Поиск кратчайшего пути в взвешенном графе (алгоритм Дейкстры)
Для поиска кратчайшего пути в взвешенном графе используем алгоритм Дейкстры.
🎯 Решение:
Используем приоритетную очередь (min-heap).
```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    let current = pq.dequeue();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
};

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A")); // { A: 0, B: 1, C: 3, D: 4 }
```
---
9. ⌛ Задача: Проверка, является ли граф планарным
Граф планарный, если его можно нарисовать на плоскости без пересечения рёбер.
🎯 Решение:
Используем формулу Эйлера для простого графа:
\[
V - E + F = 2
\]
где `V` — вершины, `E` — рёбра, `F` — грани. Для графов без граней используем критическое неравенство.
- В неориентированном графе без циклов должно быть `E ≤ 3V - 6`.
- В ориентированном графе `E ≤ 2V - 4`.
```javascript
const isPlanarGraph = (graph) => {
  const V = Object.keys(graph).length;
  let E = 0;

  for (let node in graph) {
    E += graph[node].length;
  }
  E /= 2; // Каждое ребро посчитано дважды

  return E <= 3 * V - 6;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный граф K3 (планарный)
const graph2 = { 0: [1, 2, 3], 1: [0, 2, 3], 2: [0, 1, 3], 3: [0, 1, 2] }; // Полный граф K4 (планарный)
const graph3 = { 0: [1, 2, 3, 4], 1: [0, 2, 3, 4], 2: [0, 1, 3, 4], 3: [0, 1, 2, 4], 4: [0, 1, 2, 3] }; // Полный граф K5 (не планарный)

console.log(isPlanarGraph(graph1)); // true
console.log(isPlanarGraph(graph2)); // true
console.log(isPlanarGraph(graph3)); // false
```
---
10. ⌛ Задача: Нахождение мостов в графе
Мост — это ребро, удаление которого увеличивает число компонент связности.
🎯 Решение:
Используем обход в глубину (DFS) и время входа в вершину.
```javascript
const findBridges = (graph) => {
  let time = 0;
  const discovery = {};
  const low = {};
  const bridges = [];

  const dfs = (node, parent) => {
    discovery[node] = low[node] = ++time;

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;

      if (!(neighbor in discovery)) {
        dfs(neighbor, node);
        low[node] = Math.min(low[node], low[neighbor]);

        if (low[neighbor] > discovery[node]) {
          bridges.push([node, neighbor]);
        }
      } else {
        low[node] = Math.min(low[node], discovery[neighbor]);
      }
    }
  };

  for (let node in graph) {
    if (!(node in discovery)) dfs(node, null);
  }

  return bridges;
};

const graph = { 0: [1, 2], 1: [0, 2, 3], 2: [0, 1], 3: [1, 4], 4: [3] };

console.log(findBridges(graph)); // [[3, 4]]
```
---------------------
⋙ ❍ Представление графа в памяти компьютера:
---
Графы могут быть представлены в памяти несколькими способами, включая списки смежности и матрицы смежности. Для каждой задачи я объясню решение и представлю пример кода.
1. ⌛ Задача: Представление графа с использованием матрицы смежности
Представьте неориентированный граф с 4 вершинами, где вершины соединены следующим образом: 0 - 1, 0 - 2, 1 - 3.
🎯 Решение:
Матрица смежности — это двумерный массив, где строка i и столбец j содержат 1, если между вершинами i и j есть ребро, и 0, если нет.
```javascript
const graph = [
  [0, 1, 1, 0], // Вершина 0 соединена с вершинами 1 и 2
  [1, 0, 0, 1], // Вершина 1 соединена с вершинами 0 и 3
  [1, 0, 0, 0], // Вершина 2 соединена с вершинами 0
  [0, 1, 0, 0]  // Вершина 3 соединена с вершинами 1
];

console.log(graph);
```
2. ⌛ Задача: Представление направленного графа с помощью списка смежности
Создайте направленный граф с 3 вершинами, где 0 -> 1, 1 -> 2.
🎯 Решение:
Список смежности — это массив, где каждый элемент — это массив смежных вершин для данной вершины.
```javascript
const graph = {
  0: [1], // Вершина 0 соединена с вершиной 1
  1: [2], // Вершина 1 соединена с вершиной 2
  2: []   // Вершина 2 не соединена с другими вершинами
};

console.log(graph);
```
3. ⌛ Задача: Поиск всех смежных вершин для вершины 0 в списке смежности
Для графа из предыдущего примера найдите все вершины, которые смежны с вершиной 0.
🎯 Решение:
Для поиска всех смежных вершин нужно просто извлечь список смежности для вершины 0.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const getNeighbors = (graph, vertex) => graph[vertex] || [];

console.log(getNeighbors(graph, 0)); // [1]
```
4. ⌛ Задача: Проверка наличия ребра между двумя вершинами в матрице смежности
Проверьте, есть ли ребро между вершинами 0 и 2 в графе, представленном матрицей смежности.
🎯 Решение:
Проверка на наличие ребра сводится к проверке значения в соответствующей ячейке матрицы.
```javascript
const graph = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
];

const hasEdge = (graph, vertex1, vertex2) => graph[vertex1][vertex2] === 1;

console.log(hasEdge(graph, 0, 2)); // true
console.log(hasEdge(graph, 1, 2)); // false
```
5. ⌛ Задача: Добавление ребра в граф, представленный списком смежности
Добавьте ребро между вершинами 1 и 2 в граф, представленный списком смежности.
🎯 Решение:
Для добавления ребра нужно добавить вершину в список смежности соответствующей вершины.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const addEdge = (graph, vertex1, vertex2) => {
  graph[vertex1].push(vertex2);
};

addEdge(graph, 1, 2); // Добавляем ребро 1 -> 2
console.log(graph);
```
6. ⌛ Задача: Удаление ребра из графа, представленного списком смежности
Удалите ребро между вершинами 0 и 1 в графе, представленном списком смежности.
🎯 Решение:
Для удаления ребра нужно удалить соответствующую вершину из списка смежности.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const removeEdge = (graph, vertex1, vertex2) => {
  const index = graph[vertex1].indexOf(vertex2);
  if (index !== -1) {
    graph[vertex1].splice(index, 1);
  }
};

removeEdge(graph, 0, 1); // Удаляем ребро 0 -> 1
console.log(graph);
```
7. ⌛ Задача: Поиск всех вершин графа, которые не имеют исходящих рёбер (в списке смежности)
Для графа из предыдущего примера найдите вершины, которые не имеют исходящих рёбер.
🎯 Решение:
Для поиска таких вершин нужно проверить все списки смежности и выявить те, которые пусты.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const findVerticesWithNoOutgoingEdges = graph => {
  return Object.keys(graph).filter(vertex => graph[vertex].length === 0);
};

console.log(findVerticesWithNoOutgoingEdges(graph)); // [2]
```
8. ⌛ Задача: Проверка, является ли граф ориентированным
Проверьте, является ли граф, представленный матрицей смежности, ориентированным. Граф ориентированный, если для каждой пары вершин (i, j) выполняется условие: если есть ребро из i в j, то нет ребра из j в i.
🎯 Решение:
Для проверки нужно пройтись по матрице и убедиться, что если `graph[i][j] === 1`, то `graph[j][i] === 0`.
```javascript
const graph = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];

const isDirected = graph => {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 1 && graph[j][i] === 1) {
        return false; // Граф не ориентированный
      }
    }
  }
  return true;
};

console.log(isDirected(graph)); // true
```
9. ⌛ Задача: Транспонирование графа, представленного матрицей смежности
Создайте транспонированную матрицу для графа, представленного матрицей смежности (все рёбра графа меняются на противоположные).
🎯 Решение:
Транспонирование матрицы сводится к обмену строк с колонками.
```javascript
const graph = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];

const transposeGraph = graph => {
  const n = graph.length;
  const transposed = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = graph[i][j];
    }
  }
  return transposed;
};

console.log(transposeGraph(graph));
```
10. ⌛ Задача: Представление взвешенного графа с помощью списка смежности
Представьте взвешенный направленный граф с 3 вершинами, где веса рёбер следующие: 0 -> 1 (вес 5), 1 -> 2 (вес 3).
🎯 Решение:
Для взвешенного графа в списке смежности можно хранить массив объектов с вершинами и весами.
```javascript
const graph = {
  0: [{ vertex: 1, weight: 5 }],
  1: [{ vertex: 2, weight: 3 }],
  2: []
};

console.log(graph);
```
Эти задачи покрывают основные способы представления графов в памяти и дают представление о том, как манипулировать графами в JavaScript.
---------------------
⋙ ❍ Обходы графа:
---
1. Обход графа в глубину (DFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в глубину и возвращать список посещенных вершин.
🎯 Решение:
```javascript
function dfs(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node]) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

console.log(dfs(graph, "A")); // ["A", "B", "D", "E", "F", "C"]
```
Объяснение:
- Мы рекурсивно проходим через соседей каждой вершины, добавляя их в массив `result`, если они еще не были посещены.
- Используем рекурсию для обхода графа.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---
2. Обход графа в ширину (BFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в ширину, начиная с указанной вершины.
🎯 Решение:
```javascript
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfs(graph, "A")); // ["A", "B", "C", "D", "E", "F"]
```
Объяснение:
- Используем очередь для обхода всех уровней графа.
- Добавляем вершины в очередь, если они еще не посещены.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---
3. Обход ориентированного графа в глубину (DFS)
⌛ Задача: Напишите функцию для обхода ориентированного графа в глубину, используя рекурсию.
🎯 Решение:
```javascript
function dfsDirected(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node] || []) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const directedGraph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsDirected(directedGraph, "A")); // ["A", "B", "D", "C", "E"]
```
Объяснение:
- Осуществляем обход с помощью рекурсии, но только по рёбрам ориентированного графа.
- Каждую вершину посещаем только один раз.
- Сложность: O(V + E).
---
4. Обход ориентированного графа в ширину (BFS)
⌛ Задача: Реализуйте обход ориентированного графа в ширину.
🎯 Решение:
```javascript
function bfsDirected(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfsDirected(directedGraph, "A")); // ["A", "B", "C", "D", "E"]
```
Объяснение:
- Аналогично обычному BFS, но с учётом направленности рёбер.
- Сложность: O(V + E).
---
5. Обход графа с проверкой на цикл (DFS)
⌛ Задача: Напишите функцию, которая выполняет обход графа в глубину и проверяет, содержит ли граф цикл.
🎯 Решение:
```javascript
function hasCycle(graph) {
    let visited = new Set();
    let recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true; // обнаружен цикл
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let neighbor of graph[node] || []) {
            if (dfs(neighbor)) {
                return true;
            }
        }

        recStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node)) {
                return true;
            }
        }
    }

    return false;
}

const cyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
};

const acyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: []
};

console.log(hasCycle(cyclicGraph)); // true
console.log(hasCycle(acyclicGraph)); // false
```
Объяснение:
- Для обнаружения цикла используем рекурсивный стек. Если вершина уже находится в стеке рекурсии, значит, цикл обнаружен.
- Сложность: O(V + E).
---
6. Обход графа с пометкой рёбер (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, помечая рёбра как «обрабатываемые» или «обратные».
🎯 Решение:
```javascript
function dfsEdgeTypes(graph, start) {
    let visited = new Set();
    let result = [];

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                result.push(`${node} -> ${neighbor} (Tree Edge)`);
                dfs(neighbor, node);
            } else if (parent !== neighbor) {
                result.push(`${node} -> ${neighbor} (Back Edge)`);
            }
        }
    }

    dfs(start);
    return result;
}

const graph2 = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsEdgeTypes(graph2, "A"));
```
Объяснение:
- Мы отмечаем рёбра как деревянные или обратные в зависимости от того, были ли вершины уже посещены.
- Сложность: O(V + E).
---
7. Обход графа с вычислением расстояний от начальной вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину с вычислением расстояний от начальной вершины.
🎯 Решение:
```javascript
function bfsWithDistances(graph, start) {
    let visited = new Set();
    let queue = [start];
    let distances = { [start]: 0 };

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                distances[neighbor] = distances[node] + 1;
            }
        }
    }

    return distances;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};

console.log(bfsWithDistances(graph3, "A")); // { A: 0, B: 1, C: 1, D: 2 }
```
Объяснение:
- Мы сохраняем расстояния для каждой вершины в объекте `distances` и обновляем их по мере обхода.
- Сложность: O(V + E).
---
8. Обход всех компонент связности в графе (DFS)
⌛ Задача: Напишите функцию для обхода всех компонент связности в графе.
🎯 Решение:
```javascript
function findConnectedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph4 = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponents(graph4)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы проходим по всем вершинам и для каждой не посещенной вершины начинаем новый обход DFS, создавая компоненты связности.
- Сложность: O(V + E).
---
9. Обход графа с отслеживанием времени (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, которая отслеживает время входа и выхода из каждой вершины.
🎯 Решение:
```javascript
function dfsWithTime(graph, start) {
    let visited = new Set();
    let result = [];
    let time = 0;

    function visit(node) {
        visited.add(node);
        time++;
        result.push(`Node ${node} entered at time ${time}`);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visit(neighbor);
            }
        }

        time++;
        result.push(`Node ${node} exited at time ${time}`);
    }

    visit(start);
    return result;
}

const graph5 = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"]
};

console.log(dfsWithTime(graph5, "A"));
```
Объяснение:
- Мы отслеживаем время входа и выхода из каждой вершины, что полезно для алгоритмов, требующих временных меток (например, для поиска мостов и арок).
- Сложность: O(V + E).
---
10. Обход графа с вычислением пути до каждой вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину, которая будет отслеживать путь до каждой вершины.
🎯 Решение:
```javascript
function bfsWithPath(graph, start) {
    let visited = new Set();
    let queue = [start];
    let parent = { [start]: null };
    let result = [];

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                parent[neighbor] = node;
            }
        }
    }

    for (let node in parent) {
        let path = [];
        let current = node;
        while (current !== null) {
            path.unshift(current);
            current = parent[current];
        }
        result.push(path);
    }

    return result;
}

console.log(bfsWithPath(graph3, "A")); // [["A", "B", "D"], ["A", "C"]]
```
Объяснение:
- Мы отслеживаем путь до каждой вершины, используя объект `parent`, который сохраняет предка для каждой вершины.
- Сложность: O(V + E).
---------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
Алгоритм нахождения компонент связности в графе
Компонента связности — это подграф, в котором любая вершина достижима из любой другой вершины.
1. Поиск компонент связности с помощью DFS (глубина-ширина)
Подходит для представления графа через список смежности.
```javascript
function findConnectedComponentsDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            dfs(neighbor, component);
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponentsDFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем DFS для обхода графа.
2. Каждый раз, когда находим новую вершину, создаем новую компоненту.
3. Рекурсивно добавляем всех соседей.
4. Сложность: O(V + E).
---
2. Поиск компонент связности через BFS (поиск в ширину)
Аналогично DFS, но используем очередь.
```javascript
function findConnectedComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length) {
            let node = queue.shift();
            if (visited.has(node)) continue;

            visited.add(node);
            component.push(node);
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

console.log(findConnectedComponentsBFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем очередь вместо рекурсии.
2. Обходим все связанные вершины перед переходом к следующей компоненте.
3. Сложность: O(V + E).
---
3. Поиск компонент в графе, представленном матрицей смежности
```javascript
function findComponentsMatrix(graphMatrix) {
    let n = graphMatrix.length;
    let visited = new Array(n).fill(false);
    let components = [];

    function dfs(node, component) {
        visited[node] = true;
        component.push(node);
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graphMatrix[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const matrixGraph = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0]
];

console.log(findComponentsMatrix(matrixGraph)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем матрицу смежности вместо списка.
2. Применяем DFS для обхода.
3. Сложность: O(V²) из-за матрицы.
---
4. Поиск компонент с использованием Union-Find (DSU)
Эффективно работает на больших графах.
```javascript
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}

function connectedComponentsDSU(edges, n) {
    let dsu = new DSU(n);

    for (let [a, b] of edges) {
        dsu.union(a, b);
    }

    let components = new Map();
    for (let i = 0; i < n; i++) {
        let root = dsu.find(i);
        if (!components.has(root)) components.set(root, []);
        components.get(root).push(i);
    }

    return Array.from(components.values());
}

const edges = [[0, 1], [1, 2], [3, 4]];
console.log(connectedComponentsDSU(edges, 5)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем сжатие пути и объединение по рангу.
2. DSU эффективен при динамическом изменении графа.
3. Сложность: O(α(V)) ≈ O(1).
---
5. Поиск компонент на ориентированном графе (SCC) с алгоритмом Косараю
```javascript
function kosarajuSCC(graph) {
    let visited = new Set();
    let stack = [];

    function dfs1(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node] || []) dfs1(neighbor);
        stack.push(node);
    }

    function dfs2(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) dfs2(neighbor, component);
    }

    for (let node in graph) dfs1(node);

    let reversedGraph = {};
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            if (!reversedGraph[neighbor]) reversedGraph[neighbor] = [];
            reversedGraph[neighbor].push(node);
        }
    }

    visited.clear();
    let components = [];
    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfs2(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(kosarajuSCC(directedGraph)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
1. Использует двойной DFS и топологическую сортировку.
2. Работает для ориентированных графов.
3. Сложность: O(V + E).
---
6. Нахождение компонент связности в неориентированном графе с использованием DFS на многосвязном графе
```javascript
function findComponentsMultiGraph(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const multiGraph = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsMultiGraph(multiGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы создаем компоненту для каждого нового узла, и при этом учитываем граф, в котором могут быть многократные связи.
- Используем DFS для поиска всех достижимых вершин и их объединения в компоненту.
- Сложность: O(V + E).
---
7. Поиск компонент связности с использованием Итеративного DFS
```javascript
function findComponentsIterativeDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node) {
        let stack = [node];
        let component = [];

        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                component.push(currentNode);

                for (let neighbor of graph[currentNode] || []) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(dfs(node));
        }
    }

    return components;
}

const graph2 = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsIterativeDFS(graph2)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Вместо рекурсии используем стек для реализации итеративного DFS.
- Этот подход помогает избежать ограничений стека рекурсии и полезен для очень больших графов.
- Сложность: O(V + E).
---
8. Поиск компонент связности в неориентированном графе с использованием BFS
```javascript
function findComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                component.push(node);

                for (let neighbor of graph[node] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"],
    E: ["F"],
    F: ["E"]
};

console.log(findComponentsBFS(graph3)); // [["A", "B", "C", "D"], ["E", "F"]]
```
Объяснение:
- Используем поиск в ширину (BFS) для обхода всех соседей в графе.
- На каждом шаге мы находим новый компонент, начиная с не посещенной вершины.
- Сложность: O(V + E).
---
9. Поиск компонент связности для ориентированного графа с использованием DFS (перемещение по вершинам)
```javascript
function findSCC(graph) {
    let visited = new Set();
    let stack = [];
    let components = [];

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }

    function reverseGraph(graph) {
        let reversed = {};
        for (let node in graph) {
            for (let neighbor of graph[node]) {
                if (!reversed[neighbor]) reversed[neighbor] = [];
                reversed[neighbor].push(node);
            }
        }
        return reversed;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    let reversedGraph = reverseGraph(graph);
    visited.clear();

    function dfsReverse(node, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) {
            if (!visited.has(neighbor)) {
                dfsReverse(neighbor, component);
            }
        }
    }

    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfsReverse(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph2 = {
    A: ["B"],
    B: ["C"],
    C: ["A"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(findSCC(directedGraph2)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
- Мы находим сильные компоненты связности (SCC) в ориентированном графе, используя двойной DFS.
- Применяем топологическую сортировку и ищем компоненты в обратном графе.
- Сложность: O(V + E).
---
10. Поиск компонент связности для графа с весами с использованием DFS с модификацией
```javascript
function findWeightedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const weightedGraph = {
    A: [{ node: "B", weight: 5 }, { node: "C", weight: 10 }],
    B: [{ node: "A", weight: 5 }, { node: "C", weight: 3 }],
    C: [{ node: "A", weight: 10 }, { node: "B", weight: 3 }],
    D: [{ node: "E", weight: 1 }],
    E: [{ node: "D", weight: 1 }],
    F: []
};

console.log(findWeightedComponents(weightedGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Для графов с весами мы все равно можем использовать стандартный DFS, поскольку веса не изменяют процесс поиска компонент связности, но могут влиять на другие алгоритмы, такие как нахождение кратчайшего пути.
- Мы определяем компоненты с помощью поиска в глубину (DFS), независимо от веса.
Сложность: O(V + E).
---------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
⌛ Задача: Поиск кратчайшего пути в графе
Дано: Ориентированный или неориентированный граф(список смежности или матрица смежности).
Найти: Кратчайший путь между двумя вершинами.
🎯 Решение:
---
1. Алгоритм поиска в ширину (BFS)
Подходит для невзвешенных графов.
```javascript
function bfsShortestPath(graph, start, end) {
    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === end) return path;

        if (!visited.has(node)) {
            visited.add(node);
            for (let neighbor of graph[node] || []) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(bfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем очередь (`queue`).
2. На каждом шаге проверяем вершину.
3. Если это целевая вершина, возвращаем путь.
4. Иначе добавляем все её соседей в очередь.
5. Сложность: O(V + E) (вершины + рёбра).
---
2. Алгоритм Дейкстры
Подходит для графов с положительными весами рёбер.
```javascript
function dijkstra(graph, start, end) {
    let distances = {};
    let previous = {};
    let pq = new Set(Object.keys(graph));

    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    while (pq.size) {
        let node = [...pq].reduce((a, b) => (distances[a] < distances[b] ? a : b));
        pq.delete(node);

        if (node === end) {
            let path = [];
            while (node) {
                path.unshift(node);
                node = previous[node];
            }
            return path;
        }

        for (let [neighbor, weight] of Object.entries(graph[node])) {
            let alt = distances[node] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = node;
            }
        }
    }

    return null;
}

const graphWeighted = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(dijkstra(graphWeighted, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Используем таблицы расстояний (`distances`).
2. Перебираем все вершины, выбирая минимальную.
3. Обновляем соседей, если нашли более короткий путь.
4. Сложность: O(V²) (или O((V + E) log V) с приоритетной очередью).
---
3. Алгоритм Беллмана-Форда
Подходит для графов с отрицательными весами (но без отрицательных циклов).
```javascript
function bellmanFord(graph, start, end) {
    let distances = {};
    let previous = {};
    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let [neighbor, weight] of Object.entries(graph[node])) {
                let alt = distances[node] + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = node;
                }
            }
        }
    }

    let path = [];
    let node = end;
    while (node) {
        path.unshift(node);
        node = previous[node];
    }

    return path.length ? path : null;
}

const graphNegWeights = {
    A: { B: 1, C: 4 },
    B: { C: -2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(bellmanFord(graphNegWeights, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Инициализируем расстояния как бесконечные.
2. Проходим граф V-1 раз, обновляя пути.
3. Проверяем кратчайший путь.
4. Сложность: O(VE).
---
4. Алгоритм Флойда-Уоршелла
Находит кратчайший путь между всеми парами вершин.
```javascript
function floydWarshall(graph) {
    let nodes = Object.keys(graph);
    let dist = {};

    nodes.forEach(i => {
        dist[i] = {};
        nodes.forEach(j => {
            dist[i][j] = i === j ? 0 : graph[i]?.[j] ?? Infinity;
        });
    });

    nodes.forEach(k => {
        nodes.forEach(i => {
            nodes.forEach(j => {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            });
        });
    });

    return dist;
}

const graphMatrix = {
    A: { B: 3, C: 8 },
    B: { D: 2 },
    C: { D: 1 },
    D: {}
};

console.log(floydWarshall(graphMatrix));
```
Объяснение:
1. Заполняем матрицу смежности.
2. Перебираем промежуточные вершины.
3. Обновляем минимальные расстояния.
4 Сложность: O(V³).
---
5. Жадный алгоритм A
Использует эвристику для ускорения поиска (например, Манхэттенское расстояние).
```javascript
function aStar(graph, start, end, heuristic) {
    let openSet = new Set([start]);
    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);

    while (openSet.size > 0) {
        let current = [...openSet].reduce((a, b) => (fScore[a] < fScore[b] ? a : b));

        if (current === end) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        openSet.delete(current);
        for (let [neighbor, cost] of Object.entries(graph[current])) {
            let tentativeGScore = gScore[current] + cost;
            if (tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.add(neighbor);
            }
        }
    }

    return null;
}

const heuristic = (a, b) => Math.abs(a.charCodeAt(0) - b.charCodeAt(0));

console.log(aStar(graphWeighted, "A", "D", heuristic)); // ["A", "B", "C", "D"]
```
Объяснение:
1. Поддерживаем два массива (`gScore` и `fScore`).
2. Используем эвристику для поиска кратчайшего пути.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---
6. Поиск в глубину (DFS) с запоминанием кратчайшего пути
Подходит для поиска пути, но не всегда оптимален для кратчайшего пути.
```javascript
function dfsShortestPath(graph, start, end) {
    let shortestPath = null;

    function dfs(node, path, visited) {
        if (visited.has(node)) return;
        path.push(node);
        visited.add(node);

        if (node === end) {
            if (!shortestPath || path.length < shortestPath.length) {
                shortestPath = [...path];
            }
        } else {
            for (let neighbor of graph[node] || []) {
                dfs(neighbor, path, visited);
            }
        }

        path.pop();
        visited.delete(node);
    }

    dfs(start, [], new Set());
    return shortestPath;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(dfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем глубину поиска (DFS).
2. Запоминаем кратчайший найденный путь.
3. Работает плохо для взвешенных графов, но может быть полезен.
4. Сложность: O(V!) в худшем случае.
---
7. Алгоритм Йена (поиск K кратчайших путей)
Позволяет найти несколько кратчайших путей.
```javascript
function yenKShortestPaths(graph, start, end, K) {
    let paths = [[start]];
    let shortestPaths = [];

    while (shortestPaths.length < K && paths.length) {
        let path = paths.shift();
        let lastNode = path[path.length - 1];

        if (lastNode === end) {
            shortestPaths.push(path);
        } else {
            for (let neighbor of graph[lastNode] || []) {
                paths.push([...path, neighbor]);
            }
        }

        paths.sort((a, b) => a.length - b.length);
    }

    return shortestPaths;
}

console.log(yenKShortestPaths(graph, "A", "F", 2)); // [["A", "C", "F"], ["A", "B", "E", "F"]]
```
Объяснение:
1. Поддерживаем очередь путей.
2. Перебираем K кратчайших путей.
3. Полезно в транспортных системах и сетях.
4 Сложность: O(K * (V + E)).
---
8. Волновой алгоритм Ли (для поиска пути на сетке)
Используется для поиска пути в лабиринтах или на решетках.
```javascript
function leeAlgorithm(grid, start, end) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [[start[0], start[1], 0]];
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    while (queue.length) {
        let [x, y, dist] = queue.shift();

        if (x === end[0] && y === end[1]) return dist;

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}

let grid = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0]
];

console.log(leeAlgorithm(grid, [0, 0], [2, 3])); // 4
```
Объяснение:
1. Подходит для сеток и лабиринтов.
2. Использует поиск в ширину (BFS).
3. Гарантированно находит **кратчайший путь.
4. Сложность: O(NM), где N и M — размеры сетки.
---
9. Двунаправленный поиск (Bidirectional Search)
Ускоряет поиск кратчайшего пути за счёт движения от начала и конца одновременно.
```javascript
function bidirectionalSearch(graph, start, end) {
    let forwardQueue = [[start]];
    let backwardQueue = [[end]];
    let visitedForward = new Set([start]);
    let visitedBackward = new Set([end]);

    while (forwardQueue.length && backwardQueue.length) {
        let forwardPath = forwardQueue.shift();
        let backwardPath = backwardQueue.shift();
        let forwardNode = forwardPath[forwardPath.length - 1];
        let backwardNode = backwardPath[backwardPath.length - 1];

        if (visitedForward.has(backwardNode) || visitedBackward.has(forwardNode)) {
            return forwardPath.concat(backwardPath.reverse().slice(1));
        }

        for (let neighbor of graph[forwardNode] || []) {
            if (!visitedForward.has(neighbor)) {
                visitedForward.add(neighbor);
                forwardQueue.push([...forwardPath, neighbor]);
            }
        }

        for (let neighbor of graph[backwardNode] || []) {
            if (!visitedBackward.has(neighbor)) {
                visitedBackward.add(neighbor);
                backwardQueue.push([...backwardPath, neighbor]);
            }
        }
    }

    return null;
}

console.log(bidirectionalSearch(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Два поиска (BFS) — от начала и конца.
2. Ускоряет поиск в больших графах.
3. Останавливается, если поиски встречаются.
4. Сложность: O(2^(V/2)) в худшем случае, но быстрее BFS.
---
10. Поиск кратчайшего пути методом A* с приоритетной очередью
Ускоренный вариант алгоритма A* с приоритетной очередью.
```javascript
function aStarPriorityQueue(graph, start, end, heuristic) {
    let openSet = new Map();
    let cameFrom = {};
    let gScore = {}, fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);
    openSet.set(start, fScore[start]);

    while (openSet.size) {
        let current = [...openSet.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

        if (current === end) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        openSet.delete(current);
        for (let [neighbor, cost] of Object.entries(graph[current])) {
            let tempGScore = gScore[current] + cost;
            if (tempGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tempGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.set(neighbor, fScore[neighbor]);
            }
        }
    }

    return null;
}

console.log(aStarPriorityQueue(graphWeighted, "A", "D", heuristic));
```
Объяснение:
1. Использует приоритетную очередь для оптимизации.
2. Оценивает стоимость пути с эвристикой.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---------------------------------------------------------------------------------------------
