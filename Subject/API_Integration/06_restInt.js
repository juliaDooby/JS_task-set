---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
6. Интеграция с OpenWeather API (получение погоды)
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
