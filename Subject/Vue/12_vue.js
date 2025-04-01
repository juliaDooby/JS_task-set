---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
12. Асинхронные действия с `async`/`await` в Vue 3
⌛ Задача: Сделайте асинхронный запрос к API и отображайте данные.
🎯 Решение:
```vue
<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      data.value = await response.json();
      loading.value = false;
    });

    return { data, loading };
  },
};
</script>
```
Объяснение:
- Используется `async`/`await` для асинхронной загрузки данных в компонент Vue 3.
---------------------------------------------------------------------------------------------  
