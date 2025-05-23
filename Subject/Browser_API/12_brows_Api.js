---------------------------------------------------------------------------------------------  
⋙ ❍ Браузер API:
---
12. Ожидание загрузки страницы с использованием события `DOMContentLoaded`
⌛ Задача: Напишите обработчик для события `DOMContentLoaded`, который сообщает, что страница загружена.
🎯 Решение:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page has been loaded');
});
```
Объяснение:
- Событие `DOMContentLoaded` срабатывает, когда DOM полностью загружен, но не обязательно загружены изображения и другие ресурсы.
---------------------------------------------------------------------------------------------
