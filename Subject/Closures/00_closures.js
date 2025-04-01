---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 0: Счетчик
Напишите функцию `createCounter`, которая создает счетчик. Каждый вызов метода `increment` увеличивает значение счетчика на 1, а метод `getValue` возвращает текущее значение счетчика.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
```
Объяснение:
- Переменная `count` находится в замыкании функции `createCounter`.
- Объект с методами `increment` и `getValue` имеет доступ к переменной `count`, даже после завершения выполнения `createCounter`.
---------------------------------------------------------------------------------------------
