---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
---
7. `setImmediate` vs `setTimeout`
⌛ Задача: Что выведет код в Node.js?
```javascript
setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);
```
🎯 Решение:
```
Timeout
Immediate
```
Объяснение: В Node.js `setTimeout` с 0 выполняется перед `setImmediate`.
---------------------------------------------------------------------------------------------
