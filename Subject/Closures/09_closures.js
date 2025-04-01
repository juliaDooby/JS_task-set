---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
---------------
⌛ Задача 9: Таймер с паузой
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
