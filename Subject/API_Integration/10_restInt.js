---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
10. Интеграция с AWS S3 для загрузки файлов
⌛ Задача: Напишите код для загрузки файла в S3 с использованием AWS SDK.
🎯 Решение:
```javascript
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

function uploadFile(file) {
  const params = {
    Bucket: 'your-bucket-name',
    Key: file.name,
    Body: file,
    ACL: 'public-read'
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error('Error uploading file:', err);
    } else {
      console.log('File uploaded successfully:', data.Location);
    }
  });
}

uploadFile(fileInput.files[0]); // Example of uploading file from an input field
```
Объяснение: Этот код использует AWS SDK для загрузки файла в S3. Мы передаём файл и параметры для загрузки.
---------------------------------------------------------------------------------------------  
