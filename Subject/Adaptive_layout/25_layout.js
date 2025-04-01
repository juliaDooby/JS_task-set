---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
25. Липкий футер
⌛ Задача: Сделайте футер, который всегда находится внизу страницы.
🎯 Решение:
```html
<div class="wrapper">
  <div class="content">Контент</div>
  <footer class="footer">Футер</footer>
</div>
```

```css
html, body {
  height: 100%;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.content {
  flex: 1;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
```
Объяснение: Используется `flexbox` для создания "липкого" футера.
--------------------------------------------------------------------------------------------- 
