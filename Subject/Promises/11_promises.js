---------------------------------------------------------------------------------------------
⋙ ❍ Работа с Promises (асинхронным кодом):
---
11. Обработка ошибок в цепочке
⌛ Задача: Где нужно разместить `catch`, чтобы обработать любую ошибку?
🎯 Решение:
```javascript
Promise.resolve(1)
  .then(() => {
    throw new Error("First error");
  })
  .then(() => {
    throw new Error("Second error");
  })
  .catch(error => console.log(error.message)); // Ловит первую ошибку
```
Результат:
```
"First error"
```
Объяснение:
1. `Promise.resolve(1)` — создаёт промис, который сразу переходит в состояние `fulfilled` с результатом `1`.
2. Первый `.then()` — выбрасывает ошибку (`throw new Error("First error")`).
   - Из-за этого `Promise` немедленно переходит в состояние `rejected`.
3. Второй `.then()` не выполняется — потому что ошибка в предыдущем `.then()` прерывает цепочку.
4. `.catch(error => console.log(error.message))`*
   - Перехватывает первую ошибку `"First error"`, так как `.catch()` ловит первое `rejected` состояние в цепочке.
   - Ошибка `"Second error"` не выбрасывается, так как до неё выполнение не доходит.
Вывод в консоли:
```
First error
```
Как обработать ошибки на каждом этапе?
Если нужно обработать ошибки на каждом `.then()`, нужно добавить `.catch()` после каждого шага:
```javascript
Promise.resolve(1)
  .then(() => {
    throw new Error("First error");
  })
  .catch(error => {
    console.log("Caught in first catch:", error.message);
  })
  .then(() => {
    throw new Error("Second error");
  })
  .catch(error => {
    console.log("Caught in second catch:", error.message);
  });
```
Вывод в консоли:
```
Caught in first catch: First error
Caught in second catch: Second error
```
Теперь каждая ошибка обрабатывается отдельно.
Вывод:
- Один `catch` в конце цепочки — ловит только первую ошибку.
- Несколько `catch` на каждом этапе — ловят ошибки на каждом `.then()` по отдельности.
---------------------------------------------------------------------------------------------
