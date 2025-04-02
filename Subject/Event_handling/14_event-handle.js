---------------------------------------------------------------------------------------------  
⋙ ❍ Обработка событий:
---
14. Событие `onSubmit`
⌛ Задача: Обработайте отправку формы.
🎯 Решение:
```javascript
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
Объяснение: Событие `onSubmit` обрабатывает отправку формы.
--------------------------------------------------------------------------------------------- 
