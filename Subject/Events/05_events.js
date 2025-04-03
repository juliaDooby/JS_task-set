---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
5. Событие на фокус
⌛ Задача: Напишите обработчик события `focus`, который меняет цвет рамки вокруг поля ввода при его фокусе.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Focus me">

<script>
  document.getElementById('myInput').addEventListener('focus', function() {
    this.style.borderColor = 'green';
  });

  document.getElementById('myInput').addEventListener('blur', function() {
    this.style.borderColor = '';
  });
</script>
```
Объяснение:
- Используем событие `focus` для изменения стиля при получении фокуса, и `blur` для восстановления исходного состояния.
---------------------------------------------------------------------------------------------  
