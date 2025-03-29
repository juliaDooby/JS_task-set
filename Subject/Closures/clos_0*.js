---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 1: Счетчик
Напишите функцию `createCounter`, которая создает счетчик. Каждый вызов метода `increment` увеличивает значение счетчика на 1, а метод `getValue` возвращает текущее значение счетчика.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
```
Объяснение:
- Переменная `count` находится в замыкании функции `createCounter`.
- Объект с методами `increment` и `getValue` имеет доступ к переменной `count`, даже после завершения выполнения `createCounter`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 2: Генератор функций
Напишите функцию `createMultiplier`, которая принимает число `x` и возвращает функцию, умножающую любое переданное ей значение на `x`.
🎯 Решение:
```javascript
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // 10

const multiplyBy10 = createMultiplier(10);
console.log(multiplyBy10(3)); // 30
```
Объяснение:
- Переменная `x` из внешней функции доступна во внутренней функции через замыкание.
- Каждый вызов `createMultiplier` создает новое замыкание с собственной копией переменной `x`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 3: Задержка вывода
Напишите функцию, которая с задержкой выведет числа от 1 до 5, используя замыкания.
🎯 Решение:
```javascript
function delayedLog() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

delayedLog();
```
Объяснение:
- В данном решении используется `let` для создания блоковой области видимости переменной `i`.
- Если использовать `var`, нужно обернуть `setTimeout` в функцию, чтобы замыкание захватывало правильное значение `i`:
  ```javascript
  function delayedLog() {
    for (var i = 1; i <= 5; i++) {
      (function (num) {
        setTimeout(function () {
          console.log(num);
        }, num * 1000);
      })(i);
    }
  }

  delayedLog();
  ```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 4: Частичное применение
Напишите функцию `partial`, которая принимает функцию `fn` и фиксирует первые несколько её аргументов.
🎯 Решение:
```javascript
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 5);
console.log(add5(2, 3)); // 10
```
Объяснение:
- Замыкание позволяет сохранить фиксированные аргументы `fixedArgs`.
- При вызове возвращенной функции они комбинируются с оставшимися аргументами.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 5: Каррирование
Напишите функцию `curry`, которая преобразует функцию с множеством аргументов в последовательность вложенных функций.
🎯 Решение:
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
```
Объяснение:
- Замыкание сохраняет текущие аргументы, пока не будет передано достаточное их количество.
- Как только аргументов становится достаточно, вызывается оригинальная функция.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 6: Запоминание результатов (мемоизация)
Напишите функцию `memoize`, которая оптимизирует функцию путем запоминания уже вычисленных результатов.
🎯 Решение:
```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * slowFactorial(n - 1);
}

const fastFactorial = memoize(slowFactorial);
console.log(fastFactorial(5)); // 120
console.log(fastFactorial(5)); // 120 (из кеша)
```
Объяснение:
- Замыкание используется для хранения объекта `cache`.
- При повторном вызове с теми же аргументами результат берется из кеша.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 7: Управление доступом (Приватные переменные)
Напишите функцию, которая позволяет работать с приватными переменными объекта (например, инкапсуляция).
🎯 Решение:
```javascript
function createUser(name) {
  let _name = name;

  return {
    getName: function () {
      return _name;
    },
    setName: function (newName) {
      if (newName.length > 0) {
        _name = newName;
      }
    }
  };
}

const user = createUser('Alice');
console.log(user.getName()); // Alice
user.setName('Bob');
console.log(user.getName()); // Bob
```
Объяснение:
- `_name` — приватная переменная, доступная только через методы `getName` и `setName`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 8: Лимит вызовов функции
Напишите функцию `limit`, которая позволяет вызвать переданную функцию только указанное количество раз.
🎯 Решение:
```javascript
function limit(fn, times) {
  let count = 0;

  return function (...args) {
    if (count < times) {
      count++;
      return fn(...args);
    } else {
      console.log('Function call limit exceeded');
    }
  };
}

function greet(name) {
  return `Hello, ${name}!`;
}

const limitedGreet = limit(greet, 3);
console.log(limitedGreet('Alice')); // Hello, Alice!
console.log(limitedGreet('Bob'));   // Hello, Bob!
console.log(limitedGreet('Charlie')); // Hello, Charlie!
console.log(limitedGreet('Dave'));    // Function call limit exceeded
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая отслеживает количество вызовов функции.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 9: Однократное выполнение функции
Напишите функцию `once`, которая гарантирует, что переданная функция будет выполнена только один раз.
🎯 Решение:
```javascript
function once(fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

function logMessage(message) {
  console.log(message);
}

const logOnce = once(logMessage);
logOnce('This will be logged'); // This will be logged
logOnce('This will not be logged'); // (ничего не выведет)
```
Объяснение:
- Замыкание сохраняет флаг `called`, который предотвращает повторный вызов функции.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 10: Таймер с паузой
Напишите функцию `createTimer`, которая позволяет запускать таймер, останавливать его и получать текущее значение.
🎯 Решение:
```javascript
function createTimer() {
  let startTime = 0;
  let elapsedTime = 0;
  let timer;

  return {
    start: function () {
      if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
          elapsedTime = Date.now() - startTime;
        }, 100);
      }
    },
    stop: function () {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    },
    getTime: function () {
      return (elapsedTime / 1000).toFixed(2) + 's';
    }
  };
}

const timer = createTimer();
timer.start();
setTimeout(() => {
  timer.stop();
  console.log(timer.getTime()); // ~3.00s
}, 3000);
```
Объяснение:
- Замыкание сохраняет переменные `startTime`, `elapsedTime` и `timer`, позволяя манипулировать состоянием таймера.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 11: Генератор уникальных идентификаторов
Напишите функцию `createIdGenerator`, которая создает генератор уникальных числовых идентификаторов.
🎯 Решение:
```javascript
function createIdGenerator(start = 0) {
  let id = start;

  return function () {
    return id++;
  };
}

const generateId = createIdGenerator(100);
console.log(generateId()); // 100
console.log(generateId()); // 101
console.log(generateId()); // 102
```
Объяснение:
- Замыкание сохраняет переменную `id`, которая увеличивается при каждом вызове.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 12: Очередь задач
Напишите функцию `taskQueue`, которая принимает задачу (функцию) и выполняет её только после завершения предыдущей.
🎯 Решение:
```javascript
function taskQueue() {
  let isRunning = false;
  const queue = [];

  return function (task) {
    queue.push(task);
    if (!isRunning) {
      isRunning = true;
      (function execute() {
        if (queue.length > 0) {
          const currentTask = queue.shift();
          currentTask(() => {
            execute();
          });
        } else {
          isRunning = false;
        }
      })();
    }
  };
}

const queue = taskQueue();

queue(done => {
  console.log('Task 1');
  setTimeout(done, 1000);
});

queue(done => {
  console.log('Task 2');
  setTimeout(done, 500);
});
```
Объяснение:
- Замыкание сохраняет флаг `isRunning` и массив `queue`, чтобы гарантировать выполнение задач в строгом порядке.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 13: Кэширование результатов
Напишите функцию `cache`, которая сохраняет результаты выполнения переданной функции для оптимизации.
🎯 Решение:
```javascript
function cache(fn) {
  const results = new Map();

  return function (arg) {
    if (results.has(arg)) {
      return results.get(arg);
    }
    const result = fn(arg);
    results.set(arg, result);
    return result;
  };
}

function square(n) {
  return n * n;
}

const cachedSquare = cache(square);
console.log(cachedSquare(4)); // 16
console.log(cachedSquare(4)); // 16 (из кеша)
```
Объяснение:
- Замыкание сохраняет объект `results` для хранения вычисленных значений.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 14: Таймер обратного отсчета
Создайте функцию `countdown`, которая принимает начальное значение и вызывает callback при каждом шаге.
🎯 Решение:
```javascript
function countdown(start, callback) {
  let current = start;

  return function tick() {
    if (current > 0) {
      callback(current);
      current--;
    } else {
      callback('Done!');
    }
  };
}

const tick = countdown(5, console.log);
tick(); // 5
tick(); // 4
tick(); // 3
tick(); // 2
tick(); // 1
tick(); // Done!
```
Объяснение:
- Замыкание сохраняет текущее значение `current`, уменьшая его при каждом вызове.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 15: Фабрика событий
Напишите функцию `createEventEmitter`, которая позволяет подписываться на события и вызывать их.
🎯 Решение:
```javascript
function createEventEmitter() {
  const events = {};

  return {
    on: function (event, listener) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(listener);
    },
    emit: function (event, ...args) {
      if (events[event]) {
        events[event].forEach(listener => listener(...args));
      }
    }
  };
}

const emitter = createEventEmitter();
emitter.on('sayHello', name => console.log(`Hello, ${name}!`));
emitter.emit('sayHello', 'Alice'); // Hello, Alice!
```
Объяснение:
- Замыкание сохраняет объект `events`, который хранит подписки на события.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 16: Трекер выполнения функций
Напишите функцию, которая отслеживает, сколько раз была вызвана переданная функция.
🎯 Решение:
```javascript
function trackCalls(fn) {
  let count = 0;

  return function (...args) {
    count++;
    console.log(`Called ${count} times`);
    return fn(...args);
  };
}

function add(a, b) {
  return a + b;
}

const trackedAdd = trackCalls(add);
console.log(trackedAdd(2, 3)); // Called 1 times, 5
console.log(trackedAdd(4, 5)); // Called 2 times, 9
```
Объяснение:
- Замыкание сохраняет переменную `count`, которая увеличивается при каждом вызове.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 17: Генератор паролей
Создайте функцию `passwordGenerator`, которая возвращает уникальные пароли.
🎯 Решение:
```javascript
function passwordGenerator() {
  let index = 0;

  return function () {
    return `pass-${++index}-${Date.now()}`;
  };
}

const generatePassword = passwordGenerator();
console.log(generatePassword()); // pass-1-<timestamp>
console.log(generatePassword()); // pass-2-<timestamp>
```
Объяснение:
- Замыкание сохраняет `index`, чтобы каждый пароль был уникальным.
---------------------------------------------------------------------------------------------  
