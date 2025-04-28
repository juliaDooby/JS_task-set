---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: GroupBy:
---
5. 🎯 Группировка по нескольким полям
Иногда бывает полезно группировать данные по нескольким полям, например, по возрасту и полу. Для этого можно комбинировать ключи.
```javascript
function groupByMultiple(arr, keys) {
  return arr.reduce((result, obj) => {
    // Создаем ключ для каждой группы по всем переданным ключам
    const groupKey = keys.map(key => obj[key]).join('-');

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(obj);
    return result;
  }, {});
}

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 25, gender: 'male' },
  { name: 'David', age: 30, gender: 'male' },
  { name: 'Eve', age: 35, gender: 'female' }
];

const groupedByAgeAndGender = groupByMultiple(people, ['age', 'gender']);
console.log(groupedByAgeAndGender);
```
Вывод:
```javascript
{
  '25-female': [ { name: 'Alice', age: 25, gender: 'female' } ],
  '30-male': [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'David', age: 30, gender: 'male' }
  ],
  '25-male': [ { name: 'Charlie', age: 25, gender: 'male' } ],
  '35-female': [ { name: 'Eve', age: 35, gender: 'female' } ]
}
```
Объяснение:
- Мы создаём уникальный ключ для каждой группы, соединяя значения по указанным полям (в данном случае `age` и `gender`).
- Это позволяет группировать данные по нескольким атрибутам.
Резюме:
1. Использование `reduce()`: Мы можем легко группировать данные, используя метод `reduce()` для накопления результатов в объект или `Map`.
2. Использование Lodash: Если вы используете библиотеку Lodash, то можете использовать её готовую функцию `_.groupBy()`, которая сокращает код.
3. Группировка по нескольким полям: Мы можем комбинировать несколько полей в ключ для создания групп, что позволяет делать сложную группировку.
---------------------------------------------------------------------------------------------  
