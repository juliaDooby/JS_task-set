---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
1. Повторная привязка обработчика события
⌛ Задача: Напишите код, который будет привязывать обработчик события на клик с изменением текста, но только один раз.
🎯 Решение:
```html
<button id="myButton">Click me</button>
<p id="text">Initial text</p>

<script>
  const button = document.getElementById('myButton');
  const text = document.getElementById('text');

  button.addEventListener('click', function handler() {
    text.innerText = 'Text changed!';
    button.removeEventListener('click', handler); // Удаляем обработчик после первого клика
  });
</script>
```
Объяснение:
- Мы используем `removeEventListener`, чтобы удалить обработчик после его выполнения один раз.
---------------------------------------------------------------------------------------------  
