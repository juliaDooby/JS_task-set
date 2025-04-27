---------------------------------------------------------------------------------------------  
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
2. ⌛ Задача: Отправка данных на сервер (POST-запрос)
🎯 Решение:
Пример с `XMLHttpRequest`
```javascript
function sendData() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
  xhr.setRequestHeader('Content-Type', 'application/json');  // Устанавливаем заголовок для отправки JSON

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка:', xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  xhr.send(JSON.stringify(data));  // Отправляем данные в формате JSON
}

sendData();
```
Объяснение:
- Мы используем метод `POST` и устанавливаем заголовок `Content-Type: application/json`, чтобы сервер знал, что мы отправляем данные в формате JSON.
- Данные отправляются с помощью `JSON.stringify()`.
Пример с `fetch`
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
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

sendData();
```
Объяснение:
- В `fetch` мы указываем объект с дополнительными параметрами (`method`, `headers`, `body`).
- Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
- `body: JSON.stringify(data)` преобразует объект в строку JSON перед отправкой.
4. Различие между `XMLHttpRequest` и `fetch`
- `XMLHttpRequest`: Более старый способ работы с HTTP-запросами. Использует события для обработки ответа. Требует более сложной работы с асинхронностью.
- `fetch`: Современный API, возвращающий промис, что упрощает работу с асинхронностью. Более гибкий и читаемый код, но не поддерживает старые браузеры (например, Internet Explorer).
Резюме:
1. `XMLHttpRequest` подходит для старого кода или проектов с совместимостью с устаревшими браузерами.
2. `fetch` является более современным и удобным способом работы с асинхронными запросами, использует промисы и проще для интеграции с современными фреймворками.
---------------------------------------------------------------------------------------------  
