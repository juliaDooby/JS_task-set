---------------------------------------------------------------------------------------------  
⋙ ❍ Vue 2 и/или Vue 3 (реактивность, Composition API):
---
6. Использование `provide` и `inject` для передачи данных между компонентами
⌛ Задача: Используйте `provide` и `inject` для передачи данных от родительского компонента к дочерним.
🎯 Решение:
```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    provide('message', 'Hello from Parent');
  },
};
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return { message };
  },
};
</script>
```
Объяснение:
- `provide` используется в родительском компоненте для передачи данных.
- `inject` позволяет дочернему компоненту получить доступ к данным.
---------------------------------------------------------------------------------------------  
