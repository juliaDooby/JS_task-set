---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
11. Отслеживание события `focus` и `blur`
⌛ Задача: Напишите обработчики для событий `focus` и `blur`, которые изменяют стиль элемента при фокусе.
🎯 Решение:
```html
<input type="text" id="focusInput" placeholder="Focus me">

<script>
  const input = document.getElementById('focusInput');
  input.addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
  });
  input.addEventListener('blur', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- При фокусе изменяем стиль элемента, а при потере фокуса восстанавливаем его.
--------------------------------------------------------------------------------------------- 
