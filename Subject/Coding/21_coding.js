---------------------------------------------------------------------------------------------
⋙ ❍ Реализуйте один из методов массива (например, splice)?
---
21. `splice()` позволяет изменять содержимое массива, удаляя существующие элементы и/или добавляя новые элементы на их место. Вот простая реализация этого метода:
```javascript
Array.prototype.customSplice = function(start, deleteCount, ...items) {
  // Проверка наличия параметра start
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }

  const deletedItems = [];

  // Удаление элементов из массива
  const removeCount = Math.min(deleteCount, this.length - start);
  for (let i = 0; i < removeCount; i++) {
    const index = start + i;
    deletedItems.push(this[index]);
    // Сдвигаем все элементы после удаленного налево
    for (let j = index; j < this.length - 1; j++) {
      this[j] = this[j + 1];
    }
    // Удаляем последний элемент
    this.length--;
  }

  // Добавление новых элементов в массив
  const len = this.length;
  const numNewElements = items.length;
  const numMoveElements = len - start;
  this.length = len + numNewElements - removeCount;
  for (let i = len - 1; i >= start; i--) {
    this[i + numNewElements - removeCount] = this[i];
  }
  for (let i = 0; i < numNewElements; i++) {
    this[start + i] = items[i];
  }

  return deletedItems;
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const deleted = arr.customSplice(2, 2, 'a', 'b', 'c');
console.log('Массив после splice:', arr); // [1, 2, "a", "b", "c", 5]
console.log('Удаленные элементы:', deleted); // [3, 4]
```
Эта реализация `customSplice()` принимает три аргумента: `start` (индекс, с которого начинается удаление/вставка), `deleteCount` (количество удаляемых элементов) и `items` (элементы для вставки). Метод изменяет исходный массив и возвращает массив удаленных элементов.
---------------------------------------------------------------------------------------------
