---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
---
10. `queueMicrotask`
⌛ Задача: Что выведет код?
```javascript
setTimeout(() => console.log("Timeout"), 0);
queueMicrotask(() => console.log("Microtask"));
console.log("Sync code");
```
🎯 Решение:
```
Sync code
Microtask
Timeout
```
Объяснение: `queueMicrotask` добавляет задачу в очередь микротасок.
---------------------------------------------------------------------------------------------
