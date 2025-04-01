---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 6: Управление доступом (Приватные переменные)
Напишите функцию, которая позволяет работать с приватными переменными объекта (например, инкапсуляция).
🎯 Решение:
```javascript
function createUser(name) {
  let _name = name;

  return {
    getName: function () {
      return _name;
    },
    setName: function (newName) {
      if (newName.length > 0) {
        _name = newName;
      }
    }
  };
}

const user = createUser('Alice');
console.log(user.getName()); // Alice
user.setName('Bob');
console.log(user.getName()); // Bob
```
Объяснение:
- `_name` — приватная переменная, доступная только через методы `getName` и `setName`.
---------------------------------------------------------------------------------------------
