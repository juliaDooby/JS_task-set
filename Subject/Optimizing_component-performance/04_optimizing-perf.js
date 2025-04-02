---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
4. Использование `PureComponent` для предотвращения ненужных рендеров (React)
⌛ Задача: Использование `PureComponent` для автоматической оптимизации рендеринга.
🎯 Решение:
```javascript
import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
  render() {
    console.log('Item rendered');
    return <li>{this.props.item}</li>;
  }
}

class App extends React.Component {
  state = { list: ['Item 1', 'Item 2'], toggle: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Toggle
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
```
Объяснение:
- `PureComponent` автоматически реализует `shouldComponentUpdate`, предотвращая рендер, если пропсы или состояние не изменились.
---------------------------------------------------------------------------------------------  
