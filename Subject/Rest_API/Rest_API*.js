---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
1. Получение данных с REST API (GET)
⌛ Задача: Напишите код, который делает запрос к API и отображает полученные данные.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Используется `fetch()` для выполнения GET-запроса.
- В `useEffect` загружаем данные при монтировании компонента.
- Ответ обрабатывается через `.json()`, и данные сохраняются в состоянии с помощью `setData`.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
2. Отправка данных на сервер с помощью POST
⌛ Задача: Напишите код, который отправляет данные формы на сервер с использованием метода POST.
🎯 Решение:
```javascript
import { useState } from 'react';

function PostData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Мы создаём форму, которая отправляет POST-запрос с данными через `fetch`.
- В запросе указываем заголовок `Content-Type: application/json`, чтобы сервер знал, что данные передаются в формате JSON.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
3. Обновление данных на сервере с помощью PUT
⌛ Задача: Напишите код, который обновляет данные на сервере с использованием PUT.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- Мы используем метод `PUT`, чтобы обновить данные на сервере.
- URL в запросе включает идентификатор объекта, который обновляется (например, `/1`).
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
4. Удаление данных с сервера (DELETE)
⌛ Задача: Напишите код, который удаляет объект с сервера с использованием DELETE.
🎯 Решение:
```javascript
import { useState } from 'react';

function DeleteData() {
  const [userId, setUserId] = useState('');

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('User deleted');
        } else {
          console.log('Error deleting user');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID to delete"
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}
```
Объяснение:
- Используем метод `DELETE` для удаления объекта с указанным ID.
- В ответе проверяем `response.ok`, чтобы понять, прошёл ли запрос успешно.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
5. Обработка ошибок при запросах
⌛ Задача: Напишите код для обработки ошибок, которые могут возникнуть при запросах к API.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchDataWithErrorHandling() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Если API не отвечает или URL неправильный, мы генерируем ошибку и выводим её пользователю.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
6. Отправка данных с заголовками
⌛ Задача: Отправьте POST-запрос с дополнительными заголовками (например, для аутентификации).
🎯 Решение:
```javascript
import { useState } from 'react';

function PostDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data posted:', data))
      .catch((error) => console.error('Error posting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- В `headers` добавляем заголовок `Authorization`, который может быть использован для аутентификации запросов.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
7. Отправка данных в формате FormData
⌛ Задача: Отправьте данные формы через POST-запрос с использованием `FormData`.
🎯 Решение:
```javascript
function PostFormData() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('Form data submitted:', data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData` для отправки формы в формате multipart/form-data.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
8. Отправка данных с использованием `PUT` с заголовками
⌛ Задача: Обновите данные на сервере с помощью PUT и передайте заголовки.
🎯 Решение:
```javascript
import { useState } from 'react';

function UpdateDataWithHeaders() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

 const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data updated:', data))
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
    </form>
  );
}
```
Объяснение:
- В `PUT` запросе мы передаём данные в теле и указываем заголовки для аутентификации.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
9. Получение данных с кастомными заголовками
⌛ Задача: Выполните GET-запрос с кастомными заголовками.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithHeaders() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
        'Custom-Header': 'CustomValue',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Мы добавляем кастомные заголовки в запрос для аутентификации и других нужд.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
10. Использование `PATCH` для частичных обновлений
⌛ Задача: Частично обновить данные с использованием метода PATCH.
🎯 Решение:
```javascript
import { useState } from 'react';

function PatchData() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data patched:', data))
      .catch((error) => console.error('Error patching data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Patch</button>
    </form>
  );
}
```
Объяснение:
- Метод `PATCH` используется для частичного обновления ресурса, обновляя только изменённые данные.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
11. Получение данных с пагинацией
⌛ Задача: Получить данные с пагинацией.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithPagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page <= 1}>
        Prev
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
```
Объяснение:
- Мы используем параметры запроса для пагинации (`_page`, `_limit`), чтобы запрашивать по 10 элементов за раз.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
12. Получение данных с авторизацией
⌛ Задача: Получить данные с API с авторизацией через Bearer Token.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithAuth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Заголовок `Authorization: Bearer` используется для отправки токена аутентификации.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
13. Заголовки для работы с CORS
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
14. Отправка данных с файлами (multipart/form-data)
⌛ Задача: Отправить форму с файлом на сервер.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://jsonplaceholder.typicode.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('File uploaded:', data))
      .catch((error) => console.error('Error uploading file:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
```
Объяснение:
- Используем `FormData`, чтобы отправить файл на сервер через multipart/form-data.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
15. Получение и отображение данных с кешированием
⌛ Задача: Кешировать данные для повторного использования.
🎯 Решение:
```javascript
import { useState, useEffect } from 'react';

function FetchWithCache() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('posts');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('posts', JSON.stringify(data));
          setData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```
Объяснение:
- Данные кешируются в `localStorage` для использования при следующих запросах.
---------------------------------------------------------------------------------------------  
