---------------------------------------------------------------------------------------------
⋙ ❍ Напишите deep clone для объекта?
---
13. Вот пример реализации глубокого клонирования объекта в JavaScript:
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Возвращаем простые типы данных и null как есть
  }

  let clone;

  // Обрабатываем массивы
  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
    return clone;
  }

  // Обрабатываем объекты
  clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// Пример использования:
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'running']
};

const cloned = deepClone(original);
console.log(cloned);
```
Этот код рекурсивно обходит объект и его свойства, создавая копии каждого вложенного объекта и массива. Таким образом, функция `deepClone()` создает глубокую копию исходного объекта.
---------------------------------------------------------------------------------------------
