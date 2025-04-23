---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
3. Интеграция с Firebase (аутентификация)
⌛ Задача: Реализуйте аутентификацию пользователя с помощью Firebase.
🎯 Решение:
1. Установите Firebase SDK:
```bash
npm install firebase
```
2. Реализуйте аутентификацию с использованием email и пароля:
```javascript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User signed in:', userCredential.user);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}
```
Объяснение: Мы интегрируем Firebase, инициализируем его с помощью конфигурации и используем метод `signInWithEmailAndPassword` для аутентификации пользователя.
---------------------------------------------------------------------------------------------  
