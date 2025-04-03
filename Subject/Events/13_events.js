---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
13. Отслеживание состояния кнопки (нажатие и отпускание)
⌛ Задача: Напишите обработчики для событий `mousedown` и `mouseup`, которые изменяют стиль кнопки.
🎯 Решение:
```html
<button id="pressButton">Press me</button>

<script>
  const button = document.getElementById('pressButton');

  button.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'lightgreen';
  });

  button.addEventListener('mouseup', function() {
    this.style.backgroundColor = '';
  });
</script>
```
Объяснение:
- `mousedown` срабатывает, когда кнопка мыши нажата, и `mouseup` — когда отпущена.
---------------------------------------------------------------------------------------------  
