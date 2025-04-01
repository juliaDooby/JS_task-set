---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
12. Заголовки для работы с CORS
⌛ Задача: Добавьте заголовки для работы с CORS.
🎯 Решение:
```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```
Объяснение:
- `Access-Control-Allow-Origin: *` позволяет запросам с других доменов обращаться к API.
--------------------------------------------------------------------------------------------- 
