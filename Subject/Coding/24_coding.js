---------------------------------------------------------------------------------------------
⋙ ❍ Реализуйте таблицу с виртуальным скроллом?
---
24. Для создания таблицы с виртуальным скроллом в React можно воспользоваться библиотеками или реализовать это самостоятельно. Вот пример простой реализации таблицы с виртуальным скроллом без использования сторонних библиотек:
```javascript
import React, { useState, useEffect, useRef } from 'react';

const VirtualizedTable = ({ data, rowHeight, visibleRowCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const tableRef = useRef();

  const handleScroll = () => {
    const scrollTop = tableRef.current.scrollTop;
    const startIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(startIndex);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
      return () => {
        tableRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const visibleData = data.slice(startIndex, startIndex + visibleRowCount);

  return (
    <div style={{ height: `${rowHeight * visibleRowCount}px`, overflow: 'auto' }} ref={tableRef}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VirtualizedTable;
```
Этот компонент принимает данные `data`, высоту строки `rowHeight` и количество видимых строк `visibleRowCount`. Он использует состояние для отслеживания индекса начальной строки, а затем рендерит только видимые строки на основе этого индекса и количества видимых строк. Когда пользователь прокручивает таблицу, обработчик `handleScroll` обновляет начальный индекс в соответствии с положением прокрутки.
---------------------------------------------------------------------------------------------
