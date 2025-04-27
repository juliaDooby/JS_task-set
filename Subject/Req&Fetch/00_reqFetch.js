---------------------------------------------------------------------------------------------  
⋙ ❍ Как написать запрос на сервер xmlhttprequest и fetch:
---
Давайте рассмотрим, как отправлять HTTP-запросы на сервер с помощью двух популярных методов в JavaScript: `XMLHttpRequest` и `fetch`.
0. Использование `XMLHttpRequest`
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
