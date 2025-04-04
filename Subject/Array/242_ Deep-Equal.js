---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
Deep Equal (глубокое сравнение) — это процесс сравнения двух объектов или структур данных для проверки, являются ли они структурно идентичными. В отличие от поверхностного сравнения (`===`), которое сравнивает только ссылки для объектов, глубокое сравнение рекурсивно проверяет каждое свойство объектов или элементов массивов.
⌛ Задача: Сравнить два объекта (или массивы) и определить, являются ли они полностью идентичными, включая вложенные свойства.
---
🎯 Решение 1: Реализация с использованием рекурсии
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если обе ссылки указывают на одно и то же, объекты равны
  if (obj1 === obj2) return true;

  // Если один из них null или не является объектом, они не равны
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Получаем массивы ключей обоих объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Если количество ключей не совпадает, объекты не равны
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проверяем каждое свойство
  for (let key of keys1) {
    // Рекурсивно сравниваем значения свойств
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Bob', details: { age: 25, city: 'NY' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Объяснение:
1. Сравнение ссылок:
   Если обе переменные указывают на одну и ту же ссылку (`===`), возвращаем `true`.
2. Проверка типов:
   Если один из объектов `null` или не является объектом, они не равны.
3. Ключи объектов:
   Сравниваем массивы ключей объектов. Если количество ключей отличается, объекты не равны.
4. Рекурсия:
   Рекурсивно вызываем функцию для каждого свойства объекта.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
🎯 Решение 2: Сравнение массивов и объектов
Этот подход поддерживает сравнение как массивов, так и объектов.
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если объекты идентичны
  if (obj1 === obj2) return true;

  // Если это массивы
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((value, index) => deepEqual(value, obj2[index]));
  }

  // Если это не объекты или null
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Если это объекты
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// Пример использования:
const arr1 = [1, { a: 1 }, [2, 3]];
const arr2 = [1, { a: 1 }, [2, 3]];
const arr3 = [1, { a: 2 }, [2, 3]];

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(arr1, arr3)); // false
```
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
🎯 Решение 3: С использованием `JSON.stringify`
Иногда, если объекты не содержат функций или циклических ссылок, можно использовать преобразование в JSON для сравнения.
Код:
```javascript
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Alice', details: { age: 25, city: 'LA' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Недостатки:
- `JSON.stringify` не поддерживает циклические ссылки.
- Сравнение чувствительно к порядку ключей в объектах.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
🎯 Решение 4: Обработка циклических ссылок
Если объекты содержат циклические ссылки (ссылаются сами на себя), необходимо обработать их с помощью, например, `WeakMap`.
Код:
```javascript
function deepEqual(obj1, obj2, visited = new WeakMap()) {
  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Обработка циклических ссылок
  if (visited.has(obj1)) return visited.get(obj1) === obj2;

  visited.set(obj1, obj2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key], visited)) {
      return false;
    }
  }

  return true;
}

// Пример использования:
const objA = { name: 'Alice' };
objA.self = objA;

const objB = { name: 'Alice' };
objB.self = objB;

console.log(deepEqual(objA, objB)); // true
```
Резюме
| Метод                      | Особенности                                                                                      | Сложность       |
|----------------------------|--------------------------------------------------------------------------------------------------|-----------------|
| Рекурсия               | Работает с объектами, массивами, вложенными структурами. Не поддерживает циклические ссылки.    | O(n)        |
| JSON.stringify         | Простое решение, но не подходит для циклических ссылок. Чувствительно к порядку ключей.         | O(n)        |
| С мемоизацией (`WeakMap`) | Поддерживает циклические ссылки. Работает с любыми объектами и структурами.                     | O(n)       |
Для большинства задач, особенно без циклических ссылок, достаточно рекурсивного подхода. Для сложных случаев с циклическими ссылками лучше использовать вариант с `WeakMap`.
---------------------------------------------------------------------------------------------  
