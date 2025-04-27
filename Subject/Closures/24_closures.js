---------------------------------------------------------------------------------------------  
⋙ ❍ Задача на понимание замыканий\колбеков:
---
24. Замыкание для создания приватных переменных
⌛ Задача: Напишите функцию, которая инкапсулирует переменные, предоставляя доступ только через методы.
🎯 Решение:
```javascript
function createPerson(name, age) {
  return {
    getName: () => name,
    getAge: () => age,
    setName: (newName) => { name = newName; },
    setAge: (newAge) => { age = newAge; }
  };
}

const person = createPerson('Alice', 30);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
person.setName('Bob');
person.setAge(35);
console.log(person.getName()); // Bob
console.log(person.getAge()); // 35
```
Объяснение: Переменные `name` и `age` скрыты внутри замыкания, и их можно изменить только через публичные методы.
---------------------------------------------------------------------------------------------  
