---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
---
16. Комбинированный пример
⌛ Задача: Что выведет код?
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
```
🎯 Решение:
```
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
```
Объяснение: Синхронный код выполняется сначала, затем микротаски (`Promise`), потом макротаски (`setTimeout`).
---------------------------------------------------------------------------------------------  
