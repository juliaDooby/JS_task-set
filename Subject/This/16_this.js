---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
16. this в EventListener
⌛ Задача: Как вывести `"Frontend"` при клике?
```javascript
const obj = {
  name: "Frontend",
  init: function() {
    document.body.addEventListener("click", function() {
      console.log(this.name);
    });
  }
};
obj.init();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
document.body.addEventListener("click", () => {
  console.log(this.name);
});
```
---------------------------------------------------------------------------------------------
