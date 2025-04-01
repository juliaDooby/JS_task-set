---------------------------------------------------------------------------------------------  
⋙ ❍ Адаптивная верстка (media queries, Flexbox, Grid):
---
22. Таблица с фиксированным заголовком
⌛ Задача: Создайте таблицу с фиксированным заголовком.
🎯 Решение:
```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Заголовок 1</th>
        <th>Заголовок 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Данные 1</td>
        <td>Данные 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.table-wrapper {
  max-height: 200px;
  overflow-y: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead th {
  position: sticky;
  top: 0;
  background-color: #f4f4f4;
}
```
Объяснение: `position: sticky` фиксирует заголовок таблицы.
---------------------------------------------------------------------------------------------  
