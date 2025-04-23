---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
12. Интеграция с Firebase Realtime Database
⌛ Задача: Напишите код для взаимодействия с Firebase Realtime Database.
🎯 Решение:
```javascript
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeData() {
  database.ref('users/1').set({
    name: 'John',
    age: 30
  });
}

writeData();
```
Объяснение: Мы подключаем Firebase и используем его Realtime Database для записи данных.
---------------------------------------------------------------------------------------------  
