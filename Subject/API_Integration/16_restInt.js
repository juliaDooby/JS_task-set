---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
16. Интеграция с HubSpot (CRM)
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
