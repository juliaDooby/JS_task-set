---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
10. this в классе с потерей контекста
⌛ Задача: Исправьте код.
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  showThis() {
    console.log(this.name);
  }
}
const user = new User("Frontend");
const fn = user.showThis;
fn(); // Потеря контекста
```
🎯 Решение:
```javascript
const fn = user.showThis.bind(user);
fn(); // "Frontend"
```
---------------------------------------------------------------------------------------------
