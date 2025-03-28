Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
Оптимизация производительности компонентов — важная задача для любого фронтенд-разработчика, особенно когда приложение становится более сложным. Вот 15 популярных задач с решениями и объяснениями, которые помогут повысить производительность компонентов в React и других фреймворках.
1. Мемоизация функции с помощью `useMemo` (React)
⌛ Задача: Мемоизировать результат вычисления функции, чтобы избежать лишних вычислений при рендере компонента.
🎯 Решение:
```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ number }) {
  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);

  return <div>{expensiveResult}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <ExpensiveCalculation number={number} />
    </div>
  );
}
```
Объяснение:
- `useMemo` помогает мемоизировать результат вычислений. Он пересчитывает результат только при изменении зависимостей. Это предотвращает лишние вычисления при каждом рендере.
---
2. Мемоизация колбэков с помощью `useCallback` (React)
⌛ Задача: Мемоизировать функции-обработчики, чтобы избежать их пересоздания при каждом рендере.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` мемоизирует функцию-обработчик, предотвращая её пересоздание при каждом рендере компонента. Это полезно для оптимизации дочерних компонентов, которые могут реагировать на изменение переданных функций.
---
3. Разделение кода с использованием `React.lazy` и `Suspense`
⌛ Задача: Ленивая загрузка компонентов для оптимизации первоначальной загрузки приложения.
🎯 Решение:
```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```
Объяснение:
- `React.lazy` позволяет загружать компоненты только тогда, когда они требуются, что снижает начальную нагрузку на приложение.
- `Suspense` используется для отображения заглушки (fallback) во время загрузки компонента.
---
4. Оптимизация списка с помощью `React.memo`
⌛ Задача: Избежать лишних рендеров компонента списка, если его пропсы не изменились.
🎯 Решение:
```javascript
import React, { useState } from 'react';

const ListItem = React.memo(({ item }) => {
  console.log('Item rendered');
  return <li>{item}</li>;
});

function App() {
  const [list, setList] = useState(['Item 1', 'Item 2']);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
```
Объяснение:
- `React.memo` предотвращает повторный рендер компонента, если его пропсы не изменились. В примере `ListItem` будет рендериться только при изменении его пропса.
---
5. Использование `PureComponent` для предотвращения ненужных рендеров (React)
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
---
6. Оптимизация вложенных компонентов с `React.memo` и `useCallback`
⌛ Задача: Использование `useCallback` и `React.memo` для оптимизации дочерних компонентов.
🎯 Решение:
```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```
Объяснение:
- `useCallback` предотвращает пересоздание функции, а `React.memo` оптимизирует рендер дочернего компонента, если его пропсы не изменились.
---
7. Использование `shouldComponentUpdate` для классовых компонентов (React)
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
---
8. Разделение кода с динамическим импортажом
⌛ Задача: Использование динамического импорта для уменьшения начального размера бандла.
🎯 Решение:
```javascript
import React, { useState } from 'react';

function App() {
  const [Component, setComponent] = useState(null);

  const loadComponent = () => {
    import('./LazyComponent').then((comp) => {
      setComponent(comp.default);
    });
  };

  return (
    <div>
      <button onClick={loadComponent}>Load Component</button>
      {Component && <Component />}
    </div>
  );
}
```
Объяснение:
- Динамический импорт позволяет загружать компоненты только по мере необходимости, тем самым сокращая начальную нагрузку на приложение.
---
9. Оптимизация с помощью ключей в `v-for` (Vue)
⌛ Задача: Использование уникальных ключей для оптимизации рендеринга списков в Vue.
🎯 Решение:
```vue
<template>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    };
  },
};
</script>
```
Объяснение:
- Использование `:key` помогает Vue оптимизировать процесс обновления
 DOM при изменении данных списка, избегая повторных рендеров элементов, которые не изменились.
---
10. Использование `computed` в Vue для оптимизации вычислений
⌛ Задача: Использование `computed` свойств для мемоизации сложных вычислений.
🎯 Решение:
```vue
<template>
  <div>{{ expensiveCalculation }}</div>
</template>

<script>
export default {
  data() {
    return {
      number: 5,
    };
  },
  computed: {
    expensiveCalculation() {
      console.log('Calculating...');
      return this.number * 2;
    },
  },
};
</script>
```
Объяснение:
- В Vue `computed` автоматически кэширует результат вычисления, перезапуская его только при изменении зависимостей.
---
11. Использование `debounce` для оптимизации пользовательского ввода
⌛ Задача: Использование debounce для ограничения количества запросов при вводе текста.
🎯 Решение:
```javascript
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleChange = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  useEffect(() => {
    console.log('Searching for:', query);
  }, [query]);

  return <input type="text" onChange={handleChange} />;
}
```
Объяснение:
- `debounce` ограничивает количество срабатываний функции. Это помогает снизить нагрузку, например, при поиске, избегая выполнения запросов на сервер при каждом вводе символа.
---
12. Использование `Intersection Observer` для ленивой загрузки
⌛ Задача: Реализовать ленивую загрузку изображений с использованием `IntersectionObserver`.
🎯 Решение:
```javascript
import React, { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return loaded ? <img ref={imgRef} src={src} alt={alt} /> : <div>Loading...</div>;
}
```
Объяснение:
- `IntersectionObserver` позволяет запускать загрузку изображений только тогда, когда они попадают в область видимости, что экономит ресурсы и повышает производительность.
---
13. Использование `requestIdleCallback` для отсрочки задач
⌛ Задача: Использование `requestIdleCallback` для выполнения задач, когда браузер не занят рендерингом.
🎯 Решение:
```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Task executed during idle time');
  });
}
```
Объяснение:
- `requestIdleCallback` позволяет запускать функции, когда браузер не занят рендерингом, что помогает не блокировать основной поток выполнения.
---
14. Пре-рендеринг для серверного рендеринга (SSR)
⌛ Задача: Использование серверного рендеринга для уменьшения времени до первого рендера.
🎯 Решение:
```javascript
import ReactDOMServer from 'react-dom/server';
import App from './App';

const html = ReactDOMServer.renderToString(<App />);
console.log(html);
```
Объяснение:
- SSR позволяет рендерить приложение на сервере, уменьшая время до первого рендера и улучшая SEO.
---
15. Использование Web Workers для обработки данных в фоновом режиме
⌛ Задача: Использование Web Workers для выполнения сложных вычислений в фоновом потоке.
🎯 Решение:
```javascript
const worker = new Worker('worker.js');

worker.onmessage = function (e) {
  console.log('Message from worker:', e.data);
};

worker.postMessage('Start heavy task');
```
Объяснение:
- Web Workers позволяют выполнять ресурсоемкие задачи в фоновом потоке, не блокируя основной поток выполнения приложения.
