---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
16. Событие перетаскивания (drag and drop)
⌛ Задача: Напишите код для перетаскивания элемента по экрану.
🎯 Решение:
html
Копировать
Редактировать
<div id="dragMe" draggable="true" style="width: 100px; height: 100px; background-color: lightblue; cursor: pointer;">Drag me</div>

<script>
  const element = document.getElementById('dragMe');

  element.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Dragging');
  });

  element.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  element.addEventListener('drop', function(event) {
    event.preventDefault();
    console.log('Dropped');
  });
</script>
Объяснение:
Используем события dragstart, dragover и drop для реализации перетаскивания элемента.
---------------------------------------------------------------------------------------------  
