---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
6. Отправка данных в формате FormData
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
