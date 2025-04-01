---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
14. this в наследовании
⌛ Задача: Что выведет код?
```javascript
class Parent {
  constructor() {
    this.name = "Parent";
  }
}
class Child extends Parent {
  showThis() {
    console.log(this.name);
  }
}
const child = new Child();
child.showThis();
```
🎯 Решение:
```javascript
"Parent"
```
---------------------------------------------------------------------------------------------
