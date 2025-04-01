---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
0. Реактивность данных в Vue 2 и Vue 3
⌛ Задача: Объясните, как работает реактивность в Vue и создайте компонент, который обновляет текст на основе изменения переменной.
🎯 Решение:
```vue
<!-- Vue 2 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
};
</script>
```

```vue
<!-- Vue 3 -->
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!');
    return { message };
  },
};
</script>
```
Объяснение:
- В Vue 2 используется `data`, а в Vue 3 — `ref` для создания реактивных переменных.
- В обоих случаях используется `v-model` для двусторонней привязки данных.
---------------------------------------------------------------------------------------------  
