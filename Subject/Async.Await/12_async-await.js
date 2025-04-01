---------------------------------------------------------------------------------------------
⋙ ❍ async/await:
--- 
12. Обработка ошибки сети
⌛ Задача: Обработайте ошибку при использовании `fetch`.
🎯 Решение:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();
```
---------------------------------------------------------------------------------------------
