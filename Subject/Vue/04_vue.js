---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
4. Создание компонента с пропсами и событиями
⌛ Задача: Создайте компонент, который принимает данные через пропс и отправляет событие обратно в родительский компонент.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" @updateMessage="handleUpdate" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
    };
  },
  methods: {
    handleUpdate(newMessage) {
      this.parentMessage = newMessage;
    },
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Parent Message</button>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    updateMessage() {
      this.$emit('updateMessage', 'Updated message from child!');
    },
  },
};
</script>
```
Объяснение:
- В родительском компоненте передаётся пропс `message` в дочерний.
- Дочерний компонент отправляет событие `updateMessage`, которое обрабатывается в родительском компоненте.
---------------------------------------------------------------------------------------------  
