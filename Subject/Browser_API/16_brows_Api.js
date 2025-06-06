---------------------------------------------------------------------------------------------  
⋙ ❍ Браузер API:
---
16. Использование события `beforeunload`
⌛ Задача: Напишите обработчик для события `beforeunload`, который предупреждает пользователя о возможной потере данных при закрытии страницы.
🎯 Решение:
```javascript
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave?'; // Старый стандарт для Chrome
});
```
Объяснение:
- Событие `beforeunload` позволяет вывести предупреждение пользователю перед тем, как он покинет страницу.
---------------------------------------------------------------------------------------------  

