---------------------------------------------------------------------------------------------  
⋙ ❍ React Hooks (useState, useEffect, useMemo и других):
---
11. Отслеживание изменений формы с `useState`
⌛ Задача: Напишите компонент, который отслеживает изменения в полях формы.
Пример:
```javascript
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
```
🎯 Решение:
- Используется `useState` для отслеживания значений формы, и `handleChange` обновляет состояние при изменении любого поля.
---------------------------------------------------------------------------------------------  
