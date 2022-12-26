Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[Зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).

Для стилізації компонентів була використана бібліотека Styled Components
(https://styled-components.com/).

Для імітації бази даних користувачів був використаний масив об'єктів, які
зберігаються у файлі user.json.

Вся логіка проекту прописана у компоненті ItemUsers.jsx. Враховуючи, що картка
юзера може бути тiльки в двох станах (true або false), ці значення по кожній
картці записуються до local storage при зміні та зчитуються при оновленні
сторінки.
