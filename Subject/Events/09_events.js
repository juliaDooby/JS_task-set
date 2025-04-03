---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
9. Использование события `submit`
⌛ Задача: Напишите обработчик для события `submit` формы, который отменяет её отправку и выводит данные на экран.
🎯 Решение:
```html
<form id="myForm">
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
  });
</script>
```
Объяснение:
- Используем `submit`* для перехвата отправки формы и `event.preventDefault()`, чтобы предотвратить её отправку. С помощью `FormData` получаем данные формы.
---------------------------------------------------------------------------------------------  
