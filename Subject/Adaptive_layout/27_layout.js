---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
27. Стилизация чекбокса
⌛ Задача: Создайте стилизованный чекбокс.
🎯 Решение:
```html
<label class="checkbox-wrapper">
  <input type="checkbox" class="checkbox">
  <span class="custom-checkbox"></span>
  Чекбокс
</label>
```

```css
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.checkbox {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  background-color: white;
  border: 2px solid black;
  margin-right: 10px;
  cursor: pointer;
}

.checkbox:checked + .custom-checkbox {
  background-color: black;
}
```
Объяснение: Скройте стандартный чекбокс и стилизуйте через соседний элемент.
---------------------------------------------------------------------------------------------  
