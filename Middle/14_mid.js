---------------------------------------------------------------------------------------------  
⋙ ❍ Как работает прототип?
---
Прототип в JavaScript - это механизм, позволяющий объектам наследовать свойства и методы других объектов.
Каждый объект в JavaScript имеет свойство `prototype`, которое указывает на другой объект, называемый прототипом. Когда свойство или метод вызывается у объекта, JavaScript сначала ищет его в самом объекте. Если свойство не найдено, JavaScript будет искать его в прототипе объекта. Этот процесс может продолжаться до тех пор, пока не будет найдено свойство или будет достигнут конечный прототип `null`.
Прототипы используются для создания наследования в JavaScript. Когда объект наследует свойства и методы от своего прототипа, он может использовать их, как если бы они были его собственными. Это позволяет избегать дублирования кода и создавать более гибкую иерархию объектов.
Вот простой пример цикла событий на JavaScript:
```javascript
// Создаем обработчик события
function eventHandler() {
    console.log('Событие обработано!');
}

// Добавляем обработчик события к элементу
document.getElementById('myButton').addEventListener('click', eventHandler);

// Создаем событие, которое будет помещено в очередь событий
document.getElementById('myButton').click();

// Цикл событий обрабатывает события из очереди
```
В этом примере:
1. Мы создаем обработчик события `eventHandler`, который просто выводит сообщение в консоль.
2. Затем мы добавляем этот обработчик к элементу с идентификатором `myButton`, который, например, может быть кнопкой на странице.
3. После этого мы создаем и программно вызываем событие `click` для кнопки `myButton`.
4. Это событие добавляется в очередь событий браузера.
5. Цикл событий браузера обрабатывает события из очереди, и обработчик `eventHandler` выполняется, выводя сообщение в консоль.
Это демонстрирует базовый принцип работы цикла событий: события добавляются в очередь, а затем обрабатываются одно за другим.
---------------------------------------------------------------------------------------------
