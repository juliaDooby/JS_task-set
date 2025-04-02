--------------------------------------------------------------------------------------------- 
⋙ ❍ React компоненты:
---
5. Состояние (state) в класс-компоненте
⌛ Задача: Создайте класс-компонент, который хранит и отображает счётчик.
🎯 Решение:
```jsx
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
Объяснение: Состояние (`state`) обновляется через `setState`.
---------------------------------------------------------------------------------------------  
