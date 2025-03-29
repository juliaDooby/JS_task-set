---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
4. Адаптивный grid-контейнер
⌛ Задача: Создайте grid-контейнер, который на широких экранах имеет 4 колонки, а на экранах меньше 768px — 2 колонки.
Пример:
```html
<div class="grid-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
🎯 Решение:
- Используем `grid-template-columns: repeat(4, 1fr)` для 4 колонок на больших экранах.
- Для экранов меньше 768px меняем количество колонок на 2 с помощью `grid-template-columns: repeat(2, 1fr)`.
--------------------------------------------------------------------------------------------- 
