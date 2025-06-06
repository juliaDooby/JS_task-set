---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
7. Использование `watchEffect` для наблюдения за реактивными данными (Vue 3)
⌛ Задача: Создайте компонент, который будет отслеживать изменение данных и выполнять побочные эффекты.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="count" />
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);

    watchEffect(() => {
      console.log(`Count has changed to: ${count.value}`);
    });

    return { count };
  },
};
</script>
```
Объяснение:
- `watchEffect` автоматически отслеживает реактивные данные и выполняет побочные эффекты при их изменении.
---------------------------------------------------------------------------------------------  
