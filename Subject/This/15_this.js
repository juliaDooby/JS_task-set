---------------------------------------------------------------------------------------------
⋙ ❍ Работа с this:
---
15. this в замыкании
⌛ Задача: Как вывести `"Frontend"`?
```javascript
const obj = {
  name: "Frontend",
  showThis: function() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj.showThis();
```
🎯 Решение: Используйте стрелочную функцию:
```javascript
const inner = () => {
  console.log(this.name);
};
inner();
```
---------------------------------------------------------------------------------------------
