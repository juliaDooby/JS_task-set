---------------------------------------------------------------------------------------------  
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
Давайте рассмотрим, как отправлять HTTP-запросы на сервер с помощью двух популярных методов в JavaScript: `XMLHttpRequest` и `fetch`.
1. Использование `XMLHttpRequest`
`XMLHttpRequest` — это старый API для выполнения HTTP-запросов. Несмотря на то, что он всё ещё используется, рекомендуется использовать более современные решения, такие как `fetch`.
Пример с использованием `XMLHttpRequest`
⌛ Задача: Напишите запрос GET на сервер с использованием `XMLHttpRequest`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  const xhr = new XMLHttpRequest();  // Создание объекта XMLHttpRequest

  // Устанавливаем метод и URL
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  // Устанавливаем обработчик для события "load"
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Ответ от сервера:', JSON.parse(xhr.responseText));
    } else {
      console.error('Ошибка: ', xhr.status, xhr.statusText);
    }
  };

  // Устанавливаем обработчик для события ошибки
  xhr.onerror = function() {
    console.error('Произошла ошибка при отправке запроса');
  };

  // Отправляем запрос
  xhr.send();
}

getData();
```
Объяснение:
- `xhr.open(method, url, async)` — указывает метод (GET, POST и т.д.), URL и флаг асинхронности.
- `xhr.onload` — срабатывает, когда запрос успешно выполнен.
- `xhr.onerror` — срабатывает в случае ошибки.
- `xhr.send()` — отправляет запрос на сервер.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
2. Использование `fetch`
`fetch` — это современный API для выполнения HTTP-запросов. Он предоставляет более удобный интерфейс и возвращает промис, что делает его гораздо более удобным для работы с асинхронным кодом.
Пример с использованием `fetch`
⌛ Задача: Напишите запрос GET на сервер с использованием `fetch`, который получает данные с URL и выводит ответ в консоль.
🎯 Решение:
```javascript
function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Сетевой ответ не ок');
      }
      return response.json();  // Преобразуем тело ответа в JSON
    })
    .then(data => {
      console.log('Ответ от сервера:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

getData();
```
Объяснение:
- `fetch(url)` — отправляет запрос GET по указанному URL.
- `.then(response => response.json())` — преобразует ответ в формат JSON.
- `.catch(error => {...})` — обрабатывает любые ошибки, включая ошибки сети и ошибок обработки данных.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
3. ⌛ Задача: Отправка данных на сервер (POST-запрос)
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
