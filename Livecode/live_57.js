

---------------------------------------------------------------------------------------------
25
⋙ ❍ Реализуйте таблицу с виртуальным скроллом?
---
Для создания таблицы с виртуальным скроллом в React можно воспользоваться библиотеками или реализовать это самостоятельно. Вот пример простой реализации таблицы с виртуальным скроллом без использования сторонних библиотек:
```javascript
import React, { useState, useEffect, useRef } from 'react';

const VirtualizedTable = ({ data, rowHeight, visibleRowCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const tableRef = useRef();

  const handleScroll = () => {
    const scrollTop = tableRef.current.scrollTop;
    const startIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(startIndex);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
      return () => {
        tableRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const visibleData = data.slice(startIndex, startIndex + visibleRowCount);

  return (
    <div style={{ height: `${rowHeight * visibleRowCount}px`, overflow: 'auto' }} ref={tableRef}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VirtualizedTable;
```
Этот компонент принимает данные `data`, высоту строки `rowHeight` и количество видимых строк `visibleRowCount`. Он использует состояние для отслеживания индекса начальной строки, а затем рендерит только видимые строки на основе этого индекса и количества видимых строк. Когда пользователь прокручивает таблицу, обработчик `handleScroll` обновляет начальный индекс в соответствии с положением прокрутки.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
26
⋙ ❍ Реализуйте функцию преобразования URL query строки в JSON?
---
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
function queryObjectify(arg) {
// ??
}
queryObjectify(inData)
 Результатом выполнения для входной строки должен быть следующий объект
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};

Для преобразования URL-запроса в JSON можно использовать циклы и разбиение строки на подстроки. Вот один из способов реализации этой функции:
```javascript
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
    const result = {};

    // Разбить строку по символу '&', чтобы получить отдельные пары ключ-значение
    const pairs = arg.split('&');

    pairs.forEach(pair => {
        // Разбить каждую пару по символу '=', чтобы получить ключ и значение
        const [key, value] = pair.split('=');

        // Разделить ключ на уровни объекта и создать структуру JSON
        const keys = key.split('.');

        let current = result;
        keys.forEach((key, index) => {
            // Проверить, существует ли уже объект с этим ключом
            if (!current[key]) {
                // Если объект не существует, создать новый объект или массив
                current[key] = index === keys.length - 1 ? decodeURIComponent(value) : {};
            }
            // Перейти к следующему уровню объекта
            current = current[key];
        });
    });

    return result;
}

console.log(queryObjectify(inData));
```
Эта функция разбивает URL-запрос на отдельные пары ключ-значение, затем разбивает каждую пару на ключи и значения. Далее она создает структуру JSON, соответствующую ключам и значениям. При этом значения URL-кодируются с помощью `decodeURIComponent()`, чтобы преобразовать закодированные символы (%20 и др.) обратно в их исходное представление.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
27
⋙ ❍ Реализуйте функцию поиска пересечения двух массивов?
---
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
function intersection (a, b) {
// ??
}
intersection(first, second) // -> [3, 4]
Для поиска пересечения двух массивов можно воспользоваться методом `filter()`, который позволяет отфильтровать элементы массива на основе определенного условия. Вот как можно реализовать функцию поиска пересечения двух массивов:
```javascript
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
    // Отфильтровать элементы первого массива, оставив только те, которые также присутствуют во втором массиве
    return a.filter(item => b.includes(item));
}

console.log(intersection(first, second)); // -> [3, 4]
```
Эта функция принимает два массива в качестве аргументов и возвращает новый массив, содержащий элементы, которые присутствуют и в первом, и во втором массиве.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
28
⋙ ❍ Реализуйте функцию/класс для генерации HTML?
---
const HTMLConstruct = {};
HTMLConstruct.span('foo'); // -> <span>foo</span>
HTMLConstruct.div.span('bar'); // -> <div><span>bar</span></div>
HTMLConstruct.div.p(
HTMLConstruct.span('bar'),
HTMLConstruct.div.span('baz')
);
-> <div><p><span>bar</span><span>baz</span></p></div>
Для генерации HTML-кода в JavaScript можно создать класс, который будет представлять HTML-элемент и предоставлять методы для добавления атрибутов, вложенных элементов и получения итогового HTML-кода. Это позволит динамически создавать и управлять HTML-структурами в вашем приложении.
Ниже представлен пример такого класса:
```javascript
class HTMLElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.attributes = {};
    this.children = [];
    this.selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  toString() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    const isSelfClosing = this.selfClosingTags.includes(this.tagName);
    const childrenHTML = this.children.map(child => child.toString()).join('');
    return isSelfClosing
      ? `<${this.tagName}${attrs} />`
      : `<${this.tagName}${attrs}>${childrenHTML}</${this.tagName}>`;
  }
}
```
Пример использования:
```javascript
// Создаем элемент <div>
const div = new HTMLElement('div');
div.setAttribute('class', 'container');

// Создаем вложенный элемент <p>
const paragraph = new HTMLElement('p');
paragraph.setAttribute('class', 'text');
paragraph.appendChild({
  toString: () => 'Привет, мир!'
});

// Добавляем <p> как дочерний элемент <div>
div.appendChild(paragraph);

// Получаем итоговый HTML
console.log(div.toString());
```
В результате выполнения этого кода в консоли будет выведено:
```html
<div class="container"><p class="text">Привет, мир!</p></div>
```
Объяснение:
- Конструктор `constructor(tagName)`: Инициализирует новый элемент с заданным тегом, пустыми атрибутами и дочерними элементами.
- Метод `setAttribute(name, value)`: Устанавливает атрибут для элемента.
- Метод `appendChild(child)`: Добавляет дочерний элемент. Дочерний элемент должен иметь метод `toString`, который возвращает его HTML-представление.
- Метод `toString()`: Генерирует HTML-код для элемента, включая его атрибуты и дочерние элементы. Учитывает самозакрывающиеся теги.
Этот подход позволяет программно создавать сложные HTML-структуры, управлять их атрибутами и вложенностью, что особенно полезно при динамическом формировании контента на стороне клиента.


~~~
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
📌 [ЗАДАЧИ MIDDLE/SENIOR В ОДНОМ ИЗВЕСТНОМ БАНКЕ ✅]:
---------------------
⋙ ❍ Задача: Дан массив [1,1,1,2,4,5]. Нужно вернуть true в случае если в нём есть хотя бы один повторяющийся элемент?
---
Для решения этой задачи можно использовать различные подходы, но одним из самых простых способов является использование хэш-таблицы для отслеживания уникальных элементов массива.
Вот пример JavaScript-кода, который решает задачу:
```javascript
function hasDuplicate(arr) {
  // Создаем объект для отслеживания уникальных элементов
  const seen = {};

  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Если текущий элемент уже был ранее добавлен в объект,
    // значит, у нас есть повторяющийся элемент
    if (seen[arr[i]]) {
      return true;
    } else {
      // Иначе помечаем текущий элемент как присутствующий в массиве
      seen[arr[i]] = true;
    }
  }

  // Если цикл завершился, и повторяющихся элементов не найдено
  return false;
}

// Пример использования:
const arr = [1, 1, 1, 2, 4, 5];
console.log(hasDuplicate(arr)); // Выведет: true
```
Этот код создает объект `seen`, где ключами являются элементы массива, а значениями - логические значения, указывающие на то, встречался ли элемент ранее. Если элемент уже присутствует в объекте `seen`, значит, у нас есть повторяющийся элемент, и функция возвращает `true`. Если цикл завершится без обнаружения повторяющихся элементов, функция вернет `false`.
---------------------
⋙ ❍ Что выведет console.log(1==‘1’) и console.log(1===‘1’) и почему?
---
Выражение `1 == '1'` вернет `true`, а выражение `1 === '1'` вернет `false`.
При сравнении с использованием оператора `==`, JavaScript выполняет преобразование типов данных (type coercion), чтобы сравнить значения с одинаковым типом. В этом случае строка `'1'` будет преобразована в число, и оба значения станут числовыми. Поскольку числовые значения равны, результат будет `true`.
Однако, при использовании оператора `===`, сравнение выполняется без преобразования типов данных (strict equality). Значения сравниваются по их типу и значению. Таким образом, число `1` и строка `'1'` не равны по строгому равенству, поскольку они имеют разные типы данных (number и string), даже если их значения по сути одинаковы. Поэтому результат сравнения `1 === '1'` будет `false`.
---------------------
⋙ ❍ В каком порядке выведется console.log()?
---
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
1
2
3
4
5
6
7
8
9
10
11
12
13
14
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
Чтобы определить порядок вывода `console.log()`, нужно учитывать асинхронность выполнения кода. Давайте разберем, в каком порядке будут выполняться операции:
1. Сначала выполняются все синхронные операции, то есть:
- Выводится 'Создание промиса'.
- Создается и резолвится промис.
- Выводится 'Конец скрипта'.
2. Затем выполняются обработчики промисов и асинхронные операции из очереди микрозадач (microtask queue):
- Обработчик промиса выводит 'Обработка промиса'.
3. В конце выполняются функции обратного вызова таймаутов (setTimeout) и асинхронные операции из очереди задач (task queue):
- Выводится 'Таймаут'.
Таким образом, порядок вывода будет следующим:
```
- Создание промиса
- Конец скрипта
- Обработка промиса
- Таймаут
```
---------------------
⋙ ❍ Как можно скопировать объект (вопрос про Object.assign(), перебор в цикле, Spread оператор, JSON.stringify -> JSON.parse)?
---
Вы правы, существует несколько способов скопировать объект в JavaScript. Рассмотрим каждый из них:
1. Object.assign():
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```
2. Перебор в цикле:
```javascript
const original = { a: 1, b: 2 };
const copy = {};
for (let key in original) {
  copy[key] = original[key];
}
```
3. Spread оператор:
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```
4. JSON.stringify() -> JSON.parse():
```javascript
const original = { a: 1, b: 2 };
const copy = JSON.parse(JSON.stringify(original));
```
Каждый из этих способов имеет свои особенности:
- `Object.assign()`: Копирует только значения свойств объекта. Если объект содержит вложенные объекты или ссылки на другие объекты, они будут скопированы по ссылке, а не по значению.
- Перебор в цикле: Простой и понятный способ копирования объекта, но не работает с вложенными объектами и массивами.
- Spread оператор: Позволяет создать поверхностную копию объекта. Как и `Object.assign()`, не обрабатывает вложенные объекты глубоко.
- `JSON.stringify() -> JSON.parse()`: Создает глубокую копию объекта, копируя значения свойств и их вложенные объекты или массивы. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или тех объектов, которые содержат специфичные свойства, такие как `Symbol`.
При выборе способа копирования объекта следует учитывать структуру объекта, необходимость глубокого или поверхностного копирования и возможные нежелательные побочные эффекты, такие как потеря функций или круговые ссылки.
---------------------
⋙ ❍ Как копируется объект (по ссылке или по значению)?
---
В JavaScript объекты копируются по ссылке, а не по значению, за исключением некоторых специальных случаев или методов, которые создают глубокие копии. Это означает, что при присваивании одного объекта другой переменной создается копия ссылки на объект, а не самого объекта.
Рассмотрим пример:
```javascript
const original = { a: 1, b: 2 };
const copy = original;
copy.a = 3;

console.log(original.a); // Выведет: 3
```
В этом примере `original` и `copy` указывают на один и тот же объект в памяти. Поэтому при изменении свойств через одну переменную изменения будут видны и через другую.
Есть несколько способов создания копии объекта:
1. Поверхностная копия: Методы такие как `Object.assign()`, Spread оператор `{ ...obj }` или перебор в цикле создают поверхностные копии объектов. Они копируют только свойства объекта, но не их значения. Если объект содержит вложенные объекты, они будут скопированы по ссылке.
2. Глубокая копия: Методы такие как `JSON.stringify()` и `JSON.parse()` могут использоваться для создания глубоких копий объектов. Они сериализуют объект в строку JSON, а затем снова парсят эту строку в новый объект. Этот метод создает новые объекты для каждого свойства и их значений, что гарантирует, что копии объектов не будут иметь ссылок на исходные объекты. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или специфичные свойства, такие как `Symbol`.
Выбор между поверхностной и глубокой копией зависит от ваших потребностей. Если вам нужна простая поверхностная копия, используйте `Object.assign()` или Spread оператор. Если вам нужна полная копия объекта с вложенными структурами, используйте методы сериализации и десериализации JSON или другие библиотеки для глубокого копирования.
---------------------
⋙ ❍ Что будет если объекту, объявленному через const, изменить значения полей?
---
Если объект объявлен с использованием `const`, это означает, что ссылка на этот объект не может быть изменена. Однако содержимое объекта может быть изменено, если оно не является неизменяемым.
Давайте рассмотрим пример:
```javascript
const person = {
  name: 'John',
  age: 30
};

person.name = 'Jane'; // Изменяем значение поля name
person.age = 35;      // Изменяем значение поля age

console.log(person); // Выведет: { name: 'Jane', age: 35 }
```
В этом примере, хотя `person` объявлен с использованием `const`, мы можем изменить значения его полей. Это происходит потому, что `const` ограничивает изменение ссылки на объект, но не его содержимое.
Однако, если попытаться присвоить объекту новое значение или перезаписать ссылку на объект, JavaScript выдаст ошибку:
```javascript
const person = {
  name: 'John',
  age: 30
};

person = {}; // Ошибка: "Assignment to constant variable."
```
Поэтому, если вам нужно полностью предотвратить изменение объекта, вам следует использовать методы для глубокого замораживания объекта, такие как `Object.freeze()`, которые защищают от изменений как ссылку на объект, так и его содержимое.
---------------------
⋙ ❍ Как можно сделать объект иммутабельным? Вопрос об Object.freeze?
---
Для создания иммутабельного объекта в JavaScript вы можете использовать метод `Object.freeze()`. Этот метод "замораживает" объект, делая его неизменяемым: нельзя добавлять новые свойства, изменять существующие или удалять их.
Вот как вы можете использовать `Object.freeze()` для создания иммутабельного объекта:
```javascript
const obj = {
  property1: 'value1',
  property2: 'value2'
};

// Замораживаем объект
Object.freeze(obj);

// Попытка изменить свойство объекта
obj.property1 = 'new value'; // Не будет совершено никаких изменений
```
Вы также можете использовать `Object.freeze()` в сочетании с рекурсивным проходом по объекту для замораживания всех вложенных объектов и создания глубокой иммутабельности:
```javascript
function deepFreeze(obj) {
  // Получаем имена всех свойств объекта
  const propNames = Object.getOwnPropertyNames(obj);

  // Замораживаем все свойства объекта
  propNames.forEach(function(name) {
    const prop = obj[name];

    // Если свойство является объектом и не было заморожено ранее, замораживаем его
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Замораживаем сам объект
  return Object.freeze(obj);
}

const obj = {
  nested: {
    property1: 'value1',
    property2: 'value2'
  }
};

deepFreeze(obj);

// Попытка изменить вложенное свойство объекта
obj.nested.property1 = 'new value'; // Не будет совершено никаких изменений
```
Таким образом, использование `Object.freeze()` позволяет создать объект, который не может быть изменен, что обеспечивает безопасность данных и предотвращает неожиданные изменения в приложении.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ)?
---
(function() {
    f();
    f = function() {
        console.log(1);
    }
})()
function f() {
    console.log(2)
}
f();
1
2
3
4
5
6
7
8
9
10
11
12
13
(function() {
    f();

    f = function() {
        console.log(1);
    }
})()

function f() {
    console.log(2)
}

f();
Этот код вызовет ошибку "TypeError: f is not a function".
При первом вызове `f();` функция `f` еще не определена, так как вызов `f();` происходит перед присваиванием новой функции `f = function() { console.log(1); }`.
В результате, будет выброшено исключение TypeError, потому что при попытке вызвать `f()` до определения функции, `f` будет равно `undefined`, а не функции.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ) ?
---
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
1
2
3
4
5
6
7
8
9
10
11
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
В консоль будет выведено:
```
John undefined
```
Это происходит из-за того, что контекст выполнения функции `getName` изменяется при вызове отдельно от объекта `obj`.
1. Переменная `name1` получает значение `John`, потому что функция `getName` вызывается в контексте объекта `obj`, и `this.name` возвращает свойство `name` этого объекта.
2. Переменная `getName` присваивается ссылка на функцию `getName` объекта `obj`, но без привязки к контексту. Поэтому, когда функция `getName` вызывается в контексте глобального объекта (или `undefined` в строгом режиме), `this.name` возвращает `undefined`.
Поэтому, при использовании интерполяции строк `${name1} ${name2}`, первая переменная `name1` будет иметь значение `'John'`, а вторая переменная `name2` будет иметь значение `undefined`.
---------------------
⋙ ❍ Создайте метод у объекта String, который многократно повторяет строку (не используя метод .repeat()). ?
---
console.log("hello". customRepeat(3)); // “hellohellohello”
1
console.log("hello". customRepeat(3)); // “hellohellohello”
Вы можете создать метод `customRepeat` для объекта `String`, который будет многократно повторять строку. Вот пример, как это можно сделать:
```javascript
String.prototype.customRepeat = function(count) {
  let repeatedString = '';
  for (let i = 0; i < count; i++) {
    repeatedString += this;
  }
  return repeatedString;
};
console.log("hello".customRepeat(3)); // Выведет: "hellohellohello"
```
В этом примере мы расширяем прототип `String`, добавляя метод `customRepeat`, который принимает количество повторений и возвращает новую строку, содержащую исходную строку, повторенную заданное количество раз.
---------------------
⋙ ❍ Есть список элементов button, на которые навешен обработчик события ‘click’. Что попадет в консоль, если пользователь нажмет первую и последнюю кнопку в списке? Аргументируйте свой ответ.
---
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
1
2
3
4
5
6
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
• При нажатии на первую и последнюю кнопку в списке будут выведены следующие строки в консоль:
```
You clicked element #6
You clicked element #6
```
Это происходит из-за того, что переменная `i` используется внутри функции обратного вызова для обработчика события 'click'. В JavaScript область видимости переменных объявленных через ключевое слово `var` - это вся функция. В результате, значение переменной `i` будет равно последнему значению, которое она принимает в цикле, то есть `6`. Когда функция обработчика события вызывается при нажатии на кнопку, она видит последнее значение `i`, которое было установлено, то есть `6`, и выводит его в консоль для обоих кнопок.
---------------------
⋙ ❍ Что выведет в консоль следующий код (Аргументируйте свой ответ) ?
---
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
1
2
3
4
5
6
7
8
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
В консоль будет выведено следующее:
```
1
4
3
2
```
При вызове функции `printme`, сначала будет выведено `1`, затем `4`, потому что они находятся в синхронном коде функции. Затем будет добавлено два таймера с задержками: один на 1000 миллисекунд (1 секунду) и один на 0 миллисекунд (почти мгновенно). Далее, когда таймер с задержкой в 0 миллисекунд сработает, будет выведено `3`. И, наконец, после истечения 1 секунды, выведется `2`.
Это происходит из-за того, что даже если задержка таймера равна 0, функция обратного вызова все равно помещается в очередь событий и выполнится после завершения текущего кода. Таким образом, порядок выполнения будет сохранен.
---------------------
⋙ ❍ Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом ?
---
console.log(isPalindrome('asdsa')) // true
1
console.log(isPalindrome('asdsa')) // true
Вы можете создать функцию `isPalindrome`, которая будет принимать строку и проверять, является ли она палиндромом. Палиндром - это строка, которая читается одинаково как с начала, так и с конца. Вот как это можно сделать:
```javascript
function isPalindrome(str) {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  const formattedStr = str.replace(/\s/g, '').toLowerCase();

  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('asdsa')); // Выведет: true
```
Эта функция сначала форматирует строку, удаляя все пробелы и приводя к нижнему регистру. Затем она сравнивает символы с обоих концов строки, чтобы определить, является ли она палиндромом. Если строка является палиндромом, функция возвращает `true`, в противном случае - `false`.
---------------------
⋙ ❍ Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом: ?
---
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
1
2
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
Вы можете создать функцию `sum`, которая будет принимать один или два аргумента и возвращать сумму этих чисел. Вот как это можно сделать:
```javascript
function sum(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2, 3));   // Выведет: 5
console.log(sum(2)(3));   // Выведет: 5
```
Эта функция проверяет, сколько аргументов ей передано. Если передан только один аргумент, она возвращает функцию, которая ожидает второй аргумент и возвращает их сумму. Если передано два аргумента, она просто возвращает их сумму.
---------------------
⋙ ❍ Поменяйте местами значения целочисленных переменных, не используя временные переменные. Первый вариант – используя ES6, и второй вариант – используя ES5. ?
---
var a = 1;
var b = 2;

// b = 1;
// a = 2;
1
2
3
4
5
var a = 1;
var b = 2;

// b = 1;
// a = 2;
Используя ES6:
```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b); // Выведет: 2 1
```
Используя ES5:
```javascript
var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // Выведет: 2 1
```
---------------------
⋙ ❍ Напишите функцию, проверяющую число на четность, используя только битовые операции ?
---
Функция, которая проверяет число на четность, используя только битовые операции:
```javascript
function isEven(number) {
  // Проверяем младший бит числа
  // Если младший бит равен 0, число четное, иначе нечетное
  return (number & 1) === 0;
}

// Пример использования функции
console.log(isEven(4)); // Выведет true, потому что 4 - четное число
console.log(isEven(7)); // Выведет false, потому что 7 - нечетное число
```
Эта функция использует побитовое И (`&`) с числом 1, чтобы проверить младший бит числа. Если младший бит равен 0, это означает, что число четное, иначе это нечетное число.
---------------------
⋙ ❍ Дан не сложный компонент на реакте и необходимо провести ревью (заюзать хуки useMemo / useCallback, вынести повторяющийся код в функцию или переменную и что-то там еще было) ?
---
Давайте посмотрим на ваш компонент и проведем ревью, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Давайте оптимизируем этот компонент:
1. Хранение удвоенного значения с помощью `useMemo`:
 ```javascript
 const doubleCount = useMemo(() => count * 2, [count]);
 ```
2. Оптимизация обработчиков событий с помощью `useCallback`:
 ```javascript
 const handleIncrement = useCallback(() => {
   setCount((prevCount) => prevCount + 1);
 }, []);

 const handleDecrement = useCallback(() => {
   setCount((prevCount) => prevCount - 1);
 }, []);
 ```
3. Вынос повторяющегося кода в функцию или переменную:
 ```javascript
 const increment = () => {
   setCount((prevCount) => prevCount + 1);
 };

 const decrement = () => {
   setCount((prevCount) => prevCount - 1);
 };
 ```
Вот полный код с примененными оптимизациями:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
/Давайте проведем ревью компонента, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Оптимизированный код:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
---------------------
⋙ ❍ Задача на рекурсию ?
---
Простая задача на рекурсию: написать функцию для вычисления факториала числа.
Факториал числа \( n \) (обозначается как \( n! \)) - это произведение всех положительных целых чисел от 1 до \( n \). Например, факториал 5 (обозначается как \( 5! \)) равен \( 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Вот решение на JavaScript с использованием рекурсии:
```javascript
function factorial(n) {
  // Базовый случай: если n равно 0 или 1, вернуть 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивный случай: вычислить факториал числа n как произведение n и факториала (n - 1)
  else {
    return n * factorial(n - 1);
  }
}

// Пример использования функции
console.log(factorial(5)); // Выведет 120
```
Эта функция рекурсивно вызывает саму себя до достижения базового случая (когда \( n = 0 \) или \( n = 1 \)), а затем возвращает результат.
---------------------------------------------------------------------------------------------
*/

