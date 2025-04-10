---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
1. Интеграция с REST API (GET-запрос)
⌛ Задача: Напишите код для выполнения GET-запроса на внешний REST API и вывода данных в консоль.
🎯 Решение:
```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));
}

fetchData();
```
Объяснение: Используется `fetch` для выполнения GET-запроса. Ответ преобразуется в JSON с помощью `.json()`, и затем выводится в консоль.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
2. Интеграция с REST API (POST-запрос)
⌛ Задача: Напишите код для отправки данных с помощью POST-запроса на внешний API.
🎯 Решение:
```javascript
function sendData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
}

sendData();
```
Объяснение: Мы отправляем JSON-данные в теле запроса с помощью метода `POST`. Заголовок `Content-Type` сообщает серверу, что данные отправляются в формате JSON.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
3. Интеграция с Google Maps API
⌛ Задача: Интегрируйте Google Maps API для отображения карты на странице.
🎯 Решение:
1. Вставьте следующий код в HTML для подключения Google Maps API:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```
2. Реализуйте код для инициализации карты:
```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
```
Объяснение: Мы подключаем Google Maps API с помощью тега `<script>`, инициализируем карту в функции `initMap()`.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
4. Интеграция с Firebase (аутентификация)
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
5. Интеграция с Stripe (платежи)
⌛ Задача: Реализуйте кнопку для оплаты через Stripe.
🎯 Решение:
1. Установите Stripe SDK:
```bash
npm install @stripe/stripe-js
```
2. Используйте `Stripe.js` для создания платежной формы:
```javascript
import { loadStripe } from '@stripe/stripe-js';

let stripe;
let elements;

async function initializeStripe() {
  stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
  elements = stripe.elements();
  const cardElement = elements.create('card');
  cardElement.mount('#card-element');
}

async function handlePayment() {
  const { token, error } = await stripe.createToken(elements.getElement('card'));
  if (error) {
    console.error('Payment error:', error);
  } else {
    console.log('Payment token:', token);
  }
}
```
Объяснение: Мы используем Stripe для создания элемента карты и обработки платежа. Полученный токен можно отправить на сервер для завершения транзакции.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
6. Интеграция с Twilio (отправка SMS)
⌛ Задача: Используйте Twilio API для отправки SMS.
🎯 Решение:
1. Установите Twilio SDK:
```bash
npm install twilio
```
2. Реализуйте код для отправки SMS:
```javascript
const twilio = require('twilio');

const client = new twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

function sendSMS(to, body) {
  client.messages.create({
    body: body,
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    to: to
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
}

sendSMS('+1234567890', 'Hello, this is a test message!');
```
Объяснение: Используем Twilio для отправки SMS через API. Для работы необходимо иметь аккаунт в Twilio и ключи доступа.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
7. Интеграция с OpenWeather API (получение погоды)
⌛ Задача: Напишите код для получения информации о погоде через OpenWeather API.
🎯 Решение:
```javascript
function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

getWeather('London');
```
Объяснение: Мы используем OpenWeather API для получения данных о погоде для указанного города. Замените `YOUR_API_KEY` на ваш ключ API.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
8. Интеграция с GraphQL API
⌛ Задача: Напишите запрос к GraphQL API.
🎯 Решение:
```javascript
const query = `
  query {
    posts {
      title
      body
    }
  }
`;

fetch('https://graphql.example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: query })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы выполняем запрос GraphQL с помощью `fetch`, отправляя строку запроса в теле POST-запроса.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
9. Интеграция с Redux для состояния приложения
⌛ Задача: Настройте Redux для хранения состояния и взаимодействия с компонентами React.
🎯 Решение:
1. Установите Redux и React-Redux:
```bash
npm install redux react-redux
```
2. Реализуйте хранилище и компонент:
```javascript
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
Объяснение: Мы создаём Redux store с простым редьюсером, который управляет состоянием счётчика, и используем React-Redux для подключения состояния к компонентам.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
10. Интеграция с OAuth 2.0
⌛ Задача: Реализуйте аутентификацию через Google OAuth 2.0.
🎯 Решение:
1. Настройте OAuth 2.0 в консоли разработчика Google.
2. Используйте клиентскую библиотеку Google для аутентификации.
```html
<script src="https://apis.google.com/js/platform.js" async defer></script>

<button id="google-sign-in">Sign in with Google</button>

<script>
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
  }

  gapi.load('auth2', function() {
    gapi.auth2.init().then(function () {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.attachClickHandler('google-sign-in', {}, onSignIn);
    });
  });
</script>
```
Объяснение: В этом примере используется Google OAuth 2.0 для аутентификации через Google. После успешного входа пользовательские данные выводятся в консоль.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
11. Интеграция с AWS S3 для загрузки файлов
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
12. Интеграция с MongoDB (с помощью Mongoose)
⌛ Задача: Настройте MongoDB и Mongoose для взаимодействия с базой данных.
🎯 Решение:
```bash
npm install mongoose
```

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const user = new User({ name: 'John', age: 30 });
user.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error:', err));
```
Объяснение: Мы подключаем Mongoose к базе данных MongoDB и создаём модель для работы с коллекцией пользователей.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
13. Интеграция с Firebase Realtime Database
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
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
14. Интеграция с Socket.io для WebSocket-соединений
⌛ Задача: Реализуйте простое соединение WebSocket с сервером через Socket.io.
🎯 Решение:
```bash
npm install socket.io-client
```

```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.emit('sendMessage', 'Hello, Server!');
```
Объяснение: Мы используем `socket.io-client` для установления WebSocket-соединения и обмена сообщениями между клиентом и сервером.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
15. Интеграция с Contentful для управления контентом
⌛ Задача: Используйте Contentful API для получения данных контента.
🎯 Решение:
```javascript
const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

client.getEntries()
  .then(entries => console.log(entries.items))
  .catch(err => console.log(err));
```
Объяснение: Мы используем Contentful API для получения данных контента из CMS.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
16. Интеграция с Algolia для поиска
⌛ Задача: Настройте поисковую систему с помощью Algolia.
🎯 Решение:
```bash
npm install algoliasearch
```

```javascript
import algoliasearch from 'algoliasearch';

const client = algoliasearch('YOUR_APPLICATION_ID', 'YOUR_SEARCH_ONLY_API_KEY');
const index = client.initIndex('your_index_name');

index.search('query')
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch(err => console.log(err));
```
Объяснение: Используем Algolia для выполнения поиска по индексу.
---------------------------------------------------------------------------------------------  
---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
17. Интеграция с HubSpot (CRM)
⌛ Задача: Интегрируйте HubSpot API для получения контактов.
🎯 Решение:
```javascript
const apiUrl = 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all';
const apiKey = 'YOUR_API_KEY';

fetch(`${apiUrl}?hapikey=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
Объяснение: Мы используем HubSpot API для получения списка контактов из CRM.
---------------------------------------------------------------------------------------------  
