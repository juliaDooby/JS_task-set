---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
3. Остановка распространения события
⌛ Задача: Напишите код, который отменяет распространение клика по кнопке, предотвращая его от всплытия.
🎯 Решение:
```html
<div id="outerDiv" style="padding: 20px; background-color: lightblue;">
  <button id="myButton">Click me</button>
</div>

<script>
  document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Outer div clicked');
  });

  document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    alert('Button clicked');
  });
</script>
```
Объяснение:
- Используем `event.stopPropagation()` для предотвращения всплытия события от кнопки к родительскому элементу.
---------------------------------------------------------------------------------------------  
