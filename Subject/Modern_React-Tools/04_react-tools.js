---------------------------------------------------------------------------------------------  
⋙ ❍ Современные инструменты React (React Router, React Query, Next.js):
---
4. Использование Mutation с React Query
⌛ Задача: Отправка данных через POST-запрос с использованием `useMutation` из `React Query`.
🎯 Решение:
```javascript
import { useMutation } from 'react-query';

async function postData(newData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}

function AddPost() {
  const mutation = useMutation(postData);

  const handleSubmit = () => {
    mutation.mutate({ title: 'New Post', body: 'This is a new post' });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Add Post</button>
      {mutation.isLoading && <div>Adding post...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Post added!</div>}
    </div>
  );
}
```
Объяснение:
- `useMutation` позволяет выполнять операции, такие как создание, обновление или удаление данных на сервере. Мы вызываем `mutate` для отправки данных.
---------------------------------------------------------------------------------------------  
