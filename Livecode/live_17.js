---------------------------------------------------------------------------------------------
18
⋙ ❍ Реализуйте асинхронный метод filter для Array (должны работать await)?
---
Вот пример реализации асинхронного метода `filterAsync()` для массива, который позволяет использовать `await`:
```javascript
Array.prototype.filterAsync = async function(predicate) {
  const results = await Promise.all(this.map(async (element, index, array) => {
    const result = await predicate(element, index, array);
    return { element, result };
  }));
  return results.filter(({ result }) => result).map(({ element }) => element);
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];

async function isEven(value) {
  return value % 2 === 0;
}

(async () => {
  const filtered = await arr.filterAsync(isEven);
  console.log(filtered); // [2, 4]
})();
```
В этой реализации метод `filterAsync()` принимает асинхронный предикат (`predicate`), который возвращает промис с булевым значением. Он применяет предикат к каждому элементу массива с помощью метода `map()`, а затем собирает результаты с помощью `Promise.all()`. После этого он фильтрует результаты и возвращает массив отфильтрованных элементов, для которых предикат возвращает `true`.
---------------------------------------------------------------------------------------------
