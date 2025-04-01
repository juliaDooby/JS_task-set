---------------------------------------------------------------------------------------------  
⋙ ❍ Сортировки:
---
5. Сортировка массива с несколькими критериями
⌛ Задача: Напишите функцию, которая сортирует массив объектов по нескольким критериям.
🎯 Решение:
```javascript
function sortByMultipleFields(arr) {
  return arr.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
console.log(sortByMultipleFields(users));
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }, { name: 'Bob', age: 30 }]
```
Объяснение:
- Мы сортируем сначала по age, а если возраст одинаковый, то по имени.
---------------------------------------------------------------------------------------------  
