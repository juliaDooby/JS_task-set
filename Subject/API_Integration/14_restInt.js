---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
14. Интеграция с Contentful для управления контентом
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
