---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
3. Использование `v-model` для двухсторонней привязки данных
⌛ Задача: Создайте компонент с двумя полями ввода, где одно обновляет значение другого через `v-model`.
🎯 Решение:
```vue
<template>
  <div>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ firstName }} {{ lastName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
};
</script>
```
Объяснение:
- `v-model` позволяет синхронизировать данные между полями ввода и переменными.
---------------------------------------------------------------------------------------------  
