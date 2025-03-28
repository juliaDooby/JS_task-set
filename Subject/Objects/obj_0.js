Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Объекты:
---
1. Клонирование объекта
⌛ Задача: Напишите функцию для клонирования объекта. Убедитесь, что вложенные объекты также клонируются.
🎯 Решение
```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // { a: 1, b: { c: 2 } }
```
Объяснение:
- Используем `JSON.stringify` для преобразования объекта в строку и `JSON.parse` для создания нового объекта.
- Это метод работает только для объектов, которые не содержат функций или циклических ссылок.
---
2. Проверка, является ли объект пустым
⌛ Задача: Напишите функцию для проверки, является ли объект пустым.
🎯 Решение:
```javascript
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
```
Объяснение:
- Метод `Object.keys()` возвращает массив ключей объекта. Если его длина равна 0, объект пуст.
---
3. Объединение двух объектов
⌛ Задача: Напишите функцию, которая объединяет два объекта.
🎯 Решение:
```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread (`...`) для объединения двух объектов. Если ключи совпадают, значение из второго объекта перезапишет значение из первого.
---
4. Глубокое сравнение объектов
⌛ Задача: Напишите функцию для глубокого сравнения двух объектов.
🎯 Решение:
```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1 }, { b: 1 })); // false
```
Объяснение:
- Используется рекурсивный метод для глубокого сравнения всех свойств объектов.
---
5. Копирование свойств одного объекта в другой
⌛ Задача: Напишите функцию для копирования всех свойств одного объекта в другой.
🎯 Решение:
```javascript
function copyProperties(target, source) {
  Object.assign(target, source);
}

const target = {};
const source = { a: 1, b: 2 };
copyProperties(target, source);
console.log(target); // { a: 1, b: 2 }
```
Объяснение:
- Используем `Object.assign()` для копирования всех свойств из одного объекта в другой.
---
6. Получение списка значений объекта
⌛ Задача: Напишите функцию, которая возвращает все значения объекта в виде массива.
🎯 Решение:
```javascript
function getValues(obj) {
  return Object.values(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(getValues(obj)); // [1, 2, 3]
```
Объяснение:
- `Object.values()` возвращает массив всех значений объекта.
---
7. Проверка, содержит ли объект ключ
⌛ Задача: Напишите функцию для проверки, существует ли ключ в объекте.
🎯 Решение:
```javascript
function hasKey(obj, key) {
  return key in obj;
}

const obj = { a: 1, b: 2 };
console.log(hasKey(obj, 'a')); // true
console.log(hasKey(obj, 'c')); // false
```
Объяснение:
- Используем оператор `in` для проверки наличия ключа в объекте.
---
8. Удаление ключа из объекта
⌛ Задача: Напишите функцию для удаления ключа из объекта.
🎯 Решение:
```javascript
function deleteKey(obj, key) {
  delete obj[key];
}

const obj = { a: 1, b: 2 };
deleteKey(obj, 'a');
console.log(obj); // { b: 2 }
```
Объяснение:
- Используем оператор `delete` для удаления свойства из объекта.
---
9. Создание объекта с дефолтными значениями
⌛ Задача: Напишите функцию, которая создаёт объект с дефолтными значениями для заданных ключей.
🎯 Решение:
```javascript
function createObjectWithDefaults(keys, defaultValue) {
  return keys.reduce((obj, key) => {
    obj[key] = defaultValue;
    return obj;
  }, {});
}

console.log(createObjectWithDefaults(['a', 'b', 'c'], 0)); // { a: 0, b: 0, c: 0 }
```
Объяснение:
- Используем метод `reduce` для создания объекта с заданными ключами и значением по умолчанию.
---
10. Объединение объектов с приоритетом последнего
⌛ Задача: Напишите функцию для объединения двух объектов, где свойства из второго объекта перезаписывают свойства из первого.
🎯 Решение:
```javascript
function mergeWithPriority(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeWithPriority(obj1, obj2)); // { a: 1, b: 3, c: 4 }
```
Объяснение:
- Используем оператор spread для объединения объектов, при этом значения из второго объекта перезаписывают значения первого.
---
11. Преобразование объекта в массив с парами [ключ, значение]
⌛ Задача: Напишите функцию для преобразования объекта в массив пар ключ-значение.
🎯 Решение:
```javascript
function objectToArray(obj) {
  return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]
```
Объяснение:
- `Object.entries()` возвращает массив с парами `[ключ, значение]`.
---
12. Изменение значения свойства в объекте по ключу
⌛ Задача: Напишите функцию, которая изменяет значение свойства объекта по ключу.
🎯 Решение:
```javascript
function updateValue(obj, key, value) {
  obj[key] = value;
}

const obj = { a: 1, b: 2 };
updateValue(obj, 'a', 10);
console.log(obj); // { a: 10, b: 2 }
```
Объяснение:
- Просто обновляем значение свойства по ключу.
---
13. Сравнение двух объектов
⌛ Задача: Напишите функцию для сравнения двух объектов на равенство.
🎯 Решение:
```javascript
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(objectsEqual(obj1, obj2)); // true
```
Объяснение:
- Сравниваем объекты, преобразуя их в строки с помощью `JSON.stringify()`.
---
14. Сортировка ключей объекта
⌛ Задача: Напишите функцию для сортировки ключей объекта.
🎯 Решение:
```javascript
function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  sortedKeys.forEach(key => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

const obj = { b: 2, a: 1, c: 3 };
console.log(sortObjectKeys(obj)); // { a: 1, b: 2, c: 3 }
```
Объяснение:
- Используем `Object.keys()` для получения ключей и сортируем их.
- Создаём новый объект с отсортированными ключами.
---
15. Получение всех значений определённого типа из объекта
⌛ Задача: Напишите функцию для получения всех значений объекта, которые имеют определённый тип.
🎯 Решение:
```javascript
function getValuesByType(obj, type) {
  return Object.values(obj).filter(value => typeof value === type);
}

const obj = { a: 1, b: 'hello', c: true, d: 42 };
console.log(getValuesByType(obj, 'number')); // [1, 42]
```
Объяснение:
- Используем `Object.values()` для получения всех значений и `filter()` для фильтрации по типу.
---
16. Создание нового объекта с изменёнными значениями
⌛ Задача: Напишите функцию для создания нового объекта, в котором все значения изменены.
🎯 Решение:
```javascript
function transformValues(obj, transformFunc) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, transformFunc(value)])
  );
}

const obj = { a: 1, b: 2, c: 3 };
const result = transformValues(obj, value => value * 2);
console.log(result); // { a: 2, b: 4, c: 6 }
```
Объяснение:
- Мы используем `Object.entries()` для получения массива пар ключ-значение, затем применяем функцию преобразования и восстанавливаем объект с помощью **`Object.fromEntries()`**.
---
17. Извлечение ключей и значений из объекта в массив
⌛ Задача: Напишите функцию для извлечения всех ключей и значений объекта в массив.
🎯 Решение:
```javascript

function extractKeysValues(obj) {
  return Object.entries(obj).flat();
}

const obj = { a: 1, b: 2, c: 3 };
console.log(extractKeysValues(obj)); // ['a', 1, 'b', 2, 'c', 3]
```
Объяснение:
- Используем `Object.entries()` для извлечения пар ключ-значение и метод `flat()` для превращения результата в плоский массив.
