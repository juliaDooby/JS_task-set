---------------------------------------------------------------------------------------------
37
⋙ ❍ Создайте метод у объекта String, который многократно повторяет строку (не используя метод .repeat()). ?
---
console.log("hello". customRepeat(3)); // “hellohellohello”
1
console.log("hello". customRepeat(3)); // “hellohellohello”
Вы можете создать метод `customRepeat` для объекта `String`, который будет многократно повторять строку. Вот пример, как это можно сделать:
```javascript
String.prototype.customRepeat = function(count) {
  let repeatedString = '';
  for (let i = 0; i < count; i++) {
    repeatedString += this;
  }
  return repeatedString;
};
console.log("hello".customRepeat(3)); // Выведет: "hellohellohello"
```
В этом примере мы расширяем прототип `String`, добавляя метод `customRepeat`, который принимает количество повторений и возвращает новую строку, содержащую исходную строку, повторенную заданное количество раз.
---------------------------------------------------------------------------------------------
