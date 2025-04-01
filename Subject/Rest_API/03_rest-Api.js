
---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
3. Удаление данных с сервера (DELETE)
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
