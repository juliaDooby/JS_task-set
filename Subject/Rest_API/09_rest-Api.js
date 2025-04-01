---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
9. Использование `PATCH` для частичных обновлений
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
