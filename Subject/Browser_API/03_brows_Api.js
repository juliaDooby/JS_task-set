---------------------------------------------------------------------------------------------  
⋙ ❍ Браузер API:
---
3. Уведомление пользователя
⌛ Задача: Напишите код, который отправляет уведомление пользователю.
🎯 Решение:
```javascript
if (Notification.permission === 'granted') {
  new Notification('Hello, world!');
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello, world!');
    }
  });
}
```
Объяснение:
- Используем `Notification` для создания уведомлений.
- Сначала проверяем разрешение пользователя. Если оно не отклонено, запрашиваем разрешение через `Notification.requestPermission()`.
---------------------------------------------------------------------------------------------
