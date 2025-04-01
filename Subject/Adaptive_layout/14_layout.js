---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
14. Адаптивная таблица с использованием `overflow-x`
⌛ Задача: Напишите таблицу, которая будет прокручиваться по горизонтали на маленьких экранах.
Пример:
```html
<div class="table-wrapper">
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>New York</td>
    </tr>
    <!-- more rows -->
  </table>
</div>
```

```css
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
```
🎯 Решение:
- Используем `overflow-x: auto`, чтобы таблица могла прокручиваться по горизонтали на маленьких экранах.
---------------------------------------------------------------------------------------------  
