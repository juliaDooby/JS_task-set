---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
3. Центрирование блока с использованием `Flexbox`
⌛ Задача: Напишите стили, чтобы блок был всегда по центру экрана, как по горизонтали, так и по вертикали.
Пример:
```html
<div class="container">
  <div class="centered">Centered content</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered {
  padding: 20px;
  background-color: lightblue;
}
```
🎯 Решение:
- `justify-content: center` центрирует по горизонтали.
- `align-items: center` центрирует по вертикали.
- `height: 100vh` устанавливает высоту контейнера на весь экран.
---------------------------------------------------------------------------------------------  
