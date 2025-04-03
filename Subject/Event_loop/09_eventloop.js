---------------------------------------------------------------------------------------------  
⋙ ❍ Event Loop:
--- 
9. `requestAnimationFrame`
⌛ Задача: Как вписывается `requestAnimationFrame` в Event Loop?
🎯 Решение:
```javascript
requestAnimationFrame(() => console.log("AnimationFrame"));
console.log("Sync code");
```
Результат:
```
Sync code
AnimationFrame
```
Объяснение: `requestAnimationFrame` выполняется перед следующей перерисовкой экрана.
---------------------------------------------------------------------------------------------
