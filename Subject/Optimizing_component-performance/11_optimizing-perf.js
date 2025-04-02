---------------------------------------------------------------------------------------------  
⋙ ❍ Оптимизация производительности компонентов (мемоизация, разбиение кода, предотвращение лишних ререндеров):
---
11. Использование `Intersection Observer` для ленивой загрузки
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
---------------------------------------------------------------------------------------------  
