// Подключение модуля реакт
import React from "react";
import App from "../../App";

// Создание компонента
class AnraHeader extends React.Component {

    // Обязательная функция, которая отвечает за вывод компонента
    // То, как он будет отображаться
    render() {
        return (
            <header>
                <h1>Ласкаво просимо на сайт</h1>
            </header>
        )
    }
}

export default AnraHeader;