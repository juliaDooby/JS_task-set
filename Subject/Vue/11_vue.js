---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
11. Отправка формы с использованием `v-model`
⌛ Задача: Создайте форму для отправки данных, используя `v-model` для привязки данных.
🎯 Решение:
```vue
<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Username" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.username, this.email);
    },
  },
};
</script>
```
Объяснение:
- Используем `v-model` для двусторонней привязки данных формы с переменными компонента.
---------------------------------------------------------------------------------------------  
