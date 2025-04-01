---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
7. Отправка данных с использованием `PUT` с заголовками
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
