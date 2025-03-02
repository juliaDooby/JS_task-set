---------------------------------------------------------------------------------------------
⋙ ❍ Как можно прокинуть value, чтобы получилось 2?
---
const [value, setValue] = useState(0);

1) setState(2);
2) setState(value + 1); setState(value + 1);
3) setState(value => value + 1); setState(value => value +1);

const [value, setValue] = useState(0);

1) setState(2);
2) setState(value + 1); setState(value + 1);
3) setState(value => value + 1); setState(value => value +1);
Для обоих вариантов прокидывания значения `value` в функцию `setState` в React можно использовать функциональный подход в `setState`.
1) setState(2):
```javascript
setState(2);
```
2) setState(value + 1); setState(value + 1);:
```javascript
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
```
3) setState(value => value + 1); setState(value => value +1);:
```javascript
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
```
В обоих случаях будет достигнуто значение `2`. Использование функционального подхода в `setState` гарантирует, что значение `value`, используемое для обновления состояния, будет актуальным на момент вызова функции `setState`.
  ---------------------------------------------------------------------------------------------

  
