---------------------------------------------------------------------------------------------
⋙ ❍ Остановить функцию setInterval ?
---
повторяем с интервалом в 1 секунду
let intervalId = setInterval(() => console.log('tick'), 1000);
остановимся через 10 секунд
setTimeout(() => { clearInterval(intervalId); console.log('stop'); }, 10000);
---------------------------------------------------------------------------------------------
