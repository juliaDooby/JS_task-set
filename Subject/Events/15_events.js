---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
15. Отслеживание фокуса в нескольких полях
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые подсвечивают поле ввода при фокусе и удаляют подсветку при потере фокуса.
🎯 Решение:
```html
<input type="text" placeholder="Name">
<input type="text" placeholder="Email">

<script>
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = 'blue';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '';
    });
  });
</script>
```
Объяснение:
- Мы используем `querySelectorAll` для выбора всех полей ввода и отслеживания фокуса и потери фокуса.
---------------------------------------------------------------------------------------------  
