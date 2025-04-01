---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
4. Адаптивная сетка с использованием `Grid` и разных колонок
⌛ Задача: Создайте адаптивную сетку, где на больших экранах будет 3 колонки, на средних — 2, а на маленьких — 1.
Пример:
```html
<div class="grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```
🎯 Решение:
- Для больших экранов используем 3 колонки (`repeat(3, 1fr)`).
- Для экранов меньше 1024px используем 2 колонки.
- Для экранов меньше 768px — 1 колонка.
---------------------------------------------------------------------------------------------  
