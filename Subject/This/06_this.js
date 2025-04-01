---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
6. Потеря контекста в обработчике событий
⌛ Задача: Как сделать так, чтобы код вывел `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    document.addEventListener("click", function() {
      console.log(this.name);
    });
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
document.addEventListener("click", () => {
  console.log(this.name);
});
```
Или `bind`:
```javascript
document.addEventListener("click", function() {
  console.log(this.name);
}.bind(obj));
```
---------------------------------------------------------------------------------------------
