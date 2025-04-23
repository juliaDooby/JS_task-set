---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
1. Интеграция с REST API (POST-запрос)
⌛ Задача: Напишите код для отправки данных с помощью POST-запроса на внешний API.
🎯 Решение:
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
}

sendData();
```
Объяснение: Мы отправляем JSON-данные в теле запроса с помощью метода `POST`. Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
---------------------------------------------------------------------------------------------  
