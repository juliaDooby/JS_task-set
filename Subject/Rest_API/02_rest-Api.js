---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
2. Обновление данных на сервере с помощью PUT
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
