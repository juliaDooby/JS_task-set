---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
--- 
8. this внутри setTimeout
⌛ Задача: Как исправить код, чтобы вывести `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
setTimeout(() => {
  console.log(this.name);
}, 1000);
```
---------------------------------------------------------------------------------------------
