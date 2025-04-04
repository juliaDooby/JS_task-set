---------------------------------------------------------------------------------------------
⋙ ❍ Современные стандарты JavaScript (ES6+):
---
14. `Object.entries` и `Object.fromEntries`
Методы `Object.entries` и `Object.fromEntries` позволяют работать с парами ключ-значение объектов.
```javascript
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2]]

const newObj = Object.fromEntries(entries);
console.log(newObj); // { a: 1, b: 2 }
```
---------------------------------------------------------------------------------------------
