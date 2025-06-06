---------------------------------------------------------------------------------------------  
⋙ ❍ Сортировка массива с объектами по их полям (по алфавиту и по возрастанию):
---
Сортировка массива объектов по их полям — довольно часто встречающаяся задача.
25. Сортировка массива объектов по алфавиту
⌛ Задача: Сортировать массив объектов по строковому полю (например, по имени) в алфавитном порядке.
Пример данных:
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];
```
🎯 Решение (по алфавиту по имени):
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Сортируем по имени (алфавитный порядок)
users.sort((a, b) => {
  if (a.name < b.name) return -1; // a приходит раньше
  if (a.name > b.name) return 1;  // b приходит раньше
  return 0; // одинаковые
});

console.log(users);
// Результат: [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 }
// ]
```
Объяснение:
- Мы используем метод `sort()`, который принимает функцию сравнения. Внутри функции мы сравниваем строки `a.name` и `b.name`.
- Если `a.name` меньше `b.name`, возвращаем `-1`, что означает, что `a` должно идти раньше.
- Если наоборот, возвращаем `1`, что означает, что `b` должно идти раньше.
- Если они равны, возвращаем `0`.
---------------------------------------------------------------------------------------------  
