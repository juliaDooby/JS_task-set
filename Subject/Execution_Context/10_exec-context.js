---------------------------------------------------------------------------------------------
⋙ ❍ Контекст вызова:
---
⌛ 10. Потеря контекста в классе
```javascript
class Counter {
  count = 0;
  increment() {
    console.log(this.count++);
  }
}
const counter = new Counter();
const detached = counter.increment;
detached();
```
🎯 Решение:
Ошибка: `Cannot read properties of undefined`.
Объяснение:
При передаче метода `increment` теряется связь с объектом.
---------------------------------------------------------------------------------------------
