---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
1. Отправка данных на сервер с помощью POST
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
