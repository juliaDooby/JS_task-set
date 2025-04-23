---------------------------------------------------------------------------------------------  
⋙ ❍ Интеграция:
---
4. Интеграция с Stripe (платежи)
⌛ Задача: Реализуйте кнопку для оплаты через Stripe.
🎯 Решение:
1. Установите Stripe SDK:
```bash
npm install @stripe/stripe-js
```
2. Используйте `Stripe.js` для создания платежной формы:
```javascript
import { loadStripe } from '@stripe/stripe-js';

let stripe;
let elements;

async function initializeStripe() {
  stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
  elements = stripe.elements();
  const cardElement = elements.create('card');
  cardElement.mount('#card-element');
}

async function handlePayment() {
  const { token, error } = await stripe.createToken(elements.getElement('card'));
  if (error) {
    console.error('Payment error:', error);
  } else {
    console.log('Payment token:', token);
  }
}
```
Объяснение: Мы используем Stripe для создания элемента карты и обработки платежа. Полученный токен можно отправить на сервер для завершения транзакции.
---------------------------------------------------------------------------------------------  
