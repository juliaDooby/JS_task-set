---------------------------------------------------------------------------------------------
26
⋙ ❍ Реализуйте функцию преобразования URL query строки в JSON?
---
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
function queryObjectify(arg) {
// ??
}
queryObjectify(inData)
 Результатом выполнения для входной строки должен быть следующий объект
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};

Для преобразования URL-запроса в JSON можно использовать циклы и разбиение строки на подстроки. Вот один из способов реализации этой функции:
```javascript
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
    const result = {};

    // Разбить строку по символу '&', чтобы получить отдельные пары ключ-значение
    const pairs = arg.split('&');

    pairs.forEach(pair => {
        // Разбить каждую пару по символу '=', чтобы получить ключ и значение
        const [key, value] = pair.split('=');

        // Разделить ключ на уровни объекта и создать структуру JSON
        const keys = key.split('.');

        let current = result;
        keys.forEach((key, index) => {
            // Проверить, существует ли уже объект с этим ключом
            if (!current[key]) {
                // Если объект не существует, создать новый объект или массив
                current[key] = index === keys.length - 1 ? decodeURIComponent(value) : {};
            }
            // Перейти к следующему уровню объекта
            current = current[key];
        });
    });

    return result;
}

console.log(queryObjectify(inData));
```
Эта функция разбивает URL-запрос на отдельные пары ключ-значение, затем разбивает каждую пару на ключи и значения. Далее она создает структуру JSON, соответствующую ключам и значениям. При этом значения URL-кодируются с помощью `decodeURIComponent()`, чтобы преобразовать закодированные символы (%20 и др.) обратно в их исходное представление.
---------------------------------------------------------------------------------------------
