---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
---
11. Чтение данных через `fetch`
⌛ Задача: Используйте `fetch` для получения данных.
🎯 Решение:
```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```
---------------------------------------------------------------------------------------------
