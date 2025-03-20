---------------------------------------------------------------------------------------------
40
⋙ ❍ Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом ?
---
console.log(isPalindrome('asdsa')) // true
1
console.log(isPalindrome('asdsa')) // true
Вы можете создать функцию `isPalindrome`, которая будет принимать строку и проверять, является ли она палиндромом. Палиндром - это строка, которая читается одинаково как с начала, так и с конца. Вот как это можно сделать:
```javascript
function isPalindrome(str) {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  const formattedStr = str.replace(/\s/g, '').toLowerCase();

  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('asdsa')); // Выведет: true
```
Эта функция сначала форматирует строку, удаляя все пробелы и приводя к нижнему регистру. Затем она сравнивает символы с обоих концов строки, чтобы определить, является ли она палиндромом. Если строка является палиндромом, функция возвращает `true`, в противном случае - `false`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
41
⋙ ❍ Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом: ?
---
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
1
2
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
Вы можете создать функцию `sum`, которая будет принимать один или два аргумента и возвращать сумму этих чисел. Вот как это можно сделать:
```javascript
function sum(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2, 3));   // Выведет: 5
console.log(sum(2)(3));   // Выведет: 5
```
Эта функция проверяет, сколько аргументов ей передано. Если передан только один аргумент, она возвращает функцию, которая ожидает второй аргумент и возвращает их сумму. Если передано два аргумента, она просто возвращает их сумму.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
42
⋙ ❍ Поменяйте местами значения целочисленных переменных, не используя временные переменные. Первый вариант – используя ES6, и второй вариант – используя ES5. ?
---
var a = 1;
var b = 2;

// b = 1;
// a = 2;
1
2
3
4
5
var a = 1;
var b = 2;

// b = 1;
// a = 2;
Используя ES6:
```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b); // Выведет: 2 1
```
Используя ES5:
```javascript
var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // Выведет: 2 1
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
43
⋙ ❍ Напишите функцию, проверяющую число на четность, используя только битовые операции ?
---
Функция, которая проверяет число на четность, используя только битовые операции:
```javascript
function isEven(number) {
  // Проверяем младший бит числа
  // Если младший бит равен 0, число четное, иначе нечетное
  return (number & 1) === 0;
}

// Пример использования функции
console.log(isEven(4)); // Выведет true, потому что 4 - четное число
console.log(isEven(7)); // Выведет false, потому что 7 - нечетное число
```
Эта функция использует побитовое И (`&`) с числом 1, чтобы проверить младший бит числа. Если младший бит равен 0, это означает, что число четное, иначе это нечетное число.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
44
⋙ ❍ Дан не сложный компонент на реакте и необходимо провести ревью (заюзать хуки useMemo / useCallback, вынести повторяющийся код в функцию или переменную и что-то там еще было) ?
---
Давайте посмотрим на ваш компонент и проведем ревью, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Давайте оптимизируем этот компонент:
1. Хранение удвоенного значения с помощью `useMemo`:
 ```javascript
 const doubleCount = useMemo(() => count * 2, [count]);
 ```
2. Оптимизация обработчиков событий с помощью `useCallback`:
 ```javascript
 const handleIncrement = useCallback(() => {
   setCount((prevCount) => prevCount + 1);
 }, []);

 const handleDecrement = useCallback(() => {
   setCount((prevCount) => prevCount - 1);
 }, []);
 ```
3. Вынос повторяющегося кода в функцию или переменную:
 ```javascript
 const increment = () => {
   setCount((prevCount) => prevCount + 1);
 };

 const decrement = () => {
   setCount((prevCount) => prevCount - 1);
 };
 ```
Вот полный код с примененными оптимизациями:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
/Давайте проведем ревью компонента, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Оптимизированный код:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
45
⋙ ❍ Задача на рекурсию ?
---
Простая задача на рекурсию: написать функцию для вычисления факториала числа.
Факториал числа \( n \) (обозначается как \( n! \)) - это произведение всех положительных целых чисел от 1 до \( n \). Например, факториал 5 (обозначается как \( 5! \)) равен \( 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Вот решение на JavaScript с использованием рекурсии:
```javascript
function factorial(n) {
  // Базовый случай: если n равно 0 или 1, вернуть 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивный случай: вычислить факториал числа n как произведение n и факториала (n - 1)
  else {
    return n * factorial(n - 1);
  }
}

// Пример использования функции
console.log(factorial(5)); // Выведет 120
```
Эта функция рекурсивно вызывает саму себя до достижения базового случая (когда \( n = 0 \) или \( n = 1 \)), а затем возвращает результат.
---------------------------------------------------------------------------------------------


