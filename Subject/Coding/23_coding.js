---------------------------------------------------------------------------------------------
⋙ ❍ Реализуйте функцию, которая исполнит callback для всех элементов определенной ветви DOM-дерева?
---
23. Для выполнения этой задачи можно использовать рекурсивный обход DOM-дерева, чтобы найти все элементы ветви и вызвать callback для каждого из них. Вот пример реализации такой функции:
```javascript
function executeCallbackForBranch(rootElement, callback) {
  // Функция для рекурсивного обхода DOM-дерева
  function traverse(element) {
    // Вызываем callback для текущего элемента
    callback(element);

    // Рекурсивно обходим дочерние элементы
    for (let i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  // Начинаем обход с корневого элемента
  traverse(rootElement);
}

// Пример использования:
// Предположим, у нас есть корневой элемент #root
const rootElement = document.getElementById('root');

// Callback функция, которая добавляет класс "highlight" к каждому элементу
function highlightElement(element) {
  element.classList.add('highlight');
}

// Вызываем функцию для выполнения callback для всех элементов ветви
executeCallbackForBranch(rootElement, highlightElement);
```
Этот код рекурсивно обходит все дочерние элементы начиная с заданного корневого элемента `rootElement` и вызывает переданный `callback` для каждого элемента ветви. В данном примере `highlightElement` добавляет класс "highlight" к каждому найденному элементу.
---------------------------------------------------------------------------------------------
