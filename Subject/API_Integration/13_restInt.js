---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
13. Интеграция с Socket.io для WebSocket-соединений
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
