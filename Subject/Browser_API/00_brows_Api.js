---------------------------------------------------------------------------------------------  
⋙ ❍ Браузер API:
---
0. Получение геолокации пользователя
⌛ Задача: Напишите код, который получает текущее местоположение пользователя.
🎯 Решение:
```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
```
Объяснение:
- Используем `navigator.geolocation.getCurrentPosition` для получения текущего местоположения пользователя.
- Выводим координаты в консоль.
---------------------------------------------------------------------------------------------
