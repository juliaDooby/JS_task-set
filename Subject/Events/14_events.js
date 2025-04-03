---------------------------------------------------------------------------------------------  
⋙ ❍ События:
---
14. Использование события `input` для отслеживания ввода текста
⌛ Задача: Напишите обработчик для события `input`, который будет выводить количество символов в текстовом поле.
🎯 Решение:
```html
<input type="text" id="myInput" placeholder="Type something...">
<p id="charCount">Characters: 0</p>

<script>
  document.getElementById('myInput').addEventListener('input', function() {
    document.getElementById('charCount').innerText = 'Characters: ' + this.value.length;
  });
</script>
```
Объяснение:
- `input` отслеживает изменения в поле ввода и обновляет количество символов.
---------------------------------------------------------------------------------------------  
