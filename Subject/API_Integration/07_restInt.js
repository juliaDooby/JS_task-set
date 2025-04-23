---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
7. Интеграция с GraphQL API
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
