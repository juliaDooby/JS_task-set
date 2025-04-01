---------------------------------------------------------------------------------------------  
⋙ ❍ Работа с REST API (GET, POST, PUT, DELETE, работа с заголовками):
---
13. Отправка данных с файлами (multipart/form-data)
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
