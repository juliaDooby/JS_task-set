---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
6. Использование `shouldComponentUpdate` для классовых компонентов (React)
⌛ Задача: Оптимизация рендеров в классовых компонентах с использованием `shouldComponentUpdate`.
🎯 Решение:
```javascript
class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item !== this.props.item;
  }

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
- `shouldComponentUpdate` позволяет вручную контролировать, когда компонент должен быть перерендерен. В этом случае компонент будет перерендериваться только если `item` изменится.
---------------------------------------------------------------------------------------------  
