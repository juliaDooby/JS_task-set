
📌 
---------------------
⋙ ❍ Объекты:
---
1. Проверка, является ли объект пустым
⌛ Задача: Напишите функцию, которая проверяет, является ли объект пустым (не содержит собственных свойств).
Пример:
```javascript
isEmpty({}); // true
isEmpty({ name: 'Alex' }); // false
```
🎯 Решение:
```javascript
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
```
Объяснение:
- `Object.keys(obj)` возвращает массив всех собственных ключей объекта.
- Если массив пустой (`.length === 0`), значит, объект не содержит свойств.
Сложность: O(n), где `n` — количество свойств в объекте.
---
2. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта, где значения второго объекта перекрывают значения первого при совпадении ключей.
Пример:
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
mergeObjects(obj1, obj2); // { a: 1, b: 3, c: 4 }
```
🎯 Решение:
```javascript
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
```
Объяснение:
- Оператор расширения `{ ...obj1, ...obj2 }` копирует все свойства из `obj1`, затем добавляет свойства из `obj2`, перезаписывая совпадающие ключи.
Сложность: O(n + m), где `n` и `m` — количество свойств в объектах.
---
3. Перебор всех ключей и значений объекта
⌛ Задача: Напишите функцию, которая выводит в консоль все ключи и значения объекта.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
logObject(obj);
// Вывод:
// name: Alex
// age: 30
```
🎯 Решение:
```javascript
const logObject = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};
```
Объяснение:
- `Object.entries(obj)` возвращает массив пар `[ключ, значение]`, который мы обходим с помощью `for...of`.
Сложность: O(n), где `n` — количество свойств в объекте.
---
4. Глубокое сравнение двух объектов
⌛ Задача: Напишите функцию, которая проверяет, равны ли два объекта, включая вложенные объекты.
Пример:
```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
deepEqual(obj1, obj2); // true
```
🎯 Решение:
```javascript
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
};
```
Объяснение:
- Функция рекурсивно сравнивает все свойства объектов.
- Если объект содержит вложенные объекты, вызываем `deepEqual()` снова.
Сложность: O(n), где `n` — количество свойств, включая вложенные.
---
5. Подсчёт количества вхождений значений в объекте
⌛ Задача: Напишите функцию, которая считает, сколько раз встречаются определённые значения в объекте.
Пример:
```javascript
const obj = { a: 'apple', b: 'banana', c: 'apple' };
countOccurrences(obj); // { apple: 2, banana: 1 }
```
🎯 Решение:
```javascript
const countOccurrences = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
```
Объяснение:
- `Object.values(obj)` возвращает массив всех значений объекта.
- `reduce()` проходит по массиву и подсчитывает, сколько раз встречается каждое значение.
Сложность: O(n), где `n` — количество свойств в объекте.
---
6. Фильтрация объекта по предикату
⌛ Задача: Напишите функцию, которая удаляет из объекта свойства, не соответствующие заданному условию.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 3 };
filterObject(obj, value => value > 1); // { b: 2, c: 3 }
```
🎯 Решение:
```javascript
const filterObject = (obj, predicate) => {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
};
```
Объяснение:
- `Object.entries(obj)` создаёт массив пар `[ключ, значение]`.
- `filter()` оставляет только те пары, которые удовлетворяют предикату.
- `Object.fromEntries()` собирает объект обратно.
Сложность: O(n), где `n` — количество свойств в объекте.
---
7. Преобразование объекта в массив
⌛ Задача: Напишите функцию, которая преобразует объект в массив вида `{ key: 'ключ', value: 'значение' }`.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
objectToArray(obj);
// [{ key: 'name', value: 'Alex' }, { key: 'age', value: 30 }]
```
🎯 Решение:
```javascript
const objectToArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};
```
Объяснение:
- `Object.entries(obj)` создаёт массив пар `[ключ, значение]`.
- `map()` преобразует каждую пару в объект `{ key, value }`.
Сложность: O(n), где `n` — количество свойств в объекте.
Вывод
Эти задачи часто встречаются в реальных проектах и на собеседованиях. Важно уметь:
- Перебирать объекты (`Object.keys()`, `Object.values()`, `Object.entries()`).
- Манипулировать свойствами (`delete`, `spread-оператор` и `Object.assign()`).
- Работать с вложенными структурами (глубокое сравнение и копирование).
---
1. Глубокое копирование объекта
⌛ Задача: Напишите функцию, которая создаёт глубокую копию объекта.
Пример:
```javascript
const obj = { a: 1, b: { c: 2 } };
const copy = deepClone(obj);
copy.b.c = 42;
console.log(obj.b.c); // 2 (исходный объект не изменился)
```
🎯 Решение:
```javascript
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
```
Объяснение:
- `JSON.stringify(obj)` превращает объект в строку.
- `JSON.parse()` создаёт новый объект из строки.
- Недостаток: теряются функции и `undefined`.
Альтернативный метод (рекурсия, работает с функциями):
```javascript
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
---
2. Подсчёт количества уникальных значений в объекте
⌛ Задача: Напишите функцию, которая подсчитывает, сколько раз встречается каждое значение в объекте.
Пример:
```javascript
const obj = { a: 'apple', b: 'banana', c: 'apple', d: 'banana', e: 'cherry' };
countValues(obj); // { apple: 2, banana: 2, cherry: 1 }
```
🎯 Решение:
```javascript
const countValues = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
```
Сложность: O(n).
---
3. Инвертировать ключи и значения в объекте
⌛ Задача: Напишите функцию, которая меняет местами ключи и значения в объекте.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 3 };
invertObject(obj); // { "1": "a", "2": "b", "3": "c" }
```
🎯 Решение:
```javascript
const invertObject = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
};
```
Сложность: O(n).
---
4. Найти ключ по значению
⌛ Задача: Напишите функцию, которая находит ключ по значению.
Пример:
```javascript
const obj = { name: 'Alex', age: 30 };
findKeyByValue(obj, 30); // 'age'
```
🎯 Решение:
```javascript
const findKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key] === value) || null;
};
```
Сложность: O(n).
---
5. Группировка массива объектов по значению ключа
⌛ Задача: Напишите функцию, которая группирует массив объектов по значению ключа.
Пример:
```javascript
const people = [
  { name: 'Alex', city: 'Moscow' },
  { name: 'Ivan', city: 'Moscow' },
  { name: 'Joe', city: 'New York' },
];
groupBy(people, 'city');
```
Выход:
```javascript
{
  'Moscow': [ { name: 'Alex', city: 'Moscow' }, { name: 'Ivan', city: 'Moscow' } ],
  'New York': [ { name: 'Joe', city: 'New York' } ]
}
```
🎯 Решение:
```javascript
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = acc[item[key]] || [];
    acc[item[key]].push(item);
    return acc;
  }, {});
};
```
Сложность: O(n).
---
6. Проверить, есть ли в объекте дубликаты значений
⌛ Задача: Напишите функцию, которая проверяет, есть ли в объекте повторяющиеся значения.
Пример:
```javascript
const obj = { a: 1, b: 2, c: 1 };
hasDuplicates(obj); // true
```
🎯 Решение:
```javascript
const hasDuplicates = (obj) => {
  const values = Object.values(obj);
  return new Set(values).size !== values.length;
};
```
Сложность: O(n).
---
7. Найти максимальное значение в объекте
⌛ Задача: Напишите функцию, которая находит максимальное значение в объекте.
Пример:
```javascript
const obj = { a: 10, b: 20, c: 5 };
findMaxValue(obj); // 20
```
🎯 Решение:
```javascript
const findMaxValue = (obj) => {
  return Math.max(...Object.values(obj));
};
```
Сложность: O(n).
---
8. Фильтрация вложенного объекта
⌛ Задача: Напишите функцию, которая удаляет из объекта все `null` и `undefined` значения, включая вложенные объекты.
Пример:
```javascript
const obj = { a: 1, b: null, c: { d: 2, e: undefined } };
cleanObject(obj);
```
Выход:
```javascript
{ a: 1, c: { d: 2 } }
```
🎯 Решение:
```javascript
const cleanObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;

  return Object.entries(obj)
    .filter(([_, value]) => value !== null && value !== undefined)
    .reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'object' ? cleanObject(value) : value;
      return acc;
    }, {});
};
```
Сложность: O(n), где `n` — количество вложенных свойств.
Вывод
Эти задачи охватывают ключевые концепции работы с объектами в JavaScript:
✅ Перебор (`Object.keys()`, `Object.values()`, `Object.entries()`).
✅ Глубокое копирование и сравнение.
✅ Фильтрация и группировка данных.
✅ Поиск и манипуляция значениями.
