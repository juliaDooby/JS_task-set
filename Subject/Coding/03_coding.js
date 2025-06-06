---------------------------------------------------------------------------------------------    
3. Напишите функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов, которые содержатся только в одном из переданных массивов –
function getUniqueElements(arr1, arr2) {
    const uniqueElements = [];
    arr1.forEach((el) => {
        if (!arr2.includes(el)) {
            uniqueElements.push(el);
        }

    });

    arr2.forEach((el) => {
        if (!arr1.includes(el)) {
            uniqueElements.push(el);
        }
    });
    return uniqueElements;
}
Ваш код для нахождения элементов, которые содержатся только в одном из двух массивов, написан правильно. Он проверяет каждый элемент одного массива на наличие в другом массиве и добавляет его в новый массив, если он не встречается во втором.
Вот ваш код с небольшими улучшениями для повышения эффективности (заменил использование `.includes()` на использование `Set`, чтобы ускорить проверку наличия элемента):
```javascript
function getUniqueElements(arr1, arr2) {
    const set1 = new Set(arr1);  // Создаем Set для быстрого поиска
    const set2 = new Set(arr2);

    const uniqueElements = [];

    arr1.forEach((el) => {
        if (!set2.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    arr2.forEach((el) => {
        if (!set1.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    return uniqueElements;
}
```
Объяснение:
- `Set` — это структура данных, которая хранит уникальные значения и предоставляет эффективные методы для проверки наличия элемента (`has()`), что делает операцию проверки присутствия быстрее, чем использование `.includes()` в массиве.
- Мы сначала создаем два `Set` из массивов `arr1` и `arr2`, а затем используем `has` для проверки, существует ли элемент во втором наборе, что значительно ускоряет работу функции, особенно для больших массивов.
Пример использования:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const result = getUniqueElements(arr1, arr2);
console.log(result);  // [1, 2, 5, 6]
```
Результат: элементы `1`, `2`, `5`, и `6` присутствуют только в одном из массивов.
Альтернативное решение с использованием фильтрации и `concat`:
Для компактности можно использовать методы `.filter()` и `.concat()`:
```javascript
function getUniqueElements(arr1, arr2) {
    const uniqueInArr1 = arr1.filter(el => !arr2.includes(el));
    const uniqueInArr2 = arr2.filter(el => !arr1.includes(el));
    return uniqueInArr1.concat(uniqueInArr2);
}
```
Этот код работает точно так же, но выглядит короче и чище.
---------------------------------------------------------------------------------------------
