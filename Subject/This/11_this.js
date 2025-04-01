---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
11. this внутри forEach
⌛ Задача: Что выведет код?
```javascript
const obj = {
  name: "Frontend",
  items: [1, 2, 3],
  showThis: function() {
    this.items.forEach(function(item) {
      console.log(this.name);
    });
  }
};
obj.showThis();
```
🎯 Решение:
```javascript
undefined // Потеря контекста
```
Исправление:
```javascript
this.items.forEach(item => {
  console.log(this.name);
});
```
---------------------------------------------------------------------------------------------
