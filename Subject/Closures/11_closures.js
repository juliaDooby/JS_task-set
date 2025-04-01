---------------------------------------------------------------------------------------------
⋙ ❍ Замыкания:
--------------- 
⌛ Задача 11: Очередь задач
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
