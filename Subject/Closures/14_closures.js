---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 14: Фабрика событий
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
