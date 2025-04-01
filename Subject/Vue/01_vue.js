---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
1. Использование `v-if` и `v-show`
⌛ Задача: Создайте компонент, который отображает сообщение на основе значения переменной, используя `v-if` и `v-show`.
🎯 Решение:
```vue
<template>
  <div>
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">This is a conditionally rendered message (v-if)</p>
    <p v-show="isVisible">This is a conditionally rendered message (v-show)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
```
Объяснение:
- `v-if` полностью удаляет элемент из DOM при условии, в то время как `v-show` лишь скрывает его с помощью CSS.
---------------------------------------------------------------------------------------------  
