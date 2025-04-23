---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
2. Интеграция с Google Maps API
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
